import React from "react";
import styled from "styled-components";
import AddToCartButton from "../Cart/AddToCartButton";

const ProductItemWrapper = styled.div`
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: space-between;
  padding: 1%;
  background: #f5f3f4;
  border-radius: 5px;
  padding: 10px;
  margin-bottom: 2%;
  text-decoration: none;
  box-shadow: -3px 2px 10px 0px rgba(50, 50, 50, 0.75);
`;

const Title = styled.h3`
  margin-left: auto;
`;

const Thumbnail = styled.img`
  border-radius: 5px;
`;

const ProductItem = ({ data }) => (
  <ProductItemWrapper>
    <Thumbnail src={data.thumbnail} width={200} />
    <Title>{data.title}</Title>
    <AddToCartButton productId={data.id} />
  </ProductItemWrapper>
);

export default ProductItem;
