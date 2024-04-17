# react-native-navigation-bar-height

Get android's navigation bar height when app has been focused

## Installation

```sh
yarn add react-native-navigation-bar-height
```

## Usage

```tsx
/**
 * Copyright 2024 Whatssub Co., Ltd. All rights reserved.
 *
 * This source code is licensed under the
 * LICENSE file in the root directory of this source tree.
 */

import { StyleSheet, View, Text } from 'react-native';

import { useAndroidNavigationBarHeight } from 'react-native-navigation-bar-height';

const App = () => {
  const height = useAndroidNavigationBarHeight();

  return (
    <View style={styles.container}>
      <Text>Result: {height}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
});

export default App;

```

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT