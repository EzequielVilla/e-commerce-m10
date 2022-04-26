import styled from "styled-components";

export const Root = styled.div`
  /* display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center; */
  display: grid;
  grid-template-rows: auto;
  height: 500px;
  align-items: center;
  justify-content: center;
  h2 {
    align-self: flex-end;
  }
  form {
    margin-top: 20px;
    align-self: flex-start;
  }
  @media (min-width: 375px) {
    height: 800px;
  }
`;

export const FormContent = styled.div``;

export const MarginTop = styled.div`
  margin-top: 20px;
`;
