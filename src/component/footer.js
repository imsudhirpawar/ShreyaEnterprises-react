
import  {BsInstagram, BsFacebook, BsFillPersonLinesFill} from 'react-icons/bs';
export default function Footer(){
    return (
        <footer style={{color:'black',fontFamily:'inherit',fontWeight:'lighter'}} className=" py-4   mb-0">

        {/* <div className="d-flex flex-wrap justify-content-between align-items-center py-4 border-top "> */}
            <div className=" footerName ">
                <span  style={{fontSize:'1.1rem'}} className=" mb-md-0 mx-4"> 2023 <a href="/" className='text-decoration-none text-black '> Shreya Enterprises, Inc </a>
                <a href="tel: +91 98221 48658" className='text-decoration-none text-black fs-6'>+91 98221 48658</a> 
                </span>
           
            </div>
            <ul className=" footerList list-unstyled col-md-4 px-4 " style={{fontSize:'1.5rem'}}>
                <li className="ms-3">
                    <a className="text-muted" href="https://www.instagram.com">
                     <BsInstagram style={{color:'black'}}/> 
                    </a>
                </li>
                <li className="ms-3">
                        <a className="text-muted" href="/">
                       <BsFacebook style={{color:'black'}}/>
                        
                    </a>
                 </li>
                 
            </ul>
        {/* </div> */}
        

    </footer>
    );

}