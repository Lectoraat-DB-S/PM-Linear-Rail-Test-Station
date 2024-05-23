using System;
using System.Threading;
using System.Threading.Tasks;
using MQTTnet;
using MQTTnet.Client;

namespace WinFormsHalcon
{
    internal class MQTT
    {
        private readonly IMqttClient mqttClient;
        private readonly MqttClientOptions mqttClientOptions;

        private static readonly string WSuri = "ws://192.168.6.61:1884/ws";
        private static readonly string host = "10.38.4.165";
        private static readonly int port = 1883;
        private static readonly string clientId = Guid.NewGuid().ToString();
        private static readonly string username = "zigbee";
        private static readonly string password = "zigbeemqtt";

        public MQTT()
        {
            var mqttFactory = new MqttFactory();
            mqttClient = mqttFactory.CreateMqttClient();

            mqttClientOptions = new MqttClientOptionsBuilder()
                .WithWebSocketServer(o => o.WithUri(WSuri))
                // .WithTcpServer(host, port)
                .WithCredentials(username, password)
                .WithClientId(clientId)
                .Build();

            mqttClient.ApplicationMessageReceivedAsync += async e =>
            {
                Console.WriteLine($"Received message on topic {e.ApplicationMessage.Topic}: {e.ApplicationMessage.ConvertPayloadToString()}");

                if (e.ApplicationMessage.Topic == "RTS/vision/picture")
                {
                    await Program.GrabAndProcessImage(Program.MainWindow, Program.ModelID, Program.AcqHandle);
                }
            };

            // Run the connection and subscription in a separate task to avoid blocking the main thread
            Task.Run(async () =>
            {
                await ConnectAndSubscribe();
            });
        }

        private async Task ConnectAndSubscribe()
        {
            try
            {
                await mqttClient.ConnectAsync(mqttClientOptions, CancellationToken.None);
                Console.WriteLine("MQTT client connected.");

                // Subscribe to the topic once connected
                await SubscribeAsync("RTS/vision/picture");

                // Notify others that this client is now subscribed
                await PublishAsync("RTS/vision/debug", "Vision is online and waiting...");
            }
            catch (Exception ex)
            {
                Console.WriteLine($"MQTT connection error: {ex.Message}");
            }
        }

        public async Task PublishAsync(string topic, string payload)
        {
            var applicationMessage = new MqttApplicationMessageBuilder()
                .WithTopic(topic)
                .WithPayload(payload)
                .Build();

            await mqttClient.PublishAsync(applicationMessage, CancellationToken.None);
            Console.WriteLine("MQTT application message is published.");
        }
        
        public async Task PublishImageAsync(string topic, byte[] payload)
        {
            var applicationMessage = new MqttApplicationMessageBuilder()
                .WithTopic(topic)
                .WithPayload(payload)
                .Build();

            await mqttClient.PublishAsync(applicationMessage, CancellationToken.None);
            Console.WriteLine("MQTT application message is published.");
        }

        private async Task SubscribeAsync(string topic)
        {
            var mqttFactory = new MqttFactory();

            var mqttSubscribeOptions = mqttFactory.CreateSubscribeOptionsBuilder()
                .WithTopicFilter(f => f.WithTopic(topic))
                .Build();

            await mqttClient.SubscribeAsync(mqttSubscribeOptions, CancellationToken.None);
            Console.WriteLine($"Subscribed to topic: {topic}");
        }
    }
}
