const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    user: "root",
    host: "localhost",
    port: 3306,
    password: "password",
    database: "lifewest"
  });

app.post("/create", (req, res) => {
    const name = req.body.name;
    const ssn = req.body.ssn;
    const dob = req.body.dob;
    const addr = req.body.addr;
    const type = req.body.type;

    db.query(
        "INSERT INTO donors (name, bloodtype, ssn, dob, addr) VALUES (?,?,?,?,?)",
        [name, type, ssn, dob, addr],
        (err, result) => {
            if (err) {
                console.log(err);
            }
            else {
                res.send('Values inserted');
            }
        }
    );
});




app.listen(3001, () => {
    console.log("Server is running on port 3001");
  });