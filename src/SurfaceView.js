import React, { PropTypes } from 'react'
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

export default requireNativeComponent('SurfaceView', iface)
