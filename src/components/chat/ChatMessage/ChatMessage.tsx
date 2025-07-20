import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import type { ChatMessageProps } from '@/types/component.types';
import { useTheme } from '@/theme/ThemeProvider';
import { formatTimestamp } from '@/utils/dateFormatting';
import { ChatAvatar } from '@/components/chat/ChatAvatar/ChatAvatar';

export const ChatMessage: React.FC<ChatMessageProps> = ({
  message,
  isOwn,
  showAvatar = !isOwn,
  avatar,
  showTimestamp = true,
  onPress,
  onLongPress,
  renderCustomContent,
  variant = 'bubble',
  colorScheme = 'primary',
  style,
  textStyle,
  containerStyle,
  bubbleStyle,
  timestampStyle,
  ...rest
}) => {
  const { theme } = useTheme();

  const bubbleConfig = isOwn
    ? theme.components.Chat.message.bubble.own
    : theme.components.Chat.message.bubble.other;

  const messageSpacing = theme.components.Chat.message.spacing;

  const containerStyles = [
    {
      flexDirection: 'row' as const,
      alignItems: 'flex-end' as const,
      marginVertical: messageSpacing.vertical / 2,
      paddingHorizontal: messageSpacing.horizontal,
    },
    isOwn && { justifyContent: 'flex-end' as const },
    containerStyle,
  ];

  const bubbleStyles = [
    {
      backgroundColor: bubbleConfig.backgroundColor,
      borderRadius: theme.components.Chat.message.bubble.borderRadius,
      padding: messageSpacing.horizontal,
      maxWidth: theme.components.Chat.message.bubble.maxWidth as any,
    },
    variant === 'text' && { backgroundColor: 'transparent', padding: 0 },
    bubbleStyle,
  ];

  const textStyles = [
    {
      color: bubbleConfig.textColor,
      fontSize: theme.typography.fontSize.md,
      lineHeight: theme.typography.fontSize.md * theme.typography.lineHeight.normal,
    },
    textStyle,
  ];

  const timestampStyles = [
    {
      fontSize: theme.typography.fontSize.xs,
      color: theme.colors.text.tertiary,
      marginTop: theme.spacing.xs,
    },
    timestampStyle,
  ];

  const renderAvatar = () => {
    if (!showAvatar || !avatar) return null;

    if (React.isValidElement(avatar)) {
      return avatar;
    }

    if (typeof avatar === 'object' && 'uri' in avatar) {
      return <ChatAvatar source={{ uri: avatar.uri }} size="sm" />;
    }

    if (typeof avatar === 'object' && 'name' in avatar) {
      return <ChatAvatar name={avatar.name} size="sm" />;
    }

    return null;
  };

  const renderContent = () => {
    if (renderCustomContent) {
      return renderCustomContent();
    }

    if (message.isDeleted) {
      return (
        <Text style={[textStyles, { fontStyle: 'italic', opacity: 0.6 }]}>
          This message was deleted
        </Text>
      );
    }

    return (
      <>
        {message.text && <Text style={textStyles}>{message.text}</Text>}
        {showTimestamp && (
          <Text style={timestampStyles}>
            {formatTimestamp(message.timestamp)}
            {message.isEdited && ' (edited)'}
          </Text>
        )}
      </>
    );
  };

  return (
    <View style={containerStyles}>
      {!isOwn && renderAvatar()}
      {!isOwn && showAvatar && <View style={{ width: theme.spacing.sm }} />}

      <TouchableOpacity
        style={[bubbleStyles, style]}
        onPress={onPress}
        onLongPress={onLongPress}
        disabled={!onPress && !onLongPress}
        activeOpacity={0.7}
        {...rest}
      >
        {renderContent()}
      </TouchableOpacity>

      {isOwn && showAvatar && <View style={{ width: theme.spacing.sm }} />}
      {isOwn && renderAvatar()}
    </View>
  );
};
