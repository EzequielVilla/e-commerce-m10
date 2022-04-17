import styled from "styled-components";

export const SearchBar = styled.div`
    background-color: black;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-self: center;
    @media (min-width: 1024px) {
        //cambio en el header del burger por las opciones desplegadas
        display: none;
    }
    .search-button {
        margin: 20px 0px;
        width: 300px;
    }
` as any;
