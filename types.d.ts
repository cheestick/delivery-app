type Shop = {
  id: number;
  name: string;
};

type Product = {
  id: number;
  title: string;
  price: number;
  imageUrl: string;
  shopId: number;
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
  id: number;
} & Contacts;
