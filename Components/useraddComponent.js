mailBoxApp.component('useradd', {
    controller: function(UserService, $state) {
        this.addUser = () => {
            let user = {
                "fullName": "Тест Тестов",
                "email": "natalya@mail.ru",
                "birthdate": "1996-10-10",
                "gender": "F",
                "address": "ул. Лермонтова, 59"
            };
            UserService.addUser(user).then(() =>
                $state.go('home', {}, {
                    reload: true
                }));
        }
    },
    templateUrl: 'Templates\\useradd.tpl.html'
})
