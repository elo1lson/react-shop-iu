import styled from "styled-components";
import React from "react";

const Container = styled.div`
  flex: 1;
  margin: 3px;
  position: relative

`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
/*
const Info = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  algin-items: center:
  justify-content: center;

`;*/

const Info = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h1`
  color: white;
  margin-bottom: 25px
  `;
  
const Button = styled.button`
  border: none;
  padding: 10px;
  background-color: white;
  color: gray;
  cursor: pointer;
  font-wheight: 600;
  
  `;
export const CategoryItem = ({ item }) => {
  return (
    <Container>
      <Image src={item.img}></Image>
      <Info>
        <Title>{item.title}</Title>
        <Button>SHOP NOW</Button>
      </Info>
    </Container>
  );
};
