import { Link, useNavigate } from 'react-router-dom';

const RegisterPage = () => {
  const navigate = useNavigate();

  const handleOnSubmit = (event) => {
    event.preventDefault();
    console.log('Formulário submetido');
    navigate('/login');
  };

  return (
    <div>
      <h1>Register</h1>
      <form onSubmit={handleOnSubmit}>
        <input type="text" name="E-mail" />
        <input type="password" name="Password" />
        <button type="submit">Create</button>
      </form>
      <Link to="/login">Já possui uma conta? Faça o login</Link>
    </div>
  );
};

export default RegisterPage;
