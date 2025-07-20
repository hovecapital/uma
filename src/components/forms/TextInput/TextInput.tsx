import React, { useRef } from 'react';
import {
  View,
  Text,
  TextInput as RNTextInput,
  TouchableOpacity,
} from 'react-native';
import type { TextInputProps } from '../../../types/component.types';
import { useTheme } from '../../../theme/ThemeProvider';
import { getInputStyles } from '../../../utils/inputStyles';

export const TextInput: React.FC<TextInputProps> = ({
  label,
  placeholder,
  helperText,
  errorMessage,
  isRequired = false,
  isDisabled = false,
  isReadOnly = false,
  size = 'md',
  variant = 'outline',
  colorScheme = 'primary',
  value,
  onChangeText,
  keyboardType = 'default',
  secureTextEntry = false,
  autoCapitalize = 'sentences',
  autoCorrect = true,
  maxLength,
  multiline = false,
  numberOfLines = 1,
  leftElement,
  rightElement,
  onFocus,
  onBlur,
  style,
  containerStyle,
  labelStyle,
  textStyle,
  ...rest
}) => {
  const { theme } = useTheme();
  const inputRef = useRef<RNTextInput>(null);
  const [isFocused, setIsFocused] = React.useState(false);

  const inputStyles = getInputStyles({
    theme,
    size,
    variant,
    colorScheme,
    isDisabled,
    isFocused,
    hasError: !!errorMessage,
  });

  const handleFocus = () => {
    setIsFocused(true);
    onFocus?.();
  };

  const handleBlur = () => {
    setIsFocused(false);
    onBlur?.();
  };

  const handleContainerPress = () => {
    inputRef.current?.focus();
  };

  return (
    <View style={[containerStyle]}>
      {label && (
        <Text
          style={[
            {
              fontSize: theme.typography.fontSize.sm,
              color: theme.colors.text.secondary,
              marginBottom: theme.spacing.xs,
              fontFamily: theme.typography.fontFamily.medium,
            },
            labelStyle,
          ]}
        >
          {label}
          {isRequired && <Text style={{ color: theme.colors.error[500] }}> *</Text>}
        </Text>
      )}

      <TouchableOpacity
        onPress={handleContainerPress}
        activeOpacity={1}
        style={[inputStyles.container, style]}
        disabled={isDisabled || isReadOnly}
      >
        {leftElement && (
          <View style={{ marginRight: theme.spacing.sm }}>{leftElement}</View>
        )}

        <RNTextInput
          ref={inputRef}
          value={value}
          onChangeText={onChangeText}
          placeholder={placeholder}
          placeholderTextColor={theme.colors.text.tertiary}
          keyboardType={keyboardType}
          secureTextEntry={secureTextEntry}
          autoCapitalize={autoCapitalize}
          autoCorrect={autoCorrect}
          maxLength={maxLength}
          multiline={multiline}
          numberOfLines={numberOfLines}
          editable={!isDisabled && !isReadOnly}
          onFocus={handleFocus}
          onBlur={handleBlur}
          style={[
            inputStyles.input,
            { flex: 1 },
            textStyle,
          ]}
          {...rest}
        />

        {rightElement && (
          <View style={{ marginLeft: theme.spacing.sm }}>{rightElement}</View>
        )}
      </TouchableOpacity>

      {helperText && !errorMessage && (
        <Text
          style={{
            fontSize: theme.typography.fontSize.xs,
            color: theme.colors.text.tertiary,
            marginTop: theme.spacing.xs,
          }}
        >
          {helperText}
        </Text>
      )}

      {errorMessage && (
        <Text
          style={{
            fontSize: theme.typography.fontSize.xs,
            color: theme.colors.error[500],
            marginTop: theme.spacing.xs,
          }}
        >
          {errorMessage}
        </Text>
      )}
    </View>
  );
};