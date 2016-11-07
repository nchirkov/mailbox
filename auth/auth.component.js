mailBoxApp.component('auth', {
    controller: function(AuthService, HeaderService, $state) {
        this.authenticate = () => {
            AuthService.authenticate(this.email, this.password)
                .then(isAuthenticated => {
                    if (isAuthenticated) {
                        HeaderService.setEmail(this.email);
                        $state.go('home');
                    } else {
                        this.invalidLogin = true;
                    }
                })
        }
    },
    templateUrl: 'auth\\auth.tpl.html'
})
