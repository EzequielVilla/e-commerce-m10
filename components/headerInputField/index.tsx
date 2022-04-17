import { SearchBar } from "./styled";
import React from "react";
import { SearchHeaderButton } from "ui/buttons";
import { HeaderInput } from "ui/inputs";

export function InputField() {
    return (
        <SearchBar>
            <HeaderInput color="primary" label="Buscar"></HeaderInput>
            <SearchHeaderButton className="search-button">
                Buscar
            </SearchHeaderButton>
        </SearchBar>
    );
}
