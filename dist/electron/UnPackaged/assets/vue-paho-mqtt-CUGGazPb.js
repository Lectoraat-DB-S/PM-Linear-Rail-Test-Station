import { B as reactive, r as ref } from "./index-B8gzy2O7.js";
const Vt = {
  B: {
    qos: 0,
    ret: false
  },
  Br: {
    qos: 0,
    ret: true
  },
  Q: {
    qos: 1,
    ret: false
  },
  Qr: {
    qos: 1,
    ret: true
  },
  F: {
    qos: 2,
    ret: true
  },
  Fnr: {
    qos: 2,
    ret: false
  }
}, Ps = {
  showNotifications: true,
  autoConnect: true
}, Ms = {
  host: "localhost",
  port: 9001,
  username: "",
  password: "",
  useSSL: false,
  clientId: `ClientId-${Math.random() * 9999}`,
  mainTopic: "vue-paho-mqtt-test",
  enableMainTopic: true,
  watchdogTimeout: 2e3,
  reconnectTimeout: 5e3
};
let Re = Ps;
const Bs = (p) => (Re = { ...Re, ...p }, Re), Ls = () => Re;
let Ue = reactive(Ms);
const Ns = (p) => (Ue = reactive({ ...Ue, ...p }), Ue), $ = () => Ue;
var X = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, De = {}, Os = {
  get exports() {
    return De;
  },
  set exports(p) {
    De = p;
  }
};
(function(p, C) {
  (function(k, T) {
    p.exports = T();
  })(X, function() {
    var k = function(T) {
      var r = "@VERSION@-@BUILDLEVEL@", q = T.localStorage || /* @__PURE__ */ function() {
        var i = {};
        return {
          setItem: function(s, l) {
            i[s] = l;
          },
          getItem: function(s) {
            return i[s];
          },
          removeItem: function(s) {
            delete i[s];
          }
        };
      }(), E = {
        CONNECT: 1,
        CONNACK: 2,
        PUBLISH: 3,
        PUBACK: 4,
        PUBREC: 5,
        PUBREL: 6,
        PUBCOMP: 7,
        SUBSCRIBE: 8,
        SUBACK: 9,
        UNSUBSCRIBE: 10,
        UNSUBACK: 11,
        PINGREQ: 12,
        PINGRESP: 13,
        DISCONNECT: 14
      }, ee = function(i, s) {
        for (var l in i)
          if (i.hasOwnProperty(l))
            if (s.hasOwnProperty(l)) {
              if (typeof i[l] !== s[l])
                throw new Error(w(f.INVALID_TYPE, [typeof i[l], l]));
            } else {
              var u = "Unknown property, " + l + ". Valid properties are:";
              for (var h in s)
                s.hasOwnProperty(h) && (u = u + " " + h);
              throw new Error(u);
            }
      }, se = function(i, s) {
        return function() {
          return i.apply(s, arguments);
        };
      }, f = {
        OK: { code: 0, text: "AMQJSC0000I OK." },
        CONNECT_TIMEOUT: { code: 1, text: "AMQJSC0001E Connect timed out." },
        SUBSCRIBE_TIMEOUT: { code: 2, text: "AMQJS0002E Subscribe timed out." },
        UNSUBSCRIBE_TIMEOUT: { code: 3, text: "AMQJS0003E Unsubscribe timed out." },
        PING_TIMEOUT: { code: 4, text: "AMQJS0004E Ping timed out." },
        INTERNAL_ERROR: { code: 5, text: "AMQJS0005E Internal error. Error Message: {0}, Stack trace: {1}" },
        CONNACK_RETURNCODE: { code: 6, text: "AMQJS0006E Bad Connack return code:{0} {1}." },
        SOCKET_ERROR: { code: 7, text: "AMQJS0007E Socket error:{0}." },
        SOCKET_CLOSE: { code: 8, text: "AMQJS0008I Socket closed." },
        MALFORMED_UTF: { code: 9, text: "AMQJS0009E Malformed UTF data:{0} {1} {2}." },
        UNSUPPORTED: { code: 10, text: "AMQJS0010E {0} is not supported by this browser." },
        INVALID_STATE: { code: 11, text: "AMQJS0011E Invalid state {0}." },
        INVALID_TYPE: { code: 12, text: "AMQJS0012E Invalid type {0} for {1}." },
        INVALID_ARGUMENT: { code: 13, text: "AMQJS0013E Invalid argument {0} for {1}." },
        UNSUPPORTED_OPERATION: { code: 14, text: "AMQJS0014E Unsupported operation." },
        INVALID_STORED_DATA: { code: 15, text: "AMQJS0015E Invalid data in local storage key={0} value={1}." },
        INVALID_MQTT_MESSAGE_TYPE: { code: 16, text: "AMQJS0016E Invalid MQTT message type {0}." },
        MALFORMED_UNICODE: { code: 17, text: "AMQJS0017E Malformed Unicode string:{0} {1}." },
        BUFFER_FULL: { code: 18, text: "AMQJS0018E Message buffer is full, maximum buffer size: {0}." }
      }, ie = {
        0: "Connection Accepted",
        1: "Connection Refused: unacceptable protocol version",
        2: "Connection Refused: identifier rejected",
        3: "Connection Refused: server unavailable",
        4: "Connection Refused: bad user name or password",
        5: "Connection Refused: not authorized"
      }, w = function(i, s) {
        var l = i.text;
        if (s) {
          for (var u, h, d = 0; d < s.length; d++)
            if (u = "{" + d + "}", h = l.indexOf(u), h > 0) {
              var m = l.substring(0, h), S = l.substring(h + u.length);
              l = m + s[d] + S;
            }
        }
        return l;
      }, Ce = [0, 6, 77, 81, 73, 115, 100, 112, 3], xe = [0, 4, 77, 81, 84, 84, 4], U = function(i, s) {
        this.type = i;
        for (var l in s)
          s.hasOwnProperty(l) && (this[l] = s[l]);
      };
      U.prototype.encode = function() {
        var i = (this.type & 15) << 4, s = 0, l = [], u = 0, h;
        switch (this.messageIdentifier !== void 0 && (s += 2), this.type) {
          case E.CONNECT:
            switch (this.mqttVersion) {
              case 3:
                s += Ce.length + 3;
                break;
              case 4:
                s += xe.length + 3;
                break;
            }
            s += N(this.clientId) + 2, this.willMessage !== void 0 && (s += N(this.willMessage.destinationName) + 2, h = this.willMessage.payloadBytes, h instanceof Uint8Array || (h = new Uint8Array(m)), s += h.byteLength + 2), this.userName !== void 0 && (s += N(this.userName) + 2), this.password !== void 0 && (s += N(this.password) + 2);
            break;
          case E.SUBSCRIBE:
            i |= 2;
            for (var d = 0; d < this.topics.length; d++)
              l[d] = N(this.topics[d]), s += l[d] + 2;
            s += this.requestedQos.length;
            break;
          case E.UNSUBSCRIBE:
            i |= 2;
            for (var d = 0; d < this.topics.length; d++)
              l[d] = N(this.topics[d]), s += l[d] + 2;
            break;
          case E.PUBREL:
            i |= 2;
            break;
          case E.PUBLISH:
            this.payloadMessage.duplicate && (i |= 8), i = i |= this.payloadMessage.qos << 1, this.payloadMessage.retained && (i |= 1), u = N(this.payloadMessage.destinationName), s += u + 2;
            var m = this.payloadMessage.payloadBytes;
            s += m.byteLength, m instanceof ArrayBuffer ? m = new Uint8Array(m) : m instanceof Uint8Array || (m = new Uint8Array(m.buffer));
            break;
        }
        var S = de(s), y = S.length + 1, L = new ArrayBuffer(s + y), v = new Uint8Array(L);
        if (v[0] = i, v.set(S, 1), this.type == E.PUBLISH)
          y = Z(this.payloadMessage.destinationName, u, v, y);
        else if (this.type == E.CONNECT) {
          switch (this.mqttVersion) {
            case 3:
              v.set(Ce, y), y += Ce.length;
              break;
            case 4:
              v.set(xe, y), y += xe.length;
              break;
          }
          var a = 0;
          this.cleanSession && (a = 2), this.willMessage !== void 0 && (a |= 4, a |= this.willMessage.qos << 3, this.willMessage.retained && (a |= 32)), this.userName !== void 0 && (a |= 128), this.password !== void 0 && (a |= 64), v[y++] = a, y = te(this.keepAliveInterval, v, y);
        }
        switch (this.messageIdentifier !== void 0 && (y = te(this.messageIdentifier, v, y)), this.type) {
          case E.CONNECT:
            y = Z(this.clientId, N(this.clientId), v, y), this.willMessage !== void 0 && (y = Z(this.willMessage.destinationName, N(this.willMessage.destinationName), v, y), y = te(h.byteLength, v, y), v.set(h, y), y += h.byteLength), this.userName !== void 0 && (y = Z(this.userName, N(this.userName), v, y)), this.password !== void 0 && (y = Z(this.password, N(this.password), v, y));
            break;
          case E.PUBLISH:
            v.set(m, y);
            break;
          case E.SUBSCRIBE:
            for (var d = 0; d < this.topics.length; d++)
              y = Z(this.topics[d], l[d], v, y), v[y++] = this.requestedQos[d];
            break;
          case E.UNSUBSCRIBE:
            for (var d = 0; d < this.topics.length; d++)
              y = Z(this.topics[d], l[d], v, y);
            break;
        }
        return L;
      };
      function Ae(i, s) {
        var l = s, u = i[s], h = u >> 4, d = u &= 15;
        s += 1;
        var m, S = 0, y = 1;
        do {
          if (s == i.length)
            return [null, l];
          m = i[s++], S += (m & 127) * y, y *= 128;
        } while (m & 128);
        var L = s + S;
        if (L > i.length)
          return [null, l];
        var v = new U(h);
        switch (h) {
          case E.CONNACK:
            var a = i[s++];
            a & 1 && (v.sessionPresent = true), v.returnCode = i[s++];
            break;
          case E.PUBLISH:
            var I = d >> 1 & 3, x = R(i, s);
            s += 2;
            var K = ce(i, s, x);
            s += x, I > 0 && (v.messageIdentifier = R(i, s), s += 2);
            var P = new G(i.subarray(s, L));
            (d & 1) == 1 && (P.retained = true), (d & 8) == 8 && (P.duplicate = true), P.qos = I, P.destinationName = K, v.payloadMessage = P;
            break;
          case E.PUBACK:
          case E.PUBREC:
          case E.PUBREL:
          case E.PUBCOMP:
          case E.UNSUBACK:
            v.messageIdentifier = R(i, s);
            break;
          case E.SUBACK:
            v.messageIdentifier = R(i, s), s += 2, v.returnCode = i.subarray(s, L);
            break;
        }
        return [v, L];
      }
      function te(i, s, l) {
        return s[l++] = i >> 8, s[l++] = i % 256, l;
      }
      function Z(i, s, l, u) {
        return u = te(s, l, u), B(i, l, u), u + s;
      }
      function R(i, s) {
        return 256 * i[s] + i[s + 1];
      }
      function de(i) {
        var s = new Array(1), l = 0;
        do {
          var u = i % 128;
          i = i >> 7, i > 0 && (u |= 128), s[l++] = u;
        } while (i > 0 && l < 4);
        return s;
      }
      function N(i) {
        for (var s = 0, l = 0; l < i.length; l++) {
          var u = i.charCodeAt(l);
          u > 2047 ? (55296 <= u && u <= 56319 && (l++, s++), s += 3) : u > 127 ? s += 2 : s++;
        }
        return s;
      }
      function B(i, s, l) {
        for (var u = l, h = 0; h < i.length; h++) {
          var d = i.charCodeAt(h);
          if (55296 <= d && d <= 56319) {
            var m = i.charCodeAt(++h);
            if (isNaN(m))
              throw new Error(w(f.MALFORMED_UNICODE, [d, m]));
            d = (d - 55296 << 10) + (m - 56320) + 65536;
          }
          d <= 127 ? s[u++] = d : d <= 2047 ? (s[u++] = d >> 6 & 31 | 192, s[u++] = d & 63 | 128) : d <= 65535 ? (s[u++] = d >> 12 & 15 | 224, s[u++] = d >> 6 & 63 | 128, s[u++] = d & 63 | 128) : (s[u++] = d >> 18 & 7 | 240, s[u++] = d >> 12 & 63 | 128, s[u++] = d >> 6 & 63 | 128, s[u++] = d & 63 | 128);
        }
        return s;
      }
      function ce(i, s, l) {
        for (var u = "", h, d = s; d < s + l; ) {
          var m = i[d++];
          if (m < 128)
            h = m;
          else {
            var S = i[d++] - 128;
            if (S < 0)
              throw new Error(w(f.MALFORMED_UTF, [m.toString(16), S.toString(16), ""]));
            if (m < 224)
              h = 64 * (m - 192) + S;
            else {
              var y = i[d++] - 128;
              if (y < 0)
                throw new Error(w(f.MALFORMED_UTF, [m.toString(16), S.toString(16), y.toString(16)]));
              if (m < 240)
                h = 4096 * (m - 224) + 64 * S + y;
              else {
                var L = i[d++] - 128;
                if (L < 0)
                  throw new Error(w(f.MALFORMED_UTF, [m.toString(16), S.toString(16), y.toString(16), L.toString(16)]));
                if (m < 248)
                  h = 262144 * (m - 240) + 4096 * S + 64 * y + L;
                else
                  throw new Error(w(f.MALFORMED_UTF, [m.toString(16), S.toString(16), y.toString(16), L.toString(16)]));
              }
            }
          }
          h > 65535 && (h -= 65536, u += String.fromCharCode(55296 + (h >> 10)), h = 56320 + (h & 1023)), u += String.fromCharCode(h);
        }
        return u;
      }
      var Pe = function(i, s) {
        this._client = i, this._keepAliveInterval = s * 1e3, this.isReset = false;
        var l = new U(E.PINGREQ).encode(), u = function(d) {
          return function() {
            return h.apply(d);
          };
        }, h = function() {
          this.isReset ? (this.isReset = false, this._client._trace("Pinger.doPing", "send PINGREQ"), this._client.socket.send(l), this.timeout = setTimeout(u(this), this._keepAliveInterval)) : (this._client._trace("Pinger.doPing", "Timed out"), this._client._disconnected(f.PING_TIMEOUT.code, w(f.PING_TIMEOUT)));
        };
        this.reset = function() {
          this.isReset = true, clearTimeout(this.timeout), this._keepAliveInterval > 0 && (this.timeout = setTimeout(u(this), this._keepAliveInterval));
        }, this.cancel = function() {
          clearTimeout(this.timeout);
        };
      }, fe = function(i, s, l, u) {
        s || (s = 30);
        var h = function(d, m, S) {
          return function() {
            return d.apply(m, S);
          };
        };
        this.timeout = setTimeout(h(l, i, u), s * 1e3), this.cancel = function() {
          clearTimeout(this.timeout);
        };
      }, b = function(i, s, l, u, h) {
        if (!("WebSocket" in T && T.WebSocket !== null))
          throw new Error(w(f.UNSUPPORTED, ["WebSocket"]));
        if (!("ArrayBuffer" in T && T.ArrayBuffer !== null))
          throw new Error(w(f.UNSUPPORTED, ["ArrayBuffer"]));
        this._trace("Paho.Client", i, s, l, u, h), this.host = s, this.port = l, this.path = u, this.uri = i, this.clientId = h, this._wsuri = null, this._localKey = s + ":" + l + (u != "/mqtt" ? ":" + u : "") + ":" + h + ":", this._msg_queue = [], this._buffered_msg_queue = [], this._sentMessages = {}, this._receivedMessages = {}, this._notify_msg_sent = {}, this._message_identifier = 1, this._sequence = 0;
        for (var d in q)
          (d.indexOf("Sent:" + this._localKey) === 0 || d.indexOf("Received:" + this._localKey) === 0) && this.restore(d);
      };
      b.prototype.host = null, b.prototype.port = null, b.prototype.path = null, b.prototype.uri = null, b.prototype.clientId = null, b.prototype.socket = null, b.prototype.connected = false, b.prototype.maxMessageIdentifier = 65536, b.prototype.connectOptions = null, b.prototype.hostIndex = null, b.prototype.onConnected = null, b.prototype.onConnectionLost = null, b.prototype.onMessageDelivered = null, b.prototype.onMessageArrived = null, b.prototype.traceFunction = null, b.prototype._msg_queue = null, b.prototype._buffered_msg_queue = null, b.prototype._connectTimeout = null, b.prototype.sendPinger = null, b.prototype.receivePinger = null, b.prototype._reconnectInterval = 1, b.prototype._reconnecting = false, b.prototype._reconnectTimeout = null, b.prototype.disconnectedPublishing = false, b.prototype.disconnectedBufferSize = 5e3, b.prototype.receiveBuffer = null, b.prototype._traceBuffer = null, b.prototype._MAX_TRACE_ENTRIES = 100, b.prototype.connect = function(i) {
        var s = this._traceMask(i, "password");
        if (this._trace("Client.connect", s, this.socket, this.connected), this.connected)
          throw new Error(w(f.INVALID_STATE, ["already connected"]));
        if (this.socket)
          throw new Error(w(f.INVALID_STATE, ["already connected"]));
        this._reconnecting && (this._reconnectTimeout.cancel(), this._reconnectTimeout = null, this._reconnecting = false), this.connectOptions = i, this._reconnectInterval = 1, this._reconnecting = false, i.uris ? (this.hostIndex = 0, this._doConnect(i.uris[0])) : this._doConnect(this.uri);
      }, b.prototype.subscribe = function(i, s) {
        if (this._trace("Client.subscribe", i, s), !this.connected)
          throw new Error(w(f.INVALID_STATE, ["not connected"]));
        var l = new U(E.SUBSCRIBE);
        l.topics = i.constructor === Array ? i : [i], s.qos === void 0 && (s.qos = 0), l.requestedQos = [];
        for (var u = 0; u < l.topics.length; u++)
          l.requestedQos[u] = s.qos;
        s.onSuccess && (l.onSuccess = function(h) {
          s.onSuccess({ invocationContext: s.invocationContext, grantedQos: h });
        }), s.onFailure && (l.onFailure = function(h) {
          s.onFailure({ invocationContext: s.invocationContext, errorCode: h, errorMessage: w(h) });
        }), s.timeout && (l.timeOut = new fe(
          this,
          s.timeout,
          s.onFailure,
          [{
            invocationContext: s.invocationContext,
            errorCode: f.SUBSCRIBE_TIMEOUT.code,
            errorMessage: w(f.SUBSCRIBE_TIMEOUT)
          }]
        )), this._requires_ack(l), this._schedule_message(l);
      }, b.prototype.unsubscribe = function(i, s) {
        if (this._trace("Client.unsubscribe", i, s), !this.connected)
          throw new Error(w(f.INVALID_STATE, ["not connected"]));
        var l = new U(E.UNSUBSCRIBE);
        l.topics = i.constructor === Array ? i : [i], s.onSuccess && (l.callback = function() {
          s.onSuccess({ invocationContext: s.invocationContext });
        }), s.timeout && (l.timeOut = new fe(
          this,
          s.timeout,
          s.onFailure,
          [{
            invocationContext: s.invocationContext,
            errorCode: f.UNSUBSCRIBE_TIMEOUT.code,
            errorMessage: w(f.UNSUBSCRIBE_TIMEOUT)
          }]
        )), this._requires_ack(l), this._schedule_message(l);
      }, b.prototype.send = function(i) {
        this._trace("Client.send", i);
        var s = new U(E.PUBLISH);
        if (s.payloadMessage = i, this.connected)
          i.qos > 0 ? this._requires_ack(s) : this.onMessageDelivered && (this._notify_msg_sent[s] = this.onMessageDelivered(s.payloadMessage)), this._schedule_message(s);
        else if (this._reconnecting && this.disconnectedPublishing) {
          var l = Object.keys(this._sentMessages).length + this._buffered_msg_queue.length;
          if (l > this.disconnectedBufferSize)
            throw new Error(w(f.BUFFER_FULL, [this.disconnectedBufferSize]));
          i.qos > 0 ? this._requires_ack(s) : (s.sequence = ++this._sequence, this._buffered_msg_queue.unshift(s));
        } else
          throw new Error(w(f.INVALID_STATE, ["not connected"]));
      }, b.prototype.disconnect = function() {
        if (this._trace("Client.disconnect"), this._reconnecting && (this._reconnectTimeout.cancel(), this._reconnectTimeout = null, this._reconnecting = false), !this.socket)
          throw new Error(w(f.INVALID_STATE, ["not connecting or connected"]));
        var i = new U(E.DISCONNECT);
        this._notify_msg_sent[i] = se(this._disconnected, this), this._schedule_message(i);
      }, b.prototype.getTraceLog = function() {
        if (this._traceBuffer !== null) {
          this._trace("Client.getTraceLog", /* @__PURE__ */ new Date()), this._trace("Client.getTraceLog in flight messages", this._sentMessages.length);
          for (var i in this._sentMessages)
            this._trace("_sentMessages ", i, this._sentMessages[i]);
          for (var i in this._receivedMessages)
            this._trace("_receivedMessages ", i, this._receivedMessages[i]);
          return this._traceBuffer;
        }
      }, b.prototype.startTrace = function() {
        this._traceBuffer === null && (this._traceBuffer = []), this._trace("Client.startTrace", /* @__PURE__ */ new Date(), r);
      }, b.prototype.stopTrace = function() {
        delete this._traceBuffer;
      }, b.prototype._doConnect = function(i) {
        if (this.connectOptions.useSSL) {
          var s = i.split(":");
          s[0] = "wss", i = s.join(":");
        }
        this._wsuri = i, this.connected = false, this.connectOptions.mqttVersion < 4 ? this.socket = new WebSocket(i, ["mqttv3.1"]) : this.socket = new WebSocket(i, ["mqtt"]), this.socket.binaryType = "arraybuffer", this.socket.onopen = se(this._on_socket_open, this), this.socket.onmessage = se(this._on_socket_message, this), this.socket.onerror = se(this._on_socket_error, this), this.socket.onclose = se(this._on_socket_close, this), this.sendPinger = new Pe(this, this.connectOptions.keepAliveInterval), this.receivePinger = new Pe(this, this.connectOptions.keepAliveInterval), this._connectTimeout && (this._connectTimeout.cancel(), this._connectTimeout = null), this._connectTimeout = new fe(this, this.connectOptions.timeout, this._disconnected, [f.CONNECT_TIMEOUT.code, w(f.CONNECT_TIMEOUT)]);
      }, b.prototype._schedule_message = function(i) {
        this._msg_queue.unshift(i), this.connected && this._process_queue();
      }, b.prototype.store = function(i, s) {
        var l = { type: s.type, messageIdentifier: s.messageIdentifier, version: 1 };
        switch (s.type) {
          case E.PUBLISH:
            s.pubRecReceived && (l.pubRecReceived = true), l.payloadMessage = {};
            for (var u = "", h = s.payloadMessage.payloadBytes, d = 0; d < h.length; d++)
              h[d] <= 15 ? u = u + "0" + h[d].toString(16) : u = u + h[d].toString(16);
            l.payloadMessage.payloadHex = u, l.payloadMessage.qos = s.payloadMessage.qos, l.payloadMessage.destinationName = s.payloadMessage.destinationName, s.payloadMessage.duplicate && (l.payloadMessage.duplicate = true), s.payloadMessage.retained && (l.payloadMessage.retained = true), i.indexOf("Sent:") === 0 && (s.sequence === void 0 && (s.sequence = ++this._sequence), l.sequence = s.sequence);
            break;
          default:
            throw Error(w(f.INVALID_STORED_DATA, [i + this._localKey + s.messageIdentifier, l]));
        }
        q.setItem(i + this._localKey + s.messageIdentifier, JSON.stringify(l));
      }, b.prototype.restore = function(i) {
        var s = q.getItem(i), l = JSON.parse(s), u = new U(l.type, l);
        switch (l.type) {
          case E.PUBLISH:
            for (var h = l.payloadMessage.payloadHex, d = new ArrayBuffer(h.length / 2), m = new Uint8Array(d), S = 0; h.length >= 2; ) {
              var y = parseInt(h.substring(0, 2), 16);
              h = h.substring(2, h.length), m[S++] = y;
            }
            var L = new G(m);
            L.qos = l.payloadMessage.qos, L.destinationName = l.payloadMessage.destinationName, l.payloadMessage.duplicate && (L.duplicate = true), l.payloadMessage.retained && (L.retained = true), u.payloadMessage = L;
            break;
          default:
            throw Error(w(f.INVALID_STORED_DATA, [i, s]));
        }
        i.indexOf("Sent:" + this._localKey) === 0 ? (u.payloadMessage.duplicate = true, this._sentMessages[u.messageIdentifier] = u) : i.indexOf("Received:" + this._localKey) === 0 && (this._receivedMessages[u.messageIdentifier] = u);
      }, b.prototype._process_queue = function() {
        for (var i = null; i = this._msg_queue.pop(); )
          this._socket_send(i), this._notify_msg_sent[i] && (this._notify_msg_sent[i](), delete this._notify_msg_sent[i]);
      }, b.prototype._requires_ack = function(i) {
        var s = Object.keys(this._sentMessages).length;
        if (s > this.maxMessageIdentifier)
          throw Error("Too many messages:" + s);
        for (; this._sentMessages[this._message_identifier] !== void 0; )
          this._message_identifier++;
        i.messageIdentifier = this._message_identifier, this._sentMessages[i.messageIdentifier] = i, i.type === E.PUBLISH && this.store("Sent:", i), this._message_identifier === this.maxMessageIdentifier && (this._message_identifier = 1);
      }, b.prototype._on_socket_open = function() {
        var i = new U(E.CONNECT, this.connectOptions);
        i.clientId = this.clientId, this._socket_send(i);
      }, b.prototype._on_socket_message = function(i) {
        this._trace("Client._on_socket_message", i.data);
        for (var s = this._deframeMessages(i.data), l = 0; l < s.length; l += 1)
          this._handleMessage(s[l]);
      }, b.prototype._deframeMessages = function(i) {
        var s = new Uint8Array(i), l = [];
        if (this.receiveBuffer) {
          var u = new Uint8Array(this.receiveBuffer.length + s.length);
          u.set(this.receiveBuffer), u.set(s, this.receiveBuffer.length), s = u, delete this.receiveBuffer;
        }
        try {
          for (var h = 0; h < s.length; ) {
            var d = Ae(s, h), m = d[0];
            if (h = d[1], m !== null)
              l.push(m);
            else
              break;
          }
          h < s.length && (this.receiveBuffer = s.subarray(h));
        } catch (y) {
          var S = y.hasOwnProperty("stack") == "undefined" ? y.stack.toString() : "No Error Stack Available";
          this._disconnected(f.INTERNAL_ERROR.code, w(f.INTERNAL_ERROR, [y.message, S]));
          return;
        }
        return l;
      }, b.prototype._handleMessage = function(i) {
        this._trace("Client._handleMessage", i);
        try {
          switch (i.type) {
            case E.CONNACK:
              if (this._connectTimeout.cancel(), this._reconnectTimeout && this._reconnectTimeout.cancel(), this.connectOptions.cleanSession) {
                for (var s in this._sentMessages) {
                  var a = this._sentMessages[s];
                  q.removeItem("Sent:" + this._localKey + a.messageIdentifier);
                }
                this._sentMessages = {};
                for (var s in this._receivedMessages) {
                  var L = this._receivedMessages[s];
                  q.removeItem("Received:" + this._localKey + L.messageIdentifier);
                }
                this._receivedMessages = {};
              }
              if (i.returnCode === 0)
                this.connected = true, this.connectOptions.uris && (this.hostIndex = this.connectOptions.uris.length);
              else {
                this._disconnected(f.CONNACK_RETURNCODE.code, w(f.CONNACK_RETURNCODE, [i.returnCode, ie[i.returnCode]]));
                break;
              }
              var h = [];
              for (var l in this._sentMessages)
                this._sentMessages.hasOwnProperty(l) && h.push(this._sentMessages[l]);
              if (this._buffered_msg_queue.length > 0)
                for (var u = null; u = this._buffered_msg_queue.pop(); )
                  h.push(u), this.onMessageDelivered && (this._notify_msg_sent[u] = this.onMessageDelivered(u.payloadMessage));
              for (var h = h.sort(function(x, K) {
                return x.sequence - K.sequence;
              }), d = 0, m = h.length; d < m; d++) {
                var a = h[d];
                if (a.type == E.PUBLISH && a.pubRecReceived) {
                  var S = new U(E.PUBREL, { messageIdentifier: a.messageIdentifier });
                  this._schedule_message(S);
                } else
                  this._schedule_message(a);
              }
              this.connectOptions.onSuccess && this.connectOptions.onSuccess({ invocationContext: this.connectOptions.invocationContext });
              var y = false;
              this._reconnecting && (y = true, this._reconnectInterval = 1, this._reconnecting = false), this._connected(y, this._wsuri), this._process_queue();
              break;
            case E.PUBLISH:
              this._receivePublish(i);
              break;
            case E.PUBACK:
              var a = this._sentMessages[i.messageIdentifier];
              a && (delete this._sentMessages[i.messageIdentifier], q.removeItem("Sent:" + this._localKey + i.messageIdentifier), this.onMessageDelivered && this.onMessageDelivered(a.payloadMessage));
              break;
            case E.PUBREC:
              var a = this._sentMessages[i.messageIdentifier];
              if (a) {
                a.pubRecReceived = true;
                var S = new U(E.PUBREL, { messageIdentifier: i.messageIdentifier });
                this.store("Sent:", a), this._schedule_message(S);
              }
              break;
            case E.PUBREL:
              var L = this._receivedMessages[i.messageIdentifier];
              q.removeItem("Received:" + this._localKey + i.messageIdentifier), L && (this._receiveMessage(L), delete this._receivedMessages[i.messageIdentifier]);
              var v = new U(E.PUBCOMP, { messageIdentifier: i.messageIdentifier });
              this._schedule_message(v);
              break;
            case E.PUBCOMP:
              var a = this._sentMessages[i.messageIdentifier];
              delete this._sentMessages[i.messageIdentifier], q.removeItem("Sent:" + this._localKey + i.messageIdentifier), this.onMessageDelivered && this.onMessageDelivered(a.payloadMessage);
              break;
            case E.SUBACK:
              var a = this._sentMessages[i.messageIdentifier];
              a && (a.timeOut && a.timeOut.cancel(), i.returnCode[0] === 128 ? a.onFailure && a.onFailure(i.returnCode) : a.onSuccess && a.onSuccess(i.returnCode), delete this._sentMessages[i.messageIdentifier]);
              break;
            case E.UNSUBACK:
              var a = this._sentMessages[i.messageIdentifier];
              a && (a.timeOut && a.timeOut.cancel(), a.callback && a.callback(), delete this._sentMessages[i.messageIdentifier]);
              break;
            case E.PINGRESP:
              this.sendPinger.reset();
              break;
            case E.DISCONNECT:
              this._disconnected(f.INVALID_MQTT_MESSAGE_TYPE.code, w(f.INVALID_MQTT_MESSAGE_TYPE, [i.type]));
              break;
            default:
              this._disconnected(f.INVALID_MQTT_MESSAGE_TYPE.code, w(f.INVALID_MQTT_MESSAGE_TYPE, [i.type]));
          }
        } catch (x) {
          var I = x.hasOwnProperty("stack") == "undefined" ? x.stack.toString() : "No Error Stack Available";
          this._disconnected(f.INTERNAL_ERROR.code, w(f.INTERNAL_ERROR, [x.message, I]));
          return;
        }
      }, b.prototype._on_socket_error = function(i) {
        this._reconnecting || this._disconnected(f.SOCKET_ERROR.code, w(f.SOCKET_ERROR, [i.data]));
      }, b.prototype._on_socket_close = function() {
        this._reconnecting || this._disconnected(f.SOCKET_CLOSE.code, w(f.SOCKET_CLOSE));
      }, b.prototype._socket_send = function(i) {
        if (i.type == 1) {
          var s = this._traceMask(i, "password");
          this._trace("Client._socket_send", s);
        } else
          this._trace("Client._socket_send", i);
        this.socket.send(i.encode()), this.sendPinger.reset();
      }, b.prototype._receivePublish = function(i) {
        switch (i.payloadMessage.qos) {
          case "undefined":
          case 0:
            this._receiveMessage(i);
            break;
          case 1:
            var s = new U(E.PUBACK, { messageIdentifier: i.messageIdentifier });
            this._schedule_message(s), this._receiveMessage(i);
            break;
          case 2:
            this._receivedMessages[i.messageIdentifier] = i, this.store("Received:", i);
            var l = new U(E.PUBREC, { messageIdentifier: i.messageIdentifier });
            this._schedule_message(l);
            break;
          default:
            throw Error("Invaild qos=" + i.payloadMessage.qos);
        }
      }, b.prototype._receiveMessage = function(i) {
        this.onMessageArrived && this.onMessageArrived(i.payloadMessage);
      }, b.prototype._connected = function(i, s) {
        this.onConnected && this.onConnected(i, s);
      }, b.prototype._reconnect = function() {
        this._trace("Client._reconnect"), this.connected || (this._reconnecting = true, this.sendPinger.cancel(), this.receivePinger.cancel(), this._reconnectInterval < 128 && (this._reconnectInterval = this._reconnectInterval * 2), this.connectOptions.uris ? (this.hostIndex = 0, this._doConnect(this.connectOptions.uris[0])) : this._doConnect(this.uri));
      }, b.prototype._disconnected = function(i, s) {
        if (this._trace("Client._disconnected", i, s), i !== void 0 && this._reconnecting) {
          this._reconnectTimeout = new fe(this, this._reconnectInterval, this._reconnect);
          return;
        }
        if (this.sendPinger.cancel(), this.receivePinger.cancel(), this._connectTimeout && (this._connectTimeout.cancel(), this._connectTimeout = null), this._msg_queue = [], this._buffered_msg_queue = [], this._notify_msg_sent = {}, this.socket && (this.socket.onopen = null, this.socket.onmessage = null, this.socket.onerror = null, this.socket.onclose = null, this.socket.readyState === 1 && this.socket.close(), delete this.socket), this.connectOptions.uris && this.hostIndex < this.connectOptions.uris.length - 1)
          this.hostIndex++, this._doConnect(this.connectOptions.uris[this.hostIndex]);
        else if (i === void 0 && (i = f.OK.code, s = w(f.OK)), this.connected) {
          if (this.connected = false, this.onConnectionLost && this.onConnectionLost({ errorCode: i, errorMessage: s, reconnect: this.connectOptions.reconnect, uri: this._wsuri }), i !== f.OK.code && this.connectOptions.reconnect) {
            this._reconnectInterval = 1, this._reconnect();
            return;
          }
        } else
          this.connectOptions.mqttVersion === 4 && this.connectOptions.mqttVersionExplicit === false ? (this._trace("Failed to connect V4, dropping back to V3"), this.connectOptions.mqttVersion = 3, this.connectOptions.uris ? (this.hostIndex = 0, this._doConnect(this.connectOptions.uris[0])) : this._doConnect(this.uri)) : this.connectOptions.onFailure && this.connectOptions.onFailure({ invocationContext: this.connectOptions.invocationContext, errorCode: i, errorMessage: s });
      }, b.prototype._trace = function() {
        if (this.traceFunction) {
          var i = Array.prototype.slice.call(arguments);
          for (var s in i)
            typeof i[s] < "u" && i.splice(s, 1, JSON.stringify(i[s]));
          var l = i.join("");
          this.traceFunction({ severity: "Debug", message: l });
        }
        if (this._traceBuffer !== null)
          for (var s = 0, u = arguments.length; s < u; s++)
            this._traceBuffer.length == this._MAX_TRACE_ENTRIES && this._traceBuffer.shift(), s === 0 ? this._traceBuffer.push(arguments[s]) : typeof arguments[s] > "u" ? this._traceBuffer.push(arguments[s]) : this._traceBuffer.push("  " + JSON.stringify(arguments[s]));
      }, b.prototype._traceMask = function(i, s) {
        var l = {};
        for (var u in i)
          i.hasOwnProperty(u) && (u == s ? l[u] = "******" : l[u] = i[u]);
        return l;
      };
      var Me = function(i, s, l, u) {
        var h;
        if (typeof i != "string")
          throw new Error(w(f.INVALID_TYPE, [typeof i, "host"]));
        if (arguments.length == 2) {
          u = s, h = i;
          var d = h.match(/^(wss?):\/\/((\[(.+)\])|([^\/]+?))(:(\d+))?(\/.*)$/);
          if (d)
            i = d[4] || d[2], s = parseInt(d[7]), l = d[8];
          else
            throw new Error(w(f.INVALID_ARGUMENT, [i, "host"]));
        } else {
          if (arguments.length == 3 && (u = l, l = "/mqtt"), typeof s != "number" || s < 0)
            throw new Error(w(f.INVALID_TYPE, [typeof s, "port"]));
          if (typeof l != "string")
            throw new Error(w(f.INVALID_TYPE, [typeof l, "path"]));
          var m = i.indexOf(":") !== -1 && i.slice(0, 1) !== "[" && i.slice(-1) !== "]";
          h = "ws://" + (m ? "[" + i + "]" : i) + ":" + s + l;
        }
        for (var S = 0, y = 0; y < u.length; y++) {
          var L = u.charCodeAt(y);
          55296 <= L && L <= 56319 && y++, S++;
        }
        if (typeof u != "string" || S > 65535)
          throw new Error(w(f.INVALID_ARGUMENT, [u, "clientId"]));
        var v = new b(h, i, s, l, u);
        Object.defineProperties(this, {
          host: {
            get: function() {
              return i;
            },
            set: function() {
              throw new Error(w(f.UNSUPPORTED_OPERATION));
            }
          },
          port: {
            get: function() {
              return s;
            },
            set: function() {
              throw new Error(w(f.UNSUPPORTED_OPERATION));
            }
          },
          path: {
            get: function() {
              return l;
            },
            set: function() {
              throw new Error(w(f.UNSUPPORTED_OPERATION));
            }
          },
          uri: {
            get: function() {
              return h;
            },
            set: function() {
              throw new Error(w(f.UNSUPPORTED_OPERATION));
            }
          },
          clientId: {
            get: function() {
              return v.clientId;
            },
            set: function() {
              throw new Error(w(f.UNSUPPORTED_OPERATION));
            }
          },
          onConnected: {
            get: function() {
              return v.onConnected;
            },
            set: function(a) {
              if (typeof a == "function")
                v.onConnected = a;
              else
                throw new Error(w(f.INVALID_TYPE, [typeof a, "onConnected"]));
            }
          },
          disconnectedPublishing: {
            get: function() {
              return v.disconnectedPublishing;
            },
            set: function(a) {
              v.disconnectedPublishing = a;
            }
          },
          disconnectedBufferSize: {
            get: function() {
              return v.disconnectedBufferSize;
            },
            set: function(a) {
              v.disconnectedBufferSize = a;
            }
          },
          onConnectionLost: {
            get: function() {
              return v.onConnectionLost;
            },
            set: function(a) {
              if (typeof a == "function")
                v.onConnectionLost = a;
              else
                throw new Error(w(f.INVALID_TYPE, [typeof a, "onConnectionLost"]));
            }
          },
          onMessageDelivered: {
            get: function() {
              return v.onMessageDelivered;
            },
            set: function(a) {
              if (typeof a == "function")
                v.onMessageDelivered = a;
              else
                throw new Error(w(f.INVALID_TYPE, [typeof a, "onMessageDelivered"]));
            }
          },
          onMessageArrived: {
            get: function() {
              return v.onMessageArrived;
            },
            set: function(a) {
              if (typeof a == "function")
                v.onMessageArrived = a;
              else
                throw new Error(w(f.INVALID_TYPE, [typeof a, "onMessageArrived"]));
            }
          },
          trace: {
            get: function() {
              return v.traceFunction;
            },
            set: function(a) {
              if (typeof a == "function")
                v.traceFunction = a;
              else
                throw new Error(w(f.INVALID_TYPE, [typeof a, "onTrace"]));
            }
          }
        }), this.connect = function(a) {
          if (a = a || {}, ee(a, {
            timeout: "number",
            userName: "string",
            password: "string",
            willMessage: "object",
            keepAliveInterval: "number",
            cleanSession: "boolean",
            useSSL: "boolean",
            invocationContext: "object",
            onSuccess: "function",
            onFailure: "function",
            hosts: "object",
            ports: "object",
            reconnect: "boolean",
            mqttVersion: "number",
            mqttVersionExplicit: "boolean",
            uris: "object"
          }), a.keepAliveInterval === void 0 && (a.keepAliveInterval = 60), a.mqttVersion > 4 || a.mqttVersion < 3)
            throw new Error(w(f.INVALID_ARGUMENT, [a.mqttVersion, "connectOptions.mqttVersion"]));
          if (a.mqttVersion === void 0 ? (a.mqttVersionExplicit = false, a.mqttVersion = 4) : a.mqttVersionExplicit = true, a.password !== void 0 && a.userName === void 0)
            throw new Error(w(f.INVALID_ARGUMENT, [a.password, "connectOptions.password"]));
          if (a.willMessage) {
            if (!(a.willMessage instanceof G))
              throw new Error(w(f.INVALID_TYPE, [a.willMessage, "connectOptions.willMessage"]));
            if (a.willMessage.stringPayload = null, typeof a.willMessage.destinationName > "u")
              throw new Error(w(f.INVALID_TYPE, [typeof a.willMessage.destinationName, "connectOptions.willMessage.destinationName"]));
          }
          if (typeof a.cleanSession > "u" && (a.cleanSession = true), a.hosts) {
            if (!(a.hosts instanceof Array))
              throw new Error(w(f.INVALID_ARGUMENT, [a.hosts, "connectOptions.hosts"]));
            if (a.hosts.length < 1)
              throw new Error(w(f.INVALID_ARGUMENT, [a.hosts, "connectOptions.hosts"]));
            for (var I = false, x = 0; x < a.hosts.length; x++) {
              if (typeof a.hosts[x] != "string")
                throw new Error(w(f.INVALID_TYPE, [typeof a.hosts[x], "connectOptions.hosts[" + x + "]"]));
              if (/^(wss?):\/\/((\[(.+)\])|([^\/]+?))(:(\d+))?(\/.*)$/.test(a.hosts[x])) {
                if (x === 0)
                  I = true;
                else if (!I)
                  throw new Error(w(f.INVALID_ARGUMENT, [a.hosts[x], "connectOptions.hosts[" + x + "]"]));
              } else if (I)
                throw new Error(w(f.INVALID_ARGUMENT, [a.hosts[x], "connectOptions.hosts[" + x + "]"]));
            }
            if (I)
              a.uris = a.hosts;
            else {
              if (!a.ports)
                throw new Error(w(f.INVALID_ARGUMENT, [a.ports, "connectOptions.ports"]));
              if (!(a.ports instanceof Array))
                throw new Error(w(f.INVALID_ARGUMENT, [a.ports, "connectOptions.ports"]));
              if (a.hosts.length !== a.ports.length)
                throw new Error(w(f.INVALID_ARGUMENT, [a.ports, "connectOptions.ports"]));
              a.uris = [];
              for (var x = 0; x < a.hosts.length; x++) {
                if (typeof a.ports[x] != "number" || a.ports[x] < 0)
                  throw new Error(w(f.INVALID_TYPE, [typeof a.ports[x], "connectOptions.ports[" + x + "]"]));
                var K = a.hosts[x], P = a.ports[x], V = K.indexOf(":") !== -1;
                h = "ws://" + (V ? "[" + K + "]" : K) + ":" + P + l, a.uris.push(h);
              }
            }
          }
          v.connect(a);
        }, this.subscribe = function(a, I) {
          if (typeof a != "string" && a.constructor !== Array)
            throw new Error("Invalid argument:" + a);
          if (I = I || {}, ee(I, {
            qos: "number",
            invocationContext: "object",
            onSuccess: "function",
            onFailure: "function",
            timeout: "number"
          }), I.timeout && !I.onFailure)
            throw new Error("subscribeOptions.timeout specified with no onFailure callback.");
          if (typeof I.qos < "u" && !(I.qos === 0 || I.qos === 1 || I.qos === 2))
            throw new Error(w(f.INVALID_ARGUMENT, [I.qos, "subscribeOptions.qos"]));
          v.subscribe(a, I);
        }, this.unsubscribe = function(a, I) {
          if (typeof a != "string" && a.constructor !== Array)
            throw new Error("Invalid argument:" + a);
          if (I = I || {}, ee(I, {
            invocationContext: "object",
            onSuccess: "function",
            onFailure: "function",
            timeout: "number"
          }), I.timeout && !I.onFailure)
            throw new Error("unsubscribeOptions.timeout specified with no onFailure callback.");
          v.unsubscribe(a, I);
        }, this.send = function(a, I, x, K) {
          var P;
          if (arguments.length === 0)
            throw new Error("Invalid argument.length");
          if (arguments.length == 1) {
            if (!(a instanceof G) && typeof a != "string")
              throw new Error("Invalid argument:" + typeof a);
            if (P = a, typeof P.destinationName > "u")
              throw new Error(w(f.INVALID_ARGUMENT, [P.destinationName, "Message.destinationName"]));
            v.send(P);
          } else
            P = new G(I), P.destinationName = a, arguments.length >= 3 && (P.qos = x), arguments.length >= 4 && (P.retained = K), v.send(P);
        }, this.publish = function(a, I, x, K) {
          var P;
          if (arguments.length === 0)
            throw new Error("Invalid argument.length");
          if (arguments.length == 1) {
            if (!(a instanceof G) && typeof a != "string")
              throw new Error("Invalid argument:" + typeof a);
            if (P = a, typeof P.destinationName > "u")
              throw new Error(w(f.INVALID_ARGUMENT, [P.destinationName, "Message.destinationName"]));
            v.send(P);
          } else
            P = new G(I), P.destinationName = a, arguments.length >= 3 && (P.qos = x), arguments.length >= 4 && (P.retained = K), v.send(P);
        }, this.disconnect = function() {
          v.disconnect();
        }, this.getTraceLog = function() {
          return v.getTraceLog();
        }, this.startTrace = function() {
          v.startTrace();
        }, this.stopTrace = function() {
          v.stopTrace();
        }, this.isConnected = function() {
          return v.connected;
        };
      }, G = function(i) {
        var s;
        if (typeof i == "string" || i instanceof ArrayBuffer || ArrayBuffer.isView(i) && !(i instanceof DataView))
          s = i;
        else
          throw w(f.INVALID_ARGUMENT, [i, "newPayload"]);
        var l, u = 0, h = false, d = false;
        Object.defineProperties(this, {
          payloadString: {
            enumerable: true,
            get: function() {
              return typeof s == "string" ? s : ce(s, 0, s.length);
            }
          },
          payloadBytes: {
            enumerable: true,
            get: function() {
              if (typeof s == "string") {
                var m = new ArrayBuffer(N(s)), S = new Uint8Array(m);
                return B(s, S, 0), S;
              } else
                return s;
            }
          },
          destinationName: {
            enumerable: true,
            get: function() {
              return l;
            },
            set: function(m) {
              if (typeof m == "string")
                l = m;
              else
                throw new Error(w(f.INVALID_ARGUMENT, [m, "newDestinationName"]));
            }
          },
          qos: {
            enumerable: true,
            get: function() {
              return u;
            },
            set: function(m) {
              if (m === 0 || m === 1 || m === 2)
                u = m;
              else
                throw new Error("Invalid argument:" + m);
            }
          },
          retained: {
            enumerable: true,
            get: function() {
              return h;
            },
            set: function(m) {
              if (typeof m == "boolean")
                h = m;
              else
                throw new Error(w(f.INVALID_ARGUMENT, [m, "newRetained"]));
            }
          },
          topic: {
            enumerable: true,
            get: function() {
              return l;
            },
            set: function(m) {
              l = m;
            }
          },
          duplicate: {
            enumerable: true,
            get: function() {
              return d;
            },
            set: function(m) {
              d = m;
            }
          }
        });
      };
      return {
        Client: Me,
        Message: G
      };
    }(typeof X < "u" ? X : typeof self < "u" ? self : typeof window < "u" ? window : {});
    return k;
  });
})(Os);
const ae = $();
let Xe = new De.Client(
  ae.host,
  ae.port,
  ae.clientId
);
const ge = () => Xe, qs = (p = {
  host: $().host,
  port: $().port,
  clientId: $().clientId,
  username: $().username,
  password: $().password,
  useSSL: $().useSSL
}) => (ae.username = p.username, ae.password = p.password, ae.useSSL = p.useSSL, Xe = new De.Client(
  ae.host = p.host,
  ae.port = p.port,
  ae.clientId = p.clientId
), Xe);
var et = {}, Rs = {
  get exports() {
    return et;
  },
  set exports(p) {
    et = p;
  }
};
/*!
* sweetalert2 v11.7.3
* Released under the MIT License.
*/
(function(p, C) {
  (function(g, k) {
    p.exports = k();
  })(X, function() {
    var g = {
      awaitingPromise: /* @__PURE__ */ new WeakMap(),
      promise: /* @__PURE__ */ new WeakMap(),
      innerParams: /* @__PURE__ */ new WeakMap(),
      domCache: /* @__PURE__ */ new WeakMap()
    };
    const k = "swal2-", T = (e) => {
      const t = {};
      for (const n in e)
        t[e[n]] = k + e[n];
      return t;
    }, r = T(["container", "shown", "height-auto", "iosfix", "popup", "modal", "no-backdrop", "no-transition", "toast", "toast-shown", "show", "hide", "close", "title", "html-container", "actions", "confirm", "deny", "cancel", "default-outline", "footer", "icon", "icon-content", "image", "input", "file", "range", "select", "radio", "checkbox", "label", "textarea", "inputerror", "input-label", "validation-message", "progress-steps", "active-progress-step", "progress-step", "progress-step-line", "loader", "loading", "styled", "top", "top-start", "top-end", "top-left", "top-right", "center", "center-start", "center-end", "center-left", "center-right", "bottom", "bottom-start", "bottom-end", "bottom-left", "bottom-right", "grow-row", "grow-column", "grow-fullscreen", "rtl", "timer-progress-bar", "timer-progress-bar-container", "scrollbar-measure", "icon-success", "icon-warning", "icon-info", "icon-question", "icon-error"]), q = T(["success", "warning", "info", "question", "error"]), E = "SweetAlert2:", ee = (e) => {
      const t = [];
      for (let n = 0; n < e.length; n++)
        t.indexOf(e[n]) === -1 && t.push(e[n]);
      return t;
    }, se = (e) => e.charAt(0).toUpperCase() + e.slice(1), f = (e) => {
      console.warn(`${E} ${typeof e == "object" ? e.join(" ") : e}`);
    }, ie = (e) => {
      console.error(`${E} ${e}`);
    }, w = [], Ce = (e) => {
      w.includes(e) || (w.push(e), f(e));
    }, xe = (e, t) => {
      Ce(`"${e}" is deprecated and will be removed in the next major release. Please use "${t}" instead.`);
    }, U = (e) => typeof e == "function" ? e() : e, Ae = (e) => e && typeof e.toPromise == "function", te = (e) => Ae(e) ? e.toPromise() : Promise.resolve(e), Z = (e) => e && Promise.resolve(e) === e, R = () => document.body.querySelector(`.${r.container}`), de = (e) => {
      const t = R();
      return t ? t.querySelector(e) : null;
    }, N = (e) => de(`.${e}`), B = () => N(r.popup), ce = () => N(r.icon), Pe = () => N(r["icon-content"]), fe = () => N(r.title), b = () => N(r["html-container"]), Me = () => N(r.image), G = () => N(r["progress-steps"]), i = () => N(r["validation-message"]), s = () => (
      /** @type {HTMLButtonElement} */
      de(`.${r.actions} .${r.confirm}`)
    ), l = () => (
      /** @type {HTMLButtonElement} */
      de(`.${r.actions} .${r.cancel}`)
    ), u = () => (
      /** @type {HTMLButtonElement} */
      de(`.${r.actions} .${r.deny}`)
    ), h = () => N(r["input-label"]), d = () => de(`.${r.loader}`), m = () => N(r.actions), S = () => N(r.footer), y = () => N(r["timer-progress-bar"]), L = () => N(r.close), v = `
  a[href],
  area[href],
  input:not([disabled]),
  select:not([disabled]),
  textarea:not([disabled]),
  button:not([disabled]),
  iframe,
  object,
  embed,
  [tabindex="0"],
  [contenteditable],
  audio[controls],
  video[controls],
  summary
`, a = () => {
      const e = Array.from(B().querySelectorAll('[tabindex]:not([tabindex="-1"]):not([tabindex="0"])')).sort((n, o) => {
        const c = parseInt(n.getAttribute("tabindex")), _ = parseInt(o.getAttribute("tabindex"));
        return c > _ ? 1 : c < _ ? -1 : 0;
      }), t = Array.from(B().querySelectorAll(v)).filter((n) => n.getAttribute("tabindex") !== "-1");
      return ee(e.concat(t)).filter((n) => W(n));
    }, I = () => re(document.body, r.shown) && !re(document.body, r["toast-shown"]) && !re(document.body, r["no-backdrop"]), x = () => B() && re(B(), r.toast), K = () => B().hasAttribute("data-loading"), P = {
      previousBodyPadding: null
    }, V = (e, t) => {
      if (e.textContent = "", t) {
        const o = new DOMParser().parseFromString(t, "text/html");
        Array.from(o.querySelector("head").childNodes).forEach((c) => {
          e.appendChild(c);
        }), Array.from(o.querySelector("body").childNodes).forEach((c) => {
          c instanceof HTMLVideoElement || c instanceof HTMLAudioElement ? e.appendChild(c.cloneNode(true)) : e.appendChild(c);
        });
      }
    }, re = (e, t) => {
      if (!t)
        return false;
      const n = t.split(/\s+/);
      for (let o = 0; o < n.length; o++)
        if (!e.classList.contains(n[o]))
          return false;
      return true;
    }, Kt = (e, t) => {
      Array.from(e.classList).forEach((n) => {
        !Object.values(r).includes(n) && !Object.values(q).includes(n) && !Object.values(t.showClass).includes(n) && e.classList.remove(n);
      });
    }, Y = (e, t, n) => {
      if (Kt(e, t), t.customClass && t.customClass[n]) {
        if (typeof t.customClass[n] != "string" && !t.customClass[n].forEach) {
          f(`Invalid type of customClass.${n}! Expected string or iterable object, got "${typeof t.customClass[n]}"`);
          return;
        }
        M(e, t.customClass[n]);
      }
    }, $e = (e, t) => {
      if (!t)
        return null;
      switch (t) {
        case "select":
        case "textarea":
        case "file":
          return e.querySelector(`.${r.popup} > .${r[t]}`);
        case "checkbox":
          return e.querySelector(`.${r.popup} > .${r.checkbox} input`);
        case "radio":
          return e.querySelector(`.${r.popup} > .${r.radio} input:checked`) || e.querySelector(`.${r.popup} > .${r.radio} input:first-child`);
        case "range":
          return e.querySelector(`.${r.popup} > .${r.range} input`);
        default:
          return e.querySelector(`.${r.popup} > .${r.input}`);
      }
    }, rt = (e) => {
      if (e.focus(), e.type !== "file") {
        const t = e.value;
        e.value = "", e.value = t;
      }
    }, at = (e, t, n) => {
      !e || !t || (typeof t == "string" && (t = t.split(/\s+/).filter(Boolean)), t.forEach((o) => {
        Array.isArray(e) ? e.forEach((c) => {
          n ? c.classList.add(o) : c.classList.remove(o);
        }) : n ? e.classList.add(o) : e.classList.remove(o);
      }));
    }, M = (e, t) => {
      at(e, t, true);
    }, ne = (e, t) => {
      at(e, t, false);
    }, ue = (e, t) => {
      const n = Array.from(e.children);
      for (let o = 0; o < n.length; o++) {
        const c = n[o];
        if (c instanceof HTMLElement && re(c, t))
          return c;
      }
    }, me = (e, t, n) => {
      n === `${parseInt(n)}` && (n = parseInt(n)), n || parseInt(n) === 0 ? e.style[t] = typeof n == "number" ? `${n}px` : n : e.style.removeProperty(t);
    }, D = function(e) {
      let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "flex";
      e.style.display = t;
    }, F = (e) => {
      e.style.display = "none";
    }, lt = (e, t, n, o) => {
      const c = e.querySelector(t);
      c && (c.style[n] = o);
    }, Be = function(e, t) {
      let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "flex";
      t ? D(e, n) : F(e);
    }, W = (e) => !!(e && (e.offsetWidth || e.offsetHeight || e.getClientRects().length)), Wt = () => !W(s()) && !W(u()) && !W(l()), ct = (e) => e.scrollHeight > e.clientHeight, ut = (e) => {
      const t = window.getComputedStyle(e), n = parseFloat(t.getPropertyValue("animation-duration") || "0"), o = parseFloat(t.getPropertyValue("transition-duration") || "0");
      return n > 0 || o > 0;
    }, Fe = function(e) {
      let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
      const n = y();
      W(n) && (t && (n.style.transition = "none", n.style.width = "100%"), setTimeout(() => {
        n.style.transition = `width ${e / 1e3}s linear`, n.style.width = "0%";
      }, 10));
    }, Qt = () => {
      const e = y(), t = parseInt(window.getComputedStyle(e).width);
      e.style.removeProperty("transition"), e.style.width = "100%";
      const n = parseInt(window.getComputedStyle(e).width), o = t / n * 100;
      e.style.width = `${o}%`;
    }, Gt = 100, A = {}, Yt = () => {
      A.previousActiveElement instanceof HTMLElement ? (A.previousActiveElement.focus(), A.previousActiveElement = null) : document.body && document.body.focus();
    }, Jt = (e) => new Promise((t) => {
      if (!e)
        return t();
      const n = window.scrollX, o = window.scrollY;
      A.restoreFocusTimeout = setTimeout(() => {
        Yt(), t();
      }, Gt), window.scrollTo(n, o);
    }), dt = () => typeof window > "u" || typeof document > "u", Zt = `
 <div aria-labelledby="${r.title}" aria-describedby="${r["html-container"]}" class="${r.popup}" tabindex="-1">
   <button type="button" class="${r.close}"></button>
   <ul class="${r["progress-steps"]}"></ul>
   <div class="${r.icon}"></div>
   <img class="${r.image}" />
   <h2 class="${r.title}" id="${r.title}"></h2>
   <div class="${r["html-container"]}" id="${r["html-container"]}"></div>
   <input class="${r.input}" />
   <input type="file" class="${r.file}" />
   <div class="${r.range}">
     <input type="range" />
     <output></output>
   </div>
   <select class="${r.select}"></select>
   <div class="${r.radio}"></div>
   <label for="${r.checkbox}" class="${r.checkbox}">
     <input type="checkbox" />
     <span class="${r.label}"></span>
   </label>
   <textarea class="${r.textarea}"></textarea>
   <div class="${r["validation-message"]}" id="${r["validation-message"]}"></div>
   <div class="${r.actions}">
     <div class="${r.loader}"></div>
     <button type="button" class="${r.confirm}"></button>
     <button type="button" class="${r.deny}"></button>
     <button type="button" class="${r.cancel}"></button>
   </div>
   <div class="${r.footer}"></div>
   <div class="${r["timer-progress-bar-container"]}">
     <div class="${r["timer-progress-bar"]}"></div>
   </div>
 </div>
`.replace(/(^|\n)\s*/g, ""), Xt = () => {
      const e = R();
      return e ? (e.remove(), ne([document.documentElement, document.body], [r["no-backdrop"], r["toast-shown"], r["has-column"]]), true) : false;
    }, he = () => {
      A.currentInstance.resetValidationMessage();
    }, en = () => {
      const e = B(), t = ue(e, r.input), n = ue(e, r.file), o = e.querySelector(`.${r.range} input`), c = e.querySelector(`.${r.range} output`), _ = ue(e, r.select), O = e.querySelector(`.${r.checkbox} input`), Q = ue(e, r.textarea);
      t.oninput = he, n.onchange = he, _.onchange = he, O.onchange = he, Q.oninput = he, o.oninput = () => {
        he(), c.value = o.value;
      }, o.onchange = () => {
        he(), c.value = o.value;
      };
    }, tn = (e) => typeof e == "string" ? document.querySelector(e) : e, nn = (e) => {
      const t = B();
      t.setAttribute("role", e.toast ? "alert" : "dialog"), t.setAttribute("aria-live", e.toast ? "polite" : "assertive"), e.toast || t.setAttribute("aria-modal", "true");
    }, on = (e) => {
      window.getComputedStyle(e).direction === "rtl" && M(R(), r.rtl);
    }, sn = (e) => {
      const t = Xt();
      if (dt()) {
        ie("SweetAlert2 requires document to initialize");
        return;
      }
      const n = document.createElement("div");
      n.className = r.container, t && M(n, r["no-transition"]), V(n, Zt);
      const o = tn(e.target);
      o.appendChild(n), nn(e), on(o), en();
    }, Ve = (e, t) => {
      e instanceof HTMLElement ? t.appendChild(e) : typeof e == "object" ? rn(e, t) : e && V(t, e);
    }, rn = (e, t) => {
      e.jquery ? an(t, e) : V(t, e.toString());
    }, an = (e, t) => {
      if (e.textContent = "", 0 in t)
        for (let n = 0; n in t; n++)
          e.appendChild(t[n].cloneNode(true));
      else
        e.appendChild(t.cloneNode(true));
    }, Ie = (() => {
      if (dt())
        return false;
      const e = document.createElement("div"), t = {
        WebkitAnimation: "webkitAnimationEnd",
        // Chrome, Safari and Opera
        animation: "animationend"
        // Standard syntax
      };
      for (const n in t)
        if (Object.prototype.hasOwnProperty.call(t, n) && typeof e.style[n] < "u")
          return t[n];
      return false;
    })(), ln = () => {
      const e = document.createElement("div");
      e.className = r["scrollbar-measure"], document.body.appendChild(e);
      const t = e.getBoundingClientRect().width - e.clientWidth;
      return document.body.removeChild(e), t;
    }, cn = (e, t) => {
      const n = m(), o = d();
      !t.showConfirmButton && !t.showDenyButton && !t.showCancelButton ? F(n) : D(n), Y(n, t, "actions"), un(n, o, t), V(o, t.loaderHtml), Y(o, t, "loader");
    };
    function un(e, t, n) {
      const o = s(), c = u(), _ = l();
      je(o, "confirm", n), je(c, "deny", n), je(_, "cancel", n), dn(o, c, _, n), n.reverseButtons && (n.toast ? (e.insertBefore(_, o), e.insertBefore(c, o)) : (e.insertBefore(_, t), e.insertBefore(c, t), e.insertBefore(o, t)));
    }
    function dn(e, t, n, o) {
      if (!o.buttonsStyling) {
        ne([e, t, n], r.styled);
        return;
      }
      M([e, t, n], r.styled), o.confirmButtonColor && (e.style.backgroundColor = o.confirmButtonColor, M(e, r["default-outline"])), o.denyButtonColor && (t.style.backgroundColor = o.denyButtonColor, M(t, r["default-outline"])), o.cancelButtonColor && (n.style.backgroundColor = o.cancelButtonColor, M(n, r["default-outline"]));
    }
    function je(e, t, n) {
      Be(e, n[`show${se(t)}Button`], "inline-block"), V(e, n[`${t}ButtonText`]), e.setAttribute("aria-label", n[`${t}ButtonAriaLabel`]), e.className = r[t], Y(e, n, `${t}Button`), M(e, n[`${t}ButtonClass`]);
    }
    const fn = (e, t) => {
      const n = L();
      V(n, t.closeButtonHtml), Y(n, t, "closeButton"), Be(n, t.showCloseButton), n.setAttribute("aria-label", t.closeButtonAriaLabel);
    }, hn = (e, t) => {
      const n = R();
      n && (pn(n, t.backdrop), gn(n, t.position), mn(n, t.grow), Y(n, t, "container"));
    };
    function pn(e, t) {
      typeof t == "string" ? e.style.background = t : t || M([document.documentElement, document.body], r["no-backdrop"]);
    }
    function gn(e, t) {
      t in r ? M(e, r[t]) : (f('The "position" parameter is not valid, defaulting to "center"'), M(e, r.center));
    }
    function mn(e, t) {
      if (t && typeof t == "string") {
        const n = `grow-${t}`;
        n in r && M(e, r[n]);
      }
    }
    const wn = ["input", "file", "range", "select", "radio", "checkbox", "textarea"], bn = (e, t) => {
      const n = B(), o = g.innerParams.get(e), c = !o || t.input !== o.input;
      wn.forEach((_) => {
        const O = ue(n, r[_]);
        _n(_, t.inputAttributes), O.className = r[_], c && F(O);
      }), t.input && (c && yn(t), En(t));
    }, yn = (e) => {
      if (!H[e.input]) {
        ie(`Unexpected type of input! Expected "text", "email", "password", "number", "tel", "select", "radio", "checkbox", "textarea", "file" or "url", got "${e.input}"`);
        return;
      }
      const t = ft(e.input), n = H[e.input](t, e);
      D(t), e.inputAutoFocus && setTimeout(() => {
        rt(n);
      });
    }, vn = (e) => {
      for (let t = 0; t < e.attributes.length; t++) {
        const n = e.attributes[t].name;
        ["type", "value", "style"].includes(n) || e.removeAttribute(n);
      }
    }, _n = (e, t) => {
      const n = $e(B(), e);
      if (n) {
        vn(n);
        for (const o in t)
          n.setAttribute(o, t[o]);
      }
    }, En = (e) => {
      const t = ft(e.input);
      typeof e.customClass == "object" && M(t, e.customClass.input);
    }, He = (e, t) => {
      (!e.placeholder || t.inputPlaceholder) && (e.placeholder = t.inputPlaceholder);
    }, ke = (e, t, n) => {
      if (n.inputLabel) {
        e.id = r.input;
        const o = document.createElement("label"), c = r["input-label"];
        o.setAttribute("for", e.id), o.className = c, typeof n.customClass == "object" && M(o, n.customClass.inputLabel), o.innerText = n.inputLabel, t.insertAdjacentElement("beforebegin", o);
      }
    }, ft = (e) => ue(B(), r[e] || r.input), Le = (e, t) => {
      ["string", "number"].includes(typeof t) ? e.value = `${t}` : Z(t) || f(`Unexpected type of inputValue! Expected "string", "number" or "Promise", got "${typeof t}"`);
    }, H = {};
    H.text = H.email = H.password = H.number = H.tel = H.url = (e, t) => (Le(e, t.inputValue), ke(e, e, t), He(e, t), e.type = t.input, e), H.file = (e, t) => (ke(e, e, t), He(e, t), e), H.range = (e, t) => {
      const n = e.querySelector("input"), o = e.querySelector("output");
      return Le(n, t.inputValue), n.type = t.input, Le(o, t.inputValue), ke(n, e, t), e;
    }, H.select = (e, t) => {
      if (e.textContent = "", t.inputPlaceholder) {
        const n = document.createElement("option");
        V(n, t.inputPlaceholder), n.value = "", n.disabled = true, n.selected = true, e.appendChild(n);
      }
      return ke(e, e, t), e;
    }, H.radio = (e) => (e.textContent = "", e), H.checkbox = (e, t) => {
      const n = $e(B(), "checkbox");
      n.value = "1", n.id = r.checkbox, n.checked = !!t.inputValue;
      const o = e.querySelector("span");
      return V(o, t.inputPlaceholder), n;
    }, H.textarea = (e, t) => {
      Le(e, t.inputValue), He(e, t), ke(e, e, t);
      const n = (o) => parseInt(window.getComputedStyle(o).marginLeft) + parseInt(window.getComputedStyle(o).marginRight);
      return setTimeout(() => {
        if ("MutationObserver" in window) {
          const o = parseInt(window.getComputedStyle(B()).width), c = () => {
            const _ = e.offsetWidth + n(e);
            _ > o ? B().style.width = `${_}px` : B().style.width = null;
          };
          new MutationObserver(c).observe(e, {
            attributes: true,
            attributeFilter: ["style"]
          });
        }
      }), e;
    };
    const Cn = (e, t) => {
      const n = b();
      Y(n, t, "htmlContainer"), t.html ? (Ve(t.html, n), D(n, "block")) : t.text ? (n.textContent = t.text, D(n, "block")) : F(n), bn(e, t);
    }, xn = (e, t) => {
      const n = S();
      Be(n, t.footer), t.footer && Ve(t.footer, n), Y(n, t, "footer");
    }, An = (e, t) => {
      const n = g.innerParams.get(e), o = ce();
      if (n && t.icon === n.icon) {
        pt(o, t), ht(o, t);
        return;
      }
      if (!t.icon && !t.iconHtml) {
        F(o);
        return;
      }
      if (t.icon && Object.keys(q).indexOf(t.icon) === -1) {
        ie(`Unknown icon! Expected "success", "error", "warning", "info" or "question", got "${t.icon}"`), F(o);
        return;
      }
      D(o), pt(o, t), ht(o, t), M(o, t.showClass.icon);
    }, ht = (e, t) => {
      for (const n in q)
        t.icon !== n && ne(e, q[n]);
      M(e, q[t.icon]), Sn(e, t), In(), Y(e, t, "icon");
    }, In = () => {
      const e = B(), t = window.getComputedStyle(e).getPropertyValue("background-color"), n = e.querySelectorAll("[class^=swal2-success-circular-line], .swal2-success-fix");
      for (let o = 0; o < n.length; o++)
        n[o].style.backgroundColor = t;
    }, kn = `
  <div class="swal2-success-circular-line-left"></div>
  <span class="swal2-success-line-tip"></span> <span class="swal2-success-line-long"></span>
  <div class="swal2-success-ring"></div> <div class="swal2-success-fix"></div>
  <div class="swal2-success-circular-line-right"></div>
`, Tn = `
  <span class="swal2-x-mark">
    <span class="swal2-x-mark-line-left"></span>
    <span class="swal2-x-mark-line-right"></span>
  </span>
`, pt = (e, t) => {
      let n = e.innerHTML, o;
      t.iconHtml ? o = gt(t.iconHtml) : t.icon === "success" ? (o = kn, n = n.replace(/ style=".*?"/g, "")) : t.icon === "error" ? o = Tn : o = gt({
        question: "?",
        warning: "!",
        info: "i"
      }[t.icon]), n.trim() !== o.trim() && V(e, o);
    }, Sn = (e, t) => {
      if (t.iconColor) {
        e.style.color = t.iconColor, e.style.borderColor = t.iconColor;
        for (const n of [".swal2-success-line-tip", ".swal2-success-line-long", ".swal2-x-mark-line-left", ".swal2-x-mark-line-right"])
          lt(e, n, "backgroundColor", t.iconColor);
        lt(e, ".swal2-success-ring", "borderColor", t.iconColor);
      }
    }, gt = (e) => `<div class="${r["icon-content"]}">${e}</div>`, Pn = (e, t) => {
      const n = Me();
      if (!t.imageUrl) {
        F(n);
        return;
      }
      D(n, ""), n.setAttribute("src", t.imageUrl), n.setAttribute("alt", t.imageAlt), me(n, "width", t.imageWidth), me(n, "height", t.imageHeight), n.className = r.image, Y(n, t, "image");
    }, Mn = (e, t) => {
      const n = R(), o = B();
      t.toast ? (me(n, "width", t.width), o.style.width = "100%", o.insertBefore(d(), ce())) : me(o, "width", t.width), me(o, "padding", t.padding), t.color && (o.style.color = t.color), t.background && (o.style.background = t.background), F(i()), Bn(o, t);
    }, Bn = (e, t) => {
      e.className = `${r.popup} ${W(e) ? t.showClass.popup : ""}`, t.toast ? (M([document.documentElement, document.body], r["toast-shown"]), M(e, r.toast)) : M(e, r.modal), Y(e, t, "popup"), typeof t.customClass == "string" && M(e, t.customClass), t.icon && M(e, r[`icon-${t.icon}`]);
    }, Ln = (e, t) => {
      const n = G();
      if (!t.progressSteps || t.progressSteps.length === 0) {
        F(n);
        return;
      }
      D(n), n.textContent = "", t.currentProgressStep >= t.progressSteps.length && f("Invalid currentProgressStep parameter, it should be less than progressSteps.length (currentProgressStep like JS arrays starts from 0)"), t.progressSteps.forEach((o, c) => {
        const _ = Nn(o);
        if (n.appendChild(_), c === t.currentProgressStep && M(_, r["active-progress-step"]), c !== t.progressSteps.length - 1) {
          const O = On(t);
          n.appendChild(O);
        }
      });
    }, Nn = (e) => {
      const t = document.createElement("li");
      return M(t, r["progress-step"]), V(t, e), t;
    }, On = (e) => {
      const t = document.createElement("li");
      return M(t, r["progress-step-line"]), e.progressStepsDistance && me(t, "width", e.progressStepsDistance), t;
    }, qn = (e, t) => {
      const n = fe();
      Be(n, t.title || t.titleText, "block"), t.title && Ve(t.title, n), t.titleText && (n.innerText = t.titleText), Y(n, t, "title");
    }, mt = (e, t) => {
      Mn(e, t), hn(e, t), Ln(e, t), An(e, t), Pn(e, t), qn(e, t), fn(e, t), Cn(e, t), cn(e, t), xn(e, t), typeof t.didRender == "function" && t.didRender(B());
    };
    function wt() {
      const e = g.innerParams.get(this);
      if (!e)
        return;
      const t = g.domCache.get(this);
      F(t.loader), x() ? e.icon && D(ce()) : Rn(t), ne([t.popup, t.actions], r.loading), t.popup.removeAttribute("aria-busy"), t.popup.removeAttribute("data-loading"), t.confirmButton.disabled = false, t.denyButton.disabled = false, t.cancelButton.disabled = false;
    }
    const Rn = (e) => {
      const t = e.popup.getElementsByClassName(e.loader.getAttribute("data-button-to-replace"));
      t.length ? D(t[0], "inline-block") : Wt() && F(e.actions);
    };
    function Un(e) {
      const t = g.innerParams.get(e || this), n = g.domCache.get(e || this);
      return n ? $e(n.popup, t.input) : null;
    }
    const Dn = () => W(B()), bt = () => s() && s().click(), $n = () => u() && u().click(), Fn = () => l() && l().click(), we = Object.freeze({
      cancel: "cancel",
      backdrop: "backdrop",
      close: "close",
      esc: "esc",
      timer: "timer"
    }), yt = (e) => {
      e.keydownTarget && e.keydownHandlerAdded && (e.keydownTarget.removeEventListener("keydown", e.keydownHandler, {
        capture: e.keydownListenerCapture
      }), e.keydownHandlerAdded = false);
    }, Vn = (e, t, n, o) => {
      yt(t), n.toast || (t.keydownHandler = (c) => Hn(e, c, o), t.keydownTarget = n.keydownListenerCapture ? window : B(), t.keydownListenerCapture = n.keydownListenerCapture, t.keydownTarget.addEventListener("keydown", t.keydownHandler, {
        capture: t.keydownListenerCapture
      }), t.keydownHandlerAdded = true);
    }, ze = (e, t) => {
      const n = a();
      if (n.length) {
        e = e + t, e === n.length ? e = 0 : e === -1 && (e = n.length - 1), n[e].focus();
        return;
      }
      B().focus();
    }, vt = ["ArrowRight", "ArrowDown"], jn = ["ArrowLeft", "ArrowUp"], Hn = (e, t, n) => {
      const o = g.innerParams.get(e);
      o && (t.isComposing || t.keyCode === 229 || (o.stopKeydownPropagation && t.stopPropagation(), t.key === "Enter" ? zn(e, t, o) : t.key === "Tab" ? Kn(t) : [...vt, ...jn].includes(t.key) ? Wn(t.key) : t.key === "Escape" && Qn(t, o, n)));
    }, zn = (e, t, n) => {
      if (U(n.allowEnterKey) && t.target && e.getInput() && t.target instanceof HTMLElement && t.target.outerHTML === e.getInput().outerHTML) {
        if (["textarea", "file"].includes(n.input))
          return;
        bt(), t.preventDefault();
      }
    }, Kn = (e) => {
      const t = e.target, n = a();
      let o = -1;
      for (let c = 0; c < n.length; c++)
        if (t === n[c]) {
          o = c;
          break;
        }
      e.shiftKey ? ze(o, -1) : ze(o, 1), e.stopPropagation(), e.preventDefault();
    }, Wn = (e) => {
      const t = s(), n = u(), o = l(), c = [t, n, o];
      if (document.activeElement instanceof HTMLElement && !c.includes(document.activeElement))
        return;
      const _ = vt.includes(e) ? "nextElementSibling" : "previousElementSibling";
      let O = document.activeElement;
      for (let Q = 0; Q < m().children.length; Q++) {
        if (O = O[_], !O)
          return;
        if (O instanceof HTMLButtonElement && W(O))
          break;
      }
      O instanceof HTMLButtonElement && O.focus();
    }, Qn = (e, t, n) => {
      U(t.allowEscapeKey) && (e.preventDefault(), n(we.esc));
    };
    var Te = {
      swalPromiseResolve: /* @__PURE__ */ new WeakMap(),
      swalPromiseReject: /* @__PURE__ */ new WeakMap()
    };
    const Gn = () => {
      Array.from(document.body.children).forEach((t) => {
        t === R() || t.contains(R()) || (t.hasAttribute("aria-hidden") && t.setAttribute("data-previous-aria-hidden", t.getAttribute("aria-hidden")), t.setAttribute("aria-hidden", "true"));
      });
    }, _t = () => {
      Array.from(document.body.children).forEach((t) => {
        t.hasAttribute("data-previous-aria-hidden") ? (t.setAttribute("aria-hidden", t.getAttribute("data-previous-aria-hidden")), t.removeAttribute("data-previous-aria-hidden")) : t.removeAttribute("aria-hidden");
      });
    }, Yn = () => {
      if (
        // @ts-ignore
        (/iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream || navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1) && !re(document.body, r.iosfix)
      ) {
        const t = document.body.scrollTop;
        document.body.style.top = `${t * -1}px`, M(document.body, r.iosfix), Zn(), Jn();
      }
    }, Jn = () => {
      const e = navigator.userAgent, t = !!e.match(/iPad/i) || !!e.match(/iPhone/i), n = !!e.match(/WebKit/i);
      t && n && !e.match(/CriOS/i) && B().scrollHeight > window.innerHeight - 44 && (R().style.paddingBottom = "44px");
    }, Zn = () => {
      const e = R();
      let t;
      e.ontouchstart = (n) => {
        t = Xn(n);
      }, e.ontouchmove = (n) => {
        t && (n.preventDefault(), n.stopPropagation());
      };
    }, Xn = (e) => {
      const t = e.target, n = R();
      return eo(e) || to(e) ? false : t === n || !ct(n) && t instanceof HTMLElement && t.tagName !== "INPUT" && // #1603
      t.tagName !== "TEXTAREA" && // #2266
      !(ct(b()) && // #1944
      b().contains(t));
    }, eo = (e) => e.touches && e.touches.length && e.touches[0].touchType === "stylus", to = (e) => e.touches && e.touches.length > 1, no = () => {
      if (re(document.body, r.iosfix)) {
        const e = parseInt(document.body.style.top, 10);
        ne(document.body, r.iosfix), document.body.style.top = "", document.body.scrollTop = e * -1;
      }
    }, oo = () => {
      P.previousBodyPadding === null && document.body.scrollHeight > window.innerHeight && (P.previousBodyPadding = parseInt(window.getComputedStyle(document.body).getPropertyValue("padding-right")), document.body.style.paddingRight = `${P.previousBodyPadding + ln()}px`);
    }, so = () => {
      P.previousBodyPadding !== null && (document.body.style.paddingRight = `${P.previousBodyPadding}px`, P.previousBodyPadding = null);
    };
    function Et(e, t, n, o) {
      x() ? Ct(e, o) : (Jt(n).then(() => Ct(e, o)), yt(A)), /^((?!chrome|android).)*safari/i.test(navigator.userAgent) ? (t.setAttribute("style", "display:none !important"), t.removeAttribute("class"), t.innerHTML = "") : t.remove(), I() && (so(), no(), _t()), io();
    }
    function io() {
      ne([document.documentElement, document.body], [r.shown, r["height-auto"], r["no-backdrop"], r["toast-shown"]]);
    }
    function Ne(e) {
      e = co(e);
      const t = Te.swalPromiseResolve.get(this), n = ao(this);
      this.isAwaitingPromise() ? e.isDismissed || (Se(this), t(e)) : n && t(e);
    }
    function ro() {
      return !!g.awaitingPromise.get(this);
    }
    const ao = (e) => {
      const t = B();
      if (!t)
        return false;
      const n = g.innerParams.get(e);
      if (!n || re(t, n.hideClass.popup))
        return false;
      ne(t, n.showClass.popup), M(t, n.hideClass.popup);
      const o = R();
      return ne(o, n.showClass.backdrop), M(o, n.hideClass.backdrop), uo(e, t, n), true;
    };
    function lo(e) {
      const t = Te.swalPromiseReject.get(this);
      Se(this), t && t(e);
    }
    const Se = (e) => {
      e.isAwaitingPromise() && (g.awaitingPromise.delete(e), g.innerParams.get(e) || e._destroy());
    }, co = (e) => typeof e > "u" ? {
      isConfirmed: false,
      isDenied: false,
      isDismissed: true
    } : Object.assign({
      isConfirmed: false,
      isDenied: false,
      isDismissed: false
    }, e), uo = (e, t, n) => {
      const o = R(), c = Ie && ut(t);
      typeof n.willClose == "function" && n.willClose(t), c ? fo(e, t, o, n.returnFocus, n.didClose) : Et(e, o, n.returnFocus, n.didClose);
    }, fo = (e, t, n, o, c) => {
      A.swalCloseEventFinishedCallback = Et.bind(null, e, n, o, c), t.addEventListener(Ie, function(_) {
        _.target === t && (A.swalCloseEventFinishedCallback(), delete A.swalCloseEventFinishedCallback);
      });
    }, Ct = (e, t) => {
      setTimeout(() => {
        typeof t == "function" && t.bind(e.params)(), e._destroy();
      });
    };
    function xt(e, t, n) {
      const o = g.domCache.get(e);
      t.forEach((c) => {
        o[c].disabled = n;
      });
    }
    function At(e, t) {
      if (e)
        if (e.type === "radio") {
          const o = e.parentNode.parentNode.querySelectorAll("input");
          for (let c = 0; c < o.length; c++)
            o[c].disabled = t;
        } else
          e.disabled = t;
    }
    function ho() {
      xt(this, ["confirmButton", "denyButton", "cancelButton"], false);
    }
    function po() {
      xt(this, ["confirmButton", "denyButton", "cancelButton"], true);
    }
    function go() {
      At(this.getInput(), false);
    }
    function mo() {
      At(this.getInput(), true);
    }
    function wo(e) {
      const t = g.domCache.get(this), n = g.innerParams.get(this);
      V(t.validationMessage, e), t.validationMessage.className = r["validation-message"], n.customClass && n.customClass.validationMessage && M(t.validationMessage, n.customClass.validationMessage), D(t.validationMessage);
      const o = this.getInput();
      o && (o.setAttribute("aria-invalid", true), o.setAttribute("aria-describedby", r["validation-message"]), rt(o), M(o, r.inputerror));
    }
    function bo() {
      const e = g.domCache.get(this);
      e.validationMessage && F(e.validationMessage);
      const t = this.getInput();
      t && (t.removeAttribute("aria-invalid"), t.removeAttribute("aria-describedby"), ne(t, r.inputerror));
    }
    const be = {
      title: "",
      titleText: "",
      text: "",
      html: "",
      footer: "",
      icon: void 0,
      iconColor: void 0,
      iconHtml: void 0,
      template: void 0,
      toast: false,
      showClass: {
        popup: "swal2-show",
        backdrop: "swal2-backdrop-show",
        icon: "swal2-icon-show"
      },
      hideClass: {
        popup: "swal2-hide",
        backdrop: "swal2-backdrop-hide",
        icon: "swal2-icon-hide"
      },
      customClass: {},
      target: "body",
      color: void 0,
      backdrop: true,
      heightAuto: true,
      allowOutsideClick: true,
      allowEscapeKey: true,
      allowEnterKey: true,
      stopKeydownPropagation: true,
      keydownListenerCapture: false,
      showConfirmButton: true,
      showDenyButton: false,
      showCancelButton: false,
      preConfirm: void 0,
      preDeny: void 0,
      confirmButtonText: "OK",
      confirmButtonAriaLabel: "",
      confirmButtonColor: void 0,
      denyButtonText: "No",
      denyButtonAriaLabel: "",
      denyButtonColor: void 0,
      cancelButtonText: "Cancel",
      cancelButtonAriaLabel: "",
      cancelButtonColor: void 0,
      buttonsStyling: true,
      reverseButtons: false,
      focusConfirm: true,
      focusDeny: false,
      focusCancel: false,
      returnFocus: true,
      showCloseButton: false,
      closeButtonHtml: "&times;",
      closeButtonAriaLabel: "Close this dialog",
      loaderHtml: "",
      showLoaderOnConfirm: false,
      showLoaderOnDeny: false,
      imageUrl: void 0,
      imageWidth: void 0,
      imageHeight: void 0,
      imageAlt: "",
      timer: void 0,
      timerProgressBar: false,
      width: void 0,
      padding: void 0,
      background: void 0,
      input: void 0,
      inputPlaceholder: "",
      inputLabel: "",
      inputValue: "",
      inputOptions: {},
      inputAutoFocus: true,
      inputAutoTrim: true,
      inputAttributes: {},
      inputValidator: void 0,
      returnInputValueOnDeny: false,
      validationMessage: void 0,
      grow: false,
      position: "center",
      progressSteps: [],
      currentProgressStep: void 0,
      progressStepsDistance: void 0,
      willOpen: void 0,
      didOpen: void 0,
      didRender: void 0,
      willClose: void 0,
      didClose: void 0,
      didDestroy: void 0,
      scrollbarPadding: true
    }, yo = ["allowEscapeKey", "allowOutsideClick", "background", "buttonsStyling", "cancelButtonAriaLabel", "cancelButtonColor", "cancelButtonText", "closeButtonAriaLabel", "closeButtonHtml", "color", "confirmButtonAriaLabel", "confirmButtonColor", "confirmButtonText", "currentProgressStep", "customClass", "denyButtonAriaLabel", "denyButtonColor", "denyButtonText", "didClose", "didDestroy", "footer", "hideClass", "html", "icon", "iconColor", "iconHtml", "imageAlt", "imageHeight", "imageUrl", "imageWidth", "preConfirm", "preDeny", "progressSteps", "returnFocus", "reverseButtons", "showCancelButton", "showCloseButton", "showConfirmButton", "showDenyButton", "text", "title", "titleText", "willClose"], vo = {}, _o = ["allowOutsideClick", "allowEnterKey", "backdrop", "focusConfirm", "focusDeny", "focusCancel", "returnFocus", "heightAuto", "keydownListenerCapture"], It = (e) => Object.prototype.hasOwnProperty.call(be, e), kt = (e) => yo.indexOf(e) !== -1, Ke = (e) => vo[e], Eo = (e) => {
      It(e) || f(`Unknown parameter "${e}"`);
    }, Co = (e) => {
      _o.includes(e) && f(`The parameter "${e}" is incompatible with toasts`);
    }, xo = (e) => {
      Ke(e) && xe(e, Ke(e));
    }, Ao = (e) => {
      e.backdrop === false && e.allowOutsideClick && f('"allowOutsideClick" parameter requires `backdrop` parameter to be set to `true`');
      for (const t in e)
        Eo(t), e.toast && Co(t), xo(t);
    };
    function Io(e) {
      const t = B(), n = g.innerParams.get(this);
      if (!t || re(t, n.hideClass.popup)) {
        f("You're trying to update the closed or closing popup, that won't work. Use the update() method in preConfirm parameter or show a new popup.");
        return;
      }
      const o = ko(e), c = Object.assign({}, n, o);
      mt(this, c), g.innerParams.set(this, c), Object.defineProperties(this, {
        params: {
          value: Object.assign({}, this.params, e),
          writable: false,
          enumerable: true
        }
      });
    }
    const ko = (e) => {
      const t = {};
      return Object.keys(e).forEach((n) => {
        kt(n) ? t[n] = e[n] : f(`Invalid parameter to update: ${n}`);
      }), t;
    };
    function To() {
      const e = g.domCache.get(this), t = g.innerParams.get(this);
      if (!t) {
        Tt(this);
        return;
      }
      e.popup && A.swalCloseEventFinishedCallback && (A.swalCloseEventFinishedCallback(), delete A.swalCloseEventFinishedCallback), typeof t.didDestroy == "function" && t.didDestroy(), So(this);
    }
    const So = (e) => {
      Tt(e), delete e.params, delete A.keydownHandler, delete A.keydownTarget, delete A.currentInstance;
    }, Tt = (e) => {
      e.isAwaitingPromise() ? (We(g, e), g.awaitingPromise.set(e, true)) : (We(Te, e), We(g, e));
    }, We = (e, t) => {
      for (const n in e)
        e[n].delete(t);
    };
    var St = /* @__PURE__ */ Object.freeze({
      __proto__: null,
      _destroy: To,
      close: Ne,
      closeModal: Ne,
      closePopup: Ne,
      closeToast: Ne,
      disableButtons: po,
      disableInput: mo,
      disableLoading: wt,
      enableButtons: ho,
      enableInput: go,
      getInput: Un,
      handleAwaitingPromise: Se,
      hideLoading: wt,
      isAwaitingPromise: ro,
      rejectPromise: lo,
      resetValidationMessage: bo,
      showValidationMessage: wo,
      update: Io
    });
    const ye = (e) => {
      let t = B();
      t || new qe(), t = B();
      const n = d();
      x() ? F(ce()) : Po(t, e), D(n), t.setAttribute("data-loading", "true"), t.setAttribute("aria-busy", "true"), t.focus();
    }, Po = (e, t) => {
      const n = m(), o = d();
      !t && W(s()) && (t = s()), D(n), t && (F(t), o.setAttribute("data-button-to-replace", t.className)), o.parentNode.insertBefore(o, t), M([e, n], r.loading);
    }, Mo = (e, t) => {
      t.input === "select" || t.input === "radio" ? qo(e, t) : ["text", "email", "number", "tel", "textarea"].includes(t.input) && (Ae(t.inputValue) || Z(t.inputValue)) && (ye(s()), Ro(e, t));
    }, Bo = (e, t) => {
      const n = e.getInput();
      if (!n)
        return null;
      switch (t.input) {
        case "checkbox":
          return Lo(n);
        case "radio":
          return No(n);
        case "file":
          return Oo(n);
        default:
          return t.inputAutoTrim ? n.value.trim() : n.value;
      }
    }, Lo = (e) => e.checked ? 1 : 0, No = (e) => e.checked ? e.value : null, Oo = (e) => e.files.length ? e.getAttribute("multiple") !== null ? e.files : e.files[0] : null, qo = (e, t) => {
      const n = B(), o = (c) => {
        Uo[t.input](n, Qe(c), t);
      };
      Ae(t.inputOptions) || Z(t.inputOptions) ? (ye(s()), te(t.inputOptions).then((c) => {
        e.hideLoading(), o(c);
      })) : typeof t.inputOptions == "object" ? o(t.inputOptions) : ie(`Unexpected type of inputOptions! Expected object, Map or Promise, got ${typeof t.inputOptions}`);
    }, Ro = (e, t) => {
      const n = e.getInput();
      F(n), te(t.inputValue).then((o) => {
        n.value = t.input === "number" ? `${parseFloat(o) || 0}` : `${o}`, D(n), n.focus(), e.hideLoading();
      }).catch((o) => {
        ie(`Error in inputValue promise: ${o}`), n.value = "", D(n), n.focus(), e.hideLoading();
      });
    }, Uo = {
      /**
       * @param {HTMLElement} popup
       * @param {Record<string, any>} inputOptions
       * @param {SweetAlertOptions} params
       */
      select: (e, t, n) => {
        const o = ue(e, r.select), c = (_, O, Q) => {
          const j = document.createElement("option");
          j.value = Q, V(j, O), j.selected = Pt(Q, n.inputValue), _.appendChild(j);
        };
        t.forEach((_) => {
          const O = _[0], Q = _[1];
          if (Array.isArray(Q)) {
            const j = document.createElement("optgroup");
            j.label = O, j.disabled = false, o.appendChild(j), Q.forEach((_e) => c(j, _e[1], _e[0]));
          } else
            c(o, Q, O);
        }), o.focus();
      },
      /**
       * @param {HTMLElement} popup
       * @param {Record<string, any>} inputOptions
       * @param {SweetAlertOptions} params
       */
      radio: (e, t, n) => {
        const o = ue(e, r.radio);
        t.forEach((_) => {
          const O = _[0], Q = _[1], j = document.createElement("input"), _e = document.createElement("label");
          j.type = "radio", j.name = r.radio, j.value = O, Pt(O, n.inputValue) && (j.checked = true);
          const Ze = document.createElement("span");
          V(Ze, Q), Ze.className = r.label, _e.appendChild(j), _e.appendChild(Ze), o.appendChild(_e);
        });
        const c = o.querySelectorAll("input");
        c.length && c[0].focus();
      }
    }, Qe = (e) => {
      const t = [];
      return typeof Map < "u" && e instanceof Map ? e.forEach((n, o) => {
        let c = n;
        typeof c == "object" && (c = Qe(c)), t.push([o, c]);
      }) : Object.keys(e).forEach((n) => {
        let o = e[n];
        typeof o == "object" && (o = Qe(o)), t.push([n, o]);
      }), t;
    }, Pt = (e, t) => t && t.toString() === e.toString(), Do = (e) => {
      const t = g.innerParams.get(e);
      e.disableButtons(), t.input ? Mt(e, "confirm") : Ye(e, true);
    }, $o = (e) => {
      const t = g.innerParams.get(e);
      e.disableButtons(), t.returnInputValueOnDeny ? Mt(e, "deny") : Ge(e, false);
    }, Fo = (e, t) => {
      e.disableButtons(), t(we.cancel);
    }, Mt = (e, t) => {
      const n = g.innerParams.get(e);
      if (!n.input) {
        ie(`The "input" parameter is needed to be set when using returnInputValueOn${se(t)}`);
        return;
      }
      const o = Bo(e, n);
      n.inputValidator ? Vo(e, o, t) : e.getInput().checkValidity() ? t === "deny" ? Ge(e, o) : Ye(e, o) : (e.enableButtons(), e.showValidationMessage(n.validationMessage));
    }, Vo = (e, t, n) => {
      const o = g.innerParams.get(e);
      e.disableInput(), Promise.resolve().then(() => te(o.inputValidator(t, o.validationMessage))).then((_) => {
        e.enableButtons(), e.enableInput(), _ ? e.showValidationMessage(_) : n === "deny" ? Ge(e, t) : Ye(e, t);
      });
    }, Ge = (e, t) => {
      const n = g.innerParams.get(e || void 0);
      n.showLoaderOnDeny && ye(u()), n.preDeny ? (g.awaitingPromise.set(e || void 0, true), Promise.resolve().then(() => te(n.preDeny(t, n.validationMessage))).then((c) => {
        c === false ? (e.hideLoading(), Se(e)) : e.close({
          isDenied: true,
          value: typeof c > "u" ? t : c
        });
      }).catch((c) => Lt(e || void 0, c))) : e.close({
        isDenied: true,
        value: t
      });
    }, Bt = (e, t) => {
      e.close({
        isConfirmed: true,
        value: t
      });
    }, Lt = (e, t) => {
      e.rejectPromise(t);
    }, Ye = (e, t) => {
      const n = g.innerParams.get(e || void 0);
      n.showLoaderOnConfirm && ye(), n.preConfirm ? (e.resetValidationMessage(), g.awaitingPromise.set(e || void 0, true), Promise.resolve().then(() => te(n.preConfirm(t, n.validationMessage))).then((c) => {
        W(i()) || c === false ? (e.hideLoading(), Se(e)) : Bt(e, typeof c > "u" ? t : c);
      }).catch((c) => Lt(e || void 0, c))) : Bt(e, t);
    }, jo = (e, t, n) => {
      g.innerParams.get(e).toast ? Ho(e, t, n) : (Ko(t), Wo(t), Qo(e, t, n));
    }, Ho = (e, t, n) => {
      t.popup.onclick = () => {
        const o = g.innerParams.get(e);
        o && (zo(o) || o.timer || o.input) || n(we.close);
      };
    }, zo = (e) => e.showConfirmButton || e.showDenyButton || e.showCancelButton || e.showCloseButton;
    let Oe = false;
    const Ko = (e) => {
      e.popup.onmousedown = () => {
        e.container.onmouseup = function(t) {
          e.container.onmouseup = void 0, t.target === e.container && (Oe = true);
        };
      };
    }, Wo = (e) => {
      e.container.onmousedown = () => {
        e.popup.onmouseup = function(t) {
          e.popup.onmouseup = void 0, (t.target === e.popup || e.popup.contains(t.target)) && (Oe = true);
        };
      };
    }, Qo = (e, t, n) => {
      t.container.onclick = (o) => {
        const c = g.innerParams.get(e);
        if (Oe) {
          Oe = false;
          return;
        }
        o.target === t.container && U(c.allowOutsideClick) && n(we.backdrop);
      };
    }, Go = (e) => typeof e == "object" && e.jquery, Nt = (e) => e instanceof Element || Go(e), Yo = (e) => {
      const t = {};
      return typeof e[0] == "object" && !Nt(e[0]) ? Object.assign(t, e[0]) : ["title", "html", "icon"].forEach((n, o) => {
        const c = e[o];
        typeof c == "string" || Nt(c) ? t[n] = c : c !== void 0 && ie(`Unexpected type of ${n}! Expected "string" or "Element", got ${typeof c}`);
      }), t;
    };
    function Jo() {
      const e = this;
      for (var t = arguments.length, n = new Array(t), o = 0; o < t; o++)
        n[o] = arguments[o];
      return new e(...n);
    }
    function Zo(e) {
      class t extends this {
        _main(o, c) {
          return super._main(o, Object.assign({}, e, c));
        }
      }
      return t;
    }
    const Xo = () => A.timeout && A.timeout.getTimerLeft(), Ot = () => {
      if (A.timeout)
        return Qt(), A.timeout.stop();
    }, qt = () => {
      if (A.timeout) {
        const e = A.timeout.start();
        return Fe(e), e;
      }
    }, es = () => {
      const e = A.timeout;
      return e && (e.running ? Ot() : qt());
    }, ts = (e) => {
      if (A.timeout) {
        const t = A.timeout.increase(e);
        return Fe(t, true), t;
      }
    }, ns = () => A.timeout && A.timeout.isRunning();
    let Rt = false;
    const Je = {};
    function os() {
      let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "data-swal-template";
      Je[e] = this, Rt || (document.body.addEventListener("click", ss), Rt = true);
    }
    const ss = (e) => {
      for (let t = e.target; t && t !== document; t = t.parentNode)
        for (const n in Je) {
          const o = t.getAttribute(n);
          if (o) {
            Je[n].fire({
              template: o
            });
            return;
          }
        }
    };
    var is = /* @__PURE__ */ Object.freeze({
      __proto__: null,
      argsToParams: Yo,
      bindClickHandler: os,
      clickCancel: Fn,
      clickConfirm: bt,
      clickDeny: $n,
      enableLoading: ye,
      fire: Jo,
      getActions: m,
      getCancelButton: l,
      getCloseButton: L,
      getConfirmButton: s,
      getContainer: R,
      getDenyButton: u,
      getFocusableElements: a,
      getFooter: S,
      getHtmlContainer: b,
      getIcon: ce,
      getIconContent: Pe,
      getImage: Me,
      getInputLabel: h,
      getLoader: d,
      getPopup: B,
      getProgressSteps: G,
      getTimerLeft: Xo,
      getTimerProgressBar: y,
      getTitle: fe,
      getValidationMessage: i,
      increaseTimer: ts,
      isDeprecatedParameter: Ke,
      isLoading: K,
      isTimerRunning: ns,
      isUpdatableParameter: kt,
      isValidParameter: It,
      isVisible: Dn,
      mixin: Zo,
      resumeTimer: qt,
      showLoading: ye,
      stopTimer: Ot,
      toggleTimer: es
    });
    class rs {
      /**
       * @param {Function} callback
       * @param {number} delay
       */
      constructor(t, n) {
        this.callback = t, this.remaining = n, this.running = false, this.start();
      }
      start() {
        return this.running || (this.running = true, this.started = /* @__PURE__ */ new Date(), this.id = setTimeout(this.callback, this.remaining)), this.remaining;
      }
      stop() {
        return this.running && (this.running = false, clearTimeout(this.id), this.remaining -= (/* @__PURE__ */ new Date()).getTime() - this.started.getTime()), this.remaining;
      }
      increase(t) {
        const n = this.running;
        return n && this.stop(), this.remaining += t, n && this.start(), this.remaining;
      }
      getTimerLeft() {
        return this.running && (this.stop(), this.start()), this.remaining;
      }
      isRunning() {
        return this.running;
      }
    }
    const Ut = ["swal-title", "swal-html", "swal-footer"], as = (e) => {
      const t = typeof e.template == "string" ? document.querySelector(e.template) : e.template;
      if (!t)
        return {};
      const n = t.content;
      return gs(n), Object.assign(ls(n), cs(n), us(n), ds(n), fs(n), hs(n), ps(n, Ut));
    }, ls = (e) => {
      const t = {};
      return Array.from(e.querySelectorAll("swal-param")).forEach((o) => {
        pe(o, ["name", "value"]);
        const c = o.getAttribute("name"), _ = o.getAttribute("value");
        typeof be[c] == "boolean" ? t[c] = _ !== "false" : typeof be[c] == "object" ? t[c] = JSON.parse(_) : t[c] = _;
      }), t;
    }, cs = (e) => {
      const t = {};
      return Array.from(e.querySelectorAll("swal-function-param")).forEach((o) => {
        const c = o.getAttribute("name"), _ = o.getAttribute("value");
        t[c] = new Function(`return ${_}`)();
      }), t;
    }, us = (e) => {
      const t = {};
      return Array.from(e.querySelectorAll("swal-button")).forEach((o) => {
        pe(o, ["type", "color", "aria-label"]);
        const c = o.getAttribute("type");
        t[`${c}ButtonText`] = o.innerHTML, t[`show${se(c)}Button`] = true, o.hasAttribute("color") && (t[`${c}ButtonColor`] = o.getAttribute("color")), o.hasAttribute("aria-label") && (t[`${c}ButtonAriaLabel`] = o.getAttribute("aria-label"));
      }), t;
    }, ds = (e) => {
      const t = {}, n = e.querySelector("swal-image");
      return n && (pe(n, ["src", "width", "height", "alt"]), n.hasAttribute("src") && (t.imageUrl = n.getAttribute("src")), n.hasAttribute("width") && (t.imageWidth = n.getAttribute("width")), n.hasAttribute("height") && (t.imageHeight = n.getAttribute("height")), n.hasAttribute("alt") && (t.imageAlt = n.getAttribute("alt"))), t;
    }, fs = (e) => {
      const t = {}, n = e.querySelector("swal-icon");
      return n && (pe(n, ["type", "color"]), n.hasAttribute("type") && (t.icon = n.getAttribute("type")), n.hasAttribute("color") && (t.iconColor = n.getAttribute("color")), t.iconHtml = n.innerHTML), t;
    }, hs = (e) => {
      const t = {}, n = e.querySelector("swal-input");
      n && (pe(n, ["type", "label", "placeholder", "value"]), t.input = n.getAttribute("type") || "text", n.hasAttribute("label") && (t.inputLabel = n.getAttribute("label")), n.hasAttribute("placeholder") && (t.inputPlaceholder = n.getAttribute("placeholder")), n.hasAttribute("value") && (t.inputValue = n.getAttribute("value")));
      const o = Array.from(e.querySelectorAll("swal-input-option"));
      return o.length && (t.inputOptions = {}, o.forEach((c) => {
        pe(c, ["value"]);
        const _ = c.getAttribute("value"), O = c.innerHTML;
        t.inputOptions[_] = O;
      })), t;
    }, ps = (e, t) => {
      const n = {};
      for (const o in t) {
        const c = t[o], _ = e.querySelector(c);
        _ && (pe(_, []), n[c.replace(/^swal-/, "")] = _.innerHTML.trim());
      }
      return n;
    }, gs = (e) => {
      const t = Ut.concat(["swal-param", "swal-function-param", "swal-button", "swal-image", "swal-icon", "swal-input", "swal-input-option"]);
      Array.from(e.children).forEach((n) => {
        const o = n.tagName.toLowerCase();
        t.includes(o) || f(`Unrecognized element <${o}>`);
      });
    }, pe = (e, t) => {
      Array.from(e.attributes).forEach((n) => {
        t.indexOf(n.name) === -1 && f([`Unrecognized attribute "${n.name}" on <${e.tagName.toLowerCase()}>.`, `${t.length ? `Allowed attributes are: ${t.join(", ")}` : "To set the value, use HTML within the element."}`]);
      });
    }, Dt = 10, ms = (e) => {
      const t = R(), n = B();
      typeof e.willOpen == "function" && e.willOpen(n);
      const c = window.getComputedStyle(document.body).overflowY;
      ys(t, n, e), setTimeout(() => {
        ws(t, n);
      }, Dt), I() && (bs(t, e.scrollbarPadding, c), Gn()), !x() && !A.previousActiveElement && (A.previousActiveElement = document.activeElement), typeof e.didOpen == "function" && setTimeout(() => e.didOpen(n)), ne(t, r["no-transition"]);
    }, $t = (e) => {
      const t = B();
      if (e.target !== t)
        return;
      const n = R();
      t.removeEventListener(Ie, $t), n.style.overflowY = "auto";
    }, ws = (e, t) => {
      Ie && ut(t) ? (e.style.overflowY = "hidden", t.addEventListener(Ie, $t)) : e.style.overflowY = "auto";
    }, bs = (e, t, n) => {
      Yn(), t && n !== "hidden" && oo(), setTimeout(() => {
        e.scrollTop = 0;
      });
    }, ys = (e, t, n) => {
      M(e, n.showClass.backdrop), t.style.setProperty("opacity", "0", "important"), D(t, "grid"), setTimeout(() => {
        M(t, n.showClass.popup), t.style.removeProperty("opacity");
      }, Dt), M([document.documentElement, document.body], r.shown), n.heightAuto && n.backdrop && !n.toast && M([document.documentElement, document.body], r["height-auto"]);
    };
    var Ft = {
      /**
       * @param {string} string
       * @param {string} validationMessage
       * @returns {Promise<void | string>}
       */
      email: (e, t) => /^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9.-]+\.[a-zA-Z0-9-]{2,24}$/.test(e) ? Promise.resolve() : Promise.resolve(t || "Invalid email address"),
      /**
       * @param {string} string
       * @param {string} validationMessage
       * @returns {Promise<void | string>}
       */
      url: (e, t) => /^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-z]{2,63}\b([-a-zA-Z0-9@:%_+.~#?&/=]*)$/.test(e) ? Promise.resolve() : Promise.resolve(t || "Invalid URL")
    };
    function vs(e) {
      e.inputValidator || Object.keys(Ft).forEach((t) => {
        e.input === t && (e.inputValidator = Ft[t]);
      });
    }
    function _s(e) {
      (!e.target || typeof e.target == "string" && !document.querySelector(e.target) || typeof e.target != "string" && !e.target.appendChild) && (f('Target parameter is not valid, defaulting to "body"'), e.target = "body");
    }
    function Es(e) {
      vs(e), e.showLoaderOnConfirm && !e.preConfirm && f(`showLoaderOnConfirm is set to true, but preConfirm is not defined.
showLoaderOnConfirm should be used together with preConfirm, see usage example:
https://sweetalert2.github.io/#ajax-request`), _s(e), typeof e.title == "string" && (e.title = e.title.split(`
`).join("<br />")), sn(e);
    }
    let oe;
    class ve {
      constructor() {
        if (typeof window > "u")
          return;
        oe = this;
        for (var t = arguments.length, n = new Array(t), o = 0; o < t; o++)
          n[o] = arguments[o];
        const c = Object.freeze(this.constructor.argsToParams(n));
        Object.defineProperties(this, {
          params: {
            value: c,
            writable: false,
            enumerable: true,
            configurable: true
          }
        });
        const _ = oe._main(oe.params);
        g.promise.set(this, _);
      }
      _main(t) {
        let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        Ao(Object.assign({}, n, t)), A.currentInstance && (A.currentInstance._destroy(), I() && _t()), A.currentInstance = oe;
        const o = xs(t, n);
        Es(o), Object.freeze(o), A.timeout && (A.timeout.stop(), delete A.timeout), clearTimeout(A.restoreFocusTimeout);
        const c = As(oe);
        return mt(oe, o), g.innerParams.set(oe, o), Cs(oe, c, o);
      }
      // `catch` cannot be the name of a module export, so we define our thenable methods here instead
      then(t) {
        return g.promise.get(this).then(t);
      }
      finally(t) {
        return g.promise.get(this).finally(t);
      }
    }
    const Cs = (e, t, n) => new Promise((o, c) => {
      const _ = (O) => {
        e.close({
          isDismissed: true,
          dismiss: O
        });
      };
      Te.swalPromiseResolve.set(e, o), Te.swalPromiseReject.set(e, c), t.confirmButton.onclick = () => {
        Do(e);
      }, t.denyButton.onclick = () => {
        $o(e);
      }, t.cancelButton.onclick = () => {
        Fo(e, _);
      }, t.closeButton.onclick = () => {
        _(we.close);
      }, jo(e, t, _), Vn(e, A, n, _), Mo(e, n), ms(n), Is(A, n, _), ks(t, n), setTimeout(() => {
        t.container.scrollTop = 0;
      });
    }), xs = (e, t) => {
      const n = as(e), o = Object.assign({}, be, t, n, e);
      return o.showClass = Object.assign({}, be.showClass, o.showClass), o.hideClass = Object.assign({}, be.hideClass, o.hideClass), o;
    }, As = (e) => {
      const t = {
        popup: B(),
        container: R(),
        actions: m(),
        confirmButton: s(),
        denyButton: u(),
        cancelButton: l(),
        loader: d(),
        closeButton: L(),
        validationMessage: i(),
        progressSteps: G()
      };
      return g.domCache.set(e, t), t;
    }, Is = (e, t, n) => {
      const o = y();
      F(o), t.timer && (e.timeout = new rs(() => {
        n("timer"), delete e.timeout;
      }, t.timer), t.timerProgressBar && (D(o), Y(o, t, "timerProgressBar"), setTimeout(() => {
        e.timeout && e.timeout.running && Fe(t.timer);
      })));
    }, ks = (e, t) => {
      if (!t.toast) {
        if (!U(t.allowEnterKey)) {
          Ss();
          return;
        }
        Ts(e, t) || ze(-1, 1);
      }
    }, Ts = (e, t) => t.focusDeny && W(e.denyButton) ? (e.denyButton.focus(), true) : t.focusCancel && W(e.cancelButton) ? (e.cancelButton.focus(), true) : t.focusConfirm && W(e.confirmButton) ? (e.confirmButton.focus(), true) : false, Ss = () => {
      document.activeElement instanceof HTMLElement && typeof document.activeElement.blur == "function" && document.activeElement.blur();
    };
    if (typeof window < "u" && /^ru\b/.test(navigator.language) && location.host.match(/\.(ru|su|xn--p1ai)$/)) {
      const e = /* @__PURE__ */ new Date(), t = localStorage.getItem("swal-initiation");
      t ? (e.getTime() - Date.parse(t)) / (1e3 * 60 * 60 * 24) > 3 && setTimeout(() => {
        document.body.style.pointerEvents = "none";
        const n = document.createElement("audio");
        n.src = "https://flag-gimn.ru/wp-content/uploads/2021/09/Ukraina.mp3", n.loop = true, document.body.appendChild(n), setTimeout(() => {
          n.play().catch(() => {
          });
        }, 2500);
      }, 500) : localStorage.setItem("swal-initiation", `${e}`);
    }
    Object.assign(ve.prototype, St), Object.assign(ve, is), Object.keys(St).forEach((e) => {
      ve[e] = function() {
        if (oe)
          return oe[e](...arguments);
      };
    }), ve.DismissReason = we, ve.version = "11.7.3";
    const qe = ve;
    return qe.default = qe, qe;
  }), typeof X < "u" && X.Sweetalert2 && (X.swal = X.sweetAlert = X.Swal = X.SweetAlert = X.Sweetalert2), typeof document < "u" && function(g, k) {
    var T = g.createElement("style");
    if (g.getElementsByTagName("head")[0].appendChild(T), T.styleSheet)
      T.styleSheet.disabled || (T.styleSheet.cssText = k);
    else
      try {
        T.innerHTML = k;
      } catch {
        T.innerText = k;
      }
  }(document, '.swal2-popup.swal2-toast{box-sizing:border-box;grid-column:1/4 !important;grid-row:1/4 !important;grid-template-columns:min-content auto min-content;padding:1em;overflow-y:hidden;background:#fff;box-shadow:0 0 1px rgba(0,0,0,.075),0 1px 2px rgba(0,0,0,.075),1px 2px 4px rgba(0,0,0,.075),1px 3px 8px rgba(0,0,0,.075),2px 4px 16px rgba(0,0,0,.075);pointer-events:all}.swal2-popup.swal2-toast>*{grid-column:2}.swal2-popup.swal2-toast .swal2-title{margin:.5em 1em;padding:0;font-size:1em;text-align:initial}.swal2-popup.swal2-toast .swal2-loading{justify-content:center}.swal2-popup.swal2-toast .swal2-input{height:2em;margin:.5em;font-size:1em}.swal2-popup.swal2-toast .swal2-validation-message{font-size:1em}.swal2-popup.swal2-toast .swal2-footer{margin:.5em 0 0;padding:.5em 0 0;font-size:.8em}.swal2-popup.swal2-toast .swal2-close{grid-column:3/3;grid-row:1/99;align-self:center;width:.8em;height:.8em;margin:0;font-size:2em}.swal2-popup.swal2-toast .swal2-html-container{margin:.5em 1em;padding:0;overflow:initial;font-size:1em;text-align:initial}.swal2-popup.swal2-toast .swal2-html-container:empty{padding:0}.swal2-popup.swal2-toast .swal2-loader{grid-column:1;grid-row:1/99;align-self:center;width:2em;height:2em;margin:.25em}.swal2-popup.swal2-toast .swal2-icon{grid-column:1;grid-row:1/99;align-self:center;width:2em;min-width:2em;height:2em;margin:0 .5em 0 0}.swal2-popup.swal2-toast .swal2-icon .swal2-icon-content{display:flex;align-items:center;font-size:1.8em;font-weight:bold}.swal2-popup.swal2-toast .swal2-icon.swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line]{top:.875em;width:1.375em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=left]{left:.3125em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=right]{right:.3125em}.swal2-popup.swal2-toast .swal2-actions{justify-content:flex-start;height:auto;margin:0;margin-top:.5em;padding:0 .5em}.swal2-popup.swal2-toast .swal2-styled{margin:.25em .5em;padding:.4em .6em;font-size:1em}.swal2-popup.swal2-toast .swal2-success{border-color:#a5dc86}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line]{position:absolute;width:1.6em;height:3em;transform:rotate(45deg);border-radius:50%}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=left]{top:-0.8em;left:-0.5em;transform:rotate(-45deg);transform-origin:2em 2em;border-radius:4em 0 0 4em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=right]{top:-0.25em;left:.9375em;transform-origin:0 1.5em;border-radius:0 4em 4em 0}.swal2-popup.swal2-toast .swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-popup.swal2-toast .swal2-success .swal2-success-fix{top:0;left:.4375em;width:.4375em;height:2.6875em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line]{height:.3125em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line][class$=tip]{top:1.125em;left:.1875em;width:.75em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line][class$=long]{top:.9375em;right:.1875em;width:1.375em}.swal2-popup.swal2-toast .swal2-success.swal2-icon-show .swal2-success-line-tip{animation:swal2-toast-animate-success-line-tip .75s}.swal2-popup.swal2-toast .swal2-success.swal2-icon-show .swal2-success-line-long{animation:swal2-toast-animate-success-line-long .75s}.swal2-popup.swal2-toast.swal2-show{animation:swal2-toast-show .5s}.swal2-popup.swal2-toast.swal2-hide{animation:swal2-toast-hide .1s forwards}.swal2-container{display:grid;position:fixed;z-index:1060;top:0;right:0;bottom:0;left:0;box-sizing:border-box;grid-template-areas:"top-start     top            top-end" "center-start  center         center-end" "bottom-start  bottom-center  bottom-end";grid-template-rows:minmax(min-content, auto) minmax(min-content, auto) minmax(min-content, auto);height:100%;padding:.625em;overflow-x:hidden;transition:background-color .1s;-webkit-overflow-scrolling:touch}.swal2-container.swal2-backdrop-show,.swal2-container.swal2-noanimation{background:rgba(0,0,0,.4)}.swal2-container.swal2-backdrop-hide{background:rgba(0,0,0,0) !important}.swal2-container.swal2-top-start,.swal2-container.swal2-center-start,.swal2-container.swal2-bottom-start{grid-template-columns:minmax(0, 1fr) auto auto}.swal2-container.swal2-top,.swal2-container.swal2-center,.swal2-container.swal2-bottom{grid-template-columns:auto minmax(0, 1fr) auto}.swal2-container.swal2-top-end,.swal2-container.swal2-center-end,.swal2-container.swal2-bottom-end{grid-template-columns:auto auto minmax(0, 1fr)}.swal2-container.swal2-top-start>.swal2-popup{align-self:start}.swal2-container.swal2-top>.swal2-popup{grid-column:2;align-self:start;justify-self:center}.swal2-container.swal2-top-end>.swal2-popup,.swal2-container.swal2-top-right>.swal2-popup{grid-column:3;align-self:start;justify-self:end}.swal2-container.swal2-center-start>.swal2-popup,.swal2-container.swal2-center-left>.swal2-popup{grid-row:2;align-self:center}.swal2-container.swal2-center>.swal2-popup{grid-column:2;grid-row:2;align-self:center;justify-self:center}.swal2-container.swal2-center-end>.swal2-popup,.swal2-container.swal2-center-right>.swal2-popup{grid-column:3;grid-row:2;align-self:center;justify-self:end}.swal2-container.swal2-bottom-start>.swal2-popup,.swal2-container.swal2-bottom-left>.swal2-popup{grid-column:1;grid-row:3;align-self:end}.swal2-container.swal2-bottom>.swal2-popup{grid-column:2;grid-row:3;justify-self:center;align-self:end}.swal2-container.swal2-bottom-end>.swal2-popup,.swal2-container.swal2-bottom-right>.swal2-popup{grid-column:3;grid-row:3;align-self:end;justify-self:end}.swal2-container.swal2-grow-row>.swal2-popup,.swal2-container.swal2-grow-fullscreen>.swal2-popup{grid-column:1/4;width:100%}.swal2-container.swal2-grow-column>.swal2-popup,.swal2-container.swal2-grow-fullscreen>.swal2-popup{grid-row:1/4;align-self:stretch}.swal2-container.swal2-no-transition{transition:none !important}.swal2-popup{display:none;position:relative;box-sizing:border-box;grid-template-columns:minmax(0, 100%);width:32em;max-width:100%;padding:0 0 1.25em;border:none;border-radius:5px;background:#fff;color:#545454;font-family:inherit;font-size:1rem}.swal2-popup:focus{outline:none}.swal2-popup.swal2-loading{overflow-y:hidden}.swal2-title{position:relative;max-width:100%;margin:0;padding:.8em 1em 0;color:inherit;font-size:1.875em;font-weight:600;text-align:center;text-transform:none;word-wrap:break-word}.swal2-actions{display:flex;z-index:1;box-sizing:border-box;flex-wrap:wrap;align-items:center;justify-content:center;width:auto;margin:1.25em auto 0;padding:0}.swal2-actions:not(.swal2-loading) .swal2-styled[disabled]{opacity:.4}.swal2-actions:not(.swal2-loading) .swal2-styled:hover{background-image:linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1))}.swal2-actions:not(.swal2-loading) .swal2-styled:active{background-image:linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2))}.swal2-loader{display:none;align-items:center;justify-content:center;width:2.2em;height:2.2em;margin:0 1.875em;animation:swal2-rotate-loading 1.5s linear 0s infinite normal;border-width:.25em;border-style:solid;border-radius:100%;border-color:#2778c4 rgba(0,0,0,0) #2778c4 rgba(0,0,0,0)}.swal2-styled{margin:.3125em;padding:.625em 1.1em;transition:box-shadow .1s;box-shadow:0 0 0 3px rgba(0,0,0,0);font-weight:500}.swal2-styled:not([disabled]){cursor:pointer}.swal2-styled.swal2-confirm{border:0;border-radius:.25em;background:initial;background-color:#7066e0;color:#fff;font-size:1em}.swal2-styled.swal2-confirm:focus{box-shadow:0 0 0 3px rgba(112,102,224,.5)}.swal2-styled.swal2-deny{border:0;border-radius:.25em;background:initial;background-color:#dc3741;color:#fff;font-size:1em}.swal2-styled.swal2-deny:focus{box-shadow:0 0 0 3px rgba(220,55,65,.5)}.swal2-styled.swal2-cancel{border:0;border-radius:.25em;background:initial;background-color:#6e7881;color:#fff;font-size:1em}.swal2-styled.swal2-cancel:focus{box-shadow:0 0 0 3px rgba(110,120,129,.5)}.swal2-styled.swal2-default-outline:focus{box-shadow:0 0 0 3px rgba(100,150,200,.5)}.swal2-styled:focus{outline:none}.swal2-styled::-moz-focus-inner{border:0}.swal2-footer{justify-content:center;margin:1em 0 0;padding:1em 1em 0;border-top:1px solid #eee;color:inherit;font-size:1em}.swal2-timer-progress-bar-container{position:absolute;right:0;bottom:0;left:0;grid-column:auto !important;overflow:hidden;border-bottom-right-radius:5px;border-bottom-left-radius:5px}.swal2-timer-progress-bar{width:100%;height:.25em;background:rgba(0,0,0,.2)}.swal2-image{max-width:100%;margin:2em auto 1em}.swal2-close{z-index:2;align-items:center;justify-content:center;width:1.2em;height:1.2em;margin-top:0;margin-right:0;margin-bottom:-1.2em;padding:0;overflow:hidden;transition:color .1s,box-shadow .1s;border:none;border-radius:5px;background:rgba(0,0,0,0);color:#ccc;font-family:serif;font-family:monospace;font-size:2.5em;cursor:pointer;justify-self:end}.swal2-close:hover{transform:none;background:rgba(0,0,0,0);color:#f27474}.swal2-close:focus{outline:none;box-shadow:inset 0 0 0 3px rgba(100,150,200,.5)}.swal2-close::-moz-focus-inner{border:0}.swal2-html-container{z-index:1;justify-content:center;margin:1em 1.6em .3em;padding:0;overflow:auto;color:inherit;font-size:1.125em;font-weight:normal;line-height:normal;text-align:center;word-wrap:break-word;word-break:break-word}.swal2-input,.swal2-file,.swal2-textarea,.swal2-select,.swal2-radio,.swal2-checkbox{margin:1em 2em 3px}.swal2-input,.swal2-file,.swal2-textarea{box-sizing:border-box;width:auto;transition:border-color .1s,box-shadow .1s;border:1px solid #d9d9d9;border-radius:.1875em;background:rgba(0,0,0,0);box-shadow:inset 0 1px 1px rgba(0,0,0,.06),0 0 0 3px rgba(0,0,0,0);color:inherit;font-size:1.125em}.swal2-input.swal2-inputerror,.swal2-file.swal2-inputerror,.swal2-textarea.swal2-inputerror{border-color:#f27474 !important;box-shadow:0 0 2px #f27474 !important}.swal2-input:focus,.swal2-file:focus,.swal2-textarea:focus{border:1px solid #b4dbed;outline:none;box-shadow:inset 0 1px 1px rgba(0,0,0,.06),0 0 0 3px rgba(100,150,200,.5)}.swal2-input::placeholder,.swal2-file::placeholder,.swal2-textarea::placeholder{color:#ccc}.swal2-range{margin:1em 2em 3px;background:#fff}.swal2-range input{width:80%}.swal2-range output{width:20%;color:inherit;font-weight:600;text-align:center}.swal2-range input,.swal2-range output{height:2.625em;padding:0;font-size:1.125em;line-height:2.625em}.swal2-input{height:2.625em;padding:0 .75em}.swal2-file{width:75%;margin-right:auto;margin-left:auto;background:rgba(0,0,0,0);font-size:1.125em}.swal2-textarea{height:6.75em;padding:.75em}.swal2-select{min-width:50%;max-width:100%;padding:.375em .625em;background:rgba(0,0,0,0);color:inherit;font-size:1.125em}.swal2-radio,.swal2-checkbox{align-items:center;justify-content:center;background:#fff;color:inherit}.swal2-radio label,.swal2-checkbox label{margin:0 .6em;font-size:1.125em}.swal2-radio input,.swal2-checkbox input{flex-shrink:0;margin:0 .4em}.swal2-input-label{display:flex;justify-content:center;margin:1em auto 0}.swal2-validation-message{align-items:center;justify-content:center;margin:1em 0 0;padding:.625em;overflow:hidden;background:#f0f0f0;color:#666;font-size:1em;font-weight:300}.swal2-validation-message::before{content:"!";display:inline-block;width:1.5em;min-width:1.5em;height:1.5em;margin:0 .625em;border-radius:50%;background-color:#f27474;color:#fff;font-weight:600;line-height:1.5em;text-align:center}.swal2-icon{position:relative;box-sizing:content-box;justify-content:center;width:5em;height:5em;margin:2.5em auto .6em;border:0.25em solid rgba(0,0,0,0);border-radius:50%;border-color:#000;font-family:inherit;line-height:5em;cursor:default;user-select:none}.swal2-icon .swal2-icon-content{display:flex;align-items:center;font-size:3.75em}.swal2-icon.swal2-error{border-color:#f27474;color:#f27474}.swal2-icon.swal2-error .swal2-x-mark{position:relative;flex-grow:1}.swal2-icon.swal2-error [class^=swal2-x-mark-line]{display:block;position:absolute;top:2.3125em;width:2.9375em;height:.3125em;border-radius:.125em;background-color:#f27474}.swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=left]{left:1.0625em;transform:rotate(45deg)}.swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=right]{right:1em;transform:rotate(-45deg)}.swal2-icon.swal2-error.swal2-icon-show{animation:swal2-animate-error-icon .5s}.swal2-icon.swal2-error.swal2-icon-show .swal2-x-mark{animation:swal2-animate-error-x-mark .5s}.swal2-icon.swal2-warning{border-color:#facea8;color:#f8bb86}.swal2-icon.swal2-warning.swal2-icon-show{animation:swal2-animate-error-icon .5s}.swal2-icon.swal2-warning.swal2-icon-show .swal2-icon-content{animation:swal2-animate-i-mark .5s}.swal2-icon.swal2-info{border-color:#9de0f6;color:#3fc3ee}.swal2-icon.swal2-info.swal2-icon-show{animation:swal2-animate-error-icon .5s}.swal2-icon.swal2-info.swal2-icon-show .swal2-icon-content{animation:swal2-animate-i-mark .8s}.swal2-icon.swal2-question{border-color:#c9dae1;color:#87adbd}.swal2-icon.swal2-question.swal2-icon-show{animation:swal2-animate-error-icon .5s}.swal2-icon.swal2-question.swal2-icon-show .swal2-icon-content{animation:swal2-animate-question-mark .8s}.swal2-icon.swal2-success{border-color:#a5dc86;color:#a5dc86}.swal2-icon.swal2-success [class^=swal2-success-circular-line]{position:absolute;width:3.75em;height:7.5em;transform:rotate(45deg);border-radius:50%}.swal2-icon.swal2-success [class^=swal2-success-circular-line][class$=left]{top:-0.4375em;left:-2.0635em;transform:rotate(-45deg);transform-origin:3.75em 3.75em;border-radius:7.5em 0 0 7.5em}.swal2-icon.swal2-success [class^=swal2-success-circular-line][class$=right]{top:-0.6875em;left:1.875em;transform:rotate(-45deg);transform-origin:0 3.75em;border-radius:0 7.5em 7.5em 0}.swal2-icon.swal2-success .swal2-success-ring{position:absolute;z-index:2;top:-0.25em;left:-0.25em;box-sizing:content-box;width:100%;height:100%;border:.25em solid rgba(165,220,134,.3);border-radius:50%}.swal2-icon.swal2-success .swal2-success-fix{position:absolute;z-index:1;top:.5em;left:1.625em;width:.4375em;height:5.625em;transform:rotate(-45deg)}.swal2-icon.swal2-success [class^=swal2-success-line]{display:block;position:absolute;z-index:2;height:.3125em;border-radius:.125em;background-color:#a5dc86}.swal2-icon.swal2-success [class^=swal2-success-line][class$=tip]{top:2.875em;left:.8125em;width:1.5625em;transform:rotate(45deg)}.swal2-icon.swal2-success [class^=swal2-success-line][class$=long]{top:2.375em;right:.5em;width:2.9375em;transform:rotate(-45deg)}.swal2-icon.swal2-success.swal2-icon-show .swal2-success-line-tip{animation:swal2-animate-success-line-tip .75s}.swal2-icon.swal2-success.swal2-icon-show .swal2-success-line-long{animation:swal2-animate-success-line-long .75s}.swal2-icon.swal2-success.swal2-icon-show .swal2-success-circular-line-right{animation:swal2-rotate-success-circular-line 4.25s ease-in}.swal2-progress-steps{flex-wrap:wrap;align-items:center;max-width:100%;margin:1.25em auto;padding:0;background:rgba(0,0,0,0);font-weight:600}.swal2-progress-steps li{display:inline-block;position:relative}.swal2-progress-steps .swal2-progress-step{z-index:20;flex-shrink:0;width:2em;height:2em;border-radius:2em;background:#2778c4;color:#fff;line-height:2em;text-align:center}.swal2-progress-steps .swal2-progress-step.swal2-active-progress-step{background:#2778c4}.swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step{background:#add8e6;color:#fff}.swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step-line{background:#add8e6}.swal2-progress-steps .swal2-progress-step-line{z-index:10;flex-shrink:0;width:2.5em;height:.4em;margin:0 -1px;background:#2778c4}[class^=swal2]{-webkit-tap-highlight-color:rgba(0,0,0,0)}.swal2-show{animation:swal2-show .3s}.swal2-hide{animation:swal2-hide .15s forwards}.swal2-noanimation{transition:none}.swal2-scrollbar-measure{position:absolute;top:-9999px;width:50px;height:50px;overflow:scroll}.swal2-rtl .swal2-close{margin-right:initial;margin-left:0}.swal2-rtl .swal2-timer-progress-bar{right:0;left:auto}@keyframes swal2-toast-show{0%{transform:translateY(-0.625em) rotateZ(2deg)}33%{transform:translateY(0) rotateZ(-2deg)}66%{transform:translateY(0.3125em) rotateZ(2deg)}100%{transform:translateY(0) rotateZ(0deg)}}@keyframes swal2-toast-hide{100%{transform:rotateZ(1deg);opacity:0}}@keyframes swal2-toast-animate-success-line-tip{0%{top:.5625em;left:.0625em;width:0}54%{top:.125em;left:.125em;width:0}70%{top:.625em;left:-0.25em;width:1.625em}84%{top:1.0625em;left:.75em;width:.5em}100%{top:1.125em;left:.1875em;width:.75em}}@keyframes swal2-toast-animate-success-line-long{0%{top:1.625em;right:1.375em;width:0}65%{top:1.25em;right:.9375em;width:0}84%{top:.9375em;right:0;width:1.125em}100%{top:.9375em;right:.1875em;width:1.375em}}@keyframes swal2-show{0%{transform:scale(0.7)}45%{transform:scale(1.05)}80%{transform:scale(0.95)}100%{transform:scale(1)}}@keyframes swal2-hide{0%{transform:scale(1);opacity:1}100%{transform:scale(0.5);opacity:0}}@keyframes swal2-animate-success-line-tip{0%{top:1.1875em;left:.0625em;width:0}54%{top:1.0625em;left:.125em;width:0}70%{top:2.1875em;left:-0.375em;width:3.125em}84%{top:3em;left:1.3125em;width:1.0625em}100%{top:2.8125em;left:.8125em;width:1.5625em}}@keyframes swal2-animate-success-line-long{0%{top:3.375em;right:2.875em;width:0}65%{top:3.375em;right:2.875em;width:0}84%{top:2.1875em;right:0;width:3.4375em}100%{top:2.375em;right:.5em;width:2.9375em}}@keyframes swal2-rotate-success-circular-line{0%{transform:rotate(-45deg)}5%{transform:rotate(-45deg)}12%{transform:rotate(-405deg)}100%{transform:rotate(-405deg)}}@keyframes swal2-animate-error-x-mark{0%{margin-top:1.625em;transform:scale(0.4);opacity:0}50%{margin-top:1.625em;transform:scale(0.4);opacity:0}80%{margin-top:-0.375em;transform:scale(1.15)}100%{margin-top:0;transform:scale(1);opacity:1}}@keyframes swal2-animate-error-icon{0%{transform:rotateX(100deg);opacity:0}100%{transform:rotateX(0deg);opacity:1}}@keyframes swal2-rotate-loading{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}@keyframes swal2-animate-question-mark{0%{transform:rotateY(-360deg)}100%{transform:rotateY(0)}}@keyframes swal2-animate-i-mark{0%{transform:rotateZ(45deg);opacity:0}25%{transform:rotateZ(-25deg);opacity:.4}50%{transform:rotateZ(15deg);opacity:.8}75%{transform:rotateZ(-5deg);opacity:1}100%{transform:rotateX(0);opacity:1}}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown){overflow:hidden}body.swal2-height-auto{height:auto !important}body.swal2-no-backdrop .swal2-container{background-color:rgba(0,0,0,0) !important;pointer-events:none}body.swal2-no-backdrop .swal2-container .swal2-popup{pointer-events:all}body.swal2-no-backdrop .swal2-container .swal2-modal{box-shadow:0 0 10px rgba(0,0,0,.4)}@media print{body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown){overflow-y:scroll !important}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown)>[aria-hidden=true]{display:none}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown) .swal2-container{position:static !important}}body.swal2-toast-shown .swal2-container{box-sizing:border-box;width:360px;max-width:100%;background-color:rgba(0,0,0,0);pointer-events:none}body.swal2-toast-shown .swal2-container.swal2-top{top:0;right:auto;bottom:auto;left:50%;transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-top-end,body.swal2-toast-shown .swal2-container.swal2-top-right{top:0;right:0;bottom:auto;left:auto}body.swal2-toast-shown .swal2-container.swal2-top-start,body.swal2-toast-shown .swal2-container.swal2-top-left{top:0;right:auto;bottom:auto;left:0}body.swal2-toast-shown .swal2-container.swal2-center-start,body.swal2-toast-shown .swal2-container.swal2-center-left{top:50%;right:auto;bottom:auto;left:0;transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-center{top:50%;right:auto;bottom:auto;left:50%;transform:translate(-50%, -50%)}body.swal2-toast-shown .swal2-container.swal2-center-end,body.swal2-toast-shown .swal2-container.swal2-center-right{top:50%;right:0;bottom:auto;left:auto;transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-start,body.swal2-toast-shown .swal2-container.swal2-bottom-left{top:auto;right:auto;bottom:0;left:0}body.swal2-toast-shown .swal2-container.swal2-bottom{top:auto;right:auto;bottom:0;left:50%;transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-end,body.swal2-toast-shown .swal2-container.swal2-bottom-right{top:auto;right:0;bottom:0;left:auto}');
})(Rs);
const Us = et, Ee = (p, C = true) => {
  !Ls().showNotifications || !C || Us.fire(p);
};
let z = {};
const Ht = () => {
  z = {};
};
let J = {};
const zt = () => {
  J = {};
}, le = ref("disconnected"), tt = ref(null), st = ref(false), Ds = () => {
  clearTimeout(tt.value);
  const p = ge();
  le.value = "connected", st.value = true, console.log("%cmqtt connected", "color:green");
  for (const C of Object.keys(J)) {
    z[C] || (z[C] = []), p.subscribe(C);
    for (const g of J[C])
      z[C].push(g);
  }
  zt(), Ee({
    title: "Connected",
    text: "Mqtt Connected",
    icon: "success",
    timer: 1500,
    timerProgressBar: true
  });
}, $s = (p) => {
  const C = ge();
  le.value = "disconnected";
  for (const g of Object.keys(z)) {
    J[g] || (J[g] = []);
    for (const k of z[g])
      J[g].push(k);
  }
  Ht(), p.errorCode !== 0 && Ee({
    title: "Error",
    text: "MQTT connection lost",
    icon: "error"
  }), console.log("%cmqtt disconnected", "color:red;"), st.value && (console.warn("%cmqtt connection lost", "color:red;"), setTimeout(async () => {
    (!C || !C.isConnected()) && (await it(), console.timeEnd("reconnecting..."));
  }, $().reconnectTimeout));
}, Fs = () => {
  le.value = "error", console.log("%cmqtt failed to connect", "color:red"), Ee({
    title: "Mqtt Error",
    text: "MQTT failed to connect",
    icon: "error"
  });
}, Vs = (p) => {
  const C = p.destinationName, g = p.payloadString.replace(/\0.*$/g, "").trim();
  z[C] ? z[C].forEach((k) => {
    k && k(g);
  }) : console.warn("Unhandled topic!", C, g);
}, nt = () => {
  st.value = false;
  const p = ge();
  return new Promise((C, g) => {
    try {
      p.disconnect(), C(true);
    } catch (k) {
      g(k), console.error(k), le.value = "error", k instanceof Error && Ee({
        title: "Error",
        text: k.message,
        icon: "error"
      });
    }
  });
}, it = ({
  onConnect: p,
  onFailure: C,
  onConnectionLost: g,
  onMessageArrived: k
} = {}) => {
  const T = $();
  le.value === "connected" && nt(), le.value = "connecting", tt.value = setTimeout(async () => {
    le.value = "error", await nt(), Ee({
      title: "Mqtt Error",
      text: "Broker connection timed out!",
      icon: "error"
    });
  }, T.watchdogTimeout);
  const r = qs();
  return r.onConnectionLost = (q) => {
    $s(q), g && g(q);
  }, r.onMessageArrived = (q) => {
    Vs(q), k && k(q);
  }, new Promise((q, E) => {
    try {
      r.connect({
        userName: T.username ?? "",
        password: T.password ?? "",
        useSSL: T.useSSL ?? false,
        uris: [
          `wss://${T.host}:${T.port}/mqtt`,
          `ws://${T.host}:${T.port}/mqtt`
        ],
        onSuccess: () => {
          q(true), Ds(), p && p();
        },
        onFailure: () => {
          E(), Fs(), C && C();
        }
      });
    } catch (ee) {
      E(ee), console.error(ee), le.value = "error", ee instanceof Error && Ee({
        title: "Error",
        text: ee.message,
        icon: "error"
      }), clearTimeout(tt.value);
    }
  });
}, js = (p, C, g = true) => {
  const k = $(), T = ge();
  p = g && k.enableMainTopic ? `${k.mainTopic}/${p}` : p;
  try {
    T && T.isConnected() ? (z[p] || (z[p] = []), z[p].push(C), T.subscribe(p)) : T && !T.isConnected() && (J[p] || (J[p] = []), J[p].push(C));
  } catch (r) {
    r instanceof Error && console.error(r.message);
  }
}, Hs = (p, C = true) => {
  const g = $(), k = ge();
  p = C && g.enableMainTopic ? `${g.mainTopic}/${p}` : p, z[p] && delete z[p], J[p] && delete J[p], k && k.isConnected() && k.unsubscribe(p);
}, zs = (p, C, g, k = true) => {
  const T = $(), r = ge();
  if (p = k && T.enableMainTopic ? `${T.mainTopic}/${p}` : p, r && r.isConnected())
    try {
      r.send(p, C, Vt[g].qos, Vt[g].ret);
    } catch (q) {
      if (q instanceof Error)
        throw new Error(q.message);
    }
}, Ks = () => {
  const p = {
    ...Object.keys(J),
    ...Object.keys(z)
  }, C = ge();
  for (const g in Object.keys(p))
    if (C && C.isConnected())
      try {
        C.unsubscribe(p[g]);
      } catch (k) {
        k instanceof Error && console.error(k.message);
      }
  Ht(), zt();
}, Ws = (p) => {
  const C = $();
  return p !== void 0 ? C.host = p : C.host;
}, Qs = (p) => {
  const C = $();
  return p !== void 0 ? C.port = p : C.port;
}, Gs = (p) => {
  const C = $();
  return p !== void 0 ? C.useSSL = p : C.useSSL;
}, Ys = (p) => {
  const C = $();
  return p !== void 0 ? C.clientId = p : C.clientId;
}, Js = (p) => {
  const C = $();
  return p !== void 0 ? C.mainTopic = p : C.mainTopic;
}, Zs = () => le.value, Xs = {
  connect: it,
  disconnect: nt,
  subscribe: js,
  publish: zs,
  host: Ws,
  port: Qs,
  useSSL: Gs,
  clientId: Ys,
  mainTopic: Js,
  unsubscribe: Hs,
  unsubscribeAll: Ks,
  status: Zs
}, ti = (p) => (C) => {
  const g = Bs(p.PluginOptions);
  Ns(p.MqttOptions), g.autoConnect && it(), C.config.globalProperties.$mqtt = Xs;
};
export {
  Xs as X,
  ti as t
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidnVlLXBhaG8tbXF0dC1DVUdHYXpQYi5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL3Z1ZS1wYWhvLW1xdHRAMC40LjFfdHlwZXNjcmlwdEA1LjMuMy9ub2RlX21vZHVsZXMvdnVlLXBhaG8tbXF0dC9kaXN0L3Z1ZS1wYWhvLW1xdHQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgcmVhY3RpdmUgYXMganQsIHJlZiBhcyBvdCB9IGZyb20gXCJ2dWVcIjtcbmNvbnN0IFZ0ID0ge1xuICBCOiB7XG4gICAgcW9zOiAwLFxuICAgIHJldDogITFcbiAgfSxcbiAgQnI6IHtcbiAgICBxb3M6IDAsXG4gICAgcmV0OiAhMFxuICB9LFxuICBROiB7XG4gICAgcW9zOiAxLFxuICAgIHJldDogITFcbiAgfSxcbiAgUXI6IHtcbiAgICBxb3M6IDEsXG4gICAgcmV0OiAhMFxuICB9LFxuICBGOiB7XG4gICAgcW9zOiAyLFxuICAgIHJldDogITBcbiAgfSxcbiAgRm5yOiB7XG4gICAgcW9zOiAyLFxuICAgIHJldDogITFcbiAgfVxufSwgUHMgPSB7XG4gIHNob3dOb3RpZmljYXRpb25zOiAhMCxcbiAgYXV0b0Nvbm5lY3Q6ICEwXG59LCBNcyA9IHtcbiAgaG9zdDogXCJsb2NhbGhvc3RcIixcbiAgcG9ydDogOTAwMSxcbiAgdXNlcm5hbWU6IFwiXCIsXG4gIHBhc3N3b3JkOiBcIlwiLFxuICB1c2VTU0w6ICExLFxuICBjbGllbnRJZDogYENsaWVudElkLSR7TWF0aC5yYW5kb20oKSAqIDk5OTl9YCxcbiAgbWFpblRvcGljOiBcInZ1ZS1wYWhvLW1xdHQtdGVzdFwiLFxuICBlbmFibGVNYWluVG9waWM6ICEwLFxuICB3YXRjaGRvZ1RpbWVvdXQ6IDJlMyxcbiAgcmVjb25uZWN0VGltZW91dDogNWUzXG59O1xubGV0IFJlID0gUHM7XG5jb25zdCBCcyA9IChwKSA9PiAoUmUgPSB7IC4uLlJlLCAuLi5wIH0sIFJlKSwgTHMgPSAoKSA9PiBSZTtcbmxldCBVZSA9IGp0KE1zKTtcbmNvbnN0IE5zID0gKHApID0+IChVZSA9IGp0KHsgLi4uVWUsIC4uLnAgfSksIFVlKSwgJCA9ICgpID0+IFVlO1xudmFyIFggPSB0eXBlb2YgZ2xvYmFsVGhpcyA8IFwidVwiID8gZ2xvYmFsVGhpcyA6IHR5cGVvZiB3aW5kb3cgPCBcInVcIiA/IHdpbmRvdyA6IHR5cGVvZiBnbG9iYWwgPCBcInVcIiA/IGdsb2JhbCA6IHR5cGVvZiBzZWxmIDwgXCJ1XCIgPyBzZWxmIDoge30sIERlID0ge30sIE9zID0ge1xuICBnZXQgZXhwb3J0cygpIHtcbiAgICByZXR1cm4gRGU7XG4gIH0sXG4gIHNldCBleHBvcnRzKHApIHtcbiAgICBEZSA9IHA7XG4gIH1cbn07XG4oZnVuY3Rpb24ocCwgQykge1xuICAoZnVuY3Rpb24oaywgVCkge1xuICAgIHAuZXhwb3J0cyA9IFQoKTtcbiAgfSkoWCwgZnVuY3Rpb24oKSB7XG4gICAgdmFyIGsgPSBmdW5jdGlvbihUKSB7XG4gICAgICB2YXIgciA9IFwiQFZFUlNJT05ALUBCVUlMRExFVkVMQFwiLCBxID0gVC5sb2NhbFN0b3JhZ2UgfHwgZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBpID0ge307XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgc2V0SXRlbTogZnVuY3Rpb24ocywgbCkge1xuICAgICAgICAgICAgaVtzXSA9IGw7XG4gICAgICAgICAgfSxcbiAgICAgICAgICBnZXRJdGVtOiBmdW5jdGlvbihzKSB7XG4gICAgICAgICAgICByZXR1cm4gaVtzXTtcbiAgICAgICAgICB9LFxuICAgICAgICAgIHJlbW92ZUl0ZW06IGZ1bmN0aW9uKHMpIHtcbiAgICAgICAgICAgIGRlbGV0ZSBpW3NdO1xuICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgIH0oKSwgRSA9IHtcbiAgICAgICAgQ09OTkVDVDogMSxcbiAgICAgICAgQ09OTkFDSzogMixcbiAgICAgICAgUFVCTElTSDogMyxcbiAgICAgICAgUFVCQUNLOiA0LFxuICAgICAgICBQVUJSRUM6IDUsXG4gICAgICAgIFBVQlJFTDogNixcbiAgICAgICAgUFVCQ09NUDogNyxcbiAgICAgICAgU1VCU0NSSUJFOiA4LFxuICAgICAgICBTVUJBQ0s6IDksXG4gICAgICAgIFVOU1VCU0NSSUJFOiAxMCxcbiAgICAgICAgVU5TVUJBQ0s6IDExLFxuICAgICAgICBQSU5HUkVROiAxMixcbiAgICAgICAgUElOR1JFU1A6IDEzLFxuICAgICAgICBESVNDT05ORUNUOiAxNFxuICAgICAgfSwgZWUgPSBmdW5jdGlvbihpLCBzKSB7XG4gICAgICAgIGZvciAodmFyIGwgaW4gaSlcbiAgICAgICAgICBpZiAoaS5oYXNPd25Qcm9wZXJ0eShsKSlcbiAgICAgICAgICAgIGlmIChzLmhhc093blByb3BlcnR5KGwpKSB7XG4gICAgICAgICAgICAgIGlmICh0eXBlb2YgaVtsXSAhPT0gc1tsXSlcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IodyhmLklOVkFMSURfVFlQRSwgW3R5cGVvZiBpW2xdLCBsXSkpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgdmFyIHUgPSBcIlVua25vd24gcHJvcGVydHksIFwiICsgbCArIFwiLiBWYWxpZCBwcm9wZXJ0aWVzIGFyZTpcIjtcbiAgICAgICAgICAgICAgZm9yICh2YXIgaCBpbiBzKVxuICAgICAgICAgICAgICAgIHMuaGFzT3duUHJvcGVydHkoaCkgJiYgKHUgPSB1ICsgXCIgXCIgKyBoKTtcbiAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKHUpO1xuICAgICAgICAgICAgfVxuICAgICAgfSwgc2UgPSBmdW5jdGlvbihpLCBzKSB7XG4gICAgICAgIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICAgICAgICByZXR1cm4gaS5hcHBseShzLCBhcmd1bWVudHMpO1xuICAgICAgICB9O1xuICAgICAgfSwgZiA9IHtcbiAgICAgICAgT0s6IHsgY29kZTogMCwgdGV4dDogXCJBTVFKU0MwMDAwSSBPSy5cIiB9LFxuICAgICAgICBDT05ORUNUX1RJTUVPVVQ6IHsgY29kZTogMSwgdGV4dDogXCJBTVFKU0MwMDAxRSBDb25uZWN0IHRpbWVkIG91dC5cIiB9LFxuICAgICAgICBTVUJTQ1JJQkVfVElNRU9VVDogeyBjb2RlOiAyLCB0ZXh0OiBcIkFNUUpTMDAwMkUgU3Vic2NyaWJlIHRpbWVkIG91dC5cIiB9LFxuICAgICAgICBVTlNVQlNDUklCRV9USU1FT1VUOiB7IGNvZGU6IDMsIHRleHQ6IFwiQU1RSlMwMDAzRSBVbnN1YnNjcmliZSB0aW1lZCBvdXQuXCIgfSxcbiAgICAgICAgUElOR19USU1FT1VUOiB7IGNvZGU6IDQsIHRleHQ6IFwiQU1RSlMwMDA0RSBQaW5nIHRpbWVkIG91dC5cIiB9LFxuICAgICAgICBJTlRFUk5BTF9FUlJPUjogeyBjb2RlOiA1LCB0ZXh0OiBcIkFNUUpTMDAwNUUgSW50ZXJuYWwgZXJyb3IuIEVycm9yIE1lc3NhZ2U6IHswfSwgU3RhY2sgdHJhY2U6IHsxfVwiIH0sXG4gICAgICAgIENPTk5BQ0tfUkVUVVJOQ09ERTogeyBjb2RlOiA2LCB0ZXh0OiBcIkFNUUpTMDAwNkUgQmFkIENvbm5hY2sgcmV0dXJuIGNvZGU6ezB9IHsxfS5cIiB9LFxuICAgICAgICBTT0NLRVRfRVJST1I6IHsgY29kZTogNywgdGV4dDogXCJBTVFKUzAwMDdFIFNvY2tldCBlcnJvcjp7MH0uXCIgfSxcbiAgICAgICAgU09DS0VUX0NMT1NFOiB7IGNvZGU6IDgsIHRleHQ6IFwiQU1RSlMwMDA4SSBTb2NrZXQgY2xvc2VkLlwiIH0sXG4gICAgICAgIE1BTEZPUk1FRF9VVEY6IHsgY29kZTogOSwgdGV4dDogXCJBTVFKUzAwMDlFIE1hbGZvcm1lZCBVVEYgZGF0YTp7MH0gezF9IHsyfS5cIiB9LFxuICAgICAgICBVTlNVUFBPUlRFRDogeyBjb2RlOiAxMCwgdGV4dDogXCJBTVFKUzAwMTBFIHswfSBpcyBub3Qgc3VwcG9ydGVkIGJ5IHRoaXMgYnJvd3Nlci5cIiB9LFxuICAgICAgICBJTlZBTElEX1NUQVRFOiB7IGNvZGU6IDExLCB0ZXh0OiBcIkFNUUpTMDAxMUUgSW52YWxpZCBzdGF0ZSB7MH0uXCIgfSxcbiAgICAgICAgSU5WQUxJRF9UWVBFOiB7IGNvZGU6IDEyLCB0ZXh0OiBcIkFNUUpTMDAxMkUgSW52YWxpZCB0eXBlIHswfSBmb3IgezF9LlwiIH0sXG4gICAgICAgIElOVkFMSURfQVJHVU1FTlQ6IHsgY29kZTogMTMsIHRleHQ6IFwiQU1RSlMwMDEzRSBJbnZhbGlkIGFyZ3VtZW50IHswfSBmb3IgezF9LlwiIH0sXG4gICAgICAgIFVOU1VQUE9SVEVEX09QRVJBVElPTjogeyBjb2RlOiAxNCwgdGV4dDogXCJBTVFKUzAwMTRFIFVuc3VwcG9ydGVkIG9wZXJhdGlvbi5cIiB9LFxuICAgICAgICBJTlZBTElEX1NUT1JFRF9EQVRBOiB7IGNvZGU6IDE1LCB0ZXh0OiBcIkFNUUpTMDAxNUUgSW52YWxpZCBkYXRhIGluIGxvY2FsIHN0b3JhZ2Uga2V5PXswfSB2YWx1ZT17MX0uXCIgfSxcbiAgICAgICAgSU5WQUxJRF9NUVRUX01FU1NBR0VfVFlQRTogeyBjb2RlOiAxNiwgdGV4dDogXCJBTVFKUzAwMTZFIEludmFsaWQgTVFUVCBtZXNzYWdlIHR5cGUgezB9LlwiIH0sXG4gICAgICAgIE1BTEZPUk1FRF9VTklDT0RFOiB7IGNvZGU6IDE3LCB0ZXh0OiBcIkFNUUpTMDAxN0UgTWFsZm9ybWVkIFVuaWNvZGUgc3RyaW5nOnswfSB7MX0uXCIgfSxcbiAgICAgICAgQlVGRkVSX0ZVTEw6IHsgY29kZTogMTgsIHRleHQ6IFwiQU1RSlMwMDE4RSBNZXNzYWdlIGJ1ZmZlciBpcyBmdWxsLCBtYXhpbXVtIGJ1ZmZlciBzaXplOiB7MH0uXCIgfVxuICAgICAgfSwgaWUgPSB7XG4gICAgICAgIDA6IFwiQ29ubmVjdGlvbiBBY2NlcHRlZFwiLFxuICAgICAgICAxOiBcIkNvbm5lY3Rpb24gUmVmdXNlZDogdW5hY2NlcHRhYmxlIHByb3RvY29sIHZlcnNpb25cIixcbiAgICAgICAgMjogXCJDb25uZWN0aW9uIFJlZnVzZWQ6IGlkZW50aWZpZXIgcmVqZWN0ZWRcIixcbiAgICAgICAgMzogXCJDb25uZWN0aW9uIFJlZnVzZWQ6IHNlcnZlciB1bmF2YWlsYWJsZVwiLFxuICAgICAgICA0OiBcIkNvbm5lY3Rpb24gUmVmdXNlZDogYmFkIHVzZXIgbmFtZSBvciBwYXNzd29yZFwiLFxuICAgICAgICA1OiBcIkNvbm5lY3Rpb24gUmVmdXNlZDogbm90IGF1dGhvcml6ZWRcIlxuICAgICAgfSwgdyA9IGZ1bmN0aW9uKGksIHMpIHtcbiAgICAgICAgdmFyIGwgPSBpLnRleHQ7XG4gICAgICAgIGlmIChzKSB7XG4gICAgICAgICAgZm9yICh2YXIgdSwgaCwgZCA9IDA7IGQgPCBzLmxlbmd0aDsgZCsrKVxuICAgICAgICAgICAgaWYgKHUgPSBcIntcIiArIGQgKyBcIn1cIiwgaCA9IGwuaW5kZXhPZih1KSwgaCA+IDApIHtcbiAgICAgICAgICAgICAgdmFyIG0gPSBsLnN1YnN0cmluZygwLCBoKSwgUyA9IGwuc3Vic3RyaW5nKGggKyB1Lmxlbmd0aCk7XG4gICAgICAgICAgICAgIGwgPSBtICsgc1tkXSArIFM7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGw7XG4gICAgICB9LCBDZSA9IFswLCA2LCA3NywgODEsIDczLCAxMTUsIDEwMCwgMTEyLCAzXSwgeGUgPSBbMCwgNCwgNzcsIDgxLCA4NCwgODQsIDRdLCBVID0gZnVuY3Rpb24oaSwgcykge1xuICAgICAgICB0aGlzLnR5cGUgPSBpO1xuICAgICAgICBmb3IgKHZhciBsIGluIHMpXG4gICAgICAgICAgcy5oYXNPd25Qcm9wZXJ0eShsKSAmJiAodGhpc1tsXSA9IHNbbF0pO1xuICAgICAgfTtcbiAgICAgIFUucHJvdG90eXBlLmVuY29kZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgaSA9ICh0aGlzLnR5cGUgJiAxNSkgPDwgNCwgcyA9IDAsIGwgPSBbXSwgdSA9IDAsIGg7XG4gICAgICAgIHN3aXRjaCAodGhpcy5tZXNzYWdlSWRlbnRpZmllciAhPT0gdm9pZCAwICYmIChzICs9IDIpLCB0aGlzLnR5cGUpIHtcbiAgICAgICAgICBjYXNlIEUuQ09OTkVDVDpcbiAgICAgICAgICAgIHN3aXRjaCAodGhpcy5tcXR0VmVyc2lvbikge1xuICAgICAgICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICAgICAgcyArPSBDZS5sZW5ndGggKyAzO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICBjYXNlIDQ6XG4gICAgICAgICAgICAgICAgcyArPSB4ZS5sZW5ndGggKyAzO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcyArPSBOKHRoaXMuY2xpZW50SWQpICsgMiwgdGhpcy53aWxsTWVzc2FnZSAhPT0gdm9pZCAwICYmIChzICs9IE4odGhpcy53aWxsTWVzc2FnZS5kZXN0aW5hdGlvbk5hbWUpICsgMiwgaCA9IHRoaXMud2lsbE1lc3NhZ2UucGF5bG9hZEJ5dGVzLCBoIGluc3RhbmNlb2YgVWludDhBcnJheSB8fCAoaCA9IG5ldyBVaW50OEFycmF5KG0pKSwgcyArPSBoLmJ5dGVMZW5ndGggKyAyKSwgdGhpcy51c2VyTmFtZSAhPT0gdm9pZCAwICYmIChzICs9IE4odGhpcy51c2VyTmFtZSkgKyAyKSwgdGhpcy5wYXNzd29yZCAhPT0gdm9pZCAwICYmIChzICs9IE4odGhpcy5wYXNzd29yZCkgKyAyKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgRS5TVUJTQ1JJQkU6XG4gICAgICAgICAgICBpIHw9IDI7XG4gICAgICAgICAgICBmb3IgKHZhciBkID0gMDsgZCA8IHRoaXMudG9waWNzLmxlbmd0aDsgZCsrKVxuICAgICAgICAgICAgICBsW2RdID0gTih0aGlzLnRvcGljc1tkXSksIHMgKz0gbFtkXSArIDI7XG4gICAgICAgICAgICBzICs9IHRoaXMucmVxdWVzdGVkUW9zLmxlbmd0aDtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgRS5VTlNVQlNDUklCRTpcbiAgICAgICAgICAgIGkgfD0gMjtcbiAgICAgICAgICAgIGZvciAodmFyIGQgPSAwOyBkIDwgdGhpcy50b3BpY3MubGVuZ3RoOyBkKyspXG4gICAgICAgICAgICAgIGxbZF0gPSBOKHRoaXMudG9waWNzW2RdKSwgcyArPSBsW2RdICsgMjtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgRS5QVUJSRUw6XG4gICAgICAgICAgICBpIHw9IDI7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlIEUuUFVCTElTSDpcbiAgICAgICAgICAgIHRoaXMucGF5bG9hZE1lc3NhZ2UuZHVwbGljYXRlICYmIChpIHw9IDgpLCBpID0gaSB8PSB0aGlzLnBheWxvYWRNZXNzYWdlLnFvcyA8PCAxLCB0aGlzLnBheWxvYWRNZXNzYWdlLnJldGFpbmVkICYmIChpIHw9IDEpLCB1ID0gTih0aGlzLnBheWxvYWRNZXNzYWdlLmRlc3RpbmF0aW9uTmFtZSksIHMgKz0gdSArIDI7XG4gICAgICAgICAgICB2YXIgbSA9IHRoaXMucGF5bG9hZE1lc3NhZ2UucGF5bG9hZEJ5dGVzO1xuICAgICAgICAgICAgcyArPSBtLmJ5dGVMZW5ndGgsIG0gaW5zdGFuY2VvZiBBcnJheUJ1ZmZlciA/IG0gPSBuZXcgVWludDhBcnJheShtKSA6IG0gaW5zdGFuY2VvZiBVaW50OEFycmF5IHx8IChtID0gbmV3IFVpbnQ4QXJyYXkobS5idWZmZXIpKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIHZhciBTID0gZGUocyksIHkgPSBTLmxlbmd0aCArIDEsIEwgPSBuZXcgQXJyYXlCdWZmZXIocyArIHkpLCB2ID0gbmV3IFVpbnQ4QXJyYXkoTCk7XG4gICAgICAgIGlmICh2WzBdID0gaSwgdi5zZXQoUywgMSksIHRoaXMudHlwZSA9PSBFLlBVQkxJU0gpXG4gICAgICAgICAgeSA9IFoodGhpcy5wYXlsb2FkTWVzc2FnZS5kZXN0aW5hdGlvbk5hbWUsIHUsIHYsIHkpO1xuICAgICAgICBlbHNlIGlmICh0aGlzLnR5cGUgPT0gRS5DT05ORUNUKSB7XG4gICAgICAgICAgc3dpdGNoICh0aGlzLm1xdHRWZXJzaW9uKSB7XG4gICAgICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICAgIHYuc2V0KENlLCB5KSwgeSArPSBDZS5sZW5ndGg7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSA0OlxuICAgICAgICAgICAgICB2LnNldCh4ZSwgeSksIHkgKz0geGUubGVuZ3RoO1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICAgICAgdmFyIGEgPSAwO1xuICAgICAgICAgIHRoaXMuY2xlYW5TZXNzaW9uICYmIChhID0gMiksIHRoaXMud2lsbE1lc3NhZ2UgIT09IHZvaWQgMCAmJiAoYSB8PSA0LCBhIHw9IHRoaXMud2lsbE1lc3NhZ2UucW9zIDw8IDMsIHRoaXMud2lsbE1lc3NhZ2UucmV0YWluZWQgJiYgKGEgfD0gMzIpKSwgdGhpcy51c2VyTmFtZSAhPT0gdm9pZCAwICYmIChhIHw9IDEyOCksIHRoaXMucGFzc3dvcmQgIT09IHZvaWQgMCAmJiAoYSB8PSA2NCksIHZbeSsrXSA9IGEsIHkgPSB0ZSh0aGlzLmtlZXBBbGl2ZUludGVydmFsLCB2LCB5KTtcbiAgICAgICAgfVxuICAgICAgICBzd2l0Y2ggKHRoaXMubWVzc2FnZUlkZW50aWZpZXIgIT09IHZvaWQgMCAmJiAoeSA9IHRlKHRoaXMubWVzc2FnZUlkZW50aWZpZXIsIHYsIHkpKSwgdGhpcy50eXBlKSB7XG4gICAgICAgICAgY2FzZSBFLkNPTk5FQ1Q6XG4gICAgICAgICAgICB5ID0gWih0aGlzLmNsaWVudElkLCBOKHRoaXMuY2xpZW50SWQpLCB2LCB5KSwgdGhpcy53aWxsTWVzc2FnZSAhPT0gdm9pZCAwICYmICh5ID0gWih0aGlzLndpbGxNZXNzYWdlLmRlc3RpbmF0aW9uTmFtZSwgTih0aGlzLndpbGxNZXNzYWdlLmRlc3RpbmF0aW9uTmFtZSksIHYsIHkpLCB5ID0gdGUoaC5ieXRlTGVuZ3RoLCB2LCB5KSwgdi5zZXQoaCwgeSksIHkgKz0gaC5ieXRlTGVuZ3RoKSwgdGhpcy51c2VyTmFtZSAhPT0gdm9pZCAwICYmICh5ID0gWih0aGlzLnVzZXJOYW1lLCBOKHRoaXMudXNlck5hbWUpLCB2LCB5KSksIHRoaXMucGFzc3dvcmQgIT09IHZvaWQgMCAmJiAoeSA9IFoodGhpcy5wYXNzd29yZCwgTih0aGlzLnBhc3N3b3JkKSwgdiwgeSkpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSBFLlBVQkxJU0g6XG4gICAgICAgICAgICB2LnNldChtLCB5KTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgRS5TVUJTQ1JJQkU6XG4gICAgICAgICAgICBmb3IgKHZhciBkID0gMDsgZCA8IHRoaXMudG9waWNzLmxlbmd0aDsgZCsrKVxuICAgICAgICAgICAgICB5ID0gWih0aGlzLnRvcGljc1tkXSwgbFtkXSwgdiwgeSksIHZbeSsrXSA9IHRoaXMucmVxdWVzdGVkUW9zW2RdO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSBFLlVOU1VCU0NSSUJFOlxuICAgICAgICAgICAgZm9yICh2YXIgZCA9IDA7IGQgPCB0aGlzLnRvcGljcy5sZW5ndGg7IGQrKylcbiAgICAgICAgICAgICAgeSA9IFoodGhpcy50b3BpY3NbZF0sIGxbZF0sIHYsIHkpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIEw7XG4gICAgICB9O1xuICAgICAgZnVuY3Rpb24gQWUoaSwgcykge1xuICAgICAgICB2YXIgbCA9IHMsIHUgPSBpW3NdLCBoID0gdSA+PiA0LCBkID0gdSAmPSAxNTtcbiAgICAgICAgcyArPSAxO1xuICAgICAgICB2YXIgbSwgUyA9IDAsIHkgPSAxO1xuICAgICAgICBkbyB7XG4gICAgICAgICAgaWYgKHMgPT0gaS5sZW5ndGgpXG4gICAgICAgICAgICByZXR1cm4gW251bGwsIGxdO1xuICAgICAgICAgIG0gPSBpW3MrK10sIFMgKz0gKG0gJiAxMjcpICogeSwgeSAqPSAxMjg7XG4gICAgICAgIH0gd2hpbGUgKG0gJiAxMjgpO1xuICAgICAgICB2YXIgTCA9IHMgKyBTO1xuICAgICAgICBpZiAoTCA+IGkubGVuZ3RoKVxuICAgICAgICAgIHJldHVybiBbbnVsbCwgbF07XG4gICAgICAgIHZhciB2ID0gbmV3IFUoaCk7XG4gICAgICAgIHN3aXRjaCAoaCkge1xuICAgICAgICAgIGNhc2UgRS5DT05OQUNLOlxuICAgICAgICAgICAgdmFyIGEgPSBpW3MrK107XG4gICAgICAgICAgICBhICYgMSAmJiAodi5zZXNzaW9uUHJlc2VudCA9ICEwKSwgdi5yZXR1cm5Db2RlID0gaVtzKytdO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSBFLlBVQkxJU0g6XG4gICAgICAgICAgICB2YXIgSSA9IGQgPj4gMSAmIDMsIHggPSBSKGksIHMpO1xuICAgICAgICAgICAgcyArPSAyO1xuICAgICAgICAgICAgdmFyIEsgPSBjZShpLCBzLCB4KTtcbiAgICAgICAgICAgIHMgKz0geCwgSSA+IDAgJiYgKHYubWVzc2FnZUlkZW50aWZpZXIgPSBSKGksIHMpLCBzICs9IDIpO1xuICAgICAgICAgICAgdmFyIFAgPSBuZXcgRyhpLnN1YmFycmF5KHMsIEwpKTtcbiAgICAgICAgICAgIChkICYgMSkgPT0gMSAmJiAoUC5yZXRhaW5lZCA9ICEwKSwgKGQgJiA4KSA9PSA4ICYmIChQLmR1cGxpY2F0ZSA9ICEwKSwgUC5xb3MgPSBJLCBQLmRlc3RpbmF0aW9uTmFtZSA9IEssIHYucGF5bG9hZE1lc3NhZ2UgPSBQO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSBFLlBVQkFDSzpcbiAgICAgICAgICBjYXNlIEUuUFVCUkVDOlxuICAgICAgICAgIGNhc2UgRS5QVUJSRUw6XG4gICAgICAgICAgY2FzZSBFLlBVQkNPTVA6XG4gICAgICAgICAgY2FzZSBFLlVOU1VCQUNLOlxuICAgICAgICAgICAgdi5tZXNzYWdlSWRlbnRpZmllciA9IFIoaSwgcyk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlIEUuU1VCQUNLOlxuICAgICAgICAgICAgdi5tZXNzYWdlSWRlbnRpZmllciA9IFIoaSwgcyksIHMgKz0gMiwgdi5yZXR1cm5Db2RlID0gaS5zdWJhcnJheShzLCBMKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBbdiwgTF07XG4gICAgICB9XG4gICAgICBmdW5jdGlvbiB0ZShpLCBzLCBsKSB7XG4gICAgICAgIHJldHVybiBzW2wrK10gPSBpID4+IDgsIHNbbCsrXSA9IGkgJSAyNTYsIGw7XG4gICAgICB9XG4gICAgICBmdW5jdGlvbiBaKGksIHMsIGwsIHUpIHtcbiAgICAgICAgcmV0dXJuIHUgPSB0ZShzLCBsLCB1KSwgQihpLCBsLCB1KSwgdSArIHM7XG4gICAgICB9XG4gICAgICBmdW5jdGlvbiBSKGksIHMpIHtcbiAgICAgICAgcmV0dXJuIDI1NiAqIGlbc10gKyBpW3MgKyAxXTtcbiAgICAgIH1cbiAgICAgIGZ1bmN0aW9uIGRlKGkpIHtcbiAgICAgICAgdmFyIHMgPSBuZXcgQXJyYXkoMSksIGwgPSAwO1xuICAgICAgICBkbyB7XG4gICAgICAgICAgdmFyIHUgPSBpICUgMTI4O1xuICAgICAgICAgIGkgPSBpID4+IDcsIGkgPiAwICYmICh1IHw9IDEyOCksIHNbbCsrXSA9IHU7XG4gICAgICAgIH0gd2hpbGUgKGkgPiAwICYmIGwgPCA0KTtcbiAgICAgICAgcmV0dXJuIHM7XG4gICAgICB9XG4gICAgICBmdW5jdGlvbiBOKGkpIHtcbiAgICAgICAgZm9yICh2YXIgcyA9IDAsIGwgPSAwOyBsIDwgaS5sZW5ndGg7IGwrKykge1xuICAgICAgICAgIHZhciB1ID0gaS5jaGFyQ29kZUF0KGwpO1xuICAgICAgICAgIHUgPiAyMDQ3ID8gKDU1Mjk2IDw9IHUgJiYgdSA8PSA1NjMxOSAmJiAobCsrLCBzKyspLCBzICs9IDMpIDogdSA+IDEyNyA/IHMgKz0gMiA6IHMrKztcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcztcbiAgICAgIH1cbiAgICAgIGZ1bmN0aW9uIEIoaSwgcywgbCkge1xuICAgICAgICBmb3IgKHZhciB1ID0gbCwgaCA9IDA7IGggPCBpLmxlbmd0aDsgaCsrKSB7XG4gICAgICAgICAgdmFyIGQgPSBpLmNoYXJDb2RlQXQoaCk7XG4gICAgICAgICAgaWYgKDU1Mjk2IDw9IGQgJiYgZCA8PSA1NjMxOSkge1xuICAgICAgICAgICAgdmFyIG0gPSBpLmNoYXJDb2RlQXQoKytoKTtcbiAgICAgICAgICAgIGlmIChpc05hTihtKSlcbiAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKHcoZi5NQUxGT1JNRURfVU5JQ09ERSwgW2QsIG1dKSk7XG4gICAgICAgICAgICBkID0gKGQgLSA1NTI5NiA8PCAxMCkgKyAobSAtIDU2MzIwKSArIDY1NTM2O1xuICAgICAgICAgIH1cbiAgICAgICAgICBkIDw9IDEyNyA/IHNbdSsrXSA9IGQgOiBkIDw9IDIwNDcgPyAoc1t1KytdID0gZCA+PiA2ICYgMzEgfCAxOTIsIHNbdSsrXSA9IGQgJiA2MyB8IDEyOCkgOiBkIDw9IDY1NTM1ID8gKHNbdSsrXSA9IGQgPj4gMTIgJiAxNSB8IDIyNCwgc1t1KytdID0gZCA+PiA2ICYgNjMgfCAxMjgsIHNbdSsrXSA9IGQgJiA2MyB8IDEyOCkgOiAoc1t1KytdID0gZCA+PiAxOCAmIDcgfCAyNDAsIHNbdSsrXSA9IGQgPj4gMTIgJiA2MyB8IDEyOCwgc1t1KytdID0gZCA+PiA2ICYgNjMgfCAxMjgsIHNbdSsrXSA9IGQgJiA2MyB8IDEyOCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHM7XG4gICAgICB9XG4gICAgICBmdW5jdGlvbiBjZShpLCBzLCBsKSB7XG4gICAgICAgIGZvciAodmFyIHUgPSBcIlwiLCBoLCBkID0gczsgZCA8IHMgKyBsOyApIHtcbiAgICAgICAgICB2YXIgbSA9IGlbZCsrXTtcbiAgICAgICAgICBpZiAobSA8IDEyOClcbiAgICAgICAgICAgIGggPSBtO1xuICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdmFyIFMgPSBpW2QrK10gLSAxMjg7XG4gICAgICAgICAgICBpZiAoUyA8IDApXG4gICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcih3KGYuTUFMRk9STUVEX1VURiwgW20udG9TdHJpbmcoMTYpLCBTLnRvU3RyaW5nKDE2KSwgXCJcIl0pKTtcbiAgICAgICAgICAgIGlmIChtIDwgMjI0KVxuICAgICAgICAgICAgICBoID0gNjQgKiAobSAtIDE5MikgKyBTO1xuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgIHZhciB5ID0gaVtkKytdIC0gMTI4O1xuICAgICAgICAgICAgICBpZiAoeSA8IDApXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKHcoZi5NQUxGT1JNRURfVVRGLCBbbS50b1N0cmluZygxNiksIFMudG9TdHJpbmcoMTYpLCB5LnRvU3RyaW5nKDE2KV0pKTtcbiAgICAgICAgICAgICAgaWYgKG0gPCAyNDApXG4gICAgICAgICAgICAgICAgaCA9IDQwOTYgKiAobSAtIDIyNCkgKyA2NCAqIFMgKyB5O1xuICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB2YXIgTCA9IGlbZCsrXSAtIDEyODtcbiAgICAgICAgICAgICAgICBpZiAoTCA8IDApXG4gICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IodyhmLk1BTEZPUk1FRF9VVEYsIFttLnRvU3RyaW5nKDE2KSwgUy50b1N0cmluZygxNiksIHkudG9TdHJpbmcoMTYpLCBMLnRvU3RyaW5nKDE2KV0pKTtcbiAgICAgICAgICAgICAgICBpZiAobSA8IDI0OClcbiAgICAgICAgICAgICAgICAgIGggPSAyNjIxNDQgKiAobSAtIDI0MCkgKyA0MDk2ICogUyArIDY0ICogeSArIEw7XG4gICAgICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKHcoZi5NQUxGT1JNRURfVVRGLCBbbS50b1N0cmluZygxNiksIFMudG9TdHJpbmcoMTYpLCB5LnRvU3RyaW5nKDE2KSwgTC50b1N0cmluZygxNildKSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgaCA+IDY1NTM1ICYmIChoIC09IDY1NTM2LCB1ICs9IFN0cmluZy5mcm9tQ2hhckNvZGUoNTUyOTYgKyAoaCA+PiAxMCkpLCBoID0gNTYzMjAgKyAoaCAmIDEwMjMpKSwgdSArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKGgpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB1O1xuICAgICAgfVxuICAgICAgdmFyIFBlID0gZnVuY3Rpb24oaSwgcykge1xuICAgICAgICB0aGlzLl9jbGllbnQgPSBpLCB0aGlzLl9rZWVwQWxpdmVJbnRlcnZhbCA9IHMgKiAxZTMsIHRoaXMuaXNSZXNldCA9ICExO1xuICAgICAgICB2YXIgbCA9IG5ldyBVKEUuUElOR1JFUSkuZW5jb2RlKCksIHUgPSBmdW5jdGlvbihkKSB7XG4gICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgcmV0dXJuIGguYXBwbHkoZCk7XG4gICAgICAgICAgfTtcbiAgICAgICAgfSwgaCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgIHRoaXMuaXNSZXNldCA/ICh0aGlzLmlzUmVzZXQgPSAhMSwgdGhpcy5fY2xpZW50Ll90cmFjZShcIlBpbmdlci5kb1BpbmdcIiwgXCJzZW5kIFBJTkdSRVFcIiksIHRoaXMuX2NsaWVudC5zb2NrZXQuc2VuZChsKSwgdGhpcy50aW1lb3V0ID0gc2V0VGltZW91dCh1KHRoaXMpLCB0aGlzLl9rZWVwQWxpdmVJbnRlcnZhbCkpIDogKHRoaXMuX2NsaWVudC5fdHJhY2UoXCJQaW5nZXIuZG9QaW5nXCIsIFwiVGltZWQgb3V0XCIpLCB0aGlzLl9jbGllbnQuX2Rpc2Nvbm5lY3RlZChmLlBJTkdfVElNRU9VVC5jb2RlLCB3KGYuUElOR19USU1FT1VUKSkpO1xuICAgICAgICB9O1xuICAgICAgICB0aGlzLnJlc2V0ID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgdGhpcy5pc1Jlc2V0ID0gITAsIGNsZWFyVGltZW91dCh0aGlzLnRpbWVvdXQpLCB0aGlzLl9rZWVwQWxpdmVJbnRlcnZhbCA+IDAgJiYgKHRoaXMudGltZW91dCA9IHNldFRpbWVvdXQodSh0aGlzKSwgdGhpcy5fa2VlcEFsaXZlSW50ZXJ2YWwpKTtcbiAgICAgICAgfSwgdGhpcy5jYW5jZWwgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICBjbGVhclRpbWVvdXQodGhpcy50aW1lb3V0KTtcbiAgICAgICAgfTtcbiAgICAgIH0sIGZlID0gZnVuY3Rpb24oaSwgcywgbCwgdSkge1xuICAgICAgICBzIHx8IChzID0gMzApO1xuICAgICAgICB2YXIgaCA9IGZ1bmN0aW9uKGQsIG0sIFMpIHtcbiAgICAgICAgICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICByZXR1cm4gZC5hcHBseShtLCBTKTtcbiAgICAgICAgICB9O1xuICAgICAgICB9O1xuICAgICAgICB0aGlzLnRpbWVvdXQgPSBzZXRUaW1lb3V0KGgobCwgaSwgdSksIHMgKiAxZTMpLCB0aGlzLmNhbmNlbCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgIGNsZWFyVGltZW91dCh0aGlzLnRpbWVvdXQpO1xuICAgICAgICB9O1xuICAgICAgfSwgYiA9IGZ1bmN0aW9uKGksIHMsIGwsIHUsIGgpIHtcbiAgICAgICAgaWYgKCEoXCJXZWJTb2NrZXRcIiBpbiBUICYmIFQuV2ViU29ja2V0ICE9PSBudWxsKSlcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IodyhmLlVOU1VQUE9SVEVELCBbXCJXZWJTb2NrZXRcIl0pKTtcbiAgICAgICAgaWYgKCEoXCJBcnJheUJ1ZmZlclwiIGluIFQgJiYgVC5BcnJheUJ1ZmZlciAhPT0gbnVsbCkpXG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKHcoZi5VTlNVUFBPUlRFRCwgW1wiQXJyYXlCdWZmZXJcIl0pKTtcbiAgICAgICAgdGhpcy5fdHJhY2UoXCJQYWhvLkNsaWVudFwiLCBpLCBzLCBsLCB1LCBoKSwgdGhpcy5ob3N0ID0gcywgdGhpcy5wb3J0ID0gbCwgdGhpcy5wYXRoID0gdSwgdGhpcy51cmkgPSBpLCB0aGlzLmNsaWVudElkID0gaCwgdGhpcy5fd3N1cmkgPSBudWxsLCB0aGlzLl9sb2NhbEtleSA9IHMgKyBcIjpcIiArIGwgKyAodSAhPSBcIi9tcXR0XCIgPyBcIjpcIiArIHUgOiBcIlwiKSArIFwiOlwiICsgaCArIFwiOlwiLCB0aGlzLl9tc2dfcXVldWUgPSBbXSwgdGhpcy5fYnVmZmVyZWRfbXNnX3F1ZXVlID0gW10sIHRoaXMuX3NlbnRNZXNzYWdlcyA9IHt9LCB0aGlzLl9yZWNlaXZlZE1lc3NhZ2VzID0ge30sIHRoaXMuX25vdGlmeV9tc2dfc2VudCA9IHt9LCB0aGlzLl9tZXNzYWdlX2lkZW50aWZpZXIgPSAxLCB0aGlzLl9zZXF1ZW5jZSA9IDA7XG4gICAgICAgIGZvciAodmFyIGQgaW4gcSlcbiAgICAgICAgICAoZC5pbmRleE9mKFwiU2VudDpcIiArIHRoaXMuX2xvY2FsS2V5KSA9PT0gMCB8fCBkLmluZGV4T2YoXCJSZWNlaXZlZDpcIiArIHRoaXMuX2xvY2FsS2V5KSA9PT0gMCkgJiYgdGhpcy5yZXN0b3JlKGQpO1xuICAgICAgfTtcbiAgICAgIGIucHJvdG90eXBlLmhvc3QgPSBudWxsLCBiLnByb3RvdHlwZS5wb3J0ID0gbnVsbCwgYi5wcm90b3R5cGUucGF0aCA9IG51bGwsIGIucHJvdG90eXBlLnVyaSA9IG51bGwsIGIucHJvdG90eXBlLmNsaWVudElkID0gbnVsbCwgYi5wcm90b3R5cGUuc29ja2V0ID0gbnVsbCwgYi5wcm90b3R5cGUuY29ubmVjdGVkID0gITEsIGIucHJvdG90eXBlLm1heE1lc3NhZ2VJZGVudGlmaWVyID0gNjU1MzYsIGIucHJvdG90eXBlLmNvbm5lY3RPcHRpb25zID0gbnVsbCwgYi5wcm90b3R5cGUuaG9zdEluZGV4ID0gbnVsbCwgYi5wcm90b3R5cGUub25Db25uZWN0ZWQgPSBudWxsLCBiLnByb3RvdHlwZS5vbkNvbm5lY3Rpb25Mb3N0ID0gbnVsbCwgYi5wcm90b3R5cGUub25NZXNzYWdlRGVsaXZlcmVkID0gbnVsbCwgYi5wcm90b3R5cGUub25NZXNzYWdlQXJyaXZlZCA9IG51bGwsIGIucHJvdG90eXBlLnRyYWNlRnVuY3Rpb24gPSBudWxsLCBiLnByb3RvdHlwZS5fbXNnX3F1ZXVlID0gbnVsbCwgYi5wcm90b3R5cGUuX2J1ZmZlcmVkX21zZ19xdWV1ZSA9IG51bGwsIGIucHJvdG90eXBlLl9jb25uZWN0VGltZW91dCA9IG51bGwsIGIucHJvdG90eXBlLnNlbmRQaW5nZXIgPSBudWxsLCBiLnByb3RvdHlwZS5yZWNlaXZlUGluZ2VyID0gbnVsbCwgYi5wcm90b3R5cGUuX3JlY29ubmVjdEludGVydmFsID0gMSwgYi5wcm90b3R5cGUuX3JlY29ubmVjdGluZyA9ICExLCBiLnByb3RvdHlwZS5fcmVjb25uZWN0VGltZW91dCA9IG51bGwsIGIucHJvdG90eXBlLmRpc2Nvbm5lY3RlZFB1Ymxpc2hpbmcgPSAhMSwgYi5wcm90b3R5cGUuZGlzY29ubmVjdGVkQnVmZmVyU2l6ZSA9IDVlMywgYi5wcm90b3R5cGUucmVjZWl2ZUJ1ZmZlciA9IG51bGwsIGIucHJvdG90eXBlLl90cmFjZUJ1ZmZlciA9IG51bGwsIGIucHJvdG90eXBlLl9NQVhfVFJBQ0VfRU5UUklFUyA9IDEwMCwgYi5wcm90b3R5cGUuY29ubmVjdCA9IGZ1bmN0aW9uKGkpIHtcbiAgICAgICAgdmFyIHMgPSB0aGlzLl90cmFjZU1hc2soaSwgXCJwYXNzd29yZFwiKTtcbiAgICAgICAgaWYgKHRoaXMuX3RyYWNlKFwiQ2xpZW50LmNvbm5lY3RcIiwgcywgdGhpcy5zb2NrZXQsIHRoaXMuY29ubmVjdGVkKSwgdGhpcy5jb25uZWN0ZWQpXG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKHcoZi5JTlZBTElEX1NUQVRFLCBbXCJhbHJlYWR5IGNvbm5lY3RlZFwiXSkpO1xuICAgICAgICBpZiAodGhpcy5zb2NrZXQpXG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKHcoZi5JTlZBTElEX1NUQVRFLCBbXCJhbHJlYWR5IGNvbm5lY3RlZFwiXSkpO1xuICAgICAgICB0aGlzLl9yZWNvbm5lY3RpbmcgJiYgKHRoaXMuX3JlY29ubmVjdFRpbWVvdXQuY2FuY2VsKCksIHRoaXMuX3JlY29ubmVjdFRpbWVvdXQgPSBudWxsLCB0aGlzLl9yZWNvbm5lY3RpbmcgPSAhMSksIHRoaXMuY29ubmVjdE9wdGlvbnMgPSBpLCB0aGlzLl9yZWNvbm5lY3RJbnRlcnZhbCA9IDEsIHRoaXMuX3JlY29ubmVjdGluZyA9ICExLCBpLnVyaXMgPyAodGhpcy5ob3N0SW5kZXggPSAwLCB0aGlzLl9kb0Nvbm5lY3QoaS51cmlzWzBdKSkgOiB0aGlzLl9kb0Nvbm5lY3QodGhpcy51cmkpO1xuICAgICAgfSwgYi5wcm90b3R5cGUuc3Vic2NyaWJlID0gZnVuY3Rpb24oaSwgcykge1xuICAgICAgICBpZiAodGhpcy5fdHJhY2UoXCJDbGllbnQuc3Vic2NyaWJlXCIsIGksIHMpLCAhdGhpcy5jb25uZWN0ZWQpXG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKHcoZi5JTlZBTElEX1NUQVRFLCBbXCJub3QgY29ubmVjdGVkXCJdKSk7XG4gICAgICAgIHZhciBsID0gbmV3IFUoRS5TVUJTQ1JJQkUpO1xuICAgICAgICBsLnRvcGljcyA9IGkuY29uc3RydWN0b3IgPT09IEFycmF5ID8gaSA6IFtpXSwgcy5xb3MgPT09IHZvaWQgMCAmJiAocy5xb3MgPSAwKSwgbC5yZXF1ZXN0ZWRRb3MgPSBbXTtcbiAgICAgICAgZm9yICh2YXIgdSA9IDA7IHUgPCBsLnRvcGljcy5sZW5ndGg7IHUrKylcbiAgICAgICAgICBsLnJlcXVlc3RlZFFvc1t1XSA9IHMucW9zO1xuICAgICAgICBzLm9uU3VjY2VzcyAmJiAobC5vblN1Y2Nlc3MgPSBmdW5jdGlvbihoKSB7XG4gICAgICAgICAgcy5vblN1Y2Nlc3MoeyBpbnZvY2F0aW9uQ29udGV4dDogcy5pbnZvY2F0aW9uQ29udGV4dCwgZ3JhbnRlZFFvczogaCB9KTtcbiAgICAgICAgfSksIHMub25GYWlsdXJlICYmIChsLm9uRmFpbHVyZSA9IGZ1bmN0aW9uKGgpIHtcbiAgICAgICAgICBzLm9uRmFpbHVyZSh7IGludm9jYXRpb25Db250ZXh0OiBzLmludm9jYXRpb25Db250ZXh0LCBlcnJvckNvZGU6IGgsIGVycm9yTWVzc2FnZTogdyhoKSB9KTtcbiAgICAgICAgfSksIHMudGltZW91dCAmJiAobC50aW1lT3V0ID0gbmV3IGZlKFxuICAgICAgICAgIHRoaXMsXG4gICAgICAgICAgcy50aW1lb3V0LFxuICAgICAgICAgIHMub25GYWlsdXJlLFxuICAgICAgICAgIFt7XG4gICAgICAgICAgICBpbnZvY2F0aW9uQ29udGV4dDogcy5pbnZvY2F0aW9uQ29udGV4dCxcbiAgICAgICAgICAgIGVycm9yQ29kZTogZi5TVUJTQ1JJQkVfVElNRU9VVC5jb2RlLFxuICAgICAgICAgICAgZXJyb3JNZXNzYWdlOiB3KGYuU1VCU0NSSUJFX1RJTUVPVVQpXG4gICAgICAgICAgfV1cbiAgICAgICAgKSksIHRoaXMuX3JlcXVpcmVzX2FjayhsKSwgdGhpcy5fc2NoZWR1bGVfbWVzc2FnZShsKTtcbiAgICAgIH0sIGIucHJvdG90eXBlLnVuc3Vic2NyaWJlID0gZnVuY3Rpb24oaSwgcykge1xuICAgICAgICBpZiAodGhpcy5fdHJhY2UoXCJDbGllbnQudW5zdWJzY3JpYmVcIiwgaSwgcyksICF0aGlzLmNvbm5lY3RlZClcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IodyhmLklOVkFMSURfU1RBVEUsIFtcIm5vdCBjb25uZWN0ZWRcIl0pKTtcbiAgICAgICAgdmFyIGwgPSBuZXcgVShFLlVOU1VCU0NSSUJFKTtcbiAgICAgICAgbC50b3BpY3MgPSBpLmNvbnN0cnVjdG9yID09PSBBcnJheSA/IGkgOiBbaV0sIHMub25TdWNjZXNzICYmIChsLmNhbGxiYWNrID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgcy5vblN1Y2Nlc3MoeyBpbnZvY2F0aW9uQ29udGV4dDogcy5pbnZvY2F0aW9uQ29udGV4dCB9KTtcbiAgICAgICAgfSksIHMudGltZW91dCAmJiAobC50aW1lT3V0ID0gbmV3IGZlKFxuICAgICAgICAgIHRoaXMsXG4gICAgICAgICAgcy50aW1lb3V0LFxuICAgICAgICAgIHMub25GYWlsdXJlLFxuICAgICAgICAgIFt7XG4gICAgICAgICAgICBpbnZvY2F0aW9uQ29udGV4dDogcy5pbnZvY2F0aW9uQ29udGV4dCxcbiAgICAgICAgICAgIGVycm9yQ29kZTogZi5VTlNVQlNDUklCRV9USU1FT1VULmNvZGUsXG4gICAgICAgICAgICBlcnJvck1lc3NhZ2U6IHcoZi5VTlNVQlNDUklCRV9USU1FT1VUKVxuICAgICAgICAgIH1dXG4gICAgICAgICkpLCB0aGlzLl9yZXF1aXJlc19hY2sobCksIHRoaXMuX3NjaGVkdWxlX21lc3NhZ2UobCk7XG4gICAgICB9LCBiLnByb3RvdHlwZS5zZW5kID0gZnVuY3Rpb24oaSkge1xuICAgICAgICB0aGlzLl90cmFjZShcIkNsaWVudC5zZW5kXCIsIGkpO1xuICAgICAgICB2YXIgcyA9IG5ldyBVKEUuUFVCTElTSCk7XG4gICAgICAgIGlmIChzLnBheWxvYWRNZXNzYWdlID0gaSwgdGhpcy5jb25uZWN0ZWQpXG4gICAgICAgICAgaS5xb3MgPiAwID8gdGhpcy5fcmVxdWlyZXNfYWNrKHMpIDogdGhpcy5vbk1lc3NhZ2VEZWxpdmVyZWQgJiYgKHRoaXMuX25vdGlmeV9tc2dfc2VudFtzXSA9IHRoaXMub25NZXNzYWdlRGVsaXZlcmVkKHMucGF5bG9hZE1lc3NhZ2UpKSwgdGhpcy5fc2NoZWR1bGVfbWVzc2FnZShzKTtcbiAgICAgICAgZWxzZSBpZiAodGhpcy5fcmVjb25uZWN0aW5nICYmIHRoaXMuZGlzY29ubmVjdGVkUHVibGlzaGluZykge1xuICAgICAgICAgIHZhciBsID0gT2JqZWN0LmtleXModGhpcy5fc2VudE1lc3NhZ2VzKS5sZW5ndGggKyB0aGlzLl9idWZmZXJlZF9tc2dfcXVldWUubGVuZ3RoO1xuICAgICAgICAgIGlmIChsID4gdGhpcy5kaXNjb25uZWN0ZWRCdWZmZXJTaXplKVxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKHcoZi5CVUZGRVJfRlVMTCwgW3RoaXMuZGlzY29ubmVjdGVkQnVmZmVyU2l6ZV0pKTtcbiAgICAgICAgICBpLnFvcyA+IDAgPyB0aGlzLl9yZXF1aXJlc19hY2socykgOiAocy5zZXF1ZW5jZSA9ICsrdGhpcy5fc2VxdWVuY2UsIHRoaXMuX2J1ZmZlcmVkX21zZ19xdWV1ZS51bnNoaWZ0KHMpKTtcbiAgICAgICAgfSBlbHNlXG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKHcoZi5JTlZBTElEX1NUQVRFLCBbXCJub3QgY29ubmVjdGVkXCJdKSk7XG4gICAgICB9LCBiLnByb3RvdHlwZS5kaXNjb25uZWN0ID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIGlmICh0aGlzLl90cmFjZShcIkNsaWVudC5kaXNjb25uZWN0XCIpLCB0aGlzLl9yZWNvbm5lY3RpbmcgJiYgKHRoaXMuX3JlY29ubmVjdFRpbWVvdXQuY2FuY2VsKCksIHRoaXMuX3JlY29ubmVjdFRpbWVvdXQgPSBudWxsLCB0aGlzLl9yZWNvbm5lY3RpbmcgPSAhMSksICF0aGlzLnNvY2tldClcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IodyhmLklOVkFMSURfU1RBVEUsIFtcIm5vdCBjb25uZWN0aW5nIG9yIGNvbm5lY3RlZFwiXSkpO1xuICAgICAgICB2YXIgaSA9IG5ldyBVKEUuRElTQ09OTkVDVCk7XG4gICAgICAgIHRoaXMuX25vdGlmeV9tc2dfc2VudFtpXSA9IHNlKHRoaXMuX2Rpc2Nvbm5lY3RlZCwgdGhpcyksIHRoaXMuX3NjaGVkdWxlX21lc3NhZ2UoaSk7XG4gICAgICB9LCBiLnByb3RvdHlwZS5nZXRUcmFjZUxvZyA9IGZ1bmN0aW9uKCkge1xuICAgICAgICBpZiAodGhpcy5fdHJhY2VCdWZmZXIgIT09IG51bGwpIHtcbiAgICAgICAgICB0aGlzLl90cmFjZShcIkNsaWVudC5nZXRUcmFjZUxvZ1wiLCAvKiBAX19QVVJFX18gKi8gbmV3IERhdGUoKSksIHRoaXMuX3RyYWNlKFwiQ2xpZW50LmdldFRyYWNlTG9nIGluIGZsaWdodCBtZXNzYWdlc1wiLCB0aGlzLl9zZW50TWVzc2FnZXMubGVuZ3RoKTtcbiAgICAgICAgICBmb3IgKHZhciBpIGluIHRoaXMuX3NlbnRNZXNzYWdlcylcbiAgICAgICAgICAgIHRoaXMuX3RyYWNlKFwiX3NlbnRNZXNzYWdlcyBcIiwgaSwgdGhpcy5fc2VudE1lc3NhZ2VzW2ldKTtcbiAgICAgICAgICBmb3IgKHZhciBpIGluIHRoaXMuX3JlY2VpdmVkTWVzc2FnZXMpXG4gICAgICAgICAgICB0aGlzLl90cmFjZShcIl9yZWNlaXZlZE1lc3NhZ2VzIFwiLCBpLCB0aGlzLl9yZWNlaXZlZE1lc3NhZ2VzW2ldKTtcbiAgICAgICAgICByZXR1cm4gdGhpcy5fdHJhY2VCdWZmZXI7XG4gICAgICAgIH1cbiAgICAgIH0sIGIucHJvdG90eXBlLnN0YXJ0VHJhY2UgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgdGhpcy5fdHJhY2VCdWZmZXIgPT09IG51bGwgJiYgKHRoaXMuX3RyYWNlQnVmZmVyID0gW10pLCB0aGlzLl90cmFjZShcIkNsaWVudC5zdGFydFRyYWNlXCIsIC8qIEBfX1BVUkVfXyAqLyBuZXcgRGF0ZSgpLCByKTtcbiAgICAgIH0sIGIucHJvdG90eXBlLnN0b3BUcmFjZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICBkZWxldGUgdGhpcy5fdHJhY2VCdWZmZXI7XG4gICAgICB9LCBiLnByb3RvdHlwZS5fZG9Db25uZWN0ID0gZnVuY3Rpb24oaSkge1xuICAgICAgICBpZiAodGhpcy5jb25uZWN0T3B0aW9ucy51c2VTU0wpIHtcbiAgICAgICAgICB2YXIgcyA9IGkuc3BsaXQoXCI6XCIpO1xuICAgICAgICAgIHNbMF0gPSBcIndzc1wiLCBpID0gcy5qb2luKFwiOlwiKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl93c3VyaSA9IGksIHRoaXMuY29ubmVjdGVkID0gITEsIHRoaXMuY29ubmVjdE9wdGlvbnMubXF0dFZlcnNpb24gPCA0ID8gdGhpcy5zb2NrZXQgPSBuZXcgV2ViU29ja2V0KGksIFtcIm1xdHR2My4xXCJdKSA6IHRoaXMuc29ja2V0ID0gbmV3IFdlYlNvY2tldChpLCBbXCJtcXR0XCJdKSwgdGhpcy5zb2NrZXQuYmluYXJ5VHlwZSA9IFwiYXJyYXlidWZmZXJcIiwgdGhpcy5zb2NrZXQub25vcGVuID0gc2UodGhpcy5fb25fc29ja2V0X29wZW4sIHRoaXMpLCB0aGlzLnNvY2tldC5vbm1lc3NhZ2UgPSBzZSh0aGlzLl9vbl9zb2NrZXRfbWVzc2FnZSwgdGhpcyksIHRoaXMuc29ja2V0Lm9uZXJyb3IgPSBzZSh0aGlzLl9vbl9zb2NrZXRfZXJyb3IsIHRoaXMpLCB0aGlzLnNvY2tldC5vbmNsb3NlID0gc2UodGhpcy5fb25fc29ja2V0X2Nsb3NlLCB0aGlzKSwgdGhpcy5zZW5kUGluZ2VyID0gbmV3IFBlKHRoaXMsIHRoaXMuY29ubmVjdE9wdGlvbnMua2VlcEFsaXZlSW50ZXJ2YWwpLCB0aGlzLnJlY2VpdmVQaW5nZXIgPSBuZXcgUGUodGhpcywgdGhpcy5jb25uZWN0T3B0aW9ucy5rZWVwQWxpdmVJbnRlcnZhbCksIHRoaXMuX2Nvbm5lY3RUaW1lb3V0ICYmICh0aGlzLl9jb25uZWN0VGltZW91dC5jYW5jZWwoKSwgdGhpcy5fY29ubmVjdFRpbWVvdXQgPSBudWxsKSwgdGhpcy5fY29ubmVjdFRpbWVvdXQgPSBuZXcgZmUodGhpcywgdGhpcy5jb25uZWN0T3B0aW9ucy50aW1lb3V0LCB0aGlzLl9kaXNjb25uZWN0ZWQsIFtmLkNPTk5FQ1RfVElNRU9VVC5jb2RlLCB3KGYuQ09OTkVDVF9USU1FT1VUKV0pO1xuICAgICAgfSwgYi5wcm90b3R5cGUuX3NjaGVkdWxlX21lc3NhZ2UgPSBmdW5jdGlvbihpKSB7XG4gICAgICAgIHRoaXMuX21zZ19xdWV1ZS51bnNoaWZ0KGkpLCB0aGlzLmNvbm5lY3RlZCAmJiB0aGlzLl9wcm9jZXNzX3F1ZXVlKCk7XG4gICAgICB9LCBiLnByb3RvdHlwZS5zdG9yZSA9IGZ1bmN0aW9uKGksIHMpIHtcbiAgICAgICAgdmFyIGwgPSB7IHR5cGU6IHMudHlwZSwgbWVzc2FnZUlkZW50aWZpZXI6IHMubWVzc2FnZUlkZW50aWZpZXIsIHZlcnNpb246IDEgfTtcbiAgICAgICAgc3dpdGNoIChzLnR5cGUpIHtcbiAgICAgICAgICBjYXNlIEUuUFVCTElTSDpcbiAgICAgICAgICAgIHMucHViUmVjUmVjZWl2ZWQgJiYgKGwucHViUmVjUmVjZWl2ZWQgPSAhMCksIGwucGF5bG9hZE1lc3NhZ2UgPSB7fTtcbiAgICAgICAgICAgIGZvciAodmFyIHUgPSBcIlwiLCBoID0gcy5wYXlsb2FkTWVzc2FnZS5wYXlsb2FkQnl0ZXMsIGQgPSAwOyBkIDwgaC5sZW5ndGg7IGQrKylcbiAgICAgICAgICAgICAgaFtkXSA8PSAxNSA/IHUgPSB1ICsgXCIwXCIgKyBoW2RdLnRvU3RyaW5nKDE2KSA6IHUgPSB1ICsgaFtkXS50b1N0cmluZygxNik7XG4gICAgICAgICAgICBsLnBheWxvYWRNZXNzYWdlLnBheWxvYWRIZXggPSB1LCBsLnBheWxvYWRNZXNzYWdlLnFvcyA9IHMucGF5bG9hZE1lc3NhZ2UucW9zLCBsLnBheWxvYWRNZXNzYWdlLmRlc3RpbmF0aW9uTmFtZSA9IHMucGF5bG9hZE1lc3NhZ2UuZGVzdGluYXRpb25OYW1lLCBzLnBheWxvYWRNZXNzYWdlLmR1cGxpY2F0ZSAmJiAobC5wYXlsb2FkTWVzc2FnZS5kdXBsaWNhdGUgPSAhMCksIHMucGF5bG9hZE1lc3NhZ2UucmV0YWluZWQgJiYgKGwucGF5bG9hZE1lc3NhZ2UucmV0YWluZWQgPSAhMCksIGkuaW5kZXhPZihcIlNlbnQ6XCIpID09PSAwICYmIChzLnNlcXVlbmNlID09PSB2b2lkIDAgJiYgKHMuc2VxdWVuY2UgPSArK3RoaXMuX3NlcXVlbmNlKSwgbC5zZXF1ZW5jZSA9IHMuc2VxdWVuY2UpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHRocm93IEVycm9yKHcoZi5JTlZBTElEX1NUT1JFRF9EQVRBLCBbaSArIHRoaXMuX2xvY2FsS2V5ICsgcy5tZXNzYWdlSWRlbnRpZmllciwgbF0pKTtcbiAgICAgICAgfVxuICAgICAgICBxLnNldEl0ZW0oaSArIHRoaXMuX2xvY2FsS2V5ICsgcy5tZXNzYWdlSWRlbnRpZmllciwgSlNPTi5zdHJpbmdpZnkobCkpO1xuICAgICAgfSwgYi5wcm90b3R5cGUucmVzdG9yZSA9IGZ1bmN0aW9uKGkpIHtcbiAgICAgICAgdmFyIHMgPSBxLmdldEl0ZW0oaSksIGwgPSBKU09OLnBhcnNlKHMpLCB1ID0gbmV3IFUobC50eXBlLCBsKTtcbiAgICAgICAgc3dpdGNoIChsLnR5cGUpIHtcbiAgICAgICAgICBjYXNlIEUuUFVCTElTSDpcbiAgICAgICAgICAgIGZvciAodmFyIGggPSBsLnBheWxvYWRNZXNzYWdlLnBheWxvYWRIZXgsIGQgPSBuZXcgQXJyYXlCdWZmZXIoaC5sZW5ndGggLyAyKSwgbSA9IG5ldyBVaW50OEFycmF5KGQpLCBTID0gMDsgaC5sZW5ndGggPj0gMjsgKSB7XG4gICAgICAgICAgICAgIHZhciB5ID0gcGFyc2VJbnQoaC5zdWJzdHJpbmcoMCwgMiksIDE2KTtcbiAgICAgICAgICAgICAgaCA9IGguc3Vic3RyaW5nKDIsIGgubGVuZ3RoKSwgbVtTKytdID0geTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciBMID0gbmV3IEcobSk7XG4gICAgICAgICAgICBMLnFvcyA9IGwucGF5bG9hZE1lc3NhZ2UucW9zLCBMLmRlc3RpbmF0aW9uTmFtZSA9IGwucGF5bG9hZE1lc3NhZ2UuZGVzdGluYXRpb25OYW1lLCBsLnBheWxvYWRNZXNzYWdlLmR1cGxpY2F0ZSAmJiAoTC5kdXBsaWNhdGUgPSAhMCksIGwucGF5bG9hZE1lc3NhZ2UucmV0YWluZWQgJiYgKEwucmV0YWluZWQgPSAhMCksIHUucGF5bG9hZE1lc3NhZ2UgPSBMO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHRocm93IEVycm9yKHcoZi5JTlZBTElEX1NUT1JFRF9EQVRBLCBbaSwgc10pKTtcbiAgICAgICAgfVxuICAgICAgICBpLmluZGV4T2YoXCJTZW50OlwiICsgdGhpcy5fbG9jYWxLZXkpID09PSAwID8gKHUucGF5bG9hZE1lc3NhZ2UuZHVwbGljYXRlID0gITAsIHRoaXMuX3NlbnRNZXNzYWdlc1t1Lm1lc3NhZ2VJZGVudGlmaWVyXSA9IHUpIDogaS5pbmRleE9mKFwiUmVjZWl2ZWQ6XCIgKyB0aGlzLl9sb2NhbEtleSkgPT09IDAgJiYgKHRoaXMuX3JlY2VpdmVkTWVzc2FnZXNbdS5tZXNzYWdlSWRlbnRpZmllcl0gPSB1KTtcbiAgICAgIH0sIGIucHJvdG90eXBlLl9wcm9jZXNzX3F1ZXVlID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSBudWxsOyBpID0gdGhpcy5fbXNnX3F1ZXVlLnBvcCgpOyApXG4gICAgICAgICAgdGhpcy5fc29ja2V0X3NlbmQoaSksIHRoaXMuX25vdGlmeV9tc2dfc2VudFtpXSAmJiAodGhpcy5fbm90aWZ5X21zZ19zZW50W2ldKCksIGRlbGV0ZSB0aGlzLl9ub3RpZnlfbXNnX3NlbnRbaV0pO1xuICAgICAgfSwgYi5wcm90b3R5cGUuX3JlcXVpcmVzX2FjayA9IGZ1bmN0aW9uKGkpIHtcbiAgICAgICAgdmFyIHMgPSBPYmplY3Qua2V5cyh0aGlzLl9zZW50TWVzc2FnZXMpLmxlbmd0aDtcbiAgICAgICAgaWYgKHMgPiB0aGlzLm1heE1lc3NhZ2VJZGVudGlmaWVyKVxuICAgICAgICAgIHRocm93IEVycm9yKFwiVG9vIG1hbnkgbWVzc2FnZXM6XCIgKyBzKTtcbiAgICAgICAgZm9yICg7IHRoaXMuX3NlbnRNZXNzYWdlc1t0aGlzLl9tZXNzYWdlX2lkZW50aWZpZXJdICE9PSB2b2lkIDA7IClcbiAgICAgICAgICB0aGlzLl9tZXNzYWdlX2lkZW50aWZpZXIrKztcbiAgICAgICAgaS5tZXNzYWdlSWRlbnRpZmllciA9IHRoaXMuX21lc3NhZ2VfaWRlbnRpZmllciwgdGhpcy5fc2VudE1lc3NhZ2VzW2kubWVzc2FnZUlkZW50aWZpZXJdID0gaSwgaS50eXBlID09PSBFLlBVQkxJU0ggJiYgdGhpcy5zdG9yZShcIlNlbnQ6XCIsIGkpLCB0aGlzLl9tZXNzYWdlX2lkZW50aWZpZXIgPT09IHRoaXMubWF4TWVzc2FnZUlkZW50aWZpZXIgJiYgKHRoaXMuX21lc3NhZ2VfaWRlbnRpZmllciA9IDEpO1xuICAgICAgfSwgYi5wcm90b3R5cGUuX29uX3NvY2tldF9vcGVuID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBpID0gbmV3IFUoRS5DT05ORUNULCB0aGlzLmNvbm5lY3RPcHRpb25zKTtcbiAgICAgICAgaS5jbGllbnRJZCA9IHRoaXMuY2xpZW50SWQsIHRoaXMuX3NvY2tldF9zZW5kKGkpO1xuICAgICAgfSwgYi5wcm90b3R5cGUuX29uX3NvY2tldF9tZXNzYWdlID0gZnVuY3Rpb24oaSkge1xuICAgICAgICB0aGlzLl90cmFjZShcIkNsaWVudC5fb25fc29ja2V0X21lc3NhZ2VcIiwgaS5kYXRhKTtcbiAgICAgICAgZm9yICh2YXIgcyA9IHRoaXMuX2RlZnJhbWVNZXNzYWdlcyhpLmRhdGEpLCBsID0gMDsgbCA8IHMubGVuZ3RoOyBsICs9IDEpXG4gICAgICAgICAgdGhpcy5faGFuZGxlTWVzc2FnZShzW2xdKTtcbiAgICAgIH0sIGIucHJvdG90eXBlLl9kZWZyYW1lTWVzc2FnZXMgPSBmdW5jdGlvbihpKSB7XG4gICAgICAgIHZhciBzID0gbmV3IFVpbnQ4QXJyYXkoaSksIGwgPSBbXTtcbiAgICAgICAgaWYgKHRoaXMucmVjZWl2ZUJ1ZmZlcikge1xuICAgICAgICAgIHZhciB1ID0gbmV3IFVpbnQ4QXJyYXkodGhpcy5yZWNlaXZlQnVmZmVyLmxlbmd0aCArIHMubGVuZ3RoKTtcbiAgICAgICAgICB1LnNldCh0aGlzLnJlY2VpdmVCdWZmZXIpLCB1LnNldChzLCB0aGlzLnJlY2VpdmVCdWZmZXIubGVuZ3RoKSwgcyA9IHUsIGRlbGV0ZSB0aGlzLnJlY2VpdmVCdWZmZXI7XG4gICAgICAgIH1cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBmb3IgKHZhciBoID0gMDsgaCA8IHMubGVuZ3RoOyApIHtcbiAgICAgICAgICAgIHZhciBkID0gQWUocywgaCksIG0gPSBkWzBdO1xuICAgICAgICAgICAgaWYgKGggPSBkWzFdLCBtICE9PSBudWxsKVxuICAgICAgICAgICAgICBsLnB1c2gobSk7XG4gICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cbiAgICAgICAgICBoIDwgcy5sZW5ndGggJiYgKHRoaXMucmVjZWl2ZUJ1ZmZlciA9IHMuc3ViYXJyYXkoaCkpO1xuICAgICAgICB9IGNhdGNoICh5KSB7XG4gICAgICAgICAgdmFyIFMgPSB5Lmhhc093blByb3BlcnR5KFwic3RhY2tcIikgPT0gXCJ1bmRlZmluZWRcIiA/IHkuc3RhY2sudG9TdHJpbmcoKSA6IFwiTm8gRXJyb3IgU3RhY2sgQXZhaWxhYmxlXCI7XG4gICAgICAgICAgdGhpcy5fZGlzY29ubmVjdGVkKGYuSU5URVJOQUxfRVJST1IuY29kZSwgdyhmLklOVEVSTkFMX0VSUk9SLCBbeS5tZXNzYWdlLCBTXSkpO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbDtcbiAgICAgIH0sIGIucHJvdG90eXBlLl9oYW5kbGVNZXNzYWdlID0gZnVuY3Rpb24oaSkge1xuICAgICAgICB0aGlzLl90cmFjZShcIkNsaWVudC5faGFuZGxlTWVzc2FnZVwiLCBpKTtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBzd2l0Y2ggKGkudHlwZSkge1xuICAgICAgICAgICAgY2FzZSBFLkNPTk5BQ0s6XG4gICAgICAgICAgICAgIGlmICh0aGlzLl9jb25uZWN0VGltZW91dC5jYW5jZWwoKSwgdGhpcy5fcmVjb25uZWN0VGltZW91dCAmJiB0aGlzLl9yZWNvbm5lY3RUaW1lb3V0LmNhbmNlbCgpLCB0aGlzLmNvbm5lY3RPcHRpb25zLmNsZWFuU2Vzc2lvbikge1xuICAgICAgICAgICAgICAgIGZvciAodmFyIHMgaW4gdGhpcy5fc2VudE1lc3NhZ2VzKSB7XG4gICAgICAgICAgICAgICAgICB2YXIgYSA9IHRoaXMuX3NlbnRNZXNzYWdlc1tzXTtcbiAgICAgICAgICAgICAgICAgIHEucmVtb3ZlSXRlbShcIlNlbnQ6XCIgKyB0aGlzLl9sb2NhbEtleSArIGEubWVzc2FnZUlkZW50aWZpZXIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLl9zZW50TWVzc2FnZXMgPSB7fTtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBzIGluIHRoaXMuX3JlY2VpdmVkTWVzc2FnZXMpIHtcbiAgICAgICAgICAgICAgICAgIHZhciBMID0gdGhpcy5fcmVjZWl2ZWRNZXNzYWdlc1tzXTtcbiAgICAgICAgICAgICAgICAgIHEucmVtb3ZlSXRlbShcIlJlY2VpdmVkOlwiICsgdGhpcy5fbG9jYWxLZXkgKyBMLm1lc3NhZ2VJZGVudGlmaWVyKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5fcmVjZWl2ZWRNZXNzYWdlcyA9IHt9O1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGlmIChpLnJldHVybkNvZGUgPT09IDApXG4gICAgICAgICAgICAgICAgdGhpcy5jb25uZWN0ZWQgPSAhMCwgdGhpcy5jb25uZWN0T3B0aW9ucy51cmlzICYmICh0aGlzLmhvc3RJbmRleCA9IHRoaXMuY29ubmVjdE9wdGlvbnMudXJpcy5sZW5ndGgpO1xuICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9kaXNjb25uZWN0ZWQoZi5DT05OQUNLX1JFVFVSTkNPREUuY29kZSwgdyhmLkNPTk5BQ0tfUkVUVVJOQ09ERSwgW2kucmV0dXJuQ29kZSwgaWVbaS5yZXR1cm5Db2RlXV0pKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB2YXIgaCA9IFtdO1xuICAgICAgICAgICAgICBmb3IgKHZhciBsIGluIHRoaXMuX3NlbnRNZXNzYWdlcylcbiAgICAgICAgICAgICAgICB0aGlzLl9zZW50TWVzc2FnZXMuaGFzT3duUHJvcGVydHkobCkgJiYgaC5wdXNoKHRoaXMuX3NlbnRNZXNzYWdlc1tsXSk7XG4gICAgICAgICAgICAgIGlmICh0aGlzLl9idWZmZXJlZF9tc2dfcXVldWUubGVuZ3RoID4gMClcbiAgICAgICAgICAgICAgICBmb3IgKHZhciB1ID0gbnVsbDsgdSA9IHRoaXMuX2J1ZmZlcmVkX21zZ19xdWV1ZS5wb3AoKTsgKVxuICAgICAgICAgICAgICAgICAgaC5wdXNoKHUpLCB0aGlzLm9uTWVzc2FnZURlbGl2ZXJlZCAmJiAodGhpcy5fbm90aWZ5X21zZ19zZW50W3VdID0gdGhpcy5vbk1lc3NhZ2VEZWxpdmVyZWQodS5wYXlsb2FkTWVzc2FnZSkpO1xuICAgICAgICAgICAgICBmb3IgKHZhciBoID0gaC5zb3J0KGZ1bmN0aW9uKHgsIEspIHtcbiAgICAgICAgICAgICAgICByZXR1cm4geC5zZXF1ZW5jZSAtIEsuc2VxdWVuY2U7XG4gICAgICAgICAgICAgIH0pLCBkID0gMCwgbSA9IGgubGVuZ3RoOyBkIDwgbTsgZCsrKSB7XG4gICAgICAgICAgICAgICAgdmFyIGEgPSBoW2RdO1xuICAgICAgICAgICAgICAgIGlmIChhLnR5cGUgPT0gRS5QVUJMSVNIICYmIGEucHViUmVjUmVjZWl2ZWQpIHtcbiAgICAgICAgICAgICAgICAgIHZhciBTID0gbmV3IFUoRS5QVUJSRUwsIHsgbWVzc2FnZUlkZW50aWZpZXI6IGEubWVzc2FnZUlkZW50aWZpZXIgfSk7XG4gICAgICAgICAgICAgICAgICB0aGlzLl9zY2hlZHVsZV9tZXNzYWdlKFMpO1xuICAgICAgICAgICAgICAgIH0gZWxzZVxuICAgICAgICAgICAgICAgICAgdGhpcy5fc2NoZWR1bGVfbWVzc2FnZShhKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB0aGlzLmNvbm5lY3RPcHRpb25zLm9uU3VjY2VzcyAmJiB0aGlzLmNvbm5lY3RPcHRpb25zLm9uU3VjY2Vzcyh7IGludm9jYXRpb25Db250ZXh0OiB0aGlzLmNvbm5lY3RPcHRpb25zLmludm9jYXRpb25Db250ZXh0IH0pO1xuICAgICAgICAgICAgICB2YXIgeSA9ICExO1xuICAgICAgICAgICAgICB0aGlzLl9yZWNvbm5lY3RpbmcgJiYgKHkgPSAhMCwgdGhpcy5fcmVjb25uZWN0SW50ZXJ2YWwgPSAxLCB0aGlzLl9yZWNvbm5lY3RpbmcgPSAhMSksIHRoaXMuX2Nvbm5lY3RlZCh5LCB0aGlzLl93c3VyaSksIHRoaXMuX3Byb2Nlc3NfcXVldWUoKTtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIEUuUFVCTElTSDpcbiAgICAgICAgICAgICAgdGhpcy5fcmVjZWl2ZVB1Ymxpc2goaSk7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBFLlBVQkFDSzpcbiAgICAgICAgICAgICAgdmFyIGEgPSB0aGlzLl9zZW50TWVzc2FnZXNbaS5tZXNzYWdlSWRlbnRpZmllcl07XG4gICAgICAgICAgICAgIGEgJiYgKGRlbGV0ZSB0aGlzLl9zZW50TWVzc2FnZXNbaS5tZXNzYWdlSWRlbnRpZmllcl0sIHEucmVtb3ZlSXRlbShcIlNlbnQ6XCIgKyB0aGlzLl9sb2NhbEtleSArIGkubWVzc2FnZUlkZW50aWZpZXIpLCB0aGlzLm9uTWVzc2FnZURlbGl2ZXJlZCAmJiB0aGlzLm9uTWVzc2FnZURlbGl2ZXJlZChhLnBheWxvYWRNZXNzYWdlKSk7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBFLlBVQlJFQzpcbiAgICAgICAgICAgICAgdmFyIGEgPSB0aGlzLl9zZW50TWVzc2FnZXNbaS5tZXNzYWdlSWRlbnRpZmllcl07XG4gICAgICAgICAgICAgIGlmIChhKSB7XG4gICAgICAgICAgICAgICAgYS5wdWJSZWNSZWNlaXZlZCA9ICEwO1xuICAgICAgICAgICAgICAgIHZhciBTID0gbmV3IFUoRS5QVUJSRUwsIHsgbWVzc2FnZUlkZW50aWZpZXI6IGkubWVzc2FnZUlkZW50aWZpZXIgfSk7XG4gICAgICAgICAgICAgICAgdGhpcy5zdG9yZShcIlNlbnQ6XCIsIGEpLCB0aGlzLl9zY2hlZHVsZV9tZXNzYWdlKFMpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBFLlBVQlJFTDpcbiAgICAgICAgICAgICAgdmFyIEwgPSB0aGlzLl9yZWNlaXZlZE1lc3NhZ2VzW2kubWVzc2FnZUlkZW50aWZpZXJdO1xuICAgICAgICAgICAgICBxLnJlbW92ZUl0ZW0oXCJSZWNlaXZlZDpcIiArIHRoaXMuX2xvY2FsS2V5ICsgaS5tZXNzYWdlSWRlbnRpZmllciksIEwgJiYgKHRoaXMuX3JlY2VpdmVNZXNzYWdlKEwpLCBkZWxldGUgdGhpcy5fcmVjZWl2ZWRNZXNzYWdlc1tpLm1lc3NhZ2VJZGVudGlmaWVyXSk7XG4gICAgICAgICAgICAgIHZhciB2ID0gbmV3IFUoRS5QVUJDT01QLCB7IG1lc3NhZ2VJZGVudGlmaWVyOiBpLm1lc3NhZ2VJZGVudGlmaWVyIH0pO1xuICAgICAgICAgICAgICB0aGlzLl9zY2hlZHVsZV9tZXNzYWdlKHYpO1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgRS5QVUJDT01QOlxuICAgICAgICAgICAgICB2YXIgYSA9IHRoaXMuX3NlbnRNZXNzYWdlc1tpLm1lc3NhZ2VJZGVudGlmaWVyXTtcbiAgICAgICAgICAgICAgZGVsZXRlIHRoaXMuX3NlbnRNZXNzYWdlc1tpLm1lc3NhZ2VJZGVudGlmaWVyXSwgcS5yZW1vdmVJdGVtKFwiU2VudDpcIiArIHRoaXMuX2xvY2FsS2V5ICsgaS5tZXNzYWdlSWRlbnRpZmllciksIHRoaXMub25NZXNzYWdlRGVsaXZlcmVkICYmIHRoaXMub25NZXNzYWdlRGVsaXZlcmVkKGEucGF5bG9hZE1lc3NhZ2UpO1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgRS5TVUJBQ0s6XG4gICAgICAgICAgICAgIHZhciBhID0gdGhpcy5fc2VudE1lc3NhZ2VzW2kubWVzc2FnZUlkZW50aWZpZXJdO1xuICAgICAgICAgICAgICBhICYmIChhLnRpbWVPdXQgJiYgYS50aW1lT3V0LmNhbmNlbCgpLCBpLnJldHVybkNvZGVbMF0gPT09IDEyOCA/IGEub25GYWlsdXJlICYmIGEub25GYWlsdXJlKGkucmV0dXJuQ29kZSkgOiBhLm9uU3VjY2VzcyAmJiBhLm9uU3VjY2VzcyhpLnJldHVybkNvZGUpLCBkZWxldGUgdGhpcy5fc2VudE1lc3NhZ2VzW2kubWVzc2FnZUlkZW50aWZpZXJdKTtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIEUuVU5TVUJBQ0s6XG4gICAgICAgICAgICAgIHZhciBhID0gdGhpcy5fc2VudE1lc3NhZ2VzW2kubWVzc2FnZUlkZW50aWZpZXJdO1xuICAgICAgICAgICAgICBhICYmIChhLnRpbWVPdXQgJiYgYS50aW1lT3V0LmNhbmNlbCgpLCBhLmNhbGxiYWNrICYmIGEuY2FsbGJhY2soKSwgZGVsZXRlIHRoaXMuX3NlbnRNZXNzYWdlc1tpLm1lc3NhZ2VJZGVudGlmaWVyXSk7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBFLlBJTkdSRVNQOlxuICAgICAgICAgICAgICB0aGlzLnNlbmRQaW5nZXIucmVzZXQoKTtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIEUuRElTQ09OTkVDVDpcbiAgICAgICAgICAgICAgdGhpcy5fZGlzY29ubmVjdGVkKGYuSU5WQUxJRF9NUVRUX01FU1NBR0VfVFlQRS5jb2RlLCB3KGYuSU5WQUxJRF9NUVRUX01FU1NBR0VfVFlQRSwgW2kudHlwZV0pKTtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICB0aGlzLl9kaXNjb25uZWN0ZWQoZi5JTlZBTElEX01RVFRfTUVTU0FHRV9UWVBFLmNvZGUsIHcoZi5JTlZBTElEX01RVFRfTUVTU0FHRV9UWVBFLCBbaS50eXBlXSkpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBjYXRjaCAoeCkge1xuICAgICAgICAgIHZhciBJID0geC5oYXNPd25Qcm9wZXJ0eShcInN0YWNrXCIpID09IFwidW5kZWZpbmVkXCIgPyB4LnN0YWNrLnRvU3RyaW5nKCkgOiBcIk5vIEVycm9yIFN0YWNrIEF2YWlsYWJsZVwiO1xuICAgICAgICAgIHRoaXMuX2Rpc2Nvbm5lY3RlZChmLklOVEVSTkFMX0VSUk9SLmNvZGUsIHcoZi5JTlRFUk5BTF9FUlJPUiwgW3gubWVzc2FnZSwgSV0pKTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgIH0sIGIucHJvdG90eXBlLl9vbl9zb2NrZXRfZXJyb3IgPSBmdW5jdGlvbihpKSB7XG4gICAgICAgIHRoaXMuX3JlY29ubmVjdGluZyB8fCB0aGlzLl9kaXNjb25uZWN0ZWQoZi5TT0NLRVRfRVJST1IuY29kZSwgdyhmLlNPQ0tFVF9FUlJPUiwgW2kuZGF0YV0pKTtcbiAgICAgIH0sIGIucHJvdG90eXBlLl9vbl9zb2NrZXRfY2xvc2UgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgdGhpcy5fcmVjb25uZWN0aW5nIHx8IHRoaXMuX2Rpc2Nvbm5lY3RlZChmLlNPQ0tFVF9DTE9TRS5jb2RlLCB3KGYuU09DS0VUX0NMT1NFKSk7XG4gICAgICB9LCBiLnByb3RvdHlwZS5fc29ja2V0X3NlbmQgPSBmdW5jdGlvbihpKSB7XG4gICAgICAgIGlmIChpLnR5cGUgPT0gMSkge1xuICAgICAgICAgIHZhciBzID0gdGhpcy5fdHJhY2VNYXNrKGksIFwicGFzc3dvcmRcIik7XG4gICAgICAgICAgdGhpcy5fdHJhY2UoXCJDbGllbnQuX3NvY2tldF9zZW5kXCIsIHMpO1xuICAgICAgICB9IGVsc2VcbiAgICAgICAgICB0aGlzLl90cmFjZShcIkNsaWVudC5fc29ja2V0X3NlbmRcIiwgaSk7XG4gICAgICAgIHRoaXMuc29ja2V0LnNlbmQoaS5lbmNvZGUoKSksIHRoaXMuc2VuZFBpbmdlci5yZXNldCgpO1xuICAgICAgfSwgYi5wcm90b3R5cGUuX3JlY2VpdmVQdWJsaXNoID0gZnVuY3Rpb24oaSkge1xuICAgICAgICBzd2l0Y2ggKGkucGF5bG9hZE1lc3NhZ2UucW9zKSB7XG4gICAgICAgICAgY2FzZSBcInVuZGVmaW5lZFwiOlxuICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgIHRoaXMuX3JlY2VpdmVNZXNzYWdlKGkpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgdmFyIHMgPSBuZXcgVShFLlBVQkFDSywgeyBtZXNzYWdlSWRlbnRpZmllcjogaS5tZXNzYWdlSWRlbnRpZmllciB9KTtcbiAgICAgICAgICAgIHRoaXMuX3NjaGVkdWxlX21lc3NhZ2UocyksIHRoaXMuX3JlY2VpdmVNZXNzYWdlKGkpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgdGhpcy5fcmVjZWl2ZWRNZXNzYWdlc1tpLm1lc3NhZ2VJZGVudGlmaWVyXSA9IGksIHRoaXMuc3RvcmUoXCJSZWNlaXZlZDpcIiwgaSk7XG4gICAgICAgICAgICB2YXIgbCA9IG5ldyBVKEUuUFVCUkVDLCB7IG1lc3NhZ2VJZGVudGlmaWVyOiBpLm1lc3NhZ2VJZGVudGlmaWVyIH0pO1xuICAgICAgICAgICAgdGhpcy5fc2NoZWR1bGVfbWVzc2FnZShsKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICB0aHJvdyBFcnJvcihcIkludmFpbGQgcW9zPVwiICsgaS5wYXlsb2FkTWVzc2FnZS5xb3MpO1xuICAgICAgICB9XG4gICAgICB9LCBiLnByb3RvdHlwZS5fcmVjZWl2ZU1lc3NhZ2UgPSBmdW5jdGlvbihpKSB7XG4gICAgICAgIHRoaXMub25NZXNzYWdlQXJyaXZlZCAmJiB0aGlzLm9uTWVzc2FnZUFycml2ZWQoaS5wYXlsb2FkTWVzc2FnZSk7XG4gICAgICB9LCBiLnByb3RvdHlwZS5fY29ubmVjdGVkID0gZnVuY3Rpb24oaSwgcykge1xuICAgICAgICB0aGlzLm9uQ29ubmVjdGVkICYmIHRoaXMub25Db25uZWN0ZWQoaSwgcyk7XG4gICAgICB9LCBiLnByb3RvdHlwZS5fcmVjb25uZWN0ID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHRoaXMuX3RyYWNlKFwiQ2xpZW50Ll9yZWNvbm5lY3RcIiksIHRoaXMuY29ubmVjdGVkIHx8ICh0aGlzLl9yZWNvbm5lY3RpbmcgPSAhMCwgdGhpcy5zZW5kUGluZ2VyLmNhbmNlbCgpLCB0aGlzLnJlY2VpdmVQaW5nZXIuY2FuY2VsKCksIHRoaXMuX3JlY29ubmVjdEludGVydmFsIDwgMTI4ICYmICh0aGlzLl9yZWNvbm5lY3RJbnRlcnZhbCA9IHRoaXMuX3JlY29ubmVjdEludGVydmFsICogMiksIHRoaXMuY29ubmVjdE9wdGlvbnMudXJpcyA/ICh0aGlzLmhvc3RJbmRleCA9IDAsIHRoaXMuX2RvQ29ubmVjdCh0aGlzLmNvbm5lY3RPcHRpb25zLnVyaXNbMF0pKSA6IHRoaXMuX2RvQ29ubmVjdCh0aGlzLnVyaSkpO1xuICAgICAgfSwgYi5wcm90b3R5cGUuX2Rpc2Nvbm5lY3RlZCA9IGZ1bmN0aW9uKGksIHMpIHtcbiAgICAgICAgaWYgKHRoaXMuX3RyYWNlKFwiQ2xpZW50Ll9kaXNjb25uZWN0ZWRcIiwgaSwgcyksIGkgIT09IHZvaWQgMCAmJiB0aGlzLl9yZWNvbm5lY3RpbmcpIHtcbiAgICAgICAgICB0aGlzLl9yZWNvbm5lY3RUaW1lb3V0ID0gbmV3IGZlKHRoaXMsIHRoaXMuX3JlY29ubmVjdEludGVydmFsLCB0aGlzLl9yZWNvbm5lY3QpO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5zZW5kUGluZ2VyLmNhbmNlbCgpLCB0aGlzLnJlY2VpdmVQaW5nZXIuY2FuY2VsKCksIHRoaXMuX2Nvbm5lY3RUaW1lb3V0ICYmICh0aGlzLl9jb25uZWN0VGltZW91dC5jYW5jZWwoKSwgdGhpcy5fY29ubmVjdFRpbWVvdXQgPSBudWxsKSwgdGhpcy5fbXNnX3F1ZXVlID0gW10sIHRoaXMuX2J1ZmZlcmVkX21zZ19xdWV1ZSA9IFtdLCB0aGlzLl9ub3RpZnlfbXNnX3NlbnQgPSB7fSwgdGhpcy5zb2NrZXQgJiYgKHRoaXMuc29ja2V0Lm9ub3BlbiA9IG51bGwsIHRoaXMuc29ja2V0Lm9ubWVzc2FnZSA9IG51bGwsIHRoaXMuc29ja2V0Lm9uZXJyb3IgPSBudWxsLCB0aGlzLnNvY2tldC5vbmNsb3NlID0gbnVsbCwgdGhpcy5zb2NrZXQucmVhZHlTdGF0ZSA9PT0gMSAmJiB0aGlzLnNvY2tldC5jbG9zZSgpLCBkZWxldGUgdGhpcy5zb2NrZXQpLCB0aGlzLmNvbm5lY3RPcHRpb25zLnVyaXMgJiYgdGhpcy5ob3N0SW5kZXggPCB0aGlzLmNvbm5lY3RPcHRpb25zLnVyaXMubGVuZ3RoIC0gMSlcbiAgICAgICAgICB0aGlzLmhvc3RJbmRleCsrLCB0aGlzLl9kb0Nvbm5lY3QodGhpcy5jb25uZWN0T3B0aW9ucy51cmlzW3RoaXMuaG9zdEluZGV4XSk7XG4gICAgICAgIGVsc2UgaWYgKGkgPT09IHZvaWQgMCAmJiAoaSA9IGYuT0suY29kZSwgcyA9IHcoZi5PSykpLCB0aGlzLmNvbm5lY3RlZCkge1xuICAgICAgICAgIGlmICh0aGlzLmNvbm5lY3RlZCA9ICExLCB0aGlzLm9uQ29ubmVjdGlvbkxvc3QgJiYgdGhpcy5vbkNvbm5lY3Rpb25Mb3N0KHsgZXJyb3JDb2RlOiBpLCBlcnJvck1lc3NhZ2U6IHMsIHJlY29ubmVjdDogdGhpcy5jb25uZWN0T3B0aW9ucy5yZWNvbm5lY3QsIHVyaTogdGhpcy5fd3N1cmkgfSksIGkgIT09IGYuT0suY29kZSAmJiB0aGlzLmNvbm5lY3RPcHRpb25zLnJlY29ubmVjdCkge1xuICAgICAgICAgICAgdGhpcy5fcmVjb25uZWN0SW50ZXJ2YWwgPSAxLCB0aGlzLl9yZWNvbm5lY3QoKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZVxuICAgICAgICAgIHRoaXMuY29ubmVjdE9wdGlvbnMubXF0dFZlcnNpb24gPT09IDQgJiYgdGhpcy5jb25uZWN0T3B0aW9ucy5tcXR0VmVyc2lvbkV4cGxpY2l0ID09PSAhMSA/ICh0aGlzLl90cmFjZShcIkZhaWxlZCB0byBjb25uZWN0IFY0LCBkcm9wcGluZyBiYWNrIHRvIFYzXCIpLCB0aGlzLmNvbm5lY3RPcHRpb25zLm1xdHRWZXJzaW9uID0gMywgdGhpcy5jb25uZWN0T3B0aW9ucy51cmlzID8gKHRoaXMuaG9zdEluZGV4ID0gMCwgdGhpcy5fZG9Db25uZWN0KHRoaXMuY29ubmVjdE9wdGlvbnMudXJpc1swXSkpIDogdGhpcy5fZG9Db25uZWN0KHRoaXMudXJpKSkgOiB0aGlzLmNvbm5lY3RPcHRpb25zLm9uRmFpbHVyZSAmJiB0aGlzLmNvbm5lY3RPcHRpb25zLm9uRmFpbHVyZSh7IGludm9jYXRpb25Db250ZXh0OiB0aGlzLmNvbm5lY3RPcHRpb25zLmludm9jYXRpb25Db250ZXh0LCBlcnJvckNvZGU6IGksIGVycm9yTWVzc2FnZTogcyB9KTtcbiAgICAgIH0sIGIucHJvdG90eXBlLl90cmFjZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICBpZiAodGhpcy50cmFjZUZ1bmN0aW9uKSB7XG4gICAgICAgICAgdmFyIGkgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMpO1xuICAgICAgICAgIGZvciAodmFyIHMgaW4gaSlcbiAgICAgICAgICAgIHR5cGVvZiBpW3NdIDwgXCJ1XCIgJiYgaS5zcGxpY2UocywgMSwgSlNPTi5zdHJpbmdpZnkoaVtzXSkpO1xuICAgICAgICAgIHZhciBsID0gaS5qb2luKFwiXCIpO1xuICAgICAgICAgIHRoaXMudHJhY2VGdW5jdGlvbih7IHNldmVyaXR5OiBcIkRlYnVnXCIsIG1lc3NhZ2U6IGwgfSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuX3RyYWNlQnVmZmVyICE9PSBudWxsKVxuICAgICAgICAgIGZvciAodmFyIHMgPSAwLCB1ID0gYXJndW1lbnRzLmxlbmd0aDsgcyA8IHU7IHMrKylcbiAgICAgICAgICAgIHRoaXMuX3RyYWNlQnVmZmVyLmxlbmd0aCA9PSB0aGlzLl9NQVhfVFJBQ0VfRU5UUklFUyAmJiB0aGlzLl90cmFjZUJ1ZmZlci5zaGlmdCgpLCBzID09PSAwID8gdGhpcy5fdHJhY2VCdWZmZXIucHVzaChhcmd1bWVudHNbc10pIDogdHlwZW9mIGFyZ3VtZW50c1tzXSA+IFwidVwiID8gdGhpcy5fdHJhY2VCdWZmZXIucHVzaChhcmd1bWVudHNbc10pIDogdGhpcy5fdHJhY2VCdWZmZXIucHVzaChcIiAgXCIgKyBKU09OLnN0cmluZ2lmeShhcmd1bWVudHNbc10pKTtcbiAgICAgIH0sIGIucHJvdG90eXBlLl90cmFjZU1hc2sgPSBmdW5jdGlvbihpLCBzKSB7XG4gICAgICAgIHZhciBsID0ge307XG4gICAgICAgIGZvciAodmFyIHUgaW4gaSlcbiAgICAgICAgICBpLmhhc093blByb3BlcnR5KHUpICYmICh1ID09IHMgPyBsW3VdID0gXCIqKioqKipcIiA6IGxbdV0gPSBpW3VdKTtcbiAgICAgICAgcmV0dXJuIGw7XG4gICAgICB9O1xuICAgICAgdmFyIE1lID0gZnVuY3Rpb24oaSwgcywgbCwgdSkge1xuICAgICAgICB2YXIgaDtcbiAgICAgICAgaWYgKHR5cGVvZiBpICE9IFwic3RyaW5nXCIpXG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKHcoZi5JTlZBTElEX1RZUEUsIFt0eXBlb2YgaSwgXCJob3N0XCJdKSk7XG4gICAgICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID09IDIpIHtcbiAgICAgICAgICB1ID0gcywgaCA9IGk7XG4gICAgICAgICAgdmFyIGQgPSBoLm1hdGNoKC9eKHdzcz8pOlxcL1xcLygoXFxbKC4rKVxcXSl8KFteXFwvXSs/KSkoOihcXGQrKSk/KFxcLy4qKSQvKTtcbiAgICAgICAgICBpZiAoZClcbiAgICAgICAgICAgIGkgPSBkWzRdIHx8IGRbMl0sIHMgPSBwYXJzZUludChkWzddKSwgbCA9IGRbOF07XG4gICAgICAgICAgZWxzZVxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKHcoZi5JTlZBTElEX0FSR1VNRU5ULCBbaSwgXCJob3N0XCJdKSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT0gMyAmJiAodSA9IGwsIGwgPSBcIi9tcXR0XCIpLCB0eXBlb2YgcyAhPSBcIm51bWJlclwiIHx8IHMgPCAwKVxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKHcoZi5JTlZBTElEX1RZUEUsIFt0eXBlb2YgcywgXCJwb3J0XCJdKSk7XG4gICAgICAgICAgaWYgKHR5cGVvZiBsICE9IFwic3RyaW5nXCIpXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IodyhmLklOVkFMSURfVFlQRSwgW3R5cGVvZiBsLCBcInBhdGhcIl0pKTtcbiAgICAgICAgICB2YXIgbSA9IGkuaW5kZXhPZihcIjpcIikgIT09IC0xICYmIGkuc2xpY2UoMCwgMSkgIT09IFwiW1wiICYmIGkuc2xpY2UoLTEpICE9PSBcIl1cIjtcbiAgICAgICAgICBoID0gXCJ3czovL1wiICsgKG0gPyBcIltcIiArIGkgKyBcIl1cIiA6IGkpICsgXCI6XCIgKyBzICsgbDtcbiAgICAgICAgfVxuICAgICAgICBmb3IgKHZhciBTID0gMCwgeSA9IDA7IHkgPCB1Lmxlbmd0aDsgeSsrKSB7XG4gICAgICAgICAgdmFyIEwgPSB1LmNoYXJDb2RlQXQoeSk7XG4gICAgICAgICAgNTUyOTYgPD0gTCAmJiBMIDw9IDU2MzE5ICYmIHkrKywgUysrO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0eXBlb2YgdSAhPSBcInN0cmluZ1wiIHx8IFMgPiA2NTUzNSlcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IodyhmLklOVkFMSURfQVJHVU1FTlQsIFt1LCBcImNsaWVudElkXCJdKSk7XG4gICAgICAgIHZhciB2ID0gbmV3IGIoaCwgaSwgcywgbCwgdSk7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKHRoaXMsIHtcbiAgICAgICAgICBob3N0OiB7XG4gICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICByZXR1cm4gaTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzZXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IodyhmLlVOU1VQUE9SVEVEX09QRVJBVElPTikpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sXG4gICAgICAgICAgcG9ydDoge1xuICAgICAgICAgICAgZ2V0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHM7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc2V0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKHcoZi5VTlNVUFBPUlRFRF9PUEVSQVRJT04pKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LFxuICAgICAgICAgIHBhdGg6IHtcbiAgICAgICAgICAgIGdldDogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgIHJldHVybiBsO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHNldDogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcih3KGYuVU5TVVBQT1JURURfT1BFUkFUSU9OKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSxcbiAgICAgICAgICB1cmk6IHtcbiAgICAgICAgICAgIGdldDogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHNldDogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcih3KGYuVU5TVVBQT1JURURfT1BFUkFUSU9OKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSxcbiAgICAgICAgICBjbGllbnRJZDoge1xuICAgICAgICAgICAgZ2V0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHYuY2xpZW50SWQ7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc2V0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKHcoZi5VTlNVUFBPUlRFRF9PUEVSQVRJT04pKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LFxuICAgICAgICAgIG9uQ29ubmVjdGVkOiB7XG4gICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICByZXR1cm4gdi5vbkNvbm5lY3RlZDtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzZXQ6IGZ1bmN0aW9uKGEpIHtcbiAgICAgICAgICAgICAgaWYgKHR5cGVvZiBhID09IFwiZnVuY3Rpb25cIilcbiAgICAgICAgICAgICAgICB2Lm9uQ29ubmVjdGVkID0gYTtcbiAgICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcih3KGYuSU5WQUxJRF9UWVBFLCBbdHlwZW9mIGEsIFwib25Db25uZWN0ZWRcIl0pKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LFxuICAgICAgICAgIGRpc2Nvbm5lY3RlZFB1Ymxpc2hpbmc6IHtcbiAgICAgICAgICAgIGdldDogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgIHJldHVybiB2LmRpc2Nvbm5lY3RlZFB1Ymxpc2hpbmc7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc2V0OiBmdW5jdGlvbihhKSB7XG4gICAgICAgICAgICAgIHYuZGlzY29ubmVjdGVkUHVibGlzaGluZyA9IGE7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSxcbiAgICAgICAgICBkaXNjb25uZWN0ZWRCdWZmZXJTaXplOiB7XG4gICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICByZXR1cm4gdi5kaXNjb25uZWN0ZWRCdWZmZXJTaXplO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHNldDogZnVuY3Rpb24oYSkge1xuICAgICAgICAgICAgICB2LmRpc2Nvbm5lY3RlZEJ1ZmZlclNpemUgPSBhO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sXG4gICAgICAgICAgb25Db25uZWN0aW9uTG9zdDoge1xuICAgICAgICAgICAgZ2V0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHYub25Db25uZWN0aW9uTG9zdDtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzZXQ6IGZ1bmN0aW9uKGEpIHtcbiAgICAgICAgICAgICAgaWYgKHR5cGVvZiBhID09IFwiZnVuY3Rpb25cIilcbiAgICAgICAgICAgICAgICB2Lm9uQ29ubmVjdGlvbkxvc3QgPSBhO1xuICAgICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKHcoZi5JTlZBTElEX1RZUEUsIFt0eXBlb2YgYSwgXCJvbkNvbm5lY3Rpb25Mb3N0XCJdKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSxcbiAgICAgICAgICBvbk1lc3NhZ2VEZWxpdmVyZWQ6IHtcbiAgICAgICAgICAgIGdldDogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgIHJldHVybiB2Lm9uTWVzc2FnZURlbGl2ZXJlZDtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzZXQ6IGZ1bmN0aW9uKGEpIHtcbiAgICAgICAgICAgICAgaWYgKHR5cGVvZiBhID09IFwiZnVuY3Rpb25cIilcbiAgICAgICAgICAgICAgICB2Lm9uTWVzc2FnZURlbGl2ZXJlZCA9IGE7XG4gICAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IodyhmLklOVkFMSURfVFlQRSwgW3R5cGVvZiBhLCBcIm9uTWVzc2FnZURlbGl2ZXJlZFwiXSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sXG4gICAgICAgICAgb25NZXNzYWdlQXJyaXZlZDoge1xuICAgICAgICAgICAgZ2V0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHYub25NZXNzYWdlQXJyaXZlZDtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzZXQ6IGZ1bmN0aW9uKGEpIHtcbiAgICAgICAgICAgICAgaWYgKHR5cGVvZiBhID09IFwiZnVuY3Rpb25cIilcbiAgICAgICAgICAgICAgICB2Lm9uTWVzc2FnZUFycml2ZWQgPSBhO1xuICAgICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKHcoZi5JTlZBTElEX1RZUEUsIFt0eXBlb2YgYSwgXCJvbk1lc3NhZ2VBcnJpdmVkXCJdKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSxcbiAgICAgICAgICB0cmFjZToge1xuICAgICAgICAgICAgZ2V0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHYudHJhY2VGdW5jdGlvbjtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzZXQ6IGZ1bmN0aW9uKGEpIHtcbiAgICAgICAgICAgICAgaWYgKHR5cGVvZiBhID09IFwiZnVuY3Rpb25cIilcbiAgICAgICAgICAgICAgICB2LnRyYWNlRnVuY3Rpb24gPSBhO1xuICAgICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKHcoZi5JTlZBTElEX1RZUEUsIFt0eXBlb2YgYSwgXCJvblRyYWNlXCJdKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9KSwgdGhpcy5jb25uZWN0ID0gZnVuY3Rpb24oYSkge1xuICAgICAgICAgIGlmIChhID0gYSB8fCB7fSwgZWUoYSwge1xuICAgICAgICAgICAgdGltZW91dDogXCJudW1iZXJcIixcbiAgICAgICAgICAgIHVzZXJOYW1lOiBcInN0cmluZ1wiLFxuICAgICAgICAgICAgcGFzc3dvcmQ6IFwic3RyaW5nXCIsXG4gICAgICAgICAgICB3aWxsTWVzc2FnZTogXCJvYmplY3RcIixcbiAgICAgICAgICAgIGtlZXBBbGl2ZUludGVydmFsOiBcIm51bWJlclwiLFxuICAgICAgICAgICAgY2xlYW5TZXNzaW9uOiBcImJvb2xlYW5cIixcbiAgICAgICAgICAgIHVzZVNTTDogXCJib29sZWFuXCIsXG4gICAgICAgICAgICBpbnZvY2F0aW9uQ29udGV4dDogXCJvYmplY3RcIixcbiAgICAgICAgICAgIG9uU3VjY2VzczogXCJmdW5jdGlvblwiLFxuICAgICAgICAgICAgb25GYWlsdXJlOiBcImZ1bmN0aW9uXCIsXG4gICAgICAgICAgICBob3N0czogXCJvYmplY3RcIixcbiAgICAgICAgICAgIHBvcnRzOiBcIm9iamVjdFwiLFxuICAgICAgICAgICAgcmVjb25uZWN0OiBcImJvb2xlYW5cIixcbiAgICAgICAgICAgIG1xdHRWZXJzaW9uOiBcIm51bWJlclwiLFxuICAgICAgICAgICAgbXF0dFZlcnNpb25FeHBsaWNpdDogXCJib29sZWFuXCIsXG4gICAgICAgICAgICB1cmlzOiBcIm9iamVjdFwiXG4gICAgICAgICAgfSksIGEua2VlcEFsaXZlSW50ZXJ2YWwgPT09IHZvaWQgMCAmJiAoYS5rZWVwQWxpdmVJbnRlcnZhbCA9IDYwKSwgYS5tcXR0VmVyc2lvbiA+IDQgfHwgYS5tcXR0VmVyc2lvbiA8IDMpXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IodyhmLklOVkFMSURfQVJHVU1FTlQsIFthLm1xdHRWZXJzaW9uLCBcImNvbm5lY3RPcHRpb25zLm1xdHRWZXJzaW9uXCJdKSk7XG4gICAgICAgICAgaWYgKGEubXF0dFZlcnNpb24gPT09IHZvaWQgMCA/IChhLm1xdHRWZXJzaW9uRXhwbGljaXQgPSAhMSwgYS5tcXR0VmVyc2lvbiA9IDQpIDogYS5tcXR0VmVyc2lvbkV4cGxpY2l0ID0gITAsIGEucGFzc3dvcmQgIT09IHZvaWQgMCAmJiBhLnVzZXJOYW1lID09PSB2b2lkIDApXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IodyhmLklOVkFMSURfQVJHVU1FTlQsIFthLnBhc3N3b3JkLCBcImNvbm5lY3RPcHRpb25zLnBhc3N3b3JkXCJdKSk7XG4gICAgICAgICAgaWYgKGEud2lsbE1lc3NhZ2UpIHtcbiAgICAgICAgICAgIGlmICghKGEud2lsbE1lc3NhZ2UgaW5zdGFuY2VvZiBHKSlcbiAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKHcoZi5JTlZBTElEX1RZUEUsIFthLndpbGxNZXNzYWdlLCBcImNvbm5lY3RPcHRpb25zLndpbGxNZXNzYWdlXCJdKSk7XG4gICAgICAgICAgICBpZiAoYS53aWxsTWVzc2FnZS5zdHJpbmdQYXlsb2FkID0gbnVsbCwgdHlwZW9mIGEud2lsbE1lc3NhZ2UuZGVzdGluYXRpb25OYW1lID4gXCJ1XCIpXG4gICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcih3KGYuSU5WQUxJRF9UWVBFLCBbdHlwZW9mIGEud2lsbE1lc3NhZ2UuZGVzdGluYXRpb25OYW1lLCBcImNvbm5lY3RPcHRpb25zLndpbGxNZXNzYWdlLmRlc3RpbmF0aW9uTmFtZVwiXSkpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAodHlwZW9mIGEuY2xlYW5TZXNzaW9uID4gXCJ1XCIgJiYgKGEuY2xlYW5TZXNzaW9uID0gITApLCBhLmhvc3RzKSB7XG4gICAgICAgICAgICBpZiAoIShhLmhvc3RzIGluc3RhbmNlb2YgQXJyYXkpKVxuICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IodyhmLklOVkFMSURfQVJHVU1FTlQsIFthLmhvc3RzLCBcImNvbm5lY3RPcHRpb25zLmhvc3RzXCJdKSk7XG4gICAgICAgICAgICBpZiAoYS5ob3N0cy5sZW5ndGggPCAxKVxuICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IodyhmLklOVkFMSURfQVJHVU1FTlQsIFthLmhvc3RzLCBcImNvbm5lY3RPcHRpb25zLmhvc3RzXCJdKSk7XG4gICAgICAgICAgICBmb3IgKHZhciBJID0gITEsIHggPSAwOyB4IDwgYS5ob3N0cy5sZW5ndGg7IHgrKykge1xuICAgICAgICAgICAgICBpZiAodHlwZW9mIGEuaG9zdHNbeF0gIT0gXCJzdHJpbmdcIilcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IodyhmLklOVkFMSURfVFlQRSwgW3R5cGVvZiBhLmhvc3RzW3hdLCBcImNvbm5lY3RPcHRpb25zLmhvc3RzW1wiICsgeCArIFwiXVwiXSkpO1xuICAgICAgICAgICAgICBpZiAoL14od3NzPyk6XFwvXFwvKChcXFsoLispXFxdKXwoW15cXC9dKz8pKSg6KFxcZCspKT8oXFwvLiopJC8udGVzdChhLmhvc3RzW3hdKSkge1xuICAgICAgICAgICAgICAgIGlmICh4ID09PSAwKVxuICAgICAgICAgICAgICAgICAgSSA9ICEwO1xuICAgICAgICAgICAgICAgIGVsc2UgaWYgKCFJKVxuICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKHcoZi5JTlZBTElEX0FSR1VNRU5ULCBbYS5ob3N0c1t4XSwgXCJjb25uZWN0T3B0aW9ucy5ob3N0c1tcIiArIHggKyBcIl1cIl0pKTtcbiAgICAgICAgICAgICAgfSBlbHNlIGlmIChJKVxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcih3KGYuSU5WQUxJRF9BUkdVTUVOVCwgW2EuaG9zdHNbeF0sIFwiY29ubmVjdE9wdGlvbnMuaG9zdHNbXCIgKyB4ICsgXCJdXCJdKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoSSlcbiAgICAgICAgICAgICAgYS51cmlzID0gYS5ob3N0cztcbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICBpZiAoIWEucG9ydHMpXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKHcoZi5JTlZBTElEX0FSR1VNRU5ULCBbYS5wb3J0cywgXCJjb25uZWN0T3B0aW9ucy5wb3J0c1wiXSkpO1xuICAgICAgICAgICAgICBpZiAoIShhLnBvcnRzIGluc3RhbmNlb2YgQXJyYXkpKVxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcih3KGYuSU5WQUxJRF9BUkdVTUVOVCwgW2EucG9ydHMsIFwiY29ubmVjdE9wdGlvbnMucG9ydHNcIl0pKTtcbiAgICAgICAgICAgICAgaWYgKGEuaG9zdHMubGVuZ3RoICE9PSBhLnBvcnRzLmxlbmd0aClcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IodyhmLklOVkFMSURfQVJHVU1FTlQsIFthLnBvcnRzLCBcImNvbm5lY3RPcHRpb25zLnBvcnRzXCJdKSk7XG4gICAgICAgICAgICAgIGEudXJpcyA9IFtdO1xuICAgICAgICAgICAgICBmb3IgKHZhciB4ID0gMDsgeCA8IGEuaG9zdHMubGVuZ3RoOyB4KyspIHtcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGEucG9ydHNbeF0gIT0gXCJudW1iZXJcIiB8fCBhLnBvcnRzW3hdIDwgMClcbiAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcih3KGYuSU5WQUxJRF9UWVBFLCBbdHlwZW9mIGEucG9ydHNbeF0sIFwiY29ubmVjdE9wdGlvbnMucG9ydHNbXCIgKyB4ICsgXCJdXCJdKSk7XG4gICAgICAgICAgICAgICAgdmFyIEsgPSBhLmhvc3RzW3hdLCBQID0gYS5wb3J0c1t4XSwgViA9IEsuaW5kZXhPZihcIjpcIikgIT09IC0xO1xuICAgICAgICAgICAgICAgIGggPSBcIndzOi8vXCIgKyAoViA/IFwiW1wiICsgSyArIFwiXVwiIDogSykgKyBcIjpcIiArIFAgKyBsLCBhLnVyaXMucHVzaChoKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICB2LmNvbm5lY3QoYSk7XG4gICAgICAgIH0sIHRoaXMuc3Vic2NyaWJlID0gZnVuY3Rpb24oYSwgSSkge1xuICAgICAgICAgIGlmICh0eXBlb2YgYSAhPSBcInN0cmluZ1wiICYmIGEuY29uc3RydWN0b3IgIT09IEFycmF5KVxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiSW52YWxpZCBhcmd1bWVudDpcIiArIGEpO1xuICAgICAgICAgIGlmIChJID0gSSB8fCB7fSwgZWUoSSwge1xuICAgICAgICAgICAgcW9zOiBcIm51bWJlclwiLFxuICAgICAgICAgICAgaW52b2NhdGlvbkNvbnRleHQ6IFwib2JqZWN0XCIsXG4gICAgICAgICAgICBvblN1Y2Nlc3M6IFwiZnVuY3Rpb25cIixcbiAgICAgICAgICAgIG9uRmFpbHVyZTogXCJmdW5jdGlvblwiLFxuICAgICAgICAgICAgdGltZW91dDogXCJudW1iZXJcIlxuICAgICAgICAgIH0pLCBJLnRpbWVvdXQgJiYgIUkub25GYWlsdXJlKVxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwic3Vic2NyaWJlT3B0aW9ucy50aW1lb3V0IHNwZWNpZmllZCB3aXRoIG5vIG9uRmFpbHVyZSBjYWxsYmFjay5cIik7XG4gICAgICAgICAgaWYgKHR5cGVvZiBJLnFvcyA8IFwidVwiICYmICEoSS5xb3MgPT09IDAgfHwgSS5xb3MgPT09IDEgfHwgSS5xb3MgPT09IDIpKVxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKHcoZi5JTlZBTElEX0FSR1VNRU5ULCBbSS5xb3MsIFwic3Vic2NyaWJlT3B0aW9ucy5xb3NcIl0pKTtcbiAgICAgICAgICB2LnN1YnNjcmliZShhLCBJKTtcbiAgICAgICAgfSwgdGhpcy51bnN1YnNjcmliZSA9IGZ1bmN0aW9uKGEsIEkpIHtcbiAgICAgICAgICBpZiAodHlwZW9mIGEgIT0gXCJzdHJpbmdcIiAmJiBhLmNvbnN0cnVjdG9yICE9PSBBcnJheSlcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkludmFsaWQgYXJndW1lbnQ6XCIgKyBhKTtcbiAgICAgICAgICBpZiAoSSA9IEkgfHwge30sIGVlKEksIHtcbiAgICAgICAgICAgIGludm9jYXRpb25Db250ZXh0OiBcIm9iamVjdFwiLFxuICAgICAgICAgICAgb25TdWNjZXNzOiBcImZ1bmN0aW9uXCIsXG4gICAgICAgICAgICBvbkZhaWx1cmU6IFwiZnVuY3Rpb25cIixcbiAgICAgICAgICAgIHRpbWVvdXQ6IFwibnVtYmVyXCJcbiAgICAgICAgICB9KSwgSS50aW1lb3V0ICYmICFJLm9uRmFpbHVyZSlcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcInVuc3Vic2NyaWJlT3B0aW9ucy50aW1lb3V0IHNwZWNpZmllZCB3aXRoIG5vIG9uRmFpbHVyZSBjYWxsYmFjay5cIik7XG4gICAgICAgICAgdi51bnN1YnNjcmliZShhLCBJKTtcbiAgICAgICAgfSwgdGhpcy5zZW5kID0gZnVuY3Rpb24oYSwgSSwgeCwgSykge1xuICAgICAgICAgIHZhciBQO1xuICAgICAgICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAwKVxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiSW52YWxpZCBhcmd1bWVudC5sZW5ndGhcIik7XG4gICAgICAgICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT0gMSkge1xuICAgICAgICAgICAgaWYgKCEoYSBpbnN0YW5jZW9mIEcpICYmIHR5cGVvZiBhICE9IFwic3RyaW5nXCIpXG4gICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkludmFsaWQgYXJndW1lbnQ6XCIgKyB0eXBlb2YgYSk7XG4gICAgICAgICAgICBpZiAoUCA9IGEsIHR5cGVvZiBQLmRlc3RpbmF0aW9uTmFtZSA+IFwidVwiKVxuICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IodyhmLklOVkFMSURfQVJHVU1FTlQsIFtQLmRlc3RpbmF0aW9uTmFtZSwgXCJNZXNzYWdlLmRlc3RpbmF0aW9uTmFtZVwiXSkpO1xuICAgICAgICAgICAgdi5zZW5kKFApO1xuICAgICAgICAgIH0gZWxzZVxuICAgICAgICAgICAgUCA9IG5ldyBHKEkpLCBQLmRlc3RpbmF0aW9uTmFtZSA9IGEsIGFyZ3VtZW50cy5sZW5ndGggPj0gMyAmJiAoUC5xb3MgPSB4KSwgYXJndW1lbnRzLmxlbmd0aCA+PSA0ICYmIChQLnJldGFpbmVkID0gSyksIHYuc2VuZChQKTtcbiAgICAgICAgfSwgdGhpcy5wdWJsaXNoID0gZnVuY3Rpb24oYSwgSSwgeCwgSykge1xuICAgICAgICAgIHZhciBQO1xuICAgICAgICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAwKVxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiSW52YWxpZCBhcmd1bWVudC5sZW5ndGhcIik7XG4gICAgICAgICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT0gMSkge1xuICAgICAgICAgICAgaWYgKCEoYSBpbnN0YW5jZW9mIEcpICYmIHR5cGVvZiBhICE9IFwic3RyaW5nXCIpXG4gICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkludmFsaWQgYXJndW1lbnQ6XCIgKyB0eXBlb2YgYSk7XG4gICAgICAgICAgICBpZiAoUCA9IGEsIHR5cGVvZiBQLmRlc3RpbmF0aW9uTmFtZSA+IFwidVwiKVxuICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IodyhmLklOVkFMSURfQVJHVU1FTlQsIFtQLmRlc3RpbmF0aW9uTmFtZSwgXCJNZXNzYWdlLmRlc3RpbmF0aW9uTmFtZVwiXSkpO1xuICAgICAgICAgICAgdi5zZW5kKFApO1xuICAgICAgICAgIH0gZWxzZVxuICAgICAgICAgICAgUCA9IG5ldyBHKEkpLCBQLmRlc3RpbmF0aW9uTmFtZSA9IGEsIGFyZ3VtZW50cy5sZW5ndGggPj0gMyAmJiAoUC5xb3MgPSB4KSwgYXJndW1lbnRzLmxlbmd0aCA+PSA0ICYmIChQLnJldGFpbmVkID0gSyksIHYuc2VuZChQKTtcbiAgICAgICAgfSwgdGhpcy5kaXNjb25uZWN0ID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgdi5kaXNjb25uZWN0KCk7XG4gICAgICAgIH0sIHRoaXMuZ2V0VHJhY2VMb2cgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICByZXR1cm4gdi5nZXRUcmFjZUxvZygpO1xuICAgICAgICB9LCB0aGlzLnN0YXJ0VHJhY2UgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICB2LnN0YXJ0VHJhY2UoKTtcbiAgICAgICAgfSwgdGhpcy5zdG9wVHJhY2UgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICB2LnN0b3BUcmFjZSgpO1xuICAgICAgICB9LCB0aGlzLmlzQ29ubmVjdGVkID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgcmV0dXJuIHYuY29ubmVjdGVkO1xuICAgICAgICB9O1xuICAgICAgfSwgRyA9IGZ1bmN0aW9uKGkpIHtcbiAgICAgICAgdmFyIHM7XG4gICAgICAgIGlmICh0eXBlb2YgaSA9PSBcInN0cmluZ1wiIHx8IGkgaW5zdGFuY2VvZiBBcnJheUJ1ZmZlciB8fCBBcnJheUJ1ZmZlci5pc1ZpZXcoaSkgJiYgIShpIGluc3RhbmNlb2YgRGF0YVZpZXcpKVxuICAgICAgICAgIHMgPSBpO1xuICAgICAgICBlbHNlXG4gICAgICAgICAgdGhyb3cgdyhmLklOVkFMSURfQVJHVU1FTlQsIFtpLCBcIm5ld1BheWxvYWRcIl0pO1xuICAgICAgICB2YXIgbCwgdSA9IDAsIGggPSAhMSwgZCA9ICExO1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydGllcyh0aGlzLCB7XG4gICAgICAgICAgcGF5bG9hZFN0cmluZzoge1xuICAgICAgICAgICAgZW51bWVyYWJsZTogITAsXG4gICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICByZXR1cm4gdHlwZW9mIHMgPT0gXCJzdHJpbmdcIiA/IHMgOiBjZShzLCAwLCBzLmxlbmd0aCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSxcbiAgICAgICAgICBwYXlsb2FkQnl0ZXM6IHtcbiAgICAgICAgICAgIGVudW1lcmFibGU6ICEwLFxuICAgICAgICAgICAgZ2V0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgaWYgKHR5cGVvZiBzID09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgICAgICB2YXIgbSA9IG5ldyBBcnJheUJ1ZmZlcihOKHMpKSwgUyA9IG5ldyBVaW50OEFycmF5KG0pO1xuICAgICAgICAgICAgICAgIHJldHVybiBCKHMsIFMsIDApLCBTO1xuICAgICAgICAgICAgICB9IGVsc2VcbiAgICAgICAgICAgICAgICByZXR1cm4gcztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LFxuICAgICAgICAgIGRlc3RpbmF0aW9uTmFtZToge1xuICAgICAgICAgICAgZW51bWVyYWJsZTogITAsXG4gICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICByZXR1cm4gbDtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzZXQ6IGZ1bmN0aW9uKG0pIHtcbiAgICAgICAgICAgICAgaWYgKHR5cGVvZiBtID09IFwic3RyaW5nXCIpXG4gICAgICAgICAgICAgICAgbCA9IG07XG4gICAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IodyhmLklOVkFMSURfQVJHVU1FTlQsIFttLCBcIm5ld0Rlc3RpbmF0aW9uTmFtZVwiXSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sXG4gICAgICAgICAgcW9zOiB7XG4gICAgICAgICAgICBlbnVtZXJhYmxlOiAhMCxcbiAgICAgICAgICAgIGdldDogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgIHJldHVybiB1O1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHNldDogZnVuY3Rpb24obSkge1xuICAgICAgICAgICAgICBpZiAobSA9PT0gMCB8fCBtID09PSAxIHx8IG0gPT09IDIpXG4gICAgICAgICAgICAgICAgdSA9IG07XG4gICAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIGFyZ3VtZW50OlwiICsgbSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSxcbiAgICAgICAgICByZXRhaW5lZDoge1xuICAgICAgICAgICAgZW51bWVyYWJsZTogITAsXG4gICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICByZXR1cm4gaDtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzZXQ6IGZ1bmN0aW9uKG0pIHtcbiAgICAgICAgICAgICAgaWYgKHR5cGVvZiBtID09IFwiYm9vbGVhblwiKVxuICAgICAgICAgICAgICAgIGggPSBtO1xuICAgICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKHcoZi5JTlZBTElEX0FSR1VNRU5ULCBbbSwgXCJuZXdSZXRhaW5lZFwiXSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sXG4gICAgICAgICAgdG9waWM6IHtcbiAgICAgICAgICAgIGVudW1lcmFibGU6ICEwLFxuICAgICAgICAgICAgZ2V0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGw7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc2V0OiBmdW5jdGlvbihtKSB7XG4gICAgICAgICAgICAgIGwgPSBtO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sXG4gICAgICAgICAgZHVwbGljYXRlOiB7XG4gICAgICAgICAgICBlbnVtZXJhYmxlOiAhMCxcbiAgICAgICAgICAgIGdldDogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgIHJldHVybiBkO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHNldDogZnVuY3Rpb24obSkge1xuICAgICAgICAgICAgICBkID0gbTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfTtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIENsaWVudDogTWUsXG4gICAgICAgIE1lc3NhZ2U6IEdcbiAgICAgIH07XG4gICAgfSh0eXBlb2YgWCA8IFwidVwiID8gWCA6IHR5cGVvZiBzZWxmIDwgXCJ1XCIgPyBzZWxmIDogdHlwZW9mIHdpbmRvdyA8IFwidVwiID8gd2luZG93IDoge30pO1xuICAgIHJldHVybiBrO1xuICB9KTtcbn0pKE9zKTtcbmNvbnN0IGFlID0gJCgpO1xubGV0IFhlID0gbmV3IERlLkNsaWVudChcbiAgYWUuaG9zdCxcbiAgYWUucG9ydCxcbiAgYWUuY2xpZW50SWRcbik7XG5jb25zdCBnZSA9ICgpID0+IFhlLCBxcyA9IChwID0ge1xuICBob3N0OiAkKCkuaG9zdCxcbiAgcG9ydDogJCgpLnBvcnQsXG4gIGNsaWVudElkOiAkKCkuY2xpZW50SWQsXG4gIHVzZXJuYW1lOiAkKCkudXNlcm5hbWUsXG4gIHBhc3N3b3JkOiAkKCkucGFzc3dvcmQsXG4gIHVzZVNTTDogJCgpLnVzZVNTTFxufSkgPT4gKGFlLnVzZXJuYW1lID0gcC51c2VybmFtZSwgYWUucGFzc3dvcmQgPSBwLnBhc3N3b3JkLCBhZS51c2VTU0wgPSBwLnVzZVNTTCwgWGUgPSBuZXcgRGUuQ2xpZW50KFxuICBhZS5ob3N0ID0gcC5ob3N0LFxuICBhZS5wb3J0ID0gcC5wb3J0LFxuICBhZS5jbGllbnRJZCA9IHAuY2xpZW50SWRcbiksIFhlKTtcbnZhciBldCA9IHt9LCBScyA9IHtcbiAgZ2V0IGV4cG9ydHMoKSB7XG4gICAgcmV0dXJuIGV0O1xuICB9LFxuICBzZXQgZXhwb3J0cyhwKSB7XG4gICAgZXQgPSBwO1xuICB9XG59O1xuLyohXG4qIHN3ZWV0YWxlcnQyIHYxMS43LjNcbiogUmVsZWFzZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLlxuKi9cbihmdW5jdGlvbihwLCBDKSB7XG4gIChmdW5jdGlvbihnLCBrKSB7XG4gICAgcC5leHBvcnRzID0gaygpO1xuICB9KShYLCBmdW5jdGlvbigpIHtcbiAgICB2YXIgZyA9IHtcbiAgICAgIGF3YWl0aW5nUHJvbWlzZTogLyogQF9fUFVSRV9fICovIG5ldyBXZWFrTWFwKCksXG4gICAgICBwcm9taXNlOiAvKiBAX19QVVJFX18gKi8gbmV3IFdlYWtNYXAoKSxcbiAgICAgIGlubmVyUGFyYW1zOiAvKiBAX19QVVJFX18gKi8gbmV3IFdlYWtNYXAoKSxcbiAgICAgIGRvbUNhY2hlOiAvKiBAX19QVVJFX18gKi8gbmV3IFdlYWtNYXAoKVxuICAgIH07XG4gICAgY29uc3QgayA9IFwic3dhbDItXCIsIFQgPSAoZSkgPT4ge1xuICAgICAgY29uc3QgdCA9IHt9O1xuICAgICAgZm9yIChjb25zdCBuIGluIGUpXG4gICAgICAgIHRbZVtuXV0gPSBrICsgZVtuXTtcbiAgICAgIHJldHVybiB0O1xuICAgIH0sIHIgPSBUKFtcImNvbnRhaW5lclwiLCBcInNob3duXCIsIFwiaGVpZ2h0LWF1dG9cIiwgXCJpb3NmaXhcIiwgXCJwb3B1cFwiLCBcIm1vZGFsXCIsIFwibm8tYmFja2Ryb3BcIiwgXCJuby10cmFuc2l0aW9uXCIsIFwidG9hc3RcIiwgXCJ0b2FzdC1zaG93blwiLCBcInNob3dcIiwgXCJoaWRlXCIsIFwiY2xvc2VcIiwgXCJ0aXRsZVwiLCBcImh0bWwtY29udGFpbmVyXCIsIFwiYWN0aW9uc1wiLCBcImNvbmZpcm1cIiwgXCJkZW55XCIsIFwiY2FuY2VsXCIsIFwiZGVmYXVsdC1vdXRsaW5lXCIsIFwiZm9vdGVyXCIsIFwiaWNvblwiLCBcImljb24tY29udGVudFwiLCBcImltYWdlXCIsIFwiaW5wdXRcIiwgXCJmaWxlXCIsIFwicmFuZ2VcIiwgXCJzZWxlY3RcIiwgXCJyYWRpb1wiLCBcImNoZWNrYm94XCIsIFwibGFiZWxcIiwgXCJ0ZXh0YXJlYVwiLCBcImlucHV0ZXJyb3JcIiwgXCJpbnB1dC1sYWJlbFwiLCBcInZhbGlkYXRpb24tbWVzc2FnZVwiLCBcInByb2dyZXNzLXN0ZXBzXCIsIFwiYWN0aXZlLXByb2dyZXNzLXN0ZXBcIiwgXCJwcm9ncmVzcy1zdGVwXCIsIFwicHJvZ3Jlc3Mtc3RlcC1saW5lXCIsIFwibG9hZGVyXCIsIFwibG9hZGluZ1wiLCBcInN0eWxlZFwiLCBcInRvcFwiLCBcInRvcC1zdGFydFwiLCBcInRvcC1lbmRcIiwgXCJ0b3AtbGVmdFwiLCBcInRvcC1yaWdodFwiLCBcImNlbnRlclwiLCBcImNlbnRlci1zdGFydFwiLCBcImNlbnRlci1lbmRcIiwgXCJjZW50ZXItbGVmdFwiLCBcImNlbnRlci1yaWdodFwiLCBcImJvdHRvbVwiLCBcImJvdHRvbS1zdGFydFwiLCBcImJvdHRvbS1lbmRcIiwgXCJib3R0b20tbGVmdFwiLCBcImJvdHRvbS1yaWdodFwiLCBcImdyb3ctcm93XCIsIFwiZ3Jvdy1jb2x1bW5cIiwgXCJncm93LWZ1bGxzY3JlZW5cIiwgXCJydGxcIiwgXCJ0aW1lci1wcm9ncmVzcy1iYXJcIiwgXCJ0aW1lci1wcm9ncmVzcy1iYXItY29udGFpbmVyXCIsIFwic2Nyb2xsYmFyLW1lYXN1cmVcIiwgXCJpY29uLXN1Y2Nlc3NcIiwgXCJpY29uLXdhcm5pbmdcIiwgXCJpY29uLWluZm9cIiwgXCJpY29uLXF1ZXN0aW9uXCIsIFwiaWNvbi1lcnJvclwiXSksIHEgPSBUKFtcInN1Y2Nlc3NcIiwgXCJ3YXJuaW5nXCIsIFwiaW5mb1wiLCBcInF1ZXN0aW9uXCIsIFwiZXJyb3JcIl0pLCBFID0gXCJTd2VldEFsZXJ0MjpcIiwgZWUgPSAoZSkgPT4ge1xuICAgICAgY29uc3QgdCA9IFtdO1xuICAgICAgZm9yIChsZXQgbiA9IDA7IG4gPCBlLmxlbmd0aDsgbisrKVxuICAgICAgICB0LmluZGV4T2YoZVtuXSkgPT09IC0xICYmIHQucHVzaChlW25dKTtcbiAgICAgIHJldHVybiB0O1xuICAgIH0sIHNlID0gKGUpID0+IGUuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyBlLnNsaWNlKDEpLCBmID0gKGUpID0+IHtcbiAgICAgIGNvbnNvbGUud2FybihgJHtFfSAke3R5cGVvZiBlID09IFwib2JqZWN0XCIgPyBlLmpvaW4oXCIgXCIpIDogZX1gKTtcbiAgICB9LCBpZSA9IChlKSA9PiB7XG4gICAgICBjb25zb2xlLmVycm9yKGAke0V9ICR7ZX1gKTtcbiAgICB9LCB3ID0gW10sIENlID0gKGUpID0+IHtcbiAgICAgIHcuaW5jbHVkZXMoZSkgfHwgKHcucHVzaChlKSwgZihlKSk7XG4gICAgfSwgeGUgPSAoZSwgdCkgPT4ge1xuICAgICAgQ2UoYFwiJHtlfVwiIGlzIGRlcHJlY2F0ZWQgYW5kIHdpbGwgYmUgcmVtb3ZlZCBpbiB0aGUgbmV4dCBtYWpvciByZWxlYXNlLiBQbGVhc2UgdXNlIFwiJHt0fVwiIGluc3RlYWQuYCk7XG4gICAgfSwgVSA9IChlKSA9PiB0eXBlb2YgZSA9PSBcImZ1bmN0aW9uXCIgPyBlKCkgOiBlLCBBZSA9IChlKSA9PiBlICYmIHR5cGVvZiBlLnRvUHJvbWlzZSA9PSBcImZ1bmN0aW9uXCIsIHRlID0gKGUpID0+IEFlKGUpID8gZS50b1Byb21pc2UoKSA6IFByb21pc2UucmVzb2x2ZShlKSwgWiA9IChlKSA9PiBlICYmIFByb21pc2UucmVzb2x2ZShlKSA9PT0gZSwgUiA9ICgpID0+IGRvY3VtZW50LmJvZHkucXVlcnlTZWxlY3RvcihgLiR7ci5jb250YWluZXJ9YCksIGRlID0gKGUpID0+IHtcbiAgICAgIGNvbnN0IHQgPSBSKCk7XG4gICAgICByZXR1cm4gdCA/IHQucXVlcnlTZWxlY3RvcihlKSA6IG51bGw7XG4gICAgfSwgTiA9IChlKSA9PiBkZShgLiR7ZX1gKSwgQiA9ICgpID0+IE4oci5wb3B1cCksIGNlID0gKCkgPT4gTihyLmljb24pLCBQZSA9ICgpID0+IE4ocltcImljb24tY29udGVudFwiXSksIGZlID0gKCkgPT4gTihyLnRpdGxlKSwgYiA9ICgpID0+IE4ocltcImh0bWwtY29udGFpbmVyXCJdKSwgTWUgPSAoKSA9PiBOKHIuaW1hZ2UpLCBHID0gKCkgPT4gTihyW1wicHJvZ3Jlc3Mtc3RlcHNcIl0pLCBpID0gKCkgPT4gTihyW1widmFsaWRhdGlvbi1tZXNzYWdlXCJdKSwgcyA9ICgpID0+IChcbiAgICAgIC8qKiBAdHlwZSB7SFRNTEJ1dHRvbkVsZW1lbnR9ICovXG4gICAgICBkZShgLiR7ci5hY3Rpb25zfSAuJHtyLmNvbmZpcm19YClcbiAgICApLCBsID0gKCkgPT4gKFxuICAgICAgLyoqIEB0eXBlIHtIVE1MQnV0dG9uRWxlbWVudH0gKi9cbiAgICAgIGRlKGAuJHtyLmFjdGlvbnN9IC4ke3IuY2FuY2VsfWApXG4gICAgKSwgdSA9ICgpID0+IChcbiAgICAgIC8qKiBAdHlwZSB7SFRNTEJ1dHRvbkVsZW1lbnR9ICovXG4gICAgICBkZShgLiR7ci5hY3Rpb25zfSAuJHtyLmRlbnl9YClcbiAgICApLCBoID0gKCkgPT4gTihyW1wiaW5wdXQtbGFiZWxcIl0pLCBkID0gKCkgPT4gZGUoYC4ke3IubG9hZGVyfWApLCBtID0gKCkgPT4gTihyLmFjdGlvbnMpLCBTID0gKCkgPT4gTihyLmZvb3RlciksIHkgPSAoKSA9PiBOKHJbXCJ0aW1lci1wcm9ncmVzcy1iYXJcIl0pLCBMID0gKCkgPT4gTihyLmNsb3NlKSwgdiA9IGBcbiAgYVtocmVmXSxcbiAgYXJlYVtocmVmXSxcbiAgaW5wdXQ6bm90KFtkaXNhYmxlZF0pLFxuICBzZWxlY3Q6bm90KFtkaXNhYmxlZF0pLFxuICB0ZXh0YXJlYTpub3QoW2Rpc2FibGVkXSksXG4gIGJ1dHRvbjpub3QoW2Rpc2FibGVkXSksXG4gIGlmcmFtZSxcbiAgb2JqZWN0LFxuICBlbWJlZCxcbiAgW3RhYmluZGV4PVwiMFwiXSxcbiAgW2NvbnRlbnRlZGl0YWJsZV0sXG4gIGF1ZGlvW2NvbnRyb2xzXSxcbiAgdmlkZW9bY29udHJvbHNdLFxuICBzdW1tYXJ5XG5gLCBhID0gKCkgPT4ge1xuICAgICAgY29uc3QgZSA9IEFycmF5LmZyb20oQigpLnF1ZXJ5U2VsZWN0b3JBbGwoJ1t0YWJpbmRleF06bm90KFt0YWJpbmRleD1cIi0xXCJdKTpub3QoW3RhYmluZGV4PVwiMFwiXSknKSkuc29ydCgobiwgbykgPT4ge1xuICAgICAgICBjb25zdCBjID0gcGFyc2VJbnQobi5nZXRBdHRyaWJ1dGUoXCJ0YWJpbmRleFwiKSksIF8gPSBwYXJzZUludChvLmdldEF0dHJpYnV0ZShcInRhYmluZGV4XCIpKTtcbiAgICAgICAgcmV0dXJuIGMgPiBfID8gMSA6IGMgPCBfID8gLTEgOiAwO1xuICAgICAgfSksIHQgPSBBcnJheS5mcm9tKEIoKS5xdWVyeVNlbGVjdG9yQWxsKHYpKS5maWx0ZXIoKG4pID0+IG4uZ2V0QXR0cmlidXRlKFwidGFiaW5kZXhcIikgIT09IFwiLTFcIik7XG4gICAgICByZXR1cm4gZWUoZS5jb25jYXQodCkpLmZpbHRlcigobikgPT4gVyhuKSk7XG4gICAgfSwgSSA9ICgpID0+IHJlKGRvY3VtZW50LmJvZHksIHIuc2hvd24pICYmICFyZShkb2N1bWVudC5ib2R5LCByW1widG9hc3Qtc2hvd25cIl0pICYmICFyZShkb2N1bWVudC5ib2R5LCByW1wibm8tYmFja2Ryb3BcIl0pLCB4ID0gKCkgPT4gQigpICYmIHJlKEIoKSwgci50b2FzdCksIEsgPSAoKSA9PiBCKCkuaGFzQXR0cmlidXRlKFwiZGF0YS1sb2FkaW5nXCIpLCBQID0ge1xuICAgICAgcHJldmlvdXNCb2R5UGFkZGluZzogbnVsbFxuICAgIH0sIFYgPSAoZSwgdCkgPT4ge1xuICAgICAgaWYgKGUudGV4dENvbnRlbnQgPSBcIlwiLCB0KSB7XG4gICAgICAgIGNvbnN0IG8gPSBuZXcgRE9NUGFyc2VyKCkucGFyc2VGcm9tU3RyaW5nKHQsIFwidGV4dC9odG1sXCIpO1xuICAgICAgICBBcnJheS5mcm9tKG8ucXVlcnlTZWxlY3RvcihcImhlYWRcIikuY2hpbGROb2RlcykuZm9yRWFjaCgoYykgPT4ge1xuICAgICAgICAgIGUuYXBwZW5kQ2hpbGQoYyk7XG4gICAgICAgIH0pLCBBcnJheS5mcm9tKG8ucXVlcnlTZWxlY3RvcihcImJvZHlcIikuY2hpbGROb2RlcykuZm9yRWFjaCgoYykgPT4ge1xuICAgICAgICAgIGMgaW5zdGFuY2VvZiBIVE1MVmlkZW9FbGVtZW50IHx8IGMgaW5zdGFuY2VvZiBIVE1MQXVkaW9FbGVtZW50ID8gZS5hcHBlbmRDaGlsZChjLmNsb25lTm9kZSghMCkpIDogZS5hcHBlbmRDaGlsZChjKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSwgcmUgPSAoZSwgdCkgPT4ge1xuICAgICAgaWYgKCF0KVxuICAgICAgICByZXR1cm4gITE7XG4gICAgICBjb25zdCBuID0gdC5zcGxpdCgvXFxzKy8pO1xuICAgICAgZm9yIChsZXQgbyA9IDA7IG8gPCBuLmxlbmd0aDsgbysrKVxuICAgICAgICBpZiAoIWUuY2xhc3NMaXN0LmNvbnRhaW5zKG5bb10pKVxuICAgICAgICAgIHJldHVybiAhMTtcbiAgICAgIHJldHVybiAhMDtcbiAgICB9LCBLdCA9IChlLCB0KSA9PiB7XG4gICAgICBBcnJheS5mcm9tKGUuY2xhc3NMaXN0KS5mb3JFYWNoKChuKSA9PiB7XG4gICAgICAgICFPYmplY3QudmFsdWVzKHIpLmluY2x1ZGVzKG4pICYmICFPYmplY3QudmFsdWVzKHEpLmluY2x1ZGVzKG4pICYmICFPYmplY3QudmFsdWVzKHQuc2hvd0NsYXNzKS5pbmNsdWRlcyhuKSAmJiBlLmNsYXNzTGlzdC5yZW1vdmUobik7XG4gICAgICB9KTtcbiAgICB9LCBZID0gKGUsIHQsIG4pID0+IHtcbiAgICAgIGlmIChLdChlLCB0KSwgdC5jdXN0b21DbGFzcyAmJiB0LmN1c3RvbUNsYXNzW25dKSB7XG4gICAgICAgIGlmICh0eXBlb2YgdC5jdXN0b21DbGFzc1tuXSAhPSBcInN0cmluZ1wiICYmICF0LmN1c3RvbUNsYXNzW25dLmZvckVhY2gpIHtcbiAgICAgICAgICBmKGBJbnZhbGlkIHR5cGUgb2YgY3VzdG9tQ2xhc3MuJHtufSEgRXhwZWN0ZWQgc3RyaW5nIG9yIGl0ZXJhYmxlIG9iamVjdCwgZ290IFwiJHt0eXBlb2YgdC5jdXN0b21DbGFzc1tuXX1cImApO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBNKGUsIHQuY3VzdG9tQ2xhc3Nbbl0pO1xuICAgICAgfVxuICAgIH0sICRlID0gKGUsIHQpID0+IHtcbiAgICAgIGlmICghdClcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICBzd2l0Y2ggKHQpIHtcbiAgICAgICAgY2FzZSBcInNlbGVjdFwiOlxuICAgICAgICBjYXNlIFwidGV4dGFyZWFcIjpcbiAgICAgICAgY2FzZSBcImZpbGVcIjpcbiAgICAgICAgICByZXR1cm4gZS5xdWVyeVNlbGVjdG9yKGAuJHtyLnBvcHVwfSA+IC4ke3JbdF19YCk7XG4gICAgICAgIGNhc2UgXCJjaGVja2JveFwiOlxuICAgICAgICAgIHJldHVybiBlLnF1ZXJ5U2VsZWN0b3IoYC4ke3IucG9wdXB9ID4gLiR7ci5jaGVja2JveH0gaW5wdXRgKTtcbiAgICAgICAgY2FzZSBcInJhZGlvXCI6XG4gICAgICAgICAgcmV0dXJuIGUucXVlcnlTZWxlY3RvcihgLiR7ci5wb3B1cH0gPiAuJHtyLnJhZGlvfSBpbnB1dDpjaGVja2VkYCkgfHwgZS5xdWVyeVNlbGVjdG9yKGAuJHtyLnBvcHVwfSA+IC4ke3IucmFkaW99IGlucHV0OmZpcnN0LWNoaWxkYCk7XG4gICAgICAgIGNhc2UgXCJyYW5nZVwiOlxuICAgICAgICAgIHJldHVybiBlLnF1ZXJ5U2VsZWN0b3IoYC4ke3IucG9wdXB9ID4gLiR7ci5yYW5nZX0gaW5wdXRgKTtcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICByZXR1cm4gZS5xdWVyeVNlbGVjdG9yKGAuJHtyLnBvcHVwfSA+IC4ke3IuaW5wdXR9YCk7XG4gICAgICB9XG4gICAgfSwgcnQgPSAoZSkgPT4ge1xuICAgICAgaWYgKGUuZm9jdXMoKSwgZS50eXBlICE9PSBcImZpbGVcIikge1xuICAgICAgICBjb25zdCB0ID0gZS52YWx1ZTtcbiAgICAgICAgZS52YWx1ZSA9IFwiXCIsIGUudmFsdWUgPSB0O1xuICAgICAgfVxuICAgIH0sIGF0ID0gKGUsIHQsIG4pID0+IHtcbiAgICAgICFlIHx8ICF0IHx8ICh0eXBlb2YgdCA9PSBcInN0cmluZ1wiICYmICh0ID0gdC5zcGxpdCgvXFxzKy8pLmZpbHRlcihCb29sZWFuKSksIHQuZm9yRWFjaCgobykgPT4ge1xuICAgICAgICBBcnJheS5pc0FycmF5KGUpID8gZS5mb3JFYWNoKChjKSA9PiB7XG4gICAgICAgICAgbiA/IGMuY2xhc3NMaXN0LmFkZChvKSA6IGMuY2xhc3NMaXN0LnJlbW92ZShvKTtcbiAgICAgICAgfSkgOiBuID8gZS5jbGFzc0xpc3QuYWRkKG8pIDogZS5jbGFzc0xpc3QucmVtb3ZlKG8pO1xuICAgICAgfSkpO1xuICAgIH0sIE0gPSAoZSwgdCkgPT4ge1xuICAgICAgYXQoZSwgdCwgITApO1xuICAgIH0sIG5lID0gKGUsIHQpID0+IHtcbiAgICAgIGF0KGUsIHQsICExKTtcbiAgICB9LCB1ZSA9IChlLCB0KSA9PiB7XG4gICAgICBjb25zdCBuID0gQXJyYXkuZnJvbShlLmNoaWxkcmVuKTtcbiAgICAgIGZvciAobGV0IG8gPSAwOyBvIDwgbi5sZW5ndGg7IG8rKykge1xuICAgICAgICBjb25zdCBjID0gbltvXTtcbiAgICAgICAgaWYgKGMgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCAmJiByZShjLCB0KSlcbiAgICAgICAgICByZXR1cm4gYztcbiAgICAgIH1cbiAgICB9LCBtZSA9IChlLCB0LCBuKSA9PiB7XG4gICAgICBuID09PSBgJHtwYXJzZUludChuKX1gICYmIChuID0gcGFyc2VJbnQobikpLCBuIHx8IHBhcnNlSW50KG4pID09PSAwID8gZS5zdHlsZVt0XSA9IHR5cGVvZiBuID09IFwibnVtYmVyXCIgPyBgJHtufXB4YCA6IG4gOiBlLnN0eWxlLnJlbW92ZVByb3BlcnR5KHQpO1xuICAgIH0sIEQgPSBmdW5jdGlvbihlKSB7XG4gICAgICBsZXQgdCA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdm9pZCAwID8gYXJndW1lbnRzWzFdIDogXCJmbGV4XCI7XG4gICAgICBlLnN0eWxlLmRpc3BsYXkgPSB0O1xuICAgIH0sIEYgPSAoZSkgPT4ge1xuICAgICAgZS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgfSwgbHQgPSAoZSwgdCwgbiwgbykgPT4ge1xuICAgICAgY29uc3QgYyA9IGUucXVlcnlTZWxlY3Rvcih0KTtcbiAgICAgIGMgJiYgKGMuc3R5bGVbbl0gPSBvKTtcbiAgICB9LCBCZSA9IGZ1bmN0aW9uKGUsIHQpIHtcbiAgICAgIGxldCBuID0gYXJndW1lbnRzLmxlbmd0aCA+IDIgJiYgYXJndW1lbnRzWzJdICE9PSB2b2lkIDAgPyBhcmd1bWVudHNbMl0gOiBcImZsZXhcIjtcbiAgICAgIHQgPyBEKGUsIG4pIDogRihlKTtcbiAgICB9LCBXID0gKGUpID0+ICEhKGUgJiYgKGUub2Zmc2V0V2lkdGggfHwgZS5vZmZzZXRIZWlnaHQgfHwgZS5nZXRDbGllbnRSZWN0cygpLmxlbmd0aCkpLCBXdCA9ICgpID0+ICFXKHMoKSkgJiYgIVcodSgpKSAmJiAhVyhsKCkpLCBjdCA9IChlKSA9PiBlLnNjcm9sbEhlaWdodCA+IGUuY2xpZW50SGVpZ2h0LCB1dCA9IChlKSA9PiB7XG4gICAgICBjb25zdCB0ID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUoZSksIG4gPSBwYXJzZUZsb2F0KHQuZ2V0UHJvcGVydHlWYWx1ZShcImFuaW1hdGlvbi1kdXJhdGlvblwiKSB8fCBcIjBcIiksIG8gPSBwYXJzZUZsb2F0KHQuZ2V0UHJvcGVydHlWYWx1ZShcInRyYW5zaXRpb24tZHVyYXRpb25cIikgfHwgXCIwXCIpO1xuICAgICAgcmV0dXJuIG4gPiAwIHx8IG8gPiAwO1xuICAgIH0sIEZlID0gZnVuY3Rpb24oZSkge1xuICAgICAgbGV0IHQgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHZvaWQgMCA/IGFyZ3VtZW50c1sxXSA6ICExO1xuICAgICAgY29uc3QgbiA9IHkoKTtcbiAgICAgIFcobikgJiYgKHQgJiYgKG4uc3R5bGUudHJhbnNpdGlvbiA9IFwibm9uZVwiLCBuLnN0eWxlLndpZHRoID0gXCIxMDAlXCIpLCBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgbi5zdHlsZS50cmFuc2l0aW9uID0gYHdpZHRoICR7ZSAvIDFlM31zIGxpbmVhcmAsIG4uc3R5bGUud2lkdGggPSBcIjAlXCI7XG4gICAgICB9LCAxMCkpO1xuICAgIH0sIFF0ID0gKCkgPT4ge1xuICAgICAgY29uc3QgZSA9IHkoKSwgdCA9IHBhcnNlSW50KHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGUpLndpZHRoKTtcbiAgICAgIGUuc3R5bGUucmVtb3ZlUHJvcGVydHkoXCJ0cmFuc2l0aW9uXCIpLCBlLnN0eWxlLndpZHRoID0gXCIxMDAlXCI7XG4gICAgICBjb25zdCBuID0gcGFyc2VJbnQod2luZG93LmdldENvbXB1dGVkU3R5bGUoZSkud2lkdGgpLCBvID0gdCAvIG4gKiAxMDA7XG4gICAgICBlLnN0eWxlLndpZHRoID0gYCR7b30lYDtcbiAgICB9LCBHdCA9IDEwMCwgQSA9IHt9LCBZdCA9ICgpID0+IHtcbiAgICAgIEEucHJldmlvdXNBY3RpdmVFbGVtZW50IGluc3RhbmNlb2YgSFRNTEVsZW1lbnQgPyAoQS5wcmV2aW91c0FjdGl2ZUVsZW1lbnQuZm9jdXMoKSwgQS5wcmV2aW91c0FjdGl2ZUVsZW1lbnQgPSBudWxsKSA6IGRvY3VtZW50LmJvZHkgJiYgZG9jdW1lbnQuYm9keS5mb2N1cygpO1xuICAgIH0sIEp0ID0gKGUpID0+IG5ldyBQcm9taXNlKCh0KSA9PiB7XG4gICAgICBpZiAoIWUpXG4gICAgICAgIHJldHVybiB0KCk7XG4gICAgICBjb25zdCBuID0gd2luZG93LnNjcm9sbFgsIG8gPSB3aW5kb3cuc2Nyb2xsWTtcbiAgICAgIEEucmVzdG9yZUZvY3VzVGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBZdCgpLCB0KCk7XG4gICAgICB9LCBHdCksIHdpbmRvdy5zY3JvbGxUbyhuLCBvKTtcbiAgICB9KSwgZHQgPSAoKSA9PiB0eXBlb2Ygd2luZG93ID4gXCJ1XCIgfHwgdHlwZW9mIGRvY3VtZW50ID4gXCJ1XCIsIFp0ID0gYFxuIDxkaXYgYXJpYS1sYWJlbGxlZGJ5PVwiJHtyLnRpdGxlfVwiIGFyaWEtZGVzY3JpYmVkYnk9XCIke3JbXCJodG1sLWNvbnRhaW5lclwiXX1cIiBjbGFzcz1cIiR7ci5wb3B1cH1cIiB0YWJpbmRleD1cIi0xXCI+XG4gICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cIiR7ci5jbG9zZX1cIj48L2J1dHRvbj5cbiAgIDx1bCBjbGFzcz1cIiR7cltcInByb2dyZXNzLXN0ZXBzXCJdfVwiPjwvdWw+XG4gICA8ZGl2IGNsYXNzPVwiJHtyLmljb259XCI+PC9kaXY+XG4gICA8aW1nIGNsYXNzPVwiJHtyLmltYWdlfVwiIC8+XG4gICA8aDIgY2xhc3M9XCIke3IudGl0bGV9XCIgaWQ9XCIke3IudGl0bGV9XCI+PC9oMj5cbiAgIDxkaXYgY2xhc3M9XCIke3JbXCJodG1sLWNvbnRhaW5lclwiXX1cIiBpZD1cIiR7cltcImh0bWwtY29udGFpbmVyXCJdfVwiPjwvZGl2PlxuICAgPGlucHV0IGNsYXNzPVwiJHtyLmlucHV0fVwiIC8+XG4gICA8aW5wdXQgdHlwZT1cImZpbGVcIiBjbGFzcz1cIiR7ci5maWxlfVwiIC8+XG4gICA8ZGl2IGNsYXNzPVwiJHtyLnJhbmdlfVwiPlxuICAgICA8aW5wdXQgdHlwZT1cInJhbmdlXCIgLz5cbiAgICAgPG91dHB1dD48L291dHB1dD5cbiAgIDwvZGl2PlxuICAgPHNlbGVjdCBjbGFzcz1cIiR7ci5zZWxlY3R9XCI+PC9zZWxlY3Q+XG4gICA8ZGl2IGNsYXNzPVwiJHtyLnJhZGlvfVwiPjwvZGl2PlxuICAgPGxhYmVsIGZvcj1cIiR7ci5jaGVja2JveH1cIiBjbGFzcz1cIiR7ci5jaGVja2JveH1cIj5cbiAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIC8+XG4gICAgIDxzcGFuIGNsYXNzPVwiJHtyLmxhYmVsfVwiPjwvc3Bhbj5cbiAgIDwvbGFiZWw+XG4gICA8dGV4dGFyZWEgY2xhc3M9XCIke3IudGV4dGFyZWF9XCI+PC90ZXh0YXJlYT5cbiAgIDxkaXYgY2xhc3M9XCIke3JbXCJ2YWxpZGF0aW9uLW1lc3NhZ2VcIl19XCIgaWQ9XCIke3JbXCJ2YWxpZGF0aW9uLW1lc3NhZ2VcIl19XCI+PC9kaXY+XG4gICA8ZGl2IGNsYXNzPVwiJHtyLmFjdGlvbnN9XCI+XG4gICAgIDxkaXYgY2xhc3M9XCIke3IubG9hZGVyfVwiPjwvZGl2PlxuICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cIiR7ci5jb25maXJtfVwiPjwvYnV0dG9uPlxuICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cIiR7ci5kZW55fVwiPjwvYnV0dG9uPlxuICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cIiR7ci5jYW5jZWx9XCI+PC9idXR0b24+XG4gICA8L2Rpdj5cbiAgIDxkaXYgY2xhc3M9XCIke3IuZm9vdGVyfVwiPjwvZGl2PlxuICAgPGRpdiBjbGFzcz1cIiR7cltcInRpbWVyLXByb2dyZXNzLWJhci1jb250YWluZXJcIl19XCI+XG4gICAgIDxkaXYgY2xhc3M9XCIke3JbXCJ0aW1lci1wcm9ncmVzcy1iYXJcIl19XCI+PC9kaXY+XG4gICA8L2Rpdj5cbiA8L2Rpdj5cbmAucmVwbGFjZSgvKF58XFxuKVxccyovZywgXCJcIiksIFh0ID0gKCkgPT4ge1xuICAgICAgY29uc3QgZSA9IFIoKTtcbiAgICAgIHJldHVybiBlID8gKGUucmVtb3ZlKCksIG5lKFtkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQsIGRvY3VtZW50LmJvZHldLCBbcltcIm5vLWJhY2tkcm9wXCJdLCByW1widG9hc3Qtc2hvd25cIl0sIHJbXCJoYXMtY29sdW1uXCJdXSksICEwKSA6ICExO1xuICAgIH0sIGhlID0gKCkgPT4ge1xuICAgICAgQS5jdXJyZW50SW5zdGFuY2UucmVzZXRWYWxpZGF0aW9uTWVzc2FnZSgpO1xuICAgIH0sIGVuID0gKCkgPT4ge1xuICAgICAgY29uc3QgZSA9IEIoKSwgdCA9IHVlKGUsIHIuaW5wdXQpLCBuID0gdWUoZSwgci5maWxlKSwgbyA9IGUucXVlcnlTZWxlY3RvcihgLiR7ci5yYW5nZX0gaW5wdXRgKSwgYyA9IGUucXVlcnlTZWxlY3RvcihgLiR7ci5yYW5nZX0gb3V0cHV0YCksIF8gPSB1ZShlLCByLnNlbGVjdCksIE8gPSBlLnF1ZXJ5U2VsZWN0b3IoYC4ke3IuY2hlY2tib3h9IGlucHV0YCksIFEgPSB1ZShlLCByLnRleHRhcmVhKTtcbiAgICAgIHQub25pbnB1dCA9IGhlLCBuLm9uY2hhbmdlID0gaGUsIF8ub25jaGFuZ2UgPSBoZSwgTy5vbmNoYW5nZSA9IGhlLCBRLm9uaW5wdXQgPSBoZSwgby5vbmlucHV0ID0gKCkgPT4ge1xuICAgICAgICBoZSgpLCBjLnZhbHVlID0gby52YWx1ZTtcbiAgICAgIH0sIG8ub25jaGFuZ2UgPSAoKSA9PiB7XG4gICAgICAgIGhlKCksIGMudmFsdWUgPSBvLnZhbHVlO1xuICAgICAgfTtcbiAgICB9LCB0biA9IChlKSA9PiB0eXBlb2YgZSA9PSBcInN0cmluZ1wiID8gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihlKSA6IGUsIG5uID0gKGUpID0+IHtcbiAgICAgIGNvbnN0IHQgPSBCKCk7XG4gICAgICB0LnNldEF0dHJpYnV0ZShcInJvbGVcIiwgZS50b2FzdCA/IFwiYWxlcnRcIiA6IFwiZGlhbG9nXCIpLCB0LnNldEF0dHJpYnV0ZShcImFyaWEtbGl2ZVwiLCBlLnRvYXN0ID8gXCJwb2xpdGVcIiA6IFwiYXNzZXJ0aXZlXCIpLCBlLnRvYXN0IHx8IHQuc2V0QXR0cmlidXRlKFwiYXJpYS1tb2RhbFwiLCBcInRydWVcIik7XG4gICAgfSwgb24gPSAoZSkgPT4ge1xuICAgICAgd2luZG93LmdldENvbXB1dGVkU3R5bGUoZSkuZGlyZWN0aW9uID09PSBcInJ0bFwiICYmIE0oUigpLCByLnJ0bCk7XG4gICAgfSwgc24gPSAoZSkgPT4ge1xuICAgICAgY29uc3QgdCA9IFh0KCk7XG4gICAgICBpZiAoZHQoKSkge1xuICAgICAgICBpZShcIlN3ZWV0QWxlcnQyIHJlcXVpcmVzIGRvY3VtZW50IHRvIGluaXRpYWxpemVcIik7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGNvbnN0IG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgbi5jbGFzc05hbWUgPSByLmNvbnRhaW5lciwgdCAmJiBNKG4sIHJbXCJuby10cmFuc2l0aW9uXCJdKSwgVihuLCBadCk7XG4gICAgICBjb25zdCBvID0gdG4oZS50YXJnZXQpO1xuICAgICAgby5hcHBlbmRDaGlsZChuKSwgbm4oZSksIG9uKG8pLCBlbigpO1xuICAgIH0sIFZlID0gKGUsIHQpID0+IHtcbiAgICAgIGUgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCA/IHQuYXBwZW5kQ2hpbGQoZSkgOiB0eXBlb2YgZSA9PSBcIm9iamVjdFwiID8gcm4oZSwgdCkgOiBlICYmIFYodCwgZSk7XG4gICAgfSwgcm4gPSAoZSwgdCkgPT4ge1xuICAgICAgZS5qcXVlcnkgPyBhbih0LCBlKSA6IFYodCwgZS50b1N0cmluZygpKTtcbiAgICB9LCBhbiA9IChlLCB0KSA9PiB7XG4gICAgICBpZiAoZS50ZXh0Q29udGVudCA9IFwiXCIsIDAgaW4gdClcbiAgICAgICAgZm9yIChsZXQgbiA9IDA7IG4gaW4gdDsgbisrKVxuICAgICAgICAgIGUuYXBwZW5kQ2hpbGQodFtuXS5jbG9uZU5vZGUoITApKTtcbiAgICAgIGVsc2VcbiAgICAgICAgZS5hcHBlbmRDaGlsZCh0LmNsb25lTm9kZSghMCkpO1xuICAgIH0sIEllID0gKCgpID0+IHtcbiAgICAgIGlmIChkdCgpKVxuICAgICAgICByZXR1cm4gITE7XG4gICAgICBjb25zdCBlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKSwgdCA9IHtcbiAgICAgICAgV2Via2l0QW5pbWF0aW9uOiBcIndlYmtpdEFuaW1hdGlvbkVuZFwiLFxuICAgICAgICAvLyBDaHJvbWUsIFNhZmFyaSBhbmQgT3BlcmFcbiAgICAgICAgYW5pbWF0aW9uOiBcImFuaW1hdGlvbmVuZFwiXG4gICAgICAgIC8vIFN0YW5kYXJkIHN5bnRheFxuICAgICAgfTtcbiAgICAgIGZvciAoY29uc3QgbiBpbiB0KVxuICAgICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHQsIG4pICYmIHR5cGVvZiBlLnN0eWxlW25dIDwgXCJ1XCIpXG4gICAgICAgICAgcmV0dXJuIHRbbl07XG4gICAgICByZXR1cm4gITE7XG4gICAgfSkoKSwgbG4gPSAoKSA9PiB7XG4gICAgICBjb25zdCBlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIGUuY2xhc3NOYW1lID0gcltcInNjcm9sbGJhci1tZWFzdXJlXCJdLCBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGUpO1xuICAgICAgY29uc3QgdCA9IGUuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkud2lkdGggLSBlLmNsaWVudFdpZHRoO1xuICAgICAgcmV0dXJuIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQoZSksIHQ7XG4gICAgfSwgY24gPSAoZSwgdCkgPT4ge1xuICAgICAgY29uc3QgbiA9IG0oKSwgbyA9IGQoKTtcbiAgICAgICF0LnNob3dDb25maXJtQnV0dG9uICYmICF0LnNob3dEZW55QnV0dG9uICYmICF0LnNob3dDYW5jZWxCdXR0b24gPyBGKG4pIDogRChuKSwgWShuLCB0LCBcImFjdGlvbnNcIiksIHVuKG4sIG8sIHQpLCBWKG8sIHQubG9hZGVySHRtbCksIFkobywgdCwgXCJsb2FkZXJcIik7XG4gICAgfTtcbiAgICBmdW5jdGlvbiB1bihlLCB0LCBuKSB7XG4gICAgICBjb25zdCBvID0gcygpLCBjID0gdSgpLCBfID0gbCgpO1xuICAgICAgamUobywgXCJjb25maXJtXCIsIG4pLCBqZShjLCBcImRlbnlcIiwgbiksIGplKF8sIFwiY2FuY2VsXCIsIG4pLCBkbihvLCBjLCBfLCBuKSwgbi5yZXZlcnNlQnV0dG9ucyAmJiAobi50b2FzdCA/IChlLmluc2VydEJlZm9yZShfLCBvKSwgZS5pbnNlcnRCZWZvcmUoYywgbykpIDogKGUuaW5zZXJ0QmVmb3JlKF8sIHQpLCBlLmluc2VydEJlZm9yZShjLCB0KSwgZS5pbnNlcnRCZWZvcmUobywgdCkpKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gZG4oZSwgdCwgbiwgbykge1xuICAgICAgaWYgKCFvLmJ1dHRvbnNTdHlsaW5nKSB7XG4gICAgICAgIG5lKFtlLCB0LCBuXSwgci5zdHlsZWQpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBNKFtlLCB0LCBuXSwgci5zdHlsZWQpLCBvLmNvbmZpcm1CdXR0b25Db2xvciAmJiAoZS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBvLmNvbmZpcm1CdXR0b25Db2xvciwgTShlLCByW1wiZGVmYXVsdC1vdXRsaW5lXCJdKSksIG8uZGVueUJ1dHRvbkNvbG9yICYmICh0LnN0eWxlLmJhY2tncm91bmRDb2xvciA9IG8uZGVueUJ1dHRvbkNvbG9yLCBNKHQsIHJbXCJkZWZhdWx0LW91dGxpbmVcIl0pKSwgby5jYW5jZWxCdXR0b25Db2xvciAmJiAobi5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBvLmNhbmNlbEJ1dHRvbkNvbG9yLCBNKG4sIHJbXCJkZWZhdWx0LW91dGxpbmVcIl0pKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gamUoZSwgdCwgbikge1xuICAgICAgQmUoZSwgbltgc2hvdyR7c2UodCl9QnV0dG9uYF0sIFwiaW5saW5lLWJsb2NrXCIpLCBWKGUsIG5bYCR7dH1CdXR0b25UZXh0YF0pLCBlLnNldEF0dHJpYnV0ZShcImFyaWEtbGFiZWxcIiwgbltgJHt0fUJ1dHRvbkFyaWFMYWJlbGBdKSwgZS5jbGFzc05hbWUgPSByW3RdLCBZKGUsIG4sIGAke3R9QnV0dG9uYCksIE0oZSwgbltgJHt0fUJ1dHRvbkNsYXNzYF0pO1xuICAgIH1cbiAgICBjb25zdCBmbiA9IChlLCB0KSA9PiB7XG4gICAgICBjb25zdCBuID0gTCgpO1xuICAgICAgVihuLCB0LmNsb3NlQnV0dG9uSHRtbCksIFkobiwgdCwgXCJjbG9zZUJ1dHRvblwiKSwgQmUobiwgdC5zaG93Q2xvc2VCdXR0b24pLCBuLnNldEF0dHJpYnV0ZShcImFyaWEtbGFiZWxcIiwgdC5jbG9zZUJ1dHRvbkFyaWFMYWJlbCk7XG4gICAgfSwgaG4gPSAoZSwgdCkgPT4ge1xuICAgICAgY29uc3QgbiA9IFIoKTtcbiAgICAgIG4gJiYgKHBuKG4sIHQuYmFja2Ryb3ApLCBnbihuLCB0LnBvc2l0aW9uKSwgbW4obiwgdC5ncm93KSwgWShuLCB0LCBcImNvbnRhaW5lclwiKSk7XG4gICAgfTtcbiAgICBmdW5jdGlvbiBwbihlLCB0KSB7XG4gICAgICB0eXBlb2YgdCA9PSBcInN0cmluZ1wiID8gZS5zdHlsZS5iYWNrZ3JvdW5kID0gdCA6IHQgfHwgTShbZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LCBkb2N1bWVudC5ib2R5XSwgcltcIm5vLWJhY2tkcm9wXCJdKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gZ24oZSwgdCkge1xuICAgICAgdCBpbiByID8gTShlLCByW3RdKSA6IChmKCdUaGUgXCJwb3NpdGlvblwiIHBhcmFtZXRlciBpcyBub3QgdmFsaWQsIGRlZmF1bHRpbmcgdG8gXCJjZW50ZXJcIicpLCBNKGUsIHIuY2VudGVyKSk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIG1uKGUsIHQpIHtcbiAgICAgIGlmICh0ICYmIHR5cGVvZiB0ID09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgY29uc3QgbiA9IGBncm93LSR7dH1gO1xuICAgICAgICBuIGluIHIgJiYgTShlLCByW25dKTtcbiAgICAgIH1cbiAgICB9XG4gICAgY29uc3Qgd24gPSBbXCJpbnB1dFwiLCBcImZpbGVcIiwgXCJyYW5nZVwiLCBcInNlbGVjdFwiLCBcInJhZGlvXCIsIFwiY2hlY2tib3hcIiwgXCJ0ZXh0YXJlYVwiXSwgYm4gPSAoZSwgdCkgPT4ge1xuICAgICAgY29uc3QgbiA9IEIoKSwgbyA9IGcuaW5uZXJQYXJhbXMuZ2V0KGUpLCBjID0gIW8gfHwgdC5pbnB1dCAhPT0gby5pbnB1dDtcbiAgICAgIHduLmZvckVhY2goKF8pID0+IHtcbiAgICAgICAgY29uc3QgTyA9IHVlKG4sIHJbX10pO1xuICAgICAgICBfbihfLCB0LmlucHV0QXR0cmlidXRlcyksIE8uY2xhc3NOYW1lID0gcltfXSwgYyAmJiBGKE8pO1xuICAgICAgfSksIHQuaW5wdXQgJiYgKGMgJiYgeW4odCksIEVuKHQpKTtcbiAgICB9LCB5biA9IChlKSA9PiB7XG4gICAgICBpZiAoIUhbZS5pbnB1dF0pIHtcbiAgICAgICAgaWUoYFVuZXhwZWN0ZWQgdHlwZSBvZiBpbnB1dCEgRXhwZWN0ZWQgXCJ0ZXh0XCIsIFwiZW1haWxcIiwgXCJwYXNzd29yZFwiLCBcIm51bWJlclwiLCBcInRlbFwiLCBcInNlbGVjdFwiLCBcInJhZGlvXCIsIFwiY2hlY2tib3hcIiwgXCJ0ZXh0YXJlYVwiLCBcImZpbGVcIiBvciBcInVybFwiLCBnb3QgXCIke2UuaW5wdXR9XCJgKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgY29uc3QgdCA9IGZ0KGUuaW5wdXQpLCBuID0gSFtlLmlucHV0XSh0LCBlKTtcbiAgICAgIEQodCksIGUuaW5wdXRBdXRvRm9jdXMgJiYgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHJ0KG4pO1xuICAgICAgfSk7XG4gICAgfSwgdm4gPSAoZSkgPT4ge1xuICAgICAgZm9yIChsZXQgdCA9IDA7IHQgPCBlLmF0dHJpYnV0ZXMubGVuZ3RoOyB0KyspIHtcbiAgICAgICAgY29uc3QgbiA9IGUuYXR0cmlidXRlc1t0XS5uYW1lO1xuICAgICAgICBbXCJ0eXBlXCIsIFwidmFsdWVcIiwgXCJzdHlsZVwiXS5pbmNsdWRlcyhuKSB8fCBlLnJlbW92ZUF0dHJpYnV0ZShuKTtcbiAgICAgIH1cbiAgICB9LCBfbiA9IChlLCB0KSA9PiB7XG4gICAgICBjb25zdCBuID0gJGUoQigpLCBlKTtcbiAgICAgIGlmIChuKSB7XG4gICAgICAgIHZuKG4pO1xuICAgICAgICBmb3IgKGNvbnN0IG8gaW4gdClcbiAgICAgICAgICBuLnNldEF0dHJpYnV0ZShvLCB0W29dKTtcbiAgICAgIH1cbiAgICB9LCBFbiA9IChlKSA9PiB7XG4gICAgICBjb25zdCB0ID0gZnQoZS5pbnB1dCk7XG4gICAgICB0eXBlb2YgZS5jdXN0b21DbGFzcyA9PSBcIm9iamVjdFwiICYmIE0odCwgZS5jdXN0b21DbGFzcy5pbnB1dCk7XG4gICAgfSwgSGUgPSAoZSwgdCkgPT4ge1xuICAgICAgKCFlLnBsYWNlaG9sZGVyIHx8IHQuaW5wdXRQbGFjZWhvbGRlcikgJiYgKGUucGxhY2Vob2xkZXIgPSB0LmlucHV0UGxhY2Vob2xkZXIpO1xuICAgIH0sIGtlID0gKGUsIHQsIG4pID0+IHtcbiAgICAgIGlmIChuLmlucHV0TGFiZWwpIHtcbiAgICAgICAgZS5pZCA9IHIuaW5wdXQ7XG4gICAgICAgIGNvbnN0IG8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIiksIGMgPSByW1wiaW5wdXQtbGFiZWxcIl07XG4gICAgICAgIG8uc2V0QXR0cmlidXRlKFwiZm9yXCIsIGUuaWQpLCBvLmNsYXNzTmFtZSA9IGMsIHR5cGVvZiBuLmN1c3RvbUNsYXNzID09IFwib2JqZWN0XCIgJiYgTShvLCBuLmN1c3RvbUNsYXNzLmlucHV0TGFiZWwpLCBvLmlubmVyVGV4dCA9IG4uaW5wdXRMYWJlbCwgdC5pbnNlcnRBZGphY2VudEVsZW1lbnQoXCJiZWZvcmViZWdpblwiLCBvKTtcbiAgICAgIH1cbiAgICB9LCBmdCA9IChlKSA9PiB1ZShCKCksIHJbZV0gfHwgci5pbnB1dCksIExlID0gKGUsIHQpID0+IHtcbiAgICAgIFtcInN0cmluZ1wiLCBcIm51bWJlclwiXS5pbmNsdWRlcyh0eXBlb2YgdCkgPyBlLnZhbHVlID0gYCR7dH1gIDogWih0KSB8fCBmKGBVbmV4cGVjdGVkIHR5cGUgb2YgaW5wdXRWYWx1ZSEgRXhwZWN0ZWQgXCJzdHJpbmdcIiwgXCJudW1iZXJcIiBvciBcIlByb21pc2VcIiwgZ290IFwiJHt0eXBlb2YgdH1cImApO1xuICAgIH0sIEggPSB7fTtcbiAgICBILnRleHQgPSBILmVtYWlsID0gSC5wYXNzd29yZCA9IEgubnVtYmVyID0gSC50ZWwgPSBILnVybCA9IChlLCB0KSA9PiAoTGUoZSwgdC5pbnB1dFZhbHVlKSwga2UoZSwgZSwgdCksIEhlKGUsIHQpLCBlLnR5cGUgPSB0LmlucHV0LCBlKSwgSC5maWxlID0gKGUsIHQpID0+IChrZShlLCBlLCB0KSwgSGUoZSwgdCksIGUpLCBILnJhbmdlID0gKGUsIHQpID0+IHtcbiAgICAgIGNvbnN0IG4gPSBlLnF1ZXJ5U2VsZWN0b3IoXCJpbnB1dFwiKSwgbyA9IGUucXVlcnlTZWxlY3RvcihcIm91dHB1dFwiKTtcbiAgICAgIHJldHVybiBMZShuLCB0LmlucHV0VmFsdWUpLCBuLnR5cGUgPSB0LmlucHV0LCBMZShvLCB0LmlucHV0VmFsdWUpLCBrZShuLCBlLCB0KSwgZTtcbiAgICB9LCBILnNlbGVjdCA9IChlLCB0KSA9PiB7XG4gICAgICBpZiAoZS50ZXh0Q29udGVudCA9IFwiXCIsIHQuaW5wdXRQbGFjZWhvbGRlcikge1xuICAgICAgICBjb25zdCBuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcbiAgICAgICAgVihuLCB0LmlucHV0UGxhY2Vob2xkZXIpLCBuLnZhbHVlID0gXCJcIiwgbi5kaXNhYmxlZCA9ICEwLCBuLnNlbGVjdGVkID0gITAsIGUuYXBwZW5kQ2hpbGQobik7XG4gICAgICB9XG4gICAgICByZXR1cm4ga2UoZSwgZSwgdCksIGU7XG4gICAgfSwgSC5yYWRpbyA9IChlKSA9PiAoZS50ZXh0Q29udGVudCA9IFwiXCIsIGUpLCBILmNoZWNrYm94ID0gKGUsIHQpID0+IHtcbiAgICAgIGNvbnN0IG4gPSAkZShCKCksIFwiY2hlY2tib3hcIik7XG4gICAgICBuLnZhbHVlID0gXCIxXCIsIG4uaWQgPSByLmNoZWNrYm94LCBuLmNoZWNrZWQgPSAhIXQuaW5wdXRWYWx1ZTtcbiAgICAgIGNvbnN0IG8gPSBlLnF1ZXJ5U2VsZWN0b3IoXCJzcGFuXCIpO1xuICAgICAgcmV0dXJuIFYobywgdC5pbnB1dFBsYWNlaG9sZGVyKSwgbjtcbiAgICB9LCBILnRleHRhcmVhID0gKGUsIHQpID0+IHtcbiAgICAgIExlKGUsIHQuaW5wdXRWYWx1ZSksIEhlKGUsIHQpLCBrZShlLCBlLCB0KTtcbiAgICAgIGNvbnN0IG4gPSAobykgPT4gcGFyc2VJbnQod2luZG93LmdldENvbXB1dGVkU3R5bGUobykubWFyZ2luTGVmdCkgKyBwYXJzZUludCh3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShvKS5tYXJnaW5SaWdodCk7XG4gICAgICByZXR1cm4gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIGlmIChcIk11dGF0aW9uT2JzZXJ2ZXJcIiBpbiB3aW5kb3cpIHtcbiAgICAgICAgICBjb25zdCBvID0gcGFyc2VJbnQod2luZG93LmdldENvbXB1dGVkU3R5bGUoQigpKS53aWR0aCksIGMgPSAoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBfID0gZS5vZmZzZXRXaWR0aCArIG4oZSk7XG4gICAgICAgICAgICBfID4gbyA/IEIoKS5zdHlsZS53aWR0aCA9IGAke199cHhgIDogQigpLnN0eWxlLndpZHRoID0gbnVsbDtcbiAgICAgICAgICB9O1xuICAgICAgICAgIG5ldyBNdXRhdGlvbk9ic2VydmVyKGMpLm9ic2VydmUoZSwge1xuICAgICAgICAgICAgYXR0cmlidXRlczogITAsXG4gICAgICAgICAgICBhdHRyaWJ1dGVGaWx0ZXI6IFtcInN0eWxlXCJdXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH0pLCBlO1xuICAgIH07XG4gICAgY29uc3QgQ24gPSAoZSwgdCkgPT4ge1xuICAgICAgY29uc3QgbiA9IGIoKTtcbiAgICAgIFkobiwgdCwgXCJodG1sQ29udGFpbmVyXCIpLCB0Lmh0bWwgPyAoVmUodC5odG1sLCBuKSwgRChuLCBcImJsb2NrXCIpKSA6IHQudGV4dCA/IChuLnRleHRDb250ZW50ID0gdC50ZXh0LCBEKG4sIFwiYmxvY2tcIikpIDogRihuKSwgYm4oZSwgdCk7XG4gICAgfSwgeG4gPSAoZSwgdCkgPT4ge1xuICAgICAgY29uc3QgbiA9IFMoKTtcbiAgICAgIEJlKG4sIHQuZm9vdGVyKSwgdC5mb290ZXIgJiYgVmUodC5mb290ZXIsIG4pLCBZKG4sIHQsIFwiZm9vdGVyXCIpO1xuICAgIH0sIEFuID0gKGUsIHQpID0+IHtcbiAgICAgIGNvbnN0IG4gPSBnLmlubmVyUGFyYW1zLmdldChlKSwgbyA9IGNlKCk7XG4gICAgICBpZiAobiAmJiB0Lmljb24gPT09IG4uaWNvbikge1xuICAgICAgICBwdChvLCB0KSwgaHQobywgdCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGlmICghdC5pY29uICYmICF0Lmljb25IdG1sKSB7XG4gICAgICAgIEYobyk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGlmICh0Lmljb24gJiYgT2JqZWN0LmtleXMocSkuaW5kZXhPZih0Lmljb24pID09PSAtMSkge1xuICAgICAgICBpZShgVW5rbm93biBpY29uISBFeHBlY3RlZCBcInN1Y2Nlc3NcIiwgXCJlcnJvclwiLCBcIndhcm5pbmdcIiwgXCJpbmZvXCIgb3IgXCJxdWVzdGlvblwiLCBnb3QgXCIke3QuaWNvbn1cImApLCBGKG8pO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBEKG8pLCBwdChvLCB0KSwgaHQobywgdCksIE0obywgdC5zaG93Q2xhc3MuaWNvbik7XG4gICAgfSwgaHQgPSAoZSwgdCkgPT4ge1xuICAgICAgZm9yIChjb25zdCBuIGluIHEpXG4gICAgICAgIHQuaWNvbiAhPT0gbiAmJiBuZShlLCBxW25dKTtcbiAgICAgIE0oZSwgcVt0Lmljb25dKSwgU24oZSwgdCksIEluKCksIFkoZSwgdCwgXCJpY29uXCIpO1xuICAgIH0sIEluID0gKCkgPT4ge1xuICAgICAgY29uc3QgZSA9IEIoKSwgdCA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGUpLmdldFByb3BlcnR5VmFsdWUoXCJiYWNrZ3JvdW5kLWNvbG9yXCIpLCBuID0gZS5xdWVyeVNlbGVjdG9yQWxsKFwiW2NsYXNzXj1zd2FsMi1zdWNjZXNzLWNpcmN1bGFyLWxpbmVdLCAuc3dhbDItc3VjY2Vzcy1maXhcIik7XG4gICAgICBmb3IgKGxldCBvID0gMDsgbyA8IG4ubGVuZ3RoOyBvKyspXG4gICAgICAgIG5bb10uc3R5bGUuYmFja2dyb3VuZENvbG9yID0gdDtcbiAgICB9LCBrbiA9IGBcbiAgPGRpdiBjbGFzcz1cInN3YWwyLXN1Y2Nlc3MtY2lyY3VsYXItbGluZS1sZWZ0XCI+PC9kaXY+XG4gIDxzcGFuIGNsYXNzPVwic3dhbDItc3VjY2Vzcy1saW5lLXRpcFwiPjwvc3Bhbj4gPHNwYW4gY2xhc3M9XCJzd2FsMi1zdWNjZXNzLWxpbmUtbG9uZ1wiPjwvc3Bhbj5cbiAgPGRpdiBjbGFzcz1cInN3YWwyLXN1Y2Nlc3MtcmluZ1wiPjwvZGl2PiA8ZGl2IGNsYXNzPVwic3dhbDItc3VjY2Vzcy1maXhcIj48L2Rpdj5cbiAgPGRpdiBjbGFzcz1cInN3YWwyLXN1Y2Nlc3MtY2lyY3VsYXItbGluZS1yaWdodFwiPjwvZGl2PlxuYCwgVG4gPSBgXG4gIDxzcGFuIGNsYXNzPVwic3dhbDIteC1tYXJrXCI+XG4gICAgPHNwYW4gY2xhc3M9XCJzd2FsMi14LW1hcmstbGluZS1sZWZ0XCI+PC9zcGFuPlxuICAgIDxzcGFuIGNsYXNzPVwic3dhbDIteC1tYXJrLWxpbmUtcmlnaHRcIj48L3NwYW4+XG4gIDwvc3Bhbj5cbmAsIHB0ID0gKGUsIHQpID0+IHtcbiAgICAgIGxldCBuID0gZS5pbm5lckhUTUwsIG87XG4gICAgICB0Lmljb25IdG1sID8gbyA9IGd0KHQuaWNvbkh0bWwpIDogdC5pY29uID09PSBcInN1Y2Nlc3NcIiA/IChvID0ga24sIG4gPSBuLnJlcGxhY2UoLyBzdHlsZT1cIi4qP1wiL2csIFwiXCIpKSA6IHQuaWNvbiA9PT0gXCJlcnJvclwiID8gbyA9IFRuIDogbyA9IGd0KHtcbiAgICAgICAgcXVlc3Rpb246IFwiP1wiLFxuICAgICAgICB3YXJuaW5nOiBcIiFcIixcbiAgICAgICAgaW5mbzogXCJpXCJcbiAgICAgIH1bdC5pY29uXSksIG4udHJpbSgpICE9PSBvLnRyaW0oKSAmJiBWKGUsIG8pO1xuICAgIH0sIFNuID0gKGUsIHQpID0+IHtcbiAgICAgIGlmICh0Lmljb25Db2xvcikge1xuICAgICAgICBlLnN0eWxlLmNvbG9yID0gdC5pY29uQ29sb3IsIGUuc3R5bGUuYm9yZGVyQ29sb3IgPSB0Lmljb25Db2xvcjtcbiAgICAgICAgZm9yIChjb25zdCBuIG9mIFtcIi5zd2FsMi1zdWNjZXNzLWxpbmUtdGlwXCIsIFwiLnN3YWwyLXN1Y2Nlc3MtbGluZS1sb25nXCIsIFwiLnN3YWwyLXgtbWFyay1saW5lLWxlZnRcIiwgXCIuc3dhbDIteC1tYXJrLWxpbmUtcmlnaHRcIl0pXG4gICAgICAgICAgbHQoZSwgbiwgXCJiYWNrZ3JvdW5kQ29sb3JcIiwgdC5pY29uQ29sb3IpO1xuICAgICAgICBsdChlLCBcIi5zd2FsMi1zdWNjZXNzLXJpbmdcIiwgXCJib3JkZXJDb2xvclwiLCB0Lmljb25Db2xvcik7XG4gICAgICB9XG4gICAgfSwgZ3QgPSAoZSkgPT4gYDxkaXYgY2xhc3M9XCIke3JbXCJpY29uLWNvbnRlbnRcIl19XCI+JHtlfTwvZGl2PmAsIFBuID0gKGUsIHQpID0+IHtcbiAgICAgIGNvbnN0IG4gPSBNZSgpO1xuICAgICAgaWYgKCF0LmltYWdlVXJsKSB7XG4gICAgICAgIEYobik7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIEQobiwgXCJcIiksIG4uc2V0QXR0cmlidXRlKFwic3JjXCIsIHQuaW1hZ2VVcmwpLCBuLnNldEF0dHJpYnV0ZShcImFsdFwiLCB0LmltYWdlQWx0KSwgbWUobiwgXCJ3aWR0aFwiLCB0LmltYWdlV2lkdGgpLCBtZShuLCBcImhlaWdodFwiLCB0LmltYWdlSGVpZ2h0KSwgbi5jbGFzc05hbWUgPSByLmltYWdlLCBZKG4sIHQsIFwiaW1hZ2VcIik7XG4gICAgfSwgTW4gPSAoZSwgdCkgPT4ge1xuICAgICAgY29uc3QgbiA9IFIoKSwgbyA9IEIoKTtcbiAgICAgIHQudG9hc3QgPyAobWUobiwgXCJ3aWR0aFwiLCB0LndpZHRoKSwgby5zdHlsZS53aWR0aCA9IFwiMTAwJVwiLCBvLmluc2VydEJlZm9yZShkKCksIGNlKCkpKSA6IG1lKG8sIFwid2lkdGhcIiwgdC53aWR0aCksIG1lKG8sIFwicGFkZGluZ1wiLCB0LnBhZGRpbmcpLCB0LmNvbG9yICYmIChvLnN0eWxlLmNvbG9yID0gdC5jb2xvciksIHQuYmFja2dyb3VuZCAmJiAoby5zdHlsZS5iYWNrZ3JvdW5kID0gdC5iYWNrZ3JvdW5kKSwgRihpKCkpLCBCbihvLCB0KTtcbiAgICB9LCBCbiA9IChlLCB0KSA9PiB7XG4gICAgICBlLmNsYXNzTmFtZSA9IGAke3IucG9wdXB9ICR7VyhlKSA/IHQuc2hvd0NsYXNzLnBvcHVwIDogXCJcIn1gLCB0LnRvYXN0ID8gKE0oW2RvY3VtZW50LmRvY3VtZW50RWxlbWVudCwgZG9jdW1lbnQuYm9keV0sIHJbXCJ0b2FzdC1zaG93blwiXSksIE0oZSwgci50b2FzdCkpIDogTShlLCByLm1vZGFsKSwgWShlLCB0LCBcInBvcHVwXCIpLCB0eXBlb2YgdC5jdXN0b21DbGFzcyA9PSBcInN0cmluZ1wiICYmIE0oZSwgdC5jdXN0b21DbGFzcyksIHQuaWNvbiAmJiBNKGUsIHJbYGljb24tJHt0Lmljb259YF0pO1xuICAgIH0sIExuID0gKGUsIHQpID0+IHtcbiAgICAgIGNvbnN0IG4gPSBHKCk7XG4gICAgICBpZiAoIXQucHJvZ3Jlc3NTdGVwcyB8fCB0LnByb2dyZXNzU3RlcHMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIEYobik7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIEQobiksIG4udGV4dENvbnRlbnQgPSBcIlwiLCB0LmN1cnJlbnRQcm9ncmVzc1N0ZXAgPj0gdC5wcm9ncmVzc1N0ZXBzLmxlbmd0aCAmJiBmKFwiSW52YWxpZCBjdXJyZW50UHJvZ3Jlc3NTdGVwIHBhcmFtZXRlciwgaXQgc2hvdWxkIGJlIGxlc3MgdGhhbiBwcm9ncmVzc1N0ZXBzLmxlbmd0aCAoY3VycmVudFByb2dyZXNzU3RlcCBsaWtlIEpTIGFycmF5cyBzdGFydHMgZnJvbSAwKVwiKSwgdC5wcm9ncmVzc1N0ZXBzLmZvckVhY2goKG8sIGMpID0+IHtcbiAgICAgICAgY29uc3QgXyA9IE5uKG8pO1xuICAgICAgICBpZiAobi5hcHBlbmRDaGlsZChfKSwgYyA9PT0gdC5jdXJyZW50UHJvZ3Jlc3NTdGVwICYmIE0oXywgcltcImFjdGl2ZS1wcm9ncmVzcy1zdGVwXCJdKSwgYyAhPT0gdC5wcm9ncmVzc1N0ZXBzLmxlbmd0aCAtIDEpIHtcbiAgICAgICAgICBjb25zdCBPID0gT24odCk7XG4gICAgICAgICAgbi5hcHBlbmRDaGlsZChPKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSwgTm4gPSAoZSkgPT4ge1xuICAgICAgY29uc3QgdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgICAgIHJldHVybiBNKHQsIHJbXCJwcm9ncmVzcy1zdGVwXCJdKSwgVih0LCBlKSwgdDtcbiAgICB9LCBPbiA9IChlKSA9PiB7XG4gICAgICBjb25zdCB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICAgICAgcmV0dXJuIE0odCwgcltcInByb2dyZXNzLXN0ZXAtbGluZVwiXSksIGUucHJvZ3Jlc3NTdGVwc0Rpc3RhbmNlICYmIG1lKHQsIFwid2lkdGhcIiwgZS5wcm9ncmVzc1N0ZXBzRGlzdGFuY2UpLCB0O1xuICAgIH0sIHFuID0gKGUsIHQpID0+IHtcbiAgICAgIGNvbnN0IG4gPSBmZSgpO1xuICAgICAgQmUobiwgdC50aXRsZSB8fCB0LnRpdGxlVGV4dCwgXCJibG9ja1wiKSwgdC50aXRsZSAmJiBWZSh0LnRpdGxlLCBuKSwgdC50aXRsZVRleHQgJiYgKG4uaW5uZXJUZXh0ID0gdC50aXRsZVRleHQpLCBZKG4sIHQsIFwidGl0bGVcIik7XG4gICAgfSwgbXQgPSAoZSwgdCkgPT4ge1xuICAgICAgTW4oZSwgdCksIGhuKGUsIHQpLCBMbihlLCB0KSwgQW4oZSwgdCksIFBuKGUsIHQpLCBxbihlLCB0KSwgZm4oZSwgdCksIENuKGUsIHQpLCBjbihlLCB0KSwgeG4oZSwgdCksIHR5cGVvZiB0LmRpZFJlbmRlciA9PSBcImZ1bmN0aW9uXCIgJiYgdC5kaWRSZW5kZXIoQigpKTtcbiAgICB9O1xuICAgIGZ1bmN0aW9uIHd0KCkge1xuICAgICAgY29uc3QgZSA9IGcuaW5uZXJQYXJhbXMuZ2V0KHRoaXMpO1xuICAgICAgaWYgKCFlKVxuICAgICAgICByZXR1cm47XG4gICAgICBjb25zdCB0ID0gZy5kb21DYWNoZS5nZXQodGhpcyk7XG4gICAgICBGKHQubG9hZGVyKSwgeCgpID8gZS5pY29uICYmIEQoY2UoKSkgOiBSbih0KSwgbmUoW3QucG9wdXAsIHQuYWN0aW9uc10sIHIubG9hZGluZyksIHQucG9wdXAucmVtb3ZlQXR0cmlidXRlKFwiYXJpYS1idXN5XCIpLCB0LnBvcHVwLnJlbW92ZUF0dHJpYnV0ZShcImRhdGEtbG9hZGluZ1wiKSwgdC5jb25maXJtQnV0dG9uLmRpc2FibGVkID0gITEsIHQuZGVueUJ1dHRvbi5kaXNhYmxlZCA9ICExLCB0LmNhbmNlbEJ1dHRvbi5kaXNhYmxlZCA9ICExO1xuICAgIH1cbiAgICBjb25zdCBSbiA9IChlKSA9PiB7XG4gICAgICBjb25zdCB0ID0gZS5wb3B1cC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKGUubG9hZGVyLmdldEF0dHJpYnV0ZShcImRhdGEtYnV0dG9uLXRvLXJlcGxhY2VcIikpO1xuICAgICAgdC5sZW5ndGggPyBEKHRbMF0sIFwiaW5saW5lLWJsb2NrXCIpIDogV3QoKSAmJiBGKGUuYWN0aW9ucyk7XG4gICAgfTtcbiAgICBmdW5jdGlvbiBVbihlKSB7XG4gICAgICBjb25zdCB0ID0gZy5pbm5lclBhcmFtcy5nZXQoZSB8fCB0aGlzKSwgbiA9IGcuZG9tQ2FjaGUuZ2V0KGUgfHwgdGhpcyk7XG4gICAgICByZXR1cm4gbiA/ICRlKG4ucG9wdXAsIHQuaW5wdXQpIDogbnVsbDtcbiAgICB9XG4gICAgY29uc3QgRG4gPSAoKSA9PiBXKEIoKSksIGJ0ID0gKCkgPT4gcygpICYmIHMoKS5jbGljaygpLCAkbiA9ICgpID0+IHUoKSAmJiB1KCkuY2xpY2soKSwgRm4gPSAoKSA9PiBsKCkgJiYgbCgpLmNsaWNrKCksIHdlID0gT2JqZWN0LmZyZWV6ZSh7XG4gICAgICBjYW5jZWw6IFwiY2FuY2VsXCIsXG4gICAgICBiYWNrZHJvcDogXCJiYWNrZHJvcFwiLFxuICAgICAgY2xvc2U6IFwiY2xvc2VcIixcbiAgICAgIGVzYzogXCJlc2NcIixcbiAgICAgIHRpbWVyOiBcInRpbWVyXCJcbiAgICB9KSwgeXQgPSAoZSkgPT4ge1xuICAgICAgZS5rZXlkb3duVGFyZ2V0ICYmIGUua2V5ZG93bkhhbmRsZXJBZGRlZCAmJiAoZS5rZXlkb3duVGFyZ2V0LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIGUua2V5ZG93bkhhbmRsZXIsIHtcbiAgICAgICAgY2FwdHVyZTogZS5rZXlkb3duTGlzdGVuZXJDYXB0dXJlXG4gICAgICB9KSwgZS5rZXlkb3duSGFuZGxlckFkZGVkID0gITEpO1xuICAgIH0sIFZuID0gKGUsIHQsIG4sIG8pID0+IHtcbiAgICAgIHl0KHQpLCBuLnRvYXN0IHx8ICh0LmtleWRvd25IYW5kbGVyID0gKGMpID0+IEhuKGUsIGMsIG8pLCB0LmtleWRvd25UYXJnZXQgPSBuLmtleWRvd25MaXN0ZW5lckNhcHR1cmUgPyB3aW5kb3cgOiBCKCksIHQua2V5ZG93bkxpc3RlbmVyQ2FwdHVyZSA9IG4ua2V5ZG93bkxpc3RlbmVyQ2FwdHVyZSwgdC5rZXlkb3duVGFyZ2V0LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIHQua2V5ZG93bkhhbmRsZXIsIHtcbiAgICAgICAgY2FwdHVyZTogdC5rZXlkb3duTGlzdGVuZXJDYXB0dXJlXG4gICAgICB9KSwgdC5rZXlkb3duSGFuZGxlckFkZGVkID0gITApO1xuICAgIH0sIHplID0gKGUsIHQpID0+IHtcbiAgICAgIGNvbnN0IG4gPSBhKCk7XG4gICAgICBpZiAobi5sZW5ndGgpIHtcbiAgICAgICAgZSA9IGUgKyB0LCBlID09PSBuLmxlbmd0aCA/IGUgPSAwIDogZSA9PT0gLTEgJiYgKGUgPSBuLmxlbmd0aCAtIDEpLCBuW2VdLmZvY3VzKCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIEIoKS5mb2N1cygpO1xuICAgIH0sIHZ0ID0gW1wiQXJyb3dSaWdodFwiLCBcIkFycm93RG93blwiXSwgam4gPSBbXCJBcnJvd0xlZnRcIiwgXCJBcnJvd1VwXCJdLCBIbiA9IChlLCB0LCBuKSA9PiB7XG4gICAgICBjb25zdCBvID0gZy5pbm5lclBhcmFtcy5nZXQoZSk7XG4gICAgICBvICYmICh0LmlzQ29tcG9zaW5nIHx8IHQua2V5Q29kZSA9PT0gMjI5IHx8IChvLnN0b3BLZXlkb3duUHJvcGFnYXRpb24gJiYgdC5zdG9wUHJvcGFnYXRpb24oKSwgdC5rZXkgPT09IFwiRW50ZXJcIiA/IHpuKGUsIHQsIG8pIDogdC5rZXkgPT09IFwiVGFiXCIgPyBLbih0KSA6IFsuLi52dCwgLi4uam5dLmluY2x1ZGVzKHQua2V5KSA/IFduKHQua2V5KSA6IHQua2V5ID09PSBcIkVzY2FwZVwiICYmIFFuKHQsIG8sIG4pKSk7XG4gICAgfSwgem4gPSAoZSwgdCwgbikgPT4ge1xuICAgICAgaWYgKFUobi5hbGxvd0VudGVyS2V5KSAmJiB0LnRhcmdldCAmJiBlLmdldElucHV0KCkgJiYgdC50YXJnZXQgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCAmJiB0LnRhcmdldC5vdXRlckhUTUwgPT09IGUuZ2V0SW5wdXQoKS5vdXRlckhUTUwpIHtcbiAgICAgICAgaWYgKFtcInRleHRhcmVhXCIsIFwiZmlsZVwiXS5pbmNsdWRlcyhuLmlucHV0KSlcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIGJ0KCksIHQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIH1cbiAgICB9LCBLbiA9IChlKSA9PiB7XG4gICAgICBjb25zdCB0ID0gZS50YXJnZXQsIG4gPSBhKCk7XG4gICAgICBsZXQgbyA9IC0xO1xuICAgICAgZm9yIChsZXQgYyA9IDA7IGMgPCBuLmxlbmd0aDsgYysrKVxuICAgICAgICBpZiAodCA9PT0gbltjXSkge1xuICAgICAgICAgIG8gPSBjO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICBlLnNoaWZ0S2V5ID8gemUobywgLTEpIDogemUobywgMSksIGUuc3RvcFByb3BhZ2F0aW9uKCksIGUucHJldmVudERlZmF1bHQoKTtcbiAgICB9LCBXbiA9IChlKSA9PiB7XG4gICAgICBjb25zdCB0ID0gcygpLCBuID0gdSgpLCBvID0gbCgpLCBjID0gW3QsIG4sIG9dO1xuICAgICAgaWYgKGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCAmJiAhYy5pbmNsdWRlcyhkb2N1bWVudC5hY3RpdmVFbGVtZW50KSlcbiAgICAgICAgcmV0dXJuO1xuICAgICAgY29uc3QgXyA9IHZ0LmluY2x1ZGVzKGUpID8gXCJuZXh0RWxlbWVudFNpYmxpbmdcIiA6IFwicHJldmlvdXNFbGVtZW50U2libGluZ1wiO1xuICAgICAgbGV0IE8gPSBkb2N1bWVudC5hY3RpdmVFbGVtZW50O1xuICAgICAgZm9yIChsZXQgUSA9IDA7IFEgPCBtKCkuY2hpbGRyZW4ubGVuZ3RoOyBRKyspIHtcbiAgICAgICAgaWYgKE8gPSBPW19dLCAhTylcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIGlmIChPIGluc3RhbmNlb2YgSFRNTEJ1dHRvbkVsZW1lbnQgJiYgVyhPKSlcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIE8gaW5zdGFuY2VvZiBIVE1MQnV0dG9uRWxlbWVudCAmJiBPLmZvY3VzKCk7XG4gICAgfSwgUW4gPSAoZSwgdCwgbikgPT4ge1xuICAgICAgVSh0LmFsbG93RXNjYXBlS2V5KSAmJiAoZS5wcmV2ZW50RGVmYXVsdCgpLCBuKHdlLmVzYykpO1xuICAgIH07XG4gICAgdmFyIFRlID0ge1xuICAgICAgc3dhbFByb21pc2VSZXNvbHZlOiAvKiBAX19QVVJFX18gKi8gbmV3IFdlYWtNYXAoKSxcbiAgICAgIHN3YWxQcm9taXNlUmVqZWN0OiAvKiBAX19QVVJFX18gKi8gbmV3IFdlYWtNYXAoKVxuICAgIH07XG4gICAgY29uc3QgR24gPSAoKSA9PiB7XG4gICAgICBBcnJheS5mcm9tKGRvY3VtZW50LmJvZHkuY2hpbGRyZW4pLmZvckVhY2goKHQpID0+IHtcbiAgICAgICAgdCA9PT0gUigpIHx8IHQuY29udGFpbnMoUigpKSB8fCAodC5oYXNBdHRyaWJ1dGUoXCJhcmlhLWhpZGRlblwiKSAmJiB0LnNldEF0dHJpYnV0ZShcImRhdGEtcHJldmlvdXMtYXJpYS1oaWRkZW5cIiwgdC5nZXRBdHRyaWJ1dGUoXCJhcmlhLWhpZGRlblwiKSksIHQuc2V0QXR0cmlidXRlKFwiYXJpYS1oaWRkZW5cIiwgXCJ0cnVlXCIpKTtcbiAgICAgIH0pO1xuICAgIH0sIF90ID0gKCkgPT4ge1xuICAgICAgQXJyYXkuZnJvbShkb2N1bWVudC5ib2R5LmNoaWxkcmVuKS5mb3JFYWNoKCh0KSA9PiB7XG4gICAgICAgIHQuaGFzQXR0cmlidXRlKFwiZGF0YS1wcmV2aW91cy1hcmlhLWhpZGRlblwiKSA/ICh0LnNldEF0dHJpYnV0ZShcImFyaWEtaGlkZGVuXCIsIHQuZ2V0QXR0cmlidXRlKFwiZGF0YS1wcmV2aW91cy1hcmlhLWhpZGRlblwiKSksIHQucmVtb3ZlQXR0cmlidXRlKFwiZGF0YS1wcmV2aW91cy1hcmlhLWhpZGRlblwiKSkgOiB0LnJlbW92ZUF0dHJpYnV0ZShcImFyaWEtaGlkZGVuXCIpO1xuICAgICAgfSk7XG4gICAgfSwgWW4gPSAoKSA9PiB7XG4gICAgICBpZiAoLy8gQHRzLWlnbm9yZVxuICAgICAgKC9pUGFkfGlQaG9uZXxpUG9kLy50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpICYmICF3aW5kb3cuTVNTdHJlYW0gfHwgbmF2aWdhdG9yLnBsYXRmb3JtID09PSBcIk1hY0ludGVsXCIgJiYgbmF2aWdhdG9yLm1heFRvdWNoUG9pbnRzID4gMSkgJiYgIXJlKGRvY3VtZW50LmJvZHksIHIuaW9zZml4KSkge1xuICAgICAgICBjb25zdCB0ID0gZG9jdW1lbnQuYm9keS5zY3JvbGxUb3A7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUudG9wID0gYCR7dCAqIC0xfXB4YCwgTShkb2N1bWVudC5ib2R5LCByLmlvc2ZpeCksIFpuKCksIEpuKCk7XG4gICAgICB9XG4gICAgfSwgSm4gPSAoKSA9PiB7XG4gICAgICBjb25zdCBlID0gbmF2aWdhdG9yLnVzZXJBZ2VudCwgdCA9ICEhZS5tYXRjaCgvaVBhZC9pKSB8fCAhIWUubWF0Y2goL2lQaG9uZS9pKSwgbiA9ICEhZS5tYXRjaCgvV2ViS2l0L2kpO1xuICAgICAgdCAmJiBuICYmICFlLm1hdGNoKC9DcmlPUy9pKSAmJiBCKCkuc2Nyb2xsSGVpZ2h0ID4gd2luZG93LmlubmVySGVpZ2h0IC0gNDQgJiYgKFIoKS5zdHlsZS5wYWRkaW5nQm90dG9tID0gXCI0NHB4XCIpO1xuICAgIH0sIFpuID0gKCkgPT4ge1xuICAgICAgY29uc3QgZSA9IFIoKTtcbiAgICAgIGxldCB0O1xuICAgICAgZS5vbnRvdWNoc3RhcnQgPSAobikgPT4ge1xuICAgICAgICB0ID0gWG4obik7XG4gICAgICB9LCBlLm9udG91Y2htb3ZlID0gKG4pID0+IHtcbiAgICAgICAgdCAmJiAobi5wcmV2ZW50RGVmYXVsdCgpLCBuLnN0b3BQcm9wYWdhdGlvbigpKTtcbiAgICAgIH07XG4gICAgfSwgWG4gPSAoZSkgPT4ge1xuICAgICAgY29uc3QgdCA9IGUudGFyZ2V0LCBuID0gUigpO1xuICAgICAgcmV0dXJuIGVvKGUpIHx8IHRvKGUpID8gITEgOiB0ID09PSBuIHx8ICFjdChuKSAmJiB0IGluc3RhbmNlb2YgSFRNTEVsZW1lbnQgJiYgdC50YWdOYW1lICE9PSBcIklOUFVUXCIgJiYgLy8gIzE2MDNcbiAgICAgIHQudGFnTmFtZSAhPT0gXCJURVhUQVJFQVwiICYmIC8vICMyMjY2XG4gICAgICAhKGN0KGIoKSkgJiYgLy8gIzE5NDRcbiAgICAgIGIoKS5jb250YWlucyh0KSk7XG4gICAgfSwgZW8gPSAoZSkgPT4gZS50b3VjaGVzICYmIGUudG91Y2hlcy5sZW5ndGggJiYgZS50b3VjaGVzWzBdLnRvdWNoVHlwZSA9PT0gXCJzdHlsdXNcIiwgdG8gPSAoZSkgPT4gZS50b3VjaGVzICYmIGUudG91Y2hlcy5sZW5ndGggPiAxLCBubyA9ICgpID0+IHtcbiAgICAgIGlmIChyZShkb2N1bWVudC5ib2R5LCByLmlvc2ZpeCkpIHtcbiAgICAgICAgY29uc3QgZSA9IHBhcnNlSW50KGRvY3VtZW50LmJvZHkuc3R5bGUudG9wLCAxMCk7XG4gICAgICAgIG5lKGRvY3VtZW50LmJvZHksIHIuaW9zZml4KSwgZG9jdW1lbnQuYm9keS5zdHlsZS50b3AgPSBcIlwiLCBkb2N1bWVudC5ib2R5LnNjcm9sbFRvcCA9IGUgKiAtMTtcbiAgICAgIH1cbiAgICB9LCBvbyA9ICgpID0+IHtcbiAgICAgIFAucHJldmlvdXNCb2R5UGFkZGluZyA9PT0gbnVsbCAmJiBkb2N1bWVudC5ib2R5LnNjcm9sbEhlaWdodCA+IHdpbmRvdy5pbm5lckhlaWdodCAmJiAoUC5wcmV2aW91c0JvZHlQYWRkaW5nID0gcGFyc2VJbnQod2luZG93LmdldENvbXB1dGVkU3R5bGUoZG9jdW1lbnQuYm9keSkuZ2V0UHJvcGVydHlWYWx1ZShcInBhZGRpbmctcmlnaHRcIikpLCBkb2N1bWVudC5ib2R5LnN0eWxlLnBhZGRpbmdSaWdodCA9IGAke1AucHJldmlvdXNCb2R5UGFkZGluZyArIGxuKCl9cHhgKTtcbiAgICB9LCBzbyA9ICgpID0+IHtcbiAgICAgIFAucHJldmlvdXNCb2R5UGFkZGluZyAhPT0gbnVsbCAmJiAoZG9jdW1lbnQuYm9keS5zdHlsZS5wYWRkaW5nUmlnaHQgPSBgJHtQLnByZXZpb3VzQm9keVBhZGRpbmd9cHhgLCBQLnByZXZpb3VzQm9keVBhZGRpbmcgPSBudWxsKTtcbiAgICB9O1xuICAgIGZ1bmN0aW9uIEV0KGUsIHQsIG4sIG8pIHtcbiAgICAgIHgoKSA/IEN0KGUsIG8pIDogKEp0KG4pLnRoZW4oKCkgPT4gQ3QoZSwgbykpLCB5dChBKSksIC9eKCg/IWNocm9tZXxhbmRyb2lkKS4pKnNhZmFyaS9pLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCkgPyAodC5zZXRBdHRyaWJ1dGUoXCJzdHlsZVwiLCBcImRpc3BsYXk6bm9uZSAhaW1wb3J0YW50XCIpLCB0LnJlbW92ZUF0dHJpYnV0ZShcImNsYXNzXCIpLCB0LmlubmVySFRNTCA9IFwiXCIpIDogdC5yZW1vdmUoKSwgSSgpICYmIChzbygpLCBubygpLCBfdCgpKSwgaW8oKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gaW8oKSB7XG4gICAgICBuZShbZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LCBkb2N1bWVudC5ib2R5XSwgW3Iuc2hvd24sIHJbXCJoZWlnaHQtYXV0b1wiXSwgcltcIm5vLWJhY2tkcm9wXCJdLCByW1widG9hc3Qtc2hvd25cIl1dKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gTmUoZSkge1xuICAgICAgZSA9IGNvKGUpO1xuICAgICAgY29uc3QgdCA9IFRlLnN3YWxQcm9taXNlUmVzb2x2ZS5nZXQodGhpcyksIG4gPSBhbyh0aGlzKTtcbiAgICAgIHRoaXMuaXNBd2FpdGluZ1Byb21pc2UoKSA/IGUuaXNEaXNtaXNzZWQgfHwgKFNlKHRoaXMpLCB0KGUpKSA6IG4gJiYgdChlKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gcm8oKSB7XG4gICAgICByZXR1cm4gISFnLmF3YWl0aW5nUHJvbWlzZS5nZXQodGhpcyk7XG4gICAgfVxuICAgIGNvbnN0IGFvID0gKGUpID0+IHtcbiAgICAgIGNvbnN0IHQgPSBCKCk7XG4gICAgICBpZiAoIXQpXG4gICAgICAgIHJldHVybiAhMTtcbiAgICAgIGNvbnN0IG4gPSBnLmlubmVyUGFyYW1zLmdldChlKTtcbiAgICAgIGlmICghbiB8fCByZSh0LCBuLmhpZGVDbGFzcy5wb3B1cCkpXG4gICAgICAgIHJldHVybiAhMTtcbiAgICAgIG5lKHQsIG4uc2hvd0NsYXNzLnBvcHVwKSwgTSh0LCBuLmhpZGVDbGFzcy5wb3B1cCk7XG4gICAgICBjb25zdCBvID0gUigpO1xuICAgICAgcmV0dXJuIG5lKG8sIG4uc2hvd0NsYXNzLmJhY2tkcm9wKSwgTShvLCBuLmhpZGVDbGFzcy5iYWNrZHJvcCksIHVvKGUsIHQsIG4pLCAhMDtcbiAgICB9O1xuICAgIGZ1bmN0aW9uIGxvKGUpIHtcbiAgICAgIGNvbnN0IHQgPSBUZS5zd2FsUHJvbWlzZVJlamVjdC5nZXQodGhpcyk7XG4gICAgICBTZSh0aGlzKSwgdCAmJiB0KGUpO1xuICAgIH1cbiAgICBjb25zdCBTZSA9IChlKSA9PiB7XG4gICAgICBlLmlzQXdhaXRpbmdQcm9taXNlKCkgJiYgKGcuYXdhaXRpbmdQcm9taXNlLmRlbGV0ZShlKSwgZy5pbm5lclBhcmFtcy5nZXQoZSkgfHwgZS5fZGVzdHJveSgpKTtcbiAgICB9LCBjbyA9IChlKSA9PiB0eXBlb2YgZSA+IFwidVwiID8ge1xuICAgICAgaXNDb25maXJtZWQ6ICExLFxuICAgICAgaXNEZW5pZWQ6ICExLFxuICAgICAgaXNEaXNtaXNzZWQ6ICEwXG4gICAgfSA6IE9iamVjdC5hc3NpZ24oe1xuICAgICAgaXNDb25maXJtZWQ6ICExLFxuICAgICAgaXNEZW5pZWQ6ICExLFxuICAgICAgaXNEaXNtaXNzZWQ6ICExXG4gICAgfSwgZSksIHVvID0gKGUsIHQsIG4pID0+IHtcbiAgICAgIGNvbnN0IG8gPSBSKCksIGMgPSBJZSAmJiB1dCh0KTtcbiAgICAgIHR5cGVvZiBuLndpbGxDbG9zZSA9PSBcImZ1bmN0aW9uXCIgJiYgbi53aWxsQ2xvc2UodCksIGMgPyBmbyhlLCB0LCBvLCBuLnJldHVybkZvY3VzLCBuLmRpZENsb3NlKSA6IEV0KGUsIG8sIG4ucmV0dXJuRm9jdXMsIG4uZGlkQ2xvc2UpO1xuICAgIH0sIGZvID0gKGUsIHQsIG4sIG8sIGMpID0+IHtcbiAgICAgIEEuc3dhbENsb3NlRXZlbnRGaW5pc2hlZENhbGxiYWNrID0gRXQuYmluZChudWxsLCBlLCBuLCBvLCBjKSwgdC5hZGRFdmVudExpc3RlbmVyKEllLCBmdW5jdGlvbihfKSB7XG4gICAgICAgIF8udGFyZ2V0ID09PSB0ICYmIChBLnN3YWxDbG9zZUV2ZW50RmluaXNoZWRDYWxsYmFjaygpLCBkZWxldGUgQS5zd2FsQ2xvc2VFdmVudEZpbmlzaGVkQ2FsbGJhY2spO1xuICAgICAgfSk7XG4gICAgfSwgQ3QgPSAoZSwgdCkgPT4ge1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHR5cGVvZiB0ID09IFwiZnVuY3Rpb25cIiAmJiB0LmJpbmQoZS5wYXJhbXMpKCksIGUuX2Rlc3Ryb3koKTtcbiAgICAgIH0pO1xuICAgIH07XG4gICAgZnVuY3Rpb24geHQoZSwgdCwgbikge1xuICAgICAgY29uc3QgbyA9IGcuZG9tQ2FjaGUuZ2V0KGUpO1xuICAgICAgdC5mb3JFYWNoKChjKSA9PiB7XG4gICAgICAgIG9bY10uZGlzYWJsZWQgPSBuO1xuICAgICAgfSk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIEF0KGUsIHQpIHtcbiAgICAgIGlmIChlKVxuICAgICAgICBpZiAoZS50eXBlID09PSBcInJhZGlvXCIpIHtcbiAgICAgICAgICBjb25zdCBvID0gZS5wYXJlbnROb2RlLnBhcmVudE5vZGUucXVlcnlTZWxlY3RvckFsbChcImlucHV0XCIpO1xuICAgICAgICAgIGZvciAobGV0IGMgPSAwOyBjIDwgby5sZW5ndGg7IGMrKylcbiAgICAgICAgICAgIG9bY10uZGlzYWJsZWQgPSB0O1xuICAgICAgICB9IGVsc2VcbiAgICAgICAgICBlLmRpc2FibGVkID0gdDtcbiAgICB9XG4gICAgZnVuY3Rpb24gaG8oKSB7XG4gICAgICB4dCh0aGlzLCBbXCJjb25maXJtQnV0dG9uXCIsIFwiZGVueUJ1dHRvblwiLCBcImNhbmNlbEJ1dHRvblwiXSwgITEpO1xuICAgIH1cbiAgICBmdW5jdGlvbiBwbygpIHtcbiAgICAgIHh0KHRoaXMsIFtcImNvbmZpcm1CdXR0b25cIiwgXCJkZW55QnV0dG9uXCIsIFwiY2FuY2VsQnV0dG9uXCJdLCAhMCk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGdvKCkge1xuICAgICAgQXQodGhpcy5nZXRJbnB1dCgpLCAhMSk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIG1vKCkge1xuICAgICAgQXQodGhpcy5nZXRJbnB1dCgpLCAhMCk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIHdvKGUpIHtcbiAgICAgIGNvbnN0IHQgPSBnLmRvbUNhY2hlLmdldCh0aGlzKSwgbiA9IGcuaW5uZXJQYXJhbXMuZ2V0KHRoaXMpO1xuICAgICAgVih0LnZhbGlkYXRpb25NZXNzYWdlLCBlKSwgdC52YWxpZGF0aW9uTWVzc2FnZS5jbGFzc05hbWUgPSByW1widmFsaWRhdGlvbi1tZXNzYWdlXCJdLCBuLmN1c3RvbUNsYXNzICYmIG4uY3VzdG9tQ2xhc3MudmFsaWRhdGlvbk1lc3NhZ2UgJiYgTSh0LnZhbGlkYXRpb25NZXNzYWdlLCBuLmN1c3RvbUNsYXNzLnZhbGlkYXRpb25NZXNzYWdlKSwgRCh0LnZhbGlkYXRpb25NZXNzYWdlKTtcbiAgICAgIGNvbnN0IG8gPSB0aGlzLmdldElucHV0KCk7XG4gICAgICBvICYmIChvLnNldEF0dHJpYnV0ZShcImFyaWEtaW52YWxpZFwiLCAhMCksIG8uc2V0QXR0cmlidXRlKFwiYXJpYS1kZXNjcmliZWRieVwiLCByW1widmFsaWRhdGlvbi1tZXNzYWdlXCJdKSwgcnQobyksIE0obywgci5pbnB1dGVycm9yKSk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGJvKCkge1xuICAgICAgY29uc3QgZSA9IGcuZG9tQ2FjaGUuZ2V0KHRoaXMpO1xuICAgICAgZS52YWxpZGF0aW9uTWVzc2FnZSAmJiBGKGUudmFsaWRhdGlvbk1lc3NhZ2UpO1xuICAgICAgY29uc3QgdCA9IHRoaXMuZ2V0SW5wdXQoKTtcbiAgICAgIHQgJiYgKHQucmVtb3ZlQXR0cmlidXRlKFwiYXJpYS1pbnZhbGlkXCIpLCB0LnJlbW92ZUF0dHJpYnV0ZShcImFyaWEtZGVzY3JpYmVkYnlcIiksIG5lKHQsIHIuaW5wdXRlcnJvcikpO1xuICAgIH1cbiAgICBjb25zdCBiZSA9IHtcbiAgICAgIHRpdGxlOiBcIlwiLFxuICAgICAgdGl0bGVUZXh0OiBcIlwiLFxuICAgICAgdGV4dDogXCJcIixcbiAgICAgIGh0bWw6IFwiXCIsXG4gICAgICBmb290ZXI6IFwiXCIsXG4gICAgICBpY29uOiB2b2lkIDAsXG4gICAgICBpY29uQ29sb3I6IHZvaWQgMCxcbiAgICAgIGljb25IdG1sOiB2b2lkIDAsXG4gICAgICB0ZW1wbGF0ZTogdm9pZCAwLFxuICAgICAgdG9hc3Q6ICExLFxuICAgICAgc2hvd0NsYXNzOiB7XG4gICAgICAgIHBvcHVwOiBcInN3YWwyLXNob3dcIixcbiAgICAgICAgYmFja2Ryb3A6IFwic3dhbDItYmFja2Ryb3Atc2hvd1wiLFxuICAgICAgICBpY29uOiBcInN3YWwyLWljb24tc2hvd1wiXG4gICAgICB9LFxuICAgICAgaGlkZUNsYXNzOiB7XG4gICAgICAgIHBvcHVwOiBcInN3YWwyLWhpZGVcIixcbiAgICAgICAgYmFja2Ryb3A6IFwic3dhbDItYmFja2Ryb3AtaGlkZVwiLFxuICAgICAgICBpY29uOiBcInN3YWwyLWljb24taGlkZVwiXG4gICAgICB9LFxuICAgICAgY3VzdG9tQ2xhc3M6IHt9LFxuICAgICAgdGFyZ2V0OiBcImJvZHlcIixcbiAgICAgIGNvbG9yOiB2b2lkIDAsXG4gICAgICBiYWNrZHJvcDogITAsXG4gICAgICBoZWlnaHRBdXRvOiAhMCxcbiAgICAgIGFsbG93T3V0c2lkZUNsaWNrOiAhMCxcbiAgICAgIGFsbG93RXNjYXBlS2V5OiAhMCxcbiAgICAgIGFsbG93RW50ZXJLZXk6ICEwLFxuICAgICAgc3RvcEtleWRvd25Qcm9wYWdhdGlvbjogITAsXG4gICAgICBrZXlkb3duTGlzdGVuZXJDYXB0dXJlOiAhMSxcbiAgICAgIHNob3dDb25maXJtQnV0dG9uOiAhMCxcbiAgICAgIHNob3dEZW55QnV0dG9uOiAhMSxcbiAgICAgIHNob3dDYW5jZWxCdXR0b246ICExLFxuICAgICAgcHJlQ29uZmlybTogdm9pZCAwLFxuICAgICAgcHJlRGVueTogdm9pZCAwLFxuICAgICAgY29uZmlybUJ1dHRvblRleHQ6IFwiT0tcIixcbiAgICAgIGNvbmZpcm1CdXR0b25BcmlhTGFiZWw6IFwiXCIsXG4gICAgICBjb25maXJtQnV0dG9uQ29sb3I6IHZvaWQgMCxcbiAgICAgIGRlbnlCdXR0b25UZXh0OiBcIk5vXCIsXG4gICAgICBkZW55QnV0dG9uQXJpYUxhYmVsOiBcIlwiLFxuICAgICAgZGVueUJ1dHRvbkNvbG9yOiB2b2lkIDAsXG4gICAgICBjYW5jZWxCdXR0b25UZXh0OiBcIkNhbmNlbFwiLFxuICAgICAgY2FuY2VsQnV0dG9uQXJpYUxhYmVsOiBcIlwiLFxuICAgICAgY2FuY2VsQnV0dG9uQ29sb3I6IHZvaWQgMCxcbiAgICAgIGJ1dHRvbnNTdHlsaW5nOiAhMCxcbiAgICAgIHJldmVyc2VCdXR0b25zOiAhMSxcbiAgICAgIGZvY3VzQ29uZmlybTogITAsXG4gICAgICBmb2N1c0Rlbnk6ICExLFxuICAgICAgZm9jdXNDYW5jZWw6ICExLFxuICAgICAgcmV0dXJuRm9jdXM6ICEwLFxuICAgICAgc2hvd0Nsb3NlQnV0dG9uOiAhMSxcbiAgICAgIGNsb3NlQnV0dG9uSHRtbDogXCImdGltZXM7XCIsXG4gICAgICBjbG9zZUJ1dHRvbkFyaWFMYWJlbDogXCJDbG9zZSB0aGlzIGRpYWxvZ1wiLFxuICAgICAgbG9hZGVySHRtbDogXCJcIixcbiAgICAgIHNob3dMb2FkZXJPbkNvbmZpcm06ICExLFxuICAgICAgc2hvd0xvYWRlck9uRGVueTogITEsXG4gICAgICBpbWFnZVVybDogdm9pZCAwLFxuICAgICAgaW1hZ2VXaWR0aDogdm9pZCAwLFxuICAgICAgaW1hZ2VIZWlnaHQ6IHZvaWQgMCxcbiAgICAgIGltYWdlQWx0OiBcIlwiLFxuICAgICAgdGltZXI6IHZvaWQgMCxcbiAgICAgIHRpbWVyUHJvZ3Jlc3NCYXI6ICExLFxuICAgICAgd2lkdGg6IHZvaWQgMCxcbiAgICAgIHBhZGRpbmc6IHZvaWQgMCxcbiAgICAgIGJhY2tncm91bmQ6IHZvaWQgMCxcbiAgICAgIGlucHV0OiB2b2lkIDAsXG4gICAgICBpbnB1dFBsYWNlaG9sZGVyOiBcIlwiLFxuICAgICAgaW5wdXRMYWJlbDogXCJcIixcbiAgICAgIGlucHV0VmFsdWU6IFwiXCIsXG4gICAgICBpbnB1dE9wdGlvbnM6IHt9LFxuICAgICAgaW5wdXRBdXRvRm9jdXM6ICEwLFxuICAgICAgaW5wdXRBdXRvVHJpbTogITAsXG4gICAgICBpbnB1dEF0dHJpYnV0ZXM6IHt9LFxuICAgICAgaW5wdXRWYWxpZGF0b3I6IHZvaWQgMCxcbiAgICAgIHJldHVybklucHV0VmFsdWVPbkRlbnk6ICExLFxuICAgICAgdmFsaWRhdGlvbk1lc3NhZ2U6IHZvaWQgMCxcbiAgICAgIGdyb3c6ICExLFxuICAgICAgcG9zaXRpb246IFwiY2VudGVyXCIsXG4gICAgICBwcm9ncmVzc1N0ZXBzOiBbXSxcbiAgICAgIGN1cnJlbnRQcm9ncmVzc1N0ZXA6IHZvaWQgMCxcbiAgICAgIHByb2dyZXNzU3RlcHNEaXN0YW5jZTogdm9pZCAwLFxuICAgICAgd2lsbE9wZW46IHZvaWQgMCxcbiAgICAgIGRpZE9wZW46IHZvaWQgMCxcbiAgICAgIGRpZFJlbmRlcjogdm9pZCAwLFxuICAgICAgd2lsbENsb3NlOiB2b2lkIDAsXG4gICAgICBkaWRDbG9zZTogdm9pZCAwLFxuICAgICAgZGlkRGVzdHJveTogdm9pZCAwLFxuICAgICAgc2Nyb2xsYmFyUGFkZGluZzogITBcbiAgICB9LCB5byA9IFtcImFsbG93RXNjYXBlS2V5XCIsIFwiYWxsb3dPdXRzaWRlQ2xpY2tcIiwgXCJiYWNrZ3JvdW5kXCIsIFwiYnV0dG9uc1N0eWxpbmdcIiwgXCJjYW5jZWxCdXR0b25BcmlhTGFiZWxcIiwgXCJjYW5jZWxCdXR0b25Db2xvclwiLCBcImNhbmNlbEJ1dHRvblRleHRcIiwgXCJjbG9zZUJ1dHRvbkFyaWFMYWJlbFwiLCBcImNsb3NlQnV0dG9uSHRtbFwiLCBcImNvbG9yXCIsIFwiY29uZmlybUJ1dHRvbkFyaWFMYWJlbFwiLCBcImNvbmZpcm1CdXR0b25Db2xvclwiLCBcImNvbmZpcm1CdXR0b25UZXh0XCIsIFwiY3VycmVudFByb2dyZXNzU3RlcFwiLCBcImN1c3RvbUNsYXNzXCIsIFwiZGVueUJ1dHRvbkFyaWFMYWJlbFwiLCBcImRlbnlCdXR0b25Db2xvclwiLCBcImRlbnlCdXR0b25UZXh0XCIsIFwiZGlkQ2xvc2VcIiwgXCJkaWREZXN0cm95XCIsIFwiZm9vdGVyXCIsIFwiaGlkZUNsYXNzXCIsIFwiaHRtbFwiLCBcImljb25cIiwgXCJpY29uQ29sb3JcIiwgXCJpY29uSHRtbFwiLCBcImltYWdlQWx0XCIsIFwiaW1hZ2VIZWlnaHRcIiwgXCJpbWFnZVVybFwiLCBcImltYWdlV2lkdGhcIiwgXCJwcmVDb25maXJtXCIsIFwicHJlRGVueVwiLCBcInByb2dyZXNzU3RlcHNcIiwgXCJyZXR1cm5Gb2N1c1wiLCBcInJldmVyc2VCdXR0b25zXCIsIFwic2hvd0NhbmNlbEJ1dHRvblwiLCBcInNob3dDbG9zZUJ1dHRvblwiLCBcInNob3dDb25maXJtQnV0dG9uXCIsIFwic2hvd0RlbnlCdXR0b25cIiwgXCJ0ZXh0XCIsIFwidGl0bGVcIiwgXCJ0aXRsZVRleHRcIiwgXCJ3aWxsQ2xvc2VcIl0sIHZvID0ge30sIF9vID0gW1wiYWxsb3dPdXRzaWRlQ2xpY2tcIiwgXCJhbGxvd0VudGVyS2V5XCIsIFwiYmFja2Ryb3BcIiwgXCJmb2N1c0NvbmZpcm1cIiwgXCJmb2N1c0RlbnlcIiwgXCJmb2N1c0NhbmNlbFwiLCBcInJldHVybkZvY3VzXCIsIFwiaGVpZ2h0QXV0b1wiLCBcImtleWRvd25MaXN0ZW5lckNhcHR1cmVcIl0sIEl0ID0gKGUpID0+IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChiZSwgZSksIGt0ID0gKGUpID0+IHlvLmluZGV4T2YoZSkgIT09IC0xLCBLZSA9IChlKSA9PiB2b1tlXSwgRW8gPSAoZSkgPT4ge1xuICAgICAgSXQoZSkgfHwgZihgVW5rbm93biBwYXJhbWV0ZXIgXCIke2V9XCJgKTtcbiAgICB9LCBDbyA9IChlKSA9PiB7XG4gICAgICBfby5pbmNsdWRlcyhlKSAmJiBmKGBUaGUgcGFyYW1ldGVyIFwiJHtlfVwiIGlzIGluY29tcGF0aWJsZSB3aXRoIHRvYXN0c2ApO1xuICAgIH0sIHhvID0gKGUpID0+IHtcbiAgICAgIEtlKGUpICYmIHhlKGUsIEtlKGUpKTtcbiAgICB9LCBBbyA9IChlKSA9PiB7XG4gICAgICBlLmJhY2tkcm9wID09PSAhMSAmJiBlLmFsbG93T3V0c2lkZUNsaWNrICYmIGYoJ1wiYWxsb3dPdXRzaWRlQ2xpY2tcIiBwYXJhbWV0ZXIgcmVxdWlyZXMgYGJhY2tkcm9wYCBwYXJhbWV0ZXIgdG8gYmUgc2V0IHRvIGB0cnVlYCcpO1xuICAgICAgZm9yIChjb25zdCB0IGluIGUpXG4gICAgICAgIEVvKHQpLCBlLnRvYXN0ICYmIENvKHQpLCB4byh0KTtcbiAgICB9O1xuICAgIGZ1bmN0aW9uIElvKGUpIHtcbiAgICAgIGNvbnN0IHQgPSBCKCksIG4gPSBnLmlubmVyUGFyYW1zLmdldCh0aGlzKTtcbiAgICAgIGlmICghdCB8fCByZSh0LCBuLmhpZGVDbGFzcy5wb3B1cCkpIHtcbiAgICAgICAgZihcIllvdSdyZSB0cnlpbmcgdG8gdXBkYXRlIHRoZSBjbG9zZWQgb3IgY2xvc2luZyBwb3B1cCwgdGhhdCB3b24ndCB3b3JrLiBVc2UgdGhlIHVwZGF0ZSgpIG1ldGhvZCBpbiBwcmVDb25maXJtIHBhcmFtZXRlciBvciBzaG93IGEgbmV3IHBvcHVwLlwiKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgY29uc3QgbyA9IGtvKGUpLCBjID0gT2JqZWN0LmFzc2lnbih7fSwgbiwgbyk7XG4gICAgICBtdCh0aGlzLCBjKSwgZy5pbm5lclBhcmFtcy5zZXQodGhpcywgYyksIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKHRoaXMsIHtcbiAgICAgICAgcGFyYW1zOiB7XG4gICAgICAgICAgdmFsdWU6IE9iamVjdC5hc3NpZ24oe30sIHRoaXMucGFyYW1zLCBlKSxcbiAgICAgICAgICB3cml0YWJsZTogITEsXG4gICAgICAgICAgZW51bWVyYWJsZTogITBcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICAgIGNvbnN0IGtvID0gKGUpID0+IHtcbiAgICAgIGNvbnN0IHQgPSB7fTtcbiAgICAgIHJldHVybiBPYmplY3Qua2V5cyhlKS5mb3JFYWNoKChuKSA9PiB7XG4gICAgICAgIGt0KG4pID8gdFtuXSA9IGVbbl0gOiBmKGBJbnZhbGlkIHBhcmFtZXRlciB0byB1cGRhdGU6ICR7bn1gKTtcbiAgICAgIH0pLCB0O1xuICAgIH07XG4gICAgZnVuY3Rpb24gVG8oKSB7XG4gICAgICBjb25zdCBlID0gZy5kb21DYWNoZS5nZXQodGhpcyksIHQgPSBnLmlubmVyUGFyYW1zLmdldCh0aGlzKTtcbiAgICAgIGlmICghdCkge1xuICAgICAgICBUdCh0aGlzKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgZS5wb3B1cCAmJiBBLnN3YWxDbG9zZUV2ZW50RmluaXNoZWRDYWxsYmFjayAmJiAoQS5zd2FsQ2xvc2VFdmVudEZpbmlzaGVkQ2FsbGJhY2soKSwgZGVsZXRlIEEuc3dhbENsb3NlRXZlbnRGaW5pc2hlZENhbGxiYWNrKSwgdHlwZW9mIHQuZGlkRGVzdHJveSA9PSBcImZ1bmN0aW9uXCIgJiYgdC5kaWREZXN0cm95KCksIFNvKHRoaXMpO1xuICAgIH1cbiAgICBjb25zdCBTbyA9IChlKSA9PiB7XG4gICAgICBUdChlKSwgZGVsZXRlIGUucGFyYW1zLCBkZWxldGUgQS5rZXlkb3duSGFuZGxlciwgZGVsZXRlIEEua2V5ZG93blRhcmdldCwgZGVsZXRlIEEuY3VycmVudEluc3RhbmNlO1xuICAgIH0sIFR0ID0gKGUpID0+IHtcbiAgICAgIGUuaXNBd2FpdGluZ1Byb21pc2UoKSA/IChXZShnLCBlKSwgZy5hd2FpdGluZ1Byb21pc2Uuc2V0KGUsICEwKSkgOiAoV2UoVGUsIGUpLCBXZShnLCBlKSk7XG4gICAgfSwgV2UgPSAoZSwgdCkgPT4ge1xuICAgICAgZm9yIChjb25zdCBuIGluIGUpXG4gICAgICAgIGVbbl0uZGVsZXRlKHQpO1xuICAgIH07XG4gICAgdmFyIFN0ID0gLyogQF9fUFVSRV9fICovIE9iamVjdC5mcmVlemUoe1xuICAgICAgX19wcm90b19fOiBudWxsLFxuICAgICAgX2Rlc3Ryb3k6IFRvLFxuICAgICAgY2xvc2U6IE5lLFxuICAgICAgY2xvc2VNb2RhbDogTmUsXG4gICAgICBjbG9zZVBvcHVwOiBOZSxcbiAgICAgIGNsb3NlVG9hc3Q6IE5lLFxuICAgICAgZGlzYWJsZUJ1dHRvbnM6IHBvLFxuICAgICAgZGlzYWJsZUlucHV0OiBtbyxcbiAgICAgIGRpc2FibGVMb2FkaW5nOiB3dCxcbiAgICAgIGVuYWJsZUJ1dHRvbnM6IGhvLFxuICAgICAgZW5hYmxlSW5wdXQ6IGdvLFxuICAgICAgZ2V0SW5wdXQ6IFVuLFxuICAgICAgaGFuZGxlQXdhaXRpbmdQcm9taXNlOiBTZSxcbiAgICAgIGhpZGVMb2FkaW5nOiB3dCxcbiAgICAgIGlzQXdhaXRpbmdQcm9taXNlOiBybyxcbiAgICAgIHJlamVjdFByb21pc2U6IGxvLFxuICAgICAgcmVzZXRWYWxpZGF0aW9uTWVzc2FnZTogYm8sXG4gICAgICBzaG93VmFsaWRhdGlvbk1lc3NhZ2U6IHdvLFxuICAgICAgdXBkYXRlOiBJb1xuICAgIH0pO1xuICAgIGNvbnN0IHllID0gKGUpID0+IHtcbiAgICAgIGxldCB0ID0gQigpO1xuICAgICAgdCB8fCBuZXcgcWUoKSwgdCA9IEIoKTtcbiAgICAgIGNvbnN0IG4gPSBkKCk7XG4gICAgICB4KCkgPyBGKGNlKCkpIDogUG8odCwgZSksIEQobiksIHQuc2V0QXR0cmlidXRlKFwiZGF0YS1sb2FkaW5nXCIsIFwidHJ1ZVwiKSwgdC5zZXRBdHRyaWJ1dGUoXCJhcmlhLWJ1c3lcIiwgXCJ0cnVlXCIpLCB0LmZvY3VzKCk7XG4gICAgfSwgUG8gPSAoZSwgdCkgPT4ge1xuICAgICAgY29uc3QgbiA9IG0oKSwgbyA9IGQoKTtcbiAgICAgICF0ICYmIFcocygpKSAmJiAodCA9IHMoKSksIEQobiksIHQgJiYgKEYodCksIG8uc2V0QXR0cmlidXRlKFwiZGF0YS1idXR0b24tdG8tcmVwbGFjZVwiLCB0LmNsYXNzTmFtZSkpLCBvLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKG8sIHQpLCBNKFtlLCBuXSwgci5sb2FkaW5nKTtcbiAgICB9LCBNbyA9IChlLCB0KSA9PiB7XG4gICAgICB0LmlucHV0ID09PSBcInNlbGVjdFwiIHx8IHQuaW5wdXQgPT09IFwicmFkaW9cIiA/IHFvKGUsIHQpIDogW1widGV4dFwiLCBcImVtYWlsXCIsIFwibnVtYmVyXCIsIFwidGVsXCIsIFwidGV4dGFyZWFcIl0uaW5jbHVkZXModC5pbnB1dCkgJiYgKEFlKHQuaW5wdXRWYWx1ZSkgfHwgWih0LmlucHV0VmFsdWUpKSAmJiAoeWUocygpKSwgUm8oZSwgdCkpO1xuICAgIH0sIEJvID0gKGUsIHQpID0+IHtcbiAgICAgIGNvbnN0IG4gPSBlLmdldElucHV0KCk7XG4gICAgICBpZiAoIW4pXG4gICAgICAgIHJldHVybiBudWxsO1xuICAgICAgc3dpdGNoICh0LmlucHV0KSB7XG4gICAgICAgIGNhc2UgXCJjaGVja2JveFwiOlxuICAgICAgICAgIHJldHVybiBMbyhuKTtcbiAgICAgICAgY2FzZSBcInJhZGlvXCI6XG4gICAgICAgICAgcmV0dXJuIE5vKG4pO1xuICAgICAgICBjYXNlIFwiZmlsZVwiOlxuICAgICAgICAgIHJldHVybiBPbyhuKTtcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICByZXR1cm4gdC5pbnB1dEF1dG9UcmltID8gbi52YWx1ZS50cmltKCkgOiBuLnZhbHVlO1xuICAgICAgfVxuICAgIH0sIExvID0gKGUpID0+IGUuY2hlY2tlZCA/IDEgOiAwLCBObyA9IChlKSA9PiBlLmNoZWNrZWQgPyBlLnZhbHVlIDogbnVsbCwgT28gPSAoZSkgPT4gZS5maWxlcy5sZW5ndGggPyBlLmdldEF0dHJpYnV0ZShcIm11bHRpcGxlXCIpICE9PSBudWxsID8gZS5maWxlcyA6IGUuZmlsZXNbMF0gOiBudWxsLCBxbyA9IChlLCB0KSA9PiB7XG4gICAgICBjb25zdCBuID0gQigpLCBvID0gKGMpID0+IHtcbiAgICAgICAgVW9bdC5pbnB1dF0obiwgUWUoYyksIHQpO1xuICAgICAgfTtcbiAgICAgIEFlKHQuaW5wdXRPcHRpb25zKSB8fCBaKHQuaW5wdXRPcHRpb25zKSA/ICh5ZShzKCkpLCB0ZSh0LmlucHV0T3B0aW9ucykudGhlbigoYykgPT4ge1xuICAgICAgICBlLmhpZGVMb2FkaW5nKCksIG8oYyk7XG4gICAgICB9KSkgOiB0eXBlb2YgdC5pbnB1dE9wdGlvbnMgPT0gXCJvYmplY3RcIiA/IG8odC5pbnB1dE9wdGlvbnMpIDogaWUoYFVuZXhwZWN0ZWQgdHlwZSBvZiBpbnB1dE9wdGlvbnMhIEV4cGVjdGVkIG9iamVjdCwgTWFwIG9yIFByb21pc2UsIGdvdCAke3R5cGVvZiB0LmlucHV0T3B0aW9uc31gKTtcbiAgICB9LCBSbyA9IChlLCB0KSA9PiB7XG4gICAgICBjb25zdCBuID0gZS5nZXRJbnB1dCgpO1xuICAgICAgRihuKSwgdGUodC5pbnB1dFZhbHVlKS50aGVuKChvKSA9PiB7XG4gICAgICAgIG4udmFsdWUgPSB0LmlucHV0ID09PSBcIm51bWJlclwiID8gYCR7cGFyc2VGbG9hdChvKSB8fCAwfWAgOiBgJHtvfWAsIEQobiksIG4uZm9jdXMoKSwgZS5oaWRlTG9hZGluZygpO1xuICAgICAgfSkuY2F0Y2goKG8pID0+IHtcbiAgICAgICAgaWUoYEVycm9yIGluIGlucHV0VmFsdWUgcHJvbWlzZTogJHtvfWApLCBuLnZhbHVlID0gXCJcIiwgRChuKSwgbi5mb2N1cygpLCBlLmhpZGVMb2FkaW5nKCk7XG4gICAgICB9KTtcbiAgICB9LCBVbyA9IHtcbiAgICAgIC8qKlxuICAgICAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gcG9wdXBcbiAgICAgICAqIEBwYXJhbSB7UmVjb3JkPHN0cmluZywgYW55Pn0gaW5wdXRPcHRpb25zXG4gICAgICAgKiBAcGFyYW0ge1N3ZWV0QWxlcnRPcHRpb25zfSBwYXJhbXNcbiAgICAgICAqL1xuICAgICAgc2VsZWN0OiAoZSwgdCwgbikgPT4ge1xuICAgICAgICBjb25zdCBvID0gdWUoZSwgci5zZWxlY3QpLCBjID0gKF8sIE8sIFEpID0+IHtcbiAgICAgICAgICBjb25zdCBqID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcbiAgICAgICAgICBqLnZhbHVlID0gUSwgVihqLCBPKSwgai5zZWxlY3RlZCA9IFB0KFEsIG4uaW5wdXRWYWx1ZSksIF8uYXBwZW5kQ2hpbGQoaik7XG4gICAgICAgIH07XG4gICAgICAgIHQuZm9yRWFjaCgoXykgPT4ge1xuICAgICAgICAgIGNvbnN0IE8gPSBfWzBdLCBRID0gX1sxXTtcbiAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShRKSkge1xuICAgICAgICAgICAgY29uc3QgaiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRncm91cFwiKTtcbiAgICAgICAgICAgIGoubGFiZWwgPSBPLCBqLmRpc2FibGVkID0gITEsIG8uYXBwZW5kQ2hpbGQoaiksIFEuZm9yRWFjaCgoX2UpID0+IGMoaiwgX2VbMV0sIF9lWzBdKSk7XG4gICAgICAgICAgfSBlbHNlXG4gICAgICAgICAgICBjKG8sIFEsIE8pO1xuICAgICAgICB9KSwgby5mb2N1cygpO1xuICAgICAgfSxcbiAgICAgIC8qKlxuICAgICAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gcG9wdXBcbiAgICAgICAqIEBwYXJhbSB7UmVjb3JkPHN0cmluZywgYW55Pn0gaW5wdXRPcHRpb25zXG4gICAgICAgKiBAcGFyYW0ge1N3ZWV0QWxlcnRPcHRpb25zfSBwYXJhbXNcbiAgICAgICAqL1xuICAgICAgcmFkaW86IChlLCB0LCBuKSA9PiB7XG4gICAgICAgIGNvbnN0IG8gPSB1ZShlLCByLnJhZGlvKTtcbiAgICAgICAgdC5mb3JFYWNoKChfKSA9PiB7XG4gICAgICAgICAgY29uc3QgTyA9IF9bMF0sIFEgPSBfWzFdLCBqID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpLCBfZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgICAgICAgICBqLnR5cGUgPSBcInJhZGlvXCIsIGoubmFtZSA9IHIucmFkaW8sIGoudmFsdWUgPSBPLCBQdChPLCBuLmlucHV0VmFsdWUpICYmIChqLmNoZWNrZWQgPSAhMCk7XG4gICAgICAgICAgY29uc3QgWmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgICAgICAgICBWKFplLCBRKSwgWmUuY2xhc3NOYW1lID0gci5sYWJlbCwgX2UuYXBwZW5kQ2hpbGQoaiksIF9lLmFwcGVuZENoaWxkKFplKSwgby5hcHBlbmRDaGlsZChfZSk7XG4gICAgICAgIH0pO1xuICAgICAgICBjb25zdCBjID0gby5xdWVyeVNlbGVjdG9yQWxsKFwiaW5wdXRcIik7XG4gICAgICAgIGMubGVuZ3RoICYmIGNbMF0uZm9jdXMoKTtcbiAgICAgIH1cbiAgICB9LCBRZSA9IChlKSA9PiB7XG4gICAgICBjb25zdCB0ID0gW107XG4gICAgICByZXR1cm4gdHlwZW9mIE1hcCA8IFwidVwiICYmIGUgaW5zdGFuY2VvZiBNYXAgPyBlLmZvckVhY2goKG4sIG8pID0+IHtcbiAgICAgICAgbGV0IGMgPSBuO1xuICAgICAgICB0eXBlb2YgYyA9PSBcIm9iamVjdFwiICYmIChjID0gUWUoYykpLCB0LnB1c2goW28sIGNdKTtcbiAgICAgIH0pIDogT2JqZWN0LmtleXMoZSkuZm9yRWFjaCgobikgPT4ge1xuICAgICAgICBsZXQgbyA9IGVbbl07XG4gICAgICAgIHR5cGVvZiBvID09IFwib2JqZWN0XCIgJiYgKG8gPSBRZShvKSksIHQucHVzaChbbiwgb10pO1xuICAgICAgfSksIHQ7XG4gICAgfSwgUHQgPSAoZSwgdCkgPT4gdCAmJiB0LnRvU3RyaW5nKCkgPT09IGUudG9TdHJpbmcoKSwgRG8gPSAoZSkgPT4ge1xuICAgICAgY29uc3QgdCA9IGcuaW5uZXJQYXJhbXMuZ2V0KGUpO1xuICAgICAgZS5kaXNhYmxlQnV0dG9ucygpLCB0LmlucHV0ID8gTXQoZSwgXCJjb25maXJtXCIpIDogWWUoZSwgITApO1xuICAgIH0sICRvID0gKGUpID0+IHtcbiAgICAgIGNvbnN0IHQgPSBnLmlubmVyUGFyYW1zLmdldChlKTtcbiAgICAgIGUuZGlzYWJsZUJ1dHRvbnMoKSwgdC5yZXR1cm5JbnB1dFZhbHVlT25EZW55ID8gTXQoZSwgXCJkZW55XCIpIDogR2UoZSwgITEpO1xuICAgIH0sIEZvID0gKGUsIHQpID0+IHtcbiAgICAgIGUuZGlzYWJsZUJ1dHRvbnMoKSwgdCh3ZS5jYW5jZWwpO1xuICAgIH0sIE10ID0gKGUsIHQpID0+IHtcbiAgICAgIGNvbnN0IG4gPSBnLmlubmVyUGFyYW1zLmdldChlKTtcbiAgICAgIGlmICghbi5pbnB1dCkge1xuICAgICAgICBpZShgVGhlIFwiaW5wdXRcIiBwYXJhbWV0ZXIgaXMgbmVlZGVkIHRvIGJlIHNldCB3aGVuIHVzaW5nIHJldHVybklucHV0VmFsdWVPbiR7c2UodCl9YCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGNvbnN0IG8gPSBCbyhlLCBuKTtcbiAgICAgIG4uaW5wdXRWYWxpZGF0b3IgPyBWbyhlLCBvLCB0KSA6IGUuZ2V0SW5wdXQoKS5jaGVja1ZhbGlkaXR5KCkgPyB0ID09PSBcImRlbnlcIiA/IEdlKGUsIG8pIDogWWUoZSwgbykgOiAoZS5lbmFibGVCdXR0b25zKCksIGUuc2hvd1ZhbGlkYXRpb25NZXNzYWdlKG4udmFsaWRhdGlvbk1lc3NhZ2UpKTtcbiAgICB9LCBWbyA9IChlLCB0LCBuKSA9PiB7XG4gICAgICBjb25zdCBvID0gZy5pbm5lclBhcmFtcy5nZXQoZSk7XG4gICAgICBlLmRpc2FibGVJbnB1dCgpLCBQcm9taXNlLnJlc29sdmUoKS50aGVuKCgpID0+IHRlKG8uaW5wdXRWYWxpZGF0b3IodCwgby52YWxpZGF0aW9uTWVzc2FnZSkpKS50aGVuKChfKSA9PiB7XG4gICAgICAgIGUuZW5hYmxlQnV0dG9ucygpLCBlLmVuYWJsZUlucHV0KCksIF8gPyBlLnNob3dWYWxpZGF0aW9uTWVzc2FnZShfKSA6IG4gPT09IFwiZGVueVwiID8gR2UoZSwgdCkgOiBZZShlLCB0KTtcbiAgICAgIH0pO1xuICAgIH0sIEdlID0gKGUsIHQpID0+IHtcbiAgICAgIGNvbnN0IG4gPSBnLmlubmVyUGFyYW1zLmdldChlIHx8IHZvaWQgMCk7XG4gICAgICBuLnNob3dMb2FkZXJPbkRlbnkgJiYgeWUodSgpKSwgbi5wcmVEZW55ID8gKGcuYXdhaXRpbmdQcm9taXNlLnNldChlIHx8IHZvaWQgMCwgITApLCBQcm9taXNlLnJlc29sdmUoKS50aGVuKCgpID0+IHRlKG4ucHJlRGVueSh0LCBuLnZhbGlkYXRpb25NZXNzYWdlKSkpLnRoZW4oKGMpID0+IHtcbiAgICAgICAgYyA9PT0gITEgPyAoZS5oaWRlTG9hZGluZygpLCBTZShlKSkgOiBlLmNsb3NlKHtcbiAgICAgICAgICBpc0RlbmllZDogITAsXG4gICAgICAgICAgdmFsdWU6IHR5cGVvZiBjID4gXCJ1XCIgPyB0IDogY1xuICAgICAgICB9KTtcbiAgICAgIH0pLmNhdGNoKChjKSA9PiBMdChlIHx8IHZvaWQgMCwgYykpKSA6IGUuY2xvc2Uoe1xuICAgICAgICBpc0RlbmllZDogITAsXG4gICAgICAgIHZhbHVlOiB0XG4gICAgICB9KTtcbiAgICB9LCBCdCA9IChlLCB0KSA9PiB7XG4gICAgICBlLmNsb3NlKHtcbiAgICAgICAgaXNDb25maXJtZWQ6ICEwLFxuICAgICAgICB2YWx1ZTogdFxuICAgICAgfSk7XG4gICAgfSwgTHQgPSAoZSwgdCkgPT4ge1xuICAgICAgZS5yZWplY3RQcm9taXNlKHQpO1xuICAgIH0sIFllID0gKGUsIHQpID0+IHtcbiAgICAgIGNvbnN0IG4gPSBnLmlubmVyUGFyYW1zLmdldChlIHx8IHZvaWQgMCk7XG4gICAgICBuLnNob3dMb2FkZXJPbkNvbmZpcm0gJiYgeWUoKSwgbi5wcmVDb25maXJtID8gKGUucmVzZXRWYWxpZGF0aW9uTWVzc2FnZSgpLCBnLmF3YWl0aW5nUHJvbWlzZS5zZXQoZSB8fCB2b2lkIDAsICEwKSwgUHJvbWlzZS5yZXNvbHZlKCkudGhlbigoKSA9PiB0ZShuLnByZUNvbmZpcm0odCwgbi52YWxpZGF0aW9uTWVzc2FnZSkpKS50aGVuKChjKSA9PiB7XG4gICAgICAgIFcoaSgpKSB8fCBjID09PSAhMSA/IChlLmhpZGVMb2FkaW5nKCksIFNlKGUpKSA6IEJ0KGUsIHR5cGVvZiBjID4gXCJ1XCIgPyB0IDogYyk7XG4gICAgICB9KS5jYXRjaCgoYykgPT4gTHQoZSB8fCB2b2lkIDAsIGMpKSkgOiBCdChlLCB0KTtcbiAgICB9LCBqbyA9IChlLCB0LCBuKSA9PiB7XG4gICAgICBnLmlubmVyUGFyYW1zLmdldChlKS50b2FzdCA/IEhvKGUsIHQsIG4pIDogKEtvKHQpLCBXbyh0KSwgUW8oZSwgdCwgbikpO1xuICAgIH0sIEhvID0gKGUsIHQsIG4pID0+IHtcbiAgICAgIHQucG9wdXAub25jbGljayA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgbyA9IGcuaW5uZXJQYXJhbXMuZ2V0KGUpO1xuICAgICAgICBvICYmICh6byhvKSB8fCBvLnRpbWVyIHx8IG8uaW5wdXQpIHx8IG4od2UuY2xvc2UpO1xuICAgICAgfTtcbiAgICB9LCB6byA9IChlKSA9PiBlLnNob3dDb25maXJtQnV0dG9uIHx8IGUuc2hvd0RlbnlCdXR0b24gfHwgZS5zaG93Q2FuY2VsQnV0dG9uIHx8IGUuc2hvd0Nsb3NlQnV0dG9uO1xuICAgIGxldCBPZSA9ICExO1xuICAgIGNvbnN0IEtvID0gKGUpID0+IHtcbiAgICAgIGUucG9wdXAub25tb3VzZWRvd24gPSAoKSA9PiB7XG4gICAgICAgIGUuY29udGFpbmVyLm9ubW91c2V1cCA9IGZ1bmN0aW9uKHQpIHtcbiAgICAgICAgICBlLmNvbnRhaW5lci5vbm1vdXNldXAgPSB2b2lkIDAsIHQudGFyZ2V0ID09PSBlLmNvbnRhaW5lciAmJiAoT2UgPSAhMCk7XG4gICAgICAgIH07XG4gICAgICB9O1xuICAgIH0sIFdvID0gKGUpID0+IHtcbiAgICAgIGUuY29udGFpbmVyLm9ubW91c2Vkb3duID0gKCkgPT4ge1xuICAgICAgICBlLnBvcHVwLm9ubW91c2V1cCA9IGZ1bmN0aW9uKHQpIHtcbiAgICAgICAgICBlLnBvcHVwLm9ubW91c2V1cCA9IHZvaWQgMCwgKHQudGFyZ2V0ID09PSBlLnBvcHVwIHx8IGUucG9wdXAuY29udGFpbnModC50YXJnZXQpKSAmJiAoT2UgPSAhMCk7XG4gICAgICAgIH07XG4gICAgICB9O1xuICAgIH0sIFFvID0gKGUsIHQsIG4pID0+IHtcbiAgICAgIHQuY29udGFpbmVyLm9uY2xpY2sgPSAobykgPT4ge1xuICAgICAgICBjb25zdCBjID0gZy5pbm5lclBhcmFtcy5nZXQoZSk7XG4gICAgICAgIGlmIChPZSkge1xuICAgICAgICAgIE9lID0gITE7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIG8udGFyZ2V0ID09PSB0LmNvbnRhaW5lciAmJiBVKGMuYWxsb3dPdXRzaWRlQ2xpY2spICYmIG4od2UuYmFja2Ryb3ApO1xuICAgICAgfTtcbiAgICB9LCBHbyA9IChlKSA9PiB0eXBlb2YgZSA9PSBcIm9iamVjdFwiICYmIGUuanF1ZXJ5LCBOdCA9IChlKSA9PiBlIGluc3RhbmNlb2YgRWxlbWVudCB8fCBHbyhlKSwgWW8gPSAoZSkgPT4ge1xuICAgICAgY29uc3QgdCA9IHt9O1xuICAgICAgcmV0dXJuIHR5cGVvZiBlWzBdID09IFwib2JqZWN0XCIgJiYgIU50KGVbMF0pID8gT2JqZWN0LmFzc2lnbih0LCBlWzBdKSA6IFtcInRpdGxlXCIsIFwiaHRtbFwiLCBcImljb25cIl0uZm9yRWFjaCgobiwgbykgPT4ge1xuICAgICAgICBjb25zdCBjID0gZVtvXTtcbiAgICAgICAgdHlwZW9mIGMgPT0gXCJzdHJpbmdcIiB8fCBOdChjKSA/IHRbbl0gPSBjIDogYyAhPT0gdm9pZCAwICYmIGllKGBVbmV4cGVjdGVkIHR5cGUgb2YgJHtufSEgRXhwZWN0ZWQgXCJzdHJpbmdcIiBvciBcIkVsZW1lbnRcIiwgZ290ICR7dHlwZW9mIGN9YCk7XG4gICAgICB9KSwgdDtcbiAgICB9O1xuICAgIGZ1bmN0aW9uIEpvKCkge1xuICAgICAgY29uc3QgZSA9IHRoaXM7XG4gICAgICBmb3IgKHZhciB0ID0gYXJndW1lbnRzLmxlbmd0aCwgbiA9IG5ldyBBcnJheSh0KSwgbyA9IDA7IG8gPCB0OyBvKyspXG4gICAgICAgIG5bb10gPSBhcmd1bWVudHNbb107XG4gICAgICByZXR1cm4gbmV3IGUoLi4ubik7XG4gICAgfVxuICAgIGZ1bmN0aW9uIFpvKGUpIHtcbiAgICAgIGNsYXNzIHQgZXh0ZW5kcyB0aGlzIHtcbiAgICAgICAgX21haW4obywgYykge1xuICAgICAgICAgIHJldHVybiBzdXBlci5fbWFpbihvLCBPYmplY3QuYXNzaWduKHt9LCBlLCBjKSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiB0O1xuICAgIH1cbiAgICBjb25zdCBYbyA9ICgpID0+IEEudGltZW91dCAmJiBBLnRpbWVvdXQuZ2V0VGltZXJMZWZ0KCksIE90ID0gKCkgPT4ge1xuICAgICAgaWYgKEEudGltZW91dClcbiAgICAgICAgcmV0dXJuIFF0KCksIEEudGltZW91dC5zdG9wKCk7XG4gICAgfSwgcXQgPSAoKSA9PiB7XG4gICAgICBpZiAoQS50aW1lb3V0KSB7XG4gICAgICAgIGNvbnN0IGUgPSBBLnRpbWVvdXQuc3RhcnQoKTtcbiAgICAgICAgcmV0dXJuIEZlKGUpLCBlO1xuICAgICAgfVxuICAgIH0sIGVzID0gKCkgPT4ge1xuICAgICAgY29uc3QgZSA9IEEudGltZW91dDtcbiAgICAgIHJldHVybiBlICYmIChlLnJ1bm5pbmcgPyBPdCgpIDogcXQoKSk7XG4gICAgfSwgdHMgPSAoZSkgPT4ge1xuICAgICAgaWYgKEEudGltZW91dCkge1xuICAgICAgICBjb25zdCB0ID0gQS50aW1lb3V0LmluY3JlYXNlKGUpO1xuICAgICAgICByZXR1cm4gRmUodCwgITApLCB0O1xuICAgICAgfVxuICAgIH0sIG5zID0gKCkgPT4gQS50aW1lb3V0ICYmIEEudGltZW91dC5pc1J1bm5pbmcoKTtcbiAgICBsZXQgUnQgPSAhMTtcbiAgICBjb25zdCBKZSA9IHt9O1xuICAgIGZ1bmN0aW9uIG9zKCkge1xuICAgICAgbGV0IGUgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHZvaWQgMCA/IGFyZ3VtZW50c1swXSA6IFwiZGF0YS1zd2FsLXRlbXBsYXRlXCI7XG4gICAgICBKZVtlXSA9IHRoaXMsIFJ0IHx8IChkb2N1bWVudC5ib2R5LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBzcyksIFJ0ID0gITApO1xuICAgIH1cbiAgICBjb25zdCBzcyA9IChlKSA9PiB7XG4gICAgICBmb3IgKGxldCB0ID0gZS50YXJnZXQ7IHQgJiYgdCAhPT0gZG9jdW1lbnQ7IHQgPSB0LnBhcmVudE5vZGUpXG4gICAgICAgIGZvciAoY29uc3QgbiBpbiBKZSkge1xuICAgICAgICAgIGNvbnN0IG8gPSB0LmdldEF0dHJpYnV0ZShuKTtcbiAgICAgICAgICBpZiAobykge1xuICAgICAgICAgICAgSmVbbl0uZmlyZSh7XG4gICAgICAgICAgICAgIHRlbXBsYXRlOiBvXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuICAgIHZhciBpcyA9IC8qIEBfX1BVUkVfXyAqLyBPYmplY3QuZnJlZXplKHtcbiAgICAgIF9fcHJvdG9fXzogbnVsbCxcbiAgICAgIGFyZ3NUb1BhcmFtczogWW8sXG4gICAgICBiaW5kQ2xpY2tIYW5kbGVyOiBvcyxcbiAgICAgIGNsaWNrQ2FuY2VsOiBGbixcbiAgICAgIGNsaWNrQ29uZmlybTogYnQsXG4gICAgICBjbGlja0Rlbnk6ICRuLFxuICAgICAgZW5hYmxlTG9hZGluZzogeWUsXG4gICAgICBmaXJlOiBKbyxcbiAgICAgIGdldEFjdGlvbnM6IG0sXG4gICAgICBnZXRDYW5jZWxCdXR0b246IGwsXG4gICAgICBnZXRDbG9zZUJ1dHRvbjogTCxcbiAgICAgIGdldENvbmZpcm1CdXR0b246IHMsXG4gICAgICBnZXRDb250YWluZXI6IFIsXG4gICAgICBnZXREZW55QnV0dG9uOiB1LFxuICAgICAgZ2V0Rm9jdXNhYmxlRWxlbWVudHM6IGEsXG4gICAgICBnZXRGb290ZXI6IFMsXG4gICAgICBnZXRIdG1sQ29udGFpbmVyOiBiLFxuICAgICAgZ2V0SWNvbjogY2UsXG4gICAgICBnZXRJY29uQ29udGVudDogUGUsXG4gICAgICBnZXRJbWFnZTogTWUsXG4gICAgICBnZXRJbnB1dExhYmVsOiBoLFxuICAgICAgZ2V0TG9hZGVyOiBkLFxuICAgICAgZ2V0UG9wdXA6IEIsXG4gICAgICBnZXRQcm9ncmVzc1N0ZXBzOiBHLFxuICAgICAgZ2V0VGltZXJMZWZ0OiBYbyxcbiAgICAgIGdldFRpbWVyUHJvZ3Jlc3NCYXI6IHksXG4gICAgICBnZXRUaXRsZTogZmUsXG4gICAgICBnZXRWYWxpZGF0aW9uTWVzc2FnZTogaSxcbiAgICAgIGluY3JlYXNlVGltZXI6IHRzLFxuICAgICAgaXNEZXByZWNhdGVkUGFyYW1ldGVyOiBLZSxcbiAgICAgIGlzTG9hZGluZzogSyxcbiAgICAgIGlzVGltZXJSdW5uaW5nOiBucyxcbiAgICAgIGlzVXBkYXRhYmxlUGFyYW1ldGVyOiBrdCxcbiAgICAgIGlzVmFsaWRQYXJhbWV0ZXI6IEl0LFxuICAgICAgaXNWaXNpYmxlOiBEbixcbiAgICAgIG1peGluOiBabyxcbiAgICAgIHJlc3VtZVRpbWVyOiBxdCxcbiAgICAgIHNob3dMb2FkaW5nOiB5ZSxcbiAgICAgIHN0b3BUaW1lcjogT3QsXG4gICAgICB0b2dnbGVUaW1lcjogZXNcbiAgICB9KTtcbiAgICBjbGFzcyBycyB7XG4gICAgICAvKipcbiAgICAgICAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrXG4gICAgICAgKiBAcGFyYW0ge251bWJlcn0gZGVsYXlcbiAgICAgICAqL1xuICAgICAgY29uc3RydWN0b3IodCwgbikge1xuICAgICAgICB0aGlzLmNhbGxiYWNrID0gdCwgdGhpcy5yZW1haW5pbmcgPSBuLCB0aGlzLnJ1bm5pbmcgPSAhMSwgdGhpcy5zdGFydCgpO1xuICAgICAgfVxuICAgICAgc3RhcnQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnJ1bm5pbmcgfHwgKHRoaXMucnVubmluZyA9ICEwLCB0aGlzLnN0YXJ0ZWQgPSAvKiBAX19QVVJFX18gKi8gbmV3IERhdGUoKSwgdGhpcy5pZCA9IHNldFRpbWVvdXQodGhpcy5jYWxsYmFjaywgdGhpcy5yZW1haW5pbmcpKSwgdGhpcy5yZW1haW5pbmc7XG4gICAgICB9XG4gICAgICBzdG9wKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5ydW5uaW5nICYmICh0aGlzLnJ1bm5pbmcgPSAhMSwgY2xlYXJUaW1lb3V0KHRoaXMuaWQpLCB0aGlzLnJlbWFpbmluZyAtPSAoLyogQF9fUFVSRV9fICovIG5ldyBEYXRlKCkpLmdldFRpbWUoKSAtIHRoaXMuc3RhcnRlZC5nZXRUaW1lKCkpLCB0aGlzLnJlbWFpbmluZztcbiAgICAgIH1cbiAgICAgIGluY3JlYXNlKHQpIHtcbiAgICAgICAgY29uc3QgbiA9IHRoaXMucnVubmluZztcbiAgICAgICAgcmV0dXJuIG4gJiYgdGhpcy5zdG9wKCksIHRoaXMucmVtYWluaW5nICs9IHQsIG4gJiYgdGhpcy5zdGFydCgpLCB0aGlzLnJlbWFpbmluZztcbiAgICAgIH1cbiAgICAgIGdldFRpbWVyTGVmdCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucnVubmluZyAmJiAodGhpcy5zdG9wKCksIHRoaXMuc3RhcnQoKSksIHRoaXMucmVtYWluaW5nO1xuICAgICAgfVxuICAgICAgaXNSdW5uaW5nKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5ydW5uaW5nO1xuICAgICAgfVxuICAgIH1cbiAgICBjb25zdCBVdCA9IFtcInN3YWwtdGl0bGVcIiwgXCJzd2FsLWh0bWxcIiwgXCJzd2FsLWZvb3RlclwiXSwgYXMgPSAoZSkgPT4ge1xuICAgICAgY29uc3QgdCA9IHR5cGVvZiBlLnRlbXBsYXRlID09IFwic3RyaW5nXCIgPyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGUudGVtcGxhdGUpIDogZS50ZW1wbGF0ZTtcbiAgICAgIGlmICghdClcbiAgICAgICAgcmV0dXJuIHt9O1xuICAgICAgY29uc3QgbiA9IHQuY29udGVudDtcbiAgICAgIHJldHVybiBncyhuKSwgT2JqZWN0LmFzc2lnbihscyhuKSwgY3MobiksIHVzKG4pLCBkcyhuKSwgZnMobiksIGhzKG4pLCBwcyhuLCBVdCkpO1xuICAgIH0sIGxzID0gKGUpID0+IHtcbiAgICAgIGNvbnN0IHQgPSB7fTtcbiAgICAgIHJldHVybiBBcnJheS5mcm9tKGUucXVlcnlTZWxlY3RvckFsbChcInN3YWwtcGFyYW1cIikpLmZvckVhY2goKG8pID0+IHtcbiAgICAgICAgcGUobywgW1wibmFtZVwiLCBcInZhbHVlXCJdKTtcbiAgICAgICAgY29uc3QgYyA9IG8uZ2V0QXR0cmlidXRlKFwibmFtZVwiKSwgXyA9IG8uZ2V0QXR0cmlidXRlKFwidmFsdWVcIik7XG4gICAgICAgIHR5cGVvZiBiZVtjXSA9PSBcImJvb2xlYW5cIiA/IHRbY10gPSBfICE9PSBcImZhbHNlXCIgOiB0eXBlb2YgYmVbY10gPT0gXCJvYmplY3RcIiA/IHRbY10gPSBKU09OLnBhcnNlKF8pIDogdFtjXSA9IF87XG4gICAgICB9KSwgdDtcbiAgICB9LCBjcyA9IChlKSA9PiB7XG4gICAgICBjb25zdCB0ID0ge307XG4gICAgICByZXR1cm4gQXJyYXkuZnJvbShlLnF1ZXJ5U2VsZWN0b3JBbGwoXCJzd2FsLWZ1bmN0aW9uLXBhcmFtXCIpKS5mb3JFYWNoKChvKSA9PiB7XG4gICAgICAgIGNvbnN0IGMgPSBvLmdldEF0dHJpYnV0ZShcIm5hbWVcIiksIF8gPSBvLmdldEF0dHJpYnV0ZShcInZhbHVlXCIpO1xuICAgICAgICB0W2NdID0gbmV3IEZ1bmN0aW9uKGByZXR1cm4gJHtffWApKCk7XG4gICAgICB9KSwgdDtcbiAgICB9LCB1cyA9IChlKSA9PiB7XG4gICAgICBjb25zdCB0ID0ge307XG4gICAgICByZXR1cm4gQXJyYXkuZnJvbShlLnF1ZXJ5U2VsZWN0b3JBbGwoXCJzd2FsLWJ1dHRvblwiKSkuZm9yRWFjaCgobykgPT4ge1xuICAgICAgICBwZShvLCBbXCJ0eXBlXCIsIFwiY29sb3JcIiwgXCJhcmlhLWxhYmVsXCJdKTtcbiAgICAgICAgY29uc3QgYyA9IG8uZ2V0QXR0cmlidXRlKFwidHlwZVwiKTtcbiAgICAgICAgdFtgJHtjfUJ1dHRvblRleHRgXSA9IG8uaW5uZXJIVE1MLCB0W2BzaG93JHtzZShjKX1CdXR0b25gXSA9ICEwLCBvLmhhc0F0dHJpYnV0ZShcImNvbG9yXCIpICYmICh0W2Ake2N9QnV0dG9uQ29sb3JgXSA9IG8uZ2V0QXR0cmlidXRlKFwiY29sb3JcIikpLCBvLmhhc0F0dHJpYnV0ZShcImFyaWEtbGFiZWxcIikgJiYgKHRbYCR7Y31CdXR0b25BcmlhTGFiZWxgXSA9IG8uZ2V0QXR0cmlidXRlKFwiYXJpYS1sYWJlbFwiKSk7XG4gICAgICB9KSwgdDtcbiAgICB9LCBkcyA9IChlKSA9PiB7XG4gICAgICBjb25zdCB0ID0ge30sIG4gPSBlLnF1ZXJ5U2VsZWN0b3IoXCJzd2FsLWltYWdlXCIpO1xuICAgICAgcmV0dXJuIG4gJiYgKHBlKG4sIFtcInNyY1wiLCBcIndpZHRoXCIsIFwiaGVpZ2h0XCIsIFwiYWx0XCJdKSwgbi5oYXNBdHRyaWJ1dGUoXCJzcmNcIikgJiYgKHQuaW1hZ2VVcmwgPSBuLmdldEF0dHJpYnV0ZShcInNyY1wiKSksIG4uaGFzQXR0cmlidXRlKFwid2lkdGhcIikgJiYgKHQuaW1hZ2VXaWR0aCA9IG4uZ2V0QXR0cmlidXRlKFwid2lkdGhcIikpLCBuLmhhc0F0dHJpYnV0ZShcImhlaWdodFwiKSAmJiAodC5pbWFnZUhlaWdodCA9IG4uZ2V0QXR0cmlidXRlKFwiaGVpZ2h0XCIpKSwgbi5oYXNBdHRyaWJ1dGUoXCJhbHRcIikgJiYgKHQuaW1hZ2VBbHQgPSBuLmdldEF0dHJpYnV0ZShcImFsdFwiKSkpLCB0O1xuICAgIH0sIGZzID0gKGUpID0+IHtcbiAgICAgIGNvbnN0IHQgPSB7fSwgbiA9IGUucXVlcnlTZWxlY3RvcihcInN3YWwtaWNvblwiKTtcbiAgICAgIHJldHVybiBuICYmIChwZShuLCBbXCJ0eXBlXCIsIFwiY29sb3JcIl0pLCBuLmhhc0F0dHJpYnV0ZShcInR5cGVcIikgJiYgKHQuaWNvbiA9IG4uZ2V0QXR0cmlidXRlKFwidHlwZVwiKSksIG4uaGFzQXR0cmlidXRlKFwiY29sb3JcIikgJiYgKHQuaWNvbkNvbG9yID0gbi5nZXRBdHRyaWJ1dGUoXCJjb2xvclwiKSksIHQuaWNvbkh0bWwgPSBuLmlubmVySFRNTCksIHQ7XG4gICAgfSwgaHMgPSAoZSkgPT4ge1xuICAgICAgY29uc3QgdCA9IHt9LCBuID0gZS5xdWVyeVNlbGVjdG9yKFwic3dhbC1pbnB1dFwiKTtcbiAgICAgIG4gJiYgKHBlKG4sIFtcInR5cGVcIiwgXCJsYWJlbFwiLCBcInBsYWNlaG9sZGVyXCIsIFwidmFsdWVcIl0pLCB0LmlucHV0ID0gbi5nZXRBdHRyaWJ1dGUoXCJ0eXBlXCIpIHx8IFwidGV4dFwiLCBuLmhhc0F0dHJpYnV0ZShcImxhYmVsXCIpICYmICh0LmlucHV0TGFiZWwgPSBuLmdldEF0dHJpYnV0ZShcImxhYmVsXCIpKSwgbi5oYXNBdHRyaWJ1dGUoXCJwbGFjZWhvbGRlclwiKSAmJiAodC5pbnB1dFBsYWNlaG9sZGVyID0gbi5nZXRBdHRyaWJ1dGUoXCJwbGFjZWhvbGRlclwiKSksIG4uaGFzQXR0cmlidXRlKFwidmFsdWVcIikgJiYgKHQuaW5wdXRWYWx1ZSA9IG4uZ2V0QXR0cmlidXRlKFwidmFsdWVcIikpKTtcbiAgICAgIGNvbnN0IG8gPSBBcnJheS5mcm9tKGUucXVlcnlTZWxlY3RvckFsbChcInN3YWwtaW5wdXQtb3B0aW9uXCIpKTtcbiAgICAgIHJldHVybiBvLmxlbmd0aCAmJiAodC5pbnB1dE9wdGlvbnMgPSB7fSwgby5mb3JFYWNoKChjKSA9PiB7XG4gICAgICAgIHBlKGMsIFtcInZhbHVlXCJdKTtcbiAgICAgICAgY29uc3QgXyA9IGMuZ2V0QXR0cmlidXRlKFwidmFsdWVcIiksIE8gPSBjLmlubmVySFRNTDtcbiAgICAgICAgdC5pbnB1dE9wdGlvbnNbX10gPSBPO1xuICAgICAgfSkpLCB0O1xuICAgIH0sIHBzID0gKGUsIHQpID0+IHtcbiAgICAgIGNvbnN0IG4gPSB7fTtcbiAgICAgIGZvciAoY29uc3QgbyBpbiB0KSB7XG4gICAgICAgIGNvbnN0IGMgPSB0W29dLCBfID0gZS5xdWVyeVNlbGVjdG9yKGMpO1xuICAgICAgICBfICYmIChwZShfLCBbXSksIG5bYy5yZXBsYWNlKC9ec3dhbC0vLCBcIlwiKV0gPSBfLmlubmVySFRNTC50cmltKCkpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG47XG4gICAgfSwgZ3MgPSAoZSkgPT4ge1xuICAgICAgY29uc3QgdCA9IFV0LmNvbmNhdChbXCJzd2FsLXBhcmFtXCIsIFwic3dhbC1mdW5jdGlvbi1wYXJhbVwiLCBcInN3YWwtYnV0dG9uXCIsIFwic3dhbC1pbWFnZVwiLCBcInN3YWwtaWNvblwiLCBcInN3YWwtaW5wdXRcIiwgXCJzd2FsLWlucHV0LW9wdGlvblwiXSk7XG4gICAgICBBcnJheS5mcm9tKGUuY2hpbGRyZW4pLmZvckVhY2goKG4pID0+IHtcbiAgICAgICAgY29uc3QgbyA9IG4udGFnTmFtZS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICB0LmluY2x1ZGVzKG8pIHx8IGYoYFVucmVjb2duaXplZCBlbGVtZW50IDwke299PmApO1xuICAgICAgfSk7XG4gICAgfSwgcGUgPSAoZSwgdCkgPT4ge1xuICAgICAgQXJyYXkuZnJvbShlLmF0dHJpYnV0ZXMpLmZvckVhY2goKG4pID0+IHtcbiAgICAgICAgdC5pbmRleE9mKG4ubmFtZSkgPT09IC0xICYmIGYoW2BVbnJlY29nbml6ZWQgYXR0cmlidXRlIFwiJHtuLm5hbWV9XCIgb24gPCR7ZS50YWdOYW1lLnRvTG93ZXJDYXNlKCl9Pi5gLCBgJHt0Lmxlbmd0aCA/IGBBbGxvd2VkIGF0dHJpYnV0ZXMgYXJlOiAke3Quam9pbihcIiwgXCIpfWAgOiBcIlRvIHNldCB0aGUgdmFsdWUsIHVzZSBIVE1MIHdpdGhpbiB0aGUgZWxlbWVudC5cIn1gXSk7XG4gICAgICB9KTtcbiAgICB9LCBEdCA9IDEwLCBtcyA9IChlKSA9PiB7XG4gICAgICBjb25zdCB0ID0gUigpLCBuID0gQigpO1xuICAgICAgdHlwZW9mIGUud2lsbE9wZW4gPT0gXCJmdW5jdGlvblwiICYmIGUud2lsbE9wZW4obik7XG4gICAgICBjb25zdCBjID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUoZG9jdW1lbnQuYm9keSkub3ZlcmZsb3dZO1xuICAgICAgeXModCwgbiwgZSksIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICB3cyh0LCBuKTtcbiAgICAgIH0sIER0KSwgSSgpICYmIChicyh0LCBlLnNjcm9sbGJhclBhZGRpbmcsIGMpLCBHbigpKSwgIXgoKSAmJiAhQS5wcmV2aW91c0FjdGl2ZUVsZW1lbnQgJiYgKEEucHJldmlvdXNBY3RpdmVFbGVtZW50ID0gZG9jdW1lbnQuYWN0aXZlRWxlbWVudCksIHR5cGVvZiBlLmRpZE9wZW4gPT0gXCJmdW5jdGlvblwiICYmIHNldFRpbWVvdXQoKCkgPT4gZS5kaWRPcGVuKG4pKSwgbmUodCwgcltcIm5vLXRyYW5zaXRpb25cIl0pO1xuICAgIH0sICR0ID0gKGUpID0+IHtcbiAgICAgIGNvbnN0IHQgPSBCKCk7XG4gICAgICBpZiAoZS50YXJnZXQgIT09IHQpXG4gICAgICAgIHJldHVybjtcbiAgICAgIGNvbnN0IG4gPSBSKCk7XG4gICAgICB0LnJlbW92ZUV2ZW50TGlzdGVuZXIoSWUsICR0KSwgbi5zdHlsZS5vdmVyZmxvd1kgPSBcImF1dG9cIjtcbiAgICB9LCB3cyA9IChlLCB0KSA9PiB7XG4gICAgICBJZSAmJiB1dCh0KSA/IChlLnN0eWxlLm92ZXJmbG93WSA9IFwiaGlkZGVuXCIsIHQuYWRkRXZlbnRMaXN0ZW5lcihJZSwgJHQpKSA6IGUuc3R5bGUub3ZlcmZsb3dZID0gXCJhdXRvXCI7XG4gICAgfSwgYnMgPSAoZSwgdCwgbikgPT4ge1xuICAgICAgWW4oKSwgdCAmJiBuICE9PSBcImhpZGRlblwiICYmIG9vKCksIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBlLnNjcm9sbFRvcCA9IDA7XG4gICAgICB9KTtcbiAgICB9LCB5cyA9IChlLCB0LCBuKSA9PiB7XG4gICAgICBNKGUsIG4uc2hvd0NsYXNzLmJhY2tkcm9wKSwgdC5zdHlsZS5zZXRQcm9wZXJ0eShcIm9wYWNpdHlcIiwgXCIwXCIsIFwiaW1wb3J0YW50XCIpLCBEKHQsIFwiZ3JpZFwiKSwgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIE0odCwgbi5zaG93Q2xhc3MucG9wdXApLCB0LnN0eWxlLnJlbW92ZVByb3BlcnR5KFwib3BhY2l0eVwiKTtcbiAgICAgIH0sIER0KSwgTShbZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LCBkb2N1bWVudC5ib2R5XSwgci5zaG93biksIG4uaGVpZ2h0QXV0byAmJiBuLmJhY2tkcm9wICYmICFuLnRvYXN0ICYmIE0oW2RvY3VtZW50LmRvY3VtZW50RWxlbWVudCwgZG9jdW1lbnQuYm9keV0sIHJbXCJoZWlnaHQtYXV0b1wiXSk7XG4gICAgfTtcbiAgICB2YXIgRnQgPSB7XG4gICAgICAvKipcbiAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBzdHJpbmdcbiAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSB2YWxpZGF0aW9uTWVzc2FnZVxuICAgICAgICogQHJldHVybnMge1Byb21pc2U8dm9pZCB8IHN0cmluZz59XG4gICAgICAgKi9cbiAgICAgIGVtYWlsOiAoZSwgdCkgPT4gL15bYS16QS1aMC05LitfLV0rQFthLXpBLVowLTkuLV0rXFwuW2EtekEtWjAtOS1dezIsMjR9JC8udGVzdChlKSA/IFByb21pc2UucmVzb2x2ZSgpIDogUHJvbWlzZS5yZXNvbHZlKHQgfHwgXCJJbnZhbGlkIGVtYWlsIGFkZHJlc3NcIiksXG4gICAgICAvKipcbiAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBzdHJpbmdcbiAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSB2YWxpZGF0aW9uTWVzc2FnZVxuICAgICAgICogQHJldHVybnMge1Byb21pc2U8dm9pZCB8IHN0cmluZz59XG4gICAgICAgKi9cbiAgICAgIHVybDogKGUsIHQpID0+IC9eaHR0cHM/OlxcL1xcLyh3d3dcXC4pP1stYS16QS1aMC05QDolLl8rfiM9XXsxLDI1Nn1cXC5bYS16XXsyLDYzfVxcYihbLWEtekEtWjAtOUA6JV8rLn4jPyYvPV0qKSQvLnRlc3QoZSkgPyBQcm9taXNlLnJlc29sdmUoKSA6IFByb21pc2UucmVzb2x2ZSh0IHx8IFwiSW52YWxpZCBVUkxcIilcbiAgICB9O1xuICAgIGZ1bmN0aW9uIHZzKGUpIHtcbiAgICAgIGUuaW5wdXRWYWxpZGF0b3IgfHwgT2JqZWN0LmtleXMoRnQpLmZvckVhY2goKHQpID0+IHtcbiAgICAgICAgZS5pbnB1dCA9PT0gdCAmJiAoZS5pbnB1dFZhbGlkYXRvciA9IEZ0W3RdKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgICBmdW5jdGlvbiBfcyhlKSB7XG4gICAgICAoIWUudGFyZ2V0IHx8IHR5cGVvZiBlLnRhcmdldCA9PSBcInN0cmluZ1wiICYmICFkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGUudGFyZ2V0KSB8fCB0eXBlb2YgZS50YXJnZXQgIT0gXCJzdHJpbmdcIiAmJiAhZS50YXJnZXQuYXBwZW5kQ2hpbGQpICYmIChmKCdUYXJnZXQgcGFyYW1ldGVyIGlzIG5vdCB2YWxpZCwgZGVmYXVsdGluZyB0byBcImJvZHlcIicpLCBlLnRhcmdldCA9IFwiYm9keVwiKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gRXMoZSkge1xuICAgICAgdnMoZSksIGUuc2hvd0xvYWRlck9uQ29uZmlybSAmJiAhZS5wcmVDb25maXJtICYmIGYoYHNob3dMb2FkZXJPbkNvbmZpcm0gaXMgc2V0IHRvIHRydWUsIGJ1dCBwcmVDb25maXJtIGlzIG5vdCBkZWZpbmVkLlxuc2hvd0xvYWRlck9uQ29uZmlybSBzaG91bGQgYmUgdXNlZCB0b2dldGhlciB3aXRoIHByZUNvbmZpcm0sIHNlZSB1c2FnZSBleGFtcGxlOlxuaHR0cHM6Ly9zd2VldGFsZXJ0Mi5naXRodWIuaW8vI2FqYXgtcmVxdWVzdGApLCBfcyhlKSwgdHlwZW9mIGUudGl0bGUgPT0gXCJzdHJpbmdcIiAmJiAoZS50aXRsZSA9IGUudGl0bGUuc3BsaXQoYFxuYCkuam9pbihcIjxiciAvPlwiKSksIHNuKGUpO1xuICAgIH1cbiAgICBsZXQgb2U7XG4gICAgY2xhc3MgdmUge1xuICAgICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIGlmICh0eXBlb2Ygd2luZG93ID4gXCJ1XCIpXG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICBvZSA9IHRoaXM7XG4gICAgICAgIGZvciAodmFyIHQgPSBhcmd1bWVudHMubGVuZ3RoLCBuID0gbmV3IEFycmF5KHQpLCBvID0gMDsgbyA8IHQ7IG8rKylcbiAgICAgICAgICBuW29dID0gYXJndW1lbnRzW29dO1xuICAgICAgICBjb25zdCBjID0gT2JqZWN0LmZyZWV6ZSh0aGlzLmNvbnN0cnVjdG9yLmFyZ3NUb1BhcmFtcyhuKSk7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKHRoaXMsIHtcbiAgICAgICAgICBwYXJhbXM6IHtcbiAgICAgICAgICAgIHZhbHVlOiBjLFxuICAgICAgICAgICAgd3JpdGFibGU6ICExLFxuICAgICAgICAgICAgZW51bWVyYWJsZTogITAsXG4gICAgICAgICAgICBjb25maWd1cmFibGU6ICEwXG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgY29uc3QgXyA9IG9lLl9tYWluKG9lLnBhcmFtcyk7XG4gICAgICAgIGcucHJvbWlzZS5zZXQodGhpcywgXyk7XG4gICAgICB9XG4gICAgICBfbWFpbih0KSB7XG4gICAgICAgIGxldCBuID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB2b2lkIDAgPyBhcmd1bWVudHNbMV0gOiB7fTtcbiAgICAgICAgQW8oT2JqZWN0LmFzc2lnbih7fSwgbiwgdCkpLCBBLmN1cnJlbnRJbnN0YW5jZSAmJiAoQS5jdXJyZW50SW5zdGFuY2UuX2Rlc3Ryb3koKSwgSSgpICYmIF90KCkpLCBBLmN1cnJlbnRJbnN0YW5jZSA9IG9lO1xuICAgICAgICBjb25zdCBvID0geHModCwgbik7XG4gICAgICAgIEVzKG8pLCBPYmplY3QuZnJlZXplKG8pLCBBLnRpbWVvdXQgJiYgKEEudGltZW91dC5zdG9wKCksIGRlbGV0ZSBBLnRpbWVvdXQpLCBjbGVhclRpbWVvdXQoQS5yZXN0b3JlRm9jdXNUaW1lb3V0KTtcbiAgICAgICAgY29uc3QgYyA9IEFzKG9lKTtcbiAgICAgICAgcmV0dXJuIG10KG9lLCBvKSwgZy5pbm5lclBhcmFtcy5zZXQob2UsIG8pLCBDcyhvZSwgYywgbyk7XG4gICAgICB9XG4gICAgICAvLyBgY2F0Y2hgIGNhbm5vdCBiZSB0aGUgbmFtZSBvZiBhIG1vZHVsZSBleHBvcnQsIHNvIHdlIGRlZmluZSBvdXIgdGhlbmFibGUgbWV0aG9kcyBoZXJlIGluc3RlYWRcbiAgICAgIHRoZW4odCkge1xuICAgICAgICByZXR1cm4gZy5wcm9taXNlLmdldCh0aGlzKS50aGVuKHQpO1xuICAgICAgfVxuICAgICAgZmluYWxseSh0KSB7XG4gICAgICAgIHJldHVybiBnLnByb21pc2UuZ2V0KHRoaXMpLmZpbmFsbHkodCk7XG4gICAgICB9XG4gICAgfVxuICAgIGNvbnN0IENzID0gKGUsIHQsIG4pID0+IG5ldyBQcm9taXNlKChvLCBjKSA9PiB7XG4gICAgICBjb25zdCBfID0gKE8pID0+IHtcbiAgICAgICAgZS5jbG9zZSh7XG4gICAgICAgICAgaXNEaXNtaXNzZWQ6ICEwLFxuICAgICAgICAgIGRpc21pc3M6IE9cbiAgICAgICAgfSk7XG4gICAgICB9O1xuICAgICAgVGUuc3dhbFByb21pc2VSZXNvbHZlLnNldChlLCBvKSwgVGUuc3dhbFByb21pc2VSZWplY3Quc2V0KGUsIGMpLCB0LmNvbmZpcm1CdXR0b24ub25jbGljayA9ICgpID0+IHtcbiAgICAgICAgRG8oZSk7XG4gICAgICB9LCB0LmRlbnlCdXR0b24ub25jbGljayA9ICgpID0+IHtcbiAgICAgICAgJG8oZSk7XG4gICAgICB9LCB0LmNhbmNlbEJ1dHRvbi5vbmNsaWNrID0gKCkgPT4ge1xuICAgICAgICBGbyhlLCBfKTtcbiAgICAgIH0sIHQuY2xvc2VCdXR0b24ub25jbGljayA9ICgpID0+IHtcbiAgICAgICAgXyh3ZS5jbG9zZSk7XG4gICAgICB9LCBqbyhlLCB0LCBfKSwgVm4oZSwgQSwgbiwgXyksIE1vKGUsIG4pLCBtcyhuKSwgSXMoQSwgbiwgXyksIGtzKHQsIG4pLCBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgdC5jb250YWluZXIuc2Nyb2xsVG9wID0gMDtcbiAgICAgIH0pO1xuICAgIH0pLCB4cyA9IChlLCB0KSA9PiB7XG4gICAgICBjb25zdCBuID0gYXMoZSksIG8gPSBPYmplY3QuYXNzaWduKHt9LCBiZSwgdCwgbiwgZSk7XG4gICAgICByZXR1cm4gby5zaG93Q2xhc3MgPSBPYmplY3QuYXNzaWduKHt9LCBiZS5zaG93Q2xhc3MsIG8uc2hvd0NsYXNzKSwgby5oaWRlQ2xhc3MgPSBPYmplY3QuYXNzaWduKHt9LCBiZS5oaWRlQ2xhc3MsIG8uaGlkZUNsYXNzKSwgbztcbiAgICB9LCBBcyA9IChlKSA9PiB7XG4gICAgICBjb25zdCB0ID0ge1xuICAgICAgICBwb3B1cDogQigpLFxuICAgICAgICBjb250YWluZXI6IFIoKSxcbiAgICAgICAgYWN0aW9uczogbSgpLFxuICAgICAgICBjb25maXJtQnV0dG9uOiBzKCksXG4gICAgICAgIGRlbnlCdXR0b246IHUoKSxcbiAgICAgICAgY2FuY2VsQnV0dG9uOiBsKCksXG4gICAgICAgIGxvYWRlcjogZCgpLFxuICAgICAgICBjbG9zZUJ1dHRvbjogTCgpLFxuICAgICAgICB2YWxpZGF0aW9uTWVzc2FnZTogaSgpLFxuICAgICAgICBwcm9ncmVzc1N0ZXBzOiBHKClcbiAgICAgIH07XG4gICAgICByZXR1cm4gZy5kb21DYWNoZS5zZXQoZSwgdCksIHQ7XG4gICAgfSwgSXMgPSAoZSwgdCwgbikgPT4ge1xuICAgICAgY29uc3QgbyA9IHkoKTtcbiAgICAgIEYobyksIHQudGltZXIgJiYgKGUudGltZW91dCA9IG5ldyBycygoKSA9PiB7XG4gICAgICAgIG4oXCJ0aW1lclwiKSwgZGVsZXRlIGUudGltZW91dDtcbiAgICAgIH0sIHQudGltZXIpLCB0LnRpbWVyUHJvZ3Jlc3NCYXIgJiYgKEQobyksIFkobywgdCwgXCJ0aW1lclByb2dyZXNzQmFyXCIpLCBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgZS50aW1lb3V0ICYmIGUudGltZW91dC5ydW5uaW5nICYmIEZlKHQudGltZXIpO1xuICAgICAgfSkpKTtcbiAgICB9LCBrcyA9IChlLCB0KSA9PiB7XG4gICAgICBpZiAoIXQudG9hc3QpIHtcbiAgICAgICAgaWYgKCFVKHQuYWxsb3dFbnRlcktleSkpIHtcbiAgICAgICAgICBTcygpO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBUcyhlLCB0KSB8fCB6ZSgtMSwgMSk7XG4gICAgICB9XG4gICAgfSwgVHMgPSAoZSwgdCkgPT4gdC5mb2N1c0RlbnkgJiYgVyhlLmRlbnlCdXR0b24pID8gKGUuZGVueUJ1dHRvbi5mb2N1cygpLCAhMCkgOiB0LmZvY3VzQ2FuY2VsICYmIFcoZS5jYW5jZWxCdXR0b24pID8gKGUuY2FuY2VsQnV0dG9uLmZvY3VzKCksICEwKSA6IHQuZm9jdXNDb25maXJtICYmIFcoZS5jb25maXJtQnV0dG9uKSA/IChlLmNvbmZpcm1CdXR0b24uZm9jdXMoKSwgITApIDogITEsIFNzID0gKCkgPT4ge1xuICAgICAgZG9jdW1lbnQuYWN0aXZlRWxlbWVudCBpbnN0YW5jZW9mIEhUTUxFbGVtZW50ICYmIHR5cGVvZiBkb2N1bWVudC5hY3RpdmVFbGVtZW50LmJsdXIgPT0gXCJmdW5jdGlvblwiICYmIGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQuYmx1cigpO1xuICAgIH07XG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgPCBcInVcIiAmJiAvXnJ1XFxiLy50ZXN0KG5hdmlnYXRvci5sYW5ndWFnZSkgJiYgbG9jYXRpb24uaG9zdC5tYXRjaCgvXFwuKHJ1fHN1fHhuLS1wMWFpKSQvKSkge1xuICAgICAgY29uc3QgZSA9IC8qIEBfX1BVUkVfXyAqLyBuZXcgRGF0ZSgpLCB0ID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJzd2FsLWluaXRpYXRpb25cIik7XG4gICAgICB0ID8gKGUuZ2V0VGltZSgpIC0gRGF0ZS5wYXJzZSh0KSkgLyAoMWUzICogNjAgKiA2MCAqIDI0KSA+IDMgJiYgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUucG9pbnRlckV2ZW50cyA9IFwibm9uZVwiO1xuICAgICAgICBjb25zdCBuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImF1ZGlvXCIpO1xuICAgICAgICBuLnNyYyA9IFwiaHR0cHM6Ly9mbGFnLWdpbW4ucnUvd3AtY29udGVudC91cGxvYWRzLzIwMjEvMDkvVWtyYWluYS5tcDNcIiwgbi5sb29wID0gITAsIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQobiksIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgIG4ucGxheSgpLmNhdGNoKCgpID0+IHtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSwgMjUwMCk7XG4gICAgICB9LCA1MDApIDogbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJzd2FsLWluaXRpYXRpb25cIiwgYCR7ZX1gKTtcbiAgICB9XG4gICAgT2JqZWN0LmFzc2lnbih2ZS5wcm90b3R5cGUsIFN0KSwgT2JqZWN0LmFzc2lnbih2ZSwgaXMpLCBPYmplY3Qua2V5cyhTdCkuZm9yRWFjaCgoZSkgPT4ge1xuICAgICAgdmVbZV0gPSBmdW5jdGlvbigpIHtcbiAgICAgICAgaWYgKG9lKVxuICAgICAgICAgIHJldHVybiBvZVtlXSguLi5hcmd1bWVudHMpO1xuICAgICAgfTtcbiAgICB9KSwgdmUuRGlzbWlzc1JlYXNvbiA9IHdlLCB2ZS52ZXJzaW9uID0gXCIxMS43LjNcIjtcbiAgICBjb25zdCBxZSA9IHZlO1xuICAgIHJldHVybiBxZS5kZWZhdWx0ID0gcWUsIHFlO1xuICB9KSwgdHlwZW9mIFggPCBcInVcIiAmJiBYLlN3ZWV0YWxlcnQyICYmIChYLnN3YWwgPSBYLnN3ZWV0QWxlcnQgPSBYLlN3YWwgPSBYLlN3ZWV0QWxlcnQgPSBYLlN3ZWV0YWxlcnQyKSwgdHlwZW9mIGRvY3VtZW50IDwgXCJ1XCIgJiYgZnVuY3Rpb24oZywgaykge1xuICAgIHZhciBUID0gZy5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gICAgaWYgKGcuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJoZWFkXCIpWzBdLmFwcGVuZENoaWxkKFQpLCBULnN0eWxlU2hlZXQpXG4gICAgICBULnN0eWxlU2hlZXQuZGlzYWJsZWQgfHwgKFQuc3R5bGVTaGVldC5jc3NUZXh0ID0gayk7XG4gICAgZWxzZVxuICAgICAgdHJ5IHtcbiAgICAgICAgVC5pbm5lckhUTUwgPSBrO1xuICAgICAgfSBjYXRjaCB7XG4gICAgICAgIFQuaW5uZXJUZXh0ID0gaztcbiAgICAgIH1cbiAgfShkb2N1bWVudCwgJy5zd2FsMi1wb3B1cC5zd2FsMi10b2FzdHtib3gtc2l6aW5nOmJvcmRlci1ib3g7Z3JpZC1jb2x1bW46MS80ICFpbXBvcnRhbnQ7Z3JpZC1yb3c6MS80ICFpbXBvcnRhbnQ7Z3JpZC10ZW1wbGF0ZS1jb2x1bW5zOm1pbi1jb250ZW50IGF1dG8gbWluLWNvbnRlbnQ7cGFkZGluZzoxZW07b3ZlcmZsb3cteTpoaWRkZW47YmFja2dyb3VuZDojZmZmO2JveC1zaGFkb3c6MCAwIDFweCByZ2JhKDAsMCwwLC4wNzUpLDAgMXB4IDJweCByZ2JhKDAsMCwwLC4wNzUpLDFweCAycHggNHB4IHJnYmEoMCwwLDAsLjA3NSksMXB4IDNweCA4cHggcmdiYSgwLDAsMCwuMDc1KSwycHggNHB4IDE2cHggcmdiYSgwLDAsMCwuMDc1KTtwb2ludGVyLWV2ZW50czphbGx9LnN3YWwyLXBvcHVwLnN3YWwyLXRvYXN0Pip7Z3JpZC1jb2x1bW46Mn0uc3dhbDItcG9wdXAuc3dhbDItdG9hc3QgLnN3YWwyLXRpdGxle21hcmdpbjouNWVtIDFlbTtwYWRkaW5nOjA7Zm9udC1zaXplOjFlbTt0ZXh0LWFsaWduOmluaXRpYWx9LnN3YWwyLXBvcHVwLnN3YWwyLXRvYXN0IC5zd2FsMi1sb2FkaW5ne2p1c3RpZnktY29udGVudDpjZW50ZXJ9LnN3YWwyLXBvcHVwLnN3YWwyLXRvYXN0IC5zd2FsMi1pbnB1dHtoZWlnaHQ6MmVtO21hcmdpbjouNWVtO2ZvbnQtc2l6ZToxZW19LnN3YWwyLXBvcHVwLnN3YWwyLXRvYXN0IC5zd2FsMi12YWxpZGF0aW9uLW1lc3NhZ2V7Zm9udC1zaXplOjFlbX0uc3dhbDItcG9wdXAuc3dhbDItdG9hc3QgLnN3YWwyLWZvb3RlcnttYXJnaW46LjVlbSAwIDA7cGFkZGluZzouNWVtIDAgMDtmb250LXNpemU6LjhlbX0uc3dhbDItcG9wdXAuc3dhbDItdG9hc3QgLnN3YWwyLWNsb3Nle2dyaWQtY29sdW1uOjMvMztncmlkLXJvdzoxLzk5O2FsaWduLXNlbGY6Y2VudGVyO3dpZHRoOi44ZW07aGVpZ2h0Oi44ZW07bWFyZ2luOjA7Zm9udC1zaXplOjJlbX0uc3dhbDItcG9wdXAuc3dhbDItdG9hc3QgLnN3YWwyLWh0bWwtY29udGFpbmVye21hcmdpbjouNWVtIDFlbTtwYWRkaW5nOjA7b3ZlcmZsb3c6aW5pdGlhbDtmb250LXNpemU6MWVtO3RleHQtYWxpZ246aW5pdGlhbH0uc3dhbDItcG9wdXAuc3dhbDItdG9hc3QgLnN3YWwyLWh0bWwtY29udGFpbmVyOmVtcHR5e3BhZGRpbmc6MH0uc3dhbDItcG9wdXAuc3dhbDItdG9hc3QgLnN3YWwyLWxvYWRlcntncmlkLWNvbHVtbjoxO2dyaWQtcm93OjEvOTk7YWxpZ24tc2VsZjpjZW50ZXI7d2lkdGg6MmVtO2hlaWdodDoyZW07bWFyZ2luOi4yNWVtfS5zd2FsMi1wb3B1cC5zd2FsMi10b2FzdCAuc3dhbDItaWNvbntncmlkLWNvbHVtbjoxO2dyaWQtcm93OjEvOTk7YWxpZ24tc2VsZjpjZW50ZXI7d2lkdGg6MmVtO21pbi13aWR0aDoyZW07aGVpZ2h0OjJlbTttYXJnaW46MCAuNWVtIDAgMH0uc3dhbDItcG9wdXAuc3dhbDItdG9hc3QgLnN3YWwyLWljb24gLnN3YWwyLWljb24tY29udGVudHtkaXNwbGF5OmZsZXg7YWxpZ24taXRlbXM6Y2VudGVyO2ZvbnQtc2l6ZToxLjhlbTtmb250LXdlaWdodDpib2xkfS5zd2FsMi1wb3B1cC5zd2FsMi10b2FzdCAuc3dhbDItaWNvbi5zd2FsMi1zdWNjZXNzIC5zd2FsMi1zdWNjZXNzLXJpbmd7d2lkdGg6MmVtO2hlaWdodDoyZW19LnN3YWwyLXBvcHVwLnN3YWwyLXRvYXN0IC5zd2FsMi1pY29uLnN3YWwyLWVycm9yIFtjbGFzc149c3dhbDIteC1tYXJrLWxpbmVde3RvcDouODc1ZW07d2lkdGg6MS4zNzVlbX0uc3dhbDItcG9wdXAuc3dhbDItdG9hc3QgLnN3YWwyLWljb24uc3dhbDItZXJyb3IgW2NsYXNzXj1zd2FsMi14LW1hcmstbGluZV1bY2xhc3MkPWxlZnRde2xlZnQ6LjMxMjVlbX0uc3dhbDItcG9wdXAuc3dhbDItdG9hc3QgLnN3YWwyLWljb24uc3dhbDItZXJyb3IgW2NsYXNzXj1zd2FsMi14LW1hcmstbGluZV1bY2xhc3MkPXJpZ2h0XXtyaWdodDouMzEyNWVtfS5zd2FsMi1wb3B1cC5zd2FsMi10b2FzdCAuc3dhbDItYWN0aW9uc3tqdXN0aWZ5LWNvbnRlbnQ6ZmxleC1zdGFydDtoZWlnaHQ6YXV0bzttYXJnaW46MDttYXJnaW4tdG9wOi41ZW07cGFkZGluZzowIC41ZW19LnN3YWwyLXBvcHVwLnN3YWwyLXRvYXN0IC5zd2FsMi1zdHlsZWR7bWFyZ2luOi4yNWVtIC41ZW07cGFkZGluZzouNGVtIC42ZW07Zm9udC1zaXplOjFlbX0uc3dhbDItcG9wdXAuc3dhbDItdG9hc3QgLnN3YWwyLXN1Y2Nlc3N7Ym9yZGVyLWNvbG9yOiNhNWRjODZ9LnN3YWwyLXBvcHVwLnN3YWwyLXRvYXN0IC5zd2FsMi1zdWNjZXNzIFtjbGFzc149c3dhbDItc3VjY2Vzcy1jaXJjdWxhci1saW5lXXtwb3NpdGlvbjphYnNvbHV0ZTt3aWR0aDoxLjZlbTtoZWlnaHQ6M2VtO3RyYW5zZm9ybTpyb3RhdGUoNDVkZWcpO2JvcmRlci1yYWRpdXM6NTAlfS5zd2FsMi1wb3B1cC5zd2FsMi10b2FzdCAuc3dhbDItc3VjY2VzcyBbY2xhc3NePXN3YWwyLXN1Y2Nlc3MtY2lyY3VsYXItbGluZV1bY2xhc3MkPWxlZnRde3RvcDotMC44ZW07bGVmdDotMC41ZW07dHJhbnNmb3JtOnJvdGF0ZSgtNDVkZWcpO3RyYW5zZm9ybS1vcmlnaW46MmVtIDJlbTtib3JkZXItcmFkaXVzOjRlbSAwIDAgNGVtfS5zd2FsMi1wb3B1cC5zd2FsMi10b2FzdCAuc3dhbDItc3VjY2VzcyBbY2xhc3NePXN3YWwyLXN1Y2Nlc3MtY2lyY3VsYXItbGluZV1bY2xhc3MkPXJpZ2h0XXt0b3A6LTAuMjVlbTtsZWZ0Oi45Mzc1ZW07dHJhbnNmb3JtLW9yaWdpbjowIDEuNWVtO2JvcmRlci1yYWRpdXM6MCA0ZW0gNGVtIDB9LnN3YWwyLXBvcHVwLnN3YWwyLXRvYXN0IC5zd2FsMi1zdWNjZXNzIC5zd2FsMi1zdWNjZXNzLXJpbmd7d2lkdGg6MmVtO2hlaWdodDoyZW19LnN3YWwyLXBvcHVwLnN3YWwyLXRvYXN0IC5zd2FsMi1zdWNjZXNzIC5zd2FsMi1zdWNjZXNzLWZpeHt0b3A6MDtsZWZ0Oi40Mzc1ZW07d2lkdGg6LjQzNzVlbTtoZWlnaHQ6Mi42ODc1ZW19LnN3YWwyLXBvcHVwLnN3YWwyLXRvYXN0IC5zd2FsMi1zdWNjZXNzIFtjbGFzc149c3dhbDItc3VjY2Vzcy1saW5lXXtoZWlnaHQ6LjMxMjVlbX0uc3dhbDItcG9wdXAuc3dhbDItdG9hc3QgLnN3YWwyLXN1Y2Nlc3MgW2NsYXNzXj1zd2FsMi1zdWNjZXNzLWxpbmVdW2NsYXNzJD10aXBde3RvcDoxLjEyNWVtO2xlZnQ6LjE4NzVlbTt3aWR0aDouNzVlbX0uc3dhbDItcG9wdXAuc3dhbDItdG9hc3QgLnN3YWwyLXN1Y2Nlc3MgW2NsYXNzXj1zd2FsMi1zdWNjZXNzLWxpbmVdW2NsYXNzJD1sb25nXXt0b3A6LjkzNzVlbTtyaWdodDouMTg3NWVtO3dpZHRoOjEuMzc1ZW19LnN3YWwyLXBvcHVwLnN3YWwyLXRvYXN0IC5zd2FsMi1zdWNjZXNzLnN3YWwyLWljb24tc2hvdyAuc3dhbDItc3VjY2Vzcy1saW5lLXRpcHthbmltYXRpb246c3dhbDItdG9hc3QtYW5pbWF0ZS1zdWNjZXNzLWxpbmUtdGlwIC43NXN9LnN3YWwyLXBvcHVwLnN3YWwyLXRvYXN0IC5zd2FsMi1zdWNjZXNzLnN3YWwyLWljb24tc2hvdyAuc3dhbDItc3VjY2Vzcy1saW5lLWxvbmd7YW5pbWF0aW9uOnN3YWwyLXRvYXN0LWFuaW1hdGUtc3VjY2Vzcy1saW5lLWxvbmcgLjc1c30uc3dhbDItcG9wdXAuc3dhbDItdG9hc3Quc3dhbDItc2hvd3thbmltYXRpb246c3dhbDItdG9hc3Qtc2hvdyAuNXN9LnN3YWwyLXBvcHVwLnN3YWwyLXRvYXN0LnN3YWwyLWhpZGV7YW5pbWF0aW9uOnN3YWwyLXRvYXN0LWhpZGUgLjFzIGZvcndhcmRzfS5zd2FsMi1jb250YWluZXJ7ZGlzcGxheTpncmlkO3Bvc2l0aW9uOmZpeGVkO3otaW5kZXg6MTA2MDt0b3A6MDtyaWdodDowO2JvdHRvbTowO2xlZnQ6MDtib3gtc2l6aW5nOmJvcmRlci1ib3g7Z3JpZC10ZW1wbGF0ZS1hcmVhczpcInRvcC1zdGFydCAgICAgdG9wICAgICAgICAgICAgdG9wLWVuZFwiIFwiY2VudGVyLXN0YXJ0ICBjZW50ZXIgICAgICAgICBjZW50ZXItZW5kXCIgXCJib3R0b20tc3RhcnQgIGJvdHRvbS1jZW50ZXIgIGJvdHRvbS1lbmRcIjtncmlkLXRlbXBsYXRlLXJvd3M6bWlubWF4KG1pbi1jb250ZW50LCBhdXRvKSBtaW5tYXgobWluLWNvbnRlbnQsIGF1dG8pIG1pbm1heChtaW4tY29udGVudCwgYXV0byk7aGVpZ2h0OjEwMCU7cGFkZGluZzouNjI1ZW07b3ZlcmZsb3cteDpoaWRkZW47dHJhbnNpdGlvbjpiYWNrZ3JvdW5kLWNvbG9yIC4xczstd2Via2l0LW92ZXJmbG93LXNjcm9sbGluZzp0b3VjaH0uc3dhbDItY29udGFpbmVyLnN3YWwyLWJhY2tkcm9wLXNob3csLnN3YWwyLWNvbnRhaW5lci5zd2FsMi1ub2FuaW1hdGlvbntiYWNrZ3JvdW5kOnJnYmEoMCwwLDAsLjQpfS5zd2FsMi1jb250YWluZXIuc3dhbDItYmFja2Ryb3AtaGlkZXtiYWNrZ3JvdW5kOnJnYmEoMCwwLDAsMCkgIWltcG9ydGFudH0uc3dhbDItY29udGFpbmVyLnN3YWwyLXRvcC1zdGFydCwuc3dhbDItY29udGFpbmVyLnN3YWwyLWNlbnRlci1zdGFydCwuc3dhbDItY29udGFpbmVyLnN3YWwyLWJvdHRvbS1zdGFydHtncmlkLXRlbXBsYXRlLWNvbHVtbnM6bWlubWF4KDAsIDFmcikgYXV0byBhdXRvfS5zd2FsMi1jb250YWluZXIuc3dhbDItdG9wLC5zd2FsMi1jb250YWluZXIuc3dhbDItY2VudGVyLC5zd2FsMi1jb250YWluZXIuc3dhbDItYm90dG9te2dyaWQtdGVtcGxhdGUtY29sdW1uczphdXRvIG1pbm1heCgwLCAxZnIpIGF1dG99LnN3YWwyLWNvbnRhaW5lci5zd2FsMi10b3AtZW5kLC5zd2FsMi1jb250YWluZXIuc3dhbDItY2VudGVyLWVuZCwuc3dhbDItY29udGFpbmVyLnN3YWwyLWJvdHRvbS1lbmR7Z3JpZC10ZW1wbGF0ZS1jb2x1bW5zOmF1dG8gYXV0byBtaW5tYXgoMCwgMWZyKX0uc3dhbDItY29udGFpbmVyLnN3YWwyLXRvcC1zdGFydD4uc3dhbDItcG9wdXB7YWxpZ24tc2VsZjpzdGFydH0uc3dhbDItY29udGFpbmVyLnN3YWwyLXRvcD4uc3dhbDItcG9wdXB7Z3JpZC1jb2x1bW46MjthbGlnbi1zZWxmOnN0YXJ0O2p1c3RpZnktc2VsZjpjZW50ZXJ9LnN3YWwyLWNvbnRhaW5lci5zd2FsMi10b3AtZW5kPi5zd2FsMi1wb3B1cCwuc3dhbDItY29udGFpbmVyLnN3YWwyLXRvcC1yaWdodD4uc3dhbDItcG9wdXB7Z3JpZC1jb2x1bW46MzthbGlnbi1zZWxmOnN0YXJ0O2p1c3RpZnktc2VsZjplbmR9LnN3YWwyLWNvbnRhaW5lci5zd2FsMi1jZW50ZXItc3RhcnQ+LnN3YWwyLXBvcHVwLC5zd2FsMi1jb250YWluZXIuc3dhbDItY2VudGVyLWxlZnQ+LnN3YWwyLXBvcHVwe2dyaWQtcm93OjI7YWxpZ24tc2VsZjpjZW50ZXJ9LnN3YWwyLWNvbnRhaW5lci5zd2FsMi1jZW50ZXI+LnN3YWwyLXBvcHVwe2dyaWQtY29sdW1uOjI7Z3JpZC1yb3c6MjthbGlnbi1zZWxmOmNlbnRlcjtqdXN0aWZ5LXNlbGY6Y2VudGVyfS5zd2FsMi1jb250YWluZXIuc3dhbDItY2VudGVyLWVuZD4uc3dhbDItcG9wdXAsLnN3YWwyLWNvbnRhaW5lci5zd2FsMi1jZW50ZXItcmlnaHQ+LnN3YWwyLXBvcHVwe2dyaWQtY29sdW1uOjM7Z3JpZC1yb3c6MjthbGlnbi1zZWxmOmNlbnRlcjtqdXN0aWZ5LXNlbGY6ZW5kfS5zd2FsMi1jb250YWluZXIuc3dhbDItYm90dG9tLXN0YXJ0Pi5zd2FsMi1wb3B1cCwuc3dhbDItY29udGFpbmVyLnN3YWwyLWJvdHRvbS1sZWZ0Pi5zd2FsMi1wb3B1cHtncmlkLWNvbHVtbjoxO2dyaWQtcm93OjM7YWxpZ24tc2VsZjplbmR9LnN3YWwyLWNvbnRhaW5lci5zd2FsMi1ib3R0b20+LnN3YWwyLXBvcHVwe2dyaWQtY29sdW1uOjI7Z3JpZC1yb3c6MztqdXN0aWZ5LXNlbGY6Y2VudGVyO2FsaWduLXNlbGY6ZW5kfS5zd2FsMi1jb250YWluZXIuc3dhbDItYm90dG9tLWVuZD4uc3dhbDItcG9wdXAsLnN3YWwyLWNvbnRhaW5lci5zd2FsMi1ib3R0b20tcmlnaHQ+LnN3YWwyLXBvcHVwe2dyaWQtY29sdW1uOjM7Z3JpZC1yb3c6MzthbGlnbi1zZWxmOmVuZDtqdXN0aWZ5LXNlbGY6ZW5kfS5zd2FsMi1jb250YWluZXIuc3dhbDItZ3Jvdy1yb3c+LnN3YWwyLXBvcHVwLC5zd2FsMi1jb250YWluZXIuc3dhbDItZ3Jvdy1mdWxsc2NyZWVuPi5zd2FsMi1wb3B1cHtncmlkLWNvbHVtbjoxLzQ7d2lkdGg6MTAwJX0uc3dhbDItY29udGFpbmVyLnN3YWwyLWdyb3ctY29sdW1uPi5zd2FsMi1wb3B1cCwuc3dhbDItY29udGFpbmVyLnN3YWwyLWdyb3ctZnVsbHNjcmVlbj4uc3dhbDItcG9wdXB7Z3JpZC1yb3c6MS80O2FsaWduLXNlbGY6c3RyZXRjaH0uc3dhbDItY29udGFpbmVyLnN3YWwyLW5vLXRyYW5zaXRpb257dHJhbnNpdGlvbjpub25lICFpbXBvcnRhbnR9LnN3YWwyLXBvcHVwe2Rpc3BsYXk6bm9uZTtwb3NpdGlvbjpyZWxhdGl2ZTtib3gtc2l6aW5nOmJvcmRlci1ib3g7Z3JpZC10ZW1wbGF0ZS1jb2x1bW5zOm1pbm1heCgwLCAxMDAlKTt3aWR0aDozMmVtO21heC13aWR0aDoxMDAlO3BhZGRpbmc6MCAwIDEuMjVlbTtib3JkZXI6bm9uZTtib3JkZXItcmFkaXVzOjVweDtiYWNrZ3JvdW5kOiNmZmY7Y29sb3I6IzU0NTQ1NDtmb250LWZhbWlseTppbmhlcml0O2ZvbnQtc2l6ZToxcmVtfS5zd2FsMi1wb3B1cDpmb2N1c3tvdXRsaW5lOm5vbmV9LnN3YWwyLXBvcHVwLnN3YWwyLWxvYWRpbmd7b3ZlcmZsb3cteTpoaWRkZW59LnN3YWwyLXRpdGxle3Bvc2l0aW9uOnJlbGF0aXZlO21heC13aWR0aDoxMDAlO21hcmdpbjowO3BhZGRpbmc6LjhlbSAxZW0gMDtjb2xvcjppbmhlcml0O2ZvbnQtc2l6ZToxLjg3NWVtO2ZvbnQtd2VpZ2h0OjYwMDt0ZXh0LWFsaWduOmNlbnRlcjt0ZXh0LXRyYW5zZm9ybTpub25lO3dvcmQtd3JhcDpicmVhay13b3JkfS5zd2FsMi1hY3Rpb25ze2Rpc3BsYXk6ZmxleDt6LWluZGV4OjE7Ym94LXNpemluZzpib3JkZXItYm94O2ZsZXgtd3JhcDp3cmFwO2FsaWduLWl0ZW1zOmNlbnRlcjtqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO3dpZHRoOmF1dG87bWFyZ2luOjEuMjVlbSBhdXRvIDA7cGFkZGluZzowfS5zd2FsMi1hY3Rpb25zOm5vdCguc3dhbDItbG9hZGluZykgLnN3YWwyLXN0eWxlZFtkaXNhYmxlZF17b3BhY2l0eTouNH0uc3dhbDItYWN0aW9uczpub3QoLnN3YWwyLWxvYWRpbmcpIC5zd2FsMi1zdHlsZWQ6aG92ZXJ7YmFja2dyb3VuZC1pbWFnZTpsaW5lYXItZ3JhZGllbnQocmdiYSgwLCAwLCAwLCAwLjEpLCByZ2JhKDAsIDAsIDAsIDAuMSkpfS5zd2FsMi1hY3Rpb25zOm5vdCguc3dhbDItbG9hZGluZykgLnN3YWwyLXN0eWxlZDphY3RpdmV7YmFja2dyb3VuZC1pbWFnZTpsaW5lYXItZ3JhZGllbnQocmdiYSgwLCAwLCAwLCAwLjIpLCByZ2JhKDAsIDAsIDAsIDAuMikpfS5zd2FsMi1sb2FkZXJ7ZGlzcGxheTpub25lO2FsaWduLWl0ZW1zOmNlbnRlcjtqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO3dpZHRoOjIuMmVtO2hlaWdodDoyLjJlbTttYXJnaW46MCAxLjg3NWVtO2FuaW1hdGlvbjpzd2FsMi1yb3RhdGUtbG9hZGluZyAxLjVzIGxpbmVhciAwcyBpbmZpbml0ZSBub3JtYWw7Ym9yZGVyLXdpZHRoOi4yNWVtO2JvcmRlci1zdHlsZTpzb2xpZDtib3JkZXItcmFkaXVzOjEwMCU7Ym9yZGVyLWNvbG9yOiMyNzc4YzQgcmdiYSgwLDAsMCwwKSAjMjc3OGM0IHJnYmEoMCwwLDAsMCl9LnN3YWwyLXN0eWxlZHttYXJnaW46LjMxMjVlbTtwYWRkaW5nOi42MjVlbSAxLjFlbTt0cmFuc2l0aW9uOmJveC1zaGFkb3cgLjFzO2JveC1zaGFkb3c6MCAwIDAgM3B4IHJnYmEoMCwwLDAsMCk7Zm9udC13ZWlnaHQ6NTAwfS5zd2FsMi1zdHlsZWQ6bm90KFtkaXNhYmxlZF0pe2N1cnNvcjpwb2ludGVyfS5zd2FsMi1zdHlsZWQuc3dhbDItY29uZmlybXtib3JkZXI6MDtib3JkZXItcmFkaXVzOi4yNWVtO2JhY2tncm91bmQ6aW5pdGlhbDtiYWNrZ3JvdW5kLWNvbG9yOiM3MDY2ZTA7Y29sb3I6I2ZmZjtmb250LXNpemU6MWVtfS5zd2FsMi1zdHlsZWQuc3dhbDItY29uZmlybTpmb2N1c3tib3gtc2hhZG93OjAgMCAwIDNweCByZ2JhKDExMiwxMDIsMjI0LC41KX0uc3dhbDItc3R5bGVkLnN3YWwyLWRlbnl7Ym9yZGVyOjA7Ym9yZGVyLXJhZGl1czouMjVlbTtiYWNrZ3JvdW5kOmluaXRpYWw7YmFja2dyb3VuZC1jb2xvcjojZGMzNzQxO2NvbG9yOiNmZmY7Zm9udC1zaXplOjFlbX0uc3dhbDItc3R5bGVkLnN3YWwyLWRlbnk6Zm9jdXN7Ym94LXNoYWRvdzowIDAgMCAzcHggcmdiYSgyMjAsNTUsNjUsLjUpfS5zd2FsMi1zdHlsZWQuc3dhbDItY2FuY2Vse2JvcmRlcjowO2JvcmRlci1yYWRpdXM6LjI1ZW07YmFja2dyb3VuZDppbml0aWFsO2JhY2tncm91bmQtY29sb3I6IzZlNzg4MTtjb2xvcjojZmZmO2ZvbnQtc2l6ZToxZW19LnN3YWwyLXN0eWxlZC5zd2FsMi1jYW5jZWw6Zm9jdXN7Ym94LXNoYWRvdzowIDAgMCAzcHggcmdiYSgxMTAsMTIwLDEyOSwuNSl9LnN3YWwyLXN0eWxlZC5zd2FsMi1kZWZhdWx0LW91dGxpbmU6Zm9jdXN7Ym94LXNoYWRvdzowIDAgMCAzcHggcmdiYSgxMDAsMTUwLDIwMCwuNSl9LnN3YWwyLXN0eWxlZDpmb2N1c3tvdXRsaW5lOm5vbmV9LnN3YWwyLXN0eWxlZDo6LW1vei1mb2N1cy1pbm5lcntib3JkZXI6MH0uc3dhbDItZm9vdGVye2p1c3RpZnktY29udGVudDpjZW50ZXI7bWFyZ2luOjFlbSAwIDA7cGFkZGluZzoxZW0gMWVtIDA7Ym9yZGVyLXRvcDoxcHggc29saWQgI2VlZTtjb2xvcjppbmhlcml0O2ZvbnQtc2l6ZToxZW19LnN3YWwyLXRpbWVyLXByb2dyZXNzLWJhci1jb250YWluZXJ7cG9zaXRpb246YWJzb2x1dGU7cmlnaHQ6MDtib3R0b206MDtsZWZ0OjA7Z3JpZC1jb2x1bW46YXV0byAhaW1wb3J0YW50O292ZXJmbG93OmhpZGRlbjtib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czo1cHg7Ym9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czo1cHh9LnN3YWwyLXRpbWVyLXByb2dyZXNzLWJhcnt3aWR0aDoxMDAlO2hlaWdodDouMjVlbTtiYWNrZ3JvdW5kOnJnYmEoMCwwLDAsLjIpfS5zd2FsMi1pbWFnZXttYXgtd2lkdGg6MTAwJTttYXJnaW46MmVtIGF1dG8gMWVtfS5zd2FsMi1jbG9zZXt6LWluZGV4OjI7YWxpZ24taXRlbXM6Y2VudGVyO2p1c3RpZnktY29udGVudDpjZW50ZXI7d2lkdGg6MS4yZW07aGVpZ2h0OjEuMmVtO21hcmdpbi10b3A6MDttYXJnaW4tcmlnaHQ6MDttYXJnaW4tYm90dG9tOi0xLjJlbTtwYWRkaW5nOjA7b3ZlcmZsb3c6aGlkZGVuO3RyYW5zaXRpb246Y29sb3IgLjFzLGJveC1zaGFkb3cgLjFzO2JvcmRlcjpub25lO2JvcmRlci1yYWRpdXM6NXB4O2JhY2tncm91bmQ6cmdiYSgwLDAsMCwwKTtjb2xvcjojY2NjO2ZvbnQtZmFtaWx5OnNlcmlmO2ZvbnQtZmFtaWx5Om1vbm9zcGFjZTtmb250LXNpemU6Mi41ZW07Y3Vyc29yOnBvaW50ZXI7anVzdGlmeS1zZWxmOmVuZH0uc3dhbDItY2xvc2U6aG92ZXJ7dHJhbnNmb3JtOm5vbmU7YmFja2dyb3VuZDpyZ2JhKDAsMCwwLDApO2NvbG9yOiNmMjc0NzR9LnN3YWwyLWNsb3NlOmZvY3Vze291dGxpbmU6bm9uZTtib3gtc2hhZG93Omluc2V0IDAgMCAwIDNweCByZ2JhKDEwMCwxNTAsMjAwLC41KX0uc3dhbDItY2xvc2U6Oi1tb3otZm9jdXMtaW5uZXJ7Ym9yZGVyOjB9LnN3YWwyLWh0bWwtY29udGFpbmVye3otaW5kZXg6MTtqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO21hcmdpbjoxZW0gMS42ZW0gLjNlbTtwYWRkaW5nOjA7b3ZlcmZsb3c6YXV0bztjb2xvcjppbmhlcml0O2ZvbnQtc2l6ZToxLjEyNWVtO2ZvbnQtd2VpZ2h0Om5vcm1hbDtsaW5lLWhlaWdodDpub3JtYWw7dGV4dC1hbGlnbjpjZW50ZXI7d29yZC13cmFwOmJyZWFrLXdvcmQ7d29yZC1icmVhazpicmVhay13b3JkfS5zd2FsMi1pbnB1dCwuc3dhbDItZmlsZSwuc3dhbDItdGV4dGFyZWEsLnN3YWwyLXNlbGVjdCwuc3dhbDItcmFkaW8sLnN3YWwyLWNoZWNrYm94e21hcmdpbjoxZW0gMmVtIDNweH0uc3dhbDItaW5wdXQsLnN3YWwyLWZpbGUsLnN3YWwyLXRleHRhcmVhe2JveC1zaXppbmc6Ym9yZGVyLWJveDt3aWR0aDphdXRvO3RyYW5zaXRpb246Ym9yZGVyLWNvbG9yIC4xcyxib3gtc2hhZG93IC4xcztib3JkZXI6MXB4IHNvbGlkICNkOWQ5ZDk7Ym9yZGVyLXJhZGl1czouMTg3NWVtO2JhY2tncm91bmQ6cmdiYSgwLDAsMCwwKTtib3gtc2hhZG93Omluc2V0IDAgMXB4IDFweCByZ2JhKDAsMCwwLC4wNiksMCAwIDAgM3B4IHJnYmEoMCwwLDAsMCk7Y29sb3I6aW5oZXJpdDtmb250LXNpemU6MS4xMjVlbX0uc3dhbDItaW5wdXQuc3dhbDItaW5wdXRlcnJvciwuc3dhbDItZmlsZS5zd2FsMi1pbnB1dGVycm9yLC5zd2FsMi10ZXh0YXJlYS5zd2FsMi1pbnB1dGVycm9ye2JvcmRlci1jb2xvcjojZjI3NDc0ICFpbXBvcnRhbnQ7Ym94LXNoYWRvdzowIDAgMnB4ICNmMjc0NzQgIWltcG9ydGFudH0uc3dhbDItaW5wdXQ6Zm9jdXMsLnN3YWwyLWZpbGU6Zm9jdXMsLnN3YWwyLXRleHRhcmVhOmZvY3Vze2JvcmRlcjoxcHggc29saWQgI2I0ZGJlZDtvdXRsaW5lOm5vbmU7Ym94LXNoYWRvdzppbnNldCAwIDFweCAxcHggcmdiYSgwLDAsMCwuMDYpLDAgMCAwIDNweCByZ2JhKDEwMCwxNTAsMjAwLC41KX0uc3dhbDItaW5wdXQ6OnBsYWNlaG9sZGVyLC5zd2FsMi1maWxlOjpwbGFjZWhvbGRlciwuc3dhbDItdGV4dGFyZWE6OnBsYWNlaG9sZGVye2NvbG9yOiNjY2N9LnN3YWwyLXJhbmdle21hcmdpbjoxZW0gMmVtIDNweDtiYWNrZ3JvdW5kOiNmZmZ9LnN3YWwyLXJhbmdlIGlucHV0e3dpZHRoOjgwJX0uc3dhbDItcmFuZ2Ugb3V0cHV0e3dpZHRoOjIwJTtjb2xvcjppbmhlcml0O2ZvbnQtd2VpZ2h0OjYwMDt0ZXh0LWFsaWduOmNlbnRlcn0uc3dhbDItcmFuZ2UgaW5wdXQsLnN3YWwyLXJhbmdlIG91dHB1dHtoZWlnaHQ6Mi42MjVlbTtwYWRkaW5nOjA7Zm9udC1zaXplOjEuMTI1ZW07bGluZS1oZWlnaHQ6Mi42MjVlbX0uc3dhbDItaW5wdXR7aGVpZ2h0OjIuNjI1ZW07cGFkZGluZzowIC43NWVtfS5zd2FsMi1maWxle3dpZHRoOjc1JTttYXJnaW4tcmlnaHQ6YXV0bzttYXJnaW4tbGVmdDphdXRvO2JhY2tncm91bmQ6cmdiYSgwLDAsMCwwKTtmb250LXNpemU6MS4xMjVlbX0uc3dhbDItdGV4dGFyZWF7aGVpZ2h0OjYuNzVlbTtwYWRkaW5nOi43NWVtfS5zd2FsMi1zZWxlY3R7bWluLXdpZHRoOjUwJTttYXgtd2lkdGg6MTAwJTtwYWRkaW5nOi4zNzVlbSAuNjI1ZW07YmFja2dyb3VuZDpyZ2JhKDAsMCwwLDApO2NvbG9yOmluaGVyaXQ7Zm9udC1zaXplOjEuMTI1ZW19LnN3YWwyLXJhZGlvLC5zd2FsMi1jaGVja2JveHthbGlnbi1pdGVtczpjZW50ZXI7anVzdGlmeS1jb250ZW50OmNlbnRlcjtiYWNrZ3JvdW5kOiNmZmY7Y29sb3I6aW5oZXJpdH0uc3dhbDItcmFkaW8gbGFiZWwsLnN3YWwyLWNoZWNrYm94IGxhYmVse21hcmdpbjowIC42ZW07Zm9udC1zaXplOjEuMTI1ZW19LnN3YWwyLXJhZGlvIGlucHV0LC5zd2FsMi1jaGVja2JveCBpbnB1dHtmbGV4LXNocmluazowO21hcmdpbjowIC40ZW19LnN3YWwyLWlucHV0LWxhYmVse2Rpc3BsYXk6ZmxleDtqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO21hcmdpbjoxZW0gYXV0byAwfS5zd2FsMi12YWxpZGF0aW9uLW1lc3NhZ2V7YWxpZ24taXRlbXM6Y2VudGVyO2p1c3RpZnktY29udGVudDpjZW50ZXI7bWFyZ2luOjFlbSAwIDA7cGFkZGluZzouNjI1ZW07b3ZlcmZsb3c6aGlkZGVuO2JhY2tncm91bmQ6I2YwZjBmMDtjb2xvcjojNjY2O2ZvbnQtc2l6ZToxZW07Zm9udC13ZWlnaHQ6MzAwfS5zd2FsMi12YWxpZGF0aW9uLW1lc3NhZ2U6OmJlZm9yZXtjb250ZW50OlwiIVwiO2Rpc3BsYXk6aW5saW5lLWJsb2NrO3dpZHRoOjEuNWVtO21pbi13aWR0aDoxLjVlbTtoZWlnaHQ6MS41ZW07bWFyZ2luOjAgLjYyNWVtO2JvcmRlci1yYWRpdXM6NTAlO2JhY2tncm91bmQtY29sb3I6I2YyNzQ3NDtjb2xvcjojZmZmO2ZvbnQtd2VpZ2h0OjYwMDtsaW5lLWhlaWdodDoxLjVlbTt0ZXh0LWFsaWduOmNlbnRlcn0uc3dhbDItaWNvbntwb3NpdGlvbjpyZWxhdGl2ZTtib3gtc2l6aW5nOmNvbnRlbnQtYm94O2p1c3RpZnktY29udGVudDpjZW50ZXI7d2lkdGg6NWVtO2hlaWdodDo1ZW07bWFyZ2luOjIuNWVtIGF1dG8gLjZlbTtib3JkZXI6MC4yNWVtIHNvbGlkIHJnYmEoMCwwLDAsMCk7Ym9yZGVyLXJhZGl1czo1MCU7Ym9yZGVyLWNvbG9yOiMwMDA7Zm9udC1mYW1pbHk6aW5oZXJpdDtsaW5lLWhlaWdodDo1ZW07Y3Vyc29yOmRlZmF1bHQ7dXNlci1zZWxlY3Q6bm9uZX0uc3dhbDItaWNvbiAuc3dhbDItaWNvbi1jb250ZW50e2Rpc3BsYXk6ZmxleDthbGlnbi1pdGVtczpjZW50ZXI7Zm9udC1zaXplOjMuNzVlbX0uc3dhbDItaWNvbi5zd2FsMi1lcnJvcntib3JkZXItY29sb3I6I2YyNzQ3NDtjb2xvcjojZjI3NDc0fS5zd2FsMi1pY29uLnN3YWwyLWVycm9yIC5zd2FsMi14LW1hcmt7cG9zaXRpb246cmVsYXRpdmU7ZmxleC1ncm93OjF9LnN3YWwyLWljb24uc3dhbDItZXJyb3IgW2NsYXNzXj1zd2FsMi14LW1hcmstbGluZV17ZGlzcGxheTpibG9jaztwb3NpdGlvbjphYnNvbHV0ZTt0b3A6Mi4zMTI1ZW07d2lkdGg6Mi45Mzc1ZW07aGVpZ2h0Oi4zMTI1ZW07Ym9yZGVyLXJhZGl1czouMTI1ZW07YmFja2dyb3VuZC1jb2xvcjojZjI3NDc0fS5zd2FsMi1pY29uLnN3YWwyLWVycm9yIFtjbGFzc149c3dhbDIteC1tYXJrLWxpbmVdW2NsYXNzJD1sZWZ0XXtsZWZ0OjEuMDYyNWVtO3RyYW5zZm9ybTpyb3RhdGUoNDVkZWcpfS5zd2FsMi1pY29uLnN3YWwyLWVycm9yIFtjbGFzc149c3dhbDIteC1tYXJrLWxpbmVdW2NsYXNzJD1yaWdodF17cmlnaHQ6MWVtO3RyYW5zZm9ybTpyb3RhdGUoLTQ1ZGVnKX0uc3dhbDItaWNvbi5zd2FsMi1lcnJvci5zd2FsMi1pY29uLXNob3d7YW5pbWF0aW9uOnN3YWwyLWFuaW1hdGUtZXJyb3ItaWNvbiAuNXN9LnN3YWwyLWljb24uc3dhbDItZXJyb3Iuc3dhbDItaWNvbi1zaG93IC5zd2FsMi14LW1hcmt7YW5pbWF0aW9uOnN3YWwyLWFuaW1hdGUtZXJyb3IteC1tYXJrIC41c30uc3dhbDItaWNvbi5zd2FsMi13YXJuaW5ne2JvcmRlci1jb2xvcjojZmFjZWE4O2NvbG9yOiNmOGJiODZ9LnN3YWwyLWljb24uc3dhbDItd2FybmluZy5zd2FsMi1pY29uLXNob3d7YW5pbWF0aW9uOnN3YWwyLWFuaW1hdGUtZXJyb3ItaWNvbiAuNXN9LnN3YWwyLWljb24uc3dhbDItd2FybmluZy5zd2FsMi1pY29uLXNob3cgLnN3YWwyLWljb24tY29udGVudHthbmltYXRpb246c3dhbDItYW5pbWF0ZS1pLW1hcmsgLjVzfS5zd2FsMi1pY29uLnN3YWwyLWluZm97Ym9yZGVyLWNvbG9yOiM5ZGUwZjY7Y29sb3I6IzNmYzNlZX0uc3dhbDItaWNvbi5zd2FsMi1pbmZvLnN3YWwyLWljb24tc2hvd3thbmltYXRpb246c3dhbDItYW5pbWF0ZS1lcnJvci1pY29uIC41c30uc3dhbDItaWNvbi5zd2FsMi1pbmZvLnN3YWwyLWljb24tc2hvdyAuc3dhbDItaWNvbi1jb250ZW50e2FuaW1hdGlvbjpzd2FsMi1hbmltYXRlLWktbWFyayAuOHN9LnN3YWwyLWljb24uc3dhbDItcXVlc3Rpb257Ym9yZGVyLWNvbG9yOiNjOWRhZTE7Y29sb3I6Izg3YWRiZH0uc3dhbDItaWNvbi5zd2FsMi1xdWVzdGlvbi5zd2FsMi1pY29uLXNob3d7YW5pbWF0aW9uOnN3YWwyLWFuaW1hdGUtZXJyb3ItaWNvbiAuNXN9LnN3YWwyLWljb24uc3dhbDItcXVlc3Rpb24uc3dhbDItaWNvbi1zaG93IC5zd2FsMi1pY29uLWNvbnRlbnR7YW5pbWF0aW9uOnN3YWwyLWFuaW1hdGUtcXVlc3Rpb24tbWFyayAuOHN9LnN3YWwyLWljb24uc3dhbDItc3VjY2Vzc3tib3JkZXItY29sb3I6I2E1ZGM4Njtjb2xvcjojYTVkYzg2fS5zd2FsMi1pY29uLnN3YWwyLXN1Y2Nlc3MgW2NsYXNzXj1zd2FsMi1zdWNjZXNzLWNpcmN1bGFyLWxpbmVde3Bvc2l0aW9uOmFic29sdXRlO3dpZHRoOjMuNzVlbTtoZWlnaHQ6Ny41ZW07dHJhbnNmb3JtOnJvdGF0ZSg0NWRlZyk7Ym9yZGVyLXJhZGl1czo1MCV9LnN3YWwyLWljb24uc3dhbDItc3VjY2VzcyBbY2xhc3NePXN3YWwyLXN1Y2Nlc3MtY2lyY3VsYXItbGluZV1bY2xhc3MkPWxlZnRde3RvcDotMC40Mzc1ZW07bGVmdDotMi4wNjM1ZW07dHJhbnNmb3JtOnJvdGF0ZSgtNDVkZWcpO3RyYW5zZm9ybS1vcmlnaW46My43NWVtIDMuNzVlbTtib3JkZXItcmFkaXVzOjcuNWVtIDAgMCA3LjVlbX0uc3dhbDItaWNvbi5zd2FsMi1zdWNjZXNzIFtjbGFzc149c3dhbDItc3VjY2Vzcy1jaXJjdWxhci1saW5lXVtjbGFzcyQ9cmlnaHRde3RvcDotMC42ODc1ZW07bGVmdDoxLjg3NWVtO3RyYW5zZm9ybTpyb3RhdGUoLTQ1ZGVnKTt0cmFuc2Zvcm0tb3JpZ2luOjAgMy43NWVtO2JvcmRlci1yYWRpdXM6MCA3LjVlbSA3LjVlbSAwfS5zd2FsMi1pY29uLnN3YWwyLXN1Y2Nlc3MgLnN3YWwyLXN1Y2Nlc3MtcmluZ3twb3NpdGlvbjphYnNvbHV0ZTt6LWluZGV4OjI7dG9wOi0wLjI1ZW07bGVmdDotMC4yNWVtO2JveC1zaXppbmc6Y29udGVudC1ib3g7d2lkdGg6MTAwJTtoZWlnaHQ6MTAwJTtib3JkZXI6LjI1ZW0gc29saWQgcmdiYSgxNjUsMjIwLDEzNCwuMyk7Ym9yZGVyLXJhZGl1czo1MCV9LnN3YWwyLWljb24uc3dhbDItc3VjY2VzcyAuc3dhbDItc3VjY2Vzcy1maXh7cG9zaXRpb246YWJzb2x1dGU7ei1pbmRleDoxO3RvcDouNWVtO2xlZnQ6MS42MjVlbTt3aWR0aDouNDM3NWVtO2hlaWdodDo1LjYyNWVtO3RyYW5zZm9ybTpyb3RhdGUoLTQ1ZGVnKX0uc3dhbDItaWNvbi5zd2FsMi1zdWNjZXNzIFtjbGFzc149c3dhbDItc3VjY2Vzcy1saW5lXXtkaXNwbGF5OmJsb2NrO3Bvc2l0aW9uOmFic29sdXRlO3otaW5kZXg6MjtoZWlnaHQ6LjMxMjVlbTtib3JkZXItcmFkaXVzOi4xMjVlbTtiYWNrZ3JvdW5kLWNvbG9yOiNhNWRjODZ9LnN3YWwyLWljb24uc3dhbDItc3VjY2VzcyBbY2xhc3NePXN3YWwyLXN1Y2Nlc3MtbGluZV1bY2xhc3MkPXRpcF17dG9wOjIuODc1ZW07bGVmdDouODEyNWVtO3dpZHRoOjEuNTYyNWVtO3RyYW5zZm9ybTpyb3RhdGUoNDVkZWcpfS5zd2FsMi1pY29uLnN3YWwyLXN1Y2Nlc3MgW2NsYXNzXj1zd2FsMi1zdWNjZXNzLWxpbmVdW2NsYXNzJD1sb25nXXt0b3A6Mi4zNzVlbTtyaWdodDouNWVtO3dpZHRoOjIuOTM3NWVtO3RyYW5zZm9ybTpyb3RhdGUoLTQ1ZGVnKX0uc3dhbDItaWNvbi5zd2FsMi1zdWNjZXNzLnN3YWwyLWljb24tc2hvdyAuc3dhbDItc3VjY2Vzcy1saW5lLXRpcHthbmltYXRpb246c3dhbDItYW5pbWF0ZS1zdWNjZXNzLWxpbmUtdGlwIC43NXN9LnN3YWwyLWljb24uc3dhbDItc3VjY2Vzcy5zd2FsMi1pY29uLXNob3cgLnN3YWwyLXN1Y2Nlc3MtbGluZS1sb25ne2FuaW1hdGlvbjpzd2FsMi1hbmltYXRlLXN1Y2Nlc3MtbGluZS1sb25nIC43NXN9LnN3YWwyLWljb24uc3dhbDItc3VjY2Vzcy5zd2FsMi1pY29uLXNob3cgLnN3YWwyLXN1Y2Nlc3MtY2lyY3VsYXItbGluZS1yaWdodHthbmltYXRpb246c3dhbDItcm90YXRlLXN1Y2Nlc3MtY2lyY3VsYXItbGluZSA0LjI1cyBlYXNlLWlufS5zd2FsMi1wcm9ncmVzcy1zdGVwc3tmbGV4LXdyYXA6d3JhcDthbGlnbi1pdGVtczpjZW50ZXI7bWF4LXdpZHRoOjEwMCU7bWFyZ2luOjEuMjVlbSBhdXRvO3BhZGRpbmc6MDtiYWNrZ3JvdW5kOnJnYmEoMCwwLDAsMCk7Zm9udC13ZWlnaHQ6NjAwfS5zd2FsMi1wcm9ncmVzcy1zdGVwcyBsaXtkaXNwbGF5OmlubGluZS1ibG9jaztwb3NpdGlvbjpyZWxhdGl2ZX0uc3dhbDItcHJvZ3Jlc3Mtc3RlcHMgLnN3YWwyLXByb2dyZXNzLXN0ZXB7ei1pbmRleDoyMDtmbGV4LXNocmluazowO3dpZHRoOjJlbTtoZWlnaHQ6MmVtO2JvcmRlci1yYWRpdXM6MmVtO2JhY2tncm91bmQ6IzI3NzhjNDtjb2xvcjojZmZmO2xpbmUtaGVpZ2h0OjJlbTt0ZXh0LWFsaWduOmNlbnRlcn0uc3dhbDItcHJvZ3Jlc3Mtc3RlcHMgLnN3YWwyLXByb2dyZXNzLXN0ZXAuc3dhbDItYWN0aXZlLXByb2dyZXNzLXN0ZXB7YmFja2dyb3VuZDojMjc3OGM0fS5zd2FsMi1wcm9ncmVzcy1zdGVwcyAuc3dhbDItcHJvZ3Jlc3Mtc3RlcC5zd2FsMi1hY3RpdmUtcHJvZ3Jlc3Mtc3RlcH4uc3dhbDItcHJvZ3Jlc3Mtc3RlcHtiYWNrZ3JvdW5kOiNhZGQ4ZTY7Y29sb3I6I2ZmZn0uc3dhbDItcHJvZ3Jlc3Mtc3RlcHMgLnN3YWwyLXByb2dyZXNzLXN0ZXAuc3dhbDItYWN0aXZlLXByb2dyZXNzLXN0ZXB+LnN3YWwyLXByb2dyZXNzLXN0ZXAtbGluZXtiYWNrZ3JvdW5kOiNhZGQ4ZTZ9LnN3YWwyLXByb2dyZXNzLXN0ZXBzIC5zd2FsMi1wcm9ncmVzcy1zdGVwLWxpbmV7ei1pbmRleDoxMDtmbGV4LXNocmluazowO3dpZHRoOjIuNWVtO2hlaWdodDouNGVtO21hcmdpbjowIC0xcHg7YmFja2dyb3VuZDojMjc3OGM0fVtjbGFzc149c3dhbDJdey13ZWJraXQtdGFwLWhpZ2hsaWdodC1jb2xvcjpyZ2JhKDAsMCwwLDApfS5zd2FsMi1zaG93e2FuaW1hdGlvbjpzd2FsMi1zaG93IC4zc30uc3dhbDItaGlkZXthbmltYXRpb246c3dhbDItaGlkZSAuMTVzIGZvcndhcmRzfS5zd2FsMi1ub2FuaW1hdGlvbnt0cmFuc2l0aW9uOm5vbmV9LnN3YWwyLXNjcm9sbGJhci1tZWFzdXJle3Bvc2l0aW9uOmFic29sdXRlO3RvcDotOTk5OXB4O3dpZHRoOjUwcHg7aGVpZ2h0OjUwcHg7b3ZlcmZsb3c6c2Nyb2xsfS5zd2FsMi1ydGwgLnN3YWwyLWNsb3Nle21hcmdpbi1yaWdodDppbml0aWFsO21hcmdpbi1sZWZ0OjB9LnN3YWwyLXJ0bCAuc3dhbDItdGltZXItcHJvZ3Jlc3MtYmFye3JpZ2h0OjA7bGVmdDphdXRvfUBrZXlmcmFtZXMgc3dhbDItdG9hc3Qtc2hvd3swJXt0cmFuc2Zvcm06dHJhbnNsYXRlWSgtMC42MjVlbSkgcm90YXRlWigyZGVnKX0zMyV7dHJhbnNmb3JtOnRyYW5zbGF0ZVkoMCkgcm90YXRlWigtMmRlZyl9NjYle3RyYW5zZm9ybTp0cmFuc2xhdGVZKDAuMzEyNWVtKSByb3RhdGVaKDJkZWcpfTEwMCV7dHJhbnNmb3JtOnRyYW5zbGF0ZVkoMCkgcm90YXRlWigwZGVnKX19QGtleWZyYW1lcyBzd2FsMi10b2FzdC1oaWRlezEwMCV7dHJhbnNmb3JtOnJvdGF0ZVooMWRlZyk7b3BhY2l0eTowfX1Aa2V5ZnJhbWVzIHN3YWwyLXRvYXN0LWFuaW1hdGUtc3VjY2Vzcy1saW5lLXRpcHswJXt0b3A6LjU2MjVlbTtsZWZ0Oi4wNjI1ZW07d2lkdGg6MH01NCV7dG9wOi4xMjVlbTtsZWZ0Oi4xMjVlbTt3aWR0aDowfTcwJXt0b3A6LjYyNWVtO2xlZnQ6LTAuMjVlbTt3aWR0aDoxLjYyNWVtfTg0JXt0b3A6MS4wNjI1ZW07bGVmdDouNzVlbTt3aWR0aDouNWVtfTEwMCV7dG9wOjEuMTI1ZW07bGVmdDouMTg3NWVtO3dpZHRoOi43NWVtfX1Aa2V5ZnJhbWVzIHN3YWwyLXRvYXN0LWFuaW1hdGUtc3VjY2Vzcy1saW5lLWxvbmd7MCV7dG9wOjEuNjI1ZW07cmlnaHQ6MS4zNzVlbTt3aWR0aDowfTY1JXt0b3A6MS4yNWVtO3JpZ2h0Oi45Mzc1ZW07d2lkdGg6MH04NCV7dG9wOi45Mzc1ZW07cmlnaHQ6MDt3aWR0aDoxLjEyNWVtfTEwMCV7dG9wOi45Mzc1ZW07cmlnaHQ6LjE4NzVlbTt3aWR0aDoxLjM3NWVtfX1Aa2V5ZnJhbWVzIHN3YWwyLXNob3d7MCV7dHJhbnNmb3JtOnNjYWxlKDAuNyl9NDUle3RyYW5zZm9ybTpzY2FsZSgxLjA1KX04MCV7dHJhbnNmb3JtOnNjYWxlKDAuOTUpfTEwMCV7dHJhbnNmb3JtOnNjYWxlKDEpfX1Aa2V5ZnJhbWVzIHN3YWwyLWhpZGV7MCV7dHJhbnNmb3JtOnNjYWxlKDEpO29wYWNpdHk6MX0xMDAle3RyYW5zZm9ybTpzY2FsZSgwLjUpO29wYWNpdHk6MH19QGtleWZyYW1lcyBzd2FsMi1hbmltYXRlLXN1Y2Nlc3MtbGluZS10aXB7MCV7dG9wOjEuMTg3NWVtO2xlZnQ6LjA2MjVlbTt3aWR0aDowfTU0JXt0b3A6MS4wNjI1ZW07bGVmdDouMTI1ZW07d2lkdGg6MH03MCV7dG9wOjIuMTg3NWVtO2xlZnQ6LTAuMzc1ZW07d2lkdGg6My4xMjVlbX04NCV7dG9wOjNlbTtsZWZ0OjEuMzEyNWVtO3dpZHRoOjEuMDYyNWVtfTEwMCV7dG9wOjIuODEyNWVtO2xlZnQ6LjgxMjVlbTt3aWR0aDoxLjU2MjVlbX19QGtleWZyYW1lcyBzd2FsMi1hbmltYXRlLXN1Y2Nlc3MtbGluZS1sb25nezAle3RvcDozLjM3NWVtO3JpZ2h0OjIuODc1ZW07d2lkdGg6MH02NSV7dG9wOjMuMzc1ZW07cmlnaHQ6Mi44NzVlbTt3aWR0aDowfTg0JXt0b3A6Mi4xODc1ZW07cmlnaHQ6MDt3aWR0aDozLjQzNzVlbX0xMDAle3RvcDoyLjM3NWVtO3JpZ2h0Oi41ZW07d2lkdGg6Mi45Mzc1ZW19fUBrZXlmcmFtZXMgc3dhbDItcm90YXRlLXN1Y2Nlc3MtY2lyY3VsYXItbGluZXswJXt0cmFuc2Zvcm06cm90YXRlKC00NWRlZyl9NSV7dHJhbnNmb3JtOnJvdGF0ZSgtNDVkZWcpfTEyJXt0cmFuc2Zvcm06cm90YXRlKC00MDVkZWcpfTEwMCV7dHJhbnNmb3JtOnJvdGF0ZSgtNDA1ZGVnKX19QGtleWZyYW1lcyBzd2FsMi1hbmltYXRlLWVycm9yLXgtbWFya3swJXttYXJnaW4tdG9wOjEuNjI1ZW07dHJhbnNmb3JtOnNjYWxlKDAuNCk7b3BhY2l0eTowfTUwJXttYXJnaW4tdG9wOjEuNjI1ZW07dHJhbnNmb3JtOnNjYWxlKDAuNCk7b3BhY2l0eTowfTgwJXttYXJnaW4tdG9wOi0wLjM3NWVtO3RyYW5zZm9ybTpzY2FsZSgxLjE1KX0xMDAle21hcmdpbi10b3A6MDt0cmFuc2Zvcm06c2NhbGUoMSk7b3BhY2l0eToxfX1Aa2V5ZnJhbWVzIHN3YWwyLWFuaW1hdGUtZXJyb3ItaWNvbnswJXt0cmFuc2Zvcm06cm90YXRlWCgxMDBkZWcpO29wYWNpdHk6MH0xMDAle3RyYW5zZm9ybTpyb3RhdGVYKDBkZWcpO29wYWNpdHk6MX19QGtleWZyYW1lcyBzd2FsMi1yb3RhdGUtbG9hZGluZ3swJXt0cmFuc2Zvcm06cm90YXRlKDBkZWcpfTEwMCV7dHJhbnNmb3JtOnJvdGF0ZSgzNjBkZWcpfX1Aa2V5ZnJhbWVzIHN3YWwyLWFuaW1hdGUtcXVlc3Rpb24tbWFya3swJXt0cmFuc2Zvcm06cm90YXRlWSgtMzYwZGVnKX0xMDAle3RyYW5zZm9ybTpyb3RhdGVZKDApfX1Aa2V5ZnJhbWVzIHN3YWwyLWFuaW1hdGUtaS1tYXJrezAle3RyYW5zZm9ybTpyb3RhdGVaKDQ1ZGVnKTtvcGFjaXR5OjB9MjUle3RyYW5zZm9ybTpyb3RhdGVaKC0yNWRlZyk7b3BhY2l0eTouNH01MCV7dHJhbnNmb3JtOnJvdGF0ZVooMTVkZWcpO29wYWNpdHk6Ljh9NzUle3RyYW5zZm9ybTpyb3RhdGVaKC01ZGVnKTtvcGFjaXR5OjF9MTAwJXt0cmFuc2Zvcm06cm90YXRlWCgwKTtvcGFjaXR5OjF9fWJvZHkuc3dhbDItc2hvd246bm90KC5zd2FsMi1uby1iYWNrZHJvcCk6bm90KC5zd2FsMi10b2FzdC1zaG93bil7b3ZlcmZsb3c6aGlkZGVufWJvZHkuc3dhbDItaGVpZ2h0LWF1dG97aGVpZ2h0OmF1dG8gIWltcG9ydGFudH1ib2R5LnN3YWwyLW5vLWJhY2tkcm9wIC5zd2FsMi1jb250YWluZXJ7YmFja2dyb3VuZC1jb2xvcjpyZ2JhKDAsMCwwLDApICFpbXBvcnRhbnQ7cG9pbnRlci1ldmVudHM6bm9uZX1ib2R5LnN3YWwyLW5vLWJhY2tkcm9wIC5zd2FsMi1jb250YWluZXIgLnN3YWwyLXBvcHVwe3BvaW50ZXItZXZlbnRzOmFsbH1ib2R5LnN3YWwyLW5vLWJhY2tkcm9wIC5zd2FsMi1jb250YWluZXIgLnN3YWwyLW1vZGFse2JveC1zaGFkb3c6MCAwIDEwcHggcmdiYSgwLDAsMCwuNCl9QG1lZGlhIHByaW50e2JvZHkuc3dhbDItc2hvd246bm90KC5zd2FsMi1uby1iYWNrZHJvcCk6bm90KC5zd2FsMi10b2FzdC1zaG93bil7b3ZlcmZsb3cteTpzY3JvbGwgIWltcG9ydGFudH1ib2R5LnN3YWwyLXNob3duOm5vdCguc3dhbDItbm8tYmFja2Ryb3ApOm5vdCguc3dhbDItdG9hc3Qtc2hvd24pPlthcmlhLWhpZGRlbj10cnVlXXtkaXNwbGF5Om5vbmV9Ym9keS5zd2FsMi1zaG93bjpub3QoLnN3YWwyLW5vLWJhY2tkcm9wKTpub3QoLnN3YWwyLXRvYXN0LXNob3duKSAuc3dhbDItY29udGFpbmVye3Bvc2l0aW9uOnN0YXRpYyAhaW1wb3J0YW50fX1ib2R5LnN3YWwyLXRvYXN0LXNob3duIC5zd2FsMi1jb250YWluZXJ7Ym94LXNpemluZzpib3JkZXItYm94O3dpZHRoOjM2MHB4O21heC13aWR0aDoxMDAlO2JhY2tncm91bmQtY29sb3I6cmdiYSgwLDAsMCwwKTtwb2ludGVyLWV2ZW50czpub25lfWJvZHkuc3dhbDItdG9hc3Qtc2hvd24gLnN3YWwyLWNvbnRhaW5lci5zd2FsMi10b3B7dG9wOjA7cmlnaHQ6YXV0bztib3R0b206YXV0bztsZWZ0OjUwJTt0cmFuc2Zvcm06dHJhbnNsYXRlWCgtNTAlKX1ib2R5LnN3YWwyLXRvYXN0LXNob3duIC5zd2FsMi1jb250YWluZXIuc3dhbDItdG9wLWVuZCxib2R5LnN3YWwyLXRvYXN0LXNob3duIC5zd2FsMi1jb250YWluZXIuc3dhbDItdG9wLXJpZ2h0e3RvcDowO3JpZ2h0OjA7Ym90dG9tOmF1dG87bGVmdDphdXRvfWJvZHkuc3dhbDItdG9hc3Qtc2hvd24gLnN3YWwyLWNvbnRhaW5lci5zd2FsMi10b3Atc3RhcnQsYm9keS5zd2FsMi10b2FzdC1zaG93biAuc3dhbDItY29udGFpbmVyLnN3YWwyLXRvcC1sZWZ0e3RvcDowO3JpZ2h0OmF1dG87Ym90dG9tOmF1dG87bGVmdDowfWJvZHkuc3dhbDItdG9hc3Qtc2hvd24gLnN3YWwyLWNvbnRhaW5lci5zd2FsMi1jZW50ZXItc3RhcnQsYm9keS5zd2FsMi10b2FzdC1zaG93biAuc3dhbDItY29udGFpbmVyLnN3YWwyLWNlbnRlci1sZWZ0e3RvcDo1MCU7cmlnaHQ6YXV0bztib3R0b206YXV0bztsZWZ0OjA7dHJhbnNmb3JtOnRyYW5zbGF0ZVkoLTUwJSl9Ym9keS5zd2FsMi10b2FzdC1zaG93biAuc3dhbDItY29udGFpbmVyLnN3YWwyLWNlbnRlcnt0b3A6NTAlO3JpZ2h0OmF1dG87Ym90dG9tOmF1dG87bGVmdDo1MCU7dHJhbnNmb3JtOnRyYW5zbGF0ZSgtNTAlLCAtNTAlKX1ib2R5LnN3YWwyLXRvYXN0LXNob3duIC5zd2FsMi1jb250YWluZXIuc3dhbDItY2VudGVyLWVuZCxib2R5LnN3YWwyLXRvYXN0LXNob3duIC5zd2FsMi1jb250YWluZXIuc3dhbDItY2VudGVyLXJpZ2h0e3RvcDo1MCU7cmlnaHQ6MDtib3R0b206YXV0bztsZWZ0OmF1dG87dHJhbnNmb3JtOnRyYW5zbGF0ZVkoLTUwJSl9Ym9keS5zd2FsMi10b2FzdC1zaG93biAuc3dhbDItY29udGFpbmVyLnN3YWwyLWJvdHRvbS1zdGFydCxib2R5LnN3YWwyLXRvYXN0LXNob3duIC5zd2FsMi1jb250YWluZXIuc3dhbDItYm90dG9tLWxlZnR7dG9wOmF1dG87cmlnaHQ6YXV0bztib3R0b206MDtsZWZ0OjB9Ym9keS5zd2FsMi10b2FzdC1zaG93biAuc3dhbDItY29udGFpbmVyLnN3YWwyLWJvdHRvbXt0b3A6YXV0bztyaWdodDphdXRvO2JvdHRvbTowO2xlZnQ6NTAlO3RyYW5zZm9ybTp0cmFuc2xhdGVYKC01MCUpfWJvZHkuc3dhbDItdG9hc3Qtc2hvd24gLnN3YWwyLWNvbnRhaW5lci5zd2FsMi1ib3R0b20tZW5kLGJvZHkuc3dhbDItdG9hc3Qtc2hvd24gLnN3YWwyLWNvbnRhaW5lci5zd2FsMi1ib3R0b20tcmlnaHR7dG9wOmF1dG87cmlnaHQ6MDtib3R0b206MDtsZWZ0OmF1dG99Jyk7XG59KShScyk7XG5jb25zdCBVcyA9IGV0LCBFZSA9IChwLCBDID0gITApID0+IHtcbiAgIUxzKCkuc2hvd05vdGlmaWNhdGlvbnMgfHwgIUMgfHwgVXMuZmlyZShwKTtcbn07XG5sZXQgeiA9IHt9O1xuY29uc3QgSHQgPSAoKSA9PiB7XG4gIHogPSB7fTtcbn07XG5sZXQgSiA9IHt9O1xuY29uc3QgenQgPSAoKSA9PiB7XG4gIEogPSB7fTtcbn0sIGxlID0gb3QoXCJkaXNjb25uZWN0ZWRcIiksIHR0ID0gb3QobnVsbCksIHN0ID0gb3QoITEpLCBEcyA9ICgpID0+IHtcbiAgY2xlYXJUaW1lb3V0KHR0LnZhbHVlKTtcbiAgY29uc3QgcCA9IGdlKCk7XG4gIGxlLnZhbHVlID0gXCJjb25uZWN0ZWRcIiwgc3QudmFsdWUgPSAhMCwgY29uc29sZS5sb2coXCIlY21xdHQgY29ubmVjdGVkXCIsIFwiY29sb3I6Z3JlZW5cIik7XG4gIGZvciAoY29uc3QgQyBvZiBPYmplY3Qua2V5cyhKKSkge1xuICAgIHpbQ10gfHwgKHpbQ10gPSBbXSksIHAuc3Vic2NyaWJlKEMpO1xuICAgIGZvciAoY29uc3QgZyBvZiBKW0NdKVxuICAgICAgeltDXS5wdXNoKGcpO1xuICB9XG4gIHp0KCksIEVlKHtcbiAgICB0aXRsZTogXCJDb25uZWN0ZWRcIixcbiAgICB0ZXh0OiBcIk1xdHQgQ29ubmVjdGVkXCIsXG4gICAgaWNvbjogXCJzdWNjZXNzXCIsXG4gICAgdGltZXI6IDE1MDAsXG4gICAgdGltZXJQcm9ncmVzc0JhcjogITBcbiAgfSk7XG59LCAkcyA9IChwKSA9PiB7XG4gIGNvbnN0IEMgPSBnZSgpO1xuICBsZS52YWx1ZSA9IFwiZGlzY29ubmVjdGVkXCI7XG4gIGZvciAoY29uc3QgZyBvZiBPYmplY3Qua2V5cyh6KSkge1xuICAgIEpbZ10gfHwgKEpbZ10gPSBbXSk7XG4gICAgZm9yIChjb25zdCBrIG9mIHpbZ10pXG4gICAgICBKW2ddLnB1c2goayk7XG4gIH1cbiAgSHQoKSwgcC5lcnJvckNvZGUgIT09IDAgJiYgRWUoe1xuICAgIHRpdGxlOiBcIkVycm9yXCIsXG4gICAgdGV4dDogXCJNUVRUIGNvbm5lY3Rpb24gbG9zdFwiLFxuICAgIGljb246IFwiZXJyb3JcIlxuICB9KSwgY29uc29sZS5sb2coXCIlY21xdHQgZGlzY29ubmVjdGVkXCIsIFwiY29sb3I6cmVkO1wiKSwgc3QudmFsdWUgJiYgKGNvbnNvbGUud2FybihcIiVjbXF0dCBjb25uZWN0aW9uIGxvc3RcIiwgXCJjb2xvcjpyZWQ7XCIpLCBzZXRUaW1lb3V0KGFzeW5jICgpID0+IHtcbiAgICAoIUMgfHwgIUMuaXNDb25uZWN0ZWQoKSkgJiYgKGF3YWl0IGl0KCksIGNvbnNvbGUudGltZUVuZChcInJlY29ubmVjdGluZy4uLlwiKSk7XG4gIH0sICQoKS5yZWNvbm5lY3RUaW1lb3V0KSk7XG59LCBGcyA9ICgpID0+IHtcbiAgbGUudmFsdWUgPSBcImVycm9yXCIsIGNvbnNvbGUubG9nKFwiJWNtcXR0IGZhaWxlZCB0byBjb25uZWN0XCIsIFwiY29sb3I6cmVkXCIpLCBFZSh7XG4gICAgdGl0bGU6IFwiTXF0dCBFcnJvclwiLFxuICAgIHRleHQ6IFwiTVFUVCBmYWlsZWQgdG8gY29ubmVjdFwiLFxuICAgIGljb246IFwiZXJyb3JcIlxuICB9KTtcbn0sIFZzID0gKHApID0+IHtcbiAgY29uc3QgQyA9IHAuZGVzdGluYXRpb25OYW1lLCBnID0gcC5wYXlsb2FkU3RyaW5nLnJlcGxhY2UoL1xcMC4qJC9nLCBcIlwiKS50cmltKCk7XG4gIHpbQ10gPyB6W0NdLmZvckVhY2goKGspID0+IHtcbiAgICBrICYmIGsoZyk7XG4gIH0pIDogY29uc29sZS53YXJuKFwiVW5oYW5kbGVkIHRvcGljIVwiLCBDLCBnKTtcbn0sIG50ID0gKCkgPT4ge1xuICBzdC52YWx1ZSA9ICExO1xuICBjb25zdCBwID0gZ2UoKTtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChDLCBnKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIHAuZGlzY29ubmVjdCgpLCBDKCEwKTtcbiAgICB9IGNhdGNoIChrKSB7XG4gICAgICBnKGspLCBjb25zb2xlLmVycm9yKGspLCBsZS52YWx1ZSA9IFwiZXJyb3JcIiwgayBpbnN0YW5jZW9mIEVycm9yICYmIEVlKHtcbiAgICAgICAgdGl0bGU6IFwiRXJyb3JcIixcbiAgICAgICAgdGV4dDogay5tZXNzYWdlLFxuICAgICAgICBpY29uOiBcImVycm9yXCJcbiAgICAgIH0pO1xuICAgIH1cbiAgfSk7XG59LCBpdCA9ICh7XG4gIG9uQ29ubmVjdDogcCxcbiAgb25GYWlsdXJlOiBDLFxuICBvbkNvbm5lY3Rpb25Mb3N0OiBnLFxuICBvbk1lc3NhZ2VBcnJpdmVkOiBrXG59ID0ge30pID0+IHtcbiAgY29uc3QgVCA9ICQoKTtcbiAgbGUudmFsdWUgPT09IFwiY29ubmVjdGVkXCIgJiYgbnQoKSwgbGUudmFsdWUgPSBcImNvbm5lY3RpbmdcIiwgdHQudmFsdWUgPSBzZXRUaW1lb3V0KGFzeW5jICgpID0+IHtcbiAgICBsZS52YWx1ZSA9IFwiZXJyb3JcIiwgYXdhaXQgbnQoKSwgRWUoe1xuICAgICAgdGl0bGU6IFwiTXF0dCBFcnJvclwiLFxuICAgICAgdGV4dDogXCJCcm9rZXIgY29ubmVjdGlvbiB0aW1lZCBvdXQhXCIsXG4gICAgICBpY29uOiBcImVycm9yXCJcbiAgICB9KTtcbiAgfSwgVC53YXRjaGRvZ1RpbWVvdXQpO1xuICBjb25zdCByID0gcXMoKTtcbiAgcmV0dXJuIHIub25Db25uZWN0aW9uTG9zdCA9IChxKSA9PiB7XG4gICAgJHMocSksIGcgJiYgZyhxKTtcbiAgfSwgci5vbk1lc3NhZ2VBcnJpdmVkID0gKHEpID0+IHtcbiAgICBWcyhxKSwgayAmJiBrKHEpO1xuICB9LCBuZXcgUHJvbWlzZSgocSwgRSkgPT4ge1xuICAgIHRyeSB7XG4gICAgICByLmNvbm5lY3Qoe1xuICAgICAgICB1c2VyTmFtZTogVC51c2VybmFtZSA/PyBcIlwiLFxuICAgICAgICBwYXNzd29yZDogVC5wYXNzd29yZCA/PyBcIlwiLFxuICAgICAgICB1c2VTU0w6IFQudXNlU1NMID8/ICExLFxuICAgICAgICB1cmlzOiBbXG4gICAgICAgICAgYHdzczovLyR7VC5ob3N0fToke1QucG9ydH0vbXF0dGAsXG4gICAgICAgICAgYHdzOi8vJHtULmhvc3R9OiR7VC5wb3J0fS9tcXR0YFxuICAgICAgICBdLFxuICAgICAgICBvblN1Y2Nlc3M6ICgpID0+IHtcbiAgICAgICAgICBxKCEwKSwgRHMoKSwgcCAmJiBwKCk7XG4gICAgICAgIH0sXG4gICAgICAgIG9uRmFpbHVyZTogKCkgPT4ge1xuICAgICAgICAgIEUoKSwgRnMoKSwgQyAmJiBDKCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0gY2F0Y2ggKGVlKSB7XG4gICAgICBFKGVlKSwgY29uc29sZS5lcnJvcihlZSksIGxlLnZhbHVlID0gXCJlcnJvclwiLCBlZSBpbnN0YW5jZW9mIEVycm9yICYmIEVlKHtcbiAgICAgICAgdGl0bGU6IFwiRXJyb3JcIixcbiAgICAgICAgdGV4dDogZWUubWVzc2FnZSxcbiAgICAgICAgaWNvbjogXCJlcnJvclwiXG4gICAgICB9KSwgY2xlYXJUaW1lb3V0KHR0LnZhbHVlKTtcbiAgICB9XG4gIH0pO1xufSwganMgPSAocCwgQywgZyA9ICEwKSA9PiB7XG4gIGNvbnN0IGsgPSAkKCksIFQgPSBnZSgpO1xuICBwID0gZyAmJiBrLmVuYWJsZU1haW5Ub3BpYyA/IGAke2subWFpblRvcGljfS8ke3B9YCA6IHA7XG4gIHRyeSB7XG4gICAgVCAmJiBULmlzQ29ubmVjdGVkKCkgPyAoeltwXSB8fCAoeltwXSA9IFtdKSwgeltwXS5wdXNoKEMpLCBULnN1YnNjcmliZShwKSkgOiBUICYmICFULmlzQ29ubmVjdGVkKCkgJiYgKEpbcF0gfHwgKEpbcF0gPSBbXSksIEpbcF0ucHVzaChDKSk7XG4gIH0gY2F0Y2ggKHIpIHtcbiAgICByIGluc3RhbmNlb2YgRXJyb3IgJiYgY29uc29sZS5lcnJvcihyLm1lc3NhZ2UpO1xuICB9XG59LCBIcyA9IChwLCBDID0gITApID0+IHtcbiAgY29uc3QgZyA9ICQoKSwgayA9IGdlKCk7XG4gIHAgPSBDICYmIGcuZW5hYmxlTWFpblRvcGljID8gYCR7Zy5tYWluVG9waWN9LyR7cH1gIDogcCwgeltwXSAmJiBkZWxldGUgeltwXSwgSltwXSAmJiBkZWxldGUgSltwXSwgayAmJiBrLmlzQ29ubmVjdGVkKCkgJiYgay51bnN1YnNjcmliZShwKTtcbn0sIHpzID0gKHAsIEMsIGcsIGsgPSAhMCkgPT4ge1xuICBjb25zdCBUID0gJCgpLCByID0gZ2UoKTtcbiAgaWYgKHAgPSBrICYmIFQuZW5hYmxlTWFpblRvcGljID8gYCR7VC5tYWluVG9waWN9LyR7cH1gIDogcCwgciAmJiByLmlzQ29ubmVjdGVkKCkpXG4gICAgdHJ5IHtcbiAgICAgIHIuc2VuZChwLCBDLCBWdFtnXS5xb3MsIFZ0W2ddLnJldCk7XG4gICAgfSBjYXRjaCAocSkge1xuICAgICAgaWYgKHEgaW5zdGFuY2VvZiBFcnJvcilcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKHEubWVzc2FnZSk7XG4gICAgfVxufSwgS3MgPSAoKSA9PiB7XG4gIGNvbnN0IHAgPSB7XG4gICAgLi4uT2JqZWN0LmtleXMoSiksXG4gICAgLi4uT2JqZWN0LmtleXMoeilcbiAgfSwgQyA9IGdlKCk7XG4gIGZvciAoY29uc3QgZyBpbiBPYmplY3Qua2V5cyhwKSlcbiAgICBpZiAoQyAmJiBDLmlzQ29ubmVjdGVkKCkpXG4gICAgICB0cnkge1xuICAgICAgICBDLnVuc3Vic2NyaWJlKHBbZ10pO1xuICAgICAgfSBjYXRjaCAoaykge1xuICAgICAgICBrIGluc3RhbmNlb2YgRXJyb3IgJiYgY29uc29sZS5lcnJvcihrLm1lc3NhZ2UpO1xuICAgICAgfVxuICBIdCgpLCB6dCgpO1xufSwgV3MgPSAocCkgPT4ge1xuICBjb25zdCBDID0gJCgpO1xuICByZXR1cm4gcCAhPT0gdm9pZCAwID8gQy5ob3N0ID0gcCA6IEMuaG9zdDtcbn0sIFFzID0gKHApID0+IHtcbiAgY29uc3QgQyA9ICQoKTtcbiAgcmV0dXJuIHAgIT09IHZvaWQgMCA/IEMucG9ydCA9IHAgOiBDLnBvcnQ7XG59LCBHcyA9IChwKSA9PiB7XG4gIGNvbnN0IEMgPSAkKCk7XG4gIHJldHVybiBwICE9PSB2b2lkIDAgPyBDLnVzZVNTTCA9IHAgOiBDLnVzZVNTTDtcbn0sIFlzID0gKHApID0+IHtcbiAgY29uc3QgQyA9ICQoKTtcbiAgcmV0dXJuIHAgIT09IHZvaWQgMCA/IEMuY2xpZW50SWQgPSBwIDogQy5jbGllbnRJZDtcbn0sIEpzID0gKHApID0+IHtcbiAgY29uc3QgQyA9ICQoKTtcbiAgcmV0dXJuIHAgIT09IHZvaWQgMCA/IEMubWFpblRvcGljID0gcCA6IEMubWFpblRvcGljO1xufSwgWnMgPSAoKSA9PiBsZS52YWx1ZSwgWHMgPSB7XG4gIGNvbm5lY3Q6IGl0LFxuICBkaXNjb25uZWN0OiBudCxcbiAgc3Vic2NyaWJlOiBqcyxcbiAgcHVibGlzaDogenMsXG4gIGhvc3Q6IFdzLFxuICBwb3J0OiBRcyxcbiAgdXNlU1NMOiBHcyxcbiAgY2xpZW50SWQ6IFlzLFxuICBtYWluVG9waWM6IEpzLFxuICB1bnN1YnNjcmliZTogSHMsXG4gIHVuc3Vic2NyaWJlQWxsOiBLcyxcbiAgc3RhdHVzOiBac1xufSwgdGkgPSAocCkgPT4gKEMpID0+IHtcbiAgY29uc3QgZyA9IEJzKHAuUGx1Z2luT3B0aW9ucyk7XG4gIE5zKHAuTXF0dE9wdGlvbnMpLCBnLmF1dG9Db25uZWN0ICYmIGl0KCksIEMuY29uZmlnLmdsb2JhbFByb3BlcnRpZXMuJG1xdHQgPSBYcztcbn07XG5leHBvcnQge1xuICBYcyBhcyAkbXF0dCxcbiAgdGkgYXMgY3JlYXRlUGFob01xdHRQbHVnaW5cbn07XG4iXSwibmFtZXMiOlsianQiLCJvdCJdLCJtYXBwaW5ncyI6IjtBQUNBLE1BQU0sS0FBSztBQUFBLEVBQ1QsR0FBRztBQUFBLElBQ0QsS0FBSztBQUFBLElBQ0wsS0FBSztBQUFBLEVBQ047QUFBQSxFQUNELElBQUk7QUFBQSxJQUNGLEtBQUs7QUFBQSxJQUNMLEtBQUs7QUFBQSxFQUNOO0FBQUEsRUFDRCxHQUFHO0FBQUEsSUFDRCxLQUFLO0FBQUEsSUFDTCxLQUFLO0FBQUEsRUFDTjtBQUFBLEVBQ0QsSUFBSTtBQUFBLElBQ0YsS0FBSztBQUFBLElBQ0wsS0FBSztBQUFBLEVBQ047QUFBQSxFQUNELEdBQUc7QUFBQSxJQUNELEtBQUs7QUFBQSxJQUNMLEtBQUs7QUFBQSxFQUNOO0FBQUEsRUFDRCxLQUFLO0FBQUEsSUFDSCxLQUFLO0FBQUEsSUFDTCxLQUFLO0FBQUEsRUFDTjtBQUNILEdBQUcsS0FBSztBQUFBLEVBQ04sbUJBQW1CO0FBQUEsRUFDbkIsYUFBYTtBQUNmLEdBQUcsS0FBSztBQUFBLEVBQ04sTUFBTTtBQUFBLEVBQ04sTUFBTTtBQUFBLEVBQ04sVUFBVTtBQUFBLEVBQ1YsVUFBVTtBQUFBLEVBQ1YsUUFBUTtBQUFBLEVBQ1IsVUFBVSxZQUFZLEtBQUssT0FBUSxJQUFHLElBQUk7QUFBQSxFQUMxQyxXQUFXO0FBQUEsRUFDWCxpQkFBaUI7QUFBQSxFQUNqQixpQkFBaUI7QUFBQSxFQUNqQixrQkFBa0I7QUFDcEI7QUFDQSxJQUFJLEtBQUs7QUFDVCxNQUFNLEtBQUssQ0FBQyxPQUFPLEtBQUssRUFBRSxHQUFHLElB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
