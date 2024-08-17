export const stationAnalytics = {
  getMaxTemp(station) {
    let maxTemp = null;
    if(station.reports.length > 0) {
      maxTemp = station.reports[0];
      for(let i = 1; i < station.reports.length; i++) {
        if(station.reports[i].temperature > maxTemp.temperature) {
          maxTemp = station.reports[i];
        }
      }
    }
    return maxTemp;
  },
  
  getMinTemp(station) {
    let minTemp = null;
    if (station.reports.length > 0) {
      minTemp = station.reports[0];
      for (let i = 1; i < station.reports.length; i++) {
        if(station.reports[i].temperature < minTemp.temperature) {
          minTemp = station.reports[i];
        }
      } 
    }
    return minTemp;
  },
  
  getMaxWindSpeed(station) {
   let maxWindSpeed = null;
    if(station.reports.length > 0) {
      maxWindSpeed = station.reports[0];
      for(let i = 1; i < station.reports.length; i++) {
        if(station.reports[i].windspeed > maxWindSpeed.windspeed) {
          maxWindSpeed = station.reports[i];
        }
      }
    }
    return maxWindSpeed;
  },
  
    getMinWindSpeed(station) {
    let minWindSpeed = null;
    if(station.reports.length > 0) {
      minWindSpeed = station.reports[0];
      for(let i = 1; i < station.reports.length; i++) {
        if(station.reports[i].windspeed < minWindSpeed.windspeed) {
          minWindSpeed = station.reports[i];
        }
      }
    }
    return minWindSpeed;
  },
  
  getMaxWindDirection(station) {
    let maxWindDirection = null;
    if(station.reports.length > 0) {
      maxWindDirection = station.reports[0];
      for(let i = 1; i < station.reports.length; i++) {
        if(station.reports[i].winddirection > maxWindDirection.winddirection) {
          maxWindDirection = station.reports[i];
        }
      }
    }
    return maxWindDirection;
  },
  
  getMinWindDirection(station) {
    let minWindDirection = null;
    if (station.reports.length > 0) {
      minWindDirection = station.reports[0];
      for (let i = 1; i < station.reports.length; i++) {
        if(station.reports[i].winddirection < minWindDirection.winddirection) {
          minWindDirection = station.reports[i];
        }
      } 
    }
    return minWindDirection;
  },

};