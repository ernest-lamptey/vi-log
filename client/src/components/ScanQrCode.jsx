// import React, { Component } from "react";
// // import QrReader from "react-qr-scanner";
import "../styles/ScanQrCode.scss";
import React, { useState } from 'react';
import { QrReader } from 'react-qr-reader';
import { useHistory } from 'react-router-dom';

const ScanQrCode = () => {

  const [data, setData] = useState('Scan your QR code');

  const history = useHistory()

  return (
    <div className="camera">
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
      />

      <p className="qr_result">{data}</p>
    </div>
  );
};

export default ScanQrCode;
