import { ag as unref, $ as isKeyCode, p as addEvt, v as cleanEvt, t as stop, u as position, c as computed, g as getCurrentInstance, r as ref, a as onBeforeUnmount, h, a3 as Transition, y as withDirectives, x as stopAndPrevent, l as listenOpts, s as prevent } from "./index-B8gzy2O7.js";
import { b as vmHasRouter, u as useSizeProps, a as useSize, Q as QIcon, c as QSpinner } from "./vm-DaVx61Sd.js";
import { d as createDirective, c as createComponent, f as hMergeSlot } from "./render-DVgBXDT_.js";
function css(element, css2) {
  const style = element.style;
  for (const prop in css2) {
    style[prop] = css2[prop];
  }
}
function getElement(el) {
  if (el === void 0 || el === null) {
    return void 0;
  }
  if (typeof el === "string") {
    try {
      return document.querySelector(el) || void 0;
    } catch (err) {
      return void 0;
    }
  }
  const target = unref(el);
  if (target) {
    return target.$el || target;
  }
}
function childHasFocus(el, focusedEl) {
  if (el === void 0 || el === null || el.contains(focusedEl) === true) {
    return true;
  }
  for (let next = el.nextElementSibling; next !== null; next = next.nextElementSibling) {
    if (next.contains(focusedEl)) {
      return true;
    }
  }
  return false;
}
function throttle(fn, limit = 250) {
  let wait = false, result;
  return function() {
    if (wait === false) {
      wait = true;
      setTimeout(() => {
        wait = false;
      }, limit);
      result = fn.apply(this, arguments);
    }
    return result;
  };
}
function showRipple(evt, el, ctx, forceCenter) {
  ctx.modifiers.stop === true && stop(evt);
  const color = ctx.modifiers.color;
  let center = ctx.modifiers.center;
  center = center === true || forceCenter === true;
  const node = document.createElement("span"), innerNode = document.createElement("span"), pos = position(evt), { left, top, width, height } = el.getBoundingClientRect(), diameter = Math.sqrt(width * width + height * height), radius = diameter / 2, centerX = `${(width - diameter) / 2}px`, x = center ? centerX : `${pos.left - left - radius}px`, centerY = `${(height - diameter) / 2}px`, y = center ? centerY : `${pos.top - top - radius}px`;
  innerNode.className = "q-ripple__inner";
  css(innerNode, {
    height: `${diameter}px`,
    width: `${diameter}px`,
    transform: `translate3d(${x},${y},0) scale3d(.2,.2,1)`,
    opacity: 0
  });
  node.className = `q-ripple${color ? " text-" + color : ""}`;
  node.setAttribute("dir", "ltr");
  node.appendChild(innerNode);
  el.appendChild(node);
  const abort = () => {
    node.remove();
    clearTimeout(timer);
  };
  ctx.abort.push(abort);
  let timer = setTimeout(() => {
    innerNode.classList.add("q-ripple__inner--enter");
    innerNode.style.transform = `translate3d(${centerX},${centerY},0) scale3d(1,1,1)`;
    innerNode.style.opacity = 0.2;
    timer = setTimeout(() => {
      innerNode.classList.remove("q-ripple__inner--enter");
      innerNode.classList.add("q-ripple__inner--leave");
      innerNode.style.opacity = 0;
      timer = setTimeout(() => {
        node.remove();
        ctx.abort.splice(ctx.abort.indexOf(abort), 1);
      }, 275);
    }, 250);
  }, 50);
}
function updateModifiers(ctx, { modifiers, value, arg }) {
  const cfg = Object.assign({}, ctx.cfg.ripple, modifiers, value);
  ctx.modifiers = {
    early: cfg.early === true,
    stop: cfg.stop === true,
    center: cfg.center === true,
    color: cfg.color || arg,
    keyCodes: [].concat(cfg.keyCodes || 13)
  };
}
const Ripple = createDirective(
  {
    name: "ripple",
    beforeMount(el, binding) {
      const cfg = binding.instance.$.appContext.config.globalProperties.$q.config || {};
      if (cfg.ripple === false) {
        return;
      }
      const ctx = {
        cfg,
        enabled: binding.value !== false,
        modifiers: {},
        abort: [],
        start(evt) {
          if (ctx.enabled === true && evt.qSkipRipple !== true && evt.type === (ctx.modifiers.early === true ? "pointerdown" : "click")) {
            showRipple(evt, el, ctx, evt.qKeyEvent === true);
          }
        },
        keystart: throttle((evt) => {
          if (ctx.enabled === true && evt.qSkipRipple !== true && isKeyCode(evt, ctx.modifiers.keyCodes) === true && evt.type === `key${ctx.modifiers.early === true ? "down" : "up"}`) {
            showRipple(evt, el, ctx, true);
          }
        }, 300)
      };
      updateModifiers(ctx, binding);
      el.__qripple = ctx;
      addEvt(ctx, "main", [
        [el, "pointerdown", "start", "passive"],
        [el, "click", "start", "passive"],
        [el, "keydown", "keystart", "passive"],
        [el, "keyup", "keystart", "passive"]
      ]);
    },
    updated(el, binding) {
      if (binding.oldValue !== binding.value) {
        const ctx = el.__qripple;
        if (ctx !== void 0) {
          ctx.enabled = binding.value !== false;
          if (ctx.enabled === true && Object(binding.value) === binding.value) {
            updateModifiers(ctx, binding);
          }
        }
      }
    },
    beforeUnmount(el) {
      const ctx = el.__qripple;
      if (ctx !== void 0) {
        ctx.abort.forEach((fn) => {
          fn();
        });
        cleanEvt(ctx, "main");
        delete el._qripple;
      }
    }
  }
);
const alignMap = {
  left: "start",
  center: "center",
  right: "end",
  between: "between",
  around: "around",
  evenly: "evenly",
  stretch: "stretch"
};
const alignValues = Object.keys(alignMap);
const useAlignProps = {
  align: {
    type: String,
    validator: (v) => alignValues.includes(v)
  }
};
function useAlign(props) {
  return computed(() => {
    const align = props.align === void 0 ? props.vertical === true ? "stretch" : "left" : props.align;
    return `${props.vertical === true ? "items" : "justify"}-${alignMap[align]}`;
  });
}
function getOriginalPath(record) {
  return record ? record.aliasOf ? record.aliasOf.path : record.path : "";
}
function isSameRouteRecord(a, b) {
  return (a.aliasOf || a) === (b.aliasOf || b);
}
function includesParams(outer, inner) {
  for (const key in inner) {
    const innerValue = inner[key], outerValue = outer[key];
    if (typeof innerValue === "string") {
      if (innerValue !== outerValue) {
        return false;
      }
    } else if (Array.isArray(outerValue) === false || outerValue.length !== innerValue.length || innerValue.some((value, i) => value !== outerValue[i])) {
      return false;
    }
  }
  return true;
}
function isEquivalentArray(a, b) {
  return Array.isArray(b) === true ? a.length === b.length && a.every((value, i) => value === b[i]) : a.length === 1 && a[0] === b;
}
function isSameRouteLocationParamsValue(a, b) {
  return Array.isArray(a) === true ? isEquivalentArray(a, b) : Array.isArray(b) === true ? isEquivalentArray(b, a) : a === b;
}
function isSameRouteLocationParams(a, b) {
  if (Object.keys(a).length !== Object.keys(b).length) {
    return false;
  }
  for (const key in a) {
    if (isSameRouteLocationParamsValue(a[key], b[key]) === false) {
      return false;
    }
  }
  return true;
}
const useRouterLinkProps = {
  // router-link
  to: [String, Object],
  replace: Boolean,
  exact: Boolean,
  activeClass: {
    type: String,
    default: "q-router-link--active"
  },
  exactActiveClass: {
    type: String,
    default: "q-router-link--exact-active"
  },
  // regular <a> link
  href: String,
  target: String,
  // state
  disable: Boolean
};
function useRouterLink({ fallbackTag, useDisableForRouterLinkProps = true } = {}) {
  const vm = getCurrentInstance();
  const { props, proxy, emit } = vm;
  const hasRouter = vmHasRouter(vm);
  const hasHrefLink = computed(() => props.disable !== true && props.href !== void 0);
  const hasRouterLinkProps = useDisableForRouterLinkProps === true ? computed(
    () => hasRouter === true && props.disable !== true && hasHrefLink.value !== true && props.to !== void 0 && props.to !== null && props.to !== ""
  ) : computed(
    () => hasRouter === true && hasHrefLink.value !== true && props.to !== void 0 && props.to !== null && props.to !== ""
  );
  const resolvedLink = computed(() => hasRouterLinkProps.value === true ? getLink(props.to) : null);
  const hasRouterLink = computed(() => resolvedLink.value !== null);
  const hasLink = computed(() => hasHrefLink.value === true || hasRouterLink.value === true);
  const linkTag = computed(() => props.type === "a" || hasLink.value === true ? "a" : props.tag || fallbackTag || "div");
  const linkAttrs = computed(() => hasHrefLink.value === true ? {
    href: props.href,
    target: props.target
  } : hasRouterLink.value === true ? {
    href: resolvedLink.value.href,
    target: props.target
  } : {});
  const linkActiveIndex = computed(() => {
    if (hasRouterLink.value === false) {
      return -1;
    }
    const { matched } = resolvedLink.value, { length } = matched, routeMatched = matched[length - 1];
    if (routeMatched === void 0) {
      return -1;
    }
    const currentMatched = proxy.$route.matched;
    if (currentMatched.length === 0) {
      return -1;
    }
    const index = currentMatched.findIndex(
      isSameRouteRecord.bind(null, routeMatched)
    );
    if (index !== -1) {
      return index;
    }
    const parentRecordPath = getOriginalPath(matched[length - 2]);
    return (
      // we are dealing with nested routes
      length > 1 && getOriginalPath(routeMatched) === parentRecordPath && currentMatched[currentMatched.length - 1].path !== parentRecordPath ? currentMatched.findIndex(
        isSameRouteRecord.bind(null, matched[length - 2])
      ) : index
    );
  });
  const linkIsActive = computed(
    () => hasRouterLink.value === true && linkActiveIndex.value !== -1 && includesParams(proxy.$route.params, resolvedLink.value.params)
  );
  const linkIsExactActive = computed(
    () => linkIsActive.value === true && linkActiveIndex.value === proxy.$route.matched.length - 1 && isSameRouteLocationParams(proxy.$route.params, resolvedLink.value.params)
  );
  const linkClass = computed(() => hasRouterLink.value === true ? linkIsExactActive.value === true ? ` ${props.exactActiveClass} ${props.activeClass}` : props.exact === true ? "" : linkIsActive.value === true ? ` ${props.activeClass}` : "" : "");
  function getLink(to) {
    try {
      return proxy.$router.resolve(to);
    } catch (_) {
    }
    return null;
  }
  function navigateToRouterLink(e, { returnRouterError, to = props.to, replace = props.replace } = {}) {
    if (props.disable === true) {
      e.preventDefault();
      return Promise.resolve(false);
    }
    if (
      // don't redirect with control keys;
      // should match RouterLink from Vue Router
      e.metaKey || e.altKey || e.ctrlKey || e.shiftKey || e.button !== void 0 && e.button !== 0 || props.target === "_blank"
    ) {
      return Promise.resolve(false);
    }
    e.preventDefault();
    const promise = proxy.$router[replace === true ? "replace" : "push"](to);
    return returnRouterError === true ? promise : promise.then(() => {
    }).catch(() => {
    });
  }
  function navigateOnClick(e) {
    if (hasRouterLink.value === true) {
      const go = (opts) => navigateToRouterLink(e, opts);
      emit("click", e, go);
      e.defaultPrevented !== true && go();
    } else {
      emit("click", e);
    }
  }
  return {
    hasRouterLink,
    hasHrefLink,
    hasLink,
    linkTag,
    resolvedLink,
    linkIsActive,
    linkIsExactActive,
    linkClass,
    linkAttrs,
    getLink,
    navigateToRouterLink,
    navigateOnClick
  };
}
const btnPadding = {
  none: 0,
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32
};
const defaultSizes = {
  xs: 8,
  sm: 10,
  md: 14,
  lg: 20,
  xl: 24
};
const formTypes = ["button", "submit", "reset"];
const mediaTypeRE = /[^\s]\/[^\s]/;
const btnDesignOptions = ["flat", "outline", "push", "unelevated"];
const getBtnDesign = (props, defaultValue) => {
  if (props.flat === true)
    return "flat";
  if (props.outline === true)
    return "outline";
  if (props.push === true)
    return "push";
  if (props.unelevated === true)
    return "unelevated";
  return defaultValue;
};
const useBtnProps = {
  ...useSizeProps,
  ...useRouterLinkProps,
  type: {
    type: String,
    default: "button"
  },
  label: [Number, String],
  icon: String,
  iconRight: String,
  ...btnDesignOptions.reduce(
    (acc, val) => (acc[val] = Boolean) && acc,
    {}
  ),
  square: Boolean,
  round: Boolean,
  rounded: Boolean,
  glossy: Boolean,
  size: String,
  fab: Boolean,
  fabMini: Boolean,
  padding: String,
  color: String,
  textColor: String,
  noCaps: Boolean,
  noWrap: Boolean,
  dense: Boolean,
  tabindex: [Number, String],
  ripple: {
    type: [Boolean, Object],
    default: true
  },
  align: {
    ...useAlignProps.align,
    default: "center"
  },
  stack: Boolean,
  stretch: Boolean,
  loading: {
    type: Boolean,
    default: null
  },
  disable: Boolean
};
function useBtn(props) {
  const sizeStyle = useSize(props, defaultSizes);
  const alignClass = useAlign(props);
  const { hasRouterLink, hasLink, linkTag, linkAttrs, navigateOnClick } = useRouterLink({
    fallbackTag: "button"
  });
  const style = computed(() => {
    const obj = props.fab === false && props.fabMini === false ? sizeStyle.value : {};
    return props.padding !== void 0 ? Object.assign({}, obj, {
      padding: props.padding.split(/\s+/).map((v) => v in btnPadding ? btnPadding[v] + "px" : v).join(" "),
      minWidth: "0",
      minHeight: "0"
    }) : obj;
  });
  const isRounded = computed(
    () => props.rounded === true || props.fab === true || props.fabMini === true
  );
  const isActionable = computed(
    () => props.disable !== true && props.loading !== true
  );
  const tabIndex = computed(() => isActionable.value === true ? props.tabindex || 0 : -1);
  const design = computed(() => getBtnDesign(props, "standard"));
  const attributes = computed(() => {
    const acc = { tabindex: tabIndex.value };
    if (hasLink.value === true) {
      Object.assign(acc, linkAttrs.value);
    } else if (formTypes.includes(props.type) === true) {
      acc.type = props.type;
    }
    if (linkTag.value === "a") {
      if (props.disable === true) {
        acc["aria-disabled"] = "true";
      } else if (acc.href === void 0) {
        acc.role = "button";
      }
      if (hasRouterLink.value !== true && mediaTypeRE.test(props.type) === true) {
        acc.type = props.type;
      }
    } else if (props.disable === true) {
      acc.disabled = "";
      acc["aria-disabled"] = "true";
    }
    if (props.loading === true && props.percentage !== void 0) {
      Object.assign(acc, {
        role: "progressbar",
        "aria-valuemin": 0,
        "aria-valuemax": 100,
        "aria-valuenow": props.percentage
      });
    }
    return acc;
  });
  const classes = computed(() => {
    let colors;
    if (props.color !== void 0) {
      if (props.flat === true || props.outline === true) {
        colors = `text-${props.textColor || props.color}`;
      } else {
        colors = `bg-${props.color} text-${props.textColor || "white"}`;
      }
    } else if (props.textColor) {
      colors = `text-${props.textColor}`;
    }
    const shape = props.round === true ? "round" : `rectangle${isRounded.value === true ? " q-btn--rounded" : props.square === true ? " q-btn--square" : ""}`;
    return `q-btn--${design.value} q-btn--${shape}` + (colors !== void 0 ? " " + colors : "") + (isActionable.value === true ? " q-btn--actionable q-focusable q-hoverable" : props.disable === true ? " disabled" : "") + (props.fab === true ? " q-btn--fab" : props.fabMini === true ? " q-btn--fab-mini" : "") + (props.noCaps === true ? " q-btn--no-uppercase" : "") + (props.dense === true ? " q-btn--dense" : "") + (props.stretch === true ? " no-border-radius self-stretch" : "") + (props.glossy === true ? " glossy" : "") + (props.square ? " q-btn--square" : "");
  });
  const innerClasses = computed(
    () => alignClass.value + (props.stack === true ? " column" : " row") + (props.noWrap === true ? " no-wrap text-no-wrap" : "") + (props.loading === true ? " q-btn__content--hidden" : "")
  );
  return {
    classes,
    style,
    innerClasses,
    attributes,
    hasLink,
    linkTag,
    navigateOnClick,
    isActionable
  };
}
const { passiveCapture } = listenOpts;
let touchTarget = null, keyboardTarget = null, mouseTarget = null;
const QBtn = createComponent({
  name: "QBtn",
  props: {
    ...useBtnProps,
    percentage: Number,
    darkPercentage: Boolean,
    onTouchstart: [Function, Array]
  },
  emits: ["click", "keydown", "mousedown", "keyup"],
  setup(props, { slots, emit }) {
    const { proxy } = getCurrentInstance();
    const {
      classes,
      style,
      innerClasses,
      attributes,
      hasLink,
      linkTag,
      navigateOnClick,
      isActionable
    } = useBtn(props);
    const rootRef = ref(null);
    const blurTargetRef = ref(null);
    let localTouchTargetEl = null, avoidMouseRipple, mouseTimer = null;
    const hasLabel = computed(
      () => props.label !== void 0 && props.label !== null && props.label !== ""
    );
    const ripple = computed(() => props.disable === true || props.ripple === false ? false : {
      keyCodes: hasLink.value === true ? [13, 32] : [13],
      ...props.ripple === true ? {} : props.ripple
    });
    const rippleProps = computed(() => ({ center: props.round }));
    const percentageStyle = computed(() => {
      const val = Math.max(0, Math.min(100, props.percentage));
      return val > 0 ? { transition: "transform 0.6s", transform: `translateX(${val - 100}%)` } : {};
    });
    const onEvents = computed(() => {
      if (props.loading === true) {
        return {
          onMousedown: onLoadingEvt,
          onTouchstart: onLoadingEvt,
          onClick: onLoadingEvt,
          onKeydown: onLoadingEvt,
          onKeyup: onLoadingEvt
        };
      }
      if (isActionable.value === true) {
        const acc = {
          onClick,
          onKeydown,
          onMousedown
        };
        if (proxy.$q.platform.has.touch === true) {
          const suffix = props.onTouchstart !== void 0 ? "" : "Passive";
          acc[`onTouchstart${suffix}`] = onTouchstart;
        }
        return acc;
      }
      return {
        // needed; especially for disabled <a> tags
        onClick: stopAndPrevent
      };
    });
    const nodeProps = computed(() => ({
      ref: rootRef,
      class: "q-btn q-btn-item non-selectable no-outline " + classes.value,
      style: style.value,
      ...attributes.value,
      ...onEvents.value
    }));
    function onClick(e) {
      if (rootRef.value === null)
        return;
      if (e !== void 0) {
        if (e.defaultPrevented === true) {
          return;
        }
        const el = document.activeElement;
        if (props.type === "submit" && el !== document.body && rootRef.value.contains(el) === false && el.contains(rootRef.value) === false) {
          rootRef.value.focus();
          const onClickCleanup = () => {
            document.removeEventListener("keydown", stopAndPrevent, true);
            document.removeEventListener("keyup", onClickCleanup, passiveCapture);
            rootRef.value !== null && rootRef.value.removeEventListener("blur", onClickCleanup, passiveCapture);
          };
          document.addEventListener("keydown", stopAndPrevent, true);
          document.addEventListener("keyup", onClickCleanup, passiveCapture);
          rootRef.value.addEventListener("blur", onClickCleanup, passiveCapture);
        }
      }
      navigateOnClick(e);
    }
    function onKeydown(e) {
      if (rootRef.value === null)
        return;
      emit("keydown", e);
      if (isKeyCode(e, [13, 32]) === true && keyboardTarget !== rootRef.value) {
        keyboardTarget !== null && cleanup();
        if (e.defaultPrevented !== true) {
          rootRef.value.focus();
          keyboardTarget = rootRef.value;
          rootRef.value.classList.add("q-btn--active");
          document.addEventListener("keyup", onPressEnd, true);
          rootRef.value.addEventListener("blur", onPressEnd, passiveCapture);
        }
        stopAndPrevent(e);
      }
    }
    function onTouchstart(e) {
      if (rootRef.value === null)
        return;
      emit("touchstart", e);
      if (e.defaultPrevented === true)
        return;
      if (touchTarget !== rootRef.value) {
        touchTarget !== null && cleanup();
        touchTarget = rootRef.value;
        localTouchTargetEl = e.target;
        localTouchTargetEl.addEventListener("touchcancel", onPressEnd, passiveCapture);
        localTouchTargetEl.addEventListener("touchend", onPressEnd, passiveCapture);
      }
      avoidMouseRipple = true;
      mouseTimer !== null && clearTimeout(mouseTimer);
      mouseTimer = setTimeout(() => {
        mouseTimer = null;
        avoidMouseRipple = false;
      }, 200);
    }
    function onMousedown(e) {
      if (rootRef.value === null)
        return;
      e.qSkipRipple = avoidMouseRipple === true;
      emit("mousedown", e);
      if (e.defaultPrevented !== true && mouseTarget !== rootRef.value) {
        mouseTarget !== null && cleanup();
        mouseTarget = rootRef.value;
        rootRef.value.classList.add("q-btn--active");
        document.addEventListener("mouseup", onPressEnd, passiveCapture);
      }
    }
    function onPressEnd(e) {
      if (rootRef.value === null)
        return;
      if (e !== void 0 && e.type === "blur" && document.activeElement === rootRef.value) {
        return;
      }
      if (e !== void 0 && e.type === "keyup") {
        if (keyboardTarget === rootRef.value && isKeyCode(e, [13, 32]) === true) {
          const evt = new MouseEvent("click", e);
          evt.qKeyEvent = true;
          e.defaultPrevented === true && prevent(evt);
          e.cancelBubble === true && stop(evt);
          rootRef.value.dispatchEvent(evt);
          stopAndPrevent(e);
          e.qKeyEvent = true;
        }
        emit("keyup", e);
      }
      cleanup();
    }
    function cleanup(destroying) {
      const blurTarget = blurTargetRef.value;
      if (destroying !== true && (touchTarget === rootRef.value || mouseTarget === rootRef.value) && blurTarget !== null && blurTarget !== document.activeElement) {
        blurTarget.setAttribute("tabindex", -1);
        blurTarget.focus();
      }
      if (touchTarget === rootRef.value) {
        if (localTouchTargetEl !== null) {
          localTouchTargetEl.removeEventListener("touchcancel", onPressEnd, passiveCapture);
          localTouchTargetEl.removeEventListener("touchend", onPressEnd, passiveCapture);
        }
        touchTarget = localTouchTargetEl = null;
      }
      if (mouseTarget === rootRef.value) {
        document.removeEventListener("mouseup", onPressEnd, passiveCapture);
        mouseTarget = null;
      }
      if (keyboardTarget === rootRef.value) {
        document.removeEventListener("keyup", onPressEnd, true);
        rootRef.value !== null && rootRef.value.removeEventListener("blur", onPressEnd, passiveCapture);
        keyboardTarget = null;
      }
      rootRef.value !== null && rootRef.value.classList.remove("q-btn--active");
    }
    function onLoadingEvt(evt) {
      stopAndPrevent(evt);
      evt.qSkipRipple = true;
    }
    onBeforeUnmount(() => {
      cleanup(true);
    });
    Object.assign(proxy, { click: onClick });
    return () => {
      let inner = [];
      props.icon !== void 0 && inner.push(
        h(QIcon, {
          name: props.icon,
          left: props.stack !== true && hasLabel.value === true,
          role: "img",
          "aria-hidden": "true"
        })
      );
      hasLabel.value === true && inner.push(
        h("span", { class: "block" }, [props.label])
      );
      inner = hMergeSlot(slots.default, inner);
      if (props.iconRight !== void 0 && props.round === false) {
        inner.push(
          h(QIcon, {
            name: props.iconRight,
            right: props.stack !== true && hasLabel.value === true,
            role: "img",
            "aria-hidden": "true"
          })
        );
      }
      const child = [
        h("span", {
          class: "q-focus-helper",
          ref: blurTargetRef
        })
      ];
      if (props.loading === true && props.percentage !== void 0) {
        child.push(
          h("span", {
            class: "q-btn__progress absolute-full overflow-hidden" + (props.darkPercentage === true ? " q-btn__progress--dark" : "")
          }, [
            h("span", {
              class: "q-btn__progress-indicator fit block",
              style: percentageStyle.value
            })
          ])
        );
      }
      child.push(
        h("span", {
          class: "q-btn__content text-center col items-center q-anchor--skip " + innerClasses.value
        }, inner)
      );
      props.loading !== null && child.push(
        h(Transition, {
          name: "q-transition--fade"
        }, () => props.loading === true ? [
          h("span", {
            key: "loading",
            class: "absolute-full flex flex-center"
          }, slots.loading !== void 0 ? slots.loading() : [h(QSpinner)])
        ] : null)
      );
      return withDirectives(
        h(
          linkTag.value,
          nodeProps.value,
          child
        ),
        [[
          Ripple,
          ripple.value,
          void 0,
          rippleProps.value
        ]]
      );
    };
  }
});
export {
  QBtn as Q,
  Ripple as R,
  useRouterLink as a,
  css as b,
  childHasFocus as c,
  getElement as g,
  useRouterLinkProps as u
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUUJ0bi00RWtXcG9mNy5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL3F1YXNhckAyLjE1LjEvbm9kZV9tb2R1bGVzL3F1YXNhci9zcmMvdXRpbHMvZG9tLmpzIiwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL3F1YXNhckAyLjE1LjEvbm9kZV9tb2R1bGVzL3F1YXNhci9zcmMvdXRpbHMvdGhyb3R0bGUuanMiLCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vcXVhc2FyQDIuMTUuMS9ub2RlX21vZHVsZXMvcXVhc2FyL3NyYy9kaXJlY3RpdmVzL1JpcHBsZS5qcyIsIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9xdWFzYXJAMi4xNS4xL25vZGVfbW9kdWxlcy9xdWFzYXIvc3JjL2NvbXBvc2FibGVzL3ByaXZhdGUvdXNlLWFsaWduLmpzIiwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL3F1YXNhckAyLjE1LjEvbm9kZV9tb2R1bGVzL3F1YXNhci9zcmMvY29tcG9zYWJsZXMvcHJpdmF0ZS91c2Utcm91dGVyLWxpbmsuanMiLCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vcXVhc2FyQDIuMTUuMS9ub2RlX21vZHVsZXMvcXVhc2FyL3NyYy9jb21wb25lbnRzL2J0bi91c2UtYnRuLmpzIiwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL3F1YXNhckAyLjE1LjEvbm9kZV9tb2R1bGVzL3F1YXNhci9zcmMvY29tcG9uZW50cy9idG4vUUJ0bi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1bnJlZiB9IGZyb20gJ3Z1ZSdcblxuZXhwb3J0IGZ1bmN0aW9uIG9mZnNldCAoZWwpIHtcbiAgaWYgKGVsID09PSB3aW5kb3cpIHtcbiAgICByZXR1cm4geyB0b3A6IDAsIGxlZnQ6IDAgfVxuICB9XG4gIGNvbnN0IHsgdG9wLCBsZWZ0IH0gPSBlbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKVxuICByZXR1cm4geyB0b3AsIGxlZnQgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gc3R5bGUgKGVsLCBwcm9wZXJ0eSkge1xuICByZXR1cm4gd2luZG93LmdldENvbXB1dGVkU3R5bGUoZWwpLmdldFByb3BlcnR5VmFsdWUocHJvcGVydHkpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBoZWlnaHQgKGVsKSB7XG4gIHJldHVybiBlbCA9PT0gd2luZG93XG4gICAgPyB3aW5kb3cuaW5uZXJIZWlnaHRcbiAgICA6IGVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmhlaWdodFxufVxuXG5leHBvcnQgZnVuY3Rpb24gd2lkdGggKGVsKSB7XG4gIHJldHVybiBlbCA9PT0gd2luZG93XG4gICAgPyB3aW5kb3cuaW5uZXJXaWR0aFxuICAgIDogZWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkud2lkdGhcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNzcyAoZWxlbWVudCwgY3NzKSB7XG4gIGNvbnN0IHN0eWxlID0gZWxlbWVudC5zdHlsZVxuXG4gIGZvciAoY29uc3QgcHJvcCBpbiBjc3MpIHtcbiAgICBzdHlsZVsgcHJvcCBdID0gY3NzWyBwcm9wIF1cbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gY3NzQmF0Y2ggKGVsZW1lbnRzLCBzdHlsZSkge1xuICBlbGVtZW50cy5mb3JFYWNoKGVsID0+IGNzcyhlbCwgc3R5bGUpKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVhZHkgKGZuKSB7XG4gIGlmICh0eXBlb2YgZm4gIT09ICdmdW5jdGlvbicpIHtcbiAgICByZXR1cm5cbiAgfVxuXG4gIGlmIChkb2N1bWVudC5yZWFkeVN0YXRlICE9PSAnbG9hZGluZycpIHtcbiAgICByZXR1cm4gZm4oKVxuICB9XG5cbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGZuLCBmYWxzZSlcbn1cblxuLy8gaW50ZXJuYWxcbmV4cG9ydCBmdW5jdGlvbiBnZXRFbGVtZW50IChlbCkge1xuICBpZiAoZWwgPT09IHZvaWQgMCB8fCBlbCA9PT0gbnVsbCkge1xuICAgIHJldHVybiB2b2lkIDBcbiAgfVxuXG4gIGlmICh0eXBlb2YgZWwgPT09ICdzdHJpbmcnKSB7XG4gICAgdHJ5IHtcbiAgICAgIHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGVsKSB8fCB2b2lkIDBcbiAgICB9XG4gICAgY2F0Y2ggKGVycikge1xuICAgICAgcmV0dXJuIHZvaWQgMFxuICAgIH1cbiAgfVxuXG4gIGNvbnN0IHRhcmdldCA9IHVucmVmKGVsKVxuICBpZiAodGFyZ2V0KSB7XG4gICAgcmV0dXJuIHRhcmdldC4kZWwgfHwgdGFyZ2V0XG4gIH1cbn1cblxuLy8gaW50ZXJuYWxcbmV4cG9ydCBmdW5jdGlvbiBjaGlsZEhhc0ZvY3VzIChlbCwgZm9jdXNlZEVsKSB7XG4gIGlmIChlbCA9PT0gdm9pZCAwIHx8IGVsID09PSBudWxsIHx8IGVsLmNvbnRhaW5zKGZvY3VzZWRFbCkgPT09IHRydWUpIHtcbiAgICByZXR1cm4gdHJ1ZVxuICB9XG5cbiAgZm9yIChsZXQgbmV4dCA9IGVsLm5leHRFbGVtZW50U2libGluZzsgbmV4dCAhPT0gbnVsbDsgbmV4dCA9IG5leHQubmV4dEVsZW1lbnRTaWJsaW5nKSB7XG4gICAgaWYgKG5leHQuY29udGFpbnMoZm9jdXNlZEVsKSkge1xuICAgICAgcmV0dXJuIHRydWVcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZmFsc2Vcbn1cblxuZXhwb3J0IGRlZmF1bHQge1xuICBvZmZzZXQsXG4gIHN0eWxlLFxuICBoZWlnaHQsXG4gIHdpZHRoLFxuICBjc3MsXG4gIGNzc0JhdGNoLFxuICByZWFkeVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKGZuLCBsaW1pdCA9IDI1MCkge1xuICBsZXQgd2FpdCA9IGZhbHNlLCByZXN1bHRcblxuICByZXR1cm4gZnVuY3Rpb24gKC8qIC4uLmFyZ3MgKi8pIHtcbiAgICBpZiAod2FpdCA9PT0gZmFsc2UpIHtcbiAgICAgIHdhaXQgPSB0cnVlXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHsgd2FpdCA9IGZhbHNlIH0sIGxpbWl0KVxuICAgICAgcmVzdWx0ID0gZm4uYXBwbHkodGhpcywgYXJndW1lbnRzKVxuICAgIH1cblxuICAgIHJldHVybiByZXN1bHRcbiAgfVxufVxuIiwiaW1wb3J0IHsgY3JlYXRlRGlyZWN0aXZlIH0gZnJvbSAnLi4vdXRpbHMvcHJpdmF0ZS9jcmVhdGUuanMnXG5pbXBvcnQgeyBjc3MgfSBmcm9tICcuLi91dGlscy9kb20uanMnXG5pbXBvcnQgeyBwb3NpdGlvbiwgc3RvcCwgYWRkRXZ0LCBjbGVhbkV2dCB9IGZyb20gJy4uL3V0aWxzL2V2ZW50LmpzJ1xuaW1wb3J0IHsgaXNLZXlDb2RlIH0gZnJvbSAnLi4vdXRpbHMvcHJpdmF0ZS9rZXktY29tcG9zaXRpb24uanMnXG5pbXBvcnQgdGhyb3R0bGUgZnJvbSAnLi4vdXRpbHMvdGhyb3R0bGUuanMnXG5pbXBvcnQgZ2V0U1NSUHJvcHMgZnJvbSAnLi4vdXRpbHMvcHJpdmF0ZS9ub29wLXNzci1kaXJlY3RpdmUtdHJhbnNmb3JtLmpzJ1xuXG5mdW5jdGlvbiBzaG93UmlwcGxlIChldnQsIGVsLCBjdHgsIGZvcmNlQ2VudGVyKSB7XG4gIGN0eC5tb2RpZmllcnMuc3RvcCA9PT0gdHJ1ZSAmJiBzdG9wKGV2dClcblxuICBjb25zdCBjb2xvciA9IGN0eC5tb2RpZmllcnMuY29sb3JcbiAgbGV0IGNlbnRlciA9IGN0eC5tb2RpZmllcnMuY2VudGVyXG4gIGNlbnRlciA9IGNlbnRlciA9PT0gdHJ1ZSB8fCBmb3JjZUNlbnRlciA9PT0gdHJ1ZVxuXG4gIGNvbnN0XG4gICAgbm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKSxcbiAgICBpbm5lck5vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyksXG4gICAgcG9zID0gcG9zaXRpb24oZXZ0KSxcbiAgICB7IGxlZnQsIHRvcCwgd2lkdGgsIGhlaWdodCB9ID0gZWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCksXG4gICAgZGlhbWV0ZXIgPSBNYXRoLnNxcnQod2lkdGggKiB3aWR0aCArIGhlaWdodCAqIGhlaWdodCksXG4gICAgcmFkaXVzID0gZGlhbWV0ZXIgLyAyLFxuICAgIGNlbnRlclggPSBgJHsgKHdpZHRoIC0gZGlhbWV0ZXIpIC8gMiB9cHhgLFxuICAgIHggPSBjZW50ZXIgPyBjZW50ZXJYIDogYCR7IHBvcy5sZWZ0IC0gbGVmdCAtIHJhZGl1cyB9cHhgLFxuICAgIGNlbnRlclkgPSBgJHsgKGhlaWdodCAtIGRpYW1ldGVyKSAvIDIgfXB4YCxcbiAgICB5ID0gY2VudGVyID8gY2VudGVyWSA6IGAkeyBwb3MudG9wIC0gdG9wIC0gcmFkaXVzIH1weGBcblxuICBpbm5lck5vZGUuY2xhc3NOYW1lID0gJ3EtcmlwcGxlX19pbm5lcidcbiAgY3NzKGlubmVyTm9kZSwge1xuICAgIGhlaWdodDogYCR7IGRpYW1ldGVyIH1weGAsXG4gICAgd2lkdGg6IGAkeyBkaWFtZXRlciB9cHhgLFxuICAgIHRyYW5zZm9ybTogYHRyYW5zbGF0ZTNkKCR7IHggfSwkeyB5IH0sMCkgc2NhbGUzZCguMiwuMiwxKWAsXG4gICAgb3BhY2l0eTogMFxuICB9KVxuXG4gIG5vZGUuY2xhc3NOYW1lID0gYHEtcmlwcGxlJHsgY29sb3IgPyAnIHRleHQtJyArIGNvbG9yIDogJycgfWBcbiAgbm9kZS5zZXRBdHRyaWJ1dGUoJ2RpcicsICdsdHInKVxuICBub2RlLmFwcGVuZENoaWxkKGlubmVyTm9kZSlcbiAgZWwuYXBwZW5kQ2hpbGQobm9kZSlcblxuICBjb25zdCBhYm9ydCA9ICgpID0+IHtcbiAgICBub2RlLnJlbW92ZSgpXG4gICAgY2xlYXJUaW1lb3V0KHRpbWVyKVxuICB9XG4gIGN0eC5hYm9ydC5wdXNoKGFib3J0KVxuXG4gIGxldCB0aW1lciA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgIGlubmVyTm9kZS5jbGFzc0xpc3QuYWRkKCdxLXJpcHBsZV9faW5uZXItLWVudGVyJylcbiAgICBpbm5lck5vZGUuc3R5bGUudHJhbnNmb3JtID0gYHRyYW5zbGF0ZTNkKCR7IGNlbnRlclggfSwkeyBjZW50ZXJZIH0sMCkgc2NhbGUzZCgxLDEsMSlgXG4gICAgaW5uZXJOb2RlLnN0eWxlLm9wYWNpdHkgPSAwLjJcblxuICAgIHRpbWVyID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBpbm5lck5vZGUuY2xhc3NMaXN0LnJlbW92ZSgncS1yaXBwbGVfX2lubmVyLS1lbnRlcicpXG4gICAgICBpbm5lck5vZGUuY2xhc3NMaXN0LmFkZCgncS1yaXBwbGVfX2lubmVyLS1sZWF2ZScpXG4gICAgICBpbm5lck5vZGUuc3R5bGUub3BhY2l0eSA9IDBcblxuICAgICAgdGltZXIgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgbm9kZS5yZW1vdmUoKVxuICAgICAgICBjdHguYWJvcnQuc3BsaWNlKGN0eC5hYm9ydC5pbmRleE9mKGFib3J0KSwgMSlcbiAgICAgIH0sIDI3NSlcbiAgICB9LCAyNTApXG4gIH0sIDUwKVxufVxuXG5mdW5jdGlvbiB1cGRhdGVNb2RpZmllcnMgKGN0eCwgeyBtb2RpZmllcnMsIHZhbHVlLCBhcmcgfSkge1xuICBjb25zdCBjZmcgPSBPYmplY3QuYXNzaWduKHt9LCBjdHguY2ZnLnJpcHBsZSwgbW9kaWZpZXJzLCB2YWx1ZSlcbiAgY3R4Lm1vZGlmaWVycyA9IHtcbiAgICBlYXJseTogY2ZnLmVhcmx5ID09PSB0cnVlLFxuICAgIHN0b3A6IGNmZy5zdG9wID09PSB0cnVlLFxuICAgIGNlbnRlcjogY2ZnLmNlbnRlciA9PT0gdHJ1ZSxcbiAgICBjb2xvcjogY2ZnLmNvbG9yIHx8IGFyZyxcbiAgICBrZXlDb2RlczogW10uY29uY2F0KGNmZy5rZXlDb2RlcyB8fCAxMylcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVEaXJlY3RpdmUoX19RVUFTQVJfU1NSX1NFUlZFUl9fXG4gID8geyBuYW1lOiAncmlwcGxlJywgZ2V0U1NSUHJvcHMgfVxuICA6IHtcbiAgICAgIG5hbWU6ICdyaXBwbGUnLFxuXG4gICAgICBiZWZvcmVNb3VudCAoZWwsIGJpbmRpbmcpIHtcbiAgICAgICAgY29uc3QgY2ZnID0gYmluZGluZy5pbnN0YW5jZS4kLmFwcENvbnRleHQuY29uZmlnLmdsb2JhbFByb3BlcnRpZXMuJHEuY29uZmlnIHx8IHt9XG5cbiAgICAgICAgaWYgKGNmZy5yaXBwbGUgPT09IGZhbHNlKSB7XG4gICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBjdHggPSB7XG4gICAgICAgICAgY2ZnLFxuICAgICAgICAgIGVuYWJsZWQ6IGJpbmRpbmcudmFsdWUgIT09IGZhbHNlLFxuICAgICAgICAgIG1vZGlmaWVyczoge30sXG4gICAgICAgICAgYWJvcnQ6IFtdLFxuXG4gICAgICAgICAgc3RhcnQgKGV2dCkge1xuICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICBjdHguZW5hYmxlZCA9PT0gdHJ1ZVxuICAgICAgICAgICAgICAmJiBldnQucVNraXBSaXBwbGUgIT09IHRydWVcbiAgICAgICAgICAgICAgJiYgZXZ0LnR5cGUgPT09IChjdHgubW9kaWZpZXJzLmVhcmx5ID09PSB0cnVlID8gJ3BvaW50ZXJkb3duJyA6ICdjbGljaycpXG4gICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgc2hvd1JpcHBsZShldnQsIGVsLCBjdHgsIGV2dC5xS2V5RXZlbnQgPT09IHRydWUpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSxcblxuICAgICAgICAgIGtleXN0YXJ0OiB0aHJvdHRsZShldnQgPT4ge1xuICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICBjdHguZW5hYmxlZCA9PT0gdHJ1ZVxuICAgICAgICAgICAgICAmJiBldnQucVNraXBSaXBwbGUgIT09IHRydWVcbiAgICAgICAgICAgICAgJiYgaXNLZXlDb2RlKGV2dCwgY3R4Lm1vZGlmaWVycy5rZXlDb2RlcykgPT09IHRydWVcbiAgICAgICAgICAgICAgJiYgZXZ0LnR5cGUgPT09IGBrZXkkeyBjdHgubW9kaWZpZXJzLmVhcmx5ID09PSB0cnVlID8gJ2Rvd24nIDogJ3VwJyB9YFxuICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgIHNob3dSaXBwbGUoZXZ0LCBlbCwgY3R4LCB0cnVlKVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sIDMwMClcbiAgICAgICAgfVxuXG4gICAgICAgIHVwZGF0ZU1vZGlmaWVycyhjdHgsIGJpbmRpbmcpXG5cbiAgICAgICAgZWwuX19xcmlwcGxlID0gY3R4XG5cbiAgICAgICAgYWRkRXZ0KGN0eCwgJ21haW4nLCBbXG4gICAgICAgICAgWyBlbCwgJ3BvaW50ZXJkb3duJywgJ3N0YXJ0JywgJ3Bhc3NpdmUnIF0sXG4gICAgICAgICAgWyBlbCwgJ2NsaWNrJywgJ3N0YXJ0JywgJ3Bhc3NpdmUnIF0sXG4gICAgICAgICAgWyBlbCwgJ2tleWRvd24nLCAna2V5c3RhcnQnLCAncGFzc2l2ZScgXSxcbiAgICAgICAgICBbIGVsLCAna2V5dXAnLCAna2V5c3RhcnQnLCAncGFzc2l2ZScgXVxuICAgICAgICBdKVxuICAgICAgfSxcblxuICAgICAgdXBkYXRlZCAoZWwsIGJpbmRpbmcpIHtcbiAgICAgICAgaWYgKGJpbmRpbmcub2xkVmFsdWUgIT09IGJpbmRpbmcudmFsdWUpIHtcbiAgICAgICAgICBjb25zdCBjdHggPSBlbC5fX3FyaXBwbGVcbiAgICAgICAgICBpZiAoY3R4ICE9PSB2b2lkIDApIHtcbiAgICAgICAgICAgIGN0eC5lbmFibGVkID0gYmluZGluZy52YWx1ZSAhPT0gZmFsc2VcblxuICAgICAgICAgICAgaWYgKGN0eC5lbmFibGVkID09PSB0cnVlICYmIE9iamVjdChiaW5kaW5nLnZhbHVlKSA9PT0gYmluZGluZy52YWx1ZSkge1xuICAgICAgICAgICAgICB1cGRhdGVNb2RpZmllcnMoY3R4LCBiaW5kaW5nKVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSxcblxuICAgICAgYmVmb3JlVW5tb3VudCAoZWwpIHtcbiAgICAgICAgY29uc3QgY3R4ID0gZWwuX19xcmlwcGxlXG4gICAgICAgIGlmIChjdHggIT09IHZvaWQgMCkge1xuICAgICAgICAgIGN0eC5hYm9ydC5mb3JFYWNoKGZuID0+IHsgZm4oKSB9KVxuICAgICAgICAgIGNsZWFuRXZ0KGN0eCwgJ21haW4nKVxuICAgICAgICAgIGRlbGV0ZSBlbC5fcXJpcHBsZVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuKVxuIiwiaW1wb3J0IHsgY29tcHV0ZWQgfSBmcm9tICd2dWUnXG5cbmV4cG9ydCBjb25zdCBhbGlnbk1hcCA9IHtcbiAgbGVmdDogJ3N0YXJ0JyxcbiAgY2VudGVyOiAnY2VudGVyJyxcbiAgcmlnaHQ6ICdlbmQnLFxuICBiZXR3ZWVuOiAnYmV0d2VlbicsXG4gIGFyb3VuZDogJ2Fyb3VuZCcsXG4gIGV2ZW5seTogJ2V2ZW5seScsXG4gIHN0cmV0Y2g6ICdzdHJldGNoJ1xufVxuXG5leHBvcnQgY29uc3QgYWxpZ25WYWx1ZXMgPSBPYmplY3Qua2V5cyhhbGlnbk1hcClcblxuZXhwb3J0IGNvbnN0IHVzZUFsaWduUHJvcHMgPSB7XG4gIGFsaWduOiB7XG4gICAgdHlwZTogU3RyaW5nLFxuICAgIHZhbGlkYXRvcjogdiA9PiBhbGlnblZhbHVlcy5pbmNsdWRlcyh2KVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChwcm9wcykge1xuICAvLyByZXR1cm4gYWxpZ25DbGFzc1xuICByZXR1cm4gY29tcHV0ZWQoKCkgPT4ge1xuICAgIGNvbnN0IGFsaWduID0gcHJvcHMuYWxpZ24gPT09IHZvaWQgMFxuICAgICAgPyBwcm9wcy52ZXJ0aWNhbCA9PT0gdHJ1ZSA/ICdzdHJldGNoJyA6ICdsZWZ0J1xuICAgICAgOiBwcm9wcy5hbGlnblxuXG4gICAgcmV0dXJuIGAkeyBwcm9wcy52ZXJ0aWNhbCA9PT0gdHJ1ZSA/ICdpdGVtcycgOiAnanVzdGlmeScgfS0keyBhbGlnbk1hcFsgYWxpZ24gXSB9YFxuICB9KVxufVxuIiwiLypcbiAqIEluc3BpcmVkIGJ5IFJvdXRlckxpbmsgZnJvbSBWdWUgUm91dGVyXG4gKiAgLS0+IEFQSSBzaG91bGQgbWF0Y2ghXG4gKi9cblxuaW1wb3J0IHsgY29tcHV0ZWQsIGdldEN1cnJlbnRJbnN0YW5jZSB9IGZyb20gJ3Z1ZSdcblxuaW1wb3J0IHsgdm1IYXNSb3V0ZXIgfSBmcm9tICcuLi8uLi91dGlscy9wcml2YXRlL3ZtLmpzJ1xuXG4vLyBHZXQgdGhlIG9yaWdpbmFsIHBhdGggdmFsdWUgb2YgYSByZWNvcmQgYnkgZm9sbG93aW5nIGl0cyBhbGlhc09mXG5mdW5jdGlvbiBnZXRPcmlnaW5hbFBhdGggKHJlY29yZCkge1xuICByZXR1cm4gcmVjb3JkXG4gICAgPyAoXG4gICAgICAgIHJlY29yZC5hbGlhc09mXG4gICAgICAgICAgPyByZWNvcmQuYWxpYXNPZi5wYXRoXG4gICAgICAgICAgOiByZWNvcmQucGF0aFxuICAgICAgKSA6ICcnXG59XG5cbmZ1bmN0aW9uIGlzU2FtZVJvdXRlUmVjb3JkIChhLCBiKSB7XG4gIC8vIHNpbmNlIHRoZSBvcmlnaW5hbCByZWNvcmQgaGFzIGFuIHVuZGVmaW5lZCB2YWx1ZSBmb3IgYWxpYXNPZlxuICAvLyBidXQgYWxsIGFsaWFzZXMgcG9pbnQgdG8gdGhlIG9yaWdpbmFsIHJlY29yZCwgdGhpcyB3aWxsIGFsd2F5cyBjb21wYXJlXG4gIC8vIHRoZSBvcmlnaW5hbCByZWNvcmRcbiAgcmV0dXJuIChhLmFsaWFzT2YgfHwgYSkgPT09IChiLmFsaWFzT2YgfHwgYilcbn1cblxuZnVuY3Rpb24gaW5jbHVkZXNQYXJhbXMgKG91dGVyLCBpbm5lcikge1xuICBmb3IgKGNvbnN0IGtleSBpbiBpbm5lcikge1xuICAgIGNvbnN0XG4gICAgICBpbm5lclZhbHVlID0gaW5uZXJbIGtleSBdLFxuICAgICAgb3V0ZXJWYWx1ZSA9IG91dGVyWyBrZXkgXVxuXG4gICAgaWYgKHR5cGVvZiBpbm5lclZhbHVlID09PSAnc3RyaW5nJykge1xuICAgICAgaWYgKGlubmVyVmFsdWUgIT09IG91dGVyVmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICB9XG4gICAgfVxuICAgIGVsc2UgaWYgKFxuICAgICAgQXJyYXkuaXNBcnJheShvdXRlclZhbHVlKSA9PT0gZmFsc2VcbiAgICAgIHx8IG91dGVyVmFsdWUubGVuZ3RoICE9PSBpbm5lclZhbHVlLmxlbmd0aFxuICAgICAgfHwgaW5uZXJWYWx1ZS5zb21lKCh2YWx1ZSwgaSkgPT4gdmFsdWUgIT09IG91dGVyVmFsdWVbIGkgXSlcbiAgICApIHtcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0cnVlXG59XG5cbmZ1bmN0aW9uIGlzRXF1aXZhbGVudEFycmF5IChhLCBiKSB7XG4gIHJldHVybiBBcnJheS5pc0FycmF5KGIpID09PSB0cnVlXG4gICAgPyBhLmxlbmd0aCA9PT0gYi5sZW5ndGggJiYgYS5ldmVyeSgodmFsdWUsIGkpID0+IHZhbHVlID09PSBiWyBpIF0pXG4gICAgOiBhLmxlbmd0aCA9PT0gMSAmJiBhWyAwIF0gPT09IGJcbn1cblxuZnVuY3Rpb24gaXNTYW1lUm91dGVMb2NhdGlvblBhcmFtc1ZhbHVlIChhLCBiKSB7XG4gIHJldHVybiBBcnJheS5pc0FycmF5KGEpID09PSB0cnVlXG4gICAgPyBpc0VxdWl2YWxlbnRBcnJheShhLCBiKVxuICAgIDogKFxuICAgICAgICBBcnJheS5pc0FycmF5KGIpID09PSB0cnVlXG4gICAgICAgICAgPyBpc0VxdWl2YWxlbnRBcnJheShiLCBhKVxuICAgICAgICAgIDogYSA9PT0gYlxuICAgICAgKVxufVxuXG5mdW5jdGlvbiBpc1NhbWVSb3V0ZUxvY2F0aW9uUGFyYW1zIChhLCBiKSB7XG4gIGlmIChPYmplY3Qua2V5cyhhKS5sZW5ndGggIT09IE9iamVjdC5rZXlzKGIpLmxlbmd0aCkge1xuICAgIHJldHVybiBmYWxzZVxuICB9XG5cbiAgZm9yIChjb25zdCBrZXkgaW4gYSkge1xuICAgIGlmIChpc1NhbWVSb3V0ZUxvY2F0aW9uUGFyYW1zVmFsdWUoYVsga2V5IF0sIGJbIGtleSBdKSA9PT0gZmFsc2UpIHtcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0cnVlXG59XG5cbmV4cG9ydCBjb25zdCB1c2VSb3V0ZXJMaW5rUHJvcHMgPSB7XG4gIC8vIHJvdXRlci1saW5rXG4gIHRvOiBbIFN0cmluZywgT2JqZWN0IF0sXG4gIHJlcGxhY2U6IEJvb2xlYW4sXG4gIGV4YWN0OiBCb29sZWFuLFxuICBhY3RpdmVDbGFzczoge1xuICAgIHR5cGU6IFN0cmluZyxcbiAgICBkZWZhdWx0OiAncS1yb3V0ZXItbGluay0tYWN0aXZlJ1xuICB9LFxuICBleGFjdEFjdGl2ZUNsYXNzOiB7XG4gICAgdHlwZTogU3RyaW5nLFxuICAgIGRlZmF1bHQ6ICdxLXJvdXRlci1saW5rLS1leGFjdC1hY3RpdmUnXG4gIH0sXG5cbiAgLy8gcmVndWxhciA8YT4gbGlua1xuICBocmVmOiBTdHJpbmcsXG4gIHRhcmdldDogU3RyaW5nLFxuXG4gIC8vIHN0YXRlXG4gIGRpc2FibGU6IEJvb2xlYW5cbn1cblxuLy8gZXh0ZXJuYWwgcHJvcHM6IHR5cGUsIHRhZ1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoeyBmYWxsYmFja1RhZywgdXNlRGlzYWJsZUZvclJvdXRlckxpbmtQcm9wcyA9IHRydWUgfSA9IHt9KSB7XG4gIGNvbnN0IHZtID0gZ2V0Q3VycmVudEluc3RhbmNlKClcbiAgY29uc3QgeyBwcm9wcywgcHJveHksIGVtaXQgfSA9IHZtXG5cbiAgY29uc3QgaGFzUm91dGVyID0gdm1IYXNSb3V0ZXIodm0pXG4gIGNvbnN0IGhhc0hyZWZMaW5rID0gY29tcHV0ZWQoKCkgPT4gcHJvcHMuZGlzYWJsZSAhPT0gdHJ1ZSAmJiBwcm9wcy5ocmVmICE9PSB2b2lkIDApXG5cbiAgLy8gZm9yIHBlcmYgcmVhc29ucywgd2UgdXNlIG1pbmltdW0gYW1vdW50IG9mIHJ1bnRpbWUgd29ya1xuICBjb25zdCBoYXNSb3V0ZXJMaW5rUHJvcHMgPSB1c2VEaXNhYmxlRm9yUm91dGVyTGlua1Byb3BzID09PSB0cnVlXG4gICAgPyBjb21wdXRlZCgoKSA9PlxuICAgICAgaGFzUm91dGVyID09PSB0cnVlXG4gICAgICAmJiBwcm9wcy5kaXNhYmxlICE9PSB0cnVlXG4gICAgICAmJiBoYXNIcmVmTGluay52YWx1ZSAhPT0gdHJ1ZVxuICAgICAgJiYgcHJvcHMudG8gIT09IHZvaWQgMCAmJiBwcm9wcy50byAhPT0gbnVsbCAmJiBwcm9wcy50byAhPT0gJydcbiAgICApXG4gICAgOiBjb21wdXRlZCgoKSA9PlxuICAgICAgaGFzUm91dGVyID09PSB0cnVlXG4gICAgICAmJiBoYXNIcmVmTGluay52YWx1ZSAhPT0gdHJ1ZVxuICAgICAgJiYgcHJvcHMudG8gIT09IHZvaWQgMCAmJiBwcm9wcy50byAhPT0gbnVsbCAmJiBwcm9wcy50byAhPT0gJydcbiAgICApXG5cbiAgY29uc3QgcmVzb2x2ZWRMaW5rID0gY29tcHV0ZWQoKCkgPT4gKFxuICAgIGhhc1JvdXRlckxpbmtQcm9wcy52YWx1ZSA9PT0gdHJ1ZVxuICAgICAgPyBnZXRMaW5rKHByb3BzLnRvKVxuICAgICAgOiBudWxsXG4gICkpXG5cbiAgY29uc3QgaGFzUm91dGVyTGluayA9IGNvbXB1dGVkKCgpID0+IHJlc29sdmVkTGluay52YWx1ZSAhPT0gbnVsbClcbiAgY29uc3QgaGFzTGluayA9IGNvbXB1dGVkKCgpID0+IGhhc0hyZWZMaW5rLnZhbHVlID09PSB0cnVlIHx8IGhhc1JvdXRlckxpbmsudmFsdWUgPT09IHRydWUpXG5cbiAgY29uc3QgbGlua1RhZyA9IGNvbXB1dGVkKCgpID0+IChcbiAgICBwcm9wcy50eXBlID09PSAnYScgfHwgaGFzTGluay52YWx1ZSA9PT0gdHJ1ZVxuICAgICAgPyAnYSdcbiAgICAgIDogKHByb3BzLnRhZyB8fCBmYWxsYmFja1RhZyB8fCAnZGl2JylcbiAgKSlcblxuICBjb25zdCBsaW5rQXR0cnMgPSBjb21wdXRlZCgoKSA9PiAoXG4gICAgaGFzSHJlZkxpbmsudmFsdWUgPT09IHRydWVcbiAgICAgID8ge1xuICAgICAgICAgIGhyZWY6IHByb3BzLmhyZWYsXG4gICAgICAgICAgdGFyZ2V0OiBwcm9wcy50YXJnZXRcbiAgICAgICAgfVxuICAgICAgOiAoXG4gICAgICAgICAgaGFzUm91dGVyTGluay52YWx1ZSA9PT0gdHJ1ZVxuICAgICAgICAgICAgPyB7XG4gICAgICAgICAgICAgICAgaHJlZjogcmVzb2x2ZWRMaW5rLnZhbHVlLmhyZWYsXG4gICAgICAgICAgICAgICAgdGFyZ2V0OiBwcm9wcy50YXJnZXRcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgOiB7fVxuICAgICAgICApXG4gICkpXG5cbiAgY29uc3QgbGlua0FjdGl2ZUluZGV4ID0gY29tcHV0ZWQoKCkgPT4ge1xuICAgIGlmIChoYXNSb3V0ZXJMaW5rLnZhbHVlID09PSBmYWxzZSkge1xuICAgICAgcmV0dXJuIC0xXG4gICAgfVxuXG4gICAgY29uc3RcbiAgICAgIHsgbWF0Y2hlZCB9ID0gcmVzb2x2ZWRMaW5rLnZhbHVlLFxuICAgICAgeyBsZW5ndGggfSA9IG1hdGNoZWQsXG4gICAgICByb3V0ZU1hdGNoZWQgPSBtYXRjaGVkWyBsZW5ndGggLSAxIF1cblxuICAgIGlmIChyb3V0ZU1hdGNoZWQgPT09IHZvaWQgMCkge1xuICAgICAgcmV0dXJuIC0xXG4gICAgfVxuXG4gICAgY29uc3QgY3VycmVudE1hdGNoZWQgPSBwcm94eS4kcm91dGUubWF0Y2hlZFxuXG4gICAgaWYgKGN1cnJlbnRNYXRjaGVkLmxlbmd0aCA9PT0gMCkge1xuICAgICAgcmV0dXJuIC0xXG4gICAgfVxuXG4gICAgY29uc3QgaW5kZXggPSBjdXJyZW50TWF0Y2hlZC5maW5kSW5kZXgoXG4gICAgICBpc1NhbWVSb3V0ZVJlY29yZC5iaW5kKG51bGwsIHJvdXRlTWF0Y2hlZClcbiAgICApXG5cbiAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICByZXR1cm4gaW5kZXhcbiAgICB9XG5cbiAgICAvLyBwb3NzaWJsZSBwYXJlbnQgcmVjb3JkXG4gICAgY29uc3QgcGFyZW50UmVjb3JkUGF0aCA9IGdldE9yaWdpbmFsUGF0aChtYXRjaGVkWyBsZW5ndGggLSAyIF0pXG5cbiAgICByZXR1cm4gKFxuICAgICAgLy8gd2UgYXJlIGRlYWxpbmcgd2l0aCBuZXN0ZWQgcm91dGVzXG4gICAgICBsZW5ndGggPiAxXG4gICAgICAvLyBpZiB0aGUgcGFyZW50IGFuZCBtYXRjaGVkIHJvdXRlIGhhdmUgdGhlIHNhbWUgcGF0aCwgdGhpcyBsaW5rIGlzXG4gICAgICAvLyByZWZlcnJpbmcgdG8gdGhlIGVtcHR5IGNoaWxkLiBPciB3ZSBjdXJyZW50bHkgYXJlIG9uIGEgZGlmZmVyZW50XG4gICAgICAvLyBjaGlsZCBvZiB0aGUgc2FtZSBwYXJlbnRcbiAgICAgICYmIGdldE9yaWdpbmFsUGF0aChyb3V0ZU1hdGNoZWQpID09PSBwYXJlbnRSZWNvcmRQYXRoXG4gICAgICAvLyBhdm9pZCBjb21wYXJpbmcgdGhlIGNoaWxkIHdpdGggaXRzIHBhcmVudFxuICAgICAgJiYgY3VycmVudE1hdGNoZWRbIGN1cnJlbnRNYXRjaGVkLmxlbmd0aCAtIDEgXS5wYXRoICE9PSBwYXJlbnRSZWNvcmRQYXRoXG4gICAgICAgID8gY3VycmVudE1hdGNoZWQuZmluZEluZGV4KFxuICAgICAgICAgIGlzU2FtZVJvdXRlUmVjb3JkLmJpbmQobnVsbCwgbWF0Y2hlZFsgbGVuZ3RoIC0gMiBdKVxuICAgICAgICApXG4gICAgICAgIDogaW5kZXhcbiAgICApXG4gIH0pXG5cbiAgY29uc3QgbGlua0lzQWN0aXZlID0gY29tcHV0ZWQoKCkgPT5cbiAgICBoYXNSb3V0ZXJMaW5rLnZhbHVlID09PSB0cnVlXG4gICAgJiYgbGlua0FjdGl2ZUluZGV4LnZhbHVlICE9PSAtMVxuICAgICYmIGluY2x1ZGVzUGFyYW1zKHByb3h5LiRyb3V0ZS5wYXJhbXMsIHJlc29sdmVkTGluay52YWx1ZS5wYXJhbXMpXG4gIClcblxuICBjb25zdCBsaW5rSXNFeGFjdEFjdGl2ZSA9IGNvbXB1dGVkKCgpID0+XG4gICAgbGlua0lzQWN0aXZlLnZhbHVlID09PSB0cnVlXG4gICAgICAmJiBsaW5rQWN0aXZlSW5kZXgudmFsdWUgPT09IHByb3h5LiRyb3V0ZS5tYXRjaGVkLmxlbmd0aCAtIDFcbiAgICAgICYmIGlzU2FtZVJvdXRlTG9jYXRpb25QYXJhbXMocHJveHkuJHJvdXRlLnBhcmFtcywgcmVzb2x2ZWRMaW5rLnZhbHVlLnBhcmFtcylcbiAgKVxuXG4gIGNvbnN0IGxpbmtDbGFzcyA9IGNvbXB1dGVkKCgpID0+IChcbiAgICBoYXNSb3V0ZXJMaW5rLnZhbHVlID09PSB0cnVlXG4gICAgICA/IChcbiAgICAgICAgICBsaW5rSXNFeGFjdEFjdGl2ZS52YWx1ZSA9PT0gdHJ1ZVxuICAgICAgICAgICAgPyBgICR7IHByb3BzLmV4YWN0QWN0aXZlQ2xhc3MgfSAkeyBwcm9wcy5hY3RpdmVDbGFzcyB9YFxuICAgICAgICAgICAgOiAoXG4gICAgICAgICAgICAgICAgcHJvcHMuZXhhY3QgPT09IHRydWVcbiAgICAgICAgICAgICAgICAgID8gJydcbiAgICAgICAgICAgICAgICAgIDogKGxpbmtJc0FjdGl2ZS52YWx1ZSA9PT0gdHJ1ZSA/IGAgJHsgcHJvcHMuYWN0aXZlQ2xhc3MgfWAgOiAnJylcbiAgICAgICAgICAgICAgKVxuICAgICAgICApXG4gICAgICA6ICcnXG4gICkpXG5cbiAgZnVuY3Rpb24gZ2V0TGluayAodG8pIHtcbiAgICB0cnkgeyByZXR1cm4gcHJveHkuJHJvdXRlci5yZXNvbHZlKHRvKSB9XG4gICAgY2F0Y2ggKF8pIHt9XG5cbiAgICByZXR1cm4gbnVsbFxuICB9XG5cbiAgLyoqXG4gICAqIEByZXR1cm5zIFByb21pc2U8Um91dGVyRXJyb3IgfCBmYWxzZSB8IHVuZGVmaW5lZD5cbiAgICovXG4gIGZ1bmN0aW9uIG5hdmlnYXRlVG9Sb3V0ZXJMaW5rIChcbiAgICBlLFxuICAgIHsgcmV0dXJuUm91dGVyRXJyb3IsIHRvID0gcHJvcHMudG8sIHJlcGxhY2UgPSBwcm9wcy5yZXBsYWNlIH0gPSB7fVxuICApIHtcbiAgICBpZiAocHJvcHMuZGlzYWJsZSA9PT0gdHJ1ZSkge1xuICAgICAgLy8gZW5zdXJlIG5hdGl2ZSBuYXZpZ2F0aW9uIGlzIHByZXZlbnRlZCBpbiBhbGwgY2FzZXMsXG4gICAgICAvLyBsaWtlIHdoZW4gdXNlRGlzYWJsZUZvclJvdXRlckxpbmtQcm9wcyA9PT0gZmFsc2UgKFFSb3V0ZVRhYilcbiAgICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShmYWxzZSlcbiAgICB9XG5cbiAgICBpZiAoXG4gICAgICAvLyBkb24ndCByZWRpcmVjdCB3aXRoIGNvbnRyb2wga2V5cztcbiAgICAgIC8vIHNob3VsZCBtYXRjaCBSb3V0ZXJMaW5rIGZyb20gVnVlIFJvdXRlclxuICAgICAgZS5tZXRhS2V5IHx8IGUuYWx0S2V5IHx8IGUuY3RybEtleSB8fCBlLnNoaWZ0S2V5XG5cbiAgICAgIC8vIGRvbid0IHJlZGlyZWN0IG9uIHJpZ2h0IGNsaWNrXG4gICAgICB8fCAoZS5idXR0b24gIT09IHZvaWQgMCAmJiBlLmJ1dHRvbiAhPT0gMClcblxuICAgICAgLy8gZG9uJ3QgcmVkaXJlY3QgaWYgaXQgc2hvdWxkIG9wZW4gaW4gYSBuZXcgd2luZG93XG4gICAgICB8fCBwcm9wcy50YXJnZXQgPT09ICdfYmxhbmsnXG4gICAgKSB7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKGZhbHNlKVxuICAgIH1cblxuICAgIC8vIGhpbmRlciB0aGUgbmF0aXZlIG5hdmlnYXRpb25cbiAgICBlLnByZXZlbnREZWZhdWx0KClcblxuICAgIC8vIHRoZW4oKSBjYW4gYWxzbyByZXR1cm4gYSBcInNvZnRcIiByb3V0ZXIgZXJyb3IgKFZ1ZSBSb3V0ZXIgYmVoYXZpb3IpXG4gICAgY29uc3QgcHJvbWlzZSA9IHByb3h5LiRyb3V0ZXJbIHJlcGxhY2UgPT09IHRydWUgPyAncmVwbGFjZScgOiAncHVzaCcgXSh0bylcblxuICAgIHJldHVybiByZXR1cm5Sb3V0ZXJFcnJvciA9PT0gdHJ1ZVxuICAgICAgPyBwcm9taXNlXG4gICAgICAvLyBlbHNlIGNhdGNoaW5nIGhhcmQgZXJyb3JzIGFuZCBhbHNvIFwic29mdFwiIG9uZXMgLSB0aGVuKGVyciA9PiAuLi4pXG4gICAgICA6IHByb21pc2UudGhlbigoKSA9PiB7fSkuY2F0Y2goKCkgPT4ge30pXG4gIH1cblxuICAvLyB3YXJuaW5nISBlbnN1cmUgdGhhdCB0aGUgY29tcG9uZW50IHVzaW5nIGl0IGhhcyAnY2xpY2snIGluY2x1ZGVkIGluIGl0cyAnZW1pdHMnIGRlZmluaXRpb24gcHJvcFxuICBmdW5jdGlvbiBuYXZpZ2F0ZU9uQ2xpY2sgKGUpIHtcbiAgICBpZiAoaGFzUm91dGVyTGluay52YWx1ZSA9PT0gdHJ1ZSkge1xuICAgICAgY29uc3QgZ28gPSBvcHRzID0+IG5hdmlnYXRlVG9Sb3V0ZXJMaW5rKGUsIG9wdHMpXG5cbiAgICAgIGVtaXQoJ2NsaWNrJywgZSwgZ28pXG4gICAgICBlLmRlZmF1bHRQcmV2ZW50ZWQgIT09IHRydWUgJiYgZ28oKVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIGVtaXQoJ2NsaWNrJywgZSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4ge1xuICAgIGhhc1JvdXRlckxpbmssXG4gICAgaGFzSHJlZkxpbmssXG4gICAgaGFzTGluayxcblxuICAgIGxpbmtUYWcsXG4gICAgcmVzb2x2ZWRMaW5rLFxuICAgIGxpbmtJc0FjdGl2ZSxcbiAgICBsaW5rSXNFeGFjdEFjdGl2ZSxcbiAgICBsaW5rQ2xhc3MsXG4gICAgbGlua0F0dHJzLFxuXG4gICAgZ2V0TGluayxcbiAgICBuYXZpZ2F0ZVRvUm91dGVyTGluayxcbiAgICBuYXZpZ2F0ZU9uQ2xpY2tcbiAgfVxufVxuIiwiaW1wb3J0IHsgY29tcHV0ZWQgfSBmcm9tICd2dWUnXG5cbmltcG9ydCB1c2VBbGlnbiwgeyB1c2VBbGlnblByb3BzIH0gZnJvbSAnLi4vLi4vY29tcG9zYWJsZXMvcHJpdmF0ZS91c2UtYWxpZ24uanMnXG5pbXBvcnQgdXNlU2l6ZSwgeyB1c2VTaXplUHJvcHMgfSBmcm9tICcuLi8uLi9jb21wb3NhYmxlcy9wcml2YXRlL3VzZS1zaXplLmpzJ1xuaW1wb3J0IHVzZVJvdXRlckxpbmssIHsgdXNlUm91dGVyTGlua1Byb3BzIH0gZnJvbSAnLi4vLi4vY29tcG9zYWJsZXMvcHJpdmF0ZS91c2Utcm91dGVyLWxpbmsuanMnXG5cbmV4cG9ydCBjb25zdCBidG5QYWRkaW5nID0ge1xuICBub25lOiAwLFxuICB4czogNCxcbiAgc206IDgsXG4gIG1kOiAxNixcbiAgbGc6IDI0LFxuICB4bDogMzJcbn1cblxuY29uc3QgZGVmYXVsdFNpemVzID0ge1xuICB4czogOCxcbiAgc206IDEwLFxuICBtZDogMTQsXG4gIGxnOiAyMCxcbiAgeGw6IDI0XG59XG5cbmNvbnN0IGZvcm1UeXBlcyA9IFsgJ2J1dHRvbicsICdzdWJtaXQnLCAncmVzZXQnIF1cbmNvbnN0IG1lZGlhVHlwZVJFID0gL1teXFxzXVxcL1teXFxzXS9cblxuZXhwb3J0IGNvbnN0IGJ0bkRlc2lnbk9wdGlvbnMgPSBbICdmbGF0JywgJ291dGxpbmUnLCAncHVzaCcsICd1bmVsZXZhdGVkJyBdXG5leHBvcnQgY29uc3QgZ2V0QnRuRGVzaWduID0gKHByb3BzLCBkZWZhdWx0VmFsdWUpID0+IHtcbiAgaWYgKHByb3BzLmZsYXQgPT09IHRydWUpIHJldHVybiAnZmxhdCdcbiAgaWYgKHByb3BzLm91dGxpbmUgPT09IHRydWUpIHJldHVybiAnb3V0bGluZSdcbiAgaWYgKHByb3BzLnB1c2ggPT09IHRydWUpIHJldHVybiAncHVzaCdcbiAgaWYgKHByb3BzLnVuZWxldmF0ZWQgPT09IHRydWUpIHJldHVybiAndW5lbGV2YXRlZCdcbiAgcmV0dXJuIGRlZmF1bHRWYWx1ZVxufVxuZXhwb3J0IGNvbnN0IGdldEJ0bkRlc2lnbkF0dHIgPSBwcm9wcyA9PiB7XG4gIGNvbnN0IGRlc2lnbiA9IGdldEJ0bkRlc2lnbihwcm9wcylcbiAgcmV0dXJuIGRlc2lnbiAhPT0gdm9pZCAwXG4gICAgPyB7IFsgZGVzaWduIF06IHRydWUgfVxuICAgIDoge31cbn1cblxuZXhwb3J0IGNvbnN0IHVzZUJ0blByb3BzID0ge1xuICAuLi51c2VTaXplUHJvcHMsXG4gIC4uLnVzZVJvdXRlckxpbmtQcm9wcyxcblxuICB0eXBlOiB7XG4gICAgdHlwZTogU3RyaW5nLFxuICAgIGRlZmF1bHQ6ICdidXR0b24nXG4gIH0sXG5cbiAgbGFiZWw6IFsgTnVtYmVyLCBTdHJpbmcgXSxcbiAgaWNvbjogU3RyaW5nLFxuICBpY29uUmlnaHQ6IFN0cmluZyxcblxuICAuLi5idG5EZXNpZ25PcHRpb25zLnJlZHVjZShcbiAgICAoYWNjLCB2YWwpID0+IChhY2NbIHZhbCBdID0gQm9vbGVhbikgJiYgYWNjLFxuICAgIHt9XG4gICksXG5cbiAgc3F1YXJlOiBCb29sZWFuLFxuICByb3VuZDogQm9vbGVhbixcbiAgcm91bmRlZDogQm9vbGVhbixcbiAgZ2xvc3N5OiBCb29sZWFuLFxuXG4gIHNpemU6IFN0cmluZyxcbiAgZmFiOiBCb29sZWFuLFxuICBmYWJNaW5pOiBCb29sZWFuLFxuICBwYWRkaW5nOiBTdHJpbmcsXG5cbiAgY29sb3I6IFN0cmluZyxcbiAgdGV4dENvbG9yOiBTdHJpbmcsXG4gIG5vQ2FwczogQm9vbGVhbixcbiAgbm9XcmFwOiBCb29sZWFuLFxuICBkZW5zZTogQm9vbGVhbixcblxuICB0YWJpbmRleDogWyBOdW1iZXIsIFN0cmluZyBdLFxuXG4gIHJpcHBsZToge1xuICAgIHR5cGU6IFsgQm9vbGVhbiwgT2JqZWN0IF0sXG4gICAgZGVmYXVsdDogdHJ1ZVxuICB9LFxuXG4gIGFsaWduOiB7XG4gICAgLi4udXNlQWxpZ25Qcm9wcy5hbGlnbixcbiAgICBkZWZhdWx0OiAnY2VudGVyJ1xuICB9LFxuICBzdGFjazogQm9vbGVhbixcbiAgc3RyZXRjaDogQm9vbGVhbixcbiAgbG9hZGluZzoge1xuICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgZGVmYXVsdDogbnVsbFxuICB9LFxuICBkaXNhYmxlOiBCb29sZWFuXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChwcm9wcykge1xuICBjb25zdCBzaXplU3R5bGUgPSB1c2VTaXplKHByb3BzLCBkZWZhdWx0U2l6ZXMpXG4gIGNvbnN0IGFsaWduQ2xhc3MgPSB1c2VBbGlnbihwcm9wcylcbiAgY29uc3QgeyBoYXNSb3V0ZXJMaW5rLCBoYXNMaW5rLCBsaW5rVGFnLCBsaW5rQXR0cnMsIG5hdmlnYXRlT25DbGljayB9ID0gdXNlUm91dGVyTGluayh7XG4gICAgZmFsbGJhY2tUYWc6ICdidXR0b24nXG4gIH0pXG5cbiAgY29uc3Qgc3R5bGUgPSBjb21wdXRlZCgoKSA9PiB7XG4gICAgY29uc3Qgb2JqID0gcHJvcHMuZmFiID09PSBmYWxzZSAmJiBwcm9wcy5mYWJNaW5pID09PSBmYWxzZVxuICAgICAgPyBzaXplU3R5bGUudmFsdWVcbiAgICAgIDoge31cblxuICAgIHJldHVybiBwcm9wcy5wYWRkaW5nICE9PSB2b2lkIDBcbiAgICAgID8gT2JqZWN0LmFzc2lnbih7fSwgb2JqLCB7XG4gICAgICAgIHBhZGRpbmc6IHByb3BzLnBhZGRpbmdcbiAgICAgICAgICAuc3BsaXQoL1xccysvKVxuICAgICAgICAgIC5tYXAodiA9PiAodiBpbiBidG5QYWRkaW5nID8gYnRuUGFkZGluZ1sgdiBdICsgJ3B4JyA6IHYpKVxuICAgICAgICAgIC5qb2luKCcgJyksXG4gICAgICAgIG1pbldpZHRoOiAnMCcsXG4gICAgICAgIG1pbkhlaWdodDogJzAnXG4gICAgICB9KVxuICAgICAgOiBvYmpcbiAgfSlcblxuICBjb25zdCBpc1JvdW5kZWQgPSBjb21wdXRlZCgoKSA9PlxuICAgIHByb3BzLnJvdW5kZWQgPT09IHRydWUgfHwgcHJvcHMuZmFiID09PSB0cnVlIHx8IHByb3BzLmZhYk1pbmkgPT09IHRydWVcbiAgKVxuXG4gIGNvbnN0IGlzQWN0aW9uYWJsZSA9IGNvbXB1dGVkKCgpID0+XG4gICAgcHJvcHMuZGlzYWJsZSAhPT0gdHJ1ZSAmJiBwcm9wcy5sb2FkaW5nICE9PSB0cnVlXG4gIClcblxuICBjb25zdCB0YWJJbmRleCA9IGNvbXB1dGVkKCgpID0+IChcbiAgICBpc0FjdGlvbmFibGUudmFsdWUgPT09IHRydWUgPyBwcm9wcy50YWJpbmRleCB8fCAwIDogLTFcbiAgKSlcblxuICBjb25zdCBkZXNpZ24gPSBjb21wdXRlZCgoKSA9PiBnZXRCdG5EZXNpZ24ocHJvcHMsICdzdGFuZGFyZCcpKVxuXG4gIGNvbnN0IGF0dHJpYnV0ZXMgPSBjb21wdXRlZCgoKSA9PiB7XG4gICAgY29uc3QgYWNjID0geyB0YWJpbmRleDogdGFiSW5kZXgudmFsdWUgfVxuXG4gICAgaWYgKGhhc0xpbmsudmFsdWUgPT09IHRydWUpIHtcbiAgICAgIE9iamVjdC5hc3NpZ24oYWNjLCBsaW5rQXR0cnMudmFsdWUpXG4gICAgfVxuICAgIGVsc2UgaWYgKGZvcm1UeXBlcy5pbmNsdWRlcyhwcm9wcy50eXBlKSA9PT0gdHJ1ZSkge1xuICAgICAgYWNjLnR5cGUgPSBwcm9wcy50eXBlXG4gICAgfVxuXG4gICAgaWYgKGxpbmtUYWcudmFsdWUgPT09ICdhJykge1xuICAgICAgaWYgKHByb3BzLmRpc2FibGUgPT09IHRydWUpIHtcbiAgICAgICAgYWNjWyAnYXJpYS1kaXNhYmxlZCcgXSA9ICd0cnVlJ1xuICAgICAgfVxuICAgICAgZWxzZSBpZiAoYWNjLmhyZWYgPT09IHZvaWQgMCkge1xuICAgICAgICBhY2Mucm9sZSA9ICdidXR0b24nXG4gICAgICB9XG5cbiAgICAgIGlmIChoYXNSb3V0ZXJMaW5rLnZhbHVlICE9PSB0cnVlICYmIG1lZGlhVHlwZVJFLnRlc3QocHJvcHMudHlwZSkgPT09IHRydWUpIHtcbiAgICAgICAgYWNjLnR5cGUgPSBwcm9wcy50eXBlXG4gICAgICB9XG4gICAgfVxuICAgIGVsc2UgaWYgKHByb3BzLmRpc2FibGUgPT09IHRydWUpIHtcbiAgICAgIGFjYy5kaXNhYmxlZCA9ICcnXG4gICAgICBhY2NbICdhcmlhLWRpc2FibGVkJyBdID0gJ3RydWUnXG4gICAgfVxuXG4gICAgaWYgKHByb3BzLmxvYWRpbmcgPT09IHRydWUgJiYgcHJvcHMucGVyY2VudGFnZSAhPT0gdm9pZCAwKSB7XG4gICAgICBPYmplY3QuYXNzaWduKGFjYywge1xuICAgICAgICByb2xlOiAncHJvZ3Jlc3NiYXInLFxuICAgICAgICAnYXJpYS12YWx1ZW1pbic6IDAsXG4gICAgICAgICdhcmlhLXZhbHVlbWF4JzogMTAwLFxuICAgICAgICAnYXJpYS12YWx1ZW5vdyc6IHByb3BzLnBlcmNlbnRhZ2VcbiAgICAgIH0pXG4gICAgfVxuXG4gICAgcmV0dXJuIGFjY1xuICB9KVxuXG4gIGNvbnN0IGNsYXNzZXMgPSBjb21wdXRlZCgoKSA9PiB7XG4gICAgbGV0IGNvbG9yc1xuXG4gICAgaWYgKHByb3BzLmNvbG9yICE9PSB2b2lkIDApIHtcbiAgICAgIGlmIChwcm9wcy5mbGF0ID09PSB0cnVlIHx8IHByb3BzLm91dGxpbmUgPT09IHRydWUpIHtcbiAgICAgICAgY29sb3JzID0gYHRleHQtJHsgcHJvcHMudGV4dENvbG9yIHx8IHByb3BzLmNvbG9yIH1gXG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgY29sb3JzID0gYGJnLSR7IHByb3BzLmNvbG9yIH0gdGV4dC0keyBwcm9wcy50ZXh0Q29sb3IgfHwgJ3doaXRlJyB9YFxuICAgICAgfVxuICAgIH1cbiAgICBlbHNlIGlmIChwcm9wcy50ZXh0Q29sb3IpIHtcbiAgICAgIGNvbG9ycyA9IGB0ZXh0LSR7IHByb3BzLnRleHRDb2xvciB9YFxuICAgIH1cblxuICAgIGNvbnN0IHNoYXBlID0gcHJvcHMucm91bmQgPT09IHRydWVcbiAgICAgID8gJ3JvdW5kJ1xuICAgICAgOiBgcmVjdGFuZ2xlJHsgaXNSb3VuZGVkLnZhbHVlID09PSB0cnVlID8gJyBxLWJ0bi0tcm91bmRlZCcgOiAocHJvcHMuc3F1YXJlID09PSB0cnVlID8gJyBxLWJ0bi0tc3F1YXJlJyA6ICcnKSB9YFxuXG4gICAgcmV0dXJuIGBxLWJ0bi0tJHsgZGVzaWduLnZhbHVlIH0gcS1idG4tLSR7IHNoYXBlIH1gXG4gICAgICArIChjb2xvcnMgIT09IHZvaWQgMCA/ICcgJyArIGNvbG9ycyA6ICcnKVxuICAgICAgKyAoaXNBY3Rpb25hYmxlLnZhbHVlID09PSB0cnVlID8gJyBxLWJ0bi0tYWN0aW9uYWJsZSBxLWZvY3VzYWJsZSBxLWhvdmVyYWJsZScgOiAocHJvcHMuZGlzYWJsZSA9PT0gdHJ1ZSA/ICcgZGlzYWJsZWQnIDogJycpKVxuICAgICAgKyAocHJvcHMuZmFiID09PSB0cnVlID8gJyBxLWJ0bi0tZmFiJyA6IChwcm9wcy5mYWJNaW5pID09PSB0cnVlID8gJyBxLWJ0bi0tZmFiLW1pbmknIDogJycpKVxuICAgICAgKyAocHJvcHMubm9DYXBzID09PSB0cnVlID8gJyBxLWJ0bi0tbm8tdXBwZXJjYXNlJyA6ICcnKVxuICAgICAgKyAocHJvcHMuZGVuc2UgPT09IHRydWUgPyAnIHEtYnRuLS1kZW5zZScgOiAnJylcbiAgICAgICsgKHByb3BzLnN0cmV0Y2ggPT09IHRydWUgPyAnIG5vLWJvcmRlci1yYWRpdXMgc2VsZi1zdHJldGNoJyA6ICcnKVxuICAgICAgKyAocHJvcHMuZ2xvc3N5ID09PSB0cnVlID8gJyBnbG9zc3knIDogJycpXG4gICAgICArIChwcm9wcy5zcXVhcmUgPyAnIHEtYnRuLS1zcXVhcmUnIDogJycpXG4gIH0pXG5cbiAgY29uc3QgaW5uZXJDbGFzc2VzID0gY29tcHV0ZWQoKCkgPT5cbiAgICBhbGlnbkNsYXNzLnZhbHVlICsgKHByb3BzLnN0YWNrID09PSB0cnVlID8gJyBjb2x1bW4nIDogJyByb3cnKVxuICAgICsgKHByb3BzLm5vV3JhcCA9PT0gdHJ1ZSA/ICcgbm8td3JhcCB0ZXh0LW5vLXdyYXAnIDogJycpXG4gICAgKyAocHJvcHMubG9hZGluZyA9PT0gdHJ1ZSA/ICcgcS1idG5fX2NvbnRlbnQtLWhpZGRlbicgOiAnJylcbiAgKVxuXG4gIHJldHVybiB7XG4gICAgY2xhc3NlcyxcbiAgICBzdHlsZSxcbiAgICBpbm5lckNsYXNzZXMsXG4gICAgYXR0cmlidXRlcyxcbiAgICBoYXNMaW5rLFxuICAgIGxpbmtUYWcsXG4gICAgbmF2aWdhdGVPbkNsaWNrLFxuICAgIGlzQWN0aW9uYWJsZVxuICB9XG59XG4iLCJpbXBvcnQgeyBoLCByZWYsIGNvbXB1dGVkLCBUcmFuc2l0aW9uLCBvbkJlZm9yZVVubW91bnQsIHdpdGhEaXJlY3RpdmVzLCBnZXRDdXJyZW50SW5zdGFuY2UgfSBmcm9tICd2dWUnXG5cbmltcG9ydCBRSWNvbiBmcm9tICcuLi9pY29uL1FJY29uLmpzJ1xuaW1wb3J0IFFTcGlubmVyIGZyb20gJy4uL3NwaW5uZXIvUVNwaW5uZXIuanMnXG5cbmltcG9ydCBSaXBwbGUgZnJvbSAnLi4vLi4vZGlyZWN0aXZlcy9SaXBwbGUuanMnXG5cbmltcG9ydCB1c2VCdG4sIHsgdXNlQnRuUHJvcHMgfSBmcm9tICcuL3VzZS1idG4uanMnXG5cbmltcG9ydCB7IGNyZWF0ZUNvbXBvbmVudCB9IGZyb20gJy4uLy4uL3V0aWxzL3ByaXZhdGUvY3JlYXRlLmpzJ1xuaW1wb3J0IHsgaE1lcmdlU2xvdCB9IGZyb20gJy4uLy4uL3V0aWxzL3ByaXZhdGUvcmVuZGVyLmpzJ1xuaW1wb3J0IHsgc3RvcCwgcHJldmVudCwgc3RvcEFuZFByZXZlbnQsIGxpc3Rlbk9wdHMgfSBmcm9tICcuLi8uLi91dGlscy9ldmVudC5qcydcbmltcG9ydCB7IGlzS2V5Q29kZSB9IGZyb20gJy4uLy4uL3V0aWxzL3ByaXZhdGUva2V5LWNvbXBvc2l0aW9uLmpzJ1xuXG5jb25zdCB7IHBhc3NpdmVDYXB0dXJlIH0gPSBsaXN0ZW5PcHRzXG5cbmxldFxuICB0b3VjaFRhcmdldCA9IG51bGwsXG4gIGtleWJvYXJkVGFyZ2V0ID0gbnVsbCxcbiAgbW91c2VUYXJnZXQgPSBudWxsXG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUNvbXBvbmVudCh7XG4gIG5hbWU6ICdRQnRuJyxcblxuICBwcm9wczoge1xuICAgIC4uLnVzZUJ0blByb3BzLFxuXG4gICAgcGVyY2VudGFnZTogTnVtYmVyLFxuICAgIGRhcmtQZXJjZW50YWdlOiBCb29sZWFuLFxuXG4gICAgb25Ub3VjaHN0YXJ0OiBbIEZ1bmN0aW9uLCBBcnJheSBdXG4gIH0sXG5cbiAgZW1pdHM6IFsgJ2NsaWNrJywgJ2tleWRvd24nLCAnbW91c2Vkb3duJywgJ2tleXVwJyBdLFxuXG4gIHNldHVwIChwcm9wcywgeyBzbG90cywgZW1pdCB9KSB7XG4gICAgY29uc3QgeyBwcm94eSB9ID0gZ2V0Q3VycmVudEluc3RhbmNlKClcblxuICAgIGNvbnN0IHtcbiAgICAgIGNsYXNzZXMsIHN0eWxlLCBpbm5lckNsYXNzZXMsXG4gICAgICBhdHRyaWJ1dGVzLFxuICAgICAgaGFzTGluaywgbGlua1RhZywgbmF2aWdhdGVPbkNsaWNrLFxuICAgICAgaXNBY3Rpb25hYmxlXG4gICAgfSA9IHVzZUJ0bihwcm9wcylcblxuICAgIGNvbnN0IHJvb3RSZWYgPSByZWYobnVsbClcbiAgICBjb25zdCBibHVyVGFyZ2V0UmVmID0gcmVmKG51bGwpXG5cbiAgICBsZXQgbG9jYWxUb3VjaFRhcmdldEVsID0gbnVsbCwgYXZvaWRNb3VzZVJpcHBsZSwgbW91c2VUaW1lciA9IG51bGxcblxuICAgIGNvbnN0IGhhc0xhYmVsID0gY29tcHV0ZWQoKCkgPT5cbiAgICAgIHByb3BzLmxhYmVsICE9PSB2b2lkIDAgJiYgcHJvcHMubGFiZWwgIT09IG51bGwgJiYgcHJvcHMubGFiZWwgIT09ICcnXG4gICAgKVxuXG4gICAgY29uc3QgcmlwcGxlID0gY29tcHV0ZWQoKCkgPT4gKFxuICAgICAgcHJvcHMuZGlzYWJsZSA9PT0gdHJ1ZSB8fCBwcm9wcy5yaXBwbGUgPT09IGZhbHNlXG4gICAgICAgID8gZmFsc2VcbiAgICAgICAgOiB7XG4gICAgICAgICAgICBrZXlDb2RlczogaGFzTGluay52YWx1ZSA9PT0gdHJ1ZSA/IFsgMTMsIDMyIF0gOiBbIDEzIF0sXG4gICAgICAgICAgICAuLi4ocHJvcHMucmlwcGxlID09PSB0cnVlID8ge30gOiBwcm9wcy5yaXBwbGUpXG4gICAgICAgICAgfVxuICAgICkpXG5cbiAgICBjb25zdCByaXBwbGVQcm9wcyA9IGNvbXB1dGVkKCgpID0+ICh7IGNlbnRlcjogcHJvcHMucm91bmQgfSkpXG5cbiAgICBjb25zdCBwZXJjZW50YWdlU3R5bGUgPSBjb21wdXRlZCgoKSA9PiB7XG4gICAgICBjb25zdCB2YWwgPSBNYXRoLm1heCgwLCBNYXRoLm1pbigxMDAsIHByb3BzLnBlcmNlbnRhZ2UpKVxuICAgICAgcmV0dXJuIHZhbCA+IDBcbiAgICAgICAgPyB7IHRyYW5zaXRpb246ICd0cmFuc2Zvcm0gMC42cycsIHRyYW5zZm9ybTogYHRyYW5zbGF0ZVgoJHsgdmFsIC0gMTAwIH0lKWAgfVxuICAgICAgICA6IHt9XG4gICAgfSlcblxuICAgIGNvbnN0IG9uRXZlbnRzID0gY29tcHV0ZWQoKCkgPT4ge1xuICAgICAgaWYgKHByb3BzLmxvYWRpbmcgPT09IHRydWUpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBvbk1vdXNlZG93bjogb25Mb2FkaW5nRXZ0LFxuICAgICAgICAgIG9uVG91Y2hzdGFydDogb25Mb2FkaW5nRXZ0LFxuICAgICAgICAgIG9uQ2xpY2s6IG9uTG9hZGluZ0V2dCxcbiAgICAgICAgICBvbktleWRvd246IG9uTG9hZGluZ0V2dCxcbiAgICAgICAgICBvbktleXVwOiBvbkxvYWRpbmdFdnRcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoaXNBY3Rpb25hYmxlLnZhbHVlID09PSB0cnVlKSB7XG4gICAgICAgIGNvbnN0IGFjYyA9IHtcbiAgICAgICAgICBvbkNsaWNrLFxuICAgICAgICAgIG9uS2V5ZG93bixcbiAgICAgICAgICBvbk1vdXNlZG93blxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHByb3h5LiRxLnBsYXRmb3JtLmhhcy50b3VjaCA9PT0gdHJ1ZSkge1xuICAgICAgICAgIGNvbnN0IHN1ZmZpeCA9IHByb3BzLm9uVG91Y2hzdGFydCAhPT0gdm9pZCAwXG4gICAgICAgICAgICA/ICcnXG4gICAgICAgICAgICA6ICdQYXNzaXZlJ1xuXG4gICAgICAgICAgYWNjWyBgb25Ub3VjaHN0YXJ0JHsgc3VmZml4IH1gIF0gPSBvblRvdWNoc3RhcnRcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBhY2NcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLy8gbmVlZGVkOyBlc3BlY2lhbGx5IGZvciBkaXNhYmxlZCA8YT4gdGFnc1xuICAgICAgICBvbkNsaWNrOiBzdG9wQW5kUHJldmVudFxuICAgICAgfVxuICAgIH0pXG5cbiAgICBjb25zdCBub2RlUHJvcHMgPSBjb21wdXRlZCgoKSA9PiAoe1xuICAgICAgcmVmOiByb290UmVmLFxuICAgICAgY2xhc3M6ICdxLWJ0biBxLWJ0bi1pdGVtIG5vbi1zZWxlY3RhYmxlIG5vLW91dGxpbmUgJyArIGNsYXNzZXMudmFsdWUsXG4gICAgICBzdHlsZTogc3R5bGUudmFsdWUsXG4gICAgICAuLi5hdHRyaWJ1dGVzLnZhbHVlLFxuICAgICAgLi4ub25FdmVudHMudmFsdWVcbiAgICB9KSlcblxuICAgIGZ1bmN0aW9uIG9uQ2xpY2sgKGUpIHtcbiAgICAgIC8vIGlzIGl0IGFscmVhZHkgZGVzdHJveWVkP1xuICAgICAgaWYgKHJvb3RSZWYudmFsdWUgPT09IG51bGwpIHJldHVyblxuXG4gICAgICBpZiAoZSAhPT0gdm9pZCAwKSB7XG4gICAgICAgIGlmIChlLmRlZmF1bHRQcmV2ZW50ZWQgPT09IHRydWUpIHtcbiAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGVsID0gZG9jdW1lbnQuYWN0aXZlRWxlbWVudFxuICAgICAgICAvLyBmb2N1cyBidXR0b24gaWYgaXQgY2FtZSBmcm9tIEVOVEVSIG9uIGZvcm1cbiAgICAgICAgLy8gcHJldmVudCB0aGUgbmV3IHN1Ym1pdCAoYWxyZWFkeSBkb25lKVxuICAgICAgICBpZiAoXG4gICAgICAgICAgcHJvcHMudHlwZSA9PT0gJ3N1Ym1pdCdcbiAgICAgICAgICAmJiBlbCAhPT0gZG9jdW1lbnQuYm9keVxuICAgICAgICAgICYmIHJvb3RSZWYudmFsdWUuY29udGFpbnMoZWwpID09PSBmYWxzZVxuICAgICAgICAgIC8vIHJlcXVpcmVkIGZvciBpT1MgYW5kIGRlc2t0b3AgU2FmYXJpXG4gICAgICAgICAgJiYgZWwuY29udGFpbnMocm9vdFJlZi52YWx1ZSkgPT09IGZhbHNlXG4gICAgICAgICkge1xuICAgICAgICAgIHJvb3RSZWYudmFsdWUuZm9jdXMoKVxuXG4gICAgICAgICAgY29uc3Qgb25DbGlja0NsZWFudXAgPSAoKSA9PiB7XG4gICAgICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdrZXlkb3duJywgc3RvcEFuZFByZXZlbnQsIHRydWUpXG4gICAgICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdrZXl1cCcsIG9uQ2xpY2tDbGVhbnVwLCBwYXNzaXZlQ2FwdHVyZSlcbiAgICAgICAgICAgIHJvb3RSZWYudmFsdWUgIT09IG51bGwgJiYgcm9vdFJlZi52YWx1ZS5yZW1vdmVFdmVudExpc3RlbmVyKCdibHVyJywgb25DbGlja0NsZWFudXAsIHBhc3NpdmVDYXB0dXJlKVxuICAgICAgICAgIH1cblxuICAgICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBzdG9wQW5kUHJldmVudCwgdHJ1ZSlcbiAgICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIG9uQ2xpY2tDbGVhbnVwLCBwYXNzaXZlQ2FwdHVyZSlcbiAgICAgICAgICByb290UmVmLnZhbHVlLmFkZEV2ZW50TGlzdGVuZXIoJ2JsdXInLCBvbkNsaWNrQ2xlYW51cCwgcGFzc2l2ZUNhcHR1cmUpXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbmF2aWdhdGVPbkNsaWNrKGUpXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gb25LZXlkb3duIChlKSB7XG4gICAgICAvLyBpcyBpdCBhbHJlYWR5IGRlc3Ryb3llZD9cbiAgICAgIGlmIChyb290UmVmLnZhbHVlID09PSBudWxsKSByZXR1cm5cblxuICAgICAgZW1pdCgna2V5ZG93bicsIGUpXG5cbiAgICAgIGlmIChpc0tleUNvZGUoZSwgWyAxMywgMzIgXSkgPT09IHRydWUgJiYga2V5Ym9hcmRUYXJnZXQgIT09IHJvb3RSZWYudmFsdWUpIHtcbiAgICAgICAga2V5Ym9hcmRUYXJnZXQgIT09IG51bGwgJiYgY2xlYW51cCgpXG5cbiAgICAgICAgaWYgKGUuZGVmYXVsdFByZXZlbnRlZCAhPT0gdHJ1ZSkge1xuICAgICAgICAgIC8vIGZvY3VzIGV4dGVybmFsIGJ1dHRvbiBpZiB0aGUgZm9jdXMgaGVscGVyIHdhcyBmb2N1c2VkIGJlZm9yZVxuICAgICAgICAgIHJvb3RSZWYudmFsdWUuZm9jdXMoKVxuXG4gICAgICAgICAga2V5Ym9hcmRUYXJnZXQgPSByb290UmVmLnZhbHVlXG4gICAgICAgICAgcm9vdFJlZi52YWx1ZS5jbGFzc0xpc3QuYWRkKCdxLWJ0bi0tYWN0aXZlJylcbiAgICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIG9uUHJlc3NFbmQsIHRydWUpXG4gICAgICAgICAgcm9vdFJlZi52YWx1ZS5hZGRFdmVudExpc3RlbmVyKCdibHVyJywgb25QcmVzc0VuZCwgcGFzc2l2ZUNhcHR1cmUpXG4gICAgICAgIH1cblxuICAgICAgICBzdG9wQW5kUHJldmVudChlKVxuICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIG9uVG91Y2hzdGFydCAoZSkge1xuICAgICAgLy8gaXMgaXQgYWxyZWFkeSBkZXN0cm95ZWQ/XG4gICAgICBpZiAocm9vdFJlZi52YWx1ZSA9PT0gbnVsbCkgcmV0dXJuXG5cbiAgICAgIGVtaXQoJ3RvdWNoc3RhcnQnLCBlKVxuXG4gICAgICBpZiAoZS5kZWZhdWx0UHJldmVudGVkID09PSB0cnVlKSByZXR1cm5cblxuICAgICAgaWYgKHRvdWNoVGFyZ2V0ICE9PSByb290UmVmLnZhbHVlKSB7XG4gICAgICAgIHRvdWNoVGFyZ2V0ICE9PSBudWxsICYmIGNsZWFudXAoKVxuICAgICAgICB0b3VjaFRhcmdldCA9IHJvb3RSZWYudmFsdWVcblxuICAgICAgICBsb2NhbFRvdWNoVGFyZ2V0RWwgPSBlLnRhcmdldFxuICAgICAgICBsb2NhbFRvdWNoVGFyZ2V0RWwuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hjYW5jZWwnLCBvblByZXNzRW5kLCBwYXNzaXZlQ2FwdHVyZSlcbiAgICAgICAgbG9jYWxUb3VjaFRhcmdldEVsLmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoZW5kJywgb25QcmVzc0VuZCwgcGFzc2l2ZUNhcHR1cmUpXG4gICAgICB9XG5cbiAgICAgIC8vIGF2b2lkIGR1cGxpY2F0ZWQgbW91c2Vkb3duIGV2ZW50XG4gICAgICAvLyB0cmlnZ2VyaW5nIGFub3RoZXIgZWFybHkgcmlwcGxlXG4gICAgICBhdm9pZE1vdXNlUmlwcGxlID0gdHJ1ZVxuICAgICAgbW91c2VUaW1lciAhPT0gbnVsbCAmJiBjbGVhclRpbWVvdXQobW91c2VUaW1lcilcbiAgICAgIG1vdXNlVGltZXIgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgbW91c2VUaW1lciA9IG51bGxcbiAgICAgICAgYXZvaWRNb3VzZVJpcHBsZSA9IGZhbHNlXG4gICAgICB9LCAyMDApXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gb25Nb3VzZWRvd24gKGUpIHtcbiAgICAgIC8vIGlzIGl0IGFscmVhZHkgZGVzdHJveWVkP1xuICAgICAgaWYgKHJvb3RSZWYudmFsdWUgPT09IG51bGwpIHJldHVyblxuXG4gICAgICBlLnFTa2lwUmlwcGxlID0gYXZvaWRNb3VzZVJpcHBsZSA9PT0gdHJ1ZVxuICAgICAgZW1pdCgnbW91c2Vkb3duJywgZSlcblxuICAgICAgaWYgKGUuZGVmYXVsdFByZXZlbnRlZCAhPT0gdHJ1ZSAmJiBtb3VzZVRhcmdldCAhPT0gcm9vdFJlZi52YWx1ZSkge1xuICAgICAgICBtb3VzZVRhcmdldCAhPT0gbnVsbCAmJiBjbGVhbnVwKClcbiAgICAgICAgbW91c2VUYXJnZXQgPSByb290UmVmLnZhbHVlXG4gICAgICAgIHJvb3RSZWYudmFsdWUuY2xhc3NMaXN0LmFkZCgncS1idG4tLWFjdGl2ZScpXG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCBvblByZXNzRW5kLCBwYXNzaXZlQ2FwdHVyZSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBvblByZXNzRW5kIChlKSB7XG4gICAgICAvLyBpcyBpdCBhbHJlYWR5IGRlc3Ryb3llZD9cbiAgICAgIGlmIChyb290UmVmLnZhbHVlID09PSBudWxsKSByZXR1cm5cblxuICAgICAgLy8gbmVlZGVkIGZvciBJRSAoYmVjYXVzZSBpdCBlbWl0cyBibHVyIHdoZW4gZm9jdXNpbmcgYnV0dG9uIGZyb20gZm9jdXMgaGVscGVyKVxuICAgICAgaWYgKGUgIT09IHZvaWQgMCAmJiBlLnR5cGUgPT09ICdibHVyJyAmJiBkb2N1bWVudC5hY3RpdmVFbGVtZW50ID09PSByb290UmVmLnZhbHVlKSB7XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICBpZiAoZSAhPT0gdm9pZCAwICYmIGUudHlwZSA9PT0gJ2tleXVwJykge1xuICAgICAgICBpZiAoa2V5Ym9hcmRUYXJnZXQgPT09IHJvb3RSZWYudmFsdWUgJiYgaXNLZXlDb2RlKGUsIFsgMTMsIDMyIF0pID09PSB0cnVlKSB7XG4gICAgICAgICAgLy8gZm9yIGNsaWNrIHRyaWdnZXJcbiAgICAgICAgICBjb25zdCBldnQgPSBuZXcgTW91c2VFdmVudCgnY2xpY2snLCBlKVxuICAgICAgICAgIGV2dC5xS2V5RXZlbnQgPSB0cnVlXG4gICAgICAgICAgZS5kZWZhdWx0UHJldmVudGVkID09PSB0cnVlICYmIHByZXZlbnQoZXZ0KVxuICAgICAgICAgIGUuY2FuY2VsQnViYmxlID09PSB0cnVlICYmIHN0b3AoZXZ0KVxuICAgICAgICAgIHJvb3RSZWYudmFsdWUuZGlzcGF0Y2hFdmVudChldnQpXG5cbiAgICAgICAgICBzdG9wQW5kUHJldmVudChlKVxuXG4gICAgICAgICAgLy8gZm9yIHJpcHBsZVxuICAgICAgICAgIGUucUtleUV2ZW50ID0gdHJ1ZVxuICAgICAgICB9XG5cbiAgICAgICAgZW1pdCgna2V5dXAnLCBlKVxuICAgICAgfVxuXG4gICAgICBjbGVhbnVwKClcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjbGVhbnVwIChkZXN0cm95aW5nKSB7XG4gICAgICBjb25zdCBibHVyVGFyZ2V0ID0gYmx1clRhcmdldFJlZi52YWx1ZVxuXG4gICAgICBpZiAoXG4gICAgICAgIGRlc3Ryb3lpbmcgIT09IHRydWVcbiAgICAgICAgJiYgKHRvdWNoVGFyZ2V0ID09PSByb290UmVmLnZhbHVlIHx8IG1vdXNlVGFyZ2V0ID09PSByb290UmVmLnZhbHVlKVxuICAgICAgICAmJiBibHVyVGFyZ2V0ICE9PSBudWxsXG4gICAgICAgICYmIGJsdXJUYXJnZXQgIT09IGRvY3VtZW50LmFjdGl2ZUVsZW1lbnRcbiAgICAgICkge1xuICAgICAgICBibHVyVGFyZ2V0LnNldEF0dHJpYnV0ZSgndGFiaW5kZXgnLCAtMSlcbiAgICAgICAgYmx1clRhcmdldC5mb2N1cygpXG4gICAgICB9XG5cbiAgICAgIGlmICh0b3VjaFRhcmdldCA9PT0gcm9vdFJlZi52YWx1ZSkge1xuICAgICAgICBpZiAobG9jYWxUb3VjaFRhcmdldEVsICE9PSBudWxsKSB7XG4gICAgICAgICAgbG9jYWxUb3VjaFRhcmdldEVsLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RvdWNoY2FuY2VsJywgb25QcmVzc0VuZCwgcGFzc2l2ZUNhcHR1cmUpXG4gICAgICAgICAgbG9jYWxUb3VjaFRhcmdldEVsLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RvdWNoZW5kJywgb25QcmVzc0VuZCwgcGFzc2l2ZUNhcHR1cmUpXG4gICAgICAgIH1cbiAgICAgICAgdG91Y2hUYXJnZXQgPSBsb2NhbFRvdWNoVGFyZ2V0RWwgPSBudWxsXG4gICAgICB9XG5cbiAgICAgIGlmIChtb3VzZVRhcmdldCA9PT0gcm9vdFJlZi52YWx1ZSkge1xuICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgb25QcmVzc0VuZCwgcGFzc2l2ZUNhcHR1cmUpXG4gICAgICAgIG1vdXNlVGFyZ2V0ID0gbnVsbFxuICAgICAgfVxuXG4gICAgICBpZiAoa2V5Ym9hcmRUYXJnZXQgPT09IHJvb3RSZWYudmFsdWUpIHtcbiAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigna2V5dXAnLCBvblByZXNzRW5kLCB0cnVlKVxuICAgICAgICByb290UmVmLnZhbHVlICE9PSBudWxsICYmIHJvb3RSZWYudmFsdWUucmVtb3ZlRXZlbnRMaXN0ZW5lcignYmx1cicsIG9uUHJlc3NFbmQsIHBhc3NpdmVDYXB0dXJlKVxuICAgICAgICBrZXlib2FyZFRhcmdldCA9IG51bGxcbiAgICAgIH1cblxuICAgICAgcm9vdFJlZi52YWx1ZSAhPT0gbnVsbCAmJiByb290UmVmLnZhbHVlLmNsYXNzTGlzdC5yZW1vdmUoJ3EtYnRuLS1hY3RpdmUnKVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIG9uTG9hZGluZ0V2dCAoZXZ0KSB7XG4gICAgICBzdG9wQW5kUHJldmVudChldnQpXG4gICAgICBldnQucVNraXBSaXBwbGUgPSB0cnVlXG4gICAgfVxuXG4gICAgb25CZWZvcmVVbm1vdW50KCgpID0+IHtcbiAgICAgIGNsZWFudXAodHJ1ZSlcbiAgICB9KVxuXG4gICAgLy8gZXhwb3NlIHB1YmxpYyBtZXRob2RzXG4gICAgT2JqZWN0LmFzc2lnbihwcm94eSwgeyBjbGljazogb25DbGljayB9KVxuXG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIGxldCBpbm5lciA9IFtdXG5cbiAgICAgIHByb3BzLmljb24gIT09IHZvaWQgMCAmJiBpbm5lci5wdXNoKFxuICAgICAgICBoKFFJY29uLCB7XG4gICAgICAgICAgbmFtZTogcHJvcHMuaWNvbixcbiAgICAgICAgICBsZWZ0OiBwcm9wcy5zdGFjayAhPT0gdHJ1ZSAmJiBoYXNMYWJlbC52YWx1ZSA9PT0gdHJ1ZSxcbiAgICAgICAgICByb2xlOiAnaW1nJyxcbiAgICAgICAgICAnYXJpYS1oaWRkZW4nOiAndHJ1ZSdcbiAgICAgICAgfSlcbiAgICAgIClcblxuICAgICAgaGFzTGFiZWwudmFsdWUgPT09IHRydWUgJiYgaW5uZXIucHVzaChcbiAgICAgICAgaCgnc3BhbicsIHsgY2xhc3M6ICdibG9jaycgfSwgWyBwcm9wcy5sYWJlbCBdKVxuICAgICAgKVxuXG4gICAgICBpbm5lciA9IGhNZXJnZVNsb3Qoc2xvdHMuZGVmYXVsdCwgaW5uZXIpXG5cbiAgICAgIGlmIChwcm9wcy5pY29uUmlnaHQgIT09IHZvaWQgMCAmJiBwcm9wcy5yb3VuZCA9PT0gZmFsc2UpIHtcbiAgICAgICAgaW5uZXIucHVzaChcbiAgICAgICAgICBoKFFJY29uLCB7XG4gICAgICAgICAgICBuYW1lOiBwcm9wcy5pY29uUmlnaHQsXG4gICAgICAgICAgICByaWdodDogcHJvcHMuc3RhY2sgIT09IHRydWUgJiYgaGFzTGFiZWwudmFsdWUgPT09IHRydWUsXG4gICAgICAgICAgICByb2xlOiAnaW1nJyxcbiAgICAgICAgICAgICdhcmlhLWhpZGRlbic6ICd0cnVlJ1xuICAgICAgICAgIH0pXG4gICAgICAgIClcbiAgICAgIH1cblxuICAgICAgY29uc3QgY2hpbGQgPSBbXG4gICAgICAgIGgoJ3NwYW4nLCB7XG4gICAgICAgICAgY2xhc3M6ICdxLWZvY3VzLWhlbHBlcicsXG4gICAgICAgICAgcmVmOiBibHVyVGFyZ2V0UmVmXG4gICAgICAgIH0pXG4gICAgICBdXG5cbiAgICAgIGlmIChwcm9wcy5sb2FkaW5nID09PSB0cnVlICYmIHByb3BzLnBlcmNlbnRhZ2UgIT09IHZvaWQgMCkge1xuICAgICAgICBjaGlsZC5wdXNoKFxuICAgICAgICAgIGgoJ3NwYW4nLCB7XG4gICAgICAgICAgICBjbGFzczogJ3EtYnRuX19wcm9ncmVzcyBhYnNvbHV0ZS1mdWxsIG92ZXJmbG93LWhpZGRlbicgKyAocHJvcHMuZGFya1BlcmNlbnRhZ2UgPT09IHRydWUgPyAnIHEtYnRuX19wcm9ncmVzcy0tZGFyaycgOiAnJylcbiAgICAgICAgICB9LCBbXG4gICAgICAgICAgICBoKCdzcGFuJywge1xuICAgICAgICAgICAgICBjbGFzczogJ3EtYnRuX19wcm9ncmVzcy1pbmRpY2F0b3IgZml0IGJsb2NrJyxcbiAgICAgICAgICAgICAgc3R5bGU6IHBlcmNlbnRhZ2VTdHlsZS52YWx1ZVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICBdKVxuICAgICAgICApXG4gICAgICB9XG5cbiAgICAgIGNoaWxkLnB1c2goXG4gICAgICAgIGgoJ3NwYW4nLCB7XG4gICAgICAgICAgY2xhc3M6ICdxLWJ0bl9fY29udGVudCB0ZXh0LWNlbnRlciBjb2wgaXRlbXMtY2VudGVyIHEtYW5jaG9yLS1za2lwICcgKyBpbm5lckNsYXNzZXMudmFsdWVcbiAgICAgICAgfSwgaW5uZXIpXG4gICAgICApXG5cbiAgICAgIHByb3BzLmxvYWRpbmcgIT09IG51bGwgJiYgY2hpbGQucHVzaChcbiAgICAgICAgaChUcmFuc2l0aW9uLCB7XG4gICAgICAgICAgbmFtZTogJ3EtdHJhbnNpdGlvbi0tZmFkZSdcbiAgICAgICAgfSwgKCkgPT4gKFxuICAgICAgICAgIHByb3BzLmxvYWRpbmcgPT09IHRydWVcbiAgICAgICAgICAgID8gW1xuICAgICAgICAgICAgICAgIGgoJ3NwYW4nLCB7XG4gICAgICAgICAgICAgICAgICBrZXk6ICdsb2FkaW5nJyxcbiAgICAgICAgICAgICAgICAgIGNsYXNzOiAnYWJzb2x1dGUtZnVsbCBmbGV4IGZsZXgtY2VudGVyJ1xuICAgICAgICAgICAgICAgIH0sIHNsb3RzLmxvYWRpbmcgIT09IHZvaWQgMCA/IHNsb3RzLmxvYWRpbmcoKSA6IFsgaChRU3Bpbm5lcikgXSlcbiAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgOiBudWxsXG4gICAgICAgICkpXG4gICAgICApXG5cbiAgICAgIHJldHVybiB3aXRoRGlyZWN0aXZlcyhcbiAgICAgICAgaChcbiAgICAgICAgICBsaW5rVGFnLnZhbHVlLFxuICAgICAgICAgIG5vZGVQcm9wcy52YWx1ZSxcbiAgICAgICAgICBjaGlsZFxuICAgICAgICApLFxuICAgICAgICBbIFtcbiAgICAgICAgICBSaXBwbGUsXG4gICAgICAgICAgcmlwcGxlLnZhbHVlLFxuICAgICAgICAgIHZvaWQgMCxcbiAgICAgICAgICByaXBwbGVQcm9wcy52YWx1ZVxuICAgICAgICBdIF1cbiAgICAgIClcbiAgICB9XG4gIH1cbn0pXG4iXSwibmFtZXMiOlsiY3NzIl0sIm1hcHBpbmdzIjoiOzs7QUEwQk8sU0FBUyxJQUFLLFNBQVNBLE1BQUs7QUFDakMsUUFBTSxRQUFRLFFBQVE7QUFFdEIsYUFBVyxRQUFRQSxNQUFLO0FBQ3RCLFVBQU8sSUFBSSxJQUFLQSxLQUFLLElBQU07QUFBQSxFQUM1QjtBQUNIO0FBbUJPLFNBQVMsV0FBWSxJQUFJO0FBQzlCLE1BQUksT0FBTyxVQUFVLE9BQU8sTUFBTTtBQUNoQyxXQUFPO0FBQUEsRUFDUjtBQUVELE1BQUksT0FBTyxPQUFPLFVBQVU7QUFDMUIsUUFBSTtBQUNGLGFBQU8sU0FBUyxjQUFjLEVBQUUsS0FBSztBQUFBLElBQ3RDLFNBQ00sS0FBSztBQUNWLGFBQU87QUFBQSxJQUNSO0FBQUEsRUFDRjtBQUVELFFBQU0sU0FBUyxNQUFNLEVBQUU7QUFDdkIsTUFBSSxRQUFRO0FBQ1YsV0FBTyxPQUFPLE9BQU87QUFBQSxFQUN0QjtBQUNIO0FBR08sU0FBUyxjQUFlLElBQUksV0FBVztBQUM1QyxNQUFJLE9BQU8sVUFBVSxPQUFPLFFBQVEsR0FBRyxTQUFTLFNBQVMsTUFBTSxNQUFNO0FBQ25FLFdBQU87QUFBQSxFQUNSO0FBRUQsV0FBUyxPQUFPLEdBQUcsb0JBQW9CLFNBQVMsTUFBTSxPQUFPLEtBQUssb0JBQW9CO0FBQ3BGLFFBQUksS0FBSyxTQUFTLFNBQVMsR0FBRztBQUM1QixhQUFPO0FBQUEsSUFDUjtBQUFBLEVBQ0Y7QUFFRCxTQUFPO0FB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
