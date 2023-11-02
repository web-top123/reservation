(self["webpackChunk"] = self["webpackChunk"] || []).push([["pages"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/contain/admin/auth/Login.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/contain/admin/auth/Login.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var D_xampp_htdocs_airline_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectSpread2 */ "./node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.mjs");

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  page: {
    title: "Admin Login",
    meta: [{
      name: "description",
      content: ""
    }]
  },
  data: function data() {
    return {
      model: {
        email: '',
        password: '',
        rememberMe: false
      },
      authError: null,
      isAuthError: false,
      isSubmitting: false
    };
  },
  computed: (0,D_xampp_htdocs_airline_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__.default)({}, (0,vuex__WEBPACK_IMPORTED_MODULE_1__.mapGetters)(['currentRole'])),
  methods: {
    onSubmit: function onSubmit() {
      var _this = this;

      // this will be called only after form is valid. You can do api call here to login
      // Reset the authError if it existed.
      this.authError = null;
      this.isSubmitting = true;
      return this.$store.dispatch("adminLogin", {
        email: this.model.email,
        password: this.model.password
      }).then(function (res) {
        // console.log(this.currentRole)
        if (_this.currentRole == 'Admin') {
          _this.$router.push({
            name: "Dashboard"
          });
        } else {
          _this.$router.push({
            name: "AdminLogin"
          });
        }

        _this.isAuthError = false;
        _this.isSubmitting = false;
      })["catch"](function (error) {
        _this.authError = error ? error : "";
        _this.isAuthError = true;
        _this.isSubmitting = false;
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/contain/admin/auth/Register.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/contain/admin/auth/Register.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
// import flatPicker from "vue-flatpickr-component";
// import "flatpickr/dist/flatpickr.css";
/* harmony default export */ __webpack_exports__["default"] = ({
  page: {
    title: "Register",
    meta: [{
      name: "description",
      content: ""
    }]
  },
  components: {},
  data: function data() {
    return {
      model: {
        first_name: '',
        last_name: '',
        email: '',
        password: '',
        agree: false
      },
      regError: null,
      isRegisterError: false,
      registerSuccess: false
    };
  },
  methods: {
    onSubmit: function onSubmit() {
      var _this = this;

      // this will be called only after form is valid. You can do an api call here to register users
      // Reset the regError if it existed.
      this.regError = null;
      return this.$store.dispatch("register", {
        first_name: this.model.first_name,
        last_name: this.model.last_name,
        email: this.model.email,
        password: this.model.password,
        password_confirmation: this.model.password
      }).then(function (res, status) {
        _this.isRegisterError = false;
        _this.registerSuccess = true;

        if (_this.registerSuccess) {
          _this.$router.push({
            name: "AdminLogin"
          });
        }
      })["catch"](function (error) {
        _this.regError = error ? error : "";
        _this.isRegisterError = true;
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/contain/checkin/auth/Login.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/contain/checkin/auth/Login.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var D_xampp_htdocs_airline_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectSpread2 */ "./node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.mjs");

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  page: {
    title: "Login",
    meta: [{
      name: "description",
      content: ""
    }]
  },
  data: function data() {
    return {
      model: {
        last_name: "",
        reference: ""
      },
      authError: null,
      isAuthError: false,
      isSubmitting: false
    };
  },
  computed: (0,D_xampp_htdocs_airline_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__.default)({}, (0,vuex__WEBPACK_IMPORTED_MODULE_1__.mapGetters)(["currentPassenger"])),
  methods: {
    onSubmit: function onSubmit() {
      var _this = this;

      // this will be called only after form is valid. You can do api call here to login
      // Reset the authError if it existed.
      this.authError = null;
      this.isSubmitting = true;
      return this.$store.dispatch("login", {
        last_name: this.model.last_name,
        reference: this.model.reference
      }).then(function (res) {
        // console.log(this.currentPassenger)
        if (_this.currentPassenger.role == "Passenger") {
          //this.$router.push({ name: "Login" });
          _this.$router.push({
            name: "Booking"
          });
        } else {
          _this.$router.push({
            name: "Login"
          });
        }

        _this.isAuthError = false;
        _this.isSubmitting = false;
      })["catch"](function (error) {
        // console.log(error)
        _this.authError = error ? error : "";
        _this.isAuthError = true;
        _this.isSubmitting = false;
      });
    }
  },
  created: function created() {
    this.model.reference = this.$route.query.ref;
  }
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/contain/checkin/auth/Login.vue?vue&type=style&index=0&lang=css&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/contain/checkin/auth/Login.vue?vue&type=style&index=0&lang=css& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n@media (max-width: 1008px) {\n.step1 {\r\n    display: block;\n}\n.step2 {\r\n    display: block;\n}\n.step3 {\r\n    display: block;\n}\n.step4 {\r\n    display: none;\n}\n.step5 {\r\n    display: none;\n}\n.step6 {\r\n    display: none;\n}\n}\r\n", ""]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/contain/checkin/auth/Login.vue?vue&type=style&index=0&lang=css&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/contain/checkin/auth/Login.vue?vue&type=style&index=0&lang=css& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src/index.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Login.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/contain/checkin/auth/Login.vue?vue&type=style&index=0&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ __webpack_exports__["default"] = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./resources/js/contain/admin/auth/Login.vue":
/*!***************************************************!*\
  !*** ./resources/js/contain/admin/auth/Login.vue ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Login_vue_vue_type_template_id_4f7eba8a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Login.vue?vue&type=template&id=4f7eba8a& */ "./resources/js/contain/admin/auth/Login.vue?vue&type=template&id=4f7eba8a&");
/* harmony import */ var _Login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Login.vue?vue&type=script&lang=js& */ "./resources/js/contain/admin/auth/Login.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _Login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _Login_vue_vue_type_template_id_4f7eba8a___WEBPACK_IMPORTED_MODULE_0__.render,
  _Login_vue_vue_type_template_id_4f7eba8a___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/contain/admin/auth/Login.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/contain/admin/auth/Register.vue":
/*!******************************************************!*\
  !*** ./resources/js/contain/admin/auth/Register.vue ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Register_vue_vue_type_template_id_480a3841___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Register.vue?vue&type=template&id=480a3841& */ "./resources/js/contain/admin/auth/Register.vue?vue&type=template&id=480a3841&");
/* harmony import */ var _Register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Register.vue?vue&type=script&lang=js& */ "./resources/js/contain/admin/auth/Register.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _Register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _Register_vue_vue_type_template_id_480a3841___WEBPACK_IMPORTED_MODULE_0__.render,
  _Register_vue_vue_type_template_id_480a3841___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/contain/admin/auth/Register.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/contain/checkin/auth/Login.vue":
/*!*****************************************************!*\
  !*** ./resources/js/contain/checkin/auth/Login.vue ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Login_vue_vue_type_template_id_36d031dd___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Login.vue?vue&type=template&id=36d031dd& */ "./resources/js/contain/checkin/auth/Login.vue?vue&type=template&id=36d031dd&");
/* harmony import */ var _Login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Login.vue?vue&type=script&lang=js& */ "./resources/js/contain/checkin/auth/Login.vue?vue&type=script&lang=js&");
/* harmony import */ var _Login_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Login.vue?vue&type=style&index=0&lang=css& */ "./resources/js/contain/checkin/auth/Login.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__.default)(
  _Login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _Login_vue_vue_type_template_id_36d031dd___WEBPACK_IMPORTED_MODULE_0__.render,
  _Login_vue_vue_type_template_id_36d031dd___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/contain/checkin/auth/Login.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/contain/admin/auth/Login.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./resources/js/contain/admin/auth/Login.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Login.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/contain/admin/auth/Login.vue?vue&type=script&lang=js&");
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/contain/admin/auth/Register.vue?vue&type=script&lang=js&":
/*!*******************************************************************************!*\
  !*** ./resources/js/contain/admin/auth/Register.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Register.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/contain/admin/auth/Register.vue?vue&type=script&lang=js&");
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/contain/checkin/auth/Login.vue?vue&type=script&lang=js&":
/*!******************************************************************************!*\
  !*** ./resources/js/contain/checkin/auth/Login.vue?vue&type=script&lang=js& ***!
  \******************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Login.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/contain/checkin/auth/Login.vue?vue&type=script&lang=js&");
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/contain/checkin/auth/Login.vue?vue&type=style&index=0&lang=css&":
/*!**************************************************************************************!*\
  !*** ./resources/js/contain/checkin/auth/Login.vue?vue&type=style&index=0&lang=css& ***!
  \**************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader/dist/cjs.js!../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src/index.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Login.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/contain/checkin/auth/Login.vue?vue&type=style&index=0&lang=css&");


/***/ }),

/***/ "./resources/js/contain/admin/auth/Login.vue?vue&type=template&id=4f7eba8a&":
/*!**********************************************************************************!*\
  !*** ./resources/js/contain/admin/auth/Login.vue?vue&type=template&id=4f7eba8a& ***!
  \**********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_template_id_4f7eba8a___WEBPACK_IMPORTED_MODULE_0__.render; },
/* harmony export */   "staticRenderFns": function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_template_id_4f7eba8a___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns; }
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_template_id_4f7eba8a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Login.vue?vue&type=template&id=4f7eba8a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/contain/admin/auth/Login.vue?vue&type=template&id=4f7eba8a&");


/***/ }),

/***/ "./resources/js/contain/admin/auth/Register.vue?vue&type=template&id=480a3841&":
/*!*************************************************************************************!*\
  !*** ./resources/js/contain/admin/auth/Register.vue?vue&type=template&id=480a3841& ***!
  \*************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_template_id_480a3841___WEBPACK_IMPORTED_MODULE_0__.render; },
/* harmony export */   "staticRenderFns": function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_template_id_480a3841___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns; }
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_template_id_480a3841___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Register.vue?vue&type=template&id=480a3841& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/contain/admin/auth/Register.vue?vue&type=template&id=480a3841&");


/***/ }),

/***/ "./resources/js/contain/checkin/auth/Login.vue?vue&type=template&id=36d031dd&":
/*!************************************************************************************!*\
  !*** ./resources/js/contain/checkin/auth/Login.vue?vue&type=template&id=36d031dd& ***!
  \************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_template_id_36d031dd___WEBPACK_IMPORTED_MODULE_0__.render; },
/* harmony export */   "staticRenderFns": function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_template_id_36d031dd___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns; }
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_template_id_36d031dd___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Login.vue?vue&type=template&id=36d031dd& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/contain/checkin/auth/Login.vue?vue&type=template&id=36d031dd&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/contain/admin/auth/Login.vue?vue&type=template&id=4f7eba8a&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/contain/admin/auth/Login.vue?vue&type=template&id=4f7eba8a& ***!
  \*************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": function() { return /* binding */ render; },
/* harmony export */   "staticRenderFns": function() { return /* binding */ staticRenderFns; }
/* harmony export */ });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c(
        "div",
        { staticClass: "header bg-gradient-success py-6 py-lg-6 pt-lg-7" },
        [
          _c("b-container", [
            _c(
              "div",
              { staticClass: "header-body text-center mb-7" },
              [
                _c(
                  "b-row",
                  { staticClass: "justify-content-center" },
                  [
                    _c(
                      "b-col",
                      {
                        staticClass: "px-5",
                        attrs: { xl: "5", lg: "6", md: "8" }
                      },
                      [
                        _c("h1", { staticClass: "text-white" }, [
                          _vm._v("Welcome!")
                        ])
                      ]
                    )
                  ],
                  1
                )
              ],
              1
            )
          ]),
          _vm._v(" "),
          _c(
            "div",
            {
              staticClass:
                "separator separator-bottom separator-skew zindex-100"
            },
            [
              _c(
                "svg",
                {
                  attrs: {
                    x: "0",
                    y: "0",
                    viewBox: "0 0 2560 100",
                    preserveAspectRatio: "none",
                    version: "1.1",
                    xmlns: "http://www.w3.org/2000/svg"
                  }
                },
                [
                  _c("polygon", {
                    staticClass: "fill-default",
                    attrs: { points: "2560 0 2560 100 0 100" }
                  })
                ]
              )
            ]
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "b-container",
        { staticClass: "mt--8 pb-6" },
        [
          _c(
            "b-row",
            { staticClass: "justify-content-center" },
            [
              _c(
                "b-col",
                { attrs: { lg: "5", md: "7" } },
                [
                  _c(
                    "b-card",
                    {
                      staticClass: "bg-secondary border-0 mb-0",
                      attrs: { "no-body": "" }
                    },
                    [
                      _c(
                        "b-card-body",
                        { staticClass: "px-lg-5 py-lg-5" },
                        [
                          _c(
                            "div",
                            { staticClass: "text-center text-muted mb-4" },
                            [
                              _c("small", [
                                _vm._v("Or sign in with credentials")
                              ])
                            ]
                          ),
                          _vm._v(" "),
                          _vm.isAuthError
                            ? _c(
                                "base-alert",
                                { attrs: { dismissible: "", type: "danger" } },
                                [
                                  _c("strong", [_vm._v("Failed!")]),
                                  _vm._v(
                                    " " +
                                      _vm._s(_vm.authError) +
                                      "\n            "
                                  )
                                ]
                              )
                            : _vm._e(),
                          _vm._v(" "),
                          _c("validation-observer", {
                            ref: "formValidator",
                            scopedSlots: _vm._u([
                              {
                                key: "default",
                                fn: function(ref) {
                                  var handleSubmit = ref.handleSubmit
                                  return [
                                    _c(
                                      "b-form",
                                      {
                                        attrs: { role: "form" },
                                        on: {
                                          submit: function($event) {
                                            $event.preventDefault()
                                            return handleSubmit(_vm.onSubmit)
                                          }
                                        }
                                      },
                                      [
                                        _c("base-input", {
                                          staticClass: "mb-3",
                                          attrs: {
                                            alternative: "",
                                            name: "Email",
                                            rules: {
                                              required: true,
                                              email: true
                                            },
                                            "prepend-icon": "ni ni-email-83",
                                            placeholder: "Email"
                                          },
                                          model: {
                                            value: _vm.model.email,
                                            callback: function($$v) {
                                              _vm.$set(_vm.model, "email", $$v)
                                            },
                                            expression: "model.email"
                                          }
                                        }),
                                        _vm._v(" "),
                                        _c("base-input", {
                                          staticClass: "mb-3",
                                          attrs: {
                                            alternative: "",
                                            name: "Password",
                                            rules: { required: true, min: 6 },
                                            "prepend-icon":
                                              "ni ni-lock-circle-open",
                                            type: "password",
                                            placeholder: "Password"
                                          },
                                          model: {
                                            value: _vm.model.password,
                                            callback: function($$v) {
                                              _vm.$set(
                                                _vm.model,
                                                "password",
                                                $$v
                                              )
                                            },
                                            expression: "model.password"
                                          }
                                        }),
                                        _vm._v(" "),
                                        _c(
                                          "b-form-checkbox",
                                          {
                                            model: {
                                              value: _vm.model.rememberMe,
                                              callback: function($$v) {
                                                _vm.$set(
                                                  _vm.model,
                                                  "rememberMe",
                                                  $$v
                                                )
                                              },
                                              expression: "model.rememberMe"
                                            }
                                          },
                                          [_vm._v("Remember me")]
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "div",
                                          { staticClass: "text-center" },
                                          [
                                            _c(
                                              "b-button",
                                              {
                                                staticClass: "mt-4",
                                                attrs: {
                                                  type: "submit",
                                                  variant: "primary",
                                                  disabled: _vm.isSubmitting
                                                }
                                              },
                                              [
                                                _vm.isSubmitting
                                                  ? _c("i", {
                                                      staticClass:
                                                        "fa fa-spinner fa-spin"
                                                    })
                                                  : _vm._e(),
                                                _vm._v(
                                                  " Sign in\n                  "
                                                )
                                              ]
                                            )
                                          ],
                                          1
                                        )
                                      ],
                                      1
                                    )
                                  ]
                                }
                              }
                            ])
                          })
                        ],
                        1
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-row",
                    { staticClass: "mt-3" },
                    [
                      _c("b-col", { attrs: { cols: "6" } }),
                      _vm._v(" "),
                      _c(
                        "b-col",
                        { staticClass: "text-right", attrs: { cols: "6" } },
                        [
                          _c(
                            "router-link",
                            {
                              staticClass: "text-light",
                              attrs: { to: "/admin/register" }
                            },
                            [_c("small", [_vm._v("Create new account")])]
                          )
                        ],
                        1
                      )
                    ],
                    1
                  )
                ],
                1
              )
            ],
            1
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/contain/admin/auth/Register.vue?vue&type=template&id=480a3841&":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/contain/admin/auth/Register.vue?vue&type=template&id=480a3841& ***!
  \****************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": function() { return /* binding */ render; },
/* harmony export */   "staticRenderFns": function() { return /* binding */ staticRenderFns; }
/* harmony export */ });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c(
        "div",
        { staticClass: "header bg-gradient-success py-5 py-lg-6 pt-lg-7" },
        [
          _c("b-container", { staticClass: "container" }, [
            _c(
              "div",
              { staticClass: "header-body text-center mb-7" },
              [
                _c(
                  "b-row",
                  { staticClass: "justify-content-center" },
                  [
                    _c(
                      "b-col",
                      {
                        staticClass: "px-5",
                        attrs: { xl: "5", lg: "6", md: "8" }
                      },
                      [
                        _c("h1", { staticClass: "text-white" }, [
                          _vm._v("Create an account")
                        ])
                      ]
                    )
                  ],
                  1
                )
              ],
              1
            )
          ]),
          _vm._v(" "),
          _c(
            "div",
            {
              staticClass:
                "separator separator-bottom separator-skew zindex-100"
            },
            [
              _c(
                "svg",
                {
                  attrs: {
                    x: "0",
                    y: "0",
                    viewBox: "0 0 2560 100",
                    preserveAspectRatio: "none",
                    version: "1.1",
                    xmlns: "http://www.w3.org/2000/svg"
                  }
                },
                [
                  _c("polygon", {
                    staticClass: "fill-default",
                    attrs: { points: "2560 0 2560 100 0 100" }
                  })
                ]
              )
            ]
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "b-container",
        { staticClass: "mt--8 pb-6" },
        [
          _c(
            "b-row",
            { staticClass: "justify-content-center" },
            [
              _c(
                "b-col",
                { attrs: { lg: "6", md: "8" } },
                [
                  _c(
                    "b-card",
                    {
                      staticClass: "bg-secondary border-0 mb-0",
                      attrs: { "no-body": "" }
                    },
                    [
                      _c(
                        "b-card-body",
                        { staticClass: "px-lg-5 py-lg-5" },
                        [
                          _c(
                            "div",
                            { staticClass: "text-center text-muted mb-4" },
                            [
                              _c("small", [
                                _vm._v("Or sign up with credentials")
                              ])
                            ]
                          ),
                          _vm._v(" "),
                          _vm.isRegisterError
                            ? _c(
                                "base-alert",
                                { attrs: { dismissible: "", type: "danger" } },
                                [
                                  _c("strong", [_vm._v("Failed!")]),
                                  _vm._v(
                                    " " +
                                      _vm._s(_vm.regError) +
                                      "\n            "
                                  )
                                ]
                              )
                            : _vm._e(),
                          _vm._v(" "),
                          _c("validation-observer", {
                            ref: "formValidator",
                            scopedSlots: _vm._u([
                              {
                                key: "default",
                                fn: function(ref) {
                                  var handleSubmit = ref.handleSubmit
                                  return [
                                    _c(
                                      "b-form",
                                      {
                                        attrs: { role: "form" },
                                        on: {
                                          submit: function($event) {
                                            $event.preventDefault()
                                            return handleSubmit(_vm.onSubmit)
                                          }
                                        }
                                      },
                                      [
                                        _c("base-input", {
                                          staticClass: "mb-3",
                                          attrs: {
                                            alternative: "",
                                            "prepend-icon": "ni ni-hat-3",
                                            placeholder: "First Name",
                                            name: "FistName",
                                            rules: { required: true }
                                          },
                                          model: {
                                            value: _vm.model.first_name,
                                            callback: function($$v) {
                                              _vm.$set(
                                                _vm.model,
                                                "first_name",
                                                $$v
                                              )
                                            },
                                            expression: "model.first_name"
                                          }
                                        }),
                                        _vm._v(" "),
                                        _c("base-input", {
                                          staticClass: "mb-3",
                                          attrs: {
                                            alternative: "",
                                            "prepend-icon": "ni ni-hat-3",
                                            placeholder: "Last Name",
                                            name: "LastName",
                                            rules: { required: true }
                                          },
                                          model: {
                                            value: _vm.model.last_name,
                                            callback: function($$v) {
                                              _vm.$set(
                                                _vm.model,
                                                "last_name",
                                                $$v
                                              )
                                            },
                                            expression: "model.last_name"
                                          }
                                        }),
                                        _vm._v(" "),
                                        _c("base-input", {
                                          staticClass: "mb-3",
                                          attrs: {
                                            alternative: "",
                                            "prepend-icon": "ni ni-email-83",
                                            placeholder: "Email",
                                            name: "Email",
                                            rules: {
                                              required: true,
                                              email: true
                                            }
                                          },
                                          model: {
                                            value: _vm.model.email,
                                            callback: function($$v) {
                                              _vm.$set(_vm.model, "email", $$v)
                                            },
                                            expression: "model.email"
                                          }
                                        }),
                                        _vm._v(" "),
                                        _c("base-input", {
                                          staticClass: "mb-3",
                                          attrs: {
                                            alternative: "",
                                            "prepend-icon":
                                              "ni ni-lock-circle-open",
                                            placeholder: "password",
                                            type: "password",
                                            name: "Password",
                                            rules: { required: true, min: 6 }
                                          },
                                          model: {
                                            value: _vm.model.password,
                                            callback: function($$v) {
                                              _vm.$set(
                                                _vm.model,
                                                "password",
                                                $$v
                                              )
                                            },
                                            expression: "model.password"
                                          }
                                        }),
                                        _vm._v(" "),
                                        _c(
                                          "div",
                                          {
                                            staticClass:
                                              "text-muted font-italic"
                                          },
                                          [
                                            _c("small", [
                                              _vm._v("password strength: "),
                                              _c(
                                                "span",
                                                {
                                                  staticClass:
                                                    "text-success font-weight-700"
                                                },
                                                [_vm._v("strong")]
                                              )
                                            ])
                                          ]
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "b-row",
                                          { staticClass: "my-3" },
                                          [
                                            _c(
                                              "b-col",
                                              { attrs: { cols: "12" } },
                                              [
                                                _c(
                                                  "base-input",
                                                  {
                                                    attrs: {
                                                      rules: {
                                                        required: {
                                                          allowFalse: false
                                                        }
                                                      },
                                                      name: "Privacy Policy"
                                                    }
                                                  },
                                                  [
                                                    _c(
                                                      "b-form-checkbox",
                                                      {
                                                        model: {
                                                          value:
                                                            _vm.model.agree,
                                                          callback: function(
                                                            $$v
                                                          ) {
                                                            _vm.$set(
                                                              _vm.model,
                                                              "agree",
                                                              $$v
                                                            )
                                                          },
                                                          expression:
                                                            "model.agree"
                                                        }
                                                      },
                                                      [
                                                        _c(
                                                          "span",
                                                          {
                                                            staticClass:
                                                              "text-muted"
                                                          },
                                                          [
                                                            _vm._v(
                                                              "I agree with the "
                                                            ),
                                                            _c(
                                                              "a",
                                                              {
                                                                attrs: {
                                                                  href: "#"
                                                                }
                                                              },
                                                              [
                                                                _vm._v(
                                                                  "Privacy Policy"
                                                                )
                                                              ]
                                                            )
                                                          ]
                                                        )
                                                      ]
                                                    )
                                                  ],
                                                  1
                                                )
                                              ],
                                              1
                                            )
                                          ],
                                          1
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "div",
                                          { staticClass: "text-center" },
                                          [
                                            _c(
                                              "b-button",
                                              {
                                                staticClass: "mt-1",
                                                attrs: {
                                                  type: "submit",
                                                  variant: "primary"
                                                }
                                              },
                                              [_vm._v("Create account")]
                                            )
                                          ],
                                          1
                                        )
                                      ],
                                      1
                                    )
                                  ]
                                }
                              }
                            ])
                          })
                        ],
                        1
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-row",
                    { staticClass: "mt-3" },
                    [
                      _c("b-col", { attrs: { cols: "6" } }, [
                        _c("span", { staticClass: "text-light" }, [
                          _c("small", [_vm._v("Already have an account?")])
                        ])
                      ]),
                      _vm._v(" "),
                      _c(
                        "b-col",
                        { staticClass: "text-right", attrs: { cols: "6" } },
                        [
                          _c(
                            "router-link",
                            {
                              staticClass: "text-light",
                              attrs: { to: "/admin/login" }
                            },
                            [_c("small", [_vm._v("Sign in")])]
                          )
                        ],
                        1
                      )
                    ],
                    1
                  )
                ],
                1
              )
            ],
            1
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/contain/checkin/auth/Login.vue?vue&type=template&id=36d031dd&":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/contain/checkin/auth/Login.vue?vue&type=template&id=36d031dd& ***!
  \***************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": function() { return /* binding */ render; },
/* harmony export */   "staticRenderFns": function() { return /* binding */ staticRenderFns; }
/* harmony export */ });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c("base-nav", { attrs: { type: "light", transparent: true } }, [
        _c("section", { staticClass: "th-bg-color", attrs: { id: "books" } }, [
          _c("div", { staticClass: "book-slider container-fluid" }, [
            _c("div", { staticClass: "d-flex" }, [
              _c("div", { staticClass: "book book-active" }, [
                _c("h5", [_vm._v("Step 1")]),
                _vm._v(" "),
                _c("span", [_vm._v("Main info")])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "book" }, [
                _c("h5", [_vm._v("Step 2")]),
                _vm._v(" "),
                _c("span", [_vm._v("Booking info")])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "book" }, [
                _c("h5", [_vm._v("Step 3")]),
                _vm._v(" "),
                _c("span", [_vm._v("Declaration")])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "book" }, [
                _c("h5", [_vm._v("Step 4")]),
                _vm._v(" "),
                _c("span", [_vm._v("Dangerous goods")])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "book" }, [
                _c("h5", [_vm._v("Step 5")]),
                _vm._v(" "),
                _c("span", [_vm._v("Seat map")])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "book" }, [
                _c("h5", [_vm._v("Step 6")]),
                _vm._v(" "),
                _c("span", [_vm._v("Confirmation")])
              ])
            ])
          ])
        ])
      ]),
      _vm._v(" "),
      _c(
        "section",
        { staticClass: "section-gray-bg pr-0", attrs: { id: "check-in" } },
        [
          _c("div", { staticClass: "container-fluid" }, [
            _c("div", { staticClass: "row" }, [
              _c(
                "div",
                { staticClass: "col-md-4 check-form-content" },
                [
                  _c("H1", { staticClass: "fah" }, [
                    _vm._v("Ready to check in?")
                  ]),
                  _vm._v(" "),
                  _c("p", { staticClass: "check-form-detail" }, [
                    _vm._v(
                      "\n            Check in and get your boarding pass from 24 hours before your\n            flight.\n          "
                    )
                  ]),
                  _vm._v(" "),
                  _vm.isAuthError
                    ? _c(
                        "base-alert",
                        { attrs: { dismissible: "", type: "danger" } },
                        [
                          _c("strong", [_vm._v("Failed!")]),
                          _vm._v(" " + _vm._s(_vm.authError) + "\n          ")
                        ]
                      )
                    : _vm._e(),
                  _vm._v(" "),
                  _c("validation-observer", {
                    ref: "formValidator",
                    scopedSlots: _vm._u([
                      {
                        key: "default",
                        fn: function(ref) {
                          var handleSubmit = ref.handleSubmit
                          return [
                            _c("div", { staticClass: "check-form-field" }, [
                              _c(
                                "form",
                                {
                                  staticClass: "check-form form-field",
                                  attrs: { action: "" },
                                  on: {
                                    submit: function($event) {
                                      $event.preventDefault()
                                      return handleSubmit(_vm.onSubmit)
                                    }
                                  }
                                },
                                [
                                  _c("div", { staticClass: "form-group" }, [
                                    _c(
                                      "div",
                                      { staticClass: "check-form-label" },
                                      [_vm._v("Booking reference")]
                                    ),
                                    _vm._v(" "),
                                    _c("input", {
                                      directives: [
                                        {
                                          name: "model",
                                          rawName: "v-model",
                                          value: _vm.model.reference,
                                          expression: "model.reference"
                                        }
                                      ],
                                      staticClass: "form-control",
                                      attrs: {
                                        type: "text",
                                        name: "book_reference",
                                        id: "book_reference"
                                      },
                                      domProps: { value: _vm.model.reference },
                                      on: {
                                        input: function($event) {
                                          if ($event.target.composing) {
                                            return
                                          }
                                          _vm.$set(
                                            _vm.model,
                                            "reference",
                                            $event.target.value
                                          )
                                        }
                                      }
                                    })
                                  ]),
                                  _vm._v(" "),
                                  _c("div", { staticClass: "form-group" }, [
                                    _c(
                                      "div",
                                      { staticClass: "check-form-label" },
                                      [_vm._v("Family name")]
                                    ),
                                    _vm._v(" "),
                                    _c("input", {
                                      directives: [
                                        {
                                          name: "model",
                                          rawName: "v-model",
                                          value: _vm.model.last_name,
                                          expression: "model.last_name"
                                        }
                                      ],
                                      staticClass: "form-control",
                                      attrs: {
                                        type: "text",
                                        name: "family_name",
                                        id: "family_name"
                                      },
                                      domProps: { value: _vm.model.last_name },
                                      on: {
                                        input: function($event) {
                                          if ($event.target.composing) {
                                            return
                                          }
                                          _vm.$set(
                                            _vm.model,
                                            "last_name",
                                            $event.target.value
                                          )
                                        }
                                      }
                                    })
                                  ]),
                                  _vm._v(" "),
                                  _c(
                                    "button",
                                    {
                                      staticClass:
                                        "th-bg-color btn-update-primary",
                                      attrs: {
                                        type: "submit",
                                        disabled: _vm.isSubmitting
                                      }
                                    },
                                    [
                                      _vm._v(
                                        "\n                  CONFIRM\n                "
                                      )
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _vm.isSubmitting
                                    ? _c("i", {
                                        staticClass: "fa fa-spinner fa-spin"
                                      })
                                    : _vm._e()
                                ]
                              )
                            ])
                          ]
                        }
                      }
                    ])
                  })
                ],
                1
              ),
              _vm._v(" "),
              _vm._m(0)
            ])
          ])
        ]
      )
    ],
    1
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-md-8 check-form-img-over" }, [
      _c("div", { staticClass: "check-form-img-wrapper" }, [
        _c("img", {
          staticClass: "check-form-img",
          attrs: { src: "img/theme/check_in.webp" }
        })
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vuex/dist/vuex.mjs":
/*!*****************************************!*\
  !*** ./node_modules/vuex/dist/vuex.mjs ***!
  \*****************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* reexport default export from named module */ _dist_vuex_common_js__WEBPACK_IMPORTED_MODULE_0__; },
/* harmony export */   "Store": function() { return /* binding */ Store; },
/* harmony export */   "install": function() { return /* binding */ install; },
/* harmony export */   "version": function() { return /* binding */ version; },
/* harmony export */   "mapState": function() { return /* binding */ mapState; },
/* harmony export */   "mapMutations": function() { return /* binding */ mapMutations; },
/* harmony export */   "mapGetters": function() { return /* binding */ mapGetters; },
/* harmony export */   "mapActions": function() { return /* binding */ mapActions; },
/* harmony export */   "createNamespacedHelpers": function() { return /* binding */ createNamespacedHelpers; },
/* harmony export */   "createLogger": function() { return /* binding */ createLogger; }
/* harmony export */ });
/* harmony import */ var _dist_vuex_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../dist/vuex.common.js */ "./node_modules/vuex/dist/vuex.common.js");


const {
  Store,
  install,
  version,
  mapState,
  mapMutations,
  mapGetters,
  mapActions,
  createNamespacedHelpers,
  createLogger
} = _dist_vuex_common_js__WEBPACK_IMPORTED_MODULE_0__




/***/ })

}]);