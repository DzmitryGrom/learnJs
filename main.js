(function (global) {
  'use strict';

  var AppUtil = {};

  global.AppUtil = AppUtil;

  AppUtil.isValidEmail = function (value) {

    // TODO need improve code here
    //return /^\w\.\w$/g.test(value);
    return /^[.a-z]+@[a-z]+\./.test(value);
  }

  AppUtil.isTime = function (value) {
    // TODO need improve code here
    return /^[0-2][0-5]:[0-5][0-9]$/.test(value);
  };

  AppUtil.isTimeIn12HourClock = function (value) {
    // TODO need improve code here
    return /^[0-2][0-2]:[0-5][0-9]+\s\w*$/.test(value);
  };

  AppUtil.isValidNumber = function (value) {
    return /^\d*[,.]?\d*([eE][-+]\d+)?$/.test(value);
  };

  AppUtil.isValidJsFileName = function (value) {
    return /^[\w.-]+\.js$/.test(value);
  };

})(typeof module !== 'undefined' ? module.exports : window);
