import { Link } from 'react-router-dom';
import { Header } from '../components';

const HomePage = () => (
  <div>
    <Header />
    <h1>Home</h1>
    <div>
      <Link to="/login">Login</Link>
    </div>
    <div>
      <Link to="/register">Register</Link>
    </div>
  </div>
);

export default HomePage;
