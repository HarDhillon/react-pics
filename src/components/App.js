import React from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';

class App extends React.Component {
  // instead of .then we can use async
  async onSearchSubmit(term) {
    // using axios which is like fetch, but better
    // use await instead of .then
    const response = await axios
    .get("https://api.unsplash.com/search/photos", {
      params: { query: term },
      headers: {
        Authorization: 'Client-ID 2b98c1afb0aed3b3d94a1866bdc3ac013d21a0c86d236a0fee32355c331c0296'
      }
    });

    console.log(response.data.results)
  }

  render() {
    return (
      <div className="ui container" style={{ marginTop: '10px' }}>
        {/* pass searchbar prop, which a function */}
        <SearchBar onSubmit={this.onSearchSubmit} />
      </div>
    );
  } 
}

export default App;