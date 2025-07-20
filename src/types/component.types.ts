import type {
  ViewStyle,
  TextStyle,
  ImageStyle,
  KeyboardTypeOptions,
  ImageSourcePropType,
  NativeSyntheticEvent,
  NativeScrollEvent,
  AccessibilityRole,
} from 'react-native';
import type { ContentStyle } from '@shopify/flash-list';
import type { ReactNode, ReactElement, ComponentType } from 'react';
import type { Theme } from './theme.types';

export type StyleProp<T> = T | T[] | undefined;

// Base Props
export type BaseComponentProps = {
  style?: StyleProp<ViewStyle>;
  testID?: string;
  accessible?: boolean;
  accessibilityLabel?: string;
  accessibilityHint?: string;
  accessibilityRole?: AccessibilityRole;
};

// Layout Components
export type VStackProps = BaseComponentProps & {
  children: ReactNode;
  spacing?: keyof Theme['spacing'] | number;
  align?: 'flex-start' | 'center' | 'flex-end' | 'stretch';
  justify?:
    | 'flex-start'
    | 'center'
    | 'flex-end'
    | 'space-between'
    | 'space-around'
    | 'space-evenly';
  padding?: keyof Theme['spacing'] | number;
  margin?: keyof Theme['spacing'] | number;
  backgroundColor?: string;
  flex?: number;
};

export type HStackProps = BaseComponentProps & {
  children: ReactNode;
  spacing?: keyof Theme['spacing'] | number;
  align?: 'flex-start' | 'center' | 'flex-end' | 'stretch';
  justify?:
    | 'flex-start'
    | 'center'
    | 'flex-end'
    | 'space-between'
    | 'space-around'
    | 'space-evenly';
  padding?: keyof Theme['spacing'] | number;
  margin?: keyof Theme['spacing'] | number;
  backgroundColor?: string;
  flex?: number;
  wrap?: boolean;
};

// Button Component
export type ButtonProps = BaseComponentProps & {
  children: ReactNode | string;
  variant?: 'solid' | 'outline' | 'ghost' | 'link';
  colorScheme?: keyof Theme['colors'];
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  isLoading?: boolean;
  isDisabled?: boolean;
  leftIcon?: ReactElement;
  rightIcon?: ReactElement;
  onPress: () => void;
  onPressIn?: () => void;
  onPressOut?: () => void;
  fullWidth?: boolean;
  borderRadius?: keyof Theme['borderRadius'];
  textStyle?: StyleProp<TextStyle>;
};

// List Component
export type ListProps<T> = BaseComponentProps & {
  data: T[];
  renderItem: (item: T, index: number) => ReactElement;
  keyExtractor: (item: T, index: number) => string;
  ItemSeparatorComponent?: ComponentType<any> | null;
  ListHeaderComponent?: ReactElement | (() => ReactElement);
  ListFooterComponent?: ReactElement | (() => ReactElement);
  ListEmptyComponent?: ReactElement | (() => ReactElement);
  onRefresh?: () => void;
  refreshing?: boolean;
  onEndReached?: () => void;
  onEndReachedThreshold?: number;
  horizontal?: boolean;
  numColumns?: number;
  columnWrapperStyle?: StyleProp<ViewStyle>;
  contentContainerStyle?: ContentStyle;
  estimatedItemSize?: number;
};

// Form Components Base
export type BaseInputProps = BaseComponentProps & {
  label?: string;
  placeholder?: string;
  helperText?: string;
  errorMessage?: string;
  isRequired?: boolean;
  isDisabled?: boolean;
  isReadOnly?: boolean;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'outline' | 'filled' | 'flushed' | 'unstyled';
  colorScheme?: keyof Theme['colors'];
  containerStyle?: StyleProp<ViewStyle>;
  labelStyle?: StyleProp<TextStyle>;
};

export type TextInputProps = BaseInputProps & {
  value: string;
  onChangeText: (text: string) => void;
  keyboardType?: KeyboardTypeOptions;
  secureTextEntry?: boolean;
  autoCapitalize?: 'none' | 'sentences' | 'words' | 'characters';
  autoCorrect?: boolean;
  maxLength?: number;
  multiline?: boolean;
  numberOfLines?: number;
  leftElement?: ReactElement;
  rightElement?: ReactElement;
  onFocus?: () => void;
  onBlur?: () => void;
  textStyle?: StyleProp<TextStyle>;
};

// Card Components
export type CardProps = BaseComponentProps & {
  children: ReactNode;
  variant?: 'elevated' | 'outline' | 'filled' | 'unstyled';
  size?: 'sm' | 'md' | 'lg';
  padding?: keyof Theme['spacing'] | number;
  margin?: keyof Theme['spacing'] | number;
  borderRadius?: keyof Theme['borderRadius'];
  shadow?: keyof Theme['shadows'] | 'none';
  backgroundColor?: string;
  borderColor?: string;
  borderWidth?: number;
  onPress?: () => void;
  onLongPress?: () => void;
  activeOpacity?: number;
};

// Modal Component
export type ModalProps = BaseComponentProps & {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'full';
  placement?: 'center' | 'top' | 'bottom';
  closeOnOverlayClick?: boolean;
  showCloseButton?: boolean;
  animationType?: 'slide' | 'fade' | 'none';
  slideFrom?: 'bottom' | 'top' | 'left' | 'right';
  header?: ReactNode | string;
  footer?: ReactNode;
  scrollBehavior?: 'inside' | 'outside';
  avoidKeyboard?: boolean;
  backdropStyle?: StyleProp<ViewStyle>;
  containerStyle?: StyleProp<ViewStyle>;
  contentStyle?: StyleProp<ViewStyle>;
  headerStyle?: StyleProp<ViewStyle>;
  footerStyle?: StyleProp<ViewStyle>;
  onModalShow?: () => void;
  onModalHide?: () => void;
  backdropOpacity?: number;
  useNativeDriver?: boolean;
};

// Chat Components
export type ChatMessageData = {
  id: string;
  text?: string;
  userId: string;
  timestamp: Date | string;
  status?: 'sending' | 'sent' | 'delivered' | 'read' | 'failed';
  replyTo?: string;
  attachments?: ChatAttachment[];
  reactions?: ChatReaction[];
  isEdited?: boolean;
  isDeleted?: boolean;
  metadata?: Record<string, unknown>;
};

export type ChatAttachment = {
  id: string;
  type: 'image' | 'video' | 'file' | 'audio' | 'location';
  uri?: string;
  name?: string;
  size?: number;
  duration?: number;
  thumbnail?: string;
  metadata?: Record<string, unknown>;
};

export type ChatReaction = {
  emoji: string;
  userId: string;
  timestamp: Date | string;
};

export type ChatMessageProps = BaseComponentProps & {
  message: ChatMessageData;
  isOwn: boolean;
  showAvatar?: boolean;
  avatar?: ReactElement | { uri: string } | { name: string };
  showTimestamp?: boolean;
  onPress?: () => void;
  onLongPress?: () => void;
  renderCustomContent?: () => ReactElement;
  variant?: 'bubble' | 'text';
  colorScheme?: keyof Theme['colors'];
  textStyle?: StyleProp<TextStyle>;
  containerStyle?: StyleProp<ViewStyle>;
  bubbleStyle?: StyleProp<ViewStyle>;
  timestampStyle?: StyleProp<TextStyle>;
};

export type ChatMessageListProps = BaseComponentProps & {
  messages: ChatMessageData[];
  renderMessage?: (message: ChatMessageData, index: number) => ReactElement;
  inverted?: boolean;
  showScrollToBottom?: boolean;
  onEndReached?: () => void;
  onEndReachedThreshold?: number;
  onScroll?: (event: NativeSyntheticEvent<NativeScrollEvent>) => void;
  ListHeaderComponent?: ReactElement | (() => ReactElement);
  ListFooterComponent?: ReactElement | (() => ReactElement);
  ListEmptyComponent?: ReactElement | (() => ReactElement);
  keyExtractor?: (item: ChatMessageData, index: number) => string;
  groupMessages?: boolean;
  showDateSeparators?: boolean;
  dateFormat?: string;
  contentContainerStyle?: ContentStyle;
};

export type ChatAvatarProps = Omit<BaseComponentProps, 'style'> & {
  source?: ImageSourcePropType;
  name?: string;
  size?: 'xs' | 'sm' | 'md' | 'lg';
  borderRadius?: keyof Theme['borderRadius'];
  backgroundColor?: string;
  textColor?: string;
  style?: StyleProp<ViewStyle | ImageStyle>;
};

export type ChatDateSeparatorProps = BaseComponentProps & {
  date: string;
  format?: string;
  textStyle?: StyleProp<TextStyle>;
  lineStyle?: StyleProp<ViewStyle>;
};
