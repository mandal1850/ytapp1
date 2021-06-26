import React from "react";

export default class SearchBar extends React.Component {
  state = { term: "" };

  handleSubmit = (event) => {
    event.preventDefault();

    //   make sure we call callback from parent component

    this.props.onFormSubmit(this.state.term);
  };

  render() {
    return (
      <div className='search-bar ui segment'>
        <form onSubmit={this.handleSubmit} className='ui form'>
          <div className='field'>
            <input
              type='text'
              placeholder='Search Text'
              value={this.state.term}
              onChange={(e) => this.setState({ term: e.target.value })}
            />
          </div>
        </form>
      </div>
    );
  }
}
