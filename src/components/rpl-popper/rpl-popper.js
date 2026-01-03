import {LitElement, css, html, nothing} from 'lit'

import '@shoelace-style/shoelace/dist/components/popup/popup.js';

/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
export class RplHovercard extends LitElement {
    static get properties() {
        return {
            isActive: { attribute: 'active', reflect: true, type: Boolean },
            shift: { type: Boolean },
            flip: { type: Boolean },
            shiftPadding: { attribute: 'shift-padding', type: Number },
            hoverBridge: { attribute: 'hover-bridge', type: Boolean },
            placement: { type: String },
            distance: { type: Number },
            sync: { type: String },
            autoSize: { attribute: 'auto-size', type: String },
            strategy: { type: String },

        }
    }

    constructor() {
        super();
        this.isActive = false;
        this.shift = false;
        this.flip = false;
        this.hoverBridge = false;
        this.placement = 'bottom-end';
        this.distance = 0;
        this.sync = '';
        this.autoSize = '';
        this.strategy = 'absolute';
    }

        _click(e) {
        e.preventDefault();
    }

    render() {
        console.log(this.isActive);
        return html`
            <sl-popup
                    active="${this.isActive || nothing}"
                    shift="${this.shift || nothing}"
                    shift-padding="${this.shiftPadding || nothing}"
                    hover-bridge="${this.hoverBridge || nothing}"
                    flip="${this.flip || nothing}"
                    placement="${this.placement}"
                    distance="${this.distance}"
                    sync="${this.sync}"
                    auto-size="${this.autoSize}"
                    strategy="${this.strategy}"
            >
                <slot name="anchor" slot="anchor" @click="${this._click}"></slot>
                
                <div part="popup" class=" popup ">
                    <slot></slot>
                </div>
            </sl-popup>
        `
        // return html`
        //     <slot name="anchor"></slot>
        //     <span part="safe-area" class=" popup-safe-area "></span>
        //     <div part="popup" class=" popup ">
        //         <slot></slot>
        //     </div>
        // `
    }

    static get styles() {
        return css`
            :host {
    box-sizing: border-box;
}
            :host {
    --arrow-color: var(--color-neutral-background-strong);
    --arrow-size: 6px;
    --arrow-size-diagonal: calc(var(--arrow-size) * 0.7071);
    --arrow-padding-offset: calc(var(--arrow-size-diagonal) - var(--arrow-size));
    display: contents;
}
            
            :host *, :host ::after, :host ::before {
    box-sizing: inherit;
}

            .popup-safe-area {
    position: fixed;
    z-index: calc(var(--faceplate-tooltip-z-index, 1) - 1);
    inset: 0;
    clip-path: polygon(var(--safe-area-top-left-x, 0) var(--safe-area-top-left-y, 0), var(--safe-area-top-right-x, 0) var(--safe-area-top-right-y, 0), var(--safe-area-bottom-right-x, 0) var(--safe-area-bottom-right-y, 0), var(--safe-area-bottom-left-x, 0) var(--safe-area-bottom-left-y, 0));
}
            
            .popup-safe-area:not(.popup-safe-area--visible) {
    display: none;
}
            .popup {
    position: absolute;
    isolation: isolate;
    max-width: var(--auto-size-available-width, none);
    max-height: var(--auto-size-available-height, none);
}
            
.popup:not(.popup--active) {
    display: none;
}
        `
    }
}

window.customElements.define('rpl-popper', RplHovercard)
