(function (global) {
  'use strict';

  var AppUtil = {};

  global.AppUtil = AppUtil;

  AppUtil.debounce = function (payloadFunction, delayMs, callback, onError) {
    var timerId,
        params,
        lastParamsApplied;


    return function () {
      params = arguments;
      lastParamsApplied = false;

      // TODO need improve code here

      timerId = setTimeout(function () {
        if (!lastParamsApplied) {
          applyPayloadFunction();
        } else {
          clearTimeout(timerId);
          timerId = undefined;
        }

      }, delayMs);


      function applyPayloadFunction() {
        var result;

        try {
          result = payloadFunction.apply(null, params);

          callback && callback(result);
        } catch (err) {
          if (onError) {
            onError(err);
          } else {
            console.error('Error in AppUtil.debounce:', err);
          }
        }
      }
    };
  };

  AppUtil.throttle = function (payloadFunction, delayMs, callback, onError) {
    var intervalId,
      lastParamsApplied,
      params;

    return function () {
      params = arguments;
      lastParamsApplied = false;

      if (intervalId === undefined) {
        applyPayloadFunction();

        intervalId = setInterval(function () {
          if (!lastParamsApplied) {
            applyPayloadFunction();
          } else {
            clearInterval(intervalId);
            intervalId = undefined;
          }

        }, delayMs);
      }

      function applyPayloadFunction() {
        var result;

        try {
          result = payloadFunction.apply(null, params);
          lastParamsApplied = true;
          params = undefined;

          callback && callback(result);
        } catch (err) {
          if (onError) {
            onError(err);
          } else {
            console.error('Error in AppUtil.throttle:', err);
          }
        }

      }
    }
  };


})(typeof module !== 'undefined' ? module.exports : window);
