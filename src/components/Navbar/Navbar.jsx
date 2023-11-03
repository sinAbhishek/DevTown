import React, { useState } from "react";
import "./Navbar.styled.js";
import { Hometab, Logo, LogoCont, Main } from "./Navbar.styled.js";

const Navbar = () => {


  return (
    <Main >
      <LogoCont >
        <Logo>Ebook</Logo>
        <Hometab className=" font-semibold ml-36">Home</Hometab>
      </LogoCont>



    </Main>
  );
};

export default Navbar;
