import React from 'react';
import { DefaultTheme, DarkTheme, NavigationContainer } from '@react-navigation/native';

const MyTheme = { 
    ...DarkTheme, // Start with the DefaultTheme
    colors: {
      ...DarkTheme.colors,
      primary: 'black', // Change your primary color here
    },
};

export default MyTheme;