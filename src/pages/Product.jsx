import styled from "styled-components"
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Newsletter from "../components/Newsletter";

const Container = styled.div`

`;
const Wrapper = styled.div`
   padding: 50px;
   display: flex;
`;
const ImageContainer = styled.div`
   flex: 1;
`;
const Image = styled.img`

`;
const InfoContainer = styled.div`
   flex: 1;
`;
const Title = styled.h1`

`;
const Description = styled.p`

`;
const Price = styled.span`

`;

const Product = () => {
   return (
      <Container>
         <Navbar />
         <Announcement />
         <Wrapper>
            <ImageContainer>
               <Image src="https://i.ibb" />
            </ImageContainer>
            <InfoContainer>
               <Title>
                  title
               </Title>
               <Description>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero, cum!
               </Description>
               <Price>$200</Price>
            </InfoContainer>
         </Wrapper>
         <Newsletter />
         <Footer />
      </Container>
   )
}

export default Product