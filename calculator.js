// jshint esversion:6

// require express
const express = require("express");
const app = express();

// require body parser
const bodyParser = require("body-parser");

// get the app to use body-parser
app.use(express.urlencoded({extended: true}));

// create home route
app.get("/", function(req, res){
    res.sendFile(__dirname + "/index.html");
});

app.post ("/", function(req, res){

    var num1 = Number(req.body.n1);
    var num2 = Number(req.body.n2);

    var result = num1 + num2;

    res.send("According to my teeny tiny calculations, the answer is " + result);
});

app.get("/bmiCalculator", function(req, res){
  res.sendFile(__dirname + "/bmiCalculator.html");
});

app.post("/bmiCalculator", function(req, res){
    var height = parseFloat(req.body.height);
    var weight = parseFloat(req.body.weight);

    var bmi = Math.floor((weight * 703) / (height * height));

      if(bmi < 18.5){
        res.send("You are a delightful and mischievous pixie but your BMI is " + bmi + " and you are underweight.");
      }else if (bmi < 25){
        res.send("Your BMI is " + bmi + " and you are a glorious sunfish!");
      }else if (bmi < 30){
        res.send("Your BMI is " + bmi + " and, while you are technically overweight, we think you are a rainbow infused space unicorn!");
      }else{
        res.send("Your BMI is " + bmi + " and, according to math (which we all agree is dumb) your BMI means you are obese, but we think you are a gorgeous mer-person just waiting to bask in the sunlight!");
      }; 
});

// spin up the server
app.listen(3000, function(){
    console.log("server started on port 3000");
});
