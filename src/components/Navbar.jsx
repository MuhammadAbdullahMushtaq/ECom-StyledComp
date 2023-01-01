import { Badge } from "@material-ui/core";
import { Search, ShoppingCartOutlined } from "@material-ui/icons";
import React from "react";
import styled from "styled-components";
import { mobile } from "../responsive"

const Wrapper = styled.div`
   display: flex;
   padding: 10px 20px;
   @media only screen and (max-width: 690px){
      padding: 10px 5px;
   }
   ${mobile({padding: "10px 0px"})}
`;

const Left = styled.div`
   flex: 1;
   display: flex;
   align-items: center;
`;
const Language = styled.span`
   font-size: 14px;
   cursor: pointer;
   ${mobile({display : "none"})}
`;
const SearchContainer = styled.div`
   border: 1px solid lightgray;
   display: flex;
   align-content: center;
   margin-left: 10px;
   padding: 5px;
   ${mobile({marginLeft : "5px"})}
`;
const Input = styled.input`
   border: none;
   outline: none;
   @media only screen and (max-width: 690px){
      width: 60px;
   }
   ${mobile({width: "50px"})}
`;
const Center = styled.div`
   flex: 1;
   display: flex;
   justify-content: center;
   align-items: center;
`;
const Logo = styled.h1`
   font-weight: bold;
   @media only screen and (max-width: 690px){
      font-size: 20px;
   }
   @media only screen and (max-width: 440px){
      font-size: 18px;
   }
   ${mobile({fontSize: "15px"})}
`;
const Right = styled.div`
   flex: 1;
   display: flex;
   align-items: center;
   justify-content: space-around;
   @media only screen and (max-width: 690px){
      flex: 1.5;
   };
`;
const MenuItems = styled.div`
   font-size: 14px;
   cursor: pointer;
   @media only screen and (max-width: 690px){
      font-size: 12px;
      font-weight: 600;
   };
   ${mobile({fontSize: "10px"})};
   @media only screen and (max-width: 290px){
      display: ${(props) => props.child === "last" && "none"};
   };
`;

const Navbar = () => {
   return (
            <Wrapper>
               <Left>
                  <Language>EN</Language>
                  <SearchContainer>
                     <Input placeholder="Search"/>
                     <Search style={{fontSize: '16', color: 'gray'}}/>
                  </SearchContainer>
               </Left>
               <Center>
                  <Logo>ECommerce.</Logo>
               </Center>
               <Right>
                  <MenuItems>REGISTER</MenuItems>
                  <MenuItems>SIGN IN</MenuItems>
                  <MenuItems child="last">
                     <ShoppingCartOutlined />
                  </MenuItems>
               </Right>
            </Wrapper>
   );
};

export default Navbar;