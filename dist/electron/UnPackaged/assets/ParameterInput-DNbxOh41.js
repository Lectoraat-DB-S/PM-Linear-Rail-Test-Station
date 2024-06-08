import { Q as QInput } from "./QInput-CBMD31rT.js";
import { c as computed, r as ref, i as isRuntimeSsrPreHydration, o as onMounted, h, a3 as Transition, w as watch, g as getCurrentInstance, _ as _export_sfc, F as openBlock, M as createElementBlock, K as createBaseVNode, I as createVNode } from "./index-B8gzy2O7.js";
import { c as QSpinner, v as vmIsDestroyed } from "./vm-DaVx61Sd.js";
import { c as createComponent, a as hSlot } from "./render-DVgBXDT_.js";
import { u as useTimeout } from "./use-timeout-Ds5q0hEC.js";
import "./use-key-composition-DYeyzAGI.js";
import "./use-dark-DbAZm5oa.js";
const useRatioProps = {
  ratio: [String, Number]
};
function useRatio(props, naturalRatio) {
  return computed(() => {
    const ratio = Number(
      props.ratio || (naturalRatio !== void 0 ? naturalRatio.value : void 0)
    );
    return isNaN(ratio) !== true && ratio > 0 ? { paddingBottom: `${100 / ratio}%` } : null;
  });
}
const defaultRatio = 1.7778;
const QImg = createComponent({
  name: "QImg",
  props: {
    ...useRatioProps,
    src: String,
    srcset: String,
    sizes: String,
    alt: String,
    crossorigin: String,
    decoding: String,
    referrerpolicy: String,
    draggable: Boolean,
    loading: {
      type: String,
      default: "lazy"
    },
    loadingShowDelay: {
      type: [Number, String],
      default: 0
    },
    fetchpriority: {
      type: String,
      default: "auto"
    },
    width: String,
    height: String,
    initialRatio: {
      type: [Number, String],
      default: defaultRatio
    },
    placeholderSrc: String,
    errorSrc: String,
    fit: {
      type: String,
      default: "cover"
    },
    position: {
      type: String,
      default: "50% 50%"
    },
    imgClass: String,
    imgStyle: Object,
    noSpinner: Boolean,
    noNativeMenu: Boolean,
    noTransition: Boolean,
    spinnerColor: String,
    spinnerSize: String
  },
  emits: ["load", "error"],
  setup(props, { slots, emit }) {
    const naturalRatio = ref(props.initialRatio);
    const ratioStyle = useRatio(props, naturalRatio);
    const vm = getCurrentInstance();
    const { registerTimeout: registerLoadTimeout, removeTimeout: removeLoadTimeout } = useTimeout();
    const { registerTimeout: registerLoadShowTimeout, removeTimeout: removeLoadShowTimeout } = useTimeout();
    const placeholderImg = computed(() => props.placeholderSrc !== void 0 ? { src: props.placeholderSrc } : null);
    const errorImg = computed(() => props.errorSrc !== void 0 ? { src: props.errorSrc, __qerror: true } : null);
    const images = [
      ref(null),
      ref(placeholderImg.value)
    ];
    const position = ref(0);
    const isLoading = ref(false);
    const hasError = ref(false);
    const classes = computed(
      () => `q-img q-img--${props.noNativeMenu === true ? "no-" : ""}menu`
    );
    const style = computed(() => ({
      width: props.width,
      height: props.height
    }));
    const imgClass = computed(
      () => `q-img__image ${props.imgClass !== void 0 ? props.imgClass + " " : ""}q-img__image--with${props.noTransition === true ? "out" : ""}-transition q-img__image--`
    );
    const imgStyle = computed(() => ({
      ...props.imgStyle,
      objectFit: props.fit,
      objectPosition: props.position
    }));
    function setLoading() {
      removeLoadShowTimeout();
      if (props.loadingShowDelay === 0) {
        isLoading.value = true;
        return;
      }
      registerLoadShowTimeout(() => {
        isLoading.value = true;
      }, props.loadingShowDelay);
    }
    function clearLoading() {
      removeLoadShowTimeout();
      isLoading.value = false;
    }
    function onLoad({ target }) {
      if (vmIsDestroyed(vm) === false) {
        removeLoadTimeout();
        naturalRatio.value = target.naturalHeight === 0 ? 0.5 : target.naturalWidth / target.naturalHeight;
        waitForCompleteness(target, 1);
      }
    }
    function waitForCompleteness(target, count) {
      if (count === 1e3 || vmIsDestroyed(vm) === true)
        return;
      if (target.complete === true) {
        onReady(target);
      } else {
        registerLoadTimeout(() => {
          waitForCompleteness(target, count + 1);
        }, 50);
      }
    }
    function onReady(target) {
      if (vmIsDestroyed(vm) === true)
        return;
      position.value = position.value ^ 1;
      images[position.value].value = null;
      clearLoading();
      if (target.getAttribute("__qerror") !== "true") {
        hasError.value = false;
      }
      emit("load", target.currentSrc || target.src);
    }
    function onError(err) {
      removeLoadTimeout();
      clearLoading();
      hasError.value = true;
      images[position.value].value = errorImg.value;
      images[position.value ^ 1].value = placeholderImg.value;
      emit("error", err);
    }
    function getImage(index) {
      const img = images[index].value;
      const data = {
        key: "img_" + index,
        class: imgClass.value,
        style: imgStyle.value,
        alt: props.alt,
        crossorigin: props.crossorigin,
        decoding: props.decoding,
        referrerpolicy: props.referrerpolicy,
        height: props.height,
        width: props.width,
        loading: props.loading,
        fetchpriority: props.fetchpriority,
        "aria-hidden": "true",
        draggable: props.draggable,
        ...img
      };
      if (position.value === index) {
        Object.assign(data, {
          class: data.class + "current",
          onLoad,
          onError
        });
      } else {
        data.class += "loaded";
      }
      return h(
        "div",
        { class: "q-img__container absolute-full", key: "img" + index },
        h("img", data)
      );
    }
    function getContent() {
      if (isLoading.value === false) {
        return h("div", {
          key: "content",
          class: "q-img__content absolute-full q-anchor--skip"
        }, hSlot(slots[hasError.value === true ? "error" : "default"]));
      }
      return h("div", {
        key: "loading",
        class: "q-img__loading absolute-full flex flex-center"
      }, slots.loading !== void 0 ? slots.loading() : props.noSpinner === true ? void 0 : [
        h(QSpinner, {
          color: props.spinnerColor,
          size: props.spinnerSize
        })
      ]);
    }
    {
      let watchSrc = function() {
        watch(
          () => props.src || props.srcset || props.sizes ? {
            src: props.src,
            srcset: props.srcset,
            sizes: props.sizes
          } : null,
          (imgProps) => {
            removeLoadTimeout();
            hasError.value = false;
            if (imgProps === null) {
              clearLoading();
              images[position.value ^ 1].value = placeholderImg.value;
            } else {
              setLoading();
            }
            images[position.value].value = imgProps;
          },
          { immediate: true }
        );
      };
      if (isRuntimeSsrPreHydration.value === true) {
        onMounted(watchSrc);
      } else {
        watchSrc();
      }
    }
    return () => {
      const content = [];
      if (ratioStyle.value !== null) {
        content.push(
          h("div", { key: "filler", style: ratioStyle.value })
        );
      }
      if (images[0].value !== null) {
        content.push(
          getImage(0)
        );
      }
      if (images[1].value !== null) {
        content.push(
          getImage(1)
        );
      }
      content.push(
        h(Transition, { name: "q-transition--fade" }, getContent)
      );
      return h("div", {
        key: "main",
        class: classes.value,
        style: style.value,
        role: "img",
        "aria-label": props.alt
      }, content);
    };
  }
});
const _sfc_main = {
  setup() {
    return {
      AVal: ref(300),
      FVal: ref(25),
      GVal: ref(25),
      Gaten: ref(8),
      Gewicht: ref(200)
    };
  }
};
const _hoisted_1 = {
  class: "q-pa-md example-row-equal-width",
  style: { "padding": "0" }
};
const _hoisted_2 = { class: "row" };
const _hoisted_3 = { class: "col" };
const _hoisted_4 = { class: "q-pa-md" };
const _hoisted_5 = { class: "col" };
const _hoisted_6 = { class: "q-pa-md" };
const _hoisted_7 = { class: "col" };
const _hoisted_8 = { class: "q-pa-md" };
const _hoisted_9 = { class: "row" };
const _hoisted_10 = { class: "col" };
const _hoisted_11 = { class: "q-pa-md" };
const _hoisted_12 = { class: "col" };
const _hoisted_13 = { class: "q-pa-md" };
const _hoisted_14 = { class: "row justify-center" };
const _hoisted_15 = { class: "col" };
const _hoisted_16 = { class: "row items-center justify-center" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", _hoisted_1, [
    createBaseVNode("div", _hoisted_2, [
      createBaseVNode("div", _hoisted_3, [
        createBaseVNode("div", _hoisted_4, [
          createVNode(QInput, {
            modelValue: $setup.AVal,
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $setup.AVal = $event),
            modelModifiers: { number: true },
            label: "A",
            placeholder: "12.5",
            type: "number",
            filled: "",
            style: { "max-width": "200px" },
            dense: ""
          }, null, 8, ["modelValue"])
        ])
      ]),
      createBaseVNode("div", _hoisted_5, [
        createBaseVNode("div", _hoisted_6, [
          createVNode(QInput, {
            modelValue: $setup.FVal,
            "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => $setup.FVal = $event),
            modelModifiers: { number: true },
            label: "F",
            placeholder: "12.5",
            type: "number",
            filled: "",
            style: { "max-width": "200px" },
            dense: ""
          }, null, 8, ["modelValue"])
        ])
      ]),
      createBaseVNode("div", _hoisted_7, [
        createBaseVNode("div", _hoisted_8, [
          createVNode(QInput, {
            modelValue: $setup.GVal,
            "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => $setup.GVal = $event),
            modelModifiers: { number: true },
            label: "G",
            placeholder: "12.5",
            type: "number",
            filled: "",
            style: { "max-width": "200px" },
            dense: ""
          }, null, 8, ["modelValue"])
        ])
      ])
    ]),
    createBaseVNode("div", _hoisted_9, [
      createBaseVNode("div", _hoisted_10, [
        createBaseVNode("div", _hoisted_11, [
          createVNode(QInput, {
            modelValue: $setup.Gaten,
            "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => $setup.Gaten = $event),
            modelModifiers: { number: true },
            label: "Gaten",
            placeholder: "8",
            type: "number",
            filled: "",
            style: { "max-width": "200px" },
            dense: ""
          }, null, 8, ["modelValue"])
        ])
      ]),
      createBaseVNode("div", _hoisted_12, [
        createBaseVNode("div", _hoisted_13, [
          createVNode(QInput, {
            modelValue: $setup.Gewicht,
            "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => $setup.Gewicht = $event),
            modelModifiers: { number: true },
            label: "Gewicht (g)",
            placeholder: "220.25",
            type: "number",
            filled: "",
            style: { "max-width": "200px" },
            dense: ""
          }, null, 8, ["modelValue"])
        ])
      ])
    ]),
    createBaseVNode("div", _hoisted_14, [
      createBaseVNode("div", _hoisted_15, [
        createBaseVNode("div", _hoisted_16, [
          createVNode(QImg, {
            src: "https://i.imgur.com/JQhm23j.png",
            "spinner-color": "white",
            style: { "width": "100%", "height": "auto" },
            fit: "contain"
          })
        ])
      ])
    ])
  ]);
}
const ParameterInput = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "ParameterInput.vue"]]);
export {
  ParameterInput as default
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUGFyYW1ldGVySW5wdXQtRE5ieE9oNDEuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9xdWFzYXJAMi4xNS4xL25vZGVfbW9kdWxlcy9xdWFzYXIvc3JjL2NvbXBvc2FibGVzL3ByaXZhdGUvdXNlLXJhdGlvLmpzIiwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL3F1YXNhckAyLjE1LjEvbm9kZV9tb2R1bGVzL3F1YXNhci9zcmMvY29tcG9uZW50cy9pbWcvUUltZy5qcyIsIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL1BhcmFtZXRlcklucHV0LnZ1ZSIsIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL1BhcmFtZXRlcklucHV0LnZ1ZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjb21wdXRlZCB9IGZyb20gJ3Z1ZSdcblxuZXhwb3J0IGNvbnN0IHVzZVJhdGlvUHJvcHMgPSB7XG4gIHJhdGlvOiBbIFN0cmluZywgTnVtYmVyIF1cbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKHByb3BzLCBuYXR1cmFsUmF0aW8pIHtcbiAgLy8gcmV0dXJuIHJhdGlvU3R5bGVcbiAgcmV0dXJuIGNvbXB1dGVkKCgpID0+IHtcbiAgICBjb25zdCByYXRpbyA9IE51bWJlcihcbiAgICAgIHByb3BzLnJhdGlvIHx8IChuYXR1cmFsUmF0aW8gIT09IHZvaWQgMCA/IG5hdHVyYWxSYXRpby52YWx1ZSA6IHZvaWQgMClcbiAgICApXG5cbiAgICByZXR1cm4gaXNOYU4ocmF0aW8pICE9PSB0cnVlICYmIHJhdGlvID4gMFxuICAgICAgPyB7IHBhZGRpbmdCb3R0b206IGAkeyAxMDAgLyByYXRpbyB9JWAgfVxuICAgICAgOiBudWxsXG4gIH0pXG59XG4iLCJpbXBvcnQgeyBoLCByZWYsIGNvbXB1dGVkLCB3YXRjaCwgb25Nb3VudGVkLCBUcmFuc2l0aW9uLCBnZXRDdXJyZW50SW5zdGFuY2UgfSBmcm9tICd2dWUnXG5cbmltcG9ydCBRU3Bpbm5lciBmcm9tICcuLi9zcGlubmVyL1FTcGlubmVyLmpzJ1xuXG5pbXBvcnQgeyBpc1J1bnRpbWVTc3JQcmVIeWRyYXRpb24gfSBmcm9tICcuLi8uLi9wbHVnaW5zL1BsYXRmb3JtLmpzJ1xuaW1wb3J0IHVzZVJhdGlvLCB7IHVzZVJhdGlvUHJvcHMgfSBmcm9tICcuLi8uLi9jb21wb3NhYmxlcy9wcml2YXRlL3VzZS1yYXRpby5qcydcblxuaW1wb3J0IHsgY3JlYXRlQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vdXRpbHMvcHJpdmF0ZS9jcmVhdGUuanMnXG5pbXBvcnQgeyBoU2xvdCB9IGZyb20gJy4uLy4uL3V0aWxzL3ByaXZhdGUvcmVuZGVyLmpzJ1xuaW1wb3J0IHsgdm1Jc0Rlc3Ryb3llZCB9IGZyb20gJy4uLy4uL3V0aWxzL3ByaXZhdGUvdm0uanMnXG5pbXBvcnQgdXNlVGltZW91dCBmcm9tICcuLi8uLi9jb21wb3NhYmxlcy91c2UtdGltZW91dC5qcydcblxuY29uc3QgZGVmYXVsdFJhdGlvID0gMS43Nzc4IC8qIDE2LzkgKi9cblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlQ29tcG9uZW50KHtcbiAgbmFtZTogJ1FJbWcnLFxuXG4gIHByb3BzOiB7XG4gICAgLi4udXNlUmF0aW9Qcm9wcyxcblxuICAgIHNyYzogU3RyaW5nLFxuICAgIHNyY3NldDogU3RyaW5nLFxuICAgIHNpemVzOiBTdHJpbmcsXG5cbiAgICBhbHQ6IFN0cmluZyxcbiAgICBjcm9zc29yaWdpbjogU3RyaW5nLFxuICAgIGRlY29kaW5nOiBTdHJpbmcsXG4gICAgcmVmZXJyZXJwb2xpY3k6IFN0cmluZyxcblxuICAgIGRyYWdnYWJsZTogQm9vbGVhbixcblxuICAgIGxvYWRpbmc6IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIGRlZmF1bHQ6ICdsYXp5J1xuICAgIH0sXG4gICAgbG9hZGluZ1Nob3dEZWxheToge1xuICAgICAgdHlwZTogWyBOdW1iZXIsIFN0cmluZyBdLFxuICAgICAgZGVmYXVsdDogMFxuICAgIH0sXG5cbiAgICBmZXRjaHByaW9yaXR5OiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICBkZWZhdWx0OiAnYXV0bydcbiAgICB9LFxuICAgIHdpZHRoOiBTdHJpbmcsXG4gICAgaGVpZ2h0OiBTdHJpbmcsXG4gICAgaW5pdGlhbFJhdGlvOiB7XG4gICAgICB0eXBlOiBbIE51bWJlciwgU3RyaW5nIF0sXG4gICAgICBkZWZhdWx0OiBkZWZhdWx0UmF0aW9cbiAgICB9LFxuXG4gICAgcGxhY2Vob2xkZXJTcmM6IFN0cmluZyxcbiAgICBlcnJvclNyYzogU3RyaW5nLFxuXG4gICAgZml0OiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICBkZWZhdWx0OiAnY292ZXInXG4gICAgfSxcbiAgICBwb3NpdGlvbjoge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgZGVmYXVsdDogJzUwJSA1MCUnXG4gICAgfSxcblxuICAgIGltZ0NsYXNzOiBTdHJpbmcsXG4gICAgaW1nU3R5bGU6IE9iamVjdCxcblxuICAgIG5vU3Bpbm5lcjogQm9vbGVhbixcbiAgICBub05hdGl2ZU1lbnU6IEJvb2xlYW4sXG4gICAgbm9UcmFuc2l0aW9uOiBCb29sZWFuLFxuXG4gICAgc3Bpbm5lckNvbG9yOiBTdHJpbmcsXG4gICAgc3Bpbm5lclNpemU6IFN0cmluZ1xuICB9LFxuXG4gIGVtaXRzOiBbICdsb2FkJywgJ2Vycm9yJyBdLFxuXG4gIHNldHVwIChwcm9wcywgeyBzbG90cywgZW1pdCB9KSB7XG4gICAgY29uc3QgbmF0dXJhbFJhdGlvID0gcmVmKHByb3BzLmluaXRpYWxSYXRpbylcbiAgICBjb25zdCByYXRpb1N0eWxlID0gdXNlUmF0aW8ocHJvcHMsIG5hdHVyYWxSYXRpbylcbiAgICBjb25zdCB2bSA9IGdldEN1cnJlbnRJbnN0YW5jZSgpXG5cbiAgICBjb25zdCB7IHJlZ2lzdGVyVGltZW91dDogcmVnaXN0ZXJMb2FkVGltZW91dCwgcmVtb3ZlVGltZW91dDogcmVtb3ZlTG9hZFRpbWVvdXQgfSA9IHVzZVRpbWVvdXQoKVxuICAgIGNvbnN0IHsgcmVnaXN0ZXJUaW1lb3V0OiByZWdpc3RlckxvYWRTaG93VGltZW91dCwgcmVtb3ZlVGltZW91dDogcmVtb3ZlTG9hZFNob3dUaW1lb3V0IH0gPSB1c2VUaW1lb3V0KClcblxuICAgIGNvbnN0IHBsYWNlaG9sZGVySW1nID0gY29tcHV0ZWQoKCkgPT4gKFxuICAgICAgcHJvcHMucGxhY2Vob2xkZXJTcmMgIT09IHZvaWQgMFxuICAgICAgICA/IHsgc3JjOiBwcm9wcy5wbGFjZWhvbGRlclNyYyB9XG4gICAgICAgIDogbnVsbFxuICAgICkpXG5cbiAgICBjb25zdCBlcnJvckltZyA9IGNvbXB1dGVkKCgpID0+IChcbiAgICAgIHByb3BzLmVycm9yU3JjICE9PSB2b2lkIDBcbiAgICAgICAgPyB7IHNyYzogcHJvcHMuZXJyb3JTcmMsIF9fcWVycm9yOiB0cnVlIH1cbiAgICAgICAgOiBudWxsXG4gICAgKSlcblxuICAgIGNvbnN0IGltYWdlcyA9IFtcbiAgICAgIHJlZihudWxsKSxcbiAgICAgIHJlZihwbGFjZWhvbGRlckltZy52YWx1ZSlcbiAgICBdXG5cbiAgICBjb25zdCBwb3NpdGlvbiA9IHJlZigwKVxuXG4gICAgY29uc3QgaXNMb2FkaW5nID0gcmVmKGZhbHNlKVxuICAgIGNvbnN0IGhhc0Vycm9yID0gcmVmKGZhbHNlKVxuXG4gICAgY29uc3QgY2xhc3NlcyA9IGNvbXB1dGVkKCgpID0+XG4gICAgICBgcS1pbWcgcS1pbWctLSR7IHByb3BzLm5vTmF0aXZlTWVudSA9PT0gdHJ1ZSA/ICduby0nIDogJycgfW1lbnVgXG4gICAgKVxuXG4gICAgY29uc3Qgc3R5bGUgPSBjb21wdXRlZCgoKSA9PiAoe1xuICAgICAgd2lkdGg6IHByb3BzLndpZHRoLFxuICAgICAgaGVpZ2h0OiBwcm9wcy5oZWlnaHRcbiAgICB9KSlcblxuICAgIGNvbnN0IGltZ0NsYXNzID0gY29tcHV0ZWQoKCkgPT5cbiAgICAgIGBxLWltZ19faW1hZ2UgJHsgcHJvcHMuaW1nQ2xhc3MgIT09IHZvaWQgMCA/IHByb3BzLmltZ0NsYXNzICsgJyAnIDogJycgfWBcbiAgICAgICsgYHEtaW1nX19pbWFnZS0td2l0aCR7IHByb3BzLm5vVHJhbnNpdGlvbiA9PT0gdHJ1ZSA/ICdvdXQnIDogJycgfS10cmFuc2l0aW9uYFxuICAgICAgKyAnIHEtaW1nX19pbWFnZS0tJ1xuICAgIClcblxuICAgIGNvbnN0IGltZ1N0eWxlID0gY29tcHV0ZWQoKCkgPT4gKHtcbiAgICAgIC4uLnByb3BzLmltZ1N0eWxlLFxuICAgICAgb2JqZWN0Rml0OiBwcm9wcy5maXQsXG4gICAgICBvYmplY3RQb3NpdGlvbjogcHJvcHMucG9zaXRpb25cbiAgICB9KSlcblxuICAgIGZ1bmN0aW9uIHNldExvYWRpbmcgKCkge1xuICAgICAgcmVtb3ZlTG9hZFNob3dUaW1lb3V0KClcblxuICAgICAgaWYgKHByb3BzLmxvYWRpbmdTaG93RGVsYXkgPT09IDApIHtcbiAgICAgICAgaXNMb2FkaW5nLnZhbHVlID0gdHJ1ZVxuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgcmVnaXN0ZXJMb2FkU2hvd1RpbWVvdXQoKCkgPT4ge1xuICAgICAgICBpc0xvYWRpbmcudmFsdWUgPSB0cnVlXG4gICAgICB9LCBwcm9wcy5sb2FkaW5nU2hvd0RlbGF5KVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNsZWFyTG9hZGluZyAoKSB7XG4gICAgICByZW1vdmVMb2FkU2hvd1RpbWVvdXQoKVxuICAgICAgaXNMb2FkaW5nLnZhbHVlID0gZmFsc2VcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBvbkxvYWQgKHsgdGFyZ2V0IH0pIHtcbiAgICAgIGlmICh2bUlzRGVzdHJveWVkKHZtKSA9PT0gZmFsc2UpIHtcbiAgICAgICAgcmVtb3ZlTG9hZFRpbWVvdXQoKVxuXG4gICAgICAgIG5hdHVyYWxSYXRpby52YWx1ZSA9IHRhcmdldC5uYXR1cmFsSGVpZ2h0ID09PSAwXG4gICAgICAgICAgPyAwLjVcbiAgICAgICAgICA6IHRhcmdldC5uYXR1cmFsV2lkdGggLyB0YXJnZXQubmF0dXJhbEhlaWdodFxuXG4gICAgICAgIHdhaXRGb3JDb21wbGV0ZW5lc3ModGFyZ2V0LCAxKVxuICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHdhaXRGb3JDb21wbGV0ZW5lc3MgKHRhcmdldCwgY291bnQpIHtcbiAgICAgIC8vIHByb3RlY3QgYWdhaW5zdCBydW5uaW5nIGZvcmV2ZXJcbiAgICAgIGlmIChjb3VudCA9PT0gMTAwMCB8fCB2bUlzRGVzdHJveWVkKHZtKSA9PT0gdHJ1ZSkgcmV0dXJuXG5cbiAgICAgIGlmICh0YXJnZXQuY29tcGxldGUgPT09IHRydWUpIHtcbiAgICAgICAgb25SZWFkeSh0YXJnZXQpXG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgcmVnaXN0ZXJMb2FkVGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgd2FpdEZvckNvbXBsZXRlbmVzcyh0YXJnZXQsIGNvdW50ICsgMSlcbiAgICAgICAgfSwgNTApXG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gb25SZWFkeSAodGFyZ2V0KSB7XG4gICAgICBpZiAodm1Jc0Rlc3Ryb3llZCh2bSkgPT09IHRydWUpIHJldHVyblxuXG4gICAgICBwb3NpdGlvbi52YWx1ZSA9IHBvc2l0aW9uLnZhbHVlIF4gMVxuICAgICAgaW1hZ2VzWyBwb3NpdGlvbi52YWx1ZSBdLnZhbHVlID0gbnVsbFxuXG4gICAgICBjbGVhckxvYWRpbmcoKVxuXG4gICAgICBpZiAodGFyZ2V0LmdldEF0dHJpYnV0ZSgnX19xZXJyb3InKSAhPT0gJ3RydWUnKSB7XG4gICAgICAgIGhhc0Vycm9yLnZhbHVlID0gZmFsc2VcbiAgICAgIH1cblxuICAgICAgZW1pdCgnbG9hZCcsIHRhcmdldC5jdXJyZW50U3JjIHx8IHRhcmdldC5zcmMpXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gb25FcnJvciAoZXJyKSB7XG4gICAgICByZW1vdmVMb2FkVGltZW91dCgpXG4gICAgICBjbGVhckxvYWRpbmcoKVxuXG4gICAgICBoYXNFcnJvci52YWx1ZSA9IHRydWVcbiAgICAgIGltYWdlc1sgcG9zaXRpb24udmFsdWUgXS52YWx1ZSA9IGVycm9ySW1nLnZhbHVlXG4gICAgICBpbWFnZXNbIHBvc2l0aW9uLnZhbHVlIF4gMSBdLnZhbHVlID0gcGxhY2Vob2xkZXJJbWcudmFsdWVcblxuICAgICAgZW1pdCgnZXJyb3InLCBlcnIpXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0SW1hZ2UgKGluZGV4KSB7XG4gICAgICBjb25zdCBpbWcgPSBpbWFnZXNbIGluZGV4IF0udmFsdWVcblxuICAgICAgY29uc3QgZGF0YSA9IHtcbiAgICAgICAga2V5OiAnaW1nXycgKyBpbmRleCxcbiAgICAgICAgY2xhc3M6IGltZ0NsYXNzLnZhbHVlLFxuICAgICAgICBzdHlsZTogaW1nU3R5bGUudmFsdWUsXG4gICAgICAgIGFsdDogcHJvcHMuYWx0LFxuICAgICAgICBjcm9zc29yaWdpbjogcHJvcHMuY3Jvc3NvcmlnaW4sXG4gICAgICAgIGRlY29kaW5nOiBwcm9wcy5kZWNvZGluZyxcbiAgICAgICAgcmVmZXJyZXJwb2xpY3k6IHByb3BzLnJlZmVycmVycG9saWN5LFxuICAgICAgICBoZWlnaHQ6IHByb3BzLmhlaWdodCxcbiAgICAgICAgd2lkdGg6IHByb3BzLndpZHRoLFxuICAgICAgICBsb2FkaW5nOiBwcm9wcy5sb2FkaW5nLFxuICAgICAgICBmZXRjaHByaW9yaXR5OiBwcm9wcy5mZXRjaHByaW9yaXR5LFxuICAgICAgICAnYXJpYS1oaWRkZW4nOiAndHJ1ZScsXG4gICAgICAgIGRyYWdnYWJsZTogcHJvcHMuZHJhZ2dhYmxlLFxuICAgICAgICAuLi5pbWdcbiAgICAgIH1cblxuICAgICAgaWYgKHBvc2l0aW9uLnZhbHVlID09PSBpbmRleCkge1xuICAgICAgICBPYmplY3QuYXNzaWduKGRhdGEsIHtcbiAgICAgICAgICBjbGFzczogZGF0YS5jbGFzcyArICdjdXJyZW50JyxcbiAgICAgICAgICBvbkxvYWQsXG4gICAgICAgICAgb25FcnJvclxuICAgICAgICB9KVxuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIGRhdGEuY2xhc3MgKz0gJ2xvYWRlZCdcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGgoXG4gICAgICAgICdkaXYnLFxuICAgICAgICB7IGNsYXNzOiAncS1pbWdfX2NvbnRhaW5lciBhYnNvbHV0ZS1mdWxsJywga2V5OiAnaW1nJyArIGluZGV4IH0sXG4gICAgICAgIGgoJ2ltZycsIGRhdGEpXG4gICAgICApXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0Q29udGVudCAoKSB7XG4gICAgICBpZiAoaXNMb2FkaW5nLnZhbHVlID09PSBmYWxzZSkge1xuICAgICAgICByZXR1cm4gaCgnZGl2Jywge1xuICAgICAgICAgIGtleTogJ2NvbnRlbnQnLFxuICAgICAgICAgIGNsYXNzOiAncS1pbWdfX2NvbnRlbnQgYWJzb2x1dGUtZnVsbCBxLWFuY2hvci0tc2tpcCdcbiAgICAgICAgfSwgaFNsb3Qoc2xvdHNbIGhhc0Vycm9yLnZhbHVlID09PSB0cnVlID8gJ2Vycm9yJyA6ICdkZWZhdWx0JyBdKSlcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGgoJ2RpdicsIHtcbiAgICAgICAga2V5OiAnbG9hZGluZycsXG4gICAgICAgIGNsYXNzOiAncS1pbWdfX2xvYWRpbmcgYWJzb2x1dGUtZnVsbCBmbGV4IGZsZXgtY2VudGVyJ1xuICAgICAgfSwgKFxuICAgICAgICBzbG90cy5sb2FkaW5nICE9PSB2b2lkIDBcbiAgICAgICAgICA/IHNsb3RzLmxvYWRpbmcoKVxuICAgICAgICAgIDogKFxuICAgICAgICAgICAgICBwcm9wcy5ub1NwaW5uZXIgPT09IHRydWVcbiAgICAgICAgICAgICAgICA/IHZvaWQgMFxuICAgICAgICAgICAgICAgIDogW1xuICAgICAgICAgICAgICAgICAgICBoKFFTcGlubmVyLCB7XG4gICAgICAgICAgICAgICAgICAgICAgY29sb3I6IHByb3BzLnNwaW5uZXJDb2xvcixcbiAgICAgICAgICAgICAgICAgICAgICBzaXplOiBwcm9wcy5zcGlubmVyU2l6ZVxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgKVxuICAgICAgKSlcbiAgICB9XG5cbiAgICBpZiAoX19RVUFTQVJfU1NSX1NFUlZFUl9fICE9PSB0cnVlKSB7XG4gICAgICBmdW5jdGlvbiB3YXRjaFNyYyAoKSB7XG4gICAgICAgIHdhdGNoKFxuICAgICAgICAgICgpID0+IChcbiAgICAgICAgICAgIHByb3BzLnNyYyB8fCBwcm9wcy5zcmNzZXQgfHwgcHJvcHMuc2l6ZXNcbiAgICAgICAgICAgICAgPyB7XG4gICAgICAgICAgICAgICAgICBzcmM6IHByb3BzLnNyYyxcbiAgICAgICAgICAgICAgICAgIHNyY3NldDogcHJvcHMuc3Jjc2V0LFxuICAgICAgICAgICAgICAgICAgc2l6ZXM6IHByb3BzLnNpemVzXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICA6IG51bGxcbiAgICAgICAgICApLFxuICAgICAgICAgIGltZ1Byb3BzID0+IHtcbiAgICAgICAgICAgIHJlbW92ZUxvYWRUaW1lb3V0KClcbiAgICAgICAgICAgIGhhc0Vycm9yLnZhbHVlID0gZmFsc2VcblxuICAgICAgICAgICAgaWYgKGltZ1Byb3BzID09PSBudWxsKSB7XG4gICAgICAgICAgICAgIGNsZWFyTG9hZGluZygpXG4gICAgICAgICAgICAgIGltYWdlc1sgcG9zaXRpb24udmFsdWUgXiAxIF0udmFsdWUgPSBwbGFjZWhvbGRlckltZy52YWx1ZVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgIHNldExvYWRpbmcoKVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpbWFnZXNbIHBvc2l0aW9uLnZhbHVlIF0udmFsdWUgPSBpbWdQcm9wc1xuICAgICAgICAgIH0sXG4gICAgICAgICAgeyBpbW1lZGlhdGU6IHRydWUgfVxuICAgICAgICApXG4gICAgICB9XG5cbiAgICAgIGlmIChpc1J1bnRpbWVTc3JQcmVIeWRyYXRpb24udmFsdWUgPT09IHRydWUpIHtcbiAgICAgICAgb25Nb3VudGVkKHdhdGNoU3JjKVxuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIHdhdGNoU3JjKClcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgY29uc3QgY29udGVudCA9IFtdXG5cbiAgICAgIGlmIChyYXRpb1N0eWxlLnZhbHVlICE9PSBudWxsKSB7XG4gICAgICAgIGNvbnRlbnQucHVzaChcbiAgICAgICAgICBoKCdkaXYnLCB7IGtleTogJ2ZpbGxlcicsIHN0eWxlOiByYXRpb1N0eWxlLnZhbHVlIH0pXG4gICAgICAgIClcbiAgICAgIH1cblxuICAgICAgaWYgKGltYWdlc1sgMCBdLnZhbHVlICE9PSBudWxsKSB7XG4gICAgICAgIGNvbnRlbnQucHVzaChcbiAgICAgICAgICBnZXRJbWFnZSgwKVxuICAgICAgICApXG4gICAgICB9XG5cbiAgICAgIGlmIChpbWFnZXNbIDEgXS52YWx1ZSAhPT0gbnVsbCkge1xuICAgICAgICBjb250ZW50LnB1c2goXG4gICAgICAgICAgZ2V0SW1hZ2UoMSlcbiAgICAgICAgKVxuICAgICAgfVxuXG4gICAgICBjb250ZW50LnB1c2goXG4gICAgICAgIGgoVHJhbnNpdGlvbiwgeyBuYW1lOiAncS10cmFuc2l0aW9uLS1mYWRlJyB9LCBnZXRDb250ZW50KVxuICAgICAgKVxuXG4gICAgICByZXR1cm4gaCgnZGl2Jywge1xuICAgICAgICBrZXk6ICdtYWluJyxcbiAgICAgICAgY2xhc3M6IGNsYXNzZXMudmFsdWUsXG4gICAgICAgIHN0eWxlOiBzdHlsZS52YWx1ZSxcbiAgICAgICAgcm9sZTogJ2ltZycsXG4gICAgICAgICdhcmlhLWxhYmVsJzogcHJvcHMuYWx0XG4gICAgICB9LCBjb250ZW50KVxuICAgIH1cbiAgfVxufSlcbiIsIjxzY3JpcHQgbGFuZz1cInRzXCI+XHJcbmltcG9ydCB7IHJlZiB9IGZyb20gJ3Z1ZSdcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICBzZXR1cCAoKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBBVmFsOiByZWYoMzAwKSxcclxuICAgICAgRlZhbDogcmVmKDI1KSxcclxuICAgICAgR1ZhbDogcmVmKDI1KSxcclxuICAgICAgR2F0ZW46IHJlZig4KSxcclxuICAgICAgR2V3aWNodDogcmVmKDIwMClcclxuICAgIH1cclxuICB9XHJcbn1cclxuPC9zY3JpcHQ+XHJcblxyXG48dGVtcGxhdGU+XHJcbiAgPGRpdiBjbGFzcz1cInEtcGEtbWQgZXhhbXBsZS1yb3ctZXF1YWwtd2lkdGhcIiBzdHlsZT1cInBhZGRpbmc6IDBcIj5cclxuICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cclxuICAgICAgPGRpdiBjbGFzcz1cImNvbFwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJxLXBhLW1kXCI+XHJcbiAgICAgICAgICA8cS1pbnB1dFxyXG4gICAgICAgICAgICB2LW1vZGVsLm51bWJlcj1cIkFWYWxcIlxyXG4gICAgICAgICAgICBsYWJlbD1cIkFcIlxyXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIjEyLjVcIlxyXG4gICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcclxuICAgICAgICAgICAgZmlsbGVkXHJcbiAgICAgICAgICAgIHN0eWxlPVwibWF4LXdpZHRoOiAyMDBweFwiXHJcbiAgICAgICAgICAgIGRlbnNlXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzcz1cImNvbFwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJxLXBhLW1kXCI+XHJcbiAgICAgICAgICA8cS1pbnB1dFxyXG4gICAgICAgICAgICB2LW1vZGVsLm51bWJlcj1cIkZWYWxcIlxyXG4gICAgICAgICAgICBsYWJlbD1cIkZcIlxyXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIjEyLjVcIlxyXG4gICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcclxuICAgICAgICAgICAgZmlsbGVkXHJcbiAgICAgICAgICAgIHN0eWxlPVwibWF4LXdpZHRoOiAyMDBweFwiXHJcbiAgICAgICAgICAgIGRlbnNlXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzcz1cImNvbFwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJxLXBhLW1kXCI+XHJcbiAgICAgICAgICA8cS1pbnB1dFxyXG4gICAgICAgICAgICB2LW1vZGVsLm51bWJlcj1cIkdWYWxcIlxyXG4gICAgICAgICAgICBsYWJlbD1cIkdcIlxyXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIjEyLjVcIlxyXG4gICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcclxuICAgICAgICAgICAgZmlsbGVkXHJcbiAgICAgICAgICAgIHN0eWxlPVwibWF4LXdpZHRoOiAyMDBweFwiXHJcbiAgICAgICAgICAgIGRlbnNlXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICAgPGRpdiBjbGFzcz1cInJvd1wiPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwiY29sXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cInEtcGEtbWRcIj5cclxuICAgICAgICAgIDxxLWlucHV0XHJcbiAgICAgICAgICAgIHYtbW9kZWwubnVtYmVyPVwiR2F0ZW5cIlxyXG4gICAgICAgICAgICBsYWJlbD1cIkdhdGVuXCJcclxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCI4XCJcclxuICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXHJcbiAgICAgICAgICAgIGZpbGxlZFxyXG4gICAgICAgICAgICBzdHlsZT1cIm1heC13aWR0aDogMjAwcHhcIlxyXG4gICAgICAgICAgICBkZW5zZVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJjb2xcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwicS1wYS1tZFwiPlxyXG4gICAgICAgICAgPHEtaW5wdXRcclxuICAgICAgICAgICAgdi1tb2RlbC5udW1iZXI9XCJHZXdpY2h0XCJcclxuICAgICAgICAgICAgbGFiZWw9XCJHZXdpY2h0IChnKVwiXHJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiMjIwLjI1XCJcclxuICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXHJcbiAgICAgICAgICAgIGZpbGxlZFxyXG4gICAgICAgICAgICBzdHlsZT1cIm1heC13aWR0aDogMjAwcHhcIlxyXG4gICAgICAgICAgICBkZW5zZVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxkaXYgY2xhc3M9XCJyb3cganVzdGlmeS1jZW50ZXJcIj5cclxuICAgICAgPGRpdiBjbGFzcz1cImNvbFwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJyb3cgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyXCI+XHJcbiAgICAgICAgICA8cS1pbWdcclxuICAgICAgICAgICAgc3JjPVwiaHR0cHM6Ly9pLmltZ3VyLmNvbS9KUWhtMjNqLnBuZ1wiXHJcbiAgICAgICAgICAgIHNwaW5uZXItY29sb3I9XCJ3aGl0ZVwiXHJcbiAgICAgICAgICAgIHN0eWxlPVwid2lkdGg6IDEwMCU7IGhlaWdodDogYXV0bztcIlxyXG4gICAgICAgICAgICA6Zml0PVwiJ2NvbnRhaW4nXCJcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c3R5bGUgc2NvcGVkIGxhbmc9XCJzYXNzXCI+XHJcblxyXG48L3N0eWxlPlxyXG4iLCI8c2NyaXB0IGxhbmc9XCJ0c1wiPlxyXG5pbXBvcnQgeyByZWYgfSBmcm9tICd2dWUnXHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgc2V0dXAgKCkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgQVZhbDogcmVmKDMwMCksXHJcbiAgICAgIEZWYWw6IHJlZigyNSksXHJcbiAgICAgIEdWYWw6IHJlZigyNSksXHJcbiAgICAgIEdhdGVuOiByZWYoOCksXHJcbiAgICAgIEdld2ljaHQ6IHJlZigyMDApXHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbjwvc2NyaXB0PlxyXG5cclxuPHRlbXBsYXRlPlxyXG4gIDxkaXYgY2xhc3M9XCJxLXBhLW1kIGV4YW1wbGUtcm93LWVxdWFsLXdpZHRoXCIgc3R5bGU9XCJwYWRkaW5nOiAwXCI+XHJcbiAgICA8ZGl2IGNsYXNzPVwicm93XCI+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJjb2xcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwicS1wYS1tZFwiPlxyXG4gICAgICAgICAgPHEtaW5wdXRcclxuICAgICAgICAgICAgdi1tb2RlbC5udW1iZXI9XCJBVmFsXCJcclxuICAgICAgICAgICAgbGFiZWw9XCJBXCJcclxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCIxMi41XCJcclxuICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXHJcbiAgICAgICAgICAgIGZpbGxlZFxyXG4gICAgICAgICAgICBzdHlsZT1cIm1heC13aWR0aDogMjAwcHhcIlxyXG4gICAgICAgICAgICBkZW5zZVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJjb2xcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwicS1wYS1tZFwiPlxyXG4gICAgICAgICAgPHEtaW5wdXRcclxuICAgICAgICAgICAgdi1tb2RlbC5udW1iZXI9XCJGVmFsXCJcclxuICAgICAgICAgICAgbGFiZWw9XCJGXCJcclxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCIxMi41XCJcclxuICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXHJcbiAgICAgICAgICAgIGZpbGxlZFxyXG4gICAgICAgICAgICBzdHlsZT1cIm1heC13aWR0aDogMjAwcHhcIlxyXG4gICAgICAgICAgICBkZW5zZVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJjb2xcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwicS1wYS1tZFwiPlxyXG4gICAgICAgICAgPHEtaW5wdXRcclxuICAgICAgICAgICAgdi1tb2RlbC5udW1iZXI9XCJHVmFsXCJcclxuICAgICAgICAgICAgbGFiZWw9XCJHXCJcclxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCIxMi41XCJcclxuICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXHJcbiAgICAgICAgICAgIGZpbGxlZFxyXG4gICAgICAgICAgICBzdHlsZT1cIm1heC13aWR0aDogMjAwcHhcIlxyXG4gICAgICAgICAgICBkZW5zZVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cclxuICAgICAgPGRpdiBjbGFzcz1cImNvbFwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJxLXBhLW1kXCI+XHJcbiAgICAgICAgICA8cS1pbnB1dFxyXG4gICAgICAgICAgICB2LW1vZGVsLm51bWJlcj1cIkdhdGVuXCJcclxuICAgICAgICAgICAgbGFiZWw9XCJHYXRlblwiXHJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiOFwiXHJcbiAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxyXG4gICAgICAgICAgICBmaWxsZWRcclxuICAgICAgICAgICAgc3R5bGU9XCJtYXgtd2lkdGg6IDIwMHB4XCJcclxuICAgICAgICAgICAgZGVuc2VcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzPVwiY29sXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cInEtcGEtbWRcIj5cclxuICAgICAgICAgIDxxLWlucHV0XHJcbiAgICAgICAgICAgIHYtbW9kZWwubnVtYmVyPVwiR2V3aWNodFwiXHJcbiAgICAgICAgICAgIGxhYmVsPVwiR2V3aWNodCAoZylcIlxyXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIjIyMC4yNVwiXHJcbiAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxyXG4gICAgICAgICAgICBmaWxsZWRcclxuICAgICAgICAgICAgc3R5bGU9XCJtYXgtd2lkdGg6IDIwMHB4XCJcclxuICAgICAgICAgICAgZGVuc2VcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgICA8ZGl2IGNsYXNzPVwicm93IGp1c3RpZnktY2VudGVyXCI+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJjb2xcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwicm93IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlclwiPlxyXG4gICAgICAgICAgPHEtaW1nXHJcbiAgICAgICAgICAgIHNyYz1cImh0dHBzOi8vaS5pbWd1ci5jb20vSlFobTIzai5wbmdcIlxyXG4gICAgICAgICAgICBzcGlubmVyLWNvbG9yPVwid2hpdGVcIlxyXG4gICAgICAgICAgICBzdHlsZT1cIndpZHRoOiAxMDAlOyBoZWlnaHQ6IGF1dG87XCJcclxuICAgICAgICAgICAgOmZpdD1cIidjb250YWluJ1wiXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHN0eWxlIHNjb3BlZCBsYW5nPVwic2Fzc1wiPlxyXG5cclxuPC9zdHlsZT5cclxuIl0sIm5hbWVzIjpbIl9vcGVuQmxvY2siLCJfY3Jl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QSxXQUFBLE9BQUEsT0FBQTtBQUFBLFlBQ1QsZ0JBQVksRUFBTSxRQUFBLEtBQUE7QUFBQSxZQUNsQixPQUFLO0FBQUEsWUFDTCxhQUFNO0FBQUEsWUFDTixNQUF3QjtBQUFBLFlBQ3hCLFFBQUE7QUFBQSxZQUFBLE9BQUEsRUFBQSxhQUFBLFFBQUE7QUFBQTs7O01BS1IsQ0FBQTtBQUFBLElBQUEsQ0FBQTtBQUFBLElBRUlELGdCQUFBLE9BVU0sWUFWTjtBQUFBLE1BU0lBLGdCQUFBLE9BQUEsYUFBQTtBQUFBLFFBQUFBLGdCQVBnQixPQUFLLGFBQUE7QUFBQSxVQS9EakNDLFlBQUEsUUFBQTtBQUFBLFlBK0RZLFlBQUEsT0FBQTtBQUFBLFlBQ0EsdUJBQWEsT0FBQSxDQUFBLE1BQUEsT0FBQSxDQUFBLElBQUEsQ0FBQSxXQUFBLE9BQUEsUUFBQTtBQUFBLFlBQ2IsZ0JBQWUsRUFBQSxRQUFBLEtBQUE7QUFBQSxZQUNmLE9BQUs7QUFBQSxZQUNMLGFBQU07QUFBQSxZQUNOLE1BQXdCO0FBQUEsWUFDeEIsUUFBQTtBQUFBLFlBQUEsT0FBQSxFQUFBLGFBQUEsUUFBQTtBQUFBOztRQUlOLENBQUE7QUFBQSxNQUFBLENBQUE7QUFBQSxNQVVNRCxnQkFBQSxPQUFBLGFBQUE7QUFBQSxRQUFBQSxnQkFQZ0IsT0FBTyxhQUFBO0FBQUEsVUE1RW5DQyxZQUFBLFFBQUE7QUFBQSxZQTRFWSxZQUFBLE9BQUE7QUFBQSxZQUNBLHVCQUFtQixPQUFBLENBQUEsTUFBQSxPQUFBLENBQUEsSUFBQSxDQUFBLFdBQUEsT0FBQSxVQUFBO0FBQUEsWUFDbkIsZ0JBQVksRUFBUSxRQUFBLEtBQUE7QUFBQSxZQUNwQixPQUFLO0FBQUEsWUFDTCxhQUFNO0FBQUEsWUFDTixNQUF3QjtBQUFBLFlBQ3hCLFFBQUE7QUFBQSxZQUFBLE9BQUEsRUFBQSxhQUFBLFFBQUE7QUFBQTs7O01BS1IsQ0FBQTtBQUFBLElBQUEsQ0FBQTtBQUFBLElBRUlELGdCQUFBLE9BT00sYUFQTjtBQUFBLE1BTUlBLGdCQUFBLE9BQUEsYUFBQTtBQUFBLFFBSklBLGdCQUFBLE9BQUEsYUFBQTtBQUFBLFVBQUFDLFlBQ0osTUFBcUI7QUFBQSxZQUNyQixLQUFrQztBQUFBLFlBQ2pDLGlCQUFjO0FBQUEsWUFBQSxPQUFBLEVBQUEsU0FBQSxRQUFBLFVBQUEsT0FBQTtBQUFBOzs7Ozs7OzsiLCJ4X2dvb2dsZV9pZ25vcmVMaXN0IjpbMCwxXX0=
