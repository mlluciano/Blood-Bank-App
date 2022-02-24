import { useEffect, useState } from "react";
import { DataGrid } from '@mui/x-data-grid';
import Axios from "axios";
const Orders = () => {
    const [orders, setOrders] = useState([])
    const [select, setSelect] = useState([])
    const [isSelected, setSelected] = useState(false)

    const columns = [
        {field: 'idorders', headerName: 'Order id', width: 130, flex: 1},
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
            idorders: idorders,
            type: type,
            quantity: quantity
        }).then((response) => {
            if (response.data=="Sorry, not enough units in inventory.") {
                alert(response.data)
            }
            else {
                alert("Order successfully filled.")
                getOrders()
            }
        })
    }

    

    const HandleSelect = (props) => {
        const isSelected = props.selected;
        const select = props.id;
        console.log(isSelected)
        console.log(select)
        if (isSelected) {
            return <button className="register-btn" onClick={() => fulfillOrder(select.idorders,select.type,select.quantity)}>Fill order</button>
        } else {
            return <h1></h1>
        }
    }

    useEffect(getOrders, [])
    
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
                    <HandleSelect selected = {isSelected} id = {select}/>
        </div>
     );
}
 
export default Orders;