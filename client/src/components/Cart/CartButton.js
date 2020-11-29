import React from "react";
import styled from "styled-components";
import { Query } from "react-apollo";
import { GET_CART_TOTAL } from "../../constants";

const Button = styled.button`
  text-decoration: none;
  border: none;
  background: inherit;
  cursor: pointer;
  padding-right: 30px;
  color: #2d333a;
`;

const CartButton = ({ onClick }) => (
  <Query query={GET_CART_TOTAL}>
    {({ data, loading, error }) => {
      return (
        <Button onClick={onClick}>
          <i className="fas fa-shopping-cart"></i>
          {` (${loading || error ? 0 : data && data.cart.total})`}
        </Button>
      );
    }}
  </Query>
);

export default CartButton;
