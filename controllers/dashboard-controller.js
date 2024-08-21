import { stationStore } from "../models/station-store.js";
import { accountsController } from "./accounts-controller.js";

export const dashboardController = {
  async index(request, response) {
    const loggedInUser = await accountsController.getLoggedInUser(request);
    const viewData = {
      title: "Station Dashboard",
      stations: await stationStore.getStationsByUserId(loggedInUser._id),
    };
    console.log("dashboard rendering");
    response.render("dashboard-view", viewData);
  },
  
  async addStation(request, response) {
    const loggedInUser = await accountsController.getLoggedInUser(request);
    const newStation = {
      title: request.body.title,
      latitude: request.body.latitude,
      longitude: request.body.longitude,
      userid: loggedInUser._id,
    };
    console.log(`adding station ${newStation.title}`);
    await stationStore.addStation(newStation);
    response.redirect("/dashboard");
  },
  
  async deleteStation(request, response) {
    const stationId = request.params.id;
    console.log(`Deleting Station ${stationId}`);
    await stationStore.deleteStationById(stationId);
    response.redirect("/dashboard");
  },
  
  
    async viewUpdatePage(request, response) {
    const userId = request.params.id;
    console.log(`Editing username ${userId}`);
    const viewData = {
      title: "Edit User Details",
      user: await userStore.getUserById(userId),
    };
    response.render("list-details", viewData);
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
