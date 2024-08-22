# WeatherTop Assignment Briefing: Web Development 2
## Overview
The objective of the project is to create a weather station app using Javascript, Express/Handlebars and Glitch.

## Project Description
The deployed site has a welcoming page that guides users to register and then login to the extra features offered. Once logged in the user land on a page where they can add a station. The users can add multiple weather stations giving the station a title, latitude and longitude.

A station can be deleted or opened using icons. Once opened the station title, latitude and longitude will appear automatically. The title will appear at the top of the page, while the latitude and longitude will appear in the summary located at top of the page. 

The summary is one of key aspects of this project. The temperatures, wind speed, wind degrees, and pressure's, max and min and will all change automatically depending on the the input into the report details.

A report can be added by a user once a station is opened, and the following can be added: code, temperature, wind speed, wind direction-speed, wind direction-degrees, and pressure. The wind direction speed/degrees are a drop-down and the users preference must be selected. Once at least two reports have been added to one station, the max and min of each header mentioned will automatically fill in.

On the dashboard page, next to the add station button there is another icon. This is an icon that was intended to let the user edit their details including their first name, second name, email and password. However, after successfully completing the first step of linking the page to the icon, I could not get a function to work in order to update the users details completely. 

## Set up and run project
#### Needed for Project
* node
* glitch
* express
* Bulma

#### Copy Github project Url
* Click on code
* Copy HTTPS

#### Open account on Glitch
* Follow https://glitch.com/signup
* Sign up with your Github account

#### Glitch
* Click on "new project" button
* import from Github
* Paste in the copied Url

You now have a copied version of the project in Glitch

#### Glitch
* Once in Glitch open logs
* Open terminal, type: npm install

#### Project Dependencies:
* body-parser": ^1.20.2,
* cookie-parser: ^1.4.6,
* express: ^4.18.2,
* express-fileupload: ^1.4.0,
* express-handlebars: ^6.0.7,
* fs-extra: ^11.1.0,
* lowdb: ^5.1.0,
* uuid:^9.0.0

## Links
#### Links to my project
1. Github: git@github.com:Jake-Nagle123/Jake-Nagle123-Web-Dev-Two-Assignment-2024.git
2. Glitch: https://glitch.com/~weathertop-weather-station

#### Link used to begin project
1. https://github.com/wit-hdip-comp-sci-2023/web-dev-template

#### Helpful link
1. Bulma: https://bulma.io/documentation/

## License
MIT
