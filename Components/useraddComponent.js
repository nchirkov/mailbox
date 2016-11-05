mailBoxApp.component('useradd', {
    bindings: {
        user: '<'
    },
    controller: function(UserService, $state) {
        this.saveChanges = () => {
            if (this.user._id === null) {
                UserService.addUser(this.user).then(() =>
                    $state.go('home', {}, {
                        reload: true
                    }));
            } else {
                UserService.updateUser(this.user).then(() =>
                    $state.go('home', {}, {
                        reload: true
                    }));
            }
        }
    },
    templateUrl: 'Templates\\useradd.tpl.html'
})
