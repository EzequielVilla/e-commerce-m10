import styled from "styled-components";
import { Typography } from "@mui/material";

const ElementalText: any = styled(Typography)`
    font-family: var(--font-family-type);

    color: ${({ color }: any) => (color ? color : "black")};
`;

export const Title = styled(ElementalText).attrs({
    variant: "h1",
})`
    margin: 0px;
    font-size: 48px;
    font-weight: bold;
`;

export const Subtitle = styled(ElementalText).attrs({
    variant: "h2",
})`
    font-weight: bold;
    margin: 0px;
    font-size: 32px;
`;

export const BoldText = styled(ElementalText)`
    font-size: 20px;
    font-weight: bold;
`;

export const Text = styled(ElementalText)`
    font-size: 20px;
`;
export const Body = styled(ElementalText)`
    font-size: 16px;
    line-height: 20px;
    font-weight: 400;
`;

export const BodyBold = styled(Body)`
    font-weight: bold;
`;
export const TinyText = styled(ElementalText)`
    font-size: 12px;
    line-height: 15px;
`;
