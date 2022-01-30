import { useState } from "react";
import { DataGrid } from '@mui/x-data-grid';
const Inventory = () => {
const [inventory, setInventory] = useState([])
    return ( 
        <DataGrid 
        />
     );
}
 
export default Inventory;