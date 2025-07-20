import type { Theme } from '../types/theme.types';

export const defaultTheme: Theme = {
  colors: {
    primary: {
      50: '#eff6ff',
      100: '#dbeafe',
      200: '#bfdbfe',
      300: '#93bbfd',
      400: '#60a5fa',
      500: '#3b82f6',
      600: '#2563eb',
      700: '#1d4ed8',
      800: '#1e40af',
      900: '#1e3a8a',
    },
    secondary: {
      50: '#f0f9ff',
      100: '#e0f2fe',
      200: '#bae6fd',
      300: '#7dd3fc',
      400: '#38bdf8',
      500: '#0ea5e9',
      600: '#0284c7',
      700: '#0369a1',
      800: '#075985',
      900: '#0c4a6e',
    },
    neutral: {
      50: '#f9fafb',
      100: '#f3f4f6',
      200: '#e5e7eb',
      300: '#d1d5db',
      400: '#9ca3af',
      500: '#6b7280',
      600: '#4b5563',
      700: '#374151',
      800: '#1f2937',
      900: '#111827',
    },
    success: {
      50: '#f0fdf4',
      100: '#dcfce7',
      200: '#bbf7d0',
      300: '#86efac',
      400: '#4ade80',
      500: '#22c55e',
      600: '#16a34a',
      700: '#15803d',
      800: '#166534',
      900: '#14532d',
    },
    warning: {
      50: '#fefce8',
      100: '#fef9c3',
      200: '#fef08a',
      300: '#fde047',
      400: '#facc15',
      500: '#eab308',
      600: '#ca8a04',
      700: '#a16207',
      800: '#854d0e',
      900: '#713f12',
    },
    error: {
      50: '#fef2f2',
      100: '#fee2e2',
      200: '#fecaca',
      300: '#fca5a5',
      400: '#f87171',
      500: '#ef4444',
      600: '#dc2626',
      700: '#b91c1c',
      800: '#991b1b',
      900: '#7f1d1d',
    },
    background: {
      primary: '#ffffff',
      secondary: '#f9fafb',
      tertiary: '#f3f4f6',
    },
    text: {
      primary: '#111827',
      secondary: '#6b7280',
      tertiary: '#9ca3af',
      inverse: '#ffffff',
    },
  },
  spacing: {
    xs: 4,
    sm: 8,
    md: 16,
    lg: 24,
    xl: 32,
    xxl: 48,
  },
  typography: {
    fontFamily: {
      regular: 'System',
      medium: 'System',
      semibold: 'System',
      bold: 'System',
    },
    fontSize: {
      xs: 12,
      sm: 14,
      md: 16,
      lg: 18,
      xl: 24,
      xxl: 32,
    },
    lineHeight: {
      tight: 1.25,
      normal: 1.5,
      relaxed: 1.75,
    },
  },
  borderRadius: {
    none: 0,
    sm: 4,
    md: 8,
    lg: 16,
    full: 9999,
  },
  shadows: {
    sm: {
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 1 },
      shadowOpacity: 0.05,
      shadowRadius: 2,
      elevation: 1,
    },
    md: {
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 4,
      elevation: 3,
    },
    lg: {
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.15,
      shadowRadius: 8,
      elevation: 5,
    },
  },
  components: {
    Button: {
      variants: {
        solid: {
          container: {
            backgroundColor: '#3b82f6',
          },
          text: {
            color: '#ffffff',
          },
          disabled: {
            container: {
              backgroundColor: '#e5e7eb',
            },
            text: {
              color: '#9ca3af',
            },
          },
        },
        outline: {
          container: {
            backgroundColor: 'transparent',
            borderWidth: 1,
            borderColor: '#3b82f6',
          },
          text: {
            color: '#3b82f6',
          },
          disabled: {
            container: {
              borderColor: '#e5e7eb',
            },
            text: {
              color: '#9ca3af',
            },
          },
        },
        ghost: {
          container: {
            backgroundColor: 'transparent',
          },
          text: {
            color: '#3b82f6',
          },
          disabled: {
            text: {
              color: '#9ca3af',
            },
          },
        },
        link: {
          container: {
            backgroundColor: 'transparent',
          },
          text: {
            color: '#3b82f6',
            textDecorationLine: 'underline',
          },
          disabled: {
            text: {
              color: '#9ca3af',
            },
          },
        },
      },
      sizes: {
        xs: {
          paddingHorizontal: 8,
          paddingVertical: 4,
          fontSize: 12,
        },
        sm: {
          paddingHorizontal: 12,
          paddingVertical: 6,
          fontSize: 14,
        },
        md: {
          paddingHorizontal: 16,
          paddingVertical: 8,
          fontSize: 16,
        },
        lg: {
          paddingHorizontal: 20,
          paddingVertical: 10,
          fontSize: 18,
        },
        xl: {
          paddingHorizontal: 24,
          paddingVertical: 12,
          fontSize: 20,
        },
      },
    },
    Card: {
      variants: {
        elevated: {
          container: {
            backgroundColor: '#ffffff',
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.1,
            shadowRadius: 4,
            elevation: 3,
          },
        },
        outline: {
          container: {
            backgroundColor: '#ffffff',
            borderWidth: 1,
            borderColor: '#e5e7eb',
          },
        },
        filled: {
          container: {
            backgroundColor: '#f9fafb',
          },
        },
        unstyled: {
          container: {},
        },
      },
    },
    Modal: {
      sizes: {
        xs: { width: '70%' as const },
        sm: { width: '80%' as const },
        md: { width: '90%' as const },
        lg: { width: '95%' as const },
        xl: { width: '98%' as const },
        full: { width: '100%' as const, height: '100%' as const },
      },
      backdrop: {
        opacity: 0.5,
        color: '#000000',
      },
    },
    Chat: {
      message: {
        bubble: {
          own: {
            backgroundColor: '#3b82f6',
            textColor: '#ffffff',
          },
          other: {
            backgroundColor: '#e5e7eb',
            textColor: '#111827',
          },
          borderRadius: 16,
          maxWidth: '80%',
        },
        spacing: {
          vertical: 8,
          horizontal: 12,
          group: 2,
        },
      },
      input: {
        minHeight: 44,
        maxHeight: 120,
        borderRadius: 22,
      },
      avatar: {
        sizes: {
          xs: 24,
          sm: 32,
          md: 40,
          lg: 48,
        },
      },
    },
  },
};