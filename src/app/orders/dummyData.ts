type Order = {
  id: number;
  user: string;
  product: string;
  type: string;
  category: string;
  price: string;
  discount: string;
  amount: string;
  ship: string;
  status: string;
};

const dummyOrders: Order[] = [
  {
    id: 1,
    user: "Alice",
    product: "AxiU",
    type: "swap",
    category: "ebook",
    price: "100",
    discount: "FREE100",
    amount: "1 / AXI-1234",
    ship: "Yes",
    status: "done",
  },
  {
    id: 2,
    user: "Bob",
    product: "SigmaX",
    type: "purchase",
    category: "software",
    price: "200",
    discount: "-",
    amount: "1 / SIG-KEY",
    ship: "No",
    status: "undone",
  },
];

export default dummyOrders;
