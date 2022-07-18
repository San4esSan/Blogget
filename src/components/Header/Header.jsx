import style from './Header.module.css';
import Logo from './Logo';
import Saerch from './Search';
import Auth from './Auth';
import Heading from './Heading';

export const Header = () => (
  <header className={style.header}>
    <div className={style.gridContainer}>
      <Logo />
      <Heading text="заголовок" />
      <Saerch />
      <Auth auth={false} />
    </div>
  </header>
);
