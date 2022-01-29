import React, { useState } from 'react';

import './sign-in.styles.scss';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { authSignInWithEmailAndPassword, signInWithGoogle } from '../../firebase/firebase.auth';

const SignIn = () => {
  const [formState, setFormState] = useState({ email: '', password: '' });

  const handleSubmit = async event => {
    event.preventDefault();
    const { email, password } = formState;

    try {
      await authSignInWithEmailAndPassword(email, password);
      setFormState({ email: '', password: '' });
    } catch (error) {
      console.error(error);
    }

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
        <div className="buttons">
          <CustomButton type="submit">Sign In</CustomButton>
          <CustomButton type='button' onClick={signInWithGoogle} isGoogleSignIn>
            Sign In With Google
          </CustomButton>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
