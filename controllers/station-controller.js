import { stationStore } from "../models/station-store.js";
import { reportStore } from "../models/report-store.js";

export const stationController = {
  async index(request, response) {
    const station = await stationStore.getStationById(request.params.id);
    
    console.log(`loading minTemp`);
    
    let minTemp = null;
    if (station.reports.length > 0) {
      minTemp = station.reports[0];
      for (let i = 1; i < station.reports.length; i++) {
        if(station.reports[i].temperature < minTemp.temperature) {
          minTemp = station.reports[i].temperature;
        }
      }
    }
    console.log(minTemp);
    
    
    
    console.log(`loading maxTemp`);
    
    let maxTemp = null;
    if(station.reports.length > 0) {
      maxTemp = station.reports[0];
      for(let i = 1; i < station.reports.length; i++) {
        if(station.reports[i].temperature > maxTemp.temperature) {
          maxTemp = station.reports[i];
        }
      }
    }
    console.log(maxTemp);
    
    const viewData = {
      title: "Station",
      station: station,
      maxTemp: maxTemp,
    };
    response.render("station-view", viewData);
  },
  
  async addReport(request, response) {
    const station = await stationStore.getStationById(request.params.id);
    const newReport = {
      code: Number(request.body.code),
      temperature: Number(request.body.temperature),
      windspeed: Number(request.body.windspeed),
      winddirection: Number(request.body.winddirection),
      pressure: Number(request.body.pressure),
    };
    console.log(`adding report code ${newReport.code} + for ${station.title}`);
    await reportStore.addReport(station._id, newReport);
    response.redirect("/station/" + station._id);
  },
  
  async deleteReport(request, response) {
    const stationId = request.params.stationid;
    const reportId = request.params.reportid;
    console.log(`Deleting Report ${reportId} from Station ${stationId}`);
    await reportStore.deleteReport(reportId);
    response.redirect("/station/" + stationId);
  },
};