import styled from "styled-components";
import { mobile } from "../../../MediaQuery";

const Container = styled.div`
    background: linear-gradient(
    rgba(255, 255, 255, 0.4),
    rgba(255, 255, 255, 0.5)
  ),
  url("https://blog.wideeyes.ai/wp-content/uploads/2018/03/HBS-PMFW-FW17-Street-Style-Day-5-8-1200x800-copia.jpg")
    center;
    background-size: cover;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
`;

const Wrapper = styled.div`
    background-color: white;
    width: 25%;
    padding: 20px;
    ${mobile({ width: "75%" })};
`;

const Title = styled.h2`
    color: teal;
    font-size: 24px;
    font-weight: 300;
`;

const Form = styled.form`
    display: flex;
    flex-direction: column;
`;

const Input = styled.input`
    flex: 1;
    outline: none;
    margin: 10px 0px;
    padding: 10px;
    min-width: 40%;
`;

const Button = styled.button`
    width: 40%;
    margin-bottom: 10px;
    border: none;
    padding: 15px 20px;
    background-color: teal;
    color: white;
    cursor: pointer;
    &:disabled {
        color: green;
        cursor: not-allowed;
      }
`;

const Link = styled.a`
    margin: 5px 0px;
    font-size: 12px;
    cursor: pointer;
`;

const Login = () => {
    return (
        <Container>
            <Wrapper>
                <Title>SIGN IN</Title>
                <Form>
                    <Input placeholder="username" />
                    <Input placeholder="password" />
                    <Button>SIGN IN</Button>
                    <Link>DO NOT YOU REMEMBER THE PASSWORD?</Link>
                    <Link>CREATE A NEW ACCOUNT</Link>
                </Form>
            </Wrapper>
        </Container>
    );
};

export default Login;