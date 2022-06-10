import React, { createContext, useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';

export const GlobalContext = createContext([null, (user) => user]);

GlobalContext.displayName = 'Language';

export const GlobalProvider = ({ userData, eventData, children }) => {
  const [event, setEvent] = useState(null);
  const [user, setUser] = useState(null);

  useEffect(() => {
    setUser(userData);
  }, [userData]);

  useEffect(() => {
    setEvent(eventData);
  }, [eventData]);

  return <GlobalContext.Provider value={[user, setUser, event, setEvent]}>{children}</GlobalContext.Provider>;
};

GlobalProvider.propTypes = {
  children: PropTypes.any.isRequired,
  userData: PropTypes.object,
  eventData: PropTypes.object,
};

export const useGlobalData = () => useContext(GlobalContext);
