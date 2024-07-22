

// import :
const dotenv = require("dotenv"); // require package
dotenv.config(); // Loads the environment variables from .env file
const express = require("express");
const mongoose = require("mongoose");
const car = require("./models/car")
const carsCtrl = require("./controllers/cars")
const methodOverride = require('method-override');
const morgan = require("morgan"); 


// APP
const app = express();
app.use(express.urlencoded({ extended: false }));

// Database :
mongoose.connect(process.env.MONGODB_URI);
// log connection status to terminal on start
mongoose.connection.on("connected", () => {
    console.log(`Connected to MongoDB ${mongoose.connection.name}.`);
});

// Mount it along with our other middleware, ABOVE the routes
app.use(express.urlencoded({ extended: false }));
app.use(methodOverride("_method")); // new
app.use(morgan("dev")); //new


// ROUTES :

app.get("/",carsCtrl.home )
app.get("/cars", carsCtrl.index)
app.get("/cars/new", carsCtrl.newCar)
app.post('/cars', carsCtrl.create)

app.get('/cars/:CarId', async (req, res) => {
    const foundCar = await car.findById(req.params.CarId);
    res.render("./cars/show.ejs", { cars: foundCar });
});

app.delete("/cars/:CarId", async (req, res) => {
    await car.findByIdAndDelete(req.params.CarId);
    res.redirect("/cars");
  });

app.get('/cars/:CarId/edit', carsCtrl.edit);
app.put('/cars/:CarId', carsCtrl.update);



app.listen(3000, () => {
    console.log("Listening on port 3000");
});