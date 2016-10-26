mailBoxApp.service('AuthService', function() {
    let isAuthenticated = false;

    this.authenticate = (email, password) => {
        if (email === 'test@test.ru' && password === '123') {
            isAuthenticated = true;
        } else {
            isAuthenticated = false;
        }
    };

    this.isAuthenticated = () => {
        return isAuthenticated;
    };
})
