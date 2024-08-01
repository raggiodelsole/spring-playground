package com.example.database;

import jakarta.transaction.Transactional;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.ListCrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface OrderItemRepository extends ListCrudRepository<ItemOrder, Long> {
    @Modifying
    @Transactional
    @Query(value = "update item_order set description = :desc where id= :id ", nativeQuery = true)
    int updateDesc(@Param("desc") String desc, @Param("id") long id);
}
