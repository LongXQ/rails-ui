import {LitElement, css, html} from "lit";

// faceplate-partial

function v(e, t, i = !0) {
    return new CustomEvent(e, {
        composed: !0,
        bubbles: i,
        cancelable: !0,
        detail: t
    })
}

const pe = {
    rootMargin: "200px"
}, he = new Map;

function me(e, t) {
    return !he.has(e) && t && he.set(e, function (e) {
        return new IntersectionObserver((e => {
                for (const t of e) {
                    const e = t.target
                        , i = t.isIntersecting ? v("faceplate-enter", t, !1) : v("faceplate-leave", t, !1);
                    e.dispatchEvent(i)
                }
            }
        ), e)
    }(t)),
        he.get(e)
}

class ge {
    constructor(e = pe) {
        this._observer = me(JSON.stringify(e), e)
    }

    observe(e) {
        this._observer.observe(e)
    }

    unobserve(e) {
        this._observer.unobserve(e)
    }
}

class g {
    constructor(e, t) {
        this._events = new Map,
            this._isConnected = !1,
            e.addController(this),
            this._host = e,
            this._getTarget = t
    }

    _getEventTarget() {
        return this._getTarget ? this._getTarget() : this._host
    }

    hostConnected() {
        const e = this._getEventTarget();
        for (const [t, i] of this._events)
            Array.isArray(i) ? e.addEventListener(t, i[0], i[1]) : e.addEventListener(t, i);
        this._isConnected = !0
    }

    hostDisconnected() {
        const e = this._getEventTarget();
        for (const [t, i] of this._events)
            Array.isArray(i) ? e.removeEventListener(t, i[0], i[1]) : e.removeEventListener(t, i);
        this._isConnected = !1
    }

    define(e, t, i) {
        const o = e.toString();
        if (this._events.has(o))
            throw new Error(`Event ${o} already defined.`);
        if (i ? this._events.set(o, [t, i]) : this._events.set(o, t),
            this._isConnected) {
            const e = this._getEventTarget();
            e && e.addEventListener(o, t, i)
        }
        return t
    }
}

var Ee, ve, Se, be, ye, Te, Ie;
!function (e) {
    e[e.emergency = 0] = "emergency",
        e[e.alert = 1] = "alert",
        e[e.critical = 2] = "critical",
        e[e.error = 3] = "error",
        e[e.warning = 4] = "warning",
        e[e.notice = 5] = "notice",
        e[e.info = 6] = "info",
        e[e.success = 7] = "success",
        e[e.debug = 8] = "debug",
        e[e.none = 9] = "none"
}(Ee || (Ee = {})),
    function (e) {
        e.Programmatic = "programmatic",
            e.Eager = "eager",
            e.Action = "action",
            e.Intent = "intent",
            e.Lazy = "lazy",
            e.Preload = "preload"
    }(ve || (ve = {})),
    function (e) {
        e.Once = "once",
            e.Always = "always"
    }(Se || (Se = {})),
    function (e) {
        e.Get = "get",
            e.Post = "post",
            e.Dialog = "dialog",
            e.Log = "log"
    }(be || (be = {})),
    function (e) {
        e.Append = "append",
            e.Prepend = "prepend",
            e.After = "after",
            e.Before = "before",
            e.Replace = "replace",
            e.Contents = "contents"
    }(ye || (ye = {})),
    function (e) {
        e.XPromo = "xpromo"
    }(Te || (Te = {}));


function Re(e, t) {
    var i;
    e.removeController(t),
    null === (i = t.hostDisconnected) || void 0 === i || i.call(t)
}

function Pe(e, t, i, o) {
    const n = new g(e, (() => t));
    return n.define("click", (e => i(e)), o),
        n.define("mouseup", (e => {
                1 === e.button && i(e)
            }
        ), o),
        n.define("keydown", (e => {
                "Enter" !== e.code && "Space" !== e.code || i(e)
            }
        ), o),
        n
}

function Ne(e, t, i, o) {
    const n = new g(e, (() => t));
    let r;
    const a = () => r = r && window.clearTimeout(r)
        , s = e => r = a() || window.setTimeout((() => i(e)), 300);
    return n.define("focusin", s, o),
        n.define("mouseenter", s, o),
        n.define("touchstart", s, o),
        n.define("focusout", a, o),
        n.define("mouseleave", a, o),
        n.define("touchend", a, o),
        n.define("touchcancel", a, o),
        e.addController(n),
        n
}

class we {
    constructor(e) {
        this._isConnected = !1,
            this._host = e,
            e.addController(this)
    }

    addController(e) {
        var t, i;
        (null !== (t = this._controllers) && void 0 !== t ? t : this._controllers = []).push(e),
        this._isConnected && (null === (i = e.hostConnected) || void 0 === i || i.call(e))
    }

    removeController(e) {
        var t;
        null === (t = this._controllers) || void 0 === t || t.splice(this._controllers.indexOf(e) >>> 0, 1)
    }

    requestUpdate() {
        this._host.requestUpdate()
    }

    get updateComplete() {
        return this._host.updateComplete
    }

    hostConnected() {
        var e;
        null === (e = this._controllers) || void 0 === e || e.forEach((e => e.hostConnected && e.hostConnected())),
            this._isConnected = !0
    }

    hostDisconnected() {
        var e;
        this._isConnected = !1,
        null === (e = this._controllers) || void 0 === e || e.forEach((e => e.hostDisconnected && e.hostDisconnected()))
    }

    hostUpdate() {
        var e;
        null === (e = this._controllers) || void 0 === e || e.forEach((e => e.hostUpdate && e.hostUpdate()))
    }

    hostUpdated() {
        var e;
        null === (e = this._controllers) || void 0 === e || e.forEach((e => e.hostUpdated && e.hostUpdated()))
    }
}

function Oe(e) {
    return !!e && "object" == typeof e && !Array.isArray(e)
}

function De(e, t) {
    let i = null;
    try {
        const o = e.dataset[t];
        if (o) {
            const e = JSON.parse(o);
            Oe(e) && (i = e)
        }
    } catch (e) {
    }
    return i
}

class Me {
    constructor(e, t, i) {
        this._target = t;
        let o = i;
        const n = De(t, "faceplateObserverConfig");
        n && (o = i ? Object.assign(Object.assign({}, i), n) : n),
            this._observer = new ge(o),
            e.addController(this)
    }

    hostConnected() {
        this._observer.observe(this._target)
    }

    hostDisconnected() {
        this._observer.unobserve(this._target)
    }
}

function ke(e, t, i, o) {
    const n = new we(e);
    new Me(n, t, o);
    return new g(n, (() => t)).define("faceplate-enter", (e => i(e))),
        n
}

class Le {
    constructor() {
        let e, t;
        this.promise = new Promise(((i, o) => {
                e = i,
                    t = o
            }
        )),
            this.resolve = e,
            this.reject = t
    }
}

const Ue = new Map;

function Fe(e) {
    return Ue.has(e) || Ue.set(e, new Le),
        Ue.get(e)
}

function Ve(e) {
    return Fe(e).promise
}

const Be = new Map
    , xe = () => {
        throw new Error("Class extending LoaderElement not configured!")
    }
;

function Ge(e, t) {
    Be.set(e, t)
}

export class PartialBase extends LitElement {
    static get properties() {
        return {
            readyMark: {type: String, attribute: 'readymark'},
            setMark: {type: String, attribute: 'setmark'},
            goMark: {type: String, attribute: 'gomark'}
        }
    }

    constructor() {
        super(),
            this.readyMark = "",
            this.setMark = "",
            this.goMark = "",
            this.src = "",
            this.loading = ve.Lazy,
            this._isLoading = !1,
            this._load = async () => {
                if (!this.isLoading)
                    try {
                        this.isLoading = !0,
                        this._ctrl && (this._ctrl = Re(this, this._ctrl));
                        const e = await (Be.get(this.constructor) || xe)
                            , t = e instanceof Function ? e : e.loader
                            , i = e instanceof Function ? void 0 : e.runner
                            , o = v("faceplate-load-start");
                        let n, r;
                        this.dispatchEvent(o),
                        t && (n = await t(this, this.src)),
                        this.setMark && Fe(this.setMark).resolve(),
                        this.goMark && (await Ve(this.goMark)),
                        i && (r = await i(this, n));
                        const a = v("faceplate-load", {
                            resource: (null == r ? void 0 : r.src) || this.src,
                            src: this.src
                        });
                        this.dispatchEvent(a)
                    } catch (e) {
                        const t = v("faceplate-error", e);
                        this.dispatchEvent(t)
                    } finally {
                        this.isLoading = !1
                    }
            }
    }

    get isLoading() {
        return this._isLoading
    }

    set isLoading(e) {
        this._isLoading = !!e
    }

    connectedCallback() {
        super.connectedCallback(),
            this._loaderInit()
    }

    async _loaderInit() {
        this.readyMark && (await Ve(this.readyMark));
        const {loading: e} = this;
        e === ve.Action ? this._ctrl = Pe(this, this, this._load) : e === ve.Lazy ? this._ctrl = ke(this, this, this._load) : e === ve.Intent ? this._ctrl = Ne(this, this, this._load) : e !== ve.Eager && e !== ve.Preload || this._load()
    }

    load() {
        if (this.loading !== ve.Programmatic)
            throw new Error(`Calling load only supported with loading=${ve.Programmatic}`);
        return this._load()
    }
}

function We(e) {
    const t = e.headers.get("content-type");
    return null == t ? void 0 : t.split(";")[0]
}

function ze(e, t) {
    if (t.startsWith("/"))
        return !0;
    let i;
    try {
        i = new URL(t)
    } catch (e) {
        return !0
    }
    const [o, n] = e.hostname.split(".").reverse()
        , [r, a] = i.hostname.split(".").reverse();
    return o === r && n === a
}

let je = () => new URL(window.location.href);
var $e, Ke;
!function (e) {
    e.Omit = "omit",
        e.SameOrigin = "same-origin",
        e.Include = "include",
        e.SameDomain = "same-domain"
}($e || ($e = {})),
    function (e) {
        e.UrlEncoded = "application/x-www-form-urlencoded",
            e.FormData = "multipart/form-data",
            e.JSON = "application/json"
    }(Ke || (Ke = {}));

// const et = {
//     enctype: $e.UrlEncoded,
//     encoders: {
//         [$e.UrlEncoded]: Je
//     }
// };

let tt = () => {
    }
;
let it = {
    backoff: 500,
    attempts: 3
};


const ot = {
    credentials: Ke.SameDomain,
    mode: "no-cors"
};

class nt {
    constructor(e) {
        this.isRequestInProgress = !1,
            this.host = e
    }

    buildRequest(e, t, i) {
        const o = {
            method: e.method || be.Get,
            body: e.body || new FormData,
            headers: {}
        };
        return o.headers["X-Reddit-Retry"] = `attempt=${t}, max=${i}`,
        e.loading !== ve.Preload && (o.headers.Accept = "text/vnd.reddit.partial+html, text/html;q=0.9"),
        o.method === be.Get || (o.headers["Content-Type"] = Ke.UrlEncoded),
            o
    }

    validateRequestOptions(e) {
        if (e.method && ![be.Get, be.Post].includes(e.method))
            throw new Error(`Unsupported method ${e.method}`)
    }

    _handleError(e, t = "partial-request-generic-failure") {
        return v("faceplate-alert", {
            level: Ee.error,
            message: "Request failed",
            meta: null == e ? void 0 : e.toString(),
            cause: t,
            sourceElement: this.host.tagName
        })
    }

    _handleNetworkError(e) {
        return v("faceplate-alert", {
            level: Ee.error,
            message: "Request failed",
            meta: e.status,
            alertDetails: {
                kind: "network",
                response: e
            },
            cause: `partial-request-network-error-${e.status}`,
            sourceElement: this.host.tagName
        })
    }

    _dispatchEventIfNotPrevented(e) {
        e.defaultPrevented || this.host.dispatchEvent(e)
    }

    // async request(e, t) {
    //     var i, o, n, a;
    //     this.isRequestInProgress = !0;
    //     const s = `${je().origin}${"/" === e[0] ? "" : "/"}${e}`
    //         , d = t && t.loading === ve.Preload ? ot : et
    //         , l = (null == t ? void 0 : t.onError) || tt
    //         , c = (null == t ? void 0 : t.retryOptions) || it;
    //     Number.isInteger(c.attempts) && c.attempts > 0 || (c.attempts = 3),
    //         this.validateRequestOptions(t || {});
    //     const u = Ze((e => {
    //             const i = this.buildRequest(t || {}, e, c.attempts);
    //             return Ye(s, i, d)
    //         }
    //     ), c);
    //     try {
    //         let e;
    //         try {
    //             for (var p, h = !0, m = r(u); !(i = (p = await m.next()).done);) {
    //                 a = p.value,
    //                     h = !1;
    //                 try {
    //                     const t = a;
    //                     let i = !1;
    //                     const o = () => {
    //                             i = !0
    //                         }
    //                     ;
    //                     if (e = void 0,
    //                     "faceplate-error" === t.type) {
    //                         const n = this._handleError(t.detail, "partial-request-fetch-failure");
    //                         if (l({
    //                             event: n,
    //                             href: s,
    //                             retry: o
    //                         }),
    //                             this._dispatchEventIfNotPrevented(n),
    //                             i) {
    //                             e = n.detail;
    //                             continue
    //                         }
    //                         return
    //                     }
    //                     if (this.host.dispatchEvent(t),
    //                         t.defaultPrevented)
    //                         return;
    //                     if ("faceplate-response" === t.type) {
    //                         const n = t.detail.response;
    //                         if (!n.ok) {
    //                             const t = this._handleNetworkError(n);
    //                             if (l({
    //                                 event: t,
    //                                 res: n,
    //                                 href: s,
    //                                 retry: o
    //                             }),
    //                                 this._dispatchEventIfNotPrevented(t),
    //                                 i) {
    //                                 e = t.detail;
    //                                 continue
    //                             }
    //                             return
    //                         }
    //                         const r = We(n);
    //                         if ("text/vnd.reddit.partial+html" !== r)
    //                             throw new Error(`Unsupported content type "${r}" returned from ${s}`);
    //                         return n
    //                     }
    //                 } finally {
    //                     h = !0
    //                 }
    //             }
    //         } catch (e) {
    //             o = {
    //                 error: e
    //             }
    //         } finally {
    //             try {
    //                 h || i || !(n = m.return) || (await n.call(m))
    //             } finally {
    //                 if (o)
    //                     throw o.error
    //             }
    //         }
    //         if (e) {
    //             const t = v("faceplate-alert", e);
    //             l({
    //                 event: t,
    //                 href: s
    //             }),
    //                 this._dispatchEventIfNotPrevented(t)
    //         }
    //     } catch (e) {
    //         const t = this._handleError(e, "partial-request-uncaught-failure");
    //         l({
    //             event: t,
    //             error: e instanceof Error ? e : void 0,
    //             href: s
    //         }),
    //             this._dispatchEventIfNotPrevented(t)
    //     } finally {
    //         this.isRequestInProgress = !1
    //     }
    // }

    async request(e, t) {
        var i, o, n, a;
        this.isRequestInProgress = !0;
        const s = `${je().origin}${"/" === e[0] ? "" : "/"}${e}`
            // , d = t && t.loading === ve.Preload ? ot : et
            , l = (null == t ? void 0 : t.onError) || tt
            , c = (null == t ? void 0 : t.retryOptions) || it;
        this.validateRequestOptions(t || {});

        try {
            let e;
            try {
                var requestOptions = this.buildRequest(t || {}, 0, c.attempts);
                const headers = new Headers(t?.headers)

                var faceplateRequest = new CustomEvent('faceplate-request', {
                    composed: true,
                    bubbles: true,
                    cancelable: false,
                    detail: null
                })
                if (this.host.dispatchEvent(faceplateRequest),
                    t.defaultPrevented)
                    return;

                const response = await fetch('http://127.0.0.1:8000/svc/shreddit/more-comments/Fauxmoi/t3_1q4t7vp', {
                    ...requestOptions || {},
                    headers: headers
                });

                var faceplateResponse = new CustomEvent('faceplate-response', {
                    composed: true,
                    bubbles: true,
                    cancelable: false,
                    detail: null
                })
                if (this.host.dispatchEvent(faceplateResponse),
                    t.defaultPrevented)
                    return;
                return response;
            } catch (e) {
                o = {
                    error: e
                }
            } finally {

            }
            if (e) {
                const t = v("faceplate-alert", e);
                l({
                    event: t,
                    href: s
                }),
                    this._dispatchEventIfNotPrevented(t)
            }
        } catch (e) {
            const t = this._handleError(e, "partial-request-uncaught-failure");
            l({
                event: t,
                error: e instanceof Error ? e : void 0,
                href: s
            }),
                this._dispatchEventIfNotPrevented(t)
        } finally {
            this.isRequestInProgress = !1
        }
    }
}

const rt = "function" == typeof document.createRange;
var at;

function st(e) {
    const t = e.cloneNode();
    return document.createRange().createContextualFragment(t.outerHTML).children[0]
}

function dt(e, t, i) {
    var o, n;
    const r = lt(e)
        , a = document.createDocumentFragment();
    for (const e of r) {
        const t = null === (o = e.getAttribute("data-faceplate-swap-oob")) || void 0 === o ? void 0 : o.split(":");
        if (null == t ? void 0 : t.length) {
            const i = t.length > 1 ? t[0] : ye.Replace;
            e.removeAttribute("data-faceplate-swap-oob");
            const o = null !== (n = t[1]) && void 0 !== n ? n : t[0]
                , r = document.querySelectorAll(o);
            if (!r.length)
                throw new Error(`Unable to find target node for out-of-band render: ${o}`);
            for (const t of r)
                dt(e.outerHTML, t, i)
        } else
            a.appendChild(e)
    }
    !function (e, t, i) {
        const o = (new XMLSerializer).serializeToString(e).replace(/xmlns="[^"]*html[^"]*"/g, "");
        switch (i) {
            case ye.Append:
                return void t.insertAdjacentHTML("beforeend", o);
            case ye.Prepend:
                return void t.insertAdjacentHTML("afterbegin", o);
            case ye.After:
                return void t.insertAdjacentHTML("afterend", o);
            case ye.Before:
                return void t.insertAdjacentHTML("beforebegin", o);
            case ye.Replace:
                if (!t.parentNode)
                    throw new Error("Attemping to use partial replace mode on target without a parent node!");
                return t.parentNode.insertBefore(e, t),
                    void t.remove();
            case ye.Contents:
                return t.textContent = "",
                    void t.appendChild(e);
            default:
                throw new Error(`Attempting to use unsupported partial mode '${i}'!`)
        }
    }(a, t, i)
}

function lt(e) {
    const t = document.createElement("template");
    t.innerHTML = e;
    const i = Array.from(t.content.children);
    if (!rt)
        return i;
    for (let e = 0; e < i.length; e++) {
        const t = i[e];
        if ("FACEPLATE-BATCH" === t.nodeName) {
            const o = st(t)
                , n = customElements.get(t.nodeName.toLowerCase());
            if (!(n && o instanceof n))
                continue;
            const r = o.getCurrentTarget(t)
                , a = Array.from(r.children);
            if (r.innerHTML = "",
            r !== t)
                for (const e of Array.from(t.children))
                    o.appendChild(e);
            if (r !== t && r.nodeName.includes("-")) {
                const e = st(r);
                r.replaceWith(e)
            }
            o.batchInsert(a),
                i[e] = o
        }
    }
    return i
}

!function (e) {
    e.Append = "append",
        e.Replace = "replace",
        e.Contents = "contents"
}(at || (at = {}));

const ct = e => {
    let t;
    return null !== (t = null == e ? void 0 : e.toLowerCase()) && void 0 !== t ? t : ""
};

function ut(e) {
    throw 1
}

export class FaceplatePartial extends PartialBase {
    static get properties() {
        return {
            ...super.properties,
            src: {type: String},
            loading: {type: String},
            renderMode: {type: String, attribute: 'render-mode'},
            method: {type: String, converter: ct},
            alwaysShowSlot: {type: Boolean, attribute: 'always-show-slot'}
        }
    }

    constructor() {
        super(...arguments),
            this.src = "",
            this.target = "",
            this.loading = ve.Eager,
            this.renderMode = ye.Replace,
            this.method = be.Get,
            this.alwaysShowSlot = !1,
            this.partialRequest = new nt(this)
    }

    get isLoading() {
        return !!this.partialRequest && this.partialRequest.isRequestInProgress
    }

    set isLoading(e) {
    }

    static get styles() {
        return css`:host {
            display: block
        }

            :host([loading=action]) {
                cursor: pointer
            }`
    }

    _shouldShowLoadingSlot() {
        var e;
        if (!(null === (e = this.partialRequest) || void 0 === e ? void 0 : e.isRequestInProgress))
            return !1;
        switch (this.loading) {
            case ve.Action:
            case ve.Intent:
            case ve.Programmatic:
                return !0;
            case ve.Eager:
            case ve.Preload:
            case ve.Lazy:
                return !1
        }
        return ut(this.loading)
    }

    _shouldUsePlaceholder() {
        if (this.alwaysShowSlot || this.renderMode !== ye.Replace)
            return !1;
        switch (this.loading) {
            case ve.Lazy:
                return !0;
            case ve.Action:
            case ve.Eager:
            case ve.Intent:
            case ve.Preload:
            case ve.Programmatic:
                return !1
        }
        return ut(this.loading)
    }

    updated() {
        if (!this._shouldUsePlaceholder() || this._slotCapture)
            return;
        const e = this._shouldShowLoadingSlot()
            , t = Array.from(e ? this.querySelectorAll("[slot=loading]") : this.childNodes);
        this._slotCapture = new DocumentFragment,
            t.forEach((e => {
                    var t;
                    "INPUT" !== e.nodeName && (null === (t = this._slotCapture) || void 0 === t || t.appendChild(e))
                }
            ));
        const i = document.createElement("div");
        i.style.minHeight = "1px",
            i.style.minWidth = "1px",
            i.style.marginBottom = "-1px",
        e && i.setAttribute("slot", "loading"),
            this.appendChild(i)
    }

    render() {
        var t;
        const i = this.loading === ve.Action && !(null === (t = this.partialRequest) || void 0 === t ? void 0 : t.isRequestInProgress)
            , o = this._shouldShowLoadingSlot();
        let slot;
        if (o) {
            slot = html`
                <slot name="loading"></slot>`
        } else {
            slot = html`
                <slot></slot>`
        }
        if (i) {
            return html`
                <div tabindex="0"> ${slot}</div> `
        } else {
            return html`
                <div> ${slot}</div> `
        }
        // return html` <div tabindex="${e.l(i ? 0 : void 0)}"> <slot name="${e.l(o ? "loading" : void 0)}"></slot> </div> `
    }

    loadContent() {
        return this._load()
    }

    async _loadContent() {
        var e, t, i;
        if (!this.src)
            throw new Error("No src attribute specified on faceplate-partial element.");
        if (null === (e = this.partialRequest) || void 0 === e ? void 0 : e.isRequestInProgress)
            throw new Error("Request already in progress on faceplate-partial element.");
        let o;
        if (this.method === be.Post && (o = new FormData,
        this.method === be.Post)) {
            const e = this.querySelectorAll("input[type=hidden]");
            for (let t = 0; t < e.length; t++) {
                const i = e[t];
                !i.disabled && i.name && o.append(i.name, i.value)
            }
        }
        this._slotCapture && (this._shouldShowLoadingSlot() ? null === (t = this.querySelector("[slot=loading]")) || void 0 === t || t.remove() : this.innerHTML = "",
            this.appendChild(this._slotCapture));
        const n = null === (i = this.partialRequest) || void 0 === i ? void 0 : i.request(this.src, {
            body: o,
            method: this.method,
            loading: this.loading
        });
        this.loading === ve.Action && this.requestUpdate();
        const r = await n;
        return r || this.loading !== ve.Action || this.requestUpdate(),
            null == r ? void 0 : r.text()
    }

    _renderContent(e) {
        let t = null;
        const i = this.target ? document.querySelectorAll(this.target) : [this];
        (null == i ? void 0 : i.length) || console.warn("No target element found for faceplate-partial element.", this);
        for (const o of i) {
            const i = this.renderMode === ye.Replace
                , n = o.previousSibling;
            if (n || (t = o.parentNode),
            e && this.parentElement && (dt(e, o, this.renderMode),
                i)) {
                const e = n ? n.nextSibling : t ? t.firstElementChild : null;
                if (e) {
                    const t = v("faceplate-load", {
                        resource: this.src,
                        src: this.src
                    });
                    e.dispatchEvent(t)
                }
            }
        }
    }
}

Ge(FaceplatePartial, {
    loader: e => e._loadContent(),
    runner: (e, t) => e._renderContent(t)
});

!!window.customElements.get("faceplate-partial") || window.customElements.define("faceplate-partial", FaceplatePartial);


// faceplate-partial


function cd(e, t) {
    return t in e
}

const Il = Symbol("mixins/with-event-dispatcher");

class Cl {
    constructor(e) {
        this.host = e
    }

    get namespace() {
        return null !== this.host.eventNamespaceOverride ? this.host.eventNamespaceOverride : this.host.tagName.toLowerCase()
    }

    eventId(e) {
        return "" === e && (e = "generic"),
        this.namespace + ":" + e
    }

    dispatch(e, {bubbles: t = !0, cancelable: i = !0, composed: o = !0, ...n} = {
        bubbles: !0,
        cancelable: !0,
        composed: !0
    }) {
        return this.host.dispatchEvent(new CustomEvent(this.eventId(e), {
            bubbles: t,
            cancelable: i,
            composed: o,
            ...n
        }))
    }
}

export class Al extends (function (e) {
    if (cd(e, Il))
        return e;

    class t extends e {
        constructor() {
            super(...arguments),
                this.eventNamespaceOverride = null,
                this.emitter = new Cl(this)
        }
    }

    return t[Il] = !0,
        t
}(LitElement)) {
    constructor() {
        super(...arguments),
            this.logDebugMessage = (...e) => {
            }
    }

    get isRTL() {
        try {
            return this.matches(":dir(rtl)")
        } catch {
            return "rtl" === getComputedStyle(this).direction
        }
    }
}


export function bM(e) {
    const t = e.toString().toLowerCase();
    return t.indexOf("ms") > -1 ? parseFloat(t) : t.indexOf("s") > -1 ? 1e3 * parseFloat(t) : parseFloat(t)
}

export function tl(e) {
    return e ? Promise.all(e.getAnimations().map((e => new Promise((t => {
            const i = () => requestAnimationFrame(t);
            e.addEventListener("cancel", i, {
                once: !0
            }),
                e.addEventListener("finish", i, {
                    once: !0
                }),
                e.cancel()
        }
    ))))) : Promise.resolve()
}


const il = ({keyframes: e, options: t}) => ({
    keyframes: e,
    options: {
        ...t,
        duration: 0
    }
})

const Kd = {
    _rplIsReducedMotion: !1,
    get mediaQuery() {
        return window.matchMedia("(prefers-reduced-motion: reduce)").matches
    },
    get rplIsReducedMotion() {
        return "function" == typeof this._rplIsReducedMotion ? this._rplIsReducedMotion() : this._rplIsReducedMotion
    },
    get isReducedMotion() {
        return this.rplIsReducedMotion || this.mediaQuery
    }
}
    , qd = {
    keyframes: [],
    options: {
        duration: 0
    }
}
    , Yd = new Map
    , Qd = new WeakMap;

export function Jd(e) {
    return e ?? qd
}

export function Xd(e, t) {
    Yd.set(e, Jd(t))
}

export function Zd(e, t) {
    const i = Qd.get(e);
    if (i?.[t])
        return e?.noAnimate ? il(i[t]) : i[t];
    const o = Yd.get(t);
    return o ? e?.noAnimate ? il(o) : o : qd
}

export function el(e, t, i) {
    return e ? new Promise((o => {
            if (i?.duration === 1 / 0)
                throw new Error("Promise-based animations must be finite.");
            const n = function (e, t) {
                return Kd.isReducedMotion ? il({
                    keyframes: e,
                    options: t
                }) : {
                    keyframes: e,
                    options: t
                }
            }(t, i)
                , r = e.animate(n.keyframes, n.options);
            r.addEventListener("cancel", o, {
                once: !0
            }),
                r.addEventListener("finish", o, {
                    once: !0
                })
        }
    )) : Promise.resolve()
}

export function gl(e, t) {
    return new Promise((i => {
            e.addEventListener(t, (function o(n) {
                    n.target === e && (e.removeEventListener(t, o),
                        i())
                }
            ))
        }
    ))
}


export function fl(e, t, i = {
    maximumMatches: 1 / 0
}) {
    const o = [];
    return function n(r) {
        if (!(o.length >= i.maximumMatches)) {
            if (r instanceof Element) {
                if (i.skipTree?.(r))
                    return;
                !o.includes(r) && e(r) && o.push(r);
                r instanceof HTMLSlotElement && (e => e.getRootNode({
                    composed: !0
                })?.host !== t)(r) && r.assignedElements({
                    flatten: !0
                }).forEach(n),
                null !== r.shadowRoot && "open" === r.shadowRoot.mode && n(r.shadowRoot)
            }
            Array.from(r.children).forEach(n)
        }
    }(t),
        o
}

const El = new Set(["button", "input", "select", "textarea", "audio", "video", "summary"]);

function vl(e) {
    const t = e.tagName.toLowerCase();
    return !e.hasAttribute("inert") && ("-1" !== e.getAttribute("tabindex") && (!e.hasAttribute("disabled") && (!("input" === t && "radio" === e.getAttribute("type") && !e.hasAttribute("checked")) && (i = e,
    !!Boolean(i.offsetParent || i.offsetWidth || i.offsetHeight || i.getClientRects().length) && ("hidden" !== window.getComputedStyle(e).visibility && (!("audio" !== t && "video" !== t || !e.hasAttribute("controls")) || (!!e.hasAttribute("tabindex") || (!(!e.hasAttribute("contenteditable") || "false" === e.getAttribute("contenteditable")) || (!("a" !== t || !e.hasAttribute("href")) || El.has(t))))))))));
    var i
}

export function Sl(e, t) {
    return fl(vl, e, {
        skipTree: t,
        maximumMatches: 1 / 0
    })
}

export const a2 = (e, t) => {
    if (!e || !t)
        return !1;
    if (e === t)
        return !0;
    if (0 === e.childElementCount && !(e instanceof HTMLSlotElement))
        return !1;
    if (e.contains(t))
        return !0;
    if (e instanceof HTMLSlotElement && e.assignedElements().some((e => a2(e, t))))
        return !0;
    if (e instanceof Element && e.shadowRoot && a2(e.shadowRoot, t))
        return !0;
    for (const n of e.querySelectorAll("slot"))
        if (n.assignedElements().some((e => a2(e, t))))
            return !0;
    return !1
}