/* How to use:
Rename this file to config.js

Get your current Reddit authorisation token using the browser devtools
An example for Edge and other Chromium browsers:

* Go to the Network tab
* Set the filter to "Fetch/XHR"
* Click on a pixel in r/place
* Look for a request called "query"
* Go to the headers, and copy the "Authorization" header
* Paste it into the token entry in this file, including the "Bearer" prefix

*/

export default {
    token: "",
}