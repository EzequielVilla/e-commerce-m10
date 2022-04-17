import { useEmail, useCode } from "lib/hooks";
import { useRouter } from "next/router";
import { useEffect } from "react";

import { useForm } from "react-hook-form";

import { PrimaryButton } from "ui/buttons";
import { InputWithLabel } from "ui/inputs";
import { Subtitle, TinyText } from "ui/text";
import { FormContent, MarginTop, Root } from "./styled";

export function LogInSteps() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const { email, setEmail } = useEmail();
  const { setCode } = useCode(email);

  const onSubmitEmail = (data: any) => {
    setEmail(data.email);
    // clean the input for the code.
    reset();
  };
  const onSubmitCode = (data: any) => {
    setCode(data.code);
  };
  return (
    <>
      {!email ? (
        <Root>
          <Subtitle>Ingresar</Subtitle>
          <form onSubmit={handleSubmit(onSubmitEmail)}>
            <FormContent>
              <InputWithLabel
                text="Email"
                placeholder="null"
                data="email"
                type="email"
                register={register}
              ></InputWithLabel>
              <MarginTop>
                <PrimaryButton type="submit">Continuar</PrimaryButton>
              </MarginTop>
            </FormContent>
          </form>
        </Root>
      ) : (
        <Root>
          <Subtitle>Código</Subtitle>
          <form onSubmit={handleSubmit(onSubmitCode)}>
            <FormContent>
              <InputWithLabel
                placeholder="123456"
                data="code"
                type="text"
                register={register}
              ></InputWithLabel>
              <MarginTop>
                <TinyText>Te enviamos un código a tu email</TinyText>
              </MarginTop>
              <MarginTop>
                <PrimaryButton type="submit">Ingresar</PrimaryButton>
              </MarginTop>
            </FormContent>
          </form>
        </Root>
      )}
    </>
  );
}
