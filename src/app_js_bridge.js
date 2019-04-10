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
    };
    window.plus.storage.getItem = function(key) {
        let data = window.localStorage.getItem(key);
        if(data) {
            data = JSON.parse(data);
        }
        return data;
    };
    window.plus.storage.setItem = function(key, data) {
        window.localStorage.setItem(key, JSON.stringify(data));
    };

    window.plus.io = {};
    window.plus.io.resolveLocalFileSystemURL = function() {};

    window.plus.gallery = {};
    window.plus.gallery.pick = function() {};

    window.plus.uploader = {};
    window.plus.uploader.createUpload = function() {};

    window.$storage.get = function(key) {
        let data = window.localStorage.getItem(key);
        if(data) {
            data = JSON.parse(data);
        }
        return data;
    };
    window.$storage.set = function(key, data) {
        window.localStorage.setItem(key, JSON.stringify(data));
    };
};

setTimeout(() => {
    defautEvent();

    defalutObj();
}, 1000);


