import React from 'react';
import { View, Text, Image } from 'react-native';
import type { ChatAvatarProps } from '@/types/component.types';
import { useTheme } from '@/theme/ThemeProvider';

export const ChatAvatar: React.FC<ChatAvatarProps> = ({
  source,
  name,
  size = 'md',
  borderRadius = 'full',
  backgroundColor,
  textColor,
  style,
  ...rest
}) => {
  const { theme } = useTheme();

  const sizeValue = theme.components.Chat.avatar.sizes[size];
  const radiusValue = theme.borderRadius[borderRadius];

  const getInitials = (displayName: string): string => {
    return displayName
      .split(' ')
      .map(word => word.charAt(0))
      .join('')
      .toUpperCase()
      .slice(0, 2);
  };

  const avatarStyles = [
    {
      width: sizeValue,
      height: sizeValue,
      borderRadius: radiusValue,
      backgroundColor: backgroundColor || theme.colors.neutral[300],
      alignItems: 'center' as const,
      justifyContent: 'center' as const,
    },
    style,
  ];

  if (source) {
    return (
      <Image
        source={source}
        style={avatarStyles}
        {...rest}
      />
    );
  }

  if (name) {
    return (
      <View style={avatarStyles} {...rest}>
        <Text
          style={{
            fontSize: sizeValue * 0.4,
            fontFamily: theme.typography.fontFamily.medium,
            color: textColor || theme.colors.text.inverse,
          }}
        >
          {getInitials(name)}
        </Text>
      </View>
    );
  }

  return <View style={avatarStyles} {...rest} />;
};