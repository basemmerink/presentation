Polymer({
    selected: 0,

    slideLeft: function() {
        if (this.selected > 0) {
            this.selected--;
        }
    },

    slideRight: function() {
        if (this.selected < this.$.pages.children.length-1) {
            this.selected++;
        }
    },

    slide: function() {
        this.slideRight();
    },

    traag: function(e, id, el, step) {
        step = step || 0
        step++;
        switch (step) {
            case 1:
                this.$.traagOutput.innerHTML += "Requesting page... ";
                this.async(function() {
                    this.$.traagOutput.innerHTML += "Server received request... Generating page... ";
                    this.traag(e, id, el, step);
                }, this, 2000);
                break;
            case 2:
                this.async(function() {
                    this.$.traagOutput.innerHTML += "Sending page... ";
                    this.traag(e, id, el, step);
                }, this, 1000);
                break;
            case 3:
                this.async(function() {
                    this.$.traagOutput.innerHTML += "User received page... ";
                    this.traag(e, id, el, step);
                }, this, 2000);
                break;
            case 4:
                this.async(function() {
                    this.$.traagOutput.innerHTML += "User clicked a button... Sending action to server... ";
                    this.traag(e, id, el, step);
                }, this, 2000);
                break;
            case 5:
                this.async(function() {
                    this.$.traagOutput.innerHTML += "Server received action... Generating new page... ";
                    this.traag(e, id, el, step);
                }, this, 2000);
                break;
            case 6:
                this.async(function() {
                    this.$.traagOutput.innerHTML += "Etc... Etc.......";
                    this.traag(e, id, el, step);
                }, this, 2000);
                break;
        }
    },

    sofeaChange: function() {
        this.$.sofea.innerHTML = "SO<b>FE</b>A - Service Oriented <b>F</b>ront <b>E</b>nd Architecture"
    },

    openDemo: function() {
        window.location = "http://yoogle.com:8080";
    }
});