import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import MainStack from './MainStack';

import ThemeProvider from '../theme/ThemeProvider';

const AppNavigationContainer = () => {
  return (
    <NavigationContainer>
      <ThemeProvider>
        <MainStack />
      </ThemeProvider>
    </NavigationContainer>
  );
};

export default AppNavigationContainer;
