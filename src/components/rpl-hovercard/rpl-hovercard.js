import {LitElement, css, html} from 'lit'
import '@shoelace-style/shoelace/dist/components/popup/popup.js';
import {shredditStyles} from "../shreddit-styles.js";
import {PopperBase} from "../base/popper-base.js";

/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */

export class RplHovercard extends PopperBase {
    static get properties() {
        return {
            ...super.properties,
            appearance: {type: String, reflect: true}
        }
    }

    constructor() {
        super();
        this.appearance = "neutral";
    }


    static get styles() {
        return [
            css`
                :host {
                    box-sizing: border-box
                }

                :host *, :host ::after, :host ::before {
                    box-sizing: inherit
                }

                [hidden] {
                    display: none !important
                }

                .sr-only {
                    position: absolute;
                    width: 1px;
                    height: 1px;
                    padding: 0;
                    margin: -1px;
                    overflow: hidden;
                    clip: rect(0, 0, 0, 0);
                    white-space: nowrap;
                    border-width: 0
                }
            `, css`
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
