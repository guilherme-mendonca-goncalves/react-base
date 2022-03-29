import { Link, useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const navigate = useNavigate;

  const handleOnSubmit = (event) => {
    event.preventDefault();
    console.log('Login efetuado');
    navigate('/lobby');
  };

    <div>
      <h1>Login</h1>
      <form onSubmit={handleOnSubmit}>
        <input type="text" name="Nome" />
        <input type="text" name="E-mail" />
        <input type="password" name="Password" />
        <button type="submit">Login</button>
      </form>
      <Link to="/register">Não possui uma conta? Cadastre-se</Link>
    </div>;
};

export default LoginPage;
