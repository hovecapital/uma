import React, { useMemo } from 'react';
import { FlashList } from '@shopify/flash-list';
import type { ChatMessageListProps, ChatMessageData } from '../../../types/component.types';
import { ChatMessage } from '../ChatMessage/ChatMessage';
import { ChatDateSeparator } from '../ChatDateSeparator/ChatDateSeparator';
import { useTheme } from '../../../theme/ThemeProvider';
import { groupMessagesByDate, shouldShowAvatar } from '../../../utils/chatHelpers';

export const ChatMessageList: React.FC<ChatMessageListProps> = ({
  messages,
  renderMessage,
  inverted = true,
  showScrollToBottom = true,
  onEndReached,
  onEndReachedThreshold = 0.1,
  onScroll,
  ListHeaderComponent,
  ListFooterComponent,
  ListEmptyComponent,
  keyExtractor = (item) => item.id,
  groupMessages = true,
  showDateSeparators = true,
  dateFormat,
  style,
  contentContainerStyle,
  ...rest
}) => {
  const { theme } = useTheme();

  const processedMessages = useMemo(() => {
    if (!showDateSeparators) return messages;

    const grouped = groupMessagesByDate(messages);
    const result: Array<ChatMessageData | { type: 'separator'; date: string; id: string }> = [];

    Object.entries(grouped).forEach(([date, dateMessages]) => {
      result.push({
        type: 'separator',
        date,
        id: `separator-${date}`,
      });
      result.push(...dateMessages);
    });

    return result;
  }, [messages, showDateSeparators]);

  const renderItem = ({ item, index }: { item: ChatMessageData | { type: 'separator'; date: string; id: string }; index: number }) => {
    if ('type' in item && item.type === 'separator') {
      return <ChatDateSeparator date={item.date} format={dateFormat} />;
    }

    const message = item as ChatMessageData;
    const showAvatar = groupMessages
      ? shouldShowAvatar(processedMessages as ChatMessageData[], index, message.userId)
      : true;

    if (renderMessage) {
      return renderMessage(message, index);
    }

    return (
      <ChatMessage
        message={message}
        isOwn={false} // This should be determined by the parent component
        showAvatar={showAvatar}
      />
    );
  };

  return (
    <FlashList
      data={processedMessages}
      renderItem={renderItem}
      keyExtractor={(item) => 
        'type' in item && item.type === 'separator' ? item.id : keyExtractor(item as ChatMessageData, 0)
      }
      inverted={inverted}
      onEndReached={onEndReached}
      onEndReachedThreshold={onEndReachedThreshold}
      onScroll={onScroll}
      ListHeaderComponent={ListHeaderComponent}
      ListFooterComponent={ListFooterComponent}
      ListEmptyComponent={ListEmptyComponent}
      estimatedItemSize={60}
      contentContainerStyle={contentContainerStyle}
      style={style}
      {...rest}
    />
  );
};