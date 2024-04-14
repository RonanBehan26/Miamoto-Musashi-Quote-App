package com.example.Musashi.services;

import com.example.Musashi.model.QuoteDTO;

import java.util.List;

public interface QuoteService {

    QuoteDTO createQuote(QuoteDTO quote);

    List<QuoteDTO> getAllQuotes();

    QuoteDTO getQuoteById(Long id);

    boolean deleteQuote(Long id);

    //ResponseTemplateVO getQuoteById(Long id);

    QuoteDTO updateQuote(Long id, QuoteDTO quote);

    QuoteDTO getRandomQuote();
}
