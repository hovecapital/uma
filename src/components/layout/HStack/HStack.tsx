import React from 'react';
import { View } from 'react-native';
import type { HStackProps } from '../../../types/component.types';
import { useTheme } from '../../../theme/ThemeProvider';
import { getSpacingValue } from '../../../utils/spacing';

export const HStack: React.FC<HStackProps> = ({
  children,
  spacing = 'md',
  align = 'center',
  justify = 'flex-start',
  padding,
  margin,
  backgroundColor,
  flex,
  wrap = false,
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
          flexDirection: 'row',
          alignItems: align,
          justifyContent: justify,
          padding: paddingValue,
          margin: marginValue,
          backgroundColor,
          flex,
          flexWrap: wrap ? 'wrap' : 'nowrap',
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
              ? { marginRight: spacingValue }
              : undefined
          }
        >
          {child}
        </View>
      ))}
    </View>
  );
};