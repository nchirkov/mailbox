mailBoxApp.component('login', {
    controller: function(AuthService, HeaderService, $state) {
        this.authenticate = () => {
            AuthService.authenticate(this.email, this.password);
            HeaderService.setEmail(this.email);
            $state.go('home');
        }
    },
    templateUrl: 'Templates\\login.tpl.html'
})
