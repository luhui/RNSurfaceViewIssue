import React, { Component } from 'react'
import {
  View,
  StyleSheet
} from 'react-native'
import SurfaceView from './SurfaceView'
import PopupWindow from './PopupWindow'

export default () => (
  <View style={StyleSheet.absoluteFill}>
    <SurfaceView style={StyleSheet.absoluteFill}/>
    <PopupWindow />
  </View>
)
