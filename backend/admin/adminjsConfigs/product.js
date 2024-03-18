// import Product from "../../src/models/productModel.js";
// import { Components } from "../components/components.js";

// const ProductAdminConfig = {
//   resource: Product,
//   options: {
//     actions: {
//       show: {
//         showInDrawer: true,
//       },
//     },
//     sort: {
//       sortBy: "createdAt",
//       direction: "desc",
//     },
//     listProperties: ["product_id", "product_name", "price", "is_active"],
//     // editProperties: [
//     //   "product_name",
//     //   "description",
//     //   "price",
//     //   "subcategory_id",
//     //   "flag",
//     //   "is_new_arrival",
//     //   "is_on_sale",
//     //   "is_active",
//     //   "discount_price",
//     //   "image_urls",
//     //   "is_tailorable",
//     //   "color_tile_image",
//     //   "variant_ids",
//     //   "product_details",
//     //   "size_and_fit",
//     //   "fabric",
//     // ],
//     filterProperties: ["product_id", "product_name", "is_active"],
//     properties: {
//       product_id: {
//         isVisible: { list: true, filter: true, show: true, edit: false },
//       },
//       product_name: {
//         // description: "Dress name etc",
//         position: 100,
//         isTitle: true,
//       },
//       subcategory_id: {
//         reference: "subcategories",
//         position: 150,
//       },
//       description: {
//         type: "richtext",
//         position: 200,
//       },
//       price: {
//         position: 250,
//       },
//       product_details: {
//         type: "richtext",
//         position: 300,
//         description: "Text to show when expanded",
//       },
//       size_and_fit: {
//         type: "richtext",
//         position: 350,
//         description: "Text to show when expanded",
//       },
//       flag: {
//         position: 400,
//       },
//       is_new_arrival: {
//         position: 510,
//       },
//       is_on_sale: {
//         position: 520,
//       },
//       is_tailorable: {
//         position: 530,
//       },
//       measurements: {
//         // type: "string",
//         // reference: "measurements",
//         position: 540,
//         components: {
//           edit: Components.MyMeasurementComponent,
//         },
//       },
//       is_active: {
//         // isVisible: { list: true, filter: true, show: true, edit: false },
//         position: 550,
//       },
//       discount_price: {
//         position: 600,
//       },
//       discount_percentage: {
//         position: 650,
//       },
//       image_urls: {
//         position: 700,
//       },
//       color_tile_image: {
//         position: 800,
//       },
//       variant_ids: {
//         reference: "products",
//         position: 900,
//       },
//       fabric: {
//         position: 1000,
//       },
//       // Other property customizations
//     },
//   },
// };

// export default ProductAdminConfig;
