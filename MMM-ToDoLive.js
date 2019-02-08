/* Magic Mirror
 * Module: MMM-ToDoLive
 *
 * By Mykle1
 * MIT Licensed.
 */
Module.register("MMM-ToDoLive", {

    defaults: {
        css: "1", // 1=default, 2=Clean, 3=Lord of the Rings, 4=handwriting, 5=Julee, 6=Englebert
        myHeader: "",
		    maxWidth: "100%",             // your picture files go in "pix" folder of module
		    updateInterval: 30 * 60 * 1000,     // updates display
		    animationSpeed: 3000,
		},

    start: function() {
        var self = this;
    },

    // Gets correct css file from config.js
    getStyles: function() {
      if(this.config.css != ""){
        return ["modules/MMM-ToDoLive/css/MMM-ToDoLive" + this.config.css + ".css"];
      } else {
        return ["modules/MMM-ToDoLive/css/MMM-ToDoLive1.css"]; // default.css
    }
 },

      // Override dom generator.
      getDom: function() {

      var wrapper = document.createElement("div");


  if (this.config.myHeader != ""){
      var customHeader = document.createElement("div");
      customHeader.classList.add("medium", "bright", "customHeader");
      customHeader.innerHTML = this.config.myHeader;
      wrapper.appendChild(customHeader);
    }


      var todo = document.createElement("div");
      todo.classList.add("medium", "bright", "text");
      // Read the saved file and insert text here    (directly below this text) if possible !!!!!
      todo.innerHTML = `<div contenteditable="true">Click here to start your list</div>`;
      wrapper.appendChild(todo);


       return wrapper;
    },

/////  Add this function to the modules you want to control with voice //////

    notificationReceived: function(notification, payload) {
        if (notification === 'HIDE_TODO') {
            this.hide(500);
        }  else if (notification === 'SHOW_TODO') {
            this.show(1000);
        }

    },

});
