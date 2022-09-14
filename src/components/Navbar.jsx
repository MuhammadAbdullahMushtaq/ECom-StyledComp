import { Badge } from "@material-ui/core";
import { Mail, Search, ShoppingCartOutlined } from "@material-ui/icons";
import React from "react";
import styled from "styled-components";

const Container = styled.div`
   height: 60px;
`;
const Wrapper = styled.div`
   padding: 10px 20px;
   display: flex;
   justify-content: space-between;
`;
const Left = styled.div`
   flex: 1;
   display: flex;
   align-items: center;
`;
const Language = styled.span`
   font-size: 14px;
   cursor: pointer;
`;
const SearchContainer = styled.div`
   border: 1px solid lightgray;
   display: flex;
   align-content: center;
   margin-left: 25px;
   padding: 5px;
`;
const Input = styled.input`
   border: none;
   outline: none;
`;
const Center = styled.div`
   flex: 1;
   text-align: center;
`;
const Logo = styled.h1`
   font-weight: bold;
`
const Right = styled.div`
   flex: 1;
   display: flex;
   align-items: center;
   justify-content: flex-end;
`;
const MeniItems = styled.div`
font-size: 14px;
margin-left: 25px;
cursor: pointer;
`;

const Navbar = () => {
   return (
      <Container>
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
                  <MeniItems>REGISTER</MeniItems>
                  <MeniItems>SIGN IN</MeniItems>
                  <MeniItems>
                     <Badge badgeContent={4} color="primary">
                        <ShoppingCartOutlined />
                     </Badge>
                  </MeniItems>
               </Right>
            </Wrapper>
      </Container>
   );
};

export default Navbar;
