package com.example.example.controller;

import com.example.example.entity.Books;
import com.example.example.service.BooksService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class BooksController {
    @Autowired
    private BooksService booksService;

    @GetMapping("/books")
    public ResponseEntity<List<Books>> getAllBooks(){
        return booksService.getAllBooks();
    }

    @GetMapping("/getbyid/{id}")
    public ResponseEntity<Books> getById(@PathVariable("id") int id){
        return booksService.getById(id);
    }

    @GetMapping("/categories/{category}")
    public ResponseEntity<List<Books>> getByCategory(@PathVariable("category") String category){
        return booksService.getByCategory(category);
    }
    @GetMapping("/search/{book}")
    public ResponseEntity<Books> searchBook(@PathVariable("book") String book){
        return booksService.getByName(book);
    }
}
