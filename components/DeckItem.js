import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

export default (props) => (
  <TouchableOpacity onPress={props.clickDeck} style={styles.container}>
    <Text style={styles.title}>{props.title}</Text>
    <Text style={styles.subtitle}>{props.subtitle}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 80,
    padding: 10,
    justifyContent: 'center',
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#d3d3d3'
  },
  title: {
    fontSize: 30,
    color: '#d3d3d3'
  },
  subtitle: {
    fontSize: 20,
    color: '#fff'
  }
});