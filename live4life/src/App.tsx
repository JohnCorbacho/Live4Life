import React from "react";
import styled from "styled-components";
import TopRow from "./components/TopRow";
import BottomRow from "./components/BottomRow";

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0px; /* Reduced spacing between rows */
  padding: 16px;
  background-color: #f9f9f9;
`;

const App = () => {
  return (
    <AppContainer>
      <TopRow />
      <BottomRow />
    </AppContainer>
  );
};

export default App;