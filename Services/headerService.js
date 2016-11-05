mailBoxApp.service('HeaderService', function() {
    let _callback;

    this.setTitle = (title) => {
      _callback(title);
    };

    this.getTitle = function(callback) {
        _callback = callback;
    };
})
