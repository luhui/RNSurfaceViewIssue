import React, { Component } from 'react'
import {
  View,
  Text,
  StyleSheet
} from 'react-native'

export default class PopupWindow extends Component {
  state = {
    show: false
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({
        show: true
      })
    }, 3000)
  }
  render() {
    return this.state.show ? (
      <View style={StyleSheet.absoluteFill}>
        <View style={styles.container}>
          <Text style={styles.text}>
            "Hi a Text"
          </Text>
        </View>
      </View>
    ) : null
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'green',
  },
  text: {
    color: 'white',
    width: 300,
    height: 240,
    textAlign: 'center',
    backgroundColor: 'orange',
    borderRadius: 10,
  }
})
