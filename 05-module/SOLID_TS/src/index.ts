/**
 * file: src/index.ts
 * description: file responsible for running the application.
 * date: 09/29/2023
 * author: Glaucia Lemos <Twitter: @glaucia_lemos86>
 */

import ShareButton from "./ShareButton";

const shareButton = new ShareButton("https://bit.ly/youtube-canal-glaucialemos");
shareButton.bind(".btn-twitter", "twitter");
shareButton.bind(".btn-linkedin", "linkedin");
shareButton.bind(".btn-facebook", "facebook");