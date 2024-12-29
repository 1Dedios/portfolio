import { useEffect } from 'react';

export default function BuyCoffee() {
  useEffect(() => {
    const script = document.createElement('script');
    script.setAttribute('data-name', 'BMC-Widget');
    script.src = 'https://cdnjs.buymeacoffee.com/1.0.0/widget.prod.min.js';
    script.setAttribute('data-id', 'eddiep');
    script.setAttribute('data-description', 'Support me on Buy me a Coffee!');
    script.setAttribute(
      'data-message',
      'Support projects geared to solving real human problems! ✨😎'
    );
    script.setAttribute('data-color', '#5F7FFF');
    script.setAttribute('data-position', 'Right');
    script.setAttribute('data-x_margin', '18');
    script.setAttribute('data-y_margin', '18');
    script.async = true;
    document.head.appendChild(script);
    script.onload = function () {
      var evt = document.createEvent('Event');
      evt.initEvent('DOMContentLoaded', false, false);
      window.dispatchEvent(evt);
    };

    document.head.appendChild(script);
  }, []);

  return <div id="supportByBMC"></div>;
}
