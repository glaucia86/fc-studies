/**
 * file: src/ShareButtonFacebook.ts
 * description: file responsible for the ShareButtonFacebook class.
 * date: 09/29/2023
 * author: Glaucia Lemos <Twitter: @glaucia_lemos86>
 */

import AbstractShareButton from "./AbstractShareButton";

export default class ShareButtonFacebook extends AbstractShareButton {
  constructor(className: string, url: string) {
    super(className, url);
  }

  createLink(): string {
    return `https://www.facebook.com/sharer.php?u=${this.url}`
  }
}