import React, { Component } from 'react';

class Counter extends Component {
  state = {
    count: 0,
  };

  // Apply style to specific element
  // styles = {
  //   fontSize: 10,
  //   fontWeight: 'bold',
  // };

  // render() {
  //   return (
  //     <div>
  //       <span style={this.styles} className='badge badge-primary m-2'>
  //         {this.formatCount()}
  //       </span>
  //       <button className='btn btn-secondary btn-sm'>Increment</button>
  //     </div>
  //   );
  // }

  // inline style
  // render() {
  //   return (
  //     <div>
  //       <span style={{ fontSize: 30 }} className='badge badge-primary m-2'>
  //         {this.formatCount()}
  //       </span>
  //       <button className='btn btn-secondary btn-sm'>Increment</button>
  //     </div>
  //   );
  // }

  render() {
    return (
      <div>
        <span className='badge badge-primary m-2'>{this.formatCount()}</span>
        <button className='btn btn-secondary btn-sm'>Increment</button>
      </div>
    );
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? 'Zero' : count;
  }
}

export default Counter;
