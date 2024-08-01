package com.example.database;

import lombok.AllArgsConstructor;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Controller
@AllArgsConstructor
@RequestMapping
public class JpaController {
    private final OrderService orderService;

    @GetMapping("/hi")
    @ResponseBody
    public String getSimpleGet() {
        return orderService.hiFromService();
    }

    @GetMapping("/f")
    @ResponseBody
    public List<ItemOrder> getAllItemOrders() {
        return orderService.loadAllOrderItems();
    }

    @GetMapping("/f1")
    @ResponseBody
    public ItemOrder getOrderItemById(@RequestParam long id) {
        return orderService.loadById(id);
    }

    @PostMapping("/a")
    @ResponseBody
    public ItemOrder saveItemOrder(@RequestBody ItemOrder itemOrder) {
        return orderService.save(itemOrder);
    }

    @PatchMapping("/u")
    @ResponseBody
    public ItemOrder updateItemOrder(@RequestBody ItemOrder itemOrder) {
        return orderService.update(itemOrder);
    }

    @PatchMapping("/ud")
    @ResponseBody
    public int updateDesc(@RequestParam String newDesc, @RequestParam long id) {
        return orderService.updateDesc(newDesc, id);
    }


    @DeleteMapping("/d")
    @ResponseBody
    public boolean deleteItemOrder(@RequestParam long id) {
        return orderService.delete(id);
    }
}
