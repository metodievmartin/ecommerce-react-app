import CustomButton from 'components/custom-button/custom-button.component';
import FormInput from 'components/form-input/form-input.component';
import React, { useState } from 'react';

import './sign-in.styles.scss';

const SignIn = () => {
  const [formState, setFormState] = useState({ email: '', password: '' });

  const handleSubmit = event => {
    event.preventDefault();

    setFormState({ email: '', password: '' });
  };

  const handleChange = event => {
    const { value, name } = event.target;

    setFormState(state => ({ ...state, [name]: value }));
  };

  return (
    <div className="sign-in">
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>

      <form onSubmit={handleSubmit}>
        <FormInput
          handleChange={handleChange}
          label={'Email'}
          type="email"
          name="email"
          value={formState.email}
        />
        <FormInput
          handleChange={handleChange}
          label={'Password'}
          type="password"
          name="password"
          value={formState.password}
        />

        <CustomButton type="submit">Sign In</CustomButton>
      </form>
    </div>
  );
};

export default SignIn;
