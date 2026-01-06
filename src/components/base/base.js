import {LitElement} from "lit";

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
        dispatch(e, {bubbles: t=!0, cancelable: i=!0, composed: o=!0, ...n}={
            bubbles: !0,
            cancelable: !0,
            composed: !0
        }) {
            return this.host.dispatchEvent(new CustomEvent(this.eventId(e),{
                bubbles: t,
                cancelable: i,
                composed: o,
                ...n
            }))
        }
    }

    export class Al extends (function(e) {
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
            this.logDebugMessage = (...e) => {}
        }
        get isRTL() {
            try {
                return this.matches(":dir(rtl)")
            } catch {
                return "rtl" === getComputedStyle(this).direction
            }
        }
    }