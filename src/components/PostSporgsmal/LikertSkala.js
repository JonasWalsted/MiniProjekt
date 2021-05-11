import React from 'react';
import Likert from 'react-likert-scale';

export default () => {
  const likertOptions = {
    question: "Hvordan var det at bygge din bane?",
    responses: [
      { value: 1, text: "Kedeligt" },
      { value: 2, text: "Lidt kedeligt" },
      { value: 3, text: "OK", checked: true },
      { value: 4, text: "Sjovt " },
      { value: 5, text: "Meget sjovt" }
    ],
    onChange: val => {
      console.log(val.text);
    }
  };
  return (
    <Likert {...likertOptions}

    />
  )
}
