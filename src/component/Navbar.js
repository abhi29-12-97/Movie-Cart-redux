import React, { Component } from 'react'

class Navbar extends Component {
  render() {
    return (
      <div className='nav'>
        <div className='search-container'>
            < input></input> 
            <button id='search-btn'>Search</button>
        </div>
      </div>
    )
  }
}
export default Navbar;
