import { LitElement, css, html } from 'lit'
import { shredditStyles } from "../shreddit-styles.js";

import { setAnimation } from '@shoelace-style/shoelace/dist/utilities/animation-registry.js';
import { ref, createRef } from 'lit/directives/ref.js';

export class RplDropdown extends LitElement {
    static get properties() {
        return {
            active: { type: Boolean, reflect: true }
        }
    }

    constructor() {
        super();
        this.active = false;
        this.popperRef = createRef();
    }

    _click(e) {
        e.preventDefault();
       

        if (!this.active) {
            this.popperRef.value?.popup.animate( [
                { opacity: '0', scale: '0.8'},
                { opacity: '1', scale: '1' }
              ],
              {
                duration: 150,
                easing:'ease'
              })
        }

        console.log(this.active)

        if (this.active) {
            setTimeout(() => {
                this.popperRef.value?.popup.animate( [
                    { opacity: '1', scale: '1'},
                    { opacity: '0', scale: '0.8' }
                  ],
                  {
                    duration: 150,
                    easing:'ease'
                  })
            }, 1000);
           
        }

        this.active = !this.active;

    }



    render() {
        return html`
            <sl-popup  part="popper" class=" hovercard " flip shift skidding="0" distance="4" placement="bottom-end" strategy="absolute"
                    ?active="${this.active}" @click="${this._click}" ${ref(this.popperRef)}
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

.hovercard {
    --arrow-color: var(--rpl-dropdown-background-color);
}

.hovercard::part(popup) {
    z-index: var(--rpl-z-index-dropdown, var(--faceplate-dropdown-z-index, 1));
}

.hovercard[placement^="bottom"]::part(popup) {
    transform-origin: center top;
}



:host *, :host ::after, :host ::before {
    box-sizing: inherit;
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
    z-index: var(--rpl-z-index-dropdown, var(--faceplate-dropdown-z-index, 1));
    background-color: var(--rpl-dropdown-background-color);
    padding: 0px;
}


:host{--max-width:20rem;--hide-delay:500ms;--show-delay:750ms;--rpl-dropdown-background-color:var(--color-neutral-background);display:contents}.hovercard{--arrow-color:var(--rpl-dropdown-background-color)}.hovercard::part(popup){z-index:var(--rpl-z-index-dropdown,var(--faceplate-dropdown-z-index,1))}.hovercard[placement^=top]::part(popup){transform-origin:bottom}.hovercard[placement^=bottom]::part(popup){transform-origin:top}.hovercard[placement^=left]::part(popup){transform-origin:right}.hovercard[placement^=right]::part(popup){transform-origin:left}.hovercard-body{display:flex;flex-direction:column;width:fit-content;justify-content:flex-start;align-items:flex-start;box-sizing:border-box;border-radius:1rem;box-shadow:var(--elevation-md);z-index:var(--rpl-z-index-dropdown,var(--faceplate-dropdown-z-index,1));background-color:var(--rpl-dropdown-background-color);padding:0}
            `]
    }
}

window.customElements.define('rpl-dropdown', RplDropdown)