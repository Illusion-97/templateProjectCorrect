export class MiniPostClassDefault {
    href: string = "#";
    text: string = "Lorem";
    alt: string = "";
    src?: string

    constructor(href?: string, text?: string, alt?: string, src?: string) {
        if(href) this.href = href;
        if(text) this.text = text;
        if(alt) this.alt = alt;
        this.src = src;
    }
}
