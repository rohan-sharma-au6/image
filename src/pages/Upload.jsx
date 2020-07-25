import React,{useState} from 'react';
import { connect } from 'react-redux';


const Upload = () => {
    const [fileInputState,] = useState('')
    
    const [previewSource, setPreviewSource]=  useState('')
    const handleFileInputChange = e =>{
        const file = e.target.files[0]
        previewFile(file)
    }
    const previewFile= (file)=>{
        const reader = new FileReader();
        reader.readAsDataURL(file)
        reader.onloadend = ( )=>{
            setPreviewSource(reader.result)
        }
    }
    const handleSubmit =e =>{
        console.log("submitting")
        e.preventDefault();
        if(!previewSource) return ;
        uploadImage(previewSource);
        
        
    }
    const uploadImage= async (encodedImage)=>{
        console.log(encodedImage);
        try{
            await fetch('http://localhost:3001/api/upload',{
                method:"POST",
                body: JSON.stringify({data:encodedImage}),
                headers :{'Content-type':"application/json"}
            })

        }
        catch(err){
            console.error(err)

        }
    }
    return (
        <div>
            
            <h1>Upload Image</h1>
            
            <form onSubmit={handleSubmit}>
                <input type="file" name= "image" onChange={handleFileInputChange} value ={fileInputState} />
                <button type="submit">Upload</button>
            </form>
            {previewSource &&(
                <><img src={previewSource} alt="" style={{height:"200px"}}/>
                <p>**after press Upload go to home to check image</p></>
            
            )}
            
        </div>
    );
};

  


export default (Upload);