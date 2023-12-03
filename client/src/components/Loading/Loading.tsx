import './Loading.scss';

import HashLoader from 'react-spinners/HashLoader';

import { Color } from 'enums';

interface LoadingProps {
  message?: string,
};

const Loading = ({ message = 'Loading...' }: LoadingProps) => {
  return (
    <div id='loading-container'>
      <div id='loading-icon'>
        <HashLoader color={Color.secondaryBlue} size={80} />
      </div>
      <div id='loading-message'>
        {message}
      </div>
    </div>
  );
};

export default Loading;
