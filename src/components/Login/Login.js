import { useState } from 'react';
import Logo from '../../assets/img/logo.png';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (emailError !== '' || passwordError !== '') {
      alert('Please fix errors before submitting');
      return;
    } else {
      alert('Form submitted');
    }
  };

  const handleEmailChange = (event) => {
    const value = event.target.value;
    setEmail(value);
    if (!/\S+@\S+\.\S+/.test(value)) {
      setEmailError('Esse campo é obrigatório');
    } else {
      setEmailError('');
    }
  };

  const handlePasswordChange = (event) => {
    const value = event.target.value;
    setPassword(value);
    if (value.length < 8) {
      setPasswordError('Esse campo é obrigatório');
    } else {
      setPasswordError('');
    }
  };

  return (
    <div className="w-screen h-screen flex justify-center items-center bg-gray-100 flex-col">
      <img src={Logo} alt="logo" className="mx-auto h-12 w-auto" />
      <h2 class="mt-6 text-center lg:text-3xl sm:text-lg leading-9 font-extrabold text-gray-900 ">
        Entrar na sua conta
      </h2>
      <p class="mt-2 text-center text-base leading-5 text-gray-600">
        Ou&nbsp;
        <a
          href="/signup?redirect=%2Fsignup%C2%A0-"
          class="font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:underline transition ease-in-out duration-150"
        >
          fazer cadastro
        </a>
      </p>
      <div className="sm:mx-auto xs:w-full sm:w-full sm:max-w-md">
        <form
          onSubmit={handleSubmit}
          className="p-5 mt-10 bg-white rounded flex flex-col shadow-md sm:w-full sm:mx-auto"
        >
          <div className="lg:mb-5 md:lg-3">
            <label
              class="block text-sm font-medium leading-5 mb-1 text-gray-700"
              for="email"
            >
              E-mail:
            </label>
            <input
              type="email"
              name="email"
              className={`form-input block py-2 px-3 border ${
                emailError ? 'border-red-500' : 'border-gray-300'
              } rounded-md shadow-sm focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5 w-full`}
              autocomplete="off"
              value={email}
              onChange={handleEmailChange}
              onBlur={handleEmailChange}
            />
            {emailError && <p className="text-red-500">{emailError}</p>}
          </div>
          <div className="lg:mb-5 md:lg-3">
            <label
              class="block text-sm font-medium leading-5 mb-1 text-gray-700"
              for="email"
            >
              Senha:
            </label>
            <input
              type="password"
              name="password"
              className={`form-input block py-2 px-3 border ${
                passwordError ? 'border-red-500' : 'border-gray-300'
              } rounded-md shadow-sm focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5 w-full`}
              onChange={handlePasswordChange}
              onBlur={handlePasswordChange}
              value={password}
            />
            {passwordError && <p className="text-red-500">{passwordError}</p>}
          </div>
          <div class="text-sm leading-5 flex">
            <a
              href="/ResetPassword"
              class="font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:underline transition ease-in-out duration-150 ml-auto"
            >
              Esqueceu a senha?
            </a>
          </div>
          <button
            type="button"
            class="w-full flex justify-center my-2 py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out"
          >
            Entrar
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
