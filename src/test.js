    let u = class extends r.s {
        constructor() {
            super(...arguments),
            this.postId = "",
            this.isTruncated = !1,
            this.ui = "mobile",
            this.pubsub = new e.m(this),
            this._searchDynamicIdCacheController = new s.S(this,e.dB.PdpCommentHighlightedSearchTerm),
            this._visibilityDetails = null,
            this.depthUpdated = null,
            this.handleCommentCreated = ({parentThingId: t, body: n}) => {
                this.postId === t && n && this.querySelector("#next-comment")?.after(...e.b4(n))
            }
        }
        static get styles() {
            return [e.t, e.J(":host {\n  display: block;\n  background-color: var(--shreddit-content-background);\n  padding-bottom: var(--spacer-xs);\n}\n")]
        }
        get visibilityDetails() {
            return null === this._visibilityDetails && null === this.depthUpdated && (this.depthUpdated = new Promise((e => {
                requestAnimationFrame(( () => {
                    const t = this.getVisibilityDetails();
                    this._visibilityDetails = t,
                    e(t)
                }
                ))
            }
            ))),
            this._visibilityDetails
        }
        getVisibilityDetails({containerWidth: e}={}) {
            const t = this.querySelector(":scope > shreddit-comment")
              , n = t?.depth ?? 0;
            e ?? (e = this.getBoundingClientRect().width);
            const r = "mobile" === this.ui ? 232 : 320
              , i = "mobile" === this.ui ? 18 : 32
              , a = this.maxDepth || ("mobile" === this.ui ? 4 : 10)
              , s = Math.floor((e - r) / i)
              , o = Math.max(1, Math.min(s, a))
              , l = o + n
              , m = this.querySelector(":scope shreddit-comment[is-chosen-mq-comment]")
              , c = m?.depth ?? 0
              , h = Math.max(n, c - o + 1);
            return m ? {
                maxVisibleDepth: h + o,
                minVisibleDepth: h
            } : {
                maxVisibleDepth: l
            }
        }
        connectedCallback() {
            super.connectedCallback(),
            this.pubsub.subscribe(e.T.CommentCreated, this.handleCommentCreated),
            this.resizeObserver = new ResizeObserver(i.T((e => {
                let t = 0;
                for (const n of e) {
                    const e = n.contentBoxSize.at(0)?.inlineSize;
                    if (e) {
                        t = e;
                        break
                    }
                }
                if (0 === t)
                    return;
                const n = this.getVisibilityDetails({
                    containerWidth: t
                });
                if (this._visibilityDetails?.maxVisibleDepth !== n.maxVisibleDepth || this._visibilityDetails?.minVisibleDepth !== n.minVisibleDepth) {
                    this._visibilityDetails = n,
                    this.depthUpdated = Promise.resolve(n);
                    for (const e of this.querySelectorAll("shreddit-comment"))
                        e.setVisibility(n.maxVisibleDepth, n.minVisibleDepth)
                }
            }
            ), 128, !0)),
            this.resizeObserver.observe(this, {
                box: "content-box"
            })
        }
        disconnectedCallback() {
            super.disconnectedCallback(),
            this.resizeObserver?.unobserve(this),
            this.resizeObserver?.disconnect()
        }
        showAllComments() {
            e.p(e.T.TriggerCommentBlockingAuth, {
                source: a.C.Button
            }),
            this.isTruncated = !1,
            e.f(this, i.b2())
        }
        renderShredtopViewMoreCommentsButton(t) {
            return e.Y({
                attributes: {
                    type: "button",
                    className: "ml-sm xs:ml-0 font-semibold mt-md",
                    onclick: t
                },
                appearance: "brand",
                shape: "pill",
                leadingIcon: r.q({
                    size: r.I.Medium
                }),
                size: e.ac.Small,
                children: "查看更多评论"
            });
        }
        renderTruncatedExpandButton() {
            return this.renderShredtopViewMoreCommentsButton(this.showAllComments)
        }
        renderContent() {
            return function(e, t) {
                const n = "评论区域";
                return e` <section class="flex flex-col px-md xs:px-0 gap-md relative" aria-label="${"评论"}"> <h1 class="absolute -top-full -start-full w-px h-px overflow-hidden" aria-label="${n}"> ${n} </h1> ${e`<slot></slot>`} ${t ? "" : e`<slot name="truncated"></slot>`} </section> `;
            }(r.x, this.isTruncated);
        }
        renderExpandButton() {
            return this.isTruncated ? this.renderTruncatedExpandButton() : ""
        }
        render() {
            return r.x` ${this.renderContent()} ${this.renderExpandButton()} `
        }
    }
    ;
    e._([e.n({
        type: String,
        attribute: "post-id"
    })], u.prototype, "postId", void 0),
    e._([e.n({
        type: Boolean
    })], u.prototype, "isTruncated", void 0),
    e._([e.n({
        type: String,
        attribute: "ui"
    })], u.prototype, "ui", void 0),
    e._([e.n({
        type: Number,
        attribute: "max-depth"
    })], u.prototype, "maxDepth", void 0),
    u = e._([e.e("shreddit-comment-tree")], u);