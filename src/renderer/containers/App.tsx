import React from 'react';
import cn from 'classnames';
import {
  Switch, Route, Redirect, NavLink,
} from 'react-router-dom';

import { Icon } from '$components/UI/Icon';
import { useAppDispatch, useAppSelector } from '../hooks/hooks';
import reactIcon from '$assets/images/react.png';
import electronIcon from '$assets/images/electron.png';
import { minimizeSidebar } from '$store/user';
import { IAppState } from '$types/state';
import { Routes } from '$constants/routes';

export const App: React.FC = () => {
  const isSidebarMinimized = useAppSelector((state: IAppState) => state.USER.isSidebarMinimized);
  const text = useAppSelector((state: IAppState) => state.CONTENT.text);

  const dispatch = useAppDispatch();
  const toggleSidebar = () => dispatch(minimizeSidebar(!isSidebarMinimized));

  return (
    <div className="app">
      <div className={cn('navbar', !isSidebarMinimized && 'navbar--active')}>
        <button
          type="button"
          style={{
            padding: 0, marginBottom: 10, border: 'none', fontSize: 0, cursor: 'pointer',
          }}
          onClick={toggleSidebar}
        >
          <Icon
            icon={isSidebarMinimized ? 'keyboard-arrow-right' : 'keyboard-arrow-left'}
            size={30}
          />
        </button>
        <NavLink
          className="link"
          activeClassName="link--active"
          to={Routes.MainScreen}
        >
          Main
        </NavLink>
        <NavLink
          className="link"
          activeClassName="link--active"
          to={Routes.SecondScreen}
        >
          Second
        </NavLink>
      </div>
      <Switch>
        <Route
          exact
          path={Routes.MainScreen}
          render={
            () => (
              <React.Fragment>
                <h1>Hello, Electron React App!</h1>
                <p>The quick brown fox jumps over the lazy dog.</p>
                <p>
                  <a
                    href="http://electronjs.org"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      src={electronIcon}
                      alt="electronIcon"
                    />
                  </a>
                  <a
                    href="http://reactjs.org"
                    target="_blank"
                    rel="noreferrer"
                    style={{ marginLeft: '10px' }}
                  >
                    <img
                      src={reactIcon}
                      alt="reactIcon"
                    />

                  </a>
                </p>
              </React.Fragment>
            )
          }
        />
        <Route
          path={Routes.SecondScreen}
          exact
          render={() => (
            <div>
              <p>{text}</p>
            </div>
          )}
        />
        <Redirect to={Routes.MainScreen} />
      </Switch>

    </div>
  );
};
