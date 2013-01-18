enyo.kind({
    name: "jb.InAppBrowser",
    published: {
        url: "",
        baseUrl: "",
        target: "_blank",
        options: "location=no"
    },
    events: {
        onExit: "",
        onLoadStart: "",
        onLoadStop: ""
    },
    open: function (url, target, options) {
        var self = this;

        url = url || this.url;
        options = options || this.options;
        target = target || this.target;

        this.exit = function (event) {
            self.doExit(event);
            self.unbindEvents();
            self.win = null;
        };
        this.loadStart = function (event) {
            self.doLoadStart(event);
        };
        this.loadStop = function (event) {
            self.doLoadStop(event);
        };
        this.win = window.open(this.baseUrl + url, target, options);
        self.bindEvents();
        return this;
    },
    close: function () {
        this.win.close();
    },
    bindEvents: function () {
        if (!this.win) return;
        this.win.addEventListener("exit", this.exit);
        this.win.addEventListener("loadstart", this.loadStart);
        this.win.addEventListener("loadstop", this.loadStop);
    },
    unbindEvents: function () {
        if (!this.win) return;
        this.win.removeEventListener("exit", this.exit);
        this.win.removeEventListener("loadstart", this.loadStart);
        this.win.removeEventListener("loadstop", this.loadStop);
    }
});