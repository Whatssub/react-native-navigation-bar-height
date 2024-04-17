package com.navigationbarheight

import android.content.res.Configuration
import android.content.res.Resources
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod
import com.facebook.react.bridge.Promise

class NavigationBarHeightModule(reactContext: ReactApplicationContext) :
  ReactContextBaseJavaModule(reactContext) {

  override fun getName(): String {
    return NAME
  }

  @ReactMethod
  fun getNavigationBarHeight(promise: Promise) {
      val resources: Resources = reactApplicationContext.resources
      val resName = if (resources.configuration.orientation == Configuration.ORIENTATION_PORTRAIT) {
          "navigation_bar_height"
      } else {
          "navigation_bar_height_landscape"
      }

      val id: Int = resources.getIdentifier(resName, "dimen", "android")
      val height = if (id > 0) {
          resources.getDimensionPixelSize(id)
      } else {
          0
      }

      promise.resolve(height)
  }

  companion object {
    const val NAME = "NavigationBarHeight"
  }
}
