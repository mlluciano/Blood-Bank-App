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
    database: "lifewest",
    multipleStatements: true
  });


app.post("/home", (req, res) => {
    var sql = ("SELECT COUNT(*) FROM inventory WHERE type=?;SELECT COUNT(*) FROM inventory WHERE type=?;SELECT COUNT(*) FROM inventory WHERE type=?;SELECT COUNT(*) FROM inventory WHERE type=?;SELECT COUNT(*) FROM inventory WHERE type=?;SELECT COUNT(*) FROM inventory WHERE type=?;SELECT COUNT(*) FROM inventory WHERE type=?;SELECT COUNT(*) FROM inventory WHERE type=?")
    
    db.query(sql, [req.body.opos,req.body.apos,req.body.bpos,req.body.abpos,req.body.oneg,req.body.aneg,req.body.bneg,req.body.abneg], (err, result) => {
        if (err) {
            console.log(error)
        }
        else {
            var resultArray = Object.values(JSON.parse(JSON.stringify(result)))
            let responseArray=[]
            for (let i=0; i<8; i++) {
                responseArray[i] = resultArray[i][0]['COUNT(*)']
            }
            res.send(responseArray)
        }
    })
})

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

app.post("/delete", (req, res) => {
    const id = req.body.donorid;
    const _id = id.donorid
    console.log(_id)
    db.query(
        "DELETE FROM donors WHERE donorid = ?",[_id],
        (err, result) => {
            if (err) {
                console.log(err);
            }
            else {
                res.send(result);
            }
        }
    );
});

app.post("/search", (req, res) => {
    const option = req.body.option;
    const crit = req.body.crit;
    const child = require('child_process').fork('search.js', [option, crit])
    child.on('message', (m) => {
        db.query(m, [crit], (err,result) => {
            if (err) {
                console.log(err)
            }
            else {
                res.send(result)
            }
        })
    })
})

app.post("/donate", (req, res) => {
    const donorid = req.body.donorid;
    const type = req.body.type;
    db.query(
        "INSERT INTO inventory (type,donorid) VALUES (?,?)",
        [type,donorid],
        (err,result) => {
            if (err) {
                console.log(err)
            }
            else {
                res.send("Your shit inserted")
            }
        }
    )

})

app.get("/inventory", (req, res) => {
    db.query(
        "SELECT * FROM inventory",
        (err,result) => {
            if (err) {
                console.log(err)
            }
            else {
                res.send(result)
            }
        }
    )
})

app.get("/orders", (req, res) => {
    db.query(
        "SELECT * FROM orders",
        (err,result) => {
            if (err) {
                console.log(err)
            }
            else {
                res.send(result)
            }
        }
    )
})

app.post("/fulfill", (req, res) => {
    const idorders = req.body.idorders
    const type = req.body.type
    const quantity = req.body.quantity
    db.query(
        "INSERT INTO inventory (type,donorid) VALUES (?,?)",
        [type,donorid],
        (err,result) => {
            if (err) {
                console.log(err)
            }
            else {
                res.send("Your shit inserted")
            }
        }
    )

})






app.listen(3001, () => {
    console.log("Server is running on port 3001");
  });