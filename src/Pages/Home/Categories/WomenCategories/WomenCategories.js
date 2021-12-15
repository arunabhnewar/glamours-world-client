import styled from "styled-components";
import WomenCategory from "./WomenCategory/WomenCategory";


const Container = styled.div`
    margin-top: 50px;
`;

const Title = styled.h2`
    font-size: 32px;
    color: teal;
    font-weight: 700;
    margin-left: 20px;
    text-align: left;
`;

const Products = styled.div`
    display: flex;
    padding: 20px;
    justify-content: space-between;
`;

const womanCategories = [
    {
        id: 1,
        title: 'Sarees',
        img: "https://raw.githubusercontent.com/MehediHasan23/product-collection/main/saree-3.jpg"
    },
    {
        id: 2,
        title: 'Dresses',
        img: "https://glam-world-dresses.netlify.app/dresses-1.jpg"
    },
    {
        id: 1,
        title: 'Kurtas',
        img: "https://raw.githubusercontent.com/smahkafi/ekta-nam-holei-holo/main/img/kurtas-15.jpg"
    },
    {
        id: 1,
        title: 'Sports',
        img: "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/9965779/2019/9/28/ccabdd7a-8ed4-4064-8370-28c5870f9a7e1569662780469-HRX-by-Hrithik-Roshan-Women-Black-Solid-Running-Sweatshirt-1-1.jpg"
    }
]

const WomenCategories = () => {
    return (
        <Container>
            <Title>Women Zone</Title>
            <Products>
                {womanCategories.map(item => (
                    <WomenCategory key={item.id} item={item} />
                ))}
            </Products>
        </Container>
    );
};

export default WomenCategories;