import { Send } from '@material-ui/icons'
import styled from 'styled-components';

const Container = styled.div`
   display: flex;
   align-items: center;
   justify-content: center;
   flex-direction: column;
   height: 60vh;
   background-color: #fcf5f5;

`;
const Title = styled.h1`
   font-size: 70px;
   margin-bottom: 20px;
`;
const Description = styled.div`
   font-size: 24px;
   font-weight: 300;
   margin-bottom: 20px;
`;
const InputContainer = styled.div`
   display: flex;
   justify-content: space-between;
   height: 40px;
   width: 50%;
   border: 1px solid lightgray;
   background-color: white;
`;
const Input = styled.input`
   border: none;
   padding-left: 20px;
   flex: 8;
`;
const Button = styled.button`
   color: white;
   background-color: teal;
   flex: 1;
   border: none;
`;

const Newsletter = () => {
   return (
      <Container>
         <Title>Newsletter</Title>
         <Description>Get timely updates from your favourite products.</Description>
         <InputContainer>
            <Input placeholder='Your Email' />
            <Button>
               <Send />
            </Button>
         </InputContainer>
      </Container>
   )
}

export default Newsletter