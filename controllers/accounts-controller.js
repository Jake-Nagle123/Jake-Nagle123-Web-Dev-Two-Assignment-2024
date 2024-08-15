import { userStore } from "../models/user-store.js";
import { users } from "../models/users.js";

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
    };
    response.render("login-view", viewData);
  },
  
  logout(request, response) {
    response.cookie("station", "");
    response.redirect("/");
  },
  
  signup(request, response) {
    const viewData = {
      title: "Login to the Service",
    };
    response.render("signup-view", viewData);
  },
  
  async register(request, response) {
    const user = request.body;
    await userStore.addUser(user);
    console.log(`registering ${user.email}`);
    response.redirect("/");
  },
  
  async authenticate(request, response) {
    const user = await userStore.getUserByEmail(request.body.email);
    if (user) {
      response.cookie("station", user.email);
      console.log(`logging in ${user.email}`);
      response.redirect("/dashboard");
    } else {
      response.redirect("/login");
    }
  },
  
  async getLoggedInUser(request) {
    const userEmail = request.cookies.station;
    return await userStore.getUserByEmail(userEmail);
  },
  
  
  async viewUpdatePage(request, response) {
    const id = request.params._id;
    const firstname = request
    const usernameId = request.params.user;
    const passwordId = request.params.password;
    console.log(`Editing username ${usernameId} and {passwordId}`);
    const viewData = {
      title: "Edit User Details",
      user: await userStore.getUserById(id),
    };
    response.render("listdetails", viewData);
  },
  
  async update(request, response) {
    const userId = request.params.userid;
    const updatedUser = {
      firstName: request.body.firstName,
      secondName: request.body.secondName,
      email: request.body.email,
      password: request.body.password,
    };
    console.log(`Updating user ${userId} details`);
    const user = await userStore.getUserById(userId);
    await userStore.updateUser(user, updatedUser);
    response.redirect("/dashboard" + userId);
  },
};
