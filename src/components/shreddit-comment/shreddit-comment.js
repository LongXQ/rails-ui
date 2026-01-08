import {LitElement, css, html} from 'lit'
import {shredditStyles} from "../shreddit-styles.js";

function _join(...e) {
    return e.filter(Boolean).join(" ")
}

function h(e, t) {
    const {html: i} = e
        , r = function (e) {
        const t = {
            bg: "",
            border: ""
        };
        if (e.isSctReplacementEnabled && e.isCurrentPermalink)
            return {
                bg: "bg-neutral-background-highlighted-strong",
                border: "border-0 border-s border-solid border-neutral-background-gilded"
            };
        if (e.isPdpSeekerM1LO)
            return t;
        if (e.isHighlighted)
            return {
                bg: "bg-orangered-500 bg-opacity-[0.07]",
                border: "border-0 border-s border-solid border-global-orangered"
            };
        if (m(e))
            return {
                bg: "bg-yellow-200 bg-opacity-[0.07]",
                border: "border-0 border-s border-solid border-global-gold"
            };
        return t
    }(e)
        , n = `${e.author} 的评论的讨论串`
        , s = e.ariaLabel || n;
    return i` <details role="article" ?open="${!e.collapsed}" @toggle="${e.handleToggle}" aria-label="${s}" tabindex="0"> <summary class="${_join("grid grid-cols-[24px_minmax(0,1fr)]", !e.isPdpSeekerM1LO && "xs:grid-cols-[32px_minmax(0,1fr)]", c(e) ? "mt-[1px]" : "")}" @click="${e.handleSummaryClick}" aria-label="${`${e.author} 的评论的元数据`}"> ${e.collapsed ? e.uncollapseButton : i`<div class="relative"> ${c(e) ? i` <div class="absolute top-[2px] start-[16px] end-0 h-full ${r.bg} pointer-events-none"></div>` : ""} ${i`<slot name="commentAvatar"></slot>`} </div>`} <div class="flex relative ${c(e) ? `${r.bg} rounded-tr-[0.5rem] mt-[2px] mb-[-2px]` : ""}"> ${i`<slot name="commentMeta" @click="${e.handleCommentMetaSlotClick}" id="comment-meta"></slot>`} </div> </summary> <div class="${_join("grid grid-cols-[24px_1fr] relative", !e.isPdpSeekerM1LO && "xs:grid-cols-[32px_1fr]")}"> ${function (e) {
        if (!e.hasMoreLink && !e.hasRenderedComments)
            return "";
        const t = e.isPdpSeekerM1LO ? "xs:w-lg" : "xs:w-xl";
        return e.html` <div class="absolute top-0 start-0 bottom-0 w-lg ${t} flex justify-center items-center z-0 cursor-pointer group mb-sm" @mouseenter="${e.onThreadLineMouseEnter}" @mouseleave="${e.onThreadLineMouseLeave}" @click="${e.handleToggle}" aria-hidden="true"> <div data-testid="main-thread-line" class="w-[1px] h-full group-hover:bg-tone-2 ${e.isThreadLineHovered ? "bg-tone-2" : "bg-tone-4"}"></div> </div> `
    }(e)} <div class="contents"> <div class="${c(e) ? "relative pointer-events-none" : ""}"> ${c(e) ? i`<div class="absolute h-full w-[11.5px] xs:w-[15.5px] end-0 ${r.bg} ${r.border}"></div>` : ""} </div> <div class="min-w-0 ${c(e) ? r.bg : ""}"> ${i`<slot @click="${e.handleContentSlotClick}"></slot>`} ${i`<slot name="comment-edit"></slot>`} ${function (e) {
        if (e.isCommentDeleted || e.isInEditMode)
            return "";
        return e.html` <div class="relative"> ${e.html`<slot name="comment"></slot>`} </div> `
    }(e)} </div> </div> <div class="contents"> ${function (e) {
        return "at-fold" !== e.currentTreePosition && e.hasRenderedComments
    }(e) ? e.collapseButton : i`<div></div>`} <div class="min-w-0 ${c(e) ? `rounded-ee-[0.5rem] relative pe-sm pb-2xs mb-[1px] ${r.bg}` : ""}"> ${c(e) ? i` <div class="absolute top-0 start-[-12.5px] w-[11.5px] xs:start-[-16.5px] xs:w-[15.5px] h-full pointer-events-none ${r.bg} ${r.border} ${e.isSctReplacementEnabled && e.isCurrentPermalink ? "rounded-bl-[0.5rem]" : ""}"></div> ` : ""} ${i`<slot name="actionRow"></slot>`} ${i`<slot name="awardsRow"></slot>`} </div> </div> <div class="contents"> <div></div> <div class="min-w-0">${i`<slot name="next-reply"></slot>`}</div> </div> <div id="comment-children" class="contents ${e.isThreadLineHovered ? "[&>.threadline>*]:border-tone-2" : "[&>.threadline>*]:border-tone-4"}"> ${function (e) {
        const {html: t, currentTreePosition: o, hasMoreLink: i, hasRenderedComments: r} = e;
        if (!i && !r)
            return t``;
        if ("at-fold" !== o)
            return t``;
        return t` ${u(e, {
            isLastRenderedNode: !0,
            isComment: !1
        })} ${t`<slot name="more-comments-permalink"></slot>`} `
    }(e)} ${t} </div> </div> <ac-call trigger="init" delay="10000" target="closest(shreddit-comment)" method="maybeScheduleReloadPolling"></ac-call> </details> `;
}

function m(e) {
    return e.awardCount > 0
}

function c(e) {
    return e.isSctReplacementEnabled ? e.isCurrentPermalink : !e.isPdpSeekerM1LO && (e.isHighlighted || m(e))
}

function u(e, {isLastRenderedNode: t, isComment: o}) {
    const i = "box-border h-md border-0 border-tone-4 border-solid border-b-[1px] " + (t ? "cursor-pointer" : "")
        , r = `${i} w-[calc(50%+0.5px)] border-s-[1px] rounded-es-[12px]`
        , n = `${i} w-xs absolute end-[-8px]`;
    return e.html` <div class="threadline flex justify-end align-start relative${t ? " bg-neutral-background" : " pointer-events-none"}" aria-hidden="true"> <div @mouseenter="${t ? e.onThreadLineMouseEnter : void 0}" @mouseleave="${t ? e.onThreadLineMouseLeave : void 0}" @click="${t ? e.handleToggle : void 0}" class="${r}" data-testid="branch-line"></div> ${o ? "" : e.html`<div @mouseenter="${t ? e.onThreadLineMouseEnter : void 0}" @mouseleave="${t ? e.onThreadLineMouseLeave : void 0}" @click="${t ? e.handleToggle : void 0}" class="${n}"></div>`} </div> `
}

/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
export class ShRedditComment extends LitElement {
    static get properties() {
        return {
            thingId: {type: String},
            avatar: {type: String},
            author: {type: String},
            collapsed: {type: Boolean, reflect: true}
        }
    }

    constructor() {
        super();
        this.thingId = "";
        this.avatar = "";
        this.author = "";
        this.parentId = "";
        this.postId = "";
        this.score = "";
        this.awardCount = 0;
        this.isAuthorDeleted = !1;
        this.isCommentDeleted = !1;
        this.isInEditMode = !1;
        this.depth = 0;
        this.permalink = "";
        this.parentPermalink = "";
        this.isUserOP = !1;
        this.isHighlighted = !1;
        this.reloadUrl = "";
        this.isCurrentPermalink = !1;
        this.contentType = "text";
        this.isTranslatable = !1;
        this.isTranslationFetched = !1;
        this.isCommentTranslated = !1;
        this.previousActionsFeature = !1;
        this.isSctReplacementEnabled = !1;
        this.collapsed = !1;
        this.isChosenMqComment = !1;
        this.updateAnimation = void 0;
        this.ariaLabel = null;
        this.isPdpSeekerM1 = !1;
        this.isPdpSeekerM1LO = !1;
        this.withHotkeys = !1;
        this.recordTTCI = !1;
        this.replyPermalink = "";
        this.updateState = void 0;
        this.observer = null;
        this.targetElement = null;
        this.consumeTimeoutId = void 0;

        this.hasRenderedComments = !1;
        this.hasMoreLink = !1;
        this._children = null;
        this.unsubscribeFaceplateRequestListeners = [];
        this.isThreadLineHovered = !1;
        this.onThreadLineMouseEnter = () => {
            this.isThreadLineHovered = !0;
            this.requestUpdate();
        }

        this.onThreadLineMouseLeave = () => {
            this.isThreadLineHovered = !1;
            this.requestUpdate();
        }

        this.currentTreePosition = null;

        this.handleSummaryClick = e => {
            e.fromCommentMeta && "A" !== e.target.tagName && !e.target.closest("a") && e.preventDefault()
        }

        this.handleCommentMetaSlotClick = e => {
            e.fromCommentMeta = "commentMeta" !== e.target.slot
        }

        this.handleContentSlotClick = t => {

        }

        this.handleHovercardTriggerClick = e => {
            e.metaKey || e.preventDefault()
        }

        this.handleMoreButtonClick = t => {
            // this.pubsub.publish(e.T.TriggerCommentBlockingAuth, {
            //     source: a.C.Button
            // }),
            //     e.f(this, i.bs());
            const o = t.currentTarget;
            o?.addEventListener("faceplate-response", (() => {
                    const e = new MutationObserver((t => {
                            t.some((e => Array.from(e.removedNodes).some((e => e === o)))) && (this.updateChildren(),
                                e.disconnect())
                        }
                    ));
                    e.observe(this, {
                        childList: !0
                    })
                }
            ))
        }


    }

    connectedCallback() {
        super.connectedCallback(),

            this._rplHovercards?.forEach((e => {
                    e.addEventListener("click", this.handleHovercardTriggerClick)
                }
            ))
    }

    disconnectedCallback() {
        super.disconnectedCallback(),
            this._rplHovercards?.forEach((e => {
                    e.removeEventListener("click", this.handleHovercardTriggerClick)
                }
            ))
    }

    get _rplHovercards() {
        return this.querySelectorAll('[slot="commentAvatar"] rpl-hovercard > div:not([slot="content"]), [slot="commentMeta"] rpl-hovercard > div:not([slot="content"])')
    }

    getProps() {
        return {
            ariaLabel: this.ariaLabel,
            author: this.author,
            awardCount: this.awardCount,
            collapsed: this.collapsed,
            currentTreePosition: this.currentTreePosition,
            collapseButton: this.renderCollapseButton(),
            handleCommentMetaSlotClick: this.handleCommentMetaSlotClick,
            handleContentSlotClick: this.handleContentSlotClick,
            handleSummaryClick: this.handleSummaryClick,
            handleToggle: this.handleToggle,
            hasMoreLink: this.hasMoreLink,
            hasRenderedComments: this.hasRenderedComments,
            html: html,
            isCommentDeleted: this.isCommentDeleted,
            isHighlighted: this.isHighlighted,
            isInEditMode: this.isInEditMode,
            isPdpSeekerM1LO: this.isPdpSeekerM1LO,
            isThreadLineHovered: this.isThreadLineHovered,
            onThreadLineMouseEnter: this.onThreadLineMouseEnter,
            onThreadLineMouseLeave: this.onThreadLineMouseLeave,
            thingId: this.thingId,
            uncollapseButton: this.renderUncollapseButton(),
            withHotkeys: this.withHotkeys,
            isSctReplacementEnabled: this.isSctReplacementEnabled,
            isCurrentPermalink: this.isCurrentPermalink
        }
    }

    handleToggle(e) {
        !e.target.open !== this.collapsed && this.handleCollapse()
    }

    handleCollapse() {
        this.collapsed = !this.collapsed;
        // e.f(this, this.collapsed ? o.bx() : o.by())
    }

    renderCollapseButton() {
        return html`
            <div class="flex justify-center self-start py-[2px] bg-neutral-background relative mt-[6px]">

                <button rpl="" aria-controls="comment-children" aria-expanded="true" @click="${this.handleCollapse}"
                        aria-label="Toggle Comment Thread"
                        class="text-neutral-content-strong bg-neutral-background overflow-visible w-md h-md
button-small px-[var(--rem6)]
button-plain


icon
items-center justify-center
button inline-flex "> <span class="flex items-center justify-center"> <span
                        class="flex"><svg rpl="" fill="currentColor" height="16"
                                          icon-name="subtract-circle" viewBox="0 0 20 20"
                                          width="16" xmlns="http://www.w3.org/2000/svg">
                    <path
                            d="M10 2.8A7.2 7.2 0 112.8 10 7.208 7.208 0 0110 2.8zM10 1a9 9 0 100 18 9 9 0 000-18zm4 8.1H6v1.8h8V9.1z"></path>
                     </svg></span>  </span>
                </button>
            </div>
        `
    }

    renderUncollapseButton() {
        return html`
            <div class="flex justify-center">
                <button rpl="" @click="${this.handleCollapse}" class="text-neutral-content-strong bg-neutral-background overflow-visible w-lg xs:w-xl h-xl xs:h-[40px]
button-small px-[var(--rem6)]
button-plain


icon
items-center justify-center
button inline-flex "><span class="flex items-center justify-center"> <span class="flex"><svg rpl="" fill="currentColor"
                                                                                             height="16"
                                                                                             icon-name="add-circle"
                                                                                             viewBox="0 0 20 20"
                                                                                             width="16"
                                                                                             xmlns="http://www.w3.org/2000/svg"> <path
                        d="M10 1a9 9 0 100 18 9 9 0 000-18zm0 16.2a7.2 7.2 0 117.2-7.2 7.208 7.208 0 01-7.2 7.2zm.9-8.1H14v1.8h-3.1V14H9.1v-3.1H6V9.1h3.1V6h1.8v3.1z"></path>< </svg></span>  </span>
                </button>
            </div>
        `
    }

    renderChildren(e, {forceUpdate: t} = {}) {
        const o = Array.from(this.querySelectorAll(':scope > [slot^="children"]'));
        this.hasRenderedComments = o.some((e => "shreddit-comment" === e.tagName.toLowerCase()));
        this.hasMoreLink = o.some((e => "shreddit-comment" !== e.tagName.toLowerCase()));
        this.unsubscribeFaceplateRequestListeners.forEach((e => e())),
            this.unsubscribeFaceplateRequestListeners = [];
        const i = [];
        this._children = [];

        for (let e = 0; e < o.length; e++) {
            const t = o[e]
                , r = "shreddit-comment" === t.tagName.toLowerCase()
                , n = "faceplate-partial" === t.tagName.toLowerCase();
            i.push(r);
            const s = `children-${this.thingId}-${e}`;
            t.slot = s;
            n && (t.addEventListener("faceplate-request", this.handleMoreButtonClick),
                this.unsubscribeFaceplateRequestListeners.push((() => {
                        t.removeEventListener("faceplate-request", this.handleMoreButtonClick)
                    }
                )))
        }
        this._children = function (e, t) {
            const {html: o, currentTreePosition: i} = e;
            // if ("above-fold" !== i && "hidden-above-fold" !== i)
            //     console.log("ni");
            //     return [];
            const r = [];
            for (let i = 0; i < t.length; i++) {
                const n = i === t.length - 1
                    , s = t[i]
                    , a = `children-${e.thingId}-${i}`;
                r.push(u(e, {
                    isLastRenderedNode: n,
                    isComment: s
                })),
                    r.push(o`<slot name="${a}"></slot>`)
            }
            return r
        }(e, i);
        return this._children;
    }

    updateChildren() {
        this.renderChildren(this.getProps(), {
            forceUpdate: !0
        }),
            this.requestUpdate()
    }

    render() {
        const e = this.renderChildren(this.getProps());
        return "hidden-above-fold" === this.currentTreePosition ? e : h(this.getProps(), e)

    }

    static get styles() {
        return [
            shredditStyles,
            css`
                :host {
                    display: block;
                }

                :host([is-chosen-mq-comment]) slot[name='comment']::slotted(*) {
                    background-color: var(--color-neutral-background-selected);
                    padding-block: 8px;
                    margin-bottom: 4px;
                }

                details {
                    position: relative;
                }

                details > summary {
                    list-style: none;
                    padding-bottom: 2px;
                }

                details > summary:focus {
                    outline: none;
                }

                details > summary::-webkit-details-marker {
                    display: none;
                }

                .summary-flex {
                    display: flex;
                    margin-right: 0;
                    flex-direction: row;
                    align-items: center;
                }

                summary > *, .summary-flex > * {
                    white-space: nowrap;
                }

                summary > *, .summary-flex > * {
                    white-space: nowrap;
                }

                .contents {
                    padding-left: 1.75rem;
                    line-height: 1.0625rem;
                }

                :host([updateAnimation~='light']) {
                    animation: realtimeFade 3s;
                    animation-timing-function: ease-out;
                }

                :host([updateAnimation~='dark']) {
                    animation: realtimeFadeNight 3s;
                    animation-timing-function: ease-out;
                }

                @keyframes realtimeFade {
                    from {
                        background-color: #fff2bd;
                        border: 1px solid #dbaf00;
                    }
                    to {
                        background-color: #f0f5f9;
                        border: 1px solid transparent;
                    }
                }
                @keyframes realtimeFadeNight {
                    from {
                        background-color: #665505;
                        border: 1px solid #382d03;
                    }
                    to {
                        background-color: #030303;
                        border: 1px solid #343536;
                    }
                }
            `]
    }
}

window.customElements.define('shreddit-comment', ShRedditComment)
