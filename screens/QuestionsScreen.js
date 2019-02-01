import React, { PureComponent } from 'react';
import { StyleSheet, View } from 'react-native';
import { connect } from 'react-redux';
import { Tooltip, Text } from 'react-native-elements';

import DefaultContainer from '../components/DefaultContainer';
import CommonButton from '../components/CommonButton';

import { clearLocalNotification, setLocalNotification } from '../utils/helper'

class QuizScreen extends PureComponent {

  static navigationOptions = {
    title: 'Quiz',
    headerStyle: {
      backgroundColor: '#437db2',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    }
  };

  state = {
    questionIndex: 0,
    correctAnswerCount: 0,
    wrongAnswerCount: 0,
    showAnswerText: true,
    showResults: false
  }

  getSelectedDeck = () => {
    const { list, navigation: { state: { params } } } = this.props;
    return list[params.idDeck];
  }

  onPressAnswer = (type = 'correct') => {
    const deck = this.getSelectedDeck();
    const { questionIndex, correctAnswerCount, wrongAnswerCount } = this.state;
    const willShowResults = ((questionIndex + 2) > deck.questions.length);

    if (type === "correct") {
      this.setState({ questionIndex: questionIndex + 1, showResults: willShowResults, correctAnswerCount: correctAnswerCount + 1 });
    } else {
      this.setState({ questionIndex: questionIndex + 1, showResults: willShowResults, wrongAnswerCount: wrongAnswerCount + 1 });
    }
  }

  resetQuiz = () => {
    this.setState({
      questionIndex: 0,
      correctAnswerCount: 0,
      wrongAnswerCount: 0,
      showAnswerText: true,
      showResults: false
    })
  }

  renderQuestion = () => {
    const deck = this.getSelectedDeck();
    const { questionIndex, showAnswerText } = this.state;
    return (
      <View style={styles.containerQuestion}>
        <Text style={styles.question}>{deck.questions[questionIndex].question}</Text>
        <Tooltip
          popover={<Text style={styles.answer}>{deck.questions[questionIndex].answer}</Text>}
          width={'70%'}
          height={200}
          onOpen={() => this.setState({ showAnswerText: false })}
          onClose={() => this.setState({ showAnswerText: true })}
        >
          {showAnswerText && <Text style={styles.answerIndicator}>Touch here to see the answer 😊</Text>}
        </Tooltip>
        <Text style={styles.remainingQuestions}>Remaining questions: {((deck.questions.length-1) - questionIndex)}</Text>

        <CommonButton filled={true} onPress={() => this.onPressAnswer()}>Correct</CommonButton>
        <CommonButton onPress={() => this.onPressAnswer('wrong')}>Wrong</CommonButton>
      </View>
    )
  }

  renderResults = () => {
    const { correctAnswerCount } = this.state;
    const deck = this.getSelectedDeck();
    return (
      <View style={styles.containerResults}>
        <Text style={styles.titleResults}>DONE!</Text>
        <Text style={styles.subtitleResults}>Your score is {correctAnswerCount} of {deck.questions.length} question(s)</Text>
        <CommonButton filled={true} onPress={() => this.props.navigation.goBack()}>Back to Deck</CommonButton>
        <CommonButton onPress={this.resetQuiz}>Restart Quiz</CommonButton>
      </View>
    );
  }

  renderContent = () => {
    if (this.state.showResults) {
      clearLocalNotification();
      setLocalNotification();
      return this.renderResults();
    }
    return this.renderQuestion();
  }

  render() {
    return(
      <DefaultContainer customstyle={styles.container}>
        {this.renderContent()}
      </DefaultContainer>
    );
  }
}

const mapStateToProps = (state) => ({
  list: state.decksReducer
});

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "#6f92b2"
  },
  remainingQuestions: {
    fontSize: 15,
    textAlign: 'center',
    color: '#ff5c33'
  },
  question: {
    fontSize: 30,
    textAlign: 'center',
    color: '#fff'
  },
  answer: {
    fontSize: 20,
    textAlign: 'center',
    color: '#fff',
    padding: 15,
    alignSelf: 'center'
  },
  answerIndicator: {
    fontSize: 20,
    textAlign: 'center',
    color: '#f8f6f6',
    padding: 15
  },
  containerQuestion: {
    alignItems: 'center'
  },
  containerResults: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  titleResults: {
    fontSize: 30,
    color: '#fff'
  },
  subtitleResults: {
    fontSize: 25,
    color: '#fff'
  }
});

export default connect(mapStateToProps, null)(QuizScreen)
