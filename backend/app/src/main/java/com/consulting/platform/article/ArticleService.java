package com.consulting.platform.article;

import com.consulting.platform.article.dto.ArticleResponse;
import com.consulting.platform.common.dto.PagedResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
@Transactional(readOnly = true)
public class ArticleService {

    private final ArticleRepository articleRepository;

    public PagedResponse<List<ArticleResponse>> getAllPublished(int page, int size) {
        Pageable pageable = PageRequest.of(page, size);
        Page<Article> articlePage = articleRepository.findAllPublished(pageable);
        return mapToPagedResponse(articlePage);
    }

    public ArticleResponse getBySlug(String slug) {
        Article article = articleRepository.findBySlug(slug)
                .orElseThrow(() -> new RuntimeException("Article not found: " + slug));
        return mapToResponse(article);
    }

    public PagedResponse<List<ArticleResponse>> getByCategory(String categorySlug, int page, int size) {
        Pageable pageable = PageRequest.of(page, size);
        Page<Article> articlePage = articleRepository.findPublishedByCategory(categorySlug, pageable);
        return mapToPagedResponse(articlePage);
    }

    public PagedResponse<List<ArticleResponse>> getByTag(String tagSlug, int page, int size) {
        Pageable pageable = PageRequest.of(page, size);
        Page<Article> articlePage = articleRepository.findPublishedByTag(tagSlug, pageable);
        return mapToPagedResponse(articlePage);
    }

    private PagedResponse<List<ArticleResponse>> mapToPagedResponse(Page<Article> page) {
        List<ArticleResponse> articles = page.getContent().stream()
                .map(this::mapToResponse)
                .collect(Collectors.toList());

        PagedResponse.Pagination pagination = new PagedResponse.Pagination(
                page.getNumber(),
                page.getSize(),
                page.getTotalElements(),
                page.getTotalPages()
        );

        return new PagedResponse<>(articles, pagination);
    }

    private ArticleResponse mapToResponse(Article article) {
        ArticleResponse response = new ArticleResponse();
        response.setId(article.getId());
        response.setTitle(article.getTitle());
        response.setSlug(article.getSlug());
        response.setExcerpt(article.getExcerpt());
        response.setContent(article.getContent());
        response.setFeaturedImage(article.getFeaturedImage());
        response.setStatus(article.getStatus());
        response.setPublishedAt(article.getPublishedAt());
        response.setCreatedAt(article.getCreatedAt());
        response.setUpdatedAt(article.getUpdatedAt());
        response.setMetaTitle(article.getMetaTitle());
        response.setMetaDescription(article.getMetaDescription());

        // Calculate reading time (assuming 200 words per minute)
        if (article.getContent() != null) {
            int wordCount = article.getContent().split("\\s+").length;
            response.setReadingTimeMinutes(Math.max(1, wordCount / 200));
        }

        if (article.getCategory() != null) {
            ArticleResponse.CategorySummary category = new ArticleResponse.CategorySummary();
            category.setId(article.getCategory().getId());
            category.setName(article.getCategory().getName());
            category.setSlug(article.getCategory().getSlug());
            response.setCategory(category);
        }

        if (article.getTags() != null) {
            response.setTags(article.getTags().stream()
                    .map(tag -> {
                        ArticleResponse.TagSummary tagSummary = new ArticleResponse.TagSummary();
                        tagSummary.setId(tag.getId());
                        tagSummary.setName(tag.getName());
                        tagSummary.setSlug(tag.getSlug());
                        return tagSummary;
                    })
                    .collect(Collectors.toSet()));
        }

        return response;
    }
}
