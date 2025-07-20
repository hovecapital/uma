import type { Theme } from '@/types/theme.types';
import type { ViewStyle, TextStyle } from 'react-native';

type GetInputStylesParams = {
  theme: Theme;
  size: 'sm' | 'md' | 'lg';
  variant: 'outline' | 'filled' | 'flushed' | 'unstyled';
  colorScheme: keyof Theme['colors'];
  isDisabled: boolean;
  isFocused: boolean;
  hasError: boolean;
};

type InputStyles = {
  container: ViewStyle;
  input: TextStyle;
};

export const getInputStyles = ({
  theme,
  size,
  variant,
  colorScheme,
  isDisabled,
  isFocused,
  hasError,
}: GetInputStylesParams): InputStyles => {
  const sizeStyles = {
    sm: {
      paddingVertical: theme.spacing.xs,
      paddingHorizontal: theme.spacing.sm,
      fontSize: theme.typography.fontSize.sm,
    },
    md: {
      paddingVertical: theme.spacing.sm,
      paddingHorizontal: theme.spacing.md,
      fontSize: theme.typography.fontSize.md,
    },
    lg: {
      paddingVertical: theme.spacing.md,
      paddingHorizontal: theme.spacing.lg,
      fontSize: theme.typography.fontSize.lg,
    },
  };

  const variantStyles = {
    outline: {
      borderWidth: 1,
      borderColor: hasError
        ? theme.colors.error[500]
        : isFocused
          ? (theme.colors[colorScheme] as any)[500]
          : theme.colors.neutral[300],
      backgroundColor: isDisabled ? theme.colors.neutral[100] : theme.colors.background.primary,
      borderRadius: theme.borderRadius.md,
    },
    filled: {
      backgroundColor: isDisabled ? theme.colors.neutral[200] : theme.colors.neutral[100],
      borderWidth: 0,
      borderRadius: theme.borderRadius.md,
    },
    flushed: {
      borderBottomWidth: 1,
      borderBottomColor: hasError
        ? theme.colors.error[500]
        : isFocused
          ? (theme.colors[colorScheme] as any)[500]
          : theme.colors.neutral[300],
      paddingHorizontal: 0,
    },
    unstyled: {},
  };

  return {
    container: {
      flexDirection: 'row',
      alignItems: 'center',
      ...variantStyles[variant],
      ...sizeStyles[size],
    } as ViewStyle,
    input: {
      color: isDisabled ? theme.colors.text.tertiary : theme.colors.text.primary,
      fontSize: sizeStyles[size].fontSize,
      fontFamily: theme.typography.fontFamily.regular,
    } as TextStyle,
  };
};
