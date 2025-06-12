// styled.d.ts
import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      background: string;
      text: string;
      textLight: string;
      primary: string;
      primaryHover: string;
      emphasis: string;
      button: string;
      buttonHover: string;
      border: string;
      light: string;
    };
    fonts: {
      body: string;
      heading: string;
    };
    spacing: {
      xxs: string;
      xs: string;
      sm: string;
      md: string;
      lg: string;
      xl: string;
      xxl: string;
      xxxl: string;
    };
  }
}
