import styled from 'styled-components';
import Typical from 'react-typical';
import { mobile } from '../../../MediaQuery';

const Container = styled.div`
    height: 36px;
    background-color: coral;
    display: flex;
    color: white;
    align-items: center;
    justify-content: center;
    font-size: 16px;
    font-weight: 500;
    ${mobile({ fontSize: "12px" })};
`;

const Announcement = () => {
    return (
        <Container>
            <Typical
                loop={Infinity}
                steps={[
                    "Christmas Offer !! Free Shipping on Orders Over $50", 7000,
                    "Christmas Discount !! 15% discount on each product", 7000
                ]}
            />
        </Container>
    );
};

export default Announcement;