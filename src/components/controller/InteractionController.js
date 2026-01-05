export class InteractionController {
    constructor(e, t) {
        this.host = e,
            this.config = t,
            this._interactionTrigger = null,
            this.mouseFrame = new g((() => this.config.isInteractedWith(this.host))),
            this.eventUsedMap = new WeakMap,
            this.handleBlur = e => {
                if (this.hasTrigger("focus") || this.hasTrigger("focus-visible")) {
                    const t = () => this.host.finishInteraction(e, "focus");
                    this.config.delayOpenOnFocus ? this.delayInteraction(t, this.config.hoverDelayEnd(this.host)) : t()
                }
            }
            ,
            this.handleClick = e => {
                if (this.eventUsedMap.has(e))
                    return this.mouseFrame.reset();
                this.eventUsedMap.set(e, !0),
                this.hasTrigger("click") && !this.mouseFrame.hasStateChanged && (this.config.isInteractedWith(this.host) ? this.host.finishInteraction(e, "click") : this.host.startInteraction(e, "click")),
                    this.mouseFrame.reset()
            }
            ,
            this.handleFocus = e => {
                const t = this.hasTrigger("focus")
                    , n = this.hasTrigger("focus-visible");
                if ((!(!t && n && e.target instanceof HTMLElement) || e.target.matches(":focus-visible")) && (t || n) && !this.mouseFrame.mouseIsDown) {
                    const t = () => this.host.startInteraction(e, "focus");
                    this.config.delayOpenOnFocus ? this.delayInteraction(t, this.config.hoverDelayStart(this.host)) : t()
                }
            }
            ,
            this.handleMouseEnter = e => {
                this.hasTrigger("hover") && this.delayInteraction((() => this.host.startInteraction(e, "hover")), this.config.hoverDelayStart(this.host))
            }
            ,
            this.handleMouseLeave = e => {
                this.hasTrigger("hover") && this.delayInteraction((() => this.host.finishInteraction(e, "hover")), this.config.hoverDelayEnd(this.host))
            }
            ,
            this.handleMouseDown = () => {
                this.hasTrigger("click") && this.mouseFrame.create()
            }
            ,
            this.handleMouseUp = () => {
                this.hasTrigger("click") && (this.mouseFrame.mouseIsDown = !1)
            }
            ,
            this.host.addController(this)
    }

    set interactionTrigger(e) {
        this._interactionTrigger = e,
            this.host.requestUpdate()
    }

    get interactionTrigger() {
        return this._interactionTrigger
    }

    delayInteraction(e, t) {
        clearTimeout(this.delayTimeout),
            this.delayTimeout = window.setTimeout(e, t)
    }

    hasTrigger(e) {
        return this.host.trigger.split(" ").includes(e)
    }

    hostConnected() {
    }
}

class g {
    constructor(e) {
        this.checkInteraction = e,
            this.startingState = null,
            this.mouseIsDown = !1
    }

    create() {
        this.startingState = this.checkInteraction(),
            this.mouseIsDown = !0
    }

    reset() {
        this.mouseIsDown = !1,
            this.startingState = null
    }

    get hasStateChanged() {
        return null !== this.startingState && this.checkInteraction() !== this.startingState
    }
}