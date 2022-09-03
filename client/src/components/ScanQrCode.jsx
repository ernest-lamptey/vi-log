import React, { Component } from "react";
import QrReader from "react-qr-scanner";
import "../styles/ScanQrCode.scss";

export class ScanQrCode extends Component {
  constructor(props) {
    super(props);
    this.state = {
      delay: 100,
      result: "No result",
    };

    this.handleScan = this.handleScan.bind(this);
  }
  handleScan(data) {
    this.setState({
      result: data,
    });
  }
  handleError(err) {
    console.error(err);
  }
  render() {
    const previewStyle = {
      height: '480px',
      width: '480px',
    };

    const container = {
      // background: 'white',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '92vh',
    }

    return (
      <div style={container}>
        <QrReader
          delay={this.state.delay}
          style={previewStyle}
          onError={this.handleError}
          onScan={this.handleScan}
        />
        {/* <p>{this.state.result}</p> */}
      </div>
    );
  }
}
