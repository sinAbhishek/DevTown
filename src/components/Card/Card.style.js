import styled from "styled-components"

export const Main=styled.div`
 width: 320px;
 height: 410px;
 margin: 8px;
 display:flex;
 flex-direction:column;
 padding-bottom:5px;
 border-radius:8px;
 position:relative;
 background-color:#f7f0f2;
`
export const ImgCont=styled.div`
width:100%;
display:flex;
height:60%;
justify-content:center

`
export const Image=styled.img`
width:66.66%;
height:100%;
margin:8px 0px
`

export const Detail=styled.div`
 margin-top:16px;
 margin-left:8px
`
export const Title=styled.h4`
color:#424040;
margin:0px;
font-family: 'Kanit', sans-serif;
`
export const Price=styled.h4`
 margin-top:8px;
 margin:0px;
 font-family: 'Kanit', sans-serif;
 font-size:15px;
 font-weight:200
`
export const DesCont=styled.div`
position:absolute;
width:100%;
display:flex;
bottom:8px;
justify-content:center

`
export const Description=styled.div`
font-size:12px;
font-weight:500;
line-height:16px;
margin:0px 8px;
font-family: 'Kanit', sans-serif;
font-style:italic;
color:#454040;
`