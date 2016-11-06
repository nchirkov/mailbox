mailBoxApp.component('auth', {
    controller: function(AuthService, HeaderService, $state) {
        this.authenticate = () => {
            if (AuthService.authenticate(this.email, this.password)) {
                HeaderService.setEmail(this.email);
                $state.go('home');
            } else {
              this.invalidLogin = true;
            }
        }
    },
    templateUrl: 'auth\\auth.tpl.html'
})
