import { ContainerMain, ContainerWrapper, SubmitButton } from "@/components";
import { PasswordInput, TextInput } from "@/components/input";
import React, { useCallback, useState } from "react";

const DefaultPage = () => {
  const defaultValues = {
    username: "",
    password: "",
  };
  const [login, setLogin] = useState(defaultValues);

  const onChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target;
      setLogin((prev) => ({ ...prev, [name]: value }));
    },
    [login]
  );
  return (
    <div className="App">
      <ContainerWrapper>
        <ContainerMain>
          <form className="">
            <TextInput
              name="username"
              placeholder="username"
              type="text"
              value={login.username}
              required
              onChange={onChange}
            ></TextInput>
            <PasswordInput
              name="password"
              placeholder="password"
              value={login.password}
              onChange={onChange}
              required
            />
            <SubmitButton
              label="Submit"
              onClick={() => {
                console.log("SA");
              }}
            />
          </form>
        </ContainerMain>
      </ContainerWrapper>
    </div>
  );
};
export default DefaultPage;
