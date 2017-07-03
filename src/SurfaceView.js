import React, { Component } from 'react'
import {
  requireNativeComponent,
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
} from 'react-native'

var iface = {
  name: 'SurfaceView',
  propTypes: {
    ...View.propTypes //the default view properties
  },
};

const SurfaceView = requireNativeComponent('SurfaceView', iface)

export default SurfaceView

const styles = StyleSheet.create({
  text:{
    color: 'green'
  }
})
