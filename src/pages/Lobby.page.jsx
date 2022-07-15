import { Link } from 'react-router-dom';

const LobbyPage = () => (
  <div>
    <h1>Olá, usuário!</h1>
    <ul>
      <li>
        <Link to="/users">Usuário</Link>
      </li>
      <li>
        <Link to="/">Sair</Link>
      </li>
    </ul>
  </div>
);

export default LobbyPage;
