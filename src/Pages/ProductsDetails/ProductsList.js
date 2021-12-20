import React from 'react';
import styled from 'styled-components';
import Announcement from '../Home/Announcement/Announcement';
import Contact from '../Home/Contact/Contact';
import Products from '../Home/Products/Products';
import Footer from '../Shared/Footer/Footer';
import Navbar from '../Shared/Navbar/Navbar'
import { mobile } from '../../MediaQuery';

const Container = styled.div``;

const Title = styled.h2`
    margin: 20px;
    color: teal;
`;

const FilterContainer = styled.div`
    display: flex;
    justify-content: space-between;
`;

const Filter = styled.div`
    margin: 20px;
    ${mobile({ width: "0px 20px", display: "flex", flexDirection: "column" })};
`;

const FilterText = styled.span`
    color: teal;
    font-size: 20px;
    font-weight: 600;
    margin-right: 20px;
    ${mobile({ marginRight: "0px" })};
`;

const Select = styled.select`
    padding: 10px;
    margin-right: 20px;
    outline: none;
    cursor: pointer;
    ${mobile({ margin: "10px 0px" })}
`;

const Option = styled.option`
`;

const ProductsList = () => {
    return (
        <Container>
            <Announcement />
            <Navbar />
            <Title>Dresses</Title>
            <FilterContainer>
                <Filter>
                    <FilterText>Filter Products: </FilterText>
                    <Select>
                        <Option disabled selected>Color</Option>
                        <Option>Black</Option>
                        <Option>White</Option>
                        <Option>Green</Option>
                        <Option>Blue</Option>
                        <Option>Red</Option>
                        <Option>Yellow</Option>
                    </Select>

                    <Select>
                        <Option disabled selected>Size</Option>
                        <Option>XXL</Option>
                        <Option>XL</Option>
                        <Option>L</Option>
                        <Option>M</Option>
                        <Option>S</Option>
                        <Option>XS</Option>
                    </Select>
                </Filter>
                <Filter>
                    <FilterText>Sort Products: </FilterText>
                    <Select>
                        <Option selected>Newest</Option>
                        <Option>Price (asc)</Option>
                        <Option>Price (desc)</Option>
                    </Select>
                </Filter>
            </FilterContainer>
            <Products />
            <Contact />
            <Footer />
        </Container>
    );
};

export default ProductsList;