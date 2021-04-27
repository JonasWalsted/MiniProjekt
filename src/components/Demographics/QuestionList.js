import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectQuestion, selectGender } from '../../actions';




class QuestionList extends Component {
  renderList() {
    return this.props.questions.map(question => {
      return (
        <div  key={question.title}>
          <div>{question.title}</div>

            <button
              className="ui button primary"
              onClick={() => this.props.selectQuestion(question)}
            >
              Tryk her!
            </button>
            <br />
          </div>

      );
    });
  }



    render() {
      return <div className="ui divided list">{this.renderList()}</div>;
    }
  }


const mapStateToProps = state => {
  return (
    { questions: state.ageGroups });
};

export default connect(
  mapStateToProps,
  { selectQuestion }
)(QuestionList);
