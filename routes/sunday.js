import mysql from "mysql";
import express from "express";
import bodyParser from "body-parser";

var sunday_mics = express();

const boroughs = ['Bronx', 'Brooklyn', 'Manhattan', 'Queens', 'Staten Island'];

sunday_mics.use(bodyParser.json());

var mysqlConnection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "123q321KB",
  database: "mykes",
  connectionLimit: 10,
});

// pool.query(`select * from monday_mics`, (err, result, fields) =>{
//     if(err){
//         return console.log(err);
//     }
//     return result;
//     res.send(result);
// });

mysqlConnection.connect((err) => {
  if (!err) console.log("Connection Established Successfully");
  else console.log("Connection Failed!" + JSON.stringify(err, undefined, 2));
});

sunday_mics.get("/sunday", (req, res) => {
  mysqlConnection.query("SELECT * FROM sunday", (err, rows, fields) => {
    if (!err) res.send(rows);
    else console.log(err);
  });
});


sunday_mics.get("/sunday/:borough", (req, res) => {
  var borough = req.params.borough; 
  mysqlConnection.query(
    `SELECT * FROM sunday WHERE borough = '${borough}'`,
    (err, rows, fields) => {
      if (!err) res.send(rows);
      else console.log(err);
    }
  );
  console.log('BOROUGH FOR YOU', borough)
});

sunday_mics.get("/sunday/:cost", (req, res) => {
  var cost = req.params.cost; 
  mysqlConnection.query("SELECT * FROM sunday"
    ,
    (err, rows, fields) => {
      if (!err) res.send(rows);
      else console.log(err);
    }
  );
  console.log('HELLO KARI', cost)

});

sunday_mics.get("/monday", (req, res) => {
  mysqlConnection.query("SELECT * FROM sunday",
    (err, rows, fields) => {
      if (!err) res.send(rows);
      else console.log(err);
    }
  );
});



export default sunday_mics;
