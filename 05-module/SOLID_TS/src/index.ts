/**
 * file: src/index.ts
 * description: file responsible for running the application.
 * date: 09/29/2023
 * author: Glaucia Lemos <Twitter: @glaucia_lemos86>
 */

import AbstractShareButton from "./AbstractShareButton";
import ShareButtonTwitter from "./ShareButtonTwitter";
import ShareButtonFacebook from "./ShareButtonFacebook";
import ShareButtonLinkedin from "./ShareButtonLinkedin";
import ShareButtonPrint from "./ShareButtonPrint";


const twitter: AbstractShareButton = new ShareButtonTwitter('.btn-twitter', 'https://www.youtube.com/glaucia86');
twitter.bind();

const facebook: AbstractShareButton = new ShareButtonFacebook('.btn-facebook', 'https://www.youtube.com/glaucia86');
facebook.bind();

const linkedin: AbstractShareButton = new ShareButtonLinkedin('.btn-linkedin', 'https://www.youtube.com/glaucia86');
linkedin.bind();

const print: AbstractShareButton = new ShareButtonPrint('.btn-print');
print.bind();