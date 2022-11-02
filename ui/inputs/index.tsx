import styled from "styled-components";
import TextField from "@mui/material/TextField";
import OutlinedInput from "@mui/material/OutlinedInput";
import { TinyText } from "ui/text";
import { PrimaryButton } from "ui/buttons";
import { UseFormRegister, Path } from "react-hook-form";

interface MyFormValues {
  email?: string;
  code?: string;
  name?: string;
  direction?: string;
  phone?: string;
}

interface InputProps {
  text?: string;
  placeholder: string;
  data: Path<MyFormValues>;
  register: UseFormRegister<MyFormValues>;
  type?: string;
}

export const InputWithLabel = ({
  text,
  data,
  placeholder,
  type,
  register,
}: InputProps) => {
  return (
    <>
      <TinyText>{text}</TinyText>
      <PagesInput
        placeholder={placeholder}
        type={type}
        {...register(data)}
      ></PagesInput>
    </>
  );
};

export const HeaderInput = styled(TextField).attrs(() => ({
  autcomplete: "off",
  variant: "outlined",
  placeholder: "Rug / Chair / Table",
}))`
  width: 300px;
  .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline {
    border: 4px solid white;
    border-radius: 10px;
    color: white;
  }
  .MuiFormLabel-root {
    color: white;
  }
  .MuiFormHelperText-root.Mui-focused {
    color: white;
  }
  .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline {
    border: 4px solid white;
  }
  .MuiInputBase-input {
    color: white;
    &::placeholder {
      color: white;
    }
    &:disabled {
      color: white;
    }
  }
  .MuiOutlinedInput {
    color: white;
    &::placeholder {
      color: white;
    }
    &:disabled {
      color: white;
    }
  }
`;

//! Use placeholder = "null" to get clean space.

export const PagesInput = styled(TextField).attrs((props) => ({
  autcomplete: "off",
  variant: "outlined",
  placeholder:
    props.placeholder == "null"
      ? ""
      : props.placeholder || "Rug / Chair / Table",
}))`
  width: 250px;

  .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline {
    border: 4px solid;
    border-radius: 10px;
  }
  @media (min-width: 375px) {
    width: 350px;
  }
  .MuiInputBase-input {
    text-align: center;
  }
`;
