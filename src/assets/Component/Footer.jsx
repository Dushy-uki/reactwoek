import FB from "../Pages/image/images/facebook.png"
import Insta from "../Pages/image/images/instagram.png"
import Linkdin from "../Pages/image/images/linkedin.png"
import Twitter from "../Pages/image/images/twitter.png"
import img4 from "../Pages/image/images/Browney.jpeg"

function Footer(){
    return(
        <>
        <br/><br/><br/>
              <div style={{backgroundColor: "rgb(255, 234, 209)", padding: "5px"}}>
         <div className="d-flex" style={{marginTop: "5%"}}>
         <div style={{marginLeft: "15%"}}>
          <h4><b>Cake</b></h4> 
          <p>123Adam Street,<br/>New York, NY<br/>Untcd States</p>
          <p><b>Phone:</b>+15588994567<br/><b>Email:</b>info@uki.com</p>
         </div>
         <div style={{marginLeft: "10%"}}>
          <h4><b>Usedful Links</b></h4>
          <ul type="round">
            <li>Home</li>
            <li>About us</li>
            <li>Services</li>
            <li>Teams og service</li>
            <li>Private policy</li>
          </ul>
         </div>
         <div style={{marginLeft: "8%"}}>
          <h4><b>Our Services</b></h4>
          <ul type="round">
            <li>Mini cake</li>
            <li>Cup cake</li>
            <li>Birthday cake</li>
            <li>Browney</li>
         </ul>
         </div>
         <div style={{marginLeft: "8%"}}>
          <h4><b>Our Social Networks</b></h4>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit.<br/> Similique impedit qui sapiente.</p>
            <div className="d-flex">
              <img src={FB} style={{padding: "4px"}}/>
              <img src={Insta} style={{padding: "4px"}}/>
              <img src={Linkdin} style={{padding: "4px"}}/>
              <img src={Twitter} style={{padding: "4px"}}/>
            </div>
         </div>
      </div>

        <footer style={{marginLeft: "10%"}}><i className="material-icons" style={{marginTop: "5px"}} >&#xe90c;</i>Copy right@ <b>2022</b>All right <b>Reserved</b><span style={{marginLeft: "60%"}}>Decigned by:uki</span><img src={img4} style={{width: "25px", height: "25px", marginLeft: "10%"}}/></footer>
      </div>
      
        </>
    )
}
export default Footer