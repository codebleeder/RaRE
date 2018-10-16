(function () {
    var introService = function(){};
    angular.module("demoApp", [])
            .service('introService', introService)
            .controller('IntroController', ['introService', function (introService,$window) {
                var vm = this;
                vm.title = "R.A.R.E";
                vm.templates =
                [{ name: 'template1.html', url: 'template1.html'},
                 { name: 'template2.html', url: 'template2.html'}];
                vm.template = vm.templates[0];
                vm.myFunction = function() {
                    vm.color = 'red';
                }
            }]);
})();