mailBoxApp.service('UserService', function($http) {
    let usersBaseUrl = 'https://test-api.javascript.ru/v1/nchirkov/users/';

    this.getUsers = () => {
        return $http.get(usersBaseUrl)
            .then(response => response.data);
    }

    this.getUser = (id) => {
        return $http.get(usersBaseUrl + id)
            .then(response => response.data)
    }

    this.addUser = (user) => {
        return $http.post(usersBaseUrl, user)
            .then(response => response.data)
    }

    this.updateUser = (user) => {
        return $http.patch(usersBaseUrl + user._id, user)
            .then(response => response.data)
    }

    this.deleteUser = (id) => {
        return $http.delete(usersBaseUrl + id)
            .then(response => response.data)
    }
})
