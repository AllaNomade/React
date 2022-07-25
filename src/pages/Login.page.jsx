import { Link, useNavigate } from 'react-router-dom';
import { Controller, useForm } from 'react-hook-form';
import DefaultInput from '../components/DefaultInput';
import { Header, RandomDog } from '../components';

const LoginPage = () => {
  const { control, handleSubmit } = useForm({
    defaultValues: {
      email: 'users@teste.com',
      password: '0000',
    },
  });

  const navigate = useNavigate();

  const handleOnClick = () => {
    navigate('/users');
  };

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div>
      <Header />
      <h1>Login</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Controller
          name="email"
          control={control}
          render={({ field }) => {
            const { name, onChange, value } = field;

            return (
              <DefaultInput name={name} onChange={onChange} value={value} />
            );
          }}
        />
        <Controller
          name="password"
          control={control}
          render={({ field }) => {
            const { name, onChange, value } = field;

            return (
              <DefaultInput name={name} onChange={onChange} value={value} type="password" />
            );
          }}
        />
        <button type="submit" onClick={handleOnClick}>entrar</button>
      </form>
      <Link to="/register">Não possui conta? Cadastre-se!</Link>
      <RandomDog />
    </div>
  );
};

export default LoginPage;
