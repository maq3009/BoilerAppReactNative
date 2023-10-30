import { DefaultTheme } from '@react-navigation/native';

const Mytheme= { 
    ...DefaultTheme,
    dark: true,
    colors: {
        ...DefaultTheme.colors,
        primary: 'rgb(255, 45, 85)',
    },
};

export default Mytheme