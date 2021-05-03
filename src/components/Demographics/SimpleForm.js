import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { BrowserRouter, Route, Link } from 'react-router-dom';
const SimpleForm = props => {
  const { handleSubmit, pristine, reset, submitting } = props;

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Fornavn</label>
        <div>
          <Field
            name="firstName"
            component="input"
            type="text"
            placeholder="Fornavn"
          />
        </div>

      </div>
      <div>
        <label>Efternavn</label>
        <div>
          <Field
            name="lastName"
            component="input"
            type="text"
            placeholder="Efternavn"
          />
        </div>
      </div>
      <div>
        <label>Email</label>
        <div>
          <Field
            name="email"
            component="input"
            type="email"
            placeholder="Email"
          />
        </div>
      </div>
      <div>
        <label>Sex</label>
        <div>
          <label>
            <Field name="sex" component="input" type="radio" value="male" />
            {' '}
            Mand
          </label>
          <label>
            <Field name="sex" component="input" type="radio" value="female" />
            {'  '}
            Kvinde
          </label>
          <label>
            <Field name="sex" component="input" type="radio" value="Other" />
            {' '}
            Andet
          </label>
        </div>
      </div>
      <div>
      </div>


      <div>


        <button className="ui next button" type="submit" disabled={pristine || submitting}>
          Tilføj
        </button>
        <button className="ui next button" type="button" disabled={pristine || submitting} onClick={reset}>
          Fjern indhold
        </button>
      </div>
    </form>
  );
};

export default reduxForm({
  form: 'simple', // a unique identifier for this form
})(SimpleForm);
