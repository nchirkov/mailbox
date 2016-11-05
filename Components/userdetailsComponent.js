mailBoxApp.component('userdetails', {
    bindings: {
        user: '<'
    },
    controller: function(UserService, HeaderService, $state) {
        HeaderService.setTitle(this.user.fullName);

        this.deleteUser = () => {
            UserService.deleteUser(this.user._id).then(() =>
                $state.go('home', {}, {
                    reload: true
                }));
        }
    },
    templateUrl: 'Templates\\userdetails.tpl.html'
})
