// import React, { Component } from "react";
// // import QrReader from "react-qr-scanner";
import adapter from 'webrtc-adapter';
import "../styles/ScanQrCode.scss";
import React, { useState } from 'react';
import { QrReader } from 'react-qr-reader';
import { useHistory } from 'react-router-dom';

const ScanQrCode = (props) => {

  const [data, setData] = useState('No result');

  const history = useHistory()

  return (
    <div>
      <QrReader className="qrmodule"
        onResult={(result, error) => {
          if (!!result) {        
            setData(result?.text);
            history.push('/visitors', result?.text)
          }

          if (!!error) {
            console.info(error);
          }
        }}
        // style={{ width: '100%' }}
      />

      <p className="qr_result">{data}</p>

    </div>


  );
};

export default ScanQrCode;
// export class ScanQrCode extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       delay: 100,
//       result: "No result",
//     };

//     this.handleScan = this.handleScan.bind(this);
//   }
//   handleScan(data) {
//     this.setState({
//       result: data,
//     });
//   }
//   handleError(err) {
//     console.error(err);
//   }
//   render() {
//     const previewStyle = {
//       height: '480px',
//       width: '480px',
//     };

//     const container = {
//       // background: 'white',
//       display: 'flex',
//       justifyContent: 'space-between',
//       alignItems: 'center',
//       height: '92vh',
//     }

//     return (
//       <div style={container}>
//         <QrReader
//           delay={this.state.delay}
//           style={previewStyle}
//           onError={this.handleError}
//           onScan={this.handleScan}
//         />
//         <p>{this.state.result}</p>
//       </div>
//     );
//   }
// }
