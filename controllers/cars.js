

const car = require("../models/car");


// Display home page :

const home = async (req, res) => {
  res.render("index.ejs");
};

const index = async (req, res) => {
  const foundCar = await car.find();
  res.render("./cars/home.ejs", { cars: foundCar });
};


const newCar = async (req, res) => {
  res.render("./cars/new.ejs");
};

//   const show = async (req, res) => {
//     const foundCar = await car.findById(req.params.CarId);
//     res.render("./cars/show.ejs", { cars: foundCar });
// };





const create = async (req, res) => {
  if (req.body.isElectric === "on") {
    req.body.isElectric = true;      //  change value from on to true in DataBase ;
  } else {
    req.body.isElectric = false;    //  change value from off to false in DataBase ;
  }
  await car.create(req.body);
  res.redirect("/cars"); // redirect to index fruits
};


const edit = async(req,res) => {
  const foundCar = await car.findById(req.params.CarId);
      res.render("cars/edit.ejs", {cars: foundCar});
};

const update = async (req, res) => {
  if (req.body.isElectric === "on") {
    req.body.isElectric = true;
  } else {
    req.body.isElectric = false;
  }

  await car.findByIdAndUpdate(req.params.CarId, req.body);
  res.redirect(`/cars/${req.params.CarId}`);
};


module.exports = {
  // show,
  home,
  newCar,
  index,
  // deletePage,
  edit,
  update,
  create,

};