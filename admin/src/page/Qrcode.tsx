import React from 'react'
import QRCode from 'react-qr-code'

export default function Qrcode() {
  return (
    <div>
        Qrcode
        <QRCode 
        size={200}
        value="http://192.168.68.105:3001/?orderno=1&token=1234"
        />
        </div>
  )
}
