import styled from 'styled-components'
import Announcement from '../components/Announcement'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

const Container = styled.div``;

const Wrapper = styled.div`
   padding: 20px;
`;

const Title = styled.h1`
   font-weight: 300;
   text-align: center;
`;

const Top = styled.div`
   display: flex;
   justify-content: space-between;
   align-items: center;
`;



const Bottom = styled.div``;

const Cart = () => {
   return (
      <Container>
         <Navbar />
         <Announcement />
         <Wrapper>
            <Title>Your Bag</Title>
            <Top>

            </Top>
            <Bottom>
               
            </Bottom>
         </Wrapper>
         <Footer />
      </Container>
   )
}

export default Cart