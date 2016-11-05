mailBoxApp.config(function($stateProvider, $urlRouterProvider) {
        $stateProvider.state('home', {
                url: '/',
                component: 'home',
            })
            .state('home.mailbox', {
                url: 'mailbox/{mailboxId}',
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
                url: 'users/details/{userId}',
                component: 'usercard',
                resolve: {
                    user: function(UserService, $stateParams) {
                        return UserService.getUser($stateParams.userId);
                    }
                }
            })
            .state('home.useradd', {
                url: 'users/edit/{userId}',
                params: {
                    userId: {
                        value: null,
                        squash: true
                    }
                },
                component: 'useradd',
                resolve: {
                    user: function(UserService, $stateParams) {
                        if ($stateParams.userId === null) {
                            return {
                                "_id": null
                            };
                        }
                        return UserService.getUser($stateParams.userId);
                    }
                }
            })
            .state('login', {
                url: '/login',
                component: 'login'
            })
        $urlRouterProvider.otherwise('/');
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
