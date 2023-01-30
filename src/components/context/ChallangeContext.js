import React, { createContext, useEffect, useState } from "react";

export const ChallangeContext = createContext();

const ChallangeContextProvider = ({ children })=>{
    const {challange, setChallange} = useState({
        title: "",
        description:"",
        level:""
      });

      useEffect(()=>{
        console.log(challange);
      },[]);

      return (
        <ChallangeContext.Provider
            value={{
                challange,
                setChallange,
            }}
        >
            {children}
        </ChallangeContext.Provider>
      );
};

export default ChallangeContextProvider;