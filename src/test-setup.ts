// Mock React Native modules for testing
jest.mock('react-native', () => ({
  View: 'View',
  Text: 'Text',
  TouchableOpacity: 'TouchableOpacity',
  TextInput: 'TextInput',
  Image: 'Image',
  ScrollView: 'ScrollView',
  Modal: 'Modal',
  Animated: {
    View: 'AnimatedView',
    Value: jest.fn(() => ({
      interpolate: jest.fn(),
    })),
    timing: jest.fn(() => ({
      start: jest.fn(),
    })),
  },
  Platform: {
    OS: 'ios',
  },
  KeyboardAvoidingView: 'KeyboardAvoidingView',
  ActivityIndicator: 'ActivityIndicator',
}));

jest.mock('@shopify/flash-list', () => ({
  FlashList: 'FlashList',
}));