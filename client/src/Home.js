const Home = () => {
    return ( 
        <div className="home">
            <div className="upper-row">
                <div className="opos">
                    <h2>O+</h2>
                </div>
                <div className="apos">
                    <h2>A+</h2>
                </div>
                <div className="bpos">
                    <h2>B+</h2>
                </div>
                
                <div className="abpos">
                    <h2>AB+</h2>
                </div>
            </div>
    
            <div className="lower-row">
                <div className="oneg">
                    <h2>O-</h2>
                </div>
                <div className="aneg">
                    <h2>A-</h2>
                </div>
                <div className="bneg">
                    <h2>B-</h2>
                </div>
                <div className="abneg">
                    <h2>AB-</h2>
                </div>
            </div>
        </div>
     );
}
 
export default Home;