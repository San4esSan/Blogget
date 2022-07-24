import style from './Header.module.css';
import Logo from './Logo';
import Layout from '../Layout';
import Saerch from './Search';
import Auth from './Auth';
import Heading from './Heading';
import PropTypes from 'prop-types';

export const Header = ({token}) => (
  <header className={style.header}>
    <Layout>
      <div className={style.gridContainer}>
        <Logo />
        <Heading text="заголовок" />
        <Saerch />
        <Auth token={token} />
      </div>
    </Layout>
  </header>
);

Header.propTypes = {
  token: PropTypes.string,
};
