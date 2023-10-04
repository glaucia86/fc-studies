/**
 * file: src/AbastractLinkShareButton.ts
 * description: file responsible for the AbastractLinkShareButton class.
 * date: 03/10/2023
 * author: Glaucia Lemos <Twitter: @glaucia_lemos86>
 */

import AbstractShareButton from "./AbstractShareButton";

export default abstract class AbastractLinkShareButton extends AbstractShareButton {
    url: string;
    
    constructor(className: string, url: string) {
        super(className);
        this.url = url;
    }
    
    abstract createLink(): string;
    
    createAction(): any {
        const link = this.createLink();
        return () => window.open(link);
    }
}