import React, { createContext, useContext, useState } from 'react';
import PropTypes from 'prop-types';

export const UserOnBoardingContext = createContext([{}, (value) => value]);

UserOnBoardingContext.displayName = 'UserOnBoardingContext';

export const UserOnBoardingProvider = ({ children }) => {
  const [userData, setUserData] = useState(null);

  return <UserOnBoardingContext.Provider value={[userData, setUserData]}>{children}</UserOnBoardingContext.Provider>;
};

UserOnBoardingProvider.propTypes = {
  children: PropTypes.any.isRequired,
};

export const useUserOnBoardingData = () => useContext(UserOnBoardingContext);

export const withUserOnBoardingData = (Component) => {
  const WithUserOnBoardingData = () => (
    <UserOnBoardingProvider>
      <Component />
    </UserOnBoardingProvider>
  );

  if (typeof Component.layout !== 'undefined') WithUserOnBoardingData.layout = Component.layout;
  return WithUserOnBoardingData;
};
