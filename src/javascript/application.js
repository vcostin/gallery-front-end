import angular from 'angular'


angular.module('gallery')
  .controller('Pictures', ['$scope', ($scope) => {
    $scope.h1 = 'Yo!'
  }]);


// expects a constructor function. Ah, simple!
//.service(name, constructor); // ditto
// .provider(name, providerType); // expects a constructor function that must contain a $get() method
// .factory(name, providerFunction); // expects a factory function.
// .directive(name, directiveFactory); // expects an especially crazy factory function.
