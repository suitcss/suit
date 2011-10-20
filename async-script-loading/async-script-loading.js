/*
 * Optimised asynchronous loading of cross-domain scripts
 *
 * Adapted from the function-based method described in http://www.phpied.com/social-button-bffs/
 * A document fragment is used to minimise the number of times objects are written to the DOM.
 * Supports the optional inclusion of an `id` for any supplied script.
 *
 * N.B. When used to load the Google Analytics or Facebook scripts, be sure to include the
 * necessary variables prior to this function.
 */

(function(doc, script) {
    var js,
        fjs = doc.getElementsByTagName(script)[0],
        frag = doc.createDocumentFragment(),
        add = function(url, id) {
            if (doc.getElementById(id)) { return; }
            js = doc.createElement(script);
            js.src = url;
            id && (js.id = id);
            frag.appendChild(js);
        };

    // Include any scripts (e.g. SDKs, social sharing buttons) that you want to load
    // asynchronously and an optional `id`

    // Example
    // add('http://example.com/script.js', 'examplesdk');
    // Google Analytics
    // add(('https:' == location.protocol ? '//ssl' : '//www') + '.google-analytics.com/ga.js', 'ga');
    // Facebook SDK
    // add('//connect.facebook.net/en_US/all.js', 'facebook-jssdk');

    fjs.parentNode.insertBefore(frag, fjs);
}(document, 'script'));
