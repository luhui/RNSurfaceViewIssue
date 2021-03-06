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
//   container: { //error style with flexbox
//     flex: 1,
//     backgroundColor: 'red'
//   },
//   container: { //error style with shadow
//       ...StyleSheet.absoluteFillObject,
//       shadowColor: 'black',
//   }
  container: StyleSheet.absoluteFillObject
})
