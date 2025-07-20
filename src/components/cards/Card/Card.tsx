import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import type { CardProps } from '@/types/component.types';
import { useTheme } from '@/theme/ThemeProvider';
import { getSpacingValue } from '@/utils/spacing';

export const Card: React.FC<CardProps> = ({
  children,
  variant = 'elevated',
  size = 'md',
  padding = 'md',
  margin,
  borderRadius = 'md',
  shadow = variant === 'elevated' ? 'md' : 'none',
  backgroundColor,
  borderColor,
  borderWidth,
  onPress,
  onLongPress,
  activeOpacity = 0.7,
  style,
  ...rest
}) => {
  const { theme } = useTheme();

  const paddingValue = getSpacingValue(padding, theme);
  const marginValue = margin ? getSpacingValue(margin, theme) : undefined;
  const radiusValue = theme.borderRadius[borderRadius];
  const shadowStyles = shadow !== 'none' ? theme.shadows[shadow] : undefined;
  const variantStyles = theme.components.Card.variants[variant];

  const cardStyles = [
    variantStyles.container,
    {
      padding: paddingValue,
      margin: marginValue,
      borderRadius: radiusValue,
      backgroundColor: backgroundColor || variantStyles.container.backgroundColor,
      borderColor,
      borderWidth,
    },
    shadowStyles,
    style,
  ];

  const Container = onPress || onLongPress ? TouchableOpacity : View;

  return (
    <Container
      style={cardStyles}
      onPress={onPress}
      onLongPress={onLongPress}
      activeOpacity={activeOpacity}
      {...rest}
    >
      {children}
    </Container>
  );
};