(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getOwnPropSymbols = Object.getOwnPropertySymbols;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __propIsEnum = Object.prototype.propertyIsEnumerable;
  var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
  var __spreadValues = (a, b) => {
    for (var prop in b || (b = {}))
      if (__hasOwnProp.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    if (__getOwnPropSymbols)
      for (var prop of __getOwnPropSymbols(b)) {
        if (__propIsEnum.call(b, prop))
          __defNormalProp(a, prop, b[prop]);
      }
    return a;
  };
  var __objRest = (source, exclude) => {
    var target = {};
    for (var prop in source)
      if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
        target[prop] = source[prop];
    if (source != null && __getOwnPropSymbols)
      for (var prop of __getOwnPropSymbols(source)) {
        if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
          target[prop] = source[prop];
      }
    return target;
  };
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __export = (target, all) => {
    for (var name in all)
      __defProp(target, name, { get: all[name], enumerable: true });
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target, mod));

  // node_modules/vue/dist/vue.js
  var require_vue = __commonJS({
    "node_modules/vue/dist/vue.js"(exports, module) {
      (function(global2, factory) {
        typeof exports === "object" && typeof module !== "undefined" ? module.exports = factory() : typeof define === "function" && define.amd ? define(factory) : (global2 = global2 || self, global2.Vue = factory());
      })(exports, function() {
        "use strict";
        var emptyObject = Object.freeze({});
        function isUndef(v) {
          return v === void 0 || v === null;
        }
        function isDef(v) {
          return v !== void 0 && v !== null;
        }
        function isTrue(v) {
          return v === true;
        }
        function isFalse(v) {
          return v === false;
        }
        function isPrimitive(value) {
          return typeof value === "string" || typeof value === "number" || typeof value === "symbol" || typeof value === "boolean";
        }
        function isObject(obj) {
          return obj !== null && typeof obj === "object";
        }
        var _toString = Object.prototype.toString;
        function toRawType(value) {
          return _toString.call(value).slice(8, -1);
        }
        function isPlainObject(obj) {
          return _toString.call(obj) === "[object Object]";
        }
        function isRegExp(v) {
          return _toString.call(v) === "[object RegExp]";
        }
        function isValidArrayIndex(val) {
          var n = parseFloat(String(val));
          return n >= 0 && Math.floor(n) === n && isFinite(val);
        }
        function isPromise(val) {
          return isDef(val) && typeof val.then === "function" && typeof val.catch === "function";
        }
        function toString(val) {
          return val == null ? "" : Array.isArray(val) || isPlainObject(val) && val.toString === _toString ? JSON.stringify(val, null, 2) : String(val);
        }
        function toNumber(val) {
          var n = parseFloat(val);
          return isNaN(n) ? val : n;
        }
        function makeMap(str2, expectsLowerCase) {
          var map = /* @__PURE__ */ Object.create(null);
          var list = str2.split(",");
          for (var i = 0; i < list.length; i++) {
            map[list[i]] = true;
          }
          return expectsLowerCase ? function(val) {
            return map[val.toLowerCase()];
          } : function(val) {
            return map[val];
          };
        }
        var isBuiltInTag = makeMap("slot,component", true);
        var isReservedAttribute = makeMap("key,ref,slot,slot-scope,is");
        function remove(arr, item) {
          if (arr.length) {
            var index2 = arr.indexOf(item);
            if (index2 > -1) {
              return arr.splice(index2, 1);
            }
          }
        }
        var hasOwnProperty = Object.prototype.hasOwnProperty;
        function hasOwn(obj, key) {
          return hasOwnProperty.call(obj, key);
        }
        function cached(fn) {
          var cache = /* @__PURE__ */ Object.create(null);
          return function cachedFn(str2) {
            var hit = cache[str2];
            return hit || (cache[str2] = fn(str2));
          };
        }
        var camelizeRE = /-(\w)/g;
        var camelize = cached(function(str2) {
          return str2.replace(camelizeRE, function(_, c) {
            return c ? c.toUpperCase() : "";
          });
        });
        var capitalize = cached(function(str2) {
          return str2.charAt(0).toUpperCase() + str2.slice(1);
        });
        var hyphenateRE = /\B([A-Z])/g;
        var hyphenate = cached(function(str2) {
          return str2.replace(hyphenateRE, "-$1").toLowerCase();
        });
        function polyfillBind(fn, ctx) {
          function boundFn(a) {
            var l = arguments.length;
            return l ? l > 1 ? fn.apply(ctx, arguments) : fn.call(ctx, a) : fn.call(ctx);
          }
          boundFn._length = fn.length;
          return boundFn;
        }
        function nativeBind(fn, ctx) {
          return fn.bind(ctx);
        }
        var bind = Function.prototype.bind ? nativeBind : polyfillBind;
        function toArray(list, start) {
          start = start || 0;
          var i = list.length - start;
          var ret = new Array(i);
          while (i--) {
            ret[i] = list[i + start];
          }
          return ret;
        }
        function extend(to, _from) {
          for (var key in _from) {
            to[key] = _from[key];
          }
          return to;
        }
        function toObject(arr) {
          var res = {};
          for (var i = 0; i < arr.length; i++) {
            if (arr[i]) {
              extend(res, arr[i]);
            }
          }
          return res;
        }
        function noop(a, b, c) {
        }
        var no = function(a, b, c) {
          return false;
        };
        var identity = function(_) {
          return _;
        };
        function genStaticKeys(modules2) {
          return modules2.reduce(function(keys, m) {
            return keys.concat(m.staticKeys || []);
          }, []).join(",");
        }
        function looseEqual(a, b) {
          if (a === b) {
            return true;
          }
          var isObjectA = isObject(a);
          var isObjectB = isObject(b);
          if (isObjectA && isObjectB) {
            try {
              var isArrayA = Array.isArray(a);
              var isArrayB = Array.isArray(b);
              if (isArrayA && isArrayB) {
                return a.length === b.length && a.every(function(e, i) {
                  return looseEqual(e, b[i]);
                });
              } else if (a instanceof Date && b instanceof Date) {
                return a.getTime() === b.getTime();
              } else if (!isArrayA && !isArrayB) {
                var keysA = Object.keys(a);
                var keysB = Object.keys(b);
                return keysA.length === keysB.length && keysA.every(function(key) {
                  return looseEqual(a[key], b[key]);
                });
              } else {
                return false;
              }
            } catch (e) {
              return false;
            }
          } else if (!isObjectA && !isObjectB) {
            return String(a) === String(b);
          } else {
            return false;
          }
        }
        function looseIndexOf(arr, val) {
          for (var i = 0; i < arr.length; i++) {
            if (looseEqual(arr[i], val)) {
              return i;
            }
          }
          return -1;
        }
        function once(fn) {
          var called = false;
          return function() {
            if (!called) {
              called = true;
              fn.apply(this, arguments);
            }
          };
        }
        var SSR_ATTR = "data-server-rendered";
        var ASSET_TYPES = [
          "component",
          "directive",
          "filter"
        ];
        var LIFECYCLE_HOOKS = [
          "beforeCreate",
          "created",
          "beforeMount",
          "mounted",
          "beforeUpdate",
          "updated",
          "beforeDestroy",
          "destroyed",
          "activated",
          "deactivated",
          "errorCaptured",
          "serverPrefetch"
        ];
        var config = {
          optionMergeStrategies: /* @__PURE__ */ Object.create(null),
          silent: false,
          productionTip: true,
          devtools: true,
          performance: false,
          errorHandler: null,
          warnHandler: null,
          ignoredElements: [],
          keyCodes: /* @__PURE__ */ Object.create(null),
          isReservedTag: no,
          isReservedAttr: no,
          isUnknownElement: no,
          getTagNamespace: noop,
          parsePlatformTagName: identity,
          mustUseProp: no,
          async: true,
          _lifecycleHooks: LIFECYCLE_HOOKS
        };
        var unicodeRegExp = /a-zA-Z\u00B7\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u037D\u037F-\u1FFF\u200C-\u200D\u203F-\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD/;
        function isReserved(str2) {
          var c = (str2 + "").charCodeAt(0);
          return c === 36 || c === 95;
        }
        function def(obj, key, val, enumerable) {
          Object.defineProperty(obj, key, {
            value: val,
            enumerable: !!enumerable,
            writable: true,
            configurable: true
          });
        }
        var bailRE = new RegExp("[^" + unicodeRegExp.source + ".$_\\d]");
        function parsePath(path) {
          if (bailRE.test(path)) {
            return;
          }
          var segments = path.split(".");
          return function(obj) {
            for (var i = 0; i < segments.length; i++) {
              if (!obj) {
                return;
              }
              obj = obj[segments[i]];
            }
            return obj;
          };
        }
        var hasProto = "__proto__" in {};
        var inBrowser = typeof window !== "undefined";
        var inWeex = typeof WXEnvironment !== "undefined" && !!WXEnvironment.platform;
        var weexPlatform = inWeex && WXEnvironment.platform.toLowerCase();
        var UA = inBrowser && window.navigator.userAgent.toLowerCase();
        var isIE = UA && /msie|trident/.test(UA);
        var isIE9 = UA && UA.indexOf("msie 9.0") > 0;
        var isEdge = UA && UA.indexOf("edge/") > 0;
        var isAndroid = UA && UA.indexOf("android") > 0 || weexPlatform === "android";
        var isIOS = UA && /iphone|ipad|ipod|ios/.test(UA) || weexPlatform === "ios";
        var isChrome = UA && /chrome\/\d+/.test(UA) && !isEdge;
        var isPhantomJS = UA && /phantomjs/.test(UA);
        var isFF = UA && UA.match(/firefox\/(\d+)/);
        var nativeWatch = {}.watch;
        var supportsPassive = false;
        if (inBrowser) {
          try {
            var opts = {};
            Object.defineProperty(opts, "passive", {
              get: function get() {
                supportsPassive = true;
              }
            });
            window.addEventListener("test-passive", null, opts);
          } catch (e) {
          }
        }
        var _isServer;
        var isServerRendering = function() {
          if (_isServer === void 0) {
            if (!inBrowser && !inWeex && typeof global !== "undefined") {
              _isServer = global["process"] && global["process"].env.VUE_ENV === "server";
            } else {
              _isServer = false;
            }
          }
          return _isServer;
        };
        var devtools = inBrowser && window.__VUE_DEVTOOLS_GLOBAL_HOOK__;
        function isNative(Ctor) {
          return typeof Ctor === "function" && /native code/.test(Ctor.toString());
        }
        var hasSymbol = typeof Symbol !== "undefined" && isNative(Symbol) && typeof Reflect !== "undefined" && isNative(Reflect.ownKeys);
        var _Set;
        if (typeof Set !== "undefined" && isNative(Set)) {
          _Set = Set;
        } else {
          _Set = /* @__PURE__ */ function() {
            function Set2() {
              this.set = /* @__PURE__ */ Object.create(null);
            }
            Set2.prototype.has = function has2(key) {
              return this.set[key] === true;
            };
            Set2.prototype.add = function add2(key) {
              this.set[key] = true;
            };
            Set2.prototype.clear = function clear() {
              this.set = /* @__PURE__ */ Object.create(null);
            };
            return Set2;
          }();
        }
        var warn = noop;
        var tip = noop;
        var generateComponentTrace = noop;
        var formatComponentName = noop;
        {
          var hasConsole = typeof console !== "undefined";
          var classifyRE = /(?:^|[-_])(\w)/g;
          var classify = function(str2) {
            return str2.replace(classifyRE, function(c) {
              return c.toUpperCase();
            }).replace(/[-_]/g, "");
          };
          warn = function(msg, vm) {
            var trace = vm ? generateComponentTrace(vm) : "";
            if (config.warnHandler) {
              config.warnHandler.call(null, msg, vm, trace);
            } else if (hasConsole && !config.silent) {
              console.error("[Vue warn]: " + msg + trace);
            }
          };
          tip = function(msg, vm) {
            if (hasConsole && !config.silent) {
              console.warn("[Vue tip]: " + msg + (vm ? generateComponentTrace(vm) : ""));
            }
          };
          formatComponentName = function(vm, includeFile) {
            if (vm.$root === vm) {
              return "<Root>";
            }
            var options = typeof vm === "function" && vm.cid != null ? vm.options : vm._isVue ? vm.$options || vm.constructor.options : vm;
            var name = options.name || options._componentTag;
            var file = options.__file;
            if (!name && file) {
              var match = file.match(/([^/\\]+)\.vue$/);
              name = match && match[1];
            }
            return (name ? "<" + classify(name) + ">" : "<Anonymous>") + (file && includeFile !== false ? " at " + file : "");
          };
          var repeat = function(str2, n) {
            var res = "";
            while (n) {
              if (n % 2 === 1) {
                res += str2;
              }
              if (n > 1) {
                str2 += str2;
              }
              n >>= 1;
            }
            return res;
          };
          generateComponentTrace = function(vm) {
            if (vm._isVue && vm.$parent) {
              var tree = [];
              var currentRecursiveSequence = 0;
              while (vm) {
                if (tree.length > 0) {
                  var last = tree[tree.length - 1];
                  if (last.constructor === vm.constructor) {
                    currentRecursiveSequence++;
                    vm = vm.$parent;
                    continue;
                  } else if (currentRecursiveSequence > 0) {
                    tree[tree.length - 1] = [last, currentRecursiveSequence];
                    currentRecursiveSequence = 0;
                  }
                }
                tree.push(vm);
                vm = vm.$parent;
              }
              return "\n\nfound in\n\n" + tree.map(function(vm2, i) {
                return "" + (i === 0 ? "---> " : repeat(" ", 5 + i * 2)) + (Array.isArray(vm2) ? formatComponentName(vm2[0]) + "... (" + vm2[1] + " recursive calls)" : formatComponentName(vm2));
              }).join("\n");
            } else {
              return "\n\n(found in " + formatComponentName(vm) + ")";
            }
          };
        }
        var uid = 0;
        var Dep = function Dep2() {
          this.id = uid++;
          this.subs = [];
        };
        Dep.prototype.addSub = function addSub(sub) {
          this.subs.push(sub);
        };
        Dep.prototype.removeSub = function removeSub(sub) {
          remove(this.subs, sub);
        };
        Dep.prototype.depend = function depend() {
          if (Dep.target) {
            Dep.target.addDep(this);
          }
        };
        Dep.prototype.notify = function notify() {
          var subs = this.subs.slice();
          if (!config.async) {
            subs.sort(function(a, b) {
              return a.id - b.id;
            });
          }
          for (var i = 0, l = subs.length; i < l; i++) {
            subs[i].update();
          }
        };
        Dep.target = null;
        var targetStack = [];
        function pushTarget(target2) {
          targetStack.push(target2);
          Dep.target = target2;
        }
        function popTarget() {
          targetStack.pop();
          Dep.target = targetStack[targetStack.length - 1];
        }
        var VNode = function VNode2(tag, data, children, text2, elm, context, componentOptions, asyncFactory) {
          this.tag = tag;
          this.data = data;
          this.children = children;
          this.text = text2;
          this.elm = elm;
          this.ns = void 0;
          this.context = context;
          this.fnContext = void 0;
          this.fnOptions = void 0;
          this.fnScopeId = void 0;
          this.key = data && data.key;
          this.componentOptions = componentOptions;
          this.componentInstance = void 0;
          this.parent = void 0;
          this.raw = false;
          this.isStatic = false;
          this.isRootInsert = true;
          this.isComment = false;
          this.isCloned = false;
          this.isOnce = false;
          this.asyncFactory = asyncFactory;
          this.asyncMeta = void 0;
          this.isAsyncPlaceholder = false;
        };
        var prototypeAccessors = { child: { configurable: true } };
        prototypeAccessors.child.get = function() {
          return this.componentInstance;
        };
        Object.defineProperties(VNode.prototype, prototypeAccessors);
        var createEmptyVNode = function(text2) {
          if (text2 === void 0)
            text2 = "";
          var node = new VNode();
          node.text = text2;
          node.isComment = true;
          return node;
        };
        function createTextVNode(val) {
          return new VNode(void 0, void 0, void 0, String(val));
        }
        function cloneVNode(vnode) {
          var cloned = new VNode(vnode.tag, vnode.data, vnode.children && vnode.children.slice(), vnode.text, vnode.elm, vnode.context, vnode.componentOptions, vnode.asyncFactory);
          cloned.ns = vnode.ns;
          cloned.isStatic = vnode.isStatic;
          cloned.key = vnode.key;
          cloned.isComment = vnode.isComment;
          cloned.fnContext = vnode.fnContext;
          cloned.fnOptions = vnode.fnOptions;
          cloned.fnScopeId = vnode.fnScopeId;
          cloned.asyncMeta = vnode.asyncMeta;
          cloned.isCloned = true;
          return cloned;
        }
        var arrayProto = Array.prototype;
        var arrayMethods = Object.create(arrayProto);
        var methodsToPatch = [
          "push",
          "pop",
          "shift",
          "unshift",
          "splice",
          "sort",
          "reverse"
        ];
        methodsToPatch.forEach(function(method) {
          var original = arrayProto[method];
          def(arrayMethods, method, function mutator() {
            var args = [], len2 = arguments.length;
            while (len2--)
              args[len2] = arguments[len2];
            var result = original.apply(this, args);
            var ob = this.__ob__;
            var inserted;
            switch (method) {
              case "push":
              case "unshift":
                inserted = args;
                break;
              case "splice":
                inserted = args.slice(2);
                break;
            }
            if (inserted) {
              ob.observeArray(inserted);
            }
            ob.dep.notify();
            return result;
          });
        });
        var arrayKeys = Object.getOwnPropertyNames(arrayMethods);
        var shouldObserve = true;
        function toggleObserving(value) {
          shouldObserve = value;
        }
        var Observer = function Observer2(value) {
          this.value = value;
          this.dep = new Dep();
          this.vmCount = 0;
          def(value, "__ob__", this);
          if (Array.isArray(value)) {
            if (hasProto) {
              protoAugment(value, arrayMethods);
            } else {
              copyAugment(value, arrayMethods, arrayKeys);
            }
            this.observeArray(value);
          } else {
            this.walk(value);
          }
        };
        Observer.prototype.walk = function walk(obj) {
          var keys = Object.keys(obj);
          for (var i = 0; i < keys.length; i++) {
            defineReactive$$1(obj, keys[i]);
          }
        };
        Observer.prototype.observeArray = function observeArray(items) {
          for (var i = 0, l = items.length; i < l; i++) {
            observe(items[i]);
          }
        };
        function protoAugment(target2, src) {
          target2.__proto__ = src;
        }
        function copyAugment(target2, src, keys) {
          for (var i = 0, l = keys.length; i < l; i++) {
            var key = keys[i];
            def(target2, key, src[key]);
          }
        }
        function observe(value, asRootData) {
          if (!isObject(value) || value instanceof VNode) {
            return;
          }
          var ob;
          if (hasOwn(value, "__ob__") && value.__ob__ instanceof Observer) {
            ob = value.__ob__;
          } else if (shouldObserve && !isServerRendering() && (Array.isArray(value) || isPlainObject(value)) && Object.isExtensible(value) && !value._isVue) {
            ob = new Observer(value);
          }
          if (asRootData && ob) {
            ob.vmCount++;
          }
          return ob;
        }
        function defineReactive$$1(obj, key, val, customSetter, shallow) {
          var dep = new Dep();
          var property = Object.getOwnPropertyDescriptor(obj, key);
          if (property && property.configurable === false) {
            return;
          }
          var getter = property && property.get;
          var setter = property && property.set;
          if ((!getter || setter) && arguments.length === 2) {
            val = obj[key];
          }
          var childOb = !shallow && observe(val);
          Object.defineProperty(obj, key, {
            enumerable: true,
            configurable: true,
            get: function reactiveGetter() {
              var value = getter ? getter.call(obj) : val;
              if (Dep.target) {
                dep.depend();
                if (childOb) {
                  childOb.dep.depend();
                  if (Array.isArray(value)) {
                    dependArray(value);
                  }
                }
              }
              return value;
            },
            set: function reactiveSetter(newVal) {
              var value = getter ? getter.call(obj) : val;
              if (newVal === value || newVal !== newVal && value !== value) {
                return;
              }
              if (customSetter) {
                customSetter();
              }
              if (getter && !setter) {
                return;
              }
              if (setter) {
                setter.call(obj, newVal);
              } else {
                val = newVal;
              }
              childOb = !shallow && observe(newVal);
              dep.notify();
            }
          });
        }
        function set(target2, key, val) {
          if (isUndef(target2) || isPrimitive(target2)) {
            warn("Cannot set reactive property on undefined, null, or primitive value: " + target2);
          }
          if (Array.isArray(target2) && isValidArrayIndex(key)) {
            target2.length = Math.max(target2.length, key);
            target2.splice(key, 1, val);
            return val;
          }
          if (key in target2 && !(key in Object.prototype)) {
            target2[key] = val;
            return val;
          }
          var ob = target2.__ob__;
          if (target2._isVue || ob && ob.vmCount) {
            warn("Avoid adding reactive properties to a Vue instance or its root $data at runtime - declare it upfront in the data option.");
            return val;
          }
          if (!ob) {
            target2[key] = val;
            return val;
          }
          defineReactive$$1(ob.value, key, val);
          ob.dep.notify();
          return val;
        }
        function del(target2, key) {
          if (isUndef(target2) || isPrimitive(target2)) {
            warn("Cannot delete reactive property on undefined, null, or primitive value: " + target2);
          }
          if (Array.isArray(target2) && isValidArrayIndex(key)) {
            target2.splice(key, 1);
            return;
          }
          var ob = target2.__ob__;
          if (target2._isVue || ob && ob.vmCount) {
            warn("Avoid deleting properties on a Vue instance or its root $data - just set it to null.");
            return;
          }
          if (!hasOwn(target2, key)) {
            return;
          }
          delete target2[key];
          if (!ob) {
            return;
          }
          ob.dep.notify();
        }
        function dependArray(value) {
          for (var e = void 0, i = 0, l = value.length; i < l; i++) {
            e = value[i];
            e && e.__ob__ && e.__ob__.dep.depend();
            if (Array.isArray(e)) {
              dependArray(e);
            }
          }
        }
        var strats = config.optionMergeStrategies;
        {
          strats.el = strats.propsData = function(parent, child, vm, key) {
            if (!vm) {
              warn('option "' + key + '" can only be used during instance creation with the `new` keyword.');
            }
            return defaultStrat(parent, child);
          };
        }
        function mergeData(to, from) {
          if (!from) {
            return to;
          }
          var key, toVal, fromVal;
          var keys = hasSymbol ? Reflect.ownKeys(from) : Object.keys(from);
          for (var i = 0; i < keys.length; i++) {
            key = keys[i];
            if (key === "__ob__") {
              continue;
            }
            toVal = to[key];
            fromVal = from[key];
            if (!hasOwn(to, key)) {
              set(to, key, fromVal);
            } else if (toVal !== fromVal && isPlainObject(toVal) && isPlainObject(fromVal)) {
              mergeData(toVal, fromVal);
            }
          }
          return to;
        }
        function mergeDataOrFn(parentVal, childVal, vm) {
          if (!vm) {
            if (!childVal) {
              return parentVal;
            }
            if (!parentVal) {
              return childVal;
            }
            return function mergedDataFn() {
              return mergeData(typeof childVal === "function" ? childVal.call(this, this) : childVal, typeof parentVal === "function" ? parentVal.call(this, this) : parentVal);
            };
          } else {
            return function mergedInstanceDataFn() {
              var instanceData = typeof childVal === "function" ? childVal.call(vm, vm) : childVal;
              var defaultData = typeof parentVal === "function" ? parentVal.call(vm, vm) : parentVal;
              if (instanceData) {
                return mergeData(instanceData, defaultData);
              } else {
                return defaultData;
              }
            };
          }
        }
        strats.data = function(parentVal, childVal, vm) {
          if (!vm) {
            if (childVal && typeof childVal !== "function") {
              warn('The "data" option should be a function that returns a per-instance value in component definitions.', vm);
              return parentVal;
            }
            return mergeDataOrFn(parentVal, childVal);
          }
          return mergeDataOrFn(parentVal, childVal, vm);
        };
        function mergeHook(parentVal, childVal) {
          var res = childVal ? parentVal ? parentVal.concat(childVal) : Array.isArray(childVal) ? childVal : [childVal] : parentVal;
          return res ? dedupeHooks(res) : res;
        }
        function dedupeHooks(hooks2) {
          var res = [];
          for (var i = 0; i < hooks2.length; i++) {
            if (res.indexOf(hooks2[i]) === -1) {
              res.push(hooks2[i]);
            }
          }
          return res;
        }
        LIFECYCLE_HOOKS.forEach(function(hook) {
          strats[hook] = mergeHook;
        });
        function mergeAssets(parentVal, childVal, vm, key) {
          var res = Object.create(parentVal || null);
          if (childVal) {
            assertObjectType(key, childVal, vm);
            return extend(res, childVal);
          } else {
            return res;
          }
        }
        ASSET_TYPES.forEach(function(type) {
          strats[type + "s"] = mergeAssets;
        });
        strats.watch = function(parentVal, childVal, vm, key) {
          if (parentVal === nativeWatch) {
            parentVal = void 0;
          }
          if (childVal === nativeWatch) {
            childVal = void 0;
          }
          if (!childVal) {
            return Object.create(parentVal || null);
          }
          {
            assertObjectType(key, childVal, vm);
          }
          if (!parentVal) {
            return childVal;
          }
          var ret = {};
          extend(ret, parentVal);
          for (var key$1 in childVal) {
            var parent = ret[key$1];
            var child = childVal[key$1];
            if (parent && !Array.isArray(parent)) {
              parent = [parent];
            }
            ret[key$1] = parent ? parent.concat(child) : Array.isArray(child) ? child : [child];
          }
          return ret;
        };
        strats.props = strats.methods = strats.inject = strats.computed = function(parentVal, childVal, vm, key) {
          if (childVal && true) {
            assertObjectType(key, childVal, vm);
          }
          if (!parentVal) {
            return childVal;
          }
          var ret = /* @__PURE__ */ Object.create(null);
          extend(ret, parentVal);
          if (childVal) {
            extend(ret, childVal);
          }
          return ret;
        };
        strats.provide = mergeDataOrFn;
        var defaultStrat = function(parentVal, childVal) {
          return childVal === void 0 ? parentVal : childVal;
        };
        function checkComponents(options) {
          for (var key in options.components) {
            validateComponentName(key);
          }
        }
        function validateComponentName(name) {
          if (!new RegExp("^[a-zA-Z][\\-\\.0-9_" + unicodeRegExp.source + "]*$").test(name)) {
            warn('Invalid component name: "' + name + '". Component names should conform to valid custom element name in html5 specification.');
          }
          if (isBuiltInTag(name) || config.isReservedTag(name)) {
            warn("Do not use built-in or reserved HTML elements as component id: " + name);
          }
        }
        function normalizeProps(options, vm) {
          var props2 = options.props;
          if (!props2) {
            return;
          }
          var res = {};
          var i, val, name;
          if (Array.isArray(props2)) {
            i = props2.length;
            while (i--) {
              val = props2[i];
              if (typeof val === "string") {
                name = camelize(val);
                res[name] = { type: null };
              } else {
                warn("props must be strings when using array syntax.");
              }
            }
          } else if (isPlainObject(props2)) {
            for (var key in props2) {
              val = props2[key];
              name = camelize(key);
              res[name] = isPlainObject(val) ? val : { type: val };
            }
          } else {
            warn('Invalid value for option "props": expected an Array or an Object, but got ' + toRawType(props2) + ".", vm);
          }
          options.props = res;
        }
        function normalizeInject(options, vm) {
          var inject = options.inject;
          if (!inject) {
            return;
          }
          var normalized = options.inject = {};
          if (Array.isArray(inject)) {
            for (var i = 0; i < inject.length; i++) {
              normalized[inject[i]] = { from: inject[i] };
            }
          } else if (isPlainObject(inject)) {
            for (var key in inject) {
              var val = inject[key];
              normalized[key] = isPlainObject(val) ? extend({ from: key }, val) : { from: val };
            }
          } else {
            warn('Invalid value for option "inject": expected an Array or an Object, but got ' + toRawType(inject) + ".", vm);
          }
        }
        function normalizeDirectives(options) {
          var dirs = options.directives;
          if (dirs) {
            for (var key in dirs) {
              var def$$1 = dirs[key];
              if (typeof def$$1 === "function") {
                dirs[key] = { bind: def$$1, update: def$$1 };
              }
            }
          }
        }
        function assertObjectType(name, value, vm) {
          if (!isPlainObject(value)) {
            warn('Invalid value for option "' + name + '": expected an Object, but got ' + toRawType(value) + ".", vm);
          }
        }
        function mergeOptions(parent, child, vm) {
          {
            checkComponents(child);
          }
          if (typeof child === "function") {
            child = child.options;
          }
          normalizeProps(child, vm);
          normalizeInject(child, vm);
          normalizeDirectives(child);
          if (!child._base) {
            if (child.extends) {
              parent = mergeOptions(parent, child.extends, vm);
            }
            if (child.mixins) {
              for (var i = 0, l = child.mixins.length; i < l; i++) {
                parent = mergeOptions(parent, child.mixins[i], vm);
              }
            }
          }
          var options = {};
          var key;
          for (key in parent) {
            mergeField(key);
          }
          for (key in child) {
            if (!hasOwn(parent, key)) {
              mergeField(key);
            }
          }
          function mergeField(key2) {
            var strat = strats[key2] || defaultStrat;
            options[key2] = strat(parent[key2], child[key2], vm, key2);
          }
          return options;
        }
        function resolveAsset(options, type, id, warnMissing) {
          if (typeof id !== "string") {
            return;
          }
          var assets = options[type];
          if (hasOwn(assets, id)) {
            return assets[id];
          }
          var camelizedId = camelize(id);
          if (hasOwn(assets, camelizedId)) {
            return assets[camelizedId];
          }
          var PascalCaseId = capitalize(camelizedId);
          if (hasOwn(assets, PascalCaseId)) {
            return assets[PascalCaseId];
          }
          var res = assets[id] || assets[camelizedId] || assets[PascalCaseId];
          if (warnMissing && !res) {
            warn("Failed to resolve " + type.slice(0, -1) + ": " + id, options);
          }
          return res;
        }
        function validateProp(key, propOptions, propsData, vm) {
          var prop = propOptions[key];
          var absent = !hasOwn(propsData, key);
          var value = propsData[key];
          var booleanIndex = getTypeIndex(Boolean, prop.type);
          if (booleanIndex > -1) {
            if (absent && !hasOwn(prop, "default")) {
              value = false;
            } else if (value === "" || value === hyphenate(key)) {
              var stringIndex = getTypeIndex(String, prop.type);
              if (stringIndex < 0 || booleanIndex < stringIndex) {
                value = true;
              }
            }
          }
          if (value === void 0) {
            value = getPropDefaultValue(vm, prop, key);
            var prevShouldObserve = shouldObserve;
            toggleObserving(true);
            observe(value);
            toggleObserving(prevShouldObserve);
          }
          {
            assertProp(prop, key, value, vm, absent);
          }
          return value;
        }
        function getPropDefaultValue(vm, prop, key) {
          if (!hasOwn(prop, "default")) {
            return void 0;
          }
          var def2 = prop.default;
          if (isObject(def2)) {
            warn('Invalid default value for prop "' + key + '": Props with type Object/Array must use a factory function to return the default value.', vm);
          }
          if (vm && vm.$options.propsData && vm.$options.propsData[key] === void 0 && vm._props[key] !== void 0) {
            return vm._props[key];
          }
          return typeof def2 === "function" && getType(prop.type) !== "Function" ? def2.call(vm) : def2;
        }
        function assertProp(prop, name, value, vm, absent) {
          if (prop.required && absent) {
            warn('Missing required prop: "' + name + '"', vm);
            return;
          }
          if (value == null && !prop.required) {
            return;
          }
          var type = prop.type;
          var valid = !type || type === true;
          var expectedTypes = [];
          if (type) {
            if (!Array.isArray(type)) {
              type = [type];
            }
            for (var i = 0; i < type.length && !valid; i++) {
              var assertedType = assertType(value, type[i], vm);
              expectedTypes.push(assertedType.expectedType || "");
              valid = assertedType.valid;
            }
          }
          var haveExpectedTypes = expectedTypes.some(function(t) {
            return t;
          });
          if (!valid && haveExpectedTypes) {
            warn(getInvalidTypeMessage(name, value, expectedTypes), vm);
            return;
          }
          var validator = prop.validator;
          if (validator) {
            if (!validator(value)) {
              warn('Invalid prop: custom validator check failed for prop "' + name + '".', vm);
            }
          }
        }
        var simpleCheckRE = /^(String|Number|Boolean|Function|Symbol|BigInt)$/;
        function assertType(value, type, vm) {
          var valid;
          var expectedType = getType(type);
          if (simpleCheckRE.test(expectedType)) {
            var t = typeof value;
            valid = t === expectedType.toLowerCase();
            if (!valid && t === "object") {
              valid = value instanceof type;
            }
          } else if (expectedType === "Object") {
            valid = isPlainObject(value);
          } else if (expectedType === "Array") {
            valid = Array.isArray(value);
          } else {
            try {
              valid = value instanceof type;
            } catch (e) {
              warn('Invalid prop type: "' + String(type) + '" is not a constructor', vm);
              valid = false;
            }
          }
          return {
            valid,
            expectedType
          };
        }
        var functionTypeCheckRE = /^\s*function (\w+)/;
        function getType(fn) {
          var match = fn && fn.toString().match(functionTypeCheckRE);
          return match ? match[1] : "";
        }
        function isSameType(a, b) {
          return getType(a) === getType(b);
        }
        function getTypeIndex(type, expectedTypes) {
          if (!Array.isArray(expectedTypes)) {
            return isSameType(expectedTypes, type) ? 0 : -1;
          }
          for (var i = 0, len2 = expectedTypes.length; i < len2; i++) {
            if (isSameType(expectedTypes[i], type)) {
              return i;
            }
          }
          return -1;
        }
        function getInvalidTypeMessage(name, value, expectedTypes) {
          var message = 'Invalid prop: type check failed for prop "' + name + '". Expected ' + expectedTypes.map(capitalize).join(", ");
          var expectedType = expectedTypes[0];
          var receivedType = toRawType(value);
          if (expectedTypes.length === 1 && isExplicable(expectedType) && isExplicable(typeof value) && !isBoolean(expectedType, receivedType)) {
            message += " with value " + styleValue(value, expectedType);
          }
          message += ", got " + receivedType + " ";
          if (isExplicable(receivedType)) {
            message += "with value " + styleValue(value, receivedType) + ".";
          }
          return message;
        }
        function styleValue(value, type) {
          if (type === "String") {
            return '"' + value + '"';
          } else if (type === "Number") {
            return "" + Number(value);
          } else {
            return "" + value;
          }
        }
        var EXPLICABLE_TYPES = ["string", "number", "boolean"];
        function isExplicable(value) {
          return EXPLICABLE_TYPES.some(function(elem) {
            return value.toLowerCase() === elem;
          });
        }
        function isBoolean() {
          var args = [], len2 = arguments.length;
          while (len2--)
            args[len2] = arguments[len2];
          return args.some(function(elem) {
            return elem.toLowerCase() === "boolean";
          });
        }
        function handleError(err, vm, info) {
          pushTarget();
          try {
            if (vm) {
              var cur = vm;
              while (cur = cur.$parent) {
                var hooks2 = cur.$options.errorCaptured;
                if (hooks2) {
                  for (var i = 0; i < hooks2.length; i++) {
                    try {
                      var capture = hooks2[i].call(cur, err, vm, info) === false;
                      if (capture) {
                        return;
                      }
                    } catch (e) {
                      globalHandleError(e, cur, "errorCaptured hook");
                    }
                  }
                }
              }
            }
            globalHandleError(err, vm, info);
          } finally {
            popTarget();
          }
        }
        function invokeWithErrorHandling(handler, context, args, vm, info) {
          var res;
          try {
            res = args ? handler.apply(context, args) : handler.call(context);
            if (res && !res._isVue && isPromise(res) && !res._handled) {
              res.catch(function(e) {
                return handleError(e, vm, info + " (Promise/async)");
              });
              res._handled = true;
            }
          } catch (e) {
            handleError(e, vm, info);
          }
          return res;
        }
        function globalHandleError(err, vm, info) {
          if (config.errorHandler) {
            try {
              return config.errorHandler.call(null, err, vm, info);
            } catch (e) {
              if (e !== err) {
                logError(e, null, "config.errorHandler");
              }
            }
          }
          logError(err, vm, info);
        }
        function logError(err, vm, info) {
          {
            warn("Error in " + info + ': "' + err.toString() + '"', vm);
          }
          if ((inBrowser || inWeex) && typeof console !== "undefined") {
            console.error(err);
          } else {
            throw err;
          }
        }
        var isUsingMicroTask = false;
        var callbacks = [];
        var pending = false;
        function flushCallbacks() {
          pending = false;
          var copies = callbacks.slice(0);
          callbacks.length = 0;
          for (var i = 0; i < copies.length; i++) {
            copies[i]();
          }
        }
        var timerFunc;
        if (typeof Promise !== "undefined" && isNative(Promise)) {
          var p = Promise.resolve();
          timerFunc = function() {
            p.then(flushCallbacks);
            if (isIOS) {
              setTimeout(noop);
            }
          };
          isUsingMicroTask = true;
        } else if (!isIE && typeof MutationObserver !== "undefined" && (isNative(MutationObserver) || MutationObserver.toString() === "[object MutationObserverConstructor]")) {
          var counter = 1;
          var observer = new MutationObserver(flushCallbacks);
          var textNode = document.createTextNode(String(counter));
          observer.observe(textNode, {
            characterData: true
          });
          timerFunc = function() {
            counter = (counter + 1) % 2;
            textNode.data = String(counter);
          };
          isUsingMicroTask = true;
        } else if (typeof setImmediate !== "undefined" && isNative(setImmediate)) {
          timerFunc = function() {
            setImmediate(flushCallbacks);
          };
        } else {
          timerFunc = function() {
            setTimeout(flushCallbacks, 0);
          };
        }
        function nextTick(cb, ctx) {
          var _resolve;
          callbacks.push(function() {
            if (cb) {
              try {
                cb.call(ctx);
              } catch (e) {
                handleError(e, ctx, "nextTick");
              }
            } else if (_resolve) {
              _resolve(ctx);
            }
          });
          if (!pending) {
            pending = true;
            timerFunc();
          }
          if (!cb && typeof Promise !== "undefined") {
            return new Promise(function(resolve) {
              _resolve = resolve;
            });
          }
        }
        var mark;
        var measure;
        {
          var perf = inBrowser && window.performance;
          if (perf && perf.mark && perf.measure && perf.clearMarks && perf.clearMeasures) {
            mark = function(tag) {
              return perf.mark(tag);
            };
            measure = function(name, startTag, endTag2) {
              perf.measure(name, startTag, endTag2);
              perf.clearMarks(startTag);
              perf.clearMarks(endTag2);
            };
          }
        }
        var initProxy;
        {
          var allowedGlobals = makeMap("Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,BigInt,require");
          var warnNonPresent = function(target2, key) {
            warn('Property or method "' + key + '" is not defined on the instance but referenced during render. Make sure that this property is reactive, either in the data option, or for class-based components, by initializing the property. See: https://vuejs.org/v2/guide/reactivity.html#Declaring-Reactive-Properties.', target2);
          };
          var warnReservedPrefix = function(target2, key) {
            warn('Property "' + key + '" must be accessed with "$data.' + key + '" because properties starting with "$" or "_" are not proxied in the Vue instance to prevent conflicts with Vue internals. See: https://vuejs.org/v2/api/#data', target2);
          };
          var hasProxy = typeof Proxy !== "undefined" && isNative(Proxy);
          if (hasProxy) {
            var isBuiltInModifier = makeMap("stop,prevent,self,ctrl,shift,alt,meta,exact");
            config.keyCodes = new Proxy(config.keyCodes, {
              set: function set2(target2, key, value) {
                if (isBuiltInModifier(key)) {
                  warn("Avoid overwriting built-in modifier in config.keyCodes: ." + key);
                  return false;
                } else {
                  target2[key] = value;
                  return true;
                }
              }
            });
          }
          var hasHandler = {
            has: function has2(target2, key) {
              var has3 = key in target2;
              var isAllowed = allowedGlobals(key) || typeof key === "string" && key.charAt(0) === "_" && !(key in target2.$data);
              if (!has3 && !isAllowed) {
                if (key in target2.$data) {
                  warnReservedPrefix(target2, key);
                } else {
                  warnNonPresent(target2, key);
                }
              }
              return has3 || !isAllowed;
            }
          };
          var getHandler = {
            get: function get(target2, key) {
              if (typeof key === "string" && !(key in target2)) {
                if (key in target2.$data) {
                  warnReservedPrefix(target2, key);
                } else {
                  warnNonPresent(target2, key);
                }
              }
              return target2[key];
            }
          };
          initProxy = function initProxy2(vm) {
            if (hasProxy) {
              var options = vm.$options;
              var handlers = options.render && options.render._withStripped ? getHandler : hasHandler;
              vm._renderProxy = new Proxy(vm, handlers);
            } else {
              vm._renderProxy = vm;
            }
          };
        }
        var seenObjects = new _Set();
        function traverse(val) {
          _traverse(val, seenObjects);
          seenObjects.clear();
        }
        function _traverse(val, seen) {
          var i, keys;
          var isA = Array.isArray(val);
          if (!isA && !isObject(val) || Object.isFrozen(val) || val instanceof VNode) {
            return;
          }
          if (val.__ob__) {
            var depId = val.__ob__.dep.id;
            if (seen.has(depId)) {
              return;
            }
            seen.add(depId);
          }
          if (isA) {
            i = val.length;
            while (i--) {
              _traverse(val[i], seen);
            }
          } else {
            keys = Object.keys(val);
            i = keys.length;
            while (i--) {
              _traverse(val[keys[i]], seen);
            }
          }
        }
        var normalizeEvent = cached(function(name) {
          var passive = name.charAt(0) === "&";
          name = passive ? name.slice(1) : name;
          var once$$1 = name.charAt(0) === "~";
          name = once$$1 ? name.slice(1) : name;
          var capture = name.charAt(0) === "!";
          name = capture ? name.slice(1) : name;
          return {
            name,
            once: once$$1,
            capture,
            passive
          };
        });
        function createFnInvoker(fns, vm) {
          function invoker() {
            var arguments$1 = arguments;
            var fns2 = invoker.fns;
            if (Array.isArray(fns2)) {
              var cloned = fns2.slice();
              for (var i = 0; i < cloned.length; i++) {
                invokeWithErrorHandling(cloned[i], null, arguments$1, vm, "v-on handler");
              }
            } else {
              return invokeWithErrorHandling(fns2, null, arguments, vm, "v-on handler");
            }
          }
          invoker.fns = fns;
          return invoker;
        }
        function updateListeners(on2, oldOn, add2, remove$$1, createOnceHandler2, vm) {
          var name, def$$1, cur, old, event;
          for (name in on2) {
            def$$1 = cur = on2[name];
            old = oldOn[name];
            event = normalizeEvent(name);
            if (isUndef(cur)) {
              warn('Invalid handler for event "' + event.name + '": got ' + String(cur), vm);
            } else if (isUndef(old)) {
              if (isUndef(cur.fns)) {
                cur = on2[name] = createFnInvoker(cur, vm);
              }
              if (isTrue(event.once)) {
                cur = on2[name] = createOnceHandler2(event.name, cur, event.capture);
              }
              add2(event.name, cur, event.capture, event.passive, event.params);
            } else if (cur !== old) {
              old.fns = cur;
              on2[name] = old;
            }
          }
          for (name in oldOn) {
            if (isUndef(on2[name])) {
              event = normalizeEvent(name);
              remove$$1(event.name, oldOn[name], event.capture);
            }
          }
        }
        function mergeVNodeHook(def2, hookKey, hook) {
          if (def2 instanceof VNode) {
            def2 = def2.data.hook || (def2.data.hook = {});
          }
          var invoker;
          var oldHook = def2[hookKey];
          function wrappedHook() {
            hook.apply(this, arguments);
            remove(invoker.fns, wrappedHook);
          }
          if (isUndef(oldHook)) {
            invoker = createFnInvoker([wrappedHook]);
          } else {
            if (isDef(oldHook.fns) && isTrue(oldHook.merged)) {
              invoker = oldHook;
              invoker.fns.push(wrappedHook);
            } else {
              invoker = createFnInvoker([oldHook, wrappedHook]);
            }
          }
          invoker.merged = true;
          def2[hookKey] = invoker;
        }
        function extractPropsFromVNodeData(data, Ctor, tag) {
          var propOptions = Ctor.options.props;
          if (isUndef(propOptions)) {
            return;
          }
          var res = {};
          var attrs2 = data.attrs;
          var props2 = data.props;
          if (isDef(attrs2) || isDef(props2)) {
            for (var key in propOptions) {
              var altKey = hyphenate(key);
              {
                var keyInLowerCase = key.toLowerCase();
                if (key !== keyInLowerCase && attrs2 && hasOwn(attrs2, keyInLowerCase)) {
                  tip('Prop "' + keyInLowerCase + '" is passed to component ' + formatComponentName(tag || Ctor) + ', but the declared prop name is "' + key + '". Note that HTML attributes are case-insensitive and camelCased props need to use their kebab-case equivalents when using in-DOM templates. You should probably use "' + altKey + '" instead of "' + key + '".');
                }
              }
              checkProp(res, props2, key, altKey, true) || checkProp(res, attrs2, key, altKey, false);
            }
          }
          return res;
        }
        function checkProp(res, hash2, key, altKey, preserve) {
          if (isDef(hash2)) {
            if (hasOwn(hash2, key)) {
              res[key] = hash2[key];
              if (!preserve) {
                delete hash2[key];
              }
              return true;
            } else if (hasOwn(hash2, altKey)) {
              res[key] = hash2[altKey];
              if (!preserve) {
                delete hash2[altKey];
              }
              return true;
            }
          }
          return false;
        }
        function simpleNormalizeChildren(children) {
          for (var i = 0; i < children.length; i++) {
            if (Array.isArray(children[i])) {
              return Array.prototype.concat.apply([], children);
            }
          }
          return children;
        }
        function normalizeChildren(children) {
          return isPrimitive(children) ? [createTextVNode(children)] : Array.isArray(children) ? normalizeArrayChildren(children) : void 0;
        }
        function isTextNode(node) {
          return isDef(node) && isDef(node.text) && isFalse(node.isComment);
        }
        function normalizeArrayChildren(children, nestedIndex) {
          var res = [];
          var i, c, lastIndex, last;
          for (i = 0; i < children.length; i++) {
            c = children[i];
            if (isUndef(c) || typeof c === "boolean") {
              continue;
            }
            lastIndex = res.length - 1;
            last = res[lastIndex];
            if (Array.isArray(c)) {
              if (c.length > 0) {
                c = normalizeArrayChildren(c, (nestedIndex || "") + "_" + i);
                if (isTextNode(c[0]) && isTextNode(last)) {
                  res[lastIndex] = createTextVNode(last.text + c[0].text);
                  c.shift();
                }
                res.push.apply(res, c);
              }
            } else if (isPrimitive(c)) {
              if (isTextNode(last)) {
                res[lastIndex] = createTextVNode(last.text + c);
              } else if (c !== "") {
                res.push(createTextVNode(c));
              }
            } else {
              if (isTextNode(c) && isTextNode(last)) {
                res[lastIndex] = createTextVNode(last.text + c.text);
              } else {
                if (isTrue(children._isVList) && isDef(c.tag) && isUndef(c.key) && isDef(nestedIndex)) {
                  c.key = "__vlist" + nestedIndex + "_" + i + "__";
                }
                res.push(c);
              }
            }
          }
          return res;
        }
        function initProvide(vm) {
          var provide = vm.$options.provide;
          if (provide) {
            vm._provided = typeof provide === "function" ? provide.call(vm) : provide;
          }
        }
        function initInjections(vm) {
          var result = resolveInject(vm.$options.inject, vm);
          if (result) {
            toggleObserving(false);
            Object.keys(result).forEach(function(key) {
              {
                defineReactive$$1(vm, key, result[key], function() {
                  warn('Avoid mutating an injected value directly since the changes will be overwritten whenever the provided component re-renders. injection being mutated: "' + key + '"', vm);
                });
              }
            });
            toggleObserving(true);
          }
        }
        function resolveInject(inject, vm) {
          if (inject) {
            var result = /* @__PURE__ */ Object.create(null);
            var keys = hasSymbol ? Reflect.ownKeys(inject) : Object.keys(inject);
            for (var i = 0; i < keys.length; i++) {
              var key = keys[i];
              if (key === "__ob__") {
                continue;
              }
              var provideKey = inject[key].from;
              var source = vm;
              while (source) {
                if (source._provided && hasOwn(source._provided, provideKey)) {
                  result[key] = source._provided[provideKey];
                  break;
                }
                source = source.$parent;
              }
              if (!source) {
                if ("default" in inject[key]) {
                  var provideDefault = inject[key].default;
                  result[key] = typeof provideDefault === "function" ? provideDefault.call(vm) : provideDefault;
                } else {
                  warn('Injection "' + key + '" not found', vm);
                }
              }
            }
            return result;
          }
        }
        function resolveSlots(children, context) {
          if (!children || !children.length) {
            return {};
          }
          var slots = {};
          for (var i = 0, l = children.length; i < l; i++) {
            var child = children[i];
            var data = child.data;
            if (data && data.attrs && data.attrs.slot) {
              delete data.attrs.slot;
            }
            if ((child.context === context || child.fnContext === context) && data && data.slot != null) {
              var name = data.slot;
              var slot = slots[name] || (slots[name] = []);
              if (child.tag === "template") {
                slot.push.apply(slot, child.children || []);
              } else {
                slot.push(child);
              }
            } else {
              (slots.default || (slots.default = [])).push(child);
            }
          }
          for (var name$1 in slots) {
            if (slots[name$1].every(isWhitespace)) {
              delete slots[name$1];
            }
          }
          return slots;
        }
        function isWhitespace(node) {
          return node.isComment && !node.asyncFactory || node.text === " ";
        }
        function isAsyncPlaceholder(node) {
          return node.isComment && node.asyncFactory;
        }
        function normalizeScopedSlots(slots, normalSlots, prevSlots) {
          var res;
          var hasNormalSlots = Object.keys(normalSlots).length > 0;
          var isStable = slots ? !!slots.$stable : !hasNormalSlots;
          var key = slots && slots.$key;
          if (!slots) {
            res = {};
          } else if (slots._normalized) {
            return slots._normalized;
          } else if (isStable && prevSlots && prevSlots !== emptyObject && key === prevSlots.$key && !hasNormalSlots && !prevSlots.$hasNormal) {
            return prevSlots;
          } else {
            res = {};
            for (var key$1 in slots) {
              if (slots[key$1] && key$1[0] !== "$") {
                res[key$1] = normalizeScopedSlot(normalSlots, key$1, slots[key$1]);
              }
            }
          }
          for (var key$2 in normalSlots) {
            if (!(key$2 in res)) {
              res[key$2] = proxyNormalSlot(normalSlots, key$2);
            }
          }
          if (slots && Object.isExtensible(slots)) {
            slots._normalized = res;
          }
          def(res, "$stable", isStable);
          def(res, "$key", key);
          def(res, "$hasNormal", hasNormalSlots);
          return res;
        }
        function normalizeScopedSlot(normalSlots, key, fn) {
          var normalized = function() {
            var res = arguments.length ? fn.apply(null, arguments) : fn({});
            res = res && typeof res === "object" && !Array.isArray(res) ? [res] : normalizeChildren(res);
            var vnode = res && res[0];
            return res && (!vnode || res.length === 1 && vnode.isComment && !isAsyncPlaceholder(vnode)) ? void 0 : res;
          };
          if (fn.proxy) {
            Object.defineProperty(normalSlots, key, {
              get: normalized,
              enumerable: true,
              configurable: true
            });
          }
          return normalized;
        }
        function proxyNormalSlot(slots, key) {
          return function() {
            return slots[key];
          };
        }
        function renderList(val, render) {
          var ret, i, l, keys, key;
          if (Array.isArray(val) || typeof val === "string") {
            ret = new Array(val.length);
            for (i = 0, l = val.length; i < l; i++) {
              ret[i] = render(val[i], i);
            }
          } else if (typeof val === "number") {
            ret = new Array(val);
            for (i = 0; i < val; i++) {
              ret[i] = render(i + 1, i);
            }
          } else if (isObject(val)) {
            if (hasSymbol && val[Symbol.iterator]) {
              ret = [];
              var iterator = val[Symbol.iterator]();
              var result = iterator.next();
              while (!result.done) {
                ret.push(render(result.value, ret.length));
                result = iterator.next();
              }
            } else {
              keys = Object.keys(val);
              ret = new Array(keys.length);
              for (i = 0, l = keys.length; i < l; i++) {
                key = keys[i];
                ret[i] = render(val[key], key, i);
              }
            }
          }
          if (!isDef(ret)) {
            ret = [];
          }
          ret._isVList = true;
          return ret;
        }
        function renderSlot(name, fallbackRender, props2, bindObject) {
          var scopedSlotFn = this.$scopedSlots[name];
          var nodes;
          if (scopedSlotFn) {
            props2 = props2 || {};
            if (bindObject) {
              if (!isObject(bindObject)) {
                warn("slot v-bind without argument expects an Object", this);
              }
              props2 = extend(extend({}, bindObject), props2);
            }
            nodes = scopedSlotFn(props2) || (typeof fallbackRender === "function" ? fallbackRender() : fallbackRender);
          } else {
            nodes = this.$slots[name] || (typeof fallbackRender === "function" ? fallbackRender() : fallbackRender);
          }
          var target2 = props2 && props2.slot;
          if (target2) {
            return this.$createElement("template", { slot: target2 }, nodes);
          } else {
            return nodes;
          }
        }
        function resolveFilter(id) {
          return resolveAsset(this.$options, "filters", id, true) || identity;
        }
        function isKeyNotMatch(expect, actual) {
          if (Array.isArray(expect)) {
            return expect.indexOf(actual) === -1;
          } else {
            return expect !== actual;
          }
        }
        function checkKeyCodes(eventKeyCode, key, builtInKeyCode, eventKeyName, builtInKeyName) {
          var mappedKeyCode = config.keyCodes[key] || builtInKeyCode;
          if (builtInKeyName && eventKeyName && !config.keyCodes[key]) {
            return isKeyNotMatch(builtInKeyName, eventKeyName);
          } else if (mappedKeyCode) {
            return isKeyNotMatch(mappedKeyCode, eventKeyCode);
          } else if (eventKeyName) {
            return hyphenate(eventKeyName) !== key;
          }
          return eventKeyCode === void 0;
        }
        function bindObjectProps(data, tag, value, asProp, isSync) {
          if (value) {
            if (!isObject(value)) {
              warn("v-bind without argument expects an Object or Array value", this);
            } else {
              if (Array.isArray(value)) {
                value = toObject(value);
              }
              var hash2;
              var loop = function(key2) {
                if (key2 === "class" || key2 === "style" || isReservedAttribute(key2)) {
                  hash2 = data;
                } else {
                  var type = data.attrs && data.attrs.type;
                  hash2 = asProp || config.mustUseProp(tag, type, key2) ? data.domProps || (data.domProps = {}) : data.attrs || (data.attrs = {});
                }
                var camelizedKey = camelize(key2);
                var hyphenatedKey = hyphenate(key2);
                if (!(camelizedKey in hash2) && !(hyphenatedKey in hash2)) {
                  hash2[key2] = value[key2];
                  if (isSync) {
                    var on2 = data.on || (data.on = {});
                    on2["update:" + key2] = function($event) {
                      value[key2] = $event;
                    };
                  }
                }
              };
              for (var key in value)
                loop(key);
            }
          }
          return data;
        }
        function renderStatic(index2, isInFor) {
          var cached2 = this._staticTrees || (this._staticTrees = []);
          var tree = cached2[index2];
          if (tree && !isInFor) {
            return tree;
          }
          tree = cached2[index2] = this.$options.staticRenderFns[index2].call(this._renderProxy, null, this);
          markStatic(tree, "__static__" + index2, false);
          return tree;
        }
        function markOnce(tree, index2, key) {
          markStatic(tree, "__once__" + index2 + (key ? "_" + key : ""), true);
          return tree;
        }
        function markStatic(tree, key, isOnce) {
          if (Array.isArray(tree)) {
            for (var i = 0; i < tree.length; i++) {
              if (tree[i] && typeof tree[i] !== "string") {
                markStaticNode(tree[i], key + "_" + i, isOnce);
              }
            }
          } else {
            markStaticNode(tree, key, isOnce);
          }
        }
        function markStaticNode(node, key, isOnce) {
          node.isStatic = true;
          node.key = key;
          node.isOnce = isOnce;
        }
        function bindObjectListeners(data, value) {
          if (value) {
            if (!isPlainObject(value)) {
              warn("v-on without argument expects an Object value", this);
            } else {
              var on2 = data.on = data.on ? extend({}, data.on) : {};
              for (var key in value) {
                var existing = on2[key];
                var ours = value[key];
                on2[key] = existing ? [].concat(existing, ours) : ours;
              }
            }
          }
          return data;
        }
        function resolveScopedSlots(fns, res, hasDynamicKeys, contentHashKey) {
          res = res || { $stable: !hasDynamicKeys };
          for (var i = 0; i < fns.length; i++) {
            var slot = fns[i];
            if (Array.isArray(slot)) {
              resolveScopedSlots(slot, res, hasDynamicKeys);
            } else if (slot) {
              if (slot.proxy) {
                slot.fn.proxy = true;
              }
              res[slot.key] = slot.fn;
            }
          }
          if (contentHashKey) {
            res.$key = contentHashKey;
          }
          return res;
        }
        function bindDynamicKeys(baseObj, values) {
          for (var i = 0; i < values.length; i += 2) {
            var key = values[i];
            if (typeof key === "string" && key) {
              baseObj[values[i]] = values[i + 1];
            } else if (key !== "" && key !== null) {
              warn("Invalid value for dynamic directive argument (expected string or null): " + key, this);
            }
          }
          return baseObj;
        }
        function prependModifier(value, symbol) {
          return typeof value === "string" ? symbol + value : value;
        }
        function installRenderHelpers(target2) {
          target2._o = markOnce;
          target2._n = toNumber;
          target2._s = toString;
          target2._l = renderList;
          target2._t = renderSlot;
          target2._q = looseEqual;
          target2._i = looseIndexOf;
          target2._m = renderStatic;
          target2._f = resolveFilter;
          target2._k = checkKeyCodes;
          target2._b = bindObjectProps;
          target2._v = createTextVNode;
          target2._e = createEmptyVNode;
          target2._u = resolveScopedSlots;
          target2._g = bindObjectListeners;
          target2._d = bindDynamicKeys;
          target2._p = prependModifier;
        }
        function FunctionalRenderContext(data, props2, children, parent, Ctor) {
          var this$1 = this;
          var options = Ctor.options;
          var contextVm;
          if (hasOwn(parent, "_uid")) {
            contextVm = Object.create(parent);
            contextVm._original = parent;
          } else {
            contextVm = parent;
            parent = parent._original;
          }
          var isCompiled = isTrue(options._compiled);
          var needNormalization = !isCompiled;
          this.data = data;
          this.props = props2;
          this.children = children;
          this.parent = parent;
          this.listeners = data.on || emptyObject;
          this.injections = resolveInject(options.inject, parent);
          this.slots = function() {
            if (!this$1.$slots) {
              normalizeScopedSlots(data.scopedSlots, this$1.$slots = resolveSlots(children, parent));
            }
            return this$1.$slots;
          };
          Object.defineProperty(this, "scopedSlots", {
            enumerable: true,
            get: function get() {
              return normalizeScopedSlots(data.scopedSlots, this.slots());
            }
          });
          if (isCompiled) {
            this.$options = options;
            this.$slots = this.slots();
            this.$scopedSlots = normalizeScopedSlots(data.scopedSlots, this.$slots);
          }
          if (options._scopeId) {
            this._c = function(a, b, c, d) {
              var vnode = createElement(contextVm, a, b, c, d, needNormalization);
              if (vnode && !Array.isArray(vnode)) {
                vnode.fnScopeId = options._scopeId;
                vnode.fnContext = parent;
              }
              return vnode;
            };
          } else {
            this._c = function(a, b, c, d) {
              return createElement(contextVm, a, b, c, d, needNormalization);
            };
          }
        }
        installRenderHelpers(FunctionalRenderContext.prototype);
        function createFunctionalComponent(Ctor, propsData, data, contextVm, children) {
          var options = Ctor.options;
          var props2 = {};
          var propOptions = options.props;
          if (isDef(propOptions)) {
            for (var key in propOptions) {
              props2[key] = validateProp(key, propOptions, propsData || emptyObject);
            }
          } else {
            if (isDef(data.attrs)) {
              mergeProps(props2, data.attrs);
            }
            if (isDef(data.props)) {
              mergeProps(props2, data.props);
            }
          }
          var renderContext = new FunctionalRenderContext(data, props2, children, contextVm, Ctor);
          var vnode = options.render.call(null, renderContext._c, renderContext);
          if (vnode instanceof VNode) {
            return cloneAndMarkFunctionalResult(vnode, data, renderContext.parent, options, renderContext);
          } else if (Array.isArray(vnode)) {
            var vnodes = normalizeChildren(vnode) || [];
            var res = new Array(vnodes.length);
            for (var i = 0; i < vnodes.length; i++) {
              res[i] = cloneAndMarkFunctionalResult(vnodes[i], data, renderContext.parent, options, renderContext);
            }
            return res;
          }
        }
        function cloneAndMarkFunctionalResult(vnode, data, contextVm, options, renderContext) {
          var clone = cloneVNode(vnode);
          clone.fnContext = contextVm;
          clone.fnOptions = options;
          {
            (clone.devtoolsMeta = clone.devtoolsMeta || {}).renderContext = renderContext;
          }
          if (data.slot) {
            (clone.data || (clone.data = {})).slot = data.slot;
          }
          return clone;
        }
        function mergeProps(to, from) {
          for (var key in from) {
            to[camelize(key)] = from[key];
          }
        }
        var componentVNodeHooks = {
          init: function init(vnode, hydrating) {
            if (vnode.componentInstance && !vnode.componentInstance._isDestroyed && vnode.data.keepAlive) {
              var mountedNode = vnode;
              componentVNodeHooks.prepatch(mountedNode, mountedNode);
            } else {
              var child = vnode.componentInstance = createComponentInstanceForVnode(vnode, activeInstance);
              child.$mount(hydrating ? vnode.elm : void 0, hydrating);
            }
          },
          prepatch: function prepatch(oldVnode, vnode) {
            var options = vnode.componentOptions;
            var child = vnode.componentInstance = oldVnode.componentInstance;
            updateChildComponent(child, options.propsData, options.listeners, vnode, options.children);
          },
          insert: function insert(vnode) {
            var context = vnode.context;
            var componentInstance = vnode.componentInstance;
            if (!componentInstance._isMounted) {
              componentInstance._isMounted = true;
              callHook(componentInstance, "mounted");
            }
            if (vnode.data.keepAlive) {
              if (context._isMounted) {
                queueActivatedComponent(componentInstance);
              } else {
                activateChildComponent(componentInstance, true);
              }
            }
          },
          destroy: function destroy(vnode) {
            var componentInstance = vnode.componentInstance;
            if (!componentInstance._isDestroyed) {
              if (!vnode.data.keepAlive) {
                componentInstance.$destroy();
              } else {
                deactivateChildComponent(componentInstance, true);
              }
            }
          }
        };
        var hooksToMerge = Object.keys(componentVNodeHooks);
        function createComponent(Ctor, data, context, children, tag) {
          if (isUndef(Ctor)) {
            return;
          }
          var baseCtor = context.$options._base;
          if (isObject(Ctor)) {
            Ctor = baseCtor.extend(Ctor);
          }
          if (typeof Ctor !== "function") {
            {
              warn("Invalid Component definition: " + String(Ctor), context);
            }
            return;
          }
          var asyncFactory;
          if (isUndef(Ctor.cid)) {
            asyncFactory = Ctor;
            Ctor = resolveAsyncComponent(asyncFactory, baseCtor);
            if (Ctor === void 0) {
              return createAsyncPlaceholder(asyncFactory, data, context, children, tag);
            }
          }
          data = data || {};
          resolveConstructorOptions(Ctor);
          if (isDef(data.model)) {
            transformModel(Ctor.options, data);
          }
          var propsData = extractPropsFromVNodeData(data, Ctor, tag);
          if (isTrue(Ctor.options.functional)) {
            return createFunctionalComponent(Ctor, propsData, data, context, children);
          }
          var listeners = data.on;
          data.on = data.nativeOn;
          if (isTrue(Ctor.options.abstract)) {
            var slot = data.slot;
            data = {};
            if (slot) {
              data.slot = slot;
            }
          }
          installComponentHooks(data);
          var name = Ctor.options.name || tag;
          var vnode = new VNode("vue-component-" + Ctor.cid + (name ? "-" + name : ""), data, void 0, void 0, void 0, context, { Ctor, propsData, listeners, tag, children }, asyncFactory);
          return vnode;
        }
        function createComponentInstanceForVnode(vnode, parent) {
          var options = {
            _isComponent: true,
            _parentVnode: vnode,
            parent
          };
          var inlineTemplate = vnode.data.inlineTemplate;
          if (isDef(inlineTemplate)) {
            options.render = inlineTemplate.render;
            options.staticRenderFns = inlineTemplate.staticRenderFns;
          }
          return new vnode.componentOptions.Ctor(options);
        }
        function installComponentHooks(data) {
          var hooks2 = data.hook || (data.hook = {});
          for (var i = 0; i < hooksToMerge.length; i++) {
            var key = hooksToMerge[i];
            var existing = hooks2[key];
            var toMerge = componentVNodeHooks[key];
            if (existing !== toMerge && !(existing && existing._merged)) {
              hooks2[key] = existing ? mergeHook$1(toMerge, existing) : toMerge;
            }
          }
        }
        function mergeHook$1(f1, f2) {
          var merged = function(a, b) {
            f1(a, b);
            f2(a, b);
          };
          merged._merged = true;
          return merged;
        }
        function transformModel(options, data) {
          var prop = options.model && options.model.prop || "value";
          var event = options.model && options.model.event || "input";
          (data.attrs || (data.attrs = {}))[prop] = data.model.value;
          var on2 = data.on || (data.on = {});
          var existing = on2[event];
          var callback = data.model.callback;
          if (isDef(existing)) {
            if (Array.isArray(existing) ? existing.indexOf(callback) === -1 : existing !== callback) {
              on2[event] = [callback].concat(existing);
            }
          } else {
            on2[event] = callback;
          }
        }
        var SIMPLE_NORMALIZE = 1;
        var ALWAYS_NORMALIZE = 2;
        function createElement(context, tag, data, children, normalizationType, alwaysNormalize) {
          if (Array.isArray(data) || isPrimitive(data)) {
            normalizationType = children;
            children = data;
            data = void 0;
          }
          if (isTrue(alwaysNormalize)) {
            normalizationType = ALWAYS_NORMALIZE;
          }
          return _createElement(context, tag, data, children, normalizationType);
        }
        function _createElement(context, tag, data, children, normalizationType) {
          if (isDef(data) && isDef(data.__ob__)) {
            warn("Avoid using observed data object as vnode data: " + JSON.stringify(data) + "\nAlways create fresh vnode data objects in each render!", context);
            return createEmptyVNode();
          }
          if (isDef(data) && isDef(data.is)) {
            tag = data.is;
          }
          if (!tag) {
            return createEmptyVNode();
          }
          if (isDef(data) && isDef(data.key) && !isPrimitive(data.key)) {
            {
              warn("Avoid using non-primitive value as key, use string/number value instead.", context);
            }
          }
          if (Array.isArray(children) && typeof children[0] === "function") {
            data = data || {};
            data.scopedSlots = { default: children[0] };
            children.length = 0;
          }
          if (normalizationType === ALWAYS_NORMALIZE) {
            children = normalizeChildren(children);
          } else if (normalizationType === SIMPLE_NORMALIZE) {
            children = simpleNormalizeChildren(children);
          }
          var vnode, ns;
          if (typeof tag === "string") {
            var Ctor;
            ns = context.$vnode && context.$vnode.ns || config.getTagNamespace(tag);
            if (config.isReservedTag(tag)) {
              if (isDef(data) && isDef(data.nativeOn) && data.tag !== "component") {
                warn("The .native modifier for v-on is only valid on components but it was used on <" + tag + ">.", context);
              }
              vnode = new VNode(config.parsePlatformTagName(tag), data, children, void 0, void 0, context);
            } else if ((!data || !data.pre) && isDef(Ctor = resolveAsset(context.$options, "components", tag))) {
              vnode = createComponent(Ctor, data, context, children, tag);
            } else {
              vnode = new VNode(tag, data, children, void 0, void 0, context);
            }
          } else {
            vnode = createComponent(tag, data, context, children);
          }
          if (Array.isArray(vnode)) {
            return vnode;
          } else if (isDef(vnode)) {
            if (isDef(ns)) {
              applyNS(vnode, ns);
            }
            if (isDef(data)) {
              registerDeepBindings(data);
            }
            return vnode;
          } else {
            return createEmptyVNode();
          }
        }
        function applyNS(vnode, ns, force) {
          vnode.ns = ns;
          if (vnode.tag === "foreignObject") {
            ns = void 0;
            force = true;
          }
          if (isDef(vnode.children)) {
            for (var i = 0, l = vnode.children.length; i < l; i++) {
              var child = vnode.children[i];
              if (isDef(child.tag) && (isUndef(child.ns) || isTrue(force) && child.tag !== "svg")) {
                applyNS(child, ns, force);
              }
            }
          }
        }
        function registerDeepBindings(data) {
          if (isObject(data.style)) {
            traverse(data.style);
          }
          if (isObject(data.class)) {
            traverse(data.class);
          }
        }
        function initRender(vm) {
          vm._vnode = null;
          vm._staticTrees = null;
          var options = vm.$options;
          var parentVnode = vm.$vnode = options._parentVnode;
          var renderContext = parentVnode && parentVnode.context;
          vm.$slots = resolveSlots(options._renderChildren, renderContext);
          vm.$scopedSlots = emptyObject;
          vm._c = function(a, b, c, d) {
            return createElement(vm, a, b, c, d, false);
          };
          vm.$createElement = function(a, b, c, d) {
            return createElement(vm, a, b, c, d, true);
          };
          var parentData = parentVnode && parentVnode.data;
          {
            defineReactive$$1(vm, "$attrs", parentData && parentData.attrs || emptyObject, function() {
              !isUpdatingChildComponent && warn("$attrs is readonly.", vm);
            }, true);
            defineReactive$$1(vm, "$listeners", options._parentListeners || emptyObject, function() {
              !isUpdatingChildComponent && warn("$listeners is readonly.", vm);
            }, true);
          }
        }
        var currentRenderingInstance = null;
        function renderMixin(Vue7) {
          installRenderHelpers(Vue7.prototype);
          Vue7.prototype.$nextTick = function(fn) {
            return nextTick(fn, this);
          };
          Vue7.prototype._render = function() {
            var vm = this;
            var ref2 = vm.$options;
            var render = ref2.render;
            var _parentVnode = ref2._parentVnode;
            if (_parentVnode) {
              vm.$scopedSlots = normalizeScopedSlots(_parentVnode.data.scopedSlots, vm.$slots, vm.$scopedSlots);
            }
            vm.$vnode = _parentVnode;
            var vnode;
            try {
              currentRenderingInstance = vm;
              vnode = render.call(vm._renderProxy, vm.$createElement);
            } catch (e) {
              handleError(e, vm, "render");
              if (vm.$options.renderError) {
                try {
                  vnode = vm.$options.renderError.call(vm._renderProxy, vm.$createElement, e);
                } catch (e2) {
                  handleError(e2, vm, "renderError");
                  vnode = vm._vnode;
                }
              } else {
                vnode = vm._vnode;
              }
            } finally {
              currentRenderingInstance = null;
            }
            if (Array.isArray(vnode) && vnode.length === 1) {
              vnode = vnode[0];
            }
            if (!(vnode instanceof VNode)) {
              if (Array.isArray(vnode)) {
                warn("Multiple root nodes returned from render function. Render function should return a single root node.", vm);
              }
              vnode = createEmptyVNode();
            }
            vnode.parent = _parentVnode;
            return vnode;
          };
        }
        function ensureCtor(comp, base) {
          if (comp.__esModule || hasSymbol && comp[Symbol.toStringTag] === "Module") {
            comp = comp.default;
          }
          return isObject(comp) ? base.extend(comp) : comp;
        }
        function createAsyncPlaceholder(factory, data, context, children, tag) {
          var node = createEmptyVNode();
          node.asyncFactory = factory;
          node.asyncMeta = { data, context, children, tag };
          return node;
        }
        function resolveAsyncComponent(factory, baseCtor) {
          if (isTrue(factory.error) && isDef(factory.errorComp)) {
            return factory.errorComp;
          }
          if (isDef(factory.resolved)) {
            return factory.resolved;
          }
          var owner = currentRenderingInstance;
          if (owner && isDef(factory.owners) && factory.owners.indexOf(owner) === -1) {
            factory.owners.push(owner);
          }
          if (isTrue(factory.loading) && isDef(factory.loadingComp)) {
            return factory.loadingComp;
          }
          if (owner && !isDef(factory.owners)) {
            var owners = factory.owners = [owner];
            var sync = true;
            var timerLoading = null;
            var timerTimeout = null;
            owner.$on("hook:destroyed", function() {
              return remove(owners, owner);
            });
            var forceRender = function(renderCompleted) {
              for (var i = 0, l = owners.length; i < l; i++) {
                owners[i].$forceUpdate();
              }
              if (renderCompleted) {
                owners.length = 0;
                if (timerLoading !== null) {
                  clearTimeout(timerLoading);
                  timerLoading = null;
                }
                if (timerTimeout !== null) {
                  clearTimeout(timerTimeout);
                  timerTimeout = null;
                }
              }
            };
            var resolve = once(function(res2) {
              factory.resolved = ensureCtor(res2, baseCtor);
              if (!sync) {
                forceRender(true);
              } else {
                owners.length = 0;
              }
            });
            var reject = once(function(reason) {
              warn("Failed to resolve async component: " + String(factory) + (reason ? "\nReason: " + reason : ""));
              if (isDef(factory.errorComp)) {
                factory.error = true;
                forceRender(true);
              }
            });
            var res = factory(resolve, reject);
            if (isObject(res)) {
              if (isPromise(res)) {
                if (isUndef(factory.resolved)) {
                  res.then(resolve, reject);
                }
              } else if (isPromise(res.component)) {
                res.component.then(resolve, reject);
                if (isDef(res.error)) {
                  factory.errorComp = ensureCtor(res.error, baseCtor);
                }
                if (isDef(res.loading)) {
                  factory.loadingComp = ensureCtor(res.loading, baseCtor);
                  if (res.delay === 0) {
                    factory.loading = true;
                  } else {
                    timerLoading = setTimeout(function() {
                      timerLoading = null;
                      if (isUndef(factory.resolved) && isUndef(factory.error)) {
                        factory.loading = true;
                        forceRender(false);
                      }
                    }, res.delay || 200);
                  }
                }
                if (isDef(res.timeout)) {
                  timerTimeout = setTimeout(function() {
                    timerTimeout = null;
                    if (isUndef(factory.resolved)) {
                      reject("timeout (" + res.timeout + "ms)");
                    }
                  }, res.timeout);
                }
              }
            }
            sync = false;
            return factory.loading ? factory.loadingComp : factory.resolved;
          }
        }
        function getFirstComponentChild(children) {
          if (Array.isArray(children)) {
            for (var i = 0; i < children.length; i++) {
              var c = children[i];
              if (isDef(c) && (isDef(c.componentOptions) || isAsyncPlaceholder(c))) {
                return c;
              }
            }
          }
        }
        function initEvents(vm) {
          vm._events = /* @__PURE__ */ Object.create(null);
          vm._hasHookEvent = false;
          var listeners = vm.$options._parentListeners;
          if (listeners) {
            updateComponentListeners(vm, listeners);
          }
        }
        var target;
        function add(event, fn) {
          target.$on(event, fn);
        }
        function remove$1(event, fn) {
          target.$off(event, fn);
        }
        function createOnceHandler(event, fn) {
          var _target = target;
          return function onceHandler() {
            var res = fn.apply(null, arguments);
            if (res !== null) {
              _target.$off(event, onceHandler);
            }
          };
        }
        function updateComponentListeners(vm, listeners, oldListeners) {
          target = vm;
          updateListeners(listeners, oldListeners || {}, add, remove$1, createOnceHandler, vm);
          target = void 0;
        }
        function eventsMixin(Vue7) {
          var hookRE = /^hook:/;
          Vue7.prototype.$on = function(event, fn) {
            var vm = this;
            if (Array.isArray(event)) {
              for (var i = 0, l = event.length; i < l; i++) {
                vm.$on(event[i], fn);
              }
            } else {
              (vm._events[event] || (vm._events[event] = [])).push(fn);
              if (hookRE.test(event)) {
                vm._hasHookEvent = true;
              }
            }
            return vm;
          };
          Vue7.prototype.$once = function(event, fn) {
            var vm = this;
            function on2() {
              vm.$off(event, on2);
              fn.apply(vm, arguments);
            }
            on2.fn = fn;
            vm.$on(event, on2);
            return vm;
          };
          Vue7.prototype.$off = function(event, fn) {
            var vm = this;
            if (!arguments.length) {
              vm._events = /* @__PURE__ */ Object.create(null);
              return vm;
            }
            if (Array.isArray(event)) {
              for (var i$1 = 0, l = event.length; i$1 < l; i$1++) {
                vm.$off(event[i$1], fn);
              }
              return vm;
            }
            var cbs = vm._events[event];
            if (!cbs) {
              return vm;
            }
            if (!fn) {
              vm._events[event] = null;
              return vm;
            }
            var cb;
            var i = cbs.length;
            while (i--) {
              cb = cbs[i];
              if (cb === fn || cb.fn === fn) {
                cbs.splice(i, 1);
                break;
              }
            }
            return vm;
          };
          Vue7.prototype.$emit = function(event) {
            var vm = this;
            {
              var lowerCaseEvent = event.toLowerCase();
              if (lowerCaseEvent !== event && vm._events[lowerCaseEvent]) {
                tip('Event "' + lowerCaseEvent + '" is emitted in component ' + formatComponentName(vm) + ' but the handler is registered for "' + event + '". Note that HTML attributes are case-insensitive and you cannot use v-on to listen to camelCase events when using in-DOM templates. You should probably use "' + hyphenate(event) + '" instead of "' + event + '".');
              }
            }
            var cbs = vm._events[event];
            if (cbs) {
              cbs = cbs.length > 1 ? toArray(cbs) : cbs;
              var args = toArray(arguments, 1);
              var info = 'event handler for "' + event + '"';
              for (var i = 0, l = cbs.length; i < l; i++) {
                invokeWithErrorHandling(cbs[i], vm, args, vm, info);
              }
            }
            return vm;
          };
        }
        var activeInstance = null;
        var isUpdatingChildComponent = false;
        function setActiveInstance(vm) {
          var prevActiveInstance = activeInstance;
          activeInstance = vm;
          return function() {
            activeInstance = prevActiveInstance;
          };
        }
        function initLifecycle(vm) {
          var options = vm.$options;
          var parent = options.parent;
          if (parent && !options.abstract) {
            while (parent.$options.abstract && parent.$parent) {
              parent = parent.$parent;
            }
            parent.$children.push(vm);
          }
          vm.$parent = parent;
          vm.$root = parent ? parent.$root : vm;
          vm.$children = [];
          vm.$refs = {};
          vm._watcher = null;
          vm._inactive = null;
          vm._directInactive = false;
          vm._isMounted = false;
          vm._isDestroyed = false;
          vm._isBeingDestroyed = false;
        }
        function lifecycleMixin(Vue7) {
          Vue7.prototype._update = function(vnode, hydrating) {
            var vm = this;
            var prevEl = vm.$el;
            var prevVnode = vm._vnode;
            var restoreActiveInstance = setActiveInstance(vm);
            vm._vnode = vnode;
            if (!prevVnode) {
              vm.$el = vm.__patch__(vm.$el, vnode, hydrating, false);
            } else {
              vm.$el = vm.__patch__(prevVnode, vnode);
            }
            restoreActiveInstance();
            if (prevEl) {
              prevEl.__vue__ = null;
            }
            if (vm.$el) {
              vm.$el.__vue__ = vm;
            }
            if (vm.$vnode && vm.$parent && vm.$vnode === vm.$parent._vnode) {
              vm.$parent.$el = vm.$el;
            }
          };
          Vue7.prototype.$forceUpdate = function() {
            var vm = this;
            if (vm._watcher) {
              vm._watcher.update();
            }
          };
          Vue7.prototype.$destroy = function() {
            var vm = this;
            if (vm._isBeingDestroyed) {
              return;
            }
            callHook(vm, "beforeDestroy");
            vm._isBeingDestroyed = true;
            var parent = vm.$parent;
            if (parent && !parent._isBeingDestroyed && !vm.$options.abstract) {
              remove(parent.$children, vm);
            }
            if (vm._watcher) {
              vm._watcher.teardown();
            }
            var i = vm._watchers.length;
            while (i--) {
              vm._watchers[i].teardown();
            }
            if (vm._data.__ob__) {
              vm._data.__ob__.vmCount--;
            }
            vm._isDestroyed = true;
            vm.__patch__(vm._vnode, null);
            callHook(vm, "destroyed");
            vm.$off();
            if (vm.$el) {
              vm.$el.__vue__ = null;
            }
            if (vm.$vnode) {
              vm.$vnode.parent = null;
            }
          };
        }
        function mountComponent(vm, el, hydrating) {
          vm.$el = el;
          if (!vm.$options.render) {
            vm.$options.render = createEmptyVNode;
            {
              if (vm.$options.template && vm.$options.template.charAt(0) !== "#" || vm.$options.el || el) {
                warn("You are using the runtime-only build of Vue where the template compiler is not available. Either pre-compile the templates into render functions, or use the compiler-included build.", vm);
              } else {
                warn("Failed to mount component: template or render function not defined.", vm);
              }
            }
          }
          callHook(vm, "beforeMount");
          var updateComponent;
          if (config.performance && mark) {
            updateComponent = function() {
              var name = vm._name;
              var id = vm._uid;
              var startTag = "vue-perf-start:" + id;
              var endTag2 = "vue-perf-end:" + id;
              mark(startTag);
              var vnode = vm._render();
              mark(endTag2);
              measure("vue " + name + " render", startTag, endTag2);
              mark(startTag);
              vm._update(vnode, hydrating);
              mark(endTag2);
              measure("vue " + name + " patch", startTag, endTag2);
            };
          } else {
            updateComponent = function() {
              vm._update(vm._render(), hydrating);
            };
          }
          new Watcher(vm, updateComponent, noop, {
            before: function before() {
              if (vm._isMounted && !vm._isDestroyed) {
                callHook(vm, "beforeUpdate");
              }
            }
          }, true);
          hydrating = false;
          if (vm.$vnode == null) {
            vm._isMounted = true;
            callHook(vm, "mounted");
          }
          return vm;
        }
        function updateChildComponent(vm, propsData, listeners, parentVnode, renderChildren) {
          {
            isUpdatingChildComponent = true;
          }
          var newScopedSlots = parentVnode.data.scopedSlots;
          var oldScopedSlots = vm.$scopedSlots;
          var hasDynamicScopedSlot = !!(newScopedSlots && !newScopedSlots.$stable || oldScopedSlots !== emptyObject && !oldScopedSlots.$stable || newScopedSlots && vm.$scopedSlots.$key !== newScopedSlots.$key || !newScopedSlots && vm.$scopedSlots.$key);
          var needsForceUpdate = !!(renderChildren || vm.$options._renderChildren || hasDynamicScopedSlot);
          vm.$options._parentVnode = parentVnode;
          vm.$vnode = parentVnode;
          if (vm._vnode) {
            vm._vnode.parent = parentVnode;
          }
          vm.$options._renderChildren = renderChildren;
          vm.$attrs = parentVnode.data.attrs || emptyObject;
          vm.$listeners = listeners || emptyObject;
          if (propsData && vm.$options.props) {
            toggleObserving(false);
            var props2 = vm._props;
            var propKeys = vm.$options._propKeys || [];
            for (var i = 0; i < propKeys.length; i++) {
              var key = propKeys[i];
              var propOptions = vm.$options.props;
              props2[key] = validateProp(key, propOptions, propsData, vm);
            }
            toggleObserving(true);
            vm.$options.propsData = propsData;
          }
          listeners = listeners || emptyObject;
          var oldListeners = vm.$options._parentListeners;
          vm.$options._parentListeners = listeners;
          updateComponentListeners(vm, listeners, oldListeners);
          if (needsForceUpdate) {
            vm.$slots = resolveSlots(renderChildren, parentVnode.context);
            vm.$forceUpdate();
          }
          {
            isUpdatingChildComponent = false;
          }
        }
        function isInInactiveTree(vm) {
          while (vm && (vm = vm.$parent)) {
            if (vm._inactive) {
              return true;
            }
          }
          return false;
        }
        function activateChildComponent(vm, direct) {
          if (direct) {
            vm._directInactive = false;
            if (isInInactiveTree(vm)) {
              return;
            }
          } else if (vm._directInactive) {
            return;
          }
          if (vm._inactive || vm._inactive === null) {
            vm._inactive = false;
            for (var i = 0; i < vm.$children.length; i++) {
              activateChildComponent(vm.$children[i]);
            }
            callHook(vm, "activated");
          }
        }
        function deactivateChildComponent(vm, direct) {
          if (direct) {
            vm._directInactive = true;
            if (isInInactiveTree(vm)) {
              return;
            }
          }
          if (!vm._inactive) {
            vm._inactive = true;
            for (var i = 0; i < vm.$children.length; i++) {
              deactivateChildComponent(vm.$children[i]);
            }
            callHook(vm, "deactivated");
          }
        }
        function callHook(vm, hook) {
          pushTarget();
          var handlers = vm.$options[hook];
          var info = hook + " hook";
          if (handlers) {
            for (var i = 0, j = handlers.length; i < j; i++) {
              invokeWithErrorHandling(handlers[i], vm, null, vm, info);
            }
          }
          if (vm._hasHookEvent) {
            vm.$emit("hook:" + hook);
          }
          popTarget();
        }
        var MAX_UPDATE_COUNT = 100;
        var queue = [];
        var activatedChildren = [];
        var has = {};
        var circular = {};
        var waiting = false;
        var flushing = false;
        var index = 0;
        function resetSchedulerState() {
          index = queue.length = activatedChildren.length = 0;
          has = {};
          {
            circular = {};
          }
          waiting = flushing = false;
        }
        var currentFlushTimestamp = 0;
        var getNow = Date.now;
        if (inBrowser && !isIE) {
          var performance = window.performance;
          if (performance && typeof performance.now === "function" && getNow() > document.createEvent("Event").timeStamp) {
            getNow = function() {
              return performance.now();
            };
          }
        }
        function flushSchedulerQueue() {
          currentFlushTimestamp = getNow();
          flushing = true;
          var watcher, id;
          queue.sort(function(a, b) {
            return a.id - b.id;
          });
          for (index = 0; index < queue.length; index++) {
            watcher = queue[index];
            if (watcher.before) {
              watcher.before();
            }
            id = watcher.id;
            has[id] = null;
            watcher.run();
            if (has[id] != null) {
              circular[id] = (circular[id] || 0) + 1;
              if (circular[id] > MAX_UPDATE_COUNT) {
                warn("You may have an infinite update loop " + (watcher.user ? 'in watcher with expression "' + watcher.expression + '"' : "in a component render function."), watcher.vm);
                break;
              }
            }
          }
          var activatedQueue = activatedChildren.slice();
          var updatedQueue = queue.slice();
          resetSchedulerState();
          callActivatedHooks(activatedQueue);
          callUpdatedHooks(updatedQueue);
          if (devtools && config.devtools) {
            devtools.emit("flush");
          }
        }
        function callUpdatedHooks(queue2) {
          var i = queue2.length;
          while (i--) {
            var watcher = queue2[i];
            var vm = watcher.vm;
            if (vm._watcher === watcher && vm._isMounted && !vm._isDestroyed) {
              callHook(vm, "updated");
            }
          }
        }
        function queueActivatedComponent(vm) {
          vm._inactive = false;
          activatedChildren.push(vm);
        }
        function callActivatedHooks(queue2) {
          for (var i = 0; i < queue2.length; i++) {
            queue2[i]._inactive = true;
            activateChildComponent(queue2[i], true);
          }
        }
        function queueWatcher(watcher) {
          var id = watcher.id;
          if (has[id] == null) {
            has[id] = true;
            if (!flushing) {
              queue.push(watcher);
            } else {
              var i = queue.length - 1;
              while (i > index && queue[i].id > watcher.id) {
                i--;
              }
              queue.splice(i + 1, 0, watcher);
            }
            if (!waiting) {
              waiting = true;
              if (!config.async) {
                flushSchedulerQueue();
                return;
              }
              nextTick(flushSchedulerQueue);
            }
          }
        }
        var uid$2 = 0;
        var Watcher = function Watcher2(vm, expOrFn, cb, options, isRenderWatcher) {
          this.vm = vm;
          if (isRenderWatcher) {
            vm._watcher = this;
          }
          vm._watchers.push(this);
          if (options) {
            this.deep = !!options.deep;
            this.user = !!options.user;
            this.lazy = !!options.lazy;
            this.sync = !!options.sync;
            this.before = options.before;
          } else {
            this.deep = this.user = this.lazy = this.sync = false;
          }
          this.cb = cb;
          this.id = ++uid$2;
          this.active = true;
          this.dirty = this.lazy;
          this.deps = [];
          this.newDeps = [];
          this.depIds = new _Set();
          this.newDepIds = new _Set();
          this.expression = expOrFn.toString();
          if (typeof expOrFn === "function") {
            this.getter = expOrFn;
          } else {
            this.getter = parsePath(expOrFn);
            if (!this.getter) {
              this.getter = noop;
              warn('Failed watching path: "' + expOrFn + '" Watcher only accepts simple dot-delimited paths. For full control, use a function instead.', vm);
            }
          }
          this.value = this.lazy ? void 0 : this.get();
        };
        Watcher.prototype.get = function get() {
          pushTarget(this);
          var value;
          var vm = this.vm;
          try {
            value = this.getter.call(vm, vm);
          } catch (e) {
            if (this.user) {
              handleError(e, vm, 'getter for watcher "' + this.expression + '"');
            } else {
              throw e;
            }
          } finally {
            if (this.deep) {
              traverse(value);
            }
            popTarget();
            this.cleanupDeps();
          }
          return value;
        };
        Watcher.prototype.addDep = function addDep(dep) {
          var id = dep.id;
          if (!this.newDepIds.has(id)) {
            this.newDepIds.add(id);
            this.newDeps.push(dep);
            if (!this.depIds.has(id)) {
              dep.addSub(this);
            }
          }
        };
        Watcher.prototype.cleanupDeps = function cleanupDeps() {
          var i = this.deps.length;
          while (i--) {
            var dep = this.deps[i];
            if (!this.newDepIds.has(dep.id)) {
              dep.removeSub(this);
            }
          }
          var tmp = this.depIds;
          this.depIds = this.newDepIds;
          this.newDepIds = tmp;
          this.newDepIds.clear();
          tmp = this.deps;
          this.deps = this.newDeps;
          this.newDeps = tmp;
          this.newDeps.length = 0;
        };
        Watcher.prototype.update = function update() {
          if (this.lazy) {
            this.dirty = true;
          } else if (this.sync) {
            this.run();
          } else {
            queueWatcher(this);
          }
        };
        Watcher.prototype.run = function run() {
          if (this.active) {
            var value = this.get();
            if (value !== this.value || isObject(value) || this.deep) {
              var oldValue = this.value;
              this.value = value;
              if (this.user) {
                var info = 'callback for watcher "' + this.expression + '"';
                invokeWithErrorHandling(this.cb, this.vm, [value, oldValue], this.vm, info);
              } else {
                this.cb.call(this.vm, value, oldValue);
              }
            }
          }
        };
        Watcher.prototype.evaluate = function evaluate() {
          this.value = this.get();
          this.dirty = false;
        };
        Watcher.prototype.depend = function depend() {
          var i = this.deps.length;
          while (i--) {
            this.deps[i].depend();
          }
        };
        Watcher.prototype.teardown = function teardown() {
          if (this.active) {
            if (!this.vm._isBeingDestroyed) {
              remove(this.vm._watchers, this);
            }
            var i = this.deps.length;
            while (i--) {
              this.deps[i].removeSub(this);
            }
            this.active = false;
          }
        };
        var sharedPropertyDefinition = {
          enumerable: true,
          configurable: true,
          get: noop,
          set: noop
        };
        function proxy(target2, sourceKey, key) {
          sharedPropertyDefinition.get = function proxyGetter() {
            return this[sourceKey][key];
          };
          sharedPropertyDefinition.set = function proxySetter(val) {
            this[sourceKey][key] = val;
          };
          Object.defineProperty(target2, key, sharedPropertyDefinition);
        }
        function initState(vm) {
          vm._watchers = [];
          var opts2 = vm.$options;
          if (opts2.props) {
            initProps(vm, opts2.props);
          }
          if (opts2.methods) {
            initMethods(vm, opts2.methods);
          }
          if (opts2.data) {
            initData(vm);
          } else {
            observe(vm._data = {}, true);
          }
          if (opts2.computed) {
            initComputed(vm, opts2.computed);
          }
          if (opts2.watch && opts2.watch !== nativeWatch) {
            initWatch(vm, opts2.watch);
          }
        }
        function initProps(vm, propsOptions) {
          var propsData = vm.$options.propsData || {};
          var props2 = vm._props = {};
          var keys = vm.$options._propKeys = [];
          var isRoot = !vm.$parent;
          if (!isRoot) {
            toggleObserving(false);
          }
          var loop = function(key2) {
            keys.push(key2);
            var value = validateProp(key2, propsOptions, propsData, vm);
            {
              var hyphenatedKey = hyphenate(key2);
              if (isReservedAttribute(hyphenatedKey) || config.isReservedAttr(hyphenatedKey)) {
                warn('"' + hyphenatedKey + '" is a reserved attribute and cannot be used as component prop.', vm);
              }
              defineReactive$$1(props2, key2, value, function() {
                if (!isRoot && !isUpdatingChildComponent) {
                  warn(`Avoid mutating a prop directly since the value will be overwritten whenever the parent component re-renders. Instead, use a data or computed property based on the prop's value. Prop being mutated: "` + key2 + '"', vm);
                }
              });
            }
            if (!(key2 in vm)) {
              proxy(vm, "_props", key2);
            }
          };
          for (var key in propsOptions)
            loop(key);
          toggleObserving(true);
        }
        function initData(vm) {
          var data = vm.$options.data;
          data = vm._data = typeof data === "function" ? getData(data, vm) : data || {};
          if (!isPlainObject(data)) {
            data = {};
            warn("data functions should return an object:\nhttps://vuejs.org/v2/guide/components.html#data-Must-Be-a-Function", vm);
          }
          var keys = Object.keys(data);
          var props2 = vm.$options.props;
          var methods = vm.$options.methods;
          var i = keys.length;
          while (i--) {
            var key = keys[i];
            {
              if (methods && hasOwn(methods, key)) {
                warn('Method "' + key + '" has already been defined as a data property.', vm);
              }
            }
            if (props2 && hasOwn(props2, key)) {
              warn('The data property "' + key + '" is already declared as a prop. Use prop default value instead.', vm);
            } else if (!isReserved(key)) {
              proxy(vm, "_data", key);
            }
          }
          observe(data, true);
        }
        function getData(data, vm) {
          pushTarget();
          try {
            return data.call(vm, vm);
          } catch (e) {
            handleError(e, vm, "data()");
            return {};
          } finally {
            popTarget();
          }
        }
        var computedWatcherOptions = { lazy: true };
        function initComputed(vm, computed) {
          var watchers = vm._computedWatchers = /* @__PURE__ */ Object.create(null);
          var isSSR = isServerRendering();
          for (var key in computed) {
            var userDef = computed[key];
            var getter = typeof userDef === "function" ? userDef : userDef.get;
            if (getter == null) {
              warn('Getter is missing for computed property "' + key + '".', vm);
            }
            if (!isSSR) {
              watchers[key] = new Watcher(vm, getter || noop, noop, computedWatcherOptions);
            }
            if (!(key in vm)) {
              defineComputed(vm, key, userDef);
            } else {
              if (key in vm.$data) {
                warn('The computed property "' + key + '" is already defined in data.', vm);
              } else if (vm.$options.props && key in vm.$options.props) {
                warn('The computed property "' + key + '" is already defined as a prop.', vm);
              } else if (vm.$options.methods && key in vm.$options.methods) {
                warn('The computed property "' + key + '" is already defined as a method.', vm);
              }
            }
          }
        }
        function defineComputed(target2, key, userDef) {
          var shouldCache = !isServerRendering();
          if (typeof userDef === "function") {
            sharedPropertyDefinition.get = shouldCache ? createComputedGetter(key) : createGetterInvoker(userDef);
            sharedPropertyDefinition.set = noop;
          } else {
            sharedPropertyDefinition.get = userDef.get ? shouldCache && userDef.cache !== false ? createComputedGetter(key) : createGetterInvoker(userDef.get) : noop;
            sharedPropertyDefinition.set = userDef.set || noop;
          }
          if (sharedPropertyDefinition.set === noop) {
            sharedPropertyDefinition.set = function() {
              warn('Computed property "' + key + '" was assigned to but it has no setter.', this);
            };
          }
          Object.defineProperty(target2, key, sharedPropertyDefinition);
        }
        function createComputedGetter(key) {
          return function computedGetter() {
            var watcher = this._computedWatchers && this._computedWatchers[key];
            if (watcher) {
              if (watcher.dirty) {
                watcher.evaluate();
              }
              if (Dep.target) {
                watcher.depend();
              }
              return watcher.value;
            }
          };
        }
        function createGetterInvoker(fn) {
          return function computedGetter() {
            return fn.call(this, this);
          };
        }
        function initMethods(vm, methods) {
          var props2 = vm.$options.props;
          for (var key in methods) {
            {
              if (typeof methods[key] !== "function") {
                warn('Method "' + key + '" has type "' + typeof methods[key] + '" in the component definition. Did you reference the function correctly?', vm);
              }
              if (props2 && hasOwn(props2, key)) {
                warn('Method "' + key + '" has already been defined as a prop.', vm);
              }
              if (key in vm && isReserved(key)) {
                warn('Method "' + key + '" conflicts with an existing Vue instance method. Avoid defining component methods that start with _ or $.');
              }
            }
            vm[key] = typeof methods[key] !== "function" ? noop : bind(methods[key], vm);
          }
        }
        function initWatch(vm, watch) {
          for (var key in watch) {
            var handler = watch[key];
            if (Array.isArray(handler)) {
              for (var i = 0; i < handler.length; i++) {
                createWatcher(vm, key, handler[i]);
              }
            } else {
              createWatcher(vm, key, handler);
            }
          }
        }
        function createWatcher(vm, expOrFn, handler, options) {
          if (isPlainObject(handler)) {
            options = handler;
            handler = handler.handler;
          }
          if (typeof handler === "string") {
            handler = vm[handler];
          }
          return vm.$watch(expOrFn, handler, options);
        }
        function stateMixin(Vue7) {
          var dataDef = {};
          dataDef.get = function() {
            return this._data;
          };
          var propsDef = {};
          propsDef.get = function() {
            return this._props;
          };
          {
            dataDef.set = function() {
              warn("Avoid replacing instance root $data. Use nested data properties instead.", this);
            };
            propsDef.set = function() {
              warn("$props is readonly.", this);
            };
          }
          Object.defineProperty(Vue7.prototype, "$data", dataDef);
          Object.defineProperty(Vue7.prototype, "$props", propsDef);
          Vue7.prototype.$set = set;
          Vue7.prototype.$delete = del;
          Vue7.prototype.$watch = function(expOrFn, cb, options) {
            var vm = this;
            if (isPlainObject(cb)) {
              return createWatcher(vm, expOrFn, cb, options);
            }
            options = options || {};
            options.user = true;
            var watcher = new Watcher(vm, expOrFn, cb, options);
            if (options.immediate) {
              var info = 'callback for immediate watcher "' + watcher.expression + '"';
              pushTarget();
              invokeWithErrorHandling(cb, vm, [watcher.value], vm, info);
              popTarget();
            }
            return function unwatchFn() {
              watcher.teardown();
            };
          };
        }
        var uid$3 = 0;
        function initMixin(Vue7) {
          Vue7.prototype._init = function(options) {
            var vm = this;
            vm._uid = uid$3++;
            var startTag, endTag2;
            if (config.performance && mark) {
              startTag = "vue-perf-start:" + vm._uid;
              endTag2 = "vue-perf-end:" + vm._uid;
              mark(startTag);
            }
            vm._isVue = true;
            if (options && options._isComponent) {
              initInternalComponent(vm, options);
            } else {
              vm.$options = mergeOptions(resolveConstructorOptions(vm.constructor), options || {}, vm);
            }
            {
              initProxy(vm);
            }
            vm._self = vm;
            initLifecycle(vm);
            initEvents(vm);
            initRender(vm);
            callHook(vm, "beforeCreate");
            initInjections(vm);
            initState(vm);
            initProvide(vm);
            callHook(vm, "created");
            if (config.performance && mark) {
              vm._name = formatComponentName(vm, false);
              mark(endTag2);
              measure("vue " + vm._name + " init", startTag, endTag2);
            }
            if (vm.$options.el) {
              vm.$mount(vm.$options.el);
            }
          };
        }
        function initInternalComponent(vm, options) {
          var opts2 = vm.$options = Object.create(vm.constructor.options);
          var parentVnode = options._parentVnode;
          opts2.parent = options.parent;
          opts2._parentVnode = parentVnode;
          var vnodeComponentOptions = parentVnode.componentOptions;
          opts2.propsData = vnodeComponentOptions.propsData;
          opts2._parentListeners = vnodeComponentOptions.listeners;
          opts2._renderChildren = vnodeComponentOptions.children;
          opts2._componentTag = vnodeComponentOptions.tag;
          if (options.render) {
            opts2.render = options.render;
            opts2.staticRenderFns = options.staticRenderFns;
          }
        }
        function resolveConstructorOptions(Ctor) {
          var options = Ctor.options;
          if (Ctor.super) {
            var superOptions = resolveConstructorOptions(Ctor.super);
            var cachedSuperOptions = Ctor.superOptions;
            if (superOptions !== cachedSuperOptions) {
              Ctor.superOptions = superOptions;
              var modifiedOptions = resolveModifiedOptions(Ctor);
              if (modifiedOptions) {
                extend(Ctor.extendOptions, modifiedOptions);
              }
              options = Ctor.options = mergeOptions(superOptions, Ctor.extendOptions);
              if (options.name) {
                options.components[options.name] = Ctor;
              }
            }
          }
          return options;
        }
        function resolveModifiedOptions(Ctor) {
          var modified;
          var latest = Ctor.options;
          var sealed = Ctor.sealedOptions;
          for (var key in latest) {
            if (latest[key] !== sealed[key]) {
              if (!modified) {
                modified = {};
              }
              modified[key] = latest[key];
            }
          }
          return modified;
        }
        function Vue6(options) {
          if (!(this instanceof Vue6)) {
            warn("Vue is a constructor and should be called with the `new` keyword");
          }
          this._init(options);
        }
        initMixin(Vue6);
        stateMixin(Vue6);
        eventsMixin(Vue6);
        lifecycleMixin(Vue6);
        renderMixin(Vue6);
        function initUse(Vue7) {
          Vue7.use = function(plugin) {
            var installedPlugins = this._installedPlugins || (this._installedPlugins = []);
            if (installedPlugins.indexOf(plugin) > -1) {
              return this;
            }
            var args = toArray(arguments, 1);
            args.unshift(this);
            if (typeof plugin.install === "function") {
              plugin.install.apply(plugin, args);
            } else if (typeof plugin === "function") {
              plugin.apply(null, args);
            }
            installedPlugins.push(plugin);
            return this;
          };
        }
        function initMixin$1(Vue7) {
          Vue7.mixin = function(mixin) {
            this.options = mergeOptions(this.options, mixin);
            return this;
          };
        }
        function initExtend(Vue7) {
          Vue7.cid = 0;
          var cid = 1;
          Vue7.extend = function(extendOptions) {
            extendOptions = extendOptions || {};
            var Super = this;
            var SuperId = Super.cid;
            var cachedCtors = extendOptions._Ctor || (extendOptions._Ctor = {});
            if (cachedCtors[SuperId]) {
              return cachedCtors[SuperId];
            }
            var name = extendOptions.name || Super.options.name;
            if (name) {
              validateComponentName(name);
            }
            var Sub = function VueComponent(options) {
              this._init(options);
            };
            Sub.prototype = Object.create(Super.prototype);
            Sub.prototype.constructor = Sub;
            Sub.cid = cid++;
            Sub.options = mergeOptions(Super.options, extendOptions);
            Sub["super"] = Super;
            if (Sub.options.props) {
              initProps$1(Sub);
            }
            if (Sub.options.computed) {
              initComputed$1(Sub);
            }
            Sub.extend = Super.extend;
            Sub.mixin = Super.mixin;
            Sub.use = Super.use;
            ASSET_TYPES.forEach(function(type) {
              Sub[type] = Super[type];
            });
            if (name) {
              Sub.options.components[name] = Sub;
            }
            Sub.superOptions = Super.options;
            Sub.extendOptions = extendOptions;
            Sub.sealedOptions = extend({}, Sub.options);
            cachedCtors[SuperId] = Sub;
            return Sub;
          };
        }
        function initProps$1(Comp) {
          var props2 = Comp.options.props;
          for (var key in props2) {
            proxy(Comp.prototype, "_props", key);
          }
        }
        function initComputed$1(Comp) {
          var computed = Comp.options.computed;
          for (var key in computed) {
            defineComputed(Comp.prototype, key, computed[key]);
          }
        }
        function initAssetRegisters(Vue7) {
          ASSET_TYPES.forEach(function(type) {
            Vue7[type] = function(id, definition) {
              if (!definition) {
                return this.options[type + "s"][id];
              } else {
                if (type === "component") {
                  validateComponentName(id);
                }
                if (type === "component" && isPlainObject(definition)) {
                  definition.name = definition.name || id;
                  definition = this.options._base.extend(definition);
                }
                if (type === "directive" && typeof definition === "function") {
                  definition = { bind: definition, update: definition };
                }
                this.options[type + "s"][id] = definition;
                return definition;
              }
            };
          });
        }
        function getComponentName(opts2) {
          return opts2 && (opts2.Ctor.options.name || opts2.tag);
        }
        function matches(pattern, name) {
          if (Array.isArray(pattern)) {
            return pattern.indexOf(name) > -1;
          } else if (typeof pattern === "string") {
            return pattern.split(",").indexOf(name) > -1;
          } else if (isRegExp(pattern)) {
            return pattern.test(name);
          }
          return false;
        }
        function pruneCache(keepAliveInstance, filter) {
          var cache = keepAliveInstance.cache;
          var keys = keepAliveInstance.keys;
          var _vnode = keepAliveInstance._vnode;
          for (var key in cache) {
            var entry = cache[key];
            if (entry) {
              var name = entry.name;
              if (name && !filter(name)) {
                pruneCacheEntry(cache, key, keys, _vnode);
              }
            }
          }
        }
        function pruneCacheEntry(cache, key, keys, current) {
          var entry = cache[key];
          if (entry && (!current || entry.tag !== current.tag)) {
            entry.componentInstance.$destroy();
          }
          cache[key] = null;
          remove(keys, key);
        }
        var patternTypes = [String, RegExp, Array];
        var KeepAlive = {
          name: "keep-alive",
          abstract: true,
          props: {
            include: patternTypes,
            exclude: patternTypes,
            max: [String, Number]
          },
          methods: {
            cacheVNode: function cacheVNode() {
              var ref2 = this;
              var cache = ref2.cache;
              var keys = ref2.keys;
              var vnodeToCache = ref2.vnodeToCache;
              var keyToCache = ref2.keyToCache;
              if (vnodeToCache) {
                var tag = vnodeToCache.tag;
                var componentInstance = vnodeToCache.componentInstance;
                var componentOptions = vnodeToCache.componentOptions;
                cache[keyToCache] = {
                  name: getComponentName(componentOptions),
                  tag,
                  componentInstance
                };
                keys.push(keyToCache);
                if (this.max && keys.length > parseInt(this.max)) {
                  pruneCacheEntry(cache, keys[0], keys, this._vnode);
                }
                this.vnodeToCache = null;
              }
            }
          },
          created: function created() {
            this.cache = /* @__PURE__ */ Object.create(null);
            this.keys = [];
          },
          destroyed: function destroyed() {
            for (var key in this.cache) {
              pruneCacheEntry(this.cache, key, this.keys);
            }
          },
          mounted: function mounted() {
            var this$1 = this;
            this.cacheVNode();
            this.$watch("include", function(val) {
              pruneCache(this$1, function(name) {
                return matches(val, name);
              });
            });
            this.$watch("exclude", function(val) {
              pruneCache(this$1, function(name) {
                return !matches(val, name);
              });
            });
          },
          updated: function updated() {
            this.cacheVNode();
          },
          render: function render() {
            var slot = this.$slots.default;
            var vnode = getFirstComponentChild(slot);
            var componentOptions = vnode && vnode.componentOptions;
            if (componentOptions) {
              var name = getComponentName(componentOptions);
              var ref2 = this;
              var include = ref2.include;
              var exclude = ref2.exclude;
              if (include && (!name || !matches(include, name)) || exclude && name && matches(exclude, name)) {
                return vnode;
              }
              var ref$12 = this;
              var cache = ref$12.cache;
              var keys = ref$12.keys;
              var key = vnode.key == null ? componentOptions.Ctor.cid + (componentOptions.tag ? "::" + componentOptions.tag : "") : vnode.key;
              if (cache[key]) {
                vnode.componentInstance = cache[key].componentInstance;
                remove(keys, key);
                keys.push(key);
              } else {
                this.vnodeToCache = vnode;
                this.keyToCache = key;
              }
              vnode.data.keepAlive = true;
            }
            return vnode || slot && slot[0];
          }
        };
        var builtInComponents = {
          KeepAlive
        };
        function initGlobalAPI(Vue7) {
          var configDef = {};
          configDef.get = function() {
            return config;
          };
          {
            configDef.set = function() {
              warn("Do not replace the Vue.config object, set individual fields instead.");
            };
          }
          Object.defineProperty(Vue7, "config", configDef);
          Vue7.util = {
            warn,
            extend,
            mergeOptions,
            defineReactive: defineReactive$$1
          };
          Vue7.set = set;
          Vue7.delete = del;
          Vue7.nextTick = nextTick;
          Vue7.observable = function(obj) {
            observe(obj);
            return obj;
          };
          Vue7.options = /* @__PURE__ */ Object.create(null);
          ASSET_TYPES.forEach(function(type) {
            Vue7.options[type + "s"] = /* @__PURE__ */ Object.create(null);
          });
          Vue7.options._base = Vue7;
          extend(Vue7.options.components, builtInComponents);
          initUse(Vue7);
          initMixin$1(Vue7);
          initExtend(Vue7);
          initAssetRegisters(Vue7);
        }
        initGlobalAPI(Vue6);
        Object.defineProperty(Vue6.prototype, "$isServer", {
          get: isServerRendering
        });
        Object.defineProperty(Vue6.prototype, "$ssrContext", {
          get: function get() {
            return this.$vnode && this.$vnode.ssrContext;
          }
        });
        Object.defineProperty(Vue6, "FunctionalRenderContext", {
          value: FunctionalRenderContext
        });
        Vue6.version = "2.6.14";
        var isReservedAttr = makeMap("style,class");
        var acceptValue = makeMap("input,textarea,option,select,progress");
        var mustUseProp = function(tag, type, attr) {
          return attr === "value" && acceptValue(tag) && type !== "button" || attr === "selected" && tag === "option" || attr === "checked" && tag === "input" || attr === "muted" && tag === "video";
        };
        var isEnumeratedAttr = makeMap("contenteditable,draggable,spellcheck");
        var isValidContentEditableValue = makeMap("events,caret,typing,plaintext-only");
        var convertEnumeratedValue = function(key, value) {
          return isFalsyAttrValue(value) || value === "false" ? "false" : key === "contenteditable" && isValidContentEditableValue(value) ? value : "true";
        };
        var isBooleanAttr = makeMap("allowfullscreen,async,autofocus,autoplay,checked,compact,controls,declare,default,defaultchecked,defaultmuted,defaultselected,defer,disabled,enabled,formnovalidate,hidden,indeterminate,inert,ismap,itemscope,loop,multiple,muted,nohref,noresize,noshade,novalidate,nowrap,open,pauseonexit,readonly,required,reversed,scoped,seamless,selected,sortable,truespeed,typemustmatch,visible");
        var xlinkNS = "http://www.w3.org/1999/xlink";
        var isXlink = function(name) {
          return name.charAt(5) === ":" && name.slice(0, 5) === "xlink";
        };
        var getXlinkProp = function(name) {
          return isXlink(name) ? name.slice(6, name.length) : "";
        };
        var isFalsyAttrValue = function(val) {
          return val == null || val === false;
        };
        function genClassForVnode(vnode) {
          var data = vnode.data;
          var parentNode2 = vnode;
          var childNode = vnode;
          while (isDef(childNode.componentInstance)) {
            childNode = childNode.componentInstance._vnode;
            if (childNode && childNode.data) {
              data = mergeClassData(childNode.data, data);
            }
          }
          while (isDef(parentNode2 = parentNode2.parent)) {
            if (parentNode2 && parentNode2.data) {
              data = mergeClassData(data, parentNode2.data);
            }
          }
          return renderClass(data.staticClass, data.class);
        }
        function mergeClassData(child, parent) {
          return {
            staticClass: concat(child.staticClass, parent.staticClass),
            class: isDef(child.class) ? [child.class, parent.class] : parent.class
          };
        }
        function renderClass(staticClass, dynamicClass) {
          if (isDef(staticClass) || isDef(dynamicClass)) {
            return concat(staticClass, stringifyClass(dynamicClass));
          }
          return "";
        }
        function concat(a, b) {
          return a ? b ? a + " " + b : a : b || "";
        }
        function stringifyClass(value) {
          if (Array.isArray(value)) {
            return stringifyArray(value);
          }
          if (isObject(value)) {
            return stringifyObject(value);
          }
          if (typeof value === "string") {
            return value;
          }
          return "";
        }
        function stringifyArray(value) {
          var res = "";
          var stringified;
          for (var i = 0, l = value.length; i < l; i++) {
            if (isDef(stringified = stringifyClass(value[i])) && stringified !== "") {
              if (res) {
                res += " ";
              }
              res += stringified;
            }
          }
          return res;
        }
        function stringifyObject(value) {
          var res = "";
          for (var key in value) {
            if (value[key]) {
              if (res) {
                res += " ";
              }
              res += key;
            }
          }
          return res;
        }
        var namespaceMap = {
          svg: "http://www.w3.org/2000/svg",
          math: "http://www.w3.org/1998/Math/MathML"
        };
        var isHTMLTag = makeMap("html,body,base,head,link,meta,style,title,address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,menuitem,summary,content,element,shadow,template,blockquote,iframe,tfoot");
        var isSVG = makeMap("svg,animate,circle,clippath,cursor,defs,desc,ellipse,filter,font-face,foreignobject,g,glyph,image,line,marker,mask,missing-glyph,path,pattern,polygon,polyline,rect,switch,symbol,text,textpath,tspan,use,view", true);
        var isPreTag = function(tag) {
          return tag === "pre";
        };
        var isReservedTag = function(tag) {
          return isHTMLTag(tag) || isSVG(tag);
        };
        function getTagNamespace(tag) {
          if (isSVG(tag)) {
            return "svg";
          }
          if (tag === "math") {
            return "math";
          }
        }
        var unknownElementCache = /* @__PURE__ */ Object.create(null);
        function isUnknownElement(tag) {
          if (!inBrowser) {
            return true;
          }
          if (isReservedTag(tag)) {
            return false;
          }
          tag = tag.toLowerCase();
          if (unknownElementCache[tag] != null) {
            return unknownElementCache[tag];
          }
          var el = document.createElement(tag);
          if (tag.indexOf("-") > -1) {
            return unknownElementCache[tag] = el.constructor === window.HTMLUnknownElement || el.constructor === window.HTMLElement;
          } else {
            return unknownElementCache[tag] = /HTMLUnknownElement/.test(el.toString());
          }
        }
        var isTextInputType = makeMap("text,number,password,search,email,tel,url");
        function query(el) {
          if (typeof el === "string") {
            var selected = document.querySelector(el);
            if (!selected) {
              warn("Cannot find element: " + el);
              return document.createElement("div");
            }
            return selected;
          } else {
            return el;
          }
        }
        function createElement$1(tagName2, vnode) {
          var elm = document.createElement(tagName2);
          if (tagName2 !== "select") {
            return elm;
          }
          if (vnode.data && vnode.data.attrs && vnode.data.attrs.multiple !== void 0) {
            elm.setAttribute("multiple", "multiple");
          }
          return elm;
        }
        function createElementNS(namespace, tagName2) {
          return document.createElementNS(namespaceMap[namespace], tagName2);
        }
        function createTextNode(text2) {
          return document.createTextNode(text2);
        }
        function createComment(text2) {
          return document.createComment(text2);
        }
        function insertBefore(parentNode2, newNode, referenceNode) {
          parentNode2.insertBefore(newNode, referenceNode);
        }
        function removeChild(node, child) {
          node.removeChild(child);
        }
        function appendChild(node, child) {
          node.appendChild(child);
        }
        function parentNode(node) {
          return node.parentNode;
        }
        function nextSibling(node) {
          return node.nextSibling;
        }
        function tagName(node) {
          return node.tagName;
        }
        function setTextContent(node, text2) {
          node.textContent = text2;
        }
        function setStyleScope(node, scopeId) {
          node.setAttribute(scopeId, "");
        }
        var nodeOps = /* @__PURE__ */ Object.freeze({
          createElement: createElement$1,
          createElementNS,
          createTextNode,
          createComment,
          insertBefore,
          removeChild,
          appendChild,
          parentNode,
          nextSibling,
          tagName,
          setTextContent,
          setStyleScope
        });
        var ref = {
          create: function create(_, vnode) {
            registerRef(vnode);
          },
          update: function update(oldVnode, vnode) {
            if (oldVnode.data.ref !== vnode.data.ref) {
              registerRef(oldVnode, true);
              registerRef(vnode);
            }
          },
          destroy: function destroy(vnode) {
            registerRef(vnode, true);
          }
        };
        function registerRef(vnode, isRemoval) {
          var key = vnode.data.ref;
          if (!isDef(key)) {
            return;
          }
          var vm = vnode.context;
          var ref2 = vnode.componentInstance || vnode.elm;
          var refs = vm.$refs;
          if (isRemoval) {
            if (Array.isArray(refs[key])) {
              remove(refs[key], ref2);
            } else if (refs[key] === ref2) {
              refs[key] = void 0;
            }
          } else {
            if (vnode.data.refInFor) {
              if (!Array.isArray(refs[key])) {
                refs[key] = [ref2];
              } else if (refs[key].indexOf(ref2) < 0) {
                refs[key].push(ref2);
              }
            } else {
              refs[key] = ref2;
            }
          }
        }
        var emptyNode = new VNode("", {}, []);
        var hooks = ["create", "activate", "update", "remove", "destroy"];
        function sameVnode(a, b) {
          return a.key === b.key && a.asyncFactory === b.asyncFactory && (a.tag === b.tag && a.isComment === b.isComment && isDef(a.data) === isDef(b.data) && sameInputType(a, b) || isTrue(a.isAsyncPlaceholder) && isUndef(b.asyncFactory.error));
        }
        function sameInputType(a, b) {
          if (a.tag !== "input") {
            return true;
          }
          var i;
          var typeA = isDef(i = a.data) && isDef(i = i.attrs) && i.type;
          var typeB = isDef(i = b.data) && isDef(i = i.attrs) && i.type;
          return typeA === typeB || isTextInputType(typeA) && isTextInputType(typeB);
        }
        function createKeyToOldIdx(children, beginIdx, endIdx) {
          var i, key;
          var map = {};
          for (i = beginIdx; i <= endIdx; ++i) {
            key = children[i].key;
            if (isDef(key)) {
              map[key] = i;
            }
          }
          return map;
        }
        function createPatchFunction(backend) {
          var i, j;
          var cbs = {};
          var modules2 = backend.modules;
          var nodeOps2 = backend.nodeOps;
          for (i = 0; i < hooks.length; ++i) {
            cbs[hooks[i]] = [];
            for (j = 0; j < modules2.length; ++j) {
              if (isDef(modules2[j][hooks[i]])) {
                cbs[hooks[i]].push(modules2[j][hooks[i]]);
              }
            }
          }
          function emptyNodeAt(elm) {
            return new VNode(nodeOps2.tagName(elm).toLowerCase(), {}, [], void 0, elm);
          }
          function createRmCb(childElm, listeners) {
            function remove$$1() {
              if (--remove$$1.listeners === 0) {
                removeNode(childElm);
              }
            }
            remove$$1.listeners = listeners;
            return remove$$1;
          }
          function removeNode(el) {
            var parent = nodeOps2.parentNode(el);
            if (isDef(parent)) {
              nodeOps2.removeChild(parent, el);
            }
          }
          function isUnknownElement$$1(vnode, inVPre) {
            return !inVPre && !vnode.ns && !(config.ignoredElements.length && config.ignoredElements.some(function(ignore) {
              return isRegExp(ignore) ? ignore.test(vnode.tag) : ignore === vnode.tag;
            })) && config.isUnknownElement(vnode.tag);
          }
          var creatingElmInVPre = 0;
          function createElm(vnode, insertedVnodeQueue, parentElm, refElm, nested, ownerArray, index2) {
            if (isDef(vnode.elm) && isDef(ownerArray)) {
              vnode = ownerArray[index2] = cloneVNode(vnode);
            }
            vnode.isRootInsert = !nested;
            if (createComponent2(vnode, insertedVnodeQueue, parentElm, refElm)) {
              return;
            }
            var data = vnode.data;
            var children = vnode.children;
            var tag = vnode.tag;
            if (isDef(tag)) {
              {
                if (data && data.pre) {
                  creatingElmInVPre++;
                }
                if (isUnknownElement$$1(vnode, creatingElmInVPre)) {
                  warn("Unknown custom element: <" + tag + '> - did you register the component correctly? For recursive components, make sure to provide the "name" option.', vnode.context);
                }
              }
              vnode.elm = vnode.ns ? nodeOps2.createElementNS(vnode.ns, tag) : nodeOps2.createElement(tag, vnode);
              setScope(vnode);
              {
                createChildren(vnode, children, insertedVnodeQueue);
                if (isDef(data)) {
                  invokeCreateHooks(vnode, insertedVnodeQueue);
                }
                insert(parentElm, vnode.elm, refElm);
              }
              if (data && data.pre) {
                creatingElmInVPre--;
              }
            } else if (isTrue(vnode.isComment)) {
              vnode.elm = nodeOps2.createComment(vnode.text);
              insert(parentElm, vnode.elm, refElm);
            } else {
              vnode.elm = nodeOps2.createTextNode(vnode.text);
              insert(parentElm, vnode.elm, refElm);
            }
          }
          function createComponent2(vnode, insertedVnodeQueue, parentElm, refElm) {
            var i2 = vnode.data;
            if (isDef(i2)) {
              var isReactivated = isDef(vnode.componentInstance) && i2.keepAlive;
              if (isDef(i2 = i2.hook) && isDef(i2 = i2.init)) {
                i2(vnode, false);
              }
              if (isDef(vnode.componentInstance)) {
                initComponent(vnode, insertedVnodeQueue);
                insert(parentElm, vnode.elm, refElm);
                if (isTrue(isReactivated)) {
                  reactivateComponent(vnode, insertedVnodeQueue, parentElm, refElm);
                }
                return true;
              }
            }
          }
          function initComponent(vnode, insertedVnodeQueue) {
            if (isDef(vnode.data.pendingInsert)) {
              insertedVnodeQueue.push.apply(insertedVnodeQueue, vnode.data.pendingInsert);
              vnode.data.pendingInsert = null;
            }
            vnode.elm = vnode.componentInstance.$el;
            if (isPatchable(vnode)) {
              invokeCreateHooks(vnode, insertedVnodeQueue);
              setScope(vnode);
            } else {
              registerRef(vnode);
              insertedVnodeQueue.push(vnode);
            }
          }
          function reactivateComponent(vnode, insertedVnodeQueue, parentElm, refElm) {
            var i2;
            var innerNode = vnode;
            while (innerNode.componentInstance) {
              innerNode = innerNode.componentInstance._vnode;
              if (isDef(i2 = innerNode.data) && isDef(i2 = i2.transition)) {
                for (i2 = 0; i2 < cbs.activate.length; ++i2) {
                  cbs.activate[i2](emptyNode, innerNode);
                }
                insertedVnodeQueue.push(innerNode);
                break;
              }
            }
            insert(parentElm, vnode.elm, refElm);
          }
          function insert(parent, elm, ref$$1) {
            if (isDef(parent)) {
              if (isDef(ref$$1)) {
                if (nodeOps2.parentNode(ref$$1) === parent) {
                  nodeOps2.insertBefore(parent, elm, ref$$1);
                }
              } else {
                nodeOps2.appendChild(parent, elm);
              }
            }
          }
          function createChildren(vnode, children, insertedVnodeQueue) {
            if (Array.isArray(children)) {
              {
                checkDuplicateKeys(children);
              }
              for (var i2 = 0; i2 < children.length; ++i2) {
                createElm(children[i2], insertedVnodeQueue, vnode.elm, null, true, children, i2);
              }
            } else if (isPrimitive(vnode.text)) {
              nodeOps2.appendChild(vnode.elm, nodeOps2.createTextNode(String(vnode.text)));
            }
          }
          function isPatchable(vnode) {
            while (vnode.componentInstance) {
              vnode = vnode.componentInstance._vnode;
            }
            return isDef(vnode.tag);
          }
          function invokeCreateHooks(vnode, insertedVnodeQueue) {
            for (var i$1 = 0; i$1 < cbs.create.length; ++i$1) {
              cbs.create[i$1](emptyNode, vnode);
            }
            i = vnode.data.hook;
            if (isDef(i)) {
              if (isDef(i.create)) {
                i.create(emptyNode, vnode);
              }
              if (isDef(i.insert)) {
                insertedVnodeQueue.push(vnode);
              }
            }
          }
          function setScope(vnode) {
            var i2;
            if (isDef(i2 = vnode.fnScopeId)) {
              nodeOps2.setStyleScope(vnode.elm, i2);
            } else {
              var ancestor = vnode;
              while (ancestor) {
                if (isDef(i2 = ancestor.context) && isDef(i2 = i2.$options._scopeId)) {
                  nodeOps2.setStyleScope(vnode.elm, i2);
                }
                ancestor = ancestor.parent;
              }
            }
            if (isDef(i2 = activeInstance) && i2 !== vnode.context && i2 !== vnode.fnContext && isDef(i2 = i2.$options._scopeId)) {
              nodeOps2.setStyleScope(vnode.elm, i2);
            }
          }
          function addVnodes(parentElm, refElm, vnodes, startIdx, endIdx, insertedVnodeQueue) {
            for (; startIdx <= endIdx; ++startIdx) {
              createElm(vnodes[startIdx], insertedVnodeQueue, parentElm, refElm, false, vnodes, startIdx);
            }
          }
          function invokeDestroyHook(vnode) {
            var i2, j2;
            var data = vnode.data;
            if (isDef(data)) {
              if (isDef(i2 = data.hook) && isDef(i2 = i2.destroy)) {
                i2(vnode);
              }
              for (i2 = 0; i2 < cbs.destroy.length; ++i2) {
                cbs.destroy[i2](vnode);
              }
            }
            if (isDef(i2 = vnode.children)) {
              for (j2 = 0; j2 < vnode.children.length; ++j2) {
                invokeDestroyHook(vnode.children[j2]);
              }
            }
          }
          function removeVnodes(vnodes, startIdx, endIdx) {
            for (; startIdx <= endIdx; ++startIdx) {
              var ch = vnodes[startIdx];
              if (isDef(ch)) {
                if (isDef(ch.tag)) {
                  removeAndInvokeRemoveHook(ch);
                  invokeDestroyHook(ch);
                } else {
                  removeNode(ch.elm);
                }
              }
            }
          }
          function removeAndInvokeRemoveHook(vnode, rm) {
            if (isDef(rm) || isDef(vnode.data)) {
              var i2;
              var listeners = cbs.remove.length + 1;
              if (isDef(rm)) {
                rm.listeners += listeners;
              } else {
                rm = createRmCb(vnode.elm, listeners);
              }
              if (isDef(i2 = vnode.componentInstance) && isDef(i2 = i2._vnode) && isDef(i2.data)) {
                removeAndInvokeRemoveHook(i2, rm);
              }
              for (i2 = 0; i2 < cbs.remove.length; ++i2) {
                cbs.remove[i2](vnode, rm);
              }
              if (isDef(i2 = vnode.data.hook) && isDef(i2 = i2.remove)) {
                i2(vnode, rm);
              } else {
                rm();
              }
            } else {
              removeNode(vnode.elm);
            }
          }
          function updateChildren(parentElm, oldCh, newCh, insertedVnodeQueue, removeOnly) {
            var oldStartIdx = 0;
            var newStartIdx = 0;
            var oldEndIdx = oldCh.length - 1;
            var oldStartVnode = oldCh[0];
            var oldEndVnode = oldCh[oldEndIdx];
            var newEndIdx = newCh.length - 1;
            var newStartVnode = newCh[0];
            var newEndVnode = newCh[newEndIdx];
            var oldKeyToIdx, idxInOld, vnodeToMove, refElm;
            var canMove = !removeOnly;
            {
              checkDuplicateKeys(newCh);
            }
            while (oldStartIdx <= oldEndIdx && newStartIdx <= newEndIdx) {
              if (isUndef(oldStartVnode)) {
                oldStartVnode = oldCh[++oldStartIdx];
              } else if (isUndef(oldEndVnode)) {
                oldEndVnode = oldCh[--oldEndIdx];
              } else if (sameVnode(oldStartVnode, newStartVnode)) {
                patchVnode(oldStartVnode, newStartVnode, insertedVnodeQueue, newCh, newStartIdx);
                oldStartVnode = oldCh[++oldStartIdx];
                newStartVnode = newCh[++newStartIdx];
              } else if (sameVnode(oldEndVnode, newEndVnode)) {
                patchVnode(oldEndVnode, newEndVnode, insertedVnodeQueue, newCh, newEndIdx);
                oldEndVnode = oldCh[--oldEndIdx];
                newEndVnode = newCh[--newEndIdx];
              } else if (sameVnode(oldStartVnode, newEndVnode)) {
                patchVnode(oldStartVnode, newEndVnode, insertedVnodeQueue, newCh, newEndIdx);
                canMove && nodeOps2.insertBefore(parentElm, oldStartVnode.elm, nodeOps2.nextSibling(oldEndVnode.elm));
                oldStartVnode = oldCh[++oldStartIdx];
                newEndVnode = newCh[--newEndIdx];
              } else if (sameVnode(oldEndVnode, newStartVnode)) {
                patchVnode(oldEndVnode, newStartVnode, insertedVnodeQueue, newCh, newStartIdx);
                canMove && nodeOps2.insertBefore(parentElm, oldEndVnode.elm, oldStartVnode.elm);
                oldEndVnode = oldCh[--oldEndIdx];
                newStartVnode = newCh[++newStartIdx];
              } else {
                if (isUndef(oldKeyToIdx)) {
                  oldKeyToIdx = createKeyToOldIdx(oldCh, oldStartIdx, oldEndIdx);
                }
                idxInOld = isDef(newStartVnode.key) ? oldKeyToIdx[newStartVnode.key] : findIdxInOld(newStartVnode, oldCh, oldStartIdx, oldEndIdx);
                if (isUndef(idxInOld)) {
                  createElm(newStartVnode, insertedVnodeQueue, parentElm, oldStartVnode.elm, false, newCh, newStartIdx);
                } else {
                  vnodeToMove = oldCh[idxInOld];
                  if (sameVnode(vnodeToMove, newStartVnode)) {
                    patchVnode(vnodeToMove, newStartVnode, insertedVnodeQueue, newCh, newStartIdx);
                    oldCh[idxInOld] = void 0;
                    canMove && nodeOps2.insertBefore(parentElm, vnodeToMove.elm, oldStartVnode.elm);
                  } else {
                    createElm(newStartVnode, insertedVnodeQueue, parentElm, oldStartVnode.elm, false, newCh, newStartIdx);
                  }
                }
                newStartVnode = newCh[++newStartIdx];
              }
            }
            if (oldStartIdx > oldEndIdx) {
              refElm = isUndef(newCh[newEndIdx + 1]) ? null : newCh[newEndIdx + 1].elm;
              addVnodes(parentElm, refElm, newCh, newStartIdx, newEndIdx, insertedVnodeQueue);
            } else if (newStartIdx > newEndIdx) {
              removeVnodes(oldCh, oldStartIdx, oldEndIdx);
            }
          }
          function checkDuplicateKeys(children) {
            var seenKeys = {};
            for (var i2 = 0; i2 < children.length; i2++) {
              var vnode = children[i2];
              var key = vnode.key;
              if (isDef(key)) {
                if (seenKeys[key]) {
                  warn("Duplicate keys detected: '" + key + "'. This may cause an update error.", vnode.context);
                } else {
                  seenKeys[key] = true;
                }
              }
            }
          }
          function findIdxInOld(node, oldCh, start, end) {
            for (var i2 = start; i2 < end; i2++) {
              var c = oldCh[i2];
              if (isDef(c) && sameVnode(node, c)) {
                return i2;
              }
            }
          }
          function patchVnode(oldVnode, vnode, insertedVnodeQueue, ownerArray, index2, removeOnly) {
            if (oldVnode === vnode) {
              return;
            }
            if (isDef(vnode.elm) && isDef(ownerArray)) {
              vnode = ownerArray[index2] = cloneVNode(vnode);
            }
            var elm = vnode.elm = oldVnode.elm;
            if (isTrue(oldVnode.isAsyncPlaceholder)) {
              if (isDef(vnode.asyncFactory.resolved)) {
                hydrate(oldVnode.elm, vnode, insertedVnodeQueue);
              } else {
                vnode.isAsyncPlaceholder = true;
              }
              return;
            }
            if (isTrue(vnode.isStatic) && isTrue(oldVnode.isStatic) && vnode.key === oldVnode.key && (isTrue(vnode.isCloned) || isTrue(vnode.isOnce))) {
              vnode.componentInstance = oldVnode.componentInstance;
              return;
            }
            var i2;
            var data = vnode.data;
            if (isDef(data) && isDef(i2 = data.hook) && isDef(i2 = i2.prepatch)) {
              i2(oldVnode, vnode);
            }
            var oldCh = oldVnode.children;
            var ch = vnode.children;
            if (isDef(data) && isPatchable(vnode)) {
              for (i2 = 0; i2 < cbs.update.length; ++i2) {
                cbs.update[i2](oldVnode, vnode);
              }
              if (isDef(i2 = data.hook) && isDef(i2 = i2.update)) {
                i2(oldVnode, vnode);
              }
            }
            if (isUndef(vnode.text)) {
              if (isDef(oldCh) && isDef(ch)) {
                if (oldCh !== ch) {
                  updateChildren(elm, oldCh, ch, insertedVnodeQueue, removeOnly);
                }
              } else if (isDef(ch)) {
                {
                  checkDuplicateKeys(ch);
                }
                if (isDef(oldVnode.text)) {
                  nodeOps2.setTextContent(elm, "");
                }
                addVnodes(elm, null, ch, 0, ch.length - 1, insertedVnodeQueue);
              } else if (isDef(oldCh)) {
                removeVnodes(oldCh, 0, oldCh.length - 1);
              } else if (isDef(oldVnode.text)) {
                nodeOps2.setTextContent(elm, "");
              }
            } else if (oldVnode.text !== vnode.text) {
              nodeOps2.setTextContent(elm, vnode.text);
            }
            if (isDef(data)) {
              if (isDef(i2 = data.hook) && isDef(i2 = i2.postpatch)) {
                i2(oldVnode, vnode);
              }
            }
          }
          function invokeInsertHook(vnode, queue2, initial) {
            if (isTrue(initial) && isDef(vnode.parent)) {
              vnode.parent.data.pendingInsert = queue2;
            } else {
              for (var i2 = 0; i2 < queue2.length; ++i2) {
                queue2[i2].data.hook.insert(queue2[i2]);
              }
            }
          }
          var hydrationBailed = false;
          var isRenderedModule = makeMap("attrs,class,staticClass,staticStyle,key");
          function hydrate(elm, vnode, insertedVnodeQueue, inVPre) {
            var i2;
            var tag = vnode.tag;
            var data = vnode.data;
            var children = vnode.children;
            inVPre = inVPre || data && data.pre;
            vnode.elm = elm;
            if (isTrue(vnode.isComment) && isDef(vnode.asyncFactory)) {
              vnode.isAsyncPlaceholder = true;
              return true;
            }
            {
              if (!assertNodeMatch(elm, vnode, inVPre)) {
                return false;
              }
            }
            if (isDef(data)) {
              if (isDef(i2 = data.hook) && isDef(i2 = i2.init)) {
                i2(vnode, true);
              }
              if (isDef(i2 = vnode.componentInstance)) {
                initComponent(vnode, insertedVnodeQueue);
                return true;
              }
            }
            if (isDef(tag)) {
              if (isDef(children)) {
                if (!elm.hasChildNodes()) {
                  createChildren(vnode, children, insertedVnodeQueue);
                } else {
                  if (isDef(i2 = data) && isDef(i2 = i2.domProps) && isDef(i2 = i2.innerHTML)) {
                    if (i2 !== elm.innerHTML) {
                      if (typeof console !== "undefined" && !hydrationBailed) {
                        hydrationBailed = true;
                        console.warn("Parent: ", elm);
                        console.warn("server innerHTML: ", i2);
                        console.warn("client innerHTML: ", elm.innerHTML);
                      }
                      return false;
                    }
                  } else {
                    var childrenMatch = true;
                    var childNode = elm.firstChild;
                    for (var i$1 = 0; i$1 < children.length; i$1++) {
                      if (!childNode || !hydrate(childNode, children[i$1], insertedVnodeQueue, inVPre)) {
                        childrenMatch = false;
                        break;
                      }
                      childNode = childNode.nextSibling;
                    }
                    if (!childrenMatch || childNode) {
                      if (typeof console !== "undefined" && !hydrationBailed) {
                        hydrationBailed = true;
                        console.warn("Parent: ", elm);
                        console.warn("Mismatching childNodes vs. VNodes: ", elm.childNodes, children);
                      }
                      return false;
                    }
                  }
                }
              }
              if (isDef(data)) {
                var fullInvoke = false;
                for (var key in data) {
                  if (!isRenderedModule(key)) {
                    fullInvoke = true;
                    invokeCreateHooks(vnode, insertedVnodeQueue);
                    break;
                  }
                }
                if (!fullInvoke && data["class"]) {
                  traverse(data["class"]);
                }
              }
            } else if (elm.data !== vnode.text) {
              elm.data = vnode.text;
            }
            return true;
          }
          function assertNodeMatch(node, vnode, inVPre) {
            if (isDef(vnode.tag)) {
              return vnode.tag.indexOf("vue-component") === 0 || !isUnknownElement$$1(vnode, inVPre) && vnode.tag.toLowerCase() === (node.tagName && node.tagName.toLowerCase());
            } else {
              return node.nodeType === (vnode.isComment ? 8 : 3);
            }
          }
          return function patch2(oldVnode, vnode, hydrating, removeOnly) {
            if (isUndef(vnode)) {
              if (isDef(oldVnode)) {
                invokeDestroyHook(oldVnode);
              }
              return;
            }
            var isInitialPatch = false;
            var insertedVnodeQueue = [];
            if (isUndef(oldVnode)) {
              isInitialPatch = true;
              createElm(vnode, insertedVnodeQueue);
            } else {
              var isRealElement = isDef(oldVnode.nodeType);
              if (!isRealElement && sameVnode(oldVnode, vnode)) {
                patchVnode(oldVnode, vnode, insertedVnodeQueue, null, null, removeOnly);
              } else {
                if (isRealElement) {
                  if (oldVnode.nodeType === 1 && oldVnode.hasAttribute(SSR_ATTR)) {
                    oldVnode.removeAttribute(SSR_ATTR);
                    hydrating = true;
                  }
                  if (isTrue(hydrating)) {
                    if (hydrate(oldVnode, vnode, insertedVnodeQueue)) {
                      invokeInsertHook(vnode, insertedVnodeQueue, true);
                      return oldVnode;
                    } else {
                      warn("The client-side rendered virtual DOM tree is not matching server-rendered content. This is likely caused by incorrect HTML markup, for example nesting block-level elements inside <p>, or missing <tbody>. Bailing hydration and performing full client-side render.");
                    }
                  }
                  oldVnode = emptyNodeAt(oldVnode);
                }
                var oldElm = oldVnode.elm;
                var parentElm = nodeOps2.parentNode(oldElm);
                createElm(vnode, insertedVnodeQueue, oldElm._leaveCb ? null : parentElm, nodeOps2.nextSibling(oldElm));
                if (isDef(vnode.parent)) {
                  var ancestor = vnode.parent;
                  var patchable = isPatchable(vnode);
                  while (ancestor) {
                    for (var i2 = 0; i2 < cbs.destroy.length; ++i2) {
                      cbs.destroy[i2](ancestor);
                    }
                    ancestor.elm = vnode.elm;
                    if (patchable) {
                      for (var i$1 = 0; i$1 < cbs.create.length; ++i$1) {
                        cbs.create[i$1](emptyNode, ancestor);
                      }
                      var insert2 = ancestor.data.hook.insert;
                      if (insert2.merged) {
                        for (var i$2 = 1; i$2 < insert2.fns.length; i$2++) {
                          insert2.fns[i$2]();
                        }
                      }
                    } else {
                      registerRef(ancestor);
                    }
                    ancestor = ancestor.parent;
                  }
                }
                if (isDef(parentElm)) {
                  removeVnodes([oldVnode], 0, 0);
                } else if (isDef(oldVnode.tag)) {
                  invokeDestroyHook(oldVnode);
                }
              }
            }
            invokeInsertHook(vnode, insertedVnodeQueue, isInitialPatch);
            return vnode.elm;
          };
        }
        var directives = {
          create: updateDirectives,
          update: updateDirectives,
          destroy: function unbindDirectives(vnode) {
            updateDirectives(vnode, emptyNode);
          }
        };
        function updateDirectives(oldVnode, vnode) {
          if (oldVnode.data.directives || vnode.data.directives) {
            _update(oldVnode, vnode);
          }
        }
        function _update(oldVnode, vnode) {
          var isCreate = oldVnode === emptyNode;
          var isDestroy = vnode === emptyNode;
          var oldDirs = normalizeDirectives$1(oldVnode.data.directives, oldVnode.context);
          var newDirs = normalizeDirectives$1(vnode.data.directives, vnode.context);
          var dirsWithInsert = [];
          var dirsWithPostpatch = [];
          var key, oldDir, dir;
          for (key in newDirs) {
            oldDir = oldDirs[key];
            dir = newDirs[key];
            if (!oldDir) {
              callHook$1(dir, "bind", vnode, oldVnode);
              if (dir.def && dir.def.inserted) {
                dirsWithInsert.push(dir);
              }
            } else {
              dir.oldValue = oldDir.value;
              dir.oldArg = oldDir.arg;
              callHook$1(dir, "update", vnode, oldVnode);
              if (dir.def && dir.def.componentUpdated) {
                dirsWithPostpatch.push(dir);
              }
            }
          }
          if (dirsWithInsert.length) {
            var callInsert = function() {
              for (var i = 0; i < dirsWithInsert.length; i++) {
                callHook$1(dirsWithInsert[i], "inserted", vnode, oldVnode);
              }
            };
            if (isCreate) {
              mergeVNodeHook(vnode, "insert", callInsert);
            } else {
              callInsert();
            }
          }
          if (dirsWithPostpatch.length) {
            mergeVNodeHook(vnode, "postpatch", function() {
              for (var i = 0; i < dirsWithPostpatch.length; i++) {
                callHook$1(dirsWithPostpatch[i], "componentUpdated", vnode, oldVnode);
              }
            });
          }
          if (!isCreate) {
            for (key in oldDirs) {
              if (!newDirs[key]) {
                callHook$1(oldDirs[key], "unbind", oldVnode, oldVnode, isDestroy);
              }
            }
          }
        }
        var emptyModifiers = /* @__PURE__ */ Object.create(null);
        function normalizeDirectives$1(dirs, vm) {
          var res = /* @__PURE__ */ Object.create(null);
          if (!dirs) {
            return res;
          }
          var i, dir;
          for (i = 0; i < dirs.length; i++) {
            dir = dirs[i];
            if (!dir.modifiers) {
              dir.modifiers = emptyModifiers;
            }
            res[getRawDirName(dir)] = dir;
            dir.def = resolveAsset(vm.$options, "directives", dir.name, true);
          }
          return res;
        }
        function getRawDirName(dir) {
          return dir.rawName || dir.name + "." + Object.keys(dir.modifiers || {}).join(".");
        }
        function callHook$1(dir, hook, vnode, oldVnode, isDestroy) {
          var fn = dir.def && dir.def[hook];
          if (fn) {
            try {
              fn(vnode.elm, dir, vnode, oldVnode, isDestroy);
            } catch (e) {
              handleError(e, vnode.context, "directive " + dir.name + " " + hook + " hook");
            }
          }
        }
        var baseModules = [
          ref,
          directives
        ];
        function updateAttrs(oldVnode, vnode) {
          var opts2 = vnode.componentOptions;
          if (isDef(opts2) && opts2.Ctor.options.inheritAttrs === false) {
            return;
          }
          if (isUndef(oldVnode.data.attrs) && isUndef(vnode.data.attrs)) {
            return;
          }
          var key, cur, old;
          var elm = vnode.elm;
          var oldAttrs = oldVnode.data.attrs || {};
          var attrs2 = vnode.data.attrs || {};
          if (isDef(attrs2.__ob__)) {
            attrs2 = vnode.data.attrs = extend({}, attrs2);
          }
          for (key in attrs2) {
            cur = attrs2[key];
            old = oldAttrs[key];
            if (old !== cur) {
              setAttr(elm, key, cur, vnode.data.pre);
            }
          }
          if ((isIE || isEdge) && attrs2.value !== oldAttrs.value) {
            setAttr(elm, "value", attrs2.value);
          }
          for (key in oldAttrs) {
            if (isUndef(attrs2[key])) {
              if (isXlink(key)) {
                elm.removeAttributeNS(xlinkNS, getXlinkProp(key));
              } else if (!isEnumeratedAttr(key)) {
                elm.removeAttribute(key);
              }
            }
          }
        }
        function setAttr(el, key, value, isInPre) {
          if (isInPre || el.tagName.indexOf("-") > -1) {
            baseSetAttr(el, key, value);
          } else if (isBooleanAttr(key)) {
            if (isFalsyAttrValue(value)) {
              el.removeAttribute(key);
            } else {
              value = key === "allowfullscreen" && el.tagName === "EMBED" ? "true" : key;
              el.setAttribute(key, value);
            }
          } else if (isEnumeratedAttr(key)) {
            el.setAttribute(key, convertEnumeratedValue(key, value));
          } else if (isXlink(key)) {
            if (isFalsyAttrValue(value)) {
              el.removeAttributeNS(xlinkNS, getXlinkProp(key));
            } else {
              el.setAttributeNS(xlinkNS, key, value);
            }
          } else {
            baseSetAttr(el, key, value);
          }
        }
        function baseSetAttr(el, key, value) {
          if (isFalsyAttrValue(value)) {
            el.removeAttribute(key);
          } else {
            if (isIE && !isIE9 && el.tagName === "TEXTAREA" && key === "placeholder" && value !== "" && !el.__ieph) {
              var blocker = function(e) {
                e.stopImmediatePropagation();
                el.removeEventListener("input", blocker);
              };
              el.addEventListener("input", blocker);
              el.__ieph = true;
            }
            el.setAttribute(key, value);
          }
        }
        var attrs = {
          create: updateAttrs,
          update: updateAttrs
        };
        function updateClass(oldVnode, vnode) {
          var el = vnode.elm;
          var data = vnode.data;
          var oldData = oldVnode.data;
          if (isUndef(data.staticClass) && isUndef(data.class) && (isUndef(oldData) || isUndef(oldData.staticClass) && isUndef(oldData.class))) {
            return;
          }
          var cls = genClassForVnode(vnode);
          var transitionClass = el._transitionClasses;
          if (isDef(transitionClass)) {
            cls = concat(cls, stringifyClass(transitionClass));
          }
          if (cls !== el._prevClass) {
            el.setAttribute("class", cls);
            el._prevClass = cls;
          }
        }
        var klass = {
          create: updateClass,
          update: updateClass
        };
        var validDivisionCharRE = /[\w).+\-_$\]]/;
        function parseFilters(exp) {
          var inSingle = false;
          var inDouble = false;
          var inTemplateString = false;
          var inRegex = false;
          var curly = 0;
          var square = 0;
          var paren = 0;
          var lastFilterIndex = 0;
          var c, prev, i, expression, filters;
          for (i = 0; i < exp.length; i++) {
            prev = c;
            c = exp.charCodeAt(i);
            if (inSingle) {
              if (c === 39 && prev !== 92) {
                inSingle = false;
              }
            } else if (inDouble) {
              if (c === 34 && prev !== 92) {
                inDouble = false;
              }
            } else if (inTemplateString) {
              if (c === 96 && prev !== 92) {
                inTemplateString = false;
              }
            } else if (inRegex) {
              if (c === 47 && prev !== 92) {
                inRegex = false;
              }
            } else if (c === 124 && exp.charCodeAt(i + 1) !== 124 && exp.charCodeAt(i - 1) !== 124 && !curly && !square && !paren) {
              if (expression === void 0) {
                lastFilterIndex = i + 1;
                expression = exp.slice(0, i).trim();
              } else {
                pushFilter();
              }
            } else {
              switch (c) {
                case 34:
                  inDouble = true;
                  break;
                case 39:
                  inSingle = true;
                  break;
                case 96:
                  inTemplateString = true;
                  break;
                case 40:
                  paren++;
                  break;
                case 41:
                  paren--;
                  break;
                case 91:
                  square++;
                  break;
                case 93:
                  square--;
                  break;
                case 123:
                  curly++;
                  break;
                case 125:
                  curly--;
                  break;
              }
              if (c === 47) {
                var j = i - 1;
                var p2 = void 0;
                for (; j >= 0; j--) {
                  p2 = exp.charAt(j);
                  if (p2 !== " ") {
                    break;
                  }
                }
                if (!p2 || !validDivisionCharRE.test(p2)) {
                  inRegex = true;
                }
              }
            }
          }
          if (expression === void 0) {
            expression = exp.slice(0, i).trim();
          } else if (lastFilterIndex !== 0) {
            pushFilter();
          }
          function pushFilter() {
            (filters || (filters = [])).push(exp.slice(lastFilterIndex, i).trim());
            lastFilterIndex = i + 1;
          }
          if (filters) {
            for (i = 0; i < filters.length; i++) {
              expression = wrapFilter(expression, filters[i]);
            }
          }
          return expression;
        }
        function wrapFilter(exp, filter) {
          var i = filter.indexOf("(");
          if (i < 0) {
            return '_f("' + filter + '")(' + exp + ")";
          } else {
            var name = filter.slice(0, i);
            var args = filter.slice(i + 1);
            return '_f("' + name + '")(' + exp + (args !== ")" ? "," + args : args);
          }
        }
        function baseWarn(msg, range2) {
          console.error("[Vue compiler]: " + msg);
        }
        function pluckModuleFunction(modules2, key) {
          return modules2 ? modules2.map(function(m) {
            return m[key];
          }).filter(function(_) {
            return _;
          }) : [];
        }
        function addProp(el, name, value, range2, dynamic) {
          (el.props || (el.props = [])).push(rangeSetItem({ name, value, dynamic }, range2));
          el.plain = false;
        }
        function addAttr(el, name, value, range2, dynamic) {
          var attrs2 = dynamic ? el.dynamicAttrs || (el.dynamicAttrs = []) : el.attrs || (el.attrs = []);
          attrs2.push(rangeSetItem({ name, value, dynamic }, range2));
          el.plain = false;
        }
        function addRawAttr(el, name, value, range2) {
          el.attrsMap[name] = value;
          el.attrsList.push(rangeSetItem({ name, value }, range2));
        }
        function addDirective(el, name, rawName, value, arg, isDynamicArg, modifiers, range2) {
          (el.directives || (el.directives = [])).push(rangeSetItem({
            name,
            rawName,
            value,
            arg,
            isDynamicArg,
            modifiers
          }, range2));
          el.plain = false;
        }
        function prependModifierMarker(symbol, name, dynamic) {
          return dynamic ? "_p(" + name + ',"' + symbol + '")' : symbol + name;
        }
        function addHandler(el, name, value, modifiers, important, warn2, range2, dynamic) {
          modifiers = modifiers || emptyObject;
          if (warn2 && modifiers.prevent && modifiers.passive) {
            warn2("passive and prevent can't be used together. Passive handler can't prevent default event.", range2);
          }
          if (modifiers.right) {
            if (dynamic) {
              name = "(" + name + ")==='click'?'contextmenu':(" + name + ")";
            } else if (name === "click") {
              name = "contextmenu";
              delete modifiers.right;
            }
          } else if (modifiers.middle) {
            if (dynamic) {
              name = "(" + name + ")==='click'?'mouseup':(" + name + ")";
            } else if (name === "click") {
              name = "mouseup";
            }
          }
          if (modifiers.capture) {
            delete modifiers.capture;
            name = prependModifierMarker("!", name, dynamic);
          }
          if (modifiers.once) {
            delete modifiers.once;
            name = prependModifierMarker("~", name, dynamic);
          }
          if (modifiers.passive) {
            delete modifiers.passive;
            name = prependModifierMarker("&", name, dynamic);
          }
          var events2;
          if (modifiers.native) {
            delete modifiers.native;
            events2 = el.nativeEvents || (el.nativeEvents = {});
          } else {
            events2 = el.events || (el.events = {});
          }
          var newHandler = rangeSetItem({ value: value.trim(), dynamic }, range2);
          if (modifiers !== emptyObject) {
            newHandler.modifiers = modifiers;
          }
          var handlers = events2[name];
          if (Array.isArray(handlers)) {
            important ? handlers.unshift(newHandler) : handlers.push(newHandler);
          } else if (handlers) {
            events2[name] = important ? [newHandler, handlers] : [handlers, newHandler];
          } else {
            events2[name] = newHandler;
          }
          el.plain = false;
        }
        function getRawBindingAttr(el, name) {
          return el.rawAttrsMap[":" + name] || el.rawAttrsMap["v-bind:" + name] || el.rawAttrsMap[name];
        }
        function getBindingAttr(el, name, getStatic) {
          var dynamicValue = getAndRemoveAttr(el, ":" + name) || getAndRemoveAttr(el, "v-bind:" + name);
          if (dynamicValue != null) {
            return parseFilters(dynamicValue);
          } else if (getStatic !== false) {
            var staticValue = getAndRemoveAttr(el, name);
            if (staticValue != null) {
              return JSON.stringify(staticValue);
            }
          }
        }
        function getAndRemoveAttr(el, name, removeFromMap) {
          var val;
          if ((val = el.attrsMap[name]) != null) {
            var list = el.attrsList;
            for (var i = 0, l = list.length; i < l; i++) {
              if (list[i].name === name) {
                list.splice(i, 1);
                break;
              }
            }
          }
          if (removeFromMap) {
            delete el.attrsMap[name];
          }
          return val;
        }
        function getAndRemoveAttrByRegex(el, name) {
          var list = el.attrsList;
          for (var i = 0, l = list.length; i < l; i++) {
            var attr = list[i];
            if (name.test(attr.name)) {
              list.splice(i, 1);
              return attr;
            }
          }
        }
        function rangeSetItem(item, range2) {
          if (range2) {
            if (range2.start != null) {
              item.start = range2.start;
            }
            if (range2.end != null) {
              item.end = range2.end;
            }
          }
          return item;
        }
        function genComponentModel(el, value, modifiers) {
          var ref2 = modifiers || {};
          var number = ref2.number;
          var trim = ref2.trim;
          var baseValueExpression = "$$v";
          var valueExpression = baseValueExpression;
          if (trim) {
            valueExpression = "(typeof " + baseValueExpression + " === 'string'? " + baseValueExpression + ".trim(): " + baseValueExpression + ")";
          }
          if (number) {
            valueExpression = "_n(" + valueExpression + ")";
          }
          var assignment = genAssignmentCode(value, valueExpression);
          el.model = {
            value: "(" + value + ")",
            expression: JSON.stringify(value),
            callback: "function (" + baseValueExpression + ") {" + assignment + "}"
          };
        }
        function genAssignmentCode(value, assignment) {
          var res = parseModel(value);
          if (res.key === null) {
            return value + "=" + assignment;
          } else {
            return "$set(" + res.exp + ", " + res.key + ", " + assignment + ")";
          }
        }
        var len, str, chr, index$1, expressionPos, expressionEndPos;
        function parseModel(val) {
          val = val.trim();
          len = val.length;
          if (val.indexOf("[") < 0 || val.lastIndexOf("]") < len - 1) {
            index$1 = val.lastIndexOf(".");
            if (index$1 > -1) {
              return {
                exp: val.slice(0, index$1),
                key: '"' + val.slice(index$1 + 1) + '"'
              };
            } else {
              return {
                exp: val,
                key: null
              };
            }
          }
          str = val;
          index$1 = expressionPos = expressionEndPos = 0;
          while (!eof()) {
            chr = next();
            if (isStringStart(chr)) {
              parseString(chr);
            } else if (chr === 91) {
              parseBracket(chr);
            }
          }
          return {
            exp: val.slice(0, expressionPos),
            key: val.slice(expressionPos + 1, expressionEndPos)
          };
        }
        function next() {
          return str.charCodeAt(++index$1);
        }
        function eof() {
          return index$1 >= len;
        }
        function isStringStart(chr2) {
          return chr2 === 34 || chr2 === 39;
        }
        function parseBracket(chr2) {
          var inBracket = 1;
          expressionPos = index$1;
          while (!eof()) {
            chr2 = next();
            if (isStringStart(chr2)) {
              parseString(chr2);
              continue;
            }
            if (chr2 === 91) {
              inBracket++;
            }
            if (chr2 === 93) {
              inBracket--;
            }
            if (inBracket === 0) {
              expressionEndPos = index$1;
              break;
            }
          }
        }
        function parseString(chr2) {
          var stringQuote = chr2;
          while (!eof()) {
            chr2 = next();
            if (chr2 === stringQuote) {
              break;
            }
          }
        }
        var warn$1;
        var RANGE_TOKEN = "__r";
        var CHECKBOX_RADIO_TOKEN = "__c";
        function model(el, dir, _warn) {
          warn$1 = _warn;
          var value = dir.value;
          var modifiers = dir.modifiers;
          var tag = el.tag;
          var type = el.attrsMap.type;
          {
            if (tag === "input" && type === "file") {
              warn$1("<" + el.tag + ' v-model="' + value + '" type="file">:\nFile inputs are read only. Use a v-on:change listener instead.', el.rawAttrsMap["v-model"]);
            }
          }
          if (el.component) {
            genComponentModel(el, value, modifiers);
            return false;
          } else if (tag === "select") {
            genSelect(el, value, modifiers);
          } else if (tag === "input" && type === "checkbox") {
            genCheckboxModel(el, value, modifiers);
          } else if (tag === "input" && type === "radio") {
            genRadioModel(el, value, modifiers);
          } else if (tag === "input" || tag === "textarea") {
            genDefaultModel(el, value, modifiers);
          } else if (!config.isReservedTag(tag)) {
            genComponentModel(el, value, modifiers);
            return false;
          } else {
            warn$1("<" + el.tag + ' v-model="' + value + `">: v-model is not supported on this element type. If you are working with contenteditable, it's recommended to wrap a library dedicated for that purpose inside a custom component.`, el.rawAttrsMap["v-model"]);
          }
          return true;
        }
        function genCheckboxModel(el, value, modifiers) {
          var number = modifiers && modifiers.number;
          var valueBinding = getBindingAttr(el, "value") || "null";
          var trueValueBinding = getBindingAttr(el, "true-value") || "true";
          var falseValueBinding = getBindingAttr(el, "false-value") || "false";
          addProp(el, "checked", "Array.isArray(" + value + ")?_i(" + value + "," + valueBinding + ")>-1" + (trueValueBinding === "true" ? ":(" + value + ")" : ":_q(" + value + "," + trueValueBinding + ")"));
          addHandler(el, "change", "var $$a=" + value + ",$$el=$event.target,$$c=$$el.checked?(" + trueValueBinding + "):(" + falseValueBinding + ");if(Array.isArray($$a)){var $$v=" + (number ? "_n(" + valueBinding + ")" : valueBinding) + ",$$i=_i($$a,$$v);if($$el.checked){$$i<0&&(" + genAssignmentCode(value, "$$a.concat([$$v])") + ")}else{$$i>-1&&(" + genAssignmentCode(value, "$$a.slice(0,$$i).concat($$a.slice($$i+1))") + ")}}else{" + genAssignmentCode(value, "$$c") + "}", null, true);
        }
        function genRadioModel(el, value, modifiers) {
          var number = modifiers && modifiers.number;
          var valueBinding = getBindingAttr(el, "value") || "null";
          valueBinding = number ? "_n(" + valueBinding + ")" : valueBinding;
          addProp(el, "checked", "_q(" + value + "," + valueBinding + ")");
          addHandler(el, "change", genAssignmentCode(value, valueBinding), null, true);
        }
        function genSelect(el, value, modifiers) {
          var number = modifiers && modifiers.number;
          var selectedVal = 'Array.prototype.filter.call($event.target.options,function(o){return o.selected}).map(function(o){var val = "_value" in o ? o._value : o.value;return ' + (number ? "_n(val)" : "val") + "})";
          var assignment = "$event.target.multiple ? $$selectedVal : $$selectedVal[0]";
          var code = "var $$selectedVal = " + selectedVal + ";";
          code = code + " " + genAssignmentCode(value, assignment);
          addHandler(el, "change", code, null, true);
        }
        function genDefaultModel(el, value, modifiers) {
          var type = el.attrsMap.type;
          {
            var value$1 = el.attrsMap["v-bind:value"] || el.attrsMap[":value"];
            var typeBinding = el.attrsMap["v-bind:type"] || el.attrsMap[":type"];
            if (value$1 && !typeBinding) {
              var binding = el.attrsMap["v-bind:value"] ? "v-bind:value" : ":value";
              warn$1(binding + '="' + value$1 + '" conflicts with v-model on the same element because the latter already expands to a value binding internally', el.rawAttrsMap[binding]);
            }
          }
          var ref2 = modifiers || {};
          var lazy = ref2.lazy;
          var number = ref2.number;
          var trim = ref2.trim;
          var needCompositionGuard = !lazy && type !== "range";
          var event = lazy ? "change" : type === "range" ? RANGE_TOKEN : "input";
          var valueExpression = "$event.target.value";
          if (trim) {
            valueExpression = "$event.target.value.trim()";
          }
          if (number) {
            valueExpression = "_n(" + valueExpression + ")";
          }
          var code = genAssignmentCode(value, valueExpression);
          if (needCompositionGuard) {
            code = "if($event.target.composing)return;" + code;
          }
          addProp(el, "value", "(" + value + ")");
          addHandler(el, event, code, null, true);
          if (trim || number) {
            addHandler(el, "blur", "$forceUpdate()");
          }
        }
        function normalizeEvents(on2) {
          if (isDef(on2[RANGE_TOKEN])) {
            var event = isIE ? "change" : "input";
            on2[event] = [].concat(on2[RANGE_TOKEN], on2[event] || []);
            delete on2[RANGE_TOKEN];
          }
          if (isDef(on2[CHECKBOX_RADIO_TOKEN])) {
            on2.change = [].concat(on2[CHECKBOX_RADIO_TOKEN], on2.change || []);
            delete on2[CHECKBOX_RADIO_TOKEN];
          }
        }
        var target$1;
        function createOnceHandler$1(event, handler, capture) {
          var _target = target$1;
          return function onceHandler() {
            var res = handler.apply(null, arguments);
            if (res !== null) {
              remove$2(event, onceHandler, capture, _target);
            }
          };
        }
        var useMicrotaskFix = isUsingMicroTask && !(isFF && Number(isFF[1]) <= 53);
        function add$1(name, handler, capture, passive) {
          if (useMicrotaskFix) {
            var attachedTimestamp = currentFlushTimestamp;
            var original = handler;
            handler = original._wrapper = function(e) {
              if (e.target === e.currentTarget || e.timeStamp >= attachedTimestamp || e.timeStamp <= 0 || e.target.ownerDocument !== document) {
                return original.apply(this, arguments);
              }
            };
          }
          target$1.addEventListener(name, handler, supportsPassive ? { capture, passive } : capture);
        }
        function remove$2(name, handler, capture, _target) {
          (_target || target$1).removeEventListener(name, handler._wrapper || handler, capture);
        }
        function updateDOMListeners(oldVnode, vnode) {
          if (isUndef(oldVnode.data.on) && isUndef(vnode.data.on)) {
            return;
          }
          var on2 = vnode.data.on || {};
          var oldOn = oldVnode.data.on || {};
          target$1 = vnode.elm;
          normalizeEvents(on2);
          updateListeners(on2, oldOn, add$1, remove$2, createOnceHandler$1, vnode.context);
          target$1 = void 0;
        }
        var events = {
          create: updateDOMListeners,
          update: updateDOMListeners
        };
        var svgContainer;
        function updateDOMProps(oldVnode, vnode) {
          if (isUndef(oldVnode.data.domProps) && isUndef(vnode.data.domProps)) {
            return;
          }
          var key, cur;
          var elm = vnode.elm;
          var oldProps = oldVnode.data.domProps || {};
          var props2 = vnode.data.domProps || {};
          if (isDef(props2.__ob__)) {
            props2 = vnode.data.domProps = extend({}, props2);
          }
          for (key in oldProps) {
            if (!(key in props2)) {
              elm[key] = "";
            }
          }
          for (key in props2) {
            cur = props2[key];
            if (key === "textContent" || key === "innerHTML") {
              if (vnode.children) {
                vnode.children.length = 0;
              }
              if (cur === oldProps[key]) {
                continue;
              }
              if (elm.childNodes.length === 1) {
                elm.removeChild(elm.childNodes[0]);
              }
            }
            if (key === "value" && elm.tagName !== "PROGRESS") {
              elm._value = cur;
              var strCur = isUndef(cur) ? "" : String(cur);
              if (shouldUpdateValue(elm, strCur)) {
                elm.value = strCur;
              }
            } else if (key === "innerHTML" && isSVG(elm.tagName) && isUndef(elm.innerHTML)) {
              svgContainer = svgContainer || document.createElement("div");
              svgContainer.innerHTML = "<svg>" + cur + "</svg>";
              var svg = svgContainer.firstChild;
              while (elm.firstChild) {
                elm.removeChild(elm.firstChild);
              }
              while (svg.firstChild) {
                elm.appendChild(svg.firstChild);
              }
            } else if (cur !== oldProps[key]) {
              try {
                elm[key] = cur;
              } catch (e) {
              }
            }
          }
        }
        function shouldUpdateValue(elm, checkVal) {
          return !elm.composing && (elm.tagName === "OPTION" || isNotInFocusAndDirty(elm, checkVal) || isDirtyWithModifiers(elm, checkVal));
        }
        function isNotInFocusAndDirty(elm, checkVal) {
          var notInFocus = true;
          try {
            notInFocus = document.activeElement !== elm;
          } catch (e) {
          }
          return notInFocus && elm.value !== checkVal;
        }
        function isDirtyWithModifiers(elm, newVal) {
          var value = elm.value;
          var modifiers = elm._vModifiers;
          if (isDef(modifiers)) {
            if (modifiers.number) {
              return toNumber(value) !== toNumber(newVal);
            }
            if (modifiers.trim) {
              return value.trim() !== newVal.trim();
            }
          }
          return value !== newVal;
        }
        var domProps = {
          create: updateDOMProps,
          update: updateDOMProps
        };
        var parseStyleText = cached(function(cssText) {
          var res = {};
          var listDelimiter = /;(?![^(]*\))/g;
          var propertyDelimiter = /:(.+)/;
          cssText.split(listDelimiter).forEach(function(item) {
            if (item) {
              var tmp = item.split(propertyDelimiter);
              tmp.length > 1 && (res[tmp[0].trim()] = tmp[1].trim());
            }
          });
          return res;
        });
        function normalizeStyleData(data) {
          var style2 = normalizeStyleBinding(data.style);
          return data.staticStyle ? extend(data.staticStyle, style2) : style2;
        }
        function normalizeStyleBinding(bindingStyle) {
          if (Array.isArray(bindingStyle)) {
            return toObject(bindingStyle);
          }
          if (typeof bindingStyle === "string") {
            return parseStyleText(bindingStyle);
          }
          return bindingStyle;
        }
        function getStyle(vnode, checkChild) {
          var res = {};
          var styleData;
          if (checkChild) {
            var childNode = vnode;
            while (childNode.componentInstance) {
              childNode = childNode.componentInstance._vnode;
              if (childNode && childNode.data && (styleData = normalizeStyleData(childNode.data))) {
                extend(res, styleData);
              }
            }
          }
          if (styleData = normalizeStyleData(vnode.data)) {
            extend(res, styleData);
          }
          var parentNode2 = vnode;
          while (parentNode2 = parentNode2.parent) {
            if (parentNode2.data && (styleData = normalizeStyleData(parentNode2.data))) {
              extend(res, styleData);
            }
          }
          return res;
        }
        var cssVarRE = /^--/;
        var importantRE = /\s*!important$/;
        var setProp = function(el, name, val) {
          if (cssVarRE.test(name)) {
            el.style.setProperty(name, val);
          } else if (importantRE.test(val)) {
            el.style.setProperty(hyphenate(name), val.replace(importantRE, ""), "important");
          } else {
            var normalizedName = normalize(name);
            if (Array.isArray(val)) {
              for (var i = 0, len2 = val.length; i < len2; i++) {
                el.style[normalizedName] = val[i];
              }
            } else {
              el.style[normalizedName] = val;
            }
          }
        };
        var vendorNames = ["Webkit", "Moz", "ms"];
        var emptyStyle;
        var normalize = cached(function(prop) {
          emptyStyle = emptyStyle || document.createElement("div").style;
          prop = camelize(prop);
          if (prop !== "filter" && prop in emptyStyle) {
            return prop;
          }
          var capName = prop.charAt(0).toUpperCase() + prop.slice(1);
          for (var i = 0; i < vendorNames.length; i++) {
            var name = vendorNames[i] + capName;
            if (name in emptyStyle) {
              return name;
            }
          }
        });
        function updateStyle(oldVnode, vnode) {
          var data = vnode.data;
          var oldData = oldVnode.data;
          if (isUndef(data.staticStyle) && isUndef(data.style) && isUndef(oldData.staticStyle) && isUndef(oldData.style)) {
            return;
          }
          var cur, name;
          var el = vnode.elm;
          var oldStaticStyle = oldData.staticStyle;
          var oldStyleBinding = oldData.normalizedStyle || oldData.style || {};
          var oldStyle = oldStaticStyle || oldStyleBinding;
          var style2 = normalizeStyleBinding(vnode.data.style) || {};
          vnode.data.normalizedStyle = isDef(style2.__ob__) ? extend({}, style2) : style2;
          var newStyle = getStyle(vnode, true);
          for (name in oldStyle) {
            if (isUndef(newStyle[name])) {
              setProp(el, name, "");
            }
          }
          for (name in newStyle) {
            cur = newStyle[name];
            if (cur !== oldStyle[name]) {
              setProp(el, name, cur == null ? "" : cur);
            }
          }
        }
        var style = {
          create: updateStyle,
          update: updateStyle
        };
        var whitespaceRE = /\s+/;
        function addClass(el, cls) {
          if (!cls || !(cls = cls.trim())) {
            return;
          }
          if (el.classList) {
            if (cls.indexOf(" ") > -1) {
              cls.split(whitespaceRE).forEach(function(c) {
                return el.classList.add(c);
              });
            } else {
              el.classList.add(cls);
            }
          } else {
            var cur = " " + (el.getAttribute("class") || "") + " ";
            if (cur.indexOf(" " + cls + " ") < 0) {
              el.setAttribute("class", (cur + cls).trim());
            }
          }
        }
        function removeClass(el, cls) {
          if (!cls || !(cls = cls.trim())) {
            return;
          }
          if (el.classList) {
            if (cls.indexOf(" ") > -1) {
              cls.split(whitespaceRE).forEach(function(c) {
                return el.classList.remove(c);
              });
            } else {
              el.classList.remove(cls);
            }
            if (!el.classList.length) {
              el.removeAttribute("class");
            }
          } else {
            var cur = " " + (el.getAttribute("class") || "") + " ";
            var tar = " " + cls + " ";
            while (cur.indexOf(tar) >= 0) {
              cur = cur.replace(tar, " ");
            }
            cur = cur.trim();
            if (cur) {
              el.setAttribute("class", cur);
            } else {
              el.removeAttribute("class");
            }
          }
        }
        function resolveTransition(def$$1) {
          if (!def$$1) {
            return;
          }
          if (typeof def$$1 === "object") {
            var res = {};
            if (def$$1.css !== false) {
              extend(res, autoCssTransition(def$$1.name || "v"));
            }
            extend(res, def$$1);
            return res;
          } else if (typeof def$$1 === "string") {
            return autoCssTransition(def$$1);
          }
        }
        var autoCssTransition = cached(function(name) {
          return {
            enterClass: name + "-enter",
            enterToClass: name + "-enter-to",
            enterActiveClass: name + "-enter-active",
            leaveClass: name + "-leave",
            leaveToClass: name + "-leave-to",
            leaveActiveClass: name + "-leave-active"
          };
        });
        var hasTransition = inBrowser && !isIE9;
        var TRANSITION = "transition";
        var ANIMATION = "animation";
        var transitionProp = "transition";
        var transitionEndEvent = "transitionend";
        var animationProp = "animation";
        var animationEndEvent = "animationend";
        if (hasTransition) {
          if (window.ontransitionend === void 0 && window.onwebkittransitionend !== void 0) {
            transitionProp = "WebkitTransition";
            transitionEndEvent = "webkitTransitionEnd";
          }
          if (window.onanimationend === void 0 && window.onwebkitanimationend !== void 0) {
            animationProp = "WebkitAnimation";
            animationEndEvent = "webkitAnimationEnd";
          }
        }
        var raf = inBrowser ? window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : setTimeout : function(fn) {
          return fn();
        };
        function nextFrame(fn) {
          raf(function() {
            raf(fn);
          });
        }
        function addTransitionClass(el, cls) {
          var transitionClasses = el._transitionClasses || (el._transitionClasses = []);
          if (transitionClasses.indexOf(cls) < 0) {
            transitionClasses.push(cls);
            addClass(el, cls);
          }
        }
        function removeTransitionClass(el, cls) {
          if (el._transitionClasses) {
            remove(el._transitionClasses, cls);
          }
          removeClass(el, cls);
        }
        function whenTransitionEnds(el, expectedType, cb) {
          var ref2 = getTransitionInfo(el, expectedType);
          var type = ref2.type;
          var timeout = ref2.timeout;
          var propCount = ref2.propCount;
          if (!type) {
            return cb();
          }
          var event = type === TRANSITION ? transitionEndEvent : animationEndEvent;
          var ended = 0;
          var end = function() {
            el.removeEventListener(event, onEnd);
            cb();
          };
          var onEnd = function(e) {
            if (e.target === el) {
              if (++ended >= propCount) {
                end();
              }
            }
          };
          setTimeout(function() {
            if (ended < propCount) {
              end();
            }
          }, timeout + 1);
          el.addEventListener(event, onEnd);
        }
        var transformRE = /\b(transform|all)(,|$)/;
        function getTransitionInfo(el, expectedType) {
          var styles = window.getComputedStyle(el);
          var transitionDelays = (styles[transitionProp + "Delay"] || "").split(", ");
          var transitionDurations = (styles[transitionProp + "Duration"] || "").split(", ");
          var transitionTimeout = getTimeout(transitionDelays, transitionDurations);
          var animationDelays = (styles[animationProp + "Delay"] || "").split(", ");
          var animationDurations = (styles[animationProp + "Duration"] || "").split(", ");
          var animationTimeout = getTimeout(animationDelays, animationDurations);
          var type;
          var timeout = 0;
          var propCount = 0;
          if (expectedType === TRANSITION) {
            if (transitionTimeout > 0) {
              type = TRANSITION;
              timeout = transitionTimeout;
              propCount = transitionDurations.length;
            }
          } else if (expectedType === ANIMATION) {
            if (animationTimeout > 0) {
              type = ANIMATION;
              timeout = animationTimeout;
              propCount = animationDurations.length;
            }
          } else {
            timeout = Math.max(transitionTimeout, animationTimeout);
            type = timeout > 0 ? transitionTimeout > animationTimeout ? TRANSITION : ANIMATION : null;
            propCount = type ? type === TRANSITION ? transitionDurations.length : animationDurations.length : 0;
          }
          var hasTransform = type === TRANSITION && transformRE.test(styles[transitionProp + "Property"]);
          return {
            type,
            timeout,
            propCount,
            hasTransform
          };
        }
        function getTimeout(delays, durations) {
          while (delays.length < durations.length) {
            delays = delays.concat(delays);
          }
          return Math.max.apply(null, durations.map(function(d, i) {
            return toMs(d) + toMs(delays[i]);
          }));
        }
        function toMs(s) {
          return Number(s.slice(0, -1).replace(",", ".")) * 1e3;
        }
        function enter(vnode, toggleDisplay) {
          var el = vnode.elm;
          if (isDef(el._leaveCb)) {
            el._leaveCb.cancelled = true;
            el._leaveCb();
          }
          var data = resolveTransition(vnode.data.transition);
          if (isUndef(data)) {
            return;
          }
          if (isDef(el._enterCb) || el.nodeType !== 1) {
            return;
          }
          var css = data.css;
          var type = data.type;
          var enterClass = data.enterClass;
          var enterToClass = data.enterToClass;
          var enterActiveClass = data.enterActiveClass;
          var appearClass = data.appearClass;
          var appearToClass = data.appearToClass;
          var appearActiveClass = data.appearActiveClass;
          var beforeEnter = data.beforeEnter;
          var enter2 = data.enter;
          var afterEnter = data.afterEnter;
          var enterCancelled = data.enterCancelled;
          var beforeAppear = data.beforeAppear;
          var appear = data.appear;
          var afterAppear = data.afterAppear;
          var appearCancelled = data.appearCancelled;
          var duration = data.duration;
          var context = activeInstance;
          var transitionNode = activeInstance.$vnode;
          while (transitionNode && transitionNode.parent) {
            context = transitionNode.context;
            transitionNode = transitionNode.parent;
          }
          var isAppear = !context._isMounted || !vnode.isRootInsert;
          if (isAppear && !appear && appear !== "") {
            return;
          }
          var startClass = isAppear && appearClass ? appearClass : enterClass;
          var activeClass = isAppear && appearActiveClass ? appearActiveClass : enterActiveClass;
          var toClass = isAppear && appearToClass ? appearToClass : enterToClass;
          var beforeEnterHook = isAppear ? beforeAppear || beforeEnter : beforeEnter;
          var enterHook = isAppear ? typeof appear === "function" ? appear : enter2 : enter2;
          var afterEnterHook = isAppear ? afterAppear || afterEnter : afterEnter;
          var enterCancelledHook = isAppear ? appearCancelled || enterCancelled : enterCancelled;
          var explicitEnterDuration = toNumber(isObject(duration) ? duration.enter : duration);
          if (explicitEnterDuration != null) {
            checkDuration(explicitEnterDuration, "enter", vnode);
          }
          var expectsCSS = css !== false && !isIE9;
          var userWantsControl = getHookArgumentsLength(enterHook);
          var cb = el._enterCb = once(function() {
            if (expectsCSS) {
              removeTransitionClass(el, toClass);
              removeTransitionClass(el, activeClass);
            }
            if (cb.cancelled) {
              if (expectsCSS) {
                removeTransitionClass(el, startClass);
              }
              enterCancelledHook && enterCancelledHook(el);
            } else {
              afterEnterHook && afterEnterHook(el);
            }
            el._enterCb = null;
          });
          if (!vnode.data.show) {
            mergeVNodeHook(vnode, "insert", function() {
              var parent = el.parentNode;
              var pendingNode = parent && parent._pending && parent._pending[vnode.key];
              if (pendingNode && pendingNode.tag === vnode.tag && pendingNode.elm._leaveCb) {
                pendingNode.elm._leaveCb();
              }
              enterHook && enterHook(el, cb);
            });
          }
          beforeEnterHook && beforeEnterHook(el);
          if (expectsCSS) {
            addTransitionClass(el, startClass);
            addTransitionClass(el, activeClass);
            nextFrame(function() {
              removeTransitionClass(el, startClass);
              if (!cb.cancelled) {
                addTransitionClass(el, toClass);
                if (!userWantsControl) {
                  if (isValidDuration(explicitEnterDuration)) {
                    setTimeout(cb, explicitEnterDuration);
                  } else {
                    whenTransitionEnds(el, type, cb);
                  }
                }
              }
            });
          }
          if (vnode.data.show) {
            toggleDisplay && toggleDisplay();
            enterHook && enterHook(el, cb);
          }
          if (!expectsCSS && !userWantsControl) {
            cb();
          }
        }
        function leave(vnode, rm) {
          var el = vnode.elm;
          if (isDef(el._enterCb)) {
            el._enterCb.cancelled = true;
            el._enterCb();
          }
          var data = resolveTransition(vnode.data.transition);
          if (isUndef(data) || el.nodeType !== 1) {
            return rm();
          }
          if (isDef(el._leaveCb)) {
            return;
          }
          var css = data.css;
          var type = data.type;
          var leaveClass = data.leaveClass;
          var leaveToClass = data.leaveToClass;
          var leaveActiveClass = data.leaveActiveClass;
          var beforeLeave = data.beforeLeave;
          var leave2 = data.leave;
          var afterLeave = data.afterLeave;
          var leaveCancelled = data.leaveCancelled;
          var delayLeave = data.delayLeave;
          var duration = data.duration;
          var expectsCSS = css !== false && !isIE9;
          var userWantsControl = getHookArgumentsLength(leave2);
          var explicitLeaveDuration = toNumber(isObject(duration) ? duration.leave : duration);
          if (isDef(explicitLeaveDuration)) {
            checkDuration(explicitLeaveDuration, "leave", vnode);
          }
          var cb = el._leaveCb = once(function() {
            if (el.parentNode && el.parentNode._pending) {
              el.parentNode._pending[vnode.key] = null;
            }
            if (expectsCSS) {
              removeTransitionClass(el, leaveToClass);
              removeTransitionClass(el, leaveActiveClass);
            }
            if (cb.cancelled) {
              if (expectsCSS) {
                removeTransitionClass(el, leaveClass);
              }
              leaveCancelled && leaveCancelled(el);
            } else {
              rm();
              afterLeave && afterLeave(el);
            }
            el._leaveCb = null;
          });
          if (delayLeave) {
            delayLeave(performLeave);
          } else {
            performLeave();
          }
          function performLeave() {
            if (cb.cancelled) {
              return;
            }
            if (!vnode.data.show && el.parentNode) {
              (el.parentNode._pending || (el.parentNode._pending = {}))[vnode.key] = vnode;
            }
            beforeLeave && beforeLeave(el);
            if (expectsCSS) {
              addTransitionClass(el, leaveClass);
              addTransitionClass(el, leaveActiveClass);
              nextFrame(function() {
                removeTransitionClass(el, leaveClass);
                if (!cb.cancelled) {
                  addTransitionClass(el, leaveToClass);
                  if (!userWantsControl) {
                    if (isValidDuration(explicitLeaveDuration)) {
                      setTimeout(cb, explicitLeaveDuration);
                    } else {
                      whenTransitionEnds(el, type, cb);
                    }
                  }
                }
              });
            }
            leave2 && leave2(el, cb);
            if (!expectsCSS && !userWantsControl) {
              cb();
            }
          }
        }
        function checkDuration(val, name, vnode) {
          if (typeof val !== "number") {
            warn("<transition> explicit " + name + " duration is not a valid number - got " + JSON.stringify(val) + ".", vnode.context);
          } else if (isNaN(val)) {
            warn("<transition> explicit " + name + " duration is NaN - the duration expression might be incorrect.", vnode.context);
          }
        }
        function isValidDuration(val) {
          return typeof val === "number" && !isNaN(val);
        }
        function getHookArgumentsLength(fn) {
          if (isUndef(fn)) {
            return false;
          }
          var invokerFns = fn.fns;
          if (isDef(invokerFns)) {
            return getHookArgumentsLength(Array.isArray(invokerFns) ? invokerFns[0] : invokerFns);
          } else {
            return (fn._length || fn.length) > 1;
          }
        }
        function _enter(_, vnode) {
          if (vnode.data.show !== true) {
            enter(vnode);
          }
        }
        var transition = inBrowser ? {
          create: _enter,
          activate: _enter,
          remove: function remove$$1(vnode, rm) {
            if (vnode.data.show !== true) {
              leave(vnode, rm);
            } else {
              rm();
            }
          }
        } : {};
        var platformModules = [
          attrs,
          klass,
          events,
          domProps,
          style,
          transition
        ];
        var modules = platformModules.concat(baseModules);
        var patch = createPatchFunction({ nodeOps, modules });
        if (isIE9) {
          document.addEventListener("selectionchange", function() {
            var el = document.activeElement;
            if (el && el.vmodel) {
              trigger(el, "input");
            }
          });
        }
        var directive = {
          inserted: function inserted(el, binding, vnode, oldVnode) {
            if (vnode.tag === "select") {
              if (oldVnode.elm && !oldVnode.elm._vOptions) {
                mergeVNodeHook(vnode, "postpatch", function() {
                  directive.componentUpdated(el, binding, vnode);
                });
              } else {
                setSelected(el, binding, vnode.context);
              }
              el._vOptions = [].map.call(el.options, getValue);
            } else if (vnode.tag === "textarea" || isTextInputType(el.type)) {
              el._vModifiers = binding.modifiers;
              if (!binding.modifiers.lazy) {
                el.addEventListener("compositionstart", onCompositionStart);
                el.addEventListener("compositionend", onCompositionEnd);
                el.addEventListener("change", onCompositionEnd);
                if (isIE9) {
                  el.vmodel = true;
                }
              }
            }
          },
          componentUpdated: function componentUpdated(el, binding, vnode) {
            if (vnode.tag === "select") {
              setSelected(el, binding, vnode.context);
              var prevOptions = el._vOptions;
              var curOptions = el._vOptions = [].map.call(el.options, getValue);
              if (curOptions.some(function(o, i) {
                return !looseEqual(o, prevOptions[i]);
              })) {
                var needReset = el.multiple ? binding.value.some(function(v) {
                  return hasNoMatchingOption(v, curOptions);
                }) : binding.value !== binding.oldValue && hasNoMatchingOption(binding.value, curOptions);
                if (needReset) {
                  trigger(el, "change");
                }
              }
            }
          }
        };
        function setSelected(el, binding, vm) {
          actuallySetSelected(el, binding, vm);
          if (isIE || isEdge) {
            setTimeout(function() {
              actuallySetSelected(el, binding, vm);
            }, 0);
          }
        }
        function actuallySetSelected(el, binding, vm) {
          var value = binding.value;
          var isMultiple = el.multiple;
          if (isMultiple && !Array.isArray(value)) {
            warn('<select multiple v-model="' + binding.expression + '"> expects an Array value for its binding, but got ' + Object.prototype.toString.call(value).slice(8, -1), vm);
            return;
          }
          var selected, option;
          for (var i = 0, l = el.options.length; i < l; i++) {
            option = el.options[i];
            if (isMultiple) {
              selected = looseIndexOf(value, getValue(option)) > -1;
              if (option.selected !== selected) {
                option.selected = selected;
              }
            } else {
              if (looseEqual(getValue(option), value)) {
                if (el.selectedIndex !== i) {
                  el.selectedIndex = i;
                }
                return;
              }
            }
          }
          if (!isMultiple) {
            el.selectedIndex = -1;
          }
        }
        function hasNoMatchingOption(value, options) {
          return options.every(function(o) {
            return !looseEqual(o, value);
          });
        }
        function getValue(option) {
          return "_value" in option ? option._value : option.value;
        }
        function onCompositionStart(e) {
          e.target.composing = true;
        }
        function onCompositionEnd(e) {
          if (!e.target.composing) {
            return;
          }
          e.target.composing = false;
          trigger(e.target, "input");
        }
        function trigger(el, type) {
          var e = document.createEvent("HTMLEvents");
          e.initEvent(type, true, true);
          el.dispatchEvent(e);
        }
        function locateNode(vnode) {
          return vnode.componentInstance && (!vnode.data || !vnode.data.transition) ? locateNode(vnode.componentInstance._vnode) : vnode;
        }
        var show = {
          bind: function bind2(el, ref2, vnode) {
            var value = ref2.value;
            vnode = locateNode(vnode);
            var transition$$1 = vnode.data && vnode.data.transition;
            var originalDisplay = el.__vOriginalDisplay = el.style.display === "none" ? "" : el.style.display;
            if (value && transition$$1) {
              vnode.data.show = true;
              enter(vnode, function() {
                el.style.display = originalDisplay;
              });
            } else {
              el.style.display = value ? originalDisplay : "none";
            }
          },
          update: function update(el, ref2, vnode) {
            var value = ref2.value;
            var oldValue = ref2.oldValue;
            if (!value === !oldValue) {
              return;
            }
            vnode = locateNode(vnode);
            var transition$$1 = vnode.data && vnode.data.transition;
            if (transition$$1) {
              vnode.data.show = true;
              if (value) {
                enter(vnode, function() {
                  el.style.display = el.__vOriginalDisplay;
                });
              } else {
                leave(vnode, function() {
                  el.style.display = "none";
                });
              }
            } else {
              el.style.display = value ? el.__vOriginalDisplay : "none";
            }
          },
          unbind: function unbind(el, binding, vnode, oldVnode, isDestroy) {
            if (!isDestroy) {
              el.style.display = el.__vOriginalDisplay;
            }
          }
        };
        var platformDirectives = {
          model: directive,
          show
        };
        var transitionProps = {
          name: String,
          appear: Boolean,
          css: Boolean,
          mode: String,
          type: String,
          enterClass: String,
          leaveClass: String,
          enterToClass: String,
          leaveToClass: String,
          enterActiveClass: String,
          leaveActiveClass: String,
          appearClass: String,
          appearActiveClass: String,
          appearToClass: String,
          duration: [Number, String, Object]
        };
        function getRealChild(vnode) {
          var compOptions = vnode && vnode.componentOptions;
          if (compOptions && compOptions.Ctor.options.abstract) {
            return getRealChild(getFirstComponentChild(compOptions.children));
          } else {
            return vnode;
          }
        }
        function extractTransitionData(comp) {
          var data = {};
          var options = comp.$options;
          for (var key in options.propsData) {
            data[key] = comp[key];
          }
          var listeners = options._parentListeners;
          for (var key$1 in listeners) {
            data[camelize(key$1)] = listeners[key$1];
          }
          return data;
        }
        function placeholder(h, rawChild) {
          if (/\d-keep-alive$/.test(rawChild.tag)) {
            return h("keep-alive", {
              props: rawChild.componentOptions.propsData
            });
          }
        }
        function hasParentTransition(vnode) {
          while (vnode = vnode.parent) {
            if (vnode.data.transition) {
              return true;
            }
          }
        }
        function isSameChild(child, oldChild) {
          return oldChild.key === child.key && oldChild.tag === child.tag;
        }
        var isNotTextNode = function(c) {
          return c.tag || isAsyncPlaceholder(c);
        };
        var isVShowDirective = function(d) {
          return d.name === "show";
        };
        var Transition = {
          name: "transition",
          props: transitionProps,
          abstract: true,
          render: function render(h) {
            var this$1 = this;
            var children = this.$slots.default;
            if (!children) {
              return;
            }
            children = children.filter(isNotTextNode);
            if (!children.length) {
              return;
            }
            if (children.length > 1) {
              warn("<transition> can only be used on a single element. Use <transition-group> for lists.", this.$parent);
            }
            var mode = this.mode;
            if (mode && mode !== "in-out" && mode !== "out-in") {
              warn("invalid <transition> mode: " + mode, this.$parent);
            }
            var rawChild = children[0];
            if (hasParentTransition(this.$vnode)) {
              return rawChild;
            }
            var child = getRealChild(rawChild);
            if (!child) {
              return rawChild;
            }
            if (this._leaving) {
              return placeholder(h, rawChild);
            }
            var id = "__transition-" + this._uid + "-";
            child.key = child.key == null ? child.isComment ? id + "comment" : id + child.tag : isPrimitive(child.key) ? String(child.key).indexOf(id) === 0 ? child.key : id + child.key : child.key;
            var data = (child.data || (child.data = {})).transition = extractTransitionData(this);
            var oldRawChild = this._vnode;
            var oldChild = getRealChild(oldRawChild);
            if (child.data.directives && child.data.directives.some(isVShowDirective)) {
              child.data.show = true;
            }
            if (oldChild && oldChild.data && !isSameChild(child, oldChild) && !isAsyncPlaceholder(oldChild) && !(oldChild.componentInstance && oldChild.componentInstance._vnode.isComment)) {
              var oldData = oldChild.data.transition = extend({}, data);
              if (mode === "out-in") {
                this._leaving = true;
                mergeVNodeHook(oldData, "afterLeave", function() {
                  this$1._leaving = false;
                  this$1.$forceUpdate();
                });
                return placeholder(h, rawChild);
              } else if (mode === "in-out") {
                if (isAsyncPlaceholder(child)) {
                  return oldRawChild;
                }
                var delayedLeave;
                var performLeave = function() {
                  delayedLeave();
                };
                mergeVNodeHook(data, "afterEnter", performLeave);
                mergeVNodeHook(data, "enterCancelled", performLeave);
                mergeVNodeHook(oldData, "delayLeave", function(leave2) {
                  delayedLeave = leave2;
                });
              }
            }
            return rawChild;
          }
        };
        var props = extend({
          tag: String,
          moveClass: String
        }, transitionProps);
        delete props.mode;
        var TransitionGroup = {
          props,
          beforeMount: function beforeMount() {
            var this$1 = this;
            var update = this._update;
            this._update = function(vnode, hydrating) {
              var restoreActiveInstance = setActiveInstance(this$1);
              this$1.__patch__(this$1._vnode, this$1.kept, false, true);
              this$1._vnode = this$1.kept;
              restoreActiveInstance();
              update.call(this$1, vnode, hydrating);
            };
          },
          render: function render(h) {
            var tag = this.tag || this.$vnode.data.tag || "span";
            var map = /* @__PURE__ */ Object.create(null);
            var prevChildren = this.prevChildren = this.children;
            var rawChildren = this.$slots.default || [];
            var children = this.children = [];
            var transitionData = extractTransitionData(this);
            for (var i = 0; i < rawChildren.length; i++) {
              var c = rawChildren[i];
              if (c.tag) {
                if (c.key != null && String(c.key).indexOf("__vlist") !== 0) {
                  children.push(c);
                  map[c.key] = c;
                  (c.data || (c.data = {})).transition = transitionData;
                } else {
                  var opts2 = c.componentOptions;
                  var name = opts2 ? opts2.Ctor.options.name || opts2.tag || "" : c.tag;
                  warn("<transition-group> children must be keyed: <" + name + ">");
                }
              }
            }
            if (prevChildren) {
              var kept = [];
              var removed = [];
              for (var i$1 = 0; i$1 < prevChildren.length; i$1++) {
                var c$1 = prevChildren[i$1];
                c$1.data.transition = transitionData;
                c$1.data.pos = c$1.elm.getBoundingClientRect();
                if (map[c$1.key]) {
                  kept.push(c$1);
                } else {
                  removed.push(c$1);
                }
              }
              this.kept = h(tag, null, kept);
              this.removed = removed;
            }
            return h(tag, null, children);
          },
          updated: function updated() {
            var children = this.prevChildren;
            var moveClass = this.moveClass || (this.name || "v") + "-move";
            if (!children.length || !this.hasMove(children[0].elm, moveClass)) {
              return;
            }
            children.forEach(callPendingCbs);
            children.forEach(recordPosition);
            children.forEach(applyTranslation);
            this._reflow = document.body.offsetHeight;
            children.forEach(function(c) {
              if (c.data.moved) {
                var el = c.elm;
                var s = el.style;
                addTransitionClass(el, moveClass);
                s.transform = s.WebkitTransform = s.transitionDuration = "";
                el.addEventListener(transitionEndEvent, el._moveCb = function cb(e) {
                  if (e && e.target !== el) {
                    return;
                  }
                  if (!e || /transform$/.test(e.propertyName)) {
                    el.removeEventListener(transitionEndEvent, cb);
                    el._moveCb = null;
                    removeTransitionClass(el, moveClass);
                  }
                });
              }
            });
          },
          methods: {
            hasMove: function hasMove(el, moveClass) {
              if (!hasTransition) {
                return false;
              }
              if (this._hasMove) {
                return this._hasMove;
              }
              var clone = el.cloneNode();
              if (el._transitionClasses) {
                el._transitionClasses.forEach(function(cls) {
                  removeClass(clone, cls);
                });
              }
              addClass(clone, moveClass);
              clone.style.display = "none";
              this.$el.appendChild(clone);
              var info = getTransitionInfo(clone);
              this.$el.removeChild(clone);
              return this._hasMove = info.hasTransform;
            }
          }
        };
        function callPendingCbs(c) {
          if (c.elm._moveCb) {
            c.elm._moveCb();
          }
          if (c.elm._enterCb) {
            c.elm._enterCb();
          }
        }
        function recordPosition(c) {
          c.data.newPos = c.elm.getBoundingClientRect();
        }
        function applyTranslation(c) {
          var oldPos = c.data.pos;
          var newPos = c.data.newPos;
          var dx = oldPos.left - newPos.left;
          var dy = oldPos.top - newPos.top;
          if (dx || dy) {
            c.data.moved = true;
            var s = c.elm.style;
            s.transform = s.WebkitTransform = "translate(" + dx + "px," + dy + "px)";
            s.transitionDuration = "0s";
          }
        }
        var platformComponents = {
          Transition,
          TransitionGroup
        };
        Vue6.config.mustUseProp = mustUseProp;
        Vue6.config.isReservedTag = isReservedTag;
        Vue6.config.isReservedAttr = isReservedAttr;
        Vue6.config.getTagNamespace = getTagNamespace;
        Vue6.config.isUnknownElement = isUnknownElement;
        extend(Vue6.options.directives, platformDirectives);
        extend(Vue6.options.components, platformComponents);
        Vue6.prototype.__patch__ = inBrowser ? patch : noop;
        Vue6.prototype.$mount = function(el, hydrating) {
          el = el && inBrowser ? query(el) : void 0;
          return mountComponent(this, el, hydrating);
        };
        if (inBrowser) {
          setTimeout(function() {
            if (config.devtools) {
              if (devtools) {
                devtools.emit("init", Vue6);
              } else {
                console[console.info ? "info" : "log"]("Download the Vue Devtools extension for a better development experience:\nhttps://github.com/vuejs/vue-devtools");
              }
            }
            if (config.productionTip !== false && typeof console !== "undefined") {
              console[console.info ? "info" : "log"]("You are running Vue in development mode.\nMake sure to turn on production mode when deploying for production.\nSee more tips at https://vuejs.org/guide/deployment.html");
            }
          }, 0);
        }
        var defaultTagRE = /\{\{((?:.|\r?\n)+?)\}\}/g;
        var regexEscapeRE = /[-.*+?^${}()|[\]\/\\]/g;
        var buildRegex = cached(function(delimiters2) {
          var open = delimiters2[0].replace(regexEscapeRE, "\\$&");
          var close = delimiters2[1].replace(regexEscapeRE, "\\$&");
          return new RegExp(open + "((?:.|\\n)+?)" + close, "g");
        });
        function parseText(text2, delimiters2) {
          var tagRE = delimiters2 ? buildRegex(delimiters2) : defaultTagRE;
          if (!tagRE.test(text2)) {
            return;
          }
          var tokens = [];
          var rawTokens = [];
          var lastIndex = tagRE.lastIndex = 0;
          var match, index2, tokenValue;
          while (match = tagRE.exec(text2)) {
            index2 = match.index;
            if (index2 > lastIndex) {
              rawTokens.push(tokenValue = text2.slice(lastIndex, index2));
              tokens.push(JSON.stringify(tokenValue));
            }
            var exp = parseFilters(match[1].trim());
            tokens.push("_s(" + exp + ")");
            rawTokens.push({ "@binding": exp });
            lastIndex = index2 + match[0].length;
          }
          if (lastIndex < text2.length) {
            rawTokens.push(tokenValue = text2.slice(lastIndex));
            tokens.push(JSON.stringify(tokenValue));
          }
          return {
            expression: tokens.join("+"),
            tokens: rawTokens
          };
        }
        function transformNode(el, options) {
          var warn2 = options.warn || baseWarn;
          var staticClass = getAndRemoveAttr(el, "class");
          if (staticClass) {
            var res = parseText(staticClass, options.delimiters);
            if (res) {
              warn2('class="' + staticClass + '": Interpolation inside attributes has been removed. Use v-bind or the colon shorthand instead. For example, instead of <div class="{{ val }}">, use <div :class="val">.', el.rawAttrsMap["class"]);
            }
          }
          if (staticClass) {
            el.staticClass = JSON.stringify(staticClass);
          }
          var classBinding = getBindingAttr(el, "class", false);
          if (classBinding) {
            el.classBinding = classBinding;
          }
        }
        function genData(el) {
          var data = "";
          if (el.staticClass) {
            data += "staticClass:" + el.staticClass + ",";
          }
          if (el.classBinding) {
            data += "class:" + el.classBinding + ",";
          }
          return data;
        }
        var klass$1 = {
          staticKeys: ["staticClass"],
          transformNode,
          genData
        };
        function transformNode$1(el, options) {
          var warn2 = options.warn || baseWarn;
          var staticStyle = getAndRemoveAttr(el, "style");
          if (staticStyle) {
            {
              var res = parseText(staticStyle, options.delimiters);
              if (res) {
                warn2('style="' + staticStyle + '": Interpolation inside attributes has been removed. Use v-bind or the colon shorthand instead. For example, instead of <div style="{{ val }}">, use <div :style="val">.', el.rawAttrsMap["style"]);
              }
            }
            el.staticStyle = JSON.stringify(parseStyleText(staticStyle));
          }
          var styleBinding = getBindingAttr(el, "style", false);
          if (styleBinding) {
            el.styleBinding = styleBinding;
          }
        }
        function genData$1(el) {
          var data = "";
          if (el.staticStyle) {
            data += "staticStyle:" + el.staticStyle + ",";
          }
          if (el.styleBinding) {
            data += "style:(" + el.styleBinding + "),";
          }
          return data;
        }
        var style$1 = {
          staticKeys: ["staticStyle"],
          transformNode: transformNode$1,
          genData: genData$1
        };
        var decoder;
        var he = {
          decode: function decode(html2) {
            decoder = decoder || document.createElement("div");
            decoder.innerHTML = html2;
            return decoder.textContent;
          }
        };
        var isUnaryTag = makeMap("area,base,br,col,embed,frame,hr,img,input,isindex,keygen,link,meta,param,source,track,wbr");
        var canBeLeftOpenTag = makeMap("colgroup,dd,dt,li,options,p,td,tfoot,th,thead,tr,source");
        var isNonPhrasingTag = makeMap("address,article,aside,base,blockquote,body,caption,col,colgroup,dd,details,dialog,div,dl,dt,fieldset,figcaption,figure,footer,form,h1,h2,h3,h4,h5,h6,head,header,hgroup,hr,html,legend,li,menuitem,meta,optgroup,option,param,rp,rt,source,style,summary,tbody,td,tfoot,th,thead,title,tr,track");
        var attribute = /^\s*([^\s"'<>\/=]+)(?:\s*(=)\s*(?:"([^"]*)"+|'([^']*)'+|([^\s"'=<>`]+)))?/;
        var dynamicArgAttribute = /^\s*((?:v-[\w-]+:|@|:|#)\[[^=]+?\][^\s"'<>\/=]*)(?:\s*(=)\s*(?:"([^"]*)"+|'([^']*)'+|([^\s"'=<>`]+)))?/;
        var ncname = "[a-zA-Z_][\\-\\.0-9_a-zA-Z" + unicodeRegExp.source + "]*";
        var qnameCapture = "((?:" + ncname + "\\:)?" + ncname + ")";
        var startTagOpen = new RegExp("^<" + qnameCapture);
        var startTagClose = /^\s*(\/?)>/;
        var endTag = new RegExp("^<\\/" + qnameCapture + "[^>]*>");
        var doctype = /^<!DOCTYPE [^>]+>/i;
        var comment = /^<!\--/;
        var conditionalComment = /^<!\[/;
        var isPlainTextElement = makeMap("script,style,textarea", true);
        var reCache = {};
        var decodingMap = {
          "&lt;": "<",
          "&gt;": ">",
          "&quot;": '"',
          "&amp;": "&",
          "&#10;": "\n",
          "&#9;": "	",
          "&#39;": "'"
        };
        var encodedAttr = /&(?:lt|gt|quot|amp|#39);/g;
        var encodedAttrWithNewLines = /&(?:lt|gt|quot|amp|#39|#10|#9);/g;
        var isIgnoreNewlineTag = makeMap("pre,textarea", true);
        var shouldIgnoreFirstNewline = function(tag, html2) {
          return tag && isIgnoreNewlineTag(tag) && html2[0] === "\n";
        };
        function decodeAttr(value, shouldDecodeNewlines2) {
          var re = shouldDecodeNewlines2 ? encodedAttrWithNewLines : encodedAttr;
          return value.replace(re, function(match) {
            return decodingMap[match];
          });
        }
        function parseHTML(html2, options) {
          var stack = [];
          var expectHTML = options.expectHTML;
          var isUnaryTag$$1 = options.isUnaryTag || no;
          var canBeLeftOpenTag$$1 = options.canBeLeftOpenTag || no;
          var index2 = 0;
          var last, lastTag;
          while (html2) {
            last = html2;
            if (!lastTag || !isPlainTextElement(lastTag)) {
              var textEnd = html2.indexOf("<");
              if (textEnd === 0) {
                if (comment.test(html2)) {
                  var commentEnd = html2.indexOf("-->");
                  if (commentEnd >= 0) {
                    if (options.shouldKeepComment) {
                      options.comment(html2.substring(4, commentEnd), index2, index2 + commentEnd + 3);
                    }
                    advance(commentEnd + 3);
                    continue;
                  }
                }
                if (conditionalComment.test(html2)) {
                  var conditionalEnd = html2.indexOf("]>");
                  if (conditionalEnd >= 0) {
                    advance(conditionalEnd + 2);
                    continue;
                  }
                }
                var doctypeMatch = html2.match(doctype);
                if (doctypeMatch) {
                  advance(doctypeMatch[0].length);
                  continue;
                }
                var endTagMatch = html2.match(endTag);
                if (endTagMatch) {
                  var curIndex = index2;
                  advance(endTagMatch[0].length);
                  parseEndTag(endTagMatch[1], curIndex, index2);
                  continue;
                }
                var startTagMatch = parseStartTag();
                if (startTagMatch) {
                  handleStartTag(startTagMatch);
                  if (shouldIgnoreFirstNewline(startTagMatch.tagName, html2)) {
                    advance(1);
                  }
                  continue;
                }
              }
              var text2 = void 0, rest = void 0, next2 = void 0;
              if (textEnd >= 0) {
                rest = html2.slice(textEnd);
                while (!endTag.test(rest) && !startTagOpen.test(rest) && !comment.test(rest) && !conditionalComment.test(rest)) {
                  next2 = rest.indexOf("<", 1);
                  if (next2 < 0) {
                    break;
                  }
                  textEnd += next2;
                  rest = html2.slice(textEnd);
                }
                text2 = html2.substring(0, textEnd);
              }
              if (textEnd < 0) {
                text2 = html2;
              }
              if (text2) {
                advance(text2.length);
              }
              if (options.chars && text2) {
                options.chars(text2, index2 - text2.length, index2);
              }
            } else {
              var endTagLength = 0;
              var stackedTag = lastTag.toLowerCase();
              var reStackedTag = reCache[stackedTag] || (reCache[stackedTag] = new RegExp("([\\s\\S]*?)(</" + stackedTag + "[^>]*>)", "i"));
              var rest$1 = html2.replace(reStackedTag, function(all, text3, endTag2) {
                endTagLength = endTag2.length;
                if (!isPlainTextElement(stackedTag) && stackedTag !== "noscript") {
                  text3 = text3.replace(/<!\--([\s\S]*?)-->/g, "$1").replace(/<!\[CDATA\[([\s\S]*?)]]>/g, "$1");
                }
                if (shouldIgnoreFirstNewline(stackedTag, text3)) {
                  text3 = text3.slice(1);
                }
                if (options.chars) {
                  options.chars(text3);
                }
                return "";
              });
              index2 += html2.length - rest$1.length;
              html2 = rest$1;
              parseEndTag(stackedTag, index2 - endTagLength, index2);
            }
            if (html2 === last) {
              options.chars && options.chars(html2);
              if (!stack.length && options.warn) {
                options.warn('Mal-formatted tag at end of template: "' + html2 + '"', { start: index2 + html2.length });
              }
              break;
            }
          }
          parseEndTag();
          function advance(n) {
            index2 += n;
            html2 = html2.substring(n);
          }
          function parseStartTag() {
            var start = html2.match(startTagOpen);
            if (start) {
              var match = {
                tagName: start[1],
                attrs: [],
                start: index2
              };
              advance(start[0].length);
              var end, attr;
              while (!(end = html2.match(startTagClose)) && (attr = html2.match(dynamicArgAttribute) || html2.match(attribute))) {
                attr.start = index2;
                advance(attr[0].length);
                attr.end = index2;
                match.attrs.push(attr);
              }
              if (end) {
                match.unarySlash = end[1];
                advance(end[0].length);
                match.end = index2;
                return match;
              }
            }
          }
          function handleStartTag(match) {
            var tagName2 = match.tagName;
            var unarySlash = match.unarySlash;
            if (expectHTML) {
              if (lastTag === "p" && isNonPhrasingTag(tagName2)) {
                parseEndTag(lastTag);
              }
              if (canBeLeftOpenTag$$1(tagName2) && lastTag === tagName2) {
                parseEndTag(tagName2);
              }
            }
            var unary = isUnaryTag$$1(tagName2) || !!unarySlash;
            var l = match.attrs.length;
            var attrs2 = new Array(l);
            for (var i = 0; i < l; i++) {
              var args = match.attrs[i];
              var value = args[3] || args[4] || args[5] || "";
              var shouldDecodeNewlines2 = tagName2 === "a" && args[1] === "href" ? options.shouldDecodeNewlinesForHref : options.shouldDecodeNewlines;
              attrs2[i] = {
                name: args[1],
                value: decodeAttr(value, shouldDecodeNewlines2)
              };
              if (options.outputSourceRange) {
                attrs2[i].start = args.start + args[0].match(/^\s*/).length;
                attrs2[i].end = args.end;
              }
            }
            if (!unary) {
              stack.push({ tag: tagName2, lowerCasedTag: tagName2.toLowerCase(), attrs: attrs2, start: match.start, end: match.end });
              lastTag = tagName2;
            }
            if (options.start) {
              options.start(tagName2, attrs2, unary, match.start, match.end);
            }
          }
          function parseEndTag(tagName2, start, end) {
            var pos, lowerCasedTagName;
            if (start == null) {
              start = index2;
            }
            if (end == null) {
              end = index2;
            }
            if (tagName2) {
              lowerCasedTagName = tagName2.toLowerCase();
              for (pos = stack.length - 1; pos >= 0; pos--) {
                if (stack[pos].lowerCasedTag === lowerCasedTagName) {
                  break;
                }
              }
            } else {
              pos = 0;
            }
            if (pos >= 0) {
              for (var i = stack.length - 1; i >= pos; i--) {
                if (i > pos || !tagName2 && options.warn) {
                  options.warn("tag <" + stack[i].tag + "> has no matching end tag.", { start: stack[i].start, end: stack[i].end });
                }
                if (options.end) {
                  options.end(stack[i].tag, start, end);
                }
              }
              stack.length = pos;
              lastTag = pos && stack[pos - 1].tag;
            } else if (lowerCasedTagName === "br") {
              if (options.start) {
                options.start(tagName2, [], true, start, end);
              }
            } else if (lowerCasedTagName === "p") {
              if (options.start) {
                options.start(tagName2, [], false, start, end);
              }
              if (options.end) {
                options.end(tagName2, start, end);
              }
            }
          }
        }
        var onRE = /^@|^v-on:/;
        var dirRE = /^v-|^@|^:|^#/;
        var forAliasRE = /([\s\S]*?)\s+(?:in|of)\s+([\s\S]*)/;
        var forIteratorRE = /,([^,\}\]]*)(?:,([^,\}\]]*))?$/;
        var stripParensRE = /^\(|\)$/g;
        var dynamicArgRE = /^\[.*\]$/;
        var argRE = /:(.*)$/;
        var bindRE = /^:|^\.|^v-bind:/;
        var modifierRE = /\.[^.\]]+(?=[^\]]*$)/g;
        var slotRE = /^v-slot(:|$)|^#/;
        var lineBreakRE = /[\r\n]/;
        var whitespaceRE$1 = /[ \f\t\r\n]+/g;
        var invalidAttributeRE = /[\s"'<>\/=]/;
        var decodeHTMLCached = cached(he.decode);
        var emptySlotScopeToken = "_empty_";
        var warn$2;
        var delimiters;
        var transforms;
        var preTransforms;
        var postTransforms;
        var platformIsPreTag;
        var platformMustUseProp;
        var platformGetTagNamespace;
        var maybeComponent;
        function createASTElement(tag, attrs2, parent) {
          return {
            type: 1,
            tag,
            attrsList: attrs2,
            attrsMap: makeAttrsMap(attrs2),
            rawAttrsMap: {},
            parent,
            children: []
          };
        }
        function parse(template, options) {
          warn$2 = options.warn || baseWarn;
          platformIsPreTag = options.isPreTag || no;
          platformMustUseProp = options.mustUseProp || no;
          platformGetTagNamespace = options.getTagNamespace || no;
          var isReservedTag2 = options.isReservedTag || no;
          maybeComponent = function(el) {
            return !!(el.component || el.attrsMap[":is"] || el.attrsMap["v-bind:is"] || !(el.attrsMap.is ? isReservedTag2(el.attrsMap.is) : isReservedTag2(el.tag)));
          };
          transforms = pluckModuleFunction(options.modules, "transformNode");
          preTransforms = pluckModuleFunction(options.modules, "preTransformNode");
          postTransforms = pluckModuleFunction(options.modules, "postTransformNode");
          delimiters = options.delimiters;
          var stack = [];
          var preserveWhitespace = options.preserveWhitespace !== false;
          var whitespaceOption = options.whitespace;
          var root;
          var currentParent;
          var inVPre = false;
          var inPre = false;
          var warned = false;
          function warnOnce(msg, range2) {
            if (!warned) {
              warned = true;
              warn$2(msg, range2);
            }
          }
          function closeElement(element) {
            trimEndingWhitespace(element);
            if (!inVPre && !element.processed) {
              element = processElement(element, options);
            }
            if (!stack.length && element !== root) {
              if (root.if && (element.elseif || element.else)) {
                {
                  checkRootConstraints(element);
                }
                addIfCondition(root, {
                  exp: element.elseif,
                  block: element
                });
              } else {
                warnOnce("Component template should contain exactly one root element. If you are using v-if on multiple elements, use v-else-if to chain them instead.", { start: element.start });
              }
            }
            if (currentParent && !element.forbidden) {
              if (element.elseif || element.else) {
                processIfConditions(element, currentParent);
              } else {
                if (element.slotScope) {
                  var name = element.slotTarget || '"default"';
                  (currentParent.scopedSlots || (currentParent.scopedSlots = {}))[name] = element;
                }
                currentParent.children.push(element);
                element.parent = currentParent;
              }
            }
            element.children = element.children.filter(function(c) {
              return !c.slotScope;
            });
            trimEndingWhitespace(element);
            if (element.pre) {
              inVPre = false;
            }
            if (platformIsPreTag(element.tag)) {
              inPre = false;
            }
            for (var i = 0; i < postTransforms.length; i++) {
              postTransforms[i](element, options);
            }
          }
          function trimEndingWhitespace(el) {
            if (!inPre) {
              var lastNode;
              while ((lastNode = el.children[el.children.length - 1]) && lastNode.type === 3 && lastNode.text === " ") {
                el.children.pop();
              }
            }
          }
          function checkRootConstraints(el) {
            if (el.tag === "slot" || el.tag === "template") {
              warnOnce("Cannot use <" + el.tag + "> as component root element because it may contain multiple nodes.", { start: el.start });
            }
            if (el.attrsMap.hasOwnProperty("v-for")) {
              warnOnce("Cannot use v-for on stateful component root element because it renders multiple elements.", el.rawAttrsMap["v-for"]);
            }
          }
          parseHTML(template, {
            warn: warn$2,
            expectHTML: options.expectHTML,
            isUnaryTag: options.isUnaryTag,
            canBeLeftOpenTag: options.canBeLeftOpenTag,
            shouldDecodeNewlines: options.shouldDecodeNewlines,
            shouldDecodeNewlinesForHref: options.shouldDecodeNewlinesForHref,
            shouldKeepComment: options.comments,
            outputSourceRange: options.outputSourceRange,
            start: function start(tag, attrs2, unary, start$1, end) {
              var ns = currentParent && currentParent.ns || platformGetTagNamespace(tag);
              if (isIE && ns === "svg") {
                attrs2 = guardIESVGBug(attrs2);
              }
              var element = createASTElement(tag, attrs2, currentParent);
              if (ns) {
                element.ns = ns;
              }
              {
                if (options.outputSourceRange) {
                  element.start = start$1;
                  element.end = end;
                  element.rawAttrsMap = element.attrsList.reduce(function(cumulated, attr) {
                    cumulated[attr.name] = attr;
                    return cumulated;
                  }, {});
                }
                attrs2.forEach(function(attr) {
                  if (invalidAttributeRE.test(attr.name)) {
                    warn$2("Invalid dynamic argument expression: attribute names cannot contain spaces, quotes, <, >, / or =.", {
                      start: attr.start + attr.name.indexOf("["),
                      end: attr.start + attr.name.length
                    });
                  }
                });
              }
              if (isForbiddenTag(element) && !isServerRendering()) {
                element.forbidden = true;
                warn$2("Templates should only be responsible for mapping the state to the UI. Avoid placing tags with side-effects in your templates, such as <" + tag + ">, as they will not be parsed.", { start: element.start });
              }
              for (var i = 0; i < preTransforms.length; i++) {
                element = preTransforms[i](element, options) || element;
              }
              if (!inVPre) {
                processPre(element);
                if (element.pre) {
                  inVPre = true;
                }
              }
              if (platformIsPreTag(element.tag)) {
                inPre = true;
              }
              if (inVPre) {
                processRawAttrs(element);
              } else if (!element.processed) {
                processFor(element);
                processIf(element);
                processOnce(element);
              }
              if (!root) {
                root = element;
                {
                  checkRootConstraints(root);
                }
              }
              if (!unary) {
                currentParent = element;
                stack.push(element);
              } else {
                closeElement(element);
              }
            },
            end: function end(tag, start, end$1) {
              var element = stack[stack.length - 1];
              stack.length -= 1;
              currentParent = stack[stack.length - 1];
              if (options.outputSourceRange) {
                element.end = end$1;
              }
              closeElement(element);
            },
            chars: function chars(text2, start, end) {
              if (!currentParent) {
                {
                  if (text2 === template) {
                    warnOnce("Component template requires a root element, rather than just text.", { start });
                  } else if (text2 = text2.trim()) {
                    warnOnce('text "' + text2 + '" outside root element will be ignored.', { start });
                  }
                }
                return;
              }
              if (isIE && currentParent.tag === "textarea" && currentParent.attrsMap.placeholder === text2) {
                return;
              }
              var children = currentParent.children;
              if (inPre || text2.trim()) {
                text2 = isTextTag(currentParent) ? text2 : decodeHTMLCached(text2);
              } else if (!children.length) {
                text2 = "";
              } else if (whitespaceOption) {
                if (whitespaceOption === "condense") {
                  text2 = lineBreakRE.test(text2) ? "" : " ";
                } else {
                  text2 = " ";
                }
              } else {
                text2 = preserveWhitespace ? " " : "";
              }
              if (text2) {
                if (!inPre && whitespaceOption === "condense") {
                  text2 = text2.replace(whitespaceRE$1, " ");
                }
                var res;
                var child;
                if (!inVPre && text2 !== " " && (res = parseText(text2, delimiters))) {
                  child = {
                    type: 2,
                    expression: res.expression,
                    tokens: res.tokens,
                    text: text2
                  };
                } else if (text2 !== " " || !children.length || children[children.length - 1].text !== " ") {
                  child = {
                    type: 3,
                    text: text2
                  };
                }
                if (child) {
                  if (options.outputSourceRange) {
                    child.start = start;
                    child.end = end;
                  }
                  children.push(child);
                }
              }
            },
            comment: function comment2(text2, start, end) {
              if (currentParent) {
                var child = {
                  type: 3,
                  text: text2,
                  isComment: true
                };
                if (options.outputSourceRange) {
                  child.start = start;
                  child.end = end;
                }
                currentParent.children.push(child);
              }
            }
          });
          return root;
        }
        function processPre(el) {
          if (getAndRemoveAttr(el, "v-pre") != null) {
            el.pre = true;
          }
        }
        function processRawAttrs(el) {
          var list = el.attrsList;
          var len2 = list.length;
          if (len2) {
            var attrs2 = el.attrs = new Array(len2);
            for (var i = 0; i < len2; i++) {
              attrs2[i] = {
                name: list[i].name,
                value: JSON.stringify(list[i].value)
              };
              if (list[i].start != null) {
                attrs2[i].start = list[i].start;
                attrs2[i].end = list[i].end;
              }
            }
          } else if (!el.pre) {
            el.plain = true;
          }
        }
        function processElement(element, options) {
          processKey(element);
          element.plain = !element.key && !element.scopedSlots && !element.attrsList.length;
          processRef(element);
          processSlotContent(element);
          processSlotOutlet(element);
          processComponent(element);
          for (var i = 0; i < transforms.length; i++) {
            element = transforms[i](element, options) || element;
          }
          processAttrs(element);
          return element;
        }
        function processKey(el) {
          var exp = getBindingAttr(el, "key");
          if (exp) {
            {
              if (el.tag === "template") {
                warn$2("<template> cannot be keyed. Place the key on real elements instead.", getRawBindingAttr(el, "key"));
              }
              if (el.for) {
                var iterator = el.iterator2 || el.iterator1;
                var parent = el.parent;
                if (iterator && iterator === exp && parent && parent.tag === "transition-group") {
                  warn$2("Do not use v-for index as key on <transition-group> children, this is the same as not using keys.", getRawBindingAttr(el, "key"), true);
                }
              }
            }
            el.key = exp;
          }
        }
        function processRef(el) {
          var ref2 = getBindingAttr(el, "ref");
          if (ref2) {
            el.ref = ref2;
            el.refInFor = checkInFor(el);
          }
        }
        function processFor(el) {
          var exp;
          if (exp = getAndRemoveAttr(el, "v-for")) {
            var res = parseFor(exp);
            if (res) {
              extend(el, res);
            } else {
              warn$2("Invalid v-for expression: " + exp, el.rawAttrsMap["v-for"]);
            }
          }
        }
        function parseFor(exp) {
          var inMatch = exp.match(forAliasRE);
          if (!inMatch) {
            return;
          }
          var res = {};
          res.for = inMatch[2].trim();
          var alias = inMatch[1].trim().replace(stripParensRE, "");
          var iteratorMatch = alias.match(forIteratorRE);
          if (iteratorMatch) {
            res.alias = alias.replace(forIteratorRE, "").trim();
            res.iterator1 = iteratorMatch[1].trim();
            if (iteratorMatch[2]) {
              res.iterator2 = iteratorMatch[2].trim();
            }
          } else {
            res.alias = alias;
          }
          return res;
        }
        function processIf(el) {
          var exp = getAndRemoveAttr(el, "v-if");
          if (exp) {
            el.if = exp;
            addIfCondition(el, {
              exp,
              block: el
            });
          } else {
            if (getAndRemoveAttr(el, "v-else") != null) {
              el.else = true;
            }
            var elseif = getAndRemoveAttr(el, "v-else-if");
            if (elseif) {
              el.elseif = elseif;
            }
          }
        }
        function processIfConditions(el, parent) {
          var prev = findPrevElement(parent.children);
          if (prev && prev.if) {
            addIfCondition(prev, {
              exp: el.elseif,
              block: el
            });
          } else {
            warn$2("v-" + (el.elseif ? 'else-if="' + el.elseif + '"' : "else") + " used on element <" + el.tag + "> without corresponding v-if.", el.rawAttrsMap[el.elseif ? "v-else-if" : "v-else"]);
          }
        }
        function findPrevElement(children) {
          var i = children.length;
          while (i--) {
            if (children[i].type === 1) {
              return children[i];
            } else {
              if (children[i].text !== " ") {
                warn$2('text "' + children[i].text.trim() + '" between v-if and v-else(-if) will be ignored.', children[i]);
              }
              children.pop();
            }
          }
        }
        function addIfCondition(el, condition) {
          if (!el.ifConditions) {
            el.ifConditions = [];
          }
          el.ifConditions.push(condition);
        }
        function processOnce(el) {
          var once$$1 = getAndRemoveAttr(el, "v-once");
          if (once$$1 != null) {
            el.once = true;
          }
        }
        function processSlotContent(el) {
          var slotScope;
          if (el.tag === "template") {
            slotScope = getAndRemoveAttr(el, "scope");
            if (slotScope) {
              warn$2('the "scope" attribute for scoped slots have been deprecated and replaced by "slot-scope" since 2.5. The new "slot-scope" attribute can also be used on plain elements in addition to <template> to denote scoped slots.', el.rawAttrsMap["scope"], true);
            }
            el.slotScope = slotScope || getAndRemoveAttr(el, "slot-scope");
          } else if (slotScope = getAndRemoveAttr(el, "slot-scope")) {
            if (el.attrsMap["v-for"]) {
              warn$2("Ambiguous combined usage of slot-scope and v-for on <" + el.tag + "> (v-for takes higher priority). Use a wrapper <template> for the scoped slot to make it clearer.", el.rawAttrsMap["slot-scope"], true);
            }
            el.slotScope = slotScope;
          }
          var slotTarget = getBindingAttr(el, "slot");
          if (slotTarget) {
            el.slotTarget = slotTarget === '""' ? '"default"' : slotTarget;
            el.slotTargetDynamic = !!(el.attrsMap[":slot"] || el.attrsMap["v-bind:slot"]);
            if (el.tag !== "template" && !el.slotScope) {
              addAttr(el, "slot", slotTarget, getRawBindingAttr(el, "slot"));
            }
          }
          {
            if (el.tag === "template") {
              var slotBinding = getAndRemoveAttrByRegex(el, slotRE);
              if (slotBinding) {
                {
                  if (el.slotTarget || el.slotScope) {
                    warn$2("Unexpected mixed usage of different slot syntaxes.", el);
                  }
                  if (el.parent && !maybeComponent(el.parent)) {
                    warn$2("<template v-slot> can only appear at the root level inside the receiving component", el);
                  }
                }
                var ref2 = getSlotName(slotBinding);
                var name = ref2.name;
                var dynamic = ref2.dynamic;
                el.slotTarget = name;
                el.slotTargetDynamic = dynamic;
                el.slotScope = slotBinding.value || emptySlotScopeToken;
              }
            } else {
              var slotBinding$1 = getAndRemoveAttrByRegex(el, slotRE);
              if (slotBinding$1) {
                {
                  if (!maybeComponent(el)) {
                    warn$2("v-slot can only be used on components or <template>.", slotBinding$1);
                  }
                  if (el.slotScope || el.slotTarget) {
                    warn$2("Unexpected mixed usage of different slot syntaxes.", el);
                  }
                  if (el.scopedSlots) {
                    warn$2("To avoid scope ambiguity, the default slot should also use <template> syntax when there are other named slots.", slotBinding$1);
                  }
                }
                var slots = el.scopedSlots || (el.scopedSlots = {});
                var ref$12 = getSlotName(slotBinding$1);
                var name$1 = ref$12.name;
                var dynamic$1 = ref$12.dynamic;
                var slotContainer = slots[name$1] = createASTElement("template", [], el);
                slotContainer.slotTarget = name$1;
                slotContainer.slotTargetDynamic = dynamic$1;
                slotContainer.children = el.children.filter(function(c) {
                  if (!c.slotScope) {
                    c.parent = slotContainer;
                    return true;
                  }
                });
                slotContainer.slotScope = slotBinding$1.value || emptySlotScopeToken;
                el.children = [];
                el.plain = false;
              }
            }
          }
        }
        function getSlotName(binding) {
          var name = binding.name.replace(slotRE, "");
          if (!name) {
            if (binding.name[0] !== "#") {
              name = "default";
            } else {
              warn$2("v-slot shorthand syntax requires a slot name.", binding);
            }
          }
          return dynamicArgRE.test(name) ? { name: name.slice(1, -1), dynamic: true } : { name: '"' + name + '"', dynamic: false };
        }
        function processSlotOutlet(el) {
          if (el.tag === "slot") {
            el.slotName = getBindingAttr(el, "name");
            if (el.key) {
              warn$2("`key` does not work on <slot> because slots are abstract outlets and can possibly expand into multiple elements. Use the key on a wrapping element instead.", getRawBindingAttr(el, "key"));
            }
          }
        }
        function processComponent(el) {
          var binding;
          if (binding = getBindingAttr(el, "is")) {
            el.component = binding;
          }
          if (getAndRemoveAttr(el, "inline-template") != null) {
            el.inlineTemplate = true;
          }
        }
        function processAttrs(el) {
          var list = el.attrsList;
          var i, l, name, rawName, value, modifiers, syncGen, isDynamic;
          for (i = 0, l = list.length; i < l; i++) {
            name = rawName = list[i].name;
            value = list[i].value;
            if (dirRE.test(name)) {
              el.hasBindings = true;
              modifiers = parseModifiers(name.replace(dirRE, ""));
              if (modifiers) {
                name = name.replace(modifierRE, "");
              }
              if (bindRE.test(name)) {
                name = name.replace(bindRE, "");
                value = parseFilters(value);
                isDynamic = dynamicArgRE.test(name);
                if (isDynamic) {
                  name = name.slice(1, -1);
                }
                if (value.trim().length === 0) {
                  warn$2('The value for a v-bind expression cannot be empty. Found in "v-bind:' + name + '"');
                }
                if (modifiers) {
                  if (modifiers.prop && !isDynamic) {
                    name = camelize(name);
                    if (name === "innerHtml") {
                      name = "innerHTML";
                    }
                  }
                  if (modifiers.camel && !isDynamic) {
                    name = camelize(name);
                  }
                  if (modifiers.sync) {
                    syncGen = genAssignmentCode(value, "$event");
                    if (!isDynamic) {
                      addHandler(el, "update:" + camelize(name), syncGen, null, false, warn$2, list[i]);
                      if (hyphenate(name) !== camelize(name)) {
                        addHandler(el, "update:" + hyphenate(name), syncGen, null, false, warn$2, list[i]);
                      }
                    } else {
                      addHandler(el, '"update:"+(' + name + ")", syncGen, null, false, warn$2, list[i], true);
                    }
                  }
                }
                if (modifiers && modifiers.prop || !el.component && platformMustUseProp(el.tag, el.attrsMap.type, name)) {
                  addProp(el, name, value, list[i], isDynamic);
                } else {
                  addAttr(el, name, value, list[i], isDynamic);
                }
              } else if (onRE.test(name)) {
                name = name.replace(onRE, "");
                isDynamic = dynamicArgRE.test(name);
                if (isDynamic) {
                  name = name.slice(1, -1);
                }
                addHandler(el, name, value, modifiers, false, warn$2, list[i], isDynamic);
              } else {
                name = name.replace(dirRE, "");
                var argMatch = name.match(argRE);
                var arg = argMatch && argMatch[1];
                isDynamic = false;
                if (arg) {
                  name = name.slice(0, -(arg.length + 1));
                  if (dynamicArgRE.test(arg)) {
                    arg = arg.slice(1, -1);
                    isDynamic = true;
                  }
                }
                addDirective(el, name, rawName, value, arg, isDynamic, modifiers, list[i]);
                if (name === "model") {
                  checkForAliasModel(el, value);
                }
              }
            } else {
              {
                var res = parseText(value, delimiters);
                if (res) {
                  warn$2(name + '="' + value + '": Interpolation inside attributes has been removed. Use v-bind or the colon shorthand instead. For example, instead of <div id="{{ val }}">, use <div :id="val">.', list[i]);
                }
              }
              addAttr(el, name, JSON.stringify(value), list[i]);
              if (!el.component && name === "muted" && platformMustUseProp(el.tag, el.attrsMap.type, name)) {
                addProp(el, name, "true", list[i]);
              }
            }
          }
        }
        function checkInFor(el) {
          var parent = el;
          while (parent) {
            if (parent.for !== void 0) {
              return true;
            }
            parent = parent.parent;
          }
          return false;
        }
        function parseModifiers(name) {
          var match = name.match(modifierRE);
          if (match) {
            var ret = {};
            match.forEach(function(m) {
              ret[m.slice(1)] = true;
            });
            return ret;
          }
        }
        function makeAttrsMap(attrs2) {
          var map = {};
          for (var i = 0, l = attrs2.length; i < l; i++) {
            if (map[attrs2[i].name] && !isIE && !isEdge) {
              warn$2("duplicate attribute: " + attrs2[i].name, attrs2[i]);
            }
            map[attrs2[i].name] = attrs2[i].value;
          }
          return map;
        }
        function isTextTag(el) {
          return el.tag === "script" || el.tag === "style";
        }
        function isForbiddenTag(el) {
          return el.tag === "style" || el.tag === "script" && (!el.attrsMap.type || el.attrsMap.type === "text/javascript");
        }
        var ieNSBug = /^xmlns:NS\d+/;
        var ieNSPrefix = /^NS\d+:/;
        function guardIESVGBug(attrs2) {
          var res = [];
          for (var i = 0; i < attrs2.length; i++) {
            var attr = attrs2[i];
            if (!ieNSBug.test(attr.name)) {
              attr.name = attr.name.replace(ieNSPrefix, "");
              res.push(attr);
            }
          }
          return res;
        }
        function checkForAliasModel(el, value) {
          var _el = el;
          while (_el) {
            if (_el.for && _el.alias === value) {
              warn$2("<" + el.tag + ' v-model="' + value + '">: You are binding v-model directly to a v-for iteration alias. This will not be able to modify the v-for source array because writing to the alias is like modifying a function local variable. Consider using an array of objects and use v-model on an object property instead.', el.rawAttrsMap["v-model"]);
            }
            _el = _el.parent;
          }
        }
        function preTransformNode(el, options) {
          if (el.tag === "input") {
            var map = el.attrsMap;
            if (!map["v-model"]) {
              return;
            }
            var typeBinding;
            if (map[":type"] || map["v-bind:type"]) {
              typeBinding = getBindingAttr(el, "type");
            }
            if (!map.type && !typeBinding && map["v-bind"]) {
              typeBinding = "(" + map["v-bind"] + ").type";
            }
            if (typeBinding) {
              var ifCondition = getAndRemoveAttr(el, "v-if", true);
              var ifConditionExtra = ifCondition ? "&&(" + ifCondition + ")" : "";
              var hasElse = getAndRemoveAttr(el, "v-else", true) != null;
              var elseIfCondition = getAndRemoveAttr(el, "v-else-if", true);
              var branch0 = cloneASTElement(el);
              processFor(branch0);
              addRawAttr(branch0, "type", "checkbox");
              processElement(branch0, options);
              branch0.processed = true;
              branch0.if = "(" + typeBinding + ")==='checkbox'" + ifConditionExtra;
              addIfCondition(branch0, {
                exp: branch0.if,
                block: branch0
              });
              var branch1 = cloneASTElement(el);
              getAndRemoveAttr(branch1, "v-for", true);
              addRawAttr(branch1, "type", "radio");
              processElement(branch1, options);
              addIfCondition(branch0, {
                exp: "(" + typeBinding + ")==='radio'" + ifConditionExtra,
                block: branch1
              });
              var branch2 = cloneASTElement(el);
              getAndRemoveAttr(branch2, "v-for", true);
              addRawAttr(branch2, ":type", typeBinding);
              processElement(branch2, options);
              addIfCondition(branch0, {
                exp: ifCondition,
                block: branch2
              });
              if (hasElse) {
                branch0.else = true;
              } else if (elseIfCondition) {
                branch0.elseif = elseIfCondition;
              }
              return branch0;
            }
          }
        }
        function cloneASTElement(el) {
          return createASTElement(el.tag, el.attrsList.slice(), el.parent);
        }
        var model$1 = {
          preTransformNode
        };
        var modules$1 = [
          klass$1,
          style$1,
          model$1
        ];
        function text(el, dir) {
          if (dir.value) {
            addProp(el, "textContent", "_s(" + dir.value + ")", dir);
          }
        }
        function html(el, dir) {
          if (dir.value) {
            addProp(el, "innerHTML", "_s(" + dir.value + ")", dir);
          }
        }
        var directives$1 = {
          model,
          text,
          html
        };
        var baseOptions = {
          expectHTML: true,
          modules: modules$1,
          directives: directives$1,
          isPreTag,
          isUnaryTag,
          mustUseProp,
          canBeLeftOpenTag,
          isReservedTag,
          getTagNamespace,
          staticKeys: genStaticKeys(modules$1)
        };
        var isStaticKey;
        var isPlatformReservedTag;
        var genStaticKeysCached = cached(genStaticKeys$1);
        function optimize(root, options) {
          if (!root) {
            return;
          }
          isStaticKey = genStaticKeysCached(options.staticKeys || "");
          isPlatformReservedTag = options.isReservedTag || no;
          markStatic$1(root);
          markStaticRoots(root, false);
        }
        function genStaticKeys$1(keys) {
          return makeMap("type,tag,attrsList,attrsMap,plain,parent,children,attrs,start,end,rawAttrsMap" + (keys ? "," + keys : ""));
        }
        function markStatic$1(node) {
          node.static = isStatic(node);
          if (node.type === 1) {
            if (!isPlatformReservedTag(node.tag) && node.tag !== "slot" && node.attrsMap["inline-template"] == null) {
              return;
            }
            for (var i = 0, l = node.children.length; i < l; i++) {
              var child = node.children[i];
              markStatic$1(child);
              if (!child.static) {
                node.static = false;
              }
            }
            if (node.ifConditions) {
              for (var i$1 = 1, l$1 = node.ifConditions.length; i$1 < l$1; i$1++) {
                var block = node.ifConditions[i$1].block;
                markStatic$1(block);
                if (!block.static) {
                  node.static = false;
                }
              }
            }
          }
        }
        function markStaticRoots(node, isInFor) {
          if (node.type === 1) {
            if (node.static || node.once) {
              node.staticInFor = isInFor;
            }
            if (node.static && node.children.length && !(node.children.length === 1 && node.children[0].type === 3)) {
              node.staticRoot = true;
              return;
            } else {
              node.staticRoot = false;
            }
            if (node.children) {
              for (var i = 0, l = node.children.length; i < l; i++) {
                markStaticRoots(node.children[i], isInFor || !!node.for);
              }
            }
            if (node.ifConditions) {
              for (var i$1 = 1, l$1 = node.ifConditions.length; i$1 < l$1; i$1++) {
                markStaticRoots(node.ifConditions[i$1].block, isInFor);
              }
            }
          }
        }
        function isStatic(node) {
          if (node.type === 2) {
            return false;
          }
          if (node.type === 3) {
            return true;
          }
          return !!(node.pre || !node.hasBindings && !node.if && !node.for && !isBuiltInTag(node.tag) && isPlatformReservedTag(node.tag) && !isDirectChildOfTemplateFor(node) && Object.keys(node).every(isStaticKey));
        }
        function isDirectChildOfTemplateFor(node) {
          while (node.parent) {
            node = node.parent;
            if (node.tag !== "template") {
              return false;
            }
            if (node.for) {
              return true;
            }
          }
          return false;
        }
        var fnExpRE = /^([\w$_]+|\([^)]*?\))\s*=>|^function(?:\s+[\w$]+)?\s*\(/;
        var fnInvokeRE = /\([^)]*?\);*$/;
        var simplePathRE = /^[A-Za-z_$][\w$]*(?:\.[A-Za-z_$][\w$]*|\['[^']*?']|\["[^"]*?"]|\[\d+]|\[[A-Za-z_$][\w$]*])*$/;
        var keyCodes = {
          esc: 27,
          tab: 9,
          enter: 13,
          space: 32,
          up: 38,
          left: 37,
          right: 39,
          down: 40,
          "delete": [8, 46]
        };
        var keyNames = {
          esc: ["Esc", "Escape"],
          tab: "Tab",
          enter: "Enter",
          space: [" ", "Spacebar"],
          up: ["Up", "ArrowUp"],
          left: ["Left", "ArrowLeft"],
          right: ["Right", "ArrowRight"],
          down: ["Down", "ArrowDown"],
          "delete": ["Backspace", "Delete", "Del"]
        };
        var genGuard = function(condition) {
          return "if(" + condition + ")return null;";
        };
        var modifierCode = {
          stop: "$event.stopPropagation();",
          prevent: "$event.preventDefault();",
          self: genGuard("$event.target !== $event.currentTarget"),
          ctrl: genGuard("!$event.ctrlKey"),
          shift: genGuard("!$event.shiftKey"),
          alt: genGuard("!$event.altKey"),
          meta: genGuard("!$event.metaKey"),
          left: genGuard("'button' in $event && $event.button !== 0"),
          middle: genGuard("'button' in $event && $event.button !== 1"),
          right: genGuard("'button' in $event && $event.button !== 2")
        };
        function genHandlers(events2, isNative2) {
          var prefix = isNative2 ? "nativeOn:" : "on:";
          var staticHandlers = "";
          var dynamicHandlers = "";
          for (var name in events2) {
            var handlerCode = genHandler(events2[name]);
            if (events2[name] && events2[name].dynamic) {
              dynamicHandlers += name + "," + handlerCode + ",";
            } else {
              staticHandlers += '"' + name + '":' + handlerCode + ",";
            }
          }
          staticHandlers = "{" + staticHandlers.slice(0, -1) + "}";
          if (dynamicHandlers) {
            return prefix + "_d(" + staticHandlers + ",[" + dynamicHandlers.slice(0, -1) + "])";
          } else {
            return prefix + staticHandlers;
          }
        }
        function genHandler(handler) {
          if (!handler) {
            return "function(){}";
          }
          if (Array.isArray(handler)) {
            return "[" + handler.map(function(handler2) {
              return genHandler(handler2);
            }).join(",") + "]";
          }
          var isMethodPath = simplePathRE.test(handler.value);
          var isFunctionExpression = fnExpRE.test(handler.value);
          var isFunctionInvocation = simplePathRE.test(handler.value.replace(fnInvokeRE, ""));
          if (!handler.modifiers) {
            if (isMethodPath || isFunctionExpression) {
              return handler.value;
            }
            return "function($event){" + (isFunctionInvocation ? "return " + handler.value : handler.value) + "}";
          } else {
            var code = "";
            var genModifierCode = "";
            var keys = [];
            for (var key in handler.modifiers) {
              if (modifierCode[key]) {
                genModifierCode += modifierCode[key];
                if (keyCodes[key]) {
                  keys.push(key);
                }
              } else if (key === "exact") {
                var modifiers = handler.modifiers;
                genModifierCode += genGuard(["ctrl", "shift", "alt", "meta"].filter(function(keyModifier) {
                  return !modifiers[keyModifier];
                }).map(function(keyModifier) {
                  return "$event." + keyModifier + "Key";
                }).join("||"));
              } else {
                keys.push(key);
              }
            }
            if (keys.length) {
              code += genKeyFilter(keys);
            }
            if (genModifierCode) {
              code += genModifierCode;
            }
            var handlerCode = isMethodPath ? "return " + handler.value + ".apply(null, arguments)" : isFunctionExpression ? "return (" + handler.value + ").apply(null, arguments)" : isFunctionInvocation ? "return " + handler.value : handler.value;
            return "function($event){" + code + handlerCode + "}";
          }
        }
        function genKeyFilter(keys) {
          return "if(!$event.type.indexOf('key')&&" + keys.map(genFilterCode).join("&&") + ")return null;";
        }
        function genFilterCode(key) {
          var keyVal = parseInt(key, 10);
          if (keyVal) {
            return "$event.keyCode!==" + keyVal;
          }
          var keyCode = keyCodes[key];
          var keyName = keyNames[key];
          return "_k($event.keyCode," + JSON.stringify(key) + "," + JSON.stringify(keyCode) + ",$event.key," + JSON.stringify(keyName) + ")";
        }
        function on(el, dir) {
          if (dir.modifiers) {
            warn("v-on without argument does not support modifiers.");
          }
          el.wrapListeners = function(code) {
            return "_g(" + code + "," + dir.value + ")";
          };
        }
        function bind$1(el, dir) {
          el.wrapData = function(code) {
            return "_b(" + code + ",'" + el.tag + "'," + dir.value + "," + (dir.modifiers && dir.modifiers.prop ? "true" : "false") + (dir.modifiers && dir.modifiers.sync ? ",true" : "") + ")";
          };
        }
        var baseDirectives = {
          on,
          bind: bind$1,
          cloak: noop
        };
        var CodegenState = function CodegenState2(options) {
          this.options = options;
          this.warn = options.warn || baseWarn;
          this.transforms = pluckModuleFunction(options.modules, "transformCode");
          this.dataGenFns = pluckModuleFunction(options.modules, "genData");
          this.directives = extend(extend({}, baseDirectives), options.directives);
          var isReservedTag2 = options.isReservedTag || no;
          this.maybeComponent = function(el) {
            return !!el.component || !isReservedTag2(el.tag);
          };
          this.onceId = 0;
          this.staticRenderFns = [];
          this.pre = false;
        };
        function generate(ast, options) {
          var state = new CodegenState(options);
          var code = ast ? ast.tag === "script" ? "null" : genElement(ast, state) : '_c("div")';
          return {
            render: "with(this){return " + code + "}",
            staticRenderFns: state.staticRenderFns
          };
        }
        function genElement(el, state) {
          if (el.parent) {
            el.pre = el.pre || el.parent.pre;
          }
          if (el.staticRoot && !el.staticProcessed) {
            return genStatic(el, state);
          } else if (el.once && !el.onceProcessed) {
            return genOnce(el, state);
          } else if (el.for && !el.forProcessed) {
            return genFor(el, state);
          } else if (el.if && !el.ifProcessed) {
            return genIf(el, state);
          } else if (el.tag === "template" && !el.slotTarget && !state.pre) {
            return genChildren(el, state) || "void 0";
          } else if (el.tag === "slot") {
            return genSlot(el, state);
          } else {
            var code;
            if (el.component) {
              code = genComponent(el.component, el, state);
            } else {
              var data;
              if (!el.plain || el.pre && state.maybeComponent(el)) {
                data = genData$2(el, state);
              }
              var children = el.inlineTemplate ? null : genChildren(el, state, true);
              code = "_c('" + el.tag + "'" + (data ? "," + data : "") + (children ? "," + children : "") + ")";
            }
            for (var i = 0; i < state.transforms.length; i++) {
              code = state.transforms[i](el, code);
            }
            return code;
          }
        }
        function genStatic(el, state) {
          el.staticProcessed = true;
          var originalPreState = state.pre;
          if (el.pre) {
            state.pre = el.pre;
          }
          state.staticRenderFns.push("with(this){return " + genElement(el, state) + "}");
          state.pre = originalPreState;
          return "_m(" + (state.staticRenderFns.length - 1) + (el.staticInFor ? ",true" : "") + ")";
        }
        function genOnce(el, state) {
          el.onceProcessed = true;
          if (el.if && !el.ifProcessed) {
            return genIf(el, state);
          } else if (el.staticInFor) {
            var key = "";
            var parent = el.parent;
            while (parent) {
              if (parent.for) {
                key = parent.key;
                break;
              }
              parent = parent.parent;
            }
            if (!key) {
              state.warn("v-once can only be used inside v-for that is keyed. ", el.rawAttrsMap["v-once"]);
              return genElement(el, state);
            }
            return "_o(" + genElement(el, state) + "," + state.onceId++ + "," + key + ")";
          } else {
            return genStatic(el, state);
          }
        }
        function genIf(el, state, altGen, altEmpty) {
          el.ifProcessed = true;
          return genIfConditions(el.ifConditions.slice(), state, altGen, altEmpty);
        }
        function genIfConditions(conditions, state, altGen, altEmpty) {
          if (!conditions.length) {
            return altEmpty || "_e()";
          }
          var condition = conditions.shift();
          if (condition.exp) {
            return "(" + condition.exp + ")?" + genTernaryExp(condition.block) + ":" + genIfConditions(conditions, state, altGen, altEmpty);
          } else {
            return "" + genTernaryExp(condition.block);
          }
          function genTernaryExp(el) {
            return altGen ? altGen(el, state) : el.once ? genOnce(el, state) : genElement(el, state);
          }
        }
        function genFor(el, state, altGen, altHelper) {
          var exp = el.for;
          var alias = el.alias;
          var iterator1 = el.iterator1 ? "," + el.iterator1 : "";
          var iterator2 = el.iterator2 ? "," + el.iterator2 : "";
          if (state.maybeComponent(el) && el.tag !== "slot" && el.tag !== "template" && !el.key) {
            state.warn("<" + el.tag + ' v-for="' + alias + " in " + exp + '">: component lists rendered with v-for should have explicit keys. See https://vuejs.org/guide/list.html#key for more info.', el.rawAttrsMap["v-for"], true);
          }
          el.forProcessed = true;
          return (altHelper || "_l") + "((" + exp + "),function(" + alias + iterator1 + iterator2 + "){return " + (altGen || genElement)(el, state) + "})";
        }
        function genData$2(el, state) {
          var data = "{";
          var dirs = genDirectives(el, state);
          if (dirs) {
            data += dirs + ",";
          }
          if (el.key) {
            data += "key:" + el.key + ",";
          }
          if (el.ref) {
            data += "ref:" + el.ref + ",";
          }
          if (el.refInFor) {
            data += "refInFor:true,";
          }
          if (el.pre) {
            data += "pre:true,";
          }
          if (el.component) {
            data += 'tag:"' + el.tag + '",';
          }
          for (var i = 0; i < state.dataGenFns.length; i++) {
            data += state.dataGenFns[i](el);
          }
          if (el.attrs) {
            data += "attrs:" + genProps(el.attrs) + ",";
          }
          if (el.props) {
            data += "domProps:" + genProps(el.props) + ",";
          }
          if (el.events) {
            data += genHandlers(el.events, false) + ",";
          }
          if (el.nativeEvents) {
            data += genHandlers(el.nativeEvents, true) + ",";
          }
          if (el.slotTarget && !el.slotScope) {
            data += "slot:" + el.slotTarget + ",";
          }
          if (el.scopedSlots) {
            data += genScopedSlots(el, el.scopedSlots, state) + ",";
          }
          if (el.model) {
            data += "model:{value:" + el.model.value + ",callback:" + el.model.callback + ",expression:" + el.model.expression + "},";
          }
          if (el.inlineTemplate) {
            var inlineTemplate = genInlineTemplate(el, state);
            if (inlineTemplate) {
              data += inlineTemplate + ",";
            }
          }
          data = data.replace(/,$/, "") + "}";
          if (el.dynamicAttrs) {
            data = "_b(" + data + ',"' + el.tag + '",' + genProps(el.dynamicAttrs) + ")";
          }
          if (el.wrapData) {
            data = el.wrapData(data);
          }
          if (el.wrapListeners) {
            data = el.wrapListeners(data);
          }
          return data;
        }
        function genDirectives(el, state) {
          var dirs = el.directives;
          if (!dirs) {
            return;
          }
          var res = "directives:[";
          var hasRuntime = false;
          var i, l, dir, needRuntime;
          for (i = 0, l = dirs.length; i < l; i++) {
            dir = dirs[i];
            needRuntime = true;
            var gen = state.directives[dir.name];
            if (gen) {
              needRuntime = !!gen(el, dir, state.warn);
            }
            if (needRuntime) {
              hasRuntime = true;
              res += '{name:"' + dir.name + '",rawName:"' + dir.rawName + '"' + (dir.value ? ",value:(" + dir.value + "),expression:" + JSON.stringify(dir.value) : "") + (dir.arg ? ",arg:" + (dir.isDynamicArg ? dir.arg : '"' + dir.arg + '"') : "") + (dir.modifiers ? ",modifiers:" + JSON.stringify(dir.modifiers) : "") + "},";
            }
          }
          if (hasRuntime) {
            return res.slice(0, -1) + "]";
          }
        }
        function genInlineTemplate(el, state) {
          var ast = el.children[0];
          if (el.children.length !== 1 || ast.type !== 1) {
            state.warn("Inline-template components must have exactly one child element.", { start: el.start });
          }
          if (ast && ast.type === 1) {
            var inlineRenderFns = generate(ast, state.options);
            return "inlineTemplate:{render:function(){" + inlineRenderFns.render + "},staticRenderFns:[" + inlineRenderFns.staticRenderFns.map(function(code) {
              return "function(){" + code + "}";
            }).join(",") + "]}";
          }
        }
        function genScopedSlots(el, slots, state) {
          var needsForceUpdate = el.for || Object.keys(slots).some(function(key) {
            var slot = slots[key];
            return slot.slotTargetDynamic || slot.if || slot.for || containsSlotChild(slot);
          });
          var needsKey = !!el.if;
          if (!needsForceUpdate) {
            var parent = el.parent;
            while (parent) {
              if (parent.slotScope && parent.slotScope !== emptySlotScopeToken || parent.for) {
                needsForceUpdate = true;
                break;
              }
              if (parent.if) {
                needsKey = true;
              }
              parent = parent.parent;
            }
          }
          var generatedSlots = Object.keys(slots).map(function(key) {
            return genScopedSlot(slots[key], state);
          }).join(",");
          return "scopedSlots:_u([" + generatedSlots + "]" + (needsForceUpdate ? ",null,true" : "") + (!needsForceUpdate && needsKey ? ",null,false," + hash(generatedSlots) : "") + ")";
        }
        function hash(str2) {
          var hash2 = 5381;
          var i = str2.length;
          while (i) {
            hash2 = hash2 * 33 ^ str2.charCodeAt(--i);
          }
          return hash2 >>> 0;
        }
        function containsSlotChild(el) {
          if (el.type === 1) {
            if (el.tag === "slot") {
              return true;
            }
            return el.children.some(containsSlotChild);
          }
          return false;
        }
        function genScopedSlot(el, state) {
          var isLegacySyntax = el.attrsMap["slot-scope"];
          if (el.if && !el.ifProcessed && !isLegacySyntax) {
            return genIf(el, state, genScopedSlot, "null");
          }
          if (el.for && !el.forProcessed) {
            return genFor(el, state, genScopedSlot);
          }
          var slotScope = el.slotScope === emptySlotScopeToken ? "" : String(el.slotScope);
          var fn = "function(" + slotScope + "){return " + (el.tag === "template" ? el.if && isLegacySyntax ? "(" + el.if + ")?" + (genChildren(el, state) || "undefined") + ":undefined" : genChildren(el, state) || "undefined" : genElement(el, state)) + "}";
          var reverseProxy = slotScope ? "" : ",proxy:true";
          return "{key:" + (el.slotTarget || '"default"') + ",fn:" + fn + reverseProxy + "}";
        }
        function genChildren(el, state, checkSkip, altGenElement, altGenNode) {
          var children = el.children;
          if (children.length) {
            var el$1 = children[0];
            if (children.length === 1 && el$1.for && el$1.tag !== "template" && el$1.tag !== "slot") {
              var normalizationType = checkSkip ? state.maybeComponent(el$1) ? ",1" : ",0" : "";
              return "" + (altGenElement || genElement)(el$1, state) + normalizationType;
            }
            var normalizationType$1 = checkSkip ? getNormalizationType(children, state.maybeComponent) : 0;
            var gen = altGenNode || genNode;
            return "[" + children.map(function(c) {
              return gen(c, state);
            }).join(",") + "]" + (normalizationType$1 ? "," + normalizationType$1 : "");
          }
        }
        function getNormalizationType(children, maybeComponent2) {
          var res = 0;
          for (var i = 0; i < children.length; i++) {
            var el = children[i];
            if (el.type !== 1) {
              continue;
            }
            if (needsNormalization(el) || el.ifConditions && el.ifConditions.some(function(c) {
              return needsNormalization(c.block);
            })) {
              res = 2;
              break;
            }
            if (maybeComponent2(el) || el.ifConditions && el.ifConditions.some(function(c) {
              return maybeComponent2(c.block);
            })) {
              res = 1;
            }
          }
          return res;
        }
        function needsNormalization(el) {
          return el.for !== void 0 || el.tag === "template" || el.tag === "slot";
        }
        function genNode(node, state) {
          if (node.type === 1) {
            return genElement(node, state);
          } else if (node.type === 3 && node.isComment) {
            return genComment(node);
          } else {
            return genText(node);
          }
        }
        function genText(text2) {
          return "_v(" + (text2.type === 2 ? text2.expression : transformSpecialNewlines(JSON.stringify(text2.text))) + ")";
        }
        function genComment(comment2) {
          return "_e(" + JSON.stringify(comment2.text) + ")";
        }
        function genSlot(el, state) {
          var slotName = el.slotName || '"default"';
          var children = genChildren(el, state);
          var res = "_t(" + slotName + (children ? ",function(){return " + children + "}" : "");
          var attrs2 = el.attrs || el.dynamicAttrs ? genProps((el.attrs || []).concat(el.dynamicAttrs || []).map(function(attr) {
            return {
              name: camelize(attr.name),
              value: attr.value,
              dynamic: attr.dynamic
            };
          })) : null;
          var bind$$1 = el.attrsMap["v-bind"];
          if ((attrs2 || bind$$1) && !children) {
            res += ",null";
          }
          if (attrs2) {
            res += "," + attrs2;
          }
          if (bind$$1) {
            res += (attrs2 ? "" : ",null") + "," + bind$$1;
          }
          return res + ")";
        }
        function genComponent(componentName, el, state) {
          var children = el.inlineTemplate ? null : genChildren(el, state, true);
          return "_c(" + componentName + "," + genData$2(el, state) + (children ? "," + children : "") + ")";
        }
        function genProps(props2) {
          var staticProps = "";
          var dynamicProps = "";
          for (var i = 0; i < props2.length; i++) {
            var prop = props2[i];
            var value = transformSpecialNewlines(prop.value);
            if (prop.dynamic) {
              dynamicProps += prop.name + "," + value + ",";
            } else {
              staticProps += '"' + prop.name + '":' + value + ",";
            }
          }
          staticProps = "{" + staticProps.slice(0, -1) + "}";
          if (dynamicProps) {
            return "_d(" + staticProps + ",[" + dynamicProps.slice(0, -1) + "])";
          } else {
            return staticProps;
          }
        }
        function transformSpecialNewlines(text2) {
          return text2.replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029");
        }
        var prohibitedKeywordRE = new RegExp("\\b" + "do,if,for,let,new,try,var,case,else,with,await,break,catch,class,const,super,throw,while,yield,delete,export,import,return,switch,default,extends,finally,continue,debugger,function,arguments".split(",").join("\\b|\\b") + "\\b");
        var unaryOperatorsRE = new RegExp("\\b" + "delete,typeof,void".split(",").join("\\s*\\([^\\)]*\\)|\\b") + "\\s*\\([^\\)]*\\)");
        var stripStringRE = /'(?:[^'\\]|\\.)*'|"(?:[^"\\]|\\.)*"|`(?:[^`\\]|\\.)*\$\{|\}(?:[^`\\]|\\.)*`|`(?:[^`\\]|\\.)*`/g;
        function detectErrors(ast, warn2) {
          if (ast) {
            checkNode(ast, warn2);
          }
        }
        function checkNode(node, warn2) {
          if (node.type === 1) {
            for (var name in node.attrsMap) {
              if (dirRE.test(name)) {
                var value = node.attrsMap[name];
                if (value) {
                  var range2 = node.rawAttrsMap[name];
                  if (name === "v-for") {
                    checkFor(node, 'v-for="' + value + '"', warn2, range2);
                  } else if (name === "v-slot" || name[0] === "#") {
                    checkFunctionParameterExpression(value, name + '="' + value + '"', warn2, range2);
                  } else if (onRE.test(name)) {
                    checkEvent(value, name + '="' + value + '"', warn2, range2);
                  } else {
                    checkExpression(value, name + '="' + value + '"', warn2, range2);
                  }
                }
              }
            }
            if (node.children) {
              for (var i = 0; i < node.children.length; i++) {
                checkNode(node.children[i], warn2);
              }
            }
          } else if (node.type === 2) {
            checkExpression(node.expression, node.text, warn2, node);
          }
        }
        function checkEvent(exp, text2, warn2, range2) {
          var stripped = exp.replace(stripStringRE, "");
          var keywordMatch = stripped.match(unaryOperatorsRE);
          if (keywordMatch && stripped.charAt(keywordMatch.index - 1) !== "$") {
            warn2('avoid using JavaScript unary operator as property name: "' + keywordMatch[0] + '" in expression ' + text2.trim(), range2);
          }
          checkExpression(exp, text2, warn2, range2);
        }
        function checkFor(node, text2, warn2, range2) {
          checkExpression(node.for || "", text2, warn2, range2);
          checkIdentifier(node.alias, "v-for alias", text2, warn2, range2);
          checkIdentifier(node.iterator1, "v-for iterator", text2, warn2, range2);
          checkIdentifier(node.iterator2, "v-for iterator", text2, warn2, range2);
        }
        function checkIdentifier(ident, type, text2, warn2, range2) {
          if (typeof ident === "string") {
            try {
              new Function("var " + ident + "=_");
            } catch (e) {
              warn2("invalid " + type + ' "' + ident + '" in expression: ' + text2.trim(), range2);
            }
          }
        }
        function checkExpression(exp, text2, warn2, range2) {
          try {
            new Function("return " + exp);
          } catch (e) {
            var keywordMatch = exp.replace(stripStringRE, "").match(prohibitedKeywordRE);
            if (keywordMatch) {
              warn2('avoid using JavaScript keyword as property name: "' + keywordMatch[0] + '"\n  Raw expression: ' + text2.trim(), range2);
            } else {
              warn2("invalid expression: " + e.message + " in\n\n    " + exp + "\n\n  Raw expression: " + text2.trim() + "\n", range2);
            }
          }
        }
        function checkFunctionParameterExpression(exp, text2, warn2, range2) {
          try {
            new Function(exp, "");
          } catch (e) {
            warn2("invalid function parameter expression: " + e.message + " in\n\n    " + exp + "\n\n  Raw expression: " + text2.trim() + "\n", range2);
          }
        }
        var range = 2;
        function generateCodeFrame(source, start, end) {
          if (start === void 0)
            start = 0;
          if (end === void 0)
            end = source.length;
          var lines = source.split(/\r?\n/);
          var count = 0;
          var res = [];
          for (var i = 0; i < lines.length; i++) {
            count += lines[i].length + 1;
            if (count >= start) {
              for (var j = i - range; j <= i + range || end > count; j++) {
                if (j < 0 || j >= lines.length) {
                  continue;
                }
                res.push("" + (j + 1) + repeat$1(" ", 3 - String(j + 1).length) + "|  " + lines[j]);
                var lineLength = lines[j].length;
                if (j === i) {
                  var pad = start - (count - lineLength) + 1;
                  var length = end > count ? lineLength - pad : end - start;
                  res.push("   |  " + repeat$1(" ", pad) + repeat$1("^", length));
                } else if (j > i) {
                  if (end > count) {
                    var length$1 = Math.min(end - count, lineLength);
                    res.push("   |  " + repeat$1("^", length$1));
                  }
                  count += lineLength + 1;
                }
              }
              break;
            }
          }
          return res.join("\n");
        }
        function repeat$1(str2, n) {
          var result = "";
          if (n > 0) {
            while (true) {
              if (n & 1) {
                result += str2;
              }
              n >>>= 1;
              if (n <= 0) {
                break;
              }
              str2 += str2;
            }
          }
          return result;
        }
        function createFunction(code, errors) {
          try {
            return new Function(code);
          } catch (err) {
            errors.push({ err, code });
            return noop;
          }
        }
        function createCompileToFunctionFn(compile2) {
          var cache = /* @__PURE__ */ Object.create(null);
          return function compileToFunctions2(template, options, vm) {
            options = extend({}, options);
            var warn$$1 = options.warn || warn;
            delete options.warn;
            {
              try {
                new Function("return 1");
              } catch (e) {
                if (e.toString().match(/unsafe-eval|CSP/)) {
                  warn$$1("It seems you are using the standalone build of Vue.js in an environment with Content Security Policy that prohibits unsafe-eval. The template compiler cannot work in this environment. Consider relaxing the policy to allow unsafe-eval or pre-compiling your templates into render functions.");
                }
              }
            }
            var key = options.delimiters ? String(options.delimiters) + template : template;
            if (cache[key]) {
              return cache[key];
            }
            var compiled = compile2(template, options);
            {
              if (compiled.errors && compiled.errors.length) {
                if (options.outputSourceRange) {
                  compiled.errors.forEach(function(e) {
                    warn$$1("Error compiling template:\n\n" + e.msg + "\n\n" + generateCodeFrame(template, e.start, e.end), vm);
                  });
                } else {
                  warn$$1("Error compiling template:\n\n" + template + "\n\n" + compiled.errors.map(function(e) {
                    return "- " + e;
                  }).join("\n") + "\n", vm);
                }
              }
              if (compiled.tips && compiled.tips.length) {
                if (options.outputSourceRange) {
                  compiled.tips.forEach(function(e) {
                    return tip(e.msg, vm);
                  });
                } else {
                  compiled.tips.forEach(function(msg) {
                    return tip(msg, vm);
                  });
                }
              }
            }
            var res = {};
            var fnGenErrors = [];
            res.render = createFunction(compiled.render, fnGenErrors);
            res.staticRenderFns = compiled.staticRenderFns.map(function(code) {
              return createFunction(code, fnGenErrors);
            });
            {
              if ((!compiled.errors || !compiled.errors.length) && fnGenErrors.length) {
                warn$$1("Failed to generate render function:\n\n" + fnGenErrors.map(function(ref2) {
                  var err = ref2.err;
                  var code = ref2.code;
                  return err.toString() + " in\n\n" + code + "\n";
                }).join("\n"), vm);
              }
            }
            return cache[key] = res;
          };
        }
        function createCompilerCreator(baseCompile) {
          return function createCompiler2(baseOptions2) {
            function compile2(template, options) {
              var finalOptions = Object.create(baseOptions2);
              var errors = [];
              var tips = [];
              var warn2 = function(msg, range2, tip2) {
                (tip2 ? tips : errors).push(msg);
              };
              if (options) {
                if (options.outputSourceRange) {
                  var leadingSpaceLength = template.match(/^\s*/)[0].length;
                  warn2 = function(msg, range2, tip2) {
                    var data = { msg };
                    if (range2) {
                      if (range2.start != null) {
                        data.start = range2.start + leadingSpaceLength;
                      }
                      if (range2.end != null) {
                        data.end = range2.end + leadingSpaceLength;
                      }
                    }
                    (tip2 ? tips : errors).push(data);
                  };
                }
                if (options.modules) {
                  finalOptions.modules = (baseOptions2.modules || []).concat(options.modules);
                }
                if (options.directives) {
                  finalOptions.directives = extend(Object.create(baseOptions2.directives || null), options.directives);
                }
                for (var key in options) {
                  if (key !== "modules" && key !== "directives") {
                    finalOptions[key] = options[key];
                  }
                }
              }
              finalOptions.warn = warn2;
              var compiled = baseCompile(template.trim(), finalOptions);
              {
                detectErrors(compiled.ast, warn2);
              }
              compiled.errors = errors;
              compiled.tips = tips;
              return compiled;
            }
            return {
              compile: compile2,
              compileToFunctions: createCompileToFunctionFn(compile2)
            };
          };
        }
        var createCompiler = createCompilerCreator(function baseCompile(template, options) {
          var ast = parse(template.trim(), options);
          if (options.optimize !== false) {
            optimize(ast, options);
          }
          var code = generate(ast, options);
          return {
            ast,
            render: code.render,
            staticRenderFns: code.staticRenderFns
          };
        });
        var ref$1 = createCompiler(baseOptions);
        var compile = ref$1.compile;
        var compileToFunctions = ref$1.compileToFunctions;
        var div;
        function getShouldDecode(href) {
          div = div || document.createElement("div");
          div.innerHTML = href ? '<a href="\n"/>' : '<div a="\n"/>';
          return div.innerHTML.indexOf("&#10;") > 0;
        }
        var shouldDecodeNewlines = inBrowser ? getShouldDecode(false) : false;
        var shouldDecodeNewlinesForHref = inBrowser ? getShouldDecode(true) : false;
        var idToTemplate = cached(function(id) {
          var el = query(id);
          return el && el.innerHTML;
        });
        var mount = Vue6.prototype.$mount;
        Vue6.prototype.$mount = function(el, hydrating) {
          el = el && query(el);
          if (el === document.body || el === document.documentElement) {
            warn("Do not mount Vue to <html> or <body> - mount to normal elements instead.");
            return this;
          }
          var options = this.$options;
          if (!options.render) {
            var template = options.template;
            if (template) {
              if (typeof template === "string") {
                if (template.charAt(0) === "#") {
                  template = idToTemplate(template);
                  if (!template) {
                    warn("Template element not found or is empty: " + options.template, this);
                  }
                }
              } else if (template.nodeType) {
                template = template.innerHTML;
              } else {
                {
                  warn("invalid template option:" + template, this);
                }
                return this;
              }
            } else if (el) {
              template = getOuterHTML(el);
            }
            if (template) {
              if (config.performance && mark) {
                mark("compile");
              }
              var ref2 = compileToFunctions(template, {
                outputSourceRange: true,
                shouldDecodeNewlines,
                shouldDecodeNewlinesForHref,
                delimiters: options.delimiters,
                comments: options.comments
              }, this);
              var render = ref2.render;
              var staticRenderFns = ref2.staticRenderFns;
              options.render = render;
              options.staticRenderFns = staticRenderFns;
              if (config.performance && mark) {
                mark("compile end");
                measure("vue " + this._name + " compile", "compile", "compile end");
              }
            }
          }
          return mount.call(this, el, hydrating);
        };
        function getOuterHTML(el) {
          if (el.outerHTML) {
            return el.outerHTML;
          } else {
            var container = document.createElement("div");
            container.appendChild(el.cloneNode(true));
            return container.innerHTML;
          }
        }
        Vue6.compile = compileToFunctions;
        return Vue6;
      });
    }
  });

  // ../optic_store/node_modules/lodash/_listCacheClear.js
  var require_listCacheClear = __commonJS({
    "../optic_store/node_modules/lodash/_listCacheClear.js"(exports, module) {
      function listCacheClear() {
        this.__data__ = [];
        this.size = 0;
      }
      module.exports = listCacheClear;
    }
  });

  // ../optic_store/node_modules/lodash/eq.js
  var require_eq = __commonJS({
    "../optic_store/node_modules/lodash/eq.js"(exports, module) {
      function eq(value, other) {
        return value === other || value !== value && other !== other;
      }
      module.exports = eq;
    }
  });

  // ../optic_store/node_modules/lodash/_assocIndexOf.js
  var require_assocIndexOf = __commonJS({
    "../optic_store/node_modules/lodash/_assocIndexOf.js"(exports, module) {
      var eq = require_eq();
      function assocIndexOf(array, key) {
        var length = array.length;
        while (length--) {
          if (eq(array[length][0], key)) {
            return length;
          }
        }
        return -1;
      }
      module.exports = assocIndexOf;
    }
  });

  // ../optic_store/node_modules/lodash/_listCacheDelete.js
  var require_listCacheDelete = __commonJS({
    "../optic_store/node_modules/lodash/_listCacheDelete.js"(exports, module) {
      var assocIndexOf = require_assocIndexOf();
      var arrayProto = Array.prototype;
      var splice = arrayProto.splice;
      function listCacheDelete(key) {
        var data = this.__data__, index = assocIndexOf(data, key);
        if (index < 0) {
          return false;
        }
        var lastIndex = data.length - 1;
        if (index == lastIndex) {
          data.pop();
        } else {
          splice.call(data, index, 1);
        }
        --this.size;
        return true;
      }
      module.exports = listCacheDelete;
    }
  });

  // ../optic_store/node_modules/lodash/_listCacheGet.js
  var require_listCacheGet = __commonJS({
    "../optic_store/node_modules/lodash/_listCacheGet.js"(exports, module) {
      var assocIndexOf = require_assocIndexOf();
      function listCacheGet(key) {
        var data = this.__data__, index = assocIndexOf(data, key);
        return index < 0 ? void 0 : data[index][1];
      }
      module.exports = listCacheGet;
    }
  });

  // ../optic_store/node_modules/lodash/_listCacheHas.js
  var require_listCacheHas = __commonJS({
    "../optic_store/node_modules/lodash/_listCacheHas.js"(exports, module) {
      var assocIndexOf = require_assocIndexOf();
      function listCacheHas(key) {
        return assocIndexOf(this.__data__, key) > -1;
      }
      module.exports = listCacheHas;
    }
  });

  // ../optic_store/node_modules/lodash/_listCacheSet.js
  var require_listCacheSet = __commonJS({
    "../optic_store/node_modules/lodash/_listCacheSet.js"(exports, module) {
      var assocIndexOf = require_assocIndexOf();
      function listCacheSet(key, value) {
        var data = this.__data__, index = assocIndexOf(data, key);
        if (index < 0) {
          ++this.size;
          data.push([key, value]);
        } else {
          data[index][1] = value;
        }
        return this;
      }
      module.exports = listCacheSet;
    }
  });

  // ../optic_store/node_modules/lodash/_ListCache.js
  var require_ListCache = __commonJS({
    "../optic_store/node_modules/lodash/_ListCache.js"(exports, module) {
      var listCacheClear = require_listCacheClear();
      var listCacheDelete = require_listCacheDelete();
      var listCacheGet = require_listCacheGet();
      var listCacheHas = require_listCacheHas();
      var listCacheSet = require_listCacheSet();
      function ListCache(entries) {
        var index = -1, length = entries == null ? 0 : entries.length;
        this.clear();
        while (++index < length) {
          var entry = entries[index];
          this.set(entry[0], entry[1]);
        }
      }
      ListCache.prototype.clear = listCacheClear;
      ListCache.prototype["delete"] = listCacheDelete;
      ListCache.prototype.get = listCacheGet;
      ListCache.prototype.has = listCacheHas;
      ListCache.prototype.set = listCacheSet;
      module.exports = ListCache;
    }
  });

  // ../optic_store/node_modules/lodash/_stackClear.js
  var require_stackClear = __commonJS({
    "../optic_store/node_modules/lodash/_stackClear.js"(exports, module) {
      var ListCache = require_ListCache();
      function stackClear() {
        this.__data__ = new ListCache();
        this.size = 0;
      }
      module.exports = stackClear;
    }
  });

  // ../optic_store/node_modules/lodash/_stackDelete.js
  var require_stackDelete = __commonJS({
    "../optic_store/node_modules/lodash/_stackDelete.js"(exports, module) {
      function stackDelete(key) {
        var data = this.__data__, result = data["delete"](key);
        this.size = data.size;
        return result;
      }
      module.exports = stackDelete;
    }
  });

  // ../optic_store/node_modules/lodash/_stackGet.js
  var require_stackGet = __commonJS({
    "../optic_store/node_modules/lodash/_stackGet.js"(exports, module) {
      function stackGet(key) {
        return this.__data__.get(key);
      }
      module.exports = stackGet;
    }
  });

  // ../optic_store/node_modules/lodash/_stackHas.js
  var require_stackHas = __commonJS({
    "../optic_store/node_modules/lodash/_stackHas.js"(exports, module) {
      function stackHas(key) {
        return this.__data__.has(key);
      }
      module.exports = stackHas;
    }
  });

  // ../optic_store/node_modules/lodash/_freeGlobal.js
  var require_freeGlobal = __commonJS({
    "../optic_store/node_modules/lodash/_freeGlobal.js"(exports, module) {
      var freeGlobal = typeof global == "object" && global && global.Object === Object && global;
      module.exports = freeGlobal;
    }
  });

  // ../optic_store/node_modules/lodash/_root.js
  var require_root = __commonJS({
    "../optic_store/node_modules/lodash/_root.js"(exports, module) {
      var freeGlobal = require_freeGlobal();
      var freeSelf = typeof self == "object" && self && self.Object === Object && self;
      var root = freeGlobal || freeSelf || Function("return this")();
      module.exports = root;
    }
  });

  // ../optic_store/node_modules/lodash/_Symbol.js
  var require_Symbol = __commonJS({
    "../optic_store/node_modules/lodash/_Symbol.js"(exports, module) {
      var root = require_root();
      var Symbol2 = root.Symbol;
      module.exports = Symbol2;
    }
  });

  // ../optic_store/node_modules/lodash/_getRawTag.js
  var require_getRawTag = __commonJS({
    "../optic_store/node_modules/lodash/_getRawTag.js"(exports, module) {
      var Symbol2 = require_Symbol();
      var objectProto = Object.prototype;
      var hasOwnProperty = objectProto.hasOwnProperty;
      var nativeObjectToString = objectProto.toString;
      var symToStringTag = Symbol2 ? Symbol2.toStringTag : void 0;
      function getRawTag(value) {
        var isOwn = hasOwnProperty.call(value, symToStringTag), tag = value[symToStringTag];
        try {
          value[symToStringTag] = void 0;
          var unmasked = true;
        } catch (e) {
        }
        var result = nativeObjectToString.call(value);
        if (unmasked) {
          if (isOwn) {
            value[symToStringTag] = tag;
          } else {
            delete value[symToStringTag];
          }
        }
        return result;
      }
      module.exports = getRawTag;
    }
  });

  // ../optic_store/node_modules/lodash/_objectToString.js
  var require_objectToString = __commonJS({
    "../optic_store/node_modules/lodash/_objectToString.js"(exports, module) {
      var objectProto = Object.prototype;
      var nativeObjectToString = objectProto.toString;
      function objectToString(value) {
        return nativeObjectToString.call(value);
      }
      module.exports = objectToString;
    }
  });

  // ../optic_store/node_modules/lodash/_baseGetTag.js
  var require_baseGetTag = __commonJS({
    "../optic_store/node_modules/lodash/_baseGetTag.js"(exports, module) {
      var Symbol2 = require_Symbol();
      var getRawTag = require_getRawTag();
      var objectToString = require_objectToString();
      var nullTag = "[object Null]";
      var undefinedTag = "[object Undefined]";
      var symToStringTag = Symbol2 ? Symbol2.toStringTag : void 0;
      function baseGetTag(value) {
        if (value == null) {
          return value === void 0 ? undefinedTag : nullTag;
        }
        return symToStringTag && symToStringTag in Object(value) ? getRawTag(value) : objectToString(value);
      }
      module.exports = baseGetTag;
    }
  });

  // ../optic_store/node_modules/lodash/isObject.js
  var require_isObject = __commonJS({
    "../optic_store/node_modules/lodash/isObject.js"(exports, module) {
      function isObject(value) {
        var type = typeof value;
        return value != null && (type == "object" || type == "function");
      }
      module.exports = isObject;
    }
  });

  // ../optic_store/node_modules/lodash/isFunction.js
  var require_isFunction = __commonJS({
    "../optic_store/node_modules/lodash/isFunction.js"(exports, module) {
      var baseGetTag = require_baseGetTag();
      var isObject = require_isObject();
      var asyncTag = "[object AsyncFunction]";
      var funcTag = "[object Function]";
      var genTag = "[object GeneratorFunction]";
      var proxyTag = "[object Proxy]";
      function isFunction(value) {
        if (!isObject(value)) {
          return false;
        }
        var tag = baseGetTag(value);
        return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
      }
      module.exports = isFunction;
    }
  });

  // ../optic_store/node_modules/lodash/_coreJsData.js
  var require_coreJsData = __commonJS({
    "../optic_store/node_modules/lodash/_coreJsData.js"(exports, module) {
      var root = require_root();
      var coreJsData = root["__core-js_shared__"];
      module.exports = coreJsData;
    }
  });

  // ../optic_store/node_modules/lodash/_isMasked.js
  var require_isMasked = __commonJS({
    "../optic_store/node_modules/lodash/_isMasked.js"(exports, module) {
      var coreJsData = require_coreJsData();
      var maskSrcKey = function() {
        var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || "");
        return uid ? "Symbol(src)_1." + uid : "";
      }();
      function isMasked(func) {
        return !!maskSrcKey && maskSrcKey in func;
      }
      module.exports = isMasked;
    }
  });

  // ../optic_store/node_modules/lodash/_toSource.js
  var require_toSource = __commonJS({
    "../optic_store/node_modules/lodash/_toSource.js"(exports, module) {
      var funcProto = Function.prototype;
      var funcToString = funcProto.toString;
      function toSource(func) {
        if (func != null) {
          try {
            return funcToString.call(func);
          } catch (e) {
          }
          try {
            return func + "";
          } catch (e) {
          }
        }
        return "";
      }
      module.exports = toSource;
    }
  });

  // ../optic_store/node_modules/lodash/_baseIsNative.js
  var require_baseIsNative = __commonJS({
    "../optic_store/node_modules/lodash/_baseIsNative.js"(exports, module) {
      var isFunction = require_isFunction();
      var isMasked = require_isMasked();
      var isObject = require_isObject();
      var toSource = require_toSource();
      var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;
      var reIsHostCtor = /^\[object .+?Constructor\]$/;
      var funcProto = Function.prototype;
      var objectProto = Object.prototype;
      var funcToString = funcProto.toString;
      var hasOwnProperty = objectProto.hasOwnProperty;
      var reIsNative = RegExp("^" + funcToString.call(hasOwnProperty).replace(reRegExpChar, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
      function baseIsNative(value) {
        if (!isObject(value) || isMasked(value)) {
          return false;
        }
        var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
        return pattern.test(toSource(value));
      }
      module.exports = baseIsNative;
    }
  });

  // ../optic_store/node_modules/lodash/_getValue.js
  var require_getValue = __commonJS({
    "../optic_store/node_modules/lodash/_getValue.js"(exports, module) {
      function getValue(object, key) {
        return object == null ? void 0 : object[key];
      }
      module.exports = getValue;
    }
  });

  // ../optic_store/node_modules/lodash/_getNative.js
  var require_getNative = __commonJS({
    "../optic_store/node_modules/lodash/_getNative.js"(exports, module) {
      var baseIsNative = require_baseIsNative();
      var getValue = require_getValue();
      function getNative(object, key) {
        var value = getValue(object, key);
        return baseIsNative(value) ? value : void 0;
      }
      module.exports = getNative;
    }
  });

  // ../optic_store/node_modules/lodash/_Map.js
  var require_Map = __commonJS({
    "../optic_store/node_modules/lodash/_Map.js"(exports, module) {
      var getNative = require_getNative();
      var root = require_root();
      var Map = getNative(root, "Map");
      module.exports = Map;
    }
  });

  // ../optic_store/node_modules/lodash/_nativeCreate.js
  var require_nativeCreate = __commonJS({
    "../optic_store/node_modules/lodash/_nativeCreate.js"(exports, module) {
      var getNative = require_getNative();
      var nativeCreate = getNative(Object, "create");
      module.exports = nativeCreate;
    }
  });

  // ../optic_store/node_modules/lodash/_hashClear.js
  var require_hashClear = __commonJS({
    "../optic_store/node_modules/lodash/_hashClear.js"(exports, module) {
      var nativeCreate = require_nativeCreate();
      function hashClear() {
        this.__data__ = nativeCreate ? nativeCreate(null) : {};
        this.size = 0;
      }
      module.exports = hashClear;
    }
  });

  // ../optic_store/node_modules/lodash/_hashDelete.js
  var require_hashDelete = __commonJS({
    "../optic_store/node_modules/lodash/_hashDelete.js"(exports, module) {
      function hashDelete(key) {
        var result = this.has(key) && delete this.__data__[key];
        this.size -= result ? 1 : 0;
        return result;
      }
      module.exports = hashDelete;
    }
  });

  // ../optic_store/node_modules/lodash/_hashGet.js
  var require_hashGet = __commonJS({
    "../optic_store/node_modules/lodash/_hashGet.js"(exports, module) {
      var nativeCreate = require_nativeCreate();
      var HASH_UNDEFINED = "__lodash_hash_undefined__";
      var objectProto = Object.prototype;
      var hasOwnProperty = objectProto.hasOwnProperty;
      function hashGet(key) {
        var data = this.__data__;
        if (nativeCreate) {
          var result = data[key];
          return result === HASH_UNDEFINED ? void 0 : result;
        }
        return hasOwnProperty.call(data, key) ? data[key] : void 0;
      }
      module.exports = hashGet;
    }
  });

  // ../optic_store/node_modules/lodash/_hashHas.js
  var require_hashHas = __commonJS({
    "../optic_store/node_modules/lodash/_hashHas.js"(exports, module) {
      var nativeCreate = require_nativeCreate();
      var objectProto = Object.prototype;
      var hasOwnProperty = objectProto.hasOwnProperty;
      function hashHas(key) {
        var data = this.__data__;
        return nativeCreate ? data[key] !== void 0 : hasOwnProperty.call(data, key);
      }
      module.exports = hashHas;
    }
  });

  // ../optic_store/node_modules/lodash/_hashSet.js
  var require_hashSet = __commonJS({
    "../optic_store/node_modules/lodash/_hashSet.js"(exports, module) {
      var nativeCreate = require_nativeCreate();
      var HASH_UNDEFINED = "__lodash_hash_undefined__";
      function hashSet(key, value) {
        var data = this.__data__;
        this.size += this.has(key) ? 0 : 1;
        data[key] = nativeCreate && value === void 0 ? HASH_UNDEFINED : value;
        return this;
      }
      module.exports = hashSet;
    }
  });

  // ../optic_store/node_modules/lodash/_Hash.js
  var require_Hash = __commonJS({
    "../optic_store/node_modules/lodash/_Hash.js"(exports, module) {
      var hashClear = require_hashClear();
      var hashDelete = require_hashDelete();
      var hashGet = require_hashGet();
      var hashHas = require_hashHas();
      var hashSet = require_hashSet();
      function Hash(entries) {
        var index = -1, length = entries == null ? 0 : entries.length;
        this.clear();
        while (++index < length) {
          var entry = entries[index];
          this.set(entry[0], entry[1]);
        }
      }
      Hash.prototype.clear = hashClear;
      Hash.prototype["delete"] = hashDelete;
      Hash.prototype.get = hashGet;
      Hash.prototype.has = hashHas;
      Hash.prototype.set = hashSet;
      module.exports = Hash;
    }
  });

  // ../optic_store/node_modules/lodash/_mapCacheClear.js
  var require_mapCacheClear = __commonJS({
    "../optic_store/node_modules/lodash/_mapCacheClear.js"(exports, module) {
      var Hash = require_Hash();
      var ListCache = require_ListCache();
      var Map = require_Map();
      function mapCacheClear() {
        this.size = 0;
        this.__data__ = {
          "hash": new Hash(),
          "map": new (Map || ListCache)(),
          "string": new Hash()
        };
      }
      module.exports = mapCacheClear;
    }
  });

  // ../optic_store/node_modules/lodash/_isKeyable.js
  var require_isKeyable = __commonJS({
    "../optic_store/node_modules/lodash/_isKeyable.js"(exports, module) {
      function isKeyable(value) {
        var type = typeof value;
        return type == "string" || type == "number" || type == "symbol" || type == "boolean" ? value !== "__proto__" : value === null;
      }
      module.exports = isKeyable;
    }
  });

  // ../optic_store/node_modules/lodash/_getMapData.js
  var require_getMapData = __commonJS({
    "../optic_store/node_modules/lodash/_getMapData.js"(exports, module) {
      var isKeyable = require_isKeyable();
      function getMapData(map, key) {
        var data = map.__data__;
        return isKeyable(key) ? data[typeof key == "string" ? "string" : "hash"] : data.map;
      }
      module.exports = getMapData;
    }
  });

  // ../optic_store/node_modules/lodash/_mapCacheDelete.js
  var require_mapCacheDelete = __commonJS({
    "../optic_store/node_modules/lodash/_mapCacheDelete.js"(exports, module) {
      var getMapData = require_getMapData();
      function mapCacheDelete(key) {
        var result = getMapData(this, key)["delete"](key);
        this.size -= result ? 1 : 0;
        return result;
      }
      module.exports = mapCacheDelete;
    }
  });

  // ../optic_store/node_modules/lodash/_mapCacheGet.js
  var require_mapCacheGet = __commonJS({
    "../optic_store/node_modules/lodash/_mapCacheGet.js"(exports, module) {
      var getMapData = require_getMapData();
      function mapCacheGet(key) {
        return getMapData(this, key).get(key);
      }
      module.exports = mapCacheGet;
    }
  });

  // ../optic_store/node_modules/lodash/_mapCacheHas.js
  var require_mapCacheHas = __commonJS({
    "../optic_store/node_modules/lodash/_mapCacheHas.js"(exports, module) {
      var getMapData = require_getMapData();
      function mapCacheHas(key) {
        return getMapData(this, key).has(key);
      }
      module.exports = mapCacheHas;
    }
  });

  // ../optic_store/node_modules/lodash/_mapCacheSet.js
  var require_mapCacheSet = __commonJS({
    "../optic_store/node_modules/lodash/_mapCacheSet.js"(exports, module) {
      var getMapData = require_getMapData();
      function mapCacheSet(key, value) {
        var data = getMapData(this, key), size = data.size;
        data.set(key, value);
        this.size += data.size == size ? 0 : 1;
        return this;
      }
      module.exports = mapCacheSet;
    }
  });

  // ../optic_store/node_modules/lodash/_MapCache.js
  var require_MapCache = __commonJS({
    "../optic_store/node_modules/lodash/_MapCache.js"(exports, module) {
      var mapCacheClear = require_mapCacheClear();
      var mapCacheDelete = require_mapCacheDelete();
      var mapCacheGet = require_mapCacheGet();
      var mapCacheHas = require_mapCacheHas();
      var mapCacheSet = require_mapCacheSet();
      function MapCache(entries) {
        var index = -1, length = entries == null ? 0 : entries.length;
        this.clear();
        while (++index < length) {
          var entry = entries[index];
          this.set(entry[0], entry[1]);
        }
      }
      MapCache.prototype.clear = mapCacheClear;
      MapCache.prototype["delete"] = mapCacheDelete;
      MapCache.prototype.get = mapCacheGet;
      MapCache.prototype.has = mapCacheHas;
      MapCache.prototype.set = mapCacheSet;
      module.exports = MapCache;
    }
  });

  // ../optic_store/node_modules/lodash/_stackSet.js
  var require_stackSet = __commonJS({
    "../optic_store/node_modules/lodash/_stackSet.js"(exports, module) {
      var ListCache = require_ListCache();
      var Map = require_Map();
      var MapCache = require_MapCache();
      var LARGE_ARRAY_SIZE = 200;
      function stackSet(key, value) {
        var data = this.__data__;
        if (data instanceof ListCache) {
          var pairs = data.__data__;
          if (!Map || pairs.length < LARGE_ARRAY_SIZE - 1) {
            pairs.push([key, value]);
            this.size = ++data.size;
            return this;
          }
          data = this.__data__ = new MapCache(pairs);
        }
        data.set(key, value);
        this.size = data.size;
        return this;
      }
      module.exports = stackSet;
    }
  });

  // ../optic_store/node_modules/lodash/_Stack.js
  var require_Stack = __commonJS({
    "../optic_store/node_modules/lodash/_Stack.js"(exports, module) {
      var ListCache = require_ListCache();
      var stackClear = require_stackClear();
      var stackDelete = require_stackDelete();
      var stackGet = require_stackGet();
      var stackHas = require_stackHas();
      var stackSet = require_stackSet();
      function Stack(entries) {
        var data = this.__data__ = new ListCache(entries);
        this.size = data.size;
      }
      Stack.prototype.clear = stackClear;
      Stack.prototype["delete"] = stackDelete;
      Stack.prototype.get = stackGet;
      Stack.prototype.has = stackHas;
      Stack.prototype.set = stackSet;
      module.exports = Stack;
    }
  });

  // ../optic_store/node_modules/lodash/_setCacheAdd.js
  var require_setCacheAdd = __commonJS({
    "../optic_store/node_modules/lodash/_setCacheAdd.js"(exports, module) {
      var HASH_UNDEFINED = "__lodash_hash_undefined__";
      function setCacheAdd(value) {
        this.__data__.set(value, HASH_UNDEFINED);
        return this;
      }
      module.exports = setCacheAdd;
    }
  });

  // ../optic_store/node_modules/lodash/_setCacheHas.js
  var require_setCacheHas = __commonJS({
    "../optic_store/node_modules/lodash/_setCacheHas.js"(exports, module) {
      function setCacheHas(value) {
        return this.__data__.has(value);
      }
      module.exports = setCacheHas;
    }
  });

  // ../optic_store/node_modules/lodash/_SetCache.js
  var require_SetCache = __commonJS({
    "../optic_store/node_modules/lodash/_SetCache.js"(exports, module) {
      var MapCache = require_MapCache();
      var setCacheAdd = require_setCacheAdd();
      var setCacheHas = require_setCacheHas();
      function SetCache(values) {
        var index = -1, length = values == null ? 0 : values.length;
        this.__data__ = new MapCache();
        while (++index < length) {
          this.add(values[index]);
        }
      }
      SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
      SetCache.prototype.has = setCacheHas;
      module.exports = SetCache;
    }
  });

  // ../optic_store/node_modules/lodash/_arraySome.js
  var require_arraySome = __commonJS({
    "../optic_store/node_modules/lodash/_arraySome.js"(exports, module) {
      function arraySome(array, predicate) {
        var index = -1, length = array == null ? 0 : array.length;
        while (++index < length) {
          if (predicate(array[index], index, array)) {
            return true;
          }
        }
        return false;
      }
      module.exports = arraySome;
    }
  });

  // ../optic_store/node_modules/lodash/_cacheHas.js
  var require_cacheHas = __commonJS({
    "../optic_store/node_modules/lodash/_cacheHas.js"(exports, module) {
      function cacheHas(cache, key) {
        return cache.has(key);
      }
      module.exports = cacheHas;
    }
  });

  // ../optic_store/node_modules/lodash/_equalArrays.js
  var require_equalArrays = __commonJS({
    "../optic_store/node_modules/lodash/_equalArrays.js"(exports, module) {
      var SetCache = require_SetCache();
      var arraySome = require_arraySome();
      var cacheHas = require_cacheHas();
      var COMPARE_PARTIAL_FLAG = 1;
      var COMPARE_UNORDERED_FLAG = 2;
      function equalArrays(array, other, bitmask, customizer, equalFunc, stack) {
        var isPartial = bitmask & COMPARE_PARTIAL_FLAG, arrLength = array.length, othLength = other.length;
        if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
          return false;
        }
        var arrStacked = stack.get(array);
        var othStacked = stack.get(other);
        if (arrStacked && othStacked) {
          return arrStacked == other && othStacked == array;
        }
        var index = -1, result = true, seen = bitmask & COMPARE_UNORDERED_FLAG ? new SetCache() : void 0;
        stack.set(array, other);
        stack.set(other, array);
        while (++index < arrLength) {
          var arrValue = array[index], othValue = other[index];
          if (customizer) {
            var compared = isPartial ? customizer(othValue, arrValue, index, other, array, stack) : customizer(arrValue, othValue, index, array, other, stack);
          }
          if (compared !== void 0) {
            if (compared) {
              continue;
            }
            result = false;
            break;
          }
          if (seen) {
            if (!arraySome(other, function(othValue2, othIndex) {
              if (!cacheHas(seen, othIndex) && (arrValue === othValue2 || equalFunc(arrValue, othValue2, bitmask, customizer, stack))) {
                return seen.push(othIndex);
              }
            })) {
              result = false;
              break;
            }
          } else if (!(arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
            result = false;
            break;
          }
        }
        stack["delete"](array);
        stack["delete"](other);
        return result;
      }
      module.exports = equalArrays;
    }
  });

  // ../optic_store/node_modules/lodash/_Uint8Array.js
  var require_Uint8Array = __commonJS({
    "../optic_store/node_modules/lodash/_Uint8Array.js"(exports, module) {
      var root = require_root();
      var Uint8Array2 = root.Uint8Array;
      module.exports = Uint8Array2;
    }
  });

  // ../optic_store/node_modules/lodash/_mapToArray.js
  var require_mapToArray = __commonJS({
    "../optic_store/node_modules/lodash/_mapToArray.js"(exports, module) {
      function mapToArray(map) {
        var index = -1, result = Array(map.size);
        map.forEach(function(value, key) {
          result[++index] = [key, value];
        });
        return result;
      }
      module.exports = mapToArray;
    }
  });

  // ../optic_store/node_modules/lodash/_setToArray.js
  var require_setToArray = __commonJS({
    "../optic_store/node_modules/lodash/_setToArray.js"(exports, module) {
      function setToArray(set) {
        var index = -1, result = Array(set.size);
        set.forEach(function(value) {
          result[++index] = value;
        });
        return result;
      }
      module.exports = setToArray;
    }
  });

  // ../optic_store/node_modules/lodash/_equalByTag.js
  var require_equalByTag = __commonJS({
    "../optic_store/node_modules/lodash/_equalByTag.js"(exports, module) {
      var Symbol2 = require_Symbol();
      var Uint8Array2 = require_Uint8Array();
      var eq = require_eq();
      var equalArrays = require_equalArrays();
      var mapToArray = require_mapToArray();
      var setToArray = require_setToArray();
      var COMPARE_PARTIAL_FLAG = 1;
      var COMPARE_UNORDERED_FLAG = 2;
      var boolTag = "[object Boolean]";
      var dateTag = "[object Date]";
      var errorTag = "[object Error]";
      var mapTag = "[object Map]";
      var numberTag = "[object Number]";
      var regexpTag = "[object RegExp]";
      var setTag = "[object Set]";
      var stringTag = "[object String]";
      var symbolTag = "[object Symbol]";
      var arrayBufferTag = "[object ArrayBuffer]";
      var dataViewTag = "[object DataView]";
      var symbolProto = Symbol2 ? Symbol2.prototype : void 0;
      var symbolValueOf = symbolProto ? symbolProto.valueOf : void 0;
      function equalByTag(object, other, tag, bitmask, customizer, equalFunc, stack) {
        switch (tag) {
          case dataViewTag:
            if (object.byteLength != other.byteLength || object.byteOffset != other.byteOffset) {
              return false;
            }
            object = object.buffer;
            other = other.buffer;
          case arrayBufferTag:
            if (object.byteLength != other.byteLength || !equalFunc(new Uint8Array2(object), new Uint8Array2(other))) {
              return false;
            }
            return true;
          case boolTag:
          case dateTag:
          case numberTag:
            return eq(+object, +other);
          case errorTag:
            return object.name == other.name && object.message == other.message;
          case regexpTag:
          case stringTag:
            return object == other + "";
          case mapTag:
            var convert = mapToArray;
          case setTag:
            var isPartial = bitmask & COMPARE_PARTIAL_FLAG;
            convert || (convert = setToArray);
            if (object.size != other.size && !isPartial) {
              return false;
            }
            var stacked = stack.get(object);
            if (stacked) {
              return stacked == other;
            }
            bitmask |= COMPARE_UNORDERED_FLAG;
            stack.set(object, other);
            var result = equalArrays(convert(object), convert(other), bitmask, customizer, equalFunc, stack);
            stack["delete"](object);
            return result;
          case symbolTag:
            if (symbolValueOf) {
              return symbolValueOf.call(object) == symbolValueOf.call(other);
            }
        }
        return false;
      }
      module.exports = equalByTag;
    }
  });

  // ../optic_store/node_modules/lodash/_arrayPush.js
  var require_arrayPush = __commonJS({
    "../optic_store/node_modules/lodash/_arrayPush.js"(exports, module) {
      function arrayPush(array, values) {
        var index = -1, length = values.length, offset = array.length;
        while (++index < length) {
          array[offset + index] = values[index];
        }
        return array;
      }
      module.exports = arrayPush;
    }
  });

  // ../optic_store/node_modules/lodash/isArray.js
  var require_isArray = __commonJS({
    "../optic_store/node_modules/lodash/isArray.js"(exports, module) {
      var isArray = Array.isArray;
      module.exports = isArray;
    }
  });

  // ../optic_store/node_modules/lodash/_baseGetAllKeys.js
  var require_baseGetAllKeys = __commonJS({
    "../optic_store/node_modules/lodash/_baseGetAllKeys.js"(exports, module) {
      var arrayPush = require_arrayPush();
      var isArray = require_isArray();
      function baseGetAllKeys(object, keysFunc, symbolsFunc) {
        var result = keysFunc(object);
        return isArray(object) ? result : arrayPush(result, symbolsFunc(object));
      }
      module.exports = baseGetAllKeys;
    }
  });

  // ../optic_store/node_modules/lodash/_arrayFilter.js
  var require_arrayFilter = __commonJS({
    "../optic_store/node_modules/lodash/_arrayFilter.js"(exports, module) {
      function arrayFilter(array, predicate) {
        var index = -1, length = array == null ? 0 : array.length, resIndex = 0, result = [];
        while (++index < length) {
          var value = array[index];
          if (predicate(value, index, array)) {
            result[resIndex++] = value;
          }
        }
        return result;
      }
      module.exports = arrayFilter;
    }
  });

  // ../optic_store/node_modules/lodash/stubArray.js
  var require_stubArray = __commonJS({
    "../optic_store/node_modules/lodash/stubArray.js"(exports, module) {
      function stubArray() {
        return [];
      }
      module.exports = stubArray;
    }
  });

  // ../optic_store/node_modules/lodash/_getSymbols.js
  var require_getSymbols = __commonJS({
    "../optic_store/node_modules/lodash/_getSymbols.js"(exports, module) {
      var arrayFilter = require_arrayFilter();
      var stubArray = require_stubArray();
      var objectProto = Object.prototype;
      var propertyIsEnumerable = objectProto.propertyIsEnumerable;
      var nativeGetSymbols = Object.getOwnPropertySymbols;
      var getSymbols = !nativeGetSymbols ? stubArray : function(object) {
        if (object == null) {
          return [];
        }
        object = Object(object);
        return arrayFilter(nativeGetSymbols(object), function(symbol) {
          return propertyIsEnumerable.call(object, symbol);
        });
      };
      module.exports = getSymbols;
    }
  });

  // ../optic_store/node_modules/lodash/_baseTimes.js
  var require_baseTimes = __commonJS({
    "../optic_store/node_modules/lodash/_baseTimes.js"(exports, module) {
      function baseTimes(n, iteratee) {
        var index = -1, result = Array(n);
        while (++index < n) {
          result[index] = iteratee(index);
        }
        return result;
      }
      module.exports = baseTimes;
    }
  });

  // ../optic_store/node_modules/lodash/isObjectLike.js
  var require_isObjectLike = __commonJS({
    "../optic_store/node_modules/lodash/isObjectLike.js"(exports, module) {
      function isObjectLike(value) {
        return value != null && typeof value == "object";
      }
      module.exports = isObjectLike;
    }
  });

  // ../optic_store/node_modules/lodash/_baseIsArguments.js
  var require_baseIsArguments = __commonJS({
    "../optic_store/node_modules/lodash/_baseIsArguments.js"(exports, module) {
      var baseGetTag = require_baseGetTag();
      var isObjectLike = require_isObjectLike();
      var argsTag = "[object Arguments]";
      function baseIsArguments(value) {
        return isObjectLike(value) && baseGetTag(value) == argsTag;
      }
      module.exports = baseIsArguments;
    }
  });

  // ../optic_store/node_modules/lodash/isArguments.js
  var require_isArguments = __commonJS({
    "../optic_store/node_modules/lodash/isArguments.js"(exports, module) {
      var baseIsArguments = require_baseIsArguments();
      var isObjectLike = require_isObjectLike();
      var objectProto = Object.prototype;
      var hasOwnProperty = objectProto.hasOwnProperty;
      var propertyIsEnumerable = objectProto.propertyIsEnumerable;
      var isArguments = baseIsArguments(function() {
        return arguments;
      }()) ? baseIsArguments : function(value) {
        return isObjectLike(value) && hasOwnProperty.call(value, "callee") && !propertyIsEnumerable.call(value, "callee");
      };
      module.exports = isArguments;
    }
  });

  // ../optic_store/node_modules/lodash/stubFalse.js
  var require_stubFalse = __commonJS({
    "../optic_store/node_modules/lodash/stubFalse.js"(exports, module) {
      function stubFalse() {
        return false;
      }
      module.exports = stubFalse;
    }
  });

  // ../optic_store/node_modules/lodash/isBuffer.js
  var require_isBuffer = __commonJS({
    "../optic_store/node_modules/lodash/isBuffer.js"(exports, module) {
      var root = require_root();
      var stubFalse = require_stubFalse();
      var freeExports = typeof exports == "object" && exports && !exports.nodeType && exports;
      var freeModule = freeExports && typeof module == "object" && module && !module.nodeType && module;
      var moduleExports = freeModule && freeModule.exports === freeExports;
      var Buffer2 = moduleExports ? root.Buffer : void 0;
      var nativeIsBuffer = Buffer2 ? Buffer2.isBuffer : void 0;
      var isBuffer = nativeIsBuffer || stubFalse;
      module.exports = isBuffer;
    }
  });

  // ../optic_store/node_modules/lodash/_isIndex.js
  var require_isIndex = __commonJS({
    "../optic_store/node_modules/lodash/_isIndex.js"(exports, module) {
      var MAX_SAFE_INTEGER = 9007199254740991;
      var reIsUint = /^(?:0|[1-9]\d*)$/;
      function isIndex(value, length) {
        var type = typeof value;
        length = length == null ? MAX_SAFE_INTEGER : length;
        return !!length && (type == "number" || type != "symbol" && reIsUint.test(value)) && (value > -1 && value % 1 == 0 && value < length);
      }
      module.exports = isIndex;
    }
  });

  // ../optic_store/node_modules/lodash/isLength.js
  var require_isLength = __commonJS({
    "../optic_store/node_modules/lodash/isLength.js"(exports, module) {
      var MAX_SAFE_INTEGER = 9007199254740991;
      function isLength(value) {
        return typeof value == "number" && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
      }
      module.exports = isLength;
    }
  });

  // ../optic_store/node_modules/lodash/_baseIsTypedArray.js
  var require_baseIsTypedArray = __commonJS({
    "../optic_store/node_modules/lodash/_baseIsTypedArray.js"(exports, module) {
      var baseGetTag = require_baseGetTag();
      var isLength = require_isLength();
      var isObjectLike = require_isObjectLike();
      var argsTag = "[object Arguments]";
      var arrayTag = "[object Array]";
      var boolTag = "[object Boolean]";
      var dateTag = "[object Date]";
      var errorTag = "[object Error]";
      var funcTag = "[object Function]";
      var mapTag = "[object Map]";
      var numberTag = "[object Number]";
      var objectTag = "[object Object]";
      var regexpTag = "[object RegExp]";
      var setTag = "[object Set]";
      var stringTag = "[object String]";
      var weakMapTag = "[object WeakMap]";
      var arrayBufferTag = "[object ArrayBuffer]";
      var dataViewTag = "[object DataView]";
      var float32Tag = "[object Float32Array]";
      var float64Tag = "[object Float64Array]";
      var int8Tag = "[object Int8Array]";
      var int16Tag = "[object Int16Array]";
      var int32Tag = "[object Int32Array]";
      var uint8Tag = "[object Uint8Array]";
      var uint8ClampedTag = "[object Uint8ClampedArray]";
      var uint16Tag = "[object Uint16Array]";
      var uint32Tag = "[object Uint32Array]";
      var typedArrayTags = {};
      typedArrayTags[float32Tag] = typedArrayTags[float64Tag] = typedArrayTags[int8Tag] = typedArrayTags[int16Tag] = typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] = typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] = typedArrayTags[uint32Tag] = true;
      typedArrayTags[argsTag] = typedArrayTags[arrayTag] = typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] = typedArrayTags[dataViewTag] = typedArrayTags[dateTag] = typedArrayTags[errorTag] = typedArrayTags[funcTag] = typedArrayTags[mapTag] = typedArrayTags[numberTag] = typedArrayTags[objectTag] = typedArrayTags[regexpTag] = typedArrayTags[setTag] = typedArrayTags[stringTag] = typedArrayTags[weakMapTag] = false;
      function baseIsTypedArray(value) {
        return isObjectLike(value) && isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
      }
      module.exports = baseIsTypedArray;
    }
  });

  // ../optic_store/node_modules/lodash/_baseUnary.js
  var require_baseUnary = __commonJS({
    "../optic_store/node_modules/lodash/_baseUnary.js"(exports, module) {
      function baseUnary(func) {
        return function(value) {
          return func(value);
        };
      }
      module.exports = baseUnary;
    }
  });

  // ../optic_store/node_modules/lodash/_nodeUtil.js
  var require_nodeUtil = __commonJS({
    "../optic_store/node_modules/lodash/_nodeUtil.js"(exports, module) {
      var freeGlobal = require_freeGlobal();
      var freeExports = typeof exports == "object" && exports && !exports.nodeType && exports;
      var freeModule = freeExports && typeof module == "object" && module && !module.nodeType && module;
      var moduleExports = freeModule && freeModule.exports === freeExports;
      var freeProcess = moduleExports && freeGlobal.process;
      var nodeUtil = function() {
        try {
          var types = freeModule && freeModule.require && freeModule.require("util").types;
          if (types) {
            return types;
          }
          return freeProcess && freeProcess.binding && freeProcess.binding("util");
        } catch (e) {
        }
      }();
      module.exports = nodeUtil;
    }
  });

  // ../optic_store/node_modules/lodash/isTypedArray.js
  var require_isTypedArray = __commonJS({
    "../optic_store/node_modules/lodash/isTypedArray.js"(exports, module) {
      var baseIsTypedArray = require_baseIsTypedArray();
      var baseUnary = require_baseUnary();
      var nodeUtil = require_nodeUtil();
      var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;
      var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;
      module.exports = isTypedArray;
    }
  });

  // ../optic_store/node_modules/lodash/_arrayLikeKeys.js
  var require_arrayLikeKeys = __commonJS({
    "../optic_store/node_modules/lodash/_arrayLikeKeys.js"(exports, module) {
      var baseTimes = require_baseTimes();
      var isArguments = require_isArguments();
      var isArray = require_isArray();
      var isBuffer = require_isBuffer();
      var isIndex = require_isIndex();
      var isTypedArray = require_isTypedArray();
      var objectProto = Object.prototype;
      var hasOwnProperty = objectProto.hasOwnProperty;
      function arrayLikeKeys(value, inherited) {
        var isArr = isArray(value), isArg = !isArr && isArguments(value), isBuff = !isArr && !isArg && isBuffer(value), isType = !isArr && !isArg && !isBuff && isTypedArray(value), skipIndexes = isArr || isArg || isBuff || isType, result = skipIndexes ? baseTimes(value.length, String) : [], length = result.length;
        for (var key in value) {
          if ((inherited || hasOwnProperty.call(value, key)) && !(skipIndexes && (key == "length" || isBuff && (key == "offset" || key == "parent") || isType && (key == "buffer" || key == "byteLength" || key == "byteOffset") || isIndex(key, length)))) {
            result.push(key);
          }
        }
        return result;
      }
      module.exports = arrayLikeKeys;
    }
  });

  // ../optic_store/node_modules/lodash/_isPrototype.js
  var require_isPrototype = __commonJS({
    "../optic_store/node_modules/lodash/_isPrototype.js"(exports, module) {
      var objectProto = Object.prototype;
      function isPrototype(value) {
        var Ctor = value && value.constructor, proto = typeof Ctor == "function" && Ctor.prototype || objectProto;
        return value === proto;
      }
      module.exports = isPrototype;
    }
  });

  // ../optic_store/node_modules/lodash/_overArg.js
  var require_overArg = __commonJS({
    "../optic_store/node_modules/lodash/_overArg.js"(exports, module) {
      function overArg(func, transform) {
        return function(arg) {
          return func(transform(arg));
        };
      }
      module.exports = overArg;
    }
  });

  // ../optic_store/node_modules/lodash/_nativeKeys.js
  var require_nativeKeys = __commonJS({
    "../optic_store/node_modules/lodash/_nativeKeys.js"(exports, module) {
      var overArg = require_overArg();
      var nativeKeys = overArg(Object.keys, Object);
      module.exports = nativeKeys;
    }
  });

  // ../optic_store/node_modules/lodash/_baseKeys.js
  var require_baseKeys = __commonJS({
    "../optic_store/node_modules/lodash/_baseKeys.js"(exports, module) {
      var isPrototype = require_isPrototype();
      var nativeKeys = require_nativeKeys();
      var objectProto = Object.prototype;
      var hasOwnProperty = objectProto.hasOwnProperty;
      function baseKeys(object) {
        if (!isPrototype(object)) {
          return nativeKeys(object);
        }
        var result = [];
        for (var key in Object(object)) {
          if (hasOwnProperty.call(object, key) && key != "constructor") {
            result.push(key);
          }
        }
        return result;
      }
      module.exports = baseKeys;
    }
  });

  // ../optic_store/node_modules/lodash/isArrayLike.js
  var require_isArrayLike = __commonJS({
    "../optic_store/node_modules/lodash/isArrayLike.js"(exports, module) {
      var isFunction = require_isFunction();
      var isLength = require_isLength();
      function isArrayLike(value) {
        return value != null && isLength(value.length) && !isFunction(value);
      }
      module.exports = isArrayLike;
    }
  });

  // ../optic_store/node_modules/lodash/keys.js
  var require_keys = __commonJS({
    "../optic_store/node_modules/lodash/keys.js"(exports, module) {
      var arrayLikeKeys = require_arrayLikeKeys();
      var baseKeys = require_baseKeys();
      var isArrayLike = require_isArrayLike();
      function keys(object) {
        return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
      }
      module.exports = keys;
    }
  });

  // ../optic_store/node_modules/lodash/_getAllKeys.js
  var require_getAllKeys = __commonJS({
    "../optic_store/node_modules/lodash/_getAllKeys.js"(exports, module) {
      var baseGetAllKeys = require_baseGetAllKeys();
      var getSymbols = require_getSymbols();
      var keys = require_keys();
      function getAllKeys(object) {
        return baseGetAllKeys(object, keys, getSymbols);
      }
      module.exports = getAllKeys;
    }
  });

  // ../optic_store/node_modules/lodash/_equalObjects.js
  var require_equalObjects = __commonJS({
    "../optic_store/node_modules/lodash/_equalObjects.js"(exports, module) {
      var getAllKeys = require_getAllKeys();
      var COMPARE_PARTIAL_FLAG = 1;
      var objectProto = Object.prototype;
      var hasOwnProperty = objectProto.hasOwnProperty;
      function equalObjects(object, other, bitmask, customizer, equalFunc, stack) {
        var isPartial = bitmask & COMPARE_PARTIAL_FLAG, objProps = getAllKeys(object), objLength = objProps.length, othProps = getAllKeys(other), othLength = othProps.length;
        if (objLength != othLength && !isPartial) {
          return false;
        }
        var index = objLength;
        while (index--) {
          var key = objProps[index];
          if (!(isPartial ? key in other : hasOwnProperty.call(other, key))) {
            return false;
          }
        }
        var objStacked = stack.get(object);
        var othStacked = stack.get(other);
        if (objStacked && othStacked) {
          return objStacked == other && othStacked == object;
        }
        var result = true;
        stack.set(object, other);
        stack.set(other, object);
        var skipCtor = isPartial;
        while (++index < objLength) {
          key = objProps[index];
          var objValue = object[key], othValue = other[key];
          if (customizer) {
            var compared = isPartial ? customizer(othValue, objValue, key, other, object, stack) : customizer(objValue, othValue, key, object, other, stack);
          }
          if (!(compared === void 0 ? objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack) : compared)) {
            result = false;
            break;
          }
          skipCtor || (skipCtor = key == "constructor");
        }
        if (result && !skipCtor) {
          var objCtor = object.constructor, othCtor = other.constructor;
          if (objCtor != othCtor && ("constructor" in object && "constructor" in other) && !(typeof objCtor == "function" && objCtor instanceof objCtor && typeof othCtor == "function" && othCtor instanceof othCtor)) {
            result = false;
          }
        }
        stack["delete"](object);
        stack["delete"](other);
        return result;
      }
      module.exports = equalObjects;
    }
  });

  // ../optic_store/node_modules/lodash/_DataView.js
  var require_DataView = __commonJS({
    "../optic_store/node_modules/lodash/_DataView.js"(exports, module) {
      var getNative = require_getNative();
      var root = require_root();
      var DataView = getNative(root, "DataView");
      module.exports = DataView;
    }
  });

  // ../optic_store/node_modules/lodash/_Promise.js
  var require_Promise = __commonJS({
    "../optic_store/node_modules/lodash/_Promise.js"(exports, module) {
      var getNative = require_getNative();
      var root = require_root();
      var Promise2 = getNative(root, "Promise");
      module.exports = Promise2;
    }
  });

  // ../optic_store/node_modules/lodash/_Set.js
  var require_Set = __commonJS({
    "../optic_store/node_modules/lodash/_Set.js"(exports, module) {
      var getNative = require_getNative();
      var root = require_root();
      var Set2 = getNative(root, "Set");
      module.exports = Set2;
    }
  });

  // ../optic_store/node_modules/lodash/_WeakMap.js
  var require_WeakMap = __commonJS({
    "../optic_store/node_modules/lodash/_WeakMap.js"(exports, module) {
      var getNative = require_getNative();
      var root = require_root();
      var WeakMap = getNative(root, "WeakMap");
      module.exports = WeakMap;
    }
  });

  // ../optic_store/node_modules/lodash/_getTag.js
  var require_getTag = __commonJS({
    "../optic_store/node_modules/lodash/_getTag.js"(exports, module) {
      var DataView = require_DataView();
      var Map = require_Map();
      var Promise2 = require_Promise();
      var Set2 = require_Set();
      var WeakMap = require_WeakMap();
      var baseGetTag = require_baseGetTag();
      var toSource = require_toSource();
      var mapTag = "[object Map]";
      var objectTag = "[object Object]";
      var promiseTag = "[object Promise]";
      var setTag = "[object Set]";
      var weakMapTag = "[object WeakMap]";
      var dataViewTag = "[object DataView]";
      var dataViewCtorString = toSource(DataView);
      var mapCtorString = toSource(Map);
      var promiseCtorString = toSource(Promise2);
      var setCtorString = toSource(Set2);
      var weakMapCtorString = toSource(WeakMap);
      var getTag = baseGetTag;
      if (DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag || Map && getTag(new Map()) != mapTag || Promise2 && getTag(Promise2.resolve()) != promiseTag || Set2 && getTag(new Set2()) != setTag || WeakMap && getTag(new WeakMap()) != weakMapTag) {
        getTag = function(value) {
          var result = baseGetTag(value), Ctor = result == objectTag ? value.constructor : void 0, ctorString = Ctor ? toSource(Ctor) : "";
          if (ctorString) {
            switch (ctorString) {
              case dataViewCtorString:
                return dataViewTag;
              case mapCtorString:
                return mapTag;
              case promiseCtorString:
                return promiseTag;
              case setCtorString:
                return setTag;
              case weakMapCtorString:
                return weakMapTag;
            }
          }
          return result;
        };
      }
      module.exports = getTag;
    }
  });

  // ../optic_store/node_modules/lodash/_baseIsEqualDeep.js
  var require_baseIsEqualDeep = __commonJS({
    "../optic_store/node_modules/lodash/_baseIsEqualDeep.js"(exports, module) {
      var Stack = require_Stack();
      var equalArrays = require_equalArrays();
      var equalByTag = require_equalByTag();
      var equalObjects = require_equalObjects();
      var getTag = require_getTag();
      var isArray = require_isArray();
      var isBuffer = require_isBuffer();
      var isTypedArray = require_isTypedArray();
      var COMPARE_PARTIAL_FLAG = 1;
      var argsTag = "[object Arguments]";
      var arrayTag = "[object Array]";
      var objectTag = "[object Object]";
      var objectProto = Object.prototype;
      var hasOwnProperty = objectProto.hasOwnProperty;
      function baseIsEqualDeep(object, other, bitmask, customizer, equalFunc, stack) {
        var objIsArr = isArray(object), othIsArr = isArray(other), objTag = objIsArr ? arrayTag : getTag(object), othTag = othIsArr ? arrayTag : getTag(other);
        objTag = objTag == argsTag ? objectTag : objTag;
        othTag = othTag == argsTag ? objectTag : othTag;
        var objIsObj = objTag == objectTag, othIsObj = othTag == objectTag, isSameTag = objTag == othTag;
        if (isSameTag && isBuffer(object)) {
          if (!isBuffer(other)) {
            return false;
          }
          objIsArr = true;
          objIsObj = false;
        }
        if (isSameTag && !objIsObj) {
          stack || (stack = new Stack());
          return objIsArr || isTypedArray(object) ? equalArrays(object, other, bitmask, customizer, equalFunc, stack) : equalByTag(object, other, objTag, bitmask, customizer, equalFunc, stack);
        }
        if (!(bitmask & COMPARE_PARTIAL_FLAG)) {
          var objIsWrapped = objIsObj && hasOwnProperty.call(object, "__wrapped__"), othIsWrapped = othIsObj && hasOwnProperty.call(other, "__wrapped__");
          if (objIsWrapped || othIsWrapped) {
            var objUnwrapped = objIsWrapped ? object.value() : object, othUnwrapped = othIsWrapped ? other.value() : other;
            stack || (stack = new Stack());
            return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);
          }
        }
        if (!isSameTag) {
          return false;
        }
        stack || (stack = new Stack());
        return equalObjects(object, other, bitmask, customizer, equalFunc, stack);
      }
      module.exports = baseIsEqualDeep;
    }
  });

  // ../optic_store/node_modules/lodash/_baseIsEqual.js
  var require_baseIsEqual = __commonJS({
    "../optic_store/node_modules/lodash/_baseIsEqual.js"(exports, module) {
      var baseIsEqualDeep = require_baseIsEqualDeep();
      var isObjectLike = require_isObjectLike();
      function baseIsEqual(value, other, bitmask, customizer, stack) {
        if (value === other) {
          return true;
        }
        if (value == null || other == null || !isObjectLike(value) && !isObjectLike(other)) {
          return value !== value && other !== other;
        }
        return baseIsEqualDeep(value, other, bitmask, customizer, baseIsEqual, stack);
      }
      module.exports = baseIsEqual;
    }
  });

  // ../optic_store/node_modules/lodash/_baseIsMatch.js
  var require_baseIsMatch = __commonJS({
    "../optic_store/node_modules/lodash/_baseIsMatch.js"(exports, module) {
      var Stack = require_Stack();
      var baseIsEqual = require_baseIsEqual();
      var COMPARE_PARTIAL_FLAG = 1;
      var COMPARE_UNORDERED_FLAG = 2;
      function baseIsMatch(object, source, matchData, customizer) {
        var index = matchData.length, length = index, noCustomizer = !customizer;
        if (object == null) {
          return !length;
        }
        object = Object(object);
        while (index--) {
          var data = matchData[index];
          if (noCustomizer && data[2] ? data[1] !== object[data[0]] : !(data[0] in object)) {
            return false;
          }
        }
        while (++index < length) {
          data = matchData[index];
          var key = data[0], objValue = object[key], srcValue = data[1];
          if (noCustomizer && data[2]) {
            if (objValue === void 0 && !(key in object)) {
              return false;
            }
          } else {
            var stack = new Stack();
            if (customizer) {
              var result = customizer(objValue, srcValue, key, object, source, stack);
            }
            if (!(result === void 0 ? baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG, customizer, stack) : result)) {
              return false;
            }
          }
        }
        return true;
      }
      module.exports = baseIsMatch;
    }
  });

  // ../optic_store/node_modules/lodash/_isStrictComparable.js
  var require_isStrictComparable = __commonJS({
    "../optic_store/node_modules/lodash/_isStrictComparable.js"(exports, module) {
      var isObject = require_isObject();
      function isStrictComparable(value) {
        return value === value && !isObject(value);
      }
      module.exports = isStrictComparable;
    }
  });

  // ../optic_store/node_modules/lodash/_getMatchData.js
  var require_getMatchData = __commonJS({
    "../optic_store/node_modules/lodash/_getMatchData.js"(exports, module) {
      var isStrictComparable = require_isStrictComparable();
      var keys = require_keys();
      function getMatchData(object) {
        var result = keys(object), length = result.length;
        while (length--) {
          var key = result[length], value = object[key];
          result[length] = [key, value, isStrictComparable(value)];
        }
        return result;
      }
      module.exports = getMatchData;
    }
  });

  // ../optic_store/node_modules/lodash/_matchesStrictComparable.js
  var require_matchesStrictComparable = __commonJS({
    "../optic_store/node_modules/lodash/_matchesStrictComparable.js"(exports, module) {
      function matchesStrictComparable(key, srcValue) {
        return function(object) {
          if (object == null) {
            return false;
          }
          return object[key] === srcValue && (srcValue !== void 0 || key in Object(object));
        };
      }
      module.exports = matchesStrictComparable;
    }
  });

  // ../optic_store/node_modules/lodash/_baseMatches.js
  var require_baseMatches = __commonJS({
    "../optic_store/node_modules/lodash/_baseMatches.js"(exports, module) {
      var baseIsMatch = require_baseIsMatch();
      var getMatchData = require_getMatchData();
      var matchesStrictComparable = require_matchesStrictComparable();
      function baseMatches(source) {
        var matchData = getMatchData(source);
        if (matchData.length == 1 && matchData[0][2]) {
          return matchesStrictComparable(matchData[0][0], matchData[0][1]);
        }
        return function(object) {
          return object === source || baseIsMatch(object, source, matchData);
        };
      }
      module.exports = baseMatches;
    }
  });

  // ../optic_store/node_modules/lodash/isSymbol.js
  var require_isSymbol = __commonJS({
    "../optic_store/node_modules/lodash/isSymbol.js"(exports, module) {
      var baseGetTag = require_baseGetTag();
      var isObjectLike = require_isObjectLike();
      var symbolTag = "[object Symbol]";
      function isSymbol(value) {
        return typeof value == "symbol" || isObjectLike(value) && baseGetTag(value) == symbolTag;
      }
      module.exports = isSymbol;
    }
  });

  // ../optic_store/node_modules/lodash/_isKey.js
  var require_isKey = __commonJS({
    "../optic_store/node_modules/lodash/_isKey.js"(exports, module) {
      var isArray = require_isArray();
      var isSymbol = require_isSymbol();
      var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/;
      var reIsPlainProp = /^\w*$/;
      function isKey(value, object) {
        if (isArray(value)) {
          return false;
        }
        var type = typeof value;
        if (type == "number" || type == "symbol" || type == "boolean" || value == null || isSymbol(value)) {
          return true;
        }
        return reIsPlainProp.test(value) || !reIsDeepProp.test(value) || object != null && value in Object(object);
      }
      module.exports = isKey;
    }
  });

  // ../optic_store/node_modules/lodash/memoize.js
  var require_memoize = __commonJS({
    "../optic_store/node_modules/lodash/memoize.js"(exports, module) {
      var MapCache = require_MapCache();
      var FUNC_ERROR_TEXT = "Expected a function";
      function memoize(func, resolver) {
        if (typeof func != "function" || resolver != null && typeof resolver != "function") {
          throw new TypeError(FUNC_ERROR_TEXT);
        }
        var memoized = function() {
          var args = arguments, key = resolver ? resolver.apply(this, args) : args[0], cache = memoized.cache;
          if (cache.has(key)) {
            return cache.get(key);
          }
          var result = func.apply(this, args);
          memoized.cache = cache.set(key, result) || cache;
          return result;
        };
        memoized.cache = new (memoize.Cache || MapCache)();
        return memoized;
      }
      memoize.Cache = MapCache;
      module.exports = memoize;
    }
  });

  // ../optic_store/node_modules/lodash/_memoizeCapped.js
  var require_memoizeCapped = __commonJS({
    "../optic_store/node_modules/lodash/_memoizeCapped.js"(exports, module) {
      var memoize = require_memoize();
      var MAX_MEMOIZE_SIZE = 500;
      function memoizeCapped(func) {
        var result = memoize(func, function(key) {
          if (cache.size === MAX_MEMOIZE_SIZE) {
            cache.clear();
          }
          return key;
        });
        var cache = result.cache;
        return result;
      }
      module.exports = memoizeCapped;
    }
  });

  // ../optic_store/node_modules/lodash/_stringToPath.js
  var require_stringToPath = __commonJS({
    "../optic_store/node_modules/lodash/_stringToPath.js"(exports, module) {
      var memoizeCapped = require_memoizeCapped();
      var rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;
      var reEscapeChar = /\\(\\)?/g;
      var stringToPath = memoizeCapped(function(string) {
        var result = [];
        if (string.charCodeAt(0) === 46) {
          result.push("");
        }
        string.replace(rePropName, function(match, number, quote, subString) {
          result.push(quote ? subString.replace(reEscapeChar, "$1") : number || match);
        });
        return result;
      });
      module.exports = stringToPath;
    }
  });

  // ../optic_store/node_modules/lodash/_arrayMap.js
  var require_arrayMap = __commonJS({
    "../optic_store/node_modules/lodash/_arrayMap.js"(exports, module) {
      function arrayMap(array, iteratee) {
        var index = -1, length = array == null ? 0 : array.length, result = Array(length);
        while (++index < length) {
          result[index] = iteratee(array[index], index, array);
        }
        return result;
      }
      module.exports = arrayMap;
    }
  });

  // ../optic_store/node_modules/lodash/_baseToString.js
  var require_baseToString = __commonJS({
    "../optic_store/node_modules/lodash/_baseToString.js"(exports, module) {
      var Symbol2 = require_Symbol();
      var arrayMap = require_arrayMap();
      var isArray = require_isArray();
      var isSymbol = require_isSymbol();
      var INFINITY = 1 / 0;
      var symbolProto = Symbol2 ? Symbol2.prototype : void 0;
      var symbolToString = symbolProto ? symbolProto.toString : void 0;
      function baseToString(value) {
        if (typeof value == "string") {
          return value;
        }
        if (isArray(value)) {
          return arrayMap(value, baseToString) + "";
        }
        if (isSymbol(value)) {
          return symbolToString ? symbolToString.call(value) : "";
        }
        var result = value + "";
        return result == "0" && 1 / value == -INFINITY ? "-0" : result;
      }
      module.exports = baseToString;
    }
  });

  // ../optic_store/node_modules/lodash/toString.js
  var require_toString = __commonJS({
    "../optic_store/node_modules/lodash/toString.js"(exports, module) {
      var baseToString = require_baseToString();
      function toString(value) {
        return value == null ? "" : baseToString(value);
      }
      module.exports = toString;
    }
  });

  // ../optic_store/node_modules/lodash/_castPath.js
  var require_castPath = __commonJS({
    "../optic_store/node_modules/lodash/_castPath.js"(exports, module) {
      var isArray = require_isArray();
      var isKey = require_isKey();
      var stringToPath = require_stringToPath();
      var toString = require_toString();
      function castPath(value, object) {
        if (isArray(value)) {
          return value;
        }
        return isKey(value, object) ? [value] : stringToPath(toString(value));
      }
      module.exports = castPath;
    }
  });

  // ../optic_store/node_modules/lodash/_toKey.js
  var require_toKey = __commonJS({
    "../optic_store/node_modules/lodash/_toKey.js"(exports, module) {
      var isSymbol = require_isSymbol();
      var INFINITY = 1 / 0;
      function toKey(value) {
        if (typeof value == "string" || isSymbol(value)) {
          return value;
        }
        var result = value + "";
        return result == "0" && 1 / value == -INFINITY ? "-0" : result;
      }
      module.exports = toKey;
    }
  });

  // ../optic_store/node_modules/lodash/_baseGet.js
  var require_baseGet = __commonJS({
    "../optic_store/node_modules/lodash/_baseGet.js"(exports, module) {
      var castPath = require_castPath();
      var toKey = require_toKey();
      function baseGet(object, path) {
        path = castPath(path, object);
        var index = 0, length = path.length;
        while (object != null && index < length) {
          object = object[toKey(path[index++])];
        }
        return index && index == length ? object : void 0;
      }
      module.exports = baseGet;
    }
  });

  // ../optic_store/node_modules/lodash/get.js
  var require_get = __commonJS({
    "../optic_store/node_modules/lodash/get.js"(exports, module) {
      var baseGet = require_baseGet();
      function get(object, path, defaultValue) {
        var result = object == null ? void 0 : baseGet(object, path);
        return result === void 0 ? defaultValue : result;
      }
      module.exports = get;
    }
  });

  // ../optic_store/node_modules/lodash/_baseHasIn.js
  var require_baseHasIn = __commonJS({
    "../optic_store/node_modules/lodash/_baseHasIn.js"(exports, module) {
      function baseHasIn(object, key) {
        return object != null && key in Object(object);
      }
      module.exports = baseHasIn;
    }
  });

  // ../optic_store/node_modules/lodash/_hasPath.js
  var require_hasPath = __commonJS({
    "../optic_store/node_modules/lodash/_hasPath.js"(exports, module) {
      var castPath = require_castPath();
      var isArguments = require_isArguments();
      var isArray = require_isArray();
      var isIndex = require_isIndex();
      var isLength = require_isLength();
      var toKey = require_toKey();
      function hasPath(object, path, hasFunc) {
        path = castPath(path, object);
        var index = -1, length = path.length, result = false;
        while (++index < length) {
          var key = toKey(path[index]);
          if (!(result = object != null && hasFunc(object, key))) {
            break;
          }
          object = object[key];
        }
        if (result || ++index != length) {
          return result;
        }
        length = object == null ? 0 : object.length;
        return !!length && isLength(length) && isIndex(key, length) && (isArray(object) || isArguments(object));
      }
      module.exports = hasPath;
    }
  });

  // ../optic_store/node_modules/lodash/hasIn.js
  var require_hasIn = __commonJS({
    "../optic_store/node_modules/lodash/hasIn.js"(exports, module) {
      var baseHasIn = require_baseHasIn();
      var hasPath = require_hasPath();
      function hasIn(object, path) {
        return object != null && hasPath(object, path, baseHasIn);
      }
      module.exports = hasIn;
    }
  });

  // ../optic_store/node_modules/lodash/_baseMatchesProperty.js
  var require_baseMatchesProperty = __commonJS({
    "../optic_store/node_modules/lodash/_baseMatchesProperty.js"(exports, module) {
      var baseIsEqual = require_baseIsEqual();
      var get = require_get();
      var hasIn = require_hasIn();
      var isKey = require_isKey();
      var isStrictComparable = require_isStrictComparable();
      var matchesStrictComparable = require_matchesStrictComparable();
      var toKey = require_toKey();
      var COMPARE_PARTIAL_FLAG = 1;
      var COMPARE_UNORDERED_FLAG = 2;
      function baseMatchesProperty(path, srcValue) {
        if (isKey(path) && isStrictComparable(srcValue)) {
          return matchesStrictComparable(toKey(path), srcValue);
        }
        return function(object) {
          var objValue = get(object, path);
          return objValue === void 0 && objValue === srcValue ? hasIn(object, path) : baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG);
        };
      }
      module.exports = baseMatchesProperty;
    }
  });

  // ../optic_store/node_modules/lodash/identity.js
  var require_identity = __commonJS({
    "../optic_store/node_modules/lodash/identity.js"(exports, module) {
      function identity(value) {
        return value;
      }
      module.exports = identity;
    }
  });

  // ../optic_store/node_modules/lodash/_baseProperty.js
  var require_baseProperty = __commonJS({
    "../optic_store/node_modules/lodash/_baseProperty.js"(exports, module) {
      function baseProperty(key) {
        return function(object) {
          return object == null ? void 0 : object[key];
        };
      }
      module.exports = baseProperty;
    }
  });

  // ../optic_store/node_modules/lodash/_basePropertyDeep.js
  var require_basePropertyDeep = __commonJS({
    "../optic_store/node_modules/lodash/_basePropertyDeep.js"(exports, module) {
      var baseGet = require_baseGet();
      function basePropertyDeep(path) {
        return function(object) {
          return baseGet(object, path);
        };
      }
      module.exports = basePropertyDeep;
    }
  });

  // ../optic_store/node_modules/lodash/property.js
  var require_property = __commonJS({
    "../optic_store/node_modules/lodash/property.js"(exports, module) {
      var baseProperty = require_baseProperty();
      var basePropertyDeep = require_basePropertyDeep();
      var isKey = require_isKey();
      var toKey = require_toKey();
      function property(path) {
        return isKey(path) ? baseProperty(toKey(path)) : basePropertyDeep(path);
      }
      module.exports = property;
    }
  });

  // ../optic_store/node_modules/lodash/_baseIteratee.js
  var require_baseIteratee = __commonJS({
    "../optic_store/node_modules/lodash/_baseIteratee.js"(exports, module) {
      var baseMatches = require_baseMatches();
      var baseMatchesProperty = require_baseMatchesProperty();
      var identity = require_identity();
      var isArray = require_isArray();
      var property = require_property();
      function baseIteratee(value) {
        if (typeof value == "function") {
          return value;
        }
        if (value == null) {
          return identity;
        }
        if (typeof value == "object") {
          return isArray(value) ? baseMatchesProperty(value[0], value[1]) : baseMatches(value);
        }
        return property(value);
      }
      module.exports = baseIteratee;
    }
  });

  // ../optic_store/node_modules/lodash/_baseSum.js
  var require_baseSum = __commonJS({
    "../optic_store/node_modules/lodash/_baseSum.js"(exports, module) {
      function baseSum(array, iteratee) {
        var result, index = -1, length = array.length;
        while (++index < length) {
          var current = iteratee(array[index]);
          if (current !== void 0) {
            result = result === void 0 ? current : result + current;
          }
        }
        return result;
      }
      module.exports = baseSum;
    }
  });

  // ../optic_store/node_modules/lodash/sumBy.js
  var require_sumBy = __commonJS({
    "../optic_store/node_modules/lodash/sumBy.js"(exports, module) {
      var baseIteratee = require_baseIteratee();
      var baseSum = require_baseSum();
      function sumBy11(array, iteratee) {
        return array && array.length ? baseSum(array, baseIteratee(iteratee, 2)) : 0;
      }
      module.exports = sumBy11;
    }
  });

  // ../optic_store/node_modules/lodash/_defineProperty.js
  var require_defineProperty = __commonJS({
    "../optic_store/node_modules/lodash/_defineProperty.js"(exports, module) {
      var getNative = require_getNative();
      var defineProperty = function() {
        try {
          var func = getNative(Object, "defineProperty");
          func({}, "", {});
          return func;
        } catch (e) {
        }
      }();
      module.exports = defineProperty;
    }
  });

  // ../optic_store/node_modules/lodash/_baseAssignValue.js
  var require_baseAssignValue = __commonJS({
    "../optic_store/node_modules/lodash/_baseAssignValue.js"(exports, module) {
      var defineProperty = require_defineProperty();
      function baseAssignValue(object, key, value) {
        if (key == "__proto__" && defineProperty) {
          defineProperty(object, key, {
            "configurable": true,
            "enumerable": true,
            "value": value,
            "writable": true
          });
        } else {
          object[key] = value;
        }
      }
      module.exports = baseAssignValue;
    }
  });

  // ../optic_store/node_modules/lodash/_arrayAggregator.js
  var require_arrayAggregator = __commonJS({
    "../optic_store/node_modules/lodash/_arrayAggregator.js"(exports, module) {
      function arrayAggregator(array, setter, iteratee, accumulator) {
        var index = -1, length = array == null ? 0 : array.length;
        while (++index < length) {
          var value = array[index];
          setter(accumulator, value, iteratee(value), array);
        }
        return accumulator;
      }
      module.exports = arrayAggregator;
    }
  });

  // ../optic_store/node_modules/lodash/_createBaseFor.js
  var require_createBaseFor = __commonJS({
    "../optic_store/node_modules/lodash/_createBaseFor.js"(exports, module) {
      function createBaseFor(fromRight) {
        return function(object, iteratee, keysFunc) {
          var index = -1, iterable = Object(object), props = keysFunc(object), length = props.length;
          while (length--) {
            var key = props[fromRight ? length : ++index];
            if (iteratee(iterable[key], key, iterable) === false) {
              break;
            }
          }
          return object;
        };
      }
      module.exports = createBaseFor;
    }
  });

  // ../optic_store/node_modules/lodash/_baseFor.js
  var require_baseFor = __commonJS({
    "../optic_store/node_modules/lodash/_baseFor.js"(exports, module) {
      var createBaseFor = require_createBaseFor();
      var baseFor = createBaseFor();
      module.exports = baseFor;
    }
  });

  // ../optic_store/node_modules/lodash/_baseForOwn.js
  var require_baseForOwn = __commonJS({
    "../optic_store/node_modules/lodash/_baseForOwn.js"(exports, module) {
      var baseFor = require_baseFor();
      var keys = require_keys();
      function baseForOwn(object, iteratee) {
        return object && baseFor(object, iteratee, keys);
      }
      module.exports = baseForOwn;
    }
  });

  // ../optic_store/node_modules/lodash/_createBaseEach.js
  var require_createBaseEach = __commonJS({
    "../optic_store/node_modules/lodash/_createBaseEach.js"(exports, module) {
      var isArrayLike = require_isArrayLike();
      function createBaseEach(eachFunc, fromRight) {
        return function(collection, iteratee) {
          if (collection == null) {
            return collection;
          }
          if (!isArrayLike(collection)) {
            return eachFunc(collection, iteratee);
          }
          var length = collection.length, index = fromRight ? length : -1, iterable = Object(collection);
          while (fromRight ? index-- : ++index < length) {
            if (iteratee(iterable[index], index, iterable) === false) {
              break;
            }
          }
          return collection;
        };
      }
      module.exports = createBaseEach;
    }
  });

  // ../optic_store/node_modules/lodash/_baseEach.js
  var require_baseEach = __commonJS({
    "../optic_store/node_modules/lodash/_baseEach.js"(exports, module) {
      var baseForOwn = require_baseForOwn();
      var createBaseEach = require_createBaseEach();
      var baseEach = createBaseEach(baseForOwn);
      module.exports = baseEach;
    }
  });

  // ../optic_store/node_modules/lodash/_baseAggregator.js
  var require_baseAggregator = __commonJS({
    "../optic_store/node_modules/lodash/_baseAggregator.js"(exports, module) {
      var baseEach = require_baseEach();
      function baseAggregator(collection, setter, iteratee, accumulator) {
        baseEach(collection, function(value, key, collection2) {
          setter(accumulator, value, iteratee(value), collection2);
        });
        return accumulator;
      }
      module.exports = baseAggregator;
    }
  });

  // ../optic_store/node_modules/lodash/_createAggregator.js
  var require_createAggregator = __commonJS({
    "../optic_store/node_modules/lodash/_createAggregator.js"(exports, module) {
      var arrayAggregator = require_arrayAggregator();
      var baseAggregator = require_baseAggregator();
      var baseIteratee = require_baseIteratee();
      var isArray = require_isArray();
      function createAggregator(setter, initializer) {
        return function(collection, iteratee) {
          var func = isArray(collection) ? arrayAggregator : baseAggregator, accumulator = initializer ? initializer() : {};
          return func(collection, setter, baseIteratee(iteratee, 2), accumulator);
        };
      }
      module.exports = createAggregator;
    }
  });

  // ../optic_store/node_modules/lodash/groupBy.js
  var require_groupBy = __commonJS({
    "../optic_store/node_modules/lodash/groupBy.js"(exports, module) {
      var baseAssignValue = require_baseAssignValue();
      var createAggregator = require_createAggregator();
      var objectProto = Object.prototype;
      var hasOwnProperty = objectProto.hasOwnProperty;
      var groupBy3 = createAggregator(function(result, value, key) {
        if (hasOwnProperty.call(result, key)) {
          result[key].push(value);
        } else {
          baseAssignValue(result, key, [value]);
        }
      });
      module.exports = groupBy3;
    }
  });

  // ../optic_store/node_modules/lodash/mapValues.js
  var require_mapValues = __commonJS({
    "../optic_store/node_modules/lodash/mapValues.js"(exports, module) {
      var baseAssignValue = require_baseAssignValue();
      var baseForOwn = require_baseForOwn();
      var baseIteratee = require_baseIteratee();
      function mapValues4(object, iteratee) {
        var result = {};
        iteratee = baseIteratee(iteratee, 3);
        baseForOwn(object, function(value, key, object2) {
          baseAssignValue(result, key, iteratee(value, key, object2));
        });
        return result;
      }
      module.exports = mapValues4;
    }
  });

  // ../optic_store/node_modules/lodash/_assignValue.js
  var require_assignValue = __commonJS({
    "../optic_store/node_modules/lodash/_assignValue.js"(exports, module) {
      var baseAssignValue = require_baseAssignValue();
      var eq = require_eq();
      var objectProto = Object.prototype;
      var hasOwnProperty = objectProto.hasOwnProperty;
      function assignValue(object, key, value) {
        var objValue = object[key];
        if (!(hasOwnProperty.call(object, key) && eq(objValue, value)) || value === void 0 && !(key in object)) {
          baseAssignValue(object, key, value);
        }
      }
      module.exports = assignValue;
    }
  });

  // ../optic_store/node_modules/lodash/_baseSet.js
  var require_baseSet = __commonJS({
    "../optic_store/node_modules/lodash/_baseSet.js"(exports, module) {
      var assignValue = require_assignValue();
      var castPath = require_castPath();
      var isIndex = require_isIndex();
      var isObject = require_isObject();
      var toKey = require_toKey();
      function baseSet(object, path, value, customizer) {
        if (!isObject(object)) {
          return object;
        }
        path = castPath(path, object);
        var index = -1, length = path.length, lastIndex = length - 1, nested = object;
        while (nested != null && ++index < length) {
          var key = toKey(path[index]), newValue = value;
          if (key === "__proto__" || key === "constructor" || key === "prototype") {
            return object;
          }
          if (index != lastIndex) {
            var objValue = nested[key];
            newValue = customizer ? customizer(objValue, key, nested) : void 0;
            if (newValue === void 0) {
              newValue = isObject(objValue) ? objValue : isIndex(path[index + 1]) ? [] : {};
            }
          }
          assignValue(nested, key, newValue);
          nested = nested[key];
        }
        return object;
      }
      module.exports = baseSet;
    }
  });

  // ../optic_store/node_modules/lodash/_basePickBy.js
  var require_basePickBy = __commonJS({
    "../optic_store/node_modules/lodash/_basePickBy.js"(exports, module) {
      var baseGet = require_baseGet();
      var baseSet = require_baseSet();
      var castPath = require_castPath();
      function basePickBy(object, paths, predicate) {
        var index = -1, length = paths.length, result = {};
        while (++index < length) {
          var path = paths[index], value = baseGet(object, path);
          if (predicate(value, path)) {
            baseSet(result, castPath(path, object), value);
          }
        }
        return result;
      }
      module.exports = basePickBy;
    }
  });

  // ../optic_store/node_modules/lodash/_getPrototype.js
  var require_getPrototype = __commonJS({
    "../optic_store/node_modules/lodash/_getPrototype.js"(exports, module) {
      var overArg = require_overArg();
      var getPrototype = overArg(Object.getPrototypeOf, Object);
      module.exports = getPrototype;
    }
  });

  // ../optic_store/node_modules/lodash/_getSymbolsIn.js
  var require_getSymbolsIn = __commonJS({
    "../optic_store/node_modules/lodash/_getSymbolsIn.js"(exports, module) {
      var arrayPush = require_arrayPush();
      var getPrototype = require_getPrototype();
      var getSymbols = require_getSymbols();
      var stubArray = require_stubArray();
      var nativeGetSymbols = Object.getOwnPropertySymbols;
      var getSymbolsIn = !nativeGetSymbols ? stubArray : function(object) {
        var result = [];
        while (object) {
          arrayPush(result, getSymbols(object));
          object = getPrototype(object);
        }
        return result;
      };
      module.exports = getSymbolsIn;
    }
  });

  // ../optic_store/node_modules/lodash/_nativeKeysIn.js
  var require_nativeKeysIn = __commonJS({
    "../optic_store/node_modules/lodash/_nativeKeysIn.js"(exports, module) {
      function nativeKeysIn(object) {
        var result = [];
        if (object != null) {
          for (var key in Object(object)) {
            result.push(key);
          }
        }
        return result;
      }
      module.exports = nativeKeysIn;
    }
  });

  // ../optic_store/node_modules/lodash/_baseKeysIn.js
  var require_baseKeysIn = __commonJS({
    "../optic_store/node_modules/lodash/_baseKeysIn.js"(exports, module) {
      var isObject = require_isObject();
      var isPrototype = require_isPrototype();
      var nativeKeysIn = require_nativeKeysIn();
      var objectProto = Object.prototype;
      var hasOwnProperty = objectProto.hasOwnProperty;
      function baseKeysIn(object) {
        if (!isObject(object)) {
          return nativeKeysIn(object);
        }
        var isProto = isPrototype(object), result = [];
        for (var key in object) {
          if (!(key == "constructor" && (isProto || !hasOwnProperty.call(object, key)))) {
            result.push(key);
          }
        }
        return result;
      }
      module.exports = baseKeysIn;
    }
  });

  // ../optic_store/node_modules/lodash/keysIn.js
  var require_keysIn = __commonJS({
    "../optic_store/node_modules/lodash/keysIn.js"(exports, module) {
      var arrayLikeKeys = require_arrayLikeKeys();
      var baseKeysIn = require_baseKeysIn();
      var isArrayLike = require_isArrayLike();
      function keysIn(object) {
        return isArrayLike(object) ? arrayLikeKeys(object, true) : baseKeysIn(object);
      }
      module.exports = keysIn;
    }
  });

  // ../optic_store/node_modules/lodash/_getAllKeysIn.js
  var require_getAllKeysIn = __commonJS({
    "../optic_store/node_modules/lodash/_getAllKeysIn.js"(exports, module) {
      var baseGetAllKeys = require_baseGetAllKeys();
      var getSymbolsIn = require_getSymbolsIn();
      var keysIn = require_keysIn();
      function getAllKeysIn(object) {
        return baseGetAllKeys(object, keysIn, getSymbolsIn);
      }
      module.exports = getAllKeysIn;
    }
  });

  // ../optic_store/node_modules/lodash/pickBy.js
  var require_pickBy = __commonJS({
    "../optic_store/node_modules/lodash/pickBy.js"(exports, module) {
      var arrayMap = require_arrayMap();
      var baseIteratee = require_baseIteratee();
      var basePickBy = require_basePickBy();
      var getAllKeysIn = require_getAllKeysIn();
      function pickBy2(object, predicate) {
        if (object == null) {
          return {};
        }
        var props = arrayMap(getAllKeysIn(object), function(prop) {
          return [prop];
        });
        predicate = baseIteratee(predicate);
        return basePickBy(object, props, function(value, path) {
          return predicate(value, path[0]);
        });
      }
      module.exports = pickBy2;
    }
  });

  // ../optic_store/node_modules/lodash/_basePick.js
  var require_basePick = __commonJS({
    "../optic_store/node_modules/lodash/_basePick.js"(exports, module) {
      var basePickBy = require_basePickBy();
      var hasIn = require_hasIn();
      function basePick(object, paths) {
        return basePickBy(object, paths, function(value, path) {
          return hasIn(object, path);
        });
      }
      module.exports = basePick;
    }
  });

  // ../optic_store/node_modules/lodash/_isFlattenable.js
  var require_isFlattenable = __commonJS({
    "../optic_store/node_modules/lodash/_isFlattenable.js"(exports, module) {
      var Symbol2 = require_Symbol();
      var isArguments = require_isArguments();
      var isArray = require_isArray();
      var spreadableSymbol = Symbol2 ? Symbol2.isConcatSpreadable : void 0;
      function isFlattenable(value) {
        return isArray(value) || isArguments(value) || !!(spreadableSymbol && value && value[spreadableSymbol]);
      }
      module.exports = isFlattenable;
    }
  });

  // ../optic_store/node_modules/lodash/_baseFlatten.js
  var require_baseFlatten = __commonJS({
    "../optic_store/node_modules/lodash/_baseFlatten.js"(exports, module) {
      var arrayPush = require_arrayPush();
      var isFlattenable = require_isFlattenable();
      function baseFlatten(array, depth, predicate, isStrict, result) {
        var index = -1, length = array.length;
        predicate || (predicate = isFlattenable);
        result || (result = []);
        while (++index < length) {
          var value = array[index];
          if (depth > 0 && predicate(value)) {
            if (depth > 1) {
              baseFlatten(value, depth - 1, predicate, isStrict, result);
            } else {
              arrayPush(result, value);
            }
          } else if (!isStrict) {
            result[result.length] = value;
          }
        }
        return result;
      }
      module.exports = baseFlatten;
    }
  });

  // ../optic_store/node_modules/lodash/flatten.js
  var require_flatten = __commonJS({
    "../optic_store/node_modules/lodash/flatten.js"(exports, module) {
      var baseFlatten = require_baseFlatten();
      function flatten(array) {
        var length = array == null ? 0 : array.length;
        return length ? baseFlatten(array, 1) : [];
      }
      module.exports = flatten;
    }
  });

  // ../optic_store/node_modules/lodash/_apply.js
  var require_apply = __commonJS({
    "../optic_store/node_modules/lodash/_apply.js"(exports, module) {
      function apply(func, thisArg, args) {
        switch (args.length) {
          case 0:
            return func.call(thisArg);
          case 1:
            return func.call(thisArg, args[0]);
          case 2:
            return func.call(thisArg, args[0], args[1]);
          case 3:
            return func.call(thisArg, args[0], args[1], args[2]);
        }
        return func.apply(thisArg, args);
      }
      module.exports = apply;
    }
  });

  // ../optic_store/node_modules/lodash/_overRest.js
  var require_overRest = __commonJS({
    "../optic_store/node_modules/lodash/_overRest.js"(exports, module) {
      var apply = require_apply();
      var nativeMax = Math.max;
      function overRest(func, start, transform) {
        start = nativeMax(start === void 0 ? func.length - 1 : start, 0);
        return function() {
          var args = arguments, index = -1, length = nativeMax(args.length - start, 0), array = Array(length);
          while (++index < length) {
            array[index] = args[start + index];
          }
          index = -1;
          var otherArgs = Array(start + 1);
          while (++index < start) {
            otherArgs[index] = args[index];
          }
          otherArgs[start] = transform(array);
          return apply(func, this, otherArgs);
        };
      }
      module.exports = overRest;
    }
  });

  // ../optic_store/node_modules/lodash/constant.js
  var require_constant = __commonJS({
    "../optic_store/node_modules/lodash/constant.js"(exports, module) {
      function constant(value) {
        return function() {
          return value;
        };
      }
      module.exports = constant;
    }
  });

  // ../optic_store/node_modules/lodash/_baseSetToString.js
  var require_baseSetToString = __commonJS({
    "../optic_store/node_modules/lodash/_baseSetToString.js"(exports, module) {
      var constant = require_constant();
      var defineProperty = require_defineProperty();
      var identity = require_identity();
      var baseSetToString = !defineProperty ? identity : function(func, string) {
        return defineProperty(func, "toString", {
          "configurable": true,
          "enumerable": false,
          "value": constant(string),
          "writable": true
        });
      };
      module.exports = baseSetToString;
    }
  });

  // ../optic_store/node_modules/lodash/_shortOut.js
  var require_shortOut = __commonJS({
    "../optic_store/node_modules/lodash/_shortOut.js"(exports, module) {
      var HOT_COUNT = 800;
      var HOT_SPAN = 16;
      var nativeNow = Date.now;
      function shortOut(func) {
        var count = 0, lastCalled = 0;
        return function() {
          var stamp = nativeNow(), remaining = HOT_SPAN - (stamp - lastCalled);
          lastCalled = stamp;
          if (remaining > 0) {
            if (++count >= HOT_COUNT) {
              return arguments[0];
            }
          } else {
            count = 0;
          }
          return func.apply(void 0, arguments);
        };
      }
      module.exports = shortOut;
    }
  });

  // ../optic_store/node_modules/lodash/_setToString.js
  var require_setToString = __commonJS({
    "../optic_store/node_modules/lodash/_setToString.js"(exports, module) {
      var baseSetToString = require_baseSetToString();
      var shortOut = require_shortOut();
      var setToString = shortOut(baseSetToString);
      module.exports = setToString;
    }
  });

  // ../optic_store/node_modules/lodash/_flatRest.js
  var require_flatRest = __commonJS({
    "../optic_store/node_modules/lodash/_flatRest.js"(exports, module) {
      var flatten = require_flatten();
      var overRest = require_overRest();
      var setToString = require_setToString();
      function flatRest(func) {
        return setToString(overRest(func, void 0, flatten), func + "");
      }
      module.exports = flatRest;
    }
  });

  // ../optic_store/node_modules/lodash/pick.js
  var require_pick = __commonJS({
    "../optic_store/node_modules/lodash/pick.js"(exports, module) {
      var basePick = require_basePick();
      var flatRest = require_flatRest();
      var pick3 = flatRest(function(object, paths) {
        return object == null ? {} : basePick(object, paths);
      });
      module.exports = pick3;
    }
  });

  // ../optic_store/node_modules/lodash/isEqual.js
  var require_isEqual = __commonJS({
    "../optic_store/node_modules/lodash/isEqual.js"(exports, module) {
      var baseIsEqual = require_baseIsEqual();
      function isEqual2(value, other) {
        return baseIsEqual(value, other);
      }
      module.exports = isEqual2;
    }
  });

  // ../optic_store/node_modules/lodash/keyBy.js
  var require_keyBy = __commonJS({
    "../optic_store/node_modules/lodash/keyBy.js"(exports, module) {
      var baseAssignValue = require_baseAssignValue();
      var createAggregator = require_createAggregator();
      var keyBy2 = createAggregator(function(result, value, key) {
        baseAssignValue(result, key, value);
      });
      module.exports = keyBy2;
    }
  });

  // ../optic_store/node_modules/jsbarcode/bin/barcodes/Barcode.js
  var require_Barcode = __commonJS({
    "../optic_store/node_modules/jsbarcode/bin/barcodes/Barcode.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }
      var Barcode = function Barcode2(data, options) {
        _classCallCheck(this, Barcode2);
        this.data = data;
        this.text = options.text || data;
        this.options = options;
      };
      exports.default = Barcode;
    }
  });

  // ../optic_store/node_modules/jsbarcode/bin/barcodes/CODE39/index.js
  var require_CODE39 = __commonJS({
    "../optic_store/node_modules/jsbarcode/bin/barcodes/CODE39/index.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.CODE39 = void 0;
      var _createClass = function() {
        function defineProperties(target, props) {
          for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor)
              descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
          }
        }
        return function(Constructor, protoProps, staticProps) {
          if (protoProps)
            defineProperties(Constructor.prototype, protoProps);
          if (staticProps)
            defineProperties(Constructor, staticProps);
          return Constructor;
        };
      }();
      var _Barcode2 = require_Barcode();
      var _Barcode3 = _interopRequireDefault(_Barcode2);
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }
      function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }
      function _possibleConstructorReturn(self2, call) {
        if (!self2) {
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }
        return call && (typeof call === "object" || typeof call === "function") ? call : self2;
      }
      function _inherits(subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
          throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
        }
        subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });
        if (superClass)
          Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
      }
      var CODE39 = function(_Barcode) {
        _inherits(CODE392, _Barcode);
        function CODE392(data, options) {
          _classCallCheck(this, CODE392);
          data = data.toUpperCase();
          if (options.mod43) {
            data += getCharacter(mod43checksum(data));
          }
          return _possibleConstructorReturn(this, (CODE392.__proto__ || Object.getPrototypeOf(CODE392)).call(this, data, options));
        }
        _createClass(CODE392, [{
          key: "encode",
          value: function encode() {
            var result = getEncoding("*");
            for (var i = 0; i < this.data.length; i++) {
              result += getEncoding(this.data[i]) + "0";
            }
            result += getEncoding("*");
            return {
              data: result,
              text: this.text
            };
          }
        }, {
          key: "valid",
          value: function valid() {
            return this.data.search(/^[0-9A-Z\-\.\ \$\/\+\%]+$/) !== -1;
          }
        }]);
        return CODE392;
      }(_Barcode3.default);
      var characters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "-", ".", " ", "$", "/", "+", "%", "*"];
      var encodings = [20957, 29783, 23639, 30485, 20951, 29813, 23669, 20855, 29789, 23645, 29975, 23831, 30533, 22295, 30149, 24005, 21623, 29981, 23837, 22301, 30023, 23879, 30545, 22343, 30161, 24017, 21959, 30065, 23921, 22385, 29015, 18263, 29141, 17879, 29045, 18293, 17783, 29021, 18269, 17477, 17489, 17681, 20753, 35770];
      function getEncoding(character) {
        return getBinary(characterValue(character));
      }
      function getBinary(characterValue2) {
        return encodings[characterValue2].toString(2);
      }
      function getCharacter(characterValue2) {
        return characters[characterValue2];
      }
      function characterValue(character) {
        return characters.indexOf(character);
      }
      function mod43checksum(data) {
        var checksum = 0;
        for (var i = 0; i < data.length; i++) {
          checksum += characterValue(data[i]);
        }
        checksum = checksum % 43;
        return checksum;
      }
      exports.CODE39 = CODE39;
    }
  });

  // ../optic_store/node_modules/jsbarcode/bin/barcodes/CODE128/constants.js
  var require_constants = __commonJS({
    "../optic_store/node_modules/jsbarcode/bin/barcodes/CODE128/constants.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      var _SET_BY_CODE;
      function _defineProperty(obj, key, value) {
        if (key in obj) {
          Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
        } else {
          obj[key] = value;
        }
        return obj;
      }
      var SET_A = exports.SET_A = 0;
      var SET_B = exports.SET_B = 1;
      var SET_C = exports.SET_C = 2;
      var SHIFT = exports.SHIFT = 98;
      var START_A = exports.START_A = 103;
      var START_B = exports.START_B = 104;
      var START_C = exports.START_C = 105;
      var MODULO = exports.MODULO = 103;
      var STOP = exports.STOP = 106;
      var FNC1 = exports.FNC1 = 207;
      var SET_BY_CODE = exports.SET_BY_CODE = (_SET_BY_CODE = {}, _defineProperty(_SET_BY_CODE, START_A, SET_A), _defineProperty(_SET_BY_CODE, START_B, SET_B), _defineProperty(_SET_BY_CODE, START_C, SET_C), _SET_BY_CODE);
      var SWAP = exports.SWAP = {
        101: SET_A,
        100: SET_B,
        99: SET_C
      };
      var A_START_CHAR = exports.A_START_CHAR = String.fromCharCode(208);
      var B_START_CHAR = exports.B_START_CHAR = String.fromCharCode(209);
      var C_START_CHAR = exports.C_START_CHAR = String.fromCharCode(210);
      var A_CHARS = exports.A_CHARS = "[\0-_\xC8-\xCF]";
      var B_CHARS = exports.B_CHARS = "[ -\x7F\xC8-\xCF]";
      var C_CHARS = exports.C_CHARS = "(\xCF*[0-9]{2}\xCF*)";
      var BARS = exports.BARS = [11011001100, 11001101100, 11001100110, 10010011e3, 10010001100, 10001001100, 10011001e3, 10011000100, 10001100100, 11001001e3, 11001000100, 11000100100, 10110011100, 10011011100, 10011001110, 10111001100, 10011101100, 10011100110, 11001110010, 11001011100, 11001001110, 11011100100, 11001110100, 11101101110, 11101001100, 11100101100, 11100100110, 11101100100, 11100110100, 11100110010, 11011011e3, 11011000110, 11000110110, 10100011e3, 10001011e3, 10001000110, 10110001e3, 10001101e3, 10001100010, 11010001e3, 11000101e3, 11000100010, 10110111e3, 10110001110, 10001101110, 10111011e3, 10111000110, 10001110110, 11101110110, 11010001110, 11000101110, 11011101e3, 11011100010, 11011101110, 11101011e3, 11101000110, 11100010110, 11101101e3, 11101100010, 11100011010, 11101111010, 11001000010, 11110001010, 1010011e4, 10100001100, 1001011e4, 10010000110, 10000101100, 10000100110, 1011001e4, 10110000100, 1001101e4, 10011000010, 10000110100, 10000110010, 11000010010, 1100101e4, 11110111010, 11000010100, 10001111010, 10100111100, 10010111100, 10010011110, 10111100100, 10011110100, 10011110010, 11110100100, 11110010100, 11110010010, 11011011110, 11011110110, 11110110110, 10101111e3, 10100011110, 10001011110, 10111101e3, 10111100010, 11110101e3, 11110100010, 10111011110, 10111101110, 11101011110, 11110101110, 11010000100, 1101001e4, 11010011100, 1100011101011];
    }
  });

  // ../optic_store/node_modules/jsbarcode/bin/barcodes/CODE128/CODE128.js
  var require_CODE128 = __commonJS({
    "../optic_store/node_modules/jsbarcode/bin/barcodes/CODE128/CODE128.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      var _createClass = function() {
        function defineProperties(target, props) {
          for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor)
              descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
          }
        }
        return function(Constructor, protoProps, staticProps) {
          if (protoProps)
            defineProperties(Constructor.prototype, protoProps);
          if (staticProps)
            defineProperties(Constructor, staticProps);
          return Constructor;
        };
      }();
      var _Barcode2 = require_Barcode();
      var _Barcode3 = _interopRequireDefault(_Barcode2);
      var _constants = require_constants();
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }
      function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }
      function _possibleConstructorReturn(self2, call) {
        if (!self2) {
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }
        return call && (typeof call === "object" || typeof call === "function") ? call : self2;
      }
      function _inherits(subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
          throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
        }
        subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });
        if (superClass)
          Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
      }
      var CODE128 = function(_Barcode) {
        _inherits(CODE1282, _Barcode);
        function CODE1282(data, options) {
          _classCallCheck(this, CODE1282);
          var _this = _possibleConstructorReturn(this, (CODE1282.__proto__ || Object.getPrototypeOf(CODE1282)).call(this, data.substring(1), options));
          _this.bytes = data.split("").map(function(char) {
            return char.charCodeAt(0);
          });
          return _this;
        }
        _createClass(CODE1282, [{
          key: "valid",
          value: function valid() {
            return /^[\x00-\x7F\xC8-\xD3]+$/.test(this.data);
          }
        }, {
          key: "encode",
          value: function encode() {
            var bytes = this.bytes;
            var startIndex = bytes.shift() - 105;
            var startSet = _constants.SET_BY_CODE[startIndex];
            if (startSet === void 0) {
              throw new RangeError("The encoding does not start with a start character.");
            }
            if (this.shouldEncodeAsEan128() === true) {
              bytes.unshift(_constants.FNC1);
            }
            var encodingResult = CODE1282.next(bytes, 1, startSet);
            return {
              text: this.text === this.data ? this.text.replace(/[^\x20-\x7E]/g, "") : this.text,
              data: CODE1282.getBar(startIndex) + encodingResult.result + CODE1282.getBar((encodingResult.checksum + startIndex) % _constants.MODULO) + CODE1282.getBar(_constants.STOP)
            };
          }
        }, {
          key: "shouldEncodeAsEan128",
          value: function shouldEncodeAsEan128() {
            var isEAN128 = this.options.ean128 || false;
            if (typeof isEAN128 === "string") {
              isEAN128 = isEAN128.toLowerCase() === "true";
            }
            return isEAN128;
          }
        }], [{
          key: "getBar",
          value: function getBar(index) {
            return _constants.BARS[index] ? _constants.BARS[index].toString() : "";
          }
        }, {
          key: "correctIndex",
          value: function correctIndex(bytes, set) {
            if (set === _constants.SET_A) {
              var charCode = bytes.shift();
              return charCode < 32 ? charCode + 64 : charCode - 32;
            } else if (set === _constants.SET_B) {
              return bytes.shift() - 32;
            } else {
              return (bytes.shift() - 48) * 10 + bytes.shift() - 48;
            }
          }
        }, {
          key: "next",
          value: function next(bytes, pos, set) {
            if (!bytes.length) {
              return { result: "", checksum: 0 };
            }
            var nextCode = void 0, index = void 0;
            if (bytes[0] >= 200) {
              index = bytes.shift() - 105;
              var nextSet = _constants.SWAP[index];
              if (nextSet !== void 0) {
                nextCode = CODE1282.next(bytes, pos + 1, nextSet);
              } else {
                if ((set === _constants.SET_A || set === _constants.SET_B) && index === _constants.SHIFT) {
                  bytes[0] = set === _constants.SET_A ? bytes[0] > 95 ? bytes[0] - 96 : bytes[0] : bytes[0] < 32 ? bytes[0] + 96 : bytes[0];
                }
                nextCode = CODE1282.next(bytes, pos + 1, set);
              }
            } else {
              index = CODE1282.correctIndex(bytes, set);
              nextCode = CODE1282.next(bytes, pos + 1, set);
            }
            var enc = CODE1282.getBar(index);
            var weight = index * pos;
            return {
              result: enc + nextCode.result,
              checksum: weight + nextCode.checksum
            };
          }
        }]);
        return CODE1282;
      }(_Barcode3.default);
      exports.default = CODE128;
    }
  });

  // ../optic_store/node_modules/jsbarcode/bin/barcodes/CODE128/auto.js
  var require_auto = __commonJS({
    "../optic_store/node_modules/jsbarcode/bin/barcodes/CODE128/auto.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      var _constants = require_constants();
      var matchSetALength = function matchSetALength2(string) {
        return string.match(new RegExp("^" + _constants.A_CHARS + "*"))[0].length;
      };
      var matchSetBLength = function matchSetBLength2(string) {
        return string.match(new RegExp("^" + _constants.B_CHARS + "*"))[0].length;
      };
      var matchSetC = function matchSetC2(string) {
        return string.match(new RegExp("^" + _constants.C_CHARS + "*"))[0];
      };
      function autoSelectFromAB(string, isA) {
        var ranges = isA ? _constants.A_CHARS : _constants.B_CHARS;
        var untilC = string.match(new RegExp("^(" + ranges + "+?)(([0-9]{2}){2,})([^0-9]|$)"));
        if (untilC) {
          return untilC[1] + String.fromCharCode(204) + autoSelectFromC(string.substring(untilC[1].length));
        }
        var chars = string.match(new RegExp("^" + ranges + "+"))[0];
        if (chars.length === string.length) {
          return string;
        }
        return chars + String.fromCharCode(isA ? 205 : 206) + autoSelectFromAB(string.substring(chars.length), !isA);
      }
      function autoSelectFromC(string) {
        var cMatch = matchSetC(string);
        var length = cMatch.length;
        if (length === string.length) {
          return string;
        }
        string = string.substring(length);
        var isA = matchSetALength(string) >= matchSetBLength(string);
        return cMatch + String.fromCharCode(isA ? 206 : 205) + autoSelectFromAB(string, isA);
      }
      exports.default = function(string) {
        var newString = void 0;
        var cLength = matchSetC(string).length;
        if (cLength >= 2) {
          newString = _constants.C_START_CHAR + autoSelectFromC(string);
        } else {
          var isA = matchSetALength(string) > matchSetBLength(string);
          newString = (isA ? _constants.A_START_CHAR : _constants.B_START_CHAR) + autoSelectFromAB(string, isA);
        }
        return newString.replace(/[\xCD\xCE]([^])[\xCD\xCE]/, function(match, char) {
          return String.fromCharCode(203) + char;
        });
      };
    }
  });

  // ../optic_store/node_modules/jsbarcode/bin/barcodes/CODE128/CODE128_AUTO.js
  var require_CODE128_AUTO = __commonJS({
    "../optic_store/node_modules/jsbarcode/bin/barcodes/CODE128/CODE128_AUTO.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      var _CODE2 = require_CODE128();
      var _CODE3 = _interopRequireDefault(_CODE2);
      var _auto = require_auto();
      var _auto2 = _interopRequireDefault(_auto);
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }
      function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }
      function _possibleConstructorReturn(self2, call) {
        if (!self2) {
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }
        return call && (typeof call === "object" || typeof call === "function") ? call : self2;
      }
      function _inherits(subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
          throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
        }
        subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });
        if (superClass)
          Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
      }
      var CODE128AUTO = function(_CODE) {
        _inherits(CODE128AUTO2, _CODE);
        function CODE128AUTO2(data, options) {
          _classCallCheck(this, CODE128AUTO2);
          if (/^[\x00-\x7F\xC8-\xD3]+$/.test(data)) {
            var _this = _possibleConstructorReturn(this, (CODE128AUTO2.__proto__ || Object.getPrototypeOf(CODE128AUTO2)).call(this, (0, _auto2.default)(data), options));
          } else {
            var _this = _possibleConstructorReturn(this, (CODE128AUTO2.__proto__ || Object.getPrototypeOf(CODE128AUTO2)).call(this, data, options));
          }
          return _possibleConstructorReturn(_this);
        }
        return CODE128AUTO2;
      }(_CODE3.default);
      exports.default = CODE128AUTO;
    }
  });

  // ../optic_store/node_modules/jsbarcode/bin/barcodes/CODE128/CODE128A.js
  var require_CODE128A = __commonJS({
    "../optic_store/node_modules/jsbarcode/bin/barcodes/CODE128/CODE128A.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      var _createClass = function() {
        function defineProperties(target, props) {
          for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor)
              descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
          }
        }
        return function(Constructor, protoProps, staticProps) {
          if (protoProps)
            defineProperties(Constructor.prototype, protoProps);
          if (staticProps)
            defineProperties(Constructor, staticProps);
          return Constructor;
        };
      }();
      var _CODE2 = require_CODE128();
      var _CODE3 = _interopRequireDefault(_CODE2);
      var _constants = require_constants();
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }
      function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }
      function _possibleConstructorReturn(self2, call) {
        if (!self2) {
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }
        return call && (typeof call === "object" || typeof call === "function") ? call : self2;
      }
      function _inherits(subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
          throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
        }
        subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });
        if (superClass)
          Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
      }
      var CODE128A = function(_CODE) {
        _inherits(CODE128A2, _CODE);
        function CODE128A2(string, options) {
          _classCallCheck(this, CODE128A2);
          return _possibleConstructorReturn(this, (CODE128A2.__proto__ || Object.getPrototypeOf(CODE128A2)).call(this, _constants.A_START_CHAR + string, options));
        }
        _createClass(CODE128A2, [{
          key: "valid",
          value: function valid() {
            return new RegExp("^" + _constants.A_CHARS + "+$").test(this.data);
          }
        }]);
        return CODE128A2;
      }(_CODE3.default);
      exports.default = CODE128A;
    }
  });

  // ../optic_store/node_modules/jsbarcode/bin/barcodes/CODE128/CODE128B.js
  var require_CODE128B = __commonJS({
    "../optic_store/node_modules/jsbarcode/bin/barcodes/CODE128/CODE128B.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      var _createClass = function() {
        function defineProperties(target, props) {
          for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor)
              descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
          }
        }
        return function(Constructor, protoProps, staticProps) {
          if (protoProps)
            defineProperties(Constructor.prototype, protoProps);
          if (staticProps)
            defineProperties(Constructor, staticProps);
          return Constructor;
        };
      }();
      var _CODE2 = require_CODE128();
      var _CODE3 = _interopRequireDefault(_CODE2);
      var _constants = require_constants();
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }
      function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }
      function _possibleConstructorReturn(self2, call) {
        if (!self2) {
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }
        return call && (typeof call === "object" || typeof call === "function") ? call : self2;
      }
      function _inherits(subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
          throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
        }
        subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });
        if (superClass)
          Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
      }
      var CODE128B = function(_CODE) {
        _inherits(CODE128B2, _CODE);
        function CODE128B2(string, options) {
          _classCallCheck(this, CODE128B2);
          return _possibleConstructorReturn(this, (CODE128B2.__proto__ || Object.getPrototypeOf(CODE128B2)).call(this, _constants.B_START_CHAR + string, options));
        }
        _createClass(CODE128B2, [{
          key: "valid",
          value: function valid() {
            return new RegExp("^" + _constants.B_CHARS + "+$").test(this.data);
          }
        }]);
        return CODE128B2;
      }(_CODE3.default);
      exports.default = CODE128B;
    }
  });

  // ../optic_store/node_modules/jsbarcode/bin/barcodes/CODE128/CODE128C.js
  var require_CODE128C = __commonJS({
    "../optic_store/node_modules/jsbarcode/bin/barcodes/CODE128/CODE128C.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      var _createClass = function() {
        function defineProperties(target, props) {
          for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor)
              descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
          }
        }
        return function(Constructor, protoProps, staticProps) {
          if (protoProps)
            defineProperties(Constructor.prototype, protoProps);
          if (staticProps)
            defineProperties(Constructor, staticProps);
          return Constructor;
        };
      }();
      var _CODE2 = require_CODE128();
      var _CODE3 = _interopRequireDefault(_CODE2);
      var _constants = require_constants();
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }
      function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }
      function _possibleConstructorReturn(self2, call) {
        if (!self2) {
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }
        return call && (typeof call === "object" || typeof call === "function") ? call : self2;
      }
      function _inherits(subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
          throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
        }
        subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });
        if (superClass)
          Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
      }
      var CODE128C = function(_CODE) {
        _inherits(CODE128C2, _CODE);
        function CODE128C2(string, options) {
          _classCallCheck(this, CODE128C2);
          return _possibleConstructorReturn(this, (CODE128C2.__proto__ || Object.getPrototypeOf(CODE128C2)).call(this, _constants.C_START_CHAR + string, options));
        }
        _createClass(CODE128C2, [{
          key: "valid",
          value: function valid() {
            return new RegExp("^" + _constants.C_CHARS + "+$").test(this.data);
          }
        }]);
        return CODE128C2;
      }(_CODE3.default);
      exports.default = CODE128C;
    }
  });

  // ../optic_store/node_modules/jsbarcode/bin/barcodes/CODE128/index.js
  var require_CODE1282 = __commonJS({
    "../optic_store/node_modules/jsbarcode/bin/barcodes/CODE128/index.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.CODE128C = exports.CODE128B = exports.CODE128A = exports.CODE128 = void 0;
      var _CODE128_AUTO = require_CODE128_AUTO();
      var _CODE128_AUTO2 = _interopRequireDefault(_CODE128_AUTO);
      var _CODE128A = require_CODE128A();
      var _CODE128A2 = _interopRequireDefault(_CODE128A);
      var _CODE128B = require_CODE128B();
      var _CODE128B2 = _interopRequireDefault(_CODE128B);
      var _CODE128C = require_CODE128C();
      var _CODE128C2 = _interopRequireDefault(_CODE128C);
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }
      exports.CODE128 = _CODE128_AUTO2.default;
      exports.CODE128A = _CODE128A2.default;
      exports.CODE128B = _CODE128B2.default;
      exports.CODE128C = _CODE128C2.default;
    }
  });

  // ../optic_store/node_modules/jsbarcode/bin/barcodes/EAN_UPC/constants.js
  var require_constants2 = __commonJS({
    "../optic_store/node_modules/jsbarcode/bin/barcodes/EAN_UPC/constants.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      var SIDE_BIN = exports.SIDE_BIN = "101";
      var MIDDLE_BIN = exports.MIDDLE_BIN = "01010";
      var BINARIES = exports.BINARIES = {
        "L": [
          "0001101",
          "0011001",
          "0010011",
          "0111101",
          "0100011",
          "0110001",
          "0101111",
          "0111011",
          "0110111",
          "0001011"
        ],
        "G": [
          "0100111",
          "0110011",
          "0011011",
          "0100001",
          "0011101",
          "0111001",
          "0000101",
          "0010001",
          "0001001",
          "0010111"
        ],
        "R": [
          "1110010",
          "1100110",
          "1101100",
          "1000010",
          "1011100",
          "1001110",
          "1010000",
          "1000100",
          "1001000",
          "1110100"
        ],
        "O": [
          "0001101",
          "0011001",
          "0010011",
          "0111101",
          "0100011",
          "0110001",
          "0101111",
          "0111011",
          "0110111",
          "0001011"
        ],
        "E": [
          "0100111",
          "0110011",
          "0011011",
          "0100001",
          "0011101",
          "0111001",
          "0000101",
          "0010001",
          "0001001",
          "0010111"
        ]
      };
      var EAN2_STRUCTURE = exports.EAN2_STRUCTURE = ["LL", "LG", "GL", "GG"];
      var EAN5_STRUCTURE = exports.EAN5_STRUCTURE = ["GGLLL", "GLGLL", "GLLGL", "GLLLG", "LGGLL", "LLGGL", "LLLGG", "LGLGL", "LGLLG", "LLGLG"];
      var EAN13_STRUCTURE = exports.EAN13_STRUCTURE = ["LLLLLL", "LLGLGG", "LLGGLG", "LLGGGL", "LGLLGG", "LGGLLG", "LGGGLL", "LGLGLG", "LGLGGL", "LGGLGL"];
    }
  });

  // ../optic_store/node_modules/jsbarcode/bin/barcodes/EAN_UPC/encoder.js
  var require_encoder = __commonJS({
    "../optic_store/node_modules/jsbarcode/bin/barcodes/EAN_UPC/encoder.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      var _constants = require_constants2();
      var encode = function encode2(data, structure, separator) {
        var encoded = data.split("").map(function(val, idx) {
          return _constants.BINARIES[structure[idx]];
        }).map(function(val, idx) {
          return val ? val[data[idx]] : "";
        });
        if (separator) {
          var last = data.length - 1;
          encoded = encoded.map(function(val, idx) {
            return idx < last ? val + separator : val;
          });
        }
        return encoded.join("");
      };
      exports.default = encode;
    }
  });

  // ../optic_store/node_modules/jsbarcode/bin/barcodes/EAN_UPC/EAN.js
  var require_EAN = __commonJS({
    "../optic_store/node_modules/jsbarcode/bin/barcodes/EAN_UPC/EAN.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      var _createClass = function() {
        function defineProperties(target, props) {
          for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor)
              descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
          }
        }
        return function(Constructor, protoProps, staticProps) {
          if (protoProps)
            defineProperties(Constructor.prototype, protoProps);
          if (staticProps)
            defineProperties(Constructor, staticProps);
          return Constructor;
        };
      }();
      var _constants = require_constants2();
      var _encoder = require_encoder();
      var _encoder2 = _interopRequireDefault(_encoder);
      var _Barcode2 = require_Barcode();
      var _Barcode3 = _interopRequireDefault(_Barcode2);
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }
      function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }
      function _possibleConstructorReturn(self2, call) {
        if (!self2) {
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }
        return call && (typeof call === "object" || typeof call === "function") ? call : self2;
      }
      function _inherits(subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
          throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
        }
        subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });
        if (superClass)
          Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
      }
      var EAN = function(_Barcode) {
        _inherits(EAN2, _Barcode);
        function EAN2(data, options) {
          _classCallCheck(this, EAN2);
          var _this = _possibleConstructorReturn(this, (EAN2.__proto__ || Object.getPrototypeOf(EAN2)).call(this, data, options));
          _this.fontSize = !options.flat && options.fontSize > options.width * 10 ? options.width * 10 : options.fontSize;
          _this.guardHeight = options.height + _this.fontSize / 2 + options.textMargin;
          return _this;
        }
        _createClass(EAN2, [{
          key: "encode",
          value: function encode() {
            return this.options.flat ? this.encodeFlat() : this.encodeGuarded();
          }
        }, {
          key: "leftText",
          value: function leftText(from, to) {
            return this.text.substr(from, to);
          }
        }, {
          key: "leftEncode",
          value: function leftEncode(data, structure) {
            return (0, _encoder2.default)(data, structure);
          }
        }, {
          key: "rightText",
          value: function rightText(from, to) {
            return this.text.substr(from, to);
          }
        }, {
          key: "rightEncode",
          value: function rightEncode(data, structure) {
            return (0, _encoder2.default)(data, structure);
          }
        }, {
          key: "encodeGuarded",
          value: function encodeGuarded() {
            var textOptions = { fontSize: this.fontSize };
            var guardOptions = { height: this.guardHeight };
            return [{ data: _constants.SIDE_BIN, options: guardOptions }, { data: this.leftEncode(), text: this.leftText(), options: textOptions }, { data: _constants.MIDDLE_BIN, options: guardOptions }, { data: this.rightEncode(), text: this.rightText(), options: textOptions }, { data: _constants.SIDE_BIN, options: guardOptions }];
          }
        }, {
          key: "encodeFlat",
          value: function encodeFlat() {
            var data = [_constants.SIDE_BIN, this.leftEncode(), _constants.MIDDLE_BIN, this.rightEncode(), _constants.SIDE_BIN];
            return {
              data: data.join(""),
              text: this.text
            };
          }
        }]);
        return EAN2;
      }(_Barcode3.default);
      exports.default = EAN;
    }
  });

  // ../optic_store/node_modules/jsbarcode/bin/barcodes/EAN_UPC/EAN13.js
  var require_EAN13 = __commonJS({
    "../optic_store/node_modules/jsbarcode/bin/barcodes/EAN_UPC/EAN13.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      var _createClass = function() {
        function defineProperties(target, props) {
          for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor)
              descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
          }
        }
        return function(Constructor, protoProps, staticProps) {
          if (protoProps)
            defineProperties(Constructor.prototype, protoProps);
          if (staticProps)
            defineProperties(Constructor, staticProps);
          return Constructor;
        };
      }();
      var _get = function get(object, property, receiver) {
        if (object === null)
          object = Function.prototype;
        var desc = Object.getOwnPropertyDescriptor(object, property);
        if (desc === void 0) {
          var parent = Object.getPrototypeOf(object);
          if (parent === null) {
            return void 0;
          } else {
            return get(parent, property, receiver);
          }
        } else if ("value" in desc) {
          return desc.value;
        } else {
          var getter = desc.get;
          if (getter === void 0) {
            return void 0;
          }
          return getter.call(receiver);
        }
      };
      var _constants = require_constants2();
      var _EAN2 = require_EAN();
      var _EAN3 = _interopRequireDefault(_EAN2);
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }
      function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }
      function _possibleConstructorReturn(self2, call) {
        if (!self2) {
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }
        return call && (typeof call === "object" || typeof call === "function") ? call : self2;
      }
      function _inherits(subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
          throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
        }
        subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });
        if (superClass)
          Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
      }
      var checksum = function checksum2(number) {
        var res = number.substr(0, 12).split("").map(function(n) {
          return +n;
        }).reduce(function(sum, a, idx) {
          return idx % 2 ? sum + a * 3 : sum + a;
        }, 0);
        return (10 - res % 10) % 10;
      };
      var EAN13 = function(_EAN) {
        _inherits(EAN132, _EAN);
        function EAN132(data, options) {
          _classCallCheck(this, EAN132);
          if (data.search(/^[0-9]{12}$/) !== -1) {
            data += checksum(data);
          }
          var _this = _possibleConstructorReturn(this, (EAN132.__proto__ || Object.getPrototypeOf(EAN132)).call(this, data, options));
          _this.lastChar = options.lastChar;
          return _this;
        }
        _createClass(EAN132, [{
          key: "valid",
          value: function valid() {
            return this.data.search(/^[0-9]{13}$/) !== -1 && +this.data[12] === checksum(this.data);
          }
        }, {
          key: "leftText",
          value: function leftText() {
            return _get(EAN132.prototype.__proto__ || Object.getPrototypeOf(EAN132.prototype), "leftText", this).call(this, 1, 6);
          }
        }, {
          key: "leftEncode",
          value: function leftEncode() {
            var data = this.data.substr(1, 6);
            var structure = _constants.EAN13_STRUCTURE[this.data[0]];
            return _get(EAN132.prototype.__proto__ || Object.getPrototypeOf(EAN132.prototype), "leftEncode", this).call(this, data, structure);
          }
        }, {
          key: "rightText",
          value: function rightText() {
            return _get(EAN132.prototype.__proto__ || Object.getPrototypeOf(EAN132.prototype), "rightText", this).call(this, 7, 6);
          }
        }, {
          key: "rightEncode",
          value: function rightEncode() {
            var data = this.data.substr(7, 6);
            return _get(EAN132.prototype.__proto__ || Object.getPrototypeOf(EAN132.prototype), "rightEncode", this).call(this, data, "RRRRRR");
          }
        }, {
          key: "encodeGuarded",
          value: function encodeGuarded() {
            var data = _get(EAN132.prototype.__proto__ || Object.getPrototypeOf(EAN132.prototype), "encodeGuarded", this).call(this);
            if (this.options.displayValue) {
              data.unshift({
                data: "000000000000",
                text: this.text.substr(0, 1),
                options: { textAlign: "left", fontSize: this.fontSize }
              });
              if (this.options.lastChar) {
                data.push({
                  data: "00"
                });
                data.push({
                  data: "00000",
                  text: this.options.lastChar,
                  options: { fontSize: this.fontSize }
                });
              }
            }
            return data;
          }
        }]);
        return EAN132;
      }(_EAN3.default);
      exports.default = EAN13;
    }
  });

  // ../optic_store/node_modules/jsbarcode/bin/barcodes/EAN_UPC/EAN8.js
  var require_EAN8 = __commonJS({
    "../optic_store/node_modules/jsbarcode/bin/barcodes/EAN_UPC/EAN8.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      var _createClass = function() {
        function defineProperties(target, props) {
          for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor)
              descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
          }
        }
        return function(Constructor, protoProps, staticProps) {
          if (protoProps)
            defineProperties(Constructor.prototype, protoProps);
          if (staticProps)
            defineProperties(Constructor, staticProps);
          return Constructor;
        };
      }();
      var _get = function get(object, property, receiver) {
        if (object === null)
          object = Function.prototype;
        var desc = Object.getOwnPropertyDescriptor(object, property);
        if (desc === void 0) {
          var parent = Object.getPrototypeOf(object);
          if (parent === null) {
            return void 0;
          } else {
            return get(parent, property, receiver);
          }
        } else if ("value" in desc) {
          return desc.value;
        } else {
          var getter = desc.get;
          if (getter === void 0) {
            return void 0;
          }
          return getter.call(receiver);
        }
      };
      var _EAN2 = require_EAN();
      var _EAN3 = _interopRequireDefault(_EAN2);
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }
      function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }
      function _possibleConstructorReturn(self2, call) {
        if (!self2) {
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }
        return call && (typeof call === "object" || typeof call === "function") ? call : self2;
      }
      function _inherits(subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
          throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
        }
        subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });
        if (superClass)
          Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
      }
      var checksum = function checksum2(number) {
        var res = number.substr(0, 7).split("").map(function(n) {
          return +n;
        }).reduce(function(sum, a, idx) {
          return idx % 2 ? sum + a : sum + a * 3;
        }, 0);
        return (10 - res % 10) % 10;
      };
      var EAN8 = function(_EAN) {
        _inherits(EAN82, _EAN);
        function EAN82(data, options) {
          _classCallCheck(this, EAN82);
          if (data.search(/^[0-9]{7}$/) !== -1) {
            data += checksum(data);
          }
          return _possibleConstructorReturn(this, (EAN82.__proto__ || Object.getPrototypeOf(EAN82)).call(this, data, options));
        }
        _createClass(EAN82, [{
          key: "valid",
          value: function valid() {
            return this.data.search(/^[0-9]{8}$/) !== -1 && +this.data[7] === checksum(this.data);
          }
        }, {
          key: "leftText",
          value: function leftText() {
            return _get(EAN82.prototype.__proto__ || Object.getPrototypeOf(EAN82.prototype), "leftText", this).call(this, 0, 4);
          }
        }, {
          key: "leftEncode",
          value: function leftEncode() {
            var data = this.data.substr(0, 4);
            return _get(EAN82.prototype.__proto__ || Object.getPrototypeOf(EAN82.prototype), "leftEncode", this).call(this, data, "LLLL");
          }
        }, {
          key: "rightText",
          value: function rightText() {
            return _get(EAN82.prototype.__proto__ || Object.getPrototypeOf(EAN82.prototype), "rightText", this).call(this, 4, 4);
          }
        }, {
          key: "rightEncode",
          value: function rightEncode() {
            var data = this.data.substr(4, 4);
            return _get(EAN82.prototype.__proto__ || Object.getPrototypeOf(EAN82.prototype), "rightEncode", this).call(this, data, "RRRR");
          }
        }]);
        return EAN82;
      }(_EAN3.default);
      exports.default = EAN8;
    }
  });

  // ../optic_store/node_modules/jsbarcode/bin/barcodes/EAN_UPC/EAN5.js
  var require_EAN5 = __commonJS({
    "../optic_store/node_modules/jsbarcode/bin/barcodes/EAN_UPC/EAN5.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      var _createClass = function() {
        function defineProperties(target, props) {
          for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor)
              descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
          }
        }
        return function(Constructor, protoProps, staticProps) {
          if (protoProps)
            defineProperties(Constructor.prototype, protoProps);
          if (staticProps)
            defineProperties(Constructor, staticProps);
          return Constructor;
        };
      }();
      var _constants = require_constants2();
      var _encoder = require_encoder();
      var _encoder2 = _interopRequireDefault(_encoder);
      var _Barcode2 = require_Barcode();
      var _Barcode3 = _interopRequireDefault(_Barcode2);
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }
      function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }
      function _possibleConstructorReturn(self2, call) {
        if (!self2) {
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }
        return call && (typeof call === "object" || typeof call === "function") ? call : self2;
      }
      function _inherits(subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
          throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
        }
        subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });
        if (superClass)
          Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
      }
      var checksum = function checksum2(data) {
        var result = data.split("").map(function(n) {
          return +n;
        }).reduce(function(sum, a, idx) {
          return idx % 2 ? sum + a * 9 : sum + a * 3;
        }, 0);
        return result % 10;
      };
      var EAN5 = function(_Barcode) {
        _inherits(EAN52, _Barcode);
        function EAN52(data, options) {
          _classCallCheck(this, EAN52);
          return _possibleConstructorReturn(this, (EAN52.__proto__ || Object.getPrototypeOf(EAN52)).call(this, data, options));
        }
        _createClass(EAN52, [{
          key: "valid",
          value: function valid() {
            return this.data.search(/^[0-9]{5}$/) !== -1;
          }
        }, {
          key: "encode",
          value: function encode() {
            var structure = _constants.EAN5_STRUCTURE[checksum(this.data)];
            return {
              data: "1011" + (0, _encoder2.default)(this.data, structure, "01"),
              text: this.text
            };
          }
        }]);
        return EAN52;
      }(_Barcode3.default);
      exports.default = EAN5;
    }
  });

  // ../optic_store/node_modules/jsbarcode/bin/barcodes/EAN_UPC/EAN2.js
  var require_EAN2 = __commonJS({
    "../optic_store/node_modules/jsbarcode/bin/barcodes/EAN_UPC/EAN2.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      var _createClass = function() {
        function defineProperties(target, props) {
          for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor)
              descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
          }
        }
        return function(Constructor, protoProps, staticProps) {
          if (protoProps)
            defineProperties(Constructor.prototype, protoProps);
          if (staticProps)
            defineProperties(Constructor, staticProps);
          return Constructor;
        };
      }();
      var _constants = require_constants2();
      var _encoder = require_encoder();
      var _encoder2 = _interopRequireDefault(_encoder);
      var _Barcode2 = require_Barcode();
      var _Barcode3 = _interopRequireDefault(_Barcode2);
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }
      function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }
      function _possibleConstructorReturn(self2, call) {
        if (!self2) {
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }
        return call && (typeof call === "object" || typeof call === "function") ? call : self2;
      }
      function _inherits(subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
          throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
        }
        subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });
        if (superClass)
          Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
      }
      var EAN2 = function(_Barcode) {
        _inherits(EAN22, _Barcode);
        function EAN22(data, options) {
          _classCallCheck(this, EAN22);
          return _possibleConstructorReturn(this, (EAN22.__proto__ || Object.getPrototypeOf(EAN22)).call(this, data, options));
        }
        _createClass(EAN22, [{
          key: "valid",
          value: function valid() {
            return this.data.search(/^[0-9]{2}$/) !== -1;
          }
        }, {
          key: "encode",
          value: function encode() {
            var structure = _constants.EAN2_STRUCTURE[parseInt(this.data) % 4];
            return {
              data: "1011" + (0, _encoder2.default)(this.data, structure, "01"),
              text: this.text
            };
          }
        }]);
        return EAN22;
      }(_Barcode3.default);
      exports.default = EAN2;
    }
  });

  // ../optic_store/node_modules/jsbarcode/bin/barcodes/EAN_UPC/UPC.js
  var require_UPC = __commonJS({
    "../optic_store/node_modules/jsbarcode/bin/barcodes/EAN_UPC/UPC.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      var _createClass = function() {
        function defineProperties(target, props) {
          for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor)
              descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
          }
        }
        return function(Constructor, protoProps, staticProps) {
          if (protoProps)
            defineProperties(Constructor.prototype, protoProps);
          if (staticProps)
            defineProperties(Constructor, staticProps);
          return Constructor;
        };
      }();
      exports.checksum = checksum;
      var _encoder = require_encoder();
      var _encoder2 = _interopRequireDefault(_encoder);
      var _Barcode2 = require_Barcode();
      var _Barcode3 = _interopRequireDefault(_Barcode2);
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }
      function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }
      function _possibleConstructorReturn(self2, call) {
        if (!self2) {
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }
        return call && (typeof call === "object" || typeof call === "function") ? call : self2;
      }
      function _inherits(subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
          throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
        }
        subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });
        if (superClass)
          Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
      }
      var UPC = function(_Barcode) {
        _inherits(UPC2, _Barcode);
        function UPC2(data, options) {
          _classCallCheck(this, UPC2);
          if (data.search(/^[0-9]{11}$/) !== -1) {
            data += checksum(data);
          }
          var _this = _possibleConstructorReturn(this, (UPC2.__proto__ || Object.getPrototypeOf(UPC2)).call(this, data, options));
          _this.displayValue = options.displayValue;
          if (options.fontSize > options.width * 10) {
            _this.fontSize = options.width * 10;
          } else {
            _this.fontSize = options.fontSize;
          }
          _this.guardHeight = options.height + _this.fontSize / 2 + options.textMargin;
          return _this;
        }
        _createClass(UPC2, [{
          key: "valid",
          value: function valid() {
            return this.data.search(/^[0-9]{12}$/) !== -1 && this.data[11] == checksum(this.data);
          }
        }, {
          key: "encode",
          value: function encode() {
            if (this.options.flat) {
              return this.flatEncoding();
            } else {
              return this.guardedEncoding();
            }
          }
        }, {
          key: "flatEncoding",
          value: function flatEncoding() {
            var result = "";
            result += "101";
            result += (0, _encoder2.default)(this.data.substr(0, 6), "LLLLLL");
            result += "01010";
            result += (0, _encoder2.default)(this.data.substr(6, 6), "RRRRRR");
            result += "101";
            return {
              data: result,
              text: this.text
            };
          }
        }, {
          key: "guardedEncoding",
          value: function guardedEncoding() {
            var result = [];
            if (this.displayValue) {
              result.push({
                data: "00000000",
                text: this.text.substr(0, 1),
                options: { textAlign: "left", fontSize: this.fontSize }
              });
            }
            result.push({
              data: "101" + (0, _encoder2.default)(this.data[0], "L"),
              options: { height: this.guardHeight }
            });
            result.push({
              data: (0, _encoder2.default)(this.data.substr(1, 5), "LLLLL"),
              text: this.text.substr(1, 5),
              options: { fontSize: this.fontSize }
            });
            result.push({
              data: "01010",
              options: { height: this.guardHeight }
            });
            result.push({
              data: (0, _encoder2.default)(this.data.substr(6, 5), "RRRRR"),
              text: this.text.substr(6, 5),
              options: { fontSize: this.fontSize }
            });
            result.push({
              data: (0, _encoder2.default)(this.data[11], "R") + "101",
              options: { height: this.guardHeight }
            });
            if (this.displayValue) {
              result.push({
                data: "00000000",
                text: this.text.substr(11, 1),
                options: { textAlign: "right", fontSize: this.fontSize }
              });
            }
            return result;
          }
        }]);
        return UPC2;
      }(_Barcode3.default);
      function checksum(number) {
        var result = 0;
        var i;
        for (i = 1; i < 11; i += 2) {
          result += parseInt(number[i]);
        }
        for (i = 0; i < 11; i += 2) {
          result += parseInt(number[i]) * 3;
        }
        return (10 - result % 10) % 10;
      }
      exports.default = UPC;
    }
  });

  // ../optic_store/node_modules/jsbarcode/bin/barcodes/EAN_UPC/UPCE.js
  var require_UPCE = __commonJS({
    "../optic_store/node_modules/jsbarcode/bin/barcodes/EAN_UPC/UPCE.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      var _createClass = function() {
        function defineProperties(target, props) {
          for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor)
              descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
          }
        }
        return function(Constructor, protoProps, staticProps) {
          if (protoProps)
            defineProperties(Constructor.prototype, protoProps);
          if (staticProps)
            defineProperties(Constructor, staticProps);
          return Constructor;
        };
      }();
      var _encoder = require_encoder();
      var _encoder2 = _interopRequireDefault(_encoder);
      var _Barcode2 = require_Barcode();
      var _Barcode3 = _interopRequireDefault(_Barcode2);
      var _UPC = require_UPC();
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }
      function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }
      function _possibleConstructorReturn(self2, call) {
        if (!self2) {
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }
        return call && (typeof call === "object" || typeof call === "function") ? call : self2;
      }
      function _inherits(subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
          throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
        }
        subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });
        if (superClass)
          Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
      }
      var EXPANSIONS = ["XX00000XXX", "XX10000XXX", "XX20000XXX", "XXX00000XX", "XXXX00000X", "XXXXX00005", "XXXXX00006", "XXXXX00007", "XXXXX00008", "XXXXX00009"];
      var PARITIES = [["EEEOOO", "OOOEEE"], ["EEOEOO", "OOEOEE"], ["EEOOEO", "OOEEOE"], ["EEOOOE", "OOEEEO"], ["EOEEOO", "OEOOEE"], ["EOOEEO", "OEEOOE"], ["EOOOEE", "OEEEOO"], ["EOEOEO", "OEOEOE"], ["EOEOOE", "OEOEEO"], ["EOOEOE", "OEEOEO"]];
      var UPCE = function(_Barcode) {
        _inherits(UPCE2, _Barcode);
        function UPCE2(data, options) {
          _classCallCheck(this, UPCE2);
          var _this = _possibleConstructorReturn(this, (UPCE2.__proto__ || Object.getPrototypeOf(UPCE2)).call(this, data, options));
          _this.isValid = false;
          if (data.search(/^[0-9]{6}$/) !== -1) {
            _this.middleDigits = data;
            _this.upcA = expandToUPCA(data, "0");
            _this.text = options.text || "" + _this.upcA[0] + data + _this.upcA[_this.upcA.length - 1];
            _this.isValid = true;
          } else if (data.search(/^[01][0-9]{7}$/) !== -1) {
            _this.middleDigits = data.substring(1, data.length - 1);
            _this.upcA = expandToUPCA(_this.middleDigits, data[0]);
            if (_this.upcA[_this.upcA.length - 1] === data[data.length - 1]) {
              _this.isValid = true;
            } else {
              return _possibleConstructorReturn(_this);
            }
          } else {
            return _possibleConstructorReturn(_this);
          }
          _this.displayValue = options.displayValue;
          if (options.fontSize > options.width * 10) {
            _this.fontSize = options.width * 10;
          } else {
            _this.fontSize = options.fontSize;
          }
          _this.guardHeight = options.height + _this.fontSize / 2 + options.textMargin;
          return _this;
        }
        _createClass(UPCE2, [{
          key: "valid",
          value: function valid() {
            return this.isValid;
          }
        }, {
          key: "encode",
          value: function encode() {
            if (this.options.flat) {
              return this.flatEncoding();
            } else {
              return this.guardedEncoding();
            }
          }
        }, {
          key: "flatEncoding",
          value: function flatEncoding() {
            var result = "";
            result += "101";
            result += this.encodeMiddleDigits();
            result += "010101";
            return {
              data: result,
              text: this.text
            };
          }
        }, {
          key: "guardedEncoding",
          value: function guardedEncoding() {
            var result = [];
            if (this.displayValue) {
              result.push({
                data: "00000000",
                text: this.text[0],
                options: { textAlign: "left", fontSize: this.fontSize }
              });
            }
            result.push({
              data: "101",
              options: { height: this.guardHeight }
            });
            result.push({
              data: this.encodeMiddleDigits(),
              text: this.text.substring(1, 7),
              options: { fontSize: this.fontSize }
            });
            result.push({
              data: "010101",
              options: { height: this.guardHeight }
            });
            if (this.displayValue) {
              result.push({
                data: "00000000",
                text: this.text[7],
                options: { textAlign: "right", fontSize: this.fontSize }
              });
            }
            return result;
          }
        }, {
          key: "encodeMiddleDigits",
          value: function encodeMiddleDigits() {
            var numberSystem = this.upcA[0];
            var checkDigit = this.upcA[this.upcA.length - 1];
            var parity = PARITIES[parseInt(checkDigit)][parseInt(numberSystem)];
            return (0, _encoder2.default)(this.middleDigits, parity);
          }
        }]);
        return UPCE2;
      }(_Barcode3.default);
      function expandToUPCA(middleDigits, numberSystem) {
        var lastUpcE = parseInt(middleDigits[middleDigits.length - 1]);
        var expansion = EXPANSIONS[lastUpcE];
        var result = "";
        var digitIndex = 0;
        for (var i = 0; i < expansion.length; i++) {
          var c = expansion[i];
          if (c === "X") {
            result += middleDigits[digitIndex++];
          } else {
            result += c;
          }
        }
        result = "" + numberSystem + result;
        return "" + result + (0, _UPC.checksum)(result);
      }
      exports.default = UPCE;
    }
  });

  // ../optic_store/node_modules/jsbarcode/bin/barcodes/EAN_UPC/index.js
  var require_EAN_UPC = __commonJS({
    "../optic_store/node_modules/jsbarcode/bin/barcodes/EAN_UPC/index.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.UPCE = exports.UPC = exports.EAN2 = exports.EAN5 = exports.EAN8 = exports.EAN13 = void 0;
      var _EAN = require_EAN13();
      var _EAN2 = _interopRequireDefault(_EAN);
      var _EAN3 = require_EAN8();
      var _EAN4 = _interopRequireDefault(_EAN3);
      var _EAN5 = require_EAN5();
      var _EAN6 = _interopRequireDefault(_EAN5);
      var _EAN7 = require_EAN2();
      var _EAN8 = _interopRequireDefault(_EAN7);
      var _UPC = require_UPC();
      var _UPC2 = _interopRequireDefault(_UPC);
      var _UPCE = require_UPCE();
      var _UPCE2 = _interopRequireDefault(_UPCE);
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }
      exports.EAN13 = _EAN2.default;
      exports.EAN8 = _EAN4.default;
      exports.EAN5 = _EAN6.default;
      exports.EAN2 = _EAN8.default;
      exports.UPC = _UPC2.default;
      exports.UPCE = _UPCE2.default;
    }
  });

  // ../optic_store/node_modules/jsbarcode/bin/barcodes/ITF/constants.js
  var require_constants3 = __commonJS({
    "../optic_store/node_modules/jsbarcode/bin/barcodes/ITF/constants.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      var START_BIN = exports.START_BIN = "1010";
      var END_BIN = exports.END_BIN = "11101";
      var BINARIES = exports.BINARIES = ["00110", "10001", "01001", "11000", "00101", "10100", "01100", "00011", "10010", "01010"];
    }
  });

  // ../optic_store/node_modules/jsbarcode/bin/barcodes/ITF/ITF.js
  var require_ITF = __commonJS({
    "../optic_store/node_modules/jsbarcode/bin/barcodes/ITF/ITF.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      var _createClass = function() {
        function defineProperties(target, props) {
          for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor)
              descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
          }
        }
        return function(Constructor, protoProps, staticProps) {
          if (protoProps)
            defineProperties(Constructor.prototype, protoProps);
          if (staticProps)
            defineProperties(Constructor, staticProps);
          return Constructor;
        };
      }();
      var _constants = require_constants3();
      var _Barcode2 = require_Barcode();
      var _Barcode3 = _interopRequireDefault(_Barcode2);
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }
      function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }
      function _possibleConstructorReturn(self2, call) {
        if (!self2) {
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }
        return call && (typeof call === "object" || typeof call === "function") ? call : self2;
      }
      function _inherits(subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
          throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
        }
        subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });
        if (superClass)
          Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
      }
      var ITF = function(_Barcode) {
        _inherits(ITF2, _Barcode);
        function ITF2() {
          _classCallCheck(this, ITF2);
          return _possibleConstructorReturn(this, (ITF2.__proto__ || Object.getPrototypeOf(ITF2)).apply(this, arguments));
        }
        _createClass(ITF2, [{
          key: "valid",
          value: function valid() {
            return this.data.search(/^([0-9]{2})+$/) !== -1;
          }
        }, {
          key: "encode",
          value: function encode() {
            var _this2 = this;
            var encoded = this.data.match(/.{2}/g).map(function(pair) {
              return _this2.encodePair(pair);
            }).join("");
            return {
              data: _constants.START_BIN + encoded + _constants.END_BIN,
              text: this.text
            };
          }
        }, {
          key: "encodePair",
          value: function encodePair(pair) {
            var second = _constants.BINARIES[pair[1]];
            return _constants.BINARIES[pair[0]].split("").map(function(first, idx) {
              return (first === "1" ? "111" : "1") + (second[idx] === "1" ? "000" : "0");
            }).join("");
          }
        }]);
        return ITF2;
      }(_Barcode3.default);
      exports.default = ITF;
    }
  });

  // ../optic_store/node_modules/jsbarcode/bin/barcodes/ITF/ITF14.js
  var require_ITF14 = __commonJS({
    "../optic_store/node_modules/jsbarcode/bin/barcodes/ITF/ITF14.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      var _createClass = function() {
        function defineProperties(target, props) {
          for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor)
              descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
          }
        }
        return function(Constructor, protoProps, staticProps) {
          if (protoProps)
            defineProperties(Constructor.prototype, protoProps);
          if (staticProps)
            defineProperties(Constructor, staticProps);
          return Constructor;
        };
      }();
      var _ITF2 = require_ITF();
      var _ITF3 = _interopRequireDefault(_ITF2);
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }
      function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }
      function _possibleConstructorReturn(self2, call) {
        if (!self2) {
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }
        return call && (typeof call === "object" || typeof call === "function") ? call : self2;
      }
      function _inherits(subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
          throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
        }
        subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });
        if (superClass)
          Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
      }
      var checksum = function checksum2(data) {
        var res = data.substr(0, 13).split("").map(function(num) {
          return parseInt(num, 10);
        }).reduce(function(sum, n, idx) {
          return sum + n * (3 - idx % 2 * 2);
        }, 0);
        return Math.ceil(res / 10) * 10 - res;
      };
      var ITF14 = function(_ITF) {
        _inherits(ITF142, _ITF);
        function ITF142(data, options) {
          _classCallCheck(this, ITF142);
          if (data.search(/^[0-9]{13}$/) !== -1) {
            data += checksum(data);
          }
          return _possibleConstructorReturn(this, (ITF142.__proto__ || Object.getPrototypeOf(ITF142)).call(this, data, options));
        }
        _createClass(ITF142, [{
          key: "valid",
          value: function valid() {
            return this.data.search(/^[0-9]{14}$/) !== -1 && +this.data[13] === checksum(this.data);
          }
        }]);
        return ITF142;
      }(_ITF3.default);
      exports.default = ITF14;
    }
  });

  // ../optic_store/node_modules/jsbarcode/bin/barcodes/ITF/index.js
  var require_ITF2 = __commonJS({
    "../optic_store/node_modules/jsbarcode/bin/barcodes/ITF/index.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.ITF14 = exports.ITF = void 0;
      var _ITF = require_ITF();
      var _ITF2 = _interopRequireDefault(_ITF);
      var _ITF3 = require_ITF14();
      var _ITF4 = _interopRequireDefault(_ITF3);
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }
      exports.ITF = _ITF2.default;
      exports.ITF14 = _ITF4.default;
    }
  });

  // ../optic_store/node_modules/jsbarcode/bin/barcodes/MSI/MSI.js
  var require_MSI = __commonJS({
    "../optic_store/node_modules/jsbarcode/bin/barcodes/MSI/MSI.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      var _createClass = function() {
        function defineProperties(target, props) {
          for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor)
              descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
          }
        }
        return function(Constructor, protoProps, staticProps) {
          if (protoProps)
            defineProperties(Constructor.prototype, protoProps);
          if (staticProps)
            defineProperties(Constructor, staticProps);
          return Constructor;
        };
      }();
      var _Barcode2 = require_Barcode();
      var _Barcode3 = _interopRequireDefault(_Barcode2);
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }
      function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }
      function _possibleConstructorReturn(self2, call) {
        if (!self2) {
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }
        return call && (typeof call === "object" || typeof call === "function") ? call : self2;
      }
      function _inherits(subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
          throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
        }
        subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });
        if (superClass)
          Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
      }
      var MSI = function(_Barcode) {
        _inherits(MSI2, _Barcode);
        function MSI2(data, options) {
          _classCallCheck(this, MSI2);
          return _possibleConstructorReturn(this, (MSI2.__proto__ || Object.getPrototypeOf(MSI2)).call(this, data, options));
        }
        _createClass(MSI2, [{
          key: "encode",
          value: function encode() {
            var ret = "110";
            for (var i = 0; i < this.data.length; i++) {
              var digit = parseInt(this.data[i]);
              var bin = digit.toString(2);
              bin = addZeroes(bin, 4 - bin.length);
              for (var b = 0; b < bin.length; b++) {
                ret += bin[b] == "0" ? "100" : "110";
              }
            }
            ret += "1001";
            return {
              data: ret,
              text: this.text
            };
          }
        }, {
          key: "valid",
          value: function valid() {
            return this.data.search(/^[0-9]+$/) !== -1;
          }
        }]);
        return MSI2;
      }(_Barcode3.default);
      function addZeroes(number, n) {
        for (var i = 0; i < n; i++) {
          number = "0" + number;
        }
        return number;
      }
      exports.default = MSI;
    }
  });

  // ../optic_store/node_modules/jsbarcode/bin/barcodes/MSI/checksums.js
  var require_checksums = __commonJS({
    "../optic_store/node_modules/jsbarcode/bin/barcodes/MSI/checksums.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.mod10 = mod10;
      exports.mod11 = mod11;
      function mod10(number) {
        var sum = 0;
        for (var i = 0; i < number.length; i++) {
          var n = parseInt(number[i]);
          if ((i + number.length) % 2 === 0) {
            sum += n;
          } else {
            sum += n * 2 % 10 + Math.floor(n * 2 / 10);
          }
        }
        return (10 - sum % 10) % 10;
      }
      function mod11(number) {
        var sum = 0;
        var weights = [2, 3, 4, 5, 6, 7];
        for (var i = 0; i < number.length; i++) {
          var n = parseInt(number[number.length - 1 - i]);
          sum += weights[i % weights.length] * n;
        }
        return (11 - sum % 11) % 11;
      }
    }
  });

  // ../optic_store/node_modules/jsbarcode/bin/barcodes/MSI/MSI10.js
  var require_MSI10 = __commonJS({
    "../optic_store/node_modules/jsbarcode/bin/barcodes/MSI/MSI10.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      var _MSI2 = require_MSI();
      var _MSI3 = _interopRequireDefault(_MSI2);
      var _checksums = require_checksums();
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }
      function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }
      function _possibleConstructorReturn(self2, call) {
        if (!self2) {
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }
        return call && (typeof call === "object" || typeof call === "function") ? call : self2;
      }
      function _inherits(subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
          throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
        }
        subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });
        if (superClass)
          Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
      }
      var MSI10 = function(_MSI) {
        _inherits(MSI102, _MSI);
        function MSI102(data, options) {
          _classCallCheck(this, MSI102);
          return _possibleConstructorReturn(this, (MSI102.__proto__ || Object.getPrototypeOf(MSI102)).call(this, data + (0, _checksums.mod10)(data), options));
        }
        return MSI102;
      }(_MSI3.default);
      exports.default = MSI10;
    }
  });

  // ../optic_store/node_modules/jsbarcode/bin/barcodes/MSI/MSI11.js
  var require_MSI11 = __commonJS({
    "../optic_store/node_modules/jsbarcode/bin/barcodes/MSI/MSI11.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      var _MSI2 = require_MSI();
      var _MSI3 = _interopRequireDefault(_MSI2);
      var _checksums = require_checksums();
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }
      function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }
      function _possibleConstructorReturn(self2, call) {
        if (!self2) {
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }
        return call && (typeof call === "object" || typeof call === "function") ? call : self2;
      }
      function _inherits(subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
          throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
        }
        subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });
        if (superClass)
          Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
      }
      var MSI11 = function(_MSI) {
        _inherits(MSI112, _MSI);
        function MSI112(data, options) {
          _classCallCheck(this, MSI112);
          return _possibleConstructorReturn(this, (MSI112.__proto__ || Object.getPrototypeOf(MSI112)).call(this, data + (0, _checksums.mod11)(data), options));
        }
        return MSI112;
      }(_MSI3.default);
      exports.default = MSI11;
    }
  });

  // ../optic_store/node_modules/jsbarcode/bin/barcodes/MSI/MSI1010.js
  var require_MSI1010 = __commonJS({
    "../optic_store/node_modules/jsbarcode/bin/barcodes/MSI/MSI1010.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      var _MSI2 = require_MSI();
      var _MSI3 = _interopRequireDefault(_MSI2);
      var _checksums = require_checksums();
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }
      function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }
      function _possibleConstructorReturn(self2, call) {
        if (!self2) {
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }
        return call && (typeof call === "object" || typeof call === "function") ? call : self2;
      }
      function _inherits(subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
          throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
        }
        subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });
        if (superClass)
          Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
      }
      var MSI1010 = function(_MSI) {
        _inherits(MSI10102, _MSI);
        function MSI10102(data, options) {
          _classCallCheck(this, MSI10102);
          data += (0, _checksums.mod10)(data);
          data += (0, _checksums.mod10)(data);
          return _possibleConstructorReturn(this, (MSI10102.__proto__ || Object.getPrototypeOf(MSI10102)).call(this, data, options));
        }
        return MSI10102;
      }(_MSI3.default);
      exports.default = MSI1010;
    }
  });

  // ../optic_store/node_modules/jsbarcode/bin/barcodes/MSI/MSI1110.js
  var require_MSI1110 = __commonJS({
    "../optic_store/node_modules/jsbarcode/bin/barcodes/MSI/MSI1110.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      var _MSI2 = require_MSI();
      var _MSI3 = _interopRequireDefault(_MSI2);
      var _checksums = require_checksums();
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }
      function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }
      function _possibleConstructorReturn(self2, call) {
        if (!self2) {
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }
        return call && (typeof call === "object" || typeof call === "function") ? call : self2;
      }
      function _inherits(subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
          throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
        }
        subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });
        if (superClass)
          Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
      }
      var MSI1110 = function(_MSI) {
        _inherits(MSI11102, _MSI);
        function MSI11102(data, options) {
          _classCallCheck(this, MSI11102);
          data += (0, _checksums.mod11)(data);
          data += (0, _checksums.mod10)(data);
          return _possibleConstructorReturn(this, (MSI11102.__proto__ || Object.getPrototypeOf(MSI11102)).call(this, data, options));
        }
        return MSI11102;
      }(_MSI3.default);
      exports.default = MSI1110;
    }
  });

  // ../optic_store/node_modules/jsbarcode/bin/barcodes/MSI/index.js
  var require_MSI2 = __commonJS({
    "../optic_store/node_modules/jsbarcode/bin/barcodes/MSI/index.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.MSI1110 = exports.MSI1010 = exports.MSI11 = exports.MSI10 = exports.MSI = void 0;
      var _MSI = require_MSI();
      var _MSI2 = _interopRequireDefault(_MSI);
      var _MSI3 = require_MSI10();
      var _MSI4 = _interopRequireDefault(_MSI3);
      var _MSI5 = require_MSI11();
      var _MSI6 = _interopRequireDefault(_MSI5);
      var _MSI7 = require_MSI1010();
      var _MSI8 = _interopRequireDefault(_MSI7);
      var _MSI9 = require_MSI1110();
      var _MSI10 = _interopRequireDefault(_MSI9);
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }
      exports.MSI = _MSI2.default;
      exports.MSI10 = _MSI4.default;
      exports.MSI11 = _MSI6.default;
      exports.MSI1010 = _MSI8.default;
      exports.MSI1110 = _MSI10.default;
    }
  });

  // ../optic_store/node_modules/jsbarcode/bin/barcodes/pharmacode/index.js
  var require_pharmacode = __commonJS({
    "../optic_store/node_modules/jsbarcode/bin/barcodes/pharmacode/index.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.pharmacode = void 0;
      var _createClass = function() {
        function defineProperties(target, props) {
          for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor)
              descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
          }
        }
        return function(Constructor, protoProps, staticProps) {
          if (protoProps)
            defineProperties(Constructor.prototype, protoProps);
          if (staticProps)
            defineProperties(Constructor, staticProps);
          return Constructor;
        };
      }();
      var _Barcode2 = require_Barcode();
      var _Barcode3 = _interopRequireDefault(_Barcode2);
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }
      function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }
      function _possibleConstructorReturn(self2, call) {
        if (!self2) {
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }
        return call && (typeof call === "object" || typeof call === "function") ? call : self2;
      }
      function _inherits(subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
          throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
        }
        subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });
        if (superClass)
          Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
      }
      var pharmacode = function(_Barcode) {
        _inherits(pharmacode2, _Barcode);
        function pharmacode2(data, options) {
          _classCallCheck(this, pharmacode2);
          var _this = _possibleConstructorReturn(this, (pharmacode2.__proto__ || Object.getPrototypeOf(pharmacode2)).call(this, data, options));
          _this.number = parseInt(data, 10);
          return _this;
        }
        _createClass(pharmacode2, [{
          key: "encode",
          value: function encode() {
            var z = this.number;
            var result = "";
            while (!isNaN(z) && z != 0) {
              if (z % 2 === 0) {
                result = "11100" + result;
                z = (z - 2) / 2;
              } else {
                result = "100" + result;
                z = (z - 1) / 2;
              }
            }
            result = result.slice(0, -2);
            return {
              data: result,
              text: this.text
            };
          }
        }, {
          key: "valid",
          value: function valid() {
            return this.number >= 3 && this.number <= 131070;
          }
        }]);
        return pharmacode2;
      }(_Barcode3.default);
      exports.pharmacode = pharmacode;
    }
  });

  // ../optic_store/node_modules/jsbarcode/bin/barcodes/codabar/index.js
  var require_codabar = __commonJS({
    "../optic_store/node_modules/jsbarcode/bin/barcodes/codabar/index.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.codabar = void 0;
      var _createClass = function() {
        function defineProperties(target, props) {
          for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor)
              descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
          }
        }
        return function(Constructor, protoProps, staticProps) {
          if (protoProps)
            defineProperties(Constructor.prototype, protoProps);
          if (staticProps)
            defineProperties(Constructor, staticProps);
          return Constructor;
        };
      }();
      var _Barcode2 = require_Barcode();
      var _Barcode3 = _interopRequireDefault(_Barcode2);
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }
      function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }
      function _possibleConstructorReturn(self2, call) {
        if (!self2) {
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }
        return call && (typeof call === "object" || typeof call === "function") ? call : self2;
      }
      function _inherits(subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
          throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
        }
        subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });
        if (superClass)
          Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
      }
      var codabar = function(_Barcode) {
        _inherits(codabar2, _Barcode);
        function codabar2(data, options) {
          _classCallCheck(this, codabar2);
          if (data.search(/^[0-9\-\$\:\.\+\/]+$/) === 0) {
            data = "A" + data + "A";
          }
          var _this = _possibleConstructorReturn(this, (codabar2.__proto__ || Object.getPrototypeOf(codabar2)).call(this, data.toUpperCase(), options));
          _this.text = _this.options.text || _this.text.replace(/[A-D]/g, "");
          return _this;
        }
        _createClass(codabar2, [{
          key: "valid",
          value: function valid() {
            return this.data.search(/^[A-D][0-9\-\$\:\.\+\/]+[A-D]$/) !== -1;
          }
        }, {
          key: "encode",
          value: function encode() {
            var result = [];
            var encodings = this.getEncodings();
            for (var i = 0; i < this.data.length; i++) {
              result.push(encodings[this.data.charAt(i)]);
              if (i !== this.data.length - 1) {
                result.push("0");
              }
            }
            return {
              text: this.text,
              data: result.join("")
            };
          }
        }, {
          key: "getEncodings",
          value: function getEncodings() {
            return {
              "0": "101010011",
              "1": "101011001",
              "2": "101001011",
              "3": "110010101",
              "4": "101101001",
              "5": "110101001",
              "6": "100101011",
              "7": "100101101",
              "8": "100110101",
              "9": "110100101",
              "-": "101001101",
              "$": "101100101",
              ":": "1101011011",
              "/": "1101101011",
              ".": "1101101101",
              "+": "1011011011",
              "A": "1011001001",
              "B": "1001001011",
              "C": "1010010011",
              "D": "1010011001"
            };
          }
        }]);
        return codabar2;
      }(_Barcode3.default);
      exports.codabar = codabar;
    }
  });

  // ../optic_store/node_modules/jsbarcode/bin/barcodes/CODE93/constants.js
  var require_constants4 = __commonJS({
    "../optic_store/node_modules/jsbarcode/bin/barcodes/CODE93/constants.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      var SYMBOLS = exports.SYMBOLS = [
        "0",
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
        "A",
        "B",
        "C",
        "D",
        "E",
        "F",
        "G",
        "H",
        "I",
        "J",
        "K",
        "L",
        "M",
        "N",
        "O",
        "P",
        "Q",
        "R",
        "S",
        "T",
        "U",
        "V",
        "W",
        "X",
        "Y",
        "Z",
        "-",
        ".",
        " ",
        "$",
        "/",
        "+",
        "%",
        "($)",
        "(%)",
        "(/)",
        "(+)",
        "\xFF"
      ];
      var BINARIES = exports.BINARIES = ["100010100", "101001000", "101000100", "101000010", "100101000", "100100100", "100100010", "101010000", "100010010", "100001010", "110101000", "110100100", "110100010", "110010100", "110010010", "110001010", "101101000", "101100100", "101100010", "100110100", "100011010", "101011000", "101001100", "101000110", "100101100", "100010110", "110110100", "110110010", "110101100", "110100110", "110010110", "110011010", "101101100", "101100110", "100110110", "100111010", "100101110", "111010100", "111010010", "111001010", "101101110", "101110110", "110101110", "100100110", "111011010", "111010110", "100110010", "101011110"];
      var MULTI_SYMBOLS = exports.MULTI_SYMBOLS = {
        "\0": ["(%)", "U"],
        "": ["($)", "A"],
        "": ["($)", "B"],
        "": ["($)", "C"],
        "": ["($)", "D"],
        "": ["($)", "E"],
        "": ["($)", "F"],
        "\x07": ["($)", "G"],
        "\b": ["($)", "H"],
        "	": ["($)", "I"],
        "\n": ["($)", "J"],
        "\v": ["($)", "K"],
        "\f": ["($)", "L"],
        "\r": ["($)", "M"],
        "": ["($)", "N"],
        "": ["($)", "O"],
        "": ["($)", "P"],
        "": ["($)", "Q"],
        "": ["($)", "R"],
        "": ["($)", "S"],
        "": ["($)", "T"],
        "": ["($)", "U"],
        "": ["($)", "V"],
        "": ["($)", "W"],
        "": ["($)", "X"],
        "": ["($)", "Y"],
        "": ["($)", "Z"],
        "\x1B": ["(%)", "A"],
        "": ["(%)", "B"],
        "": ["(%)", "C"],
        "": ["(%)", "D"],
        "": ["(%)", "E"],
        "!": ["(/)", "A"],
        '"': ["(/)", "B"],
        "#": ["(/)", "C"],
        "&": ["(/)", "F"],
        "'": ["(/)", "G"],
        "(": ["(/)", "H"],
        ")": ["(/)", "I"],
        "*": ["(/)", "J"],
        ",": ["(/)", "L"],
        ":": ["(/)", "Z"],
        ";": ["(%)", "F"],
        "<": ["(%)", "G"],
        "=": ["(%)", "H"],
        ">": ["(%)", "I"],
        "?": ["(%)", "J"],
        "@": ["(%)", "V"],
        "[": ["(%)", "K"],
        "\\": ["(%)", "L"],
        "]": ["(%)", "M"],
        "^": ["(%)", "N"],
        "_": ["(%)", "O"],
        "`": ["(%)", "W"],
        "a": ["(+)", "A"],
        "b": ["(+)", "B"],
        "c": ["(+)", "C"],
        "d": ["(+)", "D"],
        "e": ["(+)", "E"],
        "f": ["(+)", "F"],
        "g": ["(+)", "G"],
        "h": ["(+)", "H"],
        "i": ["(+)", "I"],
        "j": ["(+)", "J"],
        "k": ["(+)", "K"],
        "l": ["(+)", "L"],
        "m": ["(+)", "M"],
        "n": ["(+)", "N"],
        "o": ["(+)", "O"],
        "p": ["(+)", "P"],
        "q": ["(+)", "Q"],
        "r": ["(+)", "R"],
        "s": ["(+)", "S"],
        "t": ["(+)", "T"],
        "u": ["(+)", "U"],
        "v": ["(+)", "V"],
        "w": ["(+)", "W"],
        "x": ["(+)", "X"],
        "y": ["(+)", "Y"],
        "z": ["(+)", "Z"],
        "{": ["(%)", "P"],
        "|": ["(%)", "Q"],
        "}": ["(%)", "R"],
        "~": ["(%)", "S"],
        "\x7F": ["(%)", "T"]
      };
    }
  });

  // ../optic_store/node_modules/jsbarcode/bin/barcodes/CODE93/CODE93.js
  var require_CODE93 = __commonJS({
    "../optic_store/node_modules/jsbarcode/bin/barcodes/CODE93/CODE93.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      var _createClass = function() {
        function defineProperties(target, props) {
          for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor)
              descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
          }
        }
        return function(Constructor, protoProps, staticProps) {
          if (protoProps)
            defineProperties(Constructor.prototype, protoProps);
          if (staticProps)
            defineProperties(Constructor, staticProps);
          return Constructor;
        };
      }();
      var _constants = require_constants4();
      var _Barcode2 = require_Barcode();
      var _Barcode3 = _interopRequireDefault(_Barcode2);
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }
      function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }
      function _possibleConstructorReturn(self2, call) {
        if (!self2) {
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }
        return call && (typeof call === "object" || typeof call === "function") ? call : self2;
      }
      function _inherits(subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
          throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
        }
        subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });
        if (superClass)
          Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
      }
      var CODE93 = function(_Barcode) {
        _inherits(CODE932, _Barcode);
        function CODE932(data, options) {
          _classCallCheck(this, CODE932);
          return _possibleConstructorReturn(this, (CODE932.__proto__ || Object.getPrototypeOf(CODE932)).call(this, data, options));
        }
        _createClass(CODE932, [{
          key: "valid",
          value: function valid() {
            return /^[0-9A-Z\-. $/+%]+$/.test(this.data);
          }
        }, {
          key: "encode",
          value: function encode() {
            var symbols = this.data.split("").flatMap(function(c) {
              return _constants.MULTI_SYMBOLS[c] || c;
            });
            var encoded = symbols.map(function(s) {
              return CODE932.getEncoding(s);
            }).join("");
            var csumC = CODE932.checksum(symbols, 20);
            var csumK = CODE932.checksum(symbols.concat(csumC), 15);
            return {
              text: this.text,
              data: CODE932.getEncoding("\xFF") + encoded + CODE932.getEncoding(csumC) + CODE932.getEncoding(csumK) + CODE932.getEncoding("\xFF") + "1"
            };
          }
        }], [{
          key: "getEncoding",
          value: function getEncoding(symbol) {
            return _constants.BINARIES[CODE932.symbolValue(symbol)];
          }
        }, {
          key: "getSymbol",
          value: function getSymbol(symbolValue) {
            return _constants.SYMBOLS[symbolValue];
          }
        }, {
          key: "symbolValue",
          value: function symbolValue(symbol) {
            return _constants.SYMBOLS.indexOf(symbol);
          }
        }, {
          key: "checksum",
          value: function checksum(symbols, maxWeight) {
            var csum = symbols.slice().reverse().reduce(function(sum, symbol, idx) {
              var weight = idx % maxWeight + 1;
              return sum + CODE932.symbolValue(symbol) * weight;
            }, 0);
            return CODE932.getSymbol(csum % 47);
          }
        }]);
        return CODE932;
      }(_Barcode3.default);
      exports.default = CODE93;
    }
  });

  // ../optic_store/node_modules/jsbarcode/bin/barcodes/CODE93/CODE93FullASCII.js
  var require_CODE93FullASCII = __commonJS({
    "../optic_store/node_modules/jsbarcode/bin/barcodes/CODE93/CODE93FullASCII.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      var _createClass = function() {
        function defineProperties(target, props) {
          for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor)
              descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
          }
        }
        return function(Constructor, protoProps, staticProps) {
          if (protoProps)
            defineProperties(Constructor.prototype, protoProps);
          if (staticProps)
            defineProperties(Constructor, staticProps);
          return Constructor;
        };
      }();
      var _CODE2 = require_CODE93();
      var _CODE3 = _interopRequireDefault(_CODE2);
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }
      function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }
      function _possibleConstructorReturn(self2, call) {
        if (!self2) {
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }
        return call && (typeof call === "object" || typeof call === "function") ? call : self2;
      }
      function _inherits(subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
          throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
        }
        subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });
        if (superClass)
          Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
      }
      var CODE93FullASCII = function(_CODE) {
        _inherits(CODE93FullASCII2, _CODE);
        function CODE93FullASCII2(data, options) {
          _classCallCheck(this, CODE93FullASCII2);
          return _possibleConstructorReturn(this, (CODE93FullASCII2.__proto__ || Object.getPrototypeOf(CODE93FullASCII2)).call(this, data, options));
        }
        _createClass(CODE93FullASCII2, [{
          key: "valid",
          value: function valid() {
            return /^[\x00-\x7f]+$/.test(this.data);
          }
        }]);
        return CODE93FullASCII2;
      }(_CODE3.default);
      exports.default = CODE93FullASCII;
    }
  });

  // ../optic_store/node_modules/jsbarcode/bin/barcodes/CODE93/index.js
  var require_CODE932 = __commonJS({
    "../optic_store/node_modules/jsbarcode/bin/barcodes/CODE93/index.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.CODE93FullASCII = exports.CODE93 = void 0;
      var _CODE = require_CODE93();
      var _CODE2 = _interopRequireDefault(_CODE);
      var _CODE93FullASCII = require_CODE93FullASCII();
      var _CODE93FullASCII2 = _interopRequireDefault(_CODE93FullASCII);
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }
      exports.CODE93 = _CODE2.default;
      exports.CODE93FullASCII = _CODE93FullASCII2.default;
    }
  });

  // ../optic_store/node_modules/jsbarcode/bin/barcodes/GenericBarcode/index.js
  var require_GenericBarcode = __commonJS({
    "../optic_store/node_modules/jsbarcode/bin/barcodes/GenericBarcode/index.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.GenericBarcode = void 0;
      var _createClass = function() {
        function defineProperties(target, props) {
          for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor)
              descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
          }
        }
        return function(Constructor, protoProps, staticProps) {
          if (protoProps)
            defineProperties(Constructor.prototype, protoProps);
          if (staticProps)
            defineProperties(Constructor, staticProps);
          return Constructor;
        };
      }();
      var _Barcode2 = require_Barcode();
      var _Barcode3 = _interopRequireDefault(_Barcode2);
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }
      function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }
      function _possibleConstructorReturn(self2, call) {
        if (!self2) {
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }
        return call && (typeof call === "object" || typeof call === "function") ? call : self2;
      }
      function _inherits(subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
          throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
        }
        subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });
        if (superClass)
          Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
      }
      var GenericBarcode = function(_Barcode) {
        _inherits(GenericBarcode2, _Barcode);
        function GenericBarcode2(data, options) {
          _classCallCheck(this, GenericBarcode2);
          return _possibleConstructorReturn(this, (GenericBarcode2.__proto__ || Object.getPrototypeOf(GenericBarcode2)).call(this, data, options));
        }
        _createClass(GenericBarcode2, [{
          key: "encode",
          value: function encode() {
            return {
              data: "10101010101010101010101010101010101010101",
              text: this.text
            };
          }
        }, {
          key: "valid",
          value: function valid() {
            return true;
          }
        }]);
        return GenericBarcode2;
      }(_Barcode3.default);
      exports.GenericBarcode = GenericBarcode;
    }
  });

  // ../optic_store/node_modules/jsbarcode/bin/barcodes/index.js
  var require_barcodes = __commonJS({
    "../optic_store/node_modules/jsbarcode/bin/barcodes/index.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      var _CODE = require_CODE39();
      var _CODE2 = require_CODE1282();
      var _EAN_UPC = require_EAN_UPC();
      var _ITF = require_ITF2();
      var _MSI = require_MSI2();
      var _pharmacode = require_pharmacode();
      var _codabar = require_codabar();
      var _CODE3 = require_CODE932();
      var _GenericBarcode = require_GenericBarcode();
      exports.default = {
        CODE39: _CODE.CODE39,
        CODE128: _CODE2.CODE128,
        CODE128A: _CODE2.CODE128A,
        CODE128B: _CODE2.CODE128B,
        CODE128C: _CODE2.CODE128C,
        EAN13: _EAN_UPC.EAN13,
        EAN8: _EAN_UPC.EAN8,
        EAN5: _EAN_UPC.EAN5,
        EAN2: _EAN_UPC.EAN2,
        UPC: _EAN_UPC.UPC,
        UPCE: _EAN_UPC.UPCE,
        ITF14: _ITF.ITF14,
        ITF: _ITF.ITF,
        MSI: _MSI.MSI,
        MSI10: _MSI.MSI10,
        MSI11: _MSI.MSI11,
        MSI1010: _MSI.MSI1010,
        MSI1110: _MSI.MSI1110,
        pharmacode: _pharmacode.pharmacode,
        codabar: _codabar.codabar,
        CODE93: _CODE3.CODE93,
        CODE93FullASCII: _CODE3.CODE93FullASCII,
        GenericBarcode: _GenericBarcode.GenericBarcode
      };
    }
  });

  // ../optic_store/node_modules/jsbarcode/bin/help/merge.js
  var require_merge = __commonJS({
    "../optic_store/node_modules/jsbarcode/bin/help/merge.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      var _extends = Object.assign || function(target) {
        for (var i = 1; i < arguments.length; i++) {
          var source = arguments[i];
          for (var key in source) {
            if (Object.prototype.hasOwnProperty.call(source, key)) {
              target[key] = source[key];
            }
          }
        }
        return target;
      };
      exports.default = function(old, replaceObj) {
        return _extends({}, old, replaceObj);
      };
    }
  });

  // ../optic_store/node_modules/jsbarcode/bin/help/linearizeEncodings.js
  var require_linearizeEncodings = __commonJS({
    "../optic_store/node_modules/jsbarcode/bin/help/linearizeEncodings.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = linearizeEncodings;
      function linearizeEncodings(encodings) {
        var linearEncodings = [];
        function nextLevel(encoded) {
          if (Array.isArray(encoded)) {
            for (var i = 0; i < encoded.length; i++) {
              nextLevel(encoded[i]);
            }
          } else {
            encoded.text = encoded.text || "";
            encoded.data = encoded.data || "";
            linearEncodings.push(encoded);
          }
        }
        nextLevel(encodings);
        return linearEncodings;
      }
    }
  });

  // ../optic_store/node_modules/jsbarcode/bin/help/fixOptions.js
  var require_fixOptions = __commonJS({
    "../optic_store/node_modules/jsbarcode/bin/help/fixOptions.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = fixOptions;
      function fixOptions(options) {
        options.marginTop = options.marginTop || options.margin;
        options.marginBottom = options.marginBottom || options.margin;
        options.marginRight = options.marginRight || options.margin;
        options.marginLeft = options.marginLeft || options.margin;
        return options;
      }
    }
  });

  // ../optic_store/node_modules/jsbarcode/bin/help/optionsFromStrings.js
  var require_optionsFromStrings = __commonJS({
    "../optic_store/node_modules/jsbarcode/bin/help/optionsFromStrings.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = optionsFromStrings;
      function optionsFromStrings(options) {
        var intOptions = ["width", "height", "textMargin", "fontSize", "margin", "marginTop", "marginBottom", "marginLeft", "marginRight"];
        for (var intOption in intOptions) {
          if (intOptions.hasOwnProperty(intOption)) {
            intOption = intOptions[intOption];
            if (typeof options[intOption] === "string") {
              options[intOption] = parseInt(options[intOption], 10);
            }
          }
        }
        if (typeof options["displayValue"] === "string") {
          options["displayValue"] = options["displayValue"] != "false";
        }
        return options;
      }
    }
  });

  // ../optic_store/node_modules/jsbarcode/bin/options/defaults.js
  var require_defaults = __commonJS({
    "../optic_store/node_modules/jsbarcode/bin/options/defaults.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      var defaults = {
        width: 2,
        height: 100,
        format: "auto",
        displayValue: true,
        fontOptions: "",
        font: "monospace",
        text: void 0,
        textAlign: "center",
        textPosition: "bottom",
        textMargin: 2,
        fontSize: 20,
        background: "#ffffff",
        lineColor: "#000000",
        margin: 10,
        marginTop: void 0,
        marginBottom: void 0,
        marginLeft: void 0,
        marginRight: void 0,
        valid: function valid() {
        }
      };
      exports.default = defaults;
    }
  });

  // ../optic_store/node_modules/jsbarcode/bin/help/getOptionsFromElement.js
  var require_getOptionsFromElement = __commonJS({
    "../optic_store/node_modules/jsbarcode/bin/help/getOptionsFromElement.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      var _optionsFromStrings = require_optionsFromStrings();
      var _optionsFromStrings2 = _interopRequireDefault(_optionsFromStrings);
      var _defaults = require_defaults();
      var _defaults2 = _interopRequireDefault(_defaults);
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }
      function getOptionsFromElement(element) {
        var options = {};
        for (var property in _defaults2.default) {
          if (_defaults2.default.hasOwnProperty(property)) {
            if (element.hasAttribute("jsbarcode-" + property.toLowerCase())) {
              options[property] = element.getAttribute("jsbarcode-" + property.toLowerCase());
            }
            if (element.hasAttribute("data-" + property.toLowerCase())) {
              options[property] = element.getAttribute("data-" + property.toLowerCase());
            }
          }
        }
        options["value"] = element.getAttribute("jsbarcode-value") || element.getAttribute("data-value");
        options = (0, _optionsFromStrings2.default)(options);
        return options;
      }
      exports.default = getOptionsFromElement;
    }
  });

  // ../optic_store/node_modules/jsbarcode/bin/renderers/shared.js
  var require_shared = __commonJS({
    "../optic_store/node_modules/jsbarcode/bin/renderers/shared.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.getTotalWidthOfEncodings = exports.calculateEncodingAttributes = exports.getBarcodePadding = exports.getEncodingHeight = exports.getMaximumHeightOfEncodings = void 0;
      var _merge = require_merge();
      var _merge2 = _interopRequireDefault(_merge);
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }
      function getEncodingHeight(encoding, options) {
        return options.height + (options.displayValue && encoding.text.length > 0 ? options.fontSize + options.textMargin : 0) + options.marginTop + options.marginBottom;
      }
      function getBarcodePadding(textWidth, barcodeWidth, options) {
        if (options.displayValue && barcodeWidth < textWidth) {
          if (options.textAlign == "center") {
            return Math.floor((textWidth - barcodeWidth) / 2);
          } else if (options.textAlign == "left") {
            return 0;
          } else if (options.textAlign == "right") {
            return Math.floor(textWidth - barcodeWidth);
          }
        }
        return 0;
      }
      function calculateEncodingAttributes(encodings, barcodeOptions, context) {
        for (var i = 0; i < encodings.length; i++) {
          var encoding = encodings[i];
          var options = (0, _merge2.default)(barcodeOptions, encoding.options);
          var textWidth;
          if (options.displayValue) {
            textWidth = messureText(encoding.text, options, context);
          } else {
            textWidth = 0;
          }
          var barcodeWidth = encoding.data.length * options.width;
          encoding.width = Math.ceil(Math.max(textWidth, barcodeWidth));
          encoding.height = getEncodingHeight(encoding, options);
          encoding.barcodePadding = getBarcodePadding(textWidth, barcodeWidth, options);
        }
      }
      function getTotalWidthOfEncodings(encodings) {
        var totalWidth = 0;
        for (var i = 0; i < encodings.length; i++) {
          totalWidth += encodings[i].width;
        }
        return totalWidth;
      }
      function getMaximumHeightOfEncodings(encodings) {
        var maxHeight = 0;
        for (var i = 0; i < encodings.length; i++) {
          if (encodings[i].height > maxHeight) {
            maxHeight = encodings[i].height;
          }
        }
        return maxHeight;
      }
      function messureText(string, options, context) {
        var ctx;
        if (context) {
          ctx = context;
        } else if (typeof document !== "undefined") {
          ctx = document.createElement("canvas").getContext("2d");
        } else {
          return 0;
        }
        ctx.font = options.fontOptions + " " + options.fontSize + "px " + options.font;
        var measureTextResult = ctx.measureText(string);
        if (!measureTextResult) {
          return 0;
        }
        var size = measureTextResult.width;
        return size;
      }
      exports.getMaximumHeightOfEncodings = getMaximumHeightOfEncodings;
      exports.getEncodingHeight = getEncodingHeight;
      exports.getBarcodePadding = getBarcodePadding;
      exports.calculateEncodingAttributes = calculateEncodingAttributes;
      exports.getTotalWidthOfEncodings = getTotalWidthOfEncodings;
    }
  });

  // ../optic_store/node_modules/jsbarcode/bin/renderers/canvas.js
  var require_canvas = __commonJS({
    "../optic_store/node_modules/jsbarcode/bin/renderers/canvas.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      var _createClass = function() {
        function defineProperties(target, props) {
          for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor)
              descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
          }
        }
        return function(Constructor, protoProps, staticProps) {
          if (protoProps)
            defineProperties(Constructor.prototype, protoProps);
          if (staticProps)
            defineProperties(Constructor, staticProps);
          return Constructor;
        };
      }();
      var _merge = require_merge();
      var _merge2 = _interopRequireDefault(_merge);
      var _shared = require_shared();
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }
      function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }
      var CanvasRenderer = function() {
        function CanvasRenderer2(canvas, encodings, options) {
          _classCallCheck(this, CanvasRenderer2);
          this.canvas = canvas;
          this.encodings = encodings;
          this.options = options;
        }
        _createClass(CanvasRenderer2, [{
          key: "render",
          value: function render() {
            if (!this.canvas.getContext) {
              throw new Error("The browser does not support canvas.");
            }
            this.prepareCanvas();
            for (var i = 0; i < this.encodings.length; i++) {
              var encodingOptions = (0, _merge2.default)(this.options, this.encodings[i].options);
              this.drawCanvasBarcode(encodingOptions, this.encodings[i]);
              this.drawCanvasText(encodingOptions, this.encodings[i]);
              this.moveCanvasDrawing(this.encodings[i]);
            }
            this.restoreCanvas();
          }
        }, {
          key: "prepareCanvas",
          value: function prepareCanvas() {
            var ctx = this.canvas.getContext("2d");
            ctx.save();
            (0, _shared.calculateEncodingAttributes)(this.encodings, this.options, ctx);
            var totalWidth = (0, _shared.getTotalWidthOfEncodings)(this.encodings);
            var maxHeight = (0, _shared.getMaximumHeightOfEncodings)(this.encodings);
            this.canvas.width = totalWidth + this.options.marginLeft + this.options.marginRight;
            this.canvas.height = maxHeight;
            ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
            if (this.options.background) {
              ctx.fillStyle = this.options.background;
              ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
            }
            ctx.translate(this.options.marginLeft, 0);
          }
        }, {
          key: "drawCanvasBarcode",
          value: function drawCanvasBarcode(options, encoding) {
            var ctx = this.canvas.getContext("2d");
            var binary = encoding.data;
            var yFrom;
            if (options.textPosition == "top") {
              yFrom = options.marginTop + options.fontSize + options.textMargin;
            } else {
              yFrom = options.marginTop;
            }
            ctx.fillStyle = options.lineColor;
            for (var b = 0; b < binary.length; b++) {
              var x = b * options.width + encoding.barcodePadding;
              if (binary[b] === "1") {
                ctx.fillRect(x, yFrom, options.width, options.height);
              } else if (binary[b]) {
                ctx.fillRect(x, yFrom, options.width, options.height * binary[b]);
              }
            }
          }
        }, {
          key: "drawCanvasText",
          value: function drawCanvasText(options, encoding) {
            var ctx = this.canvas.getContext("2d");
            var font = options.fontOptions + " " + options.fontSize + "px " + options.font;
            if (options.displayValue) {
              var x, y;
              if (options.textPosition == "top") {
                y = options.marginTop + options.fontSize - options.textMargin;
              } else {
                y = options.height + options.textMargin + options.marginTop + options.fontSize;
              }
              ctx.font = font;
              if (options.textAlign == "left" || encoding.barcodePadding > 0) {
                x = 0;
                ctx.textAlign = "left";
              } else if (options.textAlign == "right") {
                x = encoding.width - 1;
                ctx.textAlign = "right";
              } else {
                x = encoding.width / 2;
                ctx.textAlign = "center";
              }
              ctx.fillText(encoding.text, x, y);
            }
          }
        }, {
          key: "moveCanvasDrawing",
          value: function moveCanvasDrawing(encoding) {
            var ctx = this.canvas.getContext("2d");
            ctx.translate(encoding.width, 0);
          }
        }, {
          key: "restoreCanvas",
          value: function restoreCanvas() {
            var ctx = this.canvas.getContext("2d");
            ctx.restore();
          }
        }]);
        return CanvasRenderer2;
      }();
      exports.default = CanvasRenderer;
    }
  });

  // ../optic_store/node_modules/jsbarcode/bin/renderers/svg.js
  var require_svg = __commonJS({
    "../optic_store/node_modules/jsbarcode/bin/renderers/svg.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      var _createClass = function() {
        function defineProperties(target, props) {
          for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor)
              descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
          }
        }
        return function(Constructor, protoProps, staticProps) {
          if (protoProps)
            defineProperties(Constructor.prototype, protoProps);
          if (staticProps)
            defineProperties(Constructor, staticProps);
          return Constructor;
        };
      }();
      var _merge = require_merge();
      var _merge2 = _interopRequireDefault(_merge);
      var _shared = require_shared();
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }
      function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }
      var svgns = "http://www.w3.org/2000/svg";
      var SVGRenderer = function() {
        function SVGRenderer2(svg, encodings, options) {
          _classCallCheck(this, SVGRenderer2);
          this.svg = svg;
          this.encodings = encodings;
          this.options = options;
          this.document = options.xmlDocument || document;
        }
        _createClass(SVGRenderer2, [{
          key: "render",
          value: function render() {
            var currentX = this.options.marginLeft;
            this.prepareSVG();
            for (var i = 0; i < this.encodings.length; i++) {
              var encoding = this.encodings[i];
              var encodingOptions = (0, _merge2.default)(this.options, encoding.options);
              var group = this.createGroup(currentX, encodingOptions.marginTop, this.svg);
              this.setGroupOptions(group, encodingOptions);
              this.drawSvgBarcode(group, encodingOptions, encoding);
              this.drawSVGText(group, encodingOptions, encoding);
              currentX += encoding.width;
            }
          }
        }, {
          key: "prepareSVG",
          value: function prepareSVG() {
            while (this.svg.firstChild) {
              this.svg.removeChild(this.svg.firstChild);
            }
            (0, _shared.calculateEncodingAttributes)(this.encodings, this.options);
            var totalWidth = (0, _shared.getTotalWidthOfEncodings)(this.encodings);
            var maxHeight = (0, _shared.getMaximumHeightOfEncodings)(this.encodings);
            var width = totalWidth + this.options.marginLeft + this.options.marginRight;
            this.setSvgAttributes(width, maxHeight);
            if (this.options.background) {
              this.drawRect(0, 0, width, maxHeight, this.svg).setAttribute("style", "fill:" + this.options.background + ";");
            }
          }
        }, {
          key: "drawSvgBarcode",
          value: function drawSvgBarcode(parent, options, encoding) {
            var binary = encoding.data;
            var yFrom;
            if (options.textPosition == "top") {
              yFrom = options.fontSize + options.textMargin;
            } else {
              yFrom = 0;
            }
            var barWidth = 0;
            var x = 0;
            for (var b = 0; b < binary.length; b++) {
              x = b * options.width + encoding.barcodePadding;
              if (binary[b] === "1") {
                barWidth++;
              } else if (barWidth > 0) {
                this.drawRect(x - options.width * barWidth, yFrom, options.width * barWidth, options.height, parent);
                barWidth = 0;
              }
            }
            if (barWidth > 0) {
              this.drawRect(x - options.width * (barWidth - 1), yFrom, options.width * barWidth, options.height, parent);
            }
          }
        }, {
          key: "drawSVGText",
          value: function drawSVGText(parent, options, encoding) {
            var textElem = this.document.createElementNS(svgns, "text");
            if (options.displayValue) {
              var x, y;
              textElem.setAttribute("style", "font:" + options.fontOptions + " " + options.fontSize + "px " + options.font);
              if (options.textPosition == "top") {
                y = options.fontSize - options.textMargin;
              } else {
                y = options.height + options.textMargin + options.fontSize;
              }
              if (options.textAlign == "left" || encoding.barcodePadding > 0) {
                x = 0;
                textElem.setAttribute("text-anchor", "start");
              } else if (options.textAlign == "right") {
                x = encoding.width - 1;
                textElem.setAttribute("text-anchor", "end");
              } else {
                x = encoding.width / 2;
                textElem.setAttribute("text-anchor", "middle");
              }
              textElem.setAttribute("x", x);
              textElem.setAttribute("y", y);
              textElem.appendChild(this.document.createTextNode(encoding.text));
              parent.appendChild(textElem);
            }
          }
        }, {
          key: "setSvgAttributes",
          value: function setSvgAttributes(width, height) {
            var svg = this.svg;
            svg.setAttribute("width", width + "px");
            svg.setAttribute("height", height + "px");
            svg.setAttribute("x", "0px");
            svg.setAttribute("y", "0px");
            svg.setAttribute("viewBox", "0 0 " + width + " " + height);
            svg.setAttribute("xmlns", svgns);
            svg.setAttribute("version", "1.1");
            svg.setAttribute("style", "transform: translate(0,0)");
          }
        }, {
          key: "createGroup",
          value: function createGroup(x, y, parent) {
            var group = this.document.createElementNS(svgns, "g");
            group.setAttribute("transform", "translate(" + x + ", " + y + ")");
            parent.appendChild(group);
            return group;
          }
        }, {
          key: "setGroupOptions",
          value: function setGroupOptions(group, options) {
            group.setAttribute("style", "fill:" + options.lineColor + ";");
          }
        }, {
          key: "drawRect",
          value: function drawRect(x, y, width, height, parent) {
            var rect = this.document.createElementNS(svgns, "rect");
            rect.setAttribute("x", x);
            rect.setAttribute("y", y);
            rect.setAttribute("width", width);
            rect.setAttribute("height", height);
            parent.appendChild(rect);
            return rect;
          }
        }]);
        return SVGRenderer2;
      }();
      exports.default = SVGRenderer;
    }
  });

  // ../optic_store/node_modules/jsbarcode/bin/renderers/object.js
  var require_object = __commonJS({
    "../optic_store/node_modules/jsbarcode/bin/renderers/object.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      var _createClass = function() {
        function defineProperties(target, props) {
          for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor)
              descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
          }
        }
        return function(Constructor, protoProps, staticProps) {
          if (protoProps)
            defineProperties(Constructor.prototype, protoProps);
          if (staticProps)
            defineProperties(Constructor, staticProps);
          return Constructor;
        };
      }();
      function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }
      var ObjectRenderer = function() {
        function ObjectRenderer2(object, encodings, options) {
          _classCallCheck(this, ObjectRenderer2);
          this.object = object;
          this.encodings = encodings;
          this.options = options;
        }
        _createClass(ObjectRenderer2, [{
          key: "render",
          value: function render() {
            this.object.encodings = this.encodings;
          }
        }]);
        return ObjectRenderer2;
      }();
      exports.default = ObjectRenderer;
    }
  });

  // ../optic_store/node_modules/jsbarcode/bin/renderers/index.js
  var require_renderers = __commonJS({
    "../optic_store/node_modules/jsbarcode/bin/renderers/index.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      var _canvas = require_canvas();
      var _canvas2 = _interopRequireDefault(_canvas);
      var _svg = require_svg();
      var _svg2 = _interopRequireDefault(_svg);
      var _object = require_object();
      var _object2 = _interopRequireDefault(_object);
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }
      exports.default = { CanvasRenderer: _canvas2.default, SVGRenderer: _svg2.default, ObjectRenderer: _object2.default };
    }
  });

  // ../optic_store/node_modules/jsbarcode/bin/exceptions/exceptions.js
  var require_exceptions = __commonJS({
    "../optic_store/node_modules/jsbarcode/bin/exceptions/exceptions.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }
      function _possibleConstructorReturn(self2, call) {
        if (!self2) {
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }
        return call && (typeof call === "object" || typeof call === "function") ? call : self2;
      }
      function _inherits(subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
          throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
        }
        subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });
        if (superClass)
          Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
      }
      var InvalidInputException = function(_Error) {
        _inherits(InvalidInputException2, _Error);
        function InvalidInputException2(symbology, input) {
          _classCallCheck(this, InvalidInputException2);
          var _this = _possibleConstructorReturn(this, (InvalidInputException2.__proto__ || Object.getPrototypeOf(InvalidInputException2)).call(this));
          _this.name = "InvalidInputException";
          _this.symbology = symbology;
          _this.input = input;
          _this.message = '"' + _this.input + '" is not a valid input for ' + _this.symbology;
          return _this;
        }
        return InvalidInputException2;
      }(Error);
      var InvalidElementException = function(_Error2) {
        _inherits(InvalidElementException2, _Error2);
        function InvalidElementException2() {
          _classCallCheck(this, InvalidElementException2);
          var _this2 = _possibleConstructorReturn(this, (InvalidElementException2.__proto__ || Object.getPrototypeOf(InvalidElementException2)).call(this));
          _this2.name = "InvalidElementException";
          _this2.message = "Not supported type to render on";
          return _this2;
        }
        return InvalidElementException2;
      }(Error);
      var NoElementException = function(_Error3) {
        _inherits(NoElementException2, _Error3);
        function NoElementException2() {
          _classCallCheck(this, NoElementException2);
          var _this3 = _possibleConstructorReturn(this, (NoElementException2.__proto__ || Object.getPrototypeOf(NoElementException2)).call(this));
          _this3.name = "NoElementException";
          _this3.message = "No element to render on.";
          return _this3;
        }
        return NoElementException2;
      }(Error);
      exports.InvalidInputException = InvalidInputException;
      exports.InvalidElementException = InvalidElementException;
      exports.NoElementException = NoElementException;
    }
  });

  // ../optic_store/node_modules/jsbarcode/bin/help/getRenderProperties.js
  var require_getRenderProperties = __commonJS({
    "../optic_store/node_modules/jsbarcode/bin/help/getRenderProperties.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function(obj) {
        return typeof obj;
      } : function(obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
      };
      var _getOptionsFromElement = require_getOptionsFromElement();
      var _getOptionsFromElement2 = _interopRequireDefault(_getOptionsFromElement);
      var _renderers = require_renderers();
      var _renderers2 = _interopRequireDefault(_renderers);
      var _exceptions = require_exceptions();
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }
      function getRenderProperties(element) {
        if (typeof element === "string") {
          return querySelectedRenderProperties(element);
        } else if (Array.isArray(element)) {
          var returnArray = [];
          for (var i = 0; i < element.length; i++) {
            returnArray.push(getRenderProperties(element[i]));
          }
          return returnArray;
        } else if (typeof HTMLCanvasElement !== "undefined" && element instanceof HTMLImageElement) {
          return newCanvasRenderProperties(element);
        } else if (element && element.nodeName && element.nodeName.toLowerCase() === "svg" || typeof SVGElement !== "undefined" && element instanceof SVGElement) {
          return {
            element,
            options: (0, _getOptionsFromElement2.default)(element),
            renderer: _renderers2.default.SVGRenderer
          };
        } else if (typeof HTMLCanvasElement !== "undefined" && element instanceof HTMLCanvasElement) {
          return {
            element,
            options: (0, _getOptionsFromElement2.default)(element),
            renderer: _renderers2.default.CanvasRenderer
          };
        } else if (element && element.getContext) {
          return {
            element,
            renderer: _renderers2.default.CanvasRenderer
          };
        } else if (element && (typeof element === "undefined" ? "undefined" : _typeof(element)) === "object" && !element.nodeName) {
          return {
            element,
            renderer: _renderers2.default.ObjectRenderer
          };
        } else {
          throw new _exceptions.InvalidElementException();
        }
      }
      function querySelectedRenderProperties(string) {
        var selector = document.querySelectorAll(string);
        if (selector.length === 0) {
          return void 0;
        } else {
          var returnArray = [];
          for (var i = 0; i < selector.length; i++) {
            returnArray.push(getRenderProperties(selector[i]));
          }
          return returnArray;
        }
      }
      function newCanvasRenderProperties(imgElement) {
        var canvas = document.createElement("canvas");
        return {
          element: canvas,
          options: (0, _getOptionsFromElement2.default)(imgElement),
          renderer: _renderers2.default.CanvasRenderer,
          afterRender: function afterRender() {
            imgElement.setAttribute("src", canvas.toDataURL());
          }
        };
      }
      exports.default = getRenderProperties;
    }
  });

  // ../optic_store/node_modules/jsbarcode/bin/exceptions/ErrorHandler.js
  var require_ErrorHandler = __commonJS({
    "../optic_store/node_modules/jsbarcode/bin/exceptions/ErrorHandler.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      var _createClass = function() {
        function defineProperties(target, props) {
          for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor)
              descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
          }
        }
        return function(Constructor, protoProps, staticProps) {
          if (protoProps)
            defineProperties(Constructor.prototype, protoProps);
          if (staticProps)
            defineProperties(Constructor, staticProps);
          return Constructor;
        };
      }();
      function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }
      var ErrorHandler = function() {
        function ErrorHandler2(api) {
          _classCallCheck(this, ErrorHandler2);
          this.api = api;
        }
        _createClass(ErrorHandler2, [{
          key: "handleCatch",
          value: function handleCatch(e) {
            if (e.name === "InvalidInputException") {
              if (this.api._options.valid !== this.api._defaults.valid) {
                this.api._options.valid(false);
              } else {
                throw e.message;
              }
            } else {
              throw e;
            }
            this.api.render = function() {
            };
          }
        }, {
          key: "wrapBarcodeCall",
          value: function wrapBarcodeCall(func) {
            try {
              var result = func.apply(void 0, arguments);
              this.api._options.valid(true);
              return result;
            } catch (e) {
              this.handleCatch(e);
              return this.api;
            }
          }
        }]);
        return ErrorHandler2;
      }();
      exports.default = ErrorHandler;
    }
  });

  // ../optic_store/node_modules/jsbarcode/bin/JsBarcode.js
  var require_JsBarcode = __commonJS({
    "../optic_store/node_modules/jsbarcode/bin/JsBarcode.js"(exports, module) {
      "use strict";
      var _barcodes = require_barcodes();
      var _barcodes2 = _interopRequireDefault(_barcodes);
      var _merge = require_merge();
      var _merge2 = _interopRequireDefault(_merge);
      var _linearizeEncodings = require_linearizeEncodings();
      var _linearizeEncodings2 = _interopRequireDefault(_linearizeEncodings);
      var _fixOptions = require_fixOptions();
      var _fixOptions2 = _interopRequireDefault(_fixOptions);
      var _getRenderProperties = require_getRenderProperties();
      var _getRenderProperties2 = _interopRequireDefault(_getRenderProperties);
      var _optionsFromStrings = require_optionsFromStrings();
      var _optionsFromStrings2 = _interopRequireDefault(_optionsFromStrings);
      var _ErrorHandler = require_ErrorHandler();
      var _ErrorHandler2 = _interopRequireDefault(_ErrorHandler);
      var _exceptions = require_exceptions();
      var _defaults = require_defaults();
      var _defaults2 = _interopRequireDefault(_defaults);
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }
      var API = function API2() {
      };
      var JsBarcode2 = function JsBarcode3(element, text, options) {
        var api = new API();
        if (typeof element === "undefined") {
          throw Error("No element to render on was provided.");
        }
        api._renderProperties = (0, _getRenderProperties2.default)(element);
        api._encodings = [];
        api._options = _defaults2.default;
        api._errorHandler = new _ErrorHandler2.default(api);
        if (typeof text !== "undefined") {
          options = options || {};
          if (!options.format) {
            options.format = autoSelectBarcode();
          }
          api.options(options)[options.format](text, options).render();
        }
        return api;
      };
      JsBarcode2.getModule = function(name2) {
        return _barcodes2.default[name2];
      };
      for (name in _barcodes2.default) {
        if (_barcodes2.default.hasOwnProperty(name)) {
          registerBarcode(_barcodes2.default, name);
        }
      }
      var name;
      function registerBarcode(barcodes, name2) {
        API.prototype[name2] = API.prototype[name2.toUpperCase()] = API.prototype[name2.toLowerCase()] = function(text, options) {
          var api = this;
          return api._errorHandler.wrapBarcodeCall(function() {
            options.text = typeof options.text === "undefined" ? void 0 : "" + options.text;
            var newOptions = (0, _merge2.default)(api._options, options);
            newOptions = (0, _optionsFromStrings2.default)(newOptions);
            var Encoder = barcodes[name2];
            var encoded = encode(text, Encoder, newOptions);
            api._encodings.push(encoded);
            return api;
          });
        };
      }
      function encode(text, Encoder, options) {
        text = "" + text;
        var encoder = new Encoder(text, options);
        if (!encoder.valid()) {
          throw new _exceptions.InvalidInputException(encoder.constructor.name, text);
        }
        var encoded = encoder.encode();
        encoded = (0, _linearizeEncodings2.default)(encoded);
        for (var i = 0; i < encoded.length; i++) {
          encoded[i].options = (0, _merge2.default)(options, encoded[i].options);
        }
        return encoded;
      }
      function autoSelectBarcode() {
        if (_barcodes2.default["CODE128"]) {
          return "CODE128";
        }
        return Object.keys(_barcodes2.default)[0];
      }
      API.prototype.options = function(options) {
        this._options = (0, _merge2.default)(this._options, options);
        return this;
      };
      API.prototype.blank = function(size) {
        var zeroes = new Array(size + 1).join("0");
        this._encodings.push({ data: zeroes });
        return this;
      };
      API.prototype.init = function() {
        if (!this._renderProperties) {
          return;
        }
        if (!Array.isArray(this._renderProperties)) {
          this._renderProperties = [this._renderProperties];
        }
        var renderProperty;
        for (var i in this._renderProperties) {
          renderProperty = this._renderProperties[i];
          var options = (0, _merge2.default)(this._options, renderProperty.options);
          if (options.format == "auto") {
            options.format = autoSelectBarcode();
          }
          this._errorHandler.wrapBarcodeCall(function() {
            var text = options.value;
            var Encoder = _barcodes2.default[options.format.toUpperCase()];
            var encoded = encode(text, Encoder, options);
            render(renderProperty, encoded, options);
          });
        }
      };
      API.prototype.render = function() {
        if (!this._renderProperties) {
          throw new _exceptions.NoElementException();
        }
        if (Array.isArray(this._renderProperties)) {
          for (var i = 0; i < this._renderProperties.length; i++) {
            render(this._renderProperties[i], this._encodings, this._options);
          }
        } else {
          render(this._renderProperties, this._encodings, this._options);
        }
        return this;
      };
      API.prototype._defaults = _defaults2.default;
      function render(renderProperties, encodings, options) {
        encodings = (0, _linearizeEncodings2.default)(encodings);
        for (var i = 0; i < encodings.length; i++) {
          encodings[i].options = (0, _merge2.default)(options, encodings[i].options);
          (0, _fixOptions2.default)(encodings[i].options);
        }
        (0, _fixOptions2.default)(options);
        var Renderer = renderProperties.renderer;
        var renderer = new Renderer(renderProperties.element, encodings, options);
        renderer.render();
        if (renderProperties.afterRender) {
          renderProperties.afterRender();
        }
      }
      if (typeof window !== "undefined") {
        window.JsBarcode = JsBarcode2;
      }
      if (typeof jQuery !== "undefined") {
        jQuery.fn.JsBarcode = function(content, options) {
          var elementArray = [];
          jQuery(this).each(function() {
            elementArray.push(this);
          });
          return JsBarcode2(elementArray, content, options);
        };
      }
      module.exports = JsBarcode2;
    }
  });

  // ../optic_store/node_modules/lodash/_arrayReduce.js
  var require_arrayReduce = __commonJS({
    "../optic_store/node_modules/lodash/_arrayReduce.js"(exports, module) {
      function arrayReduce(array, iteratee, accumulator, initAccum) {
        var index = -1, length = array == null ? 0 : array.length;
        if (initAccum && length) {
          accumulator = array[++index];
        }
        while (++index < length) {
          accumulator = iteratee(accumulator, array[index], index, array);
        }
        return accumulator;
      }
      module.exports = arrayReduce;
    }
  });

  // ../optic_store/node_modules/lodash/_basePropertyOf.js
  var require_basePropertyOf = __commonJS({
    "../optic_store/node_modules/lodash/_basePropertyOf.js"(exports, module) {
      function basePropertyOf(object) {
        return function(key) {
          return object == null ? void 0 : object[key];
        };
      }
      module.exports = basePropertyOf;
    }
  });

  // ../optic_store/node_modules/lodash/_deburrLetter.js
  var require_deburrLetter = __commonJS({
    "../optic_store/node_modules/lodash/_deburrLetter.js"(exports, module) {
      var basePropertyOf = require_basePropertyOf();
      var deburredLetters = {
        "\xC0": "A",
        "\xC1": "A",
        "\xC2": "A",
        "\xC3": "A",
        "\xC4": "A",
        "\xC5": "A",
        "\xE0": "a",
        "\xE1": "a",
        "\xE2": "a",
        "\xE3": "a",
        "\xE4": "a",
        "\xE5": "a",
        "\xC7": "C",
        "\xE7": "c",
        "\xD0": "D",
        "\xF0": "d",
        "\xC8": "E",
        "\xC9": "E",
        "\xCA": "E",
        "\xCB": "E",
        "\xE8": "e",
        "\xE9": "e",
        "\xEA": "e",
        "\xEB": "e",
        "\xCC": "I",
        "\xCD": "I",
        "\xCE": "I",
        "\xCF": "I",
        "\xEC": "i",
        "\xED": "i",
        "\xEE": "i",
        "\xEF": "i",
        "\xD1": "N",
        "\xF1": "n",
        "\xD2": "O",
        "\xD3": "O",
        "\xD4": "O",
        "\xD5": "O",
        "\xD6": "O",
        "\xD8": "O",
        "\xF2": "o",
        "\xF3": "o",
        "\xF4": "o",
        "\xF5": "o",
        "\xF6": "o",
        "\xF8": "o",
        "\xD9": "U",
        "\xDA": "U",
        "\xDB": "U",
        "\xDC": "U",
        "\xF9": "u",
        "\xFA": "u",
        "\xFB": "u",
        "\xFC": "u",
        "\xDD": "Y",
        "\xFD": "y",
        "\xFF": "y",
        "\xC6": "Ae",
        "\xE6": "ae",
        "\xDE": "Th",
        "\xFE": "th",
        "\xDF": "ss",
        "\u0100": "A",
        "\u0102": "A",
        "\u0104": "A",
        "\u0101": "a",
        "\u0103": "a",
        "\u0105": "a",
        "\u0106": "C",
        "\u0108": "C",
        "\u010A": "C",
        "\u010C": "C",
        "\u0107": "c",
        "\u0109": "c",
        "\u010B": "c",
        "\u010D": "c",
        "\u010E": "D",
        "\u0110": "D",
        "\u010F": "d",
        "\u0111": "d",
        "\u0112": "E",
        "\u0114": "E",
        "\u0116": "E",
        "\u0118": "E",
        "\u011A": "E",
        "\u0113": "e",
        "\u0115": "e",
        "\u0117": "e",
        "\u0119": "e",
        "\u011B": "e",
        "\u011C": "G",
        "\u011E": "G",
        "\u0120": "G",
        "\u0122": "G",
        "\u011D": "g",
        "\u011F": "g",
        "\u0121": "g",
        "\u0123": "g",
        "\u0124": "H",
        "\u0126": "H",
        "\u0125": "h",
        "\u0127": "h",
        "\u0128": "I",
        "\u012A": "I",
        "\u012C": "I",
        "\u012E": "I",
        "\u0130": "I",
        "\u0129": "i",
        "\u012B": "i",
        "\u012D": "i",
        "\u012F": "i",
        "\u0131": "i",
        "\u0134": "J",
        "\u0135": "j",
        "\u0136": "K",
        "\u0137": "k",
        "\u0138": "k",
        "\u0139": "L",
        "\u013B": "L",
        "\u013D": "L",
        "\u013F": "L",
        "\u0141": "L",
        "\u013A": "l",
        "\u013C": "l",
        "\u013E": "l",
        "\u0140": "l",
        "\u0142": "l",
        "\u0143": "N",
        "\u0145": "N",
        "\u0147": "N",
        "\u014A": "N",
        "\u0144": "n",
        "\u0146": "n",
        "\u0148": "n",
        "\u014B": "n",
        "\u014C": "O",
        "\u014E": "O",
        "\u0150": "O",
        "\u014D": "o",
        "\u014F": "o",
        "\u0151": "o",
        "\u0154": "R",
        "\u0156": "R",
        "\u0158": "R",
        "\u0155": "r",
        "\u0157": "r",
        "\u0159": "r",
        "\u015A": "S",
        "\u015C": "S",
        "\u015E": "S",
        "\u0160": "S",
        "\u015B": "s",
        "\u015D": "s",
        "\u015F": "s",
        "\u0161": "s",
        "\u0162": "T",
        "\u0164": "T",
        "\u0166": "T",
        "\u0163": "t",
        "\u0165": "t",
        "\u0167": "t",
        "\u0168": "U",
        "\u016A": "U",
        "\u016C": "U",
        "\u016E": "U",
        "\u0170": "U",
        "\u0172": "U",
        "\u0169": "u",
        "\u016B": "u",
        "\u016D": "u",
        "\u016F": "u",
        "\u0171": "u",
        "\u0173": "u",
        "\u0174": "W",
        "\u0175": "w",
        "\u0176": "Y",
        "\u0177": "y",
        "\u0178": "Y",
        "\u0179": "Z",
        "\u017B": "Z",
        "\u017D": "Z",
        "\u017A": "z",
        "\u017C": "z",
        "\u017E": "z",
        "\u0132": "IJ",
        "\u0133": "ij",
        "\u0152": "Oe",
        "\u0153": "oe",
        "\u0149": "'n",
        "\u017F": "s"
      };
      var deburrLetter = basePropertyOf(deburredLetters);
      module.exports = deburrLetter;
    }
  });

  // ../optic_store/node_modules/lodash/deburr.js
  var require_deburr = __commonJS({
    "../optic_store/node_modules/lodash/deburr.js"(exports, module) {
      var deburrLetter = require_deburrLetter();
      var toString = require_toString();
      var reLatin = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g;
      var rsComboMarksRange = "\\u0300-\\u036f";
      var reComboHalfMarksRange = "\\ufe20-\\ufe2f";
      var rsComboSymbolsRange = "\\u20d0-\\u20ff";
      var rsComboRange = rsComboMarksRange + reComboHalfMarksRange + rsComboSymbolsRange;
      var rsCombo = "[" + rsComboRange + "]";
      var reComboMark = RegExp(rsCombo, "g");
      function deburr(string) {
        string = toString(string);
        return string && string.replace(reLatin, deburrLetter).replace(reComboMark, "");
      }
      module.exports = deburr;
    }
  });

  // ../optic_store/node_modules/lodash/_asciiWords.js
  var require_asciiWords = __commonJS({
    "../optic_store/node_modules/lodash/_asciiWords.js"(exports, module) {
      var reAsciiWord = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;
      function asciiWords(string) {
        return string.match(reAsciiWord) || [];
      }
      module.exports = asciiWords;
    }
  });

  // ../optic_store/node_modules/lodash/_hasUnicodeWord.js
  var require_hasUnicodeWord = __commonJS({
    "../optic_store/node_modules/lodash/_hasUnicodeWord.js"(exports, module) {
      var reHasUnicodeWord = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;
      function hasUnicodeWord(string) {
        return reHasUnicodeWord.test(string);
      }
      module.exports = hasUnicodeWord;
    }
  });

  // ../optic_store/node_modules/lodash/_unicodeWords.js
  var require_unicodeWords = __commonJS({
    "../optic_store/node_modules/lodash/_unicodeWords.js"(exports, module) {
      var rsAstralRange = "\\ud800-\\udfff";
      var rsComboMarksRange = "\\u0300-\\u036f";
      var reComboHalfMarksRange = "\\ufe20-\\ufe2f";
      var rsComboSymbolsRange = "\\u20d0-\\u20ff";
      var rsComboRange = rsComboMarksRange + reComboHalfMarksRange + rsComboSymbolsRange;
      var rsDingbatRange = "\\u2700-\\u27bf";
      var rsLowerRange = "a-z\\xdf-\\xf6\\xf8-\\xff";
      var rsMathOpRange = "\\xac\\xb1\\xd7\\xf7";
      var rsNonCharRange = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf";
      var rsPunctuationRange = "\\u2000-\\u206f";
      var rsSpaceRange = " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000";
      var rsUpperRange = "A-Z\\xc0-\\xd6\\xd8-\\xde";
      var rsVarRange = "\\ufe0e\\ufe0f";
      var rsBreakRange = rsMathOpRange + rsNonCharRange + rsPunctuationRange + rsSpaceRange;
      var rsApos = "['\u2019]";
      var rsBreak = "[" + rsBreakRange + "]";
      var rsCombo = "[" + rsComboRange + "]";
      var rsDigits = "\\d+";
      var rsDingbat = "[" + rsDingbatRange + "]";
      var rsLower = "[" + rsLowerRange + "]";
      var rsMisc = "[^" + rsAstralRange + rsBreakRange + rsDigits + rsDingbatRange + rsLowerRange + rsUpperRange + "]";
      var rsFitz = "\\ud83c[\\udffb-\\udfff]";
      var rsModifier = "(?:" + rsCombo + "|" + rsFitz + ")";
      var rsNonAstral = "[^" + rsAstralRange + "]";
      var rsRegional = "(?:\\ud83c[\\udde6-\\uddff]){2}";
      var rsSurrPair = "[\\ud800-\\udbff][\\udc00-\\udfff]";
      var rsUpper = "[" + rsUpperRange + "]";
      var rsZWJ = "\\u200d";
      var rsMiscLower = "(?:" + rsLower + "|" + rsMisc + ")";
      var rsMiscUpper = "(?:" + rsUpper + "|" + rsMisc + ")";
      var rsOptContrLower = "(?:" + rsApos + "(?:d|ll|m|re|s|t|ve))?";
      var rsOptContrUpper = "(?:" + rsApos + "(?:D|LL|M|RE|S|T|VE))?";
      var reOptMod = rsModifier + "?";
      var rsOptVar = "[" + rsVarRange + "]?";
      var rsOptJoin = "(?:" + rsZWJ + "(?:" + [rsNonAstral, rsRegional, rsSurrPair].join("|") + ")" + rsOptVar + reOptMod + ")*";
      var rsOrdLower = "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])";
      var rsOrdUpper = "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])";
      var rsSeq = rsOptVar + reOptMod + rsOptJoin;
      var rsEmoji = "(?:" + [rsDingbat, rsRegional, rsSurrPair].join("|") + ")" + rsSeq;
      var reUnicodeWord = RegExp([
        rsUpper + "?" + rsLower + "+" + rsOptContrLower + "(?=" + [rsBreak, rsUpper, "$"].join("|") + ")",
        rsMiscUpper + "+" + rsOptContrUpper + "(?=" + [rsBreak, rsUpper + rsMiscLower, "$"].join("|") + ")",
        rsUpper + "?" + rsMiscLower + "+" + rsOptContrLower,
        rsUpper + "+" + rsOptContrUpper,
        rsOrdUpper,
        rsOrdLower,
        rsDigits,
        rsEmoji
      ].join("|"), "g");
      function unicodeWords(string) {
        return string.match(reUnicodeWord) || [];
      }
      module.exports = unicodeWords;
    }
  });

  // ../optic_store/node_modules/lodash/words.js
  var require_words = __commonJS({
    "../optic_store/node_modules/lodash/words.js"(exports, module) {
      var asciiWords = require_asciiWords();
      var hasUnicodeWord = require_hasUnicodeWord();
      var toString = require_toString();
      var unicodeWords = require_unicodeWords();
      function words(string, pattern, guard) {
        string = toString(string);
        pattern = guard ? void 0 : pattern;
        if (pattern === void 0) {
          return hasUnicodeWord(string) ? unicodeWords(string) : asciiWords(string);
        }
        return string.match(pattern) || [];
      }
      module.exports = words;
    }
  });

  // ../optic_store/node_modules/lodash/_createCompounder.js
  var require_createCompounder = __commonJS({
    "../optic_store/node_modules/lodash/_createCompounder.js"(exports, module) {
      var arrayReduce = require_arrayReduce();
      var deburr = require_deburr();
      var words = require_words();
      var rsApos = "['\u2019]";
      var reApos = RegExp(rsApos, "g");
      function createCompounder(callback) {
        return function(string) {
          return arrayReduce(words(deburr(string).replace(reApos, "")), callback, "");
        };
      }
      module.exports = createCompounder;
    }
  });

  // ../optic_store/node_modules/lodash/_baseSlice.js
  var require_baseSlice = __commonJS({
    "../optic_store/node_modules/lodash/_baseSlice.js"(exports, module) {
      function baseSlice(array, start, end) {
        var index = -1, length = array.length;
        if (start < 0) {
          start = -start > length ? 0 : length + start;
        }
        end = end > length ? length : end;
        if (end < 0) {
          end += length;
        }
        length = start > end ? 0 : end - start >>> 0;
        start >>>= 0;
        var result = Array(length);
        while (++index < length) {
          result[index] = array[index + start];
        }
        return result;
      }
      module.exports = baseSlice;
    }
  });

  // ../optic_store/node_modules/lodash/_castSlice.js
  var require_castSlice = __commonJS({
    "../optic_store/node_modules/lodash/_castSlice.js"(exports, module) {
      var baseSlice = require_baseSlice();
      function castSlice(array, start, end) {
        var length = array.length;
        end = end === void 0 ? length : end;
        return !start && end >= length ? array : baseSlice(array, start, end);
      }
      module.exports = castSlice;
    }
  });

  // ../optic_store/node_modules/lodash/_hasUnicode.js
  var require_hasUnicode = __commonJS({
    "../optic_store/node_modules/lodash/_hasUnicode.js"(exports, module) {
      var rsAstralRange = "\\ud800-\\udfff";
      var rsComboMarksRange = "\\u0300-\\u036f";
      var reComboHalfMarksRange = "\\ufe20-\\ufe2f";
      var rsComboSymbolsRange = "\\u20d0-\\u20ff";
      var rsComboRange = rsComboMarksRange + reComboHalfMarksRange + rsComboSymbolsRange;
      var rsVarRange = "\\ufe0e\\ufe0f";
      var rsZWJ = "\\u200d";
      var reHasUnicode = RegExp("[" + rsZWJ + rsAstralRange + rsComboRange + rsVarRange + "]");
      function hasUnicode(string) {
        return reHasUnicode.test(string);
      }
      module.exports = hasUnicode;
    }
  });

  // ../optic_store/node_modules/lodash/_asciiToArray.js
  var require_asciiToArray = __commonJS({
    "../optic_store/node_modules/lodash/_asciiToArray.js"(exports, module) {
      function asciiToArray(string) {
        return string.split("");
      }
      module.exports = asciiToArray;
    }
  });

  // ../optic_store/node_modules/lodash/_unicodeToArray.js
  var require_unicodeToArray = __commonJS({
    "../optic_store/node_modules/lodash/_unicodeToArray.js"(exports, module) {
      var rsAstralRange = "\\ud800-\\udfff";
      var rsComboMarksRange = "\\u0300-\\u036f";
      var reComboHalfMarksRange = "\\ufe20-\\ufe2f";
      var rsComboSymbolsRange = "\\u20d0-\\u20ff";
      var rsComboRange = rsComboMarksRange + reComboHalfMarksRange + rsComboSymbolsRange;
      var rsVarRange = "\\ufe0e\\ufe0f";
      var rsAstral = "[" + rsAstralRange + "]";
      var rsCombo = "[" + rsComboRange + "]";
      var rsFitz = "\\ud83c[\\udffb-\\udfff]";
      var rsModifier = "(?:" + rsCombo + "|" + rsFitz + ")";
      var rsNonAstral = "[^" + rsAstralRange + "]";
      var rsRegional = "(?:\\ud83c[\\udde6-\\uddff]){2}";
      var rsSurrPair = "[\\ud800-\\udbff][\\udc00-\\udfff]";
      var rsZWJ = "\\u200d";
      var reOptMod = rsModifier + "?";
      var rsOptVar = "[" + rsVarRange + "]?";
      var rsOptJoin = "(?:" + rsZWJ + "(?:" + [rsNonAstral, rsRegional, rsSurrPair].join("|") + ")" + rsOptVar + reOptMod + ")*";
      var rsSeq = rsOptVar + reOptMod + rsOptJoin;
      var rsSymbol = "(?:" + [rsNonAstral + rsCombo + "?", rsCombo, rsRegional, rsSurrPair, rsAstral].join("|") + ")";
      var reUnicode = RegExp(rsFitz + "(?=" + rsFitz + ")|" + rsSymbol + rsSeq, "g");
      function unicodeToArray(string) {
        return string.match(reUnicode) || [];
      }
      module.exports = unicodeToArray;
    }
  });

  // ../optic_store/node_modules/lodash/_stringToArray.js
  var require_stringToArray = __commonJS({
    "../optic_store/node_modules/lodash/_stringToArray.js"(exports, module) {
      var asciiToArray = require_asciiToArray();
      var hasUnicode = require_hasUnicode();
      var unicodeToArray = require_unicodeToArray();
      function stringToArray(string) {
        return hasUnicode(string) ? unicodeToArray(string) : asciiToArray(string);
      }
      module.exports = stringToArray;
    }
  });

  // ../optic_store/node_modules/lodash/_createCaseFirst.js
  var require_createCaseFirst = __commonJS({
    "../optic_store/node_modules/lodash/_createCaseFirst.js"(exports, module) {
      var castSlice = require_castSlice();
      var hasUnicode = require_hasUnicode();
      var stringToArray = require_stringToArray();
      var toString = require_toString();
      function createCaseFirst(methodName) {
        return function(string) {
          string = toString(string);
          var strSymbols = hasUnicode(string) ? stringToArray(string) : void 0;
          var chr = strSymbols ? strSymbols[0] : string.charAt(0);
          var trailing = strSymbols ? castSlice(strSymbols, 1).join("") : string.slice(1);
          return chr[methodName]() + trailing;
        };
      }
      module.exports = createCaseFirst;
    }
  });

  // ../optic_store/node_modules/lodash/upperFirst.js
  var require_upperFirst = __commonJS({
    "../optic_store/node_modules/lodash/upperFirst.js"(exports, module) {
      var createCaseFirst = require_createCaseFirst();
      var upperFirst = createCaseFirst("toUpperCase");
      module.exports = upperFirst;
    }
  });

  // ../optic_store/node_modules/lodash/startCase.js
  var require_startCase = __commonJS({
    "../optic_store/node_modules/lodash/startCase.js"(exports, module) {
      var createCompounder = require_createCompounder();
      var upperFirst = require_upperFirst();
      var startCase2 = createCompounder(function(result, word, index) {
        return result + (index ? " " : "") + upperFirst(word);
      });
      module.exports = startCase2;
    }
  });

  // ../optic_store/node_modules/lodash/_baseCreate.js
  var require_baseCreate = __commonJS({
    "../optic_store/node_modules/lodash/_baseCreate.js"(exports, module) {
      var isObject = require_isObject();
      var objectCreate = Object.create;
      var baseCreate = function() {
        function object() {
        }
        return function(proto) {
          if (!isObject(proto)) {
            return {};
          }
          if (objectCreate) {
            return objectCreate(proto);
          }
          object.prototype = proto;
          var result = new object();
          object.prototype = void 0;
          return result;
        };
      }();
      module.exports = baseCreate;
    }
  });

  // ../optic_store/node_modules/lodash/_baseLodash.js
  var require_baseLodash = __commonJS({
    "../optic_store/node_modules/lodash/_baseLodash.js"(exports, module) {
      function baseLodash() {
      }
      module.exports = baseLodash;
    }
  });

  // ../optic_store/node_modules/lodash/_LodashWrapper.js
  var require_LodashWrapper = __commonJS({
    "../optic_store/node_modules/lodash/_LodashWrapper.js"(exports, module) {
      var baseCreate = require_baseCreate();
      var baseLodash = require_baseLodash();
      function LodashWrapper(value, chainAll) {
        this.__wrapped__ = value;
        this.__actions__ = [];
        this.__chain__ = !!chainAll;
        this.__index__ = 0;
        this.__values__ = void 0;
      }
      LodashWrapper.prototype = baseCreate(baseLodash.prototype);
      LodashWrapper.prototype.constructor = LodashWrapper;
      module.exports = LodashWrapper;
    }
  });

  // ../optic_store/node_modules/lodash/_metaMap.js
  var require_metaMap = __commonJS({
    "../optic_store/node_modules/lodash/_metaMap.js"(exports, module) {
      var WeakMap = require_WeakMap();
      var metaMap = WeakMap && new WeakMap();
      module.exports = metaMap;
    }
  });

  // ../optic_store/node_modules/lodash/noop.js
  var require_noop = __commonJS({
    "../optic_store/node_modules/lodash/noop.js"(exports, module) {
      function noop() {
      }
      module.exports = noop;
    }
  });

  // ../optic_store/node_modules/lodash/_getData.js
  var require_getData = __commonJS({
    "../optic_store/node_modules/lodash/_getData.js"(exports, module) {
      var metaMap = require_metaMap();
      var noop = require_noop();
      var getData = !metaMap ? noop : function(func) {
        return metaMap.get(func);
      };
      module.exports = getData;
    }
  });

  // ../optic_store/node_modules/lodash/_realNames.js
  var require_realNames = __commonJS({
    "../optic_store/node_modules/lodash/_realNames.js"(exports, module) {
      var realNames = {};
      module.exports = realNames;
    }
  });

  // ../optic_store/node_modules/lodash/_getFuncName.js
  var require_getFuncName = __commonJS({
    "../optic_store/node_modules/lodash/_getFuncName.js"(exports, module) {
      var realNames = require_realNames();
      var objectProto = Object.prototype;
      var hasOwnProperty = objectProto.hasOwnProperty;
      function getFuncName(func) {
        var result = func.name + "", array = realNames[result], length = hasOwnProperty.call(realNames, result) ? array.length : 0;
        while (length--) {
          var data = array[length], otherFunc = data.func;
          if (otherFunc == null || otherFunc == func) {
            return data.name;
          }
        }
        return result;
      }
      module.exports = getFuncName;
    }
  });

  // ../optic_store/node_modules/lodash/_LazyWrapper.js
  var require_LazyWrapper = __commonJS({
    "../optic_store/node_modules/lodash/_LazyWrapper.js"(exports, module) {
      var baseCreate = require_baseCreate();
      var baseLodash = require_baseLodash();
      var MAX_ARRAY_LENGTH = 4294967295;
      function LazyWrapper(value) {
        this.__wrapped__ = value;
        this.__actions__ = [];
        this.__dir__ = 1;
        this.__filtered__ = false;
        this.__iteratees__ = [];
        this.__takeCount__ = MAX_ARRAY_LENGTH;
        this.__views__ = [];
      }
      LazyWrapper.prototype = baseCreate(baseLodash.prototype);
      LazyWrapper.prototype.constructor = LazyWrapper;
      module.exports = LazyWrapper;
    }
  });

  // ../optic_store/node_modules/lodash/_copyArray.js
  var require_copyArray = __commonJS({
    "../optic_store/node_modules/lodash/_copyArray.js"(exports, module) {
      function copyArray(source, array) {
        var index = -1, length = source.length;
        array || (array = Array(length));
        while (++index < length) {
          array[index] = source[index];
        }
        return array;
      }
      module.exports = copyArray;
    }
  });

  // ../optic_store/node_modules/lodash/_wrapperClone.js
  var require_wrapperClone = __commonJS({
    "../optic_store/node_modules/lodash/_wrapperClone.js"(exports, module) {
      var LazyWrapper = require_LazyWrapper();
      var LodashWrapper = require_LodashWrapper();
      var copyArray = require_copyArray();
      function wrapperClone(wrapper) {
        if (wrapper instanceof LazyWrapper) {
          return wrapper.clone();
        }
        var result = new LodashWrapper(wrapper.__wrapped__, wrapper.__chain__);
        result.__actions__ = copyArray(wrapper.__actions__);
        result.__index__ = wrapper.__index__;
        result.__values__ = wrapper.__values__;
        return result;
      }
      module.exports = wrapperClone;
    }
  });

  // ../optic_store/node_modules/lodash/wrapperLodash.js
  var require_wrapperLodash = __commonJS({
    "../optic_store/node_modules/lodash/wrapperLodash.js"(exports, module) {
      var LazyWrapper = require_LazyWrapper();
      var LodashWrapper = require_LodashWrapper();
      var baseLodash = require_baseLodash();
      var isArray = require_isArray();
      var isObjectLike = require_isObjectLike();
      var wrapperClone = require_wrapperClone();
      var objectProto = Object.prototype;
      var hasOwnProperty = objectProto.hasOwnProperty;
      function lodash(value) {
        if (isObjectLike(value) && !isArray(value) && !(value instanceof LazyWrapper)) {
          if (value instanceof LodashWrapper) {
            return value;
          }
          if (hasOwnProperty.call(value, "__wrapped__")) {
            return wrapperClone(value);
          }
        }
        return new LodashWrapper(value);
      }
      lodash.prototype = baseLodash.prototype;
      lodash.prototype.constructor = lodash;
      module.exports = lodash;
    }
  });

  // ../optic_store/node_modules/lodash/_isLaziable.js
  var require_isLaziable = __commonJS({
    "../optic_store/node_modules/lodash/_isLaziable.js"(exports, module) {
      var LazyWrapper = require_LazyWrapper();
      var getData = require_getData();
      var getFuncName = require_getFuncName();
      var lodash = require_wrapperLodash();
      function isLaziable(func) {
        var funcName = getFuncName(func), other = lodash[funcName];
        if (typeof other != "function" || !(funcName in LazyWrapper.prototype)) {
          return false;
        }
        if (func === other) {
          return true;
        }
        var data = getData(other);
        return !!data && func === data[0];
      }
      module.exports = isLaziable;
    }
  });

  // ../optic_store/node_modules/lodash/_createFlow.js
  var require_createFlow = __commonJS({
    "../optic_store/node_modules/lodash/_createFlow.js"(exports, module) {
      var LodashWrapper = require_LodashWrapper();
      var flatRest = require_flatRest();
      var getData = require_getData();
      var getFuncName = require_getFuncName();
      var isArray = require_isArray();
      var isLaziable = require_isLaziable();
      var FUNC_ERROR_TEXT = "Expected a function";
      var WRAP_CURRY_FLAG = 8;
      var WRAP_PARTIAL_FLAG = 32;
      var WRAP_ARY_FLAG = 128;
      var WRAP_REARG_FLAG = 256;
      function createFlow(fromRight) {
        return flatRest(function(funcs) {
          var length = funcs.length, index = length, prereq = LodashWrapper.prototype.thru;
          if (fromRight) {
            funcs.reverse();
          }
          while (index--) {
            var func = funcs[index];
            if (typeof func != "function") {
              throw new TypeError(FUNC_ERROR_TEXT);
            }
            if (prereq && !wrapper && getFuncName(func) == "wrapper") {
              var wrapper = new LodashWrapper([], true);
            }
          }
          index = wrapper ? index : length;
          while (++index < length) {
            func = funcs[index];
            var funcName = getFuncName(func), data = funcName == "wrapper" ? getData(func) : void 0;
            if (data && isLaziable(data[0]) && data[1] == (WRAP_ARY_FLAG | WRAP_CURRY_FLAG | WRAP_PARTIAL_FLAG | WRAP_REARG_FLAG) && !data[4].length && data[9] == 1) {
              wrapper = wrapper[getFuncName(data[0])].apply(wrapper, data[3]);
            } else {
              wrapper = func.length == 1 && isLaziable(func) ? wrapper[funcName]() : wrapper.thru(func);
            }
          }
          return function() {
            var args = arguments, value = args[0];
            if (wrapper && args.length == 1 && isArray(value)) {
              return wrapper.plant(value).value();
            }
            var index2 = 0, result = length ? funcs[index2].apply(this, args) : value;
            while (++index2 < length) {
              result = funcs[index2].call(this, result);
            }
            return result;
          };
        });
      }
      module.exports = createFlow;
    }
  });

  // ../optic_store/node_modules/lodash/flowRight.js
  var require_flowRight = __commonJS({
    "../optic_store/node_modules/lodash/flowRight.js"(exports, module) {
      var createFlow = require_createFlow();
      var flowRight2 = createFlow(true);
      module.exports = flowRight2;
    }
  });

  // ../optic_store/optic_store/public/js/scripts/optical_prescription.js
  var import_vue = __toESM(require_vue());

  // ../optic_store/optic_store/public/js/utils/format.js
  function get_formatted(doc) {
    return function(side, param) {
      const value = doc[side ? `${param}_${side}` : param] || 0;
      if (param.includes("sph") || param.includes("cyl") || param.includes("add")) {
        const fval = parseFloat((value || "") + ".0");
        return format(param, fval);
      }
      if (param.includes("axis")) {
        return `${value}\xB0`;
      }
      if (param.includes("pd")) {
        return `${parseFloat(value).toFixed(1)}mm`;
      }
      if (param.includes("bc") || param.includes("dia") || param.includes("prism")) {
        return parseFloat(value).toFixed(2);
      }
      if (param.includes("iop")) {
        return `${parseFloat(value).toFixed(2)}mmHg`;
      }
      return value;
    };
  }
  function format(field, value) {
    if (field.includes("sph") || field.includes("cyl") || field.includes("add")) {
      return `${value >= 0 ? "+" : ""}${value.toFixed(2)}`;
    }
    return value;
  }

  // ../optic_store/optic_store/public/js/utils/constants.js
  var RX_PARAMS_SPEC_DIST = ["sph", "cyl", "axis", "va"];
  var RX_PARAMS_CONT_DIST = [...RX_PARAMS_SPEC_DIST, "bc", "dia"];
  var RX_PARAMS_SPEC_READ = RX_PARAMS_SPEC_DIST.map((params) => `${params}_reading`);
  var RX_PARAMS_CONT_READ = RX_PARAMS_CONT_DIST.map((params) => `${params}_reading`);
  var RX_PARAMS_OTHER = ["pd", "prism", "iop"];
  function get_all_rx_params() {
    const params = [
      ...RX_PARAMS_CONT_DIST,
      ...RX_PARAMS_CONT_READ,
      ...RX_PARAMS_OTHER,
      "add"
    ];
    return ["right", "left"].map((side) => params.map((param) => `${param}_${side}`)).flat();
  }
  function get_signed_fields() {
    const params = ["sph", "cyl"];
    return ["right", "left"].map((side) => [...params, ...params.map((p) => `${p}_reading`), "add"].map((p) => `${p}_${side}`)).flat();
  }
  function get_prec2_fields() {
    const params = ["bc", "dia", "prism", "iop"];
    return ["right", "left"].map((side) => [...params, ...params.map((p) => `${p}_reading`)].map((p) => `${p}_${side}`)).flat();
  }

  // ../optic_store/optic_store/public/js/components/PrescriptionFormField.vue
  var __vue_script__ = {
    props: {
      param: String,
      side: String,
      on_change: Function,
      value: String,
      disabled: Boolean,
      get_formatted: Function,
      on_blur: { type: Function, default: () => {
      } }
    },
    data: function() {
      return {
        scrubbed: this.value
      };
    },
    methods: {
      on_input: function(e) {
        this.scrubbed = this.on_change(e);
      }
    },
    watch: {
      value: function(value) {
        this.scrubbed = value;
      }
    }
  };
  var __vue_render__ = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _vm.disabled ? _c("span", { staticClass: "os-disabled like-disabled-input" }, [
      _vm._v("\n  " + _vm._s(_vm.get_formatted(_vm.side, _vm.param)) + "\n")
    ]) : _c("input", {
      directives: [
        {
          name: "model",
          rawName: "v-model",
          value: _vm.scrubbed,
          expression: "scrubbed"
        }
      ],
      staticClass: "form-control",
      attrs: { name: _vm.param + "_" + _vm.side },
      domProps: { value: _vm.scrubbed },
      on: {
        input: [
          function($event) {
            if ($event.target.composing) {
              return;
            }
            _vm.scrubbed = $event.target.value;
          },
          _vm.on_input
        ],
        blur: _vm.on_blur
      }
    });
  };
  var __vue_staticRenderFns__ = [];
  __vue_render__._withStripped = true;
  var __vue_inject_styles__ = function(inject) {
    if (!inject)
      return;
    inject("data-v-974f7048_0", { source: ".os-disabled[data-v-974f7048] {\n  font-size: inherit;\n  text-align: right;\n}\n\n/*# sourceMappingURL=PrescriptionFormField.vue.map */", map: { "version": 3, "sources": ["../optic_store/optic_store/public/js/components/PrescriptionFormField.vue", "PrescriptionFormField.vue"], "names": [], "mappings": "AA4CA;EACA,kBAAA;EACA,iBAAA;AC3CA;;AAEA,oDAAoD", "file": "PrescriptionFormField.vue", "sourcesContent": ['<template>\n  <span v-if="disabled" class="os-disabled like-disabled-input">\n    {{ get_formatted(side, param) }}\n  </span>\n  <input\n    v-else\n    class="form-control"\n    :name="`${param}_${side}`"\n    v-model="scrubbed"\n    @input="on_input"\n    @blur="on_blur"\n  />\n</template>\n\n<script>\nexport default {\n  props: {\n    param: String,\n    side: String,\n    on_change: Function,\n    value: String,\n    disabled: Boolean,\n    get_formatted: Function,\n    on_blur: { type: Function, default: () => {} },\n  },\n  data: function() {\n    return {\n      scrubbed: this.value,\n    };\n  },\n  methods: {\n    on_input: function(e) {\n      this.scrubbed = this.on_change(e);\n    },\n  },\n  watch: {\n    value: function(value) {\n      this.scrubbed = value;\n    },\n  },\n};\n<\/script>\n\n<style lang="scss" scoped>\n.os-disabled {\n  font-size: inherit;\n  text-align: right;\n}\n</style>\n', ".os-disabled {\n  font-size: inherit;\n  text-align: right;\n}\n\n/*# sourceMappingURL=PrescriptionFormField.vue.map */"] }, media: void 0 });
  };
  var __vue_scope_id__ = "data-v-974f7048";
  var __vue_module_identifier__ = void 0;
  var __vue_is_functional_template__ = false;
  function __vue_normalize__(template, style, script, scope, functional, moduleIdentifier, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
    const component = (typeof script === "function" ? script.options : script) || {};
    component.__file = "../optic_store/optic_store/public/js/components/PrescriptionFormField.vue";
    if (!component.render) {
      component.render = template.render;
      component.staticRenderFns = template.staticRenderFns;
      component._compiled = true;
      if (functional)
        component.functional = true;
    }
    component._scopeId = scope;
    if (true) {
      let hook;
      if (false) {
        hook = function(context) {
          context = context || this.$vnode && this.$vnode.ssrContext || this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext;
          if (!context && typeof __VUE_SSR_CONTEXT__ !== "undefined") {
            context = __VUE_SSR_CONTEXT__;
          }
          if (style) {
            style.call(this, createInjectorSSR(context));
          }
          if (context && context._registeredComponents) {
            context._registeredComponents.add(moduleIdentifier);
          }
        };
        component._ssrRegister = hook;
      } else if (style) {
        hook = shadowMode ? function(context) {
          style.call(this, createInjectorShadow(context, this.$root.$options.shadowRoot));
        } : function(context) {
          style.call(this, createInjector(context));
        };
      }
      if (hook !== void 0) {
        if (component.functional) {
          const originalRender = component.render;
          component.render = function renderWithStyleInjection(h, context) {
            hook.call(context);
            return originalRender(h, context);
          };
        } else {
          const existing = component.beforeCreate;
          component.beforeCreate = existing ? [].concat(existing, hook) : [hook];
        }
      }
    }
    return component;
  }
  function __vue_create_injector__() {
    const styles = __vue_create_injector__.styles || (__vue_create_injector__.styles = {});
    const isOldIE = typeof navigator !== "undefined" && /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());
    return function addStyle(id, css) {
      if (document.querySelector('style[data-vue-ssr-id~="' + id + '"]'))
        return;
      const group = isOldIE ? css.media || "default" : id;
      const style = styles[group] || (styles[group] = { ids: [], parts: [], element: void 0 });
      if (!style.ids.includes(id)) {
        let code = css.source;
        let index = style.ids.length;
        style.ids.push(id);
        if (false) {
          code += "\n/*# sourceURL=" + css.map.sources[0] + " */";
          code += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(css.map)))) + " */";
        }
        if (isOldIE) {
          style.element = style.element || document.querySelector("style[data-group=" + group + "]");
        }
        if (!style.element) {
          const head = document.head || document.getElementsByTagName("head")[0];
          const el = style.element = document.createElement("style");
          el.type = "text/css";
          if (css.media)
            el.setAttribute("media", css.media);
          if (isOldIE) {
            el.setAttribute("data-group", group);
            el.setAttribute("data-next-index", "0");
          }
          head.appendChild(el);
        }
        if (isOldIE) {
          index = parseInt(style.element.getAttribute("data-next-index"));
          style.element.setAttribute("data-next-index", index + 1);
        }
        if (style.element.styleSheet) {
          style.parts.push(code);
          style.element.styleSheet.cssText = style.parts.filter(Boolean).join("\n");
        } else {
          const textNode = document.createTextNode(code);
          const nodes = style.element.childNodes;
          if (nodes[index])
            style.element.removeChild(nodes[index]);
          if (nodes.length)
            style.element.insertBefore(textNode, nodes[index]);
          else
            style.element.appendChild(textNode);
        }
      }
    };
  }
  var __vue_component__ = /* @__PURE__ */ __vue_normalize__({ render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ }, __vue_inject_styles__, __vue_script__, __vue_scope_id__, __vue_is_functional_template__, __vue_module_identifier__, false, __vue_create_injector__, void 0, void 0);
  var PrescriptionFormField_default = __vue_component__;

  // ../optic_store/optic_store/public/js/components/PrescriptionFormSelect.vue
  var __vue_script__2 = {
    props: {
      param: String,
      side: String,
      on_change: Function,
      value: Number,
      disabled: Boolean
    },
    methods: {
      get_disp_class: function(value) {
        if (this.value) {
          return "octicon octicon-check";
        }
        return "fa fa-square disabled-check";
      },
      on_click: function(e) {
        const { name, checked } = e.target;
        return this.on_change({ target: { name, value: checked ? 1 : 0 } });
      }
    }
  };
  var __vue_render__2 = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c("div", { staticClass: "checkbox" }, [
      _c("label", [
        _vm.disabled ? _c("span", { staticClass: "disp-area" }, [
          _c("i", { class: _vm.get_disp_class(_vm.param + "_" + _vm.side) })
        ]) : _c("span", { staticClass: "input-area" }, [
          _c("input", {
            attrs: { type: "checkbox", name: _vm.param + "_" + _vm.side },
            on: { click: _vm.on_click }
          })
        ]),
        _vm._v(" "),
        _c("span", { staticClass: "label-area small" }, [
          _vm._v(_vm._s(_vm.param))
        ])
      ])
    ]);
  };
  var __vue_staticRenderFns__2 = [];
  __vue_render__2._withStripped = true;
  var __vue_inject_styles__2 = function(inject) {
    if (!inject)
      return;
    inject("data-v-560e5981_0", { source: ".checkbox[data-v-560e5981] {\n  margin: 0 0.5em;\n}\n.checkbox .octicon[data-v-560e5981] {\n  margin-right: 3px;\n}\n.checkbox .label-area[data-v-560e5981] {\n  text-transform: capitalize;\n}\n\n/*# sourceMappingURL=PrescriptionFormSelect.vue.map */", map: { "version": 3, "sources": ["../optic_store/optic_store/public/js/components/PrescriptionFormSelect.vue", "PrescriptionFormSelect.vue"], "names": [], "mappings": "AAuCA;EACA,eAAA;ACtCA;ADuCA;EACA,iBAAA;ACrCA;ADuCA;EACA,0BAAA;ACrCA;;AAEA,qDAAqD", "file": "PrescriptionFormSelect.vue", "sourcesContent": ['<template>\n  <div class="checkbox">\n    <label>\n      <span v-if="disabled" class="disp-area">\n        <i :class="get_disp_class(`${param}_${side}`)" />\n      </span>\n      <span v-else class="input-area">\n        <input type="checkbox" :name="`${param}_${side}`" @click="on_click" />\n      </span>\n      <span class="label-area small">{{ param }}</span>\n    </label>\n  </div>\n</template>\n\n<script>\nexport default {\n  props: {\n    param: String,\n    side: String,\n    on_change: Function,\n    value: Number,\n    disabled: Boolean,\n  },\n  methods: {\n    get_disp_class: function(value) {\n      if (this.value) {\n        return \'octicon octicon-check\';\n      }\n      return \'fa fa-square disabled-check\';\n    },\n    on_click: function(e) {\n      const { name, checked } = e.target;\n      return this.on_change({ target: { name, value: checked ? 1 : 0 } });\n    },\n  },\n};\n<\/script>\n\n<style lang="scss" scoped>\n.checkbox {\n  margin: 0 0.5em;\n  & .octicon {\n    margin-right: 3px;\n  }\n  & .label-area {\n    text-transform: capitalize;\n  }\n}\n</style>\n', ".checkbox {\n  margin: 0 0.5em;\n}\n.checkbox .octicon {\n  margin-right: 3px;\n}\n.checkbox .label-area {\n  text-transform: capitalize;\n}\n\n/*# sourceMappingURL=PrescriptionFormSelect.vue.map */"] }, media: void 0 });
  };
  var __vue_scope_id__2 = "data-v-560e5981";
  var __vue_module_identifier__2 = void 0;
  var __vue_is_functional_template__2 = false;
  function __vue_normalize__2(template, style, script, scope, functional, moduleIdentifier, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
    const component = (typeof script === "function" ? script.options : script) || {};
    component.__file = "../optic_store/optic_store/public/js/components/PrescriptionFormSelect.vue";
    if (!component.render) {
      component.render = template.render;
      component.staticRenderFns = template.staticRenderFns;
      component._compiled = true;
      if (functional)
        component.functional = true;
    }
    component._scopeId = scope;
    if (true) {
      let hook;
      if (false) {
        hook = function(context) {
          context = context || this.$vnode && this.$vnode.ssrContext || this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext;
          if (!context && typeof __VUE_SSR_CONTEXT__ !== "undefined") {
            context = __VUE_SSR_CONTEXT__;
          }
          if (style) {
            style.call(this, createInjectorSSR(context));
          }
          if (context && context._registeredComponents) {
            context._registeredComponents.add(moduleIdentifier);
          }
        };
        component._ssrRegister = hook;
      } else if (style) {
        hook = shadowMode ? function(context) {
          style.call(this, createInjectorShadow(context, this.$root.$options.shadowRoot));
        } : function(context) {
          style.call(this, createInjector(context));
        };
      }
      if (hook !== void 0) {
        if (component.functional) {
          const originalRender = component.render;
          component.render = function renderWithStyleInjection(h, context) {
            hook.call(context);
            return originalRender(h, context);
          };
        } else {
          const existing = component.beforeCreate;
          component.beforeCreate = existing ? [].concat(existing, hook) : [hook];
        }
      }
    }
    return component;
  }
  function __vue_create_injector__2() {
    const styles = __vue_create_injector__2.styles || (__vue_create_injector__2.styles = {});
    const isOldIE = typeof navigator !== "undefined" && /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());
    return function addStyle(id, css) {
      if (document.querySelector('style[data-vue-ssr-id~="' + id + '"]'))
        return;
      const group = isOldIE ? css.media || "default" : id;
      const style = styles[group] || (styles[group] = { ids: [], parts: [], element: void 0 });
      if (!style.ids.includes(id)) {
        let code = css.source;
        let index = style.ids.length;
        style.ids.push(id);
        if (false) {
          code += "\n/*# sourceURL=" + css.map.sources[0] + " */";
          code += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(css.map)))) + " */";
        }
        if (isOldIE) {
          style.element = style.element || document.querySelector("style[data-group=" + group + "]");
        }
        if (!style.element) {
          const head = document.head || document.getElementsByTagName("head")[0];
          const el = style.element = document.createElement("style");
          el.type = "text/css";
          if (css.media)
            el.setAttribute("media", css.media);
          if (isOldIE) {
            el.setAttribute("data-group", group);
            el.setAttribute("data-next-index", "0");
          }
          head.appendChild(el);
        }
        if (isOldIE) {
          index = parseInt(style.element.getAttribute("data-next-index"));
          style.element.setAttribute("data-next-index", index + 1);
        }
        if (style.element.styleSheet) {
          style.parts.push(code);
          style.element.styleSheet.cssText = style.parts.filter(Boolean).join("\n");
        } else {
          const textNode = document.createTextNode(code);
          const nodes = style.element.childNodes;
          if (nodes[index])
            style.element.removeChild(nodes[index]);
          if (nodes.length)
            style.element.insertBefore(textNode, nodes[index]);
          else
            style.element.appendChild(textNode);
        }
      }
    };
  }
  var __vue_component__2 = /* @__PURE__ */ __vue_normalize__2({ render: __vue_render__2, staticRenderFns: __vue_staticRenderFns__2 }, __vue_inject_styles__2, __vue_script__2, __vue_scope_id__2, __vue_is_functional_template__2, __vue_module_identifier__2, false, __vue_create_injector__2, void 0, void 0);
  var PrescriptionFormSelect_default = __vue_component__2;

  // ../optic_store/optic_store/public/js/components/PrescriptionFormMain.vue
  var __vue_script__3 = {
    components: { PrescriptionFormField: PrescriptionFormField_default, PrescriptionFormSelect: PrescriptionFormSelect_default },
    props: {
      doc: Object,
      on_change: Function,
      get_formatted: Function,
      on_blur: Function
    },
    data: function() {
      return { sides: ["right", "left"] };
    },
    computed: {
      params: function() {
        if (this.doc.type === "Spectacles") {
          return RX_PARAMS_SPEC_DIST;
        }
        if (this.doc.type === "Contact Lens") {
          return RX_PARAMS_CONT_DIST;
        }
        return [];
      }
    },
    methods: {
      get_side_class: function(side, always = []) {
        return always.reduce((a, x) => Object.assign({ [x]: true }, a), {
          right: side === "right",
          left: side === "left",
          four: this.doc.type === "Spectacles",
          six: this.doc.type === "Contact Lens"
        });
      },
      get_field_props: function(side, param) {
        const field = `${param}_${side}`;
        return {
          param,
          side,
          disabled: this.doc.docstatus !== 0,
          value: this.doc[field],
          get_formatted: this.get_formatted,
          on_change: this.on_change,
          on_blur: this.on_blur
        };
      }
    }
  };
  var __vue_render__3 = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c("div", { staticClass: "os-root" }, [
      _vm._l(_vm.sides, function(side) {
        return _c("div", { class: "os-header " + side }, [_vm._v(_vm._s(side))]);
      }),
      _vm._v(" "),
      _vm._l(_vm.sides, function(side) {
        return _c("div", { class: _vm.get_side_class(side, ["os-label"]) }, _vm._l(_vm.params, function(param) {
          return _c("span", [_vm._v(_vm._s(param))]);
        }), 0);
      }),
      _vm._v(" "),
      _c("div", { staticClass: "os-row-header first" }, [_vm._v("Distance")]),
      _vm._v(" "),
      _vm._l(_vm.sides, function(side) {
        return _c("div", { class: _vm.get_side_class(side, ["os-value"]) }, _vm._l(_vm.params, function(param) {
          return _c("prescription-form-field", _vm._b({ key: param + "_" + side }, "prescription-form-field", _vm.get_field_props(side, param), false));
        }), 1);
      }),
      _vm._v(" "),
      _c("div", { staticClass: "os-row-header" }, [_vm._v("Reading")]),
      _vm._v(" "),
      _vm._l(_vm.sides, function(side) {
        return _c("div", { class: _vm.get_side_class(side, ["os-value"]) }, _vm._l(_vm.params.map(function(p) {
          return p + "_reading";
        }), function(param) {
          return _c("prescription-form-field", _vm._b({ key: param + "_" + side }, "prescription-form-field", _vm.get_field_props(side, param), false));
        }), 1);
      }),
      _vm._v(" "),
      _c("div", { staticClass: "os-row-header" }),
      _vm._v(" "),
      _vm._l(_vm.sides, function(side) {
        return _c("div", { class: _vm.get_side_class(side, ["os-value"]) }, [
          _c("prescription-form-select", _vm._b({}, "prescription-form-select", _vm.get_field_props(side, "near"), false)),
          _vm._v(" "),
          _c("prescription-form-select", _vm._b({}, "prescription-form-select", _vm.get_field_props(side, "intermediate"), false))
        ], 1);
      }),
      _vm._v(" "),
      _c("div", { staticClass: "os-row-header" }, [_vm._v("Add")]),
      _vm._v(" "),
      _vm._l(_vm.sides, function(side) {
        return _c("div", { class: _vm.get_side_class(side, ["os-value", "last"]) }, [
          _c("prescription-form-field", _vm._b({}, "prescription-form-field", _vm.get_field_props(side, "add"), false))
        ], 1);
      })
    ], 2);
  };
  var __vue_staticRenderFns__3 = [];
  __vue_render__3._withStripped = true;
  var __vue_inject_styles__3 = function(inject) {
    if (!inject)
      return;
    inject("data-v-64c09ead_0", { source: "input[type=number][data-v-64c09ead]::-webkit-inner-spin-button,\ninput[type=number][data-v-64c09ead]::-webkit-outer-spin-button {\n  -webkit-appearance: none;\n  margin: 0;\n}\n.os-root[data-v-64c09ead] {\n  display: grid;\n  grid-template-columns: 100px [right] 1fr [left] 1fr;\n  grid-template-rows: [side] 1fr auto repeat(3, 1fr) auto 1fr;\n  align-items: center;\n}\n.os-header[data-v-64c09ead] {\n  grid-row: side;\n  color: #8d99a6;\n  font-weight: bold;\n  text-transform: capitalize;\n  text-align: center;\n  height: 100%;\n}\n.os-row-header[data-v-64c09ead] {\n  grid-column: 1;\n}\n.os-row-header.first[data-v-64c09ead] {\n  grid-row: 3;\n}\n.os-header.right[data-v-64c09ead],\n.os-label.right[data-v-64c09ead],\n.os-value.right[data-v-64c09ead] {\n  grid-column: right;\n  border-right: 1px solid #d1d8dd;\n}\n.os-header.left[data-v-64c09ead],\n.os-label.left[data-v-64c09ead],\n.os-value.left[data-v-64c09ead] {\n  grid-column: left;\n}\n.os-label[data-v-64c09ead],\n.os-value[data-v-64c09ead] {\n  display: flex;\n  flex-flow: row nowrap;\n  align-items: center;\n  padding: 0 2px;\n}\n.os-label > *[data-v-64c09ead],\n.os-value > *[data-v-64c09ead] {\n  margin: 2px;\n}\n.os-label.four > *[data-v-64c09ead],\n.os-value.four > *[data-v-64c09ead] {\n  width: calc(25% - 4px);\n}\n.os-label.six > *[data-v-64c09ead],\n.os-value.six > *[data-v-64c09ead] {\n  width: calc(16.67% - 4px);\n}\n.os-label > span.like-disabled-input[data-v-64c09ead],\n.os-value > span.like-disabled-input[data-v-64c09ead] {\n  font-size: inherit;\n  text-align: right;\n}\n.os-label.last[data-v-64c09ead],\n.os-value.last[data-v-64c09ead] {\n  padding-bottom: 2px;\n}\n.os-label > span[data-v-64c09ead],\n.os-row-header[data-v-64c09ead] {\n  text-transform: uppercase;\n  font-size: 0.8em;\n  color: #8d99a6;\n}\n.os-label[data-v-64c09ead] {\n  border-top: 1px solid #d1d8dd;\n  padding-top: 2px;\n}\n.os-label > span[data-v-64c09ead] {\n  text-align: center;\n  padding-top: 10px;\n}\n.os-value > input[data-v-64c09ead] {\n  text-align: right;\n}\n.os-value > .checkbox[data-v-64c09ead] {\n  width: auto;\n}\n\n/*# sourceMappingURL=PrescriptionFormMain.vue.map */", map: { "version": 3, "sources": ["../optic_store/optic_store/public/js/components/PrescriptionFormMain.vue", "PrescriptionFormMain.vue"], "names": [], "mappings": "AAuFA;;EAEA,wBAAA;EACA,SAAA;ACtFA;ADwFA;EACA,aAAA;EACA,mDAAA;EACA,2DAAA;EACA,mBAAA;ACrFA;ADuFA;EACA,cAAA;EACA,cAAA;EACA,iBAAA;EACA,0BAAA;EACA,kBAAA;EACA,YAAA;ACpFA;ADsFA;EACA,cAAA;ACnFA;ADoFA;EACA,WAAA;AClFA;ADwFA;;;EACA,kBAAA;EACA,+BAAA;ACnFA;ADqFA;;;EACA,iBAAA;ACjFA;ADoFA;;EAEA,aAAA;EACA,qBAAA;EACA,mBAAA;EACA,cAAA;ACjFA;ADkFA;;EACA,WAAA;AC/EA;ADiFA;;EACA,sBAAA;AC9EA;ADgFA;;EACA,yBAAA;AC7EA;ADgFA;;EACA,kBAAA;EACA,iBAAA;AC7EA;ADgFA;;EACA,mBAAA;AC7EA;ADgFA;;EAEA,yBAAA;EACA,gBAAA;EACA,cAAA;AC7EA;ADgFA;EACA,6BAAA;EACA,gBAAA;AC7EA;AD8EA;EACA,kBAAA;EACA,iBAAA;AC5EA;ADgFA;EACA,iBAAA;AC7EA;AD+EA;EACA,WAAA;AC7EA;;AAEA,mDAAmD", "file": "PrescriptionFormMain.vue", "sourcesContent": [`<template>
  <div class="os-root">
    <div v-for="side in sides" :class="\`os-header \${side}\`">{{ side }}</div>
    <div v-for="side in sides" :class="get_side_class(side, ['os-label'])">
      <span v-for="param in params">{{ param }}</span>
    </div>
    <div class="os-row-header first">Distance</div>
    <div v-for="side in sides" :class="get_side_class(side, ['os-value'])">
      <prescription-form-field
        :key="\`\${param}_\${side}\`"
        v-for="param in params"
        v-bind="get_field_props(side, param)"
      />
    </div>
    <div class="os-row-header">Reading</div>
    <div v-for="side in sides" :class="get_side_class(side, ['os-value'])">
      <prescription-form-field
        :key="\`\${param}_\${side}\`"
        v-for="param in params.map(p => \`\${p}_reading\`)"
        v-bind="get_field_props(side, param)"
      />
    </div>
    <div class="os-row-header" />
    <div v-for="side in sides" :class="get_side_class(side, ['os-value'])">
      <prescription-form-select v-bind="get_field_props(side, 'near')" />
      <prescription-form-select v-bind="get_field_props(side, 'intermediate')" />
    </div>
    <div class="os-row-header">Add</div>
    <div v-for="side in sides" :class="get_side_class(side, ['os-value', 'last'])">
      <prescription-form-field v-bind="get_field_props(side, 'add')" />
    </div>
  </div>
</template>

<script>
import { RX_PARAMS_SPEC_DIST, RX_PARAMS_CONT_DIST } from '../utils/constants';
import PrescriptionFormField from './PrescriptionFormField.vue';
import PrescriptionFormSelect from './PrescriptionFormSelect.vue';

export default {
  components: { PrescriptionFormField, PrescriptionFormSelect },
  props: {
    doc: Object,
    on_change: Function,
    get_formatted: Function,
    on_blur: Function,
  },
  data: function() {
    return { sides: ['right', 'left'] };
  },
  computed: {
    params: function() {
      if (this.doc.type === 'Spectacles') {
        return RX_PARAMS_SPEC_DIST;
      }
      if (this.doc.type === 'Contact Lens') {
        return RX_PARAMS_CONT_DIST;
      }
      return [];
    },
  },
  methods: {
    get_side_class: function(side, always = []) {
      return always.reduce((a, x) => Object.assign({ [x]: true }, a), {
        right: side === 'right',
        left: side === 'left',
        four: this.doc.type === 'Spectacles',
        six: this.doc.type === 'Contact Lens',
      });
    },
    get_field_props: function(side, param) {
      const field = \`\${param}_\${side}\`;
      return {
        param,
        side,
        disabled: this.doc.docstatus !== 0,
        value: this.doc[field],
        get_formatted: this.get_formatted,
        on_change: this.on_change,
        on_blur: this.on_blur,
      };
    },
  },
};
<\/script>

<style lang="scss" scoped>
input[type='number']::-webkit-inner-spin-button,
input[type='number']::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
.os-root {
  display: grid;
  grid-template-columns: 100px [right] 1fr [left] 1fr;
  grid-template-rows: [side] 1fr auto repeat(3, 1fr) auto 1fr;
  align-items: center;
}
.os-header {
  grid-row: side;
  color: #8d99a6;
  font-weight: bold;
  text-transform: capitalize;
  text-align: center;
  height: 100%;
}
.os-row-header {
  grid-column: 1;
  &.first {
    grid-row: 3;
  }
}
.os-header,
.os-label,
.os-value {
  &.right {
    grid-column: right;
    border-right: 1px solid #d1d8dd;
  }
  &.left {
    grid-column: left;
  }
}
.os-label,
.os-value {
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  padding: 0 2px;
  & > * {
    margin: 2px;
  }
  &.four > * {
    width: calc(25% - 2 * 2px);
  }
  &.six > * {
    width: calc(16.67% - 2 * 2px);
  }
  & > span {
    &.like-disabled-input {
      font-size: inherit;
      text-align: right;
    }
  }
  &.last {
    padding-bottom: 2px;
  }
}
.os-label > span,
.os-row-header {
  text-transform: uppercase;
  font-size: 0.8em;
  color: #8d99a6;
}

.os-label {
  border-top: 1px solid #d1d8dd;
  padding-top: 2px;
  & > span {
    text-align: center;
    padding-top: 10px;
  }
}
.os-value {
  & > input {
    text-align: right;
  }
  & > .checkbox {
    width: auto;
  }
}
</style>
`, "input[type=number]::-webkit-inner-spin-button,\ninput[type=number]::-webkit-outer-spin-button {\n  -webkit-appearance: none;\n  margin: 0;\n}\n\n.os-root {\n  display: grid;\n  grid-template-columns: 100px [right] 1fr [left] 1fr;\n  grid-template-rows: [side] 1fr auto repeat(3, 1fr) auto 1fr;\n  align-items: center;\n}\n\n.os-header {\n  grid-row: side;\n  color: #8d99a6;\n  font-weight: bold;\n  text-transform: capitalize;\n  text-align: center;\n  height: 100%;\n}\n\n.os-row-header {\n  grid-column: 1;\n}\n.os-row-header.first {\n  grid-row: 3;\n}\n\n.os-header.right,\n.os-label.right,\n.os-value.right {\n  grid-column: right;\n  border-right: 1px solid #d1d8dd;\n}\n.os-header.left,\n.os-label.left,\n.os-value.left {\n  grid-column: left;\n}\n\n.os-label,\n.os-value {\n  display: flex;\n  flex-flow: row nowrap;\n  align-items: center;\n  padding: 0 2px;\n}\n.os-label > *,\n.os-value > * {\n  margin: 2px;\n}\n.os-label.four > *,\n.os-value.four > * {\n  width: calc(25% - 4px);\n}\n.os-label.six > *,\n.os-value.six > * {\n  width: calc(16.67% - 4px);\n}\n.os-label > span.like-disabled-input,\n.os-value > span.like-disabled-input {\n  font-size: inherit;\n  text-align: right;\n}\n.os-label.last,\n.os-value.last {\n  padding-bottom: 2px;\n}\n\n.os-label > span,\n.os-row-header {\n  text-transform: uppercase;\n  font-size: 0.8em;\n  color: #8d99a6;\n}\n\n.os-label {\n  border-top: 1px solid #d1d8dd;\n  padding-top: 2px;\n}\n.os-label > span {\n  text-align: center;\n  padding-top: 10px;\n}\n\n.os-value > input {\n  text-align: right;\n}\n.os-value > .checkbox {\n  width: auto;\n}\n\n/*# sourceMappingURL=PrescriptionFormMain.vue.map */"] }, media: void 0 });
  };
  var __vue_scope_id__3 = "data-v-64c09ead";
  var __vue_module_identifier__3 = void 0;
  var __vue_is_functional_template__3 = false;
  function __vue_normalize__3(template, style, script, scope, functional, moduleIdentifier, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
    const component = (typeof script === "function" ? script.options : script) || {};
    component.__file = "../optic_store/optic_store/public/js/components/PrescriptionFormMain.vue";
    if (!component.render) {
      component.render = template.render;
      component.staticRenderFns = template.staticRenderFns;
      component._compiled = true;
      if (functional)
        component.functional = true;
    }
    component._scopeId = scope;
    if (true) {
      let hook;
      if (false) {
        hook = function(context) {
          context = context || this.$vnode && this.$vnode.ssrContext || this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext;
          if (!context && typeof __VUE_SSR_CONTEXT__ !== "undefined") {
            context = __VUE_SSR_CONTEXT__;
          }
          if (style) {
            style.call(this, createInjectorSSR(context));
          }
          if (context && context._registeredComponents) {
            context._registeredComponents.add(moduleIdentifier);
          }
        };
        component._ssrRegister = hook;
      } else if (style) {
        hook = shadowMode ? function(context) {
          style.call(this, createInjectorShadow(context, this.$root.$options.shadowRoot));
        } : function(context) {
          style.call(this, createInjector(context));
        };
      }
      if (hook !== void 0) {
        if (component.functional) {
          const originalRender = component.render;
          component.render = function renderWithStyleInjection(h, context) {
            hook.call(context);
            return originalRender(h, context);
          };
        } else {
          const existing = component.beforeCreate;
          component.beforeCreate = existing ? [].concat(existing, hook) : [hook];
        }
      }
    }
    return component;
  }
  function __vue_create_injector__3() {
    const styles = __vue_create_injector__3.styles || (__vue_create_injector__3.styles = {});
    const isOldIE = typeof navigator !== "undefined" && /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());
    return function addStyle(id, css) {
      if (document.querySelector('style[data-vue-ssr-id~="' + id + '"]'))
        return;
      const group = isOldIE ? css.media || "default" : id;
      const style = styles[group] || (styles[group] = { ids: [], parts: [], element: void 0 });
      if (!style.ids.includes(id)) {
        let code = css.source;
        let index = style.ids.length;
        style.ids.push(id);
        if (false) {
          code += "\n/*# sourceURL=" + css.map.sources[0] + " */";
          code += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(css.map)))) + " */";
        }
        if (isOldIE) {
          style.element = style.element || document.querySelector("style[data-group=" + group + "]");
        }
        if (!style.element) {
          const head = document.head || document.getElementsByTagName("head")[0];
          const el = style.element = document.createElement("style");
          el.type = "text/css";
          if (css.media)
            el.setAttribute("media", css.media);
          if (isOldIE) {
            el.setAttribute("data-group", group);
            el.setAttribute("data-next-index", "0");
          }
          head.appendChild(el);
        }
        if (isOldIE) {
          index = parseInt(style.element.getAttribute("data-next-index"));
          style.element.setAttribute("data-next-index", index + 1);
        }
        if (style.element.styleSheet) {
          style.parts.push(code);
          style.element.styleSheet.cssText = style.parts.filter(Boolean).join("\n");
        } else {
          const textNode = document.createTextNode(code);
          const nodes = style.element.childNodes;
          if (nodes[index])
            style.element.removeChild(nodes[index]);
          if (nodes.length)
            style.element.insertBefore(textNode, nodes[index]);
          else
            style.element.appendChild(textNode);
        }
      }
    };
  }
  var __vue_component__3 = /* @__PURE__ */ __vue_normalize__3({ render: __vue_render__3, staticRenderFns: __vue_staticRenderFns__3 }, __vue_inject_styles__3, __vue_script__3, __vue_scope_id__3, __vue_is_functional_template__3, __vue_module_identifier__3, false, __vue_create_injector__3, void 0, void 0);
  var PrescriptionFormMain_default = __vue_component__3;

  // ../optic_store/optic_store/public/js/components/PrescriptionFormSupplement.vue
  var __vue_script__4 = {
    components: { PrescriptionFormField: PrescriptionFormField_default },
    props: {
      doc: Object,
      on_change: Function,
      get_formatted: Function
    },
    methods: {
      get_side_class: function(side, always = []) {
        return always.reduce((a, x) => Object.assign({ [x]: true }, a), {
          right: side === "right",
          left: side === "left",
          total: side === "total"
        });
      },
      get_field_props: function(side, param) {
        return {
          param,
          side,
          disabled: this.doc.docstatus !== 0,
          value: this.doc[`${param}_${side}`],
          get_formatted: this.get_formatted,
          on_change: this.on_change
        };
      }
    }
  };
  var __vue_render__4 = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c("div", { staticClass: "os-root" }, [
      _vm._l(["right", "left", "total"], function(side) {
        return _c("div", { class: "os-header " + side }, [
          _vm._v("\n    " + _vm._s(side) + "\n  ")
        ]);
      }),
      _vm._v(" "),
      _vm.doc.type === "Spectacles" ? _c("div", { staticClass: "os-row-header first" }, [_vm._v("PD")]) : _vm._e(),
      _vm._v(" "),
      _vm._l(["right", "left", "total"], function(side) {
        return _vm.doc.type === "Spectacles" ? _c("div", { class: _vm.get_side_class(side, ["os-value"]) }, [
          _c("prescription-form-field", _vm._b({ key: "pd_" + side }, "prescription-form-field", _vm.get_field_props(side, "pd"), false))
        ], 1) : _vm._e();
      }),
      _vm._v(" "),
      _vm.doc.type === "Spectacles" ? _c("div", { staticClass: "os-row-header" }, [_vm._v("Prism")]) : _vm._e(),
      _vm._v(" "),
      _vm._l(["right", "left"], function(side) {
        return _vm.doc.type === "Spectacles" ? _c("div", { class: _vm.get_side_class(side, ["os-value"]) }, [
          _c("prescription-form-field", _vm._b({ key: "prism_" + side }, "prescription-form-field", _vm.get_field_props(side, "prism"), false))
        ], 1) : _vm._e();
      }),
      _vm._v(" "),
      _c("div", {
        class: { "os-row-header": true, first: _vm.doc.type !== "Spectacles" }
      }, [_vm._v("IOP")]),
      _vm._v(" "),
      _vm._l(["right", "left"], function(side) {
        return _c("div", { class: _vm.get_side_class(side, ["os-value"]) }, [
          _c("prescription-form-field", _vm._b({ key: "iop_" + side }, "prescription-form-field", _vm.get_field_props(side, "iop"), false))
        ], 1);
      })
    ], 2);
  };
  var __vue_staticRenderFns__4 = [];
  __vue_render__4._withStripped = true;
  var __vue_inject_styles__4 = function(inject) {
    if (!inject)
      return;
    inject("data-v-dabf1b30_0", { source: "input[type=number][data-v-dabf1b30]::-webkit-inner-spin-button,\ninput[type=number][data-v-dabf1b30]::-webkit-outer-spin-button {\n  -webkit-appearance: none;\n  margin: 0;\n}\n.os-root[data-v-dabf1b30] {\n  width: calc((100% - 100px) / 2 + 100px);\n  display: grid;\n  grid-template-columns: 100px [right] 1fr [left] 1fr [total] 1fr;\n  grid-template-rows: [side] 1fr repeat(3, 1fr);\n  align-items: center;\n}\n.os-header[data-v-dabf1b30] {\n  grid-row: side;\n}\n.os-row-header[data-v-dabf1b30] {\n  grid-column: 1;\n}\n.os-row-header.first[data-v-dabf1b30] {\n  grid-row: 2;\n}\n.os-header.right[data-v-dabf1b30],\n.os-value.right[data-v-dabf1b30] {\n  grid-column: right;\n}\n.os-header.left[data-v-dabf1b30],\n.os-value.left[data-v-dabf1b30] {\n  grid-column: left;\n}\n.os-header.total[data-v-dabf1b30],\n.os-value.total[data-v-dabf1b30] {\n  grid-column: total;\n}\n.os-header[data-v-dabf1b30] {\n  text-align: center;\n}\n.os-header[data-v-dabf1b30],\n.os-row-header[data-v-dabf1b30] {\n  text-transform: uppercase;\n  font-size: 0.8em;\n  color: #8d99a6;\n}\n.os-value[data-v-dabf1b30] {\n  display: flex;\n  flex-flow: row nowrap;\n  align-items: center;\n}\n.os-value > *[data-v-dabf1b30] {\n  margin: 2px;\n  width: 100%;\n}\n.os-value > input[data-v-dabf1b30] {\n  text-align: right;\n}\n\n/*# sourceMappingURL=PrescriptionFormSupplement.vue.map */", map: { "version": 3, "sources": ["../optic_store/optic_store/public/js/components/PrescriptionFormSupplement.vue", "PrescriptionFormSupplement.vue"], "names": [], "mappings": "AAuEA;;EAEA,wBAAA;EACA,SAAA;ACtEA;ADwEA;EACA,uCAAA;EACA,aAAA;EACA,+DAAA;EACA,6CAAA;EACA,mBAAA;ACrEA;ADuEA;EACA,cAAA;ACpEA;ADsEA;EACA,cAAA;ACnEA;ADoEA;EACA,WAAA;AClEA;ADuEA;;EACA,kBAAA;ACnEA;ADqEA;;EACA,iBAAA;AClEA;ADoEA;;EACA,kBAAA;ACjEA;ADoEA;EACA,kBAAA;ACjEA;ADmEA;;EAEA,yBAAA;EACA,gBAAA;EACA,cAAA;AChEA;ADkEA;EACA,aAAA;EACA,qBAAA;EACA,mBAAA;AC/DA;ADgEA;EACA,WAAA;EACA,WAAA;AC9DA;ADgEA;EACA,iBAAA;AC9DA;;AAEA,yDAAyD", "file": "PrescriptionFormSupplement.vue", "sourcesContent": [`<template>
  <div class="os-root">
    <div v-for="side in ['right', 'left', 'total']" :class="\`os-header \${side}\`">
      {{ side }}
    </div>
    <div v-if="doc.type === 'Spectacles'" class="os-row-header first">PD</div>
    <div
      v-if="doc.type === 'Spectacles'"
      v-for="side in ['right', 'left', 'total']"
      :class="get_side_class(side, ['os-value'])"
    >
      <prescription-form-field
        :key="\`pd_\${side}\`"
        v-bind="get_field_props(side, 'pd')"
      />
    </div>
    <div v-if="doc.type === 'Spectacles'" class="os-row-header">Prism</div>
    <div
      v-if="doc.type === 'Spectacles'"
      v-for="side in ['right', 'left']"
      :class="get_side_class(side, ['os-value'])"
    >
      <prescription-form-field
        :key="\`prism_\${side}\`"
        v-bind="get_field_props(side, 'prism')"
      />
    </div>
    <div :class="{ 'os-row-header': true, first: doc.type !== 'Spectacles' }">IOP</div>
    <div v-for="side in ['right', 'left']" :class="get_side_class(side, ['os-value'])">
      <prescription-form-field
        :key="\`iop_\${side}\`"
        v-bind="get_field_props(side, 'iop')"
      />
    </div>
  </div>
</template>

<script>
import { get_formatted } from '../utils/format';
import PrescriptionFormField from './PrescriptionFormField.vue';

export default {
  components: { PrescriptionFormField },
  props: {
    doc: Object,
    on_change: Function,
    get_formatted: Function,
  },
  methods: {
    get_side_class: function(side, always = []) {
      return always.reduce((a, x) => Object.assign({ [x]: true }, a), {
        right: side === 'right',
        left: side === 'left',
        total: side === 'total',
      });
    },
    get_field_props: function(side, param) {
      return {
        param,
        side,
        disabled: this.doc.docstatus !== 0,
        value: this.doc[\`\${param}_\${side}\`],
        get_formatted: this.get_formatted,
        on_change: this.on_change,
      };
    },
  },
};
<\/script>

<style lang="scss" scoped>
input[type='number']::-webkit-inner-spin-button,
input[type='number']::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
.os-root {
  width: calc((100% - 100px) / 2 + 100px);
  display: grid;
  grid-template-columns: 100px [right] 1fr [left] 1fr [total] 1fr;
  grid-template-rows: [side] 1fr repeat(3, 1fr);
  align-items: center;
}
.os-header {
  grid-row: side;
}
.os-row-header {
  grid-column: 1;
  &.first {
    grid-row: 2;
  }
}
.os-header,
.os-value {
  &.right {
    grid-column: right;
  }
  &.left {
    grid-column: left;
  }
  &.total {
    grid-column: total;
  }
}
.os-header {
  text-align: center;
}
.os-header,
.os-row-header {
  text-transform: uppercase;
  font-size: 0.8em;
  color: #8d99a6;
}
.os-value {
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  & > * {
    margin: 2px;
    width: 100%;
  }
  & > input {
    text-align: right;
  }
}
</style>
`, "input[type=number]::-webkit-inner-spin-button,\ninput[type=number]::-webkit-outer-spin-button {\n  -webkit-appearance: none;\n  margin: 0;\n}\n\n.os-root {\n  width: calc((100% - 100px) / 2 + 100px);\n  display: grid;\n  grid-template-columns: 100px [right] 1fr [left] 1fr [total] 1fr;\n  grid-template-rows: [side] 1fr repeat(3, 1fr);\n  align-items: center;\n}\n\n.os-header {\n  grid-row: side;\n}\n\n.os-row-header {\n  grid-column: 1;\n}\n.os-row-header.first {\n  grid-row: 2;\n}\n\n.os-header.right,\n.os-value.right {\n  grid-column: right;\n}\n.os-header.left,\n.os-value.left {\n  grid-column: left;\n}\n.os-header.total,\n.os-value.total {\n  grid-column: total;\n}\n\n.os-header {\n  text-align: center;\n}\n\n.os-header,\n.os-row-header {\n  text-transform: uppercase;\n  font-size: 0.8em;\n  color: #8d99a6;\n}\n\n.os-value {\n  display: flex;\n  flex-flow: row nowrap;\n  align-items: center;\n}\n.os-value > * {\n  margin: 2px;\n  width: 100%;\n}\n.os-value > input {\n  text-align: right;\n}\n\n/*# sourceMappingURL=PrescriptionFormSupplement.vue.map */"] }, media: void 0 });
  };
  var __vue_scope_id__4 = "data-v-dabf1b30";
  var __vue_module_identifier__4 = void 0;
  var __vue_is_functional_template__4 = false;
  function __vue_normalize__4(template, style, script, scope, functional, moduleIdentifier, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
    const component = (typeof script === "function" ? script.options : script) || {};
    component.__file = "../optic_store/optic_store/public/js/components/PrescriptionFormSupplement.vue";
    if (!component.render) {
      component.render = template.render;
      component.staticRenderFns = template.staticRenderFns;
      component._compiled = true;
      if (functional)
        component.functional = true;
    }
    component._scopeId = scope;
    if (true) {
      let hook;
      if (false) {
        hook = function(context) {
          context = context || this.$vnode && this.$vnode.ssrContext || this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext;
          if (!context && typeof __VUE_SSR_CONTEXT__ !== "undefined") {
            context = __VUE_SSR_CONTEXT__;
          }
          if (style) {
            style.call(this, createInjectorSSR(context));
          }
          if (context && context._registeredComponents) {
            context._registeredComponents.add(moduleIdentifier);
          }
        };
        component._ssrRegister = hook;
      } else if (style) {
        hook = shadowMode ? function(context) {
          style.call(this, createInjectorShadow(context, this.$root.$options.shadowRoot));
        } : function(context) {
          style.call(this, createInjector(context));
        };
      }
      if (hook !== void 0) {
        if (component.functional) {
          const originalRender = component.render;
          component.render = function renderWithStyleInjection(h, context) {
            hook.call(context);
            return originalRender(h, context);
          };
        } else {
          const existing = component.beforeCreate;
          component.beforeCreate = existing ? [].concat(existing, hook) : [hook];
        }
      }
    }
    return component;
  }
  function __vue_create_injector__4() {
    const styles = __vue_create_injector__4.styles || (__vue_create_injector__4.styles = {});
    const isOldIE = typeof navigator !== "undefined" && /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());
    return function addStyle(id, css) {
      if (document.querySelector('style[data-vue-ssr-id~="' + id + '"]'))
        return;
      const group = isOldIE ? css.media || "default" : id;
      const style = styles[group] || (styles[group] = { ids: [], parts: [], element: void 0 });
      if (!style.ids.includes(id)) {
        let code = css.source;
        let index = style.ids.length;
        style.ids.push(id);
        if (false) {
          code += "\n/*# sourceURL=" + css.map.sources[0] + " */";
          code += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(css.map)))) + " */";
        }
        if (isOldIE) {
          style.element = style.element || document.querySelector("style[data-group=" + group + "]");
        }
        if (!style.element) {
          const head = document.head || document.getElementsByTagName("head")[0];
          const el = style.element = document.createElement("style");
          el.type = "text/css";
          if (css.media)
            el.setAttribute("media", css.media);
          if (isOldIE) {
            el.setAttribute("data-group", group);
            el.setAttribute("data-next-index", "0");
          }
          head.appendChild(el);
        }
        if (isOldIE) {
          index = parseInt(style.element.getAttribute("data-next-index"));
          style.element.setAttribute("data-next-index", index + 1);
        }
        if (style.element.styleSheet) {
          style.parts.push(code);
          style.element.styleSheet.cssText = style.parts.filter(Boolean).join("\n");
        } else {
          const textNode = document.createTextNode(code);
          const nodes = style.element.childNodes;
          if (nodes[index])
            style.element.removeChild(nodes[index]);
          if (nodes.length)
            style.element.insertBefore(textNode, nodes[index]);
          else
            style.element.appendChild(textNode);
        }
      }
    };
  }
  var __vue_component__4 = /* @__PURE__ */ __vue_normalize__4({ render: __vue_render__4, staticRenderFns: __vue_staticRenderFns__4 }, __vue_inject_styles__4, __vue_script__4, __vue_scope_id__4, __vue_is_functional_template__4, __vue_module_identifier__4, false, __vue_create_injector__4, void 0, void 0);
  var PrescriptionFormSupplement_default = __vue_component__4;

  // ../optic_store/optic_store/public/js/components/PrescriptionForm.vue
  var __vue_script__5 = {
    components: {
      PrescriptionFormMain: PrescriptionFormMain_default,
      PrescriptionFormSupplement: PrescriptionFormSupplement_default
    },
    props: { doc: Object, update: Function, fields: Object, blur: Function },
    methods: {
      get_formatted: function(side, param) {
        return get_formatted(this.doc)(side, param);
      },
      on_change: function(e) {
        return this.update(e.target.name, e.target.value);
      },
      on_blur: function(e) {
        return this.blur(e.target.name, e.target.value);
      }
    }
  };
  var __vue_render__5 = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c("div", { staticClass: "os-root" }, [
      _c("prescription-form-main", _vm._b({}, "prescription-form-main", {
        doc: _vm.doc,
        on_change: _vm.on_change,
        get_formatted: _vm.get_formatted,
        on_blur: _vm.on_blur
      }, false)),
      _vm._v(" "),
      _c("prescription-form-supplement", _vm._b({}, "prescription-form-supplement", {
        doc: _vm.doc,
        on_change: _vm.on_change,
        get_formatted: _vm.get_formatted
      }, false))
    ], 1);
  };
  var __vue_staticRenderFns__5 = [];
  __vue_render__5._withStripped = true;
  var __vue_inject_styles__5 = function(inject) {
    if (!inject)
      return;
    inject("data-v-3ba00ed7_0", { source: "\n\n/*# sourceMappingURL=PrescriptionForm.vue.map */", map: { "version": 3, "sources": ["PrescriptionForm.vue"], "names": [], "mappings": ";;AAEA,+CAA+C", "file": "PrescriptionForm.vue" }, media: void 0 });
  };
  var __vue_scope_id__5 = "data-v-3ba00ed7";
  var __vue_module_identifier__5 = void 0;
  var __vue_is_functional_template__5 = false;
  function __vue_normalize__5(template, style, script, scope, functional, moduleIdentifier, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
    const component = (typeof script === "function" ? script.options : script) || {};
    component.__file = "../optic_store/optic_store/public/js/components/PrescriptionForm.vue";
    if (!component.render) {
      component.render = template.render;
      component.staticRenderFns = template.staticRenderFns;
      component._compiled = true;
      if (functional)
        component.functional = true;
    }
    component._scopeId = scope;
    if (true) {
      let hook;
      if (false) {
        hook = function(context) {
          context = context || this.$vnode && this.$vnode.ssrContext || this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext;
          if (!context && typeof __VUE_SSR_CONTEXT__ !== "undefined") {
            context = __VUE_SSR_CONTEXT__;
          }
          if (style) {
            style.call(this, createInjectorSSR(context));
          }
          if (context && context._registeredComponents) {
            context._registeredComponents.add(moduleIdentifier);
          }
        };
        component._ssrRegister = hook;
      } else if (style) {
        hook = shadowMode ? function(context) {
          style.call(this, createInjectorShadow(context, this.$root.$options.shadowRoot));
        } : function(context) {
          style.call(this, createInjector(context));
        };
      }
      if (hook !== void 0) {
        if (component.functional) {
          const originalRender = component.render;
          component.render = function renderWithStyleInjection(h, context) {
            hook.call(context);
            return originalRender(h, context);
          };
        } else {
          const existing = component.beforeCreate;
          component.beforeCreate = existing ? [].concat(existing, hook) : [hook];
        }
      }
    }
    return component;
  }
  function __vue_create_injector__5() {
    const styles = __vue_create_injector__5.styles || (__vue_create_injector__5.styles = {});
    const isOldIE = typeof navigator !== "undefined" && /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());
    return function addStyle(id, css) {
      if (document.querySelector('style[data-vue-ssr-id~="' + id + '"]'))
        return;
      const group = isOldIE ? css.media || "default" : id;
      const style = styles[group] || (styles[group] = { ids: [], parts: [], element: void 0 });
      if (!style.ids.includes(id)) {
        let code = css.source;
        let index = style.ids.length;
        style.ids.push(id);
        if (false) {
          code += "\n/*# sourceURL=" + css.map.sources[0] + " */";
          code += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(css.map)))) + " */";
        }
        if (isOldIE) {
          style.element = style.element || document.querySelector("style[data-group=" + group + "]");
        }
        if (!style.element) {
          const head = document.head || document.getElementsByTagName("head")[0];
          const el = style.element = document.createElement("style");
          el.type = "text/css";
          if (css.media)
            el.setAttribute("media", css.media);
          if (isOldIE) {
            el.setAttribute("data-group", group);
            el.setAttribute("data-next-index", "0");
          }
          head.appendChild(el);
        }
        if (isOldIE) {
          index = parseInt(style.element.getAttribute("data-next-index"));
          style.element.setAttribute("data-next-index", index + 1);
        }
        if (style.element.styleSheet) {
          style.parts.push(code);
          style.element.styleSheet.cssText = style.parts.filter(Boolean).join("\n");
        } else {
          const textNode = document.createTextNode(code);
          const nodes = style.element.childNodes;
          if (nodes[index])
            style.element.removeChild(nodes[index]);
          if (nodes.length)
            style.element.insertBefore(textNode, nodes[index]);
          else
            style.element.appendChild(textNode);
        }
      }
    };
  }
  var __vue_component__5 = /* @__PURE__ */ __vue_normalize__5({ render: __vue_render__5, staticRenderFns: __vue_staticRenderFns__5 }, __vue_inject_styles__5, __vue_script__5, __vue_scope_id__5, __vue_is_functional_template__5, __vue_module_identifier__5, false, __vue_create_injector__5, void 0, void 0);
  var PrescriptionForm_default = __vue_component__5;

  // ../optic_store/optic_store/public/js/scripts/optical_prescription.js
  function handle_reading(side) {
    const params = ["sph", "cyl", "axis", "va", "bc", "dia"];
    return async function(frm) {
      return Promise.all(params.map((param) => {
        const dval = frm.doc[`${param}_${side}`];
        const field = `${param}_reading_${side}`;
        if (dval) {
          const rval = param === "sph" ? format(field, parseFloat(dval || 0) + parseFloat(frm.doc[`add_${side}`] || 0)) : dval;
          return frm.set_value(field, rval);
        }
      }));
    };
  }
  function toggle_detail_entry(frm, state) {
    frm.toggle_display("details_simple_sec", !state);
    frm.toggle_display(["details_sec", "pd_sec", "prism_sec", "iop_sec"], state);
  }
  function calc_total_pd(frm) {
    const { pd_right = 0, pd_left = 0 } = frm.doc;
    const fval = parseFloat(pd_right) + parseFloat(pd_left);
    return frm.set_value("pd_total", fval.toFixed(1));
  }
  function update_fields(frm) {
    const signed_fields = get_signed_fields();
    const prec2_fields = get_prec2_fields();
    function get_re(field) {
      if (signed_fields.includes(field)) {
        return /^(\+|-)?\d*\.?\d{0,2}$/;
      }
      if (field.includes("axis")) {
        return /^\d{0,3}$/;
      }
      if (field.includes("va")) {
        return /^[p0-9]*\/?[p0-9]*$/;
      }
      if (prec2_fields.includes(field)) {
        return /^\d*\.?\d{0,2}$/;
      }
      if (field.includes("pd")) {
        return /^\d*\.?\d{0,1}$/;
      }
    }
    function scrub(field, value) {
      const re = get_re(field);
      if (re) {
        return re.test(value) ? value : frm.doc[field];
      }
      return value;
    }
    return function(field, value) {
      const scrubbed = scrub(field, value);
      frm.set_value(field, scrubbed);
      return scrubbed;
    };
  }
  function blur_fields(frm) {
    return async function(field, value) {
      if (field.includes("sph") || field.includes("add") || field.includes("cyl")) {
        const fval = Math.round(parseFloat((value || "") + ".0") * 4) / 4;
        await frm.set_value(field, format(field, fval));
        update_detail_vue_props(frm);
      }
    };
  }
  function render_detail_vue(frm) {
    const { $wrapper } = frm.get_field("details_html");
    $wrapper.empty();
    const doc = Object.assign(get_all_rx_params().reduce((a, x) => Object.assign(a, { [x]: void 0 }), {}), { pd_total: void 0 }, frm.doc);
    return new import_vue.default({
      el: $wrapper.html("<div />").children()[0],
      data: { doc },
      render: function(h) {
        return h(PrescriptionForm_default, {
          props: {
            doc: this.doc,
            update: update_fields(frm),
            fields: frm.fields_dict,
            blur: blur_fields(frm)
          }
        });
      }
    });
  }
  function update_detail_vue_props(frm) {
    if (frm.detail_vue) {
      frm.detail_vue.doc = Object.assign(frm.detail_vue.doc, frm.doc);
    }
  }
  function setup_route_back(frm) {
    if (frappe._from_link && frappe._from_link.frm) {
      const { doctype, docname } = frappe._from_link.frm;
      frappe._from_link.frm = null;
      return ["Form", doctype, docname];
    }
    return null;
  }
  function set_expiry_date(frm) {
    frm.set_value("expiry_date", frappe.datetime.add_months(frm.doc.test_date, 6));
  }
  var optical_prescription_default = {
    setup: async function(frm) {
      const { message: settings = {} } = await frappe.db.get_value("Optical Store Settings", null, "prescription_entry");
      toggle_detail_entry(frm, settings.prescription_entry === "ERPNext");
    },
    onload: function(frm) {
      frm.route_back = setup_route_back(frm);
    },
    refresh: function(frm) {
      frm.detail_vue = render_detail_vue(frm);
      if (frm.doc.__islocal) {
        set_expiry_date(frm);
      }
    },
    test_date: set_expiry_date,
    on_submit: async function(frm) {
      if (frm.route_back) {
        await frappe.set_route(frm.route_back);
        if (frappe._from_link_scrollY) {
          frappe.utils.scroll_to(frappe._from_link_scrollY);
        }
      }
    },
    type: update_detail_vue_props,
    add_right: async function(frm) {
      await Promise.all([
        handle_reading("right")(frm),
        frm.set_value("add_left", frm.doc.add_right)
      ]);
      update_detail_vue_props(frm);
    },
    add_left: async function(frm) {
      await handle_reading("left")(frm);
      update_detail_vue_props(frm);
    },
    pd_right: async function(frm) {
      await calc_total_pd(frm);
      update_detail_vue_props(frm);
    },
    pd_left: async function(frm) {
      await calc_total_pd(frm);
      update_detail_vue_props(frm);
    }
  };

  // ../optic_store/optic_store/public/js/scripts/optical_store_settings.js
  function pf_query_filter(doctype) {
    return [
      ["doc_type", "=", doctype],
      ["print_format_type", "=", "Server"]
    ];
  }
  var optical_store_settings_default = {
    refresh: function(frm) {
      frm.set_query("print_format", "order_pfs", (doc, cdt, cdn) => {
        const { is_invoice_pf = 0 } = frappe.get_doc(cdt, cdn) || {};
        return {
          filters: is_invoice_pf ? pf_query_filter("Sales Invoice") : pf_query_filter("Sales Order")
        };
      });
      frm.set_query("print_format", "invoice_pfs", {
        filters: pf_query_filter("Sales Invoice")
      });
      frm.set_query("item_group", "dashboard_item_groups", {
        filters: [["is_group", "=", "0"]]
      });
      frm.set_query("gift_card_deferred_revenue", {
        filters: [
          ["root_type", "=", "Liability"],
          ["is_group", "=", "0"]
        ]
      });
      const development = true;
      if (development || frm.doc.defaults_installed !== "Yes") {
        frm.add_custom_button("Setup Defaults", async function() {
          try {
            await frappe.call({
              method: "optic_store.api.install.setup_defaults",
              freeze: true,
              freeze_message: __("Setting up defaults...")
            });
            frm.reload_doc();
            frappe.show_alert({
              message: __("Defaults setup successfully"),
              indicator: "green"
            });
          } catch (e) {
            frappe.throw(__("Something happened. Unable to setup defaults."));
          }
        });
      }
    }
  };

  // ../optic_store/optic_store/public/js/scripts/optical_store_selling_settings.js
  var optical_store_selling_settings_default = {
    refresh: function(frm) {
      frm.set_query("cashback_expense_account", {
        filters: { root_type: "Expense", is_group: 0 }
      });
    }
  };

  // ../optic_store/optic_store/public/js/scripts/group_discount.js
  var group_discount_default = {
    refresh: function(frm) {
      if (frm.doc.__islocal) {
        frm.get_field("discount_name").set_focus();
        frappe.model.add_child(frm.doc, "Group Discount Brand Category", "discounts");
        frm.refresh_field("discounts");
      }
    }
  };

  // ../optic_store/optic_store/public/js/scripts/gift_card.js
  var gift_card_default = {
    refresh: function(frm) {
      if (!frm.doc.__islocal) {
        const { gift_card_no } = frm.doc;
        frm.add_custom_button("Write Off", async function() {
          await frappe.call({
            method: "optic_store.api.gift_card.write_off",
            args: { gift_card_no, posting_date: frappe.datetime.get_today() }
          });
          frm.reload_doc();
        }).addClass(frappe.user_roles.includes("Sales Manager") ? null : "disabled");
      }
    }
  };

  // ../optic_store/optic_store/public/js/scripts/stock_transfer.js
  var import_vue2 = __toESM(require_vue());
  var import_sumBy2 = __toESM(require_sumBy());

  // ../optic_store/optic_store/public/js/components/StockTransferDashboard.vue
  var import_groupBy = __toESM(require_groupBy());
  var import_mapValues = __toESM(require_mapValues());
  var import_sumBy = __toESM(require_sumBy());
  var __vue_script__6 = {
    props: { items: Array, default: [] },
    computed: {
      brands: function() {
        return (0, import_mapValues.default)((0, import_groupBy.default)(this.items, ({ brand }) => brand || "No Brand"), (x) => (0, import_sumBy.default)(x, "qty"));
      }
    }
  };
  var __vue_render__6 = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c("section", { staticClass: "root" }, _vm._l(_vm.brands, function(qty, brand) {
      return _c("dl", [
        _c("dt", [_vm._v(_vm._s(brand))]),
        _vm._v(" "),
        _c("dd", [_vm._v(_vm._s(qty))])
      ]);
    }), 0);
  };
  var __vue_staticRenderFns__6 = [];
  __vue_render__6._withStripped = true;
  var __vue_inject_styles__6 = function(inject) {
    if (!inject)
      return;
    inject("data-v-7753e94a_0", { source: ".root[data-v-7753e94a] {\n  display: flex;\n  flex-flow: row wrap;\n}\n.root > dl[data-v-7753e94a] {\n  min-width: 20%;\n  text-align: center;\n}\n.root dt[data-v-7753e94a] {\n  font-weight: normal;\n}\n.root dd[data-v-7753e94a] {\n  font-size: 1.3em;\n  font-weight: bold;\n}\n\n/*# sourceMappingURL=StockTransferDashboard.vue.map */", map: { "version": 3, "sources": ["../optic_store/optic_store/public/js/components/StockTransferDashboard.vue", "StockTransferDashboard.vue"], "names": [], "mappings": "AA0BA;EACA,aAAA;EACA,mBAAA;ACzBA;AD0BA;EACA,cAAA;EACA,kBAAA;ACxBA;AD0BA;EACA,mBAAA;ACxBA;AD0BA;EACA,gBAAA;EACA,iBAAA;ACxBA;;AAEA,qDAAqD", "file": "StockTransferDashboard.vue", "sourcesContent": [`<template>
  <section class="root">
    <dl v-for="(qty, brand) in brands">
      <dt>{{ brand }}</dt>
      <dd>{{ qty }}</dd>
    </dl>
  </section>
</template>

<script>
import groupBy from 'lodash/groupBy';
import mapValues from 'lodash/mapValues';
import sumBy from 'lodash/sumBy';
export default {
  props: { items: Array, default: [] },
  computed: {
    brands: function() {
      return mapValues(groupBy(this.items, ({ brand }) => brand || 'No Brand'), x =>
        sumBy(x, 'qty')
      );
    },
  },
};
<\/script>

<style lang="scss" scoped>
.root {
  display: flex;
  flex-flow: row wrap;
  & > dl {
    min-width: 20%;
    text-align: center;
  }
  & dt {
    font-weight: normal;
  }
  & dd {
    font-size: 1.3em;
    font-weight: bold;
  }
}
</style>
`, ".root {\n  display: flex;\n  flex-flow: row wrap;\n}\n.root > dl {\n  min-width: 20%;\n  text-align: center;\n}\n.root dt {\n  font-weight: normal;\n}\n.root dd {\n  font-size: 1.3em;\n  font-weight: bold;\n}\n\n/*# sourceMappingURL=StockTransferDashboard.vue.map */"] }, media: void 0 });
  };
  var __vue_scope_id__6 = "data-v-7753e94a";
  var __vue_module_identifier__6 = void 0;
  var __vue_is_functional_template__6 = false;
  function __vue_normalize__6(template, style, script, scope, functional, moduleIdentifier, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
    const component = (typeof script === "function" ? script.options : script) || {};
    component.__file = "../optic_store/optic_store/public/js/components/StockTransferDashboard.vue";
    if (!component.render) {
      component.render = template.render;
      component.staticRenderFns = template.staticRenderFns;
      component._compiled = true;
      if (functional)
        component.functional = true;
    }
    component._scopeId = scope;
    if (true) {
      let hook;
      if (false) {
        hook = function(context) {
          context = context || this.$vnode && this.$vnode.ssrContext || this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext;
          if (!context && typeof __VUE_SSR_CONTEXT__ !== "undefined") {
            context = __VUE_SSR_CONTEXT__;
          }
          if (style) {
            style.call(this, createInjectorSSR(context));
          }
          if (context && context._registeredComponents) {
            context._registeredComponents.add(moduleIdentifier);
          }
        };
        component._ssrRegister = hook;
      } else if (style) {
        hook = shadowMode ? function(context) {
          style.call(this, createInjectorShadow(context, this.$root.$options.shadowRoot));
        } : function(context) {
          style.call(this, createInjector(context));
        };
      }
      if (hook !== void 0) {
        if (component.functional) {
          const originalRender = component.render;
          component.render = function renderWithStyleInjection(h, context) {
            hook.call(context);
            return originalRender(h, context);
          };
        } else {
          const existing = component.beforeCreate;
          component.beforeCreate = existing ? [].concat(existing, hook) : [hook];
        }
      }
    }
    return component;
  }
  function __vue_create_injector__6() {
    const styles = __vue_create_injector__6.styles || (__vue_create_injector__6.styles = {});
    const isOldIE = typeof navigator !== "undefined" && /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());
    return function addStyle(id, css) {
      if (document.querySelector('style[data-vue-ssr-id~="' + id + '"]'))
        return;
      const group = isOldIE ? css.media || "default" : id;
      const style = styles[group] || (styles[group] = { ids: [], parts: [], element: void 0 });
      if (!style.ids.includes(id)) {
        let code = css.source;
        let index = style.ids.length;
        style.ids.push(id);
        if (false) {
          code += "\n/*# sourceURL=" + css.map.sources[0] + " */";
          code += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(css.map)))) + " */";
        }
        if (isOldIE) {
          style.element = style.element || document.querySelector("style[data-group=" + group + "]");
        }
        if (!style.element) {
          const head = document.head || document.getElementsByTagName("head")[0];
          const el = style.element = document.createElement("style");
          el.type = "text/css";
          if (css.media)
            el.setAttribute("media", css.media);
          if (isOldIE) {
            el.setAttribute("data-group", group);
            el.setAttribute("data-next-index", "0");
          }
          head.appendChild(el);
        }
        if (isOldIE) {
          index = parseInt(style.element.getAttribute("data-next-index"));
          style.element.setAttribute("data-next-index", index + 1);
        }
        if (style.element.styleSheet) {
          style.parts.push(code);
          style.element.styleSheet.cssText = style.parts.filter(Boolean).join("\n");
        } else {
          const textNode = document.createTextNode(code);
          const nodes = style.element.childNodes;
          if (nodes[index])
            style.element.removeChild(nodes[index]);
          if (nodes.length)
            style.element.insertBefore(textNode, nodes[index]);
          else
            style.element.appendChild(textNode);
        }
      }
    };
  }
  var __vue_component__6 = /* @__PURE__ */ __vue_normalize__6({ render: __vue_render__6, staticRenderFns: __vue_staticRenderFns__6 }, __vue_inject_styles__6, __vue_script__6, __vue_scope_id__6, __vue_is_functional_template__6, __vue_module_identifier__6, false, __vue_create_injector__6, void 0, void 0);
  var StockTransferDashboard_default = __vue_component__6;

  // ../optic_store/optic_store/public/js/scripts/extensions/index.js
  var extensions_exports = {};
  __export(extensions_exports, {
    scan_barcode: () => scan_barcode_handler
  });

  // ../optic_store/optic_store/public/js/scripts/extensions/scan_barcode.js
  function get_price(prices, price_list) {
    const { price_list_rate = 0 } = prices.find((p) => p.price_list === price_list) || {};
    return price_list_rate;
  }
  async function scan_barcode_handler(frm) {
    function set_description2(msg) {
      frm.fields_dict["scan_barcode"].set_new_description(__(msg));
    }
    const { scan_barcode: search_value, items } = frm.doc;
    if (search_value) {
      const { message: data } = await frappe.call({
        method: "erpnext.selling.page.point_of_sale.point_of_sale.search_serial_or_batch_or_barcode_number",
        args: { search_value }
      });
      if (!data || Object.keys(data).length === 0) {
        set_description2("Cannot find Item with this barcode");
        return;
      }
      const row = items.find(({ item_code, batch_no }) => {
        if (batch_no) {
          return item_code == data.item_code && batch_no == data.batch_no;
        }
        return item_code === data.item_code;
      }) || items.find(({ item_code }) => !item_code) || frappe.model.add_child(frm.doc, frm.fields_dict["items"].grid.doctype, "items");
      if (row.item_code) {
        set_description2(`Row #${row.idx}: Qty increased by 1`);
      } else {
        set_description2(`Row #${row.idx}:Item added`);
      }
      frm.from_barcode = true;
      const { qty = 0 } = row;
      await frappe.model.set_value(row.doctype, row.name, Object.assign(data, {
        qty: cint(frm.doc.is_return) ? qty - 1 : qty + 1
      }));
      if (frappe.meta.has_field(row.doctype, "os_minimum_selling_rate") && (!row.os_minimum_selling_rate || !row.os_minimum_selling_2_rate)) {
        const { message: prices } = await frappe.call({
          method: "optic_store.api.item.get_prices",
          args: { item_code: row.item_code }
        });
        const os_minimum_selling_rate = get_price(prices, "Minimum Selling");
        const os_minimum_selling_2_rate = get_price(prices, "Minimum Selling 2");
        frappe.model.set_value(row.doctype, row.name, {
          os_minimum_selling_rate,
          os_minimum_selling_2_rate
        });
      }
      frm.fields_dict["scan_barcode"].set_value("");
    }
    return false;
  }

  // ../optic_store/optic_store/public/js/scripts/stock_transfer.js
  function set_queries(frm) {
    ["source_warehouse", "target_warehouse"].forEach((field) => {
      frm.set_query(field, function({ company }) {
        return { company, is_group: 0 };
      });
    });
    frm.set_query("batch_no", "items", function(_, cdt, cdn) {
      const { item_code } = frappe.get_doc(cdt, cdn) || {};
      return { filters: { item: item_code } };
    });
  }
  function calc_and_set_row_amount(frm, cdt, cdn) {
    const { qty = 0, basic_rate = 0 } = frappe.model.get_doc(cdt, cdn) || {};
    const amount = qty * basic_rate;
    frappe.model.set_value(cdt, cdn, "amount", qty * basic_rate);
    frappe.model.set_value(cdt, cdn, "valuation_rate", amount / qty);
  }
  async function calc_and_set_total_amount(frm, cdt, cdn) {
    const items = frm.fields_dict.items.grid.grid_rows.map(({ doc }) => doc);
    frm.set_value("total_value", (0, import_sumBy2.default)(items, "amount"));
    return frm.set_value("total_qty", (0, import_sumBy2.default)(items, "qty"));
  }
  async function set_source_branch(frm) {
    const { message: branch } = await frappe.call({
      method: "optic_store.api.customer.get_user_branch"
    });
    frm.set_value("source_branch", branch);
  }
  function render_dashboard_data(frm) {
    if (!frm.doc.__islocal) {
      frm.dashboard.show();
      const $wrapper = $('<div class="form-dashboard-section custom" />').appendTo(frm.dashboard.wrapper);
      const { items } = frm.doc;
      frm.brand_summary_vue = new import_vue2.default({
        data: { items },
        el: $wrapper.html("<div />").children()[0],
        render: function(h) {
          return h(StockTransferDashboard_default, { props: { items: this.items } });
        }
      });
    }
  }
  var stock_transfer_item = {
    item_code: async function(frm, cdt, cdn) {
      const item = frappe.model.get_doc(cdt, cdn) || {};
      const { source_warehouse: warehouse, company } = frm.doc;
      const { item_code } = item;
      frappe.model.set_value(cdt, cdn, {
        qty: item_code ? 1 : 0,
        conversion_factor: 1
      });
      if (item_code) {
        const {
          item_name,
          item_group,
          brand,
          has_batch_no,
          has_serial_no
        } = await frappe.db.get_doc("Item", item_code);
        if (has_batch_no && !item.batch_no || has_serial_no && !item.serial_no) {
          erpnext.show_serial_batch_selector(frm, { item_code, has_batch_no, has_serial_no, warehouse }, ({ batch_no, serial_no: serial_no2, qty: qty2 }) => {
            frappe.model.set_value(cdt, cdn, "qty", qty2);
            if (has_batch_no) {
              frappe.model.set_value(cdt, cdn, "batch_no", batch_no);
            }
            if (has_serial_no) {
              frappe.model.set_value(cdt, cdn, "serial_no", serial_no2);
            }
          });
        } else {
          frappe.model.set_value(cdt, cdn, { item_name, item_group, brand });
          frm.refresh_field("items");
        }
        const [posting_date, posting_time] = frm.doc.outgoing_datetime.split(" ");
        const { serial_no, qty } = frappe.model.get_doc(cdt, cdn);
        const { message: basic_rate = 0 } = await frappe.call({
          method: "erpnext.stock.utils.get_incoming_rate",
          args: {
            args: {
              item_code,
              posting_date,
              posting_time,
              warehouse,
              serial_no,
              company,
              qty
            }
          }
        });
        frappe.model.set_value(cdt, cdn, "basic_rate", basic_rate);
      }
    },
    qty: async function(frm) {
      await calc_and_set_row_amount(frm);
      if (frm.brand_summary_vue) {
        frm.brand_summary_vue.items = frm.doc.items;
      }
    },
    brand: function(frm) {
      if (frm.brand_summary_vue) {
        frm.brand_summary_vue.items = frm.doc.items;
      }
    },
    basic_rate: calc_and_set_row_amount,
    amount: calc_and_set_total_amount,
    items_remove: calc_and_set_row_amount
  };
  function set_route_to_list(frm) {
    frm.page.actions.find('a.grey-link:contains("Receive")').on("click", function() {
      frappe.set_route("List", "Stock Transfer");
    });
  }
  function toggle_incoming_datetime(frm) {
    frm.toggle_enable("incoming_datetime", frm.doc.workflow_state === "In Transit");
  }
  var stock_transfer_default = {
    setup: set_queries,
    refresh: function(frm) {
      if (frm.doc.__islocal) {
        frm.set_value("outgoing_datetime", frappe.datetime.now_datetime());
        set_source_branch(frm);
      }
      toggle_incoming_datetime(frm);
      render_dashboard_data(frm);
    },
    onload_post_render: function(frm) {
      if (frm.doc.workflow_state === "In Transit") {
        set_route_to_list(frm);
      }
    },
    company: set_queries,
    scan_barcode: function(frm) {
      if (!frm.doc.items) {
        frappe.model.add_child(frm.doc, "Stock Transfer Item", "items");
        frm.refresh_field("items");
      }
      scan_barcode_handler(frm);
    }
  };

  // ../optic_store/optic_store/public/js/scripts/sales_order_bulk_update.js
  function render_actions(frm) {
    const { company, state, action, orders_query = [], orders_process = [] } = frm.doc;
    frm.page.btn_primary.toggleClass("disabled", !(orders_process.length > 0) || !action);
    frm.page.btn_secondary.text(__(orders_query.length > 0 ? "Refresh" : "Fetch"));
    frm.page.btn_secondary.toggleClass("disabled", !company || !state);
  }
  function fetch_sales_orders(frm) {
    return async function() {
      frm.clear_table("orders_query");
      frm.clear_table("orders_process");
      const { company, state, branch, from_date, to_date } = frm.doc;
      const { message: sales_orders = [] } = await frappe.call({
        method: "optic_store.api.sales_order.get_sales_orders",
        args: { company, state, branch, from_date, to_date },
        freeze: true,
        freeze_message: __("Fetching Sales Orders")
      });
      sales_orders.forEach(({ sales_order, lab_tech }) => {
        const { name } = frappe.model.add_child(frm.doc, "Bulk Update Order", "orders_query");
        frappe.model.set_value("Bulk Update Order", name, { sales_order, lab_tech });
      });
      frm.refresh();
    };
  }
  function update_sales_orders(frm) {
    return async function() {
      const { orders_process = [], action, lab_tech } = frm.doc;
      await frappe.call({
        method: "optic_store.api.sales_order.update_sales_orders",
        args: {
          sales_orders: orders_process.map(({ sales_order }) => sales_order),
          action,
          lab_tech
        },
        freeze: true,
        freeze_message: __("Updating Sales Orders")
      });
      fetch_sales_orders(frm)();
    };
  }
  var bulk_update_order = {
    orders_query_add: render_actions,
    orders_query_remove: render_actions,
    orders_process_add: render_actions,
    orders_process_remove: render_actions
  };
  var sales_order_bulk_update_default = {
    setup: async function(frm) {
      const { message: states } = await frappe.call({
        method: "optic_store.api.sales_order.get_workflow_states"
      });
      frm.set_df_property("state", "options", states);
    },
    refresh: function(frm) {
      frm.disable_save();
      frm.page.clear_icons();
      frm.page.set_primary_action(__("Update"), update_sales_orders(frm));
      frm.page.set_secondary_action(__("Fetch"), fetch_sales_orders(frm));
      render_actions(frm);
    },
    company: render_actions,
    state: async function(frm) {
      render_actions(frm);
      const { state } = frm.doc;
      if (state) {
        const { message: actions } = await frappe.call({
          method: "optic_store.api.sales_order.get_next_workflow_actions",
          args: { state }
        });
        frm.set_df_property("action", "options", actions);
      }
    },
    action: function(frm) {
      const { action } = frm.doc;
      frm.toggle_display("lab_tech", ["Proceed to Deliver"].includes(action));
      render_actions(frm);
    },
    scan_order: function(frm) {
      function set_desc(description) {
        frm.get_field("scan_order").set_new_description(description);
      }
      const { scan_order, orders_query = [], orders_process = [] } = frm.doc;
      if (scan_order) {
        const selected = orders_query.find(({ sales_order }) => sales_order === scan_order);
        if (!selected) {
          set_desc(__("Sales Order not present in queried result"));
        } else {
          const already_present = orders_process.map(({ sales_order }) => sales_order).includes(scan_order);
          if (!already_present) {
            const { sales_order, lab_tech } = selected;
            const { name } = frappe.model.add_child(frm.doc, "Bulk Update Order", "orders_process");
            frappe.model.set_value("Bulk Update Order", name, { sales_order, lab_tech });
          }
          frappe.model.clear_doc("Bulk Update Order", selected.name);
          frm.refresh();
          set_desc("");
          frm.set_value("scan_order", null);
        }
      }
      return false;
    }
  };

  // ../optic_store/optic_store/public/js/scripts/xz_report.js
  async function set_missing_fields(frm) {
    const { user, pos_profile, branch, start_time, end_time } = frm.doc;
    if (!user) {
      frm.set_value("user", frappe.session.user);
    }
    if (!pos_profile) {
      const { message: pos_profile2 = {} } = await frappe.call({
        method: "erpnext.stock.get_item_details.get_pos_profile",
        args: { company: frappe.defaults.get_user_default("company") }
      });
      frm.set_value("pos_profile", pos_profile2.name);
    }
    if (!branch) {
      const { message: branch2 } = await frappe.call({
        method: "optic_store.api.customer.get_user_branch"
      });
      frm.set_value("branch", branch2);
    }
    if (frm.doc.__islocal && !start_time) {
      frm.set_value("start_time", frappe.datetime.now_datetime());
    }
  }
  async function set_report_details(frm) {
    const { user, pos_profile, start_time } = frm.doc;
    if (user && pos_profile && start_time) {
      await frappe.call({
        method: "set_report_details",
        doc: frm.doc
      });
      frm.refresh();
      calculate_cash(frm);
    }
  }
  async function calculate_cash(frm) {
    const {
      opening_cash = 0,
      closing_cash = 0,
      cash_sales = 0,
      cash_returns = 0,
      cash_pe_received = 0
    } = frm.doc;
    const expected_cash = opening_cash + cash_sales + cash_returns + cash_pe_received;
    frm.set_value("expected_cash", expected_cash);
    frm.set_value("difference_cash", expected_cash - closing_cash);
  }
  var xz_report_default = {
    onload: function(frm) {
      frm.set_query("pos_profile", ({ user }) => ({ filters: { user } }));
      if (!frm.doc.__islocal && frm.doc.docstatus === 0) {
        set_report_details(frm);
      }
    },
    refresh: function(frm) {
      if (!frm.doc.__islocal && frm.doc.docstatus === 0) {
        frm.add_custom_button(__("Refresh"), function() {
          set_report_details(frm);
        });
      }
      set_missing_fields(frm);
    },
    user: set_report_details,
    pos_profile: async function(frm) {
      const { pos_profile } = frm.doc;
      if (pos_profile) {
        const { message: { company } = {} } = await frappe.db.get_value("POS Profile", pos_profile, "company");
        frm.set_value("company", company);
      }
      set_report_details(frm);
    },
    start_time: set_report_details,
    end_time: set_report_details,
    opening_cash: calculate_cash,
    closing_cash: calculate_cash
  };

  // ../optic_store/optic_store/public/js/scripts/sms_template.js
  var sms_template_default = {
    onload: function(frm) {
      frm.set_query("ref_doctype", function() {
        return { filters: { istable: 0, issingle: 0 } };
      });
    }
  };

  // ../optic_store/optic_store/public/js/scripts/custom_loyalty_entry.js
  async function set_loyalty_details(frm) {
    const { customer, company, posting_date } = frm.doc;
    const { message: loyalty } = await frappe.call({
      method: "erpnext.accounts.doctype.loyalty_program.loyalty_program.get_loyalty_program_details_with_points",
      args: { customer, company }
    });
    console.log(loyalty);
    if (loyalty) {
      const {
        loyalty_program,
        tier_name: loyalty_program_tier,
        loyalty_points: current_points,
        expiry_duration
      } = loyalty;
      frm.set_value({
        loyalty_program,
        loyalty_program_tier,
        current_points,
        expiry_date: frappe.datetime.add_days(posting_date, expiry_duration)
      });
    }
  }
  function set_loyalty_balance(frm) {
    const { points = 0, current_points = 0 } = frm.doc;
    frm.set_value("balance_points", points + current_points);
  }
  var custom_loyalty_entry_default = {
    customer: set_loyalty_details,
    posting_date: set_loyalty_details,
    points: set_loyalty_balance,
    current_points: set_loyalty_balance
  };

  // ../optic_store/optic_store/public/js/scripts/custom_purchase_receipt.js
  function toggle_enable_posting_datetime(frm) {
    return frm.toggle_enable("posting_datetime", frm.doc.set_posting_time);
  }
  function set_amount(frm, cdt, cdn) {
    const { qty = 0, rate = 0 } = frappe.get_doc(cdt, cdn);
    return frappe.model.set_value(cdt, cdn, "amount", flt(qty) * flt(rate));
  }
  var custom_purchase_receipt_item = {
    qty: set_amount,
    rate: set_amount
  };
  var custom_purchase_receipt_default = {
    custom_purchase_receipt_item,
    refresh: async function(frm) {
      if (!frm.doc.posting_datetime) {
        await frm.set_value("posting_datetime", frappe.datetime.now_datetime());
      }
      toggle_enable_posting_datetime(frm);
    },
    set_posting_time: toggle_enable_posting_datetime
  };

  // ../optic_store/optic_store/public/js/scripts/email_alerts.js
  async function get_mops(current) {
    const { message: all } = await frappe.call({
      method: "optic_store.api.email_alerts.get_mops"
    });
    return promised_dialog({ title: __("Select Modes of Payment"), all, current });
  }
  async function get_branches(current) {
    const { message: all } = await frappe.call({
      method: "optic_store.api.email_alerts.get_branches"
    });
    return promised_dialog({ title: __("Select Branches"), all, current });
  }
  function promised_dialog({ title, all, current }) {
    const make_field = (item) => ({
      fieldtype: "Check",
      fieldname: item,
      label: __(item),
      default: (current || "").split("\n").includes(item)
    });
    return new Promise((resolve) => {
      const dialog = new frappe.ui.Dialog({
        title,
        fields: [
          ...all.filter((_, i) => !(i % 2)).map(make_field),
          { fieldtype: "Column Break" },
          ...all.filter((_, i) => i % 2).map(make_field)
        ]
      });
      dialog.set_primary_action("OK", () => {
        const values = dialog.get_values();
        resolve(all.filter((item) => values[item]));
        dialog.hide();
      });
      dialog.show();
    });
  }
  var email_alerts_grouped_mop = {
    select: async function(frm, cdt, cdn) {
      const { mops: current_mops } = frappe.get_doc(cdt, cdn);
      const mops = await get_mops(current_mops);
      frappe.model.set_value(cdt, cdn, "mops", mops.join("\n"));
    }
  };
  var email_alerts_default = {
    email_alerts_grouped_mop,
    select_branch: async function(frm) {
      const { branches_to_show } = frm.doc;
      const branches = await get_branches(branches_to_show);
      frm.set_value("branches_to_show", branches.join("\n"));
    }
  };

  // ../optic_store/optic_store/public/js/scripts/cashback_program.js
  function setup_queries(frm) {
    frm.set_query("price_list", ({}) => ({ filters: { enabled: 1, selling: 1 } }));
    frm.set_query("branch", "branches", () => ({
      filters: { disabled: 0 }
    }));
    frm.set_query("item_group", "item_groups", () => ({
      filters: { is_group: 0 }
    }));
    frm.set_query("expense_account", ({ company }) => ({
      filters: { company, root_type: "Expense" }
    }));
    frm.set_query("cost_center", ({ company }) => ({
      filters: { company, is_group: 0 }
    }));
  }
  var cashback_program_default = {
    setup: setup_queries
  };

  // ../optic_store/optic_store/public/js/scripts/serial_no_batch_selector.js
  var serial_no_batch_selector_default = {
    init: function(opts, show_dialog) {
      $.extend(this, opts);
      this.show_dialog = show_dialog;
      let d = this.item;
      this.has_batch = 0;
      this.has_serial_no = 0;
      if (d && d.has_batch_no && (!d.batch_no || this.show_dialog))
        this.has_batch = 1;
      if (d && d.has_serial_no && !(this.show_dialog == false))
        this.has_serial_no = 1;
      this.setup();
    },
    setup: function() {
      this.item_code = this.item.item_code;
      this.qty = this.item.qty;
      this.make_dialog();
      this.on_close_dialog();
    },
    make_dialog: function() {
      var me = this;
      this.data = this.oldest ? this.oldest : [];
      let title = "";
      let fields = [
        {
          fieldname: "item_code",
          read_only: 1,
          fieldtype: "Link",
          options: "Item",
          label: __("Item Code"),
          default: me.item_code
        },
        {
          fieldname: "warehouse",
          fieldtype: "Link",
          options: "Warehouse",
          reqd: me.has_batch && !me.has_serial_no ? 0 : 1,
          label: __(me.warehouse_details.type),
          default: typeof me.warehouse_details.name == "string" ? me.warehouse_details.name : "",
          onchange: function(e) {
            if (me.has_batch && !me.has_serial_no) {
              fields = fields.concat(me.get_batch_fields());
            } else {
              fields = fields.concat(me.get_serial_no_fields());
            }
            me.warehouse_details.name = this.get_value();
            var batches = this.layout.fields_dict.batches;
            if (batches) {
              batches.grid.df.data = [];
              batches.grid.refresh();
              batches.grid.add_new_row(null, null, null);
            }
          },
          get_query: function() {
            return {
              query: "erpnext.controllers.queries.warehouse_query",
              filters: [
                ["Bin", "item_code", "=", me.item_code],
                ["Warehouse", "is_group", "=", 0],
                ["Warehouse", "company", "=", me.frm.doc.company]
              ]
            };
          }
        },
        { fieldtype: "Column Break" },
        {
          fieldname: "qty",
          fieldtype: "Float",
          read_only: me.has_batch && !me.has_serial_no,
          label: __(me.has_batch && !me.has_serial_no ? "Total Qty" : "Qty"),
          default: 0
        },
        {
          fieldname: "auto_fetch_button",
          fieldtype: "Button",
          hidden: me.has_batch && !me.has_serial_no,
          label: __("Auto Fetch"),
          description: __("Fetch Serial Numbers based on FIFO"),
          click: () => {
            let qty = this.dialog.fields_dict.qty.get_value();
            let numbers = frappe.call({
              method: "erpnext.stock.doctype.serial_no.serial_no.auto_fetch_serial_number",
              args: {
                qty,
                item_code: me.item_code,
                warehouse: typeof me.warehouse_details.name == "string" ? me.warehouse_details.name : "",
                batch_no: me.item.batch_no || null
              }
            });
            numbers.then((data) => {
              let auto_fetched_serial_numbers = data.message;
              let records_length = auto_fetched_serial_numbers.length;
              if (records_length < qty) {
                frappe.msgprint(`Fetched only ${records_length} serial numbers.`);
              }
              let serial_no_list_field = this.dialog.fields_dict.serial_no;
              numbers = auto_fetched_serial_numbers.join("\n");
              serial_no_list_field.set_value(numbers);
            });
          }
        }
      ];
      if (this.has_batch && !this.has_serial_no) {
        title = __("Select Batch Numbers");
        fields = fields.concat(this.get_batch_fields());
      } else {
        title = __("Select Serial Numbers");
        fields = fields.concat(this.get_serial_no_fields());
      }
      this.dialog = new frappe.ui.Dialog({
        title,
        fields
      });
      this.dialog.set_primary_action(__("Insert"), function() {
        me.values = me.dialog.get_values();
        if (me.validate()) {
          frappe.run_serially([
            () => me.update_batch_items(),
            () => me.update_serial_no_item(),
            () => me.update_batch_serial_no_items(),
            () => {
              refresh_field("items");
              refresh_field("packed_items");
              if (me.callback) {
                return me.callback(me.item);
              }
            },
            () => me.dialog.hide()
          ]);
        }
      });
      if (this.show_dialog) {
        let d = this.item;
        if (this.item.serial_no) {
          this.dialog.fields_dict.serial_no.set_value(this.item.serial_no);
        }
        if (this.has_batch && !this.has_serial_no && d.batch_no) {
          this.frm.doc.items.forEach((data) => {
            if (data.item_code == d.item_code) {
              this.dialog.fields_dict.batches.df.data.push({
                batch_no: data.batch_no,
                actual_qty: data.actual_qty,
                selected_qty: data.qty,
                available_qty: data.actual_batch_qty
              });
            }
          });
          this.dialog.fields_dict.batches.grid.refresh();
        }
      }
      if (this.has_batch && !this.has_serial_no) {
        this.update_total_qty();
      }
      this.dialog.show();
    },
    on_close_dialog: function() {
      this.dialog.get_close_btn().on("click", () => {
        this.on_close && this.on_close(this.item);
      });
    },
    validate: function() {
      let values = this.values;
      if (!values.warehouse) {
        frappe.throw(__("Please select a warehouse"));
        return false;
      }
      if (this.has_batch && !this.has_serial_no) {
        if (values.batches.length === 0 || !values.batches) {
          frappe.throw(__("Please select batches for batched item " + values.item_code));
          return false;
        }
        values.batches.map((batch, i) => {
          if (!batch.selected_qty || batch.selected_qty === 0) {
            if (!this.show_dialog) {
              frappe.throw(__("Please select quantity on row " + (i + 1)));
              return false;
            }
          }
        });
        return true;
      } else {
        let serial_nos = values.serial_no || "";
        if (!serial_nos || !serial_nos.replace(/\s/g, "").length) {
          frappe.throw(__("Please enter serial numbers for serialized item " + values.item_code));
          return false;
        }
        return true;
      }
    },
    update_batch_items() {
      if (this.has_batch && !this.has_serial_no) {
        this.values.batches.map((batch, i) => {
          let batch_no = batch.batch_no;
          let row = "";
          if (i !== 0 && !this.batch_exists(batch_no)) {
            row = this.frm.add_child("items", __spreadValues({}, this.item));
          } else {
            row = this.frm.doc.items.find((i2) => i2.batch_no === batch_no);
          }
          if (!row) {
            row = this.item;
          }
          this.map_row_values(row, batch, "batch_no", "selected_qty", this.values.warehouse);
        });
      }
    },
    update_serial_no_item() {
      if (this.has_serial_no && !this.has_batch) {
        this.map_row_values(this.item, this.values, "serial_no", "qty");
      }
    },
    update_batch_serial_no_items() {
      if (this.has_batch && this.has_serial_no) {
        const selected_serial_nos = this.values.serial_no.split(/\n/g).filter((s) => s);
        return frappe.db.get_list("Serial No", {
          filters: { name: ["in", selected_serial_nos] },
          fields: ["batch_no", "name"]
        }).then((data) => {
          const batch_serial_map = data.reduce((acc, d) => {
            if (!acc[d["batch_no"]])
              acc[d["batch_no"]] = [];
            acc[d["batch_no"]].push(d["name"]);
            return acc;
          }, {});
          Object.keys(batch_serial_map).map((batch_no, i) => {
            let row = "";
            const serial_no = batch_serial_map[batch_no];
            if (i == 0) {
              row = this.item;
              this.map_row_values(row, { qty: serial_no.length, batch_no }, "batch_no", "qty", this.values.warehouse);
            } else if (!this.batch_exists(batch_no)) {
              row = this.frm.add_child("items", __spreadValues({}, this.item));
              row.batch_no = batch_no;
            } else {
              row = this.frm.doc.items.find((i2) => i2.batch_no === batch_no);
            }
            const values = {
              qty: serial_no.length,
              serial_no: serial_no.join("\n")
            };
            this.map_row_values(row, values, "serial_no", "qty", this.values.warehouse);
          });
        });
      }
    },
    batch_exists: function(batch) {
      const batches = this.frm.doc.items.map((data) => data.batch_no);
      return batches && in_list(batches, batch) ? true : false;
    },
    map_row_values: function(row, values, number, qty_field, warehouse) {
      row.qty = values[qty_field];
      row.transfer_qty = flt(values[qty_field]) * flt(row.conversion_factor);
      row[number] = values[number];
      if (this.warehouse_details.type === "Source Warehouse") {
        row.s_warehouse = values.warehouse || warehouse;
      } else if (this.warehouse_details.type === "Target Warehouse") {
        row.t_warehouse = values.warehouse || warehouse;
      } else {
        row.warehouse = values.warehouse || warehouse;
      }
      this.frm.dirty();
    },
    update_total_qty: function() {
      let qty_field = this.dialog.fields_dict.qty;
      let total_qty = 0;
      this.dialog.fields_dict.batches.df.data.forEach((data) => {
        total_qty += flt(data.selected_qty);
      });
      qty_field.set_input(total_qty);
    },
    get_batch_fields: function() {
      var me = this;
      return [
        { fieldtype: "Section Break", label: __("Batches") },
        {
          fieldname: "batches",
          fieldtype: "Table",
          label: __("Batch Entries"),
          fields: [
            {
              fieldtype: "Link",
              read_only: 0,
              fieldname: "batch_no",
              options: "Batch",
              label: __("Select Batch"),
              in_list_view: 1,
              get_query: function() {
                return {
                  filters: {
                    item_code: me.item_code,
                    warehouse: me.warehouse || typeof me.warehouse_details.name == "string" ? me.warehouse_details.name : ""
                  },
                  query: "erpnext.controllers.queries.get_batch_no"
                };
              },
              change: function() {
                const batch_no = this.get_value();
                if (!batch_no) {
                  this.grid_row.on_grid_fields_dict.available_qty.set_value(0);
                  return;
                }
                let selected_batches = this.grid.grid_rows.map((row) => {
                  if (row === this.grid_row) {
                    return "";
                  }
                  if (row.on_grid_fields_dict.batch_no) {
                    return row.on_grid_fields_dict.batch_no.get_value();
                  }
                });
                if (selected_batches.includes(batch_no)) {
                  this.set_value("");
                  frappe.throw(__(`Batch ${batch_no} already selected.`));
                  return;
                }
                if (me.warehouse_details.name) {
                  frappe.call({
                    method: "erpnext.stock.doctype.batch.batch.get_batch_qty",
                    args: {
                      batch_no,
                      warehouse: me.warehouse_details.name,
                      item_code: me.item_code
                    },
                    callback: (r) => {
                      this.grid_row.on_grid_fields_dict.available_qty.set_value(r.message || 0);
                    }
                  });
                } else {
                  this.set_value("");
                  frappe.throw(__(`Please select a warehouse to get available
									quantities`));
                }
              }
            },
            {
              fieldtype: "Float",
              read_only: 1,
              fieldname: "available_qty",
              label: __("Available"),
              in_list_view: 1,
              default: 0,
              change: function() {
                this.grid_row.on_grid_fields_dict.selected_qty.set_value("0");
              }
            },
            {
              fieldtype: "Float",
              read_only: 0,
              fieldname: "selected_qty",
              label: __("Qty"),
              in_list_view: 1,
              default: 0,
              change: function() {
                var batch_no = this.grid_row.on_grid_fields_dict.batch_no.get_value();
                var available_qty = this.grid_row.on_grid_fields_dict.available_qty.get_value();
                var selected_qty = this.grid_row.on_grid_fields_dict.selected_qty.get_value();
                if (batch_no.length === 0 && parseInt(selected_qty) !== 0) {
                  frappe.throw(__("Please select a batch"));
                }
                if (me.warehouse_details.type === "Source Warehouse" && parseFloat(available_qty) < parseFloat(selected_qty)) {
                  this.set_value("0");
                  frappe.throw(__(`For transfer from source, selected quantity cannot be
									greater than available quantity`));
                } else {
                  this.grid.refresh();
                }
                me.update_total_qty();
              }
            }
          ],
          in_place_edit: true,
          data: this.data,
          get_data: function() {
            return this.data;
          }
        }
      ];
    },
    get_serial_no_fields: function() {
      var me = this;
      this.serial_list = [];
      let serial_no_filters = {
        item_code: me.item_code,
        delivery_document_no: ""
      };
      if (this.item.batch_no) {
        serial_no_filters["batch_no"] = this.item.batch_no;
      }
      if (me.warehouse_details.name) {
        serial_no_filters["warehouse"] = me.warehouse_details.name;
      }
      return [
        { fieldtype: "Section Break", label: __("Serial Numbers") },
        {
          fieldtype: "Link",
          fieldname: "serial_no_select",
          options: "Serial No",
          label: __("Select to add Serial Number."),
          get_query: function() {
            return {
              filters: serial_no_filters
            };
          },
          onchange: function(e) {
            if (this.in_local_change)
              return;
            this.in_local_change = 1;
            let serial_no_list_field = this.layout.fields_dict.serial_no;
            let qty_field = this.layout.fields_dict.qty;
            let new_number = this.get_value();
            let list_value = serial_no_list_field.get_value();
            let new_line = "\n";
            if (!list_value) {
              new_line = "";
            } else {
              me.serial_list = list_value.replace(/\n/g, " ").match(/\S+/g) || [];
            }
            if (!me.serial_list.includes(new_number)) {
              this.set_new_description("");
              serial_no_list_field.set_value(me.serial_list.join("\n") + new_line + new_number);
              me.serial_list = serial_no_list_field.get_value().replace(/\n/g, " ").match(/\S+/g) || [];
            } else {
              this.set_new_description(new_number + " is already selected.");
            }
            qty_field.set_input(me.serial_list.length);
            this.$input.val("");
            this.in_local_change = 0;
          }
        },
        { fieldtype: "Column Break" },
        {
          fieldname: "serial_no",
          fieldtype: "Small Text",
          label: __(me.has_batch && !me.has_serial_no ? "Selected Batch Numbers" : "Selected Serial Numbers"),
          onchange: function() {
            me.serial_list = this.get_value().replace(/\n/g, " ").match(/\S+/g) || [];
            this.layout.fields_dict.qty.set_input(me.serial_list.length);
          }
        }
      ];
    }
  };

  // ../optic_store/optic_store/public/js/scripts/payment_entry.js
  var payment_entry_default = {
    refresh: async function(frm) {
      if (frm.doc.__islocal) {
        const { message: branch } = await frappe.call({
          method: "optic_store.api.customer.get_user_branch"
        });
        frm.set_value("os_branch", branch);
      }
    }
  };

  // ../optic_store/optic_store/public/js/scripts/sales_invoice.js
  var import_sumBy4 = __toESM(require_sumBy());

  // ../optic_store/optic_store/public/js/scripts/sales_order.js
  var import_vue3 = __toESM(require_vue());
  var import_pickBy = __toESM(require_pickBy());

  // ../optic_store/optic_store/public/js/frappe-components/InvoiceDialog.js
  function print_doc(doctype, docname, print_format, no_letterhead) {
    const w = window.open(frappe.urllib.get_full_url(`/printview?doctype=${encodeURIComponent(doctype)}&name=${encodeURIComponent(docname)}&trigger_print=1&format=${encodeURIComponent(print_format)}&no_letterhead=${no_letterhead ? "1" : "0"}&_lang=en`));
    if (!w) {
      frappe.msgprint(__("Please enable pop-ups"));
    }
  }
  async function set_amount2(gr, amount) {
    try {
      await gr.get_field("amount").set_value(amount);
    } catch (e) {
      gr.doc.amount = amount;
      gr.refresh_field("amount");
    }
  }
  var InvoiceDialog = class {
    constructor(print_formats = [], mode_of_payments = []) {
      this.mode_of_payments = mode_of_payments.map((mode_of_payment) => ({
        mode_of_payment
      }));
      this.print_formats = print_formats;
      this.dialog = new frappe.ui.Dialog({
        title: "Invoice & Print",
        fields: [
          {
            fieldname: "loyalty_sec",
            fieldtype: "Section Break",
            label: __("Loyalty Program")
          },
          {
            fieldname: "loyalty_card_no",
            fieldtype: "Data",
            label: __("Loyalty Card No")
          },
          {
            fieldname: "loyalty_points_redeem",
            fieldtype: "Int",
            label: __("Points to Redeem"),
            hidden: 1
          },
          {
            fieldtype: "Column Break"
          },
          {
            fieldname: "loyalty_points_available",
            fieldtype: "Int",
            label: __("Available Loyalty Points"),
            read_only: 1,
            hidden: 1
          },
          {
            fieldname: "loyalty_amount_available",
            fieldtype: "Currency",
            label: __("Available Loyalty Amount"),
            read_only: 1,
            hidden: 1
          },
          {
            fieldname: "loyalty_amount_redeem",
            fieldtype: "Currency",
            label: __("Amount to Redeem"),
            read_only: 1,
            hidden: 1
          },
          {
            fieldname: "cashback_sec",
            fieldtype: "Section Break",
            label: __("Cashback"),
            collapsible: 1
          },
          {
            fieldname: "cashback_receipt",
            label: __("Cashback Receipt"),
            fieldtype: "Link",
            options: "Cashback Receipt",
            get_query: () => ({
              filters: [
                ["balance_amount", ">", 0],
                ["expiry_date", ">=", frappe.datetime.get_today()]
              ]
            })
          },
          {
            fieldtype: "Column Break"
          },
          {
            fieldname: "cashback_available",
            fieldtype: "Currency",
            label: __("Available Balance"),
            read_only: 1
          },
          {
            fieldname: "payment_sec",
            fieldtype: "Section Break",
            label: __("Payments")
          },
          {
            fieldname: "payments",
            fieldtype: "Table",
            fields: [
              {
                fieldname: "mode_of_payment",
                fieldtype: "Link",
                options: "Mode of Payment",
                label: __("Mode of Payment"),
                in_list_view: 1
              },
              {
                fieldname: "amount",
                fieldtype: "Currency",
                label: __("Amount"),
                in_list_view: 1
              }
            ],
            in_place_edit: true,
            data: this.mode_of_payments,
            get_data: () => this.mode_of_payments
          },
          {
            fieldname: "print_sec",
            fieldtype: "Section Break",
            label: __("Print Formats")
          },
          ...this.print_formats.map((pf) => ({
            fieldtype: "Check",
            fieldname: pf,
            label: __(pf),
            default: 1
          }))
        ]
      });
      this.init_state = {
        loyalty_card_no: null,
        loyalty_program: null,
        loyalty_points: 0,
        conversion_factor: 0,
        loyalty_points_redeem: 0,
        loyalty_amount_redeem: 0,
        cashback_receipt: null
      };
    }
    async create_and_print(frm) {
      this.state = Object.assign({}, this.init_state);
      this.dialog.fields_dict.loyalty_card_no.change = async function() {
        const loyalty_card_no2 = this.dialog.get_value("loyalty_card_no");
        await this.handle_loyalty(frm, loyalty_card_no2);
        [
          "loyalty_points_redeem",
          "loyalty_amount_redeem",
          "loyalty_points_available",
          "loyalty_amount_available"
        ].forEach((field) => this.dialog.fields_dict[field].toggle(!!loyalty_card_no2));
        this.dialog.fields_dict.loyalty_points_redeem.bind_change_event();
      }.bind(this);
      this.dialog.fields_dict.loyalty_points_redeem.change = () => {
        const loyalty_points_redeem = this.dialog.get_value("loyalty_points_redeem") || 0;
        const loyalty_amount_redeem = loyalty_points_redeem * flt(this.state.conversion_factor);
        const min_amount = Math.min(this.state.loyalty_points * flt(this.state.conversion_factor), frm.doc.rounded_total || frm.doc.grand_total);
        if (loyalty_amount_redeem > min_amount) {
          frappe.throw(__(`Amount to Redeem cannot exceed ${format_currency(min_amount, frm.doc.currency)}`));
        }
        this.dialog.set_values({ loyalty_amount_redeem });
        this.state = Object.assign({}, this.state, {
          loyalty_points_redeem,
          loyalty_amount_redeem
        });
        this.set_payments(frm);
      };
      this.dialog.fields_dict.cashback_receipt.df.change = async function(x) {
        const cashback_receipt = this.dialog.get_value("cashback_receipt");
        if (cashback_receipt) {
          const {
            message: { balance_amount: cashback_available = 0 } = {}
          } = await frappe.db.get_value("Cashback Receipt", cashback_receipt, "balance_amount");
          this.dialog.set_values({ cashback_available });
        } else {
          this.dialog.set_values({ cashback_available: null });
        }
        this.state = Object.assign({}, this.state, {
          cashback_receipt
        });
      }.bind(this);
      this.dialog.get_primary_btn().off("click");
      this.dialog.set_primary_action("OK", async function() {
        const { name } = frm.doc;
        const values = this.dialog.get_values();
        const enabled_print_formats = await this._get_print_formats(name);
        const payments = values.payments.map(({ mode_of_payment, amount }) => ({
          mode_of_payment,
          amount
        }));
        this.dialog.hide();
        const {
          loyalty_points_redeem: loyalty_points,
          loyalty_program,
          loyalty_card_no: loyalty_card_no2,
          cashback_receipt
        } = this.state;
        await frappe.call({
          method: "optic_store.api.sales_order.invoice_qol",
          freeze: true,
          freeze_message: __("Creating Sales Invoice"),
          args: {
            name,
            payments,
            loyalty_card_no: loyalty_card_no2,
            loyalty_program,
            loyalty_points,
            cashback_receipt
          }
        });
        frm.reload_doc();
        enabled_print_formats.forEach(({ doctype, docname, print_format }) => {
          print_doc(doctype, docname, print_format, 0);
        });
      }.bind(this));
      this.dialog.set_df_property("loyalty_sec", "hidden", 0);
      this.dialog.set_df_property("payment_sec", "hidden", 0);
      this.dialog.set_df_property("cashback_sec", "hidden", 0);
      this.dialog.fields_dict.loyalty_card_no.bind_change_event();
      this.dialog.fields_dict.cashback_receipt.bind_change_event();
      const { message: { os_loyalty_card_no: loyalty_card_no } = {} } = await frappe.db.get_value("Customer", frm.doc.customer, "os_loyalty_card_no") || {};
      await this.dialog.set_value("loyalty_card_no", loyalty_card_no);
      this.dialog.fields_dict.loyalty_card_no.change();
      this.set_payments(frm);
      this.dialog.show();
    }
    set_payments(frm) {
      this.dialog.fields_dict.payments.grid.grid_rows.forEach((gr) => {
        set_amount2(gr, 0);
      });
      let amount_to_set = (frm.doc.rounded_total || frm.doc.grand_total) - this.state.loyalty_amount_redeem;
      const gift_card_balance = frm.doc.os_gift_cards.reduce((a, { balance }) => a + balance, 0);
      const gift_card_gr = this.dialog.fields_dict.payments.grid.grid_rows.find(({ doc }) => doc.mode_of_payment === "Gift Card");
      if (gift_card_balance && gift_card_gr) {
        set_amount2(gift_card_gr, Math.min(gift_card_balance, amount_to_set));
        amount_to_set -= gift_card_gr.doc.amount;
      }
      const first_payment_gr = this.dialog.fields_dict.payments.grid.grid_rows.filter(({ doc }) => doc.mode_of_payment !== "Gift Card")[0];
      if (first_payment_gr) {
        set_amount2(first_payment_gr, amount_to_set);
      }
    }
    async handle_loyalty(frm, loyalty_card_no) {
      if (loyalty_card_no) {
        const { customer, company } = frm.doc;
        const { message = {} } = await frappe.call({
          method: "optic_store.api.loyalty_program.get_customer_loyalty_details",
          args: {
            customer,
            loyalty_card_no,
            expiry_date: frappe.datetime.get_today(),
            company
          }
        });
        this.state = Object.assign({}, this.state, { loyalty_card_no }, message);
        const { loyalty_points, conversion_factor } = this.state;
        this.dialog.set_values({
          loyalty_points_available: loyalty_points,
          loyalty_amount_available: loyalty_points * flt(conversion_factor)
        });
      } else {
        this.dialog.set_values({
          loyalty_points_available: null,
          loyalty_amount_available: null,
          loyalty_amount_redeem: null
        });
      }
    }
    async print(frm) {
      this.dialog.get_primary_btn().off("click");
      this.dialog.set_primary_action("OK", async function() {
        const enabled_print_formats = await this._get_print_formats(frm.doc.name);
        this.dialog.hide();
        enabled_print_formats.forEach(({ doctype, docname, print_format }) => {
          print_doc(doctype, docname, print_format, 0);
        });
      }.bind(this));
      this.dialog.set_df_property("loyalty_sec", "hidden", 1);
      this.dialog.set_df_property("payment_sec", "hidden", 1);
      this.dialog.set_df_property("cashback_sec", "hidden", 1);
      this.dialog.show();
    }
    async _get_print_formats(sales_order) {
      const values = this.dialog.get_values();
      const print_formats = this.print_formats.filter((pf) => values[pf]);
      if (print_formats.length === 0) {
        return [];
      }
      const { message } = await frappe.call({
        method: "optic_store.api.sales_order.get_print_formats",
        args: { sales_order, print_formats }
      });
      return message;
    }
  };

  // ../optic_store/optic_store/public/js/utils/data.js
  var SPEC_TYPES = [
    "Bifocal",
    "Bifocal Tint",
    "Distance",
    "Dist/Sun",
    "Dist/Tint",
    "Intermediate",
    "PalPal/M-Con",
    "Pal/Multifocal",
    "Pal/Off",
    "Pal/Sun",
    "Pal/Tint",
    "Reading"
  ];
  var NATIONALITIES = [
    "Afghan",
    "Albanian",
    "Algerian",
    "Argentine Argentinian",
    "Australian",
    "Austrian",
    "Bahraini",
    "Bangladeshi",
    "Belgian",
    "Bolivian",
    "Batswana",
    "Brazilian",
    "Bulgarian",
    "Cambodian",
    "Cameroonian",
    "Canadian",
    "Chilean",
    "Chinese",
    "Colombian",
    "Costa Rican",
    "Croatian",
    "Cuban",
    "Czech",
    "Danish",
    "Dominican",
    "Ecuadorian",
    "Egyptian",
    "Salvadorian",
    "English",
    "Estonian",
    "Ethiopian",
    "Fijian",
    "Finnish",
    "French",
    "German",
    "Ghanaian",
    "Greek",
    "Guatemalan",
    "Haitian",
    "Honduran",
    "Hungarian",
    "Icelandic",
    "Indian",
    "Indonesian",
    "Iranian",
    "Iraqi",
    "Irish",
    "Israeli",
    "Italian",
    "Jamaican",
    "Japanese",
    "Jordanian",
    "Kenyan",
    "Kuwaiti",
    "Lao",
    "Latvian",
    "Lebanese",
    "Libyan",
    "Lithuanian",
    "Malaysian",
    "Malian",
    "Maltese",
    "Mexican",
    "Mongolian",
    "Moroccan",
    "Mozambican",
    "Namibian",
    "Nepalese",
    "Dutch",
    "New Zealand",
    "Nicaraguan",
    "Nigerian",
    "Norwegian",
    "Pakistani",
    "Palestinian",
    "Panamanian",
    "Paraguayan",
    "Peruvian",
    "Philippine",
    "Polish",
    "Portuguese",
    "Qatari",
    "Romanian",
    "Russian",
    "Saudi",
    "Scottish",
    "Senegalese",
    "Serbian",
    "Singaporean",
    "Slovak",
    "South African",
    "Korean",
    "Spanish",
    "Sri Lankan",
    "Sudanese",
    "Swedish",
    "Swiss",
    "Syrian",
    "Taiwanese",
    "Tajikistani",
    "Thai",
    "Tongan",
    "Tunisian",
    "Turkish",
    "Ukrainian",
    "Emirati",
    "British",
    "American **",
    "Uruguayan",
    "Venezuelan",
    "Vietnamese",
    "Welsh",
    "Zambian",
    "Zimbabwean"
  ];

  // ../optic_store/optic_store/public/js/scripts/sales_order.js
  function setup_orx_name(frm) {
    const { customer, orx_type: type } = frm.doc;
    if (customer && type) {
      const orx_name = frm.get_docfield("orx_name");
      orx_name.get_route_options_for_new_doc = function(field) {
        return { customer, type };
      };
      frm.set_query("orx_name", function() {
        return {
          query: "optic_store.api.optical_prescription.query_latest",
          filters: { customer, type }
        };
      });
    }
  }
  async function render_prescription(frm) {
    const { orx_name } = frm.doc;
    const { $wrapper } = frm.get_field("orx_html");
    $wrapper.empty();
    if (orx_name) {
      const doc = await frappe.db.get_doc("Optical Prescription", orx_name);
      frm.orx_vue = new import_vue3.default({
        el: $wrapper.html("<div />").children()[0],
        render: (h) => h(PrescriptionForm_default, { props: { doc } })
      });
      frm.set_value("os_orx_notes", doc.notes);
    }
  }
  function render_invoice_button(frm) {
    if (frm.doc.docstatus === 1 && frm.doc.status !== "Closed") {
      if (flt(frm.doc.per_billed, 6) < 100) {
        frm.add_custom_button(__("Invoice & Print"), function() {
          frm.invoice_dialog && frm.invoice_dialog.create_and_print(frm);
        });
      } else {
        frm.add_custom_button(__("Print Invoice"), function() {
          frm.invoice_dialog && frm.invoice_dialog.print(frm);
        });
      }
    }
  }
  async function apply_group_discount(frm) {
    const { orx_group_discount } = frm.doc;
    const items = frm.get_field("items").grid.grid_rows.map(({ doc: { doctype, name: docname, item_code } }) => ({
      doctype,
      docname,
      item_code
    }));
    if (orx_group_discount) {
      try {
        const { message: discounts } = await frappe.call({
          method: "optic_store.api.group_discount.get_item_discounts",
          args: {
            discount_name: orx_group_discount,
            item_codes: items.map(({ item_code }) => item_code)
          }
        });
        return Promise.all(items.map(({ doctype, docname, item_code }) => {
          const { discount_rate = 0 } = discounts.find((d) => d.item_code === item_code) || {};
          return frappe.model.set_value(doctype, docname, "discount_percentage", discount_rate);
        }));
      } catch (e) {
        frappe.throw(__("Cannot apply Group Discount"));
      }
    }
    return Promise.all(items.map(({ doctype, docname }) => frappe.model.set_value(doctype, docname, "discount_percentage", 0)));
  }
  function handle_order_type(frm) {
    const { os_order_type } = frm.doc;
    frm.toggle_display("orx_sec", ["Sales", "Eye Test"].includes(os_order_type));
    if (os_order_type === "Eye Test") {
      frm.set_query("item_code", "items", function() {
        return {
          filters: { item_group: "Services" }
        };
      });
    }
  }
  async function set_fields(frm) {
    const [{ message: warehouse }, { message: branch }] = await Promise.all([
      frappe.call({
        method: "optic_store.api.sales_order.get_warehouse",
        args: { user: frappe.session.user }
      }),
      frappe.call({
        method: "optic_store.api.customer.get_user_branch"
      })
    ]);
    frm.set_value("set_warehouse", warehouse);
    frm.set_value("os_branch", branch);
  }
  async function set_gift_card(frm, gift_card_no) {
    function respond(message, clear_field = false) {
      return { clear_field, message };
    }
    if (!gift_card_no) {
      return respond("");
    }
    const already_added = frm.doc.os_gift_cards.map(({ gift_card: gift_card2 }) => gift_card2.toLowerCase()).includes(gift_card_no.toLowerCase());
    if (already_added) {
      return respond(__("Gift Card already selected for this transaction"));
    }
    const posting_date = frm.doc.posting_date || frm.doc.transaction_date;
    const { message: details } = await frappe.call({
      method: "optic_store.api.gift_card.get_details",
      args: { gift_card_no, posting_date }
    });
    if (!details) {
      return respond(__("Unable to find Gift Card"));
    }
    const { gift_card, balance, has_expired } = details;
    if (!balance) {
      return respond(__("Gift Card balance is depleted"), true);
    }
    if (has_expired) {
      return respond(__("Gift Card has expired"), true);
    }
    const row = frappe.model.add_child(frm.doc, "Sales Invoice Gift Card", "os_gift_cards");
    await frappe.model.set_value(row.doctype, row.name, { gift_card, balance });
    frm.refresh_field("os_gift_cards");
    return respond("", true);
  }
  async function handle_gift_card_entry(frm) {
    const { os_gift_card_entry: gift_card_no } = frm.doc;
    const { clear_field, message } = await set_gift_card(frm, gift_card_no);
    if (clear_field) {
      await frm.set_value("os_gift_card_entry", null);
    }
    frm.get_field("os_gift_card_entry").set_new_description(message);
    return false;
  }
  async function setup_employee_queries(frm) {
    const settings = await frappe.db.get_doc("Optical Store Settings");
    ["sales_person", "dispensor", "lab_tech"].map((employee) => ({
      field: `os_${employee}`,
      department: settings[`${employee}_department`]
    })).forEach(({ field, department }) => {
      frm.set_query(field, { filters: [["department", "=", department]] });
    });
  }
  function set_spec_types_options(frm) {
    frm.set_df_property("os_type_of_spectacle", "options", ["", ...SPEC_TYPES]);
  }
  async function set_naming_series(frm) {
    const { os_branch: branch } = frm.doc;
    if (branch) {
      const {
        message: { os_sales_order_naming_series } = {}
      } = await frappe.db.get_value("Branch", branch, "os_sales_order_naming_series");
      frm.set_value("naming_series", os_sales_order_naming_series);
    }
  }
  function hide_actions(frm) {
    const hide_buttons = setInterval(() => {
      const make_btns = frm.page.inner_toolbar.find('div[data-label="Make"]');
      if (make_btns.length > 0) {
        make_btns.hide();
        clearInterval(hide_buttons);
      }
    }, 60);
    if (!frappe.user_roles.includes("System Manager")) {
      const hide_links = setInterval(() => {
        const links = frm.dashboard.links_area.find('div[data-doctype="Delivery Note"]');
        if (links.length > 0) {
          links.hide();
          clearInterval(hide_links);
        }
      }, 60);
    }
  }
  async function handle_min_item_prices(frm, cdt, cdn) {
    const { item_code = "" } = frappe.get_doc(cdt, cdn);
    const {
      message: { ms1: os_minimum_selling_rate, ms2: os_minimum_selling_2_rate } = {}
    } = await frappe.call({
      method: "optic_store.api.item.get_min_prices",
      args: { item_code }
    });
    frappe.model.set_value(cdt, cdn, (0, import_pickBy.default)({ os_minimum_selling_rate, os_minimum_selling_2_rate }));
  }
  async function set_delivery_date(frm) {
    const { transaction_date } = frm.doc;
    if (transaction_date) {
      const days_to_delivery = await frappe.db.get_single_value("Optical Store Settings", "days_to_delivery") || 0;
      frm.set_value("delivery_date", frappe.datetime.add_days(transaction_date, days_to_delivery));
    } else {
      frm.set_value("delivery_date", null);
    }
  }
  function set_sales_person_readonly(frm) {
    if (!frappe.user.has_role("Sales Manager") && frm.doc.os_sales_person) {
      frm.set_df_property("os_sales_person", "read_only", 1);
    }
  }
  var sales_order_item = {
    item_code: handle_min_item_prices
  };
  var sales_order_default = {
    sales_order_item,
    setup: async function(frm) {
      const { order_pfs = [], invoice_mops = [] } = await frappe.db.get_doc("Optical Store Settings");
      const print_formats = order_pfs.map(({ print_format }) => print_format);
      const mode_of_payments = invoice_mops.map(({ mode_of_payment }) => mode_of_payment);
      frm.invoice_dialog = new InvoiceDialog(print_formats, mode_of_payments);
      const transaction_controller = new erpnext.TransactionController({ frm });
      if (frm.fields_dict["items"].grid.get_field("batch_no")) {
        frm.set_query("batch_no", "items", function(doc, cdt, cdn) {
          return transaction_controller.set_query_for_batch(doc, cdt, cdn);
        });
      }
      transaction_controller.scan_barcode();
    },
    onload: function(frm) {
      setup_employee_queries(frm);
      set_spec_types_options(frm);
      set_sales_person_readonly(frm);
    },
    refresh: function(frm) {
      render_prescription(frm);
      render_invoice_button(frm);
      handle_order_type(frm);
      if (frm.doc.__islocal) {
        set_fields(frm);
        set_delivery_date(frm);
      }
      hide_actions(frm);
    },
    customer: setup_orx_name,
    os_branch: set_naming_series,
    orx_type: setup_orx_name,
    transaction_date: set_delivery_date,
    orx_name: render_prescription,
    orx_group_discount: apply_group_discount,
    os_gift_card_entry: handle_gift_card_entry
  };

  // ../optic_store/optic_store/public/js/frappe-components/DeliverDialog.js
  var import_pick = __toESM(require_pick());
  var import_groupBy2 = __toESM(require_groupBy());
  var import_mapValues2 = __toESM(require_mapValues());
  var import_sumBy3 = __toESM(require_sumBy());
  var import_isEqual = __toESM(require_isEqual());
  var DeliverDialog = class {
    constructor(print_formats = [], mode_of_payments = []) {
      this.mode_of_payments = mode_of_payments.map((mode_of_payment) => ({
        mode_of_payment
      }));
      this.print_formats = print_formats;
      this.batches = [];
      this.warehouse = null;
      this.dialog = new frappe.ui.Dialog({
        title: "Deliver & Print",
        fields: [
          {
            fieldname: "gift_card_sec",
            fieldtype: "Section Break",
            label: __("Gift Card")
          },
          {
            fieldname: "gift_card_no",
            fieldtype: "Data",
            label: __("Gift Card No")
          },
          {
            fieldtype: "Column Break"
          },
          {
            fieldname: "gift_card_balance",
            fieldtype: "Int",
            label: __("Gift Card Balance"),
            read_only: 1
          },
          {
            fieldname: "payment_sec",
            fieldtype: "Section Break",
            label: __("Payments")
          },
          {
            fieldname: "payments",
            fieldtype: "Table",
            fields: [
              {
                fieldname: "mode_of_payment",
                fieldtype: "Link",
                options: "Mode of Payment",
                label: __("Mode of Payment"),
                reqd: 1,
                in_list_view: 1
              },
              {
                fieldname: "amount",
                fieldtype: "Currency",
                label: __("Amount"),
                in_list_view: 1
              }
            ],
            in_place_edit: true,
            data: this.mode_of_payments,
            get_data: () => this.mode_of_payments
          },
          {
            fieldname: "batch_sec",
            fieldtype: "Section Break",
            label: __("Batches")
          },
          {
            fieldname: "batches",
            fieldtype: "Table",
            fields: [
              {
                fieldname: "item_code",
                fieldtype: "Link",
                options: "Item",
                label: __("Item Code"),
                read_only: 1,
                in_list_view: 1
              },
              {
                fieldname: "batch_no",
                fieldtype: "Link",
                options: "Batch",
                label: __("Batch No"),
                in_list_view: 1,
                only_select: 1,
                get_query: function({ item_code }) {
                  return {
                    filters: { item_code, warehouse: this.warehouse },
                    query: "erpnext.controllers.queries.get_batch_no"
                  };
                }.bind(this)
              },
              {
                fieldname: "available_qty",
                fieldtype: "Float",
                label: __("Available Qty"),
                read_only: 1,
                in_list_view: 1
              },
              {
                fieldname: "qty",
                fieldtype: "Float",
                label: __("Invoice Qty"),
                in_list_view: 1
              },
              {
                fieldname: "si_detail",
                fieldtype: "Data",
                hidden: 1
              }
            ],
            in_place_edit: true,
            data: this.batches,
            get_data: () => this.batches
          },
          {
            fieldname: "print_sec",
            fieldtype: "Section Break",
            label: __("Print Formats")
          },
          ...this.print_formats.map((pf) => ({
            fieldtype: "Check",
            fieldname: pf,
            label: __(pf),
            default: 1
          }))
        ]
      });
    }
    async payment_and_deliver(frm, deliver = false) {
      this.dialog.fields_dict.gift_card_no.change = async function() {
        const gift_card_no = this.dialog.get_value("gift_card_no");
        await this.handle_gift_card(frm, gift_card_no);
        this.set_payments(frm);
      }.bind(this);
      const { message: warehouse } = await frappe.call({
        method: "optic_store.api.sales_order.get_warehouse",
        args: { branch: frm.doc.os_branch }
      });
      this.warehouse = warehouse;
      this.dialog.fields_dict.batches.grid.fields_map.batch_no.change = async function() {
        const { item_code, batch_no } = this.doc;
        const set_value = (qty) => this.grid_row.on_grid_fields_dict.available_qty.set_value(qty);
        if (!warehouse || !batch_no) {
          return set_value(0);
        }
        const { message: available_qty } = await frappe.call({
          method: "erpnext.stock.doctype.batch.batch.get_batch_qty",
          args: { batch_no, item_code, warehouse }
        });
        if (typeof available_qty !== "number") {
          return set_value(0);
        }
        return set_value(available_qty);
      };
      this.dialog.get_primary_btn().off("click");
      this.dialog.set_primary_action("OK", async function() {
        const { name } = frm.doc;
        const values = this.dialog.get_values();
        const enabled_print_formats = this.print_formats.filter((pf) => values[pf]);
        const { gift_card_no } = values;
        const payments = values.payments.filter(({ amount }) => amount).map(({ mode_of_payment, amount }) => Object.assign({
          mode_of_payment,
          amount
        }, mode_of_payment === "Gift Card" ? { gift_card_no } : {}));
        const total_paid = flt(payments.reduce((a, { amount = 0 }) => a + amount, 0), precision("outstanding_amount"));
        if (total_paid > frm.doc.outstanding_amount) {
          return frappe.throw(__("Paid amount cannot be greater than outstanding"));
        }
        if (deliver && total_paid !== frm.doc.outstanding_amount) {
          return frappe.throw(__("Paid amount must be equal to outstanding"));
        }
        try {
          const { batches = [] } = values || {};
          await frappe.call({
            method: "optic_store.api.sales_invoice.deliver_qol",
            freeze: true,
            freeze_message: __("Creating Payment Entry / Delivery Note"),
            args: {
              name,
              payments,
              deliver: deliver ? 1 : 0,
              batches: deliver && batches.length > 0 ? batches.filter(({ batch_no, qty }) => batch_no && qty).map((batch) => (0, import_pick.default)(batch, ["item_code", "batch_no", "qty", "si_detail"])) : null
            }
          });
          this.dialog.hide();
          enabled_print_formats.forEach((pf) => {
            print_doc("Sales Invoice", name, pf, 0);
          });
        } finally {
          frm.reload_doc();
        }
      }.bind(this));
      this.dialog.set_df_property("gift_card_sec", "hidden", frm.doc.outstanding_amount > 0 ? 0 : 1);
      this.dialog.set_df_property("payment_sec", "hidden", frm.doc.outstanding_amount > 0 ? 0 : 1);
      this.dialog.fields_dict.gift_card_no.bind_change_event();
      await this.set_batches(frm, warehouse);
      this.dialog.set_df_property("batch_sec", "hidden", deliver && this.batches.length > 0 ? 0 : 1);
      await this.dialog.set_values({ gift_card_no: null, gift_card_balance: null });
      this.set_payments(frm);
      this.dialog.show();
    }
    async handle_gift_card(frm, gift_card_no) {
      if (gift_card_no) {
        const {
          message: { gift_card, balance: gift_card_balance = 0, has_expired } = {}
        } = await frappe.call({
          method: "optic_store.api.gift_card.get_details",
          args: { gift_card_no, posting_date: frappe.datetime.get_today() }
        });
        if (!gift_card) {
          return frappe.throw(__("Gift Card not found"));
        }
        if (has_expired) {
          return frappe.throw(__("Gift Card expired"));
        }
        this.dialog.set_values({ gift_card_balance });
      } else {
        this.dialog.set_values({ gift_card_balance: 0 });
      }
    }
    set_payments(frm) {
      this.dialog.fields_dict.payments.grid.grid_rows.forEach((gr) => {
        set_amount2(gr, 0);
      });
      let amount_to_set = frm.doc.outstanding_amount;
      const gift_card_balance = this.dialog.get_value("gift_card_balance");
      const gift_card_gr = this.dialog.fields_dict.payments.grid.grid_rows.find(({ doc }) => doc.mode_of_payment === "Gift Card");
      if (gift_card_balance && gift_card_gr) {
        set_amount2(gift_card_gr, Math.min(gift_card_balance, amount_to_set));
        amount_to_set -= gift_card_gr.doc.amount;
      }
      const first_payment_gr = this.dialog.fields_dict.payments.grid.grid_rows.filter(({ doc }) => doc.mode_of_payment !== "Gift Card")[0];
      if (first_payment_gr) {
        set_amount2(first_payment_gr, amount_to_set);
      }
    }
    async _get_batch_items(items, warehouse) {
      const has_batch_results = await Promise.all(items.map(({ item_code }) => frappe.db.get_value("Item", item_code, ["item_code", "has_batch_no"])));
      const batch_items = has_batch_results.map(({ message = {} }) => message).filter(({ has_batch_no }) => has_batch_no).map(({ item_code }) => item_code);
      const rows = items.filter(({ item_code }) => batch_items.includes(item_code)).map((item) => (0, import_pick.default)(item, ["item_code", "batch_no", "qty", "name"])).map((_a) => {
        var _b = _a, { name: si_detail } = _b, rest = __objRest(_b, ["name"]);
        return Object.assign(rest, { si_detail });
      });
      const qty_results = await Promise.all(rows.map(({ item_code, batch_no }) => batch_no ? frappe.call({
        method: "erpnext.stock.doctype.batch.batch.get_batch_qty",
        args: { batch_no, item_code, warehouse }
      }) : {}));
      const qtys = qty_results.map(({ message = {} }) => typeof message === "number" ? message : null);
      return rows.map((item, idx) => Object.assign(item, { available_qty: qtys[idx] }));
    }
    async set_batches(frm, warehouse) {
      this.batches = await this._get_batch_items(frm.doc.items, warehouse);
      this.dialog.fields_dict.batches.df.data = this.batches;
      this.dialog.fields_dict.batches.refresh();
    }
    async print(frm) {
      const print_formats = this.print_formats;
      this.dialog.get_primary_btn().off("click");
      this.dialog.set_primary_action("OK", function() {
        const { name } = frm.doc;
        const values = this.get_values();
        const enabled_print_formats = print_formats.filter((pf) => values[pf]);
        this.hide();
        enabled_print_formats.forEach((pf) => {
          print_doc("Sales Invoice", name, pf, 0);
        });
      });
      this.dialog.set_df_property("gift_card_sec", "hidden", 1);
      this.dialog.set_df_property("payment_sec", "hidden", 1);
      this.dialog.show();
    }
  };

  // ../optic_store/optic_store/public/js/scripts/sales_invoice.js
  function set_gift_card_payment(frm) {
    return;
    const payments = frm.get_field("payments");
    if (payments) {
      const row = (payments.grid.grid_rows || []).map(({ doc }) => doc).find(({ mode_of_payment }) => mode_of_payment === "Gift Card") || frappe.model.add_child(frm.doc, "Sales Invoice Payment", "payments");
      const amount = (0, import_sumBy4.default)(frm.doc.os_gift_cards, "balance");
      const { rounded_total, grand_total } = frm.doc;
      frappe.model.set_value(row.doctype, row.name, "amount", Math.min(amount, rounded_total || grand_total));
      payments.refresh();
    }
  }
  async function render_qol_button(frm) {
    const { message: state_to_complete } = await frappe.call({
      method: "optic_store.api.sales_invoice.get_state_to_complete",
      args: { doctype: "Sales Order" }
    });
    if (state_to_complete && frm.doc.docstatus === 1) {
      const actual_qty = frm.doc.items.reduce((a, { qty }) => a + qty, 0);
      const delivered_qty = frm.doc.items.reduce((a, { delivered_qty: delivered_qty2 }) => a + delivered_qty2, 0);
      const { status, update_stock } = frm.doc;
      const { message: so_statuses = [] } = await frappe.call({
        method: "optic_store.api.sales_invoice.get_ref_so_statuses",
        args: { sales_invoice: frm.doc.name }
      });
      const can_be_paid = ["Unpaid", "Overdue"].includes(status);
      const can_be_collected = !so_statuses.some((state) => state !== state_to_complete) && cint(update_stock) !== 1 && actual_qty > delivered_qty;
      if (can_be_paid) {
        frm.add_custom_button(__("Payment Top Up"), function() {
          const deliver = false;
          frm.deliver_dialog && frm.deliver_dialog.payment_and_deliver(frm, deliver);
        });
      }
      if (can_be_collected) {
        frm.add_custom_button(__("Collect Order"), function() {
          const deliver = true;
          frm.deliver_dialog && frm.deliver_dialog.payment_and_deliver(frm, deliver);
        });
      }
      if (!can_be_paid || !can_be_collected) {
        frm.add_custom_button(__("Print Invoice"), function() {
          frm.deliver_dialog && frm.deliver_dialog.print(frm);
        });
      }
    }
  }
  function render_return_button(frm) {
    const { docstatus, is_return, outstanding_amount = 0, grand_total = 0 } = frm.doc;
    if (docstatus === 1 && !is_return && (outstanding_amount >= 0 || Math.abs(flt(outstanding_amount)) < flt(grand_total)) && ["Accounts Manager", "Accounts User", "System Manager"].some((role) => frappe.user_roles.includes(role))) {
      frm.add_custom_button("Return / Credit Note", function() {
        frappe.model.open_mapped_doc({
          method: "erpnext.accounts.doctype.sales_invoice.sales_invoice.make_sales_return",
          frm
        });
      });
    }
  }
  async function get_cost_center(frm) {
    if (frm.os_cost_center) {
      return frm.os_cost_center;
    }
    const { message: { os_cost_center } = {} } = await frappe.db.get_value("Branch", frm.doc.os_branch, "os_cost_center");
    frm.os_cost_center = os_cost_center;
    return os_cost_center;
  }
  async function set_cost_center(frm) {
    const { os_branch } = frm.doc;
    if (os_branch) {
      const cost_center = await get_cost_center(frm);
      frm.doc.items.forEach(({ doctype: cdt, name: cdn }) => {
        frappe.model.set_value(cdt, cdn, "cost_center", cost_center);
      });
    }
  }
  async function handle_items_cost_center(frm, cdt, cdn) {
    const { cost_center } = frappe.get_doc(cdt, cdn);
    const branch_cost_center = await get_cost_center(frm);
    if (branch_cost_center !== cost_center) {
      frappe.model.set_value(cdt, cdn, "cost_center", branch_cost_center);
    }
  }
  async function set_naming_series2(frm) {
    const { os_branch: branch } = frm.doc;
    if (branch) {
      const {
        message: { os_sales_invoice_naming_series } = {}
      } = await frappe.db.get_value("Branch", branch, "os_sales_invoice_naming_series");
      frm.set_value("naming_series", os_sales_invoice_naming_series);
    }
  }
  var sales_invoice_item = {
    item_code: handle_min_item_prices
  };
  var sales_invoice_gift_card = {
    balance: set_gift_card_payment,
    os_gift_cards_remove: set_gift_card_payment
  };
  var sales_invoice_list = {
    onload: function(lv) {
      if (frappe.user_roles.includes("Branch User") && !frappe.user_roles.includes("Accounts Manager")) {
        lv.page.btn_primary.hide();
      }
    }
  };
  var sales_invoice_default = {
    setup: async function(frm) {
      const { invoice_pfs = [], invoice_mops = [] } = await frappe.db.get_doc("Optical Store Settings");
      const print_formats = invoice_pfs.map(({ print_format }) => print_format);
      const mode_of_payments = [""];
      frm.deliver_dialog = new DeliverDialog(print_formats, mode_of_payments);
    },
    onload: async function(frm) {
      setup_employee_queries(frm);
      set_spec_types_options(frm);
      if (frm.is_new()) {
        await set_fields(frm);
        if (frm.doc.items.length > 0) {
          set_cost_center(frm);
        }
      }
      frm.set_query("os_cashback_receipt", ({ posting_date }) => ({
        filters: [
          ["balance_amount", ">", 0],
          ["expiry_date", ">", posting_date]
        ]
      }));
    },
    refresh: function(frm) {
      frm.set_query("gift_card", "os_gift_cards", function() {
        return {
          filters: [["balance", ">", 0]]
        };
      });
      render_prescription(frm);
      render_qol_button(frm);
      hide_actions(frm);
      render_return_button(frm);
    },
    os_branch: function(frm) {
      set_naming_series2(frm);
      set_cost_center(frm);
    },
    customer: setup_orx_name,
    orx_type: setup_orx_name,
    orx_name: render_prescription,
    orx_group_discount: apply_group_discount,
    os_gift_card_entry: handle_gift_card_entry,
    os_cashback_receipt: async function(frm) {
      const { os_cashback_receipt: cashback_receipt } = frm.doc;
      if (cashback_receipt) {
        const { message: { balance_amount = 0 } = {} } = await frappe.db.get_value("Cashback Receipt", cashback_receipt, "balance_amount");
        frm.set_value("os_cashback_balance", balance_amount);
      } else {
        frm.set_value("os_cashback_balance", 0);
      }
    },
    redeem_loyalty_points: async function(frm) {
      frm.toggle_reqd("os_loyalty_card_no", frm.doc.redeem_loyalty_points);
      const { customer, posting_date: expiry_date, company } = frm.doc;
      if (customer) {
        const { message: { loyalty_points } = {} } = await frappe.call({
          method: "erpnext.accounts.doctype.loyalty_program.loyalty_program.get_loyalty_program_details_with_points",
          args: { customer, expiry_date, company, silent: true }
        });
        frm.set_value("os_available_loyalty_points", loyalty_points);
      }
    }
  };

  // ../optic_store/optic_store/public/js/scripts/delivery_note.js
  async function set_fields2(frm) {
    const { message: branch } = await frappe.call({
      method: "optic_store.api.customer.get_user_branch"
    });
    frm.set_value("os_branch", branch);
  }
  var delivery_note_item = {
    items_add: handle_items_cost_center
  };
  var delivery_note_default = {
    onload: async function(frm) {
      if (frm.is_new()) {
        await set_fields2(frm);
        if (frm.doc.items.length > 0) {
          set_cost_center(frm);
        }
      }
    },
    os_branch: set_cost_center
  };

  // ../optic_store/optic_store/public/js/scripts/customer.js
  var import_vue4 = __toESM(require_vue());

  // ../optic_store/optic_store/public/js/components/CustomerDashboard.vue
  var __vue_script__7 = {
    props: { labels: Array, datasets: Array },
    data: function() {
      const choices = this.datasets.map(({ name }) => name);
      return { choices, showing: choices[0] };
    },
    methods: {
      get_chart_data: function(showing) {
        return {
          labels: this.labels,
          datasets: this.datasets.filter(({ name }) => name === showing)
        };
      }
    },
    mounted() {
      const chart = new Chart(this.$refs.chart, {
        title: "Sales by Item Group",
        data: this.get_chart_data(this.showing),
        type: "bar",
        height: 180
      });
      this.$watch("showing", (showing) => {
        chart.update(this.get_chart_data(showing));
      });
    }
  };
  var __vue_render__7 = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c("div", [
      _c("div", { ref: "chart" }),
      _vm._v(" "),
      _c("div", { staticClass: "os-actions" }, _vm._l(_vm.choices, function(choice) {
        return _c("button", {
          class: { "btn btn-xs": true, "btn-info": _vm.showing === choice },
          attrs: { type: "button" },
          on: {
            click: function($event) {
              _vm.showing = choice;
            }
          }
        }, [_vm._v("\n      " + _vm._s(choice) + "\n    ")]);
      }), 0)
    ]);
  };
  var __vue_staticRenderFns__7 = [];
  __vue_render__7._withStripped = true;
  var __vue_inject_styles__7 = function(inject) {
    if (!inject)
      return;
    inject("data-v-2005f8c2_0", { source: ".os-actions > button[data-v-2005f8c2] {\n  margin: 4px;\n}\n\n/*# sourceMappingURL=CustomerDashboard.vue.map */", map: { "version": 3, "sources": ["../optic_store/optic_store/public/js/components/CustomerDashboard.vue", "CustomerDashboard.vue"], "names": [], "mappings": "AA+CA;EACA,WAAA;AC9CA;;AAEA,gDAAgD", "file": "CustomerDashboard.vue", "sourcesContent": [`<template>
  <div>
    <div ref="chart" />
    <div class="os-actions">
      <button
        v-for="choice in choices"
        type="button"
        :class="{ 'btn btn-xs': true, 'btn-info': showing === choice }"
        @click="showing = choice;"
      >
        {{ choice }}
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: { labels: Array, datasets: Array },
  data: function() {
    const choices = this.datasets.map(({ name }) => name);
    return { choices, showing: choices[0] };
  },
  methods: {
    get_chart_data: function(showing) {
      return {
        labels: this.labels,
        datasets: this.datasets.filter(({ name }) => name === showing),
      };
    },
  },
  mounted() {
    const chart = new Chart(this.$refs.chart, {
      title: 'Sales by Item Group',
      data: this.get_chart_data(this.showing),
      type: 'bar',
      height: 180,
    });
    this.$watch('showing', showing => {
      chart.update(this.get_chart_data(showing));
    });
  },
};
<\/script>

<style lang="scss" scoped>
.os-actions {
  & > button {
    margin: 4px;
  }
}
</style>
`, ".os-actions > button {\n  margin: 4px;\n}\n\n/*# sourceMappingURL=CustomerDashboard.vue.map */"] }, media: void 0 });
  };
  var __vue_scope_id__7 = "data-v-2005f8c2";
  var __vue_module_identifier__7 = void 0;
  var __vue_is_functional_template__7 = false;
  function __vue_normalize__7(template, style, script, scope, functional, moduleIdentifier, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
    const component = (typeof script === "function" ? script.options : script) || {};
    component.__file = "../optic_store/optic_store/public/js/components/CustomerDashboard.vue";
    if (!component.render) {
      component.render = template.render;
      component.staticRenderFns = template.staticRenderFns;
      component._compiled = true;
      if (functional)
        component.functional = true;
    }
    component._scopeId = scope;
    if (true) {
      let hook;
      if (false) {
        hook = function(context) {
          context = context || this.$vnode && this.$vnode.ssrContext || this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext;
          if (!context && typeof __VUE_SSR_CONTEXT__ !== "undefined") {
            context = __VUE_SSR_CONTEXT__;
          }
          if (style) {
            style.call(this, createInjectorSSR(context));
          }
          if (context && context._registeredComponents) {
            context._registeredComponents.add(moduleIdentifier);
          }
        };
        component._ssrRegister = hook;
      } else if (style) {
        hook = shadowMode ? function(context) {
          style.call(this, createInjectorShadow(context, this.$root.$options.shadowRoot));
        } : function(context) {
          style.call(this, createInjector(context));
        };
      }
      if (hook !== void 0) {
        if (component.functional) {
          const originalRender = component.render;
          component.render = function renderWithStyleInjection(h, context) {
            hook.call(context);
            return originalRender(h, context);
          };
        } else {
          const existing = component.beforeCreate;
          component.beforeCreate = existing ? [].concat(existing, hook) : [hook];
        }
      }
    }
    return component;
  }
  function __vue_create_injector__7() {
    const styles = __vue_create_injector__7.styles || (__vue_create_injector__7.styles = {});
    const isOldIE = typeof navigator !== "undefined" && /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());
    return function addStyle(id, css) {
      if (document.querySelector('style[data-vue-ssr-id~="' + id + '"]'))
        return;
      const group = isOldIE ? css.media || "default" : id;
      const style = styles[group] || (styles[group] = { ids: [], parts: [], element: void 0 });
      if (!style.ids.includes(id)) {
        let code = css.source;
        let index = style.ids.length;
        style.ids.push(id);
        if (false) {
          code += "\n/*# sourceURL=" + css.map.sources[0] + " */";
          code += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(css.map)))) + " */";
        }
        if (isOldIE) {
          style.element = style.element || document.querySelector("style[data-group=" + group + "]");
        }
        if (!style.element) {
          const head = document.head || document.getElementsByTagName("head")[0];
          const el = style.element = document.createElement("style");
          el.type = "text/css";
          if (css.media)
            el.setAttribute("media", css.media);
          if (isOldIE) {
            el.setAttribute("data-group", group);
            el.setAttribute("data-next-index", "0");
          }
          head.appendChild(el);
        }
        if (isOldIE) {
          index = parseInt(style.element.getAttribute("data-next-index"));
          style.element.setAttribute("data-next-index", index + 1);
        }
        if (style.element.styleSheet) {
          style.parts.push(code);
          style.element.styleSheet.cssText = style.parts.filter(Boolean).join("\n");
        } else {
          const textNode = document.createTextNode(code);
          const nodes = style.element.childNodes;
          if (nodes[index])
            style.element.removeChild(nodes[index]);
          if (nodes.length)
            style.element.insertBefore(textNode, nodes[index]);
          else
            style.element.appendChild(textNode);
        }
      }
    };
  }
  var __vue_component__7 = /* @__PURE__ */ __vue_normalize__7({ render: __vue_render__7, staticRenderFns: __vue_staticRenderFns__7 }, __vue_inject_styles__7, __vue_script__7, __vue_scope_id__7, __vue_is_functional_template__7, __vue_module_identifier__7, false, __vue_create_injector__7, void 0, void 0);
  var CustomerDashboard_default = __vue_component__7;

  // ../optic_store/optic_store/public/js/scripts/customer.js
  async function set_branch(frm) {
    if (frm.doc.__islocal) {
      const { message: branch } = await frappe.call({
        method: "optic_store.api.customer.get_user_branch"
      });
      frm.set_value("branch", branch);
    }
  }
  async function render_prescription_data(frm) {
    if (!frm.doc.__islocal) {
      const $wrapper = $('<div class="form-dashboard-section custom" />').appendTo(frm.dashboard.wrapper);
      const { message: props } = await frappe.call({
        method: "optic_store.api.customer.get_dashboard_data",
        args: { customer: frm.doc.name }
      });
      if (props) {
        frm.prescription_chart_vue = new import_vue4.default({
          el: $wrapper.html("<div />").children()[0],
          render: (h) => h(CustomerDashboard_default, { props })
        });
      }
    }
  }
  function set_nationality_options(frm) {
    frm.set_df_property("os_nationality", "options", ["", ...NATIONALITIES]);
  }
  function add_prescription_link(frm) {
    const orders = frm.dashboard && frm.dashboard.data && frm.dashboard.data.transactions.find(({ label }) => label === __("Orders"));
    if (orders && !orders.items.includes("Optical Prescription")) {
      orders.items = ["Optical Prescription", ...orders.items];
      frm.dashboard.data_rendered = false;
      frm.dashboard.transactions_area.empty();
      frm.dashboard.refresh();
    }
  }
  function add_actions(frm) {
    if (!frm.doc.__islocal) {
      frm.add_custom_button(__("Customer-wise Invoice"), function() {
        frappe.set_route("query-report", "Customer-wise Invoice", {
          customer: frm.doc.name
        });
      });
    }
  }
  var customer_default = {
    onload: function(frm) {
      set_branch(frm);
      set_nationality_options(frm);
    },
    refresh: function(frm) {
      add_prescription_link(frm);
      render_prescription_data(frm);
      add_actions(frm);
    }
  };

  // ../optic_store/optic_store/public/js/scripts/customer_qe.js
  var customer_qe_fields = [
    { fieldtype: "Column Break", label: __("Bio") },
    {
      fieldtype: "Data",
      fieldname: "os_short_name",
      label: __("Short Name"),
      reqd: 1
    },
    {
      fieldtype: "Data",
      fieldname: "os_unverified_loyalty_card_no",
      label: __("New Loyalty Card No")
    },
    {
      fieldtype: "Data",
      fieldname: "os_cpr_no",
      label: __("CPR No")
    },
    {
      fieldtype: "Date",
      fieldname: "os_date_of_birth",
      label: __("Date of Birth")
    },
    {
      fieldtype: "Data",
      fieldname: "os_occupation",
      label: __("Occupation")
    },
    {
      fieldtype: "Select",
      fieldname: "os_nationality",
      label: __("Nationality"),
      options: ["", ...NATIONALITIES]
    },
    { fieldtype: "Column Break", label: __("Contact") },
    {
      fieldtype: "Data",
      fieldname: "os_office_number",
      options: "Phone",
      label: __("Office Number")
    },
    {
      fieldtype: "Data",
      fieldname: "os_mobile_number",
      options: "Phone",
      label: __("Mobile Number")
    },
    {
      fieldtype: "Data",
      fieldname: "os_home_number",
      options: "Phone",
      label: __("Home Number")
    },
    {
      fieldtype: "Data",
      fieldname: "os_other_number",
      options: "Phone",
      label: __("Other Number")
    },
    {
      fieldtype: "Data",
      fieldname: "os_email",
      options: "Email",
      label: __("Email")
    },
    {
      fieldtype: "Small Text",
      fieldname: "os_address",
      label: __("Address")
    }
  ];
  var customer_qe_default = {
    get_variant_fields: function() {
      return [
        { fieldtype: "Section Break", label: __("Details"), collapsible: 1 },
        ...customer_qe_fields.filter(({ reqd }) => !reqd)
      ];
    }
  };

  // ../optic_store/optic_store/public/js/scripts/employee.js
  var employee_default = {
    onload: set_nationality_options,
    refresh: function(frm) {
      if (!["HR Manager", "Account Manager", "System Manager"].some((role) => frappe.user_roles.includes(role))) {
        frm.$wrapper.find(".form-sidebar > .form-attachments").hide();
        frm.$wrapper.find(".form-footer  .form-comments").hide();
      }
    }
  };

  // ../optic_store/optic_store/public/js/scripts/branch.js
  var branch_default = {
    refresh: async function(frm) {
      const { message: naming_series } = await frappe.call({
        method: "optic_store.api.branch.get_naming_series"
      });
      if (naming_series) {
        const { sales_order, sales_invoice } = naming_series;
        frm.set_df_property("os_sales_order_naming_series", "options", sales_order);
        frm.set_df_property("os_sales_invoice_naming_series", "options", sales_invoice);
      }
    }
  };

  // ../optic_store/optic_store/public/js/frappe-components/PricelistDialog.js
  var PricelistDialog = class {
    constructor(price_lists = []) {
      this.price_lists = price_lists;
      this.dialog = new frappe.ui.Dialog({
        title: "Set Prices",
        fields: this.price_lists.map((pl) => ({
          fieldtype: "Currency",
          fieldname: pl,
          label: __(pl)
        }))
      });
    }
    async set_prices(frm) {
      const { message: prices } = await frappe.call({
        method: "optic_store.api.item.get_prices",
        args: { item_code: frm.doc.item_code }
      });
      prices.forEach(({ price_list, price_list_rate }) => {
        this.dialog.replace_field(price_list, {
          fieldtype: "Currency",
          fieldname: price_list,
          label: __(price_list),
          default: price_list_rate
        });
      });
    }
    render_dialog(frm) {
      const price_lists = this.price_lists;
      this.dialog.get_primary_btn().off("click");
      this.dialog.set_primary_action("OK", async function() {
        const { name: item_code } = frm.doc;
        const values = this.get_values();
        const prices = price_lists.map((price_list) => ({
          price_list,
          price_list_rate: values[price_list]
        }));
        this.hide();
        await frappe.call({
          method: "optic_store.api.item.update_prices",
          args: { item_code, prices }
        });
        frm.reload_doc();
      });
      this.dialog.show();
    }
  };

  // ../optic_store/optic_store/public/js/scripts/item.js
  function toggle_naming(frm) {
    const { manual_item_code } = frm.doc;
    frm.toggle_display("item_code", manual_item_code);
    frm.toggle_reqd("item_code", manual_item_code);
    frm.toggle_display("naming_series", !manual_item_code);
  }
  function enable_gift_card(frm) {
    const { is_gift_card } = frm.doc;
    frm.toggle_reqd("gift_card_value", is_gift_card);
    frm.set_value("has_serial_no", is_gift_card);
    frm.set_value("deferred_revenue_account", is_gift_card);
  }
  function render_price_button(frm) {
    frm.add_custom_button(__("Set Prices"), function() {
      frm.pricelist_dialog.set_prices(frm);
      frm.pricelist_dialog.render_dialog(frm);
    });
  }
  function hide_actions2(frm) {
    if (!frm.doc.__islocal && frm.doc.is_stock_item) {
      const hide_buttons = setInterval(() => {
        const move_btns = frm.dashboard.wrapper.find(".btn-move");
        if (move_btns.length > 0) {
          move_btns.parent().hide();
          clearInterval(hide_buttons);
        }
      }, 60);
    }
  }
  var item_default = {
    setup: async function(frm) {
      const { price_lists = [] } = await frappe.db.get_doc("Optical Store Settings");
      const price_lists_scrubbed = price_lists.map(({ price_list }) => price_list);
      frm.pricelist_dialog = new PricelistDialog(price_lists_scrubbed);
    },
    refresh: function(frm) {
      frm.toggle_display("manual_item_code", frm.doc.__islocal);
      if (!frm.doc.__islocal) {
        render_price_button(frm);
      }
      hide_actions2(frm);
    },
    manual_item_code: toggle_naming,
    is_gift_card: enable_gift_card,
    os_commission_by: function(frm) {
      const { os_commission_by } = frm.doc;
      frm.fields_dict["os_commissions"].grid.set_column_disp("commission_rate", os_commission_by === "Percentage");
      frm.fields_dict["os_commissions"].grid.set_column_disp("commission_amount", os_commission_by === "Amount");
      const field_map = {
        Percentage: "commission_rate",
        Amount: "commission_amount"
      };
      if (field_map[os_commission_by]) {
        frm.fields_dict["os_commissions"].grid.grid_rows.map(({ doc }) => doc).map(({ doctype: cdt, name: cdn }) => frappe.model.set_value(cdt, cdn, field_map[os_commission_by], null));
      }
    }
  };

  // ../optic_store/optic_store/public/js/scripts/optical_prescription_qe.js
  var import_vue5 = __toESM(require_vue());
  var optical_prescription_qe_default = {
    render_dialog: function() {
      this.mandatory = [
        ...this.mandatory,
        ...this.meta.fields.filter(({ fieldname }) => [
          "frame_sec",
          "frame_size",
          "height_col",
          "height_type",
          "height",
          "details_simple_sec",
          "details_html"
        ].includes(fieldname)),
        ...get_all_rx_params().map((fieldname) => ({
          fieldname,
          fieldtype: "Data",
          hidden: 1
        }))
      ];
      this._super();
      const { $wrapper } = this.dialog.get_field("details_html");
      this.detail_vue = new import_vue5.default({
        el: $wrapper.html("<div />").children()[0],
        data: { doc: this.dialog.doc, fields: this.dialog.fields_dict },
        methods: {
          update: (field, value) => this.dialog.set_value(field, value)
        },
        render: function(h) {
          const { doc, update, fields } = this;
          return h(PrescriptionForm_default, {
            props: { doc, update, fields }
          });
        }
      });
    },
    render_edit_in_full_page_link: function() {
      this._super();
      $(`<button class="os-submit btn-warning btn-sm">${__("Save & Submit")}</button>`).css("float", "right").insertAfter(this.dialog.$body.find(".edit-full")).on("click", () => this.submit());
    },
    submit: async function() {
      try {
        this.update_doc();
        const { message: new_doc } = await frappe.call({
          method: "optic_store.api.optical_prescription.save_and_submit",
          args: { doc: this.dialog.doc },
          freeze: true
        });
        if (!new_doc) {
          throw "x";
        }
        this.dialog.hide();
        frappe.model.clear_doc(this.dialog.doc.doctype, this.dialog.doc.name);
        this.dialog.doc = new_doc;
        if (frappe._from_link) {
          frappe.ui.form.update_calling_link(this.dialog.doc);
        } else {
          if (this.after_insert) {
            this.after_insert(this.dialog.doc);
          } else {
            this.open_form_if_not_list();
          }
        }
      } catch (e) {
        this.open_doc();
      } finally {
        this.dialog.working = false;
        this.dialog.clear_message();
      }
    }
  };

  // ../optic_store/optic_store/public/js/scripts/batch_qe.js
  var batch_qe_default = {
    render_dialog: async function() {
      this._super();
      if (cur_frm) {
        const { doctype, item_code } = cur_frm.selected_doc || {};
        if ([
          "Stock Entry Detail",
          "Purchase Receipt Item",
          "Purchase Invoice Item"
        ].includes(doctype)) {
          this.dialog.set_value("item", item_code);
          const { message: item = {} } = await frappe.db.get_value("Item", item_code, [
            "create_new_batch",
            "has_expiry_date"
          ]);
          if (cint(item.create_new_batch)) {
            const field = this.dialog.get_field("batch_id");
            field.df.reqd = 0;
            field.df.bold = 1;
            field.refresh();
          }
          if (cint(item.has_expiry_date)) {
            const field = this.dialog.get_field("expiry_date");
            field.df.reqd = 1;
            field.refresh();
          }
        }
      }
    }
  };

  // ../optic_store/optic_store/public/js/scripts/stock_entry.js
  function will_hide_new_action() {
    return frappe.user_roles.includes("Branch User") && !frappe.user_roles.includes("Stock Manager");
  }
  var listview_settings = {
    onload: function(lv) {
      if (will_hide_new_action()) {
        lv.page.btn_primary.hide();
      }
    }
  };
  var stock_entry_default = {
    listview_settings,
    onload: function(frm) {
      if (!["Stock Manager"].some((role) => frappe.user_roles.includes(role))) {
        frm.set_df_property("purpose", "options", ["Material Transfer"]);
      }
    },
    refresh: function(frm) {
      if (will_hide_new_action()) {
        frm.page.menu.find(`a:contains('${__("New Stock Entry")}')`).parent().addClass("hidden");
      }
      if (!["Stock Manager"].some((role) => frappe.user_roles.includes(role)) && frm.doc.__islocal) {
        frm.set_value("purpose", "Material Transfer");
      }
    }
  };

  // ../optic_store/optic_store/public/js/scripts/salary_slip.js
  function show_print_buttons(frm) {
    frm.add_custom_button("Print Salary Slips", () => {
      if (!frappe.model.can_print(frm.doc.doctype, frm)) {
        frappe.msgprint(__("You are not allowed to print this document"));
        return;
      }
      const { name } = frm.doc;
      ["Payslip Type 1", "Payslip Type 2"].forEach((print_format) => {
        print_doc("Salary Slip", name, print_format, 0);
      });
    });
  }
  var salary_slip_default = {
    refresh: function(frm) {
      if (!frm.doc.__islocal) {
        show_print_buttons(frm);
      }
    }
  };

  // ../optic_store/optic_store/public/js/scripts/payroll_entry.js
  function show_print_buttons2(frm) {
    const waitForButtons = setInterval(() => {
      if (frm.custom_buttons["Make Bank Entry"]) {
        frm.add_custom_button("Print Salary Slips", async function() {
          if (!frappe.model.can_print(frm.doc.doctype, frm)) {
            frappe.msgprint(__("You are not allowed to print this document"));
            return;
          }
          const { name: payroll_entry } = frm.doc;
          const { message: salary_slips = [] } = await frappe.call({
            method: "optic_store.api.salary_slip.get_salary_slips_from_payroll_entry",
            args: { payroll_entry },
            freeze: true
          });
          salary_slips.forEach((salary_slip) => {
            ["Payslip Type 1", "Payslip Type 2"].forEach((print_format) => {
              print_doc("Salary Slip", salary_slip, print_format, 0);
            });
          });
        });
        clearInterval(waitForButtons);
      }
    }, 300);
  }
  var payroll_entry_default = {
    refresh: function(frm) {
      if (frm.doc.docstatus === 1) {
        show_print_buttons2(frm);
      }
    }
  };

  // ../optic_store/optic_store/public/js/scripts/index.js
  var scripts_default = {
    optical_prescription: optical_prescription_default,
    optical_store_settings: optical_store_settings_default,
    optical_store_selling_settings: optical_store_selling_settings_default,
    group_discount: group_discount_default,
    gift_card: gift_card_default,
    stock_transfer: stock_transfer_default,
    stock_transfer_item,
    sales_order_bulk_update: sales_order_bulk_update_default,
    bulk_update_order,
    xz_report: xz_report_default,
    sms_template: sms_template_default,
    custom_loyalty_entry: custom_loyalty_entry_default,
    custom_purchase_receipt: custom_purchase_receipt_default,
    email_alerts: email_alerts_default,
    cashback_program: cashback_program_default,
    extensions: extensions_exports,
    serial_no_batch_selector: serial_no_batch_selector_default
  };

  // ../optic_store/optic_store/public/js/pages/query_report.js
  function extend_multiselect(ControlMultiSelect) {
    if (ControlMultiSelect.name === "MultiSelectExtended") {
      return ControlMultiSelect;
    }
    return class MultiSelectExtended extends ControlMultiSelect {
      setup_awesomplete() {
        super.setup_awesomplete();
        this.$input.off("focus");
        this.$input.on("focus", () => {
          if (!this.$input.val()) {
            this.$input.val("");
          }
          this.$input.trigger("input");
        });
        this.$input.on("awesomplete-select", (e) => {
          e.preventDefault();
          this.awesomplete.replace(e.originalEvent.text);
          this.awesomplete.evaluate();
        });
      }
      get_awesomplete_settings() {
        return Object.assign(super.get_awesomplete_settings(), {
          filter: (text, input) => {
            if (this.get_values().includes(text.value)) {
              return false;
            }
            const item = this.awesomplete.get_item(text.value);
            const match = input.match(/[^,]*$/)[0];
            if (!item) {
              return Awesomplete.FILTER_CONTAINS(text, match);
            }
            const getMatch = (value) => value && Awesomplete.FILTER_CONTAINS(value, match);
            return getMatch(item.label) || getMatch(item.value) || getMatch(item.description);
          }
        });
      }
    };
  }
  function extend_query_report(QueryReport) {
    return class QueryReportExtended extends QueryReport {
      refresh_report() {
        this.toggle_message(true);
        return frappe.run_serially([
          () => this.setup_filters(),
          () => this.set_route_filters(),
          () => this.report_settings.onload && this.report_settings.onload(this),
          () => {
            try {
              this.get_filter_values(true);
            } catch (e) {
              clearInterval(this.interval);
            }
          },
          () => this.get_user_settings(),
          () => this.refresh()
        ]);
      }
    };
  }

  // ../optic_store/optic_store/public/js/pages/pos.js
  var import_pick2 = __toESM(require_pick());
  var import_keyBy = __toESM(require_keyBy());
  var import_sumBy5 = __toESM(require_sumBy());
  var import_mapValues3 = __toESM(require_mapValues());
  var import_jsbarcode = __toESM(require_JsBarcode());
  var CUSTOMER_DETAILS_FIELDS = customer_qe_fields.filter(({ fieldtype }) => ["Data", "Date", "Small Text"].includes(fieldtype)).map(({ fieldname }) => fieldname);
  function list2dict(key, list) {
    return Object.assign({}, ...list.map((item) => ({ [item[key]]: item })));
  }
  function set_description(field) {
    return function(description) {
      field.set_new_description(description);
    };
  }
  function add_search_params_to_customer_mapper(customers_details = {}) {
    const search_fields = ["os_cpr_no", "os_mobile_number", "old_customer_id"];
    return function(item) {
      const { value, searchtext: searchtext_ori = "" } = item;
      const customer = customers_details[value];
      if (customer) {
        const searchtext = search_fields.reduce((a, param) => {
          const x = customer[param] && customer[param].toLowerCase();
          return x && !a.includes(x) ? `${a} ${x}` : a;
        }, searchtext_ori);
        return Object.assign(item, { searchtext });
      }
      return item;
    };
  }
  function make_customer_search_subtitle(customers_details = {}) {
    const search_fields = [
      "customer_name",
      "os_cpr_no",
      "os_mobile_number",
      "old_customer_id"
    ];
    return function({ value }) {
      const customer = customers_details[value];
      if (customer) {
        return search_fields.map((param) => customer[param]).filter((value2) => value2).join(" | ");
      }
      return "";
    };
  }
  function get_barcode_uri(text) {
    return (0, import_jsbarcode.default)(document.createElement("canvas"), text, {
      height: 40,
      displayValue: false
    })._renderProperties.element.toDataURL();
  }
  function get_offline_customer(customer) {
    const docjson = (JSON.parse(localStorage.getItem("customer_details")) || {})[customer];
    return docjson ? JSON.parse(docjson) : null;
  }
  function extend_pos(PosClass) {
    class PosClassExtended extends PosClass {
      onload() {
        this.last_update = "2019-05-27T15:15:14.776Z";
        super.onload();
        this.batch_dialog = new frappe.ui.Dialog({
          title: __("Select Batch No"),
          fields: [
            {
              fieldname: "batch",
              fieldtype: "Select",
              label: __("Batch No"),
              reqd: 1
            }
          ]
        });
      }
      async init_master_data(r) {
        super.init_master_data(r);
        try {
          const {
            message: {
              sales_persons = [],
              group_discounts = {},
              customers_details = [],
              loyalty_programs = [],
              gift_cards = [],
              territories = [],
              customer_groups = [],
              batch_details = [],
              branch_details = {}
            } = {}
          } = await frappe.call({
            method: "optic_store.api.pos.get_extended_pos_data",
            args: { company: this.pos_profile_data.company },
            freeze: true,
            freeze_message: __("Syncing extended details")
          });
          this.sales_persons_data = sales_persons.map(({ name, employee_name }) => ({
            label: employee_name,
            value: name
          }));
          this.group_discounts_data = group_discounts;
          this.customers_details_data = list2dict("name", customers_details);
          this.customers_master_data = { territories, customer_groups };
          this.loyalty_programs_data = list2dict("name", loyalty_programs);
          this.gift_cards_data = list2dict("name", gift_cards);
          this.batch_details = batch_details;
          this.batch_no_data = (0, import_mapValues3.default)(batch_details, (x) => x.map(({ name }) => name));
          this.branch_details = branch_details;
          this.make_sales_person_field();
          this.make_group_discount_field();
          this.set_opening_entry();
        } catch (e) {
          console.warn(e);
          frappe.msgprint({
            indicator: "orange",
            title: __("Warning"),
            message: __("Unable to load extended details. Usage will be restricted.")
          });
        }
      }
      create_new() {
        super.create_new();
        if (this.sales_person_field) {
          this.sales_person_field.set_value("");
        }
      }
      make_control() {
        super.make_control();
        this.make_sales_person_field();
        this.make_group_discount_field();
        this.bind_keyboard_shortcuts();
      }
      toggle_totals_area(show) {
        super.toggle_totals_area(show);
        this.wrapper.find(".totals-area").find(".group_discount-area").toggle(!this.is_totals_area_collapsed);
        this.pos_bill.find(".discount-amount-area").hide();
      }
      make_customer() {
        super.make_customer();
        this.party_field.awesomeplete.item = ({ label, value }, input) => {
          const get_subtitle = make_customer_search_subtitle(this.customers_details_data);
          const html = `
          <a>
            <p>${__(label || value)}</p>
            <p class="text-muted ellipsis">${get_subtitle({ value })}</p>
          </a>
        `;
          return $("<li />").data("item.autocomplete", { value }).html(html).get(0);
        };
      }
      prepare_customer_mapper(key) {
        const super_fn = super.prepare_customer_mapper;
        function extended_fn(key2) {
          let startsuper = Date.now();
          super_fn.bind(this)(key2);
          let startext = Date.now();
          const search = (key2 || "").toLowerCase().trim();
          const reg = new RegExp(search.replace(new RegExp("%", "g"), "\\w*\\s*[a-zA-Z0-9]*"));
          let count = 0;
          const customers_mapper_ext = key2 ? this.customers.filter(({ name }) => {
            if (count >= 30) {
              return false;
            }
            const detail = this.customers_details_data && this.customers_details_data[name];
            if (detail) {
              const will_add = !this.customers_mapper.map(({ value }) => value).includes(name) && (reg.test(detail["old_customer_id"]) || reg.test(detail["os_cpr_no"]) || reg.test(detail["os_mobile_number"]));
              if (will_add) {
                count++;
              }
              return will_add;
            }
            return false;
          }).map(({ name, customer_name, customer_group, territory }) => ({
            label: name,
            value: name,
            customer_name,
            customer_group,
            territory,
            searchtext: [name, customer_name, customer_group, territory].join(" ").toLowerCase()
          })) : [];
          this.customers_mapper = [...customers_mapper_ext, ...this.customers_mapper].map(add_search_params_to_customer_mapper(this.customers_details_data));
          this.party_field.awesomeplete.list = this.customers_mapper;
          if (window.OS_DEBUG) {
            console.log(`[ ${String(key2).padEnd(12)} ] : ${(Date.now() - startsuper) / 1e3}s / ${(Date.now() - startext) / 1e3}s`);
          }
        }
        if (!this.customers_mapper) {
          this.customers_mapper = [];
        }
        if (this.os_timer_pcm) {
          window.cancelAnimationFrame(this.os_timer_pcm);
        }
        this.os_timer_pcm = window.requestAnimationFrame(extended_fn.bind(this, key));
      }
      update_customer(new_customer) {
        super.update_customer(new_customer);
        this.customer_doc.sections.forEach((section, i) => {
          if (i > 0) {
            section.wrapper.hide();
          }
        });
        this.customer_doc.add_fields([
          {
            fieldtype: "Select",
            fieldname: "territory",
            label: __("Territory"),
            default: this.pos_profile_data.territory,
            options: this.customers_master_data.territories
          },
          { fieldtype: "Column Break" },
          {
            fieldtype: "Select",
            fieldname: "customer_group",
            label: __("Customer Group"),
            default: this.pos_profile_data.customer_group,
            options: this.customers_master_data.customer_groups
          }
        ]);
        this.customer_doc.add_fields(customer_qe_fields);
        this.customer_doc.set_values((0, import_pick2.default)(this.customers_details_data[this.frm.doc.customer] || {}, [
          ...CUSTOMER_DETAILS_FIELDS,
          "territory",
          "customer_group"
        ]));
      }
      get_prompt_details() {
        super.get_prompt_details();
        const { territory, customer_group } = this.customer_doc.get_values();
        this.prompt_details.territory = territory;
        this.prompt_details.customer_group = customer_group;
        return JSON.stringify(this.prompt_details);
      }
      set_item_details(item_code, field, value, remove_zero_qty_items) {
        super.set_item_details(item_code, field, value, remove_zero_qty_items);
        if (field === "rate") {
          const item = this.frm.doc.items.find(({ item_code: x }) => x === item_code);
          if (item) {
            const { price_list_rate } = item;
            const discount_percentage = flt((1 - flt(value) / flt(price_list_rate)) * 100);
            if (discount_percentage > 0) {
              item.discount_percentage = discount_percentage;
            }
            this.update_paid_amount_status(false);
          }
        }
      }
      show_items_in_item_cart() {
        super.show_items_in_item_cart();
        this.wrapper.find(".items").find(".pos-bill-item > .cell:nth-child(3)").each((i, el) => {
          const value = el.innerText;
          if (value !== "0") {
            el.innerText = flt(value, precision("discount_percentage"));
          }
        });
      }
      make_item_list(customer) {
        super.make_item_list(customer);
        const items = (0, import_keyBy.default)(this.item_data, "name");
        this.wrapper.find(".item-list").find(".image-view-body").children("a").each((i, a) => {
          const { itemCode: item_code } = $(a).data();
          const {
            os_minimum_selling_rate: ms1 = 0,
            os_minimum_selling_2_rate: ms2 = 0
          } = items[item_code] || {};
          if (ms1 || ms2) {
            $(`<span>
                <div>MS1: ${format_currency(ms1, this.frm.doc.currency)}</div>
                <div>MS2: ${format_currency(ms2, this.frm.doc.currency)}</div>
              </span>`).css({
              position: "absolute",
              left: "0",
              top: "0",
              padding: "5px 9px",
              "background-color": "rgba(141, 153, 166, 0.6)",
              color: "#fff",
              "border-radius": "3px",
              "font-size": "0.75em"
            }).appendTo($(a).find(".image-field"));
          }
        });
      }
      validate() {
        if (!this.frm.doc.os_sales_person) {
          frappe.throw(__("Sales Person is mandatory"));
        } else if (!this.sales_persons_data.map(({ value }) => value).includes(this.frm.doc.os_sales_person)) {
          frappe.throw(__(`Sales Person: ${this.frm.doc.os_sales_person} is not valid`));
        }
        super.validate();
      }
      mandatory_batch_no() {
        const { has_batch_no, item_code } = this.items[0];
        this.batch_dialog.get_field("batch").$input.empty();
        this.batch_dialog.get_primary_btn().off("click");
        this.batch_dialog.get_close_btn().off("click");
        if (has_batch_no && !this.item_batch_no[item_code]) {
          (this.batch_details[item_code] || []).forEach(({ name, expiry_date, qty }) => {
            this.batch_dialog.get_field("batch").$input.append($("<option />", { value: name }).text(`${name} | ${expiry_date ? frappe.datetime.str_to_user(expiry_date) : "--"} | ${qty}`));
          });
          this.batch_dialog.get_field("batch").set_input();
          this.batch_dialog.set_primary_action(__("Submit"), () => {
            const batch_no = this.batch_dialog.get_value("batch");
            const item = this.frm.doc.items.find((item2) => item2.item_code === item_code);
            if (item) {
              item.batch_no = batch_no;
            }
            this.item_batch_no[item_code] = batch_no;
            this.batch_dialog.hide();
            this.set_focus();
          });
          this.batch_dialog.get_close_btn().on("click", () => {
            this.item_code = item_code;
            this.render_selected_item();
            this.remove_selected_item();
            this.wrapper.find(".selected-item").empty();
            this.item_code = null;
            this.set_focus();
          });
          this.batch_dialog.show();
          this.batch_dialog.$wrapper.find(".modal-backdrop").off("click");
        }
      }
      make_offline_customer(new_customer) {
        super.make_offline_customer(new_customer);
        const values = this.customer_doc.get_values();
        const is_new = !this.customers_details_data[this.frm.doc.customer];
        const current = this.customers_details_data[this.frm.doc.customer] || {};
        this.customers_details_data[this.frm.doc.customer] = Object.assign({
          customer_pos_id: values.customer_pos_id,
          full_name: values.full_name
        }, current, (0, import_pick2.default)(values, CUSTOMER_DETAILS_FIELDS), {
          customer_name: values.full_name !== current.customer_name ? values.full_name : current.customer_name,
          is_new
        });
      }
      make_keyboard() {
        super.make_keyboard();
        this.add_more_payment_options();
      }
      update_payment_amount() {
        const { idx: gift_card_idx } = this.frm.doc.payments.find(({ mode_of_payment }) => mode_of_payment === "Gift Card") || {};
        if (cint(gift_card_idx) === cint(this.idx)) {
          if (this.payment_val > flt(this.os_payment_fg.get_value("gift_card_balance"))) {
            this.selected_mode.val(0);
            return frappe.throw(__("Payment with Gift Card cannot exceed available balance"));
          }
        }
        super.update_payment_amount();
      }
      refresh() {
        super.refresh();
        if (!this.xreport) {
          this.set_opening_entry();
        }
      }
      make_menu_list() {
        super.make_menu_list();
        this.page.menu.find('a.grey-link:contains("Cashier Closing")').parent().hide();
        this.page.add_menu_item("XZ Report", async function() {
          if (this.connection_status) {
            if (!this.xreport) {
              await this.set_opening_entry();
            }
            frappe.dom.freeze("Syncing");
            this.sync_sales_invoice();
            await frappe.after_server_call();
            frappe.set_route("Form", "XZ Report", this.xreport, {
              end_time: frappe.datetime.now_datetime()
            });
            frappe.dom.unfreeze();
            this.xreport = null;
          } else {
            frappe.msgprint({
              message: __("Please perform this when online.")
            });
          }
        }.bind(this));
      }
      submit_invoice() {
        const gift_card_no = this.os_payment_fg.get_value("gift_card_no");
        const { amount } = this.frm.doc.payments.find(({ mode_of_payment }) => mode_of_payment === "Gift Card") || { amount: 0 };
        const gift_card = this.gift_cards_data[gift_card_no];
        if (gift_card) {
          this.gift_cards_data[gift_card_no] = Object.assign(gift_card, {
            balance: flt(gift_card.balance) - amount
          });
        }
        super.submit_invoice();
      }
      create_invoice() {
        const get_customer_doc = (customer) => {
          const doc = this.customers_details_data[customer];
          const offline_doc = get_offline_customer(customer);
          return Object.assign({}, doc, offline_doc, {
            is_new: doc ? doc.hasOwnProperty("is_new") && doc.is_new : true,
            customer_id: doc ? doc.name : null,
            customer_name: doc && doc.customer_name || offline_doc && offline_doc.full_name
          });
        };
        const invoice_data = super.create_invoice();
        this.frm.doc.pos_name_barcode_uri = get_barcode_uri(this.frm.doc.offline_pos_name);
        this.frm.doc.branch_doc = this.branch_details || {};
        this.frm.doc.customer_doc = get_customer_doc(this.frm.doc.customer);
        const sales_person = this.sales_persons_data.find(({ value }) => value === this.frm.doc.os_sales_person) || {};
        this.frm.doc.sales_person_name = sales_person.label;
        this.update_invoice();
        return invoice_data;
      }
      set_interval_for_si_sync() {
        setInterval(() => {
          this.freeze_screen = false;
          this.sync_sales_invoice();
        }, 36e5);
      }
      show_amounts() {
        super.show_amounts();
        this.dialog.get_primary_btn().toggleClass("disabled", this.frm.doc.grand_total !== this.frm.doc.paid_amount);
      }
      make_sales_person_field() {
        if (!this.sales_person_field) {
          this.sales_person_field = new frappe.ui.form.ControlAutocomplete({
            parent: $('<div style="margin-top: 10px;" />').insertAfter(this.pos_bill.find(".totals-area")),
            df: { options: this.sales_persons_data, label: __("Sales Person"), bold: 1 }
          });
          this.sales_person_field.refresh();
          this.sales_person_field.$input.on("change", () => {
            this.frm.doc.os_sales_person = this.sales_person_field.get_value();
          });
        }
        this.sales_person_field.set_data(this.sales_persons_data);
      }
      make_group_discount_field() {
        if (this.pos_profile_data.allow_user_to_edit_discount) {
          const group_discounts = Object.keys(this.group_discounts_data || {});
          if (!this.group_discount_field) {
            const $parent = $(`
            <div class="pos-list-row group_discount-area" style="display: none;">
              <div class="cell text-right">${__("Group Discount")}</div>
              <div class="cell price-cell group_discount" style="padding-left: 24px;"/>
            </div>
            `).insertAfter(this.pos_bill.find(".net-total-area")).find(".group_discount");
            this.group_discount_field = new frappe.ui.form.ControlAutocomplete({
              parent: $parent,
              df: { options: group_discounts }
            });
            this.group_discount_field.toggle_label(false);
            this.group_discount_field.refresh();
            this.group_discount_field.$input.on("change", () => {
              const discounts_by_brand = this.group_discounts_data[this.group_discount_field.get_value()] || {};
              this.frm.doc.items.forEach(({ item_code, brand }) => {
                const discount_rate = discounts_by_brand[brand] || 0;
                this.update_discount(item_code, discount_rate);
              });
            });
          } else {
            this.group_discount_field.set_data(group_discounts);
          }
        }
      }
      bind_keyboard_shortcuts() {
        $(document).on("keydown", (e) => {
          if (frappe.get_route_str() === "pos") {
            if (this.numeric_keypad && e.keyCode === 120) {
              e.preventDefault();
              e.stopPropagation();
              if (this.dialog && this.dialog.is_visible) {
                this.dialog.hide();
              } else {
                $(this.numeric_keypad).find(".pos-pay").trigger("click");
              }
            } else if (this.frm.doc.docstatus == 1 && e.ctrlKey && e.keyCode === 80) {
              e.preventDefault();
              e.stopPropagation();
              if (this.msgprint) {
                this.msgprint.msg_area.find(".print_doc").click();
              } else {
                this.page.btn_secondary.trigger("click");
              }
            } else if (e.ctrlKey && e.keyCode === 66) {
              e.preventDefault();
              e.stopPropagation();
              if (this.msgprint) {
                this.msgprint.msg_area.find(".new_doc").click();
              } else {
                this.page.btn_primary.trigger("click");
              }
            }
          }
        });
      }
      async set_opening_entry() {
        const { company, os_branch: branch } = this.doc;
        const { name: pos_profile } = this.pos_profile_data;
        const { message: xreport } = await frappe.call({
          method: "optic_store.api.xz_report.get_unclosed",
          args: { user: frappe.session.user, pos_profile, company, branch }
        });
        if (xreport) {
          this.xreport = xreport;
        } else {
          const dialog = new frappe.ui.Dialog({
            title: __("Enter Opening Cash"),
            fields: [
              {
                fieldtype: "Datetime",
                fieldname: "start_time",
                label: __("Start Datetime"),
                default: frappe.datetime.now_datetime()
              },
              { fieldtype: "Column Break" },
              {
                fieldtype: "Currency",
                fieldname: "opening_cash",
                label: __("Amount")
              }
            ]
          });
          dialog.show();
          dialog.get_close_btn().hide();
          dialog.set_primary_action("Enter", async function() {
            try {
              const { start_time, opening_cash } = dialog.get_values();
              const { message: xreport2 } = await frappe.call({
                method: "optic_store.api.xz_report.create_opening",
                args: { start_time, opening_cash, company, pos_profile }
              });
              if (!xreport2) {
                throw new Error();
              }
              this.xreport = xreport2;
            } catch (e) {
              frappe.msgprint({
                message: __("Unable to create XZ Report opening entry."),
                title: __("Warning"),
                indicator: "orange"
              });
            } finally {
              dialog.hide();
              dialog.$wrapper.remove();
            }
          }.bind(this));
        }
      }
      make_payment() {
        if (this.dialog) {
          this.dialog.$wrapper.remove();
        }
        super.make_payment();
        [".change_amount", ".write_off_amount"].forEach((q) => {
          this.dialog.$body.find(q).parent().addClass("hidden");
        });
      }
      show_payment_details() {
        const multimode_payments = $(this.$body).find(".multimode-payments").html(`
        <ul class="nav nav-tabs" role="tablist">
          <li role="presentation" class="active">
            <a role="tab" data-toggle="tab" data-target="#multimode_loc">${__("Base")}</a>
          </li>
          <li role="presentation">
            <a role="tab" data-toggle="tab" data-target="#multimode_alt">${__("Alternate")}</a>
          </li>
        </ul>
        <div class="tab-content">
          <div role="tabpanel" class="tab-pane active" id="multimode_loc" />
          <div role="tabpanel" class="tab-pane" id="multimode_alt" />
        </div>
      `);
        const multimode_loc = multimode_payments.find("#multimode_loc");
        const multimode_alt = multimode_payments.find("#multimode_alt");
        const is_alt_currency = (mop) => (this.doc.payments.find(({ mode_of_payment }) => mode_of_payment === mop) || {
          os_in_alt_tab: 0
        }).os_in_alt_tab;
        const { currency } = this.frm.doc;
        if (this.frm.doc.payments.length) {
          this.frm.doc.payments.forEach(({ mode_of_payment, amount, idx, type, os_in_alt_tab }) => {
            $(frappe.render_template("payment_details", {
              mode_of_payment,
              amount,
              idx,
              currency,
              type
            })).appendTo(is_alt_currency(mode_of_payment) ? multimode_alt : multimode_loc);
            if (type === "Cash" && amount === this.frm.doc.paid_amount) {
              this.idx = idx;
              this.selected_mode = $(this.$body).find(`input[idx='${this.idx}']`);
              this.highlight_selected_row();
              this.bind_amount_change_event();
            }
          });
        } else {
          $("<p>No payment mode selected in pos profile</p>").appendTo(multimode_payments);
        }
      }
      set_payment_primary_action() {
        this.dialog.set_primary_action(__("Submit"), () => {
          if ((0, import_sumBy5.default)(this.frm.doc.payments, "amount") !== this.frm.doc.grand_total) {
            return frappe.throw(__("<strong>Paid Amount</strong> must be equal to <strong>Total Amount</strong>"));
          }
          this.dialog.hide();
          this.submit_invoice();
        });
      }
      add_more_payment_options() {
        this.os_payment_fg = new frappe.ui.FieldGroup({
          parent: $('<div style="margin: 0 15px;" />').insertAfter($(this.$body).find(".pos_payment .amount-row")),
          fields: [
            {
              fieldtype: "Section Break",
              label: __("Other Payments"),
              collapsible: 1
            },
            {
              fieldtype: "Column Break",
              label: __("Gift Card")
            },
            {
              fieldname: "gift_card_no",
              fieldtype: "Data",
              label: __("Enter Gift Card No")
            },
            {
              fieldname: "gift_card_balance",
              fieldtype: "Currency",
              label: __("Gift Card Balance"),
              read_only: 1,
              depends_on: "gift_card_no"
            },
            {
              fieldtype: "Column Break",
              label: __("Loyalty Program")
            },
            {
              fieldname: "loyalty_card_no",
              fieldtype: "Data",
              label: __("Enter Loyalty Card No")
            },
            {
              fieldname: "loyalty_points_available",
              fieldtype: "Int",
              label: __("Available Loyalty Points"),
              read_only: 1,
              depends_on: "loyalty_card_no"
            },
            {
              fieldname: "loyalty_points_redeem",
              fieldtype: "Int",
              label: __("Points to Redeem"),
              depends_on: "loyalty_card_no"
            },
            {
              fieldname: "loyalty_amount_redeem",
              fieldtype: "Currency",
              label: __("Amount to Redeem"),
              read_only: 1,
              depends_on: "loyalty_card_no"
            }
          ]
        });
        this.os_payment_fg.make();
        const gift_card_field = this.os_payment_fg.get_field("gift_card_no");
        const set_gift_card_desc = set_description(gift_card_field);
        gift_card_field.$input.off("change");
        gift_card_field.$input.on("change", () => {
          const gift_card_no = gift_card_field.get_value();
          const details = this.gift_cards_data[gift_card_no];
          if (!details) {
            set_gift_card_desc(__("Unable to find Gift Card"));
          } else {
            const { name: gift_card, balance } = details;
            if (!balance) {
              set_gift_card_desc(__("Gift Card balance is depleted"));
            } else {
              set_gift_card_desc("");
              this.os_payment_fg.set_value("gift_card_balance", balance);
              this.frm.doc.os_gift_cards = [{ gift_card, balance }];
            }
          }
        });
        const loyalty_card_field = this.os_payment_fg.get_field("loyalty_card_no");
        const set_loyalty_card_desc = set_description(loyalty_card_field);
        loyalty_card_field.$input.off("change");
        loyalty_card_field.$input.on("change", () => {
          const loyalty_card_no = loyalty_card_field.get_value();
          const {
            os_loyalty_card_no: customer_card_no,
            loyalty_program: customer_loyalty_program,
            loyalty_points: customer_loyalty_points
          } = this.customers_details_data[this.frm.doc.customer] || {};
          const { name: loyalty_program, conversion_rate } = this.loyalty_programs_data[customer_loyalty_program] || {};
          if (!loyalty_program) {
            set_loyalty_card_desc(__("Loyalty Program not found"));
          } else if (loyalty_program !== customer_loyalty_program) {
            set_loyalty_card_desc(__("Customer is not under this Loyalty Program"));
          } else if (loyalty_card_no !== customer_card_no) {
            set_loyalty_card_desc(__("The Loyalty Card does not belong to this Customer"));
          } else {
            set_loyalty_card_desc("");
            this.os_payment_fg.set_value("loyalty_points_available", customer_loyalty_points);
          }
        });
        const loyalty_points_field = this.os_payment_fg.get_field("loyalty_points_redeem");
        loyalty_points_field.$input.off("change");
        loyalty_points_field.$input.on("change", () => {
          const loyalty_points = loyalty_points_field.get_value();
          const { loyalty_points: customer_loyalty_points = 0, loyalty_program } = this.customers_details_data[this.frm.doc.customer] || {};
          const { conversion_factor = 0 } = this.loyalty_programs_data[loyalty_program] || {};
          const { grand_total } = this.frm.doc;
          const allowed_amount = Math.min(flt(customer_loyalty_points) * conversion_factor, grand_total);
          const loyalty_amount = loyalty_points > allowed_amount ? 0 : flt(loyalty_points) * conversion_factor;
          this.os_payment_fg.set_value("loyalty_amount_redeem", loyalty_amount);
          if (loyalty_points > allowed_amount) {
            loyalty_points_field.$input.val(0);
            return frappe.throw(__(`Cannot redeem more than ${format_currency(allowed_amount, this.frm.doc.currency)}`));
          }
          this.frm.doc = Object.assign(this.frm.doc, {
            redeem_loyalty_points: 1,
            os_loyalty_card_no: this.os_payment_fg.get_value("loyalty_card_no"),
            loyalty_program,
            loyalty_points,
            loyalty_amount
          });
          this.selected_mode.val(grand_total - loyalty_amount);
          this.update_payment_amount();
        });
      }
    }
    return PosClassExtended;
  }

  // ../optic_store/optic_store/public/js/reports/index.js
  var reports_exports = {};
  __export(reports_exports, {
    batch_wise_expiry: () => batch_wise_expiry_default,
    branch_stock: () => branch_stock_default,
    branch_wise_achieved_sales: () => branch_wise_achieved_sales,
    customer_old_sales: () => customer_old_sales_default,
    daily_sales_summary: () => daily_sales_summary_default,
    item_sell_out_history: () => item_sell_out_history_default,
    item_wise_stock: () => item_wise_stock_default,
    loyalty_card_activation: () => loyalty_card_activation,
    loyalty_point_expiry: () => loyalty_point_expiry_default,
    loyalty_point_ledger: () => loyalty_point_ledger,
    payment_summary: () => payment_summary_default,
    salary_report_for_bank: () => salary_report_for_bank_default,
    sales_order_workflow: () => sales_order_workflow_default,
    sales_summary_by_product: () => sales_summary_by_product_default,
    simple_stock_balance: () => simple_stock_balance_default,
    stock_ledger_2: () => stock_ledger_2,
    stock_movement_analysis: () => stock_movement_analysis_default,
    stock_transfer: () => stock_transfer_default2,
    utils: () => fields_exports
  });

  // ../optic_store/optic_store/public/js/reports/fields.js
  var fields_exports = {};
  __export(fields_exports, {
    make_check: () => make_check,
    make_data: () => make_data,
    make_date: () => make_date,
    make_date_range: () => make_date_range,
    make_link: () => make_link,
    make_multiselect: () => make_multiselect,
    make_select: () => make_select
  });
  var import_startCase = __toESM(require_startCase());
  function make_base(fieldtype = "Data", _a) {
    var _b = _a, { fieldname, label = null } = _b, rest = __objRest(_b, ["fieldname", "label"]);
    return Object.assign({
      fieldtype,
      fieldname,
      label: __(label || (0, import_startCase.default)(fieldname))
    }, rest);
  }
  function make_data(args) {
    return make_base("Data", args);
  }
  function make_date(args) {
    return make_base("Date", args);
  }
  function make_date_range(args) {
    return make_base("DateRange", args);
  }
  function make_check(args) {
    return make_base("Check", args);
  }
  function make_link(args) {
    return make_base("Link", args);
  }
  function make_select(args) {
    return make_base("Select", args);
  }
  function make_multiselect(args) {
    const { fieldname, options } = args;
    return make_base("MultiSelect", Object.assign({
      get_data: function() {
        const values = frappe.query_report.get_filter_value(fieldname) || "";
        const names = values.split(/\s*,\s*/).filter((d) => d);
        const txt = values.match(/[^,\s*]*$/)[0] || "";
        let data = [];
        frappe.call({
          type: "GET",
          method: "frappe.desk.search.search_link",
          async: false,
          no_spinner: true,
          args: { doctype: options, txt, filters: { name: ["not in", names] } },
          callback: function({ results }) {
            data = results;
          }
        });
        return data;
      }
    }, args));
  }

  // ../optic_store/optic_store/public/js/reports/payment_summary.js
  var payment_summary_default = {
    onload: async function(rep) {
      const branches = rep.filters.find(({ fieldname }) => fieldname === "branches");
      if (branches) {
        branches.df.read_only = !frappe.user_roles.includes("Sales Manager");
        branches.refresh();
      }
      const { message: branch } = await frappe.call({
        method: "optic_store.api.customer.get_user_branch"
      });
      rep.set_filter_value("branches", branch);
    },
    filters: [
      make_date({
        fieldname: "start_date",
        reqd: 1,
        default: frappe.datetime.get_today()
      }),
      make_date({
        fieldname: "end_date",
        reqd: 1,
        default: frappe.datetime.get_today()
      }),
      make_multiselect({
        fieldname: "modes_of_payment",
        options: "Mode of Payment"
      }),
      make_multiselect({
        fieldname: "branches",
        options: "Branch"
      }),
      make_check({
        fieldname: "hide_returns"
      })
    ]
  };

  // ../optic_store/optic_store/public/js/reports/item_wise_stock.js
  var item_wise_stock_default = {
    onload: async function(rep) {
      const warehouse = rep.filters.find(({ fieldname }) => fieldname === "warehouse");
      if (warehouse) {
        warehouse.df.read_only = !frappe.user_roles.includes("Sales Manager");
        warehouse.refresh();
      }
      const { message: user_warehouse } = await frappe.call({
        method: "optic_store.api.customer.get_user_warehouse"
      });
      await rep.set_filter_value("warehouse", user_warehouse);
    },
    filters: [
      make_link({
        fieldname: "brand",
        options: "Brand"
      }),
      make_link({
        fieldname: "item_group",
        options: "Item Group"
      }),
      make_link({
        fieldname: "warehouse",
        options: "Warehouse"
      }),
      make_data({ fieldname: "item_name" })
    ]
  };

  // ../optic_store/optic_store/public/js/reports/branch_stock.js
  var branch_stock_default = {
    onload: async function(rep) {
      const hqm_view = rep.filters.find(({ fieldname }) => fieldname === "hqm_view");
      if (hqm_view) {
        const has_role = ["Sales Manager", "Stock Manager", "Account Manager"].some((role) => frappe.user_roles.includes(role));
        hqm_view.df.hidden = !has_role;
        hqm_view.refresh();
        rep.set_filter_value("hqm_view", has_role);
      }
    },
    filters: [
      make_multiselect({ fieldname: "item_groups", options: "Item Group" }),
      make_multiselect({ fieldname: "brands", options: "Brand" }),
      make_multiselect({ fieldname: "item_codes", options: "Item" }),
      make_data({ fieldname: "item_name" }),
      make_check({ fieldname: "hqm_view" })
    ]
  };

  // ../optic_store/optic_store/public/js/reports/simple_stock_balance.js
  var simple_stock_balance_default = {
    onload: async function(rep) {
      const scrap_warehouse = await frappe.db.get_single_value("Optical Store Settings", "scrap_warehouse");
      const filters = [
        ["is_group", "=", "0"],
        scrap_warehouse && ["name", "!=", scrap_warehouse]
      ];
      rep.get_filter("warehouse").get_query = { filters: filters.filter((x) => !!x) };
    },
    filters: [
      make_link({ fieldname: "warehouse", options: "Warehouse" }),
      make_link({ fieldname: "item_group", options: "Item Group" }),
      make_link({ fieldname: "brand", options: "Brand" }),
      make_link({ fieldname: "item_code", options: "Item" }),
      make_data({ fieldname: "item_name" })
    ]
  };

  // ../optic_store/optic_store/public/js/reports/stock_transfer.js
  var stock_transfer_default2 = {
    onload: async function(rep) {
      const branches = rep.filters.find(({ fieldname }) => fieldname === "branches");
      const has_role = ["Accounts Manager"].some((role) => frappe.user_roles.includes(role));
      branches.df.hidden = !has_role;
      branches.refresh();
      rep.set_filter_value({
        from_date: frappe.datetime.month_start(),
        to_date: frappe.datetime.month_end()
      });
    },
    filters: [
      make_date({ fieldname: "from_date", reqd: 1 }),
      make_date({ fieldname: "to_date", reqd: 1 }),
      make_multiselect({ fieldname: "branches", hidden: 1, options: "Branch" }),
      make_check({ fieldname: "show_all" })
    ]
  };

  // ../optic_store/optic_store/public/js/reports/sales_summary_by_product.js
  var sales_summary_by_product_default = {
    onload: async function(rep) {
      await rep.set_filter_value({
        from_date: frappe.datetime.month_start(),
        to_date: frappe.datetime.month_end()
      });
    },
    filters: [
      make_date({ fieldname: "from_date", reqd: 1 }),
      make_date({ fieldname: "to_date", reqd: 1 }),
      make_multiselect({ fieldname: "branches", options: "Branch" }),
      make_select({
        fieldname: "report_type",
        reqd: 1,
        options: ["Achieved", "Collected"]
      })
    ]
  };

  // ../optic_store/optic_store/public/js/reports/item_sell_out_history.js
  var item_sell_out_history_default = {
    onload: async function(rep) {
      rep.set_filter_value({
        from_date: frappe.datetime.month_start(),
        to_date: frappe.datetime.month_end()
      });
    },
    filters: [
      make_date({ fieldname: "from_date", reqd: 1 }),
      make_date({ fieldname: "to_date", reqd: 1 }),
      make_multiselect({ fieldname: "branches", options: "Branch" }),
      make_link({ fieldname: "brand", options: "Brand" }),
      make_link({ fieldname: "item_code", options: "Item" }),
      make_data({ fieldname: "item_name" }),
      make_link({ fieldname: "item_group", options: "Item Group" })
    ]
  };

  // ../optic_store/optic_store/public/js/reports/daily_sales_summary.js
  var daily_sales_summary_default = {
    onload: async function(rep) {
      rep.set_filter_value("posting_date", frappe.datetime.get_today());
      const { message: branch } = await frappe.call({
        method: "optic_store.api.customer.get_user_branch"
      });
      rep.set_filter_value("branch", branch);
    },
    filters: [
      make_date({ fieldname: "posting_date", label: "Date", reqd: 1 }),
      make_multiselect({ fieldname: "branch", options: "Branch" })
    ]
  };

  // ../optic_store/optic_store/public/js/reports/batch_wise_expiry.js
  function batch_wise_expiry_default() {
    return {
      onload: async function(rep) {
        const warehouse_filter = rep.filters.find(({ fieldname }) => fieldname === "warehouse");
        const is_manager = ["Item Manager", "Stock Manager"].some((role) => frappe.user_roles.includes(role));
        if (warehouse_filter && !is_manager) {
          warehouse_filter.df.read_only = !is_manager;
          warehouse_filter.refresh();
          const { message: warehouse } = await frappe.call({
            method: "optic_store.api.customer.get_user_warehouse"
          });
          rep.set_filter_value("warehouse", warehouse);
        }
      },
      filters: [
        make_link({
          fieldname: "company",
          options: "Company",
          reqd: 1,
          default: frappe.defaults.get_user_default("company")
        }),
        make_date({
          fieldname: "query_date",
          options: "Query Date",
          reqd: 1,
          default: frappe.datetime.get_today()
        }),
        make_link({ fieldname: "warehouse", options: "Warehouse" }),
        make_link({ fieldname: "item_group", options: "Item Group" }),
        make_check({ fieldname: "hide_zero_stock" })
      ]
    };
  }

  // ../optic_store/optic_store/public/js/reports/branch_wise_achieved_sales.js
  function branch_wise_achieved_sales() {
    return {
      filters: [
        make_date_range({
          fieldname: "date_range",
          reqd: 1,
          default: [frappe.datetime.month_start(), frappe.datetime.month_end()]
        })
      ]
    };
  }

  // ../optic_store/optic_store/public/js/reports/loyalty_card_activation.js
  function loyalty_card_activation() {
    return {
      filters: [
        make_date_range({
          fieldname: "date_range",
          reqd: 1,
          default: [frappe.datetime.month_start(), frappe.datetime.month_end()]
        }),
        make_select({
          fieldname: "interval",
          options: ["Daily", "Weekly", "Monthly", "Yearly"],
          default: "Daily"
        }),
        make_multiselect({ fieldname: "branches", options: "Branch" })
      ]
    };
  }

  // ../optic_store/optic_store/public/js/reports/stock_ledger_2.js
  function stock_ledger_2() {
    return {
      filters: [
        make_link({
          fieldname: "company",
          options: "Company",
          default: frappe.defaults.get_user_default("Company"),
          reqd: 1
        }),
        make_date({
          fieldname: "from_date",
          default: frappe.datetime.add_months(frappe.datetime.get_today(), -1),
          reqd: 1
        }),
        make_date({
          fieldname: "to_date",
          default: frappe.datetime.get_today(),
          reqd: 1
        }),
        make_link({ fieldname: "warehouse", options: "Warehouse" }),
        make_link({
          fieldname: "item_code",
          options: "Item",
          get_query: function() {
            return {
              query: "erpnext.controllers.queries.item_query"
            };
          }
        }),
        make_link({ fieldname: "item_group", options: "Item Group" }),
        make_link({ fieldname: "batch_no", options: "Batch" }),
        make_link({ fieldname: "brand", options: "Brand" }),
        make_data({ fieldname: "voucher_no", label: __("Voucher #") }),
        make_link({ fieldname: "project", options: "Project" })
      ]
    };
  }

  // ../optic_store/optic_store/public/js/reports/loyalty_point_ledger.js
  function loyalty_point_ledger() {
    return {
      filters: [
        make_date_range({
          fieldname: "date_range",
          reqd: 1,
          default: [frappe.datetime.month_start(), frappe.datetime.month_end()]
        }),
        make_link({ fieldname: "customer", options: "Customer" }),
        make_link({ fieldname: "loyalty_program", options: "Loyalty Program" })
      ]
    };
  }

  // ../optic_store/optic_store/public/js/reports/loyalty_point_expiry.js
  function loyalty_point_expiry_default() {
    return {
      filters: [
        make_date({
          fieldname: "expiry_date",
          options: "Expiry Date",
          reqd: 1,
          default: frappe.datetime.get_today()
        })
      ]
    };
  }

  // ../optic_store/optic_store/public/js/reports/stock_movement_analysis.js
  function stock_movement_analysis_default() {
    return {
      filters: [
        make_link({
          fieldname: "item_group",
          options: "Item Group"
        }),
        make_link({
          fieldname: "brand",
          options: "Brand"
        }),
        make_link({
          fieldname: "item_code",
          options: "Item"
        }),
        make_data({ fieldname: "item_name" }),
        make_date({
          fieldname: "query_date",
          options: "Expiry Date",
          reqd: 1,
          default: frappe.datetime.get_today()
        }),
        make_select({
          fieldname: "period",
          options: ["Monthly", "Yearly"],
          reqd: 1,
          default: "Monthly"
        })
      ]
    };
  }

  // ../optic_store/optic_store/public/js/reports/salary_report_for_bank.js
  function salary_report_for_bank_default() {
    return {
      filters: [
        make_date({
          fieldname: "start_date",
          options: "Start Date",
          reqd: 1,
          default: frappe.datetime.month_start()
        }),
        make_select({
          fieldname: "report_type",
          reqd: 1,
          options: ["Type 1", "Type 2"],
          default: "Type 1"
        }),
        make_select({
          fieldname: "status",
          reqd: 1,
          options: ["Draft", "Submitted"],
          default: "Submitted"
        })
      ]
    };
  }

  // ../optic_store/optic_store/public/js/reports/customer_old_sales.js
  function customer_old_sales_default() {
    return {
      filters: [make_link({ fieldname: "customer", options: "Customer" })]
    };
  }

  // ../optic_store/optic_store/public/js/reports/sales_order_workflow.js
  function sales_order_workflow_default() {
    return {
      filters: [
        make_date_range({
          fieldname: "date_range",
          reqd: 1,
          default: [frappe.datetime.month_start(), frappe.datetime.month_end()]
        }),
        make_link({ fieldname: "branch", options: "Branch" }),
        make_check({ fieldname: "show_collected" })
      ]
    };
  }

  // ../optic_store/optic_store/public/js/addons/index.js
  var addons_exports = {};
  __export(addons_exports, {
    extend_cart: () => extend_cart,
    extend_items: () => extend_items,
    extend_payment: () => extend_payment,
    extend_pos: () => extend_pos2
  });
  var import_flowRight = __toESM(require_flowRight());

  // ../optic_store/optic_store/public/js/addons/withXzReport.js
  function withXzReport(Pos) {
    const isClass = Pos instanceof Function || Pos instanceof Class;
    if (!isClass) {
      return Pos;
    }
    return class PosWithXzReport extends Pos {
      set_pos_profile_data() {
        return super.set_pos_profile_data().then(this._get_xz_report.bind(this));
      }
      prepare_menu() {
        super.prepare_menu();
        this.page.menu.find(`a.grey-link:contains("${__("Close the POS")}")`).parent().hide();
        this.page.add_menu_item("XZ Report", async function() {
          const xz_report = await this._get_xz_report();
          frappe.set_route("Form", "XZ Report", xz_report);
        }.bind(this));
      }
      async _get_xz_report() {
        const { company, pos_profile } = this.frm.doc;
        const { message: xz_report } = await frappe.call({
          method: "optic_store.api.xz_report.get_unclosed",
          args: { user: frappe.session.user, pos_profile, company }
        });
        if (xz_report) {
          return xz_report;
        }
        const dialog = new frappe.ui.Dialog({
          title: __("Enter Opening Cash"),
          fields: [
            {
              fieldtype: "Datetime",
              fieldname: "start_time",
              label: __("Start Datetime"),
              default: frappe.datetime.now_datetime()
            },
            { fieldtype: "Column Break" },
            {
              fieldtype: "Currency",
              fieldname: "opening_cash",
              label: __("Amount")
            }
          ]
        });
        dialog.get_close_btn().hide();
        dialog.show();
        return new Promise((resolve, reject) => {
          dialog.set_primary_action("Enter", async function() {
            try {
              const { start_time, opening_cash } = dialog.get_values();
              const { message: xz_report2 } = await frappe.call({
                method: "optic_store.api.xz_report.create_opening",
                args: { start_time, opening_cash, company, pos_profile }
              });
              if (!xz_report2) {
                throw new Error(__("Unable to create XZ Report opening entry."));
              }
              resolve(xz_report2);
            } catch (e) {
              frappe.msgprint({
                message: e.message,
                title: __("Warning"),
                indicator: "orange"
              });
              reject(e);
            } finally {
              dialog.hide();
              dialog.$wrapper.remove();
            }
          }.bind(this));
        });
      }
    };
  }

  // ../optic_store/optic_store/public/js/addons/withSalesPerson.js
  function withSalesPerson(Cart) {
    const isClass = Cart instanceof Function || Cart instanceof Class;
    if (!isClass) {
      return Cart;
    }
    return class CartWithSalesPerson extends Cart {
      make() {
        super.make();
        this._make_sale_sperson_fields();
      }
      make_dom() {
        super.make_dom();
        this.wrapper.find(".cart-wrapper").after(`
        <div class="sales_person-area">
          <div class="sales_person-field" />
          <div class="sales_person_name-field" />
        </div>
      `);
      }
      reset() {
        super.reset();
        this.sales_person_field.set_value(this.frm.doc.os_sales_person);
      }
      async _make_sale_sperson_fields() {
        const sales_person_department = await frappe.db.get_single_value("Optical Store Settings", "sales_person_department");
        async function get_employee_name(employee) {
          if (!employee) {
            return null;
          }
          const {
            message: { employee_name }
          } = await frappe.db.get_value("Employee", employee, "employee_name");
          return employee_name;
        }
        this.wrapper.find(".sales_person-area").css({ "margin-bottom": "10px" });
        const sales_person_field = this.wrapper.find(".sales_person-area > .sales_person-field");
        const sales_person_name_field = this.wrapper.find(".sales_person-area > .sales_person_name-field").css({ padding: "4px", "font-style": "italic" });
        this.sales_person_field = frappe.ui.form.make_control({
          df: {
            fieldtype: "Link",
            label: "Sales Person",
            fieldname: "sales_person",
            options: "Employee",
            reqd: 1,
            get_query: function() {
              return { filters: [["department", "=", sales_person_department]] };
            },
            onchange: async function() {
              const sales_person = this.sales_person_field.get_value();
              const sales_person_name = await get_employee_name(sales_person);
              this.frm.set_value({
                os_sales_person: sales_person,
                os_sales_person_name: sales_person_name
              });
              sales_person_name_field.empty().text(sales_person_name || "");
            }.bind(this)
          },
          parent: sales_person_field,
          render_input: true
        });
        this.sales_person_field.set_value(this.frm.doc.os_sales_person);
        sales_person_field.find(".frappe-control").css({ "margin-bottom": 0 });
        sales_person_field.find(".form-group").css({ "margin-bottom": 0 });
        sales_person_field.find(".help-box").css({ display: "none" });
      }
    };
  }
  function paymentWithSalesPerson(Payment) {
    const isClass = Payment instanceof Function || Payment instanceof Class;
    if (!isClass) {
      return Payment;
    }
    return class PaymentWithSalesPerson extends Payment {
      open_modal() {
        if (!this.frm.doc.os_sales_person) {
          frappe.throw(__("Sales Person is mandatory"));
        }
        super.open_modal();
      }
    };
  }

  // ../optic_store/optic_store/public/js/addons/withItemRates.js
  function withItemRates(Items) {
    const isClass = Items instanceof Function || Items instanceof Class;
    if (!isClass) {
      return Items;
    }
    return class ItemsWithItemRates extends Items {
      get_item_html(item) {
        const {
          item_code,
          os_minimum_selling_rate: ms1 = 0,
          os_minimum_selling_2_rate: ms2 = 0
        } = item;
        const $template = $("<div />").append(super.get_item_html(item));
        if (ms1 || ms2) {
          $(`<span>
          <div>MS1: ${format_currency(ms1, this.frm.doc.currency)}</div>
          <div>MS2: ${format_currency(ms2, this.frm.doc.currency)}</div>
          </span>`).css({
            position: "absolute",
            left: "0",
            top: "0",
            padding: "5px 9px",
            "background-color": "rgba(141, 153, 166, 0.6)",
            color: "#fff",
            "border-radius": "3px",
            "font-size": "0.75em"
          }).appendTo($template.find(`a[data-item-code="${item_code}"] > div.image-field`));
        }
        return $template.html();
      }
    };
  }

  // ../optic_store/optic_store/public/js/addons/withPaymentValidation.js
  var import_sumBy6 = __toESM(require_sumBy());
  function withPaymentValidation(Payment) {
    const isClass = Payment instanceof Function || Payment instanceof Class;
    if (!isClass) {
      return Payment;
    }
    return class PaymentWithPaymentValidation extends Payment {
      set_primary_action() {
        this.dialog.set_primary_action(__("Submit"), async function() {
          try {
            await this.validate();
            this.dialog.hide();
            this.events.submit_form();
          } catch (e) {
            frappe.throw(e);
          }
        }.bind(this));
      }
      validate() {
      }
    };
  }

  // ../optic_store/optic_store/public/js/addons/withAmountValidation.js
  var import_sumBy7 = __toESM(require_sumBy());
  function withAmountValidation(Payment) {
    const isClass = Payment instanceof Function || Payment instanceof Class;
    if (!isClass) {
      return Payment;
    }
    return class PaymentWithAmountValidation extends Payment {
      validate() {
        const {
          outstanding_amount = 0,
          write_off_amount = 0,
          change_amount = 0
        } = this.frm.doc;
        if (outstanding_amount > 0 || write_off_amount > 0 || change_amount > 0) {
          frappe.throw(__("<strong>Paid Amount</strong> must be exactly equal to the amount due"));
        }
        return super.validate();
      }
    };
  }

  // ../optic_store/optic_store/public/js/addons/withFieldsHidden.js
  var import_sumBy8 = __toESM(require_sumBy());
  function withFieldsHidden(Payment) {
    const isClass = Payment instanceof Function || Payment instanceof Class;
    if (!isClass) {
      return Payment;
    }
    return class PaymentWithFieldsHidden extends Payment {
      get_fields() {
        const fields = super.get_fields();
        const section_idx = fields.findIndex(({ fieldname }) => fieldname === "write_off_amount") - 1;
        return fields.map((x, i) => i === section_idx ? Object.assign(x, { hidden: 1 }) : x);
      }
    };
  }

  // ../optic_store/optic_store/public/js/addons/withTabbedMops.js
  function seg_mops(payments, alt_tab_val) {
    return payments.filter(({ os_in_alt_tab }) => os_in_alt_tab === alt_tab_val).map(({ mode_of_payment }) => mode_of_payment);
  }
  function withTabbedMops(Payment) {
    const isClass = Payment instanceof Function || Payment instanceof Class;
    if (!isClass) {
      return Payment;
    }
    return class PaymentWithTabbedMops extends Payment {
      make() {
        this.tabs = {
          base: seg_mops(this.frm.doc.payments, 0),
          alt: seg_mops(this.frm.doc.payments, 1)
        };
        super.make();
        const $toggle_mops = $(`
        <ul class="nav nav-tabs" role="tablist">
          <li role="presentation" class="active">
            <a class="toggle-base" role="tab" data-toggle="tab">${__("Base")}</a>
          </li>
          <li role="presentation">
            <a class="toggle-alt" role="tab" data-toggle="tab">${__("Alternate")}</a>
          </li>
        </ul>
      `).appendTo(this.dialog.get_field("toggle_mops").$wrapper);
        $toggle_mops.click("on", (e) => {
          Object.keys(this.tabs).forEach((tab) => {
            this.tabs[tab].forEach((mop) => {
              this.dialog.set_df_property(mop, "hidden", !$(e.target).hasClass(`toggle-${tab}`));
            });
          });
        });
      }
      get_fields() {
        const fields = super.get_fields();
        return [
          { fieldtype: "HTML", fieldname: "toggle_mops" },
          ...fields.map((x) => this.tabs.alt.includes(x.fieldname) ? Object.assign(x, { hidden: 1 }) : x)
        ];
      }
    };
  }

  // ../optic_store/optic_store/public/js/addons/withKeyboardShortcuts.js
  function withKeyboardShortcuts(Pos) {
    const isClass = Pos instanceof Function || Pos instanceof Class;
    if (!isClass) {
      return Pos;
    }
    return class PosWithKeyboardShortcuts extends Pos {
      make() {
        $(document).on("keydown", (e) => {
          if (frappe.get_route_str() === "point-of-sale") {
            if (this.cart && e.keyCode === 120) {
              e.preventDefault();
              this.cart.events.on_numpad(__("Pay"));
            } else if (e.ctrlKey && e.keyCode === 80) {
              e.preventDefault();
              if (this.frm.doc.docstatus === 1) {
                if (this.frm.msgbox && this.frm.msgbox.is_visible) {
                  this.frm.msgbox.hide();
                }
                this.frm.print_preview.printit();
              }
            } else if (e.ctrlKey && e.keyCode === 66) {
              e.preventDefault();
              if (this.frm.msgbox && this.frm.msgbox.is_visible) {
                this.frm.msgbox.hide();
              }
              this.make_new_invoice();
            }
          }
        });
        return super.make();
      }
    };
  }

  // ../optic_store/optic_store/public/js/addons/withGroupDiscount.js
  function withGroupDiscount(Cart) {
    const isClass = Cart instanceof Function || Cart instanceof Class;
    if (!isClass) {
      return Cart;
    }
    return class CartWithGroupDiscount extends Cart {
      make() {
        super.make();
        this._make_group_discount_field();
      }
      make_dom() {
        super.make_dom();
        $(`
        <div class="group_discount">
          <div class="list-item">
          <div class="list-item__content list-item__content--flex-2 text-muted">${__("Group Discount")}</div>
          <div class="list-item__content group_discount-field" />
          </div>
        </div>
      `).insertAfter(this.wrapper.find(".cart-wrapper .taxes-and-totals")).hide();
      }
      reset() {
        super.reset();
        this.group_discount_field.set_value(this.frm.doc.orx_group_discount);
      }
      _make_group_discount_field() {
        this.group_discount_field = frappe.ui.form.make_control({
          df: {
            fieldtype: "Link",
            fieldname: "group_discount",
            only_select: 1,
            options: "Group Discount",
            onchange: async function(e) {
              await this.frm.set_value("orx_group_discount", this.group_discount_field.get_value());
              await apply_group_discount(this.frm);
              this.frm.doc.items.forEach(this.update_item.bind(this));
              this.update_taxes_and_totals();
              this.update_grand_total();
            }.bind(this)
          },
          parent: this.wrapper.find(".group_discount-field"),
          render_input: true
        });
        this.group_discount_field.$wrapper.css("margin-bottom", "0");
        this.group_discount_field.$wrapper.find(".control-label").hide();
      }
      toggle_taxes_and_totals(flag) {
        super.toggle_taxes_and_totals(flag);
        this.wrapper.find(".group_discount").toggle(this.tax_area_is_shown);
      }
    };
  }

  // ../optic_store/optic_store/public/js/addons/withGiftCard.js
  var import_sumBy9 = __toESM(require_sumBy());
  function withGiftCard(Payment) {
    const isClass = Payment instanceof Function || Payment instanceof Class;
    if (!isClass) {
      return Payment;
    }
    return class PaymentWithGiftCard extends Payment {
      get_fields() {
        const fields = super.get_fields();
        const slice_idx = fields.findIndex(({ fieldname }) => fieldname === "numpad") + 1;
        return [
          ...fields.slice(0, slice_idx),
          {
            fieldtype: "Section Break",
            label: __("Gift Card"),
            collapsible: 1,
            collapsible_depends_on: "gift_card_no"
          },
          {
            fieldname: "gift_card_no",
            fieldtype: "Data",
            label: __("Enter Gift Card No"),
            onchange: this._set_gift_card_amounts.bind(this)
          },
          {
            fieldtype: "Column Break"
          },
          {
            fieldname: "gift_card_balance",
            fieldtype: "Currency",
            label: __("Gift Card Balance"),
            read_only: 1
          },
          ...fields.slice(slice_idx)
        ];
      }
      async _set_gift_card_amounts() {
        this.frm.clear_table("os_gift_cards");
        const { message } = await set_gift_card(this.frm, this.dialog.get_value("gift_card_no"));
        this.dialog.set_value("gift_card_balance", (0, import_sumBy9.default)(this.frm.doc.os_gift_cards, "balance"));
        this.dialog.get_field("gift_card_no").set_description(message);
      }
    };
  }

  // ../optic_store/optic_store/public/js/addons/withCashback.js
  var import_sumBy10 = __toESM(require_sumBy());
  function withCashback(Payment) {
    const isClass = Payment instanceof Function || Payment instanceof Class;
    if (!isClass) {
      return Payment;
    }
    return class PaymentWithCashback extends Payment {
      get_fields() {
        const fields = super.get_fields();
        const slice_idx = fields.findIndex(({ fieldname }) => fieldname === "redeem_loyalty_points") - 1;
        return [
          ...fields.slice(0, slice_idx),
          {
            fieldtype: "Section Break",
            label: __("Cashback"),
            collapsible: 1,
            collapsible_depends_on: "cashback_receipt"
          },
          {
            label: __("Enter Cashback Receipt No"),
            fieldname: "cashback_receipt",
            fieldtype: "Link",
            options: "Cashback Receipt",
            get_query: () => ({
              filters: [
                ["balance_amount", ">", 0],
                ["expiry_date", ">=", frappe.datetime.get_today()]
              ]
            }),
            onchange: this._set_cashback_amounts.bind(this)
          },
          {
            fieldtype: "Column Break"
          },
          {
            fieldname: "cashback_available",
            fieldtype: "Currency",
            label: __("Cashback Available"),
            read_only: 1
          },
          ...fields.slice(slice_idx)
        ];
      }
      async _set_cashback_amounts() {
        const cashback_receipt = this.dialog.get_value("cashback_receipt");
        if (cashback_receipt) {
          const {
            message: { balance_amount: cashback_available = 0 } = {}
          } = await frappe.db.get_value("Cashback Receipt", cashback_receipt, "balance_amount");
          this.dialog.set_values({ cashback_available });
        } else {
          this.dialog.set_values({ cashback_available: null });
        }
        this.frm.set_value("os_cashback_receipt", cashback_receipt);
      }
    };
  }

  // ../optic_store/optic_store/public/js/addons/withLoyaltyCard.js
  function withLoyaltyCard(Payment) {
    const isClass = Payment instanceof Function || Payment instanceof Class;
    if (!isClass) {
      return Payment;
    }
    return class PaymentWithLoyaltyCard extends Payment {
      get_fields() {
        const fields = super.get_fields();
        const slice_idx = fields.findIndex(({ fieldname }) => fieldname === "redeem_loyalty_points");
        const get_field_overrides = (field, idx) => {
          if (idx === slice_idx - 1) {
            return {
              label: "Loyalty Program",
              collapsible: 1,
              collapsible_depends_on: "redeem_loyalty_points"
            };
          }
          const { fieldname } = field;
          if (fieldname === "redeem_loyalty_points") {
            const { onchange } = field;
            return {
              onchange: async function(e) {
                const redeem_loyalty_points = cint(this.dialog.get_value("redeem_loyalty_points"));
                if (!cint(redeem_loyalty_points)) {
                  await Promise.all([
                    this.frm.set_value("loyalty_points", 0),
                    this.dialog.set_value("loyalty_points", 0)
                  ]);
                }
                onchange(e);
                this.dialog.set_df_property("loyalty_card_no", "reqd", redeem_loyalty_points);
              }.bind(this)
            };
          }
          if (fieldname === "loyalty_points") {
            return { read_only: 1 };
          }
          return {};
        };
        return [
          ...fields.slice(0, slice_idx + 1),
          {
            fieldname: "loyalty_card_no",
            fieldtype: "Data",
            label: __("Enter Loyalty Card No"),
            depends_on: "redeem_loyalty_points",
            onchange: this._set_loyalty_card_no.bind(this)
          },
          ...fields.slice(slice_idx + 1)
        ].map((x, idx) => Object.assign(x, get_field_overrides(x, idx)));
      }
      async _set_loyalty_card_no() {
        const loyalty_card_no = this.dialog.get_value("loyalty_card_no");
        if (loyalty_card_no) {
          try {
            await this._validate_loyalty_card_no();
          } catch (e) {
            this.frm.set_value("os_loyalty_card_no", null);
            this.frm.set_value("loyalty_points", 0);
            this.dialog.set_df_property("loyalty_points", "read_only", 1);
            frappe.throw(e.message);
          }
        }
        this.frm.set_value("os_loyalty_card_no", loyalty_card_no);
        this.dialog.set_df_property("loyalty_points", "read_only", !loyalty_card_no);
      }
      async _validate_loyalty_card_no() {
        const { customer, posting_date: expiry_date, company } = this.frm.doc;
        const loyalty_card_no = this.dialog.get_value("loyalty_card_no");
        return frappe.call({
          method: "optic_store.api.loyalty_program.get_customer_loyalty_details",
          args: { customer, loyalty_card_no, expiry_date, company }
        });
      }
      async _validate_loyalty() {
        const { loyalty_points = 0 } = this.frm.doc;
        return frappe.call({
          method: "optic_store.api.sales_invoice.validate_loyalty",
          args: { doc: { loyalty_points } }
        });
      }
      async validate() {
        const { redeem_loyalty_points, loyalty_points = 0 } = this.frm.doc;
        if (cint(redeem_loyalty_points)) {
          await Promise.all([this._validate_loyalty_card_no(), this._validate_loyalty()]);
        }
        return super.validate();
      }
      async update_loyalty_points() {
        const { loyalty_points, loyalty_amount } = this.frm.doc;
        await Promise.all([
          this.dialog.set_value("loyalty_points", loyalty_points),
          this.dialog.set_value("loyalty_amount", loyalty_amount)
        ]);
        this.update_payment_amount();
        this.show_paid_amount();
      }
    };
  }

  // ../optic_store/optic_store/public/js/addons/withBranch.js
  function withBranch(Pos) {
    const isClass = Pos instanceof Function || Pos instanceof Class;
    if (!isClass) {
      return Pos;
    }
    return class PosWithBranch extends Pos {
      async make_sales_invoice_frm() {
        await super.make_sales_invoice_frm();
        const { message: branch } = await frappe.call({
          method: "optic_store.api.customer.get_user_branch"
        });
        this.frm.set_value("os_branch", branch);
      }
    };
  }

  // ../optic_store/optic_store/public/js/addons/withItemListOverride.js
  function withItemListOverride(Items) {
    const isClass = Items instanceof Function || Items instanceof Class;
    if (!isClass) {
      return Items;
    }
    return class ItemsWithItemListOverride extends Items {
      async get_items({
        start = 0,
        page_length = 40,
        search_value = "",
        item_group = this.parent_item_group
      } = {}) {
        const { customer, pos_profile, selling_price_list: price_list } = this.frm.doc;
        const { message } = await frappe.call({
          method: "erpnext.selling.page.point_of_sale.point_of_sale.get_items",
          freeze: true,
          args: {
            start,
            page_length,
            price_list,
            item_group,
            search_value,
            pos_profile,
            customer
          }
        });
        return message;
      }
    };
  }

  // ../optic_store/optic_store/public/js/addons/withRecall.js
  function withRecall(Cart) {
    const isClass = Cart instanceof Function || Cart instanceof Class;
    if (!isClass) {
      return Cart;
    }
    return class CartWithRecall extends Cart {
      make() {
        super.make();
        this._make_recall_fields();
      }
      make_dom() {
        super.make_dom();
        this.wrapper.find(".loyalty-program-field").before(`
        <div class="recall-area">
          <div class="recall-field"></div>
          <div class="recall_months-field"></div>
          <div class="recall_reason-field"></div>
        </div>
      `);
      }
      reset() {
        super.reset();
        ["os_recall", "os_recall_months", "os_recall_reason"].forEach((fieldname) => {
          this.recall_fields[fieldname].set_value(this.frm.doc[fieldname]);
        });
      }
      _make_recall_fields() {
        this.recall_fields = {
          os_recall: frappe.ui.form.make_control({
            df: {
              label: "Recall",
              fieldtype: "Check",
              fieldname: "os_recall",
              onchange: () => {
                const os_recall = this.recall_fields.os_recall.get_value();
                ["os_recall_months", "os_recall_reason"].forEach((fieldname) => {
                  this.recall_fields[fieldname].df.hidden = os_recall ? 0 : 1;
                  this.recall_fields[fieldname].refresh();
                });
                this.frm.set_value({ os_recall });
              }
            },
            parent: this.wrapper.find(".recall-area > .recall-field"),
            render_input: true
          }),
          os_recall_months: frappe.ui.form.make_control({
            df: {
              fieldname: "os_recall_months",
              fieldtype: "Int",
              label: "Recall Months",
              hidden: 1,
              onchange: () => {
                const os_recall_months = this.recall_fields.os_recall_months.get_value();
                this.frm.set_value({ os_recall_months });
              }
            },
            parent: this.wrapper.find(".recall-area > .recall_months-field"),
            render_input: true
          }),
          os_recall_reason: frappe.ui.form.make_control({
            df: {
              fieldname: "os_recall_reason",
              fieldtype: "Data",
              label: "Recall Reason",
              hidden: 1,
              onchange: () => {
                const os_recall_reason = this.recall_fields.os_recall_reason.get_value();
                this.frm.set_value({ os_recall_reason });
              }
            },
            parent: this.wrapper.find(".recall-area > .recall_reason-field"),
            render_input: true
          })
        };
      }
    };
  }

  // ../optic_store/optic_store/public/js/addons/index.js
  var extend_pos2 = (0, import_flowRight.default)([withKeyboardShortcuts, withXzReport, withBranch]);
  var extend_cart = (0, import_flowRight.default)([withRecall, withGroupDiscount, withSalesPerson]);
  var extend_items = (0, import_flowRight.default)([withItemRates, withItemListOverride]);
  var extend_payment = (0, import_flowRight.default)([
    withLoyaltyCard,
    withCashback,
    withAmountValidation,
    withGiftCard,
    withTabbedMops,
    withFieldsHidden,
    withPaymentValidation,
    paymentWithSalesPerson
  ]);

  // ../optic_store/optic_store/public/js/index.js
  frappe.ui.form.on("Payment Entry", payment_entry_default);
  frappe.ui.form.on("Sales Invoice", sales_invoice_default);
  frappe.ui.form.on("Sales Invoice Item", sales_invoice_item);
  frappe.ui.form.on("Sales Invoice Gift Card", sales_invoice_gift_card);
  frappe.ui.form.on("Delivery Note", delivery_note_default);
  frappe.ui.form.on("Delivery Note Item", delivery_note_item);
  frappe.ui.form.on("Stock Entry", stock_entry_default);
  frappe.ui.form.on("Sales Order", sales_order_default);
  frappe.ui.form.on("Sales Order Item", sales_order_default.sales_order_item);
  frappe.ui.form.on("Customer", customer_default);
  frappe.ui.form.on("Employee", employee_default);
  frappe.ui.form.on("Branch", branch_default);
  frappe.ui.form.on("Item", item_default);
  frappe.ui.form.on("Salary Slip", salary_slip_default);
  frappe.ui.form.on("Payroll Entry", payroll_entry_default);
  if (frappe.ui.form.CustomerQuickEntryForm) {
    frappe.ui.form.CustomerQuickEntryForm = frappe.ui.form.CustomerQuickEntryForm.extend(customer_qe_default);
  }
  frappe.ui.form.OpticalPrescriptionQuickEntryForm = frappe.ui.form.QuickEntryForm.extend(optical_prescription_qe_default);
  frappe.ui.form.BatchQuickEntryForm = frappe.ui.form.QuickEntryForm.extend(batch_qe_default);
  var __version__ = "0.10.6";
  frappe.provide("optic_store");
  optic_store = {
    __version__,
    scripts: scripts_default,
    reports: reports_exports,
    addons: addons_exports,
    extend_pos,
    listview: {
      sales_invoice: sales_invoice_list,
      stock_entry: stock_entry_default.listview_settings
    }
  };
  frappe.views.QueryReport = extend_query_report(frappe.views.QueryReport);
  frappe.ui.form.ControlMultiSelect = extend_multiselect(frappe.ui.form.ControlMultiSelect);
})();
/*!
 * Vue.js v2.6.14
 * (c) 2014-2021 Evan You
 * Released under the MIT License.
 */
//# sourceMappingURL=optic_store.bundle.WCXVPGLK.js.map
