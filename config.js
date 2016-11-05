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
                url: 'users/{userId}',
                component: 'usercard',
                resolve: {
                    user: function(UserService, $stateParams) {
                        return UserService.getUser($stateParams.userId);
                    }
                }
            })
            .state('home.useradd', {
                url: 'usersadd',
                component: 'useradd'
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
