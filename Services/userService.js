mailBoxApp.service('UserService', function($http) {
    this.getUsers = () => {
        return $http.get('https://test-api.javascript.ru/v1/nchirkov/users')
            .then(response => response.data);
    }

    this.getUser = (id) => {
        return $http.get('https://test-api.javascript.ru/v1/nchirkov/users/' + id)
            .then(response => response.data)
    }
})
