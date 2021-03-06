import { Add, Remove } from "@material-ui/icons";
import styled from "styled-components";
import Announcement from "../../Home/Announcement/Announcement";
import Contact from "../../Home/Contact/Contact";
import Footer from "../../Shared/Footer/Footer";
import Navbar from "../../Shared/Navbar/Navbar";
import { mobile } from "../../../MediaQuery";

const Container = styled.div``;

const Wrapper = styled.div`
    padding: 50px;
    display: flex;
    ${mobile({ padding: "10px", flexDirection: "column" })};
`;

const ImageContainer = styled.div`
    flex: 1;
`;

const Image = styled.img`
    object-fit: cover;
    width: 100%;
    height: 90vh;
    ${mobile({ height: "40vh" })};
`;

const InfoContainer = styled.div`
    flex: 1;
    padding: 0px 50px;
    ${mobile({ padding: "10px" })};
`;

const Title = styled.h2`
    color: teal;
    font-weight: 300;
`;

const Summary = styled.h4`
    color: gray;
    font-weight: 300;
`;

const Rating = styled.h4`
    color: gray;
`;

const Details = styled.p`
    margin: 20px 0px;
    color: gray;
`;

const Price = styled.span`
    font-weight: 300;
    font-size: 40px;
`;

const FilterContainer = styled.div`
    width: 50%;
    margin: 30px 0px;
    display: flex;
    justify-content: space-between;
    ${mobile({ width: "100%" })};
`;

const Filter = styled.div`
    display: flex;
    align-items: center;
`;

const FilterTitle = styled.span`
    font-size: 20px;
    font-weight: 300;
`;

const FilterColor = styled.div`
    background-color: ${(props) => props.color};
    width: 20px;
    height: 20px;
    border-radius: 50%;
    margin: 0px 5px;
    cursor: pointer;
`;

const FilterSize = styled.select`
    margin-left: 10px;
    padding: 5px;
    outline: none;
    cursor: pointer;
`;

const FilterSizeOption = styled.option`
`;


const AddContainer = styled.div`
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    ${mobile({ width: "100%" })};
`;

const AmountContainer = styled.div`
    display: flex;
    align-items: center;
    font-weight: 700;
`;

const Amount = styled.span`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0px 5px;
    width: 30px;
    height: 30px;
    border-radius: 10px;
    border: 1px solid teal;
`;

const Button = styled.button`
    border: 2px solid teal;
    background-color: teal;
    border-radius: 4px;
    color: white;
    font-weight: 500;
    padding: 15px;
    cursor: pointer;
    &:hover {
    color: teal;
    background-color: white;
  }
`;



const ProductDetail = () => {
    return (
        <Container>
            <Announcement />
            <Navbar />
            <Wrapper>
                <ImageContainer>
                    <Image src="https://winter-trends.netlify.app/trends-9.jpg" />
                </ImageContainer>
                <InfoContainer>
                    <Title>Roadster</Title>
                    <Summary>Men Black Solid Hooded Sweatshirt</Summary>
                    <Rating>4.4</Rating>
                    <Details>Black solid sweatshirt, has a hood, long sleeves, straight hem</Details>
                    <Price>$ 15</Price>

                    <FilterContainer>
                        <Filter>
                            <FilterTitle>Color</FilterTitle>
                            <FilterColor color="black" />
                            <FilterColor color="darkblue" />
                            <FilterColor color="orange" />
                            <FilterColor color="gray" />
                        </Filter>
                        <Filter>
                            <FilterTitle>Size</FilterTitle>
                            <FilterSize>
                                <FilterSizeOption>XXL</FilterSizeOption>
                                <FilterSizeOption>XL</FilterSizeOption>
                                <FilterSizeOption>L</FilterSizeOption>
                                <FilterSizeOption>M</FilterSizeOption>
                                <FilterSizeOption>S</FilterSizeOption>
                                <FilterSizeOption>XS</FilterSizeOption>
                            </FilterSize>
                        </Filter>
                    </FilterContainer>

                    <AddContainer>
                        <AmountContainer>
                            <Remove />
                            <Amount>1</Amount>
                            <Add />
                        </AmountContainer>
                        <Button>Add to Cart</Button>
                    </AddContainer>
                </InfoContainer>
            </Wrapper>
            <Contact />
            <Footer />

        </Container>
    );
};

export default ProductDetail;