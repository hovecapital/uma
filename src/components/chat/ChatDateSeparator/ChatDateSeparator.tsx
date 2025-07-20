import React from 'react';
import { View, Text } from 'react-native';
import type { ChatDateSeparatorProps } from '@/types/component.types';
import { useTheme } from '@/theme/ThemeProvider';

export const ChatDateSeparator: React.FC<ChatDateSeparatorProps> = ({
  date,
  format,
  textStyle,
  lineStyle,
  style,
  ...rest
}) => {
  const { theme } = useTheme();

  const formatDate = (dateStr: string): string => {
    const messageDate = new Date(dateStr);
    const today = new Date();
    const yesterday = new Date(today);
    yesterday.setDate(yesterday.getDate() - 1);

    if (messageDate.toDateString() === today.toDateString()) {
      return 'Today';
    }
    
    if (messageDate.toDateString() === yesterday.toDateString()) {
      return 'Yesterday';
    }

    if (format) {
      return messageDate.toLocaleDateString(undefined, { 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
      });
    }

    return messageDate.toLocaleDateString();
  };

  return (
    <View
      style={[
        {
          flexDirection: 'row',
          alignItems: 'center',
          marginVertical: theme.spacing.md,
          paddingHorizontal: theme.spacing.md,
        },
        style,
      ]}
      {...rest}
    >
      <View
        style={[
          {
            flex: 1,
            height: 1,
            backgroundColor: theme.colors.neutral[300],
          },
          lineStyle,
        ]}
      />
      
      <Text
        style={[
          {
            paddingHorizontal: theme.spacing.md,
            fontSize: theme.typography.fontSize.xs,
            color: theme.colors.text.secondary,
            fontFamily: theme.typography.fontFamily.medium,
          },
          textStyle,
        ]}
      >
        {formatDate(date)}
      </Text>
      
      <View
        style={[
          {
            flex: 1,
            height: 1,
            backgroundColor: theme.colors.neutral[300],
          },
          lineStyle,
        ]}
      />
    </View>
  );
};