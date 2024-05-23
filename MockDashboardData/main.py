import paho.mqtt.client as mqtt
import signal
import sys
import json
import time
import random
from jsonschema import validate


# The callback for when the client receives a CONNACK response from the server.
def on_connect(client, userdata, flags, reason_code, properties):
    print(f"Connected with result code {reason_code}")
    # Subscribing in on_connect() means that if we lose the connection and
    # reconnect then subscriptions will be renewed.
    client.subscribe("MAIN/#")


# The callback for when a PUBLISH message is received from the server.
def on_message(client, userdata, msg):
    print(msg.topic + " " + str(msg.payload))


def handle_exit(sig, frame):
    print("Exiting...")
    mqttClient.disconnect()
    sys.exit(0)


def mqtt_init():
    username = "zigbee"
    password = "zigbeemqtt"

    mqttc = mqtt.Client(mqtt.CallbackAPIVersion.VERSION2, clean_session=True, userdata=None,
                        protocol=mqtt.MQTTv311, transport="websockets")

    # Set username and password
    mqttc.username_pw_set(username, password)

    mqttc.on_connect = on_connect
    mqttc.on_message = on_message

    # Register signal handler for SIGINT (Ctrl+C)
    signal.signal(signal.SIGINT, handle_exit)

    mqttc.connect("192.168.6.61", 1884, 60)
    # mqttc.connect("10.38.4.165", 1884, 60)

    return mqttc


def generate_json(distance_from_start_to_holes, distance_between_holes, distance_from_first_to_last_hole, length):
    # Randomize decimal data
    distance_from_start_to_holes = [int(value) + round(random.uniform(0, 1), 2) for value in
                                    distance_from_start_to_holes]
    distance_between_holes = [int(value) + round(random.uniform(0, 1), 2) for value in distance_between_holes]
    distance_from_first_to_last_hole = int(distance_from_first_to_last_hole) + round(random.uniform(0, 1), 2)
    length = int(length) + round(random.uniform(0, 1), 2)

    data = {
        "distance_from_start_to_holes": distance_from_start_to_holes,
        "distance_between_holes": distance_between_holes,
        "distance_from_first_to_last_hole": distance_from_first_to_last_hole,
        "length": length
    }

    # Define the schema
    schema = {
        "type": "object",
        "properties": {
            "distance_from_start_to_holes": {"type": "array", "items": {"type": "number"}},
            "distance_between_holes": {"type": "array", "items": {"type": "number"}},
            "distance_from_first_to_last_hole": {"type": "number"},
            "length": {"type": "number"}
        },
        "required": ["distance_from_start_to_holes", "distance_between_holes", "distance_from_first_to_last_hole", "length"]
    }

    # Validate the generated JSON data against the schema
    validate(instance=data, schema=schema)

    return json.dumps(data)


if __name__ == '__main__':
    mqttClient = mqtt_init()

    while True:
        # Example values
        distance_from_start_to_holes = [12, 37, 62, 87, 112, 137, 162, 187, 212, 237, 262.529, 287.499]
        distance_between_holes = [25, 24, 25, 25, 25, 24, 25, 24, 25, 25, 24]
        distance_from_first_to_last_hole = 275
        length = 299

        # Generate JSON object
        json_data = generate_json(distance_from_start_to_holes, distance_between_holes,
                                  distance_from_first_to_last_hole,
                                  length)

        print(json_data)

        mqttClient.publish("MAIN/linearRailControl/measurements", json_data)

        # Wait for 20 seconds
        time.sleep(10)
