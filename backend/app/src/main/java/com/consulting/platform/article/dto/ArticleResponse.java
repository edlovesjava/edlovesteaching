package com.consulting.platform.article.dto;

import com.consulting.platform.article.ArticleStatus;
import lombok.Data;

import java.time.LocalDateTime;
import java.util.Set;

@Data
public class ArticleResponse {
    private Long id;
    private String title;
    private String slug;
    private String excerpt;
    private String content;
    private String featuredImage;
    private ArticleStatus status;
    private CategorySummary category;
    private Set<TagSummary> tags;
    private LocalDateTime publishedAt;
    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;
    private String metaTitle;
    private String metaDescription;
    private Integer readingTimeMinutes;

    @Data
    public static class CategorySummary {
        private Long id;
        private String name;
        private String slug;
    }

    @Data
    public static class TagSummary {
        private Long id;
        private String name;
        private String slug;
    }
}
