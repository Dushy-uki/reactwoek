

function Contact(){
    return(
       <>
       <div className="form" id="form">
       <form className="boxForm">
            <label for="uname"> Name :</label>
            <input type="text" style={{borderRadius: "30px"}} id="uname" name="first name"/><br/><br/>
            <lable for="lname">Email :</lable>
            <input type="text"  style={{borderRadius: "30px"}} id="lname" name="last name"/><br/><br/>
            <textarea rows="5"  style={{borderRadius: "20px"}} cols="33">Message</textarea><br></br><br/>
            <button className="btn">submit</button>
        </form>
        </div>
       </> 
    )
} 
export default Contact