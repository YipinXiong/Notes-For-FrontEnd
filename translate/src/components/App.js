import React from 'react';
import UserCreat from './UserCreate';
import {LanguageStore} from '../contexts/LanguageContext';
import ColorContext from '../contexts/ColorContext';
import LanguageSelector from './LanguageSelector';

class App extends React.Component {
  render() {
    return (      
      <div className="ui container">
        <LanguageStore >
          <LanguageSelector />
          <ColorContext.Provider value="red">
            <UserCreat />
          </ColorContext.Provider>
        </LanguageStore>  
      </div>
      )
  }
}

export default App;