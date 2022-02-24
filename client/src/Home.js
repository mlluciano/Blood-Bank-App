import { useState } from "react";
import { useEffect } from "react";
import Axios from "axios";

const Home = () => {

//set states for each blood type
const [opos,Setopos] = useState(0)
const [apos,Setapos] = useState(0)
const [bpos,Setbpos] = useState(0)
const [abpos,Setabpos] = useState(0)
const [oneg,Setoneg] = useState(0)
const [aneg,Setaneg] = useState(0)
const [bneg,Setbneg] = useState(0)
const [abneg,Setabneg] = useState(0)



const setCounts = () => { //queries for inventory counts, then sets the state of each blood type
    Axios.post('http://localhost:3001/home', { 
        opos: 'O+',
        apos: 'A+',
        bpos: 'B+',
        abpos: 'AB+',
        oneg: 'O-',
        aneg: 'A-',
        bneg: 'B-',
        abneg: 'AB-'
    }).then((response) => {
        let countArray = response.data;
        Setopos(countArray[0])
        Setapos(countArray[1])
        Setbpos(countArray[2])
        Setabpos(countArray[3])
        Setoneg(countArray[4])
        Setaneg(countArray[5])
        Setbneg(countArray[6])
        Setabneg(countArray[7])
    })
}
useEffect(setCounts, []) //setCounts will only run on page load
    
    return ( 
        
        <div className="home">
            <div className="upper-row">
                <div className="opos">
                    <h2>O+</h2>
                    <h3>{opos}</h3> 
                </div>
                <div className="apos">
                    <h2>A+</h2>
                    <h3>{apos}</h3>
                </div>
                <div className="bpos">
                    <h2>B+</h2>
                    <h3>{bpos}</h3>
                </div>
                
                <div className="abpos">
                    <h2>AB+</h2>
                    <h3>{abpos}</h3>
                </div>
            </div>
    
            <div className="lower-row">
                <div className="oneg">
                    <h2>O-</h2>
                    <h3>{oneg}</h3>
                </div>
                <div className="aneg">
                    <h2>A-</h2>
                    <h3>{aneg}</h3>
                </div>
                <div className="bneg">
                    <h2>B-</h2>
                    <h3>{bneg}</h3>
                </div>
                <div className="abneg">
                    <h2>AB-</h2>
                    <h3>{abneg}</h3>
                </div>
            </div>
        </div>
     );
}
 
export default Home;