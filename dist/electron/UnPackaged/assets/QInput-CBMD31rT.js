import { u as useFieldProps, f as useFormProps, a as useFieldEmits, g as useFormInputNameAttr, c as useFieldState, b as useField, e as addFocusFn, h as fieldValueIsFilled, i as useKeyComposition } from "./use-key-composition-DYeyzAGI.js";
import { r as ref, w as watch, d as nextTick, a7 as shouldIgnoreKey, c as computed, a as onBeforeUnmount, o as onMounted, h, a1 as injectProp, g as getCurrentInstance, t as stop } from "./index-B8gzy2O7.js";
import { c as createComponent } from "./render-DVgBXDT_.js";
const NAMED_MASKS = {
  date: "####/##/##",
  datetime: "####/##/## ##:##",
  time: "##:##",
  fulltime: "##:##:##",
  phone: "(###) ### - ####",
  card: "#### #### #### ####"
};
const TOKENS = {
  "#": { pattern: "[\\d]", negate: "[^\\d]" },
  S: { pattern: "[a-zA-Z]", negate: "[^a-zA-Z]" },
  N: { pattern: "[0-9a-zA-Z]", negate: "[^0-9a-zA-Z]" },
  A: { pattern: "[a-zA-Z]", negate: "[^a-zA-Z]", transform: (v) => v.toLocaleUpperCase() },
  a: { pattern: "[a-zA-Z]", negate: "[^a-zA-Z]", transform: (v) => v.toLocaleLowerCase() },
  X: { pattern: "[0-9a-zA-Z]", negate: "[^0-9a-zA-Z]", transform: (v) => v.toLocaleUpperCase() },
  x: { pattern: "[0-9a-zA-Z]", negate: "[^0-9a-zA-Z]", transform: (v) => v.toLocaleLowerCase() }
};
const KEYS = Object.keys(TOKENS);
KEYS.forEach((key) => {
  TOKENS[key].regex = new RegExp(TOKENS[key].pattern);
});
const tokenRegexMask = new RegExp("\\\\([^.*+?^${}()|([\\]])|([.*+?^${}()|[\\]])|([" + KEYS.join("") + "])|(.)", "g"), escRegex = /[.*+?^${}()|[\]\\]/g;
const MARKER = String.fromCharCode(1);
const useMaskProps = {
  mask: String,
  reverseFillMask: Boolean,
  fillMask: [Boolean, String],
  unmaskedValue: Boolean
};
function useMask(props, emit, emitValue, inputRef) {
  let maskMarked, maskReplaced, computedMask, computedUnmask, pastedTextStart, selectionAnchor;
  const hasMask = ref(null);
  const innerValue = ref(getInitialMaskedValue());
  function getIsTypeText() {
    return props.autogrow === true || ["textarea", "text", "search", "url", "tel", "password"].includes(props.type);
  }
  watch(() => props.type + props.autogrow, updateMaskInternals);
  watch(() => props.mask, (v) => {
    if (v !== void 0) {
      updateMaskValue(innerValue.value, true);
    } else {
      const val = unmaskValue(innerValue.value);
      updateMaskInternals();
      props.modelValue !== val && emit("update:modelValue", val);
    }
  });
  watch(() => props.fillMask + props.reverseFillMask, () => {
    hasMask.value === true && updateMaskValue(innerValue.value, true);
  });
  watch(() => props.unmaskedValue, () => {
    hasMask.value === true && updateMaskValue(innerValue.value);
  });
  function getInitialMaskedValue() {
    updateMaskInternals();
    if (hasMask.value === true) {
      const masked = maskValue(unmaskValue(props.modelValue));
      return props.fillMask !== false ? fillWithMask(masked) : masked;
    }
    return props.modelValue;
  }
  function getPaddedMaskMarked(size) {
    if (size < maskMarked.length) {
      return maskMarked.slice(-size);
    }
    let pad = "", localMaskMarked = maskMarked;
    const padPos = localMaskMarked.indexOf(MARKER);
    if (padPos !== -1) {
      for (let i = size - localMaskMarked.length; i > 0; i--) {
        pad += MARKER;
      }
      localMaskMarked = localMaskMarked.slice(0, padPos) + pad + localMaskMarked.slice(padPos);
    }
    return localMaskMarked;
  }
  function updateMaskInternals() {
    hasMask.value = props.mask !== void 0 && props.mask.length !== 0 && getIsTypeText();
    if (hasMask.value === false) {
      computedUnmask = void 0;
      maskMarked = "";
      maskReplaced = "";
      return;
    }
    const localComputedMask = NAMED_MASKS[props.mask] === void 0 ? props.mask : NAMED_MASKS[props.mask], fillChar = typeof props.fillMask === "string" && props.fillMask.length !== 0 ? props.fillMask.slice(0, 1) : "_", fillCharEscaped = fillChar.replace(escRegex, "\\$&"), unmask = [], extract = [], mask = [];
    let firstMatch = props.reverseFillMask === true, unmaskChar = "", negateChar = "";
    localComputedMask.replace(tokenRegexMask, (_, char1, esc, token, char2) => {
      if (token !== void 0) {
        const c = TOKENS[token];
        mask.push(c);
        negateChar = c.negate;
        if (firstMatch === true) {
          extract.push("(?:" + negateChar + "+)?(" + c.pattern + "+)?(?:" + negateChar + "+)?(" + c.pattern + "+)?");
          firstMatch = false;
        }
        extract.push("(?:" + negateChar + "+)?(" + c.pattern + ")?");
      } else if (esc !== void 0) {
        unmaskChar = "\\" + (esc === "\\" ? "" : esc);
        mask.push(esc);
        unmask.push("([^" + unmaskChar + "]+)?" + unmaskChar + "?");
      } else {
        const c = char1 !== void 0 ? char1 : char2;
        unmaskChar = c === "\\" ? "\\\\\\\\" : c.replace(escRegex, "\\\\$&");
        mask.push(c);
        unmask.push("([^" + unmaskChar + "]+)?" + unmaskChar + "?");
      }
    });
    const unmaskMatcher = new RegExp(
      "^" + unmask.join("") + "(" + (unmaskChar === "" ? "." : "[^" + unmaskChar + "]") + "+)?" + (unmaskChar === "" ? "" : "[" + unmaskChar + "]*") + "$"
    ), extractLast = extract.length - 1, extractMatcher = extract.map((re, index) => {
      if (index === 0 && props.reverseFillMask === true) {
        return new RegExp("^" + fillCharEscaped + "*" + re);
      } else if (index === extractLast) {
        return new RegExp(
          "^" + re + "(" + (negateChar === "" ? "." : negateChar) + "+)?" + (props.reverseFillMask === true ? "$" : fillCharEscaped + "*")
        );
      }
      return new RegExp("^" + re);
    });
    computedMask = mask;
    computedUnmask = (val) => {
      const unmaskMatch = unmaskMatcher.exec(props.reverseFillMask === true ? val : val.slice(0, mask.length + 1));
      if (unmaskMatch !== null) {
        val = unmaskMatch.slice(1).join("");
      }
      const extractMatch = [], extractMatcherLength = extractMatcher.length;
      for (let i = 0, str = val; i < extractMatcherLength; i++) {
        const m = extractMatcher[i].exec(str);
        if (m === null) {
          break;
        }
        str = str.slice(m.shift().length);
        extractMatch.push(...m);
      }
      if (extractMatch.length !== 0) {
        return extractMatch.join("");
      }
      return val;
    };
    maskMarked = mask.map((v) => typeof v === "string" ? v : MARKER).join("");
    maskReplaced = maskMarked.split(MARKER).join(fillChar);
  }
  function updateMaskValue(rawVal, updateMaskInternalsFlag, inputType) {
    const inp = inputRef.value, end = inp.selectionEnd, endReverse = inp.value.length - end, unmasked = unmaskValue(rawVal);
    updateMaskInternalsFlag === true && updateMaskInternals();
    const preMasked = maskValue(unmasked), masked = props.fillMask !== false ? fillWithMask(preMasked) : preMasked, changed = innerValue.value !== masked;
    inp.value !== masked && (inp.value = masked);
    changed === true && (innerValue.value = masked);
    document.activeElement === inp && nextTick(() => {
      if (masked === maskReplaced) {
        const cursor = props.reverseFillMask === true ? maskReplaced.length : 0;
        inp.setSelectionRange(cursor, cursor, "forward");
        return;
      }
      if (inputType === "insertFromPaste" && props.reverseFillMask !== true) {
        const maxEnd = inp.selectionEnd;
        let cursor = end - 1;
        for (let i = pastedTextStart; i <= cursor && i < maxEnd; i++) {
          if (maskMarked[i] !== MARKER) {
            cursor++;
          }
        }
        moveCursor.right(inp, cursor);
        return;
      }
      if (["deleteContentBackward", "deleteContentForward"].indexOf(inputType) !== -1) {
        const cursor = props.reverseFillMask === true ? end === 0 ? masked.length > preMasked.length ? 1 : 0 : Math.max(0, masked.length - (masked === maskReplaced ? 0 : Math.min(preMasked.length, endReverse) + 1)) + 1 : end;
        inp.setSelectionRange(cursor, cursor, "forward");
        return;
      }
      if (props.reverseFillMask === true) {
        if (changed === true) {
          const cursor = Math.max(0, masked.length - (masked === maskReplaced ? 0 : Math.min(preMasked.length, endReverse + 1)));
          if (cursor === 1 && end === 1) {
            inp.setSelectionRange(cursor, cursor, "forward");
          } else {
            moveCursor.rightReverse(inp, cursor);
          }
        } else {
          const cursor = masked.length - endReverse;
          inp.setSelectionRange(cursor, cursor, "backward");
        }
      } else {
        if (changed === true) {
          const cursor = Math.max(0, maskMarked.indexOf(MARKER), Math.min(preMasked.length, end) - 1);
          moveCursor.right(inp, cursor);
        } else {
          const cursor = end - 1;
          moveCursor.right(inp, cursor);
        }
      }
    });
    const val = props.unmaskedValue === true ? unmaskValue(masked) : masked;
    if (String(props.modelValue) !== val && (props.modelValue !== null || val !== "")) {
      emitValue(val, true);
    }
  }
  function moveCursorForPaste(inp, start, end) {
    const preMasked = maskValue(unmaskValue(inp.value));
    start = Math.max(0, maskMarked.indexOf(MARKER), Math.min(preMasked.length, start));
    pastedTextStart = start;
    inp.setSelectionRange(start, end, "forward");
  }
  const moveCursor = {
    left(inp, cursor) {
      const noMarkBefore = maskMarked.slice(cursor - 1).indexOf(MARKER) === -1;
      let i = Math.max(0, cursor - 1);
      for (; i >= 0; i--) {
        if (maskMarked[i] === MARKER) {
          cursor = i;
          noMarkBefore === true && cursor++;
          break;
        }
      }
      if (i < 0 && maskMarked[cursor] !== void 0 && maskMarked[cursor] !== MARKER) {
        return moveCursor.right(inp, 0);
      }
      cursor >= 0 && inp.setSelectionRange(cursor, cursor, "backward");
    },
    right(inp, cursor) {
      const limit = inp.value.length;
      let i = Math.min(limit, cursor + 1);
      for (; i <= limit; i++) {
        if (maskMarked[i] === MARKER) {
          cursor = i;
          break;
        } else if (maskMarked[i - 1] === MARKER) {
          cursor = i;
        }
      }
      if (i > limit && maskMarked[cursor - 1] !== void 0 && maskMarked[cursor - 1] !== MARKER) {
        return moveCursor.left(inp, limit);
      }
      inp.setSelectionRange(cursor, cursor, "forward");
    },
    leftReverse(inp, cursor) {
      const localMaskMarked = getPaddedMaskMarked(inp.value.length);
      let i = Math.max(0, cursor - 1);
      for (; i >= 0; i--) {
        if (localMaskMarked[i - 1] === MARKER) {
          cursor = i;
          break;
        } else if (localMaskMarked[i] === MARKER) {
          cursor = i;
          if (i === 0) {
            break;
          }
        }
      }
      if (i < 0 && localMaskMarked[cursor] !== void 0 && localMaskMarked[cursor] !== MARKER) {
        return moveCursor.rightReverse(inp, 0);
      }
      cursor >= 0 && inp.setSelectionRange(cursor, cursor, "backward");
    },
    rightReverse(inp, cursor) {
      const limit = inp.value.length, localMaskMarked = getPaddedMaskMarked(limit), noMarkBefore = localMaskMarked.slice(0, cursor + 1).indexOf(MARKER) === -1;
      let i = Math.min(limit, cursor + 1);
      for (; i <= limit; i++) {
        if (localMaskMarked[i - 1] === MARKER) {
          cursor = i;
          cursor > 0 && noMarkBefore === true && cursor--;
          break;
        }
      }
      if (i > limit && localMaskMarked[cursor - 1] !== void 0 && localMaskMarked[cursor - 1] !== MARKER) {
        return moveCursor.leftReverse(inp, limit);
      }
      inp.setSelectionRange(cursor, cursor, "forward");
    }
  };
  function onMaskedClick(e) {
    emit("click", e);
    selectionAnchor = void 0;
  }
  function onMaskedKeydown(e) {
    emit("keydown", e);
    if (shouldIgnoreKey(e) === true || e.altKey === true) {
      return;
    }
    const inp = inputRef.value, start = inp.selectionStart, end = inp.selectionEnd;
    if (!e.shiftKey) {
      selectionAnchor = void 0;
    }
    if (e.keyCode === 37 || e.keyCode === 39) {
      if (e.shiftKey && selectionAnchor === void 0) {
        selectionAnchor = inp.selectionDirection === "forward" ? start : end;
      }
      const fn = moveCursor[(e.keyCode === 39 ? "right" : "left") + (props.reverseFillMask === true ? "Reverse" : "")];
      e.preventDefault();
      fn(inp, selectionAnchor === start ? end : start);
      if (e.shiftKey) {
        const cursor = inp.selectionStart;
        inp.setSelectionRange(Math.min(selectionAnchor, cursor), Math.max(selectionAnchor, cursor), "forward");
      }
    } else if (e.keyCode === 8 && props.reverseFillMask !== true && start === end) {
      moveCursor.left(inp, start);
      inp.setSelectionRange(inp.selectionStart, end, "backward");
    } else if (e.keyCode === 46 && props.reverseFillMask === true && start === end) {
      moveCursor.rightReverse(inp, end);
      inp.setSelectionRange(start, inp.selectionEnd, "forward");
    }
  }
  function maskValue(val) {
    if (val === void 0 || val === null || val === "") {
      return "";
    }
    if (props.reverseFillMask === true) {
      return maskValueReverse(val);
    }
    const mask = computedMask;
    let valIndex = 0, output = "";
    for (let maskIndex = 0; maskIndex < mask.length; maskIndex++) {
      const valChar = val[valIndex], maskDef = mask[maskIndex];
      if (typeof maskDef === "string") {
        output += maskDef;
        valChar === maskDef && valIndex++;
      } else if (valChar !== void 0 && maskDef.regex.test(valChar)) {
        output += maskDef.transform !== void 0 ? maskDef.transform(valChar) : valChar;
        valIndex++;
      } else {
        return output;
      }
    }
    return output;
  }
  function maskValueReverse(val) {
    const mask = computedMask, firstTokenIndex = maskMarked.indexOf(MARKER);
    let valIndex = val.length - 1, output = "";
    for (let maskIndex = mask.length - 1; maskIndex >= 0 && valIndex !== -1; maskIndex--) {
      const maskDef = mask[maskIndex];
      let valChar = val[valIndex];
      if (typeof maskDef === "string") {
        output = maskDef + output;
        valChar === maskDef && valIndex--;
      } else if (valChar !== void 0 && maskDef.regex.test(valChar)) {
        do {
          output = (maskDef.transform !== void 0 ? maskDef.transform(valChar) : valChar) + output;
          valIndex--;
          valChar = val[valIndex];
        } while (firstTokenIndex === maskIndex && valChar !== void 0 && maskDef.regex.test(valChar));
      } else {
        return output;
      }
    }
    return output;
  }
  function unmaskValue(val) {
    return typeof val !== "string" || computedUnmask === void 0 ? typeof val === "number" ? computedUnmask("" + val) : val : computedUnmask(val);
  }
  function fillWithMask(val) {
    if (maskReplaced.length - val.length <= 0) {
      return val;
    }
    return props.reverseFillMask === true && val.length !== 0 ? maskReplaced.slice(0, -val.length) + val : val + maskReplaced.slice(val.length);
  }
  return {
    innerValue,
    hasMask,
    moveCursorForPaste,
    updateMaskValue,
    onMaskedKeydown,
    onMaskedClick
  };
}
function useFileFormDomProps(props, typeGuard) {
  function getFormDomProps() {
    const model = props.modelValue;
    try {
      const dt = "DataTransfer" in window ? new DataTransfer() : "ClipboardEvent" in window ? new ClipboardEvent("").clipboardData : void 0;
      if (Object(model) === model) {
        ("length" in model ? Array.from(model) : [model]).forEach((file) => {
          dt.items.add(file);
        });
      }
      return {
        files: dt.files
      };
    } catch (e) {
      return {
        files: void 0
      };
    }
  }
  return typeGuard === true ? computed(() => {
    if (props.type !== "file") {
      return;
    }
    return getFormDomProps();
  }) : computed(getFormDomProps);
}
const QInput = createComponent({
  name: "QInput",
  inheritAttrs: false,
  props: {
    ...useFieldProps,
    ...useMaskProps,
    ...useFormProps,
    modelValue: { required: false },
    shadowText: String,
    type: {
      type: String,
      default: "text"
    },
    debounce: [String, Number],
    autogrow: Boolean,
    // makes a textarea
    inputClass: [Array, String, Object],
    inputStyle: [Array, String, Object]
  },
  emits: [
    ...useFieldEmits,
    "paste",
    "change",
    "keydown",
    "click",
    "animationend"
  ],
  setup(props, { emit, attrs }) {
    const { proxy } = getCurrentInstance();
    const { $q } = proxy;
    const temp = {};
    let emitCachedValue = NaN, typedNumber, stopValueWatcher, emitTimer = null, emitValueFn;
    const inputRef = ref(null);
    const nameProp = useFormInputNameAttr(props);
    const {
      innerValue,
      hasMask,
      moveCursorForPaste,
      updateMaskValue,
      onMaskedKeydown,
      onMaskedClick
    } = useMask(props, emit, emitValue, inputRef);
    const formDomProps = useFileFormDomProps(
      props,
      /* type guard */
      true
    );
    const hasValue = computed(() => fieldValueIsFilled(innerValue.value));
    const onComposition = useKeyComposition(onInput);
    const state = useFieldState();
    const isTextarea = computed(
      () => props.type === "textarea" || props.autogrow === true
    );
    const isTypeText = computed(
      () => isTextarea.value === true || ["text", "search", "url", "tel", "password"].includes(props.type)
    );
    const onEvents = computed(() => {
      const evt = {
        ...state.splitAttrs.listeners.value,
        onInput,
        onPaste,
        // Safari < 10.2 & UIWebView doesn't fire compositionend when
        // switching focus before confirming composition choice
        // this also fixes the issue where some browsers e.g. iOS Chrome
        // fires "change" instead of "input" on autocomplete.
        onChange,
        onBlur: onFinishEditing,
        onFocus: stop
      };
      evt.onCompositionstart = evt.onCompositionupdate = evt.onCompositionend = onComposition;
      if (hasMask.value === true) {
        evt.onKeydown = onMaskedKeydown;
        evt.onClick = onMaskedClick;
      }
      if (props.autogrow === true) {
        evt.onAnimationend = onAnimationend;
      }
      return evt;
    });
    const inputAttrs = computed(() => {
      const attrs2 = {
        tabindex: 0,
        "data-autofocus": props.autofocus === true || void 0,
        rows: props.type === "textarea" ? 6 : void 0,
        "aria-label": props.label,
        name: nameProp.value,
        ...state.splitAttrs.attributes.value,
        id: state.targetUid.value,
        maxlength: props.maxlength,
        disabled: props.disable === true,
        readonly: props.readonly === true
      };
      if (isTextarea.value === false) {
        attrs2.type = props.type;
      }
      if (props.autogrow === true) {
        attrs2.rows = 1;
      }
      return attrs2;
    });
    watch(() => props.type, () => {
      if (inputRef.value) {
        inputRef.value.value = props.modelValue;
      }
    });
    watch(() => props.modelValue, (v) => {
      if (hasMask.value === true) {
        if (stopValueWatcher === true) {
          stopValueWatcher = false;
          if (String(v) === emitCachedValue) {
            return;
          }
        }
        updateMaskValue(v);
      } else if (innerValue.value !== v) {
        innerValue.value = v;
        if (props.type === "number" && temp.hasOwnProperty("value") === true) {
          if (typedNumber === true) {
            typedNumber = false;
          } else {
            delete temp.value;
          }
        }
      }
      props.autogrow === true && nextTick(adjustHeight);
    });
    watch(() => props.autogrow, (val) => {
      if (val === true) {
        nextTick(adjustHeight);
      } else if (inputRef.value !== null && attrs.rows > 0) {
        inputRef.value.style.height = "auto";
      }
    });
    watch(() => props.dense, () => {
      props.autogrow === true && nextTick(adjustHeight);
    });
    function focus() {
      addFocusFn(() => {
        const el = document.activeElement;
        if (inputRef.value !== null && inputRef.value !== el && (el === null || el.id !== state.targetUid.value)) {
          inputRef.value.focus({ preventScroll: true });
        }
      });
    }
    function select() {
      inputRef.value !== null && inputRef.value.select();
    }
    function onPaste(e) {
      if (hasMask.value === true && props.reverseFillMask !== true) {
        const inp = e.target;
        moveCursorForPaste(inp, inp.selectionStart, inp.selectionEnd);
      }
      emit("paste", e);
    }
    function onInput(e) {
      if (!e || !e.target) {
        return;
      }
      if (props.type === "file") {
        emit("update:modelValue", e.target.files);
        return;
      }
      const val = e.target.value;
      if (e.target.qComposing === true) {
        temp.value = val;
        return;
      }
      if (hasMask.value === true) {
        updateMaskValue(val, false, e.inputType);
      } else {
        emitValue(val);
        if (isTypeText.value === true && e.target === document.activeElement) {
          const { selectionStart, selectionEnd } = e.target;
          if (selectionStart !== void 0 && selectionEnd !== void 0) {
            nextTick(() => {
              if (e.target === document.activeElement && val.indexOf(e.target.value) === 0) {
                e.target.setSelectionRange(selectionStart, selectionEnd);
              }
            });
          }
        }
      }
      props.autogrow === true && adjustHeight();
    }
    function onAnimationend(e) {
      emit("animationend", e);
      adjustHeight();
    }
    function emitValue(val, stopWatcher) {
      emitValueFn = () => {
        emitTimer = null;
        if (props.type !== "number" && temp.hasOwnProperty("value") === true) {
          delete temp.value;
        }
        if (props.modelValue !== val && emitCachedValue !== val) {
          emitCachedValue = val;
          stopWatcher === true && (stopValueWatcher = true);
          emit("update:modelValue", val);
          nextTick(() => {
            emitCachedValue === val && (emitCachedValue = NaN);
          });
        }
        emitValueFn = void 0;
      };
      if (props.type === "number") {
        typedNumber = true;
        temp.value = val;
      }
      if (props.debounce !== void 0) {
        emitTimer !== null && clearTimeout(emitTimer);
        temp.value = val;
        emitTimer = setTimeout(emitValueFn, props.debounce);
      } else {
        emitValueFn();
      }
    }
    function adjustHeight() {
      requestAnimationFrame(() => {
        const inp = inputRef.value;
        if (inp !== null) {
          const parentStyle = inp.parentNode.style;
          const { scrollTop } = inp;
          const { overflowY, maxHeight } = $q.platform.is.firefox === true ? {} : window.getComputedStyle(inp);
          const changeOverflow = overflowY !== void 0 && overflowY !== "scroll";
          changeOverflow === true && (inp.style.overflowY = "hidden");
          parentStyle.marginBottom = inp.scrollHeight - 1 + "px";
          inp.style.height = "1px";
          inp.style.height = inp.scrollHeight + "px";
          changeOverflow === true && (inp.style.overflowY = parseInt(maxHeight, 10) < inp.scrollHeight ? "auto" : "hidden");
          parentStyle.marginBottom = "";
          inp.scrollTop = scrollTop;
        }
      });
    }
    function onChange(e) {
      onComposition(e);
      if (emitTimer !== null) {
        clearTimeout(emitTimer);
        emitTimer = null;
      }
      emitValueFn !== void 0 && emitValueFn();
      emit("change", e.target.value);
    }
    function onFinishEditing(e) {
      e !== void 0 && stop(e);
      if (emitTimer !== null) {
        clearTimeout(emitTimer);
        emitTimer = null;
      }
      emitValueFn !== void 0 && emitValueFn();
      typedNumber = false;
      stopValueWatcher = false;
      delete temp.value;
      props.type !== "file" && setTimeout(() => {
        if (inputRef.value !== null) {
          inputRef.value.value = innerValue.value !== void 0 ? innerValue.value : "";
        }
      });
    }
    function getCurValue() {
      return temp.hasOwnProperty("value") === true ? temp.value : innerValue.value !== void 0 ? innerValue.value : "";
    }
    onBeforeUnmount(() => {
      onFinishEditing();
    });
    onMounted(() => {
      props.autogrow === true && adjustHeight();
    });
    Object.assign(state, {
      innerValue,
      fieldClass: computed(
        () => `q-${isTextarea.value === true ? "textarea" : "input"}` + (props.autogrow === true ? " q-textarea--autogrow" : "")
      ),
      hasShadow: computed(
        () => props.type !== "file" && typeof props.shadowText === "string" && props.shadowText.length !== 0
      ),
      inputRef,
      emitValue,
      hasValue,
      floatingLabel: computed(
        () => hasValue.value === true && (props.type !== "number" || isNaN(innerValue.value) === false) || fieldValueIsFilled(props.displayValue)
      ),
      getControl: () => {
        return h(isTextarea.value === true ? "textarea" : "input", {
          ref: inputRef,
          class: [
            "q-field__native q-placeholder",
            props.inputClass
          ],
          style: props.inputStyle,
          ...inputAttrs.value,
          ...onEvents.value,
          ...props.type !== "file" ? { value: getCurValue() } : formDomProps.value
        });
      },
      getShadowControl: () => {
        return h("div", {
          class: "q-field__native q-field__shadow absolute-bottom no-pointer-events" + (isTextarea.value === true ? "" : " text-no-wrap")
        }, [
          h("span", { class: "invisible" }, getCurValue()),
          h("span", props.shadowText)
        ]);
      }
    });
    const renderFn = useField(state);
    Object.assign(proxy, {
      focus,
      select,
      getNativeElement: () => inputRef.value
      // deprecated
    });
    injectProp(proxy, "nativeEl", () => inputRef.value);
    return renderFn;
  }
});
export {
  QInput as Q
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUUlucHV0LUNCTUQzMXJULmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vcXVhc2FyQDIuMTUuMS9ub2RlX21vZHVsZXMvcXVhc2FyL3NyYy9jb21wb25lbnRzL2lucHV0L3VzZS1tYXNrLmpzIiwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL3F1YXNhckAyLjE1LjEvbm9kZV9tb2R1bGVzL3F1YXNhci9zcmMvY29tcG9zYWJsZXMvcHJpdmF0ZS91c2UtZmlsZS1kb20tcHJvcHMuanMiLCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vcXVhc2FyQDIuMTUuMS9ub2RlX21vZHVsZXMvcXVhc2FyL3NyYy9jb21wb25lbnRzL2lucHV0L1FJbnB1dC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyByZWYsIHdhdGNoLCBuZXh0VGljayB9IGZyb20gJ3Z1ZSdcblxuaW1wb3J0IHsgc2hvdWxkSWdub3JlS2V5IH0gZnJvbSAnLi4vLi4vdXRpbHMvcHJpdmF0ZS9rZXktY29tcG9zaXRpb24uanMnXG5cbi8vIGxlYXZlIE5BTUVEX01BU0tTIGF0IHRvcCBvZiBmaWxlIChjb2RlIHJlZmVyZW5jZWQgZnJvbSBkb2NzKVxuY29uc3QgTkFNRURfTUFTS1MgPSB7XG4gIGRhdGU6ICcjIyMjLyMjLyMjJyxcbiAgZGF0ZXRpbWU6ICcjIyMjLyMjLyMjICMjOiMjJyxcbiAgdGltZTogJyMjOiMjJyxcbiAgZnVsbHRpbWU6ICcjIzojIzojIycsXG4gIHBob25lOiAnKCMjIykgIyMjIC0gIyMjIycsXG4gIGNhcmQ6ICcjIyMjICMjIyMgIyMjIyAjIyMjJ1xufVxuXG5jb25zdCBUT0tFTlMgPSB7XG4gICcjJzogeyBwYXR0ZXJuOiAnW1xcXFxkXScsIG5lZ2F0ZTogJ1teXFxcXGRdJyB9LFxuXG4gIFM6IHsgcGF0dGVybjogJ1thLXpBLVpdJywgbmVnYXRlOiAnW15hLXpBLVpdJyB9LFxuICBOOiB7IHBhdHRlcm46ICdbMC05YS16QS1aXScsIG5lZ2F0ZTogJ1teMC05YS16QS1aXScgfSxcblxuICBBOiB7IHBhdHRlcm46ICdbYS16QS1aXScsIG5lZ2F0ZTogJ1teYS16QS1aXScsIHRyYW5zZm9ybTogdiA9PiB2LnRvTG9jYWxlVXBwZXJDYXNlKCkgfSxcbiAgYTogeyBwYXR0ZXJuOiAnW2EtekEtWl0nLCBuZWdhdGU6ICdbXmEtekEtWl0nLCB0cmFuc2Zvcm06IHYgPT4gdi50b0xvY2FsZUxvd2VyQ2FzZSgpIH0sXG5cbiAgWDogeyBwYXR0ZXJuOiAnWzAtOWEtekEtWl0nLCBuZWdhdGU6ICdbXjAtOWEtekEtWl0nLCB0cmFuc2Zvcm06IHYgPT4gdi50b0xvY2FsZVVwcGVyQ2FzZSgpIH0sXG4gIHg6IHsgcGF0dGVybjogJ1swLTlhLXpBLVpdJywgbmVnYXRlOiAnW14wLTlhLXpBLVpdJywgdHJhbnNmb3JtOiB2ID0+IHYudG9Mb2NhbGVMb3dlckNhc2UoKSB9XG59XG5cbmNvbnN0IEtFWVMgPSBPYmplY3Qua2V5cyhUT0tFTlMpXG5LRVlTLmZvckVhY2goa2V5ID0+IHtcbiAgVE9LRU5TWyBrZXkgXS5yZWdleCA9IG5ldyBSZWdFeHAoVE9LRU5TWyBrZXkgXS5wYXR0ZXJuKVxufSlcblxuY29uc3RcbiAgdG9rZW5SZWdleE1hc2sgPSBuZXcgUmVnRXhwKCdcXFxcXFxcXChbXi4qKz9eJHt9KCl8KFtcXFxcXV0pfChbLiorP14ke30oKXxbXFxcXF1dKXwoWycgKyBLRVlTLmpvaW4oJycpICsgJ10pfCguKScsICdnJyksXG4gIGVzY1JlZ2V4ID0gL1suKis/XiR7fSgpfFtcXF1cXFxcXS9nXG5cbmNvbnN0IE1BUktFUiA9IFN0cmluZy5mcm9tQ2hhckNvZGUoMSlcblxuZXhwb3J0IGNvbnN0IHVzZU1hc2tQcm9wcyA9IHtcbiAgbWFzazogU3RyaW5nLFxuICByZXZlcnNlRmlsbE1hc2s6IEJvb2xlYW4sXG4gIGZpbGxNYXNrOiBbIEJvb2xlYW4sIFN0cmluZyBdLFxuICB1bm1hc2tlZFZhbHVlOiBCb29sZWFuXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChwcm9wcywgZW1pdCwgZW1pdFZhbHVlLCBpbnB1dFJlZikge1xuICBsZXQgbWFza01hcmtlZCwgbWFza1JlcGxhY2VkLCBjb21wdXRlZE1hc2ssIGNvbXB1dGVkVW5tYXNrLCBwYXN0ZWRUZXh0U3RhcnQsIHNlbGVjdGlvbkFuY2hvclxuXG4gIGNvbnN0IGhhc01hc2sgPSByZWYobnVsbClcbiAgY29uc3QgaW5uZXJWYWx1ZSA9IHJlZihnZXRJbml0aWFsTWFza2VkVmFsdWUoKSlcblxuICBmdW5jdGlvbiBnZXRJc1R5cGVUZXh0ICgpIHtcbiAgICByZXR1cm4gcHJvcHMuYXV0b2dyb3cgPT09IHRydWVcbiAgICAgIHx8IFsgJ3RleHRhcmVhJywgJ3RleHQnLCAnc2VhcmNoJywgJ3VybCcsICd0ZWwnLCAncGFzc3dvcmQnIF0uaW5jbHVkZXMocHJvcHMudHlwZSlcbiAgfVxuXG4gIHdhdGNoKCgpID0+IHByb3BzLnR5cGUgKyBwcm9wcy5hdXRvZ3JvdywgdXBkYXRlTWFza0ludGVybmFscylcblxuICB3YXRjaCgoKSA9PiBwcm9wcy5tYXNrLCB2ID0+IHtcbiAgICBpZiAodiAhPT0gdm9pZCAwKSB7XG4gICAgICB1cGRhdGVNYXNrVmFsdWUoaW5uZXJWYWx1ZS52YWx1ZSwgdHJ1ZSlcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBjb25zdCB2YWwgPSB1bm1hc2tWYWx1ZShpbm5lclZhbHVlLnZhbHVlKVxuICAgICAgdXBkYXRlTWFza0ludGVybmFscygpXG4gICAgICBwcm9wcy5tb2RlbFZhbHVlICE9PSB2YWwgJiYgZW1pdCgndXBkYXRlOm1vZGVsVmFsdWUnLCB2YWwpXG4gICAgfVxuICB9KVxuXG4gIHdhdGNoKCgpID0+IHByb3BzLmZpbGxNYXNrICsgcHJvcHMucmV2ZXJzZUZpbGxNYXNrLCAoKSA9PiB7XG4gICAgaGFzTWFzay52YWx1ZSA9PT0gdHJ1ZSAmJiB1cGRhdGVNYXNrVmFsdWUoaW5uZXJWYWx1ZS52YWx1ZSwgdHJ1ZSlcbiAgfSlcblxuICB3YXRjaCgoKSA9PiBwcm9wcy51bm1hc2tlZFZhbHVlLCAoKSA9PiB7XG4gICAgaGFzTWFzay52YWx1ZSA9PT0gdHJ1ZSAmJiB1cGRhdGVNYXNrVmFsdWUoaW5uZXJWYWx1ZS52YWx1ZSlcbiAgfSlcblxuICBmdW5jdGlvbiBnZXRJbml0aWFsTWFza2VkVmFsdWUgKCkge1xuICAgIHVwZGF0ZU1hc2tJbnRlcm5hbHMoKVxuXG4gICAgaWYgKGhhc01hc2sudmFsdWUgPT09IHRydWUpIHtcbiAgICAgIGNvbnN0IG1hc2tlZCA9IG1hc2tWYWx1ZSh1bm1hc2tWYWx1ZShwcm9wcy5tb2RlbFZhbHVlKSlcblxuICAgICAgcmV0dXJuIHByb3BzLmZpbGxNYXNrICE9PSBmYWxzZVxuICAgICAgICA/IGZpbGxXaXRoTWFzayhtYXNrZWQpXG4gICAgICAgIDogbWFza2VkXG4gICAgfVxuXG4gICAgcmV0dXJuIHByb3BzLm1vZGVsVmFsdWVcbiAgfVxuXG4gIGZ1bmN0aW9uIGdldFBhZGRlZE1hc2tNYXJrZWQgKHNpemUpIHtcbiAgICBpZiAoc2l6ZSA8IG1hc2tNYXJrZWQubGVuZ3RoKSB7XG4gICAgICByZXR1cm4gbWFza01hcmtlZC5zbGljZSgtc2l6ZSlcbiAgICB9XG5cbiAgICBsZXQgcGFkID0gJycsIGxvY2FsTWFza01hcmtlZCA9IG1hc2tNYXJrZWRcbiAgICBjb25zdCBwYWRQb3MgPSBsb2NhbE1hc2tNYXJrZWQuaW5kZXhPZihNQVJLRVIpXG5cbiAgICBpZiAocGFkUG9zICE9PSAtMSkge1xuICAgICAgZm9yIChsZXQgaSA9IHNpemUgLSBsb2NhbE1hc2tNYXJrZWQubGVuZ3RoOyBpID4gMDsgaS0tKSB7XG4gICAgICAgIHBhZCArPSBNQVJLRVJcbiAgICAgIH1cblxuICAgICAgbG9jYWxNYXNrTWFya2VkID0gbG9jYWxNYXNrTWFya2VkLnNsaWNlKDAsIHBhZFBvcykgKyBwYWQgKyBsb2NhbE1hc2tNYXJrZWQuc2xpY2UocGFkUG9zKVxuICAgIH1cblxuICAgIHJldHVybiBsb2NhbE1hc2tNYXJrZWRcbiAgfVxuXG4gIGZ1bmN0aW9uIHVwZGF0ZU1hc2tJbnRlcm5hbHMgKCkge1xuICAgIGhhc01hc2sudmFsdWUgPSBwcm9wcy5tYXNrICE9PSB2b2lkIDBcbiAgICAgICYmIHByb3BzLm1hc2subGVuZ3RoICE9PSAwXG4gICAgICAmJiBnZXRJc1R5cGVUZXh0KClcblxuICAgIGlmIChoYXNNYXNrLnZhbHVlID09PSBmYWxzZSkge1xuICAgICAgY29tcHV0ZWRVbm1hc2sgPSB2b2lkIDBcbiAgICAgIG1hc2tNYXJrZWQgPSAnJ1xuICAgICAgbWFza1JlcGxhY2VkID0gJydcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0XG4gICAgICBsb2NhbENvbXB1dGVkTWFzayA9IE5BTUVEX01BU0tTWyBwcm9wcy5tYXNrIF0gPT09IHZvaWQgMFxuICAgICAgICA/IHByb3BzLm1hc2tcbiAgICAgICAgOiBOQU1FRF9NQVNLU1sgcHJvcHMubWFzayBdLFxuICAgICAgZmlsbENoYXIgPSB0eXBlb2YgcHJvcHMuZmlsbE1hc2sgPT09ICdzdHJpbmcnICYmIHByb3BzLmZpbGxNYXNrLmxlbmd0aCAhPT0gMFxuICAgICAgICA/IHByb3BzLmZpbGxNYXNrLnNsaWNlKDAsIDEpXG4gICAgICAgIDogJ18nLFxuICAgICAgZmlsbENoYXJFc2NhcGVkID0gZmlsbENoYXIucmVwbGFjZShlc2NSZWdleCwgJ1xcXFwkJicpLFxuICAgICAgdW5tYXNrID0gW10sXG4gICAgICBleHRyYWN0ID0gW10sXG4gICAgICBtYXNrID0gW11cblxuICAgIGxldFxuICAgICAgZmlyc3RNYXRjaCA9IHByb3BzLnJldmVyc2VGaWxsTWFzayA9PT0gdHJ1ZSxcbiAgICAgIHVubWFza0NoYXIgPSAnJyxcbiAgICAgIG5lZ2F0ZUNoYXIgPSAnJ1xuXG4gICAgbG9jYWxDb21wdXRlZE1hc2sucmVwbGFjZSh0b2tlblJlZ2V4TWFzaywgKF8sIGNoYXIxLCBlc2MsIHRva2VuLCBjaGFyMikgPT4ge1xuICAgICAgaWYgKHRva2VuICE9PSB2b2lkIDApIHtcbiAgICAgICAgY29uc3QgYyA9IFRPS0VOU1sgdG9rZW4gXVxuICAgICAgICBtYXNrLnB1c2goYylcbiAgICAgICAgbmVnYXRlQ2hhciA9IGMubmVnYXRlXG4gICAgICAgIGlmIChmaXJzdE1hdGNoID09PSB0cnVlKSB7XG4gICAgICAgICAgZXh0cmFjdC5wdXNoKCcoPzonICsgbmVnYXRlQ2hhciArICcrKT8oJyArIGMucGF0dGVybiArICcrKT8oPzonICsgbmVnYXRlQ2hhciArICcrKT8oJyArIGMucGF0dGVybiArICcrKT8nKVxuICAgICAgICAgIGZpcnN0TWF0Y2ggPSBmYWxzZVxuICAgICAgICB9XG4gICAgICAgIGV4dHJhY3QucHVzaCgnKD86JyArIG5lZ2F0ZUNoYXIgKyAnKyk/KCcgKyBjLnBhdHRlcm4gKyAnKT8nKVxuICAgICAgfVxuICAgICAgZWxzZSBpZiAoZXNjICE9PSB2b2lkIDApIHtcbiAgICAgICAgdW5tYXNrQ2hhciA9ICdcXFxcJyArIChlc2MgPT09ICdcXFxcJyA/ICcnIDogZXNjKVxuICAgICAgICBtYXNrLnB1c2goZXNjKVxuICAgICAgICB1bm1hc2sucHVzaCgnKFteJyArIHVubWFza0NoYXIgKyAnXSspPycgKyB1bm1hc2tDaGFyICsgJz8nKVxuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIGNvbnN0IGMgPSBjaGFyMSAhPT0gdm9pZCAwID8gY2hhcjEgOiBjaGFyMlxuICAgICAgICB1bm1hc2tDaGFyID0gYyA9PT0gJ1xcXFwnID8gJ1xcXFxcXFxcXFxcXFxcXFwnIDogYy5yZXBsYWNlKGVzY1JlZ2V4LCAnXFxcXFxcXFwkJicpXG4gICAgICAgIG1hc2sucHVzaChjKVxuICAgICAgICB1bm1hc2sucHVzaCgnKFteJyArIHVubWFza0NoYXIgKyAnXSspPycgKyB1bm1hc2tDaGFyICsgJz8nKVxuICAgICAgfVxuICAgIH0pXG5cbiAgICBjb25zdFxuICAgICAgdW5tYXNrTWF0Y2hlciA9IG5ldyBSZWdFeHAoXG4gICAgICAgICdeJ1xuICAgICAgICArIHVubWFzay5qb2luKCcnKVxuICAgICAgICArICcoJyArICh1bm1hc2tDaGFyID09PSAnJyA/ICcuJyA6ICdbXicgKyB1bm1hc2tDaGFyICsgJ10nKSArICcrKT8nXG4gICAgICAgICsgKHVubWFza0NoYXIgPT09ICcnID8gJycgOiAnWycgKyB1bm1hc2tDaGFyICsgJ10qJykgKyAnJCdcbiAgICAgICksXG4gICAgICBleHRyYWN0TGFzdCA9IGV4dHJhY3QubGVuZ3RoIC0gMSxcbiAgICAgIGV4dHJhY3RNYXRjaGVyID0gZXh0cmFjdC5tYXAoKHJlLCBpbmRleCkgPT4ge1xuICAgICAgICBpZiAoaW5kZXggPT09IDAgJiYgcHJvcHMucmV2ZXJzZUZpbGxNYXNrID09PSB0cnVlKSB7XG4gICAgICAgICAgcmV0dXJuIG5ldyBSZWdFeHAoJ14nICsgZmlsbENoYXJFc2NhcGVkICsgJyonICsgcmUpXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoaW5kZXggPT09IGV4dHJhY3RMYXN0KSB7XG4gICAgICAgICAgcmV0dXJuIG5ldyBSZWdFeHAoXG4gICAgICAgICAgICAnXicgKyByZVxuICAgICAgICAgICAgKyAnKCcgKyAobmVnYXRlQ2hhciA9PT0gJycgPyAnLicgOiBuZWdhdGVDaGFyKSArICcrKT8nXG4gICAgICAgICAgICArIChwcm9wcy5yZXZlcnNlRmlsbE1hc2sgPT09IHRydWUgPyAnJCcgOiBmaWxsQ2hhckVzY2FwZWQgKyAnKicpXG4gICAgICAgICAgKVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG5ldyBSZWdFeHAoJ14nICsgcmUpXG4gICAgICB9KVxuXG4gICAgY29tcHV0ZWRNYXNrID0gbWFza1xuICAgIGNvbXB1dGVkVW5tYXNrID0gdmFsID0+IHtcbiAgICAgIGNvbnN0IHVubWFza01hdGNoID0gdW5tYXNrTWF0Y2hlci5leGVjKHByb3BzLnJldmVyc2VGaWxsTWFzayA9PT0gdHJ1ZSA/IHZhbCA6IHZhbC5zbGljZSgwLCBtYXNrLmxlbmd0aCArIDEpKVxuICAgICAgaWYgKHVubWFza01hdGNoICE9PSBudWxsKSB7XG4gICAgICAgIHZhbCA9IHVubWFza01hdGNoLnNsaWNlKDEpLmpvaW4oJycpXG4gICAgICB9XG5cbiAgICAgIGNvbnN0XG4gICAgICAgIGV4dHJhY3RNYXRjaCA9IFtdLFxuICAgICAgICBleHRyYWN0TWF0Y2hlckxlbmd0aCA9IGV4dHJhY3RNYXRjaGVyLmxlbmd0aFxuXG4gICAgICBmb3IgKGxldCBpID0gMCwgc3RyID0gdmFsOyBpIDwgZXh0cmFjdE1hdGNoZXJMZW5ndGg7IGkrKykge1xuICAgICAgICBjb25zdCBtID0gZXh0cmFjdE1hdGNoZXJbIGkgXS5leGVjKHN0cilcblxuICAgICAgICBpZiAobSA9PT0gbnVsbCkge1xuICAgICAgICAgIGJyZWFrXG4gICAgICAgIH1cblxuICAgICAgICBzdHIgPSBzdHIuc2xpY2UobS5zaGlmdCgpLmxlbmd0aClcbiAgICAgICAgZXh0cmFjdE1hdGNoLnB1c2goLi4ubSlcbiAgICAgIH1cbiAgICAgIGlmIChleHRyYWN0TWF0Y2gubGVuZ3RoICE9PSAwKSB7XG4gICAgICAgIHJldHVybiBleHRyYWN0TWF0Y2guam9pbignJylcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHZhbFxuICAgIH1cbiAgICBtYXNrTWFya2VkID0gbWFzay5tYXAodiA9PiAodHlwZW9mIHYgPT09ICdzdHJpbmcnID8gdiA6IE1BUktFUikpLmpvaW4oJycpXG4gICAgbWFza1JlcGxhY2VkID0gbWFza01hcmtlZC5zcGxpdChNQVJLRVIpLmpvaW4oZmlsbENoYXIpXG4gIH1cblxuICBmdW5jdGlvbiB1cGRhdGVNYXNrVmFsdWUgKHJhd1ZhbCwgdXBkYXRlTWFza0ludGVybmFsc0ZsYWcsIGlucHV0VHlwZSkge1xuICAgIGNvbnN0XG4gICAgICBpbnAgPSBpbnB1dFJlZi52YWx1ZSxcbiAgICAgIGVuZCA9IGlucC5zZWxlY3Rpb25FbmQsXG4gICAgICBlbmRSZXZlcnNlID0gaW5wLnZhbHVlLmxlbmd0aCAtIGVuZCxcbiAgICAgIHVubWFza2VkID0gdW5tYXNrVmFsdWUocmF3VmFsKVxuXG4gICAgLy8gVXBkYXRlIGhlcmUgc28gdW5tYXNrIHVzZXMgdGhlIG9yaWdpbmFsIGZpbGxDaGFyXG4gICAgdXBkYXRlTWFza0ludGVybmFsc0ZsYWcgPT09IHRydWUgJiYgdXBkYXRlTWFza0ludGVybmFscygpXG5cbiAgICBjb25zdFxuICAgICAgcHJlTWFza2VkID0gbWFza1ZhbHVlKHVubWFza2VkKSxcbiAgICAgIG1hc2tlZCA9IHByb3BzLmZpbGxNYXNrICE9PSBmYWxzZVxuICAgICAgICA/IGZpbGxXaXRoTWFzayhwcmVNYXNrZWQpXG4gICAgICAgIDogcHJlTWFza2VkLFxuICAgICAgY2hhbmdlZCA9IGlubmVyVmFsdWUudmFsdWUgIT09IG1hc2tlZFxuXG4gICAgLy8gV2Ugd2FudCB0byBhdm9pZCBcImZsaWNrZXJpbmdcIiBzbyB3ZSBzZXQgdmFsdWUgaW1tZWRpYXRlbHlcbiAgICBpbnAudmFsdWUgIT09IG1hc2tlZCAmJiAoaW5wLnZhbHVlID0gbWFza2VkKVxuXG4gICAgY2hhbmdlZCA9PT0gdHJ1ZSAmJiAoaW5uZXJWYWx1ZS52YWx1ZSA9IG1hc2tlZClcblxuICAgIGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQgPT09IGlucCAmJiBuZXh0VGljaygoKSA9PiB7XG4gICAgICBpZiAobWFza2VkID09PSBtYXNrUmVwbGFjZWQpIHtcbiAgICAgICAgY29uc3QgY3Vyc29yID0gcHJvcHMucmV2ZXJzZUZpbGxNYXNrID09PSB0cnVlID8gbWFza1JlcGxhY2VkLmxlbmd0aCA6IDBcbiAgICAgICAgaW5wLnNldFNlbGVjdGlvblJhbmdlKGN1cnNvciwgY3Vyc29yLCAnZm9yd2FyZCcpXG5cbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIGlmIChpbnB1dFR5cGUgPT09ICdpbnNlcnRGcm9tUGFzdGUnICYmIHByb3BzLnJldmVyc2VGaWxsTWFzayAhPT0gdHJ1ZSkge1xuICAgICAgICBjb25zdCBtYXhFbmQgPSBpbnAuc2VsZWN0aW9uRW5kXG4gICAgICAgIGxldCBjdXJzb3IgPSBlbmQgLSAxXG4gICAgICAgIC8vIGVhY2ggbm9uLW1hcmtlciBjaGFyIG1lYW5zIHdlIG1vdmUgb25jZSB0byByaWdodFxuICAgICAgICBmb3IgKGxldCBpID0gcGFzdGVkVGV4dFN0YXJ0OyBpIDw9IGN1cnNvciAmJiBpIDwgbWF4RW5kOyBpKyspIHtcbiAgICAgICAgICBpZiAobWFza01hcmtlZFsgaSBdICE9PSBNQVJLRVIpIHtcbiAgICAgICAgICAgIGN1cnNvcisrXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIG1vdmVDdXJzb3IucmlnaHQoaW5wLCBjdXJzb3IpXG5cbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIGlmIChbICdkZWxldGVDb250ZW50QmFja3dhcmQnLCAnZGVsZXRlQ29udGVudEZvcndhcmQnIF0uaW5kZXhPZihpbnB1dFR5cGUpICE9PSAtMSkge1xuICAgICAgICBjb25zdCBjdXJzb3IgPSBwcm9wcy5yZXZlcnNlRmlsbE1hc2sgPT09IHRydWVcbiAgICAgICAgICA/IChcbiAgICAgICAgICAgICAgZW5kID09PSAwXG4gICAgICAgICAgICAgICAgPyAobWFza2VkLmxlbmd0aCA+IHByZU1hc2tlZC5sZW5ndGggPyAxIDogMClcbiAgICAgICAgICAgICAgICA6IE1hdGgubWF4KDAsIG1hc2tlZC5sZW5ndGggLSAobWFza2VkID09PSBtYXNrUmVwbGFjZWQgPyAwIDogTWF0aC5taW4ocHJlTWFza2VkLmxlbmd0aCwgZW5kUmV2ZXJzZSkgKyAxKSkgKyAxXG4gICAgICAgICAgICApXG4gICAgICAgICAgOiBlbmRcblxuICAgICAgICBpbnAuc2V0U2VsZWN0aW9uUmFuZ2UoY3Vyc29yLCBjdXJzb3IsICdmb3J3YXJkJylcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIGlmIChwcm9wcy5yZXZlcnNlRmlsbE1hc2sgPT09IHRydWUpIHtcbiAgICAgICAgaWYgKGNoYW5nZWQgPT09IHRydWUpIHtcbiAgICAgICAgICBjb25zdCBjdXJzb3IgPSBNYXRoLm1heCgwLCBtYXNrZWQubGVuZ3RoIC0gKG1hc2tlZCA9PT0gbWFza1JlcGxhY2VkID8gMCA6IE1hdGgubWluKHByZU1hc2tlZC5sZW5ndGgsIGVuZFJldmVyc2UgKyAxKSkpXG5cbiAgICAgICAgICBpZiAoY3Vyc29yID09PSAxICYmIGVuZCA9PT0gMSkge1xuICAgICAgICAgICAgaW5wLnNldFNlbGVjdGlvblJhbmdlKGN1cnNvciwgY3Vyc29yLCAnZm9yd2FyZCcpXG4gICAgICAgICAgfVxuICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgbW92ZUN1cnNvci5yaWdodFJldmVyc2UoaW5wLCBjdXJzb3IpXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgIGNvbnN0IGN1cnNvciA9IG1hc2tlZC5sZW5ndGggLSBlbmRSZXZlcnNlXG4gICAgICAgICAgaW5wLnNldFNlbGVjdGlvblJhbmdlKGN1cnNvciwgY3Vyc29yLCAnYmFja3dhcmQnKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgaWYgKGNoYW5nZWQgPT09IHRydWUpIHtcbiAgICAgICAgICBjb25zdCBjdXJzb3IgPSBNYXRoLm1heCgwLCBtYXNrTWFya2VkLmluZGV4T2YoTUFSS0VSKSwgTWF0aC5taW4ocHJlTWFza2VkLmxlbmd0aCwgZW5kKSAtIDEpXG4gICAgICAgICAgbW92ZUN1cnNvci5yaWdodChpbnAsIGN1cnNvcilcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICBjb25zdCBjdXJzb3IgPSBlbmQgLSAxXG4gICAgICAgICAgbW92ZUN1cnNvci5yaWdodChpbnAsIGN1cnNvcilcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pXG5cbiAgICBjb25zdCB2YWwgPSBwcm9wcy51bm1hc2tlZFZhbHVlID09PSB0cnVlXG4gICAgICA/IHVubWFza1ZhbHVlKG1hc2tlZClcbiAgICAgIDogbWFza2VkXG5cbiAgICBpZiAoXG4gICAgICBTdHJpbmcocHJvcHMubW9kZWxWYWx1ZSkgIT09IHZhbFxuICAgICAgJiYgKHByb3BzLm1vZGVsVmFsdWUgIT09IG51bGwgfHwgdmFsICE9PSAnJylcbiAgICApIHtcbiAgICAgIGVtaXRWYWx1ZSh2YWwsIHRydWUpXG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gbW92ZUN1cnNvckZvclBhc3RlIChpbnAsIHN0YXJ0LCBlbmQpIHtcbiAgICBjb25zdCBwcmVNYXNrZWQgPSBtYXNrVmFsdWUodW5tYXNrVmFsdWUoaW5wLnZhbHVlKSlcblxuICAgIHN0YXJ0ID0gTWF0aC5tYXgoMCwgbWFza01hcmtlZC5pbmRleE9mKE1BUktFUiksIE1hdGgubWluKHByZU1hc2tlZC5sZW5ndGgsIHN0YXJ0KSlcbiAgICBwYXN0ZWRUZXh0U3RhcnQgPSBzdGFydFxuXG4gICAgaW5wLnNldFNlbGVjdGlvblJhbmdlKHN0YXJ0LCBlbmQsICdmb3J3YXJkJylcbiAgfVxuXG4gIGNvbnN0IG1vdmVDdXJzb3IgPSB7XG4gICAgbGVmdCAoaW5wLCBjdXJzb3IpIHtcbiAgICAgIGNvbnN0IG5vTWFya0JlZm9yZSA9IG1hc2tNYXJrZWQuc2xpY2UoY3Vyc29yIC0gMSkuaW5kZXhPZihNQVJLRVIpID09PSAtMVxuICAgICAgbGV0IGkgPSBNYXRoLm1heCgwLCBjdXJzb3IgLSAxKVxuXG4gICAgICBmb3IgKDsgaSA+PSAwOyBpLS0pIHtcbiAgICAgICAgaWYgKG1hc2tNYXJrZWRbIGkgXSA9PT0gTUFSS0VSKSB7XG4gICAgICAgICAgY3Vyc29yID0gaVxuICAgICAgICAgIG5vTWFya0JlZm9yZSA9PT0gdHJ1ZSAmJiBjdXJzb3IrK1xuICAgICAgICAgIGJyZWFrXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKFxuICAgICAgICBpIDwgMFxuICAgICAgICAmJiBtYXNrTWFya2VkWyBjdXJzb3IgXSAhPT0gdm9pZCAwXG4gICAgICAgICYmIG1hc2tNYXJrZWRbIGN1cnNvciBdICE9PSBNQVJLRVJcbiAgICAgICkge1xuICAgICAgICByZXR1cm4gbW92ZUN1cnNvci5yaWdodChpbnAsIDApXG4gICAgICB9XG5cbiAgICAgIGN1cnNvciA+PSAwICYmIGlucC5zZXRTZWxlY3Rpb25SYW5nZShjdXJzb3IsIGN1cnNvciwgJ2JhY2t3YXJkJylcbiAgICB9LFxuXG4gICAgcmlnaHQgKGlucCwgY3Vyc29yKSB7XG4gICAgICBjb25zdCBsaW1pdCA9IGlucC52YWx1ZS5sZW5ndGhcbiAgICAgIGxldCBpID0gTWF0aC5taW4obGltaXQsIGN1cnNvciArIDEpXG5cbiAgICAgIGZvciAoOyBpIDw9IGxpbWl0OyBpKyspIHtcbiAgICAgICAgaWYgKG1hc2tNYXJrZWRbIGkgXSA9PT0gTUFSS0VSKSB7XG4gICAgICAgICAgY3Vyc29yID0gaVxuICAgICAgICAgIGJyZWFrXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAobWFza01hcmtlZFsgaSAtIDEgXSA9PT0gTUFSS0VSKSB7XG4gICAgICAgICAgY3Vyc29yID0gaVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChcbiAgICAgICAgaSA+IGxpbWl0XG4gICAgICAgICYmIG1hc2tNYXJrZWRbIGN1cnNvciAtIDEgXSAhPT0gdm9pZCAwXG4gICAgICAgICYmIG1hc2tNYXJrZWRbIGN1cnNvciAtIDEgXSAhPT0gTUFSS0VSXG4gICAgICApIHtcbiAgICAgICAgcmV0dXJuIG1vdmVDdXJzb3IubGVmdChpbnAsIGxpbWl0KVxuICAgICAgfVxuXG4gICAgICBpbnAuc2V0U2VsZWN0aW9uUmFuZ2UoY3Vyc29yLCBjdXJzb3IsICdmb3J3YXJkJylcbiAgICB9LFxuXG4gICAgbGVmdFJldmVyc2UgKGlucCwgY3Vyc29yKSB7XG4gICAgICBjb25zdFxuICAgICAgICBsb2NhbE1hc2tNYXJrZWQgPSBnZXRQYWRkZWRNYXNrTWFya2VkKGlucC52YWx1ZS5sZW5ndGgpXG4gICAgICBsZXQgaSA9IE1hdGgubWF4KDAsIGN1cnNvciAtIDEpXG5cbiAgICAgIGZvciAoOyBpID49IDA7IGktLSkge1xuICAgICAgICBpZiAobG9jYWxNYXNrTWFya2VkWyBpIC0gMSBdID09PSBNQVJLRVIpIHtcbiAgICAgICAgICBjdXJzb3IgPSBpXG4gICAgICAgICAgYnJlYWtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChsb2NhbE1hc2tNYXJrZWRbIGkgXSA9PT0gTUFSS0VSKSB7XG4gICAgICAgICAgY3Vyc29yID0gaVxuICAgICAgICAgIGlmIChpID09PSAwKSB7XG4gICAgICAgICAgICBicmVha1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoXG4gICAgICAgIGkgPCAwXG4gICAgICAgICYmIGxvY2FsTWFza01hcmtlZFsgY3Vyc29yIF0gIT09IHZvaWQgMFxuICAgICAgICAmJiBsb2NhbE1hc2tNYXJrZWRbIGN1cnNvciBdICE9PSBNQVJLRVJcbiAgICAgICkge1xuICAgICAgICByZXR1cm4gbW92ZUN1cnNvci5yaWdodFJldmVyc2UoaW5wLCAwKVxuICAgICAgfVxuXG4gICAgICBjdXJzb3IgPj0gMCAmJiBpbnAuc2V0U2VsZWN0aW9uUmFuZ2UoY3Vyc29yLCBjdXJzb3IsICdiYWNrd2FyZCcpXG4gICAgfSxcblxuICAgIHJpZ2h0UmV2ZXJzZSAoaW5wLCBjdXJzb3IpIHtcbiAgICAgIGNvbnN0XG4gICAgICAgIGxpbWl0ID0gaW5wLnZhbHVlLmxlbmd0aCxcbiAgICAgICAgbG9jYWxNYXNrTWFya2VkID0gZ2V0UGFkZGVkTWFza01hcmtlZChsaW1pdCksXG4gICAgICAgIG5vTWFya0JlZm9yZSA9IGxvY2FsTWFza01hcmtlZC5zbGljZSgwLCBjdXJzb3IgKyAxKS5pbmRleE9mKE1BUktFUikgPT09IC0xXG4gICAgICBsZXQgaSA9IE1hdGgubWluKGxpbWl0LCBjdXJzb3IgKyAxKVxuXG4gICAgICBmb3IgKDsgaSA8PSBsaW1pdDsgaSsrKSB7XG4gICAgICAgIGlmIChsb2NhbE1hc2tNYXJrZWRbIGkgLSAxIF0gPT09IE1BUktFUikge1xuICAgICAgICAgIGN1cnNvciA9IGlcbiAgICAgICAgICBjdXJzb3IgPiAwICYmIG5vTWFya0JlZm9yZSA9PT0gdHJ1ZSAmJiBjdXJzb3ItLVxuICAgICAgICAgIGJyZWFrXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKFxuICAgICAgICBpID4gbGltaXRcbiAgICAgICAgJiYgbG9jYWxNYXNrTWFya2VkWyBjdXJzb3IgLSAxIF0gIT09IHZvaWQgMFxuICAgICAgICAmJiBsb2NhbE1hc2tNYXJrZWRbIGN1cnNvciAtIDEgXSAhPT0gTUFSS0VSXG4gICAgICApIHtcbiAgICAgICAgcmV0dXJuIG1vdmVDdXJzb3IubGVmdFJldmVyc2UoaW5wLCBsaW1pdClcbiAgICAgIH1cblxuICAgICAgaW5wLnNldFNlbGVjdGlvblJhbmdlKGN1cnNvciwgY3Vyc29yLCAnZm9yd2FyZCcpXG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gb25NYXNrZWRDbGljayAoZSkge1xuICAgIGVtaXQoJ2NsaWNrJywgZSlcblxuICAgIHNlbGVjdGlvbkFuY2hvciA9IHZvaWQgMFxuICB9XG5cbiAgZnVuY3Rpb24gb25NYXNrZWRLZXlkb3duIChlKSB7XG4gICAgZW1pdCgna2V5ZG93bicsIGUpXG5cbiAgICBpZiAoXG4gICAgICBzaG91bGRJZ25vcmVLZXkoZSkgPT09IHRydWVcbiAgICAgIHx8IGUuYWx0S2V5ID09PSB0cnVlIC8vIGxldCBicm93c2VyIGhhbmRsZSB0aGVzZVxuICAgICkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3RcbiAgICAgIGlucCA9IGlucHV0UmVmLnZhbHVlLFxuICAgICAgc3RhcnQgPSBpbnAuc2VsZWN0aW9uU3RhcnQsXG4gICAgICBlbmQgPSBpbnAuc2VsZWN0aW9uRW5kXG5cbiAgICBpZiAoIWUuc2hpZnRLZXkpIHtcbiAgICAgIHNlbGVjdGlvbkFuY2hvciA9IHZvaWQgMFxuICAgIH1cblxuICAgIGlmIChlLmtleUNvZGUgPT09IDM3IHx8IGUua2V5Q29kZSA9PT0gMzkpIHsgLy8gTGVmdCAvIFJpZ2h0XG4gICAgICBpZiAoZS5zaGlmdEtleSAmJiBzZWxlY3Rpb25BbmNob3IgPT09IHZvaWQgMCkge1xuICAgICAgICBzZWxlY3Rpb25BbmNob3IgPSBpbnAuc2VsZWN0aW9uRGlyZWN0aW9uID09PSAnZm9yd2FyZCcgPyBzdGFydCA6IGVuZFxuICAgICAgfVxuXG4gICAgICBjb25zdCBmbiA9IG1vdmVDdXJzb3JbIChlLmtleUNvZGUgPT09IDM5ID8gJ3JpZ2h0JyA6ICdsZWZ0JykgKyAocHJvcHMucmV2ZXJzZUZpbGxNYXNrID09PSB0cnVlID8gJ1JldmVyc2UnIDogJycpIF1cblxuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICBmbihpbnAsIHNlbGVjdGlvbkFuY2hvciA9PT0gc3RhcnQgPyBlbmQgOiBzdGFydClcblxuICAgICAgaWYgKGUuc2hpZnRLZXkpIHtcbiAgICAgICAgY29uc3QgY3Vyc29yID0gaW5wLnNlbGVjdGlvblN0YXJ0XG4gICAgICAgIGlucC5zZXRTZWxlY3Rpb25SYW5nZShNYXRoLm1pbihzZWxlY3Rpb25BbmNob3IsIGN1cnNvciksIE1hdGgubWF4KHNlbGVjdGlvbkFuY2hvciwgY3Vyc29yKSwgJ2ZvcndhcmQnKVxuICAgICAgfVxuICAgIH1cbiAgICBlbHNlIGlmIChcbiAgICAgIGUua2V5Q29kZSA9PT0gOCAvLyBCYWNrc3BhY2VcbiAgICAgICYmIHByb3BzLnJldmVyc2VGaWxsTWFzayAhPT0gdHJ1ZVxuICAgICAgJiYgc3RhcnQgPT09IGVuZFxuICAgICkge1xuICAgICAgbW92ZUN1cnNvci5sZWZ0KGlucCwgc3RhcnQpXG4gICAgICBpbnAuc2V0U2VsZWN0aW9uUmFuZ2UoaW5wLnNlbGVjdGlvblN0YXJ0LCBlbmQsICdiYWNrd2FyZCcpXG4gICAgfVxuICAgIGVsc2UgaWYgKFxuICAgICAgZS5rZXlDb2RlID09PSA0NiAvLyBEZWxldGVcbiAgICAgICYmIHByb3BzLnJldmVyc2VGaWxsTWFzayA9PT0gdHJ1ZVxuICAgICAgJiYgc3RhcnQgPT09IGVuZFxuICAgICkge1xuICAgICAgbW92ZUN1cnNvci5yaWdodFJldmVyc2UoaW5wLCBlbmQpXG4gICAgICBpbnAuc2V0U2VsZWN0aW9uUmFuZ2Uoc3RhcnQsIGlucC5zZWxlY3Rpb25FbmQsICdmb3J3YXJkJylcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBtYXNrVmFsdWUgKHZhbCkge1xuICAgIGlmICh2YWwgPT09IHZvaWQgMCB8fCB2YWwgPT09IG51bGwgfHwgdmFsID09PSAnJykgeyByZXR1cm4gJycgfVxuXG4gICAgaWYgKHByb3BzLnJldmVyc2VGaWxsTWFzayA9PT0gdHJ1ZSkge1xuICAgICAgcmV0dXJuIG1hc2tWYWx1ZVJldmVyc2UodmFsKVxuICAgIH1cblxuICAgIGNvbnN0IG1hc2sgPSBjb21wdXRlZE1hc2tcblxuICAgIGxldCB2YWxJbmRleCA9IDAsIG91dHB1dCA9ICcnXG5cbiAgICBmb3IgKGxldCBtYXNrSW5kZXggPSAwOyBtYXNrSW5kZXggPCBtYXNrLmxlbmd0aDsgbWFza0luZGV4KyspIHtcbiAgICAgIGNvbnN0XG4gICAgICAgIHZhbENoYXIgPSB2YWxbIHZhbEluZGV4IF0sXG4gICAgICAgIG1hc2tEZWYgPSBtYXNrWyBtYXNrSW5kZXggXVxuXG4gICAgICBpZiAodHlwZW9mIG1hc2tEZWYgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIG91dHB1dCArPSBtYXNrRGVmXG4gICAgICAgIHZhbENoYXIgPT09IG1hc2tEZWYgJiYgdmFsSW5kZXgrK1xuICAgICAgfVxuICAgICAgZWxzZSBpZiAodmFsQ2hhciAhPT0gdm9pZCAwICYmIG1hc2tEZWYucmVnZXgudGVzdCh2YWxDaGFyKSkge1xuICAgICAgICBvdXRwdXQgKz0gbWFza0RlZi50cmFuc2Zvcm0gIT09IHZvaWQgMFxuICAgICAgICAgID8gbWFza0RlZi50cmFuc2Zvcm0odmFsQ2hhcilcbiAgICAgICAgICA6IHZhbENoYXJcbiAgICAgICAgdmFsSW5kZXgrK1xuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIHJldHVybiBvdXRwdXRcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gb3V0cHV0XG4gIH1cblxuICBmdW5jdGlvbiBtYXNrVmFsdWVSZXZlcnNlICh2YWwpIHtcbiAgICBjb25zdFxuICAgICAgbWFzayA9IGNvbXB1dGVkTWFzayxcbiAgICAgIGZpcnN0VG9rZW5JbmRleCA9IG1hc2tNYXJrZWQuaW5kZXhPZihNQVJLRVIpXG5cbiAgICBsZXQgdmFsSW5kZXggPSB2YWwubGVuZ3RoIC0gMSwgb3V0cHV0ID0gJydcblxuICAgIGZvciAobGV0IG1hc2tJbmRleCA9IG1hc2subGVuZ3RoIC0gMTsgbWFza0luZGV4ID49IDAgJiYgdmFsSW5kZXggIT09IC0xOyBtYXNrSW5kZXgtLSkge1xuICAgICAgY29uc3QgbWFza0RlZiA9IG1hc2tbIG1hc2tJbmRleCBdXG5cbiAgICAgIGxldCB2YWxDaGFyID0gdmFsWyB2YWxJbmRleCBdXG5cbiAgICAgIGlmICh0eXBlb2YgbWFza0RlZiA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgb3V0cHV0ID0gbWFza0RlZiArIG91dHB1dFxuICAgICAgICB2YWxDaGFyID09PSBtYXNrRGVmICYmIHZhbEluZGV4LS1cbiAgICAgIH1cbiAgICAgIGVsc2UgaWYgKHZhbENoYXIgIT09IHZvaWQgMCAmJiBtYXNrRGVmLnJlZ2V4LnRlc3QodmFsQ2hhcikpIHtcbiAgICAgICAgZG8ge1xuICAgICAgICAgIG91dHB1dCA9IChtYXNrRGVmLnRyYW5zZm9ybSAhPT0gdm9pZCAwID8gbWFza0RlZi50cmFuc2Zvcm0odmFsQ2hhcikgOiB2YWxDaGFyKSArIG91dHB1dFxuICAgICAgICAgIHZhbEluZGV4LS1cbiAgICAgICAgICB2YWxDaGFyID0gdmFsWyB2YWxJbmRleCBdXG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bm1vZGlmaWVkLWxvb3AtY29uZGl0aW9uXG4gICAgICAgIH0gd2hpbGUgKGZpcnN0VG9rZW5JbmRleCA9PT0gbWFza0luZGV4ICYmIHZhbENoYXIgIT09IHZvaWQgMCAmJiBtYXNrRGVmLnJlZ2V4LnRlc3QodmFsQ2hhcikpXG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgcmV0dXJuIG91dHB1dFxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBvdXRwdXRcbiAgfVxuXG4gIGZ1bmN0aW9uIHVubWFza1ZhbHVlICh2YWwpIHtcbiAgICByZXR1cm4gdHlwZW9mIHZhbCAhPT0gJ3N0cmluZycgfHwgY29tcHV0ZWRVbm1hc2sgPT09IHZvaWQgMFxuICAgICAgPyAodHlwZW9mIHZhbCA9PT0gJ251bWJlcicgPyBjb21wdXRlZFVubWFzaygnJyArIHZhbCkgOiB2YWwpXG4gICAgICA6IGNvbXB1dGVkVW5tYXNrKHZhbClcbiAgfVxuXG4gIGZ1bmN0aW9uIGZpbGxXaXRoTWFzayAodmFsKSB7XG4gICAgaWYgKG1hc2tSZXBsYWNlZC5sZW5ndGggLSB2YWwubGVuZ3RoIDw9IDApIHtcbiAgICAgIHJldHVybiB2YWxcbiAgICB9XG5cbiAgICByZXR1cm4gcHJvcHMucmV2ZXJzZUZpbGxNYXNrID09PSB0cnVlICYmIHZhbC5sZW5ndGggIT09IDBcbiAgICAgID8gbWFza1JlcGxhY2VkLnNsaWNlKDAsIC12YWwubGVuZ3RoKSArIHZhbFxuICAgICAgOiB2YWwgKyBtYXNrUmVwbGFjZWQuc2xpY2UodmFsLmxlbmd0aClcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgaW5uZXJWYWx1ZSxcbiAgICBoYXNNYXNrLFxuICAgIG1vdmVDdXJzb3JGb3JQYXN0ZSxcbiAgICB1cGRhdGVNYXNrVmFsdWUsXG4gICAgb25NYXNrZWRLZXlkb3duLFxuICAgIG9uTWFza2VkQ2xpY2tcbiAgfVxufVxuIiwiaW1wb3J0IHsgY29tcHV0ZWQgfSBmcm9tICd2dWUnXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChwcm9wcywgdHlwZUd1YXJkKSB7XG4gIGZ1bmN0aW9uIGdldEZvcm1Eb21Qcm9wcyAoKSB7XG4gICAgY29uc3QgbW9kZWwgPSBwcm9wcy5tb2RlbFZhbHVlXG5cbiAgICB0cnkge1xuICAgICAgY29uc3QgZHQgPSAnRGF0YVRyYW5zZmVyJyBpbiB3aW5kb3dcbiAgICAgICAgPyBuZXcgRGF0YVRyYW5zZmVyKClcbiAgICAgICAgOiAoJ0NsaXBib2FyZEV2ZW50JyBpbiB3aW5kb3dcbiAgICAgICAgICAgID8gbmV3IENsaXBib2FyZEV2ZW50KCcnKS5jbGlwYm9hcmREYXRhXG4gICAgICAgICAgICA6IHZvaWQgMFxuICAgICAgICAgIClcblxuICAgICAgaWYgKE9iamVjdChtb2RlbCkgPT09IG1vZGVsKSB7XG4gICAgICAgICgnbGVuZ3RoJyBpbiBtb2RlbFxuICAgICAgICAgID8gQXJyYXkuZnJvbShtb2RlbClcbiAgICAgICAgICA6IFsgbW9kZWwgXVxuICAgICAgICApLmZvckVhY2goZmlsZSA9PiB7XG4gICAgICAgICAgZHQuaXRlbXMuYWRkKGZpbGUpXG4gICAgICAgIH0pXG4gICAgICB9XG5cbiAgICAgIHJldHVybiB7XG4gICAgICAgIGZpbGVzOiBkdC5maWxlc1xuICAgICAgfVxuICAgIH1cbiAgICBjYXRjaCAoZSkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgZmlsZXM6IHZvaWQgMFxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0eXBlR3VhcmQgPT09IHRydWVcbiAgICA/IGNvbXB1dGVkKCgpID0+IHtcbiAgICAgIGlmIChwcm9wcy50eXBlICE9PSAnZmlsZScpIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIHJldHVybiBnZXRGb3JtRG9tUHJvcHMoKVxuICAgIH0pXG4gICAgOiBjb21wdXRlZChnZXRGb3JtRG9tUHJvcHMpXG59XG4iLCJpbXBvcnQgeyBoLCByZWYsIGNvbXB1dGVkLCB3YXRjaCwgb25CZWZvcmVVbm1vdW50LCBvbk1vdW50ZWQsIG5leHRUaWNrLCBnZXRDdXJyZW50SW5zdGFuY2UgfSBmcm9tICd2dWUnXG5cbmltcG9ydCB1c2VGaWVsZCwgeyB1c2VGaWVsZFN0YXRlLCB1c2VGaWVsZFByb3BzLCB1c2VGaWVsZEVtaXRzLCBmaWVsZFZhbHVlSXNGaWxsZWQgfSBmcm9tICcuLi8uLi9jb21wb3NhYmxlcy9wcml2YXRlL3VzZS1maWVsZC5qcydcbmltcG9ydCB1c2VNYXNrLCB7IHVzZU1hc2tQcm9wcyB9IGZyb20gJy4vdXNlLW1hc2suanMnXG5pbXBvcnQgeyB1c2VGb3JtUHJvcHMsIHVzZUZvcm1JbnB1dE5hbWVBdHRyIH0gZnJvbSAnLi4vLi4vY29tcG9zYWJsZXMvcHJpdmF0ZS91c2UtZm9ybS5qcydcbmltcG9ydCB1c2VGaWxlRm9ybURvbVByb3BzIGZyb20gJy4uLy4uL2NvbXBvc2FibGVzL3ByaXZhdGUvdXNlLWZpbGUtZG9tLXByb3BzLmpzJ1xuaW1wb3J0IHVzZUtleUNvbXBvc2l0aW9uIGZyb20gJy4uLy4uL2NvbXBvc2FibGVzL3ByaXZhdGUvdXNlLWtleS1jb21wb3NpdGlvbi5qcydcblxuaW1wb3J0IHsgY3JlYXRlQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vdXRpbHMvcHJpdmF0ZS9jcmVhdGUuanMnXG5pbXBvcnQgeyBzdG9wIH0gZnJvbSAnLi4vLi4vdXRpbHMvZXZlbnQuanMnXG5pbXBvcnQgeyBhZGRGb2N1c0ZuIH0gZnJvbSAnLi4vLi4vdXRpbHMvcHJpdmF0ZS9mb2N1cy1tYW5hZ2VyLmpzJ1xuaW1wb3J0IHsgaW5qZWN0UHJvcCB9IGZyb20gJy4uLy4uL3V0aWxzL3ByaXZhdGUvaW5qZWN0LW9iai1wcm9wLmpzJ1xuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVDb21wb25lbnQoe1xuICBuYW1lOiAnUUlucHV0JyxcblxuICBpbmhlcml0QXR0cnM6IGZhbHNlLFxuXG4gIHByb3BzOiB7XG4gICAgLi4udXNlRmllbGRQcm9wcyxcbiAgICAuLi51c2VNYXNrUHJvcHMsXG4gICAgLi4udXNlRm9ybVByb3BzLFxuXG4gICAgbW9kZWxWYWx1ZTogeyByZXF1aXJlZDogZmFsc2UgfSxcblxuICAgIHNoYWRvd1RleHQ6IFN0cmluZyxcblxuICAgIHR5cGU6IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIGRlZmF1bHQ6ICd0ZXh0J1xuICAgIH0sXG5cbiAgICBkZWJvdW5jZTogWyBTdHJpbmcsIE51bWJlciBdLFxuXG4gICAgYXV0b2dyb3c6IEJvb2xlYW4sIC8vIG1ha2VzIGEgdGV4dGFyZWFcblxuICAgIGlucHV0Q2xhc3M6IFsgQXJyYXksIFN0cmluZywgT2JqZWN0IF0sXG4gICAgaW5wdXRTdHlsZTogWyBBcnJheSwgU3RyaW5nLCBPYmplY3QgXVxuICB9LFxuXG4gIGVtaXRzOiBbXG4gICAgLi4udXNlRmllbGRFbWl0cyxcbiAgICAncGFzdGUnLCAnY2hhbmdlJyxcbiAgICAna2V5ZG93bicsICdjbGljaycsICdhbmltYXRpb25lbmQnXG4gIF0sXG5cbiAgc2V0dXAgKHByb3BzLCB7IGVtaXQsIGF0dHJzIH0pIHtcbiAgICBjb25zdCB7IHByb3h5IH0gPSBnZXRDdXJyZW50SW5zdGFuY2UoKVxuICAgIGNvbnN0IHsgJHEgfSA9IHByb3h5XG5cbiAgICBjb25zdCB0ZW1wID0ge31cbiAgICBsZXQgZW1pdENhY2hlZFZhbHVlID0gTmFOLCB0eXBlZE51bWJlciwgc3RvcFZhbHVlV2F0Y2hlciwgZW1pdFRpbWVyID0gbnVsbCwgZW1pdFZhbHVlRm5cblxuICAgIGNvbnN0IGlucHV0UmVmID0gcmVmKG51bGwpXG4gICAgY29uc3QgbmFtZVByb3AgPSB1c2VGb3JtSW5wdXROYW1lQXR0cihwcm9wcylcblxuICAgIGNvbnN0IHtcbiAgICAgIGlubmVyVmFsdWUsXG4gICAgICBoYXNNYXNrLFxuICAgICAgbW92ZUN1cnNvckZvclBhc3RlLFxuICAgICAgdXBkYXRlTWFza1ZhbHVlLFxuICAgICAgb25NYXNrZWRLZXlkb3duLFxuICAgICAgb25NYXNrZWRDbGlja1xuICAgIH0gPSB1c2VNYXNrKHByb3BzLCBlbWl0LCBlbWl0VmFsdWUsIGlucHV0UmVmKVxuXG4gICAgY29uc3QgZm9ybURvbVByb3BzID0gdXNlRmlsZUZvcm1Eb21Qcm9wcyhwcm9wcywgLyogdHlwZSBndWFyZCAqLyB0cnVlKVxuICAgIGNvbnN0IGhhc1ZhbHVlID0gY29tcHV0ZWQoKCkgPT4gZmllbGRWYWx1ZUlzRmlsbGVkKGlubmVyVmFsdWUudmFsdWUpKVxuXG4gICAgY29uc3Qgb25Db21wb3NpdGlvbiA9IHVzZUtleUNvbXBvc2l0aW9uKG9uSW5wdXQpXG5cbiAgICBjb25zdCBzdGF0ZSA9IHVzZUZpZWxkU3RhdGUoKVxuXG4gICAgY29uc3QgaXNUZXh0YXJlYSA9IGNvbXB1dGVkKCgpID0+XG4gICAgICBwcm9wcy50eXBlID09PSAndGV4dGFyZWEnIHx8IHByb3BzLmF1dG9ncm93ID09PSB0cnVlXG4gICAgKVxuXG4gICAgY29uc3QgaXNUeXBlVGV4dCA9IGNvbXB1dGVkKCgpID0+XG4gICAgICBpc1RleHRhcmVhLnZhbHVlID09PSB0cnVlXG4gICAgICB8fCBbICd0ZXh0JywgJ3NlYXJjaCcsICd1cmwnLCAndGVsJywgJ3Bhc3N3b3JkJyBdLmluY2x1ZGVzKHByb3BzLnR5cGUpXG4gICAgKVxuXG4gICAgY29uc3Qgb25FdmVudHMgPSBjb21wdXRlZCgoKSA9PiB7XG4gICAgICBjb25zdCBldnQgPSB7XG4gICAgICAgIC4uLnN0YXRlLnNwbGl0QXR0cnMubGlzdGVuZXJzLnZhbHVlLFxuICAgICAgICBvbklucHV0LFxuICAgICAgICBvblBhc3RlLFxuICAgICAgICAvLyBTYWZhcmkgPCAxMC4yICYgVUlXZWJWaWV3IGRvZXNuJ3QgZmlyZSBjb21wb3NpdGlvbmVuZCB3aGVuXG4gICAgICAgIC8vIHN3aXRjaGluZyBmb2N1cyBiZWZvcmUgY29uZmlybWluZyBjb21wb3NpdGlvbiBjaG9pY2VcbiAgICAgICAgLy8gdGhpcyBhbHNvIGZpeGVzIHRoZSBpc3N1ZSB3aGVyZSBzb21lIGJyb3dzZXJzIGUuZy4gaU9TIENocm9tZVxuICAgICAgICAvLyBmaXJlcyBcImNoYW5nZVwiIGluc3RlYWQgb2YgXCJpbnB1dFwiIG9uIGF1dG9jb21wbGV0ZS5cbiAgICAgICAgb25DaGFuZ2UsXG4gICAgICAgIG9uQmx1cjogb25GaW5pc2hFZGl0aW5nLFxuICAgICAgICBvbkZvY3VzOiBzdG9wXG4gICAgICB9XG5cbiAgICAgIGV2dC5vbkNvbXBvc2l0aW9uc3RhcnQgPSBldnQub25Db21wb3NpdGlvbnVwZGF0ZSA9IGV2dC5vbkNvbXBvc2l0aW9uZW5kID0gb25Db21wb3NpdGlvblxuXG4gICAgICBpZiAoaGFzTWFzay52YWx1ZSA9PT0gdHJ1ZSkge1xuICAgICAgICBldnQub25LZXlkb3duID0gb25NYXNrZWRLZXlkb3duXG4gICAgICAgIC8vIHJlc2V0IHNlbGVjdGlvbiBhbmNob3Igb24gcG9pbnRlciBzZWxlY3Rpb25cbiAgICAgICAgZXZ0Lm9uQ2xpY2sgPSBvbk1hc2tlZENsaWNrXG4gICAgICB9XG5cbiAgICAgIGlmIChwcm9wcy5hdXRvZ3JvdyA9PT0gdHJ1ZSkge1xuICAgICAgICBldnQub25BbmltYXRpb25lbmQgPSBvbkFuaW1hdGlvbmVuZFxuICAgICAgfVxuXG4gICAgICByZXR1cm4gZXZ0XG4gICAgfSlcblxuICAgIGNvbnN0IGlucHV0QXR0cnMgPSBjb21wdXRlZCgoKSA9PiB7XG4gICAgICBjb25zdCBhdHRycyA9IHtcbiAgICAgICAgdGFiaW5kZXg6IDAsXG4gICAgICAgICdkYXRhLWF1dG9mb2N1cyc6IHByb3BzLmF1dG9mb2N1cyA9PT0gdHJ1ZSB8fCB2b2lkIDAsXG4gICAgICAgIHJvd3M6IHByb3BzLnR5cGUgPT09ICd0ZXh0YXJlYScgPyA2IDogdm9pZCAwLFxuICAgICAgICAnYXJpYS1sYWJlbCc6IHByb3BzLmxhYmVsLFxuICAgICAgICBuYW1lOiBuYW1lUHJvcC52YWx1ZSxcbiAgICAgICAgLi4uc3RhdGUuc3BsaXRBdHRycy5hdHRyaWJ1dGVzLnZhbHVlLFxuICAgICAgICBpZDogc3RhdGUudGFyZ2V0VWlkLnZhbHVlLFxuICAgICAgICBtYXhsZW5ndGg6IHByb3BzLm1heGxlbmd0aCxcbiAgICAgICAgZGlzYWJsZWQ6IHByb3BzLmRpc2FibGUgPT09IHRydWUsXG4gICAgICAgIHJlYWRvbmx5OiBwcm9wcy5yZWFkb25seSA9PT0gdHJ1ZVxuICAgICAgfVxuXG4gICAgICBpZiAoaXNUZXh0YXJlYS52YWx1ZSA9PT0gZmFsc2UpIHtcbiAgICAgICAgYXR0cnMudHlwZSA9IHByb3BzLnR5cGVcbiAgICAgIH1cblxuICAgICAgaWYgKHByb3BzLmF1dG9ncm93ID09PSB0cnVlKSB7XG4gICAgICAgIGF0dHJzLnJvd3MgPSAxXG4gICAgICB9XG5cbiAgICAgIHJldHVybiBhdHRyc1xuICAgIH0pXG5cbiAgICAvLyBzb21lIGJyb3dzZXJzIGxvc2UgdGhlIG5hdGl2ZSBpbnB1dCB2YWx1ZVxuICAgIC8vIHNvIHdlIG5lZWQgdG8gcmVhdHRhY2ggaXQgZHluYW1pY2FsbHlcbiAgICAvLyAobGlrZSB0eXBlPVwicGFzc3dvcmRcIiA8LT4gdHlwZT1cInRleHRcIjsgc2VlICMxMjA3OClcbiAgICB3YXRjaCgoKSA9PiBwcm9wcy50eXBlLCAoKSA9PiB7XG4gICAgICBpZiAoaW5wdXRSZWYudmFsdWUpIHtcbiAgICAgICAgaW5wdXRSZWYudmFsdWUudmFsdWUgPSBwcm9wcy5tb2RlbFZhbHVlXG4gICAgICB9XG4gICAgfSlcblxuICAgIHdhdGNoKCgpID0+IHByb3BzLm1vZGVsVmFsdWUsIHYgPT4ge1xuICAgICAgaWYgKGhhc01hc2sudmFsdWUgPT09IHRydWUpIHtcbiAgICAgICAgaWYgKHN0b3BWYWx1ZVdhdGNoZXIgPT09IHRydWUpIHtcbiAgICAgICAgICBzdG9wVmFsdWVXYXRjaGVyID0gZmFsc2VcblxuICAgICAgICAgIGlmIChTdHJpbmcodikgPT09IGVtaXRDYWNoZWRWYWx1ZSkge1xuICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgdXBkYXRlTWFza1ZhbHVlKHYpXG4gICAgICB9XG4gICAgICBlbHNlIGlmIChpbm5lclZhbHVlLnZhbHVlICE9PSB2KSB7XG4gICAgICAgIGlubmVyVmFsdWUudmFsdWUgPSB2XG5cbiAgICAgICAgaWYgKFxuICAgICAgICAgIHByb3BzLnR5cGUgPT09ICdudW1iZXInXG4gICAgICAgICAgJiYgdGVtcC5oYXNPd25Qcm9wZXJ0eSgndmFsdWUnKSA9PT0gdHJ1ZVxuICAgICAgICApIHtcbiAgICAgICAgICBpZiAodHlwZWROdW1iZXIgPT09IHRydWUpIHtcbiAgICAgICAgICAgIHR5cGVkTnVtYmVyID0gZmFsc2VcbiAgICAgICAgICB9XG4gICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBkZWxldGUgdGVtcC52YWx1ZVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyB0ZXh0YXJlYSBvbmx5XG4gICAgICBwcm9wcy5hdXRvZ3JvdyA9PT0gdHJ1ZSAmJiBuZXh0VGljayhhZGp1c3RIZWlnaHQpXG4gICAgfSlcblxuICAgIHdhdGNoKCgpID0+IHByb3BzLmF1dG9ncm93LCB2YWwgPT4ge1xuICAgICAgLy8gdGV4dGFyZWEgb25seVxuICAgICAgaWYgKHZhbCA9PT0gdHJ1ZSkge1xuICAgICAgICBuZXh0VGljayhhZGp1c3RIZWlnaHQpXG4gICAgICB9XG4gICAgICAvLyBpZiBpdCBoYXMgYSBudW1iZXIgb2Ygcm93cyBzZXQgcmVzcGVjdCBpdFxuICAgICAgZWxzZSBpZiAoaW5wdXRSZWYudmFsdWUgIT09IG51bGwgJiYgYXR0cnMucm93cyA+IDApIHtcbiAgICAgICAgaW5wdXRSZWYudmFsdWUuc3R5bGUuaGVpZ2h0ID0gJ2F1dG8nXG4gICAgICB9XG4gICAgfSlcblxuICAgIHdhdGNoKCgpID0+IHByb3BzLmRlbnNlLCAoKSA9PiB7XG4gICAgICBwcm9wcy5hdXRvZ3JvdyA9PT0gdHJ1ZSAmJiBuZXh0VGljayhhZGp1c3RIZWlnaHQpXG4gICAgfSlcblxuICAgIGZ1bmN0aW9uIGZvY3VzICgpIHtcbiAgICAgIGFkZEZvY3VzRm4oKCkgPT4ge1xuICAgICAgICBjb25zdCBlbCA9IGRvY3VtZW50LmFjdGl2ZUVsZW1lbnRcbiAgICAgICAgaWYgKFxuICAgICAgICAgIGlucHV0UmVmLnZhbHVlICE9PSBudWxsXG4gICAgICAgICAgJiYgaW5wdXRSZWYudmFsdWUgIT09IGVsXG4gICAgICAgICAgJiYgKGVsID09PSBudWxsIHx8IGVsLmlkICE9PSBzdGF0ZS50YXJnZXRVaWQudmFsdWUpXG4gICAgICAgICkge1xuICAgICAgICAgIGlucHV0UmVmLnZhbHVlLmZvY3VzKHsgcHJldmVudFNjcm9sbDogdHJ1ZSB9KVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHNlbGVjdCAoKSB7XG4gICAgICBpbnB1dFJlZi52YWx1ZSAhPT0gbnVsbCAmJiBpbnB1dFJlZi52YWx1ZS5zZWxlY3QoKVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIG9uUGFzdGUgKGUpIHtcbiAgICAgIGlmIChoYXNNYXNrLnZhbHVlID09PSB0cnVlICYmIHByb3BzLnJldmVyc2VGaWxsTWFzayAhPT0gdHJ1ZSkge1xuICAgICAgICBjb25zdCBpbnAgPSBlLnRhcmdldFxuICAgICAgICBtb3ZlQ3Vyc29yRm9yUGFzdGUoaW5wLCBpbnAuc2VsZWN0aW9uU3RhcnQsIGlucC5zZWxlY3Rpb25FbmQpXG4gICAgICB9XG5cbiAgICAgIGVtaXQoJ3Bhc3RlJywgZSlcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBvbklucHV0IChlKSB7XG4gICAgICBpZiAoIWUgfHwgIWUudGFyZ2V0KSB7XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICBpZiAocHJvcHMudHlwZSA9PT0gJ2ZpbGUnKSB7XG4gICAgICAgIGVtaXQoJ3VwZGF0ZTptb2RlbFZhbHVlJywgZS50YXJnZXQuZmlsZXMpXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICBjb25zdCB2YWwgPSBlLnRhcmdldC52YWx1ZVxuXG4gICAgICBpZiAoZS50YXJnZXQucUNvbXBvc2luZyA9PT0gdHJ1ZSkge1xuICAgICAgICB0ZW1wLnZhbHVlID0gdmFsXG5cbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIGlmIChoYXNNYXNrLnZhbHVlID09PSB0cnVlKSB7XG4gICAgICAgIHVwZGF0ZU1hc2tWYWx1ZSh2YWwsIGZhbHNlLCBlLmlucHV0VHlwZSlcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICBlbWl0VmFsdWUodmFsKVxuXG4gICAgICAgIGlmIChpc1R5cGVUZXh0LnZhbHVlID09PSB0cnVlICYmIGUudGFyZ2V0ID09PSBkb2N1bWVudC5hY3RpdmVFbGVtZW50KSB7XG4gICAgICAgICAgY29uc3QgeyBzZWxlY3Rpb25TdGFydCwgc2VsZWN0aW9uRW5kIH0gPSBlLnRhcmdldFxuXG4gICAgICAgICAgaWYgKHNlbGVjdGlvblN0YXJ0ICE9PSB2b2lkIDAgJiYgc2VsZWN0aW9uRW5kICE9PSB2b2lkIDApIHtcbiAgICAgICAgICAgIG5leHRUaWNrKCgpID0+IHtcbiAgICAgICAgICAgICAgaWYgKGUudGFyZ2V0ID09PSBkb2N1bWVudC5hY3RpdmVFbGVtZW50ICYmIHZhbC5pbmRleE9mKGUudGFyZ2V0LnZhbHVlKSA9PT0gMCkge1xuICAgICAgICAgICAgICAgIGUudGFyZ2V0LnNldFNlbGVjdGlvblJhbmdlKHNlbGVjdGlvblN0YXJ0LCBzZWxlY3Rpb25FbmQpXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIHdlIG5lZWQgdG8gdHJpZ2dlciBpdCBpbW1lZGlhdGVseSB0b28sXG4gICAgICAvLyB0byBhdm9pZCBcImZsaWNrZXJpbmdcIlxuICAgICAgcHJvcHMuYXV0b2dyb3cgPT09IHRydWUgJiYgYWRqdXN0SGVpZ2h0KClcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBvbkFuaW1hdGlvbmVuZCAoZSkge1xuICAgICAgZW1pdCgnYW5pbWF0aW9uZW5kJywgZSlcbiAgICAgIGFkanVzdEhlaWdodCgpXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZW1pdFZhbHVlICh2YWwsIHN0b3BXYXRjaGVyKSB7XG4gICAgICBlbWl0VmFsdWVGbiA9ICgpID0+IHtcbiAgICAgICAgZW1pdFRpbWVyID0gbnVsbFxuXG4gICAgICAgIGlmIChcbiAgICAgICAgICBwcm9wcy50eXBlICE9PSAnbnVtYmVyJ1xuICAgICAgICAgICYmIHRlbXAuaGFzT3duUHJvcGVydHkoJ3ZhbHVlJykgPT09IHRydWVcbiAgICAgICAgKSB7XG4gICAgICAgICAgZGVsZXRlIHRlbXAudmFsdWVcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChwcm9wcy5tb2RlbFZhbHVlICE9PSB2YWwgJiYgZW1pdENhY2hlZFZhbHVlICE9PSB2YWwpIHtcbiAgICAgICAgICBlbWl0Q2FjaGVkVmFsdWUgPSB2YWxcblxuICAgICAgICAgIHN0b3BXYXRjaGVyID09PSB0cnVlICYmIChzdG9wVmFsdWVXYXRjaGVyID0gdHJ1ZSlcbiAgICAgICAgICBlbWl0KCd1cGRhdGU6bW9kZWxWYWx1ZScsIHZhbClcblxuICAgICAgICAgIG5leHRUaWNrKCgpID0+IHtcbiAgICAgICAgICAgIGVtaXRDYWNoZWRWYWx1ZSA9PT0gdmFsICYmIChlbWl0Q2FjaGVkVmFsdWUgPSBOYU4pXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuXG4gICAgICAgIGVtaXRWYWx1ZUZuID0gdm9pZCAwXG4gICAgICB9XG5cbiAgICAgIGlmIChwcm9wcy50eXBlID09PSAnbnVtYmVyJykge1xuICAgICAgICB0eXBlZE51bWJlciA9IHRydWVcbiAgICAgICAgdGVtcC52YWx1ZSA9IHZhbFxuICAgICAgfVxuXG4gICAgICBpZiAocHJvcHMuZGVib3VuY2UgIT09IHZvaWQgMCkge1xuICAgICAgICBlbWl0VGltZXIgIT09IG51bGwgJiYgY2xlYXJUaW1lb3V0KGVtaXRUaW1lcilcbiAgICAgICAgdGVtcC52YWx1ZSA9IHZhbFxuICAgICAgICBlbWl0VGltZXIgPSBzZXRUaW1lb3V0KGVtaXRWYWx1ZUZuLCBwcm9wcy5kZWJvdW5jZSlcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICBlbWl0VmFsdWVGbigpXG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gdGV4dGFyZWEgb25seVxuICAgIGZ1bmN0aW9uIGFkanVzdEhlaWdodCAoKSB7XG4gICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xuICAgICAgICBjb25zdCBpbnAgPSBpbnB1dFJlZi52YWx1ZVxuICAgICAgICBpZiAoaW5wICE9PSBudWxsKSB7XG4gICAgICAgICAgY29uc3QgcGFyZW50U3R5bGUgPSBpbnAucGFyZW50Tm9kZS5zdHlsZVxuICAgICAgICAgIC8vIGNocm9tZSBkb2VzIG5vdCBrZWVwIHNjcm9sbCAjMTU0OThcbiAgICAgICAgICBjb25zdCB7IHNjcm9sbFRvcCB9ID0gaW5wXG4gICAgICAgICAgLy8gY2hyb21lIGNhbGN1bGF0ZXMgYSBzbWFsbGVyIHNjcm9sbEhlaWdodCB3aGVuIGluIGEgLmNvbHVtbiBjb250YWluZXJcbiAgICAgICAgICBjb25zdCB7IG92ZXJmbG93WSwgbWF4SGVpZ2h0IH0gPSAkcS5wbGF0Zm9ybS5pcy5maXJlZm94ID09PSB0cnVlXG4gICAgICAgICAgICA/IHt9XG4gICAgICAgICAgICA6IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGlucClcbiAgICAgICAgICAvLyBvbiBmaXJlZm94IG9yIGlmIG92ZXJmbG93WSBpcyBzcGVjaWZpZWQgYXMgc2Nyb2xsICMxNDI2MywgIzE0MzQ0XG4gICAgICAgICAgLy8gd2UgZG9uJ3QgdG91Y2ggb3ZlcmZsb3dcbiAgICAgICAgICAvLyBmaXJlZm94IGlzIG5vdCBzbyBiYWQgaW4gdGhlIGVuZFxuICAgICAgICAgIGNvbnN0IGNoYW5nZU92ZXJmbG93ID0gb3ZlcmZsb3dZICE9PSB2b2lkIDAgJiYgb3ZlcmZsb3dZICE9PSAnc2Nyb2xsJ1xuXG4gICAgICAgICAgLy8gcmVzZXQgaGVpZ2h0IG9mIHRleHRhcmVhIHRvIGEgc21hbGwgc2l6ZSB0byBkZXRlY3QgdGhlIHJlYWwgaGVpZ2h0XG4gICAgICAgICAgLy8gYnV0IGtlZXAgdGhlIHRvdGFsIGNvbnRyb2wgc2l6ZSB0aGUgc2FtZVxuICAgICAgICAgIGNoYW5nZU92ZXJmbG93ID09PSB0cnVlICYmIChpbnAuc3R5bGUub3ZlcmZsb3dZID0gJ2hpZGRlbicpXG4gICAgICAgICAgcGFyZW50U3R5bGUubWFyZ2luQm90dG9tID0gKGlucC5zY3JvbGxIZWlnaHQgLSAxKSArICdweCdcbiAgICAgICAgICBpbnAuc3R5bGUuaGVpZ2h0ID0gJzFweCdcblxuICAgICAgICAgIGlucC5zdHlsZS5oZWlnaHQgPSBpbnAuc2Nyb2xsSGVpZ2h0ICsgJ3B4J1xuICAgICAgICAgIC8vIHdlIHNob3VsZCBhbGxvdyBzY3JvbGxiYXJzIG9ubHlcbiAgICAgICAgICAvLyBpZiB0aGVyZSBpcyBtYXhIZWlnaHQgYW5kIGNvbnRlbnQgaXMgdGFsbGVyIHRoYW4gbWF4SGVpZ2h0XG4gICAgICAgICAgY2hhbmdlT3ZlcmZsb3cgPT09IHRydWUgJiYgKGlucC5zdHlsZS5vdmVyZmxvd1kgPSBwYXJzZUludChtYXhIZWlnaHQsIDEwKSA8IGlucC5zY3JvbGxIZWlnaHQgPyAnYXV0bycgOiAnaGlkZGVuJylcbiAgICAgICAgICBwYXJlbnRTdHlsZS5tYXJnaW5Cb3R0b20gPSAnJ1xuICAgICAgICAgIGlucC5zY3JvbGxUb3AgPSBzY3JvbGxUb3BcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBvbkNoYW5nZSAoZSkge1xuICAgICAgb25Db21wb3NpdGlvbihlKVxuXG4gICAgICBpZiAoZW1pdFRpbWVyICE9PSBudWxsKSB7XG4gICAgICAgIGNsZWFyVGltZW91dChlbWl0VGltZXIpXG4gICAgICAgIGVtaXRUaW1lciA9IG51bGxcbiAgICAgIH1cblxuICAgICAgZW1pdFZhbHVlRm4gIT09IHZvaWQgMCAmJiBlbWl0VmFsdWVGbigpXG5cbiAgICAgIGVtaXQoJ2NoYW5nZScsIGUudGFyZ2V0LnZhbHVlKVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIG9uRmluaXNoRWRpdGluZyAoZSkge1xuICAgICAgZSAhPT0gdm9pZCAwICYmIHN0b3AoZSlcblxuICAgICAgaWYgKGVtaXRUaW1lciAhPT0gbnVsbCkge1xuICAgICAgICBjbGVhclRpbWVvdXQoZW1pdFRpbWVyKVxuICAgICAgICBlbWl0VGltZXIgPSBudWxsXG4gICAgICB9XG5cbiAgICAgIGVtaXRWYWx1ZUZuICE9PSB2b2lkIDAgJiYgZW1pdFZhbHVlRm4oKVxuXG4gICAgICB0eXBlZE51bWJlciA9IGZhbHNlXG4gICAgICBzdG9wVmFsdWVXYXRjaGVyID0gZmFsc2VcbiAgICAgIGRlbGV0ZSB0ZW1wLnZhbHVlXG5cbiAgICAgIC8vIHdlIG5lZWQgdG8gdXNlIHNldFRpbWVvdXQgaW5zdGVhZCBvZiB0aGlzLiRuZXh0VGlja1xuICAgICAgLy8gdG8gYXZvaWQgYSBidWcgd2hlcmUgZm9jdXNvdXQgaXMgbm90IGVtaXR0ZWQgZm9yIHR5cGUgZGF0ZS90aW1lL3dlZWsvLi4uXG4gICAgICBwcm9wcy50eXBlICE9PSAnZmlsZScgJiYgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIGlmIChpbnB1dFJlZi52YWx1ZSAhPT0gbnVsbCkge1xuICAgICAgICAgIGlucHV0UmVmLnZhbHVlLnZhbHVlID0gaW5uZXJWYWx1ZS52YWx1ZSAhPT0gdm9pZCAwID8gaW5uZXJWYWx1ZS52YWx1ZSA6ICcnXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0Q3VyVmFsdWUgKCkge1xuICAgICAgcmV0dXJuIHRlbXAuaGFzT3duUHJvcGVydHkoJ3ZhbHVlJykgPT09IHRydWVcbiAgICAgICAgPyB0ZW1wLnZhbHVlXG4gICAgICAgIDogKGlubmVyVmFsdWUudmFsdWUgIT09IHZvaWQgMCA/IGlubmVyVmFsdWUudmFsdWUgOiAnJylcbiAgICB9XG5cbiAgICBvbkJlZm9yZVVubW91bnQoKCkgPT4ge1xuICAgICAgb25GaW5pc2hFZGl0aW5nKClcbiAgICB9KVxuXG4gICAgb25Nb3VudGVkKCgpID0+IHtcbiAgICAgIC8vIHRleHRhcmVhIG9ubHlcbiAgICAgIHByb3BzLmF1dG9ncm93ID09PSB0cnVlICYmIGFkanVzdEhlaWdodCgpXG4gICAgfSlcblxuICAgIE9iamVjdC5hc3NpZ24oc3RhdGUsIHtcbiAgICAgIGlubmVyVmFsdWUsXG5cbiAgICAgIGZpZWxkQ2xhc3M6IGNvbXB1dGVkKCgpID0+XG4gICAgICAgIGBxLSR7IGlzVGV4dGFyZWEudmFsdWUgPT09IHRydWUgPyAndGV4dGFyZWEnIDogJ2lucHV0JyB9YFxuICAgICAgICArIChwcm9wcy5hdXRvZ3JvdyA9PT0gdHJ1ZSA/ICcgcS10ZXh0YXJlYS0tYXV0b2dyb3cnIDogJycpXG4gICAgICApLFxuXG4gICAgICBoYXNTaGFkb3c6IGNvbXB1dGVkKCgpID0+XG4gICAgICAgIHByb3BzLnR5cGUgIT09ICdmaWxlJ1xuICAgICAgICAmJiB0eXBlb2YgcHJvcHMuc2hhZG93VGV4dCA9PT0gJ3N0cmluZydcbiAgICAgICAgJiYgcHJvcHMuc2hhZG93VGV4dC5sZW5ndGggIT09IDBcbiAgICAgICksXG5cbiAgICAgIGlucHV0UmVmLFxuXG4gICAgICBlbWl0VmFsdWUsXG5cbiAgICAgIGhhc1ZhbHVlLFxuXG4gICAgICBmbG9hdGluZ0xhYmVsOiBjb21wdXRlZCgoKSA9PlxuICAgICAgICAoXG4gICAgICAgICAgaGFzVmFsdWUudmFsdWUgPT09IHRydWVcbiAgICAgICAgICAmJiAocHJvcHMudHlwZSAhPT0gJ251bWJlcicgfHwgaXNOYU4oaW5uZXJWYWx1ZS52YWx1ZSkgPT09IGZhbHNlKVxuICAgICAgICApXG4gICAgICAgIHx8IGZpZWxkVmFsdWVJc0ZpbGxlZChwcm9wcy5kaXNwbGF5VmFsdWUpXG4gICAgICApLFxuXG4gICAgICBnZXRDb250cm9sOiAoKSA9PiB7XG4gICAgICAgIHJldHVybiBoKGlzVGV4dGFyZWEudmFsdWUgPT09IHRydWUgPyAndGV4dGFyZWEnIDogJ2lucHV0Jywge1xuICAgICAgICAgIHJlZjogaW5wdXRSZWYsXG4gICAgICAgICAgY2xhc3M6IFtcbiAgICAgICAgICAgICdxLWZpZWxkX19uYXRpdmUgcS1wbGFjZWhvbGRlcicsXG4gICAgICAgICAgICBwcm9wcy5pbnB1dENsYXNzXG4gICAgICAgICAgXSxcbiAgICAgICAgICBzdHlsZTogcHJvcHMuaW5wdXRTdHlsZSxcbiAgICAgICAgICAuLi5pbnB1dEF0dHJzLnZhbHVlLFxuICAgICAgICAgIC4uLm9uRXZlbnRzLnZhbHVlLFxuICAgICAgICAgIC4uLihcbiAgICAgICAgICAgIHByb3BzLnR5cGUgIT09ICdmaWxlJ1xuICAgICAgICAgICAgICA/IHsgdmFsdWU6IGdldEN1clZhbHVlKCkgfVxuICAgICAgICAgICAgICA6IGZvcm1Eb21Qcm9wcy52YWx1ZVxuICAgICAgICAgIClcbiAgICAgICAgfSlcbiAgICAgIH0sXG5cbiAgICAgIGdldFNoYWRvd0NvbnRyb2w6ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIGgoJ2RpdicsIHtcbiAgICAgICAgICBjbGFzczogJ3EtZmllbGRfX25hdGl2ZSBxLWZpZWxkX19zaGFkb3cgYWJzb2x1dGUtYm90dG9tIG5vLXBvaW50ZXItZXZlbnRzJ1xuICAgICAgICAgICAgKyAoaXNUZXh0YXJlYS52YWx1ZSA9PT0gdHJ1ZSA/ICcnIDogJyB0ZXh0LW5vLXdyYXAnKVxuICAgICAgICB9LCBbXG4gICAgICAgICAgaCgnc3BhbicsIHsgY2xhc3M6ICdpbnZpc2libGUnIH0sIGdldEN1clZhbHVlKCkpLFxuICAgICAgICAgIGgoJ3NwYW4nLCBwcm9wcy5zaGFkb3dUZXh0KVxuICAgICAgICBdKVxuICAgICAgfVxuICAgIH0pXG5cbiAgICBjb25zdCByZW5kZXJGbiA9IHVzZUZpZWxkKHN0YXRlKVxuXG4gICAgLy8gZXhwb3NlIHB1YmxpYyBtZXRob2RzXG4gICAgT2JqZWN0LmFzc2lnbihwcm94eSwge1xuICAgICAgZm9jdXMsXG4gICAgICBzZWxlY3QsXG4gICAgICBnZXROYXRpdmVFbGVtZW50OiAoKSA9PiBpbnB1dFJlZi52YWx1ZSAvLyBkZXByZWNhdGVkXG4gICAgfSlcblxuICAgIGluamVjdFByb3AocHJveHksICduYXRpdmVFbCcsICgpID0+IGlucHV0UmVmLnZhbHVlKVxuXG4gICAgcmV0dXJuIHJlbmRlckZuXG4gIH1cbn0pXG4iXSwibmFtZXMiOlsiYXR0cnMiXSwibWFwcGluZ3MiOiI7OztBQUtBLE1BQU0sY0FBYztBQUFBLEVBQ2xCLE1BQU07QUFBQSxFQUNOLFVBQVU7QUFBQSxFQUNWLE1BQU07QUFBQSxFQUNOLFVBQVU7QUFBQSxFQUNWLE9BQU87QUFBQSxFQUNQLE1BQU07QUFDUjtBQUVBLE1BQU0sU0FBUztBQUFBLEVBQ2IsS0FBSyxFQUFFLFNBQVMsU0FBUyxRQUFRLFNBQVU7QUFBQSxFQUUzQyxHQUFHLEVBQUUsU0FBUyxZQUFZLFFBQVEsWUFBYTtBQUFBLEVBQy9DLEdBQUcsRUFBRSxTQUFTLGVBQWUsUUFBUSxlQUFnQjtBQUFBLEVBRXJELEdBQUcsRUFBRSxTQUFTLFlBQVksUUFBUSxhQUFhLFdBQVcsT0FBSyxFQUFFLG9CQUFxQjtBQUFBLEVBQ3RGLEdBQUcsRUFBRSxTQUFTLFlBQVksUUFBUSxhQUFhLFdBQVcsT0FBSyxFQUFFLG9CQUFxQjtBQUFBLEVBRXRGLEdBQUcsRUFBRSxTQUFTLGVBQWUsUUFBUSxnQkFBZ0IsV0FBVyxPQUFLLEVBQUUsb0JBQXFCO0FBQUEsRUFDNUYsR0FBRyxFQUFFLFNBQVMsZUFBZSxRQUFRLGdCQUFnQixXQUFXLE9BQUssRUFBRSxvQkFBcUI7QUFDOUY7QUFFQSxNQUFNLE9BQU8sT0FBTyxLQUFLLE1BQU07QUFDL0IsS0FBSyxRQUFRLFNBQU87QUFDbEIsU0FBUSxHQUFLLEVBQUMsUUFBUSxJQUFJLE9BQU8sT0FBUSxHQUFLLEVBQUMsT0FBTztBQUN4RCxDQUFDO0FBRUQsTUFDRSxpQkFBaUIsSUFBSSxPQUFPLHFEQUFxRCxLQUFLLEtBQUssRUFBRSxJQUFJLFVBQVUsR0FBRyxHQUM5RyxXQUFXO0FBRWIsTUFBTSxTQUFTLE9BQU8sYUFBYSxDQUFDO0FBRTdCLE1BQU0sZUFBZTtBQUFBLEVBQzFCLE1BQU07QUFBQSxFQUNOLGlCQUFpQjtBQUFBLEVBQ2pCLFVBQVUsQ0FBRSxTQUFTLE1BQVE7QUFBQSxFQUM3QixlQUFlO0FBQ2pCO0FBRWUsU0FBUSxRQUFFLE9BQU8sTUFBTSxXQUFXLFVBQVU7QUFDekQsTUFBSSxZQUFZLGNBQWMsY0FBYyxnQkFBZ0IsaUJBQWlCO0FBRTdFLFFBQU0sVUFBVSxJQUFJLElBQUk7QUFDeEIsUUFBTSxhQUFhLElBQUksdUJBQXVCO0FBRTlDLFdBQVMsZ0JBQWlCO0FBQ3hCLFdBQU8sTUFBTSxhQUFhLFFBQ3JCLENBQUUsWUFBWSxRQUFRLFVBQVUsT0FBTyxPQUFPLFlBQWEsU0FBUyxNQUFNLElBQUk7QUFBQSxFQUNwRjtBQUVELFFBQU0sTUFBTSxNQUFNLE9BQU8sTUFBTSxVQUFVLG1CQUFtQjtBQUU1RCxRQUFNLE1BQU0sTUFBTSxNQUFNLE9BQUs7QUFDM0IsUUFBSSxNQUFNLFFBQVE7QUFDaEIsc0JBQWdCLFdBQVcsT0FBTyxJQUFJO0FBQUEsSUFDdkMsT0FDSTtBQUNILFlBQU0sTUFBTSxZQUFZLFdBQVcsS0FBSztBQUN4QywwQkFBcUI7QUFDckIsWUFBTSxlQUFlLE9BQU8sS0FBSyxxQkFBcUIsR0FBRztBQUFBLElBQzFEO0FBQUEsRUFDTCxDQUFHO0FBRUQsUUFBTSxNQUFNLE1BQU0sV0FBVyxNQUFNLGlCQUFpQixNQUFNO0FBQ3hELFlBQVEsVUFBVSxRQUFRLGdCQUFnQixXQUFXLE9BQU8sSUFBSTtBQUFBLEVBQ3BFLENBQUc7QUFFRCxRQUFNLE1BQU0sTUFBTSxlQUFlLE1BQU07QUFDckMsWUFBUSxVQUFVLFFBQVEsZ0JBQWdCLFdBQVcsS0FBSztBQUFBLEVBQzlELENBQUc7QUFFRCxXQUFTLHdCQUF5QjtBQUNoQyx3QkFBcUI7QUFFckIsUUFBSSxRQUFRLFVBQVUsTUFBTTtBQUMxQixZQUFNLFNBQVMsVUFBVSxZQUFZLE1BQU0sVUFBVSxDQUFDO0FBRXRELGFBQU8sTUFBTSxhQUFhLFFBQ3RCLGFBQWEsTUFBTSxJQUNuQjtBQUFBLElBQ0w7QUFFRCxXQUFPLE1BQU07QUFBQSxFQUNkO0FBRUQsV0FBUyxvQkFBcUIsTUFBTTtBQUNsQyxRQUFJLE9BQU8sV0FBVyxRQUFRO0FBQzVCLGFBQU8sV0FBVyxNQUFNLENBQUMsSUFBSTtBQUFBLElBQzlCO0FBRUQsUUFBSSxNQUFNLElBQUksa0JBQWtCO0FBQ2hDLFVBQU0sU0FBUyxnQkFBZ0IsUUFBUSxNQUFNO0FBRTdDLFFBQUksV0FBVyxJQUFJO0FBQ2pCLGVBQVMsSUFBSSxPQUFPLGdCQUFnQixRQUFRLElBQUksR0FBRyxLQUFLO0FBQ3RELGVBQU87QUFBQSxNQUNSO0FBRUQsd0JBQWtCLGdCQUFnQixNQUFNLEdBQUcsTUFBTSxJQUFJLE1BQU0sZ0JBQWdCLE1BQU0sTUFBTTtBQUFBLElBQ3hGO0FBRUQsV0FBTztBQUFBLEVBQ1I7QUFFRCxXQUFTLHNCQUF1QjtBQUM5QixZQUFRLFFBQVEsTUFBTSxTQUFTLFVBQzFCLE1BQU0sS0FBSyxXQUFXLEtBQ3RCLGNBQWU7QUFFcEIsUUFBSSxRQUFRLFVBQVUsT0FBTztBQUMzQix1QkFBaUI7QUFDakIsbUJBQWE7QUFDYixxQkFBZTtBQUNmO0FBQUEsSUFDRDtBQUVELFVBQ0Usb0JBQW9CLFlBQWEsTUFBTSxJQUFJLE1BQU8sU0FDOUMsTUFBTSxPQUNOLFlBQWEsTUFBTSxJQUFNLEdBQzdCLFdBQVcsT0FBTyxNQUFNLGFBQWEsWUFBWSxNQUFNLFNBQVMsV0FBVyxJQUN2RSxNQUFNLFNBQVMsTUFBTSxHQUFHLENBQUMsSUFDekIsS0FDSixrQkFBa0IsU0FBUyxRQUFRLFVBQVUsTUFBTSxHQUNuRCxTQUFTLENBQUUsR0FDWCxVQUFVLENBQUUsR0FDWixPQUFPLENBQUU7QUFFWCxRQUNFLGFBQWEsTUFBTSxvQkFBb0IsTUFDdkMsYUFBYSxJQUNiLGFBQWE7QUFFZixzQkFBa0IsUUFBUSxnQkFBZ0IsQ0FBQyxHQUFHLE9BQU8sS0FBSyxPQUFPLFVBQVU7QUFDekUsVUFBSSxVQUFVLFFBQVE7QUFDcEIsY0FBTSxJQUFJLE9BQVEsS0FBTztBQUN6QixhQUFLLEtBQUssQ0FBQztBQUNYLHFCQUFhLEVBQUU7QUFDZixZQUFJLGVBQWUsTUFBTTtBQUN2QixrQkFBUSxLQUFLLFFBQVEsYUFBYSxTQUFTLEVBQUUsVUFBVSxXQUFXLGFBQWEsU0FBUyxFQUFFLFVBQVUsS0FBSztBQUN6Ryx1QkFBYTtBQUFBLFFBQ2Q7QUFDRCxnQkFBUSxLQUFLLFFBQVEsYUFBYSxTQUFTLEVBQUUsVUFBVSxJQUFJO0FBQUEsTUFDNUQsV0FDUSxRQUFRLFFBQVE7QUFDdkIscUJBQWEsUUFBUSxRQUFRLE9BQU8sS0FBSztBQUN6QyxhQUFLLEtBQUssR0FBRztBQUNiLGVBQU8sS0FBSyxRQUFRLGFBQWEsU0FBUyxhQUFhLEdBQUc7QUFBQSxNQUMzRCxPQUNJO0FBQ0gsY0FBTSxJQUFJLFVBQVUsU0FBUyxRQUFRO0FBQ3JDLHFCQUFhLE1BQU0sT0FBTyxhQUFhLEVBQUUsUUFBUSxVQUFVLFFBQVE7QUFDbkUsYUFBSyxLQUFLLENBQUM7QUFDWCxlQUFPLEtBQUssUUFBUSxhQUFhLFNBQVMsYUFBYSxHQUFHO0FBQUEsTUFDM0Q7QUFBQSxJQUNQLENBQUs7QUFFRCxVQUNFLGdCQUFnQixJQUFJO0FBQUEsTUFDbEIsTUFDRSxPQUFPLEtBQUssRUFBRSxJQUNkLE9BQU8sZUFBZSxLQUFLLE1BQU0sT0FBTyxhQUFhLE9BQU8sU0FDM0QsZUFBZSxLQUFLLEtBQUssTUFBTSxhQUFhLFFBQVE7QUFBQSxJQUN4RCxHQUNELGNBQWMsUUFBUSxTQUFTLEdBQy9CLGlCQUFpQixRQUFRLElBQUksQ0FBQyxJQUFJLFVBQVU7QUFDMUMsVUFBSSxVQUFVLEtBQUssTUFBTSxvQkFBb0IsTUFBTTtBQUNqRCxlQUFPLElBQUksT0FBTyxNQUFNLGtCQUFrQixNQUFNLEVBQUU7QUFBQSxNQUNuRCxXQUNRLFVBQVUsYUFBYTtBQUM5QixlQUFPLElBQUk7QUFBQSxVQUNULE1BQU0sS0FDSixPQUFPLGVBQWUsS0FBSyxNQUFNLGNBQWMsU0FDOUMsTUFBTSxvQkFBb0IsT0FBTyxNQUFNLGtCQUFrQjtBQUFBLFFBQzdEO0FBQUEsTUFDRjtBQUVELGFBQU8sSUFBSSxPQUFPLE1BQU0sRUFBRTtBQUFBLElBQ2xDLENBQU87QUFFSCxtQkFBZTtBQUNmLHFCQUFpQixTQUFPO0FBQ3RCLFlBQU0sY0FBYyxjQUFjLEtBQUssTUFBTSxvQkFBb0IsT0FBTyxNQUFNLElBQUksTUFBTSxHQUFHLEtBQUssU0FBUyxDQUFDLENBQUM7QUFDM0csVUFBSSxnQkFBZ0IsTUFBTTtBQUN4QixjQUFNLFlBQVksTUFBTSxDQUFDLEVBQUUsS0FBSyxFQUFFO0FBQUEsTUFDbkM7QUFFRCxZQUNFLGVBQWUsQ0FBRSxHQUNqQix1QkFBdUIsZUFBZTtBQUV4QyxlQUFTLElBQUksR0FBRyxNQUFNLEtBQUssSUFBSSxzQkFBc0IsS0FBSztBQUN4RCxjQUFNLElBQUksZUFBZ0IsQ0FBQyxFQUFHLEtBQUssR0FBRztBQUV0QyxZQUFJLE1BQU0sTUFBTTtBQUNkO0FBQUEsUUFDRDtBQUVELGNBQU0sSUFBSSxNQUFNLEVBQUUsTUFBSyxFQUFHLE1BQU07QUFDaEMscUJBQWEsS0FBSyxHQUFHLENBQUM7QUFBQSxNQUN2QjtBQUNELFVBQUksYUFBYSxXQUFXLEdBQUc7QUFDN0IsZUFBTyxhQUFhLEtBQUssRUFBRTtBQUFBLE1BQzVCO0FBRUQsYUFBTztBQUFBLElBQ1I7QUFDRCxpQkFBYSxLQUFLLElBQUksT0FBTSxPQUFPLE1BQU0sV0FBVyxJQUFJLE1BQU8sRUFBRSxLQUFLLEVBQUU7QUFDeEUsbUJBQWUsV0FBVyxNQUFNLE1BQU0sRUFBRSxLQUFLLFFBQVE7QUFBQSxFQUN0RDtBQUVELFdBQVMsZ0JBQWlCLFFBQVEseUJBQXlCLFdBQVc7QUFDcEUsVUFDRSxNQUFNLFNBQVMsT0FDZixNQUFNLElBQUksY0FDVixhQUFhLElBQUksTUFBTSxTQUFTLEtBQ2hDLFdBQVcsWUFBWSxNQUFNO0FBRy9CLGdDQUE0QixRQUFRLG9CQUFxQjtBQUV6RCxVQUNFLFlBQVksVUFBVSxRQUFRLEdBQzlCLFNBQVMsTUFBTSxhQUFhLFFBQ3hCLGFBQWEsU0FBUyxJQUN0QixXQUNKLFVBQVUsV0FBVyxVQUFVO0FBR2pDLFFBQUksVUFBVSxXQUFXLElBQUksUUFBUTtBQUVyQyxnQkFBWSxTQUFTLFdBQVcsUUFBUTtBQUV4QyxhQUFTLGtCQUFrQixPQUFPLFNBQVMsTUFBTTtBQUMvQyxVQUFJLFdBQVcsY0FBYztBQUMzQixjQUFNLFNBQVMsTUFBTSxvQkFBb0IsT0FBTyxhQUFhLFNBQVM7QUFDdEUsWUFBSSxrQkFBa0IsUUFBUSxRQUFRLFNBQVM7QUFFL0M7QUFBQSxNQUNEO0FBRUQsVUFBSSxjQUFjLHFCQUFxQixNQUFNLG9CQUFvQixNQUFNO0FBQ3JFLGNBQU0sU0FBUyxJQUFJO0FBQ25CLFlBQUksU0FBUyxNQUFNO0FBRW5CLGlCQUFTLElBQUksaUJBQWlCLEtBQUssVUFBVSxJQUFJLFFBQVEsS0FBSztBQUM1RCxjQUFJLFdBQVksQ0FBRyxNQUFLLFFBQVE7QUFDOUI7QUFBQSxVQUNEO0FBQUEsUUFDRjtBQUNELG1CQUFXLE1BQU0sS0FBSyxNQUFNO0FBRTVCO0FBQUEsTUFDRDtBQUVELFVBQUksQ0FBRSx5QkFBeUIsc0JBQXdCLEVBQUMsUUFBUSxTQUFTLE1BQU0sSUFBSTtBQUNqRixjQUFNLFNBQVMsTUFBTSxvQkFBb0IsT0FFbkMsUUFBUSxJQUNILE9BQU8sU0FBUyxVQUFVLFNBQVMsSUFBSSxJQUN4QyxLQUFLLElBQUksR0FBRyxPQUFPLFVBQVUsV0FBVyxlQUFlLElBQUksS0FBSyxJQUFJLFVBQVUsUUFBUSxVQUFVLElBQUksRUFBRSxJQUFJLElBRWhIO0FBRUosWUFBSSxrQkFBa0IsUUFBUSxRQUFRLFNBQVM7QUFDL0M7QUFBQSxNQUNEO0FBRUQsVUFBSSxNQUFNLG9CQUFvQixNQUFNO0FBQ2xDLFlBQUksWUFBWSxNQUFNO0FBQ3BCLGdCQUFNLFNBQVMsS0FBSyxJQUFJLEdBQUcsT0FBTyxVQUFVLFdBQVcsZUFBZSxJQUFJLEtBQUssSUFBSSxVQUFVLFFBQVEsYUFBYSxDQUFDLEVBQUU7QUFFckgsY0FBSSxXQUFXLEtBQUssUUFBUSxHQUFHO0FBQzdCLGdCQUFJLGtCQUFrQixRQUFRLFFBQVEsU0FBUztBQUFBLFVBQ2hELE9BQ0k7QUFDSCx1QkFBVyxhQUFhLEtBQUssTUFBTTtBQUFBLFVBQ3BDO0FBQUEsUUFDRixPQUNJO0FBQ0gsZ0JBQU0sU0FBUyxPQUFPLFNBQVM7QUFDL0IsY0FBSSxrQkFBa0IsUUFBUSxRQUFRLFVBQVU7QUFBQSxRQUNqRDtBQUFBLE1BQ0YsT0FDSTtBQUNILFlBQUksWUFBWSxNQUFNO0FBQ3BCLGdCQUFNLFNBQVMsS0FBSyxJQUFJLEdBQUcsV0FBVyxRQUFRLE1BQU0sR0FBRyxLQUFLLElBQUksVUFBVSxRQUFRLEdBQUcsSUFBSSxDQUFDO0FBQzFGLHFCQUFXLE1BQU0sS0FBSyxNQUFNO0FBQUEsUUFDN0IsT0FDSTtBQUNILGdCQUFNLFNBQVMsTUFBTTtBQUNyQixxQkFBVyxNQUFNLEtBQUssTUFBTTtBQUFBLFFBQzdCO0FBQUEsTUFDRjtBQUFBLElBQ1AsQ0FBSztBQUVELFVBQU0sTUFBTSxNQUFNLGtCQUFrQixPQUNoQyxZQUFZLE1BQU0sSUFDbEI7QUFFSixRQUNFLE9BQU8sTUFBTSxVQUFVLE1BQU0sUUFDekIsTUFBTSxlQUFlLFFBQVEsUUFBUSxLQUN6QztBQUNBLGdCQUFVLEtBQUssSUFBSTtBQUFBLElBQ3BCO0FBQUEsRUFDRjtBQUVELFdBQVMsbUJBQW9CLEtBQUssT0FBTyxLQUFLO0FBQzVDLFVBQU0sWUFBWSxVQUFVLFlBQVksSUFBSSxLQUFLLENBQUM7QUFFbEQsWUFBUSxLQUFLLElBQUksR0FBRyxXQUFXLFFBQVEsTUFBTSxHQUFHLEtBQUssSUFBSSxVQUFVLFFBQVEsS0FBSyxDQUFDO0FBQ2pGLHNCQUFrQjtBQUVsQixRQUFJLGtCQUFrQixPQUFPLEtBQUssU0FBUztBQUFBLEVBQzVDO0FBRUQsUUFBTSxhQUFhO0FBQUEsSUFDakIsS0FBTSxLQUFLLFFBQVE7QUFDakIsWUFBTSxlQUFlLFdBQVcsTUFBTSxTQUFTLENBQUMsRUFBRSxRQUFRLE1BQU0sTUFBTTtBQUN0RSxVQUFJLElBQUksS0FBSyxJQUFJLEdBQUcsU0FBUyxDQUFDO0FBRTlCLGFBQU8sS0FBSyxHQUFHLEtBQUs7QUFDbEIsWUFBSSxXQUFZLENBQUcsTUFBSyxRQUFRO0FBQzlCLG1CQUFTO0FBQ1QsMkJBQWlCLFFBQVE7QUFDekI7QUFBQSxRQUNEO0FBQUEsTUFDRjtBQUVELFVBQ0UsSUFBSSxLQUNELFdBQVksTUFBUSxNQUFLLFVBQ3pCLFdBQVksTUFBTSxNQUFPLFFBQzVCO0FBQ0EsZUFBTyxXQUFXLE1BQU0sS0FBSyxDQUFDO0FBQUEsTUFDL0I7QUFFRCxnQkFBVSxLQUFLLElBQUksa0JBQWtCLFFBQVEsUUFBUSxVQUFVO0FBQUEsSUFDaEU7QUFBQSxJQUVELE1BQU8sS0FBSyxRQUFRO0FBQ2xCLFlBQU0sUUFBUSxJQUFJLE1BQU07QUFDeEIsVUFBSSxJQUFJLEtBQUssSUFBSSxPQUFPLFNBQVMsQ0FBQztBQUVsQyxhQUFPLEtBQUssT0FBTyxLQUFLO0FBQ3RCLFlBQUksV0FBWSxDQUFHLE1BQUssUUFBUTtBQUM5QixtQkFBUztBQUNUO0FBQUEsUUFDRCxXQUNRLFdBQVksSUFBSSxDQUFDLE1BQU8sUUFBUTtBQUN2QyxtQkFBUztBQUFBLFFBQ1Y7QUFBQSxNQUNGO0FBRUQsVUFDRSxJQUFJLFNBQ0QsV0FBWSxTQUFTLENBQUcsTUFBSyxVQUM3QixXQUFZLFNBQVMsQ0FBQyxNQUFPLFFBQ2hDO0FBQ0EsZUFBTyxXQUFXLEtBQUssS0FBSyxLQUFLO0FBQUEsTUFDbEM7QUFFRCxVQUFJLGtCQUFrQixRQUFRLFFBQVEsU0FBUztBQUFBLElBQ2hEO0FBQUEsSUFFRCxZQUFhLEtBQUssUUFBUTtBQUN4QixZQUNFLGtCQUFrQixvQkFBb0IsSUFBSSxNQUFNLE1BQU07QUFDeEQsVUFBSSxJQUFJLEtBQUssSUFBSSxHQUFHLFNBQVMsQ0FBQztBQUU5QixhQUFPLEtBQUssR0FBRyxLQUFLO0FBQ2xCLFlBQUksZ0JBQWlCLElBQUksQ0FBQyxNQUFPLFFBQVE7QUFDdkMsbUJBQVM7QUFDVDtBQUFBLFFBQ0QsV0FDUSxnQkFBaUIsQ0FBRyxNQUFLLFFBQVE7QUFDeEMsbUJBQVM7QUFDVCxjQUFJLE1BQU0sR0FBRztBQUNYO0FBQUEsVUFDRDtBQUFBLFFBQ0Y7QUFBQSxNQUNGO0FBRUQsVUFDRSxJQUFJLEtBQ0QsZ0JBQWlCLE1BQVEsTUFBSyxVQUM5QixnQkFBaUIsTUFBTSxNQUFPLFFBQ2pDO0FBQ0EsZUFBTyxXQUFXLGFBQWEsS0FBSyxDQUFDO0FBQUEsTUFDdEM7QUFFRCxnQkFBVSxLQUFLLElBQUksa0JBQWtCLFFBQVEsUUFBUSxVQUFVO0FBQUEsSUFDaEU7QUFBQSxJQUVELGFBQWMsS0FBSyxRQUFRO0FBQ3pCLFlBQ0UsUUFBUSxJQUFJLE1BQU0sUUFDbEIsa0JBQWtCLG9CQUFvQixLQUFLLEdBQzNDLGVBQWUsZ0JBQWdCLE1BQU0sR0FBRyxTQUFTLENBQUMsRUFBRSxRQUFRLE1BQU0sTUFBTTtBQUMxRSxVQUFJLElBQUksS0FBSyxJQUFJLE9BQU8sU0FBUyxDQUFDO0FBRWxDLGFBQU8sS0FBSyxPQUFPLEtBQUs7QUFDdEIsWUFBSSxnQkFBaUIsSUFBSSxDQUFDLE1BQU8sUUFBUTtBQUN2QyxtQkFBUztBQUNULG1CQUFTLEtBQUssaUJBQWlCLFFBQVE7QUFDdkM7QUFBQSxRQUNEO0FBQUEsTUFDRjtBQUVELFVBQ0UsSUFBSSxTQUNELGdCQUFpQixTQUFTLENBQUcsTUFBSyxVQUNsQyxnQkFBaUIsU0FBUyxDQUFDLE1BQU8sUUFDckM7QUFDQSxlQUFPLFdBQVcsWUFBWSxLQUFLLEtBQUs7QUFBQSxNQUN6QztBQUVELFVBQUksa0JBQWtCLFFBQVEsUUFBUSxTQUFTO0FBQUEsSUFDaEQ7QUFBQSxFQUNGO0FBRUQsV0FBUyxjQUFlLEdBQUc7QUFDekIsU0FBSyxTQUFTLENBQUM7QUFFZixzQkFBa0I7QUFBQSxFQUNuQjtBQUVELFdBQVMsZ0JBQWlCLEdBQUc7QUFDM0IsU0FBSyxXQUFXLENBQUM7QUFFakIsUUFDRSxnQkFBZ0IsQ0FBQyxNQUFNLFFBQ3BCLEVBQUUsV0FBVyxNQUNoQjtBQUNBO0FBQUEsSUFDRDtBQUVELFVBQ0UsTUFBTSxTQUFTLE9BQ2YsUUFBUSxJQUFJLGdCQUNaLE1BQU0sSUFBSTtBQUVaLFFBQUksQ0FBQyxFQUFFLFVBQVU7QUFDZix3QkFBa0I7QUFBQSxJQUNuQjtBQUVELFFBQUksRUFBRSxZQUFZLE1BQU0sRUFBRSxZQUFZLElBQUk7QUFDeEMsVUFBSSxFQUFFLFlBQVksb0JBQW9CLFFBQVE7QUFDNUMsMEJBQWtCLElBQUksdUJBQXVCLFlBQVksUUFBUTtBQUFBLE1BQ2xFO0FBRUQsWUFBTSxLQUFLLFlBQWEsRUFBRSxZQUFZLEtBQUssVUFBVSxXQUFXLE1BQU0sb0JBQW9CLE9BQU8sWUFBWSxHQUFLO0FBRWxILFFBQUUsZUFBZ0I7QUFDbEIsU0FBRyxLQUFLLG9CQUFvQixRQUFRLE1BQU0sS0FBSztBQUUvQyxVQUFJLEVBQUUsVUFBVTtBQUNkLGNBQU0sU0FBUyxJQUFJO0FBQ25CLFlBQUksa0JBQWtCLEtBQUssSUFBSSxpQkFBaUIsTUFBTSxHQUFHLEtBQUssSUFBSSxpQkFBaUIsTUFBTSxHQUFHLFNBQVM7QUFBQSxNQUN0RztBQUFBLElBQ0YsV0FFQyxFQUFFLFlBQVksS0FDWCxNQUFNLG9CQUFvQixRQUMxQixVQUFVLEtBQ2I7QUFDQSxpQkFBVyxLQUFLLEtBQUssS0FBSztBQUMxQixVQUFJLGtCQUFrQixJQUFJLGdCQUFnQixLQUFLLFVBQVU7QUFBQSxJQUMxRCxXQUVDLEVBQUUsWUFBWSxNQUNYLE1BQU0sb0JBQW9CLFFBQzFCLFVBQVUsS0FDYjtBQUNBLGlCQUFXLGFBQWEsS0FBSyxHQUFHO0FBQ2hDLFVBQUksa0JBQWtCLE9BQU8sSUFBSSxjQUFjLFNBQVM7QUFBQSxJQUN6RDtBQUFBLEVBQ0Y7QUFFRCxXQUFTLFVBQVcsS0FBSztBQUN2QixRQUFJLFFBQVEsVUFBVSxRQUFRLFFBQVEsUUFBUSxJQUFJO0FBQUUsYUFBTztBQUFBLElBQUk7QUFFL0QsUUFBSSxNQUFNLG9CQUFvQixNQUFNO0FBQ2xDLGFBQU8saUJBQWlCLEdBQUc7QUFBQSxJQUM1QjtBQUVELFVBQU0sT0FBTztBQUViLFFBQUksV0FBVyxHQUFHLFNBQVM7QUFFM0IsYUFBUyxZQUFZLEdBQUcsWUFBWSxLQUFLLFFBQVEsYUFBYTtBQUM1RCxZQUNFLFVBQVUsSUFBSyxRQUFVLEdBQ3pCLFVBQVUsS0FBTSxTQUFXO0FBRTdCLFVBQUksT0FBTyxZQUFZLFVBQVU7QUFDL0Isa0JBQVU7QUFDVixvQkFBWSxXQUFXO0FBQUEsTUFDeEIsV0FDUSxZQUFZLFVBQVUsUUFBUSxNQUFNLEtBQUssT0FBTyxHQUFHO0FBQzFELGtCQUFVLFFBQVEsY0FBYyxTQUM1QixRQUFRLFVBQVUsT0FBTyxJQUN6QjtBQUNKO0FBQUEsTUFDRCxPQUNJO0FBQ0gsZUFBTztBQUFBLE1BQ1I7QUFBQSxJQUNGO0FBRUQsV0FBTztBQUFBLEVBQ1I7QUFFRCxXQUFTLGlCQUFrQixLQUFLO0FBQzlCLFVBQ0UsT0FBTyxjQUNQLGtCQUFrQixXQUFXLFFBQVEsTUFBTTtBQUU3QyxRQUFJLFdBQVcsSUFBSSxTQUFTLEdBQUcsU0FBUztBQUV4QyxhQUFTLFlBQVksS0FBSyxTQUFTLEdBQUcsYUFBYSxLQUFLLGFBQWEsSUFBSSxhQUFhO0FBQ3BGLFlBQU0sVUFBVSxLQUFNLFNBQVc7QUFFakMsVUFBSSxVQUFVLElBQUssUUFBVTtBQUU3QixVQUFJLE9BQU8sWUFBWSxVQUFVO0FBQy9CLGlCQUFTLFVBQVU7QUFDbkIsb0JBQVksV0FBVztBQUFBLE1BQ3hCLFdBQ1EsWUFBWSxVQUFVLFFBQVEsTUFBTSxLQUFLLE9BQU8sR0FBRztBQUMxRCxXQUFHO0FBQ0Qsb0JBQVUsUUFBUSxjQUFjLFNBQVMsUUFBUSxVQUFVLE9BQU8sSUFBSSxXQUFXO0FBQ2pGO0FBQ0Esb0JBQVUsSUFBSyxRQUFVO0FBQUEsUUFFbkMsU0FBaUIsb0JBQW9CLGFBQWEsWUFBWSxVQUFVLFFBQVEsTUFBTSxLQUFLLE9BQU87QUFBQSxNQUMzRixPQUNJO0FBQ0gsZUFBTztBQUFBLE1BQ1I7QUFBQSxJQUNGO0FBRUQsV0FBTztBQUFBLEVBQ1I7QUFFRCxXQUFTLFlBQWEsS0FBSztBQUN6QixXQUFPLE9BQU8sUUFBUSxZQUFZLG1CQUFtQixTQUNoRCxPQUFPLFFBQVEsV0FBVyxlQUFlLEtBQUssR0FBRyxJQUFJLE1BQ3RELGVBQWUsR0FBRztBQUFBLEVBQ3ZCO0FBRUQsV0FBUyxhQUFjLEtBQUs7QUFDMUIsUUFBSSxhQUFhLFNBQVMsSUFBSSxVQUFVLEdBQUc7QUFDekMsYUFBTztBQUFBLElBQ1I7QUFFRCxXQUFPLE1BQU0sb0JBQW9CLFFBQVEsSUFBSSxXQUFXLElBQ3BELGFBQWEsTUFBTSxHQUFHLENBQUMsSUFBSSxNQUFNLElBQUksTUFDckMsTUFBTSxhQUFhLE1BQU0sSUFBSSxNQUFNO0FBQUEsRUFDeEM7QUFFRCxTQUFPO0FBQUEsSUFDTDtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsRUFDRDtBQUNIO0FDOWpCZSxTQUFBLG9CQUFVLE9BQU8sV0FBVztBQUN6QyxXQUFTLGtCQUFtQjtBQUMxQixVQUFNLFFBQVEsTUFBTTtBQUVwQixRQUFJO0FBQ0YsWUFBTSxLQUFLLGtCQUFrQixTQUN6QixJQUFJLGFBQWMsSUFDakIsb0JBQW9CLFNBQ2pCLElBQUksZUFBZSxFQUFFLEVBQUUsZ0JBQ3ZCO0FBR1IsVUFBSSxPQUFPLEtBQUssTUFBTSxPQUFPO0FBQzNCLFNBQUMsWUFBWSxRQUNULE1BQU0sS0FBSyxLQUFLLElBQ2hCLENBQUUsS0FBTyxHQUNYLFFBQVEsVUFBUTtBQUNoQixhQUFHLE1BQU0sSUFBSSxJQUFJO0FBQUEsUUFDM0IsQ0FBUztBQUFBLE1BQ0Y7QUFFRCxhQUFPO0FBQUEsUUFDTCxPQUFPLEdBQUc7QUFBQSxNQUNYO0FBQUEsSUFDRixTQUNNLEdBQUc7QUFDUixhQUFPO0FBQUEsUUFDTCxPQUFPO0FBQUEsTUFDUjtBQUFBLElBQ0Y7QUFBQSxFQUNGO0FBRUQsU0FBTyxjQUFjLE9BQ2pCLFNBQVMsTUFBTTtBQUNmLFFBQUksTUFBTSxTQUFTLFFBQVE7QUFDekI7QUFBQSxJQUNEO0FBRUQsV0FBTyxnQkFBaUI7QUFBQSxFQUM5QixDQUFLLElBQ0MsU0FBUyxlQUFlO0FBQzlCO0FDOUJBLE1BQUEsU0FBZSxnQkFBZ0I7QUFBQSxFQUM3QixNQUFNO0FBQUEsRUFFTixjQUFjO0FBQUEsRUFFZCxPQUFPO0FBQUEsSUFDTCxHQUFHO0FBQUEsSUFDSCxHQUFHO0FBQUEsSUFDSCxHQUFHO0FBQUEsSUFFSCxZQUFZLEVBQUUsVUFBVSxNQUFPO0FBQUEsSUFFL0IsWUFBWTtBQUFBLElBRVosTUFBTTtBQUFBLE1BQ0osTUFBTTtBQUFBLE1BQ04sU0FBUztBQUFBLElBQ1Y7QUFBQSxJQUVELFVBQVUsQ0FBRSxRQUFRLE1BQVE7QUFBQSxJQUU1QixVQUFVO0FBQUE7QUFBQSxJQUVWLFlBQVksQ0FBRSxPQUFPLFFBQVEsTUFBUTtBQUFBLElBQ3JDLFlBQVksQ0FBRSxPQUFPLFFBQVEsTUFBUTtBQUFBLEVBQ3RDO0FBQUEsRUFFRCxPQUFPO0FBQUEsSUFDTCxHQUFHO0FBQUEsSUFDSDtBQUFBLElBQVM7QUFBQSxJQUNUO0FBQUEsSUFBVztBQUFBLElBQVM7QUFBQSxFQUNyQjtBQUFBLEVBRUQsTUFBTyxPQUFPLEVBQUUsTUFBTSxNQUFLLEdBQUk7QUFDN0IsVUFBTSxFQUFFLE1BQU8sSUFBRyxtQkFBb0I7QUFDdEMsVUFBTSxFQUFFLEdBQUUsSUFBSztBQUVmLFVBQU0sT0FBTyxDQUFFO0FBQ2YsUUFBSSxrQkFBa0IsS0FBSyxhQUFhLGtCQUFrQixZQUFZLE1BQU07QUFFNUUsVUFBTSxXQUFXLElBQUksSUFBSTtBQUN6QixVQUFNLFdBQVcscUJBQXFCLEtBQUs7QUFFM0MsVUFBTTtBQUFBLE1BQ0o7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLElBQ0QsSUFBRyxRQUFRLE9BQU8sTUFBTSxXQUFXLFFBQVE7QUFFNUMsVUFBTSxlQUFlO0FBQUEsTUFBb0I7QUFBQTtBQUFBLE1BQXdCO0FBQUEsSUFBSTtBQUNyRSxVQUFNLFdBQVcsU0FBUyxNQUFNLG1CQUFtQixXQUFXLEtBQUssQ0FBQztBQUVwRSxVQUFNLGdCQUFnQixrQkFBa0IsT0FBTztBQUUvQyxVQUFNLFFBQVEsY0FBZTtBQUU3QixVQUFNLGFBQWE7QUFBQSxNQUFTLE1BQzFCLE1BQU0sU0FBUyxjQUFjLE1BQU0sYUFBYTtBQUFBLElBQ2pEO0FBRUQsVUFBTSxhQUFhO0FBQUEsTUFBUyxNQUMxQixXQUFXLFVBQVUsUUFDbEIsQ0FBRSxRQUFRLFVBQVUsT0FBTyxPQUFPLFlBQWEsU0FBUyxNQUFNLElBQUk7QUFBQSxJQUN0RTtBQUVELFVBQU0sV0FBVyxTQUFTLE1BQU07QUFDOUIsWUFBTSxNQUFNO0FBQUEsUUFDVixHQUFHLE1BQU0sV0FBVyxVQUFVO0FBQUEsUUFDOUI7QUFBQSxRQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQUtBO0FBQUEsUUFDQSxRQUFRO0FBQUEsUUFDUixTQUFTO0FBQUEsTUFDVjtBQUVELFVBQUkscUJBQXFCLElBQUksc0JBQXNCLElBQUksbUJBQW1CO0FBRTFFLFVBQUksUUFBUSxVQUFVLE1BQU07QUFDMUIsWUFBSSxZQUFZO0FBRWhCLFlBQUksVUFBVTtBQUFBLE1BQ2Y7QUFFRCxVQUFJLE1BQU0sYUFBYSxNQUFNO0FBQzNCLFlBQUksaUJBQWlCO0FBQUEsTUFDdEI7QUFFRCxhQUFPO0FBQUEsSUFDYixDQUFLO0FBRUQsVUFBTSxhQUFhLFNBQVMsTUFBTTtBQUNoQyxZQUFNQSxTQUFRO0FBQUEsUUFDWixVQUFVO0FBQUEsUUFDVixrQkFBa0IsTUFBTSxjQUFjLFFBQVE7QUFBQSxRQUM5QyxNQUFNLE1BQU0sU0FBUyxhQUFhLElBQUk7QUFBQSxRQUN0QyxjQUFjLE1BQU07QUFBQSxRQUNwQixNQUFNLFNBQVM7QUFBQSxRQUNmLEdBQUcsTUFBTSxXQUFXLFdBQVc7QUFBQSxRQUMvQixJQUFJLE1BQU0sVUFBVTtBQUFBLFFBQ3BCLFdBQVcsTUFBTTtBQUFBLFFBQ2pCLFVBQVUsTUFBTSxZQUFZO0FBQUEsUUFDNUIsVUFBVSxNQUFNLGFBQWE7QUFBQSxNQUM5QjtBQUVELFVBQUksV0FBVyxVQUFVLE9BQU87QUFDOUIsUUFBQUEsT0FBTSxPQUFPLE1BQU07QUFBQSxNQUNwQjtBQUVELFVBQUksTUFBTSxhQUFhLE1BQU07QUFDM0IsUUFBQUEsT0FBTSxPQUFPO0FBQUEsTUFDZDtBQUVELGFBQU9BO0FBQUEsSUFDYixDQUFLO0FBS0QsVUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNO0FBQzVCLFVBQUksU0FBUyxPQUFPO0FBQ2xCLGlCQUFTLE1BQU0sUUFBUSxNQUFNO0FBQUEsTUFDOUI7QUFBQSxJQUNQLENBQUs7QUFFRCxVQUFNLE1BQU0sTUFBTSxZQUFZLE9BQUs7QUFDakMsVUFBSSxRQUFRLFVBQVUsTUFBTTtBQUMxQixZQUFJLHFCQUFxQixNQUFNO0FBQzdCLDZCQUFtQjtBQUVuQixjQUFJLE9BQU8sQ0FBQyxNQUFNLGlCQUFpQjtBQUNqQztBQUFBLFVBQ0Q7QUFBQSxRQUNGO0FBRUQsd0JBQWdCLENBQUM7QUFBQSxNQUNsQixXQUNRLFdBQVcsVUFBVSxHQUFHO0FBQy9CLG1CQUFXLFFBQVE7QUFFbkIsWUFDRSxNQUFNLFNBQVMsWUFDWixLQUFLLGVBQWUsT0FBTyxNQUFNLE1BQ3BDO0FBQ0EsY0FBSSxnQkFBZ0IsTUFBTTtBQUN4QiwwQkFBYztBQUFBLFVBQ2YsT0FDSTtBQUNILG1CQUFPLEtBQUs7QUFBQSxVQUNiO0FBQUEsUUFDRjtBQUFBLE1BQ0Y7QUFHRCxZQUFNLGFBQWEsUUFBUSxTQUFTLFlBQVk7QUFBQSxJQUN0RCxDQUFLO0FBRUQsVUFBTSxNQUFNLE1BQU0sVUFBVSxTQUFPO0FBRWpDLFVBQUksUUFBUSxNQUFNO0FBQ2hCLGlCQUFTLFlBQVk7QUFBQSxNQUN0QixXQUVRLFNBQVMsVUFBVSxRQUFRLE1BQU0sT0FBTyxHQUFHO0FBQ2xELGlCQUFTLE1BQU0sTUFBTSxTQUFTO0FBQUEsTUFDL0I7QUFBQSxJQUNQLENBQUs7QUFFRCxVQUFNLE1BQU0sTUFBTSxPQUFPLE1BQU07QUFDN0IsWUFBTSxhQUFhLFFBQVEsU0FBUyxZQUFZO0FBQUEsSUFDdEQsQ0FBSztBQUVELGFBQVMsUUFBUztBQUNoQixpQkFBVyxNQUFNO0FBQ2YsY0FBTSxLQUFLLFNBQVM7QUFDcEIsWUFDRSxTQUFTLFVBQVUsUUFDaEIsU0FBUyxVQUFVLE9BQ2xCLE9BQU8sUUFBUSxHQUFHLE9BQU8sTUFBTSxVQUFVLFFBQzdDO0FBQ0EsbUJBQVMsTUFBTSxNQUFNLEVBQUUsZUFBZSxLQUFJLENBQUU7QUFBQSxRQUM3QztBQUFBLE1BQ1QsQ0FBTztBQUFBLElBQ0Y7QUFFRCxhQUFTLFNBQVU7QUFDakIsZUFBUyxVQUFVLFFBQVEsU0FBUyxNQUFNLE9BQVE7QUFBQSxJQUNuRDtBQUVELGFBQVMsUUFBUyxHQUFHO0FBQ25CLFVBQUksUUFBUSxVQUFVLFFBQVEsTUFBTSxvQkFBb0IsTUFBTTtBQUM1RCxjQUFNLE1BQU0sRUFBRTtBQUNkLDJCQUFtQixLQUFLLElBQUksZ0JBQWdCLElBQUksWUFBWTtBQUFBLE1BQzdEO0FBRUQsV0FBSyxTQUFTLENBQUM7QUFBQSxJQUNoQjtBQUVELGFBQVMsUUFBUyxHQUFHO0FBQ25CLFVBQUksQ0FBQyxLQUFLLENBQUMsRUFBRSxRQUFRO0FBQ25CO0FBQUEsTUFDRDtBQUVELFVBQUksTUFBTSxTQUFTLFFBQVE7QUFDekIsYUFBSyxxQkFBcUIsRUFBRSxPQUFPLEtBQUs7QUFDeEM7QUFBQSxNQUNEO0FBRUQsWUFBTSxNQUFNLEVBQUUsT0FBTztBQUVyQixVQUFJLEVBQUUsT0FBTyxlQUFlLE1BQU07QUFDaEMsYUFBSyxRQUFRO0FBRWI7QUFBQSxNQUNEO0FBRUQsVUFBSSxRQUFRLFVBQVUsTUFBTTtBQUMxQix3QkFBZ0IsS0FBSyxPQUFPLEVBQUUsU0FBUztBQUFBLE1BQ3hDLE9BQ0k7QUFDSCxrQkFBVSxHQUFHO0FBRWIsWUFBSSxXQUFXLFVBQVUsUUFBUSxFQUFFLFdBQVcsU0FBUyxlQUFlO0FBQ3BFLGdCQUFNLEVBQUUsZ0JBQWdCLGFBQWMsSUFBRyxFQUFFO0FBRTNDLGNBQUksbUJBQW1CLFVBQVUsaUJBQWlCLFFBQVE7QUFDeEQscUJBQVMsTUFBTTtBQUNiLGtCQUFJLEVBQUUsV0FBVyxTQUFTLGlCQUFpQixJQUFJLFFBQVEsRUFBRSxPQUFPLEtBQUssTUFBTSxHQUFHO0FBQzVFLGtCQUFFLE9BQU8sa0JBQWtCLGdCQUFnQixZQUFZO0FBQUEsY0FDeEQ7QUFBQSxZQUNmLENBQWE7QUFBQSxVQUNGO0FBQUEsUUFDRjtBQUFBLE1BQ0Y7QUFJRCxZQUFNLGFBQWEsUUFBUSxhQUFjO0FBQUEsSUFDMUM7QUFFRCxhQUFTLGVBQWdCLEdBQUc7QUFDMUIsV0FBSyxnQkFBZ0IsQ0FBQztBQUN0QixtQkFBYztBQUFBLElBQ2Y7QUFFRCxhQUFTLFVBQVcsS0FBSyxhQUFhO0FBQ3BDLG9CQUFjLE1BQU07QUFDbEIsb0JBQVk7QUFFWixZQUNFLE1BQU0sU0FBUyxZQUNaLEtBQUssZUFBZSxPQUFPLE1BQU0sTUFDcEM7QUFDQSxpQkFBTyxLQUFLO0FBQUEsUUFDYjtBQUVELFlBQUksTUFBTSxlQUFlLE9BQU8sb0JBQW9CLEtBQUs7QUFDdkQsNEJBQWtCO0FBRWxCLDBCQUFnQixTQUFTLG1CQUFtQjtBQUM1QyxlQUFLLHFCQUFxQixHQUFHO0FBRTdCLG1CQUFTLE1BQU07QUFDYixnQ0FBb0IsUUFBUSxrQkFBa0I7QUFBQSxVQUMxRCxDQUFXO0FBQUEsUUFDRjtBQUVELHNCQUFjO0FBQUEsTUFDZjtBQUVELFVBQUksTUFBTSxTQUFTLFVBQVU7QUFDM0Isc0JBQWM7QUFDZCxhQUFLLFFBQVE7QUFBQSxNQUNkO0FBRUQsVUFBSSxNQUFNLGFBQWEsUUFBUTtBQUM3QixzQkFBYyxRQUFRLGFBQWEsU0FBUztBQUM1QyxhQUFLLFFBQVE7QUFDYixvQkFBWSxXQUFXLGFBQWEsTUFBTSxRQUFRO0FBQUEsTUFDbkQsT0FDSTtBQUNILG9CQUFhO0FBQUEsTUFDZDtBQUFBLElBQ0Y7QUFHRCxhQUFTLGVBQWdCO0FBQ3ZCLDRCQUFzQixNQUFNO0FBQzFCLGNBQU0sTUFBTSxTQUFTO0FBQ3JCLFlBQUksUUFBUSxNQUFNO0FBQ2hCLGdCQUFNLGNBQWMsSUFBSSxXQUFXO0FBRW5DLGdCQUFNLEVBQUUsVUFBUyxJQUFLO0FBRXRCLGdCQUFNLEVBQUUsV0FBVyxVQUFXLElBQUcsR0FBRyxTQUFTLEdBQUcsWUFBWSxPQUN4RCxDQUFFLElBQ0YsT0FBTyxpQkFBaUIsR0FBRztBQUkvQixnQkFBTSxpQkFBaUIsY0FBYyxVQUFVLGNBQWM7QUFJN0QsNkJBQW1CLFNBQVMsSUFBSSxNQUFNLFlBQVk7QUFDbEQsc0JBQVksZUFBZ0IsSUFBSSxlQUFlLElBQUs7QUFDcEQsY0FBSSxNQUFNLFNBQVM7QUFFbkIsY0FBSSxNQUFNLFNBQVMsSUFBSSxlQUFlO0FBR3RDLDZCQUFtQixTQUFTLElBQUksTUFBTSxZQUFZLFNBQVMsV0FBVyxFQUFFLElBQUksSUFBSSxlQUFlLFNBQVM7QUFDeEcsc0JBQVksZUFBZTtBQUMzQixjQUFJLFlBQVk7QUFBQSxRQUNqQjtBQUFBLE1BQ1QsQ0FBTztBQUFBLElBQ0Y7QUFFRCxhQUFTLFNBQVUsR0FBRztBQUNwQixvQkFBYyxDQUFDO0FBRWYsVUFBSSxjQUFjLE1BQU07QUFDdEIscUJBQWEsU0FBUztBQUN0QixvQkFBWTtBQUFBLE1BQ2I7QUFFRCxzQkFBZ0IsVUFBVSxZQUFhO0FBRXZDLFdBQUssVUFBVSxFQUFFLE9BQU8sS0FBSztBQUFBLElBQzlCO0FBRUQsYUFBUyxnQkFBaUIsR0FBRztBQUMzQixZQUFNLFVBQVUsS0FBSyxDQUFDO0FBRXRCLFVBQUksY0FBYyxNQUFNO0FBQ3RCLHFCQUFhLFNBQVM7QUFDdEIsb0JBQVk7QUFBQSxNQUNiO0FBRUQsc0JBQWdCLFVBQVUsWUFBYTtBQUV2QyxvQkFBYztBQUNkLHlCQUFtQjtBQUNuQixhQUFPLEtBQUs7QUFJWixZQUFNLFNBQVMsVUFBVSxXQUFXLE1BQU07QUFDeEMsWUFBSSxTQUFTLFVBQVUsTUFBTTtBQUMzQixtQkFBUyxNQUFNLFFBQVEsV0FBVyxVQUFVLFNBQVMsV0FBVyxRQUFRO0FBQUEsUUFDekU7QUFBQSxNQUNULENBQU87QUFBQSxJQUNGO0FBRUQsYUFBUyxjQUFlO0FBQ3RCLGFBQU8sS0FBSyxlQUFlLE9BQU8sTUFBTSxPQUNwQyxLQUFLLFFBQ0osV0FBVyxVQUFVLFNBQVMsV0FBVyxRQUFRO0FBQUEsSUFDdkQ7QUFFRCxvQkFBZ0IsTUFBTTtBQUNwQixzQkFBaUI7QUFBQSxJQUN2QixDQUFLO0FBRUQsY0FBVSxNQUFNO0FBRWQsWUFBTSxhQUFhLFFBQVEsYUFBYztBQUFBLElBQy9DLENBQUs7QUFFRCxXQUFPLE9BQU8sT0FBTztBQUFBLE1BQ25CO0FBQUEsTUFFQSxZQUFZO0FBQUEsUUFBUyxNQUNuQixLQUFNLFdBQVcsVUFBVSxPQUFPLGFBQWEsYUFDNUMsTUFBTSxhQUFhLE9BQU8sMEJBQTBCO0FBQUEsTUFDeEQ7QUFBQSxNQUVELFdBQVc7QUFBQSxRQUFTLE1BQ2xCLE1BQU0sU0FBUyxVQUNaLE9BQU8sTUFBTSxlQUFlLFlBQzVCLE1BQU0sV0FBVyxXQUFXO0FBQUEsTUFDaEM7QUFBQSxNQUVEO0FBQUEsTUFFQTtBQUFBLE1BRUE7QUFBQSxNQUVBLGVBQWU7QUFBQSxRQUFTLE1BRXBCLFNBQVMsVUFBVSxTQUNmLE1BQU0sU0FBUyxZQUFZLE1BQU0sV0FBVyxLQUFLLE1BQU0sVUFFMUQsbUJBQW1CLE1BQU0sWUFBWTtBQUFBLE1BQ3pDO0FBQUEsTUFFRCxZQUFZLE1BQU07QUFDaEIsZUFBTyxFQUFFLFdBQVcsVUFBVSxPQUFPLGFBQWEsU0FBUztBQUFBLFVBQ3pELEtBQUs7QUFBQSxVQUNMLE9BQU87QUFBQSxZQUNMO0FBQUEsWUFDQSxNQUFNO0FBQUEsVUFDUDtBQUFBLFVBQ0QsT0FBTyxNQUFNO0FBQUEsVUFDYixHQUFHLFdBQVc7QUFBQSxVQUNkLEdBQUcsU0FBUztBQUFBLFVBQ1osR0FDRSxNQUFNLFNBQVMsU0FDWCxFQUFFLE9BQU8sY0FBZSxJQUN4QixhQUFhO0FBQUEsUUFFN0IsQ0FBUztBQUFBLE1BQ0Y7QUFBQSxNQUVELGtCQUFrQixNQUFNO0FBQ3RCLGVBQU8sRUFBRSxPQUFPO0FBQUEsVUFDZCxPQUFPLHVFQUNGLFdBQVcsVUFBVSxPQUFPLEtBQUs7QUFBQSxRQUNoRCxHQUFXO0FBQUEsVUFDRCxFQUFFLFFBQVEsRUFBRSxPQUFPLFlBQWEsR0FBRSxZQUFXLENBQUU7QUFBQSxVQUMvQyxFQUFFLFFBQVEsTUFBTSxVQUFVO0FBQUEsUUFDcEMsQ0FBUztBQUFBLE1BQ0Y7QUFBQSxJQUNQLENBQUs7QUFFRCxVQUFNLFdBQVcsU0FBUyxLQUFLO0FBRy9CLFdBQU8sT0FBTyxPQUFPO0FBQUEsTUFDbkI7QUFBQSxNQUNBO0FBQUEsTUFDQSxrQkFBa0IsTUFBTSxTQUFTO0FBQUE7QUFBQSxJQUN2QyxDQUFLO0FBRUQsZUFBVyxPQUFPLFlBQVksTUFBTSxTQUFTLEtBQUs7QUFFbEQsV0FBTztBQUFBLEVBQ1I7QUFDSCxDQUFDOyIsInhfZ29vZ2xlX2lnbm9yZUxpc3QiOlswLDEsMl19
