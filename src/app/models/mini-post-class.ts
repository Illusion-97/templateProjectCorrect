export class MiniPostClass {
    href: string;
    text: string;
    alt: string;
    src?: string // <<type>> | undefined signifie qu'il s'agit d'un élément optionnel
    // <<nomVariable>>? : <<type>> est équivalent à <<nomVariable>> : <<type>> | undefined

    constructor(href: string, text: string, alt: string, src?: string) {
        this.href = href;
        this.text = text;
        this.alt = alt;
        this.src = src;
    }
}
