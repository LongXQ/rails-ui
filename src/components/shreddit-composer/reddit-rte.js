import {LitElement, css, html} from 'lit'
import {shredditStyles} from "../shreddit-styles.js";

export class RedditRte extends LitElement {
    static get properties() {
        return {}
    }

    constructor() {
        super()
    }

    render() {
        return html`
            <div class="order-2 relative"> 
                <p aria-hidden="true"
                   class="absolute inset-0 m-0 px-md py-sm leading-5 text-neutral-content-weak flex items-baseline">
                    <slot name="placeholder-html">回复 u/mrmegatelo24</slot>
                </p>
                <slot></slot>
            </div>
            <rte-toolbar class="action-bar order-3">
                <slot slot="responsive" name="action-bar"><div></div></slot>
                <slot slot="fixed" name="action-bar-right"></slot>
            </rte-toolbar>
        `
    }

    static get styles() {
        return [shredditStyles,
            css`
                :host {
                    width: 100%;
                    display: block
                }

                :host([readonly]) ::slotted(div[contenteditable]) {
                    background-color: var(--color-interactive-background-disabled)
                }

            `]
    }
}

window.customElements.define('reddit-rte', RedditRte)