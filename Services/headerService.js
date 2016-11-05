mailBoxApp.service('HeaderService', function() {
    let _callback;
    let _email;

    this.setTitle = (title) => {
        _callback(title);
    };

    this.getTitle = function(callback) {
        _callback = callback;
    };

    this.setEmail = (email) => {
        _email = email;
    };

    this.getEmail = () => _email;
})
