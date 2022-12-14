import styled from "styled-components";
import { Facebook, Instagram, MailOutline, Phone, Pinterest, Room, Twitter } from "@material-ui/icons";
import { mobile } from "../responsive";


const Container = styled.div`
   display: flex;
   margin-top: 20px;
   @media only screen and (max-width: 841px){
      flex-wrap: wrap;
   }
   ${mobile({flexDirection : "column", justifyContent: "space-between"})}
`;
const Left = styled.div`
   display: flex;
   flex: 1;
   flex-direction: column;
   padding: 20px;
`;
const Logo = styled.h1`
`;
const Description = styled.p`
   margin: 20px 0px;
   word-wrap: break-word;
`;
const SocialContainer = styled.div`
   display: flex;
`;
const SocialIcon = styled.div`
   display: flex;
   justify-content: center;
   align-items: center;
   margin-right: 20px;
   width: 40px;
   height: 40px;
   border-radius: 50%;
   color: white;
   background-color: ${props => props.color};
`;

const Center = styled.div`
   flex: 1;
   min-width: 200px;
   padding: 20px;
`;
const Title = styled.h3`
   margin-bottom: 30px;
`;
const List = styled.ul`
   display: flex;
   flex-wrap: wrap;
   list-style: none;
   margin: 0;
   padding: 0;
`;
const ListItem = styled.li`
   width: 100%;
   margin-bottom: 10px;
`;

const Right = styled.div`
   flex: 1;
   padding: 20px;
   ${mobile({backgroundColor : "#fff8f8"})}
`;
const ContactItem = styled.div`
   display: flex;
   align-items: center;
   margin-bottom: 20px;
`;
const Payment = styled.img`
   width: 80%;
   @media only screen and (max-width: 821px){
      width: 300px;
   }
   @media only screen and (max-width: 400px){
      width: 100%;
   }
`;

const Footer = () => {
   return (
      <Container>
         <Left>
            <Logo>
               ECommerce.
            </Logo>
            <Description>
               Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates, illum? Impedit voluptates    quaerat temporibus doloribus excepturi cum minus culpa explicabo reiciendis porro numquam optio    ratione deserunt illum dolor nihil eius, illo nisi exercitationem nobis. Aspernatur voluptas    voluptates necessitatibus esse quos sint exercitationem hic nemo iusto, praesentium omnis, expedita adipisci magnam?
            </Description>
            <SocialContainer>
               <SocialIcon color="#3B5999">
                  <Facebook />
               </SocialIcon>
               <SocialIcon color="#E4405F">
                  <Instagram />
               </SocialIcon>
               <SocialIcon color="#55ACEE">
                  <Twitter />
               </SocialIcon>
               <SocialIcon color="#E60023">
                  <Pinterest />
               </SocialIcon>
            </SocialContainer>
         </Left>
         <Center>
            <Title>
               Useful Links
            </Title>
            <List>
               <ListItem>Home</ListItem>
               <ListItem>Cart</ListItem>
               <ListItem>Man Fashion</ListItem>
               <ListItem>Woman Fashion</ListItem>
               <ListItem>Accessories</ListItem>
               <ListItem>My Account</ListItem>
               <ListItem>Order Tracing</ListItem>
               <ListItem>Wishlist</ListItem>
               <ListItem>Terms And Condition</ListItem>
            </List>
         </Center>
         <Right>
            <Title>Contact</Title>
            <ContactItem><Room style={{marginRight: '10px'}} />123 Street Block C H 798</ContactItem>
            <ContactItem><Phone style={{marginRight: '10px'}} />+92 312 1234567</ContactItem>
            <ContactItem><MailOutline style={{marginRight: '10px'}} />abdullahmushtaq08@gmail.com</ContactItem>
            <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
         </Right>
      </Container>
   )
}

export default Footer