const express = require("express");

const router = express.Router();

module.exports = router;

router.post("/",async(req,res)=> {

    console.log(req.body["Country"]);

    var country = req.body["Country"];

    console.log(country);
    
    try {
        const response = await fetch(`https://restcountries.com/v3.1/name/${country}?fullText=true`);
        //const headerDate = response.headers && response.headers.get('date') ? response.headers.get('date') : 'no response date';
        //console.log('Status Code:', response.status);
        //console.log('Date in Response header:', headerDate);

        if (response.status === 404){
          res.status(201).send('Not found');
        }
        else{
    
        const info = await response.json();
        //console.log(info[0]);
        res.json(info[0]);
        }
      } catch (err) {
        console.log(err.message); //can be console.error
      }

    
})


