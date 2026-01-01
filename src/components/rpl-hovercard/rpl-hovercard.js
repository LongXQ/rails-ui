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
            <rpl-popper part="popper" exportparts="
          popup:popper--popup,
          arrow:popper--arrow
        " flip shift safe-area class=" hovercard " placement="bottom-start" distance="4" skidding="0" strategy="absolute">
                <slot slot="anchor" aria-describedby="hovercard"></slot>
                <div part="body" id="hovercard" class="hovercard-body" role="dialog" aria-live="off" hidden=""> <slot name="content"></slot> </div>
            </rpl-popper>
        `
    }

    static get styles() {
        return css`
            :host {
    box-sizing: border-box;
}
            :host {
    --max-width: 20rem;
    --hide-delay: 500ms;
    --show-delay: 750ms;
    display: contents;
}
            :host, :host([appearance=neutral]) {
    --rpl-hovercard-background-color: var(--color-neutral-background);
    --rpl-hovercard-color: var(--color-neutral-content-strong);
}
            .hovercard {
    --arrow-color: var(--rpl-hovercard-background-color);
}
            
            .hovercard::part(popup) {
    z-index: var(--rpl-z-index-hovercard, var(--faceplate-hovercard-z-index, 1));
}
                        .hovercard[placement^=bottom]::part(popup) {
    transform-origin: top;
}
            [hidden] {
    display: none !important;
}
            .hovercard-body {
    display: flex;
    flex-direction: column;
    width: fit-content;
    justify-content: flex-start;
    align-items: flex-start;
    box-sizing: border-box;
    border-radius: 1rem;
    box-shadow: var(--elevation-md);
    z-index: var(--rpl-hovercard-z-index, var(--faceplate-tooltip-z-index, 1));
    font: var(--font-12-16-semibold);
    background-color: var(--rpl-hovercard-background-color);
    color: var(--rpl-hovercard-color);
    padding: 8px;
}
        `
    }
}

window.customElements.define('rpl-hovercard', RplHovercard)
