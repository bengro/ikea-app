describe('StateManager', function () {
    var StateManager, $location, $rootScope;

    beforeEach(module('ikeaApp'));
    beforeEach(inject(function (_StateManager_, _$location_, _$rootScope_) {
        StateManager = _StateManager_;
        $location = _$location_;
        $rootScope = _$rootScope_;
    }));

    it('should go into result mode if URL contains query params', function () {
        expect(StateManager.searchState).toBeFalsy();
        $location.search('q', 'test');
        $rootScope.$digest();
        expect(StateManager.searchState).toBeTruthy();
    });

    it('should go into search mode if URL does not contain query params', function () {
        expect(StateManager.searchState).toBeFalsy();
        $location.search('q', 'test');
        $rootScope.$digest();
        expect(StateManager.searchState).toBeTruthy();
        $location.search({});
        $rootScope.$digest();
        expect(StateManager.searchState).toBeFalsy();
    });
});