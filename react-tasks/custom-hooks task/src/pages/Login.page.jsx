import { validateEmail } from '../utils/validateEmail';
import { Link, useNavigate } from 'react-router-dom';
import Wrapper from '../styles/styled/Login.styled';
import { Logo, FormRow } from '../components';
import useInput from '../hooks/useInput';
import { useState } from 'react';

const Login = () => {
  const [isLoading, setIsLoading] = useState(false);
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
    if (!name || !email || validateEmail(email) || !password) {
      setIsLoading(false);
      handleNameBlur();
      handleEmailBlur();
      handlePasswordBlur();
      return;
    } else {
      setTimeout(() => {
        setIsLoading(false);
        localStorage.setItem('userData', JSON.stringify({ name, email }));
        navigate('/main');
      }, 3000);
    }
  };

  return (
    <Wrapper className="full-page">
      <form className="form" onSubmit={handleSubmit}>
        <Logo />
        {/* name field */}
        <FormRow
          type="text"
          name="name"
          value={name}
          handleBlur={handleNameBlur}
          handleChange={handleNameChange}
          error={nameError.isError}
          message={nameError.message}
        />
        {/* email field */}
        <FormRow
          type="text"
          name="email"
          value={email}
          handleBlur={handleEmailBlur}
          handleChange={handleEmailChange}
          error={emailError.isError}
          message={emailError.message}
        />
        {/* password field */}
        <FormRow
          type="text"
          name="password"
          value={password}
          handleBlur={handlePasswordBlur}
          handleChange={handlePasswordChange}
          error={passwordError.isError}
          message={passwordError.message}
        />
        <button type="submit" className="btn btn-block" disabled={isLoading}>
          {/* Loading */}
          {isLoading ? 'Loading...' : 'Log In'}
        </button>
        <Link to="/" className="btn btn-block btn-light mt">
          Back
        </Link>
      </form>
    </Wrapper>
  );
};

export default Login;
