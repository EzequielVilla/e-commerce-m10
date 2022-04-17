import styled from "styled-components";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea } from "@mui/material";
import type { CardMediaProps } from "@mui/material/CardMedia";

export const StyledCard = styled(Card)`
  border: solid 5px;
  width: 330px;
  border-radius: 15px;
`;

export const StyledCardContent = styled(CardContent)`
  display: inline-grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  height: 150px;
  justify-items: center;
  border-spacing: 10px;
  border-top: solid 5px;
  width: 320px;
  background-color: var(--pink);
`;

export const StyledCardActionArea = styled(CardActionArea)``;

export const StyledCardMedia = styled(CardMedia).attrs((): any => ({}))`
  &.MuiCardMedia-img {
    cursor: pointer;
    width: 320px;
    height: 320px;
  }
`;
