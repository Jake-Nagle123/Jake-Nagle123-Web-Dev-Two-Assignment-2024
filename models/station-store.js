import { v4 } from "uuid";
import { initStore } from "../utils/store-utils.js";

const db = initStore("stations");

export const stationStore = {
  async getAllStations() {
    await db.read();
    return db.data.stations;
  },
  
  async addStation(station) {
    await db.read();
    pla
  }
  
}