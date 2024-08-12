import { userStore } from "../models/user-store.js";

export const accountsController = {
  index(request, response) {
    const viewData = {
      title: "Login or Signup",
    };
    response.render("index", viewData);
  },
  
  login(request, response) {
    const viewData = {
      title: "Login to the Service",
    }
  }


};
