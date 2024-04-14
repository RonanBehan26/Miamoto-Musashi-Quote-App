package com.example.Musashi.controllers;

import com.example.Musashi.model.QuoteDTO;
import com.example.Musashi.services.QuoteService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping(path = "/api/v1")
@CrossOrigin(origins = "*") //have a config class, which works globally as get works
@Slf4j
public class QuoteController {

    @Autowired
    private QuoteService quoteService;

    @PostMapping(value = "/quote")
    @ResponseBody //works
    public QuoteDTO createQuote(@RequestBody QuoteDTO quote){

        return quoteService.createQuote(quote);
    }
    //@RequestBody for postman I believe, all null without!!!!!!!!!!!!!

    @GetMapping("/quote") //works
    public List<QuoteDTO> getQuotes(){
        return quoteService.getAllQuotes();
    }

    //throws NotFoundException - new addition
    @DeleteMapping("/quote/{id}") //works
    public ResponseEntity<Map<String, Boolean>> deleteQuoteById(@PathVariable Long id) {
        boolean deleted = false;
        deleted = quoteService.deleteQuote(id);

        Map<String, Boolean> deletedMap = new HashMap();
        deletedMap.put("deleted", deleted);
        return ResponseEntity.ok(deletedMap);
    }

    @GetMapping("/quote/{id}")//works
    public QuoteDTO getQuoteById(@PathVariable Long id){
        return quoteService.getQuoteById(id);
    }

    //get random quote
    @GetMapping("/random/quote")//works
    public QuoteDTO getRandomQuote(){
        return quoteService.getRandomQuote();
    }

    @PutMapping("/quote/{id}") //works
    public ResponseEntity<QuoteDTO> updateQuoteById(@PathVariable Long id,
                                                          @RequestBody QuoteDTO quote){
        quote = quoteService.updateQuote(id, quote);
        return ResponseEntity.ok(quote);
    }

}
