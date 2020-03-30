import React from 'react';
import UserCreate from './UserCreate';
import LanguageContext from '../contexts/LanguageContext';
import ColorContext from '../contexts/ColorContext';

class App extends React.Component {
  state = { language: 'english' };

  onLanguageChange = language => {
    this.setState({ language })
  }

  render() {
    return (
      <div className="ui container">
        <div>
          <h4>Select a Language:</h4>
          <i className="flag us" onClick={() => this.onLanguageChange('english')} />
          <i className="flag es" onClick={() => this.onLanguageChange('spanish')} />
          <i className="flag nl" onClick={() => this.onLanguageChange('dutch')} />
          <i className="flag bg" onClick={() => this.onLanguageChange('bulgarian')} />
          <i className="flag kp" onClick={() => this.onLanguageChange('korean')} />
          <i className="flag ru" onClick={() => this.onLanguageChange('russian')} />
          <i className="flag cn" onClick={() => this.onLanguageChange('chinese')} />
        </div>
        <ColorContext.Provider value="red">
          <LanguageContext.Provider value={this.state.language}>
            <UserCreate />
          </LanguageContext.Provider>
        </ColorContext.Provider>
      </div>
    )
  }
}

export default App;
