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
    console.log('did mount?')
    setTimeout(() => {
      console.log('will update state')
      this.setState({
        show: true
      }, () => console.log('show state'))
    }, 3000);
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
    ) : <View />
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
  text: {
    paddingTop: 20,
    color: 'white',
  }
})
