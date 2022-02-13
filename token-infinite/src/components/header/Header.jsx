import './header.css'
import ImageHeader from '../../images/undraw_voice_control_ofo1 1 (1).png'


export default function Header() {
    return (
        <div className="header">
            <div className="Title">
                Virtual <br />
                Placement Cells <br/>
            <a href='/login'><button className="btn btn-outline-danger">Login</button></a>
            <a href='/register'><button className="btn btn-outline-danger">Register</button></a>  
            </div>

            <div  className="img" >
             <img
            className="headerImg" 
            src={ImageHeader}
            alt="" />   
             </div>     
        </div>
    )
}