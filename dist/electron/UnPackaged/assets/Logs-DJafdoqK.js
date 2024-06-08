import { Q as QInput } from "./QInput-CBMD31rT.js";
import { Q as QBtn } from "./QBtn-4EkWpof7.js";
import { a as QCardSection, Q as QCard } from "./QCard-BKYcNGql.js";
import { Q as QPage } from "./QPage-Dd92lxwb.js";
import { X as Xs } from "./vue-paho-mqtt-CUGGazPb.js";
import { L as defineComponent, r as ref, _ as _export_sfc, F as openBlock, G as createBlock, H as withCtx, K as createBaseVNode, I as createVNode, M as createElementBlock, P as renderList, O as Fragment, N as toDisplayString, S as pushScopeId, T as popScopeId } from "./index-B8gzy2O7.js";
import "./use-key-composition-DYeyzAGI.js";
import "./vm-DaVx61Sd.js";
import "./render-DVgBXDT_.js";
import "./use-dark-DbAZm5oa.js";
const _sfc_main = defineComponent({
  name: "LogsPage",
  setup() {
    const messageToSend = ref("");
    const receivedDebug = ref([]);
    const receivedMeasurements = ref([]);
    const DebugTopic = ref("linearRailControl/debug");
    const MeasurementsTopic = ref("linearRailControl/measurements");
    Xs.subscribe(DebugTopic.value, (data) => {
      receivedDebug.value.push(data);
      console.log(data);
    });
    Xs.subscribe(MeasurementsTopic.value, (data) => {
      receivedMeasurements.value.push(data);
      console.log(data);
    });
    const sendMessage = () => {
      if (messageToSend.value.trim() !== "") {
        Xs.publish(DebugTopic.value, messageToSend.value, "Qr");
        console.log(messageToSend.value);
        messageToSend.value = "";
      }
    };
    return { messageToSend, receivedDebug, receivedMeasurements, sendMessage };
  }
});
const _withScopeId = (n) => (pushScopeId("data-v-1294b459"), n = n(), popScopeId(), n);
const _hoisted_1 = {
  id: "parent",
  class: "fit row wrap justify-around content-start",
  style: { "overflow": "hidden" }
};
const _hoisted_2 = { class: "col-grow bg-grey-6 child-container" };
const _hoisted_3 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("h6", null, "Received Debug:", -1));
const _hoisted_4 = { class: "col-grow bg-grey-6 child-container" };
const _hoisted_5 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("h6", null, "Received Measurements:", -1));
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock(QPage, { padding: "" }, {
    default: withCtx(() => [
      createBaseVNode("div", null, [
        createVNode(QInput, {
          modelValue: _ctx.messageToSend,
          "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => _ctx.messageToSend = $event),
          label: "Message to send"
        }, null, 8, ["modelValue"]),
        createVNode(QBtn, {
          onClick: _ctx.sendMessage,
          label: "Send Message"
        }, null, 8, ["onClick"])
      ]),
      createBaseVNode("div", _hoisted_1, [
        createBaseVNode("div", _hoisted_2, [
          createVNode(QCard, { class: "no-border-radius" }, {
            default: withCtx(() => [
              createVNode(QCardSection, null, {
                default: withCtx(() => [
                  _hoisted_3,
                  createBaseVNode("ul", null, [
                    (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.receivedDebug, (message, index) => {
                      return openBlock(), createElementBlock("li", { key: index }, toDisplayString(message), 1);
                    }), 128))
                  ])
                ]),
                _: 1
              })
            ]),
            _: 1
          })
        ]),
        createBaseVNode("div", _hoisted_4, [
          createVNode(QCard, { class: "no-border-radius" }, {
            default: withCtx(() => [
              createVNode(QCardSection, null, {
                default: withCtx(() => [
                  _hoisted_5,
                  createBaseVNode("ul", null, [
                    (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.receivedMeasurements, (message, index) => {
                      return openBlock(), createElementBlock("li", { key: index }, toDisplayString(message), 1);
                    }), 128))
                  ])
                ]),
                _: 1
              })
            ]),
            _: 1
          })
        ])
      ])
    ]),
    _: 1
  });
}
const Logs = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-1294b459"], ["__file", "Logs.vue"]]);
export {
  Logs as default
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTG9ncy1ESmFmZG9xSy5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL3BhZ2VzL0xvZ3MudnVlIiwiLi4vLi4vLi4vLi4vc3JjL3BhZ2VzL0xvZ3MudnVlIl0sInNvdXJjZXNDb250ZW50IjpbIjxzY3JpcHQgbGFuZz1cInRzXCI+XG5pbXBvcnQgeyBkZWZpbmVDb21wb25lbnQsIHJlZiB9IGZyb20gJ3Z1ZSc7XG5pbXBvcnQgeyRtcXR0fSBmcm9tIFwidnVlLXBhaG8tbXF0dFwiO1xuXG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbXBvbmVudCh7XG4gIG5hbWU6ICdMb2dzUGFnZScsXG4gIHNldHVwKCkge1xuICAgIGNvbnN0IG1lc3NhZ2VUb1NlbmQgPSByZWYoJycpO1xuICAgIGNvbnN0IHJlY2VpdmVkRGVidWcgPSByZWY8c3RyaW5nW10+KFtdKTtcbiAgICBjb25zdCByZWNlaXZlZE1lYXN1cmVtZW50cyA9IHJlZjxzdHJpbmdbXT4oW10pO1xuICAgIGNvbnN0IERlYnVnVG9waWMgPSByZWYoJ2xpbmVhclJhaWxDb250cm9sL2RlYnVnJyk7XG4gICAgY29uc3QgTWVhc3VyZW1lbnRzVG9waWMgPSByZWYoJ2xpbmVhclJhaWxDb250cm9sL21lYXN1cmVtZW50cycpO1xuXG4gICAgJG1xdHQuc3Vic2NyaWJlKERlYnVnVG9waWMudmFsdWUsIChkYXRhOiBzdHJpbmcpID0+IHtcbiAgICAgIHJlY2VpdmVkRGVidWcudmFsdWUucHVzaChkYXRhKTtcbiAgICAgIGNvbnNvbGUubG9nKGRhdGEpXG4gICAgfSk7XG4gICAgJG1xdHQuc3Vic2NyaWJlKE1lYXN1cmVtZW50c1RvcGljLnZhbHVlLCAoZGF0YTogc3RyaW5nKSA9PiB7XG4gICAgICByZWNlaXZlZE1lYXN1cmVtZW50cy52YWx1ZS5wdXNoKGRhdGEpO1xuICAgICAgY29uc29sZS5sb2coZGF0YSlcbiAgICB9KTtcblxuICAgIGNvbnN0IHNlbmRNZXNzYWdlID0gKCkgPT4ge1xuICAgICAgaWYgKG1lc3NhZ2VUb1NlbmQudmFsdWUudHJpbSgpICE9PSAnJykge1xuICAgICAgICAkbXF0dC5wdWJsaXNoKERlYnVnVG9waWMudmFsdWUsIG1lc3NhZ2VUb1NlbmQudmFsdWUsICdRcicpO1xuICAgICAgICBjb25zb2xlLmxvZyhtZXNzYWdlVG9TZW5kLnZhbHVlKTtcbiAgICAgICAgbWVzc2FnZVRvU2VuZC52YWx1ZSA9ICcnO1xuICAgICAgfVxuICAgIH07XG5cbiAgICByZXR1cm4geyBtZXNzYWdlVG9TZW5kLCByZWNlaXZlZERlYnVnLCByZWNlaXZlZE1lYXN1cmVtZW50cywgc2VuZE1lc3NhZ2UgfTtcbiAgfVxufSk7XG48L3NjcmlwdD5cblxuPHRlbXBsYXRlPlxuICA8cS1wYWdlIHBhZGRpbmc+XG4gICAgPGRpdj5cbiAgICAgIDxxLWlucHV0IHYtbW9kZWw9XCJtZXNzYWdlVG9TZW5kXCIgbGFiZWw9XCJNZXNzYWdlIHRvIHNlbmRcIiAvPlxuICAgICAgPHEtYnRuIEBjbGljaz1cInNlbmRNZXNzYWdlXCIgbGFiZWw9XCJTZW5kIE1lc3NhZ2VcIiAvPlxuICAgIDwvZGl2PlxuICAgIDxkaXYgaWQ9XCJwYXJlbnRcIiBjbGFzcz1cImZpdCByb3cgd3JhcCBqdXN0aWZ5LWFyb3VuZCAgY29udGVudC1zdGFydFwiIHN0eWxlPVwib3ZlcmZsb3c6IGhpZGRlbjtcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJjb2wtZ3JvdyBiZy1ncmV5LTYgY2hpbGQtY29udGFpbmVyXCI+XG4gICAgICAgIDxxLWNhcmQgY2xhc3M9XCJuby1ib3JkZXItcmFkaXVzXCI+XG4gICAgICAgICAgPHEtY2FyZC1zZWN0aW9uPlxuICAgICAgICAgICAgPGg2PlJlY2VpdmVkIERlYnVnOjwvaDY+XG4gICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgIDxsaSB2LWZvcj1cIihtZXNzYWdlLCBpbmRleCkgaW4gcmVjZWl2ZWREZWJ1Z1wiIDprZXk9XCJpbmRleFwiPnt7IG1lc3NhZ2UgfX08L2xpPlxuICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICA8L3EtY2FyZC1zZWN0aW9uPlxuICAgICAgICA8L3EtY2FyZD5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cImNvbC1ncm93IGJnLWdyZXktNiBjaGlsZC1jb250YWluZXJcIj5cbiAgICAgICAgPHEtY2FyZCBjbGFzcz1cIm5vLWJvcmRlci1yYWRpdXNcIj5cbiAgICAgICAgICA8cS1jYXJkLXNlY3Rpb24+XG4gICAgICAgICAgICA8aDY+UmVjZWl2ZWQgTWVhc3VyZW1lbnRzOjwvaDY+XG4gICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgIDxsaSB2LWZvcj1cIihtZXNzYWdlLCBpbmRleCkgaW4gcmVjZWl2ZWRNZWFzdXJlbWVudHNcIiA6a2V5PVwiaW5kZXhcIj57eyBtZXNzYWdlIH19PC9saT5cbiAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgPC9xLWNhcmQtc2VjdGlvbj5cbiAgICAgICAgPC9xLWNhcmQ+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgPC9xLXBhZ2U+XG48L3RlbXBsYXRlPlxuXG48c3R5bGUgc2NvcGVkIGxhbmc9XCJzYXNzXCI+XG4jcGFyZW50XG4gIG92ZXJmbG93OiBhdXRvXG5cbi5jaGlsZC1jb250YWluZXJcbiAgb3ZlcmZsb3c6IGF1dG9cblxuPC9zdHlsZT5cbiIsIjxzY3JpcHQgbGFuZz1cInRzXCI+XG5pbXBvcnQgeyBkZWZpbmVDb21wb25lbnQsIHJlZiB9IGZyb20gJ3Z1ZSc7XG5pbXBvcnQgeyRtcXR0fSBmcm9tIFwidnVlLXBhaG8tbXF0dFwiO1xuXG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbXBvbmVudCh7XG4gIG5hbWU6ICdMb2dzUGFnZScsXG4gIHNldHVwKCkge1xuICAgIGNvbnN0IG1lc3NhZ2VUb1NlbmQgPSByZWYoJycpO1xuICAgIGNvbnN0IHJlY2VpdmVkRGVidWcgPSByZWY8c3RyaW5nW10+KFtdKTtcbiAgICBjb25zdCByZWNlaXZlZE1lYXN1cmVtZW50cyA9IHJlZjxzdHJpbmdbXT4oW10pO1xuICAgIGNvbnN0IERlYnVnVG9waWMgPSByZWYoJ2xpbmVhclJhaWxDb250cm9sL2RlYnVnJyk7XG4gICAgY29uc3QgTWVhc3VyZW1lbnRzVG9waWMgPSByZWYoJ2xpbmVhclJhaWxDb250cm9sL21lYXN1cmVtZW50cycpO1xuXG4gICAgJG1xdHQuc3Vic2NyaWJlKERlYnVnVG9waWMudmFsdWUsIChkYXRhOiBzdHJpbmcpID0+IHtcbiAgICAgIHJlY2VpdmVkRGVidWcudmFsdWUucHVzaChkYXRhKTtcbiAgICAgIGNvbnNvbGUubG9nKGRhdGEpXG4gICAgfSk7XG4gICAgJG1xdHQuc3Vic2NyaWJlKE1lYXN1cmVtZW50c1RvcGljLnZhbHVlLCAoZGF0YTogc3RyaW5nKSA9PiB7XG4gICAgICByZWNlaXZlZE1lYXN1cmVtZW50cy52YWx1ZS5wdXNoKGRhdGEpO1xuICAgICAgY29uc29sZS5sb2coZGF0YSlcbiAgICB9KTtcblxuICAgIGNvbnN0IHNlbmRNZXNzYWdlID0gKCkgPT4ge1xuICAgICAgaWYgKG1lc3NhZ2VUb1NlbmQudmFsdWUudHJpbSgpICE9PSAnJykge1xuICAgICAgICAkbXF0dC5wdWJsaXNoKERlYnVnVG9waWMudmFsdWUsIG1lc3NhZ2VUb1NlbmQudmFsdWUsICdRcicpO1xuICAgICAgICBjb25zb2xlLmxvZyhtZXNzYWdlVG9TZW5kLnZhbHVlKTtcbiAgICAgICAgbWVzc2FnZVRvU2VuZC52YWx1ZSA9ICcnO1xuICAgICAgfVxuICAgIH07XG5cbiAgICByZXR1cm4geyBtZXNzYWdlVG9TZW5kLCByZWNlaXZlZERlYnVnLCByZWNlaXZlZE1lYXN1cmVtZW50cywgc2VuZE1lc3NhZ2UgfTtcbiAgfVxufSk7XG48L3NjcmlwdD5cblxuPHRlbXBsYXRlPlxuICA8cS1wYWdlIHBhZGRpbmc+XG4gICAgPGRpdj5cbiAgICAgIDxxLWlucHV0IHYtbW9kZWw9XCJtZXNzYWdlVG9TZW5kXCIgbGFiZWw9XCJNZXNzYWdlIHRvIHNlbmRcIiAvPlxuICAgICAgPHEtYnRuIEBjbGljaz1cInNlbmRNZXNzYWdlXCIgbGFiZWw9XCJTZW5kIE1lc3NhZ2VcIiAvPlxuICAgIDwvZGl2PlxuICAgIDxkaXYgaWQ9XCJwYXJlbnRcIiBjbGFzcz1cImZpdCByb3cgd3JhcCBqdXN0aWZ5LWFyb3VuZCAgY29udGVudC1zdGFydFwiIHN0eWxlPVwib3ZlcmZsb3c6IGhpZGRlbjtcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJjb2wtZ3JvdyBiZy1ncmV5LTYgY2hpbGQtY29udGFpbmVyXCI+XG4gICAgICAgIDxxLWNhcmQgY2xhc3M9XCJuby1ib3JkZXItcmFkaXVzXCI+XG4gICAgICAgICAgPHEtY2FyZC1zZWN0aW9uPlxuICAgICAgICAgICAgPGg2PlJlY2VpdmVkIERlYnVnOjwvaDY+XG4gICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgIDxsaSB2LWZvcj1cIihtZXNzYWdlLCBpbmRleCkgaW4gcmVjZWl2ZWREZWJ1Z1wiIDprZXk9XCJpbmRleFwiPnt7IG1lc3NhZ2UgfX08L2xpPlxuICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICA8L3EtY2FyZC1zZWN0aW9uPlxuICAgICAgICA8L3EtY2FyZD5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cImNvbC1ncm93IGJnLWdyZXktNiBjaGlsZC1jb250YWluZXJcIj5cbiAgICAgICAgPHEtY2FyZCBjbGFzcz1cIm5vLWJvcmRlci1yYWRpdXNcIj5cbiAgICAgICAgICA8cS1jYXJkLXNlY3Rpb24+XG4gICAgICAgICAgICA8aDY+UmVjZWl2ZWQgTWVhc3VyZW1lbnRzOjwvaDY+XG4gICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgIDxsaSB2LWZvcj1cIihtZXNzYWdlLCBpbmRleCkgaW4gcmVjZWl2ZWRNZWFzdXJlbWVudHNcIiA6a2V5PVwiaW5kZXhcIj57eyBtZXNzYWdlIH19PC9saT5cbiAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgPC9xLWNhcmQtc2VjdGlvbj5cbiAgICAgICAgPC9xLWNhcmQ+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgPC9xLXBhZ2U+XG48L3RlbXBsYXRlPlxuXG48c3R5bGUgc2NvcGVkIGxhbmc9XCJzYXNzXCI+XG4jcGFyZW50XG4gIG92ZXJmbG93OiBhdXRvXG5cbi5jaGlsZC1jb250YWluZXJcbiAgb3ZlcmZsb3c6IGF1dG9cblxuPC9zdHlsZT5cbiJdLCJuYW1lcyI6WyIkbXF0dCIsIl9wdXNoU2NvcGVJZCIsIl9wb3BTY29wZUlkIiwiX2NyZWF0ZUVsZW1lbnRWTm9kZSIsIl9vcGVuQmxvY2siLCJfY3JlYXRlQmxvY2siLCJfd2l0aEN0eCIsIm1lc3NhZ2VUb1NlbmQiLCJfY3JlYXRlVk5vZGUiLCJzZW5kTWVzc2FnZSIsIl9jcmVhdGVFbGVtZW50QmxvY2siLCJfRnJhZ21lbnQiLCJfcmVuZGVyTGlzdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUtBLE1BQUEsWUFBZSxnQkFBZ0I7QUFBQSxFQUM3QixNQUFNO0FBQUEsRUFDTixRQUFRO0FBQ0EsVUFBQSxnQkFBZ0IsSUFBSSxFQUFFO0FBQ3RCLFVBQUEsZ0JBQWdCLElBQWMsQ0FBQSxDQUFFO0FBQ2hDLFVBQUEsdUJBQXVCLElBQWMsQ0FBQSxDQUFFO0FBQ3ZDLFVBQUEsYUFBYSxJQUFJLHlCQUF5QjtBQUMxQyxVQUFBLG9CQUFvQixJQUFJLGdDQUFnQztBQUU5REEsT0FBTSxVQUFVLFdBQVcsT0FBTyxDQUFDLFNBQWlCO0FBQ3BDLG9CQUFBLE1BQU0sS0FBSyxJQUFJO0FBQzdCLGNBQVEsSUFBSSxJQUFJO0FBQUEsSUFBQSxDQUNqQjtBQUNEQSxPQUFNLFVBQVUsa0JBQWtCLE9BQU8sQ0FBQyxTQUFpQjtBQUNwQywyQkFBQSxNQUFNLEtBQUssSUFBSTtBQUNwQyxjQUFRLElBQUksSUFBSTtBQUFBLElBQUEsQ0FDakI7QUFFRCxVQUFNLGNBQWMsTUFBTTtBQUN4QixVQUFJLGNBQWMsTUFBTSxLQUFLLE1BQU0sSUFBSTtBQUNyQ0EsV0FBTSxRQUFRLFdBQVcsT0FBTyxjQUFjLE9BQU8sSUFBSTtBQUNqRCxnQkFBQSxJQUFJLGNBQWMsS0FBSztBQUMvQixzQkFBYyxRQUFRO0FBQUEsTUFDeEI7QUFBQSxJQUFBO0FBR0YsV0FBTyxFQUFFLGVBQWUsZUFBZSxzQkFBc0IsWUFBWTtBQUFBLEVBQzNFO0FBQ0YsQ0FBQztNQ1NXLGVBQVEsQ0FBQSxPQUFBQyxZQUFBLGlCQUFBLEdBQUEsSUFBQSxLQUFBQyxjQUFBO01BQUMsYUFBTTtBQUFBLEVBQTZDLElBQUE7QUFBQSxFQUFBLE9BQUE7QUFBQSx1QkFDN0QsU0FBTTs7QUFVTixNQUFBLGFBQUEsRUFBQSxPQUFNO0FBR0wsTUFBQSxhQUFBLDZCQUFBLE1BQUFDLGdDQUErQixNQUEzQixNQUFBLG1CQUFBLEVBQUEsQ0FBQTs7OztTQWxCWkMsVUFHTSxHQUFBQyxZQUFBLE9BQUEsRUFBQSxTQUFBLE1BQUE7QUFBQSxJQUFBLFNBRkpDLFFBQTJELE1BQUE7QUFBQSxNQUF6Q0MsZ0JBQUFBLE9BQUFBLE1BQUFBO0FBQUFBLFFBdkN4QkMsWUFBQSxRQUFBO0FBQUEsVUF1Q3VDLFlBQU0sS0FBQTtBQUFBLFVBQUEsdUJBQUEsT0FBQSxDQUFBLE1BQUEsT0FBQSxDQUFBLElBQUEsQ0FBQSxXQUFBLEtBQUEsZ0JBQUE7QUFBQSxVQUN2QyxPQUFBO0FBQUEsUUFBQSxHQUFRLE1BQUssR0FBRUMsQ0FBQUEsWUFBQUEsQ0FBQUE7QUFBQUEsUUFBQUEsWUFBbUIsTUFBYztBQUFBLFVBQUEsU0FBQSxLQUFBO0FBQUE7UUF1QjVDLEdBQUEsTUFBQSxHQUFBLENBQUEsU0FBQSxDQUFBO0FBQUEsTUFBQSxDQUFBO0FBQUEsc0JBWk8sT0FQRCxZQUFBO0FBQUEsUUFBQU4sZ0JBNUNoQixPQWtEMkIsWUFBQTtBQUFBLFVBQUFLLFlBTGpCLE9BS2lCLEVBQUEsT0FBQSxtQkFBQSxHQUFBO0FBQUEsWUFBQSxTQWxEM0JGLFFBOENvQyxNQUFBO0FBQUEsY0FBQUUsWUFBeEIsY0FBd0IsTUFBQTtBQUFBLGdCQUFBLFNBQ3hCRixRQUVLLE1BQUE7QUFBQSxrQkFBQTtBQUFBLGtCQURISCxnQkFBQSxNQUFBLE1BQUE7QUFBQSxxQkFBQUMsVUFBQSxJQUFBLEdBQUFNLG1CQUFBQyxVQUFBLE1BQUFDLFdBQUEsS0FBQSxlQUFBLENBQUEsU0FBQSxVQUFBOzs7a0JBaERkLENBQUE7QUFBQSxnQkFBQSxDQUFBO0FBQUE7Y0FBQSxDQUFBO0FBQUEsWUFBQSxDQUFBO0FBQUE7VUFxRE0sQ0FBQTtBQUFBLFFBQUEsQ0FBQTtBQUFBLHdCQXJETixPQTREMkIsWUFBQTtBQUFBLFVBQUFKLFlBTGpCLE9BS2lCLEVBQUEsT0FBQSxtQkFBQSxHQUFBO0FBQUEsWUFBQSxTQTVEM0JGLFFBd0QyQyxNQUFBO0FBQUEsY0FBQUUsWUFBL0IsY0FBK0IsTUFBQTtBQUFBLGdCQUFBLFNBQy9CRixRQUVLLE1BQUE7QUFBQSxrQkFBQTtBQUFBLGtCQURISCxnQkFBQSxNQUFBLE1BQUE7QUFBQSxxQkFBQUMsVUFBQSxJQUFBLEdBQUFNLG1CQUFBQyxVQUFBLE1BQUFDLFdBQUEsS0FBQSxzQkFBQSxDQUFBLFNBQUEsVUFBQTs7O2tCQTFEZCxDQUFBO0FBQUEsZ0JBQUEsQ0FBQTtBQUFBO2NBQUEsQ0FBQTtBQUFBLFlBQUEsQ0FBQTtBQUFBOzs7TUFBQSxDQUFBO0FBQUEsSUFBQSxDQUFBO0FBQUE7Ozs7In0=
