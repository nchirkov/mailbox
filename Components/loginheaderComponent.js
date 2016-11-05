mailBoxApp.component('loginheader', {
    controller: function(HeaderService) {
        this.email = HeaderService.getEmail();
    },
    templateUrl: 'Templates\\loginheader.tpl.html'
})
