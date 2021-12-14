import styled from 'styled-components';
import Typical from 'react-typical';

const Container = styled.div`
    height: 36px;
    background-color: teal;
    display: flex;
    color: white;
    align-items: center;
    justify-content: center;
    font-size: 16px;
    font-weight: 500;
`;

const Announcement = () => {
    return (
        <Container>
            <Typical
                loop={Infinity}
                steps={[
                    "Christmas Offer !! Free Shipping on Orders Over $50", 5000,
                    "Christmas Discount !! 15% discount on each product", 5000
                ]}
            />
        </Container>
    );
};

export default Announcement;