import React,{useState,useEffect} from 'react'
import axios from 'axios'

const Fileupload = () => {
    const[file,setFile]=useState([])
    
    function handleChange (event)
    {
        setFile(event.target.files[0])
    }
    const handleSubmit=(event)=>{
        event.preventDefault()
        const url='http://localhost:5000/image/upload';
        const formData=new FormData();
        formData.append('file',file);
        formData.append('fileName',file.name);
        const config={
            headers:{
                'content-type':'multipart/form-data'
            }
        }
        axios.post(url,formData,config).then((response)=>{
            console.log(response.data);
        })
    }
    const[data,setData]=useState([]);
    const img=async()=>{
        const showimg= await fetch('http://localhost:5000/image/display');
        setData(await showimg.json());
    };
    useEffect(()=>{
        img();
    },[]);
    
    return (
        <div className="App">
            <form method="POST">
                <h1>React File Upload</h1>
                <input type="file" onChange={handleChange}/><br/>
                <button type="button" onClick={handleSubmit}>Upload</button>
            </form>
            <table>
                <tr>
                    <td>Image</td>
                </tr>
                {
                    data.map((d)=>{
                        return(
                            
                            <td>
                                <img src={`./upload/${d.filename}`} height="200"/>
                            </td>
                            
                        )
                    })
                }
            </table>
        </div>
    )
}

export default Fileupload
