/**
 * file: src/ShareButtonTwitter.ts
 * description: file responsible for the ShareButtonTwitter class.
 * date: 09/29/2023
 * author: Glaucia Lemos <Twitter: @glaucia_lemos86>
 */

import AbstractShareButton from "./AbstractShareButton";

export default class ShareButtonTwitter extends AbstractShareButton {
  constructor(className: string, url: string) {
    super(className, url);
  }

  createLink(): string {
    return `https://twitter.com/share?url=${this.url}`
  }
}