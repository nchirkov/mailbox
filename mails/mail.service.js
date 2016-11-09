mailBoxApp.service('MailService', function($http) {
    let baseUrl = 'https://test-api.javascript.ru/v1/nchirkov';

    this.getBox = (id) => {
        return $http.get(baseUrl + '/letters')
            .then(response => response.data.filter(letter => letter.mailbox === id))
    }

    this.getTitle = (id) => {
        return $http.get(baseUrl + '/mailboxes')
            .then(response => response.data.find(box => box._id === id))
            .then(box => box.title);
    }

    this.getBoxes = () => {
        return $http.get(baseUrl + '/mailboxes')
            .then(response => response.data);
    }
})
