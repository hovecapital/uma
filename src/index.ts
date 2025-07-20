// Theme exports
export { ThemeProvider, useTheme } from '@/theme/ThemeProvider';
export { defaultTheme } from '@/theme/defaultTheme';

// Layout components
export { VStack } from '@/components/layout/VStack/VStack';
export { HStack } from '@/components/layout/HStack/HStack';

// Button component
export { Button } from '@/components/buttons/Button/Button';

// List component
export { List } from '@/components/lists/List/List';

// Card components
export { Card } from '@/components/cards/Card/Card';

// Modal component
export { Modal } from '@/components/overlays/Modal/Modal';

// Form components
export { TextInput } from '@/components/forms/TextInput/TextInput';

// Chat components
export { ChatMessage } from '@/components/chat/ChatMessage/ChatMessage';
export { ChatMessageList } from '@/components/chat/ChatMessageList/ChatMessageList';
export { ChatAvatar } from '@/components/chat/ChatAvatar/ChatAvatar';
export { ChatDateSeparator } from '@/components/chat/ChatDateSeparator/ChatDateSeparator';

// Type exports
export type {
  Theme,
  ColorScale,
  DeepPartial,
  ButtonVariantStyle,
  ButtonSizeStyle,
  CardVariantStyle,
} from '@/types/theme.types';

export type {
  StyleProp,
  BaseComponentProps,
  VStackProps,
  HStackProps,
  ButtonProps,
  ListProps,
  CardProps,
  ModalProps,
  BaseInputProps,
  TextInputProps,
  ChatMessageProps,
  ChatMessageListProps,
  ChatAvatarProps,
  ChatDateSeparatorProps,
  ChatMessageData,
  ChatAttachment,
  ChatReaction,
} from '@/types/component.types';

// Utility exports
export { getSpacingValue } from '@/utils/spacing';
export { getInputStyles } from '@/utils/inputStyles';
export { formatTimestamp } from '@/utils/dateFormatting';
export { groupMessagesByDate, shouldShowAvatar } from '@/utils/chatHelpers';
export { mergeTheme } from '@/utils/mergeTheme';
