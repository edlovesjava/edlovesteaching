package com.consulting.platform.article;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface ArticleRepository extends JpaRepository<Article, Long> {

    Optional<Article> findBySlug(String slug);

    @Query("SELECT a FROM Article a WHERE a.status = 'PUBLISHED' ORDER BY a.publishedAt DESC")
    Page<Article> findAllPublished(Pageable pageable);

    @Query("SELECT a FROM Article a WHERE a.status = 'PUBLISHED' AND a.category.slug = :categorySlug ORDER BY a.publishedAt DESC")
    Page<Article> findPublishedByCategory(String categorySlug, Pageable pageable);

    @Query("SELECT a FROM Article a JOIN a.tags t WHERE a.status = 'PUBLISHED' AND t.slug = :tagSlug ORDER BY a.publishedAt DESC")
    Page<Article> findPublishedByTag(String tagSlug, Pageable pageable);
}
