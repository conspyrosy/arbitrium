const WebSocket = require('ws');
const pako = require('pako');

const ws = new WebSocket('wss://real.okex.com:8443/ws/v3', {
  perMessageDeflate: false,
});

ws.on('open', function open() {
  ws.send(
    JSON.stringify({ op: 'subscribe', args: ['option/summary:BTC-USD'] })
  );
});

ws.on('message', function incoming(data) {
  if (typeof message !== 'string') {
    try {
      const payload = pako.inflateRaw(data, { to: 'string' });
      if (!payload) {
        console.log('empty payload, skipping...');
      } else {
        console.log(payload);
      }
    } catch (err) {
      console.log(err);
    }
  } else {
    console.log(data);
  }
});
