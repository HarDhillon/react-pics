import React from 'react';

class SearchBar extends React.Component {

  state = { term: '' };

  onFormSubmit = event => {
    event.preventDefault();
    // on submit we call the prop (which is a function from App) with the state.
    this.props.onSubmit(this.state.term)
  }

  render () {
    return (

      <div className="ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label>Image Search</label>
            <input 
            type='text'
            // making this a controlled element
            value={this.state.term} 
            onChange={e => this.setState({ term: e.target.value })} />
          </div>
        </form>
      </div>
      ); 
  }
}

export default SearchBar;