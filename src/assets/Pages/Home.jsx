import img1 from "./image/images/Browney.jpeg"
import img2 from "./image/images/home.jpg"


function Home(){
    return(
        <>
        {/*About */}
         <div className="sec2">
         <div className="d-flex justify-content-center gap-lg-5" id="home">
            <div className="amigo">
               <h1 className="Amigo">Enjoy the taste of <br/>Cake with us</h1>
               <p className="mb">Explore a delicious variety of cakes, from classic flavors to trendy designs, all available for online ordering. </p>
               <button className="btn btn-danger">Get Started</button>
            </div>
            <div className="image">
              <img src={img2} className="img-rounded" width="500" height="500" style={{marginLeft : "10%", borderRadius : "40px"}}/>
            </div>
            </div>
          </div>
        <br/><br/><br/>

        {/*End About */}


          {/*Services*/}
       <div className="sec3" id="about">
            <div className="work">
              <img src={img1} className="img-rounded" width="400" height="500" style={{ borderRadius : "40px"}}/>
            </div>
            <div className="text">
              <h2>Non Veg-Cake</h2>
              <p className="mt-4">We blend flavor and creativity to bring you cakes <br/>that taste as amazing as they look.</p>
              <div className="one">
                <div>
                  <i className="fa-solid fa-cube fa-2xl"></i>
                  <h4 className="mt-2">Veg-Cake</h4>
                  <p>From chocolate to fruit cakes, every slice is crafted .<br/>  with love and pure vegetarian ingredients</p>
                </div>
                <div>
                  <i className="fa-solid fa-laptop-code fa-2xl"></i>
                  <h4 className="mt-2">Browney</h4>
                  <p>Our eggless brownies are rich, fudgy, <br/> and made for true chocolate lovers.</p>
                </div>
              </div>
            </div>
          </div>
          {/*end services*/}
</>
    )
}
export default Home