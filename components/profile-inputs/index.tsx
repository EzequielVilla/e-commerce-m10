import { useState } from "react";
import { useForm } from "react-hook-form";
import { PrimaryButton } from "ui/buttons";
import { InputWithLabel } from "ui/inputs";
import { Subtitle } from "ui/text";
import { Root, MarginTop } from "./styled";
import CircularProgress from "@mui/material/CircularProgress";
import { updateProfileData } from "lib/api";
import { useRouter } from "next/router";

interface ProfileInput {
  direction: string;
  name: string;
  phone: string;
}

export function ProfileInputs() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const onSubmitHandler = async (data: any) => {
    setIsLoading(true);
    const res = await updateProfileData(data);
    if (!res) return;
    if (res.upgraded) {
      window.alert("Perfil actualizado");
      router.push("/");
    }
  };
  return (
    <Root>
      <Subtitle>Perfil</Subtitle>
      <form onSubmit={handleSubmit(onSubmitHandler)}>
        <InputWithLabel
          text="Nombre Completo"
          placeholder="null"
          data="name"
          type="string"
          register={register}
        ></InputWithLabel>
        <MarginTop>
          <InputWithLabel
            text="Dirección"
            placeholder="null"
            data="direction"
            type="string"
            register={register}
          ></InputWithLabel>
        </MarginTop>
        <MarginTop>
          <InputWithLabel
            text="Teléfono"
            placeholder="null"
            data="phone"
            type="string"
            register={register}
          ></InputWithLabel>
        </MarginTop>
        <MarginTop>
          <PrimaryButton type="submit">
            {isLoading ? <CircularProgress /> : <>Guardar</>}{" "}
          </PrimaryButton>
        </MarginTop>
      </form>
    </Root>
  );
}
