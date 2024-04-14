package com.example.Musashi.entities;

import jakarta.persistence.*;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity //works with JPA to save the data in the DB
@Data //getters and setters, and all methods added from Lombok
@Table(name = "quote")
@NoArgsConstructor
public class QuoteEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    @Column(name= "quote_id")
    private Long quoteId;

    @Column(name= "quote_title", length = 255)
    private String quoteTitle;

    @Column(name= "quote_text", length = 255)
    private String quoteText;

    public void EmployeeEntity(Long quoteId, String quoteTitle, String quoteText) {
        this.quoteId = quoteId;
        this.quoteTitle = quoteTitle;
        this.quoteText = quoteText;
    }
}