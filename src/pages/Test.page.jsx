import { useForm, Controller } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { Header, RandomDog } from '../components';
import DefaultInput from '../components/DefaultInput';

const TestPage = () => {
  const { control, handleSubmit } = useForm({
    defaultValues: {
      email: 'farkas@teste.com',
      password: '9999',
    },
  });

  const navigate = useNavigate();

  const handleOnclick = () => {
    navigate('/login');
  };

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div>
      <Header />
      <h1>Test</h1>
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
        <button type="submit" onClick={handleOnclick}>entrar</button>
      </form>
      <Link to="/login">Já possui conta? Faça o Login!</Link>
      <RandomDog />
    </div>

  );
};

export default TestPage;
