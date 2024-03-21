// src/controllers/authController.js
import Customer from "../models/customerModel.js";
import dotenv from "dotenv";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
dotenv.config();

const authController = {
  register: async (req, res) => {
    const { customer_name, email, password } = req.body;

    try {
      // Hash password
      const hashedPassword = await bcrypt.hash(req.body.password, 10);

      // Create customer
      const customer = await Customer.create({
        customer_name,
        email,
        password: hashedPassword,
      });

      // Omit the password when returning the user
      const { password, ...customerData } = customer.toJSON();

      res.status(201).send(customerData);
    } catch (error) {
      res.status(400).send(error.message);
    }
  },

  login: async (req, res) => {
    const { email, password } = req.body;

    try {
      const customer = await Customer.findOne({ where: { email: email } });
      console.log("customer", customer);
      if (!customer) {
        return res.status(404).send("User not found");
      }

      const isMatch = await bcrypt.compare(password, customer.password);

      if (!isMatch) {
        return res.status(400).send("Incorrect password");
      }

      // Generate JWT token
      const token = jwt.sign(
        { id: customer.customer_id },
        process.env.JWT_SECRET,
        { expiresIn: "12h" }
      );

      res.send({ token });
    } catch (error) {
      res.status(500).send(error.message);
    }
  },
};

export default authController;
