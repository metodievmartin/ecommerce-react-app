import React, { useState } from 'react';
import { authCreateUserWithEmailAndPassword } from '../../firebase/firebase.auth';
import { createUserProfileDocument } from '../../firebase/firebase.utils';
import CustomButton from '../custom-button/custom-button.component';
import FormInput from '../form-input/form-input.component';

import './sign-up.styles.scss';

const SignUp = () => {
  const [formState, setFormState] = useState({
    displayName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleSubmit = async event => {
    event.preventDefault();
    console.log(formState);

    const { displayName, email, password, confirmPassword } = formState;

    if (password !== confirmPassword) {
      return;
    }

    try {
      const authCredential = await authCreateUserWithEmailAndPassword(
        email,
        password
      );

      console.log(authCredential);
      const { user } = authCredential;

      await createUserProfileDocument(user, { displayName });

      setFormState({
        displayName: '',
        email: '',
        password: '',
        confirmPassword: '',
      });
    } catch (error) {
      console.error(error);
    }
  };

  const handleChange = event => {
    const { name, value } = event.target;

    setFormState(state => ({
      ...state,
      [name]: value,
    }));
  };

  return (
    <div className="sign-up">
      <h2 className="title">I do not have an account</h2>
      <span>Sign up with your email and password</span>
      <form className="sign-up-form" onSubmit={handleSubmit}>
        <FormInput
          type="text"
          name="displayName"
          value={formState.displayName}
          onChange={handleChange}
          label="Display Name"
          required
        />
        <FormInput
          type="email"
          name="email"
          value={formState.email}
          onChange={handleChange}
          label="Email"
          required
        />
        <FormInput
          type="password"
          name="password"
          value={formState.password}
          onChange={handleChange}
          label="Password"
          required
        />
        <FormInput
          type="password"
          name="confirmPassword"
          value={formState.confirmPassword}
          onChange={handleChange}
          label="Confirm Password"
          required
        />
        <CustomButton type="submit">SIGN UP</CustomButton>
      </form>
    </div>
  );
};

export default SignUp;
