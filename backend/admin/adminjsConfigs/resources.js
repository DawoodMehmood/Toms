import Product from "../../src/models/productModel.js";
import Category from "../../src/models/categoryModel.js";
import Color from "../../src/models/colorModel.js";
import Faqs from "../../src/models/faqsModel.js";
import Brand from "../../src/models/brandModel.js";
import Order from "../../src/models/orderModel.js";
import Customer from "../../src/models/customerModel.js";
import User from "../../src/models/userModel.js";
import CategoryOptions from "./category.js";
import Measurement from "../../src/models/measurementModel.js";
import ProductReview from "../../src/models/productReviewsModel.js";
import OrderStatus from "../../src/models/orderStatusModel.js";
import Size from "../../src/models/sizeModel.js";

const userNavigation = {
  name: "User Management",
  icon: "User",
};

const productNavigation = {
  name: "Inventory",
  icon: "Truck",
};

const productops = {
  listProperties: ["product_id", "product_name", "price", "is_active"],
  properties: {
    is_active: {
      position: 10,
    },
  },
};

const resources = [
  {
    resource: Brand,
    options: {
      navigation: {
        icon: "Tag",
      },
    },
  },
  {
    resource: Size,
    options: {
      navigation: {
        icon: "Crop",
      },
    },
  },
  {
    resource: Product,
    options: {
      navigation: {
        icon: "Gift",
      },
      ...productops,
    },
  },
  {
    resource: Order,
    options: {
      navigation: {
        icon: "ShoppingCart",
      },
    },
  },
  {
    resource: Category,
    options: {
      navigation: {
        icon: "Grid",
      },
      ...CategoryOptions,
    },
  },
  {
    resource: ProductReview,
    options: {
      navigation: {
        icon: "Star",
      },
      actions: {
        new: {
          // isAccessible: false,
        },
      },
    },
  },
  {
    resource: Customer,
    options: {
      navigation: userNavigation,
    },
  },
  {
    resource: OrderStatus,
    options: {
      navigation: {
        icon: "Clipboard",
      },
    },
  },
  {
    resource: User,
    options: {
      navigation: userNavigation,
      listProperties: ["name", "email"],
      editProperties: ["name", "email", "password"],
      showProperties: ["name", "email"],
      filterProperties: ["name", "email"],
      sort: {
        direction: "desc",
        sortBy: "created_at",
      },
    },
  },
  {
    resource: Color,
    options: {
      navigation: {
        icon: "Droplet",
      },
    },
  },
  {
    resource: Faqs,
    options: {
      navigation: {
        icon: "BookOpen",
      },
    },
  },
  {
    resource: Faqs,
    options: {
      navigation: {
        icon: "BookOpen",
      },
    },
  },
  Measurement,
];

export default resources;
