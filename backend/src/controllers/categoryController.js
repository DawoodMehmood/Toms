import Category from "../models/categoryModel.js";
// import Product from "../models/productModel.js";

async function buildCategoryHierarchy() {
  const categories = await Category.findAll({
    where: {
      is_active: true,
    },
  });

  // Map to store categories by their ID for quick access
  const categoriesMap = new Map(
    categories.map((cat) => [
      cat.category_id,
      { ...cat.toJSON(), children: [] },
    ])
  );

  // Root categories are those without a parent_id
  let rootCategories = [];

  categories.forEach((cat) => {
    if (cat.parent_id) {
      const parent = categoriesMap.get(cat.parent_id);
      if (parent) {
        parent.children.push(categoriesMap.get(cat.category_id));
      }
    } else {
      rootCategories.push(categoriesMap.get(cat.category_id));
    }
  });

  return rootCategories;
}

const categoryController = {
  createCategory: async (req, res) => {
    try {
      const category = await Category.create(req.body);
      res.status(201).send(category);
    } catch (error) {
      res.status(400).send(error);
    }
  },

  getAllCategories: async (req, res) => {
    try {
      const categories = await Category.findAll({
        where: {
          is_active: true,
        },
      });
      res.status(200).send(categories);
    } catch (error) {
      res.status(400).send(error);
    }
  },

  getCategoryById: async (req, res) => {
    try {
      const category = await Category.findByPk(req.params.id);
      if (category) {
        res.status(200).send(category);
      } else {
        res.status(404).send({ message: "Category not found" });
      }
    } catch (error) {
      res.status(400).send(error);
    }
  },

  updateCategory: async (req, res) => {
    try {
      const updateResult = await Category.update(req.body, {
        where: { category_id: req.params.id },
      });
      if (updateResult[0] > 0) {
        res.status(200).send({ message: "Category updated successfully" });
      } else {
        res.status(404).send({ message: "Category not found" });
      }
    } catch (error) {
      res.status(400).send(error);
    }
  },

  deleteCategory: async (req, res) => {
    try {
      const deleteResult = await Category.destroy({
        where: { category_id: req.params.id },
      });
      if (deleteResult) {
        res.status(200).send({ message: "Category deleted successfully" });
      } else {
        res.status(404).send({ message: "Category not found" });
      }
    } catch (error) {
      res.status(400).send(error);
    }
  },
  // getProductsByCategoryId: async (req, res) => {
  //   try {
  //     const categoryId = req.params.categoryId;
  //     const products = await Product.findAll({
  //       where: {
  //         category_id: categoryId,
  //         is_active: true,
  //       },
  //     });
  //     res.json(products);
  //   } catch (error) {
  //     res
  //       .status(500)
  //       .send({ message: "Error fetching products by category", error });
  //   }
  // },

  getCategoryHierarchy: async (req, res) => {
    try {
      const hierarchy = await buildCategoryHierarchy();
      res.json(hierarchy);
    } catch (error) {
      console.error("Error fetching categories", error);
      res.status(500).json({ message: "Error fetching categories", error });
    }
  },
};

export default categoryController;
