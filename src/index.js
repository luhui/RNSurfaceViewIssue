import {
  Dimensions,
  StyleSheet,
  View
} from 'react-native'
import React, { Component } from 'react'

import PopupWindow from './PopupWindow'
import SurfaceView from './SurfaceView'

export default class SampleApp extends Component {
  render() {
    return (
      <View style={styles.container}>
        <SurfaceView style={StyleSheet.absoluteFill}/>
        <PopupWindow />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: { //error style
    flex: 1,
    backgroundColor: 'red'
  },
  // container: StyleSheet.absoluteFillObject
})
