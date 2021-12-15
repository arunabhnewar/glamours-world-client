import styled from "styled-components";
import { FavoriteBorderOutlined, SearchOutlined, ShoppingCartOutlined } from "@material-ui/icons";

const Info = styled.div`
    height: 100%;
    width: 100%;
    z-index: 3;
    position: absolute;
    border-radius: 5px;
    top: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.2);
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.5s ease;
    cursor: pointer;
    opacity: 0;
`;

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #ecf0f1;
    border-radius: 5px;
    min-width: 280px;
    height: 350px;
    margin: 5px;
    position: relative;

    &:hover ${Info}{
        opacity: 1;
      }
`;

const Circle = styled.div`
    width: 200px;
    height: 200px;
    border-radius: 50%;
    position: absolute;
`;

const Image = styled.img`
    height: 90%;
    z-index: 2;
    border-radius: 5px;
`;

const Icon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: white;
    color: teal;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 10px;
    transition: all 0.5s ease;

    &:hover {
    background-color: #e9f5f5;
    transform: scale(1.1);
  }
`;

const Product = ({ product }) => {
    const { img } = product;
    return (
        <Container>
            <Circle />
            <Image src={img} />
            <Info>
                <Icon>
                    <FavoriteBorderOutlined />
                </Icon>
                <Icon>
                    <ShoppingCartOutlined />
                </Icon>
                <Icon>
                    <SearchOutlined />
                </Icon>
            </Info>
        </Container>
    )
};

export default Product;