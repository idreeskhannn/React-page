import React from "react";
import"./header.css"
import img1 from"../images/pic2.png"
function Content(){
return(
<>
<div className="main4">
<div className="main1">
<div className="txt">
<h5 className="hh">New Product</h5>
<h4 className="hh" style={{color:"red"}}> The Twist Of Healthy Yogurt</h4>
<h6 className="hh" >This website templates has been designed by <br /> Idrees khan</h6>
</div>
<div className="im">
<img src={img1} alt="" />
</div>

</div>
</div>
</>

)

}
export default Content