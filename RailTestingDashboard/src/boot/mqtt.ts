import { boot } from 'quasar/wrappers';
import { createPahoMqttPlugin } from 'vue-paho-mqtt';

export default boot(({ app }) => {
  app.use(
    createPahoMqttPlugin({
      PluginOptions: {
        autoConnect: true,
        showNotifications: true,
      },

      MqttOptions: {
        host: '10.38.4.165',
        port: 1884,
        clientId: `MyID-${Math.random() * 9999}`,
        mainTopic: 'RTS',
        username: 'zigbee',
        password: 'zigbeemqtt',
      },

      // MqttOptions: {
      //   host: '192.168.6.61',
      //   port: 1884,
      //   clientId: `MyID-${Math.random() * 9999}`,
      //   mainTopic: 'RTS',
      //   username: 'zigbee',
      //   password: 'zigbeemqtt',
      // },
    }),
  );
});
