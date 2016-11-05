mailBoxApp.component('useradd', {
    controller: function(UserService, $state) {
        this.addUser = () => {
            let user = {
                "fullName": this.fullName,
                "email": this.email,
                "birthdate": this.birthdate,
                "gender": this.gender,
                "address": this.address
            };
            UserService.addUser(user).then(() =>
                $state.go('home', {}, {
                    reload: true
                }));
        }
    },
    templateUrl: 'Templates\\useradd.tpl.html'
})
