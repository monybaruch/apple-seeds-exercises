import { validateEmail } from '../utils/validateEmail';
import { Link, useNavigate } from 'react-router-dom';
import Wrapper from '../styles/styled/Login.styled';
import { Logo, FormRow } from '../components';
import useInput from '../hooks/useInput';
import { useState } from 'react';

const Login = () => {
  const [isLoading, setIsLoading] = useState;
  const navigate = useNavigate();
  const {
    value: name,
    error: nameError,
    handleBlur: handleNameBlur,
    handleChange: handleNameChange,
  } = useInput('please enter your name!');
  const {
    value: email,
    error: emailError,
    handleBlur: handleEmailBlur,
    handleChange: handleEmailChange,
  } = useInput('please enter a valid email!', validateEmail);
  const {
    value: password,
    error: passwordError,
    handleBlur: handlePasswordBlur,
    handleChange: handlePasswordChange,
  } = useInput('please enter a valid password!');

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
  };

  return (
    <Wrapper className="full-page">
      <form className="form">
        <Logo />
        {/* name field */}

        {/* email field */}

        {/* password field */}

        <button type="submit" className="btn btn-block">
          {/* Loading */}
        </button>
        <Link to="/" className="btn btn-block btn-light mt">
          Back
        </Link>
      </form>
    </Wrapper>
  );
};

export default Login;
