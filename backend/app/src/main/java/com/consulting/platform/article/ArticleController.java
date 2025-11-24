package com.consulting.platform.article;

import com.consulting.platform.article.dto.ArticleResponse;
import com.consulting.platform.common.dto.PagedResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/articles")
@CrossOrigin(origins = "*")
@RequiredArgsConstructor
public class ArticleController {

    private final ArticleService articleService;

    @GetMapping
    public ResponseEntity<PagedResponse<List<ArticleResponse>>> getAllArticles(
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "10") int size) {
        return ResponseEntity.ok(articleService.getAllPublished(page, size));
    }

    @GetMapping("/{slug}")
    public ResponseEntity<ArticleResponse> getArticleBySlug(@PathVariable String slug) {
        return ResponseEntity.ok(articleService.getBySlug(slug));
    }

    @GetMapping("/category/{slug}")
    public ResponseEntity<PagedResponse<List<ArticleResponse>>> getArticlesByCategory(
            @PathVariable String slug,
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "10") int size) {
        return ResponseEntity.ok(articleService.getByCategory(slug, page, size));
    }

    @GetMapping("/tag/{slug}")
    public ResponseEntity<PagedResponse<List<ArticleResponse>>> getArticlesByTag(
            @PathVariable String slug,
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "10") int size) {
        return ResponseEntity.ok(articleService.getByTag(slug, page, size));
    }
}
