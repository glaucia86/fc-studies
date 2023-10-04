/**
 * file: src/MockEventHandler.ts
 * description: file responsible for the MockEventHandler class.
 * date: 03/10/2023
 * author: Glaucia Lemos <Twitter: @glaucia_lemos86>
 */

import EventHandler from "./EventHandler";

export default class MockEventHandler implements EventHandler {

  addEventListenerToClass(className: string, event: string, fn: any) {
    console.log(className, event, fn);
  }
}
