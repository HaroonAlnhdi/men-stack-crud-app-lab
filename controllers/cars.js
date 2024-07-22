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
    await cars.create(req.body);      // add these input from (form) to DB..
    // res.redirect("/fruits/new");      // نستخدمة بعد ارسال البيانات عشان مايكرر العملية عدة مرات في قاعدة البيانات  -يضمن ان العملية تتنفذ مرة  بعد ضغط ارسال 
    res.redirect("/cars"); // redirect to index fruits
  };



  module.exports = {
    // show,
    home,
    newCar,
    index,
    // deletePage,
    // edit,
    // update,
    create,

    };