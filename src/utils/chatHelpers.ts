import type { ChatMessageData } from '@/types/component.types';

export const groupMessagesByDate = (
  messages: ChatMessageData[]
): Record<string, ChatMessageData[]> => {
  const grouped: Record<string, ChatMessageData[]> = {};

  messages.forEach((message) => {
    const date = new Date(message.timestamp).toDateString();
    if (!grouped[date]) {
      grouped[date] = [];
    }
    grouped[date].push(message);
  });

  return grouped;
};

export const shouldShowAvatar = (
  messages: ChatMessageData[],
  index: number,
  userId: string
): boolean => {
  if (index === messages.length - 1) return true;
  
  const nextMessage = messages[index + 1];
  if (!nextMessage) return true;
  
  return nextMessage.userId !== userId;
};