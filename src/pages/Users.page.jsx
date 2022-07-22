import { Link, useNavigate } from 'react-router-dom';
import { fake } from '../devUtils';

const UsersPage = () => {
  const { users } = fake;
  const navigate = useNavigate();

  const handleOnClick = () => {
    navigate('/');
  };

  const usersMap = users.map((user) => {
    const key = `key-${user.id}`;
    const path = `/profile/${user.id}`;

    return (
      <li key={key}>
        <Link to={path}>{user.name}</Link>
      </li>
    );
  });

  return (
    <div>
      <h1>Users</h1>
      <ul>
        {usersMap}
        <div>
          <button type="button" onClick={handleOnClick}>Voltar</button>
        </div>
      </ul>
    </div>
  );
};

export default UsersPage;
