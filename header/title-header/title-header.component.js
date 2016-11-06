mailBoxApp.component('titleheader', {
    controller: function(HeaderService) {
        HeaderService.getTitle((title) => {
            this.title = title;
        });
    },
    templateUrl: 'header\\title-header\\title-header.tpl.html'
})
