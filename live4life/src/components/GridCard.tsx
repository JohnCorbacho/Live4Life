import React from "react";
import styled from "styled-components";

interface IconWrapperProps {
  bgColor: string;
}

const CardContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 24px; /* Adjusted padding for a balanced layout */
  border-radius: 12px;
  background-color: #fff;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
  flex: 1;
`;

const IconWrapper = styled.div<IconWrapperProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  color: ${(props) => props.bgColor || "#000"};
  margin-right: 12px; /* Added margin to separate the icon from the title */
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex: 1;
`;

const Title = styled.h3`
  font-size: 14px;
  color: darkgray;
  margin: 0;
`;

const QuantityWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const Quantity = styled.h2`
  font-size: 24px;
  font-weight: bold;
  color: #000;
  margin: 0;
`;

const ChangeIndicator = styled.span<{ isPositive: boolean }>`
  font-size: 14px;
  color: ${(props) => (props.isPositive ? "#4caf50" : "#e91e63")};
`;

const GridCard = ({
  icon,
  title,
  quantity,
  bgColor,
  change,
}: {
  icon?: React.ReactNode;
  title: string;
  quantity: string;
  bgColor: string;
  change?: { value: string; isPositive: boolean };
}) => {
  return (
    <CardContainer>
      {icon && <IconWrapper bgColor={bgColor}>{icon}</IconWrapper>}
      <ContentWrapper>
        <Title>{title}</Title>
        <QuantityWrapper>
          <Quantity>{quantity}</Quantity>
          {change && (
            <ChangeIndicator isPositive={change.isPositive}>
              {change.value}
            </ChangeIndicator>
          )}
        </QuantityWrapper>
      </ContentWrapper>
    </CardContainer>
  );
};

export default GridCard;