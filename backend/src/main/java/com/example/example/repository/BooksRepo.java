package com.example.example.repository;

import com.example.example.entity.Books;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;
import java.util.Optional;

public interface BooksRepo extends JpaRepository<Books, Integer> {

    @Query(value = "SELECT * FROM books ORDER BY RAND()", nativeQuery = true)
    List<Books> findAll();

    List<Books> findByCategory(String category);

    @Query(value = "SELECT * FROM books WHERE name LIKE %:name%", nativeQuery = true)
    Optional<Books> findByName(@Param("name") String book);

}
