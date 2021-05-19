import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { createInformation } from '../../actions';

class InformationCreate extends React.Component {
  renderError({ error, touched }) {
    if (touched && error) {
      return (
        <div className="ui error message">
          <div className="header">{error}</div>
        </div>
      );
    }
  }
  renderInput = ({ input, label, meta }) => {
    const className = `field ${meta.error && meta.touched ? 'error' : ''}`;
    return (
      <div className={className}>
        <label>{label}</label>
        <input {...input} autoComplete="off" />
        {this.renderError(meta)}
      </div>
    );
  };
  onSubmit = formValues => {
    this.props.createInformation(formValues);
  };

  render() {
    return (
      <form
        onSubmit={this.props.handleSubmit(this.onSubmit)}
        className="ui form error"
      >
        <Field
          name="fornavn"
          component={this.renderInput}
          label="Indtast fornavn"
        />
        <Field
          name="efternavn"
          component={this.renderInput}
          label="Indtast efternavn"
        />

        <Field
          name="email"
          component={this.renderInput}
          label="Indtast email"
        />
        <button className="ui button primary">Indtast</button>
      </form>
    );
  }
}
const validate = formValues => {
  const errors = {};

  if (!formValues.fornavn) {
    errors.fornavn = 'Du skal indtaste et fornavn';
  }
  if (!formValues.efternavn) {
    errors.efternavn = 'Du skal indtaste et efternavn';
  }
  if (!formValues.email) {
    errors.email = 'Du skal indtaste en e-mailadresse';
  }
  return errors;
};
const formWrapped = reduxForm({
  form: 'InformationCreate',
  validate: validate
})(InformationCreate);

export default connect(
  null,
  { createInformation }
)(formWrapped);
