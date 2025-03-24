var nt = Object.defineProperty;
var rt = (e, t, n) => t in e ? nt(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var te = (e, t, n) => rt(e, typeof t != "symbol" ? t + "" : t, n);
function ke(e, t) {
  return function() {
    return e.apply(t, arguments);
  };
}
const { toString: st } = Object.prototype, { getPrototypeOf: pe } = Object, X = /* @__PURE__ */ ((e) => (t) => {
  const n = st.call(t);
  return e[n] || (e[n] = n.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), C = (e) => (e = e.toLowerCase(), (t) => X(t) === e), G = (e) => (t) => typeof t === e, { isArray: D } = Array, H = G("undefined");
function ot(e) {
  return e !== null && !H(e) && e.constructor !== null && !H(e.constructor) && x(e.constructor.isBuffer) && e.constructor.isBuffer(e);
}
const _e = C("ArrayBuffer");
function it(e) {
  let t;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? t = ArrayBuffer.isView(e) : t = e && e.buffer && _e(e.buffer), t;
}
const at = G("string"), x = G("function"), Fe = G("number"), Q = (e) => e !== null && typeof e == "object", ct = (e) => e === !0 || e === !1, z = (e) => {
  if (X(e) !== "object")
    return !1;
  const t = pe(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}, ut = C("Date"), lt = C("File"), ft = C("Blob"), dt = C("FileList"), pt = (e) => Q(e) && x(e.pipe), ht = (e) => {
  let t;
  return e && (typeof FormData == "function" && e instanceof FormData || x(e.append) && ((t = X(e)) === "formdata" || // detect form-data instance
  t === "object" && x(e.toString) && e.toString() === "[object FormData]"));
}, mt = C("URLSearchParams"), [yt, wt, gt, bt] = ["ReadableStream", "Request", "Response", "Headers"].map(C), Et = (e) => e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function v(e, t, { allOwnKeys: n = !1 } = {}) {
  if (e === null || typeof e > "u")
    return;
  let r, s;
  if (typeof e != "object" && (e = [e]), D(e))
    for (r = 0, s = e.length; r < s; r++)
      t.call(null, e[r], r, e);
  else {
    const o = n ? Object.getOwnPropertyNames(e) : Object.keys(e), i = o.length;
    let c;
    for (r = 0; r < i; r++)
      c = o[r], t.call(null, e[c], c, e);
  }
}
function Be(e, t) {
  t = t.toLowerCase();
  const n = Object.keys(e);
  let r = n.length, s;
  for (; r-- > 0; )
    if (s = n[r], t === s.toLowerCase())
      return s;
  return null;
}
const k = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global, De = (e) => !H(e) && e !== k;
function ae() {
  const { caseless: e } = De(this) && this || {}, t = {}, n = (r, s) => {
    const o = e && Be(t, s) || s;
    z(t[o]) && z(r) ? t[o] = ae(t[o], r) : z(r) ? t[o] = ae({}, r) : D(r) ? t[o] = r.slice() : t[o] = r;
  };
  for (let r = 0, s = arguments.length; r < s; r++)
    arguments[r] && v(arguments[r], n);
  return t;
}
const St = (e, t, n, { allOwnKeys: r } = {}) => (v(t, (s, o) => {
  n && x(s) ? e[o] = ke(s, n) : e[o] = s;
}, { allOwnKeys: r }), e), Rt = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e), Ot = (e, t, n, r) => {
  e.prototype = Object.create(t.prototype, r), e.prototype.constructor = e, Object.defineProperty(e, "super", {
    value: t.prototype
  }), n && Object.assign(e.prototype, n);
}, At = (e, t, n, r) => {
  let s, o, i;
  const c = {};
  if (t = t || {}, e == null) return t;
  do {
    for (s = Object.getOwnPropertyNames(e), o = s.length; o-- > 0; )
      i = s[o], (!r || r(i, e, t)) && !c[i] && (t[i] = e[i], c[i] = !0);
    e = n !== !1 && pe(e);
  } while (e && (!n || n(e, t)) && e !== Object.prototype);
  return t;
}, Tt = (e, t, n) => {
  e = String(e), (n === void 0 || n > e.length) && (n = e.length), n -= t.length;
  const r = e.indexOf(t, n);
  return r !== -1 && r === n;
}, xt = (e) => {
  if (!e) return null;
  if (D(e)) return e;
  let t = e.length;
  if (!Fe(t)) return null;
  const n = new Array(t);
  for (; t-- > 0; )
    n[t] = e[t];
  return n;
}, Ct = /* @__PURE__ */ ((e) => (t) => e && t instanceof e)(typeof Uint8Array < "u" && pe(Uint8Array)), Nt = (e, t) => {
  const r = (e && e[Symbol.iterator]).call(e);
  let s;
  for (; (s = r.next()) && !s.done; ) {
    const o = s.value;
    t.call(e, o[0], o[1]);
  }
}, Pt = (e, t) => {
  let n;
  const r = [];
  for (; (n = e.exec(t)) !== null; )
    r.push(n);
  return r;
}, Lt = C("HTMLFormElement"), Ut = (e) => e.toLowerCase().replace(
  /[-_\s]([a-z\d])(\w*)/g,
  function(n, r, s) {
    return r.toUpperCase() + s;
  }
), ge = (({ hasOwnProperty: e }) => (t, n) => e.call(t, n))(Object.prototype), kt = C("RegExp"), Ie = (e, t) => {
  const n = Object.getOwnPropertyDescriptors(e), r = {};
  v(n, (s, o) => {
    let i;
    (i = t(s, o, e)) !== !1 && (r[o] = i || s);
  }), Object.defineProperties(e, r);
}, _t = (e) => {
  Ie(e, (t, n) => {
    if (x(e) && ["arguments", "caller", "callee"].indexOf(n) !== -1)
      return !1;
    const r = e[n];
    if (x(r)) {
      if (t.enumerable = !1, "writable" in t) {
        t.writable = !1;
        return;
      }
      t.set || (t.set = () => {
        throw Error("Can not rewrite read-only method '" + n + "'");
      });
    }
  });
}, Ft = (e, t) => {
  const n = {}, r = (s) => {
    s.forEach((o) => {
      n[o] = !0;
    });
  };
  return D(e) ? r(e) : r(String(e).split(t)), n;
}, Bt = () => {
}, Dt = (e, t) => e != null && Number.isFinite(e = +e) ? e : t;
function It(e) {
  return !!(e && x(e.append) && e[Symbol.toStringTag] === "FormData" && e[Symbol.iterator]);
}
const jt = (e) => {
  const t = new Array(10), n = (r, s) => {
    if (Q(r)) {
      if (t.indexOf(r) >= 0)
        return;
      if (!("toJSON" in r)) {
        t[s] = r;
        const o = D(r) ? [] : {};
        return v(r, (i, c) => {
          const f = n(i, s + 1);
          !H(f) && (o[c] = f);
        }), t[s] = void 0, o;
      }
    }
    return r;
  };
  return n(e, 0);
}, qt = C("AsyncFunction"), Ht = (e) => e && (Q(e) || x(e)) && x(e.then) && x(e.catch), je = ((e, t) => e ? setImmediate : t ? ((n, r) => (k.addEventListener("message", ({ source: s, data: o }) => {
  s === k && o === n && r.length && r.shift()();
}, !1), (s) => {
  r.push(s), k.postMessage(n, "*");
}))(`axios@${Math.random()}`, []) : (n) => setTimeout(n))(
  typeof setImmediate == "function",
  x(k.postMessage)
), vt = typeof queueMicrotask < "u" ? queueMicrotask.bind(k) : typeof process < "u" && process.nextTick || je, a = {
  isArray: D,
  isArrayBuffer: _e,
  isBuffer: ot,
  isFormData: ht,
  isArrayBufferView: it,
  isString: at,
  isNumber: Fe,
  isBoolean: ct,
  isObject: Q,
  isPlainObject: z,
  isReadableStream: yt,
  isRequest: wt,
  isResponse: gt,
  isHeaders: bt,
  isUndefined: H,
  isDate: ut,
  isFile: lt,
  isBlob: ft,
  isRegExp: kt,
  isFunction: x,
  isStream: pt,
  isURLSearchParams: mt,
  isTypedArray: Ct,
  isFileList: dt,
  forEach: v,
  merge: ae,
  extend: St,
  trim: Et,
  stripBOM: Rt,
  inherits: Ot,
  toFlatObject: At,
  kindOf: X,
  kindOfTest: C,
  endsWith: Tt,
  toArray: xt,
  forEachEntry: Nt,
  matchAll: Pt,
  isHTMLForm: Lt,
  hasOwnProperty: ge,
  hasOwnProp: ge,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: Ie,
  freezeMethods: _t,
  toObjectSet: Ft,
  toCamelCase: Ut,
  noop: Bt,
  toFiniteNumber: Dt,
  findKey: Be,
  global: k,
  isContextDefined: De,
  isSpecCompliantForm: It,
  toJSONObject: jt,
  isAsyncFn: qt,
  isThenable: Ht,
  setImmediate: je,
  asap: vt
};
function m(e, t, n, r, s) {
  Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = e, this.name = "AxiosError", t && (this.code = t), n && (this.config = n), r && (this.request = r), s && (this.response = s, this.status = s.status ? s.status : null);
}
a.inherits(m, Error, {
  toJSON: function() {
    return {
      // Standard
      message: this.message,
      name: this.name,
      // Microsoft
      description: this.description,
      number: this.number,
      // Mozilla
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      // Axios
      config: a.toJSONObject(this.config),
      code: this.code,
      status: this.status
    };
  }
});
const qe = m.prototype, He = {};
[
  "ERR_BAD_OPTION_VALUE",
  "ERR_BAD_OPTION",
  "ECONNABORTED",
  "ETIMEDOUT",
  "ERR_NETWORK",
  "ERR_FR_TOO_MANY_REDIRECTS",
  "ERR_DEPRECATED",
  "ERR_BAD_RESPONSE",
  "ERR_BAD_REQUEST",
  "ERR_CANCELED",
  "ERR_NOT_SUPPORT",
  "ERR_INVALID_URL"
  // eslint-disable-next-line func-names
].forEach((e) => {
  He[e] = { value: e };
});
Object.defineProperties(m, He);
Object.defineProperty(qe, "isAxiosError", { value: !0 });
m.from = (e, t, n, r, s, o) => {
  const i = Object.create(qe);
  return a.toFlatObject(e, i, function(f) {
    return f !== Error.prototype;
  }, (c) => c !== "isAxiosError"), m.call(i, e.message, t, n, r, s), i.cause = e, i.name = e.name, o && Object.assign(i, o), i;
};
const Mt = null;
function ce(e) {
  return a.isPlainObject(e) || a.isArray(e);
}
function ve(e) {
  return a.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function be(e, t, n) {
  return e ? e.concat(t).map(function(s, o) {
    return s = ve(s), !n && o ? "[" + s + "]" : s;
  }).join(n ? "." : "") : t;
}
function $t(e) {
  return a.isArray(e) && !e.some(ce);
}
const zt = a.toFlatObject(a, {}, null, function(t) {
  return /^is[A-Z]/.test(t);
});
function Z(e, t, n) {
  if (!a.isObject(e))
    throw new TypeError("target must be an object");
  t = t || new FormData(), n = a.toFlatObject(n, {
    metaTokens: !0,
    dots: !1,
    indexes: !1
  }, !1, function(y, h) {
    return !a.isUndefined(h[y]);
  });
  const r = n.metaTokens, s = n.visitor || l, o = n.dots, i = n.indexes, f = (n.Blob || typeof Blob < "u" && Blob) && a.isSpecCompliantForm(t);
  if (!a.isFunction(s))
    throw new TypeError("visitor must be a function");
  function u(p) {
    if (p === null) return "";
    if (a.isDate(p))
      return p.toISOString();
    if (!f && a.isBlob(p))
      throw new m("Blob is not supported. Use a Buffer instead.");
    return a.isArrayBuffer(p) || a.isTypedArray(p) ? f && typeof Blob == "function" ? new Blob([p]) : Buffer.from(p) : p;
  }
  function l(p, y, h) {
    let b = p;
    if (p && !h && typeof p == "object") {
      if (a.endsWith(y, "{}"))
        y = r ? y : y.slice(0, -2), p = JSON.stringify(p);
      else if (a.isArray(p) && $t(p) || (a.isFileList(p) || a.endsWith(y, "[]")) && (b = a.toArray(p)))
        return y = ve(y), b.forEach(function(R, P) {
          !(a.isUndefined(R) || R === null) && t.append(
            // eslint-disable-next-line no-nested-ternary
            i === !0 ? be([y], P, o) : i === null ? y : y + "[]",
            u(R)
          );
        }), !1;
    }
    return ce(p) ? !0 : (t.append(be(h, y, o), u(p)), !1);
  }
  const d = [], w = Object.assign(zt, {
    defaultVisitor: l,
    convertValue: u,
    isVisitable: ce
  });
  function E(p, y) {
    if (!a.isUndefined(p)) {
      if (d.indexOf(p) !== -1)
        throw Error("Circular reference detected in " + y.join("."));
      d.push(p), a.forEach(p, function(b, S) {
        (!(a.isUndefined(b) || b === null) && s.call(
          t,
          b,
          a.isString(S) ? S.trim() : S,
          y,
          w
        )) === !0 && E(b, y ? y.concat(S) : [S]);
      }), d.pop();
    }
  }
  if (!a.isObject(e))
    throw new TypeError("data must be an object");
  return E(e), t;
}
function Ee(e) {
  const t = {
    "!": "%21",
    "'": "%27",
    "(": "%28",
    ")": "%29",
    "~": "%7E",
    "%20": "+",
    "%00": "\0"
  };
  return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, function(r) {
    return t[r];
  });
}
function he(e, t) {
  this._pairs = [], e && Z(e, this, t);
}
const Me = he.prototype;
Me.append = function(t, n) {
  this._pairs.push([t, n]);
};
Me.toString = function(t) {
  const n = t ? function(r) {
    return t.call(this, r, Ee);
  } : Ee;
  return this._pairs.map(function(s) {
    return n(s[0]) + "=" + n(s[1]);
  }, "").join("&");
};
function Jt(e) {
  return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
function $e(e, t, n) {
  if (!t)
    return e;
  const r = n && n.encode || Jt;
  a.isFunction(n) && (n = {
    serialize: n
  });
  const s = n && n.serialize;
  let o;
  if (s ? o = s(t, n) : o = a.isURLSearchParams(t) ? t.toString() : new he(t, n).toString(r), o) {
    const i = e.indexOf("#");
    i !== -1 && (e = e.slice(0, i)), e += (e.indexOf("?") === -1 ? "?" : "&") + o;
  }
  return e;
}
class Se {
  constructor() {
    this.handlers = [];
  }
  /**
   * Add a new interceptor to the stack
   *
   * @param {Function} fulfilled The function to handle `then` for a `Promise`
   * @param {Function} rejected The function to handle `reject` for a `Promise`
   *
   * @return {Number} An ID used to remove interceptor later
   */
  use(t, n, r) {
    return this.handlers.push({
      fulfilled: t,
      rejected: n,
      synchronous: r ? r.synchronous : !1,
      runWhen: r ? r.runWhen : null
    }), this.handlers.length - 1;
  }
  /**
   * Remove an interceptor from the stack
   *
   * @param {Number} id The ID that was returned by `use`
   *
   * @returns {Boolean} `true` if the interceptor was removed, `false` otherwise
   */
  eject(t) {
    this.handlers[t] && (this.handlers[t] = null);
  }
  /**
   * Clear all interceptors from the stack
   *
   * @returns {void}
   */
  clear() {
    this.handlers && (this.handlers = []);
  }
  /**
   * Iterate over all the registered interceptors
   *
   * This method is particularly useful for skipping over any
   * interceptors that may have become `null` calling `eject`.
   *
   * @param {Function} fn The function to call for each interceptor
   *
   * @returns {void}
   */
  forEach(t) {
    a.forEach(this.handlers, function(r) {
      r !== null && t(r);
    });
  }
}
const ze = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, Kt = typeof URLSearchParams < "u" ? URLSearchParams : he, Vt = typeof FormData < "u" ? FormData : null, Wt = typeof Blob < "u" ? Blob : null, Xt = {
  isBrowser: !0,
  classes: {
    URLSearchParams: Kt,
    FormData: Vt,
    Blob: Wt
  },
  protocols: ["http", "https", "file", "blob", "url", "data"]
}, me = typeof window < "u" && typeof document < "u", ue = typeof navigator == "object" && navigator || void 0, Gt = me && (!ue || ["ReactNative", "NativeScript", "NS"].indexOf(ue.product) < 0), Qt = typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function", Zt = me && window.location.href || "http://localhost", Yt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  hasBrowserEnv: me,
  hasStandardBrowserEnv: Gt,
  hasStandardBrowserWebWorkerEnv: Qt,
  navigator: ue,
  origin: Zt
}, Symbol.toStringTag, { value: "Module" })), O = {
  ...Yt,
  ...Xt
};
function en(e, t) {
  return Z(e, new O.classes.URLSearchParams(), Object.assign({
    visitor: function(n, r, s, o) {
      return O.isNode && a.isBuffer(n) ? (this.append(r, n.toString("base64")), !1) : o.defaultVisitor.apply(this, arguments);
    }
  }, t));
}
function tn(e) {
  return a.matchAll(/\w+|\[(\w*)]/g, e).map((t) => t[0] === "[]" ? "" : t[1] || t[0]);
}
function nn(e) {
  const t = {}, n = Object.keys(e);
  let r;
  const s = n.length;
  let o;
  for (r = 0; r < s; r++)
    o = n[r], t[o] = e[o];
  return t;
}
function Je(e) {
  function t(n, r, s, o) {
    let i = n[o++];
    if (i === "__proto__") return !0;
    const c = Number.isFinite(+i), f = o >= n.length;
    return i = !i && a.isArray(s) ? s.length : i, f ? (a.hasOwnProp(s, i) ? s[i] = [s[i], r] : s[i] = r, !c) : ((!s[i] || !a.isObject(s[i])) && (s[i] = []), t(n, r, s[i], o) && a.isArray(s[i]) && (s[i] = nn(s[i])), !c);
  }
  if (a.isFormData(e) && a.isFunction(e.entries)) {
    const n = {};
    return a.forEachEntry(e, (r, s) => {
      t(tn(r), s, n, 0);
    }), n;
  }
  return null;
}
function rn(e, t, n) {
  if (a.isString(e))
    try {
      return (t || JSON.parse)(e), a.trim(e);
    } catch (r) {
      if (r.name !== "SyntaxError")
        throw r;
    }
  return (n || JSON.stringify)(e);
}
const M = {
  transitional: ze,
  adapter: ["xhr", "http", "fetch"],
  transformRequest: [function(t, n) {
    const r = n.getContentType() || "", s = r.indexOf("application/json") > -1, o = a.isObject(t);
    if (o && a.isHTMLForm(t) && (t = new FormData(t)), a.isFormData(t))
      return s ? JSON.stringify(Je(t)) : t;
    if (a.isArrayBuffer(t) || a.isBuffer(t) || a.isStream(t) || a.isFile(t) || a.isBlob(t) || a.isReadableStream(t))
      return t;
    if (a.isArrayBufferView(t))
      return t.buffer;
    if (a.isURLSearchParams(t))
      return n.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), t.toString();
    let c;
    if (o) {
      if (r.indexOf("application/x-www-form-urlencoded") > -1)
        return en(t, this.formSerializer).toString();
      if ((c = a.isFileList(t)) || r.indexOf("multipart/form-data") > -1) {
        const f = this.env && this.env.FormData;
        return Z(
          c ? { "files[]": t } : t,
          f && new f(),
          this.formSerializer
        );
      }
    }
    return o || s ? (n.setContentType("application/json", !1), rn(t)) : t;
  }],
  transformResponse: [function(t) {
    const n = this.transitional || M.transitional, r = n && n.forcedJSONParsing, s = this.responseType === "json";
    if (a.isResponse(t) || a.isReadableStream(t))
      return t;
    if (t && a.isString(t) && (r && !this.responseType || s)) {
      const i = !(n && n.silentJSONParsing) && s;
      try {
        return JSON.parse(t);
      } catch (c) {
        if (i)
          throw c.name === "SyntaxError" ? m.from(c, m.ERR_BAD_RESPONSE, this, null, this.response) : c;
      }
    }
    return t;
  }],
  /**
   * A timeout in milliseconds to abort a request. If set to 0 (default) a
   * timeout is not created.
   */
  timeout: 0,
  xsrfCookieName: "XSRF-TOKEN",
  xsrfHeaderName: "X-XSRF-TOKEN",
  maxContentLength: -1,
  maxBodyLength: -1,
  env: {
    FormData: O.classes.FormData,
    Blob: O.classes.Blob
  },
  validateStatus: function(t) {
    return t >= 200 && t < 300;
  },
  headers: {
    common: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": void 0
    }
  }
};
a.forEach(["delete", "get", "head", "post", "put", "patch"], (e) => {
  M.headers[e] = {};
});
const sn = a.toObjectSet([
  "age",
  "authorization",
  "content-length",
  "content-type",
  "etag",
  "expires",
  "from",
  "host",
  "if-modified-since",
  "if-unmodified-since",
  "last-modified",
  "location",
  "max-forwards",
  "proxy-authorization",
  "referer",
  "retry-after",
  "user-agent"
]), on = (e) => {
  const t = {};
  let n, r, s;
  return e && e.split(`
`).forEach(function(i) {
    s = i.indexOf(":"), n = i.substring(0, s).trim().toLowerCase(), r = i.substring(s + 1).trim(), !(!n || t[n] && sn[n]) && (n === "set-cookie" ? t[n] ? t[n].push(r) : t[n] = [r] : t[n] = t[n] ? t[n] + ", " + r : r);
  }), t;
}, Re = Symbol("internals");
function q(e) {
  return e && String(e).trim().toLowerCase();
}
function J(e) {
  return e === !1 || e == null ? e : a.isArray(e) ? e.map(J) : String(e);
}
function an(e) {
  const t = /* @__PURE__ */ Object.create(null), n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let r;
  for (; r = n.exec(e); )
    t[r[1]] = r[2];
  return t;
}
const cn = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function ne(e, t, n, r, s) {
  if (a.isFunction(r))
    return r.call(this, t, n);
  if (s && (t = n), !!a.isString(t)) {
    if (a.isString(r))
      return t.indexOf(r) !== -1;
    if (a.isRegExp(r))
      return r.test(t);
  }
}
function un(e) {
  return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (t, n, r) => n.toUpperCase() + r);
}
function ln(e, t) {
  const n = a.toCamelCase(" " + t);
  ["get", "set", "has"].forEach((r) => {
    Object.defineProperty(e, r + n, {
      value: function(s, o, i) {
        return this[r].call(this, t, s, o, i);
      },
      configurable: !0
    });
  });
}
let T = class {
  constructor(t) {
    t && this.set(t);
  }
  set(t, n, r) {
    const s = this;
    function o(c, f, u) {
      const l = q(f);
      if (!l)
        throw new Error("header name must be a non-empty string");
      const d = a.findKey(s, l);
      (!d || s[d] === void 0 || u === !0 || u === void 0 && s[d] !== !1) && (s[d || f] = J(c));
    }
    const i = (c, f) => a.forEach(c, (u, l) => o(u, l, f));
    if (a.isPlainObject(t) || t instanceof this.constructor)
      i(t, n);
    else if (a.isString(t) && (t = t.trim()) && !cn(t))
      i(on(t), n);
    else if (a.isHeaders(t))
      for (const [c, f] of t.entries())
        o(f, c, r);
    else
      t != null && o(n, t, r);
    return this;
  }
  get(t, n) {
    if (t = q(t), t) {
      const r = a.findKey(this, t);
      if (r) {
        const s = this[r];
        if (!n)
          return s;
        if (n === !0)
          return an(s);
        if (a.isFunction(n))
          return n.call(this, s, r);
        if (a.isRegExp(n))
          return n.exec(s);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(t, n) {
    if (t = q(t), t) {
      const r = a.findKey(this, t);
      return !!(r && this[r] !== void 0 && (!n || ne(this, this[r], r, n)));
    }
    return !1;
  }
  delete(t, n) {
    const r = this;
    let s = !1;
    function o(i) {
      if (i = q(i), i) {
        const c = a.findKey(r, i);
        c && (!n || ne(r, r[c], c, n)) && (delete r[c], s = !0);
      }
    }
    return a.isArray(t) ? t.forEach(o) : o(t), s;
  }
  clear(t) {
    const n = Object.keys(this);
    let r = n.length, s = !1;
    for (; r--; ) {
      const o = n[r];
      (!t || ne(this, this[o], o, t, !0)) && (delete this[o], s = !0);
    }
    return s;
  }
  normalize(t) {
    const n = this, r = {};
    return a.forEach(this, (s, o) => {
      const i = a.findKey(r, o);
      if (i) {
        n[i] = J(s), delete n[o];
        return;
      }
      const c = t ? un(o) : String(o).trim();
      c !== o && delete n[o], n[c] = J(s), r[c] = !0;
    }), this;
  }
  concat(...t) {
    return this.constructor.concat(this, ...t);
  }
  toJSON(t) {
    const n = /* @__PURE__ */ Object.create(null);
    return a.forEach(this, (r, s) => {
      r != null && r !== !1 && (n[s] = t && a.isArray(r) ? r.join(", ") : r);
    }), n;
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON()).map(([t, n]) => t + ": " + n).join(`
`);
  }
  get [Symbol.toStringTag]() {
    return "AxiosHeaders";
  }
  static from(t) {
    return t instanceof this ? t : new this(t);
  }
  static concat(t, ...n) {
    const r = new this(t);
    return n.forEach((s) => r.set(s)), r;
  }
  static accessor(t) {
    const r = (this[Re] = this[Re] = {
      accessors: {}
    }).accessors, s = this.prototype;
    function o(i) {
      const c = q(i);
      r[c] || (ln(s, i), r[c] = !0);
    }
    return a.isArray(t) ? t.forEach(o) : o(t), this;
  }
};
T.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
a.reduceDescriptors(T.prototype, ({ value: e }, t) => {
  let n = t[0].toUpperCase() + t.slice(1);
  return {
    get: () => e,
    set(r) {
      this[n] = r;
    }
  };
});
a.freezeMethods(T);
function re(e, t) {
  const n = this || M, r = t || n, s = T.from(r.headers);
  let o = r.data;
  return a.forEach(e, function(c) {
    o = c.call(n, o, s.normalize(), t ? t.status : void 0);
  }), s.normalize(), o;
}
function Ke(e) {
  return !!(e && e.__CANCEL__);
}
function I(e, t, n) {
  m.call(this, e ?? "canceled", m.ERR_CANCELED, t, n), this.name = "CanceledError";
}
a.inherits(I, m, {
  __CANCEL__: !0
});
function Ve(e, t, n) {
  const r = n.config.validateStatus;
  !n.status || !r || r(n.status) ? e(n) : t(new m(
    "Request failed with status code " + n.status,
    [m.ERR_BAD_REQUEST, m.ERR_BAD_RESPONSE][Math.floor(n.status / 100) - 4],
    n.config,
    n.request,
    n
  ));
}
function fn(e) {
  const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return t && t[1] || "";
}
function dn(e, t) {
  e = e || 10;
  const n = new Array(e), r = new Array(e);
  let s = 0, o = 0, i;
  return t = t !== void 0 ? t : 1e3, function(f) {
    const u = Date.now(), l = r[o];
    i || (i = u), n[s] = f, r[s] = u;
    let d = o, w = 0;
    for (; d !== s; )
      w += n[d++], d = d % e;
    if (s = (s + 1) % e, s === o && (o = (o + 1) % e), u - i < t)
      return;
    const E = l && u - l;
    return E ? Math.round(w * 1e3 / E) : void 0;
  };
}
function pn(e, t) {
  let n = 0, r = 1e3 / t, s, o;
  const i = (u, l = Date.now()) => {
    n = l, s = null, o && (clearTimeout(o), o = null), e.apply(null, u);
  };
  return [(...u) => {
    const l = Date.now(), d = l - n;
    d >= r ? i(u, l) : (s = u, o || (o = setTimeout(() => {
      o = null, i(s);
    }, r - d)));
  }, () => s && i(s)];
}
const V = (e, t, n = 3) => {
  let r = 0;
  const s = dn(50, 250);
  return pn((o) => {
    const i = o.loaded, c = o.lengthComputable ? o.total : void 0, f = i - r, u = s(f), l = i <= c;
    r = i;
    const d = {
      loaded: i,
      total: c,
      progress: c ? i / c : void 0,
      bytes: f,
      rate: u || void 0,
      estimated: u && c && l ? (c - i) / u : void 0,
      event: o,
      lengthComputable: c != null,
      [t ? "download" : "upload"]: !0
    };
    e(d);
  }, n);
}, Oe = (e, t) => {
  const n = e != null;
  return [(r) => t[0]({
    lengthComputable: n,
    total: e,
    loaded: r
  }), t[1]];
}, Ae = (e) => (...t) => a.asap(() => e(...t)), hn = O.hasStandardBrowserEnv ? /* @__PURE__ */ ((e, t) => (n) => (n = new URL(n, O.origin), e.protocol === n.protocol && e.host === n.host && (t || e.port === n.port)))(
  new URL(O.origin),
  O.navigator && /(msie|trident)/i.test(O.navigator.userAgent)
) : () => !0, mn = O.hasStandardBrowserEnv ? (
  // Standard browser envs support document.cookie
  {
    write(e, t, n, r, s, o) {
      const i = [e + "=" + encodeURIComponent(t)];
      a.isNumber(n) && i.push("expires=" + new Date(n).toGMTString()), a.isString(r) && i.push("path=" + r), a.isString(s) && i.push("domain=" + s), o === !0 && i.push("secure"), document.cookie = i.join("; ");
    },
    read(e) {
      const t = document.cookie.match(new RegExp("(^|;\\s*)(" + e + ")=([^;]*)"));
      return t ? decodeURIComponent(t[3]) : null;
    },
    remove(e) {
      this.write(e, "", Date.now() - 864e5);
    }
  }
) : (
  // Non-standard browser env (web workers, react-native) lack needed support.
  {
    write() {
    },
    read() {
      return null;
    },
    remove() {
    }
  }
);
function yn(e) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function wn(e, t) {
  return t ? e.replace(/\/?\/$/, "") + "/" + t.replace(/^\/+/, "") : e;
}
function We(e, t, n) {
  let r = !yn(t);
  return e && r || n == !1 ? wn(e, t) : t;
}
const Te = (e) => e instanceof T ? { ...e } : e;
function F(e, t) {
  t = t || {};
  const n = {};
  function r(u, l, d, w) {
    return a.isPlainObject(u) && a.isPlainObject(l) ? a.merge.call({ caseless: w }, u, l) : a.isPlainObject(l) ? a.merge({}, l) : a.isArray(l) ? l.slice() : l;
  }
  function s(u, l, d, w) {
    if (a.isUndefined(l)) {
      if (!a.isUndefined(u))
        return r(void 0, u, d, w);
    } else return r(u, l, d, w);
  }
  function o(u, l) {
    if (!a.isUndefined(l))
      return r(void 0, l);
  }
  function i(u, l) {
    if (a.isUndefined(l)) {
      if (!a.isUndefined(u))
        return r(void 0, u);
    } else return r(void 0, l);
  }
  function c(u, l, d) {
    if (d in t)
      return r(u, l);
    if (d in e)
      return r(void 0, u);
  }
  const f = {
    url: o,
    method: o,
    data: o,
    baseURL: i,
    transformRequest: i,
    transformResponse: i,
    paramsSerializer: i,
    timeout: i,
    timeoutMessage: i,
    withCredentials: i,
    withXSRFToken: i,
    adapter: i,
    responseType: i,
    xsrfCookieName: i,
    xsrfHeaderName: i,
    onUploadProgress: i,
    onDownloadProgress: i,
    decompress: i,
    maxContentLength: i,
    maxBodyLength: i,
    beforeRedirect: i,
    transport: i,
    httpAgent: i,
    httpsAgent: i,
    cancelToken: i,
    socketPath: i,
    responseEncoding: i,
    validateStatus: c,
    headers: (u, l, d) => s(Te(u), Te(l), d, !0)
  };
  return a.forEach(Object.keys(Object.assign({}, e, t)), function(l) {
    const d = f[l] || s, w = d(e[l], t[l], l);
    a.isUndefined(w) && d !== c || (n[l] = w);
  }), n;
}
const Xe = (e) => {
  const t = F({}, e);
  let { data: n, withXSRFToken: r, xsrfHeaderName: s, xsrfCookieName: o, headers: i, auth: c } = t;
  t.headers = i = T.from(i), t.url = $e(We(t.baseURL, t.url, t.allowAbsoluteUrls), e.params, e.paramsSerializer), c && i.set(
    "Authorization",
    "Basic " + btoa((c.username || "") + ":" + (c.password ? unescape(encodeURIComponent(c.password)) : ""))
  );
  let f;
  if (a.isFormData(n)) {
    if (O.hasStandardBrowserEnv || O.hasStandardBrowserWebWorkerEnv)
      i.setContentType(void 0);
    else if ((f = i.getContentType()) !== !1) {
      const [u, ...l] = f ? f.split(";").map((d) => d.trim()).filter(Boolean) : [];
      i.setContentType([u || "multipart/form-data", ...l].join("; "));
    }
  }
  if (O.hasStandardBrowserEnv && (r && a.isFunction(r) && (r = r(t)), r || r !== !1 && hn(t.url))) {
    const u = s && o && mn.read(o);
    u && i.set(s, u);
  }
  return t;
}, gn = typeof XMLHttpRequest < "u", bn = gn && function(e) {
  return new Promise(function(n, r) {
    const s = Xe(e);
    let o = s.data;
    const i = T.from(s.headers).normalize();
    let { responseType: c, onUploadProgress: f, onDownloadProgress: u } = s, l, d, w, E, p;
    function y() {
      E && E(), p && p(), s.cancelToken && s.cancelToken.unsubscribe(l), s.signal && s.signal.removeEventListener("abort", l);
    }
    let h = new XMLHttpRequest();
    h.open(s.method.toUpperCase(), s.url, !0), h.timeout = s.timeout;
    function b() {
      if (!h)
        return;
      const R = T.from(
        "getAllResponseHeaders" in h && h.getAllResponseHeaders()
      ), A = {
        data: !c || c === "text" || c === "json" ? h.responseText : h.response,
        status: h.status,
        statusText: h.statusText,
        headers: R,
        config: e,
        request: h
      };
      Ve(function(U) {
        n(U), y();
      }, function(U) {
        r(U), y();
      }, A), h = null;
    }
    "onloadend" in h ? h.onloadend = b : h.onreadystatechange = function() {
      !h || h.readyState !== 4 || h.status === 0 && !(h.responseURL && h.responseURL.indexOf("file:") === 0) || setTimeout(b);
    }, h.onabort = function() {
      h && (r(new m("Request aborted", m.ECONNABORTED, e, h)), h = null);
    }, h.onerror = function() {
      r(new m("Network Error", m.ERR_NETWORK, e, h)), h = null;
    }, h.ontimeout = function() {
      let P = s.timeout ? "timeout of " + s.timeout + "ms exceeded" : "timeout exceeded";
      const A = s.transitional || ze;
      s.timeoutErrorMessage && (P = s.timeoutErrorMessage), r(new m(
        P,
        A.clarifyTimeoutError ? m.ETIMEDOUT : m.ECONNABORTED,
        e,
        h
      )), h = null;
    }, o === void 0 && i.setContentType(null), "setRequestHeader" in h && a.forEach(i.toJSON(), function(P, A) {
      h.setRequestHeader(A, P);
    }), a.isUndefined(s.withCredentials) || (h.withCredentials = !!s.withCredentials), c && c !== "json" && (h.responseType = s.responseType), u && ([w, p] = V(u, !0), h.addEventListener("progress", w)), f && h.upload && ([d, E] = V(f), h.upload.addEventListener("progress", d), h.upload.addEventListener("loadend", E)), (s.cancelToken || s.signal) && (l = (R) => {
      h && (r(!R || R.type ? new I(null, e, h) : R), h.abort(), h = null);
    }, s.cancelToken && s.cancelToken.subscribe(l), s.signal && (s.signal.aborted ? l() : s.signal.addEventListener("abort", l)));
    const S = fn(s.url);
    if (S && O.protocols.indexOf(S) === -1) {
      r(new m("Unsupported protocol " + S + ":", m.ERR_BAD_REQUEST, e));
      return;
    }
    h.send(o || null);
  });
}, En = (e, t) => {
  const { length: n } = e = e ? e.filter(Boolean) : [];
  if (t || n) {
    let r = new AbortController(), s;
    const o = function(u) {
      if (!s) {
        s = !0, c();
        const l = u instanceof Error ? u : this.reason;
        r.abort(l instanceof m ? l : new I(l instanceof Error ? l.message : l));
      }
    };
    let i = t && setTimeout(() => {
      i = null, o(new m(`timeout ${t} of ms exceeded`, m.ETIMEDOUT));
    }, t);
    const c = () => {
      e && (i && clearTimeout(i), i = null, e.forEach((u) => {
        u.unsubscribe ? u.unsubscribe(o) : u.removeEventListener("abort", o);
      }), e = null);
    };
    e.forEach((u) => u.addEventListener("abort", o));
    const { signal: f } = r;
    return f.unsubscribe = () => a.asap(c), f;
  }
}, Sn = function* (e, t) {
  let n = e.byteLength;
  if (n < t) {
    yield e;
    return;
  }
  let r = 0, s;
  for (; r < n; )
    s = r + t, yield e.slice(r, s), r = s;
}, Rn = async function* (e, t) {
  for await (const n of On(e))
    yield* Sn(n, t);
}, On = async function* (e) {
  if (e[Symbol.asyncIterator]) {
    yield* e;
    return;
  }
  const t = e.getReader();
  try {
    for (; ; ) {
      const { done: n, value: r } = await t.read();
      if (n)
        break;
      yield r;
    }
  } finally {
    await t.cancel();
  }
}, xe = (e, t, n, r) => {
  const s = Rn(e, t);
  let o = 0, i, c = (f) => {
    i || (i = !0, r && r(f));
  };
  return new ReadableStream({
    async pull(f) {
      try {
        const { done: u, value: l } = await s.next();
        if (u) {
          c(), f.close();
          return;
        }
        let d = l.byteLength;
        if (n) {
          let w = o += d;
          n(w);
        }
        f.enqueue(new Uint8Array(l));
      } catch (u) {
        throw c(u), u;
      }
    },
    cancel(f) {
      return c(f), s.return();
    }
  }, {
    highWaterMark: 2
  });
}, Y = typeof fetch == "function" && typeof Request == "function" && typeof Response == "function", Ge = Y && typeof ReadableStream == "function", An = Y && (typeof TextEncoder == "function" ? /* @__PURE__ */ ((e) => (t) => e.encode(t))(new TextEncoder()) : async (e) => new Uint8Array(await new Response(e).arrayBuffer())), Qe = (e, ...t) => {
  try {
    return !!e(...t);
  } catch {
    return !1;
  }
}, Tn = Ge && Qe(() => {
  let e = !1;
  const t = new Request(O.origin, {
    body: new ReadableStream(),
    method: "POST",
    get duplex() {
      return e = !0, "half";
    }
  }).headers.has("Content-Type");
  return e && !t;
}), Ce = 64 * 1024, le = Ge && Qe(() => a.isReadableStream(new Response("").body)), W = {
  stream: le && ((e) => e.body)
};
Y && ((e) => {
  ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((t) => {
    !W[t] && (W[t] = a.isFunction(e[t]) ? (n) => n[t]() : (n, r) => {
      throw new m(`Response type '${t}' is not supported`, m.ERR_NOT_SUPPORT, r);
    });
  });
})(new Response());
const xn = async (e) => {
  if (e == null)
    return 0;
  if (a.isBlob(e))
    return e.size;
  if (a.isSpecCompliantForm(e))
    return (await new Request(O.origin, {
      method: "POST",
      body: e
    }).arrayBuffer()).byteLength;
  if (a.isArrayBufferView(e) || a.isArrayBuffer(e))
    return e.byteLength;
  if (a.isURLSearchParams(e) && (e = e + ""), a.isString(e))
    return (await An(e)).byteLength;
}, Cn = async (e, t) => {
  const n = a.toFiniteNumber(e.getContentLength());
  return n ?? xn(t);
}, Nn = Y && (async (e) => {
  let {
    url: t,
    method: n,
    data: r,
    signal: s,
    cancelToken: o,
    timeout: i,
    onDownloadProgress: c,
    onUploadProgress: f,
    responseType: u,
    headers: l,
    withCredentials: d = "same-origin",
    fetchOptions: w
  } = Xe(e);
  u = u ? (u + "").toLowerCase() : "text";
  let E = En([s, o && o.toAbortSignal()], i), p;
  const y = E && E.unsubscribe && (() => {
    E.unsubscribe();
  });
  let h;
  try {
    if (f && Tn && n !== "get" && n !== "head" && (h = await Cn(l, r)) !== 0) {
      let A = new Request(t, {
        method: "POST",
        body: r,
        duplex: "half"
      }), L;
      if (a.isFormData(r) && (L = A.headers.get("content-type")) && l.setContentType(L), A.body) {
        const [U, $] = Oe(
          h,
          V(Ae(f))
        );
        r = xe(A.body, Ce, U, $);
      }
    }
    a.isString(d) || (d = d ? "include" : "omit");
    const b = "credentials" in Request.prototype;
    p = new Request(t, {
      ...w,
      signal: E,
      method: n.toUpperCase(),
      headers: l.normalize().toJSON(),
      body: r,
      duplex: "half",
      credentials: b ? d : void 0
    });
    let S = await fetch(p);
    const R = le && (u === "stream" || u === "response");
    if (le && (c || R && y)) {
      const A = {};
      ["status", "statusText", "headers"].forEach((we) => {
        A[we] = S[we];
      });
      const L = a.toFiniteNumber(S.headers.get("content-length")), [U, $] = c && Oe(
        L,
        V(Ae(c), !0)
      ) || [];
      S = new Response(
        xe(S.body, Ce, U, () => {
          $ && $(), y && y();
        }),
        A
      );
    }
    u = u || "text";
    let P = await W[a.findKey(W, u) || "text"](S, e);
    return !R && y && y(), await new Promise((A, L) => {
      Ve(A, L, {
        data: P,
        headers: T.from(S.headers),
        status: S.status,
        statusText: S.statusText,
        config: e,
        request: p
      });
    });
  } catch (b) {
    throw y && y(), b && b.name === "TypeError" && /fetch/i.test(b.message) ? Object.assign(
      new m("Network Error", m.ERR_NETWORK, e, p),
      {
        cause: b.cause || b
      }
    ) : m.from(b, b && b.code, e, p);
  }
}), fe = {
  http: Mt,
  xhr: bn,
  fetch: Nn
};
a.forEach(fe, (e, t) => {
  if (e) {
    try {
      Object.defineProperty(e, "name", { value: t });
    } catch {
    }
    Object.defineProperty(e, "adapterName", { value: t });
  }
});
const Ne = (e) => `- ${e}`, Pn = (e) => a.isFunction(e) || e === null || e === !1, Ze = {
  getAdapter: (e) => {
    e = a.isArray(e) ? e : [e];
    const { length: t } = e;
    let n, r;
    const s = {};
    for (let o = 0; o < t; o++) {
      n = e[o];
      let i;
      if (r = n, !Pn(n) && (r = fe[(i = String(n)).toLowerCase()], r === void 0))
        throw new m(`Unknown adapter '${i}'`);
      if (r)
        break;
      s[i || "#" + o] = r;
    }
    if (!r) {
      const o = Object.entries(s).map(
        ([c, f]) => `adapter ${c} ` + (f === !1 ? "is not supported by the environment" : "is not available in the build")
      );
      let i = t ? o.length > 1 ? `since :
` + o.map(Ne).join(`
`) : " " + Ne(o[0]) : "as no adapter specified";
      throw new m(
        "There is no suitable adapter to dispatch the request " + i,
        "ERR_NOT_SUPPORT"
      );
    }
    return r;
  },
  adapters: fe
};
function se(e) {
  if (e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted)
    throw new I(null, e);
}
function Pe(e) {
  return se(e), e.headers = T.from(e.headers), e.data = re.call(
    e,
    e.transformRequest
  ), ["post", "put", "patch"].indexOf(e.method) !== -1 && e.headers.setContentType("application/x-www-form-urlencoded", !1), Ze.getAdapter(e.adapter || M.adapter)(e).then(function(r) {
    return se(e), r.data = re.call(
      e,
      e.transformResponse,
      r
    ), r.headers = T.from(r.headers), r;
  }, function(r) {
    return Ke(r) || (se(e), r && r.response && (r.response.data = re.call(
      e,
      e.transformResponse,
      r.response
    ), r.response.headers = T.from(r.response.headers))), Promise.reject(r);
  });
}
const Ye = "1.8.3", ee = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((e, t) => {
  ee[e] = function(r) {
    return typeof r === e || "a" + (t < 1 ? "n " : " ") + e;
  };
});
const Le = {};
ee.transitional = function(t, n, r) {
  function s(o, i) {
    return "[Axios v" + Ye + "] Transitional option '" + o + "'" + i + (r ? ". " + r : "");
  }
  return (o, i, c) => {
    if (t === !1)
      throw new m(
        s(i, " has been removed" + (n ? " in " + n : "")),
        m.ERR_DEPRECATED
      );
    return n && !Le[i] && (Le[i] = !0, console.warn(
      s(
        i,
        " has been deprecated since v" + n + " and will be removed in the near future"
      )
    )), t ? t(o, i, c) : !0;
  };
};
ee.spelling = function(t) {
  return (n, r) => (console.warn(`${r} is likely a misspelling of ${t}`), !0);
};
function Ln(e, t, n) {
  if (typeof e != "object")
    throw new m("options must be an object", m.ERR_BAD_OPTION_VALUE);
  const r = Object.keys(e);
  let s = r.length;
  for (; s-- > 0; ) {
    const o = r[s], i = t[o];
    if (i) {
      const c = e[o], f = c === void 0 || i(c, o, e);
      if (f !== !0)
        throw new m("option " + o + " must be " + f, m.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (n !== !0)
      throw new m("Unknown option " + o, m.ERR_BAD_OPTION);
  }
}
const K = {
  assertOptions: Ln,
  validators: ee
}, N = K.validators;
let _ = class {
  constructor(t) {
    this.defaults = t, this.interceptors = {
      request: new Se(),
      response: new Se()
    };
  }
  /**
   * Dispatch a request
   *
   * @param {String|Object} configOrUrl The config specific for this request (merged with this.defaults)
   * @param {?Object} config
   *
   * @returns {Promise} The Promise to be fulfilled
   */
  async request(t, n) {
    try {
      return await this._request(t, n);
    } catch (r) {
      if (r instanceof Error) {
        let s = {};
        Error.captureStackTrace ? Error.captureStackTrace(s) : s = new Error();
        const o = s.stack ? s.stack.replace(/^.+\n/, "") : "";
        try {
          r.stack ? o && !String(r.stack).endsWith(o.replace(/^.+\n.+\n/, "")) && (r.stack += `
` + o) : r.stack = o;
        } catch {
        }
      }
      throw r;
    }
  }
  _request(t, n) {
    typeof t == "string" ? (n = n || {}, n.url = t) : n = t || {}, n = F(this.defaults, n);
    const { transitional: r, paramsSerializer: s, headers: o } = n;
    r !== void 0 && K.assertOptions(r, {
      silentJSONParsing: N.transitional(N.boolean),
      forcedJSONParsing: N.transitional(N.boolean),
      clarifyTimeoutError: N.transitional(N.boolean)
    }, !1), s != null && (a.isFunction(s) ? n.paramsSerializer = {
      serialize: s
    } : K.assertOptions(s, {
      encode: N.function,
      serialize: N.function
    }, !0)), n.allowAbsoluteUrls !== void 0 || (this.defaults.allowAbsoluteUrls !== void 0 ? n.allowAbsoluteUrls = this.defaults.allowAbsoluteUrls : n.allowAbsoluteUrls = !0), K.assertOptions(n, {
      baseUrl: N.spelling("baseURL"),
      withXsrfToken: N.spelling("withXSRFToken")
    }, !0), n.method = (n.method || this.defaults.method || "get").toLowerCase();
    let i = o && a.merge(
      o.common,
      o[n.method]
    );
    o && a.forEach(
      ["delete", "get", "head", "post", "put", "patch", "common"],
      (p) => {
        delete o[p];
      }
    ), n.headers = T.concat(i, o);
    const c = [];
    let f = !0;
    this.interceptors.request.forEach(function(y) {
      typeof y.runWhen == "function" && y.runWhen(n) === !1 || (f = f && y.synchronous, c.unshift(y.fulfilled, y.rejected));
    });
    const u = [];
    this.interceptors.response.forEach(function(y) {
      u.push(y.fulfilled, y.rejected);
    });
    let l, d = 0, w;
    if (!f) {
      const p = [Pe.bind(this), void 0];
      for (p.unshift.apply(p, c), p.push.apply(p, u), w = p.length, l = Promise.resolve(n); d < w; )
        l = l.then(p[d++], p[d++]);
      return l;
    }
    w = c.length;
    let E = n;
    for (d = 0; d < w; ) {
      const p = c[d++], y = c[d++];
      try {
        E = p(E);
      } catch (h) {
        y.call(this, h);
        break;
      }
    }
    try {
      l = Pe.call(this, E);
    } catch (p) {
      return Promise.reject(p);
    }
    for (d = 0, w = u.length; d < w; )
      l = l.then(u[d++], u[d++]);
    return l;
  }
  getUri(t) {
    t = F(this.defaults, t);
    const n = We(t.baseURL, t.url, t.allowAbsoluteUrls);
    return $e(n, t.params, t.paramsSerializer);
  }
};
a.forEach(["delete", "get", "head", "options"], function(t) {
  _.prototype[t] = function(n, r) {
    return this.request(F(r || {}, {
      method: t,
      url: n,
      data: (r || {}).data
    }));
  };
});
a.forEach(["post", "put", "patch"], function(t) {
  function n(r) {
    return function(o, i, c) {
      return this.request(F(c || {}, {
        method: t,
        headers: r ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: o,
        data: i
      }));
    };
  }
  _.prototype[t] = n(), _.prototype[t + "Form"] = n(!0);
});
let Un = class et {
  constructor(t) {
    if (typeof t != "function")
      throw new TypeError("executor must be a function.");
    let n;
    this.promise = new Promise(function(o) {
      n = o;
    });
    const r = this;
    this.promise.then((s) => {
      if (!r._listeners) return;
      let o = r._listeners.length;
      for (; o-- > 0; )
        r._listeners[o](s);
      r._listeners = null;
    }), this.promise.then = (s) => {
      let o;
      const i = new Promise((c) => {
        r.subscribe(c), o = c;
      }).then(s);
      return i.cancel = function() {
        r.unsubscribe(o);
      }, i;
    }, t(function(o, i, c) {
      r.reason || (r.reason = new I(o, i, c), n(r.reason));
    });
  }
  /**
   * Throws a `CanceledError` if cancellation has been requested.
   */
  throwIfRequested() {
    if (this.reason)
      throw this.reason;
  }
  /**
   * Subscribe to the cancel signal
   */
  subscribe(t) {
    if (this.reason) {
      t(this.reason);
      return;
    }
    this._listeners ? this._listeners.push(t) : this._listeners = [t];
  }
  /**
   * Unsubscribe from the cancel signal
   */
  unsubscribe(t) {
    if (!this._listeners)
      return;
    const n = this._listeners.indexOf(t);
    n !== -1 && this._listeners.splice(n, 1);
  }
  toAbortSignal() {
    const t = new AbortController(), n = (r) => {
      t.abort(r);
    };
    return this.subscribe(n), t.signal.unsubscribe = () => this.unsubscribe(n), t.signal;
  }
  /**
   * Returns an object that contains a new `CancelToken` and a function that, when called,
   * cancels the `CancelToken`.
   */
  static source() {
    let t;
    return {
      token: new et(function(s) {
        t = s;
      }),
      cancel: t
    };
  }
};
function kn(e) {
  return function(n) {
    return e.apply(null, n);
  };
}
function _n(e) {
  return a.isObject(e) && e.isAxiosError === !0;
}
const de = {
  Continue: 100,
  SwitchingProtocols: 101,
  Processing: 102,
  EarlyHints: 103,
  Ok: 200,
  Created: 201,
  Accepted: 202,
  NonAuthoritativeInformation: 203,
  NoContent: 204,
  ResetContent: 205,
  PartialContent: 206,
  MultiStatus: 207,
  AlreadyReported: 208,
  ImUsed: 226,
  MultipleChoices: 300,
  MovedPermanently: 301,
  Found: 302,
  SeeOther: 303,
  NotModified: 304,
  UseProxy: 305,
  Unused: 306,
  TemporaryRedirect: 307,
  PermanentRedirect: 308,
  BadRequest: 400,
  Unauthorized: 401,
  PaymentRequired: 402,
  Forbidden: 403,
  NotFound: 404,
  MethodNotAllowed: 405,
  NotAcceptable: 406,
  ProxyAuthenticationRequired: 407,
  RequestTimeout: 408,
  Conflict: 409,
  Gone: 410,
  LengthRequired: 411,
  PreconditionFailed: 412,
  PayloadTooLarge: 413,
  UriTooLong: 414,
  UnsupportedMediaType: 415,
  RangeNotSatisfiable: 416,
  ExpectationFailed: 417,
  ImATeapot: 418,
  MisdirectedRequest: 421,
  UnprocessableEntity: 422,
  Locked: 423,
  FailedDependency: 424,
  TooEarly: 425,
  UpgradeRequired: 426,
  PreconditionRequired: 428,
  TooManyRequests: 429,
  RequestHeaderFieldsTooLarge: 431,
  UnavailableForLegalReasons: 451,
  InternalServerError: 500,
  NotImplemented: 501,
  BadGateway: 502,
  ServiceUnavailable: 503,
  GatewayTimeout: 504,
  HttpVersionNotSupported: 505,
  VariantAlsoNegotiates: 506,
  InsufficientStorage: 507,
  LoopDetected: 508,
  NotExtended: 510,
  NetworkAuthenticationRequired: 511
};
Object.entries(de).forEach(([e, t]) => {
  de[t] = e;
});
function tt(e) {
  const t = new _(e), n = ke(_.prototype.request, t);
  return a.extend(n, _.prototype, t, { allOwnKeys: !0 }), a.extend(n, t, null, { allOwnKeys: !0 }), n.create = function(s) {
    return tt(F(e, s));
  }, n;
}
const g = tt(M);
g.Axios = _;
g.CanceledError = I;
g.CancelToken = Un;
g.isCancel = Ke;
g.VERSION = Ye;
g.toFormData = Z;
g.AxiosError = m;
g.Cancel = g.CanceledError;
g.all = function(t) {
  return Promise.all(t);
};
g.spread = kn;
g.isAxiosError = _n;
g.mergeConfig = F;
g.AxiosHeaders = T;
g.formToJSON = (e) => Je(a.isHTMLForm(e) ? new FormData(e) : e);
g.getAdapter = Ze.getAdapter;
g.HttpStatusCode = de;
g.default = g;
const {
  Axios: Zn,
  AxiosError: Yn,
  CanceledError: er,
  isCancel: tr,
  CancelToken: nr,
  VERSION: rr,
  all: sr,
  Cancel: or,
  isAxiosError: ir,
  spread: ar,
  toFormData: cr,
  AxiosHeaders: ur,
  HttpStatusCode: lr,
  formToJSON: fr,
  getAdapter: dr,
  mergeConfig: pr
} = g, ye = "https://tracker-server.site";
async function j(e, t) {
  try {
    const n = B.getApiKey(), r = B.getUserId();
    if (!n)
      throw new Error("API KEY가 설정되지 않았습니다");
    const s = `${ye}${e}`, o = {
      Authorization: `Bearer ${n}`,
      "Content-Type": "application/json",
      "x-user-id": r
    };
    return (await g.post(s, t, {
      headers: o
    })).data;
  } catch (n) {
    throw console.error("api 요청 실패", n), n;
  }
}
function Fn() {
  let e = localStorage.getItem("userId");
  return e || (e = crypto.randomUUID(), localStorage.setItem("userId", e)), e;
}
function Bn() {
  const e = document.referrer.trim();
  j("/trackerSdk/pageInfo/referrer", {
    referrer: e === "" ? "direct" : e
  });
}
function oe() {
  const e = {
    url: window.location.href
  };
  j("/trackerSdk/pageInfo", e);
}
function Dn(e, t) {
  let n = null;
  return function(...r) {
    n && clearTimeout(n), n = setTimeout(() => {
      e(...r);
    }, t);
  };
}
const In = Dn(() => {
  jn();
}, 500);
function jn() {
  const e = document.documentElement.scrollTop, t = window.innerHeight, n = document.documentElement.scrollHeight, r = Math.floor(
    (e + t) / n * 100
  );
  let s = 0;
  r > 0 && r <= 25 ? s = 25 : r > 25 && r <= 50 ? s = 50 : r > 50 && r <= 75 ? s = 75 : r > 75 && r <= 100 && (s = 100);
  const o = {
    url: window.location.href,
    scrollDepth: s || 0
  };
  j("/trackerSdk/userAction/scrollDepth", o);
}
function qn() {
  if (performance.getEntriesByType(
    "navigation"
  )[0].type === "reload")
    return;
  const t = B.getUserId(), n = B.getApiKey();
  if (!t || !n) return;
  const r = JSON.stringify({ url: window.location.href, userId: t, apiKey: n });
  navigator.sendBeacon(
    `${ye}/trackerSdk/userAction/bounceRate/beacon`,
    r
  );
}
function Ue() {
  j("/trackerSdk/userConnection", {
    isOnline: !0
  });
}
function ie() {
  if (performance.getEntriesByType(
    "navigation"
  )[0].type === "reload")
    return;
  const t = B.getUserId(), n = B.getApiKey();
  if (!t || !n) return;
  const r = JSON.stringify({
    isOnline: !1,
    userId: t,
    apiKey: n
  });
  navigator.sendBeacon(
    `${ye}/trackerSdk/userConnection/beacon`,
    r
  );
}
function Hn() {
  const e = {
    browser: zn(),
    isMobile: Mn(),
    os: vn(),
    resolution: $n()
  };
  j("/trackerSdk/userDevice", e);
}
function vn() {
  const e = navigator.userAgent.toLowerCase();
  return e.includes("windows") ? "Windows" : e.includes("mac") ? "macOS" : e.includes("android") ? "Android" : e.includes("iphone") || e.includes("ipad") ? "iOS" : "Other";
}
function Mn() {
  const e = navigator.userAgent.toLowerCase();
  return /android|iphone|ipad/.test(e);
}
function $n() {
  return `${window.screen.width}x${window.screen.height}`;
}
function zn() {
  const e = navigator.userAgent.toLowerCase();
  return e.includes("whale") ? "NaverWhale" : e.includes("edg") ? "Edge" : e.includes("chrome") ? "Chrome" : e.includes("safari") ? "Safari" : e.includes("firefox") ? "Firefox" : e.includes("trident") || e.includes("msie") ? "InternetExplorer" : "Other";
}
async function Jn() {
  const t = {
    country: await Kn(),
    language: Vn()
  };
  j("/trackerSdk/userInfo", t);
}
async function Kn() {
  try {
    return (await g.get("https://ipapi.co/json/")).data.country_name || "unknownCountry";
  } catch (e) {
    return console.error("country 찾기 오류", e), "unknownCountry";
  }
}
function Vn() {
  return (window.navigator.language || "unknownLanguage").split("-")[1];
}
class Wn {
  constructor() {
    te(this, "apiKey", null);
    te(this, "userId", null);
  }
  async init(t) {
    if (t.trim() === "")
      throw new Error("api key가 없습니다");
    this.apiKey = t, this.userId = Fn(), window.addEventListener("load", async () => {
      sessionStorage.getItem("userinfoSent") || (await Jn(), sessionStorage.setItem("userInfoSent", "true"));
    }), window.addEventListener("load", async () => {
      sessionStorage.getItem("userDeviceSent") || (await Hn(), sessionStorage.setItem("userDeviceSent", "true"));
    }), window.addEventListener("load", oe), window.addEventListener("popstate", oe);
    const n = history.pushState.bind(history);
    history.pushState = (...r) => {
      n(...r), oe();
    }, window.addEventListener("load", async () => {
      sessionStorage.getItem("userPageReferrer") || (await Bn(), sessionStorage.setItem("userPageReferrer", "true"));
    }), window.addEventListener("load", Ue), document.addEventListener("visibilitychange", () => {
      document.visibilityState === "visible" ? Ue() : document.visibilityState === "hidden" && ie();
    }), window.addEventListener("pagehide", ie), window.addEventListener("beforeunload", ie), window.addEventListener("beforeunload", qn), window.addEventListener("scroll", In);
  }
  getApiKey() {
    return this.apiKey;
  }
  getUserId() {
    return this.userId;
  }
}
const B = new Wn();
export {
  B as tracker
};
