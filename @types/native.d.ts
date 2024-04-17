/**
 * Copyright 2024 Whatssub Co., Ltd. All rights reserved.
 *
 * This source code is licensed under the
 * LICENSE file in the root directory of this source tree.
 */

import 'react-native';

declare module 'react-native' {
  export interface NativeModulesStatic {
    /**
     * ### Navigation Bar Height
     *
     * Module for getting navigation bar height of android.
     */
    NavigationBarHeight: {
      /**
       * Get navigation bar height of android.
       * Returns nothing when used in iOS
       *
       * @returns Android Navigation Bar Height(Bottom)
       */
      getNavigationBarHeight: () => Promise<number>;
    };
  }
}
