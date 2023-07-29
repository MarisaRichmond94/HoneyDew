import './Header.scss';

import { useNavigate } from 'react-router-dom';

import logo from 'assets/logos/header_logo.png';
import { ROUTES } from 'settings';

const Header = () => {
  const navigate = useNavigate();

  return (
    <div id='app-header'>
      <img alt='' id='header-logo' src={logo} onClick={() => navigate(ROUTES.rootRoute)} />
    </div>
  );
};

export default Header;
