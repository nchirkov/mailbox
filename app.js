angular.module('mailBoxApp', ['ui.router'])
    .config(function($stateProvider) {
        $stateProvider.state('home', {
                url: '',
                component: 'home',
            })
            .state('home.mailbox', {
                url: '/mailbox/{mailboxId}',
                component: 'mailbox',
                resolve: {
                    mailbox: function(MailService, $stateParams) {
                        return MailService.getBox($stateParams.mailboxId);
                    }
                }
            })
            .state('home.mailbox.mail', {
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
            .state('home.usercard', {
                url: '/users/{userId}',
                component: 'usercard',
                resolve: {
                    user: function(UserService, $stateParams) {
                        return UserService.getUser($stateParams.userId);
                    }
                }
            })
            .state('login', {
                url: '/login',
                component: 'login'
            })
    })
    .run(($transitions, AuthService) => {
        $transitions.onEnter({
            to: '**'
        }, function($transition$, $state$) {
            if ($state$.name !== 'login' && !AuthService.isAuthenticated()) {
                return $transition$.router.stateService.target('login');
            }
        })
    })
    .service('MailService', function($http) {
        this.getBox = (id) => {
            return $http.get('https://test-api.javascript.ru/v1/nchirkov/letters')
                .then(response => response.data.filter(letter => letter.mailbox === id))
        }

        this.getBoxes = () => {
            return $http.get('https://test-api.javascript.ru/v1/nchirkov/mailboxes')
                .then(response => response.data)
        }
    })
    .service('UserService', function($http) {
        this.getUsers = () => {
            return $http.get('https://test-api.javascript.ru/v1/nchirkov/users')
                .then(response => response.data);
        }

        this.getUser = (id) => {
            return $http.get('https://test-api.javascript.ru/v1/nchirkov/users/' + id)
                .then(response => response.data)
        }
    })
    .service('AuthService', function() {
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
    })
    .component('userlist', {
        controller: function(UserService) {
            UserService.getUsers().then(users => this.userlist = users)
        },
        templateUrl: 'userlist.tpl.html'
    })
    .component('usercard', {
        bindings: {
            user: '<'
        },
        templateUrl: 'usercard.tpl.html'
    })
    .component('home', {
        templateUrl: 'home.tpl.html'
    })
    .component('login', {
        controller: function(AuthService, $state) {
            this.authenticate = () => {
                AuthService.authenticate(this.email, this.password);
                $state.go('home');
            }
        },
        templateUrl: 'login.tpl.html'
    });
