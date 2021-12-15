import { Send } from '@material-ui/icons';
import styled from 'styled-components';

const Container = styled.div`
    margin-top: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: 60vh;
    background-color: #f7f1e3;
`;

const Title = styled.h2`
    color: teal;
    font-size: 70px;
    margin-bottom: 20px;
    font-weight: 700;
`;

const Details = styled.div`
    font-size: 24px;
    color: gray;
    font-weight: 300;
    margin-bottom: 20px;
`;

const InputContainer = styled.div`
    display: flex;
    justify-content: space-between;
    border: 1px solid lightgray;
    border-radius: 4px;
    width: 50%;
    height: 40px;
    background-color: white;
`;

const Input = styled.input`
    flex: 8;
    padding-left: 20px;
    outline: none;
    border: none;
`;

const Button = styled.button`
    flex: 1;
    border: none;
    border-radius: 4px;
    background-color: teal;
    color: white;
    cursor: pointer;
`;


const Contact = () => {
    return (
        <Container>
            <Title>Contact Us</Title>
            <Details>
                Stay with us for updates on your favorite products
            </Details>
            <InputContainer>
                <Input />
                <Button>
                    <Send />
                </Button>
            </InputContainer>
        </Container>
    );
};

export default Contact;