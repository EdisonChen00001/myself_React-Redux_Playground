import React from 'react';
export function BoilingVerdict(props) {
    if (props.celsius >= 100) {
      return <p>water is Boiling</p>;
    }
    return <p>Water is not Boiling</p>;
  }
