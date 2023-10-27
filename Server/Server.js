const fetch = require("node-fetch");
const express = require("express");

const PORT = process.env.PORT || 3001;



const app = express();
app.use(express.json({ extended: false }));
var cors = require("cors");
const corsOptions ={
    origin:'http://localhost:3000', 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200
}
app.use(cors(corsOptions));
app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});

app.use("/country", require("./routes/country"));

