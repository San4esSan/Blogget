import {useState} from 'react';
import style from './Auth.module.css';
import PropTypes from 'prop-types';
import {ReactComponent as UserIcon} from './img/login.svg';
import {urlAuth} from '../../../api/auth';
import {Text} from '../../../Ui/Text/Text';

export const Auth = ({token, delToken}) => {
  const [auth, clearAuth] = useState(token);
  const [showLogout, setShowLogout] = useState(false);

  const getOut = () => {
    setShowLogout(!showLogout);
  };

  const logOut = () => {
    delToken();
    clearAuth();
  };

  return (
    <div className={style.container}>
      {auth.name ? (
        <>
          <button className={style.btn} onClick={getOut}>
            <img className={style.img} src={auth.img} title={auth.name} alt={`Аватар ${auth.name}`} />
            <Text>{auth.name}</Text>
          </button>
          {showLogout && (
            <button className={style.logout} onClick={logOut}>Выйти</button>
          )}
        </>
      ) : (
        <Text className={style.authLink} As='a' href={urlAuth}>
          <UserIcon className={style.svg}/>
        </Text>
      )}
    </div>
  );
};

Auth.propTypes = {
  token: PropTypes.string,
  delToken: PropTypes.func,
};
