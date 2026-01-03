import {LitElement, css, html} from 'lit'
import {shredditStyles} from "../shreddit-styles.js";

export class RteToolbar extends LitElement {
    static get properties() {
        return {}
    }

    constructor() {
        super()
    }

    render() {
        return html`
            <div class="px-xs py-2xs">
                <div class="flex toolbar w-full max-w-full">
                    <div class="rte-toolbar-fixed ms-auto gap-2xs flex flex-nowrap flex-row-reverse grow-0 order-2">
                        <slot name="fixed"></slot>
                    </div>
                    <div class="rte-toolbar-responsive gap-2xs flex flex-row grow flex-nowrap order-1">
                        <slot name="responsive"></slot>
                    </div>
                </div>
            </div>
        `
    }

    static get styles() {
        return [shredditStyles,
            css`
            `]
    }
}

window.customElements.define('rte-toolbar', RteToolbar)