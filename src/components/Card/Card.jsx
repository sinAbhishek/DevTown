import React, { useState } from "react";
import { Main, ImgCont, Image, Detail, Title, Price, DesCont, Description } from "./Card.style";
const Card = ({ detail }) => {

  return (
    <Main >
      <ImgCont >
        <Image src={detail.image} alt="" />
      </ImgCont>
      <Detail >
        <Title>{detail.name}</Title>
        <Price >Rs. {detail.Price}.00</Price>
      </Detail>
      <DesCont >
        <Description >{detail.Description.slice(0, 200)}.....</Description>

      </DesCont>
    </Main>
  );
};

export default Card;
