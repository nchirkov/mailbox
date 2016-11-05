mailBoxApp.component('usercard', {
    bindings: {
        user: '<'
    },
    controller: function(UserService, $state) {
        this.deleteUser = () => {
            UserService.deleteUser(this.user._id).then(() =>
                $state.go('home', {}, {
                    reload: true
                }));
        }
    },
    templateUrl: 'Templates\\usercard.tpl.html'
})
