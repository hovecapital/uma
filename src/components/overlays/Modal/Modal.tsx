import React, { useEffect, useRef } from 'react';
import {
  Modal as RNModal,
  View,
  TouchableOpacity,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  Animated,
  Text,
} from 'react-native';
import type { ModalProps } from '../../../types/component.types';
import { useTheme } from '../../../theme/ThemeProvider';

export const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  children,
  size = 'md',
  placement = 'center',
  closeOnOverlayClick = true,
  showCloseButton = true,
  animationType = 'fade',
  slideFrom = 'bottom',
  header,
  footer,
  scrollBehavior = 'inside',
  avoidKeyboard = true,
  backdropStyle,
  containerStyle,
  contentStyle,
  headerStyle,
  footerStyle,
  onModalShow,
  onModalHide,
  backdropOpacity = 0.5,
  useNativeDriver = true,
  style,
  ...rest
}) => {
  const { theme } = useTheme();
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    if (isOpen) {
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 200,
        useNativeDriver,
      }).start();
    } else {
      Animated.timing(fadeAnim, {
        toValue: 0,
        duration: 200,
        useNativeDriver,
      }).start();
    }
  }, [isOpen, fadeAnim, useNativeDriver]);

  const modalSize = theme.components.Modal.sizes[size];
  const backdropConfig = theme.components.Modal.backdrop;

  const getPlacementStyles = () => {
    switch (placement) {
      case 'top':
        return { justifyContent: 'flex-start' };
      case 'bottom':
        return { justifyContent: 'flex-end' };
      default:
        return { justifyContent: 'center' };
    }
  };

  const modalContainerStyles = [
    {
      flex: 1,
      alignItems: 'center' as const,
      ...getPlacementStyles(),
    },
    containerStyle,
  ];

  const modalContentStyles = [
    {
      backgroundColor: theme.colors.background.primary,
      borderRadius: theme.borderRadius.lg,
      maxHeight: '90%',
      ...modalSize,
    },
    size === 'full' && {
      borderRadius: 0,
      maxHeight: '100%',
    },
    contentStyle,
  ];

  const backdropStyles = [
    {
      position: 'absolute' as const,
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: backdropConfig.color,
    },
    backdropStyle,
  ];

  const renderHeader = () => {
    if (!header) return null;

    const headerContent = typeof header === 'string' ? (
      <Text
        style={{
          fontSize: theme.typography.fontSize.lg,
          fontFamily: theme.typography.fontFamily.semibold,
          color: theme.colors.text.primary,
        }}
      >
        {header}
      </Text>
    ) : (
      header
    );

    return (
      <View
        style={[
          {
            padding: theme.spacing.md,
            borderBottomWidth: 1,
            borderBottomColor: theme.colors.neutral[200],
          },
          headerStyle,
        ]}
      >
        {headerContent}
      </View>
    );
  };

  const renderFooter = () => {
    if (!footer) return null;

    return (
      <View
        style={[
          {
            padding: theme.spacing.md,
            borderTopWidth: 1,
            borderTopColor: theme.colors.neutral[200],
          },
          footerStyle,
        ]}
      >
        {footer}
      </View>
    );
  };

  const renderContent = () => {
    const content = (
      <>
        {renderHeader()}
        <View style={{ flex: scrollBehavior === 'inside' ? 1 : undefined }}>
          {scrollBehavior === 'inside' ? (
            <ScrollView
              contentContainerStyle={{ padding: theme.spacing.md }}
              showsVerticalScrollIndicator={false}
            >
              {children}
            </ScrollView>
          ) : (
            <View style={{ padding: theme.spacing.md }}>{children}</View>
          )}
        </View>
        {renderFooter()}
      </>
    );

    if (scrollBehavior === 'outside') {
      return (
        <ScrollView
          contentContainerStyle={modalContainerStyles}
          showsVerticalScrollIndicator={false}
        >
          <View style={modalContentStyles}>{content}</View>
        </ScrollView>
      );
    }

    return (
      <View style={modalContainerStyles}>
        <View style={modalContentStyles}>{content}</View>
      </View>
    );
  };

  const Container = avoidKeyboard ? KeyboardAvoidingView : View;

  return (
    <RNModal
      visible={isOpen}
      transparent
      animationType={animationType}
      onShow={onModalShow}
      onDismiss={onModalHide}
      onRequestClose={onClose}
      {...rest}
    >
      <Container
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{ flex: 1 }}
      >
        <Animated.View
          style={[
            backdropStyles,
            { opacity: fadeAnim.interpolate({
              inputRange: [0, 1],
              outputRange: [0, backdropOpacity],
            }) },
          ]}
        >
          <TouchableOpacity
            style={{ flex: 1 }}
            onPress={closeOnOverlayClick ? onClose : undefined}
            activeOpacity={1}
          />
        </Animated.View>
        {renderContent()}
      </Container>
    </RNModal>
  );
};