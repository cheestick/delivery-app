import { Schema, model, models } from "mongoose";

const ProductSchema = new Schema({
  title: {
    type: String,
    required: [true, "Product name is required"],
  },
  price: {
    type: Number,
    required: [true, "Price is required"],
  },
  imageURL: {
    type: String,
    default: "",
  },
  shopID: {
    type: Schema.Types.ObjectId,
    required: [true, "shop id is required"],
  },
});

export const Product = models.Product || model("Product", ProductSchema);
