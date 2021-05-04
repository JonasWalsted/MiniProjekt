import React from 'react';
import { Field, reduxForm } from 'redux-form';
import '../Template.css';


class SimpleForm extends React.Component {

  renderError({ error, touched}) {
    if(touched && error) {
      return (
        <div className="ui error message">
            <div className="header">{error}</div>
        </div>
      );
    }
  }





  renderInput = ({input, label, meta}) => {
    const className = `field ${meta.error && meta.touched ? 'error': ''}`;
    return (
      <div className="{className}">
        <label>{label}</label>
        <input {...input} />

        {this.renderError(meta)}
      </div>
    );
  }

  onSubmit(formValues){
    console.log(formValues);
  }

  render() {
    return (
      <form
        onSubmit={this.props.handleSubmit(this.onSubmit)}
        className="ui form error"
        >

        <Field
          name="title"
          component={this.renderInput}
          label="Fornavn"
          />

        <Field
          name="description"
          component={this.renderInput}
          label="Efternavn"
        />
        <button className="ui botton primary">Submit</button>

      </form>
    );
  }
}

const validate = formValues => {
  const errors = {};

  if(!formValues.title){
    errors.title = 'Du skal indtaste fornavn';
  }

  if(!formValues.description){
    errors.description = 'Du skal indtaste efternavn';
  }

  return errors;
};

export default reduxForm({
  form: 'streamCreate',
  validate

})(SimpleForm);
