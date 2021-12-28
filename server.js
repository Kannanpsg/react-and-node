console.log("test");
const express = require("express");
const cors = require('cors');

const app = express();


app.use(cors({
  origin: '*'
}));

const PORT = 9000;


app.get("/api/banner", (request, response) => {
  const banners = 
[
  {
      "path": "../img/kerala.jpg",

  },{
      "path": "../img/flight.jpeg",

  },
  {
    "path": "../img/nature.jpeg",

},
{
  "path": "../img/dam.jpg",

},
{
      "path": "../img/boathouse.jpg",

  }
];



  response.json( banners );
});



app.listen(PORT, () => console.log("App is started in", PORT));
