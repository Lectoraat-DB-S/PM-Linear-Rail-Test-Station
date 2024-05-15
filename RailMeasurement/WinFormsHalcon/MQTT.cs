using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using MQTTnet;
using MQTTnet.Client;
using MQTTnet.Server;

namespace WinFormsHalcon
{
    internal class MQTT
    {
        private IMqttClient mqttClient;
        
        private static string WSuri = "ws://192.168.6.61:1884/ws";
        private static string host = "10.38.4.165";
        private static int port = 1883;
        private static string clientId = Guid.NewGuid().ToString();
        private static string username = "zigbee";
        private static string password = "zigbeemqtt";
        
        
        public async Task PublishAsync(string topic, string payload)
        {
            /*
             * This sample pushes a simple application message including a topic and a payload.
             *
             * Always use builders where they exist. Builders (in this project) are designed to be
             * backward compatible. Creating an _MqttApplicationMessage_ via its constructor is also
             * supported but the class might change often in future releases where the builder does not
             * or at least provides backward compatibility where possible.
             */

            var mqttFactory = new MqttFactory();

            using (var mqttClient = mqttFactory.CreateMqttClient())
            {
                var mqttClientOptions = new MqttClientOptionsBuilder()
                    //.WithWebSocketServer(o => o.WithUri(WSuri))
                    .WithTcpServer(host, port)
                    .WithCredentials(username, password)
                    .WithClientId(clientId)
                    .Build();

                await mqttClient.ConnectAsync(mqttClientOptions, CancellationToken.None);

                var applicationMessage = new MqttApplicationMessageBuilder()
                    .WithTopic(topic)
                    .WithPayload(payload)
                    .Build();

                await mqttClient.PublishAsync(applicationMessage, CancellationToken.None);

                await mqttClient.DisconnectAsync();
            
                Console.WriteLine("MQTT application message is published.");
            }
        }

        public async Task SubscribeAsync(string topic)
        {
            if (mqttClient.IsConnected)
            {
                await mqttClient.SubscribeAsync(new MqttTopicFilterBuilder().WithTopic(topic).Build());
                Console.WriteLine($"Subscribed to topic: {topic}");
            }
        }
    }
}
