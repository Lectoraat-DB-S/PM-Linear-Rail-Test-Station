import { i as isRuntimeSsrPreHydration, r as ref, o as onMounted, w as watch, c as computed, e as inject, a as onBeforeUnmount, ah as formKey, g as getCurrentInstance, X as debounce, a1 as injectProp, a5 as onBeforeUpdate, x as stopAndPrevent, d as nextTick, Y as onDeactivated, Z as onActivated, h, s as prevent, a3 as Transition, k as client } from "./index-B8gzy2O7.js";
import { Q as QIcon, c as QSpinner } from "./vm-DaVx61Sd.js";
import { u as useDarkProps, a as useDark } from "./use-dark-DbAZm5oa.js";
import { a as hSlot } from "./render-DVgBXDT_.js";
let buf, bufIdx = 0;
const hexBytes = new Array(256);
for (let i = 0; i < 256; i++) {
  hexBytes[i] = (i + 256).toString(16).substring(1);
}
const randomBytes = (() => {
  const lib = typeof crypto !== "undefined" ? crypto : typeof window !== "undefined" ? window.crypto || window.msCrypto : void 0;
  if (lib !== void 0) {
    if (lib.randomBytes !== void 0) {
      return lib.randomBytes;
    }
    if (lib.getRandomValues !== void 0) {
      return (n) => {
        const bytes = new Uint8Array(n);
        lib.getRandomValues(bytes);
        return bytes;
      };
    }
  }
  return (n) => {
    const r = [];
    for (let i = n; i > 0; i--) {
      r.push(Math.floor(Math.random() * 256));
    }
    return r;
  };
})();
const BUFFER_SIZE = 4096;
function uid() {
  if (buf === void 0 || bufIdx + 16 > BUFFER_SIZE) {
    bufIdx = 0;
    buf = randomBytes(BUFFER_SIZE);
  }
  const b = Array.prototype.slice.call(buf, bufIdx, bufIdx += 16);
  b[6] = b[6] & 15 | 64;
  b[8] = b[8] & 63 | 128;
  return hexBytes[b[0]] + hexBytes[b[1]] + hexBytes[b[2]] + hexBytes[b[3]] + "-" + hexBytes[b[4]] + hexBytes[b[5]] + "-" + hexBytes[b[6]] + hexBytes[b[7]] + "-" + hexBytes[b[8]] + hexBytes[b[9]] + "-" + hexBytes[b[10]] + hexBytes[b[11]] + hexBytes[b[12]] + hexBytes[b[13]] + hexBytes[b[14]] + hexBytes[b[15]];
}
function parseValue(val) {
  return val === void 0 || val === null ? null : val;
}
function getId(val, required) {
  return val === void 0 || val === null ? required === true ? `f_${uid()}` : null : val;
}
function useId({ getValue, required = true } = {}) {
  if (isRuntimeSsrPreHydration.value === true) {
    const id = getValue !== void 0 ? ref(parseValue(getValue())) : ref(null);
    if (required === true && id.value === null) {
      onMounted(() => {
        id.value = `f_${uid()}`;
      });
    }
    if (getValue !== void 0) {
      watch(getValue, (newId) => {
        id.value = getId(newId, required);
      });
    }
    return id;
  }
  return getValue !== void 0 ? computed(() => getId(getValue(), required)) : ref(`f_${uid()}`);
}
function useFormChild({ validate, resetValidation, requiresQForm }) {
  const $form = inject(formKey, false);
  if ($form !== false) {
    const { props, proxy } = getCurrentInstance();
    Object.assign(proxy, { validate, resetValidation });
    watch(() => props.disable, (val) => {
      if (val === true) {
        typeof resetValidation === "function" && resetValidation();
        $form.unbindComponent(proxy);
      } else {
        $form.bindComponent(proxy);
      }
    });
    onMounted(() => {
      props.disable !== true && $form.bindComponent(proxy);
    });
    onBeforeUnmount(() => {
      props.disable !== true && $form.unbindComponent(proxy);
    });
  } else if (requiresQForm === true) {
    console.error("Parent QForm not found on useFormChild()!");
  }
}
const hex = /^#[0-9a-fA-F]{3}([0-9a-fA-F]{3})?$/, hexa = /^#[0-9a-fA-F]{4}([0-9a-fA-F]{4})?$/, hexOrHexa = /^#([0-9a-fA-F]{3}|[0-9a-fA-F]{4}|[0-9a-fA-F]{6}|[0-9a-fA-F]{8})$/, rgb = /^rgb\(((0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),){2}(0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5])\)$/, rgba = /^rgba\(((0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),){2}(0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),(0|0\.[0-9]+[1-9]|0\.[1-9]+|1)\)$/;
const testPattern = {
  date: (v) => /^-?[\d]+\/[0-1]\d\/[0-3]\d$/.test(v),
  time: (v) => /^([0-1]?\d|2[0-3]):[0-5]\d$/.test(v),
  fulltime: (v) => /^([0-1]?\d|2[0-3]):[0-5]\d:[0-5]\d$/.test(v),
  timeOrFulltime: (v) => /^([0-1]?\d|2[0-3]):[0-5]\d(:[0-5]\d)?$/.test(v),
  // -- RFC 5322 --
  // -- Added in v2.6.6 --
  // This is a basic helper validation.
  // For something more complex (like RFC 822) you should write and use your own rule.
  // We won't be accepting PRs to enhance the one below because of the reason above.
  // eslint-disable-next-line
  email: (v) => /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(v),
  hexColor: (v) => hex.test(v),
  hexaColor: (v) => hexa.test(v),
  hexOrHexaColor: (v) => hexOrHexa.test(v),
  rgbColor: (v) => rgb.test(v),
  rgbaColor: (v) => rgba.test(v),
  rgbOrRgbaColor: (v) => rgb.test(v) || rgba.test(v),
  hexOrRgbColor: (v) => hex.test(v) || rgb.test(v),
  hexaOrRgbaColor: (v) => hexa.test(v) || rgba.test(v),
  anyColor: (v) => hexOrHexa.test(v) || rgb.test(v) || rgba.test(v)
};
const lazyRulesValues = [true, false, "ondemand"];
const useValidateProps = {
  modelValue: {},
  error: {
    type: Boolean,
    default: null
  },
  errorMessage: String,
  noErrorIcon: Boolean,
  rules: Array,
  reactiveRules: Boolean,
  lazyRules: {
    type: [Boolean, String],
    default: false,
    // statement unneeded but avoids future vue implementation changes
    validator: (v) => lazyRulesValues.includes(v)
  }
};
function useValidate(focused, innerLoading) {
  const { props, proxy } = getCurrentInstance();
  const innerError = ref(false);
  const innerErrorMessage = ref(null);
  const isDirtyModel = ref(false);
  useFormChild({ validate, resetValidation });
  let validateIndex = 0, unwatchRules;
  const hasRules = computed(
    () => props.rules !== void 0 && props.rules !== null && props.rules.length !== 0
  );
  const canDebounceValidate = computed(() => props.disable !== true && hasRules.value === true && innerLoading.value === false);
  const hasError = computed(
    () => props.error === true || innerError.value === true
  );
  const errorMessage = computed(() => typeof props.errorMessage === "string" && props.errorMessage.length !== 0 ? props.errorMessage : innerErrorMessage.value);
  watch(() => props.modelValue, () => {
    isDirtyModel.value = true;
    if (canDebounceValidate.value === true && props.lazyRules === false) {
      debouncedValidate();
    }
  });
  function onRulesChange() {
    if (props.lazyRules !== "ondemand" && canDebounceValidate.value === true && isDirtyModel.value === true) {
      debouncedValidate();
    }
  }
  watch(() => props.reactiveRules, (val) => {
    if (val === true) {
      if (unwatchRules === void 0) {
        unwatchRules = watch(() => props.rules, onRulesChange, { immediate: true, deep: true });
      }
    } else if (unwatchRules !== void 0) {
      unwatchRules();
      unwatchRules = void 0;
    }
  }, { immediate: true });
  watch(() => props.lazyRules, onRulesChange);
  watch(focused, (val) => {
    if (val === true) {
      isDirtyModel.value = true;
    } else if (canDebounceValidate.value === true && props.lazyRules !== "ondemand") {
      debouncedValidate();
    }
  });
  function resetValidation() {
    validateIndex++;
    innerLoading.value = false;
    isDirtyModel.value = false;
    innerError.value = false;
    innerErrorMessage.value = null;
    debouncedValidate.cancel();
  }
  function validate(val = props.modelValue) {
    if (props.disable === true || hasRules.value === false) {
      return true;
    }
    const index = ++validateIndex;
    const setDirty = innerLoading.value !== true ? () => {
      isDirtyModel.value = true;
    } : () => {
    };
    const update = (err, msg) => {
      err === true && setDirty();
      innerError.value = err;
      innerErrorMessage.value = msg || null;
      innerLoading.value = false;
    };
    const promises = [];
    for (let i = 0; i < props.rules.length; i++) {
      const rule = props.rules[i];
      let res;
      if (typeof rule === "function") {
        res = rule(val, testPattern);
      } else if (typeof rule === "string" && testPattern[rule] !== void 0) {
        res = testPattern[rule](val);
      }
      if (res === false || typeof res === "string") {
        update(true, res);
        return false;
      } else if (res !== true && res !== void 0) {
        promises.push(res);
      }
    }
    if (promises.length === 0) {
      update(false);
      return true;
    }
    innerLoading.value = true;
    return Promise.all(promises).then(
      (res) => {
        if (res === void 0 || Array.isArray(res) === false || res.length === 0) {
          index === validateIndex && update(false);
          return true;
        }
        const msg = res.find((r) => r === false || typeof r === "string");
        index === validateIndex && update(msg !== void 0, msg);
        return msg === void 0;
      },
      (e) => {
        if (index === validateIndex) {
          console.error(e);
          update(true);
        }
        return false;
      }
    );
  }
  const debouncedValidate = debounce(validate, 0);
  onBeforeUnmount(() => {
    unwatchRules !== void 0 && unwatchRules();
    debouncedValidate.cancel();
  });
  Object.assign(proxy, { resetValidation, validate });
  injectProp(proxy, "hasError", () => hasError.value);
  return {
    isDirtyModel,
    hasRules,
    hasError,
    errorMessage,
    validate,
    resetValidation
  };
}
const listenerRE = /^on[A-Z]/;
function useSplitAttrs() {
  const { attrs, vnode } = getCurrentInstance();
  const acc = {
    listeners: ref({}),
    attributes: ref({})
  };
  function update() {
    const attributes = {};
    const listeners = {};
    for (const key in attrs) {
      if (key !== "class" && key !== "style" && listenerRE.test(key) === false) {
        attributes[key] = attrs[key];
      }
    }
    for (const key in vnode.props) {
      if (listenerRE.test(key) === true) {
        listeners[key] = vnode.props[key];
      }
    }
    acc.attributes.value = attributes;
    acc.listeners.value = listeners;
  }
  onBeforeUpdate(update);
  update();
  return acc;
}
let queue = [];
let waitFlags = [];
function clearFlag(flag) {
  waitFlags = waitFlags.filter((entry) => entry !== flag);
}
function addFocusWaitFlag(flag) {
  clearFlag(flag);
  waitFlags.push(flag);
}
function removeFocusWaitFlag(flag) {
  clearFlag(flag);
  if (waitFlags.length === 0 && queue.length !== 0) {
    queue[queue.length - 1]();
    queue = [];
  }
}
function addFocusFn(fn) {
  if (waitFlags.length === 0) {
    fn();
  } else {
    queue.push(fn);
  }
}
function removeFocusFn(fn) {
  queue = queue.filter((entry) => entry !== fn);
}
function fieldValueIsFilled(val) {
  return val !== void 0 && val !== null && ("" + val).length !== 0;
}
const useFieldProps = {
  ...useDarkProps,
  ...useValidateProps,
  label: String,
  stackLabel: Boolean,
  hint: String,
  hideHint: Boolean,
  prefix: String,
  suffix: String,
  labelColor: String,
  color: String,
  bgColor: String,
  filled: Boolean,
  outlined: Boolean,
  borderless: Boolean,
  standout: [Boolean, String],
  square: Boolean,
  loading: Boolean,
  labelSlot: Boolean,
  bottomSlots: Boolean,
  hideBottomSpace: Boolean,
  rounded: Boolean,
  dense: Boolean,
  itemAligned: Boolean,
  counter: Boolean,
  clearable: Boolean,
  clearIcon: String,
  disable: Boolean,
  readonly: Boolean,
  autofocus: Boolean,
  for: String,
  maxlength: [Number, String]
};
const useFieldEmits = ["update:modelValue", "clear", "focus", "blur", "popupShow", "popupHide"];
function useFieldState({ requiredForAttr = true, tagProp } = {}) {
  const { props, proxy } = getCurrentInstance();
  const isDark = useDark(props, proxy.$q);
  const targetUid = useId({
    required: requiredForAttr,
    getValue: () => props.for
  });
  return {
    requiredForAttr,
    tag: tagProp === true ? computed(() => props.tag) : { value: "label" },
    isDark,
    editable: computed(
      () => props.disable !== true && props.readonly !== true
    ),
    innerLoading: ref(false),
    focused: ref(false),
    hasPopupOpen: false,
    splitAttrs: useSplitAttrs(),
    targetUid,
    rootRef: ref(null),
    targetRef: ref(null),
    controlRef: ref(null)
    /**
         * user supplied additionals:
    
         * innerValue - computed
         * floatingLabel - computed
         * inputRef - computed
    
         * fieldClass - computed
         * hasShadow - computed
    
         * controlEvents - Object with fn(e)
    
         * getControl - fn
         * getInnerAppend - fn
         * getControlChild - fn
         * getShadowControl - fn
         * showPopup - fn
         */
  };
}
function useField(state) {
  const { props, emit, slots, attrs, proxy } = getCurrentInstance();
  const { $q } = proxy;
  let focusoutTimer = null;
  if (state.hasValue === void 0) {
    state.hasValue = computed(() => fieldValueIsFilled(props.modelValue));
  }
  if (state.emitValue === void 0) {
    state.emitValue = (value) => {
      emit("update:modelValue", value);
    };
  }
  if (state.controlEvents === void 0) {
    state.controlEvents = {
      onFocusin: onControlFocusin,
      onFocusout: onControlFocusout
    };
  }
  Object.assign(state, {
    clearValue,
    onControlFocusin,
    onControlFocusout,
    focus
  });
  if (state.computedCounter === void 0) {
    state.computedCounter = computed(() => {
      if (props.counter !== false) {
        const len = typeof props.modelValue === "string" || typeof props.modelValue === "number" ? ("" + props.modelValue).length : Array.isArray(props.modelValue) === true ? props.modelValue.length : 0;
        const max = props.maxlength !== void 0 ? props.maxlength : props.maxValues;
        return len + (max !== void 0 ? " / " + max : "");
      }
    });
  }
  const {
    isDirtyModel,
    hasRules,
    hasError,
    errorMessage,
    resetValidation
  } = useValidate(state.focused, state.innerLoading);
  const floatingLabel = state.floatingLabel !== void 0 ? computed(() => props.stackLabel === true || state.focused.value === true || state.floatingLabel.value === true) : computed(() => props.stackLabel === true || state.focused.value === true || state.hasValue.value === true);
  const shouldRenderBottom = computed(
    () => props.bottomSlots === true || props.hint !== void 0 || hasRules.value === true || props.counter === true || props.error !== null
  );
  const styleType = computed(() => {
    if (props.filled === true) {
      return "filled";
    }
    if (props.outlined === true) {
      return "outlined";
    }
    if (props.borderless === true) {
      return "borderless";
    }
    if (props.standout) {
      return "standout";
    }
    return "standard";
  });
  const classes = computed(
    () => `q-field row no-wrap items-start q-field--${styleType.value}` + (state.fieldClass !== void 0 ? ` ${state.fieldClass.value}` : "") + (props.rounded === true ? " q-field--rounded" : "") + (props.square === true ? " q-field--square" : "") + (floatingLabel.value === true ? " q-field--float" : "") + (hasLabel.value === true ? " q-field--labeled" : "") + (props.dense === true ? " q-field--dense" : "") + (props.itemAligned === true ? " q-field--item-aligned q-item-type" : "") + (state.isDark.value === true ? " q-field--dark" : "") + (state.getControl === void 0 ? " q-field--auto-height" : "") + (state.focused.value === true ? " q-field--focused" : "") + (hasError.value === true ? " q-field--error" : "") + (hasError.value === true || state.focused.value === true ? " q-field--highlighted" : "") + (props.hideBottomSpace !== true && shouldRenderBottom.value === true ? " q-field--with-bottom" : "") + (props.disable === true ? " q-field--disabled" : props.readonly === true ? " q-field--readonly" : "")
  );
  const contentClass = computed(
    () => "q-field__control relative-position row no-wrap" + (props.bgColor !== void 0 ? ` bg-${props.bgColor}` : "") + (hasError.value === true ? " text-negative" : typeof props.standout === "string" && props.standout.length !== 0 && state.focused.value === true ? ` ${props.standout}` : props.color !== void 0 ? ` text-${props.color}` : "")
  );
  const hasLabel = computed(
    () => props.labelSlot === true || props.label !== void 0
  );
  const labelClass = computed(
    () => "q-field__label no-pointer-events absolute ellipsis" + (props.labelColor !== void 0 && hasError.value !== true ? ` text-${props.labelColor}` : "")
  );
  const controlSlotScope = computed(() => ({
    id: state.targetUid.value,
    editable: state.editable.value,
    focused: state.focused.value,
    floatingLabel: floatingLabel.value,
    modelValue: props.modelValue,
    emitValue: state.emitValue
  }));
  const attributes = computed(() => {
    const acc = {};
    if (state.targetUid.value) {
      acc.for = state.targetUid.value;
    }
    if (props.disable === true) {
      acc["aria-disabled"] = "true";
    }
    return acc;
  });
  function focusHandler() {
    const el = document.activeElement;
    let target = state.targetRef !== void 0 && state.targetRef.value;
    if (target && (el === null || el.id !== state.targetUid.value)) {
      target.hasAttribute("tabindex") === true || (target = target.querySelector("[tabindex]"));
      if (target && target !== el) {
        target.focus({ preventScroll: true });
      }
    }
  }
  function focus() {
    addFocusFn(focusHandler);
  }
  function blur() {
    removeFocusFn(focusHandler);
    const el = document.activeElement;
    if (el !== null && state.rootRef.value.contains(el)) {
      el.blur();
    }
  }
  function onControlFocusin(e) {
    if (focusoutTimer !== null) {
      clearTimeout(focusoutTimer);
      focusoutTimer = null;
    }
    if (state.editable.value === true && state.focused.value === false) {
      state.focused.value = true;
      emit("focus", e);
    }
  }
  function onControlFocusout(e, then) {
    focusoutTimer !== null && clearTimeout(focusoutTimer);
    focusoutTimer = setTimeout(() => {
      focusoutTimer = null;
      if (document.hasFocus() === true && (state.hasPopupOpen === true || state.controlRef === void 0 || state.controlRef.value === null || state.controlRef.value.contains(document.activeElement) !== false)) {
        return;
      }
      if (state.focused.value === true) {
        state.focused.value = false;
        emit("blur", e);
      }
      then !== void 0 && then();
    });
  }
  function clearValue(e) {
    stopAndPrevent(e);
    if ($q.platform.is.mobile !== true) {
      const el = state.targetRef !== void 0 && state.targetRef.value || state.rootRef.value;
      el.focus();
    } else if (state.rootRef.value.contains(document.activeElement) === true) {
      document.activeElement.blur();
    }
    if (props.type === "file") {
      state.inputRef.value.value = null;
    }
    emit("update:modelValue", null);
    emit("clear", props.modelValue);
    nextTick(() => {
      const isDirty = isDirtyModel.value;
      resetValidation();
      isDirtyModel.value = isDirty;
    });
  }
  function getContent() {
    const node = [];
    slots.prepend !== void 0 && node.push(
      h("div", {
        class: "q-field__prepend q-field__marginal row no-wrap items-center",
        key: "prepend",
        onClick: prevent
      }, slots.prepend())
    );
    node.push(
      h("div", {
        class: "q-field__control-container col relative-position row no-wrap q-anchor--skip"
      }, getControlContainer())
    );
    hasError.value === true && props.noErrorIcon === false && node.push(
      getInnerAppendNode("error", [
        h(QIcon, { name: $q.iconSet.field.error, color: "negative" })
      ])
    );
    if (props.loading === true || state.innerLoading.value === true) {
      node.push(
        getInnerAppendNode(
          "inner-loading-append",
          slots.loading !== void 0 ? slots.loading() : [h(QSpinner, { color: props.color })]
        )
      );
    } else if (props.clearable === true && state.hasValue.value === true && state.editable.value === true) {
      node.push(
        getInnerAppendNode("inner-clearable-append", [
          h(QIcon, {
            class: "q-field__focusable-action",
            tag: "button",
            name: props.clearIcon || $q.iconSet.field.clear,
            tabindex: 0,
            type: "button",
            "aria-hidden": null,
            role: null,
            onClick: clearValue
          })
        ])
      );
    }
    slots.append !== void 0 && node.push(
      h("div", {
        class: "q-field__append q-field__marginal row no-wrap items-center",
        key: "append",
        onClick: prevent
      }, slots.append())
    );
    state.getInnerAppend !== void 0 && node.push(
      getInnerAppendNode("inner-append", state.getInnerAppend())
    );
    state.getControlChild !== void 0 && node.push(
      state.getControlChild()
    );
    return node;
  }
  function getControlContainer() {
    const node = [];
    props.prefix !== void 0 && props.prefix !== null && node.push(
      h("div", {
        class: "q-field__prefix no-pointer-events row items-center"
      }, props.prefix)
    );
    if (state.getShadowControl !== void 0 && state.hasShadow.value === true) {
      node.push(
        state.getShadowControl()
      );
    }
    if (state.getControl !== void 0) {
      node.push(state.getControl());
    } else if (slots.rawControl !== void 0) {
      node.push(slots.rawControl());
    } else if (slots.control !== void 0) {
      node.push(
        h("div", {
          ref: state.targetRef,
          class: "q-field__native row",
          tabindex: -1,
          ...state.splitAttrs.attributes.value,
          "data-autofocus": props.autofocus === true || void 0
        }, slots.control(controlSlotScope.value))
      );
    }
    hasLabel.value === true && node.push(
      h("div", {
        class: labelClass.value
      }, hSlot(slots.label, props.label))
    );
    props.suffix !== void 0 && props.suffix !== null && node.push(
      h("div", {
        class: "q-field__suffix no-pointer-events row items-center"
      }, props.suffix)
    );
    return node.concat(hSlot(slots.default));
  }
  function getBottom() {
    let msg, key;
    if (hasError.value === true) {
      if (errorMessage.value !== null) {
        msg = [h("div", { role: "alert" }, errorMessage.value)];
        key = `q--slot-error-${errorMessage.value}`;
      } else {
        msg = hSlot(slots.error);
        key = "q--slot-error";
      }
    } else if (props.hideHint !== true || state.focused.value === true) {
      if (props.hint !== void 0) {
        msg = [h("div", props.hint)];
        key = `q--slot-hint-${props.hint}`;
      } else {
        msg = hSlot(slots.hint);
        key = "q--slot-hint";
      }
    }
    const hasCounter = props.counter === true || slots.counter !== void 0;
    if (props.hideBottomSpace === true && hasCounter === false && msg === void 0) {
      return;
    }
    const main = h("div", {
      key,
      class: "q-field__messages col"
    }, msg);
    return h("div", {
      class: "q-field__bottom row items-start q-field__bottom--" + (props.hideBottomSpace !== true ? "animated" : "stale"),
      onClick: prevent
    }, [
      props.hideBottomSpace === true ? main : h(Transition, { name: "q-transition--field-message" }, () => main),
      hasCounter === true ? h("div", {
        class: "q-field__counter"
      }, slots.counter !== void 0 ? slots.counter() : state.computedCounter.value) : null
    ]);
  }
  function getInnerAppendNode(key, content) {
    return content === null ? null : h("div", {
      key,
      class: "q-field__append q-field__marginal row no-wrap items-center q-anchor--skip"
    }, content);
  }
  let shouldActivate = false;
  onDeactivated(() => {
    shouldActivate = true;
  });
  onActivated(() => {
    shouldActivate === true && props.autofocus === true && proxy.focus();
  });
  props.autofocus === true && onMounted(() => {
    proxy.focus();
  });
  onBeforeUnmount(() => {
    focusoutTimer !== null && clearTimeout(focusoutTimer);
  });
  Object.assign(proxy, { focus, blur });
  return function renderField() {
    const labelAttrs = state.getControl === void 0 && slots.control === void 0 ? {
      ...state.splitAttrs.attributes.value,
      "data-autofocus": props.autofocus === true || void 0,
      ...attributes.value
    } : attributes.value;
    return h(state.tag.value, {
      ref: state.rootRef,
      class: [
        classes.value,
        attrs.class
      ],
      style: attrs.style,
      ...labelAttrs
    }, [
      slots.before !== void 0 ? h("div", {
        class: "q-field__before q-field__marginal row no-wrap items-center",
        onClick: prevent
      }, slots.before()) : null,
      h("div", {
        class: "q-field__inner relative-position col self-stretch"
      }, [
        h("div", {
          ref: state.controlRef,
          class: contentClass.value,
          tabindex: -1,
          ...state.controlEvents
        }, getContent()),
        shouldRenderBottom.value === true ? getBottom() : null
      ]),
      slots.after !== void 0 ? h("div", {
        class: "q-field__after q-field__marginal row no-wrap items-center",
        onClick: prevent
      }, slots.after()) : null
    ]);
  };
}
const useFormProps = {
  name: String
};
function useFormInject(formAttrs = {}) {
  return (child, action, className) => {
    child[action](
      h("input", {
        class: "hidden" + (className || ""),
        ...formAttrs.value
      })
    );
  };
}
function useFormInputNameAttr(props) {
  return computed(() => props.name || props.for);
}
const isJapanese = /[\u3000-\u303f\u3040-\u309f\u30a0-\u30ff\uff00-\uff9f\u4e00-\u9faf\u3400-\u4dbf]/;
const isChinese = /[\u4e00-\u9fff\u3400-\u4dbf\u{20000}-\u{2a6df}\u{2a700}-\u{2b73f}\u{2b740}-\u{2b81f}\u{2b820}-\u{2ceaf}\uf900-\ufaff\u3300-\u33ff\ufe30-\ufe4f\uf900-\ufaff\u{2f800}-\u{2fa1f}]/u;
const isKorean = /[\u3131-\u314e\u314f-\u3163\uac00-\ud7a3]/;
const isPlainText = /[a-z0-9_ -]$/i;
function useKeyComposition(onInput) {
  return function onComposition(e) {
    if (e.type === "compositionend" || e.type === "change") {
      if (e.target.qComposing !== true)
        return;
      e.target.qComposing = false;
      onInput(e);
    } else if (e.type === "compositionupdate" && e.target.qComposing !== true && typeof e.data === "string") {
      const isComposing = client.is.firefox === true ? isPlainText.test(e.data) === false : isJapanese.test(e.data) === true || isChinese.test(e.data) === true || isKorean.test(e.data) === true;
      if (isComposing === true) {
        e.target.qComposing = true;
      }
    }
  };
}
export {
  useFieldEmits as a,
  useField as b,
  useFieldState as c,
  addFocusWaitFlag as d,
  addFocusFn as e,
  useFormProps as f,
  useFormInputNameAttr as g,
  fieldValueIsFilled as h,
  useKeyComposition as i,
  useFormInject as j,
  removeFocusWaitFlag as r,
  useFieldProps as u
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlLWtleS1jb21wb3NpdGlvbi1EWWV5ekFHSS5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL3F1YXNhckAyLjE1LjEvbm9kZV9tb2R1bGVzL3F1YXNhci9zcmMvdXRpbHMvdWlkLmpzIiwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL3F1YXNhckAyLjE1LjEvbm9kZV9tb2R1bGVzL3F1YXNhci9zcmMvY29tcG9zYWJsZXMvdXNlLWlkLmpzIiwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL3F1YXNhckAyLjE1LjEvbm9kZV9tb2R1bGVzL3F1YXNhci9zcmMvY29tcG9zYWJsZXMvdXNlLWZvcm0tY2hpbGQuanMiLCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vcXVhc2FyQDIuMTUuMS9ub2RlX21vZHVsZXMvcXVhc2FyL3NyYy91dGlscy9wYXR0ZXJucy5qcyIsIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9xdWFzYXJAMi4xNS4xL25vZGVfbW9kdWxlcy9xdWFzYXIvc3JjL2NvbXBvc2FibGVzL3ByaXZhdGUvdXNlLXZhbGlkYXRlLmpzIiwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL3F1YXNhckAyLjE1LjEvbm9kZV9tb2R1bGVzL3F1YXNhci9zcmMvY29tcG9zYWJsZXMvdXNlLXNwbGl0LWF0dHJzLmpzIiwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL3F1YXNhckAyLjE1LjEvbm9kZV9tb2R1bGVzL3F1YXNhci9zcmMvdXRpbHMvcHJpdmF0ZS9mb2N1cy1tYW5hZ2VyLmpzIiwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL3F1YXNhckAyLjE1LjEvbm9kZV9tb2R1bGVzL3F1YXNhci9zcmMvY29tcG9zYWJsZXMvcHJpdmF0ZS91c2UtZmllbGQuanMiLCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vcXVhc2FyQDIuMTUuMS9ub2RlX21vZHVsZXMvcXVhc2FyL3NyYy9jb21wb3NhYmxlcy9wcml2YXRlL3VzZS1mb3JtLmpzIiwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL3F1YXNhckAyLjE1LjEvbm9kZV9tb2R1bGVzL3F1YXNhci9zcmMvY29tcG9zYWJsZXMvcHJpdmF0ZS91c2Uta2V5LWNvbXBvc2l0aW9uLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQmFzZWQgb24gdGhlIHdvcmsgb2YgaHR0cHM6Ly9naXRodWIuY29tL2pjaG9vay91dWlkLXJhbmRvbVxuICovXG5cbmxldFxuICBidWYsXG4gIGJ1ZklkeCA9IDBcbmNvbnN0IGhleEJ5dGVzID0gbmV3IEFycmF5KDI1NilcblxuLy8gUHJlLWNhbGN1bGF0ZSB0b1N0cmluZygxNikgZm9yIHNwZWVkXG5mb3IgKGxldCBpID0gMDsgaSA8IDI1NjsgaSsrKSB7XG4gIGhleEJ5dGVzWyBpIF0gPSAoaSArIDB4MTAwKS50b1N0cmluZygxNikuc3Vic3RyaW5nKDEpXG59XG5cbi8vIFVzZSBiZXN0IGF2YWlsYWJsZSBQUk5HXG5jb25zdCByYW5kb21CeXRlcyA9ICgoKSA9PiB7XG4gIC8vIE5vZGUgJiBCcm93c2VyIHN1cHBvcnRcbiAgY29uc3QgbGliID0gdHlwZW9mIGNyeXB0byAhPT0gJ3VuZGVmaW5lZCdcbiAgICA/IGNyeXB0b1xuICAgIDogKFxuICAgICAgICB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJ1xuICAgICAgICAgID8gd2luZG93LmNyeXB0byB8fCB3aW5kb3cubXNDcnlwdG9cbiAgICAgICAgICA6IHZvaWQgMFxuICAgICAgKVxuXG4gIGlmIChsaWIgIT09IHZvaWQgMCkge1xuICAgIGlmIChsaWIucmFuZG9tQnl0ZXMgIT09IHZvaWQgMCkge1xuICAgICAgcmV0dXJuIGxpYi5yYW5kb21CeXRlc1xuICAgIH1cbiAgICBpZiAobGliLmdldFJhbmRvbVZhbHVlcyAhPT0gdm9pZCAwKSB7XG4gICAgICByZXR1cm4gbiA9PiB7XG4gICAgICAgIGNvbnN0IGJ5dGVzID0gbmV3IFVpbnQ4QXJyYXkobilcbiAgICAgICAgbGliLmdldFJhbmRvbVZhbHVlcyhieXRlcylcbiAgICAgICAgcmV0dXJuIGJ5dGVzXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG4gPT4ge1xuICAgIGNvbnN0IHIgPSBbXVxuICAgIGZvciAobGV0IGkgPSBuOyBpID4gMDsgaS0tKSB7XG4gICAgICByLnB1c2goTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMjU2KSlcbiAgICB9XG4gICAgcmV0dXJuIHJcbiAgfVxufSkoKVxuXG4vLyBCdWZmZXIgcmFuZG9tIG51bWJlcnMgZm9yIHNwZWVkXG4vLyBSZWR1Y2UgbWVtb3J5IHVzYWdlIGJ5IGRlY3JlYXNpbmcgdGhpcyBudW1iZXIgKG1pbiAxNilcbi8vIG9yIGltcHJvdmUgc3BlZWQgYnkgaW5jcmVhc2luZyB0aGlzIG51bWJlciAodHJ5IDE2Mzg0KVxuY29uc3QgQlVGRkVSX1NJWkUgPSA0MDk2XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uICgpIHtcbiAgLy8gQnVmZmVyIHNvbWUgcmFuZG9tIGJ5dGVzIGZvciBzcGVlZFxuICBpZiAoYnVmID09PSB2b2lkIDAgfHwgKGJ1ZklkeCArIDE2ID4gQlVGRkVSX1NJWkUpKSB7XG4gICAgYnVmSWR4ID0gMFxuICAgIGJ1ZiA9IHJhbmRvbUJ5dGVzKEJVRkZFUl9TSVpFKVxuICB9XG5cbiAgY29uc3QgYiA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGJ1ZiwgYnVmSWR4LCAoYnVmSWR4ICs9IDE2KSlcbiAgYlsgNiBdID0gKGJbIDYgXSAmIDB4MGYpIHwgMHg0MFxuICBiWyA4IF0gPSAoYlsgOCBdICYgMHgzZikgfCAweDgwXG5cbiAgcmV0dXJuIGhleEJ5dGVzWyBiWyAwIF0gXSArIGhleEJ5dGVzWyBiWyAxIF0gXVxuICAgICsgaGV4Qnl0ZXNbIGJbIDIgXSBdICsgaGV4Qnl0ZXNbIGJbIDMgXSBdICsgJy0nXG4gICAgKyBoZXhCeXRlc1sgYlsgNCBdIF0gKyBoZXhCeXRlc1sgYlsgNSBdIF0gKyAnLSdcbiAgICArIGhleEJ5dGVzWyBiWyA2IF0gXSArIGhleEJ5dGVzWyBiWyA3IF0gXSArICctJ1xuICAgICsgaGV4Qnl0ZXNbIGJbIDggXSBdICsgaGV4Qnl0ZXNbIGJbIDkgXSBdICsgJy0nXG4gICAgKyBoZXhCeXRlc1sgYlsgMTAgXSBdICsgaGV4Qnl0ZXNbIGJbIDExIF0gXVxuICAgICsgaGV4Qnl0ZXNbIGJbIDEyIF0gXSArIGhleEJ5dGVzWyBiWyAxMyBdIF1cbiAgICArIGhleEJ5dGVzWyBiWyAxNCBdIF0gKyBoZXhCeXRlc1sgYlsgMTUgXSBdXG59XG4iLCJpbXBvcnQgeyByZWYsIGNvbXB1dGVkLCB3YXRjaCwgb25Nb3VudGVkIH0gZnJvbSAndnVlJ1xuXG5pbXBvcnQgdWlkIGZyb20gJy4uL3V0aWxzL3VpZC5qcydcblxuaW1wb3J0IHsgaXNSdW50aW1lU3NyUHJlSHlkcmF0aW9uIH0gZnJvbSAnLi4vcGx1Z2lucy9QbGF0Zm9ybS5qcydcblxuZnVuY3Rpb24gcGFyc2VWYWx1ZSAodmFsKSB7XG4gIHJldHVybiB2YWwgPT09IHZvaWQgMCB8fCB2YWwgPT09IG51bGxcbiAgICA/IG51bGxcbiAgICA6IHZhbFxufVxuXG5mdW5jdGlvbiBnZXRJZCAodmFsLCByZXF1aXJlZCkge1xuICByZXR1cm4gdmFsID09PSB2b2lkIDAgfHwgdmFsID09PSBudWxsXG4gICAgPyAocmVxdWlyZWQgPT09IHRydWUgPyBgZl8keyB1aWQoKSB9YCA6IG51bGwpXG4gICAgOiB2YWxcbn1cblxuLyoqXG4gKiBSZXR1cm5zIGFuIFwiaWRcIiB3aGljaCBpcyBhIHJlZigpIHRoYXQgY2FuIGJlIHVzZWQgYXNcbiAqIGEgdW5pcXVlIGlkZW50aWZpZXIgdG8gYXBwbHkgdG8gYSBET00gbm9kZSBhdHRyaWJ1dGUuXG4gKlxuICogT24gU1NSLCBpdCB0YWtlcyBjYXJlIG9mIGdlbmVyYXRpbmcgdGhlIGlkIG9uIHRoZSBjbGllbnQgc2lkZSAob25seSkgdG9cbiAqIGF2b2lkIGh5ZHJhdGlvbiBlcnJvcnMuXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uICh7IGdldFZhbHVlLCByZXF1aXJlZCA9IHRydWUgfSA9IHt9KSB7XG4gIGlmIChpc1J1bnRpbWVTc3JQcmVIeWRyYXRpb24udmFsdWUgPT09IHRydWUpIHtcbiAgICBjb25zdCBpZCA9IGdldFZhbHVlICE9PSB2b2lkIDBcbiAgICAgID8gcmVmKHBhcnNlVmFsdWUoZ2V0VmFsdWUoKSkpXG4gICAgICA6IHJlZihudWxsKVxuXG4gICAgaWYgKHJlcXVpcmVkID09PSB0cnVlICYmIGlkLnZhbHVlID09PSBudWxsKSB7XG4gICAgICBvbk1vdW50ZWQoKCkgPT4ge1xuICAgICAgICBpZC52YWx1ZSA9IGBmXyR7IHVpZCgpIH1gIC8vIGdldElkKG51bGwsIHRydWUpXG4gICAgICB9KVxuICAgIH1cblxuICAgIGlmIChnZXRWYWx1ZSAhPT0gdm9pZCAwKSB7XG4gICAgICB3YXRjaChnZXRWYWx1ZSwgbmV3SWQgPT4ge1xuICAgICAgICBpZC52YWx1ZSA9IGdldElkKG5ld0lkLCByZXF1aXJlZClcbiAgICAgIH0pXG4gICAgfVxuXG4gICAgcmV0dXJuIGlkXG4gIH1cblxuICByZXR1cm4gZ2V0VmFsdWUgIT09IHZvaWQgMFxuICAgID8gY29tcHV0ZWQoKCkgPT4gZ2V0SWQoZ2V0VmFsdWUoKSwgcmVxdWlyZWQpKVxuICAgIDogcmVmKGBmXyR7IHVpZCgpIH1gKSAvLyBnZXRJZChudWxsLCB0cnVlKVxufVxuIiwiaW1wb3J0IHsgaW5qZWN0LCB3YXRjaCwgZ2V0Q3VycmVudEluc3RhbmNlLCBvbk1vdW50ZWQsIG9uQmVmb3JlVW5tb3VudCB9IGZyb20gJ3Z1ZSdcblxuaW1wb3J0IHsgZm9ybUtleSB9IGZyb20gJy4uL3V0aWxzL3ByaXZhdGUvc3ltYm9scy5qcydcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKHsgdmFsaWRhdGUsIHJlc2V0VmFsaWRhdGlvbiwgcmVxdWlyZXNRRm9ybSB9KSB7XG4gIGNvbnN0ICRmb3JtID0gaW5qZWN0KGZvcm1LZXksIGZhbHNlKVxuXG4gIGlmICgkZm9ybSAhPT0gZmFsc2UpIHtcbiAgICBjb25zdCB7IHByb3BzLCBwcm94eSB9ID0gZ2V0Q3VycmVudEluc3RhbmNlKClcblxuICAgIC8vIGV4cG9ydCBwdWJsaWMgbWV0aG9kIChzbyBpdCBjYW4gYmUgdXNlZCBpbiBRRm9ybSlcbiAgICBPYmplY3QuYXNzaWduKHByb3h5LCB7IHZhbGlkYXRlLCByZXNldFZhbGlkYXRpb24gfSlcblxuICAgIHdhdGNoKCgpID0+IHByb3BzLmRpc2FibGUsIHZhbCA9PiB7XG4gICAgICBpZiAodmFsID09PSB0cnVlKSB7XG4gICAgICAgIHR5cGVvZiByZXNldFZhbGlkYXRpb24gPT09ICdmdW5jdGlvbicgJiYgcmVzZXRWYWxpZGF0aW9uKClcbiAgICAgICAgJGZvcm0udW5iaW5kQ29tcG9uZW50KHByb3h5KVxuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgICRmb3JtLmJpbmRDb21wb25lbnQocHJveHkpXG4gICAgICB9XG4gICAgfSlcblxuICAgIG9uTW91bnRlZCgoKSA9PiB7XG4gICAgICAvLyByZWdpc3RlciB0byBwYXJlbnQgUUZvcm1cbiAgICAgIHByb3BzLmRpc2FibGUgIT09IHRydWUgJiYgJGZvcm0uYmluZENvbXBvbmVudChwcm94eSlcbiAgICB9KVxuXG4gICAgb25CZWZvcmVVbm1vdW50KCgpID0+IHtcbiAgICAgIC8vIHVuLXJlZ2lzdGVyIGZyb20gcGFyZW50IFFGb3JtXG4gICAgICBwcm9wcy5kaXNhYmxlICE9PSB0cnVlICYmICRmb3JtLnVuYmluZENvbXBvbmVudChwcm94eSlcbiAgICB9KVxuICB9XG4gIGVsc2UgaWYgKHJlcXVpcmVzUUZvcm0gPT09IHRydWUpIHtcbiAgICBjb25zb2xlLmVycm9yKCdQYXJlbnQgUUZvcm0gbm90IGZvdW5kIG9uIHVzZUZvcm1DaGlsZCgpIScpXG4gIH1cbn1cbiIsIi8vIGZpbGUgcmVmZXJlbmNlZCBmcm9tIGRvY3NcblxuY29uc3RcbiAgaGV4ID0gL14jWzAtOWEtZkEtRl17M30oWzAtOWEtZkEtRl17M30pPyQvLFxuICBoZXhhID0gL14jWzAtOWEtZkEtRl17NH0oWzAtOWEtZkEtRl17NH0pPyQvLFxuICBoZXhPckhleGEgPSAvXiMoWzAtOWEtZkEtRl17M318WzAtOWEtZkEtRl17NH18WzAtOWEtZkEtRl17Nn18WzAtOWEtZkEtRl17OH0pJC8sXG4gIHJnYiA9IC9ecmdiXFwoKCgwfFsxLTldW1xcZF0/fDFbXFxkXXswLDJ9fDJbXFxkXT98MlswLTRdW1xcZF18MjVbMC01XSksKXsyfSgwfFsxLTldW1xcZF0/fDFbXFxkXXswLDJ9fDJbXFxkXT98MlswLTRdW1xcZF18MjVbMC01XSlcXCkkLyxcbiAgcmdiYSA9IC9ecmdiYVxcKCgoMHxbMS05XVtcXGRdP3wxW1xcZF17MCwyfXwyW1xcZF0/fDJbMC00XVtcXGRdfDI1WzAtNV0pLCl7Mn0oMHxbMS05XVtcXGRdP3wxW1xcZF17MCwyfXwyW1xcZF0/fDJbMC00XVtcXGRdfDI1WzAtNV0pLCgwfDBcXC5bMC05XStbMS05XXwwXFwuWzEtOV0rfDEpXFwpJC9cblxuLy8gS2VlcCBpbiBzeW5jIHdpdGggdWkvdHlwZXMvYXBpL3ZhbGlkYXRpb24uZC50c1xuZXhwb3J0IGNvbnN0IHRlc3RQYXR0ZXJuID0ge1xuICBkYXRlOiB2ID0+IC9eLT9bXFxkXStcXC9bMC0xXVxcZFxcL1swLTNdXFxkJC8udGVzdCh2KSxcbiAgdGltZTogdiA9PiAvXihbMC0xXT9cXGR8MlswLTNdKTpbMC01XVxcZCQvLnRlc3QodiksXG4gIGZ1bGx0aW1lOiB2ID0+IC9eKFswLTFdP1xcZHwyWzAtM10pOlswLTVdXFxkOlswLTVdXFxkJC8udGVzdCh2KSxcbiAgdGltZU9yRnVsbHRpbWU6IHYgPT4gL14oWzAtMV0/XFxkfDJbMC0zXSk6WzAtNV1cXGQoOlswLTVdXFxkKT8kLy50ZXN0KHYpLFxuXG4gIC8vIC0tIFJGQyA1MzIyIC0tXG4gIC8vIC0tIEFkZGVkIGluIHYyLjYuNiAtLVxuICAvLyBUaGlzIGlzIGEgYmFzaWMgaGVscGVyIHZhbGlkYXRpb24uXG4gIC8vIEZvciBzb21ldGhpbmcgbW9yZSBjb21wbGV4IChsaWtlIFJGQyA4MjIpIHlvdSBzaG91bGQgd3JpdGUgYW5kIHVzZSB5b3VyIG93biBydWxlLlxuICAvLyBXZSB3b24ndCBiZSBhY2NlcHRpbmcgUFJzIHRvIGVuaGFuY2UgdGhlIG9uZSBiZWxvdyBiZWNhdXNlIG9mIHRoZSByZWFzb24gYWJvdmUuXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZVxuICBlbWFpbDogdiA9PiAvXigoW148PigpXFxbXFxdXFxcXC4sOzpcXHNAXCJdKyhcXC5bXjw+KClcXFtcXF1cXFxcLiw7Olxcc0BcIl0rKSopfChcIi4rXCIpKUAoKFxcW1swLTldezEsM31cXC5bMC05XXsxLDN9XFwuWzAtOV17MSwzfVxcLlswLTldezEsM31dKXwoKFthLXpBLVpcXC0wLTldK1xcLikrW2EtekEtWl17Mix9KSkkLy50ZXN0KHYpLFxuXG4gIGhleENvbG9yOiB2ID0+IGhleC50ZXN0KHYpLFxuICBoZXhhQ29sb3I6IHYgPT4gaGV4YS50ZXN0KHYpLFxuICBoZXhPckhleGFDb2xvcjogdiA9PiBoZXhPckhleGEudGVzdCh2KSxcblxuICByZ2JDb2xvcjogdiA9PiByZ2IudGVzdCh2KSxcbiAgcmdiYUNvbG9yOiB2ID0+IHJnYmEudGVzdCh2KSxcbiAgcmdiT3JSZ2JhQ29sb3I6IHYgPT4gcmdiLnRlc3QodikgfHwgcmdiYS50ZXN0KHYpLFxuXG4gIGhleE9yUmdiQ29sb3I6IHYgPT4gaGV4LnRlc3QodikgfHwgcmdiLnRlc3QodiksXG4gIGhleGFPclJnYmFDb2xvcjogdiA9PiBoZXhhLnRlc3QodikgfHwgcmdiYS50ZXN0KHYpLFxuICBhbnlDb2xvcjogdiA9PiBoZXhPckhleGEudGVzdCh2KSB8fCByZ2IudGVzdCh2KSB8fCByZ2JhLnRlc3Qodilcbn1cblxuZXhwb3J0IGRlZmF1bHQge1xuICB0ZXN0UGF0dGVyblxufVxuIiwiaW1wb3J0IHsgcmVmLCBjb21wdXRlZCwgd2F0Y2gsIG9uQmVmb3JlVW5tb3VudCwgZ2V0Q3VycmVudEluc3RhbmNlIH0gZnJvbSAndnVlJ1xuXG5pbXBvcnQgdXNlRm9ybUNoaWxkIGZyb20gJy4uL3VzZS1mb3JtLWNoaWxkLmpzJ1xuaW1wb3J0IHsgdGVzdFBhdHRlcm4gfSBmcm9tICcuLi8uLi91dGlscy9wYXR0ZXJucy5qcydcbmltcG9ydCBkZWJvdW5jZSBmcm9tICcuLi8uLi91dGlscy9kZWJvdW5jZS5qcydcbmltcG9ydCB7IGluamVjdFByb3AgfSBmcm9tICcuLi8uLi91dGlscy9wcml2YXRlL2luamVjdC1vYmotcHJvcC5qcydcblxuY29uc3QgbGF6eVJ1bGVzVmFsdWVzID0gWyB0cnVlLCBmYWxzZSwgJ29uZGVtYW5kJyBdXG5cbmV4cG9ydCBjb25zdCB1c2VWYWxpZGF0ZVByb3BzID0ge1xuICBtb2RlbFZhbHVlOiB7fSxcblxuICBlcnJvcjoge1xuICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgZGVmYXVsdDogbnVsbFxuICB9LFxuICBlcnJvck1lc3NhZ2U6IFN0cmluZyxcbiAgbm9FcnJvckljb246IEJvb2xlYW4sXG5cbiAgcnVsZXM6IEFycmF5LFxuICByZWFjdGl2ZVJ1bGVzOiBCb29sZWFuLFxuICBsYXp5UnVsZXM6IHtcbiAgICB0eXBlOiBbIEJvb2xlYW4sIFN0cmluZyBdLFxuICAgIGRlZmF1bHQ6IGZhbHNlLCAvLyBzdGF0ZW1lbnQgdW5uZWVkZWQgYnV0IGF2b2lkcyBmdXR1cmUgdnVlIGltcGxlbWVudGF0aW9uIGNoYW5nZXNcbiAgICB2YWxpZGF0b3I6IHYgPT4gbGF6eVJ1bGVzVmFsdWVzLmluY2x1ZGVzKHYpXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKGZvY3VzZWQsIGlubmVyTG9hZGluZykge1xuICBjb25zdCB7IHByb3BzLCBwcm94eSB9ID0gZ2V0Q3VycmVudEluc3RhbmNlKClcblxuICBjb25zdCBpbm5lckVycm9yID0gcmVmKGZhbHNlKVxuICBjb25zdCBpbm5lckVycm9yTWVzc2FnZSA9IHJlZihudWxsKVxuICBjb25zdCBpc0RpcnR5TW9kZWwgPSByZWYoZmFsc2UpXG5cbiAgdXNlRm9ybUNoaWxkKHsgdmFsaWRhdGUsIHJlc2V0VmFsaWRhdGlvbiB9KVxuXG4gIGxldCB2YWxpZGF0ZUluZGV4ID0gMCwgdW53YXRjaFJ1bGVzXG5cbiAgY29uc3QgaGFzUnVsZXMgPSBjb21wdXRlZCgoKSA9PlxuICAgIHByb3BzLnJ1bGVzICE9PSB2b2lkIDBcbiAgICAmJiBwcm9wcy5ydWxlcyAhPT0gbnVsbFxuICAgICYmIHByb3BzLnJ1bGVzLmxlbmd0aCAhPT0gMFxuICApXG5cbiAgY29uc3QgY2FuRGVib3VuY2VWYWxpZGF0ZSA9IGNvbXB1dGVkKCgpID0+IChcbiAgICBwcm9wcy5kaXNhYmxlICE9PSB0cnVlXG4gICAgJiYgaGFzUnVsZXMudmFsdWUgPT09IHRydWVcbiAgICAvLyBTaG91bGQgbm90IGhhdmUgYSB2YWxpZGF0aW9uIGluIHByb2dyZXNzIGFscmVhZHk7XG4gICAgLy8gSXQgbWlnaHQgbWVhbiB0aGF0IGZvY3VzIHN3aXRjaGVkIHRvIHN1Ym1pdCBidG4gYW5kXG4gICAgLy8gUUZvcm0ncyBzdWJtaXQoKSBoYXMgYmVlbiBjYWxsZWQgYWxyZWFkeSAoRU5URVIga2V5KVxuICAgICYmIGlubmVyTG9hZGluZy52YWx1ZSA9PT0gZmFsc2VcbiAgKSlcblxuICBjb25zdCBoYXNFcnJvciA9IGNvbXB1dGVkKCgpID0+XG4gICAgcHJvcHMuZXJyb3IgPT09IHRydWUgfHwgaW5uZXJFcnJvci52YWx1ZSA9PT0gdHJ1ZVxuICApXG5cbiAgY29uc3QgZXJyb3JNZXNzYWdlID0gY29tcHV0ZWQoKCkgPT4gKFxuICAgIHR5cGVvZiBwcm9wcy5lcnJvck1lc3NhZ2UgPT09ICdzdHJpbmcnICYmIHByb3BzLmVycm9yTWVzc2FnZS5sZW5ndGggIT09IDBcbiAgICAgID8gcHJvcHMuZXJyb3JNZXNzYWdlXG4gICAgICA6IGlubmVyRXJyb3JNZXNzYWdlLnZhbHVlXG4gICkpXG5cbiAgd2F0Y2goKCkgPT4gcHJvcHMubW9kZWxWYWx1ZSwgKCkgPT4ge1xuICAgIGlzRGlydHlNb2RlbC52YWx1ZSA9IHRydWVcblxuICAgIGlmIChcbiAgICAgIGNhbkRlYm91bmNlVmFsaWRhdGUudmFsdWUgPT09IHRydWVcbiAgICAgIC8vIHRyaWdnZXIgdmFsaWRhdGlvbiBpZiBub3QgdXNpbmcgYW55IGtpbmQgb2YgbGF6eS1ydWxlc1xuICAgICAgJiYgcHJvcHMubGF6eVJ1bGVzID09PSBmYWxzZVxuICAgICkge1xuICAgICAgZGVib3VuY2VkVmFsaWRhdGUoKVxuICAgIH1cbiAgfSlcblxuICBmdW5jdGlvbiBvblJ1bGVzQ2hhbmdlICgpIHtcbiAgICBpZiAoXG4gICAgICBwcm9wcy5sYXp5UnVsZXMgIT09ICdvbmRlbWFuZCdcbiAgICAgICYmIGNhbkRlYm91bmNlVmFsaWRhdGUudmFsdWUgPT09IHRydWVcbiAgICAgICYmIGlzRGlydHlNb2RlbC52YWx1ZSA9PT0gdHJ1ZVxuICAgICkge1xuICAgICAgZGVib3VuY2VkVmFsaWRhdGUoKVxuICAgIH1cbiAgfVxuXG4gIHdhdGNoKCgpID0+IHByb3BzLnJlYWN0aXZlUnVsZXMsIHZhbCA9PiB7XG4gICAgaWYgKHZhbCA9PT0gdHJ1ZSkge1xuICAgICAgaWYgKHVud2F0Y2hSdWxlcyA9PT0gdm9pZCAwKSB7XG4gICAgICAgIHVud2F0Y2hSdWxlcyA9IHdhdGNoKCgpID0+IHByb3BzLnJ1bGVzLCBvblJ1bGVzQ2hhbmdlLCB7IGltbWVkaWF0ZTogdHJ1ZSwgZGVlcDogdHJ1ZSB9KVxuICAgICAgfVxuICAgIH1cbiAgICBlbHNlIGlmICh1bndhdGNoUnVsZXMgIT09IHZvaWQgMCkge1xuICAgICAgdW53YXRjaFJ1bGVzKClcbiAgICAgIHVud2F0Y2hSdWxlcyA9IHZvaWQgMFxuICAgIH1cbiAgfSwgeyBpbW1lZGlhdGU6IHRydWUgfSlcblxuICB3YXRjaCgoKSA9PiBwcm9wcy5sYXp5UnVsZXMsIG9uUnVsZXNDaGFuZ2UpXG5cbiAgd2F0Y2goZm9jdXNlZCwgdmFsID0+IHtcbiAgICBpZiAodmFsID09PSB0cnVlKSB7XG4gICAgICBpc0RpcnR5TW9kZWwudmFsdWUgPSB0cnVlXG4gICAgfVxuICAgIGVsc2UgaWYgKFxuICAgICAgY2FuRGVib3VuY2VWYWxpZGF0ZS52YWx1ZSA9PT0gdHJ1ZVxuICAgICAgJiYgcHJvcHMubGF6eVJ1bGVzICE9PSAnb25kZW1hbmQnXG4gICAgKSB7XG4gICAgICBkZWJvdW5jZWRWYWxpZGF0ZSgpXG4gICAgfVxuICB9KVxuXG4gIGZ1bmN0aW9uIHJlc2V0VmFsaWRhdGlvbiAoKSB7XG4gICAgdmFsaWRhdGVJbmRleCsrXG4gICAgaW5uZXJMb2FkaW5nLnZhbHVlID0gZmFsc2VcbiAgICBpc0RpcnR5TW9kZWwudmFsdWUgPSBmYWxzZVxuICAgIGlubmVyRXJyb3IudmFsdWUgPSBmYWxzZVxuICAgIGlubmVyRXJyb3JNZXNzYWdlLnZhbHVlID0gbnVsbFxuICAgIGRlYm91bmNlZFZhbGlkYXRlLmNhbmNlbCgpXG4gIH1cblxuICAvKlxuICAgKiBSZXR1cm4gdmFsdWVcbiAgICogICAtIHRydWUgKHZhbGlkYXRpb24gc3VjY2VlZGVkKVxuICAgKiAgIC0gZmFsc2UgKHZhbGlkYXRpb24gZmFpbGVkKVxuICAgKiAgIC0gUHJvbWlzZSAocGVuZGluZyBhc3luYyB2YWxpZGF0aW9uKVxuICAgKi9cbiAgZnVuY3Rpb24gdmFsaWRhdGUgKHZhbCA9IHByb3BzLm1vZGVsVmFsdWUpIHtcbiAgICBpZiAoXG4gICAgICBwcm9wcy5kaXNhYmxlID09PSB0cnVlXG4gICAgICB8fCBoYXNSdWxlcy52YWx1ZSA9PT0gZmFsc2VcbiAgICApIHtcbiAgICAgIHJldHVybiB0cnVlXG4gICAgfVxuXG4gICAgY29uc3QgaW5kZXggPSArK3ZhbGlkYXRlSW5kZXhcblxuICAgIGNvbnN0IHNldERpcnR5ID0gaW5uZXJMb2FkaW5nLnZhbHVlICE9PSB0cnVlXG4gICAgICA/ICgpID0+IHsgaXNEaXJ0eU1vZGVsLnZhbHVlID0gdHJ1ZSB9XG4gICAgICA6ICgpID0+IHt9XG5cbiAgICBjb25zdCB1cGRhdGUgPSAoZXJyLCBtc2cpID0+IHtcbiAgICAgIGVyciA9PT0gdHJ1ZSAmJiBzZXREaXJ0eSgpXG5cbiAgICAgIGlubmVyRXJyb3IudmFsdWUgPSBlcnJcbiAgICAgIGlubmVyRXJyb3JNZXNzYWdlLnZhbHVlID0gbXNnIHx8IG51bGxcbiAgICAgIGlubmVyTG9hZGluZy52YWx1ZSA9IGZhbHNlXG4gICAgfVxuXG4gICAgY29uc3QgcHJvbWlzZXMgPSBbXVxuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwcm9wcy5ydWxlcy5sZW5ndGg7IGkrKykge1xuICAgICAgY29uc3QgcnVsZSA9IHByb3BzLnJ1bGVzWyBpIF1cbiAgICAgIGxldCByZXNcblxuICAgICAgaWYgKHR5cGVvZiBydWxlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHJlcyA9IHJ1bGUodmFsLCB0ZXN0UGF0dGVybilcbiAgICAgIH1cbiAgICAgIGVsc2UgaWYgKHR5cGVvZiBydWxlID09PSAnc3RyaW5nJyAmJiB0ZXN0UGF0dGVyblsgcnVsZSBdICE9PSB2b2lkIDApIHtcbiAgICAgICAgcmVzID0gdGVzdFBhdHRlcm5bIHJ1bGUgXSh2YWwpXG4gICAgICB9XG5cbiAgICAgIGlmIChyZXMgPT09IGZhbHNlIHx8IHR5cGVvZiByZXMgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIHVwZGF0ZSh0cnVlLCByZXMpXG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgfVxuICAgICAgZWxzZSBpZiAocmVzICE9PSB0cnVlICYmIHJlcyAhPT0gdm9pZCAwKSB7XG4gICAgICAgIHByb21pc2VzLnB1c2gocmVzKVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChwcm9taXNlcy5sZW5ndGggPT09IDApIHtcbiAgICAgIHVwZGF0ZShmYWxzZSlcbiAgICAgIHJldHVybiB0cnVlXG4gICAgfVxuXG4gICAgaW5uZXJMb2FkaW5nLnZhbHVlID0gdHJ1ZVxuXG4gICAgcmV0dXJuIFByb21pc2UuYWxsKHByb21pc2VzKS50aGVuKFxuICAgICAgcmVzID0+IHtcbiAgICAgICAgaWYgKHJlcyA9PT0gdm9pZCAwIHx8IEFycmF5LmlzQXJyYXkocmVzKSA9PT0gZmFsc2UgfHwgcmVzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgIGluZGV4ID09PSB2YWxpZGF0ZUluZGV4ICYmIHVwZGF0ZShmYWxzZSlcbiAgICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgbXNnID0gcmVzLmZpbmQociA9PiByID09PSBmYWxzZSB8fCB0eXBlb2YgciA9PT0gJ3N0cmluZycpXG4gICAgICAgIGluZGV4ID09PSB2YWxpZGF0ZUluZGV4ICYmIHVwZGF0ZShtc2cgIT09IHZvaWQgMCwgbXNnKVxuICAgICAgICByZXR1cm4gbXNnID09PSB2b2lkIDBcbiAgICAgIH0sXG4gICAgICBlID0+IHtcbiAgICAgICAgaWYgKGluZGV4ID09PSB2YWxpZGF0ZUluZGV4KSB7XG4gICAgICAgICAgY29uc29sZS5lcnJvcihlKVxuICAgICAgICAgIHVwZGF0ZSh0cnVlKVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICB9XG4gICAgKVxuICB9XG5cbiAgY29uc3QgZGVib3VuY2VkVmFsaWRhdGUgPSBkZWJvdW5jZSh2YWxpZGF0ZSwgMClcblxuICBvbkJlZm9yZVVubW91bnQoKCkgPT4ge1xuICAgIHVud2F0Y2hSdWxlcyAhPT0gdm9pZCAwICYmIHVud2F0Y2hSdWxlcygpXG4gICAgZGVib3VuY2VkVmFsaWRhdGUuY2FuY2VsKClcbiAgfSlcblxuICAvLyBleHBvc2UgcHVibGljIG1ldGhvZHMgJiBwcm9wc1xuICBPYmplY3QuYXNzaWduKHByb3h5LCB7IHJlc2V0VmFsaWRhdGlvbiwgdmFsaWRhdGUgfSlcbiAgaW5qZWN0UHJvcChwcm94eSwgJ2hhc0Vycm9yJywgKCkgPT4gaGFzRXJyb3IudmFsdWUpXG5cbiAgcmV0dXJuIHtcbiAgICBpc0RpcnR5TW9kZWwsXG4gICAgaGFzUnVsZXMsXG4gICAgaGFzRXJyb3IsXG4gICAgZXJyb3JNZXNzYWdlLFxuXG4gICAgdmFsaWRhdGUsXG4gICAgcmVzZXRWYWxpZGF0aW9uXG4gIH1cbn1cbiIsImltcG9ydCB7IHJlZiwgb25CZWZvcmVVcGRhdGUsIGdldEN1cnJlbnRJbnN0YW5jZSB9IGZyb20gJ3Z1ZSdcblxuY29uc3QgbGlzdGVuZXJSRSA9IC9eb25bQS1aXS9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKCkge1xuICBjb25zdCB7IGF0dHJzLCB2bm9kZSB9ID0gZ2V0Q3VycmVudEluc3RhbmNlKClcblxuICBjb25zdCBhY2MgPSB7XG4gICAgbGlzdGVuZXJzOiByZWYoe30pLFxuICAgIGF0dHJpYnV0ZXM6IHJlZih7fSlcbiAgfVxuXG4gIGZ1bmN0aW9uIHVwZGF0ZSAoKSB7XG4gICAgY29uc3QgYXR0cmlidXRlcyA9IHt9XG4gICAgY29uc3QgbGlzdGVuZXJzID0ge31cblxuICAgIGZvciAoY29uc3Qga2V5IGluIGF0dHJzKSB7XG4gICAgICBpZiAoa2V5ICE9PSAnY2xhc3MnICYmIGtleSAhPT0gJ3N0eWxlJyAmJiBsaXN0ZW5lclJFLnRlc3Qoa2V5KSA9PT0gZmFsc2UpIHtcbiAgICAgICAgYXR0cmlidXRlc1sga2V5IF0gPSBhdHRyc1sga2V5IF1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKGNvbnN0IGtleSBpbiB2bm9kZS5wcm9wcykge1xuICAgICAgaWYgKGxpc3RlbmVyUkUudGVzdChrZXkpID09PSB0cnVlKSB7XG4gICAgICAgIGxpc3RlbmVyc1sga2V5IF0gPSB2bm9kZS5wcm9wc1sga2V5IF1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBhY2MuYXR0cmlidXRlcy52YWx1ZSA9IGF0dHJpYnV0ZXNcbiAgICBhY2MubGlzdGVuZXJzLnZhbHVlID0gbGlzdGVuZXJzXG4gIH1cblxuICBvbkJlZm9yZVVwZGF0ZSh1cGRhdGUpXG5cbiAgdXBkYXRlKClcblxuICByZXR1cm4gYWNjXG59XG4iLCJsZXQgcXVldWUgPSBbXVxubGV0IHdhaXRGbGFncyA9IFtdXG5cbmZ1bmN0aW9uIGNsZWFyRmxhZyAoZmxhZykge1xuICB3YWl0RmxhZ3MgPSB3YWl0RmxhZ3MuZmlsdGVyKGVudHJ5ID0+IGVudHJ5ICE9PSBmbGFnKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gYWRkRm9jdXNXYWl0RmxhZyAoZmxhZykge1xuICBjbGVhckZsYWcoZmxhZylcbiAgd2FpdEZsYWdzLnB1c2goZmxhZylcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZUZvY3VzV2FpdEZsYWcgKGZsYWcpIHtcbiAgY2xlYXJGbGFnKGZsYWcpXG5cbiAgaWYgKHdhaXRGbGFncy5sZW5ndGggPT09IDAgJiYgcXVldWUubGVuZ3RoICE9PSAwKSB7XG4gICAgLy8gb25seSBjYWxsIGxhc3QgZm9jdXMgaGFuZGxlciAoY2FuJ3QgZm9jdXMgbXVsdGlwbGUgdGhpbmdzIGF0IG9uY2UpXG4gICAgcXVldWVbIHF1ZXVlLmxlbmd0aCAtIDEgXSgpXG4gICAgcXVldWUgPSBbXVxuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRGb2N1c0ZuIChmbikge1xuICBpZiAod2FpdEZsYWdzLmxlbmd0aCA9PT0gMCkge1xuICAgIGZuKClcbiAgfVxuICBlbHNlIHtcbiAgICBxdWV1ZS5wdXNoKGZuKVxuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVGb2N1c0ZuIChmbikge1xuICBxdWV1ZSA9IHF1ZXVlLmZpbHRlcihlbnRyeSA9PiBlbnRyeSAhPT0gZm4pXG59XG4iLCJpbXBvcnQgeyBoLCByZWYsIGNvbXB1dGVkLCBUcmFuc2l0aW9uLCBuZXh0VGljaywgb25BY3RpdmF0ZWQsIG9uRGVhY3RpdmF0ZWQsIG9uQmVmb3JlVW5tb3VudCwgb25Nb3VudGVkLCBnZXRDdXJyZW50SW5zdGFuY2UgfSBmcm9tICd2dWUnXG5cbmltcG9ydCBRSWNvbiBmcm9tICcuLi8uLi9jb21wb25lbnRzL2ljb24vUUljb24uanMnXG5pbXBvcnQgUVNwaW5uZXIgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9zcGlubmVyL1FTcGlubmVyLmpzJ1xuXG5pbXBvcnQgdXNlRGFyaywgeyB1c2VEYXJrUHJvcHMgfSBmcm9tICcuLi8uLi9jb21wb3NhYmxlcy9wcml2YXRlL3VzZS1kYXJrLmpzJ1xuaW1wb3J0IHVzZUlkIGZyb20gJy4uL3VzZS1pZC5qcydcbmltcG9ydCB1c2VWYWxpZGF0ZSwgeyB1c2VWYWxpZGF0ZVByb3BzIH0gZnJvbSAnLi91c2UtdmFsaWRhdGUuanMnXG5pbXBvcnQgdXNlU3BsaXRBdHRycyBmcm9tICcuLi91c2Utc3BsaXQtYXR0cnMuanMnXG5cbmltcG9ydCB7IGhTbG90IH0gZnJvbSAnLi4vLi4vdXRpbHMvcHJpdmF0ZS9yZW5kZXIuanMnXG5pbXBvcnQgeyBwcmV2ZW50LCBzdG9wQW5kUHJldmVudCB9IGZyb20gJy4uLy4uL3V0aWxzL2V2ZW50LmpzJ1xuaW1wb3J0IHsgYWRkRm9jdXNGbiwgcmVtb3ZlRm9jdXNGbiB9IGZyb20gJy4uLy4uL3V0aWxzL3ByaXZhdGUvZm9jdXMtbWFuYWdlci5qcydcblxuZXhwb3J0IGZ1bmN0aW9uIGZpZWxkVmFsdWVJc0ZpbGxlZCAodmFsKSB7XG4gIHJldHVybiB2YWwgIT09IHZvaWQgMFxuICAgICYmIHZhbCAhPT0gbnVsbFxuICAgICYmICgnJyArIHZhbCkubGVuZ3RoICE9PSAwXG59XG5cbmV4cG9ydCBjb25zdCB1c2VGaWVsZFByb3BzID0ge1xuICAuLi51c2VEYXJrUHJvcHMsXG4gIC4uLnVzZVZhbGlkYXRlUHJvcHMsXG5cbiAgbGFiZWw6IFN0cmluZyxcbiAgc3RhY2tMYWJlbDogQm9vbGVhbixcbiAgaGludDogU3RyaW5nLFxuICBoaWRlSGludDogQm9vbGVhbixcbiAgcHJlZml4OiBTdHJpbmcsXG4gIHN1ZmZpeDogU3RyaW5nLFxuXG4gIGxhYmVsQ29sb3I6IFN0cmluZyxcbiAgY29sb3I6IFN0cmluZyxcbiAgYmdDb2xvcjogU3RyaW5nLFxuXG4gIGZpbGxlZDogQm9vbGVhbixcbiAgb3V0bGluZWQ6IEJvb2xlYW4sXG4gIGJvcmRlcmxlc3M6IEJvb2xlYW4sXG4gIHN0YW5kb3V0OiBbIEJvb2xlYW4sIFN0cmluZyBdLFxuXG4gIHNxdWFyZTogQm9vbGVhbixcblxuICBsb2FkaW5nOiBCb29sZWFuLFxuXG4gIGxhYmVsU2xvdDogQm9vbGVhbixcblxuICBib3R0b21TbG90czogQm9vbGVhbixcbiAgaGlkZUJvdHRvbVNwYWNlOiBCb29sZWFuLFxuXG4gIHJvdW5kZWQ6IEJvb2xlYW4sXG4gIGRlbnNlOiBCb29sZWFuLFxuICBpdGVtQWxpZ25lZDogQm9vbGVhbixcblxuICBjb3VudGVyOiBCb29sZWFuLFxuXG4gIGNsZWFyYWJsZTogQm9vbGVhbixcbiAgY2xlYXJJY29uOiBTdHJpbmcsXG5cbiAgZGlzYWJsZTogQm9vbGVhbixcbiAgcmVhZG9ubHk6IEJvb2xlYW4sXG5cbiAgYXV0b2ZvY3VzOiBCb29sZWFuLFxuXG4gIGZvcjogU3RyaW5nLFxuXG4gIG1heGxlbmd0aDogWyBOdW1iZXIsIFN0cmluZyBdXG59XG5cbmV4cG9ydCBjb25zdCB1c2VGaWVsZEVtaXRzID0gWyAndXBkYXRlOm1vZGVsVmFsdWUnLCAnY2xlYXInLCAnZm9jdXMnLCAnYmx1cicsICdwb3B1cFNob3cnLCAncG9wdXBIaWRlJyBdXG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VGaWVsZFN0YXRlICh7IHJlcXVpcmVkRm9yQXR0ciA9IHRydWUsIHRhZ1Byb3AgfSA9IHt9KSB7XG4gIGNvbnN0IHsgcHJvcHMsIHByb3h5IH0gPSBnZXRDdXJyZW50SW5zdGFuY2UoKVxuXG4gIGNvbnN0IGlzRGFyayA9IHVzZURhcmsocHJvcHMsIHByb3h5LiRxKVxuICBjb25zdCB0YXJnZXRVaWQgPSB1c2VJZCh7XG4gICAgcmVxdWlyZWQ6IHJlcXVpcmVkRm9yQXR0cixcbiAgICBnZXRWYWx1ZTogKCkgPT4gcHJvcHMuZm9yXG4gIH0pXG5cbiAgcmV0dXJuIHtcbiAgICByZXF1aXJlZEZvckF0dHIsXG4gICAgdGFnOiB0YWdQcm9wID09PSB0cnVlXG4gICAgICA/IGNvbXB1dGVkKCgpID0+IHByb3BzLnRhZylcbiAgICAgIDogeyB2YWx1ZTogJ2xhYmVsJyB9LFxuXG4gICAgaXNEYXJrLFxuXG4gICAgZWRpdGFibGU6IGNvbXB1dGVkKCgpID0+XG4gICAgICBwcm9wcy5kaXNhYmxlICE9PSB0cnVlICYmIHByb3BzLnJlYWRvbmx5ICE9PSB0cnVlXG4gICAgKSxcblxuICAgIGlubmVyTG9hZGluZzogcmVmKGZhbHNlKSxcbiAgICBmb2N1c2VkOiByZWYoZmFsc2UpLFxuICAgIGhhc1BvcHVwT3BlbjogZmFsc2UsXG5cbiAgICBzcGxpdEF0dHJzOiB1c2VTcGxpdEF0dHJzKCksXG4gICAgdGFyZ2V0VWlkLFxuXG4gICAgcm9vdFJlZjogcmVmKG51bGwpLFxuICAgIHRhcmdldFJlZjogcmVmKG51bGwpLFxuICAgIGNvbnRyb2xSZWY6IHJlZihudWxsKVxuXG4gICAgLyoqXG4gICAgICogdXNlciBzdXBwbGllZCBhZGRpdGlvbmFsczpcblxuICAgICAqIGlubmVyVmFsdWUgLSBjb21wdXRlZFxuICAgICAqIGZsb2F0aW5nTGFiZWwgLSBjb21wdXRlZFxuICAgICAqIGlucHV0UmVmIC0gY29tcHV0ZWRcblxuICAgICAqIGZpZWxkQ2xhc3MgLSBjb21wdXRlZFxuICAgICAqIGhhc1NoYWRvdyAtIGNvbXB1dGVkXG5cbiAgICAgKiBjb250cm9sRXZlbnRzIC0gT2JqZWN0IHdpdGggZm4oZSlcblxuICAgICAqIGdldENvbnRyb2wgLSBmblxuICAgICAqIGdldElubmVyQXBwZW5kIC0gZm5cbiAgICAgKiBnZXRDb250cm9sQ2hpbGQgLSBmblxuICAgICAqIGdldFNoYWRvd0NvbnRyb2wgLSBmblxuICAgICAqIHNob3dQb3B1cCAtIGZuXG4gICAgICovXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKHN0YXRlKSB7XG4gIGNvbnN0IHsgcHJvcHMsIGVtaXQsIHNsb3RzLCBhdHRycywgcHJveHkgfSA9IGdldEN1cnJlbnRJbnN0YW5jZSgpXG4gIGNvbnN0IHsgJHEgfSA9IHByb3h5XG5cbiAgbGV0IGZvY3Vzb3V0VGltZXIgPSBudWxsXG5cbiAgaWYgKHN0YXRlLmhhc1ZhbHVlID09PSB2b2lkIDApIHtcbiAgICBzdGF0ZS5oYXNWYWx1ZSA9IGNvbXB1dGVkKCgpID0+IGZpZWxkVmFsdWVJc0ZpbGxlZChwcm9wcy5tb2RlbFZhbHVlKSlcbiAgfVxuXG4gIGlmIChzdGF0ZS5lbWl0VmFsdWUgPT09IHZvaWQgMCkge1xuICAgIHN0YXRlLmVtaXRWYWx1ZSA9IHZhbHVlID0+IHtcbiAgICAgIGVtaXQoJ3VwZGF0ZTptb2RlbFZhbHVlJywgdmFsdWUpXG4gICAgfVxuICB9XG5cbiAgaWYgKHN0YXRlLmNvbnRyb2xFdmVudHMgPT09IHZvaWQgMCkge1xuICAgIHN0YXRlLmNvbnRyb2xFdmVudHMgPSB7XG4gICAgICBvbkZvY3VzaW46IG9uQ29udHJvbEZvY3VzaW4sXG4gICAgICBvbkZvY3Vzb3V0OiBvbkNvbnRyb2xGb2N1c291dFxuICAgIH1cbiAgfVxuXG4gIE9iamVjdC5hc3NpZ24oc3RhdGUsIHtcbiAgICBjbGVhclZhbHVlLFxuICAgIG9uQ29udHJvbEZvY3VzaW4sXG4gICAgb25Db250cm9sRm9jdXNvdXQsXG4gICAgZm9jdXNcbiAgfSlcblxuICBpZiAoc3RhdGUuY29tcHV0ZWRDb3VudGVyID09PSB2b2lkIDApIHtcbiAgICBzdGF0ZS5jb21wdXRlZENvdW50ZXIgPSBjb21wdXRlZCgoKSA9PiB7XG4gICAgICBpZiAocHJvcHMuY291bnRlciAhPT0gZmFsc2UpIHtcbiAgICAgICAgY29uc3QgbGVuID0gdHlwZW9mIHByb3BzLm1vZGVsVmFsdWUgPT09ICdzdHJpbmcnIHx8IHR5cGVvZiBwcm9wcy5tb2RlbFZhbHVlID09PSAnbnVtYmVyJ1xuICAgICAgICAgID8gKCcnICsgcHJvcHMubW9kZWxWYWx1ZSkubGVuZ3RoXG4gICAgICAgICAgOiAoQXJyYXkuaXNBcnJheShwcm9wcy5tb2RlbFZhbHVlKSA9PT0gdHJ1ZSA/IHByb3BzLm1vZGVsVmFsdWUubGVuZ3RoIDogMClcblxuICAgICAgICBjb25zdCBtYXggPSBwcm9wcy5tYXhsZW5ndGggIT09IHZvaWQgMFxuICAgICAgICAgID8gcHJvcHMubWF4bGVuZ3RoXG4gICAgICAgICAgOiBwcm9wcy5tYXhWYWx1ZXNcblxuICAgICAgICByZXR1cm4gbGVuICsgKG1heCAhPT0gdm9pZCAwID8gJyAvICcgKyBtYXggOiAnJylcbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbiAgY29uc3Qge1xuICAgIGlzRGlydHlNb2RlbCxcbiAgICBoYXNSdWxlcyxcbiAgICBoYXNFcnJvcixcbiAgICBlcnJvck1lc3NhZ2UsXG4gICAgcmVzZXRWYWxpZGF0aW9uXG4gIH0gPSB1c2VWYWxpZGF0ZShzdGF0ZS5mb2N1c2VkLCBzdGF0ZS5pbm5lckxvYWRpbmcpXG5cbiAgY29uc3QgZmxvYXRpbmdMYWJlbCA9IHN0YXRlLmZsb2F0aW5nTGFiZWwgIT09IHZvaWQgMFxuICAgID8gY29tcHV0ZWQoKCkgPT4gcHJvcHMuc3RhY2tMYWJlbCA9PT0gdHJ1ZSB8fCBzdGF0ZS5mb2N1c2VkLnZhbHVlID09PSB0cnVlIHx8IHN0YXRlLmZsb2F0aW5nTGFiZWwudmFsdWUgPT09IHRydWUpXG4gICAgOiBjb21wdXRlZCgoKSA9PiBwcm9wcy5zdGFja0xhYmVsID09PSB0cnVlIHx8IHN0YXRlLmZvY3VzZWQudmFsdWUgPT09IHRydWUgfHwgc3RhdGUuaGFzVmFsdWUudmFsdWUgPT09IHRydWUpXG5cbiAgY29uc3Qgc2hvdWxkUmVuZGVyQm90dG9tID0gY29tcHV0ZWQoKCkgPT5cbiAgICBwcm9wcy5ib3R0b21TbG90cyA9PT0gdHJ1ZVxuICAgIHx8IHByb3BzLmhpbnQgIT09IHZvaWQgMFxuICAgIHx8IGhhc1J1bGVzLnZhbHVlID09PSB0cnVlXG4gICAgfHwgcHJvcHMuY291bnRlciA9PT0gdHJ1ZVxuICAgIHx8IHByb3BzLmVycm9yICE9PSBudWxsXG4gIClcblxuICBjb25zdCBzdHlsZVR5cGUgPSBjb21wdXRlZCgoKSA9PiB7XG4gICAgaWYgKHByb3BzLmZpbGxlZCA9PT0gdHJ1ZSkgeyByZXR1cm4gJ2ZpbGxlZCcgfVxuICAgIGlmIChwcm9wcy5vdXRsaW5lZCA9PT0gdHJ1ZSkgeyByZXR1cm4gJ291dGxpbmVkJyB9XG4gICAgaWYgKHByb3BzLmJvcmRlcmxlc3MgPT09IHRydWUpIHsgcmV0dXJuICdib3JkZXJsZXNzJyB9XG4gICAgaWYgKHByb3BzLnN0YW5kb3V0KSB7IHJldHVybiAnc3RhbmRvdXQnIH1cbiAgICByZXR1cm4gJ3N0YW5kYXJkJ1xuICB9KVxuXG4gIGNvbnN0IGNsYXNzZXMgPSBjb21wdXRlZCgoKSA9PlxuICAgIGBxLWZpZWxkIHJvdyBuby13cmFwIGl0ZW1zLXN0YXJ0IHEtZmllbGQtLSR7IHN0eWxlVHlwZS52YWx1ZSB9YFxuICAgICsgKHN0YXRlLmZpZWxkQ2xhc3MgIT09IHZvaWQgMCA/IGAgJHsgc3RhdGUuZmllbGRDbGFzcy52YWx1ZSB9YCA6ICcnKVxuICAgICsgKHByb3BzLnJvdW5kZWQgPT09IHRydWUgPyAnIHEtZmllbGQtLXJvdW5kZWQnIDogJycpXG4gICAgKyAocHJvcHMuc3F1YXJlID09PSB0cnVlID8gJyBxLWZpZWxkLS1zcXVhcmUnIDogJycpXG4gICAgKyAoZmxvYXRpbmdMYWJlbC52YWx1ZSA9PT0gdHJ1ZSA/ICcgcS1maWVsZC0tZmxvYXQnIDogJycpXG4gICAgKyAoaGFzTGFiZWwudmFsdWUgPT09IHRydWUgPyAnIHEtZmllbGQtLWxhYmVsZWQnIDogJycpXG4gICAgKyAocHJvcHMuZGVuc2UgPT09IHRydWUgPyAnIHEtZmllbGQtLWRlbnNlJyA6ICcnKVxuICAgICsgKHByb3BzLml0ZW1BbGlnbmVkID09PSB0cnVlID8gJyBxLWZpZWxkLS1pdGVtLWFsaWduZWQgcS1pdGVtLXR5cGUnIDogJycpXG4gICAgKyAoc3RhdGUuaXNEYXJrLnZhbHVlID09PSB0cnVlID8gJyBxLWZpZWxkLS1kYXJrJyA6ICcnKVxuICAgICsgKHN0YXRlLmdldENvbnRyb2wgPT09IHZvaWQgMCA/ICcgcS1maWVsZC0tYXV0by1oZWlnaHQnIDogJycpXG4gICAgKyAoc3RhdGUuZm9jdXNlZC52YWx1ZSA9PT0gdHJ1ZSA/ICcgcS1maWVsZC0tZm9jdXNlZCcgOiAnJylcbiAgICArIChoYXNFcnJvci52YWx1ZSA9PT0gdHJ1ZSA/ICcgcS1maWVsZC0tZXJyb3InIDogJycpXG4gICAgKyAoaGFzRXJyb3IudmFsdWUgPT09IHRydWUgfHwgc3RhdGUuZm9jdXNlZC52YWx1ZSA9PT0gdHJ1ZSA/ICcgcS1maWVsZC0taGlnaGxpZ2h0ZWQnIDogJycpXG4gICAgKyAocHJvcHMuaGlkZUJvdHRvbVNwYWNlICE9PSB0cnVlICYmIHNob3VsZFJlbmRlckJvdHRvbS52YWx1ZSA9PT0gdHJ1ZSA/ICcgcS1maWVsZC0td2l0aC1ib3R0b20nIDogJycpXG4gICAgKyAocHJvcHMuZGlzYWJsZSA9PT0gdHJ1ZSA/ICcgcS1maWVsZC0tZGlzYWJsZWQnIDogKHByb3BzLnJlYWRvbmx5ID09PSB0cnVlID8gJyBxLWZpZWxkLS1yZWFkb25seScgOiAnJykpXG4gIClcblxuICBjb25zdCBjb250ZW50Q2xhc3MgPSBjb21wdXRlZCgoKSA9PlxuICAgICdxLWZpZWxkX19jb250cm9sIHJlbGF0aXZlLXBvc2l0aW9uIHJvdyBuby13cmFwJ1xuICAgICsgKHByb3BzLmJnQ29sb3IgIT09IHZvaWQgMCA/IGAgYmctJHsgcHJvcHMuYmdDb2xvciB9YCA6ICcnKVxuICAgICsgKFxuICAgICAgaGFzRXJyb3IudmFsdWUgPT09IHRydWVcbiAgICAgICAgPyAnIHRleHQtbmVnYXRpdmUnXG4gICAgICAgIDogKFxuICAgICAgICAgICAgdHlwZW9mIHByb3BzLnN0YW5kb3V0ID09PSAnc3RyaW5nJyAmJiBwcm9wcy5zdGFuZG91dC5sZW5ndGggIT09IDAgJiYgc3RhdGUuZm9jdXNlZC52YWx1ZSA9PT0gdHJ1ZVxuICAgICAgICAgICAgICA/IGAgJHsgcHJvcHMuc3RhbmRvdXQgfWBcbiAgICAgICAgICAgICAgOiAocHJvcHMuY29sb3IgIT09IHZvaWQgMCA/IGAgdGV4dC0keyBwcm9wcy5jb2xvciB9YCA6ICcnKVxuICAgICAgICAgIClcbiAgICApXG4gIClcblxuICBjb25zdCBoYXNMYWJlbCA9IGNvbXB1dGVkKCgpID0+XG4gICAgcHJvcHMubGFiZWxTbG90ID09PSB0cnVlIHx8IHByb3BzLmxhYmVsICE9PSB2b2lkIDBcbiAgKVxuXG4gIGNvbnN0IGxhYmVsQ2xhc3MgPSBjb21wdXRlZCgoKSA9PlxuICAgICdxLWZpZWxkX19sYWJlbCBuby1wb2ludGVyLWV2ZW50cyBhYnNvbHV0ZSBlbGxpcHNpcydcbiAgICArIChwcm9wcy5sYWJlbENvbG9yICE9PSB2b2lkIDAgJiYgaGFzRXJyb3IudmFsdWUgIT09IHRydWUgPyBgIHRleHQtJHsgcHJvcHMubGFiZWxDb2xvciB9YCA6ICcnKVxuICApXG5cbiAgY29uc3QgY29udHJvbFNsb3RTY29wZSA9IGNvbXB1dGVkKCgpID0+ICh7XG4gICAgaWQ6IHN0YXRlLnRhcmdldFVpZC52YWx1ZSxcbiAgICBlZGl0YWJsZTogc3RhdGUuZWRpdGFibGUudmFsdWUsXG4gICAgZm9jdXNlZDogc3RhdGUuZm9jdXNlZC52YWx1ZSxcbiAgICBmbG9hdGluZ0xhYmVsOiBmbG9hdGluZ0xhYmVsLnZhbHVlLFxuICAgIG1vZGVsVmFsdWU6IHByb3BzLm1vZGVsVmFsdWUsXG4gICAgZW1pdFZhbHVlOiBzdGF0ZS5lbWl0VmFsdWVcbiAgfSkpXG5cbiAgY29uc3QgYXR0cmlidXRlcyA9IGNvbXB1dGVkKCgpID0+IHtcbiAgICBjb25zdCBhY2MgPSB7fVxuXG4gICAgaWYgKHN0YXRlLnRhcmdldFVpZC52YWx1ZSkge1xuICAgICAgYWNjLmZvciA9IHN0YXRlLnRhcmdldFVpZC52YWx1ZVxuICAgIH1cblxuICAgIGlmIChwcm9wcy5kaXNhYmxlID09PSB0cnVlKSB7XG4gICAgICBhY2NbICdhcmlhLWRpc2FibGVkJyBdID0gJ3RydWUnXG4gICAgfVxuXG4gICAgcmV0dXJuIGFjY1xuICB9KVxuXG4gIGZ1bmN0aW9uIGZvY3VzSGFuZGxlciAoKSB7XG4gICAgY29uc3QgZWwgPSBkb2N1bWVudC5hY3RpdmVFbGVtZW50XG4gICAgbGV0IHRhcmdldCA9IHN0YXRlLnRhcmdldFJlZiAhPT0gdm9pZCAwICYmIHN0YXRlLnRhcmdldFJlZi52YWx1ZVxuXG4gICAgaWYgKHRhcmdldCAmJiAoZWwgPT09IG51bGwgfHwgZWwuaWQgIT09IHN0YXRlLnRhcmdldFVpZC52YWx1ZSkpIHtcbiAgICAgIHRhcmdldC5oYXNBdHRyaWJ1dGUoJ3RhYmluZGV4JykgPT09IHRydWUgfHwgKHRhcmdldCA9IHRhcmdldC5xdWVyeVNlbGVjdG9yKCdbdGFiaW5kZXhdJykpXG4gICAgICBpZiAodGFyZ2V0ICYmIHRhcmdldCAhPT0gZWwpIHtcbiAgICAgICAgdGFyZ2V0LmZvY3VzKHsgcHJldmVudFNjcm9sbDogdHJ1ZSB9KVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGZvY3VzICgpIHtcbiAgICBhZGRGb2N1c0ZuKGZvY3VzSGFuZGxlcilcbiAgfVxuXG4gIGZ1bmN0aW9uIGJsdXIgKCkge1xuICAgIHJlbW92ZUZvY3VzRm4oZm9jdXNIYW5kbGVyKVxuICAgIGNvbnN0IGVsID0gZG9jdW1lbnQuYWN0aXZlRWxlbWVudFxuICAgIGlmIChlbCAhPT0gbnVsbCAmJiBzdGF0ZS5yb290UmVmLnZhbHVlLmNvbnRhaW5zKGVsKSkge1xuICAgICAgZWwuYmx1cigpXG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gb25Db250cm9sRm9jdXNpbiAoZSkge1xuICAgIGlmIChmb2N1c291dFRpbWVyICE9PSBudWxsKSB7XG4gICAgICBjbGVhclRpbWVvdXQoZm9jdXNvdXRUaW1lcilcbiAgICAgIGZvY3Vzb3V0VGltZXIgPSBudWxsXG4gICAgfVxuXG4gICAgaWYgKHN0YXRlLmVkaXRhYmxlLnZhbHVlID09PSB0cnVlICYmIHN0YXRlLmZvY3VzZWQudmFsdWUgPT09IGZhbHNlKSB7XG4gICAgICBzdGF0ZS5mb2N1c2VkLnZhbHVlID0gdHJ1ZVxuICAgICAgZW1pdCgnZm9jdXMnLCBlKVxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIG9uQ29udHJvbEZvY3Vzb3V0IChlLCB0aGVuKSB7XG4gICAgZm9jdXNvdXRUaW1lciAhPT0gbnVsbCAmJiBjbGVhclRpbWVvdXQoZm9jdXNvdXRUaW1lcilcbiAgICBmb2N1c291dFRpbWVyID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBmb2N1c291dFRpbWVyID0gbnVsbFxuXG4gICAgICBpZiAoXG4gICAgICAgIGRvY3VtZW50Lmhhc0ZvY3VzKCkgPT09IHRydWUgJiYgKFxuICAgICAgICAgIHN0YXRlLmhhc1BvcHVwT3BlbiA9PT0gdHJ1ZVxuICAgICAgICAgIHx8IHN0YXRlLmNvbnRyb2xSZWYgPT09IHZvaWQgMFxuICAgICAgICAgIHx8IHN0YXRlLmNvbnRyb2xSZWYudmFsdWUgPT09IG51bGxcbiAgICAgICAgICB8fCBzdGF0ZS5jb250cm9sUmVmLnZhbHVlLmNvbnRhaW5zKGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQpICE9PSBmYWxzZVxuICAgICAgICApXG4gICAgICApIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIGlmIChzdGF0ZS5mb2N1c2VkLnZhbHVlID09PSB0cnVlKSB7XG4gICAgICAgIHN0YXRlLmZvY3VzZWQudmFsdWUgPSBmYWxzZVxuICAgICAgICBlbWl0KCdibHVyJywgZSlcbiAgICAgIH1cblxuICAgICAgdGhlbiAhPT0gdm9pZCAwICYmIHRoZW4oKVxuICAgIH0pXG4gIH1cblxuICBmdW5jdGlvbiBjbGVhclZhbHVlIChlKSB7XG4gICAgLy8gcHJldmVudCBhY3RpdmF0aW5nIHRoZSBmaWVsZCBidXQga2VlcCBmb2N1cyBvbiBkZXNrdG9wXG4gICAgc3RvcEFuZFByZXZlbnQoZSlcblxuICAgIGlmICgkcS5wbGF0Zm9ybS5pcy5tb2JpbGUgIT09IHRydWUpIHtcbiAgICAgIGNvbnN0IGVsID0gKHN0YXRlLnRhcmdldFJlZiAhPT0gdm9pZCAwICYmIHN0YXRlLnRhcmdldFJlZi52YWx1ZSkgfHwgc3RhdGUucm9vdFJlZi52YWx1ZVxuICAgICAgZWwuZm9jdXMoKVxuICAgIH1cbiAgICBlbHNlIGlmIChzdGF0ZS5yb290UmVmLnZhbHVlLmNvbnRhaW5zKGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQpID09PSB0cnVlKSB7XG4gICAgICBkb2N1bWVudC5hY3RpdmVFbGVtZW50LmJsdXIoKVxuICAgIH1cblxuICAgIGlmIChwcm9wcy50eXBlID09PSAnZmlsZScpIHtcbiAgICAgIC8vIGRvIG5vdCBsZXQgZm9jdXMgYmUgdHJpZ2dlcmVkXG4gICAgICAvLyBhcyBpdCB3aWxsIG1ha2UgdGhlIG5hdGl2ZSBmaWxlIGRpYWxvZ1xuICAgICAgLy8gYXBwZWFyIGZvciBhbm90aGVyIHNlbGVjdGlvblxuICAgICAgc3RhdGUuaW5wdXRSZWYudmFsdWUudmFsdWUgPSBudWxsXG4gICAgfVxuXG4gICAgZW1pdCgndXBkYXRlOm1vZGVsVmFsdWUnLCBudWxsKVxuICAgIGVtaXQoJ2NsZWFyJywgcHJvcHMubW9kZWxWYWx1ZSlcblxuICAgIG5leHRUaWNrKCgpID0+IHtcbiAgICAgIGNvbnN0IGlzRGlydHkgPSBpc0RpcnR5TW9kZWwudmFsdWVcbiAgICAgIHJlc2V0VmFsaWRhdGlvbigpXG4gICAgICBpc0RpcnR5TW9kZWwudmFsdWUgPSBpc0RpcnR5XG4gICAgfSlcbiAgfVxuXG4gIGZ1bmN0aW9uIGdldENvbnRlbnQgKCkge1xuICAgIGNvbnN0IG5vZGUgPSBbXVxuXG4gICAgc2xvdHMucHJlcGVuZCAhPT0gdm9pZCAwICYmIG5vZGUucHVzaChcbiAgICAgIGgoJ2RpdicsIHtcbiAgICAgICAgY2xhc3M6ICdxLWZpZWxkX19wcmVwZW5kIHEtZmllbGRfX21hcmdpbmFsIHJvdyBuby13cmFwIGl0ZW1zLWNlbnRlcicsXG4gICAgICAgIGtleTogJ3ByZXBlbmQnLFxuICAgICAgICBvbkNsaWNrOiBwcmV2ZW50XG4gICAgICB9LCBzbG90cy5wcmVwZW5kKCkpXG4gICAgKVxuXG4gICAgbm9kZS5wdXNoKFxuICAgICAgaCgnZGl2Jywge1xuICAgICAgICBjbGFzczogJ3EtZmllbGRfX2NvbnRyb2wtY29udGFpbmVyIGNvbCByZWxhdGl2ZS1wb3NpdGlvbiByb3cgbm8td3JhcCBxLWFuY2hvci0tc2tpcCdcbiAgICAgIH0sIGdldENvbnRyb2xDb250YWluZXIoKSlcbiAgICApXG5cbiAgICBoYXNFcnJvci52YWx1ZSA9PT0gdHJ1ZSAmJiBwcm9wcy5ub0Vycm9ySWNvbiA9PT0gZmFsc2UgJiYgbm9kZS5wdXNoKFxuICAgICAgZ2V0SW5uZXJBcHBlbmROb2RlKCdlcnJvcicsIFtcbiAgICAgICAgaChRSWNvbiwgeyBuYW1lOiAkcS5pY29uU2V0LmZpZWxkLmVycm9yLCBjb2xvcjogJ25lZ2F0aXZlJyB9KVxuICAgICAgXSlcbiAgICApXG5cbiAgICBpZiAocHJvcHMubG9hZGluZyA9PT0gdHJ1ZSB8fCBzdGF0ZS5pbm5lckxvYWRpbmcudmFsdWUgPT09IHRydWUpIHtcbiAgICAgIG5vZGUucHVzaChcbiAgICAgICAgZ2V0SW5uZXJBcHBlbmROb2RlKFxuICAgICAgICAgICdpbm5lci1sb2FkaW5nLWFwcGVuZCcsXG4gICAgICAgICAgc2xvdHMubG9hZGluZyAhPT0gdm9pZCAwXG4gICAgICAgICAgICA/IHNsb3RzLmxvYWRpbmcoKVxuICAgICAgICAgICAgOiBbIGgoUVNwaW5uZXIsIHsgY29sb3I6IHByb3BzLmNvbG9yIH0pIF1cbiAgICAgICAgKVxuICAgICAgKVxuICAgIH1cbiAgICBlbHNlIGlmIChwcm9wcy5jbGVhcmFibGUgPT09IHRydWUgJiYgc3RhdGUuaGFzVmFsdWUudmFsdWUgPT09IHRydWUgJiYgc3RhdGUuZWRpdGFibGUudmFsdWUgPT09IHRydWUpIHtcbiAgICAgIG5vZGUucHVzaChcbiAgICAgICAgZ2V0SW5uZXJBcHBlbmROb2RlKCdpbm5lci1jbGVhcmFibGUtYXBwZW5kJywgW1xuICAgICAgICAgIGgoUUljb24sIHtcbiAgICAgICAgICAgIGNsYXNzOiAncS1maWVsZF9fZm9jdXNhYmxlLWFjdGlvbicsXG4gICAgICAgICAgICB0YWc6ICdidXR0b24nLFxuICAgICAgICAgICAgbmFtZTogcHJvcHMuY2xlYXJJY29uIHx8ICRxLmljb25TZXQuZmllbGQuY2xlYXIsXG4gICAgICAgICAgICB0YWJpbmRleDogMCxcbiAgICAgICAgICAgIHR5cGU6ICdidXR0b24nLFxuICAgICAgICAgICAgJ2FyaWEtaGlkZGVuJzogbnVsbCxcbiAgICAgICAgICAgIHJvbGU6IG51bGwsXG4gICAgICAgICAgICBvbkNsaWNrOiBjbGVhclZhbHVlXG4gICAgICAgICAgfSlcbiAgICAgICAgXSlcbiAgICAgIClcbiAgICB9XG5cbiAgICBzbG90cy5hcHBlbmQgIT09IHZvaWQgMCAmJiBub2RlLnB1c2goXG4gICAgICBoKCdkaXYnLCB7XG4gICAgICAgIGNsYXNzOiAncS1maWVsZF9fYXBwZW5kIHEtZmllbGRfX21hcmdpbmFsIHJvdyBuby13cmFwIGl0ZW1zLWNlbnRlcicsXG4gICAgICAgIGtleTogJ2FwcGVuZCcsXG4gICAgICAgIG9uQ2xpY2s6IHByZXZlbnRcbiAgICAgIH0sIHNsb3RzLmFwcGVuZCgpKVxuICAgIClcblxuICAgIHN0YXRlLmdldElubmVyQXBwZW5kICE9PSB2b2lkIDAgJiYgbm9kZS5wdXNoKFxuICAgICAgZ2V0SW5uZXJBcHBlbmROb2RlKCdpbm5lci1hcHBlbmQnLCBzdGF0ZS5nZXRJbm5lckFwcGVuZCgpKVxuICAgIClcblxuICAgIHN0YXRlLmdldENvbnRyb2xDaGlsZCAhPT0gdm9pZCAwICYmIG5vZGUucHVzaChcbiAgICAgIHN0YXRlLmdldENvbnRyb2xDaGlsZCgpXG4gICAgKVxuXG4gICAgcmV0dXJuIG5vZGVcbiAgfVxuXG4gIGZ1bmN0aW9uIGdldENvbnRyb2xDb250YWluZXIgKCkge1xuICAgIGNvbnN0IG5vZGUgPSBbXVxuXG4gICAgcHJvcHMucHJlZml4ICE9PSB2b2lkIDAgJiYgcHJvcHMucHJlZml4ICE9PSBudWxsICYmIG5vZGUucHVzaChcbiAgICAgIGgoJ2RpdicsIHtcbiAgICAgICAgY2xhc3M6ICdxLWZpZWxkX19wcmVmaXggbm8tcG9pbnRlci1ldmVudHMgcm93IGl0ZW1zLWNlbnRlcidcbiAgICAgIH0sIHByb3BzLnByZWZpeClcbiAgICApXG5cbiAgICBpZiAoc3RhdGUuZ2V0U2hhZG93Q29udHJvbCAhPT0gdm9pZCAwICYmIHN0YXRlLmhhc1NoYWRvdy52YWx1ZSA9PT0gdHJ1ZSkge1xuICAgICAgbm9kZS5wdXNoKFxuICAgICAgICBzdGF0ZS5nZXRTaGFkb3dDb250cm9sKClcbiAgICAgIClcbiAgICB9XG5cbiAgICBpZiAoc3RhdGUuZ2V0Q29udHJvbCAhPT0gdm9pZCAwKSB7XG4gICAgICBub2RlLnB1c2goc3RhdGUuZ2V0Q29udHJvbCgpKVxuICAgIH1cbiAgICAvLyBpbnRlcm5hbCB1c2FnZSBvbmx5OlxuICAgIGVsc2UgaWYgKHNsb3RzLnJhd0NvbnRyb2wgIT09IHZvaWQgMCkge1xuICAgICAgbm9kZS5wdXNoKHNsb3RzLnJhd0NvbnRyb2woKSlcbiAgICB9XG4gICAgZWxzZSBpZiAoc2xvdHMuY29udHJvbCAhPT0gdm9pZCAwKSB7XG4gICAgICBub2RlLnB1c2goXG4gICAgICAgIGgoJ2RpdicsIHtcbiAgICAgICAgICByZWY6IHN0YXRlLnRhcmdldFJlZixcbiAgICAgICAgICBjbGFzczogJ3EtZmllbGRfX25hdGl2ZSByb3cnLFxuICAgICAgICAgIHRhYmluZGV4OiAtMSxcbiAgICAgICAgICAuLi5zdGF0ZS5zcGxpdEF0dHJzLmF0dHJpYnV0ZXMudmFsdWUsXG4gICAgICAgICAgJ2RhdGEtYXV0b2ZvY3VzJzogcHJvcHMuYXV0b2ZvY3VzID09PSB0cnVlIHx8IHZvaWQgMFxuICAgICAgICB9LCBzbG90cy5jb250cm9sKGNvbnRyb2xTbG90U2NvcGUudmFsdWUpKVxuICAgICAgKVxuICAgIH1cblxuICAgIGhhc0xhYmVsLnZhbHVlID09PSB0cnVlICYmIG5vZGUucHVzaChcbiAgICAgIGgoJ2RpdicsIHtcbiAgICAgICAgY2xhc3M6IGxhYmVsQ2xhc3MudmFsdWVcbiAgICAgIH0sIGhTbG90KHNsb3RzLmxhYmVsLCBwcm9wcy5sYWJlbCkpXG4gICAgKVxuXG4gICAgcHJvcHMuc3VmZml4ICE9PSB2b2lkIDAgJiYgcHJvcHMuc3VmZml4ICE9PSBudWxsICYmIG5vZGUucHVzaChcbiAgICAgIGgoJ2RpdicsIHtcbiAgICAgICAgY2xhc3M6ICdxLWZpZWxkX19zdWZmaXggbm8tcG9pbnRlci1ldmVudHMgcm93IGl0ZW1zLWNlbnRlcidcbiAgICAgIH0sIHByb3BzLnN1ZmZpeClcbiAgICApXG5cbiAgICByZXR1cm4gbm9kZS5jb25jYXQoaFNsb3Qoc2xvdHMuZGVmYXVsdCkpXG4gIH1cblxuICBmdW5jdGlvbiBnZXRCb3R0b20gKCkge1xuICAgIGxldCBtc2csIGtleVxuXG4gICAgaWYgKGhhc0Vycm9yLnZhbHVlID09PSB0cnVlKSB7XG4gICAgICBpZiAoZXJyb3JNZXNzYWdlLnZhbHVlICE9PSBudWxsKSB7XG4gICAgICAgIG1zZyA9IFsgaCgnZGl2JywgeyByb2xlOiAnYWxlcnQnIH0sIGVycm9yTWVzc2FnZS52YWx1ZSkgXVxuICAgICAgICBrZXkgPSBgcS0tc2xvdC1lcnJvci0keyBlcnJvck1lc3NhZ2UudmFsdWUgfWBcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICBtc2cgPSBoU2xvdChzbG90cy5lcnJvcilcbiAgICAgICAga2V5ID0gJ3EtLXNsb3QtZXJyb3InXG4gICAgICB9XG4gICAgfVxuICAgIGVsc2UgaWYgKHByb3BzLmhpZGVIaW50ICE9PSB0cnVlIHx8IHN0YXRlLmZvY3VzZWQudmFsdWUgPT09IHRydWUpIHtcbiAgICAgIGlmIChwcm9wcy5oaW50ICE9PSB2b2lkIDApIHtcbiAgICAgICAgbXNnID0gWyBoKCdkaXYnLCBwcm9wcy5oaW50KSBdXG4gICAgICAgIGtleSA9IGBxLS1zbG90LWhpbnQtJHsgcHJvcHMuaGludCB9YFxuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIG1zZyA9IGhTbG90KHNsb3RzLmhpbnQpXG4gICAgICAgIGtleSA9ICdxLS1zbG90LWhpbnQnXG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgaGFzQ291bnRlciA9IHByb3BzLmNvdW50ZXIgPT09IHRydWUgfHwgc2xvdHMuY291bnRlciAhPT0gdm9pZCAwXG5cbiAgICBpZiAocHJvcHMuaGlkZUJvdHRvbVNwYWNlID09PSB0cnVlICYmIGhhc0NvdW50ZXIgPT09IGZhbHNlICYmIG1zZyA9PT0gdm9pZCAwKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCBtYWluID0gaCgnZGl2Jywge1xuICAgICAga2V5LFxuICAgICAgY2xhc3M6ICdxLWZpZWxkX19tZXNzYWdlcyBjb2wnXG4gICAgfSwgbXNnKVxuXG4gICAgcmV0dXJuIGgoJ2RpdicsIHtcbiAgICAgIGNsYXNzOiAncS1maWVsZF9fYm90dG9tIHJvdyBpdGVtcy1zdGFydCBxLWZpZWxkX19ib3R0b20tLSdcbiAgICAgICAgKyAocHJvcHMuaGlkZUJvdHRvbVNwYWNlICE9PSB0cnVlID8gJ2FuaW1hdGVkJyA6ICdzdGFsZScpLFxuICAgICAgb25DbGljazogcHJldmVudFxuICAgIH0sIFtcbiAgICAgIHByb3BzLmhpZGVCb3R0b21TcGFjZSA9PT0gdHJ1ZVxuICAgICAgICA/IG1haW5cbiAgICAgICAgOiBoKFRyYW5zaXRpb24sIHsgbmFtZTogJ3EtdHJhbnNpdGlvbi0tZmllbGQtbWVzc2FnZScgfSwgKCkgPT4gbWFpbiksXG5cbiAgICAgIGhhc0NvdW50ZXIgPT09IHRydWVcbiAgICAgICAgPyBoKCdkaXYnLCB7XG4gICAgICAgICAgY2xhc3M6ICdxLWZpZWxkX19jb3VudGVyJ1xuICAgICAgICB9LCBzbG90cy5jb3VudGVyICE9PSB2b2lkIDAgPyBzbG90cy5jb3VudGVyKCkgOiBzdGF0ZS5jb21wdXRlZENvdW50ZXIudmFsdWUpXG4gICAgICAgIDogbnVsbFxuICAgIF0pXG4gIH1cblxuICBmdW5jdGlvbiBnZXRJbm5lckFwcGVuZE5vZGUgKGtleSwgY29udGVudCkge1xuICAgIHJldHVybiBjb250ZW50ID09PSBudWxsXG4gICAgICA/IG51bGxcbiAgICAgIDogaCgnZGl2Jywge1xuICAgICAgICBrZXksXG4gICAgICAgIGNsYXNzOiAncS1maWVsZF9fYXBwZW5kIHEtZmllbGRfX21hcmdpbmFsIHJvdyBuby13cmFwIGl0ZW1zLWNlbnRlciBxLWFuY2hvci0tc2tpcCdcbiAgICAgIH0sIGNvbnRlbnQpXG4gIH1cblxuICBsZXQgc2hvdWxkQWN0aXZhdGUgPSBmYWxzZVxuXG4gIG9uRGVhY3RpdmF0ZWQoKCkgPT4ge1xuICAgIHNob3VsZEFjdGl2YXRlID0gdHJ1ZVxuICB9KVxuXG4gIG9uQWN0aXZhdGVkKCgpID0+IHtcbiAgICBzaG91bGRBY3RpdmF0ZSA9PT0gdHJ1ZSAmJiBwcm9wcy5hdXRvZm9jdXMgPT09IHRydWUgJiYgcHJveHkuZm9jdXMoKVxuICB9KVxuXG4gIHByb3BzLmF1dG9mb2N1cyA9PT0gdHJ1ZSAmJiBvbk1vdW50ZWQoKCkgPT4ge1xuICAgIHByb3h5LmZvY3VzKClcbiAgfSlcblxuICBvbkJlZm9yZVVubW91bnQoKCkgPT4ge1xuICAgIGZvY3Vzb3V0VGltZXIgIT09IG51bGwgJiYgY2xlYXJUaW1lb3V0KGZvY3Vzb3V0VGltZXIpXG4gIH0pXG5cbiAgLy8gZXhwb3NlIHB1YmxpYyBtZXRob2RzXG4gIE9iamVjdC5hc3NpZ24ocHJveHksIHsgZm9jdXMsIGJsdXIgfSlcblxuICByZXR1cm4gZnVuY3Rpb24gcmVuZGVyRmllbGQgKCkge1xuICAgIGNvbnN0IGxhYmVsQXR0cnMgPSBzdGF0ZS5nZXRDb250cm9sID09PSB2b2lkIDAgJiYgc2xvdHMuY29udHJvbCA9PT0gdm9pZCAwXG4gICAgICA/IHtcbiAgICAgICAgICAuLi5zdGF0ZS5zcGxpdEF0dHJzLmF0dHJpYnV0ZXMudmFsdWUsXG4gICAgICAgICAgJ2RhdGEtYXV0b2ZvY3VzJzogcHJvcHMuYXV0b2ZvY3VzID09PSB0cnVlIHx8IHZvaWQgMCxcbiAgICAgICAgICAuLi5hdHRyaWJ1dGVzLnZhbHVlXG4gICAgICAgIH1cbiAgICAgIDogYXR0cmlidXRlcy52YWx1ZVxuXG4gICAgcmV0dXJuIGgoc3RhdGUudGFnLnZhbHVlLCB7XG4gICAgICByZWY6IHN0YXRlLnJvb3RSZWYsXG4gICAgICBjbGFzczogW1xuICAgICAgICBjbGFzc2VzLnZhbHVlLFxuICAgICAgICBhdHRycy5jbGFzc1xuICAgICAgXSxcbiAgICAgIHN0eWxlOiBhdHRycy5zdHlsZSxcbiAgICAgIC4uLmxhYmVsQXR0cnNcbiAgICB9LCBbXG4gICAgICBzbG90cy5iZWZvcmUgIT09IHZvaWQgMFxuICAgICAgICA/IGgoJ2RpdicsIHtcbiAgICAgICAgICBjbGFzczogJ3EtZmllbGRfX2JlZm9yZSBxLWZpZWxkX19tYXJnaW5hbCByb3cgbm8td3JhcCBpdGVtcy1jZW50ZXInLFxuICAgICAgICAgIG9uQ2xpY2s6IHByZXZlbnRcbiAgICAgICAgfSwgc2xvdHMuYmVmb3JlKCkpXG4gICAgICAgIDogbnVsbCxcblxuICAgICAgaCgnZGl2Jywge1xuICAgICAgICBjbGFzczogJ3EtZmllbGRfX2lubmVyIHJlbGF0aXZlLXBvc2l0aW9uIGNvbCBzZWxmLXN0cmV0Y2gnXG4gICAgICB9LCBbXG4gICAgICAgIGgoJ2RpdicsIHtcbiAgICAgICAgICByZWY6IHN0YXRlLmNvbnRyb2xSZWYsXG4gICAgICAgICAgY2xhc3M6IGNvbnRlbnRDbGFzcy52YWx1ZSxcbiAgICAgICAgICB0YWJpbmRleDogLTEsXG4gICAgICAgICAgLi4uc3RhdGUuY29udHJvbEV2ZW50c1xuICAgICAgICB9LCBnZXRDb250ZW50KCkpLFxuXG4gICAgICAgIHNob3VsZFJlbmRlckJvdHRvbS52YWx1ZSA9PT0gdHJ1ZVxuICAgICAgICAgID8gZ2V0Qm90dG9tKClcbiAgICAgICAgICA6IG51bGxcbiAgICAgIF0pLFxuXG4gICAgICBzbG90cy5hZnRlciAhPT0gdm9pZCAwXG4gICAgICAgID8gaCgnZGl2Jywge1xuICAgICAgICAgIGNsYXNzOiAncS1maWVsZF9fYWZ0ZXIgcS1maWVsZF9fbWFyZ2luYWwgcm93IG5vLXdyYXAgaXRlbXMtY2VudGVyJyxcbiAgICAgICAgICBvbkNsaWNrOiBwcmV2ZW50XG4gICAgICAgIH0sIHNsb3RzLmFmdGVyKCkpXG4gICAgICAgIDogbnVsbFxuICAgIF0pXG4gIH1cbn1cbiIsImltcG9ydCB7IGgsIGNvbXB1dGVkIH0gZnJvbSAndnVlJ1xuXG5leHBvcnQgY29uc3QgdXNlRm9ybVByb3BzID0ge1xuICBuYW1lOiBTdHJpbmdcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVzZUZvcm1BdHRycyAocHJvcHMpIHtcbiAgcmV0dXJuIGNvbXB1dGVkKCgpID0+ICh7XG4gICAgdHlwZTogJ2hpZGRlbicsXG4gICAgbmFtZTogcHJvcHMubmFtZSxcbiAgICB2YWx1ZTogcHJvcHMubW9kZWxWYWx1ZVxuICB9KSlcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVzZUZvcm1JbmplY3QgKGZvcm1BdHRycyA9IHt9KSB7XG4gIHJldHVybiAoY2hpbGQsIGFjdGlvbiwgY2xhc3NOYW1lKSA9PiB7XG4gICAgY2hpbGRbIGFjdGlvbiBdKFxuICAgICAgaCgnaW5wdXQnLCB7XG4gICAgICAgIGNsYXNzOiAnaGlkZGVuJyArIChjbGFzc05hbWUgfHwgJycpLFxuICAgICAgICAuLi5mb3JtQXR0cnMudmFsdWVcbiAgICAgIH0pXG4gICAgKVxuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VGb3JtSW5wdXROYW1lQXR0ciAocHJvcHMpIHtcbiAgcmV0dXJuIGNvbXB1dGVkKCgpID0+IHByb3BzLm5hbWUgfHwgcHJvcHMuZm9yKVxufVxuIiwiaW1wb3J0IHsgY2xpZW50IH0gZnJvbSAnLi4vLi4vcGx1Z2lucy9QbGF0Zm9ybS5qcydcblxuY29uc3QgaXNKYXBhbmVzZSA9IC9bXFx1MzAwMC1cXHUzMDNmXFx1MzA0MC1cXHUzMDlmXFx1MzBhMC1cXHUzMGZmXFx1ZmYwMC1cXHVmZjlmXFx1NGUwMC1cXHU5ZmFmXFx1MzQwMC1cXHU0ZGJmXS9cbmNvbnN0IGlzQ2hpbmVzZSA9IC9bXFx1NGUwMC1cXHU5ZmZmXFx1MzQwMC1cXHU0ZGJmXFx1ezIwMDAwfS1cXHV7MmE2ZGZ9XFx1ezJhNzAwfS1cXHV7MmI3M2Z9XFx1ezJiNzQwfS1cXHV7MmI4MWZ9XFx1ezJiODIwfS1cXHV7MmNlYWZ9XFx1ZjkwMC1cXHVmYWZmXFx1MzMwMC1cXHUzM2ZmXFx1ZmUzMC1cXHVmZTRmXFx1ZjkwMC1cXHVmYWZmXFx1ezJmODAwfS1cXHV7MmZhMWZ9XS91XG5jb25zdCBpc0tvcmVhbiA9IC9bXFx1MzEzMS1cXHUzMTRlXFx1MzE0Zi1cXHUzMTYzXFx1YWMwMC1cXHVkN2EzXS9cbmNvbnN0IGlzUGxhaW5UZXh0ID0gL1thLXowLTlfIC1dJC9pXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChvbklucHV0KSB7XG4gIHJldHVybiBmdW5jdGlvbiBvbkNvbXBvc2l0aW9uIChlKSB7XG4gICAgaWYgKGUudHlwZSA9PT0gJ2NvbXBvc2l0aW9uZW5kJyB8fCBlLnR5cGUgPT09ICdjaGFuZ2UnKSB7XG4gICAgICBpZiAoZS50YXJnZXQucUNvbXBvc2luZyAhPT0gdHJ1ZSkgcmV0dXJuXG4gICAgICBlLnRhcmdldC5xQ29tcG9zaW5nID0gZmFsc2VcbiAgICAgIG9uSW5wdXQoZSlcbiAgICB9XG4gICAgZWxzZSBpZiAoXG4gICAgICBlLnR5cGUgPT09ICdjb21wb3NpdGlvbnVwZGF0ZSdcbiAgICAgICYmIGUudGFyZ2V0LnFDb21wb3NpbmcgIT09IHRydWVcbiAgICAgICYmIHR5cGVvZiBlLmRhdGEgPT09ICdzdHJpbmcnXG4gICAgKSB7XG4gICAgICBjb25zdCBpc0NvbXBvc2luZyA9IGNsaWVudC5pcy5maXJlZm94ID09PSB0cnVlXG4gICAgICAgID8gaXNQbGFpblRleHQudGVzdChlLmRhdGEpID09PSBmYWxzZVxuICAgICAgICA6IGlzSmFwYW5lc2UudGVzdChlLmRhdGEpID09PSB0cnVlIHx8IGlzQ2hpbmVzZS50ZXN0KGUuZGF0YSkgPT09IHRydWUgfHwgaXNLb3JlYW4udGVzdChlLmRhdGEpID09PSB0cnVlXG5cbiAgICAgIGlmIChpc0NvbXBvc2luZyA9PT0gdHJ1ZSkge1xuICAgICAgICBlLnRhcmdldC5xQ29tcG9zaW5nID0gdHJ1ZVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFJQSxJQUNFLEtBQ0EsU0FBUztBQUNYLE1BQU0sV0FBVyxJQUFJLE1BQU0sR0FBRztBQUc5QixTQUFTLElBQUksR0FBRyxJQUFJLEtBQUssS0FBSztBQUM1QixXQUFVLE1BQU8sSUFBSSxLQUFPLFNBQVMsRUFBRSxFQUFFLFVBQVUsQ0FBQztBQUN0RDtBQUdBLE1BQU0sZUFBZSxNQUFNO0FBRXpCLFFBQU0sTUFBTSxPQUFPLFdBQVcsY0FDMUIsU0FFRSxPQUFPLFdBQVcsY0FDZCxPQUFPLFVBQVUsT0FBTyxXQUN4QjtBQUdWLE1BQUksUUFBUSxRQUFRO0FBQ2xCLFFBQUksSUFBSSxnQkFBZ0IsUUFBUTtBQUM5QixhQUFPLElBQUk7QUFBQSxJQUNaO0FBQ0QsUUFBSSxJQUFJLG9CQUFvQixRQUFRO0FBQ2xDLGFBQU8sT0FBSztBQUNWLGNBQU0sUUFBUSxJQUFJLFdBQVcsQ0FBQztBQUM5QixZQUFJLGdCQUFnQixLQUFLO0FBQ3pCLGVBQU87QUFBQSxNQUNSO0FBQUEsSUFDRjtBQUFBLEVBQ0Y7QUFFRCxTQUFPLE9BQUs7QUFDVixVQUFNLElBQUksQ0FBRTtBQUNaLGFBQVMsSUFBSSxHQUFHLElBQUksR0FBRyxLQUFLO0FBQzFCLFFBQUUsS0FBSyxLQUFLLE1BQU0sS0FBSyxPQUFNLElBQUssR0FBRyxDQUFDO0FBQUEsSUFDdkM7QUFDRCxXQUFPO0FBQUEsRUFDUjtBQUNILEdBQUk7QUFLSixNQUFNLGNBQWM7QUFFTCxTQUFBLE1BQVk7QUFFekIsTUFBSSxRQUFRLFVBQVcsU0FBUyxLQUFLLGFBQWM7QUFDakQsYUFBUztBQUNULFVBQU0sWUFBWSxXQUFXO0FBQUEsRUFDOUI7QUFFRCxRQUFNLElBQUksTUFBTSxVQUFVLE1BQU0sS0FBSyxL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
