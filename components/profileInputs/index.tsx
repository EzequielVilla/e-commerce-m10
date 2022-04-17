import { useUpdateProfile } from "lib/hooks";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { PrimaryButton } from "ui/buttons";
import { InputWithLabel } from "ui/inputs";
import { Subtitle, TinyText } from "ui/text";
import { Root, MarginTop } from "./styled";

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
  const { setInputData } = useUpdateProfile();
  const onSubmitHandler = (data: any) => {
    setInputData(data);
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
          <PrimaryButton type="submit">Guardar</PrimaryButton>
        </MarginTop>
      </form>
    </Root>
  );
}
