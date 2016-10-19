mailBoxApp.service('MailService', function($http) {
    this.getBox = (id) => {
        return $http.get('https://test-api.javascript.ru/v1/nchirkov/letters')
            .then(response => response.data.filter(letter => letter.mailbox === id))
    }

    this.getBoxes = () => {
        return $http.get('https://test-api.javascript.ru/v1/nchirkov/mailboxes')
            .then(response => response.data)
    }
})
