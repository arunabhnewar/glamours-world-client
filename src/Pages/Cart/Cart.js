import { Add, Remove } from '@material-ui/icons';
import styled from 'styled-components';
import Announcement from '../Home/Announcement/Announcement';
import Footer from '../Shared/Footer/Footer';
import Navbar from '../Shared/Navbar/Navbar';
import { mobile } from '../../MediaQuery';

const Container = styled.div``;

const Wrapper = styled.div`
    padding: 20px;
    ${mobile({ padding: "10px" })};
`;

const Title = styled.h2`
    color: teal;
    font-weight: 300;
    text-align: center;
`;

const Top = styled.div`
    padding: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const TopButton = styled.button`
    padding: 10px;
    font-weight: 600;
    cursor: pointer;
    border: ${(props) => props.type === "filled" && "none"};
    background-color: ${(props) =>
        props.type === "filled" ? "teal" : "transparent"};
    color: ${(props) => props.type === "filled" && "white"};
`;

const TopTexts = styled.div`
    ${mobile({ display: "none" })};
`;

const TopText = styled.span`
    margin: 0px 10px;  
    text-decoration: underline;
    cursor: pointer;
`;

const Bottom = styled.div`
    ${mobile({ flexDirection: "column" })};
    display: flex;
    justify-content: space-between;
`;

const Info = styled.div`
    flex: 3;
`;

const Product = styled.div`
    ${mobile({ flexDirection: "column" })};
    display: flex;
    justify-content: space-between;
`;

const ProductInfo = styled.div`
    display: flex;
    flex: 2;
`;

const Image = styled.img`
    width: 200px;
`;

const Details = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    padding: 20px;
`;

const ProductName = styled.span``;

const ProductSummary = styled.span``;

const ProductColor = styled.div`
    background-color: ${(props) => props.color};    
    width: 20px;
    height: 20px;
    border-radius: 50%;
`;

const ProductSize = styled.span``;

const PriceDetail = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    flex: 1;
`;

const ProductAmountContainer = styled.div`
    margin-bottom: 20px;
    display: flex;
    align-items: center;

`;

const ProductAmount = styled.div`
    margin: 5px;  
    font-size: 24px;
    ${mobile({ margin: "5px 15px" })};
`;

const ProductPrice = styled.div`
    font-size: 30px;
    font-weight: 200;
    ${mobile({ marginBottom: "20px" })};
`;

const Hr = styled.hr`
    border: none;
    height: 1px;
    background-color: #eee;
`;

const Summary = styled.div`
    border: 0.5px solid lightgray;
    border-radius: 10px;
    flex: 1;
    padding: 20px;
    height: 50vh;
`;

const SummaryTitle = styled.h1`
    font-weight: 200;
`;

const SummaryItem = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 30px 0px;
    font-weight: ${(props) => props.type === "total" && "500"};
    font-size: ${(props) => props.type === "total" && "24px"};
`;

const SummaryItemText = styled.span``;

const SummaryItemPrice = styled.span``;

const Button = styled.button`
    background-color: teal;
    outline: none;
    border: 0;
    color: white;
    width: 100%;
    padding: 10px;
    font-weight: 600;
    cursor: pointer;
`;

const Cart = () => {
    return (
        <Container>
            <Announcement />
            <Navbar />
            <Wrapper>
                <Title>YOUR BAG</Title>
                <Top>
                    <TopButton>CONTINUE SHOPPING</TopButton>
                    <TopTexts>
                        <TopText>Shopping Bag(2)</TopText>
                        <TopText>Your Wishlist (0)</TopText>
                    </TopTexts>
                    <TopButton type="filled">CHECKOUT NOW</TopButton>
                </Top>
                <Bottom>
                    <Info>
                        <Product>
                            <ProductInfo>
                                <Image src="https://winter-trends.netlify.app/trends-10.jpg" />
                                <Details>
                                    <ProductName><b>Product:</b> Roadster </ProductName>
                                    <ProductSummary><b>Summary:</b> Men Black Solid Hooded Sweatshirt </ProductSummary>
                                    <ProductSize><b>Size:</b> L</ProductSize>
                                    <ProductColor color="black" />
                                </Details>
                            </ProductInfo>
                            <PriceDetail>
                                <ProductAmountContainer>
                                    <Add />
                                    <ProductAmount>3</ProductAmount>
                                    <Remove />
                                </ProductAmountContainer>
                                <ProductPrice>
                                    $ 60
                                </ProductPrice>
                            </PriceDetail>
                        </Product>
                        <Hr />
                        <Product>
                            <ProductInfo>
                                <Image src="https://winter-trends.netlify.app/trends-5.jpg" />
                                <Details>
                                    <ProductName><b>Product:</b> Roadster </ProductName>
                                    <ProductSummary><b>Summary:</b> Women Red Solid Hooded Sweatshirt </ProductSummary>
                                    <ProductSize><b>Size:</b> S</ProductSize>
                                    <ProductColor color="red" />
                                </Details>
                            </ProductInfo>
                            <PriceDetail>
                                <ProductAmountContainer>
                                    <Add />
                                    <ProductAmount>1</ProductAmount>
                                    <Remove />
                                </ProductAmountContainer>
                                <ProductPrice>
                                    $ 10
                                </ProductPrice>
                            </PriceDetail>
                        </Product>

                    </Info>
                    <Summary>
                        <SummaryTitle>ORDER SUMMARY</SummaryTitle>
                        <SummaryItem>
                            <SummaryItemText>Subtotal</SummaryItemText>
                            <SummaryItemPrice>$ </SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem>
                            <SummaryItemText>Estimated Shipping</SummaryItemText>
                            <SummaryItemPrice>$ 5.90</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem>
                            <SummaryItemText>Shipping Discount</SummaryItemText>
                            <SummaryItemPrice>$ -5.90</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem type="total">
                            <SummaryItemText>Total</SummaryItemText>
                            <SummaryItemPrice>$ </SummaryItemPrice>
                        </SummaryItem>
                        <Button>CHECKOUT NOW</Button>
                    </Summary>
                </Bottom>
            </Wrapper>
            <Footer />
        </Container>
    );
};

export default Cart;