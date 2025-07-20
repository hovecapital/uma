import type { TextStyle, ViewStyle } from 'react-native';

export type ColorScale = {
  50: string;
  100: string;
  200: string;
  300: string;
  400: string;
  500: string;
  600: string;
  700: string;
  800: string;
  900: string;
};

export type Theme = {
  colors: {
    primary: ColorScale;
    secondary: ColorScale;
    neutral: ColorScale;
    success: ColorScale;
    warning: ColorScale;
    error: ColorScale;
    background: {
      primary: string;
      secondary: string;
      tertiary: string;
    };
    text: {
      primary: string;
      secondary: string;
      tertiary: string;
      inverse: string;
    };
  };
  spacing: {
    xs: number;
    sm: number;
    md: number;
    lg: number;
    xl: number;
    xxl: number;
  };
  typography: {
    fontFamily: {
      regular: string;
      medium: string;
      semibold: string;
      bold: string;
    };
    fontSize: {
      xs: number;
      sm: number;
      md: number;
      lg: number;
      xl: number;
      xxl: number;
    };
    lineHeight: {
      tight: number;
      normal: number;
      relaxed: number;
    };
  };
  borderRadius: {
    none: number;
    sm: number;
    md: number;
    lg: number;
    full: number;
  };
  shadows: {
    sm: {
      shadowColor: string;
      shadowOffset: { width: number; height: number };
      shadowOpacity: number;
      shadowRadius: number;
      elevation: number;
    };
    md: {
      shadowColor: string;
      shadowOffset: { width: number; height: number };
      shadowOpacity: number;
      shadowRadius: number;
      elevation: number;
    };
    lg: {
      shadowColor: string;
      shadowOffset: { width: number; height: number };
      shadowOpacity: number;
      shadowRadius: number;
      elevation: number;
    };
  };
  components: {
    Button: {
      variants: {
        solid: ButtonVariantStyle;
        outline: ButtonVariantStyle;
        ghost: ButtonVariantStyle;
        link: ButtonVariantStyle;
      };
      sizes: {
        xs: ButtonSizeStyle;
        sm: ButtonSizeStyle;
        md: ButtonSizeStyle;
        lg: ButtonSizeStyle;
        xl: ButtonSizeStyle;
      };
    };
    Card: {
      variants: {
        elevated: CardVariantStyle;
        outline: CardVariantStyle;
        filled: CardVariantStyle;
        unstyled: CardVariantStyle;
      };
    };
    Modal: {
      sizes: {
        xs: { width: number | string };
        sm: { width: number | string };
        md: { width: number | string };
        lg: { width: number | string };
        xl: { width: number | string };
        full: { width: string; height: string };
      };
      backdrop: {
        opacity: number;
        color: string;
      };
    };
    Chat: {
      message: {
        bubble: {
          own: {
            backgroundColor: string;
            textColor: string;
          };
          other: {
            backgroundColor: string;
            textColor: string;
          };
          borderRadius: number;
          maxWidth: string | number;
        };
        spacing: {
          vertical: number;
          horizontal: number;
          group: number;
        };
      };
      input: {
        minHeight: number;
        maxHeight: number;
        borderRadius: number;
      };
      avatar: {
        sizes: {
          xs: number;
          sm: number;
          md: number;
          lg: number;
        };
      };
    };
  };
};

export type ButtonVariantStyle = {
  container: ViewStyle;
  text: TextStyle;
  disabled?: {
    container?: ViewStyle;
    text?: TextStyle;
  };
};

export type ButtonSizeStyle = {
  paddingHorizontal: number;
  paddingVertical: number;
  fontSize: number;
};

export type CardVariantStyle = {
  container: ViewStyle;
};

export type DeepPartial<T> = T extends object
  ? {
      [P in keyof T]?: DeepPartial<T[P]>;
    }
  : T;