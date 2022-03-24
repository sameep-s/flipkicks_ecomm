import { v4 as uuid } from "uuid";

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [
  {
    _id: uuid(),
    title: "You Can't WIN",
    author: "Shiv Khera",
    price: 5000,
    brand: "nike",
    size: 6,
    categoryName: "non-fiction",
  },
  {
    _id: uuid(),
    title: "You are Winner",
    author: "Junaid Qureshi",
    price: 1000,
    brand: "jordan",
    size: 5,
    categoryName: "horror",
  },
  {
    _id: uuid(),
    title: "Think and Grow Rich",
    author: "Shiv Khera",
    price: 2000,
    brand: "nikelab",
    size: 9,
    categoryName: "fiction",
  },
];
