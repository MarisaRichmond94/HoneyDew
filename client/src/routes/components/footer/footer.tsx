import './footer.scss';

import { FC, PropsWithChildren } from 'react';
import { GiProgression } from 'react-icons/gi';
import { HiSparkles } from 'react-icons/hi2';
import { PiStackFill } from 'react-icons/pi';
import { TbTargetArrow } from 'react-icons/tb';
import { useLocation, useNavigate } from 'react-router';

import HDButton, { ButtonSize, ButtonType } from 'components/button';
import { useApp } from 'providers';
import { ROUTES } from 'settings';

interface NavButtonProps extends PropsWithChildren {
  description: string,
  route: string,
};

const NavButton: FC<NavButtonProps> = ({ children, description, route }) => {
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
      <div className='nav-description'>{description}</div>
    </HDButton>
  );
};

const Footer = () => {
  const { user } = useApp();

  return (
    <div id='app-footer'>
      <div id='nav-container'>
        <NavButton description='Dew' route={ROUTES.dailyDewsRoute}>
          <HiSparkles />
        </NavButton>
        <NavButton description='Plan' route={ROUTES.planRoute}>
          <TbTargetArrow />
        </NavButton>
        <NavButton description='Manage' route={ROUTES.manageRoute}>
          <PiStackFill />
        </NavButton>
        <NavButton description='Progress' route={ROUTES.progressRoute}>
          <GiProgression />
        </NavButton>
        <NavButton description='Profile' route={ROUTES.profileRoute}>
          <img alt='' src={user?.avatar} referrerPolicy='no-referrer' />
        </NavButton>
      </div>
    </div>
  );
};

export default Footer;
