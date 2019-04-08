var defautEvent = function() {
    var evt = document.createEvent("HTMLEvents");
    evt.initEvent("plusready", false, false);
    document.dispatchEvent(evt);
};

var defalutObj = function() {
    window.plus = {};
    window.plus.navigator = {};
    window.plus.navigator.getUserAgent=function() {
        return "iphone";
    };
    window.plus.storage = {};
    window.plus.storage.removeItem = function(key) {
        window.localStorage.removeItem(key);
    }

    window.$storage.get = function(key) {
        return window.localStorage.getItem(key);
    };
    window.$storage.set = function(key, data) {
        window.localStorage.setItem(key, data);
    };
};

setTimeout(() => {
    defautEvent();

    defalutObj();
}, 1000);


