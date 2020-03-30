import React from 'react';
import LanguageContext from '../contexts/LanguageContext';

class Field extends React.Component {
  static contextType = LanguageContext;

  render() {
    const text = (
      this.context === 'english' ? 'Name' : // if
      this.context === 'dutch' ? 'Naam' : // else if
      this.context === 'bulgarian' ? 'име' : // else if
      this.context === 'korean' ? '이름' : // else if
      this.context === 'russian' ? 'название' : // else if
      this.context === 'chinese' ? '名字' : // else if
      this.context === 'spanish' ? 'Nombre' : // else if
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
