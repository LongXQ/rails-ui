export function bM(e) {
    const t = e.toString().toLowerCase();
    return t.indexOf("ms") > -1 ? parseFloat(t) : t.indexOf("s") > -1 ? 1e3 * parseFloat(t) : parseFloat(t)
}

export function bN(e) {
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
            const n = function(e, t) {
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



    export function fl(e, t, i={
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