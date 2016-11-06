mailBoxApp.component('emailheader', {
    controller: function(HeaderService) {
        this.email = HeaderService.getEmail();
    },
    templateUrl: 'header\\email-header\\email-header.tpl.html'
})
