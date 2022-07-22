import { useForm, Controller } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { Header } from '../components';
import DefaultInput from '../components/DefaultInput';

const TestPage = () => {
  const { control, handleSubmit } = useForm({
    defaultValues: {
      email: 'farkas@teste.com',
      password: '9999',
    },
  });

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
        <button type="submit">entrar</button>
      </form>
      <Link to="/login">Já possui conta? Faça o Login!</Link>
    </div>

  );
};

export default TestPage;
