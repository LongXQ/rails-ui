import {css} from 'lit'

import {a2, fl} from "../utils.js";
import {PopperBase} from "../base/popper-base.js";

export class RplDropdown extends PopperBase {
    constructor() {
        super(),
            this.placement = "bottom",
            this.trigger = "click"
    }

    connectedCallback() {
        super.connectedCallback(),
            this.addEventListener("rpl:menu-close", this.handleMenuClose),
            this.addEventListener("focusout", this.handleFocusOut)
    }

    disconnectedCallback() {
        super.disconnectedCallback(),
            this.removeEventListener("rpl:menu-close", this.handleMenuClose),
            this.removeEventListener("focusout", this.handleFocusOut)
    }

    focusFirstTabbableBodyElement(t) {
        const r = fl((e => "rpl-menu" === e.tagName.toLowerCase()), t, {
            maximumMatches: 1
        });
        if (0 === r.length)
            return this.focusFirstTabbableElement(t);
        r[0].focusOnOpen()
    }

    updateAnchorElementAria() {
        this.anchorElement?.setAttribute("aria-haspopup", "menu"),
            this.anchorElement?.setAttribute("aria-expanded", this.open ? "true" : "false")
    }

    handleMenuClose(e) {
        e.stopPropagation(),
            this.hide(),
            setTimeout((() => this.anchorElement?.focus()), 0)
    }

    handleFocusOut(e) {
        this.open && e.relatedTarget instanceof Node && !a2(this.contentSlotRef?.value, e.relatedTarget) && this.hide()
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
            `,
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


                :host {
                    --max-width: 20rem;
                    --hide-delay: 500ms;
                    --show-delay: 750ms;
                    --rpl-dropdown-background-color: var(--color-neutral-background);
                    display: contents
                }

                .hovercard {
                    --arrow-color: var(--rpl-dropdown-background-color)
                }

                .hovercard::part(popup) {
                    z-index: var(--rpl-z-index-dropdown, var(--faceplate-dropdown-z-index, 1))
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
                    z-index: var(--rpl-z-index-dropdown, var(--faceplate-dropdown-z-index, 1));
                    background-color: var(--rpl-dropdown-background-color);
                    padding: 0
                }
            `]
    }
}

window.customElements.define('rpl-dropdown', RplDropdown);