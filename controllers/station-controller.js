import { stationStore } from "../models/station-store.js";
import { reportStore } from "../models/report-store.js";
import { stationAnalytics } from "../utils/station-analytics.js";

export const stationController = {
  async index(request, response) {
    const station = await stationStore.getStationById(request.params.id);
    const maxTemp = stationAnalytics.getMaxTemp(station);
    const minTemp = stationAnalytics.getMinTemp(station);
    const maxWindSpeed = stationAnalytics.getMaxWindSpeed(station);
    const minWindSpeed = stationAnalytics.getMinWindSpeed(station);
    
    console.log(`loading max Wind Direction`);
    let maxWindDirection = null;
    if(station.reports.length > 0) {
      maxWindDirection = station.reports[0];
      for(let i = 1; i < station.reports.length; i++) {
        if(station.reports[i].winddirection > maxWindDirection.winddirection) {
          maxWindDirection = station.reports[i];
        }
      }
    }
    console.log(maxWindDirection);
    
    
  
    console.log(`loading min`);
    let minWindDirection = null;
    if (station.reports.length > 0) {
      minWindDirection = station.reports[0];
      for (let i = 1; i < station.reports.length; i++) {
        if(station.reports[i].winddirection < minWindDirection.winddirection) {
          minWindDirection = station.reports[i];
        }
      } 
    }
    console.log(minWindDirection);
    
        
    const viewData = {
      title: "Station",
      station: station,
      maxTemp: maxTemp,
      minTemp: minTemp,
      maxWindSpeed: maxWindSpeed,
      minWindSpeed: minWindSpeed,
      maxWindDirection: maxWindDirection,
      minWindDirection: minWindDirection,
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