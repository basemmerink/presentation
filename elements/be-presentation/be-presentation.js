Polymer({
    selected: 1,

    slideLeft: function() {
        if (this.selected > 1) {
            this.selected--;
        }
    },

    slideRight: function() {
        if (this.selected < this.$.pages.children.length) {
            this.selected++;
        }
    },

    slide: function() {
        // do stuff
    }
});