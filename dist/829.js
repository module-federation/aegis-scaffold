exports.id = 829;
exports.ids = [829];
exports.modules = {

/***/ "./src/adapters/index.js":
/*!*******************************!*\
  !*** ./src/adapters/index.js ***!
  \*******************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements:  */
/***/ (() => {

// export adapter functions

/***/ }),

/***/ "./src/domain/index.js":
/*!*****************************!*\
  !*** ./src/domain/index.js ***!
  \*****************************/
/*! namespace exports */
/*! export models [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "models": () => /* binding */ models
/* harmony export */ });
/* harmony import */ var _validations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./validations */ "./src/domain/validations.js");
Object(function webpackMissingModule() { var e = new Error("Cannot find module './bind-adapters'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services */ "./src/services/index.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_services__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _adapters__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../adapters */ "./src/adapters/index.js");
/* harmony import */ var _adapters__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_adapters__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _domain_ports__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../domain/ports */ "./src/domain/ports.js");
/* harmony import */ var _domain_ports__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_domain_ports__WEBPACK_IMPORTED_MODULE_4__);
Object(function webpackMissingModule() { var e = new Error("Cannot find module '../config'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());


/**
 * @typedef {string} eventName
 */

/**
 * @typedef  Model
 * @property {string} _Symbol_id - immutable/private uuid
 * @property {string} _Symbol_modelName - immutable/private name
 * @property {string} _Symbol_createTime - immutable/private createTime
 * @property {onUpdate} _Symbol_onUpdate - immutable/private update function
 * @property {onDelete} _Symbol_onDelete
 * @property {function(Object)} update - use this function to update model
 * specify changes in an object
 * @property {function()} toJSON - de/serialization logic
 * @property {function(eventName,function(eventName,Model):void)} addListener listen for domain events
 * @property {function(eventName,Model):Promise<void>} emit emit domain event
 * @property {function(function():Promise<Model>):Promise<Model>} [port] - when a
 * port is configured, the framework generates a function to invoke it. When data
 * arrives on the port, depending on the implementation, the port's adapter invokes
 * the callback specified in the port configuration, or as an argument to the port
 * function. The callback returns an updated Model, and control is returned to the
 * caller. Optionally, an event is fired to trigger the next port function to run
 * @property {function():Promise<any>} [relation] - when you configure a relation,
 * the framework generates a function that your code can call to run the query
 * @property {function(*):*} [command] - the framework will call any model method
 * you specify when passed as a parameter or query in an API call.
 */

/**
 * @callback onUpdate called to handle model updates
 * @param {Model} model
 * @param {Object} changes
 * @returns {Model | Error} updated model or throw
 */

/**
 * @callback onDelete
 * @param {Model} model
 * @returns {Model | Error} updated model or throw
 */

/**
 * @callback validate called to handle model updates
 * @param {Model} model
 * @param {Object} changes
 * @returns {Model | Error} updated model or throw
 */

/**
 * @callback onLoad
 * @param {Model} savedModel rehydrated model
 * @returns {Model | Error} updated model or throw
 */

/**
 * @typedef {string} service - name of the service object to inject in adapter
 * @typedef {number} timeout - call to adapter will timeout after `timeout` milliseconds
 *
 * @typedef {{
 *  [x: string]: {
 *    service: service,
 *    timeout?: timeout,
 *    callback?: function({model: Model})
 *    errorCallback?: function({model: Model, port: string, error:Error}),
 *    timeoutCallback?: function({model: Model, port: string}),
 *    consumesEvent?:string,
 *    producesEvent?:string,
 *    type?:'inbound'|'outbound',
 *    disabled?: boolean,
 *    adapter?: string,
 *    circuitBreaker?: thresholds
 *  }
 * }} ports - input/output ports for the domain
 */

/**
 * @typedef {{
 *  [x:string]: {
 *    errorRate:number
 *    callVolume:number,
 *    intervalMs:number,
 *    fallbackFn:function()
 *  },
 * }} thresholds - thresholds for different errors
 */

/**
 * @typedef {{
 *  [x: string]: {
 *    modelName:string,
 *    type:"oneToMany"|"oneToOne"|"manyToOne",
 *    foreignKey:any,
 *  }
 * }} relations - define related domain entities
 *
 * @typedef {Array<function({
 *  eventName:string,
 *  eventType:string,
 *  eventTime:string,
 *  modelName:string,
 *  model:Model
 * }):Promise<void>>} eventHandler - callbacks invoked to handle domain and
 * application events
 */

/**
 *
 * @typedef {string} key
 * @typedef {*} value
 */

/**
 * @typedef {{
 *  on: "serialize" | "deserialize",
 *  key: string | RegExp | "*" | (function(key,value):boolean)
 *  type: "string" | "object" | "number" | "function" | "any" | (function(key,value):boolean)
 *  value(key, value):value
 * }} serializer
 */
/**
 * @typedef {{
 *  [x:string]: {
 *    allow:string|function(*):boolean|Array<string|function(*):boolean>
 *    deny:string|function(*):boolean|Array<string|function(*):boolean>
 *    type:"role"|"relation"|"command"
 *    desc?:string
 *  }
 * }} accessControlList
 */
/**
 * @typedef {{
 *  [x: string]: {
 *    command:string|function(Model):Promise<any>,
 *    acl:accessControlList[]
 *  }
 * }} commands - configure functions to execute when specified in a
 * URL parameter or query of the auto-generate REST API
 */
/**
 * @callback controller
 * @param {Request} req
 * @param {Response} res
 */

/**
 * @typedef {{
 *  [path: string]: {
 *    get?: controller,
 *    post?: controller,
 *    patch?: controller,
 *    delete?:controller
 *   }
 * }} endpoints
 */

/**
 * @callback modelSpecFactoryFn
 * @param {object} dependencies
 * @returns {function(...args):Readonly<object>}
 */

/**
 * @typedef {object} ModelSpecification Specify domain model properties and functions
 * @property {string} modelName name of model (case-insenstive)
 * @property {string} endpoint URI reference (e.g. plural of `modelName` noun)
 * @property {modelSpecFactoryFn} factory returns factory function that creates the model instance
 * @property {object} [dependencies] injected into the model for inverted dependency/control
 * @property {Array<import("./validations").functionalMixin>} [mixins] - use functional mixins
 * to compose the object from common domain logic, like input validation.
 * @property {onUpdate} [onUpdate] - Function called to handle update requests. Called
 * before save.
 * @property {onDelete} [onDelete] - Function called before deletion.
 * @property {validate} [validate] - called to validate model updates
 * @property {ports} [ports] - input/output ports for the domain
 * @property {eventHandler[]} [eventHandlers] - callbacks invoked to handle CRUD events
 * @property {serializer[]} [serializers] - use for custom de/serialization of the model
 * when reading or writing to storage or network
 * @property {relations} [relations] - create related models or query in aggregate
 * @property {commands} [commands] - define functions to execute when specified in a
 * URL parameter or query of the auto-generated REST API
 * @property {accessControlList} [accessControlList] - configure authorization
 * @property {endpoints} [routes] - additional custom API endpoints - specify inbound port
 * @property {{factory:import("../adapters/datasources/datasource-mongodb"),url:string,credentials?:string}} [datasource] - custom datasource
 * for this model. If not set, the default set by the server is used.
 */

/**
 * @callback addModel
 * @param {{ searchTerm1, searchTerm2, searchTermN }} input
 * @returns {Promise<Model>}
 */

/**
 * @callback editModel
 * @param {{ id:string, changes:object }} input
 * @returns { Promise<Model> }
 */

/**
 * @callback findModel
 * @param {{ id:string, query:object }} input
 * @returns { Promise<Model> }
 */

/**
 * @callback findRelatedModels
 * @param {{ query:object, relation:string }} input
 * @returns { Promise<{Model,[Model]}> }
 */

/**
 * @callback listModels
 * @param {{ query:object }} input e.g. { searchTerm1 : 'val', ...etc }
 * @returns { [Promise<Model>] }
 */

/**
 * @callback executeCommand
 * @param {{ id:string }} input
 * @returns { Model }
 */

/**
 * @typedef DomainPortAPI
 * @property { addModel } addModel
 * @property { editModel } editModel
 * @property { listModels } listModels
 * @property { findModel } findModel
 * @property { findRelatedModels } findModel
 * @property { removeModel } removeModel
 * @property { executeCommand } executeCommand
 */
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }



// Service dependencies



// Models


/**
 *
 * @param {ModelSpecification} spec
 */
function validateSpec(spec) {
  var missing = ['modelName', 'endpoint', 'factory'].filter(function (key) {
    return !spec[key];
  });
  if ((missing === null || missing === void 0 ? void 0 : missing.length) > 0) {
    throw new Error("missing properties: ".concat(missing, ", spec: ").concat(Object.entries(spec)));
  }
}

/**
 * @param {ModelSpecification} spec
 * @param {*} dependencies - services injected
 */
function makeModel(spec) {
  validateSpec(spec);
  var mixins = spec.mixins || [];
  var dependencies = spec.dependencies || {};
  return _objectSpread(_objectSpread({}, spec), {}, {
    mixins: mixins.concat(_validations__WEBPACK_IMPORTED_MODULE_0__.default),
    dependencies: _objectSpread(_objectSpread({}, dependencies), Object(function webpackMissingModule() { var e = new Error("Cannot find module './bind-adapters'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(spec.ports, _adapters__WEBPACK_IMPORTED_MODULE_3__, _services__WEBPACK_IMPORTED_MODULE_2__))
  });
}
var models = Object.values(Object(function webpackMissingModule() { var e = new Error("Cannot find module '../config'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())).map(function (spec) {
  return makeModel(spec);
});

/***/ }),

/***/ "./src/domain/ports.js":
/*!*****************************!*\
  !*** ./src/domain/ports.js ***!
  \*****************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements:  */
/***/ (() => {

// export port functions
// See https://github.com/module-federation/aegis-scaffold for examples

/***/ }),

/***/ "./src/domain/validations.js":
/*!***********************************!*\
  !*** ./src/domain/validations.js ***!
  \***********************************/
/*! namespace exports */
/*! export RegEx [provided] [no usage info] [missing usage info prevents renaming] */
/*! export allowProperties [provided] [no usage info] [missing usage info prevents renaming] */
/*! export checkFormat [provided] [no usage info] [missing usage info prevents renaming] */
/*! export createMethod [provided] [no usage info] [missing usage info prevents renaming] */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! export encryptPersonalInfo [provided] [no usage info] [missing usage info prevents renaming] */
/*! export encryptProperties [provided] [no usage info] [missing usage info prevents renaming] */
/*! export execMethod [provided] [no usage info] [missing usage info prevents renaming] */
/*! export freezeProperties [provided] [no usage info] [missing usage info prevents renaming] */
/*! export hashPasswords [provided] [no usage info] [missing usage info prevents renaming] */
/*! export invokePort [provided] [no usage info] [missing usage info prevents renaming] */
/*! export mixinSets [provided] [no usage info] [missing usage info prevents renaming] */
/*! export mixinType [provided] [no usage info] [missing usage info prevents renaming] */
/*! export prevmodel [provided] [no usage info] [missing usage info prevents renaming] */
/*! export processUpdate [provided] [no usage info] [missing usage info prevents renaming] */
/*! export requireProperties [provided] [no usage info] [missing usage info prevents renaming] */
/*! export updateMixins [provided] [no usage info] [missing usage info prevents renaming] */
/*! export updateProperties [provided] [no usage info] [missing usage info prevents renaming] */
/*! export validateModel [provided] [no usage info] [missing usage info prevents renaming] */
/*! export validateProperties [provided] [no usage info] [missing usage info prevents renaming] */
/*! export validations [provided] [no usage info] [missing usage info prevents renaming] */
/*! export withValidFormat [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "prevmodel": () => /* binding */ prevmodel,
/* harmony export */   "validations": () => /* binding */ validations,
/* harmony export */   "mixinType": () => /* binding */ mixinType,
/* harmony export */   "mixinSets": () => /* binding */ mixinSets,
/* harmony export */   "processUpdate": () => /* binding */ processUpdate,
/* harmony export */   "updateMixins": () => /* binding */ updateMixins,
/* harmony export */   "validateModel": () => /* binding */ validateModel,
/* harmony export */   "encryptProperties": () => /* binding */ encryptProperties,
/* harmony export */   "freezeProperties": () => /* binding */ freezeProperties,
/* harmony export */   "requireProperties": () => /* binding */ requireProperties,
/* harmony export */   "hashPasswords": () => /* binding */ hashPasswords,
/* harmony export */   "allowProperties": () => /* binding */ allowProperties,
/* harmony export */   "RegEx": () => /* binding */ RegEx,
/* harmony export */   "validateProperties": () => /* binding */ validateProperties,
/* harmony export */   "updateProperties": () => /* binding */ updateProperties,
/* harmony export */   "invokePort": () => /* binding */ invokePort,
/* harmony export */   "execMethod": () => /* binding */ execMethod,
/* harmony export */   "createMethod": () => /* binding */ createMethod,
/* harmony export */   "withValidFormat": () => /* binding */ withValidFormat,
/* harmony export */   "checkFormat": () => /* binding */ checkFormat,
/* harmony export */   "encryptPersonalInfo": () => /* binding */ encryptPersonalInfo,
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
Object(function webpackMissingModule() { var e = new Error("Cannot find module '../domain/utils'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! util */ "util");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_1__);


/**
 * Sample validation logic that is built onklkk ModelSpecification.mixins
 */
var _mixinSets;
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }



/**
 * Functional mixin created by `functionalMixinFactory`
 * @callback functionalMixin
 * @param {Object} o Object to compose
 * @returns {Object} Composed object
 */

/**
 * Functional mixin factory - partial application - returns mixin function
 * @callback functionalMixinFactory
 * @param {*} mixinParams params for mixin function
 * @returns {functionalMixin}
 */

/**
 * @typedef {import("./index").Model} Model
 */

/**
 * Private key to access previous version of the model
 */
var prevmodel = Symbol('prevModel');
/**
 * private key to access validation config
 */
var validations = Symbol('validations');
/**
 * Process mixin pre or post update
 */
var mixinType = {
  pre: Symbol('pre'),
  post: Symbol('post')
};

/**
 * Stored mixins - use private symbol as key to prevent overwrite
 */
var mixinSets = (_mixinSets = {}, _defineProperty(_mixinSets, mixinType.pre, Symbol('preUpdateMixins')), _defineProperty(_mixinSets, mixinType.post, Symbol('postUpdateMixins')), _mixinSets);

/**
 * Set of pre mixins
 */
var premixins = mixinSets[mixinType.pre];
/**
 * Set of post mixins
 */
var postmixins = mixinSets[mixinType.post];

/**
 * Apply any pre and post mixins and return the result.
 * @deprecated
 * @param {*} model - current model
 * @param {*} changes - object containing changes
 * @returns {import('.').Model} updated model
 */
function processUpdate(model, changes) {
  changes[prevmodel] = JSON.parse(JSON.stringify(model)); // keep history

  var updates = model[premixins] ? Object(function webpackMissingModule() { var e = new Error("Cannot find module '../domain/utils'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(void 0, _toConsumableArray(model[premixins].values()))(changes) : changes;
  var updated = _objectSpread(_objectSpread({}, model), updates);
  return model[postmixins] ? Object(function webpackMissingModule() { var e = new Error("Cannot find module '../domain/utils'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(void 0, _toConsumableArray(model[postmixins].values()))(updated) : updated;
}

/**
 * @deprecated
 * Store mixins for execution on update
 * @param {mixinType} type
 * run before changes are applied or afterward
 * @param {*} o  Object containing changes to apply (pre)
 * or new object after changes have been applied (post)
 * @param {string} name `Function.name`
 * @param {functionalMixin} cb mixin function
 */
function updateMixins(type, o, name, cb) {
  if (!mixinSets[type]) {
    throw new Error('invalid mixin type');
  }
  var mixinSet = o[mixinSets[type]] || new Map();
  if (!mixinSet.has(name)) {
    mixinSet.set(name, cb());
    return _objectSpread(_objectSpread({}, o), {}, _defineProperty({}, mixinSets[type], mixinSet));
  }
  return o;
}

/**
 * bitmask for identifying events
 */
var eventMask = {
  update: 1,
  //  0001 Update
  create: 1 << 1,
  //  0010 Create
  onload: 1 << 2 //  0100 Load
};

function handleUpdateEvent(model, updates, event) {
  var isUpdate = eventMask.update & event;
  var decrypted = isUpdate ? model.decrypt() : {};
  return _objectSpread(_objectSpread(_objectSpread({}, model), updates), decrypted);
}
function isObject(p) {
  return p != null && _typeof(p) === 'object';
}
function containsUpdates(model, changes, event) {
  try {
    if (!changes) return false;
    if (eventMask.update & event) {
      var changeList = Object.keys(changes);
      if (changeList.length < 1) return false;
      if (changeList.every(function (k) {
        return model[k] && util__WEBPACK_IMPORTED_MODULE_1___default().isDeepStrictEqual(changes[k], model[k]);
      })) {
        return false;
      }
    }
    return true;
  } catch (error) {
    console.error({
      fn: containsUpdates.name,
      error: error
    });
  }
  return false;
}

/**
 * Run validation functions enabled for a given event.
 * @param {Model} model - the composed object
 * @param {*} changes - object containing changes
 * @param {Number} event - Indicates what event is occuring:
 * 1st bit turned on means update, 2nd bit create, 3rd load,
 * see {@link eventMask}.
 */
function validateModel(model, changes, event) {
  if (!model || !changes || !event) return {};
  // if there are no changes, and the event is an update, return
  if (!containsUpdates(model, changes, event)) {
    return model;
  }

  // keep a history of the last saved model
  var input = _objectSpread(_objectSpread({}, changes), {}, _defineProperty({}, prevmodel, JSON.parse(JSON.stringify(model || {}))));

  // Validate just the input data
  var updates = model[validations].filter(function (v) {
    return v.input & event;
  }).sort(function (a, b) {
    return a.order - b.order;
  }).map(function (v) {
    return model[v.name].apply(input);
  }).reduce(function (p, c) {
    return _objectSpread(_objectSpread({}, p), c);
  }, input);
  var updated = _objectSpread(_objectSpread({}, model), updates);

  // Validate the updated model
  return updated[validations].filter(function (v) {
    return v.output & event;
  }).sort(function (a, b) {
    return a.order - b.order;
  }).map(function (v) {
    return updated[v.name]();
  }).reduce(function (p, c) {
    return _objectSpread(_objectSpread({}, p), c);
  }, updated);
}

/**
 * Enable validation to run on specific events.
 * @param {boolean} onUpdate - whether or not to run the validation on update.
 * Defaults to `true`.
 * @param {boolean} onCreate - whether or not to run the validation on create.
 * Defaults to `true`.
 * @param {boolean} onLoad - whether or not to run the validation when
 * the object is being loaded into memory after being deserialized.
 * Defaults to `false`.
 */
function enableEvent(_ref) {
  var _ref$onUpdate = _ref.onUpdate,
    onUpdate = _ref$onUpdate === void 0 ? true : _ref$onUpdate,
    _ref$onCreate = _ref.onCreate,
    onCreate = _ref$onCreate === void 0 ? true : _ref$onCreate,
    _ref$onLoad = _ref.onLoad,
    onLoad = _ref$onLoad === void 0 ? false : _ref$onLoad;
  var enabled = 0;
  if (onUpdate) {
    enabled |= eventMask.update;
  }
  if (onCreate) {
    enabled |= eventMask.create;
  }
  if (onLoad) {
    enabled |= eventMask.onload;
  }
  return enabled;
}

/**
 * Specify when validations run.
 */
var enableValidation = function () {
  return {
    /**
     * Validation runs on update.
     */
    onUpdate: enableEvent({
      onUpdate: true,
      onCreate: false,
      onLoad: false
    }),
    /**
     * Validation runs on create.
     */
    onCreate: enableEvent({
      onUpdate: false,
      onCreate: true,
      onLoad: false
    }),
    /**
     * Validation runs on both create and update.
     */
    onCreateAndUpdate: enableEvent({
      onUpdate: true,
      onCreate: true,
      onLoad: false
    }),
    /**
     * Validation runs on load.
     */
    onLoad: enableEvent({
      onUpdate: false,
      onCreate: false,
      onLoad: true
    }),
    /**
     * Validation runs on load and create.
     */
    onLoadAndCreate: enableEvent({
      onUpdate: false,
      onCreate: true,
      onLoad: true
    }),
    /**
     * Validation runs on load and create.
     */
    onLoadAndUpdate: enableEvent({
      onUpdate: true,
      onCreate: false,
      onLoad: true
    }),
    /**
     * Validation runs on all events.
     */
    onAll: enableEvent({
      onUpdate: true,
      onCreate: true,
      onLoad: true
    })
  };
}();

/**
 * Add a validation function to be called for a given event.
 * @typedef {object} validationConfig
 * @property {*} o - the composed object
 * @property {string} name - name of function to run
 * @property {number} input - "input" validations run against
 * the data passed by the caller in the request. Use `enableValidation`
 * to provide a value for this param.
 * @property {number} output - "output" functions run against the
 * model after the changes have been applied.
 * @property {number} order - order in which validation runs
 * @param {validationConfig} param0
 */
function addValidation(_ref2) {
  var model = _ref2.model,
    name = _ref2.name,
    _ref2$input = _ref2.input,
    input = _ref2$input === void 0 ? 0 : _ref2$input,
    _ref2$output = _ref2.output,
    output = _ref2$output === void 0 ? 0 : _ref2$output,
    _ref2$order = _ref2.order,
    order = _ref2$order === void 0 ? 50 : _ref2$order;
  var config = model[validations] || [];
  if (config.some(function (v) {
    return v.name === name;
  })) {
    console.warn('duplicate validation name', name);
    return model;
  }
  return _objectSpread(_objectSpread({}, model), {}, _defineProperty({
    validateModel: validateModel
  }, validations, [].concat(_toConsumableArray(config), [{
    name: name,
    input: input,
    output: output,
    order: order
  }])));
}

/**
 * Resolve keys:
 * If the value includes an array, flatten it, then for each element:
 * If the value is "*", return all keys of the object.
 * If the value is a function, execute it to get a dynamic key or key list.
 * If the value is a RegExp, test it to get dynamic key list.
 * If any of the above produce an array of keys, flatten it.
 * @param {*} o - Object to compose
 * @param  {Array<string | function(*):string>} propKeys -
 * Names (or functions that return names) of properties
 * @returns {string[]} list of (resolved) property keys
 */
function parseKeys(o) {
  for (var _len = arguments.length, propKeys = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    propKeys[_key - 1] = arguments[_key];
  }
  if (!propKeys || !o) return null;
  var keys = propKeys.flat().map(function (k) {
    if (typeof k === 'function') return k(o);
    if (k instanceof RegExp) return Object.keys(o).filter(function (key) {
      return k.test(key);
    });
    if (k === '*') return Object.keys(o);
    return k;
  });
  return keys.flat();
}

/**
 * Encrypt properties. Properties remain encrypted indefinitely, and
 * must be explicitly decrypted as needed, e.g. reading values in memory,
 * from storage, serializing and sending to an external system.
 * @param  {Array<string | function(*):string>} propKeys -
 * Names (or functions that return names) of properties to encrypt
 * @returns {functionalMixin} mixin function
 */
var encryptProperties = function encryptProperties() {
  for (var _len2 = arguments.length, propKeys = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    propKeys[_key2] = arguments[_key2];
  }
  return function (o) {
    var keys = parseKeys.apply(void 0, [o].concat(propKeys));
    var encryptProps = function encryptProps(obj) {
      return keys.map(function (key) {
        return obj[key] ? _defineProperty({}, key, Object(function webpackMissingModule() { var e = new Error("Cannot find module '../domain/utils'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(obj[key])) : {};
      }).reduce(function (p, c) {
        return _objectSpread(_objectSpread({}, p), c);
      });
    };
    return _objectSpread(_objectSpread({
      encryptProperties: function encryptProperties() {
        return encryptProps(this);
      }
    }, addValidation({
      model: o,
      name: encryptProperties.name,
      input: enableValidation.onUpdate,
      output: enableValidation.onCreate,
      order: 100
    })), {}, {
      decrypt: function decrypt() {
        var _this = this;
        return keys.map(function (key) {
          return _this[key] ? _defineProperty({}, key, Object(function webpackMissingModule() { var e = new Error("Cannot find module '../domain/utils'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(_this[key])) : {};
        }).reduce(function (p, c) {
          return _objectSpread(_objectSpread({}, p), c);
        }, {});
      }
    });
  };
};

/**
 * Prevent properties from being modified.
 * Accepts a property name or a function that returns a property name.
 * @param  {Array<string | function(*):string | RegExp>} propKeys - names of properties to freeze
 */
var freezeProperties = function freezeProperties() {
  for (var _len3 = arguments.length, propKeys = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
    propKeys[_key3] = arguments[_key3];
  }
  return function (o) {
    var preventUpdates = function preventUpdates(obj) {
      var keys = parseKeys.apply(void 0, [obj].concat(propKeys));
      var mutations = Object.keys(obj).filter(function (key) {
        return keys.includes(key);
      });
      if ((mutations === null || mutations === void 0 ? void 0 : mutations.length) > 0) {
        throw new Error("cannot update readonly properties: ".concat(mutations));
      }
    };
    return _objectSpread({
      freezeProperties: function freezeProperties() {
        preventUpdates(this);
      }
    }, addValidation({
      model: o,
      name: freezeProperties.name,
      input: enableValidation.onUpdate,
      order: 20
    }));
  };
};

/**
 * Enforce required fields.
 * @param {Array<string | function(*):string | RegExp>} propKeys -
 * required property key names - can be a function or regex
 * that returns the property key names
 */
var requireProperties = function requireProperties() {
  for (var _len4 = arguments.length, propKeys = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
    propKeys[_key4] = arguments[_key4];
  }
  return function (o) {
    var keys = parseKeys.apply(void 0, [o].concat(propKeys));
    function requireProps(obj) {
      var missing = keys.filter(function (key) {
        return key && !obj[key];
      });
      if ((missing === null || missing === void 0 ? void 0 : missing.length) > 0) {
        throw new Error("missing required properties: ".concat(missing));
      }
    }
    return _objectSpread({
      requireProperties: function requireProperties() {
        requireProps(this);
      }
    }, addValidation({
      model: o,
      name: requireProperties.name,
      output: enableValidation.onCreateAndUpdate,
      order: 90
    }));
  };
};

/**
 * Hash passwords.
 * @param {*} hash hash algorithm
 * @param  {Array<string | function(*):string | RegExp>} propKeys name of password props
 */
var hashPasswords = function hashPasswords() {
  for (var _len5 = arguments.length, propKeys = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
    propKeys[_key5] = arguments[_key5];
  }
  return function (o) {
    var keys = parseKeys.apply(void 0, [o].concat(propKeys));
    function hashPwds(obj) {
      return keys.map(function (key) {
        return obj[key] ? _defineProperty({}, key, Object(function webpackMissingModule() { var e = new Error("Cannot find module '../domain/utils'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(obj[key])) : {};
      }).reduce(function (p, c) {
        return _objectSpread(_objectSpread({}, p), c);
      });
    }
    return _objectSpread({
      hashPasswords: function hashPasswords() {
        return hashPwds(this);
      }
    }, addValidation({
      model: o,
      name: hashPasswords.name,
      input: enableValidation.onUpdate,
      output: enableValidation.onCreate,
      order: 100
    }));
  };
};
var internalPropList = [];

/**
 * Reject unknown properties in user input. Allow only approved keys.
 * @param  {...any} propKeys
 */
var allowProperties = function allowProperties() {
  for (var _len6 = arguments.length, propKeys = new Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
    propKeys[_key6] = arguments[_key6];
  }
  return function (o) {
    function rejectUnknownProps() {
      var keys = parseKeys.apply(void 0, [o].concat(propKeys));
      var allowList = keys.concat(internalPropList);
      var unknownProps = Object.keys(o).filter(function (key) {
        return !allowList.includes(key);
      });
      if ((unknownProps === null || unknownProps === void 0 ? void 0 : unknownProps.length) > 0) {
        throw new Error("invalid properties: ".concat(unknownProps));
      }
    }
    return _objectSpread({
      rejectUnknownProperties: function rejectUnknownProperties() {
        return rejectUnknownProps(this);
      }
    }, addValidation({
      model: o,
      name: rejectUnknownProps.name,
      input: enableValidation.onUpdate,
      order: 10
    }));
  };
};

/**
 * Test regular expressions
 */
var RegEx = {
  email: /^(.+)@(.+){2,}\.(.+){2,}$/,
  ipv4Address: /^([01]?[0-9]?[0-9]|2[0-4][0-9]|25[0-5])\\.([01]?[0-9]?[0-9]|2[0-4][0-9]|25[0-5])\\.([01]?[0-9]?[0-9]|2[0-4][0-9]|25[0-5])\\.([01]?[0-9]?[0-9]|2[0-4][0-9]|25[0-5])$/,
  ipv6Address: /^((?:[0-9A-Fa-f]{1,4}))((?::[0-9A-Fa-f]{1,4}))*::((?:[0-9A-Fa-f]{1,4}))((?::[0-9A-Fa-f]{1,4}))*|((?:[0-9A-Fa-f]{1,4}))((?::[0-9A-Fa-f]{1,4})){7}$/,
  phone: /^[1-9]\d{2}-\d{3}-\d{4}/,
  creditCard: /^(?:4[0-9]{12}(?:[0-9]{3})?|[25][1-7][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$/,
  ssn: /^(?!666|000|9\\d{2})\\d{3}-(?!00)\\d{2}-(?!0{4})\\d{4}$/,
  /**
   * Allow caller to pass a keyword that refers to one of the regex above
   * @param {regexType} expr
   * @param {*} val
   */
  test: function test(expr, val) {
    var _expr = Object.keys(this).includes(expr) && this[expr] instanceof RegExp ? this[expr] : expr;
    return _expr.test(val);
  }
};

/**
 * @callback isValid
 * @param {Object} o - the property owner
 * @param {*} propVal - the property value
 * @returns {boolean} - true if valid
 *
 * @typedef {'email'|'phone'|'ipv4Address'|'ipv6Address'|'creditCard'|'ssn'|RegExp} regexType
 *
 * @typedef {{
 *  propKey:string,
 *  isValid?:isValid,
 *  values?:any[],
 *  regex?:regexType,
 *  maxlen?:number
 *  maxnum?:numbertp
 *  typeof?:string
 *  unique?:{ encrypted:boolean }
 * }} validation
 */

function evaluateUniqueness(v, o, propVal) {
  var compareVal = v.unique.encrypted ? Object(function webpackMissingModule() { var e = new Error("Cannot find module '../domain/utils'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(propVal) : propVal;
  return o.listSync(_defineProperty({}, v.propKey, compareVal)).length < 1;
}

/**
 * Run validation tests
 */
var Validator = {
  tests: {
    isValid: function isValid(v, o, propVal) {
      return v.isValid(o, propVal);
    },
    values: function values(v, o, propVal) {
      return v.values.includes(propVal);
    },
    regex: function regex(v, o, propVal) {
      return RegEx.test(v.regex, propVal);
    },
    "typeof": function _typeof(v, o, propVal) {
      return v["typeof"] === _typeof(propVal);
    },
    maxnum: function maxnum(v, o, propVal) {
      return v.maxnum + 1 > propVal;
    },
    maxlen: function maxlen(v, o, propVal) {
      return v.maxlen + 1 > propVal.length;
    },
    unique: function unique(v, o, propVal) {
      return evaluateUniqueness(v, o, propVal);
    }
  },
  /**
   * Returns true if tests pass.
   * @param {validation} v validation config
   * @param {Object} o object to compose
   * @param {*} propVal value of property to validate
   * @returns {boolean} true if tests pass
   */
  isValid: function isValid(v, o, propVal) {
    var _this2 = this;
    return Object.keys(this.tests).every(function (key) {
      if (v[key]) {
        // the test `key` is specified, run it
        return _this2.tests[key](v, o, propVal);
      }
      return true;
    });
  }
};

/**
 * Verify a property value is a member of a list,
 * is unique within a set of model instances,
 * is of a certain length, size or type,
 * matches a regular expression,
 * or satisfies a custom validation function.
 * @param {validation[]} validations
 */
var validateProperties = function validateProperties(validations) {
  return function (o) {
    function validate(obj) {
      var invalid = validations.filter(function (v) {
        var propVal = obj[v.propKey];
        if (!propVal) {
          return false;
        }
        return !Validator.isValid(v, obj, propVal);
      });
      if ((invalid === null || invalid === void 0 ? void 0 : invalid.length) > 0) {
        throw new Error("invalid value for ".concat(_toConsumableArray(invalid.map(function (v) {
          return v.propKey;
        }))));
      }
    }
    return _objectSpread({
      validateProperties: function validateProperties() {
        validate(this);
      }
    }, addValidation({
      model: o,
      name: validateProperties.name,
      input: enableValidation.onUpdate,
      output: enableValidation.onCreate,
      order: 50
    }));
  };
};

/**
 * @callback updaterFn
 * @param {Object} o
 * @param  {*} propVal
 * @returns {Object} object with updated properties
 *
 * @typedef {{
 * propKey: string,
 * update: updaterFn
 * }} updater
 */

/**
 * Respond to property updates by updating addtional (dependent) properties as needed.
 * @param {updater[]} updaters
 */
var updateProperties = function updateProperties(updaters) {
  return function (o) {
    function updateProps(obj) {
      var updates = updaters.filter(function (u) {
        return obj[u.propKey];
      });
      if ((updates === null || updates === void 0 ? void 0 : updates.length) > 0) {
        return updates.map(function (u) {
          return u.update(o, obj[u.propKey]);
        }).reduce(function (p, c) {
          return _objectSpread(_objectSpread({}, p), c);
        });
      }
    }
    return _objectSpread({
      updateProperties: function updateProperties() {
        return updateProps(this);
      }
    }, addValidation({
      model: o,
      name: updateProperties.name,
      output: enableValidation.onUpdate,
      order: 30
    }));
  };
};

/**
 * Set a validation that invokes a port. The port must be configured
 * in the `ModelSpecification`.
 * @param {string} fn - name of port (as it appears in the ModelSpec)
 * @param {boolean} onCreate - invoke on create
 * @param {boolean} onUpdate - invoke on update
 * @param  {...any} args - pass arguments
 */
var invokePort = function invokePort(fn, onCreate, onUpdate) {
  for (var _len7 = arguments.length, args = new Array(_len7 > 3 ? _len7 - 3 : 0), _key7 = 3; _key7 < _len7; _key7++) {
    args[_key7 - 3] = arguments[_key7];
  }
  return /*#__PURE__*/function () {
    var _ref6 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(o) {
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              return _context.abrupt("return", _objectSpread(_objectSpread({}, o), {}, {
                invokePort: function invokePort() {
                  console.log({
                    func: 'invokePort',
                    fn: fn,
                    args: args
                  });
                  return this[fn].apply(this, args).then(function (o) {
                    return o;
                  });
                }
              }, addValidation({
                model: o,
                name: 'invokePort',
                output: enableValidation.onUpdate,
                order: 85
              })));
            case 1:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));
    return function (_x) {
      return _ref6.apply(this, arguments);
    };
  }();
};

/**
 * Set a validation that calls a model method or provided function.
 * @param {string|function(Model, ...any):Promise<any>} fn - callback function
 * or name of method to executee
 * @param {boolean} onCreate - invoke on create
 * @param {boolean} onUpdate - invoke on update
 * @param  {...any} args - pass arguments to the method/function
 * @return {Model}
 */
var execMethod = function execMethod(fn, onCreate, onUpdate) {
  for (var _len8 = arguments.length, args = new Array(_len8 > 3 ? _len8 - 3 : 0), _key8 = 3; _key8 < _len8; _key8++) {
    args[_key8 - 3] = arguments[_key8];
  }
  return /*#__PURE__*/function () {
    var _ref7 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(o) {
      var functionType;
      return _regeneratorRuntime().wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              functionType = {
                "function": function _function(fn, obj) {
                  for (var _len9 = arguments.length, args = new Array(_len9 > 2 ? _len9 - 2 : 0), _key9 = 2; _key9 < _len9; _key9++) {
                    args[_key9 - 2] = arguments[_key9];
                  }
                  return fn.apply(void 0, [obj].concat(args)).then(function (o) {
                    return o;
                  });
                },
                string: function string(fn, obj) {
                  for (var _len10 = arguments.length, args = new Array(_len10 > 2 ? _len10 - 2 : 0), _key10 = 2; _key10 < _len10; _key10++) {
                    args[_key10 - 2] = arguments[_key10];
                  }
                  return obj[fn].apply(obj, args).then(function (o) {
                    return o;
                  });
                }
              };
              return _context3.abrupt("return", _objectSpread(_objectSpread({}, o), {}, {
                execMethod: function execMethod() {
                  var _this3 = this;
                  return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
                    var model;
                    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
                      while (1) {
                        switch (_context2.prev = _context2.next) {
                          case 0:
                            _context2.next = 2;
                            return functionType[_typeof(fn)].apply(functionType, [fn, _this3].concat(args));
                          case 2:
                            model = _context2.sent;
                            return _context2.abrupt("return", model);
                          case 4:
                          case "end":
                            return _context2.stop();
                        }
                      }
                    }, _callee2);
                  }))();
                }
              }, addValidation({
                model: o,
                name: 'execMethod',
                output: enableValidation.onUpdate,
                order: 40
              })));
            case 2:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }));
    return function (_x2) {
      return _ref7.apply(this, arguments);
    };
  }();
};

/**
 * Create a method on a model.
 * @param {*} fn
 * @param  {...any} args
 */
var createMethod = function createMethod(fn) {
  for (var _len11 = arguments.length, args = new Array(_len11 > 1 ? _len11 - 1 : 0), _key11 = 1; _key11 < _len11; _key11++) {
    args[_key11 - 1] = arguments[_key11];
  }
  return function (o) {
    return _objectSpread(_objectSpread({}, o), {}, _defineProperty({}, fn.name, function () {
      return fn.apply(void 0, args);
    }));
  };
};

/**
 * Check the value of the property before returning its key.
 * @param {*} propKey
 * @param {regexType} expr
 * @returns {function(any):any} dynamic property func
 */
var withValidFormat = function withValidFormat(propKey, expr) {
  return function (o) {
    if (o[propKey] && !RegEx.test(expr, o[propKey])) {
      throw new Error("invalid ".concat(propKey));
    }
    return propKey;
  };
};

/**
 *
 * @param {string} value
 * @param {regexType} expr
 */
var checkFormat = function checkFormat(value, expr) {
  if (value && !RegEx.test(expr, value)) {
    var x = expr instanceof RegExp ? value : expr;
    throw new Error("".concat(x, " invalid"));
  }
};

/**
 * Implement GDPR encryption requirement across models
 */
var encryptPersonalInfo = encryptProperties(/^last.*Name$|^surname$|^family.*Name$/i, /^shipping.*Address$/i, /^billing.*Address$/i, /^home.*Address$/i, /email|e-mail/i, /^phone$|^home.*phone$/i, /^mobile$|^mobile.*number$|^cell.*number$/i, /^credit.*Card/i, /^cvv$/i, /^ssn$|^socialSecurity/i, /^encrypted/i);

/**
 * Global mixins
 */
var GlobalMixins = [encryptPersonalInfo];
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GlobalMixins);

/***/ }),

/***/ "./src/services/index.js":
/*!*******************************!*\
  !*** ./src/services/index.js ***!
  \*******************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements:  */
/***/ (() => {

// export service classes / namespaces
// see https://github.com/module-federation/aegis-scaffold for examples

/***/ })

};
;
//# sourceMappingURL=829.js.map