import React, {useEffect, useState} from 'react';
import style from './Tabs.module.css';
import PropTypes from 'prop-types';
import {assignId} from '../../../utils/generateRandomId';

import {ReactComponent as ArrowIcon} from './img/arrow.svg';
import {ReactComponent as HomeIcon} from './img/home.svg';
import {ReactComponent as EyeIcon} from './img/top.svg';
import {ReactComponent as PostIcon} from './img/best.svg';
import {ReactComponent as SaveIcon} from './img/hot.svg';
import {debounceRaf} from '../../../utils/debounce';
// import {Text} from '../../../Ui/Text/Text';

const LIST = [
  {value: 'Главная', Icon: EyeIcon},
  {value: 'Топ', Icon: HomeIcon},
  {value: 'Лучшие', Icon: PostIcon},
  {value: 'Горячие', Icon: SaveIcon},
].map(assignId);

export const Tabs = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isDropdown, setIsDropDown] = useState(true);

  const handleResize = () => {
    if (document.documentElement.clientWidth < 768) {
      setIsDropDown(true);
    } else {
      setIsDropDown(false);
    }
  };

  useEffect(() => {
    const debonceResize = debounceRaf(handleResize);
    debonceResize();
    window.addEventListener('resize', debonceResize);
    return () => {
      window.removeEventListener('resize', debonceResize);
    };
  }, []);

  return (
    <div className={style.container}>
      {isDropdown && <div className={style.wrapperBtn}>
        <button
          className={style.btn}
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        >
          add item
          <ArrowIcon width={15} height={15} />
        </button>
      </div>}
      {(isDropdownOpen || !isDropdown) && (
        <ul className={style.list} onClick={() => setIsDropdownOpen(false)}>
          {LIST.map(({value, id, Icon}) => (
            <li className={style.item} key={id}>
              <button className={style.btn} onClick={() => {}}>
                {value}
                {Icon && <Icon width={30} height={30}/>}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

Tabs.propTypes = {
  list: PropTypes.array,
  setList: PropTypes.func,
  addItem: PropTypes.func,
};
