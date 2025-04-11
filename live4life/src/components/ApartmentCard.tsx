import React from "react";
import styled from "styled-components";
import { FaBed, FaBath } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";
import apartmentImage from "../Images/image (1).jpg";

const CardContainer = styled.div`
  width: 300px;
  border-radius: 12px;
  overflow: visible;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
  background-color: #fff;
  display: flex;
  flex-direction: column;
  margin: 16px;
  position: relative;
  padding-top: 110px;
`;

const ImageContainer = styled.div`
  width: 246px;
  height: 160px;
  overflow: hidden;
  position: absolute;
  top: -80px;
  left: 50%;
  transform: translateX(-50%);
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
  background-color: #fff;
  border-radius: 16px;
`;

const ApartmentImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  border-radius: 16px;
`;

const CardContent = styled.div`
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const BuildingName = styled.h1`
  font-size: 20px;
  font-weight: bold;
  margin: 0;
  color: black;
  text-align: left;
`;

const Location = styled.div`
  display: flex;
  align-items: center;
  font-size: 14px;
  color: darkgray;
  text-align: left;
  justify-content: flex-start;
  padding-bottom: 12px;
  position: relative;

  &::after {
    content: "";
    display: block;
    width: 70%;
    height: 1px;
    background-color: rgba(0, 0, 0, 0.1);
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
  }

  svg {
    margin-right: 8px;
    color: #4caf50;
  }
`;

const Features = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  color: darkgray;

  div {
    display: flex;
    align-items: center;

    svg {
      margin-right: 4px;
      color: darkgray;
    }
  }
`;

const ApartmentCard = () => {
  return (
    <CardContainer>
      <ImageContainer>
        <ApartmentImage
          src="/Images/image (1).jpg"
          alt="Apartment"
        />
      </ImageContainer>
      <CardContent>
        <BuildingName>Nacoa Apartment</BuildingName>
        <Location>
          <MdLocationOn />
          1032 Buena Vista Avenue, Eugene, OR 97401
        </Location>
        <Features>
          <div>
            <FaBed /> 2 Beds
          </div>
          <div>
            <FaBath /> 1 Bath
          </div>
          <div>1400 SQFT</div>
        </Features>
      </CardContent>
    </CardContainer>
  );
};

export default ApartmentCard;