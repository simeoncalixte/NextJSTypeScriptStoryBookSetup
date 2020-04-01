import React from "react"
import styled, {createGlobalStyle} from "styled-components";

const GlobalStyles = createGlobalStyle`
  body{
      background: red;
  }
`
const Components = styled.div`
    color: red;
`;


export default () => {

   return (
        <>
            <GlobalStyles/>
            <Components>Home Page</Components>
        </>
    )
}