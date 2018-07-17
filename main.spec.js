describe('Test AppUtil', function () {
  describe('updateEveryMinute', function () {
    it('Test AppUtil.debounce to be function', () => {

      expect(typeof AppUtil.debounce()).toBe('function');

    });

    it('Test call function', () => {
      var count = 0;

      const test = () => {
        count = count + 1;

      };

      jasmine.clock().install();

      const testTwo = AppUtil.debounce(test, 500, (value) => {
      });

      setTimeout( () => {
        testTwo()
      }, 300);

      setTimeout(() => {
        testTwo()
      }, 500);

      setTimeout(() => {
        testTwo()
      }, 700);

      setTimeout(() => {
        testTwo()
      }, 900);

      jasmine.clock().tick(2000);

      expect(count).toBe(1);

      jasmine.clock().uninstall();

    });

  });

});