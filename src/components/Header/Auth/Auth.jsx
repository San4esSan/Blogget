import {useEffect, useState} from 'react';
import style from './Auth.module.css';
import PropTypes from 'prop-types';
import {ReactComponent as UserIcon} from './img/login.svg';
import {urlAuth} from '../../../api/auth';
import {Text} from '../../../Ui/Text/Text';
import {URL_API} from '../../../api/const';

export const Auth = ({token, delToken}) => {
  const [auth, setAuth] = useState({});
  const [showLogout, setShowLogout] = useState(false);

  useEffect(() => {
    if (!token) return;
    fetch(`${URL_API}/api/v1/me`, {
      headers: {
        Authorization: `bearer ${token}`,
      },
    })
      .then((response) => {
        if (response.status === 401) {
          throw new Error(response.status);
        }
        return response.json();
      })
      .then(({name, icon_img: iconImg}) => {
        const img = iconImg.replace(/\?.*$/, '');
        setAuth({name, img});
      })
      .catch((err) => {
        console.err(err);
        delToken();
        setAuth({});
      });
  }, [token]);

  const getOut = () => {
    setShowLogout(!showLogout);
  };

  const logOut = () => {
    delToken();
    setAuth(!showLogout);
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
