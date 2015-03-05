describe('Testing SearchCtrl', function () {
    var $rootScope, $controller, $location, Data, $scope, controller, $httpBackend, result;

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
    }));

    it('should change path when we fire a search', function () {
        $httpBackend.when('GET', 'artifacts/ikea-products.json').respond({});
        controller();
        $scope.searchInput = 'test';
        $scope.$digest();
        $scope.search();
        expect($location.search()).toEqual({q: 'test'});
    });

    it('should go into search mode when resetting the query', function () {
        $httpBackend.when('GET', 'artifacts/ikea-products.json').respond({});
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
        $httpBackend.when('GET', 'artifacts/ikea-products.json').respond({});
        controller();
        $scope.search();
        $httpBackend.flush();
        $scope.$digest();
        expect($scope.results).not.toBeNull();
    });

    it('should return a matching article number', function () {
        $httpBackend.when('GET', 'artifacts/ikea-products.json').respond(result);
        controller();
        $scope.searchInput = '502.584.55';
        $scope.$digest();
        $scope.search();
        $httpBackend.flush();
        $scope.$digest();
        expect($scope.results.length).toBe(1);
    });

    it('should return a product with a matching label', function () {
        $httpBackend.when('GET', 'artifacts/ikea-products.json').respond(result);
        controller();
        $scope.searchInput = 'Bedroom';
        $scope.$digest();
        $scope.search();
        $httpBackend.flush();
        $scope.$digest();
        expect($scope.results.length).toBe(1);
    });

    it('should return a product with a matching description', function () {
        $httpBackend.when('GET', 'artifacts/ikea-products.json').respond(result);
        controller();
        $scope.searchInput = 'pillowcases';
        $scope.$digest();
        $scope.search();
        $httpBackend.flush();
        $scope.$digest();
        expect($scope.results.length).toBe(1);
    });

    result = {
        "data": [
            {
                "img": ["http://www.ikea.com/gb/en/images/products/sotblomster-quilt-cover-and-pillowcases-white__0236014_PE375534_S4.JPG"],
                "img/_title": ["SÖTBLOMSTER Quilt cover and 4 pillowcases - 200x200/50x80 cm  - IKEA"],
                "price": ["£20"],
                "product_id": ["502.584.55"],
                "label": ["Home / Bedroom / Bed linen / Quilt cover sets"],
                "img/_source": ["/gb/en/images/products/sotblomster-quilt-cover-and-pillowcases-white__0236014_PE375534_S4.JPG"],
                "category": ["Bedroom"],
                "img/_alt": ["SÖTBLOMSTER Quilt cover and 4 pillowcases IKEA Concealed press studs keep the quilt in place."],
                "long_desc": ["Concealed press studs keep the quilt in place. Read more Read more"],
                "_resultNumber": 1,
                "_widgetName": "ikea-products",
                "_source": ["e4584354-4570-48bf-bfd8-e47eb09e1574"],
                "_connectorVersionGuid": "15af8229-a71f-44b5-8c3a-31ad2425f0df",
                "_pageUrl": "http://www.ikea.com/gb/en/catalog/products/50258455/",
                "_outputTypes": {
                    "product_name": "STRING",
                    "price": "STRING",
                    "short_desc": "STRING",
                    "long_desc": "STRING",
                    "label": "STRING",
                    "img": "IMAGE",
                    "category": "STRING",
                    "product_id": "STRING"
                },
                "_input": {},
                "_num": 1
            },
            {
                "img": ["http://www.ikea.com/gb/en/images/products/koncis-roasting-tin__55076_PE160073_S4.JPG"],
                "img/_title": ["KONCIS Roasting tin - 34x24 cm  - IKEA"],
                "price": ["£5.75"],
                "product_id": ["900.990.54"],
                "label": ["Home / Cooking / Ovenware"],
                "img/_source": ["/gb/en/images/products/koncis-roasting-tin__55076_PE160073_S4.JPG"],
                "category": ["Cooking"],
                "img/_alt": ["KONCIS Roasting tin IKEA"],
                "long_desc": ["Read more Read more"],
                "_resultNumber": 2,
                "_widgetName": "ikea-products",
                "_source": ["e4584354-4570-48bf-bfd8-e47eb09e1574"],
                "_connectorVersionGuid": "15af8229-a71f-44b5-8c3a-31ad2425f0df",
                "_pageUrl": "http://www.ikea.com/gb/en/catalog/products/90099054/",
                "_outputTypes": {
                    "product_name": "STRING",
                    "price": "STRING",
                    "short_desc": "STRING",
                    "long_desc": "STRING",
                    "label": "STRING",
                    "img": "IMAGE",
                    "category": "STRING",
                    "product_id": "STRING"
                },
                "_input": {},
                "_num": 2
            },
            {
                "img": ["http://www.ikea.com/gb/en/images/products/stuva-storage-combination-w-doors-drawers-white__0242993_PE382218_S4.JPG"],
                "img/_title": ["STUVA Storage combination w doors/drawers - white/white  - IKEA"],
                "price": ["£140"],
                "product_id": ["990.066.11"],
                "label": ["Home / Children's IKEA / STUVA Storage Furniture Sets / STUVA Storage System Combinations"],
                "img/_source": ["/gb/en/images/products/stuva-storage-combination-w-doors-drawers-white__0242993_PE382218_S4.JPG"],
                "category": ["Children's IKEA"],
                "img/_alt": ["STUVA Storage combination w doors/drawers IKEA Doors with silent soft-closing damper."],
                "long_desc": ["Doors with silent soft-closing damper. Choose between open or closed storage, to hide or display your things. Read more Read more"],
                "_resultNumber": 3,
                "_widgetName": "ikea-products",
                "_source": ["e4584354-4570-48bf-bfd8-e47eb09e1574"],
                "_connectorVersionGuid": "15af8229-a71f-44b5-8c3a-31ad2425f0df",
                "_pageUrl": "http://www.ikea.com/gb/en/catalog/products/S99006611/",
                "_outputTypes": {
                    "product_name": "STRING",
                    "price": "STRING",
                    "short_desc": "STRING",
                    "long_desc": "STRING",
                    "label": "STRING",
                    "img": "IMAGE",
                    "category": "STRING",
                    "product_id": "STRING"
                },
                "_input": {},
                "_num": 3
            }
        ]
    };
});