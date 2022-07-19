const express = require("express");
const https = require("https");
const bodyParser = require("body-parser");

const app = express();

// code needed to use body parser to parse post request is below:

app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res){
    res.sendFile(`${__dirname}/index.html`);
})

app.post("/", function(req, res){
    
    const query = (req.body.cityName);
    const apiKey = "2e59640a4375c448288310262cfd1b05";
    const units = "imperial"
    const url = "https://api.openweathermap.org/data/2.5/weather?q=" + query + "&appid=" + apiKey + "&units=" + units +"";

    https.get(url, function(response){
        console.log(response.statusCode);

        response.on("data", function(data){
            const weatherData = JSON.parse(data);
            const temp = weatherData.main.temp;
            const weatherDescription = weatherData.weather[0].description;
            const feelsLike = weatherData.main.feels_like;
            const icon = weatherData.weather[0].icon;
            const iconUrl = "http://openweathermap.org/img/wn/" + icon + "@2x.png";
            res.write("<H1>The current temperature in " + query + " is " + temp + " degrees farenheit but it feels like " +feelsLike + " degrees.</H1>");
            res.write("<H3>Get out there and enjoy the " + weatherDescription + " conditions!</H3>")
            res.write("<img src=" + iconUrl + ">");
            res.send();
    })
})
})



app.listen(3000, function() {
    console.log("server is running on port 3000");
})