import styled from "styled-components";
import { mobile } from "../../../MediaQuery";

const Container = styled.div`
    background: linear-gradient(
    rgba(255, 255, 255, 0.4),
    rgba(255, 255, 255, 0.5)
  ),
  url("https://images.hdqwalls.com/download/lindsay-ellingson-4k-2018-by-3840x2400.jpg")
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
    width: 40%;
    padding: 20px;
    ${mobile({ width: "75%" })}
`;

const Title = styled.h2`
    color: teal;
    font-size: 24px;
    font-weight: 300;
`;

const Form = styled.form`
    display: flex;
    flex-wrap: wrap;
`;

const Input = styled.input`
    flex: 1;
    outline: none;
    margin: 20px 10px 0px 0px;
    padding: 10px;
    min-width: 40%;
`;

const Agreement = styled.span`
    font-size: 13px;
    margin: 20px 0px;
`;

const Button = styled.button`
    width: 40%;
    border: none;
    padding: 15px 20px;
    background-color: teal;
    color: white;
    cursor: pointer;
`;

const Register = () => {
    return (
        <Container>
            <Wrapper>
                <Title>CREATE AN ACCOUNT</Title>
                <Form>
                    <Input placeholder="first name" />
                    <Input placeholder="last name" />
                    <Input placeholder="username" />
                    <Input placeholder="email" />
                    <Input placeholder="password" />
                    <Input placeholder="confirm password" />
                    <Agreement>
                        By creating an account, I agree to the <b style={{ color: "#FF6347", cursor: "pointer" }}>Terms of Use</b> and <b style={{ color: "#FF6347", cursor: "pointer" }}>Privacy Policy</b>. Have trouble Sign Up? <b style={{ color: "#FF6347", cursor: "pointer" }}>Get Help</b>
                    </Agreement>
                    <Button>SIGN UP</Button>
                </Form>
            </Wrapper>
        </Container>
    );
};

export default Register;