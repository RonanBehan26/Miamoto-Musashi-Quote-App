package com.example.Musashi.model;

import lombok.*;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Setter
@Getter
@Builder
public class QuoteDTO {

    private Long quoteId;

    private String quoteTitle;

    private String quoteText;

}
