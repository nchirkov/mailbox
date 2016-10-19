mailBoxApp.component('login', {
    controller: function(AuthService, $state) {
        this.authenticate = () => {
            AuthService.authenticate(this.email, this.password);
            $state.go('home');
        }
    },
    templateUrl: 'Templates\\login.tpl.html'
})
