/**
 * file: src/ShareButtonPrint.ts
 * description: file responsible for the ShareButtonPrint class.
 * date: 03/10/2023
 * author: Glaucia Lemos <Twitter: @glaucia_lemos86>
 */

import EventHandler from "./EventHandler";
import AbstractShareButton from "./AbstractShareButton";

export default class ShareButtonPrint extends AbstractShareButton {
  constructor(eventHandler: EventHandler, className: string) {
    super(eventHandler, className);
  }

  createAction() {
    return () => window.print();
  }
}