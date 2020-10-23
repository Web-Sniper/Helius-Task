import React, { useEffect, useState } from 'react'


const Vehicle = () => {
    const [vehicle,setVehicle] = useState([])
    useEffect(()=>{
        fetch("/all-vehicle",{
            method:"get",
        }).then(res=>res.json())
        .then(result=>{
            setVehicle(result.result)
        })  
    },[])
    const getVehicle = (e) => {
        if (e=="Booked"){
            fetch("/get-vehicles",{
                method:"post",
                headers:{
                    "Content-Type" : "application/json"
                },
                body:JSON.stringify({
                    booked:true
                })
            }).then(res=>res.json())
            .then(result=>{
                setVehicle(result.result)
            })
        }
        if(e=="Available"){
            fetch("/get-vehicles",{
                method:"post",
                headers:{
                    "Content-Type" : "application/json"
                },
                body:JSON.stringify({
                    booked:false
                })
            }).then(res=>res.json())
            .then(result=>{
                setVehicle(result.result)
            })
        }
        
    }

    return (
        <div>
            <div className="row" style={{ marginTop: "50px" }}>
                <div className="offset-s4 col s4">
                    <a className='dropdown-trigger btn' href='#' data-target='dropdown1'>Select Vehicle<i className="material-icons right">arrow_drop_down</i></a>


                    <ul id='dropdown1' className='dropdown-content'>
                        <li><a href="#!"  onClick={e=>getVehicle(e.target.innerText)}>Booked</a></li>
                        <li><a href="#!" onClick={e=>getVehicle(e.target.innerText)}>Available</a></li>
                        
                        
                    </ul>

                </div>
                
            </div>
            <div>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Booked</th>
                        <th>Booking Time</th>
                    </tr>
                </thead>
                {
                    vehicle ? vehicle.map(item=>{
                        const day = Math.floor(item.time/86400)
                        const hours = Math.floor((item.time%86400)/3600)
                        const minutes = Math.floor(((item.time%86400)%3600)/60)
                        const bookingTime =day + " Day  " + hours + " Hours  "+ minutes + " Minutes  " 
                        return (
                            <tbody key={item._id}>
                                <tr>
                                    <td>{item.name}</td>
                                    <td>{item.booked ? "Booked" : "Available"}</td>
                                    <td>{item.time&&bookingTime?bookingTime:"__"}</td>
                                </tr>
                            </tbody>)
                    }):"Loading...."
                }
                </table>
            </div>
        </div>
        
    )
}

export default Vehicle