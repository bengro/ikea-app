describe('WindowManager', function () {
    var StateManager, $rootScope, $compile, directive, element, scope;

    beforeEach(module('ikeaApp'));
    beforeEach(inject(function (_StateManager_, _$rootScope_, _$compile_) {
        StateManager = _StateManager_;
        $rootScope = _$rootScope_;
        $compile = _$compile_;
        scope = $rootScope.$new();
        element = $('<div class="wrap" data-window-manager=""></div>');
        directive = $compile(element)(scope);
    }));

    it('should add a class when going in result mode', function () {
        StateManager.searchState = true;
        scope.$digest();
        expect(directive.hasClass('wrap--search-mode')).toBeTruthy();
    });

    it('should remove the class when going out result mode', function () {
        StateManager.searchState = true;
        scope.$digest();
        expect(directive.hasClass('wrap--search-mode')).toBeTruthy();
        StateManager.searchState = false;
        scope.$digest();
        expect(directive.hasClass('wrap--search-mode')).toBeFalsy();
    })
});