import React, { Component } from 'react'
import {
  View,
  StyleSheet,
  Dimensions
} from 'react-native'
import SurfaceView from './SurfaceView'
import PopupWindow from './PopupWindow'

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
  // container: { //error style
  //   flex: 1,
  //   backgroundColor: 'red'
  // },
  container: StyleSheet.absoluteFillObject
})
