import { Link } from 'react-router-dom';
import { Controller, useForm } from 'react-hook-form';
import DefaultInput from '../components/DefaultInput/DefaultInput';
import { Header } from '../components';

const LoginPage = () => {
  const { control, handleSubmit } = useForm({
    defaultValues: {
      email: 'teste@teste.com',
      password: '0000',
    },
  });

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
        <button type="submit">entrar</button>
      </form>
      <Link to="/login">Já possui conta? Faça o Login!</Link>
    </div>
  );
};

export default LoginPage;
