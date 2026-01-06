import {LitElement, css, html} from 'lit'
import {shredditStyles} from "../shreddit-styles.js";

export class ShredditOverflowMenu extends LitElement {
    static get properties() {
        return {
            active: {type: Boolean, reflect: true}
        }
    }

    constructor() {
        super();
        this.active = false;
    }

        _click(e) {
        e.preventDefault();
        this.active = !this.active;
    }



    render() {
        return html`
            <rpl-dropdown placement="bottom-end" data-ignore-click-interception class="block comment-overflow-menu">
                <faceplate-tracker source="comment" action="click" noun="overflow_menu"> <!--?lit$220806737$--><button rpl="" aria-disabled="false" aria-label="打开用户操作" class="button border-md open-menu-btn text-12 button-plain-weak  inline-flex items-center
       px-sm
      " id="overflow-trigger" style="height: var(--size-button-sm-h); font: var(--font-button-sm)" aria-haspopup="menu" aria-expanded="true"> <!--?lit$220806737$--><span class="flex items-center"> <!--?lit$220806737$--><span class="flex text-16"><!--?lit$220806737$--><svg rpl="" fill="currentColor" height="12" icon-name="overflow-horizontal" viewBox="0 0 20 20" width="12" xmlns="http://www.w3.org/2000/svg"> <!--?lit$220806737$--><!--?lit$220806737$--><path d="M16 11.75a1.75 1.75 0 11.001-3.501A1.75 1.75 0 0116 11.75zM11.75 10a1.75 1.75 0 10-3.501.001A1.75 1.75 0 0011.75 10zm-6 0a1.75 1.75 0 10-3.501.001A1.75 1.75 0 005.75 10z"></path><!--?--> </svg></span> <!--?lit$220806737$--> </span> <!--?lit$220806737$--><!--?--> </button> <!----></faceplate-tracker>
                <faceplate-menu slot="content" class="whitespace-nowrap max-h-[25.5rem] overflow-y-auto rounded-1">
                    <li rpl="" class="relative list-none mt-0 follow-comment-menu-button" role="menuitem"> <!--?lit$220806737$--><!--?lit$220806737$--><div aria-disabled="false" tabindex="0" class="flex justify-between relative px-md gap-[0.5rem] text-secondary hover:text-secondary-hover active:bg-interactive-pressed hover:bg-neutral-background-hover hover:no-underline cursor-pointer  py-xs  -outline-offset-1 " style="padding-inline-end:16px"> <!--?lit$220806737$--> <span class="flex items-center gap-xs min-w-0 shrink"> <!--?lit$220806737$--> <span class="flex shrink-0 items-center justify-center h-xl w-xl text-20 leading-4"> <!--?lit$220806737$--><svg rpl="" fill="currentColor" height="20" icon-name="notifications" viewBox="0 0 20 20" width="20" xmlns="http://www.w3.org/2000/svg"> <!--?lit$220806737$--><!--?lit$220806737$--><path d="M18.176 14.218l-.925-1.929a2.577 2.577 0 01-.25-1.105V8c0-3.86-3.142-7-7-7-3.86 0-7 3.14-7 7v3.184c0 .38-.088.762-.252 1.105l-.927 1.932A1.103 1.103 0 002.82 15.8h3.26A4.007 4.007 0 0010 19a4.008 4.008 0 003.918-3.2h3.26a1.1 1.1 0 00.934-.514 1.1 1.1 0 00.062-1.068h.002zM10 17.2c-.93 0-1.722-.583-2.043-1.4h4.087a2.197 2.197 0 01-2.043 1.4zM3.925 14l.447-.933c.28-.584.43-1.235.43-1.883V8c0-2.867 2.331-5.2 5.198-5.2A5.205 5.205 0 0115.2 8v3.184c0 .648.147 1.299.428 1.883l.447.933H3.925z"></path><!--?--> </svg> </span> <!--?lit$220806737$--> <span class="flex flex-col justify-center min-w-0 shrink py-[var(--rem6)]"> <span class="text-14"><!--?lit$220806737$-->关注评论</span> <span class="text-12 text-secondary-weak"><!--?lit$220806737$--></span> </span> </span> <!--?lit$220806737$--><span class="flex items-center shrink-0"> <span class="flex items-center justify-center h-lg"><!--?lit$220806737$--></span> </span>  </div> <!--?lit$220806737$--><!--?--> </li>
                    <li rpl="" class="relative list-none mt-0 save-comment-menu-button" role="menuitem"> <!--?lit$220806737$--><!--?lit$220806737$--><div aria-disabled="false" tabindex="-1" class="flex justify-between relative px-md gap-[0.5rem] text-secondary hover:text-secondary-hover active:bg-interactive-pressed hover:bg-neutral-background-hover hover:no-underline cursor-pointer  py-xs  -outline-offset-1 " style="padding-inline-end:16px"> <!--?lit$220806737$--> <span class="flex items-center gap-xs min-w-0 shrink"> <!--?lit$220806737$--> <span class="flex shrink-0 items-center justify-center h-xl w-xl text-20 leading-4"> <!--?lit$220806737$--><svg rpl="" fill="currentColor" height="20" icon-name="save" viewBox="0 0 20 20" width="20" xmlns="http://www.w3.org/2000/svg"> <!--?lit$220806737$--><!--?lit$220806737$--><path d="M13.6 3.8c.882 0 1.6.718 1.6 1.6v11.166l-5.201-2.911L4.8 16.566V5.4a1.6 1.6 0 011.6-1.6h7.2zm0-1.8H6.4A3.4 3.4 0 003 5.4v12.24c0 .682.56 1.172 1.172 1.172.19 0 .385-.047.57-.151L10 15.717l5.259 2.944a1.167 1.167 0 001.742-1.021V5.4A3.4 3.4 0 0013.6 2z"></path><!--?--> </svg> </span> <!--?lit$220806737$--> <span class="flex flex-col justify-center min-w-0 shrink py-[var(--rem6)]"> <span class="text-14"><!--?lit$220806737$-->保存</span> <span class="text-12 text-secondary-weak"><!--?lit$220806737$--></span> </span> </span> <!--?lit$220806737$--><span class="flex items-center shrink-0"> <span class="flex items-center justify-center h-lg"><!--?lit$220806737$--></span> </span>  </div> <!--?lit$220806737$--><!--?--> </li>
                </faceplate-menu>
                
            </rpl-dropdown>
        `
    }

    static get styles() {
        return [shredditStyles,
            css`
                
            `]
    }
}

window.customElements.define('shreddit-overflow-menu', ShredditOverflowMenu)