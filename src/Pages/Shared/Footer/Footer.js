import { Facebook, Instagram, MailOutline, Phone, Room, Twitter, WhatsApp, YouTube } from "@material-ui/icons";
import styled from "styled-components";
import { mobile } from "../../../MediaQuery";

const Container = styled.div`
    display: flex;
    ${mobile({ flexDirection: "column" })};
`;

const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;
`;

const Logo = styled.h2`
    color: teal;
`;

const Original = styled.img`
    width: 10%;
    margin-right: 10px;
`;

const Guarantee = styled.span`
    color: gray;
    font-weight: 700;
`;

const Return = styled.img`
    width: 10%;
    margin-right: 10px;
`;

const SocialContainer = styled.div`
    display: flex;
`;

const SocialIcon = styled.div`
    width: 40px;
    height: 40px;
    color: white;
    background-color: #${(props) => props.color};
     display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
    border-radius: 50%;
    cursor: pointer;
`;

const Center = styled.div`
    flex: 1;
    padding: 20px;
    ${mobile({ display: "none" })};
`;

const Title = styled.h3`
    color: teal;
    margin-bottom: 30px;
`;

const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
`;

const ListItem = styled.li`
    width: 50%;
    cursor: pointer;
    color: gray;
    margin-bottom: 10px;
`;

const Right = styled.div`
    flex: 1;
    padding: 20px;
    ${mobile({ backgroundColor: "#fff8f8" })};
`;

const ContactItem = styled.div`
    margin-bottom: 20px;
    display: flex;
    align-items: center;
    color: gray;
`;

const Payment = styled.img`
    width: 50%;
`;

const Footer = () => {
    return (
        <Container>
            <Left>
                <Logo>Glamours World</Logo>
                <ContactItem>
                    <Original src="https://constant.myntassets.com/web/assets/img/6c3306ca-1efa-4a27-8769-3b69d16948741574602902452-original.png" />
                    <Guarantee>100% ORIGINAL guarantee </Guarantee>
                </ContactItem>
                <ContactItem>
                    <Return src="https://constant.myntassets.com/web/assets/img/ef05d6ec-950a-4d01-bbfa-e8e5af80ffe31574602902427-30days.png" />
                    <Guarantee>Return within 30days</Guarantee>
                </ContactItem>
                <SocialContainer>
                    <SocialIcon color="55ACEE">
                        <Twitter />
                    </SocialIcon>
                    <SocialIcon color="3B5999">
                        <Facebook />
                    </SocialIcon>
                    <SocialIcon color="E4405F">
                        <Instagram />
                    </SocialIcon>
                    <SocialIcon color="FF0000" >
                        <YouTube />
                    </SocialIcon>
                    <SocialIcon color="25D366" >
                        <WhatsApp />
                    </SocialIcon>
                </SocialContainer>
            </Left>

            <Center>
                <Title>Useful Links</Title>
                <List>
                    <ListItem> Home</ListItem>
                    <ListItem> Cart</ListItem>
                    <ListItem>Men Zone</ListItem>
                    <ListItem>Women Zone</ListItem>
                    <ListItem>Trends Fashion</ListItem>
                    <ListItem>My Account</ListItem>
                    <ListItem>Order Tracking</ListItem>
                    <ListItem>Wishlist</ListItem>
                    <ListItem>FAQ</ListItem>
                    <ListItem>Terms</ListItem>
                </List>
            </Center>

            <Right>
                <Title>Contact</Title>
                <ContactItem>
                    <Room style={{ marginRight: "10px" }} /> 333 niketon, gulshan 1, dhaka
                </ContactItem>
                <ContactItem>
                    <Phone style={{ marginRight: "10px" }} /> +880 123 456 789
                </ContactItem>
                <ContactItem>
                    <MailOutline style={{ marginRight: "10px" }} /> glamours.world@mail.com
                </ContactItem>
                <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
            </Right>
        </Container>
    );
};

export default Footer;