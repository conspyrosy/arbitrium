const WebSocket = require('ws');

const ws = new WebSocket('wss://api.0x.org/sra/v3', {
    perMessageDeflate: false
});

ws.on('open', function open() {
    ws.send(JSON.stringify({"type":"subscribe","channel":"orders","requestId":"1611258188049"}));
});

ws.on('message', function incoming(data) {
    console.log(data);
});