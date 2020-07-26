import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

class List extends Component {
  // Initialize the state
  constructor(props){
    super(props);
    this.state = {
      list: []
    }
  }

  // Fetch the list on first mount
  componentDidMount() {
    this.getList();
  }

  // Retrieves the list of items from the Express app
  getList = () => {
    fetch('http://localhost:3001/api/getList')
    .then(res => res.json())
    .then(list => this.setState({ list }))
  }

  render() {
    const { list } = this.state;

    return (
      <div>
          <h1>List of Items</h1>
          {/* Check to see if any items are found*/}
          {list.length ? (
            <div>
              {/* Render the list of items */}
              {list.map((item) => {
                return(
                  <div>
                    {item}
                  </div>
                );
              })}
            </div>
          ) : (
            <div>
              <h2>No List Items Found</h2>
            </div>
          )
        }
          <Link to={'./'}>
            <button variant="raised">
                Back Home
            </button>
          </Link>
      </div>
    );
  }
}

export default List;