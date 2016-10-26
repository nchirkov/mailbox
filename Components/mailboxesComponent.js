mailBoxApp.component('mailboxes', {
    controller: function(MailService) {
        MailService.getBoxes().then(boxes => this.boxes = boxes)
    },
    templateUrl: 'Templates\\mailboxes.tpl.html'
})
