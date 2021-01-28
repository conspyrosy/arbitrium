const WebSocket = require('ws');

const ws = new WebSocket('wss://www.deribit.com/ws/api/v2/', {
    perMessageDeflate: false
});

ws.on('open', function open() {
    ws.send(JSON.stringify({
        "jsonrpc": "2.0",
        "id": 1,
        "method": "public/subscribe",
        "params": {
            "channels": ["ticker.BTC-26MAR21.100ms"]
        }
    }));
});

ws.on('message', function incoming(data) {
    console.log(data);
});