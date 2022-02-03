import Axios from "axios";
import React, { useState } from "react";
import Donorlist from "./Donorlist";
import { DataGrid } from '@mui/x-data-grid';
import { Link } from 'react-router-dom'
import { useHistory } from 'react-router-dom';


const columns = [
   
    {field: 'donorid', headerName: 'Donor id', width: 130, flex: 1},
    {field: 'name', headerName: 'Full name', width: 130, flex: 1},
    {field: 'dob', headerName: 'Date of birth', width: 130, flex: 1},
    {field: 'bloodtype', headerName: 'Blood type', width:90, flex: 1},
    {field: 'addr', headerName: 'Address', width: 260, flex: 1},
    
]



class Lookup extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            option: 'name',
            crit: '',
            list: [],
            pageSize: 5,
            select: [],
            selected: false  
        };
        this.handleChange = this.handleChange.bind(this);
        //this.onSelectionChanged = this.onSelectionChanged.bind(this);
        }
        
        handleChange(e) {this.setState({option: e.target.value });}
        

    render() {
        
        
        const searchDonor = () => {
            console.log('option is : ' + this.state.option)
            console.log('criteria is: ' + this.state.crit)
           Axios.post('http://localhost:3001/search', {
                option: this.state.option,
                crit: this.state.crit
           }).then((response) => {
                //console.log(response.data)
                this.setState({list:response.data})
                console.log(this.state.list)
           })
        }

        const processDonation = (arr) => {
            if (window.confirm("Are you sure you want to process this donation?")) {
            const donorid = arr.donorid
            const type = arr.bloodtype
            console.log(donorid)
            console.log(type)
            Axios.post('http://localhost:3001/donate', {
                donorid: donorid,
                type: type
           }).then((response) => {
                console.log(response)
           })
        }
        }

        const showAll = () => {
            Axios.post('http://localhost:3001/search', {
                option: 'all',
                crit: ''
           }).then((response) => {
                //console.log(response.data)
                this.setState({
                    list: response.data
                })
                
                
           })
        }

        const handlePageSizeChange = (size) => {
            this.setState({pageSize: size})
        }
        
        
        

        const updateInput = (e) => {
            this.setState({crit: e.target.value})
        }

        const HandleSelect = (props) => {
            const selected = props.selected;
            const id = props.id;
            if (selected) {
                return <button className="delete-button" onClick={() => deleteDonor(id)}>Delete</button>
            } else {
                return <h1></h1>
            }
        }

        const deleteDonor = (id) => {
            Axios.post('http://localhost:3001/delete', {
                donorid: id
           }).then((response) => {
                showAll()
           })
        }





        
        
    return (
        
        <><div className="lookup">
            <div className="left-lookup">
                <label>Search by: </label>
                <select onChange={this.handleChange} className="drop-down-button" value={this.state.option}>
                    <option value='name'>Name</option>
                    <option value='type'>Blood Type</option>
                    <option value='ssn'>SSN</option>
                    <option value='dob'>Date of birth</option>
                    <option value='addr'>Address</option>
                </select>
                <input type='text' onChange={updateInput}></input>
                <button onClick={searchDonor}>Search</button>
            </div>

            <div className="right-lookup">
                <button onClick={showAll}>Show all</button>
            </div>
        </div>
        <div>
        
        <div style={{ display: 'flex', height: '100%' }}>
            <div style={{ flexGrow: 1 }}>
            
            <DataGrid 
                    autoHeight 
                    getRowId={(rows) => rows.donorid} 
                    rows = {this.state.list}
                    columns = {columns}
                    pageSize= {this.state.pageSize}
                    onPageSizeChange={(newPageSize) => this.setState({pageSize: newPageSize})}
                    rowsPerPageOptions={[5, 10, 15]} 
                    //checkboxSelection
                    rowSelection='single'
                    onRowClick={(GridRowParams) => {
                        //console.log(GridRowParams.row);
                        this.setState({select: GridRowParams.row, selected:true})
                        //console.log(this.state.select)
                    }}
                    onRowDoubleClick={(GridRowParams) => {
                        this.setState({select: [], selected:false})
                    }}
                    />
                    <div className="buttons">
                    <button className="register-btn" onClick={()=>processDonation(this.state.select)}>Process</button>
                    <HandleSelect selected = {this.state.selected} id = {this.state.select}/>
                    </div>
                    
            </div>
        </div>
            
                
                    
                
            
        </div></>
        
        
    );
    }
}
 
export default Lookup;