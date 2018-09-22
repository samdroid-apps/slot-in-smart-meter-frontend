const WebSocket = require('ws');

const wss = new WebSocket.Server({ port: 8080 });

function noop() {
  return;
}

function heartbeat() {
  this.isAlive = true;
}

wss.on('connection', function connection(ws) {
  ws.isAlive = true;
  ws.isConsumer = true;
  ws.on('pong', heartbeat);

  ws.on('message', function incoming(rawData) {
    let data;
    try {
      data = JSON.parse(rawData);
    } catch (e) {
      ws.send(JSON.stringify({
        error: 1,
        message: `Invalid message ${rawData}`,
        jsMessage: e.message,
      }));
      return;
    }
    if (data.identify === 'device') {
      ws.isConsumer = false;
    } else if (data.r !== undefined) {
      // Broadcast to all consumers
      wss.clients.forEach(function each(client) {
        if (client !== ws
            && client.readyState === WebSocket.OPEN
            && client.isConsumer) {
          client.send(JSON.stringify(data));
        }
      });
    } else if (data.s !== undefined) {
      // Broadcast to all devices
      wss.clients.forEach(function each(client) {
        if (client !== ws && client.readyState === WebSocket.OPEN) {
          client.send(JSON.stringify(data));
        }
      });
    }
  });
});

/*
const interval = setInterval(function ping() {
  wss.clients.forEach(function each(ws) {
    if (ws.isAlive === false) return ws.terminate();

    ws.isAlive = false;
    ws.ping(noop);
  });
}, 5);
*/
