import {LitElement, css, html} from 'lit'
import {shredditStyles} from "../shreddit-styles.js";

export class RplDropdown extends LitElement {
    static get properties() {
        return {
            active: {type: Boolean, reflect: true}
        }
    }

    constructor() {
        super();
        this.active = false;
    }

        _click(e) {
        e.preventDefault();
        this.active = !this.active;
    }



    render() {
        return html`
            <sl-popup  part="popper" class=" hovercard " flip shift skidding="0" distance="4" placement="bottom-end" strategy="absolute"
                    ?active="${this.active}" @click="${this._click}"
            >
                <slot name="anchor" slot="anchor" aria-describedby="hovercard"></slot>
                <div  part="body" id="hovercard" class="hovercard-body" role="dialog" aria-live="off" ?hidden="${!this.active}"> <slot name="content"></slot> </div>
            </sl-popup>
        `
    }

    static get styles() {
        return [shredditStyles,
            css`
                :host {
    --max-width: 20rem;
    --hide-delay: 500ms;
    --show-delay: 750ms;
    --rpl-dropdown-background-color: var(--color-neutral-background);
    display: contents;
}
                :host {
    box-sizing: border-box;
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

window.customElements.define('rpl-dropdown', RplDropdown)