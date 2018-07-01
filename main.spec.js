describe('Test AppUtil', function () {

  describe('updateEveryMinute', function () {

    it('Test AppUtil.debounce to be function', function () {

      expect(typeof AppUtil.debounce).toBe('function');

    });

    it('Test call function', function () {
      var count = 0;

      var test = function () {
        count = count + 1;

      };

      jasmine.clock().install();

      var testTwo = AppUtil.debounce(test, 500, function (value) {
      });

      setTimeout(function () {
        testTwo()
      }, 300);

      setTimeout(function () {
        testTwo()
      }, 500);

      setTimeout(function () {
        testTwo()
      }, 700);

      setTimeout(function () {
        testTwo()
      }, 900);

      jasmine.clock().tick(2000);

      expect(count).toBe(4);

      jasmine.clock().uninstall();

    });

  });

});