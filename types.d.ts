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

type CartItem = {
  product: Product;
  quantity: number;
};

type Order = {
  orderDetails: Contacts;
  items: CartItem[];
  totalSum: number;
};

type Contacts = {
  name: string;
  email: string;
  phone: string;
  address: string;
};

type User = {
  _id: string;
} & Contacts;
