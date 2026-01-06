import {LitElement, html} from 'lit'
import {classMap} from 'lit/directives/class-map.js';

import {ref, createRef} from 'lit/directives/ref.js';
import {a2, bM, bN, el, fl, gl, Sl, Xd, Zd} from "../utils.js";
import {InteractionController} from "../controller/InteractionController.js";
import {Al} from "./base.js";

const a = new WeakSet;

function n(e, t, o) {
    e && e.value && (e.value[t] = o)
}

export class PopperBase extends Al {
    // static properties = {
    //     placement: {},
    //     disabled: {type: Boolean, reflect: true},
    //     distance: {type: Number},
    //     open: {type: Boolean, reflect: true},
    //     skidding: {type: Number},
    //     hoist: {type: Boolean},
    //     noAnimate: {type: Boolean, attribute: "no-animate"},
    //     arrow: {type: Boolean},
    // }

    static get properties() {
        return {
            placement: {},
            disabled: {type: Boolean, reflect: true},
            distance: {type: Number},
            open: {type: Boolean, reflect: true},
            skidding: {type: Number},
            hoist: {type: Boolean},
            noAnimate: {type: Boolean, attribute: "no-animate"},
            arrow: {type: Boolean},
        }

    }


    constructor() {
        super(),
            this.contentSlotRef = createRef(),
            this.defaultSlotRef = createRef(),
            this.hovercardBodyRef = createRef(),
            this.popperRef = createRef(),
            this.anchorElement = null,
            this.interactionController = new InteractionController(this, {
                isInteractedWith: e => e.open,
                hoverDelayStart: t => bM(getComputedStyle(t).getPropertyValue("--show-delay")),
                hoverDelayEnd: t => bM(getComputedStyle(t).getPropertyValue("--hide-delay")),
                delayOpenOnFocus: !0
            }),
            this.placement = "top",
            this.disabled = !1,
            this.distance = 4,
            this.open = !1,
            this.skidding = 0,
            this.trigger = "hover focus",
            this.hoist = !1,
            this.noAnimate = !1,
            this.arrow = !1,
            this.eventUsedMap = new WeakMap,
            this.handleDocumentKeyDown = e => {
                "Escape" === e.key && (e.stopPropagation(),
                    this.hide(),
                this.defaultSlotRef.value && this.focusFirstTabbableElement(this.defaultSlotRef.value))
            }
            ,
            this.handleDocumentClick = e => {
                if (!(e.target instanceof HTMLElement) || this.hidden)
                    return;
                this.eventUsedMap.has(e) || a2(this, e.target) || this.hide()
            },
            this.handleLegacyHovercardOpen = e => {
                e.target !== this && this.open && this.hide()
            }
    }

    disconnectedCallback() {
        super.disconnectedCallback(),
            document.removeEventListener("keydown", this.handleDocumentKeyDown),
            document.removeEventListener("click", this.handleDocumentClick),
            document.removeEventListener("faceplate-hovercard:open", this.handleLegacyHovercardOpen)
    }

    willUpdate(e) {
        e.has("open") && this.hasUpdated && this.handleOpenChange(),
        e.has("disabled") && this.handleDisabledChange(),
        (e.has("content") || e.has("distance") || e.has("hoist") || e.has("placement") || e.has("skidding")) && this.handleOptionsChange()
    }

    firstUpdated() {
        this.hovercardBodyRef.value && (this.hovercardBodyRef.value.hidden = !0),
        this.open && this.popperRef.value && this.handleOpenChange()
    }

    startInteraction(e, t) {
        this.eventUsedMap.has(e) || (this.interactionController.interactionTrigger = t,
            this.eventUsedMap.set(e, !0),
            this.show())
    }

    finishInteraction(e) {
        this.eventUsedMap.set(e, !0),
            this.hide()
    }

    focusFirstTabbableElement(t) {
        const o = Sl(t)[0];
        o && "focus" in o && "function" == typeof o.focus && (o.addEventListener("focusin", (e => {
                this.eventUsedMap.set(e, !0)
            }
        ), {
            once: !0,
            capture: !0
        }),
            o.focus({
                preventScroll: !0
            }))
    }

    focusFirstTabbableBodyElement(e) {
        return this.focusFirstTabbableElement(e)
    }

    async handleOpenChange() {
        if (!this.disabled && this.contentSlotRef.value && this.hovercardBodyRef.value && this.popperRef.value)
            if (this.open) {
                this.emitter.dispatch("show"),
                this.dispatchEvent(new CustomEvent("faceplate-hovercard:open", {
                    bubbles: !0
                }));
                const t = (async (t, o = "faceplate-partial") => {
                        const i = o.toLowerCase()
                            ,
                            n = fl((e => e.tagName.toLowerCase() === i && (e => "loading" in e && "load" in e && "function" == typeof e?.load)(e)), t);
                        return (await Promise.all(n.map((async e => !e || a.has(e) || "programmatic" !== e.loading ? Promise.resolve(!1) : (a.add(e),
                            e.load().then((() => !0))))))).filter(Boolean).length > 0
                    }
                )(this.contentSlotRef.value);
                document.addEventListener("keydown", this.handleDocumentKeyDown),
                    document.addEventListener("click", this.handleDocumentClick),
                    document.addEventListener("faceplate-hovercard:open", this.handleLegacyHovercardOpen),
                    await bN(this.hovercardBodyRef.value),
                    n(this.hovercardBodyRef, "hidden", !1),
                    n(this.popperRef, "active", !0),
                    this.updateAnchorElementAria();
                const {keyframes: o, options: i} = Zd(this, "hovercard.show");
                await el(this.popperRef.value?.popup, o, i),
                    this.popperRef.value?.reposition(),
                    await t,
                !this.hovercardBodyRef.value || "focus" !== this.interactionController.interactionTrigger && "click" !== this.interactionController.interactionTrigger || this.focusFirstTabbableBodyElement(this.hovercardBodyRef.value)
                ,this.emitter.dispatch("after-show")
            } else {
                this.emitter.dispatch("hide"),
                document.removeEventListener("keydown", this.handleDocumentKeyDown),
                    document.removeEventListener("click", this.handleDocumentClick),
                    document.removeEventListener("faceplate-hovercard:open", this.handleLegacyHovercardOpen),
                    await bN(this.hovercardBodyRef.value);
                const {keyframes: t, options: o} = Zd(this, "hovercard.hide");
                await el(this.popperRef.value?.popup, t, o),
                    n(this.popperRef, "active", !1),
                    n(this.hovercardBodyRef, "hidden", !0),
                    this.updateAnchorElementAria()
                ,this.emitter.dispatch("after-hide")
            }
    }

    async handleOptionsChange() {
        this.hasUpdated && this.popperRef.value && (await this.updateComplete,
            this.popperRef.value?.reposition())
    }

    handleAnchorSlotChange() {
        this.defaultSlotRef.value && (this.anchorElement = fl((e => e instanceof HTMLButtonElement || e instanceof HTMLAnchorElement || ["button", "link", "menuitem", "tab", "checkbox", "combobox", "gridcell", "application", "treeitem"].includes(e?.getAttribute("role") ?? "")), this.defaultSlotRef.value)[0] ?? null,
            this.updateAnchorElementAria())
    }

    updateAnchorElementAria() {
        this.anchorElement?.setAttribute("aria-haspopup", "dialog"),
            this.anchorElement?.setAttribute("aria-expanded", this.open ? "true" : "false")
    }

    handleDisabledChange() {
        this.disabled && this.open && this.hide()
    }

    async show() {
        if (!this.open)
            return this.open = !0
        ,gl(this, this.emitter.eventId("after-show"))
    }

    async hide() {
        if (this.open)
            return this.open = !1
        ,gl(this, this.emitter.eventId("after-hide"))
    }

    render() {
        return html`
            <sl-popup part="popper" exportparts="popup:popper--popup,arrow:popper--arrow"
                      class="${classMap({hovercard: !0, "hovercard--open": this.open})}"
                      placement="${this.placement}"
                      distance="${this.distance}"
                      skidding="${this.skidding}"
                      strategy="${this.hoist ? "fixed" : "absolute"}"
                      flip
                      shift
                      safe-area
                      ?arrow="${this.arrow}"
                      @mouseenter="${this.interactionController.handleMouseEnter}"
                      @mouseleave="${this.interactionController.handleMouseLeave}"
                      @mousedown="${this.interactionController.handleMouseDown}"
                      @mouseup="${this.interactionController.handleMouseUp}"
                      @focusin="${this.interactionController.handleFocus}"
                      @focusout="${this.interactionController.handleBlur}"
                      @click="${e => this.eventUsedMap.set(e, !0)}" ${ref(this.popperRef)}>
                <slot name="anchor" slot="anchor" aria-describedby="hovercard"
                      @click="${this.interactionController.handleClick}"
                      ${ref(this.defaultSlotRef)} @slotchange="${this.handleAnchorSlotChange}"></slot>
                <div part="body" id="hovercard" class="hovercard-body" role="dialog"
                     aria-live="${this.open ? "polite" : "off"}" ${ref(this.hovercardBodyRef)}>
                    <slot name="content" ${ref(this.contentSlotRef)}></slot>
                </div>
            </sl-popup>
        `
    }
}

Xd("hovercard.show", {
    keyframes: [{
        opacity: 0,
        scale: .8
    }, {
        opacity: 1,
        scale: 1
    }],
    options: {
        duration: 150,
        easing: "ease"
    }
});
Xd("hovercard.hide", {
    keyframes: [{
        opacity: 1,
        scale: 1
    }, {
        opacity: 0,
        scale: .8
    }],
    options: {
        duration: 150,
        easing: "ease"
    }
});