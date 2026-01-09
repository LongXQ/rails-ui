import {css, html, LitElement} from "lit";
import {ShRedditCommentTree} from "../shreddit-comment-tree/shreddit-comment-tree.js";

const s = (e, t) => "method" === t.kind && t.descriptor && !("value"in t.descriptor) ? {
        ...t,
        finisher(i) {
            i.createProperty(t.key, e)
        }
    } : {
        kind: "field",
        key: Symbol(),
        placement: "own",
        descriptor: {},
        originalKey: t.key,
        initializer() {
            "function" == typeof t.initializer && (this[t.key] = t.initializer.call(this))
        },
        finisher(i) {
            i.createProperty(t.key, e)
        }
    };
    function d(e) {
        return (t, i) => void 0 !== i ? ( (e, t, i) => {
            t.constructor.createProperty(i, e)
        }
        )(e, t, i) : s(e, t)
    }
    function l(e) {
        return d({
            ...e,
            state: !0
        })
    }

    const pt = css`:host{display:inline-block;fill:currentColor;vertical-align:middle;line-height:1em}svg{fill:currentColor;width:auto}:host([size=sm])>svg{height:1em}:host([size=md])>svg{height:1.25em}:host([size=lg])>svg{height:1.5em}:host([size=xl])>svg{height:2em}`;
    function vt(t, e, s) {
        class i extends HTMLElement {
            _getBooleanAttr(t) {
                return this.hasAttribute(t) && "false" !== this.getAttribute(t)
            }
            constructor() {
                super(),
                this.fill = !1,
                this.fill = this._getBooleanAttr("fill"),
                this.init()
            }
            init() {
                this.hasAttribute("size") || this.setAttribute("size", 16),
                this.attachShadow({
                    mode: "open"
                }),
                l(this.shadowRoot, [pt]),
                this.render()
            }
            render() {
                this.shadowRoot.innerHTML = this.fill && s || e
            }
            attributeChangedCallback(t) {
                "fill" === t && (this.fill = this._getBooleanAttr(t),
                this.render())
            }
        }
        window.customElements.define(t, i)
    }

vt("shreddit-logo", '<svg xmlns="http://www.w3.org/2000/svg"\n    viewBox="0 0 216 216"\n    xmlns:xlink="http://www.w3.org/1999/xlink"\n    xml:space="preserve">\n      <defs>\n        <linearGradient id="orangeredGradient" gradientTransform="rotate(90)">\n          <stop offset="0%" stop-color="#FE7B0E"></stop>\n          <stop offset="100%" stop-color="#EF0A22"></stop>\n        </linearGradient>\n      </defs>\n      <defs><radialGradient id="snoo-radial-gradient" cx="169.75" cy="92.19" r="50.98" fx="169.75" fy="92.19" gradientTransform="matrix(1 0 0 .87 0 11.64)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#feffff"/><stop offset=".4" stop-color="#feffff"/><stop offset=".51" stop-color="#f9fcfc"/><stop offset=".62" stop-color="#edf3f5"/><stop offset=".7" stop-color="#dee9ec"/><stop offset=".72" stop-color="#d8e4e8"/><stop offset=".76" stop-color="#ccd8df"/><stop offset=".8" stop-color="#c8d5dd"/><stop offset=".83" stop-color="#ccd6de"/><stop offset=".85" stop-color="#d8dbe2"/><stop offset=".88" stop-color="#ede3e9"/><stop offset=".9" stop-color="#ffebef"/></radialGradient><radialGradient xlink:href="#snoo-radial-gradient" id="snoo-radial-gradient-2" cx="47.31" r="50.98" fx="47.31"/><radialGradient xlink:href="#snoo-radial-gradient" id="snoo-radial-gradient-3" cx="109.61" cy="85.59" r="153.78" fx="109.61" fy="85.59" gradientTransform="matrix(1 0 0 .7 0 25.56)"/><radialGradient id="snoo-radial-gradient-4" cx="-6.01" cy="64.68" r="12.85" fx="-6.01" fy="64.68" gradientTransform="matrix(1.07 0 0 1.55 81.08 27.26)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#f60"/><stop offset=".5" stop-color="#ff4500"/><stop offset=".7" stop-color="#fc4301"/><stop offset=".82" stop-color="#f43f07"/><stop offset=".92" stop-color="#e53812"/><stop offset="1" stop-color="#d4301f"/></radialGradient><radialGradient xlink:href="#snoo-radial-gradient-4" id="snoo-radial-gradient-5" cx="-73.55" cy="64.68" r="12.85" fx="-73.55" fy="64.68" gradientTransform="matrix(-1.07 0 0 1.55 62.87 27.26)"/><radialGradient id="snoo-radial-gradient-6" cx="107.93" cy="166.96" r="45.3" fx="107.93" fy="166.96" gradientTransform="matrix(1 0 0 .66 0 57.4)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#172e35"/><stop offset=".29" stop-color="#0e1c21"/><stop offset=".73" stop-color="#030708"/><stop offset="1"/></radialGradient><radialGradient xlink:href="#snoo-radial-gradient" id="snoo-radial-gradient-7" cx="147.88" cy="32.94" r="39.77" fx="147.88" fy="32.94" gradientTransform="matrix(1 0 0 .98 0 .54)"/><radialGradient id="snoo-radial-gradient-8" cx="131.31" cy="73.08" r="32.6" fx="131.31" fy="73.08" gradientUnits="userSpaceOnUse"><stop offset=".48" stop-color="#7a9299"/><stop offset=".67" stop-color="#172e35"/><stop offset=".75"/><stop offset=".82" stop-color="#172e35"/></radialGradient><style>.snoo-cls-11,.snoo-cls-9{stroke-width:0}.snoo-cls-9{fill:#842123}.snoo-cls-11{fill:#ffc49c}</style></defs><path d="M108 0C48.35 0 0 48.35 0 108c0 29.82 12.09 56.82 31.63 76.37l-20.57 20.57C6.98 209.02 9.87 216 15.64 216H108c59.65 0 108-48.35 108-108S167.65 0 108 0Z" style="fill:#ff4500;stroke-width:0"/><circle cx="169.22" cy="106.98" r="25.22" style="stroke-width:0;fill:url(#snoo-radial-gradient)#fff"/><circle cx="46.78" cy="106.98" r="25.22" style="fill:url(#snoo-radial-gradient-2)#fff;stroke-width:0"/><ellipse cx="108.06" cy="128.64" rx="72" ry="54" style="fill:url(#snoo-radial-gradient-3)#fff;stroke-width:0"/><path d="M86.78 123.48c-.42 9.08-6.49 12.38-13.56 12.38s-12.46-4.93-12.04-14.01c.42-9.08 6.49-15.02 13.56-15.02s12.46 7.58 12.04 16.66Z" style="fill:url(#snoo-radial-gradient-4)#fc4301;stroke-width:0"/><path d="M129.35 123.48c.42 9.08 6.49 12.38 13.56 12.38s12.46-4.93 12.04-14.01c-.42-9.08-6.49-15.02-13.56-15.02s-12.46 7.58-12.04 16.66Z" style="fill:url(#snoo-radial-gradient-5)#fc4301;stroke-width:0"/><ellipse cx="79.63" cy="116.37" class="snoo-cls-11" rx="2.8" ry="3.05"/><ellipse cx="146.21" cy="116.37" class="snoo-cls-11" rx="2.8" ry="3.05"/><path d="M108.06 142.92c-8.76 0-17.16.43-24.92 1.22-1.33.13-2.17 1.51-1.65 2.74 4.35 10.39 14.61 17.69 26.57 17.69s22.23-7.3 26.57-17.69c.52-1.23-.33-2.61-1.65-2.74-7.77-.79-16.16-1.22-24.92-1.22Z" style="fill:url(#snoo-radial-gradient-6)#000;stroke-width:0"/><circle cx="147.49" cy="49.43" r="17.87" style="fill:url(#snoo-radial-gradient-7)#fff;stroke-width:0"/><path d="M107.8 76.92c-2.14 0-3.87-.89-3.87-2.27 0-16.01 13.03-29.04 29.04-29.04 2.14 0 3.87 1.73 3.87 3.87s-1.73 3.87-3.87 3.87c-11.74 0-21.29 9.55-21.29 21.29 0 1.38-1.73 2.27-3.87 2.27Z" style="fill:url(#snoo-radial-gradient-8)#000;stroke-width:0"/><path d="M62.82 122.65c.39-8.56 6.08-14.16 12.69-14.16 6.26 0 11.1 6.39 11.28 14.33.17-8.88-5.13-15.99-12.05-15.99s-13.14 6.05-13.56 15.2c-.42 9.15 4.97 13.83 12.04 13.83h.52c-6.44-.16-11.3-4.79-10.91-13.2ZM153.3 122.65c-.39-8.56-6.08-14.16-12.69-14.16-6.26 0-11.1 6.39-11.28 14.33-.17-8.88 5.13-15.99 12.05-15.99 7.07 0 13.14 6.05 13.56 15.2.42 9.15-4.97 13.83-12.04 13.83h-.52c6.44-.16 11.3-4.79 10.91-13.2Z" class="snoo-cls-9"/>\n    </svg>\n  ');

    export class ShredditLoading extends LitElement {
    static get styles() {
        return css`
            :host {
                display: flex;
                justify-content: center;
                align-items: center;
                position: relative;
                height: 192px;
                isolation: isolate;
            }

            :host:before {
                content: '';
                position: absolute;
                width: 64px;
                height: 64px;
                background-color: var(--color-global-orangered);
                opacity: 0.75;
                border-radius: 100%;
                animation: scaleout 1.5s infinite ease-in-out;
            }

            :host shreddit-logo {
                font-size: 64px;
                height: 64px;
                width: 64px;
                z-index: 1;
            }

            @keyframes scaleout {
                0% {
                    transform: scale(1);
                }
                100% {
                    transform: scale(1.5);
                    opacity: 0;
                }
            }  `
    }

    render() {
        return html`
            <shreddit-logo></shreddit-logo>`
    }
}

window.customElements.define('shreddit-loading', ShredditLoading)