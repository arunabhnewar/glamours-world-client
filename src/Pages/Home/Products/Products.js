import { useEffect, useState } from "react";
import styled from "styled-components";
import Product from '../Product/Product';

const Container = styled.div`
    margin-top: 50px;
`;

const Title = styled.h2`
    font-size: 32px;
    color: teal;
    text-align: left;
    font-weight: 700;
    margin-left: 20px;
`;

const TrendsProducts = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 20px;
`;

const Products = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('./products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);

    return (
        <Container>
            <Title>Trends Products</Title>
            <TrendsProducts>
                {products?.map(product =>
                    <Product key={product?.id} product={product} />
                )}
            </TrendsProducts>
        </Container>
    );
};

export default Products;