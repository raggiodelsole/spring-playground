package com.example.database;

import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Random;

@Service
@AllArgsConstructor
public class OrderService {
    private final OrderItemRepository orderItemRepository;

    public String hiFromService() {
        return "hi from service";
    }

    public List<ItemOrder> loadAllOrderItems() {
        return orderItemRepository.findAll();
    }

    public ItemOrder loadById(long id) {
        return orderItemRepository.findById(id).orElseThrow(() -> new MissingEntityException("Could not found item with id " + id));
    }

    public ItemOrder save(ItemOrder itemOrder) {
        return orderItemRepository.save(itemOrder);
    }

    public ItemOrder update(ItemOrder itemOrder) {
        return orderItemRepository.save(itemOrder);
    }

    public int updateDesc(String desc, long id) {
        orderItemRepository.findById(id).orElseThrow(() -> new MissingEntityException("Could not found item with id " + id));
        return orderItemRepository.updateDesc(desc, id);
    }

    public boolean delete(long id) {
        orderItemRepository.findById(id).orElseThrow(() -> new MissingEntityException("Could not found item with id " + id));
        orderItemRepository.deleteById(id);
        return true;
    }
}
