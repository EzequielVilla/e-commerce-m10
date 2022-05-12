import styled from "styled-components";
import { StyledCardMedia } from "ui/card";
import { Subtitle, Text, Body } from "ui/text";
import { BuyButton } from "ui/buttons";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";

export const Root = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 1100px;
  margin: 10px;
  box-sizing: border-box;

  @media (min-width: 769px) {
    align-items: flex-start;
    height: 700px;
    margin: 60px;
    display: grid;
    grid-template-columns: 2fr 1fr;
  }
  @media (min-width: 1024px) {
    grid-template-columns: 1.5fr 1fr;
  }
`;
export const Imagen = styled(StyledCardMedia)`
  grid-column: 1 / 2;
  @media (min-width: 1024px) {
    position: absolute;

    margin-left: 100px;
    margin-top: 100px;
    transform: scale(150%);
  }
`;

export const Info = styled.div`
  display: grid;
  grid-template-rows: 50px 50px 80px auto;

  height: 700px;
  margin-left: 20px;
  @media (min-width: 769px) {
    display: inherit;
    grid-column: 2 / 2;
  }
`;

export const Name = styled(Text)`
  margin-top: 10px;
  grid-row: 1 / 1;
`;

export const Cost = styled(Subtitle)`
  margin-top: 10px;
  grid-row: 2 / 2;
`;

export const Buy = styled(BuyButton)`
  margin-top: 10px;
  grid-row: 3 / 3;
`;

export const Description = styled(Body)`
  margin-top: 30px;
  width: 300px;
  grid-row: 4 / 4;
`;

export const BoxModalContainer = styled(Box)`
  width: 400px;
  height: 300px;
  border: 4px solid #000;
  background: linear-gradient(0deg, var(--orange) 0%, var(--pink) 100%);
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  position: absolute;
  padding: 20px;
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  justify-content: space-around;
`;
export const ModalStyled = styled(Modal)`
  overflow-y: scroll;
  background-color: rgba(0, 0, 0, 0.3);
`;
export const ModalContainer = styled.div``;
