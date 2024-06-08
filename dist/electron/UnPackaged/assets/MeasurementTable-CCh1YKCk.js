import { c as createComponent, a as hSlot, f as hMergeSlot, b as hUniqueSlot, e as hDir, h as hMergeSlotSafely } from "./render-DVgBXDT_.js";
import { c as computed, h, g as getCurrentInstance, n as noop, r as ref, w as watch, d as nextTick, X as debounce, V as onBeforeMount, Y as onDeactivated, Z as onActivated, a as onBeforeUnmount, l as listenOpts, o as onMounted, x as stopAndPrevent, $ as isKeyCode, s as prevent, p as addEvt, v as cleanEvt, a0 as globalConfig, C as onUnmounted, a1 as injectProp, a2 as Teleport, k as client, u as position, a3 as Transition, a4 as isDeepEqual, a5 as onBeforeUpdate, a6 as onUpdated, t as stop, a7 as shouldIgnoreKey, a8 as toRaw, a9 as History, aa as isNumber, ab as isDate, ac as isObject, ad as injectMultipleProps, L as defineComponent, _ as _export_sfc, F as openBlock, M as createElementBlock, I as createVNode, H as withCtx, J as createTextVNode, N as toDisplayString } from "./index-B8gzy2O7.js";
import { Q as QIcon, u as useSizeProps, a as useSize, g as getParentProxy, v as vmIsDestroyed, b as vmHasRouter } from "./vm-DaVx61Sd.js";
import { u as useDarkProps, a as useDark } from "./use-dark-DbAZm5oa.js";
import { g as getScrollTarget, Q as QList, c as clearSelection, j as getScrollbarWidth, u as useModelToggleProps, a as useModelToggleEmits, b as useModelToggle, d as useHistory, e as usePreventScroll, n as normalizeToInterval, l as QItemSection, m as QItemLabel, k as QItem } from "./format-BsCzKxIG.js";
import { u as useFieldProps, a as useFieldEmits, b as useField, c as useFieldState, r as removeFocusWaitFlag, d as addFocusWaitFlag, e as addFocusFn, f as useFormProps, g as useFormInputNameAttr, h as fieldValueIsFilled, i as useKeyComposition, j as useFormInject } from "./use-key-composition-DYeyzAGI.js";
import { R as Ripple, c as childHasFocus, Q as QBtn } from "./QBtn-4EkWpof7.js";
import { u as useTimeout } from "./use-timeout-Ds5q0hEC.js";
const QTd = createComponent({
  name: "QTd",
  props: {
    props: Object,
    autoWidth: Boolean,
    noHover: Boolean
  },
  setup(props, { slots }) {
    const vm = getCurrentInstance();
    const classes = computed(
      () => "q-td" + (props.autoWidth === true ? " q-table--col-auto-width" : "") + (props.noHover === true ? " q-td--no-hover" : "") + " "
    );
    return () => {
      if (props.props === void 0) {
        return h("td", { class: classes.value }, hSlot(slots.default));
      }
      const name = vm.vnode.key;
      const col = (props.props.colsMap !== void 0 ? props.props.colsMap[name] : null) || props.props.col;
      if (col === void 0)
        return;
      const { row } = props.props;
      return h("td", {
        class: classes.value + col.__tdClass(row),
        style: col.__tdStyle(row)
      }, hSlot(slots.default));
    };
  }
});
const alignValues = ["top", "middle", "bottom"];
const QBadge = createComponent({
  name: "QBadge",
  props: {
    color: String,
    textColor: String,
    floating: Boolean,
    transparent: Boolean,
    multiLine: Boolean,
    outline: Boolean,
    rounded: Boolean,
    label: [Number, String],
    align: {
      type: String,
      validator: (v) => alignValues.includes(v)
    }
  },
  setup(props, { slots }) {
    const style = computed(() => {
      return props.align !== void 0 ? { verticalAlign: props.align } : null;
    });
    const classes = computed(() => {
      const text = props.outline === true ? props.color || props.textColor : props.textColor;
      return `q-badge flex inline items-center no-wrap q-badge--${props.multiLine === true ? "multi" : "single"}-line` + (props.outline === true ? " q-badge--outline" : props.color !== void 0 ? ` bg-${props.color}` : "") + (text !== void 0 ? ` text-${text}` : "") + (props.floating === true ? " q-badge--floating" : "") + (props.rounded === true ? " q-badge--rounded" : "") + (props.transparent === true ? " q-badge--transparent" : "");
    });
    return () => h("div", {
      class: classes.value,
      style: style.value,
      role: "status",
      "aria-label": props.label
    }, hMergeSlot(slots.default, props.label !== void 0 ? [props.label] : []));
  }
});
const QTr = createComponent({
  name: "QTr",
  props: {
    props: Object,
    noHover: Boolean
  },
  setup(props, { slots }) {
    const classes = computed(
      () => "q-tr" + (props.props === void 0 || props.props.header === true ? "" : " " + props.props.__trClass) + (props.noHover === true ? " q-tr--no-hover" : "")
    );
    return () => h("tr", { class: classes.value }, hSlot(slots.default));
  }
});
const QTh = createComponent({
  name: "QTh",
  props: {
    props: Object,
    autoWidth: Boolean
  },
  emits: ["click"],
  setup(props, { slots, emit }) {
    const vm = getCurrentInstance();
    const { proxy: { $q } } = vm;
    const onClick = (evt) => {
      emit("click", evt);
    };
    return () => {
      if (props.props === void 0) {
        return h("th", {
          class: props.autoWidth === true ? "q-table--col-auto-width" : "",
          onClick
        }, hSlot(slots.default));
      }
      let col, child;
      const name = vm.vnode.key;
      if (name) {
        col = props.props.colsMap[name];
        if (col === void 0)
          return;
      } else {
        col = props.props.col;
      }
      if (col.sortable === true) {
        const action = col.align === "right" ? "unshift" : "push";
        child = hUniqueSlot(slots.default, []);
        child[action](
          h(QIcon, {
            class: col.__iconClass,
            name: $q.iconSet.table.arrowUp
          })
        );
      } else {
        child = hSlot(slots.default);
      }
      const data = {
        class: col.__thClass + (props.autoWidth === true ? " q-table--col-auto-width" : ""),
        style: col.headerStyle,
        onClick: (evt) => {
          col.sortable === true && props.props.sort(col);
          onClick(evt);
        }
      };
      return h("th", data, child);
    };
  }
});
const insetMap = {
  true: "inset",
  item: "item-inset",
  "item-thumbnail": "item-thumbnail-inset"
};
const margins = {
  xs: 2,
  sm: 4,
  md: 8,
  lg: 16,
  xl: 24
};
const QSeparator = createComponent({
  name: "QSeparator",
  props: {
    ...useDarkProps,
    spaced: [Boolean, String],
    inset: [Boolean, String],
    vertical: Boolean,
    color: String,
    size: String
  },
  setup(props) {
    const vm = getCurrentInstance();
    const isDark = useDark(props, vm.proxy.$q);
    const orientation = computed(() => props.vertical === true ? "vertical" : "horizontal");
    const orientClass = computed(() => ` q-separator--${orientation.value}`);
    const insetClass = computed(() => props.inset !== false ? `${orientClass.value}-${insetMap[props.inset]}` : "");
    const classes = computed(
      () => `q-separator${orientClass.value}${insetClass.value}` + (props.color !== void 0 ? ` bg-${props.color}` : "") + (isDark.value === true ? " q-separator--dark" : "")
    );
    const style = computed(() => {
      const acc = {};
      if (props.size !== void 0) {
        acc[props.vertical === true ? "width" : "height"] = props.size;
      }
      if (props.spaced !== false) {
        const size = props.spaced === true ? `${margins.md}px` : props.spaced in margins ? `${margins[props.spaced]}px` : props.spaced;
        const dir = props.vertical === true ? ["Left", "Right"] : ["Top", "Bottom"];
        acc[`margin${dir[0]}`] = acc[`margin${dir[1]}`] = size;
      }
      return acc;
    });
    return () => h("hr", {
      class: classes.value,
      style: style.value,
      "aria-orientation": orientation.value
    });
  }
});
const separatorValues = ["horizontal", "vertical", "cell", "none"];
const QMarkupTable = createComponent({
  name: "QMarkupTable",
  props: {
    ...useDarkProps,
    dense: Boolean,
    flat: Boolean,
    bordered: Boolean,
    square: Boolean,
    wrapCells: Boolean,
    separator: {
      type: String,
      default: "horizontal",
      validator: (v) => separatorValues.includes(v)
    }
  },
  setup(props, { slots }) {
    const vm = getCurrentInstance();
    const isDark = useDark(props, vm.proxy.$q);
    const classes = computed(
      () => `q-markup-table q-table__container q-table__card q-table--${props.separator}-separator` + (isDark.value === true ? " q-table--dark q-table__card--dark q-dark" : "") + (props.dense === true ? " q-table--dense" : "") + (props.flat === true ? " q-table--flat" : "") + (props.bordered === true ? " q-table--bordered" : "") + (props.square === true ? " q-table--square" : "") + (props.wrapCells === false ? " q-table--no-wrap" : "")
    );
    return () => h("div", {
      class: classes.value
    }, [
      h("table", { class: "q-table" }, hSlot(slots.default))
    ]);
  }
});
function getTableMiddle(props, content) {
  return h("div", props, [
    h("table", { class: "q-table" }, content)
  ]);
}
let rtlHasScrollBug = false;
{
  const scroller = document.createElement("div");
  scroller.setAttribute("dir", "rtl");
  Object.assign(scroller.style, {
    width: "1px",
    height: "1px",
    overflow: "auto"
  });
  const spacer = document.createElement("div");
  Object.assign(spacer.style, {
    width: "1000px",
    height: "1px"
  });
  document.body.appendChild(scroller);
  scroller.appendChild(spacer);
  scroller.scrollLeft = -1e3;
  rtlHasScrollBug = scroller.scrollLeft >= 0;
  scroller.remove();
}
const aggBucketSize = 1e3;
const scrollToEdges = [
  "start",
  "center",
  "end",
  "start-force",
  "center-force",
  "end-force"
];
const filterProto = Array.prototype.filter;
const setOverflowAnchor = window.getComputedStyle(document.body).overflowAnchor === void 0 ? noop : function(contentEl, index) {
  if (contentEl === null) {
    return;
  }
  if (contentEl._qOverflowAnimationFrame !== void 0) {
    cancelAnimationFrame(contentEl._qOverflowAnimationFrame);
  }
  contentEl._qOverflowAnimationFrame = requestAnimationFrame(() => {
    if (contentEl === null) {
      return;
    }
    contentEl._qOverflowAnimationFrame = void 0;
    const children = contentEl.children || [];
    filterProto.call(children, (el2) => el2.dataset && el2.dataset.qVsAnchor !== void 0).forEach((el2) => {
      delete el2.dataset.qVsAnchor;
    });
    const el = children[index];
    if (el && el.dataset) {
      el.dataset.qVsAnchor = "";
    }
  });
};
function sumFn(acc, h2) {
  return acc + h2;
}
function getScrollDetails(parent, child, beforeRef, afterRef, horizontal, rtl, stickyStart, stickyEnd) {
  const parentCalc = parent === window ? document.scrollingElement || document.documentElement : parent, propElSize = horizontal === true ? "offsetWidth" : "offsetHeight", details = {
    scrollStart: 0,
    scrollViewSize: -stickyStart - stickyEnd,
    scrollMaxSize: 0,
    offsetStart: -stickyStart,
    offsetEnd: -stickyEnd
  };
  if (horizontal === true) {
    if (parent === window) {
      details.scrollStart = window.pageXOffset || window.scrollX || document.body.scrollLeft || 0;
      details.scrollViewSize += document.documentElement.clientWidth;
    } else {
      details.scrollStart = parentCalc.scrollLeft;
      details.scrollViewSize += parentCalc.clientWidth;
    }
    details.scrollMaxSize = parentCalc.scrollWidth;
    if (rtl === true) {
      details.scrollStart = (rtlHasScrollBug === true ? details.scrollMaxSize - details.scrollViewSize : 0) - details.scrollStart;
    }
  } else {
    if (parent === window) {
      details.scrollStart = window.pageYOffset || window.scrollY || document.body.scrollTop || 0;
      details.scrollViewSize += document.documentElement.clientHeight;
    } else {
      details.scrollStart = parentCalc.scrollTop;
      details.scrollViewSize += parentCalc.clientHeight;
    }
    details.scrollMaxSize = parentCalc.scrollHeight;
  }
  if (beforeRef !== null) {
    for (let el = beforeRef.previousElementSibling; el !== null; el = el.previousElementSibling) {
      if (el.classList.contains("q-virtual-scroll--skip") === false) {
        details.offsetStart += el[propElSize];
      }
    }
  }
  if (afterRef !== null) {
    for (let el = afterRef.nextElementSibling; el !== null; el = el.nextElementSibling) {
      if (el.classList.contains("q-virtual-scroll--skip") === false) {
        details.offsetEnd += el[propElSize];
      }
    }
  }
  if (child !== parent) {
    const parentRect = parentCalc.getBoundingClientRect(), childRect = child.getBoundingClientRect();
    if (horizontal === true) {
      details.offsetStart += childRect.left - parentRect.left;
      details.offsetEnd -= childRect.width;
    } else {
      details.offsetStart += childRect.top - parentRect.top;
      details.offsetEnd -= childRect.height;
    }
    if (parent !== window) {
      details.offsetStart += details.scrollStart;
    }
    details.offsetEnd += details.scrollMaxSize - details.offsetStart;
  }
  return details;
}
function setScroll(parent, scroll, horizontal, rtl) {
  if (scroll === "end") {
    scroll = (parent === window ? document.body : parent)[horizontal === true ? "scrollWidth" : "scrollHeight"];
  }
  if (parent === window) {
    if (horizontal === true) {
      if (rtl === true) {
        scroll = (rtlHasScrollBug === true ? document.body.scrollWidth - document.documentElement.clientWidth : 0) - scroll;
      }
      window.scrollTo(scroll, window.pageYOffset || window.scrollY || document.body.scrollTop || 0);
    } else {
      window.scrollTo(window.pageXOffset || window.scrollX || document.body.scrollLeft || 0, scroll);
    }
  } else if (horizontal === true) {
    if (rtl === true) {
      scroll = (rtlHasScrollBug === true ? parent.scrollWidth - parent.offsetWidth : 0) - scroll;
    }
    parent.scrollLeft = scroll;
  } else {
    parent.scrollTop = scroll;
  }
}
function sumSize(sizeAgg, size, from, to) {
  if (from >= to) {
    return 0;
  }
  const lastTo = size.length, fromAgg = Math.floor(from / aggBucketSize), toAgg = Math.floor((to - 1) / aggBucketSize) + 1;
  let total = sizeAgg.slice(fromAgg, toAgg).reduce(sumFn, 0);
  if (from % aggBucketSize !== 0) {
    total -= size.slice(fromAgg * aggBucketSize, from).reduce(sumFn, 0);
  }
  if (to % aggBucketSize !== 0 && to !== lastTo) {
    total -= size.slice(to, toAgg * aggBucketSize).reduce(sumFn, 0);
  }
  return total;
}
const commonVirtScrollProps = {
  virtualScrollSliceSize: {
    type: [Number, String],
    default: null
  },
  virtualScrollSliceRatioBefore: {
    type: [Number, String],
    default: 1
  },
  virtualScrollSliceRatioAfter: {
    type: [Number, String],
    default: 1
  },
  virtualScrollItemSize: {
    type: [Number, String],
    default: 24
  },
  virtualScrollStickySizeStart: {
    type: [Number, String],
    default: 0
  },
  virtualScrollStickySizeEnd: {
    type: [Number, String],
    default: 0
  },
  tableColspan: [Number, String]
};
const commonVirtPropsList = Object.keys(commonVirtScrollProps);
const useVirtualScrollProps = {
  virtualScrollHorizontal: Boolean,
  onVirtualScroll: Function,
  ...commonVirtScrollProps
};
function useVirtualScroll({
  virtualScrollLength,
  getVirtualScrollTarget,
  getVirtualScrollEl,
  virtualScrollItemSizeComputed
  // optional
}) {
  const vm = getCurrentInstance();
  const { props, emit, proxy } = vm;
  const { $q } = proxy;
  let prevScrollStart, prevToIndex, localScrollViewSize, virtualScrollSizesAgg = [], virtualScrollSizes;
  const virtualScrollPaddingBefore = ref(0);
  const virtualScrollPaddingAfter = ref(0);
  const virtualScrollSliceSizeComputed = ref({});
  const beforeRef = ref(null);
  const afterRef = ref(null);
  const contentRef = ref(null);
  const virtualScrollSliceRange = ref({ from: 0, to: 0 });
  const colspanAttr = computed(() => props.tableColspan !== void 0 ? props.tableColspan : 100);
  if (virtualScrollItemSizeComputed === void 0) {
    virtualScrollItemSizeComputed = computed(() => props.virtualScrollItemSize);
  }
  const needsReset = computed(() => virtualScrollItemSizeComputed.value + ";" + props.virtualScrollHorizontal);
  const needsSliceRecalc = computed(
    () => needsReset.value + ";" + props.virtualScrollSliceRatioBefore + ";" + props.virtualScrollSliceRatioAfter
  );
  watch(needsSliceRecalc, () => {
    setVirtualScrollSize();
  });
  watch(needsReset, reset);
  function reset() {
    localResetVirtualScroll(prevToIndex, true);
  }
  function refresh(toIndex) {
    localResetVirtualScroll(toIndex === void 0 ? prevToIndex : toIndex);
  }
  function scrollTo(toIndex, edge) {
    const scrollEl = getVirtualScrollTarget();
    if (scrollEl === void 0 || scrollEl === null || scrollEl.nodeType === 8) {
      return;
    }
    const scrollDetails = getScrollDetails(
      scrollEl,
      getVirtualScrollEl(),
      beforeRef.value,
      afterRef.value,
      props.virtualScrollHorizontal,
      $q.lang.rtl,
      props.virtualScrollStickySizeStart,
      props.virtualScrollStickySizeEnd
    );
    localScrollViewSize !== scrollDetails.scrollViewSize && setVirtualScrollSize(scrollDetails.scrollViewSize);
    setVirtualScrollSliceRange(
      scrollEl,
      scrollDetails,
      Math.min(virtualScrollLength.value - 1, Math.max(0, parseInt(toIndex, 10) || 0)),
      0,
      scrollToEdges.indexOf(edge) !== -1 ? edge : prevToIndex !== -1 && toIndex > prevToIndex ? "end" : "start"
    );
  }
  function localOnVirtualScrollEvt() {
    const scrollEl = getVirtualScrollTarget();
    if (scrollEl === void 0 || scrollEl === null || scrollEl.nodeType === 8) {
      return;
    }
    const scrollDetails = getScrollDetails(
      scrollEl,
      getVirtualScrollEl(),
      beforeRef.value,
      afterRef.value,
      props.virtualScrollHorizontal,
      $q.lang.rtl,
      props.virtualScrollStickySizeStart,
      props.virtualScrollStickySizeEnd
    ), listLastIndex = virtualScrollLength.value - 1, listEndOffset = scrollDetails.scrollMaxSize - scrollDetails.offsetStart - scrollDetails.offsetEnd - virtualScrollPaddingAfter.value;
    if (prevScrollStart === scrollDetails.scrollStart) {
      return;
    }
    if (scrollDetails.scrollMaxSize <= 0) {
      setVirtualScrollSliceRange(scrollEl, scrollDetails, 0, 0);
      return;
    }
    localScrollViewSize !== scrollDetails.scrollViewSize && setVirtualScrollSize(scrollDetails.scrollViewSize);
    updateVirtualScrollSizes(virtualScrollSliceRange.value.from);
    const scrollMaxStart = Math.floor(scrollDetails.scrollMaxSize - Math.max(scrollDetails.scrollViewSize, scrollDetails.offsetEnd) - Math.min(virtualScrollSizes[listLastIndex], scrollDetails.scrollViewSize / 2));
    if (scrollMaxStart > 0 && Math.ceil(scrollDetails.scrollStart) >= scrollMaxStart) {
      setVirtualScrollSliceRange(
        scrollEl,
        scrollDetails,
        listLastIndex,
        scrollDetails.scrollMaxSize - scrollDetails.offsetEnd - virtualScrollSizesAgg.reduce(sumFn, 0)
      );
      return;
    }
    let toIndex = 0, listOffset = scrollDetails.scrollStart - scrollDetails.offsetStart, offset = listOffset;
    if (listOffset <= listEndOffset && listOffset + scrollDetails.scrollViewSize >= virtualScrollPaddingBefore.value) {
      listOffset -= virtualScrollPaddingBefore.value;
      toIndex = virtualScrollSliceRange.value.from;
      offset = listOffset;
    } else {
      for (let j = 0; listOffset >= virtualScrollSizesAgg[j] && toIndex < listLastIndex; j++) {
        listOffset -= virtualScrollSizesAgg[j];
        toIndex += aggBucketSize;
      }
    }
    while (listOffset > 0 && toIndex < listLastIndex) {
      listOffset -= virtualScrollSizes[toIndex];
      if (listOffset > -scrollDetails.scrollViewSize) {
        toIndex++;
        offset = listOffset;
      } else {
        offset = virtualScrollSizes[toIndex] + listOffset;
      }
    }
    setVirtualScrollSliceRange(
      scrollEl,
      scrollDetails,
      toIndex,
      offset
    );
  }
  function setVirtualScrollSliceRange(scrollEl, scrollDetails, toIndex, offset, align) {
    const alignForce = typeof align === "string" && align.indexOf("-force") !== -1;
    const alignEnd = alignForce === true ? align.replace("-force", "") : align;
    const alignRange = alignEnd !== void 0 ? alignEnd : "start";
    let from = Math.max(0, toIndex - virtualScrollSliceSizeComputed.value[alignRange]), to = from + virtualScrollSliceSizeComputed.value.total;
    if (to > virtualScrollLength.value) {
      to = virtualScrollLength.value;
      from = Math.max(0, to - virtualScrollSliceSizeComputed.value.total);
    }
    prevScrollStart = scrollDetails.scrollStart;
    const rangeChanged = from !== virtualScrollSliceRange.value.from || to !== virtualScrollSliceRange.value.to;
    if (rangeChanged === false && alignEnd === void 0) {
      emitScroll(toIndex);
      return;
    }
    const { activeElement } = document;
    const contentEl = contentRef.value;
    if (rangeChanged === true && contentEl !== null && contentEl !== activeElement && contentEl.contains(activeElement) === true) {
      contentEl.addEventListener("focusout", onBlurRefocusFn);
      setTimeout(() => {
        contentEl !== null && contentEl.removeEventListener("focusout", onBlurRefocusFn);
      });
    }
    setOverflowAnchor(contentEl, toIndex - from);
    const sizeBefore = alignEnd !== void 0 ? virtualScrollSizes.slice(from, toIndex).reduce(sumFn, 0) : 0;
    if (rangeChanged === true) {
      const tempTo = to >= virtualScrollSliceRange.value.from && from <= virtualScrollSliceRange.value.to ? virtualScrollSliceRange.value.to : to;
      virtualScrollSliceRange.value = { from, to: tempTo };
      virtualScrollPaddingBefore.value = sumSize(virtualScrollSizesAgg, virtualScrollSizes, 0, from);
      virtualScrollPaddingAfter.value = sumSize(virtualScrollSizesAgg, virtualScrollSizes, to, virtualScrollLength.value);
      requestAnimationFrame(() => {
        if (virtualScrollSliceRange.value.to !== to && prevScrollStart === scrollDetails.scrollStart) {
          virtualScrollSliceRange.value = { from: virtualScrollSliceRange.value.from, to };
          virtualScrollPaddingAfter.value = sumSize(virtualScrollSizesAgg, virtualScrollSizes, to, virtualScrollLength.value);
        }
      });
    }
    requestAnimationFrame(() => {
      if (prevScrollStart !== scrollDetails.scrollStart) {
        return;
      }
      if (rangeChanged === true) {
        updateVirtualScrollSizes(from);
      }
      const sizeAfter = virtualScrollSizes.slice(from, toIndex).reduce(sumFn, 0), posStart = sizeAfter + scrollDetails.offsetStart + virtualScrollPaddingBefore.value, posEnd = posStart + virtualScrollSizes[toIndex];
      let scrollPosition = posStart + offset;
      if (alignEnd !== void 0) {
        const sizeDiff = sizeAfter - sizeBefore;
        const scrollStart = scrollDetails.scrollStart + sizeDiff;
        scrollPosition = alignForce !== true && scrollStart < posStart && posEnd < scrollStart + scrollDetails.scrollViewSize ? scrollStart : alignEnd === "end" ? posEnd - scrollDetails.scrollViewSize : posStart - (alignEnd === "start" ? 0 : Math.round((scrollDetails.scrollViewSize - virtualScrollSizes[toIndex]) / 2));
      }
      prevScrollStart = scrollPosition;
      setScroll(
        scrollEl,
        scrollPosition,
        props.virtualScrollHorizontal,
        $q.lang.rtl
      );
      emitScroll(toIndex);
    });
  }
  function updateVirtualScrollSizes(from) {
    const contentEl = contentRef.value;
    if (contentEl) {
      const children = filterProto.call(
        contentEl.children,
        (el) => el.classList && el.classList.contains("q-virtual-scroll--skip") === false
      ), childrenLength = children.length, sizeFn = props.virtualScrollHorizontal === true ? (el) => el.getBoundingClientRect().width : (el) => el.offsetHeight;
      let index = from, size, diff;
      for (let i = 0; i < childrenLength; ) {
        size = sizeFn(children[i]);
        i++;
        while (i < childrenLength && children[i].classList.contains("q-virtual-scroll--with-prev") === true) {
          size += sizeFn(children[i]);
          i++;
        }
        diff = size - virtualScrollSizes[index];
        if (diff !== 0) {
          virtualScrollSizes[index] += diff;
          virtualScrollSizesAgg[Math.floor(index / aggBucketSize)] += diff;
        }
        index++;
      }
    }
  }
  function onBlurRefocusFn() {
    contentRef.value !== null && contentRef.value !== void 0 && contentRef.value.focus();
  }
  function localResetVirtualScroll(toIndex, fullReset) {
    const defaultSize = 1 * virtualScrollItemSizeComputed.value;
    if (fullReset === true || Array.isArray(virtualScrollSizes) === false) {
      virtualScrollSizes = [];
    }
    const oldVirtualScrollSizesLength = virtualScrollSizes.length;
    virtualScrollSizes.length = virtualScrollLength.value;
    for (let i = virtualScrollLength.value - 1; i >= oldVirtualScrollSizesLength; i--) {
      virtualScrollSizes[i] = defaultSize;
    }
    const jMax = Math.floor((virtualScrollLength.value - 1) / aggBucketSize);
    virtualScrollSizesAgg = [];
    for (let j = 0; j <= jMax; j++) {
      let size = 0;
      const iMax = Math.min((j + 1) * aggBucketSize, virtualScrollLength.value);
      for (let i = j * aggBucketSize; i < iMax; i++) {
        size += virtualScrollSizes[i];
      }
      virtualScrollSizesAgg.push(size);
    }
    prevToIndex = -1;
    prevScrollStart = void 0;
    virtualScrollPaddingBefore.value = sumSize(virtualScrollSizesAgg, virtualScrollSizes, 0, virtualScrollSliceRange.value.from);
    virtualScrollPaddingAfter.value = sumSize(virtualScrollSizesAgg, virtualScrollSizes, virtualScrollSliceRange.value.to, virtualScrollLength.value);
    if (toIndex >= 0) {
      updateVirtualScrollSizes(virtualScrollSliceRange.value.from);
      nextTick(() => {
        scrollTo(toIndex);
      });
    } else {
      onVirtualScrollEvt();
    }
  }
  function setVirtualScrollSize(scrollViewSize) {
    if (scrollViewSize === void 0 && typeof window !== "undefined") {
      const scrollEl = getVirtualScrollTarget();
      if (scrollEl !== void 0 && scrollEl !== null && scrollEl.nodeType !== 8) {
        scrollViewSize = getScrollDetails(
          scrollEl,
          getVirtualScrollEl(),
          beforeRef.value,
          afterRef.value,
          props.virtualScrollHorizontal,
          $q.lang.rtl,
          props.virtualScrollStickySizeStart,
          props.virtualScrollStickySizeEnd
        ).scrollViewSize;
      }
    }
    localScrollViewSize = scrollViewSize;
    const virtualScrollSliceRatioBefore = parseFloat(props.virtualScrollSliceRatioBefore) || 0;
    const virtualScrollSliceRatioAfter = parseFloat(props.virtualScrollSliceRatioAfter) || 0;
    const multiplier = 1 + virtualScrollSliceRatioBefore + virtualScrollSliceRatioAfter;
    const view = scrollViewSize === void 0 || scrollViewSize <= 0 ? 1 : Math.ceil(scrollViewSize / virtualScrollItemSizeComputed.value);
    const baseSize = Math.max(
      1,
      view,
      Math.ceil((props.virtualScrollSliceSize > 0 ? props.virtualScrollSliceSize : 10) / multiplier)
    );
    virtualScrollSliceSizeComputed.value = {
      total: Math.ceil(baseSize * multiplier),
      start: Math.ceil(baseSize * virtualScrollSliceRatioBefore),
      center: Math.ceil(baseSize * (0.5 + virtualScrollSliceRatioBefore)),
      end: Math.ceil(baseSize * (1 + virtualScrollSliceRatioBefore)),
      view
    };
  }
  function padVirtualScroll(tag, content) {
    const paddingSize = props.virtualScrollHorizontal === true ? "width" : "height";
    const style = {
      ["--q-virtual-scroll-item-" + paddingSize]: virtualScrollItemSizeComputed.value + "px"
    };
    return [
      tag === "tbody" ? h(tag, {
        class: "q-virtual-scroll__padding",
        key: "before",
        ref: beforeRef
      }, [
        h("tr", [
          h("td", {
            style: { [paddingSize]: `${virtualScrollPaddingBefore.value}px`, ...style },
            colspan: colspanAttr.value
          })
        ])
      ]) : h(tag, {
        class: "q-virtual-scroll__padding",
        key: "before",
        ref: beforeRef,
        style: { [paddingSize]: `${virtualScrollPaddingBefore.value}px`, ...style }
      }),
      h(tag, {
        class: "q-virtual-scroll__content",
        key: "content",
        ref: contentRef,
        tabindex: -1
      }, content.flat()),
      tag === "tbody" ? h(tag, {
        class: "q-virtual-scroll__padding",
        key: "after",
        ref: afterRef
      }, [
        h("tr", [
          h("td", {
            style: { [paddingSize]: `${virtualScrollPaddingAfter.value}px`, ...style },
            colspan: colspanAttr.value
          })
        ])
      ]) : h(tag, {
        class: "q-virtual-scroll__padding",
        key: "after",
        ref: afterRef,
        style: { [paddingSize]: `${virtualScrollPaddingAfter.value}px`, ...style }
      })
    ];
  }
  function emitScroll(index) {
    if (prevToIndex !== index) {
      props.onVirtualScroll !== void 0 && emit("virtualScroll", {
        index,
        from: virtualScrollSliceRange.value.from,
        to: virtualScrollSliceRange.value.to - 1,
        direction: index < prevToIndex ? "decrease" : "increase",
        ref: proxy
      });
      prevToIndex = index;
    }
  }
  setVirtualScrollSize();
  const onVirtualScrollEvt = debounce(
    localOnVirtualScrollEvt,
    $q.platform.is.ios === true ? 120 : 35
  );
  onBeforeMount(() => {
    setVirtualScrollSize();
  });
  let shouldActivate = false;
  onDeactivated(() => {
    shouldActivate = true;
  });
  onActivated(() => {
    if (shouldActivate !== true)
      return;
    const scrollEl = getVirtualScrollTarget();
    if (prevScrollStart !== void 0 && scrollEl !== void 0 && scrollEl !== null && scrollEl.nodeType !== 8) {
      setScroll(
        scrollEl,
        prevScrollStart,
        props.virtualScrollHorizontal,
        $q.lang.rtl
      );
    } else {
      scrollTo(prevToIndex);
    }
  });
  onBeforeUnmount(() => {
    onVirtualScrollEvt.cancel();
  });
  Object.assign(proxy, { scrollTo, reset, refresh });
  return {
    virtualScrollSliceRange,
    virtualScrollSliceSizeComputed,
    setVirtualScrollSize,
    onVirtualScrollEvt,
    localResetVirtualScroll,
    padVirtualScroll,
    scrollTo,
    reset,
    refresh
  };
}
const comps = {
  list: QList,
  table: QMarkupTable
};
const typeOptions = ["list", "table", "__qtable"];
const QVirtualScroll = createComponent({
  name: "QVirtualScroll",
  props: {
    ...useVirtualScrollProps,
    type: {
      type: String,
      default: "list",
      validator: (v) => typeOptions.includes(v)
    },
    items: {
      type: Array,
      default: () => []
    },
    itemsFn: Function,
    itemsSize: Number,
    scrollTarget: {
      default: void 0
    }
  },
  setup(props, { slots, attrs }) {
    let localScrollTarget;
    const rootRef = ref(null);
    const virtualScrollLength = computed(() => props.itemsSize >= 0 && props.itemsFn !== void 0 ? parseInt(props.itemsSize, 10) : Array.isArray(props.items) ? props.items.length : 0);
    const {
      virtualScrollSliceRange,
      localResetVirtualScroll,
      padVirtualScroll,
      onVirtualScrollEvt
    } = useVirtualScroll({
      virtualScrollLength,
      getVirtualScrollTarget,
      getVirtualScrollEl
    });
    const virtualScrollScope = computed(() => {
      if (virtualScrollLength.value === 0) {
        return [];
      }
      const mapFn = (item, i) => ({
        index: virtualScrollSliceRange.value.from + i,
        item
      });
      return props.itemsFn === void 0 ? props.items.slice(virtualScrollSliceRange.value.from, virtualScrollSliceRange.value.to).map(mapFn) : props.itemsFn(virtualScrollSliceRange.value.from, virtualScrollSliceRange.value.to - virtualScrollSliceRange.value.from).map(mapFn);
    });
    const classes = computed(
      () => "q-virtual-scroll q-virtual-scroll" + (props.virtualScrollHorizontal === true ? "--horizontal" : "--vertical") + (props.scrollTarget !== void 0 ? "" : " scroll")
    );
    const attributes = computed(() => props.scrollTarget !== void 0 ? {} : { tabindex: 0 });
    watch(virtualScrollLength, () => {
      localResetVirtualScroll();
    });
    watch(() => props.scrollTarget, () => {
      unconfigureScrollTarget();
      configureScrollTarget();
    });
    function getVirtualScrollEl() {
      return rootRef.value.$el || rootRef.value;
    }
    function getVirtualScrollTarget() {
      return localScrollTarget;
    }
    function configureScrollTarget() {
      localScrollTarget = getScrollTarget(getVirtualScrollEl(), props.scrollTarget);
      localScrollTarget.addEventListener("scroll", onVirtualScrollEvt, listenOpts.passive);
    }
    function unconfigureScrollTarget() {
      if (localScrollTarget !== void 0) {
        localScrollTarget.removeEventListener("scroll", onVirtualScrollEvt, listenOpts.passive);
        localScrollTarget = void 0;
      }
    }
    function __getVirtualChildren() {
      let child = padVirtualScroll(
        props.type === "list" ? "div" : "tbody",
        virtualScrollScope.value.map(slots.default)
      );
      if (slots.before !== void 0) {
        child = slots.before().concat(child);
      }
      return hMergeSlot(slots.after, child);
    }
    onBeforeMount(() => {
      localResetVirtualScroll();
    });
    onMounted(() => {
      configureScrollTarget();
    });
    onActivated(() => {
      configureScrollTarget();
    });
    onDeactivated(() => {
      unconfigureScrollTarget();
    });
    onBeforeUnmount(() => {
      unconfigureScrollTarget();
    });
    return () => {
      if (slots.default === void 0) {
        console.error("QVirtualScroll: default scoped slot is required for rendering");
        return;
      }
      return props.type === "__qtable" ? getTableMiddle(
        { ref: rootRef, class: "q-table__middle " + classes.value },
        __getVirtualChildren()
      ) : h(comps[props.type], {
        ...attrs,
        ref: rootRef,
        class: [attrs.class, classes.value],
        ...attributes.value
      }, __getVirtualChildren);
    };
  }
});
const QField = createComponent({
  name: "QField",
  inheritAttrs: false,
  props: {
    ...useFieldProps,
    tag: {
      type: String,
      default: "label"
    }
  },
  emits: useFieldEmits,
  setup() {
    return useField(
      useFieldState({
        requiredForAttr: false,
        tagProp: true
      })
    );
  }
});
const defaultSizes$1 = {
  xs: 8,
  sm: 10,
  md: 14,
  lg: 20,
  xl: 24
};
const QChip = createComponent({
  name: "QChip",
  props: {
    ...useDarkProps,
    ...useSizeProps,
    dense: Boolean,
    icon: String,
    iconRight: String,
    iconRemove: String,
    iconSelected: String,
    label: [String, Number],
    color: String,
    textColor: String,
    modelValue: {
      type: Boolean,
      default: true
    },
    selected: {
      type: Boolean,
      default: null
    },
    square: Boolean,
    outline: Boolean,
    clickable: Boolean,
    removable: Boolean,
    removeAriaLabel: String,
    tabindex: [String, Number],
    disable: Boolean,
    ripple: {
      type: [Boolean, Object],
      default: true
    }
  },
  emits: ["update:modelValue", "update:selected", "remove", "click"],
  setup(props, { slots, emit }) {
    const { proxy: { $q } } = getCurrentInstance();
    const isDark = useDark(props, $q);
    const sizeStyle = useSize(props, defaultSizes$1);
    const hasLeftIcon = computed(() => props.selected === true || props.icon !== void 0);
    const leftIcon = computed(() => props.selected === true ? props.iconSelected || $q.iconSet.chip.selected : props.icon);
    const removeIcon = computed(() => props.iconRemove || $q.iconSet.chip.remove);
    const isClickable = computed(
      () => props.disable === false && (props.clickable === true || props.selected !== null)
    );
    const classes = computed(() => {
      const text = props.outline === true ? props.color || props.textColor : props.textColor;
      return "q-chip row inline no-wrap items-center" + (props.outline === false && props.color !== void 0 ? ` bg-${props.color}` : "") + (text ? ` text-${text} q-chip--colored` : "") + (props.disable === true ? " disabled" : "") + (props.dense === true ? " q-chip--dense" : "") + (props.outline === true ? " q-chip--outline" : "") + (props.selected === true ? " q-chip--selected" : "") + (isClickable.value === true ? " q-chip--clickable cursor-pointer non-selectable q-hoverable" : "") + (props.square === true ? " q-chip--square" : "") + (isDark.value === true ? " q-chip--dark q-dark" : "");
    });
    const attributes = computed(() => {
      const chip = props.disable === true ? { tabindex: -1, "aria-disabled": "true" } : { tabindex: props.tabindex || 0 };
      const remove = {
        ...chip,
        role: "button",
        "aria-hidden": "false",
        "aria-label": props.removeAriaLabel || $q.lang.label.remove
      };
      return { chip, remove };
    });
    function onKeyup2(e) {
      e.keyCode === 13 && onClick(e);
    }
    function onClick(e) {
      if (!props.disable) {
        emit("update:selected", !props.selected);
        emit("click", e);
      }
    }
    function onRemove(e) {
      if (e.keyCode === void 0 || e.keyCode === 13) {
        stopAndPrevent(e);
        if (props.disable === false) {
          emit("update:modelValue", false);
          emit("remove");
        }
      }
    }
    function getContent() {
      const child = [];
      isClickable.value === true && child.push(
        h("div", { class: "q-focus-helper" })
      );
      hasLeftIcon.value === true && child.push(
        h(QIcon, {
          class: "q-chip__icon q-chip__icon--left",
          name: leftIcon.value
        })
      );
      const label = props.label !== void 0 ? [h("div", { class: "ellipsis" }, [props.label])] : void 0;
      child.push(
        h("div", {
          class: "q-chip__content col row no-wrap items-center q-anchor--skip"
        }, hMergeSlotSafely(slots.default, label))
      );
      props.iconRight && child.push(
        h(QIcon, {
          class: "q-chip__icon q-chip__icon--right",
          name: props.iconRight
        })
      );
      props.removable === true && child.push(
        h(QIcon, {
          class: "q-chip__icon q-chip__icon--remove cursor-pointer",
          name: removeIcon.value,
          ...attributes.value.remove,
          onClick: onRemove,
          onKeyup: onRemove
        })
      );
      return child;
    }
    return () => {
      if (props.modelValue === false)
        return;
      const data = {
        class: classes.value,
        style: sizeStyle.value
      };
      isClickable.value === true && Object.assign(
        data,
        attributes.value.chip,
        { onClick, onKeyup: onKeyup2 }
      );
      return hDir(
        "div",
        data,
        getContent(),
        "ripple",
        props.ripple !== false && props.disable !== true,
        () => [[Ripple, props.ripple]]
      );
    };
  }
});
const useAnchorProps = {
  target: {
    default: true
  },
  noParentEvent: Boolean,
  contextMenu: Boolean
};
function useAnchor({
  showing,
  avoidEmit,
  // required for QPopupProxy (true)
  configureAnchorEl
  // optional
}) {
  const { props, proxy, emit } = getCurrentInstance();
  const anchorEl = ref(null);
  let touchTimer = null;
  function canShow(evt) {
    return anchorEl.value === null ? false : evt === void 0 || evt.touches === void 0 || evt.touches.length <= 1;
  }
  const anchorEvents = {};
  if (configureAnchorEl === void 0) {
    Object.assign(anchorEvents, {
      hide(evt) {
        proxy.hide(evt);
      },
      toggle(evt) {
        proxy.toggle(evt);
        evt.qAnchorHandled = true;
      },
      toggleKey(evt) {
        isKeyCode(evt, 13) === true && anchorEvents.toggle(evt);
      },
      contextClick(evt) {
        proxy.hide(evt);
        prevent(evt);
        nextTick(() => {
          proxy.show(evt);
          evt.qAnchorHandled = true;
        });
      },
      prevent,
      mobileTouch(evt) {
        anchorEvents.mobileCleanup(evt);
        if (canShow(evt) !== true) {
          return;
        }
        proxy.hide(evt);
        anchorEl.value.classList.add("non-selectable");
        const target2 = evt.target;
        addEvt(anchorEvents, "anchor", [
          [target2, "touchmove", "mobileCleanup", "passive"],
          [target2, "touchend", "mobileCleanup", "passive"],
          [target2, "touchcancel", "mobileCleanup", "passive"],
          [anchorEl.value, "contextmenu", "prevent", "notPassive"]
        ]);
        touchTimer = setTimeout(() => {
          touchTimer = null;
          proxy.show(evt);
          evt.qAnchorHandled = true;
        }, 300);
      },
      mobileCleanup(evt) {
        anchorEl.value.classList.remove("non-selectable");
        if (touchTimer !== null) {
          clearTimeout(touchTimer);
          touchTimer = null;
        }
        if (showing.value === true && evt !== void 0) {
          clearSelection();
        }
      }
    });
    configureAnchorEl = function(context = props.contextMenu) {
      if (props.noParentEvent === true || anchorEl.value === null)
        return;
      let evts;
      if (context === true) {
        if (proxy.$q.platform.is.mobile === true) {
          evts = [
            [anchorEl.value, "touchstart", "mobileTouch", "passive"]
          ];
        } else {
          evts = [
            [anchorEl.value, "mousedown", "hide", "passive"],
            [anchorEl.value, "contextmenu", "contextClick", "notPassive"]
          ];
        }
      } else {
        evts = [
          [anchorEl.value, "click", "toggle", "passive"],
          [anchorEl.value, "keyup", "toggleKey", "passive"]
        ];
      }
      addEvt(anchorEvents, "anchor", evts);
    };
  }
  function unconfigureAnchorEl() {
    cleanEvt(anchorEvents, "anchor");
  }
  function setAnchorEl(el) {
    anchorEl.value = el;
    while (anchorEl.value.classList.contains("q-anchor--skip")) {
      anchorEl.value = anchorEl.value.parentNode;
    }
    configureAnchorEl();
  }
  function pickAnchorEl() {
    if (props.target === false || props.target === "" || proxy.$el.parentNode === null) {
      anchorEl.value = null;
    } else if (props.target === true) {
      setAnchorEl(proxy.$el.parentNode);
    } else {
      let el = props.target;
      if (typeof props.target === "string") {
        try {
          el = document.querySelector(props.target);
        } catch (err) {
          el = void 0;
        }
      }
      if (el !== void 0 && el !== null) {
        anchorEl.value = el.$el || el;
        configureAnchorEl();
      } else {
        anchorEl.value = null;
        console.error(`Anchor: target "${props.target}" not found`);
      }
    }
  }
  watch(() => props.contextMenu, (val) => {
    if (anchorEl.value !== null) {
      unconfigureAnchorEl();
      configureAnchorEl(val);
    }
  });
  watch(() => props.target, () => {
    if (anchorEl.value !== null) {
      unconfigureAnchorEl();
    }
    pickAnchorEl();
  });
  watch(() => props.noParentEvent, (val) => {
    if (anchorEl.value !== null) {
      if (val === true) {
        unconfigureAnchorEl();
      } else {
        configureAnchorEl();
      }
    }
  });
  onMounted(() => {
    pickAnchorEl();
    if (avoidEmit !== true && props.modelValue === true && anchorEl.value === null) {
      emit("update:modelValue", false);
    }
  });
  onBeforeUnmount(() => {
    touchTimer !== null && clearTimeout(touchTimer);
    unconfigureAnchorEl();
  });
  return {
    anchorEl,
    canShow,
    anchorEvents
  };
}
function useScrollTarget(props, configureScrollTarget) {
  const localScrollTarget = ref(null);
  let scrollFn;
  function changeScrollEvent(scrollTarget, fn) {
    const fnProp = `${fn !== void 0 ? "add" : "remove"}EventListener`;
    const fnHandler = fn !== void 0 ? fn : scrollFn;
    if (scrollTarget !== window) {
      scrollTarget[fnProp]("scroll", fnHandler, listenOpts.passive);
    }
    window[fnProp]("scroll", fnHandler, listenOpts.passive);
    scrollFn = fn;
  }
  function unconfigureScrollTarget() {
    if (localScrollTarget.value !== null) {
      changeScrollEvent(localScrollTarget.value);
      localScrollTarget.value = null;
    }
  }
  const noParentEventWatcher = watch(() => props.noParentEvent, () => {
    if (localScrollTarget.value !== null) {
      unconfigureScrollTarget();
      configureScrollTarget();
    }
  });
  onBeforeUnmount(noParentEventWatcher);
  return {
    localScrollTarget,
    unconfigureScrollTarget,
    changeScrollEvent
  };
}
let portalIndex = 1;
let target = document.body;
function createGlobalNode(id, portalType) {
  const el = document.createElement("div");
  el.id = portalType !== void 0 ? `q-portal--${portalType}--${portalIndex++}` : id;
  if (globalConfig.globalNodes !== void 0) {
    const cls = globalConfig.globalNodes.class;
    if (cls !== void 0) {
      el.className = cls;
    }
  }
  target.appendChild(el);
  return el;
}
function removeGlobalNode(el) {
  el.remove();
}
const portalProxyList = [];
function closePortalMenus(proxy, evt) {
  do {
    if (proxy.$options.name === "QMenu") {
      proxy.hide(evt);
      if (proxy.$props.separateClosePopup === true) {
        return getParentProxy(proxy);
      }
    } else if (proxy.__qPortal === true) {
      const parent = getParentProxy(proxy);
      if (parent !== void 0 && parent.$options.name === "QPopupProxy") {
        proxy.hide(evt);
        return parent;
      } else {
        return proxy;
      }
    }
    proxy = getParentProxy(proxy);
  } while (proxy !== void 0 && proxy !== null);
}
function isOnGlobalDialog(vm) {
  vm = vm.parent;
  while (vm !== void 0 && vm !== null) {
    if (vm.type.name === "QGlobalDialog") {
      return true;
    }
    if (vm.type.name === "QDialog" || vm.type.name === "QMenu") {
      return false;
    }
    vm = vm.parent;
  }
  return false;
}
function usePortal(vm, innerRef, renderPortalContent, type) {
  const portalIsActive = ref(false);
  const portalIsAccessible = ref(false);
  let portalEl = null;
  const focusObj = {};
  const onGlobalDialog = type === "dialog" && isOnGlobalDialog(vm);
  function showPortal(isReady) {
    if (isReady === true) {
      removeFocusWaitFlag(focusObj);
      portalIsAccessible.value = true;
      return;
    }
    portalIsAccessible.value = false;
    if (portalIsActive.value === false) {
      if (onGlobalDialog === false && portalEl === null) {
        portalEl = createGlobalNode(false, type);
      }
      portalIsActive.value = true;
      portalProxyList.push(vm.proxy);
      addFocusWaitFlag(focusObj);
    }
  }
  function hidePortal(isReady) {
    portalIsAccessible.value = false;
    if (isReady !== true)
      return;
    removeFocusWaitFlag(focusObj);
    portalIsActive.value = false;
    const index = portalProxyList.indexOf(vm.proxy);
    if (index !== -1) {
      portalProxyList.splice(index, 1);
    }
    if (portalEl !== null) {
      removeGlobalNode(portalEl);
      portalEl = null;
    }
  }
  onUnmounted(() => {
    hidePortal(true);
  });
  vm.proxy.__qPortal = true;
  injectProp(vm.proxy, "contentEl", () => innerRef.value);
  return {
    showPortal,
    hidePortal,
    portalIsActive,
    portalIsAccessible,
    renderPortal: () => onGlobalDialog === true ? renderPortalContent() : portalIsActive.value === true ? [h(Teleport, { to: portalEl }, renderPortalContent())] : void 0
  };
}
const useTransitionProps = {
  transitionShow: {
    type: String,
    default: "fade"
  },
  transitionHide: {
    type: String,
    default: "fade"
  },
  transitionDuration: {
    type: [String, Number],
    default: 300
  }
};
function useTransition(props, defaultShowFn = () => {
}, defaultHideFn = () => {
}) {
  return {
    transitionProps: computed(() => {
      const show = `q-transition--${props.transitionShow || defaultShowFn()}`;
      const hide = `q-transition--${props.transitionHide || defaultHideFn()}`;
      return {
        appear: true,
        enterFromClass: `${show}-enter-from`,
        enterActiveClass: `${show}-enter-active`,
        enterToClass: `${show}-enter-to`,
        leaveFromClass: `${hide}-leave-from`,
        leaveActiveClass: `${hide}-leave-active`,
        leaveToClass: `${hide}-leave-to`
      };
    }),
    transitionStyle: computed(() => `--q-transition-duration: ${props.transitionDuration}ms`)
  };
}
function useTick() {
  let tickFn;
  const vm = getCurrentInstance();
  function removeTick() {
    tickFn = void 0;
  }
  onDeactivated(removeTick);
  onBeforeUnmount(removeTick);
  return {
    removeTick,
    registerTick(fn) {
      tickFn = fn;
      nextTick(() => {
        if (tickFn === fn) {
          vmIsDestroyed(vm) === false && tickFn();
          tickFn = void 0;
        }
      });
    }
  };
}
const handlers$1 = [];
let escDown;
function onKeydown(evt) {
  escDown = evt.keyCode === 27;
}
function onBlur() {
  if (escDown === true) {
    escDown = false;
  }
}
function onKeyup(evt) {
  if (escDown === true) {
    escDown = false;
    if (isKeyCode(evt, 27) === true) {
      handlers$1[handlers$1.length - 1](evt);
    }
  }
}
function update(action) {
  window[action]("keydown", onKeydown);
  window[action]("blur", onBlur);
  window[action]("keyup", onKeyup);
  escDown = false;
}
function addEscapeKey(fn) {
  if (client.is.desktop === true) {
    handlers$1.push(fn);
    if (handlers$1.length === 1) {
      update("addEventListener");
    }
  }
}
function removeEscapeKey(fn) {
  const index = handlers$1.indexOf(fn);
  if (index !== -1) {
    handlers$1.splice(index, 1);
    if (handlers$1.length === 0) {
      update("removeEventListener");
    }
  }
}
const handlers = [];
function trigger(e) {
  handlers[handlers.length - 1](e);
}
function addFocusout(fn) {
  if (client.is.desktop === true) {
    handlers.push(fn);
    if (handlers.length === 1) {
      document.body.addEventListener("focusin", trigger);
    }
  }
}
function removeFocusout(fn) {
  const index = handlers.indexOf(fn);
  if (index !== -1) {
    handlers.splice(index, 1);
    if (handlers.length === 0) {
      document.body.removeEventListener("focusin", trigger);
    }
  }
}
const { notPassiveCapture } = listenOpts, registeredList = [];
function globalHandler(evt) {
  const target2 = evt.target;
  if (target2 === void 0 || target2.nodeType === 8 || target2.classList.contains("no-pointer-events") === true) {
    return;
  }
  let portalIndex2 = portalProxyList.length - 1;
  while (portalIndex2 >= 0) {
    const proxy = portalProxyList[portalIndex2].$;
    if (proxy.type.name === "QTooltip") {
      portalIndex2--;
      continue;
    }
    if (proxy.type.name !== "QDialog") {
      break;
    }
    if (proxy.props.seamless !== true) {
      return;
    }
    portalIndex2--;
  }
  for (let i = registeredList.length - 1; i >= 0; i--) {
    const state = registeredList[i];
    if ((state.anchorEl.value === null || state.anchorEl.value.contains(target2) === false) && (target2 === document.body || state.innerRef.value !== null && state.innerRef.value.contains(target2) === false)) {
      evt.qClickOutside = true;
      state.onClickOutside(evt);
    } else {
      return;
    }
  }
}
function addClickOutside(clickOutsideProps) {
  registeredList.push(clickOutsideProps);
  if (registeredList.length === 1) {
    document.addEventListener("mousedown", globalHandler, notPassiveCapture);
    document.addEventListener("touchstart", globalHandler, notPassiveCapture);
  }
}
function removeClickOutside(clickOutsideProps) {
  const index = registeredList.findIndex((h2) => h2 === clickOutsideProps);
  if (index !== -1) {
    registeredList.splice(index, 1);
    if (registeredList.length === 0) {
      document.removeEventListener("mousedown", globalHandler, notPassiveCapture);
      document.removeEventListener("touchstart", globalHandler, notPassiveCapture);
    }
  }
}
let vpLeft, vpTop;
function validatePosition(pos) {
  const parts = pos.split(" ");
  if (parts.length !== 2) {
    return false;
  }
  if (["top", "center", "bottom"].includes(parts[0]) !== true) {
    console.error("Anchor/Self position must start with one of top/center/bottom");
    return false;
  }
  if (["left", "middle", "right", "start", "end"].includes(parts[1]) !== true) {
    console.error("Anchor/Self position must end with one of left/middle/right/start/end");
    return false;
  }
  return true;
}
function validateOffset(val) {
  if (!val) {
    return true;
  }
  if (val.length !== 2) {
    return false;
  }
  if (typeof val[0] !== "number" || typeof val[1] !== "number") {
    return false;
  }
  return true;
}
const horizontalPos = {
  "start#ltr": "left",
  "start#rtl": "right",
  "end#ltr": "right",
  "end#rtl": "left"
};
["left", "middle", "right"].forEach((pos) => {
  horizontalPos[`${pos}#ltr`] = pos;
  horizontalPos[`${pos}#rtl`] = pos;
});
function parsePosition(pos, rtl) {
  const parts = pos.split(" ");
  return {
    vertical: parts[0],
    horizontal: horizontalPos[`${parts[1]}#${rtl === true ? "rtl" : "ltr"}`]
  };
}
function getAnchorProps(el, offset) {
  let { top, left, right, bottom, width: width2, height } = el.getBoundingClientRect();
  if (offset !== void 0) {
    top -= offset[1];
    left -= offset[0];
    bottom += offset[1];
    right += offset[0];
    width2 += offset[0];
    height += offset[1];
  }
  return {
    top,
    bottom,
    height,
    left,
    right,
    width: width2,
    middle: left + (right - left) / 2,
    center: top + (bottom - top) / 2
  };
}
function getAbsoluteAnchorProps(el, absoluteOffset, offset) {
  let { top, left } = el.getBoundingClientRect();
  top += absoluteOffset.top;
  left += absoluteOffset.left;
  if (offset !== void 0) {
    top += offset[1];
    left += offset[0];
  }
  return {
    top,
    bottom: top + 1,
    height: 1,
    left,
    right: left + 1,
    width: 1,
    middle: left,
    center: top
  };
}
function getTargetProps(width2, height) {
  return {
    top: 0,
    center: height / 2,
    bottom: height,
    left: 0,
    middle: width2 / 2,
    right: width2
  };
}
function getTopLeftProps(anchorProps, targetProps, anchorOrigin, selfOrigin) {
  return {
    top: anchorProps[anchorOrigin.vertical] - targetProps[selfOrigin.vertical],
    left: anchorProps[anchorOrigin.horizontal] - targetProps[selfOrigin.horizontal]
  };
}
function setPosition(cfg, retryNumber = 0) {
  if (cfg.targetEl === null || cfg.anchorEl === null || retryNumber > 5) {
    return;
  }
  if (cfg.targetEl.offsetHeight === 0 || cfg.targetEl.offsetWidth === 0) {
    setTimeout(() => {
      setPosition(cfg, retryNumber + 1);
    }, 10);
    return;
  }
  const {
    targetEl,
    offset,
    anchorEl,
    anchorOrigin,
    selfOrigin,
    absoluteOffset,
    fit,
    cover,
    maxHeight,
    maxWidth
  } = cfg;
  if (client.is.ios === true && window.visualViewport !== void 0) {
    const el = document.body.style;
    const { offsetLeft: left, offsetTop: top } = window.visualViewport;
    if (left !== vpLeft) {
      el.setProperty("--q-pe-left", left + "px");
      vpLeft = left;
    }
    if (top !== vpTop) {
      el.setProperty("--q-pe-top", top + "px");
      vpTop = top;
    }
  }
  const { scrollLeft, scrollTop } = targetEl;
  const anchorProps = absoluteOffset === void 0 ? getAnchorProps(anchorEl, cover === true ? [0, 0] : offset) : getAbsoluteAnchorProps(anchorEl, absoluteOffset, offset);
  Object.assign(targetEl.style, {
    top: 0,
    left: 0,
    minWidth: null,
    minHeight: null,
    maxWidth: maxWidth || "100vw",
    maxHeight: maxHeight || "100vh",
    visibility: "visible"
  });
  const { offsetWidth: origElWidth, offsetHeight: origElHeight } = targetEl;
  const { elWidth, elHeight } = fit === true || cover === true ? { elWidth: Math.max(anchorProps.width, origElWidth), elHeight: cover === true ? Math.max(anchorProps.height, origElHeight) : origElHeight } : { elWidth: origElWidth, elHeight: origElHeight };
  let elStyle = { maxWidth, maxHeight };
  if (fit === true || cover === true) {
    elStyle.minWidth = anchorProps.width + "px";
    if (cover === true) {
      elStyle.minHeight = anchorProps.height + "px";
    }
  }
  Object.assign(targetEl.style, elStyle);
  const targetProps = getTargetProps(elWidth, elHeight);
  let props = getTopLeftProps(anchorProps, targetProps, anchorOrigin, selfOrigin);
  if (absoluteOffset === void 0 || offset === void 0) {
    applyBoundaries(props, anchorProps, targetProps, anchorOrigin, selfOrigin);
  } else {
    const { top, left } = props;
    applyBoundaries(props, anchorProps, targetProps, anchorOrigin, selfOrigin);
    let hasChanged = false;
    if (props.top !== top) {
      hasChanged = true;
      const offsetY = 2 * offset[1];
      anchorProps.center = anchorProps.top -= offsetY;
      anchorProps.bottom -= offsetY + 2;
    }
    if (props.left !== left) {
      hasChanged = true;
      const offsetX = 2 * offset[0];
      anchorProps.middle = anchorProps.left -= offsetX;
      anchorProps.right -= offsetX + 2;
    }
    if (hasChanged === true) {
      props = getTopLeftProps(anchorProps, targetProps, anchorOrigin, selfOrigin);
      applyBoundaries(props, anchorProps, targetProps, anchorOrigin, selfOrigin);
    }
  }
  elStyle = {
    top: props.top + "px",
    left: props.left + "px"
  };
  if (props.maxHeight !== void 0) {
    elStyle.maxHeight = props.maxHeight + "px";
    if (anchorProps.height > props.maxHeight) {
      elStyle.minHeight = elStyle.maxHeight;
    }
  }
  if (props.maxWidth !== void 0) {
    elStyle.maxWidth = props.maxWidth + "px";
    if (anchorProps.width > props.maxWidth) {
      elStyle.minWidth = elStyle.maxWidth;
    }
  }
  Object.assign(targetEl.style, elStyle);
  if (targetEl.scrollTop !== scrollTop) {
    targetEl.scrollTop = scrollTop;
  }
  if (targetEl.scrollLeft !== scrollLeft) {
    targetEl.scrollLeft = scrollLeft;
  }
}
function applyBoundaries(props, anchorProps, targetProps, anchorOrigin, selfOrigin) {
  const currentHeight = targetProps.bottom, currentWidth = targetProps.right, margin = getScrollbarWidth(), innerHeight = window.innerHeight - margin, innerWidth = document.body.clientWidth;
  if (props.top < 0 || props.top + currentHeight > innerHeight) {
    if (selfOrigin.vertical === "center") {
      props.top = anchorProps[anchorOrigin.vertical] > innerHeight / 2 ? Math.max(0, innerHeight - currentHeight) : 0;
      props.maxHeight = Math.min(currentHeight, innerHeight);
    } else if (anchorProps[anchorOrigin.vertical] > innerHeight / 2) {
      const anchorY = Math.min(
        innerHeight,
        anchorOrigin.vertical === "center" ? anchorProps.center : anchorOrigin.vertical === selfOrigin.vertical ? anchorProps.bottom : anchorProps.top
      );
      props.maxHeight = Math.min(currentHeight, anchorY);
      props.top = Math.max(0, anchorY - currentHeight);
    } else {
      props.top = Math.max(
        0,
        anchorOrigin.vertical === "center" ? anchorProps.center : anchorOrigin.vertical === selfOrigin.vertical ? anchorProps.top : anchorProps.bottom
      );
      props.maxHeight = Math.min(currentHeight, innerHeight - props.top);
    }
  }
  if (props.left < 0 || props.left + currentWidth > innerWidth) {
    props.maxWidth = Math.min(currentWidth, innerWidth);
    if (selfOrigin.horizontal === "middle") {
      props.left = anchorProps[anchorOrigin.horizontal] > innerWidth / 2 ? Math.max(0, innerWidth - currentWidth) : 0;
    } else if (anchorProps[anchorOrigin.horizontal] > innerWidth / 2) {
      const anchorX = Math.min(
        innerWidth,
        anchorOrigin.horizontal === "middle" ? anchorProps.middle : anchorOrigin.horizontal === selfOrigin.horizontal ? anchorProps.right : anchorProps.left
      );
      props.maxWidth = Math.min(currentWidth, anchorX);
      props.left = Math.max(0, anchorX - props.maxWidth);
    } else {
      props.left = Math.max(
        0,
        anchorOrigin.horizontal === "middle" ? anchorProps.middle : anchorOrigin.horizontal === selfOrigin.horizontal ? anchorProps.left : anchorProps.right
      );
      props.maxWidth = Math.min(currentWidth, innerWidth - props.left);
    }
  }
}
const QMenu = createComponent({
  name: "QMenu",
  inheritAttrs: false,
  props: {
    ...useAnchorProps,
    ...useModelToggleProps,
    ...useDarkProps,
    ...useTransitionProps,
    persistent: Boolean,
    autoClose: Boolean,
    separateClosePopup: Boolean,
    noRouteDismiss: Boolean,
    noRefocus: Boolean,
    noFocus: Boolean,
    fit: Boolean,
    cover: Boolean,
    square: Boolean,
    anchor: {
      type: String,
      validator: validatePosition
    },
    self: {
      type: String,
      validator: validatePosition
    },
    offset: {
      type: Array,
      validator: validateOffset
    },
    scrollTarget: {
      default: void 0
    },
    touchPosition: Boolean,
    maxHeight: {
      type: String,
      default: null
    },
    maxWidth: {
      type: String,
      default: null
    }
  },
  emits: [
    ...useModelToggleEmits,
    "click",
    "escapeKey"
  ],
  setup(props, { slots, emit, attrs }) {
    let refocusTarget = null, absoluteOffset, unwatchPosition, avoidAutoClose;
    const vm = getCurrentInstance();
    const { proxy } = vm;
    const { $q } = proxy;
    const innerRef = ref(null);
    const showing = ref(false);
    const hideOnRouteChange = computed(
      () => props.persistent !== true && props.noRouteDismiss !== true
    );
    const isDark = useDark(props, $q);
    const { registerTick, removeTick } = useTick();
    const { registerTimeout } = useTimeout();
    const { transitionProps, transitionStyle } = useTransition(props);
    const { localScrollTarget, changeScrollEvent, unconfigureScrollTarget } = useScrollTarget(props, configureScrollTarget);
    const { anchorEl, canShow } = useAnchor({ showing });
    const { hide } = useModelToggle({
      showing,
      canShow,
      handleShow,
      handleHide,
      hideOnRouteChange,
      processOnMount: true
    });
    const { showPortal, hidePortal, renderPortal } = usePortal(vm, innerRef, renderPortalContent, "menu");
    const clickOutsideProps = {
      anchorEl,
      innerRef,
      onClickOutside(e) {
        if (props.persistent !== true && showing.value === true) {
          hide(e);
          if (
            // always prevent touch event
            e.type === "touchstart" || e.target.classList.contains("q-dialog__backdrop")
          ) {
            stopAndPrevent(e);
          }
          return true;
        }
      }
    };
    const anchorOrigin = computed(
      () => parsePosition(
        props.anchor || (props.cover === true ? "center middle" : "bottom start"),
        $q.lang.rtl
      )
    );
    const selfOrigin = computed(() => props.cover === true ? anchorOrigin.value : parsePosition(props.self || "top start", $q.lang.rtl));
    const menuClass = computed(
      () => (props.square === true ? " q-menu--square" : "") + (isDark.value === true ? " q-menu--dark q-dark" : "")
    );
    const onEvents = computed(() => props.autoClose === true ? { onClick: onAutoClose } : {});
    const handlesFocus = computed(
      () => showing.value === true && props.persistent !== true
    );
    watch(handlesFocus, (val) => {
      if (val === true) {
        addEscapeKey(onEscapeKey);
        addClickOutside(clickOutsideProps);
      } else {
        removeEscapeKey(onEscapeKey);
        removeClickOutside(clickOutsideProps);
      }
    });
    function focus() {
      addFocusFn(() => {
        let node = innerRef.value;
        if (node && node.contains(document.activeElement) !== true) {
          node = node.querySelector("[autofocus][tabindex], [data-autofocus][tabindex]") || node.querySelector("[autofocus] [tabindex], [data-autofocus] [tabindex]") || node.querySelector("[autofocus], [data-autofocus]") || node;
          node.focus({ preventScroll: true });
        }
      });
    }
    function handleShow(evt) {
      refocusTarget = props.noRefocus === false ? document.activeElement : null;
      addFocusout(onFocusout);
      showPortal();
      configureScrollTarget();
      absoluteOffset = void 0;
      if (evt !== void 0 && (props.touchPosition || props.contextMenu)) {
        const pos = position(evt);
        if (pos.left !== void 0) {
          const { top, left } = anchorEl.value.getBoundingClientRect();
          absoluteOffset = { left: pos.left - left, top: pos.top - top };
        }
      }
      if (unwatchPosition === void 0) {
        unwatchPosition = watch(
          () => $q.screen.width + "|" + $q.screen.height + "|" + props.self + "|" + props.anchor + "|" + $q.lang.rtl,
          updatePosition
        );
      }
      if (props.noFocus !== true) {
        document.activeElement.blur();
      }
      registerTick(() => {
        updatePosition();
        props.noFocus !== true && focus();
      });
      registerTimeout(() => {
        if ($q.platform.is.ios === true) {
          avoidAutoClose = props.autoClose;
          innerRef.value.click();
        }
        updatePosition();
        showPortal(true);
        emit("show", evt);
      }, props.transitionDuration);
    }
    function handleHide(evt) {
      removeTick();
      hidePortal();
      anchorCleanup(true);
      if (refocusTarget !== null && // menu was hidden from code or ESC plugin
      (evt === void 0 || evt.qClickOutside !== true)) {
        ((evt && evt.type.indexOf("key") === 0 ? refocusTarget.closest('[tabindex]:not([tabindex^="-"])') : void 0) || refocusTarget).focus();
        refocusTarget = null;
      }
      registerTimeout(() => {
        hidePortal(true);
        emit("hide", evt);
      }, props.transitionDuration);
    }
    function anchorCleanup(hiding) {
      absoluteOffset = void 0;
      if (unwatchPosition !== void 0) {
        unwatchPosition();
        unwatchPosition = void 0;
      }
      if (hiding === true || showing.value === true) {
        removeFocusout(onFocusout);
        unconfigureScrollTarget();
        removeClickOutside(clickOutsideProps);
        removeEscapeKey(onEscapeKey);
      }
      if (hiding !== true) {
        refocusTarget = null;
      }
    }
    function configureScrollTarget() {
      if (anchorEl.value !== null || props.scrollTarget !== void 0) {
        localScrollTarget.value = getScrollTarget(anchorEl.value, props.scrollTarget);
        changeScrollEvent(localScrollTarget.value, updatePosition);
      }
    }
    function onAutoClose(e) {
      if (avoidAutoClose !== true) {
        closePortalMenus(proxy, e);
        emit("click", e);
      } else {
        avoidAutoClose = false;
      }
    }
    function onFocusout(evt) {
      if (handlesFocus.value === true && props.noFocus !== true && childHasFocus(innerRef.value, evt.target) !== true) {
        focus();
      }
    }
    function onEscapeKey(evt) {
      emit("escapeKey");
      hide(evt);
    }
    function updatePosition() {
      setPosition({
        targetEl: innerRef.value,
        offset: props.offset,
        anchorEl: anchorEl.value,
        anchorOrigin: anchorOrigin.value,
        selfOrigin: selfOrigin.value,
        absoluteOffset,
        fit: props.fit,
        cover: props.cover,
        maxHeight: props.maxHeight,
        maxWidth: props.maxWidth
      });
    }
    function renderPortalContent() {
      return h(
        Transition,
        transitionProps.value,
        () => showing.value === true ? h("div", {
          role: "menu",
          ...attrs,
          ref: innerRef,
          tabindex: -1,
          class: [
            "q-menu q-position-engine scroll" + menuClass.value,
            attrs.class
          ],
          style: [
            attrs.style,
            transitionStyle.value
          ],
          ...onEvents.value
        }, hSlot(slots.default)) : null
      );
    }
    onBeforeUnmount(anchorCleanup);
    Object.assign(proxy, { focus, updatePosition });
    return renderPortal;
  }
});
let maximizedModals = 0;
const positionClass = {
  standard: "fixed-full flex-center",
  top: "fixed-top justify-center",
  bottom: "fixed-bottom justify-center",
  right: "fixed-right items-center",
  left: "fixed-left items-center"
};
const defaultTransitions = {
  standard: ["scale", "scale"],
  top: ["slide-down", "slide-up"],
  bottom: ["slide-up", "slide-down"],
  right: ["slide-left", "slide-right"],
  left: ["slide-right", "slide-left"]
};
const QDialog = createComponent({
  name: "QDialog",
  inheritAttrs: false,
  props: {
    ...useModelToggleProps,
    ...useTransitionProps,
    transitionShow: String,
    // override useTransitionProps
    transitionHide: String,
    // override useTransitionProps
    persistent: Boolean,
    autoClose: Boolean,
    allowFocusOutside: Boolean,
    noEscDismiss: Boolean,
    noBackdropDismiss: Boolean,
    noRouteDismiss: Boolean,
    noRefocus: Boolean,
    noFocus: Boolean,
    noShake: Boolean,
    seamless: Boolean,
    maximized: Boolean,
    fullWidth: Boolean,
    fullHeight: Boolean,
    square: Boolean,
    backdropFilter: String,
    position: {
      type: String,
      default: "standard",
      validator: (val) => val === "standard" || ["top", "bottom", "left", "right"].includes(val)
    }
  },
  emits: [
    ...useModelToggleEmits,
    "shake",
    "click",
    "escapeKey"
  ],
  setup(props, { slots, emit, attrs }) {
    const vm = getCurrentInstance();
    const innerRef = ref(null);
    const showing = ref(false);
    const animating = ref(false);
    let shakeTimeout = null, refocusTarget = null, isMaximized, avoidAutoClose;
    const hideOnRouteChange = computed(
      () => props.persistent !== true && props.noRouteDismiss !== true && props.seamless !== true
    );
    const { preventBodyScroll } = usePreventScroll();
    const { registerTimeout } = useTimeout();
    const { registerTick, removeTick } = useTick();
    const { transitionProps, transitionStyle } = useTransition(
      props,
      () => defaultTransitions[props.position][0],
      () => defaultTransitions[props.position][1]
    );
    const backdropStyle = computed(() => transitionStyle.value + (props.backdropFilter !== void 0 ? `;backdrop-filter:${props.backdropFilter};-webkit-backdrop-filter:${props.backdropFilter}` : ""));
    const { showPortal, hidePortal, portalIsAccessible, renderPortal } = usePortal(
      vm,
      innerRef,
      renderPortalContent,
      "dialog"
    );
    const { hide } = useModelToggle({
      showing,
      hideOnRouteChange,
      handleShow,
      handleHide,
      processOnMount: true
    });
    const { addToHistory, removeFromHistory } = useHistory(showing, hide, hideOnRouteChange);
    const classes = computed(
      () => `q-dialog__inner flex no-pointer-events q-dialog__inner--${props.maximized === true ? "maximized" : "minimized"} q-dialog__inner--${props.position} ${positionClass[props.position]}` + (animating.value === true ? " q-dialog__inner--animating" : "") + (props.fullWidth === true ? " q-dialog__inner--fullwidth" : "") + (props.fullHeight === true ? " q-dialog__inner--fullheight" : "") + (props.square === true ? " q-dialog__inner--square" : "")
    );
    const useBackdrop = computed(() => showing.value === true && props.seamless !== true);
    const onEvents = computed(() => props.autoClose === true ? { onClick: onAutoClose } : {});
    const rootClasses = computed(() => [
      `q-dialog fullscreen no-pointer-events q-dialog--${useBackdrop.value === true ? "modal" : "seamless"}`,
      attrs.class
    ]);
    watch(() => props.maximized, (state) => {
      showing.value === true && updateMaximized(state);
    });
    watch(useBackdrop, (val) => {
      preventBodyScroll(val);
      if (val === true) {
        addFocusout(onFocusChange);
        addEscapeKey(onEscapeKey);
      } else {
        removeFocusout(onFocusChange);
        removeEscapeKey(onEscapeKey);
      }
    });
    function handleShow(evt) {
      addToHistory();
      refocusTarget = props.noRefocus === false && document.activeElement !== null ? document.activeElement : null;
      updateMaximized(props.maximized);
      showPortal();
      animating.value = true;
      if (props.noFocus !== true) {
        document.activeElement !== null && document.activeElement.blur();
        registerTick(focus);
      } else {
        removeTick();
      }
      registerTimeout(() => {
        if (vm.proxy.$q.platform.is.ios === true) {
          if (props.seamless !== true && document.activeElement) {
            const { top, bottom } = document.activeElement.getBoundingClientRect(), { innerHeight } = window, height = window.visualViewport !== void 0 ? window.visualViewport.height : innerHeight;
            if (top > 0 && bottom > height / 2) {
              document.scrollingElement.scrollTop = Math.min(
                document.scrollingElement.scrollHeight - height,
                bottom >= innerHeight ? Infinity : Math.ceil(document.scrollingElement.scrollTop + bottom - height / 2)
              );
            }
            document.activeElement.scrollIntoView();
          }
          avoidAutoClose = true;
          innerRef.value.click();
          avoidAutoClose = false;
        }
        showPortal(true);
        animating.value = false;
        emit("show", evt);
      }, props.transitionDuration);
    }
    function handleHide(evt) {
      removeTick();
      removeFromHistory();
      cleanup(true);
      animating.value = true;
      hidePortal();
      if (refocusTarget !== null) {
        ((evt && evt.type.indexOf("key") === 0 ? refocusTarget.closest('[tabindex]:not([tabindex^="-"])') : void 0) || refocusTarget).focus();
        refocusTarget = null;
      }
      registerTimeout(() => {
        hidePortal(true);
        animating.value = false;
        emit("hide", evt);
      }, props.transitionDuration);
    }
    function focus(selector) {
      addFocusFn(() => {
        let node = innerRef.value;
        if (node === null || node.contains(document.activeElement) === true) {
          return;
        }
        node = (selector !== "" ? node.querySelector(selector) : null) || node.querySelector("[autofocus][tabindex], [data-autofocus][tabindex]") || node.querySelector("[autofocus] [tabindex], [data-autofocus] [tabindex]") || node.querySelector("[autofocus], [data-autofocus]") || node;
        node.focus({ preventScroll: true });
      });
    }
    function shake(focusTarget) {
      if (focusTarget && typeof focusTarget.focus === "function") {
        focusTarget.focus({ preventScroll: true });
      } else {
        focus();
      }
      emit("shake");
      const node = innerRef.value;
      if (node !== null) {
        node.classList.remove("q-animate--scale");
        node.classList.add("q-animate--scale");
        shakeTimeout !== null && clearTimeout(shakeTimeout);
        shakeTimeout = setTimeout(() => {
          shakeTimeout = null;
          if (innerRef.value !== null) {
            node.classList.remove("q-animate--scale");
            focus();
          }
        }, 170);
      }
    }
    function onEscapeKey() {
      if (props.seamless !== true) {
        if (props.persistent === true || props.noEscDismiss === true) {
          props.maximized !== true && props.noShake !== true && shake();
        } else {
          emit("escapeKey");
          hide();
        }
      }
    }
    function cleanup(hiding) {
      if (shakeTimeout !== null) {
        clearTimeout(shakeTimeout);
        shakeTimeout = null;
      }
      if (hiding === true || showing.value === true) {
        updateMaximized(false);
        if (props.seamless !== true) {
          preventBodyScroll(false);
          removeFocusout(onFocusChange);
          removeEscapeKey(onEscapeKey);
        }
      }
      if (hiding !== true) {
        refocusTarget = null;
      }
    }
    function updateMaximized(active) {
      if (active === true) {
        if (isMaximized !== true) {
          maximizedModals < 1 && document.body.classList.add("q-body--dialog");
          maximizedModals++;
          isMaximized = true;
        }
      } else if (isMaximized === true) {
        if (maximizedModals < 2) {
          document.body.classList.remove("q-body--dialog");
        }
        maximizedModals--;
        isMaximized = false;
      }
    }
    function onAutoClose(e) {
      if (avoidAutoClose !== true) {
        hide(e);
        emit("click", e);
      }
    }
    function onBackdropClick(e) {
      if (props.persistent !== true && props.noBackdropDismiss !== true) {
        hide(e);
      } else if (props.noShake !== true) {
        shake();
      }
    }
    function onFocusChange(evt) {
      if (props.allowFocusOutside !== true && portalIsAccessible.value === true && childHasFocus(innerRef.value, evt.target) !== true) {
        focus('[tabindex]:not([tabindex="-1"])');
      }
    }
    Object.assign(vm.proxy, {
      // expose public methods
      focus,
      shake,
      // private but needed by QSelect
      __updateRefocusTarget(target2) {
        refocusTarget = target2 || null;
      }
    });
    onBeforeUnmount(cleanup);
    function renderPortalContent() {
      return h("div", {
        role: "dialog",
        "aria-modal": useBackdrop.value === true ? "true" : "false",
        ...attrs,
        class: rootClasses.value
      }, [
        h(Transition, {
          name: "q-transition--fade",
          appear: true
        }, () => useBackdrop.value === true ? h("div", {
          class: "q-dialog__backdrop fixed-full",
          style: backdropStyle.value,
          "aria-hidden": "true",
          tabindex: -1,
          onClick: onBackdropClick
        }) : null),
        h(
          Transition,
          transitionProps.value,
          () => showing.value === true ? h("div", {
            ref: innerRef,
            class: classes.value,
            style: transitionStyle.value,
            tabindex: -1,
            ...onEvents.value
          }, hSlot(slots.default)) : null
        )
      ]);
    }
    return renderPortal;
  }
});
const validateNewValueMode = (v) => ["add", "add-unique", "toggle"].includes(v);
const reEscapeList = ".*+?^${}()|[]\\";
const fieldPropsList = Object.keys(useFieldProps);
const QSelect = createComponent({
  name: "QSelect",
  inheritAttrs: false,
  props: {
    ...useVirtualScrollProps,
    ...useFormProps,
    ...useFieldProps,
    modelValue: {
      required: true
    },
    multiple: Boolean,
    displayValue: [String, Number],
    displayValueHtml: Boolean,
    dropdownIcon: String,
    options: {
      type: Array,
      default: () => []
    },
    optionValue: [Function, String],
    optionLabel: [Function, String],
    optionDisable: [Function, String],
    hideSelected: Boolean,
    hideDropdownIcon: Boolean,
    fillInput: Boolean,
    maxValues: [Number, String],
    optionsDense: Boolean,
    optionsDark: {
      type: Boolean,
      default: null
    },
    optionsSelectedClass: String,
    optionsHtml: Boolean,
    optionsCover: Boolean,
    menuShrink: Boolean,
    menuAnchor: String,
    menuSelf: String,
    menuOffset: Array,
    popupContentClass: String,
    popupContentStyle: [String, Array, Object],
    popupNoRouteDismiss: Boolean,
    useInput: Boolean,
    useChips: Boolean,
    newValueMode: {
      type: String,
      validator: validateNewValueMode
    },
    mapOptions: Boolean,
    emitValue: Boolean,
    inputDebounce: {
      type: [Number, String],
      default: 500
    },
    inputClass: [Array, String, Object],
    inputStyle: [Array, String, Object],
    tabindex: {
      type: [String, Number],
      default: 0
    },
    autocomplete: String,
    transitionShow: String,
    transitionHide: String,
    transitionDuration: [String, Number],
    behavior: {
      type: String,
      validator: (v) => ["default", "menu", "dialog"].includes(v),
      default: "default"
    },
    virtualScrollItemSize: {
      type: [Number, String],
      default: void 0
    },
    onNewValue: Function,
    onFilter: Function
  },
  emits: [
    ...useFieldEmits,
    "add",
    "remove",
    "inputValue",
    "newValue",
    "keyup",
    "keypress",
    "keydown",
    "filterAbort"
  ],
  setup(props, { slots, emit }) {
    const { proxy } = getCurrentInstance();
    const { $q } = proxy;
    const menu = ref(false);
    const dialog = ref(false);
    const optionIndex = ref(-1);
    const inputValue = ref("");
    const dialogFieldFocused = ref(false);
    const innerLoadingIndicator = ref(false);
    let filterTimer = null, inputValueTimer = null, innerValueCache, hasDialog, userInputValue, filterId = null, defaultInputValue, transitionShowComputed, searchBuffer, searchBufferExp;
    const inputRef = ref(null);
    const targetRef = ref(null);
    const menuRef = ref(null);
    const dialogRef = ref(null);
    const menuContentRef = ref(null);
    const nameProp = useFormInputNameAttr(props);
    const onComposition = useKeyComposition(onInput);
    const virtualScrollLength = computed(() => Array.isArray(props.options) ? props.options.length : 0);
    const virtualScrollItemSizeComputed = computed(() => props.virtualScrollItemSize === void 0 ? props.optionsDense === true ? 24 : 48 : props.virtualScrollItemSize);
    const {
      virtualScrollSliceRange,
      virtualScrollSliceSizeComputed,
      localResetVirtualScroll,
      padVirtualScroll,
      onVirtualScrollEvt,
      scrollTo,
      setVirtualScrollSize
    } = useVirtualScroll({
      virtualScrollLength,
      getVirtualScrollTarget,
      getVirtualScrollEl,
      virtualScrollItemSizeComputed
    });
    const state = useFieldState();
    const innerValue = computed(() => {
      const mapNull = props.mapOptions === true && props.multiple !== true, val = props.modelValue !== void 0 && (props.modelValue !== null || mapNull === true) ? props.multiple === true && Array.isArray(props.modelValue) ? props.modelValue : [props.modelValue] : [];
      if (props.mapOptions === true && Array.isArray(props.options) === true) {
        const cache = props.mapOptions === true && innerValueCache !== void 0 ? innerValueCache : [];
        const values = val.map((v) => getOption(v, cache));
        return props.modelValue === null && mapNull === true ? values.filter((v) => v !== null) : values;
      }
      return val;
    });
    const innerFieldProps = computed(() => {
      const acc = {};
      fieldPropsList.forEach((key) => {
        const val = props[key];
        if (val !== void 0) {
          acc[key] = val;
        }
      });
      return acc;
    });
    const isOptionsDark = computed(() => props.optionsDark === null ? state.isDark.value : props.optionsDark);
    const hasValue = computed(() => fieldValueIsFilled(innerValue.value));
    const computedInputClass = computed(() => {
      let cls = "q-field__input q-placeholder col";
      if (props.hideSelected === true || innerValue.value.length === 0) {
        return [cls, props.inputClass];
      }
      cls += " q-field__input--padding";
      return props.inputClass === void 0 ? cls : [cls, props.inputClass];
    });
    const menuContentClass = computed(
      () => (props.virtualScrollHorizontal === true ? "q-virtual-scroll--horizontal" : "") + (props.popupContentClass ? " " + props.popupContentClass : "")
    );
    const noOptions = computed(() => virtualScrollLength.value === 0);
    const selectedString = computed(
      () => innerValue.value.map((opt) => getOptionLabel.value(opt)).join(", ")
    );
    const ariaCurrentValue = computed(() => props.displayValue !== void 0 ? props.displayValue : selectedString.value);
    const needsHtmlFn = computed(() => props.optionsHtml === true ? () => true : (opt) => opt !== void 0 && opt !== null && opt.html === true);
    const valueAsHtml = computed(() => props.displayValueHtml === true || props.displayValue === void 0 && (props.optionsHtml === true || innerValue.value.some(needsHtmlFn.value)));
    const tabindex = computed(() => state.focused.value === true ? props.tabindex : -1);
    const comboboxAttrs = computed(() => {
      const attrs = {
        tabindex: props.tabindex,
        role: "combobox",
        "aria-label": props.label,
        "aria-readonly": props.readonly === true ? "true" : "false",
        "aria-autocomplete": props.useInput === true ? "list" : "none",
        "aria-expanded": menu.value === true ? "true" : "false",
        "aria-controls": `${state.targetUid.value}_lb`
      };
      if (optionIndex.value >= 0) {
        attrs["aria-activedescendant"] = `${state.targetUid.value}_${optionIndex.value}`;
      }
      return attrs;
    });
    const listboxAttrs = computed(() => ({
      id: `${state.targetUid.value}_lb`,
      role: "listbox",
      "aria-multiselectable": props.multiple === true ? "true" : "false"
    }));
    const selectedScope = computed(() => {
      return innerValue.value.map((opt, i) => ({
        index: i,
        opt,
        html: needsHtmlFn.value(opt),
        selected: true,
        removeAtIndex: removeAtIndexAndFocus,
        toggleOption,
        tabindex: tabindex.value
      }));
    });
    const optionScope = computed(() => {
      if (virtualScrollLength.value === 0) {
        return [];
      }
      const { from, to } = virtualScrollSliceRange.value;
      return props.options.slice(from, to).map((opt, i) => {
        const disable = isOptionDisabled.value(opt) === true;
        const active = isOptionSelected(opt) === true;
        const index = from + i;
        const itemProps = {
          clickable: true,
          active,
          activeClass: computedOptionsSelectedClass.value,
          manualFocus: true,
          focused: false,
          disable,
          tabindex: -1,
          dense: props.optionsDense,
          dark: isOptionsDark.value,
          role: "option",
          "aria-selected": active === true ? "true" : "false",
          id: `${state.targetUid.value}_${index}`,
          onClick: () => {
            toggleOption(opt);
          }
        };
        if (disable !== true) {
          optionIndex.value === index && (itemProps.focused = true);
          if ($q.platform.is.desktop === true) {
            itemProps.onMousemove = () => {
              menu.value === true && setOptionIndex(index);
            };
          }
        }
        return {
          index,
          opt,
          html: needsHtmlFn.value(opt),
          label: getOptionLabel.value(opt),
          selected: itemProps.active,
          focused: itemProps.focused,
          toggleOption,
          setOptionIndex,
          itemProps
        };
      });
    });
    const dropdownArrowIcon = computed(() => props.dropdownIcon !== void 0 ? props.dropdownIcon : $q.iconSet.arrow.dropdown);
    const squaredMenu = computed(
      () => props.optionsCover === false && props.outlined !== true && props.standout !== true && props.borderless !== true && props.rounded !== true
    );
    const computedOptionsSelectedClass = computed(() => props.optionsSelectedClass !== void 0 ? props.optionsSelectedClass : props.color !== void 0 ? `text-${props.color}` : "");
    const getOptionValue = computed(() => getPropValueFn(props.optionValue, "value"));
    const getOptionLabel = computed(() => getPropValueFn(props.optionLabel, "label"));
    const isOptionDisabled = computed(() => getPropValueFn(props.optionDisable, "disable"));
    const innerOptionsValue = computed(() => innerValue.value.map((opt) => getOptionValue.value(opt)));
    const inputControlEvents = computed(() => {
      const evt = {
        onInput,
        // Safari < 10.2 & UIWebView doesn't fire compositionend when
        // switching focus before confirming composition choice
        // this also fixes the issue where some browsers e.g. iOS Chrome
        // fires "change" instead of "input" on autocomplete.
        onChange: onComposition,
        onKeydown: onTargetKeydown,
        onKeyup: onTargetAutocomplete,
        onKeypress: onTargetKeypress,
        onFocus: selectInputText,
        onClick(e) {
          hasDialog === true && stop(e);
        }
      };
      evt.onCompositionstart = evt.onCompositionupdate = evt.onCompositionend = onComposition;
      return evt;
    });
    watch(innerValue, (val) => {
      innerValueCache = val;
      if (props.useInput === true && props.fillInput === true && props.multiple !== true && state.innerLoading.value !== true && (dialog.value !== true && menu.value !== true || hasValue.value !== true)) {
        userInputValue !== true && resetInputValue();
        if (dialog.value === true || menu.value === true) {
          filter("");
        }
      }
    }, { immediate: true });
    watch(() => props.fillInput, resetInputValue);
    watch(menu, updateMenu);
    watch(virtualScrollLength, rerenderMenu);
    function getEmittingOptionValue(opt) {
      return props.emitValue === true ? getOptionValue.value(opt) : opt;
    }
    function removeAtIndex(index) {
      if (index !== -1 && index < innerValue.value.length) {
        if (props.multiple === true) {
          const model = props.modelValue.slice();
          emit("remove", { index, value: model.splice(index, 1)[0] });
          emit("update:modelValue", model);
        } else {
          emit("update:modelValue", null);
        }
      }
    }
    function removeAtIndexAndFocus(index) {
      removeAtIndex(index);
      state.focus();
    }
    function add(opt, unique) {
      const val = getEmittingOptionValue(opt);
      if (props.multiple !== true) {
        props.fillInput === true && updateInputValue(
          getOptionLabel.value(opt),
          true,
          true
        );
        emit("update:modelValue", val);
        return;
      }
      if (innerValue.value.length === 0) {
        emit("add", { index: 0, value: val });
        emit("update:modelValue", props.multiple === true ? [val] : val);
        return;
      }
      if (unique === true && isOptionSelected(opt) === true) {
        return;
      }
      if (props.maxValues !== void 0 && props.modelValue.length >= props.maxValues) {
        return;
      }
      const model = props.modelValue.slice();
      emit("add", { index: model.length, value: val });
      model.push(val);
      emit("update:modelValue", model);
    }
    function toggleOption(opt, keepOpen) {
      if (state.editable.value !== true || opt === void 0 || isOptionDisabled.value(opt) === true) {
        return;
      }
      const optValue = getOptionValue.value(opt);
      if (props.multiple !== true) {
        if (keepOpen !== true) {
          updateInputValue(
            props.fillInput === true ? getOptionLabel.value(opt) : "",
            true,
            true
          );
          hidePopup();
        }
        targetRef.value !== null && targetRef.value.focus();
        if (innerValue.value.length === 0 || isDeepEqual(getOptionValue.value(innerValue.value[0]), optValue) !== true) {
          emit("update:modelValue", props.emitValue === true ? optValue : opt);
        }
        return;
      }
      (hasDialog !== true || dialogFieldFocused.value === true) && state.focus();
      selectInputText();
      if (innerValue.value.length === 0) {
        const val = props.emitValue === true ? optValue : opt;
        emit("add", { index: 0, value: val });
        emit("update:modelValue", props.multiple === true ? [val] : val);
        return;
      }
      const model = props.modelValue.slice(), index = innerOptionsValue.value.findIndex((v) => isDeepEqual(v, optValue));
      if (index !== -1) {
        emit("remove", { index, value: model.splice(index, 1)[0] });
      } else {
        if (props.maxValues !== void 0 && model.length >= props.maxValues) {
          return;
        }
        const val = props.emitValue === true ? optValue : opt;
        emit("add", { index: model.length, value: val });
        model.push(val);
      }
      emit("update:modelValue", model);
    }
    function setOptionIndex(index) {
      if ($q.platform.is.desktop !== true)
        return;
      const val = index !== -1 && index < virtualScrollLength.value ? index : -1;
      if (optionIndex.value !== val) {
        optionIndex.value = val;
      }
    }
    function moveOptionSelection(offset = 1, skipInputValue) {
      if (menu.value === true) {
        let index = optionIndex.value;
        do {
          index = normalizeToInterval(
            index + offset,
            -1,
            virtualScrollLength.value - 1
          );
        } while (index !== -1 && index !== optionIndex.value && isOptionDisabled.value(props.options[index]) === true);
        if (optionIndex.value !== index) {
          setOptionIndex(index);
          scrollTo(index);
          if (skipInputValue !== true && props.useInput === true && props.fillInput === true) {
            setInputValue(
              index >= 0 ? getOptionLabel.value(props.options[index]) : defaultInputValue,
              true
            );
          }
        }
      }
    }
    function getOption(value, valueCache) {
      const fn = (opt) => isDeepEqual(getOptionValue.value(opt), value);
      return props.options.find(fn) || valueCache.find(fn) || value;
    }
    function getPropValueFn(propValue, defaultVal) {
      const val = propValue !== void 0 ? propValue : defaultVal;
      return typeof val === "function" ? val : (opt) => opt !== null && typeof opt === "object" && val in opt ? opt[val] : opt;
    }
    function isOptionSelected(opt) {
      const val = getOptionValue.value(opt);
      return innerOptionsValue.value.find((v) => isDeepEqual(v, val)) !== void 0;
    }
    function selectInputText(e) {
      if (props.useInput === true && targetRef.value !== null && (e === void 0 || targetRef.value === e.target && e.target.value === selectedString.value)) {
        targetRef.value.select();
      }
    }
    function onTargetKeyup(e) {
      if (isKeyCode(e, 27) === true && menu.value === true) {
        stop(e);
        hidePopup();
        resetInputValue();
      }
      emit("keyup", e);
    }
    function onTargetAutocomplete(e) {
      const { value } = e.target;
      if (e.keyCode !== void 0) {
        onTargetKeyup(e);
        return;
      }
      e.target.value = "";
      if (filterTimer !== null) {
        clearTimeout(filterTimer);
        filterTimer = null;
      }
      if (inputValueTimer !== null) {
        clearTimeout(inputValueTimer);
        inputValueTimer = null;
      }
      resetInputValue();
      if (typeof value === "string" && value.length !== 0) {
        const needle = value.toLocaleLowerCase();
        const findFn = (extractFn) => {
          const option = props.options.find((opt) => extractFn.value(opt).toLocaleLowerCase() === needle);
          if (option === void 0) {
            return false;
          }
          if (innerValue.value.indexOf(option) === -1) {
            toggleOption(option);
          } else {
            hidePopup();
          }
          return true;
        };
        const fillFn = (afterFilter) => {
          if (findFn(getOptionValue) === true) {
            return;
          }
          if (findFn(getOptionLabel) === true || afterFilter === true) {
            return;
          }
          filter(value, true, () => fillFn(true));
        };
        fillFn();
      } else {
        state.clearValue(e);
      }
    }
    function onTargetKeypress(e) {
      emit("keypress", e);
    }
    function onTargetKeydown(e) {
      emit("keydown", e);
      if (shouldIgnoreKey(e) === true) {
        return;
      }
      const newValueModeValid = inputValue.value.length !== 0 && (props.newValueMode !== void 0 || props.onNewValue !== void 0);
      const tabShouldSelect = e.shiftKey !== true && props.multiple !== true && (optionIndex.value !== -1 || newValueModeValid === true);
      if (e.keyCode === 27) {
        prevent(e);
        return;
      }
      if (e.keyCode === 9 && tabShouldSelect === false) {
        closeMenu();
        return;
      }
      if (e.target === void 0 || e.target.id !== state.targetUid.value || state.editable.value !== true)
        return;
      if (e.keyCode === 40 && state.innerLoading.value !== true && menu.value === false) {
        stopAndPrevent(e);
        showPopup();
        return;
      }
      if (e.keyCode === 8 && (props.useChips === true || props.clearable === true) && props.hideSelected !== true && inputValue.value.length === 0) {
        if (props.multiple === true && Array.isArray(props.modelValue) === true) {
          removeAtIndex(props.modelValue.length - 1);
        } else if (props.multiple !== true && props.modelValue !== null) {
          emit("update:modelValue", null);
        }
        return;
      }
      if ((e.keyCode === 35 || e.keyCode === 36) && (typeof inputValue.value !== "string" || inputValue.value.length === 0)) {
        stopAndPrevent(e);
        optionIndex.value = -1;
        moveOptionSelection(e.keyCode === 36 ? 1 : -1, props.multiple);
      }
      if ((e.keyCode === 33 || e.keyCode === 34) && virtualScrollSliceSizeComputed.value !== void 0) {
        stopAndPrevent(e);
        optionIndex.value = Math.max(
          -1,
          Math.min(
            virtualScrollLength.value,
            optionIndex.value + (e.keyCode === 33 ? -1 : 1) * virtualScrollSliceSizeComputed.value.view
          )
        );
        moveOptionSelection(e.keyCode === 33 ? 1 : -1, props.multiple);
      }
      if (e.keyCode === 38 || e.keyCode === 40) {
        stopAndPrevent(e);
        moveOptionSelection(e.keyCode === 38 ? -1 : 1, props.multiple);
      }
      const optionsLength = virtualScrollLength.value;
      if (searchBuffer === void 0 || searchBufferExp < Date.now()) {
        searchBuffer = "";
      }
      if (optionsLength > 0 && props.useInput !== true && e.key !== void 0 && e.key.length === 1 && e.altKey === false && e.ctrlKey === false && e.metaKey === false && (e.keyCode !== 32 || searchBuffer.length !== 0)) {
        menu.value !== true && showPopup(e);
        const char = e.key.toLocaleLowerCase(), keyRepeat = searchBuffer.length === 1 && searchBuffer[0] === char;
        searchBufferExp = Date.now() + 1500;
        if (keyRepeat === false) {
          stopAndPrevent(e);
          searchBuffer += char;
        }
        const searchRe = new RegExp("^" + searchBuffer.split("").map((l) => reEscapeList.indexOf(l) !== -1 ? "\\" + l : l).join(".*"), "i");
        let index = optionIndex.value;
        if (keyRepeat === true || index < 0 || searchRe.test(getOptionLabel.value(props.options[index])) !== true) {
          do {
            index = normalizeToInterval(index + 1, -1, optionsLength - 1);
          } while (index !== optionIndex.value && (isOptionDisabled.value(props.options[index]) === true || searchRe.test(getOptionLabel.value(props.options[index])) !== true));
        }
        if (optionIndex.value !== index) {
          nextTick(() => {
            setOptionIndex(index);
            scrollTo(index);
            if (index >= 0 && props.useInput === true && props.fillInput === true) {
              setInputValue(getOptionLabel.value(props.options[index]), true);
            }
          });
        }
        return;
      }
      if (e.keyCode !== 13 && (e.keyCode !== 32 || props.useInput === true || searchBuffer !== "") && (e.keyCode !== 9 || tabShouldSelect === false))
        return;
      e.keyCode !== 9 && stopAndPrevent(e);
      if (optionIndex.value !== -1 && optionIndex.value < optionsLength) {
        toggleOption(props.options[optionIndex.value]);
        return;
      }
      if (newValueModeValid === true) {
        const done = (val, mode) => {
          if (mode) {
            if (validateNewValueMode(mode) !== true) {
              return;
            }
          } else {
            mode = props.newValueMode;
          }
          updateInputValue("", props.multiple !== true, true);
          if (val === void 0 || val === null) {
            return;
          }
          const fn = mode === "toggle" ? toggleOption : add;
          fn(val, mode === "add-unique");
          if (props.multiple !== true) {
            targetRef.value !== null && targetRef.value.focus();
            hidePopup();
          }
        };
        if (props.onNewValue !== void 0) {
          emit("newValue", inputValue.value, done);
        } else {
          done(inputValue.value);
        }
        if (props.multiple !== true) {
          return;
        }
      }
      if (menu.value === true) {
        closeMenu();
      } else if (state.innerLoading.value !== true) {
        showPopup();
      }
    }
    function getVirtualScrollEl() {
      return hasDialog === true ? menuContentRef.value : menuRef.value !== null && menuRef.value.contentEl !== null ? menuRef.value.contentEl : void 0;
    }
    function getVirtualScrollTarget() {
      return getVirtualScrollEl();
    }
    function getSelection() {
      if (props.hideSelected === true) {
        return [];
      }
      if (slots["selected-item"] !== void 0) {
        return selectedScope.value.map((scope) => slots["selected-item"](scope)).slice();
      }
      if (slots.selected !== void 0) {
        return [].concat(slots.selected());
      }
      if (props.useChips === true) {
        return selectedScope.value.map((scope, i) => h(QChip, {
          key: "option-" + i,
          removable: state.editable.value === true && isOptionDisabled.value(scope.opt) !== true,
          dense: true,
          textColor: props.color,
          tabindex: tabindex.value,
          onRemove() {
            scope.removeAtIndex(i);
          }
        }, () => h("span", {
          class: "ellipsis",
          [scope.html === true ? "innerHTML" : "textContent"]: getOptionLabel.value(scope.opt)
        })));
      }
      return [
        h("span", {
          [valueAsHtml.value === true ? "innerHTML" : "textContent"]: ariaCurrentValue.value
        })
      ];
    }
    function getAllOptions() {
      if (noOptions.value === true) {
        return slots["no-option"] !== void 0 ? slots["no-option"]({ inputValue: inputValue.value }) : void 0;
      }
      const fn = slots.option !== void 0 ? slots.option : (scope) => {
        return h(QItem, {
          key: scope.index,
          ...scope.itemProps
        }, () => {
          return h(
            QItemSection,
            () => h(
              QItemLabel,
              () => h("span", {
                [scope.html === true ? "innerHTML" : "textContent"]: scope.label
              })
            )
          );
        });
      };
      let options = padVirtualScroll("div", optionScope.value.map(fn));
      if (slots["before-options"] !== void 0) {
        options = slots["before-options"]().concat(options);
      }
      return hMergeSlot(slots["after-options"], options);
    }
    function getInput(fromDialog, isTarget) {
      const attrs = isTarget === true ? { ...comboboxAttrs.value, ...state.splitAttrs.attributes.value } : void 0;
      const data = {
        ref: isTarget === true ? targetRef : void 0,
        key: "i_t",
        class: computedInputClass.value,
        style: props.inputStyle,
        value: inputValue.value !== void 0 ? inputValue.value : "",
        // required for Android in order to show ENTER key when in form
        type: "search",
        ...attrs,
        id: isTarget === true ? state.targetUid.value : void 0,
        maxlength: props.maxlength,
        autocomplete: props.autocomplete,
        "data-autofocus": fromDialog === true || props.autofocus === true || void 0,
        disabled: props.disable === true,
        readonly: props.readonly === true,
        ...inputControlEvents.value
      };
      if (fromDialog !== true && hasDialog === true) {
        if (Array.isArray(data.class) === true) {
          data.class = [...data.class, "no-pointer-events"];
        } else {
          data.class += " no-pointer-events";
        }
      }
      return h("input", data);
    }
    function onInput(e) {
      if (filterTimer !== null) {
        clearTimeout(filterTimer);
        filterTimer = null;
      }
      if (inputValueTimer !== null) {
        clearTimeout(inputValueTimer);
        inputValueTimer = null;
      }
      if (e && e.target && e.target.qComposing === true) {
        return;
      }
      setInputValue(e.target.value || "");
      userInputValue = true;
      defaultInputValue = inputValue.value;
      if (state.focused.value !== true && (hasDialog !== true || dialogFieldFocused.value === true)) {
        state.focus();
      }
      if (props.onFilter !== void 0) {
        filterTimer = setTimeout(() => {
          filterTimer = null;
          filter(inputValue.value);
        }, props.inputDebounce);
      }
    }
    function setInputValue(val, emitImmediately) {
      if (inputValue.value !== val) {
        inputValue.value = val;
        if (emitImmediately === true || props.inputDebounce === 0 || props.inputDebounce === "0") {
          emit("inputValue", val);
        } else {
          inputValueTimer = setTimeout(() => {
            inputValueTimer = null;
            emit("inputValue", val);
          }, props.inputDebounce);
        }
      }
    }
    function updateInputValue(val, noFiltering, internal) {
      userInputValue = internal !== true;
      if (props.useInput === true) {
        setInputValue(val, true);
        if (noFiltering === true || internal !== true) {
          defaultInputValue = val;
        }
        noFiltering !== true && filter(val);
      }
    }
    function filter(val, keepClosed, afterUpdateFn) {
      if (props.onFilter === void 0 || keepClosed !== true && state.focused.value !== true) {
        return;
      }
      if (state.innerLoading.value === true) {
        emit("filterAbort");
      } else {
        state.innerLoading.value = true;
        innerLoadingIndicator.value = true;
      }
      if (val !== "" && props.multiple !== true && innerValue.value.length !== 0 && userInputValue !== true && val === getOptionLabel.value(innerValue.value[0])) {
        val = "";
      }
      const localFilterId = setTimeout(() => {
        menu.value === true && (menu.value = false);
      }, 10);
      filterId !== null && clearTimeout(filterId);
      filterId = localFilterId;
      emit(
        "filter",
        val,
        (fn, afterFn) => {
          if ((keepClosed === true || state.focused.value === true) && filterId === localFilterId) {
            clearTimeout(filterId);
            typeof fn === "function" && fn();
            innerLoadingIndicator.value = false;
            nextTick(() => {
              state.innerLoading.value = false;
              if (state.editable.value === true) {
                if (keepClosed === true) {
                  menu.value === true && hidePopup();
                } else if (menu.value === true) {
                  updateMenu(true);
                } else {
                  menu.value = true;
                }
              }
              typeof afterFn === "function" && nextTick(() => {
                afterFn(proxy);
              });
              typeof afterUpdateFn === "function" && nextTick(() => {
                afterUpdateFn(proxy);
              });
            });
          }
        },
        () => {
          if (state.focused.value === true && filterId === localFilterId) {
            clearTimeout(filterId);
            state.innerLoading.value = false;
            innerLoadingIndicator.value = false;
          }
          menu.value === true && (menu.value = false);
        }
      );
    }
    function getMenu() {
      return h(QMenu, {
        ref: menuRef,
        class: menuContentClass.value,
        style: props.popupContentStyle,
        modelValue: menu.value,
        fit: props.menuShrink !== true,
        cover: props.optionsCover === true && noOptions.value !== true && props.useInput !== true,
        anchor: props.menuAnchor,
        self: props.menuSelf,
        offset: props.menuOffset,
        dark: isOptionsDark.value,
        noParentEvent: true,
        noRefocus: true,
        noFocus: true,
        noRouteDismiss: props.popupNoRouteDismiss,
        square: squaredMenu.value,
        transitionShow: props.transitionShow,
        transitionHide: props.transitionHide,
        transitionDuration: props.transitionDuration,
        separateClosePopup: true,
        ...listboxAttrs.value,
        onScrollPassive: onVirtualScrollEvt,
        onBeforeShow: onControlPopupShow,
        onBeforeHide: onMenuBeforeHide,
        onShow: onMenuShow
      }, getAllOptions);
    }
    function onMenuBeforeHide(e) {
      onControlPopupHide(e);
      closeMenu();
    }
    function onMenuShow() {
      setVirtualScrollSize();
    }
    function onDialogFieldFocus(e) {
      stop(e);
      targetRef.value !== null && targetRef.value.focus();
      dialogFieldFocused.value = true;
      window.scrollTo(window.pageXOffset || window.scrollX || document.body.scrollLeft || 0, 0);
    }
    function onDialogFieldBlur(e) {
      stop(e);
      nextTick(() => {
        dialogFieldFocused.value = false;
      });
    }
    function getDialog() {
      const content = [
        h(QField, {
          class: `col-auto ${state.fieldClass.value}`,
          ...innerFieldProps.value,
          for: state.targetUid.value,
          dark: isOptionsDark.value,
          square: true,
          loading: innerLoadingIndicator.value,
          itemAligned: false,
          filled: true,
          stackLabel: inputValue.value.length !== 0,
          ...state.splitAttrs.listeners.value,
          onFocus: onDialogFieldFocus,
          onBlur: onDialogFieldBlur
        }, {
          ...slots,
          rawControl: () => state.getControl(true),
          before: void 0,
          after: void 0
        })
      ];
      menu.value === true && content.push(
        h("div", {
          ref: menuContentRef,
          class: menuContentClass.value + " scroll",
          style: props.popupContentStyle,
          ...listboxAttrs.value,
          onClick: prevent,
          onScrollPassive: onVirtualScrollEvt
        }, getAllOptions())
      );
      return h(QDialog, {
        ref: dialogRef,
        modelValue: dialog.value,
        position: props.useInput === true ? "top" : void 0,
        transitionShow: transitionShowComputed,
        transitionHide: props.transitionHide,
        transitionDuration: props.transitionDuration,
        noRouteDismiss: props.popupNoRouteDismiss,
        onBeforeShow: onControlPopupShow,
        onBeforeHide: onDialogBeforeHide,
        onHide: onDialogHide,
        onShow: onDialogShow
      }, () => h("div", {
        class: "q-select__dialog" + (isOptionsDark.value === true ? " q-select__dialog--dark q-dark" : "") + (dialogFieldFocused.value === true ? " q-select__dialog--focused" : "")
      }, content));
    }
    function onDialogBeforeHide(e) {
      onControlPopupHide(e);
      if (dialogRef.value !== null) {
        dialogRef.value.__updateRefocusTarget(
          state.rootRef.value.querySelector(".q-field__native > [tabindex]:last-child")
        );
      }
      state.focused.value = false;
    }
    function onDialogHide(e) {
      hidePopup();
      state.focused.value === false && emit("blur", e);
      resetInputValue();
    }
    function onDialogShow() {
      const el = document.activeElement;
      if ((el === null || el.id !== state.targetUid.value) && targetRef.value !== null && targetRef.value !== el) {
        targetRef.value.focus();
      }
      setVirtualScrollSize();
    }
    function closeMenu() {
      if (dialog.value === true) {
        return;
      }
      optionIndex.value = -1;
      if (menu.value === true) {
        menu.value = false;
      }
      if (state.focused.value === false) {
        if (filterId !== null) {
          clearTimeout(filterId);
          filterId = null;
        }
        if (state.innerLoading.value === true) {
          emit("filterAbort");
          state.innerLoading.value = false;
          innerLoadingIndicator.value = false;
        }
      }
    }
    function showPopup(e) {
      if (state.editable.value !== true) {
        return;
      }
      if (hasDialog === true) {
        state.onControlFocusin(e);
        dialog.value = true;
        nextTick(() => {
          state.focus();
        });
      } else {
        state.focus();
      }
      if (props.onFilter !== void 0) {
        filter(inputValue.value);
      } else if (noOptions.value !== true || slots["no-option"] !== void 0) {
        menu.value = true;
      }
    }
    function hidePopup() {
      dialog.value = false;
      closeMenu();
    }
    function resetInputValue() {
      props.useInput === true && updateInputValue(
        props.multiple !== true && props.fillInput === true && innerValue.value.length !== 0 ? getOptionLabel.value(innerValue.value[0]) || "" : "",
        true,
        true
      );
    }
    function updateMenu(show) {
      let optionIndex2 = -1;
      if (show === true) {
        if (innerValue.value.length !== 0) {
          const val = getOptionValue.value(innerValue.value[0]);
          optionIndex2 = props.options.findIndex((v) => isDeepEqual(getOptionValue.value(v), val));
        }
        localResetVirtualScroll(optionIndex2);
      }
      setOptionIndex(optionIndex2);
    }
    function rerenderMenu(newLength, oldLength) {
      if (menu.value === true && state.innerLoading.value === false) {
        localResetVirtualScroll(-1, true);
        nextTick(() => {
          if (menu.value === true && state.innerLoading.value === false) {
            if (newLength > oldLength) {
              localResetVirtualScroll();
            } else {
              updateMenu(true);
            }
          }
        });
      }
    }
    function updateMenuPosition() {
      if (dialog.value === false && menuRef.value !== null) {
        menuRef.value.updatePosition();
      }
    }
    function onControlPopupShow(e) {
      e !== void 0 && stop(e);
      emit("popupShow", e);
      state.hasPopupOpen = true;
      state.onControlFocusin(e);
    }
    function onControlPopupHide(e) {
      e !== void 0 && stop(e);
      emit("popupHide", e);
      state.hasPopupOpen = false;
      state.onControlFocusout(e);
    }
    function updatePreState() {
      hasDialog = $q.platform.is.mobile !== true && props.behavior !== "dialog" ? false : props.behavior !== "menu" && (props.useInput === true ? slots["no-option"] !== void 0 || props.onFilter !== void 0 || noOptions.value === false : true);
      transitionShowComputed = $q.platform.is.ios === true && hasDialog === true && props.useInput === true ? "fade" : props.transitionShow;
    }
    onBeforeUpdate(updatePreState);
    onUpdated(updateMenuPosition);
    updatePreState();
    onBeforeUnmount(() => {
      filterTimer !== null && clearTimeout(filterTimer);
      inputValueTimer !== null && clearTimeout(inputValueTimer);
    });
    Object.assign(proxy, {
      showPopup,
      hidePopup,
      removeAtIndex,
      add,
      toggleOption,
      getOptionIndex: () => optionIndex.value,
      setOptionIndex,
      moveOptionSelection,
      filter,
      updateMenuPosition,
      updateInputValue,
      isOptionSelected,
      getEmittingOptionValue,
      isOptionDisabled: (...args) => isOptionDisabled.value.apply(null, args) === true,
      getOptionValue: (...args) => getOptionValue.value.apply(null, args),
      getOptionLabel: (...args) => getOptionLabel.value.apply(null, args)
    });
    Object.assign(state, {
      innerValue,
      fieldClass: computed(
        () => `q-select q-field--auto-height q-select--with${props.useInput !== true ? "out" : ""}-input q-select--with${props.useChips !== true ? "out" : ""}-chips q-select--${props.multiple === true ? "multiple" : "single"}`
      ),
      inputRef,
      targetRef,
      hasValue,
      showPopup,
      floatingLabel: computed(
        () => props.hideSelected !== true && hasValue.value === true || typeof inputValue.value === "number" || inputValue.value.length !== 0 || fieldValueIsFilled(props.displayValue)
      ),
      getControlChild: () => {
        if (state.editable.value !== false && (dialog.value === true || noOptions.value !== true || slots["no-option"] !== void 0)) {
          return hasDialog === true ? getDialog() : getMenu();
        } else if (state.hasPopupOpen === true) {
          state.hasPopupOpen = false;
        }
      },
      controlEvents: {
        onFocusin(e) {
          state.onControlFocusin(e);
        },
        onFocusout(e) {
          state.onControlFocusout(e, () => {
            resetInputValue();
            closeMenu();
          });
        },
        onClick(e) {
          prevent(e);
          if (hasDialog !== true && menu.value === true) {
            closeMenu();
            targetRef.value !== null && targetRef.value.focus();
            return;
          }
          showPopup(e);
        }
      },
      getControl: (fromDialog) => {
        const child = getSelection();
        const isTarget = fromDialog === true || dialog.value !== true || hasDialog !== true;
        if (props.useInput === true) {
          child.push(getInput(fromDialog, isTarget));
        } else if (state.editable.value === true) {
          const attrs2 = isTarget === true ? comboboxAttrs.value : void 0;
          child.push(
            h("input", {
              ref: isTarget === true ? targetRef : void 0,
              key: "d_t",
              class: "q-select__focus-target",
              id: isTarget === true ? state.targetUid.value : void 0,
              value: ariaCurrentValue.value,
              readonly: true,
              "data-autofocus": fromDialog === true || props.autofocus === true || void 0,
              ...attrs2,
              onKeydown: onTargetKeydown,
              onKeyup: onTargetKeyup,
              onKeypress: onTargetKeypress
            })
          );
          if (isTarget === true && typeof props.autocomplete === "string" && props.autocomplete.length !== 0) {
            child.push(
              h("input", {
                class: "q-select__autocomplete-input",
                autocomplete: props.autocomplete,
                tabindex: -1,
                onKeyup: onTargetAutocomplete
              })
            );
          }
        }
        if (nameProp.value !== void 0 && props.disable !== true && innerOptionsValue.value.length !== 0) {
          const opts = innerOptionsValue.value.map((value) => h("option", { value, selected: true }));
          child.push(
            h("select", {
              class: "hidden",
              name: nameProp.value,
              multiple: props.multiple
            }, opts)
          );
        }
        const attrs = props.useInput === true || isTarget !== true ? void 0 : state.splitAttrs.attributes.value;
        return h("div", {
          class: "q-field__native row items-center",
          ...attrs,
          ...state.splitAttrs.listeners.value
        }, child);
      },
      getInnerAppend: () => props.loading !== true && innerLoadingIndicator.value !== true && props.hideDropdownIcon !== true ? [
        h(QIcon, {
          class: "q-select__dropdown-icon" + (menu.value === true ? " rotate-180" : ""),
          name: dropdownArrowIcon.value
        })
      ] : null
    });
    return useField(state);
  }
});
const defaultSizes = {
  xs: 2,
  sm: 4,
  md: 6,
  lg: 10,
  xl: 14
};
function width(val, reverse, $q) {
  return {
    transform: reverse === true ? `translateX(${$q.lang.rtl === true ? "-" : ""}100%) scale3d(${-val},1,1)` : `scale3d(${val},1,1)`
  };
}
const QLinearProgress = createComponent({
  name: "QLinearProgress",
  props: {
    ...useDarkProps,
    ...useSizeProps,
    value: {
      type: Number,
      default: 0
    },
    buffer: Number,
    color: String,
    trackColor: String,
    reverse: Boolean,
    stripe: Boolean,
    indeterminate: Boolean,
    query: Boolean,
    rounded: Boolean,
    animationSpeed: {
      type: [String, Number],
      default: 2100
    },
    instantFeedback: Boolean
  },
  setup(props, { slots }) {
    const { proxy } = getCurrentInstance();
    const isDark = useDark(props, proxy.$q);
    const sizeStyle = useSize(props, defaultSizes);
    const motion = computed(() => props.indeterminate === true || props.query === true);
    const widthReverse = computed(() => props.reverse !== props.query);
    const style = computed(() => ({
      ...sizeStyle.value !== null ? sizeStyle.value : {},
      "--q-linear-progress-speed": `${props.animationSpeed}ms`
    }));
    const classes = computed(
      () => "q-linear-progress" + (props.color !== void 0 ? ` text-${props.color}` : "") + (props.reverse === true || props.query === true ? " q-linear-progress--reverse" : "") + (props.rounded === true ? " rounded-borders" : "")
    );
    const trackStyle = computed(() => width(props.buffer !== void 0 ? props.buffer : 1, widthReverse.value, proxy.$q));
    const transitionSuffix = computed(() => `with${props.instantFeedback === true ? "out" : ""}-transition`);
    const trackClass = computed(
      () => `q-linear-progress__track absolute-full q-linear-progress__track--${transitionSuffix.value} q-linear-progress__track--${isDark.value === true ? "dark" : "light"}` + (props.trackColor !== void 0 ? ` bg-${props.trackColor}` : "")
    );
    const modelStyle = computed(() => width(motion.value === true ? 1 : props.value, widthReverse.value, proxy.$q));
    const modelClass = computed(
      () => `q-linear-progress__model absolute-full q-linear-progress__model--${transitionSuffix.value} q-linear-progress__model--${motion.value === true ? "in" : ""}determinate`
    );
    const stripeStyle = computed(() => ({ width: `${props.value * 100}%` }));
    const stripeClass = computed(
      () => `q-linear-progress__stripe absolute-${props.reverse === true ? "right" : "left"} q-linear-progress__stripe--${transitionSuffix.value}`
    );
    return () => {
      const child = [
        h("div", {
          class: trackClass.value,
          style: trackStyle.value
        }),
        h("div", {
          class: modelClass.value,
          style: modelStyle.value
        })
      ];
      props.stripe === true && motion.value === false && child.push(
        h("div", {
          class: stripeClass.value,
          style: stripeStyle.value
        })
      );
      return h("div", {
        class: classes.value,
        style: style.value,
        role: "progressbar",
        "aria-valuemin": 0,
        "aria-valuemax": 1,
        "aria-valuenow": props.indeterminate === true ? void 0 : props.value
      }, hMergeSlot(slots.default, child));
    };
  }
});
function useRefocusTarget(props, rootRef) {
  const refocusRef = ref(null);
  const refocusTargetEl = computed(() => {
    if (props.disable === true) {
      return null;
    }
    return h("span", {
      ref: refocusRef,
      class: "no-outline",
      tabindex: -1
    });
  });
  function refocusTarget(e) {
    const root = rootRef.value;
    if (e !== void 0 && e.type.indexOf("key") === 0) {
      if (root !== null && document.activeElement !== root && root.contains(document.activeElement) === true) {
        root.focus();
      }
    } else if (refocusRef.value !== null && (e === void 0 || root !== null && root.contains(e.target) === true)) {
      refocusRef.value.focus();
    }
  }
  return {
    refocusTargetEl,
    refocusTarget
  };
}
const optionSizes = {
  xs: 30,
  sm: 35,
  md: 40,
  lg: 50,
  xl: 60
};
const useCheckboxProps = {
  ...useDarkProps,
  ...useSizeProps,
  ...useFormProps,
  modelValue: {
    required: true,
    default: null
  },
  val: {},
  trueValue: { default: true },
  falseValue: { default: false },
  indeterminateValue: { default: null },
  checkedIcon: String,
  uncheckedIcon: String,
  indeterminateIcon: String,
  toggleOrder: {
    type: String,
    validator: (v) => v === "tf" || v === "ft"
  },
  toggleIndeterminate: Boolean,
  label: String,
  leftLabel: Boolean,
  color: String,
  keepColor: Boolean,
  dense: Boolean,
  disable: Boolean,
  tabindex: [String, Number]
};
const useCheckboxEmits = ["update:modelValue"];
function useCheckbox(type, getInner) {
  const { props, slots, emit, proxy } = getCurrentInstance();
  const { $q } = proxy;
  const isDark = useDark(props, $q);
  const rootRef = ref(null);
  const { refocusTargetEl, refocusTarget } = useRefocusTarget(props, rootRef);
  const sizeStyle = useSize(props, optionSizes);
  const modelIsArray = computed(
    () => props.val !== void 0 && Array.isArray(props.modelValue)
  );
  const index = computed(() => {
    const val = toRaw(props.val);
    return modelIsArray.value === true ? props.modelValue.findIndex((opt) => toRaw(opt) === val) : -1;
  });
  const isTrue = computed(() => modelIsArray.value === true ? index.value !== -1 : toRaw(props.modelValue) === toRaw(props.trueValue));
  const isFalse = computed(() => modelIsArray.value === true ? index.value === -1 : toRaw(props.modelValue) === toRaw(props.falseValue));
  const isIndeterminate = computed(
    () => isTrue.value === false && isFalse.value === false
  );
  const tabindex = computed(() => props.disable === true ? -1 : props.tabindex || 0);
  const classes = computed(
    () => `q-${type} cursor-pointer no-outline row inline no-wrap items-center` + (props.disable === true ? " disabled" : "") + (isDark.value === true ? ` q-${type}--dark` : "") + (props.dense === true ? ` q-${type}--dense` : "") + (props.leftLabel === true ? " reverse" : "")
  );
  const innerClass = computed(() => {
    const state = isTrue.value === true ? "truthy" : isFalse.value === true ? "falsy" : "indet";
    const color = props.color !== void 0 && (props.keepColor === true || (type === "toggle" ? isTrue.value === true : isFalse.value !== true)) ? ` text-${props.color}` : "";
    return `q-${type}__inner relative-position non-selectable q-${type}__inner--${state}${color}`;
  });
  const formAttrs = computed(() => {
    const prop = { type: "checkbox" };
    props.name !== void 0 && Object.assign(prop, {
      // see https://vuejs.org/guide/extras/render-function.html#creating-vnodes (.prop)
      ".checked": isTrue.value,
      "^checked": isTrue.value === true ? "checked" : void 0,
      name: props.name,
      value: modelIsArray.value === true ? props.val : props.trueValue
    });
    return prop;
  });
  const injectFormInput = useFormInject(formAttrs);
  const attributes = computed(() => {
    const attrs = {
      tabindex: tabindex.value,
      role: type === "toggle" ? "switch" : "checkbox",
      "aria-label": props.label,
      "aria-checked": isIndeterminate.value === true ? "mixed" : isTrue.value === true ? "true" : "false"
    };
    if (props.disable === true) {
      attrs["aria-disabled"] = "true";
    }
    return attrs;
  });
  function onClick(e) {
    if (e !== void 0) {
      stopAndPrevent(e);
      refocusTarget(e);
    }
    if (props.disable !== true) {
      emit("update:modelValue", getNextValue(), e);
    }
  }
  function getNextValue() {
    if (modelIsArray.value === true) {
      if (isTrue.value === true) {
        const val = props.modelValue.slice();
        val.splice(index.value, 1);
        return val;
      }
      return props.modelValue.concat([props.val]);
    }
    if (isTrue.value === true) {
      if (props.toggleOrder !== "ft" || props.toggleIndeterminate === false) {
        return props.falseValue;
      }
    } else if (isFalse.value === true) {
      if (props.toggleOrder === "ft" || props.toggleIndeterminate === false) {
        return props.trueValue;
      }
    } else {
      return props.toggleOrder !== "ft" ? props.trueValue : props.falseValue;
    }
    return props.indeterminateValue;
  }
  function onKeydown2(e) {
    if (e.keyCode === 13 || e.keyCode === 32) {
      stopAndPrevent(e);
    }
  }
  function onKeyup2(e) {
    if (e.keyCode === 13 || e.keyCode === 32) {
      onClick(e);
    }
  }
  const getInnerContent = getInner(isTrue, isIndeterminate);
  Object.assign(proxy, { toggle: onClick });
  return () => {
    const inner = getInnerContent();
    props.disable !== true && injectFormInput(
      inner,
      "unshift",
      ` q-${type}__native absolute q-ma-none q-pa-none`
    );
    const child = [
      h("div", {
        class: innerClass.value,
        style: sizeStyle.value,
        "aria-hidden": "true"
      }, inner)
    ];
    if (refocusTargetEl.value !== null) {
      child.push(refocusTargetEl.value);
    }
    const label = props.label !== void 0 ? hMergeSlot(slots.default, [props.label]) : hSlot(slots.default);
    label !== void 0 && child.push(
      h("div", {
        class: `q-${type}__label q-anchor--skip`
      }, label)
    );
    return h("div", {
      ref: rootRef,
      class: classes.value,
      ...attributes.value,
      onClick,
      onKeydown: onKeydown2,
      onKeyup: onKeyup2
    }, child);
  };
}
const bgNode = h("div", {
  key: "svg",
  class: "q-checkbox__bg absolute"
}, [
  h("svg", {
    class: "q-checkbox__svg fit absolute-full",
    viewBox: "0 0 24 24"
  }, [
    h("path", {
      class: "q-checkbox__truthy",
      fill: "none",
      d: "M1.73,12.91 8.1,19.28 22.79,4.59"
    }),
    h("path", {
      class: "q-checkbox__indet",
      d: "M4,14H20V10H4"
    })
  ])
]);
const QCheckbox = createComponent({
  name: "QCheckbox",
  props: useCheckboxProps,
  emits: useCheckboxEmits,
  setup(props) {
    function getInner(isTrue, isIndeterminate) {
      const icon = computed(
        () => (isTrue.value === true ? props.checkedIcon : isIndeterminate.value === true ? props.indeterminateIcon : props.uncheckedIcon) || null
      );
      return () => icon.value !== null ? [
        h("div", {
          key: "icon",
          class: "q-checkbox__icon-container absolute-full flex flex-center no-wrap"
        }, [
          h(QIcon, {
            class: "q-checkbox__icon",
            name: icon.value
          })
        ])
      ] : [bgNode];
    }
    return useCheckbox("checkbox", getInner);
  }
});
let counter = 0;
const useFullscreenProps = {
  fullscreen: Boolean,
  noRouteFullscreenExit: Boolean
};
const useFullscreenEmits = ["update:fullscreen", "fullscreen"];
function useFullscreen() {
  const vm = getCurrentInstance();
  const { props, emit, proxy } = vm;
  let historyEntry, fullscreenFillerNode, container;
  const inFullscreen = ref(false);
  vmHasRouter(vm) === true && watch(() => proxy.$route.fullPath, () => {
    props.noRouteFullscreenExit !== true && exitFullscreen();
  });
  watch(() => props.fullscreen, (v) => {
    if (inFullscreen.value !== v) {
      toggleFullscreen();
    }
  });
  watch(inFullscreen, (v) => {
    emit("update:fullscreen", v);
    emit("fullscreen", v);
  });
  function toggleFullscreen() {
    if (inFullscreen.value === true) {
      exitFullscreen();
    } else {
      setFullscreen();
    }
  }
  function setFullscreen() {
    if (inFullscreen.value === true) {
      return;
    }
    inFullscreen.value = true;
    container = proxy.$el.parentNode;
    container.replaceChild(fullscreenFillerNode, proxy.$el);
    document.body.appendChild(proxy.$el);
    counter++;
    if (counter === 1) {
      document.body.classList.add("q-body--fullscreen-mixin");
    }
    historyEntry = {
      handler: exitFullscreen
    };
    History.add(historyEntry);
  }
  function exitFullscreen() {
    if (inFullscreen.value !== true) {
      return;
    }
    if (historyEntry !== void 0) {
      History.remove(historyEntry);
      historyEntry = void 0;
    }
    container.replaceChild(proxy.$el, fullscreenFillerNode);
    inFullscreen.value = false;
    counter = Math.max(0, counter - 1);
    if (counter === 0) {
      document.body.classList.remove("q-body--fullscreen-mixin");
      if (proxy.$el.scrollIntoView !== void 0) {
        setTimeout(() => {
          proxy.$el.scrollIntoView();
        });
      }
    }
  }
  onBeforeMount(() => {
    fullscreenFillerNode = document.createElement("span");
  });
  onMounted(() => {
    props.fullscreen === true && setFullscreen();
  });
  onBeforeUnmount(exitFullscreen);
  Object.assign(proxy, {
    toggleFullscreen,
    setFullscreen,
    exitFullscreen
  });
  return {
    inFullscreen,
    toggleFullscreen
  };
}
function sortDate(a, b) {
  return new Date(a) - new Date(b);
}
const useTableSortProps = {
  sortMethod: Function,
  binaryStateSort: Boolean,
  columnSortOrder: {
    type: String,
    validator: (v) => v === "ad" || v === "da",
    default: "ad"
  }
};
function useTableSort(props, computedPagination, colList, setPagination) {
  const columnToSort = computed(() => {
    const { sortBy } = computedPagination.value;
    return sortBy ? colList.value.find((def) => def.name === sortBy) || null : null;
  });
  const computedSortMethod = computed(() => props.sortMethod !== void 0 ? props.sortMethod : (data, sortBy, descending) => {
    const col = colList.value.find((def) => def.name === sortBy);
    if (col === void 0 || col.field === void 0) {
      return data;
    }
    const dir = descending === true ? -1 : 1, val = typeof col.field === "function" ? (v) => col.field(v) : (v) => v[col.field];
    return data.sort((a, b) => {
      let A = val(a), B = val(b);
      if (col.rawSort !== void 0) {
        return col.rawSort(A, B, a, b) * dir;
      }
      if (A === null || A === void 0) {
        return -1 * dir;
      }
      if (B === null || B === void 0) {
        return 1 * dir;
      }
      if (col.sort !== void 0) {
        return col.sort(A, B, a, b) * dir;
      }
      if (isNumber(A) === true && isNumber(B) === true) {
        return (A - B) * dir;
      }
      if (isDate(A) === true && isDate(B) === true) {
        return sortDate(A, B) * dir;
      }
      if (typeof A === "boolean" && typeof B === "boolean") {
        return (A - B) * dir;
      }
      [A, B] = [A, B].map((s) => (s + "").toLocaleString().toLowerCase());
      return A < B ? -1 * dir : A === B ? 0 : dir;
    });
  });
  function sort(col) {
    let sortOrder = props.columnSortOrder;
    if (isObject(col) === true) {
      if (col.sortOrder) {
        sortOrder = col.sortOrder;
      }
      col = col.name;
    } else {
      const def = colList.value.find((def2) => def2.name === col);
      if (def !== void 0 && def.sortOrder) {
        sortOrder = def.sortOrder;
      }
    }
    let { sortBy, descending } = computedPagination.value;
    if (sortBy !== col) {
      sortBy = col;
      descending = sortOrder === "da";
    } else if (props.binaryStateSort === true) {
      descending = !descending;
    } else if (descending === true) {
      if (sortOrder === "ad") {
        sortBy = null;
      } else {
        descending = false;
      }
    } else {
      if (sortOrder === "ad") {
        descending = true;
      } else {
        sortBy = null;
      }
    }
    setPagination({ sortBy, descending, page: 1 });
  }
  return {
    columnToSort,
    computedSortMethod,
    sort
  };
}
const useTableFilterProps = {
  filter: [String, Object],
  filterMethod: Function
};
function useTableFilter(props, setPagination) {
  const computedFilterMethod = computed(() => props.filterMethod !== void 0 ? props.filterMethod : (rows2, terms, cols, cellValue) => {
    const lowerTerms = terms ? terms.toLowerCase() : "";
    return rows2.filter(
      (row) => cols.some((col) => {
        const val = cellValue(col, row) + "";
        const haystack = val === "undefined" || val === "null" ? "" : val.toLowerCase();
        return haystack.indexOf(lowerTerms) !== -1;
      })
    );
  });
  watch(
    () => props.filter,
    () => {
      nextTick(() => {
        setPagination({ page: 1 }, true);
      });
    },
    { deep: true }
  );
  return { computedFilterMethod };
}
function samePagination(oldPag, newPag) {
  for (const prop in newPag) {
    if (newPag[prop] !== oldPag[prop]) {
      return false;
    }
  }
  return true;
}
function fixPagination(p) {
  if (p.page < 1) {
    p.page = 1;
  }
  if (p.rowsPerPage !== void 0 && p.rowsPerPage < 1) {
    p.rowsPerPage = 0;
  }
  return p;
}
const useTablePaginationProps = {
  pagination: Object,
  rowsPerPageOptions: {
    type: Array,
    default: () => [5, 7, 10, 15, 20, 25, 50, 0]
  },
  "onUpdate:pagination": [Function, Array]
};
function useTablePaginationState(vm, getCellValue) {
  const { props, emit } = vm;
  const innerPagination = ref(
    Object.assign({
      sortBy: null,
      descending: false,
      page: 1,
      rowsPerPage: props.rowsPerPageOptions.length !== 0 ? props.rowsPerPageOptions[0] : 5
    }, props.pagination)
  );
  const computedPagination = computed(() => {
    const pag = props["onUpdate:pagination"] !== void 0 ? { ...innerPagination.value, ...props.pagination } : innerPagination.value;
    return fixPagination(pag);
  });
  const isServerSide = computed(() => computedPagination.value.rowsNumber !== void 0);
  function sendServerRequest(pagination) {
    requestServerInteraction({
      pagination,
      filter: props.filter
    });
  }
  function requestServerInteraction(prop = {}) {
    nextTick(() => {
      emit("request", {
        pagination: prop.pagination || computedPagination.value,
        filter: prop.filter || props.filter,
        getCellValue
      });
    });
  }
  function setPagination(val, forceServerRequest) {
    const newPagination = fixPagination({
      ...computedPagination.value,
      ...val
    });
    if (samePagination(computedPagination.value, newPagination) === true) {
      if (isServerSide.value === true && forceServerRequest === true) {
        sendServerRequest(newPagination);
      }
      return;
    }
    if (isServerSide.value === true) {
      sendServerRequest(newPagination);
      return;
    }
    if (props.pagination !== void 0 && props["onUpdate:pagination"] !== void 0) {
      emit("update:pagination", newPagination);
    } else {
      innerPagination.value = newPagination;
    }
  }
  return {
    innerPagination,
    computedPagination,
    isServerSide,
    requestServerInteraction,
    setPagination
  };
}
function useTablePagination(vm, innerPagination, computedPagination, isServerSide, setPagination, filteredSortedRowsNumber) {
  const { props, emit, proxy: { $q } } = vm;
  const computedRowsNumber = computed(() => isServerSide.value === true ? computedPagination.value.rowsNumber || 0 : filteredSortedRowsNumber.value);
  const firstRowIndex = computed(() => {
    const { page, rowsPerPage } = computedPagination.value;
    return (page - 1) * rowsPerPage;
  });
  const lastRowIndex = computed(() => {
    const { page, rowsPerPage } = computedPagination.value;
    return page * rowsPerPage;
  });
  const isFirstPage = computed(() => computedPagination.value.page === 1);
  const pagesNumber = computed(() => computedPagination.value.rowsPerPage === 0 ? 1 : Math.max(
    1,
    Math.ceil(computedRowsNumber.value / computedPagination.value.rowsPerPage)
  ));
  const isLastPage = computed(() => lastRowIndex.value === 0 ? true : computedPagination.value.page >= pagesNumber.value);
  const computedRowsPerPageOptions = computed(() => {
    const opts = props.rowsPerPageOptions.includes(innerPagination.value.rowsPerPage) ? props.rowsPerPageOptions : [innerPagination.value.rowsPerPage].concat(props.rowsPerPageOptions);
    return opts.map((count) => ({
      label: count === 0 ? $q.lang.table.allRows : "" + count,
      value: count
    }));
  });
  watch(pagesNumber, (lastPage2, oldLastPage) => {
    if (lastPage2 === oldLastPage) {
      return;
    }
    const currentPage = computedPagination.value.page;
    if (lastPage2 && !currentPage) {
      setPagination({ page: 1 });
    } else if (lastPage2 < currentPage) {
      setPagination({ page: lastPage2 });
    }
  });
  function firstPage() {
    setPagination({ page: 1 });
  }
  function prevPage() {
    const { page } = computedPagination.value;
    if (page > 1) {
      setPagination({ page: page - 1 });
    }
  }
  function nextPage() {
    const { page, rowsPerPage } = computedPagination.value;
    if (lastRowIndex.value > 0 && page * rowsPerPage < computedRowsNumber.value) {
      setPagination({ page: page + 1 });
    }
  }
  function lastPage() {
    setPagination({ page: pagesNumber.value });
  }
  if (props["onUpdate:pagination"] !== void 0) {
    emit("update:pagination", { ...computedPagination.value });
  }
  return {
    firstRowIndex,
    lastRowIndex,
    isFirstPage,
    isLastPage,
    pagesNumber,
    computedRowsPerPageOptions,
    computedRowsNumber,
    firstPage,
    prevPage,
    nextPage,
    lastPage
  };
}
const useTableRowSelectionProps = {
  selection: {
    type: String,
    default: "none",
    validator: (v) => ["single", "multiple", "none"].includes(v)
  },
  selected: {
    type: Array,
    default: () => []
  }
};
const useTableRowSelectionEmits = ["update:selected", "selection"];
function useTableRowSelection(props, emit, computedRows, getRowKey) {
  const selectedKeys = computed(() => {
    const keys = {};
    props.selected.map(getRowKey.value).forEach((key) => {
      keys[key] = true;
    });
    return keys;
  });
  const hasSelectionMode = computed(() => {
    return props.selection !== "none";
  });
  const singleSelection = computed(() => {
    return props.selection === "single";
  });
  const multipleSelection = computed(() => {
    return props.selection === "multiple";
  });
  const allRowsSelected = computed(
    () => computedRows.value.length !== 0 && computedRows.value.every(
      (row) => selectedKeys.value[getRowKey.value(row)] === true
    )
  );
  const someRowsSelected = computed(
    () => allRowsSelected.value !== true && computedRows.value.some((row) => selectedKeys.value[getRowKey.value(row)] === true)
  );
  const rowsSelectedNumber = computed(() => props.selected.length);
  function isRowSelected(key) {
    return selectedKeys.value[key] === true;
  }
  function clearSelection2() {
    emit("update:selected", []);
  }
  function updateSelection(keys, rows2, added, evt) {
    emit("selection", { rows: rows2, added, keys, evt });
    const payload = singleSelection.value === true ? added === true ? rows2 : [] : added === true ? props.selected.concat(rows2) : props.selected.filter(
      (row) => keys.includes(getRowKey.value(row)) === false
    );
    emit("update:selected", payload);
  }
  return {
    hasSelectionMode,
    singleSelection,
    multipleSelection,
    allRowsSelected,
    someRowsSelected,
    rowsSelectedNumber,
    isRowSelected,
    clearSelection: clearSelection2,
    updateSelection
  };
}
function getVal(val) {
  return Array.isArray(val) ? val.slice() : [];
}
const useTableRowExpandProps = {
  expanded: Array
  // v-model:expanded
};
const useTableRowExpandEmits = ["update:expanded"];
function useTableRowExpand(props, emit) {
  const innerExpanded = ref(getVal(props.expanded));
  watch(() => props.expanded, (val) => {
    innerExpanded.value = getVal(val);
  });
  function isRowExpanded(key) {
    return innerExpanded.value.includes(key);
  }
  function setExpanded(val) {
    if (props.expanded !== void 0) {
      emit("update:expanded", val);
    } else {
      innerExpanded.value = val;
    }
  }
  function updateExpanded(key, add) {
    const target2 = innerExpanded.value.slice();
    const index = target2.indexOf(key);
    if (add === true) {
      if (index === -1) {
        target2.push(key);
        setExpanded(target2);
      }
    } else if (index !== -1) {
      target2.splice(index, 1);
      setExpanded(target2);
    }
  }
  return {
    isRowExpanded,
    setExpanded,
    updateExpanded
  };
}
const useTableColumnSelectionProps = {
  visibleColumns: Array
};
function useTableColumnSelection(props, computedPagination, hasSelectionMode) {
  const colList = computed(() => {
    if (props.columns !== void 0) {
      return props.columns;
    }
    const row = props.rows[0];
    return row !== void 0 ? Object.keys(row).map((name) => ({
      name,
      label: name.toUpperCase(),
      field: name,
      align: isNumber(row[name]) ? "right" : "left",
      sortable: true
    })) : [];
  });
  const computedCols = computed(() => {
    const { sortBy, descending } = computedPagination.value;
    const cols = props.visibleColumns !== void 0 ? colList.value.filter((col) => col.required === true || props.visibleColumns.includes(col.name) === true) : colList.value;
    return cols.map((col) => {
      const align = col.align || "right";
      const alignClass = `text-${align}`;
      return {
        ...col,
        align,
        __iconClass: `q-table__sort-icon q-table__sort-icon--${align}`,
        __thClass: alignClass + (col.headerClasses !== void 0 ? " " + col.headerClasses : "") + (col.sortable === true ? " sortable" : "") + (col.name === sortBy ? ` sorted ${descending === true ? "sort-desc" : ""}` : ""),
        __tdStyle: col.style !== void 0 ? typeof col.style !== "function" ? () => col.style : col.style : () => null,
        __tdClass: col.classes !== void 0 ? typeof col.classes !== "function" ? () => alignClass + " " + col.classes : (row) => alignClass + " " + col.classes(row) : () => alignClass
      };
    });
  });
  const computedColsMap = computed(() => {
    const names = {};
    computedCols.value.forEach((col) => {
      names[col.name] = col;
    });
    return names;
  });
  const computedColspan = computed(() => {
    return props.tableColspan !== void 0 ? props.tableColspan : computedCols.value.length + (hasSelectionMode.value === true ? 1 : 0);
  });
  return {
    colList,
    computedCols,
    computedColsMap,
    computedColspan
  };
}
const bottomClass = "q-table__bottom row items-center";
const commonVirtPropsObj = {};
commonVirtPropsList.forEach((p) => {
  commonVirtPropsObj[p] = {};
});
const QTable = createComponent({
  name: "QTable",
  props: {
    rows: {
      type: Array,
      default: () => []
    },
    rowKey: {
      type: [String, Function],
      default: "id"
    },
    columns: Array,
    loading: Boolean,
    iconFirstPage: String,
    iconPrevPage: String,
    iconNextPage: String,
    iconLastPage: String,
    title: String,
    hideHeader: Boolean,
    grid: Boolean,
    gridHeader: Boolean,
    dense: Boolean,
    flat: Boolean,
    bordered: Boolean,
    square: Boolean,
    separator: {
      type: String,
      default: "horizontal",
      validator: (v) => ["horizontal", "vertical", "cell", "none"].includes(v)
    },
    wrapCells: Boolean,
    virtualScroll: Boolean,
    virtualScrollTarget: {
      default: void 0
    },
    ...commonVirtPropsObj,
    noDataLabel: String,
    noResultsLabel: String,
    loadingLabel: String,
    selectedRowsLabel: Function,
    rowsPerPageLabel: String,
    paginationLabel: Function,
    color: {
      type: String,
      default: "grey-8"
    },
    titleClass: [String, Array, Object],
    tableStyle: [String, Array, Object],
    tableClass: [String, Array, Object],
    tableHeaderStyle: [String, Array, Object],
    tableHeaderClass: [String, Array, Object],
    cardContainerClass: [String, Array, Object],
    cardContainerStyle: [String, Array, Object],
    cardStyle: [String, Array, Object],
    cardClass: [String, Array, Object],
    hideBottom: Boolean,
    hideSelectedBanner: Boolean,
    hideNoData: Boolean,
    hidePagination: Boolean,
    onRowClick: Function,
    onRowDblclick: Function,
    onRowContextmenu: Function,
    ...useDarkProps,
    ...useFullscreenProps,
    ...useTableColumnSelectionProps,
    ...useTableFilterProps,
    ...useTablePaginationProps,
    ...useTableRowExpandProps,
    ...useTableRowSelectionProps,
    ...useTableSortProps
  },
  emits: [
    "request",
    "virtualScroll",
    ...useFullscreenEmits,
    ...useTableRowExpandEmits,
    ...useTableRowSelectionEmits
  ],
  setup(props, { slots, emit }) {
    const vm = getCurrentInstance();
    const { proxy: { $q } } = vm;
    const isDark = useDark(props, $q);
    const { inFullscreen, toggleFullscreen } = useFullscreen();
    const getRowKey = computed(() => typeof props.rowKey === "function" ? props.rowKey : (row) => row[props.rowKey]);
    const rootRef = ref(null);
    const virtScrollRef = ref(null);
    const hasVirtScroll = computed(() => props.grid !== true && props.virtualScroll === true);
    const cardDefaultClass = computed(
      () => " q-table__card" + (isDark.value === true ? " q-table__card--dark q-dark" : "") + (props.square === true ? " q-table--square" : "") + (props.flat === true ? " q-table--flat" : "") + (props.bordered === true ? " q-table--bordered" : "")
    );
    const __containerClass = computed(
      () => `q-table__container q-table--${props.separator}-separator column no-wrap` + (props.grid === true ? " q-table--grid" : cardDefaultClass.value) + (isDark.value === true ? " q-table--dark" : "") + (props.dense === true ? " q-table--dense" : "") + (props.wrapCells === false ? " q-table--no-wrap" : "") + (inFullscreen.value === true ? " fullscreen scroll" : "")
    );
    const containerClass = computed(
      () => __containerClass.value + (props.loading === true ? " q-table--loading" : "")
    );
    watch(
      () => props.tableStyle + props.tableClass + props.tableHeaderStyle + props.tableHeaderClass + __containerClass.value,
      () => {
        hasVirtScroll.value === true && virtScrollRef.value !== null && virtScrollRef.value.reset();
      }
    );
    const {
      innerPagination,
      computedPagination,
      isServerSide,
      requestServerInteraction,
      setPagination
    } = useTablePaginationState(vm, getCellValue);
    const { computedFilterMethod } = useTableFilter(props, setPagination);
    const { isRowExpanded, setExpanded, updateExpanded } = useTableRowExpand(props, emit);
    const filteredSortedRows = computed(() => {
      let rows2 = props.rows;
      if (isServerSide.value === true || rows2.length === 0) {
        return rows2;
      }
      const { sortBy, descending } = computedPagination.value;
      if (props.filter) {
        rows2 = computedFilterMethod.value(rows2, props.filter, computedCols.value, getCellValue);
      }
      if (columnToSort.value !== null) {
        rows2 = computedSortMethod.value(
          props.rows === rows2 ? rows2.slice() : rows2,
          sortBy,
          descending
        );
      }
      return rows2;
    });
    const filteredSortedRowsNumber = computed(() => filteredSortedRows.value.length);
    const computedRows = computed(() => {
      let rows2 = filteredSortedRows.value;
      if (isServerSide.value === true) {
        return rows2;
      }
      const { rowsPerPage } = computedPagination.value;
      if (rowsPerPage !== 0) {
        if (firstRowIndex.value === 0 && props.rows !== rows2) {
          if (rows2.length > lastRowIndex.value) {
            rows2 = rows2.slice(0, lastRowIndex.value);
          }
        } else {
          rows2 = rows2.slice(firstRowIndex.value, lastRowIndex.value);
        }
      }
      return rows2;
    });
    const {
      hasSelectionMode,
      singleSelection,
      multipleSelection,
      allRowsSelected,
      someRowsSelected,
      rowsSelectedNumber,
      isRowSelected,
      clearSelection: clearSelection2,
      updateSelection
    } = useTableRowSelection(props, emit, computedRows, getRowKey);
    const { colList, computedCols, computedColsMap, computedColspan } = useTableColumnSelection(props, computedPagination, hasSelectionMode);
    const { columnToSort, computedSortMethod, sort } = useTableSort(props, computedPagination, colList, setPagination);
    const {
      firstRowIndex,
      lastRowIndex,
      isFirstPage,
      isLastPage,
      pagesNumber,
      computedRowsPerPageOptions,
      computedRowsNumber,
      firstPage,
      prevPage,
      nextPage,
      lastPage
    } = useTablePagination(vm, innerPagination, computedPagination, isServerSide, setPagination, filteredSortedRowsNumber);
    const nothingToDisplay = computed(() => computedRows.value.length === 0);
    const virtProps = computed(() => {
      const acc = {};
      commonVirtPropsList.forEach((p) => {
        acc[p] = props[p];
      });
      if (acc.virtualScrollItemSize === void 0) {
        acc.virtualScrollItemSize = props.dense === true ? 28 : 48;
      }
      return acc;
    });
    function resetVirtualScroll() {
      hasVirtScroll.value === true && virtScrollRef.value.reset();
    }
    function getBody() {
      if (props.grid === true) {
        return getGridBody();
      }
      const header = props.hideHeader !== true ? getTHead : null;
      if (hasVirtScroll.value === true) {
        const topRow = slots["top-row"];
        const bottomRow = slots["bottom-row"];
        const virtSlots = {
          default: (props2) => getTBodyTR(props2.item, slots.body, props2.index)
        };
        if (topRow !== void 0) {
          const topContent = h("tbody", topRow({ cols: computedCols.value }));
          virtSlots.before = header === null ? () => topContent : () => [header()].concat(topContent);
        } else if (header !== null) {
          virtSlots.before = header;
        }
        if (bottomRow !== void 0) {
          virtSlots.after = () => h("tbody", bottomRow({ cols: computedCols.value }));
        }
        return h(QVirtualScroll, {
          ref: virtScrollRef,
          class: props.tableClass,
          style: props.tableStyle,
          ...virtProps.value,
          scrollTarget: props.virtualScrollTarget,
          items: computedRows.value,
          type: "__qtable",
          tableColspan: computedColspan.value,
          onVirtualScroll: onVScroll
        }, virtSlots);
      }
      const child = [
        getTBody()
      ];
      if (header !== null) {
        child.unshift(header());
      }
      return getTableMiddle({
        class: ["q-table__middle scroll", props.tableClass],
        style: props.tableStyle
      }, child);
    }
    function scrollTo(toIndex, edge) {
      if (virtScrollRef.value !== null) {
        virtScrollRef.value.scrollTo(toIndex, edge);
        return;
      }
      toIndex = parseInt(toIndex, 10);
      const rowEl = rootRef.value.querySelector(`tbody tr:nth-of-type(${toIndex + 1})`);
      if (rowEl !== null) {
        const scrollTarget = rootRef.value.querySelector(".q-table__middle.scroll");
        const offsetTop = rowEl.offsetTop - props.virtualScrollStickySizeStart;
        const direction = offsetTop < scrollTarget.scrollTop ? "decrease" : "increase";
        scrollTarget.scrollTop = offsetTop;
        emit("virtualScroll", {
          index: toIndex,
          from: 0,
          to: innerPagination.value.rowsPerPage - 1,
          direction
        });
      }
    }
    function onVScroll(info) {
      emit("virtualScroll", info);
    }
    function getProgress() {
      return [
        h(QLinearProgress, {
          class: "q-table__linear-progress",
          color: props.color,
          dark: isDark.value,
          indeterminate: true,
          trackColor: "transparent"
        })
      ];
    }
    function getTBodyTR(row, bodySlot, pageIndex) {
      const key = getRowKey.value(row), selected = isRowSelected(key);
      if (bodySlot !== void 0) {
        return bodySlot(
          getBodyScope({
            key,
            row,
            pageIndex,
            __trClass: selected ? "selected" : ""
          })
        );
      }
      const bodyCell = slots["body-cell"], child = computedCols.value.map((col) => {
        const bodyCellCol = slots[`body-cell-${col.name}`], slot = bodyCellCol !== void 0 ? bodyCellCol : bodyCell;
        return slot !== void 0 ? slot(getBodyCellScope({ key, row, pageIndex, col })) : h("td", {
          class: col.__tdClass(row),
          style: col.__tdStyle(row)
        }, getCellValue(col, row));
      });
      if (hasSelectionMode.value === true) {
        const slot = slots["body-selection"];
        const content = slot !== void 0 ? slot(getBodySelectionScope({ key, row, pageIndex })) : [
          h(QCheckbox, {
            modelValue: selected,
            color: props.color,
            dark: isDark.value,
            dense: props.dense,
            "onUpdate:modelValue": (adding, evt) => {
              updateSelection([key], [row], adding, evt);
            }
          })
        ];
        child.unshift(
          h("td", { class: "q-table--col-auto-width" }, content)
        );
      }
      const data = { key, class: { selected } };
      if (props.onRowClick !== void 0) {
        data.class["cursor-pointer"] = true;
        data.onClick = (evt) => {
          emit("RowClick", evt, row, pageIndex);
        };
      }
      if (props.onRowDblclick !== void 0) {
        data.class["cursor-pointer"] = true;
        data.onDblclick = (evt) => {
          emit("RowDblclick", evt, row, pageIndex);
        };
      }
      if (props.onRowContextmenu !== void 0) {
        data.class["cursor-pointer"] = true;
        data.onContextmenu = (evt) => {
          emit("RowContextmenu", evt, row, pageIndex);
        };
      }
      return h("tr", data, child);
    }
    function getTBody() {
      const body = slots.body, topRow = slots["top-row"], bottomRow = slots["bottom-row"];
      let child = computedRows.value.map(
        (row, pageIndex) => getTBodyTR(row, body, pageIndex)
      );
      if (topRow !== void 0) {
        child = topRow({ cols: computedCols.value }).concat(child);
      }
      if (bottomRow !== void 0) {
        child = child.concat(bottomRow({ cols: computedCols.value }));
      }
      return h("tbody", child);
    }
    function getBodyScope(data) {
      injectBodyCommonScope(data);
      data.cols = data.cols.map(
        (col) => injectProp({ ...col }, "value", () => getCellValue(col, data.row))
      );
      return data;
    }
    function getBodyCellScope(data) {
      injectBodyCommonScope(data);
      injectProp(data, "value", () => getCellValue(data.col, data.row));
      return data;
    }
    function getBodySelectionScope(data) {
      injectBodyCommonScope(data);
      return data;
    }
    function injectBodyCommonScope(data) {
      Object.assign(data, {
        cols: computedCols.value,
        colsMap: computedColsMap.value,
        sort,
        rowIndex: firstRowIndex.value + data.pageIndex,
        color: props.color,
        dark: isDark.value,
        dense: props.dense
      });
      hasSelectionMode.value === true && injectProp(
        data,
        "selected",
        () => isRowSelected(data.key),
        (adding, evt) => {
          updateSelection([data.key], [data.row], adding, evt);
        }
      );
      injectProp(
        data,
        "expand",
        () => isRowExpanded(data.key),
        (adding) => {
          updateExpanded(data.key, adding);
        }
      );
    }
    function getCellValue(col, row) {
      const val = typeof col.field === "function" ? col.field(row) : row[col.field];
      return col.format !== void 0 ? col.format(val, row) : val;
    }
    const marginalsScope = computed(() => ({
      pagination: computedPagination.value,
      pagesNumber: pagesNumber.value,
      isFirstPage: isFirstPage.value,
      isLastPage: isLastPage.value,
      firstPage,
      prevPage,
      nextPage,
      lastPage,
      inFullscreen: inFullscreen.value,
      toggleFullscreen
    }));
    function getTopDiv() {
      const top = slots.top, topLeft = slots["top-left"], topRight = slots["top-right"], topSelection = slots["top-selection"], hasSelection = hasSelectionMode.value === true && topSelection !== void 0 && rowsSelectedNumber.value > 0, topClass = "q-table__top relative-position row items-center";
      if (top !== void 0) {
        return h("div", { class: topClass }, [top(marginalsScope.value)]);
      }
      let child;
      if (hasSelection === true) {
        child = topSelection(marginalsScope.value).slice();
      } else {
        child = [];
        if (topLeft !== void 0) {
          child.push(
            h("div", { class: "q-table__control" }, [
              topLeft(marginalsScope.value)
            ])
          );
        } else if (props.title) {
          child.push(
            h("div", { class: "q-table__control" }, [
              h("div", {
                class: ["q-table__title", props.titleClass]
              }, props.title)
            ])
          );
        }
      }
      if (topRight !== void 0) {
        child.push(
          h("div", { class: "q-table__separator col" })
        );
        child.push(
          h("div", { class: "q-table__control" }, [
            topRight(marginalsScope.value)
          ])
        );
      }
      if (child.length === 0) {
        return;
      }
      return h("div", { class: topClass }, child);
    }
    const headerSelectedValue = computed(() => someRowsSelected.value === true ? null : allRowsSelected.value);
    function getTHead() {
      const child = getTHeadTR();
      if (props.loading === true && slots.loading === void 0) {
        child.push(
          h("tr", { class: "q-table__progress" }, [
            h("th", {
              class: "relative-position",
              colspan: computedColspan.value
            }, getProgress())
          ])
        );
      }
      return h("thead", child);
    }
    function getTHeadTR() {
      const header = slots.header, headerCell = slots["header-cell"];
      if (header !== void 0) {
        return header(
          getHeaderScope({ header: true })
        ).slice();
      }
      const child = computedCols.value.map((col) => {
        const headerCellCol = slots[`header-cell-${col.name}`], slot = headerCellCol !== void 0 ? headerCellCol : headerCell, props2 = getHeaderScope({ col });
        return slot !== void 0 ? slot(props2) : h(QTh, {
          key: col.name,
          props: props2
        }, () => col.label);
      });
      if (singleSelection.value === true && props.grid !== true) {
        child.unshift(
          h("th", { class: "q-table--col-auto-width" }, " ")
        );
      } else if (multipleSelection.value === true) {
        const slot = slots["header-selection"];
        const content = slot !== void 0 ? slot(getHeaderScope({})) : [
          h(QCheckbox, {
            color: props.color,
            modelValue: headerSelectedValue.value,
            dark: isDark.value,
            dense: props.dense,
            "onUpdate:modelValue": onMultipleSelectionSet
          })
        ];
        child.unshift(
          h("th", { class: "q-table--col-auto-width" }, content)
        );
      }
      return [
        h("tr", {
          class: props.tableHeaderClass,
          style: props.tableHeaderStyle
        }, child)
      ];
    }
    function getHeaderScope(data) {
      Object.assign(data, {
        cols: computedCols.value,
        sort,
        colsMap: computedColsMap.value,
        color: props.color,
        dark: isDark.value,
        dense: props.dense
      });
      if (multipleSelection.value === true) {
        injectProp(
          data,
          "selected",
          () => headerSelectedValue.value,
          onMultipleSelectionSet
        );
      }
      return data;
    }
    function onMultipleSelectionSet(val) {
      if (someRowsSelected.value === true) {
        val = false;
      }
      updateSelection(
        computedRows.value.map(getRowKey.value),
        computedRows.value,
        val
      );
    }
    const navIcon = computed(() => {
      const ico = [
        props.iconFirstPage || $q.iconSet.table.firstPage,
        props.iconPrevPage || $q.iconSet.table.prevPage,
        props.iconNextPage || $q.iconSet.table.nextPage,
        props.iconLastPage || $q.iconSet.table.lastPage
      ];
      return $q.lang.rtl === true ? ico.reverse() : ico;
    });
    function getBottomDiv() {
      if (props.hideBottom === true) {
        return;
      }
      if (nothingToDisplay.value === true) {
        if (props.hideNoData === true) {
          return;
        }
        const message = props.loading === true ? props.loadingLabel || $q.lang.table.loading : props.filter ? props.noResultsLabel || $q.lang.table.noResults : props.noDataLabel || $q.lang.table.noData;
        const noData = slots["no-data"];
        const children = noData !== void 0 ? [noData({ message, icon: $q.iconSet.table.warning, filter: props.filter })] : [
          h(QIcon, {
            class: "q-table__bottom-nodata-icon",
            name: $q.iconSet.table.warning
          }),
          message
        ];
        return h("div", { class: bottomClass + " q-table__bottom--nodata" }, children);
      }
      const bottom = slots.bottom;
      if (bottom !== void 0) {
        return h("div", { class: bottomClass }, [bottom(marginalsScope.value)]);
      }
      const child = props.hideSelectedBanner !== true && hasSelectionMode.value === true && rowsSelectedNumber.value > 0 ? [
        h("div", { class: "q-table__control" }, [
          h("div", [
            (props.selectedRowsLabel || $q.lang.table.selectedRecords)(rowsSelectedNumber.value)
          ])
        ])
      ] : [];
      if (props.hidePagination !== true) {
        return h("div", {
          class: bottomClass + " justify-end"
        }, getPaginationDiv(child));
      }
      if (child.length !== 0) {
        return h("div", { class: bottomClass }, child);
      }
    }
    function onPagSelection(pag) {
      setPagination({
        page: 1,
        rowsPerPage: pag.value
      });
    }
    function getPaginationDiv(child) {
      let control;
      const { rowsPerPage } = computedPagination.value, paginationLabel = props.paginationLabel || $q.lang.table.pagination, paginationSlot = slots.pagination, hasOpts = props.rowsPerPageOptions.length > 1;
      child.push(
        h("div", { class: "q-table__separator col" })
      );
      if (hasOpts === true) {
        child.push(
          h("div", { class: "q-table__control" }, [
            h("span", { class: "q-table__bottom-item" }, [
              props.rowsPerPageLabel || $q.lang.table.recordsPerPage
            ]),
            h(QSelect, {
              class: "q-table__select inline q-table__bottom-item",
              color: props.color,
              modelValue: rowsPerPage,
              options: computedRowsPerPageOptions.value,
              displayValue: rowsPerPage === 0 ? $q.lang.table.allRows : rowsPerPage,
              dark: isDark.value,
              borderless: true,
              dense: true,
              optionsDense: true,
              optionsCover: true,
              "onUpdate:modelValue": onPagSelection
            })
          ])
        );
      }
      if (paginationSlot !== void 0) {
        control = paginationSlot(marginalsScope.value);
      } else {
        control = [
          h("span", rowsPerPage !== 0 ? { class: "q-table__bottom-item" } : {}, [
            rowsPerPage ? paginationLabel(firstRowIndex.value + 1, Math.min(lastRowIndex.value, computedRowsNumber.value), computedRowsNumber.value) : paginationLabel(1, filteredSortedRowsNumber.value, computedRowsNumber.value)
          ])
        ];
        if (rowsPerPage !== 0 && pagesNumber.value > 1) {
          const btnProps = {
            color: props.color,
            round: true,
            dense: true,
            flat: true
          };
          if (props.dense === true) {
            btnProps.size = "sm";
          }
          pagesNumber.value > 2 && control.push(
            h(QBtn, {
              key: "pgFirst",
              ...btnProps,
              icon: navIcon.value[0],
              disable: isFirstPage.value,
              onClick: firstPage
            })
          );
          control.push(
            h(QBtn, {
              key: "pgPrev",
              ...btnProps,
              icon: navIcon.value[1],
              disable: isFirstPage.value,
              onClick: prevPage
            }),
            h(QBtn, {
              key: "pgNext",
              ...btnProps,
              icon: navIcon.value[2],
              disable: isLastPage.value,
              onClick: nextPage
            })
          );
          pagesNumber.value > 2 && control.push(
            h(QBtn, {
              key: "pgLast",
              ...btnProps,
              icon: navIcon.value[3],
              disable: isLastPage.value,
              onClick: lastPage
            })
          );
        }
      }
      child.push(
        h("div", { class: "q-table__control" }, control)
      );
      return child;
    }
    function getGridHeader() {
      const child = props.gridHeader === true ? [
        h("table", { class: "q-table" }, [
          getTHead()
        ])
      ] : props.loading === true && slots.loading === void 0 ? getProgress() : void 0;
      return h("div", { class: "q-table__middle" }, child);
    }
    function getGridBody() {
      const item = slots.item !== void 0 ? slots.item : (scope) => {
        const child = scope.cols.map(
          (col) => h("div", { class: "q-table__grid-item-row" }, [
            h("div", { class: "q-table__grid-item-title" }, [col.label]),
            h("div", { class: "q-table__grid-item-value" }, [col.value])
          ])
        );
        if (hasSelectionMode.value === true) {
          const slot = slots["body-selection"];
          const content = slot !== void 0 ? slot(scope) : [
            h(QCheckbox, {
              modelValue: scope.selected,
              color: props.color,
              dark: isDark.value,
              dense: props.dense,
              "onUpdate:modelValue": (adding, evt) => {
                updateSelection([scope.key], [scope.row], adding, evt);
              }
            })
          ];
          child.unshift(
            h("div", { class: "q-table__grid-item-row" }, content),
            h(QSeparator, { dark: isDark.value })
          );
        }
        const data = {
          class: [
            "q-table__grid-item-card" + cardDefaultClass.value,
            props.cardClass
          ],
          style: props.cardStyle
        };
        if (props.onRowClick !== void 0 || props.onRowDblclick !== void 0) {
          data.class[0] += " cursor-pointer";
          if (props.onRowClick !== void 0) {
            data.onClick = (evt) => {
              emit("RowClick", evt, scope.row, scope.pageIndex);
            };
          }
          if (props.onRowDblclick !== void 0) {
            data.onDblclick = (evt) => {
              emit("RowDblclick", evt, scope.row, scope.pageIndex);
            };
          }
        }
        return h("div", {
          class: "q-table__grid-item col-xs-12 col-sm-6 col-md-4 col-lg-3" + (scope.selected === true ? " q-table__grid-item--selected" : "")
        }, [
          h("div", data, child)
        ]);
      };
      return h("div", {
        class: [
          "q-table__grid-content row",
          props.cardContainerClass
        ],
        style: props.cardContainerStyle
      }, computedRows.value.map((row, pageIndex) => {
        return item(getBodyScope({
          key: getRowKey.value(row),
          row,
          pageIndex
        }));
      }));
    }
    Object.assign(vm.proxy, {
      requestServerInteraction,
      setPagination,
      firstPage,
      prevPage,
      nextPage,
      lastPage,
      isRowSelected,
      clearSelection: clearSelection2,
      isRowExpanded,
      setExpanded,
      sort,
      resetVirtualScroll,
      scrollTo,
      getCellValue
    });
    injectMultipleProps(vm.proxy, {
      filteredSortedRows: () => filteredSortedRows.value,
      computedRows: () => computedRows.value,
      computedRowsNumber: () => computedRowsNumber.value
    });
    return () => {
      const child = [getTopDiv()];
      const data = { ref: rootRef, class: containerClass.value };
      if (props.grid === true) {
        child.push(getGridHeader());
      } else {
        Object.assign(data, {
          class: [data.class, props.cardClass],
          style: props.cardStyle
        });
      }
      child.push(
        getBody(),
        getBottomDiv()
      );
      if (props.loading === true && slots.loading !== void 0) {
        child.push(
          slots.loading()
        );
      }
      return h("div", data, child);
    };
  }
});
const columns = [
  {
    name: "name",
    label: "Dessert (100g serving)",
    // field: 'name',
    field: (row) => row.name,
    required: true,
    align: "left",
    sortable: true
  },
  { name: "calories", align: "center", label: "Calories", field: "calories", sortable: true },
  { name: "fat", label: "Fat (g)", field: "fat", sortable: true },
  { name: "carbs", label: "Carbs (g)", field: "carbs" },
  { name: "protein", label: "Protein (g)", field: "protein" },
  { name: "sodium", label: "Sodium (mg)", field: "sodium" },
  { name: "calcium", label: "Calcium (%)", field: "calcium", sortable: true, sort: (a, b) => parseFloat(a) - parseFloat(b) },
  { name: "iron", label: "Iron (%)", field: "iron", sortable: true, sort: (a, b) => parseFloat(a) - parseFloat(b) }
];
const rows = [
  {
    name: "Frozen Yogurt",
    calories: 159,
    fat: 6,
    carbs: 24,
    protein: 4,
    sodium: 87,
    calcium: "14%",
    iron: "1%"
  },
  {
    name: "Ice cream sandwich",
    calories: 237,
    fat: 9,
    carbs: 37,
    protein: 4.3,
    sodium: 129,
    calcium: "8%",
    iron: "1%"
  }
];
const _sfc_main = defineComponent({
  name: "DashboardPage",
  data() {
    return {
      columns,
      rows
    };
  }
});
const _hoisted_1 = { class: "q-pa-md" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", _hoisted_1, [
    createVNode(QTable, {
      flat: "",
      bordered: "",
      title: "Treats",
      rows: _ctx.rows,
      columns: _ctx.columns,
      "row-key": "name"
    }, {
      body: withCtx((props) => [
        createVNode(QTr, { props }, {
          default: withCtx(() => [
            createVNode(QTd, {
              key: "name",
              props
            }, {
              default: withCtx(() => [
                createTextVNode(toDisplayString(props.row.name), 1)
              ]),
              _: 2
            }, 1032, ["props"]),
            createVNode(QTd, {
              key: "calories",
              props
            }, {
              default: withCtx(() => [
                createVNode(QBadge, { color: "green" }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(props.row.calories), 1)
                  ]),
                  _: 2
                }, 1024)
              ]),
              _: 2
            }, 1032, ["props"]),
            createVNode(QTd, {
              key: "fat",
              props
            }, {
              default: withCtx(() => [
                createVNode(QBadge, { color: "purple" }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(props.row.fat), 1)
                  ]),
                  _: 2
                }, 1024)
              ]),
              _: 2
            }, 1032, ["props"]),
            createVNode(QTd, {
              key: "carbs",
              props
            }, {
              default: withCtx(() => [
                createVNode(QBadge, { color: "orange" }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(props.row.carbs), 1)
                  ]),
                  _: 2
                }, 1024)
              ]),
              _: 2
            }, 1032, ["props"]),
            createVNode(QTd, {
              key: "protein",
              props
            }, {
              default: withCtx(() => [
                createVNode(QBadge, { color: "primary" }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(props.row.protein), 1)
                  ]),
                  _: 2
                }, 1024)
              ]),
              _: 2
            }, 1032, ["props"]),
            createVNode(QTd, {
              key: "sodium",
              props
            }, {
              default: withCtx(() => [
                createVNode(QBadge, { color: "teal" }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(props.row.sodium), 1)
                  ]),
                  _: 2
                }, 1024)
              ]),
              _: 2
            }, 1032, ["props"]),
            createVNode(QTd, {
              key: "calcium",
              props
            }, {
              default: withCtx(() => [
                createVNode(QBadge, { color: "accent" }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(props.row.calcium), 1)
                  ]),
                  _: 2
                }, 1024)
              ]),
              _: 2
            }, 1032, ["props"]),
            createVNode(QTd, {
              key: "iron",
              props
            }, {
              default: withCtx(() => [
                createVNode(QBadge, { color: "amber" }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(props.row.iron), 1)
                  ]),
                  _: 2
                }, 1024)
              ]),
              _: 2
            }, 1032, ["props"])
          ]),
          _: 2
        }, 1032, ["props"])
      ]),
      _: 1
    }, 8, ["rows", "columns"])
  ]);
}
const MeasurementTable = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "MeasurementTable.vue"]]);
export {
  MeasurementTable as default
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTWVhc3VyZW1lbnRUYWJsZS1DQ2gxWUtDay5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL3F1YXNhckAyLjE1LjEvbm9kZV9tb2R1bGVzL3F1YXNhci9zcmMvY29tcG9uZW50cy90YWJsZS9RVGQuanMiLCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vcXVhc2FyQDIuMTUuMS9ub2RlX21vZHVsZXMvcXVhc2FyL3NyYy9jb21wb25lbnRzL2JhZGdlL1FCYWRnZS5qcyIsIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9xdWFzYXJAMi4xNS4xL25vZGVfbW9kdWxlcy9xdWFzYXIvc3JjL2NvbXBvbmVudHMvdGFibGUvUVRyLmpzIiwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL3F1YXNhckAyLjE1LjEvbm9kZV9tb2R1bGVzL3F1YXNhci9zcmMvY29tcG9uZW50cy90YWJsZS9RVGguanMiLCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vcXVhc2FyQDIuMTUuMS9ub2RlX21vZHVsZXMvcXVhc2FyL3NyYy9jb21wb25lbnRzL3NlcGFyYXRvci9RU2VwYXJhdG9yLmpzIiwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL3F1YXNhckAyLjE1LjEvbm9kZV9tb2R1bGVzL3F1YXNhci9zcmMvY29tcG9uZW50cy9tYXJrdXAtdGFibGUvUU1hcmt1cFRhYmxlLmpzIiwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL3F1YXNhckAyLjE1LjEvbm9kZV9tb2R1bGVzL3F1YXNhci9zcmMvY29tcG9uZW50cy90YWJsZS9nZXQtdGFibGUtbWlkZGxlLmpzIiwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL3F1YXNhckAyLjE1LjEvbm9kZV9tb2R1bGVzL3F1YXNhci9zcmMvdXRpbHMvcHJpdmF0ZS9ydGwuanMiLCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vcXVhc2FyQDIuMTUuMS9ub2RlX21vZHVsZXMvcXVhc2FyL3NyYy9jb21wb25lbnRzL3ZpcnR1YWwtc2Nyb2xsL3VzZS12aXJ0dWFsLXNjcm9sbC5qcyIsIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9xdWFzYXJAMi4xNS4xL25vZGVfbW9kdWxlcy9xdWFzYXIvc3JjL2NvbXBvbmVudHMvdmlydHVhbC1zY3JvbGwvUVZpcnR1YWxTY3JvbGwuanMiLCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vcXVhc2FyQDIuMTUuMS9ub2RlX21vZHVsZXMvcXVhc2FyL3NyYy9jb21wb25lbnRzL2ZpZWxkL1FGaWVsZC5qcyIsIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9xdWFzYXJAMi4xNS4xL25vZGVfbW9kdWxlcy9xdWFzYXIvc3JjL2NvbXBvbmVudHMvY2hpcC9RQ2hpcC5qcyIsIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9xdWFzYXJAMi4xNS4xL25vZGVfbW9kdWxlcy9xdWFzYXIvc3JjL2NvbXBvc2FibGVzL3ByaXZhdGUvdXNlLWFuY2hvci5qcyIsIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9xdWFzYXJAMi4xNS4xL25vZGVfbW9kdWxlcy9xdWFzYXIvc3JjL2NvbXBvc2FibGVzL3ByaXZhdGUvdXNlLXNjcm9sbC10YXJnZXQuanMiLCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vcXVhc2FyQDIuMTUuMS9ub2RlX21vZHVsZXMvcXVhc2FyL3NyYy91dGlscy9wcml2YXRlL2dsb2JhbC1ub2Rlcy5qcyIsIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9xdWFzYXJAMi4xNS4xL25vZGVfbW9kdWxlcy9xdWFzYXIvc3JjL3V0aWxzL3ByaXZhdGUvcG9ydGFsLmpzIiwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL3F1YXNhckAyLjE1LjEvbm9kZV9tb2R1bGVzL3F1YXNhci9zcmMvY29tcG9zYWJsZXMvcHJpdmF0ZS91c2UtcG9ydGFsLmpzIiwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL3F1YXNhckAyLjE1LjEvbm9kZV9tb2R1bGVzL3F1YXNhci9zcmMvY29tcG9zYWJsZXMvcHJpdmF0ZS91c2UtdHJhbnNpdGlvbi5qcyIsIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9xdWFzYXJAMi4xNS4xL25vZGVfbW9kdWxlcy9xdWFzYXIvc3JjL2NvbXBvc2FibGVzL3VzZS10aWNrLmpzIiwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL3F1YXNhckAyLjE1LjEvbm9kZV9tb2R1bGVzL3F1YXNhci9zcmMvdXRpbHMvcHJpdmF0ZS9lc2NhcGUta2V5LmpzIiwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL3F1YXNhckAyLjE1LjEvbm9kZV9tb2R1bGVzL3F1YXNhci9zcmMvdXRpbHMvcHJpdmF0ZS9mb2N1c291dC5qcyIsIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9xdWFzYXJAMi4xNS4xL25vZGVfbW9kdWxlcy9xdWFzYXIvc3JjL3V0aWxzL3ByaXZhdGUvY2xpY2stb3V0c2lkZS5qcyIsIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9xdWFzYXJAMi4xNS4xL25vZGVfbW9kdWxlcy9xdWFzYXIvc3JjL3V0aWxzL3ByaXZhdGUvcG9zaXRpb24tZW5naW5lLmpzIiwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL3F1YXNhckAyLjE1LjEvbm9kZV9tb2R1bGVzL3F1YXNhci9zcmMvY29tcG9uZW50cy9tZW51L1FNZW51LmpzIiwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL3F1YXNhckAyLjE1LjEvbm9kZV9tb2R1bGVzL3F1YXNhci9zcmMvY29tcG9uZW50cy9kaWFsb2cvUURpYWxvZy5qcyIsIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9xdWFzYXJAMi4xNS4xL25vZGVfbW9kdWxlcy9xdWFzYXIvc3JjL2NvbXBvbmVudHMvc2VsZWN0L1FTZWxlY3QuanMiLCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vcXVhc2FyQDIuMTUuMS9ub2RlX21vZHVsZXMvcXVhc2FyL3NyYy9jb21wb25lbnRzL2xpbmVhci1wcm9ncmVzcy9RTGluZWFyUHJvZ3Jlc3MuanMiLCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vcXVhc2FyQDIuMTUuMS9ub2RlX21vZHVsZXMvcXVhc2FyL3NyYy9jb21wb3NhYmxlcy9wcml2YXRlL3VzZS1yZWZvY3VzLXRhcmdldC5qcyIsIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9xdWFzYXJAMi4xNS4xL25vZGVfbW9kdWxlcy9xdWFzYXIvc3JjL3V0aWxzL3ByaXZhdGUvb3B0aW9uLXNpemVzLmpzIiwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL3F1YXNhckAyLjE1LjEvbm9kZV9tb2R1bGVzL3F1YXNhci9zcmMvY29tcG9uZW50cy9jaGVja2JveC91c2UtY2hlY2tib3guanMiLCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vcXVhc2FyQDIuMTUuMS9ub2RlX21vZHVsZXMvcXVhc2FyL3NyYy9jb21wb25lbnRzL2NoZWNrYm94L1FDaGVja2JveC5qcyIsIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9xdWFzYXJAMi4xNS4xL25vZGVfbW9kdWxlcy9xdWFzYXIvc3JjL2NvbXBvc2FibGVzL3ByaXZhdGUvdXNlLWZ1bGxzY3JlZW4uanMiLCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vcXVhc2FyQDIuMTUuMS9ub2RlX21vZHVsZXMvcXVhc2FyL3NyYy91dGlscy9wcml2YXRlL3NvcnQuanMiLCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vcXVhc2FyQDIuMTUuMS9ub2RlX21vZHVsZXMvcXVhc2FyL3NyYy9jb21wb25lbnRzL3RhYmxlL3RhYmxlLXNvcnQuanMiLCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vcXVhc2FyQDIuMTUuMS9ub2RlX21vZHVsZXMvcXVhc2FyL3NyYy9jb21wb25lbnRzL3RhYmxlL3RhYmxlLWZpbHRlci5qcyIsIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9xdWFzYXJAMi4xNS4xL25vZGVfbW9kdWxlcy9xdWFzYXIvc3JjL2NvbXBvbmVudHMvdGFibGUvdGFibGUtcGFnaW5hdGlvbi5qcyIsIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9xdWFzYXJAMi4xNS4xL25vZGVfbW9kdWxlcy9xdWFzYXIvc3JjL2NvbXBvbmVudHMvdGFibGUvdGFibGUtcm93LXNlbGVjdGlvbi5qcyIsIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9xdWFzYXJAMi4xNS4xL25vZGVfbW9kdWxlcy9xdWFzYXIvc3JjL2NvbXBvbmVudHMvdGFibGUvdGFibGUtcm93LWV4cGFuZC5qcyIsIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9xdWFzYXJAMi4xNS4xL25vZGVfbW9kdWxlcy9xdWFzYXIvc3JjL2NvbXBvbmVudHMvdGFibGUvdGFibGUtY29sdW1uLXNlbGVjdGlvbi5qcyIsIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9xdWFzYXJAMi4xNS4xL25vZGVfbW9kdWxlcy9xdWFzYXIvc3JjL2NvbXBvbmVudHMvdGFibGUvUVRhYmxlLmpzIiwiLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvdGFibGVzL01lYXN1cmVtZW50VGFibGUudnVlIiwiLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvdGFibGVzL01lYXN1cmVtZW50VGFibGUudnVlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGgsIGNvbXB1dGVkLCBnZXRDdXJyZW50SW5zdGFuY2UgfSBmcm9tICd2dWUnXG5cbmltcG9ydCB7IGNyZWF0ZUNvbXBvbmVudCB9IGZyb20gJy4uLy4uL3V0aWxzL3ByaXZhdGUvY3JlYXRlLmpzJ1xuaW1wb3J0IHsgaFNsb3QgfSBmcm9tICcuLi8uLi91dGlscy9wcml2YXRlL3JlbmRlci5qcydcblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlQ29tcG9uZW50KHtcbiAgbmFtZTogJ1FUZCcsXG5cbiAgcHJvcHM6IHtcbiAgICBwcm9wczogT2JqZWN0LFxuICAgIGF1dG9XaWR0aDogQm9vbGVhbixcbiAgICBub0hvdmVyOiBCb29sZWFuXG4gIH0sXG5cbiAgc2V0dXAgKHByb3BzLCB7IHNsb3RzIH0pIHtcbiAgICBjb25zdCB2bSA9IGdldEN1cnJlbnRJbnN0YW5jZSgpXG4gICAgY29uc3QgY2xhc3NlcyA9IGNvbXB1dGVkKCgpID0+XG4gICAgICAncS10ZCcgKyAocHJvcHMuYXV0b1dpZHRoID09PSB0cnVlID8gJyBxLXRhYmxlLS1jb2wtYXV0by13aWR0aCcgOiAnJylcbiAgICAgICsgKHByb3BzLm5vSG92ZXIgPT09IHRydWUgPyAnIHEtdGQtLW5vLWhvdmVyJyA6ICcnKVxuICAgICAgKyAnICdcbiAgICApXG5cbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgaWYgKHByb3BzLnByb3BzID09PSB2b2lkIDApIHtcbiAgICAgICAgcmV0dXJuIGgoJ3RkJywgeyBjbGFzczogY2xhc3Nlcy52YWx1ZSB9LCBoU2xvdChzbG90cy5kZWZhdWx0KSlcbiAgICAgIH1cblxuICAgICAgY29uc3QgbmFtZSA9IHZtLnZub2RlLmtleVxuICAgICAgY29uc3QgY29sID0gKFxuICAgICAgICAocHJvcHMucHJvcHMuY29sc01hcCAhPT0gdm9pZCAwID8gcHJvcHMucHJvcHMuY29sc01hcFsgbmFtZSBdIDogbnVsbClcbiAgICAgICAgfHwgcHJvcHMucHJvcHMuY29sXG4gICAgICApXG5cbiAgICAgIGlmIChjb2wgPT09IHZvaWQgMCkgcmV0dXJuXG5cbiAgICAgIGNvbnN0IHsgcm93IH0gPSBwcm9wcy5wcm9wc1xuXG4gICAgICByZXR1cm4gaCgndGQnLCB7XG4gICAgICAgIGNsYXNzOiBjbGFzc2VzLnZhbHVlICsgY29sLl9fdGRDbGFzcyhyb3cpLFxuICAgICAgICBzdHlsZTogY29sLl9fdGRTdHlsZShyb3cpXG4gICAgICB9LCBoU2xvdChzbG90cy5kZWZhdWx0KSlcbiAgICB9XG4gIH1cbn0pXG4iLCJpbXBvcnQgeyBoLCBjb21wdXRlZCB9IGZyb20gJ3Z1ZSdcblxuaW1wb3J0IHsgY3JlYXRlQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vdXRpbHMvcHJpdmF0ZS9jcmVhdGUuanMnXG5pbXBvcnQgeyBoTWVyZ2VTbG90IH0gZnJvbSAnLi4vLi4vdXRpbHMvcHJpdmF0ZS9yZW5kZXIuanMnXG5cbmNvbnN0IGFsaWduVmFsdWVzID0gWyAndG9wJywgJ21pZGRsZScsICdib3R0b20nIF1cblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlQ29tcG9uZW50KHtcbiAgbmFtZTogJ1FCYWRnZScsXG5cbiAgcHJvcHM6IHtcbiAgICBjb2xvcjogU3RyaW5nLFxuICAgIHRleHRDb2xvcjogU3RyaW5nLFxuXG4gICAgZmxvYXRpbmc6IEJvb2xlYW4sXG4gICAgdHJhbnNwYXJlbnQ6IEJvb2xlYW4sXG4gICAgbXVsdGlMaW5lOiBCb29sZWFuLFxuICAgIG91dGxpbmU6IEJvb2xlYW4sXG4gICAgcm91bmRlZDogQm9vbGVhbixcblxuICAgIGxhYmVsOiBbIE51bWJlciwgU3RyaW5nIF0sXG5cbiAgICBhbGlnbjoge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgdmFsaWRhdG9yOiB2ID0+IGFsaWduVmFsdWVzLmluY2x1ZGVzKHYpXG4gICAgfVxuICB9LFxuXG4gIHNldHVwIChwcm9wcywgeyBzbG90cyB9KSB7XG4gICAgY29uc3Qgc3R5bGUgPSBjb21wdXRlZCgoKSA9PiB7XG4gICAgICByZXR1cm4gcHJvcHMuYWxpZ24gIT09IHZvaWQgMFxuICAgICAgICA/IHsgdmVydGljYWxBbGlnbjogcHJvcHMuYWxpZ24gfVxuICAgICAgICA6IG51bGxcbiAgICB9KVxuXG4gICAgY29uc3QgY2xhc3NlcyA9IGNvbXB1dGVkKCgpID0+IHtcbiAgICAgIGNvbnN0IHRleHQgPSBwcm9wcy5vdXRsaW5lID09PSB0cnVlXG4gICAgICAgID8gcHJvcHMuY29sb3IgfHwgcHJvcHMudGV4dENvbG9yXG4gICAgICAgIDogcHJvcHMudGV4dENvbG9yXG5cbiAgICAgIHJldHVybiAncS1iYWRnZSBmbGV4IGlubGluZSBpdGVtcy1jZW50ZXIgbm8td3JhcCdcbiAgICAgICAgKyBgIHEtYmFkZ2UtLSR7IHByb3BzLm11bHRpTGluZSA9PT0gdHJ1ZSA/ICdtdWx0aScgOiAnc2luZ2xlJyB9LWxpbmVgXG4gICAgICAgICsgKHByb3BzLm91dGxpbmUgPT09IHRydWVcbiAgICAgICAgICA/ICcgcS1iYWRnZS0tb3V0bGluZSdcbiAgICAgICAgICA6IChwcm9wcy5jb2xvciAhPT0gdm9pZCAwID8gYCBiZy0keyBwcm9wcy5jb2xvciB9YCA6ICcnKVxuICAgICAgICApXG4gICAgICAgICsgKHRleHQgIT09IHZvaWQgMCA/IGAgdGV4dC0keyB0ZXh0IH1gIDogJycpXG4gICAgICAgICsgKHByb3BzLmZsb2F0aW5nID09PSB0cnVlID8gJyBxLWJhZGdlLS1mbG9hdGluZycgOiAnJylcbiAgICAgICAgKyAocHJvcHMucm91bmRlZCA9PT0gdHJ1ZSA/ICcgcS1iYWRnZS0tcm91bmRlZCcgOiAnJylcbiAgICAgICAgKyAocHJvcHMudHJhbnNwYXJlbnQgPT09IHRydWUgPyAnIHEtYmFkZ2UtLXRyYW5zcGFyZW50JyA6ICcnKVxuICAgIH0pXG5cbiAgICByZXR1cm4gKCkgPT4gaCgnZGl2Jywge1xuICAgICAgY2xhc3M6IGNsYXNzZXMudmFsdWUsXG4gICAgICBzdHlsZTogc3R5bGUudmFsdWUsXG4gICAgICByb2xlOiAnc3RhdHVzJyxcbiAgICAgICdhcmlhLWxhYmVsJzogcHJvcHMubGFiZWxcbiAgICB9LCBoTWVyZ2VTbG90KHNsb3RzLmRlZmF1bHQsIHByb3BzLmxhYmVsICE9PSB2b2lkIDAgPyBbIHByb3BzLmxhYmVsIF0gOiBbXSkpXG4gIH1cbn0pXG4iLCJpbXBvcnQgeyBoLCBjb21wdXRlZCB9IGZyb20gJ3Z1ZSdcblxuaW1wb3J0IHsgY3JlYXRlQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vdXRpbHMvcHJpdmF0ZS9jcmVhdGUuanMnXG5pbXBvcnQgeyBoU2xvdCB9IGZyb20gJy4uLy4uL3V0aWxzL3ByaXZhdGUvcmVuZGVyLmpzJ1xuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVDb21wb25lbnQoe1xuICBuYW1lOiAnUVRyJyxcblxuICBwcm9wczoge1xuICAgIHByb3BzOiBPYmplY3QsXG4gICAgbm9Ib3ZlcjogQm9vbGVhblxuICB9LFxuXG4gIHNldHVwIChwcm9wcywgeyBzbG90cyB9KSB7XG4gICAgY29uc3QgY2xhc3NlcyA9IGNvbXB1dGVkKCgpID0+XG4gICAgICAncS10cidcbiAgICAgICsgKHByb3BzLnByb3BzID09PSB2b2lkIDAgfHwgcHJvcHMucHJvcHMuaGVhZGVyID09PSB0cnVlID8gJycgOiAnICcgKyBwcm9wcy5wcm9wcy5fX3RyQ2xhc3MpXG4gICAgICArIChwcm9wcy5ub0hvdmVyID09PSB0cnVlID8gJyBxLXRyLS1uby1ob3ZlcicgOiAnJylcbiAgICApXG5cbiAgICByZXR1cm4gKCkgPT4gaCgndHInLCB7IGNsYXNzOiBjbGFzc2VzLnZhbHVlIH0sIGhTbG90KHNsb3RzLmRlZmF1bHQpKVxuICB9XG59KVxuIiwiaW1wb3J0IHsgaCwgZ2V0Q3VycmVudEluc3RhbmNlIH0gZnJvbSAndnVlJ1xuXG5pbXBvcnQgUUljb24gZnJvbSAnLi4vaWNvbi9RSWNvbi5qcydcblxuaW1wb3J0IHsgY3JlYXRlQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vdXRpbHMvcHJpdmF0ZS9jcmVhdGUuanMnXG5pbXBvcnQgeyBoU2xvdCwgaFVuaXF1ZVNsb3QgfSBmcm9tICcuLi8uLi91dGlscy9wcml2YXRlL3JlbmRlci5qcydcblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlQ29tcG9uZW50KHtcbiAgbmFtZTogJ1FUaCcsXG5cbiAgcHJvcHM6IHtcbiAgICBwcm9wczogT2JqZWN0LFxuICAgIGF1dG9XaWR0aDogQm9vbGVhblxuICB9LFxuXG4gIGVtaXRzOiBbICdjbGljaycgXSxcblxuICBzZXR1cCAocHJvcHMsIHsgc2xvdHMsIGVtaXQgfSkge1xuICAgIGNvbnN0IHZtID0gZ2V0Q3VycmVudEluc3RhbmNlKClcbiAgICBjb25zdCB7IHByb3h5OiB7ICRxIH0gfSA9IHZtXG5cbiAgICBjb25zdCBvbkNsaWNrID0gZXZ0ID0+IHsgZW1pdCgnY2xpY2snLCBldnQpIH1cblxuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICBpZiAocHJvcHMucHJvcHMgPT09IHZvaWQgMCkge1xuICAgICAgICByZXR1cm4gaCgndGgnLCB7XG4gICAgICAgICAgY2xhc3M6IHByb3BzLmF1dG9XaWR0aCA9PT0gdHJ1ZSA/ICdxLXRhYmxlLS1jb2wtYXV0by13aWR0aCcgOiAnJyxcbiAgICAgICAgICBvbkNsaWNrXG4gICAgICAgIH0sIGhTbG90KHNsb3RzLmRlZmF1bHQpKVxuICAgICAgfVxuXG4gICAgICBsZXQgY29sLCBjaGlsZFxuICAgICAgY29uc3QgbmFtZSA9IHZtLnZub2RlLmtleVxuXG4gICAgICBpZiAobmFtZSkge1xuICAgICAgICBjb2wgPSBwcm9wcy5wcm9wcy5jb2xzTWFwWyBuYW1lIF1cbiAgICAgICAgaWYgKGNvbCA9PT0gdm9pZCAwKSByZXR1cm5cbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICBjb2wgPSBwcm9wcy5wcm9wcy5jb2xcbiAgICAgIH1cblxuICAgICAgaWYgKGNvbC5zb3J0YWJsZSA9PT0gdHJ1ZSkge1xuICAgICAgICBjb25zdCBhY3Rpb24gPSBjb2wuYWxpZ24gPT09ICdyaWdodCdcbiAgICAgICAgICA/ICd1bnNoaWZ0J1xuICAgICAgICAgIDogJ3B1c2gnXG5cbiAgICAgICAgY2hpbGQgPSBoVW5pcXVlU2xvdChzbG90cy5kZWZhdWx0LCBbXSlcbiAgICAgICAgY2hpbGRbIGFjdGlvbiBdKFxuICAgICAgICAgIGgoUUljb24sIHtcbiAgICAgICAgICAgIGNsYXNzOiBjb2wuX19pY29uQ2xhc3MsXG4gICAgICAgICAgICBuYW1lOiAkcS5pY29uU2V0LnRhYmxlLmFycm93VXBcbiAgICAgICAgICB9KVxuICAgICAgICApXG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgY2hpbGQgPSBoU2xvdChzbG90cy5kZWZhdWx0KVxuICAgICAgfVxuXG4gICAgICBjb25zdCBkYXRhID0ge1xuICAgICAgICBjbGFzczogY29sLl9fdGhDbGFzc1xuICAgICAgICAgICsgKHByb3BzLmF1dG9XaWR0aCA9PT0gdHJ1ZSA/ICcgcS10YWJsZS0tY29sLWF1dG8td2lkdGgnIDogJycpLFxuICAgICAgICBzdHlsZTogY29sLmhlYWRlclN0eWxlLFxuICAgICAgICBvbkNsaWNrOiBldnQgPT4ge1xuICAgICAgICAgIGNvbC5zb3J0YWJsZSA9PT0gdHJ1ZSAmJiBwcm9wcy5wcm9wcy5zb3J0KGNvbClcbiAgICAgICAgICBvbkNsaWNrKGV2dClcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gaCgndGgnLCBkYXRhLCBjaGlsZClcbiAgICB9XG4gIH1cbn0pXG4iLCJpbXBvcnQgeyBoLCBjb21wdXRlZCwgZ2V0Q3VycmVudEluc3RhbmNlIH0gZnJvbSAndnVlJ1xuXG5pbXBvcnQgdXNlRGFyaywgeyB1c2VEYXJrUHJvcHMgfSBmcm9tICcuLi8uLi9jb21wb3NhYmxlcy9wcml2YXRlL3VzZS1kYXJrLmpzJ1xuXG5pbXBvcnQgeyBjcmVhdGVDb21wb25lbnQgfSBmcm9tICcuLi8uLi91dGlscy9wcml2YXRlL2NyZWF0ZS5qcydcblxuY29uc3QgaW5zZXRNYXAgPSB7XG4gIHRydWU6ICdpbnNldCcsXG4gIGl0ZW06ICdpdGVtLWluc2V0JyxcbiAgJ2l0ZW0tdGh1bWJuYWlsJzogJ2l0ZW0tdGh1bWJuYWlsLWluc2V0J1xufVxuXG5leHBvcnQgY29uc3QgbWFyZ2lucyA9IHtcbiAgeHM6IDIsXG4gIHNtOiA0LFxuICBtZDogOCxcbiAgbGc6IDE2LFxuICB4bDogMjRcbn1cblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlQ29tcG9uZW50KHtcbiAgbmFtZTogJ1FTZXBhcmF0b3InLFxuXG4gIHByb3BzOiB7XG4gICAgLi4udXNlRGFya1Byb3BzLFxuXG4gICAgc3BhY2VkOiBbIEJvb2xlYW4sIFN0cmluZyBdLFxuICAgIGluc2V0OiBbIEJvb2xlYW4sIFN0cmluZyBdLFxuICAgIHZlcnRpY2FsOiBCb29sZWFuLFxuICAgIGNvbG9yOiBTdHJpbmcsXG4gICAgc2l6ZTogU3RyaW5nXG4gIH0sXG5cbiAgc2V0dXAgKHByb3BzKSB7XG4gICAgY29uc3Qgdm0gPSBnZXRDdXJyZW50SW5zdGFuY2UoKVxuICAgIGNvbnN0IGlzRGFyayA9IHVzZURhcmsocHJvcHMsIHZtLnByb3h5LiRxKVxuXG4gICAgY29uc3Qgb3JpZW50YXRpb24gPSBjb21wdXRlZCgoKSA9PiAoXG4gICAgICBwcm9wcy52ZXJ0aWNhbCA9PT0gdHJ1ZVxuICAgICAgICA/ICd2ZXJ0aWNhbCdcbiAgICAgICAgOiAnaG9yaXpvbnRhbCdcbiAgICApKVxuXG4gICAgY29uc3Qgb3JpZW50Q2xhc3MgPSBjb21wdXRlZCgoKSA9PiBgIHEtc2VwYXJhdG9yLS0keyBvcmllbnRhdGlvbi52YWx1ZSB9YClcblxuICAgIGNvbnN0IGluc2V0Q2xhc3MgPSBjb21wdXRlZCgoKSA9PiAoXG4gICAgICBwcm9wcy5pbnNldCAhPT0gZmFsc2VcbiAgICAgICAgPyBgJHsgb3JpZW50Q2xhc3MudmFsdWUgfS0keyBpbnNldE1hcFsgcHJvcHMuaW5zZXQgXSB9YFxuICAgICAgICA6ICcnXG4gICAgKSlcblxuICAgIGNvbnN0IGNsYXNzZXMgPSBjb21wdXRlZCgoKSA9PlxuICAgICAgYHEtc2VwYXJhdG9yJHsgb3JpZW50Q2xhc3MudmFsdWUgfSR7IGluc2V0Q2xhc3MudmFsdWUgfWBcbiAgICAgICsgKHByb3BzLmNvbG9yICE9PSB2b2lkIDAgPyBgIGJnLSR7IHByb3BzLmNvbG9yIH1gIDogJycpXG4gICAgICArIChpc0RhcmsudmFsdWUgPT09IHRydWUgPyAnIHEtc2VwYXJhdG9yLS1kYXJrJyA6ICcnKVxuICAgIClcblxuICAgIGNvbnN0IHN0eWxlID0gY29tcHV0ZWQoKCkgPT4ge1xuICAgICAgY29uc3QgYWNjID0ge31cblxuICAgICAgaWYgKHByb3BzLnNpemUgIT09IHZvaWQgMCkge1xuICAgICAgICBhY2NbIHByb3BzLnZlcnRpY2FsID09PSB0cnVlID8gJ3dpZHRoJyA6ICdoZWlnaHQnIF0gPSBwcm9wcy5zaXplXG4gICAgICB9XG5cbiAgICAgIGlmIChwcm9wcy5zcGFjZWQgIT09IGZhbHNlKSB7XG4gICAgICAgIGNvbnN0IHNpemUgPSBwcm9wcy5zcGFjZWQgPT09IHRydWVcbiAgICAgICAgICA/IGAkeyBtYXJnaW5zLm1kIH1weGBcbiAgICAgICAgICA6IHByb3BzLnNwYWNlZCBpbiBtYXJnaW5zID8gYCR7IG1hcmdpbnNbIHByb3BzLnNwYWNlZCBdIH1weGAgOiBwcm9wcy5zcGFjZWRcblxuICAgICAgICBjb25zdCBkaXIgPSBwcm9wcy52ZXJ0aWNhbCA9PT0gdHJ1ZVxuICAgICAgICAgID8gWyAnTGVmdCcsICdSaWdodCcgXVxuICAgICAgICAgIDogWyAnVG9wJywgJ0JvdHRvbScgXVxuXG4gICAgICAgIGFjY1sgYG1hcmdpbiR7IGRpclsgMCBdIH1gIF0gPSBhY2NbIGBtYXJnaW4keyBkaXJbIDEgXSB9YCBdID0gc2l6ZVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gYWNjXG4gICAgfSlcblxuICAgIHJldHVybiAoKSA9PiBoKCdocicsIHtcbiAgICAgIGNsYXNzOiBjbGFzc2VzLnZhbHVlLFxuICAgICAgc3R5bGU6IHN0eWxlLnZhbHVlLFxuICAgICAgJ2FyaWEtb3JpZW50YXRpb24nOiBvcmllbnRhdGlvbi52YWx1ZVxuICAgIH0pXG4gIH1cbn0pXG4iLCJpbXBvcnQgeyBoLCBjb21wdXRlZCwgZ2V0Q3VycmVudEluc3RhbmNlIH0gZnJvbSAndnVlJ1xuXG5pbXBvcnQgdXNlRGFyaywgeyB1c2VEYXJrUHJvcHMgfSBmcm9tICcuLi8uLi9jb21wb3NhYmxlcy9wcml2YXRlL3VzZS1kYXJrLmpzJ1xuXG5pbXBvcnQgeyBjcmVhdGVDb21wb25lbnQgfSBmcm9tICcuLi8uLi91dGlscy9wcml2YXRlL2NyZWF0ZS5qcydcbmltcG9ydCB7IGhTbG90IH0gZnJvbSAnLi4vLi4vdXRpbHMvcHJpdmF0ZS9yZW5kZXIuanMnXG5cbmNvbnN0IHNlcGFyYXRvclZhbHVlcyA9IFsgJ2hvcml6b250YWwnLCAndmVydGljYWwnLCAnY2VsbCcsICdub25lJyBdXG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUNvbXBvbmVudCh7XG4gIG5hbWU6ICdRTWFya3VwVGFibGUnLFxuXG4gIHByb3BzOiB7XG4gICAgLi4udXNlRGFya1Byb3BzLFxuXG4gICAgZGVuc2U6IEJvb2xlYW4sXG4gICAgZmxhdDogQm9vbGVhbixcbiAgICBib3JkZXJlZDogQm9vbGVhbixcbiAgICBzcXVhcmU6IEJvb2xlYW4sXG4gICAgd3JhcENlbGxzOiBCb29sZWFuLFxuXG4gICAgc2VwYXJhdG9yOiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICBkZWZhdWx0OiAnaG9yaXpvbnRhbCcsXG4gICAgICB2YWxpZGF0b3I6IHYgPT4gc2VwYXJhdG9yVmFsdWVzLmluY2x1ZGVzKHYpXG4gICAgfVxuICB9LFxuXG4gIHNldHVwIChwcm9wcywgeyBzbG90cyB9KSB7XG4gICAgY29uc3Qgdm0gPSBnZXRDdXJyZW50SW5zdGFuY2UoKVxuICAgIGNvbnN0IGlzRGFyayA9IHVzZURhcmsocHJvcHMsIHZtLnByb3h5LiRxKVxuXG4gICAgY29uc3QgY2xhc3NlcyA9IGNvbXB1dGVkKCgpID0+XG4gICAgICAncS1tYXJrdXAtdGFibGUgcS10YWJsZV9fY29udGFpbmVyIHEtdGFibGVfX2NhcmQnXG4gICAgICArIGAgcS10YWJsZS0tJHsgcHJvcHMuc2VwYXJhdG9yIH0tc2VwYXJhdG9yYFxuICAgICAgKyAoaXNEYXJrLnZhbHVlID09PSB0cnVlID8gJyBxLXRhYmxlLS1kYXJrIHEtdGFibGVfX2NhcmQtLWRhcmsgcS1kYXJrJyA6ICcnKVxuICAgICAgKyAocHJvcHMuZGVuc2UgPT09IHRydWUgPyAnIHEtdGFibGUtLWRlbnNlJyA6ICcnKVxuICAgICAgKyAocHJvcHMuZmxhdCA9PT0gdHJ1ZSA/ICcgcS10YWJsZS0tZmxhdCcgOiAnJylcbiAgICAgICsgKHByb3BzLmJvcmRlcmVkID09PSB0cnVlID8gJyBxLXRhYmxlLS1ib3JkZXJlZCcgOiAnJylcbiAgICAgICsgKHByb3BzLnNxdWFyZSA9PT0gdHJ1ZSA/ICcgcS10YWJsZS0tc3F1YXJlJyA6ICcnKVxuICAgICAgKyAocHJvcHMud3JhcENlbGxzID09PSBmYWxzZSA/ICcgcS10YWJsZS0tbm8td3JhcCcgOiAnJylcbiAgICApXG5cbiAgICByZXR1cm4gKCkgPT4gaCgnZGl2Jywge1xuICAgICAgY2xhc3M6IGNsYXNzZXMudmFsdWVcbiAgICB9LCBbXG4gICAgICBoKCd0YWJsZScsIHsgY2xhc3M6ICdxLXRhYmxlJyB9LCBoU2xvdChzbG90cy5kZWZhdWx0KSlcbiAgICBdKVxuICB9XG59KVxuIiwiaW1wb3J0IHsgaCB9IGZyb20gJ3Z1ZSdcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKHByb3BzLCBjb250ZW50KSB7XG4gIHJldHVybiBoKCdkaXYnLCBwcm9wcywgW1xuICAgIGgoJ3RhYmxlJywgeyBjbGFzczogJ3EtdGFibGUnIH0sIGNvbnRlbnQpXG4gIF0pXG59XG4iLCJsZXQgcnRsSGFzU2Nyb2xsQnVnID0gZmFsc2VcblxuLy8gbW9iaWxlIENocm9tZSB0YWtlcyB0aGUgY3Jvd24gZm9yIHRoaXNcbmlmICghX19RVUFTQVJfU1NSX18pIHtcbiAgY29uc3Qgc2Nyb2xsZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICBzY3JvbGxlci5zZXRBdHRyaWJ1dGUoJ2RpcicsICdydGwnKVxuICBPYmplY3QuYXNzaWduKHNjcm9sbGVyLnN0eWxlLCB7XG4gICAgd2lkdGg6ICcxcHgnLFxuICAgIGhlaWdodDogJzFweCcsXG4gICAgb3ZlcmZsb3c6ICdhdXRvJ1xuICB9KVxuXG4gIGNvbnN0IHNwYWNlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gIE9iamVjdC5hc3NpZ24oc3BhY2VyLnN0eWxlLCB7XG4gICAgd2lkdGg6ICcxMDAwcHgnLFxuICAgIGhlaWdodDogJzFweCdcbiAgfSlcblxuICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHNjcm9sbGVyKVxuICBzY3JvbGxlci5hcHBlbmRDaGlsZChzcGFjZXIpXG4gIHNjcm9sbGVyLnNjcm9sbExlZnQgPSAtMTAwMFxuXG4gIHJ0bEhhc1Njcm9sbEJ1ZyA9IHNjcm9sbGVyLnNjcm9sbExlZnQgPj0gMFxuXG4gIHNjcm9sbGVyLnJlbW92ZSgpXG59XG5cbmV4cG9ydCB7XG4gIHJ0bEhhc1Njcm9sbEJ1Z1xufVxuIiwiaW1wb3J0IHsgaCwgcmVmLCBjb21wdXRlZCwgd2F0Y2gsIG9uQWN0aXZhdGVkLCBvbkRlYWN0aXZhdGVkLCBvbkJlZm9yZU1vdW50LCBvbkJlZm9yZVVubW91bnQsIG5leHRUaWNrLCBnZXRDdXJyZW50SW5zdGFuY2UgfSBmcm9tICd2dWUnXG5cbmltcG9ydCBkZWJvdW5jZSBmcm9tICcuLi8uLi91dGlscy9kZWJvdW5jZS5qcydcbmltcG9ydCB7IG5vb3AgfSBmcm9tICcuLi8uLi91dGlscy9ldmVudC5qcydcbmltcG9ydCB7IHJ0bEhhc1Njcm9sbEJ1ZyB9IGZyb20gJy4uLy4uL3V0aWxzL3ByaXZhdGUvcnRsLmpzJ1xuXG5jb25zdCBhZ2dCdWNrZXRTaXplID0gMTAwMFxuXG5jb25zdCBzY3JvbGxUb0VkZ2VzID0gW1xuICAnc3RhcnQnLFxuICAnY2VudGVyJyxcbiAgJ2VuZCcsXG4gICdzdGFydC1mb3JjZScsXG4gICdjZW50ZXItZm9yY2UnLFxuICAnZW5kLWZvcmNlJ1xuXVxuXG5jb25zdCBmaWx0ZXJQcm90byA9IEFycmF5LnByb3RvdHlwZS5maWx0ZXJcblxuY29uc3Qgc2V0T3ZlcmZsb3dBbmNob3IgPSBfX1FVQVNBUl9TU1JfXyB8fCB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShkb2N1bWVudC5ib2R5KS5vdmVyZmxvd0FuY2hvciA9PT0gdm9pZCAwXG4gID8gbm9vcFxuICA6IGZ1bmN0aW9uIChjb250ZW50RWwsIGluZGV4KSB7XG4gICAgaWYgKGNvbnRlbnRFbCA9PT0gbnVsbCkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgaWYgKGNvbnRlbnRFbC5fcU92ZXJmbG93QW5pbWF0aW9uRnJhbWUgIT09IHZvaWQgMCkge1xuICAgICAgY2FuY2VsQW5pbWF0aW9uRnJhbWUoY29udGVudEVsLl9xT3ZlcmZsb3dBbmltYXRpb25GcmFtZSlcbiAgICB9XG5cbiAgICBjb250ZW50RWwuX3FPdmVyZmxvd0FuaW1hdGlvbkZyYW1lID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcbiAgICAgIGlmIChjb250ZW50RWwgPT09IG51bGwpIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnRFbC5fcU92ZXJmbG93QW5pbWF0aW9uRnJhbWUgPSB2b2lkIDBcbiAgICAgIGNvbnN0IGNoaWxkcmVuID0gY29udGVudEVsLmNoaWxkcmVuIHx8IFtdXG5cbiAgICAgIGZpbHRlclByb3RvXG4gICAgICAgIC5jYWxsKGNoaWxkcmVuLCBlbCA9PiBlbC5kYXRhc2V0ICYmIGVsLmRhdGFzZXQucVZzQW5jaG9yICE9PSB2b2lkIDApXG4gICAgICAgIC5mb3JFYWNoKGVsID0+IHtcbiAgICAgICAgICBkZWxldGUgZWwuZGF0YXNldC5xVnNBbmNob3JcbiAgICAgICAgfSlcblxuICAgICAgY29uc3QgZWwgPSBjaGlsZHJlblsgaW5kZXggXVxuXG4gICAgICBpZiAoZWwgJiYgZWwuZGF0YXNldCkge1xuICAgICAgICBlbC5kYXRhc2V0LnFWc0FuY2hvciA9ICcnXG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG5mdW5jdGlvbiBzdW1GbiAoYWNjLCBoKSB7XG4gIHJldHVybiBhY2MgKyBoXG59XG5cbmZ1bmN0aW9uIGdldFNjcm9sbERldGFpbHMgKFxuICBwYXJlbnQsXG4gIGNoaWxkLFxuICBiZWZvcmVSZWYsXG4gIGFmdGVyUmVmLFxuICBob3Jpem9udGFsLFxuICBydGwsXG4gIHN0aWNreVN0YXJ0LFxuICBzdGlja3lFbmRcbikge1xuICBjb25zdFxuICAgIHBhcmVudENhbGMgPSBwYXJlbnQgPT09IHdpbmRvdyA/IGRvY3VtZW50LnNjcm9sbGluZ0VsZW1lbnQgfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50IDogcGFyZW50LFxuICAgIHByb3BFbFNpemUgPSBob3Jpem9udGFsID09PSB0cnVlID8gJ29mZnNldFdpZHRoJyA6ICdvZmZzZXRIZWlnaHQnLFxuICAgIGRldGFpbHMgPSB7XG4gICAgICBzY3JvbGxTdGFydDogMCxcbiAgICAgIHNjcm9sbFZpZXdTaXplOiAtc3RpY2t5U3RhcnQgLSBzdGlja3lFbmQsXG4gICAgICBzY3JvbGxNYXhTaXplOiAwLFxuICAgICAgb2Zmc2V0U3RhcnQ6IC1zdGlja3lTdGFydCxcbiAgICAgIG9mZnNldEVuZDogLXN0aWNreUVuZFxuICAgIH1cblxuICBpZiAoaG9yaXpvbnRhbCA9PT0gdHJ1ZSkge1xuICAgIGlmIChwYXJlbnQgPT09IHdpbmRvdykge1xuICAgICAgZGV0YWlscy5zY3JvbGxTdGFydCA9IHdpbmRvdy5wYWdlWE9mZnNldCB8fCB3aW5kb3cuc2Nyb2xsWCB8fCBkb2N1bWVudC5ib2R5LnNjcm9sbExlZnQgfHwgMFxuICAgICAgZGV0YWlscy5zY3JvbGxWaWV3U2l6ZSArPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50V2lkdGhcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBkZXRhaWxzLnNjcm9sbFN0YXJ0ID0gcGFyZW50Q2FsYy5zY3JvbGxMZWZ0XG4gICAgICBkZXRhaWxzLnNjcm9sbFZpZXdTaXplICs9IHBhcmVudENhbGMuY2xpZW50V2lkdGhcbiAgICB9XG4gICAgZGV0YWlscy5zY3JvbGxNYXhTaXplID0gcGFyZW50Q2FsYy5zY3JvbGxXaWR0aFxuXG4gICAgaWYgKHJ0bCA9PT0gdHJ1ZSkge1xuICAgICAgZGV0YWlscy5zY3JvbGxTdGFydCA9IChydGxIYXNTY3JvbGxCdWcgPT09IHRydWUgPyBkZXRhaWxzLnNjcm9sbE1heFNpemUgLSBkZXRhaWxzLnNjcm9sbFZpZXdTaXplIDogMCkgLSBkZXRhaWxzLnNjcm9sbFN0YXJ0XG4gICAgfVxuICB9XG4gIGVsc2Uge1xuICAgIGlmIChwYXJlbnQgPT09IHdpbmRvdykge1xuICAgICAgZGV0YWlscy5zY3JvbGxTdGFydCA9IHdpbmRvdy5wYWdlWU9mZnNldCB8fCB3aW5kb3cuc2Nyb2xsWSB8fCBkb2N1bWVudC5ib2R5LnNjcm9sbFRvcCB8fCAwXG4gICAgICBkZXRhaWxzLnNjcm9sbFZpZXdTaXplICs9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRIZWlnaHRcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBkZXRhaWxzLnNjcm9sbFN0YXJ0ID0gcGFyZW50Q2FsYy5zY3JvbGxUb3BcbiAgICAgIGRldGFpbHMuc2Nyb2xsVmlld1NpemUgKz0gcGFyZW50Q2FsYy5jbGllbnRIZWlnaHRcbiAgICB9XG4gICAgZGV0YWlscy5zY3JvbGxNYXhTaXplID0gcGFyZW50Q2FsYy5zY3JvbGxIZWlnaHRcbiAgfVxuXG4gIGlmIChiZWZvcmVSZWYgIT09IG51bGwpIHtcbiAgICBmb3IgKGxldCBlbCA9IGJlZm9yZVJlZi5wcmV2aW91c0VsZW1lbnRTaWJsaW5nOyBlbCAhPT0gbnVsbDsgZWwgPSBlbC5wcmV2aW91c0VsZW1lbnRTaWJsaW5nKSB7XG4gICAgICBpZiAoZWwuY2xhc3NMaXN0LmNvbnRhaW5zKCdxLXZpcnR1YWwtc2Nyb2xsLS1za2lwJykgPT09IGZhbHNlKSB7XG4gICAgICAgIGRldGFpbHMub2Zmc2V0U3RhcnQgKz0gZWxbIHByb3BFbFNpemUgXVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGlmIChhZnRlclJlZiAhPT0gbnVsbCkge1xuICAgIGZvciAobGV0IGVsID0gYWZ0ZXJSZWYubmV4dEVsZW1lbnRTaWJsaW5nOyBlbCAhPT0gbnVsbDsgZWwgPSBlbC5uZXh0RWxlbWVudFNpYmxpbmcpIHtcbiAgICAgIGlmIChlbC5jbGFzc0xpc3QuY29udGFpbnMoJ3EtdmlydHVhbC1zY3JvbGwtLXNraXAnKSA9PT0gZmFsc2UpIHtcbiAgICAgICAgZGV0YWlscy5vZmZzZXRFbmQgKz0gZWxbIHByb3BFbFNpemUgXVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGlmIChjaGlsZCAhPT0gcGFyZW50KSB7XG4gICAgY29uc3RcbiAgICAgIHBhcmVudFJlY3QgPSBwYXJlbnRDYWxjLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLFxuICAgICAgY2hpbGRSZWN0ID0gY2hpbGQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClcblxuICAgIGlmIChob3Jpem9udGFsID09PSB0cnVlKSB7XG4gICAgICBkZXRhaWxzLm9mZnNldFN0YXJ0ICs9IGNoaWxkUmVjdC5sZWZ0IC0gcGFyZW50UmVjdC5sZWZ0XG4gICAgICBkZXRhaWxzLm9mZnNldEVuZCAtPSBjaGlsZFJlY3Qud2lkdGhcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBkZXRhaWxzLm9mZnNldFN0YXJ0ICs9IGNoaWxkUmVjdC50b3AgLSBwYXJlbnRSZWN0LnRvcFxuICAgICAgZGV0YWlscy5vZmZzZXRFbmQgLT0gY2hpbGRSZWN0LmhlaWdodFxuICAgIH1cblxuICAgIGlmIChwYXJlbnQgIT09IHdpbmRvdykge1xuICAgICAgZGV0YWlscy5vZmZzZXRTdGFydCArPSBkZXRhaWxzLnNjcm9sbFN0YXJ0XG4gICAgfVxuICAgIGRldGFpbHMub2Zmc2V0RW5kICs9IGRldGFpbHMuc2Nyb2xsTWF4U2l6ZSAtIGRldGFpbHMub2Zmc2V0U3RhcnRcbiAgfVxuXG4gIHJldHVybiBkZXRhaWxzXG59XG5cbmZ1bmN0aW9uIHNldFNjcm9sbCAocGFyZW50LCBzY3JvbGwsIGhvcml6b250YWwsIHJ0bCkge1xuICBpZiAoc2Nyb2xsID09PSAnZW5kJykge1xuICAgIHNjcm9sbCA9IChwYXJlbnQgPT09IHdpbmRvdyA/IGRvY3VtZW50LmJvZHkgOiBwYXJlbnQpW1xuICAgICAgaG9yaXpvbnRhbCA9PT0gdHJ1ZSA/ICdzY3JvbGxXaWR0aCcgOiAnc2Nyb2xsSGVpZ2h0J1xuICAgIF1cbiAgfVxuXG4gIGlmIChwYXJlbnQgPT09IHdpbmRvdykge1xuICAgIGlmIChob3Jpem9udGFsID09PSB0cnVlKSB7XG4gICAgICBpZiAocnRsID09PSB0cnVlKSB7XG4gICAgICAgIHNjcm9sbCA9IChydGxIYXNTY3JvbGxCdWcgPT09IHRydWUgPyBkb2N1bWVudC5ib2R5LnNjcm9sbFdpZHRoIC0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudFdpZHRoIDogMCkgLSBzY3JvbGxcbiAgICAgIH1cbiAgICAgIHdpbmRvdy5zY3JvbGxUbyhzY3JvbGwsIHdpbmRvdy5wYWdlWU9mZnNldCB8fCB3aW5kb3cuc2Nyb2xsWSB8fCBkb2N1bWVudC5ib2R5LnNjcm9sbFRvcCB8fCAwKVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHdpbmRvdy5zY3JvbGxUbyh3aW5kb3cucGFnZVhPZmZzZXQgfHwgd2luZG93LnNjcm9sbFggfHwgZG9jdW1lbnQuYm9keS5zY3JvbGxMZWZ0IHx8IDAsIHNjcm9sbClcbiAgICB9XG4gIH1cbiAgZWxzZSBpZiAoaG9yaXpvbnRhbCA9PT0gdHJ1ZSkge1xuICAgIGlmIChydGwgPT09IHRydWUpIHtcbiAgICAgIHNjcm9sbCA9IChydGxIYXNTY3JvbGxCdWcgPT09IHRydWUgPyBwYXJlbnQuc2Nyb2xsV2lkdGggLSBwYXJlbnQub2Zmc2V0V2lkdGggOiAwKSAtIHNjcm9sbFxuICAgIH1cbiAgICBwYXJlbnQuc2Nyb2xsTGVmdCA9IHNjcm9sbFxuICB9XG4gIGVsc2Uge1xuICAgIHBhcmVudC5zY3JvbGxUb3AgPSBzY3JvbGxcbiAgfVxufVxuXG5mdW5jdGlvbiBzdW1TaXplIChzaXplQWdnLCBzaXplLCBmcm9tLCB0bykge1xuICBpZiAoZnJvbSA+PSB0bykgeyByZXR1cm4gMCB9XG5cbiAgY29uc3RcbiAgICBsYXN0VG8gPSBzaXplLmxlbmd0aCxcbiAgICBmcm9tQWdnID0gTWF0aC5mbG9vcihmcm9tIC8gYWdnQnVja2V0U2l6ZSksXG4gICAgdG9BZ2cgPSBNYXRoLmZsb29yKCh0byAtIDEpIC8gYWdnQnVja2V0U2l6ZSkgKyAxXG5cbiAgbGV0IHRvdGFsID0gc2l6ZUFnZy5zbGljZShmcm9tQWdnLCB0b0FnZykucmVkdWNlKHN1bUZuLCAwKVxuXG4gIGlmIChmcm9tICUgYWdnQnVja2V0U2l6ZSAhPT0gMCkge1xuICAgIHRvdGFsIC09IHNpemUuc2xpY2UoZnJvbUFnZyAqIGFnZ0J1Y2tldFNpemUsIGZyb20pLnJlZHVjZShzdW1GbiwgMClcbiAgfVxuICBpZiAodG8gJSBhZ2dCdWNrZXRTaXplICE9PSAwICYmIHRvICE9PSBsYXN0VG8pIHtcbiAgICB0b3RhbCAtPSBzaXplLnNsaWNlKHRvLCB0b0FnZyAqIGFnZ0J1Y2tldFNpemUpLnJlZHVjZShzdW1GbiwgMClcbiAgfVxuXG4gIHJldHVybiB0b3RhbFxufVxuXG5jb25zdCBjb21tb25WaXJ0U2Nyb2xsUHJvcHMgPSB7XG4gIHZpcnR1YWxTY3JvbGxTbGljZVNpemU6IHtcbiAgICB0eXBlOiBbIE51bWJlciwgU3RyaW5nIF0sXG4gICAgZGVmYXVsdDogbnVsbFxuICB9LFxuXG4gIHZpcnR1YWxTY3JvbGxTbGljZVJhdGlvQmVmb3JlOiB7XG4gICAgdHlwZTogWyBOdW1iZXIsIFN0cmluZyBdLFxuICAgIGRlZmF1bHQ6IDFcbiAgfSxcblxuICB2aXJ0dWFsU2Nyb2xsU2xpY2VSYXRpb0FmdGVyOiB7XG4gICAgdHlwZTogWyBOdW1iZXIsIFN0cmluZyBdLFxuICAgIGRlZmF1bHQ6IDFcbiAgfSxcblxuICB2aXJ0dWFsU2Nyb2xsSXRlbVNpemU6IHtcbiAgICB0eXBlOiBbIE51bWJlciwgU3RyaW5nIF0sXG4gICAgZGVmYXVsdDogMjRcbiAgfSxcblxuICB2aXJ0dWFsU2Nyb2xsU3RpY2t5U2l6ZVN0YXJ0OiB7XG4gICAgdHlwZTogWyBOdW1iZXIsIFN0cmluZyBdLFxuICAgIGRlZmF1bHQ6IDBcbiAgfSxcblxuICB2aXJ0dWFsU2Nyb2xsU3RpY2t5U2l6ZUVuZDoge1xuICAgIHR5cGU6IFsgTnVtYmVyLCBTdHJpbmcgXSxcbiAgICBkZWZhdWx0OiAwXG4gIH0sXG5cbiAgdGFibGVDb2xzcGFuOiBbIE51bWJlciwgU3RyaW5nIF1cbn1cblxuZXhwb3J0IGNvbnN0IGNvbW1vblZpcnRQcm9wc0xpc3QgPSBPYmplY3Qua2V5cyhjb21tb25WaXJ0U2Nyb2xsUHJvcHMpXG5cbmV4cG9ydCBjb25zdCB1c2VWaXJ0dWFsU2Nyb2xsUHJvcHMgPSB7XG4gIHZpcnR1YWxTY3JvbGxIb3Jpem9udGFsOiBCb29sZWFuLFxuICBvblZpcnR1YWxTY3JvbGw6IEZ1bmN0aW9uLFxuICAuLi5jb21tb25WaXJ0U2Nyb2xsUHJvcHNcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVzZVZpcnR1YWxTY3JvbGwgKHtcbiAgdmlydHVhbFNjcm9sbExlbmd0aCwgZ2V0VmlydHVhbFNjcm9sbFRhcmdldCwgZ2V0VmlydHVhbFNjcm9sbEVsLFxuICB2aXJ0dWFsU2Nyb2xsSXRlbVNpemVDb21wdXRlZCAvLyBvcHRpb25hbFxufSkge1xuICBjb25zdCB2bSA9IGdldEN1cnJlbnRJbnN0YW5jZSgpXG5cbiAgY29uc3QgeyBwcm9wcywgZW1pdCwgcHJveHkgfSA9IHZtXG4gIGNvbnN0IHsgJHEgfSA9IHByb3h5XG5cbiAgbGV0IHByZXZTY3JvbGxTdGFydCwgcHJldlRvSW5kZXgsIGxvY2FsU2Nyb2xsVmlld1NpemUsIHZpcnR1YWxTY3JvbGxTaXplc0FnZyA9IFtdLCB2aXJ0dWFsU2Nyb2xsU2l6ZXNcblxuICBjb25zdCB2aXJ0dWFsU2Nyb2xsUGFkZGluZ0JlZm9yZSA9IHJlZigwKVxuICBjb25zdCB2aXJ0dWFsU2Nyb2xsUGFkZGluZ0FmdGVyID0gcmVmKDApXG4gIGNvbnN0IHZpcnR1YWxTY3JvbGxTbGljZVNpemVDb21wdXRlZCA9IHJlZih7fSlcblxuICBjb25zdCBiZWZvcmVSZWYgPSByZWYobnVsbClcbiAgY29uc3QgYWZ0ZXJSZWYgPSByZWYobnVsbClcbiAgY29uc3QgY29udGVudFJlZiA9IHJlZihudWxsKVxuXG4gIGNvbnN0IHZpcnR1YWxTY3JvbGxTbGljZVJhbmdlID0gcmVmKHsgZnJvbTogMCwgdG86IDAgfSlcblxuICBjb25zdCBjb2xzcGFuQXR0ciA9IGNvbXB1dGVkKCgpID0+IChwcm9wcy50YWJsZUNvbHNwYW4gIT09IHZvaWQgMCA/IHByb3BzLnRhYmxlQ29sc3BhbiA6IDEwMCkpXG5cbiAgaWYgKHZpcnR1YWxTY3JvbGxJdGVtU2l6ZUNvbXB1dGVkID09PSB2b2lkIDApIHtcbiAgICB2aXJ0dWFsU2Nyb2xsSXRlbVNpemVDb21wdXRlZCA9IGNvbXB1dGVkKCgpID0+IHByb3BzLnZpcnR1YWxTY3JvbGxJdGVtU2l6ZSlcbiAgfVxuXG4gIGNvbnN0IG5lZWRzUmVzZXQgPSBjb21wdXRlZCgoKSA9PiB2aXJ0dWFsU2Nyb2xsSXRlbVNpemVDb21wdXRlZC52YWx1ZSArICc7JyArIHByb3BzLnZpcnR1YWxTY3JvbGxIb3Jpem9udGFsKVxuXG4gIGNvbnN0IG5lZWRzU2xpY2VSZWNhbGMgPSBjb21wdXRlZCgoKSA9PlxuICAgIG5lZWRzUmVzZXQudmFsdWUgKyAnOycgKyBwcm9wcy52aXJ0dWFsU2Nyb2xsU2xpY2VSYXRpb0JlZm9yZSArICc7JyArIHByb3BzLnZpcnR1YWxTY3JvbGxTbGljZVJhdGlvQWZ0ZXJcbiAgKVxuXG4gIHdhdGNoKG5lZWRzU2xpY2VSZWNhbGMsICgpID0+IHsgc2V0VmlydHVhbFNjcm9sbFNpemUoKSB9KVxuICB3YXRjaChuZWVkc1Jlc2V0LCByZXNldClcblxuICBmdW5jdGlvbiByZXNldCAoKSB7XG4gICAgbG9jYWxSZXNldFZpcnR1YWxTY3JvbGwocHJldlRvSW5kZXgsIHRydWUpXG4gIH1cblxuICBmdW5jdGlvbiByZWZyZXNoICh0b0luZGV4KSB7XG4gICAgbG9jYWxSZXNldFZpcnR1YWxTY3JvbGwodG9JbmRleCA9PT0gdm9pZCAwID8gcHJldlRvSW5kZXggOiB0b0luZGV4KVxuICB9XG5cbiAgZnVuY3Rpb24gc2Nyb2xsVG8gKHRvSW5kZXgsIGVkZ2UpIHtcbiAgICBjb25zdCBzY3JvbGxFbCA9IGdldFZpcnR1YWxTY3JvbGxUYXJnZXQoKVxuXG4gICAgaWYgKHNjcm9sbEVsID09PSB2b2lkIDAgfHwgc2Nyb2xsRWwgPT09IG51bGwgfHwgc2Nyb2xsRWwubm9kZVR5cGUgPT09IDgpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IHNjcm9sbERldGFpbHMgPSBnZXRTY3JvbGxEZXRhaWxzKFxuICAgICAgc2Nyb2xsRWwsXG4gICAgICBnZXRWaXJ0dWFsU2Nyb2xsRWwoKSxcbiAgICAgIGJlZm9yZVJlZi52YWx1ZSxcbiAgICAgIGFmdGVyUmVmLnZhbHVlLFxuICAgICAgcHJvcHMudmlydHVhbFNjcm9sbEhvcml6b250YWwsXG4gICAgICAkcS5sYW5nLnJ0bCxcbiAgICAgIHByb3BzLnZpcnR1YWxTY3JvbGxTdGlja3lTaXplU3RhcnQsXG4gICAgICBwcm9wcy52aXJ0dWFsU2Nyb2xsU3RpY2t5U2l6ZUVuZFxuICAgIClcblxuICAgIGxvY2FsU2Nyb2xsVmlld1NpemUgIT09IHNjcm9sbERldGFpbHMuc2Nyb2xsVmlld1NpemUgJiYgc2V0VmlydHVhbFNjcm9sbFNpemUoc2Nyb2xsRGV0YWlscy5zY3JvbGxWaWV3U2l6ZSlcblxuICAgIHNldFZpcnR1YWxTY3JvbGxTbGljZVJhbmdlKFxuICAgICAgc2Nyb2xsRWwsXG4gICAgICBzY3JvbGxEZXRhaWxzLFxuICAgICAgTWF0aC5taW4odmlydHVhbFNjcm9sbExlbmd0aC52YWx1ZSAtIDEsIE1hdGgubWF4KDAsIHBhcnNlSW50KHRvSW5kZXgsIDEwKSB8fCAwKSksXG4gICAgICAwLFxuICAgICAgc2Nyb2xsVG9FZGdlcy5pbmRleE9mKGVkZ2UpICE9PSAtMSA/IGVkZ2UgOiAocHJldlRvSW5kZXggIT09IC0xICYmIHRvSW5kZXggPiBwcmV2VG9JbmRleCA/ICdlbmQnIDogJ3N0YXJ0JylcbiAgICApXG4gIH1cblxuICBmdW5jdGlvbiBsb2NhbE9uVmlydHVhbFNjcm9sbEV2dCAoKSB7XG4gICAgY29uc3Qgc2Nyb2xsRWwgPSBnZXRWaXJ0dWFsU2Nyb2xsVGFyZ2V0KClcblxuICAgIGlmIChzY3JvbGxFbCA9PT0gdm9pZCAwIHx8IHNjcm9sbEVsID09PSBudWxsIHx8IHNjcm9sbEVsLm5vZGVUeXBlID09PSA4KSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdFxuICAgICAgc2Nyb2xsRGV0YWlscyA9IGdldFNjcm9sbERldGFpbHMoXG4gICAgICAgIHNjcm9sbEVsLFxuICAgICAgICBnZXRWaXJ0dWFsU2Nyb2xsRWwoKSxcbiAgICAgICAgYmVmb3JlUmVmLnZhbHVlLFxuICAgICAgICBhZnRlclJlZi52YWx1ZSxcbiAgICAgICAgcHJvcHMudmlydHVhbFNjcm9sbEhvcml6b250YWwsXG4gICAgICAgICRxLmxhbmcucnRsLFxuICAgICAgICBwcm9wcy52aXJ0dWFsU2Nyb2xsU3RpY2t5U2l6ZVN0YXJ0LFxuICAgICAgICBwcm9wcy52aXJ0dWFsU2Nyb2xsU3RpY2t5U2l6ZUVuZFxuICAgICAgKSxcbiAgICAgIGxpc3RMYXN0SW5kZXggPSB2aXJ0dWFsU2Nyb2xsTGVuZ3RoLnZhbHVlIC0gMSxcbiAgICAgIGxpc3RFbmRPZmZzZXQgPSBzY3JvbGxEZXRhaWxzLnNjcm9sbE1heFNpemUgLSBzY3JvbGxEZXRhaWxzLm9mZnNldFN0YXJ0IC0gc2Nyb2xsRGV0YWlscy5vZmZzZXRFbmQgLSB2aXJ0dWFsU2Nyb2xsUGFkZGluZ0FmdGVyLnZhbHVlXG5cbiAgICBpZiAocHJldlNjcm9sbFN0YXJ0ID09PSBzY3JvbGxEZXRhaWxzLnNjcm9sbFN0YXJ0KSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBpZiAoc2Nyb2xsRGV0YWlscy5zY3JvbGxNYXhTaXplIDw9IDApIHtcbiAgICAgIHNldFZpcnR1YWxTY3JvbGxTbGljZVJhbmdlKHNjcm9sbEVsLCBzY3JvbGxEZXRhaWxzLCAwLCAwKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgbG9jYWxTY3JvbGxWaWV3U2l6ZSAhPT0gc2Nyb2xsRGV0YWlscy5zY3JvbGxWaWV3U2l6ZSAmJiBzZXRWaXJ0dWFsU2Nyb2xsU2l6ZShzY3JvbGxEZXRhaWxzLnNjcm9sbFZpZXdTaXplKVxuXG4gICAgdXBkYXRlVmlydHVhbFNjcm9sbFNpemVzKHZpcnR1YWxTY3JvbGxTbGljZVJhbmdlLnZhbHVlLmZyb20pXG5cbiAgICBjb25zdCBzY3JvbGxNYXhTdGFydCA9IE1hdGguZmxvb3Ioc2Nyb2xsRGV0YWlscy5zY3JvbGxNYXhTaXplXG4gICAgICAtIE1hdGgubWF4KHNjcm9sbERldGFpbHMuc2Nyb2xsVmlld1NpemUsIHNjcm9sbERldGFpbHMub2Zmc2V0RW5kKVxuICAgICAgLSBNYXRoLm1pbih2aXJ0dWFsU2Nyb2xsU2l6ZXNbIGxpc3RMYXN0SW5kZXggXSwgc2Nyb2xsRGV0YWlscy5zY3JvbGxWaWV3U2l6ZSAvIDIpKVxuXG4gICAgaWYgKHNjcm9sbE1heFN0YXJ0ID4gMCAmJiBNYXRoLmNlaWwoc2Nyb2xsRGV0YWlscy5zY3JvbGxTdGFydCkgPj0gc2Nyb2xsTWF4U3RhcnQpIHtcbiAgICAgIHNldFZpcnR1YWxTY3JvbGxTbGljZVJhbmdlKFxuICAgICAgICBzY3JvbGxFbCxcbiAgICAgICAgc2Nyb2xsRGV0YWlscyxcbiAgICAgICAgbGlzdExhc3RJbmRleCxcbiAgICAgICAgc2Nyb2xsRGV0YWlscy5zY3JvbGxNYXhTaXplIC0gc2Nyb2xsRGV0YWlscy5vZmZzZXRFbmQgLSB2aXJ0dWFsU2Nyb2xsU2l6ZXNBZ2cucmVkdWNlKHN1bUZuLCAwKVxuICAgICAgKVxuXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBsZXRcbiAgICAgIHRvSW5kZXggPSAwLFxuICAgICAgbGlzdE9mZnNldCA9IHNjcm9sbERldGFpbHMuc2Nyb2xsU3RhcnQgLSBzY3JvbGxEZXRhaWxzLm9mZnNldFN0YXJ0LFxuICAgICAgb2Zmc2V0ID0gbGlzdE9mZnNldFxuXG4gICAgaWYgKGxpc3RPZmZzZXQgPD0gbGlzdEVuZE9mZnNldCAmJiBsaXN0T2Zmc2V0ICsgc2Nyb2xsRGV0YWlscy5zY3JvbGxWaWV3U2l6ZSA+PSB2aXJ0dWFsU2Nyb2xsUGFkZGluZ0JlZm9yZS52YWx1ZSkge1xuICAgICAgbGlzdE9mZnNldCAtPSB2aXJ0dWFsU2Nyb2xsUGFkZGluZ0JlZm9yZS52YWx1ZVxuICAgICAgdG9JbmRleCA9IHZpcnR1YWxTY3JvbGxTbGljZVJhbmdlLnZhbHVlLmZyb21cbiAgICAgIG9mZnNldCA9IGxpc3RPZmZzZXRcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBmb3IgKGxldCBqID0gMDsgbGlzdE9mZnNldCA+PSB2aXJ0dWFsU2Nyb2xsU2l6ZXNBZ2dbIGogXSAmJiB0b0luZGV4IDwgbGlzdExhc3RJbmRleDsgaisrKSB7XG4gICAgICAgIGxpc3RPZmZzZXQgLT0gdmlydHVhbFNjcm9sbFNpemVzQWdnWyBqIF1cbiAgICAgICAgdG9JbmRleCArPSBhZ2dCdWNrZXRTaXplXG4gICAgICB9XG4gICAgfVxuXG4gICAgd2hpbGUgKGxpc3RPZmZzZXQgPiAwICYmIHRvSW5kZXggPCBsaXN0TGFzdEluZGV4KSB7XG4gICAgICBsaXN0T2Zmc2V0IC09IHZpcnR1YWxTY3JvbGxTaXplc1sgdG9JbmRleCBdXG4gICAgICBpZiAobGlzdE9mZnNldCA+IC1zY3JvbGxEZXRhaWxzLnNjcm9sbFZpZXdTaXplKSB7XG4gICAgICAgIHRvSW5kZXgrK1xuICAgICAgICBvZmZzZXQgPSBsaXN0T2Zmc2V0XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgb2Zmc2V0ID0gdmlydHVhbFNjcm9sbFNpemVzWyB0b0luZGV4IF0gKyBsaXN0T2Zmc2V0XG4gICAgICB9XG4gICAgfVxuXG4gICAgc2V0VmlydHVhbFNjcm9sbFNsaWNlUmFuZ2UoXG4gICAgICBzY3JvbGxFbCxcbiAgICAgIHNjcm9sbERldGFpbHMsXG4gICAgICB0b0luZGV4LFxuICAgICAgb2Zmc2V0XG4gICAgKVxuICB9XG5cbiAgZnVuY3Rpb24gc2V0VmlydHVhbFNjcm9sbFNsaWNlUmFuZ2UgKHNjcm9sbEVsLCBzY3JvbGxEZXRhaWxzLCB0b0luZGV4LCBvZmZzZXQsIGFsaWduKSB7XG4gICAgY29uc3QgYWxpZ25Gb3JjZSA9IHR5cGVvZiBhbGlnbiA9PT0gJ3N0cmluZycgJiYgYWxpZ24uaW5kZXhPZignLWZvcmNlJykgIT09IC0xXG4gICAgY29uc3QgYWxpZ25FbmQgPSBhbGlnbkZvcmNlID09PSB0cnVlID8gYWxpZ24ucmVwbGFjZSgnLWZvcmNlJywgJycpIDogYWxpZ25cbiAgICBjb25zdCBhbGlnblJhbmdlID0gYWxpZ25FbmQgIT09IHZvaWQgMCA/IGFsaWduRW5kIDogJ3N0YXJ0J1xuXG4gICAgbGV0XG4gICAgICBmcm9tID0gTWF0aC5tYXgoMCwgdG9JbmRleCAtIHZpcnR1YWxTY3JvbGxTbGljZVNpemVDb21wdXRlZC52YWx1ZVsgYWxpZ25SYW5nZSBdKSxcbiAgICAgIHRvID0gZnJvbSArIHZpcnR1YWxTY3JvbGxTbGljZVNpemVDb21wdXRlZC52YWx1ZS50b3RhbFxuXG4gICAgaWYgKHRvID4gdmlydHVhbFNjcm9sbExlbmd0aC52YWx1ZSkge1xuICAgICAgdG8gPSB2aXJ0dWFsU2Nyb2xsTGVuZ3RoLnZhbHVlXG4gICAgICBmcm9tID0gTWF0aC5tYXgoMCwgdG8gLSB2aXJ0dWFsU2Nyb2xsU2xpY2VTaXplQ29tcHV0ZWQudmFsdWUudG90YWwpXG4gICAgfVxuXG4gICAgcHJldlNjcm9sbFN0YXJ0ID0gc2Nyb2xsRGV0YWlscy5zY3JvbGxTdGFydFxuXG4gICAgY29uc3QgcmFuZ2VDaGFuZ2VkID0gZnJvbSAhPT0gdmlydHVhbFNjcm9sbFNsaWNlUmFuZ2UudmFsdWUuZnJvbSB8fCB0byAhPT0gdmlydHVhbFNjcm9sbFNsaWNlUmFuZ2UudmFsdWUudG9cblxuICAgIGlmIChyYW5nZUNoYW5nZWQgPT09IGZhbHNlICYmIGFsaWduRW5kID09PSB2b2lkIDApIHtcbiAgICAgIGVtaXRTY3JvbGwodG9JbmRleClcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IHsgYWN0aXZlRWxlbWVudCB9ID0gZG9jdW1lbnRcbiAgICBjb25zdCBjb250ZW50RWwgPSBjb250ZW50UmVmLnZhbHVlXG4gICAgaWYgKFxuICAgICAgcmFuZ2VDaGFuZ2VkID09PSB0cnVlXG4gICAgICAmJiBjb250ZW50RWwgIT09IG51bGxcbiAgICAgICYmIGNvbnRlbnRFbCAhPT0gYWN0aXZlRWxlbWVudFxuICAgICAgJiYgY29udGVudEVsLmNvbnRhaW5zKGFjdGl2ZUVsZW1lbnQpID09PSB0cnVlXG4gICAgKSB7XG4gICAgICBjb250ZW50RWwuYWRkRXZlbnRMaXN0ZW5lcignZm9jdXNvdXQnLCBvbkJsdXJSZWZvY3VzRm4pXG5cbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBjb250ZW50RWwgIT09IG51bGwgJiYgY29udGVudEVsLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2ZvY3Vzb3V0Jywgb25CbHVyUmVmb2N1c0ZuKVxuICAgICAgfSlcbiAgICB9XG5cbiAgICBzZXRPdmVyZmxvd0FuY2hvcihjb250ZW50RWwsIHRvSW5kZXggLSBmcm9tKVxuXG4gICAgY29uc3Qgc2l6ZUJlZm9yZSA9IGFsaWduRW5kICE9PSB2b2lkIDAgPyB2aXJ0dWFsU2Nyb2xsU2l6ZXMuc2xpY2UoZnJvbSwgdG9JbmRleCkucmVkdWNlKHN1bUZuLCAwKSA6IDBcblxuICAgIGlmIChyYW5nZUNoYW5nZWQgPT09IHRydWUpIHtcbiAgICAgIC8vIHZ1ZSBrZXkgbWF0Y2hpbmcgYWxnb3JpdGhtIHdvcmtzIG9ubHkgaWZcbiAgICAgIC8vIHRoZSBhcnJheSBvZiBWTm9kZXMgY2hhbmdlcyBvbiBvbmx5IG9uZSBvZiB0aGUgZW5kc1xuICAgICAgLy8gc28gd2UgZmlyc3QgY2hhbmdlIG9uZSBlbmQgYW5kIHRoZW4gdGhlIG90aGVyXG5cbiAgICAgIGNvbnN0IHRlbXBUbyA9IHRvID49IHZpcnR1YWxTY3JvbGxTbGljZVJhbmdlLnZhbHVlLmZyb20gJiYgZnJvbSA8PSB2aXJ0dWFsU2Nyb2xsU2xpY2VSYW5nZS52YWx1ZS50b1xuICAgICAgICA/IHZpcnR1YWxTY3JvbGxTbGljZVJhbmdlLnZhbHVlLnRvXG4gICAgICAgIDogdG9cblxuICAgICAgdmlydHVhbFNjcm9sbFNsaWNlUmFuZ2UudmFsdWUgPSB7IGZyb20sIHRvOiB0ZW1wVG8gfVxuICAgICAgdmlydHVhbFNjcm9sbFBhZGRpbmdCZWZvcmUudmFsdWUgPSBzdW1TaXplKHZpcnR1YWxTY3JvbGxTaXplc0FnZywgdmlydHVhbFNjcm9sbFNpemVzLCAwLCBmcm9tKVxuICAgICAgdmlydHVhbFNjcm9sbFBhZGRpbmdBZnRlci52YWx1ZSA9IHN1bVNpemUodmlydHVhbFNjcm9sbFNpemVzQWdnLCB2aXJ0dWFsU2Nyb2xsU2l6ZXMsIHRvLCB2aXJ0dWFsU2Nyb2xsTGVuZ3RoLnZhbHVlKVxuXG4gICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xuICAgICAgICBpZiAodmlydHVhbFNjcm9sbFNsaWNlUmFuZ2UudmFsdWUudG8gIT09IHRvICYmIHByZXZTY3JvbGxTdGFydCA9PT0gc2Nyb2xsRGV0YWlscy5zY3JvbGxTdGFydCkge1xuICAgICAgICAgIHZpcnR1YWxTY3JvbGxTbGljZVJhbmdlLnZhbHVlID0geyBmcm9tOiB2aXJ0dWFsU2Nyb2xsU2xpY2VSYW5nZS52YWx1ZS5mcm9tLCB0byB9XG4gICAgICAgICAgdmlydHVhbFNjcm9sbFBhZGRpbmdBZnRlci52YWx1ZSA9IHN1bVNpemUodmlydHVhbFNjcm9sbFNpemVzQWdnLCB2aXJ0dWFsU2Nyb2xsU2l6ZXMsIHRvLCB2aXJ0dWFsU2Nyb2xsTGVuZ3RoLnZhbHVlKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH1cblxuICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XG4gICAgICAvLyBpZiB0aGUgc2Nyb2xsIHdhcyBjaGFuZ2VkIGdpdmUgdXBcbiAgICAgIC8vIChhbm90aGVyIGNhbGwgdG8gc2V0VmlydHVhbFNjcm9sbFNsaWNlUmFuZ2UgYmVmb3JlIGFuaW1hdGlvbiBmcmFtZSlcbiAgICAgIGlmIChwcmV2U2Nyb2xsU3RhcnQgIT09IHNjcm9sbERldGFpbHMuc2Nyb2xsU3RhcnQpIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIGlmIChyYW5nZUNoYW5nZWQgPT09IHRydWUpIHtcbiAgICAgICAgdXBkYXRlVmlydHVhbFNjcm9sbFNpemVzKGZyb20pXG4gICAgICB9XG5cbiAgICAgIGNvbnN0XG4gICAgICAgIHNpemVBZnRlciA9IHZpcnR1YWxTY3JvbGxTaXplcy5zbGljZShmcm9tLCB0b0luZGV4KS5yZWR1Y2Uoc3VtRm4sIDApLFxuICAgICAgICBwb3NTdGFydCA9IHNpemVBZnRlciArIHNjcm9sbERldGFpbHMub2Zmc2V0U3RhcnQgKyB2aXJ0dWFsU2Nyb2xsUGFkZGluZ0JlZm9yZS52YWx1ZSxcbiAgICAgICAgcG9zRW5kID0gcG9zU3RhcnQgKyB2aXJ0dWFsU2Nyb2xsU2l6ZXNbIHRvSW5kZXggXVxuXG4gICAgICBsZXQgc2Nyb2xsUG9zaXRpb24gPSBwb3NTdGFydCArIG9mZnNldFxuXG4gICAgICBpZiAoYWxpZ25FbmQgIT09IHZvaWQgMCkge1xuICAgICAgICBjb25zdCBzaXplRGlmZiA9IHNpemVBZnRlciAtIHNpemVCZWZvcmVcbiAgICAgICAgY29uc3Qgc2Nyb2xsU3RhcnQgPSBzY3JvbGxEZXRhaWxzLnNjcm9sbFN0YXJ0ICsgc2l6ZURpZmZcblxuICAgICAgICBzY3JvbGxQb3NpdGlvbiA9IGFsaWduRm9yY2UgIT09IHRydWUgJiYgc2Nyb2xsU3RhcnQgPCBwb3NTdGFydCAmJiBwb3NFbmQgPCBzY3JvbGxTdGFydCArIHNjcm9sbERldGFpbHMuc2Nyb2xsVmlld1NpemVcbiAgICAgICAgICA/IHNjcm9sbFN0YXJ0XG4gICAgICAgICAgOiAoXG4gICAgICAgICAgICAgIGFsaWduRW5kID09PSAnZW5kJ1xuICAgICAgICAgICAgICAgID8gcG9zRW5kIC0gc2Nyb2xsRGV0YWlscy5zY3JvbGxWaWV3U2l6ZVxuICAgICAgICAgICAgICAgIDogcG9zU3RhcnQgLSAoYWxpZ25FbmQgPT09ICdzdGFydCcgPyAwIDogTWF0aC5yb3VuZCgoc2Nyb2xsRGV0YWlscy5zY3JvbGxWaWV3U2l6ZSAtIHZpcnR1YWxTY3JvbGxTaXplc1sgdG9JbmRleCBdKSAvIDIpKVxuICAgICAgICAgICAgKVxuICAgICAgfVxuXG4gICAgICBwcmV2U2Nyb2xsU3RhcnQgPSBzY3JvbGxQb3NpdGlvblxuXG4gICAgICBzZXRTY3JvbGwoXG4gICAgICAgIHNjcm9sbEVsLFxuICAgICAgICBzY3JvbGxQb3NpdGlvbixcbiAgICAgICAgcHJvcHMudmlydHVhbFNjcm9sbEhvcml6b250YWwsXG4gICAgICAgICRxLmxhbmcucnRsXG4gICAgICApXG5cbiAgICAgIGVtaXRTY3JvbGwodG9JbmRleClcbiAgICB9KVxuICB9XG5cbiAgZnVuY3Rpb24gdXBkYXRlVmlydHVhbFNjcm9sbFNpemVzIChmcm9tKSB7XG4gICAgY29uc3QgY29udGVudEVsID0gY29udGVudFJlZi52YWx1ZVxuXG4gICAgaWYgKGNvbnRlbnRFbCkge1xuICAgICAgY29uc3RcbiAgICAgICAgY2hpbGRyZW4gPSBmaWx0ZXJQcm90by5jYWxsKFxuICAgICAgICAgIGNvbnRlbnRFbC5jaGlsZHJlbixcbiAgICAgICAgICBlbCA9PiBlbC5jbGFzc0xpc3QgJiYgZWwuY2xhc3NMaXN0LmNvbnRhaW5zKCdxLXZpcnR1YWwtc2Nyb2xsLS1za2lwJykgPT09IGZhbHNlXG4gICAgICAgICksXG4gICAgICAgIGNoaWxkcmVuTGVuZ3RoID0gY2hpbGRyZW4ubGVuZ3RoLFxuICAgICAgICBzaXplRm4gPSBwcm9wcy52aXJ0dWFsU2Nyb2xsSG9yaXpvbnRhbCA9PT0gdHJ1ZVxuICAgICAgICAgID8gZWwgPT4gZWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkud2lkdGhcbiAgICAgICAgICA6IGVsID0+IGVsLm9mZnNldEhlaWdodFxuXG4gICAgICBsZXRcbiAgICAgICAgaW5kZXggPSBmcm9tLFxuICAgICAgICBzaXplLCBkaWZmXG5cbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY2hpbGRyZW5MZW5ndGg7KSB7XG4gICAgICAgIHNpemUgPSBzaXplRm4oY2hpbGRyZW5bIGkgXSlcbiAgICAgICAgaSsrXG5cbiAgICAgICAgd2hpbGUgKGkgPCBjaGlsZHJlbkxlbmd0aCAmJiBjaGlsZHJlblsgaSBdLmNsYXNzTGlzdC5jb250YWlucygncS12aXJ0dWFsLXNjcm9sbC0td2l0aC1wcmV2JykgPT09IHRydWUpIHtcbiAgICAgICAgICBzaXplICs9IHNpemVGbihjaGlsZHJlblsgaSBdKVxuICAgICAgICAgIGkrK1xuICAgICAgICB9XG5cbiAgICAgICAgZGlmZiA9IHNpemUgLSB2aXJ0dWFsU2Nyb2xsU2l6ZXNbIGluZGV4IF1cblxuICAgICAgICBpZiAoZGlmZiAhPT0gMCkge1xuICAgICAgICAgIHZpcnR1YWxTY3JvbGxTaXplc1sgaW5kZXggXSArPSBkaWZmXG4gICAgICAgICAgdmlydHVhbFNjcm9sbFNpemVzQWdnWyBNYXRoLmZsb29yKGluZGV4IC8gYWdnQnVja2V0U2l6ZSkgXSArPSBkaWZmXG4gICAgICAgIH1cblxuICAgICAgICBpbmRleCsrXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gb25CbHVyUmVmb2N1c0ZuICgpIHtcbiAgICBjb250ZW50UmVmLnZhbHVlICE9PSBudWxsICYmIGNvbnRlbnRSZWYudmFsdWUgIT09IHZvaWQgMCAmJiBjb250ZW50UmVmLnZhbHVlLmZvY3VzKClcbiAgfVxuXG4gIGZ1bmN0aW9uIGxvY2FsUmVzZXRWaXJ0dWFsU2Nyb2xsICh0b0luZGV4LCBmdWxsUmVzZXQpIHtcbiAgICBjb25zdCBkZWZhdWx0U2l6ZSA9IDEgKiB2aXJ0dWFsU2Nyb2xsSXRlbVNpemVDb21wdXRlZC52YWx1ZVxuXG4gICAgaWYgKGZ1bGxSZXNldCA9PT0gdHJ1ZSB8fCBBcnJheS5pc0FycmF5KHZpcnR1YWxTY3JvbGxTaXplcykgPT09IGZhbHNlKSB7XG4gICAgICB2aXJ0dWFsU2Nyb2xsU2l6ZXMgPSBbXVxuICAgIH1cblxuICAgIGNvbnN0IG9sZFZpcnR1YWxTY3JvbGxTaXplc0xlbmd0aCA9IHZpcnR1YWxTY3JvbGxTaXplcy5sZW5ndGhcblxuICAgIHZpcnR1YWxTY3JvbGxTaXplcy5sZW5ndGggPSB2aXJ0dWFsU2Nyb2xsTGVuZ3RoLnZhbHVlXG5cbiAgICBmb3IgKGxldCBpID0gdmlydHVhbFNjcm9sbExlbmd0aC52YWx1ZSAtIDE7IGkgPj0gb2xkVmlydHVhbFNjcm9sbFNpemVzTGVuZ3RoOyBpLS0pIHtcbiAgICAgIHZpcnR1YWxTY3JvbGxTaXplc1sgaSBdID0gZGVmYXVsdFNpemVcbiAgICB9XG5cbiAgICBjb25zdCBqTWF4ID0gTWF0aC5mbG9vcigodmlydHVhbFNjcm9sbExlbmd0aC52YWx1ZSAtIDEpIC8gYWdnQnVja2V0U2l6ZSlcbiAgICB2aXJ0dWFsU2Nyb2xsU2l6ZXNBZ2cgPSBbXVxuICAgIGZvciAobGV0IGogPSAwOyBqIDw9IGpNYXg7IGorKykge1xuICAgICAgbGV0IHNpemUgPSAwXG4gICAgICBjb25zdCBpTWF4ID0gTWF0aC5taW4oKGogKyAxKSAqIGFnZ0J1Y2tldFNpemUsIHZpcnR1YWxTY3JvbGxMZW5ndGgudmFsdWUpXG4gICAgICBmb3IgKGxldCBpID0gaiAqIGFnZ0J1Y2tldFNpemU7IGkgPCBpTWF4OyBpKyspIHtcbiAgICAgICAgc2l6ZSArPSB2aXJ0dWFsU2Nyb2xsU2l6ZXNbIGkgXVxuICAgICAgfVxuICAgICAgdmlydHVhbFNjcm9sbFNpemVzQWdnLnB1c2goc2l6ZSlcbiAgICB9XG5cbiAgICBwcmV2VG9JbmRleCA9IC0xXG4gICAgcHJldlNjcm9sbFN0YXJ0ID0gdm9pZCAwXG5cbiAgICB2aXJ0dWFsU2Nyb2xsUGFkZGluZ0JlZm9yZS52YWx1ZSA9IHN1bVNpemUodmlydHVhbFNjcm9sbFNpemVzQWdnLCB2aXJ0dWFsU2Nyb2xsU2l6ZXMsIDAsIHZpcnR1YWxTY3JvbGxTbGljZVJhbmdlLnZhbHVlLmZyb20pXG4gICAgdmlydHVhbFNjcm9sbFBhZGRpbmdBZnRlci52YWx1ZSA9IHN1bVNpemUodmlydHVhbFNjcm9sbFNpemVzQWdnLCB2aXJ0dWFsU2Nyb2xsU2l6ZXMsIHZpcnR1YWxTY3JvbGxTbGljZVJhbmdlLnZhbHVlLnRvLCB2aXJ0dWFsU2Nyb2xsTGVuZ3RoLnZhbHVlKVxuXG4gICAgaWYgKHRvSW5kZXggPj0gMCkge1xuICAgICAgdXBkYXRlVmlydHVhbFNjcm9sbFNpemVzKHZpcnR1YWxTY3JvbGxTbGljZVJhbmdlLnZhbHVlLmZyb20pXG4gICAgICBuZXh0VGljaygoKSA9PiB7IHNjcm9sbFRvKHRvSW5kZXgpIH0pXG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgb25WaXJ0dWFsU2Nyb2xsRXZ0KClcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBzZXRWaXJ0dWFsU2Nyb2xsU2l6ZSAoc2Nyb2xsVmlld1NpemUpIHtcbiAgICBpZiAoc2Nyb2xsVmlld1NpemUgPT09IHZvaWQgMCAmJiB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgY29uc3Qgc2Nyb2xsRWwgPSBnZXRWaXJ0dWFsU2Nyb2xsVGFyZ2V0KClcblxuICAgICAgaWYgKHNjcm9sbEVsICE9PSB2b2lkIDAgJiYgc2Nyb2xsRWwgIT09IG51bGwgJiYgc2Nyb2xsRWwubm9kZVR5cGUgIT09IDgpIHtcbiAgICAgICAgc2Nyb2xsVmlld1NpemUgPSBnZXRTY3JvbGxEZXRhaWxzKFxuICAgICAgICAgIHNjcm9sbEVsLFxuICAgICAgICAgIGdldFZpcnR1YWxTY3JvbGxFbCgpLFxuICAgICAgICAgIGJlZm9yZVJlZi52YWx1ZSxcbiAgICAgICAgICBhZnRlclJlZi52YWx1ZSxcbiAgICAgICAgICBwcm9wcy52aXJ0dWFsU2Nyb2xsSG9yaXpvbnRhbCxcbiAgICAgICAgICAkcS5sYW5nLnJ0bCxcbiAgICAgICAgICBwcm9wcy52aXJ0dWFsU2Nyb2xsU3RpY2t5U2l6ZVN0YXJ0LFxuICAgICAgICAgIHByb3BzLnZpcnR1YWxTY3JvbGxTdGlja3lTaXplRW5kXG4gICAgICAgICkuc2Nyb2xsVmlld1NpemVcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsb2NhbFNjcm9sbFZpZXdTaXplID0gc2Nyb2xsVmlld1NpemVcblxuICAgIGNvbnN0IHZpcnR1YWxTY3JvbGxTbGljZVJhdGlvQmVmb3JlID0gcGFyc2VGbG9hdChwcm9wcy52aXJ0dWFsU2Nyb2xsU2xpY2VSYXRpb0JlZm9yZSkgfHwgMFxuICAgIGNvbnN0IHZpcnR1YWxTY3JvbGxTbGljZVJhdGlvQWZ0ZXIgPSBwYXJzZUZsb2F0KHByb3BzLnZpcnR1YWxTY3JvbGxTbGljZVJhdGlvQWZ0ZXIpIHx8IDBcbiAgICBjb25zdCBtdWx0aXBsaWVyID0gMSArIHZpcnR1YWxTY3JvbGxTbGljZVJhdGlvQmVmb3JlICsgdmlydHVhbFNjcm9sbFNsaWNlUmF0aW9BZnRlclxuICAgIGNvbnN0IHZpZXcgPSBzY3JvbGxWaWV3U2l6ZSA9PT0gdm9pZCAwIHx8IHNjcm9sbFZpZXdTaXplIDw9IDBcbiAgICAgID8gMVxuICAgICAgOiBNYXRoLmNlaWwoc2Nyb2xsVmlld1NpemUgLyB2aXJ0dWFsU2Nyb2xsSXRlbVNpemVDb21wdXRlZC52YWx1ZSlcblxuICAgIGNvbnN0IGJhc2VTaXplID0gTWF0aC5tYXgoXG4gICAgICAxLFxuICAgICAgdmlldyxcbiAgICAgIE1hdGguY2VpbCgocHJvcHMudmlydHVhbFNjcm9sbFNsaWNlU2l6ZSA+IDAgPyBwcm9wcy52aXJ0dWFsU2Nyb2xsU2xpY2VTaXplIDogMTApIC8gbXVsdGlwbGllcilcbiAgICApXG5cbiAgICB2aXJ0dWFsU2Nyb2xsU2xpY2VTaXplQ29tcHV0ZWQudmFsdWUgPSB7XG4gICAgICB0b3RhbDogTWF0aC5jZWlsKGJhc2VTaXplICogbXVsdGlwbGllciksXG4gICAgICBzdGFydDogTWF0aC5jZWlsKGJhc2VTaXplICogdmlydHVhbFNjcm9sbFNsaWNlUmF0aW9CZWZvcmUpLFxuICAgICAgY2VudGVyOiBNYXRoLmNlaWwoYmFzZVNpemUgKiAoMC41ICsgdmlydHVhbFNjcm9sbFNsaWNlUmF0aW9CZWZvcmUpKSxcbiAgICAgIGVuZDogTWF0aC5jZWlsKGJhc2VTaXplICogKDEgKyB2aXJ0dWFsU2Nyb2xsU2xpY2VSYXRpb0JlZm9yZSkpLFxuICAgICAgdmlld1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHBhZFZpcnR1YWxTY3JvbGwgKHRhZywgY29udGVudCkge1xuICAgIGNvbnN0IHBhZGRpbmdTaXplID0gcHJvcHMudmlydHVhbFNjcm9sbEhvcml6b250YWwgPT09IHRydWUgPyAnd2lkdGgnIDogJ2hlaWdodCdcbiAgICBjb25zdCBzdHlsZSA9IHtcbiAgICAgIFsgJy0tcS12aXJ0dWFsLXNjcm9sbC1pdGVtLScgKyBwYWRkaW5nU2l6ZSBdOiB2aXJ0dWFsU2Nyb2xsSXRlbVNpemVDb21wdXRlZC52YWx1ZSArICdweCdcbiAgICB9XG5cbiAgICByZXR1cm4gW1xuICAgICAgdGFnID09PSAndGJvZHknXG4gICAgICAgID8gaCh0YWcsIHtcbiAgICAgICAgICBjbGFzczogJ3EtdmlydHVhbC1zY3JvbGxfX3BhZGRpbmcnLFxuICAgICAgICAgIGtleTogJ2JlZm9yZScsXG4gICAgICAgICAgcmVmOiBiZWZvcmVSZWZcbiAgICAgICAgfSwgW1xuICAgICAgICAgIGgoJ3RyJywgW1xuICAgICAgICAgICAgaCgndGQnLCB7XG4gICAgICAgICAgICAgIHN0eWxlOiB7IFsgcGFkZGluZ1NpemUgXTogYCR7IHZpcnR1YWxTY3JvbGxQYWRkaW5nQmVmb3JlLnZhbHVlIH1weGAsIC4uLnN0eWxlIH0sXG4gICAgICAgICAgICAgIGNvbHNwYW46IGNvbHNwYW5BdHRyLnZhbHVlXG4gICAgICAgICAgICB9KVxuICAgICAgICAgIF0pXG4gICAgICAgIF0pXG4gICAgICAgIDogaCh0YWcsIHtcbiAgICAgICAgICBjbGFzczogJ3EtdmlydHVhbC1zY3JvbGxfX3BhZGRpbmcnLFxuICAgICAgICAgIGtleTogJ2JlZm9yZScsXG4gICAgICAgICAgcmVmOiBiZWZvcmVSZWYsXG4gICAgICAgICAgc3R5bGU6IHsgWyBwYWRkaW5nU2l6ZSBdOiBgJHsgdmlydHVhbFNjcm9sbFBhZGRpbmdCZWZvcmUudmFsdWUgfXB4YCwgLi4uc3R5bGUgfVxuICAgICAgICB9KSxcblxuICAgICAgaCh0YWcsIHtcbiAgICAgICAgY2xhc3M6ICdxLXZpcnR1YWwtc2Nyb2xsX19jb250ZW50JyxcbiAgICAgICAga2V5OiAnY29udGVudCcsXG4gICAgICAgIHJlZjogY29udGVudFJlZixcbiAgICAgICAgdGFiaW5kZXg6IC0xXG4gICAgICB9LCBjb250ZW50LmZsYXQoKSksXG5cbiAgICAgIHRhZyA9PT0gJ3Rib2R5J1xuICAgICAgICA/IGgodGFnLCB7XG4gICAgICAgICAgY2xhc3M6ICdxLXZpcnR1YWwtc2Nyb2xsX19wYWRkaW5nJyxcbiAgICAgICAgICBrZXk6ICdhZnRlcicsXG4gICAgICAgICAgcmVmOiBhZnRlclJlZlxuICAgICAgICB9LCBbXG4gICAgICAgICAgaCgndHInLCBbXG4gICAgICAgICAgICBoKCd0ZCcsIHtcbiAgICAgICAgICAgICAgc3R5bGU6IHsgWyBwYWRkaW5nU2l6ZSBdOiBgJHsgdmlydHVhbFNjcm9sbFBhZGRpbmdBZnRlci52YWx1ZSB9cHhgLCAuLi5zdHlsZSB9LFxuICAgICAgICAgICAgICBjb2xzcGFuOiBjb2xzcGFuQXR0ci52YWx1ZVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICBdKVxuICAgICAgICBdKVxuICAgICAgICA6IGgodGFnLCB7XG4gICAgICAgICAgY2xhc3M6ICdxLXZpcnR1YWwtc2Nyb2xsX19wYWRkaW5nJyxcbiAgICAgICAgICBrZXk6ICdhZnRlcicsXG4gICAgICAgICAgcmVmOiBhZnRlclJlZixcbiAgICAgICAgICBzdHlsZTogeyBbIHBhZGRpbmdTaXplIF06IGAkeyB2aXJ0dWFsU2Nyb2xsUGFkZGluZ0FmdGVyLnZhbHVlIH1weGAsIC4uLnN0eWxlIH1cbiAgICAgICAgfSlcbiAgICBdXG4gIH1cblxuICBmdW5jdGlvbiBlbWl0U2Nyb2xsIChpbmRleCkge1xuICAgIGlmIChwcmV2VG9JbmRleCAhPT0gaW5kZXgpIHtcbiAgICAgIHByb3BzLm9uVmlydHVhbFNjcm9sbCAhPT0gdm9pZCAwICYmIGVtaXQoJ3ZpcnR1YWxTY3JvbGwnLCB7XG4gICAgICAgIGluZGV4LFxuICAgICAgICBmcm9tOiB2aXJ0dWFsU2Nyb2xsU2xpY2VSYW5nZS52YWx1ZS5mcm9tLFxuICAgICAgICB0bzogdmlydHVhbFNjcm9sbFNsaWNlUmFuZ2UudmFsdWUudG8gLSAxLFxuICAgICAgICBkaXJlY3Rpb246IGluZGV4IDwgcHJldlRvSW5kZXggPyAnZGVjcmVhc2UnIDogJ2luY3JlYXNlJyxcbiAgICAgICAgcmVmOiBwcm94eVxuICAgICAgfSlcblxuICAgICAgcHJldlRvSW5kZXggPSBpbmRleFxuICAgIH1cbiAgfVxuXG4gIHNldFZpcnR1YWxTY3JvbGxTaXplKClcbiAgY29uc3Qgb25WaXJ0dWFsU2Nyb2xsRXZ0ID0gZGVib3VuY2UoXG4gICAgbG9jYWxPblZpcnR1YWxTY3JvbGxFdnQsXG4gICAgJHEucGxhdGZvcm0uaXMuaW9zID09PSB0cnVlID8gMTIwIDogMzVcbiAgKVxuXG4gIG9uQmVmb3JlTW91bnQoKCkgPT4ge1xuICAgIHNldFZpcnR1YWxTY3JvbGxTaXplKClcbiAgfSlcblxuICBsZXQgc2hvdWxkQWN0aXZhdGUgPSBmYWxzZVxuXG4gIG9uRGVhY3RpdmF0ZWQoKCkgPT4ge1xuICAgIHNob3VsZEFjdGl2YXRlID0gdHJ1ZVxuICB9KVxuXG4gIG9uQWN0aXZhdGVkKCgpID0+IHtcbiAgICBpZiAoc2hvdWxkQWN0aXZhdGUgIT09IHRydWUpIHJldHVyblxuXG4gICAgY29uc3Qgc2Nyb2xsRWwgPSBnZXRWaXJ0dWFsU2Nyb2xsVGFyZ2V0KClcblxuICAgIGlmIChwcmV2U2Nyb2xsU3RhcnQgIT09IHZvaWQgMCAmJiBzY3JvbGxFbCAhPT0gdm9pZCAwICYmIHNjcm9sbEVsICE9PSBudWxsICYmIHNjcm9sbEVsLm5vZGVUeXBlICE9PSA4KSB7XG4gICAgICBzZXRTY3JvbGwoXG4gICAgICAgIHNjcm9sbEVsLFxuICAgICAgICBwcmV2U2Nyb2xsU3RhcnQsXG4gICAgICAgIHByb3BzLnZpcnR1YWxTY3JvbGxIb3Jpem9udGFsLFxuICAgICAgICAkcS5sYW5nLnJ0bFxuICAgICAgKVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHNjcm9sbFRvKHByZXZUb0luZGV4KVxuICAgIH1cbiAgfSlcblxuICBfX1FVQVNBUl9TU1JfXyB8fCBvbkJlZm9yZVVubW91bnQoKCkgPT4ge1xuICAgIG9uVmlydHVhbFNjcm9sbEV2dC5jYW5jZWwoKVxuICB9KVxuXG4gIC8vIGV4cG9zZSBwdWJsaWMgbWV0aG9kc1xuICBPYmplY3QuYXNzaWduKHByb3h5LCB7IHNjcm9sbFRvLCByZXNldCwgcmVmcmVzaCB9KVxuXG4gIHJldHVybiB7XG4gICAgdmlydHVhbFNjcm9sbFNsaWNlUmFuZ2UsXG4gICAgdmlydHVhbFNjcm9sbFNsaWNlU2l6ZUNvbXB1dGVkLFxuXG4gICAgc2V0VmlydHVhbFNjcm9sbFNpemUsXG4gICAgb25WaXJ0dWFsU2Nyb2xsRXZ0LFxuICAgIGxvY2FsUmVzZXRWaXJ0dWFsU2Nyb2xsLFxuICAgIHBhZFZpcnR1YWxTY3JvbGwsXG5cbiAgICBzY3JvbGxUbyxcbiAgICByZXNldCxcbiAgICByZWZyZXNoXG4gIH1cbn1cbiIsImltcG9ydCB7IGgsIHJlZiwgY29tcHV0ZWQsIHdhdGNoLCBvbkJlZm9yZU1vdW50LCBvbk1vdW50ZWQsIG9uQmVmb3JlVW5tb3VudCwgb25BY3RpdmF0ZWQsIG9uRGVhY3RpdmF0ZWQgfSBmcm9tICd2dWUnXG5cbmltcG9ydCBRTGlzdCBmcm9tICcuLi9pdGVtL1FMaXN0LmpzJ1xuaW1wb3J0IFFNYXJrdXBUYWJsZSBmcm9tICcuLi9tYXJrdXAtdGFibGUvUU1hcmt1cFRhYmxlLmpzJ1xuaW1wb3J0IGdldFRhYmxlTWlkZGxlIGZyb20gJy4uL3RhYmxlL2dldC10YWJsZS1taWRkbGUuanMnXG5cbmltcG9ydCB7IHVzZVZpcnR1YWxTY3JvbGwsIHVzZVZpcnR1YWxTY3JvbGxQcm9wcyB9IGZyb20gJy4vdXNlLXZpcnR1YWwtc2Nyb2xsLmpzJ1xuXG5pbXBvcnQgeyBjcmVhdGVDb21wb25lbnQgfSBmcm9tICcuLi8uLi91dGlscy9wcml2YXRlL2NyZWF0ZS5qcydcbmltcG9ydCB7IGdldFNjcm9sbFRhcmdldCB9IGZyb20gJy4uLy4uL3V0aWxzL3Njcm9sbC5qcydcbmltcG9ydCB7IGxpc3Rlbk9wdHMgfSBmcm9tICcuLi8uLi91dGlscy9ldmVudC5qcydcbmltcG9ydCB7IGhNZXJnZVNsb3QgfSBmcm9tICcuLi8uLi91dGlscy9wcml2YXRlL3JlbmRlci5qcydcblxuY29uc3QgY29tcHMgPSB7XG4gIGxpc3Q6IFFMaXN0LFxuICB0YWJsZTogUU1hcmt1cFRhYmxlXG59XG5cbmNvbnN0IHR5cGVPcHRpb25zID0gWyAnbGlzdCcsICd0YWJsZScsICdfX3F0YWJsZScgXVxuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVDb21wb25lbnQoe1xuICBuYW1lOiAnUVZpcnR1YWxTY3JvbGwnLFxuXG4gIHByb3BzOiB7XG4gICAgLi4udXNlVmlydHVhbFNjcm9sbFByb3BzLFxuXG4gICAgdHlwZToge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgZGVmYXVsdDogJ2xpc3QnLFxuICAgICAgdmFsaWRhdG9yOiB2ID0+IHR5cGVPcHRpb25zLmluY2x1ZGVzKHYpXG4gICAgfSxcblxuICAgIGl0ZW1zOiB7XG4gICAgICB0eXBlOiBBcnJheSxcbiAgICAgIGRlZmF1bHQ6ICgpID0+IFtdXG4gICAgfSxcblxuICAgIGl0ZW1zRm46IEZ1bmN0aW9uLFxuICAgIGl0ZW1zU2l6ZTogTnVtYmVyLFxuXG4gICAgc2Nyb2xsVGFyZ2V0OiB7XG4gICAgICBkZWZhdWx0OiB2b2lkIDBcbiAgICB9XG4gIH0sXG5cbiAgc2V0dXAgKHByb3BzLCB7IHNsb3RzLCBhdHRycyB9KSB7XG4gICAgbGV0IGxvY2FsU2Nyb2xsVGFyZ2V0XG4gICAgY29uc3Qgcm9vdFJlZiA9IHJlZihudWxsKVxuXG4gICAgY29uc3QgdmlydHVhbFNjcm9sbExlbmd0aCA9IGNvbXB1dGVkKCgpID0+IChcbiAgICAgIHByb3BzLml0ZW1zU2l6ZSA+PSAwICYmIHByb3BzLml0ZW1zRm4gIT09IHZvaWQgMFxuICAgICAgICA/IHBhcnNlSW50KHByb3BzLml0ZW1zU2l6ZSwgMTApXG4gICAgICAgIDogKEFycmF5LmlzQXJyYXkocHJvcHMuaXRlbXMpID8gcHJvcHMuaXRlbXMubGVuZ3RoIDogMClcbiAgICApKVxuXG4gICAgY29uc3Qge1xuICAgICAgdmlydHVhbFNjcm9sbFNsaWNlUmFuZ2UsXG4gICAgICBsb2NhbFJlc2V0VmlydHVhbFNjcm9sbCxcbiAgICAgIHBhZFZpcnR1YWxTY3JvbGwsXG4gICAgICBvblZpcnR1YWxTY3JvbGxFdnRcbiAgICB9ID0gdXNlVmlydHVhbFNjcm9sbCh7XG4gICAgICB2aXJ0dWFsU2Nyb2xsTGVuZ3RoLCBnZXRWaXJ0dWFsU2Nyb2xsVGFyZ2V0LCBnZXRWaXJ0dWFsU2Nyb2xsRWxcbiAgICB9KVxuXG4gICAgY29uc3QgdmlydHVhbFNjcm9sbFNjb3BlID0gY29tcHV0ZWQoKCkgPT4ge1xuICAgICAgaWYgKHZpcnR1YWxTY3JvbGxMZW5ndGgudmFsdWUgPT09IDApIHtcbiAgICAgICAgcmV0dXJuIFtdXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IG1hcEZuID0gKGl0ZW0sIGkpID0+ICh7XG4gICAgICAgIGluZGV4OiB2aXJ0dWFsU2Nyb2xsU2xpY2VSYW5nZS52YWx1ZS5mcm9tICsgaSxcbiAgICAgICAgaXRlbVxuICAgICAgfSlcblxuICAgICAgcmV0dXJuIHByb3BzLml0ZW1zRm4gPT09IHZvaWQgMFxuICAgICAgICA/IHByb3BzLml0ZW1zLnNsaWNlKHZpcnR1YWxTY3JvbGxTbGljZVJhbmdlLnZhbHVlLmZyb20sIHZpcnR1YWxTY3JvbGxTbGljZVJhbmdlLnZhbHVlLnRvKS5tYXAobWFwRm4pXG4gICAgICAgIDogcHJvcHMuaXRlbXNGbih2aXJ0dWFsU2Nyb2xsU2xpY2VSYW5nZS52YWx1ZS5mcm9tLCB2aXJ0dWFsU2Nyb2xsU2xpY2VSYW5nZS52YWx1ZS50byAtIHZpcnR1YWxTY3JvbGxTbGljZVJhbmdlLnZhbHVlLmZyb20pLm1hcChtYXBGbilcbiAgICB9KVxuXG4gICAgY29uc3QgY2xhc3NlcyA9IGNvbXB1dGVkKCgpID0+XG4gICAgICAncS12aXJ0dWFsLXNjcm9sbCBxLXZpcnR1YWwtc2Nyb2xsJyArIChwcm9wcy52aXJ0dWFsU2Nyb2xsSG9yaXpvbnRhbCA9PT0gdHJ1ZSA/ICctLWhvcml6b250YWwnIDogJy0tdmVydGljYWwnKVxuICAgICAgKyAocHJvcHMuc2Nyb2xsVGFyZ2V0ICE9PSB2b2lkIDAgPyAnJyA6ICcgc2Nyb2xsJylcbiAgICApXG5cbiAgICBjb25zdCBhdHRyaWJ1dGVzID0gY29tcHV0ZWQoKCkgPT4gKFxuICAgICAgcHJvcHMuc2Nyb2xsVGFyZ2V0ICE9PSB2b2lkIDAgPyB7fSA6IHsgdGFiaW5kZXg6IDAgfVxuICAgICkpXG5cbiAgICB3YXRjaCh2aXJ0dWFsU2Nyb2xsTGVuZ3RoLCAoKSA9PiB7XG4gICAgICBsb2NhbFJlc2V0VmlydHVhbFNjcm9sbCgpXG4gICAgfSlcblxuICAgIHdhdGNoKCgpID0+IHByb3BzLnNjcm9sbFRhcmdldCwgKCkgPT4ge1xuICAgICAgdW5jb25maWd1cmVTY3JvbGxUYXJnZXQoKVxuICAgICAgY29uZmlndXJlU2Nyb2xsVGFyZ2V0KClcbiAgICB9KVxuXG4gICAgZnVuY3Rpb24gZ2V0VmlydHVhbFNjcm9sbEVsICgpIHtcbiAgICAgIHJldHVybiByb290UmVmLnZhbHVlLiRlbCB8fCByb290UmVmLnZhbHVlXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0VmlydHVhbFNjcm9sbFRhcmdldCAoKSB7XG4gICAgICByZXR1cm4gbG9jYWxTY3JvbGxUYXJnZXRcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjb25maWd1cmVTY3JvbGxUYXJnZXQgKCkge1xuICAgICAgbG9jYWxTY3JvbGxUYXJnZXQgPSBnZXRTY3JvbGxUYXJnZXQoZ2V0VmlydHVhbFNjcm9sbEVsKCksIHByb3BzLnNjcm9sbFRhcmdldClcbiAgICAgIGxvY2FsU2Nyb2xsVGFyZ2V0LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIG9uVmlydHVhbFNjcm9sbEV2dCwgbGlzdGVuT3B0cy5wYXNzaXZlKVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHVuY29uZmlndXJlU2Nyb2xsVGFyZ2V0ICgpIHtcbiAgICAgIGlmIChsb2NhbFNjcm9sbFRhcmdldCAhPT0gdm9pZCAwKSB7XG4gICAgICAgIGxvY2FsU2Nyb2xsVGFyZ2V0LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIG9uVmlydHVhbFNjcm9sbEV2dCwgbGlzdGVuT3B0cy5wYXNzaXZlKVxuICAgICAgICBsb2NhbFNjcm9sbFRhcmdldCA9IHZvaWQgMFxuICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIF9fZ2V0VmlydHVhbENoaWxkcmVuICgpIHtcbiAgICAgIGxldCBjaGlsZCA9IHBhZFZpcnR1YWxTY3JvbGwoXG4gICAgICAgIHByb3BzLnR5cGUgPT09ICdsaXN0JyA/ICdkaXYnIDogJ3Rib2R5JyxcbiAgICAgICAgdmlydHVhbFNjcm9sbFNjb3BlLnZhbHVlLm1hcChzbG90cy5kZWZhdWx0KVxuICAgICAgKVxuXG4gICAgICBpZiAoc2xvdHMuYmVmb3JlICE9PSB2b2lkIDApIHtcbiAgICAgICAgY2hpbGQgPSBzbG90cy5iZWZvcmUoKS5jb25jYXQoY2hpbGQpXG4gICAgICB9XG5cbiAgICAgIHJldHVybiBoTWVyZ2VTbG90KHNsb3RzLmFmdGVyLCBjaGlsZClcbiAgICB9XG5cbiAgICBvbkJlZm9yZU1vdW50KCgpID0+IHtcbiAgICAgIGxvY2FsUmVzZXRWaXJ0dWFsU2Nyb2xsKClcbiAgICB9KVxuXG4gICAgb25Nb3VudGVkKCgpID0+IHtcbiAgICAgIGNvbmZpZ3VyZVNjcm9sbFRhcmdldCgpXG4gICAgfSlcblxuICAgIG9uQWN0aXZhdGVkKCgpID0+IHtcbiAgICAgIGNvbmZpZ3VyZVNjcm9sbFRhcmdldCgpXG4gICAgfSlcblxuICAgIG9uRGVhY3RpdmF0ZWQoKCkgPT4ge1xuICAgICAgdW5jb25maWd1cmVTY3JvbGxUYXJnZXQoKVxuICAgIH0pXG5cbiAgICBvbkJlZm9yZVVubW91bnQoKCkgPT4ge1xuICAgICAgdW5jb25maWd1cmVTY3JvbGxUYXJnZXQoKVxuICAgIH0pXG5cbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgaWYgKHNsb3RzLmRlZmF1bHQgPT09IHZvaWQgMCkge1xuICAgICAgICBjb25zb2xlLmVycm9yKCdRVmlydHVhbFNjcm9sbDogZGVmYXVsdCBzY29wZWQgc2xvdCBpcyByZXF1aXJlZCBmb3IgcmVuZGVyaW5nJylcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIHJldHVybiBwcm9wcy50eXBlID09PSAnX19xdGFibGUnXG4gICAgICAgID8gZ2V0VGFibGVNaWRkbGUoXG4gICAgICAgICAgeyByZWY6IHJvb3RSZWYsIGNsYXNzOiAncS10YWJsZV9fbWlkZGxlICcgKyBjbGFzc2VzLnZhbHVlIH0sXG4gICAgICAgICAgX19nZXRWaXJ0dWFsQ2hpbGRyZW4oKVxuICAgICAgICApXG4gICAgICAgIDogaChjb21wc1sgcHJvcHMudHlwZSBdLCB7XG4gICAgICAgICAgLi4uYXR0cnMsXG4gICAgICAgICAgcmVmOiByb290UmVmLFxuICAgICAgICAgIGNsYXNzOiBbIGF0dHJzLmNsYXNzLCBjbGFzc2VzLnZhbHVlIF0sXG4gICAgICAgICAgLi4uYXR0cmlidXRlcy52YWx1ZVxuICAgICAgICB9LCBfX2dldFZpcnR1YWxDaGlsZHJlbilcbiAgICB9XG4gIH1cbn0pXG4iLCJpbXBvcnQgdXNlRmllbGQsIHsgdXNlRmllbGRTdGF0ZSwgdXNlRmllbGRQcm9wcywgdXNlRmllbGRFbWl0cyB9IGZyb20gJy4uLy4uL2NvbXBvc2FibGVzL3ByaXZhdGUvdXNlLWZpZWxkLmpzJ1xuXG5pbXBvcnQgeyBjcmVhdGVDb21wb25lbnQgfSBmcm9tICcuLi8uLi91dGlscy9wcml2YXRlL2NyZWF0ZS5qcydcblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlQ29tcG9uZW50KHtcbiAgbmFtZTogJ1FGaWVsZCcsXG5cbiAgaW5oZXJpdEF0dHJzOiBmYWxzZSxcblxuICBwcm9wczoge1xuICAgIC4uLnVzZUZpZWxkUHJvcHMsXG5cbiAgICB0YWc6IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIGRlZmF1bHQ6ICdsYWJlbCdcbiAgICB9XG4gIH0sXG5cbiAgZW1pdHM6IHVzZUZpZWxkRW1pdHMsXG5cbiAgc2V0dXAgKCkge1xuICAgIHJldHVybiB1c2VGaWVsZChcbiAgICAgIHVzZUZpZWxkU3RhdGUoe1xuICAgICAgICByZXF1aXJlZEZvckF0dHI6IGZhbHNlLFxuICAgICAgICB0YWdQcm9wOiB0cnVlXG4gICAgICB9KVxuICAgIClcbiAgfVxufSlcbiIsImltcG9ydCB7IGgsIGNvbXB1dGVkLCBnZXRDdXJyZW50SW5zdGFuY2UgfSBmcm9tICd2dWUnXG5cbmltcG9ydCBRSWNvbiBmcm9tICcuLi9pY29uL1FJY29uLmpzJ1xuXG5pbXBvcnQgUmlwcGxlIGZyb20gJy4uLy4uL2RpcmVjdGl2ZXMvUmlwcGxlLmpzJ1xuXG5pbXBvcnQgdXNlRGFyaywgeyB1c2VEYXJrUHJvcHMgfSBmcm9tICcuLi8uLi9jb21wb3NhYmxlcy9wcml2YXRlL3VzZS1kYXJrLmpzJ1xuaW1wb3J0IHVzZVNpemUsIHsgdXNlU2l6ZVByb3BzIH0gZnJvbSAnLi4vLi4vY29tcG9zYWJsZXMvcHJpdmF0ZS91c2Utc2l6ZS5qcydcblxuaW1wb3J0IHsgY3JlYXRlQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vdXRpbHMvcHJpdmF0ZS9jcmVhdGUuanMnXG5pbXBvcnQgeyBzdG9wQW5kUHJldmVudCB9IGZyb20gJy4uLy4uL3V0aWxzL2V2ZW50LmpzJ1xuaW1wb3J0IHsgaE1lcmdlU2xvdFNhZmVseSwgaERpciB9IGZyb20gJy4uLy4uL3V0aWxzL3ByaXZhdGUvcmVuZGVyLmpzJ1xuXG5leHBvcnQgY29uc3QgZGVmYXVsdFNpemVzID0ge1xuICB4czogOCxcbiAgc206IDEwLFxuICBtZDogMTQsXG4gIGxnOiAyMCxcbiAgeGw6IDI0XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUNvbXBvbmVudCh7XG4gIG5hbWU6ICdRQ2hpcCcsXG5cbiAgcHJvcHM6IHtcbiAgICAuLi51c2VEYXJrUHJvcHMsXG4gICAgLi4udXNlU2l6ZVByb3BzLFxuXG4gICAgZGVuc2U6IEJvb2xlYW4sXG5cbiAgICBpY29uOiBTdHJpbmcsXG4gICAgaWNvblJpZ2h0OiBTdHJpbmcsXG4gICAgaWNvblJlbW92ZTogU3RyaW5nLFxuICAgIGljb25TZWxlY3RlZDogU3RyaW5nLFxuICAgIGxhYmVsOiBbIFN0cmluZywgTnVtYmVyIF0sXG5cbiAgICBjb2xvcjogU3RyaW5nLFxuICAgIHRleHRDb2xvcjogU3RyaW5nLFxuXG4gICAgbW9kZWxWYWx1ZToge1xuICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgIGRlZmF1bHQ6IHRydWVcbiAgICB9LFxuICAgIHNlbGVjdGVkOiB7XG4gICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgZGVmYXVsdDogbnVsbFxuICAgIH0sXG5cbiAgICBzcXVhcmU6IEJvb2xlYW4sXG4gICAgb3V0bGluZTogQm9vbGVhbixcbiAgICBjbGlja2FibGU6IEJvb2xlYW4sXG4gICAgcmVtb3ZhYmxlOiBCb29sZWFuLFxuXG4gICAgcmVtb3ZlQXJpYUxhYmVsOiBTdHJpbmcsXG5cbiAgICB0YWJpbmRleDogWyBTdHJpbmcsIE51bWJlciBdLFxuICAgIGRpc2FibGU6IEJvb2xlYW4sXG5cbiAgICByaXBwbGU6IHtcbiAgICAgIHR5cGU6IFsgQm9vbGVhbiwgT2JqZWN0IF0sXG4gICAgICBkZWZhdWx0OiB0cnVlXG4gICAgfVxuICB9LFxuXG4gIGVtaXRzOiBbICd1cGRhdGU6bW9kZWxWYWx1ZScsICd1cGRhdGU6c2VsZWN0ZWQnLCAncmVtb3ZlJywgJ2NsaWNrJyBdLFxuXG4gIHNldHVwIChwcm9wcywgeyBzbG90cywgZW1pdCB9KSB7XG4gICAgY29uc3QgeyBwcm94eTogeyAkcSB9IH0gPSBnZXRDdXJyZW50SW5zdGFuY2UoKVxuXG4gICAgY29uc3QgaXNEYXJrID0gdXNlRGFyayhwcm9wcywgJHEpXG4gICAgY29uc3Qgc2l6ZVN0eWxlID0gdXNlU2l6ZShwcm9wcywgZGVmYXVsdFNpemVzKVxuXG4gICAgY29uc3QgaGFzTGVmdEljb24gPSBjb21wdXRlZCgoKSA9PiBwcm9wcy5zZWxlY3RlZCA9PT0gdHJ1ZSB8fCBwcm9wcy5pY29uICE9PSB2b2lkIDApXG5cbiAgICBjb25zdCBsZWZ0SWNvbiA9IGNvbXB1dGVkKCgpID0+IChcbiAgICAgIHByb3BzLnNlbGVjdGVkID09PSB0cnVlXG4gICAgICAgID8gcHJvcHMuaWNvblNlbGVjdGVkIHx8ICRxLmljb25TZXQuY2hpcC5zZWxlY3RlZFxuICAgICAgICA6IHByb3BzLmljb25cbiAgICApKVxuXG4gICAgY29uc3QgcmVtb3ZlSWNvbiA9IGNvbXB1dGVkKCgpID0+IHByb3BzLmljb25SZW1vdmUgfHwgJHEuaWNvblNldC5jaGlwLnJlbW92ZSlcblxuICAgIGNvbnN0IGlzQ2xpY2thYmxlID0gY29tcHV0ZWQoKCkgPT5cbiAgICAgIHByb3BzLmRpc2FibGUgPT09IGZhbHNlXG4gICAgICAmJiAocHJvcHMuY2xpY2thYmxlID09PSB0cnVlIHx8IHByb3BzLnNlbGVjdGVkICE9PSBudWxsKVxuICAgIClcblxuICAgIGNvbnN0IGNsYXNzZXMgPSBjb21wdXRlZCgoKSA9PiB7XG4gICAgICBjb25zdCB0ZXh0ID0gcHJvcHMub3V0bGluZSA9PT0gdHJ1ZVxuICAgICAgICA/IHByb3BzLmNvbG9yIHx8IHByb3BzLnRleHRDb2xvclxuICAgICAgICA6IHByb3BzLnRleHRDb2xvclxuXG4gICAgICByZXR1cm4gJ3EtY2hpcCByb3cgaW5saW5lIG5vLXdyYXAgaXRlbXMtY2VudGVyJ1xuICAgICAgICArIChwcm9wcy5vdXRsaW5lID09PSBmYWxzZSAmJiBwcm9wcy5jb2xvciAhPT0gdm9pZCAwID8gYCBiZy0keyBwcm9wcy5jb2xvciB9YCA6ICcnKVxuICAgICAgICArICh0ZXh0ID8gYCB0ZXh0LSR7IHRleHQgfSBxLWNoaXAtLWNvbG9yZWRgIDogJycpXG4gICAgICAgICsgKHByb3BzLmRpc2FibGUgPT09IHRydWUgPyAnIGRpc2FibGVkJyA6ICcnKVxuICAgICAgICArIChwcm9wcy5kZW5zZSA9PT0gdHJ1ZSA/ICcgcS1jaGlwLS1kZW5zZScgOiAnJylcbiAgICAgICAgKyAocHJvcHMub3V0bGluZSA9PT0gdHJ1ZSA/ICcgcS1jaGlwLS1vdXRsaW5lJyA6ICcnKVxuICAgICAgICArIChwcm9wcy5zZWxlY3RlZCA9PT0gdHJ1ZSA/ICcgcS1jaGlwLS1zZWxlY3RlZCcgOiAnJylcbiAgICAgICAgKyAoaXNDbGlja2FibGUudmFsdWUgPT09IHRydWUgPyAnIHEtY2hpcC0tY2xpY2thYmxlIGN1cnNvci1wb2ludGVyIG5vbi1zZWxlY3RhYmxlIHEtaG92ZXJhYmxlJyA6ICcnKVxuICAgICAgICArIChwcm9wcy5zcXVhcmUgPT09IHRydWUgPyAnIHEtY2hpcC0tc3F1YXJlJyA6ICcnKVxuICAgICAgICArIChpc0RhcmsudmFsdWUgPT09IHRydWUgPyAnIHEtY2hpcC0tZGFyayBxLWRhcmsnIDogJycpXG4gICAgfSlcblxuICAgIGNvbnN0IGF0dHJpYnV0ZXMgPSBjb21wdXRlZCgoKSA9PiB7XG4gICAgICBjb25zdCBjaGlwID0gcHJvcHMuZGlzYWJsZSA9PT0gdHJ1ZVxuICAgICAgICA/IHsgdGFiaW5kZXg6IC0xLCAnYXJpYS1kaXNhYmxlZCc6ICd0cnVlJyB9XG4gICAgICAgIDogeyB0YWJpbmRleDogcHJvcHMudGFiaW5kZXggfHwgMCB9XG4gICAgICBjb25zdCByZW1vdmUgPSB7XG4gICAgICAgIC4uLmNoaXAsXG4gICAgICAgIHJvbGU6ICdidXR0b24nLFxuICAgICAgICAnYXJpYS1oaWRkZW4nOiAnZmFsc2UnLFxuICAgICAgICAnYXJpYS1sYWJlbCc6IHByb3BzLnJlbW92ZUFyaWFMYWJlbCB8fCAkcS5sYW5nLmxhYmVsLnJlbW92ZVxuICAgICAgfVxuXG4gICAgICByZXR1cm4geyBjaGlwLCByZW1vdmUgfVxuICAgIH0pXG5cbiAgICBmdW5jdGlvbiBvbktleXVwIChlKSB7XG4gICAgICBlLmtleUNvZGUgPT09IDEzIC8qIEVOVEVSICovICYmIG9uQ2xpY2soZSlcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBvbkNsaWNrIChlKSB7XG4gICAgICBpZiAoIXByb3BzLmRpc2FibGUpIHtcbiAgICAgICAgZW1pdCgndXBkYXRlOnNlbGVjdGVkJywgIXByb3BzLnNlbGVjdGVkKVxuICAgICAgICBlbWl0KCdjbGljaycsIGUpXG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gb25SZW1vdmUgKGUpIHtcbiAgICAgIGlmIChlLmtleUNvZGUgPT09IHZvaWQgMCB8fCBlLmtleUNvZGUgPT09IDEzKSB7XG4gICAgICAgIHN0b3BBbmRQcmV2ZW50KGUpXG4gICAgICAgIGlmIChwcm9wcy5kaXNhYmxlID09PSBmYWxzZSkge1xuICAgICAgICAgIGVtaXQoJ3VwZGF0ZTptb2RlbFZhbHVlJywgZmFsc2UpXG4gICAgICAgICAgZW1pdCgncmVtb3ZlJylcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdldENvbnRlbnQgKCkge1xuICAgICAgY29uc3QgY2hpbGQgPSBbXVxuXG4gICAgICBpc0NsaWNrYWJsZS52YWx1ZSA9PT0gdHJ1ZSAmJiBjaGlsZC5wdXNoKFxuICAgICAgICBoKCdkaXYnLCB7IGNsYXNzOiAncS1mb2N1cy1oZWxwZXInIH0pXG4gICAgICApXG5cbiAgICAgIGhhc0xlZnRJY29uLnZhbHVlID09PSB0cnVlICYmIGNoaWxkLnB1c2goXG4gICAgICAgIGgoUUljb24sIHtcbiAgICAgICAgICBjbGFzczogJ3EtY2hpcF9faWNvbiBxLWNoaXBfX2ljb24tLWxlZnQnLFxuICAgICAgICAgIG5hbWU6IGxlZnRJY29uLnZhbHVlXG4gICAgICAgIH0pXG4gICAgICApXG5cbiAgICAgIGNvbnN0IGxhYmVsID0gcHJvcHMubGFiZWwgIT09IHZvaWQgMFxuICAgICAgICA/IFsgaCgnZGl2JywgeyBjbGFzczogJ2VsbGlwc2lzJyB9LCBbIHByb3BzLmxhYmVsIF0pIF1cbiAgICAgICAgOiB2b2lkIDBcblxuICAgICAgY2hpbGQucHVzaChcbiAgICAgICAgaCgnZGl2Jywge1xuICAgICAgICAgIGNsYXNzOiAncS1jaGlwX19jb250ZW50IGNvbCByb3cgbm8td3JhcCBpdGVtcy1jZW50ZXIgcS1hbmNob3ItLXNraXAnXG4gICAgICAgIH0sIGhNZXJnZVNsb3RTYWZlbHkoc2xvdHMuZGVmYXVsdCwgbGFiZWwpKVxuICAgICAgKVxuXG4gICAgICBwcm9wcy5pY29uUmlnaHQgJiYgY2hpbGQucHVzaChcbiAgICAgICAgaChRSWNvbiwge1xuICAgICAgICAgIGNsYXNzOiAncS1jaGlwX19pY29uIHEtY2hpcF9faWNvbi0tcmlnaHQnLFxuICAgICAgICAgIG5hbWU6IHByb3BzLmljb25SaWdodFxuICAgICAgICB9KVxuICAgICAgKVxuXG4gICAgICBwcm9wcy5yZW1vdmFibGUgPT09IHRydWUgJiYgY2hpbGQucHVzaChcbiAgICAgICAgaChRSWNvbiwge1xuICAgICAgICAgIGNsYXNzOiAncS1jaGlwX19pY29uIHEtY2hpcF9faWNvbi0tcmVtb3ZlIGN1cnNvci1wb2ludGVyJyxcbiAgICAgICAgICBuYW1lOiByZW1vdmVJY29uLnZhbHVlLFxuICAgICAgICAgIC4uLmF0dHJpYnV0ZXMudmFsdWUucmVtb3ZlLFxuICAgICAgICAgIG9uQ2xpY2s6IG9uUmVtb3ZlLFxuICAgICAgICAgIG9uS2V5dXA6IG9uUmVtb3ZlXG4gICAgICAgIH0pXG4gICAgICApXG5cbiAgICAgIHJldHVybiBjaGlsZFxuICAgIH1cblxuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICBpZiAocHJvcHMubW9kZWxWYWx1ZSA9PT0gZmFsc2UpIHJldHVyblxuXG4gICAgICBjb25zdCBkYXRhID0ge1xuICAgICAgICBjbGFzczogY2xhc3Nlcy52YWx1ZSxcbiAgICAgICAgc3R5bGU6IHNpemVTdHlsZS52YWx1ZVxuICAgICAgfVxuXG4gICAgICBpc0NsaWNrYWJsZS52YWx1ZSA9PT0gdHJ1ZSAmJiBPYmplY3QuYXNzaWduKFxuICAgICAgICBkYXRhLFxuICAgICAgICBhdHRyaWJ1dGVzLnZhbHVlLmNoaXAsXG4gICAgICAgIHsgb25DbGljaywgb25LZXl1cCB9XG4gICAgICApXG5cbiAgICAgIHJldHVybiBoRGlyKFxuICAgICAgICAnZGl2JyxcbiAgICAgICAgZGF0YSxcbiAgICAgICAgZ2V0Q29udGVudCgpLFxuICAgICAgICAncmlwcGxlJyxcbiAgICAgICAgcHJvcHMucmlwcGxlICE9PSBmYWxzZSAmJiBwcm9wcy5kaXNhYmxlICE9PSB0cnVlLFxuICAgICAgICAoKSA9PiBbIFsgUmlwcGxlLCBwcm9wcy5yaXBwbGUgXSBdXG4gICAgICApXG4gICAgfVxuICB9XG59KVxuIiwiaW1wb3J0IHsgcmVmLCB3YXRjaCwgb25Nb3VudGVkLCBvbkJlZm9yZVVubW91bnQsIG5leHRUaWNrLCBnZXRDdXJyZW50SW5zdGFuY2UgfSBmcm9tICd2dWUnXG5cbmltcG9ydCB7IGNsZWFyU2VsZWN0aW9uIH0gZnJvbSAnLi4vLi4vdXRpbHMvcHJpdmF0ZS9zZWxlY3Rpb24uanMnXG5pbXBvcnQgeyBhZGRFdnQsIGNsZWFuRXZ0LCBwcmV2ZW50IH0gZnJvbSAnLi4vLi4vdXRpbHMvZXZlbnQuanMnXG5pbXBvcnQgeyBpc0tleUNvZGUgfSBmcm9tICcuLi8uLi91dGlscy9wcml2YXRlL2tleS1jb21wb3NpdGlvbi5qcydcblxuZXhwb3J0IGNvbnN0IHVzZUFuY2hvclByb3BzID0ge1xuICB0YXJnZXQ6IHtcbiAgICBkZWZhdWx0OiB0cnVlXG4gIH0sXG4gIG5vUGFyZW50RXZlbnQ6IEJvb2xlYW4sXG4gIGNvbnRleHRNZW51OiBCb29sZWFuXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uICh7XG4gIHNob3dpbmcsXG4gIGF2b2lkRW1pdCwgLy8gcmVxdWlyZWQgZm9yIFFQb3B1cFByb3h5ICh0cnVlKVxuICBjb25maWd1cmVBbmNob3JFbCAvLyBvcHRpb25hbFxufSkge1xuICBjb25zdCB7IHByb3BzLCBwcm94eSwgZW1pdCB9ID0gZ2V0Q3VycmVudEluc3RhbmNlKClcblxuICBjb25zdCBhbmNob3JFbCA9IHJlZihudWxsKVxuXG4gIGxldCB0b3VjaFRpbWVyID0gbnVsbFxuXG4gIGZ1bmN0aW9uIGNhblNob3cgKGV2dCkge1xuICAgIC8vIGFib3J0IHdpdGggbm8gcGFyZW50IGNvbmZpZ3VyZWQgb3Igb24gbXVsdGktdG91Y2hcbiAgICByZXR1cm4gYW5jaG9yRWwudmFsdWUgPT09IG51bGxcbiAgICAgID8gZmFsc2VcbiAgICAgIDogKGV2dCA9PT0gdm9pZCAwIHx8IGV2dC50b3VjaGVzID09PSB2b2lkIDAgfHwgZXZ0LnRvdWNoZXMubGVuZ3RoIDw9IDEpXG4gIH1cblxuICBjb25zdCBhbmNob3JFdmVudHMgPSB7fVxuXG4gIGlmIChjb25maWd1cmVBbmNob3JFbCA9PT0gdm9pZCAwKSB7XG4gICAgLy8gZGVmYXVsdCBjb25maWd1cmVBbmNob3JFbCBpcyBkZXNpZ25lZCBmb3JcbiAgICAvLyBRTWVudSAmIFFQb3B1cFByb3h5ICh3aGljaCBpcyB3aHkgaXQncyBoYW5kbGVkIGhlcmUpXG5cbiAgICBPYmplY3QuYXNzaWduKGFuY2hvckV2ZW50cywge1xuICAgICAgaGlkZSAoZXZ0KSB7XG4gICAgICAgIHByb3h5LmhpZGUoZXZ0KVxuICAgICAgfSxcblxuICAgICAgdG9nZ2xlIChldnQpIHtcbiAgICAgICAgcHJveHkudG9nZ2xlKGV2dClcbiAgICAgICAgZXZ0LnFBbmNob3JIYW5kbGVkID0gdHJ1ZVxuICAgICAgfSxcblxuICAgICAgdG9nZ2xlS2V5IChldnQpIHtcbiAgICAgICAgaXNLZXlDb2RlKGV2dCwgMTMpID09PSB0cnVlICYmIGFuY2hvckV2ZW50cy50b2dnbGUoZXZ0KVxuICAgICAgfSxcblxuICAgICAgY29udGV4dENsaWNrIChldnQpIHtcbiAgICAgICAgcHJveHkuaGlkZShldnQpXG4gICAgICAgIHByZXZlbnQoZXZ0KVxuICAgICAgICBuZXh0VGljaygoKSA9PiB7XG4gICAgICAgICAgcHJveHkuc2hvdyhldnQpXG4gICAgICAgICAgZXZ0LnFBbmNob3JIYW5kbGVkID0gdHJ1ZVxuICAgICAgICB9KVxuICAgICAgfSxcblxuICAgICAgcHJldmVudCxcblxuICAgICAgbW9iaWxlVG91Y2ggKGV2dCkge1xuICAgICAgICBhbmNob3JFdmVudHMubW9iaWxlQ2xlYW51cChldnQpXG5cbiAgICAgICAgaWYgKGNhblNob3coZXZ0KSAhPT0gdHJ1ZSkge1xuICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG5cbiAgICAgICAgcHJveHkuaGlkZShldnQpXG4gICAgICAgIGFuY2hvckVsLnZhbHVlLmNsYXNzTGlzdC5hZGQoJ25vbi1zZWxlY3RhYmxlJylcblxuICAgICAgICBjb25zdCB0YXJnZXQgPSBldnQudGFyZ2V0XG4gICAgICAgIGFkZEV2dChhbmNob3JFdmVudHMsICdhbmNob3InLCBbXG4gICAgICAgICAgWyB0YXJnZXQsICd0b3VjaG1vdmUnLCAnbW9iaWxlQ2xlYW51cCcsICdwYXNzaXZlJyBdLFxuICAgICAgICAgIFsgdGFyZ2V0LCAndG91Y2hlbmQnLCAnbW9iaWxlQ2xlYW51cCcsICdwYXNzaXZlJyBdLFxuICAgICAgICAgIFsgdGFyZ2V0LCAndG91Y2hjYW5jZWwnLCAnbW9iaWxlQ2xlYW51cCcsICdwYXNzaXZlJyBdLFxuICAgICAgICAgIFsgYW5jaG9yRWwudmFsdWUsICdjb250ZXh0bWVudScsICdwcmV2ZW50JywgJ25vdFBhc3NpdmUnIF1cbiAgICAgICAgXSlcblxuICAgICAgICB0b3VjaFRpbWVyID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgdG91Y2hUaW1lciA9IG51bGxcbiAgICAgICAgICBwcm94eS5zaG93KGV2dClcbiAgICAgICAgICBldnQucUFuY2hvckhhbmRsZWQgPSB0cnVlXG4gICAgICAgIH0sIDMwMClcbiAgICAgIH0sXG5cbiAgICAgIG1vYmlsZUNsZWFudXAgKGV2dCkge1xuICAgICAgICBhbmNob3JFbC52YWx1ZS5jbGFzc0xpc3QucmVtb3ZlKCdub24tc2VsZWN0YWJsZScpXG5cbiAgICAgICAgaWYgKHRvdWNoVGltZXIgIT09IG51bGwpIHtcbiAgICAgICAgICBjbGVhclRpbWVvdXQodG91Y2hUaW1lcilcbiAgICAgICAgICB0b3VjaFRpbWVyID0gbnVsbFxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHNob3dpbmcudmFsdWUgPT09IHRydWUgJiYgZXZ0ICE9PSB2b2lkIDApIHtcbiAgICAgICAgICBjbGVhclNlbGVjdGlvbigpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KVxuXG4gICAgY29uZmlndXJlQW5jaG9yRWwgPSBmdW5jdGlvbiAoY29udGV4dCA9IHByb3BzLmNvbnRleHRNZW51KSB7XG4gICAgICBpZiAocHJvcHMubm9QYXJlbnRFdmVudCA9PT0gdHJ1ZSB8fCBhbmNob3JFbC52YWx1ZSA9PT0gbnVsbCkgcmV0dXJuXG5cbiAgICAgIGxldCBldnRzXG5cbiAgICAgIGlmIChjb250ZXh0ID09PSB0cnVlKSB7XG4gICAgICAgIGlmIChwcm94eS4kcS5wbGF0Zm9ybS5pcy5tb2JpbGUgPT09IHRydWUpIHtcbiAgICAgICAgICBldnRzID0gW1xuICAgICAgICAgICAgWyBhbmNob3JFbC52YWx1ZSwgJ3RvdWNoc3RhcnQnLCAnbW9iaWxlVG91Y2gnLCAncGFzc2l2ZScgXVxuICAgICAgICAgIF1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICBldnRzID0gW1xuICAgICAgICAgICAgWyBhbmNob3JFbC52YWx1ZSwgJ21vdXNlZG93bicsICdoaWRlJywgJ3Bhc3NpdmUnIF0sXG4gICAgICAgICAgICBbIGFuY2hvckVsLnZhbHVlLCAnY29udGV4dG1lbnUnLCAnY29udGV4dENsaWNrJywgJ25vdFBhc3NpdmUnIF1cbiAgICAgICAgICBdXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICBldnRzID0gW1xuICAgICAgICAgIFsgYW5jaG9yRWwudmFsdWUsICdjbGljaycsICd0b2dnbGUnLCAncGFzc2l2ZScgXSxcbiAgICAgICAgICBbIGFuY2hvckVsLnZhbHVlLCAna2V5dXAnLCAndG9nZ2xlS2V5JywgJ3Bhc3NpdmUnIF1cbiAgICAgICAgXVxuICAgICAgfVxuXG4gICAgICBhZGRFdnQoYW5jaG9yRXZlbnRzLCAnYW5jaG9yJywgZXZ0cylcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiB1bmNvbmZpZ3VyZUFuY2hvckVsICgpIHtcbiAgICBjbGVhbkV2dChhbmNob3JFdmVudHMsICdhbmNob3InKVxuICB9XG5cbiAgZnVuY3Rpb24gc2V0QW5jaG9yRWwgKGVsKSB7XG4gICAgYW5jaG9yRWwudmFsdWUgPSBlbFxuICAgIHdoaWxlIChhbmNob3JFbC52YWx1ZS5jbGFzc0xpc3QuY29udGFpbnMoJ3EtYW5jaG9yLS1za2lwJykpIHtcbiAgICAgIGFuY2hvckVsLnZhbHVlID0gYW5jaG9yRWwudmFsdWUucGFyZW50Tm9kZVxuICAgIH1cbiAgICBjb25maWd1cmVBbmNob3JFbCgpXG4gIH1cblxuICBmdW5jdGlvbiBwaWNrQW5jaG9yRWwgKCkge1xuICAgIGlmIChwcm9wcy50YXJnZXQgPT09IGZhbHNlIHx8IHByb3BzLnRhcmdldCA9PT0gJycgfHwgcHJveHkuJGVsLnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICAgIGFuY2hvckVsLnZhbHVlID0gbnVsbFxuICAgIH1cbiAgICBlbHNlIGlmIChwcm9wcy50YXJnZXQgPT09IHRydWUpIHtcbiAgICAgIHNldEFuY2hvckVsKHByb3h5LiRlbC5wYXJlbnROb2RlKVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIGxldCBlbCA9IHByb3BzLnRhcmdldFxuXG4gICAgICBpZiAodHlwZW9mIHByb3BzLnRhcmdldCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBlbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IocHJvcHMudGFyZ2V0KVxuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChlcnIpIHtcbiAgICAgICAgICBlbCA9IHZvaWQgMFxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChlbCAhPT0gdm9pZCAwICYmIGVsICE9PSBudWxsKSB7XG4gICAgICAgIGFuY2hvckVsLnZhbHVlID0gZWwuJGVsIHx8IGVsXG4gICAgICAgIGNvbmZpZ3VyZUFuY2hvckVsKClcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICBhbmNob3JFbC52YWx1ZSA9IG51bGxcbiAgICAgICAgY29uc29sZS5lcnJvcihgQW5jaG9yOiB0YXJnZXQgXCIkeyBwcm9wcy50YXJnZXQgfVwiIG5vdCBmb3VuZGApXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgd2F0Y2goKCkgPT4gcHJvcHMuY29udGV4dE1lbnUsIHZhbCA9PiB7XG4gICAgaWYgKGFuY2hvckVsLnZhbHVlICE9PSBudWxsKSB7XG4gICAgICB1bmNvbmZpZ3VyZUFuY2hvckVsKClcbiAgICAgIGNvbmZpZ3VyZUFuY2hvckVsKHZhbClcbiAgICB9XG4gIH0pXG5cbiAgd2F0Y2goKCkgPT4gcHJvcHMudGFyZ2V0LCAoKSA9PiB7XG4gICAgaWYgKGFuY2hvckVsLnZhbHVlICE9PSBudWxsKSB7XG4gICAgICB1bmNvbmZpZ3VyZUFuY2hvckVsKClcbiAgICB9XG5cbiAgICBwaWNrQW5jaG9yRWwoKVxuICB9KVxuXG4gIHdhdGNoKCgpID0+IHByb3BzLm5vUGFyZW50RXZlbnQsIHZhbCA9PiB7XG4gICAgaWYgKGFuY2hvckVsLnZhbHVlICE9PSBudWxsKSB7XG4gICAgICBpZiAodmFsID09PSB0cnVlKSB7XG4gICAgICAgIHVuY29uZmlndXJlQW5jaG9yRWwoKVxuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIGNvbmZpZ3VyZUFuY2hvckVsKClcbiAgICAgIH1cbiAgICB9XG4gIH0pXG5cbiAgb25Nb3VudGVkKCgpID0+IHtcbiAgICBwaWNrQW5jaG9yRWwoKVxuXG4gICAgaWYgKGF2b2lkRW1pdCAhPT0gdHJ1ZSAmJiBwcm9wcy5tb2RlbFZhbHVlID09PSB0cnVlICYmIGFuY2hvckVsLnZhbHVlID09PSBudWxsKSB7XG4gICAgICBlbWl0KCd1cGRhdGU6bW9kZWxWYWx1ZScsIGZhbHNlKVxuICAgIH1cbiAgfSlcblxuICBvbkJlZm9yZVVubW91bnQoKCkgPT4ge1xuICAgIHRvdWNoVGltZXIgIT09IG51bGwgJiYgY2xlYXJUaW1lb3V0KHRvdWNoVGltZXIpXG4gICAgdW5jb25maWd1cmVBbmNob3JFbCgpXG4gIH0pXG5cbiAgcmV0dXJuIHtcbiAgICBhbmNob3JFbCxcbiAgICBjYW5TaG93LFxuICAgIGFuY2hvckV2ZW50c1xuICB9XG59XG4iLCJpbXBvcnQgeyByZWYsIHdhdGNoLCBvbkJlZm9yZVVubW91bnQgfSBmcm9tICd2dWUnXG5cbmltcG9ydCB7IGxpc3Rlbk9wdHMgfSBmcm9tICcuLi8uLi91dGlscy9ldmVudC5qcydcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKFxuICBwcm9wcyxcbiAgY29uZmlndXJlU2Nyb2xsVGFyZ2V0XG4pIHtcbiAgY29uc3QgbG9jYWxTY3JvbGxUYXJnZXQgPSByZWYobnVsbClcbiAgbGV0IHNjcm9sbEZuXG5cbiAgZnVuY3Rpb24gY2hhbmdlU2Nyb2xsRXZlbnQgKHNjcm9sbFRhcmdldCwgZm4pIHtcbiAgICBjb25zdCBmblByb3AgPSBgJHsgZm4gIT09IHZvaWQgMCA/ICdhZGQnIDogJ3JlbW92ZScgfUV2ZW50TGlzdGVuZXJgXG4gICAgY29uc3QgZm5IYW5kbGVyID0gZm4gIT09IHZvaWQgMCA/IGZuIDogc2Nyb2xsRm5cblxuICAgIGlmIChzY3JvbGxUYXJnZXQgIT09IHdpbmRvdykge1xuICAgICAgc2Nyb2xsVGFyZ2V0WyBmblByb3AgXSgnc2Nyb2xsJywgZm5IYW5kbGVyLCBsaXN0ZW5PcHRzLnBhc3NpdmUpXG4gICAgfVxuXG4gICAgd2luZG93WyBmblByb3AgXSgnc2Nyb2xsJywgZm5IYW5kbGVyLCBsaXN0ZW5PcHRzLnBhc3NpdmUpXG5cbiAgICBzY3JvbGxGbiA9IGZuXG4gIH1cblxuICBmdW5jdGlvbiB1bmNvbmZpZ3VyZVNjcm9sbFRhcmdldCAoKSB7XG4gICAgaWYgKGxvY2FsU2Nyb2xsVGFyZ2V0LnZhbHVlICE9PSBudWxsKSB7XG4gICAgICBjaGFuZ2VTY3JvbGxFdmVudChsb2NhbFNjcm9sbFRhcmdldC52YWx1ZSlcbiAgICAgIGxvY2FsU2Nyb2xsVGFyZ2V0LnZhbHVlID0gbnVsbFxuICAgIH1cbiAgfVxuXG4gIGNvbnN0IG5vUGFyZW50RXZlbnRXYXRjaGVyID0gd2F0Y2goKCkgPT4gcHJvcHMubm9QYXJlbnRFdmVudCwgKCkgPT4ge1xuICAgIGlmIChsb2NhbFNjcm9sbFRhcmdldC52YWx1ZSAhPT0gbnVsbCkge1xuICAgICAgdW5jb25maWd1cmVTY3JvbGxUYXJnZXQoKVxuICAgICAgY29uZmlndXJlU2Nyb2xsVGFyZ2V0KClcbiAgICB9XG4gIH0pXG5cbiAgb25CZWZvcmVVbm1vdW50KG5vUGFyZW50RXZlbnRXYXRjaGVyKVxuXG4gIHJldHVybiB7XG4gICAgbG9jYWxTY3JvbGxUYXJnZXQsXG4gICAgdW5jb25maWd1cmVTY3JvbGxUYXJnZXQsXG4gICAgY2hhbmdlU2Nyb2xsRXZlbnRcbiAgfVxufVxuIiwiaW1wb3J0IHsgZ2xvYmFsQ29uZmlnIH0gZnJvbSAnLi9nbG9iYWwtY29uZmlnLmpzJ1xuXG5jb25zdCBub2Rlc0xpc3QgPSBbXVxuY29uc3QgcG9ydGFsVHlwZUxpc3QgPSBbXVxuXG5sZXQgcG9ydGFsSW5kZXggPSAxXG5sZXQgdGFyZ2V0ID0gX19RVUFTQVJfU1NSX1NFUlZFUl9fXG4gID8gdm9pZCAwXG4gIDogZG9jdW1lbnQuYm9keVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlR2xvYmFsTm9kZSAoaWQsIHBvcnRhbFR5cGUpIHtcbiAgY29uc3QgZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuXG4gIGVsLmlkID0gcG9ydGFsVHlwZSAhPT0gdm9pZCAwXG4gICAgPyBgcS1wb3J0YWwtLSR7IHBvcnRhbFR5cGUgfS0tJHsgcG9ydGFsSW5kZXgrKyB9YFxuICAgIDogaWRcblxuICBpZiAoZ2xvYmFsQ29uZmlnLmdsb2JhbE5vZGVzICE9PSB2b2lkIDApIHtcbiAgICBjb25zdCBjbHMgPSBnbG9iYWxDb25maWcuZ2xvYmFsTm9kZXMuY2xhc3NcbiAgICBpZiAoY2xzICE9PSB2b2lkIDApIHtcbiAgICAgIGVsLmNsYXNzTmFtZSA9IGNsc1xuICAgIH1cbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChlbClcbiAgbm9kZXNMaXN0LnB1c2goZWwpXG4gIHBvcnRhbFR5cGVMaXN0LnB1c2gocG9ydGFsVHlwZSlcblxuICByZXR1cm4gZWxcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZUdsb2JhbE5vZGUgKGVsKSB7XG4gIGNvbnN0IG5vZGVJbmRleCA9IG5vZGVzTGlzdC5pbmRleE9mKGVsKVxuXG4gIG5vZGVzTGlzdC5zcGxpY2Uobm9kZUluZGV4LCAxKVxuICBwb3J0YWxUeXBlTGlzdC5zcGxpY2Uobm9kZUluZGV4LCAxKVxuXG4gIGVsLnJlbW92ZSgpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjaGFuZ2VHbG9iYWxOb2Rlc1RhcmdldCAobmV3VGFyZ2V0KSB7XG4gIGlmIChuZXdUYXJnZXQgPT09IHRhcmdldCkge1xuICAgIHJldHVyblxuICB9XG5cbiAgdGFyZ2V0ID0gbmV3VGFyZ2V0XG5cbiAgaWYgKFxuICAgIHRhcmdldCA9PT0gZG9jdW1lbnQuYm9keVxuICAgIC8vIG9yIHdlIGhhdmUgbGVzcyB0aGFuIDIgZGlhbG9nczpcbiAgICB8fCBwb3J0YWxUeXBlTGlzdC5yZWR1Y2UoKGFjYywgdHlwZSkgPT4gKHR5cGUgPT09ICdkaWFsb2cnID8gYWNjICsgMSA6IGFjYyksIDApIDwgMlxuICApIHtcbiAgICBub2Rlc0xpc3QuZm9yRWFjaChub2RlID0+IHtcbiAgICAgIGlmIChub2RlLmNvbnRhaW5zKHRhcmdldCkgPT09IGZhbHNlKSB7XG4gICAgICAgIHRhcmdldC5hcHBlbmRDaGlsZChub2RlKVxuICAgICAgfVxuICAgIH0pXG5cbiAgICByZXR1cm5cbiAgfVxuXG4gIGNvbnN0IGxhc3REaWFsb2dJbmRleCA9IHBvcnRhbFR5cGVMaXN0Lmxhc3RJbmRleE9mKCdkaWFsb2cnKVxuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbm9kZXNMaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgY29uc3QgZWwgPSBub2Rlc0xpc3RbIGkgXVxuXG4gICAgaWYgKFxuICAgICAgKGkgPT09IGxhc3REaWFsb2dJbmRleCB8fCBwb3J0YWxUeXBlTGlzdFsgaSBdICE9PSAnZGlhbG9nJylcbiAgICAgICYmIGVsLmNvbnRhaW5zKHRhcmdldCkgPT09IGZhbHNlXG4gICAgKSB7XG4gICAgICB0YXJnZXQuYXBwZW5kQ2hpbGQoZWwpXG4gICAgfVxuICB9XG59XG4iLCJpbXBvcnQgeyBnZXRQYXJlbnRQcm94eSB9IGZyb20gJy4vdm0uanMnXG5cbmV4cG9ydCBjb25zdCBwb3J0YWxQcm94eUxpc3QgPSBbXVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0UG9ydGFsUHJveHkgKGVsKSB7XG4gIHJldHVybiBwb3J0YWxQcm94eUxpc3QuZmluZChwcm94eSA9PlxuICAgIHByb3h5LmNvbnRlbnRFbCAhPT0gbnVsbFxuICAgICYmIHByb3h5LmNvbnRlbnRFbC5jb250YWlucyhlbClcbiAgKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gY2xvc2VQb3J0YWxNZW51cyAocHJveHksIGV2dCkge1xuICBkbyB7XG4gICAgaWYgKHByb3h5LiRvcHRpb25zLm5hbWUgPT09ICdRTWVudScpIHtcbiAgICAgIHByb3h5LmhpZGUoZXZ0KVxuXG4gICAgICAvLyBpcyB0aGlzIGEgcG9pbnQgb2Ygc2VwYXJhdGlvbj9cbiAgICAgIGlmIChwcm94eS4kcHJvcHMuc2VwYXJhdGVDbG9zZVBvcHVwID09PSB0cnVlKSB7XG4gICAgICAgIHJldHVybiBnZXRQYXJlbnRQcm94eShwcm94eSlcbiAgICAgIH1cbiAgICB9XG4gICAgZWxzZSBpZiAocHJveHkuX19xUG9ydGFsID09PSB0cnVlKSB7XG4gICAgICAvLyB0cmVhdCBpdCBhcyBwb2ludCBvZiBzZXBhcmF0aW9uIGlmIHBhcmVudCBpcyBRUG9wdXBQcm94eVxuICAgICAgLy8gKHNvIG1vYmlsZSBtYXRjaGVzIGRlc2t0b3AgYmVoYXZpb3IpXG4gICAgICAvLyBhbmQgaGlkZSBpdCB0b29cbiAgICAgIGNvbnN0IHBhcmVudCA9IGdldFBhcmVudFByb3h5KHByb3h5KVxuXG4gICAgICBpZiAocGFyZW50ICE9PSB2b2lkIDAgJiYgcGFyZW50LiRvcHRpb25zLm5hbWUgPT09ICdRUG9wdXBQcm94eScpIHtcbiAgICAgICAgcHJveHkuaGlkZShldnQpXG4gICAgICAgIHJldHVybiBwYXJlbnRcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICByZXR1cm4gcHJveHlcbiAgICAgIH1cbiAgICB9XG5cbiAgICBwcm94eSA9IGdldFBhcmVudFByb3h5KHByb3h5KVxuICB9IHdoaWxlIChwcm94eSAhPT0gdm9pZCAwICYmIHByb3h5ICE9PSBudWxsKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gY2xvc2VQb3J0YWxzIChwcm94eSwgZXZ0LCBkZXB0aCkge1xuICB3aGlsZSAoZGVwdGggIT09IDAgJiYgcHJveHkgIT09IHZvaWQgMCAmJiBwcm94eSAhPT0gbnVsbCkge1xuICAgIGlmIChwcm94eS5fX3FQb3J0YWwgPT09IHRydWUpIHtcbiAgICAgIGRlcHRoLS1cblxuICAgICAgaWYgKHByb3h5LiRvcHRpb25zLm5hbWUgPT09ICdRTWVudScpIHtcbiAgICAgICAgcHJveHkgPSBjbG9zZVBvcnRhbE1lbnVzKHByb3h5LCBldnQpXG4gICAgICAgIGNvbnRpbnVlXG4gICAgICB9XG5cbiAgICAgIHByb3h5LmhpZGUoZXZ0KVxuICAgIH1cblxuICAgIHByb3h5ID0gZ2V0UGFyZW50UHJveHkocHJveHkpXG4gIH1cbn1cbiIsImltcG9ydCB7IGgsIHJlZiwgb25Vbm1vdW50ZWQsIFRlbGVwb3J0IH0gZnJvbSAndnVlJ1xuXG5pbXBvcnQgeyBub29wIH0gZnJvbSAnLi4vLi4vdXRpbHMvZXZlbnQuanMnXG5pbXBvcnQgeyBhZGRGb2N1c1dhaXRGbGFnLCByZW1vdmVGb2N1c1dhaXRGbGFnIH0gZnJvbSAnLi4vLi4vdXRpbHMvcHJpdmF0ZS9mb2N1cy1tYW5hZ2VyLmpzJ1xuaW1wb3J0IHsgY3JlYXRlR2xvYmFsTm9kZSwgcmVtb3ZlR2xvYmFsTm9kZSB9IGZyb20gJy4uLy4uL3V0aWxzL3ByaXZhdGUvZ2xvYmFsLW5vZGVzLmpzJ1xuaW1wb3J0IHsgcG9ydGFsUHJveHlMaXN0IH0gZnJvbSAnLi4vLi4vdXRpbHMvcHJpdmF0ZS9wb3J0YWwuanMnXG5pbXBvcnQgeyBpbmplY3RQcm9wIH0gZnJvbSAnLi4vLi4vdXRpbHMvcHJpdmF0ZS9pbmplY3Qtb2JqLXByb3AuanMnXG5cbmZ1bmN0aW9uIGlzT25HbG9iYWxEaWFsb2cgKHZtKSB7XG4gIHZtID0gdm0ucGFyZW50XG5cbiAgd2hpbGUgKHZtICE9PSB2b2lkIDAgJiYgdm0gIT09IG51bGwpIHtcbiAgICBpZiAodm0udHlwZS5uYW1lID09PSAnUUdsb2JhbERpYWxvZycpIHtcbiAgICAgIHJldHVybiB0cnVlXG4gICAgfVxuICAgIGlmICh2bS50eXBlLm5hbWUgPT09ICdRRGlhbG9nJyB8fCB2bS50eXBlLm5hbWUgPT09ICdRTWVudScpIHtcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cblxuICAgIHZtID0gdm0ucGFyZW50XG4gIH1cblxuICByZXR1cm4gZmFsc2Vcbn1cblxuLy8gV2FybmluZyFcbi8vIFlvdSBNVVNUIHNwZWNpZnkgXCJpbmhlcml0QXR0cnM6IGZhbHNlXCIgaW4geW91ciBjb21wb25lbnRcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKHZtLCBpbm5lclJlZiwgcmVuZGVyUG9ydGFsQ29udGVudCwgdHlwZSkge1xuICAvLyBzaG93aW5nLCBpbmNsdWRpbmcgd2hpbGUgaW4gc2hvdy9oaWRlIHRyYW5zaXRpb25cbiAgY29uc3QgcG9ydGFsSXNBY3RpdmUgPSByZWYoZmFsc2UpXG5cbiAgLy8gc2hvd2luZyAmIG5vdCBpbiBhbnkgc2hvdy9oaWRlIHRyYW5zaXRpb25cbiAgY29uc3QgcG9ydGFsSXNBY2Nlc3NpYmxlID0gcmVmKGZhbHNlKVxuXG4gIGlmIChfX1FVQVNBUl9TU1JfU0VSVkVSX18pIHtcbiAgICByZXR1cm4ge1xuICAgICAgcG9ydGFsSXNBY3RpdmUsXG4gICAgICBwb3J0YWxJc0FjY2Vzc2libGUsXG5cbiAgICAgIHNob3dQb3J0YWw6IG5vb3AsXG4gICAgICBoaWRlUG9ydGFsOiBub29wLFxuICAgICAgcmVuZGVyUG9ydGFsOiBub29wXG4gICAgfVxuICB9XG5cbiAgbGV0IHBvcnRhbEVsID0gbnVsbFxuICBjb25zdCBmb2N1c09iaiA9IHt9XG4gIGNvbnN0IG9uR2xvYmFsRGlhbG9nID0gdHlwZSA9PT0gJ2RpYWxvZycgJiYgaXNPbkdsb2JhbERpYWxvZyh2bSlcblxuICBmdW5jdGlvbiBzaG93UG9ydGFsIChpc1JlYWR5KSB7XG4gICAgaWYgKGlzUmVhZHkgPT09IHRydWUpIHtcbiAgICAgIHJlbW92ZUZvY3VzV2FpdEZsYWcoZm9jdXNPYmopXG4gICAgICBwb3J0YWxJc0FjY2Vzc2libGUudmFsdWUgPSB0cnVlXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBwb3J0YWxJc0FjY2Vzc2libGUudmFsdWUgPSBmYWxzZVxuXG4gICAgaWYgKHBvcnRhbElzQWN0aXZlLnZhbHVlID09PSBmYWxzZSkge1xuICAgICAgaWYgKG9uR2xvYmFsRGlhbG9nID09PSBmYWxzZSAmJiBwb3J0YWxFbCA9PT0gbnVsbCkge1xuICAgICAgICBwb3J0YWxFbCA9IGNyZWF0ZUdsb2JhbE5vZGUoZmFsc2UsIHR5cGUpXG4gICAgICB9XG5cbiAgICAgIHBvcnRhbElzQWN0aXZlLnZhbHVlID0gdHJ1ZVxuXG4gICAgICAvLyByZWdpc3RlciBwb3J0YWxcbiAgICAgIHBvcnRhbFByb3h5TGlzdC5wdXNoKHZtLnByb3h5KVxuXG4gICAgICBhZGRGb2N1c1dhaXRGbGFnKGZvY3VzT2JqKVxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGhpZGVQb3J0YWwgKGlzUmVhZHkpIHtcbiAgICBwb3J0YWxJc0FjY2Vzc2libGUudmFsdWUgPSBmYWxzZVxuXG4gICAgaWYgKGlzUmVhZHkgIT09IHRydWUpIHJldHVyblxuXG4gICAgcmVtb3ZlRm9jdXNXYWl0RmxhZyhmb2N1c09iailcbiAgICBwb3J0YWxJc0FjdGl2ZS52YWx1ZSA9IGZhbHNlXG5cbiAgICAvLyB1bnJlZ2lzdGVyIHBvcnRhbFxuICAgIGNvbnN0IGluZGV4ID0gcG9ydGFsUHJveHlMaXN0LmluZGV4T2Yodm0ucHJveHkpXG4gICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgcG9ydGFsUHJveHlMaXN0LnNwbGljZShpbmRleCwgMSlcbiAgICB9XG5cbiAgICBpZiAocG9ydGFsRWwgIT09IG51bGwpIHtcbiAgICAgIHJlbW92ZUdsb2JhbE5vZGUocG9ydGFsRWwpXG4gICAgICBwb3J0YWxFbCA9IG51bGxcbiAgICB9XG4gIH1cblxuICBvblVubW91bnRlZCgoKSA9PiB7IGhpZGVQb3J0YWwodHJ1ZSkgfSlcblxuICAvLyBuZWVkZWQgZm9yIHBvcnRhbCB2bSBkZXRlY3Rpb25cbiAgdm0ucHJveHkuX19xUG9ydGFsID0gdHJ1ZVxuXG4gIC8vIHB1YmxpYyB3YXkgb2YgYWNjZXNzaW5nIHRoZSByZW5kZXJlZCBjb250ZW50XG4gIGluamVjdFByb3Aodm0ucHJveHksICdjb250ZW50RWwnLCAoKSA9PiBpbm5lclJlZi52YWx1ZSlcblxuICByZXR1cm4ge1xuICAgIHNob3dQb3J0YWwsXG4gICAgaGlkZVBvcnRhbCxcblxuICAgIHBvcnRhbElzQWN0aXZlLFxuICAgIHBvcnRhbElzQWNjZXNzaWJsZSxcblxuICAgIHJlbmRlclBvcnRhbDogKCkgPT4gKFxuICAgICAgb25HbG9iYWxEaWFsb2cgPT09IHRydWVcbiAgICAgICAgPyByZW5kZXJQb3J0YWxDb250ZW50KClcbiAgICAgICAgOiAoXG4gICAgICAgICAgICBwb3J0YWxJc0FjdGl2ZS52YWx1ZSA9PT0gdHJ1ZVxuICAgICAgICAgICAgICA/IFsgaChUZWxlcG9ydCwgeyB0bzogcG9ydGFsRWwgfSwgcmVuZGVyUG9ydGFsQ29udGVudCgpKSBdXG4gICAgICAgICAgICAgIDogdm9pZCAwXG4gICAgICAgICAgKVxuICAgIClcbiAgfVxufVxuIiwiaW1wb3J0IHsgY29tcHV0ZWQgfSBmcm9tICd2dWUnXG5cbmV4cG9ydCBjb25zdCB1c2VUcmFuc2l0aW9uUHJvcHMgPSB7XG4gIHRyYW5zaXRpb25TaG93OiB7XG4gICAgdHlwZTogU3RyaW5nLFxuICAgIGRlZmF1bHQ6ICdmYWRlJ1xuICB9LFxuXG4gIHRyYW5zaXRpb25IaWRlOiB7XG4gICAgdHlwZTogU3RyaW5nLFxuICAgIGRlZmF1bHQ6ICdmYWRlJ1xuICB9LFxuXG4gIHRyYW5zaXRpb25EdXJhdGlvbjoge1xuICAgIHR5cGU6IFsgU3RyaW5nLCBOdW1iZXIgXSxcbiAgICBkZWZhdWx0OiAzMDBcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAocHJvcHMsIGRlZmF1bHRTaG93Rm4gPSAoKSA9PiB7fSwgZGVmYXVsdEhpZGVGbiA9ICgpID0+IHt9KSB7XG4gIHJldHVybiB7XG4gICAgdHJhbnNpdGlvblByb3BzOiBjb21wdXRlZCgoKSA9PiB7XG4gICAgICBjb25zdCBzaG93ID0gYHEtdHJhbnNpdGlvbi0tJHsgcHJvcHMudHJhbnNpdGlvblNob3cgfHwgZGVmYXVsdFNob3dGbigpIH1gXG4gICAgICBjb25zdCBoaWRlID0gYHEtdHJhbnNpdGlvbi0tJHsgcHJvcHMudHJhbnNpdGlvbkhpZGUgfHwgZGVmYXVsdEhpZGVGbigpIH1gXG5cbiAgICAgIHJldHVybiB7XG4gICAgICAgIGFwcGVhcjogdHJ1ZSxcblxuICAgICAgICBlbnRlckZyb21DbGFzczogYCR7IHNob3cgfS1lbnRlci1mcm9tYCxcbiAgICAgICAgZW50ZXJBY3RpdmVDbGFzczogYCR7IHNob3cgfS1lbnRlci1hY3RpdmVgLFxuICAgICAgICBlbnRlclRvQ2xhc3M6IGAkeyBzaG93IH0tZW50ZXItdG9gLFxuXG4gICAgICAgIGxlYXZlRnJvbUNsYXNzOiBgJHsgaGlkZSB9LWxlYXZlLWZyb21gLFxuICAgICAgICBsZWF2ZUFjdGl2ZUNsYXNzOiBgJHsgaGlkZSB9LWxlYXZlLWFjdGl2ZWAsXG4gICAgICAgIGxlYXZlVG9DbGFzczogYCR7IGhpZGUgfS1sZWF2ZS10b2BcbiAgICAgIH1cbiAgICB9KSxcblxuICAgIHRyYW5zaXRpb25TdHlsZTogY29tcHV0ZWQoKCkgPT4gYC0tcS10cmFuc2l0aW9uLWR1cmF0aW9uOiAkeyBwcm9wcy50cmFuc2l0aW9uRHVyYXRpb24gfW1zYClcbiAgfVxufVxuIiwiaW1wb3J0IHsgbmV4dFRpY2ssIG9uRGVhY3RpdmF0ZWQsIG9uQmVmb3JlVW5tb3VudCwgZ2V0Q3VycmVudEluc3RhbmNlIH0gZnJvbSAndnVlJ1xuXG5pbXBvcnQgeyB2bUlzRGVzdHJveWVkIH0gZnJvbSAnLi4vdXRpbHMvcHJpdmF0ZS92bSdcblxuLypcbiAqIFVzYWdlOlxuICogICAgcmVnaXN0ZXJUaWNrKGZuKVxuICogICAgcmVtb3ZlVGljaygpXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKCkge1xuICBsZXQgdGlja0ZuXG4gIGNvbnN0IHZtID0gZ2V0Q3VycmVudEluc3RhbmNlKClcblxuICBmdW5jdGlvbiByZW1vdmVUaWNrICgpIHtcbiAgICB0aWNrRm4gPSB2b2lkIDBcbiAgfVxuXG4gIG9uRGVhY3RpdmF0ZWQocmVtb3ZlVGljaylcbiAgb25CZWZvcmVVbm1vdW50KHJlbW92ZVRpY2spXG5cbiAgcmV0dXJuIHtcbiAgICByZW1vdmVUaWNrLFxuXG4gICAgcmVnaXN0ZXJUaWNrIChmbikge1xuICAgICAgdGlja0ZuID0gZm5cblxuICAgICAgbmV4dFRpY2soKCkgPT4ge1xuICAgICAgICBpZiAodGlja0ZuID09PSBmbikge1xuICAgICAgICAgIC8vIHdlIGFsc28gY2hlY2sgaWYgVk0gaXMgZGVzdHJveWVkLCBzaW5jZSBpZiBpdFxuICAgICAgICAgIC8vIGdvdCB0byB0cmlnZ2VyIG9uZSBuZXh0VGljaygpIHdlIGNhbm5vdCBzdG9wIGl0XG4gICAgICAgICAgdm1Jc0Rlc3Ryb3llZCh2bSkgPT09IGZhbHNlICYmIHRpY2tGbigpXG4gICAgICAgICAgdGlja0ZuID0gdm9pZCAwXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfVxuICB9XG59XG4iLCJpbXBvcnQgeyBjbGllbnQgfSBmcm9tICcuLi8uLi9wbHVnaW5zL1BsYXRmb3JtLmpzJ1xuaW1wb3J0IHsgaXNLZXlDb2RlIH0gZnJvbSAnLi9rZXktY29tcG9zaXRpb24uanMnXG5cbmNvbnN0IGhhbmRsZXJzID0gW11cbmxldCBlc2NEb3duXG5cbmZ1bmN0aW9uIG9uS2V5ZG93biAoZXZ0KSB7XG4gIGVzY0Rvd24gPSBldnQua2V5Q29kZSA9PT0gMjdcbn1cblxuZnVuY3Rpb24gb25CbHVyICgpIHtcbiAgaWYgKGVzY0Rvd24gPT09IHRydWUpIHtcbiAgICBlc2NEb3duID0gZmFsc2VcbiAgfVxufVxuXG5mdW5jdGlvbiBvbktleXVwIChldnQpIHtcbiAgaWYgKGVzY0Rvd24gPT09IHRydWUpIHtcbiAgICBlc2NEb3duID0gZmFsc2VcblxuICAgIGlmIChpc0tleUNvZGUoZXZ0LCAyNykgPT09IHRydWUpIHtcbiAgICAgIGhhbmRsZXJzWyBoYW5kbGVycy5sZW5ndGggLSAxIF0oZXZ0KVxuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiB1cGRhdGUgKGFjdGlvbikge1xuICB3aW5kb3dbIGFjdGlvbiBdKCdrZXlkb3duJywgb25LZXlkb3duKVxuICB3aW5kb3dbIGFjdGlvbiBdKCdibHVyJywgb25CbHVyKVxuICB3aW5kb3dbIGFjdGlvbiBdKCdrZXl1cCcsIG9uS2V5dXApXG4gIGVzY0Rvd24gPSBmYWxzZVxufVxuXG5leHBvcnQgZnVuY3Rpb24gYWRkRXNjYXBlS2V5IChmbikge1xuICBpZiAoY2xpZW50LmlzLmRlc2t0b3AgPT09IHRydWUpIHtcbiAgICBoYW5kbGVycy5wdXNoKGZuKVxuXG4gICAgaWYgKGhhbmRsZXJzLmxlbmd0aCA9PT0gMSkge1xuICAgICAgdXBkYXRlKCdhZGRFdmVudExpc3RlbmVyJylcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZUVzY2FwZUtleSAoZm4pIHtcbiAgY29uc3QgaW5kZXggPSBoYW5kbGVycy5pbmRleE9mKGZuKVxuICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgaGFuZGxlcnMuc3BsaWNlKGluZGV4LCAxKVxuXG4gICAgaWYgKGhhbmRsZXJzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgdXBkYXRlKCdyZW1vdmVFdmVudExpc3RlbmVyJylcbiAgICB9XG4gIH1cbn1cbiIsImltcG9ydCB7IGNsaWVudCB9IGZyb20gJy4uLy4uL3BsdWdpbnMvUGxhdGZvcm0uanMnXG5cbmNvbnN0IGhhbmRsZXJzID0gW11cblxuZnVuY3Rpb24gdHJpZ2dlciAoZSkge1xuICBoYW5kbGVyc1sgaGFuZGxlcnMubGVuZ3RoIC0gMSBdKGUpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRGb2N1c291dCAoZm4pIHtcbiAgaWYgKGNsaWVudC5pcy5kZXNrdG9wID09PSB0cnVlKSB7XG4gICAgaGFuZGxlcnMucHVzaChmbilcblxuICAgIGlmIChoYW5kbGVycy5sZW5ndGggPT09IDEpIHtcbiAgICAgIGRvY3VtZW50LmJvZHkuYWRkRXZlbnRMaXN0ZW5lcignZm9jdXNpbicsIHRyaWdnZXIpXG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVGb2N1c291dCAoZm4pIHtcbiAgY29uc3QgaW5kZXggPSBoYW5kbGVycy5pbmRleE9mKGZuKVxuICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgaGFuZGxlcnMuc3BsaWNlKGluZGV4LCAxKVxuXG4gICAgaWYgKGhhbmRsZXJzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgZG9jdW1lbnQuYm9keS5yZW1vdmVFdmVudExpc3RlbmVyKCdmb2N1c2luJywgdHJpZ2dlcilcbiAgICB9XG4gIH1cbn1cbiIsImltcG9ydCB7IGxpc3Rlbk9wdHMgfSBmcm9tICcuLi9ldmVudC5qcydcbmltcG9ydCB7IHBvcnRhbFByb3h5TGlzdCB9IGZyb20gJy4uL3ByaXZhdGUvcG9ydGFsLmpzJ1xuXG5sZXQgdGltZXIgPSBudWxsXG5cbmNvbnN0XG4gIHsgbm90UGFzc2l2ZUNhcHR1cmUgfSA9IGxpc3Rlbk9wdHMsXG4gIHJlZ2lzdGVyZWRMaXN0ID0gW11cblxuZnVuY3Rpb24gZ2xvYmFsSGFuZGxlciAoZXZ0KSB7XG4gIGlmICh0aW1lciAhPT0gbnVsbCkge1xuICAgIGNsZWFyVGltZW91dCh0aW1lcilcbiAgICB0aW1lciA9IG51bGxcbiAgfVxuXG4gIGNvbnN0IHRhcmdldCA9IGV2dC50YXJnZXRcblxuICBpZiAoXG4gICAgdGFyZ2V0ID09PSB2b2lkIDBcbiAgICB8fCB0YXJnZXQubm9kZVR5cGUgPT09IDhcbiAgICB8fCB0YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCduby1wb2ludGVyLWV2ZW50cycpID09PSB0cnVlXG4gICkge1xuICAgIHJldHVyblxuICB9XG5cbiAgLy8gY2hlY2sgbGFzdCBwb3J0YWwgdm0gaWYgaXQnc1xuICAvLyBhIFFEaWFsb2cgYW5kIG5vdCBpbiBzZWFtbGVzcyBtb2RlXG4gIGxldCBwb3J0YWxJbmRleCA9IHBvcnRhbFByb3h5TGlzdC5sZW5ndGggLSAxXG5cbiAgd2hpbGUgKHBvcnRhbEluZGV4ID49IDApIHtcbiAgICBjb25zdCBwcm94eSA9IHBvcnRhbFByb3h5TGlzdFsgcG9ydGFsSW5kZXggXS4kXG5cbiAgICAvLyBza2lwIFFUb29sdGlwIHBvcnRhbHNcbiAgICBpZiAocHJveHkudHlwZS5uYW1lID09PSAnUVRvb2x0aXAnKSB7XG4gICAgICBwb3J0YWxJbmRleC0tXG4gICAgICBjb250aW51ZVxuICAgIH1cblxuICAgIGlmIChwcm94eS50eXBlLm5hbWUgIT09ICdRRGlhbG9nJykge1xuICAgICAgYnJlYWtcbiAgICB9XG5cbiAgICBpZiAocHJveHkucHJvcHMuc2VhbWxlc3MgIT09IHRydWUpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIHBvcnRhbEluZGV4LS1cbiAgfVxuXG4gIGZvciAobGV0IGkgPSByZWdpc3RlcmVkTGlzdC5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgIGNvbnN0IHN0YXRlID0gcmVnaXN0ZXJlZExpc3RbIGkgXVxuXG4gICAgaWYgKFxuICAgICAgKFxuICAgICAgICBzdGF0ZS5hbmNob3JFbC52YWx1ZSA9PT0gbnVsbFxuICAgICAgICB8fCBzdGF0ZS5hbmNob3JFbC52YWx1ZS5jb250YWlucyh0YXJnZXQpID09PSBmYWxzZVxuICAgICAgKVxuICAgICAgJiYgKFxuICAgICAgICB0YXJnZXQgPT09IGRvY3VtZW50LmJvZHlcbiAgICAgICAgfHwgKFxuICAgICAgICAgIHN0YXRlLmlubmVyUmVmLnZhbHVlICE9PSBudWxsXG4gICAgICAgICAgJiYgc3RhdGUuaW5uZXJSZWYudmFsdWUuY29udGFpbnModGFyZ2V0KSA9PT0gZmFsc2VcbiAgICAgICAgKVxuICAgICAgKVxuICAgICkge1xuICAgICAgLy8gbWFyayB0aGUgZXZlbnQgYXMgYmVpbmcgcHJvY2Vzc2VkIGJ5IGNsaWNrT3V0c2lkZVxuICAgICAgLy8gdXNlZCB0byBwcmV2ZW50IHJlZm9jdXMgYWZ0ZXIgbWVudSBjbG9zZVxuICAgICAgZXZ0LnFDbGlja091dHNpZGUgPSB0cnVlXG4gICAgICBzdGF0ZS5vbkNsaWNrT3V0c2lkZShldnQpXG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgcmV0dXJuXG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRDbGlja091dHNpZGUgKGNsaWNrT3V0c2lkZVByb3BzKSB7XG4gIHJlZ2lzdGVyZWRMaXN0LnB1c2goY2xpY2tPdXRzaWRlUHJvcHMpXG5cbiAgaWYgKHJlZ2lzdGVyZWRMaXN0Lmxlbmd0aCA9PT0gMSkge1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIGdsb2JhbEhhbmRsZXIsIG5vdFBhc3NpdmVDYXB0dXJlKVxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoc3RhcnQnLCBnbG9iYWxIYW5kbGVyLCBub3RQYXNzaXZlQ2FwdHVyZSlcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlQ2xpY2tPdXRzaWRlIChjbGlja091dHNpZGVQcm9wcykge1xuICBjb25zdCBpbmRleCA9IHJlZ2lzdGVyZWRMaXN0LmZpbmRJbmRleChoID0+IGggPT09IGNsaWNrT3V0c2lkZVByb3BzKVxuXG4gIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICByZWdpc3RlcmVkTGlzdC5zcGxpY2UoaW5kZXgsIDEpXG5cbiAgICBpZiAocmVnaXN0ZXJlZExpc3QubGVuZ3RoID09PSAwKSB7XG4gICAgICBpZiAodGltZXIgIT09IG51bGwpIHtcbiAgICAgICAgY2xlYXJUaW1lb3V0KHRpbWVyKVxuICAgICAgICB0aW1lciA9IG51bGxcbiAgICAgIH1cblxuICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgZ2xvYmFsSGFuZGxlciwgbm90UGFzc2l2ZUNhcHR1cmUpXG4gICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0JywgZ2xvYmFsSGFuZGxlciwgbm90UGFzc2l2ZUNhcHR1cmUpXG4gICAgfVxuICB9XG59XG4iLCJpbXBvcnQgeyBnZXRTY3JvbGxiYXJXaWR0aCB9IGZyb20gJy4uL3Njcm9sbC5qcydcbmltcG9ydCB7IGNsaWVudCB9IGZyb20gJy4uLy4uL3BsdWdpbnMvUGxhdGZvcm0uanMnXG5cbmxldCB2cExlZnQsIHZwVG9wXG5cbmV4cG9ydCBmdW5jdGlvbiB2YWxpZGF0ZVBvc2l0aW9uIChwb3MpIHtcbiAgY29uc3QgcGFydHMgPSBwb3Muc3BsaXQoJyAnKVxuICBpZiAocGFydHMubGVuZ3RoICE9PSAyKSB7XG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cbiAgaWYgKFsgJ3RvcCcsICdjZW50ZXInLCAnYm90dG9tJyBdLmluY2x1ZGVzKHBhcnRzWyAwIF0pICE9PSB0cnVlKSB7XG4gICAgY29uc29sZS5lcnJvcignQW5jaG9yL1NlbGYgcG9zaXRpb24gbXVzdCBzdGFydCB3aXRoIG9uZSBvZiB0b3AvY2VudGVyL2JvdHRvbScpXG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cbiAgaWYgKFsgJ2xlZnQnLCAnbWlkZGxlJywgJ3JpZ2h0JywgJ3N0YXJ0JywgJ2VuZCcgXS5pbmNsdWRlcyhwYXJ0c1sgMSBdKSAhPT0gdHJ1ZSkge1xuICAgIGNvbnNvbGUuZXJyb3IoJ0FuY2hvci9TZWxmIHBvc2l0aW9uIG11c3QgZW5kIHdpdGggb25lIG9mIGxlZnQvbWlkZGxlL3JpZ2h0L3N0YXJ0L2VuZCcpXG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cbiAgcmV0dXJuIHRydWVcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHZhbGlkYXRlT2Zmc2V0ICh2YWwpIHtcbiAgaWYgKCF2YWwpIHsgcmV0dXJuIHRydWUgfVxuICBpZiAodmFsLmxlbmd0aCAhPT0gMikgeyByZXR1cm4gZmFsc2UgfVxuICBpZiAodHlwZW9mIHZhbFsgMCBdICE9PSAnbnVtYmVyJyB8fCB0eXBlb2YgdmFsWyAxIF0gIT09ICdudW1iZXInKSB7XG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cbiAgcmV0dXJuIHRydWVcbn1cblxuY29uc3QgaG9yaXpvbnRhbFBvcyA9IHtcbiAgJ3N0YXJ0I2x0cic6ICdsZWZ0JyxcbiAgJ3N0YXJ0I3J0bCc6ICdyaWdodCcsXG4gICdlbmQjbHRyJzogJ3JpZ2h0JyxcbiAgJ2VuZCNydGwnOiAnbGVmdCdcbn1cblxuO1sgJ2xlZnQnLCAnbWlkZGxlJywgJ3JpZ2h0JyBdLmZvckVhY2gocG9zID0+IHtcbiAgaG9yaXpvbnRhbFBvc1sgYCR7IHBvcyB9I2x0cmAgXSA9IHBvc1xuICBob3Jpem9udGFsUG9zWyBgJHsgcG9zIH0jcnRsYCBdID0gcG9zXG59KVxuXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VQb3NpdGlvbiAocG9zLCBydGwpIHtcbiAgY29uc3QgcGFydHMgPSBwb3Muc3BsaXQoJyAnKVxuICByZXR1cm4ge1xuICAgIHZlcnRpY2FsOiBwYXJ0c1sgMCBdLFxuICAgIGhvcml6b250YWw6IGhvcml6b250YWxQb3NbIGAkeyBwYXJ0c1sgMSBdIH0jJHsgcnRsID09PSB0cnVlID8gJ3J0bCcgOiAnbHRyJyB9YCBdXG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldEFuY2hvclByb3BzIChlbCwgb2Zmc2V0KSB7XG4gIGxldCB7IHRvcCwgbGVmdCwgcmlnaHQsIGJvdHRvbSwgd2lkdGgsIGhlaWdodCB9ID0gZWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClcblxuICBpZiAob2Zmc2V0ICE9PSB2b2lkIDApIHtcbiAgICB0b3AgLT0gb2Zmc2V0WyAxIF1cbiAgICBsZWZ0IC09IG9mZnNldFsgMCBdXG4gICAgYm90dG9tICs9IG9mZnNldFsgMSBdXG4gICAgcmlnaHQgKz0gb2Zmc2V0WyAwIF1cblxuICAgIHdpZHRoICs9IG9mZnNldFsgMCBdXG4gICAgaGVpZ2h0ICs9IG9mZnNldFsgMSBdXG4gIH1cblxuICByZXR1cm4ge1xuICAgIHRvcCwgYm90dG9tLCBoZWlnaHQsXG4gICAgbGVmdCwgcmlnaHQsIHdpZHRoLFxuICAgIG1pZGRsZTogbGVmdCArIChyaWdodCAtIGxlZnQpIC8gMixcbiAgICBjZW50ZXI6IHRvcCArIChib3R0b20gLSB0b3ApIC8gMlxuICB9XG59XG5cbmZ1bmN0aW9uIGdldEFic29sdXRlQW5jaG9yUHJvcHMgKGVsLCBhYnNvbHV0ZU9mZnNldCwgb2Zmc2V0KSB7XG4gIGxldCB7IHRvcCwgbGVmdCB9ID0gZWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClcblxuICB0b3AgKz0gYWJzb2x1dGVPZmZzZXQudG9wXG4gIGxlZnQgKz0gYWJzb2x1dGVPZmZzZXQubGVmdFxuXG4gIGlmIChvZmZzZXQgIT09IHZvaWQgMCkge1xuICAgIHRvcCArPSBvZmZzZXRbIDEgXVxuICAgIGxlZnQgKz0gb2Zmc2V0WyAwIF1cbiAgfVxuXG4gIHJldHVybiB7XG4gICAgdG9wLCBib3R0b206IHRvcCArIDEsIGhlaWdodDogMSxcbiAgICBsZWZ0LCByaWdodDogbGVmdCArIDEsIHdpZHRoOiAxLFxuICAgIG1pZGRsZTogbGVmdCxcbiAgICBjZW50ZXI6IHRvcFxuICB9XG59XG5cbmZ1bmN0aW9uIGdldFRhcmdldFByb3BzICh3aWR0aCwgaGVpZ2h0KSB7XG4gIHJldHVybiB7XG4gICAgdG9wOiAwLFxuICAgIGNlbnRlcjogaGVpZ2h0IC8gMixcbiAgICBib3R0b206IGhlaWdodCxcbiAgICBsZWZ0OiAwLFxuICAgIG1pZGRsZTogd2lkdGggLyAyLFxuICAgIHJpZ2h0OiB3aWR0aFxuICB9XG59XG5cbmZ1bmN0aW9uIGdldFRvcExlZnRQcm9wcyAoYW5jaG9yUHJvcHMsIHRhcmdldFByb3BzLCBhbmNob3JPcmlnaW4sIHNlbGZPcmlnaW4pIHtcbiAgcmV0dXJuIHtcbiAgICB0b3A6IGFuY2hvclByb3BzWyBhbmNob3JPcmlnaW4udmVydGljYWwgXSAtIHRhcmdldFByb3BzWyBzZWxmT3JpZ2luLnZlcnRpY2FsIF0sXG4gICAgbGVmdDogYW5jaG9yUHJvcHNbIGFuY2hvck9yaWdpbi5ob3Jpem9udGFsIF0gLSB0YXJnZXRQcm9wc1sgc2VsZk9yaWdpbi5ob3Jpem9udGFsIF1cbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gc2V0UG9zaXRpb24gKGNmZywgcmV0cnlOdW1iZXIgPSAwKSB7XG4gIGlmIChcbiAgICBjZmcudGFyZ2V0RWwgPT09IG51bGxcbiAgICB8fCBjZmcuYW5jaG9yRWwgPT09IG51bGxcbiAgICB8fCByZXRyeU51bWJlciA+IDUgLy8gd2Ugc2hvdWxkIHRyeSBvbmx5IGEgZmV3IHRpbWVzXG4gICkge1xuICAgIHJldHVyblxuICB9XG5cbiAgLy8gc29tZSBicm93c2VycyByZXBvcnQgemVybyBoZWlnaHQgb3Igd2lkdGggYmVjYXVzZVxuICAvLyB3ZSBhcmUgdHJ5aW5nIHRvbyBlYXJseSB0byBnZXQgdGhlc2UgZGltZW5zaW9uc1xuICBpZiAoY2ZnLnRhcmdldEVsLm9mZnNldEhlaWdodCA9PT0gMCB8fCBjZmcudGFyZ2V0RWwub2Zmc2V0V2lkdGggPT09IDApIHtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHNldFBvc2l0aW9uKGNmZywgcmV0cnlOdW1iZXIgKyAxKVxuICAgIH0sIDEwKVxuICAgIHJldHVyblxuICB9XG5cbiAgY29uc3Qge1xuICAgIHRhcmdldEVsLFxuICAgIG9mZnNldCxcbiAgICBhbmNob3JFbCxcbiAgICBhbmNob3JPcmlnaW4sXG4gICAgc2VsZk9yaWdpbixcbiAgICBhYnNvbHV0ZU9mZnNldCxcbiAgICBmaXQsXG4gICAgY292ZXIsXG4gICAgbWF4SGVpZ2h0LFxuICAgIG1heFdpZHRoXG4gIH0gPSBjZmdcblxuICBpZiAoY2xpZW50LmlzLmlvcyA9PT0gdHJ1ZSAmJiB3aW5kb3cudmlzdWFsVmlld3BvcnQgIT09IHZvaWQgMCkge1xuICAgIC8vIHVzZXMgdGhlIHEtcG9zaXRpb24tZW5naW5lIENTUyBjbGFzc1xuXG4gICAgY29uc3QgZWwgPSBkb2N1bWVudC5ib2R5LnN0eWxlXG4gICAgY29uc3QgeyBvZmZzZXRMZWZ0OiBsZWZ0LCBvZmZzZXRUb3A6IHRvcCB9ID0gd2luZG93LnZpc3VhbFZpZXdwb3J0XG5cbiAgICBpZiAobGVmdCAhPT0gdnBMZWZ0KSB7XG4gICAgICBlbC5zZXRQcm9wZXJ0eSgnLS1xLXBlLWxlZnQnLCBsZWZ0ICsgJ3B4JylcbiAgICAgIHZwTGVmdCA9IGxlZnRcbiAgICB9XG4gICAgaWYgKHRvcCAhPT0gdnBUb3ApIHtcbiAgICAgIGVsLnNldFByb3BlcnR5KCctLXEtcGUtdG9wJywgdG9wICsgJ3B4JylcbiAgICAgIHZwVG9wID0gdG9wXG4gICAgfVxuICB9XG5cbiAgLy8gc2Nyb2xsIHBvc2l0aW9uIG1pZ2h0IGNoYW5nZVxuICAvLyBpZiBtYXgtaGVpZ2h0Ly13aWR0aCBjaGFuZ2VzLCBzbyB3ZVxuICAvLyBuZWVkIHRvIHJlc3RvcmUgaXQgYWZ0ZXIgd2UgY2FsY3VsYXRlXG4gIC8vIHRoZSBuZXcgcG9zaXRpb25pbmdcbiAgY29uc3QgeyBzY3JvbGxMZWZ0LCBzY3JvbGxUb3AgfSA9IHRhcmdldEVsXG5cbiAgY29uc3QgYW5jaG9yUHJvcHMgPSBhYnNvbHV0ZU9mZnNldCA9PT0gdm9pZCAwXG4gICAgPyBnZXRBbmNob3JQcm9wcyhhbmNob3JFbCwgY292ZXIgPT09IHRydWUgPyBbIDAsIDAgXSA6IG9mZnNldClcbiAgICA6IGdldEFic29sdXRlQW5jaG9yUHJvcHMoYW5jaG9yRWwsIGFic29sdXRlT2Zmc2V0LCBvZmZzZXQpXG5cbiAgLy8gd2UgXCJyZXNldFwiIHRoZSBjcml0aWNhbCBDU1MgcHJvcGVydGllc1xuICAvLyBzbyB3ZSBjYW4gdGFrZSBhbiBhY2N1cmF0ZSBtZWFzdXJlbWVudFxuICBPYmplY3QuYXNzaWduKHRhcmdldEVsLnN0eWxlLCB7XG4gICAgdG9wOiAwLFxuICAgIGxlZnQ6IDAsXG4gICAgbWluV2lkdGg6IG51bGwsXG4gICAgbWluSGVpZ2h0OiBudWxsLFxuICAgIG1heFdpZHRoOiBtYXhXaWR0aCB8fCAnMTAwdncnLFxuICAgIG1heEhlaWdodDogbWF4SGVpZ2h0IHx8ICcxMDB2aCcsXG4gICAgdmlzaWJpbGl0eTogJ3Zpc2libGUnXG4gIH0pXG5cbiAgY29uc3QgeyBvZmZzZXRXaWR0aDogb3JpZ0VsV2lkdGgsIG9mZnNldEhlaWdodDogb3JpZ0VsSGVpZ2h0IH0gPSB0YXJnZXRFbFxuICBjb25zdCB7IGVsV2lkdGgsIGVsSGVpZ2h0IH0gPSBmaXQgPT09IHRydWUgfHwgY292ZXIgPT09IHRydWVcbiAgICA/IHsgZWxXaWR0aDogTWF0aC5tYXgoYW5jaG9yUHJvcHMud2lkdGgsIG9yaWdFbFdpZHRoKSwgZWxIZWlnaHQ6IGNvdmVyID09PSB0cnVlID8gTWF0aC5tYXgoYW5jaG9yUHJvcHMuaGVpZ2h0LCBvcmlnRWxIZWlnaHQpIDogb3JpZ0VsSGVpZ2h0IH1cbiAgICA6IHsgZWxXaWR0aDogb3JpZ0VsV2lkdGgsIGVsSGVpZ2h0OiBvcmlnRWxIZWlnaHQgfVxuXG4gIGxldCBlbFN0eWxlID0geyBtYXhXaWR0aCwgbWF4SGVpZ2h0IH1cblxuICBpZiAoZml0ID09PSB0cnVlIHx8IGNvdmVyID09PSB0cnVlKSB7XG4gICAgZWxTdHlsZS5taW5XaWR0aCA9IGFuY2hvclByb3BzLndpZHRoICsgJ3B4J1xuICAgIGlmIChjb3ZlciA9PT0gdHJ1ZSkge1xuICAgICAgZWxTdHlsZS5taW5IZWlnaHQgPSBhbmNob3JQcm9wcy5oZWlnaHQgKyAncHgnXG4gICAgfVxuICB9XG5cbiAgT2JqZWN0LmFzc2lnbih0YXJnZXRFbC5zdHlsZSwgZWxTdHlsZSlcblxuICBjb25zdCB0YXJnZXRQcm9wcyA9IGdldFRhcmdldFByb3BzKGVsV2lkdGgsIGVsSGVpZ2h0KVxuICBsZXQgcHJvcHMgPSBnZXRUb3BMZWZ0UHJvcHMoYW5jaG9yUHJvcHMsIHRhcmdldFByb3BzLCBhbmNob3JPcmlnaW4sIHNlbGZPcmlnaW4pXG5cbiAgaWYgKGFic29sdXRlT2Zmc2V0ID09PSB2b2lkIDAgfHwgb2Zmc2V0ID09PSB2b2lkIDApIHtcbiAgICBhcHBseUJvdW5kYXJpZXMocHJvcHMsIGFuY2hvclByb3BzLCB0YXJnZXRQcm9wcywgYW5jaG9yT3JpZ2luLCBzZWxmT3JpZ2luKVxuICB9XG4gIGVsc2UgeyAvLyB3ZSBoYXZlIHRvdWNoIHBvc2l0aW9uIG9yIGNvbnRleHQgbWVudSB3aXRoIG9mZnNldFxuICAgIGNvbnN0IHsgdG9wLCBsZWZ0IH0gPSBwcm9wcyAvLyBjYWNoZSBpbml0aWFsIHZhbHVlc1xuXG4gICAgLy8gYXBwbHkgaW5pdGlhbCBib3VuZGFyaWVzXG4gICAgYXBwbHlCb3VuZGFyaWVzKHByb3BzLCBhbmNob3JQcm9wcywgdGFyZ2V0UHJvcHMsIGFuY2hvck9yaWdpbiwgc2VsZk9yaWdpbilcblxuICAgIGxldCBoYXNDaGFuZ2VkID0gZmFsc2VcblxuICAgIC8vIGRpZCBpdCBmbGlwIHZlcnRpY2FsbHk/XG4gICAgaWYgKHByb3BzLnRvcCAhPT0gdG9wKSB7XG4gICAgICBoYXNDaGFuZ2VkID0gdHJ1ZVxuICAgICAgY29uc3Qgb2Zmc2V0WSA9IDIgKiBvZmZzZXRbIDEgXVxuICAgICAgYW5jaG9yUHJvcHMuY2VudGVyID0gYW5jaG9yUHJvcHMudG9wIC09IG9mZnNldFlcbiAgICAgIGFuY2hvclByb3BzLmJvdHRvbSAtPSBvZmZzZXRZICsgMlxuICAgIH1cblxuICAgIC8vIGRpZCBpdCBmbGlwIGhvcml6b250YWxseT9cbiAgICBpZiAocHJvcHMubGVmdCAhPT0gbGVmdCkge1xuICAgICAgaGFzQ2hhbmdlZCA9IHRydWVcbiAgICAgIGNvbnN0IG9mZnNldFggPSAyICogb2Zmc2V0WyAwIF1cbiAgICAgIGFuY2hvclByb3BzLm1pZGRsZSA9IGFuY2hvclByb3BzLmxlZnQgLT0gb2Zmc2V0WFxuICAgICAgYW5jaG9yUHJvcHMucmlnaHQgLT0gb2Zmc2V0WCArIDJcbiAgICB9XG5cbiAgICBpZiAoaGFzQ2hhbmdlZCA9PT0gdHJ1ZSkge1xuICAgICAgLy8gcmUtY2FsY3VsYXRlIHByb3BzIHdpdGggdGhlIG5ldyBhbmNob3JcbiAgICAgIHByb3BzID0gZ2V0VG9wTGVmdFByb3BzKGFuY2hvclByb3BzLCB0YXJnZXRQcm9wcywgYW5jaG9yT3JpZ2luLCBzZWxmT3JpZ2luKVxuXG4gICAgICAvLyBhbmQgcmUtYXBwbHkgYm91bmRhcmllc1xuICAgICAgYXBwbHlCb3VuZGFyaWVzKHByb3BzLCBhbmNob3JQcm9wcywgdGFyZ2V0UHJvcHMsIGFuY2hvck9yaWdpbiwgc2VsZk9yaWdpbilcbiAgICB9XG4gIH1cblxuICBlbFN0eWxlID0ge1xuICAgIHRvcDogcHJvcHMudG9wICsgJ3B4JyxcbiAgICBsZWZ0OiBwcm9wcy5sZWZ0ICsgJ3B4J1xuICB9XG5cbiAgaWYgKHByb3BzLm1heEhlaWdodCAhPT0gdm9pZCAwKSB7XG4gICAgZWxTdHlsZS5tYXhIZWlnaHQgPSBwcm9wcy5tYXhIZWlnaHQgKyAncHgnXG5cbiAgICBpZiAoYW5jaG9yUHJvcHMuaGVpZ2h0ID4gcHJvcHMubWF4SGVpZ2h0KSB7XG4gICAgICBlbFN0eWxlLm1pbkhlaWdodCA9IGVsU3R5bGUubWF4SGVpZ2h0XG4gICAgfVxuICB9XG4gIGlmIChwcm9wcy5tYXhXaWR0aCAhPT0gdm9pZCAwKSB7XG4gICAgZWxTdHlsZS5tYXhXaWR0aCA9IHByb3BzLm1heFdpZHRoICsgJ3B4J1xuXG4gICAgaWYgKGFuY2hvclByb3BzLndpZHRoID4gcHJvcHMubWF4V2lkdGgpIHtcbiAgICAgIGVsU3R5bGUubWluV2lkdGggPSBlbFN0eWxlLm1heFdpZHRoXG4gICAgfVxuICB9XG5cbiAgT2JqZWN0LmFzc2lnbih0YXJnZXRFbC5zdHlsZSwgZWxTdHlsZSlcblxuICAvLyByZXN0b3JlIHNjcm9sbCBwb3NpdGlvblxuICBpZiAodGFyZ2V0RWwuc2Nyb2xsVG9wICE9PSBzY3JvbGxUb3ApIHtcbiAgICB0YXJnZXRFbC5zY3JvbGxUb3AgPSBzY3JvbGxUb3BcbiAgfVxuICBpZiAodGFyZ2V0RWwuc2Nyb2xsTGVmdCAhPT0gc2Nyb2xsTGVmdCkge1xuICAgIHRhcmdldEVsLnNjcm9sbExlZnQgPSBzY3JvbGxMZWZ0XG4gIH1cbn1cblxuZnVuY3Rpb24gYXBwbHlCb3VuZGFyaWVzIChwcm9wcywgYW5jaG9yUHJvcHMsIHRhcmdldFByb3BzLCBhbmNob3JPcmlnaW4sIHNlbGZPcmlnaW4pIHtcbiAgY29uc3RcbiAgICBjdXJyZW50SGVpZ2h0ID0gdGFyZ2V0UHJvcHMuYm90dG9tLFxuICAgIGN1cnJlbnRXaWR0aCA9IHRhcmdldFByb3BzLnJpZ2h0LFxuICAgIG1hcmdpbiA9IGdldFNjcm9sbGJhcldpZHRoKCksXG4gICAgaW5uZXJIZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQgLSBtYXJnaW4sXG4gICAgaW5uZXJXaWR0aCA9IGRvY3VtZW50LmJvZHkuY2xpZW50V2lkdGhcblxuICBpZiAocHJvcHMudG9wIDwgMCB8fCBwcm9wcy50b3AgKyBjdXJyZW50SGVpZ2h0ID4gaW5uZXJIZWlnaHQpIHtcbiAgICBpZiAoc2VsZk9yaWdpbi52ZXJ0aWNhbCA9PT0gJ2NlbnRlcicpIHtcbiAgICAgIHByb3BzLnRvcCA9IGFuY2hvclByb3BzWyBhbmNob3JPcmlnaW4udmVydGljYWwgXSA+IGlubmVySGVpZ2h0IC8gMlxuICAgICAgICA/IE1hdGgubWF4KDAsIGlubmVySGVpZ2h0IC0gY3VycmVudEhlaWdodClcbiAgICAgICAgOiAwXG4gICAgICBwcm9wcy5tYXhIZWlnaHQgPSBNYXRoLm1pbihjdXJyZW50SGVpZ2h0LCBpbm5lckhlaWdodClcbiAgICB9XG4gICAgZWxzZSBpZiAoYW5jaG9yUHJvcHNbIGFuY2hvck9yaWdpbi52ZXJ0aWNhbCBdID4gaW5uZXJIZWlnaHQgLyAyKSB7XG4gICAgICBjb25zdCBhbmNob3JZID0gTWF0aC5taW4oXG4gICAgICAgIGlubmVySGVpZ2h0LFxuICAgICAgICBhbmNob3JPcmlnaW4udmVydGljYWwgPT09ICdjZW50ZXInXG4gICAgICAgICAgPyBhbmNob3JQcm9wcy5jZW50ZXJcbiAgICAgICAgICA6IChhbmNob3JPcmlnaW4udmVydGljYWwgPT09IHNlbGZPcmlnaW4udmVydGljYWwgPyBhbmNob3JQcm9wcy5ib3R0b20gOiBhbmNob3JQcm9wcy50b3ApXG4gICAgICApXG4gICAgICBwcm9wcy5tYXhIZWlnaHQgPSBNYXRoLm1pbihjdXJyZW50SGVpZ2h0LCBhbmNob3JZKVxuICAgICAgcHJvcHMudG9wID0gTWF0aC5tYXgoMCwgYW5jaG9yWSAtIGN1cnJlbnRIZWlnaHQpXG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgcHJvcHMudG9wID0gTWF0aC5tYXgoMCwgYW5jaG9yT3JpZ2luLnZlcnRpY2FsID09PSAnY2VudGVyJ1xuICAgICAgICA/IGFuY2hvclByb3BzLmNlbnRlclxuICAgICAgICA6IChhbmNob3JPcmlnaW4udmVydGljYWwgPT09IHNlbGZPcmlnaW4udmVydGljYWwgPyBhbmNob3JQcm9wcy50b3AgOiBhbmNob3JQcm9wcy5ib3R0b20pXG4gICAgICApXG4gICAgICBwcm9wcy5tYXhIZWlnaHQgPSBNYXRoLm1pbihjdXJyZW50SGVpZ2h0LCBpbm5lckhlaWdodCAtIHByb3BzLnRvcClcbiAgICB9XG4gIH1cblxuICBpZiAocHJvcHMubGVmdCA8IDAgfHwgcHJvcHMubGVmdCArIGN1cnJlbnRXaWR0aCA+IGlubmVyV2lkdGgpIHtcbiAgICBwcm9wcy5tYXhXaWR0aCA9IE1hdGgubWluKGN1cnJlbnRXaWR0aCwgaW5uZXJXaWR0aClcbiAgICBpZiAoc2VsZk9yaWdpbi5ob3Jpem9udGFsID09PSAnbWlkZGxlJykge1xuICAgICAgcHJvcHMubGVmdCA9IGFuY2hvclByb3BzWyBhbmNob3JPcmlnaW4uaG9yaXpvbnRhbCBdID4gaW5uZXJXaWR0aCAvIDJcbiAgICAgICAgPyBNYXRoLm1heCgwLCBpbm5lcldpZHRoIC0gY3VycmVudFdpZHRoKVxuICAgICAgICA6IDBcbiAgICB9XG4gICAgZWxzZSBpZiAoYW5jaG9yUHJvcHNbIGFuY2hvck9yaWdpbi5ob3Jpem9udGFsIF0gPiBpbm5lcldpZHRoIC8gMikge1xuICAgICAgY29uc3QgYW5jaG9yWCA9IE1hdGgubWluKFxuICAgICAgICBpbm5lcldpZHRoLFxuICAgICAgICBhbmNob3JPcmlnaW4uaG9yaXpvbnRhbCA9PT0gJ21pZGRsZSdcbiAgICAgICAgICA/IGFuY2hvclByb3BzLm1pZGRsZVxuICAgICAgICAgIDogKGFuY2hvck9yaWdpbi5ob3Jpem9udGFsID09PSBzZWxmT3JpZ2luLmhvcml6b250YWwgPyBhbmNob3JQcm9wcy5yaWdodCA6IGFuY2hvclByb3BzLmxlZnQpXG4gICAgICApXG4gICAgICBwcm9wcy5tYXhXaWR0aCA9IE1hdGgubWluKGN1cnJlbnRXaWR0aCwgYW5jaG9yWClcbiAgICAgIHByb3BzLmxlZnQgPSBNYXRoLm1heCgwLCBhbmNob3JYIC0gcHJvcHMubWF4V2lkdGgpXG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgcHJvcHMubGVmdCA9IE1hdGgubWF4KDAsIGFuY2hvck9yaWdpbi5ob3Jpem9udGFsID09PSAnbWlkZGxlJ1xuICAgICAgICA/IGFuY2hvclByb3BzLm1pZGRsZVxuICAgICAgICA6IChhbmNob3JPcmlnaW4uaG9yaXpvbnRhbCA9PT0gc2VsZk9yaWdpbi5ob3Jpem9udGFsID8gYW5jaG9yUHJvcHMubGVmdCA6IGFuY2hvclByb3BzLnJpZ2h0KVxuICAgICAgKVxuICAgICAgcHJvcHMubWF4V2lkdGggPSBNYXRoLm1pbihjdXJyZW50V2lkdGgsIGlubmVyV2lkdGggLSBwcm9wcy5sZWZ0KVxuICAgIH1cbiAgfVxufVxuIiwiaW1wb3J0IHsgaCwgcmVmLCBjb21wdXRlZCwgd2F0Y2gsIFRyYW5zaXRpb24sIG9uQmVmb3JlVW5tb3VudCwgZ2V0Q3VycmVudEluc3RhbmNlIH0gZnJvbSAndnVlJ1xuXG5pbXBvcnQgdXNlQW5jaG9yLCB7IHVzZUFuY2hvclByb3BzIH0gZnJvbSAnLi4vLi4vY29tcG9zYWJsZXMvcHJpdmF0ZS91c2UtYW5jaG9yLmpzJ1xuaW1wb3J0IHVzZVNjcm9sbFRhcmdldCBmcm9tICcuLi8uLi9jb21wb3NhYmxlcy9wcml2YXRlL3VzZS1zY3JvbGwtdGFyZ2V0LmpzJ1xuaW1wb3J0IHVzZU1vZGVsVG9nZ2xlLCB7IHVzZU1vZGVsVG9nZ2xlUHJvcHMsIHVzZU1vZGVsVG9nZ2xlRW1pdHMgfSBmcm9tICcuLi8uLi9jb21wb3NhYmxlcy9wcml2YXRlL3VzZS1tb2RlbC10b2dnbGUuanMnXG5pbXBvcnQgdXNlRGFyaywgeyB1c2VEYXJrUHJvcHMgfSBmcm9tICcuLi8uLi9jb21wb3NhYmxlcy9wcml2YXRlL3VzZS1kYXJrLmpzJ1xuaW1wb3J0IHVzZVBvcnRhbCBmcm9tICcuLi8uLi9jb21wb3NhYmxlcy9wcml2YXRlL3VzZS1wb3J0YWwuanMnXG5pbXBvcnQgdXNlVHJhbnNpdGlvbiwgeyB1c2VUcmFuc2l0aW9uUHJvcHMgfSBmcm9tICcuLi8uLi9jb21wb3NhYmxlcy9wcml2YXRlL3VzZS10cmFuc2l0aW9uLmpzJ1xuaW1wb3J0IHVzZVRpY2sgZnJvbSAnLi4vLi4vY29tcG9zYWJsZXMvdXNlLXRpY2suanMnXG5pbXBvcnQgdXNlVGltZW91dCBmcm9tICcuLi8uLi9jb21wb3NhYmxlcy91c2UtdGltZW91dC5qcydcblxuaW1wb3J0IHsgY3JlYXRlQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vdXRpbHMvcHJpdmF0ZS9jcmVhdGUuanMnXG5pbXBvcnQgeyBjbG9zZVBvcnRhbE1lbnVzIH0gZnJvbSAnLi4vLi4vdXRpbHMvcHJpdmF0ZS9wb3J0YWwuanMnXG5pbXBvcnQgeyBnZXRTY3JvbGxUYXJnZXQgfSBmcm9tICcuLi8uLi91dGlscy9zY3JvbGwuanMnXG5pbXBvcnQgeyBwb3NpdGlvbiwgc3RvcEFuZFByZXZlbnQgfSBmcm9tICcuLi8uLi91dGlscy9ldmVudC5qcydcbmltcG9ydCB7IGhTbG90IH0gZnJvbSAnLi4vLi4vdXRpbHMvcHJpdmF0ZS9yZW5kZXIuanMnXG5pbXBvcnQgeyBhZGRFc2NhcGVLZXksIHJlbW92ZUVzY2FwZUtleSB9IGZyb20gJy4uLy4uL3V0aWxzL3ByaXZhdGUvZXNjYXBlLWtleS5qcydcbmltcG9ydCB7IGFkZEZvY3Vzb3V0LCByZW1vdmVGb2N1c291dCB9IGZyb20gJy4uLy4uL3V0aWxzL3ByaXZhdGUvZm9jdXNvdXQuanMnXG5pbXBvcnQgeyBjaGlsZEhhc0ZvY3VzIH0gZnJvbSAnLi4vLi4vdXRpbHMvZG9tLmpzJ1xuaW1wb3J0IHsgYWRkQ2xpY2tPdXRzaWRlLCByZW1vdmVDbGlja091dHNpZGUgfSBmcm9tICcuLi8uLi91dGlscy9wcml2YXRlL2NsaWNrLW91dHNpZGUuanMnXG5pbXBvcnQgeyBhZGRGb2N1c0ZuIH0gZnJvbSAnLi4vLi4vdXRpbHMvcHJpdmF0ZS9mb2N1cy1tYW5hZ2VyLmpzJ1xuXG5pbXBvcnQge1xuICB2YWxpZGF0ZVBvc2l0aW9uLCB2YWxpZGF0ZU9mZnNldCwgc2V0UG9zaXRpb24sIHBhcnNlUG9zaXRpb25cbn0gZnJvbSAnLi4vLi4vdXRpbHMvcHJpdmF0ZS9wb3NpdGlvbi1lbmdpbmUuanMnXG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUNvbXBvbmVudCh7XG4gIG5hbWU6ICdRTWVudScsXG5cbiAgaW5oZXJpdEF0dHJzOiBmYWxzZSxcblxuICBwcm9wczoge1xuICAgIC4uLnVzZUFuY2hvclByb3BzLFxuICAgIC4uLnVzZU1vZGVsVG9nZ2xlUHJvcHMsXG4gICAgLi4udXNlRGFya1Byb3BzLFxuICAgIC4uLnVzZVRyYW5zaXRpb25Qcm9wcyxcblxuICAgIHBlcnNpc3RlbnQ6IEJvb2xlYW4sXG4gICAgYXV0b0Nsb3NlOiBCb29sZWFuLFxuICAgIHNlcGFyYXRlQ2xvc2VQb3B1cDogQm9vbGVhbixcblxuICAgIG5vUm91dGVEaXNtaXNzOiBCb29sZWFuLFxuICAgIG5vUmVmb2N1czogQm9vbGVhbixcbiAgICBub0ZvY3VzOiBCb29sZWFuLFxuXG4gICAgZml0OiBCb29sZWFuLFxuICAgIGNvdmVyOiBCb29sZWFuLFxuXG4gICAgc3F1YXJlOiBCb29sZWFuLFxuXG4gICAgYW5jaG9yOiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICB2YWxpZGF0b3I6IHZhbGlkYXRlUG9zaXRpb25cbiAgICB9LFxuICAgIHNlbGY6IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIHZhbGlkYXRvcjogdmFsaWRhdGVQb3NpdGlvblxuICAgIH0sXG4gICAgb2Zmc2V0OiB7XG4gICAgICB0eXBlOiBBcnJheSxcbiAgICAgIHZhbGlkYXRvcjogdmFsaWRhdGVPZmZzZXRcbiAgICB9LFxuXG4gICAgc2Nyb2xsVGFyZ2V0OiB7XG4gICAgICBkZWZhdWx0OiB2b2lkIDBcbiAgICB9LFxuXG4gICAgdG91Y2hQb3NpdGlvbjogQm9vbGVhbixcblxuICAgIG1heEhlaWdodDoge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgZGVmYXVsdDogbnVsbFxuICAgIH0sXG4gICAgbWF4V2lkdGg6IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIGRlZmF1bHQ6IG51bGxcbiAgICB9XG4gIH0sXG5cbiAgZW1pdHM6IFtcbiAgICAuLi51c2VNb2RlbFRvZ2dsZUVtaXRzLFxuICAgICdjbGljaycsICdlc2NhcGVLZXknXG4gIF0sXG5cbiAgc2V0dXAgKHByb3BzLCB7IHNsb3RzLCBlbWl0LCBhdHRycyB9KSB7XG4gICAgbGV0IHJlZm9jdXNUYXJnZXQgPSBudWxsLCBhYnNvbHV0ZU9mZnNldCwgdW53YXRjaFBvc2l0aW9uLCBhdm9pZEF1dG9DbG9zZVxuXG4gICAgY29uc3Qgdm0gPSBnZXRDdXJyZW50SW5zdGFuY2UoKVxuICAgIGNvbnN0IHsgcHJveHkgfSA9IHZtXG4gICAgY29uc3QgeyAkcSB9ID0gcHJveHlcblxuICAgIGNvbnN0IGlubmVyUmVmID0gcmVmKG51bGwpXG4gICAgY29uc3Qgc2hvd2luZyA9IHJlZihmYWxzZSlcblxuICAgIGNvbnN0IGhpZGVPblJvdXRlQ2hhbmdlID0gY29tcHV0ZWQoKCkgPT5cbiAgICAgIHByb3BzLnBlcnNpc3RlbnQgIT09IHRydWVcbiAgICAgICYmIHByb3BzLm5vUm91dGVEaXNtaXNzICE9PSB0cnVlXG4gICAgKVxuXG4gICAgY29uc3QgaXNEYXJrID0gdXNlRGFyayhwcm9wcywgJHEpXG4gICAgY29uc3QgeyByZWdpc3RlclRpY2ssIHJlbW92ZVRpY2sgfSA9IHVzZVRpY2soKVxuICAgIGNvbnN0IHsgcmVnaXN0ZXJUaW1lb3V0IH0gPSB1c2VUaW1lb3V0KClcbiAgICBjb25zdCB7IHRyYW5zaXRpb25Qcm9wcywgdHJhbnNpdGlvblN0eWxlIH0gPSB1c2VUcmFuc2l0aW9uKHByb3BzKVxuICAgIGNvbnN0IHsgbG9jYWxTY3JvbGxUYXJnZXQsIGNoYW5nZVNjcm9sbEV2ZW50LCB1bmNvbmZpZ3VyZVNjcm9sbFRhcmdldCB9ID0gdXNlU2Nyb2xsVGFyZ2V0KHByb3BzLCBjb25maWd1cmVTY3JvbGxUYXJnZXQpXG5cbiAgICBjb25zdCB7IGFuY2hvckVsLCBjYW5TaG93IH0gPSB1c2VBbmNob3IoeyBzaG93aW5nIH0pXG5cbiAgICBjb25zdCB7IGhpZGUgfSA9IHVzZU1vZGVsVG9nZ2xlKHtcbiAgICAgIHNob3dpbmcsIGNhblNob3csIGhhbmRsZVNob3csIGhhbmRsZUhpZGUsXG4gICAgICBoaWRlT25Sb3V0ZUNoYW5nZSxcbiAgICAgIHByb2Nlc3NPbk1vdW50OiB0cnVlXG4gICAgfSlcblxuICAgIGNvbnN0IHsgc2hvd1BvcnRhbCwgaGlkZVBvcnRhbCwgcmVuZGVyUG9ydGFsIH0gPSB1c2VQb3J0YWwodm0sIGlubmVyUmVmLCByZW5kZXJQb3J0YWxDb250ZW50LCAnbWVudScpXG5cbiAgICBjb25zdCBjbGlja091dHNpZGVQcm9wcyA9IHtcbiAgICAgIGFuY2hvckVsLFxuICAgICAgaW5uZXJSZWYsXG4gICAgICBvbkNsaWNrT3V0c2lkZSAoZSkge1xuICAgICAgICBpZiAocHJvcHMucGVyc2lzdGVudCAhPT0gdHJ1ZSAmJiBzaG93aW5nLnZhbHVlID09PSB0cnVlKSB7XG4gICAgICAgICAgaGlkZShlKVxuXG4gICAgICAgICAgaWYgKFxuICAgICAgICAgICAgLy8gYWx3YXlzIHByZXZlbnQgdG91Y2ggZXZlbnRcbiAgICAgICAgICAgIGUudHlwZSA9PT0gJ3RvdWNoc3RhcnQnXG4gICAgICAgICAgICAvLyBwcmV2ZW50IGNsaWNrIGlmIGl0J3Mgb24gYSBkaWFsb2cgYmFja2Ryb3BcbiAgICAgICAgICAgIHx8IGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygncS1kaWFsb2dfX2JhY2tkcm9wJylcbiAgICAgICAgICApIHtcbiAgICAgICAgICAgIHN0b3BBbmRQcmV2ZW50KGUpXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGFuY2hvck9yaWdpbiA9IGNvbXB1dGVkKCgpID0+XG4gICAgICBwYXJzZVBvc2l0aW9uKFxuICAgICAgICBwcm9wcy5hbmNob3IgfHwgKFxuICAgICAgICAgIHByb3BzLmNvdmVyID09PSB0cnVlID8gJ2NlbnRlciBtaWRkbGUnIDogJ2JvdHRvbSBzdGFydCdcbiAgICAgICAgKSxcbiAgICAgICAgJHEubGFuZy5ydGxcbiAgICAgIClcbiAgICApXG5cbiAgICBjb25zdCBzZWxmT3JpZ2luID0gY29tcHV0ZWQoKCkgPT4gKFxuICAgICAgcHJvcHMuY292ZXIgPT09IHRydWVcbiAgICAgICAgPyBhbmNob3JPcmlnaW4udmFsdWVcbiAgICAgICAgOiBwYXJzZVBvc2l0aW9uKHByb3BzLnNlbGYgfHwgJ3RvcCBzdGFydCcsICRxLmxhbmcucnRsKVxuICAgICkpXG5cbiAgICBjb25zdCBtZW51Q2xhc3MgPSBjb21wdXRlZCgoKSA9PlxuICAgICAgKHByb3BzLnNxdWFyZSA9PT0gdHJ1ZSA/ICcgcS1tZW51LS1zcXVhcmUnIDogJycpXG4gICAgICArIChpc0RhcmsudmFsdWUgPT09IHRydWUgPyAnIHEtbWVudS0tZGFyayBxLWRhcmsnIDogJycpXG4gICAgKVxuXG4gICAgY29uc3Qgb25FdmVudHMgPSBjb21wdXRlZCgoKSA9PiAoXG4gICAgICBwcm9wcy5hdXRvQ2xvc2UgPT09IHRydWVcbiAgICAgICAgPyB7IG9uQ2xpY2s6IG9uQXV0b0Nsb3NlIH1cbiAgICAgICAgOiB7fVxuICAgICkpXG5cbiAgICBjb25zdCBoYW5kbGVzRm9jdXMgPSBjb21wdXRlZCgoKSA9PlxuICAgICAgc2hvd2luZy52YWx1ZSA9PT0gdHJ1ZSAmJiBwcm9wcy5wZXJzaXN0ZW50ICE9PSB0cnVlXG4gICAgKVxuXG4gICAgd2F0Y2goaGFuZGxlc0ZvY3VzLCB2YWwgPT4ge1xuICAgICAgaWYgKHZhbCA9PT0gdHJ1ZSkge1xuICAgICAgICBhZGRFc2NhcGVLZXkob25Fc2NhcGVLZXkpXG4gICAgICAgIGFkZENsaWNrT3V0c2lkZShjbGlja091dHNpZGVQcm9wcylcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICByZW1vdmVFc2NhcGVLZXkob25Fc2NhcGVLZXkpXG4gICAgICAgIHJlbW92ZUNsaWNrT3V0c2lkZShjbGlja091dHNpZGVQcm9wcylcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgZnVuY3Rpb24gZm9jdXMgKCkge1xuICAgICAgYWRkRm9jdXNGbigoKSA9PiB7XG4gICAgICAgIGxldCBub2RlID0gaW5uZXJSZWYudmFsdWVcblxuICAgICAgICBpZiAobm9kZSAmJiBub2RlLmNvbnRhaW5zKGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQpICE9PSB0cnVlKSB7XG4gICAgICAgICAgbm9kZSA9IG5vZGUucXVlcnlTZWxlY3RvcignW2F1dG9mb2N1c11bdGFiaW5kZXhdLCBbZGF0YS1hdXRvZm9jdXNdW3RhYmluZGV4XScpXG4gICAgICAgICAgICB8fCBub2RlLnF1ZXJ5U2VsZWN0b3IoJ1thdXRvZm9jdXNdIFt0YWJpbmRleF0sIFtkYXRhLWF1dG9mb2N1c10gW3RhYmluZGV4XScpXG4gICAgICAgICAgICB8fCBub2RlLnF1ZXJ5U2VsZWN0b3IoJ1thdXRvZm9jdXNdLCBbZGF0YS1hdXRvZm9jdXNdJylcbiAgICAgICAgICAgIHx8IG5vZGVcbiAgICAgICAgICBub2RlLmZvY3VzKHsgcHJldmVudFNjcm9sbDogdHJ1ZSB9KVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGhhbmRsZVNob3cgKGV2dCkge1xuICAgICAgcmVmb2N1c1RhcmdldCA9IHByb3BzLm5vUmVmb2N1cyA9PT0gZmFsc2VcbiAgICAgICAgPyBkb2N1bWVudC5hY3RpdmVFbGVtZW50XG4gICAgICAgIDogbnVsbFxuXG4gICAgICBhZGRGb2N1c291dChvbkZvY3Vzb3V0KVxuXG4gICAgICBzaG93UG9ydGFsKClcbiAgICAgIGNvbmZpZ3VyZVNjcm9sbFRhcmdldCgpXG5cbiAgICAgIGFic29sdXRlT2Zmc2V0ID0gdm9pZCAwXG5cbiAgICAgIGlmIChldnQgIT09IHZvaWQgMCAmJiAocHJvcHMudG91Y2hQb3NpdGlvbiB8fCBwcm9wcy5jb250ZXh0TWVudSkpIHtcbiAgICAgICAgY29uc3QgcG9zID0gcG9zaXRpb24oZXZ0KVxuXG4gICAgICAgIGlmIChwb3MubGVmdCAhPT0gdm9pZCAwKSB7XG4gICAgICAgICAgY29uc3QgeyB0b3AsIGxlZnQgfSA9IGFuY2hvckVsLnZhbHVlLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpXG4gICAgICAgICAgYWJzb2x1dGVPZmZzZXQgPSB7IGxlZnQ6IHBvcy5sZWZ0IC0gbGVmdCwgdG9wOiBwb3MudG9wIC0gdG9wIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAodW53YXRjaFBvc2l0aW9uID09PSB2b2lkIDApIHtcbiAgICAgICAgdW53YXRjaFBvc2l0aW9uID0gd2F0Y2goXG4gICAgICAgICAgKCkgPT4gJHEuc2NyZWVuLndpZHRoICsgJ3wnICsgJHEuc2NyZWVuLmhlaWdodCArICd8JyArIHByb3BzLnNlbGYgKyAnfCcgKyBwcm9wcy5hbmNob3IgKyAnfCcgKyAkcS5sYW5nLnJ0bCxcbiAgICAgICAgICB1cGRhdGVQb3NpdGlvblxuICAgICAgICApXG4gICAgICB9XG5cbiAgICAgIGlmIChwcm9wcy5ub0ZvY3VzICE9PSB0cnVlKSB7XG4gICAgICAgIGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQuYmx1cigpXG4gICAgICB9XG5cbiAgICAgIC8vIHNob3VsZCByZW1vdmVUaWNrKCkgaWYgdGhpcyBnZXRzIHJlbW92ZWRcbiAgICAgIHJlZ2lzdGVyVGljaygoKSA9PiB7XG4gICAgICAgIHVwZGF0ZVBvc2l0aW9uKClcbiAgICAgICAgcHJvcHMubm9Gb2N1cyAhPT0gdHJ1ZSAmJiBmb2N1cygpXG4gICAgICB9KVxuXG4gICAgICAvLyBzaG91bGQgcmVtb3ZlVGltZW91dCgpIGlmIHRoaXMgZ2V0cyByZW1vdmVkXG4gICAgICByZWdpc3RlclRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAvLyByZXF1aXJlZCBpbiBvcmRlciB0byBhdm9pZCB0aGUgXCJkb3VibGUtdGFwIG5lZWRlZFwiIGlzc3VlXG4gICAgICAgIGlmICgkcS5wbGF0Zm9ybS5pcy5pb3MgPT09IHRydWUpIHtcbiAgICAgICAgICAvLyBpZiBhdXRvLWNsb3NlLCB0aGVuIHRoaXMgY2xpY2sgc2hvdWxkXG4gICAgICAgICAgLy8gbm90IGNsb3NlIHRoZSBtZW51XG4gICAgICAgICAgYXZvaWRBdXRvQ2xvc2UgPSBwcm9wcy5hdXRvQ2xvc2VcbiAgICAgICAgICBpbm5lclJlZi52YWx1ZS5jbGljaygpXG4gICAgICAgIH1cblxuICAgICAgICB1cGRhdGVQb3NpdGlvbigpXG4gICAgICAgIHNob3dQb3J0YWwodHJ1ZSkgLy8gZG9uZSBzaG93aW5nIHBvcnRhbFxuICAgICAgICBlbWl0KCdzaG93JywgZXZ0KVxuICAgICAgfSwgcHJvcHMudHJhbnNpdGlvbkR1cmF0aW9uKVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGhhbmRsZUhpZGUgKGV2dCkge1xuICAgICAgcmVtb3ZlVGljaygpXG4gICAgICBoaWRlUG9ydGFsKClcblxuICAgICAgYW5jaG9yQ2xlYW51cCh0cnVlKVxuXG4gICAgICBpZiAoXG4gICAgICAgIHJlZm9jdXNUYXJnZXQgIT09IG51bGxcbiAgICAgICAgJiYgKFxuICAgICAgICAgIC8vIG1lbnUgd2FzIGhpZGRlbiBmcm9tIGNvZGUgb3IgRVNDIHBsdWdpblxuICAgICAgICAgIGV2dCA9PT0gdm9pZCAwXG4gICAgICAgICAgLy8gbWVudSB3YXMgbm90IGNsb3NlZCBmcm9tIGEgbW91c2Ugb3IgdG91Y2ggY2xpY2tPdXRzaWRlXG4gICAgICAgICAgfHwgZXZ0LnFDbGlja091dHNpZGUgIT09IHRydWVcbiAgICAgICAgKVxuICAgICAgKSB7XG4gICAgICAgICgoZXZ0ICYmIGV2dC50eXBlLmluZGV4T2YoJ2tleScpID09PSAwXG4gICAgICAgICAgPyByZWZvY3VzVGFyZ2V0LmNsb3Nlc3QoJ1t0YWJpbmRleF06bm90KFt0YWJpbmRleF49XCItXCJdKScpXG4gICAgICAgICAgOiB2b2lkIDBcbiAgICAgICAgKSB8fCByZWZvY3VzVGFyZ2V0KS5mb2N1cygpXG4gICAgICAgIHJlZm9jdXNUYXJnZXQgPSBudWxsXG4gICAgICB9XG5cbiAgICAgIC8vIHNob3VsZCByZW1vdmVUaW1lb3V0KCkgaWYgdGhpcyBnZXRzIHJlbW92ZWRcbiAgICAgIHJlZ2lzdGVyVGltZW91dCgoKSA9PiB7XG4gICAgICAgIGhpZGVQb3J0YWwodHJ1ZSkgLy8gZG9uZSBoaWRpbmcsIG5vdyBkZXN0cm95XG4gICAgICAgIGVtaXQoJ2hpZGUnLCBldnQpXG4gICAgICB9LCBwcm9wcy50cmFuc2l0aW9uRHVyYXRpb24pXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gYW5jaG9yQ2xlYW51cCAoaGlkaW5nKSB7XG4gICAgICBhYnNvbHV0ZU9mZnNldCA9IHZvaWQgMFxuXG4gICAgICBpZiAodW53YXRjaFBvc2l0aW9uICE9PSB2b2lkIDApIHtcbiAgICAgICAgdW53YXRjaFBvc2l0aW9uKClcbiAgICAgICAgdW53YXRjaFBvc2l0aW9uID0gdm9pZCAwXG4gICAgICB9XG5cbiAgICAgIGlmIChoaWRpbmcgPT09IHRydWUgfHwgc2hvd2luZy52YWx1ZSA9PT0gdHJ1ZSkge1xuICAgICAgICByZW1vdmVGb2N1c291dChvbkZvY3Vzb3V0KVxuICAgICAgICB1bmNvbmZpZ3VyZVNjcm9sbFRhcmdldCgpXG4gICAgICAgIHJlbW92ZUNsaWNrT3V0c2lkZShjbGlja091dHNpZGVQcm9wcylcbiAgICAgICAgcmVtb3ZlRXNjYXBlS2V5KG9uRXNjYXBlS2V5KVxuICAgICAgfVxuXG4gICAgICBpZiAoaGlkaW5nICE9PSB0cnVlKSB7XG4gICAgICAgIHJlZm9jdXNUYXJnZXQgPSBudWxsXG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY29uZmlndXJlU2Nyb2xsVGFyZ2V0ICgpIHtcbiAgICAgIGlmIChhbmNob3JFbC52YWx1ZSAhPT0gbnVsbCB8fCBwcm9wcy5zY3JvbGxUYXJnZXQgIT09IHZvaWQgMCkge1xuICAgICAgICBsb2NhbFNjcm9sbFRhcmdldC52YWx1ZSA9IGdldFNjcm9sbFRhcmdldChhbmNob3JFbC52YWx1ZSwgcHJvcHMuc2Nyb2xsVGFyZ2V0KVxuICAgICAgICBjaGFuZ2VTY3JvbGxFdmVudChsb2NhbFNjcm9sbFRhcmdldC52YWx1ZSwgdXBkYXRlUG9zaXRpb24pXG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gb25BdXRvQ2xvc2UgKGUpIHtcbiAgICAgIC8vIGlmIGF1dG8tY2xvc2UsIHRoZW4gdGhlIGlvcyBkb3VibGUtdGFwIGZpeCB3aGljaFxuICAgICAgLy8gaXNzdWVzIGEgY2xpY2sgc2hvdWxkIG5vdCBjbG9zZSB0aGUgbWVudVxuICAgICAgaWYgKGF2b2lkQXV0b0Nsb3NlICE9PSB0cnVlKSB7XG4gICAgICAgIGNsb3NlUG9ydGFsTWVudXMocHJveHksIGUpXG4gICAgICAgIGVtaXQoJ2NsaWNrJywgZSlcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICBhdm9pZEF1dG9DbG9zZSA9IGZhbHNlXG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gb25Gb2N1c291dCAoZXZ0KSB7XG4gICAgICAvLyB0aGUgZm9jdXMgaXMgbm90IGluIGEgdnVlIGNoaWxkIGNvbXBvbmVudFxuICAgICAgaWYgKFxuICAgICAgICBoYW5kbGVzRm9jdXMudmFsdWUgPT09IHRydWVcbiAgICAgICAgJiYgcHJvcHMubm9Gb2N1cyAhPT0gdHJ1ZVxuICAgICAgICAmJiBjaGlsZEhhc0ZvY3VzKGlubmVyUmVmLnZhbHVlLCBldnQudGFyZ2V0KSAhPT0gdHJ1ZVxuICAgICAgKSB7XG4gICAgICAgIGZvY3VzKClcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBvbkVzY2FwZUtleSAoZXZ0KSB7XG4gICAgICBlbWl0KCdlc2NhcGVLZXknKVxuICAgICAgaGlkZShldnQpXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gdXBkYXRlUG9zaXRpb24gKCkge1xuICAgICAgc2V0UG9zaXRpb24oe1xuICAgICAgICB0YXJnZXRFbDogaW5uZXJSZWYudmFsdWUsXG4gICAgICAgIG9mZnNldDogcHJvcHMub2Zmc2V0LFxuICAgICAgICBhbmNob3JFbDogYW5jaG9yRWwudmFsdWUsXG4gICAgICAgIGFuY2hvck9yaWdpbjogYW5jaG9yT3JpZ2luLnZhbHVlLFxuICAgICAgICBzZWxmT3JpZ2luOiBzZWxmT3JpZ2luLnZhbHVlLFxuICAgICAgICBhYnNvbHV0ZU9mZnNldCxcbiAgICAgICAgZml0OiBwcm9wcy5maXQsXG4gICAgICAgIGNvdmVyOiBwcm9wcy5jb3ZlcixcbiAgICAgICAgbWF4SGVpZ2h0OiBwcm9wcy5tYXhIZWlnaHQsXG4gICAgICAgIG1heFdpZHRoOiBwcm9wcy5tYXhXaWR0aFxuICAgICAgfSlcbiAgICB9XG5cbiAgICBmdW5jdGlvbiByZW5kZXJQb3J0YWxDb250ZW50ICgpIHtcbiAgICAgIHJldHVybiBoKFxuICAgICAgICBUcmFuc2l0aW9uLFxuICAgICAgICB0cmFuc2l0aW9uUHJvcHMudmFsdWUsXG4gICAgICAgICgpID0+IChcbiAgICAgICAgICBzaG93aW5nLnZhbHVlID09PSB0cnVlXG4gICAgICAgICAgICA/IGgoJ2RpdicsIHtcbiAgICAgICAgICAgICAgcm9sZTogJ21lbnUnLFxuICAgICAgICAgICAgICAuLi5hdHRycyxcbiAgICAgICAgICAgICAgcmVmOiBpbm5lclJlZixcbiAgICAgICAgICAgICAgdGFiaW5kZXg6IC0xLFxuICAgICAgICAgICAgICBjbGFzczogW1xuICAgICAgICAgICAgICAgICdxLW1lbnUgcS1wb3NpdGlvbi1lbmdpbmUgc2Nyb2xsJyArIG1lbnVDbGFzcy52YWx1ZSxcbiAgICAgICAgICAgICAgICBhdHRycy5jbGFzc1xuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICBzdHlsZTogW1xuICAgICAgICAgICAgICAgIGF0dHJzLnN0eWxlLFxuICAgICAgICAgICAgICAgIHRyYW5zaXRpb25TdHlsZS52YWx1ZVxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAuLi5vbkV2ZW50cy52YWx1ZVxuICAgICAgICAgICAgfSwgaFNsb3Qoc2xvdHMuZGVmYXVsdCkpXG4gICAgICAgICAgICA6IG51bGxcbiAgICAgICAgKVxuICAgICAgKVxuICAgIH1cblxuICAgIG9uQmVmb3JlVW5tb3VudChhbmNob3JDbGVhbnVwKVxuXG4gICAgLy8gZXhwb3NlIHB1YmxpYyBtZXRob2RzXG4gICAgT2JqZWN0LmFzc2lnbihwcm94eSwgeyBmb2N1cywgdXBkYXRlUG9zaXRpb24gfSlcblxuICAgIHJldHVybiByZW5kZXJQb3J0YWxcbiAgfVxufSlcbiIsImltcG9ydCB7IGgsIHJlZiwgY29tcHV0ZWQsIHdhdGNoLCBvbkJlZm9yZVVubW91bnQsIFRyYW5zaXRpb24sIGdldEN1cnJlbnRJbnN0YW5jZSB9IGZyb20gJ3Z1ZSdcblxuaW1wb3J0IHVzZUhpc3RvcnkgZnJvbSAnLi4vLi4vY29tcG9zYWJsZXMvcHJpdmF0ZS91c2UtaGlzdG9yeS5qcydcbmltcG9ydCB1c2VUaW1lb3V0IGZyb20gJy4uLy4uL2NvbXBvc2FibGVzL3VzZS10aW1lb3V0LmpzJ1xuaW1wb3J0IHVzZVRpY2sgZnJvbSAnLi4vLi4vY29tcG9zYWJsZXMvdXNlLXRpY2suanMnXG5pbXBvcnQgdXNlTW9kZWxUb2dnbGUsIHsgdXNlTW9kZWxUb2dnbGVQcm9wcywgdXNlTW9kZWxUb2dnbGVFbWl0cyB9IGZyb20gJy4uLy4uL2NvbXBvc2FibGVzL3ByaXZhdGUvdXNlLW1vZGVsLXRvZ2dsZS5qcydcbmltcG9ydCB1c2VUcmFuc2l0aW9uLCB7IHVzZVRyYW5zaXRpb25Qcm9wcyB9IGZyb20gJy4uLy4uL2NvbXBvc2FibGVzL3ByaXZhdGUvdXNlLXRyYW5zaXRpb24uanMnXG5pbXBvcnQgdXNlUG9ydGFsIGZyb20gJy4uLy4uL2NvbXBvc2FibGVzL3ByaXZhdGUvdXNlLXBvcnRhbC5qcydcbmltcG9ydCB1c2VQcmV2ZW50U2Nyb2xsIGZyb20gJy4uLy4uL2NvbXBvc2FibGVzL3ByaXZhdGUvdXNlLXByZXZlbnQtc2Nyb2xsLmpzJ1xuXG5pbXBvcnQgeyBjcmVhdGVDb21wb25lbnQgfSBmcm9tICcuLi8uLi91dGlscy9wcml2YXRlL2NyZWF0ZS5qcydcbmltcG9ydCB7IGNoaWxkSGFzRm9jdXMgfSBmcm9tICcuLi8uLi91dGlscy9kb20uanMnXG5pbXBvcnQgeyBoU2xvdCB9IGZyb20gJy4uLy4uL3V0aWxzL3ByaXZhdGUvcmVuZGVyLmpzJ1xuaW1wb3J0IHsgYWRkRXNjYXBlS2V5LCByZW1vdmVFc2NhcGVLZXkgfSBmcm9tICcuLi8uLi91dGlscy9wcml2YXRlL2VzY2FwZS1rZXkuanMnXG5pbXBvcnQgeyBhZGRGb2N1c291dCwgcmVtb3ZlRm9jdXNvdXQgfSBmcm9tICcuLi8uLi91dGlscy9wcml2YXRlL2ZvY3Vzb3V0LmpzJ1xuaW1wb3J0IHsgYWRkRm9jdXNGbiB9IGZyb20gJy4uLy4uL3V0aWxzL3ByaXZhdGUvZm9jdXMtbWFuYWdlci5qcydcblxubGV0IG1heGltaXplZE1vZGFscyA9IDBcblxuY29uc3QgcG9zaXRpb25DbGFzcyA9IHtcbiAgc3RhbmRhcmQ6ICdmaXhlZC1mdWxsIGZsZXgtY2VudGVyJyxcbiAgdG9wOiAnZml4ZWQtdG9wIGp1c3RpZnktY2VudGVyJyxcbiAgYm90dG9tOiAnZml4ZWQtYm90dG9tIGp1c3RpZnktY2VudGVyJyxcbiAgcmlnaHQ6ICdmaXhlZC1yaWdodCBpdGVtcy1jZW50ZXInLFxuICBsZWZ0OiAnZml4ZWQtbGVmdCBpdGVtcy1jZW50ZXInXG59XG5cbmNvbnN0IGRlZmF1bHRUcmFuc2l0aW9ucyA9IHtcbiAgc3RhbmRhcmQ6IFsgJ3NjYWxlJywgJ3NjYWxlJyBdLFxuICB0b3A6IFsgJ3NsaWRlLWRvd24nLCAnc2xpZGUtdXAnIF0sXG4gIGJvdHRvbTogWyAnc2xpZGUtdXAnLCAnc2xpZGUtZG93bicgXSxcbiAgcmlnaHQ6IFsgJ3NsaWRlLWxlZnQnLCAnc2xpZGUtcmlnaHQnIF0sXG4gIGxlZnQ6IFsgJ3NsaWRlLXJpZ2h0JywgJ3NsaWRlLWxlZnQnIF1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlQ29tcG9uZW50KHtcbiAgbmFtZTogJ1FEaWFsb2cnLFxuXG4gIGluaGVyaXRBdHRyczogZmFsc2UsXG5cbiAgcHJvcHM6IHtcbiAgICAuLi51c2VNb2RlbFRvZ2dsZVByb3BzLFxuICAgIC4uLnVzZVRyYW5zaXRpb25Qcm9wcyxcblxuICAgIHRyYW5zaXRpb25TaG93OiBTdHJpbmcsIC8vIG92ZXJyaWRlIHVzZVRyYW5zaXRpb25Qcm9wc1xuICAgIHRyYW5zaXRpb25IaWRlOiBTdHJpbmcsIC8vIG92ZXJyaWRlIHVzZVRyYW5zaXRpb25Qcm9wc1xuXG4gICAgcGVyc2lzdGVudDogQm9vbGVhbixcbiAgICBhdXRvQ2xvc2U6IEJvb2xlYW4sXG4gICAgYWxsb3dGb2N1c091dHNpZGU6IEJvb2xlYW4sXG5cbiAgICBub0VzY0Rpc21pc3M6IEJvb2xlYW4sXG4gICAgbm9CYWNrZHJvcERpc21pc3M6IEJvb2xlYW4sXG4gICAgbm9Sb3V0ZURpc21pc3M6IEJvb2xlYW4sXG4gICAgbm9SZWZvY3VzOiBCb29sZWFuLFxuICAgIG5vRm9jdXM6IEJvb2xlYW4sXG4gICAgbm9TaGFrZTogQm9vbGVhbixcblxuICAgIHNlYW1sZXNzOiBCb29sZWFuLFxuXG4gICAgbWF4aW1pemVkOiBCb29sZWFuLFxuICAgIGZ1bGxXaWR0aDogQm9vbGVhbixcbiAgICBmdWxsSGVpZ2h0OiBCb29sZWFuLFxuXG4gICAgc3F1YXJlOiBCb29sZWFuLFxuXG4gICAgYmFja2Ryb3BGaWx0ZXI6IFN0cmluZyxcblxuICAgIHBvc2l0aW9uOiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICBkZWZhdWx0OiAnc3RhbmRhcmQnLFxuICAgICAgdmFsaWRhdG9yOiB2YWwgPT4gdmFsID09PSAnc3RhbmRhcmQnXG4gICAgICAgIHx8IFsgJ3RvcCcsICdib3R0b20nLCAnbGVmdCcsICdyaWdodCcgXS5pbmNsdWRlcyh2YWwpXG4gICAgfVxuICB9LFxuXG4gIGVtaXRzOiBbXG4gICAgLi4udXNlTW9kZWxUb2dnbGVFbWl0cyxcbiAgICAnc2hha2UnLCAnY2xpY2snLCAnZXNjYXBlS2V5J1xuICBdLFxuXG4gIHNldHVwIChwcm9wcywgeyBzbG90cywgZW1pdCwgYXR0cnMgfSkge1xuICAgIGNvbnN0IHZtID0gZ2V0Q3VycmVudEluc3RhbmNlKClcblxuICAgIGNvbnN0IGlubmVyUmVmID0gcmVmKG51bGwpXG4gICAgY29uc3Qgc2hvd2luZyA9IHJlZihmYWxzZSlcbiAgICBjb25zdCBhbmltYXRpbmcgPSByZWYoZmFsc2UpXG5cbiAgICBsZXQgc2hha2VUaW1lb3V0ID0gbnVsbCwgcmVmb2N1c1RhcmdldCA9IG51bGwsIGlzTWF4aW1pemVkLCBhdm9pZEF1dG9DbG9zZVxuXG4gICAgY29uc3QgaGlkZU9uUm91dGVDaGFuZ2UgPSBjb21wdXRlZCgoKSA9PlxuICAgICAgcHJvcHMucGVyc2lzdGVudCAhPT0gdHJ1ZVxuICAgICAgJiYgcHJvcHMubm9Sb3V0ZURpc21pc3MgIT09IHRydWVcbiAgICAgICYmIHByb3BzLnNlYW1sZXNzICE9PSB0cnVlXG4gICAgKVxuXG4gICAgY29uc3QgeyBwcmV2ZW50Qm9keVNjcm9sbCB9ID0gdXNlUHJldmVudFNjcm9sbCgpXG4gICAgY29uc3QgeyByZWdpc3RlclRpbWVvdXQgfSA9IHVzZVRpbWVvdXQoKVxuICAgIGNvbnN0IHsgcmVnaXN0ZXJUaWNrLCByZW1vdmVUaWNrIH0gPSB1c2VUaWNrKClcblxuICAgIGNvbnN0IHsgdHJhbnNpdGlvblByb3BzLCB0cmFuc2l0aW9uU3R5bGUgfSA9IHVzZVRyYW5zaXRpb24oXG4gICAgICBwcm9wcyxcbiAgICAgICgpID0+IGRlZmF1bHRUcmFuc2l0aW9uc1sgcHJvcHMucG9zaXRpb24gXVsgMCBdLFxuICAgICAgKCkgPT4gZGVmYXVsdFRyYW5zaXRpb25zWyBwcm9wcy5wb3NpdGlvbiBdWyAxIF1cbiAgICApXG5cbiAgICBjb25zdCBiYWNrZHJvcFN0eWxlID0gY29tcHV0ZWQoKCkgPT4gKFxuICAgICAgdHJhbnNpdGlvblN0eWxlLnZhbHVlXG4gICAgICArIChcbiAgICAgICAgcHJvcHMuYmFja2Ryb3BGaWx0ZXIgIT09IHZvaWQgMFxuICAgICAgICAgIC8vIFNhZmFyaSByZXF1aXJlcyB0aGUgLXdlYmtpdCBwcmVmaXhcbiAgICAgICAgICA/IGA7YmFja2Ryb3AtZmlsdGVyOiR7IHByb3BzLmJhY2tkcm9wRmlsdGVyIH07LXdlYmtpdC1iYWNrZHJvcC1maWx0ZXI6JHsgcHJvcHMuYmFja2Ryb3BGaWx0ZXIgfWBcbiAgICAgICAgICA6ICcnXG4gICAgICApXG4gICAgKSlcblxuICAgIGNvbnN0IHsgc2hvd1BvcnRhbCwgaGlkZVBvcnRhbCwgcG9ydGFsSXNBY2Nlc3NpYmxlLCByZW5kZXJQb3J0YWwgfSA9IHVzZVBvcnRhbChcbiAgICAgIHZtLCBpbm5lclJlZiwgcmVuZGVyUG9ydGFsQ29udGVudCwgJ2RpYWxvZydcbiAgICApXG5cbiAgICBjb25zdCB7IGhpZGUgfSA9IHVzZU1vZGVsVG9nZ2xlKHtcbiAgICAgIHNob3dpbmcsXG4gICAgICBoaWRlT25Sb3V0ZUNoYW5nZSxcbiAgICAgIGhhbmRsZVNob3csXG4gICAgICBoYW5kbGVIaWRlLFxuICAgICAgcHJvY2Vzc09uTW91bnQ6IHRydWVcbiAgICB9KVxuXG4gICAgY29uc3QgeyBhZGRUb0hpc3RvcnksIHJlbW92ZUZyb21IaXN0b3J5IH0gPSB1c2VIaXN0b3J5KHNob3dpbmcsIGhpZGUsIGhpZGVPblJvdXRlQ2hhbmdlKVxuXG4gICAgY29uc3QgY2xhc3NlcyA9IGNvbXB1dGVkKCgpID0+XG4gICAgICAncS1kaWFsb2dfX2lubmVyIGZsZXggbm8tcG9pbnRlci1ldmVudHMnXG4gICAgICArIGAgcS1kaWFsb2dfX2lubmVyLS0keyBwcm9wcy5tYXhpbWl6ZWQgPT09IHRydWUgPyAnbWF4aW1pemVkJyA6ICdtaW5pbWl6ZWQnIH1gXG4gICAgICArIGAgcS1kaWFsb2dfX2lubmVyLS0keyBwcm9wcy5wb3NpdGlvbiB9ICR7IHBvc2l0aW9uQ2xhc3NbIHByb3BzLnBvc2l0aW9uIF0gfWBcbiAgICAgICsgKGFuaW1hdGluZy52YWx1ZSA9PT0gdHJ1ZSA/ICcgcS1kaWFsb2dfX2lubmVyLS1hbmltYXRpbmcnIDogJycpXG4gICAgICArIChwcm9wcy5mdWxsV2lkdGggPT09IHRydWUgPyAnIHEtZGlhbG9nX19pbm5lci0tZnVsbHdpZHRoJyA6ICcnKVxuICAgICAgKyAocHJvcHMuZnVsbEhlaWdodCA9PT0gdHJ1ZSA/ICcgcS1kaWFsb2dfX2lubmVyLS1mdWxsaGVpZ2h0JyA6ICcnKVxuICAgICAgKyAocHJvcHMuc3F1YXJlID09PSB0cnVlID8gJyBxLWRpYWxvZ19faW5uZXItLXNxdWFyZScgOiAnJylcbiAgICApXG5cbiAgICBjb25zdCB1c2VCYWNrZHJvcCA9IGNvbXB1dGVkKCgpID0+IHNob3dpbmcudmFsdWUgPT09IHRydWUgJiYgcHJvcHMuc2VhbWxlc3MgIT09IHRydWUpXG5cbiAgICBjb25zdCBvbkV2ZW50cyA9IGNvbXB1dGVkKCgpID0+IChcbiAgICAgIHByb3BzLmF1dG9DbG9zZSA9PT0gdHJ1ZVxuICAgICAgICA/IHsgb25DbGljazogb25BdXRvQ2xvc2UgfVxuICAgICAgICA6IHt9XG4gICAgKSlcblxuICAgIGNvbnN0IHJvb3RDbGFzc2VzID0gY29tcHV0ZWQoKCkgPT4gW1xuICAgICAgJ3EtZGlhbG9nIGZ1bGxzY3JlZW4gbm8tcG9pbnRlci1ldmVudHMgJ1xuICAgICAgICArIGBxLWRpYWxvZy0tJHsgdXNlQmFja2Ryb3AudmFsdWUgPT09IHRydWUgPyAnbW9kYWwnIDogJ3NlYW1sZXNzJyB9YCxcbiAgICAgIGF0dHJzLmNsYXNzXG4gICAgXSlcblxuICAgIHdhdGNoKCgpID0+IHByb3BzLm1heGltaXplZCwgc3RhdGUgPT4ge1xuICAgICAgc2hvd2luZy52YWx1ZSA9PT0gdHJ1ZSAmJiB1cGRhdGVNYXhpbWl6ZWQoc3RhdGUpXG4gICAgfSlcblxuICAgIHdhdGNoKHVzZUJhY2tkcm9wLCB2YWwgPT4ge1xuICAgICAgcHJldmVudEJvZHlTY3JvbGwodmFsKVxuXG4gICAgICBpZiAodmFsID09PSB0cnVlKSB7XG4gICAgICAgIGFkZEZvY3Vzb3V0KG9uRm9jdXNDaGFuZ2UpXG4gICAgICAgIGFkZEVzY2FwZUtleShvbkVzY2FwZUtleSlcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICByZW1vdmVGb2N1c291dChvbkZvY3VzQ2hhbmdlKVxuICAgICAgICByZW1vdmVFc2NhcGVLZXkob25Fc2NhcGVLZXkpXG4gICAgICB9XG4gICAgfSlcblxuICAgIGZ1bmN0aW9uIGhhbmRsZVNob3cgKGV2dCkge1xuICAgICAgYWRkVG9IaXN0b3J5KClcblxuICAgICAgcmVmb2N1c1RhcmdldCA9IHByb3BzLm5vUmVmb2N1cyA9PT0gZmFsc2UgJiYgZG9jdW1lbnQuYWN0aXZlRWxlbWVudCAhPT0gbnVsbFxuICAgICAgICA/IGRvY3VtZW50LmFjdGl2ZUVsZW1lbnRcbiAgICAgICAgOiBudWxsXG5cbiAgICAgIHVwZGF0ZU1heGltaXplZChwcm9wcy5tYXhpbWl6ZWQpXG4gICAgICBzaG93UG9ydGFsKClcbiAgICAgIGFuaW1hdGluZy52YWx1ZSA9IHRydWVcblxuICAgICAgaWYgKHByb3BzLm5vRm9jdXMgIT09IHRydWUpIHtcbiAgICAgICAgZG9jdW1lbnQuYWN0aXZlRWxlbWVudCAhPT0gbnVsbCAmJiBkb2N1bWVudC5hY3RpdmVFbGVtZW50LmJsdXIoKVxuICAgICAgICByZWdpc3RlclRpY2soZm9jdXMpXG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgcmVtb3ZlVGljaygpXG4gICAgICB9XG5cbiAgICAgIC8vIHNob3VsZCByZW1vdmVUaW1lb3V0KCkgaWYgdGhpcyBnZXRzIHJlbW92ZWRcbiAgICAgIHJlZ2lzdGVyVGltZW91dCgoKSA9PiB7XG4gICAgICAgIGlmICh2bS5wcm94eS4kcS5wbGF0Zm9ybS5pcy5pb3MgPT09IHRydWUpIHtcbiAgICAgICAgICBpZiAocHJvcHMuc2VhbWxlc3MgIT09IHRydWUgJiYgZG9jdW1lbnQuYWN0aXZlRWxlbWVudCkge1xuICAgICAgICAgICAgY29uc3RcbiAgICAgICAgICAgICAgeyB0b3AsIGJvdHRvbSB9ID0gZG9jdW1lbnQuYWN0aXZlRWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSxcbiAgICAgICAgICAgICAgeyBpbm5lckhlaWdodCB9ID0gd2luZG93LFxuICAgICAgICAgICAgICBoZWlnaHQgPSB3aW5kb3cudmlzdWFsVmlld3BvcnQgIT09IHZvaWQgMFxuICAgICAgICAgICAgICAgID8gd2luZG93LnZpc3VhbFZpZXdwb3J0LmhlaWdodFxuICAgICAgICAgICAgICAgIDogaW5uZXJIZWlnaHRcblxuICAgICAgICAgICAgaWYgKHRvcCA+IDAgJiYgYm90dG9tID4gaGVpZ2h0IC8gMikge1xuICAgICAgICAgICAgICBkb2N1bWVudC5zY3JvbGxpbmdFbGVtZW50LnNjcm9sbFRvcCA9IE1hdGgubWluKFxuICAgICAgICAgICAgICAgIGRvY3VtZW50LnNjcm9sbGluZ0VsZW1lbnQuc2Nyb2xsSGVpZ2h0IC0gaGVpZ2h0LFxuICAgICAgICAgICAgICAgIGJvdHRvbSA+PSBpbm5lckhlaWdodFxuICAgICAgICAgICAgICAgICAgPyBJbmZpbml0eVxuICAgICAgICAgICAgICAgICAgOiBNYXRoLmNlaWwoZG9jdW1lbnQuc2Nyb2xsaW5nRWxlbWVudC5zY3JvbGxUb3AgKyBib3R0b20gLSBoZWlnaHQgLyAyKVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQuc2Nyb2xsSW50b1ZpZXcoKVxuICAgICAgICAgIH1cblxuICAgICAgICAgIC8vIHJlcXVpcmVkIGluIG9yZGVyIHRvIGF2b2lkIHRoZSBcImRvdWJsZS10YXAgbmVlZGVkXCIgaXNzdWVcbiAgICAgICAgICBhdm9pZEF1dG9DbG9zZSA9IHRydWVcbiAgICAgICAgICBpbm5lclJlZi52YWx1ZS5jbGljaygpXG4gICAgICAgICAgYXZvaWRBdXRvQ2xvc2UgPSBmYWxzZVxuICAgICAgICB9XG5cbiAgICAgICAgc2hvd1BvcnRhbCh0cnVlKSAvLyBkb25lIHNob3dpbmcgcG9ydGFsXG4gICAgICAgIGFuaW1hdGluZy52YWx1ZSA9IGZhbHNlXG4gICAgICAgIGVtaXQoJ3Nob3cnLCBldnQpXG4gICAgICB9LCBwcm9wcy50cmFuc2l0aW9uRHVyYXRpb24pXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaGFuZGxlSGlkZSAoZXZ0KSB7XG4gICAgICByZW1vdmVUaWNrKClcbiAgICAgIHJlbW92ZUZyb21IaXN0b3J5KClcbiAgICAgIGNsZWFudXAodHJ1ZSlcbiAgICAgIGFuaW1hdGluZy52YWx1ZSA9IHRydWVcbiAgICAgIGhpZGVQb3J0YWwoKVxuXG4gICAgICBpZiAocmVmb2N1c1RhcmdldCAhPT0gbnVsbCkge1xuICAgICAgICAoKGV2dCAmJiBldnQudHlwZS5pbmRleE9mKCdrZXknKSA9PT0gMFxuICAgICAgICAgID8gcmVmb2N1c1RhcmdldC5jbG9zZXN0KCdbdGFiaW5kZXhdOm5vdChbdGFiaW5kZXhePVwiLVwiXSknKVxuICAgICAgICAgIDogdm9pZCAwXG4gICAgICAgICkgfHwgcmVmb2N1c1RhcmdldCkuZm9jdXMoKVxuICAgICAgICByZWZvY3VzVGFyZ2V0ID0gbnVsbFxuICAgICAgfVxuXG4gICAgICAvLyBzaG91bGQgcmVtb3ZlVGltZW91dCgpIGlmIHRoaXMgZ2V0cyByZW1vdmVkXG4gICAgICByZWdpc3RlclRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBoaWRlUG9ydGFsKHRydWUpIC8vIGRvbmUgaGlkaW5nLCBub3cgZGVzdHJveVxuICAgICAgICBhbmltYXRpbmcudmFsdWUgPSBmYWxzZVxuICAgICAgICBlbWl0KCdoaWRlJywgZXZ0KVxuICAgICAgfSwgcHJvcHMudHJhbnNpdGlvbkR1cmF0aW9uKVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGZvY3VzIChzZWxlY3Rvcikge1xuICAgICAgYWRkRm9jdXNGbigoKSA9PiB7XG4gICAgICAgIGxldCBub2RlID0gaW5uZXJSZWYudmFsdWVcblxuICAgICAgICBpZiAobm9kZSA9PT0gbnVsbCB8fCBub2RlLmNvbnRhaW5zKGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQpID09PSB0cnVlKSB7XG4gICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cblxuICAgICAgICBub2RlID0gKHNlbGVjdG9yICE9PSAnJyA/IG5vZGUucXVlcnlTZWxlY3RvcihzZWxlY3RvcikgOiBudWxsKVxuICAgICAgICAgIHx8IG5vZGUucXVlcnlTZWxlY3RvcignW2F1dG9mb2N1c11bdGFiaW5kZXhdLCBbZGF0YS1hdXRvZm9jdXNdW3RhYmluZGV4XScpXG4gICAgICAgICAgfHwgbm9kZS5xdWVyeVNlbGVjdG9yKCdbYXV0b2ZvY3VzXSBbdGFiaW5kZXhdLCBbZGF0YS1hdXRvZm9jdXNdIFt0YWJpbmRleF0nKVxuICAgICAgICAgIHx8IG5vZGUucXVlcnlTZWxlY3RvcignW2F1dG9mb2N1c10sIFtkYXRhLWF1dG9mb2N1c10nKVxuICAgICAgICAgIHx8IG5vZGVcbiAgICAgICAgbm9kZS5mb2N1cyh7IHByZXZlbnRTY3JvbGw6IHRydWUgfSlcbiAgICAgIH0pXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc2hha2UgKGZvY3VzVGFyZ2V0KSB7XG4gICAgICBpZiAoZm9jdXNUYXJnZXQgJiYgdHlwZW9mIGZvY3VzVGFyZ2V0LmZvY3VzID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIGZvY3VzVGFyZ2V0LmZvY3VzKHsgcHJldmVudFNjcm9sbDogdHJ1ZSB9KVxuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIGZvY3VzKClcbiAgICAgIH1cblxuICAgICAgZW1pdCgnc2hha2UnKVxuXG4gICAgICBjb25zdCBub2RlID0gaW5uZXJSZWYudmFsdWVcblxuICAgICAgaWYgKG5vZGUgIT09IG51bGwpIHtcbiAgICAgICAgbm9kZS5jbGFzc0xpc3QucmVtb3ZlKCdxLWFuaW1hdGUtLXNjYWxlJylcbiAgICAgICAgbm9kZS5jbGFzc0xpc3QuYWRkKCdxLWFuaW1hdGUtLXNjYWxlJylcbiAgICAgICAgc2hha2VUaW1lb3V0ICE9PSBudWxsICYmIGNsZWFyVGltZW91dChzaGFrZVRpbWVvdXQpXG4gICAgICAgIHNoYWtlVGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgIHNoYWtlVGltZW91dCA9IG51bGxcbiAgICAgICAgICBpZiAoaW5uZXJSZWYudmFsdWUgIT09IG51bGwpIHtcbiAgICAgICAgICAgIG5vZGUuY2xhc3NMaXN0LnJlbW92ZSgncS1hbmltYXRlLS1zY2FsZScpXG4gICAgICAgICAgICAvLyBzb21lIHBsYXRmb3JtcyAobGlrZSBkZXNrdG9wIENocm9tZSlcbiAgICAgICAgICAgIC8vIHJlcXVpcmUgY2FsbGluZyBmb2N1cygpIGFnYWluXG4gICAgICAgICAgICBmb2N1cygpXG4gICAgICAgICAgfVxuICAgICAgICB9LCAxNzApXG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gb25Fc2NhcGVLZXkgKCkge1xuICAgICAgaWYgKHByb3BzLnNlYW1sZXNzICE9PSB0cnVlKSB7XG4gICAgICAgIGlmIChwcm9wcy5wZXJzaXN0ZW50ID09PSB0cnVlIHx8IHByb3BzLm5vRXNjRGlzbWlzcyA9PT0gdHJ1ZSkge1xuICAgICAgICAgIHByb3BzLm1heGltaXplZCAhPT0gdHJ1ZSAmJiBwcm9wcy5ub1NoYWtlICE9PSB0cnVlICYmIHNoYWtlKClcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICBlbWl0KCdlc2NhcGVLZXknKVxuICAgICAgICAgIGhpZGUoKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY2xlYW51cCAoaGlkaW5nKSB7XG4gICAgICBpZiAoc2hha2VUaW1lb3V0ICE9PSBudWxsKSB7XG4gICAgICAgIGNsZWFyVGltZW91dChzaGFrZVRpbWVvdXQpXG4gICAgICAgIHNoYWtlVGltZW91dCA9IG51bGxcbiAgICAgIH1cblxuICAgICAgaWYgKGhpZGluZyA9PT0gdHJ1ZSB8fCBzaG93aW5nLnZhbHVlID09PSB0cnVlKSB7XG4gICAgICAgIHVwZGF0ZU1heGltaXplZChmYWxzZSlcblxuICAgICAgICBpZiAocHJvcHMuc2VhbWxlc3MgIT09IHRydWUpIHtcbiAgICAgICAgICBwcmV2ZW50Qm9keVNjcm9sbChmYWxzZSlcbiAgICAgICAgICByZW1vdmVGb2N1c291dChvbkZvY3VzQ2hhbmdlKVxuICAgICAgICAgIHJlbW92ZUVzY2FwZUtleShvbkVzY2FwZUtleSlcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoaGlkaW5nICE9PSB0cnVlKSB7XG4gICAgICAgIHJlZm9jdXNUYXJnZXQgPSBudWxsXG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gdXBkYXRlTWF4aW1pemVkIChhY3RpdmUpIHtcbiAgICAgIGlmIChhY3RpdmUgPT09IHRydWUpIHtcbiAgICAgICAgaWYgKGlzTWF4aW1pemVkICE9PSB0cnVlKSB7XG4gICAgICAgICAgbWF4aW1pemVkTW9kYWxzIDwgMSAmJiBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoJ3EtYm9keS0tZGlhbG9nJylcbiAgICAgICAgICBtYXhpbWl6ZWRNb2RhbHMrK1xuXG4gICAgICAgICAgaXNNYXhpbWl6ZWQgPSB0cnVlXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGVsc2UgaWYgKGlzTWF4aW1pemVkID09PSB0cnVlKSB7XG4gICAgICAgIGlmIChtYXhpbWl6ZWRNb2RhbHMgPCAyKSB7XG4gICAgICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKCdxLWJvZHktLWRpYWxvZycpXG4gICAgICAgIH1cblxuICAgICAgICBtYXhpbWl6ZWRNb2RhbHMtLVxuICAgICAgICBpc01heGltaXplZCA9IGZhbHNlXG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gb25BdXRvQ2xvc2UgKGUpIHtcbiAgICAgIGlmIChhdm9pZEF1dG9DbG9zZSAhPT0gdHJ1ZSkge1xuICAgICAgICBoaWRlKGUpXG4gICAgICAgIGVtaXQoJ2NsaWNrJywgZSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBvbkJhY2tkcm9wQ2xpY2sgKGUpIHtcbiAgICAgIGlmIChwcm9wcy5wZXJzaXN0ZW50ICE9PSB0cnVlICYmIHByb3BzLm5vQmFja2Ryb3BEaXNtaXNzICE9PSB0cnVlKSB7XG4gICAgICAgIGhpZGUoZSlcbiAgICAgIH1cbiAgICAgIGVsc2UgaWYgKHByb3BzLm5vU2hha2UgIT09IHRydWUpIHtcbiAgICAgICAgc2hha2UoKVxuICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIG9uRm9jdXNDaGFuZ2UgKGV2dCkge1xuICAgICAgLy8gdGhlIGZvY3VzIGlzIG5vdCBpbiBhIHZ1ZSBjaGlsZCBjb21wb25lbnRcbiAgICAgIGlmIChcbiAgICAgICAgcHJvcHMuYWxsb3dGb2N1c091dHNpZGUgIT09IHRydWVcbiAgICAgICAgJiYgcG9ydGFsSXNBY2Nlc3NpYmxlLnZhbHVlID09PSB0cnVlXG4gICAgICAgICYmIGNoaWxkSGFzRm9jdXMoaW5uZXJSZWYudmFsdWUsIGV2dC50YXJnZXQpICE9PSB0cnVlXG4gICAgICApIHtcbiAgICAgICAgZm9jdXMoJ1t0YWJpbmRleF06bm90KFt0YWJpbmRleD1cIi0xXCJdKScpXG4gICAgICB9XG4gICAgfVxuXG4gICAgT2JqZWN0LmFzc2lnbih2bS5wcm94eSwge1xuICAgICAgLy8gZXhwb3NlIHB1YmxpYyBtZXRob2RzXG4gICAgICBmb2N1cywgc2hha2UsXG5cbiAgICAgIC8vIHByaXZhdGUgYnV0IG5lZWRlZCBieSBRU2VsZWN0XG4gICAgICBfX3VwZGF0ZVJlZm9jdXNUYXJnZXQgKHRhcmdldCkge1xuICAgICAgICByZWZvY3VzVGFyZ2V0ID0gdGFyZ2V0IHx8IG51bGxcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgb25CZWZvcmVVbm1vdW50KGNsZWFudXApXG5cbiAgICBmdW5jdGlvbiByZW5kZXJQb3J0YWxDb250ZW50ICgpIHtcbiAgICAgIHJldHVybiBoKCdkaXYnLCB7XG4gICAgICAgIHJvbGU6ICdkaWFsb2cnLFxuICAgICAgICAnYXJpYS1tb2RhbCc6IHVzZUJhY2tkcm9wLnZhbHVlID09PSB0cnVlID8gJ3RydWUnIDogJ2ZhbHNlJyxcbiAgICAgICAgLi4uYXR0cnMsXG4gICAgICAgIGNsYXNzOiByb290Q2xhc3Nlcy52YWx1ZVxuICAgICAgfSwgW1xuICAgICAgICBoKFRyYW5zaXRpb24sIHtcbiAgICAgICAgICBuYW1lOiAncS10cmFuc2l0aW9uLS1mYWRlJyxcbiAgICAgICAgICBhcHBlYXI6IHRydWVcbiAgICAgICAgfSwgKCkgPT4gKFxuICAgICAgICAgIHVzZUJhY2tkcm9wLnZhbHVlID09PSB0cnVlXG4gICAgICAgICAgICA/IGgoJ2RpdicsIHtcbiAgICAgICAgICAgICAgY2xhc3M6ICdxLWRpYWxvZ19fYmFja2Ryb3AgZml4ZWQtZnVsbCcsXG4gICAgICAgICAgICAgIHN0eWxlOiBiYWNrZHJvcFN0eWxlLnZhbHVlLFxuICAgICAgICAgICAgICAnYXJpYS1oaWRkZW4nOiAndHJ1ZScsXG4gICAgICAgICAgICAgIHRhYmluZGV4OiAtMSxcbiAgICAgICAgICAgICAgb25DbGljazogb25CYWNrZHJvcENsaWNrXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgOiBudWxsXG4gICAgICAgICkpLFxuXG4gICAgICAgIGgoXG4gICAgICAgICAgVHJhbnNpdGlvbixcbiAgICAgICAgICB0cmFuc2l0aW9uUHJvcHMudmFsdWUsXG4gICAgICAgICAgKCkgPT4gKFxuICAgICAgICAgICAgc2hvd2luZy52YWx1ZSA9PT0gdHJ1ZVxuICAgICAgICAgICAgICA/IGgoJ2RpdicsIHtcbiAgICAgICAgICAgICAgICByZWY6IGlubmVyUmVmLFxuICAgICAgICAgICAgICAgIGNsYXNzOiBjbGFzc2VzLnZhbHVlLFxuICAgICAgICAgICAgICAgIHN0eWxlOiB0cmFuc2l0aW9uU3R5bGUudmFsdWUsXG4gICAgICAgICAgICAgICAgdGFiaW5kZXg6IC0xLFxuICAgICAgICAgICAgICAgIC4uLm9uRXZlbnRzLnZhbHVlXG4gICAgICAgICAgICAgIH0sIGhTbG90KHNsb3RzLmRlZmF1bHQpKVxuICAgICAgICAgICAgICA6IG51bGxcbiAgICAgICAgICApXG4gICAgICAgIClcbiAgICAgIF0pXG4gICAgfVxuXG4gICAgcmV0dXJuIHJlbmRlclBvcnRhbFxuICB9XG59KVxuIiwiaW1wb3J0IHsgaCwgcmVmLCBjb21wdXRlZCwgd2F0Y2gsIG9uQmVmb3JlVXBkYXRlLCBvblVwZGF0ZWQsIG9uQmVmb3JlVW5tb3VudCwgbmV4dFRpY2ssIGdldEN1cnJlbnRJbnN0YW5jZSB9IGZyb20gJ3Z1ZSdcblxuaW1wb3J0IFFGaWVsZCBmcm9tICcuLi9maWVsZC9RRmllbGQuanMnXG5pbXBvcnQgUUljb24gZnJvbSAnLi4vaWNvbi9RSWNvbi5qcydcbmltcG9ydCBRQ2hpcCBmcm9tICcuLi9jaGlwL1FDaGlwLmpzJ1xuXG5pbXBvcnQgUUl0ZW0gZnJvbSAnLi4vaXRlbS9RSXRlbS5qcydcbmltcG9ydCBRSXRlbVNlY3Rpb24gZnJvbSAnLi4vaXRlbS9RSXRlbVNlY3Rpb24uanMnXG5pbXBvcnQgUUl0ZW1MYWJlbCBmcm9tICcuLi9pdGVtL1FJdGVtTGFiZWwuanMnXG5cbmltcG9ydCBRTWVudSBmcm9tICcuLi9tZW51L1FNZW51LmpzJ1xuaW1wb3J0IFFEaWFsb2cgZnJvbSAnLi4vZGlhbG9nL1FEaWFsb2cuanMnXG5cbmltcG9ydCB1c2VGaWVsZCwgeyB1c2VGaWVsZFN0YXRlLCB1c2VGaWVsZFByb3BzLCB1c2VGaWVsZEVtaXRzLCBmaWVsZFZhbHVlSXNGaWxsZWQgfSBmcm9tICcuLi8uLi9jb21wb3NhYmxlcy9wcml2YXRlL3VzZS1maWVsZC5qcydcbmltcG9ydCB7IHVzZVZpcnR1YWxTY3JvbGwsIHVzZVZpcnR1YWxTY3JvbGxQcm9wcyB9IGZyb20gJy4uL3ZpcnR1YWwtc2Nyb2xsL3VzZS12aXJ0dWFsLXNjcm9sbC5qcydcbmltcG9ydCB7IHVzZUZvcm1Qcm9wcywgdXNlRm9ybUlucHV0TmFtZUF0dHIgfSBmcm9tICcuLi8uLi9jb21wb3NhYmxlcy9wcml2YXRlL3VzZS1mb3JtLmpzJ1xuaW1wb3J0IHVzZUtleUNvbXBvc2l0aW9uIGZyb20gJy4uLy4uL2NvbXBvc2FibGVzL3ByaXZhdGUvdXNlLWtleS1jb21wb3NpdGlvbi5qcydcblxuaW1wb3J0IHsgY3JlYXRlQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vdXRpbHMvcHJpdmF0ZS9jcmVhdGUuanMnXG5pbXBvcnQgeyBpc0RlZXBFcXVhbCB9IGZyb20gJy4uLy4uL3V0aWxzL2lzLmpzJ1xuaW1wb3J0IHsgc3RvcCwgcHJldmVudCwgc3RvcEFuZFByZXZlbnQgfSBmcm9tICcuLi8uLi91dGlscy9ldmVudC5qcydcbmltcG9ydCB7IG5vcm1hbGl6ZVRvSW50ZXJ2YWwgfSBmcm9tICcuLi8uLi91dGlscy9mb3JtYXQuanMnXG5pbXBvcnQgeyBzaG91bGRJZ25vcmVLZXksIGlzS2V5Q29kZSB9IGZyb20gJy4uLy4uL3V0aWxzL3ByaXZhdGUva2V5LWNvbXBvc2l0aW9uLmpzJ1xuaW1wb3J0IHsgaE1lcmdlU2xvdCB9IGZyb20gJy4uLy4uL3V0aWxzL3ByaXZhdGUvcmVuZGVyLmpzJ1xuXG5jb25zdCB2YWxpZGF0ZU5ld1ZhbHVlTW9kZSA9IHYgPT4gWyAnYWRkJywgJ2FkZC11bmlxdWUnLCAndG9nZ2xlJyBdLmluY2x1ZGVzKHYpXG5jb25zdCByZUVzY2FwZUxpc3QgPSAnLiorP14ke30oKXxbXVxcXFwnXG5jb25zdCBmaWVsZFByb3BzTGlzdCA9IE9iamVjdC5rZXlzKHVzZUZpZWxkUHJvcHMpXG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUNvbXBvbmVudCh7XG4gIG5hbWU6ICdRU2VsZWN0JyxcblxuICBpbmhlcml0QXR0cnM6IGZhbHNlLFxuXG4gIHByb3BzOiB7XG4gICAgLi4udXNlVmlydHVhbFNjcm9sbFByb3BzLFxuICAgIC4uLnVzZUZvcm1Qcm9wcyxcbiAgICAuLi51c2VGaWVsZFByb3BzLFxuXG4gICAgbW9kZWxWYWx1ZToge1xuICAgICAgcmVxdWlyZWQ6IHRydWVcbiAgICB9LFxuXG4gICAgbXVsdGlwbGU6IEJvb2xlYW4sXG5cbiAgICBkaXNwbGF5VmFsdWU6IFsgU3RyaW5nLCBOdW1iZXIgXSxcbiAgICBkaXNwbGF5VmFsdWVIdG1sOiBCb29sZWFuLFxuICAgIGRyb3Bkb3duSWNvbjogU3RyaW5nLFxuXG4gICAgb3B0aW9uczoge1xuICAgICAgdHlwZTogQXJyYXksXG4gICAgICBkZWZhdWx0OiAoKSA9PiBbXVxuICAgIH0sXG5cbiAgICBvcHRpb25WYWx1ZTogWyBGdW5jdGlvbiwgU3RyaW5nIF0sXG4gICAgb3B0aW9uTGFiZWw6IFsgRnVuY3Rpb24sIFN0cmluZyBdLFxuICAgIG9wdGlvbkRpc2FibGU6IFsgRnVuY3Rpb24sIFN0cmluZyBdLFxuXG4gICAgaGlkZVNlbGVjdGVkOiBCb29sZWFuLFxuICAgIGhpZGVEcm9wZG93bkljb246IEJvb2xlYW4sXG4gICAgZmlsbElucHV0OiBCb29sZWFuLFxuXG4gICAgbWF4VmFsdWVzOiBbIE51bWJlciwgU3RyaW5nIF0sXG5cbiAgICBvcHRpb25zRGVuc2U6IEJvb2xlYW4sXG4gICAgb3B0aW9uc0Rhcms6IHtcbiAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICBkZWZhdWx0OiBudWxsXG4gICAgfSxcbiAgICBvcHRpb25zU2VsZWN0ZWRDbGFzczogU3RyaW5nLFxuICAgIG9wdGlvbnNIdG1sOiBCb29sZWFuLFxuXG4gICAgb3B0aW9uc0NvdmVyOiBCb29sZWFuLFxuXG4gICAgbWVudVNocmluazogQm9vbGVhbixcbiAgICBtZW51QW5jaG9yOiBTdHJpbmcsXG4gICAgbWVudVNlbGY6IFN0cmluZyxcbiAgICBtZW51T2Zmc2V0OiBBcnJheSxcblxuICAgIHBvcHVwQ29udGVudENsYXNzOiBTdHJpbmcsXG4gICAgcG9wdXBDb250ZW50U3R5bGU6IFsgU3RyaW5nLCBBcnJheSwgT2JqZWN0IF0sXG4gICAgcG9wdXBOb1JvdXRlRGlzbWlzczogQm9vbGVhbixcblxuICAgIHVzZUlucHV0OiBCb29sZWFuLFxuICAgIHVzZUNoaXBzOiBCb29sZWFuLFxuXG4gICAgbmV3VmFsdWVNb2RlOiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICB2YWxpZGF0b3I6IHZhbGlkYXRlTmV3VmFsdWVNb2RlXG4gICAgfSxcblxuICAgIG1hcE9wdGlvbnM6IEJvb2xlYW4sXG4gICAgZW1pdFZhbHVlOiBCb29sZWFuLFxuXG4gICAgaW5wdXREZWJvdW5jZToge1xuICAgICAgdHlwZTogWyBOdW1iZXIsIFN0cmluZyBdLFxuICAgICAgZGVmYXVsdDogNTAwXG4gICAgfSxcblxuICAgIGlucHV0Q2xhc3M6IFsgQXJyYXksIFN0cmluZywgT2JqZWN0IF0sXG4gICAgaW5wdXRTdHlsZTogWyBBcnJheSwgU3RyaW5nLCBPYmplY3QgXSxcblxuICAgIHRhYmluZGV4OiB7XG4gICAgICB0eXBlOiBbIFN0cmluZywgTnVtYmVyIF0sXG4gICAgICBkZWZhdWx0OiAwXG4gICAgfSxcblxuICAgIGF1dG9jb21wbGV0ZTogU3RyaW5nLFxuXG4gICAgdHJhbnNpdGlvblNob3c6IFN0cmluZyxcbiAgICB0cmFuc2l0aW9uSGlkZTogU3RyaW5nLFxuICAgIHRyYW5zaXRpb25EdXJhdGlvbjogWyBTdHJpbmcsIE51bWJlciBdLFxuXG4gICAgYmVoYXZpb3I6IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIHZhbGlkYXRvcjogdiA9PiBbICdkZWZhdWx0JywgJ21lbnUnLCAnZGlhbG9nJyBdLmluY2x1ZGVzKHYpLFxuICAgICAgZGVmYXVsdDogJ2RlZmF1bHQnXG4gICAgfSxcblxuICAgIHZpcnR1YWxTY3JvbGxJdGVtU2l6ZToge1xuICAgICAgdHlwZTogWyBOdW1iZXIsIFN0cmluZyBdLFxuICAgICAgZGVmYXVsdDogdm9pZCAwXG4gICAgfSxcblxuICAgIG9uTmV3VmFsdWU6IEZ1bmN0aW9uLFxuICAgIG9uRmlsdGVyOiBGdW5jdGlvblxuICB9LFxuXG4gIGVtaXRzOiBbXG4gICAgLi4udXNlRmllbGRFbWl0cyxcbiAgICAnYWRkJywgJ3JlbW92ZScsICdpbnB1dFZhbHVlJywgJ25ld1ZhbHVlJyxcbiAgICAna2V5dXAnLCAna2V5cHJlc3MnLCAna2V5ZG93bicsXG4gICAgJ2ZpbHRlckFib3J0J1xuICBdLFxuXG4gIHNldHVwIChwcm9wcywgeyBzbG90cywgZW1pdCB9KSB7XG4gICAgY29uc3QgeyBwcm94eSB9ID0gZ2V0Q3VycmVudEluc3RhbmNlKClcbiAgICBjb25zdCB7ICRxIH0gPSBwcm94eVxuXG4gICAgY29uc3QgbWVudSA9IHJlZihmYWxzZSlcbiAgICBjb25zdCBkaWFsb2cgPSByZWYoZmFsc2UpXG4gICAgY29uc3Qgb3B0aW9uSW5kZXggPSByZWYoLTEpXG4gICAgY29uc3QgaW5wdXRWYWx1ZSA9IHJlZignJylcbiAgICBjb25zdCBkaWFsb2dGaWVsZEZvY3VzZWQgPSByZWYoZmFsc2UpXG4gICAgY29uc3QgaW5uZXJMb2FkaW5nSW5kaWNhdG9yID0gcmVmKGZhbHNlKVxuXG4gICAgbGV0IGZpbHRlclRpbWVyID0gbnVsbCwgaW5wdXRWYWx1ZVRpbWVyID0gbnVsbCxcbiAgICAgIGlubmVyVmFsdWVDYWNoZSxcbiAgICAgIGhhc0RpYWxvZywgdXNlcklucHV0VmFsdWUsIGZpbHRlcklkID0gbnVsbCwgZGVmYXVsdElucHV0VmFsdWUsXG4gICAgICB0cmFuc2l0aW9uU2hvd0NvbXB1dGVkLCBzZWFyY2hCdWZmZXIsIHNlYXJjaEJ1ZmZlckV4cFxuXG4gICAgY29uc3QgaW5wdXRSZWYgPSByZWYobnVsbClcbiAgICBjb25zdCB0YXJnZXRSZWYgPSByZWYobnVsbClcbiAgICBjb25zdCBtZW51UmVmID0gcmVmKG51bGwpXG4gICAgY29uc3QgZGlhbG9nUmVmID0gcmVmKG51bGwpXG4gICAgY29uc3QgbWVudUNvbnRlbnRSZWYgPSByZWYobnVsbClcblxuICAgIGNvbnN0IG5hbWVQcm9wID0gdXNlRm9ybUlucHV0TmFtZUF0dHIocHJvcHMpXG5cbiAgICBjb25zdCBvbkNvbXBvc2l0aW9uID0gdXNlS2V5Q29tcG9zaXRpb24ob25JbnB1dClcblxuICAgIGNvbnN0IHZpcnR1YWxTY3JvbGxMZW5ndGggPSBjb21wdXRlZCgoKSA9PiAoXG4gICAgICBBcnJheS5pc0FycmF5KHByb3BzLm9wdGlvbnMpXG4gICAgICAgID8gcHJvcHMub3B0aW9ucy5sZW5ndGhcbiAgICAgICAgOiAwXG4gICAgKSlcblxuICAgIGNvbnN0IHZpcnR1YWxTY3JvbGxJdGVtU2l6ZUNvbXB1dGVkID0gY29tcHV0ZWQoKCkgPT4gKFxuICAgICAgcHJvcHMudmlydHVhbFNjcm9sbEl0ZW1TaXplID09PSB2b2lkIDBcbiAgICAgICAgPyAocHJvcHMub3B0aW9uc0RlbnNlID09PSB0cnVlID8gMjQgOiA0OClcbiAgICAgICAgOiBwcm9wcy52aXJ0dWFsU2Nyb2xsSXRlbVNpemVcbiAgICApKVxuXG4gICAgY29uc3Qge1xuICAgICAgdmlydHVhbFNjcm9sbFNsaWNlUmFuZ2UsXG4gICAgICB2aXJ0dWFsU2Nyb2xsU2xpY2VTaXplQ29tcHV0ZWQsXG4gICAgICBsb2NhbFJlc2V0VmlydHVhbFNjcm9sbCxcbiAgICAgIHBhZFZpcnR1YWxTY3JvbGwsXG4gICAgICBvblZpcnR1YWxTY3JvbGxFdnQsXG4gICAgICBzY3JvbGxUbyxcbiAgICAgIHNldFZpcnR1YWxTY3JvbGxTaXplXG4gICAgfSA9IHVzZVZpcnR1YWxTY3JvbGwoe1xuICAgICAgdmlydHVhbFNjcm9sbExlbmd0aCwgZ2V0VmlydHVhbFNjcm9sbFRhcmdldCwgZ2V0VmlydHVhbFNjcm9sbEVsLFxuICAgICAgdmlydHVhbFNjcm9sbEl0ZW1TaXplQ29tcHV0ZWRcbiAgICB9KVxuXG4gICAgY29uc3Qgc3RhdGUgPSB1c2VGaWVsZFN0YXRlKClcblxuICAgIGNvbnN0IGlubmVyVmFsdWUgPSBjb21wdXRlZCgoKSA9PiB7XG4gICAgICBjb25zdFxuICAgICAgICBtYXBOdWxsID0gcHJvcHMubWFwT3B0aW9ucyA9PT0gdHJ1ZSAmJiBwcm9wcy5tdWx0aXBsZSAhPT0gdHJ1ZSxcbiAgICAgICAgdmFsID0gcHJvcHMubW9kZWxWYWx1ZSAhPT0gdm9pZCAwICYmIChwcm9wcy5tb2RlbFZhbHVlICE9PSBudWxsIHx8IG1hcE51bGwgPT09IHRydWUpXG4gICAgICAgICAgPyAocHJvcHMubXVsdGlwbGUgPT09IHRydWUgJiYgQXJyYXkuaXNBcnJheShwcm9wcy5tb2RlbFZhbHVlKSA/IHByb3BzLm1vZGVsVmFsdWUgOiBbIHByb3BzLm1vZGVsVmFsdWUgXSlcbiAgICAgICAgICA6IFtdXG5cbiAgICAgIGlmIChwcm9wcy5tYXBPcHRpb25zID09PSB0cnVlICYmIEFycmF5LmlzQXJyYXkocHJvcHMub3B0aW9ucykgPT09IHRydWUpIHtcbiAgICAgICAgY29uc3QgY2FjaGUgPSBwcm9wcy5tYXBPcHRpb25zID09PSB0cnVlICYmIGlubmVyVmFsdWVDYWNoZSAhPT0gdm9pZCAwXG4gICAgICAgICAgPyBpbm5lclZhbHVlQ2FjaGVcbiAgICAgICAgICA6IFtdXG4gICAgICAgIGNvbnN0IHZhbHVlcyA9IHZhbC5tYXAodiA9PiBnZXRPcHRpb24odiwgY2FjaGUpKVxuXG4gICAgICAgIHJldHVybiBwcm9wcy5tb2RlbFZhbHVlID09PSBudWxsICYmIG1hcE51bGwgPT09IHRydWVcbiAgICAgICAgICA/IHZhbHVlcy5maWx0ZXIodiA9PiB2ICE9PSBudWxsKVxuICAgICAgICAgIDogdmFsdWVzXG4gICAgICB9XG5cbiAgICAgIHJldHVybiB2YWxcbiAgICB9KVxuXG4gICAgY29uc3QgaW5uZXJGaWVsZFByb3BzID0gY29tcHV0ZWQoKCkgPT4ge1xuICAgICAgY29uc3QgYWNjID0ge31cbiAgICAgIGZpZWxkUHJvcHNMaXN0LmZvckVhY2goa2V5ID0+IHtcbiAgICAgICAgY29uc3QgdmFsID0gcHJvcHNbIGtleSBdXG4gICAgICAgIGlmICh2YWwgIT09IHZvaWQgMCkge1xuICAgICAgICAgIGFjY1sga2V5IF0gPSB2YWxcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIHJldHVybiBhY2NcbiAgICB9KVxuXG4gICAgY29uc3QgaXNPcHRpb25zRGFyayA9IGNvbXB1dGVkKCgpID0+IChcbiAgICAgIHByb3BzLm9wdGlvbnNEYXJrID09PSBudWxsXG4gICAgICAgID8gc3RhdGUuaXNEYXJrLnZhbHVlXG4gICAgICAgIDogcHJvcHMub3B0aW9uc0RhcmtcbiAgICApKVxuXG4gICAgY29uc3QgaGFzVmFsdWUgPSBjb21wdXRlZCgoKSA9PiBmaWVsZFZhbHVlSXNGaWxsZWQoaW5uZXJWYWx1ZS52YWx1ZSkpXG5cbiAgICBjb25zdCBjb21wdXRlZElucHV0Q2xhc3MgPSBjb21wdXRlZCgoKSA9PiB7XG4gICAgICBsZXQgY2xzID0gJ3EtZmllbGRfX2lucHV0IHEtcGxhY2Vob2xkZXIgY29sJ1xuXG4gICAgICBpZiAocHJvcHMuaGlkZVNlbGVjdGVkID09PSB0cnVlIHx8IGlubmVyVmFsdWUudmFsdWUubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIHJldHVybiBbIGNscywgcHJvcHMuaW5wdXRDbGFzcyBdXG4gICAgICB9XG5cbiAgICAgIGNscyArPSAnIHEtZmllbGRfX2lucHV0LS1wYWRkaW5nJ1xuXG4gICAgICByZXR1cm4gcHJvcHMuaW5wdXRDbGFzcyA9PT0gdm9pZCAwXG4gICAgICAgID8gY2xzXG4gICAgICAgIDogWyBjbHMsIHByb3BzLmlucHV0Q2xhc3MgXVxuICAgIH0pXG5cbiAgICBjb25zdCBtZW51Q29udGVudENsYXNzID0gY29tcHV0ZWQoKCkgPT5cbiAgICAgIChwcm9wcy52aXJ0dWFsU2Nyb2xsSG9yaXpvbnRhbCA9PT0gdHJ1ZSA/ICdxLXZpcnR1YWwtc2Nyb2xsLS1ob3Jpem9udGFsJyA6ICcnKVxuICAgICAgKyAocHJvcHMucG9wdXBDb250ZW50Q2xhc3MgPyAnICcgKyBwcm9wcy5wb3B1cENvbnRlbnRDbGFzcyA6ICcnKVxuICAgIClcblxuICAgIGNvbnN0IG5vT3B0aW9ucyA9IGNvbXB1dGVkKCgpID0+IHZpcnR1YWxTY3JvbGxMZW5ndGgudmFsdWUgPT09IDApXG5cbiAgICBjb25zdCBzZWxlY3RlZFN0cmluZyA9IGNvbXB1dGVkKCgpID0+XG4gICAgICBpbm5lclZhbHVlLnZhbHVlXG4gICAgICAgIC5tYXAob3B0ID0+IGdldE9wdGlvbkxhYmVsLnZhbHVlKG9wdCkpXG4gICAgICAgIC5qb2luKCcsICcpXG4gICAgKVxuXG4gICAgY29uc3QgYXJpYUN1cnJlbnRWYWx1ZSA9IGNvbXB1dGVkKCgpID0+IChwcm9wcy5kaXNwbGF5VmFsdWUgIT09IHZvaWQgMFxuICAgICAgPyBwcm9wcy5kaXNwbGF5VmFsdWVcbiAgICAgIDogc2VsZWN0ZWRTdHJpbmcudmFsdWVcbiAgICApKVxuXG4gICAgY29uc3QgbmVlZHNIdG1sRm4gPSBjb21wdXRlZCgoKSA9PiAoXG4gICAgICBwcm9wcy5vcHRpb25zSHRtbCA9PT0gdHJ1ZVxuICAgICAgICA/ICgpID0+IHRydWVcbiAgICAgICAgOiBvcHQgPT4gb3B0ICE9PSB2b2lkIDAgJiYgb3B0ICE9PSBudWxsICYmIG9wdC5odG1sID09PSB0cnVlXG4gICAgKSlcblxuICAgIGNvbnN0IHZhbHVlQXNIdG1sID0gY29tcHV0ZWQoKCkgPT4gKFxuICAgICAgcHJvcHMuZGlzcGxheVZhbHVlSHRtbCA9PT0gdHJ1ZSB8fCAoXG4gICAgICAgIHByb3BzLmRpc3BsYXlWYWx1ZSA9PT0gdm9pZCAwICYmIChcbiAgICAgICAgICBwcm9wcy5vcHRpb25zSHRtbCA9PT0gdHJ1ZVxuICAgICAgICAgIHx8IGlubmVyVmFsdWUudmFsdWUuc29tZShuZWVkc0h0bWxGbi52YWx1ZSlcbiAgICAgICAgKVxuICAgICAgKVxuICAgICkpXG5cbiAgICBjb25zdCB0YWJpbmRleCA9IGNvbXB1dGVkKCgpID0+IChzdGF0ZS5mb2N1c2VkLnZhbHVlID09PSB0cnVlID8gcHJvcHMudGFiaW5kZXggOiAtMSkpXG5cbiAgICBjb25zdCBjb21ib2JveEF0dHJzID0gY29tcHV0ZWQoKCkgPT4ge1xuICAgICAgY29uc3QgYXR0cnMgPSB7XG4gICAgICAgIHRhYmluZGV4OiBwcm9wcy50YWJpbmRleCxcbiAgICAgICAgcm9sZTogJ2NvbWJvYm94JyxcbiAgICAgICAgJ2FyaWEtbGFiZWwnOiBwcm9wcy5sYWJlbCxcbiAgICAgICAgJ2FyaWEtcmVhZG9ubHknOiBwcm9wcy5yZWFkb25seSA9PT0gdHJ1ZSA/ICd0cnVlJyA6ICdmYWxzZScsXG4gICAgICAgICdhcmlhLWF1dG9jb21wbGV0ZSc6IHByb3BzLnVzZUlucHV0ID09PSB0cnVlID8gJ2xpc3QnIDogJ25vbmUnLFxuICAgICAgICAnYXJpYS1leHBhbmRlZCc6IG1lbnUudmFsdWUgPT09IHRydWUgPyAndHJ1ZScgOiAnZmFsc2UnLFxuICAgICAgICAnYXJpYS1jb250cm9scyc6IGAkeyBzdGF0ZS50YXJnZXRVaWQudmFsdWUgfV9sYmBcbiAgICAgIH1cblxuICAgICAgaWYgKG9wdGlvbkluZGV4LnZhbHVlID49IDApIHtcbiAgICAgICAgYXR0cnNbICdhcmlhLWFjdGl2ZWRlc2NlbmRhbnQnIF0gPSBgJHsgc3RhdGUudGFyZ2V0VWlkLnZhbHVlIH1fJHsgb3B0aW9uSW5kZXgudmFsdWUgfWBcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGF0dHJzXG4gICAgfSlcblxuICAgIGNvbnN0IGxpc3Rib3hBdHRycyA9IGNvbXB1dGVkKCgpID0+ICh7XG4gICAgICBpZDogYCR7IHN0YXRlLnRhcmdldFVpZC52YWx1ZSB9X2xiYCxcbiAgICAgIHJvbGU6ICdsaXN0Ym94JyxcbiAgICAgICdhcmlhLW11bHRpc2VsZWN0YWJsZSc6IHByb3BzLm11bHRpcGxlID09PSB0cnVlID8gJ3RydWUnIDogJ2ZhbHNlJ1xuICAgIH0pKVxuXG4gICAgY29uc3Qgc2VsZWN0ZWRTY29wZSA9IGNvbXB1dGVkKCgpID0+IHtcbiAgICAgIHJldHVybiBpbm5lclZhbHVlLnZhbHVlLm1hcCgob3B0LCBpKSA9PiAoe1xuICAgICAgICBpbmRleDogaSxcbiAgICAgICAgb3B0LFxuICAgICAgICBodG1sOiBuZWVkc0h0bWxGbi52YWx1ZShvcHQpLFxuICAgICAgICBzZWxlY3RlZDogdHJ1ZSxcbiAgICAgICAgcmVtb3ZlQXRJbmRleDogcmVtb3ZlQXRJbmRleEFuZEZvY3VzLFxuICAgICAgICB0b2dnbGVPcHRpb24sXG4gICAgICAgIHRhYmluZGV4OiB0YWJpbmRleC52YWx1ZVxuICAgICAgfSkpXG4gICAgfSlcblxuICAgIGNvbnN0IG9wdGlvblNjb3BlID0gY29tcHV0ZWQoKCkgPT4ge1xuICAgICAgaWYgKHZpcnR1YWxTY3JvbGxMZW5ndGgudmFsdWUgPT09IDApIHtcbiAgICAgICAgcmV0dXJuIFtdXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHsgZnJvbSwgdG8gfSA9IHZpcnR1YWxTY3JvbGxTbGljZVJhbmdlLnZhbHVlXG5cbiAgICAgIHJldHVybiBwcm9wcy5vcHRpb25zLnNsaWNlKGZyb20sIHRvKS5tYXAoKG9wdCwgaSkgPT4ge1xuICAgICAgICBjb25zdCBkaXNhYmxlID0gaXNPcHRpb25EaXNhYmxlZC52YWx1ZShvcHQpID09PSB0cnVlXG4gICAgICAgIGNvbnN0IGFjdGl2ZSA9IGlzT3B0aW9uU2VsZWN0ZWQob3B0KSA9PT0gdHJ1ZVxuICAgICAgICBjb25zdCBpbmRleCA9IGZyb20gKyBpXG5cbiAgICAgICAgY29uc3QgaXRlbVByb3BzID0ge1xuICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgICAgICBhY3RpdmUsXG4gICAgICAgICAgYWN0aXZlQ2xhc3M6IGNvbXB1dGVkT3B0aW9uc1NlbGVjdGVkQ2xhc3MudmFsdWUsXG4gICAgICAgICAgbWFudWFsRm9jdXM6IHRydWUsXG4gICAgICAgICAgZm9jdXNlZDogZmFsc2UsXG4gICAgICAgICAgZGlzYWJsZSxcbiAgICAgICAgICB0YWJpbmRleDogLTEsXG4gICAgICAgICAgZGVuc2U6IHByb3BzLm9wdGlvbnNEZW5zZSxcbiAgICAgICAgICBkYXJrOiBpc09wdGlvbnNEYXJrLnZhbHVlLFxuICAgICAgICAgIHJvbGU6ICdvcHRpb24nLFxuICAgICAgICAgICdhcmlhLXNlbGVjdGVkJzogYWN0aXZlID09PSB0cnVlID8gJ3RydWUnIDogJ2ZhbHNlJyxcbiAgICAgICAgICBpZDogYCR7IHN0YXRlLnRhcmdldFVpZC52YWx1ZSB9XyR7IGluZGV4IH1gLFxuICAgICAgICAgIG9uQ2xpY2s6ICgpID0+IHsgdG9nZ2xlT3B0aW9uKG9wdCkgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGRpc2FibGUgIT09IHRydWUpIHtcbiAgICAgICAgICBvcHRpb25JbmRleC52YWx1ZSA9PT0gaW5kZXggJiYgKGl0ZW1Qcm9wcy5mb2N1c2VkID0gdHJ1ZSlcblxuICAgICAgICAgIGlmICgkcS5wbGF0Zm9ybS5pcy5kZXNrdG9wID09PSB0cnVlKSB7XG4gICAgICAgICAgICBpdGVtUHJvcHMub25Nb3VzZW1vdmUgPSAoKSA9PiB7IG1lbnUudmFsdWUgPT09IHRydWUgJiYgc2V0T3B0aW9uSW5kZXgoaW5kZXgpIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIGluZGV4LFxuICAgICAgICAgIG9wdCxcbiAgICAgICAgICBodG1sOiBuZWVkc0h0bWxGbi52YWx1ZShvcHQpLFxuICAgICAgICAgIGxhYmVsOiBnZXRPcHRpb25MYWJlbC52YWx1ZShvcHQpLFxuICAgICAgICAgIHNlbGVjdGVkOiBpdGVtUHJvcHMuYWN0aXZlLFxuICAgICAgICAgIGZvY3VzZWQ6IGl0ZW1Qcm9wcy5mb2N1c2VkLFxuICAgICAgICAgIHRvZ2dsZU9wdGlvbixcbiAgICAgICAgICBzZXRPcHRpb25JbmRleCxcbiAgICAgICAgICBpdGVtUHJvcHNcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9KVxuXG4gICAgY29uc3QgZHJvcGRvd25BcnJvd0ljb24gPSBjb21wdXRlZCgoKSA9PiAoXG4gICAgICBwcm9wcy5kcm9wZG93bkljb24gIT09IHZvaWQgMFxuICAgICAgICA/IHByb3BzLmRyb3Bkb3duSWNvblxuICAgICAgICA6ICRxLmljb25TZXQuYXJyb3cuZHJvcGRvd25cbiAgICApKVxuXG4gICAgY29uc3Qgc3F1YXJlZE1lbnUgPSBjb21wdXRlZCgoKSA9PlxuICAgICAgcHJvcHMub3B0aW9uc0NvdmVyID09PSBmYWxzZVxuICAgICAgJiYgcHJvcHMub3V0bGluZWQgIT09IHRydWVcbiAgICAgICYmIHByb3BzLnN0YW5kb3V0ICE9PSB0cnVlXG4gICAgICAmJiBwcm9wcy5ib3JkZXJsZXNzICE9PSB0cnVlXG4gICAgICAmJiBwcm9wcy5yb3VuZGVkICE9PSB0cnVlXG4gICAgKVxuXG4gICAgY29uc3QgY29tcHV0ZWRPcHRpb25zU2VsZWN0ZWRDbGFzcyA9IGNvbXB1dGVkKCgpID0+IChcbiAgICAgIHByb3BzLm9wdGlvbnNTZWxlY3RlZENsYXNzICE9PSB2b2lkIDBcbiAgICAgICAgPyBwcm9wcy5vcHRpb25zU2VsZWN0ZWRDbGFzc1xuICAgICAgICA6IChwcm9wcy5jb2xvciAhPT0gdm9pZCAwID8gYHRleHQtJHsgcHJvcHMuY29sb3IgfWAgOiAnJylcbiAgICApKVxuXG4gICAgLy8gcmV0dXJucyBtZXRob2QgdG8gZ2V0IHZhbHVlIG9mIGFuIG9wdGlvbjtcbiAgICAvLyB0YWtlcyBpbnRvIGFjY291bnQgJ29wdGlvbi12YWx1ZScgcHJvcFxuICAgIGNvbnN0IGdldE9wdGlvblZhbHVlID0gY29tcHV0ZWQoKCkgPT4gZ2V0UHJvcFZhbHVlRm4ocHJvcHMub3B0aW9uVmFsdWUsICd2YWx1ZScpKVxuXG4gICAgLy8gcmV0dXJucyBtZXRob2QgdG8gZ2V0IGxhYmVsIG9mIGFuIG9wdGlvbjtcbiAgICAvLyB0YWtlcyBpbnRvIGFjY291bnQgJ29wdGlvbi1sYWJlbCcgcHJvcFxuICAgIGNvbnN0IGdldE9wdGlvbkxhYmVsID0gY29tcHV0ZWQoKCkgPT4gZ2V0UHJvcFZhbHVlRm4ocHJvcHMub3B0aW9uTGFiZWwsICdsYWJlbCcpKVxuXG4gICAgLy8gcmV0dXJucyBtZXRob2QgdG8gdGVsbCBpZiBhbiBvcHRpb24gaXMgZGlzYWJsZWQ7XG4gICAgLy8gdGFrZXMgaW50byBhY2NvdW50ICdvcHRpb24tZGlzYWJsZScgcHJvcFxuICAgIGNvbnN0IGlzT3B0aW9uRGlzYWJsZWQgPSBjb21wdXRlZCgoKSA9PiBnZXRQcm9wVmFsdWVGbihwcm9wcy5vcHRpb25EaXNhYmxlLCAnZGlzYWJsZScpKVxuXG4gICAgY29uc3QgaW5uZXJPcHRpb25zVmFsdWUgPSBjb21wdXRlZCgoKSA9PiBpbm5lclZhbHVlLnZhbHVlLm1hcChvcHQgPT4gZ2V0T3B0aW9uVmFsdWUudmFsdWUob3B0KSkpXG5cbiAgICBjb25zdCBpbnB1dENvbnRyb2xFdmVudHMgPSBjb21wdXRlZCgoKSA9PiB7XG4gICAgICBjb25zdCBldnQgPSB7XG4gICAgICAgIG9uSW5wdXQsXG4gICAgICAgIC8vIFNhZmFyaSA8IDEwLjIgJiBVSVdlYlZpZXcgZG9lc24ndCBmaXJlIGNvbXBvc2l0aW9uZW5kIHdoZW5cbiAgICAgICAgLy8gc3dpdGNoaW5nIGZvY3VzIGJlZm9yZSBjb25maXJtaW5nIGNvbXBvc2l0aW9uIGNob2ljZVxuICAgICAgICAvLyB0aGlzIGFsc28gZml4ZXMgdGhlIGlzc3VlIHdoZXJlIHNvbWUgYnJvd3NlcnMgZS5nLiBpT1MgQ2hyb21lXG4gICAgICAgIC8vIGZpcmVzIFwiY2hhbmdlXCIgaW5zdGVhZCBvZiBcImlucHV0XCIgb24gYXV0b2NvbXBsZXRlLlxuICAgICAgICBvbkNoYW5nZTogb25Db21wb3NpdGlvbixcbiAgICAgICAgb25LZXlkb3duOiBvblRhcmdldEtleWRvd24sXG4gICAgICAgIG9uS2V5dXA6IG9uVGFyZ2V0QXV0b2NvbXBsZXRlLFxuICAgICAgICBvbktleXByZXNzOiBvblRhcmdldEtleXByZXNzLFxuICAgICAgICBvbkZvY3VzOiBzZWxlY3RJbnB1dFRleHQsXG4gICAgICAgIG9uQ2xpY2sgKGUpIHsgaGFzRGlhbG9nID09PSB0cnVlICYmIHN0b3AoZSkgfVxuICAgICAgfVxuXG4gICAgICBldnQub25Db21wb3NpdGlvbnN0YXJ0ID0gZXZ0Lm9uQ29tcG9zaXRpb251cGRhdGUgPSBldnQub25Db21wb3NpdGlvbmVuZCA9IG9uQ29tcG9zaXRpb25cblxuICAgICAgcmV0dXJuIGV2dFxuICAgIH0pXG5cbiAgICB3YXRjaChpbm5lclZhbHVlLCB2YWwgPT4ge1xuICAgICAgaW5uZXJWYWx1ZUNhY2hlID0gdmFsXG5cbiAgICAgIGlmIChcbiAgICAgICAgcHJvcHMudXNlSW5wdXQgPT09IHRydWVcbiAgICAgICAgJiYgcHJvcHMuZmlsbElucHV0ID09PSB0cnVlXG4gICAgICAgICYmIHByb3BzLm11bHRpcGxlICE9PSB0cnVlXG4gICAgICAgIC8vIFByZXZlbnQgcmUtZW50ZXJpbmcgaW4gZmlsdGVyIHdoaWxlIGZpbHRlcmluZ1xuICAgICAgICAvLyBBbHNvIHByZXZlbnQgY2xlYXJpbmcgaW5wdXRWYWx1ZSB3aGlsZSBmaWx0ZXJpbmdcbiAgICAgICAgJiYgc3RhdGUuaW5uZXJMb2FkaW5nLnZhbHVlICE9PSB0cnVlXG4gICAgICAgICYmICgoZGlhbG9nLnZhbHVlICE9PSB0cnVlICYmIG1lbnUudmFsdWUgIT09IHRydWUpIHx8IGhhc1ZhbHVlLnZhbHVlICE9PSB0cnVlKVxuICAgICAgKSB7XG4gICAgICAgIHVzZXJJbnB1dFZhbHVlICE9PSB0cnVlICYmIHJlc2V0SW5wdXRWYWx1ZSgpXG4gICAgICAgIGlmIChkaWFsb2cudmFsdWUgPT09IHRydWUgfHwgbWVudS52YWx1ZSA9PT0gdHJ1ZSkge1xuICAgICAgICAgIGZpbHRlcignJylcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sIHsgaW1tZWRpYXRlOiB0cnVlIH0pXG5cbiAgICB3YXRjaCgoKSA9PiBwcm9wcy5maWxsSW5wdXQsIHJlc2V0SW5wdXRWYWx1ZSlcblxuICAgIHdhdGNoKG1lbnUsIHVwZGF0ZU1lbnUpXG5cbiAgICB3YXRjaCh2aXJ0dWFsU2Nyb2xsTGVuZ3RoLCByZXJlbmRlck1lbnUpXG5cbiAgICBmdW5jdGlvbiBnZXRFbWl0dGluZ09wdGlvblZhbHVlIChvcHQpIHtcbiAgICAgIHJldHVybiBwcm9wcy5lbWl0VmFsdWUgPT09IHRydWVcbiAgICAgICAgPyBnZXRPcHRpb25WYWx1ZS52YWx1ZShvcHQpXG4gICAgICAgIDogb3B0XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcmVtb3ZlQXRJbmRleCAoaW5kZXgpIHtcbiAgICAgIGlmIChpbmRleCAhPT0gLTEgJiYgaW5kZXggPCBpbm5lclZhbHVlLnZhbHVlLmxlbmd0aCkge1xuICAgICAgICBpZiAocHJvcHMubXVsdGlwbGUgPT09IHRydWUpIHtcbiAgICAgICAgICBjb25zdCBtb2RlbCA9IHByb3BzLm1vZGVsVmFsdWUuc2xpY2UoKVxuICAgICAgICAgIGVtaXQoJ3JlbW92ZScsIHsgaW5kZXgsIHZhbHVlOiBtb2RlbC5zcGxpY2UoaW5kZXgsIDEpWyAwIF0gfSlcbiAgICAgICAgICBlbWl0KCd1cGRhdGU6bW9kZWxWYWx1ZScsIG1vZGVsKVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgIGVtaXQoJ3VwZGF0ZTptb2RlbFZhbHVlJywgbnVsbClcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJlbW92ZUF0SW5kZXhBbmRGb2N1cyAoaW5kZXgpIHtcbiAgICAgIHJlbW92ZUF0SW5kZXgoaW5kZXgpXG4gICAgICBzdGF0ZS5mb2N1cygpXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gYWRkIChvcHQsIHVuaXF1ZSkge1xuICAgICAgY29uc3QgdmFsID0gZ2V0RW1pdHRpbmdPcHRpb25WYWx1ZShvcHQpXG5cbiAgICAgIGlmIChwcm9wcy5tdWx0aXBsZSAhPT0gdHJ1ZSkge1xuICAgICAgICBwcm9wcy5maWxsSW5wdXQgPT09IHRydWUgJiYgdXBkYXRlSW5wdXRWYWx1ZShcbiAgICAgICAgICBnZXRPcHRpb25MYWJlbC52YWx1ZShvcHQpLFxuICAgICAgICAgIHRydWUsXG4gICAgICAgICAgdHJ1ZVxuICAgICAgICApXG5cbiAgICAgICAgZW1pdCgndXBkYXRlOm1vZGVsVmFsdWUnLCB2YWwpXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICBpZiAoaW5uZXJWYWx1ZS52YWx1ZS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgZW1pdCgnYWRkJywgeyBpbmRleDogMCwgdmFsdWU6IHZhbCB9KVxuICAgICAgICBlbWl0KCd1cGRhdGU6bW9kZWxWYWx1ZScsIHByb3BzLm11bHRpcGxlID09PSB0cnVlID8gWyB2YWwgXSA6IHZhbClcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIGlmICh1bmlxdWUgPT09IHRydWUgJiYgaXNPcHRpb25TZWxlY3RlZChvcHQpID09PSB0cnVlKSB7XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICBpZiAocHJvcHMubWF4VmFsdWVzICE9PSB2b2lkIDAgJiYgcHJvcHMubW9kZWxWYWx1ZS5sZW5ndGggPj0gcHJvcHMubWF4VmFsdWVzKSB7XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICBjb25zdCBtb2RlbCA9IHByb3BzLm1vZGVsVmFsdWUuc2xpY2UoKVxuXG4gICAgICBlbWl0KCdhZGQnLCB7IGluZGV4OiBtb2RlbC5sZW5ndGgsIHZhbHVlOiB2YWwgfSlcbiAgICAgIG1vZGVsLnB1c2godmFsKVxuICAgICAgZW1pdCgndXBkYXRlOm1vZGVsVmFsdWUnLCBtb2RlbClcbiAgICB9XG5cbiAgICBmdW5jdGlvbiB0b2dnbGVPcHRpb24gKG9wdCwga2VlcE9wZW4pIHtcbiAgICAgIGlmIChzdGF0ZS5lZGl0YWJsZS52YWx1ZSAhPT0gdHJ1ZSB8fCBvcHQgPT09IHZvaWQgMCB8fCBpc09wdGlvbkRpc2FibGVkLnZhbHVlKG9wdCkgPT09IHRydWUpIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IG9wdFZhbHVlID0gZ2V0T3B0aW9uVmFsdWUudmFsdWUob3B0KVxuXG4gICAgICBpZiAocHJvcHMubXVsdGlwbGUgIT09IHRydWUpIHtcbiAgICAgICAgaWYgKGtlZXBPcGVuICE9PSB0cnVlKSB7XG4gICAgICAgICAgdXBkYXRlSW5wdXRWYWx1ZShcbiAgICAgICAgICAgIHByb3BzLmZpbGxJbnB1dCA9PT0gdHJ1ZSA/IGdldE9wdGlvbkxhYmVsLnZhbHVlKG9wdCkgOiAnJyxcbiAgICAgICAgICAgIHRydWUsXG4gICAgICAgICAgICB0cnVlXG4gICAgICAgICAgKVxuXG4gICAgICAgICAgaGlkZVBvcHVwKClcbiAgICAgICAgfVxuXG4gICAgICAgIHRhcmdldFJlZi52YWx1ZSAhPT0gbnVsbCAmJiB0YXJnZXRSZWYudmFsdWUuZm9jdXMoKVxuXG4gICAgICAgIGlmIChcbiAgICAgICAgICBpbm5lclZhbHVlLnZhbHVlLmxlbmd0aCA9PT0gMFxuICAgICAgICAgIHx8IGlzRGVlcEVxdWFsKGdldE9wdGlvblZhbHVlLnZhbHVlKGlubmVyVmFsdWUudmFsdWVbIDAgXSksIG9wdFZhbHVlKSAhPT0gdHJ1ZVxuICAgICAgICApIHtcbiAgICAgICAgICBlbWl0KCd1cGRhdGU6bW9kZWxWYWx1ZScsIHByb3BzLmVtaXRWYWx1ZSA9PT0gdHJ1ZSA/IG9wdFZhbHVlIDogb3B0KVxuICAgICAgICB9XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICAoaGFzRGlhbG9nICE9PSB0cnVlIHx8IGRpYWxvZ0ZpZWxkRm9jdXNlZC52YWx1ZSA9PT0gdHJ1ZSkgJiYgc3RhdGUuZm9jdXMoKVxuXG4gICAgICBzZWxlY3RJbnB1dFRleHQoKVxuXG4gICAgICBpZiAoaW5uZXJWYWx1ZS52YWx1ZS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgY29uc3QgdmFsID0gcHJvcHMuZW1pdFZhbHVlID09PSB0cnVlID8gb3B0VmFsdWUgOiBvcHRcbiAgICAgICAgZW1pdCgnYWRkJywgeyBpbmRleDogMCwgdmFsdWU6IHZhbCB9KVxuICAgICAgICBlbWl0KCd1cGRhdGU6bW9kZWxWYWx1ZScsIHByb3BzLm11bHRpcGxlID09PSB0cnVlID8gWyB2YWwgXSA6IHZhbClcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIGNvbnN0XG4gICAgICAgIG1vZGVsID0gcHJvcHMubW9kZWxWYWx1ZS5zbGljZSgpLFxuICAgICAgICBpbmRleCA9IGlubmVyT3B0aW9uc1ZhbHVlLnZhbHVlLmZpbmRJbmRleCh2ID0+IGlzRGVlcEVxdWFsKHYsIG9wdFZhbHVlKSlcblxuICAgICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgICBlbWl0KCdyZW1vdmUnLCB7IGluZGV4LCB2YWx1ZTogbW9kZWwuc3BsaWNlKGluZGV4LCAxKVsgMCBdIH0pXG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgaWYgKHByb3BzLm1heFZhbHVlcyAhPT0gdm9pZCAwICYmIG1vZGVsLmxlbmd0aCA+PSBwcm9wcy5tYXhWYWx1ZXMpIHtcbiAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHZhbCA9IHByb3BzLmVtaXRWYWx1ZSA9PT0gdHJ1ZSA/IG9wdFZhbHVlIDogb3B0XG5cbiAgICAgICAgZW1pdCgnYWRkJywgeyBpbmRleDogbW9kZWwubGVuZ3RoLCB2YWx1ZTogdmFsIH0pXG4gICAgICAgIG1vZGVsLnB1c2godmFsKVxuICAgICAgfVxuXG4gICAgICBlbWl0KCd1cGRhdGU6bW9kZWxWYWx1ZScsIG1vZGVsKVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHNldE9wdGlvbkluZGV4IChpbmRleCkge1xuICAgICAgaWYgKCRxLnBsYXRmb3JtLmlzLmRlc2t0b3AgIT09IHRydWUpIHJldHVyblxuXG4gICAgICBjb25zdCB2YWwgPSBpbmRleCAhPT0gLTEgJiYgaW5kZXggPCB2aXJ0dWFsU2Nyb2xsTGVuZ3RoLnZhbHVlXG4gICAgICAgID8gaW5kZXhcbiAgICAgICAgOiAtMVxuXG4gICAgICBpZiAob3B0aW9uSW5kZXgudmFsdWUgIT09IHZhbCkge1xuICAgICAgICBvcHRpb25JbmRleC52YWx1ZSA9IHZhbFxuICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIG1vdmVPcHRpb25TZWxlY3Rpb24gKG9mZnNldCA9IDEsIHNraXBJbnB1dFZhbHVlKSB7XG4gICAgICBpZiAobWVudS52YWx1ZSA9PT0gdHJ1ZSkge1xuICAgICAgICBsZXQgaW5kZXggPSBvcHRpb25JbmRleC52YWx1ZVxuICAgICAgICBkbyB7XG4gICAgICAgICAgaW5kZXggPSBub3JtYWxpemVUb0ludGVydmFsKFxuICAgICAgICAgICAgaW5kZXggKyBvZmZzZXQsXG4gICAgICAgICAgICAtMSxcbiAgICAgICAgICAgIHZpcnR1YWxTY3JvbGxMZW5ndGgudmFsdWUgLSAxXG4gICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICAgIHdoaWxlIChpbmRleCAhPT0gLTEgJiYgaW5kZXggIT09IG9wdGlvbkluZGV4LnZhbHVlICYmIGlzT3B0aW9uRGlzYWJsZWQudmFsdWUocHJvcHMub3B0aW9uc1sgaW5kZXggXSkgPT09IHRydWUpXG5cbiAgICAgICAgaWYgKG9wdGlvbkluZGV4LnZhbHVlICE9PSBpbmRleCkge1xuICAgICAgICAgIHNldE9wdGlvbkluZGV4KGluZGV4KVxuICAgICAgICAgIHNjcm9sbFRvKGluZGV4KVxuXG4gICAgICAgICAgaWYgKHNraXBJbnB1dFZhbHVlICE9PSB0cnVlICYmIHByb3BzLnVzZUlucHV0ID09PSB0cnVlICYmIHByb3BzLmZpbGxJbnB1dCA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgc2V0SW5wdXRWYWx1ZShcbiAgICAgICAgICAgICAgaW5kZXggPj0gMFxuICAgICAgICAgICAgICAgID8gZ2V0T3B0aW9uTGFiZWwudmFsdWUocHJvcHMub3B0aW9uc1sgaW5kZXggXSlcbiAgICAgICAgICAgICAgICA6IGRlZmF1bHRJbnB1dFZhbHVlLFxuICAgICAgICAgICAgICB0cnVlXG4gICAgICAgICAgICApXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0T3B0aW9uICh2YWx1ZSwgdmFsdWVDYWNoZSkge1xuICAgICAgY29uc3QgZm4gPSBvcHQgPT4gaXNEZWVwRXF1YWwoZ2V0T3B0aW9uVmFsdWUudmFsdWUob3B0KSwgdmFsdWUpXG4gICAgICByZXR1cm4gcHJvcHMub3B0aW9ucy5maW5kKGZuKSB8fCB2YWx1ZUNhY2hlLmZpbmQoZm4pIHx8IHZhbHVlXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0UHJvcFZhbHVlRm4gKHByb3BWYWx1ZSwgZGVmYXVsdFZhbCkge1xuICAgICAgY29uc3QgdmFsID0gcHJvcFZhbHVlICE9PSB2b2lkIDBcbiAgICAgICAgPyBwcm9wVmFsdWVcbiAgICAgICAgOiBkZWZhdWx0VmFsXG5cbiAgICAgIHJldHVybiB0eXBlb2YgdmFsID09PSAnZnVuY3Rpb24nXG4gICAgICAgID8gdmFsXG4gICAgICAgIDogb3B0ID0+IChvcHQgIT09IG51bGwgJiYgdHlwZW9mIG9wdCA9PT0gJ29iamVjdCcgJiYgdmFsIGluIG9wdCA/IG9wdFsgdmFsIF0gOiBvcHQpXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaXNPcHRpb25TZWxlY3RlZCAob3B0KSB7XG4gICAgICBjb25zdCB2YWwgPSBnZXRPcHRpb25WYWx1ZS52YWx1ZShvcHQpXG4gICAgICByZXR1cm4gaW5uZXJPcHRpb25zVmFsdWUudmFsdWUuZmluZCh2ID0+IGlzRGVlcEVxdWFsKHYsIHZhbCkpICE9PSB2b2lkIDBcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzZWxlY3RJbnB1dFRleHQgKGUpIHtcbiAgICAgIGlmIChcbiAgICAgICAgcHJvcHMudXNlSW5wdXQgPT09IHRydWVcbiAgICAgICAgJiYgdGFyZ2V0UmVmLnZhbHVlICE9PSBudWxsXG4gICAgICAgICYmIChlID09PSB2b2lkIDAgfHwgKHRhcmdldFJlZi52YWx1ZSA9PT0gZS50YXJnZXQgJiYgZS50YXJnZXQudmFsdWUgPT09IHNlbGVjdGVkU3RyaW5nLnZhbHVlKSlcbiAgICAgICkge1xuICAgICAgICB0YXJnZXRSZWYudmFsdWUuc2VsZWN0KClcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBvblRhcmdldEtleXVwIChlKSB7XG4gICAgICAvLyBpZiBFU0MgYW5kIHdlIGhhdmUgYW4gb3BlbmVkIG1lbnVcbiAgICAgIC8vIHRoZW4gc3RvcCBwcm9wYWdhdGlvbiAobWlnaHQgYmUgY2F1Z2h0IGJ5IGEgUURpYWxvZ1xuICAgICAgLy8gYW5kIHNvIGl0IHdpbGwgYWxzbyBjbG9zZSB0aGUgUURpYWxvZywgd2hpY2ggaXMgd3JvbmcpXG4gICAgICBpZiAoaXNLZXlDb2RlKGUsIDI3KSA9PT0gdHJ1ZSAmJiBtZW51LnZhbHVlID09PSB0cnVlKSB7XG4gICAgICAgIHN0b3AoZSlcbiAgICAgICAgLy8gb24gRVNDIHdlIG5lZWQgdG8gY2xvc2UgdGhlIGRpYWxvZyBhbHNvXG4gICAgICAgIGhpZGVQb3B1cCgpXG4gICAgICAgIHJlc2V0SW5wdXRWYWx1ZSgpXG4gICAgICB9XG5cbiAgICAgIGVtaXQoJ2tleXVwJywgZSlcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBvblRhcmdldEF1dG9jb21wbGV0ZSAoZSkge1xuICAgICAgY29uc3QgeyB2YWx1ZSB9ID0gZS50YXJnZXRcblxuICAgICAgaWYgKGUua2V5Q29kZSAhPT0gdm9pZCAwKSB7XG4gICAgICAgIG9uVGFyZ2V0S2V5dXAoZSlcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIGUudGFyZ2V0LnZhbHVlID0gJydcblxuICAgICAgaWYgKGZpbHRlclRpbWVyICE9PSBudWxsKSB7XG4gICAgICAgIGNsZWFyVGltZW91dChmaWx0ZXJUaW1lcilcbiAgICAgICAgZmlsdGVyVGltZXIgPSBudWxsXG4gICAgICB9XG4gICAgICBpZiAoaW5wdXRWYWx1ZVRpbWVyICE9PSBudWxsKSB7XG4gICAgICAgIGNsZWFyVGltZW91dChpbnB1dFZhbHVlVGltZXIpXG4gICAgICAgIGlucHV0VmFsdWVUaW1lciA9IG51bGxcbiAgICAgIH1cblxuICAgICAgcmVzZXRJbnB1dFZhbHVlKClcblxuICAgICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycgJiYgdmFsdWUubGVuZ3RoICE9PSAwKSB7XG4gICAgICAgIGNvbnN0IG5lZWRsZSA9IHZhbHVlLnRvTG9jYWxlTG93ZXJDYXNlKClcbiAgICAgICAgY29uc3QgZmluZEZuID0gZXh0cmFjdEZuID0+IHtcbiAgICAgICAgICBjb25zdCBvcHRpb24gPSBwcm9wcy5vcHRpb25zLmZpbmQob3B0ID0+IGV4dHJhY3RGbi52YWx1ZShvcHQpLnRvTG9jYWxlTG93ZXJDYXNlKCkgPT09IG5lZWRsZSlcblxuICAgICAgICAgIGlmIChvcHRpb24gPT09IHZvaWQgMCkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKGlubmVyVmFsdWUudmFsdWUuaW5kZXhPZihvcHRpb24pID09PSAtMSkge1xuICAgICAgICAgICAgdG9nZ2xlT3B0aW9uKG9wdGlvbilcbiAgICAgICAgICB9XG4gICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBoaWRlUG9wdXAoKVxuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiB0cnVlXG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgZmlsbEZuID0gYWZ0ZXJGaWx0ZXIgPT4ge1xuICAgICAgICAgIGlmIChmaW5kRm4oZ2V0T3B0aW9uVmFsdWUpID09PSB0cnVlKSB7XG4gICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKGZpbmRGbihnZXRPcHRpb25MYWJlbCkgPT09IHRydWUgfHwgYWZ0ZXJGaWx0ZXIgPT09IHRydWUpIHtcbiAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgIH1cblxuICAgICAgICAgIGZpbHRlcih2YWx1ZSwgdHJ1ZSwgKCkgPT4gZmlsbEZuKHRydWUpKVxuICAgICAgICB9XG5cbiAgICAgICAgZmlsbEZuKClcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICBzdGF0ZS5jbGVhclZhbHVlKGUpXG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gb25UYXJnZXRLZXlwcmVzcyAoZSkge1xuICAgICAgZW1pdCgna2V5cHJlc3MnLCBlKVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIG9uVGFyZ2V0S2V5ZG93biAoZSkge1xuICAgICAgZW1pdCgna2V5ZG93bicsIGUpXG5cbiAgICAgIGlmIChzaG91bGRJZ25vcmVLZXkoZSkgPT09IHRydWUpIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IG5ld1ZhbHVlTW9kZVZhbGlkID0gaW5wdXRWYWx1ZS52YWx1ZS5sZW5ndGggIT09IDBcbiAgICAgICAgJiYgKHByb3BzLm5ld1ZhbHVlTW9kZSAhPT0gdm9pZCAwIHx8IHByb3BzLm9uTmV3VmFsdWUgIT09IHZvaWQgMClcblxuICAgICAgY29uc3QgdGFiU2hvdWxkU2VsZWN0ID0gZS5zaGlmdEtleSAhPT0gdHJ1ZVxuICAgICAgICAmJiBwcm9wcy5tdWx0aXBsZSAhPT0gdHJ1ZVxuICAgICAgICAmJiAob3B0aW9uSW5kZXgudmFsdWUgIT09IC0xIHx8IG5ld1ZhbHVlTW9kZVZhbGlkID09PSB0cnVlKVxuXG4gICAgICAvLyBlc2NhcGVcbiAgICAgIGlmIChlLmtleUNvZGUgPT09IDI3KSB7XG4gICAgICAgIHByZXZlbnQoZSkgLy8gcHJldmVudCBjbGVhcmluZyB0aGUgaW5wdXRWYWx1ZVxuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgLy8gdGFiXG4gICAgICBpZiAoZS5rZXlDb2RlID09PSA5ICYmIHRhYlNob3VsZFNlbGVjdCA9PT0gZmFsc2UpIHtcbiAgICAgICAgY2xvc2VNZW51KClcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIGlmIChcbiAgICAgICAgZS50YXJnZXQgPT09IHZvaWQgMFxuICAgICAgICB8fCBlLnRhcmdldC5pZCAhPT0gc3RhdGUudGFyZ2V0VWlkLnZhbHVlXG4gICAgICAgIHx8IHN0YXRlLmVkaXRhYmxlLnZhbHVlICE9PSB0cnVlXG4gICAgICApIHJldHVyblxuXG4gICAgICAvLyBkb3duXG4gICAgICBpZiAoXG4gICAgICAgIGUua2V5Q29kZSA9PT0gNDBcbiAgICAgICAgJiYgc3RhdGUuaW5uZXJMb2FkaW5nLnZhbHVlICE9PSB0cnVlXG4gICAgICAgICYmIG1lbnUudmFsdWUgPT09IGZhbHNlXG4gICAgICApIHtcbiAgICAgICAgc3RvcEFuZFByZXZlbnQoZSlcbiAgICAgICAgc2hvd1BvcHVwKClcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIC8vIGJhY2tzcGFjZVxuICAgICAgaWYgKFxuICAgICAgICBlLmtleUNvZGUgPT09IDhcbiAgICAgICAgJiYgKFxuICAgICAgICAgIHByb3BzLnVzZUNoaXBzID09PSB0cnVlXG4gICAgICAgICAgfHwgcHJvcHMuY2xlYXJhYmxlID09PSB0cnVlXG4gICAgICAgIClcbiAgICAgICAgJiYgcHJvcHMuaGlkZVNlbGVjdGVkICE9PSB0cnVlXG4gICAgICAgICYmIGlucHV0VmFsdWUudmFsdWUubGVuZ3RoID09PSAwXG4gICAgICApIHtcbiAgICAgICAgaWYgKHByb3BzLm11bHRpcGxlID09PSB0cnVlICYmIEFycmF5LmlzQXJyYXkocHJvcHMubW9kZWxWYWx1ZSkgPT09IHRydWUpIHtcbiAgICAgICAgICByZW1vdmVBdEluZGV4KHByb3BzLm1vZGVsVmFsdWUubGVuZ3RoIC0gMSlcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChwcm9wcy5tdWx0aXBsZSAhPT0gdHJ1ZSAmJiBwcm9wcy5tb2RlbFZhbHVlICE9PSBudWxsKSB7XG4gICAgICAgICAgZW1pdCgndXBkYXRlOm1vZGVsVmFsdWUnLCBudWxsKVxuICAgICAgICB9XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICAvLyBob21lLCBlbmQgLSAzNiwgMzVcbiAgICAgIGlmIChcbiAgICAgICAgKGUua2V5Q29kZSA9PT0gMzUgfHwgZS5rZXlDb2RlID09PSAzNilcbiAgICAgICAgJiYgKHR5cGVvZiBpbnB1dFZhbHVlLnZhbHVlICE9PSAnc3RyaW5nJyB8fCBpbnB1dFZhbHVlLnZhbHVlLmxlbmd0aCA9PT0gMClcbiAgICAgICkge1xuICAgICAgICBzdG9wQW5kUHJldmVudChlKVxuICAgICAgICBvcHRpb25JbmRleC52YWx1ZSA9IC0xXG4gICAgICAgIG1vdmVPcHRpb25TZWxlY3Rpb24oZS5rZXlDb2RlID09PSAzNiA/IDEgOiAtMSwgcHJvcHMubXVsdGlwbGUpXG4gICAgICB9XG5cbiAgICAgIC8vIHBnIHVwLCBwZyBkb3duIC0gMzMsIDM0XG4gICAgICBpZiAoXG4gICAgICAgIChlLmtleUNvZGUgPT09IDMzIHx8IGUua2V5Q29kZSA9PT0gMzQpXG4gICAgICAgICYmIHZpcnR1YWxTY3JvbGxTbGljZVNpemVDb21wdXRlZC52YWx1ZSAhPT0gdm9pZCAwXG4gICAgICApIHtcbiAgICAgICAgc3RvcEFuZFByZXZlbnQoZSlcbiAgICAgICAgb3B0aW9uSW5kZXgudmFsdWUgPSBNYXRoLm1heChcbiAgICAgICAgICAtMSxcbiAgICAgICAgICBNYXRoLm1pbihcbiAgICAgICAgICAgIHZpcnR1YWxTY3JvbGxMZW5ndGgudmFsdWUsXG4gICAgICAgICAgICBvcHRpb25JbmRleC52YWx1ZSArIChlLmtleUNvZGUgPT09IDMzID8gLTEgOiAxKSAqIHZpcnR1YWxTY3JvbGxTbGljZVNpemVDb21wdXRlZC52YWx1ZS52aWV3XG4gICAgICAgICAgKVxuICAgICAgICApXG4gICAgICAgIG1vdmVPcHRpb25TZWxlY3Rpb24oZS5rZXlDb2RlID09PSAzMyA/IDEgOiAtMSwgcHJvcHMubXVsdGlwbGUpXG4gICAgICB9XG5cbiAgICAgIC8vIHVwLCBkb3duXG4gICAgICBpZiAoZS5rZXlDb2RlID09PSAzOCB8fCBlLmtleUNvZGUgPT09IDQwKSB7XG4gICAgICAgIHN0b3BBbmRQcmV2ZW50KGUpXG4gICAgICAgIG1vdmVPcHRpb25TZWxlY3Rpb24oZS5rZXlDb2RlID09PSAzOCA/IC0xIDogMSwgcHJvcHMubXVsdGlwbGUpXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IG9wdGlvbnNMZW5ndGggPSB2aXJ0dWFsU2Nyb2xsTGVuZ3RoLnZhbHVlXG5cbiAgICAgIC8vIGNsZWFyIHNlYXJjaCBidWZmZXIgaWYgZXhwaXJlZFxuICAgICAgaWYgKHNlYXJjaEJ1ZmZlciA9PT0gdm9pZCAwIHx8IHNlYXJjaEJ1ZmZlckV4cCA8IERhdGUubm93KCkpIHtcbiAgICAgICAgc2VhcmNoQnVmZmVyID0gJydcbiAgICAgIH1cblxuICAgICAgLy8ga2V5Ym9hcmQgc2VhcmNoIHdoZW4gbm90IGhhdmluZyB1c2UtaW5wdXRcbiAgICAgIGlmIChcbiAgICAgICAgb3B0aW9uc0xlbmd0aCA+IDBcbiAgICAgICAgJiYgcHJvcHMudXNlSW5wdXQgIT09IHRydWVcbiAgICAgICAgJiYgZS5rZXkgIT09IHZvaWQgMFxuICAgICAgICAmJiBlLmtleS5sZW5ndGggPT09IDEgLy8gcHJpbnRhYmxlIGNoYXJcbiAgICAgICAgJiYgZS5hbHRLZXkgPT09IGZhbHNlIC8vIG5vdCBrYmQgc2hvcnRjdXRcbiAgICAgICAgJiYgZS5jdHJsS2V5ID09PSBmYWxzZSAvLyBub3Qga2JkIHNob3J0Y3V0XG4gICAgICAgICYmIGUubWV0YUtleSA9PT0gZmFsc2UgLy8gbm90IGtiZCBzaG9ydGN1dCwgZXNwZWNpYWxseSBvbiBtYWNPUyB3aXRoIENvbW1hbmQga2V5XG4gICAgICAgICYmIChlLmtleUNvZGUgIT09IDMyIHx8IHNlYXJjaEJ1ZmZlci5sZW5ndGggIT09IDApIC8vIHNwYWNlIGluIG1pZGRsZSBvZiBzZWFyY2hcbiAgICAgICkge1xuICAgICAgICBtZW51LnZhbHVlICE9PSB0cnVlICYmIHNob3dQb3B1cChlKVxuXG4gICAgICAgIGNvbnN0XG4gICAgICAgICAgY2hhciA9IGUua2V5LnRvTG9jYWxlTG93ZXJDYXNlKCksXG4gICAgICAgICAga2V5UmVwZWF0ID0gc2VhcmNoQnVmZmVyLmxlbmd0aCA9PT0gMSAmJiBzZWFyY2hCdWZmZXJbIDAgXSA9PT0gY2hhclxuXG4gICAgICAgIHNlYXJjaEJ1ZmZlckV4cCA9IERhdGUubm93KCkgKyAxNTAwXG4gICAgICAgIGlmIChrZXlSZXBlYXQgPT09IGZhbHNlKSB7XG4gICAgICAgICAgc3RvcEFuZFByZXZlbnQoZSlcbiAgICAgICAgICBzZWFyY2hCdWZmZXIgKz0gY2hhclxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3Qgc2VhcmNoUmUgPSBuZXcgUmVnRXhwKCdeJyArIHNlYXJjaEJ1ZmZlci5zcGxpdCgnJykubWFwKGwgPT4gKHJlRXNjYXBlTGlzdC5pbmRleE9mKGwpICE9PSAtMSA/ICdcXFxcJyArIGwgOiBsKSkuam9pbignLionKSwgJ2knKVxuXG4gICAgICAgIGxldCBpbmRleCA9IG9wdGlvbkluZGV4LnZhbHVlXG5cbiAgICAgICAgaWYgKGtleVJlcGVhdCA9PT0gdHJ1ZSB8fCBpbmRleCA8IDAgfHwgc2VhcmNoUmUudGVzdChnZXRPcHRpb25MYWJlbC52YWx1ZShwcm9wcy5vcHRpb25zWyBpbmRleCBdKSkgIT09IHRydWUpIHtcbiAgICAgICAgICBkbyB7XG4gICAgICAgICAgICBpbmRleCA9IG5vcm1hbGl6ZVRvSW50ZXJ2YWwoaW5kZXggKyAxLCAtMSwgb3B0aW9uc0xlbmd0aCAtIDEpXG4gICAgICAgICAgfVxuICAgICAgICAgIHdoaWxlIChpbmRleCAhPT0gb3B0aW9uSW5kZXgudmFsdWUgJiYgKFxuICAgICAgICAgICAgaXNPcHRpb25EaXNhYmxlZC52YWx1ZShwcm9wcy5vcHRpb25zWyBpbmRleCBdKSA9PT0gdHJ1ZVxuICAgICAgICAgICAgfHwgc2VhcmNoUmUudGVzdChnZXRPcHRpb25MYWJlbC52YWx1ZShwcm9wcy5vcHRpb25zWyBpbmRleCBdKSkgIT09IHRydWVcbiAgICAgICAgICApKVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKG9wdGlvbkluZGV4LnZhbHVlICE9PSBpbmRleCkge1xuICAgICAgICAgIG5leHRUaWNrKCgpID0+IHtcbiAgICAgICAgICAgIHNldE9wdGlvbkluZGV4KGluZGV4KVxuICAgICAgICAgICAgc2Nyb2xsVG8oaW5kZXgpXG5cbiAgICAgICAgICAgIGlmIChpbmRleCA+PSAwICYmIHByb3BzLnVzZUlucHV0ID09PSB0cnVlICYmIHByb3BzLmZpbGxJbnB1dCA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICBzZXRJbnB1dFZhbHVlKGdldE9wdGlvbkxhYmVsLnZhbHVlKHByb3BzLm9wdGlvbnNbIGluZGV4IF0pLCB0cnVlKVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pXG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgLy8gZW50ZXIsIHNwYWNlICh3aGVuIG5vdCB1c2luZyB1c2UtaW5wdXQgYW5kIG5vdCBpbiBzZWFyY2gpLCBvciB0YWIgKHdoZW4gbm90IHVzaW5nIG11bHRpcGxlIGFuZCBvcHRpb24gc2VsZWN0ZWQpXG4gICAgICAvLyBzYW1lIHRhcmdldCBpcyBjaGVja2VkIGFib3ZlXG4gICAgICBpZiAoXG4gICAgICAgIGUua2V5Q29kZSAhPT0gMTNcbiAgICAgICAgJiYgKGUua2V5Q29kZSAhPT0gMzIgfHwgcHJvcHMudXNlSW5wdXQgPT09IHRydWUgfHwgc2VhcmNoQnVmZmVyICE9PSAnJylcbiAgICAgICAgJiYgKGUua2V5Q29kZSAhPT0gOSB8fCB0YWJTaG91bGRTZWxlY3QgPT09IGZhbHNlKVxuICAgICAgKSByZXR1cm5cblxuICAgICAgZS5rZXlDb2RlICE9PSA5ICYmIHN0b3BBbmRQcmV2ZW50KGUpXG5cbiAgICAgIGlmIChvcHRpb25JbmRleC52YWx1ZSAhPT0gLTEgJiYgb3B0aW9uSW5kZXgudmFsdWUgPCBvcHRpb25zTGVuZ3RoKSB7XG4gICAgICAgIHRvZ2dsZU9wdGlvbihwcm9wcy5vcHRpb25zWyBvcHRpb25JbmRleC52YWx1ZSBdKVxuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgaWYgKG5ld1ZhbHVlTW9kZVZhbGlkID09PSB0cnVlKSB7XG4gICAgICAgIGNvbnN0IGRvbmUgPSAodmFsLCBtb2RlKSA9PiB7XG4gICAgICAgICAgaWYgKG1vZGUpIHtcbiAgICAgICAgICAgIGlmICh2YWxpZGF0ZU5ld1ZhbHVlTW9kZShtb2RlKSAhPT0gdHJ1ZSkge1xuICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBtb2RlID0gcHJvcHMubmV3VmFsdWVNb2RlXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgdXBkYXRlSW5wdXRWYWx1ZSgnJywgcHJvcHMubXVsdGlwbGUgIT09IHRydWUsIHRydWUpXG5cbiAgICAgICAgICBpZiAodmFsID09PSB2b2lkIDAgfHwgdmFsID09PSBudWxsKSB7XG4gICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICB9XG5cbiAgICAgICAgICBjb25zdCBmbiA9IG1vZGUgPT09ICd0b2dnbGUnID8gdG9nZ2xlT3B0aW9uIDogYWRkXG4gICAgICAgICAgZm4odmFsLCBtb2RlID09PSAnYWRkLXVuaXF1ZScpXG5cbiAgICAgICAgICBpZiAocHJvcHMubXVsdGlwbGUgIT09IHRydWUpIHtcbiAgICAgICAgICAgIHRhcmdldFJlZi52YWx1ZSAhPT0gbnVsbCAmJiB0YXJnZXRSZWYudmFsdWUuZm9jdXMoKVxuICAgICAgICAgICAgaGlkZVBvcHVwKClcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAocHJvcHMub25OZXdWYWx1ZSAhPT0gdm9pZCAwKSB7XG4gICAgICAgICAgZW1pdCgnbmV3VmFsdWUnLCBpbnB1dFZhbHVlLnZhbHVlLCBkb25lKVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgIGRvbmUoaW5wdXRWYWx1ZS52YWx1ZSlcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChwcm9wcy5tdWx0aXBsZSAhPT0gdHJ1ZSkge1xuICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZW51LnZhbHVlID09PSB0cnVlKSB7XG4gICAgICAgIGNsb3NlTWVudSgpXG4gICAgICB9XG4gICAgICBlbHNlIGlmIChzdGF0ZS5pbm5lckxvYWRpbmcudmFsdWUgIT09IHRydWUpIHtcbiAgICAgICAgc2hvd1BvcHVwKClcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXRWaXJ0dWFsU2Nyb2xsRWwgKCkge1xuICAgICAgcmV0dXJuIGhhc0RpYWxvZyA9PT0gdHJ1ZVxuICAgICAgICA/IG1lbnVDb250ZW50UmVmLnZhbHVlXG4gICAgICAgIDogKFxuICAgICAgICAgICAgbWVudVJlZi52YWx1ZSAhPT0gbnVsbCAmJiBtZW51UmVmLnZhbHVlLmNvbnRlbnRFbCAhPT0gbnVsbFxuICAgICAgICAgICAgICA/IG1lbnVSZWYudmFsdWUuY29udGVudEVsXG4gICAgICAgICAgICAgIDogdm9pZCAwXG4gICAgICAgICAgKVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdldFZpcnR1YWxTY3JvbGxUYXJnZXQgKCkge1xuICAgICAgcmV0dXJuIGdldFZpcnR1YWxTY3JvbGxFbCgpXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0U2VsZWN0aW9uICgpIHtcbiAgICAgIGlmIChwcm9wcy5oaWRlU2VsZWN0ZWQgPT09IHRydWUpIHtcbiAgICAgICAgcmV0dXJuIFtdXG4gICAgICB9XG5cbiAgICAgIGlmIChzbG90c1sgJ3NlbGVjdGVkLWl0ZW0nIF0gIT09IHZvaWQgMCkge1xuICAgICAgICByZXR1cm4gc2VsZWN0ZWRTY29wZS52YWx1ZS5tYXAoc2NvcGUgPT4gc2xvdHNbICdzZWxlY3RlZC1pdGVtJyBdKHNjb3BlKSkuc2xpY2UoKVxuICAgICAgfVxuXG4gICAgICBpZiAoc2xvdHMuc2VsZWN0ZWQgIT09IHZvaWQgMCkge1xuICAgICAgICByZXR1cm4gW10uY29uY2F0KHNsb3RzLnNlbGVjdGVkKCkpXG4gICAgICB9XG5cbiAgICAgIGlmIChwcm9wcy51c2VDaGlwcyA9PT0gdHJ1ZSkge1xuICAgICAgICByZXR1cm4gc2VsZWN0ZWRTY29wZS52YWx1ZS5tYXAoKHNjb3BlLCBpKSA9PiBoKFFDaGlwLCB7XG4gICAgICAgICAga2V5OiAnb3B0aW9uLScgKyBpLFxuICAgICAgICAgIHJlbW92YWJsZTogc3RhdGUuZWRpdGFibGUudmFsdWUgPT09IHRydWUgJiYgaXNPcHRpb25EaXNhYmxlZC52YWx1ZShzY29wZS5vcHQpICE9PSB0cnVlLFxuICAgICAgICAgIGRlbnNlOiB0cnVlLFxuICAgICAgICAgIHRleHRDb2xvcjogcHJvcHMuY29sb3IsXG4gICAgICAgICAgdGFiaW5kZXg6IHRhYmluZGV4LnZhbHVlLFxuICAgICAgICAgIG9uUmVtb3ZlICgpIHsgc2NvcGUucmVtb3ZlQXRJbmRleChpKSB9XG4gICAgICAgIH0sICgpID0+IGgoJ3NwYW4nLCB7XG4gICAgICAgICAgY2xhc3M6ICdlbGxpcHNpcycsXG4gICAgICAgICAgWyBzY29wZS5odG1sID09PSB0cnVlID8gJ2lubmVySFRNTCcgOiAndGV4dENvbnRlbnQnIF06IGdldE9wdGlvbkxhYmVsLnZhbHVlKHNjb3BlLm9wdClcbiAgICAgICAgfSkpKVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gW1xuICAgICAgICBoKCdzcGFuJywge1xuICAgICAgICAgIFsgdmFsdWVBc0h0bWwudmFsdWUgPT09IHRydWUgPyAnaW5uZXJIVE1MJyA6ICd0ZXh0Q29udGVudCcgXTogYXJpYUN1cnJlbnRWYWx1ZS52YWx1ZVxuICAgICAgICB9KVxuICAgICAgXVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdldEFsbE9wdGlvbnMgKCkge1xuICAgICAgaWYgKG5vT3B0aW9ucy52YWx1ZSA9PT0gdHJ1ZSkge1xuICAgICAgICByZXR1cm4gc2xvdHNbICduby1vcHRpb24nIF0gIT09IHZvaWQgMFxuICAgICAgICAgID8gc2xvdHNbICduby1vcHRpb24nIF0oeyBpbnB1dFZhbHVlOiBpbnB1dFZhbHVlLnZhbHVlIH0pXG4gICAgICAgICAgOiB2b2lkIDBcbiAgICAgIH1cblxuICAgICAgY29uc3QgZm4gPSBzbG90cy5vcHRpb24gIT09IHZvaWQgMFxuICAgICAgICA/IHNsb3RzLm9wdGlvblxuICAgICAgICA6IHNjb3BlID0+IHtcbiAgICAgICAgICByZXR1cm4gaChRSXRlbSwge1xuICAgICAgICAgICAga2V5OiBzY29wZS5pbmRleCxcbiAgICAgICAgICAgIC4uLnNjb3BlLml0ZW1Qcm9wc1xuICAgICAgICAgIH0sICgpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBoKFxuICAgICAgICAgICAgICBRSXRlbVNlY3Rpb24sXG4gICAgICAgICAgICAgICgpID0+IGgoXG4gICAgICAgICAgICAgICAgUUl0ZW1MYWJlbCxcbiAgICAgICAgICAgICAgICAoKSA9PiBoKCdzcGFuJywge1xuICAgICAgICAgICAgICAgICAgWyBzY29wZS5odG1sID09PSB0cnVlID8gJ2lubmVySFRNTCcgOiAndGV4dENvbnRlbnQnIF06IHNjb3BlLmxhYmVsXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgKVxuICAgICAgICAgIH0pXG4gICAgICAgIH1cblxuICAgICAgbGV0IG9wdGlvbnMgPSBwYWRWaXJ0dWFsU2Nyb2xsKCdkaXYnLCBvcHRpb25TY29wZS52YWx1ZS5tYXAoZm4pKVxuXG4gICAgICBpZiAoc2xvdHNbICdiZWZvcmUtb3B0aW9ucycgXSAhPT0gdm9pZCAwKSB7XG4gICAgICAgIG9wdGlvbnMgPSBzbG90c1sgJ2JlZm9yZS1vcHRpb25zJyBdKCkuY29uY2F0KG9wdGlvbnMpXG4gICAgICB9XG5cbiAgICAgIHJldHVybiBoTWVyZ2VTbG90KHNsb3RzWyAnYWZ0ZXItb3B0aW9ucycgXSwgb3B0aW9ucylcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXRJbnB1dCAoZnJvbURpYWxvZywgaXNUYXJnZXQpIHtcbiAgICAgIGNvbnN0IGF0dHJzID0gaXNUYXJnZXQgPT09IHRydWUgPyB7IC4uLmNvbWJvYm94QXR0cnMudmFsdWUsIC4uLnN0YXRlLnNwbGl0QXR0cnMuYXR0cmlidXRlcy52YWx1ZSB9IDogdm9pZCAwXG5cbiAgICAgIGNvbnN0IGRhdGEgPSB7XG4gICAgICAgIHJlZjogaXNUYXJnZXQgPT09IHRydWUgPyB0YXJnZXRSZWYgOiB2b2lkIDAsXG4gICAgICAgIGtleTogJ2lfdCcsXG4gICAgICAgIGNsYXNzOiBjb21wdXRlZElucHV0Q2xhc3MudmFsdWUsXG4gICAgICAgIHN0eWxlOiBwcm9wcy5pbnB1dFN0eWxlLFxuICAgICAgICB2YWx1ZTogaW5wdXRWYWx1ZS52YWx1ZSAhPT0gdm9pZCAwID8gaW5wdXRWYWx1ZS52YWx1ZSA6ICcnLFxuICAgICAgICAvLyByZXF1aXJlZCBmb3IgQW5kcm9pZCBpbiBvcmRlciB0byBzaG93IEVOVEVSIGtleSB3aGVuIGluIGZvcm1cbiAgICAgICAgdHlwZTogJ3NlYXJjaCcsXG4gICAgICAgIC4uLmF0dHJzLFxuICAgICAgICBpZDogaXNUYXJnZXQgPT09IHRydWUgPyBzdGF0ZS50YXJnZXRVaWQudmFsdWUgOiB2b2lkIDAsXG4gICAgICAgIG1heGxlbmd0aDogcHJvcHMubWF4bGVuZ3RoLFxuICAgICAgICBhdXRvY29tcGxldGU6IHByb3BzLmF1dG9jb21wbGV0ZSxcbiAgICAgICAgJ2RhdGEtYXV0b2ZvY3VzJzogZnJvbURpYWxvZyA9PT0gdHJ1ZSB8fCBwcm9wcy5hdXRvZm9jdXMgPT09IHRydWUgfHwgdm9pZCAwLFxuICAgICAgICBkaXNhYmxlZDogcHJvcHMuZGlzYWJsZSA9PT0gdHJ1ZSxcbiAgICAgICAgcmVhZG9ubHk6IHByb3BzLnJlYWRvbmx5ID09PSB0cnVlLFxuICAgICAgICAuLi5pbnB1dENvbnRyb2xFdmVudHMudmFsdWVcbiAgICAgIH1cblxuICAgICAgaWYgKGZyb21EaWFsb2cgIT09IHRydWUgJiYgaGFzRGlhbG9nID09PSB0cnVlKSB7XG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KGRhdGEuY2xhc3MpID09PSB0cnVlKSB7XG4gICAgICAgICAgZGF0YS5jbGFzcyA9IFsgLi4uZGF0YS5jbGFzcywgJ25vLXBvaW50ZXItZXZlbnRzJyBdXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgZGF0YS5jbGFzcyArPSAnIG5vLXBvaW50ZXItZXZlbnRzJ1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBoKCdpbnB1dCcsIGRhdGEpXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gb25JbnB1dCAoZSkge1xuICAgICAgaWYgKGZpbHRlclRpbWVyICE9PSBudWxsKSB7XG4gICAgICAgIGNsZWFyVGltZW91dChmaWx0ZXJUaW1lcilcbiAgICAgICAgZmlsdGVyVGltZXIgPSBudWxsXG4gICAgICB9XG4gICAgICBpZiAoaW5wdXRWYWx1ZVRpbWVyICE9PSBudWxsKSB7XG4gICAgICAgIGNsZWFyVGltZW91dChpbnB1dFZhbHVlVGltZXIpXG4gICAgICAgIGlucHV0VmFsdWVUaW1lciA9IG51bGxcbiAgICAgIH1cblxuICAgICAgaWYgKGUgJiYgZS50YXJnZXQgJiYgZS50YXJnZXQucUNvbXBvc2luZyA9PT0gdHJ1ZSkge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgc2V0SW5wdXRWYWx1ZShlLnRhcmdldC52YWx1ZSB8fCAnJylcbiAgICAgIC8vIG1hcmsgaXQgaGVyZSBhcyB1c2VyIGlucHV0IHNvIHRoYXQgaWYgdXBkYXRlSW5wdXRWYWx1ZSBpcyBjYWxsZWRcbiAgICAgIC8vIGJlZm9yZSBmaWx0ZXIgaXMgY2FsbGVkIHRoZSBpbmRpY2F0b3IgaXMgcmVzZXRcbiAgICAgIHVzZXJJbnB1dFZhbHVlID0gdHJ1ZVxuICAgICAgZGVmYXVsdElucHV0VmFsdWUgPSBpbnB1dFZhbHVlLnZhbHVlXG5cbiAgICAgIGlmIChcbiAgICAgICAgc3RhdGUuZm9jdXNlZC52YWx1ZSAhPT0gdHJ1ZVxuICAgICAgICAmJiAoaGFzRGlhbG9nICE9PSB0cnVlIHx8IGRpYWxvZ0ZpZWxkRm9jdXNlZC52YWx1ZSA9PT0gdHJ1ZSlcbiAgICAgICkge1xuICAgICAgICBzdGF0ZS5mb2N1cygpXG4gICAgICB9XG5cbiAgICAgIGlmIChwcm9wcy5vbkZpbHRlciAhPT0gdm9pZCAwKSB7XG4gICAgICAgIGZpbHRlclRpbWVyID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgZmlsdGVyVGltZXIgPSBudWxsXG4gICAgICAgICAgZmlsdGVyKGlucHV0VmFsdWUudmFsdWUpXG4gICAgICAgIH0sIHByb3BzLmlucHV0RGVib3VuY2UpXG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc2V0SW5wdXRWYWx1ZSAodmFsLCBlbWl0SW1tZWRpYXRlbHkpIHtcbiAgICAgIGlmIChpbnB1dFZhbHVlLnZhbHVlICE9PSB2YWwpIHtcbiAgICAgICAgaW5wdXRWYWx1ZS52YWx1ZSA9IHZhbFxuXG4gICAgICAgIGlmIChlbWl0SW1tZWRpYXRlbHkgPT09IHRydWUgfHwgcHJvcHMuaW5wdXREZWJvdW5jZSA9PT0gMCB8fCBwcm9wcy5pbnB1dERlYm91bmNlID09PSAnMCcpIHtcbiAgICAgICAgICBlbWl0KCdpbnB1dFZhbHVlJywgdmFsKVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgIGlucHV0VmFsdWVUaW1lciA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgaW5wdXRWYWx1ZVRpbWVyID0gbnVsbFxuICAgICAgICAgICAgZW1pdCgnaW5wdXRWYWx1ZScsIHZhbClcbiAgICAgICAgICB9LCBwcm9wcy5pbnB1dERlYm91bmNlKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gdXBkYXRlSW5wdXRWYWx1ZSAodmFsLCBub0ZpbHRlcmluZywgaW50ZXJuYWwpIHtcbiAgICAgIHVzZXJJbnB1dFZhbHVlID0gaW50ZXJuYWwgIT09IHRydWVcblxuICAgICAgaWYgKHByb3BzLnVzZUlucHV0ID09PSB0cnVlKSB7XG4gICAgICAgIHNldElucHV0VmFsdWUodmFsLCB0cnVlKVxuXG4gICAgICAgIGlmIChub0ZpbHRlcmluZyA9PT0gdHJ1ZSB8fCBpbnRlcm5hbCAhPT0gdHJ1ZSkge1xuICAgICAgICAgIGRlZmF1bHRJbnB1dFZhbHVlID0gdmFsXG4gICAgICAgIH1cblxuICAgICAgICBub0ZpbHRlcmluZyAhPT0gdHJ1ZSAmJiBmaWx0ZXIodmFsKVxuICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGZpbHRlciAodmFsLCBrZWVwQ2xvc2VkLCBhZnRlclVwZGF0ZUZuKSB7XG4gICAgICBpZiAocHJvcHMub25GaWx0ZXIgPT09IHZvaWQgMCB8fCAoa2VlcENsb3NlZCAhPT0gdHJ1ZSAmJiBzdGF0ZS5mb2N1c2VkLnZhbHVlICE9PSB0cnVlKSkge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgaWYgKHN0YXRlLmlubmVyTG9hZGluZy52YWx1ZSA9PT0gdHJ1ZSkge1xuICAgICAgICBlbWl0KCdmaWx0ZXJBYm9ydCcpXG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgc3RhdGUuaW5uZXJMb2FkaW5nLnZhbHVlID0gdHJ1ZVxuICAgICAgICBpbm5lckxvYWRpbmdJbmRpY2F0b3IudmFsdWUgPSB0cnVlXG4gICAgICB9XG5cbiAgICAgIGlmIChcbiAgICAgICAgdmFsICE9PSAnJ1xuICAgICAgICAmJiBwcm9wcy5tdWx0aXBsZSAhPT0gdHJ1ZVxuICAgICAgICAmJiBpbm5lclZhbHVlLnZhbHVlLmxlbmd0aCAhPT0gMFxuICAgICAgICAmJiB1c2VySW5wdXRWYWx1ZSAhPT0gdHJ1ZVxuICAgICAgICAmJiB2YWwgPT09IGdldE9wdGlvbkxhYmVsLnZhbHVlKGlubmVyVmFsdWUudmFsdWVbIDAgXSlcbiAgICAgICkge1xuICAgICAgICB2YWwgPSAnJ1xuICAgICAgfVxuXG4gICAgICBjb25zdCBsb2NhbEZpbHRlcklkID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIG1lbnUudmFsdWUgPT09IHRydWUgJiYgKG1lbnUudmFsdWUgPSBmYWxzZSlcbiAgICAgIH0sIDEwKVxuXG4gICAgICBmaWx0ZXJJZCAhPT0gbnVsbCAmJiBjbGVhclRpbWVvdXQoZmlsdGVySWQpXG4gICAgICBmaWx0ZXJJZCA9IGxvY2FsRmlsdGVySWRcblxuICAgICAgZW1pdChcbiAgICAgICAgJ2ZpbHRlcicsXG4gICAgICAgIHZhbCxcbiAgICAgICAgKGZuLCBhZnRlckZuKSA9PiB7XG4gICAgICAgICAgaWYgKChrZWVwQ2xvc2VkID09PSB0cnVlIHx8IHN0YXRlLmZvY3VzZWQudmFsdWUgPT09IHRydWUpICYmIGZpbHRlcklkID09PSBsb2NhbEZpbHRlcklkKSB7XG4gICAgICAgICAgICBjbGVhclRpbWVvdXQoZmlsdGVySWQpXG5cbiAgICAgICAgICAgIHR5cGVvZiBmbiA9PT0gJ2Z1bmN0aW9uJyAmJiBmbigpXG5cbiAgICAgICAgICAgIC8vIGhpZGUgaW5kaWNhdG9yIHRvIGFsbG93IGFycm93IHRvIGFuaW1hdGVcbiAgICAgICAgICAgIGlubmVyTG9hZGluZ0luZGljYXRvci52YWx1ZSA9IGZhbHNlXG5cbiAgICAgICAgICAgIG5leHRUaWNrKCgpID0+IHtcbiAgICAgICAgICAgICAgc3RhdGUuaW5uZXJMb2FkaW5nLnZhbHVlID0gZmFsc2VcblxuICAgICAgICAgICAgICBpZiAoc3RhdGUuZWRpdGFibGUudmFsdWUgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICBpZiAoa2VlcENsb3NlZCA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgICAgbWVudS52YWx1ZSA9PT0gdHJ1ZSAmJiBoaWRlUG9wdXAoKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmIChtZW51LnZhbHVlID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgICB1cGRhdGVNZW51KHRydWUpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgbWVudS52YWx1ZSA9IHRydWVcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICB0eXBlb2YgYWZ0ZXJGbiA9PT0gJ2Z1bmN0aW9uJyAmJiBuZXh0VGljaygoKSA9PiB7IGFmdGVyRm4ocHJveHkpIH0pXG4gICAgICAgICAgICAgIHR5cGVvZiBhZnRlclVwZGF0ZUZuID09PSAnZnVuY3Rpb24nICYmIG5leHRUaWNrKCgpID0+IHsgYWZ0ZXJVcGRhdGVGbihwcm94eSkgfSlcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICAoKSA9PiB7XG4gICAgICAgICAgaWYgKHN0YXRlLmZvY3VzZWQudmFsdWUgPT09IHRydWUgJiYgZmlsdGVySWQgPT09IGxvY2FsRmlsdGVySWQpIHtcbiAgICAgICAgICAgIGNsZWFyVGltZW91dChmaWx0ZXJJZClcbiAgICAgICAgICAgIHN0YXRlLmlubmVyTG9hZGluZy52YWx1ZSA9IGZhbHNlXG4gICAgICAgICAgICBpbm5lckxvYWRpbmdJbmRpY2F0b3IudmFsdWUgPSBmYWxzZVxuICAgICAgICAgIH1cbiAgICAgICAgICBtZW51LnZhbHVlID09PSB0cnVlICYmIChtZW51LnZhbHVlID0gZmFsc2UpXG4gICAgICAgIH1cbiAgICAgIClcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXRNZW51ICgpIHtcbiAgICAgIHJldHVybiBoKFFNZW51LCB7XG4gICAgICAgIHJlZjogbWVudVJlZixcbiAgICAgICAgY2xhc3M6IG1lbnVDb250ZW50Q2xhc3MudmFsdWUsXG4gICAgICAgIHN0eWxlOiBwcm9wcy5wb3B1cENvbnRlbnRTdHlsZSxcbiAgICAgICAgbW9kZWxWYWx1ZTogbWVudS52YWx1ZSxcbiAgICAgICAgZml0OiBwcm9wcy5tZW51U2hyaW5rICE9PSB0cnVlLFxuICAgICAgICBjb3ZlcjogcHJvcHMub3B0aW9uc0NvdmVyID09PSB0cnVlICYmIG5vT3B0aW9ucy52YWx1ZSAhPT0gdHJ1ZSAmJiBwcm9wcy51c2VJbnB1dCAhPT0gdHJ1ZSxcbiAgICAgICAgYW5jaG9yOiBwcm9wcy5tZW51QW5jaG9yLFxuICAgICAgICBzZWxmOiBwcm9wcy5tZW51U2VsZixcbiAgICAgICAgb2Zmc2V0OiBwcm9wcy5tZW51T2Zmc2V0LFxuICAgICAgICBkYXJrOiBpc09wdGlvbnNEYXJrLnZhbHVlLFxuICAgICAgICBub1BhcmVudEV2ZW50OiB0cnVlLFxuICAgICAgICBub1JlZm9jdXM6IHRydWUsXG4gICAgICAgIG5vRm9jdXM6IHRydWUsXG4gICAgICAgIG5vUm91dGVEaXNtaXNzOiBwcm9wcy5wb3B1cE5vUm91dGVEaXNtaXNzLFxuICAgICAgICBzcXVhcmU6IHNxdWFyZWRNZW51LnZhbHVlLFxuICAgICAgICB0cmFuc2l0aW9uU2hvdzogcHJvcHMudHJhbnNpdGlvblNob3csXG4gICAgICAgIHRyYW5zaXRpb25IaWRlOiBwcm9wcy50cmFuc2l0aW9uSGlkZSxcbiAgICAgICAgdHJhbnNpdGlvbkR1cmF0aW9uOiBwcm9wcy50cmFuc2l0aW9uRHVyYXRpb24sXG4gICAgICAgIHNlcGFyYXRlQ2xvc2VQb3B1cDogdHJ1ZSxcbiAgICAgICAgLi4ubGlzdGJveEF0dHJzLnZhbHVlLFxuICAgICAgICBvblNjcm9sbFBhc3NpdmU6IG9uVmlydHVhbFNjcm9sbEV2dCxcbiAgICAgICAgb25CZWZvcmVTaG93OiBvbkNvbnRyb2xQb3B1cFNob3csXG4gICAgICAgIG9uQmVmb3JlSGlkZTogb25NZW51QmVmb3JlSGlkZSxcbiAgICAgICAgb25TaG93OiBvbk1lbnVTaG93XG4gICAgICB9LCBnZXRBbGxPcHRpb25zKVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIG9uTWVudUJlZm9yZUhpZGUgKGUpIHtcbiAgICAgIG9uQ29udHJvbFBvcHVwSGlkZShlKVxuICAgICAgY2xvc2VNZW51KClcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBvbk1lbnVTaG93ICgpIHtcbiAgICAgIHNldFZpcnR1YWxTY3JvbGxTaXplKClcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBvbkRpYWxvZ0ZpZWxkRm9jdXMgKGUpIHtcbiAgICAgIHN0b3AoZSlcbiAgICAgIHRhcmdldFJlZi52YWx1ZSAhPT0gbnVsbCAmJiB0YXJnZXRSZWYudmFsdWUuZm9jdXMoKVxuICAgICAgZGlhbG9nRmllbGRGb2N1c2VkLnZhbHVlID0gdHJ1ZVxuICAgICAgd2luZG93LnNjcm9sbFRvKHdpbmRvdy5wYWdlWE9mZnNldCB8fCB3aW5kb3cuc2Nyb2xsWCB8fCBkb2N1bWVudC5ib2R5LnNjcm9sbExlZnQgfHwgMCwgMClcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBvbkRpYWxvZ0ZpZWxkQmx1ciAoZSkge1xuICAgICAgc3RvcChlKVxuICAgICAgbmV4dFRpY2soKCkgPT4ge1xuICAgICAgICBkaWFsb2dGaWVsZEZvY3VzZWQudmFsdWUgPSBmYWxzZVxuICAgICAgfSlcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXREaWFsb2cgKCkge1xuICAgICAgY29uc3QgY29udGVudCA9IFtcbiAgICAgICAgaChRRmllbGQsIHtcbiAgICAgICAgICBjbGFzczogYGNvbC1hdXRvICR7IHN0YXRlLmZpZWxkQ2xhc3MudmFsdWUgfWAsXG4gICAgICAgICAgLi4uaW5uZXJGaWVsZFByb3BzLnZhbHVlLFxuICAgICAgICAgIGZvcjogc3RhdGUudGFyZ2V0VWlkLnZhbHVlLFxuICAgICAgICAgIGRhcms6IGlzT3B0aW9uc0RhcmsudmFsdWUsXG4gICAgICAgICAgc3F1YXJlOiB0cnVlLFxuICAgICAgICAgIGxvYWRpbmc6IGlubmVyTG9hZGluZ0luZGljYXRvci52YWx1ZSxcbiAgICAgICAgICBpdGVtQWxpZ25lZDogZmFsc2UsXG4gICAgICAgICAgZmlsbGVkOiB0cnVlLFxuICAgICAgICAgIHN0YWNrTGFiZWw6IGlucHV0VmFsdWUudmFsdWUubGVuZ3RoICE9PSAwLFxuICAgICAgICAgIC4uLnN0YXRlLnNwbGl0QXR0cnMubGlzdGVuZXJzLnZhbHVlLFxuICAgICAgICAgIG9uRm9jdXM6IG9uRGlhbG9nRmllbGRGb2N1cyxcbiAgICAgICAgICBvbkJsdXI6IG9uRGlhbG9nRmllbGRCbHVyXG4gICAgICAgIH0sIHtcbiAgICAgICAgICAuLi5zbG90cyxcbiAgICAgICAgICByYXdDb250cm9sOiAoKSA9PiBzdGF0ZS5nZXRDb250cm9sKHRydWUpLFxuICAgICAgICAgIGJlZm9yZTogdm9pZCAwLFxuICAgICAgICAgIGFmdGVyOiB2b2lkIDBcbiAgICAgICAgfSlcbiAgICAgIF1cblxuICAgICAgbWVudS52YWx1ZSA9PT0gdHJ1ZSAmJiBjb250ZW50LnB1c2goXG4gICAgICAgIGgoJ2RpdicsIHtcbiAgICAgICAgICByZWY6IG1lbnVDb250ZW50UmVmLFxuICAgICAgICAgIGNsYXNzOiBtZW51Q29udGVudENsYXNzLnZhbHVlICsgJyBzY3JvbGwnLFxuICAgICAgICAgIHN0eWxlOiBwcm9wcy5wb3B1cENvbnRlbnRTdHlsZSxcbiAgICAgICAgICAuLi5saXN0Ym94QXR0cnMudmFsdWUsXG4gICAgICAgICAgb25DbGljazogcHJldmVudCxcbiAgICAgICAgICBvblNjcm9sbFBhc3NpdmU6IG9uVmlydHVhbFNjcm9sbEV2dFxuICAgICAgICB9LCBnZXRBbGxPcHRpb25zKCkpXG4gICAgICApXG5cbiAgICAgIHJldHVybiBoKFFEaWFsb2csIHtcbiAgICAgICAgcmVmOiBkaWFsb2dSZWYsXG4gICAgICAgIG1vZGVsVmFsdWU6IGRpYWxvZy52YWx1ZSxcbiAgICAgICAgcG9zaXRpb246IHByb3BzLnVzZUlucHV0ID09PSB0cnVlID8gJ3RvcCcgOiB2b2lkIDAsXG4gICAgICAgIHRyYW5zaXRpb25TaG93OiB0cmFuc2l0aW9uU2hvd0NvbXB1dGVkLFxuICAgICAgICB0cmFuc2l0aW9uSGlkZTogcHJvcHMudHJhbnNpdGlvbkhpZGUsXG4gICAgICAgIHRyYW5zaXRpb25EdXJhdGlvbjogcHJvcHMudHJhbnNpdGlvbkR1cmF0aW9uLFxuICAgICAgICBub1JvdXRlRGlzbWlzczogcHJvcHMucG9wdXBOb1JvdXRlRGlzbWlzcyxcbiAgICAgICAgb25CZWZvcmVTaG93OiBvbkNvbnRyb2xQb3B1cFNob3csXG4gICAgICAgIG9uQmVmb3JlSGlkZTogb25EaWFsb2dCZWZvcmVIaWRlLFxuICAgICAgICBvbkhpZGU6IG9uRGlhbG9nSGlkZSxcbiAgICAgICAgb25TaG93OiBvbkRpYWxvZ1Nob3dcbiAgICAgIH0sICgpID0+IGgoJ2RpdicsIHtcbiAgICAgICAgY2xhc3M6ICdxLXNlbGVjdF9fZGlhbG9nJ1xuICAgICAgICAgICsgKGlzT3B0aW9uc0RhcmsudmFsdWUgPT09IHRydWUgPyAnIHEtc2VsZWN0X19kaWFsb2ctLWRhcmsgcS1kYXJrJyA6ICcnKVxuICAgICAgICAgICsgKGRpYWxvZ0ZpZWxkRm9jdXNlZC52YWx1ZSA9PT0gdHJ1ZSA/ICcgcS1zZWxlY3RfX2RpYWxvZy0tZm9jdXNlZCcgOiAnJylcbiAgICAgIH0sIGNvbnRlbnQpKVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIG9uRGlhbG9nQmVmb3JlSGlkZSAoZSkge1xuICAgICAgb25Db250cm9sUG9wdXBIaWRlKGUpXG5cbiAgICAgIGlmIChkaWFsb2dSZWYudmFsdWUgIT09IG51bGwpIHtcbiAgICAgICAgZGlhbG9nUmVmLnZhbHVlLl9fdXBkYXRlUmVmb2N1c1RhcmdldChcbiAgICAgICAgICBzdGF0ZS5yb290UmVmLnZhbHVlLnF1ZXJ5U2VsZWN0b3IoJy5xLWZpZWxkX19uYXRpdmUgPiBbdGFiaW5kZXhdOmxhc3QtY2hpbGQnKVxuICAgICAgICApXG4gICAgICB9XG5cbiAgICAgIHN0YXRlLmZvY3VzZWQudmFsdWUgPSBmYWxzZVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIG9uRGlhbG9nSGlkZSAoZSkge1xuICAgICAgaGlkZVBvcHVwKClcbiAgICAgIHN0YXRlLmZvY3VzZWQudmFsdWUgPT09IGZhbHNlICYmIGVtaXQoJ2JsdXInLCBlKVxuICAgICAgcmVzZXRJbnB1dFZhbHVlKClcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBvbkRpYWxvZ1Nob3cgKCkge1xuICAgICAgY29uc3QgZWwgPSBkb2N1bWVudC5hY3RpdmVFbGVtZW50XG4gICAgICBpZiAoXG4gICAgICAgIChlbCA9PT0gbnVsbCB8fCBlbC5pZCAhPT0gc3RhdGUudGFyZ2V0VWlkLnZhbHVlKVxuICAgICAgICAmJiB0YXJnZXRSZWYudmFsdWUgIT09IG51bGxcbiAgICAgICAgJiYgdGFyZ2V0UmVmLnZhbHVlICE9PSBlbFxuICAgICAgKSB7XG4gICAgICAgIHRhcmdldFJlZi52YWx1ZS5mb2N1cygpXG4gICAgICB9XG5cbiAgICAgIHNldFZpcnR1YWxTY3JvbGxTaXplKClcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjbG9zZU1lbnUgKCkge1xuICAgICAgaWYgKGRpYWxvZy52YWx1ZSA9PT0gdHJ1ZSkge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgb3B0aW9uSW5kZXgudmFsdWUgPSAtMVxuXG4gICAgICBpZiAobWVudS52YWx1ZSA9PT0gdHJ1ZSkge1xuICAgICAgICBtZW51LnZhbHVlID0gZmFsc2VcbiAgICAgIH1cblxuICAgICAgaWYgKHN0YXRlLmZvY3VzZWQudmFsdWUgPT09IGZhbHNlKSB7XG4gICAgICAgIGlmIChmaWx0ZXJJZCAhPT0gbnVsbCkge1xuICAgICAgICAgIGNsZWFyVGltZW91dChmaWx0ZXJJZClcbiAgICAgICAgICBmaWx0ZXJJZCA9IG51bGxcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChzdGF0ZS5pbm5lckxvYWRpbmcudmFsdWUgPT09IHRydWUpIHtcbiAgICAgICAgICBlbWl0KCdmaWx0ZXJBYm9ydCcpXG4gICAgICAgICAgc3RhdGUuaW5uZXJMb2FkaW5nLnZhbHVlID0gZmFsc2VcbiAgICAgICAgICBpbm5lckxvYWRpbmdJbmRpY2F0b3IudmFsdWUgPSBmYWxzZVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc2hvd1BvcHVwIChlKSB7XG4gICAgICBpZiAoc3RhdGUuZWRpdGFibGUudmFsdWUgIT09IHRydWUpIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIGlmIChoYXNEaWFsb2cgPT09IHRydWUpIHtcbiAgICAgICAgc3RhdGUub25Db250cm9sRm9jdXNpbihlKVxuICAgICAgICBkaWFsb2cudmFsdWUgPSB0cnVlXG4gICAgICAgIG5leHRUaWNrKCgpID0+IHtcbiAgICAgICAgICBzdGF0ZS5mb2N1cygpXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgc3RhdGUuZm9jdXMoKVxuICAgICAgfVxuXG4gICAgICBpZiAocHJvcHMub25GaWx0ZXIgIT09IHZvaWQgMCkge1xuICAgICAgICBmaWx0ZXIoaW5wdXRWYWx1ZS52YWx1ZSlcbiAgICAgIH1cbiAgICAgIGVsc2UgaWYgKG5vT3B0aW9ucy52YWx1ZSAhPT0gdHJ1ZSB8fCBzbG90c1sgJ25vLW9wdGlvbicgXSAhPT0gdm9pZCAwKSB7XG4gICAgICAgIG1lbnUudmFsdWUgPSB0cnVlXG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaGlkZVBvcHVwICgpIHtcbiAgICAgIGRpYWxvZy52YWx1ZSA9IGZhbHNlXG4gICAgICBjbG9zZU1lbnUoKVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJlc2V0SW5wdXRWYWx1ZSAoKSB7XG4gICAgICBwcm9wcy51c2VJbnB1dCA9PT0gdHJ1ZSAmJiB1cGRhdGVJbnB1dFZhbHVlKFxuICAgICAgICBwcm9wcy5tdWx0aXBsZSAhPT0gdHJ1ZSAmJiBwcm9wcy5maWxsSW5wdXQgPT09IHRydWUgJiYgaW5uZXJWYWx1ZS52YWx1ZS5sZW5ndGggIT09IDBcbiAgICAgICAgICA/IGdldE9wdGlvbkxhYmVsLnZhbHVlKGlubmVyVmFsdWUudmFsdWVbIDAgXSkgfHwgJydcbiAgICAgICAgICA6ICcnLFxuICAgICAgICB0cnVlLFxuICAgICAgICB0cnVlXG4gICAgICApXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gdXBkYXRlTWVudSAoc2hvdykge1xuICAgICAgbGV0IG9wdGlvbkluZGV4ID0gLTFcblxuICAgICAgaWYgKHNob3cgPT09IHRydWUpIHtcbiAgICAgICAgaWYgKGlubmVyVmFsdWUudmFsdWUubGVuZ3RoICE9PSAwKSB7XG4gICAgICAgICAgY29uc3QgdmFsID0gZ2V0T3B0aW9uVmFsdWUudmFsdWUoaW5uZXJWYWx1ZS52YWx1ZVsgMCBdKVxuICAgICAgICAgIG9wdGlvbkluZGV4ID0gcHJvcHMub3B0aW9ucy5maW5kSW5kZXgodiA9PiBpc0RlZXBFcXVhbChnZXRPcHRpb25WYWx1ZS52YWx1ZSh2KSwgdmFsKSlcbiAgICAgICAgfVxuXG4gICAgICAgIGxvY2FsUmVzZXRWaXJ0dWFsU2Nyb2xsKG9wdGlvbkluZGV4KVxuICAgICAgfVxuXG4gICAgICBzZXRPcHRpb25JbmRleChvcHRpb25JbmRleClcbiAgICB9XG5cbiAgICBmdW5jdGlvbiByZXJlbmRlck1lbnUgKG5ld0xlbmd0aCwgb2xkTGVuZ3RoKSB7XG4gICAgICBpZiAobWVudS52YWx1ZSA9PT0gdHJ1ZSAmJiBzdGF0ZS5pbm5lckxvYWRpbmcudmFsdWUgPT09IGZhbHNlKSB7XG4gICAgICAgIGxvY2FsUmVzZXRWaXJ0dWFsU2Nyb2xsKC0xLCB0cnVlKVxuXG4gICAgICAgIG5leHRUaWNrKCgpID0+IHtcbiAgICAgICAgICBpZiAobWVudS52YWx1ZSA9PT0gdHJ1ZSAmJiBzdGF0ZS5pbm5lckxvYWRpbmcudmFsdWUgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICBpZiAobmV3TGVuZ3RoID4gb2xkTGVuZ3RoKSB7XG4gICAgICAgICAgICAgIGxvY2FsUmVzZXRWaXJ0dWFsU2Nyb2xsKClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICB1cGRhdGVNZW51KHRydWUpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHVwZGF0ZU1lbnVQb3NpdGlvbiAoKSB7XG4gICAgICBpZiAoZGlhbG9nLnZhbHVlID09PSBmYWxzZSAmJiBtZW51UmVmLnZhbHVlICE9PSBudWxsKSB7XG4gICAgICAgIG1lbnVSZWYudmFsdWUudXBkYXRlUG9zaXRpb24oKVxuICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIG9uQ29udHJvbFBvcHVwU2hvdyAoZSkge1xuICAgICAgZSAhPT0gdm9pZCAwICYmIHN0b3AoZSlcbiAgICAgIGVtaXQoJ3BvcHVwU2hvdycsIGUpXG4gICAgICBzdGF0ZS5oYXNQb3B1cE9wZW4gPSB0cnVlXG4gICAgICBzdGF0ZS5vbkNvbnRyb2xGb2N1c2luKGUpXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gb25Db250cm9sUG9wdXBIaWRlIChlKSB7XG4gICAgICBlICE9PSB2b2lkIDAgJiYgc3RvcChlKVxuICAgICAgZW1pdCgncG9wdXBIaWRlJywgZSlcbiAgICAgIHN0YXRlLmhhc1BvcHVwT3BlbiA9IGZhbHNlXG4gICAgICBzdGF0ZS5vbkNvbnRyb2xGb2N1c291dChlKVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHVwZGF0ZVByZVN0YXRlICgpIHtcbiAgICAgIGhhc0RpYWxvZyA9ICRxLnBsYXRmb3JtLmlzLm1vYmlsZSAhPT0gdHJ1ZSAmJiBwcm9wcy5iZWhhdmlvciAhPT0gJ2RpYWxvZydcbiAgICAgICAgPyBmYWxzZVxuICAgICAgICA6IHByb3BzLmJlaGF2aW9yICE9PSAnbWVudScgJiYgKFxuICAgICAgICAgIHByb3BzLnVzZUlucHV0ID09PSB0cnVlXG4gICAgICAgICAgICA/IHNsb3RzWyAnbm8tb3B0aW9uJyBdICE9PSB2b2lkIDAgfHwgcHJvcHMub25GaWx0ZXIgIT09IHZvaWQgMCB8fCBub09wdGlvbnMudmFsdWUgPT09IGZhbHNlXG4gICAgICAgICAgICA6IHRydWVcbiAgICAgICAgKVxuXG4gICAgICB0cmFuc2l0aW9uU2hvd0NvbXB1dGVkID0gJHEucGxhdGZvcm0uaXMuaW9zID09PSB0cnVlICYmIGhhc0RpYWxvZyA9PT0gdHJ1ZSAmJiBwcm9wcy51c2VJbnB1dCA9PT0gdHJ1ZVxuICAgICAgICA/ICdmYWRlJ1xuICAgICAgICA6IHByb3BzLnRyYW5zaXRpb25TaG93XG4gICAgfVxuXG4gICAgb25CZWZvcmVVcGRhdGUodXBkYXRlUHJlU3RhdGUpXG4gICAgb25VcGRhdGVkKHVwZGF0ZU1lbnVQb3NpdGlvbilcblxuICAgIHVwZGF0ZVByZVN0YXRlKClcblxuICAgIG9uQmVmb3JlVW5tb3VudCgoKSA9PiB7XG4gICAgICBmaWx0ZXJUaW1lciAhPT0gbnVsbCAmJiBjbGVhclRpbWVvdXQoZmlsdGVyVGltZXIpXG4gICAgICBpbnB1dFZhbHVlVGltZXIgIT09IG51bGwgJiYgY2xlYXJUaW1lb3V0KGlucHV0VmFsdWVUaW1lcilcbiAgICB9KVxuXG4gICAgLy8gZXhwb3NlIHB1YmxpYyBtZXRob2RzXG4gICAgT2JqZWN0LmFzc2lnbihwcm94eSwge1xuICAgICAgc2hvd1BvcHVwLCBoaWRlUG9wdXAsXG4gICAgICByZW1vdmVBdEluZGV4LCBhZGQsIHRvZ2dsZU9wdGlvbixcbiAgICAgIGdldE9wdGlvbkluZGV4OiAoKSA9PiBvcHRpb25JbmRleC52YWx1ZSxcbiAgICAgIHNldE9wdGlvbkluZGV4LCBtb3ZlT3B0aW9uU2VsZWN0aW9uLFxuICAgICAgZmlsdGVyLCB1cGRhdGVNZW51UG9zaXRpb24sIHVwZGF0ZUlucHV0VmFsdWUsXG4gICAgICBpc09wdGlvblNlbGVjdGVkLFxuICAgICAgZ2V0RW1pdHRpbmdPcHRpb25WYWx1ZSxcbiAgICAgIGlzT3B0aW9uRGlzYWJsZWQ6ICguLi5hcmdzKSA9PiBpc09wdGlvbkRpc2FibGVkLnZhbHVlLmFwcGx5KG51bGwsIGFyZ3MpID09PSB0cnVlLFxuICAgICAgZ2V0T3B0aW9uVmFsdWU6ICguLi5hcmdzKSA9PiBnZXRPcHRpb25WYWx1ZS52YWx1ZS5hcHBseShudWxsLCBhcmdzKSxcbiAgICAgIGdldE9wdGlvbkxhYmVsOiAoLi4uYXJncykgPT4gZ2V0T3B0aW9uTGFiZWwudmFsdWUuYXBwbHkobnVsbCwgYXJncylcbiAgICB9KVxuXG4gICAgT2JqZWN0LmFzc2lnbihzdGF0ZSwge1xuICAgICAgaW5uZXJWYWx1ZSxcblxuICAgICAgZmllbGRDbGFzczogY29tcHV0ZWQoKCkgPT5cbiAgICAgICAgYHEtc2VsZWN0IHEtZmllbGQtLWF1dG8taGVpZ2h0IHEtc2VsZWN0LS13aXRoJHsgcHJvcHMudXNlSW5wdXQgIT09IHRydWUgPyAnb3V0JyA6ICcnIH0taW5wdXRgXG4gICAgICAgICsgYCBxLXNlbGVjdC0td2l0aCR7IHByb3BzLnVzZUNoaXBzICE9PSB0cnVlID8gJ291dCcgOiAnJyB9LWNoaXBzYFxuICAgICAgICArIGAgcS1zZWxlY3QtLSR7IHByb3BzLm11bHRpcGxlID09PSB0cnVlID8gJ211bHRpcGxlJyA6ICdzaW5nbGUnIH1gXG4gICAgICApLFxuXG4gICAgICBpbnB1dFJlZixcbiAgICAgIHRhcmdldFJlZixcbiAgICAgIGhhc1ZhbHVlLFxuICAgICAgc2hvd1BvcHVwLFxuXG4gICAgICBmbG9hdGluZ0xhYmVsOiBjb21wdXRlZCgoKSA9PlxuICAgICAgICAocHJvcHMuaGlkZVNlbGVjdGVkICE9PSB0cnVlICYmIGhhc1ZhbHVlLnZhbHVlID09PSB0cnVlKVxuICAgICAgICB8fCB0eXBlb2YgaW5wdXRWYWx1ZS52YWx1ZSA9PT0gJ251bWJlcidcbiAgICAgICAgfHwgaW5wdXRWYWx1ZS52YWx1ZS5sZW5ndGggIT09IDBcbiAgICAgICAgfHwgZmllbGRWYWx1ZUlzRmlsbGVkKHByb3BzLmRpc3BsYXlWYWx1ZSlcbiAgICAgICksXG5cbiAgICAgIGdldENvbnRyb2xDaGlsZDogKCkgPT4ge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgc3RhdGUuZWRpdGFibGUudmFsdWUgIT09IGZhbHNlICYmIChcbiAgICAgICAgICAgIGRpYWxvZy52YWx1ZSA9PT0gdHJ1ZSAvLyBkaWFsb2cgYWx3YXlzIGhhcyBtZW51IGRpc3BsYXllZCwgc28gbmVlZCB0byByZW5kZXIgaXRcbiAgICAgICAgICAgIHx8IG5vT3B0aW9ucy52YWx1ZSAhPT0gdHJ1ZVxuICAgICAgICAgICAgfHwgc2xvdHNbICduby1vcHRpb24nIF0gIT09IHZvaWQgMFxuICAgICAgICAgIClcbiAgICAgICAgKSB7XG4gICAgICAgICAgcmV0dXJuIGhhc0RpYWxvZyA9PT0gdHJ1ZSA/IGdldERpYWxvZygpIDogZ2V0TWVudSgpXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoc3RhdGUuaGFzUG9wdXBPcGVuID09PSB0cnVlKSB7XG4gICAgICAgICAgLy8gZXhwbGljaXRseSBzZXQgaXQgb3RoZXJ3aXNlIFRBQiB3aWxsIG5vdCBibHVyIGNvbXBvbmVudFxuICAgICAgICAgIHN0YXRlLmhhc1BvcHVwT3BlbiA9IGZhbHNlXG4gICAgICAgIH1cbiAgICAgIH0sXG5cbiAgICAgIGNvbnRyb2xFdmVudHM6IHtcbiAgICAgICAgb25Gb2N1c2luIChlKSB7IHN0YXRlLm9uQ29udHJvbEZvY3VzaW4oZSkgfSxcbiAgICAgICAgb25Gb2N1c291dCAoZSkge1xuICAgICAgICAgIHN0YXRlLm9uQ29udHJvbEZvY3Vzb3V0KGUsICgpID0+IHtcbiAgICAgICAgICAgIHJlc2V0SW5wdXRWYWx1ZSgpXG4gICAgICAgICAgICBjbG9zZU1lbnUoKVxuICAgICAgICAgIH0pXG4gICAgICAgIH0sXG4gICAgICAgIG9uQ2xpY2sgKGUpIHtcbiAgICAgICAgICAvLyBsYWJlbCBmcm9tIFFGaWVsZCB3aWxsIHByb3BhZ2F0ZSBjbGljayBvbiB0aGUgaW5wdXRcbiAgICAgICAgICBwcmV2ZW50KGUpXG5cbiAgICAgICAgICBpZiAoaGFzRGlhbG9nICE9PSB0cnVlICYmIG1lbnUudmFsdWUgPT09IHRydWUpIHtcbiAgICAgICAgICAgIGNsb3NlTWVudSgpXG4gICAgICAgICAgICB0YXJnZXRSZWYudmFsdWUgIT09IG51bGwgJiYgdGFyZ2V0UmVmLnZhbHVlLmZvY3VzKClcbiAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgIH1cblxuICAgICAgICAgIHNob3dQb3B1cChlKVxuICAgICAgICB9XG4gICAgICB9LFxuXG4gICAgICBnZXRDb250cm9sOiBmcm9tRGlhbG9nID0+IHtcbiAgICAgICAgY29uc3QgY2hpbGQgPSBnZXRTZWxlY3Rpb24oKVxuICAgICAgICBjb25zdCBpc1RhcmdldCA9IGZyb21EaWFsb2cgPT09IHRydWUgfHwgZGlhbG9nLnZhbHVlICE9PSB0cnVlIHx8IGhhc0RpYWxvZyAhPT0gdHJ1ZVxuXG4gICAgICAgIGlmIChwcm9wcy51c2VJbnB1dCA9PT0gdHJ1ZSkge1xuICAgICAgICAgIGNoaWxkLnB1c2goZ2V0SW5wdXQoZnJvbURpYWxvZywgaXNUYXJnZXQpKVxuICAgICAgICB9XG4gICAgICAgIC8vIHRoZXJlIGNhbiBiZSBvbmx5IG9uZSAod2hlbiBkaWFsb2cgaXMgb3BlbmVkIHRoZSBjb250cm9sIGluIGRpYWxvZyBzaG91bGQgYmUgdGFyZ2V0KVxuICAgICAgICBlbHNlIGlmIChzdGF0ZS5lZGl0YWJsZS52YWx1ZSA9PT0gdHJ1ZSkge1xuICAgICAgICAgIGNvbnN0IGF0dHJzID0gaXNUYXJnZXQgPT09IHRydWUgPyBjb21ib2JveEF0dHJzLnZhbHVlIDogdm9pZCAwXG5cbiAgICAgICAgICBjaGlsZC5wdXNoKFxuICAgICAgICAgICAgaCgnaW5wdXQnLCB7XG4gICAgICAgICAgICAgIHJlZjogaXNUYXJnZXQgPT09IHRydWUgPyB0YXJnZXRSZWYgOiB2b2lkIDAsXG4gICAgICAgICAgICAgIGtleTogJ2RfdCcsXG4gICAgICAgICAgICAgIGNsYXNzOiAncS1zZWxlY3RfX2ZvY3VzLXRhcmdldCcsXG4gICAgICAgICAgICAgIGlkOiBpc1RhcmdldCA9PT0gdHJ1ZSA/IHN0YXRlLnRhcmdldFVpZC52YWx1ZSA6IHZvaWQgMCxcbiAgICAgICAgICAgICAgdmFsdWU6IGFyaWFDdXJyZW50VmFsdWUudmFsdWUsXG4gICAgICAgICAgICAgIHJlYWRvbmx5OiB0cnVlLFxuICAgICAgICAgICAgICAnZGF0YS1hdXRvZm9jdXMnOiBmcm9tRGlhbG9nID09PSB0cnVlIHx8IHByb3BzLmF1dG9mb2N1cyA9PT0gdHJ1ZSB8fCB2b2lkIDAsXG4gICAgICAgICAgICAgIC4uLmF0dHJzLFxuICAgICAgICAgICAgICBvbktleWRvd246IG9uVGFyZ2V0S2V5ZG93bixcbiAgICAgICAgICAgICAgb25LZXl1cDogb25UYXJnZXRLZXl1cCxcbiAgICAgICAgICAgICAgb25LZXlwcmVzczogb25UYXJnZXRLZXlwcmVzc1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICApXG5cbiAgICAgICAgICBpZiAoaXNUYXJnZXQgPT09IHRydWUgJiYgdHlwZW9mIHByb3BzLmF1dG9jb21wbGV0ZSA9PT0gJ3N0cmluZycgJiYgcHJvcHMuYXV0b2NvbXBsZXRlLmxlbmd0aCAhPT0gMCkge1xuICAgICAgICAgICAgY2hpbGQucHVzaChcbiAgICAgICAgICAgICAgaCgnaW5wdXQnLCB7XG4gICAgICAgICAgICAgICAgY2xhc3M6ICdxLXNlbGVjdF9fYXV0b2NvbXBsZXRlLWlucHV0JyxcbiAgICAgICAgICAgICAgICBhdXRvY29tcGxldGU6IHByb3BzLmF1dG9jb21wbGV0ZSxcbiAgICAgICAgICAgICAgICB0YWJpbmRleDogLTEsXG4gICAgICAgICAgICAgICAgb25LZXl1cDogb25UYXJnZXRBdXRvY29tcGxldGVcbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIClcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAobmFtZVByb3AudmFsdWUgIT09IHZvaWQgMCAmJiBwcm9wcy5kaXNhYmxlICE9PSB0cnVlICYmIGlubmVyT3B0aW9uc1ZhbHVlLnZhbHVlLmxlbmd0aCAhPT0gMCkge1xuICAgICAgICAgIGNvbnN0IG9wdHMgPSBpbm5lck9wdGlvbnNWYWx1ZS52YWx1ZS5tYXAodmFsdWUgPT4gaCgnb3B0aW9uJywgeyB2YWx1ZSwgc2VsZWN0ZWQ6IHRydWUgfSkpXG5cbiAgICAgICAgICBjaGlsZC5wdXNoKFxuICAgICAgICAgICAgaCgnc2VsZWN0Jywge1xuICAgICAgICAgICAgICBjbGFzczogJ2hpZGRlbicsXG4gICAgICAgICAgICAgIG5hbWU6IG5hbWVQcm9wLnZhbHVlLFxuICAgICAgICAgICAgICBtdWx0aXBsZTogcHJvcHMubXVsdGlwbGVcbiAgICAgICAgICAgIH0sIG9wdHMpXG4gICAgICAgICAgKVxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgYXR0cnMgPSBwcm9wcy51c2VJbnB1dCA9PT0gdHJ1ZSB8fCBpc1RhcmdldCAhPT0gdHJ1ZSA/IHZvaWQgMCA6IHN0YXRlLnNwbGl0QXR0cnMuYXR0cmlidXRlcy52YWx1ZVxuXG4gICAgICAgIHJldHVybiBoKCdkaXYnLCB7XG4gICAgICAgICAgY2xhc3M6ICdxLWZpZWxkX19uYXRpdmUgcm93IGl0ZW1zLWNlbnRlcicsXG4gICAgICAgICAgLi4uYXR0cnMsXG4gICAgICAgICAgLi4uc3RhdGUuc3BsaXRBdHRycy5saXN0ZW5lcnMudmFsdWVcbiAgICAgICAgfSwgY2hpbGQpXG4gICAgICB9LFxuXG4gICAgICBnZXRJbm5lckFwcGVuZDogKCkgPT4gKFxuICAgICAgICBwcm9wcy5sb2FkaW5nICE9PSB0cnVlICYmIGlubmVyTG9hZGluZ0luZGljYXRvci52YWx1ZSAhPT0gdHJ1ZSAmJiBwcm9wcy5oaWRlRHJvcGRvd25JY29uICE9PSB0cnVlXG4gICAgICAgICAgPyBbXG4gICAgICAgICAgICAgIGgoUUljb24sIHtcbiAgICAgICAgICAgICAgICBjbGFzczogJ3Etc2VsZWN0X19kcm9wZG93bi1pY29uJyArIChtZW51LnZhbHVlID09PSB0cnVlID8gJyByb3RhdGUtMTgwJyA6ICcnKSxcbiAgICAgICAgICAgICAgICBuYW1lOiBkcm9wZG93bkFycm93SWNvbi52YWx1ZVxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgXVxuICAgICAgICAgIDogbnVsbFxuICAgICAgKVxuICAgIH0pXG5cbiAgICByZXR1cm4gdXNlRmllbGQoc3RhdGUpXG4gIH1cbn0pXG4iLCJpbXBvcnQgeyBoLCBjb21wdXRlZCwgZ2V0Q3VycmVudEluc3RhbmNlIH0gZnJvbSAndnVlJ1xuXG5pbXBvcnQgdXNlRGFyaywgeyB1c2VEYXJrUHJvcHMgfSBmcm9tICcuLi8uLi9jb21wb3NhYmxlcy9wcml2YXRlL3VzZS1kYXJrLmpzJ1xuaW1wb3J0IHVzZVNpemUsIHsgdXNlU2l6ZVByb3BzIH0gZnJvbSAnLi4vLi4vY29tcG9zYWJsZXMvcHJpdmF0ZS91c2Utc2l6ZS5qcydcblxuaW1wb3J0IHsgY3JlYXRlQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vdXRpbHMvcHJpdmF0ZS9jcmVhdGUuanMnXG5pbXBvcnQgeyBoTWVyZ2VTbG90IH0gZnJvbSAnLi4vLi4vdXRpbHMvcHJpdmF0ZS9yZW5kZXIuanMnXG5cbmNvbnN0IGRlZmF1bHRTaXplcyA9IHtcbiAgeHM6IDIsXG4gIHNtOiA0LFxuICBtZDogNixcbiAgbGc6IDEwLFxuICB4bDogMTRcbn1cblxuZnVuY3Rpb24gd2lkdGggKHZhbCwgcmV2ZXJzZSwgJHEpIHtcbiAgcmV0dXJuIHtcbiAgICB0cmFuc2Zvcm06IHJldmVyc2UgPT09IHRydWVcbiAgICAgID8gYHRyYW5zbGF0ZVgoJHsgJHEubGFuZy5ydGwgPT09IHRydWUgPyAnLScgOiAnJyB9MTAwJSkgc2NhbGUzZCgkeyAtdmFsIH0sMSwxKWBcbiAgICAgIDogYHNjYWxlM2QoJHsgdmFsIH0sMSwxKWBcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVDb21wb25lbnQoe1xuICBuYW1lOiAnUUxpbmVhclByb2dyZXNzJyxcblxuICBwcm9wczoge1xuICAgIC4uLnVzZURhcmtQcm9wcyxcbiAgICAuLi51c2VTaXplUHJvcHMsXG5cbiAgICB2YWx1ZToge1xuICAgICAgdHlwZTogTnVtYmVyLFxuICAgICAgZGVmYXVsdDogMFxuICAgIH0sXG4gICAgYnVmZmVyOiBOdW1iZXIsXG5cbiAgICBjb2xvcjogU3RyaW5nLFxuICAgIHRyYWNrQ29sb3I6IFN0cmluZyxcblxuICAgIHJldmVyc2U6IEJvb2xlYW4sXG4gICAgc3RyaXBlOiBCb29sZWFuLFxuICAgIGluZGV0ZXJtaW5hdGU6IEJvb2xlYW4sXG4gICAgcXVlcnk6IEJvb2xlYW4sXG4gICAgcm91bmRlZDogQm9vbGVhbixcblxuICAgIGFuaW1hdGlvblNwZWVkOiB7XG4gICAgICB0eXBlOiBbIFN0cmluZywgTnVtYmVyIF0sXG4gICAgICBkZWZhdWx0OiAyMTAwXG4gICAgfSxcblxuICAgIGluc3RhbnRGZWVkYmFjazogQm9vbGVhblxuICB9LFxuXG4gIHNldHVwIChwcm9wcywgeyBzbG90cyB9KSB7XG4gICAgY29uc3QgeyBwcm94eSB9ID0gZ2V0Q3VycmVudEluc3RhbmNlKClcbiAgICBjb25zdCBpc0RhcmsgPSB1c2VEYXJrKHByb3BzLCBwcm94eS4kcSlcbiAgICBjb25zdCBzaXplU3R5bGUgPSB1c2VTaXplKHByb3BzLCBkZWZhdWx0U2l6ZXMpXG5cbiAgICBjb25zdCBtb3Rpb24gPSBjb21wdXRlZCgoKSA9PiBwcm9wcy5pbmRldGVybWluYXRlID09PSB0cnVlIHx8IHByb3BzLnF1ZXJ5ID09PSB0cnVlKVxuICAgIGNvbnN0IHdpZHRoUmV2ZXJzZSA9IGNvbXB1dGVkKCgpID0+IHByb3BzLnJldmVyc2UgIT09IHByb3BzLnF1ZXJ5KVxuICAgIGNvbnN0IHN0eWxlID0gY29tcHV0ZWQoKCkgPT4gKHtcbiAgICAgIC4uLihzaXplU3R5bGUudmFsdWUgIT09IG51bGwgPyBzaXplU3R5bGUudmFsdWUgOiB7fSksXG4gICAgICAnLS1xLWxpbmVhci1wcm9ncmVzcy1zcGVlZCc6IGAkeyBwcm9wcy5hbmltYXRpb25TcGVlZCB9bXNgXG4gICAgfSkpXG5cbiAgICBjb25zdCBjbGFzc2VzID0gY29tcHV0ZWQoKCkgPT5cbiAgICAgICdxLWxpbmVhci1wcm9ncmVzcydcbiAgICAgICsgKHByb3BzLmNvbG9yICE9PSB2b2lkIDAgPyBgIHRleHQtJHsgcHJvcHMuY29sb3IgfWAgOiAnJylcbiAgICAgICsgKHByb3BzLnJldmVyc2UgPT09IHRydWUgfHwgcHJvcHMucXVlcnkgPT09IHRydWUgPyAnIHEtbGluZWFyLXByb2dyZXNzLS1yZXZlcnNlJyA6ICcnKVxuICAgICAgKyAocHJvcHMucm91bmRlZCA9PT0gdHJ1ZSA/ICcgcm91bmRlZC1ib3JkZXJzJyA6ICcnKVxuICAgIClcblxuICAgIGNvbnN0IHRyYWNrU3R5bGUgPSBjb21wdXRlZCgoKSA9PiB3aWR0aChwcm9wcy5idWZmZXIgIT09IHZvaWQgMCA/IHByb3BzLmJ1ZmZlciA6IDEsIHdpZHRoUmV2ZXJzZS52YWx1ZSwgcHJveHkuJHEpKVxuICAgIGNvbnN0IHRyYW5zaXRpb25TdWZmaXggPSBjb21wdXRlZCgoKSA9PiBgd2l0aCR7IHByb3BzLmluc3RhbnRGZWVkYmFjayA9PT0gdHJ1ZSA/ICdvdXQnIDogJycgfS10cmFuc2l0aW9uYClcblxuICAgIGNvbnN0IHRyYWNrQ2xhc3MgPSBjb21wdXRlZCgoKSA9PlxuICAgICAgJ3EtbGluZWFyLXByb2dyZXNzX190cmFjayBhYnNvbHV0ZS1mdWxsJ1xuICAgICAgKyBgIHEtbGluZWFyLXByb2dyZXNzX190cmFjay0tJHsgdHJhbnNpdGlvblN1ZmZpeC52YWx1ZSB9YFxuICAgICAgKyBgIHEtbGluZWFyLXByb2dyZXNzX190cmFjay0tJHsgaXNEYXJrLnZhbHVlID09PSB0cnVlID8gJ2RhcmsnIDogJ2xpZ2h0JyB9YFxuICAgICAgKyAocHJvcHMudHJhY2tDb2xvciAhPT0gdm9pZCAwID8gYCBiZy0keyBwcm9wcy50cmFja0NvbG9yIH1gIDogJycpXG4gICAgKVxuXG4gICAgY29uc3QgbW9kZWxTdHlsZSA9IGNvbXB1dGVkKCgpID0+IHdpZHRoKG1vdGlvbi52YWx1ZSA9PT0gdHJ1ZSA/IDEgOiBwcm9wcy52YWx1ZSwgd2lkdGhSZXZlcnNlLnZhbHVlLCBwcm94eS4kcSkpXG4gICAgY29uc3QgbW9kZWxDbGFzcyA9IGNvbXB1dGVkKCgpID0+XG4gICAgICAncS1saW5lYXItcHJvZ3Jlc3NfX21vZGVsIGFic29sdXRlLWZ1bGwnXG4gICAgICArIGAgcS1saW5lYXItcHJvZ3Jlc3NfX21vZGVsLS0keyB0cmFuc2l0aW9uU3VmZml4LnZhbHVlIH1gXG4gICAgICArIGAgcS1saW5lYXItcHJvZ3Jlc3NfX21vZGVsLS0keyBtb3Rpb24udmFsdWUgPT09IHRydWUgPyAnaW4nIDogJycgfWRldGVybWluYXRlYFxuICAgIClcblxuICAgIGNvbnN0IHN0cmlwZVN0eWxlID0gY29tcHV0ZWQoKCkgPT4gKHsgd2lkdGg6IGAkeyBwcm9wcy52YWx1ZSAqIDEwMCB9JWAgfSkpXG4gICAgY29uc3Qgc3RyaXBlQ2xhc3MgPSBjb21wdXRlZCgoKSA9PlxuICAgICAgYHEtbGluZWFyLXByb2dyZXNzX19zdHJpcGUgYWJzb2x1dGUtJHsgcHJvcHMucmV2ZXJzZSA9PT0gdHJ1ZSA/ICdyaWdodCcgOiAnbGVmdCcgfWBcbiAgICAgICsgYCBxLWxpbmVhci1wcm9ncmVzc19fc3RyaXBlLS0keyB0cmFuc2l0aW9uU3VmZml4LnZhbHVlIH1gXG4gICAgKVxuXG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIGNvbnN0IGNoaWxkID0gW1xuICAgICAgICBoKCdkaXYnLCB7XG4gICAgICAgICAgY2xhc3M6IHRyYWNrQ2xhc3MudmFsdWUsXG4gICAgICAgICAgc3R5bGU6IHRyYWNrU3R5bGUudmFsdWVcbiAgICAgICAgfSksXG5cbiAgICAgICAgaCgnZGl2Jywge1xuICAgICAgICAgIGNsYXNzOiBtb2RlbENsYXNzLnZhbHVlLFxuICAgICAgICAgIHN0eWxlOiBtb2RlbFN0eWxlLnZhbHVlXG4gICAgICAgIH0pXG4gICAgICBdXG5cbiAgICAgIHByb3BzLnN0cmlwZSA9PT0gdHJ1ZSAmJiBtb3Rpb24udmFsdWUgPT09IGZhbHNlICYmIGNoaWxkLnB1c2goXG4gICAgICAgIGgoJ2RpdicsIHtcbiAgICAgICAgICBjbGFzczogc3RyaXBlQ2xhc3MudmFsdWUsXG4gICAgICAgICAgc3R5bGU6IHN0cmlwZVN0eWxlLnZhbHVlXG4gICAgICAgIH0pXG4gICAgICApXG5cbiAgICAgIHJldHVybiBoKCdkaXYnLCB7XG4gICAgICAgIGNsYXNzOiBjbGFzc2VzLnZhbHVlLFxuICAgICAgICBzdHlsZTogc3R5bGUudmFsdWUsXG4gICAgICAgIHJvbGU6ICdwcm9ncmVzc2JhcicsXG4gICAgICAgICdhcmlhLXZhbHVlbWluJzogMCxcbiAgICAgICAgJ2FyaWEtdmFsdWVtYXgnOiAxLFxuICAgICAgICAnYXJpYS12YWx1ZW5vdyc6IHByb3BzLmluZGV0ZXJtaW5hdGUgPT09IHRydWVcbiAgICAgICAgICA/IHZvaWQgMFxuICAgICAgICAgIDogcHJvcHMudmFsdWVcbiAgICAgIH0sIGhNZXJnZVNsb3Qoc2xvdHMuZGVmYXVsdCwgY2hpbGQpKVxuICAgIH1cbiAgfVxufSlcbiIsImltcG9ydCB7IGgsIGNvbXB1dGVkLCByZWYgfSBmcm9tICd2dWUnXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChwcm9wcywgcm9vdFJlZikge1xuICBjb25zdCByZWZvY3VzUmVmID0gcmVmKG51bGwpXG5cbiAgY29uc3QgcmVmb2N1c1RhcmdldEVsID0gY29tcHV0ZWQoKCkgPT4ge1xuICAgIGlmIChwcm9wcy5kaXNhYmxlID09PSB0cnVlKSB7XG4gICAgICByZXR1cm4gbnVsbFxuICAgIH1cblxuICAgIHJldHVybiBoKCdzcGFuJywge1xuICAgICAgcmVmOiByZWZvY3VzUmVmLFxuICAgICAgY2xhc3M6ICduby1vdXRsaW5lJyxcbiAgICAgIHRhYmluZGV4OiAtMVxuICAgIH0pXG4gIH0pXG5cbiAgZnVuY3Rpb24gcmVmb2N1c1RhcmdldCAoZSkge1xuICAgIGNvbnN0IHJvb3QgPSByb290UmVmLnZhbHVlXG5cbiAgICBpZiAoZSAhPT0gdm9pZCAwICYmIGUudHlwZS5pbmRleE9mKCdrZXknKSA9PT0gMCkge1xuICAgICAgaWYgKFxuICAgICAgICByb290ICE9PSBudWxsXG4gICAgICAgICYmIGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQgIT09IHJvb3RcbiAgICAgICAgJiYgcm9vdC5jb250YWlucyhkb2N1bWVudC5hY3RpdmVFbGVtZW50KSA9PT0gdHJ1ZVxuICAgICAgKSB7XG4gICAgICAgIHJvb3QuZm9jdXMoKVxuICAgICAgfVxuICAgIH1cbiAgICBlbHNlIGlmIChcbiAgICAgIHJlZm9jdXNSZWYudmFsdWUgIT09IG51bGxcbiAgICAgICYmIChlID09PSB2b2lkIDAgfHwgKHJvb3QgIT09IG51bGwgJiYgcm9vdC5jb250YWlucyhlLnRhcmdldCkgPT09IHRydWUpKVxuICAgICkge1xuICAgICAgcmVmb2N1c1JlZi52YWx1ZS5mb2N1cygpXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICByZWZvY3VzVGFyZ2V0RWwsXG4gICAgcmVmb2N1c1RhcmdldFxuICB9XG59XG4iLCJleHBvcnQgZGVmYXVsdCB7XG4gIHhzOiAzMCxcbiAgc206IDM1LFxuICBtZDogNDAsXG4gIGxnOiA1MCxcbiAgeGw6IDYwXG59XG4iLCJpbXBvcnQgeyBoLCByZWYsIGNvbXB1dGVkLCBnZXRDdXJyZW50SW5zdGFuY2UsIHRvUmF3IH0gZnJvbSAndnVlJ1xuXG5pbXBvcnQgdXNlRGFyaywgeyB1c2VEYXJrUHJvcHMgfSBmcm9tICcuLi8uLi9jb21wb3NhYmxlcy9wcml2YXRlL3VzZS1kYXJrLmpzJ1xuaW1wb3J0IHVzZVNpemUsIHsgdXNlU2l6ZVByb3BzIH0gZnJvbSAnLi4vLi4vY29tcG9zYWJsZXMvcHJpdmF0ZS91c2Utc2l6ZS5qcydcbmltcG9ydCB1c2VSZWZvY3VzVGFyZ2V0IGZyb20gJy4uLy4uL2NvbXBvc2FibGVzL3ByaXZhdGUvdXNlLXJlZm9jdXMtdGFyZ2V0LmpzJ1xuaW1wb3J0IHsgdXNlRm9ybUluamVjdCwgdXNlRm9ybVByb3BzIH0gZnJvbSAnLi4vLi4vY29tcG9zYWJsZXMvcHJpdmF0ZS91c2UtZm9ybS5qcydcblxuaW1wb3J0IG9wdGlvblNpemVzIGZyb20gJy4uLy4uL3V0aWxzL3ByaXZhdGUvb3B0aW9uLXNpemVzLmpzJ1xuaW1wb3J0IHsgc3RvcEFuZFByZXZlbnQgfSBmcm9tICcuLi8uLi91dGlscy9ldmVudC5qcydcbmltcG9ydCB7IGhTbG90LCBoTWVyZ2VTbG90IH0gZnJvbSAnLi4vLi4vdXRpbHMvcHJpdmF0ZS9yZW5kZXIuanMnXG5cbmV4cG9ydCBjb25zdCB1c2VDaGVja2JveFByb3BzID0ge1xuICAuLi51c2VEYXJrUHJvcHMsXG4gIC4uLnVzZVNpemVQcm9wcyxcbiAgLi4udXNlRm9ybVByb3BzLFxuXG4gIG1vZGVsVmFsdWU6IHtcbiAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICBkZWZhdWx0OiBudWxsXG4gIH0sXG4gIHZhbDoge30sXG5cbiAgdHJ1ZVZhbHVlOiB7IGRlZmF1bHQ6IHRydWUgfSxcbiAgZmFsc2VWYWx1ZTogeyBkZWZhdWx0OiBmYWxzZSB9LFxuICBpbmRldGVybWluYXRlVmFsdWU6IHsgZGVmYXVsdDogbnVsbCB9LFxuXG4gIGNoZWNrZWRJY29uOiBTdHJpbmcsXG4gIHVuY2hlY2tlZEljb246IFN0cmluZyxcbiAgaW5kZXRlcm1pbmF0ZUljb246IFN0cmluZyxcblxuICB0b2dnbGVPcmRlcjoge1xuICAgIHR5cGU6IFN0cmluZyxcbiAgICB2YWxpZGF0b3I6IHYgPT4gdiA9PT0gJ3RmJyB8fCB2ID09PSAnZnQnXG4gIH0sXG4gIHRvZ2dsZUluZGV0ZXJtaW5hdGU6IEJvb2xlYW4sXG5cbiAgbGFiZWw6IFN0cmluZyxcbiAgbGVmdExhYmVsOiBCb29sZWFuLFxuXG4gIGNvbG9yOiBTdHJpbmcsXG4gIGtlZXBDb2xvcjogQm9vbGVhbixcbiAgZGVuc2U6IEJvb2xlYW4sXG5cbiAgZGlzYWJsZTogQm9vbGVhbixcbiAgdGFiaW5kZXg6IFsgU3RyaW5nLCBOdW1iZXIgXVxufVxuXG5leHBvcnQgY29uc3QgdXNlQ2hlY2tib3hFbWl0cyA9IFsgJ3VwZGF0ZTptb2RlbFZhbHVlJyBdXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uICh0eXBlLCBnZXRJbm5lcikge1xuICBjb25zdCB7IHByb3BzLCBzbG90cywgZW1pdCwgcHJveHkgfSA9IGdldEN1cnJlbnRJbnN0YW5jZSgpXG4gIGNvbnN0IHsgJHEgfSA9IHByb3h5XG5cbiAgY29uc3QgaXNEYXJrID0gdXNlRGFyayhwcm9wcywgJHEpXG5cbiAgY29uc3Qgcm9vdFJlZiA9IHJlZihudWxsKVxuICBjb25zdCB7IHJlZm9jdXNUYXJnZXRFbCwgcmVmb2N1c1RhcmdldCB9ID0gdXNlUmVmb2N1c1RhcmdldChwcm9wcywgcm9vdFJlZilcbiAgY29uc3Qgc2l6ZVN0eWxlID0gdXNlU2l6ZShwcm9wcywgb3B0aW9uU2l6ZXMpXG5cbiAgY29uc3QgbW9kZWxJc0FycmF5ID0gY29tcHV0ZWQoKCkgPT5cbiAgICBwcm9wcy52YWwgIT09IHZvaWQgMCAmJiBBcnJheS5pc0FycmF5KHByb3BzLm1vZGVsVmFsdWUpXG4gIClcblxuICBjb25zdCBpbmRleCA9IGNvbXB1dGVkKCgpID0+IHtcbiAgICBjb25zdCB2YWwgPSB0b1Jhdyhwcm9wcy52YWwpXG4gICAgcmV0dXJuIG1vZGVsSXNBcnJheS52YWx1ZSA9PT0gdHJ1ZVxuICAgICAgPyBwcm9wcy5tb2RlbFZhbHVlLmZpbmRJbmRleChvcHQgPT4gdG9SYXcob3B0KSA9PT0gdmFsKVxuICAgICAgOiAtMVxuICB9KVxuXG4gIGNvbnN0IGlzVHJ1ZSA9IGNvbXB1dGVkKCgpID0+IChcbiAgICBtb2RlbElzQXJyYXkudmFsdWUgPT09IHRydWVcbiAgICAgID8gaW5kZXgudmFsdWUgIT09IC0xXG4gICAgICA6IHRvUmF3KHByb3BzLm1vZGVsVmFsdWUpID09PSB0b1Jhdyhwcm9wcy50cnVlVmFsdWUpXG4gICkpXG5cbiAgY29uc3QgaXNGYWxzZSA9IGNvbXB1dGVkKCgpID0+IChcbiAgICBtb2RlbElzQXJyYXkudmFsdWUgPT09IHRydWVcbiAgICAgID8gaW5kZXgudmFsdWUgPT09IC0xXG4gICAgICA6IHRvUmF3KHByb3BzLm1vZGVsVmFsdWUpID09PSB0b1Jhdyhwcm9wcy5mYWxzZVZhbHVlKVxuICApKVxuXG4gIGNvbnN0IGlzSW5kZXRlcm1pbmF0ZSA9IGNvbXB1dGVkKCgpID0+XG4gICAgaXNUcnVlLnZhbHVlID09PSBmYWxzZSAmJiBpc0ZhbHNlLnZhbHVlID09PSBmYWxzZVxuICApXG5cbiAgY29uc3QgdGFiaW5kZXggPSBjb21wdXRlZCgoKSA9PiAoXG4gICAgcHJvcHMuZGlzYWJsZSA9PT0gdHJ1ZSA/IC0xIDogcHJvcHMudGFiaW5kZXggfHwgMFxuICApKVxuXG4gIGNvbnN0IGNsYXNzZXMgPSBjb21wdXRlZCgoKSA9PlxuICAgIGBxLSR7IHR5cGUgfSBjdXJzb3ItcG9pbnRlciBuby1vdXRsaW5lIHJvdyBpbmxpbmUgbm8td3JhcCBpdGVtcy1jZW50ZXJgXG4gICAgKyAocHJvcHMuZGlzYWJsZSA9PT0gdHJ1ZSA/ICcgZGlzYWJsZWQnIDogJycpXG4gICAgKyAoaXNEYXJrLnZhbHVlID09PSB0cnVlID8gYCBxLSR7IHR5cGUgfS0tZGFya2AgOiAnJylcbiAgICArIChwcm9wcy5kZW5zZSA9PT0gdHJ1ZSA/IGAgcS0keyB0eXBlIH0tLWRlbnNlYCA6ICcnKVxuICAgICsgKHByb3BzLmxlZnRMYWJlbCA9PT0gdHJ1ZSA/ICcgcmV2ZXJzZScgOiAnJylcbiAgKVxuXG4gIGNvbnN0IGlubmVyQ2xhc3MgPSBjb21wdXRlZCgoKSA9PiB7XG4gICAgY29uc3Qgc3RhdGUgPSBpc1RydWUudmFsdWUgPT09IHRydWUgPyAndHJ1dGh5JyA6IChpc0ZhbHNlLnZhbHVlID09PSB0cnVlID8gJ2ZhbHN5JyA6ICdpbmRldCcpXG4gICAgY29uc3QgY29sb3IgPSBwcm9wcy5jb2xvciAhPT0gdm9pZCAwICYmIChcbiAgICAgIHByb3BzLmtlZXBDb2xvciA9PT0gdHJ1ZVxuICAgICAgfHwgKHR5cGUgPT09ICd0b2dnbGUnID8gaXNUcnVlLnZhbHVlID09PSB0cnVlIDogaXNGYWxzZS52YWx1ZSAhPT0gdHJ1ZSlcbiAgICApXG4gICAgICA/IGAgdGV4dC0keyBwcm9wcy5jb2xvciB9YFxuICAgICAgOiAnJ1xuXG4gICAgcmV0dXJuIGBxLSR7IHR5cGUgfV9faW5uZXIgcmVsYXRpdmUtcG9zaXRpb24gbm9uLXNlbGVjdGFibGUgcS0keyB0eXBlIH1fX2lubmVyLS0keyBzdGF0ZSB9JHsgY29sb3IgfWBcbiAgfSlcblxuICBjb25zdCBmb3JtQXR0cnMgPSBjb21wdXRlZCgoKSA9PiB7XG4gICAgY29uc3QgcHJvcCA9IHsgdHlwZTogJ2NoZWNrYm94JyB9XG5cbiAgICBwcm9wcy5uYW1lICE9PSB2b2lkIDAgJiYgT2JqZWN0LmFzc2lnbihwcm9wLCB7XG4gICAgICAvLyBzZWUgaHR0cHM6Ly92dWVqcy5vcmcvZ3VpZGUvZXh0cmFzL3JlbmRlci1mdW5jdGlvbi5odG1sI2NyZWF0aW5nLXZub2RlcyAoLnByb3ApXG4gICAgICAnLmNoZWNrZWQnOiBpc1RydWUudmFsdWUsXG4gICAgICAnXmNoZWNrZWQnOiBpc1RydWUudmFsdWUgPT09IHRydWUgPyAnY2hlY2tlZCcgOiB2b2lkIDAsXG4gICAgICBuYW1lOiBwcm9wcy5uYW1lLFxuICAgICAgdmFsdWU6IG1vZGVsSXNBcnJheS52YWx1ZSA9PT0gdHJ1ZVxuICAgICAgICA/IHByb3BzLnZhbFxuICAgICAgICA6IHByb3BzLnRydWVWYWx1ZVxuICAgIH0pXG5cbiAgICByZXR1cm4gcHJvcFxuICB9KVxuXG4gIGNvbnN0IGluamVjdEZvcm1JbnB1dCA9IHVzZUZvcm1JbmplY3QoZm9ybUF0dHJzKVxuXG4gIGNvbnN0IGF0dHJpYnV0ZXMgPSBjb21wdXRlZCgoKSA9PiB7XG4gICAgY29uc3QgYXR0cnMgPSB7XG4gICAgICB0YWJpbmRleDogdGFiaW5kZXgudmFsdWUsXG4gICAgICByb2xlOiB0eXBlID09PSAndG9nZ2xlJyA/ICdzd2l0Y2gnIDogJ2NoZWNrYm94JyxcbiAgICAgICdhcmlhLWxhYmVsJzogcHJvcHMubGFiZWwsXG4gICAgICAnYXJpYS1jaGVja2VkJzogaXNJbmRldGVybWluYXRlLnZhbHVlID09PSB0cnVlXG4gICAgICAgID8gJ21peGVkJ1xuICAgICAgICA6IChpc1RydWUudmFsdWUgPT09IHRydWUgPyAndHJ1ZScgOiAnZmFsc2UnKVxuICAgIH1cblxuICAgIGlmIChwcm9wcy5kaXNhYmxlID09PSB0cnVlKSB7XG4gICAgICBhdHRyc1sgJ2FyaWEtZGlzYWJsZWQnIF0gPSAndHJ1ZSdcbiAgICB9XG5cbiAgICByZXR1cm4gYXR0cnNcbiAgfSlcblxuICBmdW5jdGlvbiBvbkNsaWNrIChlKSB7XG4gICAgaWYgKGUgIT09IHZvaWQgMCkge1xuICAgICAgc3RvcEFuZFByZXZlbnQoZSlcbiAgICAgIHJlZm9jdXNUYXJnZXQoZSlcbiAgICB9XG5cbiAgICBpZiAocHJvcHMuZGlzYWJsZSAhPT0gdHJ1ZSkge1xuICAgICAgZW1pdCgndXBkYXRlOm1vZGVsVmFsdWUnLCBnZXROZXh0VmFsdWUoKSwgZSlcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBnZXROZXh0VmFsdWUgKCkge1xuICAgIGlmIChtb2RlbElzQXJyYXkudmFsdWUgPT09IHRydWUpIHtcbiAgICAgIGlmIChpc1RydWUudmFsdWUgPT09IHRydWUpIHtcbiAgICAgICAgY29uc3QgdmFsID0gcHJvcHMubW9kZWxWYWx1ZS5zbGljZSgpXG4gICAgICAgIHZhbC5zcGxpY2UoaW5kZXgudmFsdWUsIDEpXG4gICAgICAgIHJldHVybiB2YWxcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHByb3BzLm1vZGVsVmFsdWUuY29uY2F0KFsgcHJvcHMudmFsIF0pXG4gICAgfVxuXG4gICAgaWYgKGlzVHJ1ZS52YWx1ZSA9PT0gdHJ1ZSkge1xuICAgICAgaWYgKHByb3BzLnRvZ2dsZU9yZGVyICE9PSAnZnQnIHx8IHByb3BzLnRvZ2dsZUluZGV0ZXJtaW5hdGUgPT09IGZhbHNlKSB7XG4gICAgICAgIHJldHVybiBwcm9wcy5mYWxzZVZhbHVlXG4gICAgICB9XG4gICAgfVxuICAgIGVsc2UgaWYgKGlzRmFsc2UudmFsdWUgPT09IHRydWUpIHtcbiAgICAgIGlmIChwcm9wcy50b2dnbGVPcmRlciA9PT0gJ2Z0JyB8fCBwcm9wcy50b2dnbGVJbmRldGVybWluYXRlID09PSBmYWxzZSkge1xuICAgICAgICByZXR1cm4gcHJvcHMudHJ1ZVZhbHVlXG4gICAgICB9XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgcmV0dXJuIHByb3BzLnRvZ2dsZU9yZGVyICE9PSAnZnQnXG4gICAgICAgID8gcHJvcHMudHJ1ZVZhbHVlXG4gICAgICAgIDogcHJvcHMuZmFsc2VWYWx1ZVxuICAgIH1cblxuICAgIHJldHVybiBwcm9wcy5pbmRldGVybWluYXRlVmFsdWVcbiAgfVxuXG4gIGZ1bmN0aW9uIG9uS2V5ZG93biAoZSkge1xuICAgIGlmIChlLmtleUNvZGUgPT09IDEzIHx8IGUua2V5Q29kZSA9PT0gMzIpIHtcbiAgICAgIHN0b3BBbmRQcmV2ZW50KGUpXG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gb25LZXl1cCAoZSkge1xuICAgIGlmIChlLmtleUNvZGUgPT09IDEzIHx8IGUua2V5Q29kZSA9PT0gMzIpIHtcbiAgICAgIG9uQ2xpY2soZSlcbiAgICB9XG4gIH1cblxuICBjb25zdCBnZXRJbm5lckNvbnRlbnQgPSBnZXRJbm5lcihpc1RydWUsIGlzSW5kZXRlcm1pbmF0ZSlcblxuICAvLyBleHBvc2UgcHVibGljIG1ldGhvZHNcbiAgT2JqZWN0LmFzc2lnbihwcm94eSwgeyB0b2dnbGU6IG9uQ2xpY2sgfSlcblxuICByZXR1cm4gKCkgPT4ge1xuICAgIGNvbnN0IGlubmVyID0gZ2V0SW5uZXJDb250ZW50KClcblxuICAgIHByb3BzLmRpc2FibGUgIT09IHRydWUgJiYgaW5qZWN0Rm9ybUlucHV0KFxuICAgICAgaW5uZXIsXG4gICAgICAndW5zaGlmdCcsXG4gICAgICBgIHEtJHsgdHlwZSB9X19uYXRpdmUgYWJzb2x1dGUgcS1tYS1ub25lIHEtcGEtbm9uZWBcbiAgICApXG5cbiAgICBjb25zdCBjaGlsZCA9IFtcbiAgICAgIGgoJ2RpdicsIHtcbiAgICAgICAgY2xhc3M6IGlubmVyQ2xhc3MudmFsdWUsXG4gICAgICAgIHN0eWxlOiBzaXplU3R5bGUudmFsdWUsXG4gICAgICAgICdhcmlhLWhpZGRlbic6ICd0cnVlJ1xuICAgICAgfSwgaW5uZXIpXG4gICAgXVxuXG4gICAgaWYgKHJlZm9jdXNUYXJnZXRFbC52YWx1ZSAhPT0gbnVsbCkge1xuICAgICAgY2hpbGQucHVzaChyZWZvY3VzVGFyZ2V0RWwudmFsdWUpXG4gICAgfVxuXG4gICAgY29uc3QgbGFiZWwgPSBwcm9wcy5sYWJlbCAhPT0gdm9pZCAwXG4gICAgICA/IGhNZXJnZVNsb3Qoc2xvdHMuZGVmYXVsdCwgWyBwcm9wcy5sYWJlbCBdKVxuICAgICAgOiBoU2xvdChzbG90cy5kZWZhdWx0KVxuXG4gICAgbGFiZWwgIT09IHZvaWQgMCAmJiBjaGlsZC5wdXNoKFxuICAgICAgaCgnZGl2Jywge1xuICAgICAgICBjbGFzczogYHEtJHsgdHlwZSB9X19sYWJlbCBxLWFuY2hvci0tc2tpcGBcbiAgICAgIH0sIGxhYmVsKVxuICAgIClcblxuICAgIHJldHVybiBoKCdkaXYnLCB7XG4gICAgICByZWY6IHJvb3RSZWYsXG4gICAgICBjbGFzczogY2xhc3Nlcy52YWx1ZSxcbiAgICAgIC4uLmF0dHJpYnV0ZXMudmFsdWUsXG4gICAgICBvbkNsaWNrLFxuICAgICAgb25LZXlkb3duLFxuICAgICAgb25LZXl1cFxuICAgIH0sIGNoaWxkKVxuICB9XG59XG4iLCJpbXBvcnQgeyBoLCBjb21wdXRlZCB9IGZyb20gJ3Z1ZSdcblxuaW1wb3J0IFFJY29uIGZyb20gJy4uL2ljb24vUUljb24uanMnXG5cbmltcG9ydCB7IGNyZWF0ZUNvbXBvbmVudCB9IGZyb20gJy4uLy4uL3V0aWxzL3ByaXZhdGUvY3JlYXRlLmpzJ1xuaW1wb3J0IHVzZUNoZWNrYm94LCB7IHVzZUNoZWNrYm94UHJvcHMsIHVzZUNoZWNrYm94RW1pdHMgfSBmcm9tICcuL3VzZS1jaGVja2JveC5qcydcblxuY29uc3QgYmdOb2RlID0gaCgnZGl2Jywge1xuICBrZXk6ICdzdmcnLFxuICBjbGFzczogJ3EtY2hlY2tib3hfX2JnIGFic29sdXRlJ1xufSwgW1xuICBoKCdzdmcnLCB7XG4gICAgY2xhc3M6ICdxLWNoZWNrYm94X19zdmcgZml0IGFic29sdXRlLWZ1bGwnLFxuICAgIHZpZXdCb3g6ICcwIDAgMjQgMjQnXG4gIH0sIFtcbiAgICBoKCdwYXRoJywge1xuICAgICAgY2xhc3M6ICdxLWNoZWNrYm94X190cnV0aHknLFxuICAgICAgZmlsbDogJ25vbmUnLFxuICAgICAgZDogJ00xLjczLDEyLjkxIDguMSwxOS4yOCAyMi43OSw0LjU5J1xuICAgIH0pLFxuXG4gICAgaCgncGF0aCcsIHtcbiAgICAgIGNsYXNzOiAncS1jaGVja2JveF9faW5kZXQnLFxuICAgICAgZDogJ000LDE0SDIwVjEwSDQnXG4gICAgfSlcbiAgXSlcbl0pXG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUNvbXBvbmVudCh7XG4gIG5hbWU6ICdRQ2hlY2tib3gnLFxuXG4gIHByb3BzOiB1c2VDaGVja2JveFByb3BzLFxuICBlbWl0czogdXNlQ2hlY2tib3hFbWl0cyxcblxuICBzZXR1cCAocHJvcHMpIHtcbiAgICBmdW5jdGlvbiBnZXRJbm5lciAoaXNUcnVlLCBpc0luZGV0ZXJtaW5hdGUpIHtcbiAgICAgIGNvbnN0IGljb24gPSBjb21wdXRlZCgoKSA9PlxuICAgICAgICAoaXNUcnVlLnZhbHVlID09PSB0cnVlXG4gICAgICAgICAgPyBwcm9wcy5jaGVja2VkSWNvblxuICAgICAgICAgIDogKGlzSW5kZXRlcm1pbmF0ZS52YWx1ZSA9PT0gdHJ1ZVxuICAgICAgICAgICAgICA/IHByb3BzLmluZGV0ZXJtaW5hdGVJY29uXG4gICAgICAgICAgICAgIDogcHJvcHMudW5jaGVja2VkSWNvblxuICAgICAgICAgICAgKVxuICAgICAgICApIHx8IG51bGxcbiAgICAgIClcblxuICAgICAgcmV0dXJuICgpID0+IChcbiAgICAgICAgaWNvbi52YWx1ZSAhPT0gbnVsbFxuICAgICAgICAgID8gW1xuICAgICAgICAgICAgICBoKCdkaXYnLCB7XG4gICAgICAgICAgICAgICAga2V5OiAnaWNvbicsXG4gICAgICAgICAgICAgICAgY2xhc3M6ICdxLWNoZWNrYm94X19pY29uLWNvbnRhaW5lciBhYnNvbHV0ZS1mdWxsIGZsZXggZmxleC1jZW50ZXIgbm8td3JhcCdcbiAgICAgICAgICAgICAgfSwgW1xuICAgICAgICAgICAgICAgIGgoUUljb24sIHtcbiAgICAgICAgICAgICAgICAgIGNsYXNzOiAncS1jaGVja2JveF9faWNvbicsXG4gICAgICAgICAgICAgICAgICBuYW1lOiBpY29uLnZhbHVlXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgIF1cbiAgICAgICAgICA6IFsgYmdOb2RlIF1cbiAgICAgIClcbiAgICB9XG5cbiAgICByZXR1cm4gdXNlQ2hlY2tib3goJ2NoZWNrYm94JywgZ2V0SW5uZXIpXG4gIH1cbn0pXG4iLCJpbXBvcnQgeyByZWYsIHdhdGNoLCBvbkJlZm9yZU1vdW50LCBvbk1vdW50ZWQsIG9uQmVmb3JlVW5tb3VudCwgZ2V0Q3VycmVudEluc3RhbmNlIH0gZnJvbSAndnVlJ1xuXG5pbXBvcnQgSGlzdG9yeSBmcm9tICcuLi8uLi9oaXN0b3J5LmpzJ1xuaW1wb3J0IHsgdm1IYXNSb3V0ZXIgfSBmcm9tICcuLi8uLi91dGlscy9wcml2YXRlL3ZtLmpzJ1xuXG5sZXQgY291bnRlciA9IDBcblxuZXhwb3J0IGNvbnN0IHVzZUZ1bGxzY3JlZW5Qcm9wcyA9IHtcbiAgZnVsbHNjcmVlbjogQm9vbGVhbixcbiAgbm9Sb3V0ZUZ1bGxzY3JlZW5FeGl0OiBCb29sZWFuXG59XG5cbmV4cG9ydCBjb25zdCB1c2VGdWxsc2NyZWVuRW1pdHMgPSBbICd1cGRhdGU6ZnVsbHNjcmVlbicsICdmdWxsc2NyZWVuJyBdXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uICgpIHtcbiAgY29uc3Qgdm0gPSBnZXRDdXJyZW50SW5zdGFuY2UoKVxuICBjb25zdCB7IHByb3BzLCBlbWl0LCBwcm94eSB9ID0gdm1cblxuICBsZXQgaGlzdG9yeUVudHJ5LCBmdWxsc2NyZWVuRmlsbGVyTm9kZSwgY29udGFpbmVyXG4gIGNvbnN0IGluRnVsbHNjcmVlbiA9IHJlZihmYWxzZSlcblxuICB2bUhhc1JvdXRlcih2bSkgPT09IHRydWUgJiYgd2F0Y2goKCkgPT4gcHJveHkuJHJvdXRlLmZ1bGxQYXRoLCAoKSA9PiB7XG4gICAgcHJvcHMubm9Sb3V0ZUZ1bGxzY3JlZW5FeGl0ICE9PSB0cnVlICYmIGV4aXRGdWxsc2NyZWVuKClcbiAgfSlcblxuICB3YXRjaCgoKSA9PiBwcm9wcy5mdWxsc2NyZWVuLCB2ID0+IHtcbiAgICBpZiAoaW5GdWxsc2NyZWVuLnZhbHVlICE9PSB2KSB7XG4gICAgICB0b2dnbGVGdWxsc2NyZWVuKClcbiAgICB9XG4gIH0pXG5cbiAgd2F0Y2goaW5GdWxsc2NyZWVuLCB2ID0+IHtcbiAgICBlbWl0KCd1cGRhdGU6ZnVsbHNjcmVlbicsIHYpXG4gICAgZW1pdCgnZnVsbHNjcmVlbicsIHYpXG4gIH0pXG5cbiAgZnVuY3Rpb24gdG9nZ2xlRnVsbHNjcmVlbiAoKSB7XG4gICAgaWYgKGluRnVsbHNjcmVlbi52YWx1ZSA9PT0gdHJ1ZSkge1xuICAgICAgZXhpdEZ1bGxzY3JlZW4oKVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHNldEZ1bGxzY3JlZW4oKVxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHNldEZ1bGxzY3JlZW4gKCkge1xuICAgIGlmIChpbkZ1bGxzY3JlZW4udmFsdWUgPT09IHRydWUpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGluRnVsbHNjcmVlbi52YWx1ZSA9IHRydWVcbiAgICBjb250YWluZXIgPSBwcm94eS4kZWwucGFyZW50Tm9kZVxuICAgIGNvbnRhaW5lci5yZXBsYWNlQ2hpbGQoZnVsbHNjcmVlbkZpbGxlck5vZGUsIHByb3h5LiRlbClcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHByb3h5LiRlbClcblxuICAgIGNvdW50ZXIrK1xuICAgIGlmIChjb3VudGVyID09PSAxKSB7XG4gICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoJ3EtYm9keS0tZnVsbHNjcmVlbi1taXhpbicpXG4gICAgfVxuXG4gICAgaGlzdG9yeUVudHJ5ID0ge1xuICAgICAgaGFuZGxlcjogZXhpdEZ1bGxzY3JlZW5cbiAgICB9XG4gICAgSGlzdG9yeS5hZGQoaGlzdG9yeUVudHJ5KVxuICB9XG5cbiAgZnVuY3Rpb24gZXhpdEZ1bGxzY3JlZW4gKCkge1xuICAgIGlmIChpbkZ1bGxzY3JlZW4udmFsdWUgIT09IHRydWUpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGlmIChoaXN0b3J5RW50cnkgIT09IHZvaWQgMCkge1xuICAgICAgSGlzdG9yeS5yZW1vdmUoaGlzdG9yeUVudHJ5KVxuICAgICAgaGlzdG9yeUVudHJ5ID0gdm9pZCAwXG4gICAgfVxuXG4gICAgY29udGFpbmVyLnJlcGxhY2VDaGlsZChwcm94eS4kZWwsIGZ1bGxzY3JlZW5GaWxsZXJOb2RlKVxuICAgIGluRnVsbHNjcmVlbi52YWx1ZSA9IGZhbHNlXG5cbiAgICBjb3VudGVyID0gTWF0aC5tYXgoMCwgY291bnRlciAtIDEpXG5cbiAgICBpZiAoY291bnRlciA9PT0gMCkge1xuICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKCdxLWJvZHktLWZ1bGxzY3JlZW4tbWl4aW4nKVxuXG4gICAgICBpZiAocHJveHkuJGVsLnNjcm9sbEludG9WaWV3ICE9PSB2b2lkIDApIHtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7IHByb3h5LiRlbC5zY3JvbGxJbnRvVmlldygpIH0pXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgb25CZWZvcmVNb3VudCgoKSA9PiB7XG4gICAgZnVsbHNjcmVlbkZpbGxlck5vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJylcbiAgfSlcblxuICBvbk1vdW50ZWQoKCkgPT4ge1xuICAgIHByb3BzLmZ1bGxzY3JlZW4gPT09IHRydWUgJiYgc2V0RnVsbHNjcmVlbigpXG4gIH0pXG5cbiAgb25CZWZvcmVVbm1vdW50KGV4aXRGdWxsc2NyZWVuKVxuXG4gIC8vIGV4cG9zZSBwdWJsaWMgbWV0aG9kc1xuICBPYmplY3QuYXNzaWduKHByb3h5LCB7XG4gICAgdG9nZ2xlRnVsbHNjcmVlbixcbiAgICBzZXRGdWxsc2NyZWVuLFxuICAgIGV4aXRGdWxsc2NyZWVuXG4gIH0pXG5cbiAgcmV0dXJuIHtcbiAgICBpbkZ1bGxzY3JlZW4sXG4gICAgdG9nZ2xlRnVsbHNjcmVlblxuICB9XG59XG4iLCJleHBvcnQgZnVuY3Rpb24gc29ydERhdGUgKGEsIGIpIHtcbiAgcmV0dXJuIChuZXcgRGF0ZShhKSkgLSAobmV3IERhdGUoYikpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzb3J0Qm9vbGVhbiAoYSwgYikge1xuICByZXR1cm4gYSAmJiAhYlxuICAgID8gLTFcbiAgICA6ICghYSAmJiBiID8gMSA6IDApXG59XG4iLCJpbXBvcnQgeyBjb21wdXRlZCB9IGZyb20gJ3Z1ZSdcblxuaW1wb3J0IHsgc29ydERhdGUgfSBmcm9tICcuLi8uLi91dGlscy9wcml2YXRlL3NvcnQuanMnXG5pbXBvcnQgeyBpc051bWJlciwgaXNEYXRlLCBpc09iamVjdCB9IGZyb20gJy4uLy4uL3V0aWxzL2lzLmpzJ1xuXG5leHBvcnQgY29uc3QgdXNlVGFibGVTb3J0UHJvcHMgPSB7XG4gIHNvcnRNZXRob2Q6IEZ1bmN0aW9uLFxuICBiaW5hcnlTdGF0ZVNvcnQ6IEJvb2xlYW4sXG4gIGNvbHVtblNvcnRPcmRlcjoge1xuICAgIHR5cGU6IFN0cmluZyxcbiAgICB2YWxpZGF0b3I6IHYgPT4gdiA9PT0gJ2FkJyB8fCB2ID09PSAnZGEnLFxuICAgIGRlZmF1bHQ6ICdhZCdcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gdXNlVGFibGVTb3J0IChwcm9wcywgY29tcHV0ZWRQYWdpbmF0aW9uLCBjb2xMaXN0LCBzZXRQYWdpbmF0aW9uKSB7XG4gIGNvbnN0IGNvbHVtblRvU29ydCA9IGNvbXB1dGVkKCgpID0+IHtcbiAgICBjb25zdCB7IHNvcnRCeSB9ID0gY29tcHV0ZWRQYWdpbmF0aW9uLnZhbHVlXG5cbiAgICByZXR1cm4gc29ydEJ5XG4gICAgICA/IGNvbExpc3QudmFsdWUuZmluZChkZWYgPT4gZGVmLm5hbWUgPT09IHNvcnRCeSkgfHwgbnVsbFxuICAgICAgOiBudWxsXG4gIH0pXG5cbiAgY29uc3QgY29tcHV0ZWRTb3J0TWV0aG9kID0gY29tcHV0ZWQoKCkgPT4gKFxuICAgIHByb3BzLnNvcnRNZXRob2QgIT09IHZvaWQgMFxuICAgICAgPyBwcm9wcy5zb3J0TWV0aG9kXG4gICAgICA6IChkYXRhLCBzb3J0QnksIGRlc2NlbmRpbmcpID0+IHtcbiAgICAgICAgICBjb25zdCBjb2wgPSBjb2xMaXN0LnZhbHVlLmZpbmQoZGVmID0+IGRlZi5uYW1lID09PSBzb3J0QnkpXG4gICAgICAgICAgaWYgKGNvbCA9PT0gdm9pZCAwIHx8IGNvbC5maWVsZCA9PT0gdm9pZCAwKSB7XG4gICAgICAgICAgICByZXR1cm4gZGF0YVxuICAgICAgICAgIH1cblxuICAgICAgICAgIGNvbnN0XG4gICAgICAgICAgICBkaXIgPSBkZXNjZW5kaW5nID09PSB0cnVlID8gLTEgOiAxLFxuICAgICAgICAgICAgdmFsID0gdHlwZW9mIGNvbC5maWVsZCA9PT0gJ2Z1bmN0aW9uJ1xuICAgICAgICAgICAgICA/IHYgPT4gY29sLmZpZWxkKHYpXG4gICAgICAgICAgICAgIDogdiA9PiB2WyBjb2wuZmllbGQgXVxuXG4gICAgICAgICAgcmV0dXJuIGRhdGEuc29ydCgoYSwgYikgPT4ge1xuICAgICAgICAgICAgbGV0XG4gICAgICAgICAgICAgIEEgPSB2YWwoYSksXG4gICAgICAgICAgICAgIEIgPSB2YWwoYilcblxuICAgICAgICAgICAgaWYgKGNvbC5yYXdTb3J0ICE9PSB2b2lkIDApIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGNvbC5yYXdTb3J0KEEsIEIsIGEsIGIpICogZGlyXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoQSA9PT0gbnVsbCB8fCBBID09PSB2b2lkIDApIHtcbiAgICAgICAgICAgICAgcmV0dXJuIC0xICogZGlyXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoQiA9PT0gbnVsbCB8fCBCID09PSB2b2lkIDApIHtcbiAgICAgICAgICAgICAgcmV0dXJuIDEgKiBkaXJcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChjb2wuc29ydCAhPT0gdm9pZCAwKSB7XG4gICAgICAgICAgICAgIC8vIGdldHMgY2FsbGVkIHdpdGhvdXQgcm93cyB0aGF0IGhhdmUgbnVsbC91bmRlZmluZWQgYXMgdmFsdWVcbiAgICAgICAgICAgICAgLy8gZHVlIHRvIHRoZSBhYm92ZSB0d28gc3RhdGVtZW50c1xuICAgICAgICAgICAgICByZXR1cm4gY29sLnNvcnQoQSwgQiwgYSwgYikgKiBkaXJcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChpc051bWJlcihBKSA9PT0gdHJ1ZSAmJiBpc051bWJlcihCKSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICByZXR1cm4gKEEgLSBCKSAqIGRpclxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGlzRGF0ZShBKSA9PT0gdHJ1ZSAmJiBpc0RhdGUoQikgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHNvcnREYXRlKEEsIEIpICogZGlyXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodHlwZW9mIEEgPT09ICdib29sZWFuJyAmJiB0eXBlb2YgQiA9PT0gJ2Jvb2xlYW4nKSB7XG4gICAgICAgICAgICAgIHJldHVybiAoQSAtIEIpICogZGlyXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIFsgQSwgQiBdID0gWyBBLCBCIF0ubWFwKHMgPT4gKHMgKyAnJykudG9Mb2NhbGVTdHJpbmcoKS50b0xvd2VyQ2FzZSgpKVxuXG4gICAgICAgICAgICByZXR1cm4gQSA8IEJcbiAgICAgICAgICAgICAgPyAtMSAqIGRpclxuICAgICAgICAgICAgICA6IChBID09PSBCID8gMCA6IGRpcilcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICkpXG5cbiAgZnVuY3Rpb24gc29ydCAoY29sIC8qIFN0cmluZyhjb2wgbmFtZSkgb3IgT2JqZWN0KGNvbCBkZWZpbml0aW9uKSAqLykge1xuICAgIGxldCBzb3J0T3JkZXIgPSBwcm9wcy5jb2x1bW5Tb3J0T3JkZXJcblxuICAgIGlmIChpc09iamVjdChjb2wpID09PSB0cnVlKSB7XG4gICAgICBpZiAoY29sLnNvcnRPcmRlcikge1xuICAgICAgICBzb3J0T3JkZXIgPSBjb2wuc29ydE9yZGVyXG4gICAgICB9XG5cbiAgICAgIGNvbCA9IGNvbC5uYW1lXG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgY29uc3QgZGVmID0gY29sTGlzdC52YWx1ZS5maW5kKGRlZiA9PiBkZWYubmFtZSA9PT0gY29sKVxuICAgICAgaWYgKGRlZiAhPT0gdm9pZCAwICYmIGRlZi5zb3J0T3JkZXIpIHtcbiAgICAgICAgc29ydE9yZGVyID0gZGVmLnNvcnRPcmRlclxuICAgICAgfVxuICAgIH1cblxuICAgIGxldCB7IHNvcnRCeSwgZGVzY2VuZGluZyB9ID0gY29tcHV0ZWRQYWdpbmF0aW9uLnZhbHVlXG5cbiAgICBpZiAoc29ydEJ5ICE9PSBjb2wpIHtcbiAgICAgIHNvcnRCeSA9IGNvbFxuICAgICAgZGVzY2VuZGluZyA9IHNvcnRPcmRlciA9PT0gJ2RhJ1xuICAgIH1cbiAgICBlbHNlIGlmIChwcm9wcy5iaW5hcnlTdGF0ZVNvcnQgPT09IHRydWUpIHtcbiAgICAgIGRlc2NlbmRpbmcgPSAhZGVzY2VuZGluZ1xuICAgIH1cbiAgICBlbHNlIGlmIChkZXNjZW5kaW5nID09PSB0cnVlKSB7XG4gICAgICBpZiAoc29ydE9yZGVyID09PSAnYWQnKSB7XG4gICAgICAgIHNvcnRCeSA9IG51bGxcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICBkZXNjZW5kaW5nID0gZmFsc2VcbiAgICAgIH1cbiAgICB9XG4gICAgZWxzZSB7IC8vIGFzY2VuZGluZ1xuICAgICAgaWYgKHNvcnRPcmRlciA9PT0gJ2FkJykge1xuICAgICAgICBkZXNjZW5kaW5nID0gdHJ1ZVxuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIHNvcnRCeSA9IG51bGxcbiAgICAgIH1cbiAgICB9XG5cbiAgICBzZXRQYWdpbmF0aW9uKHsgc29ydEJ5LCBkZXNjZW5kaW5nLCBwYWdlOiAxIH0pXG4gIH1cblxuICByZXR1cm4ge1xuICAgIGNvbHVtblRvU29ydCxcbiAgICBjb21wdXRlZFNvcnRNZXRob2QsXG4gICAgc29ydFxuICB9XG59XG4iLCJpbXBvcnQgeyBjb21wdXRlZCwgd2F0Y2gsIG5leHRUaWNrIH0gZnJvbSAndnVlJ1xuXG5leHBvcnQgY29uc3QgdXNlVGFibGVGaWx0ZXJQcm9wcyA9IHtcbiAgZmlsdGVyOiBbIFN0cmluZywgT2JqZWN0IF0sXG4gIGZpbHRlck1ldGhvZDogRnVuY3Rpb25cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVzZVRhYmxlRmlsdGVyIChwcm9wcywgc2V0UGFnaW5hdGlvbikge1xuICBjb25zdCBjb21wdXRlZEZpbHRlck1ldGhvZCA9IGNvbXB1dGVkKCgpID0+IChcbiAgICBwcm9wcy5maWx0ZXJNZXRob2QgIT09IHZvaWQgMFxuICAgICAgPyBwcm9wcy5maWx0ZXJNZXRob2RcbiAgICAgIDogKHJvd3MsIHRlcm1zLCBjb2xzLCBjZWxsVmFsdWUpID0+IHtcbiAgICAgICAgICBjb25zdCBsb3dlclRlcm1zID0gdGVybXMgPyB0ZXJtcy50b0xvd2VyQ2FzZSgpIDogJydcbiAgICAgICAgICByZXR1cm4gcm93cy5maWx0ZXIoXG4gICAgICAgICAgICByb3cgPT4gY29scy5zb21lKGNvbCA9PiB7XG4gICAgICAgICAgICAgIGNvbnN0IHZhbCA9IGNlbGxWYWx1ZShjb2wsIHJvdykgKyAnJ1xuICAgICAgICAgICAgICBjb25zdCBoYXlzdGFjayA9ICh2YWwgPT09ICd1bmRlZmluZWQnIHx8IHZhbCA9PT0gJ251bGwnKSA/ICcnIDogdmFsLnRvTG93ZXJDYXNlKClcbiAgICAgICAgICAgICAgcmV0dXJuIGhheXN0YWNrLmluZGV4T2YobG93ZXJUZXJtcykgIT09IC0xXG4gICAgICAgICAgICB9KVxuICAgICAgICAgIClcbiAgICAgICAgfVxuICApKVxuXG4gIHdhdGNoKFxuICAgICgpID0+IHByb3BzLmZpbHRlcixcbiAgICAoKSA9PiB7XG4gICAgICBuZXh0VGljaygoKSA9PiB7XG4gICAgICAgIHNldFBhZ2luYXRpb24oeyBwYWdlOiAxIH0sIHRydWUpXG4gICAgICB9KVxuICAgIH0sXG4gICAgeyBkZWVwOiB0cnVlIH1cbiAgKVxuXG4gIHJldHVybiB7IGNvbXB1dGVkRmlsdGVyTWV0aG9kIH1cbn1cbiIsImltcG9ydCB7IHJlZiwgY29tcHV0ZWQsIHdhdGNoLCBuZXh0VGljayB9IGZyb20gJ3Z1ZSdcblxuZnVuY3Rpb24gc2FtZVBhZ2luYXRpb24gKG9sZFBhZywgbmV3UGFnKSB7XG4gIGZvciAoY29uc3QgcHJvcCBpbiBuZXdQYWcpIHtcbiAgICBpZiAobmV3UGFnWyBwcm9wIF0gIT09IG9sZFBhZ1sgcHJvcCBdKSB7XG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHRydWVcbn1cblxuZnVuY3Rpb24gZml4UGFnaW5hdGlvbiAocCkge1xuICBpZiAocC5wYWdlIDwgMSkge1xuICAgIHAucGFnZSA9IDFcbiAgfVxuICBpZiAocC5yb3dzUGVyUGFnZSAhPT0gdm9pZCAwICYmIHAucm93c1BlclBhZ2UgPCAxKSB7XG4gICAgcC5yb3dzUGVyUGFnZSA9IDBcbiAgfVxuICByZXR1cm4gcFxufVxuXG5leHBvcnQgY29uc3QgdXNlVGFibGVQYWdpbmF0aW9uUHJvcHMgPSB7XG4gIHBhZ2luYXRpb246IE9iamVjdCxcbiAgcm93c1BlclBhZ2VPcHRpb25zOiB7XG4gICAgdHlwZTogQXJyYXksXG4gICAgZGVmYXVsdDogKCkgPT4gWyA1LCA3LCAxMCwgMTUsIDIwLCAyNSwgNTAsIDAgXVxuICB9LFxuXG4gICdvblVwZGF0ZTpwYWdpbmF0aW9uJzogWyBGdW5jdGlvbiwgQXJyYXkgXVxufVxuXG5leHBvcnQgZnVuY3Rpb24gdXNlVGFibGVQYWdpbmF0aW9uU3RhdGUgKHZtLCBnZXRDZWxsVmFsdWUpIHtcbiAgY29uc3QgeyBwcm9wcywgZW1pdCB9ID0gdm1cblxuICBjb25zdCBpbm5lclBhZ2luYXRpb24gPSByZWYoXG4gICAgT2JqZWN0LmFzc2lnbih7XG4gICAgICBzb3J0Qnk6IG51bGwsXG4gICAgICBkZXNjZW5kaW5nOiBmYWxzZSxcbiAgICAgIHBhZ2U6IDEsXG4gICAgICByb3dzUGVyUGFnZTogcHJvcHMucm93c1BlclBhZ2VPcHRpb25zLmxlbmd0aCAhPT0gMFxuICAgICAgICA/IHByb3BzLnJvd3NQZXJQYWdlT3B0aW9uc1sgMCBdXG4gICAgICAgIDogNVxuICAgIH0sIHByb3BzLnBhZ2luYXRpb24pXG4gIClcblxuICBjb25zdCBjb21wdXRlZFBhZ2luYXRpb24gPSBjb21wdXRlZCgoKSA9PiB7XG4gICAgY29uc3QgcGFnID0gcHJvcHNbICdvblVwZGF0ZTpwYWdpbmF0aW9uJyBdICE9PSB2b2lkIDBcbiAgICAgID8geyAuLi5pbm5lclBhZ2luYXRpb24udmFsdWUsIC4uLnByb3BzLnBhZ2luYXRpb24gfVxuICAgICAgOiBpbm5lclBhZ2luYXRpb24udmFsdWVcblxuICAgIHJldHVybiBmaXhQYWdpbmF0aW9uKHBhZylcbiAgfSlcblxuICBjb25zdCBpc1NlcnZlclNpZGUgPSBjb21wdXRlZCgoKSA9PiBjb21wdXRlZFBhZ2luYXRpb24udmFsdWUucm93c051bWJlciAhPT0gdm9pZCAwKVxuXG4gIGZ1bmN0aW9uIHNlbmRTZXJ2ZXJSZXF1ZXN0IChwYWdpbmF0aW9uKSB7XG4gICAgcmVxdWVzdFNlcnZlckludGVyYWN0aW9uKHtcbiAgICAgIHBhZ2luYXRpb24sXG4gICAgICBmaWx0ZXI6IHByb3BzLmZpbHRlclxuICAgIH0pXG4gIH1cblxuICBmdW5jdGlvbiByZXF1ZXN0U2VydmVySW50ZXJhY3Rpb24gKHByb3AgPSB7fSkge1xuICAgIG5leHRUaWNrKCgpID0+IHtcbiAgICAgIGVtaXQoJ3JlcXVlc3QnLCB7XG4gICAgICAgIHBhZ2luYXRpb246IHByb3AucGFnaW5hdGlvbiB8fCBjb21wdXRlZFBhZ2luYXRpb24udmFsdWUsXG4gICAgICAgIGZpbHRlcjogcHJvcC5maWx0ZXIgfHwgcHJvcHMuZmlsdGVyLFxuICAgICAgICBnZXRDZWxsVmFsdWVcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxuXG4gIGZ1bmN0aW9uIHNldFBhZ2luYXRpb24gKHZhbCwgZm9yY2VTZXJ2ZXJSZXF1ZXN0KSB7XG4gICAgY29uc3QgbmV3UGFnaW5hdGlvbiA9IGZpeFBhZ2luYXRpb24oe1xuICAgICAgLi4uY29tcHV0ZWRQYWdpbmF0aW9uLnZhbHVlLFxuICAgICAgLi4udmFsXG4gICAgfSlcblxuICAgIGlmIChzYW1lUGFnaW5hdGlvbihjb21wdXRlZFBhZ2luYXRpb24udmFsdWUsIG5ld1BhZ2luYXRpb24pID09PSB0cnVlKSB7XG4gICAgICBpZiAoaXNTZXJ2ZXJTaWRlLnZhbHVlID09PSB0cnVlICYmIGZvcmNlU2VydmVyUmVxdWVzdCA9PT0gdHJ1ZSkge1xuICAgICAgICBzZW5kU2VydmVyUmVxdWVzdChuZXdQYWdpbmF0aW9uKVxuICAgICAgfVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgaWYgKGlzU2VydmVyU2lkZS52YWx1ZSA9PT0gdHJ1ZSkge1xuICAgICAgc2VuZFNlcnZlclJlcXVlc3QobmV3UGFnaW5hdGlvbilcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGlmIChcbiAgICAgIHByb3BzLnBhZ2luYXRpb24gIT09IHZvaWQgMFxuICAgICAgJiYgcHJvcHNbICdvblVwZGF0ZTpwYWdpbmF0aW9uJyBdICE9PSB2b2lkIDBcbiAgICApIHtcbiAgICAgIGVtaXQoJ3VwZGF0ZTpwYWdpbmF0aW9uJywgbmV3UGFnaW5hdGlvbilcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBpbm5lclBhZ2luYXRpb24udmFsdWUgPSBuZXdQYWdpbmF0aW9uXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBpbm5lclBhZ2luYXRpb24sXG4gICAgY29tcHV0ZWRQYWdpbmF0aW9uLFxuICAgIGlzU2VydmVyU2lkZSxcblxuICAgIHJlcXVlc3RTZXJ2ZXJJbnRlcmFjdGlvbixcbiAgICBzZXRQYWdpbmF0aW9uXG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVzZVRhYmxlUGFnaW5hdGlvbiAodm0sIGlubmVyUGFnaW5hdGlvbiwgY29tcHV0ZWRQYWdpbmF0aW9uLCBpc1NlcnZlclNpZGUsIHNldFBhZ2luYXRpb24sIGZpbHRlcmVkU29ydGVkUm93c051bWJlcikge1xuICBjb25zdCB7IHByb3BzLCBlbWl0LCBwcm94eTogeyAkcSB9IH0gPSB2bVxuXG4gIGNvbnN0IGNvbXB1dGVkUm93c051bWJlciA9IGNvbXB1dGVkKCgpID0+IChcbiAgICBpc1NlcnZlclNpZGUudmFsdWUgPT09IHRydWVcbiAgICAgID8gY29tcHV0ZWRQYWdpbmF0aW9uLnZhbHVlLnJvd3NOdW1iZXIgfHwgMFxuICAgICAgOiBmaWx0ZXJlZFNvcnRlZFJvd3NOdW1iZXIudmFsdWVcbiAgKSlcblxuICBjb25zdCBmaXJzdFJvd0luZGV4ID0gY29tcHV0ZWQoKCkgPT4ge1xuICAgIGNvbnN0IHsgcGFnZSwgcm93c1BlclBhZ2UgfSA9IGNvbXB1dGVkUGFnaW5hdGlvbi52YWx1ZVxuICAgIHJldHVybiAocGFnZSAtIDEpICogcm93c1BlclBhZ2VcbiAgfSlcblxuICBjb25zdCBsYXN0Um93SW5kZXggPSBjb21wdXRlZCgoKSA9PiB7XG4gICAgY29uc3QgeyBwYWdlLCByb3dzUGVyUGFnZSB9ID0gY29tcHV0ZWRQYWdpbmF0aW9uLnZhbHVlXG4gICAgcmV0dXJuIHBhZ2UgKiByb3dzUGVyUGFnZVxuICB9KVxuXG4gIGNvbnN0IGlzRmlyc3RQYWdlID0gY29tcHV0ZWQoKCkgPT4gY29tcHV0ZWRQYWdpbmF0aW9uLnZhbHVlLnBhZ2UgPT09IDEpXG5cbiAgY29uc3QgcGFnZXNOdW1iZXIgPSBjb21wdXRlZCgoKSA9PiAoXG4gICAgY29tcHV0ZWRQYWdpbmF0aW9uLnZhbHVlLnJvd3NQZXJQYWdlID09PSAwXG4gICAgICA/IDFcbiAgICAgIDogTWF0aC5tYXgoXG4gICAgICAgIDEsXG4gICAgICAgIE1hdGguY2VpbChjb21wdXRlZFJvd3NOdW1iZXIudmFsdWUgLyBjb21wdXRlZFBhZ2luYXRpb24udmFsdWUucm93c1BlclBhZ2UpXG4gICAgICApXG4gICkpXG5cbiAgY29uc3QgaXNMYXN0UGFnZSA9IGNvbXB1dGVkKCgpID0+IChcbiAgICBsYXN0Um93SW5kZXgudmFsdWUgPT09IDBcbiAgICAgID8gdHJ1ZVxuICAgICAgOiBjb21wdXRlZFBhZ2luYXRpb24udmFsdWUucGFnZSA+PSBwYWdlc051bWJlci52YWx1ZVxuICApKVxuXG4gIGNvbnN0IGNvbXB1dGVkUm93c1BlclBhZ2VPcHRpb25zID0gY29tcHV0ZWQoKCkgPT4ge1xuICAgIGNvbnN0IG9wdHMgPSBwcm9wcy5yb3dzUGVyUGFnZU9wdGlvbnMuaW5jbHVkZXMoaW5uZXJQYWdpbmF0aW9uLnZhbHVlLnJvd3NQZXJQYWdlKVxuICAgICAgPyBwcm9wcy5yb3dzUGVyUGFnZU9wdGlvbnNcbiAgICAgIDogWyBpbm5lclBhZ2luYXRpb24udmFsdWUucm93c1BlclBhZ2UgXS5jb25jYXQocHJvcHMucm93c1BlclBhZ2VPcHRpb25zKVxuXG4gICAgcmV0dXJuIG9wdHMubWFwKGNvdW50ID0+ICh7XG4gICAgICBsYWJlbDogY291bnQgPT09IDAgPyAkcS5sYW5nLnRhYmxlLmFsbFJvd3MgOiAnJyArIGNvdW50LFxuICAgICAgdmFsdWU6IGNvdW50XG4gICAgfSkpXG4gIH0pXG5cbiAgd2F0Y2gocGFnZXNOdW1iZXIsIChsYXN0UGFnZSwgb2xkTGFzdFBhZ2UpID0+IHtcbiAgICBpZiAobGFzdFBhZ2UgPT09IG9sZExhc3RQYWdlKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCBjdXJyZW50UGFnZSA9IGNvbXB1dGVkUGFnaW5hdGlvbi52YWx1ZS5wYWdlXG4gICAgaWYgKGxhc3RQYWdlICYmICFjdXJyZW50UGFnZSkge1xuICAgICAgc2V0UGFnaW5hdGlvbih7IHBhZ2U6IDEgfSlcbiAgICB9XG4gICAgZWxzZSBpZiAobGFzdFBhZ2UgPCBjdXJyZW50UGFnZSkge1xuICAgICAgc2V0UGFnaW5hdGlvbih7IHBhZ2U6IGxhc3RQYWdlIH0pXG4gICAgfVxuICB9KVxuXG4gIGZ1bmN0aW9uIGZpcnN0UGFnZSAoKSB7XG4gICAgc2V0UGFnaW5hdGlvbih7IHBhZ2U6IDEgfSlcbiAgfVxuXG4gIGZ1bmN0aW9uIHByZXZQYWdlICgpIHtcbiAgICBjb25zdCB7IHBhZ2UgfSA9IGNvbXB1dGVkUGFnaW5hdGlvbi52YWx1ZVxuICAgIGlmIChwYWdlID4gMSkge1xuICAgICAgc2V0UGFnaW5hdGlvbih7IHBhZ2U6IHBhZ2UgLSAxIH0pXG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gbmV4dFBhZ2UgKCkge1xuICAgIGNvbnN0IHsgcGFnZSwgcm93c1BlclBhZ2UgfSA9IGNvbXB1dGVkUGFnaW5hdGlvbi52YWx1ZVxuICAgIGlmIChsYXN0Um93SW5kZXgudmFsdWUgPiAwICYmIHBhZ2UgKiByb3dzUGVyUGFnZSA8IGNvbXB1dGVkUm93c051bWJlci52YWx1ZSkge1xuICAgICAgc2V0UGFnaW5hdGlvbih7IHBhZ2U6IHBhZ2UgKyAxIH0pXG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gbGFzdFBhZ2UgKCkge1xuICAgIHNldFBhZ2luYXRpb24oeyBwYWdlOiBwYWdlc051bWJlci52YWx1ZSB9KVxuICB9XG5cbiAgaWYgKHByb3BzWyAnb25VcGRhdGU6cGFnaW5hdGlvbicgXSAhPT0gdm9pZCAwKSB7XG4gICAgZW1pdCgndXBkYXRlOnBhZ2luYXRpb24nLCB7IC4uLmNvbXB1dGVkUGFnaW5hdGlvbi52YWx1ZSB9KVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBmaXJzdFJvd0luZGV4LFxuICAgIGxhc3RSb3dJbmRleCxcbiAgICBpc0ZpcnN0UGFnZSxcbiAgICBpc0xhc3RQYWdlLFxuICAgIHBhZ2VzTnVtYmVyLFxuICAgIGNvbXB1dGVkUm93c1BlclBhZ2VPcHRpb25zLFxuICAgIGNvbXB1dGVkUm93c051bWJlcixcblxuICAgIGZpcnN0UGFnZSxcbiAgICBwcmV2UGFnZSxcbiAgICBuZXh0UGFnZSxcbiAgICBsYXN0UGFnZVxuICB9XG59XG4iLCJpbXBvcnQgeyBjb21wdXRlZCB9IGZyb20gJ3Z1ZSdcblxuZXhwb3J0IGNvbnN0IHVzZVRhYmxlUm93U2VsZWN0aW9uUHJvcHMgPSB7XG4gIHNlbGVjdGlvbjoge1xuICAgIHR5cGU6IFN0cmluZyxcbiAgICBkZWZhdWx0OiAnbm9uZScsXG4gICAgdmFsaWRhdG9yOiB2ID0+IFsgJ3NpbmdsZScsICdtdWx0aXBsZScsICdub25lJyBdLmluY2x1ZGVzKHYpXG4gIH0sXG4gIHNlbGVjdGVkOiB7XG4gICAgdHlwZTogQXJyYXksXG4gICAgZGVmYXVsdDogKCkgPT4gW11cbiAgfVxufVxuXG5leHBvcnQgY29uc3QgdXNlVGFibGVSb3dTZWxlY3Rpb25FbWl0cyA9IFsgJ3VwZGF0ZTpzZWxlY3RlZCcsICdzZWxlY3Rpb24nIF1cblxuZXhwb3J0IGZ1bmN0aW9uIHVzZVRhYmxlUm93U2VsZWN0aW9uIChwcm9wcywgZW1pdCwgY29tcHV0ZWRSb3dzLCBnZXRSb3dLZXkpIHtcbiAgY29uc3Qgc2VsZWN0ZWRLZXlzID0gY29tcHV0ZWQoKCkgPT4ge1xuICAgIGNvbnN0IGtleXMgPSB7fVxuICAgIHByb3BzLnNlbGVjdGVkLm1hcChnZXRSb3dLZXkudmFsdWUpLmZvckVhY2goa2V5ID0+IHtcbiAgICAgIGtleXNbIGtleSBdID0gdHJ1ZVxuICAgIH0pXG4gICAgcmV0dXJuIGtleXNcbiAgfSlcblxuICBjb25zdCBoYXNTZWxlY3Rpb25Nb2RlID0gY29tcHV0ZWQoKCkgPT4ge1xuICAgIHJldHVybiBwcm9wcy5zZWxlY3Rpb24gIT09ICdub25lJ1xuICB9KVxuXG4gIGNvbnN0IHNpbmdsZVNlbGVjdGlvbiA9IGNvbXB1dGVkKCgpID0+IHtcbiAgICByZXR1cm4gcHJvcHMuc2VsZWN0aW9uID09PSAnc2luZ2xlJ1xuICB9KVxuXG4gIGNvbnN0IG11bHRpcGxlU2VsZWN0aW9uID0gY29tcHV0ZWQoKCkgPT4ge1xuICAgIHJldHVybiBwcm9wcy5zZWxlY3Rpb24gPT09ICdtdWx0aXBsZSdcbiAgfSlcblxuICBjb25zdCBhbGxSb3dzU2VsZWN0ZWQgPSBjb21wdXRlZCgoKSA9PlxuICAgIGNvbXB1dGVkUm93cy52YWx1ZS5sZW5ndGggIT09IDAgJiYgY29tcHV0ZWRSb3dzLnZhbHVlLmV2ZXJ5KFxuICAgICAgcm93ID0+IHNlbGVjdGVkS2V5cy52YWx1ZVsgZ2V0Um93S2V5LnZhbHVlKHJvdykgXSA9PT0gdHJ1ZVxuICAgIClcbiAgKVxuXG4gIGNvbnN0IHNvbWVSb3dzU2VsZWN0ZWQgPSBjb21wdXRlZCgoKSA9PlxuICAgIGFsbFJvd3NTZWxlY3RlZC52YWx1ZSAhPT0gdHJ1ZVxuICAgICYmIGNvbXB1dGVkUm93cy52YWx1ZS5zb21lKHJvdyA9PiBzZWxlY3RlZEtleXMudmFsdWVbIGdldFJvd0tleS52YWx1ZShyb3cpIF0gPT09IHRydWUpXG4gIClcblxuICBjb25zdCByb3dzU2VsZWN0ZWROdW1iZXIgPSBjb21wdXRlZCgoKSA9PiBwcm9wcy5zZWxlY3RlZC5sZW5ndGgpXG5cbiAgZnVuY3Rpb24gaXNSb3dTZWxlY3RlZCAoa2V5KSB7XG4gICAgcmV0dXJuIHNlbGVjdGVkS2V5cy52YWx1ZVsga2V5IF0gPT09IHRydWVcbiAgfVxuXG4gIGZ1bmN0aW9uIGNsZWFyU2VsZWN0aW9uICgpIHtcbiAgICBlbWl0KCd1cGRhdGU6c2VsZWN0ZWQnLCBbXSlcbiAgfVxuXG4gIGZ1bmN0aW9uIHVwZGF0ZVNlbGVjdGlvbiAoa2V5cywgcm93cywgYWRkZWQsIGV2dCkge1xuICAgIGVtaXQoJ3NlbGVjdGlvbicsIHsgcm93cywgYWRkZWQsIGtleXMsIGV2dCB9KVxuXG4gICAgY29uc3QgcGF5bG9hZCA9IHNpbmdsZVNlbGVjdGlvbi52YWx1ZSA9PT0gdHJ1ZVxuICAgICAgPyAoYWRkZWQgPT09IHRydWUgPyByb3dzIDogW10pXG4gICAgICA6IChcbiAgICAgICAgICBhZGRlZCA9PT0gdHJ1ZVxuICAgICAgICAgICAgPyBwcm9wcy5zZWxlY3RlZC5jb25jYXQocm93cylcbiAgICAgICAgICAgIDogcHJvcHMuc2VsZWN0ZWQuZmlsdGVyKFxuICAgICAgICAgICAgICByb3cgPT4ga2V5cy5pbmNsdWRlcyhnZXRSb3dLZXkudmFsdWUocm93KSkgPT09IGZhbHNlXG4gICAgICAgICAgICApXG4gICAgICAgIClcblxuICAgIGVtaXQoJ3VwZGF0ZTpzZWxlY3RlZCcsIHBheWxvYWQpXG4gIH1cblxuICByZXR1cm4ge1xuICAgIGhhc1NlbGVjdGlvbk1vZGUsXG4gICAgc2luZ2xlU2VsZWN0aW9uLFxuICAgIG11bHRpcGxlU2VsZWN0aW9uLFxuICAgIGFsbFJvd3NTZWxlY3RlZCxcbiAgICBzb21lUm93c1NlbGVjdGVkLFxuICAgIHJvd3NTZWxlY3RlZE51bWJlcixcblxuICAgIGlzUm93U2VsZWN0ZWQsXG4gICAgY2xlYXJTZWxlY3Rpb24sXG4gICAgdXBkYXRlU2VsZWN0aW9uXG4gIH1cbn1cbiIsImltcG9ydCB7IHJlZiwgd2F0Y2ggfSBmcm9tICd2dWUnXG5cbmZ1bmN0aW9uIGdldFZhbCAodmFsKSB7XG4gIHJldHVybiBBcnJheS5pc0FycmF5KHZhbClcbiAgICA/IHZhbC5zbGljZSgpXG4gICAgOiBbXVxufVxuXG5leHBvcnQgY29uc3QgdXNlVGFibGVSb3dFeHBhbmRQcm9wcyA9IHtcbiAgZXhwYW5kZWQ6IEFycmF5IC8vIHYtbW9kZWw6ZXhwYW5kZWRcbn1cblxuZXhwb3J0IGNvbnN0IHVzZVRhYmxlUm93RXhwYW5kRW1pdHMgPSBbICd1cGRhdGU6ZXhwYW5kZWQnIF1cblxuZXhwb3J0IGZ1bmN0aW9uIHVzZVRhYmxlUm93RXhwYW5kIChwcm9wcywgZW1pdCkge1xuICBjb25zdCBpbm5lckV4cGFuZGVkID0gcmVmKGdldFZhbChwcm9wcy5leHBhbmRlZCkpXG5cbiAgd2F0Y2goKCkgPT4gcHJvcHMuZXhwYW5kZWQsIHZhbCA9PiB7XG4gICAgaW5uZXJFeHBhbmRlZC52YWx1ZSA9IGdldFZhbCh2YWwpXG4gIH0pXG5cbiAgZnVuY3Rpb24gaXNSb3dFeHBhbmRlZCAoa2V5KSB7XG4gICAgcmV0dXJuIGlubmVyRXhwYW5kZWQudmFsdWUuaW5jbHVkZXMoa2V5KVxuICB9XG5cbiAgZnVuY3Rpb24gc2V0RXhwYW5kZWQgKHZhbCkge1xuICAgIGlmIChwcm9wcy5leHBhbmRlZCAhPT0gdm9pZCAwKSB7XG4gICAgICBlbWl0KCd1cGRhdGU6ZXhwYW5kZWQnLCB2YWwpXG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgaW5uZXJFeHBhbmRlZC52YWx1ZSA9IHZhbFxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHVwZGF0ZUV4cGFuZGVkIChrZXksIGFkZCkge1xuICAgIGNvbnN0IHRhcmdldCA9IGlubmVyRXhwYW5kZWQudmFsdWUuc2xpY2UoKVxuICAgIGNvbnN0IGluZGV4ID0gdGFyZ2V0LmluZGV4T2Yoa2V5KVxuXG4gICAgaWYgKGFkZCA9PT0gdHJ1ZSkge1xuICAgICAgaWYgKGluZGV4ID09PSAtMSkge1xuICAgICAgICB0YXJnZXQucHVzaChrZXkpXG4gICAgICAgIHNldEV4cGFuZGVkKHRhcmdldClcbiAgICAgIH1cbiAgICB9XG4gICAgZWxzZSBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICB0YXJnZXQuc3BsaWNlKGluZGV4LCAxKVxuICAgICAgc2V0RXhwYW5kZWQodGFyZ2V0KVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB7XG4gICAgaXNSb3dFeHBhbmRlZCxcbiAgICBzZXRFeHBhbmRlZCxcbiAgICB1cGRhdGVFeHBhbmRlZFxuICB9XG59XG4iLCJpbXBvcnQgeyBjb21wdXRlZCB9IGZyb20gJ3Z1ZSdcblxuaW1wb3J0IHsgaXNOdW1iZXIgfSBmcm9tICcuLi8uLi91dGlscy9pcy5qcydcblxuZXhwb3J0IGNvbnN0IHVzZVRhYmxlQ29sdW1uU2VsZWN0aW9uUHJvcHMgPSB7XG4gIHZpc2libGVDb2x1bW5zOiBBcnJheVxufVxuXG5leHBvcnQgZnVuY3Rpb24gdXNlVGFibGVDb2x1bW5TZWxlY3Rpb24gKHByb3BzLCBjb21wdXRlZFBhZ2luYXRpb24sIGhhc1NlbGVjdGlvbk1vZGUpIHtcbiAgY29uc3QgY29sTGlzdCA9IGNvbXB1dGVkKCgpID0+IHtcbiAgICBpZiAocHJvcHMuY29sdW1ucyAhPT0gdm9pZCAwKSB7XG4gICAgICByZXR1cm4gcHJvcHMuY29sdW1uc1xuICAgIH1cblxuICAgIC8vIHdlIGluZmVyIGNvbHVtbnMgZnJvbSBmaXJzdCByb3dcbiAgICBjb25zdCByb3cgPSBwcm9wcy5yb3dzWyAwIF1cblxuICAgIHJldHVybiByb3cgIT09IHZvaWQgMFxuICAgICAgPyBPYmplY3Qua2V5cyhyb3cpLm1hcChuYW1lID0+ICh7XG4gICAgICAgIG5hbWUsXG4gICAgICAgIGxhYmVsOiBuYW1lLnRvVXBwZXJDYXNlKCksXG4gICAgICAgIGZpZWxkOiBuYW1lLFxuICAgICAgICBhbGlnbjogaXNOdW1iZXIocm93WyBuYW1lIF0pID8gJ3JpZ2h0JyA6ICdsZWZ0JyxcbiAgICAgICAgc29ydGFibGU6IHRydWVcbiAgICAgIH0pKVxuICAgICAgOiBbXVxuICB9KVxuXG4gIGNvbnN0IGNvbXB1dGVkQ29scyA9IGNvbXB1dGVkKCgpID0+IHtcbiAgICBjb25zdCB7IHNvcnRCeSwgZGVzY2VuZGluZyB9ID0gY29tcHV0ZWRQYWdpbmF0aW9uLnZhbHVlXG5cbiAgICBjb25zdCBjb2xzID0gcHJvcHMudmlzaWJsZUNvbHVtbnMgIT09IHZvaWQgMFxuICAgICAgPyBjb2xMaXN0LnZhbHVlLmZpbHRlcihjb2wgPT4gY29sLnJlcXVpcmVkID09PSB0cnVlIHx8IHByb3BzLnZpc2libGVDb2x1bW5zLmluY2x1ZGVzKGNvbC5uYW1lKSA9PT0gdHJ1ZSlcbiAgICAgIDogY29sTGlzdC52YWx1ZVxuXG4gICAgcmV0dXJuIGNvbHMubWFwKGNvbCA9PiB7XG4gICAgICBjb25zdCBhbGlnbiA9IGNvbC5hbGlnbiB8fCAncmlnaHQnXG4gICAgICBjb25zdCBhbGlnbkNsYXNzID0gYHRleHQtJHsgYWxpZ24gfWBcblxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uY29sLFxuICAgICAgICBhbGlnbixcbiAgICAgICAgX19pY29uQ2xhc3M6IGBxLXRhYmxlX19zb3J0LWljb24gcS10YWJsZV9fc29ydC1pY29uLS0keyBhbGlnbiB9YCxcbiAgICAgICAgX190aENsYXNzOiBhbGlnbkNsYXNzXG4gICAgICAgICAgKyAoY29sLmhlYWRlckNsYXNzZXMgIT09IHZvaWQgMCA/ICcgJyArIGNvbC5oZWFkZXJDbGFzc2VzIDogJycpXG4gICAgICAgICAgKyAoY29sLnNvcnRhYmxlID09PSB0cnVlID8gJyBzb3J0YWJsZScgOiAnJylcbiAgICAgICAgICArIChjb2wubmFtZSA9PT0gc29ydEJ5ID8gYCBzb3J0ZWQgJHsgZGVzY2VuZGluZyA9PT0gdHJ1ZSA/ICdzb3J0LWRlc2MnIDogJycgfWAgOiAnJyksXG5cbiAgICAgICAgX190ZFN0eWxlOiBjb2wuc3R5bGUgIT09IHZvaWQgMFxuICAgICAgICAgID8gKFxuICAgICAgICAgICAgICB0eXBlb2YgY29sLnN0eWxlICE9PSAnZnVuY3Rpb24nXG4gICAgICAgICAgICAgICAgPyAoKSA9PiBjb2wuc3R5bGVcbiAgICAgICAgICAgICAgICA6IGNvbC5zdHlsZVxuICAgICAgICAgICAgKVxuICAgICAgICAgIDogKCkgPT4gbnVsbCxcblxuICAgICAgICBfX3RkQ2xhc3M6IGNvbC5jbGFzc2VzICE9PSB2b2lkIDBcbiAgICAgICAgICA/IChcbiAgICAgICAgICAgICAgdHlwZW9mIGNvbC5jbGFzc2VzICE9PSAnZnVuY3Rpb24nXG4gICAgICAgICAgICAgICAgPyAoKSA9PiBhbGlnbkNsYXNzICsgJyAnICsgY29sLmNsYXNzZXNcbiAgICAgICAgICAgICAgICA6IHJvdyA9PiBhbGlnbkNsYXNzICsgJyAnICsgY29sLmNsYXNzZXMocm93KVxuICAgICAgICAgICAgKVxuICAgICAgICAgIDogKCkgPT4gYWxpZ25DbGFzc1xuICAgICAgfVxuICAgIH0pXG4gIH0pXG5cbiAgY29uc3QgY29tcHV0ZWRDb2xzTWFwID0gY29tcHV0ZWQoKCkgPT4ge1xuICAgIGNvbnN0IG5hbWVzID0ge31cbiAgICBjb21wdXRlZENvbHMudmFsdWUuZm9yRWFjaChjb2wgPT4ge1xuICAgICAgbmFtZXNbIGNvbC5uYW1lIF0gPSBjb2xcbiAgICB9KVxuICAgIHJldHVybiBuYW1lc1xuICB9KVxuXG4gIGNvbnN0IGNvbXB1dGVkQ29sc3BhbiA9IGNvbXB1dGVkKCgpID0+IHtcbiAgICByZXR1cm4gcHJvcHMudGFibGVDb2xzcGFuICE9PSB2b2lkIDBcbiAgICAgID8gcHJvcHMudGFibGVDb2xzcGFuXG4gICAgICA6IGNvbXB1dGVkQ29scy52YWx1ZS5sZW5ndGggKyAoaGFzU2VsZWN0aW9uTW9kZS52YWx1ZSA9PT0gdHJ1ZSA/IDEgOiAwKVxuICB9KVxuXG4gIHJldHVybiB7XG4gICAgY29sTGlzdCxcbiAgICBjb21wdXRlZENvbHMsXG4gICAgY29tcHV0ZWRDb2xzTWFwLFxuICAgIGNvbXB1dGVkQ29sc3BhblxuICB9XG59XG4iLCJpbXBvcnQgeyBoLCByZWYsIGNvbXB1dGVkLCB3YXRjaCwgZ2V0Q3VycmVudEluc3RhbmNlIH0gZnJvbSAndnVlJ1xuXG5pbXBvcnQgUVRoIGZyb20gJy4vUVRoLmpzJ1xuXG5pbXBvcnQgUVNlcGFyYXRvciBmcm9tICcuLi9zZXBhcmF0b3IvUVNlcGFyYXRvci5qcydcbmltcG9ydCBRSWNvbiBmcm9tICcuLi9pY29uL1FJY29uLmpzJ1xuaW1wb3J0IFFWaXJ0dWFsU2Nyb2xsIGZyb20gJy4uL3ZpcnR1YWwtc2Nyb2xsL1FWaXJ0dWFsU2Nyb2xsLmpzJ1xuaW1wb3J0IFFTZWxlY3QgZnJvbSAnLi4vc2VsZWN0L1FTZWxlY3QuanMnXG5pbXBvcnQgUUxpbmVhclByb2dyZXNzIGZyb20gJy4uL2xpbmVhci1wcm9ncmVzcy9RTGluZWFyUHJvZ3Jlc3MuanMnXG5pbXBvcnQgUUNoZWNrYm94IGZyb20gJy4uL2NoZWNrYm94L1FDaGVja2JveC5qcydcbmltcG9ydCBRQnRuIGZyb20gJy4uL2J0bi9RQnRuLmpzJ1xuXG5pbXBvcnQgZ2V0VGFibGVNaWRkbGUgZnJvbSAnLi9nZXQtdGFibGUtbWlkZGxlLmpzJ1xuXG5pbXBvcnQgdXNlRGFyaywgeyB1c2VEYXJrUHJvcHMgfSBmcm9tICcuLi8uLi9jb21wb3NhYmxlcy9wcml2YXRlL3VzZS1kYXJrLmpzJ1xuaW1wb3J0IHsgY29tbW9uVmlydFByb3BzTGlzdCB9IGZyb20gJy4uL3ZpcnR1YWwtc2Nyb2xsL3VzZS12aXJ0dWFsLXNjcm9sbC5qcydcbmltcG9ydCB1c2VGdWxsc2NyZWVuLCB7IHVzZUZ1bGxzY3JlZW5Qcm9wcywgdXNlRnVsbHNjcmVlbkVtaXRzIH0gZnJvbSAnLi4vLi4vY29tcG9zYWJsZXMvcHJpdmF0ZS91c2UtZnVsbHNjcmVlbi5qcydcblxuaW1wb3J0IHsgdXNlVGFibGVTb3J0LCB1c2VUYWJsZVNvcnRQcm9wcyB9IGZyb20gJy4vdGFibGUtc29ydC5qcydcbmltcG9ydCB7IHVzZVRhYmxlRmlsdGVyLCB1c2VUYWJsZUZpbHRlclByb3BzIH0gZnJvbSAnLi90YWJsZS1maWx0ZXIuanMnXG5pbXBvcnQgeyB1c2VUYWJsZVBhZ2luYXRpb25TdGF0ZSwgdXNlVGFibGVQYWdpbmF0aW9uLCB1c2VUYWJsZVBhZ2luYXRpb25Qcm9wcyB9IGZyb20gJy4vdGFibGUtcGFnaW5hdGlvbi5qcydcbmltcG9ydCB7IHVzZVRhYmxlUm93U2VsZWN0aW9uLCB1c2VUYWJsZVJvd1NlbGVjdGlvblByb3BzLCB1c2VUYWJsZVJvd1NlbGVjdGlvbkVtaXRzIH0gZnJvbSAnLi90YWJsZS1yb3ctc2VsZWN0aW9uLmpzJ1xuaW1wb3J0IHsgdXNlVGFibGVSb3dFeHBhbmQsIHVzZVRhYmxlUm93RXhwYW5kUHJvcHMsIHVzZVRhYmxlUm93RXhwYW5kRW1pdHMgfSBmcm9tICcuL3RhYmxlLXJvdy1leHBhbmQuanMnXG5pbXBvcnQgeyB1c2VUYWJsZUNvbHVtblNlbGVjdGlvbiwgdXNlVGFibGVDb2x1bW5TZWxlY3Rpb25Qcm9wcyB9IGZyb20gJy4vdGFibGUtY29sdW1uLXNlbGVjdGlvbi5qcydcblxuaW1wb3J0IHsgaW5qZWN0UHJvcCwgaW5qZWN0TXVsdGlwbGVQcm9wcyB9IGZyb20gJy4uLy4uL3V0aWxzL3ByaXZhdGUvaW5qZWN0LW9iai1wcm9wLmpzJ1xuaW1wb3J0IHsgY3JlYXRlQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vdXRpbHMvcHJpdmF0ZS9jcmVhdGUuanMnXG5cbmNvbnN0IGJvdHRvbUNsYXNzID0gJ3EtdGFibGVfX2JvdHRvbSByb3cgaXRlbXMtY2VudGVyJ1xuXG5jb25zdCBjb21tb25WaXJ0UHJvcHNPYmogPSB7fVxuY29tbW9uVmlydFByb3BzTGlzdC5mb3JFYWNoKHAgPT4geyBjb21tb25WaXJ0UHJvcHNPYmpbIHAgXSA9IHt9IH0pXG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUNvbXBvbmVudCh7XG4gIG5hbWU6ICdRVGFibGUnLFxuXG4gIHByb3BzOiB7XG4gICAgcm93czoge1xuICAgICAgdHlwZTogQXJyYXksXG4gICAgICBkZWZhdWx0OiAoKSA9PiBbXVxuICAgIH0sXG4gICAgcm93S2V5OiB7XG4gICAgICB0eXBlOiBbIFN0cmluZywgRnVuY3Rpb24gXSxcbiAgICAgIGRlZmF1bHQ6ICdpZCdcbiAgICB9LFxuXG4gICAgY29sdW1uczogQXJyYXksXG4gICAgbG9hZGluZzogQm9vbGVhbixcblxuICAgIGljb25GaXJzdFBhZ2U6IFN0cmluZyxcbiAgICBpY29uUHJldlBhZ2U6IFN0cmluZyxcbiAgICBpY29uTmV4dFBhZ2U6IFN0cmluZyxcbiAgICBpY29uTGFzdFBhZ2U6IFN0cmluZyxcblxuICAgIHRpdGxlOiBTdHJpbmcsXG5cbiAgICBoaWRlSGVhZGVyOiBCb29sZWFuLFxuXG4gICAgZ3JpZDogQm9vbGVhbixcbiAgICBncmlkSGVhZGVyOiBCb29sZWFuLFxuXG4gICAgZGVuc2U6IEJvb2xlYW4sXG4gICAgZmxhdDogQm9vbGVhbixcbiAgICBib3JkZXJlZDogQm9vbGVhbixcbiAgICBzcXVhcmU6IEJvb2xlYW4sXG4gICAgc2VwYXJhdG9yOiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICBkZWZhdWx0OiAnaG9yaXpvbnRhbCcsXG4gICAgICB2YWxpZGF0b3I6IHYgPT4gWyAnaG9yaXpvbnRhbCcsICd2ZXJ0aWNhbCcsICdjZWxsJywgJ25vbmUnIF0uaW5jbHVkZXModilcbiAgICB9LFxuICAgIHdyYXBDZWxsczogQm9vbGVhbixcblxuICAgIHZpcnR1YWxTY3JvbGw6IEJvb2xlYW4sXG4gICAgdmlydHVhbFNjcm9sbFRhcmdldDoge1xuICAgICAgZGVmYXVsdDogdm9pZCAwXG4gICAgfSxcbiAgICAuLi5jb21tb25WaXJ0UHJvcHNPYmosXG5cbiAgICBub0RhdGFMYWJlbDogU3RyaW5nLFxuICAgIG5vUmVzdWx0c0xhYmVsOiBTdHJpbmcsXG4gICAgbG9hZGluZ0xhYmVsOiBTdHJpbmcsXG4gICAgc2VsZWN0ZWRSb3dzTGFiZWw6IEZ1bmN0aW9uLFxuICAgIHJvd3NQZXJQYWdlTGFiZWw6IFN0cmluZyxcbiAgICBwYWdpbmF0aW9uTGFiZWw6IEZ1bmN0aW9uLFxuXG4gICAgY29sb3I6IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIGRlZmF1bHQ6ICdncmV5LTgnXG4gICAgfSxcblxuICAgIHRpdGxlQ2xhc3M6IFsgU3RyaW5nLCBBcnJheSwgT2JqZWN0IF0sXG4gICAgdGFibGVTdHlsZTogWyBTdHJpbmcsIEFycmF5LCBPYmplY3QgXSxcbiAgICB0YWJsZUNsYXNzOiBbIFN0cmluZywgQXJyYXksIE9iamVjdCBdLFxuICAgIHRhYmxlSGVhZGVyU3R5bGU6IFsgU3RyaW5nLCBBcnJheSwgT2JqZWN0IF0sXG4gICAgdGFibGVIZWFkZXJDbGFzczogWyBTdHJpbmcsIEFycmF5LCBPYmplY3QgXSxcbiAgICBjYXJkQ29udGFpbmVyQ2xhc3M6IFsgU3RyaW5nLCBBcnJheSwgT2JqZWN0IF0sXG4gICAgY2FyZENvbnRhaW5lclN0eWxlOiBbIFN0cmluZywgQXJyYXksIE9iamVjdCBdLFxuICAgIGNhcmRTdHlsZTogWyBTdHJpbmcsIEFycmF5LCBPYmplY3QgXSxcbiAgICBjYXJkQ2xhc3M6IFsgU3RyaW5nLCBBcnJheSwgT2JqZWN0IF0sXG5cbiAgICBoaWRlQm90dG9tOiBCb29sZWFuLFxuICAgIGhpZGVTZWxlY3RlZEJhbm5lcjogQm9vbGVhbixcbiAgICBoaWRlTm9EYXRhOiBCb29sZWFuLFxuICAgIGhpZGVQYWdpbmF0aW9uOiBCb29sZWFuLFxuXG4gICAgb25Sb3dDbGljazogRnVuY3Rpb24sXG4gICAgb25Sb3dEYmxjbGljazogRnVuY3Rpb24sXG4gICAgb25Sb3dDb250ZXh0bWVudTogRnVuY3Rpb24sXG5cbiAgICAuLi51c2VEYXJrUHJvcHMsXG4gICAgLi4udXNlRnVsbHNjcmVlblByb3BzLFxuXG4gICAgLi4udXNlVGFibGVDb2x1bW5TZWxlY3Rpb25Qcm9wcyxcbiAgICAuLi51c2VUYWJsZUZpbHRlclByb3BzLFxuICAgIC4uLnVzZVRhYmxlUGFnaW5hdGlvblByb3BzLFxuICAgIC4uLnVzZVRhYmxlUm93RXhwYW5kUHJvcHMsXG4gICAgLi4udXNlVGFibGVSb3dTZWxlY3Rpb25Qcm9wcyxcbiAgICAuLi51c2VUYWJsZVNvcnRQcm9wc1xuICB9LFxuXG4gIGVtaXRzOiBbXG4gICAgJ3JlcXVlc3QnLCAndmlydHVhbFNjcm9sbCcsXG4gICAgLi4udXNlRnVsbHNjcmVlbkVtaXRzLFxuICAgIC4uLnVzZVRhYmxlUm93RXhwYW5kRW1pdHMsXG4gICAgLi4udXNlVGFibGVSb3dTZWxlY3Rpb25FbWl0c1xuICBdLFxuXG4gIHNldHVwIChwcm9wcywgeyBzbG90cywgZW1pdCB9KSB7XG4gICAgY29uc3Qgdm0gPSBnZXRDdXJyZW50SW5zdGFuY2UoKVxuICAgIGNvbnN0IHsgcHJveHk6IHsgJHEgfSB9ID0gdm1cblxuICAgIGNvbnN0IGlzRGFyayA9IHVzZURhcmsocHJvcHMsICRxKVxuICAgIGNvbnN0IHsgaW5GdWxsc2NyZWVuLCB0b2dnbGVGdWxsc2NyZWVuIH0gPSB1c2VGdWxsc2NyZWVuKClcblxuICAgIGNvbnN0IGdldFJvd0tleSA9IGNvbXB1dGVkKCgpID0+IChcbiAgICAgIHR5cGVvZiBwcm9wcy5yb3dLZXkgPT09ICdmdW5jdGlvbidcbiAgICAgICAgPyBwcm9wcy5yb3dLZXlcbiAgICAgICAgOiByb3cgPT4gcm93WyBwcm9wcy5yb3dLZXkgXVxuICAgICkpXG5cbiAgICBjb25zdCByb290UmVmID0gcmVmKG51bGwpXG4gICAgY29uc3QgdmlydFNjcm9sbFJlZiA9IHJlZihudWxsKVxuICAgIGNvbnN0IGhhc1ZpcnRTY3JvbGwgPSBjb21wdXRlZCgoKSA9PiBwcm9wcy5ncmlkICE9PSB0cnVlICYmIHByb3BzLnZpcnR1YWxTY3JvbGwgPT09IHRydWUpXG5cbiAgICBjb25zdCBjYXJkRGVmYXVsdENsYXNzID0gY29tcHV0ZWQoKCkgPT5cbiAgICAgICcgcS10YWJsZV9fY2FyZCdcbiAgICAgICsgKGlzRGFyay52YWx1ZSA9PT0gdHJ1ZSA/ICcgcS10YWJsZV9fY2FyZC0tZGFyayBxLWRhcmsnIDogJycpXG4gICAgICArIChwcm9wcy5zcXVhcmUgPT09IHRydWUgPyAnIHEtdGFibGUtLXNxdWFyZScgOiAnJylcbiAgICAgICsgKHByb3BzLmZsYXQgPT09IHRydWUgPyAnIHEtdGFibGUtLWZsYXQnIDogJycpXG4gICAgICArIChwcm9wcy5ib3JkZXJlZCA9PT0gdHJ1ZSA/ICcgcS10YWJsZS0tYm9yZGVyZWQnIDogJycpXG4gICAgKVxuXG4gICAgY29uc3QgX19jb250YWluZXJDbGFzcyA9IGNvbXB1dGVkKCgpID0+XG4gICAgICBgcS10YWJsZV9fY29udGFpbmVyIHEtdGFibGUtLSR7IHByb3BzLnNlcGFyYXRvciB9LXNlcGFyYXRvciBjb2x1bW4gbm8td3JhcGBcbiAgICAgICsgKHByb3BzLmdyaWQgPT09IHRydWUgPyAnIHEtdGFibGUtLWdyaWQnIDogY2FyZERlZmF1bHRDbGFzcy52YWx1ZSlcbiAgICAgICsgKGlzRGFyay52YWx1ZSA9PT0gdHJ1ZSA/ICcgcS10YWJsZS0tZGFyaycgOiAnJylcbiAgICAgICsgKHByb3BzLmRlbnNlID09PSB0cnVlID8gJyBxLXRhYmxlLS1kZW5zZScgOiAnJylcbiAgICAgICsgKHByb3BzLndyYXBDZWxscyA9PT0gZmFsc2UgPyAnIHEtdGFibGUtLW5vLXdyYXAnIDogJycpXG4gICAgICArIChpbkZ1bGxzY3JlZW4udmFsdWUgPT09IHRydWUgPyAnIGZ1bGxzY3JlZW4gc2Nyb2xsJyA6ICcnKVxuICAgIClcblxuICAgIGNvbnN0IGNvbnRhaW5lckNsYXNzID0gY29tcHV0ZWQoKCkgPT5cbiAgICAgIF9fY29udGFpbmVyQ2xhc3MudmFsdWUgKyAocHJvcHMubG9hZGluZyA9PT0gdHJ1ZSA/ICcgcS10YWJsZS0tbG9hZGluZycgOiAnJylcbiAgICApXG5cbiAgICB3YXRjaChcbiAgICAgICgpID0+IHByb3BzLnRhYmxlU3R5bGUgKyBwcm9wcy50YWJsZUNsYXNzICsgcHJvcHMudGFibGVIZWFkZXJTdHlsZSArIHByb3BzLnRhYmxlSGVhZGVyQ2xhc3MgKyBfX2NvbnRhaW5lckNsYXNzLnZhbHVlLFxuICAgICAgKCkgPT4geyBoYXNWaXJ0U2Nyb2xsLnZhbHVlID09PSB0cnVlICYmIHZpcnRTY3JvbGxSZWYudmFsdWUgIT09IG51bGwgJiYgdmlydFNjcm9sbFJlZi52YWx1ZS5yZXNldCgpIH1cbiAgICApXG5cbiAgICBjb25zdCB7XG4gICAgICBpbm5lclBhZ2luYXRpb24sXG4gICAgICBjb21wdXRlZFBhZ2luYXRpb24sXG4gICAgICBpc1NlcnZlclNpZGUsXG5cbiAgICAgIHJlcXVlc3RTZXJ2ZXJJbnRlcmFjdGlvbixcbiAgICAgIHNldFBhZ2luYXRpb25cbiAgICB9ID0gdXNlVGFibGVQYWdpbmF0aW9uU3RhdGUodm0sIGdldENlbGxWYWx1ZSlcblxuICAgIGNvbnN0IHsgY29tcHV0ZWRGaWx0ZXJNZXRob2QgfSA9IHVzZVRhYmxlRmlsdGVyKHByb3BzLCBzZXRQYWdpbmF0aW9uKVxuICAgIGNvbnN0IHsgaXNSb3dFeHBhbmRlZCwgc2V0RXhwYW5kZWQsIHVwZGF0ZUV4cGFuZGVkIH0gPSB1c2VUYWJsZVJvd0V4cGFuZChwcm9wcywgZW1pdClcblxuICAgIGNvbnN0IGZpbHRlcmVkU29ydGVkUm93cyA9IGNvbXB1dGVkKCgpID0+IHtcbiAgICAgIGxldCByb3dzID0gcHJvcHMucm93c1xuXG4gICAgICBpZiAoaXNTZXJ2ZXJTaWRlLnZhbHVlID09PSB0cnVlIHx8IHJvd3MubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIHJldHVybiByb3dzXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHsgc29ydEJ5LCBkZXNjZW5kaW5nIH0gPSBjb21wdXRlZFBhZ2luYXRpb24udmFsdWVcblxuICAgICAgaWYgKHByb3BzLmZpbHRlcikge1xuICAgICAgICByb3dzID0gY29tcHV0ZWRGaWx0ZXJNZXRob2QudmFsdWUocm93cywgcHJvcHMuZmlsdGVyLCBjb21wdXRlZENvbHMudmFsdWUsIGdldENlbGxWYWx1ZSlcbiAgICAgIH1cblxuICAgICAgaWYgKGNvbHVtblRvU29ydC52YWx1ZSAhPT0gbnVsbCkge1xuICAgICAgICByb3dzID0gY29tcHV0ZWRTb3J0TWV0aG9kLnZhbHVlKFxuICAgICAgICAgIHByb3BzLnJvd3MgPT09IHJvd3MgPyByb3dzLnNsaWNlKCkgOiByb3dzLFxuICAgICAgICAgIHNvcnRCeSxcbiAgICAgICAgICBkZXNjZW5kaW5nXG4gICAgICAgIClcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHJvd3NcbiAgICB9KVxuXG4gICAgY29uc3QgZmlsdGVyZWRTb3J0ZWRSb3dzTnVtYmVyID0gY29tcHV0ZWQoKCkgPT4gZmlsdGVyZWRTb3J0ZWRSb3dzLnZhbHVlLmxlbmd0aClcblxuICAgIGNvbnN0IGNvbXB1dGVkUm93cyA9IGNvbXB1dGVkKCgpID0+IHtcbiAgICAgIGxldCByb3dzID0gZmlsdGVyZWRTb3J0ZWRSb3dzLnZhbHVlXG5cbiAgICAgIGlmIChpc1NlcnZlclNpZGUudmFsdWUgPT09IHRydWUpIHtcbiAgICAgICAgcmV0dXJuIHJvd3NcbiAgICAgIH1cblxuICAgICAgY29uc3QgeyByb3dzUGVyUGFnZSB9ID0gY29tcHV0ZWRQYWdpbmF0aW9uLnZhbHVlXG5cbiAgICAgIGlmIChyb3dzUGVyUGFnZSAhPT0gMCkge1xuICAgICAgICBpZiAoZmlyc3RSb3dJbmRleC52YWx1ZSA9PT0gMCAmJiBwcm9wcy5yb3dzICE9PSByb3dzKSB7XG4gICAgICAgICAgaWYgKHJvd3MubGVuZ3RoID4gbGFzdFJvd0luZGV4LnZhbHVlKSB7XG4gICAgICAgICAgICByb3dzID0gcm93cy5zbGljZSgwLCBsYXN0Um93SW5kZXgudmFsdWUpXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgIHJvd3MgPSByb3dzLnNsaWNlKGZpcnN0Um93SW5kZXgudmFsdWUsIGxhc3RSb3dJbmRleC52YWx1ZSlcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gcm93c1xuICAgIH0pXG5cbiAgICBjb25zdCB7XG4gICAgICBoYXNTZWxlY3Rpb25Nb2RlLFxuICAgICAgc2luZ2xlU2VsZWN0aW9uLFxuICAgICAgbXVsdGlwbGVTZWxlY3Rpb24sXG4gICAgICBhbGxSb3dzU2VsZWN0ZWQsXG4gICAgICBzb21lUm93c1NlbGVjdGVkLFxuICAgICAgcm93c1NlbGVjdGVkTnVtYmVyLFxuXG4gICAgICBpc1Jvd1NlbGVjdGVkLFxuICAgICAgY2xlYXJTZWxlY3Rpb24sXG4gICAgICB1cGRhdGVTZWxlY3Rpb25cbiAgICB9ID0gdXNlVGFibGVSb3dTZWxlY3Rpb24ocHJvcHMsIGVtaXQsIGNvbXB1dGVkUm93cywgZ2V0Um93S2V5KVxuXG4gICAgY29uc3QgeyBjb2xMaXN0LCBjb21wdXRlZENvbHMsIGNvbXB1dGVkQ29sc01hcCwgY29tcHV0ZWRDb2xzcGFuIH0gPSB1c2VUYWJsZUNvbHVtblNlbGVjdGlvbihwcm9wcywgY29tcHV0ZWRQYWdpbmF0aW9uLCBoYXNTZWxlY3Rpb25Nb2RlKVxuXG4gICAgY29uc3QgeyBjb2x1bW5Ub1NvcnQsIGNvbXB1dGVkU29ydE1ldGhvZCwgc29ydCB9ID0gdXNlVGFibGVTb3J0KHByb3BzLCBjb21wdXRlZFBhZ2luYXRpb24sIGNvbExpc3QsIHNldFBhZ2luYXRpb24pXG5cbiAgICBjb25zdCB7XG4gICAgICBmaXJzdFJvd0luZGV4LFxuICAgICAgbGFzdFJvd0luZGV4LFxuICAgICAgaXNGaXJzdFBhZ2UsXG4gICAgICBpc0xhc3RQYWdlLFxuICAgICAgcGFnZXNOdW1iZXIsXG4gICAgICBjb21wdXRlZFJvd3NQZXJQYWdlT3B0aW9ucyxcbiAgICAgIGNvbXB1dGVkUm93c051bWJlcixcblxuICAgICAgZmlyc3RQYWdlLFxuICAgICAgcHJldlBhZ2UsXG4gICAgICBuZXh0UGFnZSxcbiAgICAgIGxhc3RQYWdlXG4gICAgfSA9IHVzZVRhYmxlUGFnaW5hdGlvbih2bSwgaW5uZXJQYWdpbmF0aW9uLCBjb21wdXRlZFBhZ2luYXRpb24sIGlzU2VydmVyU2lkZSwgc2V0UGFnaW5hdGlvbiwgZmlsdGVyZWRTb3J0ZWRSb3dzTnVtYmVyKVxuXG4gICAgY29uc3Qgbm90aGluZ1RvRGlzcGxheSA9IGNvbXB1dGVkKCgpID0+IGNvbXB1dGVkUm93cy52YWx1ZS5sZW5ndGggPT09IDApXG5cbiAgICBjb25zdCB2aXJ0UHJvcHMgPSBjb21wdXRlZCgoKSA9PiB7XG4gICAgICBjb25zdCBhY2MgPSB7fVxuXG4gICAgICBjb21tb25WaXJ0UHJvcHNMaXN0XG4gICAgICAgIC5mb3JFYWNoKHAgPT4geyBhY2NbIHAgXSA9IHByb3BzWyBwIF0gfSlcblxuICAgICAgaWYgKGFjYy52aXJ0dWFsU2Nyb2xsSXRlbVNpemUgPT09IHZvaWQgMCkge1xuICAgICAgICBhY2MudmlydHVhbFNjcm9sbEl0ZW1TaXplID0gcHJvcHMuZGVuc2UgPT09IHRydWUgPyAyOCA6IDQ4XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBhY2NcbiAgICB9KVxuXG4gICAgZnVuY3Rpb24gcmVzZXRWaXJ0dWFsU2Nyb2xsICgpIHtcbiAgICAgIGhhc1ZpcnRTY3JvbGwudmFsdWUgPT09IHRydWUgJiYgdmlydFNjcm9sbFJlZi52YWx1ZS5yZXNldCgpXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0Qm9keSAoKSB7XG4gICAgICBpZiAocHJvcHMuZ3JpZCA9PT0gdHJ1ZSkge1xuICAgICAgICByZXR1cm4gZ2V0R3JpZEJvZHkoKVxuICAgICAgfVxuXG4gICAgICBjb25zdCBoZWFkZXIgPSBwcm9wcy5oaWRlSGVhZGVyICE9PSB0cnVlID8gZ2V0VEhlYWQgOiBudWxsXG5cbiAgICAgIGlmIChoYXNWaXJ0U2Nyb2xsLnZhbHVlID09PSB0cnVlKSB7XG4gICAgICAgIGNvbnN0IHRvcFJvdyA9IHNsb3RzWyAndG9wLXJvdycgXVxuICAgICAgICBjb25zdCBib3R0b21Sb3cgPSBzbG90c1sgJ2JvdHRvbS1yb3cnIF1cblxuICAgICAgICBjb25zdCB2aXJ0U2xvdHMgPSB7XG4gICAgICAgICAgZGVmYXVsdDogcHJvcHMgPT4gZ2V0VEJvZHlUUihwcm9wcy5pdGVtLCBzbG90cy5ib2R5LCBwcm9wcy5pbmRleClcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0b3BSb3cgIT09IHZvaWQgMCkge1xuICAgICAgICAgIGNvbnN0IHRvcENvbnRlbnQgPSBoKCd0Ym9keScsIHRvcFJvdyh7IGNvbHM6IGNvbXB1dGVkQ29scy52YWx1ZSB9KSlcblxuICAgICAgICAgIHZpcnRTbG90cy5iZWZvcmUgPSBoZWFkZXIgPT09IG51bGxcbiAgICAgICAgICAgID8gKCkgPT4gdG9wQ29udGVudFxuICAgICAgICAgICAgOiAoKSA9PiBbIGhlYWRlcigpIF0uY29uY2F0KHRvcENvbnRlbnQpXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoaGVhZGVyICE9PSBudWxsKSB7XG4gICAgICAgICAgdmlydFNsb3RzLmJlZm9yZSA9IGhlYWRlclxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGJvdHRvbVJvdyAhPT0gdm9pZCAwKSB7XG4gICAgICAgICAgdmlydFNsb3RzLmFmdGVyID0gKCkgPT4gaCgndGJvZHknLCBib3R0b21Sb3coeyBjb2xzOiBjb21wdXRlZENvbHMudmFsdWUgfSkpXG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gaChRVmlydHVhbFNjcm9sbCwge1xuICAgICAgICAgIHJlZjogdmlydFNjcm9sbFJlZixcbiAgICAgICAgICBjbGFzczogcHJvcHMudGFibGVDbGFzcyxcbiAgICAgICAgICBzdHlsZTogcHJvcHMudGFibGVTdHlsZSxcbiAgICAgICAgICAuLi52aXJ0UHJvcHMudmFsdWUsXG4gICAgICAgICAgc2Nyb2xsVGFyZ2V0OiBwcm9wcy52aXJ0dWFsU2Nyb2xsVGFyZ2V0LFxuICAgICAgICAgIGl0ZW1zOiBjb21wdXRlZFJvd3MudmFsdWUsXG4gICAgICAgICAgdHlwZTogJ19fcXRhYmxlJyxcbiAgICAgICAgICB0YWJsZUNvbHNwYW46IGNvbXB1dGVkQ29sc3Bhbi52YWx1ZSxcbiAgICAgICAgICBvblZpcnR1YWxTY3JvbGw6IG9uVlNjcm9sbFxuICAgICAgICB9LCB2aXJ0U2xvdHMpXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGNoaWxkID0gW1xuICAgICAgICBnZXRUQm9keSgpXG4gICAgICBdXG5cbiAgICAgIGlmIChoZWFkZXIgIT09IG51bGwpIHtcbiAgICAgICAgY2hpbGQudW5zaGlmdChoZWFkZXIoKSlcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGdldFRhYmxlTWlkZGxlKHtcbiAgICAgICAgY2xhc3M6IFsgJ3EtdGFibGVfX21pZGRsZSBzY3JvbGwnLCBwcm9wcy50YWJsZUNsYXNzIF0sXG4gICAgICAgIHN0eWxlOiBwcm9wcy50YWJsZVN0eWxlXG4gICAgICB9LCBjaGlsZClcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzY3JvbGxUbyAodG9JbmRleCwgZWRnZSkge1xuICAgICAgaWYgKHZpcnRTY3JvbGxSZWYudmFsdWUgIT09IG51bGwpIHtcbiAgICAgICAgdmlydFNjcm9sbFJlZi52YWx1ZS5zY3JvbGxUbyh0b0luZGV4LCBlZGdlKVxuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgdG9JbmRleCA9IHBhcnNlSW50KHRvSW5kZXgsIDEwKVxuICAgICAgY29uc3Qgcm93RWwgPSByb290UmVmLnZhbHVlLnF1ZXJ5U2VsZWN0b3IoYHRib2R5IHRyOm50aC1vZi10eXBlKCR7IHRvSW5kZXggKyAxIH0pYClcblxuICAgICAgaWYgKHJvd0VsICE9PSBudWxsKSB7XG4gICAgICAgIGNvbnN0IHNjcm9sbFRhcmdldCA9IHJvb3RSZWYudmFsdWUucXVlcnlTZWxlY3RvcignLnEtdGFibGVfX21pZGRsZS5zY3JvbGwnKVxuICAgICAgICBjb25zdCBvZmZzZXRUb3AgPSByb3dFbC5vZmZzZXRUb3AgLSBwcm9wcy52aXJ0dWFsU2Nyb2xsU3RpY2t5U2l6ZVN0YXJ0XG4gICAgICAgIGNvbnN0IGRpcmVjdGlvbiA9IG9mZnNldFRvcCA8IHNjcm9sbFRhcmdldC5zY3JvbGxUb3AgPyAnZGVjcmVhc2UnIDogJ2luY3JlYXNlJ1xuXG4gICAgICAgIHNjcm9sbFRhcmdldC5zY3JvbGxUb3AgPSBvZmZzZXRUb3BcblxuICAgICAgICBlbWl0KCd2aXJ0dWFsU2Nyb2xsJywge1xuICAgICAgICAgIGluZGV4OiB0b0luZGV4LFxuICAgICAgICAgIGZyb206IDAsXG4gICAgICAgICAgdG86IGlubmVyUGFnaW5hdGlvbi52YWx1ZS5yb3dzUGVyUGFnZSAtIDEsXG4gICAgICAgICAgZGlyZWN0aW9uXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gb25WU2Nyb2xsIChpbmZvKSB7XG4gICAgICBlbWl0KCd2aXJ0dWFsU2Nyb2xsJywgaW5mbylcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXRQcm9ncmVzcyAoKSB7XG4gICAgICByZXR1cm4gW1xuICAgICAgICBoKFFMaW5lYXJQcm9ncmVzcywge1xuICAgICAgICAgIGNsYXNzOiAncS10YWJsZV9fbGluZWFyLXByb2dyZXNzJyxcbiAgICAgICAgICBjb2xvcjogcHJvcHMuY29sb3IsXG4gICAgICAgICAgZGFyazogaXNEYXJrLnZhbHVlLFxuICAgICAgICAgIGluZGV0ZXJtaW5hdGU6IHRydWUsXG4gICAgICAgICAgdHJhY2tDb2xvcjogJ3RyYW5zcGFyZW50J1xuICAgICAgICB9KVxuICAgICAgXVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdldFRCb2R5VFIgKHJvdywgYm9keVNsb3QsIHBhZ2VJbmRleCkge1xuICAgICAgY29uc3RcbiAgICAgICAga2V5ID0gZ2V0Um93S2V5LnZhbHVlKHJvdyksXG4gICAgICAgIHNlbGVjdGVkID0gaXNSb3dTZWxlY3RlZChrZXkpXG5cbiAgICAgIGlmIChib2R5U2xvdCAhPT0gdm9pZCAwKSB7XG4gICAgICAgIHJldHVybiBib2R5U2xvdChcbiAgICAgICAgICBnZXRCb2R5U2NvcGUoe1xuICAgICAgICAgICAga2V5LFxuICAgICAgICAgICAgcm93LFxuICAgICAgICAgICAgcGFnZUluZGV4LFxuICAgICAgICAgICAgX190ckNsYXNzOiBzZWxlY3RlZCA/ICdzZWxlY3RlZCcgOiAnJ1xuICAgICAgICAgIH0pXG4gICAgICAgIClcbiAgICAgIH1cblxuICAgICAgY29uc3RcbiAgICAgICAgYm9keUNlbGwgPSBzbG90c1sgJ2JvZHktY2VsbCcgXSxcbiAgICAgICAgY2hpbGQgPSBjb21wdXRlZENvbHMudmFsdWUubWFwKGNvbCA9PiB7XG4gICAgICAgICAgY29uc3RcbiAgICAgICAgICAgIGJvZHlDZWxsQ29sID0gc2xvdHNbIGBib2R5LWNlbGwtJHsgY29sLm5hbWUgfWAgXSxcbiAgICAgICAgICAgIHNsb3QgPSBib2R5Q2VsbENvbCAhPT0gdm9pZCAwID8gYm9keUNlbGxDb2wgOiBib2R5Q2VsbFxuXG4gICAgICAgICAgcmV0dXJuIHNsb3QgIT09IHZvaWQgMFxuICAgICAgICAgICAgPyBzbG90KGdldEJvZHlDZWxsU2NvcGUoeyBrZXksIHJvdywgcGFnZUluZGV4LCBjb2wgfSkpXG4gICAgICAgICAgICA6IGgoJ3RkJywge1xuICAgICAgICAgICAgICBjbGFzczogY29sLl9fdGRDbGFzcyhyb3cpLFxuICAgICAgICAgICAgICBzdHlsZTogY29sLl9fdGRTdHlsZShyb3cpXG4gICAgICAgICAgICB9LCBnZXRDZWxsVmFsdWUoY29sLCByb3cpKVxuICAgICAgICB9KVxuXG4gICAgICBpZiAoaGFzU2VsZWN0aW9uTW9kZS52YWx1ZSA9PT0gdHJ1ZSkge1xuICAgICAgICBjb25zdCBzbG90ID0gc2xvdHNbICdib2R5LXNlbGVjdGlvbicgXVxuICAgICAgICBjb25zdCBjb250ZW50ID0gc2xvdCAhPT0gdm9pZCAwXG4gICAgICAgICAgPyBzbG90KGdldEJvZHlTZWxlY3Rpb25TY29wZSh7IGtleSwgcm93LCBwYWdlSW5kZXggfSkpXG4gICAgICAgICAgOiBbXG4gICAgICAgICAgICAgIGgoUUNoZWNrYm94LCB7XG4gICAgICAgICAgICAgICAgbW9kZWxWYWx1ZTogc2VsZWN0ZWQsXG4gICAgICAgICAgICAgICAgY29sb3I6IHByb3BzLmNvbG9yLFxuICAgICAgICAgICAgICAgIGRhcms6IGlzRGFyay52YWx1ZSxcbiAgICAgICAgICAgICAgICBkZW5zZTogcHJvcHMuZGVuc2UsXG4gICAgICAgICAgICAgICAgJ29uVXBkYXRlOm1vZGVsVmFsdWUnOiAoYWRkaW5nLCBldnQpID0+IHtcbiAgICAgICAgICAgICAgICAgIHVwZGF0ZVNlbGVjdGlvbihbIGtleSBdLCBbIHJvdyBdLCBhZGRpbmcsIGV2dClcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBdXG5cbiAgICAgICAgY2hpbGQudW5zaGlmdChcbiAgICAgICAgICBoKCd0ZCcsIHsgY2xhc3M6ICdxLXRhYmxlLS1jb2wtYXV0by13aWR0aCcgfSwgY29udGVudClcbiAgICAgICAgKVxuICAgICAgfVxuXG4gICAgICBjb25zdCBkYXRhID0geyBrZXksIGNsYXNzOiB7IHNlbGVjdGVkIH0gfVxuXG4gICAgICBpZiAocHJvcHMub25Sb3dDbGljayAhPT0gdm9pZCAwKSB7XG4gICAgICAgIGRhdGEuY2xhc3NbICdjdXJzb3ItcG9pbnRlcicgXSA9IHRydWVcbiAgICAgICAgZGF0YS5vbkNsaWNrID0gZXZ0ID0+IHtcbiAgICAgICAgICBlbWl0KCdSb3dDbGljaycsIGV2dCwgcm93LCBwYWdlSW5kZXgpXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHByb3BzLm9uUm93RGJsY2xpY2sgIT09IHZvaWQgMCkge1xuICAgICAgICBkYXRhLmNsYXNzWyAnY3Vyc29yLXBvaW50ZXInIF0gPSB0cnVlXG4gICAgICAgIGRhdGEub25EYmxjbGljayA9IGV2dCA9PiB7XG4gICAgICAgICAgZW1pdCgnUm93RGJsY2xpY2snLCBldnQsIHJvdywgcGFnZUluZGV4KVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChwcm9wcy5vblJvd0NvbnRleHRtZW51ICE9PSB2b2lkIDApIHtcbiAgICAgICAgZGF0YS5jbGFzc1sgJ2N1cnNvci1wb2ludGVyJyBdID0gdHJ1ZVxuICAgICAgICBkYXRhLm9uQ29udGV4dG1lbnUgPSBldnQgPT4ge1xuICAgICAgICAgIGVtaXQoJ1Jvd0NvbnRleHRtZW51JywgZXZ0LCByb3csIHBhZ2VJbmRleClcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gaCgndHInLCBkYXRhLCBjaGlsZClcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXRUQm9keSAoKSB7XG4gICAgICBjb25zdFxuICAgICAgICBib2R5ID0gc2xvdHMuYm9keSxcbiAgICAgICAgdG9wUm93ID0gc2xvdHNbICd0b3Atcm93JyBdLFxuICAgICAgICBib3R0b21Sb3cgPSBzbG90c1sgJ2JvdHRvbS1yb3cnIF1cblxuICAgICAgbGV0IGNoaWxkID0gY29tcHV0ZWRSb3dzLnZhbHVlLm1hcChcbiAgICAgICAgKHJvdywgcGFnZUluZGV4KSA9PiBnZXRUQm9keVRSKHJvdywgYm9keSwgcGFnZUluZGV4KVxuICAgICAgKVxuXG4gICAgICBpZiAodG9wUm93ICE9PSB2b2lkIDApIHtcbiAgICAgICAgY2hpbGQgPSB0b3BSb3coeyBjb2xzOiBjb21wdXRlZENvbHMudmFsdWUgfSkuY29uY2F0KGNoaWxkKVxuICAgICAgfVxuICAgICAgaWYgKGJvdHRvbVJvdyAhPT0gdm9pZCAwKSB7XG4gICAgICAgIGNoaWxkID0gY2hpbGQuY29uY2F0KGJvdHRvbVJvdyh7IGNvbHM6IGNvbXB1dGVkQ29scy52YWx1ZSB9KSlcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGgoJ3Rib2R5JywgY2hpbGQpXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0Qm9keVNjb3BlIChkYXRhKSB7XG4gICAgICBpbmplY3RCb2R5Q29tbW9uU2NvcGUoZGF0YSlcblxuICAgICAgZGF0YS5jb2xzID0gZGF0YS5jb2xzLm1hcChcbiAgICAgICAgY29sID0+IGluamVjdFByb3AoeyAuLi5jb2wgfSwgJ3ZhbHVlJywgKCkgPT4gZ2V0Q2VsbFZhbHVlKGNvbCwgZGF0YS5yb3cpKVxuICAgICAgKVxuXG4gICAgICByZXR1cm4gZGF0YVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdldEJvZHlDZWxsU2NvcGUgKGRhdGEpIHtcbiAgICAgIGluamVjdEJvZHlDb21tb25TY29wZShkYXRhKVxuICAgICAgaW5qZWN0UHJvcChkYXRhLCAndmFsdWUnLCAoKSA9PiBnZXRDZWxsVmFsdWUoZGF0YS5jb2wsIGRhdGEucm93KSlcbiAgICAgIHJldHVybiBkYXRhXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0Qm9keVNlbGVjdGlvblNjb3BlIChkYXRhKSB7XG4gICAgICBpbmplY3RCb2R5Q29tbW9uU2NvcGUoZGF0YSlcbiAgICAgIHJldHVybiBkYXRhXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaW5qZWN0Qm9keUNvbW1vblNjb3BlIChkYXRhKSB7XG4gICAgICBPYmplY3QuYXNzaWduKGRhdGEsIHtcbiAgICAgICAgY29sczogY29tcHV0ZWRDb2xzLnZhbHVlLFxuICAgICAgICBjb2xzTWFwOiBjb21wdXRlZENvbHNNYXAudmFsdWUsXG4gICAgICAgIHNvcnQsXG4gICAgICAgIHJvd0luZGV4OiBmaXJzdFJvd0luZGV4LnZhbHVlICsgZGF0YS5wYWdlSW5kZXgsXG4gICAgICAgIGNvbG9yOiBwcm9wcy5jb2xvcixcbiAgICAgICAgZGFyazogaXNEYXJrLnZhbHVlLFxuICAgICAgICBkZW5zZTogcHJvcHMuZGVuc2VcbiAgICAgIH0pXG5cbiAgICAgIGhhc1NlbGVjdGlvbk1vZGUudmFsdWUgPT09IHRydWUgJiYgaW5qZWN0UHJvcChcbiAgICAgICAgZGF0YSxcbiAgICAgICAgJ3NlbGVjdGVkJyxcbiAgICAgICAgKCkgPT4gaXNSb3dTZWxlY3RlZChkYXRhLmtleSksXG4gICAgICAgIChhZGRpbmcsIGV2dCkgPT4ge1xuICAgICAgICAgIHVwZGF0ZVNlbGVjdGlvbihbIGRhdGEua2V5IF0sIFsgZGF0YS5yb3cgXSwgYWRkaW5nLCBldnQpXG4gICAgICAgIH1cbiAgICAgIClcblxuICAgICAgaW5qZWN0UHJvcChcbiAgICAgICAgZGF0YSxcbiAgICAgICAgJ2V4cGFuZCcsXG4gICAgICAgICgpID0+IGlzUm93RXhwYW5kZWQoZGF0YS5rZXkpLFxuICAgICAgICBhZGRpbmcgPT4geyB1cGRhdGVFeHBhbmRlZChkYXRhLmtleSwgYWRkaW5nKSB9XG4gICAgICApXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0Q2VsbFZhbHVlIChjb2wsIHJvdykge1xuICAgICAgY29uc3QgdmFsID0gdHlwZW9mIGNvbC5maWVsZCA9PT0gJ2Z1bmN0aW9uJyA/IGNvbC5maWVsZChyb3cpIDogcm93WyBjb2wuZmllbGQgXVxuICAgICAgcmV0dXJuIGNvbC5mb3JtYXQgIT09IHZvaWQgMCA/IGNvbC5mb3JtYXQodmFsLCByb3cpIDogdmFsXG4gICAgfVxuXG4gICAgY29uc3QgbWFyZ2luYWxzU2NvcGUgPSBjb21wdXRlZCgoKSA9PiAoe1xuICAgICAgcGFnaW5hdGlvbjogY29tcHV0ZWRQYWdpbmF0aW9uLnZhbHVlLFxuICAgICAgcGFnZXNOdW1iZXI6IHBhZ2VzTnVtYmVyLnZhbHVlLFxuICAgICAgaXNGaXJzdFBhZ2U6IGlzRmlyc3RQYWdlLnZhbHVlLFxuICAgICAgaXNMYXN0UGFnZTogaXNMYXN0UGFnZS52YWx1ZSxcbiAgICAgIGZpcnN0UGFnZSxcbiAgICAgIHByZXZQYWdlLFxuICAgICAgbmV4dFBhZ2UsXG4gICAgICBsYXN0UGFnZSxcblxuICAgICAgaW5GdWxsc2NyZWVuOiBpbkZ1bGxzY3JlZW4udmFsdWUsXG4gICAgICB0b2dnbGVGdWxsc2NyZWVuXG4gICAgfSkpXG5cbiAgICBmdW5jdGlvbiBnZXRUb3BEaXYgKCkge1xuICAgICAgY29uc3RcbiAgICAgICAgdG9wID0gc2xvdHMudG9wLFxuICAgICAgICB0b3BMZWZ0ID0gc2xvdHNbICd0b3AtbGVmdCcgXSxcbiAgICAgICAgdG9wUmlnaHQgPSBzbG90c1sgJ3RvcC1yaWdodCcgXSxcbiAgICAgICAgdG9wU2VsZWN0aW9uID0gc2xvdHNbICd0b3Atc2VsZWN0aW9uJyBdLFxuICAgICAgICBoYXNTZWxlY3Rpb24gPSBoYXNTZWxlY3Rpb25Nb2RlLnZhbHVlID09PSB0cnVlXG4gICAgICAgICAgJiYgdG9wU2VsZWN0aW9uICE9PSB2b2lkIDBcbiAgICAgICAgICAmJiByb3dzU2VsZWN0ZWROdW1iZXIudmFsdWUgPiAwLFxuICAgICAgICB0b3BDbGFzcyA9ICdxLXRhYmxlX190b3AgcmVsYXRpdmUtcG9zaXRpb24gcm93IGl0ZW1zLWNlbnRlcidcblxuICAgICAgaWYgKHRvcCAhPT0gdm9pZCAwKSB7XG4gICAgICAgIHJldHVybiBoKCdkaXYnLCB7IGNsYXNzOiB0b3BDbGFzcyB9LCBbIHRvcChtYXJnaW5hbHNTY29wZS52YWx1ZSkgXSlcbiAgICAgIH1cblxuICAgICAgbGV0IGNoaWxkXG5cbiAgICAgIGlmIChoYXNTZWxlY3Rpb24gPT09IHRydWUpIHtcbiAgICAgICAgY2hpbGQgPSB0b3BTZWxlY3Rpb24obWFyZ2luYWxzU2NvcGUudmFsdWUpLnNsaWNlKClcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICBjaGlsZCA9IFtdXG5cbiAgICAgICAgaWYgKHRvcExlZnQgIT09IHZvaWQgMCkge1xuICAgICAgICAgIGNoaWxkLnB1c2goXG4gICAgICAgICAgICBoKCdkaXYnLCB7IGNsYXNzOiAncS10YWJsZV9fY29udHJvbCcgfSwgW1xuICAgICAgICAgICAgICB0b3BMZWZ0KG1hcmdpbmFsc1Njb3BlLnZhbHVlKVxuICAgICAgICAgICAgXSlcbiAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAocHJvcHMudGl0bGUpIHtcbiAgICAgICAgICBjaGlsZC5wdXNoKFxuICAgICAgICAgICAgaCgnZGl2JywgeyBjbGFzczogJ3EtdGFibGVfX2NvbnRyb2wnIH0sIFtcbiAgICAgICAgICAgICAgaCgnZGl2Jywge1xuICAgICAgICAgICAgICAgIGNsYXNzOiBbICdxLXRhYmxlX190aXRsZScsIHByb3BzLnRpdGxlQ2xhc3MgXVxuICAgICAgICAgICAgICB9LCBwcm9wcy50aXRsZSlcbiAgICAgICAgICAgIF0pXG4gICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmICh0b3BSaWdodCAhPT0gdm9pZCAwKSB7XG4gICAgICAgIGNoaWxkLnB1c2goXG4gICAgICAgICAgaCgnZGl2JywgeyBjbGFzczogJ3EtdGFibGVfX3NlcGFyYXRvciBjb2wnIH0pXG4gICAgICAgIClcbiAgICAgICAgY2hpbGQucHVzaChcbiAgICAgICAgICBoKCdkaXYnLCB7IGNsYXNzOiAncS10YWJsZV9fY29udHJvbCcgfSwgW1xuICAgICAgICAgICAgdG9wUmlnaHQobWFyZ2luYWxzU2NvcGUudmFsdWUpXG4gICAgICAgICAgXSlcbiAgICAgICAgKVxuICAgICAgfVxuXG4gICAgICBpZiAoY2hpbGQubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICByZXR1cm4gaCgnZGl2JywgeyBjbGFzczogdG9wQ2xhc3MgfSwgY2hpbGQpXG4gICAgfVxuXG4gICAgY29uc3QgaGVhZGVyU2VsZWN0ZWRWYWx1ZSA9IGNvbXB1dGVkKCgpID0+IChcbiAgICAgIHNvbWVSb3dzU2VsZWN0ZWQudmFsdWUgPT09IHRydWVcbiAgICAgICAgPyBudWxsXG4gICAgICAgIDogYWxsUm93c1NlbGVjdGVkLnZhbHVlXG4gICAgKSlcblxuICAgIGZ1bmN0aW9uIGdldFRIZWFkICgpIHtcbiAgICAgIGNvbnN0IGNoaWxkID0gZ2V0VEhlYWRUUigpXG5cbiAgICAgIGlmIChwcm9wcy5sb2FkaW5nID09PSB0cnVlICYmIHNsb3RzLmxvYWRpbmcgPT09IHZvaWQgMCkge1xuICAgICAgICBjaGlsZC5wdXNoKFxuICAgICAgICAgIGgoJ3RyJywgeyBjbGFzczogJ3EtdGFibGVfX3Byb2dyZXNzJyB9LCBbXG4gICAgICAgICAgICBoKCd0aCcsIHtcbiAgICAgICAgICAgICAgY2xhc3M6ICdyZWxhdGl2ZS1wb3NpdGlvbicsXG4gICAgICAgICAgICAgIGNvbHNwYW46IGNvbXB1dGVkQ29sc3Bhbi52YWx1ZVxuICAgICAgICAgICAgfSwgZ2V0UHJvZ3Jlc3MoKSlcbiAgICAgICAgICBdKVxuICAgICAgICApXG4gICAgICB9XG5cbiAgICAgIHJldHVybiBoKCd0aGVhZCcsIGNoaWxkKVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdldFRIZWFkVFIgKCkge1xuICAgICAgY29uc3RcbiAgICAgICAgaGVhZGVyID0gc2xvdHMuaGVhZGVyLFxuICAgICAgICBoZWFkZXJDZWxsID0gc2xvdHNbICdoZWFkZXItY2VsbCcgXVxuXG4gICAgICBpZiAoaGVhZGVyICE9PSB2b2lkIDApIHtcbiAgICAgICAgcmV0dXJuIGhlYWRlcihcbiAgICAgICAgICBnZXRIZWFkZXJTY29wZSh7IGhlYWRlcjogdHJ1ZSB9KVxuICAgICAgICApLnNsaWNlKClcbiAgICAgIH1cblxuICAgICAgY29uc3QgY2hpbGQgPSBjb21wdXRlZENvbHMudmFsdWUubWFwKGNvbCA9PiB7XG4gICAgICAgIGNvbnN0XG4gICAgICAgICAgaGVhZGVyQ2VsbENvbCA9IHNsb3RzWyBgaGVhZGVyLWNlbGwtJHsgY29sLm5hbWUgfWAgXSxcbiAgICAgICAgICBzbG90ID0gaGVhZGVyQ2VsbENvbCAhPT0gdm9pZCAwID8gaGVhZGVyQ2VsbENvbCA6IGhlYWRlckNlbGwsXG4gICAgICAgICAgcHJvcHMgPSBnZXRIZWFkZXJTY29wZSh7IGNvbCB9KVxuXG4gICAgICAgIHJldHVybiBzbG90ICE9PSB2b2lkIDBcbiAgICAgICAgICA/IHNsb3QocHJvcHMpXG4gICAgICAgICAgOiBoKFFUaCwge1xuICAgICAgICAgICAga2V5OiBjb2wubmFtZSxcbiAgICAgICAgICAgIHByb3BzXG4gICAgICAgICAgfSwgKCkgPT4gY29sLmxhYmVsKVxuICAgICAgfSlcblxuICAgICAgaWYgKHNpbmdsZVNlbGVjdGlvbi52YWx1ZSA9PT0gdHJ1ZSAmJiBwcm9wcy5ncmlkICE9PSB0cnVlKSB7XG4gICAgICAgIGNoaWxkLnVuc2hpZnQoXG4gICAgICAgICAgaCgndGgnLCB7IGNsYXNzOiAncS10YWJsZS0tY29sLWF1dG8td2lkdGgnIH0sICcgJylcbiAgICAgICAgKVxuICAgICAgfVxuICAgICAgZWxzZSBpZiAobXVsdGlwbGVTZWxlY3Rpb24udmFsdWUgPT09IHRydWUpIHtcbiAgICAgICAgY29uc3Qgc2xvdCA9IHNsb3RzWyAnaGVhZGVyLXNlbGVjdGlvbicgXVxuICAgICAgICBjb25zdCBjb250ZW50ID0gc2xvdCAhPT0gdm9pZCAwXG4gICAgICAgICAgPyBzbG90KGdldEhlYWRlclNjb3BlKHt9KSlcbiAgICAgICAgICA6IFtcbiAgICAgICAgICAgICAgaChRQ2hlY2tib3gsIHtcbiAgICAgICAgICAgICAgICBjb2xvcjogcHJvcHMuY29sb3IsXG4gICAgICAgICAgICAgICAgbW9kZWxWYWx1ZTogaGVhZGVyU2VsZWN0ZWRWYWx1ZS52YWx1ZSxcbiAgICAgICAgICAgICAgICBkYXJrOiBpc0RhcmsudmFsdWUsXG4gICAgICAgICAgICAgICAgZGVuc2U6IHByb3BzLmRlbnNlLFxuICAgICAgICAgICAgICAgICdvblVwZGF0ZTptb2RlbFZhbHVlJzogb25NdWx0aXBsZVNlbGVjdGlvblNldFxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgXVxuXG4gICAgICAgIGNoaWxkLnVuc2hpZnQoXG4gICAgICAgICAgaCgndGgnLCB7IGNsYXNzOiAncS10YWJsZS0tY29sLWF1dG8td2lkdGgnIH0sIGNvbnRlbnQpXG4gICAgICAgIClcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIFtcbiAgICAgICAgaCgndHInLCB7XG4gICAgICAgICAgY2xhc3M6IHByb3BzLnRhYmxlSGVhZGVyQ2xhc3MsXG4gICAgICAgICAgc3R5bGU6IHByb3BzLnRhYmxlSGVhZGVyU3R5bGVcbiAgICAgICAgfSwgY2hpbGQpXG4gICAgICBdXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0SGVhZGVyU2NvcGUgKGRhdGEpIHtcbiAgICAgIE9iamVjdC5hc3NpZ24oZGF0YSwge1xuICAgICAgICBjb2xzOiBjb21wdXRlZENvbHMudmFsdWUsXG4gICAgICAgIHNvcnQsXG4gICAgICAgIGNvbHNNYXA6IGNvbXB1dGVkQ29sc01hcC52YWx1ZSxcbiAgICAgICAgY29sb3I6IHByb3BzLmNvbG9yLFxuICAgICAgICBkYXJrOiBpc0RhcmsudmFsdWUsXG4gICAgICAgIGRlbnNlOiBwcm9wcy5kZW5zZVxuICAgICAgfSlcblxuICAgICAgaWYgKG11bHRpcGxlU2VsZWN0aW9uLnZhbHVlID09PSB0cnVlKSB7XG4gICAgICAgIGluamVjdFByb3AoXG4gICAgICAgICAgZGF0YSxcbiAgICAgICAgICAnc2VsZWN0ZWQnLFxuICAgICAgICAgICgpID0+IGhlYWRlclNlbGVjdGVkVmFsdWUudmFsdWUsXG4gICAgICAgICAgb25NdWx0aXBsZVNlbGVjdGlvblNldFxuICAgICAgICApXG4gICAgICB9XG5cbiAgICAgIHJldHVybiBkYXRhXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gb25NdWx0aXBsZVNlbGVjdGlvblNldCAodmFsKSB7XG4gICAgICBpZiAoc29tZVJvd3NTZWxlY3RlZC52YWx1ZSA9PT0gdHJ1ZSkge1xuICAgICAgICB2YWwgPSBmYWxzZVxuICAgICAgfVxuXG4gICAgICB1cGRhdGVTZWxlY3Rpb24oXG4gICAgICAgIGNvbXB1dGVkUm93cy52YWx1ZS5tYXAoZ2V0Um93S2V5LnZhbHVlKSxcbiAgICAgICAgY29tcHV0ZWRSb3dzLnZhbHVlLFxuICAgICAgICB2YWxcbiAgICAgIClcbiAgICB9XG5cbiAgICBjb25zdCBuYXZJY29uID0gY29tcHV0ZWQoKCkgPT4ge1xuICAgICAgY29uc3QgaWNvID0gW1xuICAgICAgICBwcm9wcy5pY29uRmlyc3RQYWdlIHx8ICRxLmljb25TZXQudGFibGUuZmlyc3RQYWdlLFxuICAgICAgICBwcm9wcy5pY29uUHJldlBhZ2UgfHwgJHEuaWNvblNldC50YWJsZS5wcmV2UGFnZSxcbiAgICAgICAgcHJvcHMuaWNvbk5leHRQYWdlIHx8ICRxLmljb25TZXQudGFibGUubmV4dFBhZ2UsXG4gICAgICAgIHByb3BzLmljb25MYXN0UGFnZSB8fCAkcS5pY29uU2V0LnRhYmxlLmxhc3RQYWdlXG4gICAgICBdXG4gICAgICByZXR1cm4gJHEubGFuZy5ydGwgPT09IHRydWUgPyBpY28ucmV2ZXJzZSgpIDogaWNvXG4gICAgfSlcblxuICAgIGZ1bmN0aW9uIGdldEJvdHRvbURpdiAoKSB7XG4gICAgICBpZiAocHJvcHMuaGlkZUJvdHRvbSA9PT0gdHJ1ZSkge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgaWYgKG5vdGhpbmdUb0Rpc3BsYXkudmFsdWUgPT09IHRydWUpIHtcbiAgICAgICAgaWYgKHByb3BzLmhpZGVOb0RhdGEgPT09IHRydWUpIHtcbiAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IG1lc3NhZ2UgPSBwcm9wcy5sb2FkaW5nID09PSB0cnVlXG4gICAgICAgICAgPyBwcm9wcy5sb2FkaW5nTGFiZWwgfHwgJHEubGFuZy50YWJsZS5sb2FkaW5nXG4gICAgICAgICAgOiAocHJvcHMuZmlsdGVyID8gcHJvcHMubm9SZXN1bHRzTGFiZWwgfHwgJHEubGFuZy50YWJsZS5ub1Jlc3VsdHMgOiBwcm9wcy5ub0RhdGFMYWJlbCB8fCAkcS5sYW5nLnRhYmxlLm5vRGF0YSlcblxuICAgICAgICBjb25zdCBub0RhdGEgPSBzbG90c1sgJ25vLWRhdGEnIF1cbiAgICAgICAgY29uc3QgY2hpbGRyZW4gPSBub0RhdGEgIT09IHZvaWQgMFxuICAgICAgICAgID8gWyBub0RhdGEoeyBtZXNzYWdlLCBpY29uOiAkcS5pY29uU2V0LnRhYmxlLndhcm5pbmcsIGZpbHRlcjogcHJvcHMuZmlsdGVyIH0pIF1cbiAgICAgICAgICA6IFtcbiAgICAgICAgICAgICAgaChRSWNvbiwge1xuICAgICAgICAgICAgICAgIGNsYXNzOiAncS10YWJsZV9fYm90dG9tLW5vZGF0YS1pY29uJyxcbiAgICAgICAgICAgICAgICBuYW1lOiAkcS5pY29uU2V0LnRhYmxlLndhcm5pbmdcbiAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgIG1lc3NhZ2VcbiAgICAgICAgICAgIF1cblxuICAgICAgICByZXR1cm4gaCgnZGl2JywgeyBjbGFzczogYm90dG9tQ2xhc3MgKyAnIHEtdGFibGVfX2JvdHRvbS0tbm9kYXRhJyB9LCBjaGlsZHJlbilcbiAgICAgIH1cblxuICAgICAgY29uc3QgYm90dG9tID0gc2xvdHMuYm90dG9tXG5cbiAgICAgIGlmIChib3R0b20gIT09IHZvaWQgMCkge1xuICAgICAgICByZXR1cm4gaCgnZGl2JywgeyBjbGFzczogYm90dG9tQ2xhc3MgfSwgWyBib3R0b20obWFyZ2luYWxzU2NvcGUudmFsdWUpIF0pXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGNoaWxkID0gcHJvcHMuaGlkZVNlbGVjdGVkQmFubmVyICE9PSB0cnVlICYmIGhhc1NlbGVjdGlvbk1vZGUudmFsdWUgPT09IHRydWUgJiYgcm93c1NlbGVjdGVkTnVtYmVyLnZhbHVlID4gMFxuICAgICAgICA/IFtcbiAgICAgICAgICAgIGgoJ2RpdicsIHsgY2xhc3M6ICdxLXRhYmxlX19jb250cm9sJyB9LCBbXG4gICAgICAgICAgICAgIGgoJ2RpdicsIFtcbiAgICAgICAgICAgICAgICAocHJvcHMuc2VsZWN0ZWRSb3dzTGFiZWwgfHwgJHEubGFuZy50YWJsZS5zZWxlY3RlZFJlY29yZHMpKHJvd3NTZWxlY3RlZE51bWJlci52YWx1ZSlcbiAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgIF0pXG4gICAgICAgICAgXVxuICAgICAgICA6IFtdXG5cbiAgICAgIGlmIChwcm9wcy5oaWRlUGFnaW5hdGlvbiAhPT0gdHJ1ZSkge1xuICAgICAgICByZXR1cm4gaCgnZGl2Jywge1xuICAgICAgICAgIGNsYXNzOiBib3R0b21DbGFzcyArICcganVzdGlmeS1lbmQnXG4gICAgICAgIH0sIGdldFBhZ2luYXRpb25EaXYoY2hpbGQpKVxuICAgICAgfVxuXG4gICAgICBpZiAoY2hpbGQubGVuZ3RoICE9PSAwKSB7XG4gICAgICAgIHJldHVybiBoKCdkaXYnLCB7IGNsYXNzOiBib3R0b21DbGFzcyB9LCBjaGlsZClcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBvblBhZ1NlbGVjdGlvbiAocGFnKSB7XG4gICAgICBzZXRQYWdpbmF0aW9uKHtcbiAgICAgICAgcGFnZTogMSxcbiAgICAgICAgcm93c1BlclBhZ2U6IHBhZy52YWx1ZVxuICAgICAgfSlcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXRQYWdpbmF0aW9uRGl2IChjaGlsZCkge1xuICAgICAgbGV0IGNvbnRyb2xcbiAgICAgIGNvbnN0XG4gICAgICAgIHsgcm93c1BlclBhZ2UgfSA9IGNvbXB1dGVkUGFnaW5hdGlvbi52YWx1ZSxcbiAgICAgICAgcGFnaW5hdGlvbkxhYmVsID0gcHJvcHMucGFnaW5hdGlvbkxhYmVsIHx8ICRxLmxhbmcudGFibGUucGFnaW5hdGlvbixcbiAgICAgICAgcGFnaW5hdGlvblNsb3QgPSBzbG90cy5wYWdpbmF0aW9uLFxuICAgICAgICBoYXNPcHRzID0gcHJvcHMucm93c1BlclBhZ2VPcHRpb25zLmxlbmd0aCA+IDFcblxuICAgICAgY2hpbGQucHVzaChcbiAgICAgICAgaCgnZGl2JywgeyBjbGFzczogJ3EtdGFibGVfX3NlcGFyYXRvciBjb2wnIH0pXG4gICAgICApXG5cbiAgICAgIGlmIChoYXNPcHRzID09PSB0cnVlKSB7XG4gICAgICAgIGNoaWxkLnB1c2goXG4gICAgICAgICAgaCgnZGl2JywgeyBjbGFzczogJ3EtdGFibGVfX2NvbnRyb2wnIH0sIFtcbiAgICAgICAgICAgIGgoJ3NwYW4nLCB7IGNsYXNzOiAncS10YWJsZV9fYm90dG9tLWl0ZW0nIH0sIFtcbiAgICAgICAgICAgICAgcHJvcHMucm93c1BlclBhZ2VMYWJlbCB8fCAkcS5sYW5nLnRhYmxlLnJlY29yZHNQZXJQYWdlXG4gICAgICAgICAgICBdKSxcbiAgICAgICAgICAgIGgoUVNlbGVjdCwge1xuICAgICAgICAgICAgICBjbGFzczogJ3EtdGFibGVfX3NlbGVjdCBpbmxpbmUgcS10YWJsZV9fYm90dG9tLWl0ZW0nLFxuICAgICAgICAgICAgICBjb2xvcjogcHJvcHMuY29sb3IsXG4gICAgICAgICAgICAgIG1vZGVsVmFsdWU6IHJvd3NQZXJQYWdlLFxuICAgICAgICAgICAgICBvcHRpb25zOiBjb21wdXRlZFJvd3NQZXJQYWdlT3B0aW9ucy52YWx1ZSxcbiAgICAgICAgICAgICAgZGlzcGxheVZhbHVlOiByb3dzUGVyUGFnZSA9PT0gMFxuICAgICAgICAgICAgICAgID8gJHEubGFuZy50YWJsZS5hbGxSb3dzXG4gICAgICAgICAgICAgICAgOiByb3dzUGVyUGFnZSxcbiAgICAgICAgICAgICAgZGFyazogaXNEYXJrLnZhbHVlLFxuICAgICAgICAgICAgICBib3JkZXJsZXNzOiB0cnVlLFxuICAgICAgICAgICAgICBkZW5zZTogdHJ1ZSxcbiAgICAgICAgICAgICAgb3B0aW9uc0RlbnNlOiB0cnVlLFxuICAgICAgICAgICAgICBvcHRpb25zQ292ZXI6IHRydWUsXG4gICAgICAgICAgICAgICdvblVwZGF0ZTptb2RlbFZhbHVlJzogb25QYWdTZWxlY3Rpb25cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgXSlcbiAgICAgICAgKVxuICAgICAgfVxuXG4gICAgICBpZiAocGFnaW5hdGlvblNsb3QgIT09IHZvaWQgMCkge1xuICAgICAgICBjb250cm9sID0gcGFnaW5hdGlvblNsb3QobWFyZ2luYWxzU2NvcGUudmFsdWUpXG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgY29udHJvbCA9IFtcbiAgICAgICAgICBoKCdzcGFuJywgcm93c1BlclBhZ2UgIT09IDAgPyB7IGNsYXNzOiAncS10YWJsZV9fYm90dG9tLWl0ZW0nIH0gOiB7fSwgW1xuICAgICAgICAgICAgcm93c1BlclBhZ2VcbiAgICAgICAgICAgICAgPyBwYWdpbmF0aW9uTGFiZWwoZmlyc3RSb3dJbmRleC52YWx1ZSArIDEsIE1hdGgubWluKGxhc3RSb3dJbmRleC52YWx1ZSwgY29tcHV0ZWRSb3dzTnVtYmVyLnZhbHVlKSwgY29tcHV0ZWRSb3dzTnVtYmVyLnZhbHVlKVxuICAgICAgICAgICAgICA6IHBhZ2luYXRpb25MYWJlbCgxLCBmaWx0ZXJlZFNvcnRlZFJvd3NOdW1iZXIudmFsdWUsIGNvbXB1dGVkUm93c051bWJlci52YWx1ZSlcbiAgICAgICAgICBdKVxuICAgICAgICBdXG5cbiAgICAgICAgaWYgKHJvd3NQZXJQYWdlICE9PSAwICYmIHBhZ2VzTnVtYmVyLnZhbHVlID4gMSkge1xuICAgICAgICAgIGNvbnN0IGJ0blByb3BzID0ge1xuICAgICAgICAgICAgY29sb3I6IHByb3BzLmNvbG9yLFxuICAgICAgICAgICAgcm91bmQ6IHRydWUsXG4gICAgICAgICAgICBkZW5zZTogdHJ1ZSxcbiAgICAgICAgICAgIGZsYXQ6IHRydWVcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAocHJvcHMuZGVuc2UgPT09IHRydWUpIHtcbiAgICAgICAgICAgIGJ0blByb3BzLnNpemUgPSAnc20nXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcGFnZXNOdW1iZXIudmFsdWUgPiAyICYmIGNvbnRyb2wucHVzaChcbiAgICAgICAgICAgIGgoUUJ0biwge1xuICAgICAgICAgICAgICBrZXk6ICdwZ0ZpcnN0JyxcbiAgICAgICAgICAgICAgLi4uYnRuUHJvcHMsXG4gICAgICAgICAgICAgIGljb246IG5hdkljb24udmFsdWVbIDAgXSxcbiAgICAgICAgICAgICAgZGlzYWJsZTogaXNGaXJzdFBhZ2UudmFsdWUsXG4gICAgICAgICAgICAgIG9uQ2xpY2s6IGZpcnN0UGFnZVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICApXG5cbiAgICAgICAgICBjb250cm9sLnB1c2goXG4gICAgICAgICAgICBoKFFCdG4sIHtcbiAgICAgICAgICAgICAga2V5OiAncGdQcmV2JyxcbiAgICAgICAgICAgICAgLi4uYnRuUHJvcHMsXG4gICAgICAgICAgICAgIGljb246IG5hdkljb24udmFsdWVbIDEgXSxcbiAgICAgICAgICAgICAgZGlzYWJsZTogaXNGaXJzdFBhZ2UudmFsdWUsXG4gICAgICAgICAgICAgIG9uQ2xpY2s6IHByZXZQYWdlXG4gICAgICAgICAgICB9KSxcblxuICAgICAgICAgICAgaChRQnRuLCB7XG4gICAgICAgICAgICAgIGtleTogJ3BnTmV4dCcsXG4gICAgICAgICAgICAgIC4uLmJ0blByb3BzLFxuICAgICAgICAgICAgICBpY29uOiBuYXZJY29uLnZhbHVlWyAyIF0sXG4gICAgICAgICAgICAgIGRpc2FibGU6IGlzTGFzdFBhZ2UudmFsdWUsXG4gICAgICAgICAgICAgIG9uQ2xpY2s6IG5leHRQYWdlXG4gICAgICAgICAgICB9KVxuICAgICAgICAgIClcblxuICAgICAgICAgIHBhZ2VzTnVtYmVyLnZhbHVlID4gMiAmJiBjb250cm9sLnB1c2goXG4gICAgICAgICAgICBoKFFCdG4sIHtcbiAgICAgICAgICAgICAga2V5OiAncGdMYXN0JyxcbiAgICAgICAgICAgICAgLi4uYnRuUHJvcHMsXG4gICAgICAgICAgICAgIGljb246IG5hdkljb24udmFsdWVbIDMgXSxcbiAgICAgICAgICAgICAgZGlzYWJsZTogaXNMYXN0UGFnZS52YWx1ZSxcbiAgICAgICAgICAgICAgb25DbGljazogbGFzdFBhZ2VcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGNoaWxkLnB1c2goXG4gICAgICAgIGgoJ2RpdicsIHsgY2xhc3M6ICdxLXRhYmxlX19jb250cm9sJyB9LCBjb250cm9sKVxuICAgICAgKVxuXG4gICAgICByZXR1cm4gY2hpbGRcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXRHcmlkSGVhZGVyICgpIHtcbiAgICAgIGNvbnN0IGNoaWxkID0gcHJvcHMuZ3JpZEhlYWRlciA9PT0gdHJ1ZVxuICAgICAgICA/IFtcbiAgICAgICAgICAgIGgoJ3RhYmxlJywgeyBjbGFzczogJ3EtdGFibGUnIH0sIFtcbiAgICAgICAgICAgICAgZ2V0VEhlYWQoaClcbiAgICAgICAgICAgIF0pXG4gICAgICAgICAgXVxuICAgICAgICA6IChcbiAgICAgICAgICAgIHByb3BzLmxvYWRpbmcgPT09IHRydWUgJiYgc2xvdHMubG9hZGluZyA9PT0gdm9pZCAwXG4gICAgICAgICAgICAgID8gZ2V0UHJvZ3Jlc3MoaClcbiAgICAgICAgICAgICAgOiB2b2lkIDBcbiAgICAgICAgICApXG5cbiAgICAgIHJldHVybiBoKCdkaXYnLCB7IGNsYXNzOiAncS10YWJsZV9fbWlkZGxlJyB9LCBjaGlsZClcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXRHcmlkQm9keSAoKSB7XG4gICAgICBjb25zdCBpdGVtID0gc2xvdHMuaXRlbSAhPT0gdm9pZCAwXG4gICAgICAgID8gc2xvdHMuaXRlbVxuICAgICAgICA6IHNjb3BlID0+IHtcbiAgICAgICAgICBjb25zdCBjaGlsZCA9IHNjb3BlLmNvbHMubWFwKFxuICAgICAgICAgICAgY29sID0+IGgoJ2RpdicsIHsgY2xhc3M6ICdxLXRhYmxlX19ncmlkLWl0ZW0tcm93JyB9LCBbXG4gICAgICAgICAgICAgIGgoJ2RpdicsIHsgY2xhc3M6ICdxLXRhYmxlX19ncmlkLWl0ZW0tdGl0bGUnIH0sIFsgY29sLmxhYmVsIF0pLFxuICAgICAgICAgICAgICBoKCdkaXYnLCB7IGNsYXNzOiAncS10YWJsZV9fZ3JpZC1pdGVtLXZhbHVlJyB9LCBbIGNvbC52YWx1ZSBdKVxuICAgICAgICAgICAgXSlcbiAgICAgICAgICApXG5cbiAgICAgICAgICBpZiAoaGFzU2VsZWN0aW9uTW9kZS52YWx1ZSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgY29uc3Qgc2xvdCA9IHNsb3RzWyAnYm9keS1zZWxlY3Rpb24nIF1cbiAgICAgICAgICAgIGNvbnN0IGNvbnRlbnQgPSBzbG90ICE9PSB2b2lkIDBcbiAgICAgICAgICAgICAgPyBzbG90KHNjb3BlKVxuICAgICAgICAgICAgICA6IFtcbiAgICAgICAgICAgICAgICAgIGgoUUNoZWNrYm94LCB7XG4gICAgICAgICAgICAgICAgICAgIG1vZGVsVmFsdWU6IHNjb3BlLnNlbGVjdGVkLFxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogcHJvcHMuY29sb3IsXG4gICAgICAgICAgICAgICAgICAgIGRhcms6IGlzRGFyay52YWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgZGVuc2U6IHByb3BzLmRlbnNlLFxuICAgICAgICAgICAgICAgICAgICAnb25VcGRhdGU6bW9kZWxWYWx1ZSc6IChhZGRpbmcsIGV2dCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgIHVwZGF0ZVNlbGVjdGlvbihbIHNjb3BlLmtleSBdLCBbIHNjb3BlLnJvdyBdLCBhZGRpbmcsIGV2dClcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICBdXG5cbiAgICAgICAgICAgIGNoaWxkLnVuc2hpZnQoXG4gICAgICAgICAgICAgIGgoJ2RpdicsIHsgY2xhc3M6ICdxLXRhYmxlX19ncmlkLWl0ZW0tcm93JyB9LCBjb250ZW50KSxcbiAgICAgICAgICAgICAgaChRU2VwYXJhdG9yLCB7IGRhcms6IGlzRGFyay52YWx1ZSB9KVxuICAgICAgICAgICAgKVxuICAgICAgICAgIH1cblxuICAgICAgICAgIGNvbnN0IGRhdGEgPSB7XG4gICAgICAgICAgICBjbGFzczogW1xuICAgICAgICAgICAgICAncS10YWJsZV9fZ3JpZC1pdGVtLWNhcmQnICsgY2FyZERlZmF1bHRDbGFzcy52YWx1ZSxcbiAgICAgICAgICAgICAgcHJvcHMuY2FyZENsYXNzXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgc3R5bGU6IHByb3BzLmNhcmRTdHlsZVxuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChcbiAgICAgICAgICAgIHByb3BzLm9uUm93Q2xpY2sgIT09IHZvaWQgMFxuICAgICAgICAgICAgfHwgcHJvcHMub25Sb3dEYmxjbGljayAhPT0gdm9pZCAwXG4gICAgICAgICAgKSB7XG4gICAgICAgICAgICBkYXRhLmNsYXNzWyAwIF0gKz0gJyBjdXJzb3ItcG9pbnRlcidcblxuICAgICAgICAgICAgaWYgKHByb3BzLm9uUm93Q2xpY2sgIT09IHZvaWQgMCkge1xuICAgICAgICAgICAgICBkYXRhLm9uQ2xpY2sgPSBldnQgPT4ge1xuICAgICAgICAgICAgICAgIGVtaXQoJ1Jvd0NsaWNrJywgZXZ0LCBzY29wZS5yb3csIHNjb3BlLnBhZ2VJbmRleClcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAocHJvcHMub25Sb3dEYmxjbGljayAhPT0gdm9pZCAwKSB7XG4gICAgICAgICAgICAgIGRhdGEub25EYmxjbGljayA9IGV2dCA9PiB7XG4gICAgICAgICAgICAgICAgZW1pdCgnUm93RGJsY2xpY2snLCBldnQsIHNjb3BlLnJvdywgc2NvcGUucGFnZUluZGV4KVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIGgoJ2RpdicsIHtcbiAgICAgICAgICAgIGNsYXNzOiAncS10YWJsZV9fZ3JpZC1pdGVtIGNvbC14cy0xMiBjb2wtc20tNiBjb2wtbWQtNCBjb2wtbGctMydcbiAgICAgICAgICAgICAgKyAoc2NvcGUuc2VsZWN0ZWQgPT09IHRydWUgPyAnIHEtdGFibGVfX2dyaWQtaXRlbS0tc2VsZWN0ZWQnIDogJycpXG4gICAgICAgICAgfSwgW1xuICAgICAgICAgICAgaCgnZGl2JywgZGF0YSwgY2hpbGQpXG4gICAgICAgICAgXSlcbiAgICAgICAgfVxuXG4gICAgICByZXR1cm4gaCgnZGl2Jywge1xuICAgICAgICBjbGFzczogW1xuICAgICAgICAgICdxLXRhYmxlX19ncmlkLWNvbnRlbnQgcm93JyxcbiAgICAgICAgICBwcm9wcy5jYXJkQ29udGFpbmVyQ2xhc3NcbiAgICAgICAgXSxcbiAgICAgICAgc3R5bGU6IHByb3BzLmNhcmRDb250YWluZXJTdHlsZVxuICAgICAgfSwgY29tcHV0ZWRSb3dzLnZhbHVlLm1hcCgocm93LCBwYWdlSW5kZXgpID0+IHtcbiAgICAgICAgcmV0dXJuIGl0ZW0oZ2V0Qm9keVNjb3BlKHtcbiAgICAgICAgICBrZXk6IGdldFJvd0tleS52YWx1ZShyb3cpLFxuICAgICAgICAgIHJvdyxcbiAgICAgICAgICBwYWdlSW5kZXhcbiAgICAgICAgfSkpXG4gICAgICB9KSlcbiAgICB9XG5cbiAgICAvLyBleHBvc2UgcHVibGljIG1ldGhvZHMgYW5kIG5lZWRlZCBjb21wdXRlZCBwcm9wc1xuICAgIE9iamVjdC5hc3NpZ24odm0ucHJveHksIHtcbiAgICAgIHJlcXVlc3RTZXJ2ZXJJbnRlcmFjdGlvbixcbiAgICAgIHNldFBhZ2luYXRpb24sXG4gICAgICBmaXJzdFBhZ2UsXG4gICAgICBwcmV2UGFnZSxcbiAgICAgIG5leHRQYWdlLFxuICAgICAgbGFzdFBhZ2UsXG4gICAgICBpc1Jvd1NlbGVjdGVkLFxuICAgICAgY2xlYXJTZWxlY3Rpb24sXG4gICAgICBpc1Jvd0V4cGFuZGVkLFxuICAgICAgc2V0RXhwYW5kZWQsXG4gICAgICBzb3J0LFxuICAgICAgcmVzZXRWaXJ0dWFsU2Nyb2xsLFxuICAgICAgc2Nyb2xsVG8sXG4gICAgICBnZXRDZWxsVmFsdWVcbiAgICB9KVxuXG4gICAgaW5qZWN0TXVsdGlwbGVQcm9wcyh2bS5wcm94eSwge1xuICAgICAgZmlsdGVyZWRTb3J0ZWRSb3dzOiAoKSA9PiBmaWx0ZXJlZFNvcnRlZFJvd3MudmFsdWUsXG4gICAgICBjb21wdXRlZFJvd3M6ICgpID0+IGNvbXB1dGVkUm93cy52YWx1ZSxcbiAgICAgIGNvbXB1dGVkUm93c051bWJlcjogKCkgPT4gY29tcHV0ZWRSb3dzTnVtYmVyLnZhbHVlXG4gICAgfSlcblxuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICBjb25zdCBjaGlsZCA9IFsgZ2V0VG9wRGl2KCkgXVxuICAgICAgY29uc3QgZGF0YSA9IHsgcmVmOiByb290UmVmLCBjbGFzczogY29udGFpbmVyQ2xhc3MudmFsdWUgfVxuXG4gICAgICBpZiAocHJvcHMuZ3JpZCA9PT0gdHJ1ZSkge1xuICAgICAgICBjaGlsZC5wdXNoKGdldEdyaWRIZWFkZXIoKSlcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICBPYmplY3QuYXNzaWduKGRhdGEsIHtcbiAgICAgICAgICBjbGFzczogWyBkYXRhLmNsYXNzLCBwcm9wcy5jYXJkQ2xhc3MgXSxcbiAgICAgICAgICBzdHlsZTogcHJvcHMuY2FyZFN0eWxlXG4gICAgICAgIH0pXG4gICAgICB9XG5cbiAgICAgIGNoaWxkLnB1c2goXG4gICAgICAgIGdldEJvZHkoKSxcbiAgICAgICAgZ2V0Qm90dG9tRGl2KClcbiAgICAgIClcblxuICAgICAgaWYgKHByb3BzLmxvYWRpbmcgPT09IHRydWUgJiYgc2xvdHMubG9hZGluZyAhPT0gdm9pZCAwKSB7XG4gICAgICAgIGNoaWxkLnB1c2goXG4gICAgICAgICAgc2xvdHMubG9hZGluZygpXG4gICAgICAgIClcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGgoJ2RpdicsIGRhdGEsIGNoaWxkKVxuICAgIH1cbiAgfVxufSlcbiIsIjxzY3JpcHQgbGFuZz1cInRzXCI+XHJcbmltcG9ydCB7IGRlZmluZUNvbXBvbmVudCB9IGZyb20gJ3Z1ZSc7XHJcblxyXG5pbnRlcmZhY2UgUm93IHtcclxuICBuYW1lOiBzdHJpbmc7XHJcbiAgY2Fsb3JpZXM6IG51bWJlcjtcclxuICBmYXQ6IG51bWJlcjtcclxuICBjYXJiczogbnVtYmVyO1xyXG4gIHByb3RlaW46IG51bWJlcjtcclxuICBzb2RpdW06IG51bWJlcjtcclxuICBjYWxjaXVtOiBzdHJpbmc7XHJcbiAgaXJvbjogc3RyaW5nO1xyXG59XHJcblxyXG5jb25zdCBjb2x1bW5zOiB7IG5hbWU6IHN0cmluZzsgbGFiZWw6IHN0cmluZzsgZmllbGQ6IHN0cmluZyB8ICgocm93OiBSb3cpID0+IHN0cmluZyk7IHJlcXVpcmVkPzogYm9vbGVhbjsgYWxpZ24/OiAnbGVmdCcgfCAnY2VudGVyJyB8ICdyaWdodCc7IHNvcnRhYmxlPzogYm9vbGVhbjsgc29ydD86IChhOiBzdHJpbmcsIGI6IHN0cmluZykgPT4gbnVtYmVyIH1bXSA9IFtcclxuICB7XHJcbiAgICBuYW1lOiAnbmFtZScsXHJcbiAgICBsYWJlbDogJ0Rlc3NlcnQgKDEwMGcgc2VydmluZyknLFxyXG4gICAgLy8gZmllbGQ6ICduYW1lJyxcclxuICAgIGZpZWxkOiAocm93OiBSb3cpID0+IHJvdy5uYW1lLFxyXG4gICAgcmVxdWlyZWQ6IHRydWUsXHJcbiAgICBhbGlnbjogJ2xlZnQnLFxyXG4gICAgc29ydGFibGU6IHRydWUsXHJcbiAgfSxcclxuICB7IG5hbWU6ICdjYWxvcmllcycsIGFsaWduOiAnY2VudGVyJywgbGFiZWw6ICdDYWxvcmllcycsIGZpZWxkOiAnY2Fsb3JpZXMnLCBzb3J0YWJsZTogdHJ1ZSB9LFxyXG4gIHsgbmFtZTogJ2ZhdCcsIGxhYmVsOiAnRmF0IChnKScsIGZpZWxkOiAnZmF0Jywgc29ydGFibGU6IHRydWUgfSxcclxuICB7IG5hbWU6ICdjYXJicycsIGxhYmVsOiAnQ2FyYnMgKGcpJywgZmllbGQ6ICdjYXJicycgfSxcclxuICB7IG5hbWU6ICdwcm90ZWluJywgbGFiZWw6ICdQcm90ZWluIChnKScsIGZpZWxkOiAncHJvdGVpbicgfSxcclxuICB7IG5hbWU6ICdzb2RpdW0nLCBsYWJlbDogJ1NvZGl1bSAobWcpJywgZmllbGQ6ICdzb2RpdW0nIH0sXHJcbiAgeyBuYW1lOiAnY2FsY2l1bScsIGxhYmVsOiAnQ2FsY2l1bSAoJSknLCBmaWVsZDogJ2NhbGNpdW0nLCBzb3J0YWJsZTogdHJ1ZSwgc29ydDogKGE6IHN0cmluZywgYjogc3RyaW5nKSA9PiBwYXJzZUZsb2F0KGEpIC0gcGFyc2VGbG9hdChiKSB9LFxyXG4gIHsgbmFtZTogJ2lyb24nLCBsYWJlbDogJ0lyb24gKCUpJywgZmllbGQ6ICdpcm9uJywgc29ydGFibGU6IHRydWUsIHNvcnQ6IChhOiBzdHJpbmcsIGI6IHN0cmluZykgPT4gcGFyc2VGbG9hdChhKSAtIHBhcnNlRmxvYXQoYikgfVxyXG5dO1xyXG5cclxuXHJcbmNvbnN0IHJvd3MgPSBbXHJcbiAge1xyXG4gICAgbmFtZTogJ0Zyb3plbiBZb2d1cnQnLFxyXG4gICAgY2Fsb3JpZXM6IDE1OSxcclxuICAgIGZhdDogNi4wLFxyXG4gICAgY2FyYnM6IDI0LFxyXG4gICAgcHJvdGVpbjogNC4wLFxyXG4gICAgc29kaXVtOiA4NyxcclxuICAgIGNhbGNpdW06ICcxNCUnLFxyXG4gICAgaXJvbjogJzElJ1xyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogJ0ljZSBjcmVhbSBzYW5kd2ljaCcsXHJcbiAgICBjYWxvcmllczogMjM3LFxyXG4gICAgZmF0OiA5LjAsXHJcbiAgICBjYXJiczogMzcsXHJcbiAgICBwcm90ZWluOiA0LjMsXHJcbiAgICBzb2RpdW06IDEyOSxcclxuICAgIGNhbGNpdW06ICc4JScsXHJcbiAgICBpcm9uOiAnMSUnXHJcbiAgfVxyXG5dXHJcblxyXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb21wb25lbnQoe1xyXG4gIG5hbWU6ICdEYXNoYm9hcmRQYWdlJyxcclxuICBkYXRhKCkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgY29sdW1uczogY29sdW1ucyxcclxuICAgICAgcm93czogcm93c1xyXG4gICAgfTtcclxuICB9XHJcblxyXG59KTtcclxuXHJcbjwvc2NyaXB0PlxyXG5cclxuPHRlbXBsYXRlPlxyXG4gIDxkaXYgY2xhc3M9XCJxLXBhLW1kXCI+XHJcbiAgICA8cS10YWJsZVxyXG4gICAgICBmbGF0IGJvcmRlcmVkXHJcbiAgICAgIHRpdGxlPVwiVHJlYXRzXCJcclxuICAgICAgOnJvd3M9XCJyb3dzXCJcclxuICAgICAgOmNvbHVtbnM9XCJjb2x1bW5zXCJcclxuICAgICAgcm93LWtleT1cIm5hbWVcIlxyXG4gICAgPlxyXG4gICAgICA8dGVtcGxhdGUgdi1zbG90OmJvZHk9XCJwcm9wc1wiPlxyXG4gICAgICAgIDxxLXRyIDpwcm9wcz1cInByb3BzXCI+XHJcbiAgICAgICAgICA8cS10ZCBrZXk9XCJuYW1lXCIgOnByb3BzPVwicHJvcHNcIj5cclxuICAgICAgICAgICAge3sgcHJvcHMucm93Lm5hbWUgfX1cclxuICAgICAgICAgIDwvcS10ZD5cclxuICAgICAgICAgIDxxLXRkIGtleT1cImNhbG9yaWVzXCIgOnByb3BzPVwicHJvcHNcIj5cclxuICAgICAgICAgICAgPHEtYmFkZ2UgY29sb3I9XCJncmVlblwiPlxyXG4gICAgICAgICAgICAgIHt7IHByb3BzLnJvdy5jYWxvcmllcyB9fVxyXG4gICAgICAgICAgICA8L3EtYmFkZ2U+XHJcbiAgICAgICAgICA8L3EtdGQ+XHJcbiAgICAgICAgICA8cS10ZCBrZXk9XCJmYXRcIiA6cHJvcHM9XCJwcm9wc1wiPlxyXG4gICAgICAgICAgICA8cS1iYWRnZSBjb2xvcj1cInB1cnBsZVwiPlxyXG4gICAgICAgICAgICAgIHt7IHByb3BzLnJvdy5mYXQgfX1cclxuICAgICAgICAgICAgPC9xLWJhZGdlPlxyXG4gICAgICAgICAgPC9xLXRkPlxyXG4gICAgICAgICAgPHEtdGQga2V5PVwiY2FyYnNcIiA6cHJvcHM9XCJwcm9wc1wiPlxyXG4gICAgICAgICAgICA8cS1iYWRnZSBjb2xvcj1cIm9yYW5nZVwiPlxyXG4gICAgICAgICAgICAgIHt7IHByb3BzLnJvdy5jYXJicyB9fVxyXG4gICAgICAgICAgICA8L3EtYmFkZ2U+XHJcbiAgICAgICAgICA8L3EtdGQ+XHJcbiAgICAgICAgICA8cS10ZCBrZXk9XCJwcm90ZWluXCIgOnByb3BzPVwicHJvcHNcIj5cclxuICAgICAgICAgICAgPHEtYmFkZ2UgY29sb3I9XCJwcmltYXJ5XCI+XHJcbiAgICAgICAgICAgICAge3sgcHJvcHMucm93LnByb3RlaW4gfX1cclxuICAgICAgICAgICAgPC9xLWJhZGdlPlxyXG4gICAgICAgICAgPC9xLXRkPlxyXG4gICAgICAgICAgPHEtdGQga2V5PVwic29kaXVtXCIgOnByb3BzPVwicHJvcHNcIj5cclxuICAgICAgICAgICAgPHEtYmFkZ2UgY29sb3I9XCJ0ZWFsXCI+XHJcbiAgICAgICAgICAgICAge3sgcHJvcHMucm93LnNvZGl1bSB9fVxyXG4gICAgICAgICAgICA8L3EtYmFkZ2U+XHJcbiAgICAgICAgICA8L3EtdGQ+XHJcbiAgICAgICAgICA8cS10ZCBrZXk9XCJjYWxjaXVtXCIgOnByb3BzPVwicHJvcHNcIj5cclxuICAgICAgICAgICAgPHEtYmFkZ2UgY29sb3I9XCJhY2NlbnRcIj5cclxuICAgICAgICAgICAgICB7eyBwcm9wcy5yb3cuY2FsY2l1bSB9fVxyXG4gICAgICAgICAgICA8L3EtYmFkZ2U+XHJcbiAgICAgICAgICA8L3EtdGQ+XHJcbiAgICAgICAgICA8cS10ZCBrZXk9XCJpcm9uXCIgOnByb3BzPVwicHJvcHNcIj5cclxuICAgICAgICAgICAgPHEtYmFkZ2UgY29sb3I9XCJhbWJlclwiPlxyXG4gICAgICAgICAgICAgIHt7IHByb3BzLnJvdy5pcm9uIH19XHJcbiAgICAgICAgICAgIDwvcS1iYWRnZT5cclxuICAgICAgICAgIDwvcS10ZD5cclxuICAgICAgICA8L3EtdHI+XHJcbiAgICAgIDwvdGVtcGxhdGU+XHJcbiAgICA8L3EtdGFibGU+XHJcbiAgPC9kaXY+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c3R5bGUgc2NvcGVkIGxhbmc9XCJzYXNzXCI+XHJcblxyXG48L3N0eWxlPlxyXG4iLCI8c2NyaXB0IGxhbmc9XCJ0c1wiPlxyXG5pbXBvcnQgeyBkZWZpbmVDb21wb25lbnQgfSBmcm9tICd2dWUnO1xyXG5cclxuaW50ZXJmYWNlIFJvdyB7XHJcbiAgbmFtZTogc3RyaW5nO1xyXG4gIGNhbG9yaWVzOiBudW1iZXI7XHJcbiAgZmF0OiBudW1iZXI7XHJcbiAgY2FyYnM6IG51bWJlcjtcclxuICBwcm90ZWluOiBudW1iZXI7XHJcbiAgc29kaXVtOiBudW1iZXI7XHJcbiAgY2FsY2l1bTogc3RyaW5nO1xyXG4gIGlyb246IHN0cmluZztcclxufVxyXG5cclxuY29uc3QgY29sdW1uczogeyBuYW1lOiBzdHJpbmc7IGxhYmVsOiBzdHJpbmc7IGZpZWxkOiBzdHJpbmcgfCAoKHJvdzogUm93KSA9PiBzdHJpbmcpOyByZXF1aXJlZD86IGJvb2xlYW47IGFsaWduPzogJ2xlZnQnIHwgJ2NlbnRlcicgfCAncmlnaHQnOyBzb3J0YWJsZT86IGJvb2xlYW47IHNvcnQ/OiAoYTogc3RyaW5nLCBiOiBzdHJpbmcpID0+IG51bWJlciB9W10gPSBbXHJcbiAge1xyXG4gICAgbmFtZTogJ25hbWUnLFxyXG4gICAgbGFiZWw6ICdEZXNzZXJ0ICgxMDBnIHNlcnZpbmcpJyxcclxuICAgIC8vIGZpZWxkOiAnbmFtZScsXHJcbiAgICBmaWVsZDogKHJvdzogUm93KSA9PiByb3cubmFtZSxcclxuICAgIHJlcXVpcmVkOiB0cnVlLFxyXG4gICAgYWxpZ246ICdsZWZ0JyxcclxuICAgIHNvcnRhYmxlOiB0cnVlLFxyXG4gIH0sXHJcbiAgeyBuYW1lOiAnY2Fsb3JpZXMnLCBhbGlnbjogJ2NlbnRlcicsIGxhYmVsOiAnQ2Fsb3JpZXMnLCBmaWVsZDogJ2NhbG9yaWVzJywgc29ydGFibGU6IHRydWUgfSxcclxuICB7IG5hbWU6ICdmYXQnLCBsYWJlbDogJ0ZhdCAoZyknLCBmaWVsZDogJ2ZhdCcsIHNvcnRhYmxlOiB0cnVlIH0sXHJcbiAgeyBuYW1lOiAnY2FyYnMnLCBsYWJlbDogJ0NhcmJzIChnKScsIGZpZWxkOiAnY2FyYnMnIH0sXHJcbiAgeyBuYW1lOiAncHJvdGVpbicsIGxhYmVsOiAnUHJvdGVpbiAoZyknLCBmaWVsZDogJ3Byb3RlaW4nIH0sXHJcbiAgeyBuYW1lOiAnc29kaXVtJywgbGFiZWw6ICdTb2RpdW0gKG1nKScsIGZpZWxkOiAnc29kaXVtJyB9LFxyXG4gIHsgbmFtZTogJ2NhbGNpdW0nLCBsYWJlbDogJ0NhbGNpdW0gKCUpJywgZmllbGQ6ICdjYWxjaXVtJywgc29ydGFibGU6IHRydWUsIHNvcnQ6IChhOiBzdHJpbmcsIGI6IHN0cmluZykgPT4gcGFyc2VGbG9hdChhKSAtIHBhcnNlRmxvYXQoYikgfSxcclxuICB7IG5hbWU6ICdpcm9uJywgbGFiZWw6ICdJcm9uICglKScsIGZpZWxkOiAnaXJvbicsIHNvcnRhYmxlOiB0cnVlLCBzb3J0OiAoYTogc3RyaW5nLCBiOiBzdHJpbmcpID0+IHBhcnNlRmxvYXQoYSkgLSBwYXJzZUZsb2F0KGIpIH1cclxuXTtcclxuXHJcblxyXG5jb25zdCByb3dzID0gW1xyXG4gIHtcclxuICAgIG5hbWU6ICdGcm96ZW4gWW9ndXJ0JyxcclxuICAgIGNhbG9yaWVzOiAxNTksXHJcbiAgICBmYXQ6IDYuMCxcclxuICAgIGNhcmJzOiAyNCxcclxuICAgIHByb3RlaW46IDQuMCxcclxuICAgIHNvZGl1bTogODcsXHJcbiAgICBjYWxjaXVtOiAnMTQlJyxcclxuICAgIGlyb246ICcxJSdcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6ICdJY2UgY3JlYW0gc2FuZHdpY2gnLFxyXG4gICAgY2Fsb3JpZXM6IDIzNyxcclxuICAgIGZhdDogOS4wLFxyXG4gICAgY2FyYnM6IDM3LFxyXG4gICAgcHJvdGVpbjogNC4zLFxyXG4gICAgc29kaXVtOiAxMjksXHJcbiAgICBjYWxjaXVtOiAnOCUnLFxyXG4gICAgaXJvbjogJzElJ1xyXG4gIH1cclxuXVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29tcG9uZW50KHtcclxuICBuYW1lOiAnRGFzaGJvYXJkUGFnZScsXHJcbiAgZGF0YSgpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIGNvbHVtbnM6IGNvbHVtbnMsXHJcbiAgICAgIHJvd3M6IHJvd3NcclxuICAgIH07XHJcbiAgfVxyXG5cclxufSk7XHJcblxyXG48L3NjcmlwdD5cclxuXHJcbjx0ZW1wbGF0ZT5cclxuICA8ZGl2IGNsYXNzPVwicS1wYS1tZFwiPlxyXG4gICAgPHEtdGFibGVcclxuICAgICAgZmxhdCBib3JkZXJlZFxyXG4gICAgICB0aXRsZT1cIlRyZWF0c1wiXHJcbiAgICAgIDpyb3dzPVwicm93c1wiXHJcbiAgICAgIDpjb2x1bW5zPVwiY29sdW1uc1wiXHJcbiAgICAgIHJvdy1rZXk9XCJuYW1lXCJcclxuICAgID5cclxuICAgICAgPHRlbXBsYXRlIHYtc2xvdDpib2R5PVwicHJvcHNcIj5cclxuICAgICAgICA8cS10ciA6cHJvcHM9XCJwcm9wc1wiPlxyXG4gICAgICAgICAgPHEtdGQga2V5PVwibmFtZVwiIDpwcm9wcz1cInByb3BzXCI+XHJcbiAgICAgICAgICAgIHt7IHByb3BzLnJvdy5uYW1lIH19XHJcbiAgICAgICAgICA8L3EtdGQ+XHJcbiAgICAgICAgICA8cS10ZCBrZXk9XCJjYWxvcmllc1wiIDpwcm9wcz1cInByb3BzXCI+XHJcbiAgICAgICAgICAgIDxxLWJhZGdlIGNvbG9yPVwiZ3JlZW5cIj5cclxuICAgICAgICAgICAgICB7eyBwcm9wcy5yb3cuY2Fsb3JpZXMgfX1cclxuICAgICAgICAgICAgPC9xLWJhZGdlPlxyXG4gICAgICAgICAgPC9xLXRkPlxyXG4gICAgICAgICAgPHEtdGQga2V5PVwiZmF0XCIgOnByb3BzPVwicHJvcHNcIj5cclxuICAgICAgICAgICAgPHEtYmFkZ2UgY29sb3I9XCJwdXJwbGVcIj5cclxuICAgICAgICAgICAgICB7eyBwcm9wcy5yb3cuZmF0IH19XHJcbiAgICAgICAgICAgIDwvcS1iYWRnZT5cclxuICAgICAgICAgIDwvcS10ZD5cclxuICAgICAgICAgIDxxLXRkIGtleT1cImNhcmJzXCIgOnByb3BzPVwicHJvcHNcIj5cclxuICAgICAgICAgICAgPHEtYmFkZ2UgY29sb3I9XCJvcmFuZ2VcIj5cclxuICAgICAgICAgICAgICB7eyBwcm9wcy5yb3cuY2FyYnMgfX1cclxuICAgICAgICAgICAgPC9xLWJhZGdlPlxyXG4gICAgICAgICAgPC9xLXRkPlxyXG4gICAgICAgICAgPHEtdGQga2V5PVwicHJvdGVpblwiIDpwcm9wcz1cInByb3BzXCI+XHJcbiAgICAgICAgICAgIDxxLWJhZGdlIGNvbG9yPVwicHJpbWFyeVwiPlxyXG4gICAgICAgICAgICAgIHt7IHByb3BzLnJvdy5wcm90ZWluIH19XHJcbiAgICAgICAgICAgIDwvcS1iYWRnZT5cclxuICAgICAgICAgIDwvcS10ZD5cclxuICAgICAgICAgIDxxLXRkIGtleT1cInNvZGl1bVwiIDpwcm9wcz1cInByb3BzXCI+XHJcbiAgICAgICAgICAgIDxxLWJhZGdlIGNvbG9yPVwidGVhbFwiPlxyXG4gICAgICAgICAgICAgIHt7IHByb3BzLnJvdy5zb2RpdW0gfX1cclxuICAgICAgICAgICAgPC9xLWJhZGdlPlxyXG4gICAgICAgICAgPC9xLXRkPlxyXG4gICAgICAgICAgPHEtdGQga2V5PVwiY2FsY2l1bVwiIDpwcm9wcz1cInByb3BzXCI+XHJcbiAgICAgICAgICAgIDxxLWJhZGdlIGNvbG9yPVwiYWNjZW50XCI+XHJcbiAgICAgICAgICAgICAge3sgcHJvcHMucm93LmNhbGNpdW0gfX1cclxuICAgICAgICAgICAgPC9xLWJhZGdlPlxyXG4gICAgICAgICAgPC9xLXRkPlxyXG4gICAgICAgICAgPHEtdGQga2V5PVwiaXJvblwiIDpwcm9wcz1cInByb3BzXCI+XHJcbiAgICAgICAgICAgIDxxLWJhZGdlIGNvbG9yPVwiYW1iZXJcIj5cclxuICAgICAgICAgICAgICB7eyBwcm9wcy5yb3cuaXJvbiB9fVxyXG4gICAgICAgICAgICA8L3EtYmFkZ2U+XHJcbiAgICAgICAgICA8L3EtdGQ+XHJcbiAgICAgICAgPC9xLXRyPlxyXG4gICAgICA8L3RlbXBsYXRlPlxyXG4gICAgPC9xLXRhYmxlPlxyXG4gIDwvZGl2PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHN0eWxlIHNjb3BlZCBsYW5nPVwic2Fzc1wiPlxyXG5cclxuPC9zdHlsZT5cclxuIl0sIm5hbWVzIjpbImVsIiwiaCIsImRlZmF1bHRTaXplcyIsIm9uS2V5dXAiLCJ0YXJnZXQiLCJoYW5kbGVycyIsInBvcnRhbEluZGV4Iiwid2lkdGgiLCJvcHRpb25JbmRleCIsImF0dHJzIiwib25LZXlkb3duIiwiZGVmIiwicm93cyIsImxhc3RQYWdlIiwiY2xlYXJTZWxlY3Rpb24iLCJwcm9wcyIsIl9vcGVuQmxvY2siLCJfY3JlYXRlRWxlbWVudEJsb2NrIiwiX2NyZWF0ZVZOb2RlIiwiX3dpdGhDdHgiLCJfY3JlYXRlVGV4dFZOb2RlIiwiX3RvRGlzcGxheVN0cmluZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFLQSxNQUFBLE1BQWUsZ0JBQWdCO0FBQUEsRUFDN0IsTUFBTTtBQUFBLEVBRU4sT0FBTztBQUFBLElBQ0wsT0FBTztBQUFBLElBQ1AsV0FBVztBQUFBLElBQ1gsU0FBUztBQUFBLEVBQ1Y7QUFBQSxFQUVELE1BQU8sT0FBTyxFQUFFLFNBQVM7QUFDdkIsVUFBTSxLQUFLLG1CQUFvQjtBQUMvQixVQUFNLFVBQVU7QUFBQSxNQUFTLE1BQ3ZCLFVBQVUsTUFBTSxjQUFjLE9BQU8sNkJBQTZCLE9BQy9ELE1BQU0sWUFBWSxPQUFPLG9CQUFvQixNQUM5QztBQUFBLElBQ0g7QUFFRCxXQUFPLE1BQU07QUFDWCxVQUFJLE1BQU0sVUFBVSxRQUFRO0FB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QSxjQUFBLEtBQUE7QUFBQSxjQWxIeEM7QUFBQSxZQUFBLEdBQUE7QUFBQSx1QkFBQUMsUUFvSGtDLE1BQUE7QUFBQSxnQkFwSGxDRCxZQUFBLFFBQUEsRUFBQSxPQUFBLFFBQUEsR0FBQTtBQUFBLGtCQW9IK0IsU0FBQUMsUUFBQSxNQUFBO0FBQUEsb0JBcEgvQkMsZ0JBQUFDLGdCQUFBLE1BQUEsSUFBQSxJQUFBLEdBQUEsQ0FBQTtBQUFBLGtCQUFBLENBQUE7QUFBQTtnQkFBQSxHQUFBLElBQUE7QUFBQSxjQUFBLENBQUE7QUFBQTtZQUFBLEdBQUEsTUFBQSxDQUFBLE9BQUEsQ0FBQTtBQUFBLFVBQUEsQ0FBQTtBQUFBO1FBQUEsR0FBQSxNQUFBLENBQUEsT0FBQSxDQUFBO0FBQUEsTUFBQSxDQUFBO0FBQUE7Ozs7OyIsInhfZ29vZ2xlX2lnbm9yZUxpc3QiOlswLDEsMiwzLDQsNSw2LDcsOCw5LDEwLDExLDEyLDEzLDE0LDE1LDE2LDE3LDE4LDE5LDIwLDIxLDIyLDIzLDI0LDI1LDI2LDI3LDI4LDI5LDMwLDMxLDMyLDMzLDM0LDM1LDM2LDM3LDM4LDM5XX0=
