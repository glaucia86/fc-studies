/**
 * file: src/ShareButtonPrint.ts
 * description: file responsible for the ShareButtonPrint class.
 * date: 03/10/2023
 * author: Glaucia Lemos <Twitter: @glaucia_lemos86>
 */

import AbstractShareButton from "./AbstractShareButton";

export default class ShareButtonPrint extends AbstractShareButton {
  constructor(className: string, url: string) {
    super(className, url);
  }

  createLink(): string {
    throw new Error("Unsupported Method!");
  }
}