package com.example.Musashi.repositories;

import com.example.Musashi.entities.QuoteEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
//@Transactional
public interface QuoteRepository extends JpaRepository<QuoteEntity, Long> {

}
