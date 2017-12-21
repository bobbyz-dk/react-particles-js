!function(e, t) {
    "object" == typeof exports && "object" == typeof module ? module.exports = t(require("react")) : "function" == typeof define && define.amd ? define([ "react" ], t) : "object" == typeof exports ? exports.Particles = t(require("react")) : e.Particles = t(e.React);
}("undefined" != typeof self ? self : this, function(e) {
    return function(e) {
        function t(i) {
            if (a[i]) return a[i].exports;
            var r = a[i] = {
                i: i,
                l: !1,
                exports: {}
            };
            return e[i].call(r.exports, r, r.exports, t), r.l = !0, r.exports;
        }
        var a = {};
        return t.m = e, t.c = a, t.d = function(e, a, i) {
            t.o(e, a) || Object.defineProperty(e, a, {
                configurable: !1,
                enumerable: !0,
                get: i
            });
        }, t.n = function(e) {
            var a = e && e.__esModule ? function() {
                return e.default;
            } : function() {
                return e;
            };
            return t.d(a, "a", a), a;
        }, t.o = function(e, t) {
            return Object.prototype.hasOwnProperty.call(e, t);
        }, t.p = "", t(t.s = 2);
    }([ function(e, t, a) {
        "use strict";
        function i(e) {
            for (var a in e) t.hasOwnProperty(a) || (t[a] = e[a]);
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), i(a(7)), i(a(8));
        var r = a(9);
        t.Interact = r.default;
        var n = a(10);
        t.Modes = n.default;
        var s = a(11);
        t.Particle = s.default;
        var o = a(12);
        t.ParticleManager = o.default;
        var c = a(13);
        t.ParticlesLibrary = c.default;
        var l = a(14);
        t.Vendors = l.default;
    }, function(t, a) {
        t.exports = e;
    }, function(e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = a(3);
        t.Particles = i.default, t.default = i.default;
    }, function(e, t, a) {
        "use strict";
        function i(e) {
            return (i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e;
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
            })(e);
        }
        function r(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
        }
        function n(e, t) {
            for (var a = 0; a < t.length; a++) {
                var i = t[a];
                i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), 
                Object.defineProperty(e, i.key, i);
            }
        }
        function s(e, t, a) {
            return t && n(e.prototype, t), a && n(e, a), e;
        }
        function o(e, t) {
            if (t && ("object" === i(t) || "function" == typeof t)) return t;
            if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e;
        }
        function c(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
        }
        function l(e) {
            if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e;
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var u = a(1), p = a(1), h = a(4), m = a(0), v = function(e) {
            function t(e) {
                var a;
                return r(this, t), a = o(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e)), 
                a.state = {
                    canvas: void 0,
                    library: void 0
                }, a.loadCanvas = a.loadCanvas.bind(l(a)), a;
            }
            return c(t, e), s(t, [ {
                key: "destroy",
                value: function() {
                    this.state.library.destroy();
                }
            }, {
                key: "loadCanvas",
                value: function(e) {
                    var t = this;
                    e && this.setState({
                        canvas: e
                    }, function() {
                        t.state.library.loadCanvas(t.state.canvas), t.state.library.start();
                    });
                }
            }, {
                key: "componentWillMount",
                value: function() {
                    this.setState({
                        library: new m.ParticlesLibrary(this.props.params)
                    });
                }
            }, {
                key: "componentWillUnmount",
                value: function() {
                    this.state.library.destroy(), this.setState({
                        library: void 0
                    });
                }
            }, {
                key: "render",
                value: function() {
                    var e = this.props, t = e.width, a = e.height, i = e.className, r = e.canvasClassName;
                    return u.createElement("div", {
                        className: i
                    }, u.createElement("canvas", {
                        ref: this.loadCanvas,
                        className: r,
                        style: m.deepExtend(h(this.props.style), {
                            width: t,
                            height: a
                        })
                    }));
                }
            } ]), t;
        }(p.PureComponent);
        v.defaultProps = {
            width: "100%",
            height: "100%",
            params: {},
            style: {}
        }, t.default = v;
    }, function(e, t, a) {
        (function(e, a) {
            function i(e, t) {
                return e.set(t[0], t[1]), e;
            }
            function r(e, t) {
                return e.add(t), e;
            }
            function n(e, t) {
                for (var a = -1, i = e ? e.length : 0; ++a < i && !1 !== t(e[a], a, e); ) ;
                return e;
            }
            function s(e, t) {
                for (var a = -1, i = t.length, r = e.length; ++a < i; ) e[r + a] = t[a];
                return e;
            }
            function o(e, t, a, i) {
                var r = -1, n = e ? e.length : 0;
                for (i && n && (a = e[++r]); ++r < n; ) a = t(a, e[r], r, e);
                return a;
            }
            function c(e, t) {
                for (var a = -1, i = Array(e); ++a < e; ) i[a] = t(a);
                return i;
            }
            function l(e, t) {
                return null == e ? void 0 : e[t];
            }
            function u(e) {
                var t = !1;
                if (null != e && "function" != typeof e.toString) try {
                    t = !!(e + "");
                } catch (e) {}
                return t;
            }
            function p(e) {
                var t = -1, a = Array(e.size);
                return e.forEach(function(e, i) {
                    a[++t] = [ i, e ];
                }), a;
            }
            function h(e, t) {
                return function(a) {
                    return e(t(a));
                };
            }
            function m(e) {
                var t = -1, a = Array(e.size);
                return e.forEach(function(e) {
                    a[++t] = e;
                }), a;
            }
            function v(e) {
                var t = -1, a = e ? e.length : 0;
                for (this.clear(); ++t < a; ) {
                    var i = e[t];
                    this.set(i[0], i[1]);
                }
            }
            function d() {
                this.__data__ = Lt ? Lt(null) : {};
            }
            function y(e) {
                return this.has(e) && delete this.__data__[e];
            }
            function b(e) {
                var t = this.__data__;
                if (Lt) {
                    var a = t[e];
                    return a === ze ? void 0 : a;
                }
                return bt.call(t, e) ? t[e] : void 0;
            }
            function f(e) {
                var t = this.__data__;
                return Lt ? void 0 !== t[e] : bt.call(t, e);
            }
            function _(e, t) {
                return this.__data__[e] = Lt && void 0 === t ? ze : t, this;
            }
            function g(e) {
                var t = -1, a = e ? e.length : 0;
                for (this.clear(); ++t < a; ) {
                    var i = e[t];
                    this.set(i[0], i[1]);
                }
            }
            function x() {
                this.__data__ = [];
            }
            function w(e) {
                var t = this.__data__, a = W(t, e);
                return !(a < 0) && (a == t.length - 1 ? t.pop() : Mt.call(t, a, 1), !0);
            }
            function k(e) {
                var t = this.__data__, a = W(t, e);
                return a < 0 ? void 0 : t[a][1];
            }
            function j(e) {
                return W(this.__data__, e) > -1;
            }
            function P(e, t) {
                var a = this.__data__, i = W(a, e);
                return i < 0 ? a.push([ e, t ]) : a[i][1] = t, this;
            }
            function M(e) {
                var t = -1, a = e ? e.length : 0;
                for (this.clear(); ++t < a; ) {
                    var i = e[t];
                    this.set(i[0], i[1]);
                }
            }
            function A() {
                this.__data__ = {
                    hash: new v(),
                    map: new (Ft || g)(),
                    string: new v()
                };
            }
            function O(e) {
                return se(this, e).delete(e);
            }
            function z(e) {
                return se(this, e).get(e);
            }
            function S(e) {
                return se(this, e).has(e);
            }
            function F(e, t) {
                return se(this, e).set(e, t), this;
            }
            function E(e) {
                this.__data__ = new g(e);
            }
            function I() {
                this.__data__ = new g();
            }
            function C(e) {
                return this.__data__.delete(e);
            }
            function L(e) {
                return this.__data__.get(e);
            }
            function T(e) {
                return this.__data__.has(e);
            }
            function R(e, t) {
                var a = this.__data__;
                if (a instanceof g) {
                    var i = a.__data__;
                    if (!Ft || i.length < Oe - 1) return i.push([ e, t ]), this;
                    a = this.__data__ = new M(i);
                }
                return a.set(e, t), this;
            }
            function D(e, t) {
                var a = Nt(e) || fe(e) ? c(e.length, String) : [], i = a.length, r = !!i;
                for (var n in e) !t && !bt.call(e, n) || r && ("length" == n || pe(n, i)) || a.push(n);
                return a;
            }
            function q(e, t, a) {
                var i = e[t];
                bt.call(e, t) && be(i, a) && (void 0 !== a || t in e) || (e[t] = a);
            }
            function W(e, t) {
                for (var a = e.length; a--; ) if (be(e[a][0], t)) return a;
                return -1;
            }
            function U(e, t) {
                return e && ie(t, Pe(t), e);
            }
            function B(e, t, a, i, r, s, o) {
                var c;
                if (i && (c = s ? i(e, r, s, o) : i(e)), void 0 !== c) return c;
                if (!ke(e)) return e;
                var l = Nt(e);
                if (l) {
                    if (c = ce(e), !t) return ae(e, c);
                } else {
                    var p = Xt(e), h = p == Ce || p == Le;
                    if (Yt(e)) return V(e, t);
                    if (p == De || p == Fe || h && !s) {
                        if (u(e)) return s ? e : {};
                        if (c = le(h ? {} : e), !t) return re(e, U(c, e));
                    } else {
                        if (!rt[p]) return s ? e : {};
                        c = ue(e, p, B, t);
                    }
                }
                o || (o = new E());
                var m = o.get(e);
                if (m) return m;
                if (o.set(e, c), !l) var v = a ? ne(e) : Pe(e);
                return n(v || e, function(r, n) {
                    v && (n = r, r = e[n]), q(c, n, B(r, t, a, i, n, e, o));
                }), c;
            }
            function $(e) {
                return ke(e) ? jt(e) : {};
            }
            function X(e, t, a) {
                var i = t(e);
                return Nt(e) ? i : s(i, a(e));
            }
            function N(e) {
                return ft.call(e);
            }
            function Y(e) {
                return !(!ke(e) || me(e)) && (xe(e) || u(e) ? _t : at).test(de(e));
            }
            function H(e) {
                if (!ve(e)) return zt(e);
                var t = [];
                for (var a in Object(e)) bt.call(e, a) && "constructor" != a && t.push(a);
                return t;
            }
            function V(e, t) {
                if (t) return e.slice();
                var a = new e.constructor(e.length);
                return e.copy(a), a;
            }
            function G(e) {
                var t = new e.constructor(e.byteLength);
                return new wt(t).set(new wt(e)), t;
            }
            function J(e, t) {
                var a = t ? G(e.buffer) : e.buffer;
                return new e.constructor(a, e.byteOffset, e.byteLength);
            }
            function K(e, t, a) {
                return o(t ? a(p(e), !0) : p(e), i, new e.constructor());
            }
            function Q(e) {
                var t = new e.constructor(e.source, tt.exec(e));
                return t.lastIndex = e.lastIndex, t;
            }
            function Z(e, t, a) {
                return o(t ? a(m(e), !0) : m(e), r, new e.constructor());
            }
            function ee(e) {
                return Bt ? Object(Bt.call(e)) : {};
            }
            function te(e, t) {
                var a = t ? G(e.buffer) : e.buffer;
                return new e.constructor(a, e.byteOffset, e.length);
            }
            function ae(e, t) {
                var a = -1, i = e.length;
                for (t || (t = Array(i)); ++a < i; ) t[a] = e[a];
                return t;
            }
            function ie(e, t, a, i) {
                a || (a = {});
                for (var r = -1, n = t.length; ++r < n; ) {
                    var s = t[r], o = i ? i(a[s], e[s], s, a, e) : void 0;
                    q(a, s, void 0 === o ? e[s] : o);
                }
                return a;
            }
            function re(e, t) {
                return ie(e, $t(e), t);
            }
            function ne(e) {
                return X(e, Pe, $t);
            }
            function se(e, t) {
                var a = e.__data__;
                return he(t) ? a["string" == typeof t ? "string" : "hash"] : a.map;
            }
            function oe(e, t) {
                var a = l(e, t);
                return Y(a) ? a : void 0;
            }
            function ce(e) {
                var t = e.length, a = e.constructor(t);
                return t && "string" == typeof e[0] && bt.call(e, "index") && (a.index = e.index, 
                a.input = e.input), a;
            }
            function le(e) {
                return "function" != typeof e.constructor || ve(e) ? {} : $(kt(e));
            }
            function ue(e, t, a, i) {
                var r = e.constructor;
                switch (t) {
                  case $e:
                    return G(e);

                  case Ee:
                  case Ie:
                    return new r(+e);

                  case Xe:
                    return J(e, i);

                  case Ne:
                  case Ye:
                  case He:
                  case Ve:
                  case Ge:
                  case Je:
                  case Ke:
                  case Qe:
                  case Ze:
                    return te(e, i);

                  case Te:
                    return K(e, i, a);

                  case Re:
                  case Ue:
                    return new r(e);

                  case qe:
                    return Q(e);

                  case We:
                    return Z(e, i, a);

                  case Be:
                    return ee(e);
                }
            }
            function pe(e, t) {
                return !!(t = null == t ? Se : t) && ("number" == typeof e || it.test(e)) && e > -1 && e % 1 == 0 && e < t;
            }
            function he(e) {
                var t = typeof e;
                return "string" == t || "number" == t || "symbol" == t || "boolean" == t ? "__proto__" !== e : null === e;
            }
            function me(e) {
                return !!dt && dt in e;
            }
            function ve(e) {
                var t = e && e.constructor;
                return e === ("function" == typeof t && t.prototype || mt);
            }
            function de(e) {
                if (null != e) {
                    try {
                        return yt.call(e);
                    } catch (e) {}
                    try {
                        return e + "";
                    } catch (e) {}
                }
                return "";
            }
            function ye(e) {
                return B(e, !0, !0);
            }
            function be(e, t) {
                return e === t || e !== e && t !== t;
            }
            function fe(e) {
                return ge(e) && bt.call(e, "callee") && (!Pt.call(e, "callee") || ft.call(e) == Fe);
            }
            function _e(e) {
                return null != e && we(e.length) && !xe(e);
            }
            function ge(e) {
                return je(e) && _e(e);
            }
            function xe(e) {
                var t = ke(e) ? ft.call(e) : "";
                return t == Ce || t == Le;
            }
            function we(e) {
                return "number" == typeof e && e > -1 && e % 1 == 0 && e <= Se;
            }
            function ke(e) {
                var t = typeof e;
                return !!e && ("object" == t || "function" == t);
            }
            function je(e) {
                return !!e && "object" == typeof e;
            }
            function Pe(e) {
                return _e(e) ? D(e) : H(e);
            }
            function Me() {
                return [];
            }
            function Ae() {
                return !1;
            }
            var Oe = 200, ze = "__lodash_hash_undefined__", Se = 9007199254740991, Fe = "[object Arguments]", Ee = "[object Boolean]", Ie = "[object Date]", Ce = "[object Function]", Le = "[object GeneratorFunction]", Te = "[object Map]", Re = "[object Number]", De = "[object Object]", qe = "[object RegExp]", We = "[object Set]", Ue = "[object String]", Be = "[object Symbol]", $e = "[object ArrayBuffer]", Xe = "[object DataView]", Ne = "[object Float32Array]", Ye = "[object Float64Array]", He = "[object Int8Array]", Ve = "[object Int16Array]", Ge = "[object Int32Array]", Je = "[object Uint8Array]", Ke = "[object Uint8ClampedArray]", Qe = "[object Uint16Array]", Ze = "[object Uint32Array]", et = /[\\^$.*+?()[\]{}|]/g, tt = /\w*$/, at = /^\[object .+?Constructor\]$/, it = /^(?:0|[1-9]\d*)$/, rt = {};
            rt[Fe] = rt["[object Array]"] = rt[$e] = rt[Xe] = rt[Ee] = rt[Ie] = rt[Ne] = rt[Ye] = rt[He] = rt[Ve] = rt[Ge] = rt[Te] = rt[Re] = rt[De] = rt[qe] = rt[We] = rt[Ue] = rt[Be] = rt[Je] = rt[Ke] = rt[Qe] = rt[Ze] = !0, 
            rt["[object Error]"] = rt[Ce] = rt["[object WeakMap]"] = !1;
            var nt = "object" == typeof e && e && e.Object === Object && e, st = "object" == typeof self && self && self.Object === Object && self, ot = nt || st || Function("return this")(), ct = "object" == typeof t && t && !t.nodeType && t, lt = ct && "object" == typeof a && a && !a.nodeType && a, ut = lt && lt.exports === ct, pt = Array.prototype, ht = Function.prototype, mt = Object.prototype, vt = ot["__core-js_shared__"], dt = function() {
                var e = /[^.]+$/.exec(vt && vt.keys && vt.keys.IE_PROTO || "");
                return e ? "Symbol(src)_1." + e : "";
            }(), yt = ht.toString, bt = mt.hasOwnProperty, ft = mt.toString, _t = RegExp("^" + yt.call(bt).replace(et, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"), gt = ut ? ot.Buffer : void 0, xt = ot.Symbol, wt = ot.Uint8Array, kt = h(Object.getPrototypeOf, Object), jt = Object.create, Pt = mt.propertyIsEnumerable, Mt = pt.splice, At = Object.getOwnPropertySymbols, Ot = gt ? gt.isBuffer : void 0, zt = h(Object.keys, Object), St = oe(ot, "DataView"), Ft = oe(ot, "Map"), Et = oe(ot, "Promise"), It = oe(ot, "Set"), Ct = oe(ot, "WeakMap"), Lt = oe(Object, "create"), Tt = de(St), Rt = de(Ft), Dt = de(Et), qt = de(It), Wt = de(Ct), Ut = xt ? xt.prototype : void 0, Bt = Ut ? Ut.valueOf : void 0;
            v.prototype.clear = d, v.prototype.delete = y, v.prototype.get = b, v.prototype.has = f, 
            v.prototype.set = _, g.prototype.clear = x, g.prototype.delete = w, g.prototype.get = k, 
            g.prototype.has = j, g.prototype.set = P, M.prototype.clear = A, M.prototype.delete = O, 
            M.prototype.get = z, M.prototype.has = S, M.prototype.set = F, E.prototype.clear = I, 
            E.prototype.delete = C, E.prototype.get = L, E.prototype.has = T, E.prototype.set = R;
            var $t = At ? h(At, Object) : Me, Xt = N;
            (St && Xt(new St(new ArrayBuffer(1))) != Xe || Ft && Xt(new Ft()) != Te || Et && "[object Promise]" != Xt(Et.resolve()) || It && Xt(new It()) != We || Ct && "[object WeakMap]" != Xt(new Ct())) && (Xt = function(e) {
                var t = ft.call(e), a = t == De ? e.constructor : void 0, i = a ? de(a) : void 0;
                if (i) switch (i) {
                  case Tt:
                    return Xe;

                  case Rt:
                    return Te;

                  case Dt:
                    return "[object Promise]";

                  case qt:
                    return We;

                  case Wt:
                    return "[object WeakMap]";
                }
                return t;
            });
            var Nt = Array.isArray, Yt = Ot || Ae;
            a.exports = ye;
        }).call(t, a(5), a(6)(e));
    }, function(e, t) {
        var a;
        a = function() {
            return this;
        }();
        try {
            a = a || Function("return this")() || (0, eval)("this");
        } catch (e) {
            "object" == typeof window && (a = window);
        }
        e.exports = a;
    }, function(e, t) {
        e.exports = function(e) {
            return e.webpackPolyfill || (e.deprecate = function() {}, e.paths = [], e.children || (e.children = []), 
            Object.defineProperty(e, "loaded", {
                enumerable: !0,
                get: function() {
                    return e.l;
                }
            }), Object.defineProperty(e, "id", {
                enumerable: !0,
                get: function() {
                    return e.i;
                }
            }), e.webpackPolyfill = 1), e;
        };
    }, function(e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.getDefaultParams = function() {
            return {
                particles: {
                    number: {
                        value: 40,
                        density: {
                            enable: !1,
                            value_area: 1200
                        }
                    },
                    color: {
                        value: "#FFF"
                    },
                    shape: {
                        type: "circle",
                        stroke: {
                            width: 0,
                            color: "#000000"
                        },
                        polygon: {
                            nb_sides: 5
                        },
                        image: {
                            src: "",
                            width: 100,
                            height: 100
                        }
                    },
                    opacity: {
                        value: .5,
                        random: !1,
                        anim: {
                            enable: !0,
                            speed: 1,
                            opacity_min: .1,
                            sync: !1
                        }
                    },
                    size: {
                        value: 1,
                        random: !1,
                        anim: {
                            enable: !1,
                            speed: 40,
                            size_min: 0,
                            sync: !1
                        }
                    },
                    line_linked: {
                        enable: !0,
                        distance: 150,
                        color: "#FFF",
                        opacity: .6,
                        width: 1,
                        shadow: {
                            enable: !1,
                            blur: 5,
                            color: "lime"
                        }
                    },
                    move: {
                        enable: !0,
                        speed: 3,
                        direction: "none",
                        random: !1,
                        straight: !1,
                        out_mode: "bounce",
                        bounce: !0,
                        attract: {
                            enable: !1,
                            rotateX: 3e3,
                            rotateY: 3e3
                        }
                    },
                    array: []
                },
                interactivity: {
                    detect_on: "canvas",
                    events: {
                        onhover: {
                            enable: !1,
                            mode: "grab"
                        },
                        onclick: {
                            enable: !1,
                            mode: "repulse"
                        },
                        resize: !0
                    },
                    modes: {
                        grab: {
                            distance: 180,
                            line_linked: {
                                opacity: .35
                            }
                        },
                        bubble: {
                            distance: 200,
                            size: 80,
                            duration: .4
                        },
                        repulse: {
                            distance: 100,
                            duration: 5
                        },
                        push: {
                            particles_nb: 4
                        },
                        remove: {
                            particles_nb: 2
                        }
                    },
                    mouse: {}
                },
                retina_detect: !0
            };
        };
    }, function(e, t, a) {
        "use strict";
        function i(e) {
            return (i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e;
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
            })(e);
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.hexToRgb = function(e) {
            var t = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
            e = e.replace(t, function(e, t, a, i) {
                return t + t + a + a + i + i;
            });
            var a = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);
            return a ? {
                r: parseInt(a[1], 16),
                g: parseInt(a[2], 16),
                b: parseInt(a[3], 16)
            } : null;
        }, t.clamp = function(e, t, a) {
            return Math.min(Math.max(e, t), a);
        }, t.isInArray = function(e, t) {
            return t.indexOf(e) > -1;
        }, t.deepExtend = function(e, a) {
            for (var i in a) a[i] && a[i].constructor && a[i].constructor === Object ? (e[i] = e[i] || {}, 
            t.deepExtend(e[i], a[i])) : e[i] = a[i];
            return e;
        }, t.getColor = function(e) {
            var a = {};
            if ("object" == i(e)) if (e instanceof Array) {
                var r = e[Math.floor(Math.random() * e.length)];
                a.rgb = t.hexToRgb(r);
            } else {
                var n = e.r, s = e.g, o = e.b;
                if (void 0 !== n && void 0 !== s && void 0 !== o) a.rgb = {
                    r: n,
                    g: s,
                    b: o
                }; else {
                    var c = e.h, l = e.s, u = e.l;
                    void 0 !== c && void 0 !== s && void 0 !== o && (a.hsl = {
                        h: c,
                        s: l,
                        l: u
                    });
                }
            } else "random" == e ? a.rgb = {
                r: Math.floor(255 * Math.random()) + 1,
                g: Math.floor(255 * Math.random()) + 1,
                b: Math.floor(255 * Math.random()) + 1
            } : "string" == typeof e && (a.rgb = t.hexToRgb(e));
            return a;
        };
    }, function(e, t, a) {
        "use strict";
        function i(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
        }
        function r(e, t) {
            for (var a = 0; a < t.length; a++) {
                var i = t[a];
                i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), 
                Object.defineProperty(e, i.key, i);
            }
        }
        function n(e, t, a) {
            return t && r(e.prototype, t), a && r(e, a), e;
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var s = function() {
            function e(t, a) {
                i(this, e), this.params = t, this.library = a;
            }
            return n(e, [ {
                key: "linkParticles",
                value: function(e, t) {
                    var a = e.x - t.x, i = e.y - t.y, r = Math.sqrt(a * a + i * i), n = this.library.canvas, s = this.params.particles.line_linked;
                    if (r <= this.params.particles.line_linked.distance) {
                        var o = this.params.particles.line_linked.opacity - r / (1 / this.params.particles.line_linked.opacity) / this.params.particles.line_linked.distance;
                        if (o > 0) {
                            var c = this.params.particles.line_linked.color_rgb_line, l = c.r, u = c.g, p = c.b;
                            n.ctx.save(), n.ctx.strokeStyle = "rgba( ".concat(l, ", ").concat(u, ", ").concat(p, ", ").concat(o, " )"), 
                            n.ctx.lineWidth = this.params.particles.line_linked.width, n.ctx.beginPath(), s.shadow.enable && (n.ctx.shadowBlur = s.shadow.blur, 
                            n.ctx.shadowColor = s.shadow.color), n.ctx.moveTo(e.x, e.y), n.ctx.lineTo(t.x, t.y), 
                            n.ctx.stroke(), n.ctx.closePath(), n.ctx.restore();
                        }
                    }
                }
            }, {
                key: "attractParticles",
                value: function(e, t) {
                    var a = e.x - t.x, i = e.y - t.y;
                    if (Math.sqrt(a * a + i * i) <= this.params.particles.line_linked.distance) {
                        var r = a / (1e3 * this.params.particles.move.attract.rotateX), n = i / (1e3 * this.params.particles.move.attract.rotateY);
                        e.vx -= r, e.vy -= n, t.vx += r, t.vy += n;
                    }
                }
            }, {
                key: "bounceParticles",
                value: function(e, t) {
                    var a = e.x - t.x, i = e.y - t.y;
                    Math.sqrt(a * a + i * i) <= e.radius + t.radius && (e.vx = -e.vx, e.vy = -e.vy, 
                    t.vx = -t.vx, t.vy = -t.vy);
                }
            } ]), e;
        }();
        t.default = s;
    }, function(e, t, a) {
        "use strict";
        function i(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
        }
        function r(e, t) {
            for (var a = 0; a < t.length; a++) {
                var i = t[a];
                i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), 
                Object.defineProperty(e, i.key, i);
            }
        }
        function n(e, t, a) {
            return t && r(e.prototype, t), a && r(e, a), e;
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var s = a(0), o = function() {
            function e(t, a) {
                i(this, e), this.params = t, this.library = a;
            }
            return n(e, [ {
                key: "pushParticles",
                value: function(e, t) {
                    var a = this.library, i = a.canvas, r = a.tmp, n = a.manager;
                    r.pushing = !0;
                    for (var o = 0; o < e; o++) this.params.particles.array.push(new s.Particle(this.params, this.library, this.params.particles.color, this.params.particles.opacity.value, {
                        x: t ? t.pos_x : Math.random() * i.width,
                        y: t ? t.pos_y : Math.random() * i.height
                    })), o == e - 1 && (this.params.particles.move.enable || n.particlesDraw(), r.pushing = !1);
                }
            }, {
                key: "removeParticles",
                value: function(e) {
                    var t = this.library.manager;
                    this.params.particles.array.splice(0, e), this.params.particles.move.enable || t.particlesDraw();
                }
            }, {
                key: "bubbleParticle",
                value: function(e) {
                    var t = this, a = this.library.tmp;
                    if (this.params.interactivity.events.onhover.enable && s.isInArray("bubble", this.params.interactivity.events.onhover.mode)) {
                        var i = e.x - this.params.interactivity.mouse.pos_x, r = e.y - this.params.interactivity.mouse.pos_y, n = Math.sqrt(i * i + r * r), o = 1 - n / this.params.interactivity.modes.bubble.distance, c = function() {
                            e.opacity_bubble = e.opacity, e.radius_bubble = e.radius;
                        };
                        if (n <= this.params.interactivity.modes.bubble.distance) {
                            if (o >= 0 && "mousemove" == this.params.interactivity.status) {
                                if (this.params.interactivity.modes.bubble.size != this.params.particles.size.value) if (this.params.interactivity.modes.bubble.size > this.params.particles.size.value) {
                                    var l = e.radius + this.params.interactivity.modes.bubble.size * o;
                                    l >= 0 && (e.radius_bubble = l);
                                } else {
                                    var u = e.radius - this.params.interactivity.modes.bubble.size, p = e.radius - u * o;
                                    e.radius_bubble = p > 0 ? p : 0;
                                }
                                if (this.params.interactivity.modes.bubble.opacity != this.params.particles.opacity.value) if (this.params.interactivity.modes.bubble.opacity > this.params.particles.opacity.value) {
                                    var h = this.params.interactivity.modes.bubble.opacity * o;
                                    h > e.opacity && h <= this.params.interactivity.modes.bubble.opacity && (e.opacity_bubble = h);
                                } else {
                                    var m = e.opacity - (this.params.particles.opacity.value - this.params.interactivity.modes.bubble.opacity) * o;
                                    m < e.opacity && m >= this.params.interactivity.modes.bubble.opacity && (e.opacity_bubble = m);
                                }
                            }
                        } else c();
                        "mouseleave" == this.params.interactivity.status && c();
                    } else if (this.params.interactivity.events.onclick.enable && s.isInArray("bubble", this.params.interactivity.events.onclick.mode) && a.bubble_clicking) {
                        var v = e.x - this.params.interactivity.mouse.click_pos_x, d = e.y - this.params.interactivity.mouse.click_pos_y, y = Math.sqrt(v * v + d * d), b = (new Date().getTime() - this.params.interactivity.mouse.click_time) / 1e3;
                        b > this.params.interactivity.modes.bubble.duration && (a.bubble_duration_end = !0), 
                        b > 2 * this.params.interactivity.modes.bubble.duration && (a.bubble_clicking = !1, 
                        a.bubble_duration_end = !1);
                        var f = function(i, r, n, s, o) {
                            if (i != r) if (a.bubble_duration_end) {
                                if (void 0 != n) {
                                    var c = s - b * (s - i) / t.params.interactivity.modes.bubble.duration, l = i - c, u = i + l;
                                    "size" == o && (e.radius_bubble = u), "opacity" == o && (e.opacity_bubble = u);
                                }
                            } else if (y <= t.params.interactivity.modes.bubble.distance) {
                                if ((void 0 != n ? n : s) != i) {
                                    var p = s - b * (s - i) / t.params.interactivity.modes.bubble.duration;
                                    "size" == o && (e.radius_bubble = p), "opacity" == o && (e.opacity_bubble = p);
                                }
                            } else "size" == o && (e.radius_bubble = void 0), "opacity" == o && (e.opacity_bubble = void 0);
                        };
                        a.bubble_clicking && (f(this.params.interactivity.modes.bubble.size, this.params.particles.size.value, e.radius_bubble, e.radius, "size"), 
                        f(this.params.interactivity.modes.bubble.opacity, this.params.particles.opacity.value, e.opacity_bubble, e.opacity, "opacity"));
                    }
                }
            }, {
                key: "repulseParticle",
                value: function(e) {
                    var t = this, a = this.library, i = a.canvas, r = a.tmp;
                    if (this.params.interactivity.events.onhover.enable && s.isInArray("repulse", this.params.interactivity.events.onhover.mode) && "mousemove" == this.params.interactivity.status) {
                        var n = e.x - this.params.interactivity.mouse.pos_x, o = e.y - this.params.interactivity.mouse.pos_y, c = Math.sqrt(n * n + o * o), l = {
                            x: n / c,
                            y: o / c
                        }, u = this.params.interactivity.modes.repulse.distance, p = s.clamp(1 / u * (-1 * Math.pow(c / u, 2) + 1) * u * 100, 0, 50), h = {
                            x: e.x + l.x * p,
                            y: e.y + l.y * p
                        };
                        "bounce" == this.params.particles.move.out_mode ? (h.x - e.radius > 0 && h.x + e.radius < i.width && (e.x = h.x), 
                        h.y - e.radius > 0 && h.y + e.radius < i.height && (e.y = h.y)) : (e.x = h.x, e.y = h.y);
                    } else if (this.params.interactivity.events.onclick.enable && s.isInArray("repulse", this.params.interactivity.events.onclick.mode)) if (r.repulse_finish || ++r.repulse_count == this.params.particles.array.length && (r.repulse_finish = !0), 
                    r.repulse_clicking) {
                        var m = Math.pow(this.params.interactivity.modes.repulse.distance / 6, 3), v = this.params.interactivity.mouse.click_pos_x - e.x, d = this.params.interactivity.mouse.click_pos_y - e.y, y = v * v + d * d, b = -m / y * 1;
                        y <= m && function() {
                            var a = Math.atan2(d, v);
                            if (e.vx = b * Math.cos(a), e.vy = b * Math.sin(a), "bounce" == t.params.particles.move.out_mode) {
                                var r = {
                                    x: e.x + e.vx,
                                    y: e.y + e.vy
                                };
                                r.x + e.radius > i.width ? e.vx = -e.vx : r.x - e.radius < 0 && (e.vx = -e.vx), 
                                r.y + e.radius > i.height ? e.vy = -e.vy : r.y - e.radius < 0 && (e.vy = -e.vy);
                            }
                        }();
                    } else 0 == r.repulse_clicking && (e.vx = e.vx_i, e.vy = e.vy_i);
                }
            }, {
                key: "grabParticle",
                value: function(e) {
                    var t = this.library.canvas, a = this.params, i = a.interactivity, r = a.particles;
                    if (i.events.onhover.enable && "mousemove" == i.status) {
                        var n = e.x - i.mouse.pos_x, s = e.y - i.mouse.pos_y, o = Math.sqrt(n * n + s * s);
                        if (o <= i.modes.grab.distance) {
                            var c = i.modes.grab, l = c.line_linked.opacity - o / (1 / c.line_linked.opacity) / c.distance;
                            if (l > 0) {
                                var u = r.line_linked.color_rgb_line, p = u.r, h = u.g, m = u.b;
                                t.ctx.strokeStyle = "rgba( ".concat(p, ", ").concat(h, ", ").concat(m, ", ").concat(l, " )"), 
                                t.ctx.lineWidth = r.line_linked.width, t.ctx.beginPath(), t.ctx.moveTo(e.x, e.y), 
                                t.ctx.lineTo(i.mouse.pos_x, i.mouse.pos_y), t.ctx.stroke(), t.ctx.closePath();
                            }
                        }
                    }
                }
            } ]), e;
        }();
        t.default = o;
    }, function(e, t, a) {
        "use strict";
        function i(e) {
            return (i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e;
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
            })(e);
        }
        function r(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
        }
        function n(e, t) {
            for (var a = 0; a < t.length; a++) {
                var i = t[a];
                i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), 
                Object.defineProperty(e, i.key, i);
            }
        }
        function s(e, t, a) {
            return t && n(e.prototype, t), a && n(e, a), e;
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var o = a(0), c = function() {
            function e(t, a, i, n, s) {
                r(this, e), this.params = t, this.library = a, this.setupSize(), this.setupPosition(s), 
                this.setupColor(i), this.setupOpacity(), this.setupAnimation();
            }
            return s(e, [ {
                key: "setupSize",
                value: function() {
                    this.radius = (this.params.particles.size.random ? Math.random() : 1) * this.params.particles.size.value, 
                    this.params.particles.size.anim.enable && (this.size_status = !1, this.vs = this.params.particles.size.anim.speed / 100, 
                    this.params.particles.size.anim.sync || (this.vs = this.vs * Math.random()));
                }
            }, {
                key: "setupPosition",
                value: function(e) {
                    var t = this.library, a = t.canvas, i = t.vendors;
                    this.x = e ? e.x : Math.random() * a.width, this.y = e ? e.y : Math.random() * a.height, 
                    this.x > a.width - 2 * this.radius ? this.x = this.x - this.radius : this.x < 2 * this.radius && (this.x = this.x + this.radius), 
                    this.y > a.height - 2 * this.radius ? this.y = this.y - this.radius : this.y < 2 * this.radius && (this.y = this.y + this.radius), 
                    this.params.particles.move.bounce && i.checkOverlap(this, e);
                }
            }, {
                key: "setupColor",
                value: function(e) {
                    this.color = o.getColor(e.value);
                }
            }, {
                key: "setupOpacity",
                value: function() {
                    this.opacity = (this.params.particles.opacity.random ? Math.random() : 1) * this.params.particles.opacity.value, 
                    this.params.particles.opacity.anim.enable && (this.opacity_status = !1, this.vo = this.params.particles.opacity.anim.speed / 100, 
                    this.params.particles.opacity.anim.sync || (this.vo = this.vo * Math.random()));
                }
            }, {
                key: "setupAnimation",
                value: function() {
                    var e = this.library, t = e.tmp, a = e.vendors, r = null;
                    switch (this.params.particles.move.direction) {
                      case "top":
                        r = {
                            x: 0,
                            y: -1
                        };
                        break;

                      case "top-right":
                        r = {
                            x: .5,
                            y: -.5
                        };
                        break;

                      case "right":
                        r = {
                            x: 1,
                            y: 0
                        };
                        break;

                      case "bottom-right":
                        r = {
                            x: .5,
                            y: .5
                        };
                        break;

                      case "bottom":
                        r = {
                            x: 0,
                            y: 1
                        };
                        break;

                      case "bottom-left":
                        r = {
                            x: -.5,
                            y: 1
                        };
                        break;

                      case "left":
                        r = {
                            x: -1,
                            y: 0
                        };
                        break;

                      case "top-left":
                        r = {
                            x: -.5,
                            y: -.5
                        };
                        break;

                      default:
                        r = {
                            x: 0,
                            y: 0
                        };
                    }
                    this.params.particles.move.straight ? (this.vx = r.x, this.vy = r.y, this.params.particles.move.random && (this.vx = this.vx * Math.random(), 
                    this.vy = this.vy * Math.random())) : (this.vx = r.x + Math.random() - .5, this.vy = r.y + Math.random() - .5), 
                    this.vx_i = this.vx, this.vy_i = this.vy;
                    var n = this.params.particles.shape.type;
                    if ("object" == i(n)) {
                        if (n instanceof Array) {
                            var s = n[Math.floor(Math.random() * n.length)];
                            this.shape = s;
                        }
                    } else this.shape = n;
                    if ("image" == this.shape) {
                        var o = this.params.particles.shape;
                        this.img = {
                            src: o.image.src,
                            ratio: o.image.width / o.image.height
                        }, this.img.ratio || (this.img.ratio = 1), "svg" == t.img_type && void 0 != t.source_svg && (a.createSvgImg(this), 
                        t.pushing && (this.img.loaded = !1));
                    }
                }
            }, {
                key: "draw",
                value: function() {
                    var e, t = this, a = this.library, i = a.canvas, r = a.tmp, n = a.vendors;
                    this.params.particles;
                    e = void 0 != this.radius_bubble ? this.radius_bubble : this.radius;
                    var s;
                    s = void 0 != this.opacity_bubble ? this.opacity_bubble : this.opacity;
                    var o;
                    if (this.color.rgb) {
                        var c = this.color.rgb, l = c.r, u = c.g, p = c.b;
                        o = "rgba( ".concat(l, ", ").concat(u, ", ").concat(p, ", ").concat(s, " )");
                    } else {
                        var h = this.color.hsl, m = h.h, v = h.s, d = h.l;
                        o = "hsla( ".concat(m, ", ").concat(v, ", ").concat(d, ", ").concat(s, " )");
                    }
                    switch (i.ctx.fillStyle = o, i.ctx.beginPath(), this.shape) {
                      case "circle":
                        i.ctx.arc(this.x, this.y, e, 0, 2 * Math.PI, !1);
                        break;

                      case "edge":
                        i.ctx.rect(this.x - e, this.y - e, 2 * e, 2 * e);
                        break;

                      case "triangle":
                        n.drawShape(i.ctx, this.x - e, this.y + e / 1.66, 2 * e, 3, 2);
                        break;

                      case "polygon":
                        n.drawShape(i.ctx, this.x - e / (this.params.particles.shape.polygon.nb_sides / 3.5), this.y - e / .76, 2.66 * e / (this.params.particles.shape.polygon.nb_sides / 3), this.params.particles.shape.polygon.nb_sides, 1);
                        break;

                      case "star":
                        n.drawShape(i.ctx, this.x - 2 * e / (this.params.particles.shape.polygon.nb_sides / 4), this.y - e / 1.52, 2 * e * 2.66 / (this.params.particles.shape.polygon.nb_sides / 3), this.params.particles.shape.polygon.nb_sides, 2);
                        break;

                      case "image":
                        var y;
                        y = "svg" == r.img_type ? this.img.obj : r.img_obj, y && function(a) {
                            i.ctx.drawImage(a, t.x - e, t.y - e, 2 * e, 2 * e / t.img.ratio);
                        }(y);
                    }
                    i.ctx.closePath(), this.params.particles.shape.stroke.width > 0 && (i.ctx.strokeStyle = this.params.particles.shape.stroke.color, 
                    i.ctx.lineWidth = this.params.particles.shape.stroke.width, i.ctx.stroke()), i.ctx.fill();
                }
            } ]), e;
        }();
        t.default = c;
    }, function(e, t, a) {
        "use strict";
        function i(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
        }
        function r(e, t) {
            for (var a = 0; a < t.length; a++) {
                var i = t[a];
                i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), 
                Object.defineProperty(e, i.key, i);
            }
        }
        function n(e, t, a) {
            return t && r(e.prototype, t), a && r(e, a), e;
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var s = a(0), o = function() {
            function e(t, a, r, n, s) {
                i(this, e), this.params = t, this.interact = a, this.modes = r, this.vendors = n, 
                this.library = s;
            }
            return n(e, [ {
                key: "particlesCreate",
                value: function() {
                    for (var e = this.params.particles, t = e.color, a = e.opacity, i = 0; i < this.params.particles.number.value; i++) this.params.particles.array.push(new s.Particle(this.params, this.library, t, a.value));
                }
            }, {
                key: "particlesUpdate",
                value: function() {
                    var e = this, t = this.library, a = t.canvas, i = t.interact, r = t.modes;
                    this.params.particles.array.forEach(function(t, n) {
                        if (e.params.particles.move.enable) {
                            var o = e.params.particles.move.speed / 2;
                            t.x += t.vx * o, t.y += t.vy * o;
                        }
                        e.params.particles.opacity.anim.enable && (1 == t.opacity_status ? (t.opacity >= e.params.particles.opacity.value && (t.opacity_status = !1), 
                        t.opacity += t.vo) : (t.opacity <= e.params.particles.opacity.anim.opacity_min && (t.opacity_status = !0), 
                        t.opacity -= t.vo), t.opacity < 0 && (t.opacity = 0)), e.params.particles.size.anim.enable && (1 == t.size_status ? (t.radius >= e.params.particles.size.value && (t.size_status = !1), 
                        t.radius += t.vs) : (t.radius <= e.params.particles.size.anim.size_min && (t.size_status = !0), 
                        t.radius -= t.vs), t.radius < 0 && (t.radius = 0));
                        var c;
                        switch (c = "bounce" == e.params.particles.move.out_mode ? {
                            x_left: t.radius,
                            x_right: a.width,
                            y_top: t.radius,
                            y_bottom: a.height
                        } : {
                            x_left: -t.radius,
                            x_right: a.width + t.radius,
                            y_top: -t.radius,
                            y_bottom: a.height + t.radius
                        }, t.x - t.radius > a.width ? (t.x = c.x_left, t.y = Math.random() * a.height) : t.x + t.radius < 0 && (t.x = c.x_right, 
                        t.y = Math.random() * a.height), t.y - t.radius > a.height ? (t.y = c.y_top, t.x = Math.random() * a.width) : t.y + t.radius < 0 && (t.y = c.y_bottom, 
                        t.x = Math.random() * a.width), e.params.particles.move.out_mode) {
                          case "bounce":
                            t.x + t.radius > a.width ? t.vx = -t.vx : t.x - t.radius < 0 && (t.vx = -t.vx), 
                            t.y + t.radius > a.height ? t.vy = -t.vy : t.y - t.radius < 0 && (t.vy = -t.vy);
                        }
                        if (s.isInArray("grab", e.params.interactivity.events.onhover.mode) && r.grabParticle(t), 
                        (s.isInArray("bubble", e.params.interactivity.events.onhover.mode) || s.isInArray("bubble", e.params.interactivity.events.onclick.mode)) && r.bubbleParticle(t), 
                        (s.isInArray("repulse", e.params.interactivity.events.onhover.mode) || s.isInArray("repulse", e.params.interactivity.events.onclick.mode)) && r.repulseParticle(t), 
                        e.params.particles.line_linked.enable || e.params.particles.move.attract.enable) for (var l = n + 1; l < e.params.particles.array.length; l++) {
                            var u = e.params.particles.array[l];
                            e.params.particles.line_linked.enable && i.linkParticles(t, u), e.params.particles.move.attract.enable && i.attractParticles(t, u), 
                            e.params.particles.move.bounce && i.bounceParticles(t, u);
                        }
                    });
                }
            }, {
                key: "particlesDraw",
                value: function() {
                    var e = this.library, t = e.canvas, a = e.manager;
                    t.ctx.clearRect(0, 0, t.width, t.height), a.particlesUpdate(), this.params.particles.array.forEach(function(e) {
                        e.draw();
                    });
                }
            }, {
                key: "particlesEmpty",
                value: function() {
                    this.params.particles.array = [];
                }
            }, {
                key: "particlesRefresh",
                value: function() {
                    var e = this.library, t = e.tmp;
                    e.vendors;
                    cancelAnimationFrame(t.checkAnimFrame), cancelAnimationFrame(t.drawAnimFrame), t.source_svg = void 0, 
                    t.img_obj = void 0, t.count_svg = 0, this.particlesEmpty(), this.library.canvasClear(), 
                    this.library.start();
                }
            } ]), e;
        }();
        t.default = o;
    }, function(e, t, a) {
        "use strict";
        function i(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
        }
        function r(e, t) {
            for (var a = 0; a < t.length; a++) {
                var i = t[a];
                i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), 
                Object.defineProperty(e, i.key, i);
            }
        }
        function n(e, t, a) {
            return t && r(e.prototype, t), a && r(e, a), e;
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var s = a(0), o = function() {
            function e(t) {
                i(this, e), this.tmp = {}, this.tmp = {}, this.loadParameters(t), this.extendParams(), 
                this.interact = new s.Interact(this.params, this), this.modes = new s.Modes(this.params, this), 
                this.vendors = new s.Vendors(this.params, this), this.manager = new s.ParticleManager(this.params, this.interact, this.modes, this.vendors, this);
            }
            return n(e, [ {
                key: "loadParameters",
                value: function(e) {
                    var t = s.getDefaultParams(), a = s.deepExtend(t, e);
                    this.params = a;
                }
            }, {
                key: "loadCanvas",
                value: function(e) {
                    this.canvas = {
                        element: e,
                        width: e.offsetWidth,
                        height: e.offsetHeight
                    };
                }
            }, {
                key: "start",
                value: function() {
                    var e = this.vendors;
                    e.eventsListeners(), e.start();
                }
            }, {
                key: "destroy",
                value: function() {
                    var e = this.tmp;
                    this.detachListeners(), this.vendors.detachListeners(), cancelAnimationFrame(e.drawAnimFrame), 
                    this.canvasClear();
                }
            }, {
                key: "detachListeners",
                value: function() {
                    window.removeEventListener("resize", this.onWindowResize);
                }
            }, {
                key: "extendParams",
                value: function() {
                    this.extendTmpDefinition(), this.onWindowResize = this.onWindowResize.bind(this);
                }
            }, {
                key: "extendTmpDefinition",
                value: function() {
                    this.tmp.obj = {
                        size_value: this.params.particles.size.value,
                        size_anim_speed: this.params.particles.size.anim.speed,
                        move_speed: this.params.particles.move.speed,
                        line_linked_distance: this.params.particles.line_linked.distance,
                        line_linked_width: this.params.particles.line_linked.width,
                        mode_grab_distance: this.params.interactivity.modes.grab.distance,
                        mode_bubble_distance: this.params.interactivity.modes.bubble.distance,
                        mode_bubble_size: this.params.interactivity.modes.bubble.size,
                        mode_repulse_distance: this.params.interactivity.modes.repulse.distance
                    };
                }
            }, {
                key: "retinaInit",
                value: function() {
                    var e = this.canvas, t = this.tmp;
                    this.params.retina_detect && window.devicePixelRatio > 1 ? (e.pxratio = window.devicePixelRatio, 
                    t.retina = !0, e.width = e.element.offsetWidth * e.pxratio, e.height = e.element.offsetHeight * e.pxratio, 
                    this.params.particles.size.value = t.obj.size_value * e.pxratio, this.params.particles.size.anim.speed = t.obj.size_anim_speed * e.pxratio, 
                    this.params.particles.move.speed = t.obj.move_speed * e.pxratio, this.params.particles.line_linked.distance = t.obj.line_linked_distance * e.pxratio, 
                    this.params.interactivity.modes.grab.distance = t.obj.mode_grab_distance * e.pxratio, 
                    this.params.interactivity.modes.bubble.distance = t.obj.mode_bubble_distance * e.pxratio, 
                    this.params.particles.line_linked.width = t.obj.line_linked_width * e.pxratio, this.params.interactivity.modes.bubble.size = t.obj.mode_bubble_size * e.pxratio, 
                    this.params.interactivity.modes.repulse.distance = t.obj.mode_repulse_distance * e.pxratio) : (e.pxratio = 1, 
                    t.retina = !1);
                }
            }, {
                key: "canvasInit",
                value: function() {
                    var e = this.canvas;
                    e.ctx = e.element.getContext("2d");
                }
            }, {
                key: "canvasSize",
                value: function() {
                    var e = this.canvas;
                    e.element.width = e.width, e.element.height = e.height, this.params && this.params.interactivity.events.resize && window.addEventListener("resize", this.onWindowResize);
                }
            }, {
                key: "canvasPaint",
                value: function() {
                    var e = this.canvas;
                    e && e.ctx.fillRect(0, 0, e.width, e.height);
                }
            }, {
                key: "canvasClear",
                value: function() {
                    var e = this.canvas;
                    e && e.ctx.clearRect(0, 0, e.width, e.height);
                }
            }, {
                key: "onWindowResize",
                value: function() {
                    var e = this.canvas, t = this.manager, a = this.tmp, i = this.vendors;
                    e.width = e.element.offsetWidth, e.height = e.element.offsetHeight, a.retina && (e.width *= e.pxratio, 
                    e.height *= e.pxratio), e.element.width = e.width, e.element.height = e.height, 
                    this.params.particles.move.enable || (t.particlesEmpty(), t.particlesCreate(), t.particlesDraw(), 
                    i.densityAutoParticles()), i.densityAutoParticles();
                }
            } ]), e;
        }();
        t.default = o;
    }, function(e, t, a) {
        "use strict";
        function i(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
        }
        function r(e, t) {
            for (var a = 0; a < t.length; a++) {
                var i = t[a];
                i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), 
                Object.defineProperty(e, i.key, i);
            }
        }
        function n(e, t, a) {
            return t && r(e.prototype, t), a && r(e, a), e;
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var s = a(0), o = function() {
            function e(t, a) {
                i(this, e), this.params = t, this.library = a, this.onMouseMove = this.onMouseMove.bind(this), 
                this.onMouseLeave = this.onMouseLeave.bind(this), this.onClick = this.onClick.bind(this);
            }
            return n(e, [ {
                key: "eventsListeners",
                value: function() {
                    var e = this.params.interactivity, t = this.library.canvas;
                    "window" == e.detect_on ? e.el = window : e.el = t.element, (e.events.onhover.enable || e.events.onclick.enable) && (e.el.addEventListener("mousemove", this.onMouseMove), 
                    e.el.addEventListener("mouseleave", this.onMouseLeave)), e.events.onclick.enable && e.el.addEventListener("click", this.onClick);
                }
            }, {
                key: "detachListeners",
                value: function() {
                    var e = this.params.interactivity, t = this.library.tmp;
                    e.el && ((e.events.onhover.enable || e.events.onclick.enable) && (e.el.removeEventListener("mousemove", this.onMouseMove), 
                    e.el.addEventListener("mouseleave", this.onMouseLeave)), e.events.onclick.enable && e.el.addEventListener("click", this.onClick)), 
                    window.cancelAnimationFrame(t.drawAnimFrame);
                }
            }, {
                key: "onMouseMove",
                value: function(e) {
                    var t, a = this.library, i = a.canvas, r = a.tmp, n = this.params.interactivity;
                    t = n.el == window ? {
                        x: e.clientX,
                        y: e.clientY
                    } : {
                        x: e.offsetX || e.clientX,
                        y: e.offsetY || e.clientY
                    }, n.mouse.pos_x = t.x, n.mouse.pos_y = t.y, r.retina && (n.mouse.pos_x *= i.pxratio, 
                    n.mouse.pos_y *= i.pxratio), n.status = "mousemove";
                }
            }, {
                key: "onMouseLeave",
                value: function(e) {
                    var t = this.params.interactivity;
                    t.mouse.pos_x = null, t.mouse.pos_y = null, t.status = "mouseleave";
                }
            }, {
                key: "onClick",
                value: function() {
                    var e = this.library, t = e.modes, a = e.tmp, i = this.params, r = i.interactivity, n = i.particles;
                    if (r.mouse.click_pos_x = r.mouse.pos_x, r.mouse.click_pos_y = r.mouse.pos_y, r.mouse.click_time = new Date().getTime(), 
                    r.events.onclick.enable) switch (r.events.onclick.mode) {
                      case "push":
                        n.move.enable ? t.pushParticles(r.modes.push.particles_nb, r.mouse) : 1 == r.modes.push.particles_nb ? t.pushParticles(r.modes.push.particles_nb, r.mouse) : r.modes.push.particles_nb > 1 && t.pushParticles(r.modes.push.particles_nb);
                        break;

                      case "remove":
                        t.removeParticles(r.modes.remove.particles_nb);
                        break;

                      case "bubble":
                        a.bubble_clicking = !0;
                        break;

                      case "repulse":
                        a.repulse_clicking = !0, a.repulse_count = 0, a.repulse_finish = !1, setTimeout(function() {
                            a.repulse_clicking = !1;
                        }, 1e3 * r.modes.repulse.duration);
                    }
                }
            }, {
                key: "densityAutoParticles",
                value: function() {
                    var e = this.library, t = e.canvas, a = e.modes, i = e.tmp, r = this.params.particles;
                    if (r.number.density.enable) {
                        var n = t.element.width * t.element.height / 1e3;
                        i.retina && (n = n / t.pxratio * 2);
                        var s = n * r.number.value / r.number.density.value_area, o = r.array.length - s;
                        o < 0 ? a.pushParticles(Math.abs(o)) : a.removeParticles(o);
                    }
                }
            }, {
                key: "checkOverlap",
                value: function(e, t) {
                    var a = this.library, i = a.canvas, r = a.vendors;
                    this.params.particles.array.forEach(function(a) {
                        var n = a, s = e.x - n.x, o = e.y - n.y;
                        Math.sqrt(s * s + o * o) <= e.radius + n.radius && (e.x = t ? t.x : Math.random() * i.width, 
                        e.y = t ? t.y : Math.random() * i.height, r.checkOverlap(e));
                    });
                }
            }, {
                key: "createSvgImg",
                value: function(e) {
                    var t = this.library.tmp, a = t.source_svg, i = /#([0-9A-F]{3,6})/gi, r = a.replace(i, function(t, a, i, r) {
                        var n;
                        if (e.color.rgb) {
                            var s = e.color.rgb, o = s.r, c = s.g, l = s.b;
                            n = "rgba( ".concat(o, ", ").concat(c, ", ").concat(l, ", ").concat(e.opacity, " )");
                        } else {
                            var u = e.color.hsl, p = u.h, h = u.s, m = u.l;
                            n = "rgba( ".concat(p, ", ").concat(h, ", ").concat(m, ", ").concat(e.opacity, " )");
                        }
                        return n;
                    }), n = new Blob([ r ], {
                        type: "image/svg+xml;charset=utf-8"
                    }), s = window.URL || window, o = s.createObjectURL(n), c = new Image();
                    c.addEventListener("load", function() {
                        e.img.obj = c, e.img.loaded = !0, s.revokeObjectURL(o), t.count_svg++;
                    }), c.src = o;
                }
            }, {
                key: "destroy",
                value: function() {
                    var e = this.library, t = e.canvas, a = e.tmp;
                    cancelAnimationFrame(a.drawAnimFrame), t.element.remove();
                }
            }, {
                key: "drawShape",
                value: function(e, t, a, i, r, n) {
                    var s = r * n, o = r / n, c = 180 * (o - 2) / o, l = Math.PI - Math.PI * c / 180;
                    e.save(), e.beginPath(), e.translate(t, a), e.moveTo(0, 0);
                    for (var u = 0; u < s; u++) e.lineTo(i, 0), e.translate(i, 0), e.rotate(l);
                    e.fill(), e.restore();
                }
            }, {
                key: "exportImg",
                value: function() {
                    var e = this.library.canvas;
                    window.open(e.element.toDataURL("image/png"), "_blank");
                }
            }, {
                key: "loadImg",
                value: function(e) {
                    var t = this.library, a = t.tmp, i = t.vendors, r = this.params.particles;
                    if (a.img_error = void 0, "" != r.shape.image.src) if ("svg" == e) {
                        var n = new XMLHttpRequest();
                        n.open("GET", r.shape.image.src), n.onreadystatechange = function(e) {
                            4 == n.readyState && (200 == n.status ? (a.source_svg = e.currentTarget.response, 
                            i.checkBeforeDraw()) : (console.log("Error react-particles-js - image not found"), 
                            a.img_error = !0));
                        }, n.send();
                    } else {
                        var s = new Image();
                        s.addEventListener("load", function() {
                            a.img_obj = s, i.checkBeforeDraw();
                        }), s.src = r.shape.image.src;
                    } else console.log("Error react-particles-js - no image.src"), a.img_error = !0;
                }
            }, {
                key: "draw",
                value: function() {
                    var e = this.library, t = e.tmp, a = e.manager, i = e.vendors, r = this.params.particles;
                    "image" == r.shape.type ? "svg" == t.img_type ? t.count_svg >= r.number.value ? (a.particlesDraw(), 
                    r.move.enable ? t.drawAnimFrame = requestAnimationFrame(i.draw.bind(i)) : cancelAnimationFrame(t.drawAnimFrame)) : t.img_error || (t.drawAnimFrame = requestAnimationFrame(i.draw.bind(i))) : void 0 != t.img_obj ? (a.particlesDraw(), 
                    r.move.enable ? t.drawAnimFrame = requestAnimationFrame(i.draw.bind(i)) : cancelAnimationFrame(t.drawAnimFrame)) : t.img_error || (t.drawAnimFrame = requestAnimationFrame(i.draw.bind(i))) : (a.particlesDraw(), 
                    r.move.enable ? t.drawAnimFrame = requestAnimationFrame(i.draw.bind(i)) : cancelAnimationFrame(t.drawAnimFrame));
                }
            }, {
                key: "checkBeforeDraw",
                value: function() {
                    var e = this.library, t = e.tmp, a = e.vendors;
                    "image" == this.params.particles.shape.type ? "svg" == t.img_type && void 0 == t.source_svg ? t.checkAnimFrame = requestAnimationFrame(void 0) : (cancelAnimationFrame(t.checkAnimFrame), 
                    t.img_error || (a.init(), a.draw())) : (a.init(), a.draw());
                }
            }, {
                key: "init",
                value: function() {
                    var e = this.library, t = e.manager, a = e.vendors, i = this.params.particles;
                    e.retinaInit(), e.canvasInit(), e.canvasSize(), t.particlesCreate(), a.densityAutoParticles(), 
                    i.line_linked.color_rgb_line = s.hexToRgb(i.line_linked.color);
                }
            }, {
                key: "start",
                value: function() {
                    var e = this.library, t = e.tmp, a = e.vendors, i = this.params.particles;
                    s.isInArray("image", i.shape.type) ? (t.img_type = i.shape.image.src.substr(i.shape.image.src.length - 3), 
                    a.loadImg(t.img_type)) : a.checkBeforeDraw();
                }
            } ]), e;
        }();
        t.default = o;
    } ]);
});