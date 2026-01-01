import {LitElement, css, html} from 'lit'
import {shredditCommentStyles} from "../shreddit-comment/shreddit-comment-styles.js";

/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
export class ShredditCommentActionRow extends LitElement {
    static get properties() {
        return {}
    }

    constructor() {
        super()
    }

    render() {
        return html`
            <div class="flex flex-col w-100">
                <slot name="mod-content-state-indicators"></slot>
                <div class="flex items-center max-h-2xl">
                    <div class="flex items-center max-h-2xl shrink"> <span rpl="" class=" 
      p-0  text-12 button-plain-weak button-activated inline-flex items-center button-shell overflow-visible font-semibold flex items-center cursor-auto "
                                                                                                    slot="vote-button"> 
                        <button rpl="" aria-pressed="false"
                                                         class=" group button flex justify-center aspect-square p-0 border-0 button-plain-weak disabled:text-interactive-content-disabled button-plain  inline-flex items-center hover:text-action-upvote focus-visible:text-action-upvote"
                                                         style="height: var(--size-button-sm-h);" upvote=""> <span
                                class="flex mx-xs text-16"> <svg rpl="" fill="currentColor"
                                                                                          height="16"
                                                                                          icon-name="upvote-outline"
                                                                                          viewBox="0 0 20 20" width="16"
                                                                                          xmlns="http://www.w3.org/2000/svg"> 
                            <path
                                    d="M10 19a3.966 3.966 0 01-3.96-3.962V10.98H2.838a1.731 1.731 0 01-1.605-1.073 1.734 1.734 0 01.377-1.895L9.364.254a.925.925 0 011.272 0l7.754 7.759c.498.499.646 1.242.376 1.894-.27.652-.9 1.073-1.605 1.073h-3.202v4.058A3.965 3.965 0 019.999 19H10zM2.989 9.179H7.84v5.731c0 1.13.81 2.163 1.934 2.278a2.163 2.163 0 002.386-2.15V9.179h4.851L10 2.163 2.989 9.179z"></path>
                             </svg> </span>  </button>
                        <span> <faceplate-number pretty=""
                                                                          number="6">6</faceplate-number> </span>
                        <button rpl="" aria-pressed="false"
                                                         class=" group button flex justify-center aspect-square p-0 border-0 button-plain-weak disabled:text-interactive-content-disabled button-plain  inline-flex items-center hover:text-action-downvote focus-visible:text-action-downvote"
                                                         style="height: var(--size-button-sm-h);" downvote=""> <span
                                class="flex mx-xs text-16"> <svg rpl="" fill="currentColor"
                                                                                          height="16"
                                                                                          icon-name="downvote-outline"
                                                                                          viewBox="0 0 20 20" width="16"
                                                                                          xmlns="http://www.w3.org/2000/svg"> 
                            <path
                                    d="M10 1a3.966 3.966 0 013.96 3.962V9.02h3.202c.706 0 1.335.42 1.605 1.073.27.652.122 1.396-.377 1.895l-7.754 7.759a.925.925 0 01-1.272 0l-7.754-7.76a1.734 1.734 0 01-.376-1.894c.27-.652.9-1.073 1.605-1.073h3.202V4.962A3.965 3.965 0 0110 1zm7.01 9.82h-4.85V5.09c0-1.13-.81-2.163-1.934-2.278a2.163 2.163 0 00-2.386 2.15v5.859H2.989l7.01 7.016 7.012-7.016z"></path>
                             </svg> </span>  </button> </span>
                        
                        <slot name="comment-reply"></slot>
                        <slot name="comment-share-as-post-topline"></slot>
                        <slot name="comment-award"></slot>
                        <slot name="comment-share"></slot>
                        <slot name="comment-insight"></slot>
                        <slot name="overflow"></slot>
                    </div>
                    <slot name="mod-content-actions"></slot>
                </div>  </div>
        `
    }

    static get styles() {
        return [shredditCommentStyles, css``]
    }
}

window.customElements.define('shreddit-comment-action-row', ShredditCommentActionRow)
