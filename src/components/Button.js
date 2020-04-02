import React from 'react';
import LanguageContext from '../contexts/LanguageContext';
import ColorContext from '../contexts/ColorContext';


class Button extends React.Component {
  renderSubmit(language) {
    return (
      language === 'english' ? 'Submit' : // if
      language === 'dutch' ? 'Voorleggen' : // else if
      language === 'bulgarian' ? 'Търсене' : // else if
      language === 'korean' ? '검색' : // else if
      language === 'russian' ? 'Поиск' : // else if
      language === 'chinese' ? '搜尋' : // else if
      language === 'spanish' ? 'Buscar' : // else if
      null // else
    )
  }

  renderButton(color) {
    return (
      <button className={`ui button ${color}`}>
        <LanguageContext.Consumer>
          {({ language }) => this.renderSubmit(language)}
        </LanguageContext.Consumer>
      </button>
    );
  }

  render() {
    return (
      <ColorContext.Consumer>
        {color => this.renderButton(color)}
      </ColorContext.Consumer>
    );
  }
}

export default Button;
