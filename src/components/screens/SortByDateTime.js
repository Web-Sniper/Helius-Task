import React, { useEffect, useState } from 'react'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import M from 'materialize-css'


const SortByDateTime = () => {
    const [data, setData] = useState([])
    const [frm, setFrm] = useState("")
    var today = new Date()
    useEffect(() => {
        fetch("/getData", {
            method: "get"
        })
            .then(res => res.json())
            .then(result => {
                setData(result.result)
            })

    }, [])

    const filterData = ()=>{
        if (!frm){
            return M.toast({html:"Please add all the fields....", classes:"#e53935 red darken-1"})
        }
        const fdate = JSON.stringify(JSON.stringify(frm).slice(1,11))
        const newData = data.filter(item=>{
            if(!fdate.localeCompare(JSON.stringify(item.createdAt.slice(0,10)))){
                return item
            }
        })
        setData(newData)
        
    }

    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>DateTime</th>
                    </tr>
                </thead>
                {
                    data ? data.map(item => {
                        
                        return (
                        <tbody key={item._id}>
                            <tr>
                                <td>{item.name}</td>
                                <td>{item.email}</td>
                                <td>{item.createdAt}</td>
                            </tr>
                        </tbody>)
                    }) : "Loading...."
                }
            </table>
            <br />
            <div style={{padding:"20px"}}>
            <h5>Filter Data</h5>
                <DatePicker placeholderText="from (MM/DD/YYYY)"
                selected = {frm} 
                onChange = {fdate=>{
                   
                    setFrm(fdate)
                }}
                minDate={new Date('01-01-1900')}
                maxDate={today}
                id = "frm"
                />
                <div>
                <a className="btn waves-effect waves-light" onClick={()=>filterData()}>Filter</a>
                </div>
            </div>

        </div>
    )
}

export default SortByDateTime