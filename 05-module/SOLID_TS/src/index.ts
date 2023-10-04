/**
 * file: src/index.ts
 * description: file responsible for running the application.
 * date: 09/29/2023
 * author: Glaucia Lemos <Twitter: @glaucia_lemos86>
 */

import ShareButtonTwitter from "./ShareButtonTwitter";
import ShareButtonFacebook from "./ShareButtonFacebook";
import ShareButtonLinkedin from "./ShareButtonLinkedin";
import ShareButtonPrint from "./ShareButtonPrint";


const twitter = new ShareButtonTwitter('.btn-twitter', 'https://www.youtube.com/glaucia86');
twitter.bind();

const facebook = new ShareButtonFacebook('.btn-facebook', 'https://www.youtube.com/glaucia86');
facebook.bind();

const linkedin = new ShareButtonLinkedin('.btn-linkedin', 'https://www.youtube.com/glaucia86');
linkedin.bind();

const print = new ShareButtonPrint('.btn-print', 'https://www.youtube.com/glaucia86');
print.bind();