mailBoxApp.component('mailboxes', {
    controller: function(MailService, $state, $filter) {
        MailService.getBoxes().then(boxes => {
            let orderedBoxes = $filter('orderBy')(boxes, '_id');

            this.boxes = orderedBoxes;
            $state.go('home.mailbox', {
                "mailboxId": orderedBoxes[0]._id
            });
        })
    },
    templateUrl: 'mails\\mail-boxes\\mail-boxes.tpl.html'
})
