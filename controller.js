(function () {
    var introService = function(){};
    angular.module("demoApp", [])
            .service('introService', introService)
            .controller('IntroController', ['introService', function (introService,$window) {
                var vm = this;
                vm.title = "R.A.R.E";
                vm.pages =
                [{ name: 'home', id: 1},]; // add new pages here
                vm.currentPageId = vm.pages[0].id;                
            }]);
})();