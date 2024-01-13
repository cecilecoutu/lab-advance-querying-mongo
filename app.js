require("dotenv").config();
const mongoose = require("mongoose");

const companiesSchema = new mongoose.Schema({
  name: "string",
  founded_year: "number",
}); // Definition de la collection
const Companies = mongoose.model("Companies", companiesSchema); // Definition du model

function getAllCompanies() {
  return mongoose
    .connect(`${process.env.DB_URL_PROD}`) // Connection à la bdd my_database
    .then((elt) =>
      console.log(
        `Connected to Mongo! Database name: ${elt.connections[0].name}`
      )
    )
    .then(() => Companies.find())
    .then((companies) => console.log("All Compagnies was successfully display", companies))
    .then(() => mongoose.connection.close())
    .catch((err) => console.log("Error connection to mongo", err));
}

getAllCompanies();