const mysql = require("mysql");
console.log("option is: " + process.argv[2])
console.log("Criteria is: " + process.argv[3])
const option = process.argv[2]



let sql=''
switch (option) {
    case 'all': {
        sql = "Select * FROM donors"
        break;
    }

    case 'name': {  
        sql = "SELECT * FROM donors WHERE name = ?"
        break;
    }

    case 'type': {
        sql = "SELECT * FROM donors WHERE bloodtype = ?"
        break;
    }

    case 'ssn': {
        sql = "SELECT * FROM donors WHERE ssn = ?"
        break;
    }

    case 'dob': {
        sql = "SELECT * FROM donors WHERE dob = ?"
        break;
    }

    case 'addr': {
        sql = "SELECT * FROM donors WHERE addr = ?"
        break;
    }
}
process.send(sql)