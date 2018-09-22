import websocket
import random
import threading
import time
import json


def sync_main():
    while 1:
        time.sleep(1)
        # TODO: read from device
        reading = random.random()
        ws.send(json.dumps({'r': reading}))

def on_message(ws, message):
    print('got ws message', message)
    data = json.loads(message)
    if 's' in data:
        print('set the state to', data['s'])
        # TODO: connect to device

def on_error(ws, error):
    print('got ws error', error)

def on_close(ws):
    print('ws closed oh no')

def on_open(ws):
    print('got ws open')
    ws.send(json.dumps({'identify': True}))
    device_thread = threading.Thread(target=sync_main)
    device_thread.start()

ws = websocket.WebSocketApp(
        'wss://server-qyyduobfmx.now.sh/',
        on_message=on_message,
        on_error=on_error,
        on_close=on_close)
ws.on_open = on_open
ws.run_forever()
