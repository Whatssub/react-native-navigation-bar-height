/**
 * Copyright 2024 Whatssub Co., Ltd. All rights reserved.
 *
 * This source code is licensed under the
 * LICENSE file in the root directory of this source tree.
 */

import { useEffect, useMemo, useState } from 'react';
import {
  NativeModules,
  AppState,
  Platform,
  useWindowDimensions,
} from 'react-native';

import type { AppStateStatus } from 'react-native';

/**
 * Spread NavigationBarHeight from NativeModules
 */
const { NavigationBarHeight } = NativeModules;

/**
 * Retrieves the navigation bar height from Android and returns it.
 * Runs whenever the app is focused to detect the navigation bar height.
 *
 * @param init Initial value (default 0)
 * @returns The current navigation bar height
 */
export function useAndroidNavigationBarHeight(init: number = 0): number {
  // Return 0 if not Android
  if (Platform.OS !== 'android') {
    return 0;
  }

  // State to store height
  const [barHeightPx, setBarHeightPx] = useState(init);

  // Receive screen scaling
  const { scale } = useWindowDimensions();

  // Final computation of height
  const barHeight = useMemo(getBarHeight, [barHeightPx, scale]);

  // Receive and update height
  useEffect(assignNavigationBarListener, []);

  /**
   * Assign listener for AppState.
   * Update navigation bar height when AppState has been changed.
   *
   * @returns Cleanup Function
   */
  function assignNavigationBarListener(): () => void {
    // Also get the height during the initial app load
    initNavigationBarHeight();

    // Receive height upon app operation
    const subscription = AppState.addEventListener(
      'change',
      updateNavigationBarHeight
    );

    // Listener cleanup
    return () => subscription.remove();
  }

  /**
   * Receives the initial navigation bar height and sets it in State.
   */
  function initNavigationBarHeight(): void {
    setNavigationBarHeightSync();
  }

  /**
   * When the app state updates, receives the navigation bar height and sets it in State.
   *
   * @param nextAppState The next app state {@link AppStateStatus}
   */
  function updateNavigationBarHeight(nextAppState: AppStateStatus): void {
    if (nextAppState === 'active') {
      setNavigationBarHeightSync();
    }
  }

  /**
   * Receives the navigation bar height and sets it in State.
   */
  async function setNavigationBarHeightSync(): Promise<void> {
    const barHeight = await NavigationBarHeight.getNavigationBarHeight();
    setBarHeightPx(barHeight);
  }

  /**
   * Divides the actual navigation bar height by the scale to return the height in points (or DP).
   *
   * @returns The height in points (or DP)
   */
  function getBarHeight(): number {
    return barHeightPx / scale;
  }

  return barHeight;
}
