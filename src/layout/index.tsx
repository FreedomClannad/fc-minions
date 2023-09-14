import { Outlet } from 'react-router-dom';
import './index.scss';
import Aside from '@/components/aside';
const IndexLayout = () => {
  return (
    <div className="layout-body">
      <Aside />
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default IndexLayout;
