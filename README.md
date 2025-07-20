# @hovecapital/uma

A comprehensive React Native Expo component library with TypeScript support and advanced theming capabilities.

## Installation

```bash
npm install @hovecapital/uma
```

### Peer Dependencies

This library requires the following peer dependencies:

```bash
npm install react@^18.2.0 react-native@^0.72.0 @shopify/flash-list@^1.6.0
```

Optional dependencies for enhanced functionality:

```bash
npm install expo react-native-reanimated react-native-gesture-handler
```

### Requirements

This library is designed to work with:

- **React**: 18.2.x or higher
- **React Native**: 0.72.x or higher  
- **FlashList**: 1.6.x or higher
- **Node.js**: 16.x or higher
- **Expo**: 48.x or higher (optional)

## Quick Start

Wrap your app with the `ThemeProvider`:

```tsx
import React from 'react';
import { ThemeProvider, VStack, Button, Card, TextInput } from '@hovecapital/uma';

const App = () => {
  const [text, setText] = React.useState('');

  return (
    <ThemeProvider>
      <VStack spacing="lg" padding="md">
        <Card variant="elevated" padding="lg">
          <VStack spacing="md">
            <TextInput
              label="Email"
              placeholder="Enter your email"
              value={text}
              onChangeText={setText}
              variant="outline"
            />
            <Button
              variant="solid"
              colorScheme="primary"
              onPress={() => console.log('Pressed')}
              fullWidth
            >
              Submit
            </Button>
          </VStack>
        </Card>
      </VStack>
    </ThemeProvider>
  );
};

export default App;
```

## Components

### Layout Components

#### VStack

Vertically stacks children with consistent spacing.

```tsx
import { VStack, Text } from '@hovecapital/uma';

<VStack spacing="md" align="center" padding="lg">
  <Text>Item 1</Text>
  <Text>Item 2</Text>
  <Text>Item 3</Text>
</VStack>
```

#### HStack

Horizontally stacks children with consistent spacing.

```tsx
import { HStack, Button } from '@hovecapital/uma';

<HStack spacing="sm" justify="space-between">
  <Button variant="outline" onPress={() => {}}>Cancel</Button>
  <Button variant="solid" onPress={() => {}}>Confirm</Button>
</HStack>
```

### Form Components

#### TextInput

Feature-rich input component with validation support.

```tsx
import { TextInput } from '@hovecapital/uma';

<TextInput
  label="Password"
  placeholder="Enter your password"
  value={password}
  onChangeText={setPassword}
  secureTextEntry
  variant="outline"
  size="lg"
  isRequired
  errorMessage={passwordError}
/>
```

#### Button

Customizable button with multiple variants and sizes.

```tsx
import { Button } from '@hovecapital/uma';

<Button
  variant="solid"
  size="lg"
  colorScheme="primary"
  leftIcon={<Icon name="user" />}
  isLoading={loading}
  fullWidth
  onPress={handleSubmit}
>
  Create Account
</Button>
```

### Display Components

#### Card

Flexible card container with multiple variants.

```tsx
import { Card, VStack, Text } from '@hovecapital/uma';

<Card variant="elevated" padding="lg" onPress={handleCardPress}>
  <VStack spacing="sm">
    <Text style={{ fontWeight: 'bold' }}>Card Title</Text>
    <Text>Card content goes here...</Text>
  </VStack>
</Card>
```

#### List

High-performance list component powered by FlashList.

```tsx
import { List } from '@hovecapital/uma';

<List
  data={items}
  renderItem={(item, index) => (
    <Card key={item.id} margin="sm">
      <Text>{item.title}</Text>
    </Card>
  )}
  keyExtractor={(item) => item.id}
  estimatedItemSize={80}
  onEndReached={loadMore}
/>
```

### Overlay Components

#### Modal

Feature-rich modal with multiple configurations.

```tsx
import { Modal, VStack, Button, Text } from '@hovecapital/uma';

<Modal
  isOpen={isModalOpen}
  onClose={() => setIsModalOpen(false)}
  size="lg"
  header="Confirmation"
  footer={
    <HStack spacing="md" justify="flex-end">
      <Button variant="outline" onPress={() => setIsModalOpen(false)}>
        Cancel
      </Button>
      <Button variant="solid" onPress={handleConfirm}>
        Confirm
      </Button>
    </HStack>
  }
>
  <Text>Are you sure you want to continue?</Text>
</Modal>
```

### Chat Components

#### ChatMessage

Individual chat message component.

```tsx
import { ChatMessage } from '@hovecapital/uma';

<ChatMessage
  message={{
    id: '1',
    text: 'Hello, how are you?',
    userId: 'user1',
    timestamp: new Date(),
  }}
  isOwn={false}
  showAvatar
  avatar={{ name: 'John Doe' }}
  onPress={handleMessagePress}
/>
```

#### ChatMessageList

Optimized list for chat messages.

```tsx
import { ChatMessageList } from '@hovecapital/uma';

<ChatMessageList
  messages={messages}
  inverted
  showDateSeparators
  groupMessages
  onEndReached={loadOlderMessages}
/>
```

## Theming

### Using the Default Theme

The library comes with a comprehensive default theme:

```tsx
import { ThemeProvider } from '@hovecapital/uma';

<ThemeProvider>
  {/* Your app components */}
</ThemeProvider>
```

### Custom Theme

Customize the theme by providing overrides:

```tsx
import { ThemeProvider } from '@hovecapital/uma';

const customTheme = {
  colors: {
    primary: {
      500: '#ff6b6b', // Custom primary color
    },
  },
  spacing: {
    xl: 40, // Custom spacing
  },
};

<ThemeProvider theme={customTheme}>
  {/* Your app components */}
</ThemeProvider>
```

### Using Theme in Components

Access theme values in your custom components:

```tsx
import { useTheme } from '@hovecapital/uma';

const CustomComponent = () => {
  const { theme } = useTheme();
  
  return (
    <View style={{ 
      padding: theme.spacing.md,
      backgroundColor: theme.colors.primary[500] 
    }}>
      {/* Component content */}
    </View>
  );
};
```

## TypeScript Support

The library is built with TypeScript and provides comprehensive type definitions:

```tsx
import type { ButtonProps, Theme, ChatMessageData } from '@hovecapital/uma';

// Custom button with proper typing
const MyButton: React.FC<ButtonProps> = (props) => {
  return <Button {...props} />;
};

// Custom theme type
const myTheme: DeepPartial<Theme> = {
  colors: {
    primary: {
      500: '#custom-color',
    },
  },
};
```

## Advanced Usage

### Custom List Item

```tsx
import { List, Card, VStack, HStack, Text } from '@hovecapital/uma';

const UserList = ({ users }) => (
  <List
    data={users}
    renderItem={(user) => (
      <Card variant="outline" margin="xs" padding="md">
        <HStack spacing="md" align="center">
          <ChatAvatar name={user.name} size="md" />
          <VStack spacing="xs" flex={1}>
            <Text style={{ fontWeight: 'bold' }}>{user.name}</Text>
            <Text style={{ color: 'gray' }}>{user.email}</Text>
          </VStack>
        </HStack>
      </Card>
    )}
    keyExtractor={(user) => user.id}
    estimatedItemSize={80}
  />
);
```

### Form with Validation

```tsx
import { VStack, TextInput, Button, Card } from '@hovecapital/uma';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});

  return (
    <Card variant="elevated" padding="xl">
      <VStack spacing="lg">
        <TextInput
          label="Email"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          errorMessage={errors.email}
          variant="outline"
        />
        <TextInput
          label="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          errorMessage={errors.password}
          variant="outline"
        />
        <Button
          variant="solid"
          size="lg"
          fullWidth
          onPress={handleLogin}
        >
          Login
        </Button>
      </VStack>
    </Card>
  );
};
```

## Contributing

We welcome contributions! Please see our contributing guidelines for more details.

## License

MIT © Hove Capital
