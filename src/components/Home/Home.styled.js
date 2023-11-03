import styled from "styled-components";


export const PageCont=styled.div`
position:absolute;
bottom:-50px;
width:100vw;
height:50px;
display:flex;
justify-content:center;
align-items:center
`
export const PageBtn=styled.div`
width:30px;
height:30px;
margin:0px 10px;
font-family: 'Kanit', sans-serif;
padding:5px;
border-radius:100%;
display:flex;
justify-content:center;
align-items:center;
background-color:${props=>props.active?"#f00e52":"black"};
color:${props=>props.active?"white":"white"};
&:hover{
    cursor:pointer;
    background-color:gray
}

`
export const Main=styled.div`
 min-height:calc(100vh - 96px);
 display:flex;
 flex-direction:column;
 align-items:center;
 position:relative

`
export const Category=styled.div`
margin:8px 0px;
`
export const Select=styled.select`
padding:4px 8px;
border:1px solid #4a4949;
background-color:#33302f;
font-size:16px;
color:white;
border-radius:6px;
margin:0px 4px

`
export const CardCont=styled.div`
display:flex;
flex-wrap:wrap;
justify-content:center;

`