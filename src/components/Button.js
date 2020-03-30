import React from 'react';
import LanguageContext from '../contexts/LanguageContext';
import ColorContext from '../contexts/ColorContext';

class Button extends React.Component {
  render() {
    return (
      <ColorContext.Consumer>
        {(color) =>
          <button className={`ui button ${color}`}>
            <LanguageContext.Consumer>
              {(value) =>
                value === 'english' ? 'Submit' : // if
                value === 'dutch' ? 'Voorleggen' : // else if
                value === 'bulgarian' ? 'Търсене' : // else if
                value === 'korean' ? '검색' : // else if
                value === 'russian' ? 'Поиск' : // else if
                value === 'chinese' ? '搜尋' : // else if
                value === 'spanish' ? 'Buscar' : // else if
                null // else
              }
            </LanguageContext.Consumer>
          </button>
        }
      </ColorContext.Consumer>
    )
  }
}

export default Button;
