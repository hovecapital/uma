import React from 'react';
import { View } from 'react-native';
import type { VStackProps } from '../../../types/component.types';
import { useTheme } from '../../../theme/ThemeProvider';
import { getSpacingValue } from '../../../utils/spacing';

export const VStack: React.FC<VStackProps> = ({
  children,
  spacing = 'md',
  align = 'stretch',
  justify = 'flex-start',
  padding,
  margin,
  backgroundColor,
  flex,
  style,
  ...rest
}) => {
  const { theme } = useTheme();
  const spacingValue = getSpacingValue(spacing, theme);
  const paddingValue = padding ? getSpacingValue(padding, theme) : undefined;
  const marginValue = margin ? getSpacingValue(margin, theme) : undefined;

  const childrenArray = React.Children.toArray(children);

  return (
    <View
      style={[
        {
          flexDirection: 'column',
          alignItems: align,
          justifyContent: justify,
          padding: paddingValue,
          margin: marginValue,
          backgroundColor,
          flex,
        },
        style,
      ]}
      {...rest}
    >
      {childrenArray.map((child, index) => (
        <View
          key={index}
          style={
            index < childrenArray.length - 1
              ? { marginBottom: spacingValue }
              : undefined
          }
        >
          {child}
        </View>
      ))}
    </View>
  );
};