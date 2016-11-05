mailBoxApp.component('mailbox', {
    bindings: {
        mailbox: '<',
        title: '<'
    },
    controller: function(HeaderService) {
        HeaderService.setTitle(this.title);
    },
    templateUrl: 'Templates\\mailbox.tpl.html'
})
