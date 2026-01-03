import {LitElement, css, html} from 'lit'
import '@shoelace-style/shoelace/dist/components/popup/popup.js';
import {shredditStyles} from "../shreddit-styles.js";

/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
export class RplHovercard extends LitElement {
    static get properties() {
        return {
            active: {type: Boolean, reflect: true}
        }
    }

    constructor() {
        super();
        this.appearance = "neutral";
        this.active = false;
    }


    _click(e) {
        e.preventDefault();
        this.active = !this.active;
    }

    render() {
        // return html`
        //     <rpl-popper part="popper" exportparts="
        //   popup:popper--popup,
        //   arrow:popper--arrow
        // " flip shift safe-area class=" hovercard " placement="bottom-start" distance="4" skidding="0" strategy="absolute">
        //         <slot slot="anchor" aria-describedby="hovercard"></slot>
        //         <div  part="body" id="hovercard" class="hovercard-body" role="dialog" aria-live="off" hidden=""> <slot name="content"></slot> </div>
        //     </rpl-popper>
        // `
        return html`
                    <sl-popup  class=" hovercard " flip shift skidding="0" distance="4" placement="bottom-start" strategy="absolute"
                    ?active="${this.active}" @click="${this._click}"
            >
                <slot name="anchor" slot="anchor" aria-describedby="hovercard"></slot>
                <div  part="body" id="hovercard" class="hovercard-body" role="dialog" aria-live="off" ?hidden="${!this.active}"> <slot name="content"></slot> </div>
            </sl-popup>
        `
    }

    static get styles() {
        return [shredditStyles,css`
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

            :host {
            --max-width: 20rem;
            --hide-delay: 500ms;
            --show-delay: 750ms;
            display: contents
        }

            :host, :host([appearance=neutral]) {
                --rpl-hovercard-background-color: var(--color-neutral-background);
                --rpl-hovercard-color: var(--color-neutral-content-strong)
            }

            :host([appearance=inverted]) {
                --rpl-hovercard-background-color: var(--color-inverted-neutral-background);
                --rpl-hovercard-color: var(--color-inverted-neutral-content-strong)
            }

            .hovercard {
                --arrow-color: var(--rpl-hovercard-background-color)
            }

            .hovercard::part(popup) {
                z-index: var(--rpl-z-index-hovercard, var(--faceplate-hovercard-z-index, 1))
            }

            .hovercard[placement^=top]::part(popup) {
                transform-origin: bottom
            }

            .hovercard[placement^=bottom]::part(popup) {
                transform-origin: top
            }

            .hovercard[placement^=left]::part(popup) {
                transform-origin: right
            }

            .hovercard[placement^=right]::part(popup) {
                transform-origin: left
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
                padding: 8px
            }
            
        `]
    }
}

window.customElements.define('rpl-hovercard', RplHovercard)
