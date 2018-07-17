(function (global) {
  'use strict';

  class AppUtil {

    static debounce(payloadFunction, delayMs, callback, onError) {
      let timerId;

      return function () {
        const params = arguments;

        // TODO need improve code here
        const later = () => {
          timerId = null;
          applyPayloadFunction();
        };
        clearTimeout(timerId);
        timerId = setTimeout(later, delayMs);

        function applyPayloadFunction() {
          let result;

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
    }

    static throttle(payloadFunction, delayMs, callback, onError) {
      let intervalId,
          lastParamsApplied,
          params;

      return function () {
        params = arguments;
        lastParamsApplied = false;

        if (intervalId === undefined) {
          applyPayloadFunction();

          intervalId = setInterval(() => {
            if (!lastParamsApplied) {
              applyPayloadFunction();
            } else {
              clearInterval(intervalId);
              intervalId = undefined;
            }

          }, delayMs);
        }

        function applyPayloadFunction () {
          let result;

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
  }


  global.AppUtil = AppUtil;


})(typeof module !== 'undefined' ? module.exports : window);