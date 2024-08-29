package com.example.mainMenu;

import com.example.database.JpaController;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.ui.Model;

@Controller
@AllArgsConstructor
@RequestMapping
public class MainController {

    @Autowired
    JpaController jpaController;

    @GetMapping("/")
    public String home(Model model) {
        model.addAttribute("message", "Witaj w mojej aplikacji Spring Boot!");
        model.addAttribute("apiResponse", callMyApiEndpoint());
        return "main";
    }

    private String callMyApiEndpoint() {
        return "To jest wynik wywołania mojego API!";
    }
}
