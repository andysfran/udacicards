import React, { PureComponent } from 'react';
import { View, StyleSheet } from 'react-native';

export default (props) => (
  <View style={[styles.container, props.customstyle]} {...props}>
    {props.children}
  </View>
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  }
})
