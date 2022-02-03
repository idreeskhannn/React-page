import React from "react";
import pic3 from "../images/pic3.png"
import pic4 from "../images/pic4.png"
import pic5 from "../images/pic5.png"
import pic6 from "../images/pic6.png"
import"./header.css"
function Foot() {

    return (
        <>
            <div className="main4">
                <div className="main3">
                    <div className="card">
                        <img src={pic3} alt="" />
                        <p>Products</p>
                    </div>
                    <div className="card">
                        <img src={pic4} alt="" />
                        <p>Our Story</p>
                    </div>
                    <div className="card">
                        <img src={pic5} alt="" />
                        <p>Flavor</p>
                    </div>
                    <div className="card">
                        <img src={pic6} alt="" />
                        <p>location</p>
                    </div>
                </div>
            </div>
        </>

    )
}
export default Foot