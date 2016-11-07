mailBoxApp.service('AuthService', function($q) {
    let isAuthenticated = false;

    this.authenticate = (email, password) => {
        if (email === 'test@test.ru' && password === '123') {
            isAuthenticated = true;
            return $q.resolve(true);
        } else {
            return $q.resolve(false);
        }
    };

    this.isAuthenticated = () => {
        return isAuthenticated;
    };

    this.logout = () => {
        isAuthenticated = false;
    }
})
