import styled from "styled-components";

export const Root = styled.div``;

export const Margin = styled.div`
  margin: 10px 0px;
`;
export const SearchBar = styled.div`
  background-color: black;
  display: flex;
  flex-direction: row;
  height: 40px;
  align-items: center;
  justify-self: center;
  @media (max-width: 1023px) {
    display: none;
  }
` as any;

export const SearchColumn = styled.div`
  background-color: black;
  display: flex;
  flex-direction: column;
  height: 120px;
  align-items: center;
  justify-self: center;
  justify-content: space-around;
  @media (min-width: 1024px) {
    display: none;
  }
` as any;
