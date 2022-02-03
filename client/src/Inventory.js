import { useState } from "react";
import { DataGrid } from '@mui/x-data-grid';
import  Axios  from "axios";
const Inventory = () => {
const [inventory, setInventory] = useState([])
const columns = [
    {field: 'din', headerName: 'DIN', width: 130, flex: 1},
    {field: 'type', headerName: 'Blood Type', width: 130, flex: 1},
    {field: 'donorid', headerName: 'Donor Id', width: 130, flex: 1}
]

const getInventory = () => {
    Axios.get('http://localhost:3001/inventory').then((response) => {
        setInventory(response.data)
    })
}
    return ( 
        <div>
            <h1>Inventory</h1>
            <DataGrid 
                    autoHeight 
                    getRowId={(rows) => rows.din} 
                    rows = {inventory}
                    columns = {columns}
                    />
                    <button onClick={getInventory}>Show all</button>
        </div>
        
        
     );
}
 
export default Inventory;