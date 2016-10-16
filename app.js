angular.module('mailBoxApp', ['ui.router'])
    .config(function($stateProvider) {
        $stateProvider.state('mailbox', {
                url: '/mailbox/{mailboxId}',
                component: 'mailbox',
                resolve: {
                    mailbox: function(MailService, $transition$) {
                        return MailService.getBox($transition$.params().mailboxId);
                    }
                }
            })
            .state('mailbox.mail', {
                url: '/{mailId}',
                component: 'mail',
                resolve: {
                  mail: function(mailbox, $stateParams) {
                    return mailbox.find(function(mail) {
                      return mail._id === $stateParams.mailId;
                    })
                  }
                }
            })
    })
    .service('MailService', function($http) {
        this.getBox = () => {
            return $http.get('https://test-api.javascript.ru/v1/nchirkov/letters')
                .then(response => response.data)
        }

        this.getBoxes = () => {
            return $http.get('https://test-api.javascript.ru/v1/nchirkov/mailboxes')
                .then(response => response.data)
        }
    })
    .component('mailboxes', {
        controller: function(MailService) {
            MailService.getBoxes().then(boxes => this.boxes = boxes)
        },
        templateUrl: 'mailboxes.tpl.html'
    })
    .component('mailbox', {
        bindings: {
            mailbox: '<'
        },
        templateUrl: 'mailbox.tpl.html'
    })
    .component('mail', {
        bindings: {
            mail: '<'
        },
        templateUrl: 'mail.tpl.html'
    });
