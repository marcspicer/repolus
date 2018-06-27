webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/about/about.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/about/about.component.html":
/***/ (function(module, exports) {

module.exports = "      <!-- Main Starts Here  -->\n            <section id=\"main\" class=\"main about-page-main\">\n\n\n                <!-- Banner Starts Here  -->\n                <div class=\"banner about-page-banner\">\n                    <div class=\"container\">\n                        <!-- <div class=\"banner-image\">\n\n                            <img src=\"assets/images/logo-black-lg.png\" alt=\"Logo Large\">\n                        </div> -->\n                        <p class=\"banner-description\">REPOLUS is the resource for current New York City residents and people thinking to move to the Big Apple who want an insider perspective to the NYC life and in particular the Real Estate market. \n                        </p>\n\n                        <div class=\"person-details\">\n                            <div class=\"row\">\n                                <div class=\"col-md-12 col-sm-12\">\n                                    <div class=\"person-details-block\">\n                                        <div class=\"person-image\">\n                                            <img src=\"assets/images/img-thumbnail.png\" alt=\"\">\n                                        </div>\n                                        <div class=\"person-about\">\n                                            <h2 class=\"name\">PETER MICHAEL RIOLO</h2>\n                                            <h3 class=\"designation\">Founder</h3>\n                                        </div>\n                                        <div class=\"person-bio\">\n                                            <p>Editor in chief, Peter Michael Riolo, is a third-generation New York real estate professional. Peter and his family have deep roots in the industry and are well regarded for their long standing reputation of high integrity in service to the community. Peter currently runs a real estate brokerage team at Brown Harris Stevens located at 445 Park Avenue in Manhattan, and the Peter J. Riolo Real Estate company, which was started by his grandfather in the mid 1930’s, is located in Westchester County, New York. <br>\n\n                                            Peter’s real estate philosophy is a combination of old-world values of client service, coupled with state of the art contemporary technology. This website is an offshoot of Peter’s belief that by making his clients the best educated consumers, he can empower them to succeed in managing their real estate projects. Peter brings experience, passion, and problem solving strategies to every transaction, skillfully managing every facet of the deal. He is well-regarded for his empathy, his ability to rapidly assess and understand client needs, and his unremitting focus on results. <br>\n\n                                            Peter attended the Hackley School where he was a scholar athlete and was awarded second team All-American in Lacrosse. Later, he graduated from Trinity College with a major in International Relations and a minor in Italian Studies. He has spent considerable time working, travelling, and studying abroad. Before his career in Real Estate, he worked in equity brokerage on the floor of the NYSE.\n\n                                            </p>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                <!-- Banner Ends Here  -->\n            </section>\n            <section class=\"newsletter\">\n                <div class=\"container\">\n                    <h3>Subscribe to our <br>Newsletter</h3>\n                    <form action=\"\">\n                        <input type=\"text\" placeholder=\"Type your email here ...\">\n                        <button type=\"submit\" name=\"button\"><img src=\"assets/images/send.png\" alt=\"\"></button>\n                    </form>\n                </div>\n            </section>\n            <section class=\"contact\">\n                <div class=\"container\">\n                    <h3 class=\"section-title\">Contact us</h3>\n                    <div class=\"contact-blocks-outer\">\n                        <div class=\"row\">\n                            <div class=\"col-md-4 col-sm-4 \">\n                                <div class=\"contact-block\">\n                                    <div class=\"block-icon\">\n                                        <img src=\"assets/images/send-icon.png\" alt=\"\">\n                                    </div>\n                                    <h4 class=\"block-title\">Address</h4>\n                                    <div class=\"block-description\">\n                                        <p>Licensed Associate Real Estate Broker, Brown Harris Stevens \n                                        </p>\n                                    </div>\n                                </div>\n                            </div>\n                            <div class=\"col-md-4 col-sm-4 \">\n                                <div class=\"contact-block\">\n                                    <div class=\"block-icon\">\n                                        <img src=\"assets/images/cell-phone-icon.png\" alt=\"\">\n                                    </div>\n                                    <h4 class=\"block-title\">Phone</h4>\n                                    <div class=\"block-description\">\n                                        <p>212-317-7792</p>\n                                        <!-- <p>+30-6977664062 (mobile phone)</p> -->\n                                    </div>\n                                </div>\n                            </div>\n                            <div class=\"col-md-4 col-sm-4 \">\n                                <div class=\"contact-block\">\n                                    <div class=\"block-icon\">\n                                        <img src=\"assets/images/message-icon.png\" alt=\"\">\n                                    </div>\n                                    <h4 class=\"block-title\">Email</h4>\n                                    <div class=\"block-description\">\n                                        <p>Info@repolus.com</p>\n                                        <p>priolo@bhsusa.com</p>\n                                    </div>\n                                </div>\n                            </div>\n\n                        </div>\n\n                    </div>\n                </div>\n            </section>"

/***/ }),

/***/ "../../../../../src/app/about/about.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutComponent = (function () {
    function AboutComponent() {
        console.log("AboutComponent constructor called.");
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    AboutComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-about',
            template: __webpack_require__("../../../../../src/app/about/about.component.html"),
            styles: [__webpack_require__("../../../../../src/app/about/about.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<app-header></app-header>\n<router-outlet></router-outlet>\n<app-footer></app-footer>\n\n\n\n\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__asymmetrik_ngx_leaflet__ = __webpack_require__("../../../../@asymmetrik/ngx-leaflet/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_multiselect_dropdown_angular2_multiselect_dropdown__ = __webpack_require__("../../../../angular2-multiselect-dropdown/angular2-multiselect-dropdown.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__header_header_component__ = __webpack_require__("../../../../../src/app/header/header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__footer_footer_component__ = __webpack_require__("../../../../../src/app/footer/footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__content_content_component__ = __webpack_require__("../../../../../src/app/content/content.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__about_about_component__ = __webpack_require__("../../../../../src/app/about/about.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__blog_blog_component__ = __webpack_require__("../../../../../src/app/blog/blog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__contact_contact_component__ = __webpack_require__("../../../../../src/app/contact/contact.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_ngx_loading__ = __webpack_require__("../../../../ngx-loading/ngx-loading/ngx-loading.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_ngx_pagination__ = __webpack_require__("../../../../ngx-pagination/dist/ngx-pagination.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__data_service__ = __webpack_require__("../../../../../src/app/data.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


















var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_7__header_header_component__["a" /* HeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_8__footer_footer_component__["a" /* FooterComponent */],
                __WEBPACK_IMPORTED_MODULE_9__content_content_component__["a" /* ContentComponent */],
                __WEBPACK_IMPORTED_MODULE_10__about_about_component__["a" /* AboutComponent */],
                __WEBPACK_IMPORTED_MODULE_11__blog_blog_component__["a" /* BlogComponent */],
                __WEBPACK_IMPORTED_MODULE_12__contact_contact_component__["a" /* ContactComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_13__angular_forms__["c" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_13__angular_forms__["f" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_14__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_1__asymmetrik_ngx_leaflet__["a" /* LeafletModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_5__ng_bootstrap_ng_bootstrap__["c" /* NgbModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_4_angular2_multiselect_dropdown_angular2_multiselect_dropdown__["a" /* AngularMultiSelectModule */],
                __WEBPACK_IMPORTED_MODULE_15_ngx_loading__["a" /* LoadingModule */].forRoot({
                    backdropBorderRadius: '4px',
                    primaryColour: '#000000',
                    secondaryColour: '#000000',
                    tertiaryColour: '#000000'
                }),
                __WEBPACK_IMPORTED_MODULE_16_ngx_pagination__["a" /* NgxPaginationModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* RouterModule */].forRoot([
                    { path: '', component: __WEBPACK_IMPORTED_MODULE_9__content_content_component__["a" /* ContentComponent */] },
                    { path: 'about', component: __WEBPACK_IMPORTED_MODULE_10__about_about_component__["a" /* AboutComponent */] },
                    { path: 'blog', component: __WEBPACK_IMPORTED_MODULE_11__blog_blog_component__["a" /* BlogComponent */] },
                    { path: 'contact', component: __WEBPACK_IMPORTED_MODULE_12__contact_contact_component__["a" /* ContactComponent */] },
                ])
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_17__data_service__["a" /* DataService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/blog/blog.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/*:host {\r\n  font-family: \"Helvetica Neue\", Helvetica, Roboto, Arial, sans-serif;\r\n}\r\n\r\n.text-center {\r\n  text-align: center;\r\n}\r\n\r\n.list {\r\n  max-width: 550px;\r\n  margin: auto;\r\n}\r\n\r\nli {\r\n  margin-bottom: 5px;\r\n}\r\n\r\n.blog-content .pagination-bottom ul {\r\n    font-size: 43px;\r\n    padding: 27px;\r\n    text-align: center;\r\n}*/", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/blog/blog.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"blog-content\">\n    <div class=\"container\">\n        <div class=\"blog-content-inner\">\n            <div class=\"row\">\n                <div class=\"col-md-8\">\n                    <div class=\"blog-post\">\n                        <h2 class=\"post-title\">Magnam aliquam quaerat voluptatem</h2>\n                        <span class=\"date\">16 March 2015</span>\n                        <p>New tools have emerged to address the challenges of responsive web design — tools such as Adobe Reflow and the recently released Macaw. Today, we’ll look at one that I have tested extensively in the last few months.\n                            Though not perfect, it’s been a leap forward in productivity for the team that I work with. Its name is Webflow,\n                        </p>\n                        <div class=\"post-image\">\n                            <img src=\"assets/images/blog-post1.png\" alt=\"\">\n                        </div>\n\n                       <div id=\"blog01\" class=\"collapse\">\n                           <blockquote>\"Sed ut perspiciatis unde omnis iste natus error sivoluptatem accusa ntium doloremque laud antium, totam rem aperiam, eaque ipsa.\"\n                           </blockquote>\n                           <p>New tools have emerged to address the challenges of responsive web design — tools such as Adobe Reflow and the recently released Macaw. Today, we’ll look at one that I have tested extensively in the last few months.\n                               Though not perfect, it’s been a leap forward in productivity for the team that I work with. Its name is Webflow, and it could be the solution to the problems you face with static design comps produced in Photoshop\n                               and Fireworks.\n                           </p>\n                       </div>\n                        <a class=\"read-more-btn\" data-toggle=\"collapse\" data-target=\"#blog01\">Read More</a>\n                    </div>\n\n                    <div class=\"blog-post\">\n                        <h2 class=\"post-title\">Magnam aliquam quaerat voluptatem unde omnis iste natus error sit voluptatem accusanti</h2>\n                        <span class=\"date\">16 March 2015</span>\n                        <div class=\"post-image\">\n                            <img src=\"assets/images/blog-post2.png\" alt=\"\">\n                        </div>\n\n                        <div id=\"blog02\" class=\"collapse\">\n                            <blockquote>\"Sed ut perspiciatis unde omnis iste natus error sivoluptatem accusa ntium doloremque laud antium, totam rem aperiam, eaque ipsa.\"\n                            </blockquote>\n                            <p>New tools have emerged to address the challenges of responsive web design — tools such as Adobe Reflow and the recently released Macaw. Today, we’ll look at one that I have tested extensively in the last few months.\n                                Though not perfect, it’s been a leap forward in productivity for the team that I work with. Its name is Webflow, and it could be the solution to the problems you face with static design comps produced in Photoshop\n                                and Fireworks.\n                            </p>\n                         </div>   \n                         <a class=\"read-more-btn\" data-toggle=\"collapse\" data-target=\"#blog02\">Read More</a>\n                    </div>\n\n                    <div class=\"blog-post\">\n                        <h2 class=\"post-title\">Magnam aliquam quaerat voluptatem</h2>\n                        <span class=\"date\">16 March 2015</span>\n                        <p>New tools have emerged to address the challenges of responsive web design — tools such as Adobe Reflow and the recently released Macaw. Today, we’ll look at one that I have tested extensively in the last few months.\n                            Though not perfect, it’s been a leap forward in productivity for the team that I work with. Its name is Webflow,\n                        </p>\n                        <div class=\"post-image\">\n                            <img src=\"assets/images/blog-post3.png\" alt=\"\">\n                        </div>\n                        <div id=\"blog03\" class=\"collapse\">\n                            <blockquote>\"Sed ut perspiciatis unde omnis iste natus error sivoluptatem accusa ntium doloremque laud antium, totam rem aperiam, eaque ipsa.\"\n                            </blockquote>\n                            <p>New tools have emerged to address the challenges of responsive web design — tools such as Adobe Reflow and the recently released Macaw. Today, we’ll look at one that I have tested extensively in the last few months.\n                                Though not perfect, it’s been a leap forward in productivity for the team that I work with. Its name is Webflow, and it could be the solution to the problems you face with static design comps produced in Photoshop\n                                and Fireworks.\n                            </p>\n                         </div>   \n                        <a class=\"read-more-btn\" data-toggle=\"collapse\" data-target=\"#blog03\">Read More</a>\n                    </div>\n\n                    <div class=\"pagination-bottom\">\n                       <!--  <ul>\n                            <li class=\"active\"><a href=\"\">1</a></li>\n                            <li><a href=\"\">2</a></li>\n                            <li><a href=\"\">3</a></li>\n                            <li><a href=\"\">4</a></li>\n                            <li><a href=\"\">5</a></li>\n                            <li><a href=\"\">6</a></li>\n                            <li><a href=\"\">7</a></li>\n                        </ul> -->\n\n                        <!-- pagination -->\n                        \n                        <!-- <ul>\n                            <li *ngFor=\"let item of collection | paginate: { itemsPerPage: 10, currentPage: p }\">{{ item }}</li>\n                        </ul>\n\n                        <pagination-controls (pageChange)=\"p = $event\"></pagination-controls> -->\n\n                    </div>\n                </div>\n                <div class=\"col-md-4\">\n                    <div class=\"blog-widgets\">\n                        <div class=\"widgets-block\">\n                            <h3>Categories</h3>\n                            <ul>\n                                <li><a >Eurasia for your trips</a></li>\n                                <li><a >North America and USA</a></li>\n                                <li><a >South America and Japan</a></li>\n                                <li><a >Australia & Antarctica</a></li>\n                            </ul>\n                        </div>\n                        <div class=\"widgets-block\">\n                            <h3>Archives</h3>\n                            <ul>\n                                <li><a >September 2014</a></li>\n                                <li><a >August 2014</a></li>\n                                <li><a >July 2014</a></li>\n                                <li><a >March 2014</a></li>\n                                <li><a >February 2014</a></li>\n                            </ul>\n                        </div>\n                        <div class=\"widgets-block\">\n                            <h3 class=\"recent-post-title\">recent posts</h3>\n                            <div class=\"recent-post\">\n                                <a >My Group Tours: Two Trips to Europe!</a>\n                                <p>At the end of 2013, I started leading group trips. I’ve done four so far and have really enjoyed them. I like meeting readers...</p>\n                                <span class=\"date\">14 March 2015</span>\n                            </div>\n                            <div class=\"recent-post\">\n                                <a >Everything You Need to Know About Using Smartphones When You Travel</a>\n                                <p>On the first Tuesday of each month, Dave Dean from Too Many Adapters gives us tips and advice on travel tech and gear. He is our resident...</p>\n                                <span class=\"date\">14 March 2015</span>\n                            </div>\n                            <div class=\"recent-post\">\n                                <a >What Makes a Nomad a Nomad?</a>\n                                <p>At the end of 2013, I started leading group trips. I’ve done four so far and have really enjoyed them. I like meeting readers...</p>\n                                <span class=\"date\">14 March 2015</span>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/blog/blog.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BlogComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BlogComponent = (function () {
    // collection = [];	
    function BlogComponent() {
        console.log("BlogComponent constructor called.");
        // for (let i = 1; i <= 100; i++) {
        //       this.collection.push(i);
        //     }
    }
    BlogComponent.prototype.ngOnInit = function () {
    };
    BlogComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-blog',
            template: __webpack_require__("../../../../../src/app/blog/blog.component.html"),
            styles: [__webpack_require__("../../../../../src/app/blog/blog.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], BlogComponent);
    return BlogComponent;
}());



/***/ }),

/***/ "../../../../../src/app/contact/contact.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".contact-us { padding: 165px 0 0 0;  }\r\n.contact-us h4 { font-size: 24px; color: #333333; line-height: 30px; position: relative;\r\n text-transform: uppercase; margin-bottom:60px; padding-bottom: 20px; }\r\n.contact-us h4:after { height: 2px; width: 50px; background: #365e99; position: absolute;\r\n left: 0px; bottom: 0px; content: '';  }\r\n.contact-us input { font-size: 13px; color: #666666; border-bottom: 1px solid #000000;\r\n padding: 10px 0px; width: 100%;  }\r\n.contact-us textarea { padding: 0px; border: 0px; border-bottom: 1px solid #000000; \r\nwidth: 100%; resize: none;}\r\n.contact-us .btn { background: #11213b; padding: 15px 40px; border-radius: 25px;\r\ncolor: #fff; text-transform: uppercase;  }\r\n.contact-us p { font-size: 14px; color: #666666; margin-bottom: 20px;   }\r\n.contact-us span { text-transform: uppercase; font-weight: 700; }\r\n.map { margin-top: 50px; }\r\n.map img { width: 100%;  }\r\n\r\n.contact-us .contactHeading {\r\n\tfont-weight: bold;\r\n\tfont-size: 20px;\r\n\tcolor: #000000;\r\n}\r\n\r\n.contact-us .contactPhara {\r\n\tfont-size: 17px;\r\n}\r\n\r\n.contact-us .contactPhara .contactlabel{\r\n\tcolor: #000000;\r\n\tfont-weight: bold;\r\n}\r\n\r\n@media only screen and (max-width:767px){ \r\n\t\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/contact/contact.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"contact-us\">\n\t<div class=\"container\">\n\t\t<div class=\"row\">\n\t\t\t<div class=\"col-sm-6\">\n\t\t\t\t<h4>send message</h4>\n\t\t\t\t<form  class=\"form-horizontal\" [formGroup]=\"emailForm\" (ngSubmit)=\"sendEmail(emailForm.value)\">\n\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t<div class=\"col-sm-6\">\n\t\t\t\t\t\t\t<input type=\"text\" formControlName=\"name\"   placeholder=\"Name\" >\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t<div class=\"col-sm-6\">\n\t\t\t\t\t\t\t<input type=\"email\"  formControlName=\"email\"  placeholder=\"Email\" required>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-sm-6\">\n\t\t\t\t\t\t\t<input type=\"password\"  formControlName=\"password\"  placeholder=\"password\" required>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t<div class=\"col-sm-12\">\n\t\t\t\t\t\t\t<input type=\"text\" formControlName=\"subject\"  placeholder=\"Subject\">\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t<div class=\"col-sm-12\">\n\t\t\t\t\t\t\t<textarea rows=\"5\" formControlName=\"comment\"  placeholder=\"comment\"></textarea>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<p *ngIf=\"message\" style=\"color: blue;\">{{message}}</p>\n\t\t\t\t\t<p *ngIf=\"errMessage\" style=\"color: red;\">{{errMessage}}</p>\n\n\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t<div class=\"col-sm-12\">\n\t\t\t\t\t\t\t<button type=\"submit\" class=\"btn btn-default\">send message</button>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</form>\n\t\t\t</div>\n\t\t\t<div class=\"col-sm-5 col-sm-offset-1\" style=\"padding-top: 127px;\">\n\t\t\t\t\n\t\t\t\t<p class=\"contactHeading\" style=\"margin-bottom: 0;\">REPOLUS</p>\n\t\t\t\t<p class=\"contactHeading\">Info@repolus.com</p>\n\t\t\t\t<p class=\"contactHeading\" style=\"margin-bottom: 0;\">Peter Michael Riolo</p>\t\t\t\t\n\t\t\t\t<p class=\"contactPhara\" style=\"margin-bottom: 0;\">Licensed Associate Real Estate Broker, Brown Harris Stevens</p>\n\t\t\t\t<p class=\"contactPhara\" style=\"margin-bottom: 0;\"><label class=\"contactlabel\">Direct:</label>  212-317-7792</p>\n\t\t\t\t<p class=\"contactPhara\" style=\"margin-bottom: 0;\"><label class=\"contactlabel\">Email:</label>  priolo@bhsusa.com</p>\n\n\t\t\t\t<!-- <h4>contact info</h4> -->\n\t\t\t\t<!-- <p>Peter Michael Riolo.</p>\n\t\t\t\t<div class=\"row\">\n\t\t\t\t\t<div class=\"col-md-2 col-sm-3 col-xs-3\">\n\t\t\t\t\t\t<span>address</span>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-md-10 col-sm-9 col-xs-9\">\n\t\t\t\t\t\t<p>Licensed Associate Real Estate Broker, Brown Harris Stevens.</p>\n\t\t\t\t\t</div>\n\t\t\t   </div>\n\t\t\t   <div class=\"row\">\n\t\t\t\t\t<div class=\"col-md-2 col-sm-3 col-xs-3\">\n\t\t\t\t\t\t<span>phone</span>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-md-10 col-sm-9 col-xs-9\">\n\t\t\t\t\t\t<p>212-317-7792</p>\n\t\t\t\t\t</div>\n\t\t\t   </div>\n\t\t\t   <div class=\"row\">\n\t\t\t\t\t<div class=\"col-md-2 col-sm-3 col-xs-3\">\n\t\t\t\t\t\t<span>email</span>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-md-10 col-sm-9 col-xs-9\">\n\t\t\t\t\t\t<p>Info@repolus.com  /  priolo@bhsusa.com </p>\n\t\t\t\t\t</div>\n\t\t\t   </div>\n\t\t\t   <div class=\"row\">\n\t\t\t\t\t<div class=\"col-md-2 col-sm-3 col-xs-3\">\n\t\t\t\t\t\t<span>fax</span>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-md-10 col-sm-9 col-xs-9\">\n\t\t\t\t\t\t<p>001 236 9625</p>\n\t\t\t\t\t</div>\n\t\t\t   </div> -->\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\t<div class=\"map\">\n\t\t<iframe src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3023.937471378953!2d-74.00409274844864!3d40.71939297922963!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25989866d5c39%3A0x6aef34bbdb232187!2sCanal+St%2C+New+York%2C+NY!5e0!3m2!1sen!2sus!4v1527276943681\" width=\"100%\" height=\"450\" frameborder=\"0\" style=\"border:0\" allowfullscreen></iframe>\n\t</div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/contact/contact.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__data_service__ = __webpack_require__("../../../../../src/app/data.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ContactComponent = (function () {
    function ContactComponent(dataService) {
        this.dataService = dataService;
        console.log("ContactComponent constructor called.");
    }
    ContactComponent.prototype.ngOnInit = function () {
        this.emailForm = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormGroup */]({
            name: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](),
            email: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]('', [
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required,
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].pattern("[^ @]*@[^ @]*")
            ]),
            password: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](),
            subject: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](),
            comment: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]()
        });
    };
    // send message method
    ContactComponent.prototype.sendEmail = function (recData) {
        var _this = this;
        console.log("sendEmail called recData:", recData);
        this.dataService.sendEmail(recData)
            .subscribe(function (res) {
            // console.log("res::", res);
            _this.message = res;
            _this.errMessage = '';
            _this.emailForm.reset();
        }, function (err) {
            // console.log("Error occured while sending email", err);
            _this.errMessage = err.error.response;
            _this.message = '';
        });
    };
    ;
    ContactComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-contact',
            template: __webpack_require__("../../../../../src/app/contact/contact.component.html"),
            styles: [__webpack_require__("../../../../../src/app/contact/contact.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__data_service__["a" /* DataService */]])
    ], ContactComponent);
    return ContactComponent;
}());



/***/ }),

/***/ "../../../../../src/app/content/constants.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return C0NST; });
var C0NST = {
    // total = manhattan 47 and brooklyn 59 === 106
    allDowntown: [{ id: 1, "name": "Battery Park City", "status": false }, { id: 2, "name": "Chelsea", "status": false }, { id: 3, "name": "Chinatown", "status": false }, { id: 4, "name": "Civic Center", "status": false }, { id: 5, "name": "East Village", "status": false }, { id: 6, "name": "Financial District", "status": false }, { id: 7, "name": "Fulton/seapart", "status": false }, { id: 8, "name": "Flatiron", "status": false }, { id: 9, "name": "NoMad", "status": false }, { id: 10, "name": "Gramercy Park", "status": false }, { id: 11, "name": "Greenwich Village", "status": false }, { id: 12, "name": "Noho", "status": false }, { id: 13, "name": "Little Italy", "status": false }, { id: 14, "name": "Lower East Side", "status": false }, { id: 15, "name": "Soho", "status": false }, { id: 16, "name": "Stuyvesant Town", "status": false }, { id: 17, "name": "Tribeca", "status": false }, { id: 18, "name": "West Village", "status": false }],
    allMidtown: [{ id: 101, "name": "Midtown East", "status": false }, { id: 102, "name": "KIPS", "status": false }, { id: 103, "name": "Murray Hill", "status": false }, { id: 104, "name": "Turtle Bay", "status": false }, { id: 105, "name": "Beekman", "status": false }, { id: 106, "name": "Midtown West", "status": false }, { id: 107, "name": "Roosevelt Island", "status": false }],
    allUpperEastSide: [{ id: 201, "name": "Central Park East", "status": false }, { id: 202, "name": "Midtown", "status": false }, { id: 203, "name": "Midtown East", "status": false }, { id: 204, "name": "Kips Bay", "status": false }, { id: 205, "name": "Beekman", "status": false }, { id: 206, "name": "Murray Hill", "status": false }, { id: 207, "name": "Sutton Place", "status": false }, { id: 208, "name": "Turtle Bay", "status": false }],
    allUppeWest: [{ id: 301, "name": "Lincoln Square", "status": false }, { id: 302, "name": "Manhatton Valley", "status": false }, { id: 303, "name": "Morningside Heights", "status": false }, { id: 304, "name": "Upper West Side", "status": false }],
    allUpperManhattan: [{ id: 401, "name": "Central Harlem", "status": false }, { id: 402, "name": "East harlem", "status": false }, { id: 403, "name": "Hamilton Heights", "status": false }, { id: 404, "name": "Inwood", "status": false }, { id: 405, "name": "Manhattanville", "status": false }, { id: 406, "name": "Marble Hill", "status": false }, { id: 407, "name": "Washington Heights", "status": false }, { id: 408, "name": "Fort George", "status": false }, { id: 409, "name": "Hudson Heights", "status": false }, { id: 410, "name": "West Harlem", "status": false }],
    allBrooklyn: [{ id: 501, "name": "Bath Beach", "status": false }, { id: 502, "name": "Bay Ridge", "status": false }, { id: 503, "name": "Bedford Stuyvesant", "status": false }, { id: 504, "name": "Ocean Hill", "status": false }, { id: 505, "name": "Stuyvesant Heights", "status": false }, { id: 506, "name": "Bensonhurst", "status": false }, { id: 507, "name": "Bergen Beach", "status": false }, { id: 508, "name": "Fulton/seaport", "status": false }, { id: 509, "name": "Boerum Hill", "status": false }, { id: 510, "name": "Borough Park", "status": false }, { id: 511, "name": "Mapleton", "status": false }, { id: 512, "name": "Brighton Beach", "status": false }, { id: 513, "name": "Brooklyn Heights", "status": false }, { id: 514, "name": "Brownsville", "status": false }, { id: 515, "name": "Bushwick", "status": false }, { id: 516, "name": "Canarsie", "status": false }, { id: 517, "name": "Carrol Gardens", "status": false }, { id: 518, "name": "City line", "status": false }, { id: 519, "name": "Clinton Hill", "status": false }, { id: 520, "name": "Cabble Hill", "status": false }, { id: 521, "name": "Columbia St. Waterfront District", "status": false }, { id: 522, "name": "Coney Island", "status": false }, { id: 523, "name": "Crown Heights", "status": false }, { id: 524, "name": "Ditmas Park", "status": false }, { id: 525, "name": "Downtown Brooklyn", "status": false }, { id: 526, "name": "Dyker Heights", "status": false }, { id: 527, "name": "DUMBO", "status": false }, { id: 528, "name": "East New York", "status": false }, { id: 529, "name": "Flatbush", "status": false }, { id: 530, "name": "Flatlands", "status": false }, { id: 531, "name": "Fort Greene", "status": false }, { id: 532, "name": "Fiske Terrace", "status": false }, { id: 533, "name": "Gerritsen Beach", "status": false }, { id: 534, "name": "Gowanus", "status": false }, { id: 535, "name": "Gravesend", "status": false }, { id: 536, "name": "Greenpoint", "status": false }, { id: 537, "name": "Greenwood", "status": false }, { id: 538, "name": "Homecrest", "status": false }, { id: 539, "name": "Kensington", "status": false }, { id: 540, "name": "Lefferts Gardens", "status": false }, { id: 541, "name": "Manhattan Beach", "status": false }, { id: 542, "name": "Marine Park", "status": false }, { id: 543, "name": "Midwood", "status": false }, { id: 544, "name": "East Villiamsburg", "status": false }, { id: 545, "name": "Farragut", "status": false }, { id: 546, "name": "Madison", "status": false }, { id: 547, "name": "Mill Basin", "status": false }, { id: 548, "name": "Northeast Flatbush", "status": false }, { id: 549, "name": "Ocean Parkway", "status": false }, { id: 550, "name": "Old Mill Basin", "status": false }, { id: 551, "name": "Park Slope", "status": false }, { id: 552, "name": "Prospect Heights", "status": false }, { id: 553, "name": "Prospect Park South", "status": false }, { id: 554, "name": "Red Hook", "status": false }, { id: 555, "name": "Seagate", "status": false }, { id: 556, "name": "Sheepshead Bay", "status": false }, { id: 557, "name": "Kensington", "status": false }, { id: 558, "name": "Carrol Gardens", "status": false }, { id: 559, "name": "Manhattan Beach", "status": false }],
    // categories work
    allCategories: [{ "name": "Banks", "selected": false }, { "name": "Cafes", "selected": false }, { "name": "Theatres", "selected": false }, { "name": "Schools", "selected": false }, { "name": "Grocery", "selected": false }, { "name": "Fitness", "selected": false }, { "name": "Healthcare", "selected": false }, { "name": "Museum", "selected": false }, { "name": "Parks", "selected": false }, { "name": "Pharmacies", "selected": false }, { "name": "Restaurants", "selected": false }, { "name": "Worship", "selected": false }, { "name": "Daycare", "selected": false }, { "name": "New Developments", "selected": false }, { "name": "University", "selected": false }, { "name": "NYPD", "selected": false }],
};


/***/ }),

/***/ "../../../../../src/app/content/content.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".main a.down-nav-btn{ position:absolute; left:50%; transform:translateX(-50%); bottom:15px; padding:15px; border-radius:50%; border:1px solid transparent; transition:0.2s all ease; }\r\n.main a.down-nav-btn:hover{ border:1px solid #fff; }\r\n/* Banner Starts Here */\r\n.banner{ padding:188px 0 0; text-align:center; }\r\n.banner p.banner-description{ color:#fff; font-size:18px; margin-top:52px; line-height:25px; padding:0 155px; letter-spacing:0.05em; font-weight:300; }\r\n.banner a.discover-more-btn{ display:inline-block; color:#5a2c4b; padding:20px 36px; text-transform:capitalize; font-weight:300; background:#fff; border-radius:4px; font-size:18px; line-height:13px; margin-top:34px; transition:0.2s all ease; border:1px solid transparent; }\r\n.banner a.discover-more-btn:hover{ border:1px solid #fff; color:#fff; background:#5a2c4b; }\r\n.content .map-section{ background:#eaf9fe; background-size:cover;  position:relative; }\r\n.map-section-content{ max-width:510px; width: 100%; padding:0 15px; position:absolute; left: 90px; top: 37px; z-index: 999; }\r\n.tags{ font-size:0; }\r\n.tags ul.nav-navtags{ font-size:0; display:inline-block; width:230px; float:none; }\r\n.tags ul.nav-navtags:nth-child(2){ margin-left:20px; }\r\n.tags ul.nav-navtags>li{ display:block; margin-bottom:16px; }\r\n.tags .dropdown>a{ background:#22c2a6; color:#fff; border-radius:4px; font-size:14px; width:230px; position:relative; display:inline-block; padding:15px 20px 15px 17px; letter-spacing:0.12em; }\r\n.tags ul.nav-navtags>li.selected-tag>a{ background-color:#add7d5; }\r\n.tags ul.nav-navtags>li.selected-tag>a::after{ background:transparent; }\r\n.tags .dropdown>a:hover, .tags .dropdown>a:focus{ background-color:#22c2a6; }\r\n.tags .dropdown>a>span{ transition:0.2s all ease; }\r\n.tags .dropdown.show>a>span{ transform:rotate(90deg); }\r\n/* .tags ul.nav-navtags>li.selected-tag{ margin-bottom:3px; }\r\n */\r\n.tags ul.nav-navtags>li.selected-tag>a:focus>span{ transform:rotate(0deg); }\r\nli.dropdown.selected-tag {\r\n    display: inline-block;\r\n    margin-right: 9px;\r\n    margin-bottom: 5px;\r\n    padding: 0;\r\n}\r\n\r\n.tags ul.nav-navtags>li.selected-tag>a:hover{ background-color:#add7d5; }\r\n.tags .dropdown>a::after{ content:\"\"; position:absolute; width:1px; height:100%; z-index:2; background:#14a890; top:0; right:46px; }\r\n.tags ul.catagories{ width:480px; }\r\n.tags ul.catagories>li{ width:100%; }\r\n.tags ul.catagories>li>a{ width:100%; }\r\n.tags ul.catagories ul.dropdown-menu{ width:100%; }\r\n.tags .dropdown-menu>li>a{ color:#fff; }\r\n.tags .dropdown ul.dropdown-menu{ background:#2c4663; border-radius:4px; box-shadow:none; margin-top:16px; width:230px; padding:6px 3px; }\r\n.tags .dropdown ul.dropdown-menu>li>a{ line-height:10px; padding:11px; font-size:13px; }\r\n.tags .dropdown ul.dropdown-menu>li>a:hover,.tags .dropdown ul.dropdown-menu>li>a:focus{ background:#22c2a6; }\r\n/*.tags .dropdown ul.dropdown-menu:before{ content:\"\"; border-bottom:10px solid #2c4663; border-right:10px solid transparent; border-left:10px solid transparent; position:absolute; top:-10px; right:16px; z-index:10; }*/\r\n/*.tags .dropdown ul.dropdown-menu:after{ content:\"\"; border-bottom:12px solid #2c4663; border-right:12px solid transparent; border-left:12px solid transparent; position:absolute; top:-12px; right:14px; z-index:9; }*/\r\n\r\n\r\n.map-section .absorption-chart{ border-radius:4px; width:323px; overflow:hidden; margin-bottom:33px; }\r\n.map-section .absorption-chart-header{ background:#234272; padding:14px 14px 14px 23px; }\r\n.map-section .absorption-chart-header h3{ color:#fff; font-size:15px; line-height:13px; }\r\n.map-section .absorption-chart-header h3:first-child{ margin-bottom:15px; }\r\n.map-section .absorption-chart-container{ background:#3e5c83; }\r\n.map-section .map-area { display:block; }\r\n.map-section .map-area img { width: 100%;  }\r\n.bx-wrapper{ border:none !important; background:none !important; box-shadow:none !important; -webkit-box-shadow:none !important; margin-bottom:25px !important; }\r\n.bx-wrapper .bx-controls-direction a{ width:15px !important; height:23px !important; }\r\n.bx-viewport{ height:415px !important; }\r\n.bx-wrapper .bx-next{ right:-50px!important; background:url(\"/assets/images/right-control.png\") no-repeat !important; background-size:contain; }\r\n.bx-wrapper .bx-prev{ left:-58px!important; background:url(\"/assets/images/left-control.png\") no-repeat !important; background-size:contain; }\r\n.bx-wrapper .bx-pager{ display:none !important; }\r\n.map-section .absorption-chart-inner{ padding:35px 45px; }\r\n.map-section .absorption-chart-footer{ background:#234272; padding:26px 21px; }\r\n.map-section .absorption-chart-footer ul{ }\r\n.map-section .absorption-chart-footer ul li{ display:block; font-size:15px; color:#fff; line-height:24px; margin-bottom:17px; }\r\n.map-section .absorption-chart-footer ul li:last-child{ margin-bottom:0; }\r\n.map-section .absorption-chart-footer ul li span{ display:inline-block; width:24px; height:24px; vertical-align:middle; margin-right:20px; }\r\n.map-section .absorption-chart-footer ul li span.appartments{ background:#eae891; }\r\n.map-section .absorption-chart-footer ul li span.condominiums{ background:#64bfc2; }\r\n.map-section .absorption-chart-footer ul li span.cooperatives{ background:#9883cd; }\r\n.market-reports{ padding:102px 0 36px; background:#234272;  position:relative; }\r\n.market-reports .market-reports-content{ position:relative; padding-left:35px; }\r\n.market-reports .market-reports-content h2{ color:#fff; font-size:17px; line-height:14px; margin-bottom:23px; letter-spacing:0.12em; }\r\n.market-reports .market-reports-content h3{ color:#fff; font-size:24px; line-height:18px; margin-bottom:24px; letter-spacing:0.12em; }\r\n.market-reports .market-reports-content p{ color:#fff; font-size:15px;  line-height:21px; font-weight:300; letter-spacing:0.04em; text-align: justify;}\r\n.market-reports .market-reports-content ul{ position:absolute; top:0; right:3px; }\r\n.market-reports .market-reports-content ul li{ display:inline-block; margin-left:8px; }\r\n.market-reports .tags ul.nav-navtags>li{ margin-bottom:5px; }\r\n.market-reports .market-reports-chart { background:#294c7b; margin-top:20px; padding:85px 0 25px; height: 415px; }\r\n.market-reports .absorption-chart { background:#294c7b; margin-top:20px; padding:85px 0 25px; }\r\n.market-reports-chart-footer{ margin-top:30px; }\r\n.market-reports-chart-footer ul{ padding-top:8px; }\r\n.market-reports-chart-footer ul li{ display:inline-block; font-size:15px; color:#fff; line-height:24px; margin-bottom:17px; margin-right:50px; }\r\n.market-reports-chart-footer ul li:last-child{ margin-right:0; }\r\n.market-reports-chart-footer ul li span{ display:inline-block; width:24px; height:24px; vertical-align:middle; margin-right:20px; }\r\n.market-reports-chart-footer ul li span.appartments{ background:#eae891; }\r\n.market-reports-chart-footer ul li span.condominiums{ background:#64bfc2; }\r\n.market-reports-chart-footer ul li span.cooperatives{ background:#9883cd; }\r\n.market-reports-chart-footer a.view-neighbour{ line-height:12px; color:#fff; padding:16px; font-size:15px; border-radius:4px; background:#22c2a6; letter-spacing:0.1em; }\r\n.market-reports-chart-footer a.view-neighbour:hover { background:#fb4381; }\r\n.checkboxFive {  width: 100%;margin:0px;position: relative;  margin-top: 10px; margin-left: 10px; }\r\n.checkboxFive label { position: relative; display: block;line-height: 20px; color: #fff; font-weight: 400; padding-left: 30px; margin-bottom: 15px; }\r\n.checkboxFive input[type=checkbox] { position: absolute; top: 0; left: 0;  }\r\n.checkboxFive label:before {cursor: pointer;position: absolute;width: 20px;height: 20px;top: 0;left: 0;background: #eee;\r\n\tborder:1px solid #ddd;    border-radius: 4px;   content: '';}\r\n.checkboxFive label:after {opacity: 0.1;content: '';position: absolute;width: 9px;height: 6px;background: transparent;top: 6px;\r\nleft: 7px;border: 3px solid #333;border-top: none;border-right: none;transform: rotate(-45deg);}\r\n.checkboxFive label:hover::after {opacity: 0.5;}\r\n.checkboxFive input[type=checkbox]:checked + label:after {opacity: 1; }\r\n.map-section button.view {\r\n    background: #22c2a6;\r\n    color: #fff;\r\n    width: 100%;\r\n    border-top-left-radius: 7px;\r\n    border-top-right-radius: 7px;\r\n    border-bottom-right-radius: 7px;\r\n    border-bottom-left-radius: 7px;\r\n    position: relative;\r\n    top: 7px;\r\n    margin-bottom: 7px;\r\n    padding: 8px;\r\n    box-shadow: none;\r\n}\r\n\r\n.map-section button.viewDone {\r\n   background: #22c2a6;\r\n   color: #fff;\r\n   width: 81%;\r\n   border-top-left-radius: 7px;\r\n   border-top-right-radius: 7px;\r\n   border-bottom-right-radius: 7px;\r\n   border-bottom-left-radius: 7px;\r\n   position: relative;\r\n   top: -9px;\r\n   padding: 10px;\r\n   box-shadow: none;\r\n   margin-left: 8px;\r\n   margin-bottom: 9px;\r\n}\r\n\r\n .map-section button.view.viewall{     background: #22c2a6;\r\n    color: #fff;\r\n    width: 100%;\r\n    border-top-left-radius: 0px;\r\n    border-top-right-radius: 0px;\r\n    position: absolute;\r\n    /* top: 6px; */\r\n    padding: 8px;\r\n    box-shadow: none;    top: auto;\r\n    width: 198px;\r\n    bottom: 0px; }\r\n    .tags-box {     /*min-height: 117px;*/  }\r\n.dropdown-menu.first-menu.show.hide { display: none !important; }\r\n.dropdown-menu.first-menu.popup.hide.show { display: block !important;   }\r\n.tags .dropdown-menu.first-menu.popup.hide { width: 620px; left: -252px;}\r\n.tags .dropdown-menu.first-menu.popup.hide  { -webkit-column-count: 3; column-count: 3;  }\r\n.dropdown-menu.first-menu.hide.popup { display: none !important; }\r\n.tags .dropdown-menu.first-menu.popup.hide h5 { line-height: 20px; font-weight: 900; color: #22c2a6;  }\r\n.tags .dropdown ul.dropdown-menu.first-menu.popup.hide:before , .tags .dropdown-menu.first-menu.popup.hide:after{ border: 0px; display: none;  }\r\n\r\n\r\n\r\n.div-overlap{\r\n\r\n}\r\n.div-overlap .btn-overlap{\r\n    background-color:#22c2a6;\r\n    min-width: 160px;\r\n}\r\n/*.div-overlap ul{\r\n    background-color: #3e546b;\r\n}*/\r\n.custom-ul{\r\n    -webkit-column-count: 1;\r\n            column-count: 1;\r\n}\r\n\r\n.div-overlap ul li .img-item a span{\r\nmargin-left: 10px;\r\ntext-transform: capitalize;\r\n}\r\n.div-overlap ul li .img-item a {\r\npadding: 0px 14px 0px 14px;\r\ndisplay: -ms-flexbox;\r\ndisplay: flex;\r\n-ms-flex-align:center;\r\n    align-items:center;\r\n}\r\n/*.div-overlap ul li:hover .img-item a{\r\nbackground-color:#4a898e;\r\n}*/\r\n.div-overlap ul li .img-item .fa{\r\nfont-size: 25px;\r\n}\r\n\r\n.div-overlap ul li .img-item a{\r\ncolor: white;\r\n}\r\n\r\n/*.div-overlap ul li.active .img-item a{\r\nbackground-color:#4a898e;\r\n}*/\r\n.custom-ul.dropdown-menu { width: 617px !important;   }\r\n\r\n.selected-item{\r\n    margin:5px 0;\r\n    width: 150px;\r\n    background-color:#fff !important;\r\n    border: 2px solid #21c2a6;\r\n    color: #333333;\r\n    position: relative;\r\n    padding: 0px 0px 0px 2px;\r\n    text-align: left; margin-left: 10px;\r\n    display: -ms-inline-flexbox;\r\n    display: inline-flex;\r\n}\r\n\r\n.selected-item span{\r\n    margin-left: 3px;\r\n    margin-top: 7px;\r\n    font-weight: bolder;\r\n    font-size: 14px;\r\n}\r\n\r\n/*.selected-item i{\r\n    margin-top: 2px;\r\n    margin-bottom: -7px;\r\n}*/\r\n\r\n\r\nbutton.selected-item:hover{\r\n    color:#000000;\r\n    border: 2px solid #21c2a6;\r\n}\r\n\r\n\r\nbutton.selected-item:focus{\r\n    background-color: #22c2a6 !important;\r\n    color: #333333 !important;\r\n    border: 2px solid #21c2a6;\r\n\r\n}\r\n\r\nbutton.selected-item:active{\r\n    background-color: #22c2a6 !important;\r\n    color: #333333 !important;\r\n    border: 2px solid #21c2a6;\r\n\r\n}\r\n\r\n \r\n .selected-item.active { background-color: #22c2a6 !important;\r\n            color: #333333 !important;\r\n            border: 2px solid #21c2a6; \r\n}\r\n\r\nbutton.selected-item:hover{\r\n    background-color: #22c2a6 !important;\r\n    color: #333333 !important;\r\n    border: 2px solid #21c2a6;\r\n\r\n}\r\n\r\nbutton.selected-item .fa{\r\n    font-size: 20px;\r\n    margin-right: 7px;\r\n}\r\n.selected-item a.cross{\r\n    position: absolute;\r\n    right: 0px;\r\n    top: 6px;\r\n\r\n}\r\n\r\n.selected-item a.cross .fa{\r\n    color: #333333;\r\n    font:15px;\r\n}\r\n.div-overlap ul li {\r\n position: relative;    width: 33%;\r\n float: left;  \r\n}\r\n.div-overlap ul li .img-item input#checkboxCat {\r\n    width: 100%;\r\n    position: absolute; opacity: 0;\r\n    height: 32px;\r\n}\r\n\r\n\r\n/*cat icons css*/\r\n\r\n.catIconsColor {\r\n    stroke: #fff !important;\r\n    fill: none;\r\n}\r\n\r\n.catIconsColorSelected {\r\n    stroke: #000 !important;\r\n    fill: none;\r\n}\r\n#mapCountainerId {\r\n    height: 89rem;\r\n}\r\n/*---Map section work---*/\r\n.leaflet-right .leaflet-control {\r\n    margin-right: 14rem;\r\n}\r\n.leaflet-bottom .leaflet-control {\r\n    margin-bottom: 7rem;\r\n}\r\n\r\n/*absorption chart work*/\r\n.noDatatoshow {\r\n    text-align: center;\r\n    color: white;\r\n    margin-top: 14%;\r\n    margin-left: 7px;\r\n    margin-right: 7px;\r\n}\r\n\r\n.absorptionChartH4 {\r\n    text-align: right;\r\n    margin-right: 67px;\r\n    color: white;\r\n    font-weight: 700;\r\n}\r\n\r\n.absorptionDDStyle{\r\n    max-height: 28rem;\r\n    overflow: hidden;\r\n    overflow-y: auto;\r\n}\r\n\r\n.mapSide{\r\n    background-color: #aad3df;\r\n    height: 89rem;\r\n}\r\n\r\n@media only screen and (max-width:1199px){\r\n.banner p.banner-description{ padding:0 100px; }\r\n}\r\n\r\n@media only screen and (max-width:991px){\r\n.banner p.banner-description{ padding:0 55px; margin-top: 30px; }\r\n#mapCountainerId { height: 75rem; }\r\n.content .map-section { height: 750px; }\r\n/*.market-reports .market-reports-content p { padding-right: 50px; }*/\r\n.market-reports .market-reports-chart { height: 300px;  }\r\n}\r\n@media only screen and (max-width:767px){   \r\n.banner { padding: 150px 0 0; }  \r\n.banner p.banner-description{ padding:0 30px; }\r\n.banner a.discover-more-btn { padding: 15px 20px; font-size: 16px; line-height: 13px; margin-top: 30px; }\r\n#mapCountainerId { height: 55rem; }\r\n.content .map-section { height: 550px; }\r\n.map-section-content { left:0; max-width: 450px; }\r\n.tags-box { padding-left: 5px;  }\r\n.tags .dropdown>a { font-size: 10px; width: 160px; padding: 8px; }\r\n.tags ul.nav-navtags { width: 170px; padding: 0 5px; }\r\n.tags ul.nav-navtags:nth-child(2) { margin-left: 0; }\r\n.tags .dropdown>a::after { right: 40px; }\r\n.tags .dropdown>a>span { position: absolute; right: 15px; }\r\nspan.date_select { position: initial !important; }\r\n.leaflet-right .leaflet-control { margin-right: 2rem; }\r\n.leaflet-bottom .leaflet-control { margin-bottom: 2rem; }\r\na#dropdownBasic2 { width: 80% !important; }\r\n.custom-ul.dropdown-menu { width: 573px !important; }\r\n.tags-box ul { max-height: 145px; }\r\n/*.market-reports .market-reports-content p { padding-right: 0;  }*/\r\n.market-reports { padding:50px 0;   }\r\n.tags .dropdown ul.dropdown-menu { margin-top: 5px; width: 160px; }\r\n\r\n.tags .dropdown-menu.first-menu.popup.hide {\r\n    width: 43rem;\r\n    left: 0;\r\n    overflow-x: auto;\r\n    height: 46rem;\r\n    padding-right: 20px;\r\n}\r\n\r\n.selected-item{\r\n    margin: 1px 0;\r\n    width: 108px;\r\n    border: 1px solid #21c2a6;\r\n    padding: 0px 0px 0px 0px;\r\n    margin-left: 3px;\r\n    height: 24px;\r\n}\r\n\r\n.selected-item span{\r\n   margin-left: 1px;\r\n   margin-top: 1px;\r\n   font-size: 11px;\r\n}\r\n\r\n.selected-item a.cross{\r\n   top: 1px;\r\n}\r\n\r\n.selected-item i svg{\r\n   height: 18px;\r\n   width: 17px;\r\n}\r\nbutton.selected-item .fa {\r\n    font-size: 16px;\r\n    margin-right: 4px;\r\n}\r\n.market-reports[_ngcontent-c3] .market-reports-content[_ngcontent-c3] {\r\n    padding-left: 16px;\r\n}\r\n\r\n}\r\n@media only screen and (max-width:640px){\r\n.banner p.banner-description{ padding:0; font-size: 16px; }\r\n.custom-ul.dropdown-menu { width: 330px !important; }\r\n.div-overlap ul li { width: 50%; }\r\n.checkboxFive label { line-height: 15px; padding-left: 25px; margin-bottom: 10px; }\r\n.tags .dropdown-menu.first-menu.popup.hide { width: 200px; height: 300px; left: 0; -webkit-columns: inherit; columns: inherit; overflow-y: scroll; overflow-x: hidden; }\r\n.market-reports .absorption-chart { padding: 30px 0 25px; }\r\n}\r\n@media only screen and (max-width:480px){\r\n#mapCountainerId { height: 57rem; }\r\n.content .map-section { height: 570px; }\r\n.custom-ul.dropdown-menu { width: 100% !important; }\r\na#dropdownBasic2 { width: 330px !important; }\r\n.map-section-content { padding: 0 5px; top: 10px; }\r\n.tags ul.nav-navtags>li { margin-bottom: 5px; }\r\n.tags .dropdown>a { font-size: 10px; width: 100%; padding: 5px; }\r\n.div-overlap ul li .img-item a span { font-size: 12px; }\r\n.map-section button.view { top:5px; margin-bottom:5px; padding: 4px 8px; font-size: 12px; letter-spacing: 1px; }\r\n.checkboxFive label { line-height: 18px; margin-bottom: 10px; font-size: 12px; }\r\n.market-reports-chart-footer a.view-neighbour { padding: 12px; font-size: 14px; letter-spacing: 1px; }\r\n.market-reports .market-reports-chart { height: 200px; }\r\n\r\n}\r\n@media only screen and (max-width:366px){\r\na#dropdownBasic2 { width: 160px !important; }\r\n}\r\n@media only screen and (max-height:568px){\r\n.banner { padding: 100px 0 0; }\r\n}\r\n\r\n\r\n\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/content/content.component.html":
/***/ (function(module, exports) {

module.exports = "<section id=\"main\" class=\"main\">\n      <div class=\"banner\">\n          <div class=\"container\">\n              <div class=\"banner-image\">\n\n                  <img src=\"assets/images/logo-lg.png\" alt=\"Logo Large\">\n              </div>\n              <p class=\"banner-description\">Is the premier resource for New York new comers and seasoned locals to get the most recent news about Neighborhoods and Real Estate. Use the interactive map in the Neighborhoods section to get details on New York'sbreadth of stores\n                  and attractions.</p>\n              <a simplePageScroll routerLink=\"/\" (click)=\"goToMapSection();\" class=\"discover-more-btn\">Discover More</a>\n          </div>\n      </div>\n      <a simplePageScroll routerLink=\"/\" (click)=\"goToMapSection();\" class=\"down-nav-btn\"><img src=\"assets/images/down-nav-btn.png\" alt=\"\"></a>\n</section>\n\n<!-- Content section Starts Here  -->\n  <div class=\"content\">\n    <section #map_section id=\"map_section\" class=\"map-section\">\n\n        <div class=\"my-container\">\n            <ngx-loading [show]=\"loading\" [config]=\"{ backdropBorderRadius: '14px' }\"></ngx-loading>\n        </div>\n\n        <div class=\"map-section-content\">\n            <div class=\"tags\">\n                <ul class=\"nav-navtags\">\n                    <li class=\"dropdown\">\n                        <div ngbDropdown>\n                            <a class=\"dropdown-toggle\" id=\"dropdownConfig\" ngbDropdownToggle>\n                              {{selectedNYBorough}}\n                              <span class=\"pull-right\"><img src=\"assets/images/chev-right.png\" alt=\"\"></span>\n                            </a>\n                            <ul class=\"dropdown-menu first-menu\" ngbDropdownMenu aria-labelledby=\"dropdownConfig\">\n                                <li *ngFor=\"let nyb of NYBoroughs\" id=\"dropdownConfig\"\n                               ngbDropdownToggle (click)=\"selectNYBorough($event, nyb)\"><a>{{nyb}}</a></li>\n                            </ul> \n                        </div>\n                    </li>\n               </ul> \n                <ul class=\"nav-navtags\">\n                    <li class=\"dropdown\">\n                        <div ngbDropdown>\n                             <a class=\"dropdown-toggle\" id=\"dropdownConfig\"\n                               ngbDropdownToggle>Neighborhoods<span \n                               class=\" pull-right\"><img src=\"assets/images/chev-right.png\" alt=\"\"></span>\n                             </a>\n\n                             <ul class=\"dropdown-menu first-menu\" (click)=\"$event.stopPropagation();\" ngbDropdownMenu aria-labelledby=\"dropdownConfig\"  [class.hide]=\"removed\">\n                              <ngb-accordion #acc=\"ngbAccordion\" activeIds=\"config-panel-one\">\n                                   <ngb-panel *ngIf=\"selectedNYBorough === 'Manhattan'\" title=\"Downtown\" id=\"config-panel-one\">\n                                     <ng-template ngbPanelContent>\n                                         <div class=\"checkboxFive\">\n                                             <input type=\"checkbox\" id=\"checkboxAllDowntown\" value=\"checkboxAllDowntown\" [(ngModel)]=\"checkboxAllDowntown\" (change)=\"checkAllDowntown($event);\"/>\n                                             <label for=\"checkboxAllDowntown\">All Downtown</label>\n                                         </div>\n                                         <div class=\"checkboxFive\" *ngFor=\"let dt of allDowntown; let i=index\" (mouseenter)=\"fetchNeighborOnHovor(dt.name);\" (mouseleave)=\"neighborMouseleave();\">\n                                             <input type=\"checkbox\" id=\"checkboxAllDowntown+{{i}}\" [disabled]=\"checkboxAllDowntown\" value=\"dt.id\" [(ngModel)]=\"dt.status\" (change)=\"addNeighborhoods();\"/>\n                                             <label for=\"checkboxAllDowntown+{{i}}\">{{dt.name}}</label>\n                                         </div>\n                                     </ng-template>\n                                   </ngb-panel>\n                                   \n                                   <ngb-panel *ngIf=\"selectedNYBorough === 'Manhattan'\" title=\"Midtown\">\n                                     <ng-template ngbPanelContent>\n                                      <div class=\"checkboxFive\">\n                                          <input type=\"checkbox\" id=\"checkboxAllMidtown\" [(ngModel)]=\"checkboxAllMidtown\" (change)=\"checkAllMidtown($event);\"/>\n                                          <label for=\"checkboxAllMidtown\">All Midtown</label>\n                                      </div>\n                                      <div class=\"checkboxFive\" *ngFor=\"let mt of allMidtown; let i=index\" (mouseenter)=\"fetchNeighborOnHovor(mt.name);\" (mouseleave)=\"neighborMouseleave();\">\n                                           <input type=\"checkbox\" id=\"checkboxAllMidtown+{{i}}\" [disabled]=\"checkboxAllMidtown\" value=\"mt.id\" [(ngModel)]=\"mt.status\" (change)=\"addNeighborhoods();\"/>\n                                           <label for=\"checkboxAllMidtown+{{i}}\">{{mt.name}}</label>\n                                       </div>\n                                     </ng-template>\n                                   </ngb-panel>\n\n                                   <ngb-panel *ngIf=\"selectedNYBorough === 'Manhattan'\" title=\"Upper East Side\">\n                                     <ng-template ngbPanelContent>\n                                      <div class=\"checkboxFive\">\n                                          <input type=\"checkbox\" id=\"checkboxAllUpperEastSide\" [(ngModel)]=\"checkboxAllUpperEastSide\" (change)=\"checkAllUpperEastSide($event);\"/>\n                                          <label for=\"checkboxAllUpperEastSide\">All Upper East Side</label>\n                                      </div>\n                                      <div class=\"checkboxFive\" *ngFor=\"let ues of allUpperEastSide; let i=index\" (mouseenter)=\"fetchNeighborOnHovor(ues.name);\" (mouseleave)=\"neighborMouseleave();\"> \n                                           <input type=\"checkbox\" id=\"checkboxAllUpperEastSide+{{i}}\"[disabled]=\"checkboxAllUpperEastSide\" value=\"ues.id\" [(ngModel)]=\"ues.status\" (change)=\"addNeighborhoods();\"/>\n                                           <label for=\"checkboxAllUpperEastSide+{{i}}\">{{ues.name}}</label>\n                                       </div>\n                                     </ng-template>\n                                   </ngb-panel>\n\n                                   <ngb-panel *ngIf=\"selectedNYBorough === 'Manhattan'\" title=\"Upper West Side\">\n                                     <ng-template ngbPanelContent>\n                                      <div class=\"checkboxFive\">\n                                          <input type=\"checkbox\" id=\"checkboxAllUppeWest\" [(ngModel)]=\"checkboxAllUppeWest\" (change)=\"checkAllUppeWest($event);\"/>\n                                          <label for=\"checkboxAllUppeWest\">All Upper West</label>\n                                      </div>\n                                      <div class=\"checkboxFive\" *ngFor=\"let uws of allUppeWest; let i=index\" (mouseenter)=\"fetchNeighborOnHovor(uws.name);\" (mouseleave)=\"neighborMouseleave();\">\n                                           <input type=\"checkbox\" id=\"checkboxAllUppeWest+{{i}}\" [disabled]=\"checkboxAllUppeWest\" value=\"uws.id\" [(ngModel)]=\"uws.status\" (change)=\"addNeighborhoods();\"/>\n                                           <label for=\"checkboxAllUppeWest+{{i}}\">{{uws.name}}</label>\n                                       </div>\n                                     </ng-template>\n                                   </ngb-panel>\n\n                                   <ngb-panel *ngIf=\"selectedNYBorough === 'Manhattan'\" title=\"All Upper Manhattan\">\n                                     <ng-template ngbPanelContent>\n                                      <div class=\"checkboxFive\">\n                                          <input type=\"checkbox\" id=\"checkboxAllUpperManhattan\" [(ngModel)]=\"checkboxAllUpperManhattan\" (change)=\"checkallApperManhattan($event);\"/>\n                                          <label for=\"checkboxAllUpperManhattan\">All Upper Manhattan</label>\n                                      </div>\n                                      <div class=\"checkboxFive\" *ngFor=\"let um of allUpperManhattan; let i=index\" (mouseenter)=\"fetchNeighborOnHovor(um.name);\" (mouseleave)=\"neighborMouseleave();\">\n                                           <input type=\"checkbox\" id=\"checkboxAllUpperManhattan+{{i}}\" [disabled]=\"checkboxAllUpperManhattan\" value=\"um.id\" [(ngModel)]=\"um.status\" (change)=\"addNeighborhoods();\"/>\n                                           <label for=\"checkboxAllUpperManhattan+{{i}}\">{{um.name}}</label>\n                                       </div>\n                                     </ng-template>\n                                   </ngb-panel>\n\n                                   <ngb-panel *ngIf=\"selectedNYBorough === 'Brooklyn'\" title=\"Brooklyn\">\n                                     <ng-template ngbPanelContent>\n                                        <div class=\"checkboxFive\">\n                                            <input type=\"checkbox\" id=\"checkboxAllBrooklyn\" [(ngModel)]=\"checkboxAllBrooklyn\" (change)=\"checkAllBrooklyn($event);\"/>\n                                            <label for=\"checkboxAllBrooklyn\">All Brooklyn</label>\n                                        </div>\n                                        <div class=\"checkboxFive\" *ngFor=\"let br of allBrooklyn; let i=index\" (mouseenter)=\"fetchNeighborOnHovor(br.name);\" (mouseleave)=\"neighborMouseleave();\">\n                                             <input type=\"checkbox\" id=\"checkboxAllBrooklyn+{{i}}\" [disabled]=\"checkboxAllBrooklyn\" value=\"br.id\" [(ngModel)]=\"br.status\" (change)=\"addNeighborhoods();\"/>\n                                             <label for=\"checkboxAllBrooklyn+{{i}}\">{{br.name}}</label>\n                                         </div>\n                                     </ng-template>\n                                   </ngb-panel>\n                                 </ngb-accordion> \n                                 <button (click)=\"clicked($event)\"  class=\"btn view\" >View All</button>\n                             </ul> \n\n                             \n                             <ul class=\"dropdown-menu first-menu hide\" (click)=\"$event.stopPropagation();\" ngbDropdownMenu aria-labelledby=\"dropdownConfig\"  [class.popup]=\"removed\">\n                                <li *ngIf=\"selectedNYBorough === 'Manhattan'\" class=\"grid-outer\">\n                                    \n                                    <div class=\"checkboxFive\">\n                                        <input type=\"checkbox\" id=\"checkboxAllDowntown\" value=\"checkboxAllDowntown\" [(ngModel)]=\"checkboxAllDowntown\" (change)=\"checkAllDowntown($event);\"/>\n                                        <label for=\"checkboxAllDowntown\"><b>All Downtown</b></label>\n                                    </div>\n                                    <div class=\"checkboxFive\" *ngFor=\"let dt of allDowntown; let i=index\" (mouseenter)=\"fetchNeighborOnHovor(dt.name);\" (mouseleave)=\"neighborMouseleave();\">\n                                        <input type=\"checkbox\" id=\"checkboxAllDowntown+{{i}}\" [disabled]=\"checkboxAllDowntown\" value=\"dt.id\" [(ngModel)]=\"dt.status\" (change)=\"addNeighborhoods();\"/>\n                                        <label for=\"checkboxAllDowntown+{{i}}\">{{dt.name}}</label>\n                                    </div>\n\n                                    <div class=\"checkboxFive\">\n                                        <input type=\"checkbox\" id=\"checkboxAllMidtown\" [(ngModel)]=\"checkboxAllMidtown\" (change)=\"checkAllMidtown($event);\"/>\n                                        <label for=\"checkboxAllMidtown\"><b>All Midtown</b></label>\n                                    </div>\n                                    <div class=\"checkboxFive\" *ngFor=\"let mt of allMidtown; let i=index\" (mouseenter)=\"fetchNeighborOnHovor(mt.name);\" (mouseleave)=\"neighborMouseleave();\">\n                                         <input type=\"checkbox\" id=\"checkboxAllMidtown+{{i}}\" [disabled]=\"checkboxAllMidtown\" value=\"mt.id\" [(ngModel)]=\"mt.status\" (change)=\"addNeighborhoods();\"/>\n                                         <label for=\"checkboxAllMidtown+{{i}}\">{{mt.name}}</label>\n                                     </div>\n\n                                     <div class=\"checkboxFive\">\n                                         <input type=\"checkbox\" id=\"checkboxAllUpperEastSide\" [(ngModel)]=\"checkboxAllUpperEastSide\" (change)=\"checkAllUpperEastSide($event);\"/>\n                                         <label for=\"checkboxAllUpperEastSide\"><b>All Upper East Side</b></label>\n                                     </div>\n                                     <div class=\"checkboxFive\" *ngFor=\"let ues of allUpperEastSide; let i=index\" (mouseenter)=\"fetchNeighborOnHovor(ues.name);\" (mouseleave)=\"neighborMouseleave();\">\n                                          <input type=\"checkbox\" id=\"checkboxAllUpperEastSide+{{i}}\" [disabled]=\"checkboxAllUpperEastSide\" value=\"ues.id\" [(ngModel)]=\"ues.status\" (change)=\"addNeighborhoods();\"/>\n                                          <label for=\"checkboxAllUpperEastSide+{{i}}\">{{ues.name}}</label>\n                                      </div>\n\n                                      <div class=\"checkboxFive\">\n                                          <input type=\"checkbox\" id=\"checkboxAllUppeWest\" [(ngModel)]=\"checkboxAllUppeWest\" (change)=\"checkAllUppeWest($event);\"/>\n                                          <label for=\"checkboxAllUppeWest\"><b>All Upper West</b></label>\n                                      </div>\n                                      <div class=\"checkboxFive\" *ngFor=\"let uws of allUppeWest; let i=index\" (mouseenter)=\"fetchNeighborOnHovor(uws.name);\" (mouseleave)=\"neighborMouseleave();\">\n                                           <input type=\"checkbox\" id=\"checkboxAllUppeWest+{{i}}\" [disabled]=\"checkboxAllUppeWest\" value=\"uws.id\" [(ngModel)]=\"uws.status\" (change)=\"addNeighborhoods();\"/>\n                                           <label for=\"checkboxAllUppeWest+{{i}}\">{{uws.name}}</label>\n                                       </div>\n\n                                       <div class=\"checkboxFive\">\n                                           <input type=\"checkbox\" id=\"checkboxAllUpperManhattan\" [(ngModel)]=\"checkboxAllUpperManhattan\" (change)=\"checkallApperManhattan($event);\"/>\n                                           <label for=\"checkboxAllUpperManhattan\"><b>All Upper Manhattan</b></label>\n                                       </div>\n                                       <div class=\"checkboxFive\" *ngFor=\"let um of allUpperManhattan; let i=index\" (mouseenter)=\"fetchNeighborOnHovor(um.name);\" (mouseleave)=\"neighborMouseleave();\">\n                                            <input type=\"checkbox\" id=\"checkboxAllUpperManhattan+{{i}}\" [disabled]=\"checkboxAllUpperManhattan\" value=\"um.id\" [(ngModel)]=\"um.status\" (change)=\"addNeighborhoods();\"/>\n                                            <label for=\"checkboxAllUpperManhattan+{{i}}\">{{um.name}}</label>\n                                        </div>\n                                  <br>                           \n                                  <button class=\"btn viewDone\" id=\"dropdownConfig\"\n                               ngbDropdownToggle>Done</button> \n                                </li>\n\n                                <li *ngIf=\"selectedNYBorough === 'Brooklyn'\" class=\"grid-outer\">\n                                    <div class=\"checkboxFive\">\n                                        <input type=\"checkbox\" id=\"checkboxAllBrooklyn\" [(ngModel)]=\"checkboxAllBrooklyn\" (change)=\"checkAllBrooklyn($event);\"/>\n                                        <label for=\"checkboxAllBrooklyn\"><b>All Brooklyn</b></label>\n                                    </div>\n                                    <div class=\"checkboxFive\" *ngFor=\"let br of allBrooklyn; let i=index\" (mouseenter)=\"fetchNeighborOnHovor(br.name);\" (mouseleave)=\"neighborMouseleave();\">\n                                         <input type=\"checkbox\" id=\"checkboxAllBrooklyn+{{i}}\" [disabled]=\"checkboxAllBrooklyn\" value=\"br.id\" [(ngModel)]=\"br.status\" (change)=\"addNeighborhoods();\"/>\n                                         <label for=\"checkboxAllBrooklyn+{{i}}\">{{br.name}}</label>\n                                     </div>      \n                                  <br>                           \n                                  <button class=\"btn viewDone\" id=\"dropdownConfig\"\n                               ngbDropdownToggle>Done</button> \n                                </li>\n                            </ul> \n                        </div>\n                    </li>\n                </ul>\n                <div class=\"tags-box\">\n                  <ul>\n                    <li *ngFor=\"let nb of selectedNeighborhoods; let i=index\" class=\"dropdown selected-tag\">\n                        <a *ngIf=\"i<4\">{{nb.name}}<span class=\"pull-right\" (click)=\"closeNeighborhoodsTags($event, i, nb);\"><img src=\"assets/images/remove-icon.png\" alt=\"\"></span></a>\n                    </li>\n                  </ul>\n               </div>\n               \n                   \n              <div class=\"div-overlap dropdown\">\n                \n                <ul class=\"nav-navtags catagories\">\n                 <li class=\"dropdown\">\n                     <div ngbDropdown>\n                         <a class=\"dropdown-toggle\" id=\"dropdownBasic2\" ngbDropdownToggle style=\"width: 100%\">\n                           Categories\n                           <span class=\"pull-right\"><img src=\"assets/images/chev-right.png\" alt=\"\"></span>\n                         </a>\n                         <ul class=\"custom-ul dropdown-menu\" (click)=\"$event.stopPropagation();\" ngbDropdownMenu aria-labelledby=\"dropdownBasic2\">\n                           <li *ngFor=\"let cat of allCategories;\" [ngClass]=\"{'selected':cat.selected}\">\n                               <div class=\"img-item\">\n                                <input type=\"checkbox\" id=\"checkboxCat\" (change)=\"addRemoveCategories($event, null, cat);\">\n                                   <a>                                    \n\n                                      <i *ngIf=\"cat.name === 'Banks'\">\n                                        <svg version=\"1.1\" id=\"Layer_01\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\n                                           width=\"27px\" height=\"30px\" viewBox=\"0 0 15 12\" xml:space=\"preserve\" class=\"catIconsColor\">\n                                        <rect x=\"1.7\" y=\"4.4\" class=\"st0\" width=\"12.3\" height=\"5.6\"/>\n                                        <rect x=\"3.8\" y=\"5.6\" class=\"st0\" width=\"1.6\" height=\"0.3\"/>\n                                        <rect x=\"7.8\" y=\"8.4\" class=\"st0\" width=\"4.9\" height=\"0.4\"/>\n                                        <rect x=\"11.5\" y=\"5.6\" class=\"st0\" width=\"1.2\" height=\"0.2\"/>\n                                        </svg>\n                                      </i>\n                                      <i *ngIf=\"cat.name === 'Cafes'\">\n                                        <svg version=\"1.1\" id=\"Layer_02\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\n                                           width=\"27px\" height=\"30px\" viewBox=\"0 0 15 12\"  xml:space=\"preserve\" class=\"catIconsColor\">\n                                        \n                                        <path class=\"st0\" d=\"M6.3,11.4c-3.4,0.1-4.2-0.7-4.6-1.6c-0.4-0.9-0.6-6.3,0-6.6c0.6-0.1,4.6,0,4.6,0\"/>\n                                        <path class=\"st0\" d=\"M10.8,3.3c0,0,1.3-0.5,2,0c0.7,0.5,0.9,2,0.9,2.9c-0.1,0.9-2.5,2.5-2.5,2.5L10.8,9\"/>\n                                        <path class=\"st0\" d=\"M6,11.4c3.4,0.1,4.2-0.7,4.6-1.6c0.4-0.9,0.6-6.3,0-6.6C10,3,6,3.1,6,3.1\"/>\n                                        <line class=\"st0\" x1=\"1.3\" y1=\"5.5\" x2=\"10.8\" y2=\"5.5\"/>\n                                        </svg>\n                                      </i>\n                                      <i *ngIf=\"cat.name === 'Theatres'\">\n                                        <svg version=\"1.1\" id=\"Layer_03\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\n                                           width=\"27px\" height=\"30px\" viewBox=\"0 0 15 12\"  xml:space=\"preserve\" class=\"catIconsColor\">\n                                        \n                                        <path class=\"st0\" d=\"M6.2,5.4H0.9c0,0-0.1,4.9,0,5.5c0.1,0.7,0.7,1.7,1.9,1.9c1.2,0.2,2.4,0.1,3.2,0c0.7-0.1,1.7-1,2-2s0-2.3,0-2.3\"\n                                          />\n                                        <line class=\"st0\" x1=\"2.3\" y1=\"7.5\" x2=\"2.3\" y2=\"8.3\"/>\n                                        <line class=\"st0\" x1=\"5.4\" y1=\"7.5\" x2=\"5.4\" y2=\"8.3\"/>\n                                        <path class=\"st0\" d=\"M5.6,4.5c0,0,2.6,5,3,5.5c0.4,0.6,0.9,0.5,1.8,0.4c1-0.1,2.9-1.5,2.9-1.5s0.6-0.5,0.7-1.5s-2.7-5.8-2.7-5.8\n                                          L5.6,4.5z\"/>\n                                        <path class=\"st0\" d=\"M9.6,8.8c0,0-0.2-1.5,1-2s2.2,0.3,2.2,0.3\"/>\n                                        <line class=\"st0\" x1=\"8\" y1=\"5.4\" x2=\"8.4\" y2=\"6.1\"/>\n                                        <line class=\"st0\" x1=\"10.7\" y1=\"3.9\" x2=\"11.1\" y2=\"4.6\"/>\n                                        <path class=\"st0\" d=\"M2.6,10.2c0,0,0.5,1.4,1.8,1.3C5.8,11.3,6.2,10,6.2,10\"/>\n                                        </svg>\n                                      </i>\n                                      <i *ngIf=\"cat.name === 'Schools'\">\n                                        <svg version=\"1.1\" id=\"Layer_04\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\n                                           width=\"27px\" height=\"30px\" viewBox=\"0 0 15 12\"  xml:space=\"preserve\" class=\"catIconsColor\">\n                                       \n                                        <g>\n                                          <line class=\"st0\" x1=\"3.5\" y1=\"12.9\" x2=\"12.3\" y2=\"12.9\"/>\n                                          <line class=\"st0\" x1=\"3.5\" y1=\"12.9\" x2=\"3.5\" y2=\"7.1\"/>\n                                          <path class=\"st0\" d=\"M3.5,7.1c0-2.4,2-4.4,4.4-4.4\"/>\n                                          <line class=\"st0\" x1=\"12\" y1=\"12.9\" x2=\"12\" y2=\"7.1\"/>\n                                          <path class=\"st0\" d=\"M12,7.1c0-2.4-2-4.4-4.4-4.4\"/>\n                                          <line class=\"st0\" x1=\"5.7\" y1=\"9.1\" x2=\"10.3\" y2=\"9.1\"/>\n                                          <path class=\"st0\" d=\"M6.4,2.8c0-1.1,0.7-2,1.5-2\"/>\n                                          <path class=\"st0\" d=\"M9.4,2.8c0-1.1-0.7-2-1.5-2\"/>\n                                          <line class=\"st0\" x1=\"11.9\" y1=\"11.2\" x2=\"13.5\" y2=\"11.2\"/>\n                                          <line class=\"st0\" x1=\"13.3\" y1=\"11\" x2=\"13.3\" y2=\"6\"/>\n                                          <path class=\"st0\" d=\"M13.3,6c0-1.4-1.3-2.4-2.8-2.4\"/>\n                                          <line class=\"st0\" x1=\"3.6\" y1=\"11.2\" x2=\"2\" y2=\"11.2\"/>\n                                          <line class=\"st0\" x1=\"2.2\" y1=\"11\" x2=\"2.2\" y2=\"6\"/>\n                                          <path class=\"st0\" d=\"M2.2,6c0-1.4,1.3-2.4,2.8-2.4\"/>\n                                        </g>\n                                        </svg>\n                                      </i>\n                                      <i *ngIf=\"cat.name === 'Grocery'\">\n                                        <svg version=\"1.1\" id=\"Layer_05\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\n                                           width=\"27px\" height=\"30px\" viewBox=\"0 0 15 12\"  xml:space=\"preserve\" class=\"catIconsColor\">\n                                       \n                                        <path class=\"st0\" d=\"M13.8,4.3\"/>\n                                        <path class=\"st1\" d=\"M7.8,4.3c0,0-2.6-0.8-3.4-0.7C3.5,3.8,2.4,4.9,1.9,5.7c-0.5,0.8-0.3,4.7,0,5.5c0.3,0.8,1.3,2,2.4,2.3\n                                          c1.1,0.4,3.4,0,3.4,0\"/>\n                                        <path class=\"st1\" d=\"M7.4,4.3c0,0,2.6-0.8,3.4-0.7c0.8,0.1,1.9,1.3,2.4,2.1c0.5,0.8,0.3,4.7,0,5.5c-0.3,0.8-1.3,2-2.4,2.3\n                                          c-1.1,0.4-3.4,0-3.4,0\"/>\n                                        <line class=\"st1\" x1=\"7.4\" y1=\"4.3\" x2=\"8.8\" y2=\"1.6\"/>\n                                        </svg>\n                                      </i>\n                                      <i *ngIf=\"cat.name === 'Fitness'\">\n                                        <svg version=\"1.1\" id=\"Layer_06\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\n                                           width=\"27px\" height=\"30px\" viewBox=\"0 0 15 12\"  xml:space=\"preserve\" class=\"catIconsColor\">\n                                       \n                                        <line class=\"st0\" x1=\"1.5\" y1=\"9.6\" x2=\"14.2\" y2=\"5\"/>\n                                        <rect x=\"3.3\" y=\"6.5\" transform=\"matrix(0.9394 -0.3428 0.3428 0.9394 -2.7248 1.8855)\" class=\"st1\" width=\"1.3\" height=\"4.3\"/>\n                                        <rect x=\"2.4\" y=\"7.9\" transform=\"matrix(0.9395 -0.3426 0.3426 0.9395 -2.9498 1.4923)\" class=\"st2\" width=\"0.6\" height=\"2.3\"/>\n                                        <rect x=\"4.9\" y=\"7\" transform=\"matrix(0.9395 -0.3426 0.3426 0.9395 -2.4909 2.2854)\" class=\"st2\" width=\"0.6\" height=\"2.3\"/>\n                                        <rect x=\"11\" y=\"3.7\" transform=\"matrix(0.9394 -0.3427 0.3427 0.9394 -1.2975 4.34)\" class=\"st1\" width=\"1.3\" height=\"4.3\"/>\n                                        <rect x=\"10.1\" y=\"5.1\" transform=\"matrix(0.9393 -0.3431 0.3431 0.9393 -1.5251 3.9527)\" class=\"st2\" width=\"0.6\" height=\"2.3\"/>\n                                        <rect x=\"12.6\" y=\"4.2\" transform=\"matrix(0.9395 -0.3426 0.3426 0.9395 -1.0649 4.7393)\" class=\"st2\" width=\"0.6\" height=\"2.3\"/>\n                                        </svg>\n                                      </i>\n                                      <i *ngIf=\"cat.name === 'Healthcare'\">\n                                        <svg version=\"1.1\" id=\"Layer_07\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\n                                           width=\"27px\" height=\"30px\" viewBox=\"0 0 15 12\"  xml:space=\"preserve\" class=\"catIconsColor\">\n                                        \n                                        <path class=\"st0\" d=\"M6.2,5.8\"/>\n                                        <polyline class=\"st0\" points=\"1.2,8 3.5,8 4.3,5.8 5.1,8.3 6.1,3.2 6.8,12.2 7.9,6.6 8.7,7.7 9.6,6.1 10.3,7.7 10.3,4.3 10.8,7.3 \n                                          12.9,7.3 \"/>\n                                        </svg>\n                                      </i>\n                                      <i *ngIf=\"cat.name === 'Museum'\">\n                                        <svg version=\"1.1\" id=\"Layer_08\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\n                                           width=\"27px\" height=\"30px\" viewBox=\"0 0 15 12\"  xml:space=\"preserve\" class=\"catIconsColor\">\n                                       \n                                        <path class=\"st0\" d=\"M6.9,1.1H3v1.2c0,0-1.4-0.2-1.5,1.1s0.6,1.5,1.4,1.5c0.8,0,1-1,1-1\"/>\n                                        <polyline class=\"st0\" points=\"3.3,5.9 3.3,7 6.1,7 6.1,5.9 6.9,5.9 6.9,3.9 5.6,3.9 \"/>\n                                        <line class=\"st0\" x1=\"4.2\" y1=\"8.1\" x2=\"4.2\" y2=\"14.2\"/>\n                                        <line class=\"st0\" x1=\"6\" y1=\"8.1\" x2=\"6\" y2=\"14.2\"/>\n                                        <line class=\"st0\" x1=\"3.3\" y1=\"2.4\" x2=\"6.9\" y2=\"2.4\"/>\n                                        <path class=\"st0\" d=\"M6.9,1.1h4v1.2c0,0,1.4-0.2,1.5,1.1S11.8,4.9,11,4.9c-0.8,0-1-1-1-1\"/>\n                                        <polyline class=\"st0\" points=\"10.6,5.9 10.6,7 7.8,7 7.8,5.9 6.9,5.9 6.9,3.9 8.3,3.9 \"/>\n                                        <line class=\"st0\" x1=\"9.7\" y1=\"8.1\" x2=\"9.7\" y2=\"14.2\"/>\n                                        <line class=\"st0\" x1=\"7.8\" y1=\"8.1\" x2=\"7.8\" y2=\"14.2\"/>\n                                        <line class=\"st0\" x1=\"10.6\" y1=\"2.4\" x2=\"6.9\" y2=\"2.4\"/>\n                                        </svg>\n                                      </i>\n                                      <i *ngIf=\"cat.name === 'Parks'\">\n                                        <svg version=\"1.1\" id=\"Layer_09\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\n                                           width=\"27px\" height=\"30px\" viewBox=\"0 0 15 12\"  xml:space=\"preserve\" class=\"catIconsColor\">\n                                      \n                                        <line class=\"st0\" x1=\"4\" y1=\"13.5\" x2=\"4\" y2=\"4.7\"/>\n                                        <line class=\"st0\" x1=\"10\" y1=\"13.5\" x2=\"10\" y2=\"1.3\"/>\n                                        <line class=\"st0\" x1=\"4.1\" y1=\"4.7\" x2=\"2.7\" y2=\"6.4\"/>\n                                        <line class=\"st0\" x1=\"4\" y1=\"6.6\" x2=\"2\" y2=\"8.3\"/>\n                                        <line class=\"st0\" x1=\"4\" y1=\"8.3\" x2=\"1.8\" y2=\"10.4\"/>\n                                        <line class=\"st0\" x1=\"3.8\" y1=\"4.8\" x2=\"5.2\" y2=\"6.5\"/>\n                                        <line class=\"st0\" x1=\"3.9\" y1=\"6.6\" x2=\"5.9\" y2=\"8.4\"/>\n                                        <line class=\"st0\" x1=\"3.9\" y1=\"8.4\" x2=\"6.1\" y2=\"10.4\"/>\n                                        <line class=\"st0\" x1=\"10\" y1=\"1.6\" x2=\"8.2\" y2=\"3.9\"/>\n                                        <line class=\"st0\" x1=\"10\" y1=\"4.2\" x2=\"7.7\" y2=\"6.4\"/>\n                                        <line class=\"st0\" x1=\"10\" y1=\"6.1\" x2=\"7.1\" y2=\"9.1\"/>\n                                        <line class=\"st0\" x1=\"10\" y1=\"8.1\" x2=\"5.9\" y2=\"12.2\"/>\n                                        <line class=\"st0\" x1=\"10.1\" y1=\"1.7\" x2=\"11.9\" y2=\"4\"/>\n                                        <line class=\"st0\" x1=\"10.1\" y1=\"4.4\" x2=\"12.4\" y2=\"6.6\"/>\n                                        <line class=\"st0\" x1=\"10.1\" y1=\"6.3\" x2=\"13\" y2=\"9.3\"/>\n                                        <line class=\"st0\" x1=\"10.1\" y1=\"8.3\" x2=\"14.2\" y2=\"12.4\"/>\n                                        </svg>\n                                      </i>\n                                      <i *ngIf=\"cat.name === 'Pharmacies'\">\n                                        <svg version=\"1.1\" id=\"Layer_010\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\n                                           width=\"27px\" height=\"30px\" viewBox=\"0 0 15 12\"  xml:space=\"preserve\" class=\"catIconsColor\">\n                                       \n                                        <polygon class=\"st0\" points=\"5.2,7.8 9.6,2.9 10.4,3.7 11,4.3 6.7,8.9 5.2,9.3 \"/>\n                                        <line class=\"st1\" x1=\"5.2\" y1=\"9.3\" x2=\"2.6\" y2=\"12.4\"/>\n                                        <line class=\"st0\" x1=\"10.4\" y1=\"3.7\" x2=\"11.7\" y2=\"2.1\"/>\n                                        <line class=\"st0\" x1=\"11\" y1=\"1.1\" x2=\"12.7\" y2=\"2.9\"/>\n                                        <line class=\"st0\" x1=\"6.1\" y1=\"6.8\" x2=\"6.8\" y2=\"7.4\"/>\n                                        <line class=\"st0\" x1=\"7.1\" y1=\"5.7\" x2=\"7.7\" y2=\"6.3\"/>\n                                        <line class=\"st0\" x1=\"8.2\" y1=\"4.5\" x2=\"8.7\" y2=\"4.9\"/>\n                                        </svg>\n                                      </i>\n                                      <i *ngIf=\"cat.name === 'Restaurants'\">\n                                        <svg version=\"1.1\" id=\"Layer_011\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\n                                           width=\"27px\" height=\"30px\" viewBox=\"0 0 15 12\" xml:space=\"preserve\" class=\"catIconsColor\">\n                                       \n                                        <path class=\"st0\" d=\"M7.6,11.8c0,0-2.2,0-2.9,0c-0.7,0-1.2-1-1.9-1.5C2.2,9.8-0.3,8.9,0.8,8.9s6.9,0,6.9,0\"/>\n                                        <path class=\"st0\" d=\"M7.5,11.8c0,0,2,0,2.8,0c0.7,0,1.2-1,1.9-1.5c0.7-0.5,3.1-1.4,2.1-1.4c-1,0-6.7,0-6.7,0\"/>\n                                        <line class=\"st0\" x1=\"2.8\" y1=\"10.4\" x2=\"12.2\" y2=\"10.4\"/>\n                                        <path class=\"st0\" d=\"M2.8,8.9c0,0,0.5-1.5,1.2-2.1c0.7-0.6,3.5-0.5,3.5-0.5\"/>\n                                        <path class=\"st0\" d=\"M11.8,8.9c0,0-0.5-1.5-1.2-2.1C9.9,6.1,7.1,6.2,7.1,6.2\"/>\n                                        <path class=\"st0\" d=\"M6.2,7.1c0,0-0.9-1.4-1-1.7C5,5.2,6.8,4.7,7.1,4.4c0.4-0.4-1-0.9-1-0.9\"/>\n                                        <path class=\"st0\" d=\"M9.1,7.1c0,0-0.9-1.4-1-1.7c-0.1-0.3,1.6-0.7,2-1.1C10.4,4,9,3.5,9,3.5\"/>\n                                        </svg>\n                                      </i>\n                                      <i *ngIf=\"cat.name === 'Worship'\">\n                                        <svg version=\"1.1\" id=\"Layer_012\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\n                                           width=\"27px\" height=\"30px\" viewBox=\"0 0 15 12\"  xml:space=\"preserve\" class=\"catIconsColor\">\n                                        \n                                        <path class=\"st0\" d=\"M0.7,2\"/>\n                                        <path class=\"st0\" d=\"M7.7,9.6c0,0-1.7,0.1-1.7,0.9s0,3.6,0,3.6H1V2c0,0-0.3-1.2,0.7-1.3C3,0.8,2.6,2,2.6,2v5.8h1.7c0,0,0-0.7,0-3\n                                          c0-2.3,3.4-2.1,3.4-2.1\"/>\n                                        <path class=\"st0\" d=\"M7.6,9.6c0,0,1.6,0.1,1.6,0.9s0,3.6,0,3.6h5V2c0,0,0.3-1.2-0.7-1.3C12.2,0.8,12.6,2,12.6,2v5.8h-1.7\n                                          c0,0,0-0.7,0-3c0-2.3-3.3-2.1-3.3-2.1\"/>\n                                        <line class=\"st0\" x1=\"4.3\" y1=\"6.1\" x2=\"10.9\" y2=\"6.1\"/>\n                                        <line class=\"st0\" x1=\"0.9\" y1=\"8\" x2=\"14.3\" y2=\"8\"/>\n                                        <rect x=\"2.4\" y=\"10.1\" class=\"st0\" width=\"2.1\" height=\"2.3\"/>\n                                        <rect x=\"10.6\" y=\"10.1\" class=\"st0\" width=\"2.1\" height=\"2.3\"/>\n                                        <line class=\"st1\" x1=\"1.8\" y1=\"2.8\" x2=\"1.8\" y2=\"0.9\"/>\n                                        <line class=\"st1\" x1=\"13.4\" y1=\"2.8\" x2=\"13.4\" y2=\"0.9\"/>\n                                        </svg>\n                                      </i>\n                                      <i *ngIf=\"cat.name === 'Daycare'\">\n                                        <svg version=\"1.1\" id=\"Layer_013\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\n                                           width=\"27px\" height=\"30px\" viewBox=\"0 0 15 12\"  xml:space=\"preserve\" class=\"catIconsColor\">\n                                        \n                                        <path class=\"st0\" d=\"M8.7,9.9c0,1.1-0.6,1.9-1.2,1.9S6.3,11,6.3,9.9S6.8,8,7.5,8S8.7,8.9,8.7,9.9z\"/>\n                                        <path class=\"st0\" d=\"M6.8,4.2c0,0.2-0.1,0.3-0.3,0.3S6.3,4.4,6.3,4.2c0-0.2,0.1-0.3,0.3-0.3S6.8,4.1,6.8,4.2z\"/>\n                                        <path class=\"st0\" d=\"M8.6,4.2c0,0.2-0.1,0.3-0.3,0.3C8.1,4.5,8,4.4,8,4.2c0-0.2,0.1-0.3,0.3-0.3C8.4,3.9,8.6,4.1,8.6,4.2z\"/>\n                                        <path class=\"st0\" d=\"M7.4,1.9H6.5c0,0-0.7-0.8-1.2-0.9C4.8,1,4.2,1.5,4,1.9c-0.2,0.4,0.4,1.9,0.7,2C5,4.1,5.2,6.1,5.2,6.1\n                                          S5.3,7,5,7.1C4.7,7.3,3.8,7.3,3.6,7.7c-0.2,0.5,0,1,0,1s0.8,0.5,1,0.9c0.1,0.4,0.1,1.6,0.1,1.8c-0.1,0.3-0.7,0.2-1,0.5\n                                          S3.2,13,3.5,13.2c0.3,0.3,0.4,0.6,0.8,0.8c0.4,0.2,0.7,0.2,1.2,0c0.5-0.2,0.3-0.6,0.5-0.7c0.1-0.1,0.9,0.1,1.6,0.1\"/>\n                                        <path class=\"st0\" d=\"M7.4,1.9h0.9c0,0,0.7-0.8,1.2-0.9c0.5,0,1.1,0.5,1.3,0.9c0.2,0.4-0.4,1.9-0.7,2C9.9,4.1,9.7,6.1,9.7,6.1\n                                          S9.6,7,9.9,7.1c0.3,0.2,1.2,0.2,1.4,0.6s0,1,0,1s-0.8,0.5-1,0.9c-0.1,0.4-0.1,1.6-0.1,1.8c0.1,0.3,0.7,0.2,1,0.5s0.4,1.1,0.1,1.3\n                                          c-0.3,0.3-0.4,0.6-0.8,0.8c-0.4,0.2-0.7,0.2-1.2,0C9,13.9,9.1,13.5,9,13.3c-0.1-0.1-0.8,0.1-1.5,0.1\"/>\n                                        </svg>\n                                      </i>\n                                      <i *ngIf=\"cat.name === 'New Developments'\">\n                                        <svg version=\"1.1\" id=\"Layer_014\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\n                                           width=\"27px\" height=\"30px\" viewBox=\"0 0 15 12\"  xml:space=\"preserve\" class=\"catIconsColor\">\n                                        \n                                        <rect x=\"1.3\" y=\"0.9\" class=\"st0\" width=\"4.5\" height=\"13.1\"/>\n                                        <rect x=\"6\" y=\"5.3\" class=\"st0\" width=\"6.6\" height=\"8.8\"/>\n                                        <rect x=\"2.4\" y=\"2.1\" class=\"st0\" width=\"0\" height=\"0.9\"/>\n                                        <rect x=\"2.4\" y=\"4\" class=\"st0\" width=\"0\" height=\"0.9\"/>\n                                        <rect x=\"2.4\" y=\"6.1\" class=\"st0\" width=\"0\" height=\"0.9\"/>\n                                        <rect x=\"2.4\" y=\"7.9\" class=\"st0\" width=\"0\" height=\"0.9\"/>\n                                        <rect x=\"2.4\" y=\"9.8\" class=\"st0\" width=\"0\" height=\"0.9\"/>\n                                        <rect x=\"2.4\" y=\"11.7\" class=\"st0\" width=\"0\" height=\"0.9\"/>\n                                        <rect x=\"4.6\" y=\"2.1\" class=\"st0\" width=\"0\" height=\"0.9\"/>\n                                        <rect x=\"4.6\" y=\"4\" class=\"st0\" width=\"0\" height=\"0.9\"/>\n                                        <rect x=\"4.6\" y=\"6.1\" class=\"st0\" width=\"0\" height=\"0.9\"/>\n                                        <rect x=\"4.6\" y=\"7.9\" class=\"st0\" width=\"0\" height=\"0.9\"/>\n                                        <rect x=\"4.6\" y=\"9.8\" class=\"st0\" width=\"0\" height=\"0.9\"/>\n                                        <rect x=\"4.6\" y=\"11.7\" class=\"st0\" width=\"0\" height=\"0.9\"/>\n                                        <rect x=\"7.1\" y=\"6.1\" class=\"st0\" width=\"0\" height=\"0.9\"/>\n                                        <rect x=\"7.1\" y=\"7.9\" class=\"st0\" width=\"0\" height=\"0.9\"/>\n                                        <rect x=\"7.1\" y=\"9.8\" class=\"st0\" width=\"0\" height=\"0.9\"/>\n                                        <rect x=\"7.1\" y=\"11.7\" class=\"st0\" width=\"0\" height=\"0.9\"/>\n                                        <rect x=\"9.3\" y=\"6.1\" class=\"st0\" width=\"0\" height=\"0.9\"/>\n                                        <rect x=\"9.3\" y=\"7.9\" class=\"st0\" width=\"0\" height=\"0.9\"/>\n                                        <rect x=\"9.3\" y=\"9.8\" class=\"st0\" width=\"0\" height=\"0.9\"/>\n                                        <rect x=\"9.3\" y=\"11.7\" class=\"st0\" width=\"0\" height=\"0.9\"/>\n                                        <rect x=\"11.2\" y=\"6.1\" class=\"st0\" width=\"0\" height=\"0.9\"/>\n                                        <rect x=\"11.2\" y=\"7.9\" class=\"st0\" width=\"0\" height=\"0.9\"/>\n                                        <rect x=\"11.2\" y=\"9.8\" class=\"st0\" width=\"0\" height=\"0.9\"/>\n                                        <rect x=\"11.2\" y=\"11.7\" class=\"st0\" width=\"0\" height=\"0.9\"/>\n                                        </svg>\n                                      </i>\n                                      <i *ngIf=\"cat.name === 'University'\">\n                                        <svg version=\"1.1\" id=\"Layer_015\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\n                                          width=\"27px\" height=\"30px\" viewBox=\"0 0 15 12\"  xml:space=\"preserve\" class=\"catIconsColor\">\n                                        \n                                        <line class=\"st0\" x1=\"0.4\" y1=\"5.6\" x2=\"7.7\" y2=\"1.9\"/>\n                                        <line class=\"st0\" x1=\"13.4\" y1=\"6.1\" x2=\"13.4\" y2=\"10.9\"/>\n                                        <line class=\"st0\" x1=\"3.4\" y1=\"7.1\" x2=\"3.4\" y2=\"11.4\"/>\n                                        <line class=\"st0\" x1=\"11.7\" y1=\"7.1\" x2=\"11.7\" y2=\"11.4\"/>\n                                        <path class=\"st0\" d=\"M3.4,11.1c0,1,0.8,1.8,1.7,1.8\"/>\n                                        <path class=\"st0\" d=\"M11.7,11.1c0,1-0.8,1.8-1.7,1.8\"/>\n                                        <line class=\"st0\" x1=\"4.8\" y1=\"12.9\" x2=\"10.4\" y2=\"12.9\"/>\n                                        <line class=\"st0\" x1=\"14.7\" y1=\"5.6\" x2=\"7.4\" y2=\"1.9\"/>\n                                        <line class=\"st0\" x1=\"0.4\" y1=\"5.4\" x2=\"7.7\" y2=\"9.1\"/>\n                                        <line class=\"st0\" x1=\"14.7\" y1=\"5.4\" x2=\"7.4\" y2=\"9.1\"/>\n                                        </svg>\n                                      </i>\n                                      <i *ngIf=\"cat.name === 'NYPD'\">\n                                       <svg version=\"1.1\" id=\"Layer_016\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\n                                         width=\"27px\" height=\"30px\" viewBox=\"0 0 15 12\"  xml:space=\"preserve\" class=\"catIconsColor\">\n                                       \n                                       <polygon class=\"st0\" points=\"7.5,2.2 9.1,5.5 12.8,6 10.1,8.6 10.8,12.3 7.5,10.6 4.2,12.3 4.8,8.6 2.1,6 5.8,5.5 \"/>\n                                       <path class=\"st0\" d=\"M8,1.3c0,0.3-0.2,0.6-0.6,0.6c-0.3,0-0.6-0.2-0.6-0.6c0-0.3,0.2-0.6,0.6-0.6C7.8,0.8,8,1,8,1.3z\"/>\n                                       <path class=\"st0\" d=\"M14.1,5.9c0,0.3-0.2,0.6-0.6,0.6c-0.3,0-0.6-0.2-0.6-0.6c0-0.3,0.2-0.6,0.6-0.6C13.8,5.4,14.1,5.6,14.1,5.9z\"/>\n                                       <path class=\"st0\" d=\"M1.9,5.9c0,0.3-0.2,0.6-0.6,0.6c-0.3,0-0.6-0.2-0.6-0.6c0-0.3,0.2-0.6,0.6-0.6C1.7,5.4,1.9,5.6,1.9,5.9z\"/>\n                                       <path class=\"st0\" d=\"M11.8,13c0,0.3-0.2,0.6-0.6,0.6c-0.3,0-0.6-0.2-0.6-0.6c0-0.3,0.2-0.6,0.6-0.6C11.6,12.5,11.8,12.7,11.8,13z\"/>\n                                       <path class=\"st0\" d=\"M4.3,13c0,0.3-0.2,0.6-0.6,0.6c-0.3,0-0.6-0.2-0.6-0.6c0-0.3,0.2-0.6,0.6-0.6C4.1,12.5,4.3,12.7,4.3,13z\"/>\n                                       </svg>\n                                      </i>\n                                      <span>{{cat.name}}</span> \n                                   </a>\n                               </div>\n                           </li>\n                        </ul>\n                     </div>\n                 </li>\n               </ul>\n            </div>\n            </div>\n\n            <div class=\"tags\">\n                 <button *ngFor=\"let cat of selectedCategories; let i=index\" type=\"button\" id=\"{{cat}}\" class=\"selected-item btn btn-primary btn-sm\" (click)=\"selectBtnCatList(cat)\" [ngClass]=\"{active: isActive(cat)}\">\n                  <!-- <i class=\"fa fa-glass\" aria-hidden=\"true\"></i> -->\n                 <i *ngIf=\"cat === 'Banks'\">\n                    <svg version=\"1.1\" id=\"Layer_11\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\n                       width=\"27px\" height=\"30px\" viewBox=\"0 0 15 12\"  xml:space=\"preserve\" class=\"catIconsColorSelected\">\n                   \n                    <rect x=\"1.7\" y=\"4.4\" class=\"st0\" width=\"12.3\" height=\"5.6\"/>\n                    <rect x=\"3.8\" y=\"5.6\" class=\"st0\" width=\"1.6\" height=\"0.3\"/>\n                    <rect x=\"7.8\" y=\"8.4\" class=\"st0\" width=\"4.9\" height=\"0.4\"/>\n                    <rect x=\"11.5\" y=\"5.6\" class=\"st0\" width=\"1.2\" height=\"0.2\"/>\n                    </svg>\n                  </i>\n                  <i *ngIf=\"cat === 'Cafes'\">\n                    <svg version=\"1.1\" id=\"Layer_12\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\n                       width=\"27px\" height=\"30px\" viewBox=\"0 0 15 12\"  xml:space=\"preserve\" class=\"catIconsColorSelected\">\n                  \n                    <path class=\"st0\" d=\"M6.3,11.4c-3.4,0.1-4.2-0.7-4.6-1.6c-0.4-0.9-0.6-6.3,0-6.6c0.6-0.1,4.6,0,4.6,0\"/>\n                    <path class=\"st0\" d=\"M10.8,3.3c0,0,1.3-0.5,2,0c0.7,0.5,0.9,2,0.9,2.9c-0.1,0.9-2.5,2.5-2.5,2.5L10.8,9\"/>\n                    <path class=\"st0\" d=\"M6,11.4c3.4,0.1,4.2-0.7,4.6-1.6c0.4-0.9,0.6-6.3,0-6.6C10,3,6,3.1,6,3.1\"/>\n                    <line class=\"st0\" x1=\"1.3\" y1=\"5.5\" x2=\"10.8\" y2=\"5.5\"/>\n                    </svg>\n                  </i>\n                  <i *ngIf=\"cat === 'Theatres'\">\n                    <svg version=\"1.1\" id=\"Layer_13\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\n                       width=\"27px\" height=\"30px\" viewBox=\"0 0 15 12\"  xml:space=\"preserve\" class=\"catIconsColorSelected\">\n                    \n                    <path class=\"st0\" d=\"M6.2,5.4H0.9c0,0-0.1,4.9,0,5.5c0.1,0.7,0.7,1.7,1.9,1.9c1.2,0.2,2.4,0.1,3.2,0c0.7-0.1,1.7-1,2-2s0-2.3,0-2.3\"\n                      />\n                    <line class=\"st0\" x1=\"2.3\" y1=\"7.5\" x2=\"2.3\" y2=\"8.3\"/>\n                    <line class=\"st0\" x1=\"5.4\" y1=\"7.5\" x2=\"5.4\" y2=\"8.3\"/>\n                    <path class=\"st0\" d=\"M5.6,4.5c0,0,2.6,5,3,5.5c0.4,0.6,0.9,0.5,1.8,0.4c1-0.1,2.9-1.5,2.9-1.5s0.6-0.5,0.7-1.5s-2.7-5.8-2.7-5.8\n                      L5.6,4.5z\"/>\n                    <path class=\"st0\" d=\"M9.6,8.8c0,0-0.2-1.5,1-2s2.2,0.3,2.2,0.3\"/>\n                    <line class=\"st0\" x1=\"8\" y1=\"5.4\" x2=\"8.4\" y2=\"6.1\"/>\n                    <line class=\"st0\" x1=\"10.7\" y1=\"3.9\" x2=\"11.1\" y2=\"4.6\"/>\n                    <path class=\"st0\" d=\"M2.6,10.2c0,0,0.5,1.4,1.8,1.3C5.8,11.3,6.2,10,6.2,10\"/>\n                    </svg>\n                  </i>\n                  <i *ngIf=\"cat === 'Schools'\">\n                    <svg version=\"1.1\" id=\"Layer_14\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\n                       width=\"27px\" height=\"30px\" viewBox=\"0 0 15 12\"  xml:space=\"preserve\" class=\"catIconsColorSelected\">\n                    \n                    <g>\n                      <line class=\"st0\" x1=\"3.5\" y1=\"12.9\" x2=\"12.3\" y2=\"12.9\"/>\n                      <line class=\"st0\" x1=\"3.5\" y1=\"12.9\" x2=\"3.5\" y2=\"7.1\"/>\n                      <path class=\"st0\" d=\"M3.5,7.1c0-2.4,2-4.4,4.4-4.4\"/>\n                      <line class=\"st0\" x1=\"12\" y1=\"12.9\" x2=\"12\" y2=\"7.1\"/>\n                      <path class=\"st0\" d=\"M12,7.1c0-2.4-2-4.4-4.4-4.4\"/>\n                      <line class=\"st0\" x1=\"5.7\" y1=\"9.1\" x2=\"10.3\" y2=\"9.1\"/>\n                      <path class=\"st0\" d=\"M6.4,2.8c0-1.1,0.7-2,1.5-2\"/>\n                      <path class=\"st0\" d=\"M9.4,2.8c0-1.1-0.7-2-1.5-2\"/>\n                      <line class=\"st0\" x1=\"11.9\" y1=\"11.2\" x2=\"13.5\" y2=\"11.2\"/>\n                      <line class=\"st0\" x1=\"13.3\" y1=\"11\" x2=\"13.3\" y2=\"6\"/>\n                      <path class=\"st0\" d=\"M13.3,6c0-1.4-1.3-2.4-2.8-2.4\"/>\n                      <line class=\"st0\" x1=\"3.6\" y1=\"11.2\" x2=\"2\" y2=\"11.2\"/>\n                      <line class=\"st0\" x1=\"2.2\" y1=\"11\" x2=\"2.2\" y2=\"6\"/>\n                      <path class=\"st0\" d=\"M2.2,6c0-1.4,1.3-2.4,2.8-2.4\"/>\n                    </g>\n                    </svg>\n                  </i>\n                  <i *ngIf=\"cat === 'Grocery'\">\n                    <svg version=\"1.1\" id=\"Layer_15\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\n                       width=\"27px\" height=\"30px\" viewBox=\"0 0 15 12\"  xml:space=\"preserve\" class=\"catIconsColorSelected\">\n                    \n                    <path class=\"st0\" d=\"M13.8,4.3\"/>\n                    <path class=\"st1\" d=\"M7.8,4.3c0,0-2.6-0.8-3.4-0.7C3.5,3.8,2.4,4.9,1.9,5.7c-0.5,0.8-0.3,4.7,0,5.5c0.3,0.8,1.3,2,2.4,2.3\n                      c1.1,0.4,3.4,0,3.4,0\"/>\n                    <path class=\"st1\" d=\"M7.4,4.3c0,0,2.6-0.8,3.4-0.7c0.8,0.1,1.9,1.3,2.4,2.1c0.5,0.8,0.3,4.7,0,5.5c-0.3,0.8-1.3,2-2.4,2.3\n                      c-1.1,0.4-3.4,0-3.4,0\"/>\n                    <line class=\"st1\" x1=\"7.4\" y1=\"4.3\" x2=\"8.8\" y2=\"1.6\"/>\n                    </svg>\n                  </i>\n                  <i *ngIf=\"cat === 'Fitness'\">\n                    <svg version=\"1.1\" id=\"Layer_16\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\n                       width=\"27px\" height=\"30px\" viewBox=\"0 0 15 12\"  xml:space=\"preserve\" class=\"catIconsColorSelected\">\n                  \n                    <line class=\"st0\" x1=\"1.5\" y1=\"9.6\" x2=\"14.2\" y2=\"5\"/>\n                    <rect x=\"3.3\" y=\"6.5\" transform=\"matrix(0.9394 -0.3428 0.3428 0.9394 -2.7248 1.8855)\" class=\"st1\" width=\"1.3\" height=\"4.3\"/>\n                    <rect x=\"2.4\" y=\"7.9\" transform=\"matrix(0.9395 -0.3426 0.3426 0.9395 -2.9498 1.4923)\" class=\"st2\" width=\"0.6\" height=\"2.3\"/>\n                    <rect x=\"4.9\" y=\"7\" transform=\"matrix(0.9395 -0.3426 0.3426 0.9395 -2.4909 2.2854)\" class=\"st2\" width=\"0.6\" height=\"2.3\"/>\n                    <rect x=\"11\" y=\"3.7\" transform=\"matrix(0.9394 -0.3427 0.3427 0.9394 -1.2975 4.34)\" class=\"st1\" width=\"1.3\" height=\"4.3\"/>\n                    <rect x=\"10.1\" y=\"5.1\" transform=\"matrix(0.9393 -0.3431 0.3431 0.9393 -1.5251 3.9527)\" class=\"st2\" width=\"0.6\" height=\"2.3\"/>\n                    <rect x=\"12.6\" y=\"4.2\" transform=\"matrix(0.9395 -0.3426 0.3426 0.9395 -1.0649 4.7393)\" class=\"st2\" width=\"0.6\" height=\"2.3\"/>\n                    </svg>\n                  </i>\n                  <i *ngIf=\"cat === 'Healthcare'\">\n                    <svg version=\"1.1\" id=\"Layer_17\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\n                       width=\"27px\" height=\"30px\" viewBox=\"0 0 15 12\"  xml:space=\"preserve\">\n                    \n                    <path class=\"st0\" d=\"M6.2,5.8\"/>\n                    <polyline class=\"st0\" points=\"1.2,8 3.5,8 4.3,5.8 5.1,8.3 6.1,3.2 6.8,12.2 7.9,6.6 8.7,7.7 9.6,6.1 10.3,7.7 10.3,4.3 10.8,7.3 \n                      12.9,7.3 \"/>\n                    </svg>\n                  </i>\n                  <i *ngIf=\"cat === 'Museum'\">\n                    <svg version=\"1.1\" id=\"Layer_18\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\n                       width=\"27px\" height=\"30px\" viewBox=\"0 0 15 12\"  xml:space=\"preserve\" class=\"catIconsColorSelected\">\n                   \n                    <path class=\"st0\" d=\"M6.9,1.1H3v1.2c0,0-1.4-0.2-1.5,1.1s0.6,1.5,1.4,1.5c0.8,0,1-1,1-1\"/>\n                    <polyline class=\"st0\" points=\"3.3,5.9 3.3,7 6.1,7 6.1,5.9 6.9,5.9 6.9,3.9 5.6,3.9 \"/>\n                    <line class=\"st0\" x1=\"4.2\" y1=\"8.1\" x2=\"4.2\" y2=\"14.2\"/>\n                    <line class=\"st0\" x1=\"6\" y1=\"8.1\" x2=\"6\" y2=\"14.2\"/>\n                    <line class=\"st0\" x1=\"3.3\" y1=\"2.4\" x2=\"6.9\" y2=\"2.4\"/>\n                    <path class=\"st0\" d=\"M6.9,1.1h4v1.2c0,0,1.4-0.2,1.5,1.1S11.8,4.9,11,4.9c-0.8,0-1-1-1-1\"/>\n                    <polyline class=\"st0\" points=\"10.6,5.9 10.6,7 7.8,7 7.8,5.9 6.9,5.9 6.9,3.9 8.3,3.9 \"/>\n                    <line class=\"st0\" x1=\"9.7\" y1=\"8.1\" x2=\"9.7\" y2=\"14.2\"/>\n                    <line class=\"st0\" x1=\"7.8\" y1=\"8.1\" x2=\"7.8\" y2=\"14.2\"/>\n                    <line class=\"st0\" x1=\"10.6\" y1=\"2.4\" x2=\"6.9\" y2=\"2.4\"/>\n                    </svg>\n                  </i>\n                  <i *ngIf=\"cat === 'Parks'\">\n                    <svg version=\"1.1\" id=\"Layer_19\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\n                       width=\"27px\" height=\"30px\" viewBox=\"0 0 15 12\"  xml:space=\"preserve\" class=\"catIconsColorSelected\">\n                    \n                    <line class=\"st0\" x1=\"4\" y1=\"13.5\" x2=\"4\" y2=\"4.7\"/>\n                    <line class=\"st0\" x1=\"10\" y1=\"13.5\" x2=\"10\" y2=\"1.3\"/>\n                    <line class=\"st0\" x1=\"4.1\" y1=\"4.7\" x2=\"2.7\" y2=\"6.4\"/>\n                    <line class=\"st0\" x1=\"4\" y1=\"6.6\" x2=\"2\" y2=\"8.3\"/>\n                    <line class=\"st0\" x1=\"4\" y1=\"8.3\" x2=\"1.8\" y2=\"10.4\"/>\n                    <line class=\"st0\" x1=\"3.8\" y1=\"4.8\" x2=\"5.2\" y2=\"6.5\"/>\n                    <line class=\"st0\" x1=\"3.9\" y1=\"6.6\" x2=\"5.9\" y2=\"8.4\"/>\n                    <line class=\"st0\" x1=\"3.9\" y1=\"8.4\" x2=\"6.1\" y2=\"10.4\"/>\n                    <line class=\"st0\" x1=\"10\" y1=\"1.6\" x2=\"8.2\" y2=\"3.9\"/>\n                    <line class=\"st0\" x1=\"10\" y1=\"4.2\" x2=\"7.7\" y2=\"6.4\"/>\n                    <line class=\"st0\" x1=\"10\" y1=\"6.1\" x2=\"7.1\" y2=\"9.1\"/>\n                    <line class=\"st0\" x1=\"10\" y1=\"8.1\" x2=\"5.9\" y2=\"12.2\"/>\n                    <line class=\"st0\" x1=\"10.1\" y1=\"1.7\" x2=\"11.9\" y2=\"4\"/>\n                    <line class=\"st0\" x1=\"10.1\" y1=\"4.4\" x2=\"12.4\" y2=\"6.6\"/>\n                    <line class=\"st0\" x1=\"10.1\" y1=\"6.3\" x2=\"13\" y2=\"9.3\"/>\n                    <line class=\"st0\" x1=\"10.1\" y1=\"8.3\" x2=\"14.2\" y2=\"12.4\"/>\n                    </svg>\n                  </i>\n                  <i *ngIf=\"cat === 'Pharmacies'\">\n                    <svg version=\"1.1\" id=\"Layer_110\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\n                       width=\"27px\" height=\"30px\" viewBox=\"0 0 15 12\"  xml:space=\"preserve\" class=\"catIconsColorSelected\">\n                    \n                    <polygon class=\"st0\" points=\"5.2,7.8 9.6,2.9 10.4,3.7 11,4.3 6.7,8.9 5.2,9.3 \"/>\n                    <line class=\"st1\" x1=\"5.2\" y1=\"9.3\" x2=\"2.6\" y2=\"12.4\"/>\n                    <line class=\"st0\" x1=\"10.4\" y1=\"3.7\" x2=\"11.7\" y2=\"2.1\"/>\n                    <line class=\"st0\" x1=\"11\" y1=\"1.1\" x2=\"12.7\" y2=\"2.9\"/>\n                    <line class=\"st0\" x1=\"6.1\" y1=\"6.8\" x2=\"6.8\" y2=\"7.4\"/>\n                    <line class=\"st0\" x1=\"7.1\" y1=\"5.7\" x2=\"7.7\" y2=\"6.3\"/>\n                    <line class=\"st0\" x1=\"8.2\" y1=\"4.5\" x2=\"8.7\" y2=\"4.9\"/>\n                    </svg>\n                  </i>\n                  <i *ngIf=\"cat === 'Restaurants'\">\n                    <svg version=\"1.1\" id=\"Layer_111\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\n                       width=\"27px\" height=\"30px\" viewBox=\"0 0 15 12\"  xml:space=\"preserve\" class=\"catIconsColorSelected\">\n                    \n                    <path class=\"st0\" d=\"M7.6,11.8c0,0-2.2,0-2.9,0c-0.7,0-1.2-1-1.9-1.5C2.2,9.8-0.3,8.9,0.8,8.9s6.9,0,6.9,0\"/>\n                    <path class=\"st0\" d=\"M7.5,11.8c0,0,2,0,2.8,0c0.7,0,1.2-1,1.9-1.5c0.7-0.5,3.1-1.4,2.1-1.4c-1,0-6.7,0-6.7,0\"/>\n                    <line class=\"st0\" x1=\"2.8\" y1=\"10.4\" x2=\"12.2\" y2=\"10.4\"/>\n                    <path class=\"st0\" d=\"M2.8,8.9c0,0,0.5-1.5,1.2-2.1c0.7-0.6,3.5-0.5,3.5-0.5\"/>\n                    <path class=\"st0\" d=\"M11.8,8.9c0,0-0.5-1.5-1.2-2.1C9.9,6.1,7.1,6.2,7.1,6.2\"/>\n                    <path class=\"st0\" d=\"M6.2,7.1c0,0-0.9-1.4-1-1.7C5,5.2,6.8,4.7,7.1,4.4c0.4-0.4-1-0.9-1-0.9\"/>\n                    <path class=\"st0\" d=\"M9.1,7.1c0,0-0.9-1.4-1-1.7c-0.1-0.3,1.6-0.7,2-1.1C10.4,4,9,3.5,9,3.5\"/>\n                    </svg>\n                  </i>\n                  <i *ngIf=\"cat === 'Worship'\">\n                    <svg version=\"1.1\" id=\"Layer_112\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\n                       width=\"27px\" height=\"30px\" viewBox=\"0 0 15 12\"  xml:space=\"preserve\" class=\"catIconsColorSelected\">\n                    \n                    <path class=\"st0\" d=\"M0.7,2\"/>\n                    <path class=\"st0\" d=\"M7.7,9.6c0,0-1.7,0.1-1.7,0.9s0,3.6,0,3.6H1V2c0,0-0.3-1.2,0.7-1.3C3,0.8,2.6,2,2.6,2v5.8h1.7c0,0,0-0.7,0-3\n                      c0-2.3,3.4-2.1,3.4-2.1\"/>\n                    <path class=\"st0\" d=\"M7.6,9.6c0,0,1.6,0.1,1.6,0.9s0,3.6,0,3.6h5V2c0,0,0.3-1.2-0.7-1.3C12.2,0.8,12.6,2,12.6,2v5.8h-1.7\n                      c0,0,0-0.7,0-3c0-2.3-3.3-2.1-3.3-2.1\"/>\n                    <line class=\"st0\" x1=\"4.3\" y1=\"6.1\" x2=\"10.9\" y2=\"6.1\"/>\n                    <line class=\"st0\" x1=\"0.9\" y1=\"8\" x2=\"14.3\" y2=\"8\"/>\n                    <rect x=\"2.4\" y=\"10.1\" class=\"st0\" width=\"2.1\" height=\"2.3\"/>\n                    <rect x=\"10.6\" y=\"10.1\" class=\"st0\" width=\"2.1\" height=\"2.3\"/>\n                    <line class=\"st1\" x1=\"1.8\" y1=\"2.8\" x2=\"1.8\" y2=\"0.9\"/>\n                    <line class=\"st1\" x1=\"13.4\" y1=\"2.8\" x2=\"13.4\" y2=\"0.9\"/>\n                    </svg>\n                  </i>\n                  <i *ngIf=\"cat === 'Daycare'\">\n                    <svg version=\"1.1\" id=\"Layer_113\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\n                       width=\"27px\" height=\"30px\" viewBox=\"0 0 15 12\"  xml:space=\"preserve\" class=\"catIconsColorSelected\">\n                    \n                    <path class=\"st0\" d=\"M8.7,9.9c0,1.1-0.6,1.9-1.2,1.9S6.3,11,6.3,9.9S6.8,8,7.5,8S8.7,8.9,8.7,9.9z\"/>\n                    <path class=\"st0\" d=\"M6.8,4.2c0,0.2-0.1,0.3-0.3,0.3S6.3,4.4,6.3,4.2c0-0.2,0.1-0.3,0.3-0.3S6.8,4.1,6.8,4.2z\"/>\n                    <path class=\"st0\" d=\"M8.6,4.2c0,0.2-0.1,0.3-0.3,0.3C8.1,4.5,8,4.4,8,4.2c0-0.2,0.1-0.3,0.3-0.3C8.4,3.9,8.6,4.1,8.6,4.2z\"/>\n                    <path class=\"st0\" d=\"M7.4,1.9H6.5c0,0-0.7-0.8-1.2-0.9C4.8,1,4.2,1.5,4,1.9c-0.2,0.4,0.4,1.9,0.7,2C5,4.1,5.2,6.1,5.2,6.1\n                      S5.3,7,5,7.1C4.7,7.3,3.8,7.3,3.6,7.7c-0.2,0.5,0,1,0,1s0.8,0.5,1,0.9c0.1,0.4,0.1,1.6,0.1,1.8c-0.1,0.3-0.7,0.2-1,0.5\n                      S3.2,13,3.5,13.2c0.3,0.3,0.4,0.6,0.8,0.8c0.4,0.2,0.7,0.2,1.2,0c0.5-0.2,0.3-0.6,0.5-0.7c0.1-0.1,0.9,0.1,1.6,0.1\"/>\n                    <path class=\"st0\" d=\"M7.4,1.9h0.9c0,0,0.7-0.8,1.2-0.9c0.5,0,1.1,0.5,1.3,0.9c0.2,0.4-0.4,1.9-0.7,2C9.9,4.1,9.7,6.1,9.7,6.1\n                      S9.6,7,9.9,7.1c0.3,0.2,1.2,0.2,1.4,0.6s0,1,0,1s-0.8,0.5-1,0.9c-0.1,0.4-0.1,1.6-0.1,1.8c0.1,0.3,0.7,0.2,1,0.5s0.4,1.1,0.1,1.3\n                      c-0.3,0.3-0.4,0.6-0.8,0.8c-0.4,0.2-0.7,0.2-1.2,0C9,13.9,9.1,13.5,9,13.3c-0.1-0.1-0.8,0.1-1.5,0.1\"/>\n                    </svg>\n                  </i>\n                  <i *ngIf=\"cat === 'New Developments'\">\n                    <svg version=\"1.1\" id=\"Layer_114\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\n                       width=\"27px\" height=\"30px\" viewBox=\"0 0 15 12\"  xml:space=\"preserve\" class=\"catIconsColorSelected\">\n                    \n                    <rect x=\"1.3\" y=\"0.9\" class=\"st0\" width=\"4.5\" height=\"13.1\"/>\n                    <rect x=\"6\" y=\"5.3\" class=\"st0\" width=\"6.6\" height=\"8.8\"/>\n                    <rect x=\"2.4\" y=\"2.1\" class=\"st0\" width=\"0\" height=\"0.9\"/>\n                    <rect x=\"2.4\" y=\"4\" class=\"st0\" width=\"0\" height=\"0.9\"/>\n                    <rect x=\"2.4\" y=\"6.1\" class=\"st0\" width=\"0\" height=\"0.9\"/>\n                    <rect x=\"2.4\" y=\"7.9\" class=\"st0\" width=\"0\" height=\"0.9\"/>\n                    <rect x=\"2.4\" y=\"9.8\" class=\"st0\" width=\"0\" height=\"0.9\"/>\n                    <rect x=\"2.4\" y=\"11.7\" class=\"st0\" width=\"0\" height=\"0.9\"/>\n                    <rect x=\"4.6\" y=\"2.1\" class=\"st0\" width=\"0\" height=\"0.9\"/>\n                    <rect x=\"4.6\" y=\"4\" class=\"st0\" width=\"0\" height=\"0.9\"/>\n                    <rect x=\"4.6\" y=\"6.1\" class=\"st0\" width=\"0\" height=\"0.9\"/>\n                    <rect x=\"4.6\" y=\"7.9\" class=\"st0\" width=\"0\" height=\"0.9\"/>\n                    <rect x=\"4.6\" y=\"9.8\" class=\"st0\" width=\"0\" height=\"0.9\"/>\n                    <rect x=\"4.6\" y=\"11.7\" class=\"st0\" width=\"0\" height=\"0.9\"/>\n                    <rect x=\"7.1\" y=\"6.1\" class=\"st0\" width=\"0\" height=\"0.9\"/>\n                    <rect x=\"7.1\" y=\"7.9\" class=\"st0\" width=\"0\" height=\"0.9\"/>\n                    <rect x=\"7.1\" y=\"9.8\" class=\"st0\" width=\"0\" height=\"0.9\"/>\n                    <rect x=\"7.1\" y=\"11.7\" class=\"st0\" width=\"0\" height=\"0.9\"/>\n                    <rect x=\"9.3\" y=\"6.1\" class=\"st0\" width=\"0\" height=\"0.9\"/>\n                    <rect x=\"9.3\" y=\"7.9\" class=\"st0\" width=\"0\" height=\"0.9\"/>\n                    <rect x=\"9.3\" y=\"9.8\" class=\"st0\" width=\"0\" height=\"0.9\"/>\n                    <rect x=\"9.3\" y=\"11.7\" class=\"st0\" width=\"0\" height=\"0.9\"/>\n                    <rect x=\"11.2\" y=\"6.1\" class=\"st0\" width=\"0\" height=\"0.9\"/>\n                    <rect x=\"11.2\" y=\"7.9\" class=\"st0\" width=\"0\" height=\"0.9\"/>\n                    <rect x=\"11.2\" y=\"9.8\" class=\"st0\" width=\"0\" height=\"0.9\"/>\n                    <rect x=\"11.2\" y=\"11.7\" class=\"st0\" width=\"0\" height=\"0.9\"/>\n                    </svg>\n                  </i>\n                  <i *ngIf=\"cat === 'University'\">\n                    <svg version=\"1.1\" id=\"Layer_115\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\n                      width=\"27px\" height=\"30px\" viewBox=\"0 0 15 12\"  xml:space=\"preserve\" class=\"catIconsColorSelected\">\n                    \n                    <line class=\"st0\" x1=\"0.4\" y1=\"5.6\" x2=\"7.7\" y2=\"1.9\"/>\n                    <line class=\"st0\" x1=\"13.4\" y1=\"6.1\" x2=\"13.4\" y2=\"10.9\"/>\n                    <line class=\"st0\" x1=\"3.4\" y1=\"7.1\" x2=\"3.4\" y2=\"11.4\"/>\n                    <line class=\"st0\" x1=\"11.7\" y1=\"7.1\" x2=\"11.7\" y2=\"11.4\"/>\n                    <path class=\"st0\" d=\"M3.4,11.1c0,1,0.8,1.8,1.7,1.8\"/>\n                    <path class=\"st0\" d=\"M11.7,11.1c0,1-0.8,1.8-1.7,1.8\"/>\n                    <line class=\"st0\" x1=\"4.8\" y1=\"12.9\" x2=\"10.4\" y2=\"12.9\"/>\n                    <line class=\"st0\" x1=\"14.7\" y1=\"5.6\" x2=\"7.4\" y2=\"1.9\"/>\n                    <line class=\"st0\" x1=\"0.4\" y1=\"5.4\" x2=\"7.7\" y2=\"9.1\"/>\n                    <line class=\"st0\" x1=\"14.7\" y1=\"5.4\" x2=\"7.4\" y2=\"9.1\"/>\n                    </svg>\n                  </i>\n                  <i *ngIf=\"cat === 'NYPD'\">\n                   <svg version=\"1.1\" id=\"Layer_116\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\n                     width=\"27px\" height=\"30px\" viewBox=\"0 0 15 12\"  xml:space=\"preserve\" class=\"catIconsColorSelected\">\n                   \n                   <polygon class=\"st0\" points=\"7.5,2.2 9.1,5.5 12.8,6 10.1,8.6 10.8,12.3 7.5,10.6 4.2,12.3 4.8,8.6 2.1,6 5.8,5.5 \"/>\n                   <path class=\"st0\" d=\"M8,1.3c0,0.3-0.2,0.6-0.6,0.6c-0.3,0-0.6-0.2-0.6-0.6c0-0.3,0.2-0.6,0.6-0.6C7.8,0.8,8,1,8,1.3z\"/>\n                   <path class=\"st0\" d=\"M14.1,5.9c0,0.3-0.2,0.6-0.6,0.6c-0.3,0-0.6-0.2-0.6-0.6c0-0.3,0.2-0.6,0.6-0.6C13.8,5.4,14.1,5.6,14.1,5.9z\"/>\n                   <path class=\"st0\" d=\"M1.9,5.9c0,0.3-0.2,0.6-0.6,0.6c-0.3,0-0.6-0.2-0.6-0.6c0-0.3,0.2-0.6,0.6-0.6C1.7,5.4,1.9,5.6,1.9,5.9z\"/>\n                   <path class=\"st0\" d=\"M11.8,13c0,0.3-0.2,0.6-0.6,0.6c-0.3,0-0.6-0.2-0.6-0.6c0-0.3,0.2-0.6,0.6-0.6C11.6,12.5,11.8,12.7,11.8,13z\"/>\n                   <path class=\"st0\" d=\"M4.3,13c0,0.3-0.2,0.6-0.6,0.6c-0.3,0-0.6-0.2-0.6-0.6c0-0.3,0.2-0.6,0.6-0.6C4.1,12.5,4.3,12.7,4.3,13z\"/>\n                   </svg>\n                  </i>\n                  <span>{{cat}}</span>\n                  <a class=\"cross\" (click)=\"removeCategories($event, i, cat);\">\n                    <i class=\"fa fa-times\"></i>\n                  </a>\n                </button>\n            </div>\n        </div>\n\n        <!-- <div class=\"row\">\n          <div class=\"mapSide col-md-4 col-lg-4\">\n            \n          </div> -->\n          <!-- <div class=\"map-area col-md-8 col-lg-8\" style=\"padding-left: 0;\"> -->\n          <div class=\"map-area\">\n            <div #mapCountainer id=\"mapCountainerId\" style=\"/*height: 89rem;*/\">\n            </div>\n          </div>  \n        <!-- </div>    -->\n\n    </section>\n\n    <section #market_reports id=\"market_reports\" class=\"market-reports\">\n        <div class=\"container\">\n            <div class=\"row\">\n                <div class=\"col-md-3 col-sm-4\">\n                    <div class=\"tags\">\n                        <ul class=\"nav-navtags\">\n                            <li class=\"dropdown\">\n                                <a class=\"dropdown-toggle\" data-toggle=\"dropdown\">\n                                  {{selectedDate | date:'MMM yyyy'}} \n                                   <span class=\"date_select\" *ngIf=\"selectedDate == undefined\">Loading...</span>\n                                  <span class=\" pull-right\"><img src=\"assets/images/chev-right.png\" alt=\"\"></span>\n                                </a>\n                                <ul class=\"dropdown-menu first-menu absorptionDDStyle\">\n                                    <li *ngFor=\"let mnYr of datesOfAbsorptionData.slice().reverse()\" id=\"dropdownConfig222\"\n                                       (click)=\"getAbsorptionData($event, mnYr); selectedDateFn($event, mnYr);\"><a>{{mnYr | date:'MMM yyyy'}}</a></li>  \n                                </ul>\n                            </li>\n                        </ul>\n                    </div>\n                </div>\n                <div class=\"col-md-offset-2 col-sm-offset-2 col-md-7 col-sm-6\">\n                    <div class=\"market-reports-content\">\n                        <h2>Market Reports</h2>\n                        <h3>Absorption Rates</h3>\n                        <p>The absorption rate in the number of months it would take to sell all active listings in a given market. We have shown \n                          every month absorption rate data in chart below.\n                        </p>\n                    </div>\n                </div>\n            </div>\n\n            <div class=\"row\">\n                <div class=\"col-md-12\">\n                    <div class=\"slider\">\n                        <div class=\"market-reports-chart\">\n                            <h4 class=\"absorptionChartH4\">{{selectedDate | date:'MMM yyyy'}}</h4>\n                            <div class=\"market-reports-chart-container\">\n                                <div class=\"market-reports-chart-inner\">\n                                    <canvas id=\"market-reports-chart\" width=\"100%\" height=\"25\" ></canvas>\n                                </div>\n                            </div>\n                            <h4 class=\"noDatatoshow\" *ngIf=\"selectedDate == undefined\">Loading . . . . . . . . . . . . . . . . . . </h4>\n                        </div>\n                        <!-- <div class=\"absorption-chart\">\n                            <div class=\"absorption-chart-container\">\n                                <div class=\"absorption-chart-inner\">\n                                    <canvas id=\"absorption-chart\" width=\"100%\" height=\"25\"></canvas>\n                                </div>\n                            </div>\n                        </div> -->\n                    </div>\n\n\n                    <div class=\"market-reports-chart-footer\">\n                        <ul class=\"left\">\n                            <li><span class=\"appartments\"></span>Appartments</li>\n                            <li><span class=\"condominiums\"></span>Condominiums</li>\n                            <li><span class=\"cooperatives\"></span>Cooperatives</li>\n                        </ul>\n                        <!-- <a href=\"\" class=\"view-neighbour right\">View Neighbour</a> -->\n                        <a simplePageScroll routerLink=\"/\" (click)=\"goToMapSection();\" class=\"view-neighbour right\">View Neighborhoods</a>\n                        <div class=\"clear\"></div>\n                    </div>\n                </div>\n            </div>\n\n        </div>\n        \n    </section>\n  </div>\n   <!-- Content section Ends Here  -->"

/***/ }),

/***/ "../../../../../src/app/content/content.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContentComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_leaflet__ = __webpack_require__("../../../../leaflet/dist/leaflet-src.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_leaflet___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_leaflet__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__mapbox_leaflet_pip__ = __webpack_require__("../../../../@mapbox/leaflet-pip/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__mapbox_leaflet_pip___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__mapbox_leaflet_pip__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_chart_js__ = __webpack_require__("../../../../chart.js/src/chart.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_chart_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_chart_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__constants__ = __webpack_require__("../../../../../src/app/content/constants.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__data_service__ = __webpack_require__("../../../../../src/app/data.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};








var ContentComponent = (function () {
    // end of map owrk
    function ContentComponent(config, configs, dataService) {
        this.dataService = dataService;
        // dropdown work
        this.NYBoroughs = [];
        this.selectedNeighborhoods = [];
        this.selectedCategories = [];
        this.loading = false;
        // total = manhattan 47 and brooklyn 59 === 106
        this.allDowntown = __WEBPACK_IMPORTED_MODULE_5__constants__["a" /* C0NST */].allDowntown;
        this.allMidtown = __WEBPACK_IMPORTED_MODULE_5__constants__["a" /* C0NST */].allMidtown;
        this.allUpperEastSide = __WEBPACK_IMPORTED_MODULE_5__constants__["a" /* C0NST */].allUpperEastSide;
        this.allUppeWest = __WEBPACK_IMPORTED_MODULE_5__constants__["a" /* C0NST */].allUppeWest;
        this.allUpperManhattan = __WEBPACK_IMPORTED_MODULE_5__constants__["a" /* C0NST */].allUpperManhattan;
        this.allBrooklyn = __WEBPACK_IMPORTED_MODULE_5__constants__["a" /* C0NST */].allBrooklyn;
        // categories work
        this.allCategories = __WEBPACK_IMPORTED_MODULE_5__constants__["a" /* C0NST */].allCategories;
        this.geoJsonLayer = __WEBPACK_IMPORTED_MODULE_2_leaflet__["geoJSON"]();
        this.burrowJsonLayer = __WEBPACK_IMPORTED_MODULE_2_leaflet__["geoJSON"]();
        this.LAYER_OSM = __WEBPACK_IMPORTED_MODULE_2_leaflet__["tileLayer"]('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 18,
            attribution: 'Open Street Map'
        });
        this.options = {
            layers: [this.LAYER_OSM],
            zoom: 10,
            scrollWheelZoom: false,
            zoomControl: false,
            center: __WEBPACK_IMPORTED_MODULE_2_leaflet__["latLng"](40.8076498, -73.9243189)
        };
        this.onHovorgeoJsonLayer = __WEBPACK_IMPORTED_MODULE_2_leaflet__["geoJSON"]();
        this.selectedMarker = null;
        this.selectedMarkers = __WEBPACK_IMPORTED_MODULE_2_leaflet__["layerGroup"]();
        this.categories = [];
        // show markers on map work
        this.marker = null;
        this.markers = __WEBPACK_IMPORTED_MODULE_2_leaflet__["layerGroup"]();
        this.markerIconDeselected = null;
        this.markerIconSelected = null;
        // market report work
        this.datesOfAbsorptionData = [];
        this.marketReportsAptsData = [];
        this.marketReportsCondoData = [];
        this.marketReportsCoopData = [];
        this.removed = false;
        console.log("contents component constructor called");
        // customize default values of dropdowns used by this component tree
        config.autoClose = false;
        configs.closeOthers = true;
        configs.type = 'info';
        // for working dropdown toggling
        config.autoClose = true;
        this.selectedDataCategories = [
            {
                neighborhoods: []
            },
            {
                categories: []
            }
        ];
        this.markerIconSelected = __WEBPACK_IMPORTED_MODULE_2_leaflet__["icon"]({
            iconSize: [32, 48],
            iconAnchor: [13, 41],
            iconUrl: 'assets/images/marker-icon-green.png'
        });
    }
    ContentComponent.prototype.ngAfterViewInit = function () {
        this.map = __WEBPACK_IMPORTED_MODULE_2_leaflet__["map"](this.mapCountainer.nativeElement.id, this.options);
        __WEBPACK_IMPORTED_MODULE_2_leaflet__["control"].zoom({
            position: 'bottomright'
        }).addTo(this.map);
    };
    ;
    ContentComponent.prototype.ngOnInit = function () {
        this.NYBoroughs = ["Manhattan", "Brooklyn"];
        this.selectedNYBorough = "Select NY Boroughs";
        // market reports
        // get absorption data dates for dropdown
        this.getMonthsDropdown();
        this.marketReportsChart = document.getElementById("market-reports-chart");
        this.marketReportsChart = this.marketReportsChart.getContext('2d');
    };
    // work for Discover More button click go to map section
    ContentComponent.prototype.goToMapSection = function () {
        setTimeout(function () {
            var node = document.querySelector('#map_section');
            var headerHeight = 70;
            node.scrollIntoView(true);
            var scrolledY = window.scrollY;
            if (scrolledY) {
                window.scroll(0, scrolledY - headerHeight);
            }
        }, 400);
    };
    ;
    // select any borough to the map
    ContentComponent.prototype.selectNYBorough = function (event, borough) {
        this.selectedNYBorough = borough;
        if (borough === "Manhattan") {
            this.map.setView([40.7831, -73.9712], 12);
        }
        else if (borough === "Brooklyn") {
            this.map.setView([40.6453531, -74.0043942], 12);
        }
    };
    ;
    // neighborhoods dropdown work
    ContentComponent.prototype.checkAllDowntown = function (e) {
        if (e.target.checked) {
            for (var i = 0; i < this.allDowntown.length; i++) {
                this.allDowntown[i].status = true;
            }
        }
        else {
            for (var i = 0; i < this.allDowntown.length; i++) {
                this.allDowntown[i].status = false;
            }
        }
        this.addNeighborhoods();
    };
    ;
    ContentComponent.prototype.checkAllMidtown = function (e) {
        if (e.target.checked) {
            for (var i = 0; i < this.allMidtown.length; i++) {
                this.allMidtown[i].status = true;
            }
        }
        else {
            for (var i = 0; i < this.allMidtown.length; i++) {
                this.allMidtown[i].status = false;
            }
        }
        this.addNeighborhoods();
    };
    ;
    ContentComponent.prototype.checkAllUpperEastSide = function (e) {
        if (e.target.checked) {
            for (var i = 0; i < this.allUpperEastSide.length; i++) {
                this.allUpperEastSide[i].status = true;
            }
        }
        else {
            for (var i = 0; i < this.allUpperEastSide.length; i++) {
                this.allUpperEastSide[i].status = false;
            }
        }
        this.addNeighborhoods();
    };
    ;
    ContentComponent.prototype.checkAllUppeWest = function (e) {
        if (e.target.checked) {
            for (var i = 0; i < this.allUppeWest.length; i++) {
                this.allUppeWest[i].status = true;
            }
        }
        else {
            for (var i = 0; i < this.allUppeWest.length; i++) {
                this.allUppeWest[i].status = false;
            }
        }
        this.addNeighborhoods();
    };
    ;
    ContentComponent.prototype.checkallApperManhattan = function (e) {
        if (e.target.checked) {
            for (var i = 0; i < this.allUpperManhattan.length; i++) {
                this.allUpperManhattan[i].status = true;
            }
        }
        else {
            for (var i = 0; i < this.allUpperManhattan.length; i++) {
                this.allUpperManhattan[i].status = false;
            }
        }
        this.addNeighborhoods();
    };
    ;
    ContentComponent.prototype.checkAllBrooklyn = function (e) {
        if (e.target.checked) {
            for (var i = 0; i < this.allBrooklyn.length; i++) {
                this.allBrooklyn[i].status = true;
            }
        }
        else {
            for (var i = 0; i < this.allBrooklyn.length; i++) {
                this.allBrooklyn[i].status = false;
            }
        }
        this.addNeighborhoods();
    };
    ;
    ContentComponent.prototype.addNeighborhoods = function () {
        this.selectedNeighborhoods = [];
        // allDowntown
        for (var i = 0; i < this.allDowntown.length; i++) {
            if (this.allDowntown[i].status) {
                this.selectedNeighborhoods.push(this.allDowntown[i]);
            }
            else {
                for (var j = 0; j < this.selectedNeighborhoods.length; j++) {
                    if (this.selectedNeighborhoods[j].name === this.allDowntown[i].name && this.selectedNeighborhoods[j].id > 0 && this.selectedNeighborhoods[j].id < 100) {
                        this.selectedNeighborhoods.splice(j, 1);
                    }
                }
            }
        }
        // allMidtown
        for (var i = 0; i < this.allMidtown.length; i++) {
            if (this.allMidtown[i].status) {
                this.selectedNeighborhoods.push(this.allMidtown[i]);
            }
            else {
                for (var j = 0; j < this.selectedNeighborhoods.length; j++) {
                    if (this.selectedNeighborhoods[j].name === this.allMidtown[i].name && this.selectedNeighborhoods[j].id > 100 && this.selectedNeighborhoods[j].id < 200) {
                        this.selectedNeighborhoods.splice(j, 1);
                    }
                }
            }
        }
        // allUpperEastSide
        for (var i = 0; i < this.allUpperEastSide.length; i++) {
            if (this.allUpperEastSide[i].status) {
                this.selectedNeighborhoods.push(this.allUpperEastSide[i]);
            }
            else {
                for (var j = 0; j < this.selectedNeighborhoods.length; j++) {
                    if (this.selectedNeighborhoods[j].name === this.allUpperEastSide[i].name && this.selectedNeighborhoods[j].id > 200 && this.selectedNeighborhoods[j].id < 300) {
                        this.selectedNeighborhoods.splice(j, 1);
                    }
                }
            }
        }
        // allUppeWest
        for (var i = 0; i < this.allUppeWest.length; i++) {
            if (this.allUppeWest[i].status) {
                this.selectedNeighborhoods.push(this.allUppeWest[i]);
            }
            else {
                for (var j = 0; j < this.selectedNeighborhoods.length; j++) {
                    if (this.selectedNeighborhoods[j].name === this.allUppeWest[i].name && this.selectedNeighborhoods[j].id > 300 && this.selectedNeighborhoods[j].id < 400) {
                        this.selectedNeighborhoods.splice(j, 1);
                    }
                }
            }
        }
        // allUpperManhattan
        for (var i = 0; i < this.allUpperManhattan.length; i++) {
            if (this.allUpperManhattan[i].status) {
                this.selectedNeighborhoods.push(this.allUpperManhattan[i]);
            }
            else {
                for (var j = 0; j < this.selectedNeighborhoods.length; j++) {
                    if (this.selectedNeighborhoods[j].name === this.allUpperManhattan[i].name && this.selectedNeighborhoods[j].id > 400 && this.selectedNeighborhoods[j].id < 500) {
                        this.selectedNeighborhoods.splice(j, 1);
                    }
                }
            }
        }
        // allBrooklyn
        for (var i = 0; i < this.allBrooklyn.length; i++) {
            if (this.allBrooklyn[i].status) {
                this.selectedNeighborhoods.push(this.allBrooklyn[i]);
            }
            else {
                for (var j = 0; j < this.selectedNeighborhoods.length; j++) {
                    if (this.selectedNeighborhoods[j].name === this.allBrooklyn[i].name && this.selectedNeighborhoods[j].id > 500 && this.selectedNeighborhoods[j].id < 600) {
                        this.selectedNeighborhoods.splice(j, 1);
                    }
                }
            }
        }
        // call server to fetch neighborhoods from db and place data on map. 
        this.fetchNeighborhoodsShowOnMap(this.selectedNeighborhoods);
        this.addRemoveCategories("null", this.selectedNeighborhoods, "null");
    };
    ;
    ContentComponent.prototype.closeNeighborhoodsTags = function (e, index, neighborhood) {
        // unCheck the object in dropdown.
        neighborhood.status = false;
        // remove the object from selectedNeighborhoods
        this.selectedNeighborhoods.splice(index, 1);
        // call server to fetch neighborhoods from db and place data on map.
        this.fetchNeighborhoodsShowOnMap(this.selectedNeighborhoods);
        this.addRemoveCategories("null", this.selectedNeighborhoods, "null");
    };
    ;
    // // call server nd send this list of neighborhoods to backend and fetch the resuslt and show then on map.
    ContentComponent.prototype.fetchNeighborhoodsShowOnMap = function (selectedNeighborhoods) {
        var _this = this;
        var neighborhoodsToSend = [];
        for (var i = 0; i < selectedNeighborhoods.length; i++) {
            neighborhoodsToSend[i] = selectedNeighborhoods[i].name;
        }
        this.dataService.fetchNeighborhoodsShowOnMap(neighborhoodsToSend)
            .subscribe(function (res) {
            _this.neighborhoods = res;
            // clear the previous layers
            _this.map.removeLayer(_this.geoJsonLayer);
            console.log("this.neighborhoods:", _this.neighborhoods);
            // add the neighborhoods to map.
            _this.geoJsonLayer = __WEBPACK_IMPORTED_MODULE_2_leaflet__["geoJSON"](_this.neighborhoods, {
                style: function () {
                    return { color: "#783E7B" };
                }
            });
            _this.geoJsonLayer.addTo(_this.map);
            _this.map.fitBounds(_this.geoJsonLayer.getBounds());
        }, function (err) {
            console.log("Error occured", err);
        });
    };
    ;
    // fetchNeighborOnHovor
    ContentComponent.prototype.fetchNeighborOnHovor = function (nbr) {
        var _this = this;
        var nbrObject = { "name": nbr };
        this.dataService.fetchNeighborOnHovor(nbrObject)
            .subscribe(function (res) {
            _this.onHovorNbr = res;
            // clear the previous layers
            _this.map.removeLayer(_this.onHovorgeoJsonLayer);
            // add the neighborhoods to map.
            _this.onHovorgeoJsonLayer = __WEBPACK_IMPORTED_MODULE_2_leaflet__["geoJSON"](_this.onHovorNbr, {
                style: function () {
                    return { color: "#22c2a6" };
                }
            });
            _this.onHovorgeoJsonLayer.addTo(_this.map);
            _this.map.fitBounds(_this.onHovorgeoJsonLayer.getBounds());
        }, function (err) {
            console.log("Error occured", err);
        });
    };
    ;
    ContentComponent.prototype.neighborMouseleave = function () {
        this.map.removeLayer(this.onHovorgeoJsonLayer);
    };
    ;
    // adding and removing the categories
    ContentComponent.prototype.addRemoveCategories = function (e, neighborhoods, cat) {
        if (neighborhoods === null) {
            cat.selected = !cat.selected;
            if (cat.selected) {
                this.selectedDataCategories[1].categories.push(cat.name);
                this.selectedCategories.push(cat.name);
            }
            else {
                for (var i_1 = 0; i_1 < this.selectedCategories.length; i_1++) {
                    if (this.selectedCategories[i_1] == cat.name) {
                        this.selectedCategories.splice(i_1, 1);
                    }
                }
                for (var i_2 = 0; i_2 < this.selectedDataCategories[1].categories.length; i_2++) {
                    if (this.selectedDataCategories[1].categories[i_2] == cat.name) {
                        this.selectedDataCategories[1].categories.splice(i_2, 1);
                    }
                }
                // also remove the selected cat markers from map 
                if (this.selectedBtn === cat.name) {
                    (this.selectedMarkers).clearLayers();
                    (this.map).removeLayer(this.selectedMarkers);
                }
            }
        }
        else {
            var attachingNeighborhoods = [];
            for (var i = 0; i < neighborhoods.length; i++) {
                attachingNeighborhoods[i] = neighborhoods[i].name;
            }
            this.selectedDataCategories[0].neighborhoods = attachingNeighborhoods;
        }
        // call server to fetch data
        this.fetchCategoriesShowOnMap(this.selectedDataCategories);
    };
    ;
    // removing the categories from list
    ContentComponent.prototype.removeCategories = function (e, index, category) {
        this.selectedCategories.splice(index, 1);
        // update the selectedDataCategories Object
        for (var i = 0; i < this.selectedDataCategories[1].categories.length; i++) {
            if (this.selectedDataCategories[1].categories[i] === category) {
                this.selectedDataCategories[1].categories.splice(i, 1);
            }
        }
        //remove the selected cat markers also from map 
        if (this.selectedBtn === category) {
            (this.selectedMarkers).clearLayers();
            (this.map).removeLayer(this.selectedMarkers);
        }
        // unckeck the object in all categories.
        for (var j = 0; j < this.allCategories.length; j++) {
            if (this.allCategories[j].name === category) {
                this.allCategories[j].selected = false;
            }
        }
        // call server to fetch data
        this.fetchCategoriesShowOnMap(this.selectedDataCategories);
    };
    ;
    // Categories List on Map work selection and deSelection of Btns
    ContentComponent.prototype.selectBtnCatList = function (item) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var i, isMarkerInside;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.loading = true;
                        this.selectedBtn = item;
                        (this.selectedMarkers).clearLayers();
                        (this.map).removeLayer(this.selectedMarkers);
                        i = 0;
                        _a.label = 1;
                    case 1:
                        if (!(i < this.categories.length)) return [3 /*break*/, 5];
                        if (!(this.categories[i].location && this.categories[i].category === item)) return [3 /*break*/, 4];
                        this.selectedMarker = __WEBPACK_IMPORTED_MODULE_2_leaflet__["marker"]([this.categories[i].location.lat, this.categories[i].location.lng], { icon: this.markerIconSelected });
                        this.selectedMarker.on('mouseover', this.selectedMarker.bindPopup("<h6><strong>" + this.categories[i].name + "</strong></h6>" + "<br>" +
                            "</br> <div class='row'> <div class='col-md-8'>" + this.categories[i].address +
                            "</br>" + this.categories[i].phone_number +
                            "</br> <a href='" + this.categories[i].articleLink + "' target='_blank'>" + this.categories[i].articleLink + "</a></div>" +
                            "<p class='popup-img col-md-3'><img src='assets/images/marker-popupColor.png' alt=''></p>  </div>"));
                        if (!(this.tempNeighborhood == undefined || this.tempNeighborhood.features[0].properties.name != this.categories[i].neighborhood)) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.fetchNeighborByName(this.categories[i].neighborhood).then(function (res) {
                                _this.tempNeighborhood = res;
                            })];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3:
                        isMarkerInside = this.isMarkerInsideNeighborhood(this.selectedMarker, this.tempNeighborhood);
                        if (isMarkerInside) {
                            (this.selectedMarkers).addLayer(this.selectedMarker);
                        }
                        _a.label = 4;
                    case 4:
                        i++;
                        return [3 /*break*/, 1];
                    case 5:
                        (this.map).addLayer(this.selectedMarkers);
                        this.loading = false;
                        return [2 /*return*/];
                }
            });
        });
    };
    ;
    ContentComponent.prototype.isActive = function (item) {
        return this.selectedBtn === item;
    };
    ;
    // call server fetch the final data from server with categories and neighborhoods
    ContentComponent.prototype.fetchCategoriesShowOnMap = function (selectedCategories) {
        var _this = this;
        var body = selectedCategories;
        this.loading = true;
        console.log("fetchCategoriesShowOnMap called selectedCategories", selectedCategories);
        this.dataService.fetchCategoriesShowOnMap(body)
            .subscribe(function (res) {
            _this.resCategories = res;
            _this.categories = [];
            for (var i = 0; i < _this.resCategories.length; i++) {
                for (var j = 0; j < _this.resCategories[i].length; j++) {
                    _this.categories.push(_this.resCategories[i][j]);
                }
            }
            // show marker on map
            _this.showMarkersOnMap(_this.categories);
        }, function (err) {
            console.log("Error occured while fetching categories", err);
            _this.loading = false;
        });
    };
    ;
    // show the markers on map.
    ContentComponent.prototype.showMarkersOnMap = function (dataShowOnMap) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var _loop_1, this_1, isMarkerInside, i;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log("dataShowOnMap:", dataShowOnMap);
                        (this.markers).clearLayers();
                        (this.map).removeLayer(this.markers);
                        _loop_1 = function (i) {
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        if (!dataShowOnMap[i].location) return [3 /*break*/, 3];
                                        // create marker
                                        this_1.createMarkerIcon(dataShowOnMap[i].category);
                                        this_1.marker = __WEBPACK_IMPORTED_MODULE_2_leaflet__["marker"]([dataShowOnMap[i].location.lat, dataShowOnMap[i].location.lng], { icon: this_1.markerIconDeselected });
                                        this_1.marker.on('mouseover', this_1.marker.bindPopup("<h6><strong>" + dataShowOnMap[i].name + "</strong></h6>" +
                                            "</br></br>" + dataShowOnMap[i].address +
                                            "</br>" + dataShowOnMap[i].phone_number +
                                            "</br> <a href='" + dataShowOnMap[i].articleLink + "' target='_blank'>" + dataShowOnMap[i].articleLink + "</a>"));
                                        if (!(this_1.tempNeighborhood == undefined || this_1.tempNeighborhood.features[0].properties.name != dataShowOnMap[i].neighborhood)) return [3 /*break*/, 2];
                                        return [4 /*yield*/, this_1.fetchNeighborByName(dataShowOnMap[i].neighborhood).then(function (res) {
                                                if (res != undefined) {
                                                    _this.tempNeighborhood = res;
                                                }
                                                else {
                                                    _this.tempNeighborhood.features[0].properties.name = dataShowOnMap[i].neighborhood;
                                                }
                                            })];
                                    case 1:
                                        _a.sent();
                                        _a.label = 2;
                                    case 2:
                                        // check if the marker inside neighborhood else delete marker data
                                        isMarkerInside = this_1.isMarkerInsideNeighborhood(this_1.marker, this_1.tempNeighborhood);
                                        if (isMarkerInside) {
                                            (this_1.markers).addLayer(this_1.marker);
                                        }
                                        _a.label = 3;
                                    case 3: return [2 /*return*/];
                                }
                            });
                        };
                        this_1 = this;
                        i = 0;
                        _a.label = 1;
                    case 1:
                        if (!(i < dataShowOnMap.length)) return [3 /*break*/, 4];
                        return [5 /*yield**/, _loop_1(i)];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3:
                        i++;
                        return [3 /*break*/, 1];
                    case 4:
                        (this.map).addLayer(this.markers);
                        this.loading = false;
                        return [2 /*return*/];
                }
            });
        });
    };
    ;
    ContentComponent.prototype.createMarkerIcon = function (category) {
        if (category === "Banks") {
            var markerIconPath = 'assets/images/catIconsPng/banks.png';
        }
        else if (category === "Cafes") {
            var markerIconPath = 'assets/images/catIconsPng/cafes.png';
        }
        else if (category === "Theatres") {
            var markerIconPath = 'assets/images/catIconsPng/theatres.png';
        }
        else if (category === "Schools") {
            var markerIconPath = 'assets/images/catIconsPng/schools.png';
        }
        else if (category === "Grocery") {
            var markerIconPath = 'assets/images/catIconsPng/grocery.png';
        }
        else if (category === "Fitness") {
            var markerIconPath = 'assets/images/catIconsPng/fitness.png';
        }
        else if (category === "Healthcare") {
            var markerIconPath = 'assets/images/catIconsPng/healthcare.png';
        }
        else if (category === "Museum") {
            var markerIconPath = 'assets/images/catIconsPng/museum.png';
        }
        else if (category === "Parks") {
            var markerIconPath = 'assets/images/catIconsPng/parks.png';
        }
        else if (category === "Pharmacies") {
            var markerIconPath = 'assets/images/catIconsPng/pharmacies.png';
        }
        else if (category === "Restaurants") {
            var markerIconPath = 'assets/images/catIconsPng/restaurants.png';
        }
        else if (category === "Worship") {
            var markerIconPath = 'assets/images/catIconsPng/worship.png';
        }
        else if (category === "Daycare") {
            var markerIconPath = 'assets/images/catIconsPng/daycare.png';
        }
        else if (category === "New Developments") {
            var markerIconPath = 'assets/images/catIconsPng/newDevelopments.png';
        }
        else if (category === "University") {
            var markerIconPath = 'assets/images/catIconsPng/university.png';
        }
        else if (category === "NYPD") {
            var markerIconPath = 'assets/images/catIconsPng/nypd.png';
        }
        this.markerIconDeselected = __WEBPACK_IMPORTED_MODULE_2_leaflet__["icon"]({
            iconSize: [32, 48],
            iconAnchor: [13, 41],
            iconUrl: 'assets/images/marker-icon-black.png',
            shadowUrl: markerIconPath
        });
    };
    ;
    // return true if the marker is inside neighborhood
    ContentComponent.prototype.isMarkerInsideNeighborhood = function (marker, neighborhoodGeoJson) {
        var inside = false;
        var point = __WEBPACK_IMPORTED_MODULE_2_leaflet__["latLng"](marker.getLatLng());
        var myPolygon = __WEBPACK_IMPORTED_MODULE_2_leaflet__["geoJSON"](neighborhoodGeoJson);
        var isMarkerInside = __WEBPACK_IMPORTED_MODULE_3__mapbox_leaflet_pip___default.a.pointInLayer(point, myPolygon, true);
        (isMarkerInside.length > 0) ? inside = true : inside = false;
        return inside;
    };
    ;
    // fetch one neighborhood by its name
    ContentComponent.prototype.fetchNeighborByName = function (nbr) {
        var _this = this;
        var nbrObject = { "name": nbr };
        return new Promise(function (resolve, reject) {
            _this.dataService.fetchNeighborByName(nbrObject)
                .subscribe(function (data) { resolve(data[0]); });
        });
    };
    ;
    // delete category
    ContentComponent.prototype.deleteCategory = function (catId) {
        this.dataService.deleteCategory(catId)
            .subscribe(function (res) {
            console.log("Deleting category successfully.", res);
        }, function (err) {
            console.log("Error occured while deleting category.", err);
        });
    };
    ;
    ContentComponent.prototype.clicked = function (event) {
        this.removed = !this.removed;
    };
    ;
    ContentComponent.prototype.onItemSelect = function (item) {
        console.log(item);
    };
    ;
    ContentComponent.prototype.OnItemDeSelect = function (item) {
        console.log(item);
    };
    ;
    ContentComponent.prototype.onSelectAll = function (items) {
        console.log(items);
    };
    ;
    ContentComponent.prototype.onDeSelectAll = function (items) {
        console.log(items);
    };
    ;
    // market report work
    // return the months for absorption dropdown
    ContentComponent.prototype.getMonthsDropdown = function () {
        var _this = this;
        this.dataService.getMonthsDropdown()
            .subscribe(function (res) {
            _this.theReturnMonths = res;
            var addOneDay = [];
            for (var i = 0; i < _this.theReturnMonths.length; i++) {
                var returnDate = new Date(_this.theReturnMonths[i].Date);
                returnDate.setDate(returnDate.getDate() + 1);
                addOneDay.push(returnDate);
            }
            _this.datesOfAbsorptionData = addOneDay
                .map(function (s) { return s.toString(); })
                .filter(function (s, i, a) { return a.indexOf(s) == i; })
                .map(function (s) { return new Date(s); });
            // show the latest date data on chart.
            var length = _this.theReturnMonths.length;
            _this.latestDate = new Date(_this.theReturnMonths[length - 1].Date);
            _this.latestDate.setDate(_this.latestDate.getDate() + 1);
            _this.getAbsorptionData(0, _this.latestDate);
            _this.selectedDateFn(0, _this.latestDate);
        }, function (err) {
            console.log("Error occured while fetching months", err);
        });
    };
    ;
    // absorption dropdown work
    ContentComponent.prototype.selectedDateFn = function (e, selectedDate) {
        this.selectedDate = selectedDate;
        this.selectedDate.setDate(this.selectedDate.getDate() + 1);
    };
    ;
    // get absorption data
    ContentComponent.prototype.getAbsorptionData = function (e, nmYr) {
        var _this = this;
        nmYr.setDate(nmYr.getDate() - 1);
        nmYr = nmYr.toISOString();
        this.dataService.getAbsorptionData(nmYr)
            .subscribe(function (res) {
            // destroy chart to delete the previous data from it otherwise it will also store the previous data.
            if (_this.theReturnAbsorption !== undefined) {
                _this.absorptionChart.destroy();
            }
            _this.theReturnAbsorption = res;
            // console.log("this.theReturnAbsorption:", this.theReturnAbsorption);
            _this.marketReportsAptsData = [];
            _this.marketReportsCondoData = [];
            _this.marketReportsCoopData = [];
            for (var i = 0; i < _this.theReturnAbsorption.length; i++) {
                _this.marketReportsAptsData.push(_this.theReturnAbsorption[i].APT);
                _this.marketReportsCondoData.push(_this.theReturnAbsorption[i].CONDO);
                _this.marketReportsCoopData.push(_this.theReturnAbsorption[i].COOP);
            }
            _this.absorptionChart = new __WEBPACK_IMPORTED_MODULE_4_chart_js__["Chart"](_this.marketReportsChart, {
                type: 'bar',
                title: {
                    text: "Dynamic Data"
                },
                data: {
                    labels: ["All of Manhattan", "East Side", "West Side", "Midtown East", "Midtown West", "Downtown: South of 34th Street", "Upper Manhattan"],
                    datasets: [{
                            label: "Appartments",
                            backgroundColor: "#eae891",
                            hoverBackgroundColor: "#d7d569",
                            data: _this.marketReportsAptsData,
                        }, {
                            label: "Condominiums",
                            backgroundColor: "#64bfc2",
                            hoverBackgroundColor: "#44abaf",
                            data: _this.marketReportsCondoData
                        }, {
                            label: "Cooperatives",
                            backgroundColor: "#9883cd",
                            hoverBackgroundColor: "#7c64b9",
                            data: _this.marketReportsCoopData
                        }]
                },
                options: {
                    legend: {
                        display: false,
                        labels: {
                            display: true
                        }
                    },
                    responsive: true,
                    scales: {
                        xAxes: [{
                                gridLines: {
                                    display: false,
                                    drawBorder: true,
                                    color: "#ffffff",
                                    autoSkip: false,
                                },
                                ticks: {
                                    display: true,
                                    fontFamily: "Montserrat",
                                    fontColor: "#ffffff",
                                    fontSize: 11,
                                }
                            }],
                        yAxes: [{
                                gridLines: {
                                    display: false,
                                    drawBorder: true,
                                    color: "#ffffff",
                                },
                                ticks: {
                                    display: true,
                                    fontFamily: "Montserrat",
                                    fontColor: "#ffffff",
                                    fontSize: 15,
                                    stepSize: 15,
                                    min: 0,
                                    max: 15,
                                }
                            }]
                    }
                }
            });
        }, function (err) {
            console.log("Error occured while fetching absorption data", err);
        });
    };
    ;
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewChild */])('mapCountainer'),
        __metadata("design:type", Object)
    ], ContentComponent.prototype, "mapCountainer", void 0);
    ContentComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-content',
            template: __webpack_require__("../../../../../src/app/content/content.component.html"),
            styles: [__webpack_require__("../../../../../src/app/content/content.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["b" /* NgbDropdownConfig */], __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["a" /* NgbAccordionConfig */]] // add NgbDropdownConfig to the component providers
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["b" /* NgbDropdownConfig */], __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["a" /* NgbAccordionConfig */], __WEBPACK_IMPORTED_MODULE_6__data_service__["a" /* DataService */]])
    ], ContentComponent);
    return ContentComponent;
}());



/***/ }),

/***/ "../../../../../src/app/data.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DataService = (function () {
    function DataService(http) {
        this.http = http;
        // this.baseUrl = "http://localhost:3000";
        this.baseUrl = "http://35.169.142.196:3000";
    }
    // neighborhoods map work apis
    DataService.prototype.fetchNeighborhoodsShowOnMap = function (neighborhoodsToSend) {
        return this.http.post(this.baseUrl + '/api/getNeighborhoodsCoordinates', neighborhoodsToSend);
    };
    ;
    DataService.prototype.fetchNeighborOnHovor = function (nbrObject) {
        return this.http.post(this.baseUrl + '/api/getNeighborhoodCoordinates', nbrObject);
    };
    ;
    DataService.prototype.fetchCategoriesShowOnMap = function (body) {
        return this.http.post(this.baseUrl + '/api/getCategoriesCoordinates', body);
    };
    ;
    DataService.prototype.fetchNeighborByName = function (nbrObject) {
        return this.http.post(this.baseUrl + '/api/getNeighborhoodCoordinates', nbrObject);
    };
    ;
    DataService.prototype.deleteCategory = function (catId) {
        return this.http.delete(this.baseUrl + "/api/deleteCategory/" + catId);
    };
    ;
    // market report apis
    DataService.prototype.getMonthsDropdown = function () {
        return this.http.get(this.baseUrl + '/api/getMonthsAbsorption');
    };
    ;
    DataService.prototype.getAbsorptionData = function (nmYr) {
        return this.http.get(this.baseUrl + '/api/getAbsorptionRates/' + nmYr);
    };
    ;
    // send email api
    DataService.prototype.sendEmail = function (recData) {
        return this.http.post(this.baseUrl + '/api/sendEmail', recData);
    };
    ;
    DataService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], DataService);
    return DataService;
}());



/***/ }),

/***/ "../../../../../src/app/footer/footer.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "footer{ background:#11213b; padding:34px 0; position: relative; bottom:0; left:0; width:100%; }\r\nfooter p.copy-rights{ color:#fff; font-size:15px; letter-spacing:0.1em; }\r\nfooter ul.ftr-social{ font-size:0; }\r\nfooter ul.ftr-social li{ display:inline-block; margin-left:25px; }\r\nfooter ul.ftr-social li:first-child{ margin-left:0px; }\r\n\r\n/*legal disclaimer css*/\r\n\r\n.legalDisclaimer p {\r\n    color: #fff;\r\n    font-size: 11px;\r\n    letter-spacing: 0.1em;\r\n    text-align: justify;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "  <!-- Footer start Here  -->\n<footer>\n    <div class=\"container\">\n        <p class=\"copy-rights left\">Copyright © All Rights Reserved</p>\n        <ul class=\"ftr-social right\">\n            <li><a href=\"\"><!-- <img src=\"assets/images/ftr-fb.png\" alt=\"\"> --><i class=\"fab fa-facebook-f\"></i></a></li>\n            <li><a href=\"\"><img src=\"assets/images/ftr-pintrest.png\" alt=\"\"></a></li>\n            <li><a href=\"\"><img src=\"assets/images/ftr-twt.png\" alt=\"\"></a></li>\n            <li><a href=\"\"><img src=\"assets/images/ftr-vim.png\" alt=\"\"></a></li>\n            <li><a href=\"\"><img src=\"assets/images/ftr-insta.png\" alt=\"\"></a></li>\n            <li><a href=\"\"><img src=\"assets/images/ftr-gplus.png\" alt=\"\"></a></li>\n        </ul>\n        <br><br>\n        <div class=\"legalDisclaimer row\">\n            <p class=\"col-md-12\">All information is from sources deemed reliable but is subject to errors, omissions, changes etc.  No representation is made as to the accuracy of any description. All measurements and square footages are approximate and all information should be confirmed by customer or his attorney. All rights to content, photographs and graphics reserved to Peter Michael Riolo llc. Peter Michael Riolo is a licensed associate broker with Brown Harris Stevens Residential Sales llc. an active supporter of fair housing and equal housing opportunities</p>\n        </div>\n    </div>\n</footer>\n  <!-- Footer ends Here  -->"

/***/ }),

/***/ "../../../../../src/app/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = (function () {
    function FooterComponent() {
        console.log("FooterComponent constructor called.");
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-footer',
            template: __webpack_require__("../../../../../src/app/footer/footer.component.html"),
            styles: [__webpack_require__("../../../../../src/app/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "../../../../../src/app/header/header.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "header{ background:rgba(1, 55, 103,0.97); box-shadow:0px 0px 10px rgba(0,0,0,0.5); position:fixed; top:0; z-index:999999; width:100%; }\r\nheader.fixed-header{ background:rgba(1, 55, 103,0.97); }\r\nheader .navbar{ margin:0; }\r\nheader .navbar .navbar-brand{ padding:18px 3px; height:66px; }\r\nheader .navbar-nav>li{ padding:0 22px; }\r\nheader .navbar-nav>li>a{ padding:0; color:#fff; font-size:13px; text-transform:uppercase; padding:21px 0px 28px; letter-spacing:0.02em; transition:0.2s all ease; position:relative; }\r\nheader .navbar-nav>li>a::after{ background-color:transparent; position:absolute; content:\"\"; width:100%; height:1px; bottom:-3px; left:0; }\r\nheader .navbar-nav>li>a:hover,header .navbar-nav>li>a:focus{ background:none; }\r\nheader .navbar-nav>li>a.active::after,header .navbar-nav>li>a:focus::after, header .navbar-nav>li>a:hover::after{ background:#fff; }\r\nheader .navbar-right{ margin-right:0; }\r\n.main a.down-nav-btn{ position:absolute; left:50%; transform:translateX(-50%); bottom:15px; padding:15px; border-radius:50%; border:1px solid transparent; transition:0.2s all ease; }\r\n.main a.down-nav-btn:hover{ border:1px solid #fff; }\r\n\r\n\r\n/*------------- 991px -----------------*/\r\n@media only screen and (max-width:991px){\r\n\theader .navbar-nav>li { padding: 0 15px; }\r\n\theader .navbar-nav>li>a { font-size: 12px; }\r\n\r\n}\r\n/*------------- 767px -----------------*/\r\n@media only screen and (max-width:767px){\r\n\theader .navbar-nav>li { padding:0; }\r\n\theader .navbar-nav>li>a { font-size: 14px; padding: 12px 10px; }\r\n\theader .navbar-nav>li>a:hover { background: #fff; color: #013767;  }\r\n\t.navbar-nav { margin:0; }\r\n\theader .navbar-nav>li>a::after { display: none;  }\r\n}\r\n@media only screen and (max-width:480px){\r\n\theader .navbar .navbar-brand { width: 170px; }\r\n\t.navbar-toggle { padding: 6px; border-radius: 3px; }\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "<header>\n<div class=\"container\">\n    <nav class=\"navbar\">\n        <div class=\"navbar-header\">\n            <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#navbar\" aria-expanded=\"false\" aria-controls=\"navbar\">\n                  <span class=\"sr-only\">Toggle</span>\n                  <span class=\"icon-bar\"></span>\n                  <span class=\"icon-bar\"></span>\n                  <span class=\"icon-bar\"></span>\n                </button>\n            <a class=\"navbar-brand\" routerLink=\"/\" (click)=\"goToTop();\"><img src=\"assets/images/logo.png\" alt=\"Logo\"></a>\n        </div>\n        <div id=\"navbar\" class=\"navbar-collapse collapse\">\n            <ul class=\"nav navbar-nav navbar-right\">\n                <li><a simplePageScroll routerLink=\"/\" (click)=\"goToMapSection();\">NEIGHBORHOODS</a></li>\n                <li><a simplePageScroll routerLink=\"/\" (click)=\"goToMarketSection();\">MARKET REPORTS</a></li>\n                <li><a routerLink=\"/blog\" (click)=\"goToTop();\">BLOG</a></li>\n                <li><a routerLink=\"/about\" (click)=\"goToTop();\">ABOUT</a></li>\n                <li><a routerLink=\"/contact\" (click)=\"goToTop();\">INQUIRIES</a></li>\n            </ul>\n        </div>\n    </nav>\n</div>\n</header>\n\n"

/***/ }),

/***/ "../../../../../src/app/header/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeaderComponent = (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent.prototype.goToMapSection = function () {
        setTimeout(function () {
            var node = document.querySelector('#map_section');
            var headerHeight = 70;
            node.scrollIntoView(true);
            var scrolledY = window.scrollY;
            if (scrolledY) {
                window.scroll(0, scrolledY - headerHeight);
            }
        }, 400);
    };
    ;
    HeaderComponent.prototype.goToMarketSection = function () {
        setTimeout(function () {
            var node = document.querySelector('#market_reports');
            var headerHeight = 70;
            node.scrollIntoView(true);
            var scrolledY = window.scrollY + 40;
            if (scrolledY) {
                window.scroll(0, scrolledY - headerHeight);
            }
        }, 400);
    };
    ;
    HeaderComponent.prototype.goToTop = function () {
        setTimeout(function () {
            window.scroll({ top: 0, left: 0, behavior: 'instant' });
        }, 400);
    };
    ;
    HeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-header',
            template: __webpack_require__("../../../../../src/app/header/header.component.html"),
            styles: [__webpack_require__("../../../../../src/app/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ "../../../../moment/locale recursive ^\\.\\/.*$":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "../../../../moment/locale/af.js",
	"./af.js": "../../../../moment/locale/af.js",
	"./ar": "../../../../moment/locale/ar.js",
	"./ar-dz": "../../../../moment/locale/ar-dz.js",
	"./ar-dz.js": "../../../../moment/locale/ar-dz.js",
	"./ar-kw": "../../../../moment/locale/ar-kw.js",
	"./ar-kw.js": "../../../../moment/locale/ar-kw.js",
	"./ar-ly": "../../../../moment/locale/ar-ly.js",
	"./ar-ly.js": "../../../../moment/locale/ar-ly.js",
	"./ar-ma": "../../../../moment/locale/ar-ma.js",
	"./ar-ma.js": "../../../../moment/locale/ar-ma.js",
	"./ar-sa": "../../../../moment/locale/ar-sa.js",
	"./ar-sa.js": "../../../../moment/locale/ar-sa.js",
	"./ar-tn": "../../../../moment/locale/ar-tn.js",
	"./ar-tn.js": "../../../../moment/locale/ar-tn.js",
	"./ar.js": "../../../../moment/locale/ar.js",
	"./az": "../../../../moment/locale/az.js",
	"./az.js": "../../../../moment/locale/az.js",
	"./be": "../../../../moment/locale/be.js",
	"./be.js": "../../../../moment/locale/be.js",
	"./bg": "../../../../moment/locale/bg.js",
	"./bg.js": "../../../../moment/locale/bg.js",
	"./bm": "../../../../moment/locale/bm.js",
	"./bm.js": "../../../../moment/locale/bm.js",
	"./bn": "../../../../moment/locale/bn.js",
	"./bn.js": "../../../../moment/locale/bn.js",
	"./bo": "../../../../moment/locale/bo.js",
	"./bo.js": "../../../../moment/locale/bo.js",
	"./br": "../../../../moment/locale/br.js",
	"./br.js": "../../../../moment/locale/br.js",
	"./bs": "../../../../moment/locale/bs.js",
	"./bs.js": "../../../../moment/locale/bs.js",
	"./ca": "../../../../moment/locale/ca.js",
	"./ca.js": "../../../../moment/locale/ca.js",
	"./cs": "../../../../moment/locale/cs.js",
	"./cs.js": "../../../../moment/locale/cs.js",
	"./cv": "../../../../moment/locale/cv.js",
	"./cv.js": "../../../../moment/locale/cv.js",
	"./cy": "../../../../moment/locale/cy.js",
	"./cy.js": "../../../../moment/locale/cy.js",
	"./da": "../../../../moment/locale/da.js",
	"./da.js": "../../../../moment/locale/da.js",
	"./de": "../../../../moment/locale/de.js",
	"./de-at": "../../../../moment/locale/de-at.js",
	"./de-at.js": "../../../../moment/locale/de-at.js",
	"./de-ch": "../../../../moment/locale/de-ch.js",
	"./de-ch.js": "../../../../moment/locale/de-ch.js",
	"./de.js": "../../../../moment/locale/de.js",
	"./dv": "../../../../moment/locale/dv.js",
	"./dv.js": "../../../../moment/locale/dv.js",
	"./el": "../../../../moment/locale/el.js",
	"./el.js": "../../../../moment/locale/el.js",
	"./en-au": "../../../../moment/locale/en-au.js",
	"./en-au.js": "../../../../moment/locale/en-au.js",
	"./en-ca": "../../../../moment/locale/en-ca.js",
	"./en-ca.js": "../../../../moment/locale/en-ca.js",
	"./en-gb": "../../../../moment/locale/en-gb.js",
	"./en-gb.js": "../../../../moment/locale/en-gb.js",
	"./en-ie": "../../../../moment/locale/en-ie.js",
	"./en-ie.js": "../../../../moment/locale/en-ie.js",
	"./en-il": "../../../../moment/locale/en-il.js",
	"./en-il.js": "../../../../moment/locale/en-il.js",
	"./en-nz": "../../../../moment/locale/en-nz.js",
	"./en-nz.js": "../../../../moment/locale/en-nz.js",
	"./eo": "../../../../moment/locale/eo.js",
	"./eo.js": "../../../../moment/locale/eo.js",
	"./es": "../../../../moment/locale/es.js",
	"./es-do": "../../../../moment/locale/es-do.js",
	"./es-do.js": "../../../../moment/locale/es-do.js",
	"./es-us": "../../../../moment/locale/es-us.js",
	"./es-us.js": "../../../../moment/locale/es-us.js",
	"./es.js": "../../../../moment/locale/es.js",
	"./et": "../../../../moment/locale/et.js",
	"./et.js": "../../../../moment/locale/et.js",
	"./eu": "../../../../moment/locale/eu.js",
	"./eu.js": "../../../../moment/locale/eu.js",
	"./fa": "../../../../moment/locale/fa.js",
	"./fa.js": "../../../../moment/locale/fa.js",
	"./fi": "../../../../moment/locale/fi.js",
	"./fi.js": "../../../../moment/locale/fi.js",
	"./fo": "../../../../moment/locale/fo.js",
	"./fo.js": "../../../../moment/locale/fo.js",
	"./fr": "../../../../moment/locale/fr.js",
	"./fr-ca": "../../../../moment/locale/fr-ca.js",
	"./fr-ca.js": "../../../../moment/locale/fr-ca.js",
	"./fr-ch": "../../../../moment/locale/fr-ch.js",
	"./fr-ch.js": "../../../../moment/locale/fr-ch.js",
	"./fr.js": "../../../../moment/locale/fr.js",
	"./fy": "../../../../moment/locale/fy.js",
	"./fy.js": "../../../../moment/locale/fy.js",
	"./gd": "../../../../moment/locale/gd.js",
	"./gd.js": "../../../../moment/locale/gd.js",
	"./gl": "../../../../moment/locale/gl.js",
	"./gl.js": "../../../../moment/locale/gl.js",
	"./gom-latn": "../../../../moment/locale/gom-latn.js",
	"./gom-latn.js": "../../../../moment/locale/gom-latn.js",
	"./gu": "../../../../moment/locale/gu.js",
	"./gu.js": "../../../../moment/locale/gu.js",
	"./he": "../../../../moment/locale/he.js",
	"./he.js": "../../../../moment/locale/he.js",
	"./hi": "../../../../moment/locale/hi.js",
	"./hi.js": "../../../../moment/locale/hi.js",
	"./hr": "../../../../moment/locale/hr.js",
	"./hr.js": "../../../../moment/locale/hr.js",
	"./hu": "../../../../moment/locale/hu.js",
	"./hu.js": "../../../../moment/locale/hu.js",
	"./hy-am": "../../../../moment/locale/hy-am.js",
	"./hy-am.js": "../../../../moment/locale/hy-am.js",
	"./id": "../../../../moment/locale/id.js",
	"./id.js": "../../../../moment/locale/id.js",
	"./is": "../../../../moment/locale/is.js",
	"./is.js": "../../../../moment/locale/is.js",
	"./it": "../../../../moment/locale/it.js",
	"./it.js": "../../../../moment/locale/it.js",
	"./ja": "../../../../moment/locale/ja.js",
	"./ja.js": "../../../../moment/locale/ja.js",
	"./jv": "../../../../moment/locale/jv.js",
	"./jv.js": "../../../../moment/locale/jv.js",
	"./ka": "../../../../moment/locale/ka.js",
	"./ka.js": "../../../../moment/locale/ka.js",
	"./kk": "../../../../moment/locale/kk.js",
	"./kk.js": "../../../../moment/locale/kk.js",
	"./km": "../../../../moment/locale/km.js",
	"./km.js": "../../../../moment/locale/km.js",
	"./kn": "../../../../moment/locale/kn.js",
	"./kn.js": "../../../../moment/locale/kn.js",
	"./ko": "../../../../moment/locale/ko.js",
	"./ko.js": "../../../../moment/locale/ko.js",
	"./ky": "../../../../moment/locale/ky.js",
	"./ky.js": "../../../../moment/locale/ky.js",
	"./lb": "../../../../moment/locale/lb.js",
	"./lb.js": "../../../../moment/locale/lb.js",
	"./lo": "../../../../moment/locale/lo.js",
	"./lo.js": "../../../../moment/locale/lo.js",
	"./lt": "../../../../moment/locale/lt.js",
	"./lt.js": "../../../../moment/locale/lt.js",
	"./lv": "../../../../moment/locale/lv.js",
	"./lv.js": "../../../../moment/locale/lv.js",
	"./me": "../../../../moment/locale/me.js",
	"./me.js": "../../../../moment/locale/me.js",
	"./mi": "../../../../moment/locale/mi.js",
	"./mi.js": "../../../../moment/locale/mi.js",
	"./mk": "../../../../moment/locale/mk.js",
	"./mk.js": "../../../../moment/locale/mk.js",
	"./ml": "../../../../moment/locale/ml.js",
	"./ml.js": "../../../../moment/locale/ml.js",
	"./mn": "../../../../moment/locale/mn.js",
	"./mn.js": "../../../../moment/locale/mn.js",
	"./mr": "../../../../moment/locale/mr.js",
	"./mr.js": "../../../../moment/locale/mr.js",
	"./ms": "../../../../moment/locale/ms.js",
	"./ms-my": "../../../../moment/locale/ms-my.js",
	"./ms-my.js": "../../../../moment/locale/ms-my.js",
	"./ms.js": "../../../../moment/locale/ms.js",
	"./mt": "../../../../moment/locale/mt.js",
	"./mt.js": "../../../../moment/locale/mt.js",
	"./my": "../../../../moment/locale/my.js",
	"./my.js": "../../../../moment/locale/my.js",
	"./nb": "../../../../moment/locale/nb.js",
	"./nb.js": "../../../../moment/locale/nb.js",
	"./ne": "../../../../moment/locale/ne.js",
	"./ne.js": "../../../../moment/locale/ne.js",
	"./nl": "../../../../moment/locale/nl.js",
	"./nl-be": "../../../../moment/locale/nl-be.js",
	"./nl-be.js": "../../../../moment/locale/nl-be.js",
	"./nl.js": "../../../../moment/locale/nl.js",
	"./nn": "../../../../moment/locale/nn.js",
	"./nn.js": "../../../../moment/locale/nn.js",
	"./pa-in": "../../../../moment/locale/pa-in.js",
	"./pa-in.js": "../../../../moment/locale/pa-in.js",
	"./pl": "../../../../moment/locale/pl.js",
	"./pl.js": "../../../../moment/locale/pl.js",
	"./pt": "../../../../moment/locale/pt.js",
	"./pt-br": "../../../../moment/locale/pt-br.js",
	"./pt-br.js": "../../../../moment/locale/pt-br.js",
	"./pt.js": "../../../../moment/locale/pt.js",
	"./ro": "../../../../moment/locale/ro.js",
	"./ro.js": "../../../../moment/locale/ro.js",
	"./ru": "../../../../moment/locale/ru.js",
	"./ru.js": "../../../../moment/locale/ru.js",
	"./sd": "../../../../moment/locale/sd.js",
	"./sd.js": "../../../../moment/locale/sd.js",
	"./se": "../../../../moment/locale/se.js",
	"./se.js": "../../../../moment/locale/se.js",
	"./si": "../../../../moment/locale/si.js",
	"./si.js": "../../../../moment/locale/si.js",
	"./sk": "../../../../moment/locale/sk.js",
	"./sk.js": "../../../../moment/locale/sk.js",
	"./sl": "../../../../moment/locale/sl.js",
	"./sl.js": "../../../../moment/locale/sl.js",
	"./sq": "../../../../moment/locale/sq.js",
	"./sq.js": "../../../../moment/locale/sq.js",
	"./sr": "../../../../moment/locale/sr.js",
	"./sr-cyrl": "../../../../moment/locale/sr-cyrl.js",
	"./sr-cyrl.js": "../../../../moment/locale/sr-cyrl.js",
	"./sr.js": "../../../../moment/locale/sr.js",
	"./ss": "../../../../moment/locale/ss.js",
	"./ss.js": "../../../../moment/locale/ss.js",
	"./sv": "../../../../moment/locale/sv.js",
	"./sv.js": "../../../../moment/locale/sv.js",
	"./sw": "../../../../moment/locale/sw.js",
	"./sw.js": "../../../../moment/locale/sw.js",
	"./ta": "../../../../moment/locale/ta.js",
	"./ta.js": "../../../../moment/locale/ta.js",
	"./te": "../../../../moment/locale/te.js",
	"./te.js": "../../../../moment/locale/te.js",
	"./tet": "../../../../moment/locale/tet.js",
	"./tet.js": "../../../../moment/locale/tet.js",
	"./tg": "../../../../moment/locale/tg.js",
	"./tg.js": "../../../../moment/locale/tg.js",
	"./th": "../../../../moment/locale/th.js",
	"./th.js": "../../../../moment/locale/th.js",
	"./tl-ph": "../../../../moment/locale/tl-ph.js",
	"./tl-ph.js": "../../../../moment/locale/tl-ph.js",
	"./tlh": "../../../../moment/locale/tlh.js",
	"./tlh.js": "../../../../moment/locale/tlh.js",
	"./tr": "../../../../moment/locale/tr.js",
	"./tr.js": "../../../../moment/locale/tr.js",
	"./tzl": "../../../../moment/locale/tzl.js",
	"./tzl.js": "../../../../moment/locale/tzl.js",
	"./tzm": "../../../../moment/locale/tzm.js",
	"./tzm-latn": "../../../../moment/locale/tzm-latn.js",
	"./tzm-latn.js": "../../../../moment/locale/tzm-latn.js",
	"./tzm.js": "../../../../moment/locale/tzm.js",
	"./ug-cn": "../../../../moment/locale/ug-cn.js",
	"./ug-cn.js": "../../../../moment/locale/ug-cn.js",
	"./uk": "../../../../moment/locale/uk.js",
	"./uk.js": "../../../../moment/locale/uk.js",
	"./ur": "../../../../moment/locale/ur.js",
	"./ur.js": "../../../../moment/locale/ur.js",
	"./uz": "../../../../moment/locale/uz.js",
	"./uz-latn": "../../../../moment/locale/uz-latn.js",
	"./uz-latn.js": "../../../../moment/locale/uz-latn.js",
	"./uz.js": "../../../../moment/locale/uz.js",
	"./vi": "../../../../moment/locale/vi.js",
	"./vi.js": "../../../../moment/locale/vi.js",
	"./x-pseudo": "../../../../moment/locale/x-pseudo.js",
	"./x-pseudo.js": "../../../../moment/locale/x-pseudo.js",
	"./yo": "../../../../moment/locale/yo.js",
	"./yo.js": "../../../../moment/locale/yo.js",
	"./zh-cn": "../../../../moment/locale/zh-cn.js",
	"./zh-cn.js": "../../../../moment/locale/zh-cn.js",
	"./zh-hk": "../../../../moment/locale/zh-hk.js",
	"./zh-hk.js": "../../../../moment/locale/zh-hk.js",
	"./zh-tw": "../../../../moment/locale/zh-tw.js",
	"./zh-tw.js": "../../../../moment/locale/zh-tw.js"
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "../../../../moment/locale recursive ^\\.\\/.*$";

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map