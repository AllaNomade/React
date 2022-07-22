import { Link, useParams } from 'react-router-dom';
import { fake } from '../devUtils';

const ProfilePage = () => {
  const params = useParams();
  const { userId } = params;
  const { users } = fake;

  console.log('params', params);
  console.log('users', users);

  const user = users.find((element) => element.id.toString() === userId);

  return (
    <div>
      {user === undefined ? (
        <>
          <h1>Usuário não encontrado!</h1>
          <Link to="/users">Usuários</Link>
        </>
      ) : (
        <>
          <h1>
            {`Olá, ${user.name}!`}
          </h1>
          <ul>
            <li>
              <Link to="/users">Usuários</Link>
            </li>
          </ul>
        </>
      )}
    </div>
  );
};

export default ProfilePage;
