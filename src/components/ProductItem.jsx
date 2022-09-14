import {
   FavoriteBorderOutlined,
   SearchOutlined,
   ShoppingCartOutlined,
} from "@material-ui/icons";
import styled from "styled-components";

const Container = styled.div`
   display: flex;
   justify-content: center;
   align-items: center;
   flex: 1;
   margin: 5px;
   min-width: 280px;
   height: 350px;
   background-color: #f5fbfd;
   position: relative;
`;
const Circle = styled.div`
   width: 250px;
   height: 330px;
   border-radius: 50%;
   background-color: white;
   position: absolute;
`;
const Image = styled.img`
   height: 75%;
   width: 50%;
   object-fit: contain;
   z-index: 2;
`;
const Info = styled.div`
   display: flex;
   justify-content: center;
   align-items: center;
   width: 100%;
   height: 100%;
   background-color: rgba(0,0,0,0.2);
   position: absolute;
   z-index: 3;
   transition: all ease 0.5s;
   cursor: pointer;
   opacity: 0;
   &:hover{
      opacity: 1;
   }
`;
const Icon = styled.div`
   display: flex;
   align-items: center;
   justify-content: center;
   width: 40px;
   height: 40px;
   border-radius: 50%;
   margin: 10px;
   background-color: white;
   transition: all 0.5s ease;
   &:hover {
      background-color: ${props => props.bgcl === 'fav' && 'red'};
      transform: scale(1.1);
   }
`;

const ProductItem = ({ items }) => {
   return (
      <Container>
         <Circle />
         <Image src={items.img} />
         <Info>
            <Icon>
               <ShoppingCartOutlined />
            </Icon>
            <Icon>
               <SearchOutlined />
            </Icon>
            <Icon bgcl="fav" >
               <FavoriteBorderOutlined />
            </Icon>
         </Info>
      </Container>
   );
};

export default ProductItem;
