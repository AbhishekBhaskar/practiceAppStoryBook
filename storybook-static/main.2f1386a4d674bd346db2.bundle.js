(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{170:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_exports__.default='<p>Name is {{name}}</p>\n<button (click)="myevent.next()">Click me!</button>\n'},171:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_exports__.default=""},172:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_exports__.default='\r\n\x3c!-- <input type="text" [value]="testForm.name" readonly="true" /> --\x3e\r\n\r\n<form [formGroup]=\'testForm\'>\r\n    <label for="name">Enter name:</label><br>\r\n    <input type="text" formControlName="name" /><br>\r\n    <label for="email">Enter email:</label><br>\r\n    <input type="text" formControlName="email" /><br>\r\n    <button type="submit" (click)="sendData()">Submit</button><br>\r\n</form>'},173:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_exports__.default="button{\r\n    background-color: aqua;\r\n    height: 28px;\r\n    width: auto;\r\n    border-radius: 4px;\r\n    cursor: pointer;\r\n}"},243:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return ComponentAComponent}));var _a,_b,tslib__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),_angular_core__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(1),_angular_forms__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(96);let ComponentAComponent=class ComponentAComponent{constructor(fb){this.fb=fb,this.testForm=this.fb.group({name:[""],email:[""]}),this.onSubmit=new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter}sendData(){this.onSubmit.emit(this.testForm)}ngOnInit(){}};tslib__WEBPACK_IMPORTED_MODULE_0__.b([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__.Output)(),tslib__WEBPACK_IMPORTED_MODULE_0__.d("design:type","function"==typeof(_a=void 0!==_angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter&&_angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter)?_a:Object)],ComponentAComponent.prototype,"onSubmit",void 0),ComponentAComponent=tslib__WEBPACK_IMPORTED_MODULE_0__.b([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__.Component)({selector:"app-component-a",template:(__webpack_require__(172).default||__webpack_require__(172)).length?__webpack_require__(172).default||__webpack_require__(172):"",styles:[(__webpack_require__(173).default||__webpack_require__(173)).length?__webpack_require__(173).default||__webpack_require__(173):""]}),tslib__WEBPACK_IMPORTED_MODULE_0__.d("design:paramtypes",["function"==typeof(_b=void 0!==_angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormBuilder&&_angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormBuilder)?_b:Object])],ComponentAComponent)},342:function(module,exports){function webpackEmptyAsyncContext(req){return Promise.resolve().then((function(){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}))}webpackEmptyAsyncContext.keys=function(){return[]},webpackEmptyAsyncContext.resolve=webpackEmptyAsyncContext,module.exports=webpackEmptyAsyncContext,webpackEmptyAsyncContext.id=342},349:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return ComponentBComponent}));var _a,_b,tslib__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),_angular_core__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(1);let ComponentBComponent=class ComponentBComponent{constructor(){this.myevent=new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter}ngOnInit(){}};tslib__WEBPACK_IMPORTED_MODULE_0__.b([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__.Input)(),tslib__WEBPACK_IMPORTED_MODULE_0__.d("design:type","function"==typeof(_a="undefined"!=typeof String&&String)?_a:Object)],ComponentBComponent.prototype,"name",void 0),tslib__WEBPACK_IMPORTED_MODULE_0__.b([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__.Output)(),tslib__WEBPACK_IMPORTED_MODULE_0__.d("design:type","function"==typeof(_b=void 0!==_angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter&&_angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter)?_b:Object)],ComponentBComponent.prototype,"myevent",void 0),ComponentBComponent=tslib__WEBPACK_IMPORTED_MODULE_0__.b([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__.Component)({selector:"app-component-b",template:(__webpack_require__(170).default||__webpack_require__(170)).length?__webpack_require__(170).default||__webpack_require__(170):"",styles:[(__webpack_require__(171).default||__webpack_require__(171)).length?__webpack_require__(171).default||__webpack_require__(171):""]}),tslib__WEBPACK_IMPORTED_MODULE_0__.d("design:paramtypes",[])],ComponentBComponent)},350:function(module,exports,__webpack_require__){__webpack_require__(351),__webpack_require__(462),__webpack_require__(463),module.exports=__webpack_require__(703)},372:function(module,exports){},463:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var _storybook_angular__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(138);Object(_storybook_angular__WEBPACK_IMPORTED_MODULE_0__.configure)(__webpack_require__(681),module)}.call(this,__webpack_require__(285)(module))},681:function(module,exports,__webpack_require__){var map={"./0-Welcome.stories.ts":682,"./1-Button.stories.ts":685,"./component-a.stories.ts":702};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=681},682:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"toStorybook",(function(){return toStorybook}));var _storybook_angular_demo__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(97);__webpack_exports__.default={title:"Welcome"};const toStorybook=()=>({component:_storybook_angular_demo__WEBPACK_IMPORTED_MODULE_0__.Welcome,props:{}});toStorybook.story={name:"to Storybook"}},685:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"text",(function(){return text})),__webpack_require__.d(__webpack_exports__,"emoji",(function(){return emoji})),__webpack_require__.d(__webpack_exports__,"withSomeEmojiAndAction",(function(){return withSomeEmojiAndAction})),__webpack_require__.d(__webpack_exports__,"buttonWithLinkToAnotherStory",(function(){return buttonWithLinkToAnotherStory}));var _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(192),_storybook_addon_links__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(348),_storybook_angular_demo__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(97);__webpack_exports__.default={title:"Button"};const text=()=>({component:_storybook_angular_demo__WEBPACK_IMPORTED_MODULE_2__.Button,props:{text:"Hello Button"}}),emoji=()=>({component:_storybook_angular_demo__WEBPACK_IMPORTED_MODULE_2__.Button,props:{text:"😀 😎 👍 💯"}});emoji.story={parameters:{notes:"My notes on a button with emojis"}};const withSomeEmojiAndAction=()=>({component:_storybook_angular_demo__WEBPACK_IMPORTED_MODULE_2__.Button,props:{text:"😀 😎 👍 💯",onClick:Object(_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_0__.action)("This was clicked OMG")}});withSomeEmojiAndAction.story={name:"with some emoji and action",parameters:{notes:"My notes on a button with emojis"}};const buttonWithLinkToAnotherStory=()=>({component:_storybook_angular_demo__WEBPACK_IMPORTED_MODULE_2__.Button,props:{text:"Go to Welcome Story",onClick:Object(_storybook_addon_links__WEBPACK_IMPORTED_MODULE_1__.linkTo)("Welcome")}});buttonWithLinkToAnotherStory.story={name:"button with link to another story"}},702:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var _app_component_b_component_b_component__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(349),_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(192),_app_component_a_component_a_component__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(243),_storybook_angular__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(138),_angular_forms__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(96);Object(_storybook_angular__WEBPACK_IMPORTED_MODULE_3__.storiesOf)("Component A",module).addDecorator(Object(_storybook_angular__WEBPACK_IMPORTED_MODULE_3__.moduleMetadata)({declarations:[_app_component_a_component_a_component__WEBPACK_IMPORTED_MODULE_2__.a],imports:[_angular_forms__WEBPACK_IMPORTED_MODULE_4__.ReactiveFormsModule],providers:[_angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder]})).add("forms",()=>({component:_app_component_a_component_a_component__WEBPACK_IMPORTED_MODULE_2__.a,props:{onSubmit:$event=>{console.log($event.value)}}})).add("component B",()=>({component:_app_component_b_component_b_component__WEBPACK_IMPORTED_MODULE_0__.a,props:{name:"Abhishek",myevent:Object(_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_1__.action)("Hello Abhishek!!")}}))}.call(this,__webpack_require__(285)(module))},703:function(module,exports,__webpack_require__){var content=__webpack_require__(704);"string"==typeof content&&(content=[[module.i,content,""]]);var options={insert:"head",singleton:!1};__webpack_require__(705)(content,options);content.locals&&(module.exports=content.locals)},704:function(module,exports){module.exports=[[module.i,"/* You can add global styles to this file, and also import other style files */\n","",""]]}},[[350,1,2]]]);
//# sourceMappingURL=main.2f1386a4d674bd346db2.bundle.js.map