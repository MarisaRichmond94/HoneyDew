import './page_header.scss';

import { FC } from 'react';

interface PageHeaderProps {
  headerText: string,
};

export const PageHeader: FC<PageHeaderProps> = ({ headerText }) => (
  <div className='page-header'>{headerText}</div>
);
