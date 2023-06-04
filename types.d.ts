type Shop = {
  _id: string;
  name: string;
};

type Product = {
  _id: string;
  title: string;
  price: number;
  imageURL: string;
  shopId: string;
};

type CartItemDeprecated = {
  product: Product;
  quantity: number;
};

type ProductID = Pick<Product, "_id">;
type LSCartItem = Omit<Product, "shopId"> & { quantity?: number };
type RequiredLSCartItem = Required<LSCartItem>;

type CartItem = {
  productID: string;
  quantity: number;
};

type Order = {
  credentials: Credentials;
  purchases: CartItem[];
  totalPrice: number;
};

type Credentials = {
  name: string;
  email: string;
  phone: string;
  address: string;
};

type User = {
  _id: string;
} & Credentials;
