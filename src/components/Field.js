import React from 'react';
import LanguageContext from '../contexts/LanguageContext';

class Field extends React.Component {
  static contextType = LanguageContext;

  render() {
    const text = (
      this.context.language === 'english' ? 'Name' : // if
      this.context.language === 'dutch' ? 'Naam' : // else if
      this.context.language === 'bulgarian' ? 'име' : // else if
      this.context.language === 'korean' ? '이름' : // else if
      this.context.language === 'russian' ? 'название' : // else if
      this.context.language === 'chinese' ? '名字' : // else if
      this.context.language === 'spanish' ? 'Nombre' : // else if
      null // else
    );


    return (
      <div className="ui field">
        <label>{text}</label>
        <input />
      </div>
    );
  }
}

export default Field;
