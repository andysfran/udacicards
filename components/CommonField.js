import React, { PureComponent } from 'react'
import { View, TextInput, Text, StyleSheet } from 'react-native'

export default class CommonField extends PureComponent {
  static defaultProps = {
    label: '',
    onChangeText: () => console.warn('Missing callback function'),
    value: ''
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.label}>{this.props.label}</Text>
        <TextInput
          value={this.props.value}
          onChangeText={this.props.onChangeText}
          style={styles.input}
        />
      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    padding: 5,
    width: '90%'
  },
  label: {
    fontSize: 25,
    color: '#fff',
    fontWeight: '500'
  },
  input: {
    backgroundColor: '#fff',
    borderRadius: 15,
    padding: 8,
  }
})
