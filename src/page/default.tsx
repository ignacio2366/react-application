import { ContainerMain, ContainerWrapper, SubmitButton } from "@/components";
import { PasswordInput, TextInput } from "@/components/input";
import { Modal } from "@/components/modal";
import React, { useCallback, useState } from "react";
import { z } from "zod";

const loginFormSchema = z.object({
  username: z.string().min(1, "Username is required"),
  password: z
    .string()
    .min(1, "Password is required")
    .max(10, "Password must be less than 100 characters"),
});

type LoginFormData = z.infer<typeof loginFormSchema>;

const DefaultPage = () => {
  const defaultValues: LoginFormData = {
    username: "",
    password: "",
  };

  const [login, setLogin] = useState<LoginFormData>(defaultValues);
  const [errors, setErrors] = useState<
    Partial<Record<keyof LoginFormData, string>>
  >({});

  const validateField = useCallback(
    (name: keyof LoginFormData, value: string) => {
      const fieldSchema = loginFormSchema.shape[name];
      const result = fieldSchema.safeParse(value);

      setErrors((prev) => ({
        ...prev,
        [name]: result.success ? null : result.error.message,
      }));
    },
    []
  );

  const onChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target;
      setLogin((prev) => ({ ...prev, [name]: value }));
    },
    [validateField]
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const result = loginFormSchema.safeParse(login);

    if (!result.success) {
      const formErrors: Partial<Record<keyof LoginFormData, string>> = {};
      result.error.issues.forEach((err) => {
        const field = err.path[0] as keyof LoginFormData;
        formErrors[field] = err.message;
      });
      setErrors(formErrors);
      return;
    }

    setErrors({});
    console.log("Form submitted ✅", result.data);
  };

  return (
    <div className="App">
      <ContainerWrapper>
        <ContainerMain>
          <Modal isOpen={true} title="Login Modal">
            <p>sad</p>
          </Modal>
          <form className="" onSubmit={handleSubmit}>
            <TextInput
              name="username"
              placeholder="username"
              type="text"
              value={login.username}
              onChange={onChange}
              error={errors.username}
            />
            <PasswordInput
              name="password"
              placeholder="password"
              value={login.password}
              onChange={onChange}
              error={errors.password}
            />
            <SubmitButton label="Submit" onClick={() => handleSubmit} />
          </form>
        </ContainerMain>
      </ContainerWrapper>
    </div>
  );
};

export default DefaultPage;
