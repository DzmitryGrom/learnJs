describe('Date', function () {
  it('craete', function () {
    var date = new Date(2 * 2),
        newDate = new Date(-222222222222);

    expect(new Date()).not.toBe(new Date());
    expect(newDate !== undefined).toBeTruthy();
    expect(new Date()).not.toBe(null);
    expect(new Date()).toEqual(new Date());
    expect(typeof date).toBe('object');
    expect(date instanceof Date).toBe(true);
    expect(date !== newDate).toBe(true);
    expect(date.toISOString()).toEqual("1970-01-01T00:00:00.004Z");

  });

  describe('Получение компонентов даты', function () {
    it('getFullYear()', function () {
      var date = new Date(),
          myBirthdayDate = new Date(1990, 0, 29, 5, 3, 4, 567);

      expect(date.getFullYear()).toBe(2018);
      expect(myBirthdayDate.getFullYear()).toBe(1990);
      expect(myBirthdayDate.getFullYear() !== 1991).toBe(true);
      expect(myBirthdayDate.getFullYear() < 1991).toBe(true);
      expect(myBirthdayDate.getFullYear() > 1989).toBe(true);
      expect(myBirthdayDate.getMonth()).not.toEqual(date);
      expect(typeof date.getFullYear()).toBe('number');
      expect(typeof date).toBe('object');

    });

    it('getMonth()', function () {
      var date = new Date(),
          myBirthdayDate = new Date(1990, 0, 29, 5, 3, 4, 567);

      expect(date.getMonth()).toBe(5);
      expect(date.getMonth() !== myBirthdayDate.getMonth()).toBe(true);
      expect(myBirthdayDate.getMonth()).toBe(0);
      expect(myBirthdayDate.getMonth() !== 1).toBe(true);
      expect(myBirthdayDate.getMonth() < 1).toBe(true);
      expect(myBirthdayDate.getMonth() > -1).toBe(true);
      expect(myBirthdayDate.getMonth()).not.toEqual(date);
      expect(typeof date.getMonth()).toBe('number');

    });

    it('getDate()', function () {
      var date = new Date(1990, 0, 29, 5, 3, 4, 567),
          myBirthdayDate = new Date(1990, 0, 29, 5, 3, 4, 567);

      expect(date.getDate()).toBe(29);
      expect(myBirthdayDate.getDate() !== 1).toBe(true);
      expect(myBirthdayDate.getDate() > 1).toBe(true);
      expect(myBirthdayDate.getDate() > -1).toBe(true);
      expect(myBirthdayDate.getDate() < 30).toBe(true);
      expect(myBirthdayDate.getDate()).not.toEqual(date);
      expect(typeof date.getDate()).toBe('number');

    });

    it('getHours()', function () {
      var date = new Date(1990, 0, 29, 5, 3, 4, 567),
          myBirthdayDate = new Date(1990, 0, 29, 5, 3, 4, 567);

      expect(date.getHours()).toBe(5);
      expect(myBirthdayDate.getHours() !== 1).toBe(true);
      expect(myBirthdayDate.getHours() > 1).toBe(true);
      expect(myBirthdayDate.getHours() > -1).toBe(true);
      expect(myBirthdayDate.getHours() < 30).toBe(true);
      expect(myBirthdayDate.getHours()).not.toEqual(date);
      expect(typeof date.getHours()).toBe('number');

    });

    it('getMinutes()', function () {
      var date = new Date(1990, 0, 29, 5, 3, 4, 567),
          myBirthdayDate = new Date(1990, 0, 29, 5, 3, 4, 567);

      expect(date.getMinutes()).toBe(3);
      expect(myBirthdayDate.getMinutes() !== 1).toBe(true);
      expect(myBirthdayDate.getMinutes() > 1).toBe(true);
      expect(myBirthdayDate.getMinutes() > -1).toBe(true);
      expect(myBirthdayDate.getMinutes() < 30).toBe(true);
      expect(myBirthdayDate.getMinutes()).not.toEqual(date);
      expect(typeof date.getMinutes()).toBe('number');

    });

    it('getSeconds()', function () {
      var date = new Date(1990, 0, 29, 5, 3, 4, 567),
          myBirthdayDate = new Date(1990, 0, 29, 5, 3, 4, 567);

      expect(date.getSeconds()).toBe(4);
      expect(myBirthdayDate.getSeconds() !== 1).toBe(true);
      expect(myBirthdayDate.getSeconds() > 1).toBe(true);
      expect(myBirthdayDate.getSeconds() > -1).toBe(true);
      expect(myBirthdayDate.getSeconds() < 30).toBe(true);
      expect(myBirthdayDate.getSeconds()).not.toEqual(date);
      expect(typeof date.getSeconds()).toBe('number');

    });

    it('getMilliseconds()', function () {
      var date = new Date(1990, 0, 29, 5, 3, 4, 567),
          myBirthdayDate = new Date(1990, 0, 29, 5, 3, 4, 567);

      expect(date.getMilliseconds()).toBe(567);
      expect(myBirthdayDate.getMilliseconds() !== 1).toBe(true);
      expect(myBirthdayDate.getMilliseconds() > 1).toBe(true);
      expect(myBirthdayDate.getMilliseconds() > -1).toBe(true);
      expect(myBirthdayDate.getMilliseconds() < 30).toBe(false);
      expect(myBirthdayDate.getMilliseconds()).not.toEqual(date);
      expect(typeof date.getMilliseconds()).toBe('number');

    });

    it('getDay()', function () {
      var date = new Date(1990, 0, 29, 5, 3, 4, 567),
          myBirthdayDate = new Date(1990, 0, 29, 5, 3, 4, 567);

      expect(date.getDay()).toBe(1);
      expect(myBirthdayDate.getDay() !== 1).toBe(false);
      expect(myBirthdayDate.getDay() > 1).toBe(false);
      expect(myBirthdayDate.getDay() > -1).toBe(true);
      expect(myBirthdayDate.getDay()).not.toEqual(date);
      expect(typeof date.getDay()).toBe('number');

    });

    it('getTime()', function () {
      var date = new Date(1990, 0, 29, 5, 3, 4, 567),
          myBirthdayDate = new Date(1990, 0, 29, 5, 3, 4, 567);

      expect(date.getTime() > 1).toBe(true);
      expect(myBirthdayDate.getTime() !== 1).toBe(true);
      expect(myBirthdayDate.getTime() > -1).toBe(true);
      expect(myBirthdayDate.getTime()).not.toEqual(date);
      expect(typeof date.getTime()).toBe('number');

    });

    it('getTimezoneOffset()', function () {
      var date = new Date(1990, 0, 29, 5, 3, 4, 567),
          myBirthdayDate = new Date(1990, 0, 29, 5, 3, 4, 567);

      expect(date.getTimezoneOffset() < 1).toBe(true);
      expect(date.getTimezoneOffset()).toBe(-180);

    });

  });

  describe('Установка компонентов даты', function () {
    it('setHours()', function () {
      var startDate = new Date(),
        setDate = new Date(new Date().setHours(4)),
        secondDate = new Date(new Date().setHours('')),
        lastDate = new Date(new Date().setHours());

      expect(startDate !== setDate).toBe(true);
      expect(startDate.getHours() !== setDate.getHours()).toBe(true);
      expect(setDate.getHours()).toBe(4);
      expect(setDate.getHours()).not.toBe(5);
      expect(secondDate.getHours()).toBe(0);
      expect(secondDate.getHours() >= 1).toBeFalsy();
      expect(lastDate.getHours()).toBeNaN();
      expect(typeof setDate.getHours() && typeof secondDate.getHours()).toBe('number');

    });

    it('setMonth()', function () {
      var startDate = new Date(),
          setDate = new Date(new Date().setMonth(3)),
          secondDate = new Date(new Date().setMonth('')),
          lastDate = new Date(new Date().setMonth());

      expect(startDate !== setDate).toBe(true);
      expect(startDate.getMonth() !== setDate.getMonth()).toBe(true);
      expect(setDate.getMonth()).toBe(3);
      expect(setDate.getMonth()).not.toBe(4);
      expect(secondDate.getMonth()).toBe(0);
      expect(secondDate.getMonth() >= 1).toBeFalsy();
      expect(lastDate.getMonth()).toBeNaN();
      expect(typeof setDate.getMonth() && typeof secondDate.getMonth()).toBe('number');

    });

    it('setDate()', function () {
      var startDate = new Date(),
          setDate = new Date(new Date().setDate(3)),
          secondDate = new Date(new Date().setDate('')),
          lastDate = new Date(new Date().setDate());

      expect(startDate !== setDate).toBe(true);
      expect(startDate.getDate() !== setDate.getDate()).toBe(true);
      expect(setDate.getDate()).toBe(3);
      expect(setDate.getMonth()).not.toBe(4);
      expect(secondDate.getDate()).toBe(31);
      expect(secondDate.getDate() <= 27).toBeFalsy();
      expect(lastDate.getDate()).toBeNaN();
      expect(typeof setDate.getDate() && typeof secondDate.getDate()).toBe('number');

    });

    it('setFullYear()', function () {
      var startDate = new Date(),
        setDate = new Date(new Date().setFullYear(2001, 6, 3)),
        secondDate = new Date(new Date().setFullYear('')),
        lastDate = new Date(new Date().setFullYear());

      expect(startDate !== setDate).toBe(true);
      expect(startDate.getFullYear() !== setDate.getFullYear()).toBe(true);
      expect(setDate.getFullYear()).toBe(2001);
      expect(setDate.getFullYear()).not.toBe(1988);
      expect(secondDate.getFullYear()).toBe(0);
      expect(lastDate.getFullYear()).toBeNaN();
      expect(typeof setDate.getFullYear() && typeof secondDate.getFullYear()).toBe('number');

    });

    it('setMinutes()', function () {
      var startDate = new Date(),
          setDate = new Date(new Date().setMinutes(6)),
          secondDate = new Date(new Date().setMinutes('')),
          lastDate = new Date(new Date().setMinutes());

      expect(startDate !== setDate).toBe(true);
      expect(startDate.getMinutes() !== setDate.getMinutes()).toBe(true);
      expect(setDate.getMinutes()).toBe(6);
      expect(secondDate.getMinutes()).toBe(0);
      expect(lastDate.getMinutes()).toBeNaN();
      expect(typeof setDate.getMinutes() && typeof secondDate.getMinutes()).toBe('number');

    });

    it('setSeconds()', function () {
      var startDate = new Date(),
          setDate = new Date(new Date().setSeconds(57)),
          secondDate = new Date(new Date().setSeconds('')),
          lastDate = new Date(new Date().setSeconds());

      expect(startDate !== setDate).toBe(true);
      expect(startDate.getSeconds() !== setDate.getSeconds()).toBe(true); ///могут совпадать
      expect(setDate.getSeconds()).toBe(57);
      expect(secondDate.getSeconds()).toBe(0);
      expect(lastDate.getSeconds()).toBeNaN();
      expect(typeof setDate.getSeconds() && typeof secondDate.getSeconds()).toBe('number');

    });

    it('setMilliseconds()', function () {
      var startDate = new Date(),
          setDate = new Date(new Date().setMilliseconds(57)),
          secondDate = new Date(new Date().setMilliseconds('')),
          lastDate = new Date(new Date().setMilliseconds());

      expect(startDate !== setDate).toBe(true);
      expect(startDate.getMilliseconds() !== setDate.getMilliseconds()).toBe(true); ///могут совпадать
      expect(setDate.getMilliseconds()).toBe(57);
      expect(secondDate.getMilliseconds()).toBe(0);
      expect(lastDate.getMilliseconds()).toBeNaN();
      expect(typeof setDate.getMilliseconds() && typeof secondDate.getMilliseconds()).toBe('number');

    });

    it('setTime()', function () {
      var startDate = new Date(),
          setDate = new Date(new Date().setTime(57)),
          secondDate = new Date(new Date().setTime('')),
          lastDate = new Date(new Date().setTime());

      expect(startDate !== setDate).toBe(true);
      expect(startDate.getTime() !== setDate.getTime()).toBe(true); ///могут совпадать
      expect(setDate.getTime()).toBe(57);
      expect(secondDate.getTime()).toBe(0);
      expect(lastDate.getTime()).toBeNaN();
      expect(typeof setDate.getTime() && typeof secondDate.getTime()).toBe('number');

    });

  });

  describe('Автоисправление даты', function () {
    it('craete', function () {
      var setDates = new Date(2001, 0, 44),
          secondDate = setDates.setDate(setDates.getDate() + 2);

      expect(setDates !== secondDate).toBe(true);

    });
  });

  it('Вычитание обьектов дат', function () {
    var start = new Date;

    for (var i = 0; i < 100000; i++) {
      var doSomething = i * i * i;
    }

    var end = new Date; // конец измерения

    expect(start !== end).toBe(true);

  });

  it('Бенчмаркинг', function () {
    var arr = [];
    for (var i = 0; i < 100; i++) arr[i] = 0;

    function walkIn(arr) {
      for (var key in arr) arr[key]++;
    }

    function walkLength(arr) {
      for (var i = 0; i < arr.length; i++) arr[i]++;
    }

    function bench(f) {
      var date = new Date();
      for (var i = 0; i < 1000; i++) f(arr);
      return new Date() - date;
    }

    expect(bench(walkIn) !== bench(walkLength)).toBe(true);
    expect(bench(walkIn) > bench(walkLength)).toBe(true);
    expect(bench(walkIn)).not.toEqual(bench(walkLength));
    expect(typeof bench(walkIn) && typeof bench(walkLength)).toBe('number');

  });

  describe('Форматирование даты', function () {
    it('Настройки', function () {
      var date = new Date(2014, 11, 31, 12, 30, 0),
          options = {
            era: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            weekday: 'long',
            timezone: 'UTC',
            hour: 'numeric',
            minute: 'numeric',
            second: 'numeric'
          };

      expect(date.toLocaleString("ru", options) !== date.toLocaleString("en-US", options)).toBe(true);

    });

    it('Метода вывода toString()', function () {
      var date = new Date(),
          newDate = new Date(2001, 1, 3);

      expect(date !== date.toString()).toBe(true);
      expect(newDate.toISOString()).toBe('2001-02-02T22:00:00.000Z');
      expect(typeof date.toString() && typeof newDate.toString()).toBe('string');

    });

    it('Метода вывода toISOString()', function () {
      var date = new Date(2 * 2),
          newDate = new Date();

      expect(date !== date.toISOString()).toBe(true);
      expect(date.toISOString()).toBe('1970-01-01T00:00:00.004Z');
      expect(typeof date.toISOString() && typeof newDate.toISOString()).toBe('string');

    });

    it('Разбор строки, Date.parse', function () {
      var date = Date.parse('2012-01-26T13:51:50.417Z'),
          oldDate = new Date();

      expect(date !== oldDate).toBe(true);
      expect(typeof date && typeof oldDate).not.toBe('string');

    });

  });

});
