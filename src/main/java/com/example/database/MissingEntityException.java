package com.example.database;

public class MissingEntityException extends RuntimeException{
    public MissingEntityException(String message){
        super(message);
    }
}
