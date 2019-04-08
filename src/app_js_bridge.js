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

    window.$storage.get = function(param) {
        return window.localStorage.getItem(param);
    };
    window.$storage.set = function(param, data) {
        window.localStorage.setItem(param, data);
    };
};

setTimeout(() => {
    defautEvent();

    defalutObj();
}, 1000);


