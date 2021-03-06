import styled from "styled-components";
import { mobile } from "../../../../../MediaQuery";

const Container = styled.div`
    flex: 1;
    margin: 3px;
    height: 70vh;
    position: relative;
`;

const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    ${mobile({ height: "25vh" })};
`;

const Info = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const Title = styled.h2`
    color:white;
    margin-bottom: 20px;
`;

const Button = styled.button`
    border:none;
    padding: 10px;
    background-color: teal;
    color: white;
    cursor: pointer;
    font-weight: 600;
`;

const MenCategory = ({ category }) => {
    return (
        <Container>
            <Image src={category?.img} />
            <Info>
                <Title>
                    {category.title}
                </Title>
                <Button>See More</Button>
            </Info>
        </Container>
    );
};

export default MenCategory;