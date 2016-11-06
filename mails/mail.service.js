mailBoxApp.service('MailService', function($http) {
    this.getBox = (id) => {
        return $http.get('https://test-api.javascript.ru/v1/nchirkov/letters')
            .then(response => response.data.filter(letter => letter.mailbox === id))
    }

    this.getTitle = (id) => {
        return $http.get('https://test-api.javascript.ru/v1/nchirkov/mailboxes')
            .then(response => response.data.find(box => box._id === id))
            .then(box => box.title);
    }

    this.getBoxes = () => {
        return $http.get('https://test-api.javascript.ru/v1/nchirkov/mailboxes')
            .then(response => response.data);
    }
})
