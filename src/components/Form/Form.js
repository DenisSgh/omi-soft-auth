import { useState } from 'react';
import * as yup from 'yup';
import { logIn } from 'redux/auth/authOperations';
import { useDispatch } from 'react-redux';
import { invalidRequest } from 'services/pnotify/notifications';

import s from './Form.module.scss';
import { CssButton, CssTextField } from 'components/customInputs';
import { ReactComponent as EmailIcon } from 'icons/email.svg';
import { ReactComponent as PasswordIcon } from 'icons/password.svg';

let schema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().min(5).max(12).required(),
});

const Form = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const handleChange = e => {
    const { name, value } = e.currentTarget;

    switch (name) {
      case 'email':
        return setEmail(value);

      case 'password':
        return setPassword(value);

      default:
        break;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();

    schema
      .validate({
        email,
        password,
      })
      .then(valid => {
        if (valid) {
          dispatch(logIn({ email, password }));
        }
      })
      .catch(_ =>
        invalidRequest(
          'Invalid data entered! Check if you entered your email and password correctly',
        ),
      );
  };

  return (
    <div className={s.container}>
      <p className={s.title}>Member Login</p>
      <form className={s.form} onSubmit={handleSubmit}>
        <div className={s.inputContainer}>
          <CssTextField
            type="email"
            name="email"
            label="Email"
            value={email}
            onChange={handleChange}
            variant="outlined"
          />
          <div className={s.iconContainer}>
            <EmailIcon />
          </div>
        </div>

        <div className={s.lastInputContainer}>
          <CssTextField
            type="password"
            name="password"
            label="Password"
            value={password}
            onChange={handleChange}
            variant="outlined"
          />
          <div className={s.iconContainer}>
            <PasswordIcon />
          </div>
        </div>

        <CssButton type="submit" variant="outlined">
          Login
        </CssButton>
      </form>

      <p className={s.forgotPass}>
        Forgot <b>Username/Password</b>?
      </p>
      <p className={s.registration}>Create your Account &#10140;</p>
    </div>
  );
};

export default Form;
