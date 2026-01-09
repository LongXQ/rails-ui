import { LitElement, css, html } from 'lit'
import {shredditStyles} from "../shreddit-styles.js";

/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
export class ShRedditCommentTree extends LitElement {
  static get properties() {
    return {
        postId: {type: String, attribute: "post-id"},
        isTruncated: {type: Boolean},
        ui: {type: String},
        maxDepth: {type: Number, attribute: "max-depth"}
    }
  }

  constructor() {
    super()
  }

  render() {
    return html`
        <section class="flex flex-col px-md xs:px-0 gap-md relative" aria-label="评论">
            <h1 class="absolute -top-full -start-full w-px h-px overflow-hidden" aria-label="评论区域">
                评论区域
            </h1>
            <slot></slot>
            <slot name="truncated"></slot>
        </section>
    `
  }

    static get styles() {
        return [shredditStyles, css`:host {
            display: block;
            background-color: var(--shreddit-content-background);
            padding-bottom: var(--spacer-xs);
        }  `]
    }
}

window.customElements.define('shreddit-comment-tree', ShRedditCommentTree)
