import './footer.scss';

import { FC, PropsWithChildren } from 'react';
import { GiProgression } from 'react-icons/gi';
import { HiSparkles } from 'react-icons/hi2';
import { PiStackFill } from 'react-icons/pi';
import { TbTargetArrow } from 'react-icons/tb';
import { useLocation, useNavigate } from 'react-router';

import HDButton, { ButtonSize, ButtonType } from 'components/button';
import { useAuth } from 'providers';
import { ROUTES } from 'settings';

interface NavButtonProps extends PropsWithChildren {
  route: string,
};

const NavButton: FC<NavButtonProps> = ({ children, route }) => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const isActive = pathname === route;

  return (
    <HDButton
      classNames={['off-white', 'nav-button', isActive ? 'active' : '']}
      onClick={() => navigate(route)}
      size={ButtonSize.xl}
      type={ButtonType.icon}
    >
      {children}
    </HDButton>
  );
};

const Footer = () => {
  const { user } = useAuth();

  return (
    <div id='app-footer'>
      <div id='nav-container'>
        <NavButton route={ROUTES.dailyDewsRoute}>
          <HiSparkles />
        </NavButton>
        <NavButton route={ROUTES.planRoute}>
          <TbTargetArrow />
        </NavButton>
        <NavButton route={ROUTES.manageRoute}>
          <PiStackFill />
        </NavButton>
        <NavButton route={ROUTES.progressRoute}>
          <GiProgression />
        </NavButton>
        <NavButton route={ROUTES.profileRoute}>
          <img alt='' src={user?.avatar} referrerPolicy='no-referrer' />
        </NavButton>
      </div>
    </div>
  );
};

export default Footer;
