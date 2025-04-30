import React from "react";
import styled from "styled-components";
import GridCard from "./GridCard";
import PropertyIcon from "../assets/PropertyIcon.svg"; // Icon for "Total Property"
import TenantsIcon from "../assets/TenantsIcon.svg"; // Icon for "Total Tenants"
import OwnersIcon from "../assets/OwnersIcon.svg"; // Icon for "Total Owners"
import IncidentsIcon from "../assets/IncidentsIcon.svg"; // Icon for "Total Incidents"

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr); /* 4 equal columns for the cards */
  gap: 16px;
  padding: 16px;
`;

const BottomRow = () => {
  return (
    <GridContainer>
      <GridCard
        icon={<img src={PropertyIcon} alt="Property Icon" />}
        title="Total Property"
        quantity="15"
        bgColor="#e8f5e9"
      />
      <GridCard
        icon={<img src={TenantsIcon} alt="Tenants Icon" />}
        title="Total Tenants"
        quantity="15"
        bgColor="#fce4ec"
      />
      <GridCard
        icon={<img src={OwnersIcon} alt="Owners Icon" />}
        title="Total Owners"
        quantity="15"
        bgColor="#e3f2fd"
      />
      <GridCard
        icon={<img src={IncidentsIcon} alt="Incidents Icon" />}
        title="Total Incidents"
        quantity="15"
        bgColor="#fff3e0"
      />
    </GridContainer>
  );
};

export default BottomRow;