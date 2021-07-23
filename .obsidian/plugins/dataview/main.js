'use strict';

var obsidian = require('obsidian');

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

function createCommonjsModule(fn, basedir, module) {
	return module = {
		path: basedir,
		exports: {},
		require: function (path, base) {
			return commonjsRequire();
		}
	}, fn(module, module.exports), module.exports;
}

function commonjsRequire () {
	throw new Error('Dynamic requires are not currently supported by @rollup/plugin-commonjs');
}

var luxon = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, '__esModule', { value: true });

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _construct(Parent, args, Class) {
  if (_isNativeReflectConstruct()) {
    _construct = Reflect.construct;
  } else {
    _construct = function _construct(Parent, args, Class) {
      var a = [null];
      a.push.apply(a, args);
      var Constructor = Function.bind.apply(Parent, a);
      var instance = new Constructor();
      if (Class) _setPrototypeOf(instance, Class.prototype);
      return instance;
    };
  }

  return _construct.apply(null, arguments);
}

function _isNativeFunction(fn) {
  return Function.toString.call(fn).indexOf("[native code]") !== -1;
}

function _wrapNativeSuper(Class) {
  var _cache = typeof Map === "function" ? new Map() : undefined;

  _wrapNativeSuper = function _wrapNativeSuper(Class) {
    if (Class === null || !_isNativeFunction(Class)) return Class;

    if (typeof Class !== "function") {
      throw new TypeError("Super expression must either be null or a function");
    }

    if (typeof _cache !== "undefined") {
      if (_cache.has(Class)) return _cache.get(Class);

      _cache.set(Class, Wrapper);
    }

    function Wrapper() {
      return _construct(Class, arguments, _getPrototypeOf(this).constructor);
    }

    Wrapper.prototype = Object.create(Class.prototype, {
      constructor: {
        value: Wrapper,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    return _setPrototypeOf(Wrapper, Class);
  };

  return _wrapNativeSuper(Class);
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(n);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

  return arr2;
}

function _createForOfIteratorHelperLoose(o) {
  var i = 0;

  if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) {
    if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) return function () {
      if (i >= o.length) return {
        done: true
      };
      return {
        done: false,
        value: o[i++]
      };
    };
    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  i = o[Symbol.iterator]();
  return i.next.bind(i);
}

// these aren't really private, but nor are they really useful to document

/**
 * @private
 */
var LuxonError = /*#__PURE__*/function (_Error) {
  _inheritsLoose(LuxonError, _Error);

  function LuxonError() {
    return _Error.apply(this, arguments) || this;
  }

  return LuxonError;
}( /*#__PURE__*/_wrapNativeSuper(Error));
/**
 * @private
 */


var InvalidDateTimeError = /*#__PURE__*/function (_LuxonError) {
  _inheritsLoose(InvalidDateTimeError, _LuxonError);

  function InvalidDateTimeError(reason) {
    return _LuxonError.call(this, "Invalid DateTime: " + reason.toMessage()) || this;
  }

  return InvalidDateTimeError;
}(LuxonError);
/**
 * @private
 */

var InvalidIntervalError = /*#__PURE__*/function (_LuxonError2) {
  _inheritsLoose(InvalidIntervalError, _LuxonError2);

  function InvalidIntervalError(reason) {
    return _LuxonError2.call(this, "Invalid Interval: " + reason.toMessage()) || this;
  }

  return InvalidIntervalError;
}(LuxonError);
/**
 * @private
 */

var InvalidDurationError = /*#__PURE__*/function (_LuxonError3) {
  _inheritsLoose(InvalidDurationError, _LuxonError3);

  function InvalidDurationError(reason) {
    return _LuxonError3.call(this, "Invalid Duration: " + reason.toMessage()) || this;
  }

  return InvalidDurationError;
}(LuxonError);
/**
 * @private
 */

var ConflictingSpecificationError = /*#__PURE__*/function (_LuxonError4) {
  _inheritsLoose(ConflictingSpecificationError, _LuxonError4);

  function ConflictingSpecificationError() {
    return _LuxonError4.apply(this, arguments) || this;
  }

  return ConflictingSpecificationError;
}(LuxonError);
/**
 * @private
 */

var InvalidUnitError = /*#__PURE__*/function (_LuxonError5) {
  _inheritsLoose(InvalidUnitError, _LuxonError5);

  function InvalidUnitError(unit) {
    return _LuxonError5.call(this, "Invalid unit " + unit) || this;
  }

  return InvalidUnitError;
}(LuxonError);
/**
 * @private
 */

var InvalidArgumentError = /*#__PURE__*/function (_LuxonError6) {
  _inheritsLoose(InvalidArgumentError, _LuxonError6);

  function InvalidArgumentError() {
    return _LuxonError6.apply(this, arguments) || this;
  }

  return InvalidArgumentError;
}(LuxonError);
/**
 * @private
 */

var ZoneIsAbstractError = /*#__PURE__*/function (_LuxonError7) {
  _inheritsLoose(ZoneIsAbstractError, _LuxonError7);

  function ZoneIsAbstractError() {
    return _LuxonError7.call(this, "Zone is an abstract class") || this;
  }

  return ZoneIsAbstractError;
}(LuxonError);

/**
 * @private
 */
var n = "numeric",
    s = "short",
    l = "long";
var DATE_SHORT = {
  year: n,
  month: n,
  day: n
};
var DATE_MED = {
  year: n,
  month: s,
  day: n
};
var DATE_MED_WITH_WEEKDAY = {
  year: n,
  month: s,
  day: n,
  weekday: s
};
var DATE_FULL = {
  year: n,
  month: l,
  day: n
};
var DATE_HUGE = {
  year: n,
  month: l,
  day: n,
  weekday: l
};
var TIME_SIMPLE = {
  hour: n,
  minute: n
};
var TIME_WITH_SECONDS = {
  hour: n,
  minute: n,
  second: n
};
var TIME_WITH_SHORT_OFFSET = {
  hour: n,
  minute: n,
  second: n,
  timeZoneName: s
};
var TIME_WITH_LONG_OFFSET = {
  hour: n,
  minute: n,
  second: n,
  timeZoneName: l
};
var TIME_24_SIMPLE = {
  hour: n,
  minute: n,
  hour12: false
};
/**
 * {@link toLocaleString}; format like '09:30:23', always 24-hour.
 */

var TIME_24_WITH_SECONDS = {
  hour: n,
  minute: n,
  second: n,
  hour12: false
};
/**
 * {@link toLocaleString}; format like '09:30:23 EDT', always 24-hour.
 */

var TIME_24_WITH_SHORT_OFFSET = {
  hour: n,
  minute: n,
  second: n,
  hour12: false,
  timeZoneName: s
};
/**
 * {@link toLocaleString}; format like '09:30:23 Eastern Daylight Time', always 24-hour.
 */

var TIME_24_WITH_LONG_OFFSET = {
  hour: n,
  minute: n,
  second: n,
  hour12: false,
  timeZoneName: l
};
/**
 * {@link toLocaleString}; format like '10/14/1983, 9:30 AM'. Only 12-hour if the locale is.
 */

var DATETIME_SHORT = {
  year: n,
  month: n,
  day: n,
  hour: n,
  minute: n
};
/**
 * {@link toLocaleString}; format like '10/14/1983, 9:30:33 AM'. Only 12-hour if the locale is.
 */

var DATETIME_SHORT_WITH_SECONDS = {
  year: n,
  month: n,
  day: n,
  hour: n,
  minute: n,
  second: n
};
var DATETIME_MED = {
  year: n,
  month: s,
  day: n,
  hour: n,
  minute: n
};
var DATETIME_MED_WITH_SECONDS = {
  year: n,
  month: s,
  day: n,
  hour: n,
  minute: n,
  second: n
};
var DATETIME_MED_WITH_WEEKDAY = {
  year: n,
  month: s,
  day: n,
  weekday: s,
  hour: n,
  minute: n
};
var DATETIME_FULL = {
  year: n,
  month: l,
  day: n,
  hour: n,
  minute: n,
  timeZoneName: s
};
var DATETIME_FULL_WITH_SECONDS = {
  year: n,
  month: l,
  day: n,
  hour: n,
  minute: n,
  second: n,
  timeZoneName: s
};
var DATETIME_HUGE = {
  year: n,
  month: l,
  day: n,
  weekday: l,
  hour: n,
  minute: n,
  timeZoneName: l
};
var DATETIME_HUGE_WITH_SECONDS = {
  year: n,
  month: l,
  day: n,
  weekday: l,
  hour: n,
  minute: n,
  second: n,
  timeZoneName: l
};

/*
  This is just a junk drawer, containing anything used across multiple classes.
  Because Luxon is small(ish), this should stay small and we won't worry about splitting
  it up into, say, parsingUtil.js and basicUtil.js and so on. But they are divided up by feature area.
*/
/**
 * @private
 */
// TYPES

function isUndefined(o) {
  return typeof o === "undefined";
}
function isNumber(o) {
  return typeof o === "number";
}
function isInteger(o) {
  return typeof o === "number" && o % 1 === 0;
}
function isString(o) {
  return typeof o === "string";
}
function isDate(o) {
  return Object.prototype.toString.call(o) === "[object Date]";
} // CAPABILITIES

function hasIntl() {
  try {
    return typeof Intl !== "undefined" && Intl.DateTimeFormat;
  } catch (e) {
    return false;
  }
}
function hasFormatToParts() {
  return !isUndefined(Intl.DateTimeFormat.prototype.formatToParts);
}
function hasRelative() {
  try {
    return typeof Intl !== "undefined" && !!Intl.RelativeTimeFormat;
  } catch (e) {
    return false;
  }
} // OBJECTS AND ARRAYS

function maybeArray(thing) {
  return Array.isArray(thing) ? thing : [thing];
}
function bestBy(arr, by, compare) {
  if (arr.length === 0) {
    return undefined;
  }

  return arr.reduce(function (best, next) {
    var pair = [by(next), next];

    if (!best) {
      return pair;
    } else if (compare(best[0], pair[0]) === best[0]) {
      return best;
    } else {
      return pair;
    }
  }, null)[1];
}
function pick(obj, keys) {
  return keys.reduce(function (a, k) {
    a[k] = obj[k];
    return a;
  }, {});
}
function hasOwnProperty(obj, prop) {
  return Object.prototype.hasOwnProperty.call(obj, prop);
} // NUMBERS AND STRINGS

function integerBetween(thing, bottom, top) {
  return isInteger(thing) && thing >= bottom && thing <= top;
} // x % n but takes the sign of n instead of x

function floorMod(x, n) {
  return x - n * Math.floor(x / n);
}
function padStart(input, n) {
  if (n === void 0) {
    n = 2;
  }

  var minus = input < 0 ? "-" : "";
  var target = minus ? input * -1 : input;
  var result;

  if (target.toString().length < n) {
    result = ("0".repeat(n) + target).slice(-n);
  } else {
    result = target.toString();
  }

  return "" + minus + result;
}
function parseInteger(string) {
  if (isUndefined(string) || string === null || string === "") {
    return undefined;
  } else {
    return parseInt(string, 10);
  }
}
function parseMillis(fraction) {
  // Return undefined (instead of 0) in these cases, where fraction is not set
  if (isUndefined(fraction) || fraction === null || fraction === "") {
    return undefined;
  } else {
    var f = parseFloat("0." + fraction) * 1000;
    return Math.floor(f);
  }
}
function roundTo(number, digits, towardZero) {
  if (towardZero === void 0) {
    towardZero = false;
  }

  var factor = Math.pow(10, digits),
      rounder = towardZero ? Math.trunc : Math.round;
  return rounder(number * factor) / factor;
} // DATE BASICS

function isLeapYear(year) {
  return year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0);
}
function daysInYear(year) {
  return isLeapYear(year) ? 366 : 365;
}
function daysInMonth(year, month) {
  var modMonth = floorMod(month - 1, 12) + 1,
      modYear = year + (month - modMonth) / 12;

  if (modMonth === 2) {
    return isLeapYear(modYear) ? 29 : 28;
  } else {
    return [31, null, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][modMonth - 1];
  }
} // covert a calendar object to a local timestamp (epoch, but with the offset baked in)

function objToLocalTS(obj) {
  var d = Date.UTC(obj.year, obj.month - 1, obj.day, obj.hour, obj.minute, obj.second, obj.millisecond); // for legacy reasons, years between 0 and 99 are interpreted as 19XX; revert that

  if (obj.year < 100 && obj.year >= 0) {
    d = new Date(d);
    d.setUTCFullYear(d.getUTCFullYear() - 1900);
  }

  return +d;
}
function weeksInWeekYear(weekYear) {
  var p1 = (weekYear + Math.floor(weekYear / 4) - Math.floor(weekYear / 100) + Math.floor(weekYear / 400)) % 7,
      last = weekYear - 1,
      p2 = (last + Math.floor(last / 4) - Math.floor(last / 100) + Math.floor(last / 400)) % 7;
  return p1 === 4 || p2 === 3 ? 53 : 52;
}
function untruncateYear(year) {
  if (year > 99) {
    return year;
  } else return year > 60 ? 1900 + year : 2000 + year;
} // PARSING

function parseZoneInfo(ts, offsetFormat, locale, timeZone) {
  if (timeZone === void 0) {
    timeZone = null;
  }

  var date = new Date(ts),
      intlOpts = {
    hour12: false,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit"
  };

  if (timeZone) {
    intlOpts.timeZone = timeZone;
  }

  var modified = Object.assign({
    timeZoneName: offsetFormat
  }, intlOpts),
      intl = hasIntl();

  if (intl && hasFormatToParts()) {
    var parsed = new Intl.DateTimeFormat(locale, modified).formatToParts(date).find(function (m) {
      return m.type.toLowerCase() === "timezonename";
    });
    return parsed ? parsed.value : null;
  } else if (intl) {
    // this probably doesn't work for all locales
    var without = new Intl.DateTimeFormat(locale, intlOpts).format(date),
        included = new Intl.DateTimeFormat(locale, modified).format(date),
        diffed = included.substring(without.length),
        trimmed = diffed.replace(/^[, \u200e]+/, "");
    return trimmed;
  } else {
    return null;
  }
} // signedOffset('-5', '30') -> -330

function signedOffset(offHourStr, offMinuteStr) {
  var offHour = parseInt(offHourStr, 10); // don't || this because we want to preserve -0

  if (Number.isNaN(offHour)) {
    offHour = 0;
  }

  var offMin = parseInt(offMinuteStr, 10) || 0,
      offMinSigned = offHour < 0 || Object.is(offHour, -0) ? -offMin : offMin;
  return offHour * 60 + offMinSigned;
} // COERCION

function asNumber(value) {
  var numericValue = Number(value);
  if (typeof value === "boolean" || value === "" || Number.isNaN(numericValue)) throw new InvalidArgumentError("Invalid unit value " + value);
  return numericValue;
}
function normalizeObject(obj, normalizer, nonUnitKeys) {
  var normalized = {};

  for (var u in obj) {
    if (hasOwnProperty(obj, u)) {
      if (nonUnitKeys.indexOf(u) >= 0) continue;
      var v = obj[u];
      if (v === undefined || v === null) continue;
      normalized[normalizer(u)] = asNumber(v);
    }
  }

  return normalized;
}
function formatOffset(offset, format) {
  var hours = Math.trunc(Math.abs(offset / 60)),
      minutes = Math.trunc(Math.abs(offset % 60)),
      sign = offset >= 0 ? "+" : "-";

  switch (format) {
    case "short":
      return "" + sign + padStart(hours, 2) + ":" + padStart(minutes, 2);

    case "narrow":
      return "" + sign + hours + (minutes > 0 ? ":" + minutes : "");

    case "techie":
      return "" + sign + padStart(hours, 2) + padStart(minutes, 2);

    default:
      throw new RangeError("Value format " + format + " is out of range for property format");
  }
}
function timeObject(obj) {
  return pick(obj, ["hour", "minute", "second", "millisecond"]);
}
var ianaRegex = /[A-Za-z_+-]{1,256}(:?\/[A-Za-z_+-]{1,256}(\/[A-Za-z_+-]{1,256})?)?/;

function stringify(obj) {
  return JSON.stringify(obj, Object.keys(obj).sort());
}
/**
 * @private
 */


var monthsLong = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var monthsShort = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
var monthsNarrow = ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"];
function months(length) {
  switch (length) {
    case "narrow":
      return [].concat(monthsNarrow);

    case "short":
      return [].concat(monthsShort);

    case "long":
      return [].concat(monthsLong);

    case "numeric":
      return ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"];

    case "2-digit":
      return ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"];

    default:
      return null;
  }
}
var weekdaysLong = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
var weekdaysShort = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
var weekdaysNarrow = ["M", "T", "W", "T", "F", "S", "S"];
function weekdays(length) {
  switch (length) {
    case "narrow":
      return [].concat(weekdaysNarrow);

    case "short":
      return [].concat(weekdaysShort);

    case "long":
      return [].concat(weekdaysLong);

    case "numeric":
      return ["1", "2", "3", "4", "5", "6", "7"];

    default:
      return null;
  }
}
var meridiems = ["AM", "PM"];
var erasLong = ["Before Christ", "Anno Domini"];
var erasShort = ["BC", "AD"];
var erasNarrow = ["B", "A"];
function eras(length) {
  switch (length) {
    case "narrow":
      return [].concat(erasNarrow);

    case "short":
      return [].concat(erasShort);

    case "long":
      return [].concat(erasLong);

    default:
      return null;
  }
}
function meridiemForDateTime(dt) {
  return meridiems[dt.hour < 12 ? 0 : 1];
}
function weekdayForDateTime(dt, length) {
  return weekdays(length)[dt.weekday - 1];
}
function monthForDateTime(dt, length) {
  return months(length)[dt.month - 1];
}
function eraForDateTime(dt, length) {
  return eras(length)[dt.year < 0 ? 0 : 1];
}
function formatRelativeTime(unit, count, numeric, narrow) {
  if (numeric === void 0) {
    numeric = "always";
  }

  if (narrow === void 0) {
    narrow = false;
  }

  var units = {
    years: ["year", "yr."],
    quarters: ["quarter", "qtr."],
    months: ["month", "mo."],
    weeks: ["week", "wk."],
    days: ["day", "day", "days"],
    hours: ["hour", "hr."],
    minutes: ["minute", "min."],
    seconds: ["second", "sec."]
  };
  var lastable = ["hours", "minutes", "seconds"].indexOf(unit) === -1;

  if (numeric === "auto" && lastable) {
    var isDay = unit === "days";

    switch (count) {
      case 1:
        return isDay ? "tomorrow" : "next " + units[unit][0];

      case -1:
        return isDay ? "yesterday" : "last " + units[unit][0];

      case 0:
        return isDay ? "today" : "this " + units[unit][0];

    }
  }

  var isInPast = Object.is(count, -0) || count < 0,
      fmtValue = Math.abs(count),
      singular = fmtValue === 1,
      lilUnits = units[unit],
      fmtUnit = narrow ? singular ? lilUnits[1] : lilUnits[2] || lilUnits[1] : singular ? units[unit][0] : unit;
  return isInPast ? fmtValue + " " + fmtUnit + " ago" : "in " + fmtValue + " " + fmtUnit;
}
function formatString(knownFormat) {
  // these all have the offsets removed because we don't have access to them
  // without all the intl stuff this is backfilling
  var filtered = pick(knownFormat, ["weekday", "era", "year", "month", "day", "hour", "minute", "second", "timeZoneName", "hour12"]),
      key = stringify(filtered),
      dateTimeHuge = "EEEE, LLLL d, yyyy, h:mm a";

  switch (key) {
    case stringify(DATE_SHORT):
      return "M/d/yyyy";

    case stringify(DATE_MED):
      return "LLL d, yyyy";

    case stringify(DATE_MED_WITH_WEEKDAY):
      return "EEE, LLL d, yyyy";

    case stringify(DATE_FULL):
      return "LLLL d, yyyy";

    case stringify(DATE_HUGE):
      return "EEEE, LLLL d, yyyy";

    case stringify(TIME_SIMPLE):
      return "h:mm a";

    case stringify(TIME_WITH_SECONDS):
      return "h:mm:ss a";

    case stringify(TIME_WITH_SHORT_OFFSET):
      return "h:mm a";

    case stringify(TIME_WITH_LONG_OFFSET):
      return "h:mm a";

    case stringify(TIME_24_SIMPLE):
      return "HH:mm";

    case stringify(TIME_24_WITH_SECONDS):
      return "HH:mm:ss";

    case stringify(TIME_24_WITH_SHORT_OFFSET):
      return "HH:mm";

    case stringify(TIME_24_WITH_LONG_OFFSET):
      return "HH:mm";

    case stringify(DATETIME_SHORT):
      return "M/d/yyyy, h:mm a";

    case stringify(DATETIME_MED):
      return "LLL d, yyyy, h:mm a";

    case stringify(DATETIME_FULL):
      return "LLLL d, yyyy, h:mm a";

    case stringify(DATETIME_HUGE):
      return dateTimeHuge;

    case stringify(DATETIME_SHORT_WITH_SECONDS):
      return "M/d/yyyy, h:mm:ss a";

    case stringify(DATETIME_MED_WITH_SECONDS):
      return "LLL d, yyyy, h:mm:ss a";

    case stringify(DATETIME_MED_WITH_WEEKDAY):
      return "EEE, d LLL yyyy, h:mm a";

    case stringify(DATETIME_FULL_WITH_SECONDS):
      return "LLLL d, yyyy, h:mm:ss a";

    case stringify(DATETIME_HUGE_WITH_SECONDS):
      return "EEEE, LLLL d, yyyy, h:mm:ss a";

    default:
      return dateTimeHuge;
  }
}

function stringifyTokens(splits, tokenToString) {
  var s = "";

  for (var _iterator = _createForOfIteratorHelperLoose(splits), _step; !(_step = _iterator()).done;) {
    var token = _step.value;

    if (token.literal) {
      s += token.val;
    } else {
      s += tokenToString(token.val);
    }
  }

  return s;
}

var _macroTokenToFormatOpts = {
  D: DATE_SHORT,
  DD: DATE_MED,
  DDD: DATE_FULL,
  DDDD: DATE_HUGE,
  t: TIME_SIMPLE,
  tt: TIME_WITH_SECONDS,
  ttt: TIME_WITH_SHORT_OFFSET,
  tttt: TIME_WITH_LONG_OFFSET,
  T: TIME_24_SIMPLE,
  TT: TIME_24_WITH_SECONDS,
  TTT: TIME_24_WITH_SHORT_OFFSET,
  TTTT: TIME_24_WITH_LONG_OFFSET,
  f: DATETIME_SHORT,
  ff: DATETIME_MED,
  fff: DATETIME_FULL,
  ffff: DATETIME_HUGE,
  F: DATETIME_SHORT_WITH_SECONDS,
  FF: DATETIME_MED_WITH_SECONDS,
  FFF: DATETIME_FULL_WITH_SECONDS,
  FFFF: DATETIME_HUGE_WITH_SECONDS
};
/**
 * @private
 */

var Formatter = /*#__PURE__*/function () {
  Formatter.create = function create(locale, opts) {
    if (opts === void 0) {
      opts = {};
    }

    return new Formatter(locale, opts);
  };

  Formatter.parseFormat = function parseFormat(fmt) {
    var current = null,
        currentFull = "",
        bracketed = false;
    var splits = [];

    for (var i = 0; i < fmt.length; i++) {
      var c = fmt.charAt(i);

      if (c === "'") {
        if (currentFull.length > 0) {
          splits.push({
            literal: bracketed,
            val: currentFull
          });
        }

        current = null;
        currentFull = "";
        bracketed = !bracketed;
      } else if (bracketed) {
        currentFull += c;
      } else if (c === current) {
        currentFull += c;
      } else {
        if (currentFull.length > 0) {
          splits.push({
            literal: false,
            val: currentFull
          });
        }

        currentFull = c;
        current = c;
      }
    }

    if (currentFull.length > 0) {
      splits.push({
        literal: bracketed,
        val: currentFull
      });
    }

    return splits;
  };

  Formatter.macroTokenToFormatOpts = function macroTokenToFormatOpts(token) {
    return _macroTokenToFormatOpts[token];
  };

  function Formatter(locale, formatOpts) {
    this.opts = formatOpts;
    this.loc = locale;
    this.systemLoc = null;
  }

  var _proto = Formatter.prototype;

  _proto.formatWithSystemDefault = function formatWithSystemDefault(dt, opts) {
    if (this.systemLoc === null) {
      this.systemLoc = this.loc.redefaultToSystem();
    }

    var df = this.systemLoc.dtFormatter(dt, Object.assign({}, this.opts, opts));
    return df.format();
  };

  _proto.formatDateTime = function formatDateTime(dt, opts) {
    if (opts === void 0) {
      opts = {};
    }

    var df = this.loc.dtFormatter(dt, Object.assign({}, this.opts, opts));
    return df.format();
  };

  _proto.formatDateTimeParts = function formatDateTimeParts(dt, opts) {
    if (opts === void 0) {
      opts = {};
    }

    var df = this.loc.dtFormatter(dt, Object.assign({}, this.opts, opts));
    return df.formatToParts();
  };

  _proto.resolvedOptions = function resolvedOptions(dt, opts) {
    if (opts === void 0) {
      opts = {};
    }

    var df = this.loc.dtFormatter(dt, Object.assign({}, this.opts, opts));
    return df.resolvedOptions();
  };

  _proto.num = function num(n, p) {
    if (p === void 0) {
      p = 0;
    }

    // we get some perf out of doing this here, annoyingly
    if (this.opts.forceSimple) {
      return padStart(n, p);
    }

    var opts = Object.assign({}, this.opts);

    if (p > 0) {
      opts.padTo = p;
    }

    return this.loc.numberFormatter(opts).format(n);
  };

  _proto.formatDateTimeFromString = function formatDateTimeFromString(dt, fmt) {
    var _this = this;

    var knownEnglish = this.loc.listingMode() === "en",
        useDateTimeFormatter = this.loc.outputCalendar && this.loc.outputCalendar !== "gregory" && hasFormatToParts(),
        string = function string(opts, extract) {
      return _this.loc.extract(dt, opts, extract);
    },
        formatOffset = function formatOffset(opts) {
      if (dt.isOffsetFixed && dt.offset === 0 && opts.allowZ) {
        return "Z";
      }

      return dt.isValid ? dt.zone.formatOffset(dt.ts, opts.format) : "";
    },
        meridiem = function meridiem() {
      return knownEnglish ? meridiemForDateTime(dt) : string({
        hour: "numeric",
        hour12: true
      }, "dayperiod");
    },
        month = function month(length, standalone) {
      return knownEnglish ? monthForDateTime(dt, length) : string(standalone ? {
        month: length
      } : {
        month: length,
        day: "numeric"
      }, "month");
    },
        weekday = function weekday(length, standalone) {
      return knownEnglish ? weekdayForDateTime(dt, length) : string(standalone ? {
        weekday: length
      } : {
        weekday: length,
        month: "long",
        day: "numeric"
      }, "weekday");
    },
        maybeMacro = function maybeMacro(token) {
      var formatOpts = Formatter.macroTokenToFormatOpts(token);

      if (formatOpts) {
        return _this.formatWithSystemDefault(dt, formatOpts);
      } else {
        return token;
      }
    },
        era = function era(length) {
      return knownEnglish ? eraForDateTime(dt, length) : string({
        era: length
      }, "era");
    },
        tokenToString = function tokenToString(token) {
      // Where possible: http://cldr.unicode.org/translation/date-time-1/date-time#TOC-Standalone-vs.-Format-Styles
      switch (token) {
        // ms
        case "S":
          return _this.num(dt.millisecond);

        case "u": // falls through

        case "SSS":
          return _this.num(dt.millisecond, 3);
        // seconds

        case "s":
          return _this.num(dt.second);

        case "ss":
          return _this.num(dt.second, 2);
        // minutes

        case "m":
          return _this.num(dt.minute);

        case "mm":
          return _this.num(dt.minute, 2);
        // hours

        case "h":
          return _this.num(dt.hour % 12 === 0 ? 12 : dt.hour % 12);

        case "hh":
          return _this.num(dt.hour % 12 === 0 ? 12 : dt.hour % 12, 2);

        case "H":
          return _this.num(dt.hour);

        case "HH":
          return _this.num(dt.hour, 2);
        // offset

        case "Z":
          // like +6
          return formatOffset({
            format: "narrow",
            allowZ: _this.opts.allowZ
          });

        case "ZZ":
          // like +06:00
          return formatOffset({
            format: "short",
            allowZ: _this.opts.allowZ
          });

        case "ZZZ":
          // like +0600
          return formatOffset({
            format: "techie",
            allowZ: _this.opts.allowZ
          });

        case "ZZZZ":
          // like EST
          return dt.zone.offsetName(dt.ts, {
            format: "short",
            locale: _this.loc.locale
          });

        case "ZZZZZ":
          // like Eastern Standard Time
          return dt.zone.offsetName(dt.ts, {
            format: "long",
            locale: _this.loc.locale
          });
        // zone

        case "z":
          // like America/New_York
          return dt.zoneName;
        // meridiems

        case "a":
          return meridiem();
        // dates

        case "d":
          return useDateTimeFormatter ? string({
            day: "numeric"
          }, "day") : _this.num(dt.day);

        case "dd":
          return useDateTimeFormatter ? string({
            day: "2-digit"
          }, "day") : _this.num(dt.day, 2);
        // weekdays - standalone

        case "c":
          // like 1
          return _this.num(dt.weekday);

        case "ccc":
          // like 'Tues'
          return weekday("short", true);

        case "cccc":
          // like 'Tuesday'
          return weekday("long", true);

        case "ccccc":
          // like 'T'
          return weekday("narrow", true);
        // weekdays - format

        case "E":
          // like 1
          return _this.num(dt.weekday);

        case "EEE":
          // like 'Tues'
          return weekday("short", false);

        case "EEEE":
          // like 'Tuesday'
          return weekday("long", false);

        case "EEEEE":
          // like 'T'
          return weekday("narrow", false);
        // months - standalone

        case "L":
          // like 1
          return useDateTimeFormatter ? string({
            month: "numeric",
            day: "numeric"
          }, "month") : _this.num(dt.month);

        case "LL":
          // like 01, doesn't seem to work
          return useDateTimeFormatter ? string({
            month: "2-digit",
            day: "numeric"
          }, "month") : _this.num(dt.month, 2);

        case "LLL":
          // like Jan
          return month("short", true);

        case "LLLL":
          // like January
          return month("long", true);

        case "LLLLL":
          // like J
          return month("narrow", true);
        // months - format

        case "M":
          // like 1
          return useDateTimeFormatter ? string({
            month: "numeric"
          }, "month") : _this.num(dt.month);

        case "MM":
          // like 01
          return useDateTimeFormatter ? string({
            month: "2-digit"
          }, "month") : _this.num(dt.month, 2);

        case "MMM":
          // like Jan
          return month("short", false);

        case "MMMM":
          // like January
          return month("long", false);

        case "MMMMM":
          // like J
          return month("narrow", false);
        // years

        case "y":
          // like 2014
          return useDateTimeFormatter ? string({
            year: "numeric"
          }, "year") : _this.num(dt.year);

        case "yy":
          // like 14
          return useDateTimeFormatter ? string({
            year: "2-digit"
          }, "year") : _this.num(dt.year.toString().slice(-2), 2);

        case "yyyy":
          // like 0012
          return useDateTimeFormatter ? string({
            year: "numeric"
          }, "year") : _this.num(dt.year, 4);

        case "yyyyyy":
          // like 000012
          return useDateTimeFormatter ? string({
            year: "numeric"
          }, "year") : _this.num(dt.year, 6);
        // eras

        case "G":
          // like AD
          return era("short");

        case "GG":
          // like Anno Domini
          return era("long");

        case "GGGGG":
          return era("narrow");

        case "kk":
          return _this.num(dt.weekYear.toString().slice(-2), 2);

        case "kkkk":
          return _this.num(dt.weekYear, 4);

        case "W":
          return _this.num(dt.weekNumber);

        case "WW":
          return _this.num(dt.weekNumber, 2);

        case "o":
          return _this.num(dt.ordinal);

        case "ooo":
          return _this.num(dt.ordinal, 3);

        case "q":
          // like 1
          return _this.num(dt.quarter);

        case "qq":
          // like 01
          return _this.num(dt.quarter, 2);

        case "X":
          return _this.num(Math.floor(dt.ts / 1000));

        case "x":
          return _this.num(dt.ts);

        default:
          return maybeMacro(token);
      }
    };

    return stringifyTokens(Formatter.parseFormat(fmt), tokenToString);
  };

  _proto.formatDurationFromString = function formatDurationFromString(dur, fmt) {
    var _this2 = this;

    var tokenToField = function tokenToField(token) {
      switch (token[0]) {
        case "S":
          return "millisecond";

        case "s":
          return "second";

        case "m":
          return "minute";

        case "h":
          return "hour";

        case "d":
          return "day";

        case "M":
          return "month";

        case "y":
          return "year";

        default:
          return null;
      }
    },
        tokenToString = function tokenToString(lildur) {
      return function (token) {
        var mapped = tokenToField(token);

        if (mapped) {
          return _this2.num(lildur.get(mapped), token.length);
        } else {
          return token;
        }
      };
    },
        tokens = Formatter.parseFormat(fmt),
        realTokens = tokens.reduce(function (found, _ref) {
      var literal = _ref.literal,
          val = _ref.val;
      return literal ? found : found.concat(val);
    }, []),
        collapsed = dur.shiftTo.apply(dur, realTokens.map(tokenToField).filter(function (t) {
      return t;
    }));

    return stringifyTokens(tokens, tokenToString(collapsed));
  };

  return Formatter;
}();

var Invalid = /*#__PURE__*/function () {
  function Invalid(reason, explanation) {
    this.reason = reason;
    this.explanation = explanation;
  }

  var _proto = Invalid.prototype;

  _proto.toMessage = function toMessage() {
    if (this.explanation) {
      return this.reason + ": " + this.explanation;
    } else {
      return this.reason;
    }
  };

  return Invalid;
}();

/**
 * @interface
 */

var Zone = /*#__PURE__*/function () {
  function Zone() {}

  var _proto = Zone.prototype;

  /**
   * Returns the offset's common name (such as EST) at the specified timestamp
   * @abstract
   * @param {number} ts - Epoch milliseconds for which to get the name
   * @param {Object} opts - Options to affect the format
   * @param {string} opts.format - What style of offset to return. Accepts 'long' or 'short'.
   * @param {string} opts.locale - What locale to return the offset name in.
   * @return {string}
   */
  _proto.offsetName = function offsetName(ts, opts) {
    throw new ZoneIsAbstractError();
  }
  /**
   * Returns the offset's value as a string
   * @abstract
   * @param {number} ts - Epoch milliseconds for which to get the offset
   * @param {string} format - What style of offset to return.
   *                          Accepts 'narrow', 'short', or 'techie'. Returning '+6', '+06:00', or '+0600' respectively
   * @return {string}
   */
  ;

  _proto.formatOffset = function formatOffset(ts, format) {
    throw new ZoneIsAbstractError();
  }
  /**
   * Return the offset in minutes for this zone at the specified timestamp.
   * @abstract
   * @param {number} ts - Epoch milliseconds for which to compute the offset
   * @return {number}
   */
  ;

  _proto.offset = function offset(ts) {
    throw new ZoneIsAbstractError();
  }
  /**
   * Return whether this Zone is equal to another zone
   * @abstract
   * @param {Zone} otherZone - the zone to compare
   * @return {boolean}
   */
  ;

  _proto.equals = function equals(otherZone) {
    throw new ZoneIsAbstractError();
  }
  /**
   * Return whether this Zone is valid.
   * @abstract
   * @type {boolean}
   */
  ;

  _createClass(Zone, [{
    key: "type",

    /**
     * The type of zone
     * @abstract
     * @type {string}
     */
    get: function get() {
      throw new ZoneIsAbstractError();
    }
    /**
     * The name of this zone.
     * @abstract
     * @type {string}
     */

  }, {
    key: "name",
    get: function get() {
      throw new ZoneIsAbstractError();
    }
    /**
     * Returns whether the offset is known to be fixed for the whole year.
     * @abstract
     * @type {boolean}
     */

  }, {
    key: "universal",
    get: function get() {
      throw new ZoneIsAbstractError();
    }
  }, {
    key: "isValid",
    get: function get() {
      throw new ZoneIsAbstractError();
    }
  }]);

  return Zone;
}();

var singleton = null;
/**
 * Represents the local zone for this JavaScript environment.
 * @implements {Zone}
 */

var LocalZone = /*#__PURE__*/function (_Zone) {
  _inheritsLoose(LocalZone, _Zone);

  function LocalZone() {
    return _Zone.apply(this, arguments) || this;
  }

  var _proto = LocalZone.prototype;

  /** @override **/
  _proto.offsetName = function offsetName(ts, _ref) {
    var format = _ref.format,
        locale = _ref.locale;
    return parseZoneInfo(ts, format, locale);
  }
  /** @override **/
  ;

  _proto.formatOffset = function formatOffset$1(ts, format) {
    return formatOffset(this.offset(ts), format);
  }
  /** @override **/
  ;

  _proto.offset = function offset(ts) {
    return -new Date(ts).getTimezoneOffset();
  }
  /** @override **/
  ;

  _proto.equals = function equals(otherZone) {
    return otherZone.type === "local";
  }
  /** @override **/
  ;

  _createClass(LocalZone, [{
    key: "type",

    /** @override **/
    get: function get() {
      return "local";
    }
    /** @override **/

  }, {
    key: "name",
    get: function get() {
      if (hasIntl()) {
        return new Intl.DateTimeFormat().resolvedOptions().timeZone;
      } else return "local";
    }
    /** @override **/

  }, {
    key: "universal",
    get: function get() {
      return false;
    }
  }, {
    key: "isValid",
    get: function get() {
      return true;
    }
  }], [{
    key: "instance",

    /**
     * Get a singleton instance of the local zone
     * @return {LocalZone}
     */
    get: function get() {
      if (singleton === null) {
        singleton = new LocalZone();
      }

      return singleton;
    }
  }]);

  return LocalZone;
}(Zone);

var matchingRegex = RegExp("^" + ianaRegex.source + "$");
var dtfCache = {};

function makeDTF(zone) {
  if (!dtfCache[zone]) {
    dtfCache[zone] = new Intl.DateTimeFormat("en-US", {
      hour12: false,
      timeZone: zone,
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit"
    });
  }

  return dtfCache[zone];
}

var typeToPos = {
  year: 0,
  month: 1,
  day: 2,
  hour: 3,
  minute: 4,
  second: 5
};

function hackyOffset(dtf, date) {
  var formatted = dtf.format(date).replace(/\u200E/g, ""),
      parsed = /(\d+)\/(\d+)\/(\d+),? (\d+):(\d+):(\d+)/.exec(formatted),
      fMonth = parsed[1],
      fDay = parsed[2],
      fYear = parsed[3],
      fHour = parsed[4],
      fMinute = parsed[5],
      fSecond = parsed[6];
  return [fYear, fMonth, fDay, fHour, fMinute, fSecond];
}

function partsOffset(dtf, date) {
  var formatted = dtf.formatToParts(date),
      filled = [];

  for (var i = 0; i < formatted.length; i++) {
    var _formatted$i = formatted[i],
        type = _formatted$i.type,
        value = _formatted$i.value,
        pos = typeToPos[type];

    if (!isUndefined(pos)) {
      filled[pos] = parseInt(value, 10);
    }
  }

  return filled;
}

var ianaZoneCache = {};
/**
 * A zone identified by an IANA identifier, like America/New_York
 * @implements {Zone}
 */

var IANAZone = /*#__PURE__*/function (_Zone) {
  _inheritsLoose(IANAZone, _Zone);

  /**
   * @param {string} name - Zone name
   * @return {IANAZone}
   */
  IANAZone.create = function create(name) {
    if (!ianaZoneCache[name]) {
      ianaZoneCache[name] = new IANAZone(name);
    }

    return ianaZoneCache[name];
  }
  /**
   * Reset local caches. Should only be necessary in testing scenarios.
   * @return {void}
   */
  ;

  IANAZone.resetCache = function resetCache() {
    ianaZoneCache = {};
    dtfCache = {};
  }
  /**
   * Returns whether the provided string is a valid specifier. This only checks the string's format, not that the specifier identifies a known zone; see isValidZone for that.
   * @param {string} s - The string to check validity on
   * @example IANAZone.isValidSpecifier("America/New_York") //=> true
   * @example IANAZone.isValidSpecifier("Fantasia/Castle") //=> true
   * @example IANAZone.isValidSpecifier("Sport~~blorp") //=> false
   * @return {boolean}
   */
  ;

  IANAZone.isValidSpecifier = function isValidSpecifier(s) {
    return !!(s && s.match(matchingRegex));
  }
  /**
   * Returns whether the provided string identifies a real zone
   * @param {string} zone - The string to check
   * @example IANAZone.isValidZone("America/New_York") //=> true
   * @example IANAZone.isValidZone("Fantasia/Castle") //=> false
   * @example IANAZone.isValidZone("Sport~~blorp") //=> false
   * @return {boolean}
   */
  ;

  IANAZone.isValidZone = function isValidZone(zone) {
    try {
      new Intl.DateTimeFormat("en-US", {
        timeZone: zone
      }).format();
      return true;
    } catch (e) {
      return false;
    }
  } // Etc/GMT+8 -> -480

  /** @ignore */
  ;

  IANAZone.parseGMTOffset = function parseGMTOffset(specifier) {
    if (specifier) {
      var match = specifier.match(/^Etc\/GMT(0|[+-]\d{1,2})$/i);

      if (match) {
        return -60 * parseInt(match[1]);
      }
    }

    return null;
  };

  function IANAZone(name) {
    var _this;

    _this = _Zone.call(this) || this;
    /** @private **/

    _this.zoneName = name;
    /** @private **/

    _this.valid = IANAZone.isValidZone(name);
    return _this;
  }
  /** @override **/


  var _proto = IANAZone.prototype;

  /** @override **/
  _proto.offsetName = function offsetName(ts, _ref) {
    var format = _ref.format,
        locale = _ref.locale;
    return parseZoneInfo(ts, format, locale, this.name);
  }
  /** @override **/
  ;

  _proto.formatOffset = function formatOffset$1(ts, format) {
    return formatOffset(this.offset(ts), format);
  }
  /** @override **/
  ;

  _proto.offset = function offset(ts) {
    var date = new Date(ts);
    if (isNaN(date)) return NaN;

    var dtf = makeDTF(this.name),
        _ref2 = dtf.formatToParts ? partsOffset(dtf, date) : hackyOffset(dtf, date),
        year = _ref2[0],
        month = _ref2[1],
        day = _ref2[2],
        hour = _ref2[3],
        minute = _ref2[4],
        second = _ref2[5],
        adjustedHour = hour === 24 ? 0 : hour;

    var asUTC = objToLocalTS({
      year: year,
      month: month,
      day: day,
      hour: adjustedHour,
      minute: minute,
      second: second,
      millisecond: 0
    });
    var asTS = +date;
    var over = asTS % 1000;
    asTS -= over >= 0 ? over : 1000 + over;
    return (asUTC - asTS) / (60 * 1000);
  }
  /** @override **/
  ;

  _proto.equals = function equals(otherZone) {
    return otherZone.type === "iana" && otherZone.name === this.name;
  }
  /** @override **/
  ;

  _createClass(IANAZone, [{
    key: "type",
    get: function get() {
      return "iana";
    }
    /** @override **/

  }, {
    key: "name",
    get: function get() {
      return this.zoneName;
    }
    /** @override **/

  }, {
    key: "universal",
    get: function get() {
      return false;
    }
  }, {
    key: "isValid",
    get: function get() {
      return this.valid;
    }
  }]);

  return IANAZone;
}(Zone);

var singleton$1 = null;
/**
 * A zone with a fixed offset (meaning no DST)
 * @implements {Zone}
 */

var FixedOffsetZone = /*#__PURE__*/function (_Zone) {
  _inheritsLoose(FixedOffsetZone, _Zone);

  /**
   * Get an instance with a specified offset
   * @param {number} offset - The offset in minutes
   * @return {FixedOffsetZone}
   */
  FixedOffsetZone.instance = function instance(offset) {
    return offset === 0 ? FixedOffsetZone.utcInstance : new FixedOffsetZone(offset);
  }
  /**
   * Get an instance of FixedOffsetZone from a UTC offset string, like "UTC+6"
   * @param {string} s - The offset string to parse
   * @example FixedOffsetZone.parseSpecifier("UTC+6")
   * @example FixedOffsetZone.parseSpecifier("UTC+06")
   * @example FixedOffsetZone.parseSpecifier("UTC-6:00")
   * @return {FixedOffsetZone}
   */
  ;

  FixedOffsetZone.parseSpecifier = function parseSpecifier(s) {
    if (s) {
      var r = s.match(/^utc(?:([+-]\d{1,2})(?::(\d{2}))?)?$/i);

      if (r) {
        return new FixedOffsetZone(signedOffset(r[1], r[2]));
      }
    }

    return null;
  };

  _createClass(FixedOffsetZone, null, [{
    key: "utcInstance",

    /**
     * Get a singleton instance of UTC
     * @return {FixedOffsetZone}
     */
    get: function get() {
      if (singleton$1 === null) {
        singleton$1 = new FixedOffsetZone(0);
      }

      return singleton$1;
    }
  }]);

  function FixedOffsetZone(offset) {
    var _this;

    _this = _Zone.call(this) || this;
    /** @private **/

    _this.fixed = offset;
    return _this;
  }
  /** @override **/


  var _proto = FixedOffsetZone.prototype;

  /** @override **/
  _proto.offsetName = function offsetName() {
    return this.name;
  }
  /** @override **/
  ;

  _proto.formatOffset = function formatOffset$1(ts, format) {
    return formatOffset(this.fixed, format);
  }
  /** @override **/
  ;

  /** @override **/
  _proto.offset = function offset() {
    return this.fixed;
  }
  /** @override **/
  ;

  _proto.equals = function equals(otherZone) {
    return otherZone.type === "fixed" && otherZone.fixed === this.fixed;
  }
  /** @override **/
  ;

  _createClass(FixedOffsetZone, [{
    key: "type",
    get: function get() {
      return "fixed";
    }
    /** @override **/

  }, {
    key: "name",
    get: function get() {
      return this.fixed === 0 ? "UTC" : "UTC" + formatOffset(this.fixed, "narrow");
    }
  }, {
    key: "universal",
    get: function get() {
      return true;
    }
  }, {
    key: "isValid",
    get: function get() {
      return true;
    }
  }]);

  return FixedOffsetZone;
}(Zone);

/**
 * A zone that failed to parse. You should never need to instantiate this.
 * @implements {Zone}
 */

var InvalidZone = /*#__PURE__*/function (_Zone) {
  _inheritsLoose(InvalidZone, _Zone);

  function InvalidZone(zoneName) {
    var _this;

    _this = _Zone.call(this) || this;
    /**  @private */

    _this.zoneName = zoneName;
    return _this;
  }
  /** @override **/


  var _proto = InvalidZone.prototype;

  /** @override **/
  _proto.offsetName = function offsetName() {
    return null;
  }
  /** @override **/
  ;

  _proto.formatOffset = function formatOffset() {
    return "";
  }
  /** @override **/
  ;

  _proto.offset = function offset() {
    return NaN;
  }
  /** @override **/
  ;

  _proto.equals = function equals() {
    return false;
  }
  /** @override **/
  ;

  _createClass(InvalidZone, [{
    key: "type",
    get: function get() {
      return "invalid";
    }
    /** @override **/

  }, {
    key: "name",
    get: function get() {
      return this.zoneName;
    }
    /** @override **/

  }, {
    key: "universal",
    get: function get() {
      return false;
    }
  }, {
    key: "isValid",
    get: function get() {
      return false;
    }
  }]);

  return InvalidZone;
}(Zone);

/**
 * @private
 */
function normalizeZone(input, defaultZone) {
  var offset;

  if (isUndefined(input) || input === null) {
    return defaultZone;
  } else if (input instanceof Zone) {
    return input;
  } else if (isString(input)) {
    var lowered = input.toLowerCase();
    if (lowered === "local") return defaultZone;else if (lowered === "utc" || lowered === "gmt") return FixedOffsetZone.utcInstance;else if ((offset = IANAZone.parseGMTOffset(input)) != null) {
      // handle Etc/GMT-4, which V8 chokes on
      return FixedOffsetZone.instance(offset);
    } else if (IANAZone.isValidSpecifier(lowered)) return IANAZone.create(input);else return FixedOffsetZone.parseSpecifier(lowered) || new InvalidZone(input);
  } else if (isNumber(input)) {
    return FixedOffsetZone.instance(input);
  } else if (typeof input === "object" && input.offset && typeof input.offset === "number") {
    // This is dumb, but the instanceof check above doesn't seem to really work
    // so we're duck checking it
    return input;
  } else {
    return new InvalidZone(input);
  }
}

var now = function now() {
  return Date.now();
},
    defaultZone = null,
    // not setting this directly to LocalZone.instance bc loading order issues
defaultLocale = null,
    defaultNumberingSystem = null,
    defaultOutputCalendar = null,
    throwOnInvalid = false;
/**
 * Settings contains static getters and setters that control Luxon's overall behavior. Luxon is a simple library with few options, but the ones it does have live here.
 */


var Settings = /*#__PURE__*/function () {
  function Settings() {}

  /**
   * Reset Luxon's global caches. Should only be necessary in testing scenarios.
   * @return {void}
   */
  Settings.resetCaches = function resetCaches() {
    Locale.resetCache();
    IANAZone.resetCache();
  };

  _createClass(Settings, null, [{
    key: "now",

    /**
     * Get the callback for returning the current timestamp.
     * @type {function}
     */
    get: function get() {
      return now;
    }
    /**
     * Set the callback for returning the current timestamp.
     * The function should return a number, which will be interpreted as an Epoch millisecond count
     * @type {function}
     * @example Settings.now = () => Date.now() + 3000 // pretend it is 3 seconds in the future
     * @example Settings.now = () => 0 // always pretend it's Jan 1, 1970 at midnight in UTC time
     */
    ,
    set: function set(n) {
      now = n;
    }
    /**
     * Get the default time zone to create DateTimes in.
     * @type {string}
     */

  }, {
    key: "defaultZoneName",
    get: function get() {
      return Settings.defaultZone.name;
    }
    /**
     * Set the default time zone to create DateTimes in. Does not affect existing instances.
     * @type {string}
     */
    ,
    set: function set(z) {
      if (!z) {
        defaultZone = null;
      } else {
        defaultZone = normalizeZone(z);
      }
    }
    /**
     * Get the default time zone object to create DateTimes in. Does not affect existing instances.
     * @type {Zone}
     */

  }, {
    key: "defaultZone",
    get: function get() {
      return defaultZone || LocalZone.instance;
    }
    /**
     * Get the default locale to create DateTimes with. Does not affect existing instances.
     * @type {string}
     */

  }, {
    key: "defaultLocale",
    get: function get() {
      return defaultLocale;
    }
    /**
     * Set the default locale to create DateTimes with. Does not affect existing instances.
     * @type {string}
     */
    ,
    set: function set(locale) {
      defaultLocale = locale;
    }
    /**
     * Get the default numbering system to create DateTimes with. Does not affect existing instances.
     * @type {string}
     */

  }, {
    key: "defaultNumberingSystem",
    get: function get() {
      return defaultNumberingSystem;
    }
    /**
     * Set the default numbering system to create DateTimes with. Does not affect existing instances.
     * @type {string}
     */
    ,
    set: function set(numberingSystem) {
      defaultNumberingSystem = numberingSystem;
    }
    /**
     * Get the default output calendar to create DateTimes with. Does not affect existing instances.
     * @type {string}
     */

  }, {
    key: "defaultOutputCalendar",
    get: function get() {
      return defaultOutputCalendar;
    }
    /**
     * Set the default output calendar to create DateTimes with. Does not affect existing instances.
     * @type {string}
     */
    ,
    set: function set(outputCalendar) {
      defaultOutputCalendar = outputCalendar;
    }
    /**
     * Get whether Luxon will throw when it encounters invalid DateTimes, Durations, or Intervals
     * @type {boolean}
     */

  }, {
    key: "throwOnInvalid",
    get: function get() {
      return throwOnInvalid;
    }
    /**
     * Set whether Luxon will throw when it encounters invalid DateTimes, Durations, or Intervals
     * @type {boolean}
     */
    ,
    set: function set(t) {
      throwOnInvalid = t;
    }
  }]);

  return Settings;
}();

var intlDTCache = {};

function getCachedDTF(locString, opts) {
  if (opts === void 0) {
    opts = {};
  }

  var key = JSON.stringify([locString, opts]);
  var dtf = intlDTCache[key];

  if (!dtf) {
    dtf = new Intl.DateTimeFormat(locString, opts);
    intlDTCache[key] = dtf;
  }

  return dtf;
}

var intlNumCache = {};

function getCachedINF(locString, opts) {
  if (opts === void 0) {
    opts = {};
  }

  var key = JSON.stringify([locString, opts]);
  var inf = intlNumCache[key];

  if (!inf) {
    inf = new Intl.NumberFormat(locString, opts);
    intlNumCache[key] = inf;
  }

  return inf;
}

var intlRelCache = {};

function getCachedRTF(locString, opts) {
  if (opts === void 0) {
    opts = {};
  }

  var _opts = opts,
      cacheKeyOpts = _objectWithoutPropertiesLoose(_opts, ["base"]); // exclude `base` from the options


  var key = JSON.stringify([locString, cacheKeyOpts]);
  var inf = intlRelCache[key];

  if (!inf) {
    inf = new Intl.RelativeTimeFormat(locString, opts);
    intlRelCache[key] = inf;
  }

  return inf;
}

var sysLocaleCache = null;

function systemLocale() {
  if (sysLocaleCache) {
    return sysLocaleCache;
  } else if (hasIntl()) {
    var computedSys = new Intl.DateTimeFormat().resolvedOptions().locale; // node sometimes defaults to "und". Override that because that is dumb

    sysLocaleCache = !computedSys || computedSys === "und" ? "en-US" : computedSys;
    return sysLocaleCache;
  } else {
    sysLocaleCache = "en-US";
    return sysLocaleCache;
  }
}

function parseLocaleString(localeStr) {
  // I really want to avoid writing a BCP 47 parser
  // see, e.g. https://github.com/wooorm/bcp-47
  // Instead, we'll do this:
  // a) if the string has no -u extensions, just leave it alone
  // b) if it does, use Intl to resolve everything
  // c) if Intl fails, try again without the -u
  var uIndex = localeStr.indexOf("-u-");

  if (uIndex === -1) {
    return [localeStr];
  } else {
    var options;
    var smaller = localeStr.substring(0, uIndex);

    try {
      options = getCachedDTF(localeStr).resolvedOptions();
    } catch (e) {
      options = getCachedDTF(smaller).resolvedOptions();
    }

    var _options = options,
        numberingSystem = _options.numberingSystem,
        calendar = _options.calendar; // return the smaller one so that we can append the calendar and numbering overrides to it

    return [smaller, numberingSystem, calendar];
  }
}

function intlConfigString(localeStr, numberingSystem, outputCalendar) {
  if (hasIntl()) {
    if (outputCalendar || numberingSystem) {
      localeStr += "-u";

      if (outputCalendar) {
        localeStr += "-ca-" + outputCalendar;
      }

      if (numberingSystem) {
        localeStr += "-nu-" + numberingSystem;
      }

      return localeStr;
    } else {
      return localeStr;
    }
  } else {
    return [];
  }
}

function mapMonths(f) {
  var ms = [];

  for (var i = 1; i <= 12; i++) {
    var dt = DateTime.utc(2016, i, 1);
    ms.push(f(dt));
  }

  return ms;
}

function mapWeekdays(f) {
  var ms = [];

  for (var i = 1; i <= 7; i++) {
    var dt = DateTime.utc(2016, 11, 13 + i);
    ms.push(f(dt));
  }

  return ms;
}

function listStuff(loc, length, defaultOK, englishFn, intlFn) {
  var mode = loc.listingMode(defaultOK);

  if (mode === "error") {
    return null;
  } else if (mode === "en") {
    return englishFn(length);
  } else {
    return intlFn(length);
  }
}

function supportsFastNumbers(loc) {
  if (loc.numberingSystem && loc.numberingSystem !== "latn") {
    return false;
  } else {
    return loc.numberingSystem === "latn" || !loc.locale || loc.locale.startsWith("en") || hasIntl() && new Intl.DateTimeFormat(loc.intl).resolvedOptions().numberingSystem === "latn";
  }
}
/**
 * @private
 */


var PolyNumberFormatter = /*#__PURE__*/function () {
  function PolyNumberFormatter(intl, forceSimple, opts) {
    this.padTo = opts.padTo || 0;
    this.floor = opts.floor || false;

    if (!forceSimple && hasIntl()) {
      var intlOpts = {
        useGrouping: false
      };
      if (opts.padTo > 0) intlOpts.minimumIntegerDigits = opts.padTo;
      this.inf = getCachedINF(intl, intlOpts);
    }
  }

  var _proto = PolyNumberFormatter.prototype;

  _proto.format = function format(i) {
    if (this.inf) {
      var fixed = this.floor ? Math.floor(i) : i;
      return this.inf.format(fixed);
    } else {
      // to match the browser's numberformatter defaults
      var _fixed = this.floor ? Math.floor(i) : roundTo(i, 3);

      return padStart(_fixed, this.padTo);
    }
  };

  return PolyNumberFormatter;
}();
/**
 * @private
 */


var PolyDateFormatter = /*#__PURE__*/function () {
  function PolyDateFormatter(dt, intl, opts) {
    this.opts = opts;
    this.hasIntl = hasIntl();
    var z;

    if (dt.zone.universal && this.hasIntl) {
      // UTC-8 or Etc/UTC-8 are not part of tzdata, only Etc/GMT+8 and the like.
      // That is why fixed-offset TZ is set to that unless it is:
      // 1. Representing offset 0 when UTC is used to maintain previous behavior and does not become GMT.
      // 2. Unsupported by the browser:
      //    - some do not support Etc/
      //    - < Etc/GMT-14, > Etc/GMT+12, and 30-minute or 45-minute offsets are not part of tzdata
      var gmtOffset = -1 * (dt.offset / 60);
      var offsetZ = gmtOffset >= 0 ? "Etc/GMT+" + gmtOffset : "Etc/GMT" + gmtOffset;
      var isOffsetZoneSupported = IANAZone.isValidZone(offsetZ);

      if (dt.offset !== 0 && isOffsetZoneSupported) {
        z = offsetZ;
        this.dt = dt;
      } else {
        // Not all fixed-offset zones like Etc/+4:30 are present in tzdata.
        // So we have to make do. Two cases:
        // 1. The format options tell us to show the zone. We can't do that, so the best
        // we can do is format the date in UTC.
        // 2. The format options don't tell us to show the zone. Then we can adjust them
        // the time and tell the formatter to show it to us in UTC, so that the time is right
        // and the bad zone doesn't show up.
        z = "UTC";

        if (opts.timeZoneName) {
          this.dt = dt;
        } else {
          this.dt = dt.offset === 0 ? dt : DateTime.fromMillis(dt.ts + dt.offset * 60 * 1000);
        }
      }
    } else if (dt.zone.type === "local") {
      this.dt = dt;
    } else {
      this.dt = dt;
      z = dt.zone.name;
    }

    if (this.hasIntl) {
      var intlOpts = Object.assign({}, this.opts);

      if (z) {
        intlOpts.timeZone = z;
      }

      this.dtf = getCachedDTF(intl, intlOpts);
    }
  }

  var _proto2 = PolyDateFormatter.prototype;

  _proto2.format = function format() {
    if (this.hasIntl) {
      return this.dtf.format(this.dt.toJSDate());
    } else {
      var tokenFormat = formatString(this.opts),
          loc = Locale.create("en-US");
      return Formatter.create(loc).formatDateTimeFromString(this.dt, tokenFormat);
    }
  };

  _proto2.formatToParts = function formatToParts() {
    if (this.hasIntl && hasFormatToParts()) {
      return this.dtf.formatToParts(this.dt.toJSDate());
    } else {
      // This is kind of a cop out. We actually could do this for English. However, we couldn't do it for intl strings
      // and IMO it's too weird to have an uncanny valley like that
      return [];
    }
  };

  _proto2.resolvedOptions = function resolvedOptions() {
    if (this.hasIntl) {
      return this.dtf.resolvedOptions();
    } else {
      return {
        locale: "en-US",
        numberingSystem: "latn",
        outputCalendar: "gregory"
      };
    }
  };

  return PolyDateFormatter;
}();
/**
 * @private
 */


var PolyRelFormatter = /*#__PURE__*/function () {
  function PolyRelFormatter(intl, isEnglish, opts) {
    this.opts = Object.assign({
      style: "long"
    }, opts);

    if (!isEnglish && hasRelative()) {
      this.rtf = getCachedRTF(intl, opts);
    }
  }

  var _proto3 = PolyRelFormatter.prototype;

  _proto3.format = function format(count, unit) {
    if (this.rtf) {
      return this.rtf.format(count, unit);
    } else {
      return formatRelativeTime(unit, count, this.opts.numeric, this.opts.style !== "long");
    }
  };

  _proto3.formatToParts = function formatToParts(count, unit) {
    if (this.rtf) {
      return this.rtf.formatToParts(count, unit);
    } else {
      return [];
    }
  };

  return PolyRelFormatter;
}();
/**
 * @private
 */


var Locale = /*#__PURE__*/function () {
  Locale.fromOpts = function fromOpts(opts) {
    return Locale.create(opts.locale, opts.numberingSystem, opts.outputCalendar, opts.defaultToEN);
  };

  Locale.create = function create(locale, numberingSystem, outputCalendar, defaultToEN) {
    if (defaultToEN === void 0) {
      defaultToEN = false;
    }

    var specifiedLocale = locale || Settings.defaultLocale,
        // the system locale is useful for human readable strings but annoying for parsing/formatting known formats
    localeR = specifiedLocale || (defaultToEN ? "en-US" : systemLocale()),
        numberingSystemR = numberingSystem || Settings.defaultNumberingSystem,
        outputCalendarR = outputCalendar || Settings.defaultOutputCalendar;
    return new Locale(localeR, numberingSystemR, outputCalendarR, specifiedLocale);
  };

  Locale.resetCache = function resetCache() {
    sysLocaleCache = null;
    intlDTCache = {};
    intlNumCache = {};
    intlRelCache = {};
  };

  Locale.fromObject = function fromObject(_temp) {
    var _ref = _temp === void 0 ? {} : _temp,
        locale = _ref.locale,
        numberingSystem = _ref.numberingSystem,
        outputCalendar = _ref.outputCalendar;

    return Locale.create(locale, numberingSystem, outputCalendar);
  };

  function Locale(locale, numbering, outputCalendar, specifiedLocale) {
    var _parseLocaleString = parseLocaleString(locale),
        parsedLocale = _parseLocaleString[0],
        parsedNumberingSystem = _parseLocaleString[1],
        parsedOutputCalendar = _parseLocaleString[2];

    this.locale = parsedLocale;
    this.numberingSystem = numbering || parsedNumberingSystem || null;
    this.outputCalendar = outputCalendar || parsedOutputCalendar || null;
    this.intl = intlConfigString(this.locale, this.numberingSystem, this.outputCalendar);
    this.weekdaysCache = {
      format: {},
      standalone: {}
    };
    this.monthsCache = {
      format: {},
      standalone: {}
    };
    this.meridiemCache = null;
    this.eraCache = {};
    this.specifiedLocale = specifiedLocale;
    this.fastNumbersCached = null;
  }

  var _proto4 = Locale.prototype;

  _proto4.listingMode = function listingMode(defaultOK) {
    if (defaultOK === void 0) {
      defaultOK = true;
    }

    var intl = hasIntl(),
        hasFTP = intl && hasFormatToParts(),
        isActuallyEn = this.isEnglish(),
        hasNoWeirdness = (this.numberingSystem === null || this.numberingSystem === "latn") && (this.outputCalendar === null || this.outputCalendar === "gregory");

    if (!hasFTP && !(isActuallyEn && hasNoWeirdness) && !defaultOK) {
      return "error";
    } else if (!hasFTP || isActuallyEn && hasNoWeirdness) {
      return "en";
    } else {
      return "intl";
    }
  };

  _proto4.clone = function clone(alts) {
    if (!alts || Object.getOwnPropertyNames(alts).length === 0) {
      return this;
    } else {
      return Locale.create(alts.locale || this.specifiedLocale, alts.numberingSystem || this.numberingSystem, alts.outputCalendar || this.outputCalendar, alts.defaultToEN || false);
    }
  };

  _proto4.redefaultToEN = function redefaultToEN(alts) {
    if (alts === void 0) {
      alts = {};
    }

    return this.clone(Object.assign({}, alts, {
      defaultToEN: true
    }));
  };

  _proto4.redefaultToSystem = function redefaultToSystem(alts) {
    if (alts === void 0) {
      alts = {};
    }

    return this.clone(Object.assign({}, alts, {
      defaultToEN: false
    }));
  };

  _proto4.months = function months$1(length, format, defaultOK) {
    var _this = this;

    if (format === void 0) {
      format = false;
    }

    if (defaultOK === void 0) {
      defaultOK = true;
    }

    return listStuff(this, length, defaultOK, months, function () {
      var intl = format ? {
        month: length,
        day: "numeric"
      } : {
        month: length
      },
          formatStr = format ? "format" : "standalone";

      if (!_this.monthsCache[formatStr][length]) {
        _this.monthsCache[formatStr][length] = mapMonths(function (dt) {
          return _this.extract(dt, intl, "month");
        });
      }

      return _this.monthsCache[formatStr][length];
    });
  };

  _proto4.weekdays = function weekdays$1(length, format, defaultOK) {
    var _this2 = this;

    if (format === void 0) {
      format = false;
    }

    if (defaultOK === void 0) {
      defaultOK = true;
    }

    return listStuff(this, length, defaultOK, weekdays, function () {
      var intl = format ? {
        weekday: length,
        year: "numeric",
        month: "long",
        day: "numeric"
      } : {
        weekday: length
      },
          formatStr = format ? "format" : "standalone";

      if (!_this2.weekdaysCache[formatStr][length]) {
        _this2.weekdaysCache[formatStr][length] = mapWeekdays(function (dt) {
          return _this2.extract(dt, intl, "weekday");
        });
      }

      return _this2.weekdaysCache[formatStr][length];
    });
  };

  _proto4.meridiems = function meridiems$1(defaultOK) {
    var _this3 = this;

    if (defaultOK === void 0) {
      defaultOK = true;
    }

    return listStuff(this, undefined, defaultOK, function () {
      return meridiems;
    }, function () {
      // In theory there could be aribitrary day periods. We're gonna assume there are exactly two
      // for AM and PM. This is probably wrong, but it's makes parsing way easier.
      if (!_this3.meridiemCache) {
        var intl = {
          hour: "numeric",
          hour12: true
        };
        _this3.meridiemCache = [DateTime.utc(2016, 11, 13, 9), DateTime.utc(2016, 11, 13, 19)].map(function (dt) {
          return _this3.extract(dt, intl, "dayperiod");
        });
      }

      return _this3.meridiemCache;
    });
  };

  _proto4.eras = function eras$1(length, defaultOK) {
    var _this4 = this;

    if (defaultOK === void 0) {
      defaultOK = true;
    }

    return listStuff(this, length, defaultOK, eras, function () {
      var intl = {
        era: length
      }; // This is problematic. Different calendars are going to define eras totally differently. What I need is the minimum set of dates
      // to definitely enumerate them.

      if (!_this4.eraCache[length]) {
        _this4.eraCache[length] = [DateTime.utc(-40, 1, 1), DateTime.utc(2017, 1, 1)].map(function (dt) {
          return _this4.extract(dt, intl, "era");
        });
      }

      return _this4.eraCache[length];
    });
  };

  _proto4.extract = function extract(dt, intlOpts, field) {
    var df = this.dtFormatter(dt, intlOpts),
        results = df.formatToParts(),
        matching = results.find(function (m) {
      return m.type.toLowerCase() === field;
    });
    return matching ? matching.value : null;
  };

  _proto4.numberFormatter = function numberFormatter(opts) {
    if (opts === void 0) {
      opts = {};
    }

    // this forcesimple option is never used (the only caller short-circuits on it, but it seems safer to leave)
    // (in contrast, the rest of the condition is used heavily)
    return new PolyNumberFormatter(this.intl, opts.forceSimple || this.fastNumbers, opts);
  };

  _proto4.dtFormatter = function dtFormatter(dt, intlOpts) {
    if (intlOpts === void 0) {
      intlOpts = {};
    }

    return new PolyDateFormatter(dt, this.intl, intlOpts);
  };

  _proto4.relFormatter = function relFormatter(opts) {
    if (opts === void 0) {
      opts = {};
    }

    return new PolyRelFormatter(this.intl, this.isEnglish(), opts);
  };

  _proto4.isEnglish = function isEnglish() {
    return this.locale === "en" || this.locale.toLowerCase() === "en-us" || hasIntl() && new Intl.DateTimeFormat(this.intl).resolvedOptions().locale.startsWith("en-us");
  };

  _proto4.equals = function equals(other) {
    return this.locale === other.locale && this.numberingSystem === other.numberingSystem && this.outputCalendar === other.outputCalendar;
  };

  _createClass(Locale, [{
    key: "fastNumbers",
    get: function get() {
      if (this.fastNumbersCached == null) {
        this.fastNumbersCached = supportsFastNumbers(this);
      }

      return this.fastNumbersCached;
    }
  }]);

  return Locale;
}();

/*
 * This file handles parsing for well-specified formats. Here's how it works:
 * Two things go into parsing: a regex to match with and an extractor to take apart the groups in the match.
 * An extractor is just a function that takes a regex match array and returns a { year: ..., month: ... } object
 * parse() does the work of executing the regex and applying the extractor. It takes multiple regex/extractor pairs to try in sequence.
 * Extractors can take a "cursor" representing the offset in the match to look at. This makes it easy to combine extractors.
 * combineExtractors() does the work of combining them, keeping track of the cursor through multiple extractions.
 * Some extractions are super dumb and simpleParse and fromStrings help DRY them.
 */

function combineRegexes() {
  for (var _len = arguments.length, regexes = new Array(_len), _key = 0; _key < _len; _key++) {
    regexes[_key] = arguments[_key];
  }

  var full = regexes.reduce(function (f, r) {
    return f + r.source;
  }, "");
  return RegExp("^" + full + "$");
}

function combineExtractors() {
  for (var _len2 = arguments.length, extractors = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    extractors[_key2] = arguments[_key2];
  }

  return function (m) {
    return extractors.reduce(function (_ref, ex) {
      var mergedVals = _ref[0],
          mergedZone = _ref[1],
          cursor = _ref[2];

      var _ex = ex(m, cursor),
          val = _ex[0],
          zone = _ex[1],
          next = _ex[2];

      return [Object.assign(mergedVals, val), mergedZone || zone, next];
    }, [{}, null, 1]).slice(0, 2);
  };
}

function parse(s) {
  if (s == null) {
    return [null, null];
  }

  for (var _len3 = arguments.length, patterns = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
    patterns[_key3 - 1] = arguments[_key3];
  }

  for (var _i = 0, _patterns = patterns; _i < _patterns.length; _i++) {
    var _patterns$_i = _patterns[_i],
        regex = _patterns$_i[0],
        extractor = _patterns$_i[1];
    var m = regex.exec(s);

    if (m) {
      return extractor(m);
    }
  }

  return [null, null];
}

function simpleParse() {
  for (var _len4 = arguments.length, keys = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
    keys[_key4] = arguments[_key4];
  }

  return function (match, cursor) {
    var ret = {};
    var i;

    for (i = 0; i < keys.length; i++) {
      ret[keys[i]] = parseInteger(match[cursor + i]);
    }

    return [ret, null, cursor + i];
  };
} // ISO and SQL parsing


var offsetRegex = /(?:(Z)|([+-]\d\d)(?::?(\d\d))?)/,
    isoTimeBaseRegex = /(\d\d)(?::?(\d\d)(?::?(\d\d)(?:[.,](\d{1,30}))?)?)?/,
    isoTimeRegex = RegExp("" + isoTimeBaseRegex.source + offsetRegex.source + "?"),
    isoTimeExtensionRegex = RegExp("(?:T" + isoTimeRegex.source + ")?"),
    isoYmdRegex = /([+-]\d{6}|\d{4})(?:-?(\d\d)(?:-?(\d\d))?)?/,
    isoWeekRegex = /(\d{4})-?W(\d\d)(?:-?(\d))?/,
    isoOrdinalRegex = /(\d{4})-?(\d{3})/,
    extractISOWeekData = simpleParse("weekYear", "weekNumber", "weekDay"),
    extractISOOrdinalData = simpleParse("year", "ordinal"),
    sqlYmdRegex = /(\d{4})-(\d\d)-(\d\d)/,
    // dumbed-down version of the ISO one
sqlTimeRegex = RegExp(isoTimeBaseRegex.source + " ?(?:" + offsetRegex.source + "|(" + ianaRegex.source + "))?"),
    sqlTimeExtensionRegex = RegExp("(?: " + sqlTimeRegex.source + ")?");

function int(match, pos, fallback) {
  var m = match[pos];
  return isUndefined(m) ? fallback : parseInteger(m);
}

function extractISOYmd(match, cursor) {
  var item = {
    year: int(match, cursor),
    month: int(match, cursor + 1, 1),
    day: int(match, cursor + 2, 1)
  };
  return [item, null, cursor + 3];
}

function extractISOTime(match, cursor) {
  var item = {
    hours: int(match, cursor, 0),
    minutes: int(match, cursor + 1, 0),
    seconds: int(match, cursor + 2, 0),
    milliseconds: parseMillis(match[cursor + 3])
  };
  return [item, null, cursor + 4];
}

function extractISOOffset(match, cursor) {
  var local = !match[cursor] && !match[cursor + 1],
      fullOffset = signedOffset(match[cursor + 1], match[cursor + 2]),
      zone = local ? null : FixedOffsetZone.instance(fullOffset);
  return [{}, zone, cursor + 3];
}

function extractIANAZone(match, cursor) {
  var zone = match[cursor] ? IANAZone.create(match[cursor]) : null;
  return [{}, zone, cursor + 1];
} // ISO time parsing


var isoTimeOnly = RegExp("^T?" + isoTimeBaseRegex.source + "$"); // ISO duration parsing

var isoDuration = /^-?P(?:(?:(-?\d{1,9})Y)?(?:(-?\d{1,9})M)?(?:(-?\d{1,9})W)?(?:(-?\d{1,9})D)?(?:T(?:(-?\d{1,9})H)?(?:(-?\d{1,9})M)?(?:(-?\d{1,20})(?:[.,](-?\d{1,9}))?S)?)?)$/;

function extractISODuration(match) {
  var s = match[0],
      yearStr = match[1],
      monthStr = match[2],
      weekStr = match[3],
      dayStr = match[4],
      hourStr = match[5],
      minuteStr = match[6],
      secondStr = match[7],
      millisecondsStr = match[8];
  var hasNegativePrefix = s[0] === "-";
  var negativeSeconds = secondStr && secondStr[0] === "-";

  var maybeNegate = function maybeNegate(num, force) {
    if (force === void 0) {
      force = false;
    }

    return num !== undefined && (force || num && hasNegativePrefix) ? -num : num;
  };

  return [{
    years: maybeNegate(parseInteger(yearStr)),
    months: maybeNegate(parseInteger(monthStr)),
    weeks: maybeNegate(parseInteger(weekStr)),
    days: maybeNegate(parseInteger(dayStr)),
    hours: maybeNegate(parseInteger(hourStr)),
    minutes: maybeNegate(parseInteger(minuteStr)),
    seconds: maybeNegate(parseInteger(secondStr), secondStr === "-0"),
    milliseconds: maybeNegate(parseMillis(millisecondsStr), negativeSeconds)
  }];
} // These are a little braindead. EDT *should* tell us that we're in, say, America/New_York
// and not just that we're in -240 *right now*. But since I don't think these are used that often
// I'm just going to ignore that


var obsOffsets = {
  GMT: 0,
  EDT: -4 * 60,
  EST: -5 * 60,
  CDT: -5 * 60,
  CST: -6 * 60,
  MDT: -6 * 60,
  MST: -7 * 60,
  PDT: -7 * 60,
  PST: -8 * 60
};

function fromStrings(weekdayStr, yearStr, monthStr, dayStr, hourStr, minuteStr, secondStr) {
  var result = {
    year: yearStr.length === 2 ? untruncateYear(parseInteger(yearStr)) : parseInteger(yearStr),
    month: monthsShort.indexOf(monthStr) + 1,
    day: parseInteger(dayStr),
    hour: parseInteger(hourStr),
    minute: parseInteger(minuteStr)
  };
  if (secondStr) result.second = parseInteger(secondStr);

  if (weekdayStr) {
    result.weekday = weekdayStr.length > 3 ? weekdaysLong.indexOf(weekdayStr) + 1 : weekdaysShort.indexOf(weekdayStr) + 1;
  }

  return result;
} // RFC 2822/5322


var rfc2822 = /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|(?:([+-]\d\d)(\d\d)))$/;

function extractRFC2822(match) {
  var weekdayStr = match[1],
      dayStr = match[2],
      monthStr = match[3],
      yearStr = match[4],
      hourStr = match[5],
      minuteStr = match[6],
      secondStr = match[7],
      obsOffset = match[8],
      milOffset = match[9],
      offHourStr = match[10],
      offMinuteStr = match[11],
      result = fromStrings(weekdayStr, yearStr, monthStr, dayStr, hourStr, minuteStr, secondStr);
  var offset;

  if (obsOffset) {
    offset = obsOffsets[obsOffset];
  } else if (milOffset) {
    offset = 0;
  } else {
    offset = signedOffset(offHourStr, offMinuteStr);
  }

  return [result, new FixedOffsetZone(offset)];
}

function preprocessRFC2822(s) {
  // Remove comments and folding whitespace and replace multiple-spaces with a single space
  return s.replace(/\([^)]*\)|[\n\t]/g, " ").replace(/(\s\s+)/g, " ").trim();
} // http date


var rfc1123 = /^(Mon|Tue|Wed|Thu|Fri|Sat|Sun), (\d\d) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) (\d{4}) (\d\d):(\d\d):(\d\d) GMT$/,
    rfc850 = /^(Monday|Tuesday|Wedsday|Thursday|Friday|Saturday|Sunday), (\d\d)-(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)-(\d\d) (\d\d):(\d\d):(\d\d) GMT$/,
    ascii = /^(Mon|Tue|Wed|Thu|Fri|Sat|Sun) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) ( \d|\d\d) (\d\d):(\d\d):(\d\d) (\d{4})$/;

function extractRFC1123Or850(match) {
  var weekdayStr = match[1],
      dayStr = match[2],
      monthStr = match[3],
      yearStr = match[4],
      hourStr = match[5],
      minuteStr = match[6],
      secondStr = match[7],
      result = fromStrings(weekdayStr, yearStr, monthStr, dayStr, hourStr, minuteStr, secondStr);
  return [result, FixedOffsetZone.utcInstance];
}

function extractASCII(match) {
  var weekdayStr = match[1],
      monthStr = match[2],
      dayStr = match[3],
      hourStr = match[4],
      minuteStr = match[5],
      secondStr = match[6],
      yearStr = match[7],
      result = fromStrings(weekdayStr, yearStr, monthStr, dayStr, hourStr, minuteStr, secondStr);
  return [result, FixedOffsetZone.utcInstance];
}

var isoYmdWithTimeExtensionRegex = combineRegexes(isoYmdRegex, isoTimeExtensionRegex);
var isoWeekWithTimeExtensionRegex = combineRegexes(isoWeekRegex, isoTimeExtensionRegex);
var isoOrdinalWithTimeExtensionRegex = combineRegexes(isoOrdinalRegex, isoTimeExtensionRegex);
var isoTimeCombinedRegex = combineRegexes(isoTimeRegex);
var extractISOYmdTimeAndOffset = combineExtractors(extractISOYmd, extractISOTime, extractISOOffset);
var extractISOWeekTimeAndOffset = combineExtractors(extractISOWeekData, extractISOTime, extractISOOffset);
var extractISOOrdinalDataAndTime = combineExtractors(extractISOOrdinalData, extractISOTime);
var extractISOTimeAndOffset = combineExtractors(extractISOTime, extractISOOffset);
/**
 * @private
 */

function parseISODate(s) {
  return parse(s, [isoYmdWithTimeExtensionRegex, extractISOYmdTimeAndOffset], [isoWeekWithTimeExtensionRegex, extractISOWeekTimeAndOffset], [isoOrdinalWithTimeExtensionRegex, extractISOOrdinalDataAndTime], [isoTimeCombinedRegex, extractISOTimeAndOffset]);
}
function parseRFC2822Date(s) {
  return parse(preprocessRFC2822(s), [rfc2822, extractRFC2822]);
}
function parseHTTPDate(s) {
  return parse(s, [rfc1123, extractRFC1123Or850], [rfc850, extractRFC1123Or850], [ascii, extractASCII]);
}
function parseISODuration(s) {
  return parse(s, [isoDuration, extractISODuration]);
}
var extractISOTimeOnly = combineExtractors(extractISOTime);
function parseISOTimeOnly(s) {
  return parse(s, [isoTimeOnly, extractISOTimeOnly]);
}
var sqlYmdWithTimeExtensionRegex = combineRegexes(sqlYmdRegex, sqlTimeExtensionRegex);
var sqlTimeCombinedRegex = combineRegexes(sqlTimeRegex);
var extractISOYmdTimeOffsetAndIANAZone = combineExtractors(extractISOYmd, extractISOTime, extractISOOffset, extractIANAZone);
var extractISOTimeOffsetAndIANAZone = combineExtractors(extractISOTime, extractISOOffset, extractIANAZone);
function parseSQL(s) {
  return parse(s, [sqlYmdWithTimeExtensionRegex, extractISOYmdTimeOffsetAndIANAZone], [sqlTimeCombinedRegex, extractISOTimeOffsetAndIANAZone]);
}

var INVALID = "Invalid Duration"; // unit conversion constants

var lowOrderMatrix = {
  weeks: {
    days: 7,
    hours: 7 * 24,
    minutes: 7 * 24 * 60,
    seconds: 7 * 24 * 60 * 60,
    milliseconds: 7 * 24 * 60 * 60 * 1000
  },
  days: {
    hours: 24,
    minutes: 24 * 60,
    seconds: 24 * 60 * 60,
    milliseconds: 24 * 60 * 60 * 1000
  },
  hours: {
    minutes: 60,
    seconds: 60 * 60,
    milliseconds: 60 * 60 * 1000
  },
  minutes: {
    seconds: 60,
    milliseconds: 60 * 1000
  },
  seconds: {
    milliseconds: 1000
  }
},
    casualMatrix = Object.assign({
  years: {
    quarters: 4,
    months: 12,
    weeks: 52,
    days: 365,
    hours: 365 * 24,
    minutes: 365 * 24 * 60,
    seconds: 365 * 24 * 60 * 60,
    milliseconds: 365 * 24 * 60 * 60 * 1000
  },
  quarters: {
    months: 3,
    weeks: 13,
    days: 91,
    hours: 91 * 24,
    minutes: 91 * 24 * 60,
    seconds: 91 * 24 * 60 * 60,
    milliseconds: 91 * 24 * 60 * 60 * 1000
  },
  months: {
    weeks: 4,
    days: 30,
    hours: 30 * 24,
    minutes: 30 * 24 * 60,
    seconds: 30 * 24 * 60 * 60,
    milliseconds: 30 * 24 * 60 * 60 * 1000
  }
}, lowOrderMatrix),
    daysInYearAccurate = 146097.0 / 400,
    daysInMonthAccurate = 146097.0 / 4800,
    accurateMatrix = Object.assign({
  years: {
    quarters: 4,
    months: 12,
    weeks: daysInYearAccurate / 7,
    days: daysInYearAccurate,
    hours: daysInYearAccurate * 24,
    minutes: daysInYearAccurate * 24 * 60,
    seconds: daysInYearAccurate * 24 * 60 * 60,
    milliseconds: daysInYearAccurate * 24 * 60 * 60 * 1000
  },
  quarters: {
    months: 3,
    weeks: daysInYearAccurate / 28,
    days: daysInYearAccurate / 4,
    hours: daysInYearAccurate * 24 / 4,
    minutes: daysInYearAccurate * 24 * 60 / 4,
    seconds: daysInYearAccurate * 24 * 60 * 60 / 4,
    milliseconds: daysInYearAccurate * 24 * 60 * 60 * 1000 / 4
  },
  months: {
    weeks: daysInMonthAccurate / 7,
    days: daysInMonthAccurate,
    hours: daysInMonthAccurate * 24,
    minutes: daysInMonthAccurate * 24 * 60,
    seconds: daysInMonthAccurate * 24 * 60 * 60,
    milliseconds: daysInMonthAccurate * 24 * 60 * 60 * 1000
  }
}, lowOrderMatrix); // units ordered by size

var orderedUnits = ["years", "quarters", "months", "weeks", "days", "hours", "minutes", "seconds", "milliseconds"];
var reverseUnits = orderedUnits.slice(0).reverse(); // clone really means "create another instance just like this one, but with these changes"

function clone(dur, alts, clear) {
  if (clear === void 0) {
    clear = false;
  }

  // deep merge for vals
  var conf = {
    values: clear ? alts.values : Object.assign({}, dur.values, alts.values || {}),
    loc: dur.loc.clone(alts.loc),
    conversionAccuracy: alts.conversionAccuracy || dur.conversionAccuracy
  };
  return new Duration(conf);
}

function antiTrunc(n) {
  return n < 0 ? Math.floor(n) : Math.ceil(n);
} // NB: mutates parameters


function convert(matrix, fromMap, fromUnit, toMap, toUnit) {
  var conv = matrix[toUnit][fromUnit],
      raw = fromMap[fromUnit] / conv,
      sameSign = Math.sign(raw) === Math.sign(toMap[toUnit]),
      // ok, so this is wild, but see the matrix in the tests
  added = !sameSign && toMap[toUnit] !== 0 && Math.abs(raw) <= 1 ? antiTrunc(raw) : Math.trunc(raw);
  toMap[toUnit] += added;
  fromMap[fromUnit] -= added * conv;
} // NB: mutates parameters


function normalizeValues(matrix, vals) {
  reverseUnits.reduce(function (previous, current) {
    if (!isUndefined(vals[current])) {
      if (previous) {
        convert(matrix, vals, previous, vals, current);
      }

      return current;
    } else {
      return previous;
    }
  }, null);
}
/**
 * A Duration object represents a period of time, like "2 months" or "1 day, 1 hour". Conceptually, it's just a map of units to their quantities, accompanied by some additional configuration and methods for creating, parsing, interrogating, transforming, and formatting them. They can be used on their own or in conjunction with other Luxon types; for example, you can use {@link DateTime.plus} to add a Duration object to a DateTime, producing another DateTime.
 *
 * Here is a brief overview of commonly used methods and getters in Duration:
 *
 * * **Creation** To create a Duration, use {@link Duration.fromMillis}, {@link Duration.fromObject}, or {@link Duration.fromISO}.
 * * **Unit values** See the {@link Duration.years}, {@link Duration.months}, {@link Duration.weeks}, {@link Duration.days}, {@link Duration.hours}, {@link Duration.minutes}, {@link Duration.seconds}, {@link Duration.milliseconds} accessors.
 * * **Configuration** See  {@link Duration.locale} and {@link Duration.numberingSystem} accessors.
 * * **Transformation** To create new Durations out of old ones use {@link Duration.plus}, {@link Duration.minus}, {@link Duration.normalize}, {@link Duration.set}, {@link Duration.reconfigure}, {@link Duration.shiftTo}, and {@link Duration.negate}.
 * * **Output** To convert the Duration into other representations, see {@link Duration.as}, {@link Duration.toISO}, {@link Duration.toFormat}, and {@link Duration.toJSON}
 *
 * There's are more methods documented below. In addition, for more information on subtler topics like internationalization and validity, see the external documentation.
 */


var Duration = /*#__PURE__*/function () {
  /**
   * @private
   */
  function Duration(config) {
    var accurate = config.conversionAccuracy === "longterm" || false;
    /**
     * @access private
     */

    this.values = config.values;
    /**
     * @access private
     */

    this.loc = config.loc || Locale.create();
    /**
     * @access private
     */

    this.conversionAccuracy = accurate ? "longterm" : "casual";
    /**
     * @access private
     */

    this.invalid = config.invalid || null;
    /**
     * @access private
     */

    this.matrix = accurate ? accurateMatrix : casualMatrix;
    /**
     * @access private
     */

    this.isLuxonDuration = true;
  }
  /**
   * Create Duration from a number of milliseconds.
   * @param {number} count of milliseconds
   * @param {Object} opts - options for parsing
   * @param {string} [opts.locale='en-US'] - the locale to use
   * @param {string} opts.numberingSystem - the numbering system to use
   * @param {string} [opts.conversionAccuracy='casual'] - the conversion system to use
   * @return {Duration}
   */


  Duration.fromMillis = function fromMillis(count, opts) {
    return Duration.fromObject(Object.assign({
      milliseconds: count
    }, opts));
  }
  /**
   * Create a Duration from a JavaScript object with keys like 'years' and 'hours.
   * If this object is empty then a zero milliseconds duration is returned.
   * @param {Object} obj - the object to create the DateTime from
   * @param {number} obj.years
   * @param {number} obj.quarters
   * @param {number} obj.months
   * @param {number} obj.weeks
   * @param {number} obj.days
   * @param {number} obj.hours
   * @param {number} obj.minutes
   * @param {number} obj.seconds
   * @param {number} obj.milliseconds
   * @param {string} [obj.locale='en-US'] - the locale to use
   * @param {string} obj.numberingSystem - the numbering system to use
   * @param {string} [obj.conversionAccuracy='casual'] - the conversion system to use
   * @return {Duration}
   */
  ;

  Duration.fromObject = function fromObject(obj) {
    if (obj == null || typeof obj !== "object") {
      throw new InvalidArgumentError("Duration.fromObject: argument expected to be an object, got " + (obj === null ? "null" : typeof obj));
    }

    return new Duration({
      values: normalizeObject(obj, Duration.normalizeUnit, ["locale", "numberingSystem", "conversionAccuracy", "zone" // a bit of debt; it's super inconvenient internally not to be able to blindly pass this
      ]),
      loc: Locale.fromObject(obj),
      conversionAccuracy: obj.conversionAccuracy
    });
  }
  /**
   * Create a Duration from an ISO 8601 duration string.
   * @param {string} text - text to parse
   * @param {Object} opts - options for parsing
   * @param {string} [opts.locale='en-US'] - the locale to use
   * @param {string} opts.numberingSystem - the numbering system to use
   * @param {string} [opts.conversionAccuracy='casual'] - the conversion system to use
   * @see https://en.wikipedia.org/wiki/ISO_8601#Durations
   * @example Duration.fromISO('P3Y6M1W4DT12H30M5S').toObject() //=> { years: 3, months: 6, weeks: 1, days: 4, hours: 12, minutes: 30, seconds: 5 }
   * @example Duration.fromISO('PT23H').toObject() //=> { hours: 23 }
   * @example Duration.fromISO('P5Y3M').toObject() //=> { years: 5, months: 3 }
   * @return {Duration}
   */
  ;

  Duration.fromISO = function fromISO(text, opts) {
    var _parseISODuration = parseISODuration(text),
        parsed = _parseISODuration[0];

    if (parsed) {
      var obj = Object.assign(parsed, opts);
      return Duration.fromObject(obj);
    } else {
      return Duration.invalid("unparsable", "the input \"" + text + "\" can't be parsed as ISO 8601");
    }
  }
  /**
   * Create a Duration from an ISO 8601 time string.
   * @param {string} text - text to parse
   * @param {Object} opts - options for parsing
   * @param {string} [opts.locale='en-US'] - the locale to use
   * @param {string} opts.numberingSystem - the numbering system to use
   * @param {string} [opts.conversionAccuracy='casual'] - the conversion system to use
   * @see https://en.wikipedia.org/wiki/ISO_8601#Times
   * @example Duration.fromISOTime('11:22:33.444').toObject() //=> { hours: 11, minutes: 22, seconds: 33, milliseconds: 444 }
   * @example Duration.fromISOTime('11:00').toObject() //=> { hours: 11, minutes: 0, seconds: 0 }
   * @example Duration.fromISOTime('T11:00').toObject() //=> { hours: 11, minutes: 0, seconds: 0 }
   * @example Duration.fromISOTime('1100').toObject() //=> { hours: 11, minutes: 0, seconds: 0 }
   * @example Duration.fromISOTime('T1100').toObject() //=> { hours: 11, minutes: 0, seconds: 0 }
   * @return {Duration}
   */
  ;

  Duration.fromISOTime = function fromISOTime(text, opts) {
    var _parseISOTimeOnly = parseISOTimeOnly(text),
        parsed = _parseISOTimeOnly[0];

    if (parsed) {
      var obj = Object.assign(parsed, opts);
      return Duration.fromObject(obj);
    } else {
      return Duration.invalid("unparsable", "the input \"" + text + "\" can't be parsed as ISO 8601");
    }
  }
  /**
   * Create an invalid Duration.
   * @param {string} reason - simple string of why this datetime is invalid. Should not contain parameters or anything else data-dependent
   * @param {string} [explanation=null] - longer explanation, may include parameters and other useful debugging information
   * @return {Duration}
   */
  ;

  Duration.invalid = function invalid(reason, explanation) {
    if (explanation === void 0) {
      explanation = null;
    }

    if (!reason) {
      throw new InvalidArgumentError("need to specify a reason the Duration is invalid");
    }

    var invalid = reason instanceof Invalid ? reason : new Invalid(reason, explanation);

    if (Settings.throwOnInvalid) {
      throw new InvalidDurationError(invalid);
    } else {
      return new Duration({
        invalid: invalid
      });
    }
  }
  /**
   * @private
   */
  ;

  Duration.normalizeUnit = function normalizeUnit(unit) {
    var normalized = {
      year: "years",
      years: "years",
      quarter: "quarters",
      quarters: "quarters",
      month: "months",
      months: "months",
      week: "weeks",
      weeks: "weeks",
      day: "days",
      days: "days",
      hour: "hours",
      hours: "hours",
      minute: "minutes",
      minutes: "minutes",
      second: "seconds",
      seconds: "seconds",
      millisecond: "milliseconds",
      milliseconds: "milliseconds"
    }[unit ? unit.toLowerCase() : unit];
    if (!normalized) throw new InvalidUnitError(unit);
    return normalized;
  }
  /**
   * Check if an object is a Duration. Works across context boundaries
   * @param {object} o
   * @return {boolean}
   */
  ;

  Duration.isDuration = function isDuration(o) {
    return o && o.isLuxonDuration || false;
  }
  /**
   * Get  the locale of a Duration, such 'en-GB'
   * @type {string}
   */
  ;

  var _proto = Duration.prototype;

  /**
   * Returns a string representation of this Duration formatted according to the specified format string. You may use these tokens:
   * * `S` for milliseconds
   * * `s` for seconds
   * * `m` for minutes
   * * `h` for hours
   * * `d` for days
   * * `M` for months
   * * `y` for years
   * Notes:
   * * Add padding by repeating the token, e.g. "yy" pads the years to two digits, "hhhh" pads the hours out to four digits
   * * The duration will be converted to the set of units in the format string using {@link Duration.shiftTo} and the Durations's conversion accuracy setting.
   * @param {string} fmt - the format string
   * @param {Object} opts - options
   * @param {boolean} [opts.floor=true] - floor numerical values
   * @example Duration.fromObject({ years: 1, days: 6, seconds: 2 }).toFormat("y d s") //=> "1 6 2"
   * @example Duration.fromObject({ years: 1, days: 6, seconds: 2 }).toFormat("yy dd sss") //=> "01 06 002"
   * @example Duration.fromObject({ years: 1, days: 6, seconds: 2 }).toFormat("M S") //=> "12 518402000"
   * @return {string}
   */
  _proto.toFormat = function toFormat(fmt, opts) {
    if (opts === void 0) {
      opts = {};
    }

    // reverse-compat since 1.2; we always round down now, never up, and we do it by default
    var fmtOpts = Object.assign({}, opts, {
      floor: opts.round !== false && opts.floor !== false
    });
    return this.isValid ? Formatter.create(this.loc, fmtOpts).formatDurationFromString(this, fmt) : INVALID;
  }
  /**
   * Returns a JavaScript object with this Duration's values.
   * @param opts - options for generating the object
   * @param {boolean} [opts.includeConfig=false] - include configuration attributes in the output
   * @example Duration.fromObject({ years: 1, days: 6, seconds: 2 }).toObject() //=> { years: 1, days: 6, seconds: 2 }
   * @return {Object}
   */
  ;

  _proto.toObject = function toObject(opts) {
    if (opts === void 0) {
      opts = {};
    }

    if (!this.isValid) return {};
    var base = Object.assign({}, this.values);

    if (opts.includeConfig) {
      base.conversionAccuracy = this.conversionAccuracy;
      base.numberingSystem = this.loc.numberingSystem;
      base.locale = this.loc.locale;
    }

    return base;
  }
  /**
   * Returns an ISO 8601-compliant string representation of this Duration.
   * @see https://en.wikipedia.org/wiki/ISO_8601#Durations
   * @example Duration.fromObject({ years: 3, seconds: 45 }).toISO() //=> 'P3YT45S'
   * @example Duration.fromObject({ months: 4, seconds: 45 }).toISO() //=> 'P4MT45S'
   * @example Duration.fromObject({ months: 5 }).toISO() //=> 'P5M'
   * @example Duration.fromObject({ minutes: 5 }).toISO() //=> 'PT5M'
   * @example Duration.fromObject({ milliseconds: 6 }).toISO() //=> 'PT0.006S'
   * @return {string}
   */
  ;

  _proto.toISO = function toISO() {
    // we could use the formatter, but this is an easier way to get the minimum string
    if (!this.isValid) return null;
    var s = "P";
    if (this.years !== 0) s += this.years + "Y";
    if (this.months !== 0 || this.quarters !== 0) s += this.months + this.quarters * 3 + "M";
    if (this.weeks !== 0) s += this.weeks + "W";
    if (this.days !== 0) s += this.days + "D";
    if (this.hours !== 0 || this.minutes !== 0 || this.seconds !== 0 || this.milliseconds !== 0) s += "T";
    if (this.hours !== 0) s += this.hours + "H";
    if (this.minutes !== 0) s += this.minutes + "M";
    if (this.seconds !== 0 || this.milliseconds !== 0) // this will handle "floating point madness" by removing extra decimal places
      // https://stackoverflow.com/questions/588004/is-floating-point-math-broken
      s += roundTo(this.seconds + this.milliseconds / 1000, 3) + "S";
    if (s === "P") s += "T0S";
    return s;
  }
  /**
   * Returns an ISO 8601-compliant string representation of this Duration, formatted as a time of day.
   * Note that this will return null if the duration is invalid, negative, or equal to or greater than 24 hours.
   * @see https://en.wikipedia.org/wiki/ISO_8601#Times
   * @param {Object} opts - options
   * @param {boolean} [opts.suppressMilliseconds=false] - exclude milliseconds from the format if they're 0
   * @param {boolean} [opts.suppressSeconds=false] - exclude seconds from the format if they're 0
   * @param {boolean} [opts.includePrefix=false] - include the `T` prefix
   * @param {string} [opts.format='extended'] - choose between the basic and extended format
   * @example Duration.fromObject({ hours: 11 }).toISOTime() //=> '11:00:00.000'
   * @example Duration.fromObject({ hours: 11 }).toISOTime({ suppressMilliseconds: true }) //=> '11:00:00'
   * @example Duration.fromObject({ hours: 11 }).toISOTime({ suppressSeconds: true }) //=> '11:00'
   * @example Duration.fromObject({ hours: 11 }).toISOTime({ includePrefix: true }) //=> 'T11:00:00.000'
   * @example Duration.fromObject({ hours: 11 }).toISOTime({ format: 'basic' }) //=> '110000.000'
   * @return {string}
   */
  ;

  _proto.toISOTime = function toISOTime(opts) {
    if (opts === void 0) {
      opts = {};
    }

    if (!this.isValid) return null;
    var millis = this.toMillis();
    if (millis < 0 || millis >= 86400000) return null;
    opts = Object.assign({
      suppressMilliseconds: false,
      suppressSeconds: false,
      includePrefix: false,
      format: "extended"
    }, opts);
    var value = this.shiftTo("hours", "minutes", "seconds", "milliseconds");
    var fmt = opts.format === "basic" ? "hhmm" : "hh:mm";

    if (!opts.suppressSeconds || value.seconds !== 0 || value.milliseconds !== 0) {
      fmt += opts.format === "basic" ? "ss" : ":ss";

      if (!opts.suppressMilliseconds || value.milliseconds !== 0) {
        fmt += ".SSS";
      }
    }

    var str = value.toFormat(fmt);

    if (opts.includePrefix) {
      str = "T" + str;
    }

    return str;
  }
  /**
   * Returns an ISO 8601 representation of this Duration appropriate for use in JSON.
   * @return {string}
   */
  ;

  _proto.toJSON = function toJSON() {
    return this.toISO();
  }
  /**
   * Returns an ISO 8601 representation of this Duration appropriate for use in debugging.
   * @return {string}
   */
  ;

  _proto.toString = function toString() {
    return this.toISO();
  }
  /**
   * Returns an milliseconds value of this Duration.
   * @return {number}
   */
  ;

  _proto.toMillis = function toMillis() {
    return this.as("milliseconds");
  }
  /**
   * Returns an milliseconds value of this Duration. Alias of {@link toMillis}
   * @return {number}
   */
  ;

  _proto.valueOf = function valueOf() {
    return this.toMillis();
  }
  /**
   * Make this Duration longer by the specified amount. Return a newly-constructed Duration.
   * @param {Duration|Object|number} duration - The amount to add. Either a Luxon Duration, a number of milliseconds, the object argument to Duration.fromObject()
   * @return {Duration}
   */
  ;

  _proto.plus = function plus(duration) {
    if (!this.isValid) return this;
    var dur = friendlyDuration(duration),
        result = {};

    for (var _iterator = _createForOfIteratorHelperLoose(orderedUnits), _step; !(_step = _iterator()).done;) {
      var k = _step.value;

      if (hasOwnProperty(dur.values, k) || hasOwnProperty(this.values, k)) {
        result[k] = dur.get(k) + this.get(k);
      }
    }

    return clone(this, {
      values: result
    }, true);
  }
  /**
   * Make this Duration shorter by the specified amount. Return a newly-constructed Duration.
   * @param {Duration|Object|number} duration - The amount to subtract. Either a Luxon Duration, a number of milliseconds, the object argument to Duration.fromObject()
   * @return {Duration}
   */
  ;

  _proto.minus = function minus(duration) {
    if (!this.isValid) return this;
    var dur = friendlyDuration(duration);
    return this.plus(dur.negate());
  }
  /**
   * Scale this Duration by the specified amount. Return a newly-constructed Duration.
   * @param {function} fn - The function to apply to each unit. Arity is 1 or 2: the value of the unit and, optionally, the unit name. Must return a number.
   * @example Duration.fromObject({ hours: 1, minutes: 30 }).mapUnit(x => x * 2) //=> { hours: 2, minutes: 60 }
   * @example Duration.fromObject({ hours: 1, minutes: 30 }).mapUnit((x, u) => u === "hour" ? x * 2 : x) //=> { hours: 2, minutes: 30 }
   * @return {Duration}
   */
  ;

  _proto.mapUnits = function mapUnits(fn) {
    if (!this.isValid) return this;
    var result = {};

    for (var _i = 0, _Object$keys = Object.keys(this.values); _i < _Object$keys.length; _i++) {
      var k = _Object$keys[_i];
      result[k] = asNumber(fn(this.values[k], k));
    }

    return clone(this, {
      values: result
    }, true);
  }
  /**
   * Get the value of unit.
   * @param {string} unit - a unit such as 'minute' or 'day'
   * @example Duration.fromObject({years: 2, days: 3}).get('years') //=> 2
   * @example Duration.fromObject({years: 2, days: 3}).get('months') //=> 0
   * @example Duration.fromObject({years: 2, days: 3}).get('days') //=> 3
   * @return {number}
   */
  ;

  _proto.get = function get(unit) {
    return this[Duration.normalizeUnit(unit)];
  }
  /**
   * "Set" the values of specified units. Return a newly-constructed Duration.
   * @param {Object} values - a mapping of units to numbers
   * @example dur.set({ years: 2017 })
   * @example dur.set({ hours: 8, minutes: 30 })
   * @return {Duration}
   */
  ;

  _proto.set = function set(values) {
    if (!this.isValid) return this;
    var mixed = Object.assign(this.values, normalizeObject(values, Duration.normalizeUnit, []));
    return clone(this, {
      values: mixed
    });
  }
  /**
   * "Set" the locale and/or numberingSystem.  Returns a newly-constructed Duration.
   * @example dur.reconfigure({ locale: 'en-GB' })
   * @return {Duration}
   */
  ;

  _proto.reconfigure = function reconfigure(_temp) {
    var _ref = _temp === void 0 ? {} : _temp,
        locale = _ref.locale,
        numberingSystem = _ref.numberingSystem,
        conversionAccuracy = _ref.conversionAccuracy;

    var loc = this.loc.clone({
      locale: locale,
      numberingSystem: numberingSystem
    }),
        opts = {
      loc: loc
    };

    if (conversionAccuracy) {
      opts.conversionAccuracy = conversionAccuracy;
    }

    return clone(this, opts);
  }
  /**
   * Return the length of the duration in the specified unit.
   * @param {string} unit - a unit such as 'minutes' or 'days'
   * @example Duration.fromObject({years: 1}).as('days') //=> 365
   * @example Duration.fromObject({years: 1}).as('months') //=> 12
   * @example Duration.fromObject({hours: 60}).as('days') //=> 2.5
   * @return {number}
   */
  ;

  _proto.as = function as(unit) {
    return this.isValid ? this.shiftTo(unit).get(unit) : NaN;
  }
  /**
   * Reduce this Duration to its canonical representation in its current units.
   * @example Duration.fromObject({ years: 2, days: 5000 }).normalize().toObject() //=> { years: 15, days: 255 }
   * @example Duration.fromObject({ hours: 12, minutes: -45 }).normalize().toObject() //=> { hours: 11, minutes: 15 }
   * @return {Duration}
   */
  ;

  _proto.normalize = function normalize() {
    if (!this.isValid) return this;
    var vals = this.toObject();
    normalizeValues(this.matrix, vals);
    return clone(this, {
      values: vals
    }, true);
  }
  /**
   * Convert this Duration into its representation in a different set of units.
   * @example Duration.fromObject({ hours: 1, seconds: 30 }).shiftTo('minutes', 'milliseconds').toObject() //=> { minutes: 60, milliseconds: 30000 }
   * @return {Duration}
   */
  ;

  _proto.shiftTo = function shiftTo() {
    for (var _len = arguments.length, units = new Array(_len), _key = 0; _key < _len; _key++) {
      units[_key] = arguments[_key];
    }

    if (!this.isValid) return this;

    if (units.length === 0) {
      return this;
    }

    units = units.map(function (u) {
      return Duration.normalizeUnit(u);
    });
    var built = {},
        accumulated = {},
        vals = this.toObject();
    var lastUnit;

    for (var _iterator2 = _createForOfIteratorHelperLoose(orderedUnits), _step2; !(_step2 = _iterator2()).done;) {
      var k = _step2.value;

      if (units.indexOf(k) >= 0) {
        lastUnit = k;
        var own = 0; // anything we haven't boiled down yet should get boiled to this unit

        for (var ak in accumulated) {
          own += this.matrix[ak][k] * accumulated[ak];
          accumulated[ak] = 0;
        } // plus anything that's already in this unit


        if (isNumber(vals[k])) {
          own += vals[k];
        }

        var i = Math.trunc(own);
        built[k] = i;
        accumulated[k] = own - i; // we'd like to absorb these fractions in another unit
        // plus anything further down the chain that should be rolled up in to this

        for (var down in vals) {
          if (orderedUnits.indexOf(down) > orderedUnits.indexOf(k)) {
            convert(this.matrix, vals, down, built, k);
          }
        } // otherwise, keep it in the wings to boil it later

      } else if (isNumber(vals[k])) {
        accumulated[k] = vals[k];
      }
    } // anything leftover becomes the decimal for the last unit
    // lastUnit must be defined since units is not empty


    for (var key in accumulated) {
      if (accumulated[key] !== 0) {
        built[lastUnit] += key === lastUnit ? accumulated[key] : accumulated[key] / this.matrix[lastUnit][key];
      }
    }

    return clone(this, {
      values: built
    }, true).normalize();
  }
  /**
   * Return the negative of this Duration.
   * @example Duration.fromObject({ hours: 1, seconds: 30 }).negate().toObject() //=> { hours: -1, seconds: -30 }
   * @return {Duration}
   */
  ;

  _proto.negate = function negate() {
    if (!this.isValid) return this;
    var negated = {};

    for (var _i2 = 0, _Object$keys2 = Object.keys(this.values); _i2 < _Object$keys2.length; _i2++) {
      var k = _Object$keys2[_i2];
      negated[k] = -this.values[k];
    }

    return clone(this, {
      values: negated
    }, true);
  }
  /**
   * Get the years.
   * @type {number}
   */
  ;

  /**
   * Equality check
   * Two Durations are equal iff they have the same units and the same values for each unit.
   * @param {Duration} other
   * @return {boolean}
   */
  _proto.equals = function equals(other) {
    if (!this.isValid || !other.isValid) {
      return false;
    }

    if (!this.loc.equals(other.loc)) {
      return false;
    }

    function eq(v1, v2) {
      // Consider 0 and undefined as equal
      if (v1 === undefined || v1 === 0) return v2 === undefined || v2 === 0;
      return v1 === v2;
    }

    for (var _iterator3 = _createForOfIteratorHelperLoose(orderedUnits), _step3; !(_step3 = _iterator3()).done;) {
      var u = _step3.value;

      if (!eq(this.values[u], other.values[u])) {
        return false;
      }
    }

    return true;
  };

  _createClass(Duration, [{
    key: "locale",
    get: function get() {
      return this.isValid ? this.loc.locale : null;
    }
    /**
     * Get the numbering system of a Duration, such 'beng'. The numbering system is used when formatting the Duration
     *
     * @type {string}
     */

  }, {
    key: "numberingSystem",
    get: function get() {
      return this.isValid ? this.loc.numberingSystem : null;
    }
  }, {
    key: "years",
    get: function get() {
      return this.isValid ? this.values.years || 0 : NaN;
    }
    /**
     * Get the quarters.
     * @type {number}
     */

  }, {
    key: "quarters",
    get: function get() {
      return this.isValid ? this.values.quarters || 0 : NaN;
    }
    /**
     * Get the months.
     * @type {number}
     */

  }, {
    key: "months",
    get: function get() {
      return this.isValid ? this.values.months || 0 : NaN;
    }
    /**
     * Get the weeks
     * @type {number}
     */

  }, {
    key: "weeks",
    get: function get() {
      return this.isValid ? this.values.weeks || 0 : NaN;
    }
    /**
     * Get the days.
     * @type {number}
     */

  }, {
    key: "days",
    get: function get() {
      return this.isValid ? this.values.days || 0 : NaN;
    }
    /**
     * Get the hours.
     * @type {number}
     */

  }, {
    key: "hours",
    get: function get() {
      return this.isValid ? this.values.hours || 0 : NaN;
    }
    /**
     * Get the minutes.
     * @type {number}
     */

  }, {
    key: "minutes",
    get: function get() {
      return this.isValid ? this.values.minutes || 0 : NaN;
    }
    /**
     * Get the seconds.
     * @return {number}
     */

  }, {
    key: "seconds",
    get: function get() {
      return this.isValid ? this.values.seconds || 0 : NaN;
    }
    /**
     * Get the milliseconds.
     * @return {number}
     */

  }, {
    key: "milliseconds",
    get: function get() {
      return this.isValid ? this.values.milliseconds || 0 : NaN;
    }
    /**
     * Returns whether the Duration is invalid. Invalid durations are returned by diff operations
     * on invalid DateTimes or Intervals.
     * @return {boolean}
     */

  }, {
    key: "isValid",
    get: function get() {
      return this.invalid === null;
    }
    /**
     * Returns an error code if this Duration became invalid, or null if the Duration is valid
     * @return {string}
     */

  }, {
    key: "invalidReason",
    get: function get() {
      return this.invalid ? this.invalid.reason : null;
    }
    /**
     * Returns an explanation of why this Duration became invalid, or null if the Duration is valid
     * @type {string}
     */

  }, {
    key: "invalidExplanation",
    get: function get() {
      return this.invalid ? this.invalid.explanation : null;
    }
  }]);

  return Duration;
}();
function friendlyDuration(durationish) {
  if (isNumber(durationish)) {
    return Duration.fromMillis(durationish);
  } else if (Duration.isDuration(durationish)) {
    return durationish;
  } else if (typeof durationish === "object") {
    return Duration.fromObject(durationish);
  } else {
    throw new InvalidArgumentError("Unknown duration argument " + durationish + " of type " + typeof durationish);
  }
}

var INVALID$1 = "Invalid Interval"; // checks if the start is equal to or before the end

function validateStartEnd(start, end) {
  if (!start || !start.isValid) {
    return Interval.invalid("missing or invalid start");
  } else if (!end || !end.isValid) {
    return Interval.invalid("missing or invalid end");
  } else if (end < start) {
    return Interval.invalid("end before start", "The end of an interval must be after its start, but you had start=" + start.toISO() + " and end=" + end.toISO());
  } else {
    return null;
  }
}
/**
 * An Interval object represents a half-open interval of time, where each endpoint is a {@link DateTime}. Conceptually, it's a container for those two endpoints, accompanied by methods for creating, parsing, interrogating, comparing, transforming, and formatting them.
 *
 * Here is a brief overview of the most commonly used methods and getters in Interval:
 *
 * * **Creation** To create an Interval, use {@link fromDateTimes}, {@link after}, {@link before}, or {@link fromISO}.
 * * **Accessors** Use {@link start} and {@link end} to get the start and end.
 * * **Interrogation** To analyze the Interval, use {@link count}, {@link length}, {@link hasSame}, {@link contains}, {@link isAfter}, or {@link isBefore}.
 * * **Transformation** To create other Intervals out of this one, use {@link set}, {@link splitAt}, {@link splitBy}, {@link divideEqually}, {@link merge}, {@link xor}, {@link union}, {@link intersection}, or {@link difference}.
 * * **Comparison** To compare this Interval to another one, use {@link equals}, {@link overlaps}, {@link abutsStart}, {@link abutsEnd}, {@link engulfs}.
 * * **Output** To convert the Interval into other representations, see {@link toString}, {@link toISO}, {@link toISODate}, {@link toISOTime}, {@link toFormat}, and {@link toDuration}.
 */


var Interval = /*#__PURE__*/function () {
  /**
   * @private
   */
  function Interval(config) {
    /**
     * @access private
     */
    this.s = config.start;
    /**
     * @access private
     */

    this.e = config.end;
    /**
     * @access private
     */

    this.invalid = config.invalid || null;
    /**
     * @access private
     */

    this.isLuxonInterval = true;
  }
  /**
   * Create an invalid Interval.
   * @param {string} reason - simple string of why this Interval is invalid. Should not contain parameters or anything else data-dependent
   * @param {string} [explanation=null] - longer explanation, may include parameters and other useful debugging information
   * @return {Interval}
   */


  Interval.invalid = function invalid(reason, explanation) {
    if (explanation === void 0) {
      explanation = null;
    }

    if (!reason) {
      throw new InvalidArgumentError("need to specify a reason the Interval is invalid");
    }

    var invalid = reason instanceof Invalid ? reason : new Invalid(reason, explanation);

    if (Settings.throwOnInvalid) {
      throw new InvalidIntervalError(invalid);
    } else {
      return new Interval({
        invalid: invalid
      });
    }
  }
  /**
   * Create an Interval from a start DateTime and an end DateTime. Inclusive of the start but not the end.
   * @param {DateTime|Date|Object} start
   * @param {DateTime|Date|Object} end
   * @return {Interval}
   */
  ;

  Interval.fromDateTimes = function fromDateTimes(start, end) {
    var builtStart = friendlyDateTime(start),
        builtEnd = friendlyDateTime(end);
    var validateError = validateStartEnd(builtStart, builtEnd);

    if (validateError == null) {
      return new Interval({
        start: builtStart,
        end: builtEnd
      });
    } else {
      return validateError;
    }
  }
  /**
   * Create an Interval from a start DateTime and a Duration to extend to.
   * @param {DateTime|Date|Object} start
   * @param {Duration|Object|number} duration - the length of the Interval.
   * @return {Interval}
   */
  ;

  Interval.after = function after(start, duration) {
    var dur = friendlyDuration(duration),
        dt = friendlyDateTime(start);
    return Interval.fromDateTimes(dt, dt.plus(dur));
  }
  /**
   * Create an Interval from an end DateTime and a Duration to extend backwards to.
   * @param {DateTime|Date|Object} end
   * @param {Duration|Object|number} duration - the length of the Interval.
   * @return {Interval}
   */
  ;

  Interval.before = function before(end, duration) {
    var dur = friendlyDuration(duration),
        dt = friendlyDateTime(end);
    return Interval.fromDateTimes(dt.minus(dur), dt);
  }
  /**
   * Create an Interval from an ISO 8601 string.
   * Accepts `<start>/<end>`, `<start>/<duration>`, and `<duration>/<end>` formats.
   * @param {string} text - the ISO string to parse
   * @param {Object} [opts] - options to pass {@link DateTime.fromISO} and optionally {@link Duration.fromISO}
   * @see https://en.wikipedia.org/wiki/ISO_8601#Time_intervals
   * @return {Interval}
   */
  ;

  Interval.fromISO = function fromISO(text, opts) {
    var _split = (text || "").split("/", 2),
        s = _split[0],
        e = _split[1];

    if (s && e) {
      var start, startIsValid;

      try {
        start = DateTime.fromISO(s, opts);
        startIsValid = start.isValid;
      } catch (e) {
        startIsValid = false;
      }

      var end, endIsValid;

      try {
        end = DateTime.fromISO(e, opts);
        endIsValid = end.isValid;
      } catch (e) {
        endIsValid = false;
      }

      if (startIsValid && endIsValid) {
        return Interval.fromDateTimes(start, end);
      }

      if (startIsValid) {
        var dur = Duration.fromISO(e, opts);

        if (dur.isValid) {
          return Interval.after(start, dur);
        }
      } else if (endIsValid) {
        var _dur = Duration.fromISO(s, opts);

        if (_dur.isValid) {
          return Interval.before(end, _dur);
        }
      }
    }

    return Interval.invalid("unparsable", "the input \"" + text + "\" can't be parsed as ISO 8601");
  }
  /**
   * Check if an object is an Interval. Works across context boundaries
   * @param {object} o
   * @return {boolean}
   */
  ;

  Interval.isInterval = function isInterval(o) {
    return o && o.isLuxonInterval || false;
  }
  /**
   * Returns the start of the Interval
   * @type {DateTime}
   */
  ;

  var _proto = Interval.prototype;

  /**
   * Returns the length of the Interval in the specified unit.
   * @param {string} unit - the unit (such as 'hours' or 'days') to return the length in.
   * @return {number}
   */
  _proto.length = function length(unit) {
    if (unit === void 0) {
      unit = "milliseconds";
    }

    return this.isValid ? this.toDuration.apply(this, [unit]).get(unit) : NaN;
  }
  /**
   * Returns the count of minutes, hours, days, months, or years included in the Interval, even in part.
   * Unlike {@link length} this counts sections of the calendar, not periods of time, e.g. specifying 'day'
   * asks 'what dates are included in this interval?', not 'how many days long is this interval?'
   * @param {string} [unit='milliseconds'] - the unit of time to count.
   * @return {number}
   */
  ;

  _proto.count = function count(unit) {
    if (unit === void 0) {
      unit = "milliseconds";
    }

    if (!this.isValid) return NaN;
    var start = this.start.startOf(unit),
        end = this.end.startOf(unit);
    return Math.floor(end.diff(start, unit).get(unit)) + 1;
  }
  /**
   * Returns whether this Interval's start and end are both in the same unit of time
   * @param {string} unit - the unit of time to check sameness on
   * @return {boolean}
   */
  ;

  _proto.hasSame = function hasSame(unit) {
    return this.isValid ? this.isEmpty() || this.e.minus(1).hasSame(this.s, unit) : false;
  }
  /**
   * Return whether this Interval has the same start and end DateTimes.
   * @return {boolean}
   */
  ;

  _proto.isEmpty = function isEmpty() {
    return this.s.valueOf() === this.e.valueOf();
  }
  /**
   * Return whether this Interval's start is after the specified DateTime.
   * @param {DateTime} dateTime
   * @return {boolean}
   */
  ;

  _proto.isAfter = function isAfter(dateTime) {
    if (!this.isValid) return false;
    return this.s > dateTime;
  }
  /**
   * Return whether this Interval's end is before the specified DateTime.
   * @param {DateTime} dateTime
   * @return {boolean}
   */
  ;

  _proto.isBefore = function isBefore(dateTime) {
    if (!this.isValid) return false;
    return this.e <= dateTime;
  }
  /**
   * Return whether this Interval contains the specified DateTime.
   * @param {DateTime} dateTime
   * @return {boolean}
   */
  ;

  _proto.contains = function contains(dateTime) {
    if (!this.isValid) return false;
    return this.s <= dateTime && this.e > dateTime;
  }
  /**
   * "Sets" the start and/or end dates. Returns a newly-constructed Interval.
   * @param {Object} values - the values to set
   * @param {DateTime} values.start - the starting DateTime
   * @param {DateTime} values.end - the ending DateTime
   * @return {Interval}
   */
  ;

  _proto.set = function set(_temp) {
    var _ref = _temp === void 0 ? {} : _temp,
        start = _ref.start,
        end = _ref.end;

    if (!this.isValid) return this;
    return Interval.fromDateTimes(start || this.s, end || this.e);
  }
  /**
   * Split this Interval at each of the specified DateTimes
   * @param {...[DateTime]} dateTimes - the unit of time to count.
   * @return {[Interval]}
   */
  ;

  _proto.splitAt = function splitAt() {
    var _this = this;

    if (!this.isValid) return [];

    for (var _len = arguments.length, dateTimes = new Array(_len), _key = 0; _key < _len; _key++) {
      dateTimes[_key] = arguments[_key];
    }

    var sorted = dateTimes.map(friendlyDateTime).filter(function (d) {
      return _this.contains(d);
    }).sort(),
        results = [];
    var s = this.s,
        i = 0;

    while (s < this.e) {
      var added = sorted[i] || this.e,
          next = +added > +this.e ? this.e : added;
      results.push(Interval.fromDateTimes(s, next));
      s = next;
      i += 1;
    }

    return results;
  }
  /**
   * Split this Interval into smaller Intervals, each of the specified length.
   * Left over time is grouped into a smaller interval
   * @param {Duration|Object|number} duration - The length of each resulting interval.
   * @return {[Interval]}
   */
  ;

  _proto.splitBy = function splitBy(duration) {
    var dur = friendlyDuration(duration);

    if (!this.isValid || !dur.isValid || dur.as("milliseconds") === 0) {
      return [];
    }

    var s = this.s,
        idx = 1,
        next;
    var results = [];

    while (s < this.e) {
      var added = this.start.plus(dur.mapUnits(function (x) {
        return x * idx;
      }));
      next = +added > +this.e ? this.e : added;
      results.push(Interval.fromDateTimes(s, next));
      s = next;
      idx += 1;
    }

    return results;
  }
  /**
   * Split this Interval into the specified number of smaller intervals.
   * @param {number} numberOfParts - The number of Intervals to divide the Interval into.
   * @return {[Interval]}
   */
  ;

  _proto.divideEqually = function divideEqually(numberOfParts) {
    if (!this.isValid) return [];
    return this.splitBy(this.length() / numberOfParts).slice(0, numberOfParts);
  }
  /**
   * Return whether this Interval overlaps with the specified Interval
   * @param {Interval} other
   * @return {boolean}
   */
  ;

  _proto.overlaps = function overlaps(other) {
    return this.e > other.s && this.s < other.e;
  }
  /**
   * Return whether this Interval's end is adjacent to the specified Interval's start.
   * @param {Interval} other
   * @return {boolean}
   */
  ;

  _proto.abutsStart = function abutsStart(other) {
    if (!this.isValid) return false;
    return +this.e === +other.s;
  }
  /**
   * Return whether this Interval's start is adjacent to the specified Interval's end.
   * @param {Interval} other
   * @return {boolean}
   */
  ;

  _proto.abutsEnd = function abutsEnd(other) {
    if (!this.isValid) return false;
    return +other.e === +this.s;
  }
  /**
   * Return whether this Interval engulfs the start and end of the specified Interval.
   * @param {Interval} other
   * @return {boolean}
   */
  ;

  _proto.engulfs = function engulfs(other) {
    if (!this.isValid) return false;
    return this.s <= other.s && this.e >= other.e;
  }
  /**
   * Return whether this Interval has the same start and end as the specified Interval.
   * @param {Interval} other
   * @return {boolean}
   */
  ;

  _proto.equals = function equals(other) {
    if (!this.isValid || !other.isValid) {
      return false;
    }

    return this.s.equals(other.s) && this.e.equals(other.e);
  }
  /**
   * Return an Interval representing the intersection of this Interval and the specified Interval.
   * Specifically, the resulting Interval has the maximum start time and the minimum end time of the two Intervals.
   * Returns null if the intersection is empty, meaning, the intervals don't intersect.
   * @param {Interval} other
   * @return {Interval}
   */
  ;

  _proto.intersection = function intersection(other) {
    if (!this.isValid) return this;
    var s = this.s > other.s ? this.s : other.s,
        e = this.e < other.e ? this.e : other.e;

    if (s >= e) {
      return null;
    } else {
      return Interval.fromDateTimes(s, e);
    }
  }
  /**
   * Return an Interval representing the union of this Interval and the specified Interval.
   * Specifically, the resulting Interval has the minimum start time and the maximum end time of the two Intervals.
   * @param {Interval} other
   * @return {Interval}
   */
  ;

  _proto.union = function union(other) {
    if (!this.isValid) return this;
    var s = this.s < other.s ? this.s : other.s,
        e = this.e > other.e ? this.e : other.e;
    return Interval.fromDateTimes(s, e);
  }
  /**
   * Merge an array of Intervals into a equivalent minimal set of Intervals.
   * Combines overlapping and adjacent Intervals.
   * @param {[Interval]} intervals
   * @return {[Interval]}
   */
  ;

  Interval.merge = function merge(intervals) {
    var _intervals$sort$reduc = intervals.sort(function (a, b) {
      return a.s - b.s;
    }).reduce(function (_ref2, item) {
      var sofar = _ref2[0],
          current = _ref2[1];

      if (!current) {
        return [sofar, item];
      } else if (current.overlaps(item) || current.abutsStart(item)) {
        return [sofar, current.union(item)];
      } else {
        return [sofar.concat([current]), item];
      }
    }, [[], null]),
        found = _intervals$sort$reduc[0],
        final = _intervals$sort$reduc[1];

    if (final) {
      found.push(final);
    }

    return found;
  }
  /**
   * Return an array of Intervals representing the spans of time that only appear in one of the specified Intervals.
   * @param {[Interval]} intervals
   * @return {[Interval]}
   */
  ;

  Interval.xor = function xor(intervals) {
    var _Array$prototype;

    var start = null,
        currentCount = 0;

    var results = [],
        ends = intervals.map(function (i) {
      return [{
        time: i.s,
        type: "s"
      }, {
        time: i.e,
        type: "e"
      }];
    }),
        flattened = (_Array$prototype = Array.prototype).concat.apply(_Array$prototype, ends),
        arr = flattened.sort(function (a, b) {
      return a.time - b.time;
    });

    for (var _iterator = _createForOfIteratorHelperLoose(arr), _step; !(_step = _iterator()).done;) {
      var i = _step.value;
      currentCount += i.type === "s" ? 1 : -1;

      if (currentCount === 1) {
        start = i.time;
      } else {
        if (start && +start !== +i.time) {
          results.push(Interval.fromDateTimes(start, i.time));
        }

        start = null;
      }
    }

    return Interval.merge(results);
  }
  /**
   * Return an Interval representing the span of time in this Interval that doesn't overlap with any of the specified Intervals.
   * @param {...Interval} intervals
   * @return {[Interval]}
   */
  ;

  _proto.difference = function difference() {
    var _this2 = this;

    for (var _len2 = arguments.length, intervals = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      intervals[_key2] = arguments[_key2];
    }

    return Interval.xor([this].concat(intervals)).map(function (i) {
      return _this2.intersection(i);
    }).filter(function (i) {
      return i && !i.isEmpty();
    });
  }
  /**
   * Returns a string representation of this Interval appropriate for debugging.
   * @return {string}
   */
  ;

  _proto.toString = function toString() {
    if (!this.isValid) return INVALID$1;
    return "[" + this.s.toISO() + " \u2013 " + this.e.toISO() + ")";
  }
  /**
   * Returns an ISO 8601-compliant string representation of this Interval.
   * @see https://en.wikipedia.org/wiki/ISO_8601#Time_intervals
   * @param {Object} opts - The same options as {@link DateTime.toISO}
   * @return {string}
   */
  ;

  _proto.toISO = function toISO(opts) {
    if (!this.isValid) return INVALID$1;
    return this.s.toISO(opts) + "/" + this.e.toISO(opts);
  }
  /**
   * Returns an ISO 8601-compliant string representation of date of this Interval.
   * The time components are ignored.
   * @see https://en.wikipedia.org/wiki/ISO_8601#Time_intervals
   * @return {string}
   */
  ;

  _proto.toISODate = function toISODate() {
    if (!this.isValid) return INVALID$1;
    return this.s.toISODate() + "/" + this.e.toISODate();
  }
  /**
   * Returns an ISO 8601-compliant string representation of time of this Interval.
   * The date components are ignored.
   * @see https://en.wikipedia.org/wiki/ISO_8601#Time_intervals
   * @param {Object} opts - The same options as {@link DateTime.toISO}
   * @return {string}
   */
  ;

  _proto.toISOTime = function toISOTime(opts) {
    if (!this.isValid) return INVALID$1;
    return this.s.toISOTime(opts) + "/" + this.e.toISOTime(opts);
  }
  /**
   * Returns a string representation of this Interval formatted according to the specified format string.
   * @param {string} dateFormat - the format string. This string formats the start and end time. See {@link DateTime.toFormat} for details.
   * @param {Object} opts - options
   * @param {string} [opts.separator =  ' – '] - a separator to place between the start and end representations
   * @return {string}
   */
  ;

  _proto.toFormat = function toFormat(dateFormat, _temp2) {
    var _ref3 = _temp2 === void 0 ? {} : _temp2,
        _ref3$separator = _ref3.separator,
        separator = _ref3$separator === void 0 ? " – " : _ref3$separator;

    if (!this.isValid) return INVALID$1;
    return "" + this.s.toFormat(dateFormat) + separator + this.e.toFormat(dateFormat);
  }
  /**
   * Return a Duration representing the time spanned by this interval.
   * @param {string|string[]} [unit=['milliseconds']] - the unit or units (such as 'hours' or 'days') to include in the duration.
   * @param {Object} opts - options that affect the creation of the Duration
   * @param {string} [opts.conversionAccuracy='casual'] - the conversion system to use
   * @example Interval.fromDateTimes(dt1, dt2).toDuration().toObject() //=> { milliseconds: 88489257 }
   * @example Interval.fromDateTimes(dt1, dt2).toDuration('days').toObject() //=> { days: 1.0241812152777778 }
   * @example Interval.fromDateTimes(dt1, dt2).toDuration(['hours', 'minutes']).toObject() //=> { hours: 24, minutes: 34.82095 }
   * @example Interval.fromDateTimes(dt1, dt2).toDuration(['hours', 'minutes', 'seconds']).toObject() //=> { hours: 24, minutes: 34, seconds: 49.257 }
   * @example Interval.fromDateTimes(dt1, dt2).toDuration('seconds').toObject() //=> { seconds: 88489.257 }
   * @return {Duration}
   */
  ;

  _proto.toDuration = function toDuration(unit, opts) {
    if (!this.isValid) {
      return Duration.invalid(this.invalidReason);
    }

    return this.e.diff(this.s, unit, opts);
  }
  /**
   * Run mapFn on the interval start and end, returning a new Interval from the resulting DateTimes
   * @param {function} mapFn
   * @return {Interval}
   * @example Interval.fromDateTimes(dt1, dt2).mapEndpoints(endpoint => endpoint.toUTC())
   * @example Interval.fromDateTimes(dt1, dt2).mapEndpoints(endpoint => endpoint.plus({ hours: 2 }))
   */
  ;

  _proto.mapEndpoints = function mapEndpoints(mapFn) {
    return Interval.fromDateTimes(mapFn(this.s), mapFn(this.e));
  };

  _createClass(Interval, [{
    key: "start",
    get: function get() {
      return this.isValid ? this.s : null;
    }
    /**
     * Returns the end of the Interval
     * @type {DateTime}
     */

  }, {
    key: "end",
    get: function get() {
      return this.isValid ? this.e : null;
    }
    /**
     * Returns whether this Interval's end is at least its start, meaning that the Interval isn't 'backwards'.
     * @type {boolean}
     */

  }, {
    key: "isValid",
    get: function get() {
      return this.invalidReason === null;
    }
    /**
     * Returns an error code if this Interval is invalid, or null if the Interval is valid
     * @type {string}
     */

  }, {
    key: "invalidReason",
    get: function get() {
      return this.invalid ? this.invalid.reason : null;
    }
    /**
     * Returns an explanation of why this Interval became invalid, or null if the Interval is valid
     * @type {string}
     */

  }, {
    key: "invalidExplanation",
    get: function get() {
      return this.invalid ? this.invalid.explanation : null;
    }
  }]);

  return Interval;
}();

/**
 * The Info class contains static methods for retrieving general time and date related data. For example, it has methods for finding out if a time zone has a DST, for listing the months in any supported locale, and for discovering which of Luxon features are available in the current environment.
 */

var Info = /*#__PURE__*/function () {
  function Info() {}

  /**
   * Return whether the specified zone contains a DST.
   * @param {string|Zone} [zone='local'] - Zone to check. Defaults to the environment's local zone.
   * @return {boolean}
   */
  Info.hasDST = function hasDST(zone) {
    if (zone === void 0) {
      zone = Settings.defaultZone;
    }

    var proto = DateTime.now().setZone(zone).set({
      month: 12
    });
    return !zone.universal && proto.offset !== proto.set({
      month: 6
    }).offset;
  }
  /**
   * Return whether the specified zone is a valid IANA specifier.
   * @param {string} zone - Zone to check
   * @return {boolean}
   */
  ;

  Info.isValidIANAZone = function isValidIANAZone(zone) {
    return IANAZone.isValidSpecifier(zone) && IANAZone.isValidZone(zone);
  }
  /**
   * Converts the input into a {@link Zone} instance.
   *
   * * If `input` is already a Zone instance, it is returned unchanged.
   * * If `input` is a string containing a valid time zone name, a Zone instance
   *   with that name is returned.
   * * If `input` is a string that doesn't refer to a known time zone, a Zone
   *   instance with {@link Zone.isValid} == false is returned.
   * * If `input is a number, a Zone instance with the specified fixed offset
   *   in minutes is returned.
   * * If `input` is `null` or `undefined`, the default zone is returned.
   * @param {string|Zone|number} [input] - the value to be converted
   * @return {Zone}
   */
  ;

  Info.normalizeZone = function normalizeZone$1(input) {
    return normalizeZone(input, Settings.defaultZone);
  }
  /**
   * Return an array of standalone month names.
   * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DateTimeFormat
   * @param {string} [length='long'] - the length of the month representation, such as "numeric", "2-digit", "narrow", "short", "long"
   * @param {Object} opts - options
   * @param {string} [opts.locale] - the locale code
   * @param {string} [opts.numberingSystem=null] - the numbering system
   * @param {string} [opts.locObj=null] - an existing locale object to use
   * @param {string} [opts.outputCalendar='gregory'] - the calendar
   * @example Info.months()[0] //=> 'January'
   * @example Info.months('short')[0] //=> 'Jan'
   * @example Info.months('numeric')[0] //=> '1'
   * @example Info.months('short', { locale: 'fr-CA' } )[0] //=> 'janv.'
   * @example Info.months('numeric', { locale: 'ar' })[0] //=> '١'
   * @example Info.months('long', { outputCalendar: 'islamic' })[0] //=> 'Rabiʻ I'
   * @return {[string]}
   */
  ;

  Info.months = function months(length, _temp) {
    if (length === void 0) {
      length = "long";
    }

    var _ref = _temp === void 0 ? {} : _temp,
        _ref$locale = _ref.locale,
        locale = _ref$locale === void 0 ? null : _ref$locale,
        _ref$numberingSystem = _ref.numberingSystem,
        numberingSystem = _ref$numberingSystem === void 0 ? null : _ref$numberingSystem,
        _ref$locObj = _ref.locObj,
        locObj = _ref$locObj === void 0 ? null : _ref$locObj,
        _ref$outputCalendar = _ref.outputCalendar,
        outputCalendar = _ref$outputCalendar === void 0 ? "gregory" : _ref$outputCalendar;

    return (locObj || Locale.create(locale, numberingSystem, outputCalendar)).months(length);
  }
  /**
   * Return an array of format month names.
   * Format months differ from standalone months in that they're meant to appear next to the day of the month. In some languages, that
   * changes the string.
   * See {@link months}
   * @param {string} [length='long'] - the length of the month representation, such as "numeric", "2-digit", "narrow", "short", "long"
   * @param {Object} opts - options
   * @param {string} [opts.locale] - the locale code
   * @param {string} [opts.numberingSystem=null] - the numbering system
   * @param {string} [opts.locObj=null] - an existing locale object to use
   * @param {string} [opts.outputCalendar='gregory'] - the calendar
   * @return {[string]}
   */
  ;

  Info.monthsFormat = function monthsFormat(length, _temp2) {
    if (length === void 0) {
      length = "long";
    }

    var _ref2 = _temp2 === void 0 ? {} : _temp2,
        _ref2$locale = _ref2.locale,
        locale = _ref2$locale === void 0 ? null : _ref2$locale,
        _ref2$numberingSystem = _ref2.numberingSystem,
        numberingSystem = _ref2$numberingSystem === void 0 ? null : _ref2$numberingSystem,
        _ref2$locObj = _ref2.locObj,
        locObj = _ref2$locObj === void 0 ? null : _ref2$locObj,
        _ref2$outputCalendar = _ref2.outputCalendar,
        outputCalendar = _ref2$outputCalendar === void 0 ? "gregory" : _ref2$outputCalendar;

    return (locObj || Locale.create(locale, numberingSystem, outputCalendar)).months(length, true);
  }
  /**
   * Return an array of standalone week names.
   * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DateTimeFormat
   * @param {string} [length='long'] - the length of the weekday representation, such as "narrow", "short", "long".
   * @param {Object} opts - options
   * @param {string} [opts.locale] - the locale code
   * @param {string} [opts.numberingSystem=null] - the numbering system
   * @param {string} [opts.locObj=null] - an existing locale object to use
   * @example Info.weekdays()[0] //=> 'Monday'
   * @example Info.weekdays('short')[0] //=> 'Mon'
   * @example Info.weekdays('short', { locale: 'fr-CA' })[0] //=> 'lun.'
   * @example Info.weekdays('short', { locale: 'ar' })[0] //=> 'الاثنين'
   * @return {[string]}
   */
  ;

  Info.weekdays = function weekdays(length, _temp3) {
    if (length === void 0) {
      length = "long";
    }

    var _ref3 = _temp3 === void 0 ? {} : _temp3,
        _ref3$locale = _ref3.locale,
        locale = _ref3$locale === void 0 ? null : _ref3$locale,
        _ref3$numberingSystem = _ref3.numberingSystem,
        numberingSystem = _ref3$numberingSystem === void 0 ? null : _ref3$numberingSystem,
        _ref3$locObj = _ref3.locObj,
        locObj = _ref3$locObj === void 0 ? null : _ref3$locObj;

    return (locObj || Locale.create(locale, numberingSystem, null)).weekdays(length);
  }
  /**
   * Return an array of format week names.
   * Format weekdays differ from standalone weekdays in that they're meant to appear next to more date information. In some languages, that
   * changes the string.
   * See {@link weekdays}
   * @param {string} [length='long'] - the length of the weekday representation, such as "narrow", "short", "long".
   * @param {Object} opts - options
   * @param {string} [opts.locale=null] - the locale code
   * @param {string} [opts.numberingSystem=null] - the numbering system
   * @param {string} [opts.locObj=null] - an existing locale object to use
   * @return {[string]}
   */
  ;

  Info.weekdaysFormat = function weekdaysFormat(length, _temp4) {
    if (length === void 0) {
      length = "long";
    }

    var _ref4 = _temp4 === void 0 ? {} : _temp4,
        _ref4$locale = _ref4.locale,
        locale = _ref4$locale === void 0 ? null : _ref4$locale,
        _ref4$numberingSystem = _ref4.numberingSystem,
        numberingSystem = _ref4$numberingSystem === void 0 ? null : _ref4$numberingSystem,
        _ref4$locObj = _ref4.locObj,
        locObj = _ref4$locObj === void 0 ? null : _ref4$locObj;

    return (locObj || Locale.create(locale, numberingSystem, null)).weekdays(length, true);
  }
  /**
   * Return an array of meridiems.
   * @param {Object} opts - options
   * @param {string} [opts.locale] - the locale code
   * @example Info.meridiems() //=> [ 'AM', 'PM' ]
   * @example Info.meridiems({ locale: 'my' }) //=> [ 'နံနက်', 'ညနေ' ]
   * @return {[string]}
   */
  ;

  Info.meridiems = function meridiems(_temp5) {
    var _ref5 = _temp5 === void 0 ? {} : _temp5,
        _ref5$locale = _ref5.locale,
        locale = _ref5$locale === void 0 ? null : _ref5$locale;

    return Locale.create(locale).meridiems();
  }
  /**
   * Return an array of eras, such as ['BC', 'AD']. The locale can be specified, but the calendar system is always Gregorian.
   * @param {string} [length='short'] - the length of the era representation, such as "short" or "long".
   * @param {Object} opts - options
   * @param {string} [opts.locale] - the locale code
   * @example Info.eras() //=> [ 'BC', 'AD' ]
   * @example Info.eras('long') //=> [ 'Before Christ', 'Anno Domini' ]
   * @example Info.eras('long', { locale: 'fr' }) //=> [ 'avant Jésus-Christ', 'après Jésus-Christ' ]
   * @return {[string]}
   */
  ;

  Info.eras = function eras(length, _temp6) {
    if (length === void 0) {
      length = "short";
    }

    var _ref6 = _temp6 === void 0 ? {} : _temp6,
        _ref6$locale = _ref6.locale,
        locale = _ref6$locale === void 0 ? null : _ref6$locale;

    return Locale.create(locale, null, "gregory").eras(length);
  }
  /**
   * Return the set of available features in this environment.
   * Some features of Luxon are not available in all environments. For example, on older browsers, timezone support is not available. Use this function to figure out if that's the case.
   * Keys:
   * * `zones`: whether this environment supports IANA timezones
   * * `intlTokens`: whether this environment supports internationalized token-based formatting/parsing
   * * `intl`: whether this environment supports general internationalization
   * * `relative`: whether this environment supports relative time formatting
   * @example Info.features() //=> { intl: true, intlTokens: false, zones: true, relative: false }
   * @return {Object}
   */
  ;

  Info.features = function features() {
    var intl = false,
        intlTokens = false,
        zones = false,
        relative = false;

    if (hasIntl()) {
      intl = true;
      intlTokens = hasFormatToParts();
      relative = hasRelative();

      try {
        zones = new Intl.DateTimeFormat("en", {
          timeZone: "America/New_York"
        }).resolvedOptions().timeZone === "America/New_York";
      } catch (e) {
        zones = false;
      }
    }

    return {
      intl: intl,
      intlTokens: intlTokens,
      zones: zones,
      relative: relative
    };
  };

  return Info;
}();

function dayDiff(earlier, later) {
  var utcDayStart = function utcDayStart(dt) {
    return dt.toUTC(0, {
      keepLocalTime: true
    }).startOf("day").valueOf();
  },
      ms = utcDayStart(later) - utcDayStart(earlier);

  return Math.floor(Duration.fromMillis(ms).as("days"));
}

function highOrderDiffs(cursor, later, units) {
  var differs = [["years", function (a, b) {
    return b.year - a.year;
  }], ["quarters", function (a, b) {
    return b.quarter - a.quarter;
  }], ["months", function (a, b) {
    return b.month - a.month + (b.year - a.year) * 12;
  }], ["weeks", function (a, b) {
    var days = dayDiff(a, b);
    return (days - days % 7) / 7;
  }], ["days", dayDiff]];
  var results = {};
  var lowestOrder, highWater;

  for (var _i = 0, _differs = differs; _i < _differs.length; _i++) {
    var _differs$_i = _differs[_i],
        unit = _differs$_i[0],
        differ = _differs$_i[1];

    if (units.indexOf(unit) >= 0) {
      var _cursor$plus;

      lowestOrder = unit;
      var delta = differ(cursor, later);
      highWater = cursor.plus((_cursor$plus = {}, _cursor$plus[unit] = delta, _cursor$plus));

      if (highWater > later) {
        var _cursor$plus2;

        cursor = cursor.plus((_cursor$plus2 = {}, _cursor$plus2[unit] = delta - 1, _cursor$plus2));
        delta -= 1;
      } else {
        cursor = highWater;
      }

      results[unit] = delta;
    }
  }

  return [cursor, results, highWater, lowestOrder];
}

function _diff (earlier, later, units, opts) {
  var _highOrderDiffs = highOrderDiffs(earlier, later, units),
      cursor = _highOrderDiffs[0],
      results = _highOrderDiffs[1],
      highWater = _highOrderDiffs[2],
      lowestOrder = _highOrderDiffs[3];

  var remainingMillis = later - cursor;
  var lowerOrderUnits = units.filter(function (u) {
    return ["hours", "minutes", "seconds", "milliseconds"].indexOf(u) >= 0;
  });

  if (lowerOrderUnits.length === 0) {
    if (highWater < later) {
      var _cursor$plus3;

      highWater = cursor.plus((_cursor$plus3 = {}, _cursor$plus3[lowestOrder] = 1, _cursor$plus3));
    }

    if (highWater !== cursor) {
      results[lowestOrder] = (results[lowestOrder] || 0) + remainingMillis / (highWater - cursor);
    }
  }

  var duration = Duration.fromObject(Object.assign(results, opts));

  if (lowerOrderUnits.length > 0) {
    var _Duration$fromMillis;

    return (_Duration$fromMillis = Duration.fromMillis(remainingMillis, opts)).shiftTo.apply(_Duration$fromMillis, lowerOrderUnits).plus(duration);
  } else {
    return duration;
  }
}

var numberingSystems = {
  arab: "[\u0660-\u0669]",
  arabext: "[\u06F0-\u06F9]",
  bali: "[\u1B50-\u1B59]",
  beng: "[\u09E6-\u09EF]",
  deva: "[\u0966-\u096F]",
  fullwide: "[\uFF10-\uFF19]",
  gujr: "[\u0AE6-\u0AEF]",
  hanidec: "[〇|一|二|三|四|五|六|七|八|九]",
  khmr: "[\u17E0-\u17E9]",
  knda: "[\u0CE6-\u0CEF]",
  laoo: "[\u0ED0-\u0ED9]",
  limb: "[\u1946-\u194F]",
  mlym: "[\u0D66-\u0D6F]",
  mong: "[\u1810-\u1819]",
  mymr: "[\u1040-\u1049]",
  orya: "[\u0B66-\u0B6F]",
  tamldec: "[\u0BE6-\u0BEF]",
  telu: "[\u0C66-\u0C6F]",
  thai: "[\u0E50-\u0E59]",
  tibt: "[\u0F20-\u0F29]",
  latn: "\\d"
};
var numberingSystemsUTF16 = {
  arab: [1632, 1641],
  arabext: [1776, 1785],
  bali: [6992, 7001],
  beng: [2534, 2543],
  deva: [2406, 2415],
  fullwide: [65296, 65303],
  gujr: [2790, 2799],
  khmr: [6112, 6121],
  knda: [3302, 3311],
  laoo: [3792, 3801],
  limb: [6470, 6479],
  mlym: [3430, 3439],
  mong: [6160, 6169],
  mymr: [4160, 4169],
  orya: [2918, 2927],
  tamldec: [3046, 3055],
  telu: [3174, 3183],
  thai: [3664, 3673],
  tibt: [3872, 3881]
}; // eslint-disable-next-line

var hanidecChars = numberingSystems.hanidec.replace(/[\[|\]]/g, "").split("");
function parseDigits(str) {
  var value = parseInt(str, 10);

  if (isNaN(value)) {
    value = "";

    for (var i = 0; i < str.length; i++) {
      var code = str.charCodeAt(i);

      if (str[i].search(numberingSystems.hanidec) !== -1) {
        value += hanidecChars.indexOf(str[i]);
      } else {
        for (var key in numberingSystemsUTF16) {
          var _numberingSystemsUTF = numberingSystemsUTF16[key],
              min = _numberingSystemsUTF[0],
              max = _numberingSystemsUTF[1];

          if (code >= min && code <= max) {
            value += code - min;
          }
        }
      }
    }

    return parseInt(value, 10);
  } else {
    return value;
  }
}
function digitRegex(_ref, append) {
  var numberingSystem = _ref.numberingSystem;

  if (append === void 0) {
    append = "";
  }

  return new RegExp("" + numberingSystems[numberingSystem || "latn"] + append);
}

var MISSING_FTP = "missing Intl.DateTimeFormat.formatToParts support";

function intUnit(regex, post) {
  if (post === void 0) {
    post = function post(i) {
      return i;
    };
  }

  return {
    regex: regex,
    deser: function deser(_ref) {
      var s = _ref[0];
      return post(parseDigits(s));
    }
  };
}

var NBSP = String.fromCharCode(160);
var spaceOrNBSP = "( |" + NBSP + ")";
var spaceOrNBSPRegExp = new RegExp(spaceOrNBSP, "g");

function fixListRegex(s) {
  // make dots optional and also make them literal
  // make space and non breakable space characters interchangeable
  return s.replace(/\./g, "\\.?").replace(spaceOrNBSPRegExp, spaceOrNBSP);
}

function stripInsensitivities(s) {
  return s.replace(/\./g, "") // ignore dots that were made optional
  .replace(spaceOrNBSPRegExp, " ") // interchange space and nbsp
  .toLowerCase();
}

function oneOf(strings, startIndex) {
  if (strings === null) {
    return null;
  } else {
    return {
      regex: RegExp(strings.map(fixListRegex).join("|")),
      deser: function deser(_ref2) {
        var s = _ref2[0];
        return strings.findIndex(function (i) {
          return stripInsensitivities(s) === stripInsensitivities(i);
        }) + startIndex;
      }
    };
  }
}

function offset(regex, groups) {
  return {
    regex: regex,
    deser: function deser(_ref3) {
      var h = _ref3[1],
          m = _ref3[2];
      return signedOffset(h, m);
    },
    groups: groups
  };
}

function simple(regex) {
  return {
    regex: regex,
    deser: function deser(_ref4) {
      var s = _ref4[0];
      return s;
    }
  };
}

function escapeToken(value) {
  // eslint-disable-next-line no-useless-escape
  return value.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&");
}

function unitForToken(token, loc) {
  var one = digitRegex(loc),
      two = digitRegex(loc, "{2}"),
      three = digitRegex(loc, "{3}"),
      four = digitRegex(loc, "{4}"),
      six = digitRegex(loc, "{6}"),
      oneOrTwo = digitRegex(loc, "{1,2}"),
      oneToThree = digitRegex(loc, "{1,3}"),
      oneToSix = digitRegex(loc, "{1,6}"),
      oneToNine = digitRegex(loc, "{1,9}"),
      twoToFour = digitRegex(loc, "{2,4}"),
      fourToSix = digitRegex(loc, "{4,6}"),
      literal = function literal(t) {
    return {
      regex: RegExp(escapeToken(t.val)),
      deser: function deser(_ref5) {
        var s = _ref5[0];
        return s;
      },
      literal: true
    };
  },
      unitate = function unitate(t) {
    if (token.literal) {
      return literal(t);
    }

    switch (t.val) {
      // era
      case "G":
        return oneOf(loc.eras("short", false), 0);

      case "GG":
        return oneOf(loc.eras("long", false), 0);
      // years

      case "y":
        return intUnit(oneToSix);

      case "yy":
        return intUnit(twoToFour, untruncateYear);

      case "yyyy":
        return intUnit(four);

      case "yyyyy":
        return intUnit(fourToSix);

      case "yyyyyy":
        return intUnit(six);
      // months

      case "M":
        return intUnit(oneOrTwo);

      case "MM":
        return intUnit(two);

      case "MMM":
        return oneOf(loc.months("short", true, false), 1);

      case "MMMM":
        return oneOf(loc.months("long", true, false), 1);

      case "L":
        return intUnit(oneOrTwo);

      case "LL":
        return intUnit(two);

      case "LLL":
        return oneOf(loc.months("short", false, false), 1);

      case "LLLL":
        return oneOf(loc.months("long", false, false), 1);
      // dates

      case "d":
        return intUnit(oneOrTwo);

      case "dd":
        return intUnit(two);
      // ordinals

      case "o":
        return intUnit(oneToThree);

      case "ooo":
        return intUnit(three);
      // time

      case "HH":
        return intUnit(two);

      case "H":
        return intUnit(oneOrTwo);

      case "hh":
        return intUnit(two);

      case "h":
        return intUnit(oneOrTwo);

      case "mm":
        return intUnit(two);

      case "m":
        return intUnit(oneOrTwo);

      case "q":
        return intUnit(oneOrTwo);

      case "qq":
        return intUnit(two);

      case "s":
        return intUnit(oneOrTwo);

      case "ss":
        return intUnit(two);

      case "S":
        return intUnit(oneToThree);

      case "SSS":
        return intUnit(three);

      case "u":
        return simple(oneToNine);
      // meridiem

      case "a":
        return oneOf(loc.meridiems(), 0);
      // weekYear (k)

      case "kkkk":
        return intUnit(four);

      case "kk":
        return intUnit(twoToFour, untruncateYear);
      // weekNumber (W)

      case "W":
        return intUnit(oneOrTwo);

      case "WW":
        return intUnit(two);
      // weekdays

      case "E":
      case "c":
        return intUnit(one);

      case "EEE":
        return oneOf(loc.weekdays("short", false, false), 1);

      case "EEEE":
        return oneOf(loc.weekdays("long", false, false), 1);

      case "ccc":
        return oneOf(loc.weekdays("short", true, false), 1);

      case "cccc":
        return oneOf(loc.weekdays("long", true, false), 1);
      // offset/zone

      case "Z":
      case "ZZ":
        return offset(new RegExp("([+-]" + oneOrTwo.source + ")(?::(" + two.source + "))?"), 2);

      case "ZZZ":
        return offset(new RegExp("([+-]" + oneOrTwo.source + ")(" + two.source + ")?"), 2);
      // we don't support ZZZZ (PST) or ZZZZZ (Pacific Standard Time) in parsing
      // because we don't have any way to figure out what they are

      case "z":
        return simple(/[a-z_+-/]{1,256}?/i);

      default:
        return literal(t);
    }
  };

  var unit = unitate(token) || {
    invalidReason: MISSING_FTP
  };
  unit.token = token;
  return unit;
}

var partTypeStyleToTokenVal = {
  year: {
    "2-digit": "yy",
    numeric: "yyyyy"
  },
  month: {
    numeric: "M",
    "2-digit": "MM",
    short: "MMM",
    long: "MMMM"
  },
  day: {
    numeric: "d",
    "2-digit": "dd"
  },
  weekday: {
    short: "EEE",
    long: "EEEE"
  },
  dayperiod: "a",
  dayPeriod: "a",
  hour: {
    numeric: "h",
    "2-digit": "hh"
  },
  minute: {
    numeric: "m",
    "2-digit": "mm"
  },
  second: {
    numeric: "s",
    "2-digit": "ss"
  }
};

function tokenForPart(part, locale, formatOpts) {
  var type = part.type,
      value = part.value;

  if (type === "literal") {
    return {
      literal: true,
      val: value
    };
  }

  var style = formatOpts[type];
  var val = partTypeStyleToTokenVal[type];

  if (typeof val === "object") {
    val = val[style];
  }

  if (val) {
    return {
      literal: false,
      val: val
    };
  }

  return undefined;
}

function buildRegex(units) {
  var re = units.map(function (u) {
    return u.regex;
  }).reduce(function (f, r) {
    return f + "(" + r.source + ")";
  }, "");
  return ["^" + re + "$", units];
}

function match(input, regex, handlers) {
  var matches = input.match(regex);

  if (matches) {
    var all = {};
    var matchIndex = 1;

    for (var i in handlers) {
      if (hasOwnProperty(handlers, i)) {
        var h = handlers[i],
            groups = h.groups ? h.groups + 1 : 1;

        if (!h.literal && h.token) {
          all[h.token.val[0]] = h.deser(matches.slice(matchIndex, matchIndex + groups));
        }

        matchIndex += groups;
      }
    }

    return [matches, all];
  } else {
    return [matches, {}];
  }
}

function dateTimeFromMatches(matches) {
  var toField = function toField(token) {
    switch (token) {
      case "S":
        return "millisecond";

      case "s":
        return "second";

      case "m":
        return "minute";

      case "h":
      case "H":
        return "hour";

      case "d":
        return "day";

      case "o":
        return "ordinal";

      case "L":
      case "M":
        return "month";

      case "y":
        return "year";

      case "E":
      case "c":
        return "weekday";

      case "W":
        return "weekNumber";

      case "k":
        return "weekYear";

      case "q":
        return "quarter";

      default:
        return null;
    }
  };

  var zone;

  if (!isUndefined(matches.Z)) {
    zone = new FixedOffsetZone(matches.Z);
  } else if (!isUndefined(matches.z)) {
    zone = IANAZone.create(matches.z);
  } else {
    zone = null;
  }

  if (!isUndefined(matches.q)) {
    matches.M = (matches.q - 1) * 3 + 1;
  }

  if (!isUndefined(matches.h)) {
    if (matches.h < 12 && matches.a === 1) {
      matches.h += 12;
    } else if (matches.h === 12 && matches.a === 0) {
      matches.h = 0;
    }
  }

  if (matches.G === 0 && matches.y) {
    matches.y = -matches.y;
  }

  if (!isUndefined(matches.u)) {
    matches.S = parseMillis(matches.u);
  }

  var vals = Object.keys(matches).reduce(function (r, k) {
    var f = toField(k);

    if (f) {
      r[f] = matches[k];
    }

    return r;
  }, {});
  return [vals, zone];
}

var dummyDateTimeCache = null;

function getDummyDateTime() {
  if (!dummyDateTimeCache) {
    dummyDateTimeCache = DateTime.fromMillis(1555555555555);
  }

  return dummyDateTimeCache;
}

function maybeExpandMacroToken(token, locale) {
  if (token.literal) {
    return token;
  }

  var formatOpts = Formatter.macroTokenToFormatOpts(token.val);

  if (!formatOpts) {
    return token;
  }

  var formatter = Formatter.create(locale, formatOpts);
  var parts = formatter.formatDateTimeParts(getDummyDateTime());
  var tokens = parts.map(function (p) {
    return tokenForPart(p, locale, formatOpts);
  });

  if (tokens.includes(undefined)) {
    return token;
  }

  return tokens;
}

function expandMacroTokens(tokens, locale) {
  var _Array$prototype;

  return (_Array$prototype = Array.prototype).concat.apply(_Array$prototype, tokens.map(function (t) {
    return maybeExpandMacroToken(t, locale);
  }));
}
/**
 * @private
 */


function explainFromTokens(locale, input, format) {
  var tokens = expandMacroTokens(Formatter.parseFormat(format), locale),
      units = tokens.map(function (t) {
    return unitForToken(t, locale);
  }),
      disqualifyingUnit = units.find(function (t) {
    return t.invalidReason;
  });

  if (disqualifyingUnit) {
    return {
      input: input,
      tokens: tokens,
      invalidReason: disqualifyingUnit.invalidReason
    };
  } else {
    var _buildRegex = buildRegex(units),
        regexString = _buildRegex[0],
        handlers = _buildRegex[1],
        regex = RegExp(regexString, "i"),
        _match = match(input, regex, handlers),
        rawMatches = _match[0],
        matches = _match[1],
        _ref6 = matches ? dateTimeFromMatches(matches) : [null, null],
        result = _ref6[0],
        zone = _ref6[1];

    if (hasOwnProperty(matches, "a") && hasOwnProperty(matches, "H")) {
      throw new ConflictingSpecificationError("Can't include meridiem when specifying 24-hour format");
    }

    return {
      input: input,
      tokens: tokens,
      regex: regex,
      rawMatches: rawMatches,
      matches: matches,
      result: result,
      zone: zone
    };
  }
}
function parseFromTokens(locale, input, format) {
  var _explainFromTokens = explainFromTokens(locale, input, format),
      result = _explainFromTokens.result,
      zone = _explainFromTokens.zone,
      invalidReason = _explainFromTokens.invalidReason;

  return [result, zone, invalidReason];
}

var nonLeapLadder = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334],
    leapLadder = [0, 31, 60, 91, 121, 152, 182, 213, 244, 274, 305, 335];

function unitOutOfRange(unit, value) {
  return new Invalid("unit out of range", "you specified " + value + " (of type " + typeof value + ") as a " + unit + ", which is invalid");
}

function dayOfWeek(year, month, day) {
  var js = new Date(Date.UTC(year, month - 1, day)).getUTCDay();
  return js === 0 ? 7 : js;
}

function computeOrdinal(year, month, day) {
  return day + (isLeapYear(year) ? leapLadder : nonLeapLadder)[month - 1];
}

function uncomputeOrdinal(year, ordinal) {
  var table = isLeapYear(year) ? leapLadder : nonLeapLadder,
      month0 = table.findIndex(function (i) {
    return i < ordinal;
  }),
      day = ordinal - table[month0];
  return {
    month: month0 + 1,
    day: day
  };
}
/**
 * @private
 */


function gregorianToWeek(gregObj) {
  var year = gregObj.year,
      month = gregObj.month,
      day = gregObj.day,
      ordinal = computeOrdinal(year, month, day),
      weekday = dayOfWeek(year, month, day);
  var weekNumber = Math.floor((ordinal - weekday + 10) / 7),
      weekYear;

  if (weekNumber < 1) {
    weekYear = year - 1;
    weekNumber = weeksInWeekYear(weekYear);
  } else if (weekNumber > weeksInWeekYear(year)) {
    weekYear = year + 1;
    weekNumber = 1;
  } else {
    weekYear = year;
  }

  return Object.assign({
    weekYear: weekYear,
    weekNumber: weekNumber,
    weekday: weekday
  }, timeObject(gregObj));
}
function weekToGregorian(weekData) {
  var weekYear = weekData.weekYear,
      weekNumber = weekData.weekNumber,
      weekday = weekData.weekday,
      weekdayOfJan4 = dayOfWeek(weekYear, 1, 4),
      yearInDays = daysInYear(weekYear);
  var ordinal = weekNumber * 7 + weekday - weekdayOfJan4 - 3,
      year;

  if (ordinal < 1) {
    year = weekYear - 1;
    ordinal += daysInYear(year);
  } else if (ordinal > yearInDays) {
    year = weekYear + 1;
    ordinal -= daysInYear(weekYear);
  } else {
    year = weekYear;
  }

  var _uncomputeOrdinal = uncomputeOrdinal(year, ordinal),
      month = _uncomputeOrdinal.month,
      day = _uncomputeOrdinal.day;

  return Object.assign({
    year: year,
    month: month,
    day: day
  }, timeObject(weekData));
}
function gregorianToOrdinal(gregData) {
  var year = gregData.year,
      month = gregData.month,
      day = gregData.day,
      ordinal = computeOrdinal(year, month, day);
  return Object.assign({
    year: year,
    ordinal: ordinal
  }, timeObject(gregData));
}
function ordinalToGregorian(ordinalData) {
  var year = ordinalData.year,
      ordinal = ordinalData.ordinal,
      _uncomputeOrdinal2 = uncomputeOrdinal(year, ordinal),
      month = _uncomputeOrdinal2.month,
      day = _uncomputeOrdinal2.day;

  return Object.assign({
    year: year,
    month: month,
    day: day
  }, timeObject(ordinalData));
}
function hasInvalidWeekData(obj) {
  var validYear = isInteger(obj.weekYear),
      validWeek = integerBetween(obj.weekNumber, 1, weeksInWeekYear(obj.weekYear)),
      validWeekday = integerBetween(obj.weekday, 1, 7);

  if (!validYear) {
    return unitOutOfRange("weekYear", obj.weekYear);
  } else if (!validWeek) {
    return unitOutOfRange("week", obj.week);
  } else if (!validWeekday) {
    return unitOutOfRange("weekday", obj.weekday);
  } else return false;
}
function hasInvalidOrdinalData(obj) {
  var validYear = isInteger(obj.year),
      validOrdinal = integerBetween(obj.ordinal, 1, daysInYear(obj.year));

  if (!validYear) {
    return unitOutOfRange("year", obj.year);
  } else if (!validOrdinal) {
    return unitOutOfRange("ordinal", obj.ordinal);
  } else return false;
}
function hasInvalidGregorianData(obj) {
  var validYear = isInteger(obj.year),
      validMonth = integerBetween(obj.month, 1, 12),
      validDay = integerBetween(obj.day, 1, daysInMonth(obj.year, obj.month));

  if (!validYear) {
    return unitOutOfRange("year", obj.year);
  } else if (!validMonth) {
    return unitOutOfRange("month", obj.month);
  } else if (!validDay) {
    return unitOutOfRange("day", obj.day);
  } else return false;
}
function hasInvalidTimeData(obj) {
  var hour = obj.hour,
      minute = obj.minute,
      second = obj.second,
      millisecond = obj.millisecond;
  var validHour = integerBetween(hour, 0, 23) || hour === 24 && minute === 0 && second === 0 && millisecond === 0,
      validMinute = integerBetween(minute, 0, 59),
      validSecond = integerBetween(second, 0, 59),
      validMillisecond = integerBetween(millisecond, 0, 999);

  if (!validHour) {
    return unitOutOfRange("hour", hour);
  } else if (!validMinute) {
    return unitOutOfRange("minute", minute);
  } else if (!validSecond) {
    return unitOutOfRange("second", second);
  } else if (!validMillisecond) {
    return unitOutOfRange("millisecond", millisecond);
  } else return false;
}

var INVALID$2 = "Invalid DateTime";
var MAX_DATE = 8.64e15;

function unsupportedZone(zone) {
  return new Invalid("unsupported zone", "the zone \"" + zone.name + "\" is not supported");
} // we cache week data on the DT object and this intermediates the cache


function possiblyCachedWeekData(dt) {
  if (dt.weekData === null) {
    dt.weekData = gregorianToWeek(dt.c);
  }

  return dt.weekData;
} // clone really means, "make a new object with these modifications". all "setters" really use this
// to create a new object while only changing some of the properties


function clone$1(inst, alts) {
  var current = {
    ts: inst.ts,
    zone: inst.zone,
    c: inst.c,
    o: inst.o,
    loc: inst.loc,
    invalid: inst.invalid
  };
  return new DateTime(Object.assign({}, current, alts, {
    old: current
  }));
} // find the right offset a given local time. The o input is our guess, which determines which
// offset we'll pick in ambiguous cases (e.g. there are two 3 AMs b/c Fallback DST)


function fixOffset(localTS, o, tz) {
  // Our UTC time is just a guess because our offset is just a guess
  var utcGuess = localTS - o * 60 * 1000; // Test whether the zone matches the offset for this ts

  var o2 = tz.offset(utcGuess); // If so, offset didn't change and we're done

  if (o === o2) {
    return [utcGuess, o];
  } // If not, change the ts by the difference in the offset


  utcGuess -= (o2 - o) * 60 * 1000; // If that gives us the local time we want, we're done

  var o3 = tz.offset(utcGuess);

  if (o2 === o3) {
    return [utcGuess, o2];
  } // If it's different, we're in a hole time. The offset has changed, but the we don't adjust the time


  return [localTS - Math.min(o2, o3) * 60 * 1000, Math.max(o2, o3)];
} // convert an epoch timestamp into a calendar object with the given offset


function tsToObj(ts, offset) {
  ts += offset * 60 * 1000;
  var d = new Date(ts);
  return {
    year: d.getUTCFullYear(),
    month: d.getUTCMonth() + 1,
    day: d.getUTCDate(),
    hour: d.getUTCHours(),
    minute: d.getUTCMinutes(),
    second: d.getUTCSeconds(),
    millisecond: d.getUTCMilliseconds()
  };
} // convert a calendar object to a epoch timestamp


function objToTS(obj, offset, zone) {
  return fixOffset(objToLocalTS(obj), offset, zone);
} // create a new DT instance by adding a duration, adjusting for DSTs


function adjustTime(inst, dur) {
  var oPre = inst.o,
      year = inst.c.year + Math.trunc(dur.years),
      month = inst.c.month + Math.trunc(dur.months) + Math.trunc(dur.quarters) * 3,
      c = Object.assign({}, inst.c, {
    year: year,
    month: month,
    day: Math.min(inst.c.day, daysInMonth(year, month)) + Math.trunc(dur.days) + Math.trunc(dur.weeks) * 7
  }),
      millisToAdd = Duration.fromObject({
    years: dur.years - Math.trunc(dur.years),
    quarters: dur.quarters - Math.trunc(dur.quarters),
    months: dur.months - Math.trunc(dur.months),
    weeks: dur.weeks - Math.trunc(dur.weeks),
    days: dur.days - Math.trunc(dur.days),
    hours: dur.hours,
    minutes: dur.minutes,
    seconds: dur.seconds,
    milliseconds: dur.milliseconds
  }).as("milliseconds"),
      localTS = objToLocalTS(c);

  var _fixOffset = fixOffset(localTS, oPre, inst.zone),
      ts = _fixOffset[0],
      o = _fixOffset[1];

  if (millisToAdd !== 0) {
    ts += millisToAdd; // that could have changed the offset by going over a DST, but we want to keep the ts the same

    o = inst.zone.offset(ts);
  }

  return {
    ts: ts,
    o: o
  };
} // helper useful in turning the results of parsing into real dates
// by handling the zone options


function parseDataToDateTime(parsed, parsedZone, opts, format, text) {
  var setZone = opts.setZone,
      zone = opts.zone;

  if (parsed && Object.keys(parsed).length !== 0) {
    var interpretationZone = parsedZone || zone,
        inst = DateTime.fromObject(Object.assign(parsed, opts, {
      zone: interpretationZone,
      // setZone is a valid option in the calling methods, but not in fromObject
      setZone: undefined
    }));
    return setZone ? inst : inst.setZone(zone);
  } else {
    return DateTime.invalid(new Invalid("unparsable", "the input \"" + text + "\" can't be parsed as " + format));
  }
} // if you want to output a technical format (e.g. RFC 2822), this helper
// helps handle the details


function toTechFormat(dt, format, allowZ) {
  if (allowZ === void 0) {
    allowZ = true;
  }

  return dt.isValid ? Formatter.create(Locale.create("en-US"), {
    allowZ: allowZ,
    forceSimple: true
  }).formatDateTimeFromString(dt, format) : null;
} // technical time formats (e.g. the time part of ISO 8601), take some options
// and this commonizes their handling


function toTechTimeFormat(dt, _ref) {
  var _ref$suppressSeconds = _ref.suppressSeconds,
      suppressSeconds = _ref$suppressSeconds === void 0 ? false : _ref$suppressSeconds,
      _ref$suppressMillisec = _ref.suppressMilliseconds,
      suppressMilliseconds = _ref$suppressMillisec === void 0 ? false : _ref$suppressMillisec,
      includeOffset = _ref.includeOffset,
      _ref$includePrefix = _ref.includePrefix,
      includePrefix = _ref$includePrefix === void 0 ? false : _ref$includePrefix,
      _ref$includeZone = _ref.includeZone,
      includeZone = _ref$includeZone === void 0 ? false : _ref$includeZone,
      _ref$spaceZone = _ref.spaceZone,
      spaceZone = _ref$spaceZone === void 0 ? false : _ref$spaceZone,
      _ref$format = _ref.format,
      format = _ref$format === void 0 ? "extended" : _ref$format;
  var fmt = format === "basic" ? "HHmm" : "HH:mm";

  if (!suppressSeconds || dt.second !== 0 || dt.millisecond !== 0) {
    fmt += format === "basic" ? "ss" : ":ss";

    if (!suppressMilliseconds || dt.millisecond !== 0) {
      fmt += ".SSS";
    }
  }

  if ((includeZone || includeOffset) && spaceZone) {
    fmt += " ";
  }

  if (includeZone) {
    fmt += "z";
  } else if (includeOffset) {
    fmt += format === "basic" ? "ZZZ" : "ZZ";
  }

  var str = toTechFormat(dt, fmt);

  if (includePrefix) {
    str = "T" + str;
  }

  return str;
} // defaults for unspecified units in the supported calendars


var defaultUnitValues = {
  month: 1,
  day: 1,
  hour: 0,
  minute: 0,
  second: 0,
  millisecond: 0
},
    defaultWeekUnitValues = {
  weekNumber: 1,
  weekday: 1,
  hour: 0,
  minute: 0,
  second: 0,
  millisecond: 0
},
    defaultOrdinalUnitValues = {
  ordinal: 1,
  hour: 0,
  minute: 0,
  second: 0,
  millisecond: 0
}; // Units in the supported calendars, sorted by bigness

var orderedUnits$1 = ["year", "month", "day", "hour", "minute", "second", "millisecond"],
    orderedWeekUnits = ["weekYear", "weekNumber", "weekday", "hour", "minute", "second", "millisecond"],
    orderedOrdinalUnits = ["year", "ordinal", "hour", "minute", "second", "millisecond"]; // standardize case and plurality in units

function normalizeUnit(unit) {
  var normalized = {
    year: "year",
    years: "year",
    month: "month",
    months: "month",
    day: "day",
    days: "day",
    hour: "hour",
    hours: "hour",
    minute: "minute",
    minutes: "minute",
    quarter: "quarter",
    quarters: "quarter",
    second: "second",
    seconds: "second",
    millisecond: "millisecond",
    milliseconds: "millisecond",
    weekday: "weekday",
    weekdays: "weekday",
    weeknumber: "weekNumber",
    weeksnumber: "weekNumber",
    weeknumbers: "weekNumber",
    weekyear: "weekYear",
    weekyears: "weekYear",
    ordinal: "ordinal"
  }[unit.toLowerCase()];
  if (!normalized) throw new InvalidUnitError(unit);
  return normalized;
} // this is a dumbed down version of fromObject() that runs about 60% faster
// but doesn't do any validation, makes a bunch of assumptions about what units
// are present, and so on.


function quickDT(obj, zone) {
  // assume we have the higher-order units
  for (var _iterator = _createForOfIteratorHelperLoose(orderedUnits$1), _step; !(_step = _iterator()).done;) {
    var u = _step.value;

    if (isUndefined(obj[u])) {
      obj[u] = defaultUnitValues[u];
    }
  }

  var invalid = hasInvalidGregorianData(obj) || hasInvalidTimeData(obj);

  if (invalid) {
    return DateTime.invalid(invalid);
  }

  var tsNow = Settings.now(),
      offsetProvis = zone.offset(tsNow),
      _objToTS = objToTS(obj, offsetProvis, zone),
      ts = _objToTS[0],
      o = _objToTS[1];

  return new DateTime({
    ts: ts,
    zone: zone,
    o: o
  });
}

function diffRelative(start, end, opts) {
  var round = isUndefined(opts.round) ? true : opts.round,
      format = function format(c, unit) {
    c = roundTo(c, round || opts.calendary ? 0 : 2, true);
    var formatter = end.loc.clone(opts).relFormatter(opts);
    return formatter.format(c, unit);
  },
      differ = function differ(unit) {
    if (opts.calendary) {
      if (!end.hasSame(start, unit)) {
        return end.startOf(unit).diff(start.startOf(unit), unit).get(unit);
      } else return 0;
    } else {
      return end.diff(start, unit).get(unit);
    }
  };

  if (opts.unit) {
    return format(differ(opts.unit), opts.unit);
  }

  for (var _iterator2 = _createForOfIteratorHelperLoose(opts.units), _step2; !(_step2 = _iterator2()).done;) {
    var unit = _step2.value;
    var count = differ(unit);

    if (Math.abs(count) >= 1) {
      return format(count, unit);
    }
  }

  return format(start > end ? -0 : 0, opts.units[opts.units.length - 1]);
}
/**
 * A DateTime is an immutable data structure representing a specific date and time and accompanying methods. It contains class and instance methods for creating, parsing, interrogating, transforming, and formatting them.
 *
 * A DateTime comprises of:
 * * A timestamp. Each DateTime instance refers to a specific millisecond of the Unix epoch.
 * * A time zone. Each instance is considered in the context of a specific zone (by default the local system's zone).
 * * Configuration properties that effect how output strings are formatted, such as `locale`, `numberingSystem`, and `outputCalendar`.
 *
 * Here is a brief overview of the most commonly used functionality it provides:
 *
 * * **Creation**: To create a DateTime from its components, use one of its factory class methods: {@link local}, {@link utc}, and (most flexibly) {@link fromObject}. To create one from a standard string format, use {@link fromISO}, {@link fromHTTP}, and {@link fromRFC2822}. To create one from a custom string format, use {@link fromFormat}. To create one from a native JS date, use {@link fromJSDate}.
 * * **Gregorian calendar and time**: To examine the Gregorian properties of a DateTime individually (i.e as opposed to collectively through {@link toObject}), use the {@link year}, {@link month},
 * {@link day}, {@link hour}, {@link minute}, {@link second}, {@link millisecond} accessors.
 * * **Week calendar**: For ISO week calendar attributes, see the {@link weekYear}, {@link weekNumber}, and {@link weekday} accessors.
 * * **Configuration** See the {@link locale} and {@link numberingSystem} accessors.
 * * **Transformation**: To transform the DateTime into other DateTimes, use {@link set}, {@link reconfigure}, {@link setZone}, {@link setLocale}, {@link plus}, {@link minus}, {@link endOf}, {@link startOf}, {@link toUTC}, and {@link toLocal}.
 * * **Output**: To convert the DateTime to other representations, use the {@link toRelative}, {@link toRelativeCalendar}, {@link toJSON}, {@link toISO}, {@link toHTTP}, {@link toObject}, {@link toRFC2822}, {@link toString}, {@link toLocaleString}, {@link toFormat}, {@link toMillis} and {@link toJSDate}.
 *
 * There's plenty others documented below. In addition, for more information on subtler topics like internationalization, time zones, alternative calendars, validity, and so on, see the external documentation.
 */


var DateTime = /*#__PURE__*/function () {
  /**
   * @access private
   */
  function DateTime(config) {
    var zone = config.zone || Settings.defaultZone;
    var invalid = config.invalid || (Number.isNaN(config.ts) ? new Invalid("invalid input") : null) || (!zone.isValid ? unsupportedZone(zone) : null);
    /**
     * @access private
     */

    this.ts = isUndefined(config.ts) ? Settings.now() : config.ts;
    var c = null,
        o = null;

    if (!invalid) {
      var unchanged = config.old && config.old.ts === this.ts && config.old.zone.equals(zone);

      if (unchanged) {
        var _ref2 = [config.old.c, config.old.o];
        c = _ref2[0];
        o = _ref2[1];
      } else {
        var ot = zone.offset(this.ts);
        c = tsToObj(this.ts, ot);
        invalid = Number.isNaN(c.year) ? new Invalid("invalid input") : null;
        c = invalid ? null : c;
        o = invalid ? null : ot;
      }
    }
    /**
     * @access private
     */


    this._zone = zone;
    /**
     * @access private
     */

    this.loc = config.loc || Locale.create();
    /**
     * @access private
     */

    this.invalid = invalid;
    /**
     * @access private
     */

    this.weekData = null;
    /**
     * @access private
     */

    this.c = c;
    /**
     * @access private
     */

    this.o = o;
    /**
     * @access private
     */

    this.isLuxonDateTime = true;
  } // CONSTRUCT

  /**
   * Create a DateTime for the current instant, in the system's time zone.
   *
   * Use Settings to override these default values if needed.
   * @example DateTime.now().toISO() //~> now in the ISO format
   * @return {DateTime}
   */


  DateTime.now = function now() {
    return new DateTime({});
  }
  /**
   * Create a local DateTime
   * @param {number} [year] - The calendar year. If omitted (as in, call `local()` with no arguments), the current time will be used
   * @param {number} [month=1] - The month, 1-indexed
   * @param {number} [day=1] - The day of the month, 1-indexed
   * @param {number} [hour=0] - The hour of the day, in 24-hour time
   * @param {number} [minute=0] - The minute of the hour, meaning a number between 0 and 59
   * @param {number} [second=0] - The second of the minute, meaning a number between 0 and 59
   * @param {number} [millisecond=0] - The millisecond of the second, meaning a number between 0 and 999
   * @example DateTime.local()                            //~> now
   * @example DateTime.local(2017)                        //~> 2017-01-01T00:00:00
   * @example DateTime.local(2017, 3)                     //~> 2017-03-01T00:00:00
   * @example DateTime.local(2017, 3, 12)                 //~> 2017-03-12T00:00:00
   * @example DateTime.local(2017, 3, 12, 5)              //~> 2017-03-12T05:00:00
   * @example DateTime.local(2017, 3, 12, 5, 45)          //~> 2017-03-12T05:45:00
   * @example DateTime.local(2017, 3, 12, 5, 45, 10)      //~> 2017-03-12T05:45:10
   * @example DateTime.local(2017, 3, 12, 5, 45, 10, 765) //~> 2017-03-12T05:45:10.765
   * @return {DateTime}
   */
  ;

  DateTime.local = function local(year, month, day, hour, minute, second, millisecond) {
    if (isUndefined(year)) {
      return DateTime.now();
    } else {
      return quickDT({
        year: year,
        month: month,
        day: day,
        hour: hour,
        minute: minute,
        second: second,
        millisecond: millisecond
      }, Settings.defaultZone);
    }
  }
  /**
   * Create a DateTime in UTC
   * @param {number} [year] - The calendar year. If omitted (as in, call `utc()` with no arguments), the current time will be used
   * @param {number} [month=1] - The month, 1-indexed
   * @param {number} [day=1] - The day of the month
   * @param {number} [hour=0] - The hour of the day, in 24-hour time
   * @param {number} [minute=0] - The minute of the hour, meaning a number between 0 and 59
   * @param {number} [second=0] - The second of the minute, meaning a number between 0 and 59
   * @param {number} [millisecond=0] - The millisecond of the second, meaning a number between 0 and 999
   * @example DateTime.utc()                            //~> now
   * @example DateTime.utc(2017)                        //~> 2017-01-01T00:00:00Z
   * @example DateTime.utc(2017, 3)                     //~> 2017-03-01T00:00:00Z
   * @example DateTime.utc(2017, 3, 12)                 //~> 2017-03-12T00:00:00Z
   * @example DateTime.utc(2017, 3, 12, 5)              //~> 2017-03-12T05:00:00Z
   * @example DateTime.utc(2017, 3, 12, 5, 45)          //~> 2017-03-12T05:45:00Z
   * @example DateTime.utc(2017, 3, 12, 5, 45, 10)      //~> 2017-03-12T05:45:10Z
   * @example DateTime.utc(2017, 3, 12, 5, 45, 10, 765) //~> 2017-03-12T05:45:10.765Z
   * @return {DateTime}
   */
  ;

  DateTime.utc = function utc(year, month, day, hour, minute, second, millisecond) {
    if (isUndefined(year)) {
      return new DateTime({
        ts: Settings.now(),
        zone: FixedOffsetZone.utcInstance
      });
    } else {
      return quickDT({
        year: year,
        month: month,
        day: day,
        hour: hour,
        minute: minute,
        second: second,
        millisecond: millisecond
      }, FixedOffsetZone.utcInstance);
    }
  }
  /**
   * Create a DateTime from a JavaScript Date object. Uses the default zone.
   * @param {Date} date - a JavaScript Date object
   * @param {Object} options - configuration options for the DateTime
   * @param {string|Zone} [options.zone='local'] - the zone to place the DateTime into
   * @return {DateTime}
   */
  ;

  DateTime.fromJSDate = function fromJSDate(date, options) {
    if (options === void 0) {
      options = {};
    }

    var ts = isDate(date) ? date.valueOf() : NaN;

    if (Number.isNaN(ts)) {
      return DateTime.invalid("invalid input");
    }

    var zoneToUse = normalizeZone(options.zone, Settings.defaultZone);

    if (!zoneToUse.isValid) {
      return DateTime.invalid(unsupportedZone(zoneToUse));
    }

    return new DateTime({
      ts: ts,
      zone: zoneToUse,
      loc: Locale.fromObject(options)
    });
  }
  /**
   * Create a DateTime from a number of milliseconds since the epoch (meaning since 1 January 1970 00:00:00 UTC). Uses the default zone.
   * @param {number} milliseconds - a number of milliseconds since 1970 UTC
   * @param {Object} options - configuration options for the DateTime
   * @param {string|Zone} [options.zone='local'] - the zone to place the DateTime into
   * @param {string} [options.locale] - a locale to set on the resulting DateTime instance
   * @param {string} options.outputCalendar - the output calendar to set on the resulting DateTime instance
   * @param {string} options.numberingSystem - the numbering system to set on the resulting DateTime instance
   * @return {DateTime}
   */
  ;

  DateTime.fromMillis = function fromMillis(milliseconds, options) {
    if (options === void 0) {
      options = {};
    }

    if (!isNumber(milliseconds)) {
      throw new InvalidArgumentError("fromMillis requires a numerical input, but received a " + typeof milliseconds + " with value " + milliseconds);
    } else if (milliseconds < -MAX_DATE || milliseconds > MAX_DATE) {
      // this isn't perfect because because we can still end up out of range because of additional shifting, but it's a start
      return DateTime.invalid("Timestamp out of range");
    } else {
      return new DateTime({
        ts: milliseconds,
        zone: normalizeZone(options.zone, Settings.defaultZone),
        loc: Locale.fromObject(options)
      });
    }
  }
  /**
   * Create a DateTime from a number of seconds since the epoch (meaning since 1 January 1970 00:00:00 UTC). Uses the default zone.
   * @param {number} seconds - a number of seconds since 1970 UTC
   * @param {Object} options - configuration options for the DateTime
   * @param {string|Zone} [options.zone='local'] - the zone to place the DateTime into
   * @param {string} [options.locale] - a locale to set on the resulting DateTime instance
   * @param {string} options.outputCalendar - the output calendar to set on the resulting DateTime instance
   * @param {string} options.numberingSystem - the numbering system to set on the resulting DateTime instance
   * @return {DateTime}
   */
  ;

  DateTime.fromSeconds = function fromSeconds(seconds, options) {
    if (options === void 0) {
      options = {};
    }

    if (!isNumber(seconds)) {
      throw new InvalidArgumentError("fromSeconds requires a numerical input");
    } else {
      return new DateTime({
        ts: seconds * 1000,
        zone: normalizeZone(options.zone, Settings.defaultZone),
        loc: Locale.fromObject(options)
      });
    }
  }
  /**
   * Create a DateTime from a JavaScript object with keys like 'year' and 'hour' with reasonable defaults.
   * @param {Object} obj - the object to create the DateTime from
   * @param {number} obj.year - a year, such as 1987
   * @param {number} obj.month - a month, 1-12
   * @param {number} obj.day - a day of the month, 1-31, depending on the month
   * @param {number} obj.ordinal - day of the year, 1-365 or 366
   * @param {number} obj.weekYear - an ISO week year
   * @param {number} obj.weekNumber - an ISO week number, between 1 and 52 or 53, depending on the year
   * @param {number} obj.weekday - an ISO weekday, 1-7, where 1 is Monday and 7 is Sunday
   * @param {number} obj.hour - hour of the day, 0-23
   * @param {number} obj.minute - minute of the hour, 0-59
   * @param {number} obj.second - second of the minute, 0-59
   * @param {number} obj.millisecond - millisecond of the second, 0-999
   * @param {string|Zone} [obj.zone='local'] - interpret the numbers in the context of a particular zone. Can take any value taken as the first argument to setZone()
   * @param {string} [obj.locale='system's locale'] - a locale to set on the resulting DateTime instance
   * @param {string} obj.outputCalendar - the output calendar to set on the resulting DateTime instance
   * @param {string} obj.numberingSystem - the numbering system to set on the resulting DateTime instance
   * @example DateTime.fromObject({ year: 1982, month: 5, day: 25}).toISODate() //=> '1982-05-25'
   * @example DateTime.fromObject({ year: 1982 }).toISODate() //=> '1982-01-01'
   * @example DateTime.fromObject({ hour: 10, minute: 26, second: 6 }) //~> today at 10:26:06
   * @example DateTime.fromObject({ hour: 10, minute: 26, second: 6, zone: 'utc' }),
   * @example DateTime.fromObject({ hour: 10, minute: 26, second: 6, zone: 'local' })
   * @example DateTime.fromObject({ hour: 10, minute: 26, second: 6, zone: 'America/New_York' })
   * @example DateTime.fromObject({ weekYear: 2016, weekNumber: 2, weekday: 3 }).toISODate() //=> '2016-01-13'
   * @return {DateTime}
   */
  ;

  DateTime.fromObject = function fromObject(obj) {
    var zoneToUse = normalizeZone(obj.zone, Settings.defaultZone);

    if (!zoneToUse.isValid) {
      return DateTime.invalid(unsupportedZone(zoneToUse));
    }

    var tsNow = Settings.now(),
        offsetProvis = zoneToUse.offset(tsNow),
        normalized = normalizeObject(obj, normalizeUnit, ["zone", "locale", "outputCalendar", "numberingSystem"]),
        containsOrdinal = !isUndefined(normalized.ordinal),
        containsGregorYear = !isUndefined(normalized.year),
        containsGregorMD = !isUndefined(normalized.month) || !isUndefined(normalized.day),
        containsGregor = containsGregorYear || containsGregorMD,
        definiteWeekDef = normalized.weekYear || normalized.weekNumber,
        loc = Locale.fromObject(obj); // cases:
    // just a weekday -> this week's instance of that weekday, no worries
    // (gregorian data or ordinal) + (weekYear or weekNumber) -> error
    // (gregorian month or day) + ordinal -> error
    // otherwise just use weeks or ordinals or gregorian, depending on what's specified

    if ((containsGregor || containsOrdinal) && definiteWeekDef) {
      throw new ConflictingSpecificationError("Can't mix weekYear/weekNumber units with year/month/day or ordinals");
    }

    if (containsGregorMD && containsOrdinal) {
      throw new ConflictingSpecificationError("Can't mix ordinal dates with month/day");
    }

    var useWeekData = definiteWeekDef || normalized.weekday && !containsGregor; // configure ourselves to deal with gregorian dates or week stuff

    var units,
        defaultValues,
        objNow = tsToObj(tsNow, offsetProvis);

    if (useWeekData) {
      units = orderedWeekUnits;
      defaultValues = defaultWeekUnitValues;
      objNow = gregorianToWeek(objNow);
    } else if (containsOrdinal) {
      units = orderedOrdinalUnits;
      defaultValues = defaultOrdinalUnitValues;
      objNow = gregorianToOrdinal(objNow);
    } else {
      units = orderedUnits$1;
      defaultValues = defaultUnitValues;
    } // set default values for missing stuff


    var foundFirst = false;

    for (var _iterator3 = _createForOfIteratorHelperLoose(units), _step3; !(_step3 = _iterator3()).done;) {
      var u = _step3.value;
      var v = normalized[u];

      if (!isUndefined(v)) {
        foundFirst = true;
      } else if (foundFirst) {
        normalized[u] = defaultValues[u];
      } else {
        normalized[u] = objNow[u];
      }
    } // make sure the values we have are in range


    var higherOrderInvalid = useWeekData ? hasInvalidWeekData(normalized) : containsOrdinal ? hasInvalidOrdinalData(normalized) : hasInvalidGregorianData(normalized),
        invalid = higherOrderInvalid || hasInvalidTimeData(normalized);

    if (invalid) {
      return DateTime.invalid(invalid);
    } // compute the actual time


    var gregorian = useWeekData ? weekToGregorian(normalized) : containsOrdinal ? ordinalToGregorian(normalized) : normalized,
        _objToTS2 = objToTS(gregorian, offsetProvis, zoneToUse),
        tsFinal = _objToTS2[0],
        offsetFinal = _objToTS2[1],
        inst = new DateTime({
      ts: tsFinal,
      zone: zoneToUse,
      o: offsetFinal,
      loc: loc
    }); // gregorian data + weekday serves only to validate


    if (normalized.weekday && containsGregor && obj.weekday !== inst.weekday) {
      return DateTime.invalid("mismatched weekday", "you can't specify both a weekday of " + normalized.weekday + " and a date of " + inst.toISO());
    }

    return inst;
  }
  /**
   * Create a DateTime from an ISO 8601 string
   * @param {string} text - the ISO string
   * @param {Object} opts - options to affect the creation
   * @param {string|Zone} [opts.zone='local'] - use this zone if no offset is specified in the input string itself. Will also convert the time to this zone
   * @param {boolean} [opts.setZone=false] - override the zone with a fixed-offset zone specified in the string itself, if it specifies one
   * @param {string} [opts.locale='system's locale'] - a locale to set on the resulting DateTime instance
   * @param {string} [opts.outputCalendar] - the output calendar to set on the resulting DateTime instance
   * @param {string} [opts.numberingSystem] - the numbering system to set on the resulting DateTime instance
   * @example DateTime.fromISO('2016-05-25T09:08:34.123')
   * @example DateTime.fromISO('2016-05-25T09:08:34.123+06:00')
   * @example DateTime.fromISO('2016-05-25T09:08:34.123+06:00', {setZone: true})
   * @example DateTime.fromISO('2016-05-25T09:08:34.123', {zone: 'utc'})
   * @example DateTime.fromISO('2016-W05-4')
   * @return {DateTime}
   */
  ;

  DateTime.fromISO = function fromISO(text, opts) {
    if (opts === void 0) {
      opts = {};
    }

    var _parseISODate = parseISODate(text),
        vals = _parseISODate[0],
        parsedZone = _parseISODate[1];

    return parseDataToDateTime(vals, parsedZone, opts, "ISO 8601", text);
  }
  /**
   * Create a DateTime from an RFC 2822 string
   * @param {string} text - the RFC 2822 string
   * @param {Object} opts - options to affect the creation
   * @param {string|Zone} [opts.zone='local'] - convert the time to this zone. Since the offset is always specified in the string itself, this has no effect on the interpretation of string, merely the zone the resulting DateTime is expressed in.
   * @param {boolean} [opts.setZone=false] - override the zone with a fixed-offset zone specified in the string itself, if it specifies one
   * @param {string} [opts.locale='system's locale'] - a locale to set on the resulting DateTime instance
   * @param {string} opts.outputCalendar - the output calendar to set on the resulting DateTime instance
   * @param {string} opts.numberingSystem - the numbering system to set on the resulting DateTime instance
   * @example DateTime.fromRFC2822('25 Nov 2016 13:23:12 GMT')
   * @example DateTime.fromRFC2822('Fri, 25 Nov 2016 13:23:12 +0600')
   * @example DateTime.fromRFC2822('25 Nov 2016 13:23 Z')
   * @return {DateTime}
   */
  ;

  DateTime.fromRFC2822 = function fromRFC2822(text, opts) {
    if (opts === void 0) {
      opts = {};
    }

    var _parseRFC2822Date = parseRFC2822Date(text),
        vals = _parseRFC2822Date[0],
        parsedZone = _parseRFC2822Date[1];

    return parseDataToDateTime(vals, parsedZone, opts, "RFC 2822", text);
  }
  /**
   * Create a DateTime from an HTTP header date
   * @see https://www.w3.org/Protocols/rfc2616/rfc2616-sec3.html#sec3.3.1
   * @param {string} text - the HTTP header date
   * @param {Object} opts - options to affect the creation
   * @param {string|Zone} [opts.zone='local'] - convert the time to this zone. Since HTTP dates are always in UTC, this has no effect on the interpretation of string, merely the zone the resulting DateTime is expressed in.
   * @param {boolean} [opts.setZone=false] - override the zone with the fixed-offset zone specified in the string. For HTTP dates, this is always UTC, so this option is equivalent to setting the `zone` option to 'utc', but this option is included for consistency with similar methods.
   * @param {string} [opts.locale='system's locale'] - a locale to set on the resulting DateTime instance
   * @param {string} opts.outputCalendar - the output calendar to set on the resulting DateTime instance
   * @param {string} opts.numberingSystem - the numbering system to set on the resulting DateTime instance
   * @example DateTime.fromHTTP('Sun, 06 Nov 1994 08:49:37 GMT')
   * @example DateTime.fromHTTP('Sunday, 06-Nov-94 08:49:37 GMT')
   * @example DateTime.fromHTTP('Sun Nov  6 08:49:37 1994')
   * @return {DateTime}
   */
  ;

  DateTime.fromHTTP = function fromHTTP(text, opts) {
    if (opts === void 0) {
      opts = {};
    }

    var _parseHTTPDate = parseHTTPDate(text),
        vals = _parseHTTPDate[0],
        parsedZone = _parseHTTPDate[1];

    return parseDataToDateTime(vals, parsedZone, opts, "HTTP", opts);
  }
  /**
   * Create a DateTime from an input string and format string.
   * Defaults to en-US if no locale has been specified, regardless of the system's locale.
   * @see https://moment.github.io/luxon/docs/manual/parsing.html#table-of-tokens
   * @param {string} text - the string to parse
   * @param {string} fmt - the format the string is expected to be in (see the link below for the formats)
   * @param {Object} opts - options to affect the creation
   * @param {string|Zone} [opts.zone='local'] - use this zone if no offset is specified in the input string itself. Will also convert the DateTime to this zone
   * @param {boolean} [opts.setZone=false] - override the zone with a zone specified in the string itself, if it specifies one
   * @param {string} [opts.locale='en-US'] - a locale string to use when parsing. Will also set the DateTime to this locale
   * @param {string} opts.numberingSystem - the numbering system to use when parsing. Will also set the resulting DateTime to this numbering system
   * @param {string} opts.outputCalendar - the output calendar to set on the resulting DateTime instance
   * @return {DateTime}
   */
  ;

  DateTime.fromFormat = function fromFormat(text, fmt, opts) {
    if (opts === void 0) {
      opts = {};
    }

    if (isUndefined(text) || isUndefined(fmt)) {
      throw new InvalidArgumentError("fromFormat requires an input string and a format");
    }

    var _opts = opts,
        _opts$locale = _opts.locale,
        locale = _opts$locale === void 0 ? null : _opts$locale,
        _opts$numberingSystem = _opts.numberingSystem,
        numberingSystem = _opts$numberingSystem === void 0 ? null : _opts$numberingSystem,
        localeToUse = Locale.fromOpts({
      locale: locale,
      numberingSystem: numberingSystem,
      defaultToEN: true
    }),
        _parseFromTokens = parseFromTokens(localeToUse, text, fmt),
        vals = _parseFromTokens[0],
        parsedZone = _parseFromTokens[1],
        invalid = _parseFromTokens[2];

    if (invalid) {
      return DateTime.invalid(invalid);
    } else {
      return parseDataToDateTime(vals, parsedZone, opts, "format " + fmt, text);
    }
  }
  /**
   * @deprecated use fromFormat instead
   */
  ;

  DateTime.fromString = function fromString(text, fmt, opts) {
    if (opts === void 0) {
      opts = {};
    }

    return DateTime.fromFormat(text, fmt, opts);
  }
  /**
   * Create a DateTime from a SQL date, time, or datetime
   * Defaults to en-US if no locale has been specified, regardless of the system's locale
   * @param {string} text - the string to parse
   * @param {Object} opts - options to affect the creation
   * @param {string|Zone} [opts.zone='local'] - use this zone if no offset is specified in the input string itself. Will also convert the DateTime to this zone
   * @param {boolean} [opts.setZone=false] - override the zone with a zone specified in the string itself, if it specifies one
   * @param {string} [opts.locale='en-US'] - a locale string to use when parsing. Will also set the DateTime to this locale
   * @param {string} opts.numberingSystem - the numbering system to use when parsing. Will also set the resulting DateTime to this numbering system
   * @param {string} opts.outputCalendar - the output calendar to set on the resulting DateTime instance
   * @example DateTime.fromSQL('2017-05-15')
   * @example DateTime.fromSQL('2017-05-15 09:12:34')
   * @example DateTime.fromSQL('2017-05-15 09:12:34.342')
   * @example DateTime.fromSQL('2017-05-15 09:12:34.342+06:00')
   * @example DateTime.fromSQL('2017-05-15 09:12:34.342 America/Los_Angeles')
   * @example DateTime.fromSQL('2017-05-15 09:12:34.342 America/Los_Angeles', { setZone: true })
   * @example DateTime.fromSQL('2017-05-15 09:12:34.342', { zone: 'America/Los_Angeles' })
   * @example DateTime.fromSQL('09:12:34.342')
   * @return {DateTime}
   */
  ;

  DateTime.fromSQL = function fromSQL(text, opts) {
    if (opts === void 0) {
      opts = {};
    }

    var _parseSQL = parseSQL(text),
        vals = _parseSQL[0],
        parsedZone = _parseSQL[1];

    return parseDataToDateTime(vals, parsedZone, opts, "SQL", text);
  }
  /**
   * Create an invalid DateTime.
   * @param {string} reason - simple string of why this DateTime is invalid. Should not contain parameters or anything else data-dependent
   * @param {string} [explanation=null] - longer explanation, may include parameters and other useful debugging information
   * @return {DateTime}
   */
  ;

  DateTime.invalid = function invalid(reason, explanation) {
    if (explanation === void 0) {
      explanation = null;
    }

    if (!reason) {
      throw new InvalidArgumentError("need to specify a reason the DateTime is invalid");
    }

    var invalid = reason instanceof Invalid ? reason : new Invalid(reason, explanation);

    if (Settings.throwOnInvalid) {
      throw new InvalidDateTimeError(invalid);
    } else {
      return new DateTime({
        invalid: invalid
      });
    }
  }
  /**
   * Check if an object is a DateTime. Works across context boundaries
   * @param {object} o
   * @return {boolean}
   */
  ;

  DateTime.isDateTime = function isDateTime(o) {
    return o && o.isLuxonDateTime || false;
  } // INFO

  /**
   * Get the value of unit.
   * @param {string} unit - a unit such as 'minute' or 'day'
   * @example DateTime.local(2017, 7, 4).get('month'); //=> 7
   * @example DateTime.local(2017, 7, 4).get('day'); //=> 4
   * @return {number}
   */
  ;

  var _proto = DateTime.prototype;

  _proto.get = function get(unit) {
    return this[unit];
  }
  /**
   * Returns whether the DateTime is valid. Invalid DateTimes occur when:
   * * The DateTime was created from invalid calendar information, such as the 13th month or February 30
   * * The DateTime was created by an operation on another invalid date
   * @type {boolean}
   */
  ;

  /**
   * Returns the resolved Intl options for this DateTime.
   * This is useful in understanding the behavior of formatting methods
   * @param {Object} opts - the same options as toLocaleString
   * @return {Object}
   */
  _proto.resolvedLocaleOpts = function resolvedLocaleOpts(opts) {
    if (opts === void 0) {
      opts = {};
    }

    var _Formatter$create$res = Formatter.create(this.loc.clone(opts), opts).resolvedOptions(this),
        locale = _Formatter$create$res.locale,
        numberingSystem = _Formatter$create$res.numberingSystem,
        calendar = _Formatter$create$res.calendar;

    return {
      locale: locale,
      numberingSystem: numberingSystem,
      outputCalendar: calendar
    };
  } // TRANSFORM

  /**
   * "Set" the DateTime's zone to UTC. Returns a newly-constructed DateTime.
   *
   * Equivalent to {@link setZone}('utc')
   * @param {number} [offset=0] - optionally, an offset from UTC in minutes
   * @param {Object} [opts={}] - options to pass to `setZone()`
   * @return {DateTime}
   */
  ;

  _proto.toUTC = function toUTC(offset, opts) {
    if (offset === void 0) {
      offset = 0;
    }

    if (opts === void 0) {
      opts = {};
    }

    return this.setZone(FixedOffsetZone.instance(offset), opts);
  }
  /**
   * "Set" the DateTime's zone to the host's local zone. Returns a newly-constructed DateTime.
   *
   * Equivalent to `setZone('local')`
   * @return {DateTime}
   */
  ;

  _proto.toLocal = function toLocal() {
    return this.setZone(Settings.defaultZone);
  }
  /**
   * "Set" the DateTime's zone to specified zone. Returns a newly-constructed DateTime.
   *
   * By default, the setter keeps the underlying time the same (as in, the same timestamp), but the new instance will report different local times and consider DSTs when making computations, as with {@link plus}. You may wish to use {@link toLocal} and {@link toUTC} which provide simple convenience wrappers for commonly used zones.
   * @param {string|Zone} [zone='local'] - a zone identifier. As a string, that can be any IANA zone supported by the host environment, or a fixed-offset name of the form 'UTC+3', or the strings 'local' or 'utc'. You may also supply an instance of a {@link Zone} class.
   * @param {Object} opts - options
   * @param {boolean} [opts.keepLocalTime=false] - If true, adjust the underlying time so that the local time stays the same, but in the target zone. You should rarely need this.
   * @return {DateTime}
   */
  ;

  _proto.setZone = function setZone(zone, _temp) {
    var _ref3 = _temp === void 0 ? {} : _temp,
        _ref3$keepLocalTime = _ref3.keepLocalTime,
        keepLocalTime = _ref3$keepLocalTime === void 0 ? false : _ref3$keepLocalTime,
        _ref3$keepCalendarTim = _ref3.keepCalendarTime,
        keepCalendarTime = _ref3$keepCalendarTim === void 0 ? false : _ref3$keepCalendarTim;

    zone = normalizeZone(zone, Settings.defaultZone);

    if (zone.equals(this.zone)) {
      return this;
    } else if (!zone.isValid) {
      return DateTime.invalid(unsupportedZone(zone));
    } else {
      var newTS = this.ts;

      if (keepLocalTime || keepCalendarTime) {
        var offsetGuess = zone.offset(this.ts);
        var asObj = this.toObject();

        var _objToTS3 = objToTS(asObj, offsetGuess, zone);

        newTS = _objToTS3[0];
      }

      return clone$1(this, {
        ts: newTS,
        zone: zone
      });
    }
  }
  /**
   * "Set" the locale, numberingSystem, or outputCalendar. Returns a newly-constructed DateTime.
   * @param {Object} properties - the properties to set
   * @example DateTime.local(2017, 5, 25).reconfigure({ locale: 'en-GB' })
   * @return {DateTime}
   */
  ;

  _proto.reconfigure = function reconfigure(_temp2) {
    var _ref4 = _temp2 === void 0 ? {} : _temp2,
        locale = _ref4.locale,
        numberingSystem = _ref4.numberingSystem,
        outputCalendar = _ref4.outputCalendar;

    var loc = this.loc.clone({
      locale: locale,
      numberingSystem: numberingSystem,
      outputCalendar: outputCalendar
    });
    return clone$1(this, {
      loc: loc
    });
  }
  /**
   * "Set" the locale. Returns a newly-constructed DateTime.
   * Just a convenient alias for reconfigure({ locale })
   * @example DateTime.local(2017, 5, 25).setLocale('en-GB')
   * @return {DateTime}
   */
  ;

  _proto.setLocale = function setLocale(locale) {
    return this.reconfigure({
      locale: locale
    });
  }
  /**
   * "Set" the values of specified units. Returns a newly-constructed DateTime.
   * You can only set units with this method; for "setting" metadata, see {@link reconfigure} and {@link setZone}.
   * @param {Object} values - a mapping of units to numbers
   * @example dt.set({ year: 2017 })
   * @example dt.set({ hour: 8, minute: 30 })
   * @example dt.set({ weekday: 5 })
   * @example dt.set({ year: 2005, ordinal: 234 })
   * @return {DateTime}
   */
  ;

  _proto.set = function set(values) {
    if (!this.isValid) return this;
    var normalized = normalizeObject(values, normalizeUnit, []),
        settingWeekStuff = !isUndefined(normalized.weekYear) || !isUndefined(normalized.weekNumber) || !isUndefined(normalized.weekday),
        containsOrdinal = !isUndefined(normalized.ordinal),
        containsGregorYear = !isUndefined(normalized.year),
        containsGregorMD = !isUndefined(normalized.month) || !isUndefined(normalized.day),
        containsGregor = containsGregorYear || containsGregorMD,
        definiteWeekDef = normalized.weekYear || normalized.weekNumber;

    if ((containsGregor || containsOrdinal) && definiteWeekDef) {
      throw new ConflictingSpecificationError("Can't mix weekYear/weekNumber units with year/month/day or ordinals");
    }

    if (containsGregorMD && containsOrdinal) {
      throw new ConflictingSpecificationError("Can't mix ordinal dates with month/day");
    }

    var mixed;

    if (settingWeekStuff) {
      mixed = weekToGregorian(Object.assign(gregorianToWeek(this.c), normalized));
    } else if (!isUndefined(normalized.ordinal)) {
      mixed = ordinalToGregorian(Object.assign(gregorianToOrdinal(this.c), normalized));
    } else {
      mixed = Object.assign(this.toObject(), normalized); // if we didn't set the day but we ended up on an overflow date,
      // use the last day of the right month

      if (isUndefined(normalized.day)) {
        mixed.day = Math.min(daysInMonth(mixed.year, mixed.month), mixed.day);
      }
    }

    var _objToTS4 = objToTS(mixed, this.o, this.zone),
        ts = _objToTS4[0],
        o = _objToTS4[1];

    return clone$1(this, {
      ts: ts,
      o: o
    });
  }
  /**
   * Add a period of time to this DateTime and return the resulting DateTime
   *
   * Adding hours, minutes, seconds, or milliseconds increases the timestamp by the right number of milliseconds. Adding days, months, or years shifts the calendar, accounting for DSTs and leap years along the way. Thus, `dt.plus({ hours: 24 })` may result in a different time than `dt.plus({ days: 1 })` if there's a DST shift in between.
   * @param {Duration|Object|number} duration - The amount to add. Either a Luxon Duration, a number of milliseconds, the object argument to Duration.fromObject()
   * @example DateTime.now().plus(123) //~> in 123 milliseconds
   * @example DateTime.now().plus({ minutes: 15 }) //~> in 15 minutes
   * @example DateTime.now().plus({ days: 1 }) //~> this time tomorrow
   * @example DateTime.now().plus({ days: -1 }) //~> this time yesterday
   * @example DateTime.now().plus({ hours: 3, minutes: 13 }) //~> in 3 hr, 13 min
   * @example DateTime.now().plus(Duration.fromObject({ hours: 3, minutes: 13 })) //~> in 3 hr, 13 min
   * @return {DateTime}
   */
  ;

  _proto.plus = function plus(duration) {
    if (!this.isValid) return this;
    var dur = friendlyDuration(duration);
    return clone$1(this, adjustTime(this, dur));
  }
  /**
   * Subtract a period of time to this DateTime and return the resulting DateTime
   * See {@link plus}
   * @param {Duration|Object|number} duration - The amount to subtract. Either a Luxon Duration, a number of milliseconds, the object argument to Duration.fromObject()
   @return {DateTime}
  */
  ;

  _proto.minus = function minus(duration) {
    if (!this.isValid) return this;
    var dur = friendlyDuration(duration).negate();
    return clone$1(this, adjustTime(this, dur));
  }
  /**
   * "Set" this DateTime to the beginning of a unit of time.
   * @param {string} unit - The unit to go to the beginning of. Can be 'year', 'quarter', 'month', 'week', 'day', 'hour', 'minute', 'second', or 'millisecond'.
   * @example DateTime.local(2014, 3, 3).startOf('month').toISODate(); //=> '2014-03-01'
   * @example DateTime.local(2014, 3, 3).startOf('year').toISODate(); //=> '2014-01-01'
   * @example DateTime.local(2014, 3, 3).startOf('week').toISODate(); //=> '2014-03-03', weeks always start on Mondays
   * @example DateTime.local(2014, 3, 3, 5, 30).startOf('day').toISOTime(); //=> '00:00.000-05:00'
   * @example DateTime.local(2014, 3, 3, 5, 30).startOf('hour').toISOTime(); //=> '05:00:00.000-05:00'
   * @return {DateTime}
   */
  ;

  _proto.startOf = function startOf(unit) {
    if (!this.isValid) return this;
    var o = {},
        normalizedUnit = Duration.normalizeUnit(unit);

    switch (normalizedUnit) {
      case "years":
        o.month = 1;
      // falls through

      case "quarters":
      case "months":
        o.day = 1;
      // falls through

      case "weeks":
      case "days":
        o.hour = 0;
      // falls through

      case "hours":
        o.minute = 0;
      // falls through

      case "minutes":
        o.second = 0;
      // falls through

      case "seconds":
        o.millisecond = 0;
        break;
      // no default, invalid units throw in normalizeUnit()
    }

    if (normalizedUnit === "weeks") {
      o.weekday = 1;
    }

    if (normalizedUnit === "quarters") {
      var q = Math.ceil(this.month / 3);
      o.month = (q - 1) * 3 + 1;
    }

    return this.set(o);
  }
  /**
   * "Set" this DateTime to the end (meaning the last millisecond) of a unit of time
   * @param {string} unit - The unit to go to the end of. Can be 'year', 'quarter', 'month', 'week', 'day', 'hour', 'minute', 'second', or 'millisecond'.
   * @example DateTime.local(2014, 3, 3).endOf('month').toISO(); //=> '2014-03-31T23:59:59.999-05:00'
   * @example DateTime.local(2014, 3, 3).endOf('year').toISO(); //=> '2014-12-31T23:59:59.999-05:00'
   * @example DateTime.local(2014, 3, 3).endOf('week').toISO(); // => '2014-03-09T23:59:59.999-05:00', weeks start on Mondays
   * @example DateTime.local(2014, 3, 3, 5, 30).endOf('day').toISO(); //=> '2014-03-03T23:59:59.999-05:00'
   * @example DateTime.local(2014, 3, 3, 5, 30).endOf('hour').toISO(); //=> '2014-03-03T05:59:59.999-05:00'
   * @return {DateTime}
   */
  ;

  _proto.endOf = function endOf(unit) {
    var _this$plus;

    return this.isValid ? this.plus((_this$plus = {}, _this$plus[unit] = 1, _this$plus)).startOf(unit).minus(1) : this;
  } // OUTPUT

  /**
   * Returns a string representation of this DateTime formatted according to the specified format string.
   * **You may not want this.** See {@link toLocaleString} for a more flexible formatting tool. For a table of tokens and their interpretations, see [here](https://moment.github.io/luxon/docs/manual/formatting.html#table-of-tokens).
   * Defaults to en-US if no locale has been specified, regardless of the system's locale.
   * @see https://moment.github.io/luxon/docs/manual/formatting.html#table-of-tokens
   * @param {string} fmt - the format string
   * @param {Object} opts - opts to override the configuration options
   * @example DateTime.now().toFormat('yyyy LLL dd') //=> '2017 Apr 22'
   * @example DateTime.now().setLocale('fr').toFormat('yyyy LLL dd') //=> '2017 avr. 22'
   * @example DateTime.now().toFormat('yyyy LLL dd', { locale: "fr" }) //=> '2017 avr. 22'
   * @example DateTime.now().toFormat("HH 'hours and' mm 'minutes'") //=> '20 hours and 55 minutes'
   * @return {string}
   */
  ;

  _proto.toFormat = function toFormat(fmt, opts) {
    if (opts === void 0) {
      opts = {};
    }

    return this.isValid ? Formatter.create(this.loc.redefaultToEN(opts)).formatDateTimeFromString(this, fmt) : INVALID$2;
  }
  /**
   * Returns a localized string representing this date. Accepts the same options as the Intl.DateTimeFormat constructor and any presets defined by Luxon, such as `DateTime.DATE_FULL` or `DateTime.TIME_SIMPLE`.
   * The exact behavior of this method is browser-specific, but in general it will return an appropriate representation
   * of the DateTime in the assigned locale.
   * Defaults to the system's locale if no locale has been specified
   * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DateTimeFormat
   * @param opts {Object} - Intl.DateTimeFormat constructor options and configuration options
   * @example DateTime.now().toLocaleString(); //=> 4/20/2017
   * @example DateTime.now().setLocale('en-gb').toLocaleString(); //=> '20/04/2017'
   * @example DateTime.now().toLocaleString({ locale: 'en-gb' }); //=> '20/04/2017'
   * @example DateTime.now().toLocaleString(DateTime.DATE_FULL); //=> 'April 20, 2017'
   * @example DateTime.now().toLocaleString(DateTime.TIME_SIMPLE); //=> '11:32 AM'
   * @example DateTime.now().toLocaleString(DateTime.DATETIME_SHORT); //=> '4/20/2017, 11:32 AM'
   * @example DateTime.now().toLocaleString({ weekday: 'long', month: 'long', day: '2-digit' }); //=> 'Thursday, April 20'
   * @example DateTime.now().toLocaleString({ weekday: 'short', month: 'short', day: '2-digit', hour: '2-digit', minute: '2-digit' }); //=> 'Thu, Apr 20, 11:27 AM'
   * @example DateTime.now().toLocaleString({ hour: '2-digit', minute: '2-digit', hour12: false }); //=> '11:32'
   * @return {string}
   */
  ;

  _proto.toLocaleString = function toLocaleString(opts) {
    if (opts === void 0) {
      opts = DATE_SHORT;
    }

    return this.isValid ? Formatter.create(this.loc.clone(opts), opts).formatDateTime(this) : INVALID$2;
  }
  /**
   * Returns an array of format "parts", meaning individual tokens along with metadata. This is allows callers to post-process individual sections of the formatted output.
   * Defaults to the system's locale if no locale has been specified
   * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DateTimeFormat/formatToParts
   * @param opts {Object} - Intl.DateTimeFormat constructor options, same as `toLocaleString`.
   * @example DateTime.now().toLocaleParts(); //=> [
   *                                   //=>   { type: 'day', value: '25' },
   *                                   //=>   { type: 'literal', value: '/' },
   *                                   //=>   { type: 'month', value: '05' },
   *                                   //=>   { type: 'literal', value: '/' },
   *                                   //=>   { type: 'year', value: '1982' }
   *                                   //=> ]
   */
  ;

  _proto.toLocaleParts = function toLocaleParts(opts) {
    if (opts === void 0) {
      opts = {};
    }

    return this.isValid ? Formatter.create(this.loc.clone(opts), opts).formatDateTimeParts(this) : [];
  }
  /**
   * Returns an ISO 8601-compliant string representation of this DateTime
   * @param {Object} opts - options
   * @param {boolean} [opts.suppressMilliseconds=false] - exclude milliseconds from the format if they're 0
   * @param {boolean} [opts.suppressSeconds=false] - exclude seconds from the format if they're 0
   * @param {boolean} [opts.includeOffset=true] - include the offset, such as 'Z' or '-04:00'
   * @param {string} [opts.format='extended'] - choose between the basic and extended format
   * @example DateTime.utc(1982, 5, 25).toISO() //=> '1982-05-25T00:00:00.000Z'
   * @example DateTime.now().toISO() //=> '2017-04-22T20:47:05.335-04:00'
   * @example DateTime.now().toISO({ includeOffset: false }) //=> '2017-04-22T20:47:05.335'
   * @example DateTime.now().toISO({ format: 'basic' }) //=> '20170422T204705.335-0400'
   * @return {string}
   */
  ;

  _proto.toISO = function toISO(opts) {
    if (opts === void 0) {
      opts = {};
    }

    if (!this.isValid) {
      return null;
    }

    return this.toISODate(opts) + "T" + this.toISOTime(opts);
  }
  /**
   * Returns an ISO 8601-compliant string representation of this DateTime's date component
   * @param {Object} opts - options
   * @param {string} [opts.format='extended'] - choose between the basic and extended format
   * @example DateTime.utc(1982, 5, 25).toISODate() //=> '1982-05-25'
   * @example DateTime.utc(1982, 5, 25).toISODate({ format: 'basic' }) //=> '19820525'
   * @return {string}
   */
  ;

  _proto.toISODate = function toISODate(_temp3) {
    var _ref5 = _temp3 === void 0 ? {} : _temp3,
        _ref5$format = _ref5.format,
        format = _ref5$format === void 0 ? "extended" : _ref5$format;

    var fmt = format === "basic" ? "yyyyMMdd" : "yyyy-MM-dd";

    if (this.year > 9999) {
      fmt = "+" + fmt;
    }

    return toTechFormat(this, fmt);
  }
  /**
   * Returns an ISO 8601-compliant string representation of this DateTime's week date
   * @example DateTime.utc(1982, 5, 25).toISOWeekDate() //=> '1982-W21-2'
   * @return {string}
   */
  ;

  _proto.toISOWeekDate = function toISOWeekDate() {
    return toTechFormat(this, "kkkk-'W'WW-c");
  }
  /**
   * Returns an ISO 8601-compliant string representation of this DateTime's time component
   * @param {Object} opts - options
   * @param {boolean} [opts.suppressMilliseconds=false] - exclude milliseconds from the format if they're 0
   * @param {boolean} [opts.suppressSeconds=false] - exclude seconds from the format if they're 0
   * @param {boolean} [opts.includeOffset=true] - include the offset, such as 'Z' or '-04:00'
   * @param {boolean} [opts.includePrefix=false] - include the `T` prefix
   * @param {string} [opts.format='extended'] - choose between the basic and extended format
   * @example DateTime.utc().set({ hour: 7, minute: 34 }).toISOTime() //=> '07:34:19.361Z'
   * @example DateTime.utc().set({ hour: 7, minute: 34, seconds: 0, milliseconds: 0 }).toISOTime({ suppressSeconds: true }) //=> '07:34Z'
   * @example DateTime.utc().set({ hour: 7, minute: 34 }).toISOTime({ format: 'basic' }) //=> '073419.361Z'
   * @example DateTime.utc().set({ hour: 7, minute: 34 }).toISOTime({ includePrefix: true }) //=> 'T07:34:19.361Z'
   * @return {string}
   */
  ;

  _proto.toISOTime = function toISOTime(_temp4) {
    var _ref6 = _temp4 === void 0 ? {} : _temp4,
        _ref6$suppressMillise = _ref6.suppressMilliseconds,
        suppressMilliseconds = _ref6$suppressMillise === void 0 ? false : _ref6$suppressMillise,
        _ref6$suppressSeconds = _ref6.suppressSeconds,
        suppressSeconds = _ref6$suppressSeconds === void 0 ? false : _ref6$suppressSeconds,
        _ref6$includeOffset = _ref6.includeOffset,
        includeOffset = _ref6$includeOffset === void 0 ? true : _ref6$includeOffset,
        _ref6$includePrefix = _ref6.includePrefix,
        includePrefix = _ref6$includePrefix === void 0 ? false : _ref6$includePrefix,
        _ref6$format = _ref6.format,
        format = _ref6$format === void 0 ? "extended" : _ref6$format;

    return toTechTimeFormat(this, {
      suppressSeconds: suppressSeconds,
      suppressMilliseconds: suppressMilliseconds,
      includeOffset: includeOffset,
      includePrefix: includePrefix,
      format: format
    });
  }
  /**
   * Returns an RFC 2822-compatible string representation of this DateTime, always in UTC
   * @example DateTime.utc(2014, 7, 13).toRFC2822() //=> 'Sun, 13 Jul 2014 00:00:00 +0000'
   * @example DateTime.local(2014, 7, 13).toRFC2822() //=> 'Sun, 13 Jul 2014 00:00:00 -0400'
   * @return {string}
   */
  ;

  _proto.toRFC2822 = function toRFC2822() {
    return toTechFormat(this, "EEE, dd LLL yyyy HH:mm:ss ZZZ", false);
  }
  /**
   * Returns a string representation of this DateTime appropriate for use in HTTP headers.
   * Specifically, the string conforms to RFC 1123.
   * @see https://www.w3.org/Protocols/rfc2616/rfc2616-sec3.html#sec3.3.1
   * @example DateTime.utc(2014, 7, 13).toHTTP() //=> 'Sun, 13 Jul 2014 00:00:00 GMT'
   * @example DateTime.utc(2014, 7, 13, 19).toHTTP() //=> 'Sun, 13 Jul 2014 19:00:00 GMT'
   * @return {string}
   */
  ;

  _proto.toHTTP = function toHTTP() {
    return toTechFormat(this.toUTC(), "EEE, dd LLL yyyy HH:mm:ss 'GMT'");
  }
  /**
   * Returns a string representation of this DateTime appropriate for use in SQL Date
   * @example DateTime.utc(2014, 7, 13).toSQLDate() //=> '2014-07-13'
   * @return {string}
   */
  ;

  _proto.toSQLDate = function toSQLDate() {
    return toTechFormat(this, "yyyy-MM-dd");
  }
  /**
   * Returns a string representation of this DateTime appropriate for use in SQL Time
   * @param {Object} opts - options
   * @param {boolean} [opts.includeZone=false] - include the zone, such as 'America/New_York'. Overrides includeOffset.
   * @param {boolean} [opts.includeOffset=true] - include the offset, such as 'Z' or '-04:00'
   * @example DateTime.utc().toSQL() //=> '05:15:16.345'
   * @example DateTime.now().toSQL() //=> '05:15:16.345 -04:00'
   * @example DateTime.now().toSQL({ includeOffset: false }) //=> '05:15:16.345'
   * @example DateTime.now().toSQL({ includeZone: false }) //=> '05:15:16.345 America/New_York'
   * @return {string}
   */
  ;

  _proto.toSQLTime = function toSQLTime(_temp5) {
    var _ref7 = _temp5 === void 0 ? {} : _temp5,
        _ref7$includeOffset = _ref7.includeOffset,
        includeOffset = _ref7$includeOffset === void 0 ? true : _ref7$includeOffset,
        _ref7$includeZone = _ref7.includeZone,
        includeZone = _ref7$includeZone === void 0 ? false : _ref7$includeZone;

    return toTechTimeFormat(this, {
      includeOffset: includeOffset,
      includeZone: includeZone,
      spaceZone: true
    });
  }
  /**
   * Returns a string representation of this DateTime appropriate for use in SQL DateTime
   * @param {Object} opts - options
   * @param {boolean} [opts.includeZone=false] - include the zone, such as 'America/New_York'. Overrides includeOffset.
   * @param {boolean} [opts.includeOffset=true] - include the offset, such as 'Z' or '-04:00'
   * @example DateTime.utc(2014, 7, 13).toSQL() //=> '2014-07-13 00:00:00.000 Z'
   * @example DateTime.local(2014, 7, 13).toSQL() //=> '2014-07-13 00:00:00.000 -04:00'
   * @example DateTime.local(2014, 7, 13).toSQL({ includeOffset: false }) //=> '2014-07-13 00:00:00.000'
   * @example DateTime.local(2014, 7, 13).toSQL({ includeZone: true }) //=> '2014-07-13 00:00:00.000 America/New_York'
   * @return {string}
   */
  ;

  _proto.toSQL = function toSQL(opts) {
    if (opts === void 0) {
      opts = {};
    }

    if (!this.isValid) {
      return null;
    }

    return this.toSQLDate() + " " + this.toSQLTime(opts);
  }
  /**
   * Returns a string representation of this DateTime appropriate for debugging
   * @return {string}
   */
  ;

  _proto.toString = function toString() {
    return this.isValid ? this.toISO() : INVALID$2;
  }
  /**
   * Returns the epoch milliseconds of this DateTime. Alias of {@link toMillis}
   * @return {number}
   */
  ;

  _proto.valueOf = function valueOf() {
    return this.toMillis();
  }
  /**
   * Returns the epoch milliseconds of this DateTime.
   * @return {number}
   */
  ;

  _proto.toMillis = function toMillis() {
    return this.isValid ? this.ts : NaN;
  }
  /**
   * Returns the epoch seconds of this DateTime.
   * @return {number}
   */
  ;

  _proto.toSeconds = function toSeconds() {
    return this.isValid ? this.ts / 1000 : NaN;
  }
  /**
   * Returns an ISO 8601 representation of this DateTime appropriate for use in JSON.
   * @return {string}
   */
  ;

  _proto.toJSON = function toJSON() {
    return this.toISO();
  }
  /**
   * Returns a BSON serializable equivalent to this DateTime.
   * @return {Date}
   */
  ;

  _proto.toBSON = function toBSON() {
    return this.toJSDate();
  }
  /**
   * Returns a JavaScript object with this DateTime's year, month, day, and so on.
   * @param opts - options for generating the object
   * @param {boolean} [opts.includeConfig=false] - include configuration attributes in the output
   * @example DateTime.now().toObject() //=> { year: 2017, month: 4, day: 22, hour: 20, minute: 49, second: 42, millisecond: 268 }
   * @return {Object}
   */
  ;

  _proto.toObject = function toObject(opts) {
    if (opts === void 0) {
      opts = {};
    }

    if (!this.isValid) return {};
    var base = Object.assign({}, this.c);

    if (opts.includeConfig) {
      base.outputCalendar = this.outputCalendar;
      base.numberingSystem = this.loc.numberingSystem;
      base.locale = this.loc.locale;
    }

    return base;
  }
  /**
   * Returns a JavaScript Date equivalent to this DateTime.
   * @return {Date}
   */
  ;

  _proto.toJSDate = function toJSDate() {
    return new Date(this.isValid ? this.ts : NaN);
  } // COMPARE

  /**
   * Return the difference between two DateTimes as a Duration.
   * @param {DateTime} otherDateTime - the DateTime to compare this one to
   * @param {string|string[]} [unit=['milliseconds']] - the unit or array of units (such as 'hours' or 'days') to include in the duration.
   * @param {Object} opts - options that affect the creation of the Duration
   * @param {string} [opts.conversionAccuracy='casual'] - the conversion system to use
   * @example
   * var i1 = DateTime.fromISO('1982-05-25T09:45'),
   *     i2 = DateTime.fromISO('1983-10-14T10:30');
   * i2.diff(i1).toObject() //=> { milliseconds: 43807500000 }
   * i2.diff(i1, 'hours').toObject() //=> { hours: 12168.75 }
   * i2.diff(i1, ['months', 'days']).toObject() //=> { months: 16, days: 19.03125 }
   * i2.diff(i1, ['months', 'days', 'hours']).toObject() //=> { months: 16, days: 19, hours: 0.75 }
   * @return {Duration}
   */
  ;

  _proto.diff = function diff(otherDateTime, unit, opts) {
    if (unit === void 0) {
      unit = "milliseconds";
    }

    if (opts === void 0) {
      opts = {};
    }

    if (!this.isValid || !otherDateTime.isValid) {
      return Duration.invalid(this.invalid || otherDateTime.invalid, "created by diffing an invalid DateTime");
    }

    var durOpts = Object.assign({
      locale: this.locale,
      numberingSystem: this.numberingSystem
    }, opts);

    var units = maybeArray(unit).map(Duration.normalizeUnit),
        otherIsLater = otherDateTime.valueOf() > this.valueOf(),
        earlier = otherIsLater ? this : otherDateTime,
        later = otherIsLater ? otherDateTime : this,
        diffed = _diff(earlier, later, units, durOpts);

    return otherIsLater ? diffed.negate() : diffed;
  }
  /**
   * Return the difference between this DateTime and right now.
   * See {@link diff}
   * @param {string|string[]} [unit=['milliseconds']] - the unit or units units (such as 'hours' or 'days') to include in the duration
   * @param {Object} opts - options that affect the creation of the Duration
   * @param {string} [opts.conversionAccuracy='casual'] - the conversion system to use
   * @return {Duration}
   */
  ;

  _proto.diffNow = function diffNow(unit, opts) {
    if (unit === void 0) {
      unit = "milliseconds";
    }

    if (opts === void 0) {
      opts = {};
    }

    return this.diff(DateTime.now(), unit, opts);
  }
  /**
   * Return an Interval spanning between this DateTime and another DateTime
   * @param {DateTime} otherDateTime - the other end point of the Interval
   * @return {Interval}
   */
  ;

  _proto.until = function until(otherDateTime) {
    return this.isValid ? Interval.fromDateTimes(this, otherDateTime) : this;
  }
  /**
   * Return whether this DateTime is in the same unit of time as another DateTime.
   * Higher-order units must also be identical for this function to return `true`.
   * Note that time zones are **ignored** in this comparison, which compares the **local** calendar time. Use {@link setZone} to convert one of the dates if needed.
   * @param {DateTime} otherDateTime - the other DateTime
   * @param {string} unit - the unit of time to check sameness on
   * @example DateTime.now().hasSame(otherDT, 'day'); //~> true if otherDT is in the same current calendar day
   * @return {boolean}
   */
  ;

  _proto.hasSame = function hasSame(otherDateTime, unit) {
    if (!this.isValid) return false;
    var inputMs = otherDateTime.valueOf();
    var otherZoneDateTime = this.setZone(otherDateTime.zone, {
      keepLocalTime: true
    });
    return otherZoneDateTime.startOf(unit) <= inputMs && inputMs <= otherZoneDateTime.endOf(unit);
  }
  /**
   * Equality check
   * Two DateTimes are equal iff they represent the same millisecond, have the same zone and location, and are both valid.
   * To compare just the millisecond values, use `+dt1 === +dt2`.
   * @param {DateTime} other - the other DateTime
   * @return {boolean}
   */
  ;

  _proto.equals = function equals(other) {
    return this.isValid && other.isValid && this.valueOf() === other.valueOf() && this.zone.equals(other.zone) && this.loc.equals(other.loc);
  }
  /**
   * Returns a string representation of a this time relative to now, such as "in two days". Can only internationalize if your
   * platform supports Intl.RelativeTimeFormat. Rounds down by default.
   * @param {Object} options - options that affect the output
   * @param {DateTime} [options.base=DateTime.now()] - the DateTime to use as the basis to which this time is compared. Defaults to now.
   * @param {string} [options.style="long"] - the style of units, must be "long", "short", or "narrow"
   * @param {string|string[]} options.unit - use a specific unit or array of units; if omitted, or an array, the method will pick the best unit. Use an array or one of "years", "quarters", "months", "weeks", "days", "hours", "minutes", or "seconds"
   * @param {boolean} [options.round=true] - whether to round the numbers in the output.
   * @param {number} [options.padding=0] - padding in milliseconds. This allows you to round up the result if it fits inside the threshold. Don't use in combination with {round: false} because the decimal output will include the padding.
   * @param {string} options.locale - override the locale of this DateTime
   * @param {string} options.numberingSystem - override the numberingSystem of this DateTime. The Intl system may choose not to honor this
   * @example DateTime.now().plus({ days: 1 }).toRelative() //=> "in 1 day"
   * @example DateTime.now().setLocale("es").toRelative({ days: 1 }) //=> "dentro de 1 día"
   * @example DateTime.now().plus({ days: 1 }).toRelative({ locale: "fr" }) //=> "dans 23 heures"
   * @example DateTime.now().minus({ days: 2 }).toRelative() //=> "2 days ago"
   * @example DateTime.now().minus({ days: 2 }).toRelative({ unit: "hours" }) //=> "48 hours ago"
   * @example DateTime.now().minus({ hours: 36 }).toRelative({ round: false }) //=> "1.5 days ago"
   */
  ;

  _proto.toRelative = function toRelative(options) {
    if (options === void 0) {
      options = {};
    }

    if (!this.isValid) return null;
    var base = options.base || DateTime.fromObject({
      zone: this.zone
    }),
        padding = options.padding ? this < base ? -options.padding : options.padding : 0;
    var units = ["years", "months", "days", "hours", "minutes", "seconds"];
    var unit = options.unit;

    if (Array.isArray(options.unit)) {
      units = options.unit;
      unit = undefined;
    }

    return diffRelative(base, this.plus(padding), Object.assign(options, {
      numeric: "always",
      units: units,
      unit: unit
    }));
  }
  /**
   * Returns a string representation of this date relative to today, such as "yesterday" or "next month".
   * Only internationalizes on platforms that supports Intl.RelativeTimeFormat.
   * @param {Object} options - options that affect the output
   * @param {DateTime} [options.base=DateTime.now()] - the DateTime to use as the basis to which this time is compared. Defaults to now.
   * @param {string} options.locale - override the locale of this DateTime
   * @param {string} options.unit - use a specific unit; if omitted, the method will pick the unit. Use one of "years", "quarters", "months", "weeks", or "days"
   * @param {string} options.numberingSystem - override the numberingSystem of this DateTime. The Intl system may choose not to honor this
   * @example DateTime.now().plus({ days: 1 }).toRelativeCalendar() //=> "tomorrow"
   * @example DateTime.now().setLocale("es").plus({ days: 1 }).toRelative() //=> ""mañana"
   * @example DateTime.now().plus({ days: 1 }).toRelativeCalendar({ locale: "fr" }) //=> "demain"
   * @example DateTime.now().minus({ days: 2 }).toRelativeCalendar() //=> "2 days ago"
   */
  ;

  _proto.toRelativeCalendar = function toRelativeCalendar(options) {
    if (options === void 0) {
      options = {};
    }

    if (!this.isValid) return null;
    return diffRelative(options.base || DateTime.fromObject({
      zone: this.zone
    }), this, Object.assign(options, {
      numeric: "auto",
      units: ["years", "months", "days"],
      calendary: true
    }));
  }
  /**
   * Return the min of several date times
   * @param {...DateTime} dateTimes - the DateTimes from which to choose the minimum
   * @return {DateTime} the min DateTime, or undefined if called with no argument
   */
  ;

  DateTime.min = function min() {
    for (var _len = arguments.length, dateTimes = new Array(_len), _key = 0; _key < _len; _key++) {
      dateTimes[_key] = arguments[_key];
    }

    if (!dateTimes.every(DateTime.isDateTime)) {
      throw new InvalidArgumentError("min requires all arguments be DateTimes");
    }

    return bestBy(dateTimes, function (i) {
      return i.valueOf();
    }, Math.min);
  }
  /**
   * Return the max of several date times
   * @param {...DateTime} dateTimes - the DateTimes from which to choose the maximum
   * @return {DateTime} the max DateTime, or undefined if called with no argument
   */
  ;

  DateTime.max = function max() {
    for (var _len2 = arguments.length, dateTimes = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      dateTimes[_key2] = arguments[_key2];
    }

    if (!dateTimes.every(DateTime.isDateTime)) {
      throw new InvalidArgumentError("max requires all arguments be DateTimes");
    }

    return bestBy(dateTimes, function (i) {
      return i.valueOf();
    }, Math.max);
  } // MISC

  /**
   * Explain how a string would be parsed by fromFormat()
   * @param {string} text - the string to parse
   * @param {string} fmt - the format the string is expected to be in (see description)
   * @param {Object} options - options taken by fromFormat()
   * @return {Object}
   */
  ;

  DateTime.fromFormatExplain = function fromFormatExplain(text, fmt, options) {
    if (options === void 0) {
      options = {};
    }

    var _options = options,
        _options$locale = _options.locale,
        locale = _options$locale === void 0 ? null : _options$locale,
        _options$numberingSys = _options.numberingSystem,
        numberingSystem = _options$numberingSys === void 0 ? null : _options$numberingSys,
        localeToUse = Locale.fromOpts({
      locale: locale,
      numberingSystem: numberingSystem,
      defaultToEN: true
    });
    return explainFromTokens(localeToUse, text, fmt);
  }
  /**
   * @deprecated use fromFormatExplain instead
   */
  ;

  DateTime.fromStringExplain = function fromStringExplain(text, fmt, options) {
    if (options === void 0) {
      options = {};
    }

    return DateTime.fromFormatExplain(text, fmt, options);
  } // FORMAT PRESETS

  /**
   * {@link toLocaleString} format like 10/14/1983
   * @type {Object}
   */
  ;

  _createClass(DateTime, [{
    key: "isValid",
    get: function get() {
      return this.invalid === null;
    }
    /**
     * Returns an error code if this DateTime is invalid, or null if the DateTime is valid
     * @type {string}
     */

  }, {
    key: "invalidReason",
    get: function get() {
      return this.invalid ? this.invalid.reason : null;
    }
    /**
     * Returns an explanation of why this DateTime became invalid, or null if the DateTime is valid
     * @type {string}
     */

  }, {
    key: "invalidExplanation",
    get: function get() {
      return this.invalid ? this.invalid.explanation : null;
    }
    /**
     * Get the locale of a DateTime, such 'en-GB'. The locale is used when formatting the DateTime
     *
     * @type {string}
     */

  }, {
    key: "locale",
    get: function get() {
      return this.isValid ? this.loc.locale : null;
    }
    /**
     * Get the numbering system of a DateTime, such 'beng'. The numbering system is used when formatting the DateTime
     *
     * @type {string}
     */

  }, {
    key: "numberingSystem",
    get: function get() {
      return this.isValid ? this.loc.numberingSystem : null;
    }
    /**
     * Get the output calendar of a DateTime, such 'islamic'. The output calendar is used when formatting the DateTime
     *
     * @type {string}
     */

  }, {
    key: "outputCalendar",
    get: function get() {
      return this.isValid ? this.loc.outputCalendar : null;
    }
    /**
     * Get the time zone associated with this DateTime.
     * @type {Zone}
     */

  }, {
    key: "zone",
    get: function get() {
      return this._zone;
    }
    /**
     * Get the name of the time zone.
     * @type {string}
     */

  }, {
    key: "zoneName",
    get: function get() {
      return this.isValid ? this.zone.name : null;
    }
    /**
     * Get the year
     * @example DateTime.local(2017, 5, 25).year //=> 2017
     * @type {number}
     */

  }, {
    key: "year",
    get: function get() {
      return this.isValid ? this.c.year : NaN;
    }
    /**
     * Get the quarter
     * @example DateTime.local(2017, 5, 25).quarter //=> 2
     * @type {number}
     */

  }, {
    key: "quarter",
    get: function get() {
      return this.isValid ? Math.ceil(this.c.month / 3) : NaN;
    }
    /**
     * Get the month (1-12).
     * @example DateTime.local(2017, 5, 25).month //=> 5
     * @type {number}
     */

  }, {
    key: "month",
    get: function get() {
      return this.isValid ? this.c.month : NaN;
    }
    /**
     * Get the day of the month (1-30ish).
     * @example DateTime.local(2017, 5, 25).day //=> 25
     * @type {number}
     */

  }, {
    key: "day",
    get: function get() {
      return this.isValid ? this.c.day : NaN;
    }
    /**
     * Get the hour of the day (0-23).
     * @example DateTime.local(2017, 5, 25, 9).hour //=> 9
     * @type {number}
     */

  }, {
    key: "hour",
    get: function get() {
      return this.isValid ? this.c.hour : NaN;
    }
    /**
     * Get the minute of the hour (0-59).
     * @example DateTime.local(2017, 5, 25, 9, 30).minute //=> 30
     * @type {number}
     */

  }, {
    key: "minute",
    get: function get() {
      return this.isValid ? this.c.minute : NaN;
    }
    /**
     * Get the second of the minute (0-59).
     * @example DateTime.local(2017, 5, 25, 9, 30, 52).second //=> 52
     * @type {number}
     */

  }, {
    key: "second",
    get: function get() {
      return this.isValid ? this.c.second : NaN;
    }
    /**
     * Get the millisecond of the second (0-999).
     * @example DateTime.local(2017, 5, 25, 9, 30, 52, 654).millisecond //=> 654
     * @type {number}
     */

  }, {
    key: "millisecond",
    get: function get() {
      return this.isValid ? this.c.millisecond : NaN;
    }
    /**
     * Get the week year
     * @see https://en.wikipedia.org/wiki/ISO_week_date
     * @example DateTime.local(2014, 12, 31).weekYear //=> 2015
     * @type {number}
     */

  }, {
    key: "weekYear",
    get: function get() {
      return this.isValid ? possiblyCachedWeekData(this).weekYear : NaN;
    }
    /**
     * Get the week number of the week year (1-52ish).
     * @see https://en.wikipedia.org/wiki/ISO_week_date
     * @example DateTime.local(2017, 5, 25).weekNumber //=> 21
     * @type {number}
     */

  }, {
    key: "weekNumber",
    get: function get() {
      return this.isValid ? possiblyCachedWeekData(this).weekNumber : NaN;
    }
    /**
     * Get the day of the week.
     * 1 is Monday and 7 is Sunday
     * @see https://en.wikipedia.org/wiki/ISO_week_date
     * @example DateTime.local(2014, 11, 31).weekday //=> 4
     * @type {number}
     */

  }, {
    key: "weekday",
    get: function get() {
      return this.isValid ? possiblyCachedWeekData(this).weekday : NaN;
    }
    /**
     * Get the ordinal (meaning the day of the year)
     * @example DateTime.local(2017, 5, 25).ordinal //=> 145
     * @type {number|DateTime}
     */

  }, {
    key: "ordinal",
    get: function get() {
      return this.isValid ? gregorianToOrdinal(this.c).ordinal : NaN;
    }
    /**
     * Get the human readable short month name, such as 'Oct'.
     * Defaults to the system's locale if no locale has been specified
     * @example DateTime.local(2017, 10, 30).monthShort //=> Oct
     * @type {string}
     */

  }, {
    key: "monthShort",
    get: function get() {
      return this.isValid ? Info.months("short", {
        locObj: this.loc
      })[this.month - 1] : null;
    }
    /**
     * Get the human readable long month name, such as 'October'.
     * Defaults to the system's locale if no locale has been specified
     * @example DateTime.local(2017, 10, 30).monthLong //=> October
     * @type {string}
     */

  }, {
    key: "monthLong",
    get: function get() {
      return this.isValid ? Info.months("long", {
        locObj: this.loc
      })[this.month - 1] : null;
    }
    /**
     * Get the human readable short weekday, such as 'Mon'.
     * Defaults to the system's locale if no locale has been specified
     * @example DateTime.local(2017, 10, 30).weekdayShort //=> Mon
     * @type {string}
     */

  }, {
    key: "weekdayShort",
    get: function get() {
      return this.isValid ? Info.weekdays("short", {
        locObj: this.loc
      })[this.weekday - 1] : null;
    }
    /**
     * Get the human readable long weekday, such as 'Monday'.
     * Defaults to the system's locale if no locale has been specified
     * @example DateTime.local(2017, 10, 30).weekdayLong //=> Monday
     * @type {string}
     */

  }, {
    key: "weekdayLong",
    get: function get() {
      return this.isValid ? Info.weekdays("long", {
        locObj: this.loc
      })[this.weekday - 1] : null;
    }
    /**
     * Get the UTC offset of this DateTime in minutes
     * @example DateTime.now().offset //=> -240
     * @example DateTime.utc().offset //=> 0
     * @type {number}
     */

  }, {
    key: "offset",
    get: function get() {
      return this.isValid ? +this.o : NaN;
    }
    /**
     * Get the short human name for the zone's current offset, for example "EST" or "EDT".
     * Defaults to the system's locale if no locale has been specified
     * @type {string}
     */

  }, {
    key: "offsetNameShort",
    get: function get() {
      if (this.isValid) {
        return this.zone.offsetName(this.ts, {
          format: "short",
          locale: this.locale
        });
      } else {
        return null;
      }
    }
    /**
     * Get the long human name for the zone's current offset, for example "Eastern Standard Time" or "Eastern Daylight Time".
     * Defaults to the system's locale if no locale has been specified
     * @type {string}
     */

  }, {
    key: "offsetNameLong",
    get: function get() {
      if (this.isValid) {
        return this.zone.offsetName(this.ts, {
          format: "long",
          locale: this.locale
        });
      } else {
        return null;
      }
    }
    /**
     * Get whether this zone's offset ever changes, as in a DST.
     * @type {boolean}
     */

  }, {
    key: "isOffsetFixed",
    get: function get() {
      return this.isValid ? this.zone.universal : null;
    }
    /**
     * Get whether the DateTime is in a DST.
     * @type {boolean}
     */

  }, {
    key: "isInDST",
    get: function get() {
      if (this.isOffsetFixed) {
        return false;
      } else {
        return this.offset > this.set({
          month: 1
        }).offset || this.offset > this.set({
          month: 5
        }).offset;
      }
    }
    /**
     * Returns true if this DateTime is in a leap year, false otherwise
     * @example DateTime.local(2016).isInLeapYear //=> true
     * @example DateTime.local(2013).isInLeapYear //=> false
     * @type {boolean}
     */

  }, {
    key: "isInLeapYear",
    get: function get() {
      return isLeapYear(this.year);
    }
    /**
     * Returns the number of days in this DateTime's month
     * @example DateTime.local(2016, 2).daysInMonth //=> 29
     * @example DateTime.local(2016, 3).daysInMonth //=> 31
     * @type {number}
     */

  }, {
    key: "daysInMonth",
    get: function get() {
      return daysInMonth(this.year, this.month);
    }
    /**
     * Returns the number of days in this DateTime's year
     * @example DateTime.local(2016).daysInYear //=> 366
     * @example DateTime.local(2013).daysInYear //=> 365
     * @type {number}
     */

  }, {
    key: "daysInYear",
    get: function get() {
      return this.isValid ? daysInYear(this.year) : NaN;
    }
    /**
     * Returns the number of weeks in this DateTime's year
     * @see https://en.wikipedia.org/wiki/ISO_week_date
     * @example DateTime.local(2004).weeksInWeekYear //=> 53
     * @example DateTime.local(2013).weeksInWeekYear //=> 52
     * @type {number}
     */

  }, {
    key: "weeksInWeekYear",
    get: function get() {
      return this.isValid ? weeksInWeekYear(this.weekYear) : NaN;
    }
  }], [{
    key: "DATE_SHORT",
    get: function get() {
      return DATE_SHORT;
    }
    /**
     * {@link toLocaleString} format like 'Oct 14, 1983'
     * @type {Object}
     */

  }, {
    key: "DATE_MED",
    get: function get() {
      return DATE_MED;
    }
    /**
     * {@link toLocaleString} format like 'Fri, Oct 14, 1983'
     * @type {Object}
     */

  }, {
    key: "DATE_MED_WITH_WEEKDAY",
    get: function get() {
      return DATE_MED_WITH_WEEKDAY;
    }
    /**
     * {@link toLocaleString} format like 'October 14, 1983'
     * @type {Object}
     */

  }, {
    key: "DATE_FULL",
    get: function get() {
      return DATE_FULL;
    }
    /**
     * {@link toLocaleString} format like 'Tuesday, October 14, 1983'
     * @type {Object}
     */

  }, {
    key: "DATE_HUGE",
    get: function get() {
      return DATE_HUGE;
    }
    /**
     * {@link toLocaleString} format like '09:30 AM'. Only 12-hour if the locale is.
     * @type {Object}
     */

  }, {
    key: "TIME_SIMPLE",
    get: function get() {
      return TIME_SIMPLE;
    }
    /**
     * {@link toLocaleString} format like '09:30:23 AM'. Only 12-hour if the locale is.
     * @type {Object}
     */

  }, {
    key: "TIME_WITH_SECONDS",
    get: function get() {
      return TIME_WITH_SECONDS;
    }
    /**
     * {@link toLocaleString} format like '09:30:23 AM EDT'. Only 12-hour if the locale is.
     * @type {Object}
     */

  }, {
    key: "TIME_WITH_SHORT_OFFSET",
    get: function get() {
      return TIME_WITH_SHORT_OFFSET;
    }
    /**
     * {@link toLocaleString} format like '09:30:23 AM Eastern Daylight Time'. Only 12-hour if the locale is.
     * @type {Object}
     */

  }, {
    key: "TIME_WITH_LONG_OFFSET",
    get: function get() {
      return TIME_WITH_LONG_OFFSET;
    }
    /**
     * {@link toLocaleString} format like '09:30', always 24-hour.
     * @type {Object}
     */

  }, {
    key: "TIME_24_SIMPLE",
    get: function get() {
      return TIME_24_SIMPLE;
    }
    /**
     * {@link toLocaleString} format like '09:30:23', always 24-hour.
     * @type {Object}
     */

  }, {
    key: "TIME_24_WITH_SECONDS",
    get: function get() {
      return TIME_24_WITH_SECONDS;
    }
    /**
     * {@link toLocaleString} format like '09:30:23 EDT', always 24-hour.
     * @type {Object}
     */

  }, {
    key: "TIME_24_WITH_SHORT_OFFSET",
    get: function get() {
      return TIME_24_WITH_SHORT_OFFSET;
    }
    /**
     * {@link toLocaleString} format like '09:30:23 Eastern Daylight Time', always 24-hour.
     * @type {Object}
     */

  }, {
    key: "TIME_24_WITH_LONG_OFFSET",
    get: function get() {
      return TIME_24_WITH_LONG_OFFSET;
    }
    /**
     * {@link toLocaleString} format like '10/14/1983, 9:30 AM'. Only 12-hour if the locale is.
     * @type {Object}
     */

  }, {
    key: "DATETIME_SHORT",
    get: function get() {
      return DATETIME_SHORT;
    }
    /**
     * {@link toLocaleString} format like '10/14/1983, 9:30:33 AM'. Only 12-hour if the locale is.
     * @type {Object}
     */

  }, {
    key: "DATETIME_SHORT_WITH_SECONDS",
    get: function get() {
      return DATETIME_SHORT_WITH_SECONDS;
    }
    /**
     * {@link toLocaleString} format like 'Oct 14, 1983, 9:30 AM'. Only 12-hour if the locale is.
     * @type {Object}
     */

  }, {
    key: "DATETIME_MED",
    get: function get() {
      return DATETIME_MED;
    }
    /**
     * {@link toLocaleString} format like 'Oct 14, 1983, 9:30:33 AM'. Only 12-hour if the locale is.
     * @type {Object}
     */

  }, {
    key: "DATETIME_MED_WITH_SECONDS",
    get: function get() {
      return DATETIME_MED_WITH_SECONDS;
    }
    /**
     * {@link toLocaleString} format like 'Fri, 14 Oct 1983, 9:30 AM'. Only 12-hour if the locale is.
     * @type {Object}
     */

  }, {
    key: "DATETIME_MED_WITH_WEEKDAY",
    get: function get() {
      return DATETIME_MED_WITH_WEEKDAY;
    }
    /**
     * {@link toLocaleString} format like 'October 14, 1983, 9:30 AM EDT'. Only 12-hour if the locale is.
     * @type {Object}
     */

  }, {
    key: "DATETIME_FULL",
    get: function get() {
      return DATETIME_FULL;
    }
    /**
     * {@link toLocaleString} format like 'October 14, 1983, 9:30:33 AM EDT'. Only 12-hour if the locale is.
     * @type {Object}
     */

  }, {
    key: "DATETIME_FULL_WITH_SECONDS",
    get: function get() {
      return DATETIME_FULL_WITH_SECONDS;
    }
    /**
     * {@link toLocaleString} format like 'Friday, October 14, 1983, 9:30 AM Eastern Daylight Time'. Only 12-hour if the locale is.
     * @type {Object}
     */

  }, {
    key: "DATETIME_HUGE",
    get: function get() {
      return DATETIME_HUGE;
    }
    /**
     * {@link toLocaleString} format like 'Friday, October 14, 1983, 9:30:33 AM Eastern Daylight Time'. Only 12-hour if the locale is.
     * @type {Object}
     */

  }, {
    key: "DATETIME_HUGE_WITH_SECONDS",
    get: function get() {
      return DATETIME_HUGE_WITH_SECONDS;
    }
  }]);

  return DateTime;
}();
function friendlyDateTime(dateTimeish) {
  if (DateTime.isDateTime(dateTimeish)) {
    return dateTimeish;
  } else if (dateTimeish && dateTimeish.valueOf && isNumber(dateTimeish.valueOf())) {
    return DateTime.fromJSDate(dateTimeish);
  } else if (dateTimeish && typeof dateTimeish === "object") {
    return DateTime.fromObject(dateTimeish);
  } else {
    throw new InvalidArgumentError("Unknown datetime argument: " + dateTimeish + ", of type " + typeof dateTimeish);
  }
}

var VERSION = "1.27.0";

exports.DateTime = DateTime;
exports.Duration = Duration;
exports.FixedOffsetZone = FixedOffsetZone;
exports.IANAZone = IANAZone;
exports.Info = Info;
exports.Interval = Interval;
exports.InvalidZone = InvalidZone;
exports.LocalZone = LocalZone;
exports.Settings = Settings;
exports.VERSION = VERSION;
exports.Zone = Zone;

});

/** Functional return type for error handling. */
class Success {
    constructor(value) {
        this.value = value;
        this.successful = true;
    }
    map(f) {
        return new Success(f(this.value));
    }
    flatMap(f) {
        return f(this.value);
    }
    orElse(_value) {
        return this.value;
    }
    orElseThrow(_message) {
        return this.value;
    }
}
class Failure {
    constructor(error) {
        this.error = error;
        this.successful = false;
    }
    map(_f) {
        return this;
    }
    flatMap(_f) {
        return this;
    }
    orElse(value) {
        return value;
    }
    orElseThrow(message) {
        if (message)
            throw new Error(message(this.error));
        else
            throw new Error("" + this.error);
    }
}
var Result;
(function (Result) {
    function success(value) {
        return new Success(value);
    }
    Result.success = success;
    function failure(error) {
        return new Failure(error);
    }
    Result.failure = failure;
    function flatMap2(first, second, f) {
        if (first.successful) {
            if (second.successful)
                return f(first.value, second.value);
            else
                return failure(second.error);
        }
        else {
            return failure(first.error);
        }
    }
    Result.flatMap2 = flatMap2;
    function map2(first, second, f) {
        return flatMap2(first, second, (a, b) => success(f(a, b)));
    }
    Result.map2 = map2;
})(Result || (Result = {}));

/** Normalize a duration to all of the proper units. */
function normalizeDuration(dur) {
    return dur.shiftTo("years", "months", "weeks", "days", "hours", "minutes", "seconds", "milliseconds").normalize();
}
/** Get the folder containing the given path (i.e., like computing 'path/..') */
function getParentFolder(path) {
    return path.split("/").slice(0, -1).join("/");
}
/** Get the file name for the file, without any parent directories. */
function getFileName(path) {
    if (path.includes("/"))
        path = path.substring(path.lastIndexOf("/") + 1);
    if (path.endsWith(".md"))
        path = path.substring(0, path.length - 3);
    return path;
}
/** Get the extension of a file from the file path. */
function getExtension(path) {
    if (!path.includes("."))
        return "";
    return path.substring(path.lastIndexOf(".") + 1);
}
/** Try calling the given function; on failure, return the error message.  */
function tryOrPropogate(func) {
    try {
        return func();
    }
    catch (error) {
        return Result.failure("" + error + "\n\n" + error.stack);
    }
}

/** An Obsidian link with all associated metadata. */
class Link {
    constructor(fields) {
        Object.assign(this, fields);
    }
    static file(path, embed = false, display) {
        return new Link({
            path,
            embed,
            display,
            type: 'file'
        });
    }
    static header(path, header, embed, display) {
        return new Link({
            path,
            embed,
            display,
            subpath: header,
            type: 'header'
        });
    }
    static block(path, blockId, embed, display) {
        return new Link({
            path,
            embed,
            display,
            subpath: blockId,
            type: 'block'
        });
    }
    static fromObject(object) {
        return new Link(object);
    }
    equals(other) {
        return this.path == other.path
            && this.type == other.type
            && this.subpath == other.subpath;
    }
    toString() {
        return this.markdown();
    }
    /** Convert this link to a raw object which */
    toObject() {
        return { path: this.path, type: this.type, subpath: this.subpath, display: this.display, embed: this.embed };
    }
    /** Return a new link which points to the same location but with a new display value. */
    withDisplay(display) {
        return new Link(Object.assign({}, this, { display }));
    }
    /** Convert this link to markdown so it can be rendered. */
    markdown() {
        let result = (this.embed ? "!" : "") + "[[" + this.path;
        if (this.type == 'header')
            result += '#' + this.subpath;
        else if (this.type == 'block')
            result += '^' + this.subpath;
        if (this.display && !this.embed)
            result += '|' + this.display;
        else if (!this.embed)
            result += '|' + getFileName(this.path).replace(".md", "");
        result += ']]';
        return result;
    }
    /** The stripped name of the file this link points into. */
    fileName() {
        return getFileName(this.path).replace(".md", "");
    }
}
var Values;
(function (Values) {
    /** Convert an arbitary value into a reasonable, Markdown-friendly string if possible. */
    function toString(field, recursive = false) {
        let wrapped = wrapValue(field);
        if (!wrapped)
            return "null";
        switch (wrapped.type) {
            case "string": return wrapped.value;
            case "number":
            case "boolean":
            case "html":
            case "null":
                return "" + wrapped.value;
            case "link":
                return wrapped.value.markdown();
            case "function":
                return "<function>";
            case "array":
                let result = "";
                if (recursive)
                    result += "[";
                result += wrapped.value.map(f => toString(f, true)).join(", ");
                if (recursive)
                    result += "]";
                return result;
            case "object":
                return "{ " + Object.entries(wrapped.value).map(e => e[0] + ": " + toString(e[1], true)).join(", ") + " }";
            case "date":
                return wrapped.value.toLocaleString(luxon.DateTime.DATETIME_SHORT);
            case "duration":
                return wrapped.value.toISOTime();
        }
    }
    Values.toString = toString;
    /** Wrap a literal value so you can switch on it easily. */
    function wrapValue(val) {
        if (isNull(val))
            return { type: 'null', value: val };
        else if (isNumber(val))
            return { type: 'number', value: val };
        else if (isString(val))
            return { type: 'string', value: val };
        else if (isBoolean(val))
            return { type: 'boolean', value: val };
        else if (isDuration(val))
            return { type: 'duration', value: val };
        else if (isDate(val))
            return { type: 'date', value: val };
        else if (isHtml(val))
            return { type: 'html', value: val };
        else if (isArray(val))
            return { type: 'array', value: val };
        else if (isLink(val))
            return { type: 'link', value: val };
        else if (isFunction(val))
            return { type: 'function', value: val };
        else if (isObject(val))
            return { type: 'object', value: val };
        else
            return undefined;
    }
    Values.wrapValue = wrapValue;
    /** Compare two arbitrary JavaScript values. Produces a total ordering over ANY possible dataview value. */
    function compareValue(val1, val2, linkNormalizer) {
        // Handle undefined/nulls first.
        if (val1 === undefined)
            val1 = null;
        if (val2 === undefined)
            val2 = null;
        if (val1 === null && val2 === null)
            return 0;
        else if (val1 === null)
            return -1;
        else if (val2 === null)
            return 1;
        // A non-null value now which we can wrap & compare on.
        let wrap1 = wrapValue(val1);
        let wrap2 = wrapValue(val2);
        if (wrap1 === undefined && wrap2 === undefined)
            return 0;
        else if (wrap1 === undefined)
            return -1;
        else if (wrap2 === undefined)
            return 1;
        if (wrap1.type != wrap2.type)
            return wrap1.type.localeCompare(wrap2.type);
        switch (wrap1.type) {
            case "string":
                return wrap1.value.localeCompare(wrap2.value);
            case "number":
                if (wrap1.value < wrap2.value)
                    return -1;
                else if (wrap1.value == wrap2.value)
                    return 0;
                return 1;
            case "null":
                return 0;
            case "boolean":
                if (wrap1.value == wrap2.value)
                    return 0;
                else
                    return wrap1.value ? 1 : -1;
            case "link":
                let normalize = linkNormalizer !== null && linkNormalizer !== void 0 ? linkNormalizer : ((x) => x);
                return normalize(wrap1.value.path).localeCompare(normalize(wrap2.value.path));
            case "date":
                return (wrap1.value < wrap2.value) ? -1 : (wrap1.value.equals(wrap2.value) ? 0 : 1);
            case "duration":
                return wrap1.value < wrap2.value ? -1 : (wrap1.value.equals(wrap2.value) ? 0 : 1);
            case "array":
                let f1 = wrap1.value;
                let f2 = wrap2.value;
                for (let index = 0; index < Math.min(f1.length, f2.length); index++) {
                    let comp = compareValue(f1[index], f2[index]);
                    if (comp != 0)
                        return comp;
                }
                return f1.length - f2.length;
            case "object":
                let o1 = wrap1.value;
                let o2 = wrap2.value;
                let k1 = Array.from(Object.keys(o1));
                let k2 = Array.from(Object.keys(o2));
                k1.sort();
                k2.sort();
                let keyCompare = compareValue(k1, k2);
                if (keyCompare != 0)
                    return keyCompare;
                for (let key of k1) {
                    let comp = compareValue(o1[key], o2[key]);
                    if (comp != 0)
                        return comp;
                }
                return 0;
            case "html":
                return 0;
            case "function":
                return 0;
        }
    }
    Values.compareValue = compareValue;
    /** Find the corresponding Dataveiw type for an arbitrary value. */
    function typeOf(val) {
        var _a;
        return (_a = wrapValue(val)) === null || _a === void 0 ? void 0 : _a.type;
    }
    Values.typeOf = typeOf;
    /** Determine if the given value is "truthy" (i.e., is non-null and has data in it). */
    function isTruthy(field) {
        let wrapped = wrapValue(field);
        if (!wrapped)
            return false;
        switch (wrapped.type) {
            case "number":
                return wrapped.value != 0;
            case "string":
                return wrapped.value.length > 0;
            case "boolean":
                return wrapped.value;
            case "link":
                return !!wrapped.value.path;
            case "date":
                return wrapped.value.toMillis() != 0;
            case "duration":
                return wrapped.value.as("seconds") != 0;
            case "object":
                return Object.keys(wrapped.value).length > 0;
            case "array":
                return wrapped.value.length > 0;
            case "null":
                return false;
            case "html":
                return true;
            case "function":
                return true;
        }
    }
    Values.isTruthy = isTruthy;
    /** Deep copy a field. */
    function deepCopy(field) {
        if (Values.isArray(field)) {
            return [].concat(field.map(v => deepCopy(v)));
        }
        else if (Values.isObject(field)) {
            let result = {};
            for (let [key, value] of Object.entries(field))
                result[key] = deepCopy(value);
            return result;
        }
        else {
            return field;
        }
    }
    Values.deepCopy = deepCopy;
    function isString(val) {
        return typeof val == "string";
    }
    Values.isString = isString;
    function isNumber(val) {
        return typeof val == "number";
    }
    Values.isNumber = isNumber;
    function isDate(val) {
        return val instanceof luxon.DateTime;
    }
    Values.isDate = isDate;
    function isDuration(val) {
        return val instanceof luxon.Duration;
    }
    Values.isDuration = isDuration;
    function isNull(val) {
        return val === null || val === undefined;
    }
    Values.isNull = isNull;
    function isArray(val) {
        return Array.isArray(val);
    }
    Values.isArray = isArray;
    function isBoolean(val) {
        return typeof val === "boolean";
    }
    Values.isBoolean = isBoolean;
    function isLink(val) {
        return val instanceof Link;
    }
    Values.isLink = isLink;
    function isHtml(val) {
        if (typeof HTMLElement !== 'undefined') {
            return val instanceof HTMLElement;
        }
        else {
            return false;
        }
    }
    Values.isHtml = isHtml;
    function isObject(val) {
        return typeof val == "object" && !isHtml(val) && !isArray(val) && !isDuration(val) && !isDate(val)
            && !isLink(val);
    }
    Values.isObject = isObject;
    function isFunction(val) {
        return typeof val == "function";
    }
    Values.isFunction = isFunction;
})(Values || (Values = {}));
var TransferableValues;
(function (TransferableValues) {
    /** Convert a literal value to a serializer-friendly transferable value. Does not work for all types. */
    function transferable(value) {
        let wrapped = Values.wrapValue(value);
        if (wrapped === undefined)
            return undefined;
        switch (wrapped.type) {
            case "null":
            case "number":
            case "string":
            case "boolean":
                return wrapped.value;
            case "date":
                return { "___transfer-type": "date", "value": wrapped.value.toObject({ includeConfig: true }) };
            case "duration":
                return { "___transfer-type": "duration", "value": wrapped.value.toObject({ includeConfig: true }) };
            case "array":
                return wrapped.value.map(v => transferable(v));
            case "object":
                let result = {};
                for (let [key, value] of Object.entries(wrapped.value))
                    result[key] = transferable(value);
                return result;
            case "link":
                return { "___transfer-type": "link", "value": wrapped.value.toObject() };
            default:
                return undefined;
        }
    }
    TransferableValues.transferable = transferable;
    /** Convert a transferable value back to a literal value we can work with. */
    function value(transferable) {
        if (transferable === null || transferable === undefined) {
            return null;
        }
        else if (typeof transferable === "object" && "___transfer-type" in transferable) {
            switch (transferable["___transfer-type"]) {
                case "date": return luxon.DateTime.fromObject(transferable.value);
                case "duration": return luxon.Duration.fromObject(transferable.value);
                case "link": return Link.fromObject(transferable.value);
            }
        }
        else if (Array.isArray(transferable)) {
            return transferable.map(v => value(v));
        }
        return transferable;
    }
    TransferableValues.value = value;
})(TransferableValues || (TransferableValues = {}));

/** Implementation of DataArray, minus the dynamic variable access, which is implemented via proxy. */
class DataArrayImpl {
    constructor(values, defaultComparator = Values.compareValue) {
        this.values = values;
        this.defaultComparator = defaultComparator;
        this.length = values.length;
    }
    static wrap(arr, defaultComparator = Values.compareValue) {
        return new Proxy(new DataArrayImpl(arr, defaultComparator), DataArrayImpl.ARRAY_PROXY);
    }
    where(predicate) {
        return DataArrayImpl.wrap(this.values.filter(predicate), this.defaultComparator);
    }
    filter(predicate) {
        return this.where(predicate);
    }
    map(f) {
        return DataArrayImpl.wrap(this.values.map(f), this.defaultComparator);
    }
    flatMap(f) {
        let result = [];
        for (let index = 0; index < this.length; index++) {
            let value = f(this.values[index], index, this.values);
            if (!value || value.length == 0)
                continue;
            for (let r of value)
                result.push(r);
        }
        return DataArrayImpl.wrap(result, this.defaultComparator);
    }
    mutate(f) {
        this.values.forEach(f);
        return this;
    }
    limit(count) {
        return DataArrayImpl.wrap(this.values.slice(0, count), this.defaultComparator);
    }
    slice(start, end) {
        return DataArrayImpl.wrap(this.values.slice(start, end), this.defaultComparator);
    }
    concat(other) {
        return DataArrayImpl.wrap(this.values.concat(other.values), this.defaultComparator);
    }
    /** Return the first index of the given (optionally starting the search) */
    indexOf(element, fromIndex) {
        return this.findIndex(e => this.defaultComparator(e, element) == 0, fromIndex);
    }
    /** Return the first element that satisfies the given predicate. */
    find(pred) {
        let index = this.findIndex(pred);
        if (index == -1)
            return undefined;
        else
            return this.values[index];
    }
    findIndex(pred, fromIndex) {
        for (let index = fromIndex !== null && fromIndex !== void 0 ? fromIndex : 0; index < this.length; index++) {
            if (pred(this.values[index], index, this.values))
                return index;
        }
        return -1;
    }
    includes(element) {
        return this.indexOf(element, 0) != -1;
    }
    join(sep) {
        return this.map(s => Values.toString(s)).array().join(sep !== null && sep !== void 0 ? sep : ", ");
    }
    sort(key, direction, comparator) {
        if (this.values.length == 0)
            return this;
        let realComparator = comparator !== null && comparator !== void 0 ? comparator : this.defaultComparator;
        // Associate each entry with it's index for the key function, and then do a normal sort.
        let copy = [].concat(this.array()).map((elem, index) => { return { index: index, value: elem }; });
        copy.sort((a, b) => {
            let aKey = key(a.value, a.index, this.values);
            let bKey = key(b.value, b.index, this.values);
            return direction === 'desc' ? -realComparator(aKey, bKey) : realComparator(aKey, bKey);
        });
        return DataArrayImpl.wrap(copy.map(e => e.value), this.defaultComparator);
    }
    groupBy(key, comparator) {
        if (this.values.length == 0)
            return DataArrayImpl.wrap([], this.defaultComparator);
        // JavaScript sucks and we can't make hash maps over arbitrary types (only strings/ints), so
        // we do a poor man algorithm where we SORT, followed by grouping.
        let intermediate = this.sort(key, "asc", comparator);
        comparator = comparator !== null && comparator !== void 0 ? comparator : this.defaultComparator;
        let result = [];
        let currentRow = [intermediate[0]];
        let current = key(intermediate[0], 0, intermediate.values);
        for (let index = 1; index < intermediate.length; index++) {
            let newKey = key(intermediate[index], index, intermediate.values);
            if (comparator(current, newKey) != 0) {
                result.push({ key: current, rows: DataArrayImpl.wrap(currentRow, this.defaultComparator) });
                current = newKey;
                currentRow = [intermediate[index]];
            }
            else {
                currentRow.push(intermediate[index]);
            }
        }
        result.push({ key: current, rows: DataArrayImpl.wrap(currentRow, this.defaultComparator) });
        return DataArrayImpl.wrap(result, this.defaultComparator);
    }
    distinct(key, comparator) {
        if (this.values.length == 0)
            return this;
        let realKey = key !== null && key !== void 0 ? key : (x => x);
        // For similar reasons to groupBy, do a sort and take the first element of each block.
        let intermediate = this
            .map((x, index) => { return { key: realKey(x, index, this.values), value: x }; })
            .sort(x => x.key, "asc", comparator);
        comparator = comparator !== null && comparator !== void 0 ? comparator : this.defaultComparator;
        let result = [intermediate[0].value];
        for (let index = 1; index < intermediate.length; index++) {
            if (comparator(intermediate[index - 1].key, intermediate[index].key) != 0) {
                result.push(intermediate[index].value);
            }
        }
        return DataArrayImpl.wrap(result, this.defaultComparator);
    }
    every(f) { return this.values.every(f); }
    some(f) { return this.values.some(f); }
    none(f) { return this.values.every((v, i, a) => !f(v, i, a)); }
    first() { return this.values.length > 0 ? this.values[0] : undefined; }
    last() { return this.values.length > 0 ? this.values[this.values.length - 1] : undefined; }
    to(key) {
        let result = [];
        for (let child of this.values) {
            let value = child[key];
            if (value === undefined || value === null)
                continue;
            if (Array.isArray(value) || DataArray.isDataArray(value))
                value.forEach(v => result.push(v));
            else
                result.push(value);
        }
        return DataArrayImpl.wrap(result, this.defaultComparator);
    }
    expand(key) {
        let result = [];
        let queue = [].concat(this.values);
        while (queue.length > 0) {
            let next = queue.pop();
            let value = next[key];
            if (value === undefined || value === null)
                continue;
            if (Array.isArray(value))
                value.forEach(v => queue.push(v));
            else if (value instanceof DataArrayImpl)
                value.forEach(v => queue.push(v));
            else
                queue.push(value);
            result.push(next);
        }
        return DataArray.wrap(result);
    }
    forEach(f) {
        for (let index = 0; index < this.values.length; index++) {
            f(this.values[index], index, this.values);
        }
    }
    array() { return [].concat(this.values); }
    [Symbol.iterator]() {
        return this.values[Symbol.iterator]();
    }
    toString() {
        return this.values.toString();
    }
}
DataArrayImpl.ARRAY_FUNCTIONS = new Set([
    "where", "filter", "map", "flatMap", "slice", "concat", "indexOf", "find", "findIndex", "includes",
    "join", "sort", "groupBy", "distinct", "every", "some", "none", "first", "last", "to",
    "expand", "forEach", "length", "values", "array", "defaultComparator", "toString"
]);
DataArrayImpl.ARRAY_PROXY = {
    get: function (target, prop, reciever) {
        if (typeof prop === "symbol")
            return target[prop];
        else if (typeof prop === "number")
            return target.values[prop];
        else if (!isNaN(parseInt(prop)))
            return target.values[parseInt(prop)];
        else if (DataArrayImpl.ARRAY_FUNCTIONS.has(prop.toString()))
            return target[prop.toString()];
        return target.to(prop);
    }
};
/** Provides utility functions for generating data arrays. */
var DataArray;
(function (DataArray) {
    /** Create a new Dataview data array. */
    function wrap(raw) {
        return DataArrayImpl.wrap(raw);
    }
    DataArray.wrap = wrap;
    /** Create a new DataArray from an iterable object. */
    function from(raw) {
        let data = [];
        for (let elem of raw)
            data.push(elem);
        return DataArrayImpl.wrap(data);
    }
    DataArray.from = from;
    /** Return true if the given object is a data array. */
    function isDataArray(obj) {
        return obj instanceof DataArrayImpl;
    }
    DataArray.isDataArray = isDataArray;
})(DataArray || (DataArray = {}));

/** Make an Obsidian-friendly internal link. */
function createAnchor(text, target, internal) {
    let a = document.createElement("a");
    a.dataset.href = target;
    a.href = target;
    a.text = text;
    a.target = "_blank";
    a.rel = "noopener";
    if (internal)
        a.addClass("internal-link");
    return a;
}
/** Render simple fields compactly, removing wrapping content like '<p>'. */
function renderCompactMarkdown(markdown, container, sourcePath, component) {
    var _a, _b;
    return __awaiter(this, void 0, void 0, function* () {
        let subcontainer = container.createSpan();
        yield obsidian.MarkdownRenderer.renderMarkdown(markdown, subcontainer, sourcePath, component);
        if (subcontainer.children.length == 1 && subcontainer.querySelector("p")) {
            subcontainer.innerHTML = (_b = (_a = subcontainer.querySelector("p")) === null || _a === void 0 ? void 0 : _a.innerHTML) !== null && _b !== void 0 ? _b : "";
        }
    });
}
/** Create a list inside the given container, with the given data. */
function renderList(container, elements, component, originFile, nullField) {
    return __awaiter(this, void 0, void 0, function* () {
        let listEl = container.createEl('ul', { cls: ['dataview', 'list-view-ul'] });
        for (let elem of elements) {
            let li = listEl.createEl('li');
            yield renderValue(elem, li, originFile, component, nullField, true);
        }
    });
}
/** Create a table inside the given container, with the given data. */
function renderTable(container, headers, values, component, originFile, nullField) {
    return __awaiter(this, void 0, void 0, function* () {
        let tableEl = container.createEl('table', { cls: ['dataview', 'table-view-table'] });
        let theadEl = tableEl.createEl('thead', { cls: 'table-view-thead' });
        let headerEl = theadEl.createEl('tr', { cls: 'table-view-tr-header' });
        for (let header of headers) {
            headerEl.createEl('th', { text: header, cls: 'table-view-th' });
        }
        let tbodyEl = tableEl.createEl('tbody', { cls: 'table-view-tbody' });
        for (let row of values) {
            let rowEl = tbodyEl.createEl('tr');
            for (let value of row) {
                let td = rowEl.createEl('td');
                yield renderValue(value, td, originFile, component, nullField, true);
            }
        }
    });
}
/** Render a pre block with an error in it; returns the element to allow for dynamic updating. */
function renderErrorPre(container, error) {
    let pre = container.createEl('pre', { cls: ["dataview", "dataview-error"] });
    pre.appendText(error);
    return pre;
}
/** Render a DateTime in a minimal format to save space. */
function renderMinimalDate(time) {
    // If there is no relevant time specified, fall back to just rendering the date.
    if (time.second == 0 && time.minute == 0 && time.hour == 0) {
        return time.toLocaleString(luxon.DateTime.DATE_MED_WITH_WEEKDAY);
    }
    return time.toLocaleString(luxon.DateTime.DATETIME_MED);
}
/** Render a duration in a minimal format to save space. */
function renderMinimalDuration(dur) {
    dur = normalizeDuration(dur);
    let result = "";
    if (dur.years)
        result += `${dur.years} years, `;
    if (dur.months)
        result += `${dur.months} months, `;
    if (dur.weeks)
        result += `${dur.weeks} weeks, `;
    if (dur.days)
        result += `${dur.days} days, `;
    if (dur.hours)
        result += `${dur.hours} hours, `;
    if (dur.minutes)
        result += `${dur.minutes} minutes, `;
    if (dur.seconds)
        result += `${Math.round(dur.seconds)} seconds, `;
    if (dur.milliseconds)
        result += `${Math.round(dur.milliseconds)} ms, `;
    if (result.endsWith(", "))
        result = result.substring(0, result.length - 2);
    return result;
}
/** Prettily render a value into a container with the given settings. */
function renderValue(field, container, originFile, component, nullField, expandList = false) {
    return __awaiter(this, void 0, void 0, function* () {
        if (Values.isNull(field)) {
            yield renderCompactMarkdown(nullField, container, originFile, component);
        }
        else if (Values.isDate(field)) {
            container.appendText(renderMinimalDate(field));
        }
        else if (Values.isDuration(field)) {
            container.appendText(renderMinimalDuration(field));
        }
        else if (Values.isString(field) || Values.isBoolean(field) || Values.isNumber(field)) {
            yield renderCompactMarkdown("" + field, container, originFile, component);
        }
        else if (Values.isArray(field) || DataArray.isDataArray(field)) {
            if (expandList) {
                let list = container.createEl('ul', { cls: ['dataview', 'dataview-ul', 'dataview-result-list-ul'] });
                for (let child of field) {
                    let li = list.createEl('li', { cls: 'dataview-result-list-li' });
                    yield renderValue(child, li, originFile, component, nullField, expandList);
                }
            }
            else {
                if (field.length == 0) {
                    container.appendText("<empty list>");
                    return;
                }
                let span = container.createEl('span', { cls: ['dataview', 'dataview-result-list-span'] });
                let first = true;
                for (let val of field) {
                    if (first)
                        first = false;
                    else
                        span.appendText(", ");
                    yield renderValue(val, span, originFile, component, nullField, expandList);
                }
            }
        }
        else if (Values.isLink(field)) {
            yield renderCompactMarkdown(field.markdown(), container, originFile, component);
        }
        else if (Values.isHtml(field)) {
            container.appendChild(field);
        }
        else if (Values.isFunction(field)) {
            container.appendText("<function>");
        }
        else if (Values.isObject(field)) {
            if (expandList) {
                let list = container.createEl('ul', { cls: ['dataview', 'dataview-ul', 'dataview-result-object-ul'] });
                for (let [key, value] of Object.entries(field)) {
                    let li = list.createEl('li', { cls: ['dataview', 'dataview-li', 'dataview-result-object-li'] });
                    li.appendText(key + ": ");
                    yield renderValue(value, li, originFile, component, nullField, expandList);
                }
            }
            else {
                if (Object.keys(field).length == 0) {
                    container.appendText("<empty object>");
                    return;
                }
                let span = container.createEl("span", { cls: ['dataview', 'dataview-result-object-span'] });
                let first = true;
                for (let [key, value] of Object.entries(field)) {
                    if (first)
                        first = false;
                    else
                        span.appendText(", ");
                    span.appendText(key + ": ");
                    yield renderValue(value, span, originFile, component, nullField, expandList);
                }
            }
        }
        else {
            container.appendText("Unrecognized: " + JSON.stringify(field));
        }
    });
}

var parsimmon_umd_min = createCommonjsModule(function (module, exports) {
!function(n,t){module.exports=t();}("undefined"!=typeof self?self:commonjsGlobal,function(){return function(n){var t={};function r(e){if(t[e])return t[e].exports;var u=t[e]={i:e,l:!1,exports:{}};return n[e].call(u.exports,u,u.exports,r),u.l=!0,u.exports}return r.m=n,r.c=t,r.d=function(n,t,e){r.o(n,t)||Object.defineProperty(n,t,{configurable:!1,enumerable:!0,get:e});},r.r=function(n){Object.defineProperty(n,"__esModule",{value:!0});},r.n=function(n){var t=n&&n.__esModule?function(){return n.default}:function(){return n};return r.d(t,"a",t),t},r.o=function(n,t){return Object.prototype.hasOwnProperty.call(n,t)},r.p="",r(r.s=0)}([function(n,t,r){function e(n){if(!(this instanceof e))return new e(n);this._=n;}var u=e.prototype;function o(n,t){for(var r=0;r<n;r++)t(r);}function i(n,t,r){return function(n,t){o(t.length,function(r){n(t[r],r,t);});}(function(r,e,u){t=n(t,r,e,u);},r),t}function f(n,t){return i(function(t,r,e,u){return t.concat([n(r,e,u)])},[],t)}function a(n,t){var r={v:0,buf:t};return o(n,function(){var n;r={v:r.v<<1|(n=r.buf,n[0]>>7),buf:function(n){var t=i(function(n,t,r,e){return n.concat(r===e.length-1?Buffer.from([t,0]).readUInt16BE(0):e.readUInt16BE(r))},[],n);return Buffer.from(f(function(n){return (n<<1&65535)>>8},t))}(r.buf)};}),r}function c(){return "undefined"!=typeof Buffer}function s(){if(!c())throw new Error("Buffer global does not exist; please use webpack if you need to parse Buffers in the browser.")}function l(n){s();var t=i(function(n,t){return n+t},0,n);if(t%8!=0)throw new Error("The bits ["+n.join(", ")+"] add up to "+t+" which is not an even number of bytes; the total should be divisible by 8");var r,u=t/8,o=(r=function(n){return n>48},i(function(n,t){return n||(r(t)?t:n)},null,n));if(o)throw new Error(o+" bit range requested exceeds 48 bit (6 byte) Number max.");return new e(function(t,r){var e=u+r;return e>t.length?x(r,u.toString()+" bytes"):b(e,i(function(n,t){var r=a(t,n.buf);return {coll:n.coll.concat(r.v),buf:r.buf}},{coll:[],buf:t.slice(r,e)},n).coll)})}function p(n,t){return new e(function(r,e){return s(),e+t>r.length?x(e,t+" bytes for "+n):b(e+t,r.slice(e,e+t))})}function h(n,t){if("number"!=typeof(r=t)||Math.floor(r)!==r||t<0||t>6)throw new Error(n+" requires integer length in range [0, 6].");var r;}function d(n){return h("uintBE",n),p("uintBE("+n+")",n).map(function(t){return t.readUIntBE(0,n)})}function v(n){return h("uintLE",n),p("uintLE("+n+")",n).map(function(t){return t.readUIntLE(0,n)})}function g(n){return h("intBE",n),p("intBE("+n+")",n).map(function(t){return t.readIntBE(0,n)})}function m(n){return h("intLE",n),p("intLE("+n+")",n).map(function(t){return t.readIntLE(0,n)})}function y(n){return n instanceof e}function E(n){return "[object Array]"==={}.toString.call(n)}function w(n){return c()&&Buffer.isBuffer(n)}function b(n,t){return {status:!0,index:n,value:t,furthest:-1,expected:[]}}function x(n,t){return E(t)||(t=[t]),{status:!1,index:-1,value:null,furthest:n,expected:t}}function B(n,t){if(!t)return n;if(n.furthest>t.furthest)return n;var r=n.furthest===t.furthest?function(n,t){if(function(){if(void 0!==e._supportsSet)return e._supportsSet;var n="undefined"!=typeof Set;return e._supportsSet=n,n}()&&Array.from){for(var r=new Set(n),u=0;u<t.length;u++)r.add(t[u]);var o=Array.from(r);return o.sort(),o}for(var i={},f=0;f<n.length;f++)i[n[f]]=!0;for(var a=0;a<t.length;a++)i[t[a]]=!0;var c=[];for(var s in i)({}).hasOwnProperty.call(i,s)&&c.push(s);return c.sort(),c}(n.expected,t.expected):t.expected;return {status:n.status,index:n.index,value:n.value,furthest:t.furthest,expected:r}}var j={};function S(n,t){if(w(n))return {offset:t,line:-1,column:-1};n in j||(j[n]={});for(var r=j[n],e=0,u=0,o=0,i=t;i>=0;){if(i in r){e=r[i].line,0===o&&(o=r[i].lineStart);break}"\n"===n.charAt(i)&&(u++,0===o&&(o=i+1)),i--;}var f=e+u,a=t-o;return r[t]={line:f,lineStart:o},{offset:t,line:f+1,column:a+1}}function _(n){if(!y(n))throw new Error("not a parser: "+n)}function L(n,t){return "string"==typeof n?n.charAt(t):n[t]}function O(n){if("number"!=typeof n)throw new Error("not a number: "+n)}function k(n){if("function"!=typeof n)throw new Error("not a function: "+n)}function P(n){if("string"!=typeof n)throw new Error("not a string: "+n)}var q=2,A=3,I=8,F=5*I,M=4*I,z="  ";function R(n,t){return new Array(t+1).join(n)}function U(n,t,r){var e=t-n.length;return e<=0?n:R(r,e)+n}function W(n,t,r,e){return {from:n-t>0?n-t:0,to:n+r>e?e:n+r}}function D(n,t){var r,e,u,o,a,c=t.index,s=c.offset,l=1;if(s===n.length)return "Got the end of the input";if(w(n)){var p=s-s%I,h=s-p,d=W(p,F,M+I,n.length),v=f(function(n){return f(function(n){return U(n.toString(16),2,"0")},n)},function(n,t){var r=n.length,e=[],u=0;if(r<=t)return [n.slice()];for(var o=0;o<r;o++)e[u]||e.push([]),e[u].push(n[o]),(o+1)%t==0&&u++;return e}(n.slice(d.from,d.to).toJSON().data,I));o=function(n){return 0===n.from&&1===n.to?{from:n.from,to:n.to}:{from:n.from/I,to:Math.floor(n.to/I)}}(d),e=p/I,r=3*h,h>=4&&(r+=1),l=2,u=f(function(n){return n.length<=4?n.join(" "):n.slice(0,4).join(" ")+"  "+n.slice(4).join(" ")},v),(a=(8*(o.to>0?o.to-1:o.to)).toString(16).length)<2&&(a=2);}else {var g=n.split(/\r\n|[\n\r\u2028\u2029]/);r=c.column-1,e=c.line-1,o=W(e,q,A,g.length),u=g.slice(o.from,o.to),a=o.to.toString().length;}var m=e-o.from;return w(n)&&(a=(8*(o.to>0?o.to-1:o.to)).toString(16).length)<2&&(a=2),i(function(t,e,u){var i,f=u===m,c=f?"> ":z;return i=w(n)?U((8*(o.from+u)).toString(16),a,"0"):U((o.from+u+1).toString(),a," "),[].concat(t,[c+i+" | "+e],f?[z+R(" ",a)+" | "+U("",r," ")+R("^",l)]:[])},[],u).join("\n")}function N(n,t){return ["\n","-- PARSING FAILED "+R("-",50),"\n\n",D(n,t),"\n\n",(r=t.expected,1===r.length?"Expected:\n\n"+r[0]:"Expected one of the following: \n\n"+r.join(", ")),"\n"].join("");var r;}function G(n){return void 0!==n.flags?n.flags:[n.global?"g":"",n.ignoreCase?"i":"",n.multiline?"m":"",n.unicode?"u":"",n.sticky?"y":""].join("")}function C(){for(var n=[].slice.call(arguments),t=n.length,r=0;r<t;r+=1)_(n[r]);return e(function(r,e){for(var u,o=new Array(t),i=0;i<t;i+=1){if(!(u=B(n[i]._(r,e),u)).status)return u;o[i]=u.value,e=u.index;}return B(b(e,o),u)})}function J(){var n=[].slice.call(arguments);if(0===n.length)throw new Error("seqMap needs at least one argument");var t=n.pop();return k(t),C.apply(null,n).map(function(n){return t.apply(null,n)})}function T(){var n=[].slice.call(arguments),t=n.length;if(0===t)return Y("zero alternates");for(var r=0;r<t;r+=1)_(n[r]);return e(function(t,r){for(var e,u=0;u<n.length;u+=1)if((e=B(n[u]._(t,r),e)).status)return e;return e})}function V(n,t){return H(n,t).or(X([]))}function H(n,t){return _(n),_(t),J(n,t.then(n).many(),function(n,t){return [n].concat(t)})}function K(n){P(n);var t="'"+n+"'";return e(function(r,e){var u=e+n.length,o=r.slice(e,u);return o===n?b(u,o):x(e,t)})}function Q(n,t){!function(n){if(!(n instanceof RegExp))throw new Error("not a regexp: "+n);for(var t=G(n),r=0;r<t.length;r++){var e=t.charAt(r);if("i"!==e&&"m"!==e&&"u"!==e&&"s"!==e)throw new Error('unsupported regexp flag "'+e+'": '+n)}}(n),arguments.length>=2?O(t):t=0;var r=function(n){return RegExp("^(?:"+n.source+")",G(n))}(n),u=""+n;return e(function(n,e){var o=r.exec(n.slice(e));if(o){if(0<=t&&t<=o.length){var i=o[0],f=o[t];return b(e+i.length,f)}return x(e,"valid match group (0 to "+o.length+") in "+u)}return x(e,u)})}function X(n){return e(function(t,r){return b(r,n)})}function Y(n){return e(function(t,r){return x(r,n)})}function Z(n){if(y(n))return e(function(t,r){var e=n._(t,r);return e.index=r,e.value="",e});if("string"==typeof n)return Z(K(n));if(n instanceof RegExp)return Z(Q(n));throw new Error("not a string, regexp, or parser: "+n)}function $(n){return _(n),e(function(t,r){var e=n._(t,r),u=t.slice(r,e.index);return e.status?x(r,'not "'+u+'"'):b(r,null)})}function nn(n){return k(n),e(function(t,r){var e=L(t,r);return r<t.length&&n(e)?b(r+1,e):x(r,"a character/byte matching "+n)})}function tn(n,t){arguments.length<2&&(t=n,n=void 0);var r=e(function(n,e){return r._=t()._,r._(n,e)});return n?r.desc(n):r}function rn(){return Y("fantasy-land/empty")}u.parse=function(n){if("string"!=typeof n&&!w(n))throw new Error(".parse must be called with a string or Buffer as its argument");var t,r=this.skip(fn)._(n,0);return t=r.status?{status:!0,value:r.value}:{status:!1,index:S(n,r.furthest),expected:r.expected},delete j[n],t},u.tryParse=function(n){var t=this.parse(n);if(t.status)return t.value;var r=N(n,t),e=new Error(r);throw e.type="ParsimmonError",e.result=t,e},u.assert=function(n,t){return this.chain(function(r){return n(r)?X(r):Y(t)})},u.or=function(n){return T(this,n)},u.trim=function(n){return this.wrap(n,n)},u.wrap=function(n,t){return J(n,this,t,function(n,t){return t})},u.thru=function(n){return n(this)},u.then=function(n){return _(n),C(this,n).map(function(n){return n[1]})},u.many=function(){var n=this;return e(function(t,r){for(var e=[],u=void 0;;){if(!(u=B(n._(t,r),u)).status)return B(b(r,e),u);if(r===u.index)throw new Error("infinite loop detected in .many() parser --- calling .many() on a parser which can accept zero characters is usually the cause");r=u.index,e.push(u.value);}})},u.tieWith=function(n){return P(n),this.map(function(t){if(function(n){if(!E(n))throw new Error("not an array: "+n)}(t),t.length){P(t[0]);for(var r=t[0],e=1;e<t.length;e++)P(t[e]),r+=n+t[e];return r}return ""})},u.tie=function(){return this.tieWith("")},u.times=function(n,t){var r=this;return arguments.length<2&&(t=n),O(n),O(t),e(function(e,u){for(var o=[],i=void 0,f=void 0,a=0;a<n;a+=1){if(f=B(i=r._(e,u),f),!i.status)return f;u=i.index,o.push(i.value);}for(;a<t&&(f=B(i=r._(e,u),f),i.status);a+=1)u=i.index,o.push(i.value);return B(b(u,o),f)})},u.result=function(n){return this.map(function(){return n})},u.atMost=function(n){return this.times(0,n)},u.atLeast=function(n){return J(this.times(n),this.many(),function(n,t){return n.concat(t)})},u.map=function(n){k(n);var t=this;return e(function(r,e){var u=t._(r,e);return u.status?B(b(u.index,n(u.value)),u):u})},u.contramap=function(n){k(n);var t=this;return e(function(r,e){var u=t.parse(n(r.slice(e)));return u.status?b(e+r.length,u.value):u})},u.promap=function(n,t){return k(n),k(t),this.contramap(n).map(t)},u.skip=function(n){return C(this,n).map(function(n){return n[0]})},u.mark=function(){return J(en,this,en,function(n,t,r){return {start:n,value:t,end:r}})},u.node=function(n){return J(en,this,en,function(t,r,e){return {name:n,value:r,start:t,end:e}})},u.sepBy=function(n){return V(this,n)},u.sepBy1=function(n){return H(this,n)},u.lookahead=function(n){return this.skip(Z(n))},u.notFollowedBy=function(n){return this.skip($(n))},u.desc=function(n){E(n)||(n=[n]);var t=this;return e(function(r,e){var u=t._(r,e);return u.status||(u.expected=n),u})},u.fallback=function(n){return this.or(X(n))},u.ap=function(n){return J(n,this,function(n,t){return n(t)})},u.chain=function(n){var t=this;return e(function(r,e){var u=t._(r,e);return u.status?B(n(u.value)._(r,u.index),u):u})},u.concat=u.or,u.empty=rn,u.of=X,u["fantasy-land/ap"]=u.ap,u["fantasy-land/chain"]=u.chain,u["fantasy-land/concat"]=u.concat,u["fantasy-land/empty"]=u.empty,u["fantasy-land/of"]=u.of,u["fantasy-land/map"]=u.map;var en=e(function(n,t){return b(t,S(n,t))}),un=e(function(n,t){return t>=n.length?x(t,"any character/byte"):b(t+1,L(n,t))}),on=e(function(n,t){return b(n.length,n.slice(t))}),fn=e(function(n,t){return t<n.length?x(t,"EOF"):b(t,null)}),an=Q(/[0-9]/).desc("a digit"),cn=Q(/[0-9]*/).desc("optional digits"),sn=Q(/[a-z]/i).desc("a letter"),ln=Q(/[a-z]*/i).desc("optional letters"),pn=Q(/\s*/).desc("optional whitespace"),hn=Q(/\s+/).desc("whitespace"),dn=K("\r"),vn=K("\n"),gn=K("\r\n"),mn=T(gn,vn,dn).desc("newline"),yn=T(mn,fn);e.all=on,e.alt=T,e.any=un,e.cr=dn,e.createLanguage=function(n){var t={};for(var r in n)({}).hasOwnProperty.call(n,r)&&function(r){t[r]=tn(function(){return n[r](t)});}(r);return t},e.crlf=gn,e.custom=function(n){return e(n(b,x))},e.digit=an,e.digits=cn,e.empty=rn,e.end=yn,e.eof=fn,e.fail=Y,e.formatError=N,e.index=en,e.isParser=y,e.lazy=tn,e.letter=sn,e.letters=ln,e.lf=vn,e.lookahead=Z,e.makeFailure=x,e.makeSuccess=b,e.newline=mn,e.noneOf=function(n){return nn(function(t){return n.indexOf(t)<0}).desc("none of '"+n+"'")},e.notFollowedBy=$,e.of=X,e.oneOf=function(n){for(var t=n.split(""),r=0;r<t.length;r++)t[r]="'"+t[r]+"'";return nn(function(t){return n.indexOf(t)>=0}).desc(t)},e.optWhitespace=pn,e.Parser=e,e.range=function(n,t){return nn(function(r){return n<=r&&r<=t}).desc(n+"-"+t)},e.regex=Q,e.regexp=Q,e.sepBy=V,e.sepBy1=H,e.seq=C,e.seqMap=J,e.seqObj=function(){for(var n,t={},r=0,u=(n=arguments,Array.prototype.slice.call(n)),o=u.length,i=0;i<o;i+=1){var f=u[i];if(!y(f)){if(E(f)&&2===f.length&&"string"==typeof f[0]&&y(f[1])){var a=f[0];if(Object.prototype.hasOwnProperty.call(t,a))throw new Error("seqObj: duplicate key "+a);t[a]=!0,r++;continue}throw new Error("seqObj arguments must be parsers or [string, parser] array pairs.")}}if(0===r)throw new Error("seqObj expects at least one named parser, found zero");return e(function(n,t){for(var r,e={},i=0;i<o;i+=1){var f,a;if(E(u[i])?(f=u[i][0],a=u[i][1]):(f=null,a=u[i]),!(r=B(a._(n,t),r)).status)return r;f&&(e[f]=r.value),t=r.index;}return B(b(t,e),r)})},e.string=K,e.succeed=X,e.takeWhile=function(n){return k(n),e(function(t,r){for(var e=r;e<t.length&&n(L(t,e));)e++;return b(e,t.slice(r,e))})},e.test=nn,e.whitespace=hn,e["fantasy-land/empty"]=rn,e["fantasy-land/of"]=X,e.Binary={bitSeq:l,bitSeqObj:function(n){s();var t={},r=0,e=f(function(n){if(E(n)){var e=n;if(2!==e.length)throw new Error("["+e.join(", ")+"] should be length 2, got length "+e.length);if(P(e[0]),O(e[1]),Object.prototype.hasOwnProperty.call(t,e[0]))throw new Error("duplicate key in bitSeqObj: "+e[0]);return t[e[0]]=!0,r++,e}return O(n),[null,n]},n);if(r<1)throw new Error("bitSeqObj expects at least one named pair, got ["+n.join(", ")+"]");var u=f(function(n){return n[0]},e);return l(f(function(n){return n[1]},e)).map(function(n){return i(function(n,t){return null!==t[0]&&(n[t[0]]=t[1]),n},{},f(function(t,r){return [t,n[r]]},u))})},byte:function(n){if(s(),O(n),n>255)throw new Error("Value specified to byte constructor ("+n+"=0x"+n.toString(16)+") is larger in value than a single byte.");var t=(n>15?"0x":"0x0")+n.toString(16);return e(function(r,e){var u=L(r,e);return u===n?b(e+1,u):x(e,t)})},buffer:function(n){return p("buffer",n).map(function(n){return Buffer.from(n)})},encodedString:function(n,t){return p("string",t).map(function(t){return t.toString(n)})},uintBE:d,uint8BE:d(1),uint16BE:d(2),uint32BE:d(4),uintLE:v,uint8LE:v(1),uint16LE:v(2),uint32LE:v(4),intBE:g,int8BE:g(1),int16BE:g(2),int32BE:g(4),intLE:m,int8LE:m(1),int16LE:m(2),int32LE:m(4),floatBE:p("floatBE",4).map(function(n){return n.readFloatBE(0)}),floatLE:p("floatLE",4).map(function(n){return n.readFloatLE(0)}),doubleBE:p("doubleBE",8).map(function(n){return n.readDoubleBE(0)}),doubleLE:p("doubleLE",8).map(function(n){return n.readDoubleLE(0)})},n.exports=e;}])});
});

/** Utility methods for creating & comparing fields. */
var Fields;
(function (Fields) {
    function variable(name) {
        return { type: 'variable', name };
    }
    Fields.variable = variable;
    function literal(value) {
        return { type: 'literal', value };
    }
    Fields.literal = literal;
    function binaryOp(left, op, right) {
        return { type: 'binaryop', left, op, right };
    }
    Fields.binaryOp = binaryOp;
    function index(obj, index) {
        return { type: 'index', object: obj, index };
    }
    Fields.index = index;
    /** Converts a string in dot-notation-format into a variable which indexes. */
    function indexVariable(name) {
        let parts = name.split(".");
        let result = Fields.variable(parts[0]);
        for (let index = 1; index < parts.length; index++) {
            result = Fields.index(result, Fields.literal(parts[index]));
        }
        return result;
    }
    Fields.indexVariable = indexVariable;
    function func(func, args) {
        return { type: 'function', func, arguments: args };
    }
    Fields.func = func;
    function negate(child) {
        return { type: 'negated', child };
    }
    Fields.negate = negate;
    function isCompareOp(op) {
        return op == "<=" || op == "<" || op == ">" || op == ">=" || op == "!=" || op == "=";
    }
    Fields.isCompareOp = isCompareOp;
    Fields.NULL = Fields.literal(null);
})(Fields || (Fields = {}));

/** AST implementation for queries over data sources. */
/** Utility functions for creating and manipulating sources. */
var Sources;
(function (Sources) {
    function tag(tag) {
        return { type: 'tag', tag };
    }
    Sources.tag = tag;
    function csv(path) {
        return { type: 'csv', path };
    }
    Sources.csv = csv;
    function folder(prefix) {
        return { type: 'folder', folder: prefix };
    }
    Sources.folder = folder;
    function link(file, incoming) {
        return { type: 'link', file, direction: incoming ? 'incoming' : 'outgoing' };
    }
    Sources.link = link;
    function binaryOp(left, op, right) {
        return { type: 'binaryop', left, op, right };
    }
    Sources.binaryOp = binaryOp;
    function negate(child) {
        return { type: 'negate', child };
    }
    Sources.negate = negate;
    function empty() {
        return { type: 'empty' };
    }
    Sources.empty = empty;
})(Sources || (Sources = {}));

/** Provides a lookup table for unit durations of the given type. */
const DURATION_TYPES = {
    "year": luxon.Duration.fromObject({ years: 1 }),
    "yr": luxon.Duration.fromObject({ years: 1 }),
    "month": luxon.Duration.fromObject({ months: 1 }),
    "mo": luxon.Duration.fromObject({ months: 1 }),
    "week": luxon.Duration.fromObject({ weeks: 1 }),
    "wk": luxon.Duration.fromObject({ weeks: 1 }),
    "w": luxon.Duration.fromObject({ weeks: 1 }),
    "day": luxon.Duration.fromObject({ days: 1 }),
    "d": luxon.Duration.fromObject({ days: 1 }),
    "hour": luxon.Duration.fromObject({ hours: 1 }),
    "hr": luxon.Duration.fromObject({ hours: 1 }),
    "h": luxon.Duration.fromObject({ hours: 1 }),
    "minute": luxon.Duration.fromObject({ minute: 1 }),
    "min": luxon.Duration.fromObject({ minute: 1 }),
    "m": luxon.Duration.fromObject({ minute: 1 }),
    "second": luxon.Duration.fromObject({ seconds: 1 }),
    "sec": luxon.Duration.fromObject({ seconds: 1 }),
    "s": luxon.Duration.fromObject({ seconds: 1 })
};
/**
 * Keywords which cannot be used as variables directly. Use `row.<thing>` if it is a variable you have defined and want
 * to access.
 */
const KEYWORDS = ["FROM", "WHERE", "LIMIT", "GROUP", "FLATTEN"];
///////////////
// Utilities //
///////////////
/** Attempt to parse the inside of a link to pull out display name, subpath, etc. */
function parseInnerLink(link) {
    let display = undefined;
    if (link.includes('|')) {
        let split = link.split("|");
        link = split[0];
        display = split[1];
    }
    if (link.includes('#')) {
        let split = link.split('#');
        return Link.header(split[0], split[1], false, display);
    }
    else if (link.includes('^')) {
        let split = link.split('^');
        return Link.block(split[0], split[1], false, display);
    }
    return Link.file(link, false, display);
}
/** Create a left-associative binary parser which parses the given sub-element and separator. Handles whitespace. */
function createBinaryParser(child, sep, combine) {
    return parsimmon_umd_min.seqMap(child, parsimmon_umd_min.seq(parsimmon_umd_min.optWhitespace, sep, parsimmon_umd_min.optWhitespace, child).many(), (first, rest) => {
        if (rest.length == 0)
            return first;
        let node = combine(first, rest[0][1], rest[0][3]);
        for (let index = 1; index < rest.length; index++) {
            node = combine(node, rest[index][1], rest[index][3]);
        }
        return node;
    });
}
function chainOpt(base, ...funcs) {
    return parsimmon_umd_min.custom((success, failure) => {
        return (input, i) => {
            let result = base._(input, i);
            if (!result.status)
                return result;
            for (let func of funcs) {
                let next = func(result.value)._(input, result.index);
                if (!next.status)
                    return result;
                result = next;
            }
            return result;
        };
    });
}
const EXPRESSION = parsimmon_umd_min.createLanguage({
    // A floating point number; the decimal point is optional.
    number: q => parsimmon_umd_min.regexp(/-?[0-9]+(.[0-9]+)?/).map(str => Number.parseFloat(str)).desc("number"),
    // A quote-surrounded string which supports escape characters ('\').
    string: q => parsimmon_umd_min.string('"')
        .then(parsimmon_umd_min.alt(q.escapeCharacter, parsimmon_umd_min.noneOf('"\\')).atLeast(0).map(chars => chars.join('')))
        .skip(parsimmon_umd_min.string('"'))
        .desc("string"),
    escapeCharacter: q => parsimmon_umd_min.string('\\').then(parsimmon_umd_min.any).map(escaped => {
        // If we are escaping a backslash or a quote, pass in on in escaped form
        if (escaped === '"')
            return '\"';
        if (escaped === '\\')
            return '\\';
        else
            return '\\' + escaped;
    }),
    // A boolean true/false value.
    bool: q => parsimmon_umd_min.regexp(/true|false|True|False/).map(str => str.toLowerCase() == "true")
        .desc("boolean ('true' or 'false')"),
    // A tag of the form '#stuff/hello-there'.
    tag: q => parsimmon_umd_min.regexp(/#[\p{Letter}\p{Emoji_Presentation}\w/-]+/u).desc("tag ('#hello/stuff')"),
    // A variable identifier, which is alphanumeric and must start with a letter.
    identifier: q => parsimmon_umd_min.regexp(/[\p{Letter}\p{Emoji_Presentation}][\p{Letter}\p{Emoji_Presentation}\w_-]*/u).desc("variable identifier"),
    // A variable identifier, which is alphanumeric and must start with a letter. Can include dots.
    identifierDot: q => parsimmon_umd_min.regexp(/[\p{Letter}\p{Emoji_Presentation}][\p{Letter}\p{Emoji_Presentation}\.\w_-]*/u).desc("variable identifier"),
    // An Obsidian link of the form [[<link>]].
    link: q => parsimmon_umd_min.regexp(/\[\[([^\[\]]*?)\]\]/u, 1).map(linkInner => parseInnerLink(linkInner)).desc("file link"),
    embedLink: q => parsimmon_umd_min.seqMap(parsimmon_umd_min.string("!").atMost(1), q.link, (p, l) => {
        if (p.length > 0)
            l.embed = true;
        return l;
    }),
    // Binary plus or minus operator.
    binaryPlusMinus: q => parsimmon_umd_min.regexp(/\+|-/).map(str => str).desc("'+' or '-'"),
    // Binary times or divide operator.
    binaryMulDiv: q => parsimmon_umd_min.regexp(/\*|\//).map(str => str).desc("'*' or '/'"),
    // Binary comparison operator.
    binaryCompareOp: q => parsimmon_umd_min.regexp(/>=|<=|!=|>|<|=/).map(str => str).desc("'>=' or '<=' or '!=' or '=' or '>' or '<'"),
    // Binary boolean combination operator.
    binaryBooleanOp: q => parsimmon_umd_min.regexp(/and|or|&|\|/i).map(str => {
        if (str.toLowerCase() == 'and')
            return '&';
        else if (str.toLowerCase() == 'or')
            return '|';
        else
            return str;
    }).desc("'and' or 'or'"),
    // A date which can be YYYY-MM[-DDTHH:mm:ss].
    // TODO: Add time-zone support.
    // TODO: Will probably want a custom combinator for optional parsing.
    rootDate: q => parsimmon_umd_min.seqMap(parsimmon_umd_min.regexp(/\d{4}/), parsimmon_umd_min.string("-"), parsimmon_umd_min.regexp(/\d{2}/), (year, _, month) => {
        return luxon.DateTime.fromObject({ year: Number.parseInt(year), month: Number.parseInt(month) });
    }).desc("date in format YYYY-MM[-DDTHH-MM-SS]"),
    date: q => chainOpt(q.rootDate, (ym) => parsimmon_umd_min.seqMap(parsimmon_umd_min.string("-"), parsimmon_umd_min.regexp(/\d{2}/), (_, day) => ym.set({ day: Number.parseInt(day) })), (ymd) => parsimmon_umd_min.seqMap(parsimmon_umd_min.string("T"), parsimmon_umd_min.regexp(/\d{2}/), (_, hour) => ymd.set({ hour: Number.parseInt(hour) })), (ymdh) => parsimmon_umd_min.seqMap(parsimmon_umd_min.string(":"), parsimmon_umd_min.regexp(/\d{2}/), (_, minute) => ymdh.set({ minute: Number.parseInt(minute) })), (ymdhm) => parsimmon_umd_min.seqMap(parsimmon_umd_min.string(":"), parsimmon_umd_min.regexp(/\d{2}/), (_, second) => ymdhm.set({ second: Number.parseInt(second) })), (dt) => parsimmon_umd_min.seqMap(parsimmon_umd_min.string("+").or(parsimmon_umd_min.string("-")), parsimmon_umd_min.regexp(/\d{1,2}(:\d{2})?/), (pm, hr) => dt.setZone("UTC" + pm + hr))),
    // A date, plus various shorthand times of day it could be.
    datePlus: q => parsimmon_umd_min.alt(parsimmon_umd_min.string("now").map(_ => luxon.DateTime.local()), parsimmon_umd_min.string("today").map(_ => luxon.DateTime.local().startOf("day")), parsimmon_umd_min.string("tomorrow").map(_ => luxon.DateTime.local().startOf("day").plus(luxon.Duration.fromObject({ day: 1 }))), parsimmon_umd_min.string("som").map(_ => luxon.DateTime.local().startOf("month")), parsimmon_umd_min.string("soy").map(_ => luxon.DateTime.local().startOf("year")), parsimmon_umd_min.string("eom").map(_ => luxon.DateTime.local().endOf("month")), parsimmon_umd_min.string("eoy").map(_ => luxon.DateTime.local().endOf("year")), q.date),
    // A duration of time.
    durationType: q => parsimmon_umd_min.alt(...Object.keys(DURATION_TYPES).map(parsimmon_umd_min.string)),
    duration: q => parsimmon_umd_min.seqMap(q.number, parsimmon_umd_min.optWhitespace, q.durationType, parsimmon_umd_min.string("s").atMost(1), (count, _, t, _2) => DURATION_TYPES[t].mapUnits(x => x * count)),
    // A raw null value.
    rawNull: q => parsimmon_umd_min.string("null"),
    // Source parsing.
    tagSource: q => q.tag.map(tag => Sources.tag(tag)),
    csvSource: q => parsimmon_umd_min.seqMap(parsimmon_umd_min.string("csv(").skip(parsimmon_umd_min.optWhitespace), q.string, parsimmon_umd_min.string(")"), (_1, path, _2) => Sources.csv(path)),
    linkIncomingSource: q => q.link.map(link => Sources.link(link.path, true)),
    linkOutgoingSource: q => parsimmon_umd_min.seqMap(parsimmon_umd_min.string("outgoing(").skip(parsimmon_umd_min.optWhitespace), q.link, parsimmon_umd_min.string(")"), (_1, link, _2) => Sources.link(link.path, false)),
    folderSource: q => q.string.map(str => Sources.folder(str)),
    parensSource: q => parsimmon_umd_min.seqMap(parsimmon_umd_min.string("("), parsimmon_umd_min.optWhitespace, q.source, parsimmon_umd_min.optWhitespace, parsimmon_umd_min.string(")"), (_1, _2, field, _3, _4) => field),
    negateSource: q => parsimmon_umd_min.seqMap(parsimmon_umd_min.alt(parsimmon_umd_min.string("-"), parsimmon_umd_min.string("!")), q.atomSource, (_, source) => Sources.negate(source)),
    atomSource: q => parsimmon_umd_min.alt(q.parensSource, q.negateSource, q.linkOutgoingSource, q.linkIncomingSource, q.folderSource, q.tagSource, q.csvSource),
    binaryOpSource: q => createBinaryParser(q.atomSource, q.binaryBooleanOp.map(s => s), Sources.binaryOp),
    source: q => q.binaryOpSource,
    // Field parsing.
    variableField: q => q.identifier.chain(r => {
        if (KEYWORDS.includes(r.toUpperCase())) {
            return parsimmon_umd_min.fail("Variable fields cannot be a keyword (" + KEYWORDS.join(" or ") + ")");
        }
        else {
            return parsimmon_umd_min.succeed(Fields.variable(r));
        }
    }).desc("variable"),
    numberField: q => q.number.map(val => Fields.literal(val)).desc("number"),
    stringField: q => q.string.map(val => Fields.literal(val)).desc("string"),
    boolField: q => q.bool.map(val => Fields.literal(val)).desc("boolean"),
    dateField: q => parsimmon_umd_min.seqMap(parsimmon_umd_min.string("date("), parsimmon_umd_min.optWhitespace, q.datePlus, parsimmon_umd_min.optWhitespace, parsimmon_umd_min.string(")"), (prefix, _1, date, _2, postfix) => Fields.literal(date))
        .desc("date"),
    durationField: q => parsimmon_umd_min.seqMap(parsimmon_umd_min.string("dur("), parsimmon_umd_min.optWhitespace, q.duration, parsimmon_umd_min.optWhitespace, parsimmon_umd_min.string(")"), (prefix, _1, dur, _2, postfix) => Fields.literal(dur))
        .desc("duration"),
    nullField: q => q.rawNull.map(_ => Fields.NULL),
    linkField: q => q.link.map(f => Fields.literal(f)),
    literalField: q => parsimmon_umd_min.alt(q.nullField, q.numberField, q.stringField, q.boolField, q.dateField, q.durationField),
    atomInlineField: q => parsimmon_umd_min.alt(q.date, q.duration.map(d => normalizeDuration(d)), q.string, q.link, q.bool, q.number, q.rawNull),
    inlineFieldList: q => q.atomInlineField.sepBy(parsimmon_umd_min.string(",").trim(parsimmon_umd_min.optWhitespace).lookahead(q.atomInlineField)),
    inlineField: q => parsimmon_umd_min.alt(parsimmon_umd_min.seqMap(q.atomInlineField, parsimmon_umd_min.string(",").trim(parsimmon_umd_min.optWhitespace), q.inlineFieldList, (f, _s, l) => [f].concat(l)), q.atomInlineField),
    atomField: q => parsimmon_umd_min.alt(q.negatedField, q.parensField, q.boolField, q.numberField, q.stringField, q.linkField, q.dateField, q.durationField, q.nullField, q.variableField),
    indexField: q => parsimmon_umd_min.seqMap(q.atomField, parsimmon_umd_min.alt(q.dotPostfix, q.indexPostfix, q.functionPostfix).many(), (obj, postfixes) => {
        let result = obj;
        for (let post of postfixes) {
            switch (post.type) {
                case "dot":
                case "index":
                    result = Fields.index(result, post.field);
                    break;
                case "function":
                    result = Fields.func(result, post.fields);
                    break;
            }
        }
        return result;
    }),
    negatedField: q => parsimmon_umd_min.seqMap(parsimmon_umd_min.string("!"), q.indexField, (_, field) => Fields.negate(field)).desc("negated field"),
    parensField: q => parsimmon_umd_min.seqMap(parsimmon_umd_min.string("("), parsimmon_umd_min.optWhitespace, q.field, parsimmon_umd_min.optWhitespace, parsimmon_umd_min.string(")"), (_1, _2, field, _3, _4) => field),
    dotPostfix: q => parsimmon_umd_min.seqMap(parsimmon_umd_min.string("."), q.identifier, (_, field) => { return { type: 'dot', field: Fields.literal(field) }; }),
    indexPostfix: q => parsimmon_umd_min.seqMap(parsimmon_umd_min.string("["), parsimmon_umd_min.optWhitespace, q.field, parsimmon_umd_min.optWhitespace, parsimmon_umd_min.string("]"), (_, _2, field, _3, _4) => { return { type: 'index', field }; }),
    functionPostfix: q => parsimmon_umd_min.seqMap(parsimmon_umd_min.string("("), parsimmon_umd_min.optWhitespace, q.field.sepBy(parsimmon_umd_min.string(",").trim(parsimmon_umd_min.optWhitespace)), parsimmon_umd_min.optWhitespace, parsimmon_umd_min.string(")"), (_, _1, fields, _2, _3) => { return { type: 'function', fields }; }),
    // The precedence hierarchy of operators - multiply/divide, add/subtract, compare, and then boolean operations.
    binaryMulDivField: q => createBinaryParser(q.indexField, q.binaryMulDiv, Fields.binaryOp),
    binaryPlusMinusField: q => createBinaryParser(q.binaryMulDivField, q.binaryPlusMinus, Fields.binaryOp),
    binaryCompareField: q => createBinaryParser(q.binaryPlusMinusField, q.binaryCompareOp, Fields.binaryOp),
    binaryBooleanField: q => createBinaryParser(q.binaryCompareField, q.binaryBooleanOp, Fields.binaryOp),
    binaryOpField: q => q.binaryBooleanField,
    field: q => q.binaryOpField
});
/**
 * Attempt to parse a field from the given text, returning a string error if the
 * parse failed.
 */
function parseField(text) {
    try {
        return Result.success(EXPRESSION.field.tryParse(text));
    }
    catch (error) {
        return Result.failure("" + error);
    }
}

var Task;
(function (Task) {
    /** Deep-copy a task. */
    function copy(input) {
        let partial = Object.assign({}, input);
        partial.subtasks = partial.subtasks.map(t => copy(t));
        return partial;
    }
    Task.copy = copy;
})(Task || (Task = {}));
/** All extracted markdown file metadata obtained from a file. */
class PageMetadata {
    constructor(path, init) {
        this.path = path;
        this.fields = new Map();
        this.tags = new Set();
        this.aliases = new Set();
        this.links = [];
        this.tasks = [];
        Object.assign(this, init);
    }
    /** Parse all subtags out of the given tag. I.e., #hello/i/am would yield [#hello/i/am, #hello/i, #hello]. */
    static parseSubtags(tag) {
        let result = [tag];
        while (tag.includes("/")) {
            tag = tag.substring(0, tag.lastIndexOf("/"));
            result.push(tag);
        }
        return result;
    }
    /** The name (based on path) of this file. */
    name() { return getFileName(this.path); }
    /** The containing folder (based on path) of this file. */
    folder() { return getParentFolder(this.path); }
    /** The extension of this file (likely 'md'). */
    extension() { return getExtension(this.path); }
    /** Return a set of tags AND all of their parent tags (so #hello/yes would become #hello, #hello/yes). */
    fullTags() {
        // TODO: Memoize this, probably.
        let result = new Set();
        for (let tag of this.tags) {
            for (let subtag of PageMetadata.parseSubtags(tag))
                result.add(subtag);
        }
        return result;
    }
    /** Convert all links in this file to file links. */
    fileLinks() {
        return this.links.map(link => {
            switch (link.type) {
                case "file": return link;
                case "block": return {
                    type: 'file',
                    path: link.path,
                    display: link.display,
                    embed: link.embed
                };
                case "header": return {
                    type: 'file',
                    path: link.path,
                    display: link.display,
                    embed: link.embed
                };
            }
        });
    }
    /** Map this metadata to a full object; uses the index for additional data lookups.  */
    toObject(index) {
        // Static fields first. Note this object should not have any pointers to the original object (so that the
        // index cannot accidentally be mutated).
        let result = {
            "file": {
                "path": this.path,
                "folder": this.folder(),
                "name": this.name(),
                "link": Link.file(this.path, false),
                "outlinks": this.fileLinks().map(l => Link.file(l.path, false)),
                "inlinks": Array.from(index.links.getInverse(this.path)).map(l => Link.file(l, false)),
                "etags": Array.from(this.tags),
                "tags": Array.from(this.fullTags()),
                "aliases": Array.from(this.aliases),
                "tasks": this.tasks.map(t => Task.copy(t)),
                "ctime": this.ctime,
                "cday": luxon.DateTime.fromObject({ year: this.ctime.year, month: this.ctime.month, day: this.ctime.day }),
                "mtime": this.mtime,
                "mday": luxon.DateTime.fromObject({ year: this.mtime.year, month: this.mtime.month, day: this.mtime.day }),
                "size": this.size,
                "ext": this.extension()
            }
        };
        // Add the current day if present.
        if (this.day)
            result["file"]["day"] = this.day;
        // Then append the computed fields.
        for (let [key, value] of this.fields) {
            if (key === "file")
                continue; // Don't allow fields to override 'file'.
            result[key] = value;
        }
        return result;
    }
}
/** Convert transfer-friendly markdown to a result we can actually index and use. */
function fromTransferable(parsed) {
    let newFields = new Map();
    for (let [key, values] of parsed.fields.entries()) {
        newFields.set(key, values.map(t => TransferableValues.value(t)));
    }
    return {
        tasks: parsed.tasks,
        fields: newFields
    };
}
/** Try to extract a YYYYMMDD date from a string. */
function extractDate(str) {
    let dateMatch = /(\d{4})-(\d{2})-(\d{2})/.exec(str);
    if (!dateMatch)
        dateMatch = /(\d{4})(\d{2})(\d{2})/.exec(str);
    if (dateMatch) {
        let year = Number.parseInt(dateMatch[1]);
        let month = Number.parseInt(dateMatch[2]);
        let day = Number.parseInt(dateMatch[3]);
        return luxon.DateTime.fromObject({ year, month, day });
    }
    return undefined;
}
/** Attempt to find a date associated with the given page from metadata or filenames. */
function findDate(file, fields) {
    var _a, _b;
    for (let key of fields.keys()) {
        if (!(key.toLocaleLowerCase() == "date" || key.toLocaleLowerCase() == "day"))
            continue;
        let value = fields.get(key);
        if (Values.isDate(value))
            return value;
        else if (Values.isLink(value)) {
            let date = extractDate(value.path);
            if (date)
                return date;
            date = extractDate((_a = value.subpath) !== null && _a !== void 0 ? _a : "");
            if (date)
                return date;
            date = extractDate((_b = value.display) !== null && _b !== void 0 ? _b : "");
            if (date)
                return date;
        }
    }
    return extractDate(getFileName(file));
}
/** Recursively convert frontmatter into fields. We have to dance around YAML structure. */
function parseFrontmatter(value) {
    if (value == null) {
        return null;
    }
    else if (typeof value === 'object') {
        if (Array.isArray(value)) {
            let object = value;
            // Special case for link syntax, which shows up as double-nested arrays.
            // TODO: Need to replace this with something else.
            if (object.length == 1 && Array.isArray(object[0]) && object[0].every(v => typeof v === 'string')) {
                return parseInnerLink(object[0].join(", "));
            }
            let result = [];
            for (let child of object) {
                result.push(parseFrontmatter(child));
            }
            return result;
        }
        else {
            let object = value;
            let result = {};
            for (let key in object) {
                result[key] = parseFrontmatter(object[key]);
            }
            return result;
        }
    }
    else if (typeof value === 'number') {
        return value;
    }
    else if (typeof value === 'boolean') {
        return value;
    }
    else if (typeof value === 'string') {
        let dateParse = EXPRESSION.date.parse(value);
        if (dateParse.status)
            return dateParse.value;
        let durationParse = EXPRESSION.duration.parse(value);
        if (durationParse.status)
            return durationParse.value;
        let linkParse = EXPRESSION.embedLink.parse(value);
        if (linkParse.status)
            return linkParse.value;
        return value;
    }
    // Backup if we don't understand the type.
    return null;
}
/** Add an inline field to a nexisting field array, converting a single value into an array if it is present multiple times. */
function addInlineField(fields, name, value) {
    if (fields.has(name)) {
        let existing = fields.get(name);
        if (Values.isArray(existing))
            fields.set(name, existing.concat([value]));
        else
            fields.set(name, [existing, value]);
    }
    else {
        fields.set(name, value);
    }
}
/** Matches lines of the form "- [ ] <task thing>". */
const TASK_REGEX = /^(\s*)[-*]\s*(\[[ Xx\.]?\])?\s*([^-*].*)$/iu;
/** Extract markdown metadata from the given Obsidian markdown file. */
function parsePage(file, cache, markdownData) {
    var _a;
    let tags = new Set();
    let aliases = new Set();
    let fields = new Map();
    // Pull out the easy-to-extract information from the cache first...
    let fileCache = cache.getFileCache(file);
    if (fileCache) {
        // File tags, including front-matter and in-file tags.
        (_a = obsidian.getAllTags(fileCache)) === null || _a === void 0 ? void 0 : _a.forEach(t => tags.add(t));
        // Front-matter file tags, aliases, AND frontmatter properties.
        if (fileCache.frontmatter) {
            let frontTags = obsidian.parseFrontMatterTags(fileCache.frontmatter);
            if (frontTags) {
                for (let tag of frontTags) {
                    if (!tag.startsWith("#"))
                        tag = "#" + tag;
                    tags.add(tag);
                }
            }
            let frontAliases = obsidian.parseFrontMatterAliases(fileCache.frontmatter);
            if (frontAliases) {
                for (let alias of frontAliases)
                    aliases.add(alias);
            }
            let frontFields = parseFrontmatter(fileCache.frontmatter);
            for (let [key, value] of Object.entries(frontFields))
                fields.set(key, value);
        }
    }
    // Grab links from the frontmatter cache.
    let links = [];
    if (file.path in cache.resolvedLinks) {
        for (let resolved in cache.resolvedLinks[file.path]) {
            links.push({
                type: 'file',
                path: resolved,
                display: resolved,
                embed: false
            });
        }
    }
    // Merge frontmatter fields with parsed fields.
    for (let [name, values] of markdownData.fields.entries()) {
        for (let value of values)
            addInlineField(fields, name, value);
    }
    return new PageMetadata(file.path, {
        fields, tags, aliases, links,
        tasks: markdownData.tasks,
        ctime: luxon.DateTime.fromMillis(file.stat.ctime),
        mtime: luxon.DateTime.fromMillis(file.stat.mtime),
        size: file.stat.size,
        day: findDate(file.path, fields)
    });
}

function decodeBase64(base64, enableUnicode) {
    var binaryString = atob(base64);
    if (enableUnicode) {
        var binaryView = new Uint8Array(binaryString.length);
        for (var i = 0, n = binaryString.length; i < n; ++i) {
            binaryView[i] = binaryString.charCodeAt(i);
        }
        return String.fromCharCode.apply(null, new Uint16Array(binaryView.buffer));
    }
    return binaryString;
}

function createURL(base64, sourcemapArg, enableUnicodeArg) {
    var sourcemap = sourcemapArg === undefined ? null : sourcemapArg;
    var enableUnicode = enableUnicodeArg === undefined ? false : enableUnicodeArg;
    var source = decodeBase64(base64, enableUnicode);
    var start = source.indexOf('\n', 10) + 1;
    var body = source.substring(start) + (sourcemap ? '\/\/# sourceMappingURL=' + sourcemap : '');
    var blob = new Blob([body], { type: 'application/javascript' });
    return URL.createObjectURL(blob);
}

function createBase64WorkerFactory(base64, sourcemapArg, enableUnicodeArg) {
    var url;
    return function WorkerFactory(options) {
        url = url || createURL(base64, sourcemapArg, enableUnicodeArg);
        return new Worker(url, options);
    };
}

var WorkerFactory = createBase64WorkerFactory('Lyogcm9sbHVwLXBsdWdpbi13ZWItd29ya2VyLWxvYWRlciAqLwooZnVuY3Rpb24gKCkgewogICAgJ3VzZSBzdHJpY3QnOwoKICAgIC8qISAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKg0KICAgIENvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLg0KDQogICAgUGVybWlzc2lvbiB0byB1c2UsIGNvcHksIG1vZGlmeSwgYW5kL29yIGRpc3RyaWJ1dGUgdGhpcyBzb2Z0d2FyZSBmb3IgYW55DQogICAgcHVycG9zZSB3aXRoIG9yIHdpdGhvdXQgZmVlIGlzIGhlcmVieSBncmFudGVkLg0KDQogICAgVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEICJBUyBJUyIgQU5EIFRIRSBBVVRIT1IgRElTQ0xBSU1TIEFMTCBXQVJSQU5USUVTIFdJVEgNCiAgICBSRUdBUkQgVE8gVEhJUyBTT0ZUV0FSRSBJTkNMVURJTkcgQUxMIElNUExJRUQgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFkNCiAgICBBTkQgRklUTkVTUy4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUiBCRSBMSUFCTEUgRk9SIEFOWSBTUEVDSUFMLCBESVJFQ1QsDQogICAgSU5ESVJFQ1QsIE9SIENPTlNFUVVFTlRJQUwgREFNQUdFUyBPUiBBTlkgREFNQUdFUyBXSEFUU09FVkVSIFJFU1VMVElORyBGUk9NDQogICAgTE9TUyBPRiBVU0UsIERBVEEgT1IgUFJPRklUUywgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIE5FR0xJR0VOQ0UgT1INCiAgICBPVEhFUiBUT1JUSU9VUyBBQ1RJT04sIEFSSVNJTkcgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgVVNFIE9SDQogICAgUEVSRk9STUFOQ0UgT0YgVEhJUyBTT0ZUV0FSRS4NCiAgICAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiAqLw0KDQogICAgZnVuY3Rpb24gX19hd2FpdGVyKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikgew0KICAgICAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH0NCiAgICAgICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7DQogICAgICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9DQogICAgICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvclsidGhyb3ciXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9DQogICAgICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfQ0KICAgICAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpOw0KICAgICAgICB9KTsNCiAgICB9CgogICAgLyoqIE5vcm1hbGl6ZSBhIGR1cmF0aW9uIHRvIGFsbCBvZiB0aGUgcHJvcGVyIHVuaXRzLiAqLwogICAgZnVuY3Rpb24gbm9ybWFsaXplRHVyYXRpb24oZHVyKSB7CiAgICAgICAgcmV0dXJuIGR1ci5zaGlmdFRvKCJ5ZWFycyIsICJtb250aHMiLCAid2Vla3MiLCAiZGF5cyIsICJob3VycyIsICJtaW51dGVzIiwgInNlY29uZHMiLCAibWlsbGlzZWNvbmRzIikubm9ybWFsaXplKCk7CiAgICB9CiAgICAvKiogR2V0IHRoZSBmaWxlIG5hbWUgZm9yIHRoZSBmaWxlLCB3aXRob3V0IGFueSBwYXJlbnQgZGlyZWN0b3JpZXMuICovCiAgICBmdW5jdGlvbiBnZXRGaWxlTmFtZShwYXRoKSB7CiAgICAgICAgaWYgKHBhdGguaW5jbHVkZXMoIi8iKSkKICAgICAgICAgICAgcGF0aCA9IHBhdGguc3Vic3RyaW5nKHBhdGgubGFzdEluZGV4T2YoIi8iKSArIDEpOwogICAgICAgIGlmIChwYXRoLmVuZHNXaXRoKCIubWQiKSkKICAgICAgICAgICAgcGF0aCA9IHBhdGguc3Vic3RyaW5nKDAsIHBhdGgubGVuZ3RoIC0gMyk7CiAgICAgICAgcmV0dXJuIHBhdGg7CiAgICB9CiAgICBjb25zdCBBTExPV0FCTEVfVkFSX0NIQVJBQ1RFUlMgPSAvWzAtOVx3XHB7TGV0dGVyfVxwe0Vtb2ppX1ByZXNlbnRhdGlvbn1cLV0vdTsKICAgIGNvbnN0IFdISVRFU1BBQ0UgPSAvXHMvOwogICAgLyoqIENvbnZlcnQgYW4gYXJiaXRyYXJ5IHZhcmlhYmxlIG5hbWUgaW50byBzb21ldGhpbmcgSlMvcXVlcnkgZnJpZW5kbHkuICovCiAgICBmdW5jdGlvbiBjYW5vbmljYWxpemVWYXJOYW1lKG5hbWUpIHsKICAgICAgICAvLyBTdHJpcCBkb3duIHRvIHB1cmVseSBhbHBoYW51bWVyaWMgKyBzcGFjZXMuCiAgICAgICAgbGV0IHJlc3VsdCA9ICIiOwogICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBuYW1lLmxlbmd0aDsgaW5kZXgrKykgewogICAgICAgICAgICBsZXQgY2ggPSBuYW1lW2luZGV4XTsKICAgICAgICAgICAgaWYgKGNoLm1hdGNoKFdISVRFU1BBQ0UpKSB7CiAgICAgICAgICAgICAgICByZXN1bHQgKz0gIi0iOwogICAgICAgICAgICAgICAgY29udGludWU7CiAgICAgICAgICAgIH0KICAgICAgICAgICAgaWYgKCFjaC5tYXRjaChBTExPV0FCTEVfVkFSX0NIQVJBQ1RFUlMpKQogICAgICAgICAgICAgICAgY29udGludWU7CiAgICAgICAgICAgIHJlc3VsdCArPSBjaC50b0xvY2FsZUxvd2VyQ2FzZSgpOwogICAgICAgIH0KICAgICAgICByZXR1cm4gcmVzdWx0OwogICAgfQoKICAgIHZhciBjb21tb25qc0dsb2JhbCA9IHR5cGVvZiBnbG9iYWxUaGlzICE9PSAndW5kZWZpbmVkJyA/IGdsb2JhbFRoaXMgOiB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyA/IHdpbmRvdyA6IHR5cGVvZiBnbG9iYWwgIT09ICd1bmRlZmluZWQnID8gZ2xvYmFsIDogdHlwZW9mIHNlbGYgIT09ICd1bmRlZmluZWQnID8gc2VsZiA6IHt9OwoKICAgIGZ1bmN0aW9uIGNyZWF0ZUNvbW1vbmpzTW9kdWxlKGZuLCBiYXNlZGlyLCBtb2R1bGUpIHsKICAgIAlyZXR1cm4gbW9kdWxlID0gewogICAgCQlwYXRoOiBiYXNlZGlyLAogICAgCQlleHBvcnRzOiB7fSwKICAgIAkJcmVxdWlyZTogZnVuY3Rpb24gKHBhdGgsIGJhc2UpIHsKICAgIAkJCXJldHVybiBjb21tb25qc1JlcXVpcmUoKTsKICAgIAkJfQogICAgCX0sIGZuKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMpLCBtb2R1bGUuZXhwb3J0czsKICAgIH0KCiAgICBmdW5jdGlvbiBjb21tb25qc1JlcXVpcmUgKCkgewogICAgCXRocm93IG5ldyBFcnJvcignRHluYW1pYyByZXF1aXJlcyBhcmUgbm90IGN1cnJlbnRseSBzdXBwb3J0ZWQgYnkgQHJvbGx1cC9wbHVnaW4tY29tbW9uanMnKTsKICAgIH0KCiAgICB2YXIgbHV4b24gPSBjcmVhdGVDb21tb25qc01vZHVsZShmdW5jdGlvbiAobW9kdWxlLCBleHBvcnRzKSB7CgogICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTsKCiAgICBmdW5jdGlvbiBfZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7CiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsKICAgICAgICB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOwogICAgICAgIGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsKICAgICAgICBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7CiAgICAgICAgaWYgKCJ2YWx1ZSIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7CiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOwogICAgICB9CiAgICB9CgogICAgZnVuY3Rpb24gX2NyZWF0ZUNsYXNzKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgewogICAgICBpZiAocHJvdG9Qcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsKICAgICAgaWYgKHN0YXRpY1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOwogICAgICByZXR1cm4gQ29uc3RydWN0b3I7CiAgICB9CgogICAgZnVuY3Rpb24gX2luaGVyaXRzTG9vc2Uoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsKICAgICAgc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzLnByb3RvdHlwZSk7CiAgICAgIHN1YkNsYXNzLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IHN1YkNsYXNzOwogICAgICBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzOwogICAgfQoKICAgIGZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7CiAgICAgIF9nZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5nZXRQcm90b3R5cGVPZiA6IGZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7CiAgICAgICAgcmV0dXJuIG8uX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihvKTsKICAgICAgfTsKICAgICAgcmV0dXJuIF9nZXRQcm90b3R5cGVPZihvKTsKICAgIH0KCiAgICBmdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkgewogICAgICBfc2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHwgZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHsKICAgICAgICBvLl9fcHJvdG9fXyA9IHA7CiAgICAgICAgcmV0dXJuIG87CiAgICAgIH07CgogICAgICByZXR1cm4gX3NldFByb3RvdHlwZU9mKG8sIHApOwogICAgfQoKICAgIGZ1bmN0aW9uIF9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QoKSB7CiAgICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gInVuZGVmaW5lZCIgfHwgIVJlZmxlY3QuY29uc3RydWN0KSByZXR1cm4gZmFsc2U7CiAgICAgIGlmIChSZWZsZWN0LmNvbnN0cnVjdC5zaGFtKSByZXR1cm4gZmFsc2U7CiAgICAgIGlmICh0eXBlb2YgUHJveHkgPT09ICJmdW5jdGlvbiIpIHJldHVybiB0cnVlOwoKICAgICAgdHJ5IHsKICAgICAgICBEYXRlLnByb3RvdHlwZS50b1N0cmluZy5jYWxsKFJlZmxlY3QuY29uc3RydWN0KERhdGUsIFtdLCBmdW5jdGlvbiAoKSB7fSkpOwogICAgICAgIHJldHVybiB0cnVlOwogICAgICB9IGNhdGNoIChlKSB7CiAgICAgICAgcmV0dXJuIGZhbHNlOwogICAgICB9CiAgICB9CgogICAgZnVuY3Rpb24gX2NvbnN0cnVjdChQYXJlbnQsIGFyZ3MsIENsYXNzKSB7CiAgICAgIGlmIChfaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KCkpIHsKICAgICAgICBfY29uc3RydWN0ID0gUmVmbGVjdC5jb25zdHJ1Y3Q7CiAgICAgIH0gZWxzZSB7CiAgICAgICAgX2NvbnN0cnVjdCA9IGZ1bmN0aW9uIF9jb25zdHJ1Y3QoUGFyZW50LCBhcmdzLCBDbGFzcykgewogICAgICAgICAgdmFyIGEgPSBbbnVsbF07CiAgICAgICAgICBhLnB1c2guYXBwbHkoYSwgYXJncyk7CiAgICAgICAgICB2YXIgQ29uc3RydWN0b3IgPSBGdW5jdGlvbi5iaW5kLmFwcGx5KFBhcmVudCwgYSk7CiAgICAgICAgICB2YXIgaW5zdGFuY2UgPSBuZXcgQ29uc3RydWN0b3IoKTsKICAgICAgICAgIGlmIChDbGFzcykgX3NldFByb3RvdHlwZU9mKGluc3RhbmNlLCBDbGFzcy5wcm90b3R5cGUpOwogICAgICAgICAgcmV0dXJuIGluc3RhbmNlOwogICAgICAgIH07CiAgICAgIH0KCiAgICAgIHJldHVybiBfY29uc3RydWN0LmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7CiAgICB9CgogICAgZnVuY3Rpb24gX2lzTmF0aXZlRnVuY3Rpb24oZm4pIHsKICAgICAgcmV0dXJuIEZ1bmN0aW9uLnRvU3RyaW5nLmNhbGwoZm4pLmluZGV4T2YoIltuYXRpdmUgY29kZV0iKSAhPT0gLTE7CiAgICB9CgogICAgZnVuY3Rpb24gX3dyYXBOYXRpdmVTdXBlcihDbGFzcykgewogICAgICB2YXIgX2NhY2hlID0gdHlwZW9mIE1hcCA9PT0gImZ1bmN0aW9uIiA/IG5ldyBNYXAoKSA6IHVuZGVmaW5lZDsKCiAgICAgIF93cmFwTmF0aXZlU3VwZXIgPSBmdW5jdGlvbiBfd3JhcE5hdGl2ZVN1cGVyKENsYXNzKSB7CiAgICAgICAgaWYgKENsYXNzID09PSBudWxsIHx8ICFfaXNOYXRpdmVGdW5jdGlvbihDbGFzcykpIHJldHVybiBDbGFzczsKCiAgICAgICAgaWYgKHR5cGVvZiBDbGFzcyAhPT0gImZ1bmN0aW9uIikgewogICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcigiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24iKTsKICAgICAgICB9CgogICAgICAgIGlmICh0eXBlb2YgX2NhY2hlICE9PSAidW5kZWZpbmVkIikgewogICAgICAgICAgaWYgKF9jYWNoZS5oYXMoQ2xhc3MpKSByZXR1cm4gX2NhY2hlLmdldChDbGFzcyk7CgogICAgICAgICAgX2NhY2hlLnNldChDbGFzcywgV3JhcHBlcik7CiAgICAgICAgfQoKICAgICAgICBmdW5jdGlvbiBXcmFwcGVyKCkgewogICAgICAgICAgcmV0dXJuIF9jb25zdHJ1Y3QoQ2xhc3MsIGFyZ3VtZW50cywgX2dldFByb3RvdHlwZU9mKHRoaXMpLmNvbnN0cnVjdG9yKTsKICAgICAgICB9CgogICAgICAgIFdyYXBwZXIucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShDbGFzcy5wcm90b3R5cGUsIHsKICAgICAgICAgIGNvbnN0cnVjdG9yOiB7CiAgICAgICAgICAgIHZhbHVlOiBXcmFwcGVyLAogICAgICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSwKICAgICAgICAgICAgd3JpdGFibGU6IHRydWUsCiAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZQogICAgICAgICAgfQogICAgICAgIH0pOwogICAgICAgIHJldHVybiBfc2V0UHJvdG90eXBlT2YoV3JhcHBlciwgQ2xhc3MpOwogICAgICB9OwoKICAgICAgcmV0dXJuIF93cmFwTmF0aXZlU3VwZXIoQ2xhc3MpOwogICAgfQoKICAgIGZ1bmN0aW9uIF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKHNvdXJjZSwgZXhjbHVkZWQpIHsKICAgICAgaWYgKHNvdXJjZSA9PSBudWxsKSByZXR1cm4ge307CiAgICAgIHZhciB0YXJnZXQgPSB7fTsKICAgICAgdmFyIHNvdXJjZUtleXMgPSBPYmplY3Qua2V5cyhzb3VyY2UpOwogICAgICB2YXIga2V5LCBpOwoKICAgICAgZm9yIChpID0gMDsgaSA8IHNvdXJjZUtleXMubGVuZ3RoOyBpKyspIHsKICAgICAgICBrZXkgPSBzb3VyY2VLZXlzW2ldOwogICAgICAgIGlmIChleGNsdWRlZC5pbmRleE9mKGtleSkgPj0gMCkgY29udGludWU7CiAgICAgICAgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsKICAgICAgfQoKICAgICAgcmV0dXJuIHRhcmdldDsKICAgIH0KCiAgICBmdW5jdGlvbiBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkobywgbWluTGVuKSB7CiAgICAgIGlmICghbykgcmV0dXJuOwogICAgICBpZiAodHlwZW9mIG8gPT09ICJzdHJpbmciKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTsKICAgICAgdmFyIG4gPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobykuc2xpY2UoOCwgLTEpOwogICAgICBpZiAobiA9PT0gIk9iamVjdCIgJiYgby5jb25zdHJ1Y3RvcikgbiA9IG8uY29uc3RydWN0b3IubmFtZTsKICAgICAgaWYgKG4gPT09ICJNYXAiIHx8IG4gPT09ICJTZXQiKSByZXR1cm4gQXJyYXkuZnJvbShuKTsKICAgICAgaWYgKG4gPT09ICJBcmd1bWVudHMiIHx8IC9eKD86VWl8SSludCg/Ojh8MTZ8MzIpKD86Q2xhbXBlZCk/QXJyYXkkLy50ZXN0KG4pKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTsKICAgIH0KCiAgICBmdW5jdGlvbiBfYXJyYXlMaWtlVG9BcnJheShhcnIsIGxlbikgewogICAgICBpZiAobGVuID09IG51bGwgfHwgbGVuID4gYXJyLmxlbmd0aCkgbGVuID0gYXJyLmxlbmd0aDsKCiAgICAgIGZvciAodmFyIGkgPSAwLCBhcnIyID0gbmV3IEFycmF5KGxlbik7IGkgPCBsZW47IGkrKykgYXJyMltpXSA9IGFycltpXTsKCiAgICAgIHJldHVybiBhcnIyOwogICAgfQoKICAgIGZ1bmN0aW9uIF9jcmVhdGVGb3JPZkl0ZXJhdG9ySGVscGVyTG9vc2UobykgewogICAgICB2YXIgaSA9IDA7CgogICAgICBpZiAodHlwZW9mIFN5bWJvbCA9PT0gInVuZGVmaW5lZCIgfHwgb1tTeW1ib2wuaXRlcmF0b3JdID09IG51bGwpIHsKICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShvKSB8fCAobyA9IF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShvKSkpIHJldHVybiBmdW5jdGlvbiAoKSB7CiAgICAgICAgICBpZiAoaSA+PSBvLmxlbmd0aCkgcmV0dXJuIHsKICAgICAgICAgICAgZG9uZTogdHJ1ZQogICAgICAgICAgfTsKICAgICAgICAgIHJldHVybiB7CiAgICAgICAgICAgIGRvbmU6IGZhbHNlLAogICAgICAgICAgICB2YWx1ZTogb1tpKytdCiAgICAgICAgICB9OwogICAgICAgIH07CiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcigiSW52YWxpZCBhdHRlbXB0IHRvIGl0ZXJhdGUgbm9uLWl0ZXJhYmxlIGluc3RhbmNlLlxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLiIpOwogICAgICB9CgogICAgICBpID0gb1tTeW1ib2wuaXRlcmF0b3JdKCk7CiAgICAgIHJldHVybiBpLm5leHQuYmluZChpKTsKICAgIH0KCiAgICAvLyB0aGVzZSBhcmVuJ3QgcmVhbGx5IHByaXZhdGUsIGJ1dCBub3IgYXJlIHRoZXkgcmVhbGx5IHVzZWZ1bCB0byBkb2N1bWVudAoKICAgIC8qKgogICAgICogQHByaXZhdGUKICAgICAqLwogICAgdmFyIEx1eG9uRXJyb3IgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKF9FcnJvcikgewogICAgICBfaW5oZXJpdHNMb29zZShMdXhvbkVycm9yLCBfRXJyb3IpOwoKICAgICAgZnVuY3Rpb24gTHV4b25FcnJvcigpIHsKICAgICAgICByZXR1cm4gX0Vycm9yLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgfHwgdGhpczsKICAgICAgfQoKICAgICAgcmV0dXJuIEx1eG9uRXJyb3I7CiAgICB9KCAvKiNfX1BVUkVfXyovX3dyYXBOYXRpdmVTdXBlcihFcnJvcikpOwogICAgLyoqCiAgICAgKiBAcHJpdmF0ZQogICAgICovCgoKICAgIHZhciBJbnZhbGlkRGF0ZVRpbWVFcnJvciA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoX0x1eG9uRXJyb3IpIHsKICAgICAgX2luaGVyaXRzTG9vc2UoSW52YWxpZERhdGVUaW1lRXJyb3IsIF9MdXhvbkVycm9yKTsKCiAgICAgIGZ1bmN0aW9uIEludmFsaWREYXRlVGltZUVycm9yKHJlYXNvbikgewogICAgICAgIHJldHVybiBfTHV4b25FcnJvci5jYWxsKHRoaXMsICJJbnZhbGlkIERhdGVUaW1lOiAiICsgcmVhc29uLnRvTWVzc2FnZSgpKSB8fCB0aGlzOwogICAgICB9CgogICAgICByZXR1cm4gSW52YWxpZERhdGVUaW1lRXJyb3I7CiAgICB9KEx1eG9uRXJyb3IpOwogICAgLyoqCiAgICAgKiBAcHJpdmF0ZQogICAgICovCgogICAgdmFyIEludmFsaWRJbnRlcnZhbEVycm9yID0gLyojX19QVVJFX18qL2Z1bmN0aW9uIChfTHV4b25FcnJvcjIpIHsKICAgICAgX2luaGVyaXRzTG9vc2UoSW52YWxpZEludGVydmFsRXJyb3IsIF9MdXhvbkVycm9yMik7CgogICAgICBmdW5jdGlvbiBJbnZhbGlkSW50ZXJ2YWxFcnJvcihyZWFzb24pIHsKICAgICAgICByZXR1cm4gX0x1eG9uRXJyb3IyLmNhbGwodGhpcywgIkludmFsaWQgSW50ZXJ2YWw6ICIgKyByZWFzb24udG9NZXNzYWdlKCkpIHx8IHRoaXM7CiAgICAgIH0KCiAgICAgIHJldHVybiBJbnZhbGlkSW50ZXJ2YWxFcnJvcjsKICAgIH0oTHV4b25FcnJvcik7CiAgICAvKioKICAgICAqIEBwcml2YXRlCiAgICAgKi8KCiAgICB2YXIgSW52YWxpZER1cmF0aW9uRXJyb3IgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKF9MdXhvbkVycm9yMykgewogICAgICBfaW5oZXJpdHNMb29zZShJbnZhbGlkRHVyYXRpb25FcnJvciwgX0x1eG9uRXJyb3IzKTsKCiAgICAgIGZ1bmN0aW9uIEludmFsaWREdXJhdGlvbkVycm9yKHJlYXNvbikgewogICAgICAgIHJldHVybiBfTHV4b25FcnJvcjMuY2FsbCh0aGlzLCAiSW52YWxpZCBEdXJhdGlvbjogIiArIHJlYXNvbi50b01lc3NhZ2UoKSkgfHwgdGhpczsKICAgICAgfQoKICAgICAgcmV0dXJuIEludmFsaWREdXJhdGlvbkVycm9yOwogICAgfShMdXhvbkVycm9yKTsKICAgIC8qKgogICAgICogQHByaXZhdGUKICAgICAqLwoKICAgIHZhciBDb25mbGljdGluZ1NwZWNpZmljYXRpb25FcnJvciA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoX0x1eG9uRXJyb3I0KSB7CiAgICAgIF9pbmhlcml0c0xvb3NlKENvbmZsaWN0aW5nU3BlY2lmaWNhdGlvbkVycm9yLCBfTHV4b25FcnJvcjQpOwoKICAgICAgZnVuY3Rpb24gQ29uZmxpY3RpbmdTcGVjaWZpY2F0aW9uRXJyb3IoKSB7CiAgICAgICAgcmV0dXJuIF9MdXhvbkVycm9yNC5hcHBseSh0aGlzLCBhcmd1bWVudHMpIHx8IHRoaXM7CiAgICAgIH0KCiAgICAgIHJldHVybiBDb25mbGljdGluZ1NwZWNpZmljYXRpb25FcnJvcjsKICAgIH0oTHV4b25FcnJvcik7CiAgICAvKioKICAgICAqIEBwcml2YXRlCiAgICAgKi8KCiAgICB2YXIgSW52YWxpZFVuaXRFcnJvciA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoX0x1eG9uRXJyb3I1KSB7CiAgICAgIF9pbmhlcml0c0xvb3NlKEludmFsaWRVbml0RXJyb3IsIF9MdXhvbkVycm9yNSk7CgogICAgICBmdW5jdGlvbiBJbnZhbGlkVW5pdEVycm9yKHVuaXQpIHsKICAgICAgICByZXR1cm4gX0x1eG9uRXJyb3I1LmNhbGwodGhpcywgIkludmFsaWQgdW5pdCAiICsgdW5pdCkgfHwgdGhpczsKICAgICAgfQoKICAgICAgcmV0dXJuIEludmFsaWRVbml0RXJyb3I7CiAgICB9KEx1eG9uRXJyb3IpOwogICAgLyoqCiAgICAgKiBAcHJpdmF0ZQogICAgICovCgogICAgdmFyIEludmFsaWRBcmd1bWVudEVycm9yID0gLyojX19QVVJFX18qL2Z1bmN0aW9uIChfTHV4b25FcnJvcjYpIHsKICAgICAgX2luaGVyaXRzTG9vc2UoSW52YWxpZEFyZ3VtZW50RXJyb3IsIF9MdXhvbkVycm9yNik7CgogICAgICBmdW5jdGlvbiBJbnZhbGlkQXJndW1lbnRFcnJvcigpIHsKICAgICAgICByZXR1cm4gX0x1eG9uRXJyb3I2LmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgfHwgdGhpczsKICAgICAgfQoKICAgICAgcmV0dXJuIEludmFsaWRBcmd1bWVudEVycm9yOwogICAgfShMdXhvbkVycm9yKTsKICAgIC8qKgogICAgICogQHByaXZhdGUKICAgICAqLwoKICAgIHZhciBab25lSXNBYnN0cmFjdEVycm9yID0gLyojX19QVVJFX18qL2Z1bmN0aW9uIChfTHV4b25FcnJvcjcpIHsKICAgICAgX2luaGVyaXRzTG9vc2UoWm9uZUlzQWJzdHJhY3RFcnJvciwgX0x1eG9uRXJyb3I3KTsKCiAgICAgIGZ1bmN0aW9uIFpvbmVJc0Fic3RyYWN0RXJyb3IoKSB7CiAgICAgICAgcmV0dXJuIF9MdXhvbkVycm9yNy5jYWxsKHRoaXMsICJab25lIGlzIGFuIGFic3RyYWN0IGNsYXNzIikgfHwgdGhpczsKICAgICAgfQoKICAgICAgcmV0dXJuIFpvbmVJc0Fic3RyYWN0RXJyb3I7CiAgICB9KEx1eG9uRXJyb3IpOwoKICAgIC8qKgogICAgICogQHByaXZhdGUKICAgICAqLwogICAgdmFyIG4gPSAibnVtZXJpYyIsCiAgICAgICAgcyA9ICJzaG9ydCIsCiAgICAgICAgbCA9ICJsb25nIjsKICAgIHZhciBEQVRFX1NIT1JUID0gewogICAgICB5ZWFyOiBuLAogICAgICBtb250aDogbiwKICAgICAgZGF5OiBuCiAgICB9OwogICAgdmFyIERBVEVfTUVEID0gewogICAgICB5ZWFyOiBuLAogICAgICBtb250aDogcywKICAgICAgZGF5OiBuCiAgICB9OwogICAgdmFyIERBVEVfTUVEX1dJVEhfV0VFS0RBWSA9IHsKICAgICAgeWVhcjogbiwKICAgICAgbW9udGg6IHMsCiAgICAgIGRheTogbiwKICAgICAgd2Vla2RheTogcwogICAgfTsKICAgIHZhciBEQVRFX0ZVTEwgPSB7CiAgICAgIHllYXI6IG4sCiAgICAgIG1vbnRoOiBsLAogICAgICBkYXk6IG4KICAgIH07CiAgICB2YXIgREFURV9IVUdFID0gewogICAgICB5ZWFyOiBuLAogICAgICBtb250aDogbCwKICAgICAgZGF5OiBuLAogICAgICB3ZWVrZGF5OiBsCiAgICB9OwogICAgdmFyIFRJTUVfU0lNUExFID0gewogICAgICBob3VyOiBuLAogICAgICBtaW51dGU6IG4KICAgIH07CiAgICB2YXIgVElNRV9XSVRIX1NFQ09ORFMgPSB7CiAgICAgIGhvdXI6IG4sCiAgICAgIG1pbnV0ZTogbiwKICAgICAgc2Vjb25kOiBuCiAgICB9OwogICAgdmFyIFRJTUVfV0lUSF9TSE9SVF9PRkZTRVQgPSB7CiAgICAgIGhvdXI6IG4sCiAgICAgIG1pbnV0ZTogbiwKICAgICAgc2Vjb25kOiBuLAogICAgICB0aW1lWm9uZU5hbWU6IHMKICAgIH07CiAgICB2YXIgVElNRV9XSVRIX0xPTkdfT0ZGU0VUID0gewogICAgICBob3VyOiBuLAogICAgICBtaW51dGU6IG4sCiAgICAgIHNlY29uZDogbiwKICAgICAgdGltZVpvbmVOYW1lOiBsCiAgICB9OwogICAgdmFyIFRJTUVfMjRfU0lNUExFID0gewogICAgICBob3VyOiBuLAogICAgICBtaW51dGU6IG4sCiAgICAgIGhvdXIxMjogZmFsc2UKICAgIH07CiAgICAvKioKICAgICAqIHtAbGluayB0b0xvY2FsZVN0cmluZ307IGZvcm1hdCBsaWtlICcwOTozMDoyMycsIGFsd2F5cyAyNC1ob3VyLgogICAgICovCgogICAgdmFyIFRJTUVfMjRfV0lUSF9TRUNPTkRTID0gewogICAgICBob3VyOiBuLAogICAgICBtaW51dGU6IG4sCiAgICAgIHNlY29uZDogbiwKICAgICAgaG91cjEyOiBmYWxzZQogICAgfTsKICAgIC8qKgogICAgICoge0BsaW5rIHRvTG9jYWxlU3RyaW5nfTsgZm9ybWF0IGxpa2UgJzA5OjMwOjIzIEVEVCcsIGFsd2F5cyAyNC1ob3VyLgogICAgICovCgogICAgdmFyIFRJTUVfMjRfV0lUSF9TSE9SVF9PRkZTRVQgPSB7CiAgICAgIGhvdXI6IG4sCiAgICAgIG1pbnV0ZTogbiwKICAgICAgc2Vjb25kOiBuLAogICAgICBob3VyMTI6IGZhbHNlLAogICAgICB0aW1lWm9uZU5hbWU6IHMKICAgIH07CiAgICAvKioKICAgICAqIHtAbGluayB0b0xvY2FsZVN0cmluZ307IGZvcm1hdCBsaWtlICcwOTozMDoyMyBFYXN0ZXJuIERheWxpZ2h0IFRpbWUnLCBhbHdheXMgMjQtaG91ci4KICAgICAqLwoKICAgIHZhciBUSU1FXzI0X1dJVEhfTE9OR19PRkZTRVQgPSB7CiAgICAgIGhvdXI6IG4sCiAgICAgIG1pbnV0ZTogbiwKICAgICAgc2Vjb25kOiBuLAogICAgICBob3VyMTI6IGZhbHNlLAogICAgICB0aW1lWm9uZU5hbWU6IGwKICAgIH07CiAgICAvKioKICAgICAqIHtAbGluayB0b0xvY2FsZVN0cmluZ307IGZvcm1hdCBsaWtlICcxMC8xNC8xOTgzLCA5OjMwIEFNJy4gT25seSAxMi1ob3VyIGlmIHRoZSBsb2NhbGUgaXMuCiAgICAgKi8KCiAgICB2YXIgREFURVRJTUVfU0hPUlQgPSB7CiAgICAgIHllYXI6IG4sCiAgICAgIG1vbnRoOiBuLAogICAgICBkYXk6IG4sCiAgICAgIGhvdXI6IG4sCiAgICAgIG1pbnV0ZTogbgogICAgfTsKICAgIC8qKgogICAgICoge0BsaW5rIHRvTG9jYWxlU3RyaW5nfTsgZm9ybWF0IGxpa2UgJzEwLzE0LzE5ODMsIDk6MzA6MzMgQU0nLiBPbmx5IDEyLWhvdXIgaWYgdGhlIGxvY2FsZSBpcy4KICAgICAqLwoKICAgIHZhciBEQVRFVElNRV9TSE9SVF9XSVRIX1NFQ09ORFMgPSB7CiAgICAgIHllYXI6IG4sCiAgICAgIG1vbnRoOiBuLAogICAgICBkYXk6IG4sCiAgICAgIGhvdXI6IG4sCiAgICAgIG1pbnV0ZTogbiwKICAgICAgc2Vjb25kOiBuCiAgICB9OwogICAgdmFyIERBVEVUSU1FX01FRCA9IHsKICAgICAgeWVhcjogbiwKICAgICAgbW9udGg6IHMsCiAgICAgIGRheTogbiwKICAgICAgaG91cjogbiwKICAgICAgbWludXRlOiBuCiAgICB9OwogICAgdmFyIERBVEVUSU1FX01FRF9XSVRIX1NFQ09ORFMgPSB7CiAgICAgIHllYXI6IG4sCiAgICAgIG1vbnRoOiBzLAogICAgICBkYXk6IG4sCiAgICAgIGhvdXI6IG4sCiAgICAgIG1pbnV0ZTogbiwKICAgICAgc2Vjb25kOiBuCiAgICB9OwogICAgdmFyIERBVEVUSU1FX01FRF9XSVRIX1dFRUtEQVkgPSB7CiAgICAgIHllYXI6IG4sCiAgICAgIG1vbnRoOiBzLAogICAgICBkYXk6IG4sCiAgICAgIHdlZWtkYXk6IHMsCiAgICAgIGhvdXI6IG4sCiAgICAgIG1pbnV0ZTogbgogICAgfTsKICAgIHZhciBEQVRFVElNRV9GVUxMID0gewogICAgICB5ZWFyOiBuLAogICAgICBtb250aDogbCwKICAgICAgZGF5OiBuLAogICAgICBob3VyOiBuLAogICAgICBtaW51dGU6IG4sCiAgICAgIHRpbWVab25lTmFtZTogcwogICAgfTsKICAgIHZhciBEQVRFVElNRV9GVUxMX1dJVEhfU0VDT05EUyA9IHsKICAgICAgeWVhcjogbiwKICAgICAgbW9udGg6IGwsCiAgICAgIGRheTogbiwKICAgICAgaG91cjogbiwKICAgICAgbWludXRlOiBuLAogICAgICBzZWNvbmQ6IG4sCiAgICAgIHRpbWVab25lTmFtZTogcwogICAgfTsKICAgIHZhciBEQVRFVElNRV9IVUdFID0gewogICAgICB5ZWFyOiBuLAogICAgICBtb250aDogbCwKICAgICAgZGF5OiBuLAogICAgICB3ZWVrZGF5OiBsLAogICAgICBob3VyOiBuLAogICAgICBtaW51dGU6IG4sCiAgICAgIHRpbWVab25lTmFtZTogbAogICAgfTsKICAgIHZhciBEQVRFVElNRV9IVUdFX1dJVEhfU0VDT05EUyA9IHsKICAgICAgeWVhcjogbiwKICAgICAgbW9udGg6IGwsCiAgICAgIGRheTogbiwKICAgICAgd2Vla2RheTogbCwKICAgICAgaG91cjogbiwKICAgICAgbWludXRlOiBuLAogICAgICBzZWNvbmQ6IG4sCiAgICAgIHRpbWVab25lTmFtZTogbAogICAgfTsKCiAgICAvKgogICAgICBUaGlzIGlzIGp1c3QgYSBqdW5rIGRyYXdlciwgY29udGFpbmluZyBhbnl0aGluZyB1c2VkIGFjcm9zcyBtdWx0aXBsZSBjbGFzc2VzLgogICAgICBCZWNhdXNlIEx1eG9uIGlzIHNtYWxsKGlzaCksIHRoaXMgc2hvdWxkIHN0YXkgc21hbGwgYW5kIHdlIHdvbid0IHdvcnJ5IGFib3V0IHNwbGl0dGluZwogICAgICBpdCB1cCBpbnRvLCBzYXksIHBhcnNpbmdVdGlsLmpzIGFuZCBiYXNpY1V0aWwuanMgYW5kIHNvIG9uLiBCdXQgdGhleSBhcmUgZGl2aWRlZCB1cCBieSBmZWF0dXJlIGFyZWEuCiAgICAqLwogICAgLyoqCiAgICAgKiBAcHJpdmF0ZQogICAgICovCiAgICAvLyBUWVBFUwoKICAgIGZ1bmN0aW9uIGlzVW5kZWZpbmVkKG8pIHsKICAgICAgcmV0dXJuIHR5cGVvZiBvID09PSAidW5kZWZpbmVkIjsKICAgIH0KICAgIGZ1bmN0aW9uIGlzTnVtYmVyKG8pIHsKICAgICAgcmV0dXJuIHR5cGVvZiBvID09PSAibnVtYmVyIjsKICAgIH0KICAgIGZ1bmN0aW9uIGlzSW50ZWdlcihvKSB7CiAgICAgIHJldHVybiB0eXBlb2YgbyA9PT0gIm51bWJlciIgJiYgbyAlIDEgPT09IDA7CiAgICB9CiAgICBmdW5jdGlvbiBpc1N0cmluZyhvKSB7CiAgICAgIHJldHVybiB0eXBlb2YgbyA9PT0gInN0cmluZyI7CiAgICB9CiAgICBmdW5jdGlvbiBpc0RhdGUobykgewogICAgICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG8pID09PSAiW29iamVjdCBEYXRlXSI7CiAgICB9IC8vIENBUEFCSUxJVElFUwoKICAgIGZ1bmN0aW9uIGhhc0ludGwoKSB7CiAgICAgIHRyeSB7CiAgICAgICAgcmV0dXJuIHR5cGVvZiBJbnRsICE9PSAidW5kZWZpbmVkIiAmJiBJbnRsLkRhdGVUaW1lRm9ybWF0OwogICAgICB9IGNhdGNoIChlKSB7CiAgICAgICAgcmV0dXJuIGZhbHNlOwogICAgICB9CiAgICB9CiAgICBmdW5jdGlvbiBoYXNGb3JtYXRUb1BhcnRzKCkgewogICAgICByZXR1cm4gIWlzVW5kZWZpbmVkKEludGwuRGF0ZVRpbWVGb3JtYXQucHJvdG90eXBlLmZvcm1hdFRvUGFydHMpOwogICAgfQogICAgZnVuY3Rpb24gaGFzUmVsYXRpdmUoKSB7CiAgICAgIHRyeSB7CiAgICAgICAgcmV0dXJuIHR5cGVvZiBJbnRsICE9PSAidW5kZWZpbmVkIiAmJiAhIUludGwuUmVsYXRpdmVUaW1lRm9ybWF0OwogICAgICB9IGNhdGNoIChlKSB7CiAgICAgICAgcmV0dXJuIGZhbHNlOwogICAgICB9CiAgICB9IC8vIE9CSkVDVFMgQU5EIEFSUkFZUwoKICAgIGZ1bmN0aW9uIG1heWJlQXJyYXkodGhpbmcpIHsKICAgICAgcmV0dXJuIEFycmF5LmlzQXJyYXkodGhpbmcpID8gdGhpbmcgOiBbdGhpbmddOwogICAgfQogICAgZnVuY3Rpb24gYmVzdEJ5KGFyciwgYnksIGNvbXBhcmUpIHsKICAgICAgaWYgKGFyci5sZW5ndGggPT09IDApIHsKICAgICAgICByZXR1cm4gdW5kZWZpbmVkOwogICAgICB9CgogICAgICByZXR1cm4gYXJyLnJlZHVjZShmdW5jdGlvbiAoYmVzdCwgbmV4dCkgewogICAgICAgIHZhciBwYWlyID0gW2J5KG5leHQpLCBuZXh0XTsKCiAgICAgICAgaWYgKCFiZXN0KSB7CiAgICAgICAgICByZXR1cm4gcGFpcjsKICAgICAgICB9IGVsc2UgaWYgKGNvbXBhcmUoYmVzdFswXSwgcGFpclswXSkgPT09IGJlc3RbMF0pIHsKICAgICAgICAgIHJldHVybiBiZXN0OwogICAgICAgIH0gZWxzZSB7CiAgICAgICAgICByZXR1cm4gcGFpcjsKICAgICAgICB9CiAgICAgIH0sIG51bGwpWzFdOwogICAgfQogICAgZnVuY3Rpb24gcGljayhvYmosIGtleXMpIHsKICAgICAgcmV0dXJuIGtleXMucmVkdWNlKGZ1bmN0aW9uIChhLCBrKSB7CiAgICAgICAgYVtrXSA9IG9ialtrXTsKICAgICAgICByZXR1cm4gYTsKICAgICAgfSwge30pOwogICAgfQogICAgZnVuY3Rpb24gaGFzT3duUHJvcGVydHkob2JqLCBwcm9wKSB7CiAgICAgIHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKTsKICAgIH0gLy8gTlVNQkVSUyBBTkQgU1RSSU5HUwoKICAgIGZ1bmN0aW9uIGludGVnZXJCZXR3ZWVuKHRoaW5nLCBib3R0b20sIHRvcCkgewogICAgICByZXR1cm4gaXNJbnRlZ2VyKHRoaW5nKSAmJiB0aGluZyA+PSBib3R0b20gJiYgdGhpbmcgPD0gdG9wOwogICAgfSAvLyB4ICUgbiBidXQgdGFrZXMgdGhlIHNpZ24gb2YgbiBpbnN0ZWFkIG9mIHgKCiAgICBmdW5jdGlvbiBmbG9vck1vZCh4LCBuKSB7CiAgICAgIHJldHVybiB4IC0gbiAqIE1hdGguZmxvb3IoeCAvIG4pOwogICAgfQogICAgZnVuY3Rpb24gcGFkU3RhcnQoaW5wdXQsIG4pIHsKICAgICAgaWYgKG4gPT09IHZvaWQgMCkgewogICAgICAgIG4gPSAyOwogICAgICB9CgogICAgICB2YXIgbWludXMgPSBpbnB1dCA8IDAgPyAiLSIgOiAiIjsKICAgICAgdmFyIHRhcmdldCA9IG1pbnVzID8gaW5wdXQgKiAtMSA6IGlucHV0OwogICAgICB2YXIgcmVzdWx0OwoKICAgICAgaWYgKHRhcmdldC50b1N0cmluZygpLmxlbmd0aCA8IG4pIHsKICAgICAgICByZXN1bHQgPSAoIjAiLnJlcGVhdChuKSArIHRhcmdldCkuc2xpY2UoLW4pOwogICAgICB9IGVsc2UgewogICAgICAgIHJlc3VsdCA9IHRhcmdldC50b1N0cmluZygpOwogICAgICB9CgogICAgICByZXR1cm4gIiIgKyBtaW51cyArIHJlc3VsdDsKICAgIH0KICAgIGZ1bmN0aW9uIHBhcnNlSW50ZWdlcihzdHJpbmcpIHsKICAgICAgaWYgKGlzVW5kZWZpbmVkKHN0cmluZykgfHwgc3RyaW5nID09PSBudWxsIHx8IHN0cmluZyA9PT0gIiIpIHsKICAgICAgICByZXR1cm4gdW5kZWZpbmVkOwogICAgICB9IGVsc2UgewogICAgICAgIHJldHVybiBwYXJzZUludChzdHJpbmcsIDEwKTsKICAgICAgfQogICAgfQogICAgZnVuY3Rpb24gcGFyc2VNaWxsaXMoZnJhY3Rpb24pIHsKICAgICAgLy8gUmV0dXJuIHVuZGVmaW5lZCAoaW5zdGVhZCBvZiAwKSBpbiB0aGVzZSBjYXNlcywgd2hlcmUgZnJhY3Rpb24gaXMgbm90IHNldAogICAgICBpZiAoaXNVbmRlZmluZWQoZnJhY3Rpb24pIHx8IGZyYWN0aW9uID09PSBudWxsIHx8IGZyYWN0aW9uID09PSAiIikgewogICAgICAgIHJldHVybiB1bmRlZmluZWQ7CiAgICAgIH0gZWxzZSB7CiAgICAgICAgdmFyIGYgPSBwYXJzZUZsb2F0KCIwLiIgKyBmcmFjdGlvbikgKiAxMDAwOwogICAgICAgIHJldHVybiBNYXRoLmZsb29yKGYpOwogICAgICB9CiAgICB9CiAgICBmdW5jdGlvbiByb3VuZFRvKG51bWJlciwgZGlnaXRzLCB0b3dhcmRaZXJvKSB7CiAgICAgIGlmICh0b3dhcmRaZXJvID09PSB2b2lkIDApIHsKICAgICAgICB0b3dhcmRaZXJvID0gZmFsc2U7CiAgICAgIH0KCiAgICAgIHZhciBmYWN0b3IgPSBNYXRoLnBvdygxMCwgZGlnaXRzKSwKICAgICAgICAgIHJvdW5kZXIgPSB0b3dhcmRaZXJvID8gTWF0aC50cnVuYyA6IE1hdGgucm91bmQ7CiAgICAgIHJldHVybiByb3VuZGVyKG51bWJlciAqIGZhY3RvcikgLyBmYWN0b3I7CiAgICB9IC8vIERBVEUgQkFTSUNTCgogICAgZnVuY3Rpb24gaXNMZWFwWWVhcih5ZWFyKSB7CiAgICAgIHJldHVybiB5ZWFyICUgNCA9PT0gMCAmJiAoeWVhciAlIDEwMCAhPT0gMCB8fCB5ZWFyICUgNDAwID09PSAwKTsKICAgIH0KICAgIGZ1bmN0aW9uIGRheXNJblllYXIoeWVhcikgewogICAgICByZXR1cm4gaXNMZWFwWWVhcih5ZWFyKSA/IDM2NiA6IDM2NTsKICAgIH0KICAgIGZ1bmN0aW9uIGRheXNJbk1vbnRoKHllYXIsIG1vbnRoKSB7CiAgICAgIHZhciBtb2RNb250aCA9IGZsb29yTW9kKG1vbnRoIC0gMSwgMTIpICsgMSwKICAgICAgICAgIG1vZFllYXIgPSB5ZWFyICsgKG1vbnRoIC0gbW9kTW9udGgpIC8gMTI7CgogICAgICBpZiAobW9kTW9udGggPT09IDIpIHsKICAgICAgICByZXR1cm4gaXNMZWFwWWVhcihtb2RZZWFyKSA/IDI5IDogMjg7CiAgICAgIH0gZWxzZSB7CiAgICAgICAgcmV0dXJuIFszMSwgbnVsbCwgMzEsIDMwLCAzMSwgMzAsIDMxLCAzMSwgMzAsIDMxLCAzMCwgMzFdW21vZE1vbnRoIC0gMV07CiAgICAgIH0KICAgIH0gLy8gY292ZXJ0IGEgY2FsZW5kYXIgb2JqZWN0IHRvIGEgbG9jYWwgdGltZXN0YW1wIChlcG9jaCwgYnV0IHdpdGggdGhlIG9mZnNldCBiYWtlZCBpbikKCiAgICBmdW5jdGlvbiBvYmpUb0xvY2FsVFMob2JqKSB7CiAgICAgIHZhciBkID0gRGF0ZS5VVEMob2JqLnllYXIsIG9iai5tb250aCAtIDEsIG9iai5kYXksIG9iai5ob3VyLCBvYmoubWludXRlLCBvYmouc2Vjb25kLCBvYmoubWlsbGlzZWNvbmQpOyAvLyBmb3IgbGVnYWN5IHJlYXNvbnMsIHllYXJzIGJldHdlZW4gMCBhbmQgOTkgYXJlIGludGVycHJldGVkIGFzIDE5WFg7IHJldmVydCB0aGF0CgogICAgICBpZiAob2JqLnllYXIgPCAxMDAgJiYgb2JqLnllYXIgPj0gMCkgewogICAgICAgIGQgPSBuZXcgRGF0ZShkKTsKICAgICAgICBkLnNldFVUQ0Z1bGxZZWFyKGQuZ2V0VVRDRnVsbFllYXIoKSAtIDE5MDApOwogICAgICB9CgogICAgICByZXR1cm4gK2Q7CiAgICB9CiAgICBmdW5jdGlvbiB3ZWVrc0luV2Vla1llYXIod2Vla1llYXIpIHsKICAgICAgdmFyIHAxID0gKHdlZWtZZWFyICsgTWF0aC5mbG9vcih3ZWVrWWVhciAvIDQpIC0gTWF0aC5mbG9vcih3ZWVrWWVhciAvIDEwMCkgKyBNYXRoLmZsb29yKHdlZWtZZWFyIC8gNDAwKSkgJSA3LAogICAgICAgICAgbGFzdCA9IHdlZWtZZWFyIC0gMSwKICAgICAgICAgIHAyID0gKGxhc3QgKyBNYXRoLmZsb29yKGxhc3QgLyA0KSAtIE1hdGguZmxvb3IobGFzdCAvIDEwMCkgKyBNYXRoLmZsb29yKGxhc3QgLyA0MDApKSAlIDc7CiAgICAgIHJldHVybiBwMSA9PT0gNCB8fCBwMiA9PT0gMyA/IDUzIDogNTI7CiAgICB9CiAgICBmdW5jdGlvbiB1bnRydW5jYXRlWWVhcih5ZWFyKSB7CiAgICAgIGlmICh5ZWFyID4gOTkpIHsKICAgICAgICByZXR1cm4geWVhcjsKICAgICAgfSBlbHNlIHJldHVybiB5ZWFyID4gNjAgPyAxOTAwICsgeWVhciA6IDIwMDAgKyB5ZWFyOwogICAgfSAvLyBQQVJTSU5HCgogICAgZnVuY3Rpb24gcGFyc2Vab25lSW5mbyh0cywgb2Zmc2V0Rm9ybWF0LCBsb2NhbGUsIHRpbWVab25lKSB7CiAgICAgIGlmICh0aW1lWm9uZSA9PT0gdm9pZCAwKSB7CiAgICAgICAgdGltZVpvbmUgPSBudWxsOwogICAgICB9CgogICAgICB2YXIgZGF0ZSA9IG5ldyBEYXRlKHRzKSwKICAgICAgICAgIGludGxPcHRzID0gewogICAgICAgIGhvdXIxMjogZmFsc2UsCiAgICAgICAgeWVhcjogIm51bWVyaWMiLAogICAgICAgIG1vbnRoOiAiMi1kaWdpdCIsCiAgICAgICAgZGF5OiAiMi1kaWdpdCIsCiAgICAgICAgaG91cjogIjItZGlnaXQiLAogICAgICAgIG1pbnV0ZTogIjItZGlnaXQiCiAgICAgIH07CgogICAgICBpZiAodGltZVpvbmUpIHsKICAgICAgICBpbnRsT3B0cy50aW1lWm9uZSA9IHRpbWVab25lOwogICAgICB9CgogICAgICB2YXIgbW9kaWZpZWQgPSBPYmplY3QuYXNzaWduKHsKICAgICAgICB0aW1lWm9uZU5hbWU6IG9mZnNldEZvcm1hdAogICAgICB9LCBpbnRsT3B0cyksCiAgICAgICAgICBpbnRsID0gaGFzSW50bCgpOwoKICAgICAgaWYgKGludGwgJiYgaGFzRm9ybWF0VG9QYXJ0cygpKSB7CiAgICAgICAgdmFyIHBhcnNlZCA9IG5ldyBJbnRsLkRhdGVUaW1lRm9ybWF0KGxvY2FsZSwgbW9kaWZpZWQpLmZvcm1hdFRvUGFydHMoZGF0ZSkuZmluZChmdW5jdGlvbiAobSkgewogICAgICAgICAgcmV0dXJuIG0udHlwZS50b0xvd2VyQ2FzZSgpID09PSAidGltZXpvbmVuYW1lIjsKICAgICAgICB9KTsKICAgICAgICByZXR1cm4gcGFyc2VkID8gcGFyc2VkLnZhbHVlIDogbnVsbDsKICAgICAgfSBlbHNlIGlmIChpbnRsKSB7CiAgICAgICAgLy8gdGhpcyBwcm9iYWJseSBkb2Vzbid0IHdvcmsgZm9yIGFsbCBsb2NhbGVzCiAgICAgICAgdmFyIHdpdGhvdXQgPSBuZXcgSW50bC5EYXRlVGltZUZvcm1hdChsb2NhbGUsIGludGxPcHRzKS5mb3JtYXQoZGF0ZSksCiAgICAgICAgICAgIGluY2x1ZGVkID0gbmV3IEludGwuRGF0ZVRpbWVGb3JtYXQobG9jYWxlLCBtb2RpZmllZCkuZm9ybWF0KGRhdGUpLAogICAgICAgICAgICBkaWZmZWQgPSBpbmNsdWRlZC5zdWJzdHJpbmcod2l0aG91dC5sZW5ndGgpLAogICAgICAgICAgICB0cmltbWVkID0gZGlmZmVkLnJlcGxhY2UoL15bLCBcdTIwMGVdKy8sICIiKTsKICAgICAgICByZXR1cm4gdHJpbW1lZDsKICAgICAgfSBlbHNlIHsKICAgICAgICByZXR1cm4gbnVsbDsKICAgICAgfQogICAgfSAvLyBzaWduZWRPZmZzZXQoJy01JywgJzMwJykgLT4gLTMzMAoKICAgIGZ1bmN0aW9uIHNpZ25lZE9mZnNldChvZmZIb3VyU3RyLCBvZmZNaW51dGVTdHIpIHsKICAgICAgdmFyIG9mZkhvdXIgPSBwYXJzZUludChvZmZIb3VyU3RyLCAxMCk7IC8vIGRvbid0IHx8IHRoaXMgYmVjYXVzZSB3ZSB3YW50IHRvIHByZXNlcnZlIC0wCgogICAgICBpZiAoTnVtYmVyLmlzTmFOKG9mZkhvdXIpKSB7CiAgICAgICAgb2ZmSG91ciA9IDA7CiAgICAgIH0KCiAgICAgIHZhciBvZmZNaW4gPSBwYXJzZUludChvZmZNaW51dGVTdHIsIDEwKSB8fCAwLAogICAgICAgICAgb2ZmTWluU2lnbmVkID0gb2ZmSG91ciA8IDAgfHwgT2JqZWN0LmlzKG9mZkhvdXIsIC0wKSA/IC1vZmZNaW4gOiBvZmZNaW47CiAgICAgIHJldHVybiBvZmZIb3VyICogNjAgKyBvZmZNaW5TaWduZWQ7CiAgICB9IC8vIENPRVJDSU9OCgogICAgZnVuY3Rpb24gYXNOdW1iZXIodmFsdWUpIHsKICAgICAgdmFyIG51bWVyaWNWYWx1ZSA9IE51bWJlcih2YWx1ZSk7CiAgICAgIGlmICh0eXBlb2YgdmFsdWUgPT09ICJib29sZWFuIiB8fCB2YWx1ZSA9PT0gIiIgfHwgTnVtYmVyLmlzTmFOKG51bWVyaWNWYWx1ZSkpIHRocm93IG5ldyBJbnZhbGlkQXJndW1lbnRFcnJvcigiSW52YWxpZCB1bml0IHZhbHVlICIgKyB2YWx1ZSk7CiAgICAgIHJldHVybiBudW1lcmljVmFsdWU7CiAgICB9CiAgICBmdW5jdGlvbiBub3JtYWxpemVPYmplY3Qob2JqLCBub3JtYWxpemVyLCBub25Vbml0S2V5cykgewogICAgICB2YXIgbm9ybWFsaXplZCA9IHt9OwoKICAgICAgZm9yICh2YXIgdSBpbiBvYmopIHsKICAgICAgICBpZiAoaGFzT3duUHJvcGVydHkob2JqLCB1KSkgewogICAgICAgICAgaWYgKG5vblVuaXRLZXlzLmluZGV4T2YodSkgPj0gMCkgY29udGludWU7CiAgICAgICAgICB2YXIgdiA9IG9ialt1XTsKICAgICAgICAgIGlmICh2ID09PSB1bmRlZmluZWQgfHwgdiA9PT0gbnVsbCkgY29udGludWU7CiAgICAgICAgICBub3JtYWxpemVkW25vcm1hbGl6ZXIodSldID0gYXNOdW1iZXIodik7CiAgICAgICAgfQogICAgICB9CgogICAgICByZXR1cm4gbm9ybWFsaXplZDsKICAgIH0KICAgIGZ1bmN0aW9uIGZvcm1hdE9mZnNldChvZmZzZXQsIGZvcm1hdCkgewogICAgICB2YXIgaG91cnMgPSBNYXRoLnRydW5jKE1hdGguYWJzKG9mZnNldCAvIDYwKSksCiAgICAgICAgICBtaW51dGVzID0gTWF0aC50cnVuYyhNYXRoLmFicyhvZmZzZXQgJSA2MCkpLAogICAgICAgICAgc2lnbiA9IG9mZnNldCA+PSAwID8gIisiIDogIi0iOwoKICAgICAgc3dpdGNoIChmb3JtYXQpIHsKICAgICAgICBjYXNlICJzaG9ydCI6CiAgICAgICAgICByZXR1cm4gIiIgKyBzaWduICsgcGFkU3RhcnQoaG91cnMsIDIpICsgIjoiICsgcGFkU3RhcnQobWludXRlcywgMik7CgogICAgICAgIGNhc2UgIm5hcnJvdyI6CiAgICAgICAgICByZXR1cm4gIiIgKyBzaWduICsgaG91cnMgKyAobWludXRlcyA+IDAgPyAiOiIgKyBtaW51dGVzIDogIiIpOwoKICAgICAgICBjYXNlICJ0ZWNoaWUiOgogICAgICAgICAgcmV0dXJuICIiICsgc2lnbiArIHBhZFN0YXJ0KGhvdXJzLCAyKSArIHBhZFN0YXJ0KG1pbnV0ZXMsIDIpOwoKICAgICAgICBkZWZhdWx0OgogICAgICAgICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoIlZhbHVlIGZvcm1hdCAiICsgZm9ybWF0ICsgIiBpcyBvdXQgb2YgcmFuZ2UgZm9yIHByb3BlcnR5IGZvcm1hdCIpOwogICAgICB9CiAgICB9CiAgICBmdW5jdGlvbiB0aW1lT2JqZWN0KG9iaikgewogICAgICByZXR1cm4gcGljayhvYmosIFsiaG91ciIsICJtaW51dGUiLCAic2Vjb25kIiwgIm1pbGxpc2Vjb25kIl0pOwogICAgfQogICAgdmFyIGlhbmFSZWdleCA9IC9bQS1aYS16XystXXsxLDI1Nn0oOj9cL1tBLVphLXpfKy1dezEsMjU2fShcL1tBLVphLXpfKy1dezEsMjU2fSk/KT8vOwoKICAgIGZ1bmN0aW9uIHN0cmluZ2lmeShvYmopIHsKICAgICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KG9iaiwgT2JqZWN0LmtleXMob2JqKS5zb3J0KCkpOwogICAgfQogICAgLyoqCiAgICAgKiBAcHJpdmF0ZQogICAgICovCgoKICAgIHZhciBtb250aHNMb25nID0gWyJKYW51YXJ5IiwgIkZlYnJ1YXJ5IiwgIk1hcmNoIiwgIkFwcmlsIiwgIk1heSIsICJKdW5lIiwgIkp1bHkiLCAiQXVndXN0IiwgIlNlcHRlbWJlciIsICJPY3RvYmVyIiwgIk5vdmVtYmVyIiwgIkRlY2VtYmVyIl07CiAgICB2YXIgbW9udGhzU2hvcnQgPSBbIkphbiIsICJGZWIiLCAiTWFyIiwgIkFwciIsICJNYXkiLCAiSnVuIiwgIkp1bCIsICJBdWciLCAiU2VwIiwgIk9jdCIsICJOb3YiLCAiRGVjIl07CiAgICB2YXIgbW9udGhzTmFycm93ID0gWyJKIiwgIkYiLCAiTSIsICJBIiwgIk0iLCAiSiIsICJKIiwgIkEiLCAiUyIsICJPIiwgIk4iLCAiRCJdOwogICAgZnVuY3Rpb24gbW9udGhzKGxlbmd0aCkgewogICAgICBzd2l0Y2ggKGxlbmd0aCkgewogICAgICAgIGNhc2UgIm5hcnJvdyI6CiAgICAgICAgICByZXR1cm4gW10uY29uY2F0KG1vbnRoc05hcnJvdyk7CgogICAgICAgIGNhc2UgInNob3J0IjoKICAgICAgICAgIHJldHVybiBbXS5jb25jYXQobW9udGhzU2hvcnQpOwoKICAgICAgICBjYXNlICJsb25nIjoKICAgICAgICAgIHJldHVybiBbXS5jb25jYXQobW9udGhzTG9uZyk7CgogICAgICAgIGNhc2UgIm51bWVyaWMiOgogICAgICAgICAgcmV0dXJuIFsiMSIsICIyIiwgIjMiLCAiNCIsICI1IiwgIjYiLCAiNyIsICI4IiwgIjkiLCAiMTAiLCAiMTEiLCAiMTIiXTsKCiAgICAgICAgY2FzZSAiMi1kaWdpdCI6CiAgICAgICAgICByZXR1cm4gWyIwMSIsICIwMiIsICIwMyIsICIwNCIsICIwNSIsICIwNiIsICIwNyIsICIwOCIsICIwOSIsICIxMCIsICIxMSIsICIxMiJdOwoKICAgICAgICBkZWZhdWx0OgogICAgICAgICAgcmV0dXJuIG51bGw7CiAgICAgIH0KICAgIH0KICAgIHZhciB3ZWVrZGF5c0xvbmcgPSBbIk1vbmRheSIsICJUdWVzZGF5IiwgIldlZG5lc2RheSIsICJUaHVyc2RheSIsICJGcmlkYXkiLCAiU2F0dXJkYXkiLCAiU3VuZGF5Il07CiAgICB2YXIgd2Vla2RheXNTaG9ydCA9IFsiTW9uIiwgIlR1ZSIsICJXZWQiLCAiVGh1IiwgIkZyaSIsICJTYXQiLCAiU3VuIl07CiAgICB2YXIgd2Vla2RheXNOYXJyb3cgPSBbIk0iLCAiVCIsICJXIiwgIlQiLCAiRiIsICJTIiwgIlMiXTsKICAgIGZ1bmN0aW9uIHdlZWtkYXlzKGxlbmd0aCkgewogICAgICBzd2l0Y2ggKGxlbmd0aCkgewogICAgICAgIGNhc2UgIm5hcnJvdyI6CiAgICAgICAgICByZXR1cm4gW10uY29uY2F0KHdlZWtkYXlzTmFycm93KTsKCiAgICAgICAgY2FzZSAic2hvcnQiOgogICAgICAgICAgcmV0dXJuIFtdLmNvbmNhdCh3ZWVrZGF5c1Nob3J0KTsKCiAgICAgICAgY2FzZSAibG9uZyI6CiAgICAgICAgICByZXR1cm4gW10uY29uY2F0KHdlZWtkYXlzTG9uZyk7CgogICAgICAgIGNhc2UgIm51bWVyaWMiOgogICAgICAgICAgcmV0dXJuIFsiMSIsICIyIiwgIjMiLCAiNCIsICI1IiwgIjYiLCAiNyJdOwoKICAgICAgICBkZWZhdWx0OgogICAgICAgICAgcmV0dXJuIG51bGw7CiAgICAgIH0KICAgIH0KICAgIHZhciBtZXJpZGllbXMgPSBbIkFNIiwgIlBNIl07CiAgICB2YXIgZXJhc0xvbmcgPSBbIkJlZm9yZSBDaHJpc3QiLCAiQW5ubyBEb21pbmkiXTsKICAgIHZhciBlcmFzU2hvcnQgPSBbIkJDIiwgIkFEIl07CiAgICB2YXIgZXJhc05hcnJvdyA9IFsiQiIsICJBIl07CiAgICBmdW5jdGlvbiBlcmFzKGxlbmd0aCkgewogICAgICBzd2l0Y2ggKGxlbmd0aCkgewogICAgICAgIGNhc2UgIm5hcnJvdyI6CiAgICAgICAgICByZXR1cm4gW10uY29uY2F0KGVyYXNOYXJyb3cpOwoKICAgICAgICBjYXNlICJzaG9ydCI6CiAgICAgICAgICByZXR1cm4gW10uY29uY2F0KGVyYXNTaG9ydCk7CgogICAgICAgIGNhc2UgImxvbmciOgogICAgICAgICAgcmV0dXJuIFtdLmNvbmNhdChlcmFzTG9uZyk7CgogICAgICAgIGRlZmF1bHQ6CiAgICAgICAgICByZXR1cm4gbnVsbDsKICAgICAgfQogICAgfQogICAgZnVuY3Rpb24gbWVyaWRpZW1Gb3JEYXRlVGltZShkdCkgewogICAgICByZXR1cm4gbWVyaWRpZW1zW2R0LmhvdXIgPCAxMiA/IDAgOiAxXTsKICAgIH0KICAgIGZ1bmN0aW9uIHdlZWtkYXlGb3JEYXRlVGltZShkdCwgbGVuZ3RoKSB7CiAgICAgIHJldHVybiB3ZWVrZGF5cyhsZW5ndGgpW2R0LndlZWtkYXkgLSAxXTsKICAgIH0KICAgIGZ1bmN0aW9uIG1vbnRoRm9yRGF0ZVRpbWUoZHQsIGxlbmd0aCkgewogICAgICByZXR1cm4gbW9udGhzKGxlbmd0aClbZHQubW9udGggLSAxXTsKICAgIH0KICAgIGZ1bmN0aW9uIGVyYUZvckRhdGVUaW1lKGR0LCBsZW5ndGgpIHsKICAgICAgcmV0dXJuIGVyYXMobGVuZ3RoKVtkdC55ZWFyIDwgMCA/IDAgOiAxXTsKICAgIH0KICAgIGZ1bmN0aW9uIGZvcm1hdFJlbGF0aXZlVGltZSh1bml0LCBjb3VudCwgbnVtZXJpYywgbmFycm93KSB7CiAgICAgIGlmIChudW1lcmljID09PSB2b2lkIDApIHsKICAgICAgICBudW1lcmljID0gImFsd2F5cyI7CiAgICAgIH0KCiAgICAgIGlmIChuYXJyb3cgPT09IHZvaWQgMCkgewogICAgICAgIG5hcnJvdyA9IGZhbHNlOwogICAgICB9CgogICAgICB2YXIgdW5pdHMgPSB7CiAgICAgICAgeWVhcnM6IFsieWVhciIsICJ5ci4iXSwKICAgICAgICBxdWFydGVyczogWyJxdWFydGVyIiwgInF0ci4iXSwKICAgICAgICBtb250aHM6IFsibW9udGgiLCAibW8uIl0sCiAgICAgICAgd2Vla3M6IFsid2VlayIsICJ3ay4iXSwKICAgICAgICBkYXlzOiBbImRheSIsICJkYXkiLCAiZGF5cyJdLAogICAgICAgIGhvdXJzOiBbImhvdXIiLCAiaHIuIl0sCiAgICAgICAgbWludXRlczogWyJtaW51dGUiLCAibWluLiJdLAogICAgICAgIHNlY29uZHM6IFsic2Vjb25kIiwgInNlYy4iXQogICAgICB9OwogICAgICB2YXIgbGFzdGFibGUgPSBbImhvdXJzIiwgIm1pbnV0ZXMiLCAic2Vjb25kcyJdLmluZGV4T2YodW5pdCkgPT09IC0xOwoKICAgICAgaWYgKG51bWVyaWMgPT09ICJhdXRvIiAmJiBsYXN0YWJsZSkgewogICAgICAgIHZhciBpc0RheSA9IHVuaXQgPT09ICJkYXlzIjsKCiAgICAgICAgc3dpdGNoIChjb3VudCkgewogICAgICAgICAgY2FzZSAxOgogICAgICAgICAgICByZXR1cm4gaXNEYXkgPyAidG9tb3Jyb3ciIDogIm5leHQgIiArIHVuaXRzW3VuaXRdWzBdOwoKICAgICAgICAgIGNhc2UgLTE6CiAgICAgICAgICAgIHJldHVybiBpc0RheSA/ICJ5ZXN0ZXJkYXkiIDogImxhc3QgIiArIHVuaXRzW3VuaXRdWzBdOwoKICAgICAgICAgIGNhc2UgMDoKICAgICAgICAgICAgcmV0dXJuIGlzRGF5ID8gInRvZGF5IiA6ICJ0aGlzICIgKyB1bml0c1t1bml0XVswXTsKCiAgICAgICAgfQogICAgICB9CgogICAgICB2YXIgaXNJblBhc3QgPSBPYmplY3QuaXMoY291bnQsIC0wKSB8fCBjb3VudCA8IDAsCiAgICAgICAgICBmbXRWYWx1ZSA9IE1hdGguYWJzKGNvdW50KSwKICAgICAgICAgIHNpbmd1bGFyID0gZm10VmFsdWUgPT09IDEsCiAgICAgICAgICBsaWxVbml0cyA9IHVuaXRzW3VuaXRdLAogICAgICAgICAgZm10VW5pdCA9IG5hcnJvdyA/IHNpbmd1bGFyID8gbGlsVW5pdHNbMV0gOiBsaWxVbml0c1syXSB8fCBsaWxVbml0c1sxXSA6IHNpbmd1bGFyID8gdW5pdHNbdW5pdF1bMF0gOiB1bml0OwogICAgICByZXR1cm4gaXNJblBhc3QgPyBmbXRWYWx1ZSArICIgIiArIGZtdFVuaXQgKyAiIGFnbyIgOiAiaW4gIiArIGZtdFZhbHVlICsgIiAiICsgZm10VW5pdDsKICAgIH0KICAgIGZ1bmN0aW9uIGZvcm1hdFN0cmluZyhrbm93bkZvcm1hdCkgewogICAgICAvLyB0aGVzZSBhbGwgaGF2ZSB0aGUgb2Zmc2V0cyByZW1vdmVkIGJlY2F1c2Ugd2UgZG9uJ3QgaGF2ZSBhY2Nlc3MgdG8gdGhlbQogICAgICAvLyB3aXRob3V0IGFsbCB0aGUgaW50bCBzdHVmZiB0aGlzIGlzIGJhY2tmaWxsaW5nCiAgICAgIHZhciBmaWx0ZXJlZCA9IHBpY2soa25vd25Gb3JtYXQsIFsid2Vla2RheSIsICJlcmEiLCAieWVhciIsICJtb250aCIsICJkYXkiLCAiaG91ciIsICJtaW51dGUiLCAic2Vjb25kIiwgInRpbWVab25lTmFtZSIsICJob3VyMTIiXSksCiAgICAgICAgICBrZXkgPSBzdHJpbmdpZnkoZmlsdGVyZWQpLAogICAgICAgICAgZGF0ZVRpbWVIdWdlID0gIkVFRUUsIExMTEwgZCwgeXl5eSwgaDptbSBhIjsKCiAgICAgIHN3aXRjaCAoa2V5KSB7CiAgICAgICAgY2FzZSBzdHJpbmdpZnkoREFURV9TSE9SVCk6CiAgICAgICAgICByZXR1cm4gIk0vZC95eXl5IjsKCiAgICAgICAgY2FzZSBzdHJpbmdpZnkoREFURV9NRUQpOgogICAgICAgICAgcmV0dXJuICJMTEwgZCwgeXl5eSI7CgogICAgICAgIGNhc2Ugc3RyaW5naWZ5KERBVEVfTUVEX1dJVEhfV0VFS0RBWSk6CiAgICAgICAgICByZXR1cm4gIkVFRSwgTExMIGQsIHl5eXkiOwoKICAgICAgICBjYXNlIHN0cmluZ2lmeShEQVRFX0ZVTEwpOgogICAgICAgICAgcmV0dXJuICJMTExMIGQsIHl5eXkiOwoKICAgICAgICBjYXNlIHN0cmluZ2lmeShEQVRFX0hVR0UpOgogICAgICAgICAgcmV0dXJuICJFRUVFLCBMTExMIGQsIHl5eXkiOwoKICAgICAgICBjYXNlIHN0cmluZ2lmeShUSU1FX1NJTVBMRSk6CiAgICAgICAgICByZXR1cm4gImg6bW0gYSI7CgogICAgICAgIGNhc2Ugc3RyaW5naWZ5KFRJTUVfV0lUSF9TRUNPTkRTKToKICAgICAgICAgIHJldHVybiAiaDptbTpzcyBhIjsKCiAgICAgICAgY2FzZSBzdHJpbmdpZnkoVElNRV9XSVRIX1NIT1JUX09GRlNFVCk6CiAgICAgICAgICByZXR1cm4gImg6bW0gYSI7CgogICAgICAgIGNhc2Ugc3RyaW5naWZ5KFRJTUVfV0lUSF9MT05HX09GRlNFVCk6CiAgICAgICAgICByZXR1cm4gImg6bW0gYSI7CgogICAgICAgIGNhc2Ugc3RyaW5naWZ5KFRJTUVfMjRfU0lNUExFKToKICAgICAgICAgIHJldHVybiAiSEg6bW0iOwoKICAgICAgICBjYXNlIHN0cmluZ2lmeShUSU1FXzI0X1dJVEhfU0VDT05EUyk6CiAgICAgICAgICByZXR1cm4gIkhIOm1tOnNzIjsKCiAgICAgICAgY2FzZSBzdHJpbmdpZnkoVElNRV8yNF9XSVRIX1NIT1JUX09GRlNFVCk6CiAgICAgICAgICByZXR1cm4gIkhIOm1tIjsKCiAgICAgICAgY2FzZSBzdHJpbmdpZnkoVElNRV8yNF9XSVRIX0xPTkdfT0ZGU0VUKToKICAgICAgICAgIHJldHVybiAiSEg6bW0iOwoKICAgICAgICBjYXNlIHN0cmluZ2lmeShEQVRFVElNRV9TSE9SVCk6CiAgICAgICAgICByZXR1cm4gIk0vZC95eXl5LCBoOm1tIGEiOwoKICAgICAgICBjYXNlIHN0cmluZ2lmeShEQVRFVElNRV9NRUQpOgogICAgICAgICAgcmV0dXJuICJMTEwgZCwgeXl5eSwgaDptbSBhIjsKCiAgICAgICAgY2FzZSBzdHJpbmdpZnkoREFURVRJTUVfRlVMTCk6CiAgICAgICAgICByZXR1cm4gIkxMTEwgZCwgeXl5eSwgaDptbSBhIjsKCiAgICAgICAgY2FzZSBzdHJpbmdpZnkoREFURVRJTUVfSFVHRSk6CiAgICAgICAgICByZXR1cm4gZGF0ZVRpbWVIdWdlOwoKICAgICAgICBjYXNlIHN0cmluZ2lmeShEQVRFVElNRV9TSE9SVF9XSVRIX1NFQ09ORFMpOgogICAgICAgICAgcmV0dXJuICJNL2QveXl5eSwgaDptbTpzcyBhIjsKCiAgICAgICAgY2FzZSBzdHJpbmdpZnkoREFURVRJTUVfTUVEX1dJVEhfU0VDT05EUyk6CiAgICAgICAgICByZXR1cm4gIkxMTCBkLCB5eXl5LCBoOm1tOnNzIGEiOwoKICAgICAgICBjYXNlIHN0cmluZ2lmeShEQVRFVElNRV9NRURfV0lUSF9XRUVLREFZKToKICAgICAgICAgIHJldHVybiAiRUVFLCBkIExMTCB5eXl5LCBoOm1tIGEiOwoKICAgICAgICBjYXNlIHN0cmluZ2lmeShEQVRFVElNRV9GVUxMX1dJVEhfU0VDT05EUyk6CiAgICAgICAgICByZXR1cm4gIkxMTEwgZCwgeXl5eSwgaDptbTpzcyBhIjsKCiAgICAgICAgY2FzZSBzdHJpbmdpZnkoREFURVRJTUVfSFVHRV9XSVRIX1NFQ09ORFMpOgogICAgICAgICAgcmV0dXJuICJFRUVFLCBMTExMIGQsIHl5eXksIGg6bW06c3MgYSI7CgogICAgICAgIGRlZmF1bHQ6CiAgICAgICAgICByZXR1cm4gZGF0ZVRpbWVIdWdlOwogICAgICB9CiAgICB9CgogICAgZnVuY3Rpb24gc3RyaW5naWZ5VG9rZW5zKHNwbGl0cywgdG9rZW5Ub1N0cmluZykgewogICAgICB2YXIgcyA9ICIiOwoKICAgICAgZm9yICh2YXIgX2l0ZXJhdG9yID0gX2NyZWF0ZUZvck9mSXRlcmF0b3JIZWxwZXJMb29zZShzcGxpdHMpLCBfc3RlcDsgIShfc3RlcCA9IF9pdGVyYXRvcigpKS5kb25lOykgewogICAgICAgIHZhciB0b2tlbiA9IF9zdGVwLnZhbHVlOwoKICAgICAgICBpZiAodG9rZW4ubGl0ZXJhbCkgewogICAgICAgICAgcyArPSB0b2tlbi52YWw7CiAgICAgICAgfSBlbHNlIHsKICAgICAgICAgIHMgKz0gdG9rZW5Ub1N0cmluZyh0b2tlbi52YWwpOwogICAgICAgIH0KICAgICAgfQoKICAgICAgcmV0dXJuIHM7CiAgICB9CgogICAgdmFyIF9tYWNyb1Rva2VuVG9Gb3JtYXRPcHRzID0gewogICAgICBEOiBEQVRFX1NIT1JULAogICAgICBERDogREFURV9NRUQsCiAgICAgIERERDogREFURV9GVUxMLAogICAgICBEREREOiBEQVRFX0hVR0UsCiAgICAgIHQ6IFRJTUVfU0lNUExFLAogICAgICB0dDogVElNRV9XSVRIX1NFQ09ORFMsCiAgICAgIHR0dDogVElNRV9XSVRIX1NIT1JUX09GRlNFVCwKICAgICAgdHR0dDogVElNRV9XSVRIX0xPTkdfT0ZGU0VULAogICAgICBUOiBUSU1FXzI0X1NJTVBMRSwKICAgICAgVFQ6IFRJTUVfMjRfV0lUSF9TRUNPTkRTLAogICAgICBUVFQ6IFRJTUVfMjRfV0lUSF9TSE9SVF9PRkZTRVQsCiAgICAgIFRUVFQ6IFRJTUVfMjRfV0lUSF9MT05HX09GRlNFVCwKICAgICAgZjogREFURVRJTUVfU0hPUlQsCiAgICAgIGZmOiBEQVRFVElNRV9NRUQsCiAgICAgIGZmZjogREFURVRJTUVfRlVMTCwKICAgICAgZmZmZjogREFURVRJTUVfSFVHRSwKICAgICAgRjogREFURVRJTUVfU0hPUlRfV0lUSF9TRUNPTkRTLAogICAgICBGRjogREFURVRJTUVfTUVEX1dJVEhfU0VDT05EUywKICAgICAgRkZGOiBEQVRFVElNRV9GVUxMX1dJVEhfU0VDT05EUywKICAgICAgRkZGRjogREFURVRJTUVfSFVHRV9XSVRIX1NFQ09ORFMKICAgIH07CiAgICAvKioKICAgICAqIEBwcml2YXRlCiAgICAgKi8KCiAgICB2YXIgRm9ybWF0dGVyID0gLyojX19QVVJFX18qL2Z1bmN0aW9uICgpIHsKICAgICAgRm9ybWF0dGVyLmNyZWF0ZSA9IGZ1bmN0aW9uIGNyZWF0ZShsb2NhbGUsIG9wdHMpIHsKICAgICAgICBpZiAob3B0cyA9PT0gdm9pZCAwKSB7CiAgICAgICAgICBvcHRzID0ge307CiAgICAgICAgfQoKICAgICAgICByZXR1cm4gbmV3IEZvcm1hdHRlcihsb2NhbGUsIG9wdHMpOwogICAgICB9OwoKICAgICAgRm9ybWF0dGVyLnBhcnNlRm9ybWF0ID0gZnVuY3Rpb24gcGFyc2VGb3JtYXQoZm10KSB7CiAgICAgICAgdmFyIGN1cnJlbnQgPSBudWxsLAogICAgICAgICAgICBjdXJyZW50RnVsbCA9ICIiLAogICAgICAgICAgICBicmFja2V0ZWQgPSBmYWxzZTsKICAgICAgICB2YXIgc3BsaXRzID0gW107CgogICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZm10Lmxlbmd0aDsgaSsrKSB7CiAgICAgICAgICB2YXIgYyA9IGZtdC5jaGFyQXQoaSk7CgogICAgICAgICAgaWYgKGMgPT09ICInIikgewogICAgICAgICAgICBpZiAoY3VycmVudEZ1bGwubGVuZ3RoID4gMCkgewogICAgICAgICAgICAgIHNwbGl0cy5wdXNoKHsKICAgICAgICAgICAgICAgIGxpdGVyYWw6IGJyYWNrZXRlZCwKICAgICAgICAgICAgICAgIHZhbDogY3VycmVudEZ1bGwKICAgICAgICAgICAgICB9KTsKICAgICAgICAgICAgfQoKICAgICAgICAgICAgY3VycmVudCA9IG51bGw7CiAgICAgICAgICAgIGN1cnJlbnRGdWxsID0gIiI7CiAgICAgICAgICAgIGJyYWNrZXRlZCA9ICFicmFja2V0ZWQ7CiAgICAgICAgICB9IGVsc2UgaWYgKGJyYWNrZXRlZCkgewogICAgICAgICAgICBjdXJyZW50RnVsbCArPSBjOwogICAgICAgICAgfSBlbHNlIGlmIChjID09PSBjdXJyZW50KSB7CiAgICAgICAgICAgIGN1cnJlbnRGdWxsICs9IGM7CiAgICAgICAgICB9IGVsc2UgewogICAgICAgICAgICBpZiAoY3VycmVudEZ1bGwubGVuZ3RoID4gMCkgewogICAgICAgICAgICAgIHNwbGl0cy5wdXNoKHsKICAgICAgICAgICAgICAgIGxpdGVyYWw6IGZhbHNlLAogICAgICAgICAgICAgICAgdmFsOiBjdXJyZW50RnVsbAogICAgICAgICAgICAgIH0pOwogICAgICAgICAgICB9CgogICAgICAgICAgICBjdXJyZW50RnVsbCA9IGM7CiAgICAgICAgICAgIGN1cnJlbnQgPSBjOwogICAgICAgICAgfQogICAgICAgIH0KCiAgICAgICAgaWYgKGN1cnJlbnRGdWxsLmxlbmd0aCA+IDApIHsKICAgICAgICAgIHNwbGl0cy5wdXNoKHsKICAgICAgICAgICAgbGl0ZXJhbDogYnJhY2tldGVkLAogICAgICAgICAgICB2YWw6IGN1cnJlbnRGdWxsCiAgICAgICAgICB9KTsKICAgICAgICB9CgogICAgICAgIHJldHVybiBzcGxpdHM7CiAgICAgIH07CgogICAgICBGb3JtYXR0ZXIubWFjcm9Ub2tlblRvRm9ybWF0T3B0cyA9IGZ1bmN0aW9uIG1hY3JvVG9rZW5Ub0Zvcm1hdE9wdHModG9rZW4pIHsKICAgICAgICByZXR1cm4gX21hY3JvVG9rZW5Ub0Zvcm1hdE9wdHNbdG9rZW5dOwogICAgICB9OwoKICAgICAgZnVuY3Rpb24gRm9ybWF0dGVyKGxvY2FsZSwgZm9ybWF0T3B0cykgewogICAgICAgIHRoaXMub3B0cyA9IGZvcm1hdE9wdHM7CiAgICAgICAgdGhpcy5sb2MgPSBsb2NhbGU7CiAgICAgICAgdGhpcy5zeXN0ZW1Mb2MgPSBudWxsOwogICAgICB9CgogICAgICB2YXIgX3Byb3RvID0gRm9ybWF0dGVyLnByb3RvdHlwZTsKCiAgICAgIF9wcm90by5mb3JtYXRXaXRoU3lzdGVtRGVmYXVsdCA9IGZ1bmN0aW9uIGZvcm1hdFdpdGhTeXN0ZW1EZWZhdWx0KGR0LCBvcHRzKSB7CiAgICAgICAgaWYgKHRoaXMuc3lzdGVtTG9jID09PSBudWxsKSB7CiAgICAgICAgICB0aGlzLnN5c3RlbUxvYyA9IHRoaXMubG9jLnJlZGVmYXVsdFRvU3lzdGVtKCk7CiAgICAgICAgfQoKICAgICAgICB2YXIgZGYgPSB0aGlzLnN5c3RlbUxvYy5kdEZvcm1hdHRlcihkdCwgT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5vcHRzLCBvcHRzKSk7CiAgICAgICAgcmV0dXJuIGRmLmZvcm1hdCgpOwogICAgICB9OwoKICAgICAgX3Byb3RvLmZvcm1hdERhdGVUaW1lID0gZnVuY3Rpb24gZm9ybWF0RGF0ZVRpbWUoZHQsIG9wdHMpIHsKICAgICAgICBpZiAob3B0cyA9PT0gdm9pZCAwKSB7CiAgICAgICAgICBvcHRzID0ge307CiAgICAgICAgfQoKICAgICAgICB2YXIgZGYgPSB0aGlzLmxvYy5kdEZvcm1hdHRlcihkdCwgT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5vcHRzLCBvcHRzKSk7CiAgICAgICAgcmV0dXJuIGRmLmZvcm1hdCgpOwogICAgICB9OwoKICAgICAgX3Byb3RvLmZvcm1hdERhdGVUaW1lUGFydHMgPSBmdW5jdGlvbiBmb3JtYXREYXRlVGltZVBhcnRzKGR0LCBvcHRzKSB7CiAgICAgICAgaWYgKG9wdHMgPT09IHZvaWQgMCkgewogICAgICAgICAgb3B0cyA9IHt9OwogICAgICAgIH0KCiAgICAgICAgdmFyIGRmID0gdGhpcy5sb2MuZHRGb3JtYXR0ZXIoZHQsIE9iamVjdC5hc3NpZ24oe30sIHRoaXMub3B0cywgb3B0cykpOwogICAgICAgIHJldHVybiBkZi5mb3JtYXRUb1BhcnRzKCk7CiAgICAgIH07CgogICAgICBfcHJvdG8ucmVzb2x2ZWRPcHRpb25zID0gZnVuY3Rpb24gcmVzb2x2ZWRPcHRpb25zKGR0LCBvcHRzKSB7CiAgICAgICAgaWYgKG9wdHMgPT09IHZvaWQgMCkgewogICAgICAgICAgb3B0cyA9IHt9OwogICAgICAgIH0KCiAgICAgICAgdmFyIGRmID0gdGhpcy5sb2MuZHRGb3JtYXR0ZXIoZHQsIE9iamVjdC5hc3NpZ24oe30sIHRoaXMub3B0cywgb3B0cykpOwogICAgICAgIHJldHVybiBkZi5yZXNvbHZlZE9wdGlvbnMoKTsKICAgICAgfTsKCiAgICAgIF9wcm90by5udW0gPSBmdW5jdGlvbiBudW0obiwgcCkgewogICAgICAgIGlmIChwID09PSB2b2lkIDApIHsKICAgICAgICAgIHAgPSAwOwogICAgICAgIH0KCiAgICAgICAgLy8gd2UgZ2V0IHNvbWUgcGVyZiBvdXQgb2YgZG9pbmcgdGhpcyBoZXJlLCBhbm5veWluZ2x5CiAgICAgICAgaWYgKHRoaXMub3B0cy5mb3JjZVNpbXBsZSkgewogICAgICAgICAgcmV0dXJuIHBhZFN0YXJ0KG4sIHApOwogICAgICAgIH0KCiAgICAgICAgdmFyIG9wdHMgPSBPYmplY3QuYXNzaWduKHt9LCB0aGlzLm9wdHMpOwoKICAgICAgICBpZiAocCA+IDApIHsKICAgICAgICAgIG9wdHMucGFkVG8gPSBwOwogICAgICAgIH0KCiAgICAgICAgcmV0dXJuIHRoaXMubG9jLm51bWJlckZvcm1hdHRlcihvcHRzKS5mb3JtYXQobik7CiAgICAgIH07CgogICAgICBfcHJvdG8uZm9ybWF0RGF0ZVRpbWVGcm9tU3RyaW5nID0gZnVuY3Rpb24gZm9ybWF0RGF0ZVRpbWVGcm9tU3RyaW5nKGR0LCBmbXQpIHsKICAgICAgICB2YXIgX3RoaXMgPSB0aGlzOwoKICAgICAgICB2YXIga25vd25FbmdsaXNoID0gdGhpcy5sb2MubGlzdGluZ01vZGUoKSA9PT0gImVuIiwKICAgICAgICAgICAgdXNlRGF0ZVRpbWVGb3JtYXR0ZXIgPSB0aGlzLmxvYy5vdXRwdXRDYWxlbmRhciAmJiB0aGlzLmxvYy5vdXRwdXRDYWxlbmRhciAhPT0gImdyZWdvcnkiICYmIGhhc0Zvcm1hdFRvUGFydHMoKSwKICAgICAgICAgICAgc3RyaW5nID0gZnVuY3Rpb24gc3RyaW5nKG9wdHMsIGV4dHJhY3QpIHsKICAgICAgICAgIHJldHVybiBfdGhpcy5sb2MuZXh0cmFjdChkdCwgb3B0cywgZXh0cmFjdCk7CiAgICAgICAgfSwKICAgICAgICAgICAgZm9ybWF0T2Zmc2V0ID0gZnVuY3Rpb24gZm9ybWF0T2Zmc2V0KG9wdHMpIHsKICAgICAgICAgIGlmIChkdC5pc09mZnNldEZpeGVkICYmIGR0Lm9mZnNldCA9PT0gMCAmJiBvcHRzLmFsbG93WikgewogICAgICAgICAgICByZXR1cm4gIloiOwogICAgICAgICAgfQoKICAgICAgICAgIHJldHVybiBkdC5pc1ZhbGlkID8gZHQuem9uZS5mb3JtYXRPZmZzZXQoZHQudHMsIG9wdHMuZm9ybWF0KSA6ICIiOwogICAgICAgIH0sCiAgICAgICAgICAgIG1lcmlkaWVtID0gZnVuY3Rpb24gbWVyaWRpZW0oKSB7CiAgICAgICAgICByZXR1cm4ga25vd25FbmdsaXNoID8gbWVyaWRpZW1Gb3JEYXRlVGltZShkdCkgOiBzdHJpbmcoewogICAgICAgICAgICBob3VyOiAibnVtZXJpYyIsCiAgICAgICAgICAgIGhvdXIxMjogdHJ1ZQogICAgICAgICAgfSwgImRheXBlcmlvZCIpOwogICAgICAgIH0sCiAgICAgICAgICAgIG1vbnRoID0gZnVuY3Rpb24gbW9udGgobGVuZ3RoLCBzdGFuZGFsb25lKSB7CiAgICAgICAgICByZXR1cm4ga25vd25FbmdsaXNoID8gbW9udGhGb3JEYXRlVGltZShkdCwgbGVuZ3RoKSA6IHN0cmluZyhzdGFuZGFsb25lID8gewogICAgICAgICAgICBtb250aDogbGVuZ3RoCiAgICAgICAgICB9IDogewogICAgICAgICAgICBtb250aDogbGVuZ3RoLAogICAgICAgICAgICBkYXk6ICJudW1lcmljIgogICAgICAgICAgfSwgIm1vbnRoIik7CiAgICAgICAgfSwKICAgICAgICAgICAgd2Vla2RheSA9IGZ1bmN0aW9uIHdlZWtkYXkobGVuZ3RoLCBzdGFuZGFsb25lKSB7CiAgICAgICAgICByZXR1cm4ga25vd25FbmdsaXNoID8gd2Vla2RheUZvckRhdGVUaW1lKGR0LCBsZW5ndGgpIDogc3RyaW5nKHN0YW5kYWxvbmUgPyB7CiAgICAgICAgICAgIHdlZWtkYXk6IGxlbmd0aAogICAgICAgICAgfSA6IHsKICAgICAgICAgICAgd2Vla2RheTogbGVuZ3RoLAogICAgICAgICAgICBtb250aDogImxvbmciLAogICAgICAgICAgICBkYXk6ICJudW1lcmljIgogICAgICAgICAgfSwgIndlZWtkYXkiKTsKICAgICAgICB9LAogICAgICAgICAgICBtYXliZU1hY3JvID0gZnVuY3Rpb24gbWF5YmVNYWNybyh0b2tlbikgewogICAgICAgICAgdmFyIGZvcm1hdE9wdHMgPSBGb3JtYXR0ZXIubWFjcm9Ub2tlblRvRm9ybWF0T3B0cyh0b2tlbik7CgogICAgICAgICAgaWYgKGZvcm1hdE9wdHMpIHsKICAgICAgICAgICAgcmV0dXJuIF90aGlzLmZvcm1hdFdpdGhTeXN0ZW1EZWZhdWx0KGR0LCBmb3JtYXRPcHRzKTsKICAgICAgICAgIH0gZWxzZSB7CiAgICAgICAgICAgIHJldHVybiB0b2tlbjsKICAgICAgICAgIH0KICAgICAgICB9LAogICAgICAgICAgICBlcmEgPSBmdW5jdGlvbiBlcmEobGVuZ3RoKSB7CiAgICAgICAgICByZXR1cm4ga25vd25FbmdsaXNoID8gZXJhRm9yRGF0ZVRpbWUoZHQsIGxlbmd0aCkgOiBzdHJpbmcoewogICAgICAgICAgICBlcmE6IGxlbmd0aAogICAgICAgICAgfSwgImVyYSIpOwogICAgICAgIH0sCiAgICAgICAgICAgIHRva2VuVG9TdHJpbmcgPSBmdW5jdGlvbiB0b2tlblRvU3RyaW5nKHRva2VuKSB7CiAgICAgICAgICAvLyBXaGVyZSBwb3NzaWJsZTogaHR0cDovL2NsZHIudW5pY29kZS5vcmcvdHJhbnNsYXRpb24vZGF0ZS10aW1lLTEvZGF0ZS10aW1lI1RPQy1TdGFuZGFsb25lLXZzLi1Gb3JtYXQtU3R5bGVzCiAgICAgICAgICBzd2l0Y2ggKHRva2VuKSB7CiAgICAgICAgICAgIC8vIG1zCiAgICAgICAgICAgIGNhc2UgIlMiOgogICAgICAgICAgICAgIHJldHVybiBfdGhpcy5udW0oZHQubWlsbGlzZWNvbmQpOwoKICAgICAgICAgICAgY2FzZSAidSI6IC8vIGZhbGxzIHRocm91Z2gKCiAgICAgICAgICAgIGNhc2UgIlNTUyI6CiAgICAgICAgICAgICAgcmV0dXJuIF90aGlzLm51bShkdC5taWxsaXNlY29uZCwgMyk7CiAgICAgICAgICAgIC8vIHNlY29uZHMKCiAgICAgICAgICAgIGNhc2UgInMiOgogICAgICAgICAgICAgIHJldHVybiBfdGhpcy5udW0oZHQuc2Vjb25kKTsKCiAgICAgICAgICAgIGNhc2UgInNzIjoKICAgICAgICAgICAgICByZXR1cm4gX3RoaXMubnVtKGR0LnNlY29uZCwgMik7CiAgICAgICAgICAgIC8vIG1pbnV0ZXMKCiAgICAgICAgICAgIGNhc2UgIm0iOgogICAgICAgICAgICAgIHJldHVybiBfdGhpcy5udW0oZHQubWludXRlKTsKCiAgICAgICAgICAgIGNhc2UgIm1tIjoKICAgICAgICAgICAgICByZXR1cm4gX3RoaXMubnVtKGR0Lm1pbnV0ZSwgMik7CiAgICAgICAgICAgIC8vIGhvdXJzCgogICAgICAgICAgICBjYXNlICJoIjoKICAgICAgICAgICAgICByZXR1cm4gX3RoaXMubnVtKGR0LmhvdXIgJSAxMiA9PT0gMCA/IDEyIDogZHQuaG91ciAlIDEyKTsKCiAgICAgICAgICAgIGNhc2UgImhoIjoKICAgICAgICAgICAgICByZXR1cm4gX3RoaXMubnVtKGR0LmhvdXIgJSAxMiA9PT0gMCA/IDEyIDogZHQuaG91ciAlIDEyLCAyKTsKCiAgICAgICAgICAgIGNhc2UgIkgiOgogICAgICAgICAgICAgIHJldHVybiBfdGhpcy5udW0oZHQuaG91cik7CgogICAgICAgICAgICBjYXNlICJISCI6CiAgICAgICAgICAgICAgcmV0dXJuIF90aGlzLm51bShkdC5ob3VyLCAyKTsKICAgICAgICAgICAgLy8gb2Zmc2V0CgogICAgICAgICAgICBjYXNlICJaIjoKICAgICAgICAgICAgICAvLyBsaWtlICs2CiAgICAgICAgICAgICAgcmV0dXJuIGZvcm1hdE9mZnNldCh7CiAgICAgICAgICAgICAgICBmb3JtYXQ6ICJuYXJyb3ciLAogICAgICAgICAgICAgICAgYWxsb3daOiBfdGhpcy5vcHRzLmFsbG93WgogICAgICAgICAgICAgIH0pOwoKICAgICAgICAgICAgY2FzZSAiWloiOgogICAgICAgICAgICAgIC8vIGxpa2UgKzA2OjAwCiAgICAgICAgICAgICAgcmV0dXJuIGZvcm1hdE9mZnNldCh7CiAgICAgICAgICAgICAgICBmb3JtYXQ6ICJzaG9ydCIsCiAgICAgICAgICAgICAgICBhbGxvd1o6IF90aGlzLm9wdHMuYWxsb3daCiAgICAgICAgICAgICAgfSk7CgogICAgICAgICAgICBjYXNlICJaWloiOgogICAgICAgICAgICAgIC8vIGxpa2UgKzA2MDAKICAgICAgICAgICAgICByZXR1cm4gZm9ybWF0T2Zmc2V0KHsKICAgICAgICAgICAgICAgIGZvcm1hdDogInRlY2hpZSIsCiAgICAgICAgICAgICAgICBhbGxvd1o6IF90aGlzLm9wdHMuYWxsb3daCiAgICAgICAgICAgICAgfSk7CgogICAgICAgICAgICBjYXNlICJaWlpaIjoKICAgICAgICAgICAgICAvLyBsaWtlIEVTVAogICAgICAgICAgICAgIHJldHVybiBkdC56b25lLm9mZnNldE5hbWUoZHQudHMsIHsKICAgICAgICAgICAgICAgIGZvcm1hdDogInNob3J0IiwKICAgICAgICAgICAgICAgIGxvY2FsZTogX3RoaXMubG9jLmxvY2FsZQogICAgICAgICAgICAgIH0pOwoKICAgICAgICAgICAgY2FzZSAiWlpaWloiOgogICAgICAgICAgICAgIC8vIGxpa2UgRWFzdGVybiBTdGFuZGFyZCBUaW1lCiAgICAgICAgICAgICAgcmV0dXJuIGR0LnpvbmUub2Zmc2V0TmFtZShkdC50cywgewogICAgICAgICAgICAgICAgZm9ybWF0OiAibG9uZyIsCiAgICAgICAgICAgICAgICBsb2NhbGU6IF90aGlzLmxvYy5sb2NhbGUKICAgICAgICAgICAgICB9KTsKICAgICAgICAgICAgLy8gem9uZQoKICAgICAgICAgICAgY2FzZSAieiI6CiAgICAgICAgICAgICAgLy8gbGlrZSBBbWVyaWNhL05ld19Zb3JrCiAgICAgICAgICAgICAgcmV0dXJuIGR0LnpvbmVOYW1lOwogICAgICAgICAgICAvLyBtZXJpZGllbXMKCiAgICAgICAgICAgIGNhc2UgImEiOgogICAgICAgICAgICAgIHJldHVybiBtZXJpZGllbSgpOwogICAgICAgICAgICAvLyBkYXRlcwoKICAgICAgICAgICAgY2FzZSAiZCI6CiAgICAgICAgICAgICAgcmV0dXJuIHVzZURhdGVUaW1lRm9ybWF0dGVyID8gc3RyaW5nKHsKICAgICAgICAgICAgICAgIGRheTogIm51bWVyaWMiCiAgICAgICAgICAgICAgfSwgImRheSIpIDogX3RoaXMubnVtKGR0LmRheSk7CgogICAgICAgICAgICBjYXNlICJkZCI6CiAgICAgICAgICAgICAgcmV0dXJuIHVzZURhdGVUaW1lRm9ybWF0dGVyID8gc3RyaW5nKHsKICAgICAgICAgICAgICAgIGRheTogIjItZGlnaXQiCiAgICAgICAgICAgICAgfSwgImRheSIpIDogX3RoaXMubnVtKGR0LmRheSwgMik7CiAgICAgICAgICAgIC8vIHdlZWtkYXlzIC0gc3RhbmRhbG9uZQoKICAgICAgICAgICAgY2FzZSAiYyI6CiAgICAgICAgICAgICAgLy8gbGlrZSAxCiAgICAgICAgICAgICAgcmV0dXJuIF90aGlzLm51bShkdC53ZWVrZGF5KTsKCiAgICAgICAgICAgIGNhc2UgImNjYyI6CiAgICAgICAgICAgICAgLy8gbGlrZSAnVHVlcycKICAgICAgICAgICAgICByZXR1cm4gd2Vla2RheSgic2hvcnQiLCB0cnVlKTsKCiAgICAgICAgICAgIGNhc2UgImNjY2MiOgogICAgICAgICAgICAgIC8vIGxpa2UgJ1R1ZXNkYXknCiAgICAgICAgICAgICAgcmV0dXJuIHdlZWtkYXkoImxvbmciLCB0cnVlKTsKCiAgICAgICAgICAgIGNhc2UgImNjY2NjIjoKICAgICAgICAgICAgICAvLyBsaWtlICdUJwogICAgICAgICAgICAgIHJldHVybiB3ZWVrZGF5KCJuYXJyb3ciLCB0cnVlKTsKICAgICAgICAgICAgLy8gd2Vla2RheXMgLSBmb3JtYXQKCiAgICAgICAgICAgIGNhc2UgIkUiOgogICAgICAgICAgICAgIC8vIGxpa2UgMQogICAgICAgICAgICAgIHJldHVybiBfdGhpcy5udW0oZHQud2Vla2RheSk7CgogICAgICAgICAgICBjYXNlICJFRUUiOgogICAgICAgICAgICAgIC8vIGxpa2UgJ1R1ZXMnCiAgICAgICAgICAgICAgcmV0dXJuIHdlZWtkYXkoInNob3J0IiwgZmFsc2UpOwoKICAgICAgICAgICAgY2FzZSAiRUVFRSI6CiAgICAgICAgICAgICAgLy8gbGlrZSAnVHVlc2RheScKICAgICAgICAgICAgICByZXR1cm4gd2Vla2RheSgibG9uZyIsIGZhbHNlKTsKCiAgICAgICAgICAgIGNhc2UgIkVFRUVFIjoKICAgICAgICAgICAgICAvLyBsaWtlICdUJwogICAgICAgICAgICAgIHJldHVybiB3ZWVrZGF5KCJuYXJyb3ciLCBmYWxzZSk7CiAgICAgICAgICAgIC8vIG1vbnRocyAtIHN0YW5kYWxvbmUKCiAgICAgICAgICAgIGNhc2UgIkwiOgogICAgICAgICAgICAgIC8vIGxpa2UgMQogICAgICAgICAgICAgIHJldHVybiB1c2VEYXRlVGltZUZvcm1hdHRlciA/IHN0cmluZyh7CiAgICAgICAgICAgICAgICBtb250aDogIm51bWVyaWMiLAogICAgICAgICAgICAgICAgZGF5OiAibnVtZXJpYyIKICAgICAgICAgICAgICB9LCAibW9udGgiKSA6IF90aGlzLm51bShkdC5tb250aCk7CgogICAgICAgICAgICBjYXNlICJMTCI6CiAgICAgICAgICAgICAgLy8gbGlrZSAwMSwgZG9lc24ndCBzZWVtIHRvIHdvcmsKICAgICAgICAgICAgICByZXR1cm4gdXNlRGF0ZVRpbWVGb3JtYXR0ZXIgPyBzdHJpbmcoewogICAgICAgICAgICAgICAgbW9udGg6ICIyLWRpZ2l0IiwKICAgICAgICAgICAgICAgIGRheTogIm51bWVyaWMiCiAgICAgICAgICAgICAgfSwgIm1vbnRoIikgOiBfdGhpcy5udW0oZHQubW9udGgsIDIpOwoKICAgICAgICAgICAgY2FzZSAiTExMIjoKICAgICAgICAgICAgICAvLyBsaWtlIEphbgogICAgICAgICAgICAgIHJldHVybiBtb250aCgic2hvcnQiLCB0cnVlKTsKCiAgICAgICAgICAgIGNhc2UgIkxMTEwiOgogICAgICAgICAgICAgIC8vIGxpa2UgSmFudWFyeQogICAgICAgICAgICAgIHJldHVybiBtb250aCgibG9uZyIsIHRydWUpOwoKICAgICAgICAgICAgY2FzZSAiTExMTEwiOgogICAgICAgICAgICAgIC8vIGxpa2UgSgogICAgICAgICAgICAgIHJldHVybiBtb250aCgibmFycm93IiwgdHJ1ZSk7CiAgICAgICAgICAgIC8vIG1vbnRocyAtIGZvcm1hdAoKICAgICAgICAgICAgY2FzZSAiTSI6CiAgICAgICAgICAgICAgLy8gbGlrZSAxCiAgICAgICAgICAgICAgcmV0dXJuIHVzZURhdGVUaW1lRm9ybWF0dGVyID8gc3RyaW5nKHsKICAgICAgICAgICAgICAgIG1vbnRoOiAibnVtZXJpYyIKICAgICAgICAgICAgICB9LCAibW9udGgiKSA6IF90aGlzLm51bShkdC5tb250aCk7CgogICAgICAgICAgICBjYXNlICJNTSI6CiAgICAgICAgICAgICAgLy8gbGlrZSAwMQogICAgICAgICAgICAgIHJldHVybiB1c2VEYXRlVGltZUZvcm1hdHRlciA/IHN0cmluZyh7CiAgICAgICAgICAgICAgICBtb250aDogIjItZGlnaXQiCiAgICAgICAgICAgICAgfSwgIm1vbnRoIikgOiBfdGhpcy5udW0oZHQubW9udGgsIDIpOwoKICAgICAgICAgICAgY2FzZSAiTU1NIjoKICAgICAgICAgICAgICAvLyBsaWtlIEphbgogICAgICAgICAgICAgIHJldHVybiBtb250aCgic2hvcnQiLCBmYWxzZSk7CgogICAgICAgICAgICBjYXNlICJNTU1NIjoKICAgICAgICAgICAgICAvLyBsaWtlIEphbnVhcnkKICAgICAgICAgICAgICByZXR1cm4gbW9udGgoImxvbmciLCBmYWxzZSk7CgogICAgICAgICAgICBjYXNlICJNTU1NTSI6CiAgICAgICAgICAgICAgLy8gbGlrZSBKCiAgICAgICAgICAgICAgcmV0dXJuIG1vbnRoKCJuYXJyb3ciLCBmYWxzZSk7CiAgICAgICAgICAgIC8vIHllYXJzCgogICAgICAgICAgICBjYXNlICJ5IjoKICAgICAgICAgICAgICAvLyBsaWtlIDIwMTQKICAgICAgICAgICAgICByZXR1cm4gdXNlRGF0ZVRpbWVGb3JtYXR0ZXIgPyBzdHJpbmcoewogICAgICAgICAgICAgICAgeWVhcjogIm51bWVyaWMiCiAgICAgICAgICAgICAgfSwgInllYXIiKSA6IF90aGlzLm51bShkdC55ZWFyKTsKCiAgICAgICAgICAgIGNhc2UgInl5IjoKICAgICAgICAgICAgICAvLyBsaWtlIDE0CiAgICAgICAgICAgICAgcmV0dXJuIHVzZURhdGVUaW1lRm9ybWF0dGVyID8gc3RyaW5nKHsKICAgICAgICAgICAgICAgIHllYXI6ICIyLWRpZ2l0IgogICAgICAgICAgICAgIH0sICJ5ZWFyIikgOiBfdGhpcy5udW0oZHQueWVhci50b1N0cmluZygpLnNsaWNlKC0yKSwgMik7CgogICAgICAgICAgICBjYXNlICJ5eXl5IjoKICAgICAgICAgICAgICAvLyBsaWtlIDAwMTIKICAgICAgICAgICAgICByZXR1cm4gdXNlRGF0ZVRpbWVGb3JtYXR0ZXIgPyBzdHJpbmcoewogICAgICAgICAgICAgICAgeWVhcjogIm51bWVyaWMiCiAgICAgICAgICAgICAgfSwgInllYXIiKSA6IF90aGlzLm51bShkdC55ZWFyLCA0KTsKCiAgICAgICAgICAgIGNhc2UgInl5eXl5eSI6CiAgICAgICAgICAgICAgLy8gbGlrZSAwMDAwMTIKICAgICAgICAgICAgICByZXR1cm4gdXNlRGF0ZVRpbWVGb3JtYXR0ZXIgPyBzdHJpbmcoewogICAgICAgICAgICAgICAgeWVhcjogIm51bWVyaWMiCiAgICAgICAgICAgICAgfSwgInllYXIiKSA6IF90aGlzLm51bShkdC55ZWFyLCA2KTsKICAgICAgICAgICAgLy8gZXJhcwoKICAgICAgICAgICAgY2FzZSAiRyI6CiAgICAgICAgICAgICAgLy8gbGlrZSBBRAogICAgICAgICAgICAgIHJldHVybiBlcmEoInNob3J0Iik7CgogICAgICAgICAgICBjYXNlICJHRyI6CiAgICAgICAgICAgICAgLy8gbGlrZSBBbm5vIERvbWluaQogICAgICAgICAgICAgIHJldHVybiBlcmEoImxvbmciKTsKCiAgICAgICAgICAgIGNhc2UgIkdHR0dHIjoKICAgICAgICAgICAgICByZXR1cm4gZXJhKCJuYXJyb3ciKTsKCiAgICAgICAgICAgIGNhc2UgImtrIjoKICAgICAgICAgICAgICByZXR1cm4gX3RoaXMubnVtKGR0LndlZWtZZWFyLnRvU3RyaW5nKCkuc2xpY2UoLTIpLCAyKTsKCiAgICAgICAgICAgIGNhc2UgImtra2siOgogICAgICAgICAgICAgIHJldHVybiBfdGhpcy5udW0oZHQud2Vla1llYXIsIDQpOwoKICAgICAgICAgICAgY2FzZSAiVyI6CiAgICAgICAgICAgICAgcmV0dXJuIF90aGlzLm51bShkdC53ZWVrTnVtYmVyKTsKCiAgICAgICAgICAgIGNhc2UgIldXIjoKICAgICAgICAgICAgICByZXR1cm4gX3RoaXMubnVtKGR0LndlZWtOdW1iZXIsIDIpOwoKICAgICAgICAgICAgY2FzZSAibyI6CiAgICAgICAgICAgICAgcmV0dXJuIF90aGlzLm51bShkdC5vcmRpbmFsKTsKCiAgICAgICAgICAgIGNhc2UgIm9vbyI6CiAgICAgICAgICAgICAgcmV0dXJuIF90aGlzLm51bShkdC5vcmRpbmFsLCAzKTsKCiAgICAgICAgICAgIGNhc2UgInEiOgogICAgICAgICAgICAgIC8vIGxpa2UgMQogICAgICAgICAgICAgIHJldHVybiBfdGhpcy5udW0oZHQucXVhcnRlcik7CgogICAgICAgICAgICBjYXNlICJxcSI6CiAgICAgICAgICAgICAgLy8gbGlrZSAwMQogICAgICAgICAgICAgIHJldHVybiBfdGhpcy5udW0oZHQucXVhcnRlciwgMik7CgogICAgICAgICAgICBjYXNlICJYIjoKICAgICAgICAgICAgICByZXR1cm4gX3RoaXMubnVtKE1hdGguZmxvb3IoZHQudHMgLyAxMDAwKSk7CgogICAgICAgICAgICBjYXNlICJ4IjoKICAgICAgICAgICAgICByZXR1cm4gX3RoaXMubnVtKGR0LnRzKTsKCiAgICAgICAgICAgIGRlZmF1bHQ6CiAgICAgICAgICAgICAgcmV0dXJuIG1heWJlTWFjcm8odG9rZW4pOwogICAgICAgICAgfQogICAgICAgIH07CgogICAgICAgIHJldHVybiBzdHJpbmdpZnlUb2tlbnMoRm9ybWF0dGVyLnBhcnNlRm9ybWF0KGZtdCksIHRva2VuVG9TdHJpbmcpOwogICAgICB9OwoKICAgICAgX3Byb3RvLmZvcm1hdER1cmF0aW9uRnJvbVN0cmluZyA9IGZ1bmN0aW9uIGZvcm1hdER1cmF0aW9uRnJvbVN0cmluZyhkdXIsIGZtdCkgewogICAgICAgIHZhciBfdGhpczIgPSB0aGlzOwoKICAgICAgICB2YXIgdG9rZW5Ub0ZpZWxkID0gZnVuY3Rpb24gdG9rZW5Ub0ZpZWxkKHRva2VuKSB7CiAgICAgICAgICBzd2l0Y2ggKHRva2VuWzBdKSB7CiAgICAgICAgICAgIGNhc2UgIlMiOgogICAgICAgICAgICAgIHJldHVybiAibWlsbGlzZWNvbmQiOwoKICAgICAgICAgICAgY2FzZSAicyI6CiAgICAgICAgICAgICAgcmV0dXJuICJzZWNvbmQiOwoKICAgICAgICAgICAgY2FzZSAibSI6CiAgICAgICAgICAgICAgcmV0dXJuICJtaW51dGUiOwoKICAgICAgICAgICAgY2FzZSAiaCI6CiAgICAgICAgICAgICAgcmV0dXJuICJob3VyIjsKCiAgICAgICAgICAgIGNhc2UgImQiOgogICAgICAgICAgICAgIHJldHVybiAiZGF5IjsKCiAgICAgICAgICAgIGNhc2UgIk0iOgogICAgICAgICAgICAgIHJldHVybiAibW9udGgiOwoKICAgICAgICAgICAgY2FzZSAieSI6CiAgICAgICAgICAgICAgcmV0dXJuICJ5ZWFyIjsKCiAgICAgICAgICAgIGRlZmF1bHQ6CiAgICAgICAgICAgICAgcmV0dXJuIG51bGw7CiAgICAgICAgICB9CiAgICAgICAgfSwKICAgICAgICAgICAgdG9rZW5Ub1N0cmluZyA9IGZ1bmN0aW9uIHRva2VuVG9TdHJpbmcobGlsZHVyKSB7CiAgICAgICAgICByZXR1cm4gZnVuY3Rpb24gKHRva2VuKSB7CiAgICAgICAgICAgIHZhciBtYXBwZWQgPSB0b2tlblRvRmllbGQodG9rZW4pOwoKICAgICAgICAgICAgaWYgKG1hcHBlZCkgewogICAgICAgICAgICAgIHJldHVybiBfdGhpczIubnVtKGxpbGR1ci5nZXQobWFwcGVkKSwgdG9rZW4ubGVuZ3RoKTsKICAgICAgICAgICAgfSBlbHNlIHsKICAgICAgICAgICAgICByZXR1cm4gdG9rZW47CiAgICAgICAgICAgIH0KICAgICAgICAgIH07CiAgICAgICAgfSwKICAgICAgICAgICAgdG9rZW5zID0gRm9ybWF0dGVyLnBhcnNlRm9ybWF0KGZtdCksCiAgICAgICAgICAgIHJlYWxUb2tlbnMgPSB0b2tlbnMucmVkdWNlKGZ1bmN0aW9uIChmb3VuZCwgX3JlZikgewogICAgICAgICAgdmFyIGxpdGVyYWwgPSBfcmVmLmxpdGVyYWwsCiAgICAgICAgICAgICAgdmFsID0gX3JlZi52YWw7CiAgICAgICAgICByZXR1cm4gbGl0ZXJhbCA/IGZvdW5kIDogZm91bmQuY29uY2F0KHZhbCk7CiAgICAgICAgfSwgW10pLAogICAgICAgICAgICBjb2xsYXBzZWQgPSBkdXIuc2hpZnRUby5hcHBseShkdXIsIHJlYWxUb2tlbnMubWFwKHRva2VuVG9GaWVsZCkuZmlsdGVyKGZ1bmN0aW9uICh0KSB7CiAgICAgICAgICByZXR1cm4gdDsKICAgICAgICB9KSk7CgogICAgICAgIHJldHVybiBzdHJpbmdpZnlUb2tlbnModG9rZW5zLCB0b2tlblRvU3RyaW5nKGNvbGxhcHNlZCkpOwogICAgICB9OwoKICAgICAgcmV0dXJuIEZvcm1hdHRlcjsKICAgIH0oKTsKCiAgICB2YXIgSW52YWxpZCA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoKSB7CiAgICAgIGZ1bmN0aW9uIEludmFsaWQocmVhc29uLCBleHBsYW5hdGlvbikgewogICAgICAgIHRoaXMucmVhc29uID0gcmVhc29uOwogICAgICAgIHRoaXMuZXhwbGFuYXRpb24gPSBleHBsYW5hdGlvbjsKICAgICAgfQoKICAgICAgdmFyIF9wcm90byA9IEludmFsaWQucHJvdG90eXBlOwoKICAgICAgX3Byb3RvLnRvTWVzc2FnZSA9IGZ1bmN0aW9uIHRvTWVzc2FnZSgpIHsKICAgICAgICBpZiAodGhpcy5leHBsYW5hdGlvbikgewogICAgICAgICAgcmV0dXJuIHRoaXMucmVhc29uICsgIjogIiArIHRoaXMuZXhwbGFuYXRpb247CiAgICAgICAgfSBlbHNlIHsKICAgICAgICAgIHJldHVybiB0aGlzLnJlYXNvbjsKICAgICAgICB9CiAgICAgIH07CgogICAgICByZXR1cm4gSW52YWxpZDsKICAgIH0oKTsKCiAgICAvKioKICAgICAqIEBpbnRlcmZhY2UKICAgICAqLwoKICAgIHZhciBab25lID0gLyojX19QVVJFX18qL2Z1bmN0aW9uICgpIHsKICAgICAgZnVuY3Rpb24gWm9uZSgpIHt9CgogICAgICB2YXIgX3Byb3RvID0gWm9uZS5wcm90b3R5cGU7CgogICAgICAvKioKICAgICAgICogUmV0dXJucyB0aGUgb2Zmc2V0J3MgY29tbW9uIG5hbWUgKHN1Y2ggYXMgRVNUKSBhdCB0aGUgc3BlY2lmaWVkIHRpbWVzdGFtcAogICAgICAgKiBAYWJzdHJhY3QKICAgICAgICogQHBhcmFtIHtudW1iZXJ9IHRzIC0gRXBvY2ggbWlsbGlzZWNvbmRzIGZvciB3aGljaCB0byBnZXQgdGhlIG5hbWUKICAgICAgICogQHBhcmFtIHtPYmplY3R9IG9wdHMgLSBPcHRpb25zIHRvIGFmZmVjdCB0aGUgZm9ybWF0CiAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBvcHRzLmZvcm1hdCAtIFdoYXQgc3R5bGUgb2Ygb2Zmc2V0IHRvIHJldHVybi4gQWNjZXB0cyAnbG9uZycgb3IgJ3Nob3J0Jy4KICAgICAgICogQHBhcmFtIHtzdHJpbmd9IG9wdHMubG9jYWxlIC0gV2hhdCBsb2NhbGUgdG8gcmV0dXJuIHRoZSBvZmZzZXQgbmFtZSBpbi4KICAgICAgICogQHJldHVybiB7c3RyaW5nfQogICAgICAgKi8KICAgICAgX3Byb3RvLm9mZnNldE5hbWUgPSBmdW5jdGlvbiBvZmZzZXROYW1lKHRzLCBvcHRzKSB7CiAgICAgICAgdGhyb3cgbmV3IFpvbmVJc0Fic3RyYWN0RXJyb3IoKTsKICAgICAgfQogICAgICAvKioKICAgICAgICogUmV0dXJucyB0aGUgb2Zmc2V0J3MgdmFsdWUgYXMgYSBzdHJpbmcKICAgICAgICogQGFic3RyYWN0CiAgICAgICAqIEBwYXJhbSB7bnVtYmVyfSB0cyAtIEVwb2NoIG1pbGxpc2Vjb25kcyBmb3Igd2hpY2ggdG8gZ2V0IHRoZSBvZmZzZXQKICAgICAgICogQHBhcmFtIHtzdHJpbmd9IGZvcm1hdCAtIFdoYXQgc3R5bGUgb2Ygb2Zmc2V0IHRvIHJldHVybi4KICAgICAgICogICAgICAgICAgICAgICAgICAgICAgICAgIEFjY2VwdHMgJ25hcnJvdycsICdzaG9ydCcsIG9yICd0ZWNoaWUnLiBSZXR1cm5pbmcgJys2JywgJyswNjowMCcsIG9yICcrMDYwMCcgcmVzcGVjdGl2ZWx5CiAgICAgICAqIEByZXR1cm4ge3N0cmluZ30KICAgICAgICovCiAgICAgIDsKCiAgICAgIF9wcm90by5mb3JtYXRPZmZzZXQgPSBmdW5jdGlvbiBmb3JtYXRPZmZzZXQodHMsIGZvcm1hdCkgewogICAgICAgIHRocm93IG5ldyBab25lSXNBYnN0cmFjdEVycm9yKCk7CiAgICAgIH0KICAgICAgLyoqCiAgICAgICAqIFJldHVybiB0aGUgb2Zmc2V0IGluIG1pbnV0ZXMgZm9yIHRoaXMgem9uZSBhdCB0aGUgc3BlY2lmaWVkIHRpbWVzdGFtcC4KICAgICAgICogQGFic3RyYWN0CiAgICAgICAqIEBwYXJhbSB7bnVtYmVyfSB0cyAtIEVwb2NoIG1pbGxpc2Vjb25kcyBmb3Igd2hpY2ggdG8gY29tcHV0ZSB0aGUgb2Zmc2V0CiAgICAgICAqIEByZXR1cm4ge251bWJlcn0KICAgICAgICovCiAgICAgIDsKCiAgICAgIF9wcm90by5vZmZzZXQgPSBmdW5jdGlvbiBvZmZzZXQodHMpIHsKICAgICAgICB0aHJvdyBuZXcgWm9uZUlzQWJzdHJhY3RFcnJvcigpOwogICAgICB9CiAgICAgIC8qKgogICAgICAgKiBSZXR1cm4gd2hldGhlciB0aGlzIFpvbmUgaXMgZXF1YWwgdG8gYW5vdGhlciB6b25lCiAgICAgICAqIEBhYnN0cmFjdAogICAgICAgKiBAcGFyYW0ge1pvbmV9IG90aGVyWm9uZSAtIHRoZSB6b25lIHRvIGNvbXBhcmUKICAgICAgICogQHJldHVybiB7Ym9vbGVhbn0KICAgICAgICovCiAgICAgIDsKCiAgICAgIF9wcm90by5lcXVhbHMgPSBmdW5jdGlvbiBlcXVhbHMob3RoZXJab25lKSB7CiAgICAgICAgdGhyb3cgbmV3IFpvbmVJc0Fic3RyYWN0RXJyb3IoKTsKICAgICAgfQogICAgICAvKioKICAgICAgICogUmV0dXJuIHdoZXRoZXIgdGhpcyBab25lIGlzIHZhbGlkLgogICAgICAgKiBAYWJzdHJhY3QKICAgICAgICogQHR5cGUge2Jvb2xlYW59CiAgICAgICAqLwogICAgICA7CgogICAgICBfY3JlYXRlQ2xhc3MoWm9uZSwgW3sKICAgICAgICBrZXk6ICJ0eXBlIiwKCiAgICAgICAgLyoqCiAgICAgICAgICogVGhlIHR5cGUgb2Ygem9uZQogICAgICAgICAqIEBhYnN0cmFjdAogICAgICAgICAqIEB0eXBlIHtzdHJpbmd9CiAgICAgICAgICovCiAgICAgICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7CiAgICAgICAgICB0aHJvdyBuZXcgWm9uZUlzQWJzdHJhY3RFcnJvcigpOwogICAgICAgIH0KICAgICAgICAvKioKICAgICAgICAgKiBUaGUgbmFtZSBvZiB0aGlzIHpvbmUuCiAgICAgICAgICogQGFic3RyYWN0CiAgICAgICAgICogQHR5cGUge3N0cmluZ30KICAgICAgICAgKi8KCiAgICAgIH0sIHsKICAgICAgICBrZXk6ICJuYW1lIiwKICAgICAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHsKICAgICAgICAgIHRocm93IG5ldyBab25lSXNBYnN0cmFjdEVycm9yKCk7CiAgICAgICAgfQogICAgICAgIC8qKgogICAgICAgICAqIFJldHVybnMgd2hldGhlciB0aGUgb2Zmc2V0IGlzIGtub3duIHRvIGJlIGZpeGVkIGZvciB0aGUgd2hvbGUgeWVhci4KICAgICAgICAgKiBAYWJzdHJhY3QKICAgICAgICAgKiBAdHlwZSB7Ym9vbGVhbn0KICAgICAgICAgKi8KCiAgICAgIH0sIHsKICAgICAgICBrZXk6ICJ1bml2ZXJzYWwiLAogICAgICAgIGdldDogZnVuY3Rpb24gZ2V0KCkgewogICAgICAgICAgdGhyb3cgbmV3IFpvbmVJc0Fic3RyYWN0RXJyb3IoKTsKICAgICAgICB9CiAgICAgIH0sIHsKICAgICAgICBrZXk6ICJpc1ZhbGlkIiwKICAgICAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHsKICAgICAgICAgIHRocm93IG5ldyBab25lSXNBYnN0cmFjdEVycm9yKCk7CiAgICAgICAgfQogICAgICB9XSk7CgogICAgICByZXR1cm4gWm9uZTsKICAgIH0oKTsKCiAgICB2YXIgc2luZ2xldG9uID0gbnVsbDsKICAgIC8qKgogICAgICogUmVwcmVzZW50cyB0aGUgbG9jYWwgem9uZSBmb3IgdGhpcyBKYXZhU2NyaXB0IGVudmlyb25tZW50LgogICAgICogQGltcGxlbWVudHMge1pvbmV9CiAgICAgKi8KCiAgICB2YXIgTG9jYWxab25lID0gLyojX19QVVJFX18qL2Z1bmN0aW9uIChfWm9uZSkgewogICAgICBfaW5oZXJpdHNMb29zZShMb2NhbFpvbmUsIF9ab25lKTsKCiAgICAgIGZ1bmN0aW9uIExvY2FsWm9uZSgpIHsKICAgICAgICByZXR1cm4gX1pvbmUuYXBwbHkodGhpcywgYXJndW1lbnRzKSB8fCB0aGlzOwogICAgICB9CgogICAgICB2YXIgX3Byb3RvID0gTG9jYWxab25lLnByb3RvdHlwZTsKCiAgICAgIC8qKiBAb3ZlcnJpZGUgKiovCiAgICAgIF9wcm90by5vZmZzZXROYW1lID0gZnVuY3Rpb24gb2Zmc2V0TmFtZSh0cywgX3JlZikgewogICAgICAgIHZhciBmb3JtYXQgPSBfcmVmLmZvcm1hdCwKICAgICAgICAgICAgbG9jYWxlID0gX3JlZi5sb2NhbGU7CiAgICAgICAgcmV0dXJuIHBhcnNlWm9uZUluZm8odHMsIGZvcm1hdCwgbG9jYWxlKTsKICAgICAgfQogICAgICAvKiogQG92ZXJyaWRlICoqLwogICAgICA7CgogICAgICBfcHJvdG8uZm9ybWF0T2Zmc2V0ID0gZnVuY3Rpb24gZm9ybWF0T2Zmc2V0JDEodHMsIGZvcm1hdCkgewogICAgICAgIHJldHVybiBmb3JtYXRPZmZzZXQodGhpcy5vZmZzZXQodHMpLCBmb3JtYXQpOwogICAgICB9CiAgICAgIC8qKiBAb3ZlcnJpZGUgKiovCiAgICAgIDsKCiAgICAgIF9wcm90by5vZmZzZXQgPSBmdW5jdGlvbiBvZmZzZXQodHMpIHsKICAgICAgICByZXR1cm4gLW5ldyBEYXRlKHRzKS5nZXRUaW1lem9uZU9mZnNldCgpOwogICAgICB9CiAgICAgIC8qKiBAb3ZlcnJpZGUgKiovCiAgICAgIDsKCiAgICAgIF9wcm90by5lcXVhbHMgPSBmdW5jdGlvbiBlcXVhbHMob3RoZXJab25lKSB7CiAgICAgICAgcmV0dXJuIG90aGVyWm9uZS50eXBlID09PSAibG9jYWwiOwogICAgICB9CiAgICAgIC8qKiBAb3ZlcnJpZGUgKiovCiAgICAgIDsKCiAgICAgIF9jcmVhdGVDbGFzcyhMb2NhbFpvbmUsIFt7CiAgICAgICAga2V5OiAidHlwZSIsCgogICAgICAgIC8qKiBAb3ZlcnJpZGUgKiovCiAgICAgICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7CiAgICAgICAgICByZXR1cm4gImxvY2FsIjsKICAgICAgICB9CiAgICAgICAgLyoqIEBvdmVycmlkZSAqKi8KCiAgICAgIH0sIHsKICAgICAgICBrZXk6ICJuYW1lIiwKICAgICAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHsKICAgICAgICAgIGlmIChoYXNJbnRsKCkpIHsKICAgICAgICAgICAgcmV0dXJuIG5ldyBJbnRsLkRhdGVUaW1lRm9ybWF0KCkucmVzb2x2ZWRPcHRpb25zKCkudGltZVpvbmU7CiAgICAgICAgICB9IGVsc2UgcmV0dXJuICJsb2NhbCI7CiAgICAgICAgfQogICAgICAgIC8qKiBAb3ZlcnJpZGUgKiovCgogICAgICB9LCB7CiAgICAgICAga2V5OiAidW5pdmVyc2FsIiwKICAgICAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHsKICAgICAgICAgIHJldHVybiBmYWxzZTsKICAgICAgICB9CiAgICAgIH0sIHsKICAgICAgICBrZXk6ICJpc1ZhbGlkIiwKICAgICAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHsKICAgICAgICAgIHJldHVybiB0cnVlOwogICAgICAgIH0KICAgICAgfV0sIFt7CiAgICAgICAga2V5OiAiaW5zdGFuY2UiLAoKICAgICAgICAvKioKICAgICAgICAgKiBHZXQgYSBzaW5nbGV0b24gaW5zdGFuY2Ugb2YgdGhlIGxvY2FsIHpvbmUKICAgICAgICAgKiBAcmV0dXJuIHtMb2NhbFpvbmV9CiAgICAgICAgICovCiAgICAgICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7CiAgICAgICAgICBpZiAoc2luZ2xldG9uID09PSBudWxsKSB7CiAgICAgICAgICAgIHNpbmdsZXRvbiA9IG5ldyBMb2NhbFpvbmUoKTsKICAgICAgICAgIH0KCiAgICAgICAgICByZXR1cm4gc2luZ2xldG9uOwogICAgICAgIH0KICAgICAgfV0pOwoKICAgICAgcmV0dXJuIExvY2FsWm9uZTsKICAgIH0oWm9uZSk7CgogICAgdmFyIG1hdGNoaW5nUmVnZXggPSBSZWdFeHAoIl4iICsgaWFuYVJlZ2V4LnNvdXJjZSArICIkIik7CiAgICB2YXIgZHRmQ2FjaGUgPSB7fTsKCiAgICBmdW5jdGlvbiBtYWtlRFRGKHpvbmUpIHsKICAgICAgaWYgKCFkdGZDYWNoZVt6b25lXSkgewogICAgICAgIGR0ZkNhY2hlW3pvbmVdID0gbmV3IEludGwuRGF0ZVRpbWVGb3JtYXQoImVuLVVTIiwgewogICAgICAgICAgaG91cjEyOiBmYWxzZSwKICAgICAgICAgIHRpbWVab25lOiB6b25lLAogICAgICAgICAgeWVhcjogIm51bWVyaWMiLAogICAgICAgICAgbW9udGg6ICIyLWRpZ2l0IiwKICAgICAgICAgIGRheTogIjItZGlnaXQiLAogICAgICAgICAgaG91cjogIjItZGlnaXQiLAogICAgICAgICAgbWludXRlOiAiMi1kaWdpdCIsCiAgICAgICAgICBzZWNvbmQ6ICIyLWRpZ2l0IgogICAgICAgIH0pOwogICAgICB9CgogICAgICByZXR1cm4gZHRmQ2FjaGVbem9uZV07CiAgICB9CgogICAgdmFyIHR5cGVUb1BvcyA9IHsKICAgICAgeWVhcjogMCwKICAgICAgbW9udGg6IDEsCiAgICAgIGRheTogMiwKICAgICAgaG91cjogMywKICAgICAgbWludXRlOiA0LAogICAgICBzZWNvbmQ6IDUKICAgIH07CgogICAgZnVuY3Rpb24gaGFja3lPZmZzZXQoZHRmLCBkYXRlKSB7CiAgICAgIHZhciBmb3JtYXR0ZWQgPSBkdGYuZm9ybWF0KGRhdGUpLnJlcGxhY2UoL1x1MjAwRS9nLCAiIiksCiAgICAgICAgICBwYXJzZWQgPSAvKFxkKylcLyhcZCspXC8oXGQrKSw/IChcZCspOihcZCspOihcZCspLy5leGVjKGZvcm1hdHRlZCksCiAgICAgICAgICBmTW9udGggPSBwYXJzZWRbMV0sCiAgICAgICAgICBmRGF5ID0gcGFyc2VkWzJdLAogICAgICAgICAgZlllYXIgPSBwYXJzZWRbM10sCiAgICAgICAgICBmSG91ciA9IHBhcnNlZFs0XSwKICAgICAgICAgIGZNaW51dGUgPSBwYXJzZWRbNV0sCiAgICAgICAgICBmU2Vjb25kID0gcGFyc2VkWzZdOwogICAgICByZXR1cm4gW2ZZZWFyLCBmTW9udGgsIGZEYXksIGZIb3VyLCBmTWludXRlLCBmU2Vjb25kXTsKICAgIH0KCiAgICBmdW5jdGlvbiBwYXJ0c09mZnNldChkdGYsIGRhdGUpIHsKICAgICAgdmFyIGZvcm1hdHRlZCA9IGR0Zi5mb3JtYXRUb1BhcnRzKGRhdGUpLAogICAgICAgICAgZmlsbGVkID0gW107CgogICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGZvcm1hdHRlZC5sZW5ndGg7IGkrKykgewogICAgICAgIHZhciBfZm9ybWF0dGVkJGkgPSBmb3JtYXR0ZWRbaV0sCiAgICAgICAgICAgIHR5cGUgPSBfZm9ybWF0dGVkJGkudHlwZSwKICAgICAgICAgICAgdmFsdWUgPSBfZm9ybWF0dGVkJGkudmFsdWUsCiAgICAgICAgICAgIHBvcyA9IHR5cGVUb1Bvc1t0eXBlXTsKCiAgICAgICAgaWYgKCFpc1VuZGVmaW5lZChwb3MpKSB7CiAgICAgICAgICBmaWxsZWRbcG9zXSA9IHBhcnNlSW50KHZhbHVlLCAxMCk7CiAgICAgICAgfQogICAgICB9CgogICAgICByZXR1cm4gZmlsbGVkOwogICAgfQoKICAgIHZhciBpYW5hWm9uZUNhY2hlID0ge307CiAgICAvKioKICAgICAqIEEgem9uZSBpZGVudGlmaWVkIGJ5IGFuIElBTkEgaWRlbnRpZmllciwgbGlrZSBBbWVyaWNhL05ld19Zb3JrCiAgICAgKiBAaW1wbGVtZW50cyB7Wm9uZX0KICAgICAqLwoKICAgIHZhciBJQU5BWm9uZSA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoX1pvbmUpIHsKICAgICAgX2luaGVyaXRzTG9vc2UoSUFOQVpvbmUsIF9ab25lKTsKCiAgICAgIC8qKgogICAgICAgKiBAcGFyYW0ge3N0cmluZ30gbmFtZSAtIFpvbmUgbmFtZQogICAgICAgKiBAcmV0dXJuIHtJQU5BWm9uZX0KICAgICAgICovCiAgICAgIElBTkFab25lLmNyZWF0ZSA9IGZ1bmN0aW9uIGNyZWF0ZShuYW1lKSB7CiAgICAgICAgaWYgKCFpYW5hWm9uZUNhY2hlW25hbWVdKSB7CiAgICAgICAgICBpYW5hWm9uZUNhY2hlW25hbWVdID0gbmV3IElBTkFab25lKG5hbWUpOwogICAgICAgIH0KCiAgICAgICAgcmV0dXJuIGlhbmFab25lQ2FjaGVbbmFtZV07CiAgICAgIH0KICAgICAgLyoqCiAgICAgICAqIFJlc2V0IGxvY2FsIGNhY2hlcy4gU2hvdWxkIG9ubHkgYmUgbmVjZXNzYXJ5IGluIHRlc3Rpbmcgc2NlbmFyaW9zLgogICAgICAgKiBAcmV0dXJuIHt2b2lkfQogICAgICAgKi8KICAgICAgOwoKICAgICAgSUFOQVpvbmUucmVzZXRDYWNoZSA9IGZ1bmN0aW9uIHJlc2V0Q2FjaGUoKSB7CiAgICAgICAgaWFuYVpvbmVDYWNoZSA9IHt9OwogICAgICAgIGR0ZkNhY2hlID0ge307CiAgICAgIH0KICAgICAgLyoqCiAgICAgICAqIFJldHVybnMgd2hldGhlciB0aGUgcHJvdmlkZWQgc3RyaW5nIGlzIGEgdmFsaWQgc3BlY2lmaWVyLiBUaGlzIG9ubHkgY2hlY2tzIHRoZSBzdHJpbmcncyBmb3JtYXQsIG5vdCB0aGF0IHRoZSBzcGVjaWZpZXIgaWRlbnRpZmllcyBhIGtub3duIHpvbmU7IHNlZSBpc1ZhbGlkWm9uZSBmb3IgdGhhdC4KICAgICAgICogQHBhcmFtIHtzdHJpbmd9IHMgLSBUaGUgc3RyaW5nIHRvIGNoZWNrIHZhbGlkaXR5IG9uCiAgICAgICAqIEBleGFtcGxlIElBTkFab25lLmlzVmFsaWRTcGVjaWZpZXIoIkFtZXJpY2EvTmV3X1lvcmsiKSAvLz0+IHRydWUKICAgICAgICogQGV4YW1wbGUgSUFOQVpvbmUuaXNWYWxpZFNwZWNpZmllcigiRmFudGFzaWEvQ2FzdGxlIikgLy89PiB0cnVlCiAgICAgICAqIEBleGFtcGxlIElBTkFab25lLmlzVmFsaWRTcGVjaWZpZXIoIlNwb3J0fn5ibG9ycCIpIC8vPT4gZmFsc2UKICAgICAgICogQHJldHVybiB7Ym9vbGVhbn0KICAgICAgICovCiAgICAgIDsKCiAgICAgIElBTkFab25lLmlzVmFsaWRTcGVjaWZpZXIgPSBmdW5jdGlvbiBpc1ZhbGlkU3BlY2lmaWVyKHMpIHsKICAgICAgICByZXR1cm4gISEocyAmJiBzLm1hdGNoKG1hdGNoaW5nUmVnZXgpKTsKICAgICAgfQogICAgICAvKioKICAgICAgICogUmV0dXJucyB3aGV0aGVyIHRoZSBwcm92aWRlZCBzdHJpbmcgaWRlbnRpZmllcyBhIHJlYWwgem9uZQogICAgICAgKiBAcGFyYW0ge3N0cmluZ30gem9uZSAtIFRoZSBzdHJpbmcgdG8gY2hlY2sKICAgICAgICogQGV4YW1wbGUgSUFOQVpvbmUuaXNWYWxpZFpvbmUoIkFtZXJpY2EvTmV3X1lvcmsiKSAvLz0+IHRydWUKICAgICAgICogQGV4YW1wbGUgSUFOQVpvbmUuaXNWYWxpZFpvbmUoIkZhbnRhc2lhL0Nhc3RsZSIpIC8vPT4gZmFsc2UKICAgICAgICogQGV4YW1wbGUgSUFOQVpvbmUuaXNWYWxpZFpvbmUoIlNwb3J0fn5ibG9ycCIpIC8vPT4gZmFsc2UKICAgICAgICogQHJldHVybiB7Ym9vbGVhbn0KICAgICAgICovCiAgICAgIDsKCiAgICAgIElBTkFab25lLmlzVmFsaWRab25lID0gZnVuY3Rpb24gaXNWYWxpZFpvbmUoem9uZSkgewogICAgICAgIHRyeSB7CiAgICAgICAgICBuZXcgSW50bC5EYXRlVGltZUZvcm1hdCgiZW4tVVMiLCB7CiAgICAgICAgICAgIHRpbWVab25lOiB6b25lCiAgICAgICAgICB9KS5mb3JtYXQoKTsKICAgICAgICAgIHJldHVybiB0cnVlOwogICAgICAgIH0gY2F0Y2ggKGUpIHsKICAgICAgICAgIHJldHVybiBmYWxzZTsKICAgICAgICB9CiAgICAgIH0gLy8gRXRjL0dNVCs4IC0+IC00ODAKCiAgICAgIC8qKiBAaWdub3JlICovCiAgICAgIDsKCiAgICAgIElBTkFab25lLnBhcnNlR01UT2Zmc2V0ID0gZnVuY3Rpb24gcGFyc2VHTVRPZmZzZXQoc3BlY2lmaWVyKSB7CiAgICAgICAgaWYgKHNwZWNpZmllcikgewogICAgICAgICAgdmFyIG1hdGNoID0gc3BlY2lmaWVyLm1hdGNoKC9eRXRjXC9HTVQoMHxbKy1dXGR7MSwyfSkkL2kpOwoKICAgICAgICAgIGlmIChtYXRjaCkgewogICAgICAgICAgICByZXR1cm4gLTYwICogcGFyc2VJbnQobWF0Y2hbMV0pOwogICAgICAgICAgfQogICAgICAgIH0KCiAgICAgICAgcmV0dXJuIG51bGw7CiAgICAgIH07CgogICAgICBmdW5jdGlvbiBJQU5BWm9uZShuYW1lKSB7CiAgICAgICAgdmFyIF90aGlzOwoKICAgICAgICBfdGhpcyA9IF9ab25lLmNhbGwodGhpcykgfHwgdGhpczsKICAgICAgICAvKiogQHByaXZhdGUgKiovCgogICAgICAgIF90aGlzLnpvbmVOYW1lID0gbmFtZTsKICAgICAgICAvKiogQHByaXZhdGUgKiovCgogICAgICAgIF90aGlzLnZhbGlkID0gSUFOQVpvbmUuaXNWYWxpZFpvbmUobmFtZSk7CiAgICAgICAgcmV0dXJuIF90aGlzOwogICAgICB9CiAgICAgIC8qKiBAb3ZlcnJpZGUgKiovCgoKICAgICAgdmFyIF9wcm90byA9IElBTkFab25lLnByb3RvdHlwZTsKCiAgICAgIC8qKiBAb3ZlcnJpZGUgKiovCiAgICAgIF9wcm90by5vZmZzZXROYW1lID0gZnVuY3Rpb24gb2Zmc2V0TmFtZSh0cywgX3JlZikgewogICAgICAgIHZhciBmb3JtYXQgPSBfcmVmLmZvcm1hdCwKICAgICAgICAgICAgbG9jYWxlID0gX3JlZi5sb2NhbGU7CiAgICAgICAgcmV0dXJuIHBhcnNlWm9uZUluZm8odHMsIGZvcm1hdCwgbG9jYWxlLCB0aGlzLm5hbWUpOwogICAgICB9CiAgICAgIC8qKiBAb3ZlcnJpZGUgKiovCiAgICAgIDsKCiAgICAgIF9wcm90by5mb3JtYXRPZmZzZXQgPSBmdW5jdGlvbiBmb3JtYXRPZmZzZXQkMSh0cywgZm9ybWF0KSB7CiAgICAgICAgcmV0dXJuIGZvcm1hdE9mZnNldCh0aGlzLm9mZnNldCh0cyksIGZvcm1hdCk7CiAgICAgIH0KICAgICAgLyoqIEBvdmVycmlkZSAqKi8KICAgICAgOwoKICAgICAgX3Byb3RvLm9mZnNldCA9IGZ1bmN0aW9uIG9mZnNldCh0cykgewogICAgICAgIHZhciBkYXRlID0gbmV3IERhdGUodHMpOwogICAgICAgIGlmIChpc05hTihkYXRlKSkgcmV0dXJuIE5hTjsKCiAgICAgICAgdmFyIGR0ZiA9IG1ha2VEVEYodGhpcy5uYW1lKSwKICAgICAgICAgICAgX3JlZjIgPSBkdGYuZm9ybWF0VG9QYXJ0cyA/IHBhcnRzT2Zmc2V0KGR0ZiwgZGF0ZSkgOiBoYWNreU9mZnNldChkdGYsIGRhdGUpLAogICAgICAgICAgICB5ZWFyID0gX3JlZjJbMF0sCiAgICAgICAgICAgIG1vbnRoID0gX3JlZjJbMV0sCiAgICAgICAgICAgIGRheSA9IF9yZWYyWzJdLAogICAgICAgICAgICBob3VyID0gX3JlZjJbM10sCiAgICAgICAgICAgIG1pbnV0ZSA9IF9yZWYyWzRdLAogICAgICAgICAgICBzZWNvbmQgPSBfcmVmMls1XSwKICAgICAgICAgICAgYWRqdXN0ZWRIb3VyID0gaG91ciA9PT0gMjQgPyAwIDogaG91cjsKCiAgICAgICAgdmFyIGFzVVRDID0gb2JqVG9Mb2NhbFRTKHsKICAgICAgICAgIHllYXI6IHllYXIsCiAgICAgICAgICBtb250aDogbW9udGgsCiAgICAgICAgICBkYXk6IGRheSwKICAgICAgICAgIGhvdXI6IGFkanVzdGVkSG91ciwKICAgICAgICAgIG1pbnV0ZTogbWludXRlLAogICAgICAgICAgc2Vjb25kOiBzZWNvbmQsCiAgICAgICAgICBtaWxsaXNlY29uZDogMAogICAgICAgIH0pOwogICAgICAgIHZhciBhc1RTID0gK2RhdGU7CiAgICAgICAgdmFyIG92ZXIgPSBhc1RTICUgMTAwMDsKICAgICAgICBhc1RTIC09IG92ZXIgPj0gMCA/IG92ZXIgOiAxMDAwICsgb3ZlcjsKICAgICAgICByZXR1cm4gKGFzVVRDIC0gYXNUUykgLyAoNjAgKiAxMDAwKTsKICAgICAgfQogICAgICAvKiogQG92ZXJyaWRlICoqLwogICAgICA7CgogICAgICBfcHJvdG8uZXF1YWxzID0gZnVuY3Rpb24gZXF1YWxzKG90aGVyWm9uZSkgewogICAgICAgIHJldHVybiBvdGhlclpvbmUudHlwZSA9PT0gImlhbmEiICYmIG90aGVyWm9uZS5uYW1lID09PSB0aGlzLm5hbWU7CiAgICAgIH0KICAgICAgLyoqIEBvdmVycmlkZSAqKi8KICAgICAgOwoKICAgICAgX2NyZWF0ZUNsYXNzKElBTkFab25lLCBbewogICAgICAgIGtleTogInR5cGUiLAogICAgICAgIGdldDogZnVuY3Rpb24gZ2V0KCkgewogICAgICAgICAgcmV0dXJuICJpYW5hIjsKICAgICAgICB9CiAgICAgICAgLyoqIEBvdmVycmlkZSAqKi8KCiAgICAgIH0sIHsKICAgICAgICBrZXk6ICJuYW1lIiwKICAgICAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHsKICAgICAgICAgIHJldHVybiB0aGlzLnpvbmVOYW1lOwogICAgICAgIH0KICAgICAgICAvKiogQG92ZXJyaWRlICoqLwoKICAgICAgfSwgewogICAgICAgIGtleTogInVuaXZlcnNhbCIsCiAgICAgICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7CiAgICAgICAgICByZXR1cm4gZmFsc2U7CiAgICAgICAgfQogICAgICB9LCB7CiAgICAgICAga2V5OiAiaXNWYWxpZCIsCiAgICAgICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7CiAgICAgICAgICByZXR1cm4gdGhpcy52YWxpZDsKICAgICAgICB9CiAgICAgIH1dKTsKCiAgICAgIHJldHVybiBJQU5BWm9uZTsKICAgIH0oWm9uZSk7CgogICAgdmFyIHNpbmdsZXRvbiQxID0gbnVsbDsKICAgIC8qKgogICAgICogQSB6b25lIHdpdGggYSBmaXhlZCBvZmZzZXQgKG1lYW5pbmcgbm8gRFNUKQogICAgICogQGltcGxlbWVudHMge1pvbmV9CiAgICAgKi8KCiAgICB2YXIgRml4ZWRPZmZzZXRab25lID0gLyojX19QVVJFX18qL2Z1bmN0aW9uIChfWm9uZSkgewogICAgICBfaW5oZXJpdHNMb29zZShGaXhlZE9mZnNldFpvbmUsIF9ab25lKTsKCiAgICAgIC8qKgogICAgICAgKiBHZXQgYW4gaW5zdGFuY2Ugd2l0aCBhIHNwZWNpZmllZCBvZmZzZXQKICAgICAgICogQHBhcmFtIHtudW1iZXJ9IG9mZnNldCAtIFRoZSBvZmZzZXQgaW4gbWludXRlcwogICAgICAgKiBAcmV0dXJuIHtGaXhlZE9mZnNldFpvbmV9CiAgICAgICAqLwogICAgICBGaXhlZE9mZnNldFpvbmUuaW5zdGFuY2UgPSBmdW5jdGlvbiBpbnN0YW5jZShvZmZzZXQpIHsKICAgICAgICByZXR1cm4gb2Zmc2V0ID09PSAwID8gRml4ZWRPZmZzZXRab25lLnV0Y0luc3RhbmNlIDogbmV3IEZpeGVkT2Zmc2V0Wm9uZShvZmZzZXQpOwogICAgICB9CiAgICAgIC8qKgogICAgICAgKiBHZXQgYW4gaW5zdGFuY2Ugb2YgRml4ZWRPZmZzZXRab25lIGZyb20gYSBVVEMgb2Zmc2V0IHN0cmluZywgbGlrZSAiVVRDKzYiCiAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBzIC0gVGhlIG9mZnNldCBzdHJpbmcgdG8gcGFyc2UKICAgICAgICogQGV4YW1wbGUgRml4ZWRPZmZzZXRab25lLnBhcnNlU3BlY2lmaWVyKCJVVEMrNiIpCiAgICAgICAqIEBleGFtcGxlIEZpeGVkT2Zmc2V0Wm9uZS5wYXJzZVNwZWNpZmllcigiVVRDKzA2IikKICAgICAgICogQGV4YW1wbGUgRml4ZWRPZmZzZXRab25lLnBhcnNlU3BlY2lmaWVyKCJVVEMtNjowMCIpCiAgICAgICAqIEByZXR1cm4ge0ZpeGVkT2Zmc2V0Wm9uZX0KICAgICAgICovCiAgICAgIDsKCiAgICAgIEZpeGVkT2Zmc2V0Wm9uZS5wYXJzZVNwZWNpZmllciA9IGZ1bmN0aW9uIHBhcnNlU3BlY2lmaWVyKHMpIHsKICAgICAgICBpZiAocykgewogICAgICAgICAgdmFyIHIgPSBzLm1hdGNoKC9edXRjKD86KFsrLV1cZHsxLDJ9KSg/OjooXGR7Mn0pKT8pPyQvaSk7CgogICAgICAgICAgaWYgKHIpIHsKICAgICAgICAgICAgcmV0dXJuIG5ldyBGaXhlZE9mZnNldFpvbmUoc2lnbmVkT2Zmc2V0KHJbMV0sIHJbMl0pKTsKICAgICAgICAgIH0KICAgICAgICB9CgogICAgICAgIHJldHVybiBudWxsOwogICAgICB9OwoKICAgICAgX2NyZWF0ZUNsYXNzKEZpeGVkT2Zmc2V0Wm9uZSwgbnVsbCwgW3sKICAgICAgICBrZXk6ICJ1dGNJbnN0YW5jZSIsCgogICAgICAgIC8qKgogICAgICAgICAqIEdldCBhIHNpbmdsZXRvbiBpbnN0YW5jZSBvZiBVVEMKICAgICAgICAgKiBAcmV0dXJuIHtGaXhlZE9mZnNldFpvbmV9CiAgICAgICAgICovCiAgICAgICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7CiAgICAgICAgICBpZiAoc2luZ2xldG9uJDEgPT09IG51bGwpIHsKICAgICAgICAgICAgc2luZ2xldG9uJDEgPSBuZXcgRml4ZWRPZmZzZXRab25lKDApOwogICAgICAgICAgfQoKICAgICAgICAgIHJldHVybiBzaW5nbGV0b24kMTsKICAgICAgICB9CiAgICAgIH1dKTsKCiAgICAgIGZ1bmN0aW9uIEZpeGVkT2Zmc2V0Wm9uZShvZmZzZXQpIHsKICAgICAgICB2YXIgX3RoaXM7CgogICAgICAgIF90aGlzID0gX1pvbmUuY2FsbCh0aGlzKSB8fCB0aGlzOwogICAgICAgIC8qKiBAcHJpdmF0ZSAqKi8KCiAgICAgICAgX3RoaXMuZml4ZWQgPSBvZmZzZXQ7CiAgICAgICAgcmV0dXJuIF90aGlzOwogICAgICB9CiAgICAgIC8qKiBAb3ZlcnJpZGUgKiovCgoKICAgICAgdmFyIF9wcm90byA9IEZpeGVkT2Zmc2V0Wm9uZS5wcm90b3R5cGU7CgogICAgICAvKiogQG92ZXJyaWRlICoqLwogICAgICBfcHJvdG8ub2Zmc2V0TmFtZSA9IGZ1bmN0aW9uIG9mZnNldE5hbWUoKSB7CiAgICAgICAgcmV0dXJuIHRoaXMubmFtZTsKICAgICAgfQogICAgICAvKiogQG92ZXJyaWRlICoqLwogICAgICA7CgogICAgICBfcHJvdG8uZm9ybWF0T2Zmc2V0ID0gZnVuY3Rpb24gZm9ybWF0T2Zmc2V0JDEodHMsIGZvcm1hdCkgewogICAgICAgIHJldHVybiBmb3JtYXRPZmZzZXQodGhpcy5maXhlZCwgZm9ybWF0KTsKICAgICAgfQogICAgICAvKiogQG92ZXJyaWRlICoqLwogICAgICA7CgogICAgICAvKiogQG92ZXJyaWRlICoqLwogICAgICBfcHJvdG8ub2Zmc2V0ID0gZnVuY3Rpb24gb2Zmc2V0KCkgewogICAgICAgIHJldHVybiB0aGlzLmZpeGVkOwogICAgICB9CiAgICAgIC8qKiBAb3ZlcnJpZGUgKiovCiAgICAgIDsKCiAgICAgIF9wcm90by5lcXVhbHMgPSBmdW5jdGlvbiBlcXVhbHMob3RoZXJab25lKSB7CiAgICAgICAgcmV0dXJuIG90aGVyWm9uZS50eXBlID09PSAiZml4ZWQiICYmIG90aGVyWm9uZS5maXhlZCA9PT0gdGhpcy5maXhlZDsKICAgICAgfQogICAgICAvKiogQG92ZXJyaWRlICoqLwogICAgICA7CgogICAgICBfY3JlYXRlQ2xhc3MoRml4ZWRPZmZzZXRab25lLCBbewogICAgICAgIGtleTogInR5cGUiLAogICAgICAgIGdldDogZnVuY3Rpb24gZ2V0KCkgewogICAgICAgICAgcmV0dXJuICJmaXhlZCI7CiAgICAgICAgfQogICAgICAgIC8qKiBAb3ZlcnJpZGUgKiovCgogICAgICB9LCB7CiAgICAgICAga2V5OiAibmFtZSIsCiAgICAgICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7CiAgICAgICAgICByZXR1cm4gdGhpcy5maXhlZCA9PT0gMCA/ICJVVEMiIDogIlVUQyIgKyBmb3JtYXRPZmZzZXQodGhpcy5maXhlZCwgIm5hcnJvdyIpOwogICAgICAgIH0KICAgICAgfSwgewogICAgICAgIGtleTogInVuaXZlcnNhbCIsCiAgICAgICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7CiAgICAgICAgICByZXR1cm4gdHJ1ZTsKICAgICAgICB9CiAgICAgIH0sIHsKICAgICAgICBrZXk6ICJpc1ZhbGlkIiwKICAgICAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHsKICAgICAgICAgIHJldHVybiB0cnVlOwogICAgICAgIH0KICAgICAgfV0pOwoKICAgICAgcmV0dXJuIEZpeGVkT2Zmc2V0Wm9uZTsKICAgIH0oWm9uZSk7CgogICAgLyoqCiAgICAgKiBBIHpvbmUgdGhhdCBmYWlsZWQgdG8gcGFyc2UuIFlvdSBzaG91bGQgbmV2ZXIgbmVlZCB0byBpbnN0YW50aWF0ZSB0aGlzLgogICAgICogQGltcGxlbWVudHMge1pvbmV9CiAgICAgKi8KCiAgICB2YXIgSW52YWxpZFpvbmUgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKF9ab25lKSB7CiAgICAgIF9pbmhlcml0c0xvb3NlKEludmFsaWRab25lLCBfWm9uZSk7CgogICAgICBmdW5jdGlvbiBJbnZhbGlkWm9uZSh6b25lTmFtZSkgewogICAgICAgIHZhciBfdGhpczsKCiAgICAgICAgX3RoaXMgPSBfWm9uZS5jYWxsKHRoaXMpIHx8IHRoaXM7CiAgICAgICAgLyoqICBAcHJpdmF0ZSAqLwoKICAgICAgICBfdGhpcy56b25lTmFtZSA9IHpvbmVOYW1lOwogICAgICAgIHJldHVybiBfdGhpczsKICAgICAgfQogICAgICAvKiogQG92ZXJyaWRlICoqLwoKCiAgICAgIHZhciBfcHJvdG8gPSBJbnZhbGlkWm9uZS5wcm90b3R5cGU7CgogICAgICAvKiogQG92ZXJyaWRlICoqLwogICAgICBfcHJvdG8ub2Zmc2V0TmFtZSA9IGZ1bmN0aW9uIG9mZnNldE5hbWUoKSB7CiAgICAgICAgcmV0dXJuIG51bGw7CiAgICAgIH0KICAgICAgLyoqIEBvdmVycmlkZSAqKi8KICAgICAgOwoKICAgICAgX3Byb3RvLmZvcm1hdE9mZnNldCA9IGZ1bmN0aW9uIGZvcm1hdE9mZnNldCgpIHsKICAgICAgICByZXR1cm4gIiI7CiAgICAgIH0KICAgICAgLyoqIEBvdmVycmlkZSAqKi8KICAgICAgOwoKICAgICAgX3Byb3RvLm9mZnNldCA9IGZ1bmN0aW9uIG9mZnNldCgpIHsKICAgICAgICByZXR1cm4gTmFOOwogICAgICB9CiAgICAgIC8qKiBAb3ZlcnJpZGUgKiovCiAgICAgIDsKCiAgICAgIF9wcm90by5lcXVhbHMgPSBmdW5jdGlvbiBlcXVhbHMoKSB7CiAgICAgICAgcmV0dXJuIGZhbHNlOwogICAgICB9CiAgICAgIC8qKiBAb3ZlcnJpZGUgKiovCiAgICAgIDsKCiAgICAgIF9jcmVhdGVDbGFzcyhJbnZhbGlkWm9uZSwgW3sKICAgICAgICBrZXk6ICJ0eXBlIiwKICAgICAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHsKICAgICAgICAgIHJldHVybiAiaW52YWxpZCI7CiAgICAgICAgfQogICAgICAgIC8qKiBAb3ZlcnJpZGUgKiovCgogICAgICB9LCB7CiAgICAgICAga2V5OiAibmFtZSIsCiAgICAgICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7CiAgICAgICAgICByZXR1cm4gdGhpcy56b25lTmFtZTsKICAgICAgICB9CiAgICAgICAgLyoqIEBvdmVycmlkZSAqKi8KCiAgICAgIH0sIHsKICAgICAgICBrZXk6ICJ1bml2ZXJzYWwiLAogICAgICAgIGdldDogZnVuY3Rpb24gZ2V0KCkgewogICAgICAgICAgcmV0dXJuIGZhbHNlOwogICAgICAgIH0KICAgICAgfSwgewogICAgICAgIGtleTogImlzVmFsaWQiLAogICAgICAgIGdldDogZnVuY3Rpb24gZ2V0KCkgewogICAgICAgICAgcmV0dXJuIGZhbHNlOwogICAgICAgIH0KICAgICAgfV0pOwoKICAgICAgcmV0dXJuIEludmFsaWRab25lOwogICAgfShab25lKTsKCiAgICAvKioKICAgICAqIEBwcml2YXRlCiAgICAgKi8KICAgIGZ1bmN0aW9uIG5vcm1hbGl6ZVpvbmUoaW5wdXQsIGRlZmF1bHRab25lKSB7CiAgICAgIHZhciBvZmZzZXQ7CgogICAgICBpZiAoaXNVbmRlZmluZWQoaW5wdXQpIHx8IGlucHV0ID09PSBudWxsKSB7CiAgICAgICAgcmV0dXJuIGRlZmF1bHRab25lOwogICAgICB9IGVsc2UgaWYgKGlucHV0IGluc3RhbmNlb2YgWm9uZSkgewogICAgICAgIHJldHVybiBpbnB1dDsKICAgICAgfSBlbHNlIGlmIChpc1N0cmluZyhpbnB1dCkpIHsKICAgICAgICB2YXIgbG93ZXJlZCA9IGlucHV0LnRvTG93ZXJDYXNlKCk7CiAgICAgICAgaWYgKGxvd2VyZWQgPT09ICJsb2NhbCIpIHJldHVybiBkZWZhdWx0Wm9uZTtlbHNlIGlmIChsb3dlcmVkID09PSAidXRjIiB8fCBsb3dlcmVkID09PSAiZ210IikgcmV0dXJuIEZpeGVkT2Zmc2V0Wm9uZS51dGNJbnN0YW5jZTtlbHNlIGlmICgob2Zmc2V0ID0gSUFOQVpvbmUucGFyc2VHTVRPZmZzZXQoaW5wdXQpKSAhPSBudWxsKSB7CiAgICAgICAgICAvLyBoYW5kbGUgRXRjL0dNVC00LCB3aGljaCBWOCBjaG9rZXMgb24KICAgICAgICAgIHJldHVybiBGaXhlZE9mZnNldFpvbmUuaW5zdGFuY2Uob2Zmc2V0KTsKICAgICAgICB9IGVsc2UgaWYgKElBTkFab25lLmlzVmFsaWRTcGVjaWZpZXIobG93ZXJlZCkpIHJldHVybiBJQU5BWm9uZS5jcmVhdGUoaW5wdXQpO2Vsc2UgcmV0dXJuIEZpeGVkT2Zmc2V0Wm9uZS5wYXJzZVNwZWNpZmllcihsb3dlcmVkKSB8fCBuZXcgSW52YWxpZFpvbmUoaW5wdXQpOwogICAgICB9IGVsc2UgaWYgKGlzTnVtYmVyKGlucHV0KSkgewogICAgICAgIHJldHVybiBGaXhlZE9mZnNldFpvbmUuaW5zdGFuY2UoaW5wdXQpOwogICAgICB9IGVsc2UgaWYgKHR5cGVvZiBpbnB1dCA9PT0gIm9iamVjdCIgJiYgaW5wdXQub2Zmc2V0ICYmIHR5cGVvZiBpbnB1dC5vZmZzZXQgPT09ICJudW1iZXIiKSB7CiAgICAgICAgLy8gVGhpcyBpcyBkdW1iLCBidXQgdGhlIGluc3RhbmNlb2YgY2hlY2sgYWJvdmUgZG9lc24ndCBzZWVtIHRvIHJlYWxseSB3b3JrCiAgICAgICAgLy8gc28gd2UncmUgZHVjayBjaGVja2luZyBpdAogICAgICAgIHJldHVybiBpbnB1dDsKICAgICAgfSBlbHNlIHsKICAgICAgICByZXR1cm4gbmV3IEludmFsaWRab25lKGlucHV0KTsKICAgICAgfQogICAgfQoKICAgIHZhciBub3cgPSBmdW5jdGlvbiBub3coKSB7CiAgICAgIHJldHVybiBEYXRlLm5vdygpOwogICAgfSwKICAgICAgICBkZWZhdWx0Wm9uZSA9IG51bGwsCiAgICAgICAgLy8gbm90IHNldHRpbmcgdGhpcyBkaXJlY3RseSB0byBMb2NhbFpvbmUuaW5zdGFuY2UgYmMgbG9hZGluZyBvcmRlciBpc3N1ZXMKICAgIGRlZmF1bHRMb2NhbGUgPSBudWxsLAogICAgICAgIGRlZmF1bHROdW1iZXJpbmdTeXN0ZW0gPSBudWxsLAogICAgICAgIGRlZmF1bHRPdXRwdXRDYWxlbmRhciA9IG51bGwsCiAgICAgICAgdGhyb3dPbkludmFsaWQgPSBmYWxzZTsKICAgIC8qKgogICAgICogU2V0dGluZ3MgY29udGFpbnMgc3RhdGljIGdldHRlcnMgYW5kIHNldHRlcnMgdGhhdCBjb250cm9sIEx1eG9uJ3Mgb3ZlcmFsbCBiZWhhdmlvci4gTHV4b24gaXMgYSBzaW1wbGUgbGlicmFyeSB3aXRoIGZldyBvcHRpb25zLCBidXQgdGhlIG9uZXMgaXQgZG9lcyBoYXZlIGxpdmUgaGVyZS4KICAgICAqLwoKCiAgICB2YXIgU2V0dGluZ3MgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKCkgewogICAgICBmdW5jdGlvbiBTZXR0aW5ncygpIHt9CgogICAgICAvKioKICAgICAgICogUmVzZXQgTHV4b24ncyBnbG9iYWwgY2FjaGVzLiBTaG91bGQgb25seSBiZSBuZWNlc3NhcnkgaW4gdGVzdGluZyBzY2VuYXJpb3MuCiAgICAgICAqIEByZXR1cm4ge3ZvaWR9CiAgICAgICAqLwogICAgICBTZXR0aW5ncy5yZXNldENhY2hlcyA9IGZ1bmN0aW9uIHJlc2V0Q2FjaGVzKCkgewogICAgICAgIExvY2FsZS5yZXNldENhY2hlKCk7CiAgICAgICAgSUFOQVpvbmUucmVzZXRDYWNoZSgpOwogICAgICB9OwoKICAgICAgX2NyZWF0ZUNsYXNzKFNldHRpbmdzLCBudWxsLCBbewogICAgICAgIGtleTogIm5vdyIsCgogICAgICAgIC8qKgogICAgICAgICAqIEdldCB0aGUgY2FsbGJhY2sgZm9yIHJldHVybmluZyB0aGUgY3VycmVudCB0aW1lc3RhbXAuCiAgICAgICAgICogQHR5cGUge2Z1bmN0aW9ufQogICAgICAgICAqLwogICAgICAgIGdldDogZnVuY3Rpb24gZ2V0KCkgewogICAgICAgICAgcmV0dXJuIG5vdzsKICAgICAgICB9CiAgICAgICAgLyoqCiAgICAgICAgICogU2V0IHRoZSBjYWxsYmFjayBmb3IgcmV0dXJuaW5nIHRoZSBjdXJyZW50IHRpbWVzdGFtcC4KICAgICAgICAgKiBUaGUgZnVuY3Rpb24gc2hvdWxkIHJldHVybiBhIG51bWJlciwgd2hpY2ggd2lsbCBiZSBpbnRlcnByZXRlZCBhcyBhbiBFcG9jaCBtaWxsaXNlY29uZCBjb3VudAogICAgICAgICAqIEB0eXBlIHtmdW5jdGlvbn0KICAgICAgICAgKiBAZXhhbXBsZSBTZXR0aW5ncy5ub3cgPSAoKSA9PiBEYXRlLm5vdygpICsgMzAwMCAvLyBwcmV0ZW5kIGl0IGlzIDMgc2Vjb25kcyBpbiB0aGUgZnV0dXJlCiAgICAgICAgICogQGV4YW1wbGUgU2V0dGluZ3Mubm93ID0gKCkgPT4gMCAvLyBhbHdheXMgcHJldGVuZCBpdCdzIEphbiAxLCAxOTcwIGF0IG1pZG5pZ2h0IGluIFVUQyB0aW1lCiAgICAgICAgICovCiAgICAgICAgLAogICAgICAgIHNldDogZnVuY3Rpb24gc2V0KG4pIHsKICAgICAgICAgIG5vdyA9IG47CiAgICAgICAgfQogICAgICAgIC8qKgogICAgICAgICAqIEdldCB0aGUgZGVmYXVsdCB0aW1lIHpvbmUgdG8gY3JlYXRlIERhdGVUaW1lcyBpbi4KICAgICAgICAgKiBAdHlwZSB7c3RyaW5nfQogICAgICAgICAqLwoKICAgICAgfSwgewogICAgICAgIGtleTogImRlZmF1bHRab25lTmFtZSIsCiAgICAgICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7CiAgICAgICAgICByZXR1cm4gU2V0dGluZ3MuZGVmYXVsdFpvbmUubmFtZTsKICAgICAgICB9CiAgICAgICAgLyoqCiAgICAgICAgICogU2V0IHRoZSBkZWZhdWx0IHRpbWUgem9uZSB0byBjcmVhdGUgRGF0ZVRpbWVzIGluLiBEb2VzIG5vdCBhZmZlY3QgZXhpc3RpbmcgaW5zdGFuY2VzLgogICAgICAgICAqIEB0eXBlIHtzdHJpbmd9CiAgICAgICAgICovCiAgICAgICAgLAogICAgICAgIHNldDogZnVuY3Rpb24gc2V0KHopIHsKICAgICAgICAgIGlmICgheikgewogICAgICAgICAgICBkZWZhdWx0Wm9uZSA9IG51bGw7CiAgICAgICAgICB9IGVsc2UgewogICAgICAgICAgICBkZWZhdWx0Wm9uZSA9IG5vcm1hbGl6ZVpvbmUoeik7CiAgICAgICAgICB9CiAgICAgICAgfQogICAgICAgIC8qKgogICAgICAgICAqIEdldCB0aGUgZGVmYXVsdCB0aW1lIHpvbmUgb2JqZWN0IHRvIGNyZWF0ZSBEYXRlVGltZXMgaW4uIERvZXMgbm90IGFmZmVjdCBleGlzdGluZyBpbnN0YW5jZXMuCiAgICAgICAgICogQHR5cGUge1pvbmV9CiAgICAgICAgICovCgogICAgICB9LCB7CiAgICAgICAga2V5OiAiZGVmYXVsdFpvbmUiLAogICAgICAgIGdldDogZnVuY3Rpb24gZ2V0KCkgewogICAgICAgICAgcmV0dXJuIGRlZmF1bHRab25lIHx8IExvY2FsWm9uZS5pbnN0YW5jZTsKICAgICAgICB9CiAgICAgICAgLyoqCiAgICAgICAgICogR2V0IHRoZSBkZWZhdWx0IGxvY2FsZSB0byBjcmVhdGUgRGF0ZVRpbWVzIHdpdGguIERvZXMgbm90IGFmZmVjdCBleGlzdGluZyBpbnN0YW5jZXMuCiAgICAgICAgICogQHR5cGUge3N0cmluZ30KICAgICAgICAgKi8KCiAgICAgIH0sIHsKICAgICAgICBrZXk6ICJkZWZhdWx0TG9jYWxlIiwKICAgICAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHsKICAgICAgICAgIHJldHVybiBkZWZhdWx0TG9jYWxlOwogICAgICAgIH0KICAgICAgICAvKioKICAgICAgICAgKiBTZXQgdGhlIGRlZmF1bHQgbG9jYWxlIHRvIGNyZWF0ZSBEYXRlVGltZXMgd2l0aC4gRG9lcyBub3QgYWZmZWN0IGV4aXN0aW5nIGluc3RhbmNlcy4KICAgICAgICAgKiBAdHlwZSB7c3RyaW5nfQogICAgICAgICAqLwogICAgICAgICwKICAgICAgICBzZXQ6IGZ1bmN0aW9uIHNldChsb2NhbGUpIHsKICAgICAgICAgIGRlZmF1bHRMb2NhbGUgPSBsb2NhbGU7CiAgICAgICAgfQogICAgICAgIC8qKgogICAgICAgICAqIEdldCB0aGUgZGVmYXVsdCBudW1iZXJpbmcgc3lzdGVtIHRvIGNyZWF0ZSBEYXRlVGltZXMgd2l0aC4gRG9lcyBub3QgYWZmZWN0IGV4aXN0aW5nIGluc3RhbmNlcy4KICAgICAgICAgKiBAdHlwZSB7c3RyaW5nfQogICAgICAgICAqLwoKICAgICAgfSwgewogICAgICAgIGtleTogImRlZmF1bHROdW1iZXJpbmdTeXN0ZW0iLAogICAgICAgIGdldDogZnVuY3Rpb24gZ2V0KCkgewogICAgICAgICAgcmV0dXJuIGRlZmF1bHROdW1iZXJpbmdTeXN0ZW07CiAgICAgICAgfQogICAgICAgIC8qKgogICAgICAgICAqIFNldCB0aGUgZGVmYXVsdCBudW1iZXJpbmcgc3lzdGVtIHRvIGNyZWF0ZSBEYXRlVGltZXMgd2l0aC4gRG9lcyBub3QgYWZmZWN0IGV4aXN0aW5nIGluc3RhbmNlcy4KICAgICAgICAgKiBAdHlwZSB7c3RyaW5nfQogICAgICAgICAqLwogICAgICAgICwKICAgICAgICBzZXQ6IGZ1bmN0aW9uIHNldChudW1iZXJpbmdTeXN0ZW0pIHsKICAgICAgICAgIGRlZmF1bHROdW1iZXJpbmdTeXN0ZW0gPSBudW1iZXJpbmdTeXN0ZW07CiAgICAgICAgfQogICAgICAgIC8qKgogICAgICAgICAqIEdldCB0aGUgZGVmYXVsdCBvdXRwdXQgY2FsZW5kYXIgdG8gY3JlYXRlIERhdGVUaW1lcyB3aXRoLiBEb2VzIG5vdCBhZmZlY3QgZXhpc3RpbmcgaW5zdGFuY2VzLgogICAgICAgICAqIEB0eXBlIHtzdHJpbmd9CiAgICAgICAgICovCgogICAgICB9LCB7CiAgICAgICAga2V5OiAiZGVmYXVsdE91dHB1dENhbGVuZGFyIiwKICAgICAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHsKICAgICAgICAgIHJldHVybiBkZWZhdWx0T3V0cHV0Q2FsZW5kYXI7CiAgICAgICAgfQogICAgICAgIC8qKgogICAgICAgICAqIFNldCB0aGUgZGVmYXVsdCBvdXRwdXQgY2FsZW5kYXIgdG8gY3JlYXRlIERhdGVUaW1lcyB3aXRoLiBEb2VzIG5vdCBhZmZlY3QgZXhpc3RpbmcgaW5zdGFuY2VzLgogICAgICAgICAqIEB0eXBlIHtzdHJpbmd9CiAgICAgICAgICovCiAgICAgICAgLAogICAgICAgIHNldDogZnVuY3Rpb24gc2V0KG91dHB1dENhbGVuZGFyKSB7CiAgICAgICAgICBkZWZhdWx0T3V0cHV0Q2FsZW5kYXIgPSBvdXRwdXRDYWxlbmRhcjsKICAgICAgICB9CiAgICAgICAgLyoqCiAgICAgICAgICogR2V0IHdoZXRoZXIgTHV4b24gd2lsbCB0aHJvdyB3aGVuIGl0IGVuY291bnRlcnMgaW52YWxpZCBEYXRlVGltZXMsIER1cmF0aW9ucywgb3IgSW50ZXJ2YWxzCiAgICAgICAgICogQHR5cGUge2Jvb2xlYW59CiAgICAgICAgICovCgogICAgICB9LCB7CiAgICAgICAga2V5OiAidGhyb3dPbkludmFsaWQiLAogICAgICAgIGdldDogZnVuY3Rpb24gZ2V0KCkgewogICAgICAgICAgcmV0dXJuIHRocm93T25JbnZhbGlkOwogICAgICAgIH0KICAgICAgICAvKioKICAgICAgICAgKiBTZXQgd2hldGhlciBMdXhvbiB3aWxsIHRocm93IHdoZW4gaXQgZW5jb3VudGVycyBpbnZhbGlkIERhdGVUaW1lcywgRHVyYXRpb25zLCBvciBJbnRlcnZhbHMKICAgICAgICAgKiBAdHlwZSB7Ym9vbGVhbn0KICAgICAgICAgKi8KICAgICAgICAsCiAgICAgICAgc2V0OiBmdW5jdGlvbiBzZXQodCkgewogICAgICAgICAgdGhyb3dPbkludmFsaWQgPSB0OwogICAgICAgIH0KICAgICAgfV0pOwoKICAgICAgcmV0dXJuIFNldHRpbmdzOwogICAgfSgpOwoKICAgIHZhciBpbnRsRFRDYWNoZSA9IHt9OwoKICAgIGZ1bmN0aW9uIGdldENhY2hlZERURihsb2NTdHJpbmcsIG9wdHMpIHsKICAgICAgaWYgKG9wdHMgPT09IHZvaWQgMCkgewogICAgICAgIG9wdHMgPSB7fTsKICAgICAgfQoKICAgICAgdmFyIGtleSA9IEpTT04uc3RyaW5naWZ5KFtsb2NTdHJpbmcsIG9wdHNdKTsKICAgICAgdmFyIGR0ZiA9IGludGxEVENhY2hlW2tleV07CgogICAgICBpZiAoIWR0ZikgewogICAgICAgIGR0ZiA9IG5ldyBJbnRsLkRhdGVUaW1lRm9ybWF0KGxvY1N0cmluZywgb3B0cyk7CiAgICAgICAgaW50bERUQ2FjaGVba2V5XSA9IGR0ZjsKICAgICAgfQoKICAgICAgcmV0dXJuIGR0ZjsKICAgIH0KCiAgICB2YXIgaW50bE51bUNhY2hlID0ge307CgogICAgZnVuY3Rpb24gZ2V0Q2FjaGVkSU5GKGxvY1N0cmluZywgb3B0cykgewogICAgICBpZiAob3B0cyA9PT0gdm9pZCAwKSB7CiAgICAgICAgb3B0cyA9IHt9OwogICAgICB9CgogICAgICB2YXIga2V5ID0gSlNPTi5zdHJpbmdpZnkoW2xvY1N0cmluZywgb3B0c10pOwogICAgICB2YXIgaW5mID0gaW50bE51bUNhY2hlW2tleV07CgogICAgICBpZiAoIWluZikgewogICAgICAgIGluZiA9IG5ldyBJbnRsLk51bWJlckZvcm1hdChsb2NTdHJpbmcsIG9wdHMpOwogICAgICAgIGludGxOdW1DYWNoZVtrZXldID0gaW5mOwogICAgICB9CgogICAgICByZXR1cm4gaW5mOwogICAgfQoKICAgIHZhciBpbnRsUmVsQ2FjaGUgPSB7fTsKCiAgICBmdW5jdGlvbiBnZXRDYWNoZWRSVEYobG9jU3RyaW5nLCBvcHRzKSB7CiAgICAgIGlmIChvcHRzID09PSB2b2lkIDApIHsKICAgICAgICBvcHRzID0ge307CiAgICAgIH0KCiAgICAgIHZhciBfb3B0cyA9IG9wdHMsCiAgICAgICAgICBjYWNoZUtleU9wdHMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShfb3B0cywgWyJiYXNlIl0pOyAvLyBleGNsdWRlIGBiYXNlYCBmcm9tIHRoZSBvcHRpb25zCgoKICAgICAgdmFyIGtleSA9IEpTT04uc3RyaW5naWZ5KFtsb2NTdHJpbmcsIGNhY2hlS2V5T3B0c10pOwogICAgICB2YXIgaW5mID0gaW50bFJlbENhY2hlW2tleV07CgogICAgICBpZiAoIWluZikgewogICAgICAgIGluZiA9IG5ldyBJbnRsLlJlbGF0aXZlVGltZUZvcm1hdChsb2NTdHJpbmcsIG9wdHMpOwogICAgICAgIGludGxSZWxDYWNoZVtrZXldID0gaW5mOwogICAgICB9CgogICAgICByZXR1cm4gaW5mOwogICAgfQoKICAgIHZhciBzeXNMb2NhbGVDYWNoZSA9IG51bGw7CgogICAgZnVuY3Rpb24gc3lzdGVtTG9jYWxlKCkgewogICAgICBpZiAoc3lzTG9jYWxlQ2FjaGUpIHsKICAgICAgICByZXR1cm4gc3lzTG9jYWxlQ2FjaGU7CiAgICAgIH0gZWxzZSBpZiAoaGFzSW50bCgpKSB7CiAgICAgICAgdmFyIGNvbXB1dGVkU3lzID0gbmV3IEludGwuRGF0ZVRpbWVGb3JtYXQoKS5yZXNvbHZlZE9wdGlvbnMoKS5sb2NhbGU7IC8vIG5vZGUgc29tZXRpbWVzIGRlZmF1bHRzIHRvICJ1bmQiLiBPdmVycmlkZSB0aGF0IGJlY2F1c2UgdGhhdCBpcyBkdW1iCgogICAgICAgIHN5c0xvY2FsZUNhY2hlID0gIWNvbXB1dGVkU3lzIHx8IGNvbXB1dGVkU3lzID09PSAidW5kIiA/ICJlbi1VUyIgOiBjb21wdXRlZFN5czsKICAgICAgICByZXR1cm4gc3lzTG9jYWxlQ2FjaGU7CiAgICAgIH0gZWxzZSB7CiAgICAgICAgc3lzTG9jYWxlQ2FjaGUgPSAiZW4tVVMiOwogICAgICAgIHJldHVybiBzeXNMb2NhbGVDYWNoZTsKICAgICAgfQogICAgfQoKICAgIGZ1bmN0aW9uIHBhcnNlTG9jYWxlU3RyaW5nKGxvY2FsZVN0cikgewogICAgICAvLyBJIHJlYWxseSB3YW50IHRvIGF2b2lkIHdyaXRpbmcgYSBCQ1AgNDcgcGFyc2VyCiAgICAgIC8vIHNlZSwgZS5nLiBodHRwczovL2dpdGh1Yi5jb20vd29vb3JtL2JjcC00NwogICAgICAvLyBJbnN0ZWFkLCB3ZSdsbCBkbyB0aGlzOgogICAgICAvLyBhKSBpZiB0aGUgc3RyaW5nIGhhcyBubyAtdSBleHRlbnNpb25zLCBqdXN0IGxlYXZlIGl0IGFsb25lCiAgICAgIC8vIGIpIGlmIGl0IGRvZXMsIHVzZSBJbnRsIHRvIHJlc29sdmUgZXZlcnl0aGluZwogICAgICAvLyBjKSBpZiBJbnRsIGZhaWxzLCB0cnkgYWdhaW4gd2l0aG91dCB0aGUgLXUKICAgICAgdmFyIHVJbmRleCA9IGxvY2FsZVN0ci5pbmRleE9mKCItdS0iKTsKCiAgICAgIGlmICh1SW5kZXggPT09IC0xKSB7CiAgICAgICAgcmV0dXJuIFtsb2NhbGVTdHJdOwogICAgICB9IGVsc2UgewogICAgICAgIHZhciBvcHRpb25zOwogICAgICAgIHZhciBzbWFsbGVyID0gbG9jYWxlU3RyLnN1YnN0cmluZygwLCB1SW5kZXgpOwoKICAgICAgICB0cnkgewogICAgICAgICAgb3B0aW9ucyA9IGdldENhY2hlZERURihsb2NhbGVTdHIpLnJlc29sdmVkT3B0aW9ucygpOwogICAgICAgIH0gY2F0Y2ggKGUpIHsKICAgICAgICAgIG9wdGlvbnMgPSBnZXRDYWNoZWREVEYoc21hbGxlcikucmVzb2x2ZWRPcHRpb25zKCk7CiAgICAgICAgfQoKICAgICAgICB2YXIgX29wdGlvbnMgPSBvcHRpb25zLAogICAgICAgICAgICBudW1iZXJpbmdTeXN0ZW0gPSBfb3B0aW9ucy5udW1iZXJpbmdTeXN0ZW0sCiAgICAgICAgICAgIGNhbGVuZGFyID0gX29wdGlvbnMuY2FsZW5kYXI7IC8vIHJldHVybiB0aGUgc21hbGxlciBvbmUgc28gdGhhdCB3ZSBjYW4gYXBwZW5kIHRoZSBjYWxlbmRhciBhbmQgbnVtYmVyaW5nIG92ZXJyaWRlcyB0byBpdAoKICAgICAgICByZXR1cm4gW3NtYWxsZXIsIG51bWJlcmluZ1N5c3RlbSwgY2FsZW5kYXJdOwogICAgICB9CiAgICB9CgogICAgZnVuY3Rpb24gaW50bENvbmZpZ1N0cmluZyhsb2NhbGVTdHIsIG51bWJlcmluZ1N5c3RlbSwgb3V0cHV0Q2FsZW5kYXIpIHsKICAgICAgaWYgKGhhc0ludGwoKSkgewogICAgICAgIGlmIChvdXRwdXRDYWxlbmRhciB8fCBudW1iZXJpbmdTeXN0ZW0pIHsKICAgICAgICAgIGxvY2FsZVN0ciArPSAiLXUiOwoKICAgICAgICAgIGlmIChvdXRwdXRDYWxlbmRhcikgewogICAgICAgICAgICBsb2NhbGVTdHIgKz0gIi1jYS0iICsgb3V0cHV0Q2FsZW5kYXI7CiAgICAgICAgICB9CgogICAgICAgICAgaWYgKG51bWJlcmluZ1N5c3RlbSkgewogICAgICAgICAgICBsb2NhbGVTdHIgKz0gIi1udS0iICsgbnVtYmVyaW5nU3lzdGVtOwogICAgICAgICAgfQoKICAgICAgICAgIHJldHVybiBsb2NhbGVTdHI7CiAgICAgICAgfSBlbHNlIHsKICAgICAgICAgIHJldHVybiBsb2NhbGVTdHI7CiAgICAgICAgfQogICAgICB9IGVsc2UgewogICAgICAgIHJldHVybiBbXTsKICAgICAgfQogICAgfQoKICAgIGZ1bmN0aW9uIG1hcE1vbnRocyhmKSB7CiAgICAgIHZhciBtcyA9IFtdOwoKICAgICAgZm9yICh2YXIgaSA9IDE7IGkgPD0gMTI7IGkrKykgewogICAgICAgIHZhciBkdCA9IERhdGVUaW1lLnV0YygyMDE2LCBpLCAxKTsKICAgICAgICBtcy5wdXNoKGYoZHQpKTsKICAgICAgfQoKICAgICAgcmV0dXJuIG1zOwogICAgfQoKICAgIGZ1bmN0aW9uIG1hcFdlZWtkYXlzKGYpIHsKICAgICAgdmFyIG1zID0gW107CgogICAgICBmb3IgKHZhciBpID0gMTsgaSA8PSA3OyBpKyspIHsKICAgICAgICB2YXIgZHQgPSBEYXRlVGltZS51dGMoMjAxNiwgMTEsIDEzICsgaSk7CiAgICAgICAgbXMucHVzaChmKGR0KSk7CiAgICAgIH0KCiAgICAgIHJldHVybiBtczsKICAgIH0KCiAgICBmdW5jdGlvbiBsaXN0U3R1ZmYobG9jLCBsZW5ndGgsIGRlZmF1bHRPSywgZW5nbGlzaEZuLCBpbnRsRm4pIHsKICAgICAgdmFyIG1vZGUgPSBsb2MubGlzdGluZ01vZGUoZGVmYXVsdE9LKTsKCiAgICAgIGlmIChtb2RlID09PSAiZXJyb3IiKSB7CiAgICAgICAgcmV0dXJuIG51bGw7CiAgICAgIH0gZWxzZSBpZiAobW9kZSA9PT0gImVuIikgewogICAgICAgIHJldHVybiBlbmdsaXNoRm4obGVuZ3RoKTsKICAgICAgfSBlbHNlIHsKICAgICAgICByZXR1cm4gaW50bEZuKGxlbmd0aCk7CiAgICAgIH0KICAgIH0KCiAgICBmdW5jdGlvbiBzdXBwb3J0c0Zhc3ROdW1iZXJzKGxvYykgewogICAgICBpZiAobG9jLm51bWJlcmluZ1N5c3RlbSAmJiBsb2MubnVtYmVyaW5nU3lzdGVtICE9PSAibGF0biIpIHsKICAgICAgICByZXR1cm4gZmFsc2U7CiAgICAgIH0gZWxzZSB7CiAgICAgICAgcmV0dXJuIGxvYy5udW1iZXJpbmdTeXN0ZW0gPT09ICJsYXRuIiB8fCAhbG9jLmxvY2FsZSB8fCBsb2MubG9jYWxlLnN0YXJ0c1dpdGgoImVuIikgfHwgaGFzSW50bCgpICYmIG5ldyBJbnRsLkRhdGVUaW1lRm9ybWF0KGxvYy5pbnRsKS5yZXNvbHZlZE9wdGlvbnMoKS5udW1iZXJpbmdTeXN0ZW0gPT09ICJsYXRuIjsKICAgICAgfQogICAgfQogICAgLyoqCiAgICAgKiBAcHJpdmF0ZQogICAgICovCgoKICAgIHZhciBQb2x5TnVtYmVyRm9ybWF0dGVyID0gLyojX19QVVJFX18qL2Z1bmN0aW9uICgpIHsKICAgICAgZnVuY3Rpb24gUG9seU51bWJlckZvcm1hdHRlcihpbnRsLCBmb3JjZVNpbXBsZSwgb3B0cykgewogICAgICAgIHRoaXMucGFkVG8gPSBvcHRzLnBhZFRvIHx8IDA7CiAgICAgICAgdGhpcy5mbG9vciA9IG9wdHMuZmxvb3IgfHwgZmFsc2U7CgogICAgICAgIGlmICghZm9yY2VTaW1wbGUgJiYgaGFzSW50bCgpKSB7CiAgICAgICAgICB2YXIgaW50bE9wdHMgPSB7CiAgICAgICAgICAgIHVzZUdyb3VwaW5nOiBmYWxzZQogICAgICAgICAgfTsKICAgICAgICAgIGlmIChvcHRzLnBhZFRvID4gMCkgaW50bE9wdHMubWluaW11bUludGVnZXJEaWdpdHMgPSBvcHRzLnBhZFRvOwogICAgICAgICAgdGhpcy5pbmYgPSBnZXRDYWNoZWRJTkYoaW50bCwgaW50bE9wdHMpOwogICAgICAgIH0KICAgICAgfQoKICAgICAgdmFyIF9wcm90byA9IFBvbHlOdW1iZXJGb3JtYXR0ZXIucHJvdG90eXBlOwoKICAgICAgX3Byb3RvLmZvcm1hdCA9IGZ1bmN0aW9uIGZvcm1hdChpKSB7CiAgICAgICAgaWYgKHRoaXMuaW5mKSB7CiAgICAgICAgICB2YXIgZml4ZWQgPSB0aGlzLmZsb29yID8gTWF0aC5mbG9vcihpKSA6IGk7CiAgICAgICAgICByZXR1cm4gdGhpcy5pbmYuZm9ybWF0KGZpeGVkKTsKICAgICAgICB9IGVsc2UgewogICAgICAgICAgLy8gdG8gbWF0Y2ggdGhlIGJyb3dzZXIncyBudW1iZXJmb3JtYXR0ZXIgZGVmYXVsdHMKICAgICAgICAgIHZhciBfZml4ZWQgPSB0aGlzLmZsb29yID8gTWF0aC5mbG9vcihpKSA6IHJvdW5kVG8oaSwgMyk7CgogICAgICAgICAgcmV0dXJuIHBhZFN0YXJ0KF9maXhlZCwgdGhpcy5wYWRUbyk7CiAgICAgICAgfQogICAgICB9OwoKICAgICAgcmV0dXJuIFBvbHlOdW1iZXJGb3JtYXR0ZXI7CiAgICB9KCk7CiAgICAvKioKICAgICAqIEBwcml2YXRlCiAgICAgKi8KCgogICAgdmFyIFBvbHlEYXRlRm9ybWF0dGVyID0gLyojX19QVVJFX18qL2Z1bmN0aW9uICgpIHsKICAgICAgZnVuY3Rpb24gUG9seURhdGVGb3JtYXR0ZXIoZHQsIGludGwsIG9wdHMpIHsKICAgICAgICB0aGlzLm9wdHMgPSBvcHRzOwogICAgICAgIHRoaXMuaGFzSW50bCA9IGhhc0ludGwoKTsKICAgICAgICB2YXIgejsKCiAgICAgICAgaWYgKGR0LnpvbmUudW5pdmVyc2FsICYmIHRoaXMuaGFzSW50bCkgewogICAgICAgICAgLy8gVVRDLTggb3IgRXRjL1VUQy04IGFyZSBub3QgcGFydCBvZiB0emRhdGEsIG9ubHkgRXRjL0dNVCs4IGFuZCB0aGUgbGlrZS4KICAgICAgICAgIC8vIFRoYXQgaXMgd2h5IGZpeGVkLW9mZnNldCBUWiBpcyBzZXQgdG8gdGhhdCB1bmxlc3MgaXQgaXM6CiAgICAgICAgICAvLyAxLiBSZXByZXNlbnRpbmcgb2Zmc2V0IDAgd2hlbiBVVEMgaXMgdXNlZCB0byBtYWludGFpbiBwcmV2aW91cyBiZWhhdmlvciBhbmQgZG9lcyBub3QgYmVjb21lIEdNVC4KICAgICAgICAgIC8vIDIuIFVuc3VwcG9ydGVkIGJ5IHRoZSBicm93c2VyOgogICAgICAgICAgLy8gICAgLSBzb21lIGRvIG5vdCBzdXBwb3J0IEV0Yy8KICAgICAgICAgIC8vICAgIC0gPCBFdGMvR01ULTE0LCA+IEV0Yy9HTVQrMTIsIGFuZCAzMC1taW51dGUgb3IgNDUtbWludXRlIG9mZnNldHMgYXJlIG5vdCBwYXJ0IG9mIHR6ZGF0YQogICAgICAgICAgdmFyIGdtdE9mZnNldCA9IC0xICogKGR0Lm9mZnNldCAvIDYwKTsKICAgICAgICAgIHZhciBvZmZzZXRaID0gZ210T2Zmc2V0ID49IDAgPyAiRXRjL0dNVCsiICsgZ210T2Zmc2V0IDogIkV0Yy9HTVQiICsgZ210T2Zmc2V0OwogICAgICAgICAgdmFyIGlzT2Zmc2V0Wm9uZVN1cHBvcnRlZCA9IElBTkFab25lLmlzVmFsaWRab25lKG9mZnNldFopOwoKICAgICAgICAgIGlmIChkdC5vZmZzZXQgIT09IDAgJiYgaXNPZmZzZXRab25lU3VwcG9ydGVkKSB7CiAgICAgICAgICAgIHogPSBvZmZzZXRaOwogICAgICAgICAgICB0aGlzLmR0ID0gZHQ7CiAgICAgICAgICB9IGVsc2UgewogICAgICAgICAgICAvLyBOb3QgYWxsIGZpeGVkLW9mZnNldCB6b25lcyBsaWtlIEV0Yy8rNDozMCBhcmUgcHJlc2VudCBpbiB0emRhdGEuCiAgICAgICAgICAgIC8vIFNvIHdlIGhhdmUgdG8gbWFrZSBkby4gVHdvIGNhc2VzOgogICAgICAgICAgICAvLyAxLiBUaGUgZm9ybWF0IG9wdGlvbnMgdGVsbCB1cyB0byBzaG93IHRoZSB6b25lLiBXZSBjYW4ndCBkbyB0aGF0LCBzbyB0aGUgYmVzdAogICAgICAgICAgICAvLyB3ZSBjYW4gZG8gaXMgZm9ybWF0IHRoZSBkYXRlIGluIFVUQy4KICAgICAgICAgICAgLy8gMi4gVGhlIGZvcm1hdCBvcHRpb25zIGRvbid0IHRlbGwgdXMgdG8gc2hvdyB0aGUgem9uZS4gVGhlbiB3ZSBjYW4gYWRqdXN0IHRoZW0KICAgICAgICAgICAgLy8gdGhlIHRpbWUgYW5kIHRlbGwgdGhlIGZvcm1hdHRlciB0byBzaG93IGl0IHRvIHVzIGluIFVUQywgc28gdGhhdCB0aGUgdGltZSBpcyByaWdodAogICAgICAgICAgICAvLyBhbmQgdGhlIGJhZCB6b25lIGRvZXNuJ3Qgc2hvdyB1cC4KICAgICAgICAgICAgeiA9ICJVVEMiOwoKICAgICAgICAgICAgaWYgKG9wdHMudGltZVpvbmVOYW1lKSB7CiAgICAgICAgICAgICAgdGhpcy5kdCA9IGR0OwogICAgICAgICAgICB9IGVsc2UgewogICAgICAgICAgICAgIHRoaXMuZHQgPSBkdC5vZmZzZXQgPT09IDAgPyBkdCA6IERhdGVUaW1lLmZyb21NaWxsaXMoZHQudHMgKyBkdC5vZmZzZXQgKiA2MCAqIDEwMDApOwogICAgICAgICAgICB9CiAgICAgICAgICB9CiAgICAgICAgfSBlbHNlIGlmIChkdC56b25lLnR5cGUgPT09ICJsb2NhbCIpIHsKICAgICAgICAgIHRoaXMuZHQgPSBkdDsKICAgICAgICB9IGVsc2UgewogICAgICAgICAgdGhpcy5kdCA9IGR0OwogICAgICAgICAgeiA9IGR0LnpvbmUubmFtZTsKICAgICAgICB9CgogICAgICAgIGlmICh0aGlzLmhhc0ludGwpIHsKICAgICAgICAgIHZhciBpbnRsT3B0cyA9IE9iamVjdC5hc3NpZ24oe30sIHRoaXMub3B0cyk7CgogICAgICAgICAgaWYgKHopIHsKICAgICAgICAgICAgaW50bE9wdHMudGltZVpvbmUgPSB6OwogICAgICAgICAgfQoKICAgICAgICAgIHRoaXMuZHRmID0gZ2V0Q2FjaGVkRFRGKGludGwsIGludGxPcHRzKTsKICAgICAgICB9CiAgICAgIH0KCiAgICAgIHZhciBfcHJvdG8yID0gUG9seURhdGVGb3JtYXR0ZXIucHJvdG90eXBlOwoKICAgICAgX3Byb3RvMi5mb3JtYXQgPSBmdW5jdGlvbiBmb3JtYXQoKSB7CiAgICAgICAgaWYgKHRoaXMuaGFzSW50bCkgewogICAgICAgICAgcmV0dXJuIHRoaXMuZHRmLmZvcm1hdCh0aGlzLmR0LnRvSlNEYXRlKCkpOwogICAgICAgIH0gZWxzZSB7CiAgICAgICAgICB2YXIgdG9rZW5Gb3JtYXQgPSBmb3JtYXRTdHJpbmcodGhpcy5vcHRzKSwKICAgICAgICAgICAgICBsb2MgPSBMb2NhbGUuY3JlYXRlKCJlbi1VUyIpOwogICAgICAgICAgcmV0dXJuIEZvcm1hdHRlci5jcmVhdGUobG9jKS5mb3JtYXREYXRlVGltZUZyb21TdHJpbmcodGhpcy5kdCwgdG9rZW5Gb3JtYXQpOwogICAgICAgIH0KICAgICAgfTsKCiAgICAgIF9wcm90bzIuZm9ybWF0VG9QYXJ0cyA9IGZ1bmN0aW9uIGZvcm1hdFRvUGFydHMoKSB7CiAgICAgICAgaWYgKHRoaXMuaGFzSW50bCAmJiBoYXNGb3JtYXRUb1BhcnRzKCkpIHsKICAgICAgICAgIHJldHVybiB0aGlzLmR0Zi5mb3JtYXRUb1BhcnRzKHRoaXMuZHQudG9KU0RhdGUoKSk7CiAgICAgICAgfSBlbHNlIHsKICAgICAgICAgIC8vIFRoaXMgaXMga2luZCBvZiBhIGNvcCBvdXQuIFdlIGFjdHVhbGx5IGNvdWxkIGRvIHRoaXMgZm9yIEVuZ2xpc2guIEhvd2V2ZXIsIHdlIGNvdWxkbid0IGRvIGl0IGZvciBpbnRsIHN0cmluZ3MKICAgICAgICAgIC8vIGFuZCBJTU8gaXQncyB0b28gd2VpcmQgdG8gaGF2ZSBhbiB1bmNhbm55IHZhbGxleSBsaWtlIHRoYXQKICAgICAgICAgIHJldHVybiBbXTsKICAgICAgICB9CiAgICAgIH07CgogICAgICBfcHJvdG8yLnJlc29sdmVkT3B0aW9ucyA9IGZ1bmN0aW9uIHJlc29sdmVkT3B0aW9ucygpIHsKICAgICAgICBpZiAodGhpcy5oYXNJbnRsKSB7CiAgICAgICAgICByZXR1cm4gdGhpcy5kdGYucmVzb2x2ZWRPcHRpb25zKCk7CiAgICAgICAgfSBlbHNlIHsKICAgICAgICAgIHJldHVybiB7CiAgICAgICAgICAgIGxvY2FsZTogImVuLVVTIiwKICAgICAgICAgICAgbnVtYmVyaW5nU3lzdGVtOiAibGF0biIsCiAgICAgICAgICAgIG91dHB1dENhbGVuZGFyOiAiZ3JlZ29yeSIKICAgICAgICAgIH07CiAgICAgICAgfQogICAgICB9OwoKICAgICAgcmV0dXJuIFBvbHlEYXRlRm9ybWF0dGVyOwogICAgfSgpOwogICAgLyoqCiAgICAgKiBAcHJpdmF0ZQogICAgICovCgoKICAgIHZhciBQb2x5UmVsRm9ybWF0dGVyID0gLyojX19QVVJFX18qL2Z1bmN0aW9uICgpIHsKICAgICAgZnVuY3Rpb24gUG9seVJlbEZvcm1hdHRlcihpbnRsLCBpc0VuZ2xpc2gsIG9wdHMpIHsKICAgICAgICB0aGlzLm9wdHMgPSBPYmplY3QuYXNzaWduKHsKICAgICAgICAgIHN0eWxlOiAibG9uZyIKICAgICAgICB9LCBvcHRzKTsKCiAgICAgICAgaWYgKCFpc0VuZ2xpc2ggJiYgaGFzUmVsYXRpdmUoKSkgewogICAgICAgICAgdGhpcy5ydGYgPSBnZXRDYWNoZWRSVEYoaW50bCwgb3B0cyk7CiAgICAgICAgfQogICAgICB9CgogICAgICB2YXIgX3Byb3RvMyA9IFBvbHlSZWxGb3JtYXR0ZXIucHJvdG90eXBlOwoKICAgICAgX3Byb3RvMy5mb3JtYXQgPSBmdW5jdGlvbiBmb3JtYXQoY291bnQsIHVuaXQpIHsKICAgICAgICBpZiAodGhpcy5ydGYpIHsKICAgICAgICAgIHJldHVybiB0aGlzLnJ0Zi5mb3JtYXQoY291bnQsIHVuaXQpOwogICAgICAgIH0gZWxzZSB7CiAgICAgICAgICByZXR1cm4gZm9ybWF0UmVsYXRpdmVUaW1lKHVuaXQsIGNvdW50LCB0aGlzLm9wdHMubnVtZXJpYywgdGhpcy5vcHRzLnN0eWxlICE9PSAibG9uZyIpOwogICAgICAgIH0KICAgICAgfTsKCiAgICAgIF9wcm90bzMuZm9ybWF0VG9QYXJ0cyA9IGZ1bmN0aW9uIGZvcm1hdFRvUGFydHMoY291bnQsIHVuaXQpIHsKICAgICAgICBpZiAodGhpcy5ydGYpIHsKICAgICAgICAgIHJldHVybiB0aGlzLnJ0Zi5mb3JtYXRUb1BhcnRzKGNvdW50LCB1bml0KTsKICAgICAgICB9IGVsc2UgewogICAgICAgICAgcmV0dXJuIFtdOwogICAgICAgIH0KICAgICAgfTsKCiAgICAgIHJldHVybiBQb2x5UmVsRm9ybWF0dGVyOwogICAgfSgpOwogICAgLyoqCiAgICAgKiBAcHJpdmF0ZQogICAgICovCgoKICAgIHZhciBMb2NhbGUgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKCkgewogICAgICBMb2NhbGUuZnJvbU9wdHMgPSBmdW5jdGlvbiBmcm9tT3B0cyhvcHRzKSB7CiAgICAgICAgcmV0dXJuIExvY2FsZS5jcmVhdGUob3B0cy5sb2NhbGUsIG9wdHMubnVtYmVyaW5nU3lzdGVtLCBvcHRzLm91dHB1dENhbGVuZGFyLCBvcHRzLmRlZmF1bHRUb0VOKTsKICAgICAgfTsKCiAgICAgIExvY2FsZS5jcmVhdGUgPSBmdW5jdGlvbiBjcmVhdGUobG9jYWxlLCBudW1iZXJpbmdTeXN0ZW0sIG91dHB1dENhbGVuZGFyLCBkZWZhdWx0VG9FTikgewogICAgICAgIGlmIChkZWZhdWx0VG9FTiA9PT0gdm9pZCAwKSB7CiAgICAgICAgICBkZWZhdWx0VG9FTiA9IGZhbHNlOwogICAgICAgIH0KCiAgICAgICAgdmFyIHNwZWNpZmllZExvY2FsZSA9IGxvY2FsZSB8fCBTZXR0aW5ncy5kZWZhdWx0TG9jYWxlLAogICAgICAgICAgICAvLyB0aGUgc3lzdGVtIGxvY2FsZSBpcyB1c2VmdWwgZm9yIGh1bWFuIHJlYWRhYmxlIHN0cmluZ3MgYnV0IGFubm95aW5nIGZvciBwYXJzaW5nL2Zvcm1hdHRpbmcga25vd24gZm9ybWF0cwogICAgICAgIGxvY2FsZVIgPSBzcGVjaWZpZWRMb2NhbGUgfHwgKGRlZmF1bHRUb0VOID8gImVuLVVTIiA6IHN5c3RlbUxvY2FsZSgpKSwKICAgICAgICAgICAgbnVtYmVyaW5nU3lzdGVtUiA9IG51bWJlcmluZ1N5c3RlbSB8fCBTZXR0aW5ncy5kZWZhdWx0TnVtYmVyaW5nU3lzdGVtLAogICAgICAgICAgICBvdXRwdXRDYWxlbmRhclIgPSBvdXRwdXRDYWxlbmRhciB8fCBTZXR0aW5ncy5kZWZhdWx0T3V0cHV0Q2FsZW5kYXI7CiAgICAgICAgcmV0dXJuIG5ldyBMb2NhbGUobG9jYWxlUiwgbnVtYmVyaW5nU3lzdGVtUiwgb3V0cHV0Q2FsZW5kYXJSLCBzcGVjaWZpZWRMb2NhbGUpOwogICAgICB9OwoKICAgICAgTG9jYWxlLnJlc2V0Q2FjaGUgPSBmdW5jdGlvbiByZXNldENhY2hlKCkgewogICAgICAgIHN5c0xvY2FsZUNhY2hlID0gbnVsbDsKICAgICAgICBpbnRsRFRDYWNoZSA9IHt9OwogICAgICAgIGludGxOdW1DYWNoZSA9IHt9OwogICAgICAgIGludGxSZWxDYWNoZSA9IHt9OwogICAgICB9OwoKICAgICAgTG9jYWxlLmZyb21PYmplY3QgPSBmdW5jdGlvbiBmcm9tT2JqZWN0KF90ZW1wKSB7CiAgICAgICAgdmFyIF9yZWYgPSBfdGVtcCA9PT0gdm9pZCAwID8ge30gOiBfdGVtcCwKICAgICAgICAgICAgbG9jYWxlID0gX3JlZi5sb2NhbGUsCiAgICAgICAgICAgIG51bWJlcmluZ1N5c3RlbSA9IF9yZWYubnVtYmVyaW5nU3lzdGVtLAogICAgICAgICAgICBvdXRwdXRDYWxlbmRhciA9IF9yZWYub3V0cHV0Q2FsZW5kYXI7CgogICAgICAgIHJldHVybiBMb2NhbGUuY3JlYXRlKGxvY2FsZSwgbnVtYmVyaW5nU3lzdGVtLCBvdXRwdXRDYWxlbmRhcik7CiAgICAgIH07CgogICAgICBmdW5jdGlvbiBMb2NhbGUobG9jYWxlLCBudW1iZXJpbmcsIG91dHB1dENhbGVuZGFyLCBzcGVjaWZpZWRMb2NhbGUpIHsKICAgICAgICB2YXIgX3BhcnNlTG9jYWxlU3RyaW5nID0gcGFyc2VMb2NhbGVTdHJpbmcobG9jYWxlKSwKICAgICAgICAgICAgcGFyc2VkTG9jYWxlID0gX3BhcnNlTG9jYWxlU3RyaW5nWzBdLAogICAgICAgICAgICBwYXJzZWROdW1iZXJpbmdTeXN0ZW0gPSBfcGFyc2VMb2NhbGVTdHJpbmdbMV0sCiAgICAgICAgICAgIHBhcnNlZE91dHB1dENhbGVuZGFyID0gX3BhcnNlTG9jYWxlU3RyaW5nWzJdOwoKICAgICAgICB0aGlzLmxvY2FsZSA9IHBhcnNlZExvY2FsZTsKICAgICAgICB0aGlzLm51bWJlcmluZ1N5c3RlbSA9IG51bWJlcmluZyB8fCBwYXJzZWROdW1iZXJpbmdTeXN0ZW0gfHwgbnVsbDsKICAgICAgICB0aGlzLm91dHB1dENhbGVuZGFyID0gb3V0cHV0Q2FsZW5kYXIgfHwgcGFyc2VkT3V0cHV0Q2FsZW5kYXIgfHwgbnVsbDsKICAgICAgICB0aGlzLmludGwgPSBpbnRsQ29uZmlnU3RyaW5nKHRoaXMubG9jYWxlLCB0aGlzLm51bWJlcmluZ1N5c3RlbSwgdGhpcy5vdXRwdXRDYWxlbmRhcik7CiAgICAgICAgdGhpcy53ZWVrZGF5c0NhY2hlID0gewogICAgICAgICAgZm9ybWF0OiB7fSwKICAgICAgICAgIHN0YW5kYWxvbmU6IHt9CiAgICAgICAgfTsKICAgICAgICB0aGlzLm1vbnRoc0NhY2hlID0gewogICAgICAgICAgZm9ybWF0OiB7fSwKICAgICAgICAgIHN0YW5kYWxvbmU6IHt9CiAgICAgICAgfTsKICAgICAgICB0aGlzLm1lcmlkaWVtQ2FjaGUgPSBudWxsOwogICAgICAgIHRoaXMuZXJhQ2FjaGUgPSB7fTsKICAgICAgICB0aGlzLnNwZWNpZmllZExvY2FsZSA9IHNwZWNpZmllZExvY2FsZTsKICAgICAgICB0aGlzLmZhc3ROdW1iZXJzQ2FjaGVkID0gbnVsbDsKICAgICAgfQoKICAgICAgdmFyIF9wcm90bzQgPSBMb2NhbGUucHJvdG90eXBlOwoKICAgICAgX3Byb3RvNC5saXN0aW5nTW9kZSA9IGZ1bmN0aW9uIGxpc3RpbmdNb2RlKGRlZmF1bHRPSykgewogICAgICAgIGlmIChkZWZhdWx0T0sgPT09IHZvaWQgMCkgewogICAgICAgICAgZGVmYXVsdE9LID0gdHJ1ZTsKICAgICAgICB9CgogICAgICAgIHZhciBpbnRsID0gaGFzSW50bCgpLAogICAgICAgICAgICBoYXNGVFAgPSBpbnRsICYmIGhhc0Zvcm1hdFRvUGFydHMoKSwKICAgICAgICAgICAgaXNBY3R1YWxseUVuID0gdGhpcy5pc0VuZ2xpc2goKSwKICAgICAgICAgICAgaGFzTm9XZWlyZG5lc3MgPSAodGhpcy5udW1iZXJpbmdTeXN0ZW0gPT09IG51bGwgfHwgdGhpcy5udW1iZXJpbmdTeXN0ZW0gPT09ICJsYXRuIikgJiYgKHRoaXMub3V0cHV0Q2FsZW5kYXIgPT09IG51bGwgfHwgdGhpcy5vdXRwdXRDYWxlbmRhciA9PT0gImdyZWdvcnkiKTsKCiAgICAgICAgaWYgKCFoYXNGVFAgJiYgIShpc0FjdHVhbGx5RW4gJiYgaGFzTm9XZWlyZG5lc3MpICYmICFkZWZhdWx0T0spIHsKICAgICAgICAgIHJldHVybiAiZXJyb3IiOwogICAgICAgIH0gZWxzZSBpZiAoIWhhc0ZUUCB8fCBpc0FjdHVhbGx5RW4gJiYgaGFzTm9XZWlyZG5lc3MpIHsKICAgICAgICAgIHJldHVybiAiZW4iOwogICAgICAgIH0gZWxzZSB7CiAgICAgICAgICByZXR1cm4gImludGwiOwogICAgICAgIH0KICAgICAgfTsKCiAgICAgIF9wcm90bzQuY2xvbmUgPSBmdW5jdGlvbiBjbG9uZShhbHRzKSB7CiAgICAgICAgaWYgKCFhbHRzIHx8IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKGFsdHMpLmxlbmd0aCA9PT0gMCkgewogICAgICAgICAgcmV0dXJuIHRoaXM7CiAgICAgICAgfSBlbHNlIHsKICAgICAgICAgIHJldHVybiBMb2NhbGUuY3JlYXRlKGFsdHMubG9jYWxlIHx8IHRoaXMuc3BlY2lmaWVkTG9jYWxlLCBhbHRzLm51bWJlcmluZ1N5c3RlbSB8fCB0aGlzLm51bWJlcmluZ1N5c3RlbSwgYWx0cy5vdXRwdXRDYWxlbmRhciB8fCB0aGlzLm91dHB1dENhbGVuZGFyLCBhbHRzLmRlZmF1bHRUb0VOIHx8IGZhbHNlKTsKICAgICAgICB9CiAgICAgIH07CgogICAgICBfcHJvdG80LnJlZGVmYXVsdFRvRU4gPSBmdW5jdGlvbiByZWRlZmF1bHRUb0VOKGFsdHMpIHsKICAgICAgICBpZiAoYWx0cyA9PT0gdm9pZCAwKSB7CiAgICAgICAgICBhbHRzID0ge307CiAgICAgICAgfQoKICAgICAgICByZXR1cm4gdGhpcy5jbG9uZShPYmplY3QuYXNzaWduKHt9LCBhbHRzLCB7CiAgICAgICAgICBkZWZhdWx0VG9FTjogdHJ1ZQogICAgICAgIH0pKTsKICAgICAgfTsKCiAgICAgIF9wcm90bzQucmVkZWZhdWx0VG9TeXN0ZW0gPSBmdW5jdGlvbiByZWRlZmF1bHRUb1N5c3RlbShhbHRzKSB7CiAgICAgICAgaWYgKGFsdHMgPT09IHZvaWQgMCkgewogICAgICAgICAgYWx0cyA9IHt9OwogICAgICAgIH0KCiAgICAgICAgcmV0dXJuIHRoaXMuY2xvbmUoT2JqZWN0LmFzc2lnbih7fSwgYWx0cywgewogICAgICAgICAgZGVmYXVsdFRvRU46IGZhbHNlCiAgICAgICAgfSkpOwogICAgICB9OwoKICAgICAgX3Byb3RvNC5tb250aHMgPSBmdW5jdGlvbiBtb250aHMkMShsZW5ndGgsIGZvcm1hdCwgZGVmYXVsdE9LKSB7CiAgICAgICAgdmFyIF90aGlzID0gdGhpczsKCiAgICAgICAgaWYgKGZvcm1hdCA9PT0gdm9pZCAwKSB7CiAgICAgICAgICBmb3JtYXQgPSBmYWxzZTsKICAgICAgICB9CgogICAgICAgIGlmIChkZWZhdWx0T0sgPT09IHZvaWQgMCkgewogICAgICAgICAgZGVmYXVsdE9LID0gdHJ1ZTsKICAgICAgICB9CgogICAgICAgIHJldHVybiBsaXN0U3R1ZmYodGhpcywgbGVuZ3RoLCBkZWZhdWx0T0ssIG1vbnRocywgZnVuY3Rpb24gKCkgewogICAgICAgICAgdmFyIGludGwgPSBmb3JtYXQgPyB7CiAgICAgICAgICAgIG1vbnRoOiBsZW5ndGgsCiAgICAgICAgICAgIGRheTogIm51bWVyaWMiCiAgICAgICAgICB9IDogewogICAgICAgICAgICBtb250aDogbGVuZ3RoCiAgICAgICAgICB9LAogICAgICAgICAgICAgIGZvcm1hdFN0ciA9IGZvcm1hdCA/ICJmb3JtYXQiIDogInN0YW5kYWxvbmUiOwoKICAgICAgICAgIGlmICghX3RoaXMubW9udGhzQ2FjaGVbZm9ybWF0U3RyXVtsZW5ndGhdKSB7CiAgICAgICAgICAgIF90aGlzLm1vbnRoc0NhY2hlW2Zvcm1hdFN0cl1bbGVuZ3RoXSA9IG1hcE1vbnRocyhmdW5jdGlvbiAoZHQpIHsKICAgICAgICAgICAgICByZXR1cm4gX3RoaXMuZXh0cmFjdChkdCwgaW50bCwgIm1vbnRoIik7CiAgICAgICAgICAgIH0pOwogICAgICAgICAgfQoKICAgICAgICAgIHJldHVybiBfdGhpcy5tb250aHNDYWNoZVtmb3JtYXRTdHJdW2xlbmd0aF07CiAgICAgICAgfSk7CiAgICAgIH07CgogICAgICBfcHJvdG80LndlZWtkYXlzID0gZnVuY3Rpb24gd2Vla2RheXMkMShsZW5ndGgsIGZvcm1hdCwgZGVmYXVsdE9LKSB7CiAgICAgICAgdmFyIF90aGlzMiA9IHRoaXM7CgogICAgICAgIGlmIChmb3JtYXQgPT09IHZvaWQgMCkgewogICAgICAgICAgZm9ybWF0ID0gZmFsc2U7CiAgICAgICAgfQoKICAgICAgICBpZiAoZGVmYXVsdE9LID09PSB2b2lkIDApIHsKICAgICAgICAgIGRlZmF1bHRPSyA9IHRydWU7CiAgICAgICAgfQoKICAgICAgICByZXR1cm4gbGlzdFN0dWZmKHRoaXMsIGxlbmd0aCwgZGVmYXVsdE9LLCB3ZWVrZGF5cywgZnVuY3Rpb24gKCkgewogICAgICAgICAgdmFyIGludGwgPSBmb3JtYXQgPyB7CiAgICAgICAgICAgIHdlZWtkYXk6IGxlbmd0aCwKICAgICAgICAgICAgeWVhcjogIm51bWVyaWMiLAogICAgICAgICAgICBtb250aDogImxvbmciLAogICAgICAgICAgICBkYXk6ICJudW1lcmljIgogICAgICAgICAgfSA6IHsKICAgICAgICAgICAgd2Vla2RheTogbGVuZ3RoCiAgICAgICAgICB9LAogICAgICAgICAgICAgIGZvcm1hdFN0ciA9IGZvcm1hdCA/ICJmb3JtYXQiIDogInN0YW5kYWxvbmUiOwoKICAgICAgICAgIGlmICghX3RoaXMyLndlZWtkYXlzQ2FjaGVbZm9ybWF0U3RyXVtsZW5ndGhdKSB7CiAgICAgICAgICAgIF90aGlzMi53ZWVrZGF5c0NhY2hlW2Zvcm1hdFN0cl1bbGVuZ3RoXSA9IG1hcFdlZWtkYXlzKGZ1bmN0aW9uIChkdCkgewogICAgICAgICAgICAgIHJldHVybiBfdGhpczIuZXh0cmFjdChkdCwgaW50bCwgIndlZWtkYXkiKTsKICAgICAgICAgICAgfSk7CiAgICAgICAgICB9CgogICAgICAgICAgcmV0dXJuIF90aGlzMi53ZWVrZGF5c0NhY2hlW2Zvcm1hdFN0cl1bbGVuZ3RoXTsKICAgICAgICB9KTsKICAgICAgfTsKCiAgICAgIF9wcm90bzQubWVyaWRpZW1zID0gZnVuY3Rpb24gbWVyaWRpZW1zJDEoZGVmYXVsdE9LKSB7CiAgICAgICAgdmFyIF90aGlzMyA9IHRoaXM7CgogICAgICAgIGlmIChkZWZhdWx0T0sgPT09IHZvaWQgMCkgewogICAgICAgICAgZGVmYXVsdE9LID0gdHJ1ZTsKICAgICAgICB9CgogICAgICAgIHJldHVybiBsaXN0U3R1ZmYodGhpcywgdW5kZWZpbmVkLCBkZWZhdWx0T0ssIGZ1bmN0aW9uICgpIHsKICAgICAgICAgIHJldHVybiBtZXJpZGllbXM7CiAgICAgICAgfSwgZnVuY3Rpb24gKCkgewogICAgICAgICAgLy8gSW4gdGhlb3J5IHRoZXJlIGNvdWxkIGJlIGFyaWJpdHJhcnkgZGF5IHBlcmlvZHMuIFdlJ3JlIGdvbm5hIGFzc3VtZSB0aGVyZSBhcmUgZXhhY3RseSB0d28KICAgICAgICAgIC8vIGZvciBBTSBhbmQgUE0uIFRoaXMgaXMgcHJvYmFibHkgd3JvbmcsIGJ1dCBpdCdzIG1ha2VzIHBhcnNpbmcgd2F5IGVhc2llci4KICAgICAgICAgIGlmICghX3RoaXMzLm1lcmlkaWVtQ2FjaGUpIHsKICAgICAgICAgICAgdmFyIGludGwgPSB7CiAgICAgICAgICAgICAgaG91cjogIm51bWVyaWMiLAogICAgICAgICAgICAgIGhvdXIxMjogdHJ1ZQogICAgICAgICAgICB9OwogICAgICAgICAgICBfdGhpczMubWVyaWRpZW1DYWNoZSA9IFtEYXRlVGltZS51dGMoMjAxNiwgMTEsIDEzLCA5KSwgRGF0ZVRpbWUudXRjKDIwMTYsIDExLCAxMywgMTkpXS5tYXAoZnVuY3Rpb24gKGR0KSB7CiAgICAgICAgICAgICAgcmV0dXJuIF90aGlzMy5leHRyYWN0KGR0LCBpbnRsLCAiZGF5cGVyaW9kIik7CiAgICAgICAgICAgIH0pOwogICAgICAgICAgfQoKICAgICAgICAgIHJldHVybiBfdGhpczMubWVyaWRpZW1DYWNoZTsKICAgICAgICB9KTsKICAgICAgfTsKCiAgICAgIF9wcm90bzQuZXJhcyA9IGZ1bmN0aW9uIGVyYXMkMShsZW5ndGgsIGRlZmF1bHRPSykgewogICAgICAgIHZhciBfdGhpczQgPSB0aGlzOwoKICAgICAgICBpZiAoZGVmYXVsdE9LID09PSB2b2lkIDApIHsKICAgICAgICAgIGRlZmF1bHRPSyA9IHRydWU7CiAgICAgICAgfQoKICAgICAgICByZXR1cm4gbGlzdFN0dWZmKHRoaXMsIGxlbmd0aCwgZGVmYXVsdE9LLCBlcmFzLCBmdW5jdGlvbiAoKSB7CiAgICAgICAgICB2YXIgaW50bCA9IHsKICAgICAgICAgICAgZXJhOiBsZW5ndGgKICAgICAgICAgIH07IC8vIFRoaXMgaXMgcHJvYmxlbWF0aWMuIERpZmZlcmVudCBjYWxlbmRhcnMgYXJlIGdvaW5nIHRvIGRlZmluZSBlcmFzIHRvdGFsbHkgZGlmZmVyZW50bHkuIFdoYXQgSSBuZWVkIGlzIHRoZSBtaW5pbXVtIHNldCBvZiBkYXRlcwogICAgICAgICAgLy8gdG8gZGVmaW5pdGVseSBlbnVtZXJhdGUgdGhlbS4KCiAgICAgICAgICBpZiAoIV90aGlzNC5lcmFDYWNoZVtsZW5ndGhdKSB7CiAgICAgICAgICAgIF90aGlzNC5lcmFDYWNoZVtsZW5ndGhdID0gW0RhdGVUaW1lLnV0YygtNDAsIDEsIDEpLCBEYXRlVGltZS51dGMoMjAxNywgMSwgMSldLm1hcChmdW5jdGlvbiAoZHQpIHsKICAgICAgICAgICAgICByZXR1cm4gX3RoaXM0LmV4dHJhY3QoZHQsIGludGwsICJlcmEiKTsKICAgICAgICAgICAgfSk7CiAgICAgICAgICB9CgogICAgICAgICAgcmV0dXJuIF90aGlzNC5lcmFDYWNoZVtsZW5ndGhdOwogICAgICAgIH0pOwogICAgICB9OwoKICAgICAgX3Byb3RvNC5leHRyYWN0ID0gZnVuY3Rpb24gZXh0cmFjdChkdCwgaW50bE9wdHMsIGZpZWxkKSB7CiAgICAgICAgdmFyIGRmID0gdGhpcy5kdEZvcm1hdHRlcihkdCwgaW50bE9wdHMpLAogICAgICAgICAgICByZXN1bHRzID0gZGYuZm9ybWF0VG9QYXJ0cygpLAogICAgICAgICAgICBtYXRjaGluZyA9IHJlc3VsdHMuZmluZChmdW5jdGlvbiAobSkgewogICAgICAgICAgcmV0dXJuIG0udHlwZS50b0xvd2VyQ2FzZSgpID09PSBmaWVsZDsKICAgICAgICB9KTsKICAgICAgICByZXR1cm4gbWF0Y2hpbmcgPyBtYXRjaGluZy52YWx1ZSA6IG51bGw7CiAgICAgIH07CgogICAgICBfcHJvdG80Lm51bWJlckZvcm1hdHRlciA9IGZ1bmN0aW9uIG51bWJlckZvcm1hdHRlcihvcHRzKSB7CiAgICAgICAgaWYgKG9wdHMgPT09IHZvaWQgMCkgewogICAgICAgICAgb3B0cyA9IHt9OwogICAgICAgIH0KCiAgICAgICAgLy8gdGhpcyBmb3JjZXNpbXBsZSBvcHRpb24gaXMgbmV2ZXIgdXNlZCAodGhlIG9ubHkgY2FsbGVyIHNob3J0LWNpcmN1aXRzIG9uIGl0LCBidXQgaXQgc2VlbXMgc2FmZXIgdG8gbGVhdmUpCiAgICAgICAgLy8gKGluIGNvbnRyYXN0LCB0aGUgcmVzdCBvZiB0aGUgY29uZGl0aW9uIGlzIHVzZWQgaGVhdmlseSkKICAgICAgICByZXR1cm4gbmV3IFBvbHlOdW1iZXJGb3JtYXR0ZXIodGhpcy5pbnRsLCBvcHRzLmZvcmNlU2ltcGxlIHx8IHRoaXMuZmFzdE51bWJlcnMsIG9wdHMpOwogICAgICB9OwoKICAgICAgX3Byb3RvNC5kdEZvcm1hdHRlciA9IGZ1bmN0aW9uIGR0Rm9ybWF0dGVyKGR0LCBpbnRsT3B0cykgewogICAgICAgIGlmIChpbnRsT3B0cyA9PT0gdm9pZCAwKSB7CiAgICAgICAgICBpbnRsT3B0cyA9IHt9OwogICAgICAgIH0KCiAgICAgICAgcmV0dXJuIG5ldyBQb2x5RGF0ZUZvcm1hdHRlcihkdCwgdGhpcy5pbnRsLCBpbnRsT3B0cyk7CiAgICAgIH07CgogICAgICBfcHJvdG80LnJlbEZvcm1hdHRlciA9IGZ1bmN0aW9uIHJlbEZvcm1hdHRlcihvcHRzKSB7CiAgICAgICAgaWYgKG9wdHMgPT09IHZvaWQgMCkgewogICAgICAgICAgb3B0cyA9IHt9OwogICAgICAgIH0KCiAgICAgICAgcmV0dXJuIG5ldyBQb2x5UmVsRm9ybWF0dGVyKHRoaXMuaW50bCwgdGhpcy5pc0VuZ2xpc2goKSwgb3B0cyk7CiAgICAgIH07CgogICAgICBfcHJvdG80LmlzRW5nbGlzaCA9IGZ1bmN0aW9uIGlzRW5nbGlzaCgpIHsKICAgICAgICByZXR1cm4gdGhpcy5sb2NhbGUgPT09ICJlbiIgfHwgdGhpcy5sb2NhbGUudG9Mb3dlckNhc2UoKSA9PT0gImVuLXVzIiB8fCBoYXNJbnRsKCkgJiYgbmV3IEludGwuRGF0ZVRpbWVGb3JtYXQodGhpcy5pbnRsKS5yZXNvbHZlZE9wdGlvbnMoKS5sb2NhbGUuc3RhcnRzV2l0aCgiZW4tdXMiKTsKICAgICAgfTsKCiAgICAgIF9wcm90bzQuZXF1YWxzID0gZnVuY3Rpb24gZXF1YWxzKG90aGVyKSB7CiAgICAgICAgcmV0dXJuIHRoaXMubG9jYWxlID09PSBvdGhlci5sb2NhbGUgJiYgdGhpcy5udW1iZXJpbmdTeXN0ZW0gPT09IG90aGVyLm51bWJlcmluZ1N5c3RlbSAmJiB0aGlzLm91dHB1dENhbGVuZGFyID09PSBvdGhlci5vdXRwdXRDYWxlbmRhcjsKICAgICAgfTsKCiAgICAgIF9jcmVhdGVDbGFzcyhMb2NhbGUsIFt7CiAgICAgICAga2V5OiAiZmFzdE51bWJlcnMiLAogICAgICAgIGdldDogZnVuY3Rpb24gZ2V0KCkgewogICAgICAgICAgaWYgKHRoaXMuZmFzdE51bWJlcnNDYWNoZWQgPT0gbnVsbCkgewogICAgICAgICAgICB0aGlzLmZhc3ROdW1iZXJzQ2FjaGVkID0gc3VwcG9ydHNGYXN0TnVtYmVycyh0aGlzKTsKICAgICAgICAgIH0KCiAgICAgICAgICByZXR1cm4gdGhpcy5mYXN0TnVtYmVyc0NhY2hlZDsKICAgICAgICB9CiAgICAgIH1dKTsKCiAgICAgIHJldHVybiBMb2NhbGU7CiAgICB9KCk7CgogICAgLyoKICAgICAqIFRoaXMgZmlsZSBoYW5kbGVzIHBhcnNpbmcgZm9yIHdlbGwtc3BlY2lmaWVkIGZvcm1hdHMuIEhlcmUncyBob3cgaXQgd29ya3M6CiAgICAgKiBUd28gdGhpbmdzIGdvIGludG8gcGFyc2luZzogYSByZWdleCB0byBtYXRjaCB3aXRoIGFuZCBhbiBleHRyYWN0b3IgdG8gdGFrZSBhcGFydCB0aGUgZ3JvdXBzIGluIHRoZSBtYXRjaC4KICAgICAqIEFuIGV4dHJhY3RvciBpcyBqdXN0IGEgZnVuY3Rpb24gdGhhdCB0YWtlcyBhIHJlZ2V4IG1hdGNoIGFycmF5IGFuZCByZXR1cm5zIGEgeyB5ZWFyOiAuLi4sIG1vbnRoOiAuLi4gfSBvYmplY3QKICAgICAqIHBhcnNlKCkgZG9lcyB0aGUgd29yayBvZiBleGVjdXRpbmcgdGhlIHJlZ2V4IGFuZCBhcHBseWluZyB0aGUgZXh0cmFjdG9yLiBJdCB0YWtlcyBtdWx0aXBsZSByZWdleC9leHRyYWN0b3IgcGFpcnMgdG8gdHJ5IGluIHNlcXVlbmNlLgogICAgICogRXh0cmFjdG9ycyBjYW4gdGFrZSBhICJjdXJzb3IiIHJlcHJlc2VudGluZyB0aGUgb2Zmc2V0IGluIHRoZSBtYXRjaCB0byBsb29rIGF0LiBUaGlzIG1ha2VzIGl0IGVhc3kgdG8gY29tYmluZSBleHRyYWN0b3JzLgogICAgICogY29tYmluZUV4dHJhY3RvcnMoKSBkb2VzIHRoZSB3b3JrIG9mIGNvbWJpbmluZyB0aGVtLCBrZWVwaW5nIHRyYWNrIG9mIHRoZSBjdXJzb3IgdGhyb3VnaCBtdWx0aXBsZSBleHRyYWN0aW9ucy4KICAgICAqIFNvbWUgZXh0cmFjdGlvbnMgYXJlIHN1cGVyIGR1bWIgYW5kIHNpbXBsZVBhcnNlIGFuZCBmcm9tU3RyaW5ncyBoZWxwIERSWSB0aGVtLgogICAgICovCgogICAgZnVuY3Rpb24gY29tYmluZVJlZ2V4ZXMoKSB7CiAgICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCByZWdleGVzID0gbmV3IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykgewogICAgICAgIHJlZ2V4ZXNbX2tleV0gPSBhcmd1bWVudHNbX2tleV07CiAgICAgIH0KCiAgICAgIHZhciBmdWxsID0gcmVnZXhlcy5yZWR1Y2UoZnVuY3Rpb24gKGYsIHIpIHsKICAgICAgICByZXR1cm4gZiArIHIuc291cmNlOwogICAgICB9LCAiIik7CiAgICAgIHJldHVybiBSZWdFeHAoIl4iICsgZnVsbCArICIkIik7CiAgICB9CgogICAgZnVuY3Rpb24gY29tYmluZUV4dHJhY3RvcnMoKSB7CiAgICAgIGZvciAodmFyIF9sZW4yID0gYXJndW1lbnRzLmxlbmd0aCwgZXh0cmFjdG9ycyA9IG5ldyBBcnJheShfbGVuMiksIF9rZXkyID0gMDsgX2tleTIgPCBfbGVuMjsgX2tleTIrKykgewogICAgICAgIGV4dHJhY3RvcnNbX2tleTJdID0gYXJndW1lbnRzW19rZXkyXTsKICAgICAgfQoKICAgICAgcmV0dXJuIGZ1bmN0aW9uIChtKSB7CiAgICAgICAgcmV0dXJuIGV4dHJhY3RvcnMucmVkdWNlKGZ1bmN0aW9uIChfcmVmLCBleCkgewogICAgICAgICAgdmFyIG1lcmdlZFZhbHMgPSBfcmVmWzBdLAogICAgICAgICAgICAgIG1lcmdlZFpvbmUgPSBfcmVmWzFdLAogICAgICAgICAgICAgIGN1cnNvciA9IF9yZWZbMl07CgogICAgICAgICAgdmFyIF9leCA9IGV4KG0sIGN1cnNvciksCiAgICAgICAgICAgICAgdmFsID0gX2V4WzBdLAogICAgICAgICAgICAgIHpvbmUgPSBfZXhbMV0sCiAgICAgICAgICAgICAgbmV4dCA9IF9leFsyXTsKCiAgICAgICAgICByZXR1cm4gW09iamVjdC5hc3NpZ24obWVyZ2VkVmFscywgdmFsKSwgbWVyZ2VkWm9uZSB8fCB6b25lLCBuZXh0XTsKICAgICAgICB9LCBbe30sIG51bGwsIDFdKS5zbGljZSgwLCAyKTsKICAgICAgfTsKICAgIH0KCiAgICBmdW5jdGlvbiBwYXJzZShzKSB7CiAgICAgIGlmIChzID09IG51bGwpIHsKICAgICAgICByZXR1cm4gW251bGwsIG51bGxdOwogICAgICB9CgogICAgICBmb3IgKHZhciBfbGVuMyA9IGFyZ3VtZW50cy5sZW5ndGgsIHBhdHRlcm5zID0gbmV3IEFycmF5KF9sZW4zID4gMSA/IF9sZW4zIC0gMSA6IDApLCBfa2V5MyA9IDE7IF9rZXkzIDwgX2xlbjM7IF9rZXkzKyspIHsKICAgICAgICBwYXR0ZXJuc1tfa2V5MyAtIDFdID0gYXJndW1lbnRzW19rZXkzXTsKICAgICAgfQoKICAgICAgZm9yICh2YXIgX2kgPSAwLCBfcGF0dGVybnMgPSBwYXR0ZXJuczsgX2kgPCBfcGF0dGVybnMubGVuZ3RoOyBfaSsrKSB7CiAgICAgICAgdmFyIF9wYXR0ZXJucyRfaSA9IF9wYXR0ZXJuc1tfaV0sCiAgICAgICAgICAgIHJlZ2V4ID0gX3BhdHRlcm5zJF9pWzBdLAogICAgICAgICAgICBleHRyYWN0b3IgPSBfcGF0dGVybnMkX2lbMV07CiAgICAgICAgdmFyIG0gPSByZWdleC5leGVjKHMpOwoKICAgICAgICBpZiAobSkgewogICAgICAgICAgcmV0dXJuIGV4dHJhY3RvcihtKTsKICAgICAgICB9CiAgICAgIH0KCiAgICAgIHJldHVybiBbbnVsbCwgbnVsbF07CiAgICB9CgogICAgZnVuY3Rpb24gc2ltcGxlUGFyc2UoKSB7CiAgICAgIGZvciAodmFyIF9sZW40ID0gYXJndW1lbnRzLmxlbmd0aCwga2V5cyA9IG5ldyBBcnJheShfbGVuNCksIF9rZXk0ID0gMDsgX2tleTQgPCBfbGVuNDsgX2tleTQrKykgewogICAgICAgIGtleXNbX2tleTRdID0gYXJndW1lbnRzW19rZXk0XTsKICAgICAgfQoKICAgICAgcmV0dXJuIGZ1bmN0aW9uIChtYXRjaCwgY3Vyc29yKSB7CiAgICAgICAgdmFyIHJldCA9IHt9OwogICAgICAgIHZhciBpOwoKICAgICAgICBmb3IgKGkgPSAwOyBpIDwga2V5cy5sZW5ndGg7IGkrKykgewogICAgICAgICAgcmV0W2tleXNbaV1dID0gcGFyc2VJbnRlZ2VyKG1hdGNoW2N1cnNvciArIGldKTsKICAgICAgICB9CgogICAgICAgIHJldHVybiBbcmV0LCBudWxsLCBjdXJzb3IgKyBpXTsKICAgICAgfTsKICAgIH0gLy8gSVNPIGFuZCBTUUwgcGFyc2luZwoKCiAgICB2YXIgb2Zmc2V0UmVnZXggPSAvKD86KFopfChbKy1dXGRcZCkoPzo6PyhcZFxkKSk/KS8sCiAgICAgICAgaXNvVGltZUJhc2VSZWdleCA9IC8oXGRcZCkoPzo6PyhcZFxkKSg/Ojo/KFxkXGQpKD86Wy4sXShcZHsxLDMwfSkpPyk/KT8vLAogICAgICAgIGlzb1RpbWVSZWdleCA9IFJlZ0V4cCgiIiArIGlzb1RpbWVCYXNlUmVnZXguc291cmNlICsgb2Zmc2V0UmVnZXguc291cmNlICsgIj8iKSwKICAgICAgICBpc29UaW1lRXh0ZW5zaW9uUmVnZXggPSBSZWdFeHAoIig/OlQiICsgaXNvVGltZVJlZ2V4LnNvdXJjZSArICIpPyIpLAogICAgICAgIGlzb1ltZFJlZ2V4ID0gLyhbKy1dXGR7Nn18XGR7NH0pKD86LT8oXGRcZCkoPzotPyhcZFxkKSk/KT8vLAogICAgICAgIGlzb1dlZWtSZWdleCA9IC8oXGR7NH0pLT9XKFxkXGQpKD86LT8oXGQpKT8vLAogICAgICAgIGlzb09yZGluYWxSZWdleCA9IC8oXGR7NH0pLT8oXGR7M30pLywKICAgICAgICBleHRyYWN0SVNPV2Vla0RhdGEgPSBzaW1wbGVQYXJzZSgid2Vla1llYXIiLCAid2Vla051bWJlciIsICJ3ZWVrRGF5IiksCiAgICAgICAgZXh0cmFjdElTT09yZGluYWxEYXRhID0gc2ltcGxlUGFyc2UoInllYXIiLCAib3JkaW5hbCIpLAogICAgICAgIHNxbFltZFJlZ2V4ID0gLyhcZHs0fSktKFxkXGQpLShcZFxkKS8sCiAgICAgICAgLy8gZHVtYmVkLWRvd24gdmVyc2lvbiBvZiB0aGUgSVNPIG9uZQogICAgc3FsVGltZVJlZ2V4ID0gUmVnRXhwKGlzb1RpbWVCYXNlUmVnZXguc291cmNlICsgIiA/KD86IiArIG9mZnNldFJlZ2V4LnNvdXJjZSArICJ8KCIgKyBpYW5hUmVnZXguc291cmNlICsgIikpPyIpLAogICAgICAgIHNxbFRpbWVFeHRlbnNpb25SZWdleCA9IFJlZ0V4cCgiKD86ICIgKyBzcWxUaW1lUmVnZXguc291cmNlICsgIik/Iik7CgogICAgZnVuY3Rpb24gaW50KG1hdGNoLCBwb3MsIGZhbGxiYWNrKSB7CiAgICAgIHZhciBtID0gbWF0Y2hbcG9zXTsKICAgICAgcmV0dXJuIGlzVW5kZWZpbmVkKG0pID8gZmFsbGJhY2sgOiBwYXJzZUludGVnZXIobSk7CiAgICB9CgogICAgZnVuY3Rpb24gZXh0cmFjdElTT1ltZChtYXRjaCwgY3Vyc29yKSB7CiAgICAgIHZhciBpdGVtID0gewogICAgICAgIHllYXI6IGludChtYXRjaCwgY3Vyc29yKSwKICAgICAgICBtb250aDogaW50KG1hdGNoLCBjdXJzb3IgKyAxLCAxKSwKICAgICAgICBkYXk6IGludChtYXRjaCwgY3Vyc29yICsgMiwgMSkKICAgICAgfTsKICAgICAgcmV0dXJuIFtpdGVtLCBudWxsLCBjdXJzb3IgKyAzXTsKICAgIH0KCiAgICBmdW5jdGlvbiBleHRyYWN0SVNPVGltZShtYXRjaCwgY3Vyc29yKSB7CiAgICAgIHZhciBpdGVtID0gewogICAgICAgIGhvdXJzOiBpbnQobWF0Y2gsIGN1cnNvciwgMCksCiAgICAgICAgbWludXRlczogaW50KG1hdGNoLCBjdXJzb3IgKyAxLCAwKSwKICAgICAgICBzZWNvbmRzOiBpbnQobWF0Y2gsIGN1cnNvciArIDIsIDApLAogICAgICAgIG1pbGxpc2Vjb25kczogcGFyc2VNaWxsaXMobWF0Y2hbY3Vyc29yICsgM10pCiAgICAgIH07CiAgICAgIHJldHVybiBbaXRlbSwgbnVsbCwgY3Vyc29yICsgNF07CiAgICB9CgogICAgZnVuY3Rpb24gZXh0cmFjdElTT09mZnNldChtYXRjaCwgY3Vyc29yKSB7CiAgICAgIHZhciBsb2NhbCA9ICFtYXRjaFtjdXJzb3JdICYmICFtYXRjaFtjdXJzb3IgKyAxXSwKICAgICAgICAgIGZ1bGxPZmZzZXQgPSBzaWduZWRPZmZzZXQobWF0Y2hbY3Vyc29yICsgMV0sIG1hdGNoW2N1cnNvciArIDJdKSwKICAgICAgICAgIHpvbmUgPSBsb2NhbCA/IG51bGwgOiBGaXhlZE9mZnNldFpvbmUuaW5zdGFuY2UoZnVsbE9mZnNldCk7CiAgICAgIHJldHVybiBbe30sIHpvbmUsIGN1cnNvciArIDNdOwogICAgfQoKICAgIGZ1bmN0aW9uIGV4dHJhY3RJQU5BWm9uZShtYXRjaCwgY3Vyc29yKSB7CiAgICAgIHZhciB6b25lID0gbWF0Y2hbY3Vyc29yXSA/IElBTkFab25lLmNyZWF0ZShtYXRjaFtjdXJzb3JdKSA6IG51bGw7CiAgICAgIHJldHVybiBbe30sIHpvbmUsIGN1cnNvciArIDFdOwogICAgfSAvLyBJU08gdGltZSBwYXJzaW5nCgoKICAgIHZhciBpc29UaW1lT25seSA9IFJlZ0V4cCgiXlQ/IiArIGlzb1RpbWVCYXNlUmVnZXguc291cmNlICsgIiQiKTsgLy8gSVNPIGR1cmF0aW9uIHBhcnNpbmcKCiAgICB2YXIgaXNvRHVyYXRpb24gPSAvXi0/UCg/Oig/OigtP1xkezEsOX0pWSk/KD86KC0/XGR7MSw5fSlNKT8oPzooLT9cZHsxLDl9KVcpPyg/OigtP1xkezEsOX0pRCk/KD86VCg/OigtP1xkezEsOX0pSCk/KD86KC0/XGR7MSw5fSlNKT8oPzooLT9cZHsxLDIwfSkoPzpbLixdKC0/XGR7MSw5fSkpP1MpPyk/KSQvOwoKICAgIGZ1bmN0aW9uIGV4dHJhY3RJU09EdXJhdGlvbihtYXRjaCkgewogICAgICB2YXIgcyA9IG1hdGNoWzBdLAogICAgICAgICAgeWVhclN0ciA9IG1hdGNoWzFdLAogICAgICAgICAgbW9udGhTdHIgPSBtYXRjaFsyXSwKICAgICAgICAgIHdlZWtTdHIgPSBtYXRjaFszXSwKICAgICAgICAgIGRheVN0ciA9IG1hdGNoWzRdLAogICAgICAgICAgaG91clN0ciA9IG1hdGNoWzVdLAogICAgICAgICAgbWludXRlU3RyID0gbWF0Y2hbNl0sCiAgICAgICAgICBzZWNvbmRTdHIgPSBtYXRjaFs3XSwKICAgICAgICAgIG1pbGxpc2Vjb25kc1N0ciA9IG1hdGNoWzhdOwogICAgICB2YXIgaGFzTmVnYXRpdmVQcmVmaXggPSBzWzBdID09PSAiLSI7CiAgICAgIHZhciBuZWdhdGl2ZVNlY29uZHMgPSBzZWNvbmRTdHIgJiYgc2Vjb25kU3RyWzBdID09PSAiLSI7CgogICAgICB2YXIgbWF5YmVOZWdhdGUgPSBmdW5jdGlvbiBtYXliZU5lZ2F0ZShudW0sIGZvcmNlKSB7CiAgICAgICAgaWYgKGZvcmNlID09PSB2b2lkIDApIHsKICAgICAgICAgIGZvcmNlID0gZmFsc2U7CiAgICAgICAgfQoKICAgICAgICByZXR1cm4gbnVtICE9PSB1bmRlZmluZWQgJiYgKGZvcmNlIHx8IG51bSAmJiBoYXNOZWdhdGl2ZVByZWZpeCkgPyAtbnVtIDogbnVtOwogICAgICB9OwoKICAgICAgcmV0dXJuIFt7CiAgICAgICAgeWVhcnM6IG1heWJlTmVnYXRlKHBhcnNlSW50ZWdlcih5ZWFyU3RyKSksCiAgICAgICAgbW9udGhzOiBtYXliZU5lZ2F0ZShwYXJzZUludGVnZXIobW9udGhTdHIpKSwKICAgICAgICB3ZWVrczogbWF5YmVOZWdhdGUocGFyc2VJbnRlZ2VyKHdlZWtTdHIpKSwKICAgICAgICBkYXlzOiBtYXliZU5lZ2F0ZShwYXJzZUludGVnZXIoZGF5U3RyKSksCiAgICAgICAgaG91cnM6IG1heWJlTmVnYXRlKHBhcnNlSW50ZWdlcihob3VyU3RyKSksCiAgICAgICAgbWludXRlczogbWF5YmVOZWdhdGUocGFyc2VJbnRlZ2VyKG1pbnV0ZVN0cikpLAogICAgICAgIHNlY29uZHM6IG1heWJlTmVnYXRlKHBhcnNlSW50ZWdlcihzZWNvbmRTdHIpLCBzZWNvbmRTdHIgPT09ICItMCIpLAogICAgICAgIG1pbGxpc2Vjb25kczogbWF5YmVOZWdhdGUocGFyc2VNaWxsaXMobWlsbGlzZWNvbmRzU3RyKSwgbmVnYXRpdmVTZWNvbmRzKQogICAgICB9XTsKICAgIH0gLy8gVGhlc2UgYXJlIGEgbGl0dGxlIGJyYWluZGVhZC4gRURUICpzaG91bGQqIHRlbGwgdXMgdGhhdCB3ZSdyZSBpbiwgc2F5LCBBbWVyaWNhL05ld19Zb3JrCiAgICAvLyBhbmQgbm90IGp1c3QgdGhhdCB3ZSdyZSBpbiAtMjQwICpyaWdodCBub3cqLiBCdXQgc2luY2UgSSBkb24ndCB0aGluayB0aGVzZSBhcmUgdXNlZCB0aGF0IG9mdGVuCiAgICAvLyBJJ20ganVzdCBnb2luZyB0byBpZ25vcmUgdGhhdAoKCiAgICB2YXIgb2JzT2Zmc2V0cyA9IHsKICAgICAgR01UOiAwLAogICAgICBFRFQ6IC00ICogNjAsCiAgICAgIEVTVDogLTUgKiA2MCwKICAgICAgQ0RUOiAtNSAqIDYwLAogICAgICBDU1Q6IC02ICogNjAsCiAgICAgIE1EVDogLTYgKiA2MCwKICAgICAgTVNUOiAtNyAqIDYwLAogICAgICBQRFQ6IC03ICogNjAsCiAgICAgIFBTVDogLTggKiA2MAogICAgfTsKCiAgICBmdW5jdGlvbiBmcm9tU3RyaW5ncyh3ZWVrZGF5U3RyLCB5ZWFyU3RyLCBtb250aFN0ciwgZGF5U3RyLCBob3VyU3RyLCBtaW51dGVTdHIsIHNlY29uZFN0cikgewogICAgICB2YXIgcmVzdWx0ID0gewogICAgICAgIHllYXI6IHllYXJTdHIubGVuZ3RoID09PSAyID8gdW50cnVuY2F0ZVllYXIocGFyc2VJbnRlZ2VyKHllYXJTdHIpKSA6IHBhcnNlSW50ZWdlcih5ZWFyU3RyKSwKICAgICAgICBtb250aDogbW9udGhzU2hvcnQuaW5kZXhPZihtb250aFN0cikgKyAxLAogICAgICAgIGRheTogcGFyc2VJbnRlZ2VyKGRheVN0ciksCiAgICAgICAgaG91cjogcGFyc2VJbnRlZ2VyKGhvdXJTdHIpLAogICAgICAgIG1pbnV0ZTogcGFyc2VJbnRlZ2VyKG1pbnV0ZVN0cikKICAgICAgfTsKICAgICAgaWYgKHNlY29uZFN0cikgcmVzdWx0LnNlY29uZCA9IHBhcnNlSW50ZWdlcihzZWNvbmRTdHIpOwoKICAgICAgaWYgKHdlZWtkYXlTdHIpIHsKICAgICAgICByZXN1bHQud2Vla2RheSA9IHdlZWtkYXlTdHIubGVuZ3RoID4gMyA/IHdlZWtkYXlzTG9uZy5pbmRleE9mKHdlZWtkYXlTdHIpICsgMSA6IHdlZWtkYXlzU2hvcnQuaW5kZXhPZih3ZWVrZGF5U3RyKSArIDE7CiAgICAgIH0KCiAgICAgIHJldHVybiByZXN1bHQ7CiAgICB9IC8vIFJGQyAyODIyLzUzMjIKCgogICAgdmFyIHJmYzI4MjIgPSAvXig/OihNb258VHVlfFdlZHxUaHV8RnJpfFNhdHxTdW4pLFxzKT8oXGR7MSwyfSlccyhKYW58RmVifE1hcnxBcHJ8TWF5fEp1bnxKdWx8QXVnfFNlcHxPY3R8Tm92fERlYylccyhcZHsyLDR9KVxzKFxkXGQpOihcZFxkKSg/OjooXGRcZCkpP1xzKD86KFVUfEdNVHxbRUNNUF1bU0RdVCl8KFtael0pfCg/OihbKy1dXGRcZCkoXGRcZCkpKSQvOwoKICAgIGZ1bmN0aW9uIGV4dHJhY3RSRkMyODIyKG1hdGNoKSB7CiAgICAgIHZhciB3ZWVrZGF5U3RyID0gbWF0Y2hbMV0sCiAgICAgICAgICBkYXlTdHIgPSBtYXRjaFsyXSwKICAgICAgICAgIG1vbnRoU3RyID0gbWF0Y2hbM10sCiAgICAgICAgICB5ZWFyU3RyID0gbWF0Y2hbNF0sCiAgICAgICAgICBob3VyU3RyID0gbWF0Y2hbNV0sCiAgICAgICAgICBtaW51dGVTdHIgPSBtYXRjaFs2XSwKICAgICAgICAgIHNlY29uZFN0ciA9IG1hdGNoWzddLAogICAgICAgICAgb2JzT2Zmc2V0ID0gbWF0Y2hbOF0sCiAgICAgICAgICBtaWxPZmZzZXQgPSBtYXRjaFs5XSwKICAgICAgICAgIG9mZkhvdXJTdHIgPSBtYXRjaFsxMF0sCiAgICAgICAgICBvZmZNaW51dGVTdHIgPSBtYXRjaFsxMV0sCiAgICAgICAgICByZXN1bHQgPSBmcm9tU3RyaW5ncyh3ZWVrZGF5U3RyLCB5ZWFyU3RyLCBtb250aFN0ciwgZGF5U3RyLCBob3VyU3RyLCBtaW51dGVTdHIsIHNlY29uZFN0cik7CiAgICAgIHZhciBvZmZzZXQ7CgogICAgICBpZiAob2JzT2Zmc2V0KSB7CiAgICAgICAgb2Zmc2V0ID0gb2JzT2Zmc2V0c1tvYnNPZmZzZXRdOwogICAgICB9IGVsc2UgaWYgKG1pbE9mZnNldCkgewogICAgICAgIG9mZnNldCA9IDA7CiAgICAgIH0gZWxzZSB7CiAgICAgICAgb2Zmc2V0ID0gc2lnbmVkT2Zmc2V0KG9mZkhvdXJTdHIsIG9mZk1pbnV0ZVN0cik7CiAgICAgIH0KCiAgICAgIHJldHVybiBbcmVzdWx0LCBuZXcgRml4ZWRPZmZzZXRab25lKG9mZnNldCldOwogICAgfQoKICAgIGZ1bmN0aW9uIHByZXByb2Nlc3NSRkMyODIyKHMpIHsKICAgICAgLy8gUmVtb3ZlIGNvbW1lbnRzIGFuZCBmb2xkaW5nIHdoaXRlc3BhY2UgYW5kIHJlcGxhY2UgbXVsdGlwbGUtc3BhY2VzIHdpdGggYSBzaW5nbGUgc3BhY2UKICAgICAgcmV0dXJuIHMucmVwbGFjZSgvXChbXildKlwpfFtcblx0XS9nLCAiICIpLnJlcGxhY2UoLyhcc1xzKykvZywgIiAiKS50cmltKCk7CiAgICB9IC8vIGh0dHAgZGF0ZQoKCiAgICB2YXIgcmZjMTEyMyA9IC9eKE1vbnxUdWV8V2VkfFRodXxGcml8U2F0fFN1biksIChcZFxkKSAoSmFufEZlYnxNYXJ8QXByfE1heXxKdW58SnVsfEF1Z3xTZXB8T2N0fE5vdnxEZWMpIChcZHs0fSkgKFxkXGQpOihcZFxkKTooXGRcZCkgR01UJC8sCiAgICAgICAgcmZjODUwID0gL14oTW9uZGF5fFR1ZXNkYXl8V2Vkc2RheXxUaHVyc2RheXxGcmlkYXl8U2F0dXJkYXl8U3VuZGF5KSwgKFxkXGQpLShKYW58RmVifE1hcnxBcHJ8TWF5fEp1bnxKdWx8QXVnfFNlcHxPY3R8Tm92fERlYyktKFxkXGQpIChcZFxkKTooXGRcZCk6KFxkXGQpIEdNVCQvLAogICAgICAgIGFzY2lpID0gL14oTW9ufFR1ZXxXZWR8VGh1fEZyaXxTYXR8U3VuKSAoSmFufEZlYnxNYXJ8QXByfE1heXxKdW58SnVsfEF1Z3xTZXB8T2N0fE5vdnxEZWMpICggXGR8XGRcZCkgKFxkXGQpOihcZFxkKTooXGRcZCkgKFxkezR9KSQvOwoKICAgIGZ1bmN0aW9uIGV4dHJhY3RSRkMxMTIzT3I4NTAobWF0Y2gpIHsKICAgICAgdmFyIHdlZWtkYXlTdHIgPSBtYXRjaFsxXSwKICAgICAgICAgIGRheVN0ciA9IG1hdGNoWzJdLAogICAgICAgICAgbW9udGhTdHIgPSBtYXRjaFszXSwKICAgICAgICAgIHllYXJTdHIgPSBtYXRjaFs0XSwKICAgICAgICAgIGhvdXJTdHIgPSBtYXRjaFs1XSwKICAgICAgICAgIG1pbnV0ZVN0ciA9IG1hdGNoWzZdLAogICAgICAgICAgc2Vjb25kU3RyID0gbWF0Y2hbN10sCiAgICAgICAgICByZXN1bHQgPSBmcm9tU3RyaW5ncyh3ZWVrZGF5U3RyLCB5ZWFyU3RyLCBtb250aFN0ciwgZGF5U3RyLCBob3VyU3RyLCBtaW51dGVTdHIsIHNlY29uZFN0cik7CiAgICAgIHJldHVybiBbcmVzdWx0LCBGaXhlZE9mZnNldFpvbmUudXRjSW5zdGFuY2VdOwogICAgfQoKICAgIGZ1bmN0aW9uIGV4dHJhY3RBU0NJSShtYXRjaCkgewogICAgICB2YXIgd2Vla2RheVN0ciA9IG1hdGNoWzFdLAogICAgICAgICAgbW9udGhTdHIgPSBtYXRjaFsyXSwKICAgICAgICAgIGRheVN0ciA9IG1hdGNoWzNdLAogICAgICAgICAgaG91clN0ciA9IG1hdGNoWzRdLAogICAgICAgICAgbWludXRlU3RyID0gbWF0Y2hbNV0sCiAgICAgICAgICBzZWNvbmRTdHIgPSBtYXRjaFs2XSwKICAgICAgICAgIHllYXJTdHIgPSBtYXRjaFs3XSwKICAgICAgICAgIHJlc3VsdCA9IGZyb21TdHJpbmdzKHdlZWtkYXlTdHIsIHllYXJTdHIsIG1vbnRoU3RyLCBkYXlTdHIsIGhvdXJTdHIsIG1pbnV0ZVN0ciwgc2Vjb25kU3RyKTsKICAgICAgcmV0dXJuIFtyZXN1bHQsIEZpeGVkT2Zmc2V0Wm9uZS51dGNJbnN0YW5jZV07CiAgICB9CgogICAgdmFyIGlzb1ltZFdpdGhUaW1lRXh0ZW5zaW9uUmVnZXggPSBjb21iaW5lUmVnZXhlcyhpc29ZbWRSZWdleCwgaXNvVGltZUV4dGVuc2lvblJlZ2V4KTsKICAgIHZhciBpc29XZWVrV2l0aFRpbWVFeHRlbnNpb25SZWdleCA9IGNvbWJpbmVSZWdleGVzKGlzb1dlZWtSZWdleCwgaXNvVGltZUV4dGVuc2lvblJlZ2V4KTsKICAgIHZhciBpc29PcmRpbmFsV2l0aFRpbWVFeHRlbnNpb25SZWdleCA9IGNvbWJpbmVSZWdleGVzKGlzb09yZGluYWxSZWdleCwgaXNvVGltZUV4dGVuc2lvblJlZ2V4KTsKICAgIHZhciBpc29UaW1lQ29tYmluZWRSZWdleCA9IGNvbWJpbmVSZWdleGVzKGlzb1RpbWVSZWdleCk7CiAgICB2YXIgZXh0cmFjdElTT1ltZFRpbWVBbmRPZmZzZXQgPSBjb21iaW5lRXh0cmFjdG9ycyhleHRyYWN0SVNPWW1kLCBleHRyYWN0SVNPVGltZSwgZXh0cmFjdElTT09mZnNldCk7CiAgICB2YXIgZXh0cmFjdElTT1dlZWtUaW1lQW5kT2Zmc2V0ID0gY29tYmluZUV4dHJhY3RvcnMoZXh0cmFjdElTT1dlZWtEYXRhLCBleHRyYWN0SVNPVGltZSwgZXh0cmFjdElTT09mZnNldCk7CiAgICB2YXIgZXh0cmFjdElTT09yZGluYWxEYXRhQW5kVGltZSA9IGNvbWJpbmVFeHRyYWN0b3JzKGV4dHJhY3RJU09PcmRpbmFsRGF0YSwgZXh0cmFjdElTT1RpbWUpOwogICAgdmFyIGV4dHJhY3RJU09UaW1lQW5kT2Zmc2V0ID0gY29tYmluZUV4dHJhY3RvcnMoZXh0cmFjdElTT1RpbWUsIGV4dHJhY3RJU09PZmZzZXQpOwogICAgLyoqCiAgICAgKiBAcHJpdmF0ZQogICAgICovCgogICAgZnVuY3Rpb24gcGFyc2VJU09EYXRlKHMpIHsKICAgICAgcmV0dXJuIHBhcnNlKHMsIFtpc29ZbWRXaXRoVGltZUV4dGVuc2lvblJlZ2V4LCBleHRyYWN0SVNPWW1kVGltZUFuZE9mZnNldF0sIFtpc29XZWVrV2l0aFRpbWVFeHRlbnNpb25SZWdleCwgZXh0cmFjdElTT1dlZWtUaW1lQW5kT2Zmc2V0XSwgW2lzb09yZGluYWxXaXRoVGltZUV4dGVuc2lvblJlZ2V4LCBleHRyYWN0SVNPT3JkaW5hbERhdGFBbmRUaW1lXSwgW2lzb1RpbWVDb21iaW5lZFJlZ2V4LCBleHRyYWN0SVNPVGltZUFuZE9mZnNldF0pOwogICAgfQogICAgZnVuY3Rpb24gcGFyc2VSRkMyODIyRGF0ZShzKSB7CiAgICAgIHJldHVybiBwYXJzZShwcmVwcm9jZXNzUkZDMjgyMihzKSwgW3JmYzI4MjIsIGV4dHJhY3RSRkMyODIyXSk7CiAgICB9CiAgICBmdW5jdGlvbiBwYXJzZUhUVFBEYXRlKHMpIHsKICAgICAgcmV0dXJuIHBhcnNlKHMsIFtyZmMxMTIzLCBleHRyYWN0UkZDMTEyM09yODUwXSwgW3JmYzg1MCwgZXh0cmFjdFJGQzExMjNPcjg1MF0sIFthc2NpaSwgZXh0cmFjdEFTQ0lJXSk7CiAgICB9CiAgICBmdW5jdGlvbiBwYXJzZUlTT0R1cmF0aW9uKHMpIHsKICAgICAgcmV0dXJuIHBhcnNlKHMsIFtpc29EdXJhdGlvbiwgZXh0cmFjdElTT0R1cmF0aW9uXSk7CiAgICB9CiAgICB2YXIgZXh0cmFjdElTT1RpbWVPbmx5ID0gY29tYmluZUV4dHJhY3RvcnMoZXh0cmFjdElTT1RpbWUpOwogICAgZnVuY3Rpb24gcGFyc2VJU09UaW1lT25seShzKSB7CiAgICAgIHJldHVybiBwYXJzZShzLCBbaXNvVGltZU9ubHksIGV4dHJhY3RJU09UaW1lT25seV0pOwogICAgfQogICAgdmFyIHNxbFltZFdpdGhUaW1lRXh0ZW5zaW9uUmVnZXggPSBjb21iaW5lUmVnZXhlcyhzcWxZbWRSZWdleCwgc3FsVGltZUV4dGVuc2lvblJlZ2V4KTsKICAgIHZhciBzcWxUaW1lQ29tYmluZWRSZWdleCA9IGNvbWJpbmVSZWdleGVzKHNxbFRpbWVSZWdleCk7CiAgICB2YXIgZXh0cmFjdElTT1ltZFRpbWVPZmZzZXRBbmRJQU5BWm9uZSA9IGNvbWJpbmVFeHRyYWN0b3JzKGV4dHJhY3RJU09ZbWQsIGV4dHJhY3RJU09UaW1lLCBleHRyYWN0SVNPT2Zmc2V0LCBleHRyYWN0SUFOQVpvbmUpOwogICAgdmFyIGV4dHJhY3RJU09UaW1lT2Zmc2V0QW5kSUFOQVpvbmUgPSBjb21iaW5lRXh0cmFjdG9ycyhleHRyYWN0SVNPVGltZSwgZXh0cmFjdElTT09mZnNldCwgZXh0cmFjdElBTkFab25lKTsKICAgIGZ1bmN0aW9uIHBhcnNlU1FMKHMpIHsKICAgICAgcmV0dXJuIHBhcnNlKHMsIFtzcWxZbWRXaXRoVGltZUV4dGVuc2lvblJlZ2V4LCBleHRyYWN0SVNPWW1kVGltZU9mZnNldEFuZElBTkFab25lXSwgW3NxbFRpbWVDb21iaW5lZFJlZ2V4LCBleHRyYWN0SVNPVGltZU9mZnNldEFuZElBTkFab25lXSk7CiAgICB9CgogICAgdmFyIElOVkFMSUQgPSAiSW52YWxpZCBEdXJhdGlvbiI7IC8vIHVuaXQgY29udmVyc2lvbiBjb25zdGFudHMKCiAgICB2YXIgbG93T3JkZXJNYXRyaXggPSB7CiAgICAgIHdlZWtzOiB7CiAgICAgICAgZGF5czogNywKICAgICAgICBob3VyczogNyAqIDI0LAogICAgICAgIG1pbnV0ZXM6IDcgKiAyNCAqIDYwLAogICAgICAgIHNlY29uZHM6IDcgKiAyNCAqIDYwICogNjAsCiAgICAgICAgbWlsbGlzZWNvbmRzOiA3ICogMjQgKiA2MCAqIDYwICogMTAwMAogICAgICB9LAogICAgICBkYXlzOiB7CiAgICAgICAgaG91cnM6IDI0LAogICAgICAgIG1pbnV0ZXM6IDI0ICogNjAsCiAgICAgICAgc2Vjb25kczogMjQgKiA2MCAqIDYwLAogICAgICAgIG1pbGxpc2Vjb25kczogMjQgKiA2MCAqIDYwICogMTAwMAogICAgICB9LAogICAgICBob3VyczogewogICAgICAgIG1pbnV0ZXM6IDYwLAogICAgICAgIHNlY29uZHM6IDYwICogNjAsCiAgICAgICAgbWlsbGlzZWNvbmRzOiA2MCAqIDYwICogMTAwMAogICAgICB9LAogICAgICBtaW51dGVzOiB7CiAgICAgICAgc2Vjb25kczogNjAsCiAgICAgICAgbWlsbGlzZWNvbmRzOiA2MCAqIDEwMDAKICAgICAgfSwKICAgICAgc2Vjb25kczogewogICAgICAgIG1pbGxpc2Vjb25kczogMTAwMAogICAgICB9CiAgICB9LAogICAgICAgIGNhc3VhbE1hdHJpeCA9IE9iamVjdC5hc3NpZ24oewogICAgICB5ZWFyczogewogICAgICAgIHF1YXJ0ZXJzOiA0LAogICAgICAgIG1vbnRoczogMTIsCiAgICAgICAgd2Vla3M6IDUyLAogICAgICAgIGRheXM6IDM2NSwKICAgICAgICBob3VyczogMzY1ICogMjQsCiAgICAgICAgbWludXRlczogMzY1ICogMjQgKiA2MCwKICAgICAgICBzZWNvbmRzOiAzNjUgKiAyNCAqIDYwICogNjAsCiAgICAgICAgbWlsbGlzZWNvbmRzOiAzNjUgKiAyNCAqIDYwICogNjAgKiAxMDAwCiAgICAgIH0sCiAgICAgIHF1YXJ0ZXJzOiB7CiAgICAgICAgbW9udGhzOiAzLAogICAgICAgIHdlZWtzOiAxMywKICAgICAgICBkYXlzOiA5MSwKICAgICAgICBob3VyczogOTEgKiAyNCwKICAgICAgICBtaW51dGVzOiA5MSAqIDI0ICogNjAsCiAgICAgICAgc2Vjb25kczogOTEgKiAyNCAqIDYwICogNjAsCiAgICAgICAgbWlsbGlzZWNvbmRzOiA5MSAqIDI0ICogNjAgKiA2MCAqIDEwMDAKICAgICAgfSwKICAgICAgbW9udGhzOiB7CiAgICAgICAgd2Vla3M6IDQsCiAgICAgICAgZGF5czogMzAsCiAgICAgICAgaG91cnM6IDMwICogMjQsCiAgICAgICAgbWludXRlczogMzAgKiAyNCAqIDYwLAogICAgICAgIHNlY29uZHM6IDMwICogMjQgKiA2MCAqIDYwLAogICAgICAgIG1pbGxpc2Vjb25kczogMzAgKiAyNCAqIDYwICogNjAgKiAxMDAwCiAgICAgIH0KICAgIH0sIGxvd09yZGVyTWF0cml4KSwKICAgICAgICBkYXlzSW5ZZWFyQWNjdXJhdGUgPSAxNDYwOTcuMCAvIDQwMCwKICAgICAgICBkYXlzSW5Nb250aEFjY3VyYXRlID0gMTQ2MDk3LjAgLyA0ODAwLAogICAgICAgIGFjY3VyYXRlTWF0cml4ID0gT2JqZWN0LmFzc2lnbih7CiAgICAgIHllYXJzOiB7CiAgICAgICAgcXVhcnRlcnM6IDQsCiAgICAgICAgbW9udGhzOiAxMiwKICAgICAgICB3ZWVrczogZGF5c0luWWVhckFjY3VyYXRlIC8gNywKICAgICAgICBkYXlzOiBkYXlzSW5ZZWFyQWNjdXJhdGUsCiAgICAgICAgaG91cnM6IGRheXNJblllYXJBY2N1cmF0ZSAqIDI0LAogICAgICAgIG1pbnV0ZXM6IGRheXNJblllYXJBY2N1cmF0ZSAqIDI0ICogNjAsCiAgICAgICAgc2Vjb25kczogZGF5c0luWWVhckFjY3VyYXRlICogMjQgKiA2MCAqIDYwLAogICAgICAgIG1pbGxpc2Vjb25kczogZGF5c0luWWVhckFjY3VyYXRlICogMjQgKiA2MCAqIDYwICogMTAwMAogICAgICB9LAogICAgICBxdWFydGVyczogewogICAgICAgIG1vbnRoczogMywKICAgICAgICB3ZWVrczogZGF5c0luWWVhckFjY3VyYXRlIC8gMjgsCiAgICAgICAgZGF5czogZGF5c0luWWVhckFjY3VyYXRlIC8gNCwKICAgICAgICBob3VyczogZGF5c0luWWVhckFjY3VyYXRlICogMjQgLyA0LAogICAgICAgIG1pbnV0ZXM6IGRheXNJblllYXJBY2N1cmF0ZSAqIDI0ICogNjAgLyA0LAogICAgICAgIHNlY29uZHM6IGRheXNJblllYXJBY2N1cmF0ZSAqIDI0ICogNjAgKiA2MCAvIDQsCiAgICAgICAgbWlsbGlzZWNvbmRzOiBkYXlzSW5ZZWFyQWNjdXJhdGUgKiAyNCAqIDYwICogNjAgKiAxMDAwIC8gNAogICAgICB9LAogICAgICBtb250aHM6IHsKICAgICAgICB3ZWVrczogZGF5c0luTW9udGhBY2N1cmF0ZSAvIDcsCiAgICAgICAgZGF5czogZGF5c0luTW9udGhBY2N1cmF0ZSwKICAgICAgICBob3VyczogZGF5c0luTW9udGhBY2N1cmF0ZSAqIDI0LAogICAgICAgIG1pbnV0ZXM6IGRheXNJbk1vbnRoQWNjdXJhdGUgKiAyNCAqIDYwLAogICAgICAgIHNlY29uZHM6IGRheXNJbk1vbnRoQWNjdXJhdGUgKiAyNCAqIDYwICogNjAsCiAgICAgICAgbWlsbGlzZWNvbmRzOiBkYXlzSW5Nb250aEFjY3VyYXRlICogMjQgKiA2MCAqIDYwICogMTAwMAogICAgICB9CiAgICB9LCBsb3dPcmRlck1hdHJpeCk7IC8vIHVuaXRzIG9yZGVyZWQgYnkgc2l6ZQoKICAgIHZhciBvcmRlcmVkVW5pdHMgPSBbInllYXJzIiwgInF1YXJ0ZXJzIiwgIm1vbnRocyIsICJ3ZWVrcyIsICJkYXlzIiwgImhvdXJzIiwgIm1pbnV0ZXMiLCAic2Vjb25kcyIsICJtaWxsaXNlY29uZHMiXTsKICAgIHZhciByZXZlcnNlVW5pdHMgPSBvcmRlcmVkVW5pdHMuc2xpY2UoMCkucmV2ZXJzZSgpOyAvLyBjbG9uZSByZWFsbHkgbWVhbnMgImNyZWF0ZSBhbm90aGVyIGluc3RhbmNlIGp1c3QgbGlrZSB0aGlzIG9uZSwgYnV0IHdpdGggdGhlc2UgY2hhbmdlcyIKCiAgICBmdW5jdGlvbiBjbG9uZShkdXIsIGFsdHMsIGNsZWFyKSB7CiAgICAgIGlmIChjbGVhciA9PT0gdm9pZCAwKSB7CiAgICAgICAgY2xlYXIgPSBmYWxzZTsKICAgICAgfQoKICAgICAgLy8gZGVlcCBtZXJnZSBmb3IgdmFscwogICAgICB2YXIgY29uZiA9IHsKICAgICAgICB2YWx1ZXM6IGNsZWFyID8gYWx0cy52YWx1ZXMgOiBPYmplY3QuYXNzaWduKHt9LCBkdXIudmFsdWVzLCBhbHRzLnZhbHVlcyB8fCB7fSksCiAgICAgICAgbG9jOiBkdXIubG9jLmNsb25lKGFsdHMubG9jKSwKICAgICAgICBjb252ZXJzaW9uQWNjdXJhY3k6IGFsdHMuY29udmVyc2lvbkFjY3VyYWN5IHx8IGR1ci5jb252ZXJzaW9uQWNjdXJhY3kKICAgICAgfTsKICAgICAgcmV0dXJuIG5ldyBEdXJhdGlvbihjb25mKTsKICAgIH0KCiAgICBmdW5jdGlvbiBhbnRpVHJ1bmMobikgewogICAgICByZXR1cm4gbiA8IDAgPyBNYXRoLmZsb29yKG4pIDogTWF0aC5jZWlsKG4pOwogICAgfSAvLyBOQjogbXV0YXRlcyBwYXJhbWV0ZXJzCgoKICAgIGZ1bmN0aW9uIGNvbnZlcnQobWF0cml4LCBmcm9tTWFwLCBmcm9tVW5pdCwgdG9NYXAsIHRvVW5pdCkgewogICAgICB2YXIgY29udiA9IG1hdHJpeFt0b1VuaXRdW2Zyb21Vbml0XSwKICAgICAgICAgIHJhdyA9IGZyb21NYXBbZnJvbVVuaXRdIC8gY29udiwKICAgICAgICAgIHNhbWVTaWduID0gTWF0aC5zaWduKHJhdykgPT09IE1hdGguc2lnbih0b01hcFt0b1VuaXRdKSwKICAgICAgICAgIC8vIG9rLCBzbyB0aGlzIGlzIHdpbGQsIGJ1dCBzZWUgdGhlIG1hdHJpeCBpbiB0aGUgdGVzdHMKICAgICAgYWRkZWQgPSAhc2FtZVNpZ24gJiYgdG9NYXBbdG9Vbml0XSAhPT0gMCAmJiBNYXRoLmFicyhyYXcpIDw9IDEgPyBhbnRpVHJ1bmMocmF3KSA6IE1hdGgudHJ1bmMocmF3KTsKICAgICAgdG9NYXBbdG9Vbml0XSArPSBhZGRlZDsKICAgICAgZnJvbU1hcFtmcm9tVW5pdF0gLT0gYWRkZWQgKiBjb252OwogICAgfSAvLyBOQjogbXV0YXRlcyBwYXJhbWV0ZXJzCgoKICAgIGZ1bmN0aW9uIG5vcm1hbGl6ZVZhbHVlcyhtYXRyaXgsIHZhbHMpIHsKICAgICAgcmV2ZXJzZVVuaXRzLnJlZHVjZShmdW5jdGlvbiAocHJldmlvdXMsIGN1cnJlbnQpIHsKICAgICAgICBpZiAoIWlzVW5kZWZpbmVkKHZhbHNbY3VycmVudF0pKSB7CiAgICAgICAgICBpZiAocHJldmlvdXMpIHsKICAgICAgICAgICAgY29udmVydChtYXRyaXgsIHZhbHMsIHByZXZpb3VzLCB2YWxzLCBjdXJyZW50KTsKICAgICAgICAgIH0KCiAgICAgICAgICByZXR1cm4gY3VycmVudDsKICAgICAgICB9IGVsc2UgewogICAgICAgICAgcmV0dXJuIHByZXZpb3VzOwogICAgICAgIH0KICAgICAgfSwgbnVsbCk7CiAgICB9CiAgICAvKioKICAgICAqIEEgRHVyYXRpb24gb2JqZWN0IHJlcHJlc2VudHMgYSBwZXJpb2Qgb2YgdGltZSwgbGlrZSAiMiBtb250aHMiIG9yICIxIGRheSwgMSBob3VyIi4gQ29uY2VwdHVhbGx5LCBpdCdzIGp1c3QgYSBtYXAgb2YgdW5pdHMgdG8gdGhlaXIgcXVhbnRpdGllcywgYWNjb21wYW5pZWQgYnkgc29tZSBhZGRpdGlvbmFsIGNvbmZpZ3VyYXRpb24gYW5kIG1ldGhvZHMgZm9yIGNyZWF0aW5nLCBwYXJzaW5nLCBpbnRlcnJvZ2F0aW5nLCB0cmFuc2Zvcm1pbmcsIGFuZCBmb3JtYXR0aW5nIHRoZW0uIFRoZXkgY2FuIGJlIHVzZWQgb24gdGhlaXIgb3duIG9yIGluIGNvbmp1bmN0aW9uIHdpdGggb3RoZXIgTHV4b24gdHlwZXM7IGZvciBleGFtcGxlLCB5b3UgY2FuIHVzZSB7QGxpbmsgRGF0ZVRpbWUucGx1c30gdG8gYWRkIGEgRHVyYXRpb24gb2JqZWN0IHRvIGEgRGF0ZVRpbWUsIHByb2R1Y2luZyBhbm90aGVyIERhdGVUaW1lLgogICAgICoKICAgICAqIEhlcmUgaXMgYSBicmllZiBvdmVydmlldyBvZiBjb21tb25seSB1c2VkIG1ldGhvZHMgYW5kIGdldHRlcnMgaW4gRHVyYXRpb246CiAgICAgKgogICAgICogKiAqKkNyZWF0aW9uKiogVG8gY3JlYXRlIGEgRHVyYXRpb24sIHVzZSB7QGxpbmsgRHVyYXRpb24uZnJvbU1pbGxpc30sIHtAbGluayBEdXJhdGlvbi5mcm9tT2JqZWN0fSwgb3Ige0BsaW5rIER1cmF0aW9uLmZyb21JU099LgogICAgICogKiAqKlVuaXQgdmFsdWVzKiogU2VlIHRoZSB7QGxpbmsgRHVyYXRpb24ueWVhcnN9LCB7QGxpbmsgRHVyYXRpb24ubW9udGhzfSwge0BsaW5rIER1cmF0aW9uLndlZWtzfSwge0BsaW5rIER1cmF0aW9uLmRheXN9LCB7QGxpbmsgRHVyYXRpb24uaG91cnN9LCB7QGxpbmsgRHVyYXRpb24ubWludXRlc30sIHtAbGluayBEdXJhdGlvbi5zZWNvbmRzfSwge0BsaW5rIER1cmF0aW9uLm1pbGxpc2Vjb25kc30gYWNjZXNzb3JzLgogICAgICogKiAqKkNvbmZpZ3VyYXRpb24qKiBTZWUgIHtAbGluayBEdXJhdGlvbi5sb2NhbGV9IGFuZCB7QGxpbmsgRHVyYXRpb24ubnVtYmVyaW5nU3lzdGVtfSBhY2Nlc3NvcnMuCiAgICAgKiAqICoqVHJhbnNmb3JtYXRpb24qKiBUbyBjcmVhdGUgbmV3IER1cmF0aW9ucyBvdXQgb2Ygb2xkIG9uZXMgdXNlIHtAbGluayBEdXJhdGlvbi5wbHVzfSwge0BsaW5rIER1cmF0aW9uLm1pbnVzfSwge0BsaW5rIER1cmF0aW9uLm5vcm1hbGl6ZX0sIHtAbGluayBEdXJhdGlvbi5zZXR9LCB7QGxpbmsgRHVyYXRpb24ucmVjb25maWd1cmV9LCB7QGxpbmsgRHVyYXRpb24uc2hpZnRUb30sIGFuZCB7QGxpbmsgRHVyYXRpb24ubmVnYXRlfS4KICAgICAqICogKipPdXRwdXQqKiBUbyBjb252ZXJ0IHRoZSBEdXJhdGlvbiBpbnRvIG90aGVyIHJlcHJlc2VudGF0aW9ucywgc2VlIHtAbGluayBEdXJhdGlvbi5hc30sIHtAbGluayBEdXJhdGlvbi50b0lTT30sIHtAbGluayBEdXJhdGlvbi50b0Zvcm1hdH0sIGFuZCB7QGxpbmsgRHVyYXRpb24udG9KU09OfQogICAgICoKICAgICAqIFRoZXJlJ3MgYXJlIG1vcmUgbWV0aG9kcyBkb2N1bWVudGVkIGJlbG93LiBJbiBhZGRpdGlvbiwgZm9yIG1vcmUgaW5mb3JtYXRpb24gb24gc3VidGxlciB0b3BpY3MgbGlrZSBpbnRlcm5hdGlvbmFsaXphdGlvbiBhbmQgdmFsaWRpdHksIHNlZSB0aGUgZXh0ZXJuYWwgZG9jdW1lbnRhdGlvbi4KICAgICAqLwoKCiAgICB2YXIgRHVyYXRpb24gPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKCkgewogICAgICAvKioKICAgICAgICogQHByaXZhdGUKICAgICAgICovCiAgICAgIGZ1bmN0aW9uIER1cmF0aW9uKGNvbmZpZykgewogICAgICAgIHZhciBhY2N1cmF0ZSA9IGNvbmZpZy5jb252ZXJzaW9uQWNjdXJhY3kgPT09ICJsb25ndGVybSIgfHwgZmFsc2U7CiAgICAgICAgLyoqCiAgICAgICAgICogQGFjY2VzcyBwcml2YXRlCiAgICAgICAgICovCgogICAgICAgIHRoaXMudmFsdWVzID0gY29uZmlnLnZhbHVlczsKICAgICAgICAvKioKICAgICAgICAgKiBAYWNjZXNzIHByaXZhdGUKICAgICAgICAgKi8KCiAgICAgICAgdGhpcy5sb2MgPSBjb25maWcubG9jIHx8IExvY2FsZS5jcmVhdGUoKTsKICAgICAgICAvKioKICAgICAgICAgKiBAYWNjZXNzIHByaXZhdGUKICAgICAgICAgKi8KCiAgICAgICAgdGhpcy5jb252ZXJzaW9uQWNjdXJhY3kgPSBhY2N1cmF0ZSA/ICJsb25ndGVybSIgOiAiY2FzdWFsIjsKICAgICAgICAvKioKICAgICAgICAgKiBAYWNjZXNzIHByaXZhdGUKICAgICAgICAgKi8KCiAgICAgICAgdGhpcy5pbnZhbGlkID0gY29uZmlnLmludmFsaWQgfHwgbnVsbDsKICAgICAgICAvKioKICAgICAgICAgKiBAYWNjZXNzIHByaXZhdGUKICAgICAgICAgKi8KCiAgICAgICAgdGhpcy5tYXRyaXggPSBhY2N1cmF0ZSA/IGFjY3VyYXRlTWF0cml4IDogY2FzdWFsTWF0cml4OwogICAgICAgIC8qKgogICAgICAgICAqIEBhY2Nlc3MgcHJpdmF0ZQogICAgICAgICAqLwoKICAgICAgICB0aGlzLmlzTHV4b25EdXJhdGlvbiA9IHRydWU7CiAgICAgIH0KICAgICAgLyoqCiAgICAgICAqIENyZWF0ZSBEdXJhdGlvbiBmcm9tIGEgbnVtYmVyIG9mIG1pbGxpc2Vjb25kcy4KICAgICAgICogQHBhcmFtIHtudW1iZXJ9IGNvdW50IG9mIG1pbGxpc2Vjb25kcwogICAgICAgKiBAcGFyYW0ge09iamVjdH0gb3B0cyAtIG9wdGlvbnMgZm9yIHBhcnNpbmcKICAgICAgICogQHBhcmFtIHtzdHJpbmd9IFtvcHRzLmxvY2FsZT0nZW4tVVMnXSAtIHRoZSBsb2NhbGUgdG8gdXNlCiAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBvcHRzLm51bWJlcmluZ1N5c3RlbSAtIHRoZSBudW1iZXJpbmcgc3lzdGVtIHRvIHVzZQogICAgICAgKiBAcGFyYW0ge3N0cmluZ30gW29wdHMuY29udmVyc2lvbkFjY3VyYWN5PSdjYXN1YWwnXSAtIHRoZSBjb252ZXJzaW9uIHN5c3RlbSB0byB1c2UKICAgICAgICogQHJldHVybiB7RHVyYXRpb259CiAgICAgICAqLwoKCiAgICAgIER1cmF0aW9uLmZyb21NaWxsaXMgPSBmdW5jdGlvbiBmcm9tTWlsbGlzKGNvdW50LCBvcHRzKSB7CiAgICAgICAgcmV0dXJuIER1cmF0aW9uLmZyb21PYmplY3QoT2JqZWN0LmFzc2lnbih7CiAgICAgICAgICBtaWxsaXNlY29uZHM6IGNvdW50CiAgICAgICAgfSwgb3B0cykpOwogICAgICB9CiAgICAgIC8qKgogICAgICAgKiBDcmVhdGUgYSBEdXJhdGlvbiBmcm9tIGEgSmF2YVNjcmlwdCBvYmplY3Qgd2l0aCBrZXlzIGxpa2UgJ3llYXJzJyBhbmQgJ2hvdXJzLgogICAgICAgKiBJZiB0aGlzIG9iamVjdCBpcyBlbXB0eSB0aGVuIGEgemVybyBtaWxsaXNlY29uZHMgZHVyYXRpb24gaXMgcmV0dXJuZWQuCiAgICAgICAqIEBwYXJhbSB7T2JqZWN0fSBvYmogLSB0aGUgb2JqZWN0IHRvIGNyZWF0ZSB0aGUgRGF0ZVRpbWUgZnJvbQogICAgICAgKiBAcGFyYW0ge251bWJlcn0gb2JqLnllYXJzCiAgICAgICAqIEBwYXJhbSB7bnVtYmVyfSBvYmoucXVhcnRlcnMKICAgICAgICogQHBhcmFtIHtudW1iZXJ9IG9iai5tb250aHMKICAgICAgICogQHBhcmFtIHtudW1iZXJ9IG9iai53ZWVrcwogICAgICAgKiBAcGFyYW0ge251bWJlcn0gb2JqLmRheXMKICAgICAgICogQHBhcmFtIHtudW1iZXJ9IG9iai5ob3VycwogICAgICAgKiBAcGFyYW0ge251bWJlcn0gb2JqLm1pbnV0ZXMKICAgICAgICogQHBhcmFtIHtudW1iZXJ9IG9iai5zZWNvbmRzCiAgICAgICAqIEBwYXJhbSB7bnVtYmVyfSBvYmoubWlsbGlzZWNvbmRzCiAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBbb2JqLmxvY2FsZT0nZW4tVVMnXSAtIHRoZSBsb2NhbGUgdG8gdXNlCiAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBvYmoubnVtYmVyaW5nU3lzdGVtIC0gdGhlIG51bWJlcmluZyBzeXN0ZW0gdG8gdXNlCiAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBbb2JqLmNvbnZlcnNpb25BY2N1cmFjeT0nY2FzdWFsJ10gLSB0aGUgY29udmVyc2lvbiBzeXN0ZW0gdG8gdXNlCiAgICAgICAqIEByZXR1cm4ge0R1cmF0aW9ufQogICAgICAgKi8KICAgICAgOwoKICAgICAgRHVyYXRpb24uZnJvbU9iamVjdCA9IGZ1bmN0aW9uIGZyb21PYmplY3Qob2JqKSB7CiAgICAgICAgaWYgKG9iaiA9PSBudWxsIHx8IHR5cGVvZiBvYmogIT09ICJvYmplY3QiKSB7CiAgICAgICAgICB0aHJvdyBuZXcgSW52YWxpZEFyZ3VtZW50RXJyb3IoIkR1cmF0aW9uLmZyb21PYmplY3Q6IGFyZ3VtZW50IGV4cGVjdGVkIHRvIGJlIGFuIG9iamVjdCwgZ290ICIgKyAob2JqID09PSBudWxsID8gIm51bGwiIDogdHlwZW9mIG9iaikpOwogICAgICAgIH0KCiAgICAgICAgcmV0dXJuIG5ldyBEdXJhdGlvbih7CiAgICAgICAgICB2YWx1ZXM6IG5vcm1hbGl6ZU9iamVjdChvYmosIER1cmF0aW9uLm5vcm1hbGl6ZVVuaXQsIFsibG9jYWxlIiwgIm51bWJlcmluZ1N5c3RlbSIsICJjb252ZXJzaW9uQWNjdXJhY3kiLCAiem9uZSIgLy8gYSBiaXQgb2YgZGVidDsgaXQncyBzdXBlciBpbmNvbnZlbmllbnQgaW50ZXJuYWxseSBub3QgdG8gYmUgYWJsZSB0byBibGluZGx5IHBhc3MgdGhpcwogICAgICAgICAgXSksCiAgICAgICAgICBsb2M6IExvY2FsZS5mcm9tT2JqZWN0KG9iaiksCiAgICAgICAgICBjb252ZXJzaW9uQWNjdXJhY3k6IG9iai5jb252ZXJzaW9uQWNjdXJhY3kKICAgICAgICB9KTsKICAgICAgfQogICAgICAvKioKICAgICAgICogQ3JlYXRlIGEgRHVyYXRpb24gZnJvbSBhbiBJU08gODYwMSBkdXJhdGlvbiBzdHJpbmcuCiAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSB0ZXh0IC0gdGV4dCB0byBwYXJzZQogICAgICAgKiBAcGFyYW0ge09iamVjdH0gb3B0cyAtIG9wdGlvbnMgZm9yIHBhcnNpbmcKICAgICAgICogQHBhcmFtIHtzdHJpbmd9IFtvcHRzLmxvY2FsZT0nZW4tVVMnXSAtIHRoZSBsb2NhbGUgdG8gdXNlCiAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBvcHRzLm51bWJlcmluZ1N5c3RlbSAtIHRoZSBudW1iZXJpbmcgc3lzdGVtIHRvIHVzZQogICAgICAgKiBAcGFyYW0ge3N0cmluZ30gW29wdHMuY29udmVyc2lvbkFjY3VyYWN5PSdjYXN1YWwnXSAtIHRoZSBjb252ZXJzaW9uIHN5c3RlbSB0byB1c2UKICAgICAgICogQHNlZSBodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9JU09fODYwMSNEdXJhdGlvbnMKICAgICAgICogQGV4YW1wbGUgRHVyYXRpb24uZnJvbUlTTygnUDNZNk0xVzREVDEySDMwTTVTJykudG9PYmplY3QoKSAvLz0+IHsgeWVhcnM6IDMsIG1vbnRoczogNiwgd2Vla3M6IDEsIGRheXM6IDQsIGhvdXJzOiAxMiwgbWludXRlczogMzAsIHNlY29uZHM6IDUgfQogICAgICAgKiBAZXhhbXBsZSBEdXJhdGlvbi5mcm9tSVNPKCdQVDIzSCcpLnRvT2JqZWN0KCkgLy89PiB7IGhvdXJzOiAyMyB9CiAgICAgICAqIEBleGFtcGxlIER1cmF0aW9uLmZyb21JU08oJ1A1WTNNJykudG9PYmplY3QoKSAvLz0+IHsgeWVhcnM6IDUsIG1vbnRoczogMyB9CiAgICAgICAqIEByZXR1cm4ge0R1cmF0aW9ufQogICAgICAgKi8KICAgICAgOwoKICAgICAgRHVyYXRpb24uZnJvbUlTTyA9IGZ1bmN0aW9uIGZyb21JU08odGV4dCwgb3B0cykgewogICAgICAgIHZhciBfcGFyc2VJU09EdXJhdGlvbiA9IHBhcnNlSVNPRHVyYXRpb24odGV4dCksCiAgICAgICAgICAgIHBhcnNlZCA9IF9wYXJzZUlTT0R1cmF0aW9uWzBdOwoKICAgICAgICBpZiAocGFyc2VkKSB7CiAgICAgICAgICB2YXIgb2JqID0gT2JqZWN0LmFzc2lnbihwYXJzZWQsIG9wdHMpOwogICAgICAgICAgcmV0dXJuIER1cmF0aW9uLmZyb21PYmplY3Qob2JqKTsKICAgICAgICB9IGVsc2UgewogICAgICAgICAgcmV0dXJuIER1cmF0aW9uLmludmFsaWQoInVucGFyc2FibGUiLCAidGhlIGlucHV0IFwiIiArIHRleHQgKyAiXCIgY2FuJ3QgYmUgcGFyc2VkIGFzIElTTyA4NjAxIik7CiAgICAgICAgfQogICAgICB9CiAgICAgIC8qKgogICAgICAgKiBDcmVhdGUgYSBEdXJhdGlvbiBmcm9tIGFuIElTTyA4NjAxIHRpbWUgc3RyaW5nLgogICAgICAgKiBAcGFyYW0ge3N0cmluZ30gdGV4dCAtIHRleHQgdG8gcGFyc2UKICAgICAgICogQHBhcmFtIHtPYmplY3R9IG9wdHMgLSBvcHRpb25zIGZvciBwYXJzaW5nCiAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBbb3B0cy5sb2NhbGU9J2VuLVVTJ10gLSB0aGUgbG9jYWxlIHRvIHVzZQogICAgICAgKiBAcGFyYW0ge3N0cmluZ30gb3B0cy5udW1iZXJpbmdTeXN0ZW0gLSB0aGUgbnVtYmVyaW5nIHN5c3RlbSB0byB1c2UKICAgICAgICogQHBhcmFtIHtzdHJpbmd9IFtvcHRzLmNvbnZlcnNpb25BY2N1cmFjeT0nY2FzdWFsJ10gLSB0aGUgY29udmVyc2lvbiBzeXN0ZW0gdG8gdXNlCiAgICAgICAqIEBzZWUgaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvSVNPXzg2MDEjVGltZXMKICAgICAgICogQGV4YW1wbGUgRHVyYXRpb24uZnJvbUlTT1RpbWUoJzExOjIyOjMzLjQ0NCcpLnRvT2JqZWN0KCkgLy89PiB7IGhvdXJzOiAxMSwgbWludXRlczogMjIsIHNlY29uZHM6IDMzLCBtaWxsaXNlY29uZHM6IDQ0NCB9CiAgICAgICAqIEBleGFtcGxlIER1cmF0aW9uLmZyb21JU09UaW1lKCcxMTowMCcpLnRvT2JqZWN0KCkgLy89PiB7IGhvdXJzOiAxMSwgbWludXRlczogMCwgc2Vjb25kczogMCB9CiAgICAgICAqIEBleGFtcGxlIER1cmF0aW9uLmZyb21JU09UaW1lKCdUMTE6MDAnKS50b09iamVjdCgpIC8vPT4geyBob3VyczogMTEsIG1pbnV0ZXM6IDAsIHNlY29uZHM6IDAgfQogICAgICAgKiBAZXhhbXBsZSBEdXJhdGlvbi5mcm9tSVNPVGltZSgnMTEwMCcpLnRvT2JqZWN0KCkgLy89PiB7IGhvdXJzOiAxMSwgbWludXRlczogMCwgc2Vjb25kczogMCB9CiAgICAgICAqIEBleGFtcGxlIER1cmF0aW9uLmZyb21JU09UaW1lKCdUMTEwMCcpLnRvT2JqZWN0KCkgLy89PiB7IGhvdXJzOiAxMSwgbWludXRlczogMCwgc2Vjb25kczogMCB9CiAgICAgICAqIEByZXR1cm4ge0R1cmF0aW9ufQogICAgICAgKi8KICAgICAgOwoKICAgICAgRHVyYXRpb24uZnJvbUlTT1RpbWUgPSBmdW5jdGlvbiBmcm9tSVNPVGltZSh0ZXh0LCBvcHRzKSB7CiAgICAgICAgdmFyIF9wYXJzZUlTT1RpbWVPbmx5ID0gcGFyc2VJU09UaW1lT25seSh0ZXh0KSwKICAgICAgICAgICAgcGFyc2VkID0gX3BhcnNlSVNPVGltZU9ubHlbMF07CgogICAgICAgIGlmIChwYXJzZWQpIHsKICAgICAgICAgIHZhciBvYmogPSBPYmplY3QuYXNzaWduKHBhcnNlZCwgb3B0cyk7CiAgICAgICAgICByZXR1cm4gRHVyYXRpb24uZnJvbU9iamVjdChvYmopOwogICAgICAgIH0gZWxzZSB7CiAgICAgICAgICByZXR1cm4gRHVyYXRpb24uaW52YWxpZCgidW5wYXJzYWJsZSIsICJ0aGUgaW5wdXQgXCIiICsgdGV4dCArICJcIiBjYW4ndCBiZSBwYXJzZWQgYXMgSVNPIDg2MDEiKTsKICAgICAgICB9CiAgICAgIH0KICAgICAgLyoqCiAgICAgICAqIENyZWF0ZSBhbiBpbnZhbGlkIER1cmF0aW9uLgogICAgICAgKiBAcGFyYW0ge3N0cmluZ30gcmVhc29uIC0gc2ltcGxlIHN0cmluZyBvZiB3aHkgdGhpcyBkYXRldGltZSBpcyBpbnZhbGlkLiBTaG91bGQgbm90IGNvbnRhaW4gcGFyYW1ldGVycyBvciBhbnl0aGluZyBlbHNlIGRhdGEtZGVwZW5kZW50CiAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBbZXhwbGFuYXRpb249bnVsbF0gLSBsb25nZXIgZXhwbGFuYXRpb24sIG1heSBpbmNsdWRlIHBhcmFtZXRlcnMgYW5kIG90aGVyIHVzZWZ1bCBkZWJ1Z2dpbmcgaW5mb3JtYXRpb24KICAgICAgICogQHJldHVybiB7RHVyYXRpb259CiAgICAgICAqLwogICAgICA7CgogICAgICBEdXJhdGlvbi5pbnZhbGlkID0gZnVuY3Rpb24gaW52YWxpZChyZWFzb24sIGV4cGxhbmF0aW9uKSB7CiAgICAgICAgaWYgKGV4cGxhbmF0aW9uID09PSB2b2lkIDApIHsKICAgICAgICAgIGV4cGxhbmF0aW9uID0gbnVsbDsKICAgICAgICB9CgogICAgICAgIGlmICghcmVhc29uKSB7CiAgICAgICAgICB0aHJvdyBuZXcgSW52YWxpZEFyZ3VtZW50RXJyb3IoIm5lZWQgdG8gc3BlY2lmeSBhIHJlYXNvbiB0aGUgRHVyYXRpb24gaXMgaW52YWxpZCIpOwogICAgICAgIH0KCiAgICAgICAgdmFyIGludmFsaWQgPSByZWFzb24gaW5zdGFuY2VvZiBJbnZhbGlkID8gcmVhc29uIDogbmV3IEludmFsaWQocmVhc29uLCBleHBsYW5hdGlvbik7CgogICAgICAgIGlmIChTZXR0aW5ncy50aHJvd09uSW52YWxpZCkgewogICAgICAgICAgdGhyb3cgbmV3IEludmFsaWREdXJhdGlvbkVycm9yKGludmFsaWQpOwogICAgICAgIH0gZWxzZSB7CiAgICAgICAgICByZXR1cm4gbmV3IER1cmF0aW9uKHsKICAgICAgICAgICAgaW52YWxpZDogaW52YWxpZAogICAgICAgICAgfSk7CiAgICAgICAgfQogICAgICB9CiAgICAgIC8qKgogICAgICAgKiBAcHJpdmF0ZQogICAgICAgKi8KICAgICAgOwoKICAgICAgRHVyYXRpb24ubm9ybWFsaXplVW5pdCA9IGZ1bmN0aW9uIG5vcm1hbGl6ZVVuaXQodW5pdCkgewogICAgICAgIHZhciBub3JtYWxpemVkID0gewogICAgICAgICAgeWVhcjogInllYXJzIiwKICAgICAgICAgIHllYXJzOiAieWVhcnMiLAogICAgICAgICAgcXVhcnRlcjogInF1YXJ0ZXJzIiwKICAgICAgICAgIHF1YXJ0ZXJzOiAicXVhcnRlcnMiLAogICAgICAgICAgbW9udGg6ICJtb250aHMiLAogICAgICAgICAgbW9udGhzOiAibW9udGhzIiwKICAgICAgICAgIHdlZWs6ICJ3ZWVrcyIsCiAgICAgICAgICB3ZWVrczogIndlZWtzIiwKICAgICAgICAgIGRheTogImRheXMiLAogICAgICAgICAgZGF5czogImRheXMiLAogICAgICAgICAgaG91cjogImhvdXJzIiwKICAgICAgICAgIGhvdXJzOiAiaG91cnMiLAogICAgICAgICAgbWludXRlOiAibWludXRlcyIsCiAgICAgICAgICBtaW51dGVzOiAibWludXRlcyIsCiAgICAgICAgICBzZWNvbmQ6ICJzZWNvbmRzIiwKICAgICAgICAgIHNlY29uZHM6ICJzZWNvbmRzIiwKICAgICAgICAgIG1pbGxpc2Vjb25kOiAibWlsbGlzZWNvbmRzIiwKICAgICAgICAgIG1pbGxpc2Vjb25kczogIm1pbGxpc2Vjb25kcyIKICAgICAgICB9W3VuaXQgPyB1bml0LnRvTG93ZXJDYXNlKCkgOiB1bml0XTsKICAgICAgICBpZiAoIW5vcm1hbGl6ZWQpIHRocm93IG5ldyBJbnZhbGlkVW5pdEVycm9yKHVuaXQpOwogICAgICAgIHJldHVybiBub3JtYWxpemVkOwogICAgICB9CiAgICAgIC8qKgogICAgICAgKiBDaGVjayBpZiBhbiBvYmplY3QgaXMgYSBEdXJhdGlvbi4gV29ya3MgYWNyb3NzIGNvbnRleHQgYm91bmRhcmllcwogICAgICAgKiBAcGFyYW0ge29iamVjdH0gbwogICAgICAgKiBAcmV0dXJuIHtib29sZWFufQogICAgICAgKi8KICAgICAgOwoKICAgICAgRHVyYXRpb24uaXNEdXJhdGlvbiA9IGZ1bmN0aW9uIGlzRHVyYXRpb24obykgewogICAgICAgIHJldHVybiBvICYmIG8uaXNMdXhvbkR1cmF0aW9uIHx8IGZhbHNlOwogICAgICB9CiAgICAgIC8qKgogICAgICAgKiBHZXQgIHRoZSBsb2NhbGUgb2YgYSBEdXJhdGlvbiwgc3VjaCAnZW4tR0InCiAgICAgICAqIEB0eXBlIHtzdHJpbmd9CiAgICAgICAqLwogICAgICA7CgogICAgICB2YXIgX3Byb3RvID0gRHVyYXRpb24ucHJvdG90eXBlOwoKICAgICAgLyoqCiAgICAgICAqIFJldHVybnMgYSBzdHJpbmcgcmVwcmVzZW50YXRpb24gb2YgdGhpcyBEdXJhdGlvbiBmb3JtYXR0ZWQgYWNjb3JkaW5nIHRvIHRoZSBzcGVjaWZpZWQgZm9ybWF0IHN0cmluZy4gWW91IG1heSB1c2UgdGhlc2UgdG9rZW5zOgogICAgICAgKiAqIGBTYCBmb3IgbWlsbGlzZWNvbmRzCiAgICAgICAqICogYHNgIGZvciBzZWNvbmRzCiAgICAgICAqICogYG1gIGZvciBtaW51dGVzCiAgICAgICAqICogYGhgIGZvciBob3VycwogICAgICAgKiAqIGBkYCBmb3IgZGF5cwogICAgICAgKiAqIGBNYCBmb3IgbW9udGhzCiAgICAgICAqICogYHlgIGZvciB5ZWFycwogICAgICAgKiBOb3RlczoKICAgICAgICogKiBBZGQgcGFkZGluZyBieSByZXBlYXRpbmcgdGhlIHRva2VuLCBlLmcuICJ5eSIgcGFkcyB0aGUgeWVhcnMgdG8gdHdvIGRpZ2l0cywgImhoaGgiIHBhZHMgdGhlIGhvdXJzIG91dCB0byBmb3VyIGRpZ2l0cwogICAgICAgKiAqIFRoZSBkdXJhdGlvbiB3aWxsIGJlIGNvbnZlcnRlZCB0byB0aGUgc2V0IG9mIHVuaXRzIGluIHRoZSBmb3JtYXQgc3RyaW5nIHVzaW5nIHtAbGluayBEdXJhdGlvbi5zaGlmdFRvfSBhbmQgdGhlIER1cmF0aW9ucydzIGNvbnZlcnNpb24gYWNjdXJhY3kgc2V0dGluZy4KICAgICAgICogQHBhcmFtIHtzdHJpbmd9IGZtdCAtIHRoZSBmb3JtYXQgc3RyaW5nCiAgICAgICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRzIC0gb3B0aW9ucwogICAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IFtvcHRzLmZsb29yPXRydWVdIC0gZmxvb3IgbnVtZXJpY2FsIHZhbHVlcwogICAgICAgKiBAZXhhbXBsZSBEdXJhdGlvbi5mcm9tT2JqZWN0KHsgeWVhcnM6IDEsIGRheXM6IDYsIHNlY29uZHM6IDIgfSkudG9Gb3JtYXQoInkgZCBzIikgLy89PiAiMSA2IDIiCiAgICAgICAqIEBleGFtcGxlIER1cmF0aW9uLmZyb21PYmplY3QoeyB5ZWFyczogMSwgZGF5czogNiwgc2Vjb25kczogMiB9KS50b0Zvcm1hdCgieXkgZGQgc3NzIikgLy89PiAiMDEgMDYgMDAyIgogICAgICAgKiBAZXhhbXBsZSBEdXJhdGlvbi5mcm9tT2JqZWN0KHsgeWVhcnM6IDEsIGRheXM6IDYsIHNlY29uZHM6IDIgfSkudG9Gb3JtYXQoIk0gUyIpIC8vPT4gIjEyIDUxODQwMjAwMCIKICAgICAgICogQHJldHVybiB7c3RyaW5nfQogICAgICAgKi8KICAgICAgX3Byb3RvLnRvRm9ybWF0ID0gZnVuY3Rpb24gdG9Gb3JtYXQoZm10LCBvcHRzKSB7CiAgICAgICAgaWYgKG9wdHMgPT09IHZvaWQgMCkgewogICAgICAgICAgb3B0cyA9IHt9OwogICAgICAgIH0KCiAgICAgICAgLy8gcmV2ZXJzZS1jb21wYXQgc2luY2UgMS4yOyB3ZSBhbHdheXMgcm91bmQgZG93biBub3csIG5ldmVyIHVwLCBhbmQgd2UgZG8gaXQgYnkgZGVmYXVsdAogICAgICAgIHZhciBmbXRPcHRzID0gT2JqZWN0LmFzc2lnbih7fSwgb3B0cywgewogICAgICAgICAgZmxvb3I6IG9wdHMucm91bmQgIT09IGZhbHNlICYmIG9wdHMuZmxvb3IgIT09IGZhbHNlCiAgICAgICAgfSk7CiAgICAgICAgcmV0dXJuIHRoaXMuaXNWYWxpZCA/IEZvcm1hdHRlci5jcmVhdGUodGhpcy5sb2MsIGZtdE9wdHMpLmZvcm1hdER1cmF0aW9uRnJvbVN0cmluZyh0aGlzLCBmbXQpIDogSU5WQUxJRDsKICAgICAgfQogICAgICAvKioKICAgICAgICogUmV0dXJucyBhIEphdmFTY3JpcHQgb2JqZWN0IHdpdGggdGhpcyBEdXJhdGlvbidzIHZhbHVlcy4KICAgICAgICogQHBhcmFtIG9wdHMgLSBvcHRpb25zIGZvciBnZW5lcmF0aW5nIHRoZSBvYmplY3QKICAgICAgICogQHBhcmFtIHtib29sZWFufSBbb3B0cy5pbmNsdWRlQ29uZmlnPWZhbHNlXSAtIGluY2x1ZGUgY29uZmlndXJhdGlvbiBhdHRyaWJ1dGVzIGluIHRoZSBvdXRwdXQKICAgICAgICogQGV4YW1wbGUgRHVyYXRpb24uZnJvbU9iamVjdCh7IHllYXJzOiAxLCBkYXlzOiA2LCBzZWNvbmRzOiAyIH0pLnRvT2JqZWN0KCkgLy89PiB7IHllYXJzOiAxLCBkYXlzOiA2LCBzZWNvbmRzOiAyIH0KICAgICAgICogQHJldHVybiB7T2JqZWN0fQogICAgICAgKi8KICAgICAgOwoKICAgICAgX3Byb3RvLnRvT2JqZWN0ID0gZnVuY3Rpb24gdG9PYmplY3Qob3B0cykgewogICAgICAgIGlmIChvcHRzID09PSB2b2lkIDApIHsKICAgICAgICAgIG9wdHMgPSB7fTsKICAgICAgICB9CgogICAgICAgIGlmICghdGhpcy5pc1ZhbGlkKSByZXR1cm4ge307CiAgICAgICAgdmFyIGJhc2UgPSBPYmplY3QuYXNzaWduKHt9LCB0aGlzLnZhbHVlcyk7CgogICAgICAgIGlmIChvcHRzLmluY2x1ZGVDb25maWcpIHsKICAgICAgICAgIGJhc2UuY29udmVyc2lvbkFjY3VyYWN5ID0gdGhpcy5jb252ZXJzaW9uQWNjdXJhY3k7CiAgICAgICAgICBiYXNlLm51bWJlcmluZ1N5c3RlbSA9IHRoaXMubG9jLm51bWJlcmluZ1N5c3RlbTsKICAgICAgICAgIGJhc2UubG9jYWxlID0gdGhpcy5sb2MubG9jYWxlOwogICAgICAgIH0KCiAgICAgICAgcmV0dXJuIGJhc2U7CiAgICAgIH0KICAgICAgLyoqCiAgICAgICAqIFJldHVybnMgYW4gSVNPIDg2MDEtY29tcGxpYW50IHN0cmluZyByZXByZXNlbnRhdGlvbiBvZiB0aGlzIER1cmF0aW9uLgogICAgICAgKiBAc2VlIGh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL0lTT184NjAxI0R1cmF0aW9ucwogICAgICAgKiBAZXhhbXBsZSBEdXJhdGlvbi5mcm9tT2JqZWN0KHsgeWVhcnM6IDMsIHNlY29uZHM6IDQ1IH0pLnRvSVNPKCkgLy89PiAnUDNZVDQ1UycKICAgICAgICogQGV4YW1wbGUgRHVyYXRpb24uZnJvbU9iamVjdCh7IG1vbnRoczogNCwgc2Vjb25kczogNDUgfSkudG9JU08oKSAvLz0+ICdQNE1UNDVTJwogICAgICAgKiBAZXhhbXBsZSBEdXJhdGlvbi5mcm9tT2JqZWN0KHsgbW9udGhzOiA1IH0pLnRvSVNPKCkgLy89PiAnUDVNJwogICAgICAgKiBAZXhhbXBsZSBEdXJhdGlvbi5mcm9tT2JqZWN0KHsgbWludXRlczogNSB9KS50b0lTTygpIC8vPT4gJ1BUNU0nCiAgICAgICAqIEBleGFtcGxlIER1cmF0aW9uLmZyb21PYmplY3QoeyBtaWxsaXNlY29uZHM6IDYgfSkudG9JU08oKSAvLz0+ICdQVDAuMDA2UycKICAgICAgICogQHJldHVybiB7c3RyaW5nfQogICAgICAgKi8KICAgICAgOwoKICAgICAgX3Byb3RvLnRvSVNPID0gZnVuY3Rpb24gdG9JU08oKSB7CiAgICAgICAgLy8gd2UgY291bGQgdXNlIHRoZSBmb3JtYXR0ZXIsIGJ1dCB0aGlzIGlzIGFuIGVhc2llciB3YXkgdG8gZ2V0IHRoZSBtaW5pbXVtIHN0cmluZwogICAgICAgIGlmICghdGhpcy5pc1ZhbGlkKSByZXR1cm4gbnVsbDsKICAgICAgICB2YXIgcyA9ICJQIjsKICAgICAgICBpZiAodGhpcy55ZWFycyAhPT0gMCkgcyArPSB0aGlzLnllYXJzICsgIlkiOwogICAgICAgIGlmICh0aGlzLm1vbnRocyAhPT0gMCB8fCB0aGlzLnF1YXJ0ZXJzICE9PSAwKSBzICs9IHRoaXMubW9udGhzICsgdGhpcy5xdWFydGVycyAqIDMgKyAiTSI7CiAgICAgICAgaWYgKHRoaXMud2Vla3MgIT09IDApIHMgKz0gdGhpcy53ZWVrcyArICJXIjsKICAgICAgICBpZiAodGhpcy5kYXlzICE9PSAwKSBzICs9IHRoaXMuZGF5cyArICJEIjsKICAgICAgICBpZiAodGhpcy5ob3VycyAhPT0gMCB8fCB0aGlzLm1pbnV0ZXMgIT09IDAgfHwgdGhpcy5zZWNvbmRzICE9PSAwIHx8IHRoaXMubWlsbGlzZWNvbmRzICE9PSAwKSBzICs9ICJUIjsKICAgICAgICBpZiAodGhpcy5ob3VycyAhPT0gMCkgcyArPSB0aGlzLmhvdXJzICsgIkgiOwogICAgICAgIGlmICh0aGlzLm1pbnV0ZXMgIT09IDApIHMgKz0gdGhpcy5taW51dGVzICsgIk0iOwogICAgICAgIGlmICh0aGlzLnNlY29uZHMgIT09IDAgfHwgdGhpcy5taWxsaXNlY29uZHMgIT09IDApIC8vIHRoaXMgd2lsbCBoYW5kbGUgImZsb2F0aW5nIHBvaW50IG1hZG5lc3MiIGJ5IHJlbW92aW5nIGV4dHJhIGRlY2ltYWwgcGxhY2VzCiAgICAgICAgICAvLyBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy81ODgwMDQvaXMtZmxvYXRpbmctcG9pbnQtbWF0aC1icm9rZW4KICAgICAgICAgIHMgKz0gcm91bmRUbyh0aGlzLnNlY29uZHMgKyB0aGlzLm1pbGxpc2Vjb25kcyAvIDEwMDAsIDMpICsgIlMiOwogICAgICAgIGlmIChzID09PSAiUCIpIHMgKz0gIlQwUyI7CiAgICAgICAgcmV0dXJuIHM7CiAgICAgIH0KICAgICAgLyoqCiAgICAgICAqIFJldHVybnMgYW4gSVNPIDg2MDEtY29tcGxpYW50IHN0cmluZyByZXByZXNlbnRhdGlvbiBvZiB0aGlzIER1cmF0aW9uLCBmb3JtYXR0ZWQgYXMgYSB0aW1lIG9mIGRheS4KICAgICAgICogTm90ZSB0aGF0IHRoaXMgd2lsbCByZXR1cm4gbnVsbCBpZiB0aGUgZHVyYXRpb24gaXMgaW52YWxpZCwgbmVnYXRpdmUsIG9yIGVxdWFsIHRvIG9yIGdyZWF0ZXIgdGhhbiAyNCBob3Vycy4KICAgICAgICogQHNlZSBodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9JU09fODYwMSNUaW1lcwogICAgICAgKiBAcGFyYW0ge09iamVjdH0gb3B0cyAtIG9wdGlvbnMKICAgICAgICogQHBhcmFtIHtib29sZWFufSBbb3B0cy5zdXBwcmVzc01pbGxpc2Vjb25kcz1mYWxzZV0gLSBleGNsdWRlIG1pbGxpc2Vjb25kcyBmcm9tIHRoZSBmb3JtYXQgaWYgdGhleSdyZSAwCiAgICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gW29wdHMuc3VwcHJlc3NTZWNvbmRzPWZhbHNlXSAtIGV4Y2x1ZGUgc2Vjb25kcyBmcm9tIHRoZSBmb3JtYXQgaWYgdGhleSdyZSAwCiAgICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gW29wdHMuaW5jbHVkZVByZWZpeD1mYWxzZV0gLSBpbmNsdWRlIHRoZSBgVGAgcHJlZml4CiAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBbb3B0cy5mb3JtYXQ9J2V4dGVuZGVkJ10gLSBjaG9vc2UgYmV0d2VlbiB0aGUgYmFzaWMgYW5kIGV4dGVuZGVkIGZvcm1hdAogICAgICAgKiBAZXhhbXBsZSBEdXJhdGlvbi5mcm9tT2JqZWN0KHsgaG91cnM6IDExIH0pLnRvSVNPVGltZSgpIC8vPT4gJzExOjAwOjAwLjAwMCcKICAgICAgICogQGV4YW1wbGUgRHVyYXRpb24uZnJvbU9iamVjdCh7IGhvdXJzOiAxMSB9KS50b0lTT1RpbWUoeyBzdXBwcmVzc01pbGxpc2Vjb25kczogdHJ1ZSB9KSAvLz0+ICcxMTowMDowMCcKICAgICAgICogQGV4YW1wbGUgRHVyYXRpb24uZnJvbU9iamVjdCh7IGhvdXJzOiAxMSB9KS50b0lTT1RpbWUoeyBzdXBwcmVzc1NlY29uZHM6IHRydWUgfSkgLy89PiAnMTE6MDAnCiAgICAgICAqIEBleGFtcGxlIER1cmF0aW9uLmZyb21PYmplY3QoeyBob3VyczogMTEgfSkudG9JU09UaW1lKHsgaW5jbHVkZVByZWZpeDogdHJ1ZSB9KSAvLz0+ICdUMTE6MDA6MDAuMDAwJwogICAgICAgKiBAZXhhbXBsZSBEdXJhdGlvbi5mcm9tT2JqZWN0KHsgaG91cnM6IDExIH0pLnRvSVNPVGltZSh7IGZvcm1hdDogJ2Jhc2ljJyB9KSAvLz0+ICcxMTAwMDAuMDAwJwogICAgICAgKiBAcmV0dXJuIHtzdHJpbmd9CiAgICAgICAqLwogICAgICA7CgogICAgICBfcHJvdG8udG9JU09UaW1lID0gZnVuY3Rpb24gdG9JU09UaW1lKG9wdHMpIHsKICAgICAgICBpZiAob3B0cyA9PT0gdm9pZCAwKSB7CiAgICAgICAgICBvcHRzID0ge307CiAgICAgICAgfQoKICAgICAgICBpZiAoIXRoaXMuaXNWYWxpZCkgcmV0dXJuIG51bGw7CiAgICAgICAgdmFyIG1pbGxpcyA9IHRoaXMudG9NaWxsaXMoKTsKICAgICAgICBpZiAobWlsbGlzIDwgMCB8fCBtaWxsaXMgPj0gODY0MDAwMDApIHJldHVybiBudWxsOwogICAgICAgIG9wdHMgPSBPYmplY3QuYXNzaWduKHsKICAgICAgICAgIHN1cHByZXNzTWlsbGlzZWNvbmRzOiBmYWxzZSwKICAgICAgICAgIHN1cHByZXNzU2Vjb25kczogZmFsc2UsCiAgICAgICAgICBpbmNsdWRlUHJlZml4OiBmYWxzZSwKICAgICAgICAgIGZvcm1hdDogImV4dGVuZGVkIgogICAgICAgIH0sIG9wdHMpOwogICAgICAgIHZhciB2YWx1ZSA9IHRoaXMuc2hpZnRUbygiaG91cnMiLCAibWludXRlcyIsICJzZWNvbmRzIiwgIm1pbGxpc2Vjb25kcyIpOwogICAgICAgIHZhciBmbXQgPSBvcHRzLmZvcm1hdCA9PT0gImJhc2ljIiA/ICJoaG1tIiA6ICJoaDptbSI7CgogICAgICAgIGlmICghb3B0cy5zdXBwcmVzc1NlY29uZHMgfHwgdmFsdWUuc2Vjb25kcyAhPT0gMCB8fCB2YWx1ZS5taWxsaXNlY29uZHMgIT09IDApIHsKICAgICAgICAgIGZtdCArPSBvcHRzLmZvcm1hdCA9PT0gImJhc2ljIiA/ICJzcyIgOiAiOnNzIjsKCiAgICAgICAgICBpZiAoIW9wdHMuc3VwcHJlc3NNaWxsaXNlY29uZHMgfHwgdmFsdWUubWlsbGlzZWNvbmRzICE9PSAwKSB7CiAgICAgICAgICAgIGZtdCArPSAiLlNTUyI7CiAgICAgICAgICB9CiAgICAgICAgfQoKICAgICAgICB2YXIgc3RyID0gdmFsdWUudG9Gb3JtYXQoZm10KTsKCiAgICAgICAgaWYgKG9wdHMuaW5jbHVkZVByZWZpeCkgewogICAgICAgICAgc3RyID0gIlQiICsgc3RyOwogICAgICAgIH0KCiAgICAgICAgcmV0dXJuIHN0cjsKICAgICAgfQogICAgICAvKioKICAgICAgICogUmV0dXJucyBhbiBJU08gODYwMSByZXByZXNlbnRhdGlvbiBvZiB0aGlzIER1cmF0aW9uIGFwcHJvcHJpYXRlIGZvciB1c2UgaW4gSlNPTi4KICAgICAgICogQHJldHVybiB7c3RyaW5nfQogICAgICAgKi8KICAgICAgOwoKICAgICAgX3Byb3RvLnRvSlNPTiA9IGZ1bmN0aW9uIHRvSlNPTigpIHsKICAgICAgICByZXR1cm4gdGhpcy50b0lTTygpOwogICAgICB9CiAgICAgIC8qKgogICAgICAgKiBSZXR1cm5zIGFuIElTTyA4NjAxIHJlcHJlc2VudGF0aW9uIG9mIHRoaXMgRHVyYXRpb24gYXBwcm9wcmlhdGUgZm9yIHVzZSBpbiBkZWJ1Z2dpbmcuCiAgICAgICAqIEByZXR1cm4ge3N0cmluZ30KICAgICAgICovCiAgICAgIDsKCiAgICAgIF9wcm90by50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkgewogICAgICAgIHJldHVybiB0aGlzLnRvSVNPKCk7CiAgICAgIH0KICAgICAgLyoqCiAgICAgICAqIFJldHVybnMgYW4gbWlsbGlzZWNvbmRzIHZhbHVlIG9mIHRoaXMgRHVyYXRpb24uCiAgICAgICAqIEByZXR1cm4ge251bWJlcn0KICAgICAgICovCiAgICAgIDsKCiAgICAgIF9wcm90by50b01pbGxpcyA9IGZ1bmN0aW9uIHRvTWlsbGlzKCkgewogICAgICAgIHJldHVybiB0aGlzLmFzKCJtaWxsaXNlY29uZHMiKTsKICAgICAgfQogICAgICAvKioKICAgICAgICogUmV0dXJucyBhbiBtaWxsaXNlY29uZHMgdmFsdWUgb2YgdGhpcyBEdXJhdGlvbi4gQWxpYXMgb2Yge0BsaW5rIHRvTWlsbGlzfQogICAgICAgKiBAcmV0dXJuIHtudW1iZXJ9CiAgICAgICAqLwogICAgICA7CgogICAgICBfcHJvdG8udmFsdWVPZiA9IGZ1bmN0aW9uIHZhbHVlT2YoKSB7CiAgICAgICAgcmV0dXJuIHRoaXMudG9NaWxsaXMoKTsKICAgICAgfQogICAgICAvKioKICAgICAgICogTWFrZSB0aGlzIER1cmF0aW9uIGxvbmdlciBieSB0aGUgc3BlY2lmaWVkIGFtb3VudC4gUmV0dXJuIGEgbmV3bHktY29uc3RydWN0ZWQgRHVyYXRpb24uCiAgICAgICAqIEBwYXJhbSB7RHVyYXRpb258T2JqZWN0fG51bWJlcn0gZHVyYXRpb24gLSBUaGUgYW1vdW50IHRvIGFkZC4gRWl0aGVyIGEgTHV4b24gRHVyYXRpb24sIGEgbnVtYmVyIG9mIG1pbGxpc2Vjb25kcywgdGhlIG9iamVjdCBhcmd1bWVudCB0byBEdXJhdGlvbi5mcm9tT2JqZWN0KCkKICAgICAgICogQHJldHVybiB7RHVyYXRpb259CiAgICAgICAqLwogICAgICA7CgogICAgICBfcHJvdG8ucGx1cyA9IGZ1bmN0aW9uIHBsdXMoZHVyYXRpb24pIHsKICAgICAgICBpZiAoIXRoaXMuaXNWYWxpZCkgcmV0dXJuIHRoaXM7CiAgICAgICAgdmFyIGR1ciA9IGZyaWVuZGx5RHVyYXRpb24oZHVyYXRpb24pLAogICAgICAgICAgICByZXN1bHQgPSB7fTsKCiAgICAgICAgZm9yICh2YXIgX2l0ZXJhdG9yID0gX2NyZWF0ZUZvck9mSXRlcmF0b3JIZWxwZXJMb29zZShvcmRlcmVkVW5pdHMpLCBfc3RlcDsgIShfc3RlcCA9IF9pdGVyYXRvcigpKS5kb25lOykgewogICAgICAgICAgdmFyIGsgPSBfc3RlcC52YWx1ZTsKCiAgICAgICAgICBpZiAoaGFzT3duUHJvcGVydHkoZHVyLnZhbHVlcywgaykgfHwgaGFzT3duUHJvcGVydHkodGhpcy52YWx1ZXMsIGspKSB7CiAgICAgICAgICAgIHJlc3VsdFtrXSA9IGR1ci5nZXQoaykgKyB0aGlzLmdldChrKTsKICAgICAgICAgIH0KICAgICAgICB9CgogICAgICAgIHJldHVybiBjbG9uZSh0aGlzLCB7CiAgICAgICAgICB2YWx1ZXM6IHJlc3VsdAogICAgICAgIH0sIHRydWUpOwogICAgICB9CiAgICAgIC8qKgogICAgICAgKiBNYWtlIHRoaXMgRHVyYXRpb24gc2hvcnRlciBieSB0aGUgc3BlY2lmaWVkIGFtb3VudC4gUmV0dXJuIGEgbmV3bHktY29uc3RydWN0ZWQgRHVyYXRpb24uCiAgICAgICAqIEBwYXJhbSB7RHVyYXRpb258T2JqZWN0fG51bWJlcn0gZHVyYXRpb24gLSBUaGUgYW1vdW50IHRvIHN1YnRyYWN0LiBFaXRoZXIgYSBMdXhvbiBEdXJhdGlvbiwgYSBudW1iZXIgb2YgbWlsbGlzZWNvbmRzLCB0aGUgb2JqZWN0IGFyZ3VtZW50IHRvIER1cmF0aW9uLmZyb21PYmplY3QoKQogICAgICAgKiBAcmV0dXJuIHtEdXJhdGlvbn0KICAgICAgICovCiAgICAgIDsKCiAgICAgIF9wcm90by5taW51cyA9IGZ1bmN0aW9uIG1pbnVzKGR1cmF0aW9uKSB7CiAgICAgICAgaWYgKCF0aGlzLmlzVmFsaWQpIHJldHVybiB0aGlzOwogICAgICAgIHZhciBkdXIgPSBmcmllbmRseUR1cmF0aW9uKGR1cmF0aW9uKTsKICAgICAgICByZXR1cm4gdGhpcy5wbHVzKGR1ci5uZWdhdGUoKSk7CiAgICAgIH0KICAgICAgLyoqCiAgICAgICAqIFNjYWxlIHRoaXMgRHVyYXRpb24gYnkgdGhlIHNwZWNpZmllZCBhbW91bnQuIFJldHVybiBhIG5ld2x5LWNvbnN0cnVjdGVkIER1cmF0aW9uLgogICAgICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBmbiAtIFRoZSBmdW5jdGlvbiB0byBhcHBseSB0byBlYWNoIHVuaXQuIEFyaXR5IGlzIDEgb3IgMjogdGhlIHZhbHVlIG9mIHRoZSB1bml0IGFuZCwgb3B0aW9uYWxseSwgdGhlIHVuaXQgbmFtZS4gTXVzdCByZXR1cm4gYSBudW1iZXIuCiAgICAgICAqIEBleGFtcGxlIER1cmF0aW9uLmZyb21PYmplY3QoeyBob3VyczogMSwgbWludXRlczogMzAgfSkubWFwVW5pdCh4ID0+IHggKiAyKSAvLz0+IHsgaG91cnM6IDIsIG1pbnV0ZXM6IDYwIH0KICAgICAgICogQGV4YW1wbGUgRHVyYXRpb24uZnJvbU9iamVjdCh7IGhvdXJzOiAxLCBtaW51dGVzOiAzMCB9KS5tYXBVbml0KCh4LCB1KSA9PiB1ID09PSAiaG91ciIgPyB4ICogMiA6IHgpIC8vPT4geyBob3VyczogMiwgbWludXRlczogMzAgfQogICAgICAgKiBAcmV0dXJuIHtEdXJhdGlvbn0KICAgICAgICovCiAgICAgIDsKCiAgICAgIF9wcm90by5tYXBVbml0cyA9IGZ1bmN0aW9uIG1hcFVuaXRzKGZuKSB7CiAgICAgICAgaWYgKCF0aGlzLmlzVmFsaWQpIHJldHVybiB0aGlzOwogICAgICAgIHZhciByZXN1bHQgPSB7fTsKCiAgICAgICAgZm9yICh2YXIgX2kgPSAwLCBfT2JqZWN0JGtleXMgPSBPYmplY3Qua2V5cyh0aGlzLnZhbHVlcyk7IF9pIDwgX09iamVjdCRrZXlzLmxlbmd0aDsgX2krKykgewogICAgICAgICAgdmFyIGsgPSBfT2JqZWN0JGtleXNbX2ldOwogICAgICAgICAgcmVzdWx0W2tdID0gYXNOdW1iZXIoZm4odGhpcy52YWx1ZXNba10sIGspKTsKICAgICAgICB9CgogICAgICAgIHJldHVybiBjbG9uZSh0aGlzLCB7CiAgICAgICAgICB2YWx1ZXM6IHJlc3VsdAogICAgICAgIH0sIHRydWUpOwogICAgICB9CiAgICAgIC8qKgogICAgICAgKiBHZXQgdGhlIHZhbHVlIG9mIHVuaXQuCiAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSB1bml0IC0gYSB1bml0IHN1Y2ggYXMgJ21pbnV0ZScgb3IgJ2RheScKICAgICAgICogQGV4YW1wbGUgRHVyYXRpb24uZnJvbU9iamVjdCh7eWVhcnM6IDIsIGRheXM6IDN9KS5nZXQoJ3llYXJzJykgLy89PiAyCiAgICAgICAqIEBleGFtcGxlIER1cmF0aW9uLmZyb21PYmplY3Qoe3llYXJzOiAyLCBkYXlzOiAzfSkuZ2V0KCdtb250aHMnKSAvLz0+IDAKICAgICAgICogQGV4YW1wbGUgRHVyYXRpb24uZnJvbU9iamVjdCh7eWVhcnM6IDIsIGRheXM6IDN9KS5nZXQoJ2RheXMnKSAvLz0+IDMKICAgICAgICogQHJldHVybiB7bnVtYmVyfQogICAgICAgKi8KICAgICAgOwoKICAgICAgX3Byb3RvLmdldCA9IGZ1bmN0aW9uIGdldCh1bml0KSB7CiAgICAgICAgcmV0dXJuIHRoaXNbRHVyYXRpb24ubm9ybWFsaXplVW5pdCh1bml0KV07CiAgICAgIH0KICAgICAgLyoqCiAgICAgICAqICJTZXQiIHRoZSB2YWx1ZXMgb2Ygc3BlY2lmaWVkIHVuaXRzLiBSZXR1cm4gYSBuZXdseS1jb25zdHJ1Y3RlZCBEdXJhdGlvbi4KICAgICAgICogQHBhcmFtIHtPYmplY3R9IHZhbHVlcyAtIGEgbWFwcGluZyBvZiB1bml0cyB0byBudW1iZXJzCiAgICAgICAqIEBleGFtcGxlIGR1ci5zZXQoeyB5ZWFyczogMjAxNyB9KQogICAgICAgKiBAZXhhbXBsZSBkdXIuc2V0KHsgaG91cnM6IDgsIG1pbnV0ZXM6IDMwIH0pCiAgICAgICAqIEByZXR1cm4ge0R1cmF0aW9ufQogICAgICAgKi8KICAgICAgOwoKICAgICAgX3Byb3RvLnNldCA9IGZ1bmN0aW9uIHNldCh2YWx1ZXMpIHsKICAgICAgICBpZiAoIXRoaXMuaXNWYWxpZCkgcmV0dXJuIHRoaXM7CiAgICAgICAgdmFyIG1peGVkID0gT2JqZWN0LmFzc2lnbih0aGlzLnZhbHVlcywgbm9ybWFsaXplT2JqZWN0KHZhbHVlcywgRHVyYXRpb24ubm9ybWFsaXplVW5pdCwgW10pKTsKICAgICAgICByZXR1cm4gY2xvbmUodGhpcywgewogICAgICAgICAgdmFsdWVzOiBtaXhlZAogICAgICAgIH0pOwogICAgICB9CiAgICAgIC8qKgogICAgICAgKiAiU2V0IiB0aGUgbG9jYWxlIGFuZC9vciBudW1iZXJpbmdTeXN0ZW0uICBSZXR1cm5zIGEgbmV3bHktY29uc3RydWN0ZWQgRHVyYXRpb24uCiAgICAgICAqIEBleGFtcGxlIGR1ci5yZWNvbmZpZ3VyZSh7IGxvY2FsZTogJ2VuLUdCJyB9KQogICAgICAgKiBAcmV0dXJuIHtEdXJhdGlvbn0KICAgICAgICovCiAgICAgIDsKCiAgICAgIF9wcm90by5yZWNvbmZpZ3VyZSA9IGZ1bmN0aW9uIHJlY29uZmlndXJlKF90ZW1wKSB7CiAgICAgICAgdmFyIF9yZWYgPSBfdGVtcCA9PT0gdm9pZCAwID8ge30gOiBfdGVtcCwKICAgICAgICAgICAgbG9jYWxlID0gX3JlZi5sb2NhbGUsCiAgICAgICAgICAgIG51bWJlcmluZ1N5c3RlbSA9IF9yZWYubnVtYmVyaW5nU3lzdGVtLAogICAgICAgICAgICBjb252ZXJzaW9uQWNjdXJhY3kgPSBfcmVmLmNvbnZlcnNpb25BY2N1cmFjeTsKCiAgICAgICAgdmFyIGxvYyA9IHRoaXMubG9jLmNsb25lKHsKICAgICAgICAgIGxvY2FsZTogbG9jYWxlLAogICAgICAgICAgbnVtYmVyaW5nU3lzdGVtOiBudW1iZXJpbmdTeXN0ZW0KICAgICAgICB9KSwKICAgICAgICAgICAgb3B0cyA9IHsKICAgICAgICAgIGxvYzogbG9jCiAgICAgICAgfTsKCiAgICAgICAgaWYgKGNvbnZlcnNpb25BY2N1cmFjeSkgewogICAgICAgICAgb3B0cy5jb252ZXJzaW9uQWNjdXJhY3kgPSBjb252ZXJzaW9uQWNjdXJhY3k7CiAgICAgICAgfQoKICAgICAgICByZXR1cm4gY2xvbmUodGhpcywgb3B0cyk7CiAgICAgIH0KICAgICAgLyoqCiAgICAgICAqIFJldHVybiB0aGUgbGVuZ3RoIG9mIHRoZSBkdXJhdGlvbiBpbiB0aGUgc3BlY2lmaWVkIHVuaXQuCiAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSB1bml0IC0gYSB1bml0IHN1Y2ggYXMgJ21pbnV0ZXMnIG9yICdkYXlzJwogICAgICAgKiBAZXhhbXBsZSBEdXJhdGlvbi5mcm9tT2JqZWN0KHt5ZWFyczogMX0pLmFzKCdkYXlzJykgLy89PiAzNjUKICAgICAgICogQGV4YW1wbGUgRHVyYXRpb24uZnJvbU9iamVjdCh7eWVhcnM6IDF9KS5hcygnbW9udGhzJykgLy89PiAxMgogICAgICAgKiBAZXhhbXBsZSBEdXJhdGlvbi5mcm9tT2JqZWN0KHtob3VyczogNjB9KS5hcygnZGF5cycpIC8vPT4gMi41CiAgICAgICAqIEByZXR1cm4ge251bWJlcn0KICAgICAgICovCiAgICAgIDsKCiAgICAgIF9wcm90by5hcyA9IGZ1bmN0aW9uIGFzKHVuaXQpIHsKICAgICAgICByZXR1cm4gdGhpcy5pc1ZhbGlkID8gdGhpcy5zaGlmdFRvKHVuaXQpLmdldCh1bml0KSA6IE5hTjsKICAgICAgfQogICAgICAvKioKICAgICAgICogUmVkdWNlIHRoaXMgRHVyYXRpb24gdG8gaXRzIGNhbm9uaWNhbCByZXByZXNlbnRhdGlvbiBpbiBpdHMgY3VycmVudCB1bml0cy4KICAgICAgICogQGV4YW1wbGUgRHVyYXRpb24uZnJvbU9iamVjdCh7IHllYXJzOiAyLCBkYXlzOiA1MDAwIH0pLm5vcm1hbGl6ZSgpLnRvT2JqZWN0KCkgLy89PiB7IHllYXJzOiAxNSwgZGF5czogMjU1IH0KICAgICAgICogQGV4YW1wbGUgRHVyYXRpb24uZnJvbU9iamVjdCh7IGhvdXJzOiAxMiwgbWludXRlczogLTQ1IH0pLm5vcm1hbGl6ZSgpLnRvT2JqZWN0KCkgLy89PiB7IGhvdXJzOiAxMSwgbWludXRlczogMTUgfQogICAgICAgKiBAcmV0dXJuIHtEdXJhdGlvbn0KICAgICAgICovCiAgICAgIDsKCiAgICAgIF9wcm90by5ub3JtYWxpemUgPSBmdW5jdGlvbiBub3JtYWxpemUoKSB7CiAgICAgICAgaWYgKCF0aGlzLmlzVmFsaWQpIHJldHVybiB0aGlzOwogICAgICAgIHZhciB2YWxzID0gdGhpcy50b09iamVjdCgpOwogICAgICAgIG5vcm1hbGl6ZVZhbHVlcyh0aGlzLm1hdHJpeCwgdmFscyk7CiAgICAgICAgcmV0dXJuIGNsb25lKHRoaXMsIHsKICAgICAgICAgIHZhbHVlczogdmFscwogICAgICAgIH0sIHRydWUpOwogICAgICB9CiAgICAgIC8qKgogICAgICAgKiBDb252ZXJ0IHRoaXMgRHVyYXRpb24gaW50byBpdHMgcmVwcmVzZW50YXRpb24gaW4gYSBkaWZmZXJlbnQgc2V0IG9mIHVuaXRzLgogICAgICAgKiBAZXhhbXBsZSBEdXJhdGlvbi5mcm9tT2JqZWN0KHsgaG91cnM6IDEsIHNlY29uZHM6IDMwIH0pLnNoaWZ0VG8oJ21pbnV0ZXMnLCAnbWlsbGlzZWNvbmRzJykudG9PYmplY3QoKSAvLz0+IHsgbWludXRlczogNjAsIG1pbGxpc2Vjb25kczogMzAwMDAgfQogICAgICAgKiBAcmV0dXJuIHtEdXJhdGlvbn0KICAgICAgICovCiAgICAgIDsKCiAgICAgIF9wcm90by5zaGlmdFRvID0gZnVuY3Rpb24gc2hpZnRUbygpIHsKICAgICAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgdW5pdHMgPSBuZXcgQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7CiAgICAgICAgICB1bml0c1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTsKICAgICAgICB9CgogICAgICAgIGlmICghdGhpcy5pc1ZhbGlkKSByZXR1cm4gdGhpczsKCiAgICAgICAgaWYgKHVuaXRzLmxlbmd0aCA9PT0gMCkgewogICAgICAgICAgcmV0dXJuIHRoaXM7CiAgICAgICAgfQoKICAgICAgICB1bml0cyA9IHVuaXRzLm1hcChmdW5jdGlvbiAodSkgewogICAgICAgICAgcmV0dXJuIER1cmF0aW9uLm5vcm1hbGl6ZVVuaXQodSk7CiAgICAgICAgfSk7CiAgICAgICAgdmFyIGJ1aWx0ID0ge30sCiAgICAgICAgICAgIGFjY3VtdWxhdGVkID0ge30sCiAgICAgICAgICAgIHZhbHMgPSB0aGlzLnRvT2JqZWN0KCk7CiAgICAgICAgdmFyIGxhc3RVbml0OwoKICAgICAgICBmb3IgKHZhciBfaXRlcmF0b3IyID0gX2NyZWF0ZUZvck9mSXRlcmF0b3JIZWxwZXJMb29zZShvcmRlcmVkVW5pdHMpLCBfc3RlcDI7ICEoX3N0ZXAyID0gX2l0ZXJhdG9yMigpKS5kb25lOykgewogICAgICAgICAgdmFyIGsgPSBfc3RlcDIudmFsdWU7CgogICAgICAgICAgaWYgKHVuaXRzLmluZGV4T2YoaykgPj0gMCkgewogICAgICAgICAgICBsYXN0VW5pdCA9IGs7CiAgICAgICAgICAgIHZhciBvd24gPSAwOyAvLyBhbnl0aGluZyB3ZSBoYXZlbid0IGJvaWxlZCBkb3duIHlldCBzaG91bGQgZ2V0IGJvaWxlZCB0byB0aGlzIHVuaXQKCiAgICAgICAgICAgIGZvciAodmFyIGFrIGluIGFjY3VtdWxhdGVkKSB7CiAgICAgICAgICAgICAgb3duICs9IHRoaXMubWF0cml4W2FrXVtrXSAqIGFjY3VtdWxhdGVkW2FrXTsKICAgICAgICAgICAgICBhY2N1bXVsYXRlZFtha10gPSAwOwogICAgICAgICAgICB9IC8vIHBsdXMgYW55dGhpbmcgdGhhdCdzIGFscmVhZHkgaW4gdGhpcyB1bml0CgoKICAgICAgICAgICAgaWYgKGlzTnVtYmVyKHZhbHNba10pKSB7CiAgICAgICAgICAgICAgb3duICs9IHZhbHNba107CiAgICAgICAgICAgIH0KCiAgICAgICAgICAgIHZhciBpID0gTWF0aC50cnVuYyhvd24pOwogICAgICAgICAgICBidWlsdFtrXSA9IGk7CiAgICAgICAgICAgIGFjY3VtdWxhdGVkW2tdID0gb3duIC0gaTsgLy8gd2UnZCBsaWtlIHRvIGFic29yYiB0aGVzZSBmcmFjdGlvbnMgaW4gYW5vdGhlciB1bml0CiAgICAgICAgICAgIC8vIHBsdXMgYW55dGhpbmcgZnVydGhlciBkb3duIHRoZSBjaGFpbiB0aGF0IHNob3VsZCBiZSByb2xsZWQgdXAgaW4gdG8gdGhpcwoKICAgICAgICAgICAgZm9yICh2YXIgZG93biBpbiB2YWxzKSB7CiAgICAgICAgICAgICAgaWYgKG9yZGVyZWRVbml0cy5pbmRleE9mKGRvd24pID4gb3JkZXJlZFVuaXRzLmluZGV4T2YoaykpIHsKICAgICAgICAgICAgICAgIGNvbnZlcnQodGhpcy5tYXRyaXgsIHZhbHMsIGRvd24sIGJ1aWx0LCBrKTsKICAgICAgICAgICAgICB9CiAgICAgICAgICAgIH0gLy8gb3RoZXJ3aXNlLCBrZWVwIGl0IGluIHRoZSB3aW5ncyB0byBib2lsIGl0IGxhdGVyCgogICAgICAgICAgfSBlbHNlIGlmIChpc051bWJlcih2YWxzW2tdKSkgewogICAgICAgICAgICBhY2N1bXVsYXRlZFtrXSA9IHZhbHNba107CiAgICAgICAgICB9CiAgICAgICAgfSAvLyBhbnl0aGluZyBsZWZ0b3ZlciBiZWNvbWVzIHRoZSBkZWNpbWFsIGZvciB0aGUgbGFzdCB1bml0CiAgICAgICAgLy8gbGFzdFVuaXQgbXVzdCBiZSBkZWZpbmVkIHNpbmNlIHVuaXRzIGlzIG5vdCBlbXB0eQoKCiAgICAgICAgZm9yICh2YXIga2V5IGluIGFjY3VtdWxhdGVkKSB7CiAgICAgICAgICBpZiAoYWNjdW11bGF0ZWRba2V5XSAhPT0gMCkgewogICAgICAgICAgICBidWlsdFtsYXN0VW5pdF0gKz0ga2V5ID09PSBsYXN0VW5pdCA/IGFjY3VtdWxhdGVkW2tleV0gOiBhY2N1bXVsYXRlZFtrZXldIC8gdGhpcy5tYXRyaXhbbGFzdFVuaXRdW2tleV07CiAgICAgICAgICB9CiAgICAgICAgfQoKICAgICAgICByZXR1cm4gY2xvbmUodGhpcywgewogICAgICAgICAgdmFsdWVzOiBidWlsdAogICAgICAgIH0sIHRydWUpLm5vcm1hbGl6ZSgpOwogICAgICB9CiAgICAgIC8qKgogICAgICAgKiBSZXR1cm4gdGhlIG5lZ2F0aXZlIG9mIHRoaXMgRHVyYXRpb24uCiAgICAgICAqIEBleGFtcGxlIER1cmF0aW9uLmZyb21PYmplY3QoeyBob3VyczogMSwgc2Vjb25kczogMzAgfSkubmVnYXRlKCkudG9PYmplY3QoKSAvLz0+IHsgaG91cnM6IC0xLCBzZWNvbmRzOiAtMzAgfQogICAgICAgKiBAcmV0dXJuIHtEdXJhdGlvbn0KICAgICAgICovCiAgICAgIDsKCiAgICAgIF9wcm90by5uZWdhdGUgPSBmdW5jdGlvbiBuZWdhdGUoKSB7CiAgICAgICAgaWYgKCF0aGlzLmlzVmFsaWQpIHJldHVybiB0aGlzOwogICAgICAgIHZhciBuZWdhdGVkID0ge307CgogICAgICAgIGZvciAodmFyIF9pMiA9IDAsIF9PYmplY3Qka2V5czIgPSBPYmplY3Qua2V5cyh0aGlzLnZhbHVlcyk7IF9pMiA8IF9PYmplY3Qka2V5czIubGVuZ3RoOyBfaTIrKykgewogICAgICAgICAgdmFyIGsgPSBfT2JqZWN0JGtleXMyW19pMl07CiAgICAgICAgICBuZWdhdGVkW2tdID0gLXRoaXMudmFsdWVzW2tdOwogICAgICAgIH0KCiAgICAgICAgcmV0dXJuIGNsb25lKHRoaXMsIHsKICAgICAgICAgIHZhbHVlczogbmVnYXRlZAogICAgICAgIH0sIHRydWUpOwogICAgICB9CiAgICAgIC8qKgogICAgICAgKiBHZXQgdGhlIHllYXJzLgogICAgICAgKiBAdHlwZSB7bnVtYmVyfQogICAgICAgKi8KICAgICAgOwoKICAgICAgLyoqCiAgICAgICAqIEVxdWFsaXR5IGNoZWNrCiAgICAgICAqIFR3byBEdXJhdGlvbnMgYXJlIGVxdWFsIGlmZiB0aGV5IGhhdmUgdGhlIHNhbWUgdW5pdHMgYW5kIHRoZSBzYW1lIHZhbHVlcyBmb3IgZWFjaCB1bml0LgogICAgICAgKiBAcGFyYW0ge0R1cmF0aW9ufSBvdGhlcgogICAgICAgKiBAcmV0dXJuIHtib29sZWFufQogICAgICAgKi8KICAgICAgX3Byb3RvLmVxdWFscyA9IGZ1bmN0aW9uIGVxdWFscyhvdGhlcikgewogICAgICAgIGlmICghdGhpcy5pc1ZhbGlkIHx8ICFvdGhlci5pc1ZhbGlkKSB7CiAgICAgICAgICByZXR1cm4gZmFsc2U7CiAgICAgICAgfQoKICAgICAgICBpZiAoIXRoaXMubG9jLmVxdWFscyhvdGhlci5sb2MpKSB7CiAgICAgICAgICByZXR1cm4gZmFsc2U7CiAgICAgICAgfQoKICAgICAgICBmdW5jdGlvbiBlcSh2MSwgdjIpIHsKICAgICAgICAgIC8vIENvbnNpZGVyIDAgYW5kIHVuZGVmaW5lZCBhcyBlcXVhbAogICAgICAgICAgaWYgKHYxID09PSB1bmRlZmluZWQgfHwgdjEgPT09IDApIHJldHVybiB2MiA9PT0gdW5kZWZpbmVkIHx8IHYyID09PSAwOwogICAgICAgICAgcmV0dXJuIHYxID09PSB2MjsKICAgICAgICB9CgogICAgICAgIGZvciAodmFyIF9pdGVyYXRvcjMgPSBfY3JlYXRlRm9yT2ZJdGVyYXRvckhlbHBlckxvb3NlKG9yZGVyZWRVbml0cyksIF9zdGVwMzsgIShfc3RlcDMgPSBfaXRlcmF0b3IzKCkpLmRvbmU7KSB7CiAgICAgICAgICB2YXIgdSA9IF9zdGVwMy52YWx1ZTsKCiAgICAgICAgICBpZiAoIWVxKHRoaXMudmFsdWVzW3VdLCBvdGhlci52YWx1ZXNbdV0pKSB7CiAgICAgICAgICAgIHJldHVybiBmYWxzZTsKICAgICAgICAgIH0KICAgICAgICB9CgogICAgICAgIHJldHVybiB0cnVlOwogICAgICB9OwoKICAgICAgX2NyZWF0ZUNsYXNzKER1cmF0aW9uLCBbewogICAgICAgIGtleTogImxvY2FsZSIsCiAgICAgICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7CiAgICAgICAgICByZXR1cm4gdGhpcy5pc1ZhbGlkID8gdGhpcy5sb2MubG9jYWxlIDogbnVsbDsKICAgICAgICB9CiAgICAgICAgLyoqCiAgICAgICAgICogR2V0IHRoZSBudW1iZXJpbmcgc3lzdGVtIG9mIGEgRHVyYXRpb24sIHN1Y2ggJ2JlbmcnLiBUaGUgbnVtYmVyaW5nIHN5c3RlbSBpcyB1c2VkIHdoZW4gZm9ybWF0dGluZyB0aGUgRHVyYXRpb24KICAgICAgICAgKgogICAgICAgICAqIEB0eXBlIHtzdHJpbmd9CiAgICAgICAgICovCgogICAgICB9LCB7CiAgICAgICAga2V5OiAibnVtYmVyaW5nU3lzdGVtIiwKICAgICAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHsKICAgICAgICAgIHJldHVybiB0aGlzLmlzVmFsaWQgPyB0aGlzLmxvYy5udW1iZXJpbmdTeXN0ZW0gOiBudWxsOwogICAgICAgIH0KICAgICAgfSwgewogICAgICAgIGtleTogInllYXJzIiwKICAgICAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHsKICAgICAgICAgIHJldHVybiB0aGlzLmlzVmFsaWQgPyB0aGlzLnZhbHVlcy55ZWFycyB8fCAwIDogTmFOOwogICAgICAgIH0KICAgICAgICAvKioKICAgICAgICAgKiBHZXQgdGhlIHF1YXJ0ZXJzLgogICAgICAgICAqIEB0eXBlIHtudW1iZXJ9CiAgICAgICAgICovCgogICAgICB9LCB7CiAgICAgICAga2V5OiAicXVhcnRlcnMiLAogICAgICAgIGdldDogZnVuY3Rpb24gZ2V0KCkgewogICAgICAgICAgcmV0dXJuIHRoaXMuaXNWYWxpZCA/IHRoaXMudmFsdWVzLnF1YXJ0ZXJzIHx8IDAgOiBOYU47CiAgICAgICAgfQogICAgICAgIC8qKgogICAgICAgICAqIEdldCB0aGUgbW9udGhzLgogICAgICAgICAqIEB0eXBlIHtudW1iZXJ9CiAgICAgICAgICovCgogICAgICB9LCB7CiAgICAgICAga2V5OiAibW9udGhzIiwKICAgICAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHsKICAgICAgICAgIHJldHVybiB0aGlzLmlzVmFsaWQgPyB0aGlzLnZhbHVlcy5tb250aHMgfHwgMCA6IE5hTjsKICAgICAgICB9CiAgICAgICAgLyoqCiAgICAgICAgICogR2V0IHRoZSB3ZWVrcwogICAgICAgICAqIEB0eXBlIHtudW1iZXJ9CiAgICAgICAgICovCgogICAgICB9LCB7CiAgICAgICAga2V5OiAid2Vla3MiLAogICAgICAgIGdldDogZnVuY3Rpb24gZ2V0KCkgewogICAgICAgICAgcmV0dXJuIHRoaXMuaXNWYWxpZCA/IHRoaXMudmFsdWVzLndlZWtzIHx8IDAgOiBOYU47CiAgICAgICAgfQogICAgICAgIC8qKgogICAgICAgICAqIEdldCB0aGUgZGF5cy4KICAgICAgICAgKiBAdHlwZSB7bnVtYmVyfQogICAgICAgICAqLwoKICAgICAgfSwgewogICAgICAgIGtleTogImRheXMiLAogICAgICAgIGdldDogZnVuY3Rpb24gZ2V0KCkgewogICAgICAgICAgcmV0dXJuIHRoaXMuaXNWYWxpZCA/IHRoaXMudmFsdWVzLmRheXMgfHwgMCA6IE5hTjsKICAgICAgICB9CiAgICAgICAgLyoqCiAgICAgICAgICogR2V0IHRoZSBob3Vycy4KICAgICAgICAgKiBAdHlwZSB7bnVtYmVyfQogICAgICAgICAqLwoKICAgICAgfSwgewogICAgICAgIGtleTogImhvdXJzIiwKICAgICAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHsKICAgICAgICAgIHJldHVybiB0aGlzLmlzVmFsaWQgPyB0aGlzLnZhbHVlcy5ob3VycyB8fCAwIDogTmFOOwogICAgICAgIH0KICAgICAgICAvKioKICAgICAgICAgKiBHZXQgdGhlIG1pbnV0ZXMuCiAgICAgICAgICogQHR5cGUge251bWJlcn0KICAgICAgICAgKi8KCiAgICAgIH0sIHsKICAgICAgICBrZXk6ICJtaW51dGVzIiwKICAgICAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHsKICAgICAgICAgIHJldHVybiB0aGlzLmlzVmFsaWQgPyB0aGlzLnZhbHVlcy5taW51dGVzIHx8IDAgOiBOYU47CiAgICAgICAgfQogICAgICAgIC8qKgogICAgICAgICAqIEdldCB0aGUgc2Vjb25kcy4KICAgICAgICAgKiBAcmV0dXJuIHtudW1iZXJ9CiAgICAgICAgICovCgogICAgICB9LCB7CiAgICAgICAga2V5OiAic2Vjb25kcyIsCiAgICAgICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7CiAgICAgICAgICByZXR1cm4gdGhpcy5pc1ZhbGlkID8gdGhpcy52YWx1ZXMuc2Vjb25kcyB8fCAwIDogTmFOOwogICAgICAgIH0KICAgICAgICAvKioKICAgICAgICAgKiBHZXQgdGhlIG1pbGxpc2Vjb25kcy4KICAgICAgICAgKiBAcmV0dXJuIHtudW1iZXJ9CiAgICAgICAgICovCgogICAgICB9LCB7CiAgICAgICAga2V5OiAibWlsbGlzZWNvbmRzIiwKICAgICAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHsKICAgICAgICAgIHJldHVybiB0aGlzLmlzVmFsaWQgPyB0aGlzLnZhbHVlcy5taWxsaXNlY29uZHMgfHwgMCA6IE5hTjsKICAgICAgICB9CiAgICAgICAgLyoqCiAgICAgICAgICogUmV0dXJucyB3aGV0aGVyIHRoZSBEdXJhdGlvbiBpcyBpbnZhbGlkLiBJbnZhbGlkIGR1cmF0aW9ucyBhcmUgcmV0dXJuZWQgYnkgZGlmZiBvcGVyYXRpb25zCiAgICAgICAgICogb24gaW52YWxpZCBEYXRlVGltZXMgb3IgSW50ZXJ2YWxzLgogICAgICAgICAqIEByZXR1cm4ge2Jvb2xlYW59CiAgICAgICAgICovCgogICAgICB9LCB7CiAgICAgICAga2V5OiAiaXNWYWxpZCIsCiAgICAgICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7CiAgICAgICAgICByZXR1cm4gdGhpcy5pbnZhbGlkID09PSBudWxsOwogICAgICAgIH0KICAgICAgICAvKioKICAgICAgICAgKiBSZXR1cm5zIGFuIGVycm9yIGNvZGUgaWYgdGhpcyBEdXJhdGlvbiBiZWNhbWUgaW52YWxpZCwgb3IgbnVsbCBpZiB0aGUgRHVyYXRpb24gaXMgdmFsaWQKICAgICAgICAgKiBAcmV0dXJuIHtzdHJpbmd9CiAgICAgICAgICovCgogICAgICB9LCB7CiAgICAgICAga2V5OiAiaW52YWxpZFJlYXNvbiIsCiAgICAgICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7CiAgICAgICAgICByZXR1cm4gdGhpcy5pbnZhbGlkID8gdGhpcy5pbnZhbGlkLnJlYXNvbiA6IG51bGw7CiAgICAgICAgfQogICAgICAgIC8qKgogICAgICAgICAqIFJldHVybnMgYW4gZXhwbGFuYXRpb24gb2Ygd2h5IHRoaXMgRHVyYXRpb24gYmVjYW1lIGludmFsaWQsIG9yIG51bGwgaWYgdGhlIER1cmF0aW9uIGlzIHZhbGlkCiAgICAgICAgICogQHR5cGUge3N0cmluZ30KICAgICAgICAgKi8KCiAgICAgIH0sIHsKICAgICAgICBrZXk6ICJpbnZhbGlkRXhwbGFuYXRpb24iLAogICAgICAgIGdldDogZnVuY3Rpb24gZ2V0KCkgewogICAgICAgICAgcmV0dXJuIHRoaXMuaW52YWxpZCA/IHRoaXMuaW52YWxpZC5leHBsYW5hdGlvbiA6IG51bGw7CiAgICAgICAgfQogICAgICB9XSk7CgogICAgICByZXR1cm4gRHVyYXRpb247CiAgICB9KCk7CiAgICBmdW5jdGlvbiBmcmllbmRseUR1cmF0aW9uKGR1cmF0aW9uaXNoKSB7CiAgICAgIGlmIChpc051bWJlcihkdXJhdGlvbmlzaCkpIHsKICAgICAgICByZXR1cm4gRHVyYXRpb24uZnJvbU1pbGxpcyhkdXJhdGlvbmlzaCk7CiAgICAgIH0gZWxzZSBpZiAoRHVyYXRpb24uaXNEdXJhdGlvbihkdXJhdGlvbmlzaCkpIHsKICAgICAgICByZXR1cm4gZHVyYXRpb25pc2g7CiAgICAgIH0gZWxzZSBpZiAodHlwZW9mIGR1cmF0aW9uaXNoID09PSAib2JqZWN0IikgewogICAgICAgIHJldHVybiBEdXJhdGlvbi5mcm9tT2JqZWN0KGR1cmF0aW9uaXNoKTsKICAgICAgfSBlbHNlIHsKICAgICAgICB0aHJvdyBuZXcgSW52YWxpZEFyZ3VtZW50RXJyb3IoIlVua25vd24gZHVyYXRpb24gYXJndW1lbnQgIiArIGR1cmF0aW9uaXNoICsgIiBvZiB0eXBlICIgKyB0eXBlb2YgZHVyYXRpb25pc2gpOwogICAgICB9CiAgICB9CgogICAgdmFyIElOVkFMSUQkMSA9ICJJbnZhbGlkIEludGVydmFsIjsgLy8gY2hlY2tzIGlmIHRoZSBzdGFydCBpcyBlcXVhbCB0byBvciBiZWZvcmUgdGhlIGVuZAoKICAgIGZ1bmN0aW9uIHZhbGlkYXRlU3RhcnRFbmQoc3RhcnQsIGVuZCkgewogICAgICBpZiAoIXN0YXJ0IHx8ICFzdGFydC5pc1ZhbGlkKSB7CiAgICAgICAgcmV0dXJuIEludGVydmFsLmludmFsaWQoIm1pc3Npbmcgb3IgaW52YWxpZCBzdGFydCIpOwogICAgICB9IGVsc2UgaWYgKCFlbmQgfHwgIWVuZC5pc1ZhbGlkKSB7CiAgICAgICAgcmV0dXJuIEludGVydmFsLmludmFsaWQoIm1pc3Npbmcgb3IgaW52YWxpZCBlbmQiKTsKICAgICAgfSBlbHNlIGlmIChlbmQgPCBzdGFydCkgewogICAgICAgIHJldHVybiBJbnRlcnZhbC5pbnZhbGlkKCJlbmQgYmVmb3JlIHN0YXJ0IiwgIlRoZSBlbmQgb2YgYW4gaW50ZXJ2YWwgbXVzdCBiZSBhZnRlciBpdHMgc3RhcnQsIGJ1dCB5b3UgaGFkIHN0YXJ0PSIgKyBzdGFydC50b0lTTygpICsgIiBhbmQgZW5kPSIgKyBlbmQudG9JU08oKSk7CiAgICAgIH0gZWxzZSB7CiAgICAgICAgcmV0dXJuIG51bGw7CiAgICAgIH0KICAgIH0KICAgIC8qKgogICAgICogQW4gSW50ZXJ2YWwgb2JqZWN0IHJlcHJlc2VudHMgYSBoYWxmLW9wZW4gaW50ZXJ2YWwgb2YgdGltZSwgd2hlcmUgZWFjaCBlbmRwb2ludCBpcyBhIHtAbGluayBEYXRlVGltZX0uIENvbmNlcHR1YWxseSwgaXQncyBhIGNvbnRhaW5lciBmb3IgdGhvc2UgdHdvIGVuZHBvaW50cywgYWNjb21wYW5pZWQgYnkgbWV0aG9kcyBmb3IgY3JlYXRpbmcsIHBhcnNpbmcsIGludGVycm9nYXRpbmcsIGNvbXBhcmluZywgdHJhbnNmb3JtaW5nLCBhbmQgZm9ybWF0dGluZyB0aGVtLgogICAgICoKICAgICAqIEhlcmUgaXMgYSBicmllZiBvdmVydmlldyBvZiB0aGUgbW9zdCBjb21tb25seSB1c2VkIG1ldGhvZHMgYW5kIGdldHRlcnMgaW4gSW50ZXJ2YWw6CiAgICAgKgogICAgICogKiAqKkNyZWF0aW9uKiogVG8gY3JlYXRlIGFuIEludGVydmFsLCB1c2Uge0BsaW5rIGZyb21EYXRlVGltZXN9LCB7QGxpbmsgYWZ0ZXJ9LCB7QGxpbmsgYmVmb3JlfSwgb3Ige0BsaW5rIGZyb21JU099LgogICAgICogKiAqKkFjY2Vzc29ycyoqIFVzZSB7QGxpbmsgc3RhcnR9IGFuZCB7QGxpbmsgZW5kfSB0byBnZXQgdGhlIHN0YXJ0IGFuZCBlbmQuCiAgICAgKiAqICoqSW50ZXJyb2dhdGlvbioqIFRvIGFuYWx5emUgdGhlIEludGVydmFsLCB1c2Uge0BsaW5rIGNvdW50fSwge0BsaW5rIGxlbmd0aH0sIHtAbGluayBoYXNTYW1lfSwge0BsaW5rIGNvbnRhaW5zfSwge0BsaW5rIGlzQWZ0ZXJ9LCBvciB7QGxpbmsgaXNCZWZvcmV9LgogICAgICogKiAqKlRyYW5zZm9ybWF0aW9uKiogVG8gY3JlYXRlIG90aGVyIEludGVydmFscyBvdXQgb2YgdGhpcyBvbmUsIHVzZSB7QGxpbmsgc2V0fSwge0BsaW5rIHNwbGl0QXR9LCB7QGxpbmsgc3BsaXRCeX0sIHtAbGluayBkaXZpZGVFcXVhbGx5fSwge0BsaW5rIG1lcmdlfSwge0BsaW5rIHhvcn0sIHtAbGluayB1bmlvbn0sIHtAbGluayBpbnRlcnNlY3Rpb259LCBvciB7QGxpbmsgZGlmZmVyZW5jZX0uCiAgICAgKiAqICoqQ29tcGFyaXNvbioqIFRvIGNvbXBhcmUgdGhpcyBJbnRlcnZhbCB0byBhbm90aGVyIG9uZSwgdXNlIHtAbGluayBlcXVhbHN9LCB7QGxpbmsgb3ZlcmxhcHN9LCB7QGxpbmsgYWJ1dHNTdGFydH0sIHtAbGluayBhYnV0c0VuZH0sIHtAbGluayBlbmd1bGZzfS4KICAgICAqICogKipPdXRwdXQqKiBUbyBjb252ZXJ0IHRoZSBJbnRlcnZhbCBpbnRvIG90aGVyIHJlcHJlc2VudGF0aW9ucywgc2VlIHtAbGluayB0b1N0cmluZ30sIHtAbGluayB0b0lTT30sIHtAbGluayB0b0lTT0RhdGV9LCB7QGxpbmsgdG9JU09UaW1lfSwge0BsaW5rIHRvRm9ybWF0fSwgYW5kIHtAbGluayB0b0R1cmF0aW9ufS4KICAgICAqLwoKCiAgICB2YXIgSW50ZXJ2YWwgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKCkgewogICAgICAvKioKICAgICAgICogQHByaXZhdGUKICAgICAgICovCiAgICAgIGZ1bmN0aW9uIEludGVydmFsKGNvbmZpZykgewogICAgICAgIC8qKgogICAgICAgICAqIEBhY2Nlc3MgcHJpdmF0ZQogICAgICAgICAqLwogICAgICAgIHRoaXMucyA9IGNvbmZpZy5zdGFydDsKICAgICAgICAvKioKICAgICAgICAgKiBAYWNjZXNzIHByaXZhdGUKICAgICAgICAgKi8KCiAgICAgICAgdGhpcy5lID0gY29uZmlnLmVuZDsKICAgICAgICAvKioKICAgICAgICAgKiBAYWNjZXNzIHByaXZhdGUKICAgICAgICAgKi8KCiAgICAgICAgdGhpcy5pbnZhbGlkID0gY29uZmlnLmludmFsaWQgfHwgbnVsbDsKICAgICAgICAvKioKICAgICAgICAgKiBAYWNjZXNzIHByaXZhdGUKICAgICAgICAgKi8KCiAgICAgICAgdGhpcy5pc0x1eG9uSW50ZXJ2YWwgPSB0cnVlOwogICAgICB9CiAgICAgIC8qKgogICAgICAgKiBDcmVhdGUgYW4gaW52YWxpZCBJbnRlcnZhbC4KICAgICAgICogQHBhcmFtIHtzdHJpbmd9IHJlYXNvbiAtIHNpbXBsZSBzdHJpbmcgb2Ygd2h5IHRoaXMgSW50ZXJ2YWwgaXMgaW52YWxpZC4gU2hvdWxkIG5vdCBjb250YWluIHBhcmFtZXRlcnMgb3IgYW55dGhpbmcgZWxzZSBkYXRhLWRlcGVuZGVudAogICAgICAgKiBAcGFyYW0ge3N0cmluZ30gW2V4cGxhbmF0aW9uPW51bGxdIC0gbG9uZ2VyIGV4cGxhbmF0aW9uLCBtYXkgaW5jbHVkZSBwYXJhbWV0ZXJzIGFuZCBvdGhlciB1c2VmdWwgZGVidWdnaW5nIGluZm9ybWF0aW9uCiAgICAgICAqIEByZXR1cm4ge0ludGVydmFsfQogICAgICAgKi8KCgogICAgICBJbnRlcnZhbC5pbnZhbGlkID0gZnVuY3Rpb24gaW52YWxpZChyZWFzb24sIGV4cGxhbmF0aW9uKSB7CiAgICAgICAgaWYgKGV4cGxhbmF0aW9uID09PSB2b2lkIDApIHsKICAgICAgICAgIGV4cGxhbmF0aW9uID0gbnVsbDsKICAgICAgICB9CgogICAgICAgIGlmICghcmVhc29uKSB7CiAgICAgICAgICB0aHJvdyBuZXcgSW52YWxpZEFyZ3VtZW50RXJyb3IoIm5lZWQgdG8gc3BlY2lmeSBhIHJlYXNvbiB0aGUgSW50ZXJ2YWwgaXMgaW52YWxpZCIpOwogICAgICAgIH0KCiAgICAgICAgdmFyIGludmFsaWQgPSByZWFzb24gaW5zdGFuY2VvZiBJbnZhbGlkID8gcmVhc29uIDogbmV3IEludmFsaWQocmVhc29uLCBleHBsYW5hdGlvbik7CgogICAgICAgIGlmIChTZXR0aW5ncy50aHJvd09uSW52YWxpZCkgewogICAgICAgICAgdGhyb3cgbmV3IEludmFsaWRJbnRlcnZhbEVycm9yKGludmFsaWQpOwogICAgICAgIH0gZWxzZSB7CiAgICAgICAgICByZXR1cm4gbmV3IEludGVydmFsKHsKICAgICAgICAgICAgaW52YWxpZDogaW52YWxpZAogICAgICAgICAgfSk7CiAgICAgICAgfQogICAgICB9CiAgICAgIC8qKgogICAgICAgKiBDcmVhdGUgYW4gSW50ZXJ2YWwgZnJvbSBhIHN0YXJ0IERhdGVUaW1lIGFuZCBhbiBlbmQgRGF0ZVRpbWUuIEluY2x1c2l2ZSBvZiB0aGUgc3RhcnQgYnV0IG5vdCB0aGUgZW5kLgogICAgICAgKiBAcGFyYW0ge0RhdGVUaW1lfERhdGV8T2JqZWN0fSBzdGFydAogICAgICAgKiBAcGFyYW0ge0RhdGVUaW1lfERhdGV8T2JqZWN0fSBlbmQKICAgICAgICogQHJldHVybiB7SW50ZXJ2YWx9CiAgICAgICAqLwogICAgICA7CgogICAgICBJbnRlcnZhbC5mcm9tRGF0ZVRpbWVzID0gZnVuY3Rpb24gZnJvbURhdGVUaW1lcyhzdGFydCwgZW5kKSB7CiAgICAgICAgdmFyIGJ1aWx0U3RhcnQgPSBmcmllbmRseURhdGVUaW1lKHN0YXJ0KSwKICAgICAgICAgICAgYnVpbHRFbmQgPSBmcmllbmRseURhdGVUaW1lKGVuZCk7CiAgICAgICAgdmFyIHZhbGlkYXRlRXJyb3IgPSB2YWxpZGF0ZVN0YXJ0RW5kKGJ1aWx0U3RhcnQsIGJ1aWx0RW5kKTsKCiAgICAgICAgaWYgKHZhbGlkYXRlRXJyb3IgPT0gbnVsbCkgewogICAgICAgICAgcmV0dXJuIG5ldyBJbnRlcnZhbCh7CiAgICAgICAgICAgIHN0YXJ0OiBidWlsdFN0YXJ0LAogICAgICAgICAgICBlbmQ6IGJ1aWx0RW5kCiAgICAgICAgICB9KTsKICAgICAgICB9IGVsc2UgewogICAgICAgICAgcmV0dXJuIHZhbGlkYXRlRXJyb3I7CiAgICAgICAgfQogICAgICB9CiAgICAgIC8qKgogICAgICAgKiBDcmVhdGUgYW4gSW50ZXJ2YWwgZnJvbSBhIHN0YXJ0IERhdGVUaW1lIGFuZCBhIER1cmF0aW9uIHRvIGV4dGVuZCB0by4KICAgICAgICogQHBhcmFtIHtEYXRlVGltZXxEYXRlfE9iamVjdH0gc3RhcnQKICAgICAgICogQHBhcmFtIHtEdXJhdGlvbnxPYmplY3R8bnVtYmVyfSBkdXJhdGlvbiAtIHRoZSBsZW5ndGggb2YgdGhlIEludGVydmFsLgogICAgICAgKiBAcmV0dXJuIHtJbnRlcnZhbH0KICAgICAgICovCiAgICAgIDsKCiAgICAgIEludGVydmFsLmFmdGVyID0gZnVuY3Rpb24gYWZ0ZXIoc3RhcnQsIGR1cmF0aW9uKSB7CiAgICAgICAgdmFyIGR1ciA9IGZyaWVuZGx5RHVyYXRpb24oZHVyYXRpb24pLAogICAgICAgICAgICBkdCA9IGZyaWVuZGx5RGF0ZVRpbWUoc3RhcnQpOwogICAgICAgIHJldHVybiBJbnRlcnZhbC5mcm9tRGF0ZVRpbWVzKGR0LCBkdC5wbHVzKGR1cikpOwogICAgICB9CiAgICAgIC8qKgogICAgICAgKiBDcmVhdGUgYW4gSW50ZXJ2YWwgZnJvbSBhbiBlbmQgRGF0ZVRpbWUgYW5kIGEgRHVyYXRpb24gdG8gZXh0ZW5kIGJhY2t3YXJkcyB0by4KICAgICAgICogQHBhcmFtIHtEYXRlVGltZXxEYXRlfE9iamVjdH0gZW5kCiAgICAgICAqIEBwYXJhbSB7RHVyYXRpb258T2JqZWN0fG51bWJlcn0gZHVyYXRpb24gLSB0aGUgbGVuZ3RoIG9mIHRoZSBJbnRlcnZhbC4KICAgICAgICogQHJldHVybiB7SW50ZXJ2YWx9CiAgICAgICAqLwogICAgICA7CgogICAgICBJbnRlcnZhbC5iZWZvcmUgPSBmdW5jdGlvbiBiZWZvcmUoZW5kLCBkdXJhdGlvbikgewogICAgICAgIHZhciBkdXIgPSBmcmllbmRseUR1cmF0aW9uKGR1cmF0aW9uKSwKICAgICAgICAgICAgZHQgPSBmcmllbmRseURhdGVUaW1lKGVuZCk7CiAgICAgICAgcmV0dXJuIEludGVydmFsLmZyb21EYXRlVGltZXMoZHQubWludXMoZHVyKSwgZHQpOwogICAgICB9CiAgICAgIC8qKgogICAgICAgKiBDcmVhdGUgYW4gSW50ZXJ2YWwgZnJvbSBhbiBJU08gODYwMSBzdHJpbmcuCiAgICAgICAqIEFjY2VwdHMgYDxzdGFydD4vPGVuZD5gLCBgPHN0YXJ0Pi88ZHVyYXRpb24+YCwgYW5kIGA8ZHVyYXRpb24+LzxlbmQ+YCBmb3JtYXRzLgogICAgICAgKiBAcGFyYW0ge3N0cmluZ30gdGV4dCAtIHRoZSBJU08gc3RyaW5nIHRvIHBhcnNlCiAgICAgICAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0c10gLSBvcHRpb25zIHRvIHBhc3Mge0BsaW5rIERhdGVUaW1lLmZyb21JU099IGFuZCBvcHRpb25hbGx5IHtAbGluayBEdXJhdGlvbi5mcm9tSVNPfQogICAgICAgKiBAc2VlIGh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL0lTT184NjAxI1RpbWVfaW50ZXJ2YWxzCiAgICAgICAqIEByZXR1cm4ge0ludGVydmFsfQogICAgICAgKi8KICAgICAgOwoKICAgICAgSW50ZXJ2YWwuZnJvbUlTTyA9IGZ1bmN0aW9uIGZyb21JU08odGV4dCwgb3B0cykgewogICAgICAgIHZhciBfc3BsaXQgPSAodGV4dCB8fCAiIikuc3BsaXQoIi8iLCAyKSwKICAgICAgICAgICAgcyA9IF9zcGxpdFswXSwKICAgICAgICAgICAgZSA9IF9zcGxpdFsxXTsKCiAgICAgICAgaWYgKHMgJiYgZSkgewogICAgICAgICAgdmFyIHN0YXJ0LCBzdGFydElzVmFsaWQ7CgogICAgICAgICAgdHJ5IHsKICAgICAgICAgICAgc3RhcnQgPSBEYXRlVGltZS5mcm9tSVNPKHMsIG9wdHMpOwogICAgICAgICAgICBzdGFydElzVmFsaWQgPSBzdGFydC5pc1ZhbGlkOwogICAgICAgICAgfSBjYXRjaCAoZSkgewogICAgICAgICAgICBzdGFydElzVmFsaWQgPSBmYWxzZTsKICAgICAgICAgIH0KCiAgICAgICAgICB2YXIgZW5kLCBlbmRJc1ZhbGlkOwoKICAgICAgICAgIHRyeSB7CiAgICAgICAgICAgIGVuZCA9IERhdGVUaW1lLmZyb21JU08oZSwgb3B0cyk7CiAgICAgICAgICAgIGVuZElzVmFsaWQgPSBlbmQuaXNWYWxpZDsKICAgICAgICAgIH0gY2F0Y2ggKGUpIHsKICAgICAgICAgICAgZW5kSXNWYWxpZCA9IGZhbHNlOwogICAgICAgICAgfQoKICAgICAgICAgIGlmIChzdGFydElzVmFsaWQgJiYgZW5kSXNWYWxpZCkgewogICAgICAgICAgICByZXR1cm4gSW50ZXJ2YWwuZnJvbURhdGVUaW1lcyhzdGFydCwgZW5kKTsKICAgICAgICAgIH0KCiAgICAgICAgICBpZiAoc3RhcnRJc1ZhbGlkKSB7CiAgICAgICAgICAgIHZhciBkdXIgPSBEdXJhdGlvbi5mcm9tSVNPKGUsIG9wdHMpOwoKICAgICAgICAgICAgaWYgKGR1ci5pc1ZhbGlkKSB7CiAgICAgICAgICAgICAgcmV0dXJuIEludGVydmFsLmFmdGVyKHN0YXJ0LCBkdXIpOwogICAgICAgICAgICB9CiAgICAgICAgICB9IGVsc2UgaWYgKGVuZElzVmFsaWQpIHsKICAgICAgICAgICAgdmFyIF9kdXIgPSBEdXJhdGlvbi5mcm9tSVNPKHMsIG9wdHMpOwoKICAgICAgICAgICAgaWYgKF9kdXIuaXNWYWxpZCkgewogICAgICAgICAgICAgIHJldHVybiBJbnRlcnZhbC5iZWZvcmUoZW5kLCBfZHVyKTsKICAgICAgICAgICAgfQogICAgICAgICAgfQogICAgICAgIH0KCiAgICAgICAgcmV0dXJuIEludGVydmFsLmludmFsaWQoInVucGFyc2FibGUiLCAidGhlIGlucHV0IFwiIiArIHRleHQgKyAiXCIgY2FuJ3QgYmUgcGFyc2VkIGFzIElTTyA4NjAxIik7CiAgICAgIH0KICAgICAgLyoqCiAgICAgICAqIENoZWNrIGlmIGFuIG9iamVjdCBpcyBhbiBJbnRlcnZhbC4gV29ya3MgYWNyb3NzIGNvbnRleHQgYm91bmRhcmllcwogICAgICAgKiBAcGFyYW0ge29iamVjdH0gbwogICAgICAgKiBAcmV0dXJuIHtib29sZWFufQogICAgICAgKi8KICAgICAgOwoKICAgICAgSW50ZXJ2YWwuaXNJbnRlcnZhbCA9IGZ1bmN0aW9uIGlzSW50ZXJ2YWwobykgewogICAgICAgIHJldHVybiBvICYmIG8uaXNMdXhvbkludGVydmFsIHx8IGZhbHNlOwogICAgICB9CiAgICAgIC8qKgogICAgICAgKiBSZXR1cm5zIHRoZSBzdGFydCBvZiB0aGUgSW50ZXJ2YWwKICAgICAgICogQHR5cGUge0RhdGVUaW1lfQogICAgICAgKi8KICAgICAgOwoKICAgICAgdmFyIF9wcm90byA9IEludGVydmFsLnByb3RvdHlwZTsKCiAgICAgIC8qKgogICAgICAgKiBSZXR1cm5zIHRoZSBsZW5ndGggb2YgdGhlIEludGVydmFsIGluIHRoZSBzcGVjaWZpZWQgdW5pdC4KICAgICAgICogQHBhcmFtIHtzdHJpbmd9IHVuaXQgLSB0aGUgdW5pdCAoc3VjaCBhcyAnaG91cnMnIG9yICdkYXlzJykgdG8gcmV0dXJuIHRoZSBsZW5ndGggaW4uCiAgICAgICAqIEByZXR1cm4ge251bWJlcn0KICAgICAgICovCiAgICAgIF9wcm90by5sZW5ndGggPSBmdW5jdGlvbiBsZW5ndGgodW5pdCkgewogICAgICAgIGlmICh1bml0ID09PSB2b2lkIDApIHsKICAgICAgICAgIHVuaXQgPSAibWlsbGlzZWNvbmRzIjsKICAgICAgICB9CgogICAgICAgIHJldHVybiB0aGlzLmlzVmFsaWQgPyB0aGlzLnRvRHVyYXRpb24uYXBwbHkodGhpcywgW3VuaXRdKS5nZXQodW5pdCkgOiBOYU47CiAgICAgIH0KICAgICAgLyoqCiAgICAgICAqIFJldHVybnMgdGhlIGNvdW50IG9mIG1pbnV0ZXMsIGhvdXJzLCBkYXlzLCBtb250aHMsIG9yIHllYXJzIGluY2x1ZGVkIGluIHRoZSBJbnRlcnZhbCwgZXZlbiBpbiBwYXJ0LgogICAgICAgKiBVbmxpa2Uge0BsaW5rIGxlbmd0aH0gdGhpcyBjb3VudHMgc2VjdGlvbnMgb2YgdGhlIGNhbGVuZGFyLCBub3QgcGVyaW9kcyBvZiB0aW1lLCBlLmcuIHNwZWNpZnlpbmcgJ2RheScKICAgICAgICogYXNrcyAnd2hhdCBkYXRlcyBhcmUgaW5jbHVkZWQgaW4gdGhpcyBpbnRlcnZhbD8nLCBub3QgJ2hvdyBtYW55IGRheXMgbG9uZyBpcyB0aGlzIGludGVydmFsPycKICAgICAgICogQHBhcmFtIHtzdHJpbmd9IFt1bml0PSdtaWxsaXNlY29uZHMnXSAtIHRoZSB1bml0IG9mIHRpbWUgdG8gY291bnQuCiAgICAgICAqIEByZXR1cm4ge251bWJlcn0KICAgICAgICovCiAgICAgIDsKCiAgICAgIF9wcm90by5jb3VudCA9IGZ1bmN0aW9uIGNvdW50KHVuaXQpIHsKICAgICAgICBpZiAodW5pdCA9PT0gdm9pZCAwKSB7CiAgICAgICAgICB1bml0ID0gIm1pbGxpc2Vjb25kcyI7CiAgICAgICAgfQoKICAgICAgICBpZiAoIXRoaXMuaXNWYWxpZCkgcmV0dXJuIE5hTjsKICAgICAgICB2YXIgc3RhcnQgPSB0aGlzLnN0YXJ0LnN0YXJ0T2YodW5pdCksCiAgICAgICAgICAgIGVuZCA9IHRoaXMuZW5kLnN0YXJ0T2YodW5pdCk7CiAgICAgICAgcmV0dXJuIE1hdGguZmxvb3IoZW5kLmRpZmYoc3RhcnQsIHVuaXQpLmdldCh1bml0KSkgKyAxOwogICAgICB9CiAgICAgIC8qKgogICAgICAgKiBSZXR1cm5zIHdoZXRoZXIgdGhpcyBJbnRlcnZhbCdzIHN0YXJ0IGFuZCBlbmQgYXJlIGJvdGggaW4gdGhlIHNhbWUgdW5pdCBvZiB0aW1lCiAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSB1bml0IC0gdGhlIHVuaXQgb2YgdGltZSB0byBjaGVjayBzYW1lbmVzcyBvbgogICAgICAgKiBAcmV0dXJuIHtib29sZWFufQogICAgICAgKi8KICAgICAgOwoKICAgICAgX3Byb3RvLmhhc1NhbWUgPSBmdW5jdGlvbiBoYXNTYW1lKHVuaXQpIHsKICAgICAgICByZXR1cm4gdGhpcy5pc1ZhbGlkID8gdGhpcy5pc0VtcHR5KCkgfHwgdGhpcy5lLm1pbnVzKDEpLmhhc1NhbWUodGhpcy5zLCB1bml0KSA6IGZhbHNlOwogICAgICB9CiAgICAgIC8qKgogICAgICAgKiBSZXR1cm4gd2hldGhlciB0aGlzIEludGVydmFsIGhhcyB0aGUgc2FtZSBzdGFydCBhbmQgZW5kIERhdGVUaW1lcy4KICAgICAgICogQHJldHVybiB7Ym9vbGVhbn0KICAgICAgICovCiAgICAgIDsKCiAgICAgIF9wcm90by5pc0VtcHR5ID0gZnVuY3Rpb24gaXNFbXB0eSgpIHsKICAgICAgICByZXR1cm4gdGhpcy5zLnZhbHVlT2YoKSA9PT0gdGhpcy5lLnZhbHVlT2YoKTsKICAgICAgfQogICAgICAvKioKICAgICAgICogUmV0dXJuIHdoZXRoZXIgdGhpcyBJbnRlcnZhbCdzIHN0YXJ0IGlzIGFmdGVyIHRoZSBzcGVjaWZpZWQgRGF0ZVRpbWUuCiAgICAgICAqIEBwYXJhbSB7RGF0ZVRpbWV9IGRhdGVUaW1lCiAgICAgICAqIEByZXR1cm4ge2Jvb2xlYW59CiAgICAgICAqLwogICAgICA7CgogICAgICBfcHJvdG8uaXNBZnRlciA9IGZ1bmN0aW9uIGlzQWZ0ZXIoZGF0ZVRpbWUpIHsKICAgICAgICBpZiAoIXRoaXMuaXNWYWxpZCkgcmV0dXJuIGZhbHNlOwogICAgICAgIHJldHVybiB0aGlzLnMgPiBkYXRlVGltZTsKICAgICAgfQogICAgICAvKioKICAgICAgICogUmV0dXJuIHdoZXRoZXIgdGhpcyBJbnRlcnZhbCdzIGVuZCBpcyBiZWZvcmUgdGhlIHNwZWNpZmllZCBEYXRlVGltZS4KICAgICAgICogQHBhcmFtIHtEYXRlVGltZX0gZGF0ZVRpbWUKICAgICAgICogQHJldHVybiB7Ym9vbGVhbn0KICAgICAgICovCiAgICAgIDsKCiAgICAgIF9wcm90by5pc0JlZm9yZSA9IGZ1bmN0aW9uIGlzQmVmb3JlKGRhdGVUaW1lKSB7CiAgICAgICAgaWYgKCF0aGlzLmlzVmFsaWQpIHJldHVybiBmYWxzZTsKICAgICAgICByZXR1cm4gdGhpcy5lIDw9IGRhdGVUaW1lOwogICAgICB9CiAgICAgIC8qKgogICAgICAgKiBSZXR1cm4gd2hldGhlciB0aGlzIEludGVydmFsIGNvbnRhaW5zIHRoZSBzcGVjaWZpZWQgRGF0ZVRpbWUuCiAgICAgICAqIEBwYXJhbSB7RGF0ZVRpbWV9IGRhdGVUaW1lCiAgICAgICAqIEByZXR1cm4ge2Jvb2xlYW59CiAgICAgICAqLwogICAgICA7CgogICAgICBfcHJvdG8uY29udGFpbnMgPSBmdW5jdGlvbiBjb250YWlucyhkYXRlVGltZSkgewogICAgICAgIGlmICghdGhpcy5pc1ZhbGlkKSByZXR1cm4gZmFsc2U7CiAgICAgICAgcmV0dXJuIHRoaXMucyA8PSBkYXRlVGltZSAmJiB0aGlzLmUgPiBkYXRlVGltZTsKICAgICAgfQogICAgICAvKioKICAgICAgICogIlNldHMiIHRoZSBzdGFydCBhbmQvb3IgZW5kIGRhdGVzLiBSZXR1cm5zIGEgbmV3bHktY29uc3RydWN0ZWQgSW50ZXJ2YWwuCiAgICAgICAqIEBwYXJhbSB7T2JqZWN0fSB2YWx1ZXMgLSB0aGUgdmFsdWVzIHRvIHNldAogICAgICAgKiBAcGFyYW0ge0RhdGVUaW1lfSB2YWx1ZXMuc3RhcnQgLSB0aGUgc3RhcnRpbmcgRGF0ZVRpbWUKICAgICAgICogQHBhcmFtIHtEYXRlVGltZX0gdmFsdWVzLmVuZCAtIHRoZSBlbmRpbmcgRGF0ZVRpbWUKICAgICAgICogQHJldHVybiB7SW50ZXJ2YWx9CiAgICAgICAqLwogICAgICA7CgogICAgICBfcHJvdG8uc2V0ID0gZnVuY3Rpb24gc2V0KF90ZW1wKSB7CiAgICAgICAgdmFyIF9yZWYgPSBfdGVtcCA9PT0gdm9pZCAwID8ge30gOiBfdGVtcCwKICAgICAgICAgICAgc3RhcnQgPSBfcmVmLnN0YXJ0LAogICAgICAgICAgICBlbmQgPSBfcmVmLmVuZDsKCiAgICAgICAgaWYgKCF0aGlzLmlzVmFsaWQpIHJldHVybiB0aGlzOwogICAgICAgIHJldHVybiBJbnRlcnZhbC5mcm9tRGF0ZVRpbWVzKHN0YXJ0IHx8IHRoaXMucywgZW5kIHx8IHRoaXMuZSk7CiAgICAgIH0KICAgICAgLyoqCiAgICAgICAqIFNwbGl0IHRoaXMgSW50ZXJ2YWwgYXQgZWFjaCBvZiB0aGUgc3BlY2lmaWVkIERhdGVUaW1lcwogICAgICAgKiBAcGFyYW0gey4uLltEYXRlVGltZV19IGRhdGVUaW1lcyAtIHRoZSB1bml0IG9mIHRpbWUgdG8gY291bnQuCiAgICAgICAqIEByZXR1cm4ge1tJbnRlcnZhbF19CiAgICAgICAqLwogICAgICA7CgogICAgICBfcHJvdG8uc3BsaXRBdCA9IGZ1bmN0aW9uIHNwbGl0QXQoKSB7CiAgICAgICAgdmFyIF90aGlzID0gdGhpczsKCiAgICAgICAgaWYgKCF0aGlzLmlzVmFsaWQpIHJldHVybiBbXTsKCiAgICAgICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGRhdGVUaW1lcyA9IG5ldyBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHsKICAgICAgICAgIGRhdGVUaW1lc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTsKICAgICAgICB9CgogICAgICAgIHZhciBzb3J0ZWQgPSBkYXRlVGltZXMubWFwKGZyaWVuZGx5RGF0ZVRpbWUpLmZpbHRlcihmdW5jdGlvbiAoZCkgewogICAgICAgICAgcmV0dXJuIF90aGlzLmNvbnRhaW5zKGQpOwogICAgICAgIH0pLnNvcnQoKSwKICAgICAgICAgICAgcmVzdWx0cyA9IFtdOwogICAgICAgIHZhciBzID0gdGhpcy5zLAogICAgICAgICAgICBpID0gMDsKCiAgICAgICAgd2hpbGUgKHMgPCB0aGlzLmUpIHsKICAgICAgICAgIHZhciBhZGRlZCA9IHNvcnRlZFtpXSB8fCB0aGlzLmUsCiAgICAgICAgICAgICAgbmV4dCA9ICthZGRlZCA+ICt0aGlzLmUgPyB0aGlzLmUgOiBhZGRlZDsKICAgICAgICAgIHJlc3VsdHMucHVzaChJbnRlcnZhbC5mcm9tRGF0ZVRpbWVzKHMsIG5leHQpKTsKICAgICAgICAgIHMgPSBuZXh0OwogICAgICAgICAgaSArPSAxOwogICAgICAgIH0KCiAgICAgICAgcmV0dXJuIHJlc3VsdHM7CiAgICAgIH0KICAgICAgLyoqCiAgICAgICAqIFNwbGl0IHRoaXMgSW50ZXJ2YWwgaW50byBzbWFsbGVyIEludGVydmFscywgZWFjaCBvZiB0aGUgc3BlY2lmaWVkIGxlbmd0aC4KICAgICAgICogTGVmdCBvdmVyIHRpbWUgaXMgZ3JvdXBlZCBpbnRvIGEgc21hbGxlciBpbnRlcnZhbAogICAgICAgKiBAcGFyYW0ge0R1cmF0aW9ufE9iamVjdHxudW1iZXJ9IGR1cmF0aW9uIC0gVGhlIGxlbmd0aCBvZiBlYWNoIHJlc3VsdGluZyBpbnRlcnZhbC4KICAgICAgICogQHJldHVybiB7W0ludGVydmFsXX0KICAgICAgICovCiAgICAgIDsKCiAgICAgIF9wcm90by5zcGxpdEJ5ID0gZnVuY3Rpb24gc3BsaXRCeShkdXJhdGlvbikgewogICAgICAgIHZhciBkdXIgPSBmcmllbmRseUR1cmF0aW9uKGR1cmF0aW9uKTsKCiAgICAgICAgaWYgKCF0aGlzLmlzVmFsaWQgfHwgIWR1ci5pc1ZhbGlkIHx8IGR1ci5hcygibWlsbGlzZWNvbmRzIikgPT09IDApIHsKICAgICAgICAgIHJldHVybiBbXTsKICAgICAgICB9CgogICAgICAgIHZhciBzID0gdGhpcy5zLAogICAgICAgICAgICBpZHggPSAxLAogICAgICAgICAgICBuZXh0OwogICAgICAgIHZhciByZXN1bHRzID0gW107CgogICAgICAgIHdoaWxlIChzIDwgdGhpcy5lKSB7CiAgICAgICAgICB2YXIgYWRkZWQgPSB0aGlzLnN0YXJ0LnBsdXMoZHVyLm1hcFVuaXRzKGZ1bmN0aW9uICh4KSB7CiAgICAgICAgICAgIHJldHVybiB4ICogaWR4OwogICAgICAgICAgfSkpOwogICAgICAgICAgbmV4dCA9ICthZGRlZCA+ICt0aGlzLmUgPyB0aGlzLmUgOiBhZGRlZDsKICAgICAgICAgIHJlc3VsdHMucHVzaChJbnRlcnZhbC5mcm9tRGF0ZVRpbWVzKHMsIG5leHQpKTsKICAgICAgICAgIHMgPSBuZXh0OwogICAgICAgICAgaWR4ICs9IDE7CiAgICAgICAgfQoKICAgICAgICByZXR1cm4gcmVzdWx0czsKICAgICAgfQogICAgICAvKioKICAgICAgICogU3BsaXQgdGhpcyBJbnRlcnZhbCBpbnRvIHRoZSBzcGVjaWZpZWQgbnVtYmVyIG9mIHNtYWxsZXIgaW50ZXJ2YWxzLgogICAgICAgKiBAcGFyYW0ge251bWJlcn0gbnVtYmVyT2ZQYXJ0cyAtIFRoZSBudW1iZXIgb2YgSW50ZXJ2YWxzIHRvIGRpdmlkZSB0aGUgSW50ZXJ2YWwgaW50by4KICAgICAgICogQHJldHVybiB7W0ludGVydmFsXX0KICAgICAgICovCiAgICAgIDsKCiAgICAgIF9wcm90by5kaXZpZGVFcXVhbGx5ID0gZnVuY3Rpb24gZGl2aWRlRXF1YWxseShudW1iZXJPZlBhcnRzKSB7CiAgICAgICAgaWYgKCF0aGlzLmlzVmFsaWQpIHJldHVybiBbXTsKICAgICAgICByZXR1cm4gdGhpcy5zcGxpdEJ5KHRoaXMubGVuZ3RoKCkgLyBudW1iZXJPZlBhcnRzKS5zbGljZSgwLCBudW1iZXJPZlBhcnRzKTsKICAgICAgfQogICAgICAvKioKICAgICAgICogUmV0dXJuIHdoZXRoZXIgdGhpcyBJbnRlcnZhbCBvdmVybGFwcyB3aXRoIHRoZSBzcGVjaWZpZWQgSW50ZXJ2YWwKICAgICAgICogQHBhcmFtIHtJbnRlcnZhbH0gb3RoZXIKICAgICAgICogQHJldHVybiB7Ym9vbGVhbn0KICAgICAgICovCiAgICAgIDsKCiAgICAgIF9wcm90by5vdmVybGFwcyA9IGZ1bmN0aW9uIG92ZXJsYXBzKG90aGVyKSB7CiAgICAgICAgcmV0dXJuIHRoaXMuZSA+IG90aGVyLnMgJiYgdGhpcy5zIDwgb3RoZXIuZTsKICAgICAgfQogICAgICAvKioKICAgICAgICogUmV0dXJuIHdoZXRoZXIgdGhpcyBJbnRlcnZhbCdzIGVuZCBpcyBhZGphY2VudCB0byB0aGUgc3BlY2lmaWVkIEludGVydmFsJ3Mgc3RhcnQuCiAgICAgICAqIEBwYXJhbSB7SW50ZXJ2YWx9IG90aGVyCiAgICAgICAqIEByZXR1cm4ge2Jvb2xlYW59CiAgICAgICAqLwogICAgICA7CgogICAgICBfcHJvdG8uYWJ1dHNTdGFydCA9IGZ1bmN0aW9uIGFidXRzU3RhcnQob3RoZXIpIHsKICAgICAgICBpZiAoIXRoaXMuaXNWYWxpZCkgcmV0dXJuIGZhbHNlOwogICAgICAgIHJldHVybiArdGhpcy5lID09PSArb3RoZXIuczsKICAgICAgfQogICAgICAvKioKICAgICAgICogUmV0dXJuIHdoZXRoZXIgdGhpcyBJbnRlcnZhbCdzIHN0YXJ0IGlzIGFkamFjZW50IHRvIHRoZSBzcGVjaWZpZWQgSW50ZXJ2YWwncyBlbmQuCiAgICAgICAqIEBwYXJhbSB7SW50ZXJ2YWx9IG90aGVyCiAgICAgICAqIEByZXR1cm4ge2Jvb2xlYW59CiAgICAgICAqLwogICAgICA7CgogICAgICBfcHJvdG8uYWJ1dHNFbmQgPSBmdW5jdGlvbiBhYnV0c0VuZChvdGhlcikgewogICAgICAgIGlmICghdGhpcy5pc1ZhbGlkKSByZXR1cm4gZmFsc2U7CiAgICAgICAgcmV0dXJuICtvdGhlci5lID09PSArdGhpcy5zOwogICAgICB9CiAgICAgIC8qKgogICAgICAgKiBSZXR1cm4gd2hldGhlciB0aGlzIEludGVydmFsIGVuZ3VsZnMgdGhlIHN0YXJ0IGFuZCBlbmQgb2YgdGhlIHNwZWNpZmllZCBJbnRlcnZhbC4KICAgICAgICogQHBhcmFtIHtJbnRlcnZhbH0gb3RoZXIKICAgICAgICogQHJldHVybiB7Ym9vbGVhbn0KICAgICAgICovCiAgICAgIDsKCiAgICAgIF9wcm90by5lbmd1bGZzID0gZnVuY3Rpb24gZW5ndWxmcyhvdGhlcikgewogICAgICAgIGlmICghdGhpcy5pc1ZhbGlkKSByZXR1cm4gZmFsc2U7CiAgICAgICAgcmV0dXJuIHRoaXMucyA8PSBvdGhlci5zICYmIHRoaXMuZSA+PSBvdGhlci5lOwogICAgICB9CiAgICAgIC8qKgogICAgICAgKiBSZXR1cm4gd2hldGhlciB0aGlzIEludGVydmFsIGhhcyB0aGUgc2FtZSBzdGFydCBhbmQgZW5kIGFzIHRoZSBzcGVjaWZpZWQgSW50ZXJ2YWwuCiAgICAgICAqIEBwYXJhbSB7SW50ZXJ2YWx9IG90aGVyCiAgICAgICAqIEByZXR1cm4ge2Jvb2xlYW59CiAgICAgICAqLwogICAgICA7CgogICAgICBfcHJvdG8uZXF1YWxzID0gZnVuY3Rpb24gZXF1YWxzKG90aGVyKSB7CiAgICAgICAgaWYgKCF0aGlzLmlzVmFsaWQgfHwgIW90aGVyLmlzVmFsaWQpIHsKICAgICAgICAgIHJldHVybiBmYWxzZTsKICAgICAgICB9CgogICAgICAgIHJldHVybiB0aGlzLnMuZXF1YWxzKG90aGVyLnMpICYmIHRoaXMuZS5lcXVhbHMob3RoZXIuZSk7CiAgICAgIH0KICAgICAgLyoqCiAgICAgICAqIFJldHVybiBhbiBJbnRlcnZhbCByZXByZXNlbnRpbmcgdGhlIGludGVyc2VjdGlvbiBvZiB0aGlzIEludGVydmFsIGFuZCB0aGUgc3BlY2lmaWVkIEludGVydmFsLgogICAgICAgKiBTcGVjaWZpY2FsbHksIHRoZSByZXN1bHRpbmcgSW50ZXJ2YWwgaGFzIHRoZSBtYXhpbXVtIHN0YXJ0IHRpbWUgYW5kIHRoZSBtaW5pbXVtIGVuZCB0aW1lIG9mIHRoZSB0d28gSW50ZXJ2YWxzLgogICAgICAgKiBSZXR1cm5zIG51bGwgaWYgdGhlIGludGVyc2VjdGlvbiBpcyBlbXB0eSwgbWVhbmluZywgdGhlIGludGVydmFscyBkb24ndCBpbnRlcnNlY3QuCiAgICAgICAqIEBwYXJhbSB7SW50ZXJ2YWx9IG90aGVyCiAgICAgICAqIEByZXR1cm4ge0ludGVydmFsfQogICAgICAgKi8KICAgICAgOwoKICAgICAgX3Byb3RvLmludGVyc2VjdGlvbiA9IGZ1bmN0aW9uIGludGVyc2VjdGlvbihvdGhlcikgewogICAgICAgIGlmICghdGhpcy5pc1ZhbGlkKSByZXR1cm4gdGhpczsKICAgICAgICB2YXIgcyA9IHRoaXMucyA+IG90aGVyLnMgPyB0aGlzLnMgOiBvdGhlci5zLAogICAgICAgICAgICBlID0gdGhpcy5lIDwgb3RoZXIuZSA/IHRoaXMuZSA6IG90aGVyLmU7CgogICAgICAgIGlmIChzID49IGUpIHsKICAgICAgICAgIHJldHVybiBudWxsOwogICAgICAgIH0gZWxzZSB7CiAgICAgICAgICByZXR1cm4gSW50ZXJ2YWwuZnJvbURhdGVUaW1lcyhzLCBlKTsKICAgICAgICB9CiAgICAgIH0KICAgICAgLyoqCiAgICAgICAqIFJldHVybiBhbiBJbnRlcnZhbCByZXByZXNlbnRpbmcgdGhlIHVuaW9uIG9mIHRoaXMgSW50ZXJ2YWwgYW5kIHRoZSBzcGVjaWZpZWQgSW50ZXJ2YWwuCiAgICAgICAqIFNwZWNpZmljYWxseSwgdGhlIHJlc3VsdGluZyBJbnRlcnZhbCBoYXMgdGhlIG1pbmltdW0gc3RhcnQgdGltZSBhbmQgdGhlIG1heGltdW0gZW5kIHRpbWUgb2YgdGhlIHR3byBJbnRlcnZhbHMuCiAgICAgICAqIEBwYXJhbSB7SW50ZXJ2YWx9IG90aGVyCiAgICAgICAqIEByZXR1cm4ge0ludGVydmFsfQogICAgICAgKi8KICAgICAgOwoKICAgICAgX3Byb3RvLnVuaW9uID0gZnVuY3Rpb24gdW5pb24ob3RoZXIpIHsKICAgICAgICBpZiAoIXRoaXMuaXNWYWxpZCkgcmV0dXJuIHRoaXM7CiAgICAgICAgdmFyIHMgPSB0aGlzLnMgPCBvdGhlci5zID8gdGhpcy5zIDogb3RoZXIucywKICAgICAgICAgICAgZSA9IHRoaXMuZSA+IG90aGVyLmUgPyB0aGlzLmUgOiBvdGhlci5lOwogICAgICAgIHJldHVybiBJbnRlcnZhbC5mcm9tRGF0ZVRpbWVzKHMsIGUpOwogICAgICB9CiAgICAgIC8qKgogICAgICAgKiBNZXJnZSBhbiBhcnJheSBvZiBJbnRlcnZhbHMgaW50byBhIGVxdWl2YWxlbnQgbWluaW1hbCBzZXQgb2YgSW50ZXJ2YWxzLgogICAgICAgKiBDb21iaW5lcyBvdmVybGFwcGluZyBhbmQgYWRqYWNlbnQgSW50ZXJ2YWxzLgogICAgICAgKiBAcGFyYW0ge1tJbnRlcnZhbF19IGludGVydmFscwogICAgICAgKiBAcmV0dXJuIHtbSW50ZXJ2YWxdfQogICAgICAgKi8KICAgICAgOwoKICAgICAgSW50ZXJ2YWwubWVyZ2UgPSBmdW5jdGlvbiBtZXJnZShpbnRlcnZhbHMpIHsKICAgICAgICB2YXIgX2ludGVydmFscyRzb3J0JHJlZHVjID0gaW50ZXJ2YWxzLnNvcnQoZnVuY3Rpb24gKGEsIGIpIHsKICAgICAgICAgIHJldHVybiBhLnMgLSBiLnM7CiAgICAgICAgfSkucmVkdWNlKGZ1bmN0aW9uIChfcmVmMiwgaXRlbSkgewogICAgICAgICAgdmFyIHNvZmFyID0gX3JlZjJbMF0sCiAgICAgICAgICAgICAgY3VycmVudCA9IF9yZWYyWzFdOwoKICAgICAgICAgIGlmICghY3VycmVudCkgewogICAgICAgICAgICByZXR1cm4gW3NvZmFyLCBpdGVtXTsKICAgICAgICAgIH0gZWxzZSBpZiAoY3VycmVudC5vdmVybGFwcyhpdGVtKSB8fCBjdXJyZW50LmFidXRzU3RhcnQoaXRlbSkpIHsKICAgICAgICAgICAgcmV0dXJuIFtzb2ZhciwgY3VycmVudC51bmlvbihpdGVtKV07CiAgICAgICAgICB9IGVsc2UgewogICAgICAgICAgICByZXR1cm4gW3NvZmFyLmNvbmNhdChbY3VycmVudF0pLCBpdGVtXTsKICAgICAgICAgIH0KICAgICAgICB9LCBbW10sIG51bGxdKSwKICAgICAgICAgICAgZm91bmQgPSBfaW50ZXJ2YWxzJHNvcnQkcmVkdWNbMF0sCiAgICAgICAgICAgIGZpbmFsID0gX2ludGVydmFscyRzb3J0JHJlZHVjWzFdOwoKICAgICAgICBpZiAoZmluYWwpIHsKICAgICAgICAgIGZvdW5kLnB1c2goZmluYWwpOwogICAgICAgIH0KCiAgICAgICAgcmV0dXJuIGZvdW5kOwogICAgICB9CiAgICAgIC8qKgogICAgICAgKiBSZXR1cm4gYW4gYXJyYXkgb2YgSW50ZXJ2YWxzIHJlcHJlc2VudGluZyB0aGUgc3BhbnMgb2YgdGltZSB0aGF0IG9ubHkgYXBwZWFyIGluIG9uZSBvZiB0aGUgc3BlY2lmaWVkIEludGVydmFscy4KICAgICAgICogQHBhcmFtIHtbSW50ZXJ2YWxdfSBpbnRlcnZhbHMKICAgICAgICogQHJldHVybiB7W0ludGVydmFsXX0KICAgICAgICovCiAgICAgIDsKCiAgICAgIEludGVydmFsLnhvciA9IGZ1bmN0aW9uIHhvcihpbnRlcnZhbHMpIHsKICAgICAgICB2YXIgX0FycmF5JHByb3RvdHlwZTsKCiAgICAgICAgdmFyIHN0YXJ0ID0gbnVsbCwKICAgICAgICAgICAgY3VycmVudENvdW50ID0gMDsKCiAgICAgICAgdmFyIHJlc3VsdHMgPSBbXSwKICAgICAgICAgICAgZW5kcyA9IGludGVydmFscy5tYXAoZnVuY3Rpb24gKGkpIHsKICAgICAgICAgIHJldHVybiBbewogICAgICAgICAgICB0aW1lOiBpLnMsCiAgICAgICAgICAgIHR5cGU6ICJzIgogICAgICAgICAgfSwgewogICAgICAgICAgICB0aW1lOiBpLmUsCiAgICAgICAgICAgIHR5cGU6ICJlIgogICAgICAgICAgfV07CiAgICAgICAgfSksCiAgICAgICAgICAgIGZsYXR0ZW5lZCA9IChfQXJyYXkkcHJvdG90eXBlID0gQXJyYXkucHJvdG90eXBlKS5jb25jYXQuYXBwbHkoX0FycmF5JHByb3RvdHlwZSwgZW5kcyksCiAgICAgICAgICAgIGFyciA9IGZsYXR0ZW5lZC5zb3J0KGZ1bmN0aW9uIChhLCBiKSB7CiAgICAgICAgICByZXR1cm4gYS50aW1lIC0gYi50aW1lOwogICAgICAgIH0pOwoKICAgICAgICBmb3IgKHZhciBfaXRlcmF0b3IgPSBfY3JlYXRlRm9yT2ZJdGVyYXRvckhlbHBlckxvb3NlKGFyciksIF9zdGVwOyAhKF9zdGVwID0gX2l0ZXJhdG9yKCkpLmRvbmU7KSB7CiAgICAgICAgICB2YXIgaSA9IF9zdGVwLnZhbHVlOwogICAgICAgICAgY3VycmVudENvdW50ICs9IGkudHlwZSA9PT0gInMiID8gMSA6IC0xOwoKICAgICAgICAgIGlmIChjdXJyZW50Q291bnQgPT09IDEpIHsKICAgICAgICAgICAgc3RhcnQgPSBpLnRpbWU7CiAgICAgICAgICB9IGVsc2UgewogICAgICAgICAgICBpZiAoc3RhcnQgJiYgK3N0YXJ0ICE9PSAraS50aW1lKSB7CiAgICAgICAgICAgICAgcmVzdWx0cy5wdXNoKEludGVydmFsLmZyb21EYXRlVGltZXMoc3RhcnQsIGkudGltZSkpOwogICAgICAgICAgICB9CgogICAgICAgICAgICBzdGFydCA9IG51bGw7CiAgICAgICAgICB9CiAgICAgICAgfQoKICAgICAgICByZXR1cm4gSW50ZXJ2YWwubWVyZ2UocmVzdWx0cyk7CiAgICAgIH0KICAgICAgLyoqCiAgICAgICAqIFJldHVybiBhbiBJbnRlcnZhbCByZXByZXNlbnRpbmcgdGhlIHNwYW4gb2YgdGltZSBpbiB0aGlzIEludGVydmFsIHRoYXQgZG9lc24ndCBvdmVybGFwIHdpdGggYW55IG9mIHRoZSBzcGVjaWZpZWQgSW50ZXJ2YWxzLgogICAgICAgKiBAcGFyYW0gey4uLkludGVydmFsfSBpbnRlcnZhbHMKICAgICAgICogQHJldHVybiB7W0ludGVydmFsXX0KICAgICAgICovCiAgICAgIDsKCiAgICAgIF9wcm90by5kaWZmZXJlbmNlID0gZnVuY3Rpb24gZGlmZmVyZW5jZSgpIHsKICAgICAgICB2YXIgX3RoaXMyID0gdGhpczsKCiAgICAgICAgZm9yICh2YXIgX2xlbjIgPSBhcmd1bWVudHMubGVuZ3RoLCBpbnRlcnZhbHMgPSBuZXcgQXJyYXkoX2xlbjIpLCBfa2V5MiA9IDA7IF9rZXkyIDwgX2xlbjI7IF9rZXkyKyspIHsKICAgICAgICAgIGludGVydmFsc1tfa2V5Ml0gPSBhcmd1bWVudHNbX2tleTJdOwogICAgICAgIH0KCiAgICAgICAgcmV0dXJuIEludGVydmFsLnhvcihbdGhpc10uY29uY2F0KGludGVydmFscykpLm1hcChmdW5jdGlvbiAoaSkgewogICAgICAgICAgcmV0dXJuIF90aGlzMi5pbnRlcnNlY3Rpb24oaSk7CiAgICAgICAgfSkuZmlsdGVyKGZ1bmN0aW9uIChpKSB7CiAgICAgICAgICByZXR1cm4gaSAmJiAhaS5pc0VtcHR5KCk7CiAgICAgICAgfSk7CiAgICAgIH0KICAgICAgLyoqCiAgICAgICAqIFJldHVybnMgYSBzdHJpbmcgcmVwcmVzZW50YXRpb24gb2YgdGhpcyBJbnRlcnZhbCBhcHByb3ByaWF0ZSBmb3IgZGVidWdnaW5nLgogICAgICAgKiBAcmV0dXJuIHtzdHJpbmd9CiAgICAgICAqLwogICAgICA7CgogICAgICBfcHJvdG8udG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHsKICAgICAgICBpZiAoIXRoaXMuaXNWYWxpZCkgcmV0dXJuIElOVkFMSUQkMTsKICAgICAgICByZXR1cm4gIlsiICsgdGhpcy5zLnRvSVNPKCkgKyAiIFx1MjAxMyAiICsgdGhpcy5lLnRvSVNPKCkgKyAiKSI7CiAgICAgIH0KICAgICAgLyoqCiAgICAgICAqIFJldHVybnMgYW4gSVNPIDg2MDEtY29tcGxpYW50IHN0cmluZyByZXByZXNlbnRhdGlvbiBvZiB0aGlzIEludGVydmFsLgogICAgICAgKiBAc2VlIGh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL0lTT184NjAxI1RpbWVfaW50ZXJ2YWxzCiAgICAgICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRzIC0gVGhlIHNhbWUgb3B0aW9ucyBhcyB7QGxpbmsgRGF0ZVRpbWUudG9JU099CiAgICAgICAqIEByZXR1cm4ge3N0cmluZ30KICAgICAgICovCiAgICAgIDsKCiAgICAgIF9wcm90by50b0lTTyA9IGZ1bmN0aW9uIHRvSVNPKG9wdHMpIHsKICAgICAgICBpZiAoIXRoaXMuaXNWYWxpZCkgcmV0dXJuIElOVkFMSUQkMTsKICAgICAgICByZXR1cm4gdGhpcy5zLnRvSVNPKG9wdHMpICsgIi8iICsgdGhpcy5lLnRvSVNPKG9wdHMpOwogICAgICB9CiAgICAgIC8qKgogICAgICAgKiBSZXR1cm5zIGFuIElTTyA4NjAxLWNvbXBsaWFudCBzdHJpbmcgcmVwcmVzZW50YXRpb24gb2YgZGF0ZSBvZiB0aGlzIEludGVydmFsLgogICAgICAgKiBUaGUgdGltZSBjb21wb25lbnRzIGFyZSBpZ25vcmVkLgogICAgICAgKiBAc2VlIGh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL0lTT184NjAxI1RpbWVfaW50ZXJ2YWxzCiAgICAgICAqIEByZXR1cm4ge3N0cmluZ30KICAgICAgICovCiAgICAgIDsKCiAgICAgIF9wcm90by50b0lTT0RhdGUgPSBmdW5jdGlvbiB0b0lTT0RhdGUoKSB7CiAgICAgICAgaWYgKCF0aGlzLmlzVmFsaWQpIHJldHVybiBJTlZBTElEJDE7CiAgICAgICAgcmV0dXJuIHRoaXMucy50b0lTT0RhdGUoKSArICIvIiArIHRoaXMuZS50b0lTT0RhdGUoKTsKICAgICAgfQogICAgICAvKioKICAgICAgICogUmV0dXJucyBhbiBJU08gODYwMS1jb21wbGlhbnQgc3RyaW5nIHJlcHJlc2VudGF0aW9uIG9mIHRpbWUgb2YgdGhpcyBJbnRlcnZhbC4KICAgICAgICogVGhlIGRhdGUgY29tcG9uZW50cyBhcmUgaWdub3JlZC4KICAgICAgICogQHNlZSBodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9JU09fODYwMSNUaW1lX2ludGVydmFscwogICAgICAgKiBAcGFyYW0ge09iamVjdH0gb3B0cyAtIFRoZSBzYW1lIG9wdGlvbnMgYXMge0BsaW5rIERhdGVUaW1lLnRvSVNPfQogICAgICAgKiBAcmV0dXJuIHtzdHJpbmd9CiAgICAgICAqLwogICAgICA7CgogICAgICBfcHJvdG8udG9JU09UaW1lID0gZnVuY3Rpb24gdG9JU09UaW1lKG9wdHMpIHsKICAgICAgICBpZiAoIXRoaXMuaXNWYWxpZCkgcmV0dXJuIElOVkFMSUQkMTsKICAgICAgICByZXR1cm4gdGhpcy5zLnRvSVNPVGltZShvcHRzKSArICIvIiArIHRoaXMuZS50b0lTT1RpbWUob3B0cyk7CiAgICAgIH0KICAgICAgLyoqCiAgICAgICAqIFJldHVybnMgYSBzdHJpbmcgcmVwcmVzZW50YXRpb24gb2YgdGhpcyBJbnRlcnZhbCBmb3JtYXR0ZWQgYWNjb3JkaW5nIHRvIHRoZSBzcGVjaWZpZWQgZm9ybWF0IHN0cmluZy4KICAgICAgICogQHBhcmFtIHtzdHJpbmd9IGRhdGVGb3JtYXQgLSB0aGUgZm9ybWF0IHN0cmluZy4gVGhpcyBzdHJpbmcgZm9ybWF0cyB0aGUgc3RhcnQgYW5kIGVuZCB0aW1lLiBTZWUge0BsaW5rIERhdGVUaW1lLnRvRm9ybWF0fSBmb3IgZGV0YWlscy4KICAgICAgICogQHBhcmFtIHtPYmplY3R9IG9wdHMgLSBvcHRpb25zCiAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBbb3B0cy5zZXBhcmF0b3IgPSAgJyDigJMgJ10gLSBhIHNlcGFyYXRvciB0byBwbGFjZSBiZXR3ZWVuIHRoZSBzdGFydCBhbmQgZW5kIHJlcHJlc2VudGF0aW9ucwogICAgICAgKiBAcmV0dXJuIHtzdHJpbmd9CiAgICAgICAqLwogICAgICA7CgogICAgICBfcHJvdG8udG9Gb3JtYXQgPSBmdW5jdGlvbiB0b0Zvcm1hdChkYXRlRm9ybWF0LCBfdGVtcDIpIHsKICAgICAgICB2YXIgX3JlZjMgPSBfdGVtcDIgPT09IHZvaWQgMCA/IHt9IDogX3RlbXAyLAogICAgICAgICAgICBfcmVmMyRzZXBhcmF0b3IgPSBfcmVmMy5zZXBhcmF0b3IsCiAgICAgICAgICAgIHNlcGFyYXRvciA9IF9yZWYzJHNlcGFyYXRvciA9PT0gdm9pZCAwID8gIiDigJMgIiA6IF9yZWYzJHNlcGFyYXRvcjsKCiAgICAgICAgaWYgKCF0aGlzLmlzVmFsaWQpIHJldHVybiBJTlZBTElEJDE7CiAgICAgICAgcmV0dXJuICIiICsgdGhpcy5zLnRvRm9ybWF0KGRhdGVGb3JtYXQpICsgc2VwYXJhdG9yICsgdGhpcy5lLnRvRm9ybWF0KGRhdGVGb3JtYXQpOwogICAgICB9CiAgICAgIC8qKgogICAgICAgKiBSZXR1cm4gYSBEdXJhdGlvbiByZXByZXNlbnRpbmcgdGhlIHRpbWUgc3Bhbm5lZCBieSB0aGlzIGludGVydmFsLgogICAgICAgKiBAcGFyYW0ge3N0cmluZ3xzdHJpbmdbXX0gW3VuaXQ9WydtaWxsaXNlY29uZHMnXV0gLSB0aGUgdW5pdCBvciB1bml0cyAoc3VjaCBhcyAnaG91cnMnIG9yICdkYXlzJykgdG8gaW5jbHVkZSBpbiB0aGUgZHVyYXRpb24uCiAgICAgICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRzIC0gb3B0aW9ucyB0aGF0IGFmZmVjdCB0aGUgY3JlYXRpb24gb2YgdGhlIER1cmF0aW9uCiAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBbb3B0cy5jb252ZXJzaW9uQWNjdXJhY3k9J2Nhc3VhbCddIC0gdGhlIGNvbnZlcnNpb24gc3lzdGVtIHRvIHVzZQogICAgICAgKiBAZXhhbXBsZSBJbnRlcnZhbC5mcm9tRGF0ZVRpbWVzKGR0MSwgZHQyKS50b0R1cmF0aW9uKCkudG9PYmplY3QoKSAvLz0+IHsgbWlsbGlzZWNvbmRzOiA4ODQ4OTI1NyB9CiAgICAgICAqIEBleGFtcGxlIEludGVydmFsLmZyb21EYXRlVGltZXMoZHQxLCBkdDIpLnRvRHVyYXRpb24oJ2RheXMnKS50b09iamVjdCgpIC8vPT4geyBkYXlzOiAxLjAyNDE4MTIxNTI3Nzc3NzggfQogICAgICAgKiBAZXhhbXBsZSBJbnRlcnZhbC5mcm9tRGF0ZVRpbWVzKGR0MSwgZHQyKS50b0R1cmF0aW9uKFsnaG91cnMnLCAnbWludXRlcyddKS50b09iamVjdCgpIC8vPT4geyBob3VyczogMjQsIG1pbnV0ZXM6IDM0LjgyMDk1IH0KICAgICAgICogQGV4YW1wbGUgSW50ZXJ2YWwuZnJvbURhdGVUaW1lcyhkdDEsIGR0MikudG9EdXJhdGlvbihbJ2hvdXJzJywgJ21pbnV0ZXMnLCAnc2Vjb25kcyddKS50b09iamVjdCgpIC8vPT4geyBob3VyczogMjQsIG1pbnV0ZXM6IDM0LCBzZWNvbmRzOiA0OS4yNTcgfQogICAgICAgKiBAZXhhbXBsZSBJbnRlcnZhbC5mcm9tRGF0ZVRpbWVzKGR0MSwgZHQyKS50b0R1cmF0aW9uKCdzZWNvbmRzJykudG9PYmplY3QoKSAvLz0+IHsgc2Vjb25kczogODg0ODkuMjU3IH0KICAgICAgICogQHJldHVybiB7RHVyYXRpb259CiAgICAgICAqLwogICAgICA7CgogICAgICBfcHJvdG8udG9EdXJhdGlvbiA9IGZ1bmN0aW9uIHRvRHVyYXRpb24odW5pdCwgb3B0cykgewogICAgICAgIGlmICghdGhpcy5pc1ZhbGlkKSB7CiAgICAgICAgICByZXR1cm4gRHVyYXRpb24uaW52YWxpZCh0aGlzLmludmFsaWRSZWFzb24pOwogICAgICAgIH0KCiAgICAgICAgcmV0dXJuIHRoaXMuZS5kaWZmKHRoaXMucywgdW5pdCwgb3B0cyk7CiAgICAgIH0KICAgICAgLyoqCiAgICAgICAqIFJ1biBtYXBGbiBvbiB0aGUgaW50ZXJ2YWwgc3RhcnQgYW5kIGVuZCwgcmV0dXJuaW5nIGEgbmV3IEludGVydmFsIGZyb20gdGhlIHJlc3VsdGluZyBEYXRlVGltZXMKICAgICAgICogQHBhcmFtIHtmdW5jdGlvbn0gbWFwRm4KICAgICAgICogQHJldHVybiB7SW50ZXJ2YWx9CiAgICAgICAqIEBleGFtcGxlIEludGVydmFsLmZyb21EYXRlVGltZXMoZHQxLCBkdDIpLm1hcEVuZHBvaW50cyhlbmRwb2ludCA9PiBlbmRwb2ludC50b1VUQygpKQogICAgICAgKiBAZXhhbXBsZSBJbnRlcnZhbC5mcm9tRGF0ZVRpbWVzKGR0MSwgZHQyKS5tYXBFbmRwb2ludHMoZW5kcG9pbnQgPT4gZW5kcG9pbnQucGx1cyh7IGhvdXJzOiAyIH0pKQogICAgICAgKi8KICAgICAgOwoKICAgICAgX3Byb3RvLm1hcEVuZHBvaW50cyA9IGZ1bmN0aW9uIG1hcEVuZHBvaW50cyhtYXBGbikgewogICAgICAgIHJldHVybiBJbnRlcnZhbC5mcm9tRGF0ZVRpbWVzKG1hcEZuKHRoaXMucyksIG1hcEZuKHRoaXMuZSkpOwogICAgICB9OwoKICAgICAgX2NyZWF0ZUNsYXNzKEludGVydmFsLCBbewogICAgICAgIGtleTogInN0YXJ0IiwKICAgICAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHsKICAgICAgICAgIHJldHVybiB0aGlzLmlzVmFsaWQgPyB0aGlzLnMgOiBudWxsOwogICAgICAgIH0KICAgICAgICAvKioKICAgICAgICAgKiBSZXR1cm5zIHRoZSBlbmQgb2YgdGhlIEludGVydmFsCiAgICAgICAgICogQHR5cGUge0RhdGVUaW1lfQogICAgICAgICAqLwoKICAgICAgfSwgewogICAgICAgIGtleTogImVuZCIsCiAgICAgICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7CiAgICAgICAgICByZXR1cm4gdGhpcy5pc1ZhbGlkID8gdGhpcy5lIDogbnVsbDsKICAgICAgICB9CiAgICAgICAgLyoqCiAgICAgICAgICogUmV0dXJucyB3aGV0aGVyIHRoaXMgSW50ZXJ2YWwncyBlbmQgaXMgYXQgbGVhc3QgaXRzIHN0YXJ0LCBtZWFuaW5nIHRoYXQgdGhlIEludGVydmFsIGlzbid0ICdiYWNrd2FyZHMnLgogICAgICAgICAqIEB0eXBlIHtib29sZWFufQogICAgICAgICAqLwoKICAgICAgfSwgewogICAgICAgIGtleTogImlzVmFsaWQiLAogICAgICAgIGdldDogZnVuY3Rpb24gZ2V0KCkgewogICAgICAgICAgcmV0dXJuIHRoaXMuaW52YWxpZFJlYXNvbiA9PT0gbnVsbDsKICAgICAgICB9CiAgICAgICAgLyoqCiAgICAgICAgICogUmV0dXJucyBhbiBlcnJvciBjb2RlIGlmIHRoaXMgSW50ZXJ2YWwgaXMgaW52YWxpZCwgb3IgbnVsbCBpZiB0aGUgSW50ZXJ2YWwgaXMgdmFsaWQKICAgICAgICAgKiBAdHlwZSB7c3RyaW5nfQogICAgICAgICAqLwoKICAgICAgfSwgewogICAgICAgIGtleTogImludmFsaWRSZWFzb24iLAogICAgICAgIGdldDogZnVuY3Rpb24gZ2V0KCkgewogICAgICAgICAgcmV0dXJuIHRoaXMuaW52YWxpZCA/IHRoaXMuaW52YWxpZC5yZWFzb24gOiBudWxsOwogICAgICAgIH0KICAgICAgICAvKioKICAgICAgICAgKiBSZXR1cm5zIGFuIGV4cGxhbmF0aW9uIG9mIHdoeSB0aGlzIEludGVydmFsIGJlY2FtZSBpbnZhbGlkLCBvciBudWxsIGlmIHRoZSBJbnRlcnZhbCBpcyB2YWxpZAogICAgICAgICAqIEB0eXBlIHtzdHJpbmd9CiAgICAgICAgICovCgogICAgICB9LCB7CiAgICAgICAga2V5OiAiaW52YWxpZEV4cGxhbmF0aW9uIiwKICAgICAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHsKICAgICAgICAgIHJldHVybiB0aGlzLmludmFsaWQgPyB0aGlzLmludmFsaWQuZXhwbGFuYXRpb24gOiBudWxsOwogICAgICAgIH0KICAgICAgfV0pOwoKICAgICAgcmV0dXJuIEludGVydmFsOwogICAgfSgpOwoKICAgIC8qKgogICAgICogVGhlIEluZm8gY2xhc3MgY29udGFpbnMgc3RhdGljIG1ldGhvZHMgZm9yIHJldHJpZXZpbmcgZ2VuZXJhbCB0aW1lIGFuZCBkYXRlIHJlbGF0ZWQgZGF0YS4gRm9yIGV4YW1wbGUsIGl0IGhhcyBtZXRob2RzIGZvciBmaW5kaW5nIG91dCBpZiBhIHRpbWUgem9uZSBoYXMgYSBEU1QsIGZvciBsaXN0aW5nIHRoZSBtb250aHMgaW4gYW55IHN1cHBvcnRlZCBsb2NhbGUsIGFuZCBmb3IgZGlzY292ZXJpbmcgd2hpY2ggb2YgTHV4b24gZmVhdHVyZXMgYXJlIGF2YWlsYWJsZSBpbiB0aGUgY3VycmVudCBlbnZpcm9ubWVudC4KICAgICAqLwoKICAgIHZhciBJbmZvID0gLyojX19QVVJFX18qL2Z1bmN0aW9uICgpIHsKICAgICAgZnVuY3Rpb24gSW5mbygpIHt9CgogICAgICAvKioKICAgICAgICogUmV0dXJuIHdoZXRoZXIgdGhlIHNwZWNpZmllZCB6b25lIGNvbnRhaW5zIGEgRFNULgogICAgICAgKiBAcGFyYW0ge3N0cmluZ3xab25lfSBbem9uZT0nbG9jYWwnXSAtIFpvbmUgdG8gY2hlY2suIERlZmF1bHRzIHRvIHRoZSBlbnZpcm9ubWVudCdzIGxvY2FsIHpvbmUuCiAgICAgICAqIEByZXR1cm4ge2Jvb2xlYW59CiAgICAgICAqLwogICAgICBJbmZvLmhhc0RTVCA9IGZ1bmN0aW9uIGhhc0RTVCh6b25lKSB7CiAgICAgICAgaWYgKHpvbmUgPT09IHZvaWQgMCkgewogICAgICAgICAgem9uZSA9IFNldHRpbmdzLmRlZmF1bHRab25lOwogICAgICAgIH0KCiAgICAgICAgdmFyIHByb3RvID0gRGF0ZVRpbWUubm93KCkuc2V0Wm9uZSh6b25lKS5zZXQoewogICAgICAgICAgbW9udGg6IDEyCiAgICAgICAgfSk7CiAgICAgICAgcmV0dXJuICF6b25lLnVuaXZlcnNhbCAmJiBwcm90by5vZmZzZXQgIT09IHByb3RvLnNldCh7CiAgICAgICAgICBtb250aDogNgogICAgICAgIH0pLm9mZnNldDsKICAgICAgfQogICAgICAvKioKICAgICAgICogUmV0dXJuIHdoZXRoZXIgdGhlIHNwZWNpZmllZCB6b25lIGlzIGEgdmFsaWQgSUFOQSBzcGVjaWZpZXIuCiAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSB6b25lIC0gWm9uZSB0byBjaGVjawogICAgICAgKiBAcmV0dXJuIHtib29sZWFufQogICAgICAgKi8KICAgICAgOwoKICAgICAgSW5mby5pc1ZhbGlkSUFOQVpvbmUgPSBmdW5jdGlvbiBpc1ZhbGlkSUFOQVpvbmUoem9uZSkgewogICAgICAgIHJldHVybiBJQU5BWm9uZS5pc1ZhbGlkU3BlY2lmaWVyKHpvbmUpICYmIElBTkFab25lLmlzVmFsaWRab25lKHpvbmUpOwogICAgICB9CiAgICAgIC8qKgogICAgICAgKiBDb252ZXJ0cyB0aGUgaW5wdXQgaW50byBhIHtAbGluayBab25lfSBpbnN0YW5jZS4KICAgICAgICoKICAgICAgICogKiBJZiBgaW5wdXRgIGlzIGFscmVhZHkgYSBab25lIGluc3RhbmNlLCBpdCBpcyByZXR1cm5lZCB1bmNoYW5nZWQuCiAgICAgICAqICogSWYgYGlucHV0YCBpcyBhIHN0cmluZyBjb250YWluaW5nIGEgdmFsaWQgdGltZSB6b25lIG5hbWUsIGEgWm9uZSBpbnN0YW5jZQogICAgICAgKiAgIHdpdGggdGhhdCBuYW1lIGlzIHJldHVybmVkLgogICAgICAgKiAqIElmIGBpbnB1dGAgaXMgYSBzdHJpbmcgdGhhdCBkb2Vzbid0IHJlZmVyIHRvIGEga25vd24gdGltZSB6b25lLCBhIFpvbmUKICAgICAgICogICBpbnN0YW5jZSB3aXRoIHtAbGluayBab25lLmlzVmFsaWR9ID09IGZhbHNlIGlzIHJldHVybmVkLgogICAgICAgKiAqIElmIGBpbnB1dCBpcyBhIG51bWJlciwgYSBab25lIGluc3RhbmNlIHdpdGggdGhlIHNwZWNpZmllZCBmaXhlZCBvZmZzZXQKICAgICAgICogICBpbiBtaW51dGVzIGlzIHJldHVybmVkLgogICAgICAgKiAqIElmIGBpbnB1dGAgaXMgYG51bGxgIG9yIGB1bmRlZmluZWRgLCB0aGUgZGVmYXVsdCB6b25lIGlzIHJldHVybmVkLgogICAgICAgKiBAcGFyYW0ge3N0cmluZ3xab25lfG51bWJlcn0gW2lucHV0XSAtIHRoZSB2YWx1ZSB0byBiZSBjb252ZXJ0ZWQKICAgICAgICogQHJldHVybiB7Wm9uZX0KICAgICAgICovCiAgICAgIDsKCiAgICAgIEluZm8ubm9ybWFsaXplWm9uZSA9IGZ1bmN0aW9uIG5vcm1hbGl6ZVpvbmUkMShpbnB1dCkgewogICAgICAgIHJldHVybiBub3JtYWxpemVab25lKGlucHV0LCBTZXR0aW5ncy5kZWZhdWx0Wm9uZSk7CiAgICAgIH0KICAgICAgLyoqCiAgICAgICAqIFJldHVybiBhbiBhcnJheSBvZiBzdGFuZGFsb25lIG1vbnRoIG5hbWVzLgogICAgICAgKiBAc2VlIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0phdmFTY3JpcHQvUmVmZXJlbmNlL0dsb2JhbF9PYmplY3RzL0RhdGVUaW1lRm9ybWF0CiAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBbbGVuZ3RoPSdsb25nJ10gLSB0aGUgbGVuZ3RoIG9mIHRoZSBtb250aCByZXByZXNlbnRhdGlvbiwgc3VjaCBhcyAibnVtZXJpYyIsICIyLWRpZ2l0IiwgIm5hcnJvdyIsICJzaG9ydCIsICJsb25nIgogICAgICAgKiBAcGFyYW0ge09iamVjdH0gb3B0cyAtIG9wdGlvbnMKICAgICAgICogQHBhcmFtIHtzdHJpbmd9IFtvcHRzLmxvY2FsZV0gLSB0aGUgbG9jYWxlIGNvZGUKICAgICAgICogQHBhcmFtIHtzdHJpbmd9IFtvcHRzLm51bWJlcmluZ1N5c3RlbT1udWxsXSAtIHRoZSBudW1iZXJpbmcgc3lzdGVtCiAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBbb3B0cy5sb2NPYmo9bnVsbF0gLSBhbiBleGlzdGluZyBsb2NhbGUgb2JqZWN0IHRvIHVzZQogICAgICAgKiBAcGFyYW0ge3N0cmluZ30gW29wdHMub3V0cHV0Q2FsZW5kYXI9J2dyZWdvcnknXSAtIHRoZSBjYWxlbmRhcgogICAgICAgKiBAZXhhbXBsZSBJbmZvLm1vbnRocygpWzBdIC8vPT4gJ0phbnVhcnknCiAgICAgICAqIEBleGFtcGxlIEluZm8ubW9udGhzKCdzaG9ydCcpWzBdIC8vPT4gJ0phbicKICAgICAgICogQGV4YW1wbGUgSW5mby5tb250aHMoJ251bWVyaWMnKVswXSAvLz0+ICcxJwogICAgICAgKiBAZXhhbXBsZSBJbmZvLm1vbnRocygnc2hvcnQnLCB7IGxvY2FsZTogJ2ZyLUNBJyB9IClbMF0gLy89PiAnamFudi4nCiAgICAgICAqIEBleGFtcGxlIEluZm8ubW9udGhzKCdudW1lcmljJywgeyBsb2NhbGU6ICdhcicgfSlbMF0gLy89PiAn2aEnCiAgICAgICAqIEBleGFtcGxlIEluZm8ubW9udGhzKCdsb25nJywgeyBvdXRwdXRDYWxlbmRhcjogJ2lzbGFtaWMnIH0pWzBdIC8vPT4gJ1JhYmnKuyBJJwogICAgICAgKiBAcmV0dXJuIHtbc3RyaW5nXX0KICAgICAgICovCiAgICAgIDsKCiAgICAgIEluZm8ubW9udGhzID0gZnVuY3Rpb24gbW9udGhzKGxlbmd0aCwgX3RlbXApIHsKICAgICAgICBpZiAobGVuZ3RoID09PSB2b2lkIDApIHsKICAgICAgICAgIGxlbmd0aCA9ICJsb25nIjsKICAgICAgICB9CgogICAgICAgIHZhciBfcmVmID0gX3RlbXAgPT09IHZvaWQgMCA/IHt9IDogX3RlbXAsCiAgICAgICAgICAgIF9yZWYkbG9jYWxlID0gX3JlZi5sb2NhbGUsCiAgICAgICAgICAgIGxvY2FsZSA9IF9yZWYkbG9jYWxlID09PSB2b2lkIDAgPyBudWxsIDogX3JlZiRsb2NhbGUsCiAgICAgICAgICAgIF9yZWYkbnVtYmVyaW5nU3lzdGVtID0gX3JlZi5udW1iZXJpbmdTeXN0ZW0sCiAgICAgICAgICAgIG51bWJlcmluZ1N5c3RlbSA9IF9yZWYkbnVtYmVyaW5nU3lzdGVtID09PSB2b2lkIDAgPyBudWxsIDogX3JlZiRudW1iZXJpbmdTeXN0ZW0sCiAgICAgICAgICAgIF9yZWYkbG9jT2JqID0gX3JlZi5sb2NPYmosCiAgICAgICAgICAgIGxvY09iaiA9IF9yZWYkbG9jT2JqID09PSB2b2lkIDAgPyBudWxsIDogX3JlZiRsb2NPYmosCiAgICAgICAgICAgIF9yZWYkb3V0cHV0Q2FsZW5kYXIgPSBfcmVmLm91dHB1dENhbGVuZGFyLAogICAgICAgICAgICBvdXRwdXRDYWxlbmRhciA9IF9yZWYkb3V0cHV0Q2FsZW5kYXIgPT09IHZvaWQgMCA/ICJncmVnb3J5IiA6IF9yZWYkb3V0cHV0Q2FsZW5kYXI7CgogICAgICAgIHJldHVybiAobG9jT2JqIHx8IExvY2FsZS5jcmVhdGUobG9jYWxlLCBudW1iZXJpbmdTeXN0ZW0sIG91dHB1dENhbGVuZGFyKSkubW9udGhzKGxlbmd0aCk7CiAgICAgIH0KICAgICAgLyoqCiAgICAgICAqIFJldHVybiBhbiBhcnJheSBvZiBmb3JtYXQgbW9udGggbmFtZXMuCiAgICAgICAqIEZvcm1hdCBtb250aHMgZGlmZmVyIGZyb20gc3RhbmRhbG9uZSBtb250aHMgaW4gdGhhdCB0aGV5J3JlIG1lYW50IHRvIGFwcGVhciBuZXh0IHRvIHRoZSBkYXkgb2YgdGhlIG1vbnRoLiBJbiBzb21lIGxhbmd1YWdlcywgdGhhdAogICAgICAgKiBjaGFuZ2VzIHRoZSBzdHJpbmcuCiAgICAgICAqIFNlZSB7QGxpbmsgbW9udGhzfQogICAgICAgKiBAcGFyYW0ge3N0cmluZ30gW2xlbmd0aD0nbG9uZyddIC0gdGhlIGxlbmd0aCBvZiB0aGUgbW9udGggcmVwcmVzZW50YXRpb24sIHN1Y2ggYXMgIm51bWVyaWMiLCAiMi1kaWdpdCIsICJuYXJyb3ciLCAic2hvcnQiLCAibG9uZyIKICAgICAgICogQHBhcmFtIHtPYmplY3R9IG9wdHMgLSBvcHRpb25zCiAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBbb3B0cy5sb2NhbGVdIC0gdGhlIGxvY2FsZSBjb2RlCiAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBbb3B0cy5udW1iZXJpbmdTeXN0ZW09bnVsbF0gLSB0aGUgbnVtYmVyaW5nIHN5c3RlbQogICAgICAgKiBAcGFyYW0ge3N0cmluZ30gW29wdHMubG9jT2JqPW51bGxdIC0gYW4gZXhpc3RpbmcgbG9jYWxlIG9iamVjdCB0byB1c2UKICAgICAgICogQHBhcmFtIHtzdHJpbmd9IFtvcHRzLm91dHB1dENhbGVuZGFyPSdncmVnb3J5J10gLSB0aGUgY2FsZW5kYXIKICAgICAgICogQHJldHVybiB7W3N0cmluZ119CiAgICAgICAqLwogICAgICA7CgogICAgICBJbmZvLm1vbnRoc0Zvcm1hdCA9IGZ1bmN0aW9uIG1vbnRoc0Zvcm1hdChsZW5ndGgsIF90ZW1wMikgewogICAgICAgIGlmIChsZW5ndGggPT09IHZvaWQgMCkgewogICAgICAgICAgbGVuZ3RoID0gImxvbmciOwogICAgICAgIH0KCiAgICAgICAgdmFyIF9yZWYyID0gX3RlbXAyID09PSB2b2lkIDAgPyB7fSA6IF90ZW1wMiwKICAgICAgICAgICAgX3JlZjIkbG9jYWxlID0gX3JlZjIubG9jYWxlLAogICAgICAgICAgICBsb2NhbGUgPSBfcmVmMiRsb2NhbGUgPT09IHZvaWQgMCA/IG51bGwgOiBfcmVmMiRsb2NhbGUsCiAgICAgICAgICAgIF9yZWYyJG51bWJlcmluZ1N5c3RlbSA9IF9yZWYyLm51bWJlcmluZ1N5c3RlbSwKICAgICAgICAgICAgbnVtYmVyaW5nU3lzdGVtID0gX3JlZjIkbnVtYmVyaW5nU3lzdGVtID09PSB2b2lkIDAgPyBudWxsIDogX3JlZjIkbnVtYmVyaW5nU3lzdGVtLAogICAgICAgICAgICBfcmVmMiRsb2NPYmogPSBfcmVmMi5sb2NPYmosCiAgICAgICAgICAgIGxvY09iaiA9IF9yZWYyJGxvY09iaiA9PT0gdm9pZCAwID8gbnVsbCA6IF9yZWYyJGxvY09iaiwKICAgICAgICAgICAgX3JlZjIkb3V0cHV0Q2FsZW5kYXIgPSBfcmVmMi5vdXRwdXRDYWxlbmRhciwKICAgICAgICAgICAgb3V0cHV0Q2FsZW5kYXIgPSBfcmVmMiRvdXRwdXRDYWxlbmRhciA9PT0gdm9pZCAwID8gImdyZWdvcnkiIDogX3JlZjIkb3V0cHV0Q2FsZW5kYXI7CgogICAgICAgIHJldHVybiAobG9jT2JqIHx8IExvY2FsZS5jcmVhdGUobG9jYWxlLCBudW1iZXJpbmdTeXN0ZW0sIG91dHB1dENhbGVuZGFyKSkubW9udGhzKGxlbmd0aCwgdHJ1ZSk7CiAgICAgIH0KICAgICAgLyoqCiAgICAgICAqIFJldHVybiBhbiBhcnJheSBvZiBzdGFuZGFsb25lIHdlZWsgbmFtZXMuCiAgICAgICAqIEBzZWUgaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvSmF2YVNjcmlwdC9SZWZlcmVuY2UvR2xvYmFsX09iamVjdHMvRGF0ZVRpbWVGb3JtYXQKICAgICAgICogQHBhcmFtIHtzdHJpbmd9IFtsZW5ndGg9J2xvbmcnXSAtIHRoZSBsZW5ndGggb2YgdGhlIHdlZWtkYXkgcmVwcmVzZW50YXRpb24sIHN1Y2ggYXMgIm5hcnJvdyIsICJzaG9ydCIsICJsb25nIi4KICAgICAgICogQHBhcmFtIHtPYmplY3R9IG9wdHMgLSBvcHRpb25zCiAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBbb3B0cy5sb2NhbGVdIC0gdGhlIGxvY2FsZSBjb2RlCiAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBbb3B0cy5udW1iZXJpbmdTeXN0ZW09bnVsbF0gLSB0aGUgbnVtYmVyaW5nIHN5c3RlbQogICAgICAgKiBAcGFyYW0ge3N0cmluZ30gW29wdHMubG9jT2JqPW51bGxdIC0gYW4gZXhpc3RpbmcgbG9jYWxlIG9iamVjdCB0byB1c2UKICAgICAgICogQGV4YW1wbGUgSW5mby53ZWVrZGF5cygpWzBdIC8vPT4gJ01vbmRheScKICAgICAgICogQGV4YW1wbGUgSW5mby53ZWVrZGF5cygnc2hvcnQnKVswXSAvLz0+ICdNb24nCiAgICAgICAqIEBleGFtcGxlIEluZm8ud2Vla2RheXMoJ3Nob3J0JywgeyBsb2NhbGU6ICdmci1DQScgfSlbMF0gLy89PiAnbHVuLicKICAgICAgICogQGV4YW1wbGUgSW5mby53ZWVrZGF5cygnc2hvcnQnLCB7IGxvY2FsZTogJ2FyJyB9KVswXSAvLz0+ICfYp9mE2KfYq9mG2YrZhicKICAgICAgICogQHJldHVybiB7W3N0cmluZ119CiAgICAgICAqLwogICAgICA7CgogICAgICBJbmZvLndlZWtkYXlzID0gZnVuY3Rpb24gd2Vla2RheXMobGVuZ3RoLCBfdGVtcDMpIHsKICAgICAgICBpZiAobGVuZ3RoID09PSB2b2lkIDApIHsKICAgICAgICAgIGxlbmd0aCA9ICJsb25nIjsKICAgICAgICB9CgogICAgICAgIHZhciBfcmVmMyA9IF90ZW1wMyA9PT0gdm9pZCAwID8ge30gOiBfdGVtcDMsCiAgICAgICAgICAgIF9yZWYzJGxvY2FsZSA9IF9yZWYzLmxvY2FsZSwKICAgICAgICAgICAgbG9jYWxlID0gX3JlZjMkbG9jYWxlID09PSB2b2lkIDAgPyBudWxsIDogX3JlZjMkbG9jYWxlLAogICAgICAgICAgICBfcmVmMyRudW1iZXJpbmdTeXN0ZW0gPSBfcmVmMy5udW1iZXJpbmdTeXN0ZW0sCiAgICAgICAgICAgIG51bWJlcmluZ1N5c3RlbSA9IF9yZWYzJG51bWJlcmluZ1N5c3RlbSA9PT0gdm9pZCAwID8gbnVsbCA6IF9yZWYzJG51bWJlcmluZ1N5c3RlbSwKICAgICAgICAgICAgX3JlZjMkbG9jT2JqID0gX3JlZjMubG9jT2JqLAogICAgICAgICAgICBsb2NPYmogPSBfcmVmMyRsb2NPYmogPT09IHZvaWQgMCA/IG51bGwgOiBfcmVmMyRsb2NPYmo7CgogICAgICAgIHJldHVybiAobG9jT2JqIHx8IExvY2FsZS5jcmVhdGUobG9jYWxlLCBudW1iZXJpbmdTeXN0ZW0sIG51bGwpKS53ZWVrZGF5cyhsZW5ndGgpOwogICAgICB9CiAgICAgIC8qKgogICAgICAgKiBSZXR1cm4gYW4gYXJyYXkgb2YgZm9ybWF0IHdlZWsgbmFtZXMuCiAgICAgICAqIEZvcm1hdCB3ZWVrZGF5cyBkaWZmZXIgZnJvbSBzdGFuZGFsb25lIHdlZWtkYXlzIGluIHRoYXQgdGhleSdyZSBtZWFudCB0byBhcHBlYXIgbmV4dCB0byBtb3JlIGRhdGUgaW5mb3JtYXRpb24uIEluIHNvbWUgbGFuZ3VhZ2VzLCB0aGF0CiAgICAgICAqIGNoYW5nZXMgdGhlIHN0cmluZy4KICAgICAgICogU2VlIHtAbGluayB3ZWVrZGF5c30KICAgICAgICogQHBhcmFtIHtzdHJpbmd9IFtsZW5ndGg9J2xvbmcnXSAtIHRoZSBsZW5ndGggb2YgdGhlIHdlZWtkYXkgcmVwcmVzZW50YXRpb24sIHN1Y2ggYXMgIm5hcnJvdyIsICJzaG9ydCIsICJsb25nIi4KICAgICAgICogQHBhcmFtIHtPYmplY3R9IG9wdHMgLSBvcHRpb25zCiAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBbb3B0cy5sb2NhbGU9bnVsbF0gLSB0aGUgbG9jYWxlIGNvZGUKICAgICAgICogQHBhcmFtIHtzdHJpbmd9IFtvcHRzLm51bWJlcmluZ1N5c3RlbT1udWxsXSAtIHRoZSBudW1iZXJpbmcgc3lzdGVtCiAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBbb3B0cy5sb2NPYmo9bnVsbF0gLSBhbiBleGlzdGluZyBsb2NhbGUgb2JqZWN0IHRvIHVzZQogICAgICAgKiBAcmV0dXJuIHtbc3RyaW5nXX0KICAgICAgICovCiAgICAgIDsKCiAgICAgIEluZm8ud2Vla2RheXNGb3JtYXQgPSBmdW5jdGlvbiB3ZWVrZGF5c0Zvcm1hdChsZW5ndGgsIF90ZW1wNCkgewogICAgICAgIGlmIChsZW5ndGggPT09IHZvaWQgMCkgewogICAgICAgICAgbGVuZ3RoID0gImxvbmciOwogICAgICAgIH0KCiAgICAgICAgdmFyIF9yZWY0ID0gX3RlbXA0ID09PSB2b2lkIDAgPyB7fSA6IF90ZW1wNCwKICAgICAgICAgICAgX3JlZjQkbG9jYWxlID0gX3JlZjQubG9jYWxlLAogICAgICAgICAgICBsb2NhbGUgPSBfcmVmNCRsb2NhbGUgPT09IHZvaWQgMCA/IG51bGwgOiBfcmVmNCRsb2NhbGUsCiAgICAgICAgICAgIF9yZWY0JG51bWJlcmluZ1N5c3RlbSA9IF9yZWY0Lm51bWJlcmluZ1N5c3RlbSwKICAgICAgICAgICAgbnVtYmVyaW5nU3lzdGVtID0gX3JlZjQkbnVtYmVyaW5nU3lzdGVtID09PSB2b2lkIDAgPyBudWxsIDogX3JlZjQkbnVtYmVyaW5nU3lzdGVtLAogICAgICAgICAgICBfcmVmNCRsb2NPYmogPSBfcmVmNC5sb2NPYmosCiAgICAgICAgICAgIGxvY09iaiA9IF9yZWY0JGxvY09iaiA9PT0gdm9pZCAwID8gbnVsbCA6IF9yZWY0JGxvY09iajsKCiAgICAgICAgcmV0dXJuIChsb2NPYmogfHwgTG9jYWxlLmNyZWF0ZShsb2NhbGUsIG51bWJlcmluZ1N5c3RlbSwgbnVsbCkpLndlZWtkYXlzKGxlbmd0aCwgdHJ1ZSk7CiAgICAgIH0KICAgICAgLyoqCiAgICAgICAqIFJldHVybiBhbiBhcnJheSBvZiBtZXJpZGllbXMuCiAgICAgICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRzIC0gb3B0aW9ucwogICAgICAgKiBAcGFyYW0ge3N0cmluZ30gW29wdHMubG9jYWxlXSAtIHRoZSBsb2NhbGUgY29kZQogICAgICAgKiBAZXhhbXBsZSBJbmZvLm1lcmlkaWVtcygpIC8vPT4gWyAnQU0nLCAnUE0nIF0KICAgICAgICogQGV4YW1wbGUgSW5mby5tZXJpZGllbXMoeyBsb2NhbGU6ICdteScgfSkgLy89PiBbICfhgJThgLbhgJThgIDhgLonLCAn4YCK4YCU4YCxJyBdCiAgICAgICAqIEByZXR1cm4ge1tzdHJpbmddfQogICAgICAgKi8KICAgICAgOwoKICAgICAgSW5mby5tZXJpZGllbXMgPSBmdW5jdGlvbiBtZXJpZGllbXMoX3RlbXA1KSB7CiAgICAgICAgdmFyIF9yZWY1ID0gX3RlbXA1ID09PSB2b2lkIDAgPyB7fSA6IF90ZW1wNSwKICAgICAgICAgICAgX3JlZjUkbG9jYWxlID0gX3JlZjUubG9jYWxlLAogICAgICAgICAgICBsb2NhbGUgPSBfcmVmNSRsb2NhbGUgPT09IHZvaWQgMCA/IG51bGwgOiBfcmVmNSRsb2NhbGU7CgogICAgICAgIHJldHVybiBMb2NhbGUuY3JlYXRlKGxvY2FsZSkubWVyaWRpZW1zKCk7CiAgICAgIH0KICAgICAgLyoqCiAgICAgICAqIFJldHVybiBhbiBhcnJheSBvZiBlcmFzLCBzdWNoIGFzIFsnQkMnLCAnQUQnXS4gVGhlIGxvY2FsZSBjYW4gYmUgc3BlY2lmaWVkLCBidXQgdGhlIGNhbGVuZGFyIHN5c3RlbSBpcyBhbHdheXMgR3JlZ29yaWFuLgogICAgICAgKiBAcGFyYW0ge3N0cmluZ30gW2xlbmd0aD0nc2hvcnQnXSAtIHRoZSBsZW5ndGggb2YgdGhlIGVyYSByZXByZXNlbnRhdGlvbiwgc3VjaCBhcyAic2hvcnQiIG9yICJsb25nIi4KICAgICAgICogQHBhcmFtIHtPYmplY3R9IG9wdHMgLSBvcHRpb25zCiAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBbb3B0cy5sb2NhbGVdIC0gdGhlIGxvY2FsZSBjb2RlCiAgICAgICAqIEBleGFtcGxlIEluZm8uZXJhcygpIC8vPT4gWyAnQkMnLCAnQUQnIF0KICAgICAgICogQGV4YW1wbGUgSW5mby5lcmFzKCdsb25nJykgLy89PiBbICdCZWZvcmUgQ2hyaXN0JywgJ0Fubm8gRG9taW5pJyBdCiAgICAgICAqIEBleGFtcGxlIEluZm8uZXJhcygnbG9uZycsIHsgbG9jYWxlOiAnZnInIH0pIC8vPT4gWyAnYXZhbnQgSsOpc3VzLUNocmlzdCcsICdhcHLDqHMgSsOpc3VzLUNocmlzdCcgXQogICAgICAgKiBAcmV0dXJuIHtbc3RyaW5nXX0KICAgICAgICovCiAgICAgIDsKCiAgICAgIEluZm8uZXJhcyA9IGZ1bmN0aW9uIGVyYXMobGVuZ3RoLCBfdGVtcDYpIHsKICAgICAgICBpZiAobGVuZ3RoID09PSB2b2lkIDApIHsKICAgICAgICAgIGxlbmd0aCA9ICJzaG9ydCI7CiAgICAgICAgfQoKICAgICAgICB2YXIgX3JlZjYgPSBfdGVtcDYgPT09IHZvaWQgMCA/IHt9IDogX3RlbXA2LAogICAgICAgICAgICBfcmVmNiRsb2NhbGUgPSBfcmVmNi5sb2NhbGUsCiAgICAgICAgICAgIGxvY2FsZSA9IF9yZWY2JGxvY2FsZSA9PT0gdm9pZCAwID8gbnVsbCA6IF9yZWY2JGxvY2FsZTsKCiAgICAgICAgcmV0dXJuIExvY2FsZS5jcmVhdGUobG9jYWxlLCBudWxsLCAiZ3JlZ29yeSIpLmVyYXMobGVuZ3RoKTsKICAgICAgfQogICAgICAvKioKICAgICAgICogUmV0dXJuIHRoZSBzZXQgb2YgYXZhaWxhYmxlIGZlYXR1cmVzIGluIHRoaXMgZW52aXJvbm1lbnQuCiAgICAgICAqIFNvbWUgZmVhdHVyZXMgb2YgTHV4b24gYXJlIG5vdCBhdmFpbGFibGUgaW4gYWxsIGVudmlyb25tZW50cy4gRm9yIGV4YW1wbGUsIG9uIG9sZGVyIGJyb3dzZXJzLCB0aW1lem9uZSBzdXBwb3J0IGlzIG5vdCBhdmFpbGFibGUuIFVzZSB0aGlzIGZ1bmN0aW9uIHRvIGZpZ3VyZSBvdXQgaWYgdGhhdCdzIHRoZSBjYXNlLgogICAgICAgKiBLZXlzOgogICAgICAgKiAqIGB6b25lc2A6IHdoZXRoZXIgdGhpcyBlbnZpcm9ubWVudCBzdXBwb3J0cyBJQU5BIHRpbWV6b25lcwogICAgICAgKiAqIGBpbnRsVG9rZW5zYDogd2hldGhlciB0aGlzIGVudmlyb25tZW50IHN1cHBvcnRzIGludGVybmF0aW9uYWxpemVkIHRva2VuLWJhc2VkIGZvcm1hdHRpbmcvcGFyc2luZwogICAgICAgKiAqIGBpbnRsYDogd2hldGhlciB0aGlzIGVudmlyb25tZW50IHN1cHBvcnRzIGdlbmVyYWwgaW50ZXJuYXRpb25hbGl6YXRpb24KICAgICAgICogKiBgcmVsYXRpdmVgOiB3aGV0aGVyIHRoaXMgZW52aXJvbm1lbnQgc3VwcG9ydHMgcmVsYXRpdmUgdGltZSBmb3JtYXR0aW5nCiAgICAgICAqIEBleGFtcGxlIEluZm8uZmVhdHVyZXMoKSAvLz0+IHsgaW50bDogdHJ1ZSwgaW50bFRva2VuczogZmFsc2UsIHpvbmVzOiB0cnVlLCByZWxhdGl2ZTogZmFsc2UgfQogICAgICAgKiBAcmV0dXJuIHtPYmplY3R9CiAgICAgICAqLwogICAgICA7CgogICAgICBJbmZvLmZlYXR1cmVzID0gZnVuY3Rpb24gZmVhdHVyZXMoKSB7CiAgICAgICAgdmFyIGludGwgPSBmYWxzZSwKICAgICAgICAgICAgaW50bFRva2VucyA9IGZhbHNlLAogICAgICAgICAgICB6b25lcyA9IGZhbHNlLAogICAgICAgICAgICByZWxhdGl2ZSA9IGZhbHNlOwoKICAgICAgICBpZiAoaGFzSW50bCgpKSB7CiAgICAgICAgICBpbnRsID0gdHJ1ZTsKICAgICAgICAgIGludGxUb2tlbnMgPSBoYXNGb3JtYXRUb1BhcnRzKCk7CiAgICAgICAgICByZWxhdGl2ZSA9IGhhc1JlbGF0aXZlKCk7CgogICAgICAgICAgdHJ5IHsKICAgICAgICAgICAgem9uZXMgPSBuZXcgSW50bC5EYXRlVGltZUZvcm1hdCgiZW4iLCB7CiAgICAgICAgICAgICAgdGltZVpvbmU6ICJBbWVyaWNhL05ld19Zb3JrIgogICAgICAgICAgICB9KS5yZXNvbHZlZE9wdGlvbnMoKS50aW1lWm9uZSA9PT0gIkFtZXJpY2EvTmV3X1lvcmsiOwogICAgICAgICAgfSBjYXRjaCAoZSkgewogICAgICAgICAgICB6b25lcyA9IGZhbHNlOwogICAgICAgICAgfQogICAgICAgIH0KCiAgICAgICAgcmV0dXJuIHsKICAgICAgICAgIGludGw6IGludGwsCiAgICAgICAgICBpbnRsVG9rZW5zOiBpbnRsVG9rZW5zLAogICAgICAgICAgem9uZXM6IHpvbmVzLAogICAgICAgICAgcmVsYXRpdmU6IHJlbGF0aXZlCiAgICAgICAgfTsKICAgICAgfTsKCiAgICAgIHJldHVybiBJbmZvOwogICAgfSgpOwoKICAgIGZ1bmN0aW9uIGRheURpZmYoZWFybGllciwgbGF0ZXIpIHsKICAgICAgdmFyIHV0Y0RheVN0YXJ0ID0gZnVuY3Rpb24gdXRjRGF5U3RhcnQoZHQpIHsKICAgICAgICByZXR1cm4gZHQudG9VVEMoMCwgewogICAgICAgICAga2VlcExvY2FsVGltZTogdHJ1ZQogICAgICAgIH0pLnN0YXJ0T2YoImRheSIpLnZhbHVlT2YoKTsKICAgICAgfSwKICAgICAgICAgIG1zID0gdXRjRGF5U3RhcnQobGF0ZXIpIC0gdXRjRGF5U3RhcnQoZWFybGllcik7CgogICAgICByZXR1cm4gTWF0aC5mbG9vcihEdXJhdGlvbi5mcm9tTWlsbGlzKG1zKS5hcygiZGF5cyIpKTsKICAgIH0KCiAgICBmdW5jdGlvbiBoaWdoT3JkZXJEaWZmcyhjdXJzb3IsIGxhdGVyLCB1bml0cykgewogICAgICB2YXIgZGlmZmVycyA9IFtbInllYXJzIiwgZnVuY3Rpb24gKGEsIGIpIHsKICAgICAgICByZXR1cm4gYi55ZWFyIC0gYS55ZWFyOwogICAgICB9XSwgWyJxdWFydGVycyIsIGZ1bmN0aW9uIChhLCBiKSB7CiAgICAgICAgcmV0dXJuIGIucXVhcnRlciAtIGEucXVhcnRlcjsKICAgICAgfV0sIFsibW9udGhzIiwgZnVuY3Rpb24gKGEsIGIpIHsKICAgICAgICByZXR1cm4gYi5tb250aCAtIGEubW9udGggKyAoYi55ZWFyIC0gYS55ZWFyKSAqIDEyOwogICAgICB9XSwgWyJ3ZWVrcyIsIGZ1bmN0aW9uIChhLCBiKSB7CiAgICAgICAgdmFyIGRheXMgPSBkYXlEaWZmKGEsIGIpOwogICAgICAgIHJldHVybiAoZGF5cyAtIGRheXMgJSA3KSAvIDc7CiAgICAgIH1dLCBbImRheXMiLCBkYXlEaWZmXV07CiAgICAgIHZhciByZXN1bHRzID0ge307CiAgICAgIHZhciBsb3dlc3RPcmRlciwgaGlnaFdhdGVyOwoKICAgICAgZm9yICh2YXIgX2kgPSAwLCBfZGlmZmVycyA9IGRpZmZlcnM7IF9pIDwgX2RpZmZlcnMubGVuZ3RoOyBfaSsrKSB7CiAgICAgICAgdmFyIF9kaWZmZXJzJF9pID0gX2RpZmZlcnNbX2ldLAogICAgICAgICAgICB1bml0ID0gX2RpZmZlcnMkX2lbMF0sCiAgICAgICAgICAgIGRpZmZlciA9IF9kaWZmZXJzJF9pWzFdOwoKICAgICAgICBpZiAodW5pdHMuaW5kZXhPZih1bml0KSA+PSAwKSB7CiAgICAgICAgICB2YXIgX2N1cnNvciRwbHVzOwoKICAgICAgICAgIGxvd2VzdE9yZGVyID0gdW5pdDsKICAgICAgICAgIHZhciBkZWx0YSA9IGRpZmZlcihjdXJzb3IsIGxhdGVyKTsKICAgICAgICAgIGhpZ2hXYXRlciA9IGN1cnNvci5wbHVzKChfY3Vyc29yJHBsdXMgPSB7fSwgX2N1cnNvciRwbHVzW3VuaXRdID0gZGVsdGEsIF9jdXJzb3IkcGx1cykpOwoKICAgICAgICAgIGlmIChoaWdoV2F0ZXIgPiBsYXRlcikgewogICAgICAgICAgICB2YXIgX2N1cnNvciRwbHVzMjsKCiAgICAgICAgICAgIGN1cnNvciA9IGN1cnNvci5wbHVzKChfY3Vyc29yJHBsdXMyID0ge30sIF9jdXJzb3IkcGx1czJbdW5pdF0gPSBkZWx0YSAtIDEsIF9jdXJzb3IkcGx1czIpKTsKICAgICAgICAgICAgZGVsdGEgLT0gMTsKICAgICAgICAgIH0gZWxzZSB7CiAgICAgICAgICAgIGN1cnNvciA9IGhpZ2hXYXRlcjsKICAgICAgICAgIH0KCiAgICAgICAgICByZXN1bHRzW3VuaXRdID0gZGVsdGE7CiAgICAgICAgfQogICAgICB9CgogICAgICByZXR1cm4gW2N1cnNvciwgcmVzdWx0cywgaGlnaFdhdGVyLCBsb3dlc3RPcmRlcl07CiAgICB9CgogICAgZnVuY3Rpb24gX2RpZmYgKGVhcmxpZXIsIGxhdGVyLCB1bml0cywgb3B0cykgewogICAgICB2YXIgX2hpZ2hPcmRlckRpZmZzID0gaGlnaE9yZGVyRGlmZnMoZWFybGllciwgbGF0ZXIsIHVuaXRzKSwKICAgICAgICAgIGN1cnNvciA9IF9oaWdoT3JkZXJEaWZmc1swXSwKICAgICAgICAgIHJlc3VsdHMgPSBfaGlnaE9yZGVyRGlmZnNbMV0sCiAgICAgICAgICBoaWdoV2F0ZXIgPSBfaGlnaE9yZGVyRGlmZnNbMl0sCiAgICAgICAgICBsb3dlc3RPcmRlciA9IF9oaWdoT3JkZXJEaWZmc1szXTsKCiAgICAgIHZhciByZW1haW5pbmdNaWxsaXMgPSBsYXRlciAtIGN1cnNvcjsKICAgICAgdmFyIGxvd2VyT3JkZXJVbml0cyA9IHVuaXRzLmZpbHRlcihmdW5jdGlvbiAodSkgewogICAgICAgIHJldHVybiBbImhvdXJzIiwgIm1pbnV0ZXMiLCAic2Vjb25kcyIsICJtaWxsaXNlY29uZHMiXS5pbmRleE9mKHUpID49IDA7CiAgICAgIH0pOwoKICAgICAgaWYgKGxvd2VyT3JkZXJVbml0cy5sZW5ndGggPT09IDApIHsKICAgICAgICBpZiAoaGlnaFdhdGVyIDwgbGF0ZXIpIHsKICAgICAgICAgIHZhciBfY3Vyc29yJHBsdXMzOwoKICAgICAgICAgIGhpZ2hXYXRlciA9IGN1cnNvci5wbHVzKChfY3Vyc29yJHBsdXMzID0ge30sIF9jdXJzb3IkcGx1czNbbG93ZXN0T3JkZXJdID0gMSwgX2N1cnNvciRwbHVzMykpOwogICAgICAgIH0KCiAgICAgICAgaWYgKGhpZ2hXYXRlciAhPT0gY3Vyc29yKSB7CiAgICAgICAgICByZXN1bHRzW2xvd2VzdE9yZGVyXSA9IChyZXN1bHRzW2xvd2VzdE9yZGVyXSB8fCAwKSArIHJlbWFpbmluZ01pbGxpcyAvIChoaWdoV2F0ZXIgLSBjdXJzb3IpOwogICAgICAgIH0KICAgICAgfQoKICAgICAgdmFyIGR1cmF0aW9uID0gRHVyYXRpb24uZnJvbU9iamVjdChPYmplY3QuYXNzaWduKHJlc3VsdHMsIG9wdHMpKTsKCiAgICAgIGlmIChsb3dlck9yZGVyVW5pdHMubGVuZ3RoID4gMCkgewogICAgICAgIHZhciBfRHVyYXRpb24kZnJvbU1pbGxpczsKCiAgICAgICAgcmV0dXJuIChfRHVyYXRpb24kZnJvbU1pbGxpcyA9IER1cmF0aW9uLmZyb21NaWxsaXMocmVtYWluaW5nTWlsbGlzLCBvcHRzKSkuc2hpZnRUby5hcHBseShfRHVyYXRpb24kZnJvbU1pbGxpcywgbG93ZXJPcmRlclVuaXRzKS5wbHVzKGR1cmF0aW9uKTsKICAgICAgfSBlbHNlIHsKICAgICAgICByZXR1cm4gZHVyYXRpb247CiAgICAgIH0KICAgIH0KCiAgICB2YXIgbnVtYmVyaW5nU3lzdGVtcyA9IHsKICAgICAgYXJhYjogIltcdTA2NjAtXHUwNjY5XSIsCiAgICAgIGFyYWJleHQ6ICJbXHUwNkYwLVx1MDZGOV0iLAogICAgICBiYWxpOiAiW1x1MUI1MC1cdTFCNTldIiwKICAgICAgYmVuZzogIltcdTA5RTYtXHUwOUVGXSIsCiAgICAgIGRldmE6ICJbXHUwOTY2LVx1MDk2Rl0iLAogICAgICBmdWxsd2lkZTogIltcdUZGMTAtXHVGRjE5XSIsCiAgICAgIGd1anI6ICJbXHUwQUU2LVx1MEFFRl0iLAogICAgICBoYW5pZGVjOiAiW+OAh3zkuIB85LqMfOS4iXzlm5t85LqUfOWFrXzkuIN85YWrfOS5nV0iLAogICAgICBraG1yOiAiW1x1MTdFMC1cdTE3RTldIiwKICAgICAga25kYTogIltcdTBDRTYtXHUwQ0VGXSIsCiAgICAgIGxhb286ICJbXHUwRUQwLVx1MEVEOV0iLAogICAgICBsaW1iOiAiW1x1MTk0Ni1cdTE5NEZdIiwKICAgICAgbWx5bTogIltcdTBENjYtXHUwRDZGXSIsCiAgICAgIG1vbmc6ICJbXHUxODEwLVx1MTgxOV0iLAogICAgICBteW1yOiAiW1x1MTA0MC1cdTEwNDldIiwKICAgICAgb3J5YTogIltcdTBCNjYtXHUwQjZGXSIsCiAgICAgIHRhbWxkZWM6ICJbXHUwQkU2LVx1MEJFRl0iLAogICAgICB0ZWx1OiAiW1x1MEM2Ni1cdTBDNkZdIiwKICAgICAgdGhhaTogIltcdTBFNTAtXHUwRTU5XSIsCiAgICAgIHRpYnQ6ICJbXHUwRjIwLVx1MEYyOV0iLAogICAgICBsYXRuOiAiXFxkIgogICAgfTsKICAgIHZhciBudW1iZXJpbmdTeXN0ZW1zVVRGMTYgPSB7CiAgICAgIGFyYWI6IFsxNjMyLCAxNjQxXSwKICAgICAgYXJhYmV4dDogWzE3NzYsIDE3ODVdLAogICAgICBiYWxpOiBbNjk5MiwgNzAwMV0sCiAgICAgIGJlbmc6IFsyNTM0LCAyNTQzXSwKICAgICAgZGV2YTogWzI0MDYsIDI0MTVdLAogICAgICBmdWxsd2lkZTogWzY1Mjk2LCA2NTMwM10sCiAgICAgIGd1anI6IFsyNzkwLCAyNzk5XSwKICAgICAga2htcjogWzYxMTIsIDYxMjFdLAogICAgICBrbmRhOiBbMzMwMiwgMzMxMV0sCiAgICAgIGxhb286IFszNzkyLCAzODAxXSwKICAgICAgbGltYjogWzY0NzAsIDY0NzldLAogICAgICBtbHltOiBbMzQzMCwgMzQzOV0sCiAgICAgIG1vbmc6IFs2MTYwLCA2MTY5XSwKICAgICAgbXltcjogWzQxNjAsIDQxNjldLAogICAgICBvcnlhOiBbMjkxOCwgMjkyN10sCiAgICAgIHRhbWxkZWM6IFszMDQ2LCAzMDU1XSwKICAgICAgdGVsdTogWzMxNzQsIDMxODNdLAogICAgICB0aGFpOiBbMzY2NCwgMzY3M10sCiAgICAgIHRpYnQ6IFszODcyLCAzODgxXQogICAgfTsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lCgogICAgdmFyIGhhbmlkZWNDaGFycyA9IG51bWJlcmluZ1N5c3RlbXMuaGFuaWRlYy5yZXBsYWNlKC9bXFt8XF1dL2csICIiKS5zcGxpdCgiIik7CiAgICBmdW5jdGlvbiBwYXJzZURpZ2l0cyhzdHIpIHsKICAgICAgdmFyIHZhbHVlID0gcGFyc2VJbnQoc3RyLCAxMCk7CgogICAgICBpZiAoaXNOYU4odmFsdWUpKSB7CiAgICAgICAgdmFsdWUgPSAiIjsKCiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHIubGVuZ3RoOyBpKyspIHsKICAgICAgICAgIHZhciBjb2RlID0gc3RyLmNoYXJDb2RlQXQoaSk7CgogICAgICAgICAgaWYgKHN0cltpXS5zZWFyY2gobnVtYmVyaW5nU3lzdGVtcy5oYW5pZGVjKSAhPT0gLTEpIHsKICAgICAgICAgICAgdmFsdWUgKz0gaGFuaWRlY0NoYXJzLmluZGV4T2Yoc3RyW2ldKTsKICAgICAgICAgIH0gZWxzZSB7CiAgICAgICAgICAgIGZvciAodmFyIGtleSBpbiBudW1iZXJpbmdTeXN0ZW1zVVRGMTYpIHsKICAgICAgICAgICAgICB2YXIgX251bWJlcmluZ1N5c3RlbXNVVEYgPSBudW1iZXJpbmdTeXN0ZW1zVVRGMTZba2V5XSwKICAgICAgICAgICAgICAgICAgbWluID0gX251bWJlcmluZ1N5c3RlbXNVVEZbMF0sCiAgICAgICAgICAgICAgICAgIG1heCA9IF9udW1iZXJpbmdTeXN0ZW1zVVRGWzFdOwoKICAgICAgICAgICAgICBpZiAoY29kZSA+PSBtaW4gJiYgY29kZSA8PSBtYXgpIHsKICAgICAgICAgICAgICAgIHZhbHVlICs9IGNvZGUgLSBtaW47CiAgICAgICAgICAgICAgfQogICAgICAgICAgICB9CiAgICAgICAgICB9CiAgICAgICAgfQoKICAgICAgICByZXR1cm4gcGFyc2VJbnQodmFsdWUsIDEwKTsKICAgICAgfSBlbHNlIHsKICAgICAgICByZXR1cm4gdmFsdWU7CiAgICAgIH0KICAgIH0KICAgIGZ1bmN0aW9uIGRpZ2l0UmVnZXgoX3JlZiwgYXBwZW5kKSB7CiAgICAgIHZhciBudW1iZXJpbmdTeXN0ZW0gPSBfcmVmLm51bWJlcmluZ1N5c3RlbTsKCiAgICAgIGlmIChhcHBlbmQgPT09IHZvaWQgMCkgewogICAgICAgIGFwcGVuZCA9ICIiOwogICAgICB9CgogICAgICByZXR1cm4gbmV3IFJlZ0V4cCgiIiArIG51bWJlcmluZ1N5c3RlbXNbbnVtYmVyaW5nU3lzdGVtIHx8ICJsYXRuIl0gKyBhcHBlbmQpOwogICAgfQoKICAgIHZhciBNSVNTSU5HX0ZUUCA9ICJtaXNzaW5nIEludGwuRGF0ZVRpbWVGb3JtYXQuZm9ybWF0VG9QYXJ0cyBzdXBwb3J0IjsKCiAgICBmdW5jdGlvbiBpbnRVbml0KHJlZ2V4LCBwb3N0KSB7CiAgICAgIGlmIChwb3N0ID09PSB2b2lkIDApIHsKICAgICAgICBwb3N0ID0gZnVuY3Rpb24gcG9zdChpKSB7CiAgICAgICAgICByZXR1cm4gaTsKICAgICAgICB9OwogICAgICB9CgogICAgICByZXR1cm4gewogICAgICAgIHJlZ2V4OiByZWdleCwKICAgICAgICBkZXNlcjogZnVuY3Rpb24gZGVzZXIoX3JlZikgewogICAgICAgICAgdmFyIHMgPSBfcmVmWzBdOwogICAgICAgICAgcmV0dXJuIHBvc3QocGFyc2VEaWdpdHMocykpOwogICAgICAgIH0KICAgICAgfTsKICAgIH0KCiAgICB2YXIgTkJTUCA9IFN0cmluZy5mcm9tQ2hhckNvZGUoMTYwKTsKICAgIHZhciBzcGFjZU9yTkJTUCA9ICIoIHwiICsgTkJTUCArICIpIjsKICAgIHZhciBzcGFjZU9yTkJTUFJlZ0V4cCA9IG5ldyBSZWdFeHAoc3BhY2VPck5CU1AsICJnIik7CgogICAgZnVuY3Rpb24gZml4TGlzdFJlZ2V4KHMpIHsKICAgICAgLy8gbWFrZSBkb3RzIG9wdGlvbmFsIGFuZCBhbHNvIG1ha2UgdGhlbSBsaXRlcmFsCiAgICAgIC8vIG1ha2Ugc3BhY2UgYW5kIG5vbiBicmVha2FibGUgc3BhY2UgY2hhcmFjdGVycyBpbnRlcmNoYW5nZWFibGUKICAgICAgcmV0dXJuIHMucmVwbGFjZSgvXC4vZywgIlxcLj8iKS5yZXBsYWNlKHNwYWNlT3JOQlNQUmVnRXhwLCBzcGFjZU9yTkJTUCk7CiAgICB9CgogICAgZnVuY3Rpb24gc3RyaXBJbnNlbnNpdGl2aXRpZXMocykgewogICAgICByZXR1cm4gcy5yZXBsYWNlKC9cLi9nLCAiIikgLy8gaWdub3JlIGRvdHMgdGhhdCB3ZXJlIG1hZGUgb3B0aW9uYWwKICAgICAgLnJlcGxhY2Uoc3BhY2VPck5CU1BSZWdFeHAsICIgIikgLy8gaW50ZXJjaGFuZ2Ugc3BhY2UgYW5kIG5ic3AKICAgICAgLnRvTG93ZXJDYXNlKCk7CiAgICB9CgogICAgZnVuY3Rpb24gb25lT2Yoc3RyaW5ncywgc3RhcnRJbmRleCkgewogICAgICBpZiAoc3RyaW5ncyA9PT0gbnVsbCkgewogICAgICAgIHJldHVybiBudWxsOwogICAgICB9IGVsc2UgewogICAgICAgIHJldHVybiB7CiAgICAgICAgICByZWdleDogUmVnRXhwKHN0cmluZ3MubWFwKGZpeExpc3RSZWdleCkuam9pbigifCIpKSwKICAgICAgICAgIGRlc2VyOiBmdW5jdGlvbiBkZXNlcihfcmVmMikgewogICAgICAgICAgICB2YXIgcyA9IF9yZWYyWzBdOwogICAgICAgICAgICByZXR1cm4gc3RyaW5ncy5maW5kSW5kZXgoZnVuY3Rpb24gKGkpIHsKICAgICAgICAgICAgICByZXR1cm4gc3RyaXBJbnNlbnNpdGl2aXRpZXMocykgPT09IHN0cmlwSW5zZW5zaXRpdml0aWVzKGkpOwogICAgICAgICAgICB9KSArIHN0YXJ0SW5kZXg7CiAgICAgICAgICB9CiAgICAgICAgfTsKICAgICAgfQogICAgfQoKICAgIGZ1bmN0aW9uIG9mZnNldChyZWdleCwgZ3JvdXBzKSB7CiAgICAgIHJldHVybiB7CiAgICAgICAgcmVnZXg6IHJlZ2V4LAogICAgICAgIGRlc2VyOiBmdW5jdGlvbiBkZXNlcihfcmVmMykgewogICAgICAgICAgdmFyIGggPSBfcmVmM1sxXSwKICAgICAgICAgICAgICBtID0gX3JlZjNbMl07CiAgICAgICAgICByZXR1cm4gc2lnbmVkT2Zmc2V0KGgsIG0pOwogICAgICAgIH0sCiAgICAgICAgZ3JvdXBzOiBncm91cHMKICAgICAgfTsKICAgIH0KCiAgICBmdW5jdGlvbiBzaW1wbGUocmVnZXgpIHsKICAgICAgcmV0dXJuIHsKICAgICAgICByZWdleDogcmVnZXgsCiAgICAgICAgZGVzZXI6IGZ1bmN0aW9uIGRlc2VyKF9yZWY0KSB7CiAgICAgICAgICB2YXIgcyA9IF9yZWY0WzBdOwogICAgICAgICAgcmV0dXJuIHM7CiAgICAgICAgfQogICAgICB9OwogICAgfQoKICAgIGZ1bmN0aW9uIGVzY2FwZVRva2VuKHZhbHVlKSB7CiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11c2VsZXNzLWVzY2FwZQogICAgICByZXR1cm4gdmFsdWUucmVwbGFjZSgvW1wtXFtcXXt9KCkqKz8uLFxcXF4kfCNcc10vZywgIlxcJCYiKTsKICAgIH0KCiAgICBmdW5jdGlvbiB1bml0Rm9yVG9rZW4odG9rZW4sIGxvYykgewogICAgICB2YXIgb25lID0gZGlnaXRSZWdleChsb2MpLAogICAgICAgICAgdHdvID0gZGlnaXRSZWdleChsb2MsICJ7Mn0iKSwKICAgICAgICAgIHRocmVlID0gZGlnaXRSZWdleChsb2MsICJ7M30iKSwKICAgICAgICAgIGZvdXIgPSBkaWdpdFJlZ2V4KGxvYywgIns0fSIpLAogICAgICAgICAgc2l4ID0gZGlnaXRSZWdleChsb2MsICJ7Nn0iKSwKICAgICAgICAgIG9uZU9yVHdvID0gZGlnaXRSZWdleChsb2MsICJ7MSwyfSIpLAogICAgICAgICAgb25lVG9UaHJlZSA9IGRpZ2l0UmVnZXgobG9jLCAiezEsM30iKSwKICAgICAgICAgIG9uZVRvU2l4ID0gZGlnaXRSZWdleChsb2MsICJ7MSw2fSIpLAogICAgICAgICAgb25lVG9OaW5lID0gZGlnaXRSZWdleChsb2MsICJ7MSw5fSIpLAogICAgICAgICAgdHdvVG9Gb3VyID0gZGlnaXRSZWdleChsb2MsICJ7Miw0fSIpLAogICAgICAgICAgZm91clRvU2l4ID0gZGlnaXRSZWdleChsb2MsICJ7NCw2fSIpLAogICAgICAgICAgbGl0ZXJhbCA9IGZ1bmN0aW9uIGxpdGVyYWwodCkgewogICAgICAgIHJldHVybiB7CiAgICAgICAgICByZWdleDogUmVnRXhwKGVzY2FwZVRva2VuKHQudmFsKSksCiAgICAgICAgICBkZXNlcjogZnVuY3Rpb24gZGVzZXIoX3JlZjUpIHsKICAgICAgICAgICAgdmFyIHMgPSBfcmVmNVswXTsKICAgICAgICAgICAgcmV0dXJuIHM7CiAgICAgICAgICB9LAogICAgICAgICAgbGl0ZXJhbDogdHJ1ZQogICAgICAgIH07CiAgICAgIH0sCiAgICAgICAgICB1bml0YXRlID0gZnVuY3Rpb24gdW5pdGF0ZSh0KSB7CiAgICAgICAgaWYgKHRva2VuLmxpdGVyYWwpIHsKICAgICAgICAgIHJldHVybiBsaXRlcmFsKHQpOwogICAgICAgIH0KCiAgICAgICAgc3dpdGNoICh0LnZhbCkgewogICAgICAgICAgLy8gZXJhCiAgICAgICAgICBjYXNlICJHIjoKICAgICAgICAgICAgcmV0dXJuIG9uZU9mKGxvYy5lcmFzKCJzaG9ydCIsIGZhbHNlKSwgMCk7CgogICAgICAgICAgY2FzZSAiR0ciOgogICAgICAgICAgICByZXR1cm4gb25lT2YobG9jLmVyYXMoImxvbmciLCBmYWxzZSksIDApOwogICAgICAgICAgLy8geWVhcnMKCiAgICAgICAgICBjYXNlICJ5IjoKICAgICAgICAgICAgcmV0dXJuIGludFVuaXQob25lVG9TaXgpOwoKICAgICAgICAgIGNhc2UgInl5IjoKICAgICAgICAgICAgcmV0dXJuIGludFVuaXQodHdvVG9Gb3VyLCB1bnRydW5jYXRlWWVhcik7CgogICAgICAgICAgY2FzZSAieXl5eSI6CiAgICAgICAgICAgIHJldHVybiBpbnRVbml0KGZvdXIpOwoKICAgICAgICAgIGNhc2UgInl5eXl5IjoKICAgICAgICAgICAgcmV0dXJuIGludFVuaXQoZm91clRvU2l4KTsKCiAgICAgICAgICBjYXNlICJ5eXl5eXkiOgogICAgICAgICAgICByZXR1cm4gaW50VW5pdChzaXgpOwogICAgICAgICAgLy8gbW9udGhzCgogICAgICAgICAgY2FzZSAiTSI6CiAgICAgICAgICAgIHJldHVybiBpbnRVbml0KG9uZU9yVHdvKTsKCiAgICAgICAgICBjYXNlICJNTSI6CiAgICAgICAgICAgIHJldHVybiBpbnRVbml0KHR3byk7CgogICAgICAgICAgY2FzZSAiTU1NIjoKICAgICAgICAgICAgcmV0dXJuIG9uZU9mKGxvYy5tb250aHMoInNob3J0IiwgdHJ1ZSwgZmFsc2UpLCAxKTsKCiAgICAgICAgICBjYXNlICJNTU1NIjoKICAgICAgICAgICAgcmV0dXJuIG9uZU9mKGxvYy5tb250aHMoImxvbmciLCB0cnVlLCBmYWxzZSksIDEpOwoKICAgICAgICAgIGNhc2UgIkwiOgogICAgICAgICAgICByZXR1cm4gaW50VW5pdChvbmVPclR3byk7CgogICAgICAgICAgY2FzZSAiTEwiOgogICAgICAgICAgICByZXR1cm4gaW50VW5pdCh0d28pOwoKICAgICAgICAgIGNhc2UgIkxMTCI6CiAgICAgICAgICAgIHJldHVybiBvbmVPZihsb2MubW9udGhzKCJzaG9ydCIsIGZhbHNlLCBmYWxzZSksIDEpOwoKICAgICAgICAgIGNhc2UgIkxMTEwiOgogICAgICAgICAgICByZXR1cm4gb25lT2YobG9jLm1vbnRocygibG9uZyIsIGZhbHNlLCBmYWxzZSksIDEpOwogICAgICAgICAgLy8gZGF0ZXMKCiAgICAgICAgICBjYXNlICJkIjoKICAgICAgICAgICAgcmV0dXJuIGludFVuaXQob25lT3JUd28pOwoKICAgICAgICAgIGNhc2UgImRkIjoKICAgICAgICAgICAgcmV0dXJuIGludFVuaXQodHdvKTsKICAgICAgICAgIC8vIG9yZGluYWxzCgogICAgICAgICAgY2FzZSAibyI6CiAgICAgICAgICAgIHJldHVybiBpbnRVbml0KG9uZVRvVGhyZWUpOwoKICAgICAgICAgIGNhc2UgIm9vbyI6CiAgICAgICAgICAgIHJldHVybiBpbnRVbml0KHRocmVlKTsKICAgICAgICAgIC8vIHRpbWUKCiAgICAgICAgICBjYXNlICJISCI6CiAgICAgICAgICAgIHJldHVybiBpbnRVbml0KHR3byk7CgogICAgICAgICAgY2FzZSAiSCI6CiAgICAgICAgICAgIHJldHVybiBpbnRVbml0KG9uZU9yVHdvKTsKCiAgICAgICAgICBjYXNlICJoaCI6CiAgICAgICAgICAgIHJldHVybiBpbnRVbml0KHR3byk7CgogICAgICAgICAgY2FzZSAiaCI6CiAgICAgICAgICAgIHJldHVybiBpbnRVbml0KG9uZU9yVHdvKTsKCiAgICAgICAgICBjYXNlICJtbSI6CiAgICAgICAgICAgIHJldHVybiBpbnRVbml0KHR3byk7CgogICAgICAgICAgY2FzZSAibSI6CiAgICAgICAgICAgIHJldHVybiBpbnRVbml0KG9uZU9yVHdvKTsKCiAgICAgICAgICBjYXNlICJxIjoKICAgICAgICAgICAgcmV0dXJuIGludFVuaXQob25lT3JUd28pOwoKICAgICAgICAgIGNhc2UgInFxIjoKICAgICAgICAgICAgcmV0dXJuIGludFVuaXQodHdvKTsKCiAgICAgICAgICBjYXNlICJzIjoKICAgICAgICAgICAgcmV0dXJuIGludFVuaXQob25lT3JUd28pOwoKICAgICAgICAgIGNhc2UgInNzIjoKICAgICAgICAgICAgcmV0dXJuIGludFVuaXQodHdvKTsKCiAgICAgICAgICBjYXNlICJTIjoKICAgICAgICAgICAgcmV0dXJuIGludFVuaXQob25lVG9UaHJlZSk7CgogICAgICAgICAgY2FzZSAiU1NTIjoKICAgICAgICAgICAgcmV0dXJuIGludFVuaXQodGhyZWUpOwoKICAgICAgICAgIGNhc2UgInUiOgogICAgICAgICAgICByZXR1cm4gc2ltcGxlKG9uZVRvTmluZSk7CiAgICAgICAgICAvLyBtZXJpZGllbQoKICAgICAgICAgIGNhc2UgImEiOgogICAgICAgICAgICByZXR1cm4gb25lT2YobG9jLm1lcmlkaWVtcygpLCAwKTsKICAgICAgICAgIC8vIHdlZWtZZWFyIChrKQoKICAgICAgICAgIGNhc2UgImtra2siOgogICAgICAgICAgICByZXR1cm4gaW50VW5pdChmb3VyKTsKCiAgICAgICAgICBjYXNlICJrayI6CiAgICAgICAgICAgIHJldHVybiBpbnRVbml0KHR3b1RvRm91ciwgdW50cnVuY2F0ZVllYXIpOwogICAgICAgICAgLy8gd2Vla051bWJlciAoVykKCiAgICAgICAgICBjYXNlICJXIjoKICAgICAgICAgICAgcmV0dXJuIGludFVuaXQob25lT3JUd28pOwoKICAgICAgICAgIGNhc2UgIldXIjoKICAgICAgICAgICAgcmV0dXJuIGludFVuaXQodHdvKTsKICAgICAgICAgIC8vIHdlZWtkYXlzCgogICAgICAgICAgY2FzZSAiRSI6CiAgICAgICAgICBjYXNlICJjIjoKICAgICAgICAgICAgcmV0dXJuIGludFVuaXQob25lKTsKCiAgICAgICAgICBjYXNlICJFRUUiOgogICAgICAgICAgICByZXR1cm4gb25lT2YobG9jLndlZWtkYXlzKCJzaG9ydCIsIGZhbHNlLCBmYWxzZSksIDEpOwoKICAgICAgICAgIGNhc2UgIkVFRUUiOgogICAgICAgICAgICByZXR1cm4gb25lT2YobG9jLndlZWtkYXlzKCJsb25nIiwgZmFsc2UsIGZhbHNlKSwgMSk7CgogICAgICAgICAgY2FzZSAiY2NjIjoKICAgICAgICAgICAgcmV0dXJuIG9uZU9mKGxvYy53ZWVrZGF5cygic2hvcnQiLCB0cnVlLCBmYWxzZSksIDEpOwoKICAgICAgICAgIGNhc2UgImNjY2MiOgogICAgICAgICAgICByZXR1cm4gb25lT2YobG9jLndlZWtkYXlzKCJsb25nIiwgdHJ1ZSwgZmFsc2UpLCAxKTsKICAgICAgICAgIC8vIG9mZnNldC96b25lCgogICAgICAgICAgY2FzZSAiWiI6CiAgICAgICAgICBjYXNlICJaWiI6CiAgICAgICAgICAgIHJldHVybiBvZmZzZXQobmV3IFJlZ0V4cCgiKFsrLV0iICsgb25lT3JUd28uc291cmNlICsgIikoPzo6KCIgKyB0d28uc291cmNlICsgIikpPyIpLCAyKTsKCiAgICAgICAgICBjYXNlICJaWloiOgogICAgICAgICAgICByZXR1cm4gb2Zmc2V0KG5ldyBSZWdFeHAoIihbKy1dIiArIG9uZU9yVHdvLnNvdXJjZSArICIpKCIgKyB0d28uc291cmNlICsgIik/IiksIDIpOwogICAgICAgICAgLy8gd2UgZG9uJ3Qgc3VwcG9ydCBaWlpaIChQU1QpIG9yIFpaWlpaIChQYWNpZmljIFN0YW5kYXJkIFRpbWUpIGluIHBhcnNpbmcKICAgICAgICAgIC8vIGJlY2F1c2Ugd2UgZG9uJ3QgaGF2ZSBhbnkgd2F5IHRvIGZpZ3VyZSBvdXQgd2hhdCB0aGV5IGFyZQoKICAgICAgICAgIGNhc2UgInoiOgogICAgICAgICAgICByZXR1cm4gc2ltcGxlKC9bYS16XystL117MSwyNTZ9Py9pKTsKCiAgICAgICAgICBkZWZhdWx0OgogICAgICAgICAgICByZXR1cm4gbGl0ZXJhbCh0KTsKICAgICAgICB9CiAgICAgIH07CgogICAgICB2YXIgdW5pdCA9IHVuaXRhdGUodG9rZW4pIHx8IHsKICAgICAgICBpbnZhbGlkUmVhc29uOiBNSVNTSU5HX0ZUUAogICAgICB9OwogICAgICB1bml0LnRva2VuID0gdG9rZW47CiAgICAgIHJldHVybiB1bml0OwogICAgfQoKICAgIHZhciBwYXJ0VHlwZVN0eWxlVG9Ub2tlblZhbCA9IHsKICAgICAgeWVhcjogewogICAgICAgICIyLWRpZ2l0IjogInl5IiwKICAgICAgICBudW1lcmljOiAieXl5eXkiCiAgICAgIH0sCiAgICAgIG1vbnRoOiB7CiAgICAgICAgbnVtZXJpYzogIk0iLAogICAgICAgICIyLWRpZ2l0IjogIk1NIiwKICAgICAgICBzaG9ydDogIk1NTSIsCiAgICAgICAgbG9uZzogIk1NTU0iCiAgICAgIH0sCiAgICAgIGRheTogewogICAgICAgIG51bWVyaWM6ICJkIiwKICAgICAgICAiMi1kaWdpdCI6ICJkZCIKICAgICAgfSwKICAgICAgd2Vla2RheTogewogICAgICAgIHNob3J0OiAiRUVFIiwKICAgICAgICBsb25nOiAiRUVFRSIKICAgICAgfSwKICAgICAgZGF5cGVyaW9kOiAiYSIsCiAgICAgIGRheVBlcmlvZDogImEiLAogICAgICBob3VyOiB7CiAgICAgICAgbnVtZXJpYzogImgiLAogICAgICAgICIyLWRpZ2l0IjogImhoIgogICAgICB9LAogICAgICBtaW51dGU6IHsKICAgICAgICBudW1lcmljOiAibSIsCiAgICAgICAgIjItZGlnaXQiOiAibW0iCiAgICAgIH0sCiAgICAgIHNlY29uZDogewogICAgICAgIG51bWVyaWM6ICJzIiwKICAgICAgICAiMi1kaWdpdCI6ICJzcyIKICAgICAgfQogICAgfTsKCiAgICBmdW5jdGlvbiB0b2tlbkZvclBhcnQocGFydCwgbG9jYWxlLCBmb3JtYXRPcHRzKSB7CiAgICAgIHZhciB0eXBlID0gcGFydC50eXBlLAogICAgICAgICAgdmFsdWUgPSBwYXJ0LnZhbHVlOwoKICAgICAgaWYgKHR5cGUgPT09ICJsaXRlcmFsIikgewogICAgICAgIHJldHVybiB7CiAgICAgICAgICBsaXRlcmFsOiB0cnVlLAogICAgICAgICAgdmFsOiB2YWx1ZQogICAgICAgIH07CiAgICAgIH0KCiAgICAgIHZhciBzdHlsZSA9IGZvcm1hdE9wdHNbdHlwZV07CiAgICAgIHZhciB2YWwgPSBwYXJ0VHlwZVN0eWxlVG9Ub2tlblZhbFt0eXBlXTsKCiAgICAgIGlmICh0eXBlb2YgdmFsID09PSAib2JqZWN0IikgewogICAgICAgIHZhbCA9IHZhbFtzdHlsZV07CiAgICAgIH0KCiAgICAgIGlmICh2YWwpIHsKICAgICAgICByZXR1cm4gewogICAgICAgICAgbGl0ZXJhbDogZmFsc2UsCiAgICAgICAgICB2YWw6IHZhbAogICAgICAgIH07CiAgICAgIH0KCiAgICAgIHJldHVybiB1bmRlZmluZWQ7CiAgICB9CgogICAgZnVuY3Rpb24gYnVpbGRSZWdleCh1bml0cykgewogICAgICB2YXIgcmUgPSB1bml0cy5tYXAoZnVuY3Rpb24gKHUpIHsKICAgICAgICByZXR1cm4gdS5yZWdleDsKICAgICAgfSkucmVkdWNlKGZ1bmN0aW9uIChmLCByKSB7CiAgICAgICAgcmV0dXJuIGYgKyAiKCIgKyByLnNvdXJjZSArICIpIjsKICAgICAgfSwgIiIpOwogICAgICByZXR1cm4gWyJeIiArIHJlICsgIiQiLCB1bml0c107CiAgICB9CgogICAgZnVuY3Rpb24gbWF0Y2goaW5wdXQsIHJlZ2V4LCBoYW5kbGVycykgewogICAgICB2YXIgbWF0Y2hlcyA9IGlucHV0Lm1hdGNoKHJlZ2V4KTsKCiAgICAgIGlmIChtYXRjaGVzKSB7CiAgICAgICAgdmFyIGFsbCA9IHt9OwogICAgICAgIHZhciBtYXRjaEluZGV4ID0gMTsKCiAgICAgICAgZm9yICh2YXIgaSBpbiBoYW5kbGVycykgewogICAgICAgICAgaWYgKGhhc093blByb3BlcnR5KGhhbmRsZXJzLCBpKSkgewogICAgICAgICAgICB2YXIgaCA9IGhhbmRsZXJzW2ldLAogICAgICAgICAgICAgICAgZ3JvdXBzID0gaC5ncm91cHMgPyBoLmdyb3VwcyArIDEgOiAxOwoKICAgICAgICAgICAgaWYgKCFoLmxpdGVyYWwgJiYgaC50b2tlbikgewogICAgICAgICAgICAgIGFsbFtoLnRva2VuLnZhbFswXV0gPSBoLmRlc2VyKG1hdGNoZXMuc2xpY2UobWF0Y2hJbmRleCwgbWF0Y2hJbmRleCArIGdyb3VwcykpOwogICAgICAgICAgICB9CgogICAgICAgICAgICBtYXRjaEluZGV4ICs9IGdyb3VwczsKICAgICAgICAgIH0KICAgICAgICB9CgogICAgICAgIHJldHVybiBbbWF0Y2hlcywgYWxsXTsKICAgICAgfSBlbHNlIHsKICAgICAgICByZXR1cm4gW21hdGNoZXMsIHt9XTsKICAgICAgfQogICAgfQoKICAgIGZ1bmN0aW9uIGRhdGVUaW1lRnJvbU1hdGNoZXMobWF0Y2hlcykgewogICAgICB2YXIgdG9GaWVsZCA9IGZ1bmN0aW9uIHRvRmllbGQodG9rZW4pIHsKICAgICAgICBzd2l0Y2ggKHRva2VuKSB7CiAgICAgICAgICBjYXNlICJTIjoKICAgICAgICAgICAgcmV0dXJuICJtaWxsaXNlY29uZCI7CgogICAgICAgICAgY2FzZSAicyI6CiAgICAgICAgICAgIHJldHVybiAic2Vjb25kIjsKCiAgICAgICAgICBjYXNlICJtIjoKICAgICAgICAgICAgcmV0dXJuICJtaW51dGUiOwoKICAgICAgICAgIGNhc2UgImgiOgogICAgICAgICAgY2FzZSAiSCI6CiAgICAgICAgICAgIHJldHVybiAiaG91ciI7CgogICAgICAgICAgY2FzZSAiZCI6CiAgICAgICAgICAgIHJldHVybiAiZGF5IjsKCiAgICAgICAgICBjYXNlICJvIjoKICAgICAgICAgICAgcmV0dXJuICJvcmRpbmFsIjsKCiAgICAgICAgICBjYXNlICJMIjoKICAgICAgICAgIGNhc2UgIk0iOgogICAgICAgICAgICByZXR1cm4gIm1vbnRoIjsKCiAgICAgICAgICBjYXNlICJ5IjoKICAgICAgICAgICAgcmV0dXJuICJ5ZWFyIjsKCiAgICAgICAgICBjYXNlICJFIjoKICAgICAgICAgIGNhc2UgImMiOgogICAgICAgICAgICByZXR1cm4gIndlZWtkYXkiOwoKICAgICAgICAgIGNhc2UgIlciOgogICAgICAgICAgICByZXR1cm4gIndlZWtOdW1iZXIiOwoKICAgICAgICAgIGNhc2UgImsiOgogICAgICAgICAgICByZXR1cm4gIndlZWtZZWFyIjsKCiAgICAgICAgICBjYXNlICJxIjoKICAgICAgICAgICAgcmV0dXJuICJxdWFydGVyIjsKCiAgICAgICAgICBkZWZhdWx0OgogICAgICAgICAgICByZXR1cm4gbnVsbDsKICAgICAgICB9CiAgICAgIH07CgogICAgICB2YXIgem9uZTsKCiAgICAgIGlmICghaXNVbmRlZmluZWQobWF0Y2hlcy5aKSkgewogICAgICAgIHpvbmUgPSBuZXcgRml4ZWRPZmZzZXRab25lKG1hdGNoZXMuWik7CiAgICAgIH0gZWxzZSBpZiAoIWlzVW5kZWZpbmVkKG1hdGNoZXMueikpIHsKICAgICAgICB6b25lID0gSUFOQVpvbmUuY3JlYXRlKG1hdGNoZXMueik7CiAgICAgIH0gZWxzZSB7CiAgICAgICAgem9uZSA9IG51bGw7CiAgICAgIH0KCiAgICAgIGlmICghaXNVbmRlZmluZWQobWF0Y2hlcy5xKSkgewogICAgICAgIG1hdGNoZXMuTSA9IChtYXRjaGVzLnEgLSAxKSAqIDMgKyAxOwogICAgICB9CgogICAgICBpZiAoIWlzVW5kZWZpbmVkKG1hdGNoZXMuaCkpIHsKICAgICAgICBpZiAobWF0Y2hlcy5oIDwgMTIgJiYgbWF0Y2hlcy5hID09PSAxKSB7CiAgICAgICAgICBtYXRjaGVzLmggKz0gMTI7CiAgICAgICAgfSBlbHNlIGlmIChtYXRjaGVzLmggPT09IDEyICYmIG1hdGNoZXMuYSA9PT0gMCkgewogICAgICAgICAgbWF0Y2hlcy5oID0gMDsKICAgICAgICB9CiAgICAgIH0KCiAgICAgIGlmIChtYXRjaGVzLkcgPT09IDAgJiYgbWF0Y2hlcy55KSB7CiAgICAgICAgbWF0Y2hlcy55ID0gLW1hdGNoZXMueTsKICAgICAgfQoKICAgICAgaWYgKCFpc1VuZGVmaW5lZChtYXRjaGVzLnUpKSB7CiAgICAgICAgbWF0Y2hlcy5TID0gcGFyc2VNaWxsaXMobWF0Y2hlcy51KTsKICAgICAgfQoKICAgICAgdmFyIHZhbHMgPSBPYmplY3Qua2V5cyhtYXRjaGVzKS5yZWR1Y2UoZnVuY3Rpb24gKHIsIGspIHsKICAgICAgICB2YXIgZiA9IHRvRmllbGQoayk7CgogICAgICAgIGlmIChmKSB7CiAgICAgICAgICByW2ZdID0gbWF0Y2hlc1trXTsKICAgICAgICB9CgogICAgICAgIHJldHVybiByOwogICAgICB9LCB7fSk7CiAgICAgIHJldHVybiBbdmFscywgem9uZV07CiAgICB9CgogICAgdmFyIGR1bW15RGF0ZVRpbWVDYWNoZSA9IG51bGw7CgogICAgZnVuY3Rpb24gZ2V0RHVtbXlEYXRlVGltZSgpIHsKICAgICAgaWYgKCFkdW1teURhdGVUaW1lQ2FjaGUpIHsKICAgICAgICBkdW1teURhdGVUaW1lQ2FjaGUgPSBEYXRlVGltZS5mcm9tTWlsbGlzKDE1NTU1NTU1NTU1NTUpOwogICAgICB9CgogICAgICByZXR1cm4gZHVtbXlEYXRlVGltZUNhY2hlOwogICAgfQoKICAgIGZ1bmN0aW9uIG1heWJlRXhwYW5kTWFjcm9Ub2tlbih0b2tlbiwgbG9jYWxlKSB7CiAgICAgIGlmICh0b2tlbi5saXRlcmFsKSB7CiAgICAgICAgcmV0dXJuIHRva2VuOwogICAgICB9CgogICAgICB2YXIgZm9ybWF0T3B0cyA9IEZvcm1hdHRlci5tYWNyb1Rva2VuVG9Gb3JtYXRPcHRzKHRva2VuLnZhbCk7CgogICAgICBpZiAoIWZvcm1hdE9wdHMpIHsKICAgICAgICByZXR1cm4gdG9rZW47CiAgICAgIH0KCiAgICAgIHZhciBmb3JtYXR0ZXIgPSBGb3JtYXR0ZXIuY3JlYXRlKGxvY2FsZSwgZm9ybWF0T3B0cyk7CiAgICAgIHZhciBwYXJ0cyA9IGZvcm1hdHRlci5mb3JtYXREYXRlVGltZVBhcnRzKGdldER1bW15RGF0ZVRpbWUoKSk7CiAgICAgIHZhciB0b2tlbnMgPSBwYXJ0cy5tYXAoZnVuY3Rpb24gKHApIHsKICAgICAgICByZXR1cm4gdG9rZW5Gb3JQYXJ0KHAsIGxvY2FsZSwgZm9ybWF0T3B0cyk7CiAgICAgIH0pOwoKICAgICAgaWYgKHRva2Vucy5pbmNsdWRlcyh1bmRlZmluZWQpKSB7CiAgICAgICAgcmV0dXJuIHRva2VuOwogICAgICB9CgogICAgICByZXR1cm4gdG9rZW5zOwogICAgfQoKICAgIGZ1bmN0aW9uIGV4cGFuZE1hY3JvVG9rZW5zKHRva2VucywgbG9jYWxlKSB7CiAgICAgIHZhciBfQXJyYXkkcHJvdG90eXBlOwoKICAgICAgcmV0dXJuIChfQXJyYXkkcHJvdG90eXBlID0gQXJyYXkucHJvdG90eXBlKS5jb25jYXQuYXBwbHkoX0FycmF5JHByb3RvdHlwZSwgdG9rZW5zLm1hcChmdW5jdGlvbiAodCkgewogICAgICAgIHJldHVybiBtYXliZUV4cGFuZE1hY3JvVG9rZW4odCwgbG9jYWxlKTsKICAgICAgfSkpOwogICAgfQogICAgLyoqCiAgICAgKiBAcHJpdmF0ZQogICAgICovCgoKICAgIGZ1bmN0aW9uIGV4cGxhaW5Gcm9tVG9rZW5zKGxvY2FsZSwgaW5wdXQsIGZvcm1hdCkgewogICAgICB2YXIgdG9rZW5zID0gZXhwYW5kTWFjcm9Ub2tlbnMoRm9ybWF0dGVyLnBhcnNlRm9ybWF0KGZvcm1hdCksIGxvY2FsZSksCiAgICAgICAgICB1bml0cyA9IHRva2Vucy5tYXAoZnVuY3Rpb24gKHQpIHsKICAgICAgICByZXR1cm4gdW5pdEZvclRva2VuKHQsIGxvY2FsZSk7CiAgICAgIH0pLAogICAgICAgICAgZGlzcXVhbGlmeWluZ1VuaXQgPSB1bml0cy5maW5kKGZ1bmN0aW9uICh0KSB7CiAgICAgICAgcmV0dXJuIHQuaW52YWxpZFJlYXNvbjsKICAgICAgfSk7CgogICAgICBpZiAoZGlzcXVhbGlmeWluZ1VuaXQpIHsKICAgICAgICByZXR1cm4gewogICAgICAgICAgaW5wdXQ6IGlucHV0LAogICAgICAgICAgdG9rZW5zOiB0b2tlbnMsCiAgICAgICAgICBpbnZhbGlkUmVhc29uOiBkaXNxdWFsaWZ5aW5nVW5pdC5pbnZhbGlkUmVhc29uCiAgICAgICAgfTsKICAgICAgfSBlbHNlIHsKICAgICAgICB2YXIgX2J1aWxkUmVnZXggPSBidWlsZFJlZ2V4KHVuaXRzKSwKICAgICAgICAgICAgcmVnZXhTdHJpbmcgPSBfYnVpbGRSZWdleFswXSwKICAgICAgICAgICAgaGFuZGxlcnMgPSBfYnVpbGRSZWdleFsxXSwKICAgICAgICAgICAgcmVnZXggPSBSZWdFeHAocmVnZXhTdHJpbmcsICJpIiksCiAgICAgICAgICAgIF9tYXRjaCA9IG1hdGNoKGlucHV0LCByZWdleCwgaGFuZGxlcnMpLAogICAgICAgICAgICByYXdNYXRjaGVzID0gX21hdGNoWzBdLAogICAgICAgICAgICBtYXRjaGVzID0gX21hdGNoWzFdLAogICAgICAgICAgICBfcmVmNiA9IG1hdGNoZXMgPyBkYXRlVGltZUZyb21NYXRjaGVzKG1hdGNoZXMpIDogW251bGwsIG51bGxdLAogICAgICAgICAgICByZXN1bHQgPSBfcmVmNlswXSwKICAgICAgICAgICAgem9uZSA9IF9yZWY2WzFdOwoKICAgICAgICBpZiAoaGFzT3duUHJvcGVydHkobWF0Y2hlcywgImEiKSAmJiBoYXNPd25Qcm9wZXJ0eShtYXRjaGVzLCAiSCIpKSB7CiAgICAgICAgICB0aHJvdyBuZXcgQ29uZmxpY3RpbmdTcGVjaWZpY2F0aW9uRXJyb3IoIkNhbid0IGluY2x1ZGUgbWVyaWRpZW0gd2hlbiBzcGVjaWZ5aW5nIDI0LWhvdXIgZm9ybWF0Iik7CiAgICAgICAgfQoKICAgICAgICByZXR1cm4gewogICAgICAgICAgaW5wdXQ6IGlucHV0LAogICAgICAgICAgdG9rZW5zOiB0b2tlbnMsCiAgICAgICAgICByZWdleDogcmVnZXgsCiAgICAgICAgICByYXdNYXRjaGVzOiByYXdNYXRjaGVzLAogICAgICAgICAgbWF0Y2hlczogbWF0Y2hlcywKICAgICAgICAgIHJlc3VsdDogcmVzdWx0LAogICAgICAgICAgem9uZTogem9uZQogICAgICAgIH07CiAgICAgIH0KICAgIH0KICAgIGZ1bmN0aW9uIHBhcnNlRnJvbVRva2Vucyhsb2NhbGUsIGlucHV0LCBmb3JtYXQpIHsKICAgICAgdmFyIF9leHBsYWluRnJvbVRva2VucyA9IGV4cGxhaW5Gcm9tVG9rZW5zKGxvY2FsZSwgaW5wdXQsIGZvcm1hdCksCiAgICAgICAgICByZXN1bHQgPSBfZXhwbGFpbkZyb21Ub2tlbnMucmVzdWx0LAogICAgICAgICAgem9uZSA9IF9leHBsYWluRnJvbVRva2Vucy56b25lLAogICAgICAgICAgaW52YWxpZFJlYXNvbiA9IF9leHBsYWluRnJvbVRva2Vucy5pbnZhbGlkUmVhc29uOwoKICAgICAgcmV0dXJuIFtyZXN1bHQsIHpvbmUsIGludmFsaWRSZWFzb25dOwogICAgfQoKICAgIHZhciBub25MZWFwTGFkZGVyID0gWzAsIDMxLCA1OSwgOTAsIDEyMCwgMTUxLCAxODEsIDIxMiwgMjQzLCAyNzMsIDMwNCwgMzM0XSwKICAgICAgICBsZWFwTGFkZGVyID0gWzAsIDMxLCA2MCwgOTEsIDEyMSwgMTUyLCAxODIsIDIxMywgMjQ0LCAyNzQsIDMwNSwgMzM1XTsKCiAgICBmdW5jdGlvbiB1bml0T3V0T2ZSYW5nZSh1bml0LCB2YWx1ZSkgewogICAgICByZXR1cm4gbmV3IEludmFsaWQoInVuaXQgb3V0IG9mIHJhbmdlIiwgInlvdSBzcGVjaWZpZWQgIiArIHZhbHVlICsgIiAob2YgdHlwZSAiICsgdHlwZW9mIHZhbHVlICsgIikgYXMgYSAiICsgdW5pdCArICIsIHdoaWNoIGlzIGludmFsaWQiKTsKICAgIH0KCiAgICBmdW5jdGlvbiBkYXlPZldlZWsoeWVhciwgbW9udGgsIGRheSkgewogICAgICB2YXIganMgPSBuZXcgRGF0ZShEYXRlLlVUQyh5ZWFyLCBtb250aCAtIDEsIGRheSkpLmdldFVUQ0RheSgpOwogICAgICByZXR1cm4ganMgPT09IDAgPyA3IDoganM7CiAgICB9CgogICAgZnVuY3Rpb24gY29tcHV0ZU9yZGluYWwoeWVhciwgbW9udGgsIGRheSkgewogICAgICByZXR1cm4gZGF5ICsgKGlzTGVhcFllYXIoeWVhcikgPyBsZWFwTGFkZGVyIDogbm9uTGVhcExhZGRlcilbbW9udGggLSAxXTsKICAgIH0KCiAgICBmdW5jdGlvbiB1bmNvbXB1dGVPcmRpbmFsKHllYXIsIG9yZGluYWwpIHsKICAgICAgdmFyIHRhYmxlID0gaXNMZWFwWWVhcih5ZWFyKSA/IGxlYXBMYWRkZXIgOiBub25MZWFwTGFkZGVyLAogICAgICAgICAgbW9udGgwID0gdGFibGUuZmluZEluZGV4KGZ1bmN0aW9uIChpKSB7CiAgICAgICAgcmV0dXJuIGkgPCBvcmRpbmFsOwogICAgICB9KSwKICAgICAgICAgIGRheSA9IG9yZGluYWwgLSB0YWJsZVttb250aDBdOwogICAgICByZXR1cm4gewogICAgICAgIG1vbnRoOiBtb250aDAgKyAxLAogICAgICAgIGRheTogZGF5CiAgICAgIH07CiAgICB9CiAgICAvKioKICAgICAqIEBwcml2YXRlCiAgICAgKi8KCgogICAgZnVuY3Rpb24gZ3JlZ29yaWFuVG9XZWVrKGdyZWdPYmopIHsKICAgICAgdmFyIHllYXIgPSBncmVnT2JqLnllYXIsCiAgICAgICAgICBtb250aCA9IGdyZWdPYmoubW9udGgsCiAgICAgICAgICBkYXkgPSBncmVnT2JqLmRheSwKICAgICAgICAgIG9yZGluYWwgPSBjb21wdXRlT3JkaW5hbCh5ZWFyLCBtb250aCwgZGF5KSwKICAgICAgICAgIHdlZWtkYXkgPSBkYXlPZldlZWsoeWVhciwgbW9udGgsIGRheSk7CiAgICAgIHZhciB3ZWVrTnVtYmVyID0gTWF0aC5mbG9vcigob3JkaW5hbCAtIHdlZWtkYXkgKyAxMCkgLyA3KSwKICAgICAgICAgIHdlZWtZZWFyOwoKICAgICAgaWYgKHdlZWtOdW1iZXIgPCAxKSB7CiAgICAgICAgd2Vla1llYXIgPSB5ZWFyIC0gMTsKICAgICAgICB3ZWVrTnVtYmVyID0gd2Vla3NJbldlZWtZZWFyKHdlZWtZZWFyKTsKICAgICAgfSBlbHNlIGlmICh3ZWVrTnVtYmVyID4gd2Vla3NJbldlZWtZZWFyKHllYXIpKSB7CiAgICAgICAgd2Vla1llYXIgPSB5ZWFyICsgMTsKICAgICAgICB3ZWVrTnVtYmVyID0gMTsKICAgICAgfSBlbHNlIHsKICAgICAgICB3ZWVrWWVhciA9IHllYXI7CiAgICAgIH0KCiAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHsKICAgICAgICB3ZWVrWWVhcjogd2Vla1llYXIsCiAgICAgICAgd2Vla051bWJlcjogd2Vla051bWJlciwKICAgICAgICB3ZWVrZGF5OiB3ZWVrZGF5CiAgICAgIH0sIHRpbWVPYmplY3QoZ3JlZ09iaikpOwogICAgfQogICAgZnVuY3Rpb24gd2Vla1RvR3JlZ29yaWFuKHdlZWtEYXRhKSB7CiAgICAgIHZhciB3ZWVrWWVhciA9IHdlZWtEYXRhLndlZWtZZWFyLAogICAgICAgICAgd2Vla051bWJlciA9IHdlZWtEYXRhLndlZWtOdW1iZXIsCiAgICAgICAgICB3ZWVrZGF5ID0gd2Vla0RhdGEud2Vla2RheSwKICAgICAgICAgIHdlZWtkYXlPZkphbjQgPSBkYXlPZldlZWsod2Vla1llYXIsIDEsIDQpLAogICAgICAgICAgeWVhckluRGF5cyA9IGRheXNJblllYXIod2Vla1llYXIpOwogICAgICB2YXIgb3JkaW5hbCA9IHdlZWtOdW1iZXIgKiA3ICsgd2Vla2RheSAtIHdlZWtkYXlPZkphbjQgLSAzLAogICAgICAgICAgeWVhcjsKCiAgICAgIGlmIChvcmRpbmFsIDwgMSkgewogICAgICAgIHllYXIgPSB3ZWVrWWVhciAtIDE7CiAgICAgICAgb3JkaW5hbCArPSBkYXlzSW5ZZWFyKHllYXIpOwogICAgICB9IGVsc2UgaWYgKG9yZGluYWwgPiB5ZWFySW5EYXlzKSB7CiAgICAgICAgeWVhciA9IHdlZWtZZWFyICsgMTsKICAgICAgICBvcmRpbmFsIC09IGRheXNJblllYXIod2Vla1llYXIpOwogICAgICB9IGVsc2UgewogICAgICAgIHllYXIgPSB3ZWVrWWVhcjsKICAgICAgfQoKICAgICAgdmFyIF91bmNvbXB1dGVPcmRpbmFsID0gdW5jb21wdXRlT3JkaW5hbCh5ZWFyLCBvcmRpbmFsKSwKICAgICAgICAgIG1vbnRoID0gX3VuY29tcHV0ZU9yZGluYWwubW9udGgsCiAgICAgICAgICBkYXkgPSBfdW5jb21wdXRlT3JkaW5hbC5kYXk7CgogICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7CiAgICAgICAgeWVhcjogeWVhciwKICAgICAgICBtb250aDogbW9udGgsCiAgICAgICAgZGF5OiBkYXkKICAgICAgfSwgdGltZU9iamVjdCh3ZWVrRGF0YSkpOwogICAgfQogICAgZnVuY3Rpb24gZ3JlZ29yaWFuVG9PcmRpbmFsKGdyZWdEYXRhKSB7CiAgICAgIHZhciB5ZWFyID0gZ3JlZ0RhdGEueWVhciwKICAgICAgICAgIG1vbnRoID0gZ3JlZ0RhdGEubW9udGgsCiAgICAgICAgICBkYXkgPSBncmVnRGF0YS5kYXksCiAgICAgICAgICBvcmRpbmFsID0gY29tcHV0ZU9yZGluYWwoeWVhciwgbW9udGgsIGRheSk7CiAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHsKICAgICAgICB5ZWFyOiB5ZWFyLAogICAgICAgIG9yZGluYWw6IG9yZGluYWwKICAgICAgfSwgdGltZU9iamVjdChncmVnRGF0YSkpOwogICAgfQogICAgZnVuY3Rpb24gb3JkaW5hbFRvR3JlZ29yaWFuKG9yZGluYWxEYXRhKSB7CiAgICAgIHZhciB5ZWFyID0gb3JkaW5hbERhdGEueWVhciwKICAgICAgICAgIG9yZGluYWwgPSBvcmRpbmFsRGF0YS5vcmRpbmFsLAogICAgICAgICAgX3VuY29tcHV0ZU9yZGluYWwyID0gdW5jb21wdXRlT3JkaW5hbCh5ZWFyLCBvcmRpbmFsKSwKICAgICAgICAgIG1vbnRoID0gX3VuY29tcHV0ZU9yZGluYWwyLm1vbnRoLAogICAgICAgICAgZGF5ID0gX3VuY29tcHV0ZU9yZGluYWwyLmRheTsKCiAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHsKICAgICAgICB5ZWFyOiB5ZWFyLAogICAgICAgIG1vbnRoOiBtb250aCwKICAgICAgICBkYXk6IGRheQogICAgICB9LCB0aW1lT2JqZWN0KG9yZGluYWxEYXRhKSk7CiAgICB9CiAgICBmdW5jdGlvbiBoYXNJbnZhbGlkV2Vla0RhdGEob2JqKSB7CiAgICAgIHZhciB2YWxpZFllYXIgPSBpc0ludGVnZXIob2JqLndlZWtZZWFyKSwKICAgICAgICAgIHZhbGlkV2VlayA9IGludGVnZXJCZXR3ZWVuKG9iai53ZWVrTnVtYmVyLCAxLCB3ZWVrc0luV2Vla1llYXIob2JqLndlZWtZZWFyKSksCiAgICAgICAgICB2YWxpZFdlZWtkYXkgPSBpbnRlZ2VyQmV0d2VlbihvYmoud2Vla2RheSwgMSwgNyk7CgogICAgICBpZiAoIXZhbGlkWWVhcikgewogICAgICAgIHJldHVybiB1bml0T3V0T2ZSYW5nZSgid2Vla1llYXIiLCBvYmoud2Vla1llYXIpOwogICAgICB9IGVsc2UgaWYgKCF2YWxpZFdlZWspIHsKICAgICAgICByZXR1cm4gdW5pdE91dE9mUmFuZ2UoIndlZWsiLCBvYmoud2Vlayk7CiAgICAgIH0gZWxzZSBpZiAoIXZhbGlkV2Vla2RheSkgewogICAgICAgIHJldHVybiB1bml0T3V0T2ZSYW5nZSgid2Vla2RheSIsIG9iai53ZWVrZGF5KTsKICAgICAgfSBlbHNlIHJldHVybiBmYWxzZTsKICAgIH0KICAgIGZ1bmN0aW9uIGhhc0ludmFsaWRPcmRpbmFsRGF0YShvYmopIHsKICAgICAgdmFyIHZhbGlkWWVhciA9IGlzSW50ZWdlcihvYmoueWVhciksCiAgICAgICAgICB2YWxpZE9yZGluYWwgPSBpbnRlZ2VyQmV0d2VlbihvYmoub3JkaW5hbCwgMSwgZGF5c0luWWVhcihvYmoueWVhcikpOwoKICAgICAgaWYgKCF2YWxpZFllYXIpIHsKICAgICAgICByZXR1cm4gdW5pdE91dE9mUmFuZ2UoInllYXIiLCBvYmoueWVhcik7CiAgICAgIH0gZWxzZSBpZiAoIXZhbGlkT3JkaW5hbCkgewogICAgICAgIHJldHVybiB1bml0T3V0T2ZSYW5nZSgib3JkaW5hbCIsIG9iai5vcmRpbmFsKTsKICAgICAgfSBlbHNlIHJldHVybiBmYWxzZTsKICAgIH0KICAgIGZ1bmN0aW9uIGhhc0ludmFsaWRHcmVnb3JpYW5EYXRhKG9iaikgewogICAgICB2YXIgdmFsaWRZZWFyID0gaXNJbnRlZ2VyKG9iai55ZWFyKSwKICAgICAgICAgIHZhbGlkTW9udGggPSBpbnRlZ2VyQmV0d2VlbihvYmoubW9udGgsIDEsIDEyKSwKICAgICAgICAgIHZhbGlkRGF5ID0gaW50ZWdlckJldHdlZW4ob2JqLmRheSwgMSwgZGF5c0luTW9udGgob2JqLnllYXIsIG9iai5tb250aCkpOwoKICAgICAgaWYgKCF2YWxpZFllYXIpIHsKICAgICAgICByZXR1cm4gdW5pdE91dE9mUmFuZ2UoInllYXIiLCBvYmoueWVhcik7CiAgICAgIH0gZWxzZSBpZiAoIXZhbGlkTW9udGgpIHsKICAgICAgICByZXR1cm4gdW5pdE91dE9mUmFuZ2UoIm1vbnRoIiwgb2JqLm1vbnRoKTsKICAgICAgfSBlbHNlIGlmICghdmFsaWREYXkpIHsKICAgICAgICByZXR1cm4gdW5pdE91dE9mUmFuZ2UoImRheSIsIG9iai5kYXkpOwogICAgICB9IGVsc2UgcmV0dXJuIGZhbHNlOwogICAgfQogICAgZnVuY3Rpb24gaGFzSW52YWxpZFRpbWVEYXRhKG9iaikgewogICAgICB2YXIgaG91ciA9IG9iai5ob3VyLAogICAgICAgICAgbWludXRlID0gb2JqLm1pbnV0ZSwKICAgICAgICAgIHNlY29uZCA9IG9iai5zZWNvbmQsCiAgICAgICAgICBtaWxsaXNlY29uZCA9IG9iai5taWxsaXNlY29uZDsKICAgICAgdmFyIHZhbGlkSG91ciA9IGludGVnZXJCZXR3ZWVuKGhvdXIsIDAsIDIzKSB8fCBob3VyID09PSAyNCAmJiBtaW51dGUgPT09IDAgJiYgc2Vjb25kID09PSAwICYmIG1pbGxpc2Vjb25kID09PSAwLAogICAgICAgICAgdmFsaWRNaW51dGUgPSBpbnRlZ2VyQmV0d2VlbihtaW51dGUsIDAsIDU5KSwKICAgICAgICAgIHZhbGlkU2Vjb25kID0gaW50ZWdlckJldHdlZW4oc2Vjb25kLCAwLCA1OSksCiAgICAgICAgICB2YWxpZE1pbGxpc2Vjb25kID0gaW50ZWdlckJldHdlZW4obWlsbGlzZWNvbmQsIDAsIDk5OSk7CgogICAgICBpZiAoIXZhbGlkSG91cikgewogICAgICAgIHJldHVybiB1bml0T3V0T2ZSYW5nZSgiaG91ciIsIGhvdXIpOwogICAgICB9IGVsc2UgaWYgKCF2YWxpZE1pbnV0ZSkgewogICAgICAgIHJldHVybiB1bml0T3V0T2ZSYW5nZSgibWludXRlIiwgbWludXRlKTsKICAgICAgfSBlbHNlIGlmICghdmFsaWRTZWNvbmQpIHsKICAgICAgICByZXR1cm4gdW5pdE91dE9mUmFuZ2UoInNlY29uZCIsIHNlY29uZCk7CiAgICAgIH0gZWxzZSBpZiAoIXZhbGlkTWlsbGlzZWNvbmQpIHsKICAgICAgICByZXR1cm4gdW5pdE91dE9mUmFuZ2UoIm1pbGxpc2Vjb25kIiwgbWlsbGlzZWNvbmQpOwogICAgICB9IGVsc2UgcmV0dXJuIGZhbHNlOwogICAgfQoKICAgIHZhciBJTlZBTElEJDIgPSAiSW52YWxpZCBEYXRlVGltZSI7CiAgICB2YXIgTUFYX0RBVEUgPSA4LjY0ZTE1OwoKICAgIGZ1bmN0aW9uIHVuc3VwcG9ydGVkWm9uZSh6b25lKSB7CiAgICAgIHJldHVybiBuZXcgSW52YWxpZCgidW5zdXBwb3J0ZWQgem9uZSIsICJ0aGUgem9uZSBcIiIgKyB6b25lLm5hbWUgKyAiXCIgaXMgbm90IHN1cHBvcnRlZCIpOwogICAgfSAvLyB3ZSBjYWNoZSB3ZWVrIGRhdGEgb24gdGhlIERUIG9iamVjdCBhbmQgdGhpcyBpbnRlcm1lZGlhdGVzIHRoZSBjYWNoZQoKCiAgICBmdW5jdGlvbiBwb3NzaWJseUNhY2hlZFdlZWtEYXRhKGR0KSB7CiAgICAgIGlmIChkdC53ZWVrRGF0YSA9PT0gbnVsbCkgewogICAgICAgIGR0LndlZWtEYXRhID0gZ3JlZ29yaWFuVG9XZWVrKGR0LmMpOwogICAgICB9CgogICAgICByZXR1cm4gZHQud2Vla0RhdGE7CiAgICB9IC8vIGNsb25lIHJlYWxseSBtZWFucywgIm1ha2UgYSBuZXcgb2JqZWN0IHdpdGggdGhlc2UgbW9kaWZpY2F0aW9ucyIuIGFsbCAic2V0dGVycyIgcmVhbGx5IHVzZSB0aGlzCiAgICAvLyB0byBjcmVhdGUgYSBuZXcgb2JqZWN0IHdoaWxlIG9ubHkgY2hhbmdpbmcgc29tZSBvZiB0aGUgcHJvcGVydGllcwoKCiAgICBmdW5jdGlvbiBjbG9uZSQxKGluc3QsIGFsdHMpIHsKICAgICAgdmFyIGN1cnJlbnQgPSB7CiAgICAgICAgdHM6IGluc3QudHMsCiAgICAgICAgem9uZTogaW5zdC56b25lLAogICAgICAgIGM6IGluc3QuYywKICAgICAgICBvOiBpbnN0Lm8sCiAgICAgICAgbG9jOiBpbnN0LmxvYywKICAgICAgICBpbnZhbGlkOiBpbnN0LmludmFsaWQKICAgICAgfTsKICAgICAgcmV0dXJuIG5ldyBEYXRlVGltZShPYmplY3QuYXNzaWduKHt9LCBjdXJyZW50LCBhbHRzLCB7CiAgICAgICAgb2xkOiBjdXJyZW50CiAgICAgIH0pKTsKICAgIH0gLy8gZmluZCB0aGUgcmlnaHQgb2Zmc2V0IGEgZ2l2ZW4gbG9jYWwgdGltZS4gVGhlIG8gaW5wdXQgaXMgb3VyIGd1ZXNzLCB3aGljaCBkZXRlcm1pbmVzIHdoaWNoCiAgICAvLyBvZmZzZXQgd2UnbGwgcGljayBpbiBhbWJpZ3VvdXMgY2FzZXMgKGUuZy4gdGhlcmUgYXJlIHR3byAzIEFNcyBiL2MgRmFsbGJhY2sgRFNUKQoKCiAgICBmdW5jdGlvbiBmaXhPZmZzZXQobG9jYWxUUywgbywgdHopIHsKICAgICAgLy8gT3VyIFVUQyB0aW1lIGlzIGp1c3QgYSBndWVzcyBiZWNhdXNlIG91ciBvZmZzZXQgaXMganVzdCBhIGd1ZXNzCiAgICAgIHZhciB1dGNHdWVzcyA9IGxvY2FsVFMgLSBvICogNjAgKiAxMDAwOyAvLyBUZXN0IHdoZXRoZXIgdGhlIHpvbmUgbWF0Y2hlcyB0aGUgb2Zmc2V0IGZvciB0aGlzIHRzCgogICAgICB2YXIgbzIgPSB0ei5vZmZzZXQodXRjR3Vlc3MpOyAvLyBJZiBzbywgb2Zmc2V0IGRpZG4ndCBjaGFuZ2UgYW5kIHdlJ3JlIGRvbmUKCiAgICAgIGlmIChvID09PSBvMikgewogICAgICAgIHJldHVybiBbdXRjR3Vlc3MsIG9dOwogICAgICB9IC8vIElmIG5vdCwgY2hhbmdlIHRoZSB0cyBieSB0aGUgZGlmZmVyZW5jZSBpbiB0aGUgb2Zmc2V0CgoKICAgICAgdXRjR3Vlc3MgLT0gKG8yIC0gbykgKiA2MCAqIDEwMDA7IC8vIElmIHRoYXQgZ2l2ZXMgdXMgdGhlIGxvY2FsIHRpbWUgd2Ugd2FudCwgd2UncmUgZG9uZQoKICAgICAgdmFyIG8zID0gdHoub2Zmc2V0KHV0Y0d1ZXNzKTsKCiAgICAgIGlmIChvMiA9PT0gbzMpIHsKICAgICAgICByZXR1cm4gW3V0Y0d1ZXNzLCBvMl07CiAgICAgIH0gLy8gSWYgaXQncyBkaWZmZXJlbnQsIHdlJ3JlIGluIGEgaG9sZSB0aW1lLiBUaGUgb2Zmc2V0IGhhcyBjaGFuZ2VkLCBidXQgdGhlIHdlIGRvbid0IGFkanVzdCB0aGUgdGltZQoKCiAgICAgIHJldHVybiBbbG9jYWxUUyAtIE1hdGgubWluKG8yLCBvMykgKiA2MCAqIDEwMDAsIE1hdGgubWF4KG8yLCBvMyldOwogICAgfSAvLyBjb252ZXJ0IGFuIGVwb2NoIHRpbWVzdGFtcCBpbnRvIGEgY2FsZW5kYXIgb2JqZWN0IHdpdGggdGhlIGdpdmVuIG9mZnNldAoKCiAgICBmdW5jdGlvbiB0c1RvT2JqKHRzLCBvZmZzZXQpIHsKICAgICAgdHMgKz0gb2Zmc2V0ICogNjAgKiAxMDAwOwogICAgICB2YXIgZCA9IG5ldyBEYXRlKHRzKTsKICAgICAgcmV0dXJuIHsKICAgICAgICB5ZWFyOiBkLmdldFVUQ0Z1bGxZZWFyKCksCiAgICAgICAgbW9udGg6IGQuZ2V0VVRDTW9udGgoKSArIDEsCiAgICAgICAgZGF5OiBkLmdldFVUQ0RhdGUoKSwKICAgICAgICBob3VyOiBkLmdldFVUQ0hvdXJzKCksCiAgICAgICAgbWludXRlOiBkLmdldFVUQ01pbnV0ZXMoKSwKICAgICAgICBzZWNvbmQ6IGQuZ2V0VVRDU2Vjb25kcygpLAogICAgICAgIG1pbGxpc2Vjb25kOiBkLmdldFVUQ01pbGxpc2Vjb25kcygpCiAgICAgIH07CiAgICB9IC8vIGNvbnZlcnQgYSBjYWxlbmRhciBvYmplY3QgdG8gYSBlcG9jaCB0aW1lc3RhbXAKCgogICAgZnVuY3Rpb24gb2JqVG9UUyhvYmosIG9mZnNldCwgem9uZSkgewogICAgICByZXR1cm4gZml4T2Zmc2V0KG9ialRvTG9jYWxUUyhvYmopLCBvZmZzZXQsIHpvbmUpOwogICAgfSAvLyBjcmVhdGUgYSBuZXcgRFQgaW5zdGFuY2UgYnkgYWRkaW5nIGEgZHVyYXRpb24sIGFkanVzdGluZyBmb3IgRFNUcwoKCiAgICBmdW5jdGlvbiBhZGp1c3RUaW1lKGluc3QsIGR1cikgewogICAgICB2YXIgb1ByZSA9IGluc3QubywKICAgICAgICAgIHllYXIgPSBpbnN0LmMueWVhciArIE1hdGgudHJ1bmMoZHVyLnllYXJzKSwKICAgICAgICAgIG1vbnRoID0gaW5zdC5jLm1vbnRoICsgTWF0aC50cnVuYyhkdXIubW9udGhzKSArIE1hdGgudHJ1bmMoZHVyLnF1YXJ0ZXJzKSAqIDMsCiAgICAgICAgICBjID0gT2JqZWN0LmFzc2lnbih7fSwgaW5zdC5jLCB7CiAgICAgICAgeWVhcjogeWVhciwKICAgICAgICBtb250aDogbW9udGgsCiAgICAgICAgZGF5OiBNYXRoLm1pbihpbnN0LmMuZGF5LCBkYXlzSW5Nb250aCh5ZWFyLCBtb250aCkpICsgTWF0aC50cnVuYyhkdXIuZGF5cykgKyBNYXRoLnRydW5jKGR1ci53ZWVrcykgKiA3CiAgICAgIH0pLAogICAgICAgICAgbWlsbGlzVG9BZGQgPSBEdXJhdGlvbi5mcm9tT2JqZWN0KHsKICAgICAgICB5ZWFyczogZHVyLnllYXJzIC0gTWF0aC50cnVuYyhkdXIueWVhcnMpLAogICAgICAgIHF1YXJ0ZXJzOiBkdXIucXVhcnRlcnMgLSBNYXRoLnRydW5jKGR1ci5xdWFydGVycyksCiAgICAgICAgbW9udGhzOiBkdXIubW9udGhzIC0gTWF0aC50cnVuYyhkdXIubW9udGhzKSwKICAgICAgICB3ZWVrczogZHVyLndlZWtzIC0gTWF0aC50cnVuYyhkdXIud2Vla3MpLAogICAgICAgIGRheXM6IGR1ci5kYXlzIC0gTWF0aC50cnVuYyhkdXIuZGF5cyksCiAgICAgICAgaG91cnM6IGR1ci5ob3VycywKICAgICAgICBtaW51dGVzOiBkdXIubWludXRlcywKICAgICAgICBzZWNvbmRzOiBkdXIuc2Vjb25kcywKICAgICAgICBtaWxsaXNlY29uZHM6IGR1ci5taWxsaXNlY29uZHMKICAgICAgfSkuYXMoIm1pbGxpc2Vjb25kcyIpLAogICAgICAgICAgbG9jYWxUUyA9IG9ialRvTG9jYWxUUyhjKTsKCiAgICAgIHZhciBfZml4T2Zmc2V0ID0gZml4T2Zmc2V0KGxvY2FsVFMsIG9QcmUsIGluc3Quem9uZSksCiAgICAgICAgICB0cyA9IF9maXhPZmZzZXRbMF0sCiAgICAgICAgICBvID0gX2ZpeE9mZnNldFsxXTsKCiAgICAgIGlmIChtaWxsaXNUb0FkZCAhPT0gMCkgewogICAgICAgIHRzICs9IG1pbGxpc1RvQWRkOyAvLyB0aGF0IGNvdWxkIGhhdmUgY2hhbmdlZCB0aGUgb2Zmc2V0IGJ5IGdvaW5nIG92ZXIgYSBEU1QsIGJ1dCB3ZSB3YW50IHRvIGtlZXAgdGhlIHRzIHRoZSBzYW1lCgogICAgICAgIG8gPSBpbnN0LnpvbmUub2Zmc2V0KHRzKTsKICAgICAgfQoKICAgICAgcmV0dXJuIHsKICAgICAgICB0czogdHMsCiAgICAgICAgbzogbwogICAgICB9OwogICAgfSAvLyBoZWxwZXIgdXNlZnVsIGluIHR1cm5pbmcgdGhlIHJlc3VsdHMgb2YgcGFyc2luZyBpbnRvIHJlYWwgZGF0ZXMKICAgIC8vIGJ5IGhhbmRsaW5nIHRoZSB6b25lIG9wdGlvbnMKCgogICAgZnVuY3Rpb24gcGFyc2VEYXRhVG9EYXRlVGltZShwYXJzZWQsIHBhcnNlZFpvbmUsIG9wdHMsIGZvcm1hdCwgdGV4dCkgewogICAgICB2YXIgc2V0Wm9uZSA9IG9wdHMuc2V0Wm9uZSwKICAgICAgICAgIHpvbmUgPSBvcHRzLnpvbmU7CgogICAgICBpZiAocGFyc2VkICYmIE9iamVjdC5rZXlzKHBhcnNlZCkubGVuZ3RoICE9PSAwKSB7CiAgICAgICAgdmFyIGludGVycHJldGF0aW9uWm9uZSA9IHBhcnNlZFpvbmUgfHwgem9uZSwKICAgICAgICAgICAgaW5zdCA9IERhdGVUaW1lLmZyb21PYmplY3QoT2JqZWN0LmFzc2lnbihwYXJzZWQsIG9wdHMsIHsKICAgICAgICAgIHpvbmU6IGludGVycHJldGF0aW9uWm9uZSwKICAgICAgICAgIC8vIHNldFpvbmUgaXMgYSB2YWxpZCBvcHRpb24gaW4gdGhlIGNhbGxpbmcgbWV0aG9kcywgYnV0IG5vdCBpbiBmcm9tT2JqZWN0CiAgICAgICAgICBzZXRab25lOiB1bmRlZmluZWQKICAgICAgICB9KSk7CiAgICAgICAgcmV0dXJuIHNldFpvbmUgPyBpbnN0IDogaW5zdC5zZXRab25lKHpvbmUpOwogICAgICB9IGVsc2UgewogICAgICAgIHJldHVybiBEYXRlVGltZS5pbnZhbGlkKG5ldyBJbnZhbGlkKCJ1bnBhcnNhYmxlIiwgInRoZSBpbnB1dCBcIiIgKyB0ZXh0ICsgIlwiIGNhbid0IGJlIHBhcnNlZCBhcyAiICsgZm9ybWF0KSk7CiAgICAgIH0KICAgIH0gLy8gaWYgeW91IHdhbnQgdG8gb3V0cHV0IGEgdGVjaG5pY2FsIGZvcm1hdCAoZS5nLiBSRkMgMjgyMiksIHRoaXMgaGVscGVyCiAgICAvLyBoZWxwcyBoYW5kbGUgdGhlIGRldGFpbHMKCgogICAgZnVuY3Rpb24gdG9UZWNoRm9ybWF0KGR0LCBmb3JtYXQsIGFsbG93WikgewogICAgICBpZiAoYWxsb3daID09PSB2b2lkIDApIHsKICAgICAgICBhbGxvd1ogPSB0cnVlOwogICAgICB9CgogICAgICByZXR1cm4gZHQuaXNWYWxpZCA/IEZvcm1hdHRlci5jcmVhdGUoTG9jYWxlLmNyZWF0ZSgiZW4tVVMiKSwgewogICAgICAgIGFsbG93WjogYWxsb3daLAogICAgICAgIGZvcmNlU2ltcGxlOiB0cnVlCiAgICAgIH0pLmZvcm1hdERhdGVUaW1lRnJvbVN0cmluZyhkdCwgZm9ybWF0KSA6IG51bGw7CiAgICB9IC8vIHRlY2huaWNhbCB0aW1lIGZvcm1hdHMgKGUuZy4gdGhlIHRpbWUgcGFydCBvZiBJU08gODYwMSksIHRha2Ugc29tZSBvcHRpb25zCiAgICAvLyBhbmQgdGhpcyBjb21tb25pemVzIHRoZWlyIGhhbmRsaW5nCgoKICAgIGZ1bmN0aW9uIHRvVGVjaFRpbWVGb3JtYXQoZHQsIF9yZWYpIHsKICAgICAgdmFyIF9yZWYkc3VwcHJlc3NTZWNvbmRzID0gX3JlZi5zdXBwcmVzc1NlY29uZHMsCiAgICAgICAgICBzdXBwcmVzc1NlY29uZHMgPSBfcmVmJHN1cHByZXNzU2Vjb25kcyA9PT0gdm9pZCAwID8gZmFsc2UgOiBfcmVmJHN1cHByZXNzU2Vjb25kcywKICAgICAgICAgIF9yZWYkc3VwcHJlc3NNaWxsaXNlYyA9IF9yZWYuc3VwcHJlc3NNaWxsaXNlY29uZHMsCiAgICAgICAgICBzdXBwcmVzc01pbGxpc2Vjb25kcyA9IF9yZWYkc3VwcHJlc3NNaWxsaXNlYyA9PT0gdm9pZCAwID8gZmFsc2UgOiBfcmVmJHN1cHByZXNzTWlsbGlzZWMsCiAgICAgICAgICBpbmNsdWRlT2Zmc2V0ID0gX3JlZi5pbmNsdWRlT2Zmc2V0LAogICAgICAgICAgX3JlZiRpbmNsdWRlUHJlZml4ID0gX3JlZi5pbmNsdWRlUHJlZml4LAogICAgICAgICAgaW5jbHVkZVByZWZpeCA9IF9yZWYkaW5jbHVkZVByZWZpeCA9PT0gdm9pZCAwID8gZmFsc2UgOiBfcmVmJGluY2x1ZGVQcmVmaXgsCiAgICAgICAgICBfcmVmJGluY2x1ZGVab25lID0gX3JlZi5pbmNsdWRlWm9uZSwKICAgICAgICAgIGluY2x1ZGVab25lID0gX3JlZiRpbmNsdWRlWm9uZSA9PT0gdm9pZCAwID8gZmFsc2UgOiBfcmVmJGluY2x1ZGVab25lLAogICAgICAgICAgX3JlZiRzcGFjZVpvbmUgPSBfcmVmLnNwYWNlWm9uZSwKICAgICAgICAgIHNwYWNlWm9uZSA9IF9yZWYkc3BhY2Vab25lID09PSB2b2lkIDAgPyBmYWxzZSA6IF9yZWYkc3BhY2Vab25lLAogICAgICAgICAgX3JlZiRmb3JtYXQgPSBfcmVmLmZvcm1hdCwKICAgICAgICAgIGZvcm1hdCA9IF9yZWYkZm9ybWF0ID09PSB2b2lkIDAgPyAiZXh0ZW5kZWQiIDogX3JlZiRmb3JtYXQ7CiAgICAgIHZhciBmbXQgPSBmb3JtYXQgPT09ICJiYXNpYyIgPyAiSEhtbSIgOiAiSEg6bW0iOwoKICAgICAgaWYgKCFzdXBwcmVzc1NlY29uZHMgfHwgZHQuc2Vjb25kICE9PSAwIHx8IGR0Lm1pbGxpc2Vjb25kICE9PSAwKSB7CiAgICAgICAgZm10ICs9IGZvcm1hdCA9PT0gImJhc2ljIiA/ICJzcyIgOiAiOnNzIjsKCiAgICAgICAgaWYgKCFzdXBwcmVzc01pbGxpc2Vjb25kcyB8fCBkdC5taWxsaXNlY29uZCAhPT0gMCkgewogICAgICAgICAgZm10ICs9ICIuU1NTIjsKICAgICAgICB9CiAgICAgIH0KCiAgICAgIGlmICgoaW5jbHVkZVpvbmUgfHwgaW5jbHVkZU9mZnNldCkgJiYgc3BhY2Vab25lKSB7CiAgICAgICAgZm10ICs9ICIgIjsKICAgICAgfQoKICAgICAgaWYgKGluY2x1ZGVab25lKSB7CiAgICAgICAgZm10ICs9ICJ6IjsKICAgICAgfSBlbHNlIGlmIChpbmNsdWRlT2Zmc2V0KSB7CiAgICAgICAgZm10ICs9IGZvcm1hdCA9PT0gImJhc2ljIiA/ICJaWloiIDogIlpaIjsKICAgICAgfQoKICAgICAgdmFyIHN0ciA9IHRvVGVjaEZvcm1hdChkdCwgZm10KTsKCiAgICAgIGlmIChpbmNsdWRlUHJlZml4KSB7CiAgICAgICAgc3RyID0gIlQiICsgc3RyOwogICAgICB9CgogICAgICByZXR1cm4gc3RyOwogICAgfSAvLyBkZWZhdWx0cyBmb3IgdW5zcGVjaWZpZWQgdW5pdHMgaW4gdGhlIHN1cHBvcnRlZCBjYWxlbmRhcnMKCgogICAgdmFyIGRlZmF1bHRVbml0VmFsdWVzID0gewogICAgICBtb250aDogMSwKICAgICAgZGF5OiAxLAogICAgICBob3VyOiAwLAogICAgICBtaW51dGU6IDAsCiAgICAgIHNlY29uZDogMCwKICAgICAgbWlsbGlzZWNvbmQ6IDAKICAgIH0sCiAgICAgICAgZGVmYXVsdFdlZWtVbml0VmFsdWVzID0gewogICAgICB3ZWVrTnVtYmVyOiAxLAogICAgICB3ZWVrZGF5OiAxLAogICAgICBob3VyOiAwLAogICAgICBtaW51dGU6IDAsCiAgICAgIHNlY29uZDogMCwKICAgICAgbWlsbGlzZWNvbmQ6IDAKICAgIH0sCiAgICAgICAgZGVmYXVsdE9yZGluYWxVbml0VmFsdWVzID0gewogICAgICBvcmRpbmFsOiAxLAogICAgICBob3VyOiAwLAogICAgICBtaW51dGU6IDAsCiAgICAgIHNlY29uZDogMCwKICAgICAgbWlsbGlzZWNvbmQ6IDAKICAgIH07IC8vIFVuaXRzIGluIHRoZSBzdXBwb3J0ZWQgY2FsZW5kYXJzLCBzb3J0ZWQgYnkgYmlnbmVzcwoKICAgIHZhciBvcmRlcmVkVW5pdHMkMSA9IFsieWVhciIsICJtb250aCIsICJkYXkiLCAiaG91ciIsICJtaW51dGUiLCAic2Vjb25kIiwgIm1pbGxpc2Vjb25kIl0sCiAgICAgICAgb3JkZXJlZFdlZWtVbml0cyA9IFsid2Vla1llYXIiLCAid2Vla051bWJlciIsICJ3ZWVrZGF5IiwgImhvdXIiLCAibWludXRlIiwgInNlY29uZCIsICJtaWxsaXNlY29uZCJdLAogICAgICAgIG9yZGVyZWRPcmRpbmFsVW5pdHMgPSBbInllYXIiLCAib3JkaW5hbCIsICJob3VyIiwgIm1pbnV0ZSIsICJzZWNvbmQiLCAibWlsbGlzZWNvbmQiXTsgLy8gc3RhbmRhcmRpemUgY2FzZSBhbmQgcGx1cmFsaXR5IGluIHVuaXRzCgogICAgZnVuY3Rpb24gbm9ybWFsaXplVW5pdCh1bml0KSB7CiAgICAgIHZhciBub3JtYWxpemVkID0gewogICAgICAgIHllYXI6ICJ5ZWFyIiwKICAgICAgICB5ZWFyczogInllYXIiLAogICAgICAgIG1vbnRoOiAibW9udGgiLAogICAgICAgIG1vbnRoczogIm1vbnRoIiwKICAgICAgICBkYXk6ICJkYXkiLAogICAgICAgIGRheXM6ICJkYXkiLAogICAgICAgIGhvdXI6ICJob3VyIiwKICAgICAgICBob3VyczogImhvdXIiLAogICAgICAgIG1pbnV0ZTogIm1pbnV0ZSIsCiAgICAgICAgbWludXRlczogIm1pbnV0ZSIsCiAgICAgICAgcXVhcnRlcjogInF1YXJ0ZXIiLAogICAgICAgIHF1YXJ0ZXJzOiAicXVhcnRlciIsCiAgICAgICAgc2Vjb25kOiAic2Vjb25kIiwKICAgICAgICBzZWNvbmRzOiAic2Vjb25kIiwKICAgICAgICBtaWxsaXNlY29uZDogIm1pbGxpc2Vjb25kIiwKICAgICAgICBtaWxsaXNlY29uZHM6ICJtaWxsaXNlY29uZCIsCiAgICAgICAgd2Vla2RheTogIndlZWtkYXkiLAogICAgICAgIHdlZWtkYXlzOiAid2Vla2RheSIsCiAgICAgICAgd2Vla251bWJlcjogIndlZWtOdW1iZXIiLAogICAgICAgIHdlZWtzbnVtYmVyOiAid2Vla051bWJlciIsCiAgICAgICAgd2Vla251bWJlcnM6ICJ3ZWVrTnVtYmVyIiwKICAgICAgICB3ZWVreWVhcjogIndlZWtZZWFyIiwKICAgICAgICB3ZWVreWVhcnM6ICJ3ZWVrWWVhciIsCiAgICAgICAgb3JkaW5hbDogIm9yZGluYWwiCiAgICAgIH1bdW5pdC50b0xvd2VyQ2FzZSgpXTsKICAgICAgaWYgKCFub3JtYWxpemVkKSB0aHJvdyBuZXcgSW52YWxpZFVuaXRFcnJvcih1bml0KTsKICAgICAgcmV0dXJuIG5vcm1hbGl6ZWQ7CiAgICB9IC8vIHRoaXMgaXMgYSBkdW1iZWQgZG93biB2ZXJzaW9uIG9mIGZyb21PYmplY3QoKSB0aGF0IHJ1bnMgYWJvdXQgNjAlIGZhc3RlcgogICAgLy8gYnV0IGRvZXNuJ3QgZG8gYW55IHZhbGlkYXRpb24sIG1ha2VzIGEgYnVuY2ggb2YgYXNzdW1wdGlvbnMgYWJvdXQgd2hhdCB1bml0cwogICAgLy8gYXJlIHByZXNlbnQsIGFuZCBzbyBvbi4KCgogICAgZnVuY3Rpb24gcXVpY2tEVChvYmosIHpvbmUpIHsKICAgICAgLy8gYXNzdW1lIHdlIGhhdmUgdGhlIGhpZ2hlci1vcmRlciB1bml0cwogICAgICBmb3IgKHZhciBfaXRlcmF0b3IgPSBfY3JlYXRlRm9yT2ZJdGVyYXRvckhlbHBlckxvb3NlKG9yZGVyZWRVbml0cyQxKSwgX3N0ZXA7ICEoX3N0ZXAgPSBfaXRlcmF0b3IoKSkuZG9uZTspIHsKICAgICAgICB2YXIgdSA9IF9zdGVwLnZhbHVlOwoKICAgICAgICBpZiAoaXNVbmRlZmluZWQob2JqW3VdKSkgewogICAgICAgICAgb2JqW3VdID0gZGVmYXVsdFVuaXRWYWx1ZXNbdV07CiAgICAgICAgfQogICAgICB9CgogICAgICB2YXIgaW52YWxpZCA9IGhhc0ludmFsaWRHcmVnb3JpYW5EYXRhKG9iaikgfHwgaGFzSW52YWxpZFRpbWVEYXRhKG9iaik7CgogICAgICBpZiAoaW52YWxpZCkgewogICAgICAgIHJldHVybiBEYXRlVGltZS5pbnZhbGlkKGludmFsaWQpOwogICAgICB9CgogICAgICB2YXIgdHNOb3cgPSBTZXR0aW5ncy5ub3coKSwKICAgICAgICAgIG9mZnNldFByb3ZpcyA9IHpvbmUub2Zmc2V0KHRzTm93KSwKICAgICAgICAgIF9vYmpUb1RTID0gb2JqVG9UUyhvYmosIG9mZnNldFByb3Zpcywgem9uZSksCiAgICAgICAgICB0cyA9IF9vYmpUb1RTWzBdLAogICAgICAgICAgbyA9IF9vYmpUb1RTWzFdOwoKICAgICAgcmV0dXJuIG5ldyBEYXRlVGltZSh7CiAgICAgICAgdHM6IHRzLAogICAgICAgIHpvbmU6IHpvbmUsCiAgICAgICAgbzogbwogICAgICB9KTsKICAgIH0KCiAgICBmdW5jdGlvbiBkaWZmUmVsYXRpdmUoc3RhcnQsIGVuZCwgb3B0cykgewogICAgICB2YXIgcm91bmQgPSBpc1VuZGVmaW5lZChvcHRzLnJvdW5kKSA/IHRydWUgOiBvcHRzLnJvdW5kLAogICAgICAgICAgZm9ybWF0ID0gZnVuY3Rpb24gZm9ybWF0KGMsIHVuaXQpIHsKICAgICAgICBjID0gcm91bmRUbyhjLCByb3VuZCB8fCBvcHRzLmNhbGVuZGFyeSA/IDAgOiAyLCB0cnVlKTsKICAgICAgICB2YXIgZm9ybWF0dGVyID0gZW5kLmxvYy5jbG9uZShvcHRzKS5yZWxGb3JtYXR0ZXIob3B0cyk7CiAgICAgICAgcmV0dXJuIGZvcm1hdHRlci5mb3JtYXQoYywgdW5pdCk7CiAgICAgIH0sCiAgICAgICAgICBkaWZmZXIgPSBmdW5jdGlvbiBkaWZmZXIodW5pdCkgewogICAgICAgIGlmIChvcHRzLmNhbGVuZGFyeSkgewogICAgICAgICAgaWYgKCFlbmQuaGFzU2FtZShzdGFydCwgdW5pdCkpIHsKICAgICAgICAgICAgcmV0dXJuIGVuZC5zdGFydE9mKHVuaXQpLmRpZmYoc3RhcnQuc3RhcnRPZih1bml0KSwgdW5pdCkuZ2V0KHVuaXQpOwogICAgICAgICAgfSBlbHNlIHJldHVybiAwOwogICAgICAgIH0gZWxzZSB7CiAgICAgICAgICByZXR1cm4gZW5kLmRpZmYoc3RhcnQsIHVuaXQpLmdldCh1bml0KTsKICAgICAgICB9CiAgICAgIH07CgogICAgICBpZiAob3B0cy51bml0KSB7CiAgICAgICAgcmV0dXJuIGZvcm1hdChkaWZmZXIob3B0cy51bml0KSwgb3B0cy51bml0KTsKICAgICAgfQoKICAgICAgZm9yICh2YXIgX2l0ZXJhdG9yMiA9IF9jcmVhdGVGb3JPZkl0ZXJhdG9ySGVscGVyTG9vc2Uob3B0cy51bml0cyksIF9zdGVwMjsgIShfc3RlcDIgPSBfaXRlcmF0b3IyKCkpLmRvbmU7KSB7CiAgICAgICAgdmFyIHVuaXQgPSBfc3RlcDIudmFsdWU7CiAgICAgICAgdmFyIGNvdW50ID0gZGlmZmVyKHVuaXQpOwoKICAgICAgICBpZiAoTWF0aC5hYnMoY291bnQpID49IDEpIHsKICAgICAgICAgIHJldHVybiBmb3JtYXQoY291bnQsIHVuaXQpOwogICAgICAgIH0KICAgICAgfQoKICAgICAgcmV0dXJuIGZvcm1hdChzdGFydCA+IGVuZCA/IC0wIDogMCwgb3B0cy51bml0c1tvcHRzLnVuaXRzLmxlbmd0aCAtIDFdKTsKICAgIH0KICAgIC8qKgogICAgICogQSBEYXRlVGltZSBpcyBhbiBpbW11dGFibGUgZGF0YSBzdHJ1Y3R1cmUgcmVwcmVzZW50aW5nIGEgc3BlY2lmaWMgZGF0ZSBhbmQgdGltZSBhbmQgYWNjb21wYW55aW5nIG1ldGhvZHMuIEl0IGNvbnRhaW5zIGNsYXNzIGFuZCBpbnN0YW5jZSBtZXRob2RzIGZvciBjcmVhdGluZywgcGFyc2luZywgaW50ZXJyb2dhdGluZywgdHJhbnNmb3JtaW5nLCBhbmQgZm9ybWF0dGluZyB0aGVtLgogICAgICoKICAgICAqIEEgRGF0ZVRpbWUgY29tcHJpc2VzIG9mOgogICAgICogKiBBIHRpbWVzdGFtcC4gRWFjaCBEYXRlVGltZSBpbnN0YW5jZSByZWZlcnMgdG8gYSBzcGVjaWZpYyBtaWxsaXNlY29uZCBvZiB0aGUgVW5peCBlcG9jaC4KICAgICAqICogQSB0aW1lIHpvbmUuIEVhY2ggaW5zdGFuY2UgaXMgY29uc2lkZXJlZCBpbiB0aGUgY29udGV4dCBvZiBhIHNwZWNpZmljIHpvbmUgKGJ5IGRlZmF1bHQgdGhlIGxvY2FsIHN5c3RlbSdzIHpvbmUpLgogICAgICogKiBDb25maWd1cmF0aW9uIHByb3BlcnRpZXMgdGhhdCBlZmZlY3QgaG93IG91dHB1dCBzdHJpbmdzIGFyZSBmb3JtYXR0ZWQsIHN1Y2ggYXMgYGxvY2FsZWAsIGBudW1iZXJpbmdTeXN0ZW1gLCBhbmQgYG91dHB1dENhbGVuZGFyYC4KICAgICAqCiAgICAgKiBIZXJlIGlzIGEgYnJpZWYgb3ZlcnZpZXcgb2YgdGhlIG1vc3QgY29tbW9ubHkgdXNlZCBmdW5jdGlvbmFsaXR5IGl0IHByb3ZpZGVzOgogICAgICoKICAgICAqICogKipDcmVhdGlvbioqOiBUbyBjcmVhdGUgYSBEYXRlVGltZSBmcm9tIGl0cyBjb21wb25lbnRzLCB1c2Ugb25lIG9mIGl0cyBmYWN0b3J5IGNsYXNzIG1ldGhvZHM6IHtAbGluayBsb2NhbH0sIHtAbGluayB1dGN9LCBhbmQgKG1vc3QgZmxleGlibHkpIHtAbGluayBmcm9tT2JqZWN0fS4gVG8gY3JlYXRlIG9uZSBmcm9tIGEgc3RhbmRhcmQgc3RyaW5nIGZvcm1hdCwgdXNlIHtAbGluayBmcm9tSVNPfSwge0BsaW5rIGZyb21IVFRQfSwgYW5kIHtAbGluayBmcm9tUkZDMjgyMn0uIFRvIGNyZWF0ZSBvbmUgZnJvbSBhIGN1c3RvbSBzdHJpbmcgZm9ybWF0LCB1c2Uge0BsaW5rIGZyb21Gb3JtYXR9LiBUbyBjcmVhdGUgb25lIGZyb20gYSBuYXRpdmUgSlMgZGF0ZSwgdXNlIHtAbGluayBmcm9tSlNEYXRlfS4KICAgICAqICogKipHcmVnb3JpYW4gY2FsZW5kYXIgYW5kIHRpbWUqKjogVG8gZXhhbWluZSB0aGUgR3JlZ29yaWFuIHByb3BlcnRpZXMgb2YgYSBEYXRlVGltZSBpbmRpdmlkdWFsbHkgKGkuZSBhcyBvcHBvc2VkIHRvIGNvbGxlY3RpdmVseSB0aHJvdWdoIHtAbGluayB0b09iamVjdH0pLCB1c2UgdGhlIHtAbGluayB5ZWFyfSwge0BsaW5rIG1vbnRofSwKICAgICAqIHtAbGluayBkYXl9LCB7QGxpbmsgaG91cn0sIHtAbGluayBtaW51dGV9LCB7QGxpbmsgc2Vjb25kfSwge0BsaW5rIG1pbGxpc2Vjb25kfSBhY2Nlc3NvcnMuCiAgICAgKiAqICoqV2VlayBjYWxlbmRhcioqOiBGb3IgSVNPIHdlZWsgY2FsZW5kYXIgYXR0cmlidXRlcywgc2VlIHRoZSB7QGxpbmsgd2Vla1llYXJ9LCB7QGxpbmsgd2Vla051bWJlcn0sIGFuZCB7QGxpbmsgd2Vla2RheX0gYWNjZXNzb3JzLgogICAgICogKiAqKkNvbmZpZ3VyYXRpb24qKiBTZWUgdGhlIHtAbGluayBsb2NhbGV9IGFuZCB7QGxpbmsgbnVtYmVyaW5nU3lzdGVtfSBhY2Nlc3NvcnMuCiAgICAgKiAqICoqVHJhbnNmb3JtYXRpb24qKjogVG8gdHJhbnNmb3JtIHRoZSBEYXRlVGltZSBpbnRvIG90aGVyIERhdGVUaW1lcywgdXNlIHtAbGluayBzZXR9LCB7QGxpbmsgcmVjb25maWd1cmV9LCB7QGxpbmsgc2V0Wm9uZX0sIHtAbGluayBzZXRMb2NhbGV9LCB7QGxpbmsgcGx1c30sIHtAbGluayBtaW51c30sIHtAbGluayBlbmRPZn0sIHtAbGluayBzdGFydE9mfSwge0BsaW5rIHRvVVRDfSwgYW5kIHtAbGluayB0b0xvY2FsfS4KICAgICAqICogKipPdXRwdXQqKjogVG8gY29udmVydCB0aGUgRGF0ZVRpbWUgdG8gb3RoZXIgcmVwcmVzZW50YXRpb25zLCB1c2UgdGhlIHtAbGluayB0b1JlbGF0aXZlfSwge0BsaW5rIHRvUmVsYXRpdmVDYWxlbmRhcn0sIHtAbGluayB0b0pTT059LCB7QGxpbmsgdG9JU099LCB7QGxpbmsgdG9IVFRQfSwge0BsaW5rIHRvT2JqZWN0fSwge0BsaW5rIHRvUkZDMjgyMn0sIHtAbGluayB0b1N0cmluZ30sIHtAbGluayB0b0xvY2FsZVN0cmluZ30sIHtAbGluayB0b0Zvcm1hdH0sIHtAbGluayB0b01pbGxpc30gYW5kIHtAbGluayB0b0pTRGF0ZX0uCiAgICAgKgogICAgICogVGhlcmUncyBwbGVudHkgb3RoZXJzIGRvY3VtZW50ZWQgYmVsb3cuIEluIGFkZGl0aW9uLCBmb3IgbW9yZSBpbmZvcm1hdGlvbiBvbiBzdWJ0bGVyIHRvcGljcyBsaWtlIGludGVybmF0aW9uYWxpemF0aW9uLCB0aW1lIHpvbmVzLCBhbHRlcm5hdGl2ZSBjYWxlbmRhcnMsIHZhbGlkaXR5LCBhbmQgc28gb24sIHNlZSB0aGUgZXh0ZXJuYWwgZG9jdW1lbnRhdGlvbi4KICAgICAqLwoKCiAgICB2YXIgRGF0ZVRpbWUgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKCkgewogICAgICAvKioKICAgICAgICogQGFjY2VzcyBwcml2YXRlCiAgICAgICAqLwogICAgICBmdW5jdGlvbiBEYXRlVGltZShjb25maWcpIHsKICAgICAgICB2YXIgem9uZSA9IGNvbmZpZy56b25lIHx8IFNldHRpbmdzLmRlZmF1bHRab25lOwogICAgICAgIHZhciBpbnZhbGlkID0gY29uZmlnLmludmFsaWQgfHwgKE51bWJlci5pc05hTihjb25maWcudHMpID8gbmV3IEludmFsaWQoImludmFsaWQgaW5wdXQiKSA6IG51bGwpIHx8ICghem9uZS5pc1ZhbGlkID8gdW5zdXBwb3J0ZWRab25lKHpvbmUpIDogbnVsbCk7CiAgICAgICAgLyoqCiAgICAgICAgICogQGFjY2VzcyBwcml2YXRlCiAgICAgICAgICovCgogICAgICAgIHRoaXMudHMgPSBpc1VuZGVmaW5lZChjb25maWcudHMpID8gU2V0dGluZ3Mubm93KCkgOiBjb25maWcudHM7CiAgICAgICAgdmFyIGMgPSBudWxsLAogICAgICAgICAgICBvID0gbnVsbDsKCiAgICAgICAgaWYgKCFpbnZhbGlkKSB7CiAgICAgICAgICB2YXIgdW5jaGFuZ2VkID0gY29uZmlnLm9sZCAmJiBjb25maWcub2xkLnRzID09PSB0aGlzLnRzICYmIGNvbmZpZy5vbGQuem9uZS5lcXVhbHMoem9uZSk7CgogICAgICAgICAgaWYgKHVuY2hhbmdlZCkgewogICAgICAgICAgICB2YXIgX3JlZjIgPSBbY29uZmlnLm9sZC5jLCBjb25maWcub2xkLm9dOwogICAgICAgICAgICBjID0gX3JlZjJbMF07CiAgICAgICAgICAgIG8gPSBfcmVmMlsxXTsKICAgICAgICAgIH0gZWxzZSB7CiAgICAgICAgICAgIHZhciBvdCA9IHpvbmUub2Zmc2V0KHRoaXMudHMpOwogICAgICAgICAgICBjID0gdHNUb09iaih0aGlzLnRzLCBvdCk7CiAgICAgICAgICAgIGludmFsaWQgPSBOdW1iZXIuaXNOYU4oYy55ZWFyKSA/IG5ldyBJbnZhbGlkKCJpbnZhbGlkIGlucHV0IikgOiBudWxsOwogICAgICAgICAgICBjID0gaW52YWxpZCA/IG51bGwgOiBjOwogICAgICAgICAgICBvID0gaW52YWxpZCA/IG51bGwgOiBvdDsKICAgICAgICAgIH0KICAgICAgICB9CiAgICAgICAgLyoqCiAgICAgICAgICogQGFjY2VzcyBwcml2YXRlCiAgICAgICAgICovCgoKICAgICAgICB0aGlzLl96b25lID0gem9uZTsKICAgICAgICAvKioKICAgICAgICAgKiBAYWNjZXNzIHByaXZhdGUKICAgICAgICAgKi8KCiAgICAgICAgdGhpcy5sb2MgPSBjb25maWcubG9jIHx8IExvY2FsZS5jcmVhdGUoKTsKICAgICAgICAvKioKICAgICAgICAgKiBAYWNjZXNzIHByaXZhdGUKICAgICAgICAgKi8KCiAgICAgICAgdGhpcy5pbnZhbGlkID0gaW52YWxpZDsKICAgICAgICAvKioKICAgICAgICAgKiBAYWNjZXNzIHByaXZhdGUKICAgICAgICAgKi8KCiAgICAgICAgdGhpcy53ZWVrRGF0YSA9IG51bGw7CiAgICAgICAgLyoqCiAgICAgICAgICogQGFjY2VzcyBwcml2YXRlCiAgICAgICAgICovCgogICAgICAgIHRoaXMuYyA9IGM7CiAgICAgICAgLyoqCiAgICAgICAgICogQGFjY2VzcyBwcml2YXRlCiAgICAgICAgICovCgogICAgICAgIHRoaXMubyA9IG87CiAgICAgICAgLyoqCiAgICAgICAgICogQGFjY2VzcyBwcml2YXRlCiAgICAgICAgICovCgogICAgICAgIHRoaXMuaXNMdXhvbkRhdGVUaW1lID0gdHJ1ZTsKICAgICAgfSAvLyBDT05TVFJVQ1QKCiAgICAgIC8qKgogICAgICAgKiBDcmVhdGUgYSBEYXRlVGltZSBmb3IgdGhlIGN1cnJlbnQgaW5zdGFudCwgaW4gdGhlIHN5c3RlbSdzIHRpbWUgem9uZS4KICAgICAgICoKICAgICAgICogVXNlIFNldHRpbmdzIHRvIG92ZXJyaWRlIHRoZXNlIGRlZmF1bHQgdmFsdWVzIGlmIG5lZWRlZC4KICAgICAgICogQGV4YW1wbGUgRGF0ZVRpbWUubm93KCkudG9JU08oKSAvL34+IG5vdyBpbiB0aGUgSVNPIGZvcm1hdAogICAgICAgKiBAcmV0dXJuIHtEYXRlVGltZX0KICAgICAgICovCgoKICAgICAgRGF0ZVRpbWUubm93ID0gZnVuY3Rpb24gbm93KCkgewogICAgICAgIHJldHVybiBuZXcgRGF0ZVRpbWUoe30pOwogICAgICB9CiAgICAgIC8qKgogICAgICAgKiBDcmVhdGUgYSBsb2NhbCBEYXRlVGltZQogICAgICAgKiBAcGFyYW0ge251bWJlcn0gW3llYXJdIC0gVGhlIGNhbGVuZGFyIHllYXIuIElmIG9taXR0ZWQgKGFzIGluLCBjYWxsIGBsb2NhbCgpYCB3aXRoIG5vIGFyZ3VtZW50cyksIHRoZSBjdXJyZW50IHRpbWUgd2lsbCBiZSB1c2VkCiAgICAgICAqIEBwYXJhbSB7bnVtYmVyfSBbbW9udGg9MV0gLSBUaGUgbW9udGgsIDEtaW5kZXhlZAogICAgICAgKiBAcGFyYW0ge251bWJlcn0gW2RheT0xXSAtIFRoZSBkYXkgb2YgdGhlIG1vbnRoLCAxLWluZGV4ZWQKICAgICAgICogQHBhcmFtIHtudW1iZXJ9IFtob3VyPTBdIC0gVGhlIGhvdXIgb2YgdGhlIGRheSwgaW4gMjQtaG91ciB0aW1lCiAgICAgICAqIEBwYXJhbSB7bnVtYmVyfSBbbWludXRlPTBdIC0gVGhlIG1pbnV0ZSBvZiB0aGUgaG91ciwgbWVhbmluZyBhIG51bWJlciBiZXR3ZWVuIDAgYW5kIDU5CiAgICAgICAqIEBwYXJhbSB7bnVtYmVyfSBbc2Vjb25kPTBdIC0gVGhlIHNlY29uZCBvZiB0aGUgbWludXRlLCBtZWFuaW5nIGEgbnVtYmVyIGJldHdlZW4gMCBhbmQgNTkKICAgICAgICogQHBhcmFtIHtudW1iZXJ9IFttaWxsaXNlY29uZD0wXSAtIFRoZSBtaWxsaXNlY29uZCBvZiB0aGUgc2Vjb25kLCBtZWFuaW5nIGEgbnVtYmVyIGJldHdlZW4gMCBhbmQgOTk5CiAgICAgICAqIEBleGFtcGxlIERhdGVUaW1lLmxvY2FsKCkgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9+PiBub3cKICAgICAgICogQGV4YW1wbGUgRGF0ZVRpbWUubG9jYWwoMjAxNykgICAgICAgICAgICAgICAgICAgICAgICAvL34+IDIwMTctMDEtMDFUMDA6MDA6MDAKICAgICAgICogQGV4YW1wbGUgRGF0ZVRpbWUubG9jYWwoMjAxNywgMykgICAgICAgICAgICAgICAgICAgICAvL34+IDIwMTctMDMtMDFUMDA6MDA6MDAKICAgICAgICogQGV4YW1wbGUgRGF0ZVRpbWUubG9jYWwoMjAxNywgMywgMTIpICAgICAgICAgICAgICAgICAvL34+IDIwMTctMDMtMTJUMDA6MDA6MDAKICAgICAgICogQGV4YW1wbGUgRGF0ZVRpbWUubG9jYWwoMjAxNywgMywgMTIsIDUpICAgICAgICAgICAgICAvL34+IDIwMTctMDMtMTJUMDU6MDA6MDAKICAgICAgICogQGV4YW1wbGUgRGF0ZVRpbWUubG9jYWwoMjAxNywgMywgMTIsIDUsIDQ1KSAgICAgICAgICAvL34+IDIwMTctMDMtMTJUMDU6NDU6MDAKICAgICAgICogQGV4YW1wbGUgRGF0ZVRpbWUubG9jYWwoMjAxNywgMywgMTIsIDUsIDQ1LCAxMCkgICAgICAvL34+IDIwMTctMDMtMTJUMDU6NDU6MTAKICAgICAgICogQGV4YW1wbGUgRGF0ZVRpbWUubG9jYWwoMjAxNywgMywgMTIsIDUsIDQ1LCAxMCwgNzY1KSAvL34+IDIwMTctMDMtMTJUMDU6NDU6MTAuNzY1CiAgICAgICAqIEByZXR1cm4ge0RhdGVUaW1lfQogICAgICAgKi8KICAgICAgOwoKICAgICAgRGF0ZVRpbWUubG9jYWwgPSBmdW5jdGlvbiBsb2NhbCh5ZWFyLCBtb250aCwgZGF5LCBob3VyLCBtaW51dGUsIHNlY29uZCwgbWlsbGlzZWNvbmQpIHsKICAgICAgICBpZiAoaXNVbmRlZmluZWQoeWVhcikpIHsKICAgICAgICAgIHJldHVybiBEYXRlVGltZS5ub3coKTsKICAgICAgICB9IGVsc2UgewogICAgICAgICAgcmV0dXJuIHF1aWNrRFQoewogICAgICAgICAgICB5ZWFyOiB5ZWFyLAogICAgICAgICAgICBtb250aDogbW9udGgsCiAgICAgICAgICAgIGRheTogZGF5LAogICAgICAgICAgICBob3VyOiBob3VyLAogICAgICAgICAgICBtaW51dGU6IG1pbnV0ZSwKICAgICAgICAgICAgc2Vjb25kOiBzZWNvbmQsCiAgICAgICAgICAgIG1pbGxpc2Vjb25kOiBtaWxsaXNlY29uZAogICAgICAgICAgfSwgU2V0dGluZ3MuZGVmYXVsdFpvbmUpOwogICAgICAgIH0KICAgICAgfQogICAgICAvKioKICAgICAgICogQ3JlYXRlIGEgRGF0ZVRpbWUgaW4gVVRDCiAgICAgICAqIEBwYXJhbSB7bnVtYmVyfSBbeWVhcl0gLSBUaGUgY2FsZW5kYXIgeWVhci4gSWYgb21pdHRlZCAoYXMgaW4sIGNhbGwgYHV0YygpYCB3aXRoIG5vIGFyZ3VtZW50cyksIHRoZSBjdXJyZW50IHRpbWUgd2lsbCBiZSB1c2VkCiAgICAgICAqIEBwYXJhbSB7bnVtYmVyfSBbbW9udGg9MV0gLSBUaGUgbW9udGgsIDEtaW5kZXhlZAogICAgICAgKiBAcGFyYW0ge251bWJlcn0gW2RheT0xXSAtIFRoZSBkYXkgb2YgdGhlIG1vbnRoCiAgICAgICAqIEBwYXJhbSB7bnVtYmVyfSBbaG91cj0wXSAtIFRoZSBob3VyIG9mIHRoZSBkYXksIGluIDI0LWhvdXIgdGltZQogICAgICAgKiBAcGFyYW0ge251bWJlcn0gW21pbnV0ZT0wXSAtIFRoZSBtaW51dGUgb2YgdGhlIGhvdXIsIG1lYW5pbmcgYSBudW1iZXIgYmV0d2VlbiAwIGFuZCA1OQogICAgICAgKiBAcGFyYW0ge251bWJlcn0gW3NlY29uZD0wXSAtIFRoZSBzZWNvbmQgb2YgdGhlIG1pbnV0ZSwgbWVhbmluZyBhIG51bWJlciBiZXR3ZWVuIDAgYW5kIDU5CiAgICAgICAqIEBwYXJhbSB7bnVtYmVyfSBbbWlsbGlzZWNvbmQ9MF0gLSBUaGUgbWlsbGlzZWNvbmQgb2YgdGhlIHNlY29uZCwgbWVhbmluZyBhIG51bWJlciBiZXR3ZWVuIDAgYW5kIDk5OQogICAgICAgKiBAZXhhbXBsZSBEYXRlVGltZS51dGMoKSAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL34+IG5vdwogICAgICAgKiBAZXhhbXBsZSBEYXRlVGltZS51dGMoMjAxNykgICAgICAgICAgICAgICAgICAgICAgICAvL34+IDIwMTctMDEtMDFUMDA6MDA6MDBaCiAgICAgICAqIEBleGFtcGxlIERhdGVUaW1lLnV0YygyMDE3LCAzKSAgICAgICAgICAgICAgICAgICAgIC8vfj4gMjAxNy0wMy0wMVQwMDowMDowMFoKICAgICAgICogQGV4YW1wbGUgRGF0ZVRpbWUudXRjKDIwMTcsIDMsIDEyKSAgICAgICAgICAgICAgICAgLy9+PiAyMDE3LTAzLTEyVDAwOjAwOjAwWgogICAgICAgKiBAZXhhbXBsZSBEYXRlVGltZS51dGMoMjAxNywgMywgMTIsIDUpICAgICAgICAgICAgICAvL34+IDIwMTctMDMtMTJUMDU6MDA6MDBaCiAgICAgICAqIEBleGFtcGxlIERhdGVUaW1lLnV0YygyMDE3LCAzLCAxMiwgNSwgNDUpICAgICAgICAgIC8vfj4gMjAxNy0wMy0xMlQwNTo0NTowMFoKICAgICAgICogQGV4YW1wbGUgRGF0ZVRpbWUudXRjKDIwMTcsIDMsIDEyLCA1LCA0NSwgMTApICAgICAgLy9+PiAyMDE3LTAzLTEyVDA1OjQ1OjEwWgogICAgICAgKiBAZXhhbXBsZSBEYXRlVGltZS51dGMoMjAxNywgMywgMTIsIDUsIDQ1LCAxMCwgNzY1KSAvL34+IDIwMTctMDMtMTJUMDU6NDU6MTAuNzY1WgogICAgICAgKiBAcmV0dXJuIHtEYXRlVGltZX0KICAgICAgICovCiAgICAgIDsKCiAgICAgIERhdGVUaW1lLnV0YyA9IGZ1bmN0aW9uIHV0Yyh5ZWFyLCBtb250aCwgZGF5LCBob3VyLCBtaW51dGUsIHNlY29uZCwgbWlsbGlzZWNvbmQpIHsKICAgICAgICBpZiAoaXNVbmRlZmluZWQoeWVhcikpIHsKICAgICAgICAgIHJldHVybiBuZXcgRGF0ZVRpbWUoewogICAgICAgICAgICB0czogU2V0dGluZ3Mubm93KCksCiAgICAgICAgICAgIHpvbmU6IEZpeGVkT2Zmc2V0Wm9uZS51dGNJbnN0YW5jZQogICAgICAgICAgfSk7CiAgICAgICAgfSBlbHNlIHsKICAgICAgICAgIHJldHVybiBxdWlja0RUKHsKICAgICAgICAgICAgeWVhcjogeWVhciwKICAgICAgICAgICAgbW9udGg6IG1vbnRoLAogICAgICAgICAgICBkYXk6IGRheSwKICAgICAgICAgICAgaG91cjogaG91ciwKICAgICAgICAgICAgbWludXRlOiBtaW51dGUsCiAgICAgICAgICAgIHNlY29uZDogc2Vjb25kLAogICAgICAgICAgICBtaWxsaXNlY29uZDogbWlsbGlzZWNvbmQKICAgICAgICAgIH0sIEZpeGVkT2Zmc2V0Wm9uZS51dGNJbnN0YW5jZSk7CiAgICAgICAgfQogICAgICB9CiAgICAgIC8qKgogICAgICAgKiBDcmVhdGUgYSBEYXRlVGltZSBmcm9tIGEgSmF2YVNjcmlwdCBEYXRlIG9iamVjdC4gVXNlcyB0aGUgZGVmYXVsdCB6b25lLgogICAgICAgKiBAcGFyYW0ge0RhdGV9IGRhdGUgLSBhIEphdmFTY3JpcHQgRGF0ZSBvYmplY3QKICAgICAgICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnMgLSBjb25maWd1cmF0aW9uIG9wdGlvbnMgZm9yIHRoZSBEYXRlVGltZQogICAgICAgKiBAcGFyYW0ge3N0cmluZ3xab25lfSBbb3B0aW9ucy56b25lPSdsb2NhbCddIC0gdGhlIHpvbmUgdG8gcGxhY2UgdGhlIERhdGVUaW1lIGludG8KICAgICAgICogQHJldHVybiB7RGF0ZVRpbWV9CiAgICAgICAqLwogICAgICA7CgogICAgICBEYXRlVGltZS5mcm9tSlNEYXRlID0gZnVuY3Rpb24gZnJvbUpTRGF0ZShkYXRlLCBvcHRpb25zKSB7CiAgICAgICAgaWYgKG9wdGlvbnMgPT09IHZvaWQgMCkgewogICAgICAgICAgb3B0aW9ucyA9IHt9OwogICAgICAgIH0KCiAgICAgICAgdmFyIHRzID0gaXNEYXRlKGRhdGUpID8gZGF0ZS52YWx1ZU9mKCkgOiBOYU47CgogICAgICAgIGlmIChOdW1iZXIuaXNOYU4odHMpKSB7CiAgICAgICAgICByZXR1cm4gRGF0ZVRpbWUuaW52YWxpZCgiaW52YWxpZCBpbnB1dCIpOwogICAgICAgIH0KCiAgICAgICAgdmFyIHpvbmVUb1VzZSA9IG5vcm1hbGl6ZVpvbmUob3B0aW9ucy56b25lLCBTZXR0aW5ncy5kZWZhdWx0Wm9uZSk7CgogICAgICAgIGlmICghem9uZVRvVXNlLmlzVmFsaWQpIHsKICAgICAgICAgIHJldHVybiBEYXRlVGltZS5pbnZhbGlkKHVuc3VwcG9ydGVkWm9uZSh6b25lVG9Vc2UpKTsKICAgICAgICB9CgogICAgICAgIHJldHVybiBuZXcgRGF0ZVRpbWUoewogICAgICAgICAgdHM6IHRzLAogICAgICAgICAgem9uZTogem9uZVRvVXNlLAogICAgICAgICAgbG9jOiBMb2NhbGUuZnJvbU9iamVjdChvcHRpb25zKQogICAgICAgIH0pOwogICAgICB9CiAgICAgIC8qKgogICAgICAgKiBDcmVhdGUgYSBEYXRlVGltZSBmcm9tIGEgbnVtYmVyIG9mIG1pbGxpc2Vjb25kcyBzaW5jZSB0aGUgZXBvY2ggKG1lYW5pbmcgc2luY2UgMSBKYW51YXJ5IDE5NzAgMDA6MDA6MDAgVVRDKS4gVXNlcyB0aGUgZGVmYXVsdCB6b25lLgogICAgICAgKiBAcGFyYW0ge251bWJlcn0gbWlsbGlzZWNvbmRzIC0gYSBudW1iZXIgb2YgbWlsbGlzZWNvbmRzIHNpbmNlIDE5NzAgVVRDCiAgICAgICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zIC0gY29uZmlndXJhdGlvbiBvcHRpb25zIGZvciB0aGUgRGF0ZVRpbWUKICAgICAgICogQHBhcmFtIHtzdHJpbmd8Wm9uZX0gW29wdGlvbnMuem9uZT0nbG9jYWwnXSAtIHRoZSB6b25lIHRvIHBsYWNlIHRoZSBEYXRlVGltZSBpbnRvCiAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBbb3B0aW9ucy5sb2NhbGVdIC0gYSBsb2NhbGUgdG8gc2V0IG9uIHRoZSByZXN1bHRpbmcgRGF0ZVRpbWUgaW5zdGFuY2UKICAgICAgICogQHBhcmFtIHtzdHJpbmd9IG9wdGlvbnMub3V0cHV0Q2FsZW5kYXIgLSB0aGUgb3V0cHV0IGNhbGVuZGFyIHRvIHNldCBvbiB0aGUgcmVzdWx0aW5nIERhdGVUaW1lIGluc3RhbmNlCiAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBvcHRpb25zLm51bWJlcmluZ1N5c3RlbSAtIHRoZSBudW1iZXJpbmcgc3lzdGVtIHRvIHNldCBvbiB0aGUgcmVzdWx0aW5nIERhdGVUaW1lIGluc3RhbmNlCiAgICAgICAqIEByZXR1cm4ge0RhdGVUaW1lfQogICAgICAgKi8KICAgICAgOwoKICAgICAgRGF0ZVRpbWUuZnJvbU1pbGxpcyA9IGZ1bmN0aW9uIGZyb21NaWxsaXMobWlsbGlzZWNvbmRzLCBvcHRpb25zKSB7CiAgICAgICAgaWYgKG9wdGlvbnMgPT09IHZvaWQgMCkgewogICAgICAgICAgb3B0aW9ucyA9IHt9OwogICAgICAgIH0KCiAgICAgICAgaWYgKCFpc051bWJlcihtaWxsaXNlY29uZHMpKSB7CiAgICAgICAgICB0aHJvdyBuZXcgSW52YWxpZEFyZ3VtZW50RXJyb3IoImZyb21NaWxsaXMgcmVxdWlyZXMgYSBudW1lcmljYWwgaW5wdXQsIGJ1dCByZWNlaXZlZCBhICIgKyB0eXBlb2YgbWlsbGlzZWNvbmRzICsgIiB3aXRoIHZhbHVlICIgKyBtaWxsaXNlY29uZHMpOwogICAgICAgIH0gZWxzZSBpZiAobWlsbGlzZWNvbmRzIDwgLU1BWF9EQVRFIHx8IG1pbGxpc2Vjb25kcyA+IE1BWF9EQVRFKSB7CiAgICAgICAgICAvLyB0aGlzIGlzbid0IHBlcmZlY3QgYmVjYXVzZSBiZWNhdXNlIHdlIGNhbiBzdGlsbCBlbmQgdXAgb3V0IG9mIHJhbmdlIGJlY2F1c2Ugb2YgYWRkaXRpb25hbCBzaGlmdGluZywgYnV0IGl0J3MgYSBzdGFydAogICAgICAgICAgcmV0dXJuIERhdGVUaW1lLmludmFsaWQoIlRpbWVzdGFtcCBvdXQgb2YgcmFuZ2UiKTsKICAgICAgICB9IGVsc2UgewogICAgICAgICAgcmV0dXJuIG5ldyBEYXRlVGltZSh7CiAgICAgICAgICAgIHRzOiBtaWxsaXNlY29uZHMsCiAgICAgICAgICAgIHpvbmU6IG5vcm1hbGl6ZVpvbmUob3B0aW9ucy56b25lLCBTZXR0aW5ncy5kZWZhdWx0Wm9uZSksCiAgICAgICAgICAgIGxvYzogTG9jYWxlLmZyb21PYmplY3Qob3B0aW9ucykKICAgICAgICAgIH0pOwogICAgICAgIH0KICAgICAgfQogICAgICAvKioKICAgICAgICogQ3JlYXRlIGEgRGF0ZVRpbWUgZnJvbSBhIG51bWJlciBvZiBzZWNvbmRzIHNpbmNlIHRoZSBlcG9jaCAobWVhbmluZyBzaW5jZSAxIEphbnVhcnkgMTk3MCAwMDowMDowMCBVVEMpLiBVc2VzIHRoZSBkZWZhdWx0IHpvbmUuCiAgICAgICAqIEBwYXJhbSB7bnVtYmVyfSBzZWNvbmRzIC0gYSBudW1iZXIgb2Ygc2Vjb25kcyBzaW5jZSAxOTcwIFVUQwogICAgICAgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9ucyAtIGNvbmZpZ3VyYXRpb24gb3B0aW9ucyBmb3IgdGhlIERhdGVUaW1lCiAgICAgICAqIEBwYXJhbSB7c3RyaW5nfFpvbmV9IFtvcHRpb25zLnpvbmU9J2xvY2FsJ10gLSB0aGUgem9uZSB0byBwbGFjZSB0aGUgRGF0ZVRpbWUgaW50bwogICAgICAgKiBAcGFyYW0ge3N0cmluZ30gW29wdGlvbnMubG9jYWxlXSAtIGEgbG9jYWxlIHRvIHNldCBvbiB0aGUgcmVzdWx0aW5nIERhdGVUaW1lIGluc3RhbmNlCiAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBvcHRpb25zLm91dHB1dENhbGVuZGFyIC0gdGhlIG91dHB1dCBjYWxlbmRhciB0byBzZXQgb24gdGhlIHJlc3VsdGluZyBEYXRlVGltZSBpbnN0YW5jZQogICAgICAgKiBAcGFyYW0ge3N0cmluZ30gb3B0aW9ucy5udW1iZXJpbmdTeXN0ZW0gLSB0aGUgbnVtYmVyaW5nIHN5c3RlbSB0byBzZXQgb24gdGhlIHJlc3VsdGluZyBEYXRlVGltZSBpbnN0YW5jZQogICAgICAgKiBAcmV0dXJuIHtEYXRlVGltZX0KICAgICAgICovCiAgICAgIDsKCiAgICAgIERhdGVUaW1lLmZyb21TZWNvbmRzID0gZnVuY3Rpb24gZnJvbVNlY29uZHMoc2Vjb25kcywgb3B0aW9ucykgewogICAgICAgIGlmIChvcHRpb25zID09PSB2b2lkIDApIHsKICAgICAgICAgIG9wdGlvbnMgPSB7fTsKICAgICAgICB9CgogICAgICAgIGlmICghaXNOdW1iZXIoc2Vjb25kcykpIHsKICAgICAgICAgIHRocm93IG5ldyBJbnZhbGlkQXJndW1lbnRFcnJvcigiZnJvbVNlY29uZHMgcmVxdWlyZXMgYSBudW1lcmljYWwgaW5wdXQiKTsKICAgICAgICB9IGVsc2UgewogICAgICAgICAgcmV0dXJuIG5ldyBEYXRlVGltZSh7CiAgICAgICAgICAgIHRzOiBzZWNvbmRzICogMTAwMCwKICAgICAgICAgICAgem9uZTogbm9ybWFsaXplWm9uZShvcHRpb25zLnpvbmUsIFNldHRpbmdzLmRlZmF1bHRab25lKSwKICAgICAgICAgICAgbG9jOiBMb2NhbGUuZnJvbU9iamVjdChvcHRpb25zKQogICAgICAgICAgfSk7CiAgICAgICAgfQogICAgICB9CiAgICAgIC8qKgogICAgICAgKiBDcmVhdGUgYSBEYXRlVGltZSBmcm9tIGEgSmF2YVNjcmlwdCBvYmplY3Qgd2l0aCBrZXlzIGxpa2UgJ3llYXInIGFuZCAnaG91cicgd2l0aCByZWFzb25hYmxlIGRlZmF1bHRzLgogICAgICAgKiBAcGFyYW0ge09iamVjdH0gb2JqIC0gdGhlIG9iamVjdCB0byBjcmVhdGUgdGhlIERhdGVUaW1lIGZyb20KICAgICAgICogQHBhcmFtIHtudW1iZXJ9IG9iai55ZWFyIC0gYSB5ZWFyLCBzdWNoIGFzIDE5ODcKICAgICAgICogQHBhcmFtIHtudW1iZXJ9IG9iai5tb250aCAtIGEgbW9udGgsIDEtMTIKICAgICAgICogQHBhcmFtIHtudW1iZXJ9IG9iai5kYXkgLSBhIGRheSBvZiB0aGUgbW9udGgsIDEtMzEsIGRlcGVuZGluZyBvbiB0aGUgbW9udGgKICAgICAgICogQHBhcmFtIHtudW1iZXJ9IG9iai5vcmRpbmFsIC0gZGF5IG9mIHRoZSB5ZWFyLCAxLTM2NSBvciAzNjYKICAgICAgICogQHBhcmFtIHtudW1iZXJ9IG9iai53ZWVrWWVhciAtIGFuIElTTyB3ZWVrIHllYXIKICAgICAgICogQHBhcmFtIHtudW1iZXJ9IG9iai53ZWVrTnVtYmVyIC0gYW4gSVNPIHdlZWsgbnVtYmVyLCBiZXR3ZWVuIDEgYW5kIDUyIG9yIDUzLCBkZXBlbmRpbmcgb24gdGhlIHllYXIKICAgICAgICogQHBhcmFtIHtudW1iZXJ9IG9iai53ZWVrZGF5IC0gYW4gSVNPIHdlZWtkYXksIDEtNywgd2hlcmUgMSBpcyBNb25kYXkgYW5kIDcgaXMgU3VuZGF5CiAgICAgICAqIEBwYXJhbSB7bnVtYmVyfSBvYmouaG91ciAtIGhvdXIgb2YgdGhlIGRheSwgMC0yMwogICAgICAgKiBAcGFyYW0ge251bWJlcn0gb2JqLm1pbnV0ZSAtIG1pbnV0ZSBvZiB0aGUgaG91ciwgMC01OQogICAgICAgKiBAcGFyYW0ge251bWJlcn0gb2JqLnNlY29uZCAtIHNlY29uZCBvZiB0aGUgbWludXRlLCAwLTU5CiAgICAgICAqIEBwYXJhbSB7bnVtYmVyfSBvYmoubWlsbGlzZWNvbmQgLSBtaWxsaXNlY29uZCBvZiB0aGUgc2Vjb25kLCAwLTk5OQogICAgICAgKiBAcGFyYW0ge3N0cmluZ3xab25lfSBbb2JqLnpvbmU9J2xvY2FsJ10gLSBpbnRlcnByZXQgdGhlIG51bWJlcnMgaW4gdGhlIGNvbnRleHQgb2YgYSBwYXJ0aWN1bGFyIHpvbmUuIENhbiB0YWtlIGFueSB2YWx1ZSB0YWtlbiBhcyB0aGUgZmlyc3QgYXJndW1lbnQgdG8gc2V0Wm9uZSgpCiAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBbb2JqLmxvY2FsZT0nc3lzdGVtJ3MgbG9jYWxlJ10gLSBhIGxvY2FsZSB0byBzZXQgb24gdGhlIHJlc3VsdGluZyBEYXRlVGltZSBpbnN0YW5jZQogICAgICAgKiBAcGFyYW0ge3N0cmluZ30gb2JqLm91dHB1dENhbGVuZGFyIC0gdGhlIG91dHB1dCBjYWxlbmRhciB0byBzZXQgb24gdGhlIHJlc3VsdGluZyBEYXRlVGltZSBpbnN0YW5jZQogICAgICAgKiBAcGFyYW0ge3N0cmluZ30gb2JqLm51bWJlcmluZ1N5c3RlbSAtIHRoZSBudW1iZXJpbmcgc3lzdGVtIHRvIHNldCBvbiB0aGUgcmVzdWx0aW5nIERhdGVUaW1lIGluc3RhbmNlCiAgICAgICAqIEBleGFtcGxlIERhdGVUaW1lLmZyb21PYmplY3QoeyB5ZWFyOiAxOTgyLCBtb250aDogNSwgZGF5OiAyNX0pLnRvSVNPRGF0ZSgpIC8vPT4gJzE5ODItMDUtMjUnCiAgICAgICAqIEBleGFtcGxlIERhdGVUaW1lLmZyb21PYmplY3QoeyB5ZWFyOiAxOTgyIH0pLnRvSVNPRGF0ZSgpIC8vPT4gJzE5ODItMDEtMDEnCiAgICAgICAqIEBleGFtcGxlIERhdGVUaW1lLmZyb21PYmplY3QoeyBob3VyOiAxMCwgbWludXRlOiAyNiwgc2Vjb25kOiA2IH0pIC8vfj4gdG9kYXkgYXQgMTA6MjY6MDYKICAgICAgICogQGV4YW1wbGUgRGF0ZVRpbWUuZnJvbU9iamVjdCh7IGhvdXI6IDEwLCBtaW51dGU6IDI2LCBzZWNvbmQ6IDYsIHpvbmU6ICd1dGMnIH0pLAogICAgICAgKiBAZXhhbXBsZSBEYXRlVGltZS5mcm9tT2JqZWN0KHsgaG91cjogMTAsIG1pbnV0ZTogMjYsIHNlY29uZDogNiwgem9uZTogJ2xvY2FsJyB9KQogICAgICAgKiBAZXhhbXBsZSBEYXRlVGltZS5mcm9tT2JqZWN0KHsgaG91cjogMTAsIG1pbnV0ZTogMjYsIHNlY29uZDogNiwgem9uZTogJ0FtZXJpY2EvTmV3X1lvcmsnIH0pCiAgICAgICAqIEBleGFtcGxlIERhdGVUaW1lLmZyb21PYmplY3QoeyB3ZWVrWWVhcjogMjAxNiwgd2Vla051bWJlcjogMiwgd2Vla2RheTogMyB9KS50b0lTT0RhdGUoKSAvLz0+ICcyMDE2LTAxLTEzJwogICAgICAgKiBAcmV0dXJuIHtEYXRlVGltZX0KICAgICAgICovCiAgICAgIDsKCiAgICAgIERhdGVUaW1lLmZyb21PYmplY3QgPSBmdW5jdGlvbiBmcm9tT2JqZWN0KG9iaikgewogICAgICAgIHZhciB6b25lVG9Vc2UgPSBub3JtYWxpemVab25lKG9iai56b25lLCBTZXR0aW5ncy5kZWZhdWx0Wm9uZSk7CgogICAgICAgIGlmICghem9uZVRvVXNlLmlzVmFsaWQpIHsKICAgICAgICAgIHJldHVybiBEYXRlVGltZS5pbnZhbGlkKHVuc3VwcG9ydGVkWm9uZSh6b25lVG9Vc2UpKTsKICAgICAgICB9CgogICAgICAgIHZhciB0c05vdyA9IFNldHRpbmdzLm5vdygpLAogICAgICAgICAgICBvZmZzZXRQcm92aXMgPSB6b25lVG9Vc2Uub2Zmc2V0KHRzTm93KSwKICAgICAgICAgICAgbm9ybWFsaXplZCA9IG5vcm1hbGl6ZU9iamVjdChvYmosIG5vcm1hbGl6ZVVuaXQsIFsiem9uZSIsICJsb2NhbGUiLCAib3V0cHV0Q2FsZW5kYXIiLCAibnVtYmVyaW5nU3lzdGVtIl0pLAogICAgICAgICAgICBjb250YWluc09yZGluYWwgPSAhaXNVbmRlZmluZWQobm9ybWFsaXplZC5vcmRpbmFsKSwKICAgICAgICAgICAgY29udGFpbnNHcmVnb3JZZWFyID0gIWlzVW5kZWZpbmVkKG5vcm1hbGl6ZWQueWVhciksCiAgICAgICAgICAgIGNvbnRhaW5zR3JlZ29yTUQgPSAhaXNVbmRlZmluZWQobm9ybWFsaXplZC5tb250aCkgfHwgIWlzVW5kZWZpbmVkKG5vcm1hbGl6ZWQuZGF5KSwKICAgICAgICAgICAgY29udGFpbnNHcmVnb3IgPSBjb250YWluc0dyZWdvclllYXIgfHwgY29udGFpbnNHcmVnb3JNRCwKICAgICAgICAgICAgZGVmaW5pdGVXZWVrRGVmID0gbm9ybWFsaXplZC53ZWVrWWVhciB8fCBub3JtYWxpemVkLndlZWtOdW1iZXIsCiAgICAgICAgICAgIGxvYyA9IExvY2FsZS5mcm9tT2JqZWN0KG9iaik7IC8vIGNhc2VzOgogICAgICAgIC8vIGp1c3QgYSB3ZWVrZGF5IC0+IHRoaXMgd2VlaydzIGluc3RhbmNlIG9mIHRoYXQgd2Vla2RheSwgbm8gd29ycmllcwogICAgICAgIC8vIChncmVnb3JpYW4gZGF0YSBvciBvcmRpbmFsKSArICh3ZWVrWWVhciBvciB3ZWVrTnVtYmVyKSAtPiBlcnJvcgogICAgICAgIC8vIChncmVnb3JpYW4gbW9udGggb3IgZGF5KSArIG9yZGluYWwgLT4gZXJyb3IKICAgICAgICAvLyBvdGhlcndpc2UganVzdCB1c2Ugd2Vla3Mgb3Igb3JkaW5hbHMgb3IgZ3JlZ29yaWFuLCBkZXBlbmRpbmcgb24gd2hhdCdzIHNwZWNpZmllZAoKICAgICAgICBpZiAoKGNvbnRhaW5zR3JlZ29yIHx8IGNvbnRhaW5zT3JkaW5hbCkgJiYgZGVmaW5pdGVXZWVrRGVmKSB7CiAgICAgICAgICB0aHJvdyBuZXcgQ29uZmxpY3RpbmdTcGVjaWZpY2F0aW9uRXJyb3IoIkNhbid0IG1peCB3ZWVrWWVhci93ZWVrTnVtYmVyIHVuaXRzIHdpdGggeWVhci9tb250aC9kYXkgb3Igb3JkaW5hbHMiKTsKICAgICAgICB9CgogICAgICAgIGlmIChjb250YWluc0dyZWdvck1EICYmIGNvbnRhaW5zT3JkaW5hbCkgewogICAgICAgICAgdGhyb3cgbmV3IENvbmZsaWN0aW5nU3BlY2lmaWNhdGlvbkVycm9yKCJDYW4ndCBtaXggb3JkaW5hbCBkYXRlcyB3aXRoIG1vbnRoL2RheSIpOwogICAgICAgIH0KCiAgICAgICAgdmFyIHVzZVdlZWtEYXRhID0gZGVmaW5pdGVXZWVrRGVmIHx8IG5vcm1hbGl6ZWQud2Vla2RheSAmJiAhY29udGFpbnNHcmVnb3I7IC8vIGNvbmZpZ3VyZSBvdXJzZWx2ZXMgdG8gZGVhbCB3aXRoIGdyZWdvcmlhbiBkYXRlcyBvciB3ZWVrIHN0dWZmCgogICAgICAgIHZhciB1bml0cywKICAgICAgICAgICAgZGVmYXVsdFZhbHVlcywKICAgICAgICAgICAgb2JqTm93ID0gdHNUb09iaih0c05vdywgb2Zmc2V0UHJvdmlzKTsKCiAgICAgICAgaWYgKHVzZVdlZWtEYXRhKSB7CiAgICAgICAgICB1bml0cyA9IG9yZGVyZWRXZWVrVW5pdHM7CiAgICAgICAgICBkZWZhdWx0VmFsdWVzID0gZGVmYXVsdFdlZWtVbml0VmFsdWVzOwogICAgICAgICAgb2JqTm93ID0gZ3JlZ29yaWFuVG9XZWVrKG9iak5vdyk7CiAgICAgICAgfSBlbHNlIGlmIChjb250YWluc09yZGluYWwpIHsKICAgICAgICAgIHVuaXRzID0gb3JkZXJlZE9yZGluYWxVbml0czsKICAgICAgICAgIGRlZmF1bHRWYWx1ZXMgPSBkZWZhdWx0T3JkaW5hbFVuaXRWYWx1ZXM7CiAgICAgICAgICBvYmpOb3cgPSBncmVnb3JpYW5Ub09yZGluYWwob2JqTm93KTsKICAgICAgICB9IGVsc2UgewogICAgICAgICAgdW5pdHMgPSBvcmRlcmVkVW5pdHMkMTsKICAgICAgICAgIGRlZmF1bHRWYWx1ZXMgPSBkZWZhdWx0VW5pdFZhbHVlczsKICAgICAgICB9IC8vIHNldCBkZWZhdWx0IHZhbHVlcyBmb3IgbWlzc2luZyBzdHVmZgoKCiAgICAgICAgdmFyIGZvdW5kRmlyc3QgPSBmYWxzZTsKCiAgICAgICAgZm9yICh2YXIgX2l0ZXJhdG9yMyA9IF9jcmVhdGVGb3JPZkl0ZXJhdG9ySGVscGVyTG9vc2UodW5pdHMpLCBfc3RlcDM7ICEoX3N0ZXAzID0gX2l0ZXJhdG9yMygpKS5kb25lOykgewogICAgICAgICAgdmFyIHUgPSBfc3RlcDMudmFsdWU7CiAgICAgICAgICB2YXIgdiA9IG5vcm1hbGl6ZWRbdV07CgogICAgICAgICAgaWYgKCFpc1VuZGVmaW5lZCh2KSkgewogICAgICAgICAgICBmb3VuZEZpcnN0ID0gdHJ1ZTsKICAgICAgICAgIH0gZWxzZSBpZiAoZm91bmRGaXJzdCkgewogICAgICAgICAgICBub3JtYWxpemVkW3VdID0gZGVmYXVsdFZhbHVlc1t1XTsKICAgICAgICAgIH0gZWxzZSB7CiAgICAgICAgICAgIG5vcm1hbGl6ZWRbdV0gPSBvYmpOb3dbdV07CiAgICAgICAgICB9CiAgICAgICAgfSAvLyBtYWtlIHN1cmUgdGhlIHZhbHVlcyB3ZSBoYXZlIGFyZSBpbiByYW5nZQoKCiAgICAgICAgdmFyIGhpZ2hlck9yZGVySW52YWxpZCA9IHVzZVdlZWtEYXRhID8gaGFzSW52YWxpZFdlZWtEYXRhKG5vcm1hbGl6ZWQpIDogY29udGFpbnNPcmRpbmFsID8gaGFzSW52YWxpZE9yZGluYWxEYXRhKG5vcm1hbGl6ZWQpIDogaGFzSW52YWxpZEdyZWdvcmlhbkRhdGEobm9ybWFsaXplZCksCiAgICAgICAgICAgIGludmFsaWQgPSBoaWdoZXJPcmRlckludmFsaWQgfHwgaGFzSW52YWxpZFRpbWVEYXRhKG5vcm1hbGl6ZWQpOwoKICAgICAgICBpZiAoaW52YWxpZCkgewogICAgICAgICAgcmV0dXJuIERhdGVUaW1lLmludmFsaWQoaW52YWxpZCk7CiAgICAgICAgfSAvLyBjb21wdXRlIHRoZSBhY3R1YWwgdGltZQoKCiAgICAgICAgdmFyIGdyZWdvcmlhbiA9IHVzZVdlZWtEYXRhID8gd2Vla1RvR3JlZ29yaWFuKG5vcm1hbGl6ZWQpIDogY29udGFpbnNPcmRpbmFsID8gb3JkaW5hbFRvR3JlZ29yaWFuKG5vcm1hbGl6ZWQpIDogbm9ybWFsaXplZCwKICAgICAgICAgICAgX29ialRvVFMyID0gb2JqVG9UUyhncmVnb3JpYW4sIG9mZnNldFByb3Zpcywgem9uZVRvVXNlKSwKICAgICAgICAgICAgdHNGaW5hbCA9IF9vYmpUb1RTMlswXSwKICAgICAgICAgICAgb2Zmc2V0RmluYWwgPSBfb2JqVG9UUzJbMV0sCiAgICAgICAgICAgIGluc3QgPSBuZXcgRGF0ZVRpbWUoewogICAgICAgICAgdHM6IHRzRmluYWwsCiAgICAgICAgICB6b25lOiB6b25lVG9Vc2UsCiAgICAgICAgICBvOiBvZmZzZXRGaW5hbCwKICAgICAgICAgIGxvYzogbG9jCiAgICAgICAgfSk7IC8vIGdyZWdvcmlhbiBkYXRhICsgd2Vla2RheSBzZXJ2ZXMgb25seSB0byB2YWxpZGF0ZQoKCiAgICAgICAgaWYgKG5vcm1hbGl6ZWQud2Vla2RheSAmJiBjb250YWluc0dyZWdvciAmJiBvYmoud2Vla2RheSAhPT0gaW5zdC53ZWVrZGF5KSB7CiAgICAgICAgICByZXR1cm4gRGF0ZVRpbWUuaW52YWxpZCgibWlzbWF0Y2hlZCB3ZWVrZGF5IiwgInlvdSBjYW4ndCBzcGVjaWZ5IGJvdGggYSB3ZWVrZGF5IG9mICIgKyBub3JtYWxpemVkLndlZWtkYXkgKyAiIGFuZCBhIGRhdGUgb2YgIiArIGluc3QudG9JU08oKSk7CiAgICAgICAgfQoKICAgICAgICByZXR1cm4gaW5zdDsKICAgICAgfQogICAgICAvKioKICAgICAgICogQ3JlYXRlIGEgRGF0ZVRpbWUgZnJvbSBhbiBJU08gODYwMSBzdHJpbmcKICAgICAgICogQHBhcmFtIHtzdHJpbmd9IHRleHQgLSB0aGUgSVNPIHN0cmluZwogICAgICAgKiBAcGFyYW0ge09iamVjdH0gb3B0cyAtIG9wdGlvbnMgdG8gYWZmZWN0IHRoZSBjcmVhdGlvbgogICAgICAgKiBAcGFyYW0ge3N0cmluZ3xab25lfSBbb3B0cy56b25lPSdsb2NhbCddIC0gdXNlIHRoaXMgem9uZSBpZiBubyBvZmZzZXQgaXMgc3BlY2lmaWVkIGluIHRoZSBpbnB1dCBzdHJpbmcgaXRzZWxmLiBXaWxsIGFsc28gY29udmVydCB0aGUgdGltZSB0byB0aGlzIHpvbmUKICAgICAgICogQHBhcmFtIHtib29sZWFufSBbb3B0cy5zZXRab25lPWZhbHNlXSAtIG92ZXJyaWRlIHRoZSB6b25lIHdpdGggYSBmaXhlZC1vZmZzZXQgem9uZSBzcGVjaWZpZWQgaW4gdGhlIHN0cmluZyBpdHNlbGYsIGlmIGl0IHNwZWNpZmllcyBvbmUKICAgICAgICogQHBhcmFtIHtzdHJpbmd9IFtvcHRzLmxvY2FsZT0nc3lzdGVtJ3MgbG9jYWxlJ10gLSBhIGxvY2FsZSB0byBzZXQgb24gdGhlIHJlc3VsdGluZyBEYXRlVGltZSBpbnN0YW5jZQogICAgICAgKiBAcGFyYW0ge3N0cmluZ30gW29wdHMub3V0cHV0Q2FsZW5kYXJdIC0gdGhlIG91dHB1dCBjYWxlbmRhciB0byBzZXQgb24gdGhlIHJlc3VsdGluZyBEYXRlVGltZSBpbnN0YW5jZQogICAgICAgKiBAcGFyYW0ge3N0cmluZ30gW29wdHMubnVtYmVyaW5nU3lzdGVtXSAtIHRoZSBudW1iZXJpbmcgc3lzdGVtIHRvIHNldCBvbiB0aGUgcmVzdWx0aW5nIERhdGVUaW1lIGluc3RhbmNlCiAgICAgICAqIEBleGFtcGxlIERhdGVUaW1lLmZyb21JU08oJzIwMTYtMDUtMjVUMDk6MDg6MzQuMTIzJykKICAgICAgICogQGV4YW1wbGUgRGF0ZVRpbWUuZnJvbUlTTygnMjAxNi0wNS0yNVQwOTowODozNC4xMjMrMDY6MDAnKQogICAgICAgKiBAZXhhbXBsZSBEYXRlVGltZS5mcm9tSVNPKCcyMDE2LTA1LTI1VDA5OjA4OjM0LjEyMyswNjowMCcsIHtzZXRab25lOiB0cnVlfSkKICAgICAgICogQGV4YW1wbGUgRGF0ZVRpbWUuZnJvbUlTTygnMjAxNi0wNS0yNVQwOTowODozNC4xMjMnLCB7em9uZTogJ3V0Yyd9KQogICAgICAgKiBAZXhhbXBsZSBEYXRlVGltZS5mcm9tSVNPKCcyMDE2LVcwNS00JykKICAgICAgICogQHJldHVybiB7RGF0ZVRpbWV9CiAgICAgICAqLwogICAgICA7CgogICAgICBEYXRlVGltZS5mcm9tSVNPID0gZnVuY3Rpb24gZnJvbUlTTyh0ZXh0LCBvcHRzKSB7CiAgICAgICAgaWYgKG9wdHMgPT09IHZvaWQgMCkgewogICAgICAgICAgb3B0cyA9IHt9OwogICAgICAgIH0KCiAgICAgICAgdmFyIF9wYXJzZUlTT0RhdGUgPSBwYXJzZUlTT0RhdGUodGV4dCksCiAgICAgICAgICAgIHZhbHMgPSBfcGFyc2VJU09EYXRlWzBdLAogICAgICAgICAgICBwYXJzZWRab25lID0gX3BhcnNlSVNPRGF0ZVsxXTsKCiAgICAgICAgcmV0dXJuIHBhcnNlRGF0YVRvRGF0ZVRpbWUodmFscywgcGFyc2VkWm9uZSwgb3B0cywgIklTTyA4NjAxIiwgdGV4dCk7CiAgICAgIH0KICAgICAgLyoqCiAgICAgICAqIENyZWF0ZSBhIERhdGVUaW1lIGZyb20gYW4gUkZDIDI4MjIgc3RyaW5nCiAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSB0ZXh0IC0gdGhlIFJGQyAyODIyIHN0cmluZwogICAgICAgKiBAcGFyYW0ge09iamVjdH0gb3B0cyAtIG9wdGlvbnMgdG8gYWZmZWN0IHRoZSBjcmVhdGlvbgogICAgICAgKiBAcGFyYW0ge3N0cmluZ3xab25lfSBbb3B0cy56b25lPSdsb2NhbCddIC0gY29udmVydCB0aGUgdGltZSB0byB0aGlzIHpvbmUuIFNpbmNlIHRoZSBvZmZzZXQgaXMgYWx3YXlzIHNwZWNpZmllZCBpbiB0aGUgc3RyaW5nIGl0c2VsZiwgdGhpcyBoYXMgbm8gZWZmZWN0IG9uIHRoZSBpbnRlcnByZXRhdGlvbiBvZiBzdHJpbmcsIG1lcmVseSB0aGUgem9uZSB0aGUgcmVzdWx0aW5nIERhdGVUaW1lIGlzIGV4cHJlc3NlZCBpbi4KICAgICAgICogQHBhcmFtIHtib29sZWFufSBbb3B0cy5zZXRab25lPWZhbHNlXSAtIG92ZXJyaWRlIHRoZSB6b25lIHdpdGggYSBmaXhlZC1vZmZzZXQgem9uZSBzcGVjaWZpZWQgaW4gdGhlIHN0cmluZyBpdHNlbGYsIGlmIGl0IHNwZWNpZmllcyBvbmUKICAgICAgICogQHBhcmFtIHtzdHJpbmd9IFtvcHRzLmxvY2FsZT0nc3lzdGVtJ3MgbG9jYWxlJ10gLSBhIGxvY2FsZSB0byBzZXQgb24gdGhlIHJlc3VsdGluZyBEYXRlVGltZSBpbnN0YW5jZQogICAgICAgKiBAcGFyYW0ge3N0cmluZ30gb3B0cy5vdXRwdXRDYWxlbmRhciAtIHRoZSBvdXRwdXQgY2FsZW5kYXIgdG8gc2V0IG9uIHRoZSByZXN1bHRpbmcgRGF0ZVRpbWUgaW5zdGFuY2UKICAgICAgICogQHBhcmFtIHtzdHJpbmd9IG9wdHMubnVtYmVyaW5nU3lzdGVtIC0gdGhlIG51bWJlcmluZyBzeXN0ZW0gdG8gc2V0IG9uIHRoZSByZXN1bHRpbmcgRGF0ZVRpbWUgaW5zdGFuY2UKICAgICAgICogQGV4YW1wbGUgRGF0ZVRpbWUuZnJvbVJGQzI4MjIoJzI1IE5vdiAyMDE2IDEzOjIzOjEyIEdNVCcpCiAgICAgICAqIEBleGFtcGxlIERhdGVUaW1lLmZyb21SRkMyODIyKCdGcmksIDI1IE5vdiAyMDE2IDEzOjIzOjEyICswNjAwJykKICAgICAgICogQGV4YW1wbGUgRGF0ZVRpbWUuZnJvbVJGQzI4MjIoJzI1IE5vdiAyMDE2IDEzOjIzIFonKQogICAgICAgKiBAcmV0dXJuIHtEYXRlVGltZX0KICAgICAgICovCiAgICAgIDsKCiAgICAgIERhdGVUaW1lLmZyb21SRkMyODIyID0gZnVuY3Rpb24gZnJvbVJGQzI4MjIodGV4dCwgb3B0cykgewogICAgICAgIGlmIChvcHRzID09PSB2b2lkIDApIHsKICAgICAgICAgIG9wdHMgPSB7fTsKICAgICAgICB9CgogICAgICAgIHZhciBfcGFyc2VSRkMyODIyRGF0ZSA9IHBhcnNlUkZDMjgyMkRhdGUodGV4dCksCiAgICAgICAgICAgIHZhbHMgPSBfcGFyc2VSRkMyODIyRGF0ZVswXSwKICAgICAgICAgICAgcGFyc2VkWm9uZSA9IF9wYXJzZVJGQzI4MjJEYXRlWzFdOwoKICAgICAgICByZXR1cm4gcGFyc2VEYXRhVG9EYXRlVGltZSh2YWxzLCBwYXJzZWRab25lLCBvcHRzLCAiUkZDIDI4MjIiLCB0ZXh0KTsKICAgICAgfQogICAgICAvKioKICAgICAgICogQ3JlYXRlIGEgRGF0ZVRpbWUgZnJvbSBhbiBIVFRQIGhlYWRlciBkYXRlCiAgICAgICAqIEBzZWUgaHR0cHM6Ly93d3cudzMub3JnL1Byb3RvY29scy9yZmMyNjE2L3JmYzI2MTYtc2VjMy5odG1sI3NlYzMuMy4xCiAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSB0ZXh0IC0gdGhlIEhUVFAgaGVhZGVyIGRhdGUKICAgICAgICogQHBhcmFtIHtPYmplY3R9IG9wdHMgLSBvcHRpb25zIHRvIGFmZmVjdCB0aGUgY3JlYXRpb24KICAgICAgICogQHBhcmFtIHtzdHJpbmd8Wm9uZX0gW29wdHMuem9uZT0nbG9jYWwnXSAtIGNvbnZlcnQgdGhlIHRpbWUgdG8gdGhpcyB6b25lLiBTaW5jZSBIVFRQIGRhdGVzIGFyZSBhbHdheXMgaW4gVVRDLCB0aGlzIGhhcyBubyBlZmZlY3Qgb24gdGhlIGludGVycHJldGF0aW9uIG9mIHN0cmluZywgbWVyZWx5IHRoZSB6b25lIHRoZSByZXN1bHRpbmcgRGF0ZVRpbWUgaXMgZXhwcmVzc2VkIGluLgogICAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IFtvcHRzLnNldFpvbmU9ZmFsc2VdIC0gb3ZlcnJpZGUgdGhlIHpvbmUgd2l0aCB0aGUgZml4ZWQtb2Zmc2V0IHpvbmUgc3BlY2lmaWVkIGluIHRoZSBzdHJpbmcuIEZvciBIVFRQIGRhdGVzLCB0aGlzIGlzIGFsd2F5cyBVVEMsIHNvIHRoaXMgb3B0aW9uIGlzIGVxdWl2YWxlbnQgdG8gc2V0dGluZyB0aGUgYHpvbmVgIG9wdGlvbiB0byAndXRjJywgYnV0IHRoaXMgb3B0aW9uIGlzIGluY2x1ZGVkIGZvciBjb25zaXN0ZW5jeSB3aXRoIHNpbWlsYXIgbWV0aG9kcy4KICAgICAgICogQHBhcmFtIHtzdHJpbmd9IFtvcHRzLmxvY2FsZT0nc3lzdGVtJ3MgbG9jYWxlJ10gLSBhIGxvY2FsZSB0byBzZXQgb24gdGhlIHJlc3VsdGluZyBEYXRlVGltZSBpbnN0YW5jZQogICAgICAgKiBAcGFyYW0ge3N0cmluZ30gb3B0cy5vdXRwdXRDYWxlbmRhciAtIHRoZSBvdXRwdXQgY2FsZW5kYXIgdG8gc2V0IG9uIHRoZSByZXN1bHRpbmcgRGF0ZVRpbWUgaW5zdGFuY2UKICAgICAgICogQHBhcmFtIHtzdHJpbmd9IG9wdHMubnVtYmVyaW5nU3lzdGVtIC0gdGhlIG51bWJlcmluZyBzeXN0ZW0gdG8gc2V0IG9uIHRoZSByZXN1bHRpbmcgRGF0ZVRpbWUgaW5zdGFuY2UKICAgICAgICogQGV4YW1wbGUgRGF0ZVRpbWUuZnJvbUhUVFAoJ1N1biwgMDYgTm92IDE5OTQgMDg6NDk6MzcgR01UJykKICAgICAgICogQGV4YW1wbGUgRGF0ZVRpbWUuZnJvbUhUVFAoJ1N1bmRheSwgMDYtTm92LTk0IDA4OjQ5OjM3IEdNVCcpCiAgICAgICAqIEBleGFtcGxlIERhdGVUaW1lLmZyb21IVFRQKCdTdW4gTm92ICA2IDA4OjQ5OjM3IDE5OTQnKQogICAgICAgKiBAcmV0dXJuIHtEYXRlVGltZX0KICAgICAgICovCiAgICAgIDsKCiAgICAgIERhdGVUaW1lLmZyb21IVFRQID0gZnVuY3Rpb24gZnJvbUhUVFAodGV4dCwgb3B0cykgewogICAgICAgIGlmIChvcHRzID09PSB2b2lkIDApIHsKICAgICAgICAgIG9wdHMgPSB7fTsKICAgICAgICB9CgogICAgICAgIHZhciBfcGFyc2VIVFRQRGF0ZSA9IHBhcnNlSFRUUERhdGUodGV4dCksCiAgICAgICAgICAgIHZhbHMgPSBfcGFyc2VIVFRQRGF0ZVswXSwKICAgICAgICAgICAgcGFyc2VkWm9uZSA9IF9wYXJzZUhUVFBEYXRlWzFdOwoKICAgICAgICByZXR1cm4gcGFyc2VEYXRhVG9EYXRlVGltZSh2YWxzLCBwYXJzZWRab25lLCBvcHRzLCAiSFRUUCIsIG9wdHMpOwogICAgICB9CiAgICAgIC8qKgogICAgICAgKiBDcmVhdGUgYSBEYXRlVGltZSBmcm9tIGFuIGlucHV0IHN0cmluZyBhbmQgZm9ybWF0IHN0cmluZy4KICAgICAgICogRGVmYXVsdHMgdG8gZW4tVVMgaWYgbm8gbG9jYWxlIGhhcyBiZWVuIHNwZWNpZmllZCwgcmVnYXJkbGVzcyBvZiB0aGUgc3lzdGVtJ3MgbG9jYWxlLgogICAgICAgKiBAc2VlIGh0dHBzOi8vbW9tZW50LmdpdGh1Yi5pby9sdXhvbi9kb2NzL21hbnVhbC9wYXJzaW5nLmh0bWwjdGFibGUtb2YtdG9rZW5zCiAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSB0ZXh0IC0gdGhlIHN0cmluZyB0byBwYXJzZQogICAgICAgKiBAcGFyYW0ge3N0cmluZ30gZm10IC0gdGhlIGZvcm1hdCB0aGUgc3RyaW5nIGlzIGV4cGVjdGVkIHRvIGJlIGluIChzZWUgdGhlIGxpbmsgYmVsb3cgZm9yIHRoZSBmb3JtYXRzKQogICAgICAgKiBAcGFyYW0ge09iamVjdH0gb3B0cyAtIG9wdGlvbnMgdG8gYWZmZWN0IHRoZSBjcmVhdGlvbgogICAgICAgKiBAcGFyYW0ge3N0cmluZ3xab25lfSBbb3B0cy56b25lPSdsb2NhbCddIC0gdXNlIHRoaXMgem9uZSBpZiBubyBvZmZzZXQgaXMgc3BlY2lmaWVkIGluIHRoZSBpbnB1dCBzdHJpbmcgaXRzZWxmLiBXaWxsIGFsc28gY29udmVydCB0aGUgRGF0ZVRpbWUgdG8gdGhpcyB6b25lCiAgICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gW29wdHMuc2V0Wm9uZT1mYWxzZV0gLSBvdmVycmlkZSB0aGUgem9uZSB3aXRoIGEgem9uZSBzcGVjaWZpZWQgaW4gdGhlIHN0cmluZyBpdHNlbGYsIGlmIGl0IHNwZWNpZmllcyBvbmUKICAgICAgICogQHBhcmFtIHtzdHJpbmd9IFtvcHRzLmxvY2FsZT0nZW4tVVMnXSAtIGEgbG9jYWxlIHN0cmluZyB0byB1c2Ugd2hlbiBwYXJzaW5nLiBXaWxsIGFsc28gc2V0IHRoZSBEYXRlVGltZSB0byB0aGlzIGxvY2FsZQogICAgICAgKiBAcGFyYW0ge3N0cmluZ30gb3B0cy5udW1iZXJpbmdTeXN0ZW0gLSB0aGUgbnVtYmVyaW5nIHN5c3RlbSB0byB1c2Ugd2hlbiBwYXJzaW5nLiBXaWxsIGFsc28gc2V0IHRoZSByZXN1bHRpbmcgRGF0ZVRpbWUgdG8gdGhpcyBudW1iZXJpbmcgc3lzdGVtCiAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBvcHRzLm91dHB1dENhbGVuZGFyIC0gdGhlIG91dHB1dCBjYWxlbmRhciB0byBzZXQgb24gdGhlIHJlc3VsdGluZyBEYXRlVGltZSBpbnN0YW5jZQogICAgICAgKiBAcmV0dXJuIHtEYXRlVGltZX0KICAgICAgICovCiAgICAgIDsKCiAgICAgIERhdGVUaW1lLmZyb21Gb3JtYXQgPSBmdW5jdGlvbiBmcm9tRm9ybWF0KHRleHQsIGZtdCwgb3B0cykgewogICAgICAgIGlmIChvcHRzID09PSB2b2lkIDApIHsKICAgICAgICAgIG9wdHMgPSB7fTsKICAgICAgICB9CgogICAgICAgIGlmIChpc1VuZGVmaW5lZCh0ZXh0KSB8fCBpc1VuZGVmaW5lZChmbXQpKSB7CiAgICAgICAgICB0aHJvdyBuZXcgSW52YWxpZEFyZ3VtZW50RXJyb3IoImZyb21Gb3JtYXQgcmVxdWlyZXMgYW4gaW5wdXQgc3RyaW5nIGFuZCBhIGZvcm1hdCIpOwogICAgICAgIH0KCiAgICAgICAgdmFyIF9vcHRzID0gb3B0cywKICAgICAgICAgICAgX29wdHMkbG9jYWxlID0gX29wdHMubG9jYWxlLAogICAgICAgICAgICBsb2NhbGUgPSBfb3B0cyRsb2NhbGUgPT09IHZvaWQgMCA/IG51bGwgOiBfb3B0cyRsb2NhbGUsCiAgICAgICAgICAgIF9vcHRzJG51bWJlcmluZ1N5c3RlbSA9IF9vcHRzLm51bWJlcmluZ1N5c3RlbSwKICAgICAgICAgICAgbnVtYmVyaW5nU3lzdGVtID0gX29wdHMkbnVtYmVyaW5nU3lzdGVtID09PSB2b2lkIDAgPyBudWxsIDogX29wdHMkbnVtYmVyaW5nU3lzdGVtLAogICAgICAgICAgICBsb2NhbGVUb1VzZSA9IExvY2FsZS5mcm9tT3B0cyh7CiAgICAgICAgICBsb2NhbGU6IGxvY2FsZSwKICAgICAgICAgIG51bWJlcmluZ1N5c3RlbTogbnVtYmVyaW5nU3lzdGVtLAogICAgICAgICAgZGVmYXVsdFRvRU46IHRydWUKICAgICAgICB9KSwKICAgICAgICAgICAgX3BhcnNlRnJvbVRva2VucyA9IHBhcnNlRnJvbVRva2Vucyhsb2NhbGVUb1VzZSwgdGV4dCwgZm10KSwKICAgICAgICAgICAgdmFscyA9IF9wYXJzZUZyb21Ub2tlbnNbMF0sCiAgICAgICAgICAgIHBhcnNlZFpvbmUgPSBfcGFyc2VGcm9tVG9rZW5zWzFdLAogICAgICAgICAgICBpbnZhbGlkID0gX3BhcnNlRnJvbVRva2Vuc1syXTsKCiAgICAgICAgaWYgKGludmFsaWQpIHsKICAgICAgICAgIHJldHVybiBEYXRlVGltZS5pbnZhbGlkKGludmFsaWQpOwogICAgICAgIH0gZWxzZSB7CiAgICAgICAgICByZXR1cm4gcGFyc2VEYXRhVG9EYXRlVGltZSh2YWxzLCBwYXJzZWRab25lLCBvcHRzLCAiZm9ybWF0ICIgKyBmbXQsIHRleHQpOwogICAgICAgIH0KICAgICAgfQogICAgICAvKioKICAgICAgICogQGRlcHJlY2F0ZWQgdXNlIGZyb21Gb3JtYXQgaW5zdGVhZAogICAgICAgKi8KICAgICAgOwoKICAgICAgRGF0ZVRpbWUuZnJvbVN0cmluZyA9IGZ1bmN0aW9uIGZyb21TdHJpbmcodGV4dCwgZm10LCBvcHRzKSB7CiAgICAgICAgaWYgKG9wdHMgPT09IHZvaWQgMCkgewogICAgICAgICAgb3B0cyA9IHt9OwogICAgICAgIH0KCiAgICAgICAgcmV0dXJuIERhdGVUaW1lLmZyb21Gb3JtYXQodGV4dCwgZm10LCBvcHRzKTsKICAgICAgfQogICAgICAvKioKICAgICAgICogQ3JlYXRlIGEgRGF0ZVRpbWUgZnJvbSBhIFNRTCBkYXRlLCB0aW1lLCBvciBkYXRldGltZQogICAgICAgKiBEZWZhdWx0cyB0byBlbi1VUyBpZiBubyBsb2NhbGUgaGFzIGJlZW4gc3BlY2lmaWVkLCByZWdhcmRsZXNzIG9mIHRoZSBzeXN0ZW0ncyBsb2NhbGUKICAgICAgICogQHBhcmFtIHtzdHJpbmd9IHRleHQgLSB0aGUgc3RyaW5nIHRvIHBhcnNlCiAgICAgICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRzIC0gb3B0aW9ucyB0byBhZmZlY3QgdGhlIGNyZWF0aW9uCiAgICAgICAqIEBwYXJhbSB7c3RyaW5nfFpvbmV9IFtvcHRzLnpvbmU9J2xvY2FsJ10gLSB1c2UgdGhpcyB6b25lIGlmIG5vIG9mZnNldCBpcyBzcGVjaWZpZWQgaW4gdGhlIGlucHV0IHN0cmluZyBpdHNlbGYuIFdpbGwgYWxzbyBjb252ZXJ0IHRoZSBEYXRlVGltZSB0byB0aGlzIHpvbmUKICAgICAgICogQHBhcmFtIHtib29sZWFufSBbb3B0cy5zZXRab25lPWZhbHNlXSAtIG92ZXJyaWRlIHRoZSB6b25lIHdpdGggYSB6b25lIHNwZWNpZmllZCBpbiB0aGUgc3RyaW5nIGl0c2VsZiwgaWYgaXQgc3BlY2lmaWVzIG9uZQogICAgICAgKiBAcGFyYW0ge3N0cmluZ30gW29wdHMubG9jYWxlPSdlbi1VUyddIC0gYSBsb2NhbGUgc3RyaW5nIHRvIHVzZSB3aGVuIHBhcnNpbmcuIFdpbGwgYWxzbyBzZXQgdGhlIERhdGVUaW1lIHRvIHRoaXMgbG9jYWxlCiAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBvcHRzLm51bWJlcmluZ1N5c3RlbSAtIHRoZSBudW1iZXJpbmcgc3lzdGVtIHRvIHVzZSB3aGVuIHBhcnNpbmcuIFdpbGwgYWxzbyBzZXQgdGhlIHJlc3VsdGluZyBEYXRlVGltZSB0byB0aGlzIG51bWJlcmluZyBzeXN0ZW0KICAgICAgICogQHBhcmFtIHtzdHJpbmd9IG9wdHMub3V0cHV0Q2FsZW5kYXIgLSB0aGUgb3V0cHV0IGNhbGVuZGFyIHRvIHNldCBvbiB0aGUgcmVzdWx0aW5nIERhdGVUaW1lIGluc3RhbmNlCiAgICAgICAqIEBleGFtcGxlIERhdGVUaW1lLmZyb21TUUwoJzIwMTctMDUtMTUnKQogICAgICAgKiBAZXhhbXBsZSBEYXRlVGltZS5mcm9tU1FMKCcyMDE3LTA1LTE1IDA5OjEyOjM0JykKICAgICAgICogQGV4YW1wbGUgRGF0ZVRpbWUuZnJvbVNRTCgnMjAxNy0wNS0xNSAwOToxMjozNC4zNDInKQogICAgICAgKiBAZXhhbXBsZSBEYXRlVGltZS5mcm9tU1FMKCcyMDE3LTA1LTE1IDA5OjEyOjM0LjM0MiswNjowMCcpCiAgICAgICAqIEBleGFtcGxlIERhdGVUaW1lLmZyb21TUUwoJzIwMTctMDUtMTUgMDk6MTI6MzQuMzQyIEFtZXJpY2EvTG9zX0FuZ2VsZXMnKQogICAgICAgKiBAZXhhbXBsZSBEYXRlVGltZS5mcm9tU1FMKCcyMDE3LTA1LTE1IDA5OjEyOjM0LjM0MiBBbWVyaWNhL0xvc19BbmdlbGVzJywgeyBzZXRab25lOiB0cnVlIH0pCiAgICAgICAqIEBleGFtcGxlIERhdGVUaW1lLmZyb21TUUwoJzIwMTctMDUtMTUgMDk6MTI6MzQuMzQyJywgeyB6b25lOiAnQW1lcmljYS9Mb3NfQW5nZWxlcycgfSkKICAgICAgICogQGV4YW1wbGUgRGF0ZVRpbWUuZnJvbVNRTCgnMDk6MTI6MzQuMzQyJykKICAgICAgICogQHJldHVybiB7RGF0ZVRpbWV9CiAgICAgICAqLwogICAgICA7CgogICAgICBEYXRlVGltZS5mcm9tU1FMID0gZnVuY3Rpb24gZnJvbVNRTCh0ZXh0LCBvcHRzKSB7CiAgICAgICAgaWYgKG9wdHMgPT09IHZvaWQgMCkgewogICAgICAgICAgb3B0cyA9IHt9OwogICAgICAgIH0KCiAgICAgICAgdmFyIF9wYXJzZVNRTCA9IHBhcnNlU1FMKHRleHQpLAogICAgICAgICAgICB2YWxzID0gX3BhcnNlU1FMWzBdLAogICAgICAgICAgICBwYXJzZWRab25lID0gX3BhcnNlU1FMWzFdOwoKICAgICAgICByZXR1cm4gcGFyc2VEYXRhVG9EYXRlVGltZSh2YWxzLCBwYXJzZWRab25lLCBvcHRzLCAiU1FMIiwgdGV4dCk7CiAgICAgIH0KICAgICAgLyoqCiAgICAgICAqIENyZWF0ZSBhbiBpbnZhbGlkIERhdGVUaW1lLgogICAgICAgKiBAcGFyYW0ge3N0cmluZ30gcmVhc29uIC0gc2ltcGxlIHN0cmluZyBvZiB3aHkgdGhpcyBEYXRlVGltZSBpcyBpbnZhbGlkLiBTaG91bGQgbm90IGNvbnRhaW4gcGFyYW1ldGVycyBvciBhbnl0aGluZyBlbHNlIGRhdGEtZGVwZW5kZW50CiAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBbZXhwbGFuYXRpb249bnVsbF0gLSBsb25nZXIgZXhwbGFuYXRpb24sIG1heSBpbmNsdWRlIHBhcmFtZXRlcnMgYW5kIG90aGVyIHVzZWZ1bCBkZWJ1Z2dpbmcgaW5mb3JtYXRpb24KICAgICAgICogQHJldHVybiB7RGF0ZVRpbWV9CiAgICAgICAqLwogICAgICA7CgogICAgICBEYXRlVGltZS5pbnZhbGlkID0gZnVuY3Rpb24gaW52YWxpZChyZWFzb24sIGV4cGxhbmF0aW9uKSB7CiAgICAgICAgaWYgKGV4cGxhbmF0aW9uID09PSB2b2lkIDApIHsKICAgICAgICAgIGV4cGxhbmF0aW9uID0gbnVsbDsKICAgICAgICB9CgogICAgICAgIGlmICghcmVhc29uKSB7CiAgICAgICAgICB0aHJvdyBuZXcgSW52YWxpZEFyZ3VtZW50RXJyb3IoIm5lZWQgdG8gc3BlY2lmeSBhIHJlYXNvbiB0aGUgRGF0ZVRpbWUgaXMgaW52YWxpZCIpOwogICAgICAgIH0KCiAgICAgICAgdmFyIGludmFsaWQgPSByZWFzb24gaW5zdGFuY2VvZiBJbnZhbGlkID8gcmVhc29uIDogbmV3IEludmFsaWQocmVhc29uLCBleHBsYW5hdGlvbik7CgogICAgICAgIGlmIChTZXR0aW5ncy50aHJvd09uSW52YWxpZCkgewogICAgICAgICAgdGhyb3cgbmV3IEludmFsaWREYXRlVGltZUVycm9yKGludmFsaWQpOwogICAgICAgIH0gZWxzZSB7CiAgICAgICAgICByZXR1cm4gbmV3IERhdGVUaW1lKHsKICAgICAgICAgICAgaW52YWxpZDogaW52YWxpZAogICAgICAgICAgfSk7CiAgICAgICAgfQogICAgICB9CiAgICAgIC8qKgogICAgICAgKiBDaGVjayBpZiBhbiBvYmplY3QgaXMgYSBEYXRlVGltZS4gV29ya3MgYWNyb3NzIGNvbnRleHQgYm91bmRhcmllcwogICAgICAgKiBAcGFyYW0ge29iamVjdH0gbwogICAgICAgKiBAcmV0dXJuIHtib29sZWFufQogICAgICAgKi8KICAgICAgOwoKICAgICAgRGF0ZVRpbWUuaXNEYXRlVGltZSA9IGZ1bmN0aW9uIGlzRGF0ZVRpbWUobykgewogICAgICAgIHJldHVybiBvICYmIG8uaXNMdXhvbkRhdGVUaW1lIHx8IGZhbHNlOwogICAgICB9IC8vIElORk8KCiAgICAgIC8qKgogICAgICAgKiBHZXQgdGhlIHZhbHVlIG9mIHVuaXQuCiAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSB1bml0IC0gYSB1bml0IHN1Y2ggYXMgJ21pbnV0ZScgb3IgJ2RheScKICAgICAgICogQGV4YW1wbGUgRGF0ZVRpbWUubG9jYWwoMjAxNywgNywgNCkuZ2V0KCdtb250aCcpOyAvLz0+IDcKICAgICAgICogQGV4YW1wbGUgRGF0ZVRpbWUubG9jYWwoMjAxNywgNywgNCkuZ2V0KCdkYXknKTsgLy89PiA0CiAgICAgICAqIEByZXR1cm4ge251bWJlcn0KICAgICAgICovCiAgICAgIDsKCiAgICAgIHZhciBfcHJvdG8gPSBEYXRlVGltZS5wcm90b3R5cGU7CgogICAgICBfcHJvdG8uZ2V0ID0gZnVuY3Rpb24gZ2V0KHVuaXQpIHsKICAgICAgICByZXR1cm4gdGhpc1t1bml0XTsKICAgICAgfQogICAgICAvKioKICAgICAgICogUmV0dXJucyB3aGV0aGVyIHRoZSBEYXRlVGltZSBpcyB2YWxpZC4gSW52YWxpZCBEYXRlVGltZXMgb2NjdXIgd2hlbjoKICAgICAgICogKiBUaGUgRGF0ZVRpbWUgd2FzIGNyZWF0ZWQgZnJvbSBpbnZhbGlkIGNhbGVuZGFyIGluZm9ybWF0aW9uLCBzdWNoIGFzIHRoZSAxM3RoIG1vbnRoIG9yIEZlYnJ1YXJ5IDMwCiAgICAgICAqICogVGhlIERhdGVUaW1lIHdhcyBjcmVhdGVkIGJ5IGFuIG9wZXJhdGlvbiBvbiBhbm90aGVyIGludmFsaWQgZGF0ZQogICAgICAgKiBAdHlwZSB7Ym9vbGVhbn0KICAgICAgICovCiAgICAgIDsKCiAgICAgIC8qKgogICAgICAgKiBSZXR1cm5zIHRoZSByZXNvbHZlZCBJbnRsIG9wdGlvbnMgZm9yIHRoaXMgRGF0ZVRpbWUuCiAgICAgICAqIFRoaXMgaXMgdXNlZnVsIGluIHVuZGVyc3RhbmRpbmcgdGhlIGJlaGF2aW9yIG9mIGZvcm1hdHRpbmcgbWV0aG9kcwogICAgICAgKiBAcGFyYW0ge09iamVjdH0gb3B0cyAtIHRoZSBzYW1lIG9wdGlvbnMgYXMgdG9Mb2NhbGVTdHJpbmcKICAgICAgICogQHJldHVybiB7T2JqZWN0fQogICAgICAgKi8KICAgICAgX3Byb3RvLnJlc29sdmVkTG9jYWxlT3B0cyA9IGZ1bmN0aW9uIHJlc29sdmVkTG9jYWxlT3B0cyhvcHRzKSB7CiAgICAgICAgaWYgKG9wdHMgPT09IHZvaWQgMCkgewogICAgICAgICAgb3B0cyA9IHt9OwogICAgICAgIH0KCiAgICAgICAgdmFyIF9Gb3JtYXR0ZXIkY3JlYXRlJHJlcyA9IEZvcm1hdHRlci5jcmVhdGUodGhpcy5sb2MuY2xvbmUob3B0cyksIG9wdHMpLnJlc29sdmVkT3B0aW9ucyh0aGlzKSwKICAgICAgICAgICAgbG9jYWxlID0gX0Zvcm1hdHRlciRjcmVhdGUkcmVzLmxvY2FsZSwKICAgICAgICAgICAgbnVtYmVyaW5nU3lzdGVtID0gX0Zvcm1hdHRlciRjcmVhdGUkcmVzLm51bWJlcmluZ1N5c3RlbSwKICAgICAgICAgICAgY2FsZW5kYXIgPSBfRm9ybWF0dGVyJGNyZWF0ZSRyZXMuY2FsZW5kYXI7CgogICAgICAgIHJldHVybiB7CiAgICAgICAgICBsb2NhbGU6IGxvY2FsZSwKICAgICAgICAgIG51bWJlcmluZ1N5c3RlbTogbnVtYmVyaW5nU3lzdGVtLAogICAgICAgICAgb3V0cHV0Q2FsZW5kYXI6IGNhbGVuZGFyCiAgICAgICAgfTsKICAgICAgfSAvLyBUUkFOU0ZPUk0KCiAgICAgIC8qKgogICAgICAgKiAiU2V0IiB0aGUgRGF0ZVRpbWUncyB6b25lIHRvIFVUQy4gUmV0dXJucyBhIG5ld2x5LWNvbnN0cnVjdGVkIERhdGVUaW1lLgogICAgICAgKgogICAgICAgKiBFcXVpdmFsZW50IHRvIHtAbGluayBzZXRab25lfSgndXRjJykKICAgICAgICogQHBhcmFtIHtudW1iZXJ9IFtvZmZzZXQ9MF0gLSBvcHRpb25hbGx5LCBhbiBvZmZzZXQgZnJvbSBVVEMgaW4gbWludXRlcwogICAgICAgKiBAcGFyYW0ge09iamVjdH0gW29wdHM9e31dIC0gb3B0aW9ucyB0byBwYXNzIHRvIGBzZXRab25lKClgCiAgICAgICAqIEByZXR1cm4ge0RhdGVUaW1lfQogICAgICAgKi8KICAgICAgOwoKICAgICAgX3Byb3RvLnRvVVRDID0gZnVuY3Rpb24gdG9VVEMob2Zmc2V0LCBvcHRzKSB7CiAgICAgICAgaWYgKG9mZnNldCA9PT0gdm9pZCAwKSB7CiAgICAgICAgICBvZmZzZXQgPSAwOwogICAgICAgIH0KCiAgICAgICAgaWYgKG9wdHMgPT09IHZvaWQgMCkgewogICAgICAgICAgb3B0cyA9IHt9OwogICAgICAgIH0KCiAgICAgICAgcmV0dXJuIHRoaXMuc2V0Wm9uZShGaXhlZE9mZnNldFpvbmUuaW5zdGFuY2Uob2Zmc2V0KSwgb3B0cyk7CiAgICAgIH0KICAgICAgLyoqCiAgICAgICAqICJTZXQiIHRoZSBEYXRlVGltZSdzIHpvbmUgdG8gdGhlIGhvc3QncyBsb2NhbCB6b25lLiBSZXR1cm5zIGEgbmV3bHktY29uc3RydWN0ZWQgRGF0ZVRpbWUuCiAgICAgICAqCiAgICAgICAqIEVxdWl2YWxlbnQgdG8gYHNldFpvbmUoJ2xvY2FsJylgCiAgICAgICAqIEByZXR1cm4ge0RhdGVUaW1lfQogICAgICAgKi8KICAgICAgOwoKICAgICAgX3Byb3RvLnRvTG9jYWwgPSBmdW5jdGlvbiB0b0xvY2FsKCkgewogICAgICAgIHJldHVybiB0aGlzLnNldFpvbmUoU2V0dGluZ3MuZGVmYXVsdFpvbmUpOwogICAgICB9CiAgICAgIC8qKgogICAgICAgKiAiU2V0IiB0aGUgRGF0ZVRpbWUncyB6b25lIHRvIHNwZWNpZmllZCB6b25lLiBSZXR1cm5zIGEgbmV3bHktY29uc3RydWN0ZWQgRGF0ZVRpbWUuCiAgICAgICAqCiAgICAgICAqIEJ5IGRlZmF1bHQsIHRoZSBzZXR0ZXIga2VlcHMgdGhlIHVuZGVybHlpbmcgdGltZSB0aGUgc2FtZSAoYXMgaW4sIHRoZSBzYW1lIHRpbWVzdGFtcCksIGJ1dCB0aGUgbmV3IGluc3RhbmNlIHdpbGwgcmVwb3J0IGRpZmZlcmVudCBsb2NhbCB0aW1lcyBhbmQgY29uc2lkZXIgRFNUcyB3aGVuIG1ha2luZyBjb21wdXRhdGlvbnMsIGFzIHdpdGgge0BsaW5rIHBsdXN9LiBZb3UgbWF5IHdpc2ggdG8gdXNlIHtAbGluayB0b0xvY2FsfSBhbmQge0BsaW5rIHRvVVRDfSB3aGljaCBwcm92aWRlIHNpbXBsZSBjb252ZW5pZW5jZSB3cmFwcGVycyBmb3IgY29tbW9ubHkgdXNlZCB6b25lcy4KICAgICAgICogQHBhcmFtIHtzdHJpbmd8Wm9uZX0gW3pvbmU9J2xvY2FsJ10gLSBhIHpvbmUgaWRlbnRpZmllci4gQXMgYSBzdHJpbmcsIHRoYXQgY2FuIGJlIGFueSBJQU5BIHpvbmUgc3VwcG9ydGVkIGJ5IHRoZSBob3N0IGVudmlyb25tZW50LCBvciBhIGZpeGVkLW9mZnNldCBuYW1lIG9mIHRoZSBmb3JtICdVVEMrMycsIG9yIHRoZSBzdHJpbmdzICdsb2NhbCcgb3IgJ3V0YycuIFlvdSBtYXkgYWxzbyBzdXBwbHkgYW4gaW5zdGFuY2Ugb2YgYSB7QGxpbmsgWm9uZX0gY2xhc3MuCiAgICAgICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRzIC0gb3B0aW9ucwogICAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IFtvcHRzLmtlZXBMb2NhbFRpbWU9ZmFsc2VdIC0gSWYgdHJ1ZSwgYWRqdXN0IHRoZSB1bmRlcmx5aW5nIHRpbWUgc28gdGhhdCB0aGUgbG9jYWwgdGltZSBzdGF5cyB0aGUgc2FtZSwgYnV0IGluIHRoZSB0YXJnZXQgem9uZS4gWW91IHNob3VsZCByYXJlbHkgbmVlZCB0aGlzLgogICAgICAgKiBAcmV0dXJuIHtEYXRlVGltZX0KICAgICAgICovCiAgICAgIDsKCiAgICAgIF9wcm90by5zZXRab25lID0gZnVuY3Rpb24gc2V0Wm9uZSh6b25lLCBfdGVtcCkgewogICAgICAgIHZhciBfcmVmMyA9IF90ZW1wID09PSB2b2lkIDAgPyB7fSA6IF90ZW1wLAogICAgICAgICAgICBfcmVmMyRrZWVwTG9jYWxUaW1lID0gX3JlZjMua2VlcExvY2FsVGltZSwKICAgICAgICAgICAga2VlcExvY2FsVGltZSA9IF9yZWYzJGtlZXBMb2NhbFRpbWUgPT09IHZvaWQgMCA/IGZhbHNlIDogX3JlZjMka2VlcExvY2FsVGltZSwKICAgICAgICAgICAgX3JlZjMka2VlcENhbGVuZGFyVGltID0gX3JlZjMua2VlcENhbGVuZGFyVGltZSwKICAgICAgICAgICAga2VlcENhbGVuZGFyVGltZSA9IF9yZWYzJGtlZXBDYWxlbmRhclRpbSA9PT0gdm9pZCAwID8gZmFsc2UgOiBfcmVmMyRrZWVwQ2FsZW5kYXJUaW07CgogICAgICAgIHpvbmUgPSBub3JtYWxpemVab25lKHpvbmUsIFNldHRpbmdzLmRlZmF1bHRab25lKTsKCiAgICAgICAgaWYgKHpvbmUuZXF1YWxzKHRoaXMuem9uZSkpIHsKICAgICAgICAgIHJldHVybiB0aGlzOwogICAgICAgIH0gZWxzZSBpZiAoIXpvbmUuaXNWYWxpZCkgewogICAgICAgICAgcmV0dXJuIERhdGVUaW1lLmludmFsaWQodW5zdXBwb3J0ZWRab25lKHpvbmUpKTsKICAgICAgICB9IGVsc2UgewogICAgICAgICAgdmFyIG5ld1RTID0gdGhpcy50czsKCiAgICAgICAgICBpZiAoa2VlcExvY2FsVGltZSB8fCBrZWVwQ2FsZW5kYXJUaW1lKSB7CiAgICAgICAgICAgIHZhciBvZmZzZXRHdWVzcyA9IHpvbmUub2Zmc2V0KHRoaXMudHMpOwogICAgICAgICAgICB2YXIgYXNPYmogPSB0aGlzLnRvT2JqZWN0KCk7CgogICAgICAgICAgICB2YXIgX29ialRvVFMzID0gb2JqVG9UUyhhc09iaiwgb2Zmc2V0R3Vlc3MsIHpvbmUpOwoKICAgICAgICAgICAgbmV3VFMgPSBfb2JqVG9UUzNbMF07CiAgICAgICAgICB9CgogICAgICAgICAgcmV0dXJuIGNsb25lJDEodGhpcywgewogICAgICAgICAgICB0czogbmV3VFMsCiAgICAgICAgICAgIHpvbmU6IHpvbmUKICAgICAgICAgIH0pOwogICAgICAgIH0KICAgICAgfQogICAgICAvKioKICAgICAgICogIlNldCIgdGhlIGxvY2FsZSwgbnVtYmVyaW5nU3lzdGVtLCBvciBvdXRwdXRDYWxlbmRhci4gUmV0dXJucyBhIG5ld2x5LWNvbnN0cnVjdGVkIERhdGVUaW1lLgogICAgICAgKiBAcGFyYW0ge09iamVjdH0gcHJvcGVydGllcyAtIHRoZSBwcm9wZXJ0aWVzIHRvIHNldAogICAgICAgKiBAZXhhbXBsZSBEYXRlVGltZS5sb2NhbCgyMDE3LCA1LCAyNSkucmVjb25maWd1cmUoeyBsb2NhbGU6ICdlbi1HQicgfSkKICAgICAgICogQHJldHVybiB7RGF0ZVRpbWV9CiAgICAgICAqLwogICAgICA7CgogICAgICBfcHJvdG8ucmVjb25maWd1cmUgPSBmdW5jdGlvbiByZWNvbmZpZ3VyZShfdGVtcDIpIHsKICAgICAgICB2YXIgX3JlZjQgPSBfdGVtcDIgPT09IHZvaWQgMCA/IHt9IDogX3RlbXAyLAogICAgICAgICAgICBsb2NhbGUgPSBfcmVmNC5sb2NhbGUsCiAgICAgICAgICAgIG51bWJlcmluZ1N5c3RlbSA9IF9yZWY0Lm51bWJlcmluZ1N5c3RlbSwKICAgICAgICAgICAgb3V0cHV0Q2FsZW5kYXIgPSBfcmVmNC5vdXRwdXRDYWxlbmRhcjsKCiAgICAgICAgdmFyIGxvYyA9IHRoaXMubG9jLmNsb25lKHsKICAgICAgICAgIGxvY2FsZTogbG9jYWxlLAogICAgICAgICAgbnVtYmVyaW5nU3lzdGVtOiBudW1iZXJpbmdTeXN0ZW0sCiAgICAgICAgICBvdXRwdXRDYWxlbmRhcjogb3V0cHV0Q2FsZW5kYXIKICAgICAgICB9KTsKICAgICAgICByZXR1cm4gY2xvbmUkMSh0aGlzLCB7CiAgICAgICAgICBsb2M6IGxvYwogICAgICAgIH0pOwogICAgICB9CiAgICAgIC8qKgogICAgICAgKiAiU2V0IiB0aGUgbG9jYWxlLiBSZXR1cm5zIGEgbmV3bHktY29uc3RydWN0ZWQgRGF0ZVRpbWUuCiAgICAgICAqIEp1c3QgYSBjb252ZW5pZW50IGFsaWFzIGZvciByZWNvbmZpZ3VyZSh7IGxvY2FsZSB9KQogICAgICAgKiBAZXhhbXBsZSBEYXRlVGltZS5sb2NhbCgyMDE3LCA1LCAyNSkuc2V0TG9jYWxlKCdlbi1HQicpCiAgICAgICAqIEByZXR1cm4ge0RhdGVUaW1lfQogICAgICAgKi8KICAgICAgOwoKICAgICAgX3Byb3RvLnNldExvY2FsZSA9IGZ1bmN0aW9uIHNldExvY2FsZShsb2NhbGUpIHsKICAgICAgICByZXR1cm4gdGhpcy5yZWNvbmZpZ3VyZSh7CiAgICAgICAgICBsb2NhbGU6IGxvY2FsZQogICAgICAgIH0pOwogICAgICB9CiAgICAgIC8qKgogICAgICAgKiAiU2V0IiB0aGUgdmFsdWVzIG9mIHNwZWNpZmllZCB1bml0cy4gUmV0dXJucyBhIG5ld2x5LWNvbnN0cnVjdGVkIERhdGVUaW1lLgogICAgICAgKiBZb3UgY2FuIG9ubHkgc2V0IHVuaXRzIHdpdGggdGhpcyBtZXRob2Q7IGZvciAic2V0dGluZyIgbWV0YWRhdGEsIHNlZSB7QGxpbmsgcmVjb25maWd1cmV9IGFuZCB7QGxpbmsgc2V0Wm9uZX0uCiAgICAgICAqIEBwYXJhbSB7T2JqZWN0fSB2YWx1ZXMgLSBhIG1hcHBpbmcgb2YgdW5pdHMgdG8gbnVtYmVycwogICAgICAgKiBAZXhhbXBsZSBkdC5zZXQoeyB5ZWFyOiAyMDE3IH0pCiAgICAgICAqIEBleGFtcGxlIGR0LnNldCh7IGhvdXI6IDgsIG1pbnV0ZTogMzAgfSkKICAgICAgICogQGV4YW1wbGUgZHQuc2V0KHsgd2Vla2RheTogNSB9KQogICAgICAgKiBAZXhhbXBsZSBkdC5zZXQoeyB5ZWFyOiAyMDA1LCBvcmRpbmFsOiAyMzQgfSkKICAgICAgICogQHJldHVybiB7RGF0ZVRpbWV9CiAgICAgICAqLwogICAgICA7CgogICAgICBfcHJvdG8uc2V0ID0gZnVuY3Rpb24gc2V0KHZhbHVlcykgewogICAgICAgIGlmICghdGhpcy5pc1ZhbGlkKSByZXR1cm4gdGhpczsKICAgICAgICB2YXIgbm9ybWFsaXplZCA9IG5vcm1hbGl6ZU9iamVjdCh2YWx1ZXMsIG5vcm1hbGl6ZVVuaXQsIFtdKSwKICAgICAgICAgICAgc2V0dGluZ1dlZWtTdHVmZiA9ICFpc1VuZGVmaW5lZChub3JtYWxpemVkLndlZWtZZWFyKSB8fCAhaXNVbmRlZmluZWQobm9ybWFsaXplZC53ZWVrTnVtYmVyKSB8fCAhaXNVbmRlZmluZWQobm9ybWFsaXplZC53ZWVrZGF5KSwKICAgICAgICAgICAgY29udGFpbnNPcmRpbmFsID0gIWlzVW5kZWZpbmVkKG5vcm1hbGl6ZWQub3JkaW5hbCksCiAgICAgICAgICAgIGNvbnRhaW5zR3JlZ29yWWVhciA9ICFpc1VuZGVmaW5lZChub3JtYWxpemVkLnllYXIpLAogICAgICAgICAgICBjb250YWluc0dyZWdvck1EID0gIWlzVW5kZWZpbmVkKG5vcm1hbGl6ZWQubW9udGgpIHx8ICFpc1VuZGVmaW5lZChub3JtYWxpemVkLmRheSksCiAgICAgICAgICAgIGNvbnRhaW5zR3JlZ29yID0gY29udGFpbnNHcmVnb3JZZWFyIHx8IGNvbnRhaW5zR3JlZ29yTUQsCiAgICAgICAgICAgIGRlZmluaXRlV2Vla0RlZiA9IG5vcm1hbGl6ZWQud2Vla1llYXIgfHwgbm9ybWFsaXplZC53ZWVrTnVtYmVyOwoKICAgICAgICBpZiAoKGNvbnRhaW5zR3JlZ29yIHx8IGNvbnRhaW5zT3JkaW5hbCkgJiYgZGVmaW5pdGVXZWVrRGVmKSB7CiAgICAgICAgICB0aHJvdyBuZXcgQ29uZmxpY3RpbmdTcGVjaWZpY2F0aW9uRXJyb3IoIkNhbid0IG1peCB3ZWVrWWVhci93ZWVrTnVtYmVyIHVuaXRzIHdpdGggeWVhci9tb250aC9kYXkgb3Igb3JkaW5hbHMiKTsKICAgICAgICB9CgogICAgICAgIGlmIChjb250YWluc0dyZWdvck1EICYmIGNvbnRhaW5zT3JkaW5hbCkgewogICAgICAgICAgdGhyb3cgbmV3IENvbmZsaWN0aW5nU3BlY2lmaWNhdGlvbkVycm9yKCJDYW4ndCBtaXggb3JkaW5hbCBkYXRlcyB3aXRoIG1vbnRoL2RheSIpOwogICAgICAgIH0KCiAgICAgICAgdmFyIG1peGVkOwoKICAgICAgICBpZiAoc2V0dGluZ1dlZWtTdHVmZikgewogICAgICAgICAgbWl4ZWQgPSB3ZWVrVG9HcmVnb3JpYW4oT2JqZWN0LmFzc2lnbihncmVnb3JpYW5Ub1dlZWsodGhpcy5jKSwgbm9ybWFsaXplZCkpOwogICAgICAgIH0gZWxzZSBpZiAoIWlzVW5kZWZpbmVkKG5vcm1hbGl6ZWQub3JkaW5hbCkpIHsKICAgICAgICAgIG1peGVkID0gb3JkaW5hbFRvR3JlZ29yaWFuKE9iamVjdC5hc3NpZ24oZ3JlZ29yaWFuVG9PcmRpbmFsKHRoaXMuYyksIG5vcm1hbGl6ZWQpKTsKICAgICAgICB9IGVsc2UgewogICAgICAgICAgbWl4ZWQgPSBPYmplY3QuYXNzaWduKHRoaXMudG9PYmplY3QoKSwgbm9ybWFsaXplZCk7IC8vIGlmIHdlIGRpZG4ndCBzZXQgdGhlIGRheSBidXQgd2UgZW5kZWQgdXAgb24gYW4gb3ZlcmZsb3cgZGF0ZSwKICAgICAgICAgIC8vIHVzZSB0aGUgbGFzdCBkYXkgb2YgdGhlIHJpZ2h0IG1vbnRoCgogICAgICAgICAgaWYgKGlzVW5kZWZpbmVkKG5vcm1hbGl6ZWQuZGF5KSkgewogICAgICAgICAgICBtaXhlZC5kYXkgPSBNYXRoLm1pbihkYXlzSW5Nb250aChtaXhlZC55ZWFyLCBtaXhlZC5tb250aCksIG1peGVkLmRheSk7CiAgICAgICAgICB9CiAgICAgICAgfQoKICAgICAgICB2YXIgX29ialRvVFM0ID0gb2JqVG9UUyhtaXhlZCwgdGhpcy5vLCB0aGlzLnpvbmUpLAogICAgICAgICAgICB0cyA9IF9vYmpUb1RTNFswXSwKICAgICAgICAgICAgbyA9IF9vYmpUb1RTNFsxXTsKCiAgICAgICAgcmV0dXJuIGNsb25lJDEodGhpcywgewogICAgICAgICAgdHM6IHRzLAogICAgICAgICAgbzogbwogICAgICAgIH0pOwogICAgICB9CiAgICAgIC8qKgogICAgICAgKiBBZGQgYSBwZXJpb2Qgb2YgdGltZSB0byB0aGlzIERhdGVUaW1lIGFuZCByZXR1cm4gdGhlIHJlc3VsdGluZyBEYXRlVGltZQogICAgICAgKgogICAgICAgKiBBZGRpbmcgaG91cnMsIG1pbnV0ZXMsIHNlY29uZHMsIG9yIG1pbGxpc2Vjb25kcyBpbmNyZWFzZXMgdGhlIHRpbWVzdGFtcCBieSB0aGUgcmlnaHQgbnVtYmVyIG9mIG1pbGxpc2Vjb25kcy4gQWRkaW5nIGRheXMsIG1vbnRocywgb3IgeWVhcnMgc2hpZnRzIHRoZSBjYWxlbmRhciwgYWNjb3VudGluZyBmb3IgRFNUcyBhbmQgbGVhcCB5ZWFycyBhbG9uZyB0aGUgd2F5LiBUaHVzLCBgZHQucGx1cyh7IGhvdXJzOiAyNCB9KWAgbWF5IHJlc3VsdCBpbiBhIGRpZmZlcmVudCB0aW1lIHRoYW4gYGR0LnBsdXMoeyBkYXlzOiAxIH0pYCBpZiB0aGVyZSdzIGEgRFNUIHNoaWZ0IGluIGJldHdlZW4uCiAgICAgICAqIEBwYXJhbSB7RHVyYXRpb258T2JqZWN0fG51bWJlcn0gZHVyYXRpb24gLSBUaGUgYW1vdW50IHRvIGFkZC4gRWl0aGVyIGEgTHV4b24gRHVyYXRpb24sIGEgbnVtYmVyIG9mIG1pbGxpc2Vjb25kcywgdGhlIG9iamVjdCBhcmd1bWVudCB0byBEdXJhdGlvbi5mcm9tT2JqZWN0KCkKICAgICAgICogQGV4YW1wbGUgRGF0ZVRpbWUubm93KCkucGx1cygxMjMpIC8vfj4gaW4gMTIzIG1pbGxpc2Vjb25kcwogICAgICAgKiBAZXhhbXBsZSBEYXRlVGltZS5ub3coKS5wbHVzKHsgbWludXRlczogMTUgfSkgLy9+PiBpbiAxNSBtaW51dGVzCiAgICAgICAqIEBleGFtcGxlIERhdGVUaW1lLm5vdygpLnBsdXMoeyBkYXlzOiAxIH0pIC8vfj4gdGhpcyB0aW1lIHRvbW9ycm93CiAgICAgICAqIEBleGFtcGxlIERhdGVUaW1lLm5vdygpLnBsdXMoeyBkYXlzOiAtMSB9KSAvL34+IHRoaXMgdGltZSB5ZXN0ZXJkYXkKICAgICAgICogQGV4YW1wbGUgRGF0ZVRpbWUubm93KCkucGx1cyh7IGhvdXJzOiAzLCBtaW51dGVzOiAxMyB9KSAvL34+IGluIDMgaHIsIDEzIG1pbgogICAgICAgKiBAZXhhbXBsZSBEYXRlVGltZS5ub3coKS5wbHVzKER1cmF0aW9uLmZyb21PYmplY3QoeyBob3VyczogMywgbWludXRlczogMTMgfSkpIC8vfj4gaW4gMyBociwgMTMgbWluCiAgICAgICAqIEByZXR1cm4ge0RhdGVUaW1lfQogICAgICAgKi8KICAgICAgOwoKICAgICAgX3Byb3RvLnBsdXMgPSBmdW5jdGlvbiBwbHVzKGR1cmF0aW9uKSB7CiAgICAgICAgaWYgKCF0aGlzLmlzVmFsaWQpIHJldHVybiB0aGlzOwogICAgICAgIHZhciBkdXIgPSBmcmllbmRseUR1cmF0aW9uKGR1cmF0aW9uKTsKICAgICAgICByZXR1cm4gY2xvbmUkMSh0aGlzLCBhZGp1c3RUaW1lKHRoaXMsIGR1cikpOwogICAgICB9CiAgICAgIC8qKgogICAgICAgKiBTdWJ0cmFjdCBhIHBlcmlvZCBvZiB0aW1lIHRvIHRoaXMgRGF0ZVRpbWUgYW5kIHJldHVybiB0aGUgcmVzdWx0aW5nIERhdGVUaW1lCiAgICAgICAqIFNlZSB7QGxpbmsgcGx1c30KICAgICAgICogQHBhcmFtIHtEdXJhdGlvbnxPYmplY3R8bnVtYmVyfSBkdXJhdGlvbiAtIFRoZSBhbW91bnQgdG8gc3VidHJhY3QuIEVpdGhlciBhIEx1eG9uIER1cmF0aW9uLCBhIG51bWJlciBvZiBtaWxsaXNlY29uZHMsIHRoZSBvYmplY3QgYXJndW1lbnQgdG8gRHVyYXRpb24uZnJvbU9iamVjdCgpCiAgICAgICBAcmV0dXJuIHtEYXRlVGltZX0KICAgICAgKi8KICAgICAgOwoKICAgICAgX3Byb3RvLm1pbnVzID0gZnVuY3Rpb24gbWludXMoZHVyYXRpb24pIHsKICAgICAgICBpZiAoIXRoaXMuaXNWYWxpZCkgcmV0dXJuIHRoaXM7CiAgICAgICAgdmFyIGR1ciA9IGZyaWVuZGx5RHVyYXRpb24oZHVyYXRpb24pLm5lZ2F0ZSgpOwogICAgICAgIHJldHVybiBjbG9uZSQxKHRoaXMsIGFkanVzdFRpbWUodGhpcywgZHVyKSk7CiAgICAgIH0KICAgICAgLyoqCiAgICAgICAqICJTZXQiIHRoaXMgRGF0ZVRpbWUgdG8gdGhlIGJlZ2lubmluZyBvZiBhIHVuaXQgb2YgdGltZS4KICAgICAgICogQHBhcmFtIHtzdHJpbmd9IHVuaXQgLSBUaGUgdW5pdCB0byBnbyB0byB0aGUgYmVnaW5uaW5nIG9mLiBDYW4gYmUgJ3llYXInLCAncXVhcnRlcicsICdtb250aCcsICd3ZWVrJywgJ2RheScsICdob3VyJywgJ21pbnV0ZScsICdzZWNvbmQnLCBvciAnbWlsbGlzZWNvbmQnLgogICAgICAgKiBAZXhhbXBsZSBEYXRlVGltZS5sb2NhbCgyMDE0LCAzLCAzKS5zdGFydE9mKCdtb250aCcpLnRvSVNPRGF0ZSgpOyAvLz0+ICcyMDE0LTAzLTAxJwogICAgICAgKiBAZXhhbXBsZSBEYXRlVGltZS5sb2NhbCgyMDE0LCAzLCAzKS5zdGFydE9mKCd5ZWFyJykudG9JU09EYXRlKCk7IC8vPT4gJzIwMTQtMDEtMDEnCiAgICAgICAqIEBleGFtcGxlIERhdGVUaW1lLmxvY2FsKDIwMTQsIDMsIDMpLnN0YXJ0T2YoJ3dlZWsnKS50b0lTT0RhdGUoKTsgLy89PiAnMjAxNC0wMy0wMycsIHdlZWtzIGFsd2F5cyBzdGFydCBvbiBNb25kYXlzCiAgICAgICAqIEBleGFtcGxlIERhdGVUaW1lLmxvY2FsKDIwMTQsIDMsIDMsIDUsIDMwKS5zdGFydE9mKCdkYXknKS50b0lTT1RpbWUoKTsgLy89PiAnMDA6MDAuMDAwLTA1OjAwJwogICAgICAgKiBAZXhhbXBsZSBEYXRlVGltZS5sb2NhbCgyMDE0LCAzLCAzLCA1LCAzMCkuc3RhcnRPZignaG91cicpLnRvSVNPVGltZSgpOyAvLz0+ICcwNTowMDowMC4wMDAtMDU6MDAnCiAgICAgICAqIEByZXR1cm4ge0RhdGVUaW1lfQogICAgICAgKi8KICAgICAgOwoKICAgICAgX3Byb3RvLnN0YXJ0T2YgPSBmdW5jdGlvbiBzdGFydE9mKHVuaXQpIHsKICAgICAgICBpZiAoIXRoaXMuaXNWYWxpZCkgcmV0dXJuIHRoaXM7CiAgICAgICAgdmFyIG8gPSB7fSwKICAgICAgICAgICAgbm9ybWFsaXplZFVuaXQgPSBEdXJhdGlvbi5ub3JtYWxpemVVbml0KHVuaXQpOwoKICAgICAgICBzd2l0Y2ggKG5vcm1hbGl6ZWRVbml0KSB7CiAgICAgICAgICBjYXNlICJ5ZWFycyI6CiAgICAgICAgICAgIG8ubW9udGggPSAxOwogICAgICAgICAgLy8gZmFsbHMgdGhyb3VnaAoKICAgICAgICAgIGNhc2UgInF1YXJ0ZXJzIjoKICAgICAgICAgIGNhc2UgIm1vbnRocyI6CiAgICAgICAgICAgIG8uZGF5ID0gMTsKICAgICAgICAgIC8vIGZhbGxzIHRocm91Z2gKCiAgICAgICAgICBjYXNlICJ3ZWVrcyI6CiAgICAgICAgICBjYXNlICJkYXlzIjoKICAgICAgICAgICAgby5ob3VyID0gMDsKICAgICAgICAgIC8vIGZhbGxzIHRocm91Z2gKCiAgICAgICAgICBjYXNlICJob3VycyI6CiAgICAgICAgICAgIG8ubWludXRlID0gMDsKICAgICAgICAgIC8vIGZhbGxzIHRocm91Z2gKCiAgICAgICAgICBjYXNlICJtaW51dGVzIjoKICAgICAgICAgICAgby5zZWNvbmQgPSAwOwogICAgICAgICAgLy8gZmFsbHMgdGhyb3VnaAoKICAgICAgICAgIGNhc2UgInNlY29uZHMiOgogICAgICAgICAgICBvLm1pbGxpc2Vjb25kID0gMDsKICAgICAgICAgICAgYnJlYWs7CiAgICAgICAgICAvLyBubyBkZWZhdWx0LCBpbnZhbGlkIHVuaXRzIHRocm93IGluIG5vcm1hbGl6ZVVuaXQoKQogICAgICAgIH0KCiAgICAgICAgaWYgKG5vcm1hbGl6ZWRVbml0ID09PSAid2Vla3MiKSB7CiAgICAgICAgICBvLndlZWtkYXkgPSAxOwogICAgICAgIH0KCiAgICAgICAgaWYgKG5vcm1hbGl6ZWRVbml0ID09PSAicXVhcnRlcnMiKSB7CiAgICAgICAgICB2YXIgcSA9IE1hdGguY2VpbCh0aGlzLm1vbnRoIC8gMyk7CiAgICAgICAgICBvLm1vbnRoID0gKHEgLSAxKSAqIDMgKyAxOwogICAgICAgIH0KCiAgICAgICAgcmV0dXJuIHRoaXMuc2V0KG8pOwogICAgICB9CiAgICAgIC8qKgogICAgICAgKiAiU2V0IiB0aGlzIERhdGVUaW1lIHRvIHRoZSBlbmQgKG1lYW5pbmcgdGhlIGxhc3QgbWlsbGlzZWNvbmQpIG9mIGEgdW5pdCBvZiB0aW1lCiAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSB1bml0IC0gVGhlIHVuaXQgdG8gZ28gdG8gdGhlIGVuZCBvZi4gQ2FuIGJlICd5ZWFyJywgJ3F1YXJ0ZXInLCAnbW9udGgnLCAnd2VlaycsICdkYXknLCAnaG91cicsICdtaW51dGUnLCAnc2Vjb25kJywgb3IgJ21pbGxpc2Vjb25kJy4KICAgICAgICogQGV4YW1wbGUgRGF0ZVRpbWUubG9jYWwoMjAxNCwgMywgMykuZW5kT2YoJ21vbnRoJykudG9JU08oKTsgLy89PiAnMjAxNC0wMy0zMVQyMzo1OTo1OS45OTktMDU6MDAnCiAgICAgICAqIEBleGFtcGxlIERhdGVUaW1lLmxvY2FsKDIwMTQsIDMsIDMpLmVuZE9mKCd5ZWFyJykudG9JU08oKTsgLy89PiAnMjAxNC0xMi0zMVQyMzo1OTo1OS45OTktMDU6MDAnCiAgICAgICAqIEBleGFtcGxlIERhdGVUaW1lLmxvY2FsKDIwMTQsIDMsIDMpLmVuZE9mKCd3ZWVrJykudG9JU08oKTsgLy8gPT4gJzIwMTQtMDMtMDlUMjM6NTk6NTkuOTk5LTA1OjAwJywgd2Vla3Mgc3RhcnQgb24gTW9uZGF5cwogICAgICAgKiBAZXhhbXBsZSBEYXRlVGltZS5sb2NhbCgyMDE0LCAzLCAzLCA1LCAzMCkuZW5kT2YoJ2RheScpLnRvSVNPKCk7IC8vPT4gJzIwMTQtMDMtMDNUMjM6NTk6NTkuOTk5LTA1OjAwJwogICAgICAgKiBAZXhhbXBsZSBEYXRlVGltZS5sb2NhbCgyMDE0LCAzLCAzLCA1LCAzMCkuZW5kT2YoJ2hvdXInKS50b0lTTygpOyAvLz0+ICcyMDE0LTAzLTAzVDA1OjU5OjU5Ljk5OS0wNTowMCcKICAgICAgICogQHJldHVybiB7RGF0ZVRpbWV9CiAgICAgICAqLwogICAgICA7CgogICAgICBfcHJvdG8uZW5kT2YgPSBmdW5jdGlvbiBlbmRPZih1bml0KSB7CiAgICAgICAgdmFyIF90aGlzJHBsdXM7CgogICAgICAgIHJldHVybiB0aGlzLmlzVmFsaWQgPyB0aGlzLnBsdXMoKF90aGlzJHBsdXMgPSB7fSwgX3RoaXMkcGx1c1t1bml0XSA9IDEsIF90aGlzJHBsdXMpKS5zdGFydE9mKHVuaXQpLm1pbnVzKDEpIDogdGhpczsKICAgICAgfSAvLyBPVVRQVVQKCiAgICAgIC8qKgogICAgICAgKiBSZXR1cm5zIGEgc3RyaW5nIHJlcHJlc2VudGF0aW9uIG9mIHRoaXMgRGF0ZVRpbWUgZm9ybWF0dGVkIGFjY29yZGluZyB0byB0aGUgc3BlY2lmaWVkIGZvcm1hdCBzdHJpbmcuCiAgICAgICAqICoqWW91IG1heSBub3Qgd2FudCB0aGlzLioqIFNlZSB7QGxpbmsgdG9Mb2NhbGVTdHJpbmd9IGZvciBhIG1vcmUgZmxleGlibGUgZm9ybWF0dGluZyB0b29sLiBGb3IgYSB0YWJsZSBvZiB0b2tlbnMgYW5kIHRoZWlyIGludGVycHJldGF0aW9ucywgc2VlIFtoZXJlXShodHRwczovL21vbWVudC5naXRodWIuaW8vbHV4b24vZG9jcy9tYW51YWwvZm9ybWF0dGluZy5odG1sI3RhYmxlLW9mLXRva2VucykuCiAgICAgICAqIERlZmF1bHRzIHRvIGVuLVVTIGlmIG5vIGxvY2FsZSBoYXMgYmVlbiBzcGVjaWZpZWQsIHJlZ2FyZGxlc3Mgb2YgdGhlIHN5c3RlbSdzIGxvY2FsZS4KICAgICAgICogQHNlZSBodHRwczovL21vbWVudC5naXRodWIuaW8vbHV4b24vZG9jcy9tYW51YWwvZm9ybWF0dGluZy5odG1sI3RhYmxlLW9mLXRva2VucwogICAgICAgKiBAcGFyYW0ge3N0cmluZ30gZm10IC0gdGhlIGZvcm1hdCBzdHJpbmcKICAgICAgICogQHBhcmFtIHtPYmplY3R9IG9wdHMgLSBvcHRzIHRvIG92ZXJyaWRlIHRoZSBjb25maWd1cmF0aW9uIG9wdGlvbnMKICAgICAgICogQGV4YW1wbGUgRGF0ZVRpbWUubm93KCkudG9Gb3JtYXQoJ3l5eXkgTExMIGRkJykgLy89PiAnMjAxNyBBcHIgMjInCiAgICAgICAqIEBleGFtcGxlIERhdGVUaW1lLm5vdygpLnNldExvY2FsZSgnZnInKS50b0Zvcm1hdCgneXl5eSBMTEwgZGQnKSAvLz0+ICcyMDE3IGF2ci4gMjInCiAgICAgICAqIEBleGFtcGxlIERhdGVUaW1lLm5vdygpLnRvRm9ybWF0KCd5eXl5IExMTCBkZCcsIHsgbG9jYWxlOiAiZnIiIH0pIC8vPT4gJzIwMTcgYXZyLiAyMicKICAgICAgICogQGV4YW1wbGUgRGF0ZVRpbWUubm93KCkudG9Gb3JtYXQoIkhIICdob3VycyBhbmQnIG1tICdtaW51dGVzJyIpIC8vPT4gJzIwIGhvdXJzIGFuZCA1NSBtaW51dGVzJwogICAgICAgKiBAcmV0dXJuIHtzdHJpbmd9CiAgICAgICAqLwogICAgICA7CgogICAgICBfcHJvdG8udG9Gb3JtYXQgPSBmdW5jdGlvbiB0b0Zvcm1hdChmbXQsIG9wdHMpIHsKICAgICAgICBpZiAob3B0cyA9PT0gdm9pZCAwKSB7CiAgICAgICAgICBvcHRzID0ge307CiAgICAgICAgfQoKICAgICAgICByZXR1cm4gdGhpcy5pc1ZhbGlkID8gRm9ybWF0dGVyLmNyZWF0ZSh0aGlzLmxvYy5yZWRlZmF1bHRUb0VOKG9wdHMpKS5mb3JtYXREYXRlVGltZUZyb21TdHJpbmcodGhpcywgZm10KSA6IElOVkFMSUQkMjsKICAgICAgfQogICAgICAvKioKICAgICAgICogUmV0dXJucyBhIGxvY2FsaXplZCBzdHJpbmcgcmVwcmVzZW50aW5nIHRoaXMgZGF0ZS4gQWNjZXB0cyB0aGUgc2FtZSBvcHRpb25zIGFzIHRoZSBJbnRsLkRhdGVUaW1lRm9ybWF0IGNvbnN0cnVjdG9yIGFuZCBhbnkgcHJlc2V0cyBkZWZpbmVkIGJ5IEx1eG9uLCBzdWNoIGFzIGBEYXRlVGltZS5EQVRFX0ZVTExgIG9yIGBEYXRlVGltZS5USU1FX1NJTVBMRWAuCiAgICAgICAqIFRoZSBleGFjdCBiZWhhdmlvciBvZiB0aGlzIG1ldGhvZCBpcyBicm93c2VyLXNwZWNpZmljLCBidXQgaW4gZ2VuZXJhbCBpdCB3aWxsIHJldHVybiBhbiBhcHByb3ByaWF0ZSByZXByZXNlbnRhdGlvbgogICAgICAgKiBvZiB0aGUgRGF0ZVRpbWUgaW4gdGhlIGFzc2lnbmVkIGxvY2FsZS4KICAgICAgICogRGVmYXVsdHMgdG8gdGhlIHN5c3RlbSdzIGxvY2FsZSBpZiBubyBsb2NhbGUgaGFzIGJlZW4gc3BlY2lmaWVkCiAgICAgICAqIEBzZWUgaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvSmF2YVNjcmlwdC9SZWZlcmVuY2UvR2xvYmFsX09iamVjdHMvRGF0ZVRpbWVGb3JtYXQKICAgICAgICogQHBhcmFtIG9wdHMge09iamVjdH0gLSBJbnRsLkRhdGVUaW1lRm9ybWF0IGNvbnN0cnVjdG9yIG9wdGlvbnMgYW5kIGNvbmZpZ3VyYXRpb24gb3B0aW9ucwogICAgICAgKiBAZXhhbXBsZSBEYXRlVGltZS5ub3coKS50b0xvY2FsZVN0cmluZygpOyAvLz0+IDQvMjAvMjAxNwogICAgICAgKiBAZXhhbXBsZSBEYXRlVGltZS5ub3coKS5zZXRMb2NhbGUoJ2VuLWdiJykudG9Mb2NhbGVTdHJpbmcoKTsgLy89PiAnMjAvMDQvMjAxNycKICAgICAgICogQGV4YW1wbGUgRGF0ZVRpbWUubm93KCkudG9Mb2NhbGVTdHJpbmcoeyBsb2NhbGU6ICdlbi1nYicgfSk7IC8vPT4gJzIwLzA0LzIwMTcnCiAgICAgICAqIEBleGFtcGxlIERhdGVUaW1lLm5vdygpLnRvTG9jYWxlU3RyaW5nKERhdGVUaW1lLkRBVEVfRlVMTCk7IC8vPT4gJ0FwcmlsIDIwLCAyMDE3JwogICAgICAgKiBAZXhhbXBsZSBEYXRlVGltZS5ub3coKS50b0xvY2FsZVN0cmluZyhEYXRlVGltZS5USU1FX1NJTVBMRSk7IC8vPT4gJzExOjMyIEFNJwogICAgICAgKiBAZXhhbXBsZSBEYXRlVGltZS5ub3coKS50b0xvY2FsZVN0cmluZyhEYXRlVGltZS5EQVRFVElNRV9TSE9SVCk7IC8vPT4gJzQvMjAvMjAxNywgMTE6MzIgQU0nCiAgICAgICAqIEBleGFtcGxlIERhdGVUaW1lLm5vdygpLnRvTG9jYWxlU3RyaW5nKHsgd2Vla2RheTogJ2xvbmcnLCBtb250aDogJ2xvbmcnLCBkYXk6ICcyLWRpZ2l0JyB9KTsgLy89PiAnVGh1cnNkYXksIEFwcmlsIDIwJwogICAgICAgKiBAZXhhbXBsZSBEYXRlVGltZS5ub3coKS50b0xvY2FsZVN0cmluZyh7IHdlZWtkYXk6ICdzaG9ydCcsIG1vbnRoOiAnc2hvcnQnLCBkYXk6ICcyLWRpZ2l0JywgaG91cjogJzItZGlnaXQnLCBtaW51dGU6ICcyLWRpZ2l0JyB9KTsgLy89PiAnVGh1LCBBcHIgMjAsIDExOjI3IEFNJwogICAgICAgKiBAZXhhbXBsZSBEYXRlVGltZS5ub3coKS50b0xvY2FsZVN0cmluZyh7IGhvdXI6ICcyLWRpZ2l0JywgbWludXRlOiAnMi1kaWdpdCcsIGhvdXIxMjogZmFsc2UgfSk7IC8vPT4gJzExOjMyJwogICAgICAgKiBAcmV0dXJuIHtzdHJpbmd9CiAgICAgICAqLwogICAgICA7CgogICAgICBfcHJvdG8udG9Mb2NhbGVTdHJpbmcgPSBmdW5jdGlvbiB0b0xvY2FsZVN0cmluZyhvcHRzKSB7CiAgICAgICAgaWYgKG9wdHMgPT09IHZvaWQgMCkgewogICAgICAgICAgb3B0cyA9IERBVEVfU0hPUlQ7CiAgICAgICAgfQoKICAgICAgICByZXR1cm4gdGhpcy5pc1ZhbGlkID8gRm9ybWF0dGVyLmNyZWF0ZSh0aGlzLmxvYy5jbG9uZShvcHRzKSwgb3B0cykuZm9ybWF0RGF0ZVRpbWUodGhpcykgOiBJTlZBTElEJDI7CiAgICAgIH0KICAgICAgLyoqCiAgICAgICAqIFJldHVybnMgYW4gYXJyYXkgb2YgZm9ybWF0ICJwYXJ0cyIsIG1lYW5pbmcgaW5kaXZpZHVhbCB0b2tlbnMgYWxvbmcgd2l0aCBtZXRhZGF0YS4gVGhpcyBpcyBhbGxvd3MgY2FsbGVycyB0byBwb3N0LXByb2Nlc3MgaW5kaXZpZHVhbCBzZWN0aW9ucyBvZiB0aGUgZm9ybWF0dGVkIG91dHB1dC4KICAgICAgICogRGVmYXVsdHMgdG8gdGhlIHN5c3RlbSdzIGxvY2FsZSBpZiBubyBsb2NhbGUgaGFzIGJlZW4gc3BlY2lmaWVkCiAgICAgICAqIEBzZWUgaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvSmF2YVNjcmlwdC9SZWZlcmVuY2UvR2xvYmFsX09iamVjdHMvRGF0ZVRpbWVGb3JtYXQvZm9ybWF0VG9QYXJ0cwogICAgICAgKiBAcGFyYW0gb3B0cyB7T2JqZWN0fSAtIEludGwuRGF0ZVRpbWVGb3JtYXQgY29uc3RydWN0b3Igb3B0aW9ucywgc2FtZSBhcyBgdG9Mb2NhbGVTdHJpbmdgLgogICAgICAgKiBAZXhhbXBsZSBEYXRlVGltZS5ub3coKS50b0xvY2FsZVBhcnRzKCk7IC8vPT4gWwogICAgICAgKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy89PiAgIHsgdHlwZTogJ2RheScsIHZhbHVlOiAnMjUnIH0sCiAgICAgICAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLz0+ICAgeyB0eXBlOiAnbGl0ZXJhbCcsIHZhbHVlOiAnLycgfSwKICAgICAgICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vPT4gICB7IHR5cGU6ICdtb250aCcsIHZhbHVlOiAnMDUnIH0sCiAgICAgICAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLz0+ICAgeyB0eXBlOiAnbGl0ZXJhbCcsIHZhbHVlOiAnLycgfSwKICAgICAgICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vPT4gICB7IHR5cGU6ICd5ZWFyJywgdmFsdWU6ICcxOTgyJyB9CiAgICAgICAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLz0+IF0KICAgICAgICovCiAgICAgIDsKCiAgICAgIF9wcm90by50b0xvY2FsZVBhcnRzID0gZnVuY3Rpb24gdG9Mb2NhbGVQYXJ0cyhvcHRzKSB7CiAgICAgICAgaWYgKG9wdHMgPT09IHZvaWQgMCkgewogICAgICAgICAgb3B0cyA9IHt9OwogICAgICAgIH0KCiAgICAgICAgcmV0dXJuIHRoaXMuaXNWYWxpZCA/IEZvcm1hdHRlci5jcmVhdGUodGhpcy5sb2MuY2xvbmUob3B0cyksIG9wdHMpLmZvcm1hdERhdGVUaW1lUGFydHModGhpcykgOiBbXTsKICAgICAgfQogICAgICAvKioKICAgICAgICogUmV0dXJucyBhbiBJU08gODYwMS1jb21wbGlhbnQgc3RyaW5nIHJlcHJlc2VudGF0aW9uIG9mIHRoaXMgRGF0ZVRpbWUKICAgICAgICogQHBhcmFtIHtPYmplY3R9IG9wdHMgLSBvcHRpb25zCiAgICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gW29wdHMuc3VwcHJlc3NNaWxsaXNlY29uZHM9ZmFsc2VdIC0gZXhjbHVkZSBtaWxsaXNlY29uZHMgZnJvbSB0aGUgZm9ybWF0IGlmIHRoZXkncmUgMAogICAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IFtvcHRzLnN1cHByZXNzU2Vjb25kcz1mYWxzZV0gLSBleGNsdWRlIHNlY29uZHMgZnJvbSB0aGUgZm9ybWF0IGlmIHRoZXkncmUgMAogICAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IFtvcHRzLmluY2x1ZGVPZmZzZXQ9dHJ1ZV0gLSBpbmNsdWRlIHRoZSBvZmZzZXQsIHN1Y2ggYXMgJ1onIG9yICctMDQ6MDAnCiAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBbb3B0cy5mb3JtYXQ9J2V4dGVuZGVkJ10gLSBjaG9vc2UgYmV0d2VlbiB0aGUgYmFzaWMgYW5kIGV4dGVuZGVkIGZvcm1hdAogICAgICAgKiBAZXhhbXBsZSBEYXRlVGltZS51dGMoMTk4MiwgNSwgMjUpLnRvSVNPKCkgLy89PiAnMTk4Mi0wNS0yNVQwMDowMDowMC4wMDBaJwogICAgICAgKiBAZXhhbXBsZSBEYXRlVGltZS5ub3coKS50b0lTTygpIC8vPT4gJzIwMTctMDQtMjJUMjA6NDc6MDUuMzM1LTA0OjAwJwogICAgICAgKiBAZXhhbXBsZSBEYXRlVGltZS5ub3coKS50b0lTTyh7IGluY2x1ZGVPZmZzZXQ6IGZhbHNlIH0pIC8vPT4gJzIwMTctMDQtMjJUMjA6NDc6MDUuMzM1JwogICAgICAgKiBAZXhhbXBsZSBEYXRlVGltZS5ub3coKS50b0lTTyh7IGZvcm1hdDogJ2Jhc2ljJyB9KSAvLz0+ICcyMDE3MDQyMlQyMDQ3MDUuMzM1LTA0MDAnCiAgICAgICAqIEByZXR1cm4ge3N0cmluZ30KICAgICAgICovCiAgICAgIDsKCiAgICAgIF9wcm90by50b0lTTyA9IGZ1bmN0aW9uIHRvSVNPKG9wdHMpIHsKICAgICAgICBpZiAob3B0cyA9PT0gdm9pZCAwKSB7CiAgICAgICAgICBvcHRzID0ge307CiAgICAgICAgfQoKICAgICAgICBpZiAoIXRoaXMuaXNWYWxpZCkgewogICAgICAgICAgcmV0dXJuIG51bGw7CiAgICAgICAgfQoKICAgICAgICByZXR1cm4gdGhpcy50b0lTT0RhdGUob3B0cykgKyAiVCIgKyB0aGlzLnRvSVNPVGltZShvcHRzKTsKICAgICAgfQogICAgICAvKioKICAgICAgICogUmV0dXJucyBhbiBJU08gODYwMS1jb21wbGlhbnQgc3RyaW5nIHJlcHJlc2VudGF0aW9uIG9mIHRoaXMgRGF0ZVRpbWUncyBkYXRlIGNvbXBvbmVudAogICAgICAgKiBAcGFyYW0ge09iamVjdH0gb3B0cyAtIG9wdGlvbnMKICAgICAgICogQHBhcmFtIHtzdHJpbmd9IFtvcHRzLmZvcm1hdD0nZXh0ZW5kZWQnXSAtIGNob29zZSBiZXR3ZWVuIHRoZSBiYXNpYyBhbmQgZXh0ZW5kZWQgZm9ybWF0CiAgICAgICAqIEBleGFtcGxlIERhdGVUaW1lLnV0YygxOTgyLCA1LCAyNSkudG9JU09EYXRlKCkgLy89PiAnMTk4Mi0wNS0yNScKICAgICAgICogQGV4YW1wbGUgRGF0ZVRpbWUudXRjKDE5ODIsIDUsIDI1KS50b0lTT0RhdGUoeyBmb3JtYXQ6ICdiYXNpYycgfSkgLy89PiAnMTk4MjA1MjUnCiAgICAgICAqIEByZXR1cm4ge3N0cmluZ30KICAgICAgICovCiAgICAgIDsKCiAgICAgIF9wcm90by50b0lTT0RhdGUgPSBmdW5jdGlvbiB0b0lTT0RhdGUoX3RlbXAzKSB7CiAgICAgICAgdmFyIF9yZWY1ID0gX3RlbXAzID09PSB2b2lkIDAgPyB7fSA6IF90ZW1wMywKICAgICAgICAgICAgX3JlZjUkZm9ybWF0ID0gX3JlZjUuZm9ybWF0LAogICAgICAgICAgICBmb3JtYXQgPSBfcmVmNSRmb3JtYXQgPT09IHZvaWQgMCA/ICJleHRlbmRlZCIgOiBfcmVmNSRmb3JtYXQ7CgogICAgICAgIHZhciBmbXQgPSBmb3JtYXQgPT09ICJiYXNpYyIgPyAieXl5eU1NZGQiIDogInl5eXktTU0tZGQiOwoKICAgICAgICBpZiAodGhpcy55ZWFyID4gOTk5OSkgewogICAgICAgICAgZm10ID0gIisiICsgZm10OwogICAgICAgIH0KCiAgICAgICAgcmV0dXJuIHRvVGVjaEZvcm1hdCh0aGlzLCBmbXQpOwogICAgICB9CiAgICAgIC8qKgogICAgICAgKiBSZXR1cm5zIGFuIElTTyA4NjAxLWNvbXBsaWFudCBzdHJpbmcgcmVwcmVzZW50YXRpb24gb2YgdGhpcyBEYXRlVGltZSdzIHdlZWsgZGF0ZQogICAgICAgKiBAZXhhbXBsZSBEYXRlVGltZS51dGMoMTk4MiwgNSwgMjUpLnRvSVNPV2Vla0RhdGUoKSAvLz0+ICcxOTgyLVcyMS0yJwogICAgICAgKiBAcmV0dXJuIHtzdHJpbmd9CiAgICAgICAqLwogICAgICA7CgogICAgICBfcHJvdG8udG9JU09XZWVrRGF0ZSA9IGZ1bmN0aW9uIHRvSVNPV2Vla0RhdGUoKSB7CiAgICAgICAgcmV0dXJuIHRvVGVjaEZvcm1hdCh0aGlzLCAia2tray0nVydXVy1jIik7CiAgICAgIH0KICAgICAgLyoqCiAgICAgICAqIFJldHVybnMgYW4gSVNPIDg2MDEtY29tcGxpYW50IHN0cmluZyByZXByZXNlbnRhdGlvbiBvZiB0aGlzIERhdGVUaW1lJ3MgdGltZSBjb21wb25lbnQKICAgICAgICogQHBhcmFtIHtPYmplY3R9IG9wdHMgLSBvcHRpb25zCiAgICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gW29wdHMuc3VwcHJlc3NNaWxsaXNlY29uZHM9ZmFsc2VdIC0gZXhjbHVkZSBtaWxsaXNlY29uZHMgZnJvbSB0aGUgZm9ybWF0IGlmIHRoZXkncmUgMAogICAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IFtvcHRzLnN1cHByZXNzU2Vjb25kcz1mYWxzZV0gLSBleGNsdWRlIHNlY29uZHMgZnJvbSB0aGUgZm9ybWF0IGlmIHRoZXkncmUgMAogICAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IFtvcHRzLmluY2x1ZGVPZmZzZXQ9dHJ1ZV0gLSBpbmNsdWRlIHRoZSBvZmZzZXQsIHN1Y2ggYXMgJ1onIG9yICctMDQ6MDAnCiAgICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gW29wdHMuaW5jbHVkZVByZWZpeD1mYWxzZV0gLSBpbmNsdWRlIHRoZSBgVGAgcHJlZml4CiAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBbb3B0cy5mb3JtYXQ9J2V4dGVuZGVkJ10gLSBjaG9vc2UgYmV0d2VlbiB0aGUgYmFzaWMgYW5kIGV4dGVuZGVkIGZvcm1hdAogICAgICAgKiBAZXhhbXBsZSBEYXRlVGltZS51dGMoKS5zZXQoeyBob3VyOiA3LCBtaW51dGU6IDM0IH0pLnRvSVNPVGltZSgpIC8vPT4gJzA3OjM0OjE5LjM2MVonCiAgICAgICAqIEBleGFtcGxlIERhdGVUaW1lLnV0YygpLnNldCh7IGhvdXI6IDcsIG1pbnV0ZTogMzQsIHNlY29uZHM6IDAsIG1pbGxpc2Vjb25kczogMCB9KS50b0lTT1RpbWUoeyBzdXBwcmVzc1NlY29uZHM6IHRydWUgfSkgLy89PiAnMDc6MzRaJwogICAgICAgKiBAZXhhbXBsZSBEYXRlVGltZS51dGMoKS5zZXQoeyBob3VyOiA3LCBtaW51dGU6IDM0IH0pLnRvSVNPVGltZSh7IGZvcm1hdDogJ2Jhc2ljJyB9KSAvLz0+ICcwNzM0MTkuMzYxWicKICAgICAgICogQGV4YW1wbGUgRGF0ZVRpbWUudXRjKCkuc2V0KHsgaG91cjogNywgbWludXRlOiAzNCB9KS50b0lTT1RpbWUoeyBpbmNsdWRlUHJlZml4OiB0cnVlIH0pIC8vPT4gJ1QwNzozNDoxOS4zNjFaJwogICAgICAgKiBAcmV0dXJuIHtzdHJpbmd9CiAgICAgICAqLwogICAgICA7CgogICAgICBfcHJvdG8udG9JU09UaW1lID0gZnVuY3Rpb24gdG9JU09UaW1lKF90ZW1wNCkgewogICAgICAgIHZhciBfcmVmNiA9IF90ZW1wNCA9PT0gdm9pZCAwID8ge30gOiBfdGVtcDQsCiAgICAgICAgICAgIF9yZWY2JHN1cHByZXNzTWlsbGlzZSA9IF9yZWY2LnN1cHByZXNzTWlsbGlzZWNvbmRzLAogICAgICAgICAgICBzdXBwcmVzc01pbGxpc2Vjb25kcyA9IF9yZWY2JHN1cHByZXNzTWlsbGlzZSA9PT0gdm9pZCAwID8gZmFsc2UgOiBfcmVmNiRzdXBwcmVzc01pbGxpc2UsCiAgICAgICAgICAgIF9yZWY2JHN1cHByZXNzU2Vjb25kcyA9IF9yZWY2LnN1cHByZXNzU2Vjb25kcywKICAgICAgICAgICAgc3VwcHJlc3NTZWNvbmRzID0gX3JlZjYkc3VwcHJlc3NTZWNvbmRzID09PSB2b2lkIDAgPyBmYWxzZSA6IF9yZWY2JHN1cHByZXNzU2Vjb25kcywKICAgICAgICAgICAgX3JlZjYkaW5jbHVkZU9mZnNldCA9IF9yZWY2LmluY2x1ZGVPZmZzZXQsCiAgICAgICAgICAgIGluY2x1ZGVPZmZzZXQgPSBfcmVmNiRpbmNsdWRlT2Zmc2V0ID09PSB2b2lkIDAgPyB0cnVlIDogX3JlZjYkaW5jbHVkZU9mZnNldCwKICAgICAgICAgICAgX3JlZjYkaW5jbHVkZVByZWZpeCA9IF9yZWY2LmluY2x1ZGVQcmVmaXgsCiAgICAgICAgICAgIGluY2x1ZGVQcmVmaXggPSBfcmVmNiRpbmNsdWRlUHJlZml4ID09PSB2b2lkIDAgPyBmYWxzZSA6IF9yZWY2JGluY2x1ZGVQcmVmaXgsCiAgICAgICAgICAgIF9yZWY2JGZvcm1hdCA9IF9yZWY2LmZvcm1hdCwKICAgICAgICAgICAgZm9ybWF0ID0gX3JlZjYkZm9ybWF0ID09PSB2b2lkIDAgPyAiZXh0ZW5kZWQiIDogX3JlZjYkZm9ybWF0OwoKICAgICAgICByZXR1cm4gdG9UZWNoVGltZUZvcm1hdCh0aGlzLCB7CiAgICAgICAgICBzdXBwcmVzc1NlY29uZHM6IHN1cHByZXNzU2Vjb25kcywKICAgICAgICAgIHN1cHByZXNzTWlsbGlzZWNvbmRzOiBzdXBwcmVzc01pbGxpc2Vjb25kcywKICAgICAgICAgIGluY2x1ZGVPZmZzZXQ6IGluY2x1ZGVPZmZzZXQsCiAgICAgICAgICBpbmNsdWRlUHJlZml4OiBpbmNsdWRlUHJlZml4LAogICAgICAgICAgZm9ybWF0OiBmb3JtYXQKICAgICAgICB9KTsKICAgICAgfQogICAgICAvKioKICAgICAgICogUmV0dXJucyBhbiBSRkMgMjgyMi1jb21wYXRpYmxlIHN0cmluZyByZXByZXNlbnRhdGlvbiBvZiB0aGlzIERhdGVUaW1lLCBhbHdheXMgaW4gVVRDCiAgICAgICAqIEBleGFtcGxlIERhdGVUaW1lLnV0YygyMDE0LCA3LCAxMykudG9SRkMyODIyKCkgLy89PiAnU3VuLCAxMyBKdWwgMjAxNCAwMDowMDowMCArMDAwMCcKICAgICAgICogQGV4YW1wbGUgRGF0ZVRpbWUubG9jYWwoMjAxNCwgNywgMTMpLnRvUkZDMjgyMigpIC8vPT4gJ1N1biwgMTMgSnVsIDIwMTQgMDA6MDA6MDAgLTA0MDAnCiAgICAgICAqIEByZXR1cm4ge3N0cmluZ30KICAgICAgICovCiAgICAgIDsKCiAgICAgIF9wcm90by50b1JGQzI4MjIgPSBmdW5jdGlvbiB0b1JGQzI4MjIoKSB7CiAgICAgICAgcmV0dXJuIHRvVGVjaEZvcm1hdCh0aGlzLCAiRUVFLCBkZCBMTEwgeXl5eSBISDptbTpzcyBaWloiLCBmYWxzZSk7CiAgICAgIH0KICAgICAgLyoqCiAgICAgICAqIFJldHVybnMgYSBzdHJpbmcgcmVwcmVzZW50YXRpb24gb2YgdGhpcyBEYXRlVGltZSBhcHByb3ByaWF0ZSBmb3IgdXNlIGluIEhUVFAgaGVhZGVycy4KICAgICAgICogU3BlY2lmaWNhbGx5LCB0aGUgc3RyaW5nIGNvbmZvcm1zIHRvIFJGQyAxMTIzLgogICAgICAgKiBAc2VlIGh0dHBzOi8vd3d3LnczLm9yZy9Qcm90b2NvbHMvcmZjMjYxNi9yZmMyNjE2LXNlYzMuaHRtbCNzZWMzLjMuMQogICAgICAgKiBAZXhhbXBsZSBEYXRlVGltZS51dGMoMjAxNCwgNywgMTMpLnRvSFRUUCgpIC8vPT4gJ1N1biwgMTMgSnVsIDIwMTQgMDA6MDA6MDAgR01UJwogICAgICAgKiBAZXhhbXBsZSBEYXRlVGltZS51dGMoMjAxNCwgNywgMTMsIDE5KS50b0hUVFAoKSAvLz0+ICdTdW4sIDEzIEp1bCAyMDE0IDE5OjAwOjAwIEdNVCcKICAgICAgICogQHJldHVybiB7c3RyaW5nfQogICAgICAgKi8KICAgICAgOwoKICAgICAgX3Byb3RvLnRvSFRUUCA9IGZ1bmN0aW9uIHRvSFRUUCgpIHsKICAgICAgICByZXR1cm4gdG9UZWNoRm9ybWF0KHRoaXMudG9VVEMoKSwgIkVFRSwgZGQgTExMIHl5eXkgSEg6bW06c3MgJ0dNVCciKTsKICAgICAgfQogICAgICAvKioKICAgICAgICogUmV0dXJucyBhIHN0cmluZyByZXByZXNlbnRhdGlvbiBvZiB0aGlzIERhdGVUaW1lIGFwcHJvcHJpYXRlIGZvciB1c2UgaW4gU1FMIERhdGUKICAgICAgICogQGV4YW1wbGUgRGF0ZVRpbWUudXRjKDIwMTQsIDcsIDEzKS50b1NRTERhdGUoKSAvLz0+ICcyMDE0LTA3LTEzJwogICAgICAgKiBAcmV0dXJuIHtzdHJpbmd9CiAgICAgICAqLwogICAgICA7CgogICAgICBfcHJvdG8udG9TUUxEYXRlID0gZnVuY3Rpb24gdG9TUUxEYXRlKCkgewogICAgICAgIHJldHVybiB0b1RlY2hGb3JtYXQodGhpcywgInl5eXktTU0tZGQiKTsKICAgICAgfQogICAgICAvKioKICAgICAgICogUmV0dXJucyBhIHN0cmluZyByZXByZXNlbnRhdGlvbiBvZiB0aGlzIERhdGVUaW1lIGFwcHJvcHJpYXRlIGZvciB1c2UgaW4gU1FMIFRpbWUKICAgICAgICogQHBhcmFtIHtPYmplY3R9IG9wdHMgLSBvcHRpb25zCiAgICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gW29wdHMuaW5jbHVkZVpvbmU9ZmFsc2VdIC0gaW5jbHVkZSB0aGUgem9uZSwgc3VjaCBhcyAnQW1lcmljYS9OZXdfWW9yaycuIE92ZXJyaWRlcyBpbmNsdWRlT2Zmc2V0LgogICAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IFtvcHRzLmluY2x1ZGVPZmZzZXQ9dHJ1ZV0gLSBpbmNsdWRlIHRoZSBvZmZzZXQsIHN1Y2ggYXMgJ1onIG9yICctMDQ6MDAnCiAgICAgICAqIEBleGFtcGxlIERhdGVUaW1lLnV0YygpLnRvU1FMKCkgLy89PiAnMDU6MTU6MTYuMzQ1JwogICAgICAgKiBAZXhhbXBsZSBEYXRlVGltZS5ub3coKS50b1NRTCgpIC8vPT4gJzA1OjE1OjE2LjM0NSAtMDQ6MDAnCiAgICAgICAqIEBleGFtcGxlIERhdGVUaW1lLm5vdygpLnRvU1FMKHsgaW5jbHVkZU9mZnNldDogZmFsc2UgfSkgLy89PiAnMDU6MTU6MTYuMzQ1JwogICAgICAgKiBAZXhhbXBsZSBEYXRlVGltZS5ub3coKS50b1NRTCh7IGluY2x1ZGVab25lOiBmYWxzZSB9KSAvLz0+ICcwNToxNToxNi4zNDUgQW1lcmljYS9OZXdfWW9yaycKICAgICAgICogQHJldHVybiB7c3RyaW5nfQogICAgICAgKi8KICAgICAgOwoKICAgICAgX3Byb3RvLnRvU1FMVGltZSA9IGZ1bmN0aW9uIHRvU1FMVGltZShfdGVtcDUpIHsKICAgICAgICB2YXIgX3JlZjcgPSBfdGVtcDUgPT09IHZvaWQgMCA/IHt9IDogX3RlbXA1LAogICAgICAgICAgICBfcmVmNyRpbmNsdWRlT2Zmc2V0ID0gX3JlZjcuaW5jbHVkZU9mZnNldCwKICAgICAgICAgICAgaW5jbHVkZU9mZnNldCA9IF9yZWY3JGluY2x1ZGVPZmZzZXQgPT09IHZvaWQgMCA/IHRydWUgOiBfcmVmNyRpbmNsdWRlT2Zmc2V0LAogICAgICAgICAgICBfcmVmNyRpbmNsdWRlWm9uZSA9IF9yZWY3LmluY2x1ZGVab25lLAogICAgICAgICAgICBpbmNsdWRlWm9uZSA9IF9yZWY3JGluY2x1ZGVab25lID09PSB2b2lkIDAgPyBmYWxzZSA6IF9yZWY3JGluY2x1ZGVab25lOwoKICAgICAgICByZXR1cm4gdG9UZWNoVGltZUZvcm1hdCh0aGlzLCB7CiAgICAgICAgICBpbmNsdWRlT2Zmc2V0OiBpbmNsdWRlT2Zmc2V0LAogICAgICAgICAgaW5jbHVkZVpvbmU6IGluY2x1ZGVab25lLAogICAgICAgICAgc3BhY2Vab25lOiB0cnVlCiAgICAgICAgfSk7CiAgICAgIH0KICAgICAgLyoqCiAgICAgICAqIFJldHVybnMgYSBzdHJpbmcgcmVwcmVzZW50YXRpb24gb2YgdGhpcyBEYXRlVGltZSBhcHByb3ByaWF0ZSBmb3IgdXNlIGluIFNRTCBEYXRlVGltZQogICAgICAgKiBAcGFyYW0ge09iamVjdH0gb3B0cyAtIG9wdGlvbnMKICAgICAgICogQHBhcmFtIHtib29sZWFufSBbb3B0cy5pbmNsdWRlWm9uZT1mYWxzZV0gLSBpbmNsdWRlIHRoZSB6b25lLCBzdWNoIGFzICdBbWVyaWNhL05ld19Zb3JrJy4gT3ZlcnJpZGVzIGluY2x1ZGVPZmZzZXQuCiAgICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gW29wdHMuaW5jbHVkZU9mZnNldD10cnVlXSAtIGluY2x1ZGUgdGhlIG9mZnNldCwgc3VjaCBhcyAnWicgb3IgJy0wNDowMCcKICAgICAgICogQGV4YW1wbGUgRGF0ZVRpbWUudXRjKDIwMTQsIDcsIDEzKS50b1NRTCgpIC8vPT4gJzIwMTQtMDctMTMgMDA6MDA6MDAuMDAwIFonCiAgICAgICAqIEBleGFtcGxlIERhdGVUaW1lLmxvY2FsKDIwMTQsIDcsIDEzKS50b1NRTCgpIC8vPT4gJzIwMTQtMDctMTMgMDA6MDA6MDAuMDAwIC0wNDowMCcKICAgICAgICogQGV4YW1wbGUgRGF0ZVRpbWUubG9jYWwoMjAxNCwgNywgMTMpLnRvU1FMKHsgaW5jbHVkZU9mZnNldDogZmFsc2UgfSkgLy89PiAnMjAxNC0wNy0xMyAwMDowMDowMC4wMDAnCiAgICAgICAqIEBleGFtcGxlIERhdGVUaW1lLmxvY2FsKDIwMTQsIDcsIDEzKS50b1NRTCh7IGluY2x1ZGVab25lOiB0cnVlIH0pIC8vPT4gJzIwMTQtMDctMTMgMDA6MDA6MDAuMDAwIEFtZXJpY2EvTmV3X1lvcmsnCiAgICAgICAqIEByZXR1cm4ge3N0cmluZ30KICAgICAgICovCiAgICAgIDsKCiAgICAgIF9wcm90by50b1NRTCA9IGZ1bmN0aW9uIHRvU1FMKG9wdHMpIHsKICAgICAgICBpZiAob3B0cyA9PT0gdm9pZCAwKSB7CiAgICAgICAgICBvcHRzID0ge307CiAgICAgICAgfQoKICAgICAgICBpZiAoIXRoaXMuaXNWYWxpZCkgewogICAgICAgICAgcmV0dXJuIG51bGw7CiAgICAgICAgfQoKICAgICAgICByZXR1cm4gdGhpcy50b1NRTERhdGUoKSArICIgIiArIHRoaXMudG9TUUxUaW1lKG9wdHMpOwogICAgICB9CiAgICAgIC8qKgogICAgICAgKiBSZXR1cm5zIGEgc3RyaW5nIHJlcHJlc2VudGF0aW9uIG9mIHRoaXMgRGF0ZVRpbWUgYXBwcm9wcmlhdGUgZm9yIGRlYnVnZ2luZwogICAgICAgKiBAcmV0dXJuIHtzdHJpbmd9CiAgICAgICAqLwogICAgICA7CgogICAgICBfcHJvdG8udG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHsKICAgICAgICByZXR1cm4gdGhpcy5pc1ZhbGlkID8gdGhpcy50b0lTTygpIDogSU5WQUxJRCQyOwogICAgICB9CiAgICAgIC8qKgogICAgICAgKiBSZXR1cm5zIHRoZSBlcG9jaCBtaWxsaXNlY29uZHMgb2YgdGhpcyBEYXRlVGltZS4gQWxpYXMgb2Yge0BsaW5rIHRvTWlsbGlzfQogICAgICAgKiBAcmV0dXJuIHtudW1iZXJ9CiAgICAgICAqLwogICAgICA7CgogICAgICBfcHJvdG8udmFsdWVPZiA9IGZ1bmN0aW9uIHZhbHVlT2YoKSB7CiAgICAgICAgcmV0dXJuIHRoaXMudG9NaWxsaXMoKTsKICAgICAgfQogICAgICAvKioKICAgICAgICogUmV0dXJucyB0aGUgZXBvY2ggbWlsbGlzZWNvbmRzIG9mIHRoaXMgRGF0ZVRpbWUuCiAgICAgICAqIEByZXR1cm4ge251bWJlcn0KICAgICAgICovCiAgICAgIDsKCiAgICAgIF9wcm90by50b01pbGxpcyA9IGZ1bmN0aW9uIHRvTWlsbGlzKCkgewogICAgICAgIHJldHVybiB0aGlzLmlzVmFsaWQgPyB0aGlzLnRzIDogTmFOOwogICAgICB9CiAgICAgIC8qKgogICAgICAgKiBSZXR1cm5zIHRoZSBlcG9jaCBzZWNvbmRzIG9mIHRoaXMgRGF0ZVRpbWUuCiAgICAgICAqIEByZXR1cm4ge251bWJlcn0KICAgICAgICovCiAgICAgIDsKCiAgICAgIF9wcm90by50b1NlY29uZHMgPSBmdW5jdGlvbiB0b1NlY29uZHMoKSB7CiAgICAgICAgcmV0dXJuIHRoaXMuaXNWYWxpZCA/IHRoaXMudHMgLyAxMDAwIDogTmFOOwogICAgICB9CiAgICAgIC8qKgogICAgICAgKiBSZXR1cm5zIGFuIElTTyA4NjAxIHJlcHJlc2VudGF0aW9uIG9mIHRoaXMgRGF0ZVRpbWUgYXBwcm9wcmlhdGUgZm9yIHVzZSBpbiBKU09OLgogICAgICAgKiBAcmV0dXJuIHtzdHJpbmd9CiAgICAgICAqLwogICAgICA7CgogICAgICBfcHJvdG8udG9KU09OID0gZnVuY3Rpb24gdG9KU09OKCkgewogICAgICAgIHJldHVybiB0aGlzLnRvSVNPKCk7CiAgICAgIH0KICAgICAgLyoqCiAgICAgICAqIFJldHVybnMgYSBCU09OIHNlcmlhbGl6YWJsZSBlcXVpdmFsZW50IHRvIHRoaXMgRGF0ZVRpbWUuCiAgICAgICAqIEByZXR1cm4ge0RhdGV9CiAgICAgICAqLwogICAgICA7CgogICAgICBfcHJvdG8udG9CU09OID0gZnVuY3Rpb24gdG9CU09OKCkgewogICAgICAgIHJldHVybiB0aGlzLnRvSlNEYXRlKCk7CiAgICAgIH0KICAgICAgLyoqCiAgICAgICAqIFJldHVybnMgYSBKYXZhU2NyaXB0IG9iamVjdCB3aXRoIHRoaXMgRGF0ZVRpbWUncyB5ZWFyLCBtb250aCwgZGF5LCBhbmQgc28gb24uCiAgICAgICAqIEBwYXJhbSBvcHRzIC0gb3B0aW9ucyBmb3IgZ2VuZXJhdGluZyB0aGUgb2JqZWN0CiAgICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gW29wdHMuaW5jbHVkZUNvbmZpZz1mYWxzZV0gLSBpbmNsdWRlIGNvbmZpZ3VyYXRpb24gYXR0cmlidXRlcyBpbiB0aGUgb3V0cHV0CiAgICAgICAqIEBleGFtcGxlIERhdGVUaW1lLm5vdygpLnRvT2JqZWN0KCkgLy89PiB7IHllYXI6IDIwMTcsIG1vbnRoOiA0LCBkYXk6IDIyLCBob3VyOiAyMCwgbWludXRlOiA0OSwgc2Vjb25kOiA0MiwgbWlsbGlzZWNvbmQ6IDI2OCB9CiAgICAgICAqIEByZXR1cm4ge09iamVjdH0KICAgICAgICovCiAgICAgIDsKCiAgICAgIF9wcm90by50b09iamVjdCA9IGZ1bmN0aW9uIHRvT2JqZWN0KG9wdHMpIHsKICAgICAgICBpZiAob3B0cyA9PT0gdm9pZCAwKSB7CiAgICAgICAgICBvcHRzID0ge307CiAgICAgICAgfQoKICAgICAgICBpZiAoIXRoaXMuaXNWYWxpZCkgcmV0dXJuIHt9OwogICAgICAgIHZhciBiYXNlID0gT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5jKTsKCiAgICAgICAgaWYgKG9wdHMuaW5jbHVkZUNvbmZpZykgewogICAgICAgICAgYmFzZS5vdXRwdXRDYWxlbmRhciA9IHRoaXMub3V0cHV0Q2FsZW5kYXI7CiAgICAgICAgICBiYXNlLm51bWJlcmluZ1N5c3RlbSA9IHRoaXMubG9jLm51bWJlcmluZ1N5c3RlbTsKICAgICAgICAgIGJhc2UubG9jYWxlID0gdGhpcy5sb2MubG9jYWxlOwogICAgICAgIH0KCiAgICAgICAgcmV0dXJuIGJhc2U7CiAgICAgIH0KICAgICAgLyoqCiAgICAgICAqIFJldHVybnMgYSBKYXZhU2NyaXB0IERhdGUgZXF1aXZhbGVudCB0byB0aGlzIERhdGVUaW1lLgogICAgICAgKiBAcmV0dXJuIHtEYXRlfQogICAgICAgKi8KICAgICAgOwoKICAgICAgX3Byb3RvLnRvSlNEYXRlID0gZnVuY3Rpb24gdG9KU0RhdGUoKSB7CiAgICAgICAgcmV0dXJuIG5ldyBEYXRlKHRoaXMuaXNWYWxpZCA/IHRoaXMudHMgOiBOYU4pOwogICAgICB9IC8vIENPTVBBUkUKCiAgICAgIC8qKgogICAgICAgKiBSZXR1cm4gdGhlIGRpZmZlcmVuY2UgYmV0d2VlbiB0d28gRGF0ZVRpbWVzIGFzIGEgRHVyYXRpb24uCiAgICAgICAqIEBwYXJhbSB7RGF0ZVRpbWV9IG90aGVyRGF0ZVRpbWUgLSB0aGUgRGF0ZVRpbWUgdG8gY29tcGFyZSB0aGlzIG9uZSB0bwogICAgICAgKiBAcGFyYW0ge3N0cmluZ3xzdHJpbmdbXX0gW3VuaXQ9WydtaWxsaXNlY29uZHMnXV0gLSB0aGUgdW5pdCBvciBhcnJheSBvZiB1bml0cyAoc3VjaCBhcyAnaG91cnMnIG9yICdkYXlzJykgdG8gaW5jbHVkZSBpbiB0aGUgZHVyYXRpb24uCiAgICAgICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRzIC0gb3B0aW9ucyB0aGF0IGFmZmVjdCB0aGUgY3JlYXRpb24gb2YgdGhlIER1cmF0aW9uCiAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBbb3B0cy5jb252ZXJzaW9uQWNjdXJhY3k9J2Nhc3VhbCddIC0gdGhlIGNvbnZlcnNpb24gc3lzdGVtIHRvIHVzZQogICAgICAgKiBAZXhhbXBsZQogICAgICAgKiB2YXIgaTEgPSBEYXRlVGltZS5mcm9tSVNPKCcxOTgyLTA1LTI1VDA5OjQ1JyksCiAgICAgICAqICAgICBpMiA9IERhdGVUaW1lLmZyb21JU08oJzE5ODMtMTAtMTRUMTA6MzAnKTsKICAgICAgICogaTIuZGlmZihpMSkudG9PYmplY3QoKSAvLz0+IHsgbWlsbGlzZWNvbmRzOiA0MzgwNzUwMDAwMCB9CiAgICAgICAqIGkyLmRpZmYoaTEsICdob3VycycpLnRvT2JqZWN0KCkgLy89PiB7IGhvdXJzOiAxMjE2OC43NSB9CiAgICAgICAqIGkyLmRpZmYoaTEsIFsnbW9udGhzJywgJ2RheXMnXSkudG9PYmplY3QoKSAvLz0+IHsgbW9udGhzOiAxNiwgZGF5czogMTkuMDMxMjUgfQogICAgICAgKiBpMi5kaWZmKGkxLCBbJ21vbnRocycsICdkYXlzJywgJ2hvdXJzJ10pLnRvT2JqZWN0KCkgLy89PiB7IG1vbnRoczogMTYsIGRheXM6IDE5LCBob3VyczogMC43NSB9CiAgICAgICAqIEByZXR1cm4ge0R1cmF0aW9ufQogICAgICAgKi8KICAgICAgOwoKICAgICAgX3Byb3RvLmRpZmYgPSBmdW5jdGlvbiBkaWZmKG90aGVyRGF0ZVRpbWUsIHVuaXQsIG9wdHMpIHsKICAgICAgICBpZiAodW5pdCA9PT0gdm9pZCAwKSB7CiAgICAgICAgICB1bml0ID0gIm1pbGxpc2Vjb25kcyI7CiAgICAgICAgfQoKICAgICAgICBpZiAob3B0cyA9PT0gdm9pZCAwKSB7CiAgICAgICAgICBvcHRzID0ge307CiAgICAgICAgfQoKICAgICAgICBpZiAoIXRoaXMuaXNWYWxpZCB8fCAhb3RoZXJEYXRlVGltZS5pc1ZhbGlkKSB7CiAgICAgICAgICByZXR1cm4gRHVyYXRpb24uaW52YWxpZCh0aGlzLmludmFsaWQgfHwgb3RoZXJEYXRlVGltZS5pbnZhbGlkLCAiY3JlYXRlZCBieSBkaWZmaW5nIGFuIGludmFsaWQgRGF0ZVRpbWUiKTsKICAgICAgICB9CgogICAgICAgIHZhciBkdXJPcHRzID0gT2JqZWN0LmFzc2lnbih7CiAgICAgICAgICBsb2NhbGU6IHRoaXMubG9jYWxlLAogICAgICAgICAgbnVtYmVyaW5nU3lzdGVtOiB0aGlzLm51bWJlcmluZ1N5c3RlbQogICAgICAgIH0sIG9wdHMpOwoKICAgICAgICB2YXIgdW5pdHMgPSBtYXliZUFycmF5KHVuaXQpLm1hcChEdXJhdGlvbi5ub3JtYWxpemVVbml0KSwKICAgICAgICAgICAgb3RoZXJJc0xhdGVyID0gb3RoZXJEYXRlVGltZS52YWx1ZU9mKCkgPiB0aGlzLnZhbHVlT2YoKSwKICAgICAgICAgICAgZWFybGllciA9IG90aGVySXNMYXRlciA/IHRoaXMgOiBvdGhlckRhdGVUaW1lLAogICAgICAgICAgICBsYXRlciA9IG90aGVySXNMYXRlciA/IG90aGVyRGF0ZVRpbWUgOiB0aGlzLAogICAgICAgICAgICBkaWZmZWQgPSBfZGlmZihlYXJsaWVyLCBsYXRlciwgdW5pdHMsIGR1ck9wdHMpOwoKICAgICAgICByZXR1cm4gb3RoZXJJc0xhdGVyID8gZGlmZmVkLm5lZ2F0ZSgpIDogZGlmZmVkOwogICAgICB9CiAgICAgIC8qKgogICAgICAgKiBSZXR1cm4gdGhlIGRpZmZlcmVuY2UgYmV0d2VlbiB0aGlzIERhdGVUaW1lIGFuZCByaWdodCBub3cuCiAgICAgICAqIFNlZSB7QGxpbmsgZGlmZn0KICAgICAgICogQHBhcmFtIHtzdHJpbmd8c3RyaW5nW119IFt1bml0PVsnbWlsbGlzZWNvbmRzJ11dIC0gdGhlIHVuaXQgb3IgdW5pdHMgdW5pdHMgKHN1Y2ggYXMgJ2hvdXJzJyBvciAnZGF5cycpIHRvIGluY2x1ZGUgaW4gdGhlIGR1cmF0aW9uCiAgICAgICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRzIC0gb3B0aW9ucyB0aGF0IGFmZmVjdCB0aGUgY3JlYXRpb24gb2YgdGhlIER1cmF0aW9uCiAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBbb3B0cy5jb252ZXJzaW9uQWNjdXJhY3k9J2Nhc3VhbCddIC0gdGhlIGNvbnZlcnNpb24gc3lzdGVtIHRvIHVzZQogICAgICAgKiBAcmV0dXJuIHtEdXJhdGlvbn0KICAgICAgICovCiAgICAgIDsKCiAgICAgIF9wcm90by5kaWZmTm93ID0gZnVuY3Rpb24gZGlmZk5vdyh1bml0LCBvcHRzKSB7CiAgICAgICAgaWYgKHVuaXQgPT09IHZvaWQgMCkgewogICAgICAgICAgdW5pdCA9ICJtaWxsaXNlY29uZHMiOwogICAgICAgIH0KCiAgICAgICAgaWYgKG9wdHMgPT09IHZvaWQgMCkgewogICAgICAgICAgb3B0cyA9IHt9OwogICAgICAgIH0KCiAgICAgICAgcmV0dXJuIHRoaXMuZGlmZihEYXRlVGltZS5ub3coKSwgdW5pdCwgb3B0cyk7CiAgICAgIH0KICAgICAgLyoqCiAgICAgICAqIFJldHVybiBhbiBJbnRlcnZhbCBzcGFubmluZyBiZXR3ZWVuIHRoaXMgRGF0ZVRpbWUgYW5kIGFub3RoZXIgRGF0ZVRpbWUKICAgICAgICogQHBhcmFtIHtEYXRlVGltZX0gb3RoZXJEYXRlVGltZSAtIHRoZSBvdGhlciBlbmQgcG9pbnQgb2YgdGhlIEludGVydmFsCiAgICAgICAqIEByZXR1cm4ge0ludGVydmFsfQogICAgICAgKi8KICAgICAgOwoKICAgICAgX3Byb3RvLnVudGlsID0gZnVuY3Rpb24gdW50aWwob3RoZXJEYXRlVGltZSkgewogICAgICAgIHJldHVybiB0aGlzLmlzVmFsaWQgPyBJbnRlcnZhbC5mcm9tRGF0ZVRpbWVzKHRoaXMsIG90aGVyRGF0ZVRpbWUpIDogdGhpczsKICAgICAgfQogICAgICAvKioKICAgICAgICogUmV0dXJuIHdoZXRoZXIgdGhpcyBEYXRlVGltZSBpcyBpbiB0aGUgc2FtZSB1bml0IG9mIHRpbWUgYXMgYW5vdGhlciBEYXRlVGltZS4KICAgICAgICogSGlnaGVyLW9yZGVyIHVuaXRzIG11c3QgYWxzbyBiZSBpZGVudGljYWwgZm9yIHRoaXMgZnVuY3Rpb24gdG8gcmV0dXJuIGB0cnVlYC4KICAgICAgICogTm90ZSB0aGF0IHRpbWUgem9uZXMgYXJlICoqaWdub3JlZCoqIGluIHRoaXMgY29tcGFyaXNvbiwgd2hpY2ggY29tcGFyZXMgdGhlICoqbG9jYWwqKiBjYWxlbmRhciB0aW1lLiBVc2Uge0BsaW5rIHNldFpvbmV9IHRvIGNvbnZlcnQgb25lIG9mIHRoZSBkYXRlcyBpZiBuZWVkZWQuCiAgICAgICAqIEBwYXJhbSB7RGF0ZVRpbWV9IG90aGVyRGF0ZVRpbWUgLSB0aGUgb3RoZXIgRGF0ZVRpbWUKICAgICAgICogQHBhcmFtIHtzdHJpbmd9IHVuaXQgLSB0aGUgdW5pdCBvZiB0aW1lIHRvIGNoZWNrIHNhbWVuZXNzIG9uCiAgICAgICAqIEBleGFtcGxlIERhdGVUaW1lLm5vdygpLmhhc1NhbWUob3RoZXJEVCwgJ2RheScpOyAvL34+IHRydWUgaWYgb3RoZXJEVCBpcyBpbiB0aGUgc2FtZSBjdXJyZW50IGNhbGVuZGFyIGRheQogICAgICAgKiBAcmV0dXJuIHtib29sZWFufQogICAgICAgKi8KICAgICAgOwoKICAgICAgX3Byb3RvLmhhc1NhbWUgPSBmdW5jdGlvbiBoYXNTYW1lKG90aGVyRGF0ZVRpbWUsIHVuaXQpIHsKICAgICAgICBpZiAoIXRoaXMuaXNWYWxpZCkgcmV0dXJuIGZhbHNlOwogICAgICAgIHZhciBpbnB1dE1zID0gb3RoZXJEYXRlVGltZS52YWx1ZU9mKCk7CiAgICAgICAgdmFyIG90aGVyWm9uZURhdGVUaW1lID0gdGhpcy5zZXRab25lKG90aGVyRGF0ZVRpbWUuem9uZSwgewogICAgICAgICAga2VlcExvY2FsVGltZTogdHJ1ZQogICAgICAgIH0pOwogICAgICAgIHJldHVybiBvdGhlclpvbmVEYXRlVGltZS5zdGFydE9mKHVuaXQpIDw9IGlucHV0TXMgJiYgaW5wdXRNcyA8PSBvdGhlclpvbmVEYXRlVGltZS5lbmRPZih1bml0KTsKICAgICAgfQogICAgICAvKioKICAgICAgICogRXF1YWxpdHkgY2hlY2sKICAgICAgICogVHdvIERhdGVUaW1lcyBhcmUgZXF1YWwgaWZmIHRoZXkgcmVwcmVzZW50IHRoZSBzYW1lIG1pbGxpc2Vjb25kLCBoYXZlIHRoZSBzYW1lIHpvbmUgYW5kIGxvY2F0aW9uLCBhbmQgYXJlIGJvdGggdmFsaWQuCiAgICAgICAqIFRvIGNvbXBhcmUganVzdCB0aGUgbWlsbGlzZWNvbmQgdmFsdWVzLCB1c2UgYCtkdDEgPT09ICtkdDJgLgogICAgICAgKiBAcGFyYW0ge0RhdGVUaW1lfSBvdGhlciAtIHRoZSBvdGhlciBEYXRlVGltZQogICAgICAgKiBAcmV0dXJuIHtib29sZWFufQogICAgICAgKi8KICAgICAgOwoKICAgICAgX3Byb3RvLmVxdWFscyA9IGZ1bmN0aW9uIGVxdWFscyhvdGhlcikgewogICAgICAgIHJldHVybiB0aGlzLmlzVmFsaWQgJiYgb3RoZXIuaXNWYWxpZCAmJiB0aGlzLnZhbHVlT2YoKSA9PT0gb3RoZXIudmFsdWVPZigpICYmIHRoaXMuem9uZS5lcXVhbHMob3RoZXIuem9uZSkgJiYgdGhpcy5sb2MuZXF1YWxzKG90aGVyLmxvYyk7CiAgICAgIH0KICAgICAgLyoqCiAgICAgICAqIFJldHVybnMgYSBzdHJpbmcgcmVwcmVzZW50YXRpb24gb2YgYSB0aGlzIHRpbWUgcmVsYXRpdmUgdG8gbm93LCBzdWNoIGFzICJpbiB0d28gZGF5cyIuIENhbiBvbmx5IGludGVybmF0aW9uYWxpemUgaWYgeW91cgogICAgICAgKiBwbGF0Zm9ybSBzdXBwb3J0cyBJbnRsLlJlbGF0aXZlVGltZUZvcm1hdC4gUm91bmRzIGRvd24gYnkgZGVmYXVsdC4KICAgICAgICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnMgLSBvcHRpb25zIHRoYXQgYWZmZWN0IHRoZSBvdXRwdXQKICAgICAgICogQHBhcmFtIHtEYXRlVGltZX0gW29wdGlvbnMuYmFzZT1EYXRlVGltZS5ub3coKV0gLSB0aGUgRGF0ZVRpbWUgdG8gdXNlIGFzIHRoZSBiYXNpcyB0byB3aGljaCB0aGlzIHRpbWUgaXMgY29tcGFyZWQuIERlZmF1bHRzIHRvIG5vdy4KICAgICAgICogQHBhcmFtIHtzdHJpbmd9IFtvcHRpb25zLnN0eWxlPSJsb25nIl0gLSB0aGUgc3R5bGUgb2YgdW5pdHMsIG11c3QgYmUgImxvbmciLCAic2hvcnQiLCBvciAibmFycm93IgogICAgICAgKiBAcGFyYW0ge3N0cmluZ3xzdHJpbmdbXX0gb3B0aW9ucy51bml0IC0gdXNlIGEgc3BlY2lmaWMgdW5pdCBvciBhcnJheSBvZiB1bml0czsgaWYgb21pdHRlZCwgb3IgYW4gYXJyYXksIHRoZSBtZXRob2Qgd2lsbCBwaWNrIHRoZSBiZXN0IHVuaXQuIFVzZSBhbiBhcnJheSBvciBvbmUgb2YgInllYXJzIiwgInF1YXJ0ZXJzIiwgIm1vbnRocyIsICJ3ZWVrcyIsICJkYXlzIiwgImhvdXJzIiwgIm1pbnV0ZXMiLCBvciAic2Vjb25kcyIKICAgICAgICogQHBhcmFtIHtib29sZWFufSBbb3B0aW9ucy5yb3VuZD10cnVlXSAtIHdoZXRoZXIgdG8gcm91bmQgdGhlIG51bWJlcnMgaW4gdGhlIG91dHB1dC4KICAgICAgICogQHBhcmFtIHtudW1iZXJ9IFtvcHRpb25zLnBhZGRpbmc9MF0gLSBwYWRkaW5nIGluIG1pbGxpc2Vjb25kcy4gVGhpcyBhbGxvd3MgeW91IHRvIHJvdW5kIHVwIHRoZSByZXN1bHQgaWYgaXQgZml0cyBpbnNpZGUgdGhlIHRocmVzaG9sZC4gRG9uJ3QgdXNlIGluIGNvbWJpbmF0aW9uIHdpdGgge3JvdW5kOiBmYWxzZX0gYmVjYXVzZSB0aGUgZGVjaW1hbCBvdXRwdXQgd2lsbCBpbmNsdWRlIHRoZSBwYWRkaW5nLgogICAgICAgKiBAcGFyYW0ge3N0cmluZ30gb3B0aW9ucy5sb2NhbGUgLSBvdmVycmlkZSB0aGUgbG9jYWxlIG9mIHRoaXMgRGF0ZVRpbWUKICAgICAgICogQHBhcmFtIHtzdHJpbmd9IG9wdGlvbnMubnVtYmVyaW5nU3lzdGVtIC0gb3ZlcnJpZGUgdGhlIG51bWJlcmluZ1N5c3RlbSBvZiB0aGlzIERhdGVUaW1lLiBUaGUgSW50bCBzeXN0ZW0gbWF5IGNob29zZSBub3QgdG8gaG9ub3IgdGhpcwogICAgICAgKiBAZXhhbXBsZSBEYXRlVGltZS5ub3coKS5wbHVzKHsgZGF5czogMSB9KS50b1JlbGF0aXZlKCkgLy89PiAiaW4gMSBkYXkiCiAgICAgICAqIEBleGFtcGxlIERhdGVUaW1lLm5vdygpLnNldExvY2FsZSgiZXMiKS50b1JlbGF0aXZlKHsgZGF5czogMSB9KSAvLz0+ICJkZW50cm8gZGUgMSBkw61hIgogICAgICAgKiBAZXhhbXBsZSBEYXRlVGltZS5ub3coKS5wbHVzKHsgZGF5czogMSB9KS50b1JlbGF0aXZlKHsgbG9jYWxlOiAiZnIiIH0pIC8vPT4gImRhbnMgMjMgaGV1cmVzIgogICAgICAgKiBAZXhhbXBsZSBEYXRlVGltZS5ub3coKS5taW51cyh7IGRheXM6IDIgfSkudG9SZWxhdGl2ZSgpIC8vPT4gIjIgZGF5cyBhZ28iCiAgICAgICAqIEBleGFtcGxlIERhdGVUaW1lLm5vdygpLm1pbnVzKHsgZGF5czogMiB9KS50b1JlbGF0aXZlKHsgdW5pdDogImhvdXJzIiB9KSAvLz0+ICI0OCBob3VycyBhZ28iCiAgICAgICAqIEBleGFtcGxlIERhdGVUaW1lLm5vdygpLm1pbnVzKHsgaG91cnM6IDM2IH0pLnRvUmVsYXRpdmUoeyByb3VuZDogZmFsc2UgfSkgLy89PiAiMS41IGRheXMgYWdvIgogICAgICAgKi8KICAgICAgOwoKICAgICAgX3Byb3RvLnRvUmVsYXRpdmUgPSBmdW5jdGlvbiB0b1JlbGF0aXZlKG9wdGlvbnMpIHsKICAgICAgICBpZiAob3B0aW9ucyA9PT0gdm9pZCAwKSB7CiAgICAgICAgICBvcHRpb25zID0ge307CiAgICAgICAgfQoKICAgICAgICBpZiAoIXRoaXMuaXNWYWxpZCkgcmV0dXJuIG51bGw7CiAgICAgICAgdmFyIGJhc2UgPSBvcHRpb25zLmJhc2UgfHwgRGF0ZVRpbWUuZnJvbU9iamVjdCh7CiAgICAgICAgICB6b25lOiB0aGlzLnpvbmUKICAgICAgICB9KSwKICAgICAgICAgICAgcGFkZGluZyA9IG9wdGlvbnMucGFkZGluZyA/IHRoaXMgPCBiYXNlID8gLW9wdGlvbnMucGFkZGluZyA6IG9wdGlvbnMucGFkZGluZyA6IDA7CiAgICAgICAgdmFyIHVuaXRzID0gWyJ5ZWFycyIsICJtb250aHMiLCAiZGF5cyIsICJob3VycyIsICJtaW51dGVzIiwgInNlY29uZHMiXTsKICAgICAgICB2YXIgdW5pdCA9IG9wdGlvbnMudW5pdDsKCiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkob3B0aW9ucy51bml0KSkgewogICAgICAgICAgdW5pdHMgPSBvcHRpb25zLnVuaXQ7CiAgICAgICAgICB1bml0ID0gdW5kZWZpbmVkOwogICAgICAgIH0KCiAgICAgICAgcmV0dXJuIGRpZmZSZWxhdGl2ZShiYXNlLCB0aGlzLnBsdXMocGFkZGluZyksIE9iamVjdC5hc3NpZ24ob3B0aW9ucywgewogICAgICAgICAgbnVtZXJpYzogImFsd2F5cyIsCiAgICAgICAgICB1bml0czogdW5pdHMsCiAgICAgICAgICB1bml0OiB1bml0CiAgICAgICAgfSkpOwogICAgICB9CiAgICAgIC8qKgogICAgICAgKiBSZXR1cm5zIGEgc3RyaW5nIHJlcHJlc2VudGF0aW9uIG9mIHRoaXMgZGF0ZSByZWxhdGl2ZSB0byB0b2RheSwgc3VjaCBhcyAieWVzdGVyZGF5IiBvciAibmV4dCBtb250aCIuCiAgICAgICAqIE9ubHkgaW50ZXJuYXRpb25hbGl6ZXMgb24gcGxhdGZvcm1zIHRoYXQgc3VwcG9ydHMgSW50bC5SZWxhdGl2ZVRpbWVGb3JtYXQuCiAgICAgICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zIC0gb3B0aW9ucyB0aGF0IGFmZmVjdCB0aGUgb3V0cHV0CiAgICAgICAqIEBwYXJhbSB7RGF0ZVRpbWV9IFtvcHRpb25zLmJhc2U9RGF0ZVRpbWUubm93KCldIC0gdGhlIERhdGVUaW1lIHRvIHVzZSBhcyB0aGUgYmFzaXMgdG8gd2hpY2ggdGhpcyB0aW1lIGlzIGNvbXBhcmVkLiBEZWZhdWx0cyB0byBub3cuCiAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBvcHRpb25zLmxvY2FsZSAtIG92ZXJyaWRlIHRoZSBsb2NhbGUgb2YgdGhpcyBEYXRlVGltZQogICAgICAgKiBAcGFyYW0ge3N0cmluZ30gb3B0aW9ucy51bml0IC0gdXNlIGEgc3BlY2lmaWMgdW5pdDsgaWYgb21pdHRlZCwgdGhlIG1ldGhvZCB3aWxsIHBpY2sgdGhlIHVuaXQuIFVzZSBvbmUgb2YgInllYXJzIiwgInF1YXJ0ZXJzIiwgIm1vbnRocyIsICJ3ZWVrcyIsIG9yICJkYXlzIgogICAgICAgKiBAcGFyYW0ge3N0cmluZ30gb3B0aW9ucy5udW1iZXJpbmdTeXN0ZW0gLSBvdmVycmlkZSB0aGUgbnVtYmVyaW5nU3lzdGVtIG9mIHRoaXMgRGF0ZVRpbWUuIFRoZSBJbnRsIHN5c3RlbSBtYXkgY2hvb3NlIG5vdCB0byBob25vciB0aGlzCiAgICAgICAqIEBleGFtcGxlIERhdGVUaW1lLm5vdygpLnBsdXMoeyBkYXlzOiAxIH0pLnRvUmVsYXRpdmVDYWxlbmRhcigpIC8vPT4gInRvbW9ycm93IgogICAgICAgKiBAZXhhbXBsZSBEYXRlVGltZS5ub3coKS5zZXRMb2NhbGUoImVzIikucGx1cyh7IGRheXM6IDEgfSkudG9SZWxhdGl2ZSgpIC8vPT4gIiJtYcOxYW5hIgogICAgICAgKiBAZXhhbXBsZSBEYXRlVGltZS5ub3coKS5wbHVzKHsgZGF5czogMSB9KS50b1JlbGF0aXZlQ2FsZW5kYXIoeyBsb2NhbGU6ICJmciIgfSkgLy89PiAiZGVtYWluIgogICAgICAgKiBAZXhhbXBsZSBEYXRlVGltZS5ub3coKS5taW51cyh7IGRheXM6IDIgfSkudG9SZWxhdGl2ZUNhbGVuZGFyKCkgLy89PiAiMiBkYXlzIGFnbyIKICAgICAgICovCiAgICAgIDsKCiAgICAgIF9wcm90by50b1JlbGF0aXZlQ2FsZW5kYXIgPSBmdW5jdGlvbiB0b1JlbGF0aXZlQ2FsZW5kYXIob3B0aW9ucykgewogICAgICAgIGlmIChvcHRpb25zID09PSB2b2lkIDApIHsKICAgICAgICAgIG9wdGlvbnMgPSB7fTsKICAgICAgICB9CgogICAgICAgIGlmICghdGhpcy5pc1ZhbGlkKSByZXR1cm4gbnVsbDsKICAgICAgICByZXR1cm4gZGlmZlJlbGF0aXZlKG9wdGlvbnMuYmFzZSB8fCBEYXRlVGltZS5mcm9tT2JqZWN0KHsKICAgICAgICAgIHpvbmU6IHRoaXMuem9uZQogICAgICAgIH0pLCB0aGlzLCBPYmplY3QuYXNzaWduKG9wdGlvbnMsIHsKICAgICAgICAgIG51bWVyaWM6ICJhdXRvIiwKICAgICAgICAgIHVuaXRzOiBbInllYXJzIiwgIm1vbnRocyIsICJkYXlzIl0sCiAgICAgICAgICBjYWxlbmRhcnk6IHRydWUKICAgICAgICB9KSk7CiAgICAgIH0KICAgICAgLyoqCiAgICAgICAqIFJldHVybiB0aGUgbWluIG9mIHNldmVyYWwgZGF0ZSB0aW1lcwogICAgICAgKiBAcGFyYW0gey4uLkRhdGVUaW1lfSBkYXRlVGltZXMgLSB0aGUgRGF0ZVRpbWVzIGZyb20gd2hpY2ggdG8gY2hvb3NlIHRoZSBtaW5pbXVtCiAgICAgICAqIEByZXR1cm4ge0RhdGVUaW1lfSB0aGUgbWluIERhdGVUaW1lLCBvciB1bmRlZmluZWQgaWYgY2FsbGVkIHdpdGggbm8gYXJndW1lbnQKICAgICAgICovCiAgICAgIDsKCiAgICAgIERhdGVUaW1lLm1pbiA9IGZ1bmN0aW9uIG1pbigpIHsKICAgICAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgZGF0ZVRpbWVzID0gbmV3IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykgewogICAgICAgICAgZGF0ZVRpbWVzW19rZXldID0gYXJndW1lbnRzW19rZXldOwogICAgICAgIH0KCiAgICAgICAgaWYgKCFkYXRlVGltZXMuZXZlcnkoRGF0ZVRpbWUuaXNEYXRlVGltZSkpIHsKICAgICAgICAgIHRocm93IG5ldyBJbnZhbGlkQXJndW1lbnRFcnJvcigibWluIHJlcXVpcmVzIGFsbCBhcmd1bWVudHMgYmUgRGF0ZVRpbWVzIik7CiAgICAgICAgfQoKICAgICAgICByZXR1cm4gYmVzdEJ5KGRhdGVUaW1lcywgZnVuY3Rpb24gKGkpIHsKICAgICAgICAgIHJldHVybiBpLnZhbHVlT2YoKTsKICAgICAgICB9LCBNYXRoLm1pbik7CiAgICAgIH0KICAgICAgLyoqCiAgICAgICAqIFJldHVybiB0aGUgbWF4IG9mIHNldmVyYWwgZGF0ZSB0aW1lcwogICAgICAgKiBAcGFyYW0gey4uLkRhdGVUaW1lfSBkYXRlVGltZXMgLSB0aGUgRGF0ZVRpbWVzIGZyb20gd2hpY2ggdG8gY2hvb3NlIHRoZSBtYXhpbXVtCiAgICAgICAqIEByZXR1cm4ge0RhdGVUaW1lfSB0aGUgbWF4IERhdGVUaW1lLCBvciB1bmRlZmluZWQgaWYgY2FsbGVkIHdpdGggbm8gYXJndW1lbnQKICAgICAgICovCiAgICAgIDsKCiAgICAgIERhdGVUaW1lLm1heCA9IGZ1bmN0aW9uIG1heCgpIHsKICAgICAgICBmb3IgKHZhciBfbGVuMiA9IGFyZ3VtZW50cy5sZW5ndGgsIGRhdGVUaW1lcyA9IG5ldyBBcnJheShfbGVuMiksIF9rZXkyID0gMDsgX2tleTIgPCBfbGVuMjsgX2tleTIrKykgewogICAgICAgICAgZGF0ZVRpbWVzW19rZXkyXSA9IGFyZ3VtZW50c1tfa2V5Ml07CiAgICAgICAgfQoKICAgICAgICBpZiAoIWRhdGVUaW1lcy5ldmVyeShEYXRlVGltZS5pc0RhdGVUaW1lKSkgewogICAgICAgICAgdGhyb3cgbmV3IEludmFsaWRBcmd1bWVudEVycm9yKCJtYXggcmVxdWlyZXMgYWxsIGFyZ3VtZW50cyBiZSBEYXRlVGltZXMiKTsKICAgICAgICB9CgogICAgICAgIHJldHVybiBiZXN0QnkoZGF0ZVRpbWVzLCBmdW5jdGlvbiAoaSkgewogICAgICAgICAgcmV0dXJuIGkudmFsdWVPZigpOwogICAgICAgIH0sIE1hdGgubWF4KTsKICAgICAgfSAvLyBNSVNDCgogICAgICAvKioKICAgICAgICogRXhwbGFpbiBob3cgYSBzdHJpbmcgd291bGQgYmUgcGFyc2VkIGJ5IGZyb21Gb3JtYXQoKQogICAgICAgKiBAcGFyYW0ge3N0cmluZ30gdGV4dCAtIHRoZSBzdHJpbmcgdG8gcGFyc2UKICAgICAgICogQHBhcmFtIHtzdHJpbmd9IGZtdCAtIHRoZSBmb3JtYXQgdGhlIHN0cmluZyBpcyBleHBlY3RlZCB0byBiZSBpbiAoc2VlIGRlc2NyaXB0aW9uKQogICAgICAgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9ucyAtIG9wdGlvbnMgdGFrZW4gYnkgZnJvbUZvcm1hdCgpCiAgICAgICAqIEByZXR1cm4ge09iamVjdH0KICAgICAgICovCiAgICAgIDsKCiAgICAgIERhdGVUaW1lLmZyb21Gb3JtYXRFeHBsYWluID0gZnVuY3Rpb24gZnJvbUZvcm1hdEV4cGxhaW4odGV4dCwgZm10LCBvcHRpb25zKSB7CiAgICAgICAgaWYgKG9wdGlvbnMgPT09IHZvaWQgMCkgewogICAgICAgICAgb3B0aW9ucyA9IHt9OwogICAgICAgIH0KCiAgICAgICAgdmFyIF9vcHRpb25zID0gb3B0aW9ucywKICAgICAgICAgICAgX29wdGlvbnMkbG9jYWxlID0gX29wdGlvbnMubG9jYWxlLAogICAgICAgICAgICBsb2NhbGUgPSBfb3B0aW9ucyRsb2NhbGUgPT09IHZvaWQgMCA/IG51bGwgOiBfb3B0aW9ucyRsb2NhbGUsCiAgICAgICAgICAgIF9vcHRpb25zJG51bWJlcmluZ1N5cyA9IF9vcHRpb25zLm51bWJlcmluZ1N5c3RlbSwKICAgICAgICAgICAgbnVtYmVyaW5nU3lzdGVtID0gX29wdGlvbnMkbnVtYmVyaW5nU3lzID09PSB2b2lkIDAgPyBudWxsIDogX29wdGlvbnMkbnVtYmVyaW5nU3lzLAogICAgICAgICAgICBsb2NhbGVUb1VzZSA9IExvY2FsZS5mcm9tT3B0cyh7CiAgICAgICAgICBsb2NhbGU6IGxvY2FsZSwKICAgICAgICAgIG51bWJlcmluZ1N5c3RlbTogbnVtYmVyaW5nU3lzdGVtLAogICAgICAgICAgZGVmYXVsdFRvRU46IHRydWUKICAgICAgICB9KTsKICAgICAgICByZXR1cm4gZXhwbGFpbkZyb21Ub2tlbnMobG9jYWxlVG9Vc2UsIHRleHQsIGZtdCk7CiAgICAgIH0KICAgICAgLyoqCiAgICAgICAqIEBkZXByZWNhdGVkIHVzZSBmcm9tRm9ybWF0RXhwbGFpbiBpbnN0ZWFkCiAgICAgICAqLwogICAgICA7CgogICAgICBEYXRlVGltZS5mcm9tU3RyaW5nRXhwbGFpbiA9IGZ1bmN0aW9uIGZyb21TdHJpbmdFeHBsYWluKHRleHQsIGZtdCwgb3B0aW9ucykgewogICAgICAgIGlmIChvcHRpb25zID09PSB2b2lkIDApIHsKICAgICAgICAgIG9wdGlvbnMgPSB7fTsKICAgICAgICB9CgogICAgICAgIHJldHVybiBEYXRlVGltZS5mcm9tRm9ybWF0RXhwbGFpbih0ZXh0LCBmbXQsIG9wdGlvbnMpOwogICAgICB9IC8vIEZPUk1BVCBQUkVTRVRTCgogICAgICAvKioKICAgICAgICoge0BsaW5rIHRvTG9jYWxlU3RyaW5nfSBmb3JtYXQgbGlrZSAxMC8xNC8xOTgzCiAgICAgICAqIEB0eXBlIHtPYmplY3R9CiAgICAgICAqLwogICAgICA7CgogICAgICBfY3JlYXRlQ2xhc3MoRGF0ZVRpbWUsIFt7CiAgICAgICAga2V5OiAiaXNWYWxpZCIsCiAgICAgICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7CiAgICAgICAgICByZXR1cm4gdGhpcy5pbnZhbGlkID09PSBudWxsOwogICAgICAgIH0KICAgICAgICAvKioKICAgICAgICAgKiBSZXR1cm5zIGFuIGVycm9yIGNvZGUgaWYgdGhpcyBEYXRlVGltZSBpcyBpbnZhbGlkLCBvciBudWxsIGlmIHRoZSBEYXRlVGltZSBpcyB2YWxpZAogICAgICAgICAqIEB0eXBlIHtzdHJpbmd9CiAgICAgICAgICovCgogICAgICB9LCB7CiAgICAgICAga2V5OiAiaW52YWxpZFJlYXNvbiIsCiAgICAgICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7CiAgICAgICAgICByZXR1cm4gdGhpcy5pbnZhbGlkID8gdGhpcy5pbnZhbGlkLnJlYXNvbiA6IG51bGw7CiAgICAgICAgfQogICAgICAgIC8qKgogICAgICAgICAqIFJldHVybnMgYW4gZXhwbGFuYXRpb24gb2Ygd2h5IHRoaXMgRGF0ZVRpbWUgYmVjYW1lIGludmFsaWQsIG9yIG51bGwgaWYgdGhlIERhdGVUaW1lIGlzIHZhbGlkCiAgICAgICAgICogQHR5cGUge3N0cmluZ30KICAgICAgICAgKi8KCiAgICAgIH0sIHsKICAgICAgICBrZXk6ICJpbnZhbGlkRXhwbGFuYXRpb24iLAogICAgICAgIGdldDogZnVuY3Rpb24gZ2V0KCkgewogICAgICAgICAgcmV0dXJuIHRoaXMuaW52YWxpZCA/IHRoaXMuaW52YWxpZC5leHBsYW5hdGlvbiA6IG51bGw7CiAgICAgICAgfQogICAgICAgIC8qKgogICAgICAgICAqIEdldCB0aGUgbG9jYWxlIG9mIGEgRGF0ZVRpbWUsIHN1Y2ggJ2VuLUdCJy4gVGhlIGxvY2FsZSBpcyB1c2VkIHdoZW4gZm9ybWF0dGluZyB0aGUgRGF0ZVRpbWUKICAgICAgICAgKgogICAgICAgICAqIEB0eXBlIHtzdHJpbmd9CiAgICAgICAgICovCgogICAgICB9LCB7CiAgICAgICAga2V5OiAibG9jYWxlIiwKICAgICAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHsKICAgICAgICAgIHJldHVybiB0aGlzLmlzVmFsaWQgPyB0aGlzLmxvYy5sb2NhbGUgOiBudWxsOwogICAgICAgIH0KICAgICAgICAvKioKICAgICAgICAgKiBHZXQgdGhlIG51bWJlcmluZyBzeXN0ZW0gb2YgYSBEYXRlVGltZSwgc3VjaCAnYmVuZycuIFRoZSBudW1iZXJpbmcgc3lzdGVtIGlzIHVzZWQgd2hlbiBmb3JtYXR0aW5nIHRoZSBEYXRlVGltZQogICAgICAgICAqCiAgICAgICAgICogQHR5cGUge3N0cmluZ30KICAgICAgICAgKi8KCiAgICAgIH0sIHsKICAgICAgICBrZXk6ICJudW1iZXJpbmdTeXN0ZW0iLAogICAgICAgIGdldDogZnVuY3Rpb24gZ2V0KCkgewogICAgICAgICAgcmV0dXJuIHRoaXMuaXNWYWxpZCA/IHRoaXMubG9jLm51bWJlcmluZ1N5c3RlbSA6IG51bGw7CiAgICAgICAgfQogICAgICAgIC8qKgogICAgICAgICAqIEdldCB0aGUgb3V0cHV0IGNhbGVuZGFyIG9mIGEgRGF0ZVRpbWUsIHN1Y2ggJ2lzbGFtaWMnLiBUaGUgb3V0cHV0IGNhbGVuZGFyIGlzIHVzZWQgd2hlbiBmb3JtYXR0aW5nIHRoZSBEYXRlVGltZQogICAgICAgICAqCiAgICAgICAgICogQHR5cGUge3N0cmluZ30KICAgICAgICAgKi8KCiAgICAgIH0sIHsKICAgICAgICBrZXk6ICJvdXRwdXRDYWxlbmRhciIsCiAgICAgICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7CiAgICAgICAgICByZXR1cm4gdGhpcy5pc1ZhbGlkID8gdGhpcy5sb2Mub3V0cHV0Q2FsZW5kYXIgOiBudWxsOwogICAgICAgIH0KICAgICAgICAvKioKICAgICAgICAgKiBHZXQgdGhlIHRpbWUgem9uZSBhc3NvY2lhdGVkIHdpdGggdGhpcyBEYXRlVGltZS4KICAgICAgICAgKiBAdHlwZSB7Wm9uZX0KICAgICAgICAgKi8KCiAgICAgIH0sIHsKICAgICAgICBrZXk6ICJ6b25lIiwKICAgICAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHsKICAgICAgICAgIHJldHVybiB0aGlzLl96b25lOwogICAgICAgIH0KICAgICAgICAvKioKICAgICAgICAgKiBHZXQgdGhlIG5hbWUgb2YgdGhlIHRpbWUgem9uZS4KICAgICAgICAgKiBAdHlwZSB7c3RyaW5nfQogICAgICAgICAqLwoKICAgICAgfSwgewogICAgICAgIGtleTogInpvbmVOYW1lIiwKICAgICAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHsKICAgICAgICAgIHJldHVybiB0aGlzLmlzVmFsaWQgPyB0aGlzLnpvbmUubmFtZSA6IG51bGw7CiAgICAgICAgfQogICAgICAgIC8qKgogICAgICAgICAqIEdldCB0aGUgeWVhcgogICAgICAgICAqIEBleGFtcGxlIERhdGVUaW1lLmxvY2FsKDIwMTcsIDUsIDI1KS55ZWFyIC8vPT4gMjAxNwogICAgICAgICAqIEB0eXBlIHtudW1iZXJ9CiAgICAgICAgICovCgogICAgICB9LCB7CiAgICAgICAga2V5OiAieWVhciIsCiAgICAgICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7CiAgICAgICAgICByZXR1cm4gdGhpcy5pc1ZhbGlkID8gdGhpcy5jLnllYXIgOiBOYU47CiAgICAgICAgfQogICAgICAgIC8qKgogICAgICAgICAqIEdldCB0aGUgcXVhcnRlcgogICAgICAgICAqIEBleGFtcGxlIERhdGVUaW1lLmxvY2FsKDIwMTcsIDUsIDI1KS5xdWFydGVyIC8vPT4gMgogICAgICAgICAqIEB0eXBlIHtudW1iZXJ9CiAgICAgICAgICovCgogICAgICB9LCB7CiAgICAgICAga2V5OiAicXVhcnRlciIsCiAgICAgICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7CiAgICAgICAgICByZXR1cm4gdGhpcy5pc1ZhbGlkID8gTWF0aC5jZWlsKHRoaXMuYy5tb250aCAvIDMpIDogTmFOOwogICAgICAgIH0KICAgICAgICAvKioKICAgICAgICAgKiBHZXQgdGhlIG1vbnRoICgxLTEyKS4KICAgICAgICAgKiBAZXhhbXBsZSBEYXRlVGltZS5sb2NhbCgyMDE3LCA1LCAyNSkubW9udGggLy89PiA1CiAgICAgICAgICogQHR5cGUge251bWJlcn0KICAgICAgICAgKi8KCiAgICAgIH0sIHsKICAgICAgICBrZXk6ICJtb250aCIsCiAgICAgICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7CiAgICAgICAgICByZXR1cm4gdGhpcy5pc1ZhbGlkID8gdGhpcy5jLm1vbnRoIDogTmFOOwogICAgICAgIH0KICAgICAgICAvKioKICAgICAgICAgKiBHZXQgdGhlIGRheSBvZiB0aGUgbW9udGggKDEtMzBpc2gpLgogICAgICAgICAqIEBleGFtcGxlIERhdGVUaW1lLmxvY2FsKDIwMTcsIDUsIDI1KS5kYXkgLy89PiAyNQogICAgICAgICAqIEB0eXBlIHtudW1iZXJ9CiAgICAgICAgICovCgogICAgICB9LCB7CiAgICAgICAga2V5OiAiZGF5IiwKICAgICAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHsKICAgICAgICAgIHJldHVybiB0aGlzLmlzVmFsaWQgPyB0aGlzLmMuZGF5IDogTmFOOwogICAgICAgIH0KICAgICAgICAvKioKICAgICAgICAgKiBHZXQgdGhlIGhvdXIgb2YgdGhlIGRheSAoMC0yMykuCiAgICAgICAgICogQGV4YW1wbGUgRGF0ZVRpbWUubG9jYWwoMjAxNywgNSwgMjUsIDkpLmhvdXIgLy89PiA5CiAgICAgICAgICogQHR5cGUge251bWJlcn0KICAgICAgICAgKi8KCiAgICAgIH0sIHsKICAgICAgICBrZXk6ICJob3VyIiwKICAgICAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHsKICAgICAgICAgIHJldHVybiB0aGlzLmlzVmFsaWQgPyB0aGlzLmMuaG91ciA6IE5hTjsKICAgICAgICB9CiAgICAgICAgLyoqCiAgICAgICAgICogR2V0IHRoZSBtaW51dGUgb2YgdGhlIGhvdXIgKDAtNTkpLgogICAgICAgICAqIEBleGFtcGxlIERhdGVUaW1lLmxvY2FsKDIwMTcsIDUsIDI1LCA5LCAzMCkubWludXRlIC8vPT4gMzAKICAgICAgICAgKiBAdHlwZSB7bnVtYmVyfQogICAgICAgICAqLwoKICAgICAgfSwgewogICAgICAgIGtleTogIm1pbnV0ZSIsCiAgICAgICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7CiAgICAgICAgICByZXR1cm4gdGhpcy5pc1ZhbGlkID8gdGhpcy5jLm1pbnV0ZSA6IE5hTjsKICAgICAgICB9CiAgICAgICAgLyoqCiAgICAgICAgICogR2V0IHRoZSBzZWNvbmQgb2YgdGhlIG1pbnV0ZSAoMC01OSkuCiAgICAgICAgICogQGV4YW1wbGUgRGF0ZVRpbWUubG9jYWwoMjAxNywgNSwgMjUsIDksIDMwLCA1Mikuc2Vjb25kIC8vPT4gNTIKICAgICAgICAgKiBAdHlwZSB7bnVtYmVyfQogICAgICAgICAqLwoKICAgICAgfSwgewogICAgICAgIGtleTogInNlY29uZCIsCiAgICAgICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7CiAgICAgICAgICByZXR1cm4gdGhpcy5pc1ZhbGlkID8gdGhpcy5jLnNlY29uZCA6IE5hTjsKICAgICAgICB9CiAgICAgICAgLyoqCiAgICAgICAgICogR2V0IHRoZSBtaWxsaXNlY29uZCBvZiB0aGUgc2Vjb25kICgwLTk5OSkuCiAgICAgICAgICogQGV4YW1wbGUgRGF0ZVRpbWUubG9jYWwoMjAxNywgNSwgMjUsIDksIDMwLCA1MiwgNjU0KS5taWxsaXNlY29uZCAvLz0+IDY1NAogICAgICAgICAqIEB0eXBlIHtudW1iZXJ9CiAgICAgICAgICovCgogICAgICB9LCB7CiAgICAgICAga2V5OiAibWlsbGlzZWNvbmQiLAogICAgICAgIGdldDogZnVuY3Rpb24gZ2V0KCkgewogICAgICAgICAgcmV0dXJuIHRoaXMuaXNWYWxpZCA/IHRoaXMuYy5taWxsaXNlY29uZCA6IE5hTjsKICAgICAgICB9CiAgICAgICAgLyoqCiAgICAgICAgICogR2V0IHRoZSB3ZWVrIHllYXIKICAgICAgICAgKiBAc2VlIGh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL0lTT193ZWVrX2RhdGUKICAgICAgICAgKiBAZXhhbXBsZSBEYXRlVGltZS5sb2NhbCgyMDE0LCAxMiwgMzEpLndlZWtZZWFyIC8vPT4gMjAxNQogICAgICAgICAqIEB0eXBlIHtudW1iZXJ9CiAgICAgICAgICovCgogICAgICB9LCB7CiAgICAgICAga2V5OiAid2Vla1llYXIiLAogICAgICAgIGdldDogZnVuY3Rpb24gZ2V0KCkgewogICAgICAgICAgcmV0dXJuIHRoaXMuaXNWYWxpZCA/IHBvc3NpYmx5Q2FjaGVkV2Vla0RhdGEodGhpcykud2Vla1llYXIgOiBOYU47CiAgICAgICAgfQogICAgICAgIC8qKgogICAgICAgICAqIEdldCB0aGUgd2VlayBudW1iZXIgb2YgdGhlIHdlZWsgeWVhciAoMS01MmlzaCkuCiAgICAgICAgICogQHNlZSBodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9JU09fd2Vla19kYXRlCiAgICAgICAgICogQGV4YW1wbGUgRGF0ZVRpbWUubG9jYWwoMjAxNywgNSwgMjUpLndlZWtOdW1iZXIgLy89PiAyMQogICAgICAgICAqIEB0eXBlIHtudW1iZXJ9CiAgICAgICAgICovCgogICAgICB9LCB7CiAgICAgICAga2V5OiAid2Vla051bWJlciIsCiAgICAgICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7CiAgICAgICAgICByZXR1cm4gdGhpcy5pc1ZhbGlkID8gcG9zc2libHlDYWNoZWRXZWVrRGF0YSh0aGlzKS53ZWVrTnVtYmVyIDogTmFOOwogICAgICAgIH0KICAgICAgICAvKioKICAgICAgICAgKiBHZXQgdGhlIGRheSBvZiB0aGUgd2Vlay4KICAgICAgICAgKiAxIGlzIE1vbmRheSBhbmQgNyBpcyBTdW5kYXkKICAgICAgICAgKiBAc2VlIGh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL0lTT193ZWVrX2RhdGUKICAgICAgICAgKiBAZXhhbXBsZSBEYXRlVGltZS5sb2NhbCgyMDE0LCAxMSwgMzEpLndlZWtkYXkgLy89PiA0CiAgICAgICAgICogQHR5cGUge251bWJlcn0KICAgICAgICAgKi8KCiAgICAgIH0sIHsKICAgICAgICBrZXk6ICJ3ZWVrZGF5IiwKICAgICAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHsKICAgICAgICAgIHJldHVybiB0aGlzLmlzVmFsaWQgPyBwb3NzaWJseUNhY2hlZFdlZWtEYXRhKHRoaXMpLndlZWtkYXkgOiBOYU47CiAgICAgICAgfQogICAgICAgIC8qKgogICAgICAgICAqIEdldCB0aGUgb3JkaW5hbCAobWVhbmluZyB0aGUgZGF5IG9mIHRoZSB5ZWFyKQogICAgICAgICAqIEBleGFtcGxlIERhdGVUaW1lLmxvY2FsKDIwMTcsIDUsIDI1KS5vcmRpbmFsIC8vPT4gMTQ1CiAgICAgICAgICogQHR5cGUge251bWJlcnxEYXRlVGltZX0KICAgICAgICAgKi8KCiAgICAgIH0sIHsKICAgICAgICBrZXk6ICJvcmRpbmFsIiwKICAgICAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHsKICAgICAgICAgIHJldHVybiB0aGlzLmlzVmFsaWQgPyBncmVnb3JpYW5Ub09yZGluYWwodGhpcy5jKS5vcmRpbmFsIDogTmFOOwogICAgICAgIH0KICAgICAgICAvKioKICAgICAgICAgKiBHZXQgdGhlIGh1bWFuIHJlYWRhYmxlIHNob3J0IG1vbnRoIG5hbWUsIHN1Y2ggYXMgJ09jdCcuCiAgICAgICAgICogRGVmYXVsdHMgdG8gdGhlIHN5c3RlbSdzIGxvY2FsZSBpZiBubyBsb2NhbGUgaGFzIGJlZW4gc3BlY2lmaWVkCiAgICAgICAgICogQGV4YW1wbGUgRGF0ZVRpbWUubG9jYWwoMjAxNywgMTAsIDMwKS5tb250aFNob3J0IC8vPT4gT2N0CiAgICAgICAgICogQHR5cGUge3N0cmluZ30KICAgICAgICAgKi8KCiAgICAgIH0sIHsKICAgICAgICBrZXk6ICJtb250aFNob3J0IiwKICAgICAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHsKICAgICAgICAgIHJldHVybiB0aGlzLmlzVmFsaWQgPyBJbmZvLm1vbnRocygic2hvcnQiLCB7CiAgICAgICAgICAgIGxvY09iajogdGhpcy5sb2MKICAgICAgICAgIH0pW3RoaXMubW9udGggLSAxXSA6IG51bGw7CiAgICAgICAgfQogICAgICAgIC8qKgogICAgICAgICAqIEdldCB0aGUgaHVtYW4gcmVhZGFibGUgbG9uZyBtb250aCBuYW1lLCBzdWNoIGFzICdPY3RvYmVyJy4KICAgICAgICAgKiBEZWZhdWx0cyB0byB0aGUgc3lzdGVtJ3MgbG9jYWxlIGlmIG5vIGxvY2FsZSBoYXMgYmVlbiBzcGVjaWZpZWQKICAgICAgICAgKiBAZXhhbXBsZSBEYXRlVGltZS5sb2NhbCgyMDE3LCAxMCwgMzApLm1vbnRoTG9uZyAvLz0+IE9jdG9iZXIKICAgICAgICAgKiBAdHlwZSB7c3RyaW5nfQogICAgICAgICAqLwoKICAgICAgfSwgewogICAgICAgIGtleTogIm1vbnRoTG9uZyIsCiAgICAgICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7CiAgICAgICAgICByZXR1cm4gdGhpcy5pc1ZhbGlkID8gSW5mby5tb250aHMoImxvbmciLCB7CiAgICAgICAgICAgIGxvY09iajogdGhpcy5sb2MKICAgICAgICAgIH0pW3RoaXMubW9udGggLSAxXSA6IG51bGw7CiAgICAgICAgfQogICAgICAgIC8qKgogICAgICAgICAqIEdldCB0aGUgaHVtYW4gcmVhZGFibGUgc2hvcnQgd2Vla2RheSwgc3VjaCBhcyAnTW9uJy4KICAgICAgICAgKiBEZWZhdWx0cyB0byB0aGUgc3lzdGVtJ3MgbG9jYWxlIGlmIG5vIGxvY2FsZSBoYXMgYmVlbiBzcGVjaWZpZWQKICAgICAgICAgKiBAZXhhbXBsZSBEYXRlVGltZS5sb2NhbCgyMDE3LCAxMCwgMzApLndlZWtkYXlTaG9ydCAvLz0+IE1vbgogICAgICAgICAqIEB0eXBlIHtzdHJpbmd9CiAgICAgICAgICovCgogICAgICB9LCB7CiAgICAgICAga2V5OiAid2Vla2RheVNob3J0IiwKICAgICAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHsKICAgICAgICAgIHJldHVybiB0aGlzLmlzVmFsaWQgPyBJbmZvLndlZWtkYXlzKCJzaG9ydCIsIHsKICAgICAgICAgICAgbG9jT2JqOiB0aGlzLmxvYwogICAgICAgICAgfSlbdGhpcy53ZWVrZGF5IC0gMV0gOiBudWxsOwogICAgICAgIH0KICAgICAgICAvKioKICAgICAgICAgKiBHZXQgdGhlIGh1bWFuIHJlYWRhYmxlIGxvbmcgd2Vla2RheSwgc3VjaCBhcyAnTW9uZGF5Jy4KICAgICAgICAgKiBEZWZhdWx0cyB0byB0aGUgc3lzdGVtJ3MgbG9jYWxlIGlmIG5vIGxvY2FsZSBoYXMgYmVlbiBzcGVjaWZpZWQKICAgICAgICAgKiBAZXhhbXBsZSBEYXRlVGltZS5sb2NhbCgyMDE3LCAxMCwgMzApLndlZWtkYXlMb25nIC8vPT4gTW9uZGF5CiAgICAgICAgICogQHR5cGUge3N0cmluZ30KICAgICAgICAgKi8KCiAgICAgIH0sIHsKICAgICAgICBrZXk6ICJ3ZWVrZGF5TG9uZyIsCiAgICAgICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7CiAgICAgICAgICByZXR1cm4gdGhpcy5pc1ZhbGlkID8gSW5mby53ZWVrZGF5cygibG9uZyIsIHsKICAgICAgICAgICAgbG9jT2JqOiB0aGlzLmxvYwogICAgICAgICAgfSlbdGhpcy53ZWVrZGF5IC0gMV0gOiBudWxsOwogICAgICAgIH0KICAgICAgICAvKioKICAgICAgICAgKiBHZXQgdGhlIFVUQyBvZmZzZXQgb2YgdGhpcyBEYXRlVGltZSBpbiBtaW51dGVzCiAgICAgICAgICogQGV4YW1wbGUgRGF0ZVRpbWUubm93KCkub2Zmc2V0IC8vPT4gLTI0MAogICAgICAgICAqIEBleGFtcGxlIERhdGVUaW1lLnV0YygpLm9mZnNldCAvLz0+IDAKICAgICAgICAgKiBAdHlwZSB7bnVtYmVyfQogICAgICAgICAqLwoKICAgICAgfSwgewogICAgICAgIGtleTogIm9mZnNldCIsCiAgICAgICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7CiAgICAgICAgICByZXR1cm4gdGhpcy5pc1ZhbGlkID8gK3RoaXMubyA6IE5hTjsKICAgICAgICB9CiAgICAgICAgLyoqCiAgICAgICAgICogR2V0IHRoZSBzaG9ydCBodW1hbiBuYW1lIGZvciB0aGUgem9uZSdzIGN1cnJlbnQgb2Zmc2V0LCBmb3IgZXhhbXBsZSAiRVNUIiBvciAiRURUIi4KICAgICAgICAgKiBEZWZhdWx0cyB0byB0aGUgc3lzdGVtJ3MgbG9jYWxlIGlmIG5vIGxvY2FsZSBoYXMgYmVlbiBzcGVjaWZpZWQKICAgICAgICAgKiBAdHlwZSB7c3RyaW5nfQogICAgICAgICAqLwoKICAgICAgfSwgewogICAgICAgIGtleTogIm9mZnNldE5hbWVTaG9ydCIsCiAgICAgICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7CiAgICAgICAgICBpZiAodGhpcy5pc1ZhbGlkKSB7CiAgICAgICAgICAgIHJldHVybiB0aGlzLnpvbmUub2Zmc2V0TmFtZSh0aGlzLnRzLCB7CiAgICAgICAgICAgICAgZm9ybWF0OiAic2hvcnQiLAogICAgICAgICAgICAgIGxvY2FsZTogdGhpcy5sb2NhbGUKICAgICAgICAgICAgfSk7CiAgICAgICAgICB9IGVsc2UgewogICAgICAgICAgICByZXR1cm4gbnVsbDsKICAgICAgICAgIH0KICAgICAgICB9CiAgICAgICAgLyoqCiAgICAgICAgICogR2V0IHRoZSBsb25nIGh1bWFuIG5hbWUgZm9yIHRoZSB6b25lJ3MgY3VycmVudCBvZmZzZXQsIGZvciBleGFtcGxlICJFYXN0ZXJuIFN0YW5kYXJkIFRpbWUiIG9yICJFYXN0ZXJuIERheWxpZ2h0IFRpbWUiLgogICAgICAgICAqIERlZmF1bHRzIHRvIHRoZSBzeXN0ZW0ncyBsb2NhbGUgaWYgbm8gbG9jYWxlIGhhcyBiZWVuIHNwZWNpZmllZAogICAgICAgICAqIEB0eXBlIHtzdHJpbmd9CiAgICAgICAgICovCgogICAgICB9LCB7CiAgICAgICAga2V5OiAib2Zmc2V0TmFtZUxvbmciLAogICAgICAgIGdldDogZnVuY3Rpb24gZ2V0KCkgewogICAgICAgICAgaWYgKHRoaXMuaXNWYWxpZCkgewogICAgICAgICAgICByZXR1cm4gdGhpcy56b25lLm9mZnNldE5hbWUodGhpcy50cywgewogICAgICAgICAgICAgIGZvcm1hdDogImxvbmciLAogICAgICAgICAgICAgIGxvY2FsZTogdGhpcy5sb2NhbGUKICAgICAgICAgICAgfSk7CiAgICAgICAgICB9IGVsc2UgewogICAgICAgICAgICByZXR1cm4gbnVsbDsKICAgICAgICAgIH0KICAgICAgICB9CiAgICAgICAgLyoqCiAgICAgICAgICogR2V0IHdoZXRoZXIgdGhpcyB6b25lJ3Mgb2Zmc2V0IGV2ZXIgY2hhbmdlcywgYXMgaW4gYSBEU1QuCiAgICAgICAgICogQHR5cGUge2Jvb2xlYW59CiAgICAgICAgICovCgogICAgICB9LCB7CiAgICAgICAga2V5OiAiaXNPZmZzZXRGaXhlZCIsCiAgICAgICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7CiAgICAgICAgICByZXR1cm4gdGhpcy5pc1ZhbGlkID8gdGhpcy56b25lLnVuaXZlcnNhbCA6IG51bGw7CiAgICAgICAgfQogICAgICAgIC8qKgogICAgICAgICAqIEdldCB3aGV0aGVyIHRoZSBEYXRlVGltZSBpcyBpbiBhIERTVC4KICAgICAgICAgKiBAdHlwZSB7Ym9vbGVhbn0KICAgICAgICAgKi8KCiAgICAgIH0sIHsKICAgICAgICBrZXk6ICJpc0luRFNUIiwKICAgICAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHsKICAgICAgICAgIGlmICh0aGlzLmlzT2Zmc2V0Rml4ZWQpIHsKICAgICAgICAgICAgcmV0dXJuIGZhbHNlOwogICAgICAgICAgfSBlbHNlIHsKICAgICAgICAgICAgcmV0dXJuIHRoaXMub2Zmc2V0ID4gdGhpcy5zZXQoewogICAgICAgICAgICAgIG1vbnRoOiAxCiAgICAgICAgICAgIH0pLm9mZnNldCB8fCB0aGlzLm9mZnNldCA+IHRoaXMuc2V0KHsKICAgICAgICAgICAgICBtb250aDogNQogICAgICAgICAgICB9KS5vZmZzZXQ7CiAgICAgICAgICB9CiAgICAgICAgfQogICAgICAgIC8qKgogICAgICAgICAqIFJldHVybnMgdHJ1ZSBpZiB0aGlzIERhdGVUaW1lIGlzIGluIGEgbGVhcCB5ZWFyLCBmYWxzZSBvdGhlcndpc2UKICAgICAgICAgKiBAZXhhbXBsZSBEYXRlVGltZS5sb2NhbCgyMDE2KS5pc0luTGVhcFllYXIgLy89PiB0cnVlCiAgICAgICAgICogQGV4YW1wbGUgRGF0ZVRpbWUubG9jYWwoMjAxMykuaXNJbkxlYXBZZWFyIC8vPT4gZmFsc2UKICAgICAgICAgKiBAdHlwZSB7Ym9vbGVhbn0KICAgICAgICAgKi8KCiAgICAgIH0sIHsKICAgICAgICBrZXk6ICJpc0luTGVhcFllYXIiLAogICAgICAgIGdldDogZnVuY3Rpb24gZ2V0KCkgewogICAgICAgICAgcmV0dXJuIGlzTGVhcFllYXIodGhpcy55ZWFyKTsKICAgICAgICB9CiAgICAgICAgLyoqCiAgICAgICAgICogUmV0dXJucyB0aGUgbnVtYmVyIG9mIGRheXMgaW4gdGhpcyBEYXRlVGltZSdzIG1vbnRoCiAgICAgICAgICogQGV4YW1wbGUgRGF0ZVRpbWUubG9jYWwoMjAxNiwgMikuZGF5c0luTW9udGggLy89PiAyOQogICAgICAgICAqIEBleGFtcGxlIERhdGVUaW1lLmxvY2FsKDIwMTYsIDMpLmRheXNJbk1vbnRoIC8vPT4gMzEKICAgICAgICAgKiBAdHlwZSB7bnVtYmVyfQogICAgICAgICAqLwoKICAgICAgfSwgewogICAgICAgIGtleTogImRheXNJbk1vbnRoIiwKICAgICAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHsKICAgICAgICAgIHJldHVybiBkYXlzSW5Nb250aCh0aGlzLnllYXIsIHRoaXMubW9udGgpOwogICAgICAgIH0KICAgICAgICAvKioKICAgICAgICAgKiBSZXR1cm5zIHRoZSBudW1iZXIgb2YgZGF5cyBpbiB0aGlzIERhdGVUaW1lJ3MgeWVhcgogICAgICAgICAqIEBleGFtcGxlIERhdGVUaW1lLmxvY2FsKDIwMTYpLmRheXNJblllYXIgLy89PiAzNjYKICAgICAgICAgKiBAZXhhbXBsZSBEYXRlVGltZS5sb2NhbCgyMDEzKS5kYXlzSW5ZZWFyIC8vPT4gMzY1CiAgICAgICAgICogQHR5cGUge251bWJlcn0KICAgICAgICAgKi8KCiAgICAgIH0sIHsKICAgICAgICBrZXk6ICJkYXlzSW5ZZWFyIiwKICAgICAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHsKICAgICAgICAgIHJldHVybiB0aGlzLmlzVmFsaWQgPyBkYXlzSW5ZZWFyKHRoaXMueWVhcikgOiBOYU47CiAgICAgICAgfQogICAgICAgIC8qKgogICAgICAgICAqIFJldHVybnMgdGhlIG51bWJlciBvZiB3ZWVrcyBpbiB0aGlzIERhdGVUaW1lJ3MgeWVhcgogICAgICAgICAqIEBzZWUgaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvSVNPX3dlZWtfZGF0ZQogICAgICAgICAqIEBleGFtcGxlIERhdGVUaW1lLmxvY2FsKDIwMDQpLndlZWtzSW5XZWVrWWVhciAvLz0+IDUzCiAgICAgICAgICogQGV4YW1wbGUgRGF0ZVRpbWUubG9jYWwoMjAxMykud2Vla3NJbldlZWtZZWFyIC8vPT4gNTIKICAgICAgICAgKiBAdHlwZSB7bnVtYmVyfQogICAgICAgICAqLwoKICAgICAgfSwgewogICAgICAgIGtleTogIndlZWtzSW5XZWVrWWVhciIsCiAgICAgICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7CiAgICAgICAgICByZXR1cm4gdGhpcy5pc1ZhbGlkID8gd2Vla3NJbldlZWtZZWFyKHRoaXMud2Vla1llYXIpIDogTmFOOwogICAgICAgIH0KICAgICAgfV0sIFt7CiAgICAgICAga2V5OiAiREFURV9TSE9SVCIsCiAgICAgICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7CiAgICAgICAgICByZXR1cm4gREFURV9TSE9SVDsKICAgICAgICB9CiAgICAgICAgLyoqCiAgICAgICAgICoge0BsaW5rIHRvTG9jYWxlU3RyaW5nfSBmb3JtYXQgbGlrZSAnT2N0IDE0LCAxOTgzJwogICAgICAgICAqIEB0eXBlIHtPYmplY3R9CiAgICAgICAgICovCgogICAgICB9LCB7CiAgICAgICAga2V5OiAiREFURV9NRUQiLAogICAgICAgIGdldDogZnVuY3Rpb24gZ2V0KCkgewogICAgICAgICAgcmV0dXJuIERBVEVfTUVEOwogICAgICAgIH0KICAgICAgICAvKioKICAgICAgICAgKiB7QGxpbmsgdG9Mb2NhbGVTdHJpbmd9IGZvcm1hdCBsaWtlICdGcmksIE9jdCAxNCwgMTk4MycKICAgICAgICAgKiBAdHlwZSB7T2JqZWN0fQogICAgICAgICAqLwoKICAgICAgfSwgewogICAgICAgIGtleTogIkRBVEVfTUVEX1dJVEhfV0VFS0RBWSIsCiAgICAgICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7CiAgICAgICAgICByZXR1cm4gREFURV9NRURfV0lUSF9XRUVLREFZOwogICAgICAgIH0KICAgICAgICAvKioKICAgICAgICAgKiB7QGxpbmsgdG9Mb2NhbGVTdHJpbmd9IGZvcm1hdCBsaWtlICdPY3RvYmVyIDE0LCAxOTgzJwogICAgICAgICAqIEB0eXBlIHtPYmplY3R9CiAgICAgICAgICovCgogICAgICB9LCB7CiAgICAgICAga2V5OiAiREFURV9GVUxMIiwKICAgICAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHsKICAgICAgICAgIHJldHVybiBEQVRFX0ZVTEw7CiAgICAgICAgfQogICAgICAgIC8qKgogICAgICAgICAqIHtAbGluayB0b0xvY2FsZVN0cmluZ30gZm9ybWF0IGxpa2UgJ1R1ZXNkYXksIE9jdG9iZXIgMTQsIDE5ODMnCiAgICAgICAgICogQHR5cGUge09iamVjdH0KICAgICAgICAgKi8KCiAgICAgIH0sIHsKICAgICAgICBrZXk6ICJEQVRFX0hVR0UiLAogICAgICAgIGdldDogZnVuY3Rpb24gZ2V0KCkgewogICAgICAgICAgcmV0dXJuIERBVEVfSFVHRTsKICAgICAgICB9CiAgICAgICAgLyoqCiAgICAgICAgICoge0BsaW5rIHRvTG9jYWxlU3RyaW5nfSBmb3JtYXQgbGlrZSAnMDk6MzAgQU0nLiBPbmx5IDEyLWhvdXIgaWYgdGhlIGxvY2FsZSBpcy4KICAgICAgICAgKiBAdHlwZSB7T2JqZWN0fQogICAgICAgICAqLwoKICAgICAgfSwgewogICAgICAgIGtleTogIlRJTUVfU0lNUExFIiwKICAgICAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHsKICAgICAgICAgIHJldHVybiBUSU1FX1NJTVBMRTsKICAgICAgICB9CiAgICAgICAgLyoqCiAgICAgICAgICoge0BsaW5rIHRvTG9jYWxlU3RyaW5nfSBmb3JtYXQgbGlrZSAnMDk6MzA6MjMgQU0nLiBPbmx5IDEyLWhvdXIgaWYgdGhlIGxvY2FsZSBpcy4KICAgICAgICAgKiBAdHlwZSB7T2JqZWN0fQogICAgICAgICAqLwoKICAgICAgfSwgewogICAgICAgIGtleTogIlRJTUVfV0lUSF9TRUNPTkRTIiwKICAgICAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHsKICAgICAgICAgIHJldHVybiBUSU1FX1dJVEhfU0VDT05EUzsKICAgICAgICB9CiAgICAgICAgLyoqCiAgICAgICAgICoge0BsaW5rIHRvTG9jYWxlU3RyaW5nfSBmb3JtYXQgbGlrZSAnMDk6MzA6MjMgQU0gRURUJy4gT25seSAxMi1ob3VyIGlmIHRoZSBsb2NhbGUgaXMuCiAgICAgICAgICogQHR5cGUge09iamVjdH0KICAgICAgICAgKi8KCiAgICAgIH0sIHsKICAgICAgICBrZXk6ICJUSU1FX1dJVEhfU0hPUlRfT0ZGU0VUIiwKICAgICAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHsKICAgICAgICAgIHJldHVybiBUSU1FX1dJVEhfU0hPUlRfT0ZGU0VUOwogICAgICAgIH0KICAgICAgICAvKioKICAgICAgICAgKiB7QGxpbmsgdG9Mb2NhbGVTdHJpbmd9IGZvcm1hdCBsaWtlICcwOTozMDoyMyBBTSBFYXN0ZXJuIERheWxpZ2h0IFRpbWUnLiBPbmx5IDEyLWhvdXIgaWYgdGhlIGxvY2FsZSBpcy4KICAgICAgICAgKiBAdHlwZSB7T2JqZWN0fQogICAgICAgICAqLwoKICAgICAgfSwgewogICAgICAgIGtleTogIlRJTUVfV0lUSF9MT05HX09GRlNFVCIsCiAgICAgICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7CiAgICAgICAgICByZXR1cm4gVElNRV9XSVRIX0xPTkdfT0ZGU0VUOwogICAgICAgIH0KICAgICAgICAvKioKICAgICAgICAgKiB7QGxpbmsgdG9Mb2NhbGVTdHJpbmd9IGZvcm1hdCBsaWtlICcwOTozMCcsIGFsd2F5cyAyNC1ob3VyLgogICAgICAgICAqIEB0eXBlIHtPYmplY3R9CiAgICAgICAgICovCgogICAgICB9LCB7CiAgICAgICAga2V5OiAiVElNRV8yNF9TSU1QTEUiLAogICAgICAgIGdldDogZnVuY3Rpb24gZ2V0KCkgewogICAgICAgICAgcmV0dXJuIFRJTUVfMjRfU0lNUExFOwogICAgICAgIH0KICAgICAgICAvKioKICAgICAgICAgKiB7QGxpbmsgdG9Mb2NhbGVTdHJpbmd9IGZvcm1hdCBsaWtlICcwOTozMDoyMycsIGFsd2F5cyAyNC1ob3VyLgogICAgICAgICAqIEB0eXBlIHtPYmplY3R9CiAgICAgICAgICovCgogICAgICB9LCB7CiAgICAgICAga2V5OiAiVElNRV8yNF9XSVRIX1NFQ09ORFMiLAogICAgICAgIGdldDogZnVuY3Rpb24gZ2V0KCkgewogICAgICAgICAgcmV0dXJuIFRJTUVfMjRfV0lUSF9TRUNPTkRTOwogICAgICAgIH0KICAgICAgICAvKioKICAgICAgICAgKiB7QGxpbmsgdG9Mb2NhbGVTdHJpbmd9IGZvcm1hdCBsaWtlICcwOTozMDoyMyBFRFQnLCBhbHdheXMgMjQtaG91ci4KICAgICAgICAgKiBAdHlwZSB7T2JqZWN0fQogICAgICAgICAqLwoKICAgICAgfSwgewogICAgICAgIGtleTogIlRJTUVfMjRfV0lUSF9TSE9SVF9PRkZTRVQiLAogICAgICAgIGdldDogZnVuY3Rpb24gZ2V0KCkgewogICAgICAgICAgcmV0dXJuIFRJTUVfMjRfV0lUSF9TSE9SVF9PRkZTRVQ7CiAgICAgICAgfQogICAgICAgIC8qKgogICAgICAgICAqIHtAbGluayB0b0xvY2FsZVN0cmluZ30gZm9ybWF0IGxpa2UgJzA5OjMwOjIzIEVhc3Rlcm4gRGF5bGlnaHQgVGltZScsIGFsd2F5cyAyNC1ob3VyLgogICAgICAgICAqIEB0eXBlIHtPYmplY3R9CiAgICAgICAgICovCgogICAgICB9LCB7CiAgICAgICAga2V5OiAiVElNRV8yNF9XSVRIX0xPTkdfT0ZGU0VUIiwKICAgICAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHsKICAgICAgICAgIHJldHVybiBUSU1FXzI0X1dJVEhfTE9OR19PRkZTRVQ7CiAgICAgICAgfQogICAgICAgIC8qKgogICAgICAgICAqIHtAbGluayB0b0xvY2FsZVN0cmluZ30gZm9ybWF0IGxpa2UgJzEwLzE0LzE5ODMsIDk6MzAgQU0nLiBPbmx5IDEyLWhvdXIgaWYgdGhlIGxvY2FsZSBpcy4KICAgICAgICAgKiBAdHlwZSB7T2JqZWN0fQogICAgICAgICAqLwoKICAgICAgfSwgewogICAgICAgIGtleTogIkRBVEVUSU1FX1NIT1JUIiwKICAgICAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHsKICAgICAgICAgIHJldHVybiBEQVRFVElNRV9TSE9SVDsKICAgICAgICB9CiAgICAgICAgLyoqCiAgICAgICAgICoge0BsaW5rIHRvTG9jYWxlU3RyaW5nfSBmb3JtYXQgbGlrZSAnMTAvMTQvMTk4MywgOTozMDozMyBBTScuIE9ubHkgMTItaG91ciBpZiB0aGUgbG9jYWxlIGlzLgogICAgICAgICAqIEB0eXBlIHtPYmplY3R9CiAgICAgICAgICovCgogICAgICB9LCB7CiAgICAgICAga2V5OiAiREFURVRJTUVfU0hPUlRfV0lUSF9TRUNPTkRTIiwKICAgICAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHsKICAgICAgICAgIHJldHVybiBEQVRFVElNRV9TSE9SVF9XSVRIX1NFQ09ORFM7CiAgICAgICAgfQogICAgICAgIC8qKgogICAgICAgICAqIHtAbGluayB0b0xvY2FsZVN0cmluZ30gZm9ybWF0IGxpa2UgJ09jdCAxNCwgMTk4MywgOTozMCBBTScuIE9ubHkgMTItaG91ciBpZiB0aGUgbG9jYWxlIGlzLgogICAgICAgICAqIEB0eXBlIHtPYmplY3R9CiAgICAgICAgICovCgogICAgICB9LCB7CiAgICAgICAga2V5OiAiREFURVRJTUVfTUVEIiwKICAgICAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHsKICAgICAgICAgIHJldHVybiBEQVRFVElNRV9NRUQ7CiAgICAgICAgfQogICAgICAgIC8qKgogICAgICAgICAqIHtAbGluayB0b0xvY2FsZVN0cmluZ30gZm9ybWF0IGxpa2UgJ09jdCAxNCwgMTk4MywgOTozMDozMyBBTScuIE9ubHkgMTItaG91ciBpZiB0aGUgbG9jYWxlIGlzLgogICAgICAgICAqIEB0eXBlIHtPYmplY3R9CiAgICAgICAgICovCgogICAgICB9LCB7CiAgICAgICAga2V5OiAiREFURVRJTUVfTUVEX1dJVEhfU0VDT05EUyIsCiAgICAgICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7CiAgICAgICAgICByZXR1cm4gREFURVRJTUVfTUVEX1dJVEhfU0VDT05EUzsKICAgICAgICB9CiAgICAgICAgLyoqCiAgICAgICAgICoge0BsaW5rIHRvTG9jYWxlU3RyaW5nfSBmb3JtYXQgbGlrZSAnRnJpLCAxNCBPY3QgMTk4MywgOTozMCBBTScuIE9ubHkgMTItaG91ciBpZiB0aGUgbG9jYWxlIGlzLgogICAgICAgICAqIEB0eXBlIHtPYmplY3R9CiAgICAgICAgICovCgogICAgICB9LCB7CiAgICAgICAga2V5OiAiREFURVRJTUVfTUVEX1dJVEhfV0VFS0RBWSIsCiAgICAgICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7CiAgICAgICAgICByZXR1cm4gREFURVRJTUVfTUVEX1dJVEhfV0VFS0RBWTsKICAgICAgICB9CiAgICAgICAgLyoqCiAgICAgICAgICoge0BsaW5rIHRvTG9jYWxlU3RyaW5nfSBmb3JtYXQgbGlrZSAnT2N0b2JlciAxNCwgMTk4MywgOTozMCBBTSBFRFQnLiBPbmx5IDEyLWhvdXIgaWYgdGhlIGxvY2FsZSBpcy4KICAgICAgICAgKiBAdHlwZSB7T2JqZWN0fQogICAgICAgICAqLwoKICAgICAgfSwgewogICAgICAgIGtleTogIkRBVEVUSU1FX0ZVTEwiLAogICAgICAgIGdldDogZnVuY3Rpb24gZ2V0KCkgewogICAgICAgICAgcmV0dXJuIERBVEVUSU1FX0ZVTEw7CiAgICAgICAgfQogICAgICAgIC8qKgogICAgICAgICAqIHtAbGluayB0b0xvY2FsZVN0cmluZ30gZm9ybWF0IGxpa2UgJ09jdG9iZXIgMTQsIDE5ODMsIDk6MzA6MzMgQU0gRURUJy4gT25seSAxMi1ob3VyIGlmIHRoZSBsb2NhbGUgaXMuCiAgICAgICAgICogQHR5cGUge09iamVjdH0KICAgICAgICAgKi8KCiAgICAgIH0sIHsKICAgICAgICBrZXk6ICJEQVRFVElNRV9GVUxMX1dJVEhfU0VDT05EUyIsCiAgICAgICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7CiAgICAgICAgICByZXR1cm4gREFURVRJTUVfRlVMTF9XSVRIX1NFQ09ORFM7CiAgICAgICAgfQogICAgICAgIC8qKgogICAgICAgICAqIHtAbGluayB0b0xvY2FsZVN0cmluZ30gZm9ybWF0IGxpa2UgJ0ZyaWRheSwgT2N0b2JlciAxNCwgMTk4MywgOTozMCBBTSBFYXN0ZXJuIERheWxpZ2h0IFRpbWUnLiBPbmx5IDEyLWhvdXIgaWYgdGhlIGxvY2FsZSBpcy4KICAgICAgICAgKiBAdHlwZSB7T2JqZWN0fQogICAgICAgICAqLwoKICAgICAgfSwgewogICAgICAgIGtleTogIkRBVEVUSU1FX0hVR0UiLAogICAgICAgIGdldDogZnVuY3Rpb24gZ2V0KCkgewogICAgICAgICAgcmV0dXJuIERBVEVUSU1FX0hVR0U7CiAgICAgICAgfQogICAgICAgIC8qKgogICAgICAgICAqIHtAbGluayB0b0xvY2FsZVN0cmluZ30gZm9ybWF0IGxpa2UgJ0ZyaWRheSwgT2N0b2JlciAxNCwgMTk4MywgOTozMDozMyBBTSBFYXN0ZXJuIERheWxpZ2h0IFRpbWUnLiBPbmx5IDEyLWhvdXIgaWYgdGhlIGxvY2FsZSBpcy4KICAgICAgICAgKiBAdHlwZSB7T2JqZWN0fQogICAgICAgICAqLwoKICAgICAgfSwgewogICAgICAgIGtleTogIkRBVEVUSU1FX0hVR0VfV0lUSF9TRUNPTkRTIiwKICAgICAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHsKICAgICAgICAgIHJldHVybiBEQVRFVElNRV9IVUdFX1dJVEhfU0VDT05EUzsKICAgICAgICB9CiAgICAgIH1dKTsKCiAgICAgIHJldHVybiBEYXRlVGltZTsKICAgIH0oKTsKICAgIGZ1bmN0aW9uIGZyaWVuZGx5RGF0ZVRpbWUoZGF0ZVRpbWVpc2gpIHsKICAgICAgaWYgKERhdGVUaW1lLmlzRGF0ZVRpbWUoZGF0ZVRpbWVpc2gpKSB7CiAgICAgICAgcmV0dXJuIGRhdGVUaW1laXNoOwogICAgICB9IGVsc2UgaWYgKGRhdGVUaW1laXNoICYmIGRhdGVUaW1laXNoLnZhbHVlT2YgJiYgaXNOdW1iZXIoZGF0ZVRpbWVpc2gudmFsdWVPZigpKSkgewogICAgICAgIHJldHVybiBEYXRlVGltZS5mcm9tSlNEYXRlKGRhdGVUaW1laXNoKTsKICAgICAgfSBlbHNlIGlmIChkYXRlVGltZWlzaCAmJiB0eXBlb2YgZGF0ZVRpbWVpc2ggPT09ICJvYmplY3QiKSB7CiAgICAgICAgcmV0dXJuIERhdGVUaW1lLmZyb21PYmplY3QoZGF0ZVRpbWVpc2gpOwogICAgICB9IGVsc2UgewogICAgICAgIHRocm93IG5ldyBJbnZhbGlkQXJndW1lbnRFcnJvcigiVW5rbm93biBkYXRldGltZSBhcmd1bWVudDogIiArIGRhdGVUaW1laXNoICsgIiwgb2YgdHlwZSAiICsgdHlwZW9mIGRhdGVUaW1laXNoKTsKICAgICAgfQogICAgfQoKICAgIHZhciBWRVJTSU9OID0gIjEuMjcuMCI7CgogICAgZXhwb3J0cy5EYXRlVGltZSA9IERhdGVUaW1lOwogICAgZXhwb3J0cy5EdXJhdGlvbiA9IER1cmF0aW9uOwogICAgZXhwb3J0cy5GaXhlZE9mZnNldFpvbmUgPSBGaXhlZE9mZnNldFpvbmU7CiAgICBleHBvcnRzLklBTkFab25lID0gSUFOQVpvbmU7CiAgICBleHBvcnRzLkluZm8gPSBJbmZvOwogICAgZXhwb3J0cy5JbnRlcnZhbCA9IEludGVydmFsOwogICAgZXhwb3J0cy5JbnZhbGlkWm9uZSA9IEludmFsaWRab25lOwogICAgZXhwb3J0cy5Mb2NhbFpvbmUgPSBMb2NhbFpvbmU7CiAgICBleHBvcnRzLlNldHRpbmdzID0gU2V0dGluZ3M7CiAgICBleHBvcnRzLlZFUlNJT04gPSBWRVJTSU9OOwogICAgZXhwb3J0cy5ab25lID0gWm9uZTsKCiAgICB9KTsKCiAgICAvKiogQW4gT2JzaWRpYW4gbGluayB3aXRoIGFsbCBhc3NvY2lhdGVkIG1ldGFkYXRhLiAqLwogICAgY2xhc3MgTGluayB7CiAgICAgICAgY29uc3RydWN0b3IoZmllbGRzKSB7CiAgICAgICAgICAgIE9iamVjdC5hc3NpZ24odGhpcywgZmllbGRzKTsKICAgICAgICB9CiAgICAgICAgc3RhdGljIGZpbGUocGF0aCwgZW1iZWQgPSBmYWxzZSwgZGlzcGxheSkgewogICAgICAgICAgICByZXR1cm4gbmV3IExpbmsoewogICAgICAgICAgICAgICAgcGF0aCwKICAgICAgICAgICAgICAgIGVtYmVkLAogICAgICAgICAgICAgICAgZGlzcGxheSwKICAgICAgICAgICAgICAgIHR5cGU6ICdmaWxlJwogICAgICAgICAgICB9KTsKICAgICAgICB9CiAgICAgICAgc3RhdGljIGhlYWRlcihwYXRoLCBoZWFkZXIsIGVtYmVkLCBkaXNwbGF5KSB7CiAgICAgICAgICAgIHJldHVybiBuZXcgTGluayh7CiAgICAgICAgICAgICAgICBwYXRoLAogICAgICAgICAgICAgICAgZW1iZWQsCiAgICAgICAgICAgICAgICBkaXNwbGF5LAogICAgICAgICAgICAgICAgc3VicGF0aDogaGVhZGVyLAogICAgICAgICAgICAgICAgdHlwZTogJ2hlYWRlcicKICAgICAgICAgICAgfSk7CiAgICAgICAgfQogICAgICAgIHN0YXRpYyBibG9jayhwYXRoLCBibG9ja0lkLCBlbWJlZCwgZGlzcGxheSkgewogICAgICAgICAgICByZXR1cm4gbmV3IExpbmsoewogICAgICAgICAgICAgICAgcGF0aCwKICAgICAgICAgICAgICAgIGVtYmVkLAogICAgICAgICAgICAgICAgZGlzcGxheSwKICAgICAgICAgICAgICAgIHN1YnBhdGg6IGJsb2NrSWQsCiAgICAgICAgICAgICAgICB0eXBlOiAnYmxvY2snCiAgICAgICAgICAgIH0pOwogICAgICAgIH0KICAgICAgICBzdGF0aWMgZnJvbU9iamVjdChvYmplY3QpIHsKICAgICAgICAgICAgcmV0dXJuIG5ldyBMaW5rKG9iamVjdCk7CiAgICAgICAgfQogICAgICAgIGVxdWFscyhvdGhlcikgewogICAgICAgICAgICByZXR1cm4gdGhpcy5wYXRoID09IG90aGVyLnBhdGgKICAgICAgICAgICAgICAgICYmIHRoaXMudHlwZSA9PSBvdGhlci50eXBlCiAgICAgICAgICAgICAgICAmJiB0aGlzLnN1YnBhdGggPT0gb3RoZXIuc3VicGF0aDsKICAgICAgICB9CiAgICAgICAgdG9TdHJpbmcoKSB7CiAgICAgICAgICAgIHJldHVybiB0aGlzLm1hcmtkb3duKCk7CiAgICAgICAgfQogICAgICAgIC8qKiBDb252ZXJ0IHRoaXMgbGluayB0byBhIHJhdyBvYmplY3Qgd2hpY2ggKi8KICAgICAgICB0b09iamVjdCgpIHsKICAgICAgICAgICAgcmV0dXJuIHsgcGF0aDogdGhpcy5wYXRoLCB0eXBlOiB0aGlzLnR5cGUsIHN1YnBhdGg6IHRoaXMuc3VicGF0aCwgZGlzcGxheTogdGhpcy5kaXNwbGF5LCBlbWJlZDogdGhpcy5lbWJlZCB9OwogICAgICAgIH0KICAgICAgICAvKiogUmV0dXJuIGEgbmV3IGxpbmsgd2hpY2ggcG9pbnRzIHRvIHRoZSBzYW1lIGxvY2F0aW9uIGJ1dCB3aXRoIGEgbmV3IGRpc3BsYXkgdmFsdWUuICovCiAgICAgICAgd2l0aERpc3BsYXkoZGlzcGxheSkgewogICAgICAgICAgICByZXR1cm4gbmV3IExpbmsoT2JqZWN0LmFzc2lnbih7fSwgdGhpcywgeyBkaXNwbGF5IH0pKTsKICAgICAgICB9CiAgICAgICAgLyoqIENvbnZlcnQgdGhpcyBsaW5rIHRvIG1hcmtkb3duIHNvIGl0IGNhbiBiZSByZW5kZXJlZC4gKi8KICAgICAgICBtYXJrZG93bigpIHsKICAgICAgICAgICAgbGV0IHJlc3VsdCA9ICh0aGlzLmVtYmVkID8gIiEiIDogIiIpICsgIltbIiArIHRoaXMucGF0aDsKICAgICAgICAgICAgaWYgKHRoaXMudHlwZSA9PSAnaGVhZGVyJykKICAgICAgICAgICAgICAgIHJlc3VsdCArPSAnIycgKyB0aGlzLnN1YnBhdGg7CiAgICAgICAgICAgIGVsc2UgaWYgKHRoaXMudHlwZSA9PSAnYmxvY2snKQogICAgICAgICAgICAgICAgcmVzdWx0ICs9ICdeJyArIHRoaXMuc3VicGF0aDsKICAgICAgICAgICAgaWYgKHRoaXMuZGlzcGxheSAmJiAhdGhpcy5lbWJlZCkKICAgICAgICAgICAgICAgIHJlc3VsdCArPSAnfCcgKyB0aGlzLmRpc3BsYXk7CiAgICAgICAgICAgIGVsc2UgaWYgKCF0aGlzLmVtYmVkKQogICAgICAgICAgICAgICAgcmVzdWx0ICs9ICd8JyArIGdldEZpbGVOYW1lKHRoaXMucGF0aCkucmVwbGFjZSgiLm1kIiwgIiIpOwogICAgICAgICAgICByZXN1bHQgKz0gJ11dJzsKICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDsKICAgICAgICB9CiAgICAgICAgLyoqIFRoZSBzdHJpcHBlZCBuYW1lIG9mIHRoZSBmaWxlIHRoaXMgbGluayBwb2ludHMgaW50by4gKi8KICAgICAgICBmaWxlTmFtZSgpIHsKICAgICAgICAgICAgcmV0dXJuIGdldEZpbGVOYW1lKHRoaXMucGF0aCkucmVwbGFjZSgiLm1kIiwgIiIpOwogICAgICAgIH0KICAgIH0KICAgIHZhciBWYWx1ZXM7CiAgICAoZnVuY3Rpb24gKFZhbHVlcykgewogICAgICAgIC8qKiBDb252ZXJ0IGFuIGFyYml0YXJ5IHZhbHVlIGludG8gYSByZWFzb25hYmxlLCBNYXJrZG93bi1mcmllbmRseSBzdHJpbmcgaWYgcG9zc2libGUuICovCiAgICAgICAgZnVuY3Rpb24gdG9TdHJpbmcoZmllbGQsIHJlY3Vyc2l2ZSA9IGZhbHNlKSB7CiAgICAgICAgICAgIGxldCB3cmFwcGVkID0gd3JhcFZhbHVlKGZpZWxkKTsKICAgICAgICAgICAgaWYgKCF3cmFwcGVkKQogICAgICAgICAgICAgICAgcmV0dXJuICJudWxsIjsKICAgICAgICAgICAgc3dpdGNoICh3cmFwcGVkLnR5cGUpIHsKICAgICAgICAgICAgICAgIGNhc2UgInN0cmluZyI6IHJldHVybiB3cmFwcGVkLnZhbHVlOwogICAgICAgICAgICAgICAgY2FzZSAibnVtYmVyIjoKICAgICAgICAgICAgICAgIGNhc2UgImJvb2xlYW4iOgogICAgICAgICAgICAgICAgY2FzZSAiaHRtbCI6CiAgICAgICAgICAgICAgICBjYXNlICJudWxsIjoKICAgICAgICAgICAgICAgICAgICByZXR1cm4gIiIgKyB3cmFwcGVkLnZhbHVlOwogICAgICAgICAgICAgICAgY2FzZSAibGluayI6CiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHdyYXBwZWQudmFsdWUubWFya2Rvd24oKTsKICAgICAgICAgICAgICAgIGNhc2UgImZ1bmN0aW9uIjoKICAgICAgICAgICAgICAgICAgICByZXR1cm4gIjxmdW5jdGlvbj4iOwogICAgICAgICAgICAgICAgY2FzZSAiYXJyYXkiOgogICAgICAgICAgICAgICAgICAgIGxldCByZXN1bHQgPSAiIjsKICAgICAgICAgICAgICAgICAgICBpZiAocmVjdXJzaXZlKQogICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQgKz0gIlsiOwogICAgICAgICAgICAgICAgICAgIHJlc3VsdCArPSB3cmFwcGVkLnZhbHVlLm1hcChmID0+IHRvU3RyaW5nKGYsIHRydWUpKS5qb2luKCIsICIpOwogICAgICAgICAgICAgICAgICAgIGlmIChyZWN1cnNpdmUpCiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdCArPSAiXSI7CiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDsKICAgICAgICAgICAgICAgIGNhc2UgIm9iamVjdCI6CiAgICAgICAgICAgICAgICAgICAgcmV0dXJuICJ7ICIgKyBPYmplY3QuZW50cmllcyh3cmFwcGVkLnZhbHVlKS5tYXAoZSA9PiBlWzBdICsgIjogIiArIHRvU3RyaW5nKGVbMV0sIHRydWUpKS5qb2luKCIsICIpICsgIiB9IjsKICAgICAgICAgICAgICAgIGNhc2UgImRhdGUiOgogICAgICAgICAgICAgICAgICAgIHJldHVybiB3cmFwcGVkLnZhbHVlLnRvTG9jYWxlU3RyaW5nKGx1eG9uLkRhdGVUaW1lLkRBVEVUSU1FX1NIT1JUKTsKICAgICAgICAgICAgICAgIGNhc2UgImR1cmF0aW9uIjoKICAgICAgICAgICAgICAgICAgICByZXR1cm4gd3JhcHBlZC52YWx1ZS50b0lTT1RpbWUoKTsKICAgICAgICAgICAgfQogICAgICAgIH0KICAgICAgICBWYWx1ZXMudG9TdHJpbmcgPSB0b1N0cmluZzsKICAgICAgICAvKiogV3JhcCBhIGxpdGVyYWwgdmFsdWUgc28geW91IGNhbiBzd2l0Y2ggb24gaXQgZWFzaWx5LiAqLwogICAgICAgIGZ1bmN0aW9uIHdyYXBWYWx1ZSh2YWwpIHsKICAgICAgICAgICAgaWYgKGlzTnVsbCh2YWwpKQogICAgICAgICAgICAgICAgcmV0dXJuIHsgdHlwZTogJ251bGwnLCB2YWx1ZTogdmFsIH07CiAgICAgICAgICAgIGVsc2UgaWYgKGlzTnVtYmVyKHZhbCkpCiAgICAgICAgICAgICAgICByZXR1cm4geyB0eXBlOiAnbnVtYmVyJywgdmFsdWU6IHZhbCB9OwogICAgICAgICAgICBlbHNlIGlmIChpc1N0cmluZyh2YWwpKQogICAgICAgICAgICAgICAgcmV0dXJuIHsgdHlwZTogJ3N0cmluZycsIHZhbHVlOiB2YWwgfTsKICAgICAgICAgICAgZWxzZSBpZiAoaXNCb29sZWFuKHZhbCkpCiAgICAgICAgICAgICAgICByZXR1cm4geyB0eXBlOiAnYm9vbGVhbicsIHZhbHVlOiB2YWwgfTsKICAgICAgICAgICAgZWxzZSBpZiAoaXNEdXJhdGlvbih2YWwpKQogICAgICAgICAgICAgICAgcmV0dXJuIHsgdHlwZTogJ2R1cmF0aW9uJywgdmFsdWU6IHZhbCB9OwogICAgICAgICAgICBlbHNlIGlmIChpc0RhdGUodmFsKSkKICAgICAgICAgICAgICAgIHJldHVybiB7IHR5cGU6ICdkYXRlJywgdmFsdWU6IHZhbCB9OwogICAgICAgICAgICBlbHNlIGlmIChpc0h0bWwodmFsKSkKICAgICAgICAgICAgICAgIHJldHVybiB7IHR5cGU6ICdodG1sJywgdmFsdWU6IHZhbCB9OwogICAgICAgICAgICBlbHNlIGlmIChpc0FycmF5KHZhbCkpCiAgICAgICAgICAgICAgICByZXR1cm4geyB0eXBlOiAnYXJyYXknLCB2YWx1ZTogdmFsIH07CiAgICAgICAgICAgIGVsc2UgaWYgKGlzTGluayh2YWwpKQogICAgICAgICAgICAgICAgcmV0dXJuIHsgdHlwZTogJ2xpbmsnLCB2YWx1ZTogdmFsIH07CiAgICAgICAgICAgIGVsc2UgaWYgKGlzRnVuY3Rpb24odmFsKSkKICAgICAgICAgICAgICAgIHJldHVybiB7IHR5cGU6ICdmdW5jdGlvbicsIHZhbHVlOiB2YWwgfTsKICAgICAgICAgICAgZWxzZSBpZiAoaXNPYmplY3QodmFsKSkKICAgICAgICAgICAgICAgIHJldHVybiB7IHR5cGU6ICdvYmplY3QnLCB2YWx1ZTogdmFsIH07CiAgICAgICAgICAgIGVsc2UKICAgICAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7CiAgICAgICAgfQogICAgICAgIFZhbHVlcy53cmFwVmFsdWUgPSB3cmFwVmFsdWU7CiAgICAgICAgLyoqIENvbXBhcmUgdHdvIGFyYml0cmFyeSBKYXZhU2NyaXB0IHZhbHVlcy4gUHJvZHVjZXMgYSB0b3RhbCBvcmRlcmluZyBvdmVyIEFOWSBwb3NzaWJsZSBkYXRhdmlldyB2YWx1ZS4gKi8KICAgICAgICBmdW5jdGlvbiBjb21wYXJlVmFsdWUodmFsMSwgdmFsMiwgbGlua05vcm1hbGl6ZXIpIHsKICAgICAgICAgICAgLy8gSGFuZGxlIHVuZGVmaW5lZC9udWxscyBmaXJzdC4KICAgICAgICAgICAgaWYgKHZhbDEgPT09IHVuZGVmaW5lZCkKICAgICAgICAgICAgICAgIHZhbDEgPSBudWxsOwogICAgICAgICAgICBpZiAodmFsMiA9PT0gdW5kZWZpbmVkKQogICAgICAgICAgICAgICAgdmFsMiA9IG51bGw7CiAgICAgICAgICAgIGlmICh2YWwxID09PSBudWxsICYmIHZhbDIgPT09IG51bGwpCiAgICAgICAgICAgICAgICByZXR1cm4gMDsKICAgICAgICAgICAgZWxzZSBpZiAodmFsMSA9PT0gbnVsbCkKICAgICAgICAgICAgICAgIHJldHVybiAtMTsKICAgICAgICAgICAgZWxzZSBpZiAodmFsMiA9PT0gbnVsbCkKICAgICAgICAgICAgICAgIHJldHVybiAxOwogICAgICAgICAgICAvLyBBIG5vbi1udWxsIHZhbHVlIG5vdyB3aGljaCB3ZSBjYW4gd3JhcCAmIGNvbXBhcmUgb24uCiAgICAgICAgICAgIGxldCB3cmFwMSA9IHdyYXBWYWx1ZSh2YWwxKTsKICAgICAgICAgICAgbGV0IHdyYXAyID0gd3JhcFZhbHVlKHZhbDIpOwogICAgICAgICAgICBpZiAod3JhcDEgPT09IHVuZGVmaW5lZCAmJiB3cmFwMiA9PT0gdW5kZWZpbmVkKQogICAgICAgICAgICAgICAgcmV0dXJuIDA7CiAgICAgICAgICAgIGVsc2UgaWYgKHdyYXAxID09PSB1bmRlZmluZWQpCiAgICAgICAgICAgICAgICByZXR1cm4gLTE7CiAgICAgICAgICAgIGVsc2UgaWYgKHdyYXAyID09PSB1bmRlZmluZWQpCiAgICAgICAgICAgICAgICByZXR1cm4gMTsKICAgICAgICAgICAgaWYgKHdyYXAxLnR5cGUgIT0gd3JhcDIudHlwZSkKICAgICAgICAgICAgICAgIHJldHVybiB3cmFwMS50eXBlLmxvY2FsZUNvbXBhcmUod3JhcDIudHlwZSk7CiAgICAgICAgICAgIHN3aXRjaCAod3JhcDEudHlwZSkgewogICAgICAgICAgICAgICAgY2FzZSAic3RyaW5nIjoKICAgICAgICAgICAgICAgICAgICByZXR1cm4gd3JhcDEudmFsdWUubG9jYWxlQ29tcGFyZSh3cmFwMi52YWx1ZSk7CiAgICAgICAgICAgICAgICBjYXNlICJudW1iZXIiOgogICAgICAgICAgICAgICAgICAgIGlmICh3cmFwMS52YWx1ZSA8IHdyYXAyLnZhbHVlKQogICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gLTE7CiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAod3JhcDEudmFsdWUgPT0gd3JhcDIudmFsdWUpCiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAwOwogICAgICAgICAgICAgICAgICAgIHJldHVybiAxOwogICAgICAgICAgICAgICAgY2FzZSAibnVsbCI6CiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDA7CiAgICAgICAgICAgICAgICBjYXNlICJib29sZWFuIjoKICAgICAgICAgICAgICAgICAgICBpZiAod3JhcDEudmFsdWUgPT0gd3JhcDIudmFsdWUpCiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAwOwogICAgICAgICAgICAgICAgICAgIGVsc2UKICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHdyYXAxLnZhbHVlID8gMSA6IC0xOwogICAgICAgICAgICAgICAgY2FzZSAibGluayI6CiAgICAgICAgICAgICAgICAgICAgbGV0IG5vcm1hbGl6ZSA9IGxpbmtOb3JtYWxpemVyICE9PSBudWxsICYmIGxpbmtOb3JtYWxpemVyICE9PSB2b2lkIDAgPyBsaW5rTm9ybWFsaXplciA6ICgoeCkgPT4geCk7CiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG5vcm1hbGl6ZSh3cmFwMS52YWx1ZS5wYXRoKS5sb2NhbGVDb21wYXJlKG5vcm1hbGl6ZSh3cmFwMi52YWx1ZS5wYXRoKSk7CiAgICAgICAgICAgICAgICBjYXNlICJkYXRlIjoKICAgICAgICAgICAgICAgICAgICByZXR1cm4gKHdyYXAxLnZhbHVlIDwgd3JhcDIudmFsdWUpID8gLTEgOiAod3JhcDEudmFsdWUuZXF1YWxzKHdyYXAyLnZhbHVlKSA/IDAgOiAxKTsKICAgICAgICAgICAgICAgIGNhc2UgImR1cmF0aW9uIjoKICAgICAgICAgICAgICAgICAgICByZXR1cm4gd3JhcDEudmFsdWUgPCB3cmFwMi52YWx1ZSA/IC0xIDogKHdyYXAxLnZhbHVlLmVxdWFscyh3cmFwMi52YWx1ZSkgPyAwIDogMSk7CiAgICAgICAgICAgICAgICBjYXNlICJhcnJheSI6CiAgICAgICAgICAgICAgICAgICAgbGV0IGYxID0gd3JhcDEudmFsdWU7CiAgICAgICAgICAgICAgICAgICAgbGV0IGYyID0gd3JhcDIudmFsdWU7CiAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IE1hdGgubWluKGYxLmxlbmd0aCwgZjIubGVuZ3RoKTsgaW5kZXgrKykgewogICAgICAgICAgICAgICAgICAgICAgICBsZXQgY29tcCA9IGNvbXBhcmVWYWx1ZShmMVtpbmRleF0sIGYyW2luZGV4XSk7CiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjb21wICE9IDApCiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gY29tcDsKICAgICAgICAgICAgICAgICAgICB9CiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGYxLmxlbmd0aCAtIGYyLmxlbmd0aDsKICAgICAgICAgICAgICAgIGNhc2UgIm9iamVjdCI6CiAgICAgICAgICAgICAgICAgICAgbGV0IG8xID0gd3JhcDEudmFsdWU7CiAgICAgICAgICAgICAgICAgICAgbGV0IG8yID0gd3JhcDIudmFsdWU7CiAgICAgICAgICAgICAgICAgICAgbGV0IGsxID0gQXJyYXkuZnJvbShPYmplY3Qua2V5cyhvMSkpOwogICAgICAgICAgICAgICAgICAgIGxldCBrMiA9IEFycmF5LmZyb20oT2JqZWN0LmtleXMobzIpKTsKICAgICAgICAgICAgICAgICAgICBrMS5zb3J0KCk7CiAgICAgICAgICAgICAgICAgICAgazIuc29ydCgpOwogICAgICAgICAgICAgICAgICAgIGxldCBrZXlDb21wYXJlID0gY29tcGFyZVZhbHVlKGsxLCBrMik7CiAgICAgICAgICAgICAgICAgICAgaWYgKGtleUNvbXBhcmUgIT0gMCkKICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGtleUNvbXBhcmU7CiAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQga2V5IG9mIGsxKSB7CiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBjb21wID0gY29tcGFyZVZhbHVlKG8xW2tleV0sIG8yW2tleV0pOwogICAgICAgICAgICAgICAgICAgICAgICBpZiAoY29tcCAhPSAwKQogICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGNvbXA7CiAgICAgICAgICAgICAgICAgICAgfQogICAgICAgICAgICAgICAgICAgIHJldHVybiAwOwogICAgICAgICAgICAgICAgY2FzZSAiaHRtbCI6CiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDA7CiAgICAgICAgICAgICAgICBjYXNlICJmdW5jdGlvbiI6CiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDA7CiAgICAgICAgICAgIH0KICAgICAgICB9CiAgICAgICAgVmFsdWVzLmNvbXBhcmVWYWx1ZSA9IGNvbXBhcmVWYWx1ZTsKICAgICAgICAvKiogRmluZCB0aGUgY29ycmVzcG9uZGluZyBEYXRhdmVpdyB0eXBlIGZvciBhbiBhcmJpdHJhcnkgdmFsdWUuICovCiAgICAgICAgZnVuY3Rpb24gdHlwZU9mKHZhbCkgewogICAgICAgICAgICB2YXIgX2E7CiAgICAgICAgICAgIHJldHVybiAoX2EgPSB3cmFwVmFsdWUodmFsKSkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLnR5cGU7CiAgICAgICAgfQogICAgICAgIFZhbHVlcy50eXBlT2YgPSB0eXBlT2Y7CiAgICAgICAgLyoqIERldGVybWluZSBpZiB0aGUgZ2l2ZW4gdmFsdWUgaXMgInRydXRoeSIgKGkuZS4sIGlzIG5vbi1udWxsIGFuZCBoYXMgZGF0YSBpbiBpdCkuICovCiAgICAgICAgZnVuY3Rpb24gaXNUcnV0aHkoZmllbGQpIHsKICAgICAgICAgICAgbGV0IHdyYXBwZWQgPSB3cmFwVmFsdWUoZmllbGQpOwogICAgICAgICAgICBpZiAoIXdyYXBwZWQpCiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7CiAgICAgICAgICAgIHN3aXRjaCAod3JhcHBlZC50eXBlKSB7CiAgICAgICAgICAgICAgICBjYXNlICJudW1iZXIiOgogICAgICAgICAgICAgICAgICAgIHJldHVybiB3cmFwcGVkLnZhbHVlICE9IDA7CiAgICAgICAgICAgICAgICBjYXNlICJzdHJpbmciOgogICAgICAgICAgICAgICAgICAgIHJldHVybiB3cmFwcGVkLnZhbHVlLmxlbmd0aCA+IDA7CiAgICAgICAgICAgICAgICBjYXNlICJib29sZWFuIjoKICAgICAgICAgICAgICAgICAgICByZXR1cm4gd3JhcHBlZC52YWx1ZTsKICAgICAgICAgICAgICAgIGNhc2UgImxpbmsiOgogICAgICAgICAgICAgICAgICAgIHJldHVybiAhIXdyYXBwZWQudmFsdWUucGF0aDsKICAgICAgICAgICAgICAgIGNhc2UgImRhdGUiOgogICAgICAgICAgICAgICAgICAgIHJldHVybiB3cmFwcGVkLnZhbHVlLnRvTWlsbGlzKCkgIT0gMDsKICAgICAgICAgICAgICAgIGNhc2UgImR1cmF0aW9uIjoKICAgICAgICAgICAgICAgICAgICByZXR1cm4gd3JhcHBlZC52YWx1ZS5hcygic2Vjb25kcyIpICE9IDA7CiAgICAgICAgICAgICAgICBjYXNlICJvYmplY3QiOgogICAgICAgICAgICAgICAgICAgIHJldHVybiBPYmplY3Qua2V5cyh3cmFwcGVkLnZhbHVlKS5sZW5ndGggPiAwOwogICAgICAgICAgICAgICAgY2FzZSAiYXJyYXkiOgogICAgICAgICAgICAgICAgICAgIHJldHVybiB3cmFwcGVkLnZhbHVlLmxlbmd0aCA+IDA7CiAgICAgICAgICAgICAgICBjYXNlICJudWxsIjoKICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7CiAgICAgICAgICAgICAgICBjYXNlICJodG1sIjoKICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTsKICAgICAgICAgICAgICAgIGNhc2UgImZ1bmN0aW9uIjoKICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTsKICAgICAgICAgICAgfQogICAgICAgIH0KICAgICAgICBWYWx1ZXMuaXNUcnV0aHkgPSBpc1RydXRoeTsKICAgICAgICAvKiogRGVlcCBjb3B5IGEgZmllbGQuICovCiAgICAgICAgZnVuY3Rpb24gZGVlcENvcHkoZmllbGQpIHsKICAgICAgICAgICAgaWYgKFZhbHVlcy5pc0FycmF5KGZpZWxkKSkgewogICAgICAgICAgICAgICAgcmV0dXJuIFtdLmNvbmNhdChmaWVsZC5tYXAodiA9PiBkZWVwQ29weSh2KSkpOwogICAgICAgICAgICB9CiAgICAgICAgICAgIGVsc2UgaWYgKFZhbHVlcy5pc09iamVjdChmaWVsZCkpIHsKICAgICAgICAgICAgICAgIGxldCByZXN1bHQgPSB7fTsKICAgICAgICAgICAgICAgIGZvciAobGV0IFtrZXksIHZhbHVlXSBvZiBPYmplY3QuZW50cmllcyhmaWVsZCkpCiAgICAgICAgICAgICAgICAgICAgcmVzdWx0W2tleV0gPSBkZWVwQ29weSh2YWx1ZSk7CiAgICAgICAgICAgICAgICByZXR1cm4gcmVzdWx0OwogICAgICAgICAgICB9CiAgICAgICAgICAgIGVsc2UgewogICAgICAgICAgICAgICAgcmV0dXJuIGZpZWxkOwogICAgICAgICAgICB9CiAgICAgICAgfQogICAgICAgIFZhbHVlcy5kZWVwQ29weSA9IGRlZXBDb3B5OwogICAgICAgIGZ1bmN0aW9uIGlzU3RyaW5nKHZhbCkgewogICAgICAgICAgICByZXR1cm4gdHlwZW9mIHZhbCA9PSAic3RyaW5nIjsKICAgICAgICB9CiAgICAgICAgVmFsdWVzLmlzU3RyaW5nID0gaXNTdHJpbmc7CiAgICAgICAgZnVuY3Rpb24gaXNOdW1iZXIodmFsKSB7CiAgICAgICAgICAgIHJldHVybiB0eXBlb2YgdmFsID09ICJudW1iZXIiOwogICAgICAgIH0KICAgICAgICBWYWx1ZXMuaXNOdW1iZXIgPSBpc051bWJlcjsKICAgICAgICBmdW5jdGlvbiBpc0RhdGUodmFsKSB7CiAgICAgICAgICAgIHJldHVybiB2YWwgaW5zdGFuY2VvZiBsdXhvbi5EYXRlVGltZTsKICAgICAgICB9CiAgICAgICAgVmFsdWVzLmlzRGF0ZSA9IGlzRGF0ZTsKICAgICAgICBmdW5jdGlvbiBpc0R1cmF0aW9uKHZhbCkgewogICAgICAgICAgICByZXR1cm4gdmFsIGluc3RhbmNlb2YgbHV4b24uRHVyYXRpb247CiAgICAgICAgfQogICAgICAgIFZhbHVlcy5pc0R1cmF0aW9uID0gaXNEdXJhdGlvbjsKICAgICAgICBmdW5jdGlvbiBpc051bGwodmFsKSB7CiAgICAgICAgICAgIHJldHVybiB2YWwgPT09IG51bGwgfHwgdmFsID09PSB1bmRlZmluZWQ7CiAgICAgICAgfQogICAgICAgIFZhbHVlcy5pc051bGwgPSBpc051bGw7CiAgICAgICAgZnVuY3Rpb24gaXNBcnJheSh2YWwpIHsKICAgICAgICAgICAgcmV0dXJuIEFycmF5LmlzQXJyYXkodmFsKTsKICAgICAgICB9CiAgICAgICAgVmFsdWVzLmlzQXJyYXkgPSBpc0FycmF5OwogICAgICAgIGZ1bmN0aW9uIGlzQm9vbGVhbih2YWwpIHsKICAgICAgICAgICAgcmV0dXJuIHR5cGVvZiB2YWwgPT09ICJib29sZWFuIjsKICAgICAgICB9CiAgICAgICAgVmFsdWVzLmlzQm9vbGVhbiA9IGlzQm9vbGVhbjsKICAgICAgICBmdW5jdGlvbiBpc0xpbmsodmFsKSB7CiAgICAgICAgICAgIHJldHVybiB2YWwgaW5zdGFuY2VvZiBMaW5rOwogICAgICAgIH0KICAgICAgICBWYWx1ZXMuaXNMaW5rID0gaXNMaW5rOwogICAgICAgIGZ1bmN0aW9uIGlzSHRtbCh2YWwpIHsKICAgICAgICAgICAgaWYgKHR5cGVvZiBIVE1MRWxlbWVudCAhPT0gJ3VuZGVmaW5lZCcpIHsKICAgICAgICAgICAgICAgIHJldHVybiB2YWwgaW5zdGFuY2VvZiBIVE1MRWxlbWVudDsKICAgICAgICAgICAgfQogICAgICAgICAgICBlbHNlIHsKICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTsKICAgICAgICAgICAgfQogICAgICAgIH0KICAgICAgICBWYWx1ZXMuaXNIdG1sID0gaXNIdG1sOwogICAgICAgIGZ1bmN0aW9uIGlzT2JqZWN0KHZhbCkgewogICAgICAgICAgICByZXR1cm4gdHlwZW9mIHZhbCA9PSAib2JqZWN0IiAmJiAhaXNIdG1sKHZhbCkgJiYgIWlzQXJyYXkodmFsKSAmJiAhaXNEdXJhdGlvbih2YWwpICYmICFpc0RhdGUodmFsKQogICAgICAgICAgICAgICAgJiYgIWlzTGluayh2YWwpOwogICAgICAgIH0KICAgICAgICBWYWx1ZXMuaXNPYmplY3QgPSBpc09iamVjdDsKICAgICAgICBmdW5jdGlvbiBpc0Z1bmN0aW9uKHZhbCkgewogICAgICAgICAgICByZXR1cm4gdHlwZW9mIHZhbCA9PSAiZnVuY3Rpb24iOwogICAgICAgIH0KICAgICAgICBWYWx1ZXMuaXNGdW5jdGlvbiA9IGlzRnVuY3Rpb247CiAgICB9KShWYWx1ZXMgfHwgKFZhbHVlcyA9IHt9KSk7CiAgICB2YXIgVHJhbnNmZXJhYmxlVmFsdWVzOwogICAgKGZ1bmN0aW9uIChUcmFuc2ZlcmFibGVWYWx1ZXMpIHsKICAgICAgICAvKiogQ29udmVydCBhIGxpdGVyYWwgdmFsdWUgdG8gYSBzZXJpYWxpemVyLWZyaWVuZGx5IHRyYW5zZmVyYWJsZSB2YWx1ZS4gRG9lcyBub3Qgd29yayBmb3IgYWxsIHR5cGVzLiAqLwogICAgICAgIGZ1bmN0aW9uIHRyYW5zZmVyYWJsZSh2YWx1ZSkgewogICAgICAgICAgICBsZXQgd3JhcHBlZCA9IFZhbHVlcy53cmFwVmFsdWUodmFsdWUpOwogICAgICAgICAgICBpZiAod3JhcHBlZCA9PT0gdW5kZWZpbmVkKQogICAgICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDsKICAgICAgICAgICAgc3dpdGNoICh3cmFwcGVkLnR5cGUpIHsKICAgICAgICAgICAgICAgIGNhc2UgIm51bGwiOgogICAgICAgICAgICAgICAgY2FzZSAibnVtYmVyIjoKICAgICAgICAgICAgICAgIGNhc2UgInN0cmluZyI6CiAgICAgICAgICAgICAgICBjYXNlICJib29sZWFuIjoKICAgICAgICAgICAgICAgICAgICByZXR1cm4gd3JhcHBlZC52YWx1ZTsKICAgICAgICAgICAgICAgIGNhc2UgImRhdGUiOgogICAgICAgICAgICAgICAgICAgIHJldHVybiB7ICJfX190cmFuc2Zlci10eXBlIjogImRhdGUiLCAidmFsdWUiOiB3cmFwcGVkLnZhbHVlLnRvT2JqZWN0KHsgaW5jbHVkZUNvbmZpZzogdHJ1ZSB9KSB9OwogICAgICAgICAgICAgICAgY2FzZSAiZHVyYXRpb24iOgogICAgICAgICAgICAgICAgICAgIHJldHVybiB7ICJfX190cmFuc2Zlci10eXBlIjogImR1cmF0aW9uIiwgInZhbHVlIjogd3JhcHBlZC52YWx1ZS50b09iamVjdCh7IGluY2x1ZGVDb25maWc6IHRydWUgfSkgfTsKICAgICAgICAgICAgICAgIGNhc2UgImFycmF5IjoKICAgICAgICAgICAgICAgICAgICByZXR1cm4gd3JhcHBlZC52YWx1ZS5tYXAodiA9PiB0cmFuc2ZlcmFibGUodikpOwogICAgICAgICAgICAgICAgY2FzZSAib2JqZWN0IjoKICAgICAgICAgICAgICAgICAgICBsZXQgcmVzdWx0ID0ge307CiAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgW2tleSwgdmFsdWVdIG9mIE9iamVjdC5lbnRyaWVzKHdyYXBwZWQudmFsdWUpKQogICAgICAgICAgICAgICAgICAgICAgICByZXN1bHRba2V5XSA9IHRyYW5zZmVyYWJsZSh2YWx1ZSk7CiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDsKICAgICAgICAgICAgICAgIGNhc2UgImxpbmsiOgogICAgICAgICAgICAgICAgICAgIHJldHVybiB7ICJfX190cmFuc2Zlci10eXBlIjogImxpbmsiLCAidmFsdWUiOiB3cmFwcGVkLnZhbHVlLnRvT2JqZWN0KCkgfTsKICAgICAgICAgICAgICAgIGRlZmF1bHQ6CiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDsKICAgICAgICAgICAgfQogICAgICAgIH0KICAgICAgICBUcmFuc2ZlcmFibGVWYWx1ZXMudHJhbnNmZXJhYmxlID0gdHJhbnNmZXJhYmxlOwogICAgICAgIC8qKiBDb252ZXJ0IGEgdHJhbnNmZXJhYmxlIHZhbHVlIGJhY2sgdG8gYSBsaXRlcmFsIHZhbHVlIHdlIGNhbiB3b3JrIHdpdGguICovCiAgICAgICAgZnVuY3Rpb24gdmFsdWUodHJhbnNmZXJhYmxlKSB7CiAgICAgICAgICAgIGlmICh0cmFuc2ZlcmFibGUgPT09IG51bGwgfHwgdHJhbnNmZXJhYmxlID09PSB1bmRlZmluZWQpIHsKICAgICAgICAgICAgICAgIHJldHVybiBudWxsOwogICAgICAgICAgICB9CiAgICAgICAgICAgIGVsc2UgaWYgKHR5cGVvZiB0cmFuc2ZlcmFibGUgPT09ICJvYmplY3QiICYmICJfX190cmFuc2Zlci10eXBlIiBpbiB0cmFuc2ZlcmFibGUpIHsKICAgICAgICAgICAgICAgIHN3aXRjaCAodHJhbnNmZXJhYmxlWyJfX190cmFuc2Zlci10eXBlIl0pIHsKICAgICAgICAgICAgICAgICAgICBjYXNlICJkYXRlIjogcmV0dXJuIGx1eG9uLkRhdGVUaW1lLmZyb21PYmplY3QodHJhbnNmZXJhYmxlLnZhbHVlKTsKICAgICAgICAgICAgICAgICAgICBjYXNlICJkdXJhdGlvbiI6IHJldHVybiBsdXhvbi5EdXJhdGlvbi5mcm9tT2JqZWN0KHRyYW5zZmVyYWJsZS52YWx1ZSk7CiAgICAgICAgICAgICAgICAgICAgY2FzZSAibGluayI6IHJldHVybiBMaW5rLmZyb21PYmplY3QodHJhbnNmZXJhYmxlLnZhbHVlKTsKICAgICAgICAgICAgICAgIH0KICAgICAgICAgICAgfQogICAgICAgICAgICBlbHNlIGlmIChBcnJheS5pc0FycmF5KHRyYW5zZmVyYWJsZSkpIHsKICAgICAgICAgICAgICAgIHJldHVybiB0cmFuc2ZlcmFibGUubWFwKHYgPT4gdmFsdWUodikpOwogICAgICAgICAgICB9CiAgICAgICAgICAgIHJldHVybiB0cmFuc2ZlcmFibGU7CiAgICAgICAgfQogICAgICAgIFRyYW5zZmVyYWJsZVZhbHVlcy52YWx1ZSA9IHZhbHVlOwogICAgfSkoVHJhbnNmZXJhYmxlVmFsdWVzIHx8IChUcmFuc2ZlcmFibGVWYWx1ZXMgPSB7fSkpOwoKICAgIHZhciBwYXJzaW1tb25fdW1kX21pbiA9IGNyZWF0ZUNvbW1vbmpzTW9kdWxlKGZ1bmN0aW9uIChtb2R1bGUsIGV4cG9ydHMpIHsKICAgICFmdW5jdGlvbihuLHQpe21vZHVsZS5leHBvcnRzPXQoKTt9KCJ1bmRlZmluZWQiIT10eXBlb2Ygc2VsZj9zZWxmOmNvbW1vbmpzR2xvYmFsLGZ1bmN0aW9uKCl7cmV0dXJuIGZ1bmN0aW9uKG4pe3ZhciB0PXt9O2Z1bmN0aW9uIHIoZSl7aWYodFtlXSlyZXR1cm4gdFtlXS5leHBvcnRzO3ZhciB1PXRbZV09e2k6ZSxsOiExLGV4cG9ydHM6e319O3JldHVybiBuW2VdLmNhbGwodS5leHBvcnRzLHUsdS5leHBvcnRzLHIpLHUubD0hMCx1LmV4cG9ydHN9cmV0dXJuIHIubT1uLHIuYz10LHIuZD1mdW5jdGlvbihuLHQsZSl7ci5vKG4sdCl8fE9iamVjdC5kZWZpbmVQcm9wZXJ0eShuLHQse2NvbmZpZ3VyYWJsZTohMSxlbnVtZXJhYmxlOiEwLGdldDplfSk7fSxyLnI9ZnVuY3Rpb24obil7T2JqZWN0LmRlZmluZVByb3BlcnR5KG4sIl9fZXNNb2R1bGUiLHt2YWx1ZTohMH0pO30sci5uPWZ1bmN0aW9uKG4pe3ZhciB0PW4mJm4uX19lc01vZHVsZT9mdW5jdGlvbigpe3JldHVybiBuLmRlZmF1bHR9OmZ1bmN0aW9uKCl7cmV0dXJuIG59O3JldHVybiByLmQodCwiYSIsdCksdH0sci5vPWZ1bmN0aW9uKG4sdCl7cmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChuLHQpfSxyLnA9IiIscihyLnM9MCl9KFtmdW5jdGlvbihuLHQscil7ZnVuY3Rpb24gZShuKXtpZighKHRoaXMgaW5zdGFuY2VvZiBlKSlyZXR1cm4gbmV3IGUobik7dGhpcy5fPW47fXZhciB1PWUucHJvdG90eXBlO2Z1bmN0aW9uIG8obix0KXtmb3IodmFyIHI9MDtyPG47cisrKXQocik7fWZ1bmN0aW9uIGkobix0LHIpe3JldHVybiBmdW5jdGlvbihuLHQpe28odC5sZW5ndGgsZnVuY3Rpb24ocil7bih0W3JdLHIsdCk7fSk7fShmdW5jdGlvbihyLGUsdSl7dD1uKHQscixlLHUpO30sciksdH1mdW5jdGlvbiBmKG4sdCl7cmV0dXJuIGkoZnVuY3Rpb24odCxyLGUsdSl7cmV0dXJuIHQuY29uY2F0KFtuKHIsZSx1KV0pfSxbXSx0KX1mdW5jdGlvbiBhKG4sdCl7dmFyIHI9e3Y6MCxidWY6dH07cmV0dXJuIG8obixmdW5jdGlvbigpe3ZhciBuO3I9e3Y6ci52PDwxfChuPXIuYnVmLG5bMF0+PjcpLGJ1ZjpmdW5jdGlvbihuKXt2YXIgdD1pKGZ1bmN0aW9uKG4sdCxyLGUpe3JldHVybiBuLmNvbmNhdChyPT09ZS5sZW5ndGgtMT9CdWZmZXIuZnJvbShbdCwwXSkucmVhZFVJbnQxNkJFKDApOmUucmVhZFVJbnQxNkJFKHIpKX0sW10sbik7cmV0dXJuIEJ1ZmZlci5mcm9tKGYoZnVuY3Rpb24obil7cmV0dXJuIChuPDwxJjY1NTM1KT4+OH0sdCkpfShyLmJ1Zil9O30pLHJ9ZnVuY3Rpb24gYygpe3JldHVybiAidW5kZWZpbmVkIiE9dHlwZW9mIEJ1ZmZlcn1mdW5jdGlvbiBzKCl7aWYoIWMoKSl0aHJvdyBuZXcgRXJyb3IoIkJ1ZmZlciBnbG9iYWwgZG9lcyBub3QgZXhpc3Q7IHBsZWFzZSB1c2Ugd2VicGFjayBpZiB5b3UgbmVlZCB0byBwYXJzZSBCdWZmZXJzIGluIHRoZSBicm93c2VyLiIpfWZ1bmN0aW9uIGwobil7cygpO3ZhciB0PWkoZnVuY3Rpb24obix0KXtyZXR1cm4gbit0fSwwLG4pO2lmKHQlOCE9MCl0aHJvdyBuZXcgRXJyb3IoIlRoZSBiaXRzIFsiK24uam9pbigiLCAiKSsiXSBhZGQgdXAgdG8gIit0KyIgd2hpY2ggaXMgbm90IGFuIGV2ZW4gbnVtYmVyIG9mIGJ5dGVzOyB0aGUgdG90YWwgc2hvdWxkIGJlIGRpdmlzaWJsZSBieSA4Iik7dmFyIHIsdT10Lzgsbz0ocj1mdW5jdGlvbihuKXtyZXR1cm4gbj40OH0saShmdW5jdGlvbihuLHQpe3JldHVybiBufHwocih0KT90Om4pfSxudWxsLG4pKTtpZihvKXRocm93IG5ldyBFcnJvcihvKyIgYml0IHJhbmdlIHJlcXVlc3RlZCBleGNlZWRzIDQ4IGJpdCAoNiBieXRlKSBOdW1iZXIgbWF4LiIpO3JldHVybiBuZXcgZShmdW5jdGlvbih0LHIpe3ZhciBlPXUrcjtyZXR1cm4gZT50Lmxlbmd0aD94KHIsdS50b1N0cmluZygpKyIgYnl0ZXMiKTpiKGUsaShmdW5jdGlvbihuLHQpe3ZhciByPWEodCxuLmJ1Zik7cmV0dXJuIHtjb2xsOm4uY29sbC5jb25jYXQoci52KSxidWY6ci5idWZ9fSx7Y29sbDpbXSxidWY6dC5zbGljZShyLGUpfSxuKS5jb2xsKX0pfWZ1bmN0aW9uIHAobix0KXtyZXR1cm4gbmV3IGUoZnVuY3Rpb24ocixlKXtyZXR1cm4gcygpLGUrdD5yLmxlbmd0aD94KGUsdCsiIGJ5dGVzIGZvciAiK24pOmIoZSt0LHIuc2xpY2UoZSxlK3QpKX0pfWZ1bmN0aW9uIGgobix0KXtpZigibnVtYmVyIiE9dHlwZW9mKHI9dCl8fE1hdGguZmxvb3IocikhPT1yfHx0PDB8fHQ+Nil0aHJvdyBuZXcgRXJyb3IobisiIHJlcXVpcmVzIGludGVnZXIgbGVuZ3RoIGluIHJhbmdlIFswLCA2XS4iKTt2YXIgcjt9ZnVuY3Rpb24gZChuKXtyZXR1cm4gaCgidWludEJFIixuKSxwKCJ1aW50QkUoIituKyIpIixuKS5tYXAoZnVuY3Rpb24odCl7cmV0dXJuIHQucmVhZFVJbnRCRSgwLG4pfSl9ZnVuY3Rpb24gdihuKXtyZXR1cm4gaCgidWludExFIixuKSxwKCJ1aW50TEUoIituKyIpIixuKS5tYXAoZnVuY3Rpb24odCl7cmV0dXJuIHQucmVhZFVJbnRMRSgwLG4pfSl9ZnVuY3Rpb24gZyhuKXtyZXR1cm4gaCgiaW50QkUiLG4pLHAoImludEJFKCIrbisiKSIsbikubWFwKGZ1bmN0aW9uKHQpe3JldHVybiB0LnJlYWRJbnRCRSgwLG4pfSl9ZnVuY3Rpb24gbShuKXtyZXR1cm4gaCgiaW50TEUiLG4pLHAoImludExFKCIrbisiKSIsbikubWFwKGZ1bmN0aW9uKHQpe3JldHVybiB0LnJlYWRJbnRMRSgwLG4pfSl9ZnVuY3Rpb24geShuKXtyZXR1cm4gbiBpbnN0YW5jZW9mIGV9ZnVuY3Rpb24gRShuKXtyZXR1cm4gIltvYmplY3QgQXJyYXldIj09PXt9LnRvU3RyaW5nLmNhbGwobil9ZnVuY3Rpb24gdyhuKXtyZXR1cm4gYygpJiZCdWZmZXIuaXNCdWZmZXIobil9ZnVuY3Rpb24gYihuLHQpe3JldHVybiB7c3RhdHVzOiEwLGluZGV4Om4sdmFsdWU6dCxmdXJ0aGVzdDotMSxleHBlY3RlZDpbXX19ZnVuY3Rpb24geChuLHQpe3JldHVybiBFKHQpfHwodD1bdF0pLHtzdGF0dXM6ITEsaW5kZXg6LTEsdmFsdWU6bnVsbCxmdXJ0aGVzdDpuLGV4cGVjdGVkOnR9fWZ1bmN0aW9uIEIobix0KXtpZighdClyZXR1cm4gbjtpZihuLmZ1cnRoZXN0PnQuZnVydGhlc3QpcmV0dXJuIG47dmFyIHI9bi5mdXJ0aGVzdD09PXQuZnVydGhlc3Q/ZnVuY3Rpb24obix0KXtpZihmdW5jdGlvbigpe2lmKHZvaWQgMCE9PWUuX3N1cHBvcnRzU2V0KXJldHVybiBlLl9zdXBwb3J0c1NldDt2YXIgbj0idW5kZWZpbmVkIiE9dHlwZW9mIFNldDtyZXR1cm4gZS5fc3VwcG9ydHNTZXQ9bixufSgpJiZBcnJheS5mcm9tKXtmb3IodmFyIHI9bmV3IFNldChuKSx1PTA7dTx0Lmxlbmd0aDt1Kyspci5hZGQodFt1XSk7dmFyIG89QXJyYXkuZnJvbShyKTtyZXR1cm4gby5zb3J0KCksb31mb3IodmFyIGk9e30sZj0wO2Y8bi5sZW5ndGg7ZisrKWlbbltmXV09ITA7Zm9yKHZhciBhPTA7YTx0Lmxlbmd0aDthKyspaVt0W2FdXT0hMDt2YXIgYz1bXTtmb3IodmFyIHMgaW4gaSkoe30pLmhhc093blByb3BlcnR5LmNhbGwoaSxzKSYmYy5wdXNoKHMpO3JldHVybiBjLnNvcnQoKSxjfShuLmV4cGVjdGVkLHQuZXhwZWN0ZWQpOnQuZXhwZWN0ZWQ7cmV0dXJuIHtzdGF0dXM6bi5zdGF0dXMsaW5kZXg6bi5pbmRleCx2YWx1ZTpuLnZhbHVlLGZ1cnRoZXN0OnQuZnVydGhlc3QsZXhwZWN0ZWQ6cn19dmFyIGo9e307ZnVuY3Rpb24gUyhuLHQpe2lmKHcobikpcmV0dXJuIHtvZmZzZXQ6dCxsaW5lOi0xLGNvbHVtbjotMX07biBpbiBqfHwoaltuXT17fSk7Zm9yKHZhciByPWpbbl0sZT0wLHU9MCxvPTAsaT10O2k+PTA7KXtpZihpIGluIHIpe2U9cltpXS5saW5lLDA9PT1vJiYobz1yW2ldLmxpbmVTdGFydCk7YnJlYWt9IlxuIj09PW4uY2hhckF0KGkpJiYodSsrLDA9PT1vJiYobz1pKzEpKSxpLS07fXZhciBmPWUrdSxhPXQtbztyZXR1cm4gclt0XT17bGluZTpmLGxpbmVTdGFydDpvfSx7b2Zmc2V0OnQsbGluZTpmKzEsY29sdW1uOmErMX19ZnVuY3Rpb24gXyhuKXtpZigheShuKSl0aHJvdyBuZXcgRXJyb3IoIm5vdCBhIHBhcnNlcjogIituKX1mdW5jdGlvbiBMKG4sdCl7cmV0dXJuICJzdHJpbmciPT10eXBlb2Ygbj9uLmNoYXJBdCh0KTpuW3RdfWZ1bmN0aW9uIE8obil7aWYoIm51bWJlciIhPXR5cGVvZiBuKXRocm93IG5ldyBFcnJvcigibm90IGEgbnVtYmVyOiAiK24pfWZ1bmN0aW9uIGsobil7aWYoImZ1bmN0aW9uIiE9dHlwZW9mIG4pdGhyb3cgbmV3IEVycm9yKCJub3QgYSBmdW5jdGlvbjogIituKX1mdW5jdGlvbiBQKG4pe2lmKCJzdHJpbmciIT10eXBlb2Ygbil0aHJvdyBuZXcgRXJyb3IoIm5vdCBhIHN0cmluZzogIituKX12YXIgcT0yLEE9MyxJPTgsRj01KkksTT00Kkksej0iICAiO2Z1bmN0aW9uIFIobix0KXtyZXR1cm4gbmV3IEFycmF5KHQrMSkuam9pbihuKX1mdW5jdGlvbiBVKG4sdCxyKXt2YXIgZT10LW4ubGVuZ3RoO3JldHVybiBlPD0wP246UihyLGUpK259ZnVuY3Rpb24gVyhuLHQscixlKXtyZXR1cm4ge2Zyb206bi10PjA/bi10OjAsdG86bityPmU/ZTpuK3J9fWZ1bmN0aW9uIEQobix0KXt2YXIgcixlLHUsbyxhLGM9dC5pbmRleCxzPWMub2Zmc2V0LGw9MTtpZihzPT09bi5sZW5ndGgpcmV0dXJuICJHb3QgdGhlIGVuZCBvZiB0aGUgaW5wdXQiO2lmKHcobikpe3ZhciBwPXMtcyVJLGg9cy1wLGQ9VyhwLEYsTStJLG4ubGVuZ3RoKSx2PWYoZnVuY3Rpb24obil7cmV0dXJuIGYoZnVuY3Rpb24obil7cmV0dXJuIFUobi50b1N0cmluZygxNiksMiwiMCIpfSxuKX0sZnVuY3Rpb24obix0KXt2YXIgcj1uLmxlbmd0aCxlPVtdLHU9MDtpZihyPD10KXJldHVybiBbbi5zbGljZSgpXTtmb3IodmFyIG89MDtvPHI7bysrKWVbdV18fGUucHVzaChbXSksZVt1XS5wdXNoKG5bb10pLChvKzEpJXQ9PTAmJnUrKztyZXR1cm4gZX0obi5zbGljZShkLmZyb20sZC50bykudG9KU09OKCkuZGF0YSxJKSk7bz1mdW5jdGlvbihuKXtyZXR1cm4gMD09PW4uZnJvbSYmMT09PW4udG8/e2Zyb206bi5mcm9tLHRvOm4udG99Ontmcm9tOm4uZnJvbS9JLHRvOk1hdGguZmxvb3Iobi50by9JKX19KGQpLGU9cC9JLHI9MypoLGg+PTQmJihyKz0xKSxsPTIsdT1mKGZ1bmN0aW9uKG4pe3JldHVybiBuLmxlbmd0aDw9ND9uLmpvaW4oIiAiKTpuLnNsaWNlKDAsNCkuam9pbigiICIpKyIgICIrbi5zbGljZSg0KS5qb2luKCIgIil9LHYpLChhPSg4KihvLnRvPjA/by50by0xOm8udG8pKS50b1N0cmluZygxNikubGVuZ3RoKTwyJiYoYT0yKTt9ZWxzZSB7dmFyIGc9bi5zcGxpdCgvXHJcbnxbXG5cclx1MjAyOFx1MjAyOV0vKTtyPWMuY29sdW1uLTEsZT1jLmxpbmUtMSxvPVcoZSxxLEEsZy5sZW5ndGgpLHU9Zy5zbGljZShvLmZyb20sby50byksYT1vLnRvLnRvU3RyaW5nKCkubGVuZ3RoO312YXIgbT1lLW8uZnJvbTtyZXR1cm4gdyhuKSYmKGE9KDgqKG8udG8+MD9vLnRvLTE6by50bykpLnRvU3RyaW5nKDE2KS5sZW5ndGgpPDImJihhPTIpLGkoZnVuY3Rpb24odCxlLHUpe3ZhciBpLGY9dT09PW0sYz1mPyI+ICI6ejtyZXR1cm4gaT13KG4pP1UoKDgqKG8uZnJvbSt1KSkudG9TdHJpbmcoMTYpLGEsIjAiKTpVKChvLmZyb20rdSsxKS50b1N0cmluZygpLGEsIiAiKSxbXS5jb25jYXQodCxbYytpKyIgfCAiK2VdLGY/W3orUigiICIsYSkrIiB8ICIrVSgiIixyLCIgIikrUigiXiIsbCldOltdKX0sW10sdSkuam9pbigiXG4iKX1mdW5jdGlvbiBOKG4sdCl7cmV0dXJuIFsiXG4iLCItLSBQQVJTSU5HIEZBSUxFRCAiK1IoIi0iLDUwKSwiXG5cbiIsRChuLHQpLCJcblxuIiwocj10LmV4cGVjdGVkLDE9PT1yLmxlbmd0aD8iRXhwZWN0ZWQ6XG5cbiIrclswXToiRXhwZWN0ZWQgb25lIG9mIHRoZSBmb2xsb3dpbmc6IFxuXG4iK3Iuam9pbigiLCAiKSksIlxuIl0uam9pbigiIik7dmFyIHI7fWZ1bmN0aW9uIEcobil7cmV0dXJuIHZvaWQgMCE9PW4uZmxhZ3M/bi5mbGFnczpbbi5nbG9iYWw/ImciOiIiLG4uaWdub3JlQ2FzZT8iaSI6IiIsbi5tdWx0aWxpbmU/Im0iOiIiLG4udW5pY29kZT8idSI6IiIsbi5zdGlja3k/InkiOiIiXS5qb2luKCIiKX1mdW5jdGlvbiBDKCl7Zm9yKHZhciBuPVtdLnNsaWNlLmNhbGwoYXJndW1lbnRzKSx0PW4ubGVuZ3RoLHI9MDtyPHQ7cis9MSlfKG5bcl0pO3JldHVybiBlKGZ1bmN0aW9uKHIsZSl7Zm9yKHZhciB1LG89bmV3IEFycmF5KHQpLGk9MDtpPHQ7aSs9MSl7aWYoISh1PUIobltpXS5fKHIsZSksdSkpLnN0YXR1cylyZXR1cm4gdTtvW2ldPXUudmFsdWUsZT11LmluZGV4O31yZXR1cm4gQihiKGUsbyksdSl9KX1mdW5jdGlvbiBKKCl7dmFyIG49W10uc2xpY2UuY2FsbChhcmd1bWVudHMpO2lmKDA9PT1uLmxlbmd0aCl0aHJvdyBuZXcgRXJyb3IoInNlcU1hcCBuZWVkcyBhdCBsZWFzdCBvbmUgYXJndW1lbnQiKTt2YXIgdD1uLnBvcCgpO3JldHVybiBrKHQpLEMuYXBwbHkobnVsbCxuKS5tYXAoZnVuY3Rpb24obil7cmV0dXJuIHQuYXBwbHkobnVsbCxuKX0pfWZ1bmN0aW9uIFQoKXt2YXIgbj1bXS5zbGljZS5jYWxsKGFyZ3VtZW50cyksdD1uLmxlbmd0aDtpZigwPT09dClyZXR1cm4gWSgiemVybyBhbHRlcm5hdGVzIik7Zm9yKHZhciByPTA7cjx0O3IrPTEpXyhuW3JdKTtyZXR1cm4gZShmdW5jdGlvbih0LHIpe2Zvcih2YXIgZSx1PTA7dTxuLmxlbmd0aDt1Kz0xKWlmKChlPUIoblt1XS5fKHQsciksZSkpLnN0YXR1cylyZXR1cm4gZTtyZXR1cm4gZX0pfWZ1bmN0aW9uIFYobix0KXtyZXR1cm4gSChuLHQpLm9yKFgoW10pKX1mdW5jdGlvbiBIKG4sdCl7cmV0dXJuIF8obiksXyh0KSxKKG4sdC50aGVuKG4pLm1hbnkoKSxmdW5jdGlvbihuLHQpe3JldHVybiBbbl0uY29uY2F0KHQpfSl9ZnVuY3Rpb24gSyhuKXtQKG4pO3ZhciB0PSInIituKyInIjtyZXR1cm4gZShmdW5jdGlvbihyLGUpe3ZhciB1PWUrbi5sZW5ndGgsbz1yLnNsaWNlKGUsdSk7cmV0dXJuIG89PT1uP2IodSxvKTp4KGUsdCl9KX1mdW5jdGlvbiBRKG4sdCl7IWZ1bmN0aW9uKG4pe2lmKCEobiBpbnN0YW5jZW9mIFJlZ0V4cCkpdGhyb3cgbmV3IEVycm9yKCJub3QgYSByZWdleHA6ICIrbik7Zm9yKHZhciB0PUcobikscj0wO3I8dC5sZW5ndGg7cisrKXt2YXIgZT10LmNoYXJBdChyKTtpZigiaSIhPT1lJiYibSIhPT1lJiYidSIhPT1lJiYicyIhPT1lKXRocm93IG5ldyBFcnJvcigndW5zdXBwb3J0ZWQgcmVnZXhwIGZsYWcgIicrZSsnIjogJytuKX19KG4pLGFyZ3VtZW50cy5sZW5ndGg+PTI/Tyh0KTp0PTA7dmFyIHI9ZnVuY3Rpb24obil7cmV0dXJuIFJlZ0V4cCgiXig/OiIrbi5zb3VyY2UrIikiLEcobikpfShuKSx1PSIiK247cmV0dXJuIGUoZnVuY3Rpb24obixlKXt2YXIgbz1yLmV4ZWMobi5zbGljZShlKSk7aWYobyl7aWYoMDw9dCYmdDw9by5sZW5ndGgpe3ZhciBpPW9bMF0sZj1vW3RdO3JldHVybiBiKGUraS5sZW5ndGgsZil9cmV0dXJuIHgoZSwidmFsaWQgbWF0Y2ggZ3JvdXAgKDAgdG8gIitvLmxlbmd0aCsiKSBpbiAiK3UpfXJldHVybiB4KGUsdSl9KX1mdW5jdGlvbiBYKG4pe3JldHVybiBlKGZ1bmN0aW9uKHQscil7cmV0dXJuIGIocixuKX0pfWZ1bmN0aW9uIFkobil7cmV0dXJuIGUoZnVuY3Rpb24odCxyKXtyZXR1cm4geChyLG4pfSl9ZnVuY3Rpb24gWihuKXtpZih5KG4pKXJldHVybiBlKGZ1bmN0aW9uKHQscil7dmFyIGU9bi5fKHQscik7cmV0dXJuIGUuaW5kZXg9cixlLnZhbHVlPSIiLGV9KTtpZigic3RyaW5nIj09dHlwZW9mIG4pcmV0dXJuIFooSyhuKSk7aWYobiBpbnN0YW5jZW9mIFJlZ0V4cClyZXR1cm4gWihRKG4pKTt0aHJvdyBuZXcgRXJyb3IoIm5vdCBhIHN0cmluZywgcmVnZXhwLCBvciBwYXJzZXI6ICIrbil9ZnVuY3Rpb24gJChuKXtyZXR1cm4gXyhuKSxlKGZ1bmN0aW9uKHQscil7dmFyIGU9bi5fKHQsciksdT10LnNsaWNlKHIsZS5pbmRleCk7cmV0dXJuIGUuc3RhdHVzP3gociwnbm90ICInK3UrJyInKTpiKHIsbnVsbCl9KX1mdW5jdGlvbiBubihuKXtyZXR1cm4gayhuKSxlKGZ1bmN0aW9uKHQscil7dmFyIGU9TCh0LHIpO3JldHVybiByPHQubGVuZ3RoJiZuKGUpP2IocisxLGUpOngociwiYSBjaGFyYWN0ZXIvYnl0ZSBtYXRjaGluZyAiK24pfSl9ZnVuY3Rpb24gdG4obix0KXthcmd1bWVudHMubGVuZ3RoPDImJih0PW4sbj12b2lkIDApO3ZhciByPWUoZnVuY3Rpb24obixlKXtyZXR1cm4gci5fPXQoKS5fLHIuXyhuLGUpfSk7cmV0dXJuIG4/ci5kZXNjKG4pOnJ9ZnVuY3Rpb24gcm4oKXtyZXR1cm4gWSgiZmFudGFzeS1sYW5kL2VtcHR5Iil9dS5wYXJzZT1mdW5jdGlvbihuKXtpZigic3RyaW5nIiE9dHlwZW9mIG4mJiF3KG4pKXRocm93IG5ldyBFcnJvcigiLnBhcnNlIG11c3QgYmUgY2FsbGVkIHdpdGggYSBzdHJpbmcgb3IgQnVmZmVyIGFzIGl0cyBhcmd1bWVudCIpO3ZhciB0LHI9dGhpcy5za2lwKGZuKS5fKG4sMCk7cmV0dXJuIHQ9ci5zdGF0dXM/e3N0YXR1czohMCx2YWx1ZTpyLnZhbHVlfTp7c3RhdHVzOiExLGluZGV4OlMobixyLmZ1cnRoZXN0KSxleHBlY3RlZDpyLmV4cGVjdGVkfSxkZWxldGUgaltuXSx0fSx1LnRyeVBhcnNlPWZ1bmN0aW9uKG4pe3ZhciB0PXRoaXMucGFyc2Uobik7aWYodC5zdGF0dXMpcmV0dXJuIHQudmFsdWU7dmFyIHI9TihuLHQpLGU9bmV3IEVycm9yKHIpO3Rocm93IGUudHlwZT0iUGFyc2ltbW9uRXJyb3IiLGUucmVzdWx0PXQsZX0sdS5hc3NlcnQ9ZnVuY3Rpb24obix0KXtyZXR1cm4gdGhpcy5jaGFpbihmdW5jdGlvbihyKXtyZXR1cm4gbihyKT9YKHIpOlkodCl9KX0sdS5vcj1mdW5jdGlvbihuKXtyZXR1cm4gVCh0aGlzLG4pfSx1LnRyaW09ZnVuY3Rpb24obil7cmV0dXJuIHRoaXMud3JhcChuLG4pfSx1LndyYXA9ZnVuY3Rpb24obix0KXtyZXR1cm4gSihuLHRoaXMsdCxmdW5jdGlvbihuLHQpe3JldHVybiB0fSl9LHUudGhydT1mdW5jdGlvbihuKXtyZXR1cm4gbih0aGlzKX0sdS50aGVuPWZ1bmN0aW9uKG4pe3JldHVybiBfKG4pLEModGhpcyxuKS5tYXAoZnVuY3Rpb24obil7cmV0dXJuIG5bMV19KX0sdS5tYW55PWZ1bmN0aW9uKCl7dmFyIG49dGhpcztyZXR1cm4gZShmdW5jdGlvbih0LHIpe2Zvcih2YXIgZT1bXSx1PXZvaWQgMDs7KXtpZighKHU9QihuLl8odCxyKSx1KSkuc3RhdHVzKXJldHVybiBCKGIocixlKSx1KTtpZihyPT09dS5pbmRleCl0aHJvdyBuZXcgRXJyb3IoImluZmluaXRlIGxvb3AgZGV0ZWN0ZWQgaW4gLm1hbnkoKSBwYXJzZXIgLS0tIGNhbGxpbmcgLm1hbnkoKSBvbiBhIHBhcnNlciB3aGljaCBjYW4gYWNjZXB0IHplcm8gY2hhcmFjdGVycyBpcyB1c3VhbGx5IHRoZSBjYXVzZSIpO3I9dS5pbmRleCxlLnB1c2godS52YWx1ZSk7fX0pfSx1LnRpZVdpdGg9ZnVuY3Rpb24obil7cmV0dXJuIFAobiksdGhpcy5tYXAoZnVuY3Rpb24odCl7aWYoZnVuY3Rpb24obil7aWYoIUUobikpdGhyb3cgbmV3IEVycm9yKCJub3QgYW4gYXJyYXk6ICIrbil9KHQpLHQubGVuZ3RoKXtQKHRbMF0pO2Zvcih2YXIgcj10WzBdLGU9MTtlPHQubGVuZ3RoO2UrKylQKHRbZV0pLHIrPW4rdFtlXTtyZXR1cm4gcn1yZXR1cm4gIiJ9KX0sdS50aWU9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy50aWVXaXRoKCIiKX0sdS50aW1lcz1mdW5jdGlvbihuLHQpe3ZhciByPXRoaXM7cmV0dXJuIGFyZ3VtZW50cy5sZW5ndGg8MiYmKHQ9biksTyhuKSxPKHQpLGUoZnVuY3Rpb24oZSx1KXtmb3IodmFyIG89W10saT12b2lkIDAsZj12b2lkIDAsYT0wO2E8bjthKz0xKXtpZihmPUIoaT1yLl8oZSx1KSxmKSwhaS5zdGF0dXMpcmV0dXJuIGY7dT1pLmluZGV4LG8ucHVzaChpLnZhbHVlKTt9Zm9yKDthPHQmJihmPUIoaT1yLl8oZSx1KSxmKSxpLnN0YXR1cyk7YSs9MSl1PWkuaW5kZXgsby5wdXNoKGkudmFsdWUpO3JldHVybiBCKGIodSxvKSxmKX0pfSx1LnJlc3VsdD1mdW5jdGlvbihuKXtyZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24oKXtyZXR1cm4gbn0pfSx1LmF0TW9zdD1mdW5jdGlvbihuKXtyZXR1cm4gdGhpcy50aW1lcygwLG4pfSx1LmF0TGVhc3Q9ZnVuY3Rpb24obil7cmV0dXJuIEoodGhpcy50aW1lcyhuKSx0aGlzLm1hbnkoKSxmdW5jdGlvbihuLHQpe3JldHVybiBuLmNvbmNhdCh0KX0pfSx1Lm1hcD1mdW5jdGlvbihuKXtrKG4pO3ZhciB0PXRoaXM7cmV0dXJuIGUoZnVuY3Rpb24ocixlKXt2YXIgdT10Ll8ocixlKTtyZXR1cm4gdS5zdGF0dXM/QihiKHUuaW5kZXgsbih1LnZhbHVlKSksdSk6dX0pfSx1LmNvbnRyYW1hcD1mdW5jdGlvbihuKXtrKG4pO3ZhciB0PXRoaXM7cmV0dXJuIGUoZnVuY3Rpb24ocixlKXt2YXIgdT10LnBhcnNlKG4oci5zbGljZShlKSkpO3JldHVybiB1LnN0YXR1cz9iKGUrci5sZW5ndGgsdS52YWx1ZSk6dX0pfSx1LnByb21hcD1mdW5jdGlvbihuLHQpe3JldHVybiBrKG4pLGsodCksdGhpcy5jb250cmFtYXAobikubWFwKHQpfSx1LnNraXA9ZnVuY3Rpb24obil7cmV0dXJuIEModGhpcyxuKS5tYXAoZnVuY3Rpb24obil7cmV0dXJuIG5bMF19KX0sdS5tYXJrPWZ1bmN0aW9uKCl7cmV0dXJuIEooZW4sdGhpcyxlbixmdW5jdGlvbihuLHQscil7cmV0dXJuIHtzdGFydDpuLHZhbHVlOnQsZW5kOnJ9fSl9LHUubm9kZT1mdW5jdGlvbihuKXtyZXR1cm4gSihlbix0aGlzLGVuLGZ1bmN0aW9uKHQscixlKXtyZXR1cm4ge25hbWU6bix2YWx1ZTpyLHN0YXJ0OnQsZW5kOmV9fSl9LHUuc2VwQnk9ZnVuY3Rpb24obil7cmV0dXJuIFYodGhpcyxuKX0sdS5zZXBCeTE9ZnVuY3Rpb24obil7cmV0dXJuIEgodGhpcyxuKX0sdS5sb29rYWhlYWQ9ZnVuY3Rpb24obil7cmV0dXJuIHRoaXMuc2tpcChaKG4pKX0sdS5ub3RGb2xsb3dlZEJ5PWZ1bmN0aW9uKG4pe3JldHVybiB0aGlzLnNraXAoJChuKSl9LHUuZGVzYz1mdW5jdGlvbihuKXtFKG4pfHwobj1bbl0pO3ZhciB0PXRoaXM7cmV0dXJuIGUoZnVuY3Rpb24ocixlKXt2YXIgdT10Ll8ocixlKTtyZXR1cm4gdS5zdGF0dXN8fCh1LmV4cGVjdGVkPW4pLHV9KX0sdS5mYWxsYmFjaz1mdW5jdGlvbihuKXtyZXR1cm4gdGhpcy5vcihYKG4pKX0sdS5hcD1mdW5jdGlvbihuKXtyZXR1cm4gSihuLHRoaXMsZnVuY3Rpb24obix0KXtyZXR1cm4gbih0KX0pfSx1LmNoYWluPWZ1bmN0aW9uKG4pe3ZhciB0PXRoaXM7cmV0dXJuIGUoZnVuY3Rpb24ocixlKXt2YXIgdT10Ll8ocixlKTtyZXR1cm4gdS5zdGF0dXM/QihuKHUudmFsdWUpLl8ocix1LmluZGV4KSx1KTp1fSl9LHUuY29uY2F0PXUub3IsdS5lbXB0eT1ybix1Lm9mPVgsdVsiZmFudGFzeS1sYW5kL2FwIl09dS5hcCx1WyJmYW50YXN5LWxhbmQvY2hhaW4iXT11LmNoYWluLHVbImZhbnRhc3ktbGFuZC9jb25jYXQiXT11LmNvbmNhdCx1WyJmYW50YXN5LWxhbmQvZW1wdHkiXT11LmVtcHR5LHVbImZhbnRhc3ktbGFuZC9vZiJdPXUub2YsdVsiZmFudGFzeS1sYW5kL21hcCJdPXUubWFwO3ZhciBlbj1lKGZ1bmN0aW9uKG4sdCl7cmV0dXJuIGIodCxTKG4sdCkpfSksdW49ZShmdW5jdGlvbihuLHQpe3JldHVybiB0Pj1uLmxlbmd0aD94KHQsImFueSBjaGFyYWN0ZXIvYnl0ZSIpOmIodCsxLEwobix0KSl9KSxvbj1lKGZ1bmN0aW9uKG4sdCl7cmV0dXJuIGIobi5sZW5ndGgsbi5zbGljZSh0KSl9KSxmbj1lKGZ1bmN0aW9uKG4sdCl7cmV0dXJuIHQ8bi5sZW5ndGg/eCh0LCJFT0YiKTpiKHQsbnVsbCl9KSxhbj1RKC9bMC05XS8pLmRlc2MoImEgZGlnaXQiKSxjbj1RKC9bMC05XSovKS5kZXNjKCJvcHRpb25hbCBkaWdpdHMiKSxzbj1RKC9bYS16XS9pKS5kZXNjKCJhIGxldHRlciIpLGxuPVEoL1thLXpdKi9pKS5kZXNjKCJvcHRpb25hbCBsZXR0ZXJzIikscG49USgvXHMqLykuZGVzYygib3B0aW9uYWwgd2hpdGVzcGFjZSIpLGhuPVEoL1xzKy8pLmRlc2MoIndoaXRlc3BhY2UiKSxkbj1LKCJcciIpLHZuPUsoIlxuIiksZ249SygiXHJcbiIpLG1uPVQoZ24sdm4sZG4pLmRlc2MoIm5ld2xpbmUiKSx5bj1UKG1uLGZuKTtlLmFsbD1vbixlLmFsdD1ULGUuYW55PXVuLGUuY3I9ZG4sZS5jcmVhdGVMYW5ndWFnZT1mdW5jdGlvbihuKXt2YXIgdD17fTtmb3IodmFyIHIgaW4gbikoe30pLmhhc093blByb3BlcnR5LmNhbGwobixyKSYmZnVuY3Rpb24ocil7dFtyXT10bihmdW5jdGlvbigpe3JldHVybiBuW3JdKHQpfSk7fShyKTtyZXR1cm4gdH0sZS5jcmxmPWduLGUuY3VzdG9tPWZ1bmN0aW9uKG4pe3JldHVybiBlKG4oYix4KSl9LGUuZGlnaXQ9YW4sZS5kaWdpdHM9Y24sZS5lbXB0eT1ybixlLmVuZD15bixlLmVvZj1mbixlLmZhaWw9WSxlLmZvcm1hdEVycm9yPU4sZS5pbmRleD1lbixlLmlzUGFyc2VyPXksZS5sYXp5PXRuLGUubGV0dGVyPXNuLGUubGV0dGVycz1sbixlLmxmPXZuLGUubG9va2FoZWFkPVosZS5tYWtlRmFpbHVyZT14LGUubWFrZVN1Y2Nlc3M9YixlLm5ld2xpbmU9bW4sZS5ub25lT2Y9ZnVuY3Rpb24obil7cmV0dXJuIG5uKGZ1bmN0aW9uKHQpe3JldHVybiBuLmluZGV4T2YodCk8MH0pLmRlc2MoIm5vbmUgb2YgJyIrbisiJyIpfSxlLm5vdEZvbGxvd2VkQnk9JCxlLm9mPVgsZS5vbmVPZj1mdW5jdGlvbihuKXtmb3IodmFyIHQ9bi5zcGxpdCgiIikscj0wO3I8dC5sZW5ndGg7cisrKXRbcl09IiciK3Rbcl0rIiciO3JldHVybiBubihmdW5jdGlvbih0KXtyZXR1cm4gbi5pbmRleE9mKHQpPj0wfSkuZGVzYyh0KX0sZS5vcHRXaGl0ZXNwYWNlPXBuLGUuUGFyc2VyPWUsZS5yYW5nZT1mdW5jdGlvbihuLHQpe3JldHVybiBubihmdW5jdGlvbihyKXtyZXR1cm4gbjw9ciYmcjw9dH0pLmRlc2MobisiLSIrdCl9LGUucmVnZXg9USxlLnJlZ2V4cD1RLGUuc2VwQnk9VixlLnNlcEJ5MT1ILGUuc2VxPUMsZS5zZXFNYXA9SixlLnNlcU9iaj1mdW5jdGlvbigpe2Zvcih2YXIgbix0PXt9LHI9MCx1PShuPWFyZ3VtZW50cyxBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChuKSksbz11Lmxlbmd0aCxpPTA7aTxvO2krPTEpe3ZhciBmPXVbaV07aWYoIXkoZikpe2lmKEUoZikmJjI9PT1mLmxlbmd0aCYmInN0cmluZyI9PXR5cGVvZiBmWzBdJiZ5KGZbMV0pKXt2YXIgYT1mWzBdO2lmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbCh0LGEpKXRocm93IG5ldyBFcnJvcigic2VxT2JqOiBkdXBsaWNhdGUga2V5ICIrYSk7dFthXT0hMCxyKys7Y29udGludWV9dGhyb3cgbmV3IEVycm9yKCJzZXFPYmogYXJndW1lbnRzIG11c3QgYmUgcGFyc2VycyBvciBbc3RyaW5nLCBwYXJzZXJdIGFycmF5IHBhaXJzLiIpfX1pZigwPT09cil0aHJvdyBuZXcgRXJyb3IoInNlcU9iaiBleHBlY3RzIGF0IGxlYXN0IG9uZSBuYW1lZCBwYXJzZXIsIGZvdW5kIHplcm8iKTtyZXR1cm4gZShmdW5jdGlvbihuLHQpe2Zvcih2YXIgcixlPXt9LGk9MDtpPG87aSs9MSl7dmFyIGYsYTtpZihFKHVbaV0pPyhmPXVbaV1bMF0sYT11W2ldWzFdKTooZj1udWxsLGE9dVtpXSksIShyPUIoYS5fKG4sdCkscikpLnN0YXR1cylyZXR1cm4gcjtmJiYoZVtmXT1yLnZhbHVlKSx0PXIuaW5kZXg7fXJldHVybiBCKGIodCxlKSxyKX0pfSxlLnN0cmluZz1LLGUuc3VjY2VlZD1YLGUudGFrZVdoaWxlPWZ1bmN0aW9uKG4pe3JldHVybiBrKG4pLGUoZnVuY3Rpb24odCxyKXtmb3IodmFyIGU9cjtlPHQubGVuZ3RoJiZuKEwodCxlKSk7KWUrKztyZXR1cm4gYihlLHQuc2xpY2UocixlKSl9KX0sZS50ZXN0PW5uLGUud2hpdGVzcGFjZT1obixlWyJmYW50YXN5LWxhbmQvZW1wdHkiXT1ybixlWyJmYW50YXN5LWxhbmQvb2YiXT1YLGUuQmluYXJ5PXtiaXRTZXE6bCxiaXRTZXFPYmo6ZnVuY3Rpb24obil7cygpO3ZhciB0PXt9LHI9MCxlPWYoZnVuY3Rpb24obil7aWYoRShuKSl7dmFyIGU9bjtpZigyIT09ZS5sZW5ndGgpdGhyb3cgbmV3IEVycm9yKCJbIitlLmpvaW4oIiwgIikrIl0gc2hvdWxkIGJlIGxlbmd0aCAyLCBnb3QgbGVuZ3RoICIrZS5sZW5ndGgpO2lmKFAoZVswXSksTyhlWzFdKSxPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwodCxlWzBdKSl0aHJvdyBuZXcgRXJyb3IoImR1cGxpY2F0ZSBrZXkgaW4gYml0U2VxT2JqOiAiK2VbMF0pO3JldHVybiB0W2VbMF1dPSEwLHIrKyxlfXJldHVybiBPKG4pLFtudWxsLG5dfSxuKTtpZihyPDEpdGhyb3cgbmV3IEVycm9yKCJiaXRTZXFPYmogZXhwZWN0cyBhdCBsZWFzdCBvbmUgbmFtZWQgcGFpciwgZ290IFsiK24uam9pbigiLCAiKSsiXSIpO3ZhciB1PWYoZnVuY3Rpb24obil7cmV0dXJuIG5bMF19LGUpO3JldHVybiBsKGYoZnVuY3Rpb24obil7cmV0dXJuIG5bMV19LGUpKS5tYXAoZnVuY3Rpb24obil7cmV0dXJuIGkoZnVuY3Rpb24obix0KXtyZXR1cm4gbnVsbCE9PXRbMF0mJihuW3RbMF1dPXRbMV0pLG59LHt9LGYoZnVuY3Rpb24odCxyKXtyZXR1cm4gW3QsbltyXV19LHUpKX0pfSxieXRlOmZ1bmN0aW9uKG4pe2lmKHMoKSxPKG4pLG4+MjU1KXRocm93IG5ldyBFcnJvcigiVmFsdWUgc3BlY2lmaWVkIHRvIGJ5dGUgY29uc3RydWN0b3IgKCIrbisiPTB4IituLnRvU3RyaW5nKDE2KSsiKSBpcyBsYXJnZXIgaW4gdmFsdWUgdGhhbiBhIHNpbmdsZSBieXRlLiIpO3ZhciB0PShuPjE1PyIweCI6IjB4MCIpK24udG9TdHJpbmcoMTYpO3JldHVybiBlKGZ1bmN0aW9uKHIsZSl7dmFyIHU9TChyLGUpO3JldHVybiB1PT09bj9iKGUrMSx1KTp4KGUsdCl9KX0sYnVmZmVyOmZ1bmN0aW9uKG4pe3JldHVybiBwKCJidWZmZXIiLG4pLm1hcChmdW5jdGlvbihuKXtyZXR1cm4gQnVmZmVyLmZyb20obil9KX0sZW5jb2RlZFN0cmluZzpmdW5jdGlvbihuLHQpe3JldHVybiBwKCJzdHJpbmciLHQpLm1hcChmdW5jdGlvbih0KXtyZXR1cm4gdC50b1N0cmluZyhuKX0pfSx1aW50QkU6ZCx1aW50OEJFOmQoMSksdWludDE2QkU6ZCgyKSx1aW50MzJCRTpkKDQpLHVpbnRMRTp2LHVpbnQ4TEU6digxKSx1aW50MTZMRTp2KDIpLHVpbnQzMkxFOnYoNCksaW50QkU6ZyxpbnQ4QkU6ZygxKSxpbnQxNkJFOmcoMiksaW50MzJCRTpnKDQpLGludExFOm0saW50OExFOm0oMSksaW50MTZMRTptKDIpLGludDMyTEU6bSg0KSxmbG9hdEJFOnAoImZsb2F0QkUiLDQpLm1hcChmdW5jdGlvbihuKXtyZXR1cm4gbi5yZWFkRmxvYXRCRSgwKX0pLGZsb2F0TEU6cCgiZmxvYXRMRSIsNCkubWFwKGZ1bmN0aW9uKG4pe3JldHVybiBuLnJlYWRGbG9hdExFKDApfSksZG91YmxlQkU6cCgiZG91YmxlQkUiLDgpLm1hcChmdW5jdGlvbihuKXtyZXR1cm4gbi5yZWFkRG91YmxlQkUoMCl9KSxkb3VibGVMRTpwKCJkb3VibGVMRSIsOCkubWFwKGZ1bmN0aW9uKG4pe3JldHVybiBuLnJlYWREb3VibGVMRSgwKX0pfSxuLmV4cG9ydHM9ZTt9XSl9KTsKICAgIH0pOwoKICAgIC8qKiBVdGlsaXR5IG1ldGhvZHMgZm9yIGNyZWF0aW5nICYgY29tcGFyaW5nIGZpZWxkcy4gKi8KICAgIHZhciBGaWVsZHM7CiAgICAoZnVuY3Rpb24gKEZpZWxkcykgewogICAgICAgIGZ1bmN0aW9uIHZhcmlhYmxlKG5hbWUpIHsKICAgICAgICAgICAgcmV0dXJuIHsgdHlwZTogJ3ZhcmlhYmxlJywgbmFtZSB9OwogICAgICAgIH0KICAgICAgICBGaWVsZHMudmFyaWFibGUgPSB2YXJpYWJsZTsKICAgICAgICBmdW5jdGlvbiBsaXRlcmFsKHZhbHVlKSB7CiAgICAgICAgICAgIHJldHVybiB7IHR5cGU6ICdsaXRlcmFsJywgdmFsdWUgfTsKICAgICAgICB9CiAgICAgICAgRmllbGRzLmxpdGVyYWwgPSBsaXRlcmFsOwogICAgICAgIGZ1bmN0aW9uIGJpbmFyeU9wKGxlZnQsIG9wLCByaWdodCkgewogICAgICAgICAgICByZXR1cm4geyB0eXBlOiAnYmluYXJ5b3AnLCBsZWZ0LCBvcCwgcmlnaHQgfTsKICAgICAgICB9CiAgICAgICAgRmllbGRzLmJpbmFyeU9wID0gYmluYXJ5T3A7CiAgICAgICAgZnVuY3Rpb24gaW5kZXgob2JqLCBpbmRleCkgewogICAgICAgICAgICByZXR1cm4geyB0eXBlOiAnaW5kZXgnLCBvYmplY3Q6IG9iaiwgaW5kZXggfTsKICAgICAgICB9CiAgICAgICAgRmllbGRzLmluZGV4ID0gaW5kZXg7CiAgICAgICAgLyoqIENvbnZlcnRzIGEgc3RyaW5nIGluIGRvdC1ub3RhdGlvbi1mb3JtYXQgaW50byBhIHZhcmlhYmxlIHdoaWNoIGluZGV4ZXMuICovCiAgICAgICAgZnVuY3Rpb24gaW5kZXhWYXJpYWJsZShuYW1lKSB7CiAgICAgICAgICAgIGxldCBwYXJ0cyA9IG5hbWUuc3BsaXQoIi4iKTsKICAgICAgICAgICAgbGV0IHJlc3VsdCA9IEZpZWxkcy52YXJpYWJsZShwYXJ0c1swXSk7CiAgICAgICAgICAgIGZvciAobGV0IGluZGV4ID0gMTsgaW5kZXggPCBwYXJ0cy5sZW5ndGg7IGluZGV4KyspIHsKICAgICAgICAgICAgICAgIHJlc3VsdCA9IEZpZWxkcy5pbmRleChyZXN1bHQsIEZpZWxkcy5saXRlcmFsKHBhcnRzW2luZGV4XSkpOwogICAgICAgICAgICB9CiAgICAgICAgICAgIHJldHVybiByZXN1bHQ7CiAgICAgICAgfQogICAgICAgIEZpZWxkcy5pbmRleFZhcmlhYmxlID0gaW5kZXhWYXJpYWJsZTsKICAgICAgICBmdW5jdGlvbiBmdW5jKGZ1bmMsIGFyZ3MpIHsKICAgICAgICAgICAgcmV0dXJuIHsgdHlwZTogJ2Z1bmN0aW9uJywgZnVuYywgYXJndW1lbnRzOiBhcmdzIH07CiAgICAgICAgfQogICAgICAgIEZpZWxkcy5mdW5jID0gZnVuYzsKICAgICAgICBmdW5jdGlvbiBuZWdhdGUoY2hpbGQpIHsKICAgICAgICAgICAgcmV0dXJuIHsgdHlwZTogJ25lZ2F0ZWQnLCBjaGlsZCB9OwogICAgICAgIH0KICAgICAgICBGaWVsZHMubmVnYXRlID0gbmVnYXRlOwogICAgICAgIGZ1bmN0aW9uIGlzQ29tcGFyZU9wKG9wKSB7CiAgICAgICAgICAgIHJldHVybiBvcCA9PSAiPD0iIHx8IG9wID09ICI8IiB8fCBvcCA9PSAiPiIgfHwgb3AgPT0gIj49IiB8fCBvcCA9PSAiIT0iIHx8IG9wID09ICI9IjsKICAgICAgICB9CiAgICAgICAgRmllbGRzLmlzQ29tcGFyZU9wID0gaXNDb21wYXJlT3A7CiAgICAgICAgRmllbGRzLk5VTEwgPSBGaWVsZHMubGl0ZXJhbChudWxsKTsKICAgIH0pKEZpZWxkcyB8fCAoRmllbGRzID0ge30pKTsKCiAgICAvKiogQVNUIGltcGxlbWVudGF0aW9uIGZvciBxdWVyaWVzIG92ZXIgZGF0YSBzb3VyY2VzLiAqLwogICAgLyoqIFV0aWxpdHkgZnVuY3Rpb25zIGZvciBjcmVhdGluZyBhbmQgbWFuaXB1bGF0aW5nIHNvdXJjZXMuICovCiAgICB2YXIgU291cmNlczsKICAgIChmdW5jdGlvbiAoU291cmNlcykgewogICAgICAgIGZ1bmN0aW9uIHRhZyh0YWcpIHsKICAgICAgICAgICAgcmV0dXJuIHsgdHlwZTogJ3RhZycsIHRhZyB9OwogICAgICAgIH0KICAgICAgICBTb3VyY2VzLnRhZyA9IHRhZzsKICAgICAgICBmdW5jdGlvbiBjc3YocGF0aCkgewogICAgICAgICAgICByZXR1cm4geyB0eXBlOiAnY3N2JywgcGF0aCB9OwogICAgICAgIH0KICAgICAgICBTb3VyY2VzLmNzdiA9IGNzdjsKICAgICAgICBmdW5jdGlvbiBmb2xkZXIocHJlZml4KSB7CiAgICAgICAgICAgIHJldHVybiB7IHR5cGU6ICdmb2xkZXInLCBmb2xkZXI6IHByZWZpeCB9OwogICAgICAgIH0KICAgICAgICBTb3VyY2VzLmZvbGRlciA9IGZvbGRlcjsKICAgICAgICBmdW5jdGlvbiBsaW5rKGZpbGUsIGluY29taW5nKSB7CiAgICAgICAgICAgIHJldHVybiB7IHR5cGU6ICdsaW5rJywgZmlsZSwgZGlyZWN0aW9uOiBpbmNvbWluZyA/ICdpbmNvbWluZycgOiAnb3V0Z29pbmcnIH07CiAgICAgICAgfQogICAgICAgIFNvdXJjZXMubGluayA9IGxpbms7CiAgICAgICAgZnVuY3Rpb24gYmluYXJ5T3AobGVmdCwgb3AsIHJpZ2h0KSB7CiAgICAgICAgICAgIHJldHVybiB7IHR5cGU6ICdiaW5hcnlvcCcsIGxlZnQsIG9wLCByaWdodCB9OwogICAgICAgIH0KICAgICAgICBTb3VyY2VzLmJpbmFyeU9wID0gYmluYXJ5T3A7CiAgICAgICAgZnVuY3Rpb24gbmVnYXRlKGNoaWxkKSB7CiAgICAgICAgICAgIHJldHVybiB7IHR5cGU6ICduZWdhdGUnLCBjaGlsZCB9OwogICAgICAgIH0KICAgICAgICBTb3VyY2VzLm5lZ2F0ZSA9IG5lZ2F0ZTsKICAgICAgICBmdW5jdGlvbiBlbXB0eSgpIHsKICAgICAgICAgICAgcmV0dXJuIHsgdHlwZTogJ2VtcHR5JyB9OwogICAgICAgIH0KICAgICAgICBTb3VyY2VzLmVtcHR5ID0gZW1wdHk7CiAgICB9KShTb3VyY2VzIHx8IChTb3VyY2VzID0ge30pKTsKCiAgICAvKiogUHJvdmlkZXMgYSBsb29rdXAgdGFibGUgZm9yIHVuaXQgZHVyYXRpb25zIG9mIHRoZSBnaXZlbiB0eXBlLiAqLwogICAgY29uc3QgRFVSQVRJT05fVFlQRVMgPSB7CiAgICAgICAgInllYXIiOiBsdXhvbi5EdXJhdGlvbi5mcm9tT2JqZWN0KHsgeWVhcnM6IDEgfSksCiAgICAgICAgInlyIjogbHV4b24uRHVyYXRpb24uZnJvbU9iamVjdCh7IHllYXJzOiAxIH0pLAogICAgICAgICJtb250aCI6IGx1eG9uLkR1cmF0aW9uLmZyb21PYmplY3QoeyBtb250aHM6IDEgfSksCiAgICAgICAgIm1vIjogbHV4b24uRHVyYXRpb24uZnJvbU9iamVjdCh7IG1vbnRoczogMSB9KSwKICAgICAgICAid2VlayI6IGx1eG9uLkR1cmF0aW9uLmZyb21PYmplY3QoeyB3ZWVrczogMSB9KSwKICAgICAgICAid2siOiBsdXhvbi5EdXJhdGlvbi5mcm9tT2JqZWN0KHsgd2Vla3M6IDEgfSksCiAgICAgICAgInciOiBsdXhvbi5EdXJhdGlvbi5mcm9tT2JqZWN0KHsgd2Vla3M6IDEgfSksCiAgICAgICAgImRheSI6IGx1eG9uLkR1cmF0aW9uLmZyb21PYmplY3QoeyBkYXlzOiAxIH0pLAogICAgICAgICJkIjogbHV4b24uRHVyYXRpb24uZnJvbU9iamVjdCh7IGRheXM6IDEgfSksCiAgICAgICAgImhvdXIiOiBsdXhvbi5EdXJhdGlvbi5mcm9tT2JqZWN0KHsgaG91cnM6IDEgfSksCiAgICAgICAgImhyIjogbHV4b24uRHVyYXRpb24uZnJvbU9iamVjdCh7IGhvdXJzOiAxIH0pLAogICAgICAgICJoIjogbHV4b24uRHVyYXRpb24uZnJvbU9iamVjdCh7IGhvdXJzOiAxIH0pLAogICAgICAgICJtaW51dGUiOiBsdXhvbi5EdXJhdGlvbi5mcm9tT2JqZWN0KHsgbWludXRlOiAxIH0pLAogICAgICAgICJtaW4iOiBsdXhvbi5EdXJhdGlvbi5mcm9tT2JqZWN0KHsgbWludXRlOiAxIH0pLAogICAgICAgICJtIjogbHV4b24uRHVyYXRpb24uZnJvbU9iamVjdCh7IG1pbnV0ZTogMSB9KSwKICAgICAgICAic2Vjb25kIjogbHV4b24uRHVyYXRpb24uZnJvbU9iamVjdCh7IHNlY29uZHM6IDEgfSksCiAgICAgICAgInNlYyI6IGx1eG9uLkR1cmF0aW9uLmZyb21PYmplY3QoeyBzZWNvbmRzOiAxIH0pLAogICAgICAgICJzIjogbHV4b24uRHVyYXRpb24uZnJvbU9iamVjdCh7IHNlY29uZHM6IDEgfSkKICAgIH07CiAgICAvKioKICAgICAqIEtleXdvcmRzIHdoaWNoIGNhbm5vdCBiZSB1c2VkIGFzIHZhcmlhYmxlcyBkaXJlY3RseS4gVXNlIGByb3cuPHRoaW5nPmAgaWYgaXQgaXMgYSB2YXJpYWJsZSB5b3UgaGF2ZSBkZWZpbmVkIGFuZCB3YW50CiAgICAgKiB0byBhY2Nlc3MuCiAgICAgKi8KICAgIGNvbnN0IEtFWVdPUkRTID0gWyJGUk9NIiwgIldIRVJFIiwgIkxJTUlUIiwgIkdST1VQIiwgIkZMQVRURU4iXTsKICAgIC8vLy8vLy8vLy8vLy8vLwogICAgLy8gVXRpbGl0aWVzIC8vCiAgICAvLy8vLy8vLy8vLy8vLy8KICAgIC8qKiBBdHRlbXB0IHRvIHBhcnNlIHRoZSBpbnNpZGUgb2YgYSBsaW5rIHRvIHB1bGwgb3V0IGRpc3BsYXkgbmFtZSwgc3VicGF0aCwgZXRjLiAqLwogICAgZnVuY3Rpb24gcGFyc2VJbm5lckxpbmsobGluaykgewogICAgICAgIGxldCBkaXNwbGF5ID0gdW5kZWZpbmVkOwogICAgICAgIGlmIChsaW5rLmluY2x1ZGVzKCd8JykpIHsKICAgICAgICAgICAgbGV0IHNwbGl0ID0gbGluay5zcGxpdCgifCIpOwogICAgICAgICAgICBsaW5rID0gc3BsaXRbMF07CiAgICAgICAgICAgIGRpc3BsYXkgPSBzcGxpdFsxXTsKICAgICAgICB9CiAgICAgICAgaWYgKGxpbmsuaW5jbHVkZXMoJyMnKSkgewogICAgICAgICAgICBsZXQgc3BsaXQgPSBsaW5rLnNwbGl0KCcjJyk7CiAgICAgICAgICAgIHJldHVybiBMaW5rLmhlYWRlcihzcGxpdFswXSwgc3BsaXRbMV0sIGZhbHNlLCBkaXNwbGF5KTsKICAgICAgICB9CiAgICAgICAgZWxzZSBpZiAobGluay5pbmNsdWRlcygnXicpKSB7CiAgICAgICAgICAgIGxldCBzcGxpdCA9IGxpbmsuc3BsaXQoJ14nKTsKICAgICAgICAgICAgcmV0dXJuIExpbmsuYmxvY2soc3BsaXRbMF0sIHNwbGl0WzFdLCBmYWxzZSwgZGlzcGxheSk7CiAgICAgICAgfQogICAgICAgIHJldHVybiBMaW5rLmZpbGUobGluaywgZmFsc2UsIGRpc3BsYXkpOwogICAgfQogICAgLyoqIENyZWF0ZSBhIGxlZnQtYXNzb2NpYXRpdmUgYmluYXJ5IHBhcnNlciB3aGljaCBwYXJzZXMgdGhlIGdpdmVuIHN1Yi1lbGVtZW50IGFuZCBzZXBhcmF0b3IuIEhhbmRsZXMgd2hpdGVzcGFjZS4gKi8KICAgIGZ1bmN0aW9uIGNyZWF0ZUJpbmFyeVBhcnNlcihjaGlsZCwgc2VwLCBjb21iaW5lKSB7CiAgICAgICAgcmV0dXJuIHBhcnNpbW1vbl91bWRfbWluLnNlcU1hcChjaGlsZCwgcGFyc2ltbW9uX3VtZF9taW4uc2VxKHBhcnNpbW1vbl91bWRfbWluLm9wdFdoaXRlc3BhY2UsIHNlcCwgcGFyc2ltbW9uX3VtZF9taW4ub3B0V2hpdGVzcGFjZSwgY2hpbGQpLm1hbnkoKSwgKGZpcnN0LCByZXN0KSA9PiB7CiAgICAgICAgICAgIGlmIChyZXN0Lmxlbmd0aCA9PSAwKQogICAgICAgICAgICAgICAgcmV0dXJuIGZpcnN0OwogICAgICAgICAgICBsZXQgbm9kZSA9IGNvbWJpbmUoZmlyc3QsIHJlc3RbMF1bMV0sIHJlc3RbMF1bM10pOwogICAgICAgICAgICBmb3IgKGxldCBpbmRleCA9IDE7IGluZGV4IDwgcmVzdC5sZW5ndGg7IGluZGV4KyspIHsKICAgICAgICAgICAgICAgIG5vZGUgPSBjb21iaW5lKG5vZGUsIHJlc3RbaW5kZXhdWzFdLCByZXN0W2luZGV4XVszXSk7CiAgICAgICAgICAgIH0KICAgICAgICAgICAgcmV0dXJuIG5vZGU7CiAgICAgICAgfSk7CiAgICB9CiAgICBmdW5jdGlvbiBjaGFpbk9wdChiYXNlLCAuLi5mdW5jcykgewogICAgICAgIHJldHVybiBwYXJzaW1tb25fdW1kX21pbi5jdXN0b20oKHN1Y2Nlc3MsIGZhaWx1cmUpID0+IHsKICAgICAgICAgICAgcmV0dXJuIChpbnB1dCwgaSkgPT4gewogICAgICAgICAgICAgICAgbGV0IHJlc3VsdCA9IGJhc2UuXyhpbnB1dCwgaSk7CiAgICAgICAgICAgICAgICBpZiAoIXJlc3VsdC5zdGF0dXMpCiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDsKICAgICAgICAgICAgICAgIGZvciAobGV0IGZ1bmMgb2YgZnVuY3MpIHsKICAgICAgICAgICAgICAgICAgICBsZXQgbmV4dCA9IGZ1bmMocmVzdWx0LnZhbHVlKS5fKGlucHV0LCByZXN1bHQuaW5kZXgpOwogICAgICAgICAgICAgICAgICAgIGlmICghbmV4dC5zdGF0dXMpCiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiByZXN1bHQ7CiAgICAgICAgICAgICAgICAgICAgcmVzdWx0ID0gbmV4dDsKICAgICAgICAgICAgICAgIH0KICAgICAgICAgICAgICAgIHJldHVybiByZXN1bHQ7CiAgICAgICAgICAgIH07CiAgICAgICAgfSk7CiAgICB9CiAgICBjb25zdCBFWFBSRVNTSU9OID0gcGFyc2ltbW9uX3VtZF9taW4uY3JlYXRlTGFuZ3VhZ2UoewogICAgICAgIC8vIEEgZmxvYXRpbmcgcG9pbnQgbnVtYmVyOyB0aGUgZGVjaW1hbCBwb2ludCBpcyBvcHRpb25hbC4KICAgICAgICBudW1iZXI6IHEgPT4gcGFyc2ltbW9uX3VtZF9taW4ucmVnZXhwKC8tP1swLTldKyguWzAtOV0rKT8vKS5tYXAoc3RyID0+IE51bWJlci5wYXJzZUZsb2F0KHN0cikpLmRlc2MoIm51bWJlciIpLAogICAgICAgIC8vIEEgcXVvdGUtc3Vycm91bmRlZCBzdHJpbmcgd2hpY2ggc3VwcG9ydHMgZXNjYXBlIGNoYXJhY3RlcnMgKCdcJykuCiAgICAgICAgc3RyaW5nOiBxID0+IHBhcnNpbW1vbl91bWRfbWluLnN0cmluZygnIicpCiAgICAgICAgICAgIC50aGVuKHBhcnNpbW1vbl91bWRfbWluLmFsdChxLmVzY2FwZUNoYXJhY3RlciwgcGFyc2ltbW9uX3VtZF9taW4ubm9uZU9mKCciXFwnKSkuYXRMZWFzdCgwKS5tYXAoY2hhcnMgPT4gY2hhcnMuam9pbignJykpKQogICAgICAgICAgICAuc2tpcChwYXJzaW1tb25fdW1kX21pbi5zdHJpbmcoJyInKSkKICAgICAgICAgICAgLmRlc2MoInN0cmluZyIpLAogICAgICAgIGVzY2FwZUNoYXJhY3RlcjogcSA9PiBwYXJzaW1tb25fdW1kX21pbi5zdHJpbmcoJ1xcJykudGhlbihwYXJzaW1tb25fdW1kX21pbi5hbnkpLm1hcChlc2NhcGVkID0+IHsKICAgICAgICAgICAgLy8gSWYgd2UgYXJlIGVzY2FwaW5nIGEgYmFja3NsYXNoIG9yIGEgcXVvdGUsIHBhc3MgaW4gb24gaW4gZXNjYXBlZCBmb3JtCiAgICAgICAgICAgIGlmIChlc2NhcGVkID09PSAnIicpCiAgICAgICAgICAgICAgICByZXR1cm4gJ1wiJzsKICAgICAgICAgICAgaWYgKGVzY2FwZWQgPT09ICdcXCcpCiAgICAgICAgICAgICAgICByZXR1cm4gJ1xcJzsKICAgICAgICAgICAgZWxzZQogICAgICAgICAgICAgICAgcmV0dXJuICdcXCcgKyBlc2NhcGVkOwogICAgICAgIH0pLAogICAgICAgIC8vIEEgYm9vbGVhbiB0cnVlL2ZhbHNlIHZhbHVlLgogICAgICAgIGJvb2w6IHEgPT4gcGFyc2ltbW9uX3VtZF9taW4ucmVnZXhwKC90cnVlfGZhbHNlfFRydWV8RmFsc2UvKS5tYXAoc3RyID0+IHN0ci50b0xvd2VyQ2FzZSgpID09ICJ0cnVlIikKICAgICAgICAgICAgLmRlc2MoImJvb2xlYW4gKCd0cnVlJyBvciAnZmFsc2UnKSIpLAogICAgICAgIC8vIEEgdGFnIG9mIHRoZSBmb3JtICcjc3R1ZmYvaGVsbG8tdGhlcmUnLgogICAgICAgIHRhZzogcSA9PiBwYXJzaW1tb25fdW1kX21pbi5yZWdleHAoLyNbXHB7TGV0dGVyfVxwe0Vtb2ppX1ByZXNlbnRhdGlvbn1cdy8tXSsvdSkuZGVzYygidGFnICgnI2hlbGxvL3N0dWZmJykiKSwKICAgICAgICAvLyBBIHZhcmlhYmxlIGlkZW50aWZpZXIsIHdoaWNoIGlzIGFscGhhbnVtZXJpYyBhbmQgbXVzdCBzdGFydCB3aXRoIGEgbGV0dGVyLgogICAgICAgIGlkZW50aWZpZXI6IHEgPT4gcGFyc2ltbW9uX3VtZF9taW4ucmVnZXhwKC9bXHB7TGV0dGVyfVxwe0Vtb2ppX1ByZXNlbnRhdGlvbn1dW1xwe0xldHRlcn1ccHtFbW9qaV9QcmVzZW50YXRpb259XHdfLV0qL3UpLmRlc2MoInZhcmlhYmxlIGlkZW50aWZpZXIiKSwKICAgICAgICAvLyBBIHZhcmlhYmxlIGlkZW50aWZpZXIsIHdoaWNoIGlzIGFscGhhbnVtZXJpYyBhbmQgbXVzdCBzdGFydCB3aXRoIGEgbGV0dGVyLiBDYW4gaW5jbHVkZSBkb3RzLgogICAgICAgIGlkZW50aWZpZXJEb3Q6IHEgPT4gcGFyc2ltbW9uX3VtZF9taW4ucmVnZXhwKC9bXHB7TGV0dGVyfVxwe0Vtb2ppX1ByZXNlbnRhdGlvbn1dW1xwe0xldHRlcn1ccHtFbW9qaV9QcmVzZW50YXRpb259XC5cd18tXSovdSkuZGVzYygidmFyaWFibGUgaWRlbnRpZmllciIpLAogICAgICAgIC8vIEFuIE9ic2lkaWFuIGxpbmsgb2YgdGhlIGZvcm0gW1s8bGluaz5dXS4KICAgICAgICBsaW5rOiBxID0+IHBhcnNpbW1vbl91bWRfbWluLnJlZ2V4cCgvXFtcWyhbXlxbXF1dKj8pXF1cXS91LCAxKS5tYXAobGlua0lubmVyID0+IHBhcnNlSW5uZXJMaW5rKGxpbmtJbm5lcikpLmRlc2MoImZpbGUgbGluayIpLAogICAgICAgIGVtYmVkTGluazogcSA9PiBwYXJzaW1tb25fdW1kX21pbi5zZXFNYXAocGFyc2ltbW9uX3VtZF9taW4uc3RyaW5nKCIhIikuYXRNb3N0KDEpLCBxLmxpbmssIChwLCBsKSA9PiB7CiAgICAgICAgICAgIGlmIChwLmxlbmd0aCA+IDApCiAgICAgICAgICAgICAgICBsLmVtYmVkID0gdHJ1ZTsKICAgICAgICAgICAgcmV0dXJuIGw7CiAgICAgICAgfSksCiAgICAgICAgLy8gQmluYXJ5IHBsdXMgb3IgbWludXMgb3BlcmF0b3IuCiAgICAgICAgYmluYXJ5UGx1c01pbnVzOiBxID0+IHBhcnNpbW1vbl91bWRfbWluLnJlZ2V4cCgvXCt8LS8pLm1hcChzdHIgPT4gc3RyKS5kZXNjKCInKycgb3IgJy0nIiksCiAgICAgICAgLy8gQmluYXJ5IHRpbWVzIG9yIGRpdmlkZSBvcGVyYXRvci4KICAgICAgICBiaW5hcnlNdWxEaXY6IHEgPT4gcGFyc2ltbW9uX3VtZF9taW4ucmVnZXhwKC9cKnxcLy8pLm1hcChzdHIgPT4gc3RyKS5kZXNjKCInKicgb3IgJy8nIiksCiAgICAgICAgLy8gQmluYXJ5IGNvbXBhcmlzb24gb3BlcmF0b3IuCiAgICAgICAgYmluYXJ5Q29tcGFyZU9wOiBxID0+IHBhcnNpbW1vbl91bWRfbWluLnJlZ2V4cCgvPj18PD18IT18Pnw8fD0vKS5tYXAoc3RyID0+IHN0cikuZGVzYygiJz49JyBvciAnPD0nIG9yICchPScgb3IgJz0nIG9yICc+JyBvciAnPCciKSwKICAgICAgICAvLyBCaW5hcnkgYm9vbGVhbiBjb21iaW5hdGlvbiBvcGVyYXRvci4KICAgICAgICBiaW5hcnlCb29sZWFuT3A6IHEgPT4gcGFyc2ltbW9uX3VtZF9taW4ucmVnZXhwKC9hbmR8b3J8JnxcfC9pKS5tYXAoc3RyID0+IHsKICAgICAgICAgICAgaWYgKHN0ci50b0xvd2VyQ2FzZSgpID09ICdhbmQnKQogICAgICAgICAgICAgICAgcmV0dXJuICcmJzsKICAgICAgICAgICAgZWxzZSBpZiAoc3RyLnRvTG93ZXJDYXNlKCkgPT0gJ29yJykKICAgICAgICAgICAgICAgIHJldHVybiAnfCc7CiAgICAgICAgICAgIGVsc2UKICAgICAgICAgICAgICAgIHJldHVybiBzdHI7CiAgICAgICAgfSkuZGVzYygiJ2FuZCcgb3IgJ29yJyIpLAogICAgICAgIC8vIEEgZGF0ZSB3aGljaCBjYW4gYmUgWVlZWS1NTVstRERUSEg6bW06c3NdLgogICAgICAgIC8vIFRPRE86IEFkZCB0aW1lLXpvbmUgc3VwcG9ydC4KICAgICAgICAvLyBUT0RPOiBXaWxsIHByb2JhYmx5IHdhbnQgYSBjdXN0b20gY29tYmluYXRvciBmb3Igb3B0aW9uYWwgcGFyc2luZy4KICAgICAgICByb290RGF0ZTogcSA9PiBwYXJzaW1tb25fdW1kX21pbi5zZXFNYXAocGFyc2ltbW9uX3VtZF9taW4ucmVnZXhwKC9cZHs0fS8pLCBwYXJzaW1tb25fdW1kX21pbi5zdHJpbmcoIi0iKSwgcGFyc2ltbW9uX3VtZF9taW4ucmVnZXhwKC9cZHsyfS8pLCAoeWVhciwgXywgbW9udGgpID0+IHsKICAgICAgICAgICAgcmV0dXJuIGx1eG9uLkRhdGVUaW1lLmZyb21PYmplY3QoeyB5ZWFyOiBOdW1iZXIucGFyc2VJbnQoeWVhciksIG1vbnRoOiBOdW1iZXIucGFyc2VJbnQobW9udGgpIH0pOwogICAgICAgIH0pLmRlc2MoImRhdGUgaW4gZm9ybWF0IFlZWVktTU1bLUREVEhILU1NLVNTXSIpLAogICAgICAgIGRhdGU6IHEgPT4gY2hhaW5PcHQocS5yb290RGF0ZSwgKHltKSA9PiBwYXJzaW1tb25fdW1kX21pbi5zZXFNYXAocGFyc2ltbW9uX3VtZF9taW4uc3RyaW5nKCItIiksIHBhcnNpbW1vbl91bWRfbWluLnJlZ2V4cCgvXGR7Mn0vKSwgKF8sIGRheSkgPT4geW0uc2V0KHsgZGF5OiBOdW1iZXIucGFyc2VJbnQoZGF5KSB9KSksICh5bWQpID0+IHBhcnNpbW1vbl91bWRfbWluLnNlcU1hcChwYXJzaW1tb25fdW1kX21pbi5zdHJpbmcoIlQiKSwgcGFyc2ltbW9uX3VtZF9taW4ucmVnZXhwKC9cZHsyfS8pLCAoXywgaG91cikgPT4geW1kLnNldCh7IGhvdXI6IE51bWJlci5wYXJzZUludChob3VyKSB9KSksICh5bWRoKSA9PiBwYXJzaW1tb25fdW1kX21pbi5zZXFNYXAocGFyc2ltbW9uX3VtZF9taW4uc3RyaW5nKCI6IiksIHBhcnNpbW1vbl91bWRfbWluLnJlZ2V4cCgvXGR7Mn0vKSwgKF8sIG1pbnV0ZSkgPT4geW1kaC5zZXQoeyBtaW51dGU6IE51bWJlci5wYXJzZUludChtaW51dGUpIH0pKSwgKHltZGhtKSA9PiBwYXJzaW1tb25fdW1kX21pbi5zZXFNYXAocGFyc2ltbW9uX3VtZF9taW4uc3RyaW5nKCI6IiksIHBhcnNpbW1vbl91bWRfbWluLnJlZ2V4cCgvXGR7Mn0vKSwgKF8sIHNlY29uZCkgPT4geW1kaG0uc2V0KHsgc2Vjb25kOiBOdW1iZXIucGFyc2VJbnQoc2Vjb25kKSB9KSksIChkdCkgPT4gcGFyc2ltbW9uX3VtZF9taW4uc2VxTWFwKHBhcnNpbW1vbl91bWRfbWluLnN0cmluZygiKyIpLm9yKHBhcnNpbW1vbl91bWRfbWluLnN0cmluZygiLSIpKSwgcGFyc2ltbW9uX3VtZF9taW4ucmVnZXhwKC9cZHsxLDJ9KDpcZHsyfSk/LyksIChwbSwgaHIpID0+IGR0LnNldFpvbmUoIlVUQyIgKyBwbSArIGhyKSkpLAogICAgICAgIC8vIEEgZGF0ZSwgcGx1cyB2YXJpb3VzIHNob3J0aGFuZCB0aW1lcyBvZiBkYXkgaXQgY291bGQgYmUuCiAgICAgICAgZGF0ZVBsdXM6IHEgPT4gcGFyc2ltbW9uX3VtZF9taW4uYWx0KHBhcnNpbW1vbl91bWRfbWluLnN0cmluZygibm93IikubWFwKF8gPT4gbHV4b24uRGF0ZVRpbWUubG9jYWwoKSksIHBhcnNpbW1vbl91bWRfbWluLnN0cmluZygidG9kYXkiKS5tYXAoXyA9PiBsdXhvbi5EYXRlVGltZS5sb2NhbCgpLnN0YXJ0T2YoImRheSIpKSwgcGFyc2ltbW9uX3VtZF9taW4uc3RyaW5nKCJ0b21vcnJvdyIpLm1hcChfID0+IGx1eG9uLkRhdGVUaW1lLmxvY2FsKCkuc3RhcnRPZigiZGF5IikucGx1cyhsdXhvbi5EdXJhdGlvbi5mcm9tT2JqZWN0KHsgZGF5OiAxIH0pKSksIHBhcnNpbW1vbl91bWRfbWluLnN0cmluZygic29tIikubWFwKF8gPT4gbHV4b24uRGF0ZVRpbWUubG9jYWwoKS5zdGFydE9mKCJtb250aCIpKSwgcGFyc2ltbW9uX3VtZF9taW4uc3RyaW5nKCJzb3kiKS5tYXAoXyA9PiBsdXhvbi5EYXRlVGltZS5sb2NhbCgpLnN0YXJ0T2YoInllYXIiKSksIHBhcnNpbW1vbl91bWRfbWluLnN0cmluZygiZW9tIikubWFwKF8gPT4gbHV4b24uRGF0ZVRpbWUubG9jYWwoKS5lbmRPZigibW9udGgiKSksIHBhcnNpbW1vbl91bWRfbWluLnN0cmluZygiZW95IikubWFwKF8gPT4gbHV4b24uRGF0ZVRpbWUubG9jYWwoKS5lbmRPZigieWVhciIpKSwgcS5kYXRlKSwKICAgICAgICAvLyBBIGR1cmF0aW9uIG9mIHRpbWUuCiAgICAgICAgZHVyYXRpb25UeXBlOiBxID0+IHBhcnNpbW1vbl91bWRfbWluLmFsdCguLi5PYmplY3Qua2V5cyhEVVJBVElPTl9UWVBFUykubWFwKHBhcnNpbW1vbl91bWRfbWluLnN0cmluZykpLAogICAgICAgIGR1cmF0aW9uOiBxID0+IHBhcnNpbW1vbl91bWRfbWluLnNlcU1hcChxLm51bWJlciwgcGFyc2ltbW9uX3VtZF9taW4ub3B0V2hpdGVzcGFjZSwgcS5kdXJhdGlvblR5cGUsIHBhcnNpbW1vbl91bWRfbWluLnN0cmluZygicyIpLmF0TW9zdCgxKSwgKGNvdW50LCBfLCB0LCBfMikgPT4gRFVSQVRJT05fVFlQRVNbdF0ubWFwVW5pdHMoeCA9PiB4ICogY291bnQpKSwKICAgICAgICAvLyBBIHJhdyBudWxsIHZhbHVlLgogICAgICAgIHJhd051bGw6IHEgPT4gcGFyc2ltbW9uX3VtZF9taW4uc3RyaW5nKCJudWxsIiksCiAgICAgICAgLy8gU291cmNlIHBhcnNpbmcuCiAgICAgICAgdGFnU291cmNlOiBxID0+IHEudGFnLm1hcCh0YWcgPT4gU291cmNlcy50YWcodGFnKSksCiAgICAgICAgY3N2U291cmNlOiBxID0+IHBhcnNpbW1vbl91bWRfbWluLnNlcU1hcChwYXJzaW1tb25fdW1kX21pbi5zdHJpbmcoImNzdigiKS5za2lwKHBhcnNpbW1vbl91bWRfbWluLm9wdFdoaXRlc3BhY2UpLCBxLnN0cmluZywgcGFyc2ltbW9uX3VtZF9taW4uc3RyaW5nKCIpIiksIChfMSwgcGF0aCwgXzIpID0+IFNvdXJjZXMuY3N2KHBhdGgpKSwKICAgICAgICBsaW5rSW5jb21pbmdTb3VyY2U6IHEgPT4gcS5saW5rLm1hcChsaW5rID0+IFNvdXJjZXMubGluayhsaW5rLnBhdGgsIHRydWUpKSwKICAgICAgICBsaW5rT3V0Z29pbmdTb3VyY2U6IHEgPT4gcGFyc2ltbW9uX3VtZF9taW4uc2VxTWFwKHBhcnNpbW1vbl91bWRfbWluLnN0cmluZygib3V0Z29pbmcoIikuc2tpcChwYXJzaW1tb25fdW1kX21pbi5vcHRXaGl0ZXNwYWNlKSwgcS5saW5rLCBwYXJzaW1tb25fdW1kX21pbi5zdHJpbmcoIikiKSwgKF8xLCBsaW5rLCBfMikgPT4gU291cmNlcy5saW5rKGxpbmsucGF0aCwgZmFsc2UpKSwKICAgICAgICBmb2xkZXJTb3VyY2U6IHEgPT4gcS5zdHJpbmcubWFwKHN0ciA9PiBTb3VyY2VzLmZvbGRlcihzdHIpKSwKICAgICAgICBwYXJlbnNTb3VyY2U6IHEgPT4gcGFyc2ltbW9uX3VtZF9taW4uc2VxTWFwKHBhcnNpbW1vbl91bWRfbWluLnN0cmluZygiKCIpLCBwYXJzaW1tb25fdW1kX21pbi5vcHRXaGl0ZXNwYWNlLCBxLnNvdXJjZSwgcGFyc2ltbW9uX3VtZF9taW4ub3B0V2hpdGVzcGFjZSwgcGFyc2ltbW9uX3VtZF9taW4uc3RyaW5nKCIpIiksIChfMSwgXzIsIGZpZWxkLCBfMywgXzQpID0+IGZpZWxkKSwKICAgICAgICBuZWdhdGVTb3VyY2U6IHEgPT4gcGFyc2ltbW9uX3VtZF9taW4uc2VxTWFwKHBhcnNpbW1vbl91bWRfbWluLmFsdChwYXJzaW1tb25fdW1kX21pbi5zdHJpbmcoIi0iKSwgcGFyc2ltbW9uX3VtZF9taW4uc3RyaW5nKCIhIikpLCBxLmF0b21Tb3VyY2UsIChfLCBzb3VyY2UpID0+IFNvdXJjZXMubmVnYXRlKHNvdXJjZSkpLAogICAgICAgIGF0b21Tb3VyY2U6IHEgPT4gcGFyc2ltbW9uX3VtZF9taW4uYWx0KHEucGFyZW5zU291cmNlLCBxLm5lZ2F0ZVNvdXJjZSwgcS5saW5rT3V0Z29pbmdTb3VyY2UsIHEubGlua0luY29taW5nU291cmNlLCBxLmZvbGRlclNvdXJjZSwgcS50YWdTb3VyY2UsIHEuY3N2U291cmNlKSwKICAgICAgICBiaW5hcnlPcFNvdXJjZTogcSA9PiBjcmVhdGVCaW5hcnlQYXJzZXIocS5hdG9tU291cmNlLCBxLmJpbmFyeUJvb2xlYW5PcC5tYXAocyA9PiBzKSwgU291cmNlcy5iaW5hcnlPcCksCiAgICAgICAgc291cmNlOiBxID0+IHEuYmluYXJ5T3BTb3VyY2UsCiAgICAgICAgLy8gRmllbGQgcGFyc2luZy4KICAgICAgICB2YXJpYWJsZUZpZWxkOiBxID0+IHEuaWRlbnRpZmllci5jaGFpbihyID0+IHsKICAgICAgICAgICAgaWYgKEtFWVdPUkRTLmluY2x1ZGVzKHIudG9VcHBlckNhc2UoKSkpIHsKICAgICAgICAgICAgICAgIHJldHVybiBwYXJzaW1tb25fdW1kX21pbi5mYWlsKCJWYXJpYWJsZSBmaWVsZHMgY2Fubm90IGJlIGEga2V5d29yZCAoIiArIEtFWVdPUkRTLmpvaW4oIiBvciAiKSArICIpIik7CiAgICAgICAgICAgIH0KICAgICAgICAgICAgZWxzZSB7CiAgICAgICAgICAgICAgICByZXR1cm4gcGFyc2ltbW9uX3VtZF9taW4uc3VjY2VlZChGaWVsZHMudmFyaWFibGUocikpOwogICAgICAgICAgICB9CiAgICAgICAgfSkuZGVzYygidmFyaWFibGUiKSwKICAgICAgICBudW1iZXJGaWVsZDogcSA9PiBxLm51bWJlci5tYXAodmFsID0+IEZpZWxkcy5saXRlcmFsKHZhbCkpLmRlc2MoIm51bWJlciIpLAogICAgICAgIHN0cmluZ0ZpZWxkOiBxID0+IHEuc3RyaW5nLm1hcCh2YWwgPT4gRmllbGRzLmxpdGVyYWwodmFsKSkuZGVzYygic3RyaW5nIiksCiAgICAgICAgYm9vbEZpZWxkOiBxID0+IHEuYm9vbC5tYXAodmFsID0+IEZpZWxkcy5saXRlcmFsKHZhbCkpLmRlc2MoImJvb2xlYW4iKSwKICAgICAgICBkYXRlRmllbGQ6IHEgPT4gcGFyc2ltbW9uX3VtZF9taW4uc2VxTWFwKHBhcnNpbW1vbl91bWRfbWluLnN0cmluZygiZGF0ZSgiKSwgcGFyc2ltbW9uX3VtZF9taW4ub3B0V2hpdGVzcGFjZSwgcS5kYXRlUGx1cywgcGFyc2ltbW9uX3VtZF9taW4ub3B0V2hpdGVzcGFjZSwgcGFyc2ltbW9uX3VtZF9taW4uc3RyaW5nKCIpIiksIChwcmVmaXgsIF8xLCBkYXRlLCBfMiwgcG9zdGZpeCkgPT4gRmllbGRzLmxpdGVyYWwoZGF0ZSkpCiAgICAgICAgICAgIC5kZXNjKCJkYXRlIiksCiAgICAgICAgZHVyYXRpb25GaWVsZDogcSA9PiBwYXJzaW1tb25fdW1kX21pbi5zZXFNYXAocGFyc2ltbW9uX3VtZF9taW4uc3RyaW5nKCJkdXIoIiksIHBhcnNpbW1vbl91bWRfbWluLm9wdFdoaXRlc3BhY2UsIHEuZHVyYXRpb24sIHBhcnNpbW1vbl91bWRfbWluLm9wdFdoaXRlc3BhY2UsIHBhcnNpbW1vbl91bWRfbWluLnN0cmluZygiKSIpLCAocHJlZml4LCBfMSwgZHVyLCBfMiwgcG9zdGZpeCkgPT4gRmllbGRzLmxpdGVyYWwoZHVyKSkKICAgICAgICAgICAgLmRlc2MoImR1cmF0aW9uIiksCiAgICAgICAgbnVsbEZpZWxkOiBxID0+IHEucmF3TnVsbC5tYXAoXyA9PiBGaWVsZHMuTlVMTCksCiAgICAgICAgbGlua0ZpZWxkOiBxID0+IHEubGluay5tYXAoZiA9PiBGaWVsZHMubGl0ZXJhbChmKSksCiAgICAgICAgbGl0ZXJhbEZpZWxkOiBxID0+IHBhcnNpbW1vbl91bWRfbWluLmFsdChxLm51bGxGaWVsZCwgcS5udW1iZXJGaWVsZCwgcS5zdHJpbmdGaWVsZCwgcS5ib29sRmllbGQsIHEuZGF0ZUZpZWxkLCBxLmR1cmF0aW9uRmllbGQpLAogICAgICAgIGF0b21JbmxpbmVGaWVsZDogcSA9PiBwYXJzaW1tb25fdW1kX21pbi5hbHQocS5kYXRlLCBxLmR1cmF0aW9uLm1hcChkID0+IG5vcm1hbGl6ZUR1cmF0aW9uKGQpKSwgcS5zdHJpbmcsIHEubGluaywgcS5ib29sLCBxLm51bWJlciwgcS5yYXdOdWxsKSwKICAgICAgICBpbmxpbmVGaWVsZExpc3Q6IHEgPT4gcS5hdG9tSW5saW5lRmllbGQuc2VwQnkocGFyc2ltbW9uX3VtZF9taW4uc3RyaW5nKCIsIikudHJpbShwYXJzaW1tb25fdW1kX21pbi5vcHRXaGl0ZXNwYWNlKS5sb29rYWhlYWQocS5hdG9tSW5saW5lRmllbGQpKSwKICAgICAgICBpbmxpbmVGaWVsZDogcSA9PiBwYXJzaW1tb25fdW1kX21pbi5hbHQocGFyc2ltbW9uX3VtZF9taW4uc2VxTWFwKHEuYXRvbUlubGluZUZpZWxkLCBwYXJzaW1tb25fdW1kX21pbi5zdHJpbmcoIiwiKS50cmltKHBhcnNpbW1vbl91bWRfbWluLm9wdFdoaXRlc3BhY2UpLCBxLmlubGluZUZpZWxkTGlzdCwgKGYsIF9zLCBsKSA9PiBbZl0uY29uY2F0KGwpKSwgcS5hdG9tSW5saW5lRmllbGQpLAogICAgICAgIGF0b21GaWVsZDogcSA9PiBwYXJzaW1tb25fdW1kX21pbi5hbHQocS5uZWdhdGVkRmllbGQsIHEucGFyZW5zRmllbGQsIHEuYm9vbEZpZWxkLCBxLm51bWJlckZpZWxkLCBxLnN0cmluZ0ZpZWxkLCBxLmxpbmtGaWVsZCwgcS5kYXRlRmllbGQsIHEuZHVyYXRpb25GaWVsZCwgcS5udWxsRmllbGQsIHEudmFyaWFibGVGaWVsZCksCiAgICAgICAgaW5kZXhGaWVsZDogcSA9PiBwYXJzaW1tb25fdW1kX21pbi5zZXFNYXAocS5hdG9tRmllbGQsIHBhcnNpbW1vbl91bWRfbWluLmFsdChxLmRvdFBvc3RmaXgsIHEuaW5kZXhQb3N0Zml4LCBxLmZ1bmN0aW9uUG9zdGZpeCkubWFueSgpLCAob2JqLCBwb3N0Zml4ZXMpID0+IHsKICAgICAgICAgICAgbGV0IHJlc3VsdCA9IG9iajsKICAgICAgICAgICAgZm9yIChsZXQgcG9zdCBvZiBwb3N0Zml4ZXMpIHsKICAgICAgICAgICAgICAgIHN3aXRjaCAocG9zdC50eXBlKSB7CiAgICAgICAgICAgICAgICAgICAgY2FzZSAiZG90IjoKICAgICAgICAgICAgICAgICAgICBjYXNlICJpbmRleCI6CiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdCA9IEZpZWxkcy5pbmRleChyZXN1bHQsIHBvc3QuZmllbGQpOwogICAgICAgICAgICAgICAgICAgICAgICBicmVhazsKICAgICAgICAgICAgICAgICAgICBjYXNlICJmdW5jdGlvbiI6CiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdCA9IEZpZWxkcy5mdW5jKHJlc3VsdCwgcG9zdC5maWVsZHMpOwogICAgICAgICAgICAgICAgICAgICAgICBicmVhazsKICAgICAgICAgICAgICAgIH0KICAgICAgICAgICAgfQogICAgICAgICAgICByZXR1cm4gcmVzdWx0OwogICAgICAgIH0pLAogICAgICAgIG5lZ2F0ZWRGaWVsZDogcSA9PiBwYXJzaW1tb25fdW1kX21pbi5zZXFNYXAocGFyc2ltbW9uX3VtZF9taW4uc3RyaW5nKCIhIiksIHEuaW5kZXhGaWVsZCwgKF8sIGZpZWxkKSA9PiBGaWVsZHMubmVnYXRlKGZpZWxkKSkuZGVzYygibmVnYXRlZCBmaWVsZCIpLAogICAgICAgIHBhcmVuc0ZpZWxkOiBxID0+IHBhcnNpbW1vbl91bWRfbWluLnNlcU1hcChwYXJzaW1tb25fdW1kX21pbi5zdHJpbmcoIigiKSwgcGFyc2ltbW9uX3VtZF9taW4ub3B0V2hpdGVzcGFjZSwgcS5maWVsZCwgcGFyc2ltbW9uX3VtZF9taW4ub3B0V2hpdGVzcGFjZSwgcGFyc2ltbW9uX3VtZF9taW4uc3RyaW5nKCIpIiksIChfMSwgXzIsIGZpZWxkLCBfMywgXzQpID0+IGZpZWxkKSwKICAgICAgICBkb3RQb3N0Zml4OiBxID0+IHBhcnNpbW1vbl91bWRfbWluLnNlcU1hcChwYXJzaW1tb25fdW1kX21pbi5zdHJpbmcoIi4iKSwgcS5pZGVudGlmaWVyLCAoXywgZmllbGQpID0+IHsgcmV0dXJuIHsgdHlwZTogJ2RvdCcsIGZpZWxkOiBGaWVsZHMubGl0ZXJhbChmaWVsZCkgfTsgfSksCiAgICAgICAgaW5kZXhQb3N0Zml4OiBxID0+IHBhcnNpbW1vbl91bWRfbWluLnNlcU1hcChwYXJzaW1tb25fdW1kX21pbi5zdHJpbmcoIlsiKSwgcGFyc2ltbW9uX3VtZF9taW4ub3B0V2hpdGVzcGFjZSwgcS5maWVsZCwgcGFyc2ltbW9uX3VtZF9taW4ub3B0V2hpdGVzcGFjZSwgcGFyc2ltbW9uX3VtZF9taW4uc3RyaW5nKCJdIiksIChfLCBfMiwgZmllbGQsIF8zLCBfNCkgPT4geyByZXR1cm4geyB0eXBlOiAnaW5kZXgnLCBmaWVsZCB9OyB9KSwKICAgICAgICBmdW5jdGlvblBvc3RmaXg6IHEgPT4gcGFyc2ltbW9uX3VtZF9taW4uc2VxTWFwKHBhcnNpbW1vbl91bWRfbWluLnN0cmluZygiKCIpLCBwYXJzaW1tb25fdW1kX21pbi5vcHRXaGl0ZXNwYWNlLCBxLmZpZWxkLnNlcEJ5KHBhcnNpbW1vbl91bWRfbWluLnN0cmluZygiLCIpLnRyaW0ocGFyc2ltbW9uX3VtZF9taW4ub3B0V2hpdGVzcGFjZSkpLCBwYXJzaW1tb25fdW1kX21pbi5vcHRXaGl0ZXNwYWNlLCBwYXJzaW1tb25fdW1kX21pbi5zdHJpbmcoIikiKSwgKF8sIF8xLCBmaWVsZHMsIF8yLCBfMykgPT4geyByZXR1cm4geyB0eXBlOiAnZnVuY3Rpb24nLCBmaWVsZHMgfTsgfSksCiAgICAgICAgLy8gVGhlIHByZWNlZGVuY2UgaGllcmFyY2h5IG9mIG9wZXJhdG9ycyAtIG11bHRpcGx5L2RpdmlkZSwgYWRkL3N1YnRyYWN0LCBjb21wYXJlLCBhbmQgdGhlbiBib29sZWFuIG9wZXJhdGlvbnMuCiAgICAgICAgYmluYXJ5TXVsRGl2RmllbGQ6IHEgPT4gY3JlYXRlQmluYXJ5UGFyc2VyKHEuaW5kZXhGaWVsZCwgcS5iaW5hcnlNdWxEaXYsIEZpZWxkcy5iaW5hcnlPcCksCiAgICAgICAgYmluYXJ5UGx1c01pbnVzRmllbGQ6IHEgPT4gY3JlYXRlQmluYXJ5UGFyc2VyKHEuYmluYXJ5TXVsRGl2RmllbGQsIHEuYmluYXJ5UGx1c01pbnVzLCBGaWVsZHMuYmluYXJ5T3ApLAogICAgICAgIGJpbmFyeUNvbXBhcmVGaWVsZDogcSA9PiBjcmVhdGVCaW5hcnlQYXJzZXIocS5iaW5hcnlQbHVzTWludXNGaWVsZCwgcS5iaW5hcnlDb21wYXJlT3AsIEZpZWxkcy5iaW5hcnlPcCksCiAgICAgICAgYmluYXJ5Qm9vbGVhbkZpZWxkOiBxID0+IGNyZWF0ZUJpbmFyeVBhcnNlcihxLmJpbmFyeUNvbXBhcmVGaWVsZCwgcS5iaW5hcnlCb29sZWFuT3AsIEZpZWxkcy5iaW5hcnlPcCksCiAgICAgICAgYmluYXJ5T3BGaWVsZDogcSA9PiBxLmJpbmFyeUJvb2xlYW5GaWVsZCwKICAgICAgICBmaWVsZDogcSA9PiBxLmJpbmFyeU9wRmllbGQKICAgIH0pOwoKICAgIHZhciBUYXNrOwogICAgKGZ1bmN0aW9uIChUYXNrKSB7CiAgICAgICAgLyoqIERlZXAtY29weSBhIHRhc2suICovCiAgICAgICAgZnVuY3Rpb24gY29weShpbnB1dCkgewogICAgICAgICAgICBsZXQgcGFydGlhbCA9IE9iamVjdC5hc3NpZ24oe30sIGlucHV0KTsKICAgICAgICAgICAgcGFydGlhbC5zdWJ0YXNrcyA9IHBhcnRpYWwuc3VidGFza3MubWFwKHQgPT4gY29weSh0KSk7CiAgICAgICAgICAgIHJldHVybiBwYXJ0aWFsOwogICAgICAgIH0KICAgICAgICBUYXNrLmNvcHkgPSBjb3B5OwogICAgfSkoVGFzayB8fCAoVGFzayA9IHt9KSk7CiAgICAvKiogQ29udmVydCBwYXJzZWQgbWFya2Rvd24gdG8gYSB0cmFuc2Zlci1mcmllbmRseSByZXN1bHQuICovCiAgICBmdW5jdGlvbiB0b1RyYW5zZmVyYWJsZShwYXJzZWQpIHsKICAgICAgICBsZXQgbmV3RmllbGRzID0gbmV3IE1hcCgpOwogICAgICAgIGZvciAobGV0IFtrZXksIHZhbHVlc10gb2YgcGFyc2VkLmZpZWxkcy5lbnRyaWVzKCkpIHsKICAgICAgICAgICAgbmV3RmllbGRzLnNldChrZXksIHZhbHVlcy5tYXAodCA9PiBUcmFuc2ZlcmFibGVWYWx1ZXMudHJhbnNmZXJhYmxlKHQpKSk7CiAgICAgICAgfQogICAgICAgIHJldHVybiB7CiAgICAgICAgICAgIHRhc2tzOiBwYXJzZWQudGFza3MsCiAgICAgICAgICAgIGZpZWxkczogbmV3RmllbGRzCiAgICAgICAgfTsKICAgIH0KICAgIC8qKiBQYXJzZSBhIHRleHR1YWwgaW5saW5lIGZpZWxkIHZhbHVlIGludG8gc29tZXRoaW5nIHdlIGNhbiB3b3JrIHdpdGguICovCiAgICBmdW5jdGlvbiBwYXJzZUlubGluZUZpZWxkKHZhbHVlKSB7CiAgICAgICAgLy8gVGhlIHN0cmlwcGVkIGxpdGVyYWwgZmllbGQgcGFyc2VyIHVuZGVyc3RhbmRzIGFsbCBvZiB0aGUgbm9uLWFycmF5L25vbi1vYmplY3QgZmllbGRzIGFuZCBjYW4gcGFyc2UgdGhlbSBmb3IgdXMuCiAgICAgICAgLy8gSW5saW5lIGZpZWxkIG9iamVjdHMgYXJlIG5vdCBjdXJyZW50bHkgc3VwcG9ydGVkOyBpbmxpbmUgYXJyYXkgb2JqZWN0cyBoYXZlIHRvIGJlIGhhbmRsZWQgYnkgdGhlIHBhcnNlcgogICAgICAgIC8vIHNlcGFyYXRlbHkuCiAgICAgICAgbGV0IGlubGluZSA9IEVYUFJFU1NJT04uaW5saW5lRmllbGQucGFyc2UodmFsdWUpOwogICAgICAgIGlmIChpbmxpbmUuc3RhdHVzKQogICAgICAgICAgICByZXR1cm4gaW5saW5lLnZhbHVlOwogICAgICAgIGVsc2UKICAgICAgICAgICAgcmV0dXJuIHZhbHVlOwogICAgfQogICAgLyoqIE1hdGNoZXMgbGluZXMgb2YgdGhlIGZvcm0gIi0gWyBdIDx0YXNrIHRoaW5nPiIuICovCiAgICBjb25zdCBUQVNLX1JFR0VYID0gL14oXHMqKVstKl1ccyooXFtbIFh4XC5dP1xdKT9ccyooW14tKl0uKikkL2l1OwogICAgLyoqIFJldHVybiB0cnVlIGlmIHRoZSBnaXZlbiBwcmVkaWNhdGUgaXMgdHJ1ZSBmb3IgdGhlIHRhc2sgb3IgYW55IHN1YnRhc2tzLiAqLwogICAgZnVuY3Rpb24gdGFza0FueSh0LCBmKSB7CiAgICAgICAgaWYgKGYodCkpCiAgICAgICAgICAgIHJldHVybiB0cnVlOwogICAgICAgIGZvciAobGV0IHN1YiBvZiB0LnN1YnRhc2tzKQogICAgICAgICAgICBpZiAodGFza0FueShzdWIsIGYpKQogICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7CiAgICAgICAgcmV0dXJuIGZhbHNlOwogICAgfQogICAgZnVuY3Rpb24gYWxhc3QoYXJyKSB7CiAgICAgICAgaWYgKGFyci5sZW5ndGggPiAwKQogICAgICAgICAgICByZXR1cm4gYXJyW2Fyci5sZW5ndGggLSAxXTsKICAgICAgICBlbHNlCiAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7CiAgICB9CiAgICAvKioKICAgICAqIEEgaGFja3kgYXBwcm9hY2ggdG8gc2Nhbm5pbmcgZm9yIGFsbCB0YXNrcyB1c2luZyByZWdleC4gRG9lcyBub3Qgc3VwcG9ydCBtdWx0aWxpbmUKICAgICAqIHRhc2tzIHlldCAodGhvdWdoIGNhbiBwcm9iYWJseSBiZSByZXRyby1maXR0ZWQgdG8gZG8gc28pLgogICAgKi8KICAgIGZ1bmN0aW9uIGZpbmRUYXNrc0luRmlsZShwYXRoLCBmaWxlKSB7CiAgICAgICAgdmFyIF9hLCBfYiwgX2M7CiAgICAgICAgLy8gRHVtbXkgdG9wIG9mIHRoZSBzdGFjayB0aGF0IHdlJ2xsIGp1c3QgbmV2ZXIgZ2V0IHJpZCBvZi4KICAgICAgICBsZXQgc3RhY2sgPSBbXTsKICAgICAgICBzdGFjay5wdXNoKFt7IHRleHQ6ICJSb290IiwgbGluZTogLTEsIHBhdGgsIGNvbXBsZXRlZDogZmFsc2UsIGZ1bGx5Q29tcGxldGVkOiBmYWxzZSwgcmVhbDogZmFsc2UsIHN1YnRhc2tzOiBbXSB9LCAtNF0pOwogICAgICAgIGxldCBsaW5lbm8gPSAwOwogICAgICAgIGZvciAobGV0IGxpbmUgb2YgZmlsZS5yZXBsYWNlKCJcciIsICIiKS5zcGxpdCgiXG4iKSkgewogICAgICAgICAgICBsaW5lbm8gKz0gMTsKICAgICAgICAgICAgLy8gRmFzdCBiYWlsLW91dCBiZWZvcmUgcnVubmluZyBtb3JlIGV4cGVuc2l2ZSByZWdleCBtYXRjaGluZy4KICAgICAgICAgICAgaWYgKCFsaW5lLmluY2x1ZGVzKCJbIikgfHwgIWxpbmUuaW5jbHVkZXMoIl0iKSkgewogICAgICAgICAgICAgICAgd2hpbGUgKHN0YWNrLmxlbmd0aCA+IDEpCiAgICAgICAgICAgICAgICAgICAgc3RhY2sucG9wKCk7CiAgICAgICAgICAgICAgICBjb250aW51ZTsKICAgICAgICAgICAgfQogICAgICAgICAgICBsZXQgbWF0Y2ggPSBUQVNLX1JFR0VYLmV4ZWMobGluZSk7CiAgICAgICAgICAgIGlmICghbWF0Y2gpIHsKICAgICAgICAgICAgICAgIGlmIChsaW5lLnRyaW0oKS5sZW5ndGggPT0gMCkKICAgICAgICAgICAgICAgICAgICBjb250aW51ZTsKICAgICAgICAgICAgICAgIC8vIE5vbi1lbXB0eSBsaW5lIHRoYXQgaXMgbm90IGEgdGFzaywgcmVzZXQuCiAgICAgICAgICAgICAgICB3aGlsZSAoc3RhY2subGVuZ3RoID4gMSkKICAgICAgICAgICAgICAgICAgICBzdGFjay5wb3AoKTsKICAgICAgICAgICAgICAgIGNvbnRpbnVlOwogICAgICAgICAgICB9CiAgICAgICAgICAgIGxldCBpbmRlbnQgPSBtYXRjaFsxXS5yZXBsYWNlKCJcdCIsICIgICAgIikubGVuZ3RoOwogICAgICAgICAgICBsZXQgaXNSZWFsID0gISFtYXRjaFsyXSAmJiBtYXRjaFsyXS50cmltKCkubGVuZ3RoID4gMDsKICAgICAgICAgICAgbGV0IGlzQ29tcGxldGVkID0gIWlzUmVhbCB8fCAobWF0Y2hbMl0gPT0gJ1tYXScgfHwgbWF0Y2hbMl0gPT0gJ1t4XScpOwogICAgICAgICAgICBsZXQgdGFzayA9IHsKICAgICAgICAgICAgICAgIHRleHQ6IG1hdGNoWzNdLAogICAgICAgICAgICAgICAgY29tcGxldGVkOiBpc0NvbXBsZXRlZCwKICAgICAgICAgICAgICAgIGZ1bGx5Q29tcGxldGVkOiBpc0NvbXBsZXRlZCwKICAgICAgICAgICAgICAgIHJlYWw6IGlzUmVhbCwKICAgICAgICAgICAgICAgIHBhdGgsCiAgICAgICAgICAgICAgICBsaW5lOiBsaW5lbm8sCiAgICAgICAgICAgICAgICBzdWJ0YXNrczogW10KICAgICAgICAgICAgfTsKICAgICAgICAgICAgd2hpbGUgKGluZGVudCA8PSAoKF9iID0gKF9hID0gYWxhc3Qoc3RhY2spKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2FbMV0pICE9PSBudWxsICYmIF9iICE9PSB2b2lkIDAgPyBfYiA6IC00KSkKICAgICAgICAgICAgICAgIHN0YWNrLnBvcCgpOwogICAgICAgICAgICBmb3IgKGxldCBbZWxlbSwgX10gb2Ygc3RhY2spCiAgICAgICAgICAgICAgICBlbGVtLmZ1bGx5Q29tcGxldGVkID0gZWxlbS5mdWxseUNvbXBsZXRlZCAmJiB0YXNrLmZ1bGx5Q29tcGxldGVkOwogICAgICAgICAgICAoX2MgPSBhbGFzdChzdGFjaykpID09PSBudWxsIHx8IF9jID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfY1swXS5zdWJ0YXNrcy5wdXNoKHRhc2spOwogICAgICAgICAgICBzdGFjay5wdXNoKFt0YXNrLCBpbmRlbnRdKTsKICAgICAgICB9CiAgICAgICAgLy8gUmV0dXJuIGV2ZXJ5dGhpbmcgdW5kZXIgdGhlIHJvb3QsIHdoaWNoIHNob3VsZCBiZSBhbGwgdGFza3MuCiAgICAgICAgLy8gU3RyaXAgdHJlZXMgb2YgdGFza3Mgd2hpY2ggYXJlIHB1cmVseSBub3QgcmVhbCAobG9sPykuCiAgICAgICAgcmV0dXJuIHN0YWNrWzBdWzBdLnN1YnRhc2tzLmZpbHRlcih0ID0+IHRhc2tBbnkodCwgc3QgPT4gc3QucmVhbCkpOwogICAgfQogICAgZnVuY3Rpb24gcGFyc2VNYXJrZG93bihwYXRoLCBjb250ZW50cywgaW5saW5lUmVnZXgpIHsKICAgICAgICB2YXIgX2EsIF9iOwogICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7CiAgICAgICAgICAgIGxldCBmaWVsZHMgPSBuZXcgTWFwKCk7CiAgICAgICAgICAgIC8vIFRyYXdsIHRocm91Z2ggZmlsZSBjb250ZW50cyB0byBsb2NhdGUgY3VzdG9tIGlubGluZSBmaWxlIGNvbnRlbnQuLi4KICAgICAgICAgICAgZm9yIChsZXQgbGluZSBvZiBjb250ZW50cy5zcGxpdCgiXG4iKSkgewogICAgICAgICAgICAgICAgLy8gRmFzdCBiYWlsLW91dCBmb3IgbGluZXMgdGhhdCBhcmUgdG9vIGxvbmcuCiAgICAgICAgICAgICAgICBpZiAoIWxpbmUuaW5jbHVkZXMoIjo6IikpCiAgICAgICAgICAgICAgICAgICAgY29udGludWU7CiAgICAgICAgICAgICAgICBsaW5lID0gbGluZS50cmltKCk7CiAgICAgICAgICAgICAgICBsZXQgbWF0Y2ggPSBpbmxpbmVSZWdleC5leGVjKGxpbmUpOwogICAgICAgICAgICAgICAgaWYgKCFtYXRjaCkKICAgICAgICAgICAgICAgICAgICBjb250aW51ZTsKICAgICAgICAgICAgICAgIGxldCBuYW1lID0gbWF0Y2hbMV0udHJpbSgpOwogICAgICAgICAgICAgICAgbGV0IGlubGluZUZpZWxkID0gcGFyc2VJbmxpbmVGaWVsZChtYXRjaFsyXSk7CiAgICAgICAgICAgICAgICBmaWVsZHMuc2V0KG5hbWUsICgoX2EgPSBmaWVsZHMuZ2V0KG5hbWUpKSAhPT0gbnVsbCAmJiBfYSAhPT0gdm9pZCAwID8gX2EgOiBbXSkuY29uY2F0KFtpbmxpbmVGaWVsZF0pKTsKICAgICAgICAgICAgICAgIGxldCBzaW1wbGVOYW1lID0gY2Fub25pY2FsaXplVmFyTmFtZShtYXRjaFsxXS50cmltKCkpOwogICAgICAgICAgICAgICAgaWYgKHNpbXBsZU5hbWUubGVuZ3RoID4gMCAmJiBzaW1wbGVOYW1lICE9IG1hdGNoWzFdLnRyaW0oKSkgewogICAgICAgICAgICAgICAgICAgIGZpZWxkcy5zZXQoc2ltcGxlTmFtZSwgKChfYiA9IGZpZWxkcy5nZXQoc2ltcGxlTmFtZSkpICE9PSBudWxsICYmIF9iICE9PSB2b2lkIDAgPyBfYiA6IFtdKS5jb25jYXQoW2lubGluZUZpZWxkXSkpOwogICAgICAgICAgICAgICAgfQogICAgICAgICAgICB9CiAgICAgICAgICAgIC8vIEFuZCBleHRyYWN0IHRhc2tzLi4uCiAgICAgICAgICAgIGxldCB0YXNrcyA9IGZpbmRUYXNrc0luRmlsZShwYXRoLCBjb250ZW50cyk7CiAgICAgICAgICAgIHJldHVybiB7IGZpZWxkcywgdGFza3MgfTsKICAgICAgICB9KTsKICAgIH0KCiAgICAvKiogRW50cnktcG9pbnQgc2NyaXB0IHVzZWQgYnkgdGhlIGluZGV4IGFzIGEgd2ViIHdvcmtlci4gKi8KICAgIG9ubWVzc2FnZSA9IChldnQpID0+IF9fYXdhaXRlcih2b2lkIDAsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkgewogICAgICAgIGxldCBwYXJzZWQgPSB5aWVsZCBwYXJzZU1hcmtkb3duKGV2dC5kYXRhLnBhdGgsIGV2dC5kYXRhLmNvbnRlbnRzLCAvW19cKn5gXSooWzAtOVx3XHB7TGV0dGVyfV1bLTAtOVx3XHB7TGV0dGVyfVxwe0Vtb2ppX1ByZXNlbnRhdGlvbn1ccy9dKilbX1wqfmBdKlxzKjo6XHMqKC4rKS91KTsKICAgICAgICBwb3N0TWVzc2FnZSh7IHBhdGg6IGV2dC5kYXRhLnBhdGgsIHJlc3VsdDogdG9UcmFuc2ZlcmFibGUocGFyc2VkKSB9KTsKICAgIH0pOwoKfSgpKTsKCg==', null, false);
/* eslint-enable */

/** A generic index which indexes variables of the form key -> value[], allowing both forward and reverse lookups. */
class IndexMap {
    /** Create a new, empty index map. */
    constructor() {
        this.map = new Map();
        this.invMap = new Map();
    }
    /** Returns all values for the given key. */
    get(key) {
        let result = this.map.get(key);
        if (result) {
            return new Set(result);
        }
        else {
            return new Set();
        }
    }
    /** Returns all keys that reference the given key. */
    getInverse(value) {
        let result = this.invMap.get(value);
        if (result) {
            return new Set(result);
        }
        else {
            return new Set();
        }
    }
    set(key, values) {
        var _a;
        if (this.map.has(key))
            this.delete(key);
        this.map.set(key, values);
        for (let value of values) {
            if (!this.invMap.has(value))
                this.invMap.set(value, new Set());
            (_a = this.invMap.get(value)) === null || _a === void 0 ? void 0 : _a.add(key);
        }
        return this;
    }
    /** Clears all values for the given key so they can be re-added. */
    delete(key) {
        var _a;
        let oldValues = this.map.get(key);
        if (!oldValues)
            return false;
        this.map.delete(key);
        for (let value of oldValues) {
            (_a = this.invMap.get(value)) === null || _a === void 0 ? void 0 : _a.delete(key);
        }
        return true;
    }
    /** Rename all references to the given key to a new value. */
    rename(oldKey, newKey) {
        let oldValues = this.map.get(oldKey);
        if (!oldValues)
            return false;
        this.delete(oldKey);
        this.set(newKey, oldValues);
        return true;
    }
    /** Clear the entire index. */
    clear() {
        this.map.clear();
        this.invMap.clear();
    }
}
/** Multi-threaded file parser which debounces queues automatically. */
class BackgroundFileParser {
    constructor(numWorkers, vault) {
        this.numWorkers = numWorkers;
        this.vault = vault;
        this.workers = [];
        this.nextWorkerId = 0;
        this.reloadQueue = new Map();
        this.waitingCallbacks = new Map();
        this.pastPromises = new Map();
        for (let index = 0; index < numWorkers; index++) {
            let worker = new WorkerFactory({ name: "Dataview Indexer" });
            worker.onmessage = (evt) => {
                let callbacks = this.pastPromises.get(evt.data.path);
                let parsed = fromTransferable(evt.data.result);
                if (callbacks && callbacks.length > 0) {
                    for (let callback of callbacks)
                        callback(parsed);
                }
                this.pastPromises.delete(evt.data.path);
            };
            this.workers.push(worker);
        }
        this.reloadHandler = window.setInterval(() => {
            var _a, _b;
            let queueCopy = Array.from(this.reloadQueue.values());
            this.reloadQueue.clear();
            for (let [key, value] of this.waitingCallbacks.entries()) {
                if (this.pastPromises.has(key))
                    this.pastPromises.set(key, (_b = (_a = this.pastPromises.get(key)) === null || _a === void 0 ? void 0 : _a.concat(value)) !== null && _b !== void 0 ? _b : []);
                else
                    this.pastPromises.set(key, value);
            }
            this.waitingCallbacks.clear();
            for (let file of queueCopy) {
                let workerId = this.nextWorkerId;
                this.vault.read(file)
                    .then(c => this.workers[workerId].postMessage({ path: file.path, contents: c }));
                this.nextWorkerId = (this.nextWorkerId + 1) % this.numWorkers;
            }
        }, BackgroundFileParser.QUEUE_TIMEOUT);
    }
    /** Queue a file for reloading. Files which have recently been queued will not be reloaded. */
    reload(file) {
        this.reloadQueue.set(file.path, file);
        return new Promise((resolve, _reject) => {
            var _a;
            if (this.waitingCallbacks.has(file.path))
                (_a = this.waitingCallbacks.get(file.path)) === null || _a === void 0 ? void 0 : _a.push(resolve);
            else
                this.waitingCallbacks.set(file.path, [resolve]);
        });
    }
}
/** Time in milliseconds before a file is allowed to be requeued after being queued. */
BackgroundFileParser.QUEUE_TIMEOUT = 500;
/** Aggregate index which has several sub-indices and will initialize all of them. */
class FullIndex {
    /** Construct a new index over the given vault and metadata cache. */
    constructor(vault, metadataCache) {
        this.vault = vault;
        this.metadataCache = metadataCache;
        this.pages = new Map();
        this.tags = new IndexMap();
        this.etags = new IndexMap();
        this.links = new IndexMap();
        this.folders = new IndexMap();
        this.revision = 0;
        // The metadata cache is updated on file changes.
        this.metadataCache.on("changed", file => this.reload(file));
        // Renames do not set off the metadata cache; catch these explicitly.
        vault.on("rename", (file, oldPath) => {
            let oldPage = this.pages.get(oldPath);
            if (oldPage) {
                this.pages.delete(oldPath);
                this.pages.set(file.path, oldPage);
            }
            this.tags.rename(oldPath, file.path);
            this.etags.rename(oldPath, file.path);
            this.links.rename(oldPath, file.path);
            this.folders.rename(oldPath, file.path); // TODO: Do renames include folder changes?
            this.revision += 1;
            this.metadataCache.trigger("dataview:metadata-change", "rename", file, oldPath);
        });
        // File creation does cause a metadata change, but deletes do not. Clear the caches for this.
        this.vault.on("delete", file => {
            if (!(file instanceof obsidian.TFile))
                return;
            file = file;
            this.pages.delete(file.path);
            this.tags.delete(file.path);
            this.etags.delete(file.path);
            this.links.delete(file.path);
            this.folders.delete(file.path);
            this.revision += 1;
            this.metadataCache.trigger("dataview:metadata-change", "delete", file);
        });
    }
    /** Generate a full index from the given vault. */
    static generate(vault, cache) {
        return __awaiter(this, void 0, void 0, function* () {
            let index = new FullIndex(vault, cache);
            yield index.initialize();
            return Promise.resolve(index);
        });
    }
    /** I am not a fan of a separate "construct/initialize" step, but constructors cannot be async. */
    initialize() {
        return __awaiter(this, void 0, void 0, function* () {
            this.backgroundParser = new BackgroundFileParser(4, this.vault);
            // Prefix listens to file creation/deletion/rename, and not modifies, so we let it set up it's own listeners.
            this.prefix = yield PrefixIndex.generate(this.vault, () => this.revision += 1);
            // Traverse all markdown files & fill in initial data.
            let start = new Date().getTime();
            this.vault.getMarkdownFiles().forEach(file => this.reload(file));
            console.log("Dataview: Task & metadata parsing queued in %.3fs.", (new Date().getTime() - start) / 1000.0);
        });
    }
    /** Queue a file for reloading; this is done asynchronously in the background and may take a few seconds. */
    reload(file) {
        this.backgroundParser.reload(file).then(r => this.reloadInternal(file, r));
    }
    reloadInternal(file, parsed) {
        let meta = parsePage(file, this.metadataCache, parsed);
        this.pages.set(file.path, meta);
        this.tags.set(file.path, meta.fullTags());
        this.etags.set(file.path, meta.tags);
        this.links.set(file.path, new Set(meta.links.map(l => l.path)));
        this.folders.set(file.path, new Set([getParentFolder(file.path)]));
        this.revision += 1;
        this.metadataCache.trigger("dataview:metadata-change", "update", file);
    }
}
/** A node in the prefix tree. */
class PrefixIndexNode {
    constructor(element) {
        this.element = element;
        this.files = new Set();
        this.totalCount = 0;
        this.children = new Map();
    }
    static add(root, path) {
        let parts = path.split("/");
        let node = root;
        for (let index = 0; index < parts.length - 1; index++) {
            if (!node.children.has(parts[index]))
                node.children.set(parts[index], new PrefixIndexNode(parts[index]));
            node.totalCount += 1;
            node = node.children.get(parts[index]);
        }
        node.totalCount += 1;
        node.files.add(path);
    }
    static remove(root, path) {
        let parts = path.split("/");
        let node = root;
        let nodes = [];
        for (let index = 0; index < parts.length - 1; index++) {
            if (!node.children.has(parts[index]))
                return;
            nodes.push(node);
            node = node.children.get(parts[index]);
        }
        if (!node.files.has(path))
            return;
        node.files.delete(path);
        node.totalCount -= 1;
        for (let p of nodes)
            p.totalCount -= 1;
    }
    static find(root, prefix) {
        if (prefix.length == 0 || prefix == '/')
            return root;
        let parts = prefix.split("/");
        let node = root;
        for (let index = 0; index < parts.length; index++) {
            if (!node.children.has(parts[index]))
                return null;
            node = node.children.get(parts[index]);
        }
        return node;
    }
    static gather(root) {
        let result = new Set();
        PrefixIndexNode.gatherRec(root, result);
        return result;
    }
    static gatherRec(root, output) {
        for (let file of root.files)
            output.add(file);
        for (let child of root.children.values())
            this.gatherRec(child, output);
    }
}
/** Indexes files by their full prefix - essentially a simple prefix tree. */
class PrefixIndex {
    constructor(vault, root, updateRevision) {
        this.vault = vault;
        this.root = root;
        this.updateRevision = updateRevision;
        // TODO: I'm not sure if there is an event for all files in a folder, or just the folder.
        // I'm assuming the former naively for now until I inevitably fix it.
        this.vault.on("delete", file => {
            PrefixIndexNode.remove(this.root, file.path);
            updateRevision();
        });
        this.vault.on("create", file => {
            PrefixIndexNode.add(this.root, file.path);
            updateRevision();
        });
        this.vault.on("rename", (file, old) => {
            PrefixIndexNode.remove(this.root, old);
            PrefixIndexNode.add(this.root, file.path);
            updateRevision();
        });
    }
    static generate(vault, updateRevision) {
        return __awaiter(this, void 0, void 0, function* () {
            let root = new PrefixIndexNode("");
            let timeStart = new Date().getTime();
            // First time load...
            for (let file of vault.getMarkdownFiles()) {
                PrefixIndexNode.add(root, file.path);
            }
            let totalTimeMs = new Date().getTime() - timeStart;
            console.log(`Dataview: Parsed all file prefixes (${totalTimeMs / 1000.0}s)`);
            return Promise.resolve(new PrefixIndex(vault, root, updateRevision));
        });
    }
    get(prefix) {
        let node = PrefixIndexNode.find(this.root, prefix);
        if (node == null || node == undefined)
            return new Set();
        return PrefixIndexNode.gather(node);
    }
}

/** Holds DOM events for a rendered task view, including check functionality. */
class TaskViewLifecycle extends obsidian.MarkdownRenderChild {
    constructor(vault, container) {
        super(container);
        this.vault = vault;
        this.containerEl = container;
    }
    onload() {
        let checkboxes = this.containerEl.querySelectorAll("input");
        for (let index = 0; index < checkboxes.length; index++) {
            const checkbox = checkboxes.item(index);
            this.registerHandler(checkbox);
        }
    }
    registerHandler(checkbox) {
        this.registerDomEvent(checkbox, "click", event => {
            var _a, _b, _c, _d;
            let file = checkbox.dataset["file"];
            let lineno = checkbox.dataset["lineno"];
            let text = checkbox.dataset["text"];
            if (!file || !lineno || !text)
                return;
            if (!checkbox.hasAttribute('checked')) {
                let newCheckbox = createCheckbox(file, parseInt(lineno), text, true);
                (_a = checkbox.parentElement) === null || _a === void 0 ? void 0 : _a.addClass('is-checked');
                (_b = checkbox.parentElement) === null || _b === void 0 ? void 0 : _b.replaceChild(newCheckbox, checkbox);
                this.registerHandler(newCheckbox);
                setTaskCheckedInFile(this.vault, file, parseInt(lineno), text, false, true);
            }
            else {
                let newCheckbox = createCheckbox(file, parseInt(lineno), text, false);
                (_c = checkbox.parentElement) === null || _c === void 0 ? void 0 : _c.removeClass('is-checked');
                (_d = checkbox.parentElement) === null || _d === void 0 ? void 0 : _d.replaceChild(newCheckbox, checkbox);
                this.registerHandler(newCheckbox);
                setTaskCheckedInFile(this.vault, file, parseInt(lineno), text, true, false);
            }
        });
    }
}
/** Render tasks from multiple files. */
function renderFileTasks(container, tasks) {
    return __awaiter(this, void 0, void 0, function* () {
        for (let [path, list] of tasks.entries()) {
            let basepath = path.replace(".md", "");
            let header = container.createEl('h4');
            header.appendChild(createAnchor(getFileName(basepath), basepath, true));
            let div = container.createDiv();
            yield renderTasks(div, list);
        }
    });
}
/** Render a list of tasks as a single list. */
function renderTasks(container, tasks) {
    return __awaiter(this, void 0, void 0, function* () {
        let ul = container.createEl('ul', { cls: 'contains-task-list' });
        for (let task of tasks) {
            let li = ul.createEl('li');
            if (task.real) {
                li.addClass('task-list-item');
                if (task.completed)
                    li.addClass('is-checked');
            }
            // Render the text as markdown so that bolds, links, and other things work properly.
            yield obsidian.MarkdownRenderer.renderMarkdown(task.text, li, task.path, new obsidian.Component());
            // Unwrap the paragraph element that is created.
            let paragraph = li.querySelector("p");
            if (paragraph) {
                li.innerHTML = paragraph.innerHTML;
                paragraph.remove();
            }
            if (task.real) {
                let check = createCheckbox(task.path, task.line, task.text, task.completed);
                li.prepend(check);
            }
            if (task.subtasks.length > 0) {
                renderTasks(li, task.subtasks);
            }
        }
    });
}
function createCheckbox(file, line, text, checked) {
    let check = document.createElement("input");
    check.addClass('task-list-item-checkbox');
    check.type = 'checkbox';
    check.dataset["file"] = file;
    check.dataset["lineno"] = "" + line;
    // This field is technically optional, but is provided to double-check
    // we are editing the right line!
    check.dataset["text"] = text;
    if (checked) {
        check.setAttribute('checked', '');
    }
    return check;
}
/** Check a task in a file by rewriting it. */
function setTaskCheckedInFile(vault, path, taskLine, taskText, wasChecked, check) {
    return __awaiter(this, void 0, void 0, function* () {
        if (check == wasChecked)
            return;
        let text = yield vault.adapter.read(path);
        let splitText = text.replace("\r", "").split("\n");
        if (splitText.length < taskLine)
            return;
        let match = TASK_REGEX.exec(splitText[taskLine - 1]);
        if (!match)
            return;
        let foundText = match[3];
        let foundCompleted = match[2] == 'X' || match[2] == 'x';
        if (taskText.trim() != foundText.trim())
            return;
        if (wasChecked != foundCompleted)
            return;
        if (check) {
            splitText[taskLine - 1] = splitText[taskLine - 1]
                .replace("- [ ]", "- [x]")
                .replace("- []", "- [x]")
                .replace("-[]", "- [x]");
        }
        else {
            splitText[taskLine - 1] = splitText[taskLine - 1]
                .replace("- [X]", "- [ ]")
                .replace("-[X]", "- [ ]")
                .replace("- [x]", "- [ ]")
                .replace("-[x]", "- [ ]");
        }
        let hasRn = text.contains("\r");
        if (hasRn) {
            let final = splitText.join("\r\n");
            yield vault.adapter.write(path, final);
        }
        else {
            let final = splitText.join("\n");
            yield vault.adapter.write(path, final);
        }
    });
}

/** Utility functions for quickly creating fields. */
var QueryFields;
(function (QueryFields) {
    function named(name, field) {
        return { name, field };
    }
    QueryFields.named = named;
    function sortBy(field, dir) {
        return { field, direction: dir };
    }
    QueryFields.sortBy = sortBy;
})(QueryFields || (QueryFields = {}));

////////////////////
// Query Settings //
////////////////////
const DEFAULT_QUERY_SETTINGS = {
    renderNullAs: "\\-",
    warnOnEmptyResult: true,
    refreshInterval: 1000
};
/** Default settings for dataview on install. */
const DEFAULT_SETTINGS = {
    renderNullAs: "\\-",
    warnOnEmptyResult: true,
    inlineQueryPrefix: "=",
    inlineJsQueryPrefix: "$=",
    refreshInterval: 1000,
    enableDataviewJs: true,
    schemaVersion: 1
};

/** A parsimmon-powered parser-combinator implementation of the query language. */
const QUERY_LANGUAGE = parsimmon_umd_min.createLanguage({
    // Simple atom parsing, like words, identifiers, numbers.
    queryType: q => parsimmon_umd_min.alt(parsimmon_umd_min.regexp(/TABLE|LIST|TASK/i)).map(str => str.toLowerCase())
        .desc("query type ('TABLE', 'LIST', or 'TASK')"),
    explicitNamedField: q => parsimmon_umd_min.seqMap(EXPRESSION.field.skip(parsimmon_umd_min.whitespace), parsimmon_umd_min.regexp(/AS/i).skip(parsimmon_umd_min.whitespace), EXPRESSION.identifier.or(EXPRESSION.string), (field, _as, ident) => QueryFields.named(ident, field)),
    namedField: q => parsimmon_umd_min.alt(q.explicitNamedField, EXPRESSION.identifierDot.map(ident => QueryFields.named(ident, Fields.indexVariable(ident)))),
    sortField: q => parsimmon_umd_min.seqMap(EXPRESSION.field.skip(parsimmon_umd_min.optWhitespace), parsimmon_umd_min.regexp(/ASCENDING|DESCENDING|ASC|DESC/i).atMost(1), (field, dir) => {
        let direction = dir.length == 0 ? 'ascending' : dir[0].toLowerCase();
        if (direction == 'desc')
            direction = 'descending';
        if (direction == 'asc')
            direction = 'ascending';
        return {
            field: field,
            direction: direction
        };
    }),
    headerClause: q => q.queryType.skip(parsimmon_umd_min.whitespace).chain(qtype => {
        switch (qtype) {
            case "table":
                return parsimmon_umd_min.sepBy(q.namedField, parsimmon_umd_min.string(',').trim(parsimmon_umd_min.optWhitespace))
                    .map(fields => { return { type: 'table', fields }; });
            case "list":
                return EXPRESSION.field.atMost(1)
                    .map(format => { return { type: 'list', format: format.length == 1 ? format[0] : undefined }; });
            case "task":
                return parsimmon_umd_min.succeed({ type: 'task' });
            default:
                return parsimmon_umd_min.fail(`Unrecognized query type '${qtype}'`);
        }
    }),
    fromClause: q => parsimmon_umd_min.seqMap(parsimmon_umd_min.regexp(/FROM/i), parsimmon_umd_min.whitespace, EXPRESSION.source, (_1, _2, source) => source),
    whereClause: q => parsimmon_umd_min.seqMap(parsimmon_umd_min.regexp(/WHERE/i), parsimmon_umd_min.whitespace, EXPRESSION.field, (where, _, field) => { return { type: 'where', clause: field }; }),
    sortByClause: q => parsimmon_umd_min.seqMap(parsimmon_umd_min.regexp(/SORT/i), parsimmon_umd_min.whitespace, q.sortField.sepBy1(parsimmon_umd_min.string(',').trim(parsimmon_umd_min.optWhitespace)), (sort, _1, fields) => { return { type: 'sort', fields }; }),
    limitClause: q => parsimmon_umd_min.seqMap(parsimmon_umd_min.regexp(/LIMIT/i), parsimmon_umd_min.whitespace, EXPRESSION.field, (limit, _1, field) => { return { type: 'limit', amount: field }; }),
    flattenClause: q => parsimmon_umd_min.seqMap(parsimmon_umd_min.regexp(/FLATTEN/i).skip(parsimmon_umd_min.whitespace), q.namedField, (_, field) => { return { type: 'flatten', field }; }),
    groupByClause: q => parsimmon_umd_min.seqMap(parsimmon_umd_min.regexp(/GROUP BY/i).skip(parsimmon_umd_min.whitespace), q.namedField, (_, field) => { return { type: 'group', field }; }),
    // Full query parsing.
    clause: q => parsimmon_umd_min.alt(q.fromClause, q.whereClause, q.sortByClause, q.limitClause, q.groupByClause, q.flattenClause),
    query: q => parsimmon_umd_min.seqMap(q.headerClause.trim(parsimmon_umd_min.optWhitespace), q.fromClause.trim(parsimmon_umd_min.optWhitespace).atMost(1), q.clause.trim(parsimmon_umd_min.optWhitespace).many(), (header, from, clauses) => {
        return {
            header,
            source: from.length == 0 ? Sources.folder("") : from[0],
            operations: clauses,
            settings: DEFAULT_QUERY_SETTINGS
        };
    })
});
/**
 * Attempt to parse a query from the given query text, returning a string error
 * if the parse failed.
 */
function parseQuery(text, settings) {
    try {
        let query = QUERY_LANGUAGE.query.tryParse(text);
        if (settings)
            query.settings = Object.assign(query.settings, settings);
        return Result.success(query);
    }
    catch (error) {
        return Result.failure("" + error);
    }
}

/** Provides a global dispatch table for evaluating binary operators, including comparison. */
/** Provides implementations for binary operators on two types using a registry. */
class BinaryOpHandler {
    constructor() {
        this.map = new Map();
    }
    static create() {
        return new BinaryOpHandler();
    }
    register(left, op, right, func) {
        this.map.set(BinaryOpHandler.repr(op, left, right), func);
        return this;
    }
    registerComm(left, op, right, func) {
        return this
            .register(left, op, right, func)
            .register(right, op, left, (a, b) => func(b, a));
    }
    /** Implement a comparison function. */
    compare(type, compare) {
        return this
            .register(type, '<', type, (a, b) => compare(a, b) < 0)
            .register(type, '<=', type, (a, b) => compare(a, b) <= 0)
            .register(type, '>', type, (a, b) => compare(a, b) > 0)
            .register(type, '>=', type, (a, b) => compare(a, b) >= 0)
            .register(type, '=', type, (a, b) => compare(a, b) == 0)
            .register(type, '!=', type, (a, b) => compare(a, b) != 0);
    }
    /** Attempt to evaluate the given binary operator on the two literal fields. */
    evaluate(op, left, right) {
        let leftType = Values.typeOf(left);
        let rightType = Values.typeOf(right);
        if (!leftType)
            return Result.failure(`Unrecognized value '${left}'`);
        else if (!rightType)
            return Result.failure(`Unrecognized value '${right}'`);
        let handler = this.map.get(BinaryOpHandler.repr(op, leftType, rightType));
        if (handler)
            return Result.success(handler(left, right));
        // Right-'*' fallback:
        let handler2 = this.map.get(BinaryOpHandler.repr(op, leftType, '*'));
        if (handler2)
            return Result.success(handler2(left, right));
        // Left-'*' fallback:
        let handler3 = this.map.get(BinaryOpHandler.repr(op, '*', rightType));
        if (handler3)
            return Result.success(handler3(left, right));
        // Double '*' fallback.
        let handler4 = this.map.get(BinaryOpHandler.repr(op, '*', '*'));
        if (handler4)
            return Result.success(handler4(left, right));
        return Result.failure(`Operator '${op}' is not supported for '${leftType}' and '${rightType}`);
    }
    /** Create a string representation of the given triplet for unique lookup in the map. */
    static repr(op, left, right) {
        return `${left},${op},${right}`;
    }
}
/** Configure and create a binary OP handler with the given parameters. */
function createBinaryOps(linkNormalizer) {
    return BinaryOpHandler.create()
        // TODO: Consider not using a universal comparison function.
        .compare('*', (a, b) => Values.compareValue(a, b, linkNormalizer))
        // Global boolean operations.
        .register('*', '&', '*', (a, b) => Values.isTruthy(a) && Values.isTruthy(b))
        .register('*', '|', '*', (a, b) => Values.isTruthy(a) || Values.isTruthy(b))
        // Number implementations.
        .register('number', '+', 'number', (a, b) => a + b)
        .register('number', '-', 'number', (a, b) => a - b)
        .register('number', '*', 'number', (a, b) => a * b)
        .register('number', '/', 'number', (a, b) => a / b)
        // String implementations.
        .register('string', '+', '*', (a, b) => a + Values.toString(b))
        .register('*', '+', 'string', (a, b) => Values.toString(a) + b)
        .registerComm('string', '*', 'number', (a, b) => b < 0 ? "" : a.repeat(b))
        // Date Operations.
        .register('date', '-', 'date', (a, b) => {
        return normalizeDuration(a.diff(b, ['years', 'months', 'days', 'hours', 'minutes', 'seconds', 'milliseconds']));
    })
        .register('date', '-', 'duration', (a, b) => a.minus(b))
        .registerComm('date', '+', 'duration', (a, b) => a.plus(b))
        // Duration Operations.
        .register('duration', '+', 'duration', (a, b) => normalizeDuration(a.plus(b)))
        .register('duration', '-', 'duration', (a, b) => normalizeDuration(a.minus(b)))
        // Array operations.
        .register('array', '+', 'array', (a, b) => [].concat(a).concat(b))
        // Object operations.
        .register('object', '+', 'object', (a, b) => Object.assign({}, a, b));
}

/** Default function implementations for the expression evaluator. */
/**
 * Allows for the creation of functions that check the number and type of their arguments, and dispatch
 * to different implemenations based on the types of the inputs.
 */
class FunctionBuilder {
    constructor(name) {
        this.name = name;
        this.variants = [];
        this.vectorized = {};
    }
    /** Add a general function variant which accepts any number of arguments of any type. */
    vararg(impl) {
        this.variants.push({ args: [], varargs: true, impl });
        return this;
    }
    /** Add a function variant which takes in a single argument. */
    add1(argType, impl) {
        this.variants.push({ args: [argType], varargs: false, impl: (c, ...rest) => impl(rest[0], c) });
        return this;
    }
    /** Add a function variant which takes in two typed arguments. */
    add2(arg1, arg2, impl) {
        this.variants.push({
            args: [arg1, arg2],
            varargs: false,
            impl: (c, ...rest) => impl(rest[0], rest[1], c)
        });
        return this;
    }
    /** Add a function variant which takes in three typed arguments. */
    add3(arg1, arg2, arg3, impl) {
        this.variants.push({
            args: [arg1, arg2, arg3],
            varargs: false,
            impl: (c, ...rest) => impl(rest[0], rest[1], rest[2], c)
        });
        return this;
    }
    /** Add vectorized variants which accept the given number of arguments and delegate. */
    vectorize(numArgs, positions) {
        this.vectorized[numArgs] = positions;
        return this;
    }
    /** Return a function which checks the number and type of arguments, passing them on to the first matching variant. */
    build() {
        let self = (context, ...args) => {
            let types = [];
            for (let arg of args) {
                let argType = Values.typeOf(arg);
                if (!argType)
                    throw Error(`Unrecognized argument type for argument '${arg}'`);
                types.push(argType);
            }
            // Handle vectorization.
            if (this.vectorized[types.length]) {
                for (let vec of this.vectorized[types.length]) {
                    if (types[vec] != 'array')
                        continue;
                    return args[vec].map(v => {
                        let newArgs = [].concat(args);
                        newArgs[vec] = v;
                        return self(context, ...newArgs);
                    });
                }
            }
            outer: for (let variant of this.variants) {
                if (variant.varargs)
                    return variant.impl(context, ...args);
                if (variant.args.length != types.length)
                    continue;
                for (let index = 0; index < variant.args.length; index++) {
                    if (variant.args[index] != '*' && variant.args[index] != types[index])
                        continue outer;
                }
                return variant.impl(context, ...args);
            }
            throw Error(`No implementation of '${this.name}' found for arguments: ${types.join(", ")}`);
        };
        return self;
    }
}
/** Utilities for managing function implementations. */
var Functions;
(function (Functions) {
    /** Bind a context to a function implementation, yielding a function which does not need the context argument. */
    function bind(func, context) {
        return (...args) => func(context, ...args);
    }
    Functions.bind = bind;
    /** Bind a context to all functions in the given map, yielding a new map of bound functions. */
    function bindAll(funcs, context) {
        let result = {};
        for (let [key, func] of Object.entries(funcs)) {
            result[key] = Functions.bind(func, context);
        }
        return result;
    }
    Functions.bindAll = bindAll;
})(Functions || (Functions = {}));
/**
 * Collection of all defined functions; defined here so that they can be called from within dataview,
 * and test code.
 */
var DefaultFunctions;
(function (DefaultFunctions) {
    /** Compute the length of a data type. */
    DefaultFunctions.length = new FunctionBuilder("length")
        .add1("array", a => a.length)
        .add1("object", a => Object.keys(a).length)
        .add1("string", a => a.length)
        .add1("null", _a => 0)
        .build();
    /** List constructor function. */
    DefaultFunctions.list = (_context, ...args) => args;
    /** Object constructor function. */
    DefaultFunctions.object = (_context, ...args) => {
        if (args.length % 2 != 0)
            throw Error("object() requires an even number of arguments");
        let result = {};
        for (let index = 0; index < args.length; index += 2) {
            let key = args[index];
            if (!Values.isString(key))
                throw Error("keys should be of type string for object(key1, value1, ...)");
            result[key] = args[index + 1];
        }
        return result;
    };
    /** Internal link constructor function. */
    DefaultFunctions.link = new FunctionBuilder("link")
        .add1("string", (a, c) => Link.file(c.linkHandler.normalize(a), false))
        .add1("link", a => a)
        .add1("null", _a => null)
        .vectorize(1, [0])
        .add2("string", "string", (t, d, c) => Link.file(c.linkHandler.normalize(t), false, d))
        .add2("link", "string", (t, d) => t.withDisplay(d))
        .add2("null", "*", () => null)
        .add2("*", "null", (t, _n, c) => DefaultFunctions.link(c, t))
        .vectorize(2, [0])
        .build();
    /** External link constructor function. */
    DefaultFunctions.elink = new FunctionBuilder("elink")
        .add2("string", "string", (a, d) => {
        let elem = document.createElement('a');
        elem.textContent = d;
        elem.rel = "noopener";
        elem.target = "_blank";
        elem.classList.add("external-link");
        elem.href = a;
        return elem;
    })
        .add2("string", "null", (s, _n, c) => DefaultFunctions.elink(c, s, s))
        .add2("null", "*", () => null)
        .vectorize(2, [0])
        .add1("string", (a, c) => DefaultFunctions.elink(c, a, a))
        .add1("null", () => null)
        .vectorize(1, [0])
        .build();
    /** Date constructor function. */
    DefaultFunctions.date = new FunctionBuilder("date")
        .add1("string", str => {
        let parsedDate = EXPRESSION.date.parse(str);
        if (parsedDate.status)
            return parsedDate.value;
        else
            return null;
    })
        .add1("date", d => d)
        .add1("link", (link, c) => {
        var _b, _c, _d, _e;
        // Try to parse from the display...
        if (link.display) {
            let parsedDate = EXPRESSION.date.parse(link.display);
            if (parsedDate.status)
                return parsedDate.value;
        }
        // Then try to parse from the path...
        let parsedDate = EXPRESSION.date.parse(link.path);
        if (parsedDate.status)
            return parsedDate.value;
        // Then pull it from the file.
        let resolved = c.linkHandler.resolve(link.path);
        if (resolved && ((_c = (_b = resolved) === null || _b === void 0 ? void 0 : _b.file) === null || _c === void 0 ? void 0 : _c.day)) {
            return (_e = (_d = resolved) === null || _d === void 0 ? void 0 : _d.file) === null || _e === void 0 ? void 0 : _e.day;
        }
        return null;
    })
        .add1("null", () => null)
        .vectorize(1, [0])
        .build();
    const NUMBER_REGEX = /-?[0-9]+(\.[0-9]+)?/;
    /** Number constructor function. */
    DefaultFunctions.number = new FunctionBuilder("number")
        .add1("number", a => a)
        .add1("string", str => {
        let match = NUMBER_REGEX.exec(str);
        if (match)
            return Number.parseFloat(match[0]);
        else
            return null;
    })
        .add1("null", () => null)
        .vectorize(1, [0])
        .build();
    DefaultFunctions.round = new FunctionBuilder("round")
        .add1("number", n => Math.round(n))
        .add1("null", () => null)
        .vectorize(1, [0])
        .add2("number", "number", (n, p) => {
        if (p <= 0)
            return Math.round(n);
        return parseFloat(n.toFixed(p));
    })
        .add2("number", "null", n => Math.round(n))
        .add2("null", "*", () => null)
        .vectorize(2, [0])
        .build();
    DefaultFunctions.striptime = new FunctionBuilder("striptime")
        .add1("date", d => luxon.DateTime.fromObject({ year: d.year, month: d.month, day: d.day }))
        .add1("null", _n => null)
        .vectorize(1, [0])
        .build();
    DefaultFunctions.contains = new FunctionBuilder("contains")
        .add2("array", "*", (l, elem, context) => l.some(e => DefaultFunctions.contains(context, e, elem)))
        .add2("string", "string", (haystack, needle) => haystack.includes(needle))
        .add2("object", "string", (obj, key) => key in obj)
        .add2("*", "*", (elem1, elem2, context) => context.evaluate(Fields.binaryOp(Fields.literal(elem1), '=', Fields.literal(elem2))).orElseThrow())
        .vectorize(2, [1])
        .build();
    DefaultFunctions.icontains = new FunctionBuilder("icontains")
        .add2("string", "string", (haystack, needle) => haystack.toLocaleLowerCase().includes(needle.toLocaleLowerCase()))
        .vectorize(2, [1])
        .build();
    DefaultFunctions.econtains = new FunctionBuilder("econtains")
        .add2("array", "*", (l, elem, context) => l.some(e => context.evaluate(Fields.binaryOp(Fields.literal(elem), '=', Fields.literal(e))).orElseThrow()))
        .add2("string", "string", (haystack, needle) => haystack.includes(needle))
        .add2("object", "string", (obj, key) => key in obj)
        .add2("*", "*", (elem1, elem2, context) => context.evaluate(Fields.binaryOp(Fields.literal(elem1), '=', Fields.literal(elem2))).orElseThrow())
        .vectorize(2, [1])
        .build();
    /** Extract 0 or more keys from a given object via indexing. */
    DefaultFunctions.extract = (context, ...args) => {
        if (args.length == 0)
            return "extract(object, key1, ...) requires at least 1 argument";
        // Manually handle vectorization in the first argument.
        let object = args[0];
        if (Values.isArray(object))
            return object.map(v => DefaultFunctions.extract(context, v, ...args.slice(1)));
        let result = {};
        for (let index = 1; index < args.length; index++) {
            let key = args[index];
            if (!Values.isString(key))
                throw Error("extract(object, key1, ...) must be called with string keys");
            result[key] = context.evaluate(Fields.index(Fields.literal(object), Fields.literal(key))).orElseThrow();
        }
        return result;
    };
    DefaultFunctions.reverse = new FunctionBuilder("reverse")
        .add1("array", l => {
        let result = [];
        for (let index = l.length - 1; index >= 0; index--)
            result.push(l[index]);
        return result;
    })
        .add1("*", e => e)
        .build();
    DefaultFunctions.sort = new FunctionBuilder("sort")
        .add1("array", (list, context) => {
        let result = [].concat(list);
        result.sort((a, b) => {
            let le = context.evaluate(Fields.binaryOp(Fields.literal(a), "<", Fields.literal(b))).orElseThrow();
            if (Values.isTruthy(le))
                return -1;
            let eq = context.evaluate(Fields.binaryOp(Fields.literal(a), "=", Fields.literal(b))).orElseThrow();
            if (Values.isTruthy(eq))
                return 0;
            return 1;
        });
        return result;
    })
        .add1("*", e => e)
        .build();
    DefaultFunctions.regexmatch = new FunctionBuilder("regexmatch")
        .add2("string", "string", (pattern, field) => {
        if (!pattern.startsWith("^") && !pattern.endsWith("$"))
            pattern = "^" + pattern + "$";
        return !!field.match(pattern);
    })
        .add2("null", "*", (_n, _a) => false)
        .add2("*", "null", (_a, _n) => false)
        .vectorize(2, [0, 1])
        .build();
    DefaultFunctions.regexreplace = new FunctionBuilder("regexreplace")
        .add3("string", "string", "string", (field, pat, rep) => {
        try {
            let reg = new RegExp(pat, "g");
            return field.replace(reg, rep);
        }
        catch (ex) {
            throw Error(`Invalid regexp '${pat}' in regexreplace`);
        }
    })
        .add3("null", "*", "*", () => null)
        .add3("*", "null", "*", () => null)
        .add3("*", "*", "null", () => null)
        .vectorize(3, [0, 1, 2])
        .build();
    DefaultFunctions.lower = new FunctionBuilder("lower")
        .add1("string", s => s.toLocaleLowerCase())
        .add1("null", () => null)
        .vectorize(1, [0])
        .build();
    DefaultFunctions.upper = new FunctionBuilder("upper")
        .add1("string", s => s.toLocaleUpperCase())
        .add1("null", () => null)
        .vectorize(1, [0])
        .build();
    DefaultFunctions.replace = new FunctionBuilder("replace")
        .add3("string", "string", "string", (str, pat, repr) => str.replace(pat, repr))
        .add3("null", "*", "*", () => null)
        .add3("*", "null", "*", () => null)
        .add3("*", "*", "null", () => null)
        .vectorize(3, [0, 1, 2])
        .build();
    DefaultFunctions.fdefault = new FunctionBuilder("default")
        .add2("*", "*", (v, bk) => Values.isNull(v) ? bk : v)
        .vectorize(2, [0, 1])
        .build();
    DefaultFunctions.ldefault = new FunctionBuilder("ldefault")
        .add2("*", "*", (v, bk) => Values.isNull(v) ? bk : v)
        .build();
    DefaultFunctions.choice = new FunctionBuilder("choice")
        .add3("*", "*", "*", (b, left, right) => Values.isTruthy(b) ? left : right)
        .vectorize(3, [0])
        .build();
    DefaultFunctions.reduce = new FunctionBuilder("reduce")
        .add2("array", "string", (lis, op, context) => {
        if (lis.length == 0)
            return null;
        if (op != '+' && op != '-' && op != '*' && op != '/' && op != '&' && op != '|')
            throw Error("reduce(array, op) supports '+', '-', '/', '*', '&', and '|'");
        let value = lis[0];
        for (let index = 1; index < lis.length; index++) {
            // Skip null values to reduce the pain of summing over fields that may or may not exist.
            if (Values.isNull(lis[index]))
                continue;
            value = context.evaluate(Fields.binaryOp(Fields.literal(value), op, Fields.literal(lis[index]))).orElseThrow();
        }
        return value;
    })
        .add2("null", "*", () => null)
        .add2("*", "null", () => null)
        .vectorize(2, [1])
        .build();
    DefaultFunctions.sum = new FunctionBuilder("sum")
        .add1("array", (arr, c) => DefaultFunctions.reduce(c, arr, "+"))
        .add1("*", e => e)
        .build();
    DefaultFunctions.product = new FunctionBuilder("product")
        .add1("array", (arr, c) => DefaultFunctions.reduce(c, arr, "*"))
        .add1("*", e => e)
        .build();
    DefaultFunctions.join = new FunctionBuilder("join")
        .add2("array", "string", (arr, sep) => arr.map(e => Values.toString(e)).join(sep))
        .add2("array", "null", (arr, _s, context) => DefaultFunctions.join(context, arr, ", "))
        .add2("*", "string", (elem, sep) => Values.toString(elem))
        .add1("array", (arr, context) => DefaultFunctions.join(context, arr, ", "))
        .add1("*", e => Values.toString(e))
        .vectorize(2, [1])
        .build();
    DefaultFunctions.any = new FunctionBuilder("any")
        .add1("array", arr => arr.some(v => Values.isTruthy(v)))
        .vararg((_ctx, ...args) => args.some(v => Values.isTruthy(v)))
        .build();
    DefaultFunctions.all = new FunctionBuilder("all")
        .add1("array", arr => arr.every(v => Values.isTruthy(v)))
        .vararg((_ctx, ...args) => args.every(v => Values.isTruthy(v)))
        .build();
    DefaultFunctions.none = new FunctionBuilder("all")
        .add1("array", arr => !arr.some(v => Values.isTruthy(v)))
        .vararg((_ctx, ...args) => !args.some(v => Values.isTruthy(v)))
        .build();
    DefaultFunctions.nonnull = new FunctionBuilder("nonnull")
        .vararg((_ctx, ...args) => args.filter(v => Values.typeOf(v) != 'null'))
        .build();
})(DefaultFunctions || (DefaultFunctions = {}));
/** Default function implementations for the expression evaluator. */
const DEFAULT_FUNCTIONS = {
    // Constructors.
    "list": DefaultFunctions.list,
    "array": DefaultFunctions.list,
    "link": DefaultFunctions.link,
    "elink": DefaultFunctions.elink,
    "date": DefaultFunctions.date,
    "number": DefaultFunctions.number,
    "object": DefaultFunctions.object,
    // Math Operations.
    "round": DefaultFunctions.round,
    // String operations.
    "regexreplace": DefaultFunctions.regexreplace,
    "regexmatch": DefaultFunctions.regexmatch,
    "replace": DefaultFunctions.replace,
    "lower": DefaultFunctions.lower,
    "upper": DefaultFunctions.upper,
    // Date Operations.
    "striptime": DefaultFunctions.striptime,
    // List operations.
    "length": DefaultFunctions.length,
    "contains": DefaultFunctions.contains,
    "icontains": DefaultFunctions.icontains,
    "econtains": DefaultFunctions.econtains,
    "reverse": DefaultFunctions.reverse,
    "sort": DefaultFunctions.sort,
    // Aggregation operations like reduce.
    "reduce": DefaultFunctions.reduce,
    "join": DefaultFunctions.join,
    "sum": DefaultFunctions.sum,
    "product": DefaultFunctions.product,
    "all": DefaultFunctions.all,
    "any": DefaultFunctions.any,
    "none": DefaultFunctions.none,
    "nonnull": DefaultFunctions.nonnull,
    // Object/Utility operations.
    "extract": DefaultFunctions.extract,
    "default": DefaultFunctions.fdefault,
    "ldefault": DefaultFunctions.ldefault,
    "choice": DefaultFunctions.choice
};

/** Core implementation of the query language evaluation engine. */
/**
 * Evaluation context that expressions can be evaluated in. Includes global state, as well as available functions and a handler
 * for binary operators.
 */
class Context {
    /**
     * Create a new context with the given namespace of globals, as well as optionally with custom binary operator, function,
     * and link handlers.
     */
    constructor(linkHandler, globals = {}, binaryOps = createBinaryOps(linkHandler.normalize), functions = DEFAULT_FUNCTIONS) {
        this.linkHandler = linkHandler;
        this.globals = globals;
        this.binaryOps = binaryOps;
        this.functions = functions;
    }
    /** Set a global value in this context. */
    set(name, value) {
        this.globals[name] = value;
        return this;
    }
    /** Get the value of a global variable by name. Returns null if not present. */
    get(name) {
        var _a;
        return (_a = this.globals[name]) !== null && _a !== void 0 ? _a : null;
    }
    /** Try to evaluate an arbitary field in this context, raising an exception on failure. */
    tryEvaluate(field, data = {}) {
        return this.evaluate(field, data).orElseThrow();
    }
    /** Evaluate an arbitrary field in this context. */
    evaluate(field, data = {}) {
        var _a, _b;
        switch (field.type) {
            case "literal": return Result.success(field.value);
            case "variable":
                if (field.name in data)
                    return Result.success(data[field.name]);
                else if (field.name in this.globals)
                    return Result.success(this.globals[field.name]);
                else
                    return Result.success(null);
            case "negated":
                return this.evaluate(field.child, data).map(s => !Values.isTruthy(s));
            case "binaryop":
                return Result.flatMap2(this.evaluate(field.left, data), this.evaluate(field.right, data), (a, b) => this.binaryOps.evaluate(field.op, a, b));
            case "function":
                let rawFunc = field.func.type == "variable" ? Result.success(field.func.name) : this.evaluate(field.func, data);
                if (!rawFunc.successful)
                    return rawFunc;
                let func = rawFunc.value;
                let args = [];
                for (let arg of field.arguments) {
                    let resolved = this.evaluate(arg, data);
                    if (!resolved.successful)
                        return resolved;
                    args.push(resolved.value);
                }
                let call;
                if (Values.isFunction(func))
                    call = func;
                else if (Values.isString(func) && func in this.functions)
                    call = this.functions[func];
                else if (Values.isString(func))
                    return Result.failure(`Unrecognized function name '${func}'`);
                else
                    return Result.failure(`Cannot call type '${Values.typeOf(func)}' as a function`);
                try {
                    return Result.success(call(this, ...args));
                }
                catch (e) {
                    return Result.failure(e.message);
                }
            case "index":
                // TODO: Will move this out to an 'primitives' module and add more content to it.
                let literalIndex = field.index.type == "variable" ? Result.success(field.index.name) : this.evaluate(field.index, data);
                let checkedIndex = literalIndex.flatMap(s => Values.isString(s) || Values.isNumber(s)
                    ? Result.success(s)
                    : Result.failure("Can only index with a string, variable, or number"));
                if (!checkedIndex.successful)
                    return checkedIndex;
                let index = checkedIndex.value;
                let checkedObject = field.object.type == "variable" && field.object.name == "row"
                    ? Result.success(Object.assign({}, this.globals, data))
                    : this.evaluate(field.object, data);
                if (!checkedObject.successful)
                    return checkedObject;
                let object = Values.wrapValue(checkedObject.value);
                if (!object)
                    return Result.failure("Unrecognized object to index into: " + object);
                switch (object.type) {
                    case "object":
                        if (!Values.isString(index))
                            return Result.failure("can only index into objects with strings (a.b or a[\"b\"])");
                        return Result.success((_a = object.value[index]) !== null && _a !== void 0 ? _a : null);
                    case "link":
                        if (!Values.isString(index))
                            return Result.failure("can only index into links with strings (a.b or a[\"b\"])");
                        let linkValue = this.linkHandler.resolve(object.value.path);
                        if (Values.isNull(linkValue))
                            return Result.success(null);
                        return Result.success((_b = linkValue[index]) !== null && _b !== void 0 ? _b : null);
                    case "array":
                        if (Values.isNumber(index)) {
                            if (index >= object.value.length || index < 0)
                                return Result.success(null);
                            else
                                return Result.success(object.value[index]);
                        }
                        else if (Values.isString(index)) {
                            let result = [];
                            for (let value of object.value) {
                                let next = this.evaluate(Fields.index(Fields.literal(value), Fields.literal(index)));
                                if (!next.successful)
                                    continue;
                                result.push(next.value);
                            }
                            return Result.success(result);
                        }
                        else {
                            return Result.failure("Array indexing requires either a number (to get a specific element), or a string (to map all elements inside the array)");
                        }
                    case "string":
                        if (!Values.isNumber(index))
                            return Result.failure("string indexing requires a numeric index (string[index])");
                        if (index >= object.value.length || index < 0)
                            return Result.success(null);
                        return Result.success(object.value[index]);
                    case "date":
                        if (!Values.isString(index))
                            return Result.failure("date indexing requires a string representing the unit");
                        switch (index) {
                            case "year": return Result.success(object.value.year);
                            case "month": return Result.success(object.value.month);
                            case "weekyear": return Result.success(object.value.weekNumber);
                            case "week": return Result.success(Math.floor(object.value.day / 7) + 1);
                            case "weekday": return Result.success(object.value.weekday);
                            case "day": return Result.success(object.value.day);
                            case "hour": return Result.success(object.value.hour);
                            case "minute": return Result.success(object.value.minute);
                            case "second": return Result.success(object.value.second);
                            case "millisecond": return Result.success(object.value.millisecond);
                            default: return Result.success(null);
                        }
                    case "duration":
                        if (!Values.isString(index))
                            return Result.failure("duration indexing requires a string representing the unit");
                        switch (index) {
                            case "year":
                            case "years": return Result.success(object.value.years);
                            case "month":
                            case "months": return Result.success(object.value.months);
                            case "weeks": return Result.success(object.value.weeks);
                            case "day":
                            case "days": return Result.success(object.value.days);
                            case "hour":
                            case "hours": return Result.success(object.value.hours);
                            case "minute":
                            case "minutes": return Result.success(object.value.minutes);
                            case "second":
                            case "seconds": return Result.success(object.value.seconds);
                            case "millisecond":
                            case "milliseconds": return Result.success(object.value.milliseconds);
                            default: return Result.success(null);
                        }
                    default:
                        return Result.success(null);
                }
        }
    }
}

/** Collect data matching a source query. */
/** Collect page paths which match the given source. */
function collectPagePaths(source, index, originFile = "") {
    var _a;
    switch (source.type) {
        case "empty": return Result.success(new Set());
        case "tag": return Result.success(index.tags.getInverse(source.tag));
        case "csv": return Result.success(new Set(["csv://" + source.path]));
        case "folder": return Result.success(index.prefix.get(source.folder));
        case "link":
            let fullPath = (_a = index.metadataCache.getFirstLinkpathDest(source.file, originFile)) === null || _a === void 0 ? void 0 : _a.path;
            if (!fullPath)
                return Result.failure(`Could not resolve link "${source.file}" during link lookup - does it exist?`);
            if (source.direction === 'incoming') {
                // To find all incoming links (i.e., things that link to this), use the index that Obsidian provides.
                // TODO: Use an actual index so this isn't a fullscan.
                let resolved = index.metadataCache.resolvedLinks;
                let incoming = new Set();
                for (let [key, value] of Object.entries(resolved)) {
                    if (fullPath in value)
                        incoming.add(key);
                }
                return Result.success(incoming);
            }
            else {
                let resolved = index.metadataCache.resolvedLinks;
                if (!(fullPath in resolved))
                    return Result.failure(`Could not find file "${source.file}" during link lookup - does it exist?`);
                return Result.success(new Set(Object.keys(index.metadataCache.resolvedLinks[fullPath])));
            }
        case "binaryop":
            return Result.flatMap2(collectPagePaths(source.left, index, originFile), collectPagePaths(source.right, index, originFile), (left, right) => {
                if (source.op == '&') {
                    let result = new Set();
                    for (let elem of right) {
                        if (left.has(elem))
                            result.add(elem);
                    }
                    return Result.success(result);
                }
                else if (source.op == '|') {
                    let result = new Set(left);
                    for (let elem of right)
                        result.add(elem);
                    return Result.success(result);
                }
                else {
                    return Result.failure(`Unrecognized operator '${source.op}'.`);
                }
            });
        case "negate":
            return collectPagePaths(source.child, index, originFile).map(child => {
                // TODO: This is obviously very inefficient.
                let allFiles = new Set(index.vault.getMarkdownFiles().map(f => f.path));
                child.forEach(f => allFiles.delete(f));
                return allFiles;
            });
    }
}
/** Collect full page metadata for pages which match the given source. */
function collectPages(source, index, originFile = "") {
    return collectPagePaths(source, index, originFile)
        .map(s => DataArray.from(s).flatMap(p => {
        if (p.startsWith("csv://")) {
            let filePath = p.substring("csv://".length);
            let records = index.csv.get(filePath);
            if (!records)
                return [];
            return records.map((x) => {
                x['file'] = {
                    link: null,
                    name: getFileName(filePath),
                    path: filePath,
                };
                return { id: null, data: x };
            });
        }
        let page = index.pages.get(p);
        if (!page)
            return [];
        return [{ id: Link.file(page.path), data: page.toObject(index) }];
    }).array());
}

function iden(x) { return x; }
/** Shared execution code which just takes in arbitrary data, runs operations over it, and returns it + per-row errors. */
function executeCore(rows, context, ops) {
    let diagnostics = [];
    let identMeaning = { type: 'path' };
    let startTime = new Date().getTime();
    for (let op of ops) {
        let opStartTime = new Date().getTime();
        let incomingRows = rows.length;
        let errors = [];
        switch (op.type) {
            case "where":
                let whereResult = [];
                for (let index = 0; index < rows.length; index++) {
                    let row = rows[index];
                    let value = context.evaluate(op.clause, row.data);
                    if (!value.successful)
                        errors.push({ index, message: value.error });
                    else if (Values.isTruthy(value.value))
                        whereResult.push(row);
                }
                rows = whereResult;
                break;
            case "sort":
                let sortFields = op.fields;
                let taggedData = [];
                outer: for (let index = 0; index < rows.length; index++) {
                    let row = rows[index];
                    let rowSorts = [];
                    for (let sIndex = 0; sIndex < sortFields.length; sIndex++) {
                        let value = context.evaluate(sortFields[sIndex].field, row.data);
                        if (!value.successful) {
                            errors.push({ index, message: value.error });
                            continue outer;
                        }
                        rowSorts.push(value.value);
                    }
                    taggedData.push({ data: row, fields: rowSorts });
                }
                // Sort rows by the sort fields, and then return the finished result.
                taggedData.sort((a, b) => {
                    for (let index = 0; index < sortFields.length; index++) {
                        let factor = sortFields[index].direction === 'ascending' ? 1 : -1;
                        let le = context.binaryOps.evaluate('<', a.fields[index], b.fields[index]).orElse(false);
                        if (Values.isTruthy(le))
                            return factor * -1;
                        let ge = context.binaryOps.evaluate('>', a.fields[index], b.fields[index]).orElse(false);
                        if (Values.isTruthy(ge))
                            return factor * 1;
                    }
                    return 0;
                });
                rows = taggedData.map(v => v.data);
                break;
            case "limit":
                let limiting = context.evaluate(op.amount);
                if (!limiting.successful)
                    return Result.failure("Failed to execute 'limit' statement: " + limiting.error);
                if (!Values.isNumber(limiting.value))
                    return Result.failure(`Failed to execute 'limit' statement: limit should be a number, but got '${Values.typeOf(limiting.value)}' (${limiting.value})`);
                rows = rows.slice(0, limiting.value);
                break;
            case "group":
                let groupData = [];
                for (let index = 0; index < rows.length; index++) {
                    let value = context.evaluate(op.field.field, rows[index].data);
                    if (!value.successful) {
                        errors.push({ index, message: value.error });
                        continue;
                    }
                    groupData.push({ data: rows[index], key: value.value });
                }
                // Sort by the key, which we will group on shortly.
                groupData.sort((a, b) => {
                    let le = context.binaryOps.evaluate('<', a.key, b.key).orElse(false);
                    if (Values.isTruthy(le))
                        return -1;
                    let ge = context.binaryOps.evaluate('>', a.key, b.key).orElse(false);
                    if (Values.isTruthy(ge))
                        return 1;
                    return 0;
                });
                // Then walk through and find fields that are equal.
                let finalGroupData = [];
                if (groupData.length > 0)
                    finalGroupData.push({
                        key: groupData[0].key,
                        rows: [groupData[0].data.data],
                        [op.field.name]: groupData[0].key
                    });
                for (let index = 1; index < groupData.length; index++) {
                    let curr = groupData[index], prev = groupData[index - 1];
                    if (context.binaryOps.evaluate('=', curr.key, prev.key).orElse(false)) {
                        finalGroupData[finalGroupData.length - 1].rows.push(curr.data.data);
                    }
                    else {
                        finalGroupData.push({
                            key: curr.key,
                            rows: [curr.data.data],
                            [op.field.name]: groupData[0].key
                        });
                    }
                }
                rows = finalGroupData.map(d => { return { id: d.key, data: d }; });
                identMeaning = { type: 'group', name: op.field.name, on: identMeaning };
                break;
            case "flatten":
                let flattenResult = [];
                for (let index = 0; index < rows.length; index++) {
                    let row = rows[index];
                    let value = context.evaluate(op.field.field, row.data);
                    if (!value.successful) {
                        errors.push({ index, message: value.error });
                        continue;
                    }
                    let datapoints = Values.isArray(value.value) ? value.value : [value.value];
                    for (let v of datapoints) {
                        let copy = Values.deepCopy(row);
                        copy.data[op.field.name] = v;
                        flattenResult.push(copy);
                    }
                }
                rows = flattenResult;
                if (identMeaning.type == "group" && identMeaning.name == op.field.name)
                    identMeaning = identMeaning.on;
                break;
            default:
                return Result.failure("Unrecognized query operation '" + op.type + "'");
        }
        if (errors.length >= incomingRows && incomingRows > 0) {
            return Result.failure(`Every row during operation '${op.type}' failed with an error; first ${Math.min(3, errors.length)}:\n
                ${errors.slice(0, 3).map(d => "- " + d.message).join("\n")}`);
        }
        diagnostics.push({
            incomingRows,
            errors,
            outgoingRows: rows.length,
            timeMs: new Date().getTime() - opStartTime,
        });
    }
    return Result.success({
        data: rows,
        idMeaning: identMeaning,
        ops,
        diagnostics,
        timeMs: new Date().getTime() - startTime,
    });
}
/** Expanded version of executeCore which adds an additional "extraction" step to the pipeline. */
function executeCoreExtract(rows, context, ops, fields) {
    let internal = executeCore(rows, context, ops);
    if (!internal.successful)
        return internal;
    let core = internal.value;
    let startTime = new Date().getTime();
    let errors = [];
    let res = [];
    outer: for (let index = 0; index < core.data.length; index++) {
        let page = { id: core.data[index].id, data: {} };
        for (let [name, field] of Object.entries(fields)) {
            let value = context.evaluate(field, core.data[index].data);
            if (!value.successful) {
                errors.push({ index: index, message: value.error });
                continue outer;
            }
            page.data[name] = value.value;
        }
        res.push(page);
    }
    if (errors.length >= core.data.length && core.data.length > 0) {
        return Result.failure(`Every row during final data extraction failed with an error; first ${Math.max(errors.length, 3)}:\n
            ${errors.slice(0, 3).map(d => "- " + d.message).join("\n")}`);
    }
    let execTime = new Date().getTime() - startTime;
    return Result.success({
        data: res,
        idMeaning: core.idMeaning,
        diagnostics: core.diagnostics.concat([{
                timeMs: execTime,
                incomingRows: core.data.length,
                outgoingRows: res.length,
                errors
            }]),
        ops: core.ops.concat([{ type: 'extract', fields }]),
        timeMs: core.timeMs + execTime
    });
}
/** Execute a list-based query, returning the fina lresults. */
function executeList(query, index, origin) {
    var _a, _b;
    // Start by collecting all of the files that match the 'from' queries.
    let fileset = collectPages(query.source, index, origin);
    if (!fileset.successful)
        return Result.failure(fileset.error);
    // Extract information about the origin page to add to the root context.
    let rootContext = new Context(defaultLinkHandler(index, origin), { "this": (_b = (_a = index.pages.get(origin)) === null || _a === void 0 ? void 0 : _a.toObject(index)) !== null && _b !== void 0 ? _b : {} });
    let targetField = query.header.format;
    let fields = targetField ? { "target": targetField } : {};
    return executeCoreExtract(fileset.value, rootContext, query.operations, fields).map(core => {
        let data = core.data.map(p => {
            var _a;
            return iden({
                primary: p.id,
                value: (_a = p.data["target"]) !== null && _a !== void 0 ? _a : undefined
            });
        });
        return { primaryMeaning: core.idMeaning, core, data };
    });
}
/** Execute a table query. */
function executeTable(query, index, origin) {
    var _a, _b;
    // Start by collecting all of the files that match the 'from' queries.
    let fileset = collectPages(query.source, index, origin);
    if (!fileset.successful)
        return Result.failure(fileset.error);
    // Extract information about the origin page to add to the root context.
    let rootContext = new Context(defaultLinkHandler(index, origin), { "this": (_b = (_a = index.pages.get(origin)) === null || _a === void 0 ? void 0 : _a.toObject(index)) !== null && _b !== void 0 ? _b : {} });
    let targetFields = query.header.fields;
    let fields = {};
    for (let field of targetFields)
        fields[field.name] = field.field;
    return executeCoreExtract(fileset.value, rootContext, query.operations, fields).map(core => {
        let names = targetFields.map(f => f.name);
        let data = core.data.map(p => iden({
            id: p.id,
            values: targetFields.map(f => p.data[f.name])
        }));
        return { core, names, data, idMeaning: core.idMeaning };
    });
}
/** Execute a task query, returning all matching tasks. */
function executeTask(query, origin, index) {
    var _a, _b;
    // This is a somewhat silly way to do this for now; call into regular execute on the full query,
    // yielding a list of files. Then map the files to their tasks.
    // TODO: Consider per-task or per-task-block filtering via a more nuanced algorithm.
    let fileset = collectPages(query.source, index, origin);
    if (!fileset.successful)
        return Result.failure(fileset.error);
    // Extract information about the origin page to add to the root context.
    let rootContext = new Context(defaultLinkHandler(index, origin), { "this": (_b = (_a = index.pages.get(origin)) === null || _a === void 0 ? void 0 : _a.toObject(index)) !== null && _b !== void 0 ? _b : {} });
    return executeCoreExtract(fileset.value, rootContext, query.operations, {}).map(core => {
        var _a;
        let realResult = new Map();
        for (let row of core.data) {
            if (!Values.isLink(row.id))
                continue;
            let tasks = (_a = index.pages.get(row.id.path)) === null || _a === void 0 ? void 0 : _a.tasks;
            if (tasks == undefined || tasks.length == 0)
                continue;
            realResult.set(row.id.path, tasks);
        }
        return {
            core,
            tasks: realResult
        };
    });
}
/** Execute a single field inline a file, returning the evaluated result. */
function executeInline(field, origin, index) {
    var _a, _b;
    return new Context(defaultLinkHandler(index, origin), { "this": (_b = (_a = index.pages.get(origin)) === null || _a === void 0 ? void 0 : _a.toObject(index)) !== null && _b !== void 0 ? _b : {} })
        .evaluate(field);
}
/** The default link resolver used when creating contexts. */
function defaultLinkHandler(index, origin) {
    return {
        resolve: (link) => {
            let realFile = index.metadataCache.getFirstLinkpathDest(link, origin);
            if (!realFile)
                return null;
            let realPage = index.pages.get(realFile.path);
            if (!realPage)
                return null;
            return realPage.toObject(index);
        },
        normalize: (link) => {
            var _a;
            let realFile = index.metadataCache.getFirstLinkpathDest(link, origin);
            return (_a = realFile === null || realFile === void 0 ? void 0 : realFile.path) !== null && _a !== void 0 ? _a : link;
        },
        exists: (link) => {
            let realFile = index.metadataCache.getFirstLinkpathDest(link, origin);
            return !!realFile;
        }
    };
}

/** Wait for a given predicate (querying at the given interval). */
function waitFor(interval, predicate, cancel) {
    return __awaiter(this, void 0, void 0, function* () {
        if (cancel())
            return false;
        const wait = (ms) => new Promise((re, rj) => setTimeout(re, ms));
        while (!predicate()) {
            if (cancel())
                return false;
            yield wait(interval);
        }
        return true;
    });
}

/** The general, externally accessible plugin API (available at `app.plugins.plugins.dataview.api`). */
class DataviewApi {
    constructor(app, index, settings) {
        this.app = app;
        this.index = index;
        this.settings = settings;
        this.evaluationContext = new Context(defaultLinkHandler(index, ""));
        this.func = Functions.bindAll(DEFAULT_FUNCTIONS, this.evaluationContext);
    }
    /////////////////////////////
    // Index + Data Collection //
    /////////////////////////////
    /** Return an array of paths (as strings) corresponding to pages which match the query. */
    pagePaths(query, originFile) {
        let source;
        try {
            if (!query || query.trim() === "")
                source = Sources.folder("");
            else
                source = EXPRESSION.source.tryParse(query);
        }
        catch (ex) {
            throw new Error(`Failed to parse query in 'pagePaths': ${ex}`);
        }
        return collectPagePaths(source, this.index, originFile).map(s => DataArray.from(s)).orElseThrow();
    }
    /** Map a page path to the actual data contained within that page. */
    page(path, originFile) {
        if (!(typeof path === "string") && !Values.isLink(path)) {
            throw Error("dv.page only handles string and link paths; was provided type '" + (typeof path) + "'");
        }
        let rawPath = (path instanceof Link) ? path.path : path;
        let normPath = this.app.metadataCache.getFirstLinkpathDest(rawPath, originFile !== null && originFile !== void 0 ? originFile : "");
        if (!normPath)
            return undefined;
        let pageObject = this.index.pages.get(normPath.path);
        if (!pageObject)
            return undefined;
        return pageObject.toObject(this.index);
    }
    /** Return an array of page objects corresponding to pages which match the query. */
    pages(query, originFile) {
        return this.pagePaths(query, originFile).flatMap(p => {
            let res = this.page(p, originFile);
            return res ? [res] : [];
        });
    }
    /////////////
    // Utility //
    /////////////
    /**
     * Convert an input element or array into a Dataview data-array. If the input is already a data array,
     * it is returned unchanged.
     */
    array(raw) {
        if (DataArray.isDataArray(raw))
            return raw;
        if (Array.isArray(raw))
            return DataArray.wrap(raw);
        return DataArray.wrap([raw]);
    }
    /** Return true if theg given value is a javascript array OR a dataview data array. */
    isArray(raw) {
        return DataArray.isDataArray(raw) || Array.isArray(raw);
    }
    /** Create a dataview file link to the given path. */
    fileLink(path, embed = false, display) {
        return Link.file(path, embed, display);
    }
    /** Attempt to extract a date from a string, link or date. */
    date(pathlike) {
        return this.func.date(pathlike);
    }
    /**
     * Compare two arbitrary JavaScript values using Dataview's default comparison rules. Returns a negative value if
     * a < b, 0 if a = b, and a positive value if a > b.
     */
    compare(a, b) {
        return Values.compareValue(a, b);
    }
    /** Return true if the two given JavaScript values are equal using Dataview's default comparison rules. */
    equal(a, b) {
        return this.compare(a, b) == 0;
    }
    ///////////////
    // Rendering //
    ///////////////
    /** Render a dataview list of the given values. */
    list(values, container, component, filePath) {
        if (!values)
            return;
        if (DataArray.isDataArray(values))
            values = values.array();
        renderList(container, values, component, filePath, this.settings.renderNullAs);
    }
    /** Render a dataview table with the given headers, and the 2D array of values. */
    table(headers, values, container, component, filePath) {
        if (!values)
            values = [];
        if (DataArray.isDataArray(values))
            values = values.array();
        renderTable(container, headers, values, component, filePath, this.settings.renderNullAs);
    }
    /** Render a dataview task view with the given tasks. */
    taskList(tasks, groupByFile = true, container, component, filePath) {
        var _a;
        if (DataArray.isDataArray(tasks))
            tasks = tasks.array();
        if (groupByFile) {
            let byFile = new Map();
            for (let task of tasks) {
                if (!byFile.has(task.path))
                    byFile.set(task.path, []);
                (_a = byFile.get(task.path)) === null || _a === void 0 ? void 0 : _a.push(task);
            }
            let subcontainer = container.createDiv();
            (() => __awaiter(this, void 0, void 0, function* () {
                yield renderFileTasks(subcontainer, byFile);
                component.addChild(new TaskViewLifecycle(this.app.vault, subcontainer));
            }))();
        }
        else {
            let subcontainer = container.createDiv();
            (() => __awaiter(this, void 0, void 0, function* () {
                yield renderTasks(subcontainer, tasks);
                component.addChild(new TaskViewLifecycle(this.app.vault, subcontainer));
            }))();
        }
    }
    /** Render an arbitrary value into a container. */
    renderValue(value, container, component, filePath, inline = false) {
        return __awaiter(this, void 0, void 0, function* () {
            yield renderValue(value, container, filePath, component, "\-", !inline);
        });
    }
}

/** Fancy wrappers for the JavaScript API, used both by external plugins AND by the dataview javascript view. */
class DataviewInlineApi {
    constructor(index, component, container, app, settings, currentFilePath) {
        var _a, _b;
        this.index = index;
        this.component = component;
        this.container = container;
        this.app = app;
        this.currentFilePath = currentFilePath;
        this.settings = settings;
        this.api = new DataviewApi(this.app, this.index, this.settings);
        // Set up the evaluation context with variables from the current file.
        let fileMeta = (_b = (_a = this.index.pages.get(this.currentFilePath)) === null || _a === void 0 ? void 0 : _a.toObject(this.index)) !== null && _b !== void 0 ? _b : {};
        this.evaluationContext = new Context(defaultLinkHandler(this.index, this.currentFilePath), fileMeta);
        this.func = Functions.bindAll(DEFAULT_FUNCTIONS, this.evaluationContext);
    }
    /////////////////////////////
    // Index + Data Collection //
    /////////////////////////////
    /** Return an array of paths (as strings) corresponding to pages which match the query. */
    pagePaths(query) { return this.api.pagePaths(query, this.currentFilePath); }
    /** Map a page path to the actual data contained within that page. */
    page(path) { return this.api.page(path, this.currentFilePath); }
    /** Return an array of page objects corresponding to pages which match the query. */
    pages(query) { return this.api.pages(query, this.currentFilePath); }
    /** Return the information about the current page. */
    current() {
        return this.page(this.currentFilePath);
    }
    /////////////
    // Utility //
    /////////////
    /**
     * Convert an input element or array into a Dataview data-array. If the input is already a data array,
     * it is returned unchanged.
     */
    array(raw) {
        if (DataArray.isDataArray(raw))
            return raw;
        if (Array.isArray(raw))
            return DataArray.wrap(raw);
        return DataArray.wrap([raw]);
    }
    /** Return true if theg given value is a javascript array OR a dataview data array. */
    isArray(raw) {
        return DataArray.isDataArray(raw) || Array.isArray(raw);
    }
    /** Create a dataview file link to the given path. */
    fileLink(path, embed = false, display) {
        return Link.file(path, embed, display);
    }
    /** Attempt to extract a date from a string, link or date. */
    date(pathlike) {
        return this.api.date(pathlike);
    }
    /**
     * Compare two arbitrary JavaScript values using Dataview's default comparison rules. Returns a negative value if
     * a < b, 0 if a = b, and a positive value if a > b.
     */
    compare(a, b) {
        return Values.compareValue(a, b);
    }
    /** Return true if the two given JavaScript values are equal using Dataview's default comparison rules. */
    equal(a, b) {
        return this.compare(a, b) == 0;
    }
    /////////////////////////
    // Rendering Functions //
    /////////////////////////
    /** Render an HTML header; the level can be anything from 1 - 6. */
    header(level, text) {
        let headerType;
        switch (level) {
            case 1:
                headerType = 'h1';
                break;
            case 2:
                headerType = 'h2';
                break;
            case 3:
                headerType = 'h3';
                break;
            case 4:
                headerType = 'h4';
                break;
            case 5:
                headerType = 'h5';
                break;
            case 6:
                headerType = 'h6';
                break;
            default: throw new Error(`Invalid header level ${level}`);
        }
        let wrapped = Values.wrapValue(text);
        if (wrapped === null || wrapped === undefined) {
            this.container.createEl(headerType, { text });
            return;
        }
        let header = this.container.createEl(headerType);
        renderValue(wrapped.value, header, this.currentFilePath, this.component, this.settings.renderNullAs, false);
    }
    /** Render an HTML paragraph, containing arbitrary text. */
    paragraph(text) {
        let wrapped = Values.wrapValue(text);
        if (wrapped === null || wrapped === undefined) {
            this.container.createEl('p', { text });
            return;
        }
        renderValue(wrapped.value, this.container, this.currentFilePath, this.component, this.settings.renderNullAs, true);
    }
    /** Render an inline span, containing arbitrary text. */
    span(text) {
        let wrapped = Values.wrapValue(text);
        if (wrapped === null || wrapped === undefined) {
            this.container.createEl('p', { text });
            return;
        }
        renderValue(wrapped.value, this.container, this.currentFilePath, this.component, this.settings.renderNullAs, true);
    }
    /**
     * Render HTML from the output of a template "view" saved as a file in the vault.
     * Takes a filename and arbitrary input data.
     */
    view(viewName, input) {
        let viewPath = `${viewName}/view.js`;
        let viewFile = this.app.metadataCache.getFirstLinkpathDest(viewPath, this.currentFilePath);
        /** Check that a file exists for the requested view name. */
        if (!viewFile) {
            renderErrorPre(this.container, `Dataview: file not found at ${viewPath}`);
            return;
        }
        /**
         * Create a function from file contents. This is the dangerous part:
         * it’s basically eval(). Consider adding sanitization & filtering.
         */
        this.app.vault.read(viewFile).then(viewData => {
            let viewFunction = new Function('dv', 'input', viewData);
            /** The view file code must return a string, which we treat as HTML. */
            let text = viewFunction(this, input);
            let wrapped = Values.wrapValue(text);
            if (wrapped === null || wrapped === undefined) {
                this.container.createEl('div', { text });
                return;
            }
            renderValue(wrapped.value, this.container, this.currentFilePath, this.component, this.settings.renderNullAs, true);
        }).catch(error => {
            renderErrorPre(this.container, "Dataview: " + error.stack);
        });
        /** Check for optional CSS. */
        let cssPath = `${viewName}/view.css`;
        let cssFile = this.app.metadataCache.getFirstLinkpathDest(cssPath, this.currentFilePath);
        if (!cssFile)
            return;
        this.app.vault.read(cssFile).then(viewCSS => {
            this.container.createEl('style', { text: viewCSS, attr: { scoped: '' } });
        }).catch(error => {
            renderErrorPre(this.container, "Dataview: " + error.stack);
        });
    }
    /** Render a dataview list of the given values. */
    list(values) {
        return this.api.list(values, this.container, this.component, this.currentFilePath);
    }
    /** Render a dataview table with the given headers, and the 2D array of values. */
    table(headers, values) {
        return this.api.table(headers, values, this.container, this.component, this.currentFilePath);
    }
    /** Render a dataview task view with the given tasks. */
    taskList(tasks, groupByFile = true) {
        return this.api.taskList(tasks, groupByFile, this.container, this.component, this.currentFilePath);
    }
}
/** Evaluate a script where 'this' for the script is set to the given context. Allows you to define global variables. */
function evalInContext(script, context) {
    return function () { return eval(script); }.call(context);
}
/** Make a full API context which a script can be evaluted in. */
function makeApiContext(index, component, app, settings, container, originFile) {
    return new DataviewInlineApi(index, component, container, app, settings, originFile);
}

class DataviewPlugin extends obsidian.Plugin {
    onload() {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            // Settings initialization; write defaults first time around.
            this.settings = Object.assign(DEFAULT_SETTINGS, (_a = yield this.loadData()) !== null && _a !== void 0 ? _a : {});
            this.addSettingTab(new DataviewSettingsTab(this.app, this));
            console.log("Dataview: Version 0.4.x Loaded");
            if (!this.app.workspace.layoutReady) {
                this.app.workspace.onLayoutReady(() => __awaiter(this, void 0, void 0, function* () { return this.prepareIndexes(); }));
            }
            else {
                this.prepareIndexes();
            }
            // Dataview query language code blocks.
            this.registerHighPriorityCodeblockProcessor("dataview", (source, el, ctx) => __awaiter(this, void 0, void 0, function* () {
                let maybeQuery = tryOrPropogate(() => parseQuery(source, this.settings));
                // In case of parse error, just render the error.
                if (!maybeQuery.successful) {
                    renderErrorPre(el, "Dataview: " + maybeQuery.error);
                    return;
                }
                let query = maybeQuery.value;
                switch (query.header.type) {
                    case 'task':
                        ctx.addChild(this.wrapWithEnsureIndex(ctx, el, () => new DataviewTaskRenderer(query, el, this.index, ctx.sourcePath, this.app.vault, this.settings)));
                        break;
                    case 'list':
                        ctx.addChild(this.wrapWithEnsureIndex(ctx, el, () => new DataviewListRenderer(query, el, this.index, ctx.sourcePath, this.settings)));
                        break;
                    case 'table':
                        ctx.addChild(this.wrapWithEnsureIndex(ctx, el, () => new DataviewTableRenderer(query, el, this.index, ctx.sourcePath, this.settings)));
                        break;
                }
            }));
            // DataviewJS codeblocks.
            this.registerHighPriorityCodeblockProcessor("dataviewjs", (source, el, ctx) => __awaiter(this, void 0, void 0, function* () {
                ctx.addChild(this.wrapWithEnsureIndex(ctx, el, () => new DataviewJSRenderer(source, el, this.app, this.index, ctx.sourcePath, this.settings)));
            }));
            // Dataview inline queries.
            this.registerMarkdownPostProcessor((el, ctx) => __awaiter(this, void 0, void 0, function* () {
                // Search for <code> blocks inside this element; for each one, look for things of the form `= ...`.
                let codeblocks = el.querySelectorAll("code");
                for (let index = 0; index < codeblocks.length; index++) {
                    let codeblock = codeblocks.item(index);
                    let text = codeblock.innerText.trim();
                    if (text.startsWith(this.settings.inlineJsQueryPrefix)) {
                        let code = text.substring(this.settings.inlineJsQueryPrefix.length).trim();
                        ctx.addChild(this.wrapInlineWithEnsureIndex(ctx, codeblock, () => new DataviewInlineJSRenderer(code, el, codeblock, this.app, this.index, ctx.sourcePath, this.settings)));
                    }
                    else if (text.startsWith(this.settings.inlineQueryPrefix)) {
                        let potentialField = text.substring(this.settings.inlineQueryPrefix.length).trim();
                        let field = tryOrPropogate(() => parseField(potentialField));
                        if (!field.successful) {
                            let errorBlock = el.createEl('div');
                            renderErrorPre(errorBlock, `Dataview (inline field '${potentialField}'): ${field.error}`);
                        }
                        else {
                            let fieldValue = field.value;
                            ctx.addChild(this.wrapInlineWithEnsureIndex(ctx, codeblock, () => new DataviewInlineRenderer(fieldValue, text, el, codeblock, this.index, ctx.sourcePath, this.settings)));
                        }
                    }
                }
            }));
        });
    }
    /**
     * Utility function for registering high priority codeblocks which run before any other post processing, such as
     * emoji-twitter.
     */
    registerHighPriorityCodeblockProcessor(language, processor) {
        let postProcess = (el, ctx) => __awaiter(this, void 0, void 0, function* () {
            let codeblocks = el.querySelectorAll("pre > code");
            if (!codeblocks)
                return;
            for (let index = 0; index < codeblocks.length; index++) {
                let codeblock = codeblocks.item(index);
                let clanguages = Array.from(codeblock.classList)
                    .filter(c => c.startsWith("language-"))
                    .map(c => c.substring("language-".length));
                if (!clanguages.contains(language))
                    continue;
                if (!codeblock.parentElement)
                    continue;
                let code = codeblock.innerText;
                // We know the parent element is a pre, replace it.
                let replacement = document.createElement("div");
                codeblock.parentElement.replaceWith(replacement);
                yield processor(code, replacement, ctx);
            }
        });
        postProcess.sortOrder = -100;
        this.registerMarkdownPostProcessor(postProcess);
    }
    onunload() { }
    /** Prepare all dataview indices. */
    prepareIndexes() {
        return __awaiter(this, void 0, void 0, function* () {
            let index = yield FullIndex.generate(this.app.vault, this.app.metadataCache);
            this.index = index;
            this.api = new DataviewApi(this.app, this.index, this.settings);
            this.app.metadataCache.trigger("dataview:api-ready", this.api);
        });
    }
    /** Update plugin settings. */
    updateSettings(settings) {
        return __awaiter(this, void 0, void 0, function* () {
            Object.assign(this.settings, settings);
            yield this.saveData(this.settings);
        });
    }
    wrapWithEnsureIndex(ctx, container, success) {
        return new EnsurePredicateRenderer(ctx, container, () => this.index != undefined && this.index.pages && this.index.pages.size > 0, success);
    }
    wrapInlineWithEnsureIndex(ctx, container, success) {
        return new EnsureInlinePredicateRenderer(ctx, container, () => this.index != undefined && this.index.pages && this.index.pages.size > 0, success);
    }
}
/** All of the dataview settings in a single, nice tab. */
class DataviewSettingsTab extends obsidian.PluginSettingTab {
    constructor(app, plugin) {
        super(app, plugin);
        this.plugin = plugin;
    }
    display() {
        this.containerEl.empty();
        this.containerEl.createEl("h2", { text: "Dataview Settings" });
        new obsidian.Setting(this.containerEl)
            .setName("Render Null As")
            .setDesc("What null/non-existent should show up as in tables, by default.")
            .addText(text => text.setPlaceholder("-")
            .setValue(this.plugin.settings.renderNullAs)
            .onChange((value) => __awaiter(this, void 0, void 0, function* () { return yield this.plugin.updateSettings({ renderNullAs: value }); })));
        new obsidian.Setting(this.containerEl)
            .setName("Warn on Empty Result")
            .setDesc("If set, queries which return 0 results will render a warning message.")
            .addToggle(toggle => toggle.setValue(this.plugin.settings.warnOnEmptyResult)
            .onChange((value) => __awaiter(this, void 0, void 0, function* () { return yield this.plugin.updateSettings({ warnOnEmptyResult: value }); })));
        new obsidian.Setting(this.containerEl)
            .setName("Inline Query Prefix")
            .setDesc("The prefix to inline queries (to mark them as Dataview queries). Defaults to '='.")
            .addText(text => text.setPlaceholder("=")
            .setValue(this.plugin.settings.inlineQueryPrefix)
            .onChange((value) => __awaiter(this, void 0, void 0, function* () { return yield this.plugin.updateSettings({ inlineQueryPrefix: value }); })));
        new obsidian.Setting(this.containerEl)
            .setName("JavaScript Inline Query Prefix")
            .setDesc("The prefix to JavaScript inline queries (to mark them as DataviewJS queries). Defaults to '$='.")
            .addText(text => text.setPlaceholder("$=")
            .setValue(this.plugin.settings.inlineJsQueryPrefix)
            .onChange((value) => __awaiter(this, void 0, void 0, function* () { return yield this.plugin.updateSettings({ inlineJsQueryPrefix: value }); })));
        new obsidian.Setting(this.containerEl)
            .setName("Dataview Refresh Interval (milliseconds)")
            .setDesc("How frequently dataviews are updated in preview mode when files are changing.")
            .addText(text => text.setPlaceholder("5000")
            .setValue("" + this.plugin.settings.refreshInterval)
            .onChange((value) => __awaiter(this, void 0, void 0, function* () {
            let parsed = parseInt(value);
            if (isNaN(parsed))
                return;
            parsed = (parsed < 100) ? 100 : parsed;
            yield this.plugin.updateSettings({ refreshInterval: parsed });
        })));
        new obsidian.Setting(this.containerEl)
            .setName("Enable JavaScript Queries")
            .setDesc("Enable or disable executing DataviewJS queries.")
            .addToggle(toggle => toggle.setValue(this.plugin.settings.enableDataviewJs)
            .onChange((value) => __awaiter(this, void 0, void 0, function* () { return yield this.plugin.updateSettings({ enableDataviewJs: value }); })));
    }
}
/** A generic renderer which waits for a predicate, only continuing on success. */
class EnsurePredicateRenderer extends obsidian.MarkdownRenderChild {
    constructor(ctx, container, update, success) {
        super(container);
        this.ctx = ctx;
        this.container = container;
        this.update = update;
        this.success = success;
        this.ctx = ctx;
        this.container = container;
        this.update = update;
        this.success = success;
        this.dead = false;
    }
    onload() {
        return __awaiter(this, void 0, void 0, function* () {
            let loadContainer = renderErrorPre(this.container, "Dataview indices are loading");
            // Wait for the given predicate to finally pass...
            yield waitFor(EnsurePredicateRenderer.CHECK_INTERVAL_MS, () => { loadContainer.innerText += "."; return this.update(); }, () => this.dead);
            // Clear the container before passing it off to the child.
            this.container.innerHTML = "";
            // And then pass off rendering to a child context.
            this.ctx.addChild(this.success());
        });
    }
    onunload() {
        this.dead = true;
    }
}
EnsurePredicateRenderer.CHECK_INTERVAL_MS = 1000;
/** Inline version of EnsurePredicateRenderer; renders it's loading message differently. */
class EnsureInlinePredicateRenderer extends obsidian.MarkdownRenderChild {
    constructor(ctx, container, update, success) {
        super(container);
        this.ctx = ctx;
        this.container = container;
        this.update = update;
        this.success = success;
        this.ctx = ctx;
        this.container = container;
        this.update = update;
        this.success = success;
        this.dead = false;
    }
    onload() {
        return __awaiter(this, void 0, void 0, function* () {
            this.container.innerHTML = "<Indices loading>";
            // Wait for the given predicate to finally pass...
            yield waitFor(EnsurePredicateRenderer.CHECK_INTERVAL_MS, () => { return this.update(); }, () => this.dead);
            // Clear the container before passing it off to the child.
            this.container.innerHTML = "";
            // And then pass off rendering to a child context.
            this.ctx.addChild(this.success());
        });
    }
    onunload() {
        this.dead = true;
    }
}
EnsureInlinePredicateRenderer.CHECK_INTERVAL_MS = 1000;
/** Renders a list dataview for the given query. */
class DataviewListRenderer extends obsidian.MarkdownRenderChild {
    constructor(query, container, index, origin, settings) {
        super(container);
        this.query = query;
        this.container = container;
        this.index = index;
        this.origin = origin;
        this.settings = settings;
    }
    onload() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.render();
            onIndexChange(this.index, this.settings.refreshInterval, this, () => __awaiter(this, void 0, void 0, function* () {
                this.container.innerHTML = "";
                yield this.render();
            }));
        });
    }
    render() {
        return __awaiter(this, void 0, void 0, function* () {
            let maybeResult = tryOrPropogate(() => executeList(this.query, this.index, this.origin));
            if (!maybeResult.successful) {
                renderErrorPre(this.container, "Dataview: " + maybeResult.error);
                return;
            }
            else if (maybeResult.value.data.length == 0 && this.settings.warnOnEmptyResult) {
                renderErrorPre(this.container, "Dataview: Query returned 0 results.");
                return;
            }
            let result = maybeResult.value;
            let rendered = [];
            for (let row of result.data) {
                if (row.value) {
                    let span = document.createElement('span');
                    yield renderValue(row.primary, span, this.origin, this, this.settings.renderNullAs, true);
                    span.appendText(": ");
                    yield renderValue(row.value, span, this.origin, this, this.settings.renderNullAs, true);
                    rendered.push(span);
                }
                else {
                    rendered.push(row.primary);
                }
            }
            yield renderList(this.container, rendered, this, this.origin, this.settings.renderNullAs);
        });
    }
}
class DataviewTableRenderer extends obsidian.MarkdownRenderChild {
    constructor(query, container, index, origin, settings) {
        super(container);
        this.query = query;
        this.container = container;
        this.index = index;
        this.origin = origin;
        this.settings = settings;
    }
    onload() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.render();
            onIndexChange(this.index, this.settings.refreshInterval, this, () => __awaiter(this, void 0, void 0, function* () {
                this.container.innerHTML = "";
                yield this.render();
            }));
        });
    }
    render() {
        return __awaiter(this, void 0, void 0, function* () {
            let maybeResult = tryOrPropogate(() => executeTable(this.query, this.index, this.origin));
            if (!maybeResult.successful) {
                renderErrorPre(this.container, "Dataview: " + maybeResult.error);
                return;
            }
            let result = maybeResult.value;
            let dataWithNames = [];
            for (let entry of result.data) {
                dataWithNames.push([entry.id].concat(entry.values));
            }
            let name = result.idMeaning.type === "group" ? "Group" : "File";
            yield renderTable(this.container, [name].concat(result.names), dataWithNames, this, this.origin, this.settings.renderNullAs);
            // Render after the empty table, so the table header still renders.
            if (result.data.length == 0 && this.settings.warnOnEmptyResult) {
                renderErrorPre(this.container, "Dataview: Query returned 0 results.");
            }
        });
    }
}
class DataviewTaskRenderer extends obsidian.MarkdownRenderChild {
    constructor(query, container, index, origin, vault, settings) {
        super(container);
        this.query = query;
        this.container = container;
        this.index = index;
        this.origin = origin;
        this.vault = vault;
        this.settings = settings;
    }
    onload() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.render();
            onIndexChange(this.index, this.settings.refreshInterval, this, () => __awaiter(this, void 0, void 0, function* () {
                if (this.taskView)
                    this.removeChild(this.taskView);
                this.container.innerHTML = "";
                yield this.render();
            }));
        });
    }
    render() {
        return __awaiter(this, void 0, void 0, function* () {
            let result = tryOrPropogate(() => executeTask(this.query, this.origin, this.index));
            if (!result.successful) {
                renderErrorPre(this.container, "Dataview: " + result.error);
            }
            else if (result.value.tasks.size == 0 && this.settings.warnOnEmptyResult) {
                renderErrorPre(this.container, "Query returned 0 results.");
            }
            else {
                yield renderFileTasks(this.container, result.value.tasks);
                // TODO: Merge this into this renderer.
                this.addChild(this.taskView = new TaskViewLifecycle(this.vault, this.container));
            }
        });
    }
}
/** Renders inline query results. */
class DataviewInlineRenderer extends obsidian.MarkdownRenderChild {
    constructor(field, fieldText, container, target, index, origin, settings) {
        super(container);
        this.field = field;
        this.fieldText = fieldText;
        this.container = container;
        this.target = target;
        this.index = index;
        this.origin = origin;
        this.settings = settings;
    }
    onload() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.render();
            onIndexChange(this.index, this.settings.refreshInterval, this, () => __awaiter(this, void 0, void 0, function* () {
                var _a;
                (_a = this.errorbox) === null || _a === void 0 ? void 0 : _a.remove();
                yield this.render();
            }));
        });
    }
    render() {
        return __awaiter(this, void 0, void 0, function* () {
            let result = tryOrPropogate(() => executeInline(this.field, this.origin, this.index));
            if (!result.successful) {
                this.errorbox = this.container.createEl('div');
                renderErrorPre(this.errorbox, "Dataview (for inline query '" + this.fieldText + "'): " + result.error);
            }
            else {
                let temp = document.createElement("span");
                yield renderValue(result.value, temp, this.origin, this, this.settings.renderNullAs, false);
                this.target.replaceWith(temp);
            }
        });
    }
}
class DataviewJSRenderer extends obsidian.MarkdownRenderChild {
    constructor(script, container, app, index, origin, settings) {
        super(container);
        this.script = script;
        this.container = container;
        this.app = app;
        this.index = index;
        this.origin = origin;
        this.settings = settings;
    }
    onload() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.render();
            onIndexChange(this.index, this.settings.refreshInterval, this, () => __awaiter(this, void 0, void 0, function* () {
                this.container.innerHTML = "";
                yield this.render();
            }));
        });
    }
    render() {
        return __awaiter(this, void 0, void 0, function* () {
            if (!this.settings.enableDataviewJs) {
                this.containerEl.innerHTML = "";
                renderErrorPre(this.container, "Dataview JS queries are disabled.");
                return;
            }
            // Assume that the code is javascript, and try to eval it.
            try {
                evalInContext(DataviewJSRenderer.PREAMBLE + this.script, makeApiContext(this.index, this, this.app, this.settings, this.container, this.origin));
            }
            catch (e) {
                this.containerEl.innerHTML = "";
                renderErrorPre(this.container, "Evaluation Error: " + e.stack);
            }
        });
    }
}
DataviewJSRenderer.PREAMBLE = "const dataview = this;const dv = this;";
/** Inline JS renderer accessible using '=$' by default. */
class DataviewInlineJSRenderer extends obsidian.MarkdownRenderChild {
    constructor(script, container, target, app, index, origin, settings) {
        super(container);
        this.script = script;
        this.container = container;
        this.target = target;
        this.app = app;
        this.index = index;
        this.origin = origin;
        this.settings = settings;
    }
    onload() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.render();
            onIndexChange(this.index, this.settings.refreshInterval, this, () => __awaiter(this, void 0, void 0, function* () {
                var _a;
                (_a = this.errorbox) === null || _a === void 0 ? void 0 : _a.remove();
                yield this.render();
            }));
        });
    }
    render() {
        return __awaiter(this, void 0, void 0, function* () {
            if (!this.settings.enableDataviewJs) {
                let temp = document.createElement("span");
                temp.innerText = "<disabled>";
                this.target.replaceWith(temp);
                this.target = temp;
                return;
            }
            // Assume that the code is javascript, and try to eval it.
            try {
                let temp = document.createElement("span");
                let result = evalInContext(DataviewInlineJSRenderer.PREAMBLE + this.script, makeApiContext(this.index, this, this.app, this.settings, temp, this.origin));
                this.target.replaceWith(temp);
                this.target = temp;
                if (result === undefined)
                    return;
                renderValue(result, temp, this.origin, this, this.settings.renderNullAs, false);
            }
            catch (e) {
                this.errorbox = this.container.createEl('div');
                renderErrorPre(this.errorbox, "Dataview (for inline JS query '" + this.script + "'): " + e);
            }
        });
    }
}
DataviewInlineJSRenderer.PREAMBLE = "const dataview = this;const dv=this;";
function onIndexChange(index, interval, component, action) {
    let lastReload = index.revision;
    component.registerInterval(window.setInterval(() => {
        // If the index revision has changed recently, then queue a reload.
        if (lastReload != index.revision) {
            action();
            lastReload = index.revision;
        }
    }, interval));
}

module.exports = DataviewPlugin;