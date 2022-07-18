import { Link, useNavigate } from 'react-router-dom';
import { Controller, useForm } from 'react-hook-form';

const RegisterPage = () => {
  const { control, handleSubmit } = useForm({
    defaultValues: {
      name: 'Alan A.',
      email: 'teste@teste.com',
      password: '0000',
    },
  });
  const navigate = useNavigate();

  const onSubmit = (data) => {
    console.log(data);
    navigate('/login');
  };

  return (
    <div>
      <h1>Cadastro</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Controller
          name="name"
          control={control}
          render={({ field }) => {
            const { name, onChange, value } = field;

            return (
              <input name={name} onChange={onChange} value={value} />
            );
          }}
        />
        <Controller
          name="email"
          control={control}
          render={({ field }) => {
            const { name, onChange, value } = field;

            return (
              <input name={name} onChange={onChange} value={value} />
            );
          }}
        />
        <Controller
          name="password"
          control={control}
          render={({ field }) => {
            const { name, onChange, value } = field;

            return (
              <input name={name} onChange={onChange} value={value} type="password" />
            );
          }}
        />
        <button type="submit">Enviar</button>
      </form>
      <Link to="/login">Já possui conta? Faça o Login!</Link>
    </div>
  );
};

export default RegisterPage;
