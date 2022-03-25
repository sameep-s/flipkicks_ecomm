import { v4 as uuid } from "uuid";

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [
  {
    _id: uuid(),
    image: "https://images.unsplash.com/photo-1610870372593-a8647b04451f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    title: "You Can't WIN",
    author: "Shiv Khera",
    price: 5000,
    brand: "nike",
    size: 6,
    categoryName: "non-fiction",
  },
  {
    _id: uuid(),
    image: "https://images.unsplash.com/photo-1610870372593-a8647b04451f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    title: "You are Winner",
    author: "Junaid Qureshi",
    price: 1000,
    brand: "jordan",
    size: 5,
    categoryName: "horror",
  },
  {
    _id: uuid(),
    image: "https://images.unsplash.com/photo-1610870372593-a8647b04451f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    title: "Think and Grow Rich",
    author: "Shiv Khera",
    price: 2000,
    brand: "nikelab",
    size: 9,
    categoryName: "fiction",
  },
];
