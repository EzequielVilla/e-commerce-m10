import styled from "styled-components";
import { BurguerOption } from "ui/icons";

export const MenuRoot = styled.div`
    @media (min-width: 1024px) {
        display: none;
    }
    &.MuiMenu-root .MuiMenu-list {
        @media (min-width: 1024px) {
            display: none;
        }
    }
`;
export const StyledBurger = styled(BurguerOption)`
    cursor: pointer;
    height: auto;
    width: 60px;
    margin-right: 10px;
`;

export const MenuContainer = styled.div``;
