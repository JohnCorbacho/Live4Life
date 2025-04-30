import React from "react";
import styled from "styled-components";
import GridCard from "./GridCard";

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* 3 equal columns for the cards */
  gap: 16px;
  padding: 16px;
`;

const TopRow = () => {
  return (
    <GridContainer>
      <GridCard
        title="Income"
        quantity="$47,007.19"
        bgColor="#e3f2fd"
        change={{ value: "+14.2%", isPositive: true }}
      />
      <GridCard
        title="Bills"
        quantity="-$47,007.19"
        bgColor="#e8f5e9"
        change={{ value: "-10.2%", isPositive: false }}
      />
      <GridCard
        title="Benefit"
        quantity="$23,367.60"
        bgColor="#fff3e0"
        change={{ value: "+57.9%", isPositive: true }}
      />
    </GridContainer>
  );
};

export default TopRow;