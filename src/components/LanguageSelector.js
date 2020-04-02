import React from 'react';
import LanguageContext from '../contexts/LanguageContext';

class LanguageSelector extends React.Component {
  static contextType = LanguageContext;

  render() {
    console.log(this.context);
    return (
      <div>
        <h4>Select a Language:</h4>
        <i className="flag us" onClick={() => this.context.onLanguageChange('english')} />
        <i className="flag es" onClick={() => this.context.onLanguageChange('spanish')} />
        <i className="flag nl" onClick={() => this.context.onLanguageChange('dutch')} />
        <i className="flag bg" onClick={() => this.context.onLanguageChange('bulgarian')} />
        <i className="flag kp" onClick={() => this.context.onLanguageChange('korean')} />
        <i className="flag ru" onClick={() => this.context.onLanguageChange('russian')} />
        <i className="flag cn" onClick={() => this.context.onLanguageChange('chinese')} />
      </div>
    );
  }
}

export default LanguageSelector;
