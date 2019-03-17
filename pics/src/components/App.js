import React from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';

class App extends React.Component {

  state = { images: [] };

  onSearchSubmit = async term => {
    const response =  await axios.get("https://api.unsplash.com/search/photos", {
      params: { query: term},
      headers: {
        Authorization: 'Client-ID 75f78c86f106afacc462f6f8d45b92335c379282f3d47b9bffbb3e2d54229e1e' 
      }
    });

    this.setState( { images: response.data.results });
  }

  render() {  
    return (
      <div className="ui container" style={{marginTop: '10px'}}>
        <SearchBar onSubmit={this.onSearchSubmit} />
        Found: {this.state.images.length} images
      </div>
    );
  }
}

export default App;