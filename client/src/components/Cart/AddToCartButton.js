import React from "react";
import styled from "styled-components";
import { Mutation } from "react-apollo";
import { ADD_TO_CART, GET_CART_TOTAL, GET_CART } from "../../constants";

const Button = styled.button`
  border: none;
  margin-left: 50%;
`;

const AddToCartButton = ({ productId }) => (
  <Mutation
    mutation={ADD_TO_CART}
    refetchQueries={[{ query: GET_CART }, { query: GET_CART_TOTAL }]}
  >
    {addToCart => (
      <Button onClick={() => addToCart({ variables: { productId } })}>
        <i className="fas fa-cart-plus"> Add to Cart</i>
      </Button>
    )}
  </Mutation>
);

export default AddToCartButton;
