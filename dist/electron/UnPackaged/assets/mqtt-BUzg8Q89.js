import { b as boot } from "./index-B8gzy2O7.js";
import { t as ti } from "./vue-paho-mqtt-CUGGazPb.js";
const mqtt = boot(({ app }) => {
  app.use(
    ti({
      PluginOptions: {
        autoConnect: true,
        showNotifications: true
      },
      MqttOptions: {
        host: "192.168.6.61",
        port: 1884,
        clientId: `MyID-${Math.random() * 9999}`,
        mainTopic: "MAIN",
        username: "zigbee",
        password: "zigbeemqtt"
      }
    })
  );
});
export {
  mqtt as default
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXF0dC1CVXpnOFE4OS5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2Jvb3QvbXF0dC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBib290IH0gZnJvbSAncXVhc2FyL3dyYXBwZXJzJztcclxuaW1wb3J0IHsgY3JlYXRlUGFob01xdHRQbHVnaW4gfSBmcm9tICd2dWUtcGFoby1tcXR0JztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGJvb3QoKHsgYXBwIH0pID0+IHtcclxuICBhcHAudXNlKFxyXG4gICAgY3JlYXRlUGFob01xdHRQbHVnaW4oe1xyXG4gICAgICBQbHVnaW5PcHRpb25zOiB7XHJcbiAgICAgICAgYXV0b0Nvbm5lY3Q6IHRydWUsXHJcbiAgICAgICAgc2hvd05vdGlmaWNhdGlvbnM6IHRydWUsXHJcbiAgICAgIH0sXHJcblxyXG4gICAgICBNcXR0T3B0aW9uczoge1xyXG4gICAgICAgIGhvc3Q6ICcxOTIuMTY4LjYuNjEnLFxyXG4gICAgICAgIHBvcnQ6IDE4ODQsXHJcbiAgICAgICAgY2xpZW50SWQ6IGBNeUlELSR7TWF0aC5yYW5kb20oKSAqIDk5OTl9YCxcclxuICAgICAgICBtYWluVG9waWM6ICdNQUlOJyxcclxuICAgICAgICB1c2VybmFtZTogJ3ppZ2JlZScsXHJcbiAgICAgICAgcGFzc3dvcmQ6ICd6aWdiZWVtcXR0JyxcclxuICAgICAgfSxcclxuICAgIH0pLFxyXG4gICk7XHJcbn0pO1xyXG4iXSwibmFtZXMiOlsiY3JlYXRlUGFob01xdHRQbHVnaW4iXSwibWFwcGluZ3MiOiI7O0FBR0EsTUFBQSxPQUFlLEtBQUssQ0FBQyxFQUFFLFVBQVU7QUFDM0IsTUFBQTtBQUFBLElBQ0ZBLEdBQXFCO0FBQUEsTUFDbkIsZUFBZTtBQUFBLFFBQ2IsYUFBYTtBQUFBLFFBQ2IsbUJBQW1CO0FBQUEsTUFDckI7QUFBQSxNQUVBLGFBQWE7QUFBQSxRQUNYLE1BQU07QUFBQSxRQUNOLE1BQU07QUFBQSxRQUNOLFVBQVUsUUFBUSxLQUFLLFdBQVcsSUFBSTtBQUFBLFFBQ3RDLFdBQVc7QUFBQSxRQUNYLFVBQVU7QUFBQSxRQUNWLFVBQVU7QUFBQSxNQUNaO0FBQUEsSUFBQSxDQUNEO0FBQUEsRUFBQTtBQUVMLENBQUM7In0=
