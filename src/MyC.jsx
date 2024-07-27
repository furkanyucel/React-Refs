import React, { Component } from 'react';

class MyC extends Component {
  constructor(props) {
    super(props);
    // Ref'i oluşturuyoruz
    this.myInputRef = React.createRef();
  }

  componentDidMount() {
    // Ref kullanarak inputa odaklanıyoruz
    this.myInputRef.current.focus();
  }

  handleClick = () => {
    // Ref kullanarak input değerine erişiyoruz
    alert(this.myInputRef.current.value);
  }

  render() {
    return (
      <div>
        <input type="text" ref={this.myInputRef} />
        <button onClick={this.handleClick}>Show Input Value</button>
      </div>
    );
  }
}

export default MyC;