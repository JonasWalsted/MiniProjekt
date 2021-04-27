import React from 'react';
import { connect } from 'react-redux';

const QuestionDetail = ({question}) => {
  if(!question) {
    return <div> </div>
  }
  return (
    <div >
        <div>
      <h3> Du har valgt aldersgruppen: </h3>
      <p>{question.title}</p>
      </div>
    </div>

);
};

const mapStateToProps = state => {
  return(
     { question: state.selectedAgeGroup }

   );
};

export default connect(mapStateToProps)(QuestionDetail);
