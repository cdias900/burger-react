import React, { useState } from 'react';
import { connect } from 'react-redux';

import classes from './Layout.module.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

const Layout = props => {
  const [sideDrawerIsVisible, setSideDrawerIsVisible] = useState(false);

  const sideDrawerClosedHandler = () => setSideDrawerIsVisible(false);

  const sideDrawerToggleHandler = () =>
    setSideDrawerIsVisible(!sideDrawerIsVisible);
  return (
    <>
      <Toolbar
        drawerToggleClicked={sideDrawerToggleHandler}
        isAuth={props.isAuth}
      />
      <SideDrawer
        open={sideDrawerIsVisible}
        closed={sideDrawerClosedHandler}
        isAuth={props.isAuth}
      />
      <main className={classes.Content}>{props.children}</main>
    </>
  );
};

const mapStateToProps = state => ({
  isAuth: state.auth.token !== null
});

export default connect(mapStateToProps)(Layout);
