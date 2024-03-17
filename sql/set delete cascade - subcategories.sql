ALTER TABLE subcategories DROP FOREIGN KEY subcategories_ibfk_1;
ALTER TABLE subcategories
ADD CONSTRAINT fk_subcategories_categories
FOREIGN KEY (category_id) REFERENCES categories(category_id)
ON DELETE CASCADE;
