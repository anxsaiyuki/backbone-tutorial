var startApp = function() {
  var ListView = Backbone.View.extend({
    el: $('body'),

    initialize: function() {
      this.render();

      this.counter = 0;
    }, 

    events: {
      'click button.add': 'addItem',
      'click button.remove': 'removeItem'
    },

    addItem: function() {
      this.counter++;
      $('ul', this.el).append("<li>"+this.counter+"</li>");
    },

    removeItem: function() {
      if (this.counter < 0) { return; };

      this.counter--;
      $('ul li', this.el).last().remove();
    },

    render: function() {
      $(this.el).append("<div>Hello Word</div>");
      $(this.el).append("<ul></ul>");
    }
  })
  var listView = new ListView();
};

startApp();