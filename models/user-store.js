import { v4 } from "uuid";
import { initStore } from "../utils/store-utils.js";

const db = initStore("users");

export const userStore = {
  async getAllUsers() {
    await db.read();
    return db.data.users;
  },
  
  async addUser(user) {
    await db.read();
    user._id = v4();
    db.data.users.push(user);
    await db.write();
    return user;
  },
  
  async getUserById(id) {
    await db.read();
    return db.data.users.find((user) => user._id === id);
  },
  
  async getUserByEmail(email) {
    await db.read();
    return d
  }
  
}