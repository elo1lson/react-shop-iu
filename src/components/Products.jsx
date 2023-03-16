import styled from "styled-components";
import { popularProducts } from "../data";
import { Product } from "./Product";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 20px;
  justify-content: space-between;
`;
export const Products = () => {
  return (
    <Container>
      {popularProducts.map((i) => {
        return <Product item={i} key={i.id} />;
      })}
    </Container>
  );
};
