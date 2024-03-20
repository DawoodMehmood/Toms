import Product from "../models/productModel.js";

const productController = {
  // Create a new product
  createProduct: async (req, res) => {
    try {
      const product = await Product.create(req.body);
      res.status(201).send(product);
    } catch (error) {
      res.status(400).send(error);
    }
  },

  // Get all products
  getAllProducts: async (req, res) => {
    try {
      const products = await Product.findAll({
        where: {
          is_active: true,
        },
      });
      res.status(200).send(products);
    } catch (error) {
      res.status(400).send(error);
    }
  },

  // Get a single product by id
  getProductById: async (req, res) => {
    try {
      const product = await Product.findOne({
        where: {
          product_id: req.params.id,
          is_active: true,
        },
      });
      if (product) {
        res.status(200).send(product);
      } else {
        res.status(404).send({ message: "Product not found" });
      }
    } catch (error) {
      res.status(400).send(error);
    }
  },

  // Update a product
  updateProduct: async (req, res) => {
    try {
      const updateResult = await Product.update(req.body, {
        where: { product_id: req.params.id },
      });
      if (updateResult[0] > 0) {
        res.status(200).send({ message: "Product updated successfully" });
      } else {
        res.status(404).send({ message: "Product not found" });
      }
    } catch (error) {
      res.status(400).send(error);
    }
  },

  // Delete a product
  deleteProduct: async (req, res) => {
    try {
      const deleteResult = await Product.destroy({
        where: { product_id: req.params.id },
      });
      if (deleteResult) {
        res.status(200).send({ message: "Product deleted successfully" });
      } else {
        res.status(404).send({ message: "Product not found" });
      }
    } catch (error) {
      res.status(400).send(error);
    }
  },

  //   getProductDetailsWithVariants: async (req, res) => {
  //     try {
  //       const productId = req.params.id;

  //       // Fetch the main product by ID
  //       const product = await Product.findOne({
  //         where: {
  //           product_id: productId,
  //           is_active: true,
  //         },
  //       });
  //       if (!product) {
  //         return res.status(404).json({ message: "Product not found" });
  //       }

  //       // Ensure variant_ids is parsed as an array of numbers, since they're stored as strings
  //       // const variantIds = product.variant_ids.map((id) => parseInt(id));
  //       let variants = [];

  //       if (product.variant_ids && product.variant_ids.length > 0) {
  //         // Prepare variantIds for querying
  //         let variantIds;
  //         if (typeof product.variant_ids === "string") {
  //           // If it's a string (single ID), parse it and put it in an array
  //           variantIds = [parseInt(product.variant_ids)];
  //         } else if (Array.isArray(product.variant_ids)) {
  //           // If it's already an array, map through it and ensure all IDs are integers
  //           variantIds = product.variant_ids.map((id) => parseInt(id));
  //         }

  //         // Fetch the variant products based on variant_ids
  //         variants = await Product.findAll({
  //           where: {
  //             product_id: variantIds,
  //             is_active: true,
  //           },
  //           attributes: ["product_id", "product_name", "color_tile_image"],
  //         });
  //       }
  //       // Construct your response with both the main product and its variants
  //       res.json({
  //         product,
  //         variants,
  //       });
  //     } catch (error) {
  //       console.error("Error fetching product details and variants", error);
  //       res.status(500).json({
  //         message: "Error fetching product details and variants",
  //         error,
  //       });
  //     }
  //   },
};

export default productController;
