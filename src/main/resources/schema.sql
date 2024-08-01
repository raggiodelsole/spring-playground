CREATE TABLE IF NOT EXISTS item_order (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50),
    description VARCHAR(200),
    price DECIMAL(10, 2) NOT NULL,
    order_date_time TIMESTAMP NOT NULL
);