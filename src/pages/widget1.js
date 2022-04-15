import React from "react";

import CapitalizeInput from "../components/widgets/CapitalizeInput";

const Widget1 = () => {
    return (
        <div style={{ display: "flex", flexDirection:"column", justifyContent:"center", padding:"10% 40%"}}>

            <p>Please enter yout name with lowercase letters and click the button on the right.</p>

            <br/>

            <CapitalizeInput/>

        </div>

    );
};
  
export default Widget1;