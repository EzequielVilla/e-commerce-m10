import { Grid, Link } from "@mui/material";
import styled from "styled-components";
import { Body } from "ui/text";

export const Root = styled.div`
    background-color: black;
    color: white;
    display: grid;
    grid-template-rows: auto;
    height: 500px;

    @media (min-width: 376px) {
        grid-template-columns: 1fr 1fr;
        height: 500px;
    }
`;

export const GridContainer = styled(Grid).attrs(() => ({
    container: true,
    direction: "column",
}))`
    align-items: center;
    justify-content: center;
`;

export const StyledFooterLink = styled(Link).attrs(() => ({
    underline: "none",
}))`
    margin: 15px 0px;
    display: flex;
    align-items: center;
    svg {
        margin-right: 10px;
    }
`;
