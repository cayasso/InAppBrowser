ActioSheet
==========

Enyo 2 plugin for handling new InAppBrowser feature in PhoneGap 2.3.0+

Dependencies
------------

This is for PhoneGap 2.3.0+

Example Usage
-------------

		enyo.kind({
		    name: "MyInAppBrowserTest",
		    components: [
		        {
		            name: "win",
		            kind: "jb.InAppBrowser",
		            onExit: "onWindowExit",
		            onLoadStart: "onWindowLoadStart",
		            onLoadStop: "onWindowLoadStop"
		        }
		    ],

		    // actions
		    open: function () {
		        // open google
		        this.$.win.open("http://www.google.com/");
		    },
		    close: function () {
		        this.$.win.close();
		    },

		    // events
		    onWindowLoadStart: function (inSender, inEvent) {
		        // handle on load start
		        console.log(inEvent);
		    },
		    onWindowLoadStop: function (inSender, inEvent) {
		        // handle on load stop
		        console.log(inEvent);
		    },
		    onWindowExit: function (inSender, inEvent) {
		        // handle on exit
		        console.log(inEvent);
		    }
		});

Published
---------

		url: "",
        baseUrl: "",
        target: "_blank",
        options: "location=no"

Events
------

		onExit: "",
        onLoadStart: "",
        onLoadStop: ""

Actions
-------

		this.$.win.open("http://www.google.com/img");
		this.$.win.close();
		this.$.win.setUrl("http://www.google.com/");
		this.$.win.setTarget("_system");
		this.$.win.setOptions("location=yes");
		this.$.win.setBaseUrl("http://www.google.com/");

		// if base url is set you can call open like this
		this.$.win.open("imghp"); // open http://www.google.com/imghp
		
License
-------

Copyright (C) 2012 Jonathan Brumley <cayasso@gmail.com>

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.