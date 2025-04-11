import React from "react";
import styled from "styled-components";
import ApartmentCard from "./ApartmentCard"; 


const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 24px;
  padding: 16px;
   
`;

const ApartmentCardContainer = () => {
  return (
    <Container>
      <ApartmentCard />
      <ApartmentCard />
      <ApartmentCard />
      <ApartmentCard />
    </Container>
  );
};

export default ApartmentCardContainer;