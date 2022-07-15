import { Link, useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const navigate = useNavigate();

  const handleOnSubmit = (event) => {
    event.preventDefault();
    navigate('/lobby');
  };

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleOnSubmit}>
        <input name="name" />
        <input name="email" />
        <input name="password" type="password" />
        <button type="submit">entrar</button>
      </form>
      <Link to="/login">Já possui conta? Faça o Login!</Link>
    </div>
  );
};

export default LoginPage;
