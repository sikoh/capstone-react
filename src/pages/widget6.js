import React from "react";

import ListOfInputs from "../components/widgets/ListOfInputs";

const Widget6 = () => {
    return (
        <div style={{ display: "flex", flexDirection:"column", justifyContent:"center", padding:"10% 40%"}}>

            <h5>Please input task and press Enter</h5>
        
            <ListOfInputs />
        </div>

    );
};
  
export default Widget6;