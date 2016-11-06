mailBoxApp.component('home', {
    controller: function(AuthService, $state) {
        this.logout = () => {
            AuthService.logout();
            $state.go('auth');
        }
    },
    templateUrl: 'home\\home.tpl.html'
})
