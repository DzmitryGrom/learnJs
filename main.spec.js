function addition(left, right) {
    return left + right;
}

function isNull(value) {
    return value === null;
}

function getGreeting(name) {
    return 'Hello ' + name;
}

function parseBoolean(value) {
    return value.trim().toLowerCase() === 'true';
}

function getPathByHash(hash) {
    return hash.split('/').map(function (item) {
        return item.trim();
    }).filter(function (item) {
        return item !== ''
    });
}

describe('Test for addition', function () {

    it('must not toBeUndefined', function () {
        expect(addition(1,1)).not.toBeUndefined();
    });

    it('must not tobe object', function () {
        expect(addition(1,1)).not.toBe('object');
    });

    it('must return "string"  for string', function () {
        expect(typeof addition(1,1)).toBe('number');
    });

    // write tests here
});

describe('Test for isNull', function () {

    it('must return "true" string for null value', function () {
        expect(isNull(null)).toBe(true);
    });

    it('must not toBeUndefined', function () {
        expect(isNull(null)).not.toBeUndefined();
    });

    // write tests here
});

describe('Test for getGreeting', function () {

    it('must return "string" for "Dzmitry" string ', function () {
        expect(typeof getGreeting('Dzmitry')).toBe('string');
    });

    it('must not toBeNull', function () {
        expect(getGreeting('Dzmitry')).not.toBeNull();
    });

    // write tests here
});

describe('Test for parseBoolean', function () {

    it('must return true for " TruE" string', function () {
        expect(parseBoolean(' TruE')).toBe(true);
    });

    it('must not toBeUndefined', function () {
        expect(parseBoolean(' TruE')).not.toBeUndefined();
    });

    // write tests here
});

describe('Test for getPathByHash', function () {

    it('must return ["user", "create"] for "user/create" hash string', function () {
        expect(getPathByHash('user/create')).toEqual(['user', 'create']);
    });

    it('must to tobe  return ["user", "create"] for "user/create" hash object', function () {
        expect(typeof getPathByHash('user/create')).toBe('object');
    });

    it('must to tobe  return ["user", "create"] for "user/create" hash object', function () {
        expect(getPathByHash('user/create') instanceof Array).toBe(true);
    });

    it('must return "object" string for object value', function () {
        var newObj = ['user', 'create'];
        expect(getPathByHash('user/create')).toEqual(newObj);
    });

    // write tests here
});



