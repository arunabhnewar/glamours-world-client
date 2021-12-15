import styled from "styled-components";
import MenCategory from "./MenCategory/MenCategory";


const Container = styled.div`
    
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

const manCategories = [
    {
        id: 1,
        title: 'Shirt',
        img: "https://glam-world-shirts.netlify.app/shirts-15.jpg"
    },
    {
        id: 2,
        title: 'T-Shirt',
        img: "https://glam-world-t-shirts.netlify.app/t-shirts-4.jpg"
    },
    {
        id: 1,
        title: 'Jeans',
        img: "https://glam-world-jeans.netlify.app/jeans-1.jpg"
    },
    {
        id: 1,
        title: 'Trousers',
        img: "https://glam-world-trousers.netlify.app/trousers-4.jpg"
    },
    {
        id: 1,
        title: 'Shoes',
        img: "https://glam-world-casual-shoes.netlify.app/casual-shoes-11.jpg"
    }
]

const MenCategories = () => {
    return (
        <Container>
            <Title>Men Zone</Title>
            <Products>
                {manCategories.map(category => (
                    <MenCategory key={category.id} category={category} />
                ))}
            </Products>
        </Container>
    );
};

export default MenCategories;