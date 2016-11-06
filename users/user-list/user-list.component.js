mailBoxApp.component('userlist', {
    controller: function(UserService) {
        UserService.getUsers().then(users => this.userlist = users)
    },
    templateUrl: 'users\\user-list\\user-list.tpl.html'
})
