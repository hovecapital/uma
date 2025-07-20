import React from 'react';
import { TouchableOpacity, Text, ActivityIndicator, View } from 'react-native';
import type { ButtonProps } from '../../../types/component.types';
import { useTheme } from '../../../theme/ThemeProvider';
import { HStack } from '../../layout/HStack/HStack';

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'solid',
  colorScheme = 'primary',
  size = 'md',
  isLoading = false,
  isDisabled = false,
  leftIcon,
  rightIcon,
  onPress,
  onPressIn,
  onPressOut,
  fullWidth = false,
  borderRadius = 'md',
  style,
  textStyle,
  ...rest
}) => {
  const { theme } = useTheme();

  const variantStyles = theme.components.Button.variants[variant];
  const sizeStyles = theme.components.Button.sizes[size];
  const radiusValue = theme.borderRadius[borderRadius];

  const buttonStyles = [
    variantStyles.container,
    {
      paddingHorizontal: sizeStyles.paddingHorizontal,
      paddingVertical: sizeStyles.paddingVertical,
      borderRadius: radiusValue,
      opacity: isDisabled || isLoading ? 0.6 : 1,
      alignItems: 'center' as const,
      justifyContent: 'center' as const,
    },
    fullWidth && { width: '100%' },
    isDisabled && variantStyles.disabled?.container,
    style,
  ];

  const textStyles = [
    variantStyles.text,
    {
      fontSize: sizeStyles.fontSize,
      fontFamily: theme.typography.fontFamily.medium,
    },
    isDisabled && variantStyles.disabled?.text,
    textStyle,
  ];

  const renderContent = () => {
    if (isLoading) {
      return (
        <ActivityIndicator
          size="small"
          color={variantStyles.text.color as string}
        />
      );
    }

    const content = (
      <>
        {leftIcon && <View style={{ marginRight: 8 }}>{leftIcon}</View>}
        {typeof children === 'string' ? (
          <Text style={textStyles}>{children}</Text>
        ) : (
          children
        )}
        {rightIcon && <View style={{ marginLeft: 8 }}>{rightIcon}</View>}
      </>
    );

    if (leftIcon || rightIcon) {
      return (
        <HStack spacing="sm" align="center">
          {content}
        </HStack>
      );
    }

    return content;
  };

  return (
    <TouchableOpacity
      style={buttonStyles}
      onPress={onPress}
      onPressIn={onPressIn}
      onPressOut={onPressOut}
      disabled={isDisabled || isLoading}
      activeOpacity={0.7}
      {...rest}
    >
      {renderContent()}
    </TouchableOpacity>
  );
};