import {css} from 'lit'

export const shredditCommentStyles = css`
    details > summary {
    list-style: none;
    padding-bottom: 2px;
}
    
        .grid {
        display: grid;
    }
    
    .grid-cols-\\[24px_minmax\\(0\\2c 1fr\\)\\] {
        grid-template-columns: 24px minmax(0, 1fr);
    }
    
    summary > *, .summary-flex > * {
    white-space: nowrap;
}
    
    summary > *, .summary-flex > * {
    white-space: nowrap;
}
    
    .pointer-events-none {
    pointer-events: none;
}
    
    .relative {
    position: relative;
}
    
    slot {
    display: contents;
}
    .flex {
    display: flex;
}
    
    .button {
    background: var(--button-color-background);
    border: none;
    border: var(--button-border-width, 0) solid var(--button-border-color, transparent);
    border-radius: 999px;
    box-shadow: var(--button-shadow);
    box-sizing: border-box;
    color: var(--button-color-text);
    cursor: pointer;
    display: inline-block;
    font: var(--button-font);
    height: var(--button-height);
    line-height: calc(var(--button-height) - var(--button-border-width, 0px) * 2);
    outline-offset: 0;
    overflow: hidden;
    padding: 0 calc(var(--button-padding) - var(--button-border-width, 0px));
    text-align: center;
    text-decoration: none;
    text-overflow: ellipsis;
    white-space: nowrap;
    --button-border-color: var(--button-border-color-default);
    --button-border-width: var(--button-border-width-default);
    --button-color-background: var(--button-color-background-default);
    --button-color-text: var(--button-color-text-default);
}
    
    .button-small {
    --button-height: var(--size-button-sm-h);
    --button-padding: var(--spacer-2xs);
    --button-font: var(--font-button-sm);
    --button-border-width-default: var(--line-button-sm-border);
}
    
    .button-shell {
    background: var(--button-color-background);
    border: none;
    border: var(--button-border-width, 0) solid var(--button-border-color, transparent);
    border-radius: 999px;
    box-shadow: var(--button-shadow);
    box-sizing: border-box;
    color: var(--button-color-text);
    cursor: pointer;
    display: inline-block;
    font: var(--button-font);
    height: var(--button-height);
    line-height: calc(var(--button-height) - var(--button-border-width, 0px) * 2);
    outline-offset: 0;
    overflow: hidden;
    padding: 0 calc(var(--button-padding) - var(--button-border-width, 0px));
    text-align: center;
    text-decoration: none;
    text-overflow: ellipsis;
    white-space: nowrap;
    --button-border-color: var(--button-border-color-default);
    --button-border-width: var(--button-border-width-default);
    --button-color-background: var(--button-color-background-default);
    --button-color-text: var(--button-color-text-default);
}
    
    .button-plain, .button-plain-weak {
    --button-color-background-default: transparent;
    --button-color-background-focus: transparent;
    --button-color-background-hover: var(--color-button-plain-background-hover);
    --button-color-background-disabled: var(--color-button-plain-background-disabled);
    --button-color-background-activated: var(--color-button-plain-background-activated);
    --button-color-background-active: linear-gradient(var(--color-button-secondary-background-hover), var(--color-button-secondary-background-hover));
    --button-color-text-default: var(--color-button-plain-text);
    --button-color-text-disabled: var(--color-button-plain-text-disabled);
    --button-color-text-activated: var(--color-button-plain-text-activated);
    --button-color-text-hover: var(--color-button-plain-text-hover);
    --button-border-color-default: transparent;
}
    
    .button-plain-weak {
    --button-color-text-default: var(--color-button-plain-text-weak);
}

    .grid-cols-\\[24px_1fr\\] {
        grid-template-columns: 24px 1fr;
    }
    
    .absolute {
    position: absolute;
}
    
    .bottom-0 {
    bottom: 0;
}
    
    .start-0 {
    inset-inline-start: 0;
}
    
    .top-0 {
    top: 0;
}
    
    .z-0 {
    z-index: 0;
}
    
    .mb-sm {
    margin-bottom: .75rem;
}
    
    .inline-flex {
    display: inline-flex;
}
    
    .box-border {
    box-sizing: border-box;
}
    
    .h-md {
    height: 1rem;
}
    
    .w-lg {
    width: 1.5rem;
}
    
    .w-md {
    width: 1rem;
}
    
    .cursor-pointer {
    cursor: pointer;
}
    
    .aspect-square {
    aspect-ratio: 1 / 1;
}
    
    .items-center {
    align-items: center;
}
    
    .justify-center {
    justify-content: center;
}
    
    .contents {
    display: contents;
}
    
    .contents {
    padding-left: 1.75rem;
    line-height: 1.0625rem;
}
    
    .h-full {
    height: 100%;
}

    .w-\\[1px\\] {
        width: 1px;
    }
    
    .bg-tone-4 {
    background-color: var(--color-tone-4);
}
    
    .min-w-0 {
    min-width: 0;
}

    .mt-\\[6px\\] {
        margin-top: 6px;
    }
    
    .self-start {
    align-self: flex-start;
}
    
    .overflow-visible {
    overflow: visible;
}
    
    .bg-neutral-background {
    background-color: var(--color-neutral-background);
}

    .py-\\[2px\\] {
        padding-bottom: 2px;
        padding-top: 2px;
    }
    


    .px-\\[var\\(--rem6\\)\\] {
        padding-left: var(--rem6);
        padding-right: var(--rem6);
    }
    
    .text-neutral-content-strong {
    color: var(--color-neutral-content-strong);
}
    
    .button.icon {
    width: var(--button-height);
}
    
    .justify-end {
    justify-content: flex-end;
}

    .w-\\[calc\\(50\\%\\+0\\.5px\\)\\] {
        width: calc(50% + .5px);
    }

    .rounded-es-\\[12px\\] {
        border-end-start-radius: 12px;
    }
    .border-0 {
    border-width: 0;
}

    .border-b-\\[1px\\] {
        border-bottom-width: 1px;
    }

    .border-s-\\[1px\\] {
        border-inline-start-width: 1px;
    }
    
    .border-solid {
    border-style: solid;
}
    
    .border-tone-4 {
    border-color: var(--color-tone-4);
}

    .\\[\\&\\>\\.threadline\\>\\*\\]\\:border-tone-4 > .threadline > * {
        border-color: var(--color-tone-4);
    }
    
        .w-100 {
    width: 100%;
}
    
    .flex-col {
    flex-direction: column;
}
    
    .max-h-2xl {
    max-height: 3rem;
}
    
    .shrink {
    flex-shrink: 1;
}
    .p-0 {
    padding: 0;
}

    .text-12, .text-12\\/4 {
        font-size: .75rem;
        line-height: 1rem;
    }
    .font-semibold {
    font-weight: 600;
}
    .cursor-auto {
    cursor: auto;
}
    
    .mx-xs {
    margin-left: .5rem;
    margin-right: .5rem;
}
    
    .text-15, .text-16 {
    line-height: 1.25rem;
}
.text-16 {
    font-size: 1rem;
}

    @media (min-width: 768px) {
        .xs\\:w-xl {
            width: 2rem;
        }
    }



`;