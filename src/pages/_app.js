import React, { useState, useEffect } from 'react';
import GlobalStyle from '../styles/globalStyles';
import AppContext from '../contexts/AppContext';

const MyApp = ({ Component, pageProps }) => {
  const [deviceType, setDeviceType] = useState(null);

  useEffect(() => {
    const getDeviceType = () => {
      const windowWidth = window.innerWidth;

      if (windowWidth <= 767) {
        return 'smartphone';
      } if (windowWidth > 767 && windowWidth <= 1023) {
        return 'tablet';
      } else {
        return 'desktop';
      }
    };

    setDeviceType(getDeviceType());
  }, []);
  return (
    <AppContext.Provider value={deviceType}>
      <GlobalStyle />
      <Component {...pageProps} />
    </AppContext.Provider>
  );
};

export default MyApp;
