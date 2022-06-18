import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";
/**
 * User Database can be added here.
 * You can add default users of your wish with different attributes
 * Every user will have cart (Quantity of all Products in Cart is set to 1 by default), wishList by default
 * */

export const users = [

  {
    _id: uuid(),
    firstName: "Sameep",
    lastName: "Sharma",
    email: "sam@gmail.com",
    password: "p123",
    addresses: [{
      addName: "Home",
      adddress: "H.no-XX Sec-XX Trikuta Nagar, Jammu",
      pinCode: 180001,
      phone: 9293844856
    }],
    orders: [],
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
];
