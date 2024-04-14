package com.example.Musashi.servicesImpl;

import com.example.Musashi.entities.QuoteEntity;
import com.example.Musashi.model.QuoteDTO;
import com.example.Musashi.repositories.QuoteRepository;
import com.example.Musashi.services.QuoteService;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Random;
import java.util.stream.Collectors;

@Service
public class QuoteServiceImpl implements QuoteService {

    @Autowired
    QuoteRepository quoteRepository;


//    @Autowired
//    private RestTemplate restTemplate;

    @Override
    public QuoteDTO createQuote(QuoteDTO quote) {
        QuoteEntity quoteEntity = new QuoteEntity();

        BeanUtils.copyProperties(quote, quoteEntity);
        quoteRepository.save(quoteEntity);

        return quote;
    }

    @Override //this works
    public List<QuoteDTO> getAllQuotes() {
        List<QuoteEntity> quotes = quoteRepository.findAll();

        List<QuoteDTO>quoteList = quotes.stream()
                .map(quote -> new QuoteDTO(
                        quote.getQuoteId(),
                        quote.getQuoteTitle(),
                        quote.getQuoteText()
                )).collect(Collectors.toList());

        return quoteList;
    }

    @Override
    public QuoteDTO getQuoteById(Long id) {
        QuoteEntity quoteEntity = quoteRepository.findById(id).get();

        QuoteDTO quoteDTO = new QuoteDTO();
        BeanUtils.copyProperties(quoteEntity, quoteDTO);

        return quoteDTO;
    }

    @Override
    public QuoteDTO getRandomQuote() {
        List<QuoteEntity> allQuotes = quoteRepository.findAll();
        if (!allQuotes.isEmpty()) {
            Random random = new Random();
            int randomIndex = random.nextInt(allQuotes.size());
            QuoteEntity randomQuoteEntity = allQuotes.get(randomIndex);
            QuoteDTO quoteDTO = new QuoteDTO();
            BeanUtils.copyProperties(randomQuoteEntity, quoteDTO);
            return quoteDTO;
        }
        return null; // Or throw an exception if necessary
    }

    @Override //works
    public boolean deleteQuote(Long id) {
        QuoteEntity quoteEntity = quoteRepository.findById(id).get();
        quoteRepository.delete(quoteEntity);
        return true;
    }

//    was "http://localhost:9002/api/v1/department/"
//    was able to change to "http://DEPARTMENT-SERVICE/api/v1/department/"
//    as the service is connected to the service registry, you set service name in the .yml
//    @Override
//    public ResponseTemplateVO getEmployeeById(Long id) {
//        EmployeeEntity employeeEntity = employeeRepository.findById(id).get();
//        ResponseTemplateVO vo = new ResponseTemplateVO();
//        Department department =
//                restTemplate.getForObject("http://DEPARTMENT-SERVICE/api/v1/department/"
//                        + employeeEntity.getDepartmentId(), Department.class);
//
//        EmployeeDTO employee = new EmployeeDTO();
//        BeanUtils.copyProperties(employeeEntity, employee);
//
//        vo.setEmployee(employee);
//        vo.setDepartment(department);
//        return vo;
//    }

    @Override //works
    public QuoteDTO updateQuote(Long id, QuoteDTO quote) {
        QuoteEntity quoteEntity = quoteRepository.findById(id).get();

        //quoteEntity.setQuoteId(quote.getQuoteId());
        quoteEntity.setQuoteTitle(quote.getQuoteTitle());
        quoteEntity.setQuoteText(quote.getQuoteText());

        quoteRepository.save(quoteEntity);

        return quote;
    }

}
