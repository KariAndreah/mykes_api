'use strict';

import express from 'express';
import fs from 'fs';
import {parse} from 'csv-parse';

const sunday_mic = express.Router(); 



var csvData=[];
fs.createReadStream("data/csv/Sunday.csv")
    .pipe(parse({delimiter: ';'}))
    .on('data', function(csvrow) {
        console.log(csvrow);
        //do something with csvrow
        csvData.push(csvrow);        
    })
    .on('end',function() {
      //do something with csvData
      console.log(csvData);
    });

// const openMics = [
//     {
//         name: "Grisly Pear MacDougal",
//         time: "2:00 pm",
//         location : "Grisly Pear MacDougal",
//         host : "Espi Rivadeneira", 
//         cost: "5", 
//         SignupInstructions :"Show up, go up"
    
//     }
// ]

// all routes in here are starting with /mics


sunday_mic.get('/hiii', (req, res) => {
    console.log(csvData);
    res.send(csvData)
})

export default sunday_mic; 