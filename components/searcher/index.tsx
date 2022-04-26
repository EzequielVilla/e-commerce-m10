import { SearchButton, SearchHeaderButton } from "ui/buttons";
import { HeaderInput, PagesInput } from "ui/inputs";
import { Margin, Root, SearchColumn } from "components/searcher/styled";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import { SearchBar } from "./styled";

export function SearcherHeader() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const router = useRouter();

  const onSubmit = (data: any) => {
    router.push(`/search/${data.q}`);
  };
  return (
    <Root>
      <form onSubmit={handleSubmit(onSubmit)}>
        <SearchBar>
          <HeaderInput
            color="primary"
            label="Buscar"
            {...register("q")}
          ></HeaderInput>
          <SearchHeaderButton type="submit" className="search-button">
            Buscar
          </SearchHeaderButton>
        </SearchBar>
      </form>
    </Root>
  );
}

export function SearcherColumn() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const router = useRouter();

  const onSubmit = (data: any) => {
    router.push(`/search/${data.q}`);
  };
  return (
    <Root>
      <form onSubmit={handleSubmit(onSubmit)}>
        <SearchColumn>
          <HeaderInput
            color="primary"
            label="Buscar"
            {...register("q")}
          ></HeaderInput>
          <SearchHeaderButton type="submit" className="search-button">
            Buscar
          </SearchHeaderButton>
        </SearchColumn>
      </form>
    </Root>
  );
}
export function Searcher() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const router = useRouter();

  const onSubmit = (data: any) => {
    if (data.q) router.push(`/search/${data.q}`);
  };
  return (
    <Root>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Margin>
          <PagesInput {...register("q")} />
        </Margin>
        <Margin>
          <SearchButton type="submit">Buscar</SearchButton>
        </Margin>
      </form>
    </Root>
  );
}
