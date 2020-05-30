import React, { Component } from 'react';

class Counter extends Component {
  state = {
    count: 0,
  };

  // constructor() {
  //   super();
  //   // console.log('Constructor', this);
  //   // Bindind
  //   this.handleIncrement = this.handleIncrement.bind(this);
  // }

  handleIncrement = () => {
    // console.log('Increment Clicked', this);
    this.setState({ count: this.state.count + 1 });
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
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={this.handleIncrement}
          className='btn btn-secondary btn-sm'
        >
          Increment
        </button>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = 'badge m-2 badge-';
    classes += this.state.count === 0 ? 'warning' : 'primary';
    return classes;
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? 'Zero' : count;
  }
}

export default Counter;
