import { useState } from "react";
import { DataGrid } from '@mui/x-data-grid';
import Axios from "axios";
const Orders = () => {
    const [orders, setOrders] = useState([])
    const [inventory, setInventory] = useState([])
    const [select, setSelect] = useState([])
    const [isSelected, setSelected] = useState(false)

    const columns = [
        {field: 'customer', headerName: 'Customer Name', width: 130, flex: 1},
        {field: 'type', headerName: 'Blood Type', width: 130, flex: 1},
        {field: 'quantity', headerName: 'Quantity', width: 130, flex: 1}
    ]

    const getOrders = () => {
        Axios.get('http://localhost:3001/orders').then((response) => {
                console.log(response.data)
                setOrders(response.data)
           })
    }

    const fulfillOrder = (idorders,type,quantity) => {
        Axios.post('http://localhost:3001/fulfill', {
            id: idorders,
            type: type,
            quantity: quantity
        }).then((response) => {
            console.log(response)
        })
    }

    const HandleSelect = (props) => {
        const isSelected = props.selected;
        const select = props.id;
        console.log(isSelected)
        console.log(select)
        if (isSelected) {
            return <button onClick={() => fulfillOrder(select.idorders,select.type,select.quantity)}>Fill order</button>
        } else {
            return <h1></h1>
        }
    }


    
    return (
        <div>
        <DataGrid 
                    getRowId={(rows) => rows.idorders}
                    autoHeight 
                    rows = {orders}
                    columns = {columns}
                    rowsPerPageOptions={[5, 10, 15, 25,100]}
                    rowSelection='single'
                    onRowClick={(GridRowParams) => {
                        console.log(GridRowParams.row)
                        setSelect(GridRowParams.row)
                        setSelected(true)
                    }}
                    onRowDoubleClick={(GridRowParams) => {
                        setSelect([])
                        setSelected(false)
                    }}
                    />
                    <button onClick={getOrders}>Get orders</button>
                    <HandleSelect selected = {isSelected} id = {select}/>
        </div>
     );
}
 
export default Orders;