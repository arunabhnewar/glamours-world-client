import { Badge } from '@material-ui/core';
import { Search, ShoppingBasketOutlined } from '@material-ui/icons';
import React from 'react';
import styled from 'styled-components';
import { mobile } from '../../../MediaQuery';

const Container = styled.div`
    height: 64px;
    margin-bottom: 10px;
    ${mobile({ height: "50px" })}
`;

const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    ${mobile({ padding: "10px 0px" })}
`;

const Left = styled.div`
    flex: 1;
    display: flex;
    text-align: center;
`;

const Language = styled.span`
    font-size: 12px;
    cursor: pointer; 
    ${mobile({ display: "none" })}
`;

const SearchContainer = styled.div`
    display: flex;
    align-items: center; 
    margin-left: 20px;
    padding: 5px;
    border: 0.5px solid lightgray;
`;

const Input = styled.input`  
    border: none;
    outline: none;
    ${mobile({ width: "50px" })}
`;

const Center = styled.div`
    flex: 1;
    align-items: center; 
`;

const Logo = styled.h2`
    font-weight: 700;
    color: teal;
    ${mobile({ fontSize: "20px" })}
`;

const Right = styled.div`  
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    ${mobile({ flex: 2, justifyContent: "center" })}
`;

const NavMenu = styled.div` 
    font-size: 16px;
    cursor: pointer;
    margin-left: 25px;
    ${mobile({ fontSize: "12px", marginLeft: "10px" })}
`;


const Navbar = () => {
    return (
        <Container>
            <Wrapper>
                <Left>
                    <Language>EN</Language>
                    <SearchContainer>
                        <Input placeholder="Search" />
                        <Search style={{ color: "gray", fontSize: 16 }} />
                    </SearchContainer>
                </Left>

                <Center>
                    <Logo>Glamours</Logo>
                </Center>

                <Right>
                    <NavMenu>Sign Up</NavMenu>
                    <NavMenu>Sign In</NavMenu>
                    <NavMenu>
                        <Badge badgeContent={1} color="secondary">
                            <ShoppingBasketOutlined />
                        </Badge>
                    </NavMenu>
                </Right>
            </Wrapper>
        </Container>
    );
};

export default Navbar;