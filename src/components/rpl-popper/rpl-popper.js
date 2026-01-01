import {LitElement, css, html} from 'lit'

/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
export class RplHovercard extends LitElement {
    static get properties() {
        return {}
    }

    constructor() {
        super()
    }

    render() {
        return html`
            <slot name="anchor"></slot>
            <span part="safe-area" class=" popup-safe-area "></span>
            <div part="popup" class=" popup ">
                <slot></slot> 
            </div>
        `
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
