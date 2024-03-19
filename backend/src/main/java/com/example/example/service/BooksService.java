package com.example.example.service;

import com.example.example.entity.Books;
import com.example.example.repository.BooksRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class BooksService {

    @Autowired
    private BooksRepo booksRepo;
    public ResponseEntity<List<Books>> getAllBooks() {
        try{
            return new ResponseEntity<>(booksRepo.findAll(), HttpStatus.OK);
        }
        catch (Exception e){
            e.printStackTrace();
        }
        return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
    }

    public ResponseEntity<Books> getById(int id) {
        try {
            Optional<Books> optionalBooks = booksRepo.findById(id);
            if (optionalBooks.isPresent()) {
                return new ResponseEntity<>(optionalBooks.get(), HttpStatus.OK);
            } else {
                return new ResponseEntity<>(HttpStatus.NOT_FOUND);
            }
        } catch (Exception e) {
            // Log the full stack trace for debugging purposes
            e.printStackTrace();
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    public ResponseEntity<List<Books>> getByCategory(String category) {
        try{
            return new ResponseEntity<>(booksRepo.findByCategory(category), HttpStatus.OK);
        }
        catch(Exception e){
            e.printStackTrace();
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    public ResponseEntity<Books> getByName(String book) {
        try {
            Optional<Books> optionalBooks = booksRepo.findByName(book);
            if (optionalBooks.isPresent()) {
                return new ResponseEntity<>(optionalBooks.get(), HttpStatus.OK);
            } else {
                return new ResponseEntity<>(HttpStatus.NOT_FOUND);
            }
        } catch (Exception e) {
            // Log the full stack trace for debugging purposes
            e.printStackTrace();
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
