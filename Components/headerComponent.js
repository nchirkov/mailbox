mailBoxApp.component('header', {
    controller: function(HeaderService) {
        HeaderService.getTitle((title) => {
            this.title = title;
        });
    },
    templateUrl: 'Templates\\header.tpl.html'
})
