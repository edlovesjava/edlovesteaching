package com.consulting.platform.tag.dto;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class TagResponse {
    private Long id;
    private String name;
    private String slug;
}
