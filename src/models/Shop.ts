import { Schema, model, models } from "mongoose";

const ShopSchema = new Schema({
  name: {
    type: String,
    required: [true, "Shop name is required"],
  },
});

export const Shop = models.Shop || model("Shop", ShopSchema);
