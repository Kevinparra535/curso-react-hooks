import React from 'react';

import useInitialState from '../custom/useInitialState';

const AppContext = React.createContext({});

const AppProvider = ({ children }) => {
  const initialState = useInitialState();

  return (
    <AppContext.Provider value={initialState}>
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
