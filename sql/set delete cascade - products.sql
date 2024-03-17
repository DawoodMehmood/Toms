ALTER TABLE products DROP FOREIGN KEY products_ibfk_1;
ALTER TABLE products
ADD CONSTRAINT fk_products_subcategories
FOREIGN KEY (subcategory_id) REFERENCES subcategories(subcategory_id)
ON DELETE CASCADE;
