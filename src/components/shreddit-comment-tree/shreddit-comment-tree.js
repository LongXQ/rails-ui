import { LitElement, css, html } from 'lit'

/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
export class ShRedditCommentTree extends LitElement {
  static get properties() {
    return {
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
    return css`
        :host {
            display: block;
            background-color: var(--shreddit-content-background);
            padding-bottom: var(--spacer-xs);
        }

        .px-md {
            padding-left: 1rem;
            padding-right: 1rem;
        }

        .gap-md {
            gap: 1rem;
        }

        .flex-col {
            flex-direction: column;
        }

        .flex {
            display: flex;
        }

        .relative {
            position: relative;
        }

        .absolute {
            position: absolute;
        }

        .-start-full {
            inset-inline-start: -100%;
        }

        .-top-full {
            top: -100%;
        }

        .h-px {
            height: 1px;
        }

        .w-px {
            width: 1px;
        }

        .overflow-hidden {
            overflow: hidden;
        }
    `
  }
}

window.customElements.define('shreddit-comment-tree', ShRedditCommentTree)
