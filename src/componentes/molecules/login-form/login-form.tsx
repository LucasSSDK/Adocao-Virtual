import { FormEvent, useState } from 'react';
import { StyledForm, StyledLoginForm } from './styles';
import { BsEyeFill, BsEyeSlashFill } from 'react-icons/bs';

export function LoginForm() {
  const [showPassword, setShowPassword] = useState<Boolean>(false);

  function hadleShowPassword() {
    setShowPassword(!showPassword);
  }

  function hadleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const loginPayload = {
      email: e.currentTarget.email.value,
      password: e.currentTarget.password.value,
    };

    console.log(loginPayload);
  }

  return (
    <StyledLoginForm>
      <h2> Login </h2>
      <StyledForm onSubmit={hadleSubmit}>
        <input placeholder="E-mail" name="e-mail" />
        <div>
          <input
            placeholder="Senha"
            type={showPassword ? 'text' : 'password'}
            name="password"
            required
          />
          <button onClick={hadleShowPassword}>
            {showPassword ? (
              <BsEyeSlashFill size={25} />
            ) : (
              <BsEyeFill size={25} />
            )}
          </button>
        </div>
        <button type="submit">Login</button>
      </StyledForm>
    </StyledLoginForm>
  );
}
