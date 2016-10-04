This is a demo project for Webpack issue - https://github.com/webpack/webpack/issues/3088

To demonstrate this issue, please clone this project and then run the following command
```
$ npm install
$ npm run watch
```

In the demo page, if you see that error message, the bug has happened.

The issue is caused by a circular importing and exporting as follows.

```
// the main.js will load the modules as the same as the following steps.
__webpack_require__(1);
--> __webpack_require__(3);
----> __webpack_require__(0);
-------> __webpack_require__(6);
----------> class Normalizer
----------> __webpack_require__(1);
----------> __webpack_require__(4);
------------> __webpack_require__(5);
------------> class AB
----> AA class (this AA will be missed in __webpack_require__(0))
--> __webpack_require__(2);
-----> __webpack_require__(7);
-----> __webpack_require__(0); (only contains AB, not AA)
// error happened
```