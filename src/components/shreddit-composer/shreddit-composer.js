import {LitElement, css, html} from 'lit'
import {ShredditCommentActionRow} from "../shreddit-comment-action-row/shreddit-comment-action-row.js";
import {shredditStyles} from "../shreddit-styles.js";

export class ShredditComposer extends LitElement {
    static get properties() {
        return {}
    }

    constructor() {
        super()
    }

    render() {
        return html`
            <div class="border border-solid rounded-5 bg-neutral-background border-neutral-border focus-within:border-neutral-border-medium ">
                <reddit-rte class="flex flex-col">
                    <slot name="rte"></slot>
                    <div class="flex flex-row-reverse gap-xs items-center justify-end ms-auto" slot="action-bar-right">  
                        <slot name="submit-button"></slot> 
                        <slot name="cancel-button"></slot>  </div>
                </reddit-rte>
            </div>
        `
    }

    static get styles() {
        return [shredditStyles, css``]
    }
}

window.customElements.define('shreddit-composer', ShredditComposer)