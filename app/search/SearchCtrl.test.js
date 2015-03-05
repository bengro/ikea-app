describe('Testing SearchCtrl', function () {
    var $rootScope, $controller, $location, Data, $scope, controller, $httpBackend;

    beforeEach(module('ikeaApp'));
    beforeEach(inject(function (_$rootScope_, _$controller_, _Data_, _$location_, _$httpBackend_) {
        $rootScope = _$rootScope_;
        $controller = _$controller_;
        Data = _Data_;
        $location = _$location_;
        $scope = $rootScope.$new();
        $httpBackend = _$httpBackend_;

        controller = function () {
            return $controller('SearchCtrl', {
                '$scope': $scope
            });
        };
        $httpBackend.when('GET', 'artifacts/ikea-products.json').respond({});
    }));

    it('should change path when we fire a search', function () {
        controller();
        $scope.searchInput = 'test';
        $scope.$digest();
        $scope.search();
        expect($location.search()).toEqual({q: 'test'});
    });

    it('should go into search mode when resetting the query', function () {
        controller();
        $scope.searchInput = 'Something';
        $scope.$digest();
        $scope.searchInput = '';
        $scope.validate();
        $scope.$digest();
        expect($location.search()).toEqual({});
    });

    it('should reset url and input form when closing the search', function () {
        controller();
        $scope.searchInput = 'Something';
        $scope.close();
        expect($location.search()).toEqual({});
        expect($scope.searchInput).toBeNull();
    });

    it('should get results when we hit search', function () {
        controller();
        $scope.search();
        $httpBackend.flush();
        $scope.$digest();
        expect($scope.results).not.toBeNull();
    });

    it('should return a matching subset of all products when searching', function() {
        controller();
        
    });
});