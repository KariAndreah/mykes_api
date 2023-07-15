'use strict';

import express from 'express';

const router = express.Router(); 

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
router.get('/', (req, res) => {
    console.log(openMics);
    res.send(openMics)
})

export default router; 