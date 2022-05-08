(function(window) {

    let document = window.document;

    let bing = {
        hello: function() {
            console.log("Hello world")
        },
        e_id(id) {
            return document.getElementById(id)
        },
        es_class(className) {
            return document.getElementsByClassName(className)
        },
        e_select(selector) {
            return document.querySelector(selector)
        },
        es_select(selector) {
            return document.querySelectorAll(selector)
        },
        es_tag(tagName) {
            return document.getElementsByTagName(tagName);
        }
    }

    window.$bing = bing
})(window);


