import { Schema, model, models } from "mongoose";

const PurchaseSchema = new Schema({
  productID: {
    type: Schema.Types.ObjectId,
    required: [true, "Product ID is required"],
    ref: "Product",
  },
  quantity: {
    type: Number,
    required: [true, "Quantity is required"],
  },
});

const OrderSchema = new Schema({
  credentials: {
    name: {
      type: String,
      required: [true, "Name is required"],
    },
    email: {
      type: String,
      required: [true, "Email is required"],
    },
    phone: {
      type: String,
      required: [true, "Phone number is required"],
    },
    address: {
      type: String,
      required: [true, "Delivery address is required"],
    },
  },
  purchases: [PurchaseSchema],
  totalSum: {
    type: Number,
    required: [true, "Total sum is required"],
  },
});

export const Order = models.Order || model("Order", OrderSchema);
