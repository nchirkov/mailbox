mailBoxApp.component('userlist', {
    controller: function(UserService) {
        UserService.getUsers().then(users => this.userlist = users)
    },
    templateUrl: 'Templates\\userlist.tpl.html'
})
