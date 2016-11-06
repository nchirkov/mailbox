mailBoxApp.component('home', {
    controller: function(AuthService, $state) {
        this.logout = () => {
            AuthService.logout();
            $state.go('login');
        }
    },
    templateUrl: 'Templates\\home.tpl.html'
})
