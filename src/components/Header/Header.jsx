import React from 'react'
import { Link } from 'react-router-dom'

import styles from '../../styles/Header.module.css'

import { ROUTES } from '../../utils/routes'

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.logo}>
        <Link to={ROUTES.HOME}> <img width={120} src="https://wiki.nashtransport.ru/images/thumb/5/5b/%D0%A0%D0%96%D0%94_%D0%9B%D0%BE%D0%B3%D0%BE%D1%82%D0%B8%D0%BF.png/1600px-%D0%A0%D0%96%D0%94_%D0%9B%D0%BE%D0%B3%D0%BE%D1%82%D0%B8%D0%BF.png" alt="логотип" /></Link>
      </div>
    </div>
  )
}

export default Header