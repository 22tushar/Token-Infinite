import "./write.css"
//import WriteImage1 from "../../images/writeimage1.jpg"
import { useContext, useEffect, useState } from "react"
import {Context} from "../../context/Context"
import axios from "axios"

export default function Write() {
    const [title, setTitle] = useState("")
    const [desc, setDesc] = useState("")
    const [info, setinfo] = useState([])
    const [file, setFile] = useState(null)
    const {user} = useContext(Context);

    const [cats, setCats] = useState([]);
    const [catCheck, setCatCheck] = useState([]);

    // GET CATEGORIES
    useEffect(()=>{
        const getCats = async ()=>{
            await axios.get("/categories")
            .then((res)=>{
                setCats(res.data)
            })
            .catch((err)=>{
                console.log(err);
            })
        }
        getCats();
    },[]);

    const handleSubmit = async (e) =>{
        e.preventDefault();
        const newPost = {
            rolepost:user.role,
            title:title,
            username:user.username,
            desc,
            cats,
            info
        };
       
        if(catCheck.length>0){
            newPost.categories = catCheck;
        }
        await axios.post("/posts", newPost)
        .then((res)=>{
            window.location.replace("/post/"+ res.data._id);
        })
        .catch((err)=>{
            console.log(err);
        })
    }

    const handleChange = (e)=>{
        if(e.target.checked){
            setCatCheck(state=>[...state, e.target.value]);
        }
        else{
            setCatCheck(catCheck.filter(item=>item !== e.target.value))
        }
    }

    return (
        <div className="write">
            {file?(
                <img 
                src={URL.createObjectURL(file)} 
                alt="" 
                className="writeImg" />
            ):(null)}
            

            <form className="writeForm" onSubmit={handleSubmit}>
                <div className="writeFormAll">
                    <div className="writeFormInput">
                        <div className="writeFormGroup">
                            {/* <label htmlFor="fileInput">
                                <i className="writeIcon fas fa-plus"></i>
                            </label>
                            <input type="file" id="fileInput" style={{display:"none"}} 
                            onChange={(e)=> setFile(e.target.files[0])} /> */}
                            
                            <input type="text" placeholder="Company/TPO name" className="writeInput row px-3" autoFocus={true} 
                            onChange={(e)=>setTitle(e.target.value)}/>
                            
                        </div>
                          
                    
                      <div className="writeFormGroup d-flex flex-row">
                          <div className="col">
                            <div className="form-group shadow-textarea">
                            <textarea 
                                placeholder="Give description ..." 
                                type="text"
                                className="writeInput writeText form-control"
                                onChange={(e)=> setinfo(e.target.value)}
                                ></textarea>
                            </div>
                          </div>
                          
                          <div className="col">
                            <div className="form-group shadow-textarea">
                                <textarea 
                                    placeholder="Write post ..." 
                                    type="text"
                                    className="writeInput writeText form-control"
                                    onChange={(e)=> setDesc(e.target.value)}
                                    ></textarea>
                            </div>
                          </div> 
                        </div>
                    </div>

                    <div className="writeFormSubmit">
                     
                        <button className="writeSubmit" type="submit">Publish</button>
                        <div className="categoriesList">
                            <div className="writeCatsList">
                                {cats.map((cat,index)=>(
                                    <div key={index} className="writeCatsItem">
                                        <input type="checkbox" value={cat.name} onChange={handleChange}/>
                                        <span>{cat.name}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}