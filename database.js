import mysql from 'mysql';
import express from 'express';
import bodyParser from 'body-parser'; 
var sunday_mics = express();

sunday_mics.use(bodyParser.json())



pool.query(`select * from monday_mics`, (err, result, fields) =>{
    if(err){
        return console.log(err);
    }
    return result;
    res.send(result); 
});

mysqlConnection.connect((err)=> {
    if(!err)
    console.log('Connection Established Successfully');
    else
    console.log('Connection Failed!'+ JSON.stringify(err,undefined,2));
    });

sunday_mics.get('/sunday' , (req, res) => {
    mysqlConnection.query('SELECT * FROM sunday', (err, rows, fields) => {
        if (!err)
        res.send(rows);
        else
        console.log(err);
        })
    });

    sunday_mics.get('/sunday/manhattan' , (req, res) => {
        mysqlConnection.query('SELECT * FROM sunday WHERE borough = "Manhattan"', (err, rows, fields) => {
            if (!err)
            res.send(rows);
            else
            console.log(err);
            })
        });

export default sunday_mics; 




