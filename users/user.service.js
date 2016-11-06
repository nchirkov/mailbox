mailBoxApp.service('UserService', function($http) {
    this.getUsers = () => {
        return $http.get('https://test-api.javascript.ru/v1/nchirkov/users')
            .then(response => response.data);
    }

    this.getUser = (id) => {
        return $http.get('https://test-api.javascript.ru/v1/nchirkov/users/' + id)
            .then(response => response.data)
    }

    this.addUser = (user) => {
        return $http.post('https://test-api.javascript.ru/v1/nchirkov/users/', user)
            .then(response => response.data)
    }

    this.updateUser = (user) => {
        return $http.patch('https://test-api.javascript.ru/v1/nchirkov/users/' + user._id, user)
            .then(response => response.data)
    }

    this.deleteUser = (id) => {
        return $http.delete('https://test-api.javascript.ru/v1/nchirkov/users/' + id)
            .then(response => response.data)
    }
})
