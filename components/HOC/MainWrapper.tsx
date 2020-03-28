import React, { FunctionComponent } from "react";
import Background from "../Backgrounds"
import GlobalStyles from "../GlobalStyles/"
export default (WrappedComponents: any ) => {
    return (props) => {
       return(
        <>
            <GlobalStyles/>
            <Background>
                <WrappedComponents {...props}/>
            </Background>
        </>
       ) 
    }
}