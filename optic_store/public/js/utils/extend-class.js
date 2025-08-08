export function extendClass(Base, spec = {}) {
  // Create a subclass of the ES6 class
  class Sub extends Base {
    constructor(...args) {
      super(...args);
      // Map old `init(...)` to constructor if present
      if (typeof spec.init === "function") {
        spec.init.apply(this, args);
      }
      // Optional shim for old `_super('method', ...)` calls
      this._super = (name, ...a) => Base.prototype[name].apply(this, a);
    }
  }

  // Copy methods/properties except `init` onto the subclass prototype
  for (const [k, v] of Object.entries(spec)) {
    if (k === "init") continue;
    Object.defineProperty(Sub.prototype, k, {
      value: v,
      writable: true,
      configurable: true,
    });
  }

  return Sub;
}