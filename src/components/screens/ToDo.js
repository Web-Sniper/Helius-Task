import React,{useEffect, useState} from 'react'

const ToDo = ()=>{
    const [title, setTitle] = useState("")
    const [content, setContent] = useState("")
    const [data, setData] = useState([])

    useEffect(()=>{
        fetch("/allList",{
            method : "get",
        }).then(res=>res.json())
        .then(data=>{
            setData(data.data)
        })
    },[])

    const AddData = ()=>{
        fetch("/todo",{
            method : "post",
            headers : {
                "Content-Type" : "application/json"
            },
            body : JSON.stringify({
                title,
                content
            })
        })
        .then(res=>res.json())
        .then(result=>{
            setTitle("")
            setContent("")
            if(result.data){
                const newData = data.map(item=>{
                    return item
                })
                newData.push(result.data)
                setData(newData)
            }
            
        })
        .catch(err=>{
            console.log(err)
        })
    }
    return (
        <div>
            <div className="row">
                
                <div className="input-field offset-s4 col s4">
                <h5 className="center">Add list</h5>
                    <input type="text" placeholder="Title" 
                    value={title}
                    onChange={e=>setTitle(e.target.value)}
                    />
                    <textarea id="textarea1" className="materialize-textarea" placeholder="Content"
                    value={content}
                    onChange={e=>setContent(e.target.value)}
                    ></textarea>
                    <button className="btn-floating btn-large waves-effect waves-light red"
                    onClick={()=>AddData()}
                    ><i className="material-icons">add</i></button>
                </div>
            </div>
            <div className="container">
                <h5 className="center">Todo Lists</h5>
            <ul className="collapsible">
                {
                    data?data.map(item=>{
                        return (
                            
                            <li key={item._id}>
                                <div className="collapsible-header">{item.title}<i className="material-icons right">delete</i></div>
                                <div className="collapsible-body"><span>{item.content}</span></div>
                            </li>
                        
                        )
                        
                    }):"Loading....."
                }
            </ul>
            </div>
            
        </div>
    )
}

export default ToDo