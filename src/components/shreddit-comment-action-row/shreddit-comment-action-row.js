import {LitElement, css, html} from 'lit'
import {shredditStyles} from "../shreddit-styles.js";

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
                </div></div>
                <div class="py-md "> <slot name="comment-composer"></slot></div>
        `
    }

    static get styles() {

        return [
            shredditStyles,
            css`
                .rpl-vote-button-group { /* APPEARANCE AGNOSTIC STYLES */ /* PLAIN APPEARANCE */ /* SECONDARY APPEARANCE */ /* BORDERED APPEARANCE */
                    --vote-button-divider-color: var(--color-neutral-border-weak); /* MEDIA APPEARANCE */
                }

                .rpl-vote-button-group:not([disabled]) .rpl-vote-button-group-label {
                    color: var(--vote-button-label-color);
                }

                .rpl-vote-button-group:not([disabled]):hover.rpl-vote-button-group-label {
                    color: var(--vote-button-label-color-hover);
                }

                .rpl-vote-button-group .rpl-vote-button-group-divider {
                    background-color: var(--vote-button-divider-color);
                }

                .rpl-vote-button-group[disabled] button[rpl]:disabled {
                    --button-color-background-disabled: transparent;
                }

                .rpl-vote-button-group.button-plain {
                    --vote-button-label-color: var(--color-secondary-plain);
                    --vote-button-label-color-hover: var(--color-secondary-plain);
                }

                .rpl-vote-button-group.button-plain button[rpl]:first-child {
                    --button-color-text-hover: var(--color-upvote-plain-weaker);
                }

                .rpl-vote-button-group.button-plain button[rpl]:last-child {
                    --button-color-text-hover: var(--color-downvote-plain-weaker);
                }

                .rpl-vote-button-group.button-plain.upvote {
                    --vote-button-label-color: var(--color-upvote-plain);
                }

                .rpl-vote-button-group.button-plain.upvote button[rpl]:first-child {
                    --button-color-text-default: var(--color-upvote-plain-weaker);
                    --button-color-text-hover: var(--color-upvote-plain-weaker);
                    --button-color-text-disabled: var(--color-upvote-plain-disabled);
                    --button-color-text-activated: var(--color-upvote-plain-weaker);
                }

                .rpl-vote-button-group.button-plain.downvote {
                    --vote-button-label-color: var(--color-downvote-plain);
                }

                .rpl-vote-button-group.button-plain.downvote button[rpl]:last-child {
                    --button-color-text-default: var(--color-downvote-plain-weaker);
                    --button-color-text-disabled: var(--color-downvote-plain-disabled);
                    --button-color-text-activated: var(--color-downvote-plain-weaker);
                }

                .rpl-vote-button-group.button-secondary {
                    --vote-button-label-color: var(--color-secondary-plain);
                    --vote-button-label-color-hover: var(--color-secondary-plain);
                    --vote-button-divider-color: var(--color-neutral-border);
                }

                .rpl-vote-button-group.button-secondary button[rpl]:first-child {
                    --button-color-text-hover: var(--color-upvote-plain-weaker);
                }

                .rpl-vote-button-group.button-secondary button[rpl]:last-child {
                    --button-color-text-hover: var(--color-downvote-plain-weaker);
                }

                .rpl-vote-button-group.button-secondary.upvote, .rpl-vote-button-group.button-secondary.upvote button[rpl] {
                    --button-color-text-default: var(--color-upvote-onBackground);
                    --button-color-text-hover: var(--color-upvote-onBackground);
                    --button-color-text-disabled: var(--color-upvote-disabled);
                    --button-color-text-activated: var(--color-upvote-onBackground);
                }

                .rpl-vote-button-group.button-secondary.upvote:not([disabled]), .rpl-vote-button-group.button-secondary.upvote button[rpl]:not([disabled]) {
                    --button-color-background-default: var(--color-upvote-background);
                    --button-color-background-hover: var(--color-upvote-background-hover);
                    --button-color-background-active: var(--color-upvote-background-hover);
                    --vote-button-divider-color: var(--color-upvote-onBackground);
                    --vote-button-label-color: var(--color-media-onBackground);
                }

                .rpl-vote-button-group.button-secondary.downvote, .rpl-vote-button-group.button-secondary.downvote button[rpl] {
                    --button-color-text-default: var(--color-downvote-onBackground);
                    --button-color-text-hover: var(--color-downvote-onBackground);
                    --button-color-text-disabled: var(--color-downvote-disabled);
                    --button-color-text-activated: var(--color-downvote-onBackground);
                }

                .rpl-vote-button-group.button-secondary.downvote:not([disabled]), .rpl-vote-button-group.button-secondary.downvote button[rpl]:not([disabled]) {
                    --button-color-background-default: var(--color-downvote-background);
                    --button-color-background-hover: var(--color-downvote-background-hover);
                    --button-color-background-active: var(--color-downvote-background-hover);
                    --vote-button-divider-color: var(--color-upvote-onBackground);
                    --vote-button-label-color: var(--color-media-onBackground);
                }

                .rpl-vote-button-group.button-bordered-cab {
                    --vote-button-label-color: var(--color-secondary-plain);
                    --vote-button-label-color-hover: var(--color-secondary-plain);
                }

                .rpl-vote-button-group.button-bordered-cab button[rpl]:first-child {
                    --button-color-text-hover: var(--color-upvote-plain-weaker);
                }

                .rpl-vote-button-group.button-bordered-cab button[rpl]:last-child {
                    --button-color-text-hover: var(--color-downvote-plain-weaker);
                }

                .rpl-vote-button-group.button-bordered-cab.upvote {
                    --vote-button-label-color: var(--color-upvote-plain);
                }

                .rpl-vote-button-group.button-bordered-cab.upvote button[rpl]:first-child {
                    --button-color-text-default: var(--color-upvote-plain-weaker);
                    --button-color-text-hover: var(--color-upvote-plain-weaker);
                    --button-color-text-disabled: var(--color-upvote-plain-disabled);
                    --button-color-text-activated: var(--color-upvote-plain-weaker);
                }

                .rpl-vote-button-group.button-bordered-cab.downvote {
                    --vote-button-label-color: var(--color-downvote-plain);
                }

                .rpl-vote-button-group.button-bordered-cab.downvote button[rpl]:last-child {
                    --button-color-text-default: var(--color-downvote-plain-weaker);
                    --button-color-text-hover: var(--color-downvote-plain-weaker);
                    --button-color-text-disabled: var(--color-downvote-plain-disabled);
                    --button-color-text-activated: var(--color-downvote-plain-weaker);
                }

                .rpl-vote-button-group.button-media-cab {
                    --vote-button-label-color: var(--color-media-onBackground);
                    --vote-button-label-color-hover: var(--color-media-onBackground);
                    --vote-button-divider-color: var(--color-media-border-weak);
                }

                .rpl-vote-button-group.button-media-cab button[rpl]:first-child {
                    --button-color-text-hover: var(--color-upvote-onStrongScrim-weaker);
                }

                .rpl-vote-button-group.button-media-cab button[rpl]:last-child {
                    --button-color-text-hover: var(--color-downvote-onStrongScrim-weaker);
                }

                .rpl-vote-button-group.button-media-cab.upvote {
                    --vote-button-label-color: var(--color-upvote-onStrongScrim);
                }

                .rpl-vote-button-group.button-media-cab.upvote button[rpl]:first-child {
                    --button-color-text-default: var(--color-upvote-onStrongScrim-weaker);
                    --button-color-text-activated: var(--color-upvote-onStrongScrim-weaker);
                    --button-color-text-disabled: var(--color-upvote-onStrongScrim-disabled);
                }

                .rpl-vote-button-group.button-media-cab.downvote {
                    --vote-button-label-color: var(--color-downvote-onStrongScrim);
                }

                .rpl-vote-button-group.button-media-cab.downvote button[rpl]:last-child {
                    --button-color-text-default: var(--color-downvote-onStrongScrim-weaker);
                    --button-color-text-activated: var(--color-downvote-onStrongScrim-weaker);
                    --button-color-text-disabled: var(--color-downvote-onStrongScrim-disabled);
                }  
            `]

    }
}

window.customElements.define('shreddit-comment-action-row', ShredditCommentActionRow)
