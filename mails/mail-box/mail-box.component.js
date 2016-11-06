mailBoxApp.component('mailbox', {
    bindings: {
        mailbox: '<',
        title: '<'
    },
    controller: function(HeaderService) {
        HeaderService.setTitle(this.title);
    },
    templateUrl: 'mails\\mail-box\\mail-box.tpl.html'
})
