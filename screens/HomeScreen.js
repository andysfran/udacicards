import React, { PureComponent } from 'react';
import { StyleSheet, FlatList, TouchableOpacity, Text } from 'react-native';
import { connect } from 'react-redux';

import DefaultContainer from '../components/DefaultContainer';
import DeckItem from '../components/DeckItem';

class HomeScreen extends PureComponent {

  static navigationOptions = {
    title: 'Decks',
    headerStyle: {
      backgroundColor: '#437db2',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    }
  };

  goToDeck = (idDeck) => {
    this.props.navigation.push('Details', {
      idDeck
    });
  }

  renderItem = ({item, index}) => {
    const questionsLength = item.questions.length;
    return (
      <DeckItem
        key={item.title}
        title={item.title}
        subtitle={`Questions: ${questionsLength}`}
        clickDeck={() => this.goToDeck(index)}
      />
    );
  }

  render() {
    return(
      <DefaultContainer customstyle={styles.container}>
        <FlatList
          data={this.props.list}
          renderItem={this.renderItem}
          style={{ flex: 1 }}
        />
        <TouchableOpacity style={styles.btnPlus} onPress={() => this.props.navigation.navigate('NewDeck')}>
          <Text style={styles.textFab}>+</Text>
        </TouchableOpacity>
      </DefaultContainer>
    );
  }
}

const mapStateToProps = (state) => ({
  list: state.decksReducer
});

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#6f92b2"
  },
  btnPlus: {
    width: 50,
    height: 50,
    borderRadius: 25,
    zIndex: 2,
    backgroundColor: '#fff',
    color: '#000000',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 50,
    marginRight: 30,
    alignSelf:'flex-end'
  },
  textFab: {
    fontSize: 30,
    fontWeight: '400'
  }
});

export default connect(mapStateToProps, null)(HomeScreen);
