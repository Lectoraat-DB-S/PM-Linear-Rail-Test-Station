import { Q as QPage } from "./QPage-Dd92lxwb.js";
import { L as defineComponent, r as ref, c as computed, F as openBlock, M as createElementBlock, K as createBaseVNode, N as toDisplayString, O as Fragment, P as renderList, _ as _export_sfc, G as createBlock, H as withCtx, I as createVNode } from "./index-B8gzy2O7.js";
import "./render-DVgBXDT_.js";
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "ExampleComponent",
  props: {
    title: {},
    todos: { default: () => [] },
    meta: {},
    active: { type: Boolean }
  },
  setup(__props) {
    const props = __props;
    const clickCount = ref(0);
    function increment() {
      clickCount.value += 1;
      return clickCount.value;
    }
    const todoCount = computed(() => props.todos.length);
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", null, [
        createBaseVNode("p", null, toDisplayString(_ctx.title), 1),
        createBaseVNode("ul", null, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.todos, (todo) => {
            return openBlock(), createElementBlock("li", {
              key: todo.id,
              onClick: increment
            }, toDisplayString(todo.id) + " - " + toDisplayString(todo.content), 1);
          }), 128))
        ]),
        createBaseVNode("p", null, "Count: " + toDisplayString(todoCount.value) + " / " + toDisplayString(_ctx.meta.totalCount), 1),
        createBaseVNode("p", null, "Active: " + toDisplayString(_ctx.active ? "yes" : "no"), 1),
        createBaseVNode("p", null, "Clicks on todos: " + toDisplayString(clickCount.value), 1)
      ]);
    };
  }
});
const ExampleComponent = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__file", "ExampleComponent.vue"]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...{
    name: "IndexPage"
  },
  __name: "IndexPage",
  setup(__props) {
    const todos = ref([
      {
        id: 1,
        content: "ct1"
      },
      {
        id: 2,
        content: "ct2"
      },
      {
        id: 3,
        content: "ct3"
      },
      {
        id: 4,
        content: "ct4"
      },
      {
        id: 5,
        content: "ct5"
      }
    ]);
    const meta = ref({
      totalCount: 1200
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(QPage, { class: "row items-center justify-evenly" }, {
        default: withCtx(() => [
          createVNode(ExampleComponent, {
            title: "Example component",
            active: "",
            todos: todos.value,
            meta: meta.value
          }, null, 8, ["todos", "meta"])
        ]),
        _: 1
      });
    };
  }
});
const IndexPage = /* @__PURE__ */ _export_sfc(_sfc_main, [["__file", "IndexPage.vue"]]);
export {
  IndexPage as default
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSW5kZXhQYWdlLUJlM2ZZTTNvLmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy9FeGFtcGxlQ29tcG9uZW50LnZ1ZSIsIi4uLy4uLy4uLy4uL3NyYy9wYWdlcy9JbmRleFBhZ2UudnVlIl0sInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cclxuICA8ZGl2PlxyXG4gICAgPHA+e3sgdGl0bGUgfX08L3A+XHJcbiAgICA8dWw+XHJcbiAgICAgIDxsaSB2LWZvcj1cInRvZG8gaW4gdG9kb3NcIiA6a2V5PVwidG9kby5pZFwiIEBjbGljaz1cImluY3JlbWVudFwiPlxyXG4gICAgICAgIHt7IHRvZG8uaWQgfX0gLSB7eyB0b2RvLmNvbnRlbnQgfX1cclxuICAgICAgPC9saT5cclxuICAgIDwvdWw+XHJcbiAgICA8cD5Db3VudDoge3sgdG9kb0NvdW50IH19IC8ge3sgbWV0YS50b3RhbENvdW50IH19PC9wPlxyXG4gICAgPHA+QWN0aXZlOiB7eyBhY3RpdmUgPyAneWVzJyA6ICdubycgfX08L3A+XHJcbiAgICA8cD5DbGlja3Mgb24gdG9kb3M6IHt7IGNsaWNrQ291bnQgfX08L3A+XHJcbiAgPC9kaXY+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0IHNldHVwIGxhbmc9XCJ0c1wiPlxyXG5pbXBvcnQgeyBjb21wdXRlZCwgcmVmIH0gZnJvbSAndnVlJztcclxuaW1wb3J0IHsgVG9kbywgTWV0YSB9IGZyb20gJy4vbW9kZWxzJztcclxuXHJcbmludGVyZmFjZSBQcm9wcyB7XHJcbiAgdGl0bGU6IHN0cmluZztcclxuICB0b2Rvcz86IFRvZG9bXTtcclxuICBtZXRhOiBNZXRhO1xyXG4gIGFjdGl2ZTogYm9vbGVhbjtcclxufTtcclxuXHJcbmNvbnN0IHByb3BzID0gd2l0aERlZmF1bHRzKGRlZmluZVByb3BzPFByb3BzPigpLCB7XHJcbiAgdG9kb3M6ICgpID0+IFtdXHJcbn0pO1xyXG5cclxuY29uc3QgY2xpY2tDb3VudCA9IHJlZigwKTtcclxuZnVuY3Rpb24gaW5jcmVtZW50KCkge1xyXG4gIGNsaWNrQ291bnQudmFsdWUgKz0gMTtcclxuICByZXR1cm4gY2xpY2tDb3VudC52YWx1ZTtcclxufVxyXG5cclxuY29uc3QgdG9kb0NvdW50ID0gY29tcHV0ZWQoKCkgPT4gcHJvcHMudG9kb3MubGVuZ3RoKTtcclxuPC9zY3JpcHQ+XHJcbiIsIjx0ZW1wbGF0ZT5cclxuICA8cS1wYWdlIGNsYXNzPVwicm93IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWV2ZW5seVwiPlxyXG4gICAgPGV4YW1wbGUtY29tcG9uZW50XHJcbiAgICAgIHRpdGxlPVwiRXhhbXBsZSBjb21wb25lbnRcIlxyXG4gICAgICBhY3RpdmVcclxuICAgICAgOnRvZG9zPVwidG9kb3NcIlxyXG4gICAgICA6bWV0YT1cIm1ldGFcIlxyXG4gICAgPjwvZXhhbXBsZS1jb21wb25lbnQ+XHJcbiAgPC9xLXBhZ2U+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0IHNldHVwIGxhbmc9XCJ0c1wiPlxyXG5pbXBvcnQgeyByZWYgfSBmcm9tICd2dWUnO1xyXG5pbXBvcnQgeyBUb2RvLCBNZXRhIH0gZnJvbSAnY29tcG9uZW50cy9tb2RlbHMnO1xyXG5pbXBvcnQgRXhhbXBsZUNvbXBvbmVudCBmcm9tICdjb21wb25lbnRzL0V4YW1wbGVDb21wb25lbnQudnVlJztcclxuXHJcbmRlZmluZU9wdGlvbnMoe1xyXG4gIG5hbWU6ICdJbmRleFBhZ2UnXHJcbn0pO1xyXG5cclxuY29uc3QgdG9kb3MgPSByZWY8VG9kb1tdPihbXHJcbiAge1xyXG4gICAgaWQ6IDEsXHJcbiAgICBjb250ZW50OiAnY3QxJ1xyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6IDIsXHJcbiAgICBjb250ZW50OiAnY3QyJ1xyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6IDMsXHJcbiAgICBjb250ZW50OiAnY3QzJ1xyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6IDQsXHJcbiAgICBjb250ZW50OiAnY3Q0J1xyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6IDUsXHJcbiAgICBjb250ZW50OiAnY3Q1J1xyXG4gIH1cclxuXSk7XHJcblxyXG5jb25zdCBtZXRhID0gcmVmPE1ldGE+KHtcclxuICB0b3RhbENvdW50OiAxMjAwXHJcbn0pO1xyXG48L3NjcmlwdD5cclxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQXlCQSxVQUFNLFFBQVE7QUFJUixVQUFBLGFBQWEsSUFBSSxDQUFDO0FBQ3hCLGFBQVMsWUFBWTtBQUNuQixpQkFBVyxTQUFTO0FBQ3BCLGFBQU8sV0FBVztBQUFBLElBQ3BCO0FBRUEsVUFBTSxZQUFZLFNBQVMsTUFBTSxNQUFNLE1BQU0sTUFBTTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNmbkQsVUFBTSxRQUFRLElBQVk7QUFBQSxNQUN4QjtBQUFBLFFBQ0UsSUFBSTtBQUFBLFFBQ0osU0FBUztBQUFBLE1BQ1g7QUFBQSxNQUNBO0FBQUEsUUFDRSxJQUFJO0FBQUEsUUFDSixTQUFTO0FBQUEsTUFDWDtBQUFBLE1BQ0E7QUFBQSxRQUNFLElBQUk7QUFBQSxRQUNKLFNBQVM7QUFBQSxNQUNYO0FBQUEsTUFDQTtBQUFBLFFBQ0UsSUFBSTtBQUFBLFFBQ0osU0FBUztBQUFBLE1BQ1g7QUFBQSxNQUNBO0FBQUEsUUFDRSxJQUFJO0FBQUEsUUFDSixTQUFTO0FBQUEsTUFDWDtBQUFBLElBQUEsQ0FDRDtBQUVELFVBQU0sT0FBTyxJQUFVO0FBQUEsTUFDckIsWUFBWTtBQUFBLElBQUEsQ0FDYjs7Ozs7Ozs7Ozs7Ozs7Ozs7In0=
