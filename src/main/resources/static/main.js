(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/api-service/project.service.ts":
/*!************************************************!*\
  !*** ./src/app/api-service/project.service.ts ***!
  \************************************************/
/*! exports provided: ProjectService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectService", function() { return ProjectService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Access-Control-Allow-Origin': '*'
    })
};
var ProjectService = /** @class */ (function () {
    function ProjectService(http) {
        this.http = http;
        this.baseUrl = '/projects/';
    }
    ProjectService.prototype.getAllProjects = function () {
        return this.http.get(this.baseUrl, httpOptions);
    };
    ProjectService.prototype.getProject = function (id) {
        return this.http.get(this.baseUrl + id, httpOptions);
    };
    ProjectService.prototype.addProject = function (project) {
        return this.http.post(this.baseUrl, project, httpOptions);
    };
    ProjectService.prototype.updateProject = function (project) {
        return this.http.put(this.baseUrl + project.projectId, project, httpOptions);
    };
    ProjectService.prototype.deleteProject = function (id) {
        return this.http.delete(this.baseUrl + id);
    };
    ProjectService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], ProjectService);
    return ProjectService;
}());



/***/ }),

/***/ "./src/app/api-service/task.service.ts":
/*!*********************************************!*\
  !*** ./src/app/api-service/task.service.ts ***!
  \*********************************************/
/*! exports provided: TaskService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskService", function() { return TaskService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Access-Control-Allow-Origin': '*'
    })
};
var TaskService = /** @class */ (function () {
    //baseUrl: string = 'http://localhost:8080/ProjectManager/tasks/';
    function TaskService(http) {
        this.http = http;
        this.baseUrl = '/tasks/';
    }
    TaskService.prototype.getAllTasks = function () {
        return this.http.get(this.baseUrl, httpOptions);
    };
    TaskService.prototype.getTask = function (id) {
        return this.http.get(this.baseUrl + id, httpOptions);
    };
    TaskService.prototype.addTask = function (task) {
        return this.http.post(this.baseUrl, task, httpOptions);
    };
    TaskService.prototype.updateTask = function (task) {
        return this.http.put(this.baseUrl + task.taskId, task, httpOptions);
    };
    TaskService.prototype.deleteTask = function (id) {
        return this.http.delete(this.baseUrl + id);
    };
    TaskService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({ providedIn: 'root' }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], TaskService);
    return TaskService;
}());



/***/ }),

/***/ "./src/app/api-service/user.service.ts":
/*!*********************************************!*\
  !*** ./src/app/api-service/user.service.ts ***!
  \*********************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Access-Control-Allow-Origin': '*'
    })
};
var UserService = /** @class */ (function () {
    function UserService(http) {
        this.http = http;
        this.baseUrl = '/users/';
    }
    UserService.prototype.getAllUsers = function () {
        return this.http.get(this.baseUrl, httpOptions);
    };
    UserService.prototype.getUser = function (id) {
        return this.http.get(this.baseUrl + id, httpOptions);
    };
    UserService.prototype.addUser = function (user) {
        return this.http.post(this.baseUrl, user, httpOptions);
    };
    UserService.prototype.updateUser = function (user) {
        return this.http.put(this.baseUrl + user.userId, user, httpOptions);
    };
    UserService.prototype.deleteUser = function (id) {
        return this.http.delete(this.baseUrl + id);
    };
    UserService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _task_add_task_add_task_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./task/add-task/add-task.component */ "./src/app/task/add-task/add-task.component.ts");
/* harmony import */ var _task_view_task_view_task_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./task/view-task/view-task.component */ "./src/app/task/view-task/view-task.component.ts");
/* harmony import */ var _task_edit_task_edit_task_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./task/edit-task/edit-task.component */ "./src/app/task/edit-task/edit-task.component.ts");
/* harmony import */ var _user_add_user_add_user_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./user/add-user/add-user.component */ "./src/app/user/add-user/add-user.component.ts");
/* harmony import */ var _user_view_user_view_user_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./user/view-user/view-user.component */ "./src/app/user/view-user/view-user.component.ts");
/* harmony import */ var _user_edit_user_edit_user_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./user/edit-user/edit-user.component */ "./src/app/user/edit-user/edit-user.component.ts");
/* harmony import */ var _project_add_project_add_project_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./project/add-project/add-project.component */ "./src/app/project/add-project/add-project.component.ts");
/* harmony import */ var _project_view_project_view_project_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./project/view-project/view-project.component */ "./src/app/project/view-project/view-project.component.ts");
/* harmony import */ var _project_edit_project_edit_project_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./project/edit-project/edit-project.component */ "./src/app/project/edit-project/edit-project.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var routes = [
    { path: '', redirectTo: 'view-users', pathMatch: 'full' },
    { path: 'view-users', component: _user_view_user_view_user_component__WEBPACK_IMPORTED_MODULE_6__["ViewUserComponent"] },
    { path: 'add-user', component: _user_add_user_add_user_component__WEBPACK_IMPORTED_MODULE_5__["AddUserComponent"] },
    { path: 'edit-user', component: _user_edit_user_edit_user_component__WEBPACK_IMPORTED_MODULE_7__["EditUserComponent"] },
    { path: 'view-projects', component: _project_view_project_view_project_component__WEBPACK_IMPORTED_MODULE_9__["ViewProjectComponent"] },
    { path: 'add-project', component: _project_add_project_add_project_component__WEBPACK_IMPORTED_MODULE_8__["AddProjectComponent"] },
    { path: 'edit-project', component: _project_edit_project_edit_project_component__WEBPACK_IMPORTED_MODULE_10__["EditProjectComponent"] },
    { path: 'view-tasks', component: _task_view_task_view_task_component__WEBPACK_IMPORTED_MODULE_3__["ViewTaskComponent"] },
    { path: 'add-task', component: _task_add_task_add_task_component__WEBPACK_IMPORTED_MODULE_2__["AddTaskComponent"] },
    { path: 'edit-task', component: _task_edit_task_edit_task_component__WEBPACK_IMPORTED_MODULE_4__["EditTaskComponent"] },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<br>\n<div style=\"text-align:center\">\n  <h1>\n    {{ title }}\n  </h1>\n</div>\n<br/>\n<div id=\"app-description\">\n    <span style=\"text-align: center\">\n      <h6>Project Manager App is a simple web application allowing users to create and keep track of upcoming tasks, finished tasks and its priorities for a project.</h6>\n    </span>\n</div>\n<br/>\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'Project Manager';
        this.selection_add = '';
        this.selection_view = 'active';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _nav_bar_navbar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./nav-bar/navbar.component */ "./src/app/nav-bar/navbar.component.ts");
/* harmony import */ var _task_add_task_add_task_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./task/add-task/add-task.component */ "./src/app/task/add-task/add-task.component.ts");
/* harmony import */ var _task_edit_task_edit_task_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./task/edit-task/edit-task.component */ "./src/app/task/edit-task/edit-task.component.ts");
/* harmony import */ var _task_view_task_view_task_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./task/view-task/view-task.component */ "./src/app/task/view-task/view-task.component.ts");
/* harmony import */ var _api_service_user_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./api-service/user.service */ "./src/app/api-service/user.service.ts");
/* harmony import */ var _api_service_project_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./api-service/project.service */ "./src/app/api-service/project.service.ts");
/* harmony import */ var _api_service_task_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./api-service/task.service */ "./src/app/api-service/task.service.ts");
/* harmony import */ var _sort_filter_order_by_task_name_pipe__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./sort-filter/order-by-task-name.pipe */ "./src/app/sort-filter/order-by-task-name.pipe.ts");
/* harmony import */ var _sort_filter_task_filter_pipe__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./sort-filter/task-filter.pipe */ "./src/app/sort-filter/task-filter.pipe.ts");
/* harmony import */ var _user_add_user_add_user_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./user/add-user/add-user.component */ "./src/app/user/add-user/add-user.component.ts");
/* harmony import */ var _user_view_user_view_user_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./user/view-user/view-user.component */ "./src/app/user/view-user/view-user.component.ts");
/* harmony import */ var _user_edit_user_edit_user_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./user/edit-user/edit-user.component */ "./src/app/user/edit-user/edit-user.component.ts");
/* harmony import */ var _project_add_project_add_project_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./project/add-project/add-project.component */ "./src/app/project/add-project/add-project.component.ts");
/* harmony import */ var _project_view_project_view_project_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./project/view-project/view-project.component */ "./src/app/project/view-project/view-project.component.ts");
/* harmony import */ var _project_edit_project_edit_project_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./project/edit-project/edit-project.component */ "./src/app/project/edit-project/edit-project.component.ts");
/* harmony import */ var _sort_filter_user_filter_pipe__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./sort-filter/user-filter.pipe */ "./src/app/sort-filter/user-filter.pipe.ts");
/* harmony import */ var _sort_filter_project_filter_pipe__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./sort-filter/project-filter.pipe */ "./src/app/sort-filter/project-filter.pipe.ts");
/* harmony import */ var _sort_filter_order_by_project_name_pipe__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./sort-filter/order-by-project-name.pipe */ "./src/app/sort-filter/order-by-project-name.pipe.ts");
/* harmony import */ var _sort_filter_order_by_employee_id_pipe__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./sort-filter/order-by-employee-id.pipe */ "./src/app/sort-filter/order-by-employee-id.pipe.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _nav_bar_navbar_component__WEBPACK_IMPORTED_MODULE_7__["NavbarComponent"],
                _task_add_task_add_task_component__WEBPACK_IMPORTED_MODULE_8__["AddTaskComponent"],
                _task_edit_task_edit_task_component__WEBPACK_IMPORTED_MODULE_9__["EditTaskComponent"],
                _task_view_task_view_task_component__WEBPACK_IMPORTED_MODULE_10__["ViewTaskComponent"],
                _sort_filter_order_by_task_name_pipe__WEBPACK_IMPORTED_MODULE_14__["OrderByTaskNamePipe"],
                _sort_filter_task_filter_pipe__WEBPACK_IMPORTED_MODULE_15__["TaskFilterPipe"],
                _user_add_user_add_user_component__WEBPACK_IMPORTED_MODULE_16__["AddUserComponent"],
                _user_view_user_view_user_component__WEBPACK_IMPORTED_MODULE_17__["ViewUserComponent"],
                _user_edit_user_edit_user_component__WEBPACK_IMPORTED_MODULE_18__["EditUserComponent"],
                _project_add_project_add_project_component__WEBPACK_IMPORTED_MODULE_19__["AddProjectComponent"],
                _project_view_project_view_project_component__WEBPACK_IMPORTED_MODULE_20__["ViewProjectComponent"],
                _project_edit_project_edit_project_component__WEBPACK_IMPORTED_MODULE_21__["EditProjectComponent"],
                _sort_filter_user_filter_pipe__WEBPACK_IMPORTED_MODULE_22__["UserFilterPipe"],
                _sort_filter_project_filter_pipe__WEBPACK_IMPORTED_MODULE_23__["ProjectFilterPipe"],
                _sort_filter_order_by_project_name_pipe__WEBPACK_IMPORTED_MODULE_24__["OrderByProjectNamePipe"],
                _sort_filter_order_by_employee_id_pipe__WEBPACK_IMPORTED_MODULE_25__["OrderByEmployeeIdPipe"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_3__["HttpModule"]
            ],
            providers: [_api_service_user_service__WEBPACK_IMPORTED_MODULE_11__["UserService"], _api_service_project_service__WEBPACK_IMPORTED_MODULE_12__["ProjectService"], _api_service_task_service__WEBPACK_IMPORTED_MODULE_13__["TaskService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/nav-bar/navbar.component.html":
/*!***********************************************!*\
  !*** ./src/app/nav-bar/navbar.component.html ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\r\n    <div class=\"card-header\">\r\n        <nav>\r\n            <div class=\"nav nav-pills\" id=\"nav-tab\" role=\"tablist\">\r\n                <a class=\"nav-item nav-link\" id=\"nav-add-user-tab\" data-target=\"_self\" aria-selected=\"false\" routerLink=\"/add-user\" routerLinkActive=\"active show\" style=\"cursor: pointer;\">Add User</a>\r\n                <a class=\"nav-item nav-link\" id=\"nav-view-users-tab\" data-target=\"_self\" aria-selected=\"true\" routerLink=\"/view-users\" routerLinkActive=\"active show\" style=\"cursor: pointer;\">View User</a>\r\n                <a class=\"nav-item nav-link\" id=\"nav-add-project-tab\" data-target=\"_self\" aria-selected=\"false\" routerLink=\"/add-project\" routerLinkActive=\"active show\" style=\"cursor: pointer;\">Add Project</a>\r\n                <a class=\"nav-item nav-link\" id=\"nav-view-projects-tab\" data-target=\"_self\" aria-selected=\"false\" routerLink=\"/view-projects\" routerLinkActive=\"active show\" style=\"cursor: pointer;\">View Project</a>\r\n                <a class=\"nav-item nav-link\" id=\"nav-add-task-tab\" data-target=\"_self\" aria-selected=\"false\" routerLink=\"/add-task\" routerLinkActive=\"active show\" style=\"cursor: pointer;\">Add Task</a>\r\n                <a class=\"nav-item nav-link\" id=\"nav-view-tasks-tab\" data-target=\"_self\" aria-selected=\"false\" routerLink=\"/view-tasks\" routerLinkActive=\"active show\" style=\"cursor: pointer;\">View Task</a>\r\n            </div>\r\n        </nav>\r\n    </div>\r\n</div>\r\n<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/nav-bar/navbar.component.ts":
/*!*********************************************!*\
  !*** ./src/app/nav-bar/navbar.component.ts ***!
  \*********************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(router) {
        this.router = router;
    }
    NavbarComponent.prototype.addTask = function () {
        this.router.navigate(['add-task']);
    };
    NavbarComponent.prototype.viewTasks = function () {
        this.router.navigate(['view-tasks']);
    };
    NavbarComponent.prototype.addUser = function () {
        this.router.navigate(['add-user']);
    };
    NavbarComponent.prototype.viewUsers = function () {
        this.router.navigate(['view-users']);
    };
    NavbarComponent.prototype.addProject = function () {
        this.router.navigate(['add-project']);
    };
    NavbarComponent.prototype.viewProjects = function () {
        this.router.navigate(['view-projects']);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], NavbarComponent.prototype, "addTaskSelected", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], NavbarComponent.prototype, "viewTasksSelected", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], NavbarComponent.prototype, "addUserSelected", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], NavbarComponent.prototype, "viewUsersSelected", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], NavbarComponent.prototype, "addProjectSelected", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], NavbarComponent.prototype, "viewProjectsSelected", void 0);
    NavbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'nav-bar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/nav-bar/navbar.component.html")
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/project/add-project/add-project.component.css":
/*!***************************************************************!*\
  !*** ./src/app/project/add-project/add-project.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".slider {\r\n\t-webkit-appearance: none;\r\n\twidth: 100%;\r\n\theight: 15px;\r\n\tborder-radius: 5px;   \r\n\toutline: none;\r\n\topacity: 0.7;\r\n\ttransition: opacity .2s;\r\n}\r\n  \r\n.slider::-webkit-slider-thumb {\r\n    -webkit-appearance: none;\r\n    appearance: none;\r\n    width: 30px;\r\n    height: 30px;\r\n    border-radius: 50%; \r\n    background: #007bff;\r\n    cursor: pointer;\r\n}\r\n  \r\n.slider::-moz-range-thumb {\r\n    width: 30px;\r\n    height: 30px;\r\n    border-radius: 50%;\r\n    background: #007bff;\r\n    cursor: pointer;\r\n}\r\n  \r\n.slider::-ms-thumb {\r\n    width: 30px;\r\n    height: 30px;\r\n    border-radius: 50%;\r\n    background: #007bff;\r\n    cursor: pointer;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvamVjdC9hZGQtcHJvamVjdC9hZGQtcHJvamVjdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0NBQ0MseUJBQXlCO0NBQ3pCLFlBQVk7Q0FDWixhQUFhO0NBQ2IsbUJBQW1CO0NBQ25CLGNBQWM7Q0FDZCxhQUFhO0NBRWIsd0JBQXdCO0NBQ3hCOztBQUVEO0lBQ0kseUJBQXlCO0lBQ3pCLGlCQUFpQjtJQUNqQixZQUFZO0lBQ1osYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixvQkFBb0I7SUFDcEIsZ0JBQWdCO0NBQ25COztBQUVEO0lBQ0ksWUFBWTtJQUNaLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsb0JBQW9CO0lBQ3BCLGdCQUFnQjtDQUNuQjs7QUFFRDtJQUNJLFlBQVk7SUFDWixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLG9CQUFvQjtJQUNwQixnQkFBZ0I7Q0FDbkIiLCJmaWxlIjoic3JjL2FwcC9wcm9qZWN0L2FkZC1wcm9qZWN0L2FkZC1wcm9qZWN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2xpZGVyIHtcclxuXHQtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XHJcblx0d2lkdGg6IDEwMCU7XHJcblx0aGVpZ2h0OiAxNXB4O1xyXG5cdGJvcmRlci1yYWRpdXM6IDVweDsgICBcclxuXHRvdXRsaW5lOiBub25lO1xyXG5cdG9wYWNpdHk6IDAuNztcclxuXHQtd2Via2l0LXRyYW5zaXRpb246IC4ycztcclxuXHR0cmFuc2l0aW9uOiBvcGFjaXR5IC4ycztcclxufVxyXG4gIFxyXG4uc2xpZGVyOjotd2Via2l0LXNsaWRlci10aHVtYiB7XHJcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XHJcbiAgICBhcHBlYXJhbmNlOiBub25lO1xyXG4gICAgd2lkdGg6IDMwcHg7XHJcbiAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7IFxyXG4gICAgYmFja2dyb3VuZDogIzAwN2JmZjtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4gIFxyXG4uc2xpZGVyOjotbW96LXJhbmdlLXRodW1iIHtcclxuICAgIHdpZHRoOiAzMHB4O1xyXG4gICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgYmFja2dyb3VuZDogIzAwN2JmZjtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4gIFxyXG4uc2xpZGVyOjotbXMtdGh1bWIge1xyXG4gICAgd2lkdGg6IDMwcHg7XHJcbiAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMDA3YmZmO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/project/add-project/add-project.component.html":
/*!****************************************************************!*\
  !*** ./src/app/project/add-project/add-project.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav-bar></nav-bar>\n<br/>\n<div class=\"container-fluid\">\n    <h3 style=\"padding-left: 10px;\">Add Project</h3>\n    <form *ngIf=\"addProjectForm\" [formGroup]=\"addProjectForm\" (ngSubmit)=\"onSubmit()\">\n        <table border=\"0\" cellspacing=\"0\" cellpadding=\"10\" style=\"width: 60%\">\n            <tr class=\"form-group\">\n                <td width=\"20%\">\n                    <label>Project</label>\n                </td>\n                <td width=\"10%\"></td>\n                <td width=\"70%\">\n                    <input type=\"text\" class=\"form-control\" id=\"projectName\" formControlName=\"projectName\" placeholder=\"Project Name\" autofocus/>\n                </td>\n            </tr>\n            <tr class=\"form-group\">\n                <td width=\"20%\">\n                    <label>Priority</label>\n                </td>\n                <td width=\"10%\"></td>\n                <td width=\"70%\">\n                    <input type=\"range\" class=\"form-control slider\" min=\"0\" max=\"30\" id=\"priority\" formControlName=\"priority\" [(ngModel)]=\"rangeValue\" title=\"{{rangeValue}}\" />\n                </td>\n            </tr>\n            <tr class=\"form-group\">\n                <td width=\"20%\">\n                    <label>Manager</label>\n                </td>\n                <td width=\"10%\"></td>\n                <td width=\"70%\">\n                    <div formGroupName=\"user\" novalidate>\n                        <input type=\"text\" class=\"form-control\" id=\"employeeId\" formControlName=\"employeeId\" placeholder=\"Employee Id\"/>\n                    </div>\n                </td>\n            </tr>\n            <tr>\n                <td></td>\n                <td></td>\n                <td>\n                    <input type=\"checkbox\" id=\"toggleDateRowsId\" checked=\"true\" onclick=\"toggleDateRows()\"/>&nbsp;<label>Set Start and End Date</label>\n                </td>\n            </tr>            \n            <tr class=\"form-group\" id=\"startDateRowId\">\n                <td width=\"20%\">\n                    <label>Start Date</label>\n                </td>\n                <td width=\"10%\"></td>\n                <td width=\"70%\">\n                    <input type=\"date\" class=\"form-control\" id=\"startDate\" formControlName=\"startDate\"/>\n                </td>\n            </tr>\n            <tr class=\"form-group\" id=\"endDateRowId\">\n                <td width=\"20%\">\n                    <label>End Date</label>\n                </td>\n                <td width=\"10%\"></td>\n                <td width=\"70%\">\n                    <input type=\"date\" class=\"form-control\" id=\"endDate\" formControlName=\"endDate\"/>\n                </td>\n            </tr>            \n        </table>\n        <br>\n        <table border=\"0\" cellspacing=\"0\" cellpading=\"0\">\n            <tr>\n                <td width=\"45%\">\n                    <button type=\"submit\" class=\"btn btn-success\" [disabled]=\"!addProjectForm.valid\" style=\"width: 120px; cursor: pointer;\">Add Project</button>\n                </td>\n                <td width=\"10%\"></td>\n                <td width=\"45%\">\n                    <button type=\"button\" class=\"btn btn-primary\" (click)=\"reset()\" style=\"width: 100px; cursor: pointer;\">Reset</button>\n                </td>\n            </tr>\n        </table>\n    </form>\n</div>"

/***/ }),

/***/ "./src/app/project/add-project/add-project.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/project/add-project/add-project.component.ts ***!
  \**************************************************************/
/*! exports provided: AddProjectComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddProjectComponent", function() { return AddProjectComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _api_service_project_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../api-service/project.service */ "./src/app/api-service/project.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AddProjectComponent = /** @class */ (function () {
    function AddProjectComponent(formBuilder, projectService, router) {
        this.formBuilder = formBuilder;
        this.projectService = projectService;
        this.router = router;
        this.addProjectForm = this.initializeFormGroup();
    }
    AddProjectComponent.prototype.initializeFormGroup = function () {
        return this.formBuilder.group({
            projectId: [''],
            projectName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            user: this.formBuilder.group({
                userId: [''],
                employeeId: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
                firstName: [''],
                lastName: [''],
                active: ['']
            }),
            priority: ['15', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].min(0), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].max(30)])],
            startDate: [''],
            endDate: [''],
            active: ['Y'],
            noOfTasks: [''],
            completed: ['']
        });
    };
    AddProjectComponent.prototype.addProject = function () {
        var _this = this;
        var newProject = Object.assign({}, this.addProjectForm.value);
        newProject.user = Object.assign({}, newProject.user);
        this.projectService.addProject(newProject)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["first"])())
            .subscribe(function (data) {
            if (data.statusCode == 201) {
                alert("You've successfully added a new Project!");
                _this.router.navigate(['view-projects']);
            }
            else {
                alert(data.message);
            }
        }, function (error) {
            alert("Sorry! Something went wrong, new project cannot be added at the moment. Please try again.");
        });
    };
    AddProjectComponent.prototype.onSubmit = function () {
        this.addProject();
    };
    AddProjectComponent.prototype.reset = function () {
        this.addProjectForm.reset({
            projectId: '',
            projectName: '',
            user: ({
                userId: '',
                employeeId: ''
            }),
            priority: '15',
            startDate: '',
            endDate: '',
            active: 'Y'
        });
    };
    AddProjectComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'add-project',
            template: __webpack_require__(/*! ./add-project.component.html */ "./src/app/project/add-project/add-project.component.html"),
            styles: [__webpack_require__(/*! ./add-project.component.css */ "./src/app/project/add-project/add-project.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], _api_service_project_service__WEBPACK_IMPORTED_MODULE_2__["ProjectService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], AddProjectComponent);
    return AddProjectComponent;
}());



/***/ }),

/***/ "./src/app/project/edit-project/edit-project.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/project/edit-project/edit-project.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".slider {\r\n\t-webkit-appearance: none;\r\n\twidth: 100%;\r\n\theight: 15px;\r\n\tborder-radius: 5px;   \r\n\tbackground: #d3d3d3;\r\n\toutline: none;\r\n\topacity: 0.7;\r\n\ttransition: opacity .2s;\r\n  }\r\n  \r\n  .slider::-webkit-slider-thumb {\r\n\t-webkit-appearance: none;\r\n\tappearance: none;\r\n\twidth: 30px;\r\n\theight: 30px;\r\n\tborder-radius: 50%; \r\n\tbackground: #007bff;\r\n\tcursor: pointer;\r\n  }\r\n  \r\n  .slider::-moz-range-thumb {\r\n\twidth: 30px;\r\n\theight: 30px;\r\n\tborder-radius: 50%;\r\n\tbackground: #007bff;\r\n\tcursor: pointer;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvamVjdC9lZGl0LXByb2plY3QvZWRpdC1wcm9qZWN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Q0FDQyx5QkFBeUI7Q0FDekIsWUFBWTtDQUNaLGFBQWE7Q0FDYixtQkFBbUI7Q0FDbkIsb0JBQW9CO0NBQ3BCLGNBQWM7Q0FDZCxhQUFhO0NBRWIsd0JBQXdCO0dBQ3RCOztFQUVEO0NBQ0QseUJBQXlCO0NBQ3pCLGlCQUFpQjtDQUNqQixZQUFZO0NBQ1osYUFBYTtDQUNiLG1CQUFtQjtDQUNuQixvQkFBb0I7Q0FDcEIsZ0JBQWdCO0dBQ2Q7O0VBRUQ7Q0FDRCxZQUFZO0NBQ1osYUFBYTtDQUNiLG1CQUFtQjtDQUNuQixvQkFBb0I7Q0FDcEIsZ0JBQWdCO0dBQ2QiLCJmaWxlIjoic3JjL2FwcC9wcm9qZWN0L2VkaXQtcHJvamVjdC9lZGl0LXByb2plY3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zbGlkZXIge1xyXG5cdC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcclxuXHR3aWR0aDogMTAwJTtcclxuXHRoZWlnaHQ6IDE1cHg7XHJcblx0Ym9yZGVyLXJhZGl1czogNXB4OyAgIFxyXG5cdGJhY2tncm91bmQ6ICNkM2QzZDM7XHJcblx0b3V0bGluZTogbm9uZTtcclxuXHRvcGFjaXR5OiAwLjc7XHJcblx0LXdlYmtpdC10cmFuc2l0aW9uOiAuMnM7XHJcblx0dHJhbnNpdGlvbjogb3BhY2l0eSAuMnM7XHJcbiAgfVxyXG4gIFxyXG4gIC5zbGlkZXI6Oi13ZWJraXQtc2xpZGVyLXRodW1iIHtcclxuXHQtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XHJcblx0YXBwZWFyYW5jZTogbm9uZTtcclxuXHR3aWR0aDogMzBweDtcclxuXHRoZWlnaHQ6IDMwcHg7XHJcblx0Ym9yZGVyLXJhZGl1czogNTAlOyBcclxuXHRiYWNrZ3JvdW5kOiAjMDA3YmZmO1xyXG5cdGN1cnNvcjogcG9pbnRlcjtcclxuICB9XHJcbiAgXHJcbiAgLnNsaWRlcjo6LW1vei1yYW5nZS10aHVtYiB7XHJcblx0d2lkdGg6IDMwcHg7XHJcblx0aGVpZ2h0OiAzMHB4O1xyXG5cdGJvcmRlci1yYWRpdXM6IDUwJTtcclxuXHRiYWNrZ3JvdW5kOiAjMDA3YmZmO1xyXG5cdGN1cnNvcjogcG9pbnRlcjtcclxuICB9Il19 */"

/***/ }),

/***/ "./src/app/project/edit-project/edit-project.component.html":
/*!******************************************************************!*\
  !*** ./src/app/project/edit-project/edit-project.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<br/>\n<div class=\"container-fluid\">\n    <h3 style=\"padding-left: 10px;\">Edit Project</h3>\n    <form *ngIf=\"editProjectForm\" [formGroup]=\"editProjectForm\" (ngSubmit)=\"onSubmit()\">\n        <div class=\"hidden\">\n            <input type=\"hidden\" class=\"form-control\" id=\"projectId\" formControlName=\"projectId\"/>\n        </div>\n        <table border=\"0\" cellspacing=\"0\" cellpadding=\"10\" style=\"width: 60%\">\n          <thead>\n            <th width=\"20%\"></th>\n            <th width=\"10%\"></th>\n            <th width=\"70%\"></th>\n          </thead>\n          <tbody>\n            <tr class=\"form-group\">\n                <td>\n                    <label>Project</label>\n                </td>\n                <td></td>\n                <td>\n                    <input type=\"text\" class=\"form-control\" id=\"projectName\" formControlName=\"projectName\" autofocus/>\n                </td>\n            </tr>\n            <tr class=\"form-group\">\n                <td>\n                    <label>Priority</label>\n                </td>\n                <td></td>\n                <td>\n                    <input type=\"range\" class=\"form-control slider\" min=\"0\" max=\"30\" id=\"priority\" formControlName=\"priority\" [(ngModel)]=\"rangeValue\" title=\"{{rangeValue}}\" />\n                </td>\n            </tr>\n            <tr class=\"form-group\">\n                <td>\n                    <label>Manager</label>\n                </td>\n                <td></td>\n                <td>\n                    <div formGroupName=\"user\" novalidate>\n                        <div class=\"hidden\">\n                            <input type=\"hidden\" class=\"form-control\" id=\"userId\" formControlName=\"userId\"/>\n                        </div>\n                        <input type=\"text\" class=\"form-control\" id=\"employeeId\" formControlName=\"employeeId\"/>\n                    </div>\n                </td>\n            </tr>\n            <tr>\n                <td></td>\n                <td></td>\n                <td>\n                    <input type=\"checkbox\" id=\"toggleDateRowsId\" checked=\"true\" onclick=\"toggleDateRows()\"/>&nbsp;<label>Set Start and End Date</label>\n                </td>\n            </tr>\n            <tr class=\"form-group\" id=\"startDateRowId\">\n                <td>\n                    <label>Start Date</label>\n                </td>\n                <td></td>\n                <td>\n                    <input type=\"date\" class=\"form-control\" id=\"startDate\" formControlName=\"startDate\"/>\n                </td>\n            </tr>\n            <tr class=\"form-group\" id=\"endDateRowId\">\n                <td>\n                    <label>End Date</label>\n                </td>\n                <td></td>\n                <td>\n                    <input type=\"date\" class=\"form-control\" id=\"endDate\" formControlName=\"endDate\"/>\n                </td>\n            </tr>\n          </tbody>            \n        </table>\n        <br>\n        <div class=\"text-center\">\n        <table border=\"0\" cellspacing=\"0\" cellpading=\"10\">\n            <tr>\n                <td width=\"45%\">\n                    <button type=\"submit\" [disabled]=\"!editProjectForm.valid\" class=\"btn btn-success\" style=\"width: 160px; cursor: pointer;\">Update Project</button>\n                </td>\n                <td width=\"10%\"></td>\n                <td width=\"45%\">\n                    <button type=\"button\" class=\"btn btn-primary\" style=\"width: 120px; cursor: pointer;\" (click)=\"cancelEdit()\">Cancel</button>\n                </td>\n            </tr>\n        </table>\n      </div>\n    </form>\n</div>\n"

/***/ }),

/***/ "./src/app/project/edit-project/edit-project.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/project/edit-project/edit-project.component.ts ***!
  \****************************************************************/
/*! exports provided: EditProjectComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditProjectComponent", function() { return EditProjectComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _api_service_project_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../api-service/project.service */ "./src/app/api-service/project.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var EditProjectComponent = /** @class */ (function () {
    function EditProjectComponent(formBuilder, projectService, router) {
        this.formBuilder = formBuilder;
        this.projectService = projectService;
        this.router = router;
    }
    EditProjectComponent.prototype.ngOnInit = function () {
        var selectedProjectId = window.localStorage.getItem("selectedProjectId");
        if (selectedProjectId) {
            this.editProjectForm = this.initializeFormGroup(this.formBuilder);
            this.getProject(selectedProjectId);
        }
    };
    EditProjectComponent.prototype.initializeFormGroup = function (formBuilder) {
        return formBuilder.group({
            projectId: [''],
            projectName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            user: formBuilder.group({
                userId: [''],
                employeeId: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
                firstName: [''],
                lastName: [''],
                active: ['']
            }),
            priority: ['15', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].min(0), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].max(30)])],
            startDate: [''],
            endDate: [''],
            active: ['Y'],
            noOfTasks: [''],
            completed: ['']
        });
    };
    EditProjectComponent.prototype.getProject = function (projectId) {
        var _this = this;
        this.projectService.getProject(projectId).subscribe(function (data) {
            _this.editProjectForm.setValue(data.response);
        });
    };
    EditProjectComponent.prototype.updateProject = function () {
        var _this = this;
        var editedProject = Object.assign({}, this.editProjectForm.value);
        editedProject.user = Object.assign({}, editedProject.user);
        this.projectService.updateProject(editedProject)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["first"])())
            .subscribe(function (data) {
            if (data.statusCode == 201) {
                alert("You've successfully updated the Project!");
                _this.router.navigate(['view-projects']);
            }
            else {
                alert(data.message);
            }
        }, function (error) {
            alert("Sorry! Something went wrong, update cannot be possible at the moment. Please try again.");
        });
    };
    EditProjectComponent.prototype.onSubmit = function () {
        this.updateProject();
    };
    EditProjectComponent.prototype.cancelEdit = function () {
        this.router.navigate(['view-projects']);
    };
    EditProjectComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'edit-project',
            template: __webpack_require__(/*! ./edit-project.component.html */ "./src/app/project/edit-project/edit-project.component.html"),
            styles: [__webpack_require__(/*! ./edit-project.component.css */ "./src/app/project/edit-project/edit-project.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], _api_service_project_service__WEBPACK_IMPORTED_MODULE_2__["ProjectService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], EditProjectComponent);
    return EditProjectComponent;
}());



/***/ }),

/***/ "./src/app/project/view-project/view-project.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/project/view-project/view-project.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".table-hover tr:hover {\r\n    background-color: #e5f4ff;\r\n}\r\n.align-left {\r\n    text-align: left;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvamVjdC92aWV3LXByb2plY3Qvdmlldy1wcm9qZWN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSwwQkFBMEI7Q0FDN0I7QUFDRDtJQUNJLGlCQUFpQjtDQUNwQiIsImZpbGUiOiJzcmMvYXBwL3Byb2plY3Qvdmlldy1wcm9qZWN0L3ZpZXctcHJvamVjdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRhYmxlLWhvdmVyIHRyOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlNWY0ZmY7XHJcbn1cclxuLmFsaWduLWxlZnQge1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/project/view-project/view-project.component.html":
/*!******************************************************************!*\
  !*** ./src/app/project/view-project/view-project.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav-bar></nav-bar>\n<br/>\n<div class=\"container-fluid\">\n  <h3 style=\"padding-left: 10px;\">View Projects</h3>\n  <div class=\"table-responsive\">\n    <table cellspacing=\"0\" cellpadding=\"10\" style=\"width: 60%\" class=\"table table-bordred table-striped table-hover text-center\">\n      <thead>\n        <th style=\"width: 20%\" title=\"Project\">\n          <label>Project</label> \n          <input type=\"text\" class=\"form-control\" id=\"projectName\" [(ngModel)]=\"projectName\" style=\"width: 100px\"/>\n        </th>\n        <th style=\"width: 10%\" title=\"Priority\">\n          <label>Priority</label>\n          <input type=\"text\" class=\"form-control\" id=\"priority\" [(ngModel)]=\"priority\" />\n        </th>\n        <th style=\"width: 15%\" title=\"No. of Tasks\">\n          <label>No. of Tasks</label>\n          <input type=\"text\" class=\"form-control\" id=\"noOfTasks\" [(ngModel)]=\"noOfTasks\" style=\"width: 100px\" />\n        </th>\n        <th style=\"width: 15%\" title=\"Completed\">\n          <label>Completed</label>\n          <input type=\"text\" class=\"form-control\" id=\"completed\" [(ngModel)]=\"completed\" />\n        </th>\n        <th style=\"width: 15%\" title=\"Start Date\">\n          <label>Start Date</label>\n          <input type=\"date\" class=\"form-control\" id=\"startDate\" [(ngModel)]=\"startDate\" style=\"width: 170px\" />\n        </th>\n        <th style=\"width: 15%\" title=\"End Date\">\n          <label>End Date</label>\n          <input type=\"date\" class=\"form-control\" id=\"endDate\" [(ngModel)]=\"endDate\" style=\"width: 170px\" />\n        </th>\n        <th style=\"width: 10%\" title=\"Update\">Update</th>\n        <th style=\"width: 10%\" title=\"Suspend\">Suspend</th>\n      </thead>\n      <tbody>\n        <tr *ngFor=\"let project of (projects | projectFilter: projectName:priority:noOfTasks:completed:startDate:endDate)\">\n            <td>\n                <label>{{project.projectName}}</label>\n            </td>\n            <td>\n                <label>{{project.priority}}</label>\n            </td>\n            <td>\n                <label>{{project.noOfTasks}}</label>\n            </td>\n            <td>\n                <label>{{project.completed}}</label>\n            </td>\n            <td>\n                <label>{{project.startDate}}</label>\n            </td>\n            <td>\n                <label>{{project.endDate}}</label>\n            </td>\n            <td><button class=\"btn btn-primary btn-xs\" title=\"Update Project\" [disabled]=\"project.active == 'N'\" (click)=\"editProject(project)\" style=\"cursor: pointer;\"><span class=\"glyphicon glyphicon-pencil\" aria-hidden=\"true\">&#x270E;</span></button></td>\n            <td><p data-placement=\"top\" data-toggle=\"tooltip\" title=\"Suspend Project\"><button class=\"btn btn-danger btn-xs\" [disabled]=\"project.active == 'N'\" style=\"cursor: pointer;\" (click)=\"prepareEndProject(project)\" data-title=\"Suspend Project\" data-toggle=\"modal\" data-target=\"#suspend\"><span class=\"glyphicon glyphicon-stop\" aria-hidden=\"true\">&#xe017;</span></button></p></td>\n        </tr>\n      </tbody>\n    </table>\n  </div>\n</div>\n<!-- Dialog for Suspend Project confirmation -->\n<div class=\"modal fade\" id=\"suspend\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"suspend\" aria-hidden=\"true\">\n  <div class=\"modal-dialog\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h4 class=\"modal-title\" id=\"Heading\">Suspend Project</h4>\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\"><span class=\"glyphicon glyphicon-remove\" aria-hidden=\"true\">&#x2715;</span></button>\n      </div>\n      <!-- /.model-header -->\n      <div class=\"modal-body\">\n        <div class=\"alert alert-danger\"><span class=\"glyphicon glyphicon-warning-sign\"></span> Are you sure, you want to suspend this Project?</div>\n      </div>\n      <!-- /.model-body -->\n      <div class=\"modal-footer \">\n        <button type=\"button\" class=\"btn btn-success\" style=\"cursor: pointer;\" data-dismiss=\"modal\" (click)=\"endProject()\"><span class=\"glyphicon glyphicon-ok-sign\">&#x2714;</span> Yes</button>\n        <button type=\"button\" class=\"btn btn-primary\" style=\"cursor: pointer;\" data-dismiss=\"modal\"><span class=\"glyphicon glyphicon-remove\">&#x2716;</span> No</button>\n      </div>\n      <!-- /.model-footer -->\n    </div>\n    <!-- /.modal-content --> \n  </div>\n  <!-- /.modal-dialog --> \n</div>"

/***/ }),

/***/ "./src/app/project/view-project/view-project.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/project/view-project/view-project.component.ts ***!
  \****************************************************************/
/*! exports provided: ViewProjectComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewProjectComponent", function() { return ViewProjectComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _api_service_project_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../api-service/project.service */ "./src/app/api-service/project.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ViewProjectComponent = /** @class */ (function () {
    function ViewProjectComponent(projectService, router) {
        this.projectService = projectService;
        this.router = router;
    }
    ViewProjectComponent.prototype.ngOnInit = function () {
        this.viewProjects();
    };
    ViewProjectComponent.prototype.viewProjects = function () {
        var _this = this;
        this.projectService.getAllProjects().subscribe(function (data) {
            _this.projects = data.response;
            // this.sort();
        });
    };
    ViewProjectComponent.prototype.editProject = function (project) {
        window.localStorage.removeItem('selectedProjectId');
        window.localStorage.setItem('selectedProjectId', project.projectId.toString());
        this.router.navigate(['edit-project']);
    };
    ViewProjectComponent.prototype.prepareEndProject = function (project) {
        window.localStorage.removeItem('selectedProjectId');
        window.localStorage.setItem('selectedProjectId', project.projectId.toString());
    };
    ViewProjectComponent.prototype.endProject = function () {
        var _this = this;
        var selectedProjectId = window.localStorage.getItem('selectedProjectId');
        if (selectedProjectId) {
            var selectedProject_1;
            this.projectService.getProject(selectedProjectId).subscribe(function (data) {
                selectedProject_1 = data.response;
                selectedProject_1.active = 'N';
                _this.projectService.updateProject(selectedProject_1).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["first"])())
                    .subscribe(function (data) {
                    if (data.statusCode == 201) {
                        setTimeout("2000");
                        alert("You've successfully suspended a Project!");
                        _this.ngOnInit();
                    }
                    else {
                        alert(data.message);
                    }
                }, function (error) {
                    alert("Sorry! Something went wrong, update cannot be possible at the moment. Please try again.");
                });
            });
        }
    };
    ViewProjectComponent.prototype.sort = function () {
        this.projects.sort(function (t1, t2) {
            var num = t1.projectName.localeCompare(t2.projectName);
            if (num < 0) {
                return -1;
            }
            else if (num > 0) {
                return 1;
            }
            else {
                return 0;
            }
        });
    };
    ViewProjectComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'view-project',
            template: __webpack_require__(/*! ./view-project.component.html */ "./src/app/project/view-project/view-project.component.html"),
            styles: [__webpack_require__(/*! ./view-project.component.css */ "./src/app/project/view-project/view-project.component.css")]
        }),
        __metadata("design:paramtypes", [_api_service_project_service__WEBPACK_IMPORTED_MODULE_1__["ProjectService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], ViewProjectComponent);
    return ViewProjectComponent;
}());



/***/ }),

/***/ "./src/app/sort-filter/order-by-employee-id.pipe.ts":
/*!**********************************************************!*\
  !*** ./src/app/sort-filter/order-by-employee-id.pipe.ts ***!
  \**********************************************************/
/*! exports provided: OrderByEmployeeIdPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderByEmployeeIdPipe", function() { return OrderByEmployeeIdPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _user_view_user_view_user_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../user/view-user/view-user.component */ "./src/app/user/view-user/view-user.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var OrderByEmployeeIdPipe = /** @class */ (function () {
    function OrderByEmployeeIdPipe(viewUserComponent) {
        this.viewUserComponent = viewUserComponent;
    }
    OrderByEmployeeIdPipe.prototype.transform = function (users) {
        this.viewUserComponent.sort();
        return this.viewUserComponent.users;
    };
    OrderByEmployeeIdPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'orderByEmployeeId',
            pure: false
        }),
        __metadata("design:paramtypes", [_user_view_user_view_user_component__WEBPACK_IMPORTED_MODULE_1__["ViewUserComponent"]])
    ], OrderByEmployeeIdPipe);
    return OrderByEmployeeIdPipe;
}());



/***/ }),

/***/ "./src/app/sort-filter/order-by-project-name.pipe.ts":
/*!***********************************************************!*\
  !*** ./src/app/sort-filter/order-by-project-name.pipe.ts ***!
  \***********************************************************/
/*! exports provided: OrderByProjectNamePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderByProjectNamePipe", function() { return OrderByProjectNamePipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _project_view_project_view_project_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../project/view-project/view-project.component */ "./src/app/project/view-project/view-project.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var OrderByProjectNamePipe = /** @class */ (function () {
    function OrderByProjectNamePipe(viewProjectComponent) {
        this.viewProjectComponent = viewProjectComponent;
    }
    OrderByProjectNamePipe.prototype.transform = function (projects) {
        this.viewProjectComponent.sort();
        return this.viewProjectComponent.projects;
    };
    OrderByProjectNamePipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'orderByProjectName',
            pure: false
        }),
        __metadata("design:paramtypes", [_project_view_project_view_project_component__WEBPACK_IMPORTED_MODULE_1__["ViewProjectComponent"]])
    ], OrderByProjectNamePipe);
    return OrderByProjectNamePipe;
}());



/***/ }),

/***/ "./src/app/sort-filter/order-by-task-name.pipe.ts":
/*!********************************************************!*\
  !*** ./src/app/sort-filter/order-by-task-name.pipe.ts ***!
  \********************************************************/
/*! exports provided: OrderByTaskNamePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderByTaskNamePipe", function() { return OrderByTaskNamePipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _task_view_task_view_task_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../task/view-task/view-task.component */ "./src/app/task/view-task/view-task.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var OrderByTaskNamePipe = /** @class */ (function () {
    function OrderByTaskNamePipe(viewTaskComponent) {
        this.viewTaskComponent = viewTaskComponent;
    }
    OrderByTaskNamePipe.prototype.transform = function (tasks) {
        this.viewTaskComponent.sort();
        return this.viewTaskComponent.tasks;
    };
    OrderByTaskNamePipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'orderByTaskName',
            pure: false
        }),
        __metadata("design:paramtypes", [_task_view_task_view_task_component__WEBPACK_IMPORTED_MODULE_1__["ViewTaskComponent"]])
    ], OrderByTaskNamePipe);
    return OrderByTaskNamePipe;
}());



/***/ }),

/***/ "./src/app/sort-filter/project-filter.pipe.ts":
/*!****************************************************!*\
  !*** ./src/app/sort-filter/project-filter.pipe.ts ***!
  \****************************************************/
/*! exports provided: ProjectFilterPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectFilterPipe", function() { return ProjectFilterPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _project_view_project_view_project_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../project/view-project/view-project.component */ "./src/app/project/view-project/view-project.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProjectFilterPipe = /** @class */ (function () {
    function ProjectFilterPipe(viewProjectComponent) {
        this.viewProjectComponent = viewProjectComponent;
    }
    ProjectFilterPipe.prototype.transform = function (projects, projectName, priority, noOfTasks, completed, startDate, endDate) {
        if ((undefined === projectName || '' == projectName)
            && (undefined === priority || '' == priority.toString())
            && (undefined === noOfTasks || '' == noOfTasks.toString())
            && (undefined === completed || '' == completed.toString())
            && (undefined === startDate || '' == startDate)
            && (undefined === endDate || '' == endDate)) {
            return projects;
        }
        return projects.filter(function (project) {
            if (projectName && project.projectName) {
                return project.projectName.toLowerCase().includes(projectName.toLowerCase());
            }
            if (priority && project.priority) {
                return project.priority == priority;
            }
            if (noOfTasks && project.noOfTasks) {
                return project.noOfTasks == noOfTasks;
            }
            else if (noOfTasks > -1 && project.noOfTasks > -1) {
                return project.noOfTasks == noOfTasks;
            }
            if (completed && project.completed) {
                return project.completed == completed;
            }
            else if (completed > -1 && project.completed > -1) {
                return project.completed == completed;
            }
            if (startDate && project.startDate) {
                return Date.parse(project.startDate) >= Date.parse(startDate);
            }
            if (endDate && project.endDate) {
                return Date.parse(project.endDate) <= Date.parse(endDate);
            }
        });
    };
    ProjectFilterPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'projectFilter'
        }),
        __metadata("design:paramtypes", [_project_view_project_view_project_component__WEBPACK_IMPORTED_MODULE_1__["ViewProjectComponent"]])
    ], ProjectFilterPipe);
    return ProjectFilterPipe;
}());



/***/ }),

/***/ "./src/app/sort-filter/task-filter.pipe.ts":
/*!*************************************************!*\
  !*** ./src/app/sort-filter/task-filter.pipe.ts ***!
  \*************************************************/
/*! exports provided: TaskFilterPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskFilterPipe", function() { return TaskFilterPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _task_view_task_view_task_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../task/view-task/view-task.component */ "./src/app/task/view-task/view-task.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TaskFilterPipe = /** @class */ (function () {
    function TaskFilterPipe(viewTaskComponent) {
        this.viewTaskComponent = viewTaskComponent;
    }
    TaskFilterPipe.prototype.transform = function (tasks, projectName, taskName, parentTaskName, priority, startDate, endDate) {
        if ((undefined === projectName || '' == projectName)
            && (undefined === taskName || '' == taskName)
            && (undefined === parentTaskName || '' == parentTaskName)
            && (undefined === priority || '' == priority.toString())
            && (undefined === startDate || '' == startDate)
            && (undefined === endDate || '' == endDate)) {
            return tasks;
        }
        return tasks.filter(function (task) {
            if (projectName && task.project.projectName) {
                return task.project.projectName.toLowerCase().includes(projectName.toLowerCase());
            }
            if (taskName && task.taskName) {
                return task.taskName.toLowerCase().includes(taskName.toLowerCase());
            }
            if (parentTaskName && task.parentTask) {
                return task.parentTask.parentTaskName.toLowerCase().includes(parentTaskName.toLowerCase());
            }
            if (priority && task.priority) {
                return task.priority == priority;
            }
            if (startDate && task.startDate) {
                return Date.parse(task.startDate) >= Date.parse(startDate);
            }
            if (endDate && task.endDate) {
                return Date.parse(task.endDate) <= Date.parse(endDate);
            }
        });
    };
    TaskFilterPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'taskFilter'
        }),
        __metadata("design:paramtypes", [_task_view_task_view_task_component__WEBPACK_IMPORTED_MODULE_1__["ViewTaskComponent"]])
    ], TaskFilterPipe);
    return TaskFilterPipe;
}());



/***/ }),

/***/ "./src/app/sort-filter/user-filter.pipe.ts":
/*!*************************************************!*\
  !*** ./src/app/sort-filter/user-filter.pipe.ts ***!
  \*************************************************/
/*! exports provided: UserFilterPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserFilterPipe", function() { return UserFilterPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _user_view_user_view_user_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../user/view-user/view-user.component */ "./src/app/user/view-user/view-user.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UserFilterPipe = /** @class */ (function () {
    function UserFilterPipe(viewUserComponent) {
        this.viewUserComponent = viewUserComponent;
    }
    UserFilterPipe.prototype.transform = function (users, firstName, lastName, employeeId) {
        if ((undefined === firstName || '' == firstName)
            && (undefined === lastName || '' == lastName)
            && (undefined === employeeId || '' == employeeId.toString())) {
            return users;
        }
        return users.filter(function (user) {
            if (firstName && user.firstName) {
                return user.firstName.toLowerCase().includes(firstName.toLowerCase());
            }
            if (lastName && user.lastName) {
                return user.lastName.toLowerCase().includes(lastName.toLowerCase());
            }
            if (employeeId && user.employeeId) {
                return user.employeeId == employeeId;
            }
        });
    };
    UserFilterPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'userFilter'
        }),
        __metadata("design:paramtypes", [_user_view_user_view_user_component__WEBPACK_IMPORTED_MODULE_1__["ViewUserComponent"]])
    ], UserFilterPipe);
    return UserFilterPipe;
}());



/***/ }),

/***/ "./src/app/task/add-task/add-task.component.css":
/*!******************************************************!*\
  !*** ./src/app/task/add-task/add-task.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n.slider {\r\n\t-webkit-appearance: none;\r\n\twidth: 100%;\r\n\theight: 15px;\r\n\tborder-radius: 5px;   \r\n\toutline: none;\r\n\topacity: 0.7;\r\n\ttransition: opacity .2s;\r\n  }\r\n  \r\n  .slider::-webkit-slider-thumb {\r\n\t-webkit-appearance: none;\r\n\tappearance: none;\r\n\twidth: 30px;\r\n\theight: 30px;\r\n\tborder-radius: 50%; \r\n\tbackground: #007bff;\r\n\tcursor: pointer;\r\n\t}\r\n  \r\n  .slider::-moz-range-thumb {\r\n\twidth: 30px;\r\n\theight: 30px;\r\n\tborder-radius: 50%;\r\n\tbackground: #007bff;\r\n\tcursor: pointer;\r\n\t}\r\n  \r\n  .slider::-ms-thumb {\r\n\t\twidth: 30px;\r\n\t\theight: 30px;\r\n\t\tborder-radius: 50%;\r\n\t\tbackground: #007bff;\r\n\t\tcursor: pointer;\r\n\t\t}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGFzay9hZGQtdGFzay9hZGQtdGFzay5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBRUE7Q0FDQyx5QkFBeUI7Q0FDekIsWUFBWTtDQUNaLGFBQWE7Q0FDYixtQkFBbUI7Q0FDbkIsY0FBYztDQUNkLGFBQWE7Q0FFYix3QkFBd0I7R0FDdEI7O0VBRUQ7Q0FDRCx5QkFBeUI7Q0FDekIsaUJBQWlCO0NBQ2pCLFlBQVk7Q0FDWixhQUFhO0NBQ2IsbUJBQW1CO0NBQ25CLG9CQUFvQjtDQUNwQixnQkFBZ0I7RUFDZjs7RUFFQTtDQUNELFlBQVk7Q0FDWixhQUFhO0NBQ2IsbUJBQW1CO0NBQ25CLG9CQUFvQjtDQUNwQixnQkFBZ0I7RUFDZjs7RUFFQTtFQUNBLFlBQVk7RUFDWixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLG9CQUFvQjtFQUNwQixnQkFBZ0I7R0FDZiIsImZpbGUiOiJzcmMvYXBwL3Rhc2svYWRkLXRhc2svYWRkLXRhc2suY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5cclxuLnNsaWRlciB7XHJcblx0LXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xyXG5cdHdpZHRoOiAxMDAlO1xyXG5cdGhlaWdodDogMTVweDtcclxuXHRib3JkZXItcmFkaXVzOiA1cHg7ICAgXHJcblx0b3V0bGluZTogbm9uZTtcclxuXHRvcGFjaXR5OiAwLjc7XHJcblx0LXdlYmtpdC10cmFuc2l0aW9uOiAuMnM7XHJcblx0dHJhbnNpdGlvbjogb3BhY2l0eSAuMnM7XHJcbiAgfVxyXG4gIFxyXG4gIC5zbGlkZXI6Oi13ZWJraXQtc2xpZGVyLXRodW1iIHtcclxuXHQtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XHJcblx0YXBwZWFyYW5jZTogbm9uZTtcclxuXHR3aWR0aDogMzBweDtcclxuXHRoZWlnaHQ6IDMwcHg7XHJcblx0Ym9yZGVyLXJhZGl1czogNTAlOyBcclxuXHRiYWNrZ3JvdW5kOiAjMDA3YmZmO1xyXG5cdGN1cnNvcjogcG9pbnRlcjtcclxuXHR9XHJcbiAgXHJcbiAgLnNsaWRlcjo6LW1vei1yYW5nZS10aHVtYiB7XHJcblx0d2lkdGg6IDMwcHg7XHJcblx0aGVpZ2h0OiAzMHB4O1xyXG5cdGJvcmRlci1yYWRpdXM6IDUwJTtcclxuXHRiYWNrZ3JvdW5kOiAjMDA3YmZmO1xyXG5cdGN1cnNvcjogcG9pbnRlcjtcclxuXHR9XHJcbiAgXHJcbiAgLnNsaWRlcjo6LW1zLXRodW1iIHtcclxuXHRcdHdpZHRoOiAzMHB4O1xyXG5cdFx0aGVpZ2h0OiAzMHB4O1xyXG5cdFx0Ym9yZGVyLXJhZGl1czogNTAlO1xyXG5cdFx0YmFja2dyb3VuZDogIzAwN2JmZjtcclxuXHRcdGN1cnNvcjogcG9pbnRlcjtcclxuXHRcdH1cclxuXHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/task/add-task/add-task.component.html":
/*!*******************************************************!*\
  !*** ./src/app/task/add-task/add-task.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav-bar></nav-bar>\r\n<br/>\r\n<div class=\"container-fluid\">\r\n    <h3 style=\"padding-left: 10px;\">Add Task</h3>\r\n    <form *ngIf=\"addTaskForm\" [formGroup]=\"addTaskForm\" (ngSubmit)=\"onSubmit()\">\r\n        <table border=\"0\" cellspacing=\"0\" cellpadding=\"10\" style=\"width: 60%\">\r\n            <tr class=\"form-group\">\r\n                <td width=\"20%\">\r\n                    <label>Project</label>\r\n                </td>\r\n                <td width=\"10%\"></td>\r\n                <td width=\"70%\">\r\n                    <div formGroupName=\"project\" novalidate>\r\n                        <input type=\"text\" class=\"form-control\" id=\"projectName\" formControlName=\"projectName\" placeholder=\"Project Name\" autofocus/>\r\n                    </div>\r\n                </td>\r\n            </tr>\r\n            <tr class=\"form-group\">\r\n                <td width=\"20%\">\r\n                    <label>Task</label>\r\n                </td>\r\n                <td width=\"10%\"></td>\r\n                <td width=\"70%\">\r\n                    <input type=\"text\" class=\"form-control\" id=\"taskName\" formControlName=\"taskName\" placeholder=\"Task Name\" autofocus/>\r\n                </td>\r\n            </tr>\r\n            <tr class=\"form-group\">\r\n                <td></td>\r\n                <td></td>\r\n                <td>\r\n                    <input type=\"checkbox\" id=\"toggleParentTaskRowId\" formControlName=\"isParentTask\" onclick=\"toggleParentTaskRow()\"/>&nbsp;<label>Parent Task</label>\r\n                </td>\r\n            </tr>            \r\n            <tr class=\"form-group\" id=\"parentTaskRowId\">\r\n                <td width=\"20%\">\r\n                    <label>Parent Task</label>\r\n                </td>\r\n                <td width=\"10%\"></td>\r\n                <td width=\"70%\">\r\n                    <div formGroupName=\"parentTask\" novalidate>\r\n                        <input type=\"text\" class=\"form-control\" id=\"parentTaskName\" formControlName=\"parentTaskName\" placeholder=\"Parent Task Name\"/>\r\n                    </div>\r\n                </td>\r\n            </tr>\r\n            <tr class=\"form-group\">\r\n                <td width=\"20%\">\r\n                    <label>Priority</label>\r\n                </td>\r\n                <td width=\"10%\"></td>\r\n                <td width=\"70%\">\r\n                    <input type=\"range\" class=\"form-control slider\" min=\"0\" max=\"30\" id=\"priority\" formControlName=\"priority\" [(ngModel)]=\"rangeValue\" title=\"{{rangeValue}}\" />\r\n                </td>\r\n            </tr>\r\n            <tr class=\"form-group\">\r\n                <td width=\"20%\">\r\n                    <label>Start Date</label>\r\n                </td>\r\n                <td width=\"10%\"></td>\r\n                <td width=\"70%\">\r\n                    <input type=\"date\" class=\"form-control\" id=\"startDate\" formControlName=\"startDate\"/>\r\n                </td>\r\n            </tr>\r\n            <tr class=\"form-group\">\r\n                <td width=\"20%\">\r\n                    <label>End Date</label>\r\n                </td>\r\n                <td width=\"10%\"></td>\r\n                <td width=\"70%\">\r\n                    <input type=\"date\" class=\"form-control\" id=\"endDate\" formControlName=\"endDate\"/>\r\n                </td>\r\n            </tr>            \r\n            <tr class=\"form-group\">\r\n                <td width=\"20%\">\r\n                    <label>User</label>\r\n                </td>\r\n                <td width=\"10%\"></td>\r\n                <td width=\"70%\">\r\n                    <div formGroupName=\"user\" novalidate>\r\n                        <input type=\"text\" class=\"form-control\" id=\"employeeId\" formControlName=\"employeeId\" placeholder=\"Employee Id\" autofocus/>\r\n                    </div>\r\n                </td>\r\n            </tr>\r\n        </table>\r\n        <br>\r\n        <table border=\"0\" cellspacing=\"0\" cellpading=\"0\">\r\n            <tr>\r\n                <td width=\"45%\">\r\n                    <button type=\"submit\" class=\"btn btn-success\" [disabled]=\"!addTaskForm.valid\" style=\"width: 100px; cursor: pointer;\">Add Task</button>\r\n                </td>\r\n                <td width=\"10%\"></td>\r\n                <td width=\"45%\">\r\n                    <button type=\"button\" class=\"btn btn-primary\" (click)=\"reset()\" style=\"width: 100px; cursor: pointer;\">Reset</button>\r\n                </td>\r\n            </tr>\r\n        </table>\r\n    </form>\r\n</div>"

/***/ }),

/***/ "./src/app/task/add-task/add-task.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/task/add-task/add-task.component.ts ***!
  \*****************************************************/
/*! exports provided: AddTaskComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddTaskComponent", function() { return AddTaskComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _api_service_task_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../api-service/task.service */ "./src/app/api-service/task.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AddTaskComponent = /** @class */ (function () {
    function AddTaskComponent(formBuilder, taskService, router) {
        this.formBuilder = formBuilder;
        this.taskService = taskService;
        this.router = router;
        this.addTaskForm = this.initializeFormGroup();
    }
    AddTaskComponent.prototype.initializeFormGroup = function () {
        return this.formBuilder.group({
            taskId: [''],
            taskName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            isParentTask: [''],
            parentTask: this.formBuilder.group({
                parentTaskId: [''],
                parentTaskName: ['']
            }),
            priority: ['15', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].min(0), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].max(30)])],
            startDate: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            endDate: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            active: ['Y'],
            project: this.formBuilder.group({
                projectId: [''],
                projectName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
                priority: [''],
                startDate: [''],
                endDate: [''],
                active: [''],
                noOfTasks: [''],
                completed: [''],
                user: this.formBuilder.group({
                    userId: [''],
                    employeeId: [''],
                    firstName: [''],
                    lastName: [''],
                    active: ['']
                })
            }),
            user: this.formBuilder.group({
                userId: [''],
                employeeId: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
                firstName: [''],
                lastName: [''],
                active: ['']
            })
        });
    };
    AddTaskComponent.prototype.addTask = function () {
        var _this = this;
        var newTask = Object.assign({}, this.addTaskForm.value);
        newTask.parentTask = Object.assign({}, newTask.parentTask);
        newTask.project = Object.assign({}, newTask.project);
        newTask.user = Object.assign({}, newTask.user);
        this.taskService.addTask(newTask)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["first"])())
            .subscribe(function (data) {
            if (data.statusCode == 201) {
                alert("You've successfully added a new Task!");
                _this.router.navigate(['view-tasks']);
            }
            else {
                alert(data.message);
            }
        }, function (error) {
            alert("Sorry! Something went wrong, new task cannot be added at the moment. Please try again.");
        });
    };
    AddTaskComponent.prototype.onSubmit = function () {
        this.addTask();
    };
    AddTaskComponent.prototype.reset = function () {
        this.addTaskForm.reset({
            taskId: '',
            taskName: '',
            isParentTask: '',
            parentTask: ({
                parentTaskId: '',
                parentTaskName: ''
            }),
            priority: '15',
            startDate: '',
            endDate: '',
            active: 'Y',
            project: ({
                projectId: '',
                projectName: ''
            }),
            user: ({
                userId: '',
                employeeId: ''
            })
        });
    };
    AddTaskComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'add-task',
            template: __webpack_require__(/*! ./add-task.component.html */ "./src/app/task/add-task/add-task.component.html"),
            styles: [__webpack_require__(/*! ./add-task.component.css */ "./src/app/task/add-task/add-task.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], _api_service_task_service__WEBPACK_IMPORTED_MODULE_2__["TaskService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], AddTaskComponent);
    return AddTaskComponent;
}());



/***/ }),

/***/ "./src/app/task/edit-task/edit-task.component.css":
/*!********************************************************!*\
  !*** ./src/app/task/edit-task/edit-task.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".slider {\r\n\t-webkit-appearance: none;\r\n\twidth: 100%;\r\n\theight: 15px;\r\n\tborder-radius: 5px;   \r\n\tbackground: #d3d3d3;\r\n\toutline: none;\r\n\topacity: 0.7;\r\n\ttransition: opacity .2s;\r\n  }\r\n  \r\n  .slider::-webkit-slider-thumb {\r\n\t-webkit-appearance: none;\r\n\tappearance: none;\r\n\twidth: 30px;\r\n\theight: 30px;\r\n\tborder-radius: 50%; \r\n\tbackground: #007bff;\r\n\tcursor: pointer;\r\n  }\r\n  \r\n  .slider::-moz-range-thumb {\r\n\twidth: 30px;\r\n\theight: 30px;\r\n\tborder-radius: 50%;\r\n\tbackground: #007bff;\r\n\tcursor: pointer;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGFzay9lZGl0LXRhc2svZWRpdC10YXNrLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Q0FDQyx5QkFBeUI7Q0FDekIsWUFBWTtDQUNaLGFBQWE7Q0FDYixtQkFBbUI7Q0FDbkIsb0JBQW9CO0NBQ3BCLGNBQWM7Q0FDZCxhQUFhO0NBRWIsd0JBQXdCO0dBQ3RCOztFQUVEO0NBQ0QseUJBQXlCO0NBQ3pCLGlCQUFpQjtDQUNqQixZQUFZO0NBQ1osYUFBYTtDQUNiLG1CQUFtQjtDQUNuQixvQkFBb0I7Q0FDcEIsZ0JBQWdCO0dBQ2Q7O0VBRUQ7Q0FDRCxZQUFZO0NBQ1osYUFBYTtDQUNiLG1CQUFtQjtDQUNuQixvQkFBb0I7Q0FDcEIsZ0JBQWdCO0dBQ2QiLCJmaWxlIjoic3JjL2FwcC90YXNrL2VkaXQtdGFzay9lZGl0LXRhc2suY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zbGlkZXIge1xyXG5cdC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcclxuXHR3aWR0aDogMTAwJTtcclxuXHRoZWlnaHQ6IDE1cHg7XHJcblx0Ym9yZGVyLXJhZGl1czogNXB4OyAgIFxyXG5cdGJhY2tncm91bmQ6ICNkM2QzZDM7XHJcblx0b3V0bGluZTogbm9uZTtcclxuXHRvcGFjaXR5OiAwLjc7XHJcblx0LXdlYmtpdC10cmFuc2l0aW9uOiAuMnM7XHJcblx0dHJhbnNpdGlvbjogb3BhY2l0eSAuMnM7XHJcbiAgfVxyXG4gIFxyXG4gIC5zbGlkZXI6Oi13ZWJraXQtc2xpZGVyLXRodW1iIHtcclxuXHQtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XHJcblx0YXBwZWFyYW5jZTogbm9uZTtcclxuXHR3aWR0aDogMzBweDtcclxuXHRoZWlnaHQ6IDMwcHg7XHJcblx0Ym9yZGVyLXJhZGl1czogNTAlOyBcclxuXHRiYWNrZ3JvdW5kOiAjMDA3YmZmO1xyXG5cdGN1cnNvcjogcG9pbnRlcjtcclxuICB9XHJcbiAgXHJcbiAgLnNsaWRlcjo6LW1vei1yYW5nZS10aHVtYiB7XHJcblx0d2lkdGg6IDMwcHg7XHJcblx0aGVpZ2h0OiAzMHB4O1xyXG5cdGJvcmRlci1yYWRpdXM6IDUwJTtcclxuXHRiYWNrZ3JvdW5kOiAjMDA3YmZmO1xyXG5cdGN1cnNvcjogcG9pbnRlcjtcclxuICB9Il19 */"

/***/ }),

/***/ "./src/app/task/edit-task/edit-task.component.html":
/*!*********************************************************!*\
  !*** ./src/app/task/edit-task/edit-task.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<br/>\n<div class=\"container-fluid\">\n    <h3 style=\"padding-left: 10px;\">Edit Task</h3>\n    <form *ngIf=\"editTaskForm\" [formGroup]=\"editTaskForm\" (ngSubmit)=\"onSubmit()\">\n        <div class=\"hidden\">\n            <input type=\"hidden\" class=\"form-control\" id=\"taskId\" formControlName=\"taskId\"/>\n        </div>\n        <table border=\"0\" cellspacing=\"0\" cellpadding=\"10\" style=\"width: 60%\">\n          <thead>\n            <th width=\"20%\"></th>\n            <th width=\"10%\"></th>\n            <th width=\"70%\"></th>\n          </thead>\n          <tbody>\n            <tr class=\"form-group\">\n                <td width=\"20%\">\n                    <label>Project</label>\n                </td>\n                <td width=\"10%\"></td>\n                <td width=\"70%\">\n                    <div formGroupName=\"project\" novalidate>\n                        <div class=\"hidden\">\n                            <input type=\"hidden\" class=\"form-control\" id=\"projectId\" formControlName=\"projectId\"/>\n                        </div>\n                        <input type=\"text\" class=\"form-control\" id=\"projectName\" formControlName=\"projectName\" autofocus/>\n                    </div>\n                </td>\n            </tr>\n            <tr class=\"form-group\">\n                <td>\n                    <label>Task</label>\n                </td>\n                <td></td>\n                <td>\n                    <input type=\"text\" class=\"form-control\" id=\"taskName\" formControlName=\"taskName\" autofocus/>\n                </td>\n            </tr>\n            <tr class=\"form-group\">\n                <td></td>\n                <td></td>\n                <td>\n                    <input type=\"checkbox\" id=\"toggleParentTaskRowId\" formControlName=\"isParentTask\" onclick=\"toggleParentTaskRow()\"/>&nbsp;<label>Parent Task</label>\n                </td>\n            </tr>            \n            <tr class=\"form-group\" id=\"parentTaskRowId\">\n                <td>\n                    <label>Parent Task</label>\n                </td>\n                <td></td>\n                <td>\n                    <div formGroupName=\"parentTask\" novalidate>\n                        <div class=\"hidden\">\n                            <input type=\"hidden\" class=\"form-control\" id=\"parentTaskId\" formControlName=\"parentTaskId\"/>\n                        </div>\n                        <input type=\"text\" class=\"form-control\" id=\"parentTaskName\" formControlName=\"parentTaskName\"/>\n                    </div>\n                </td>\n            </tr>\n            <tr class=\"form-group\">\n                <td>\n                    <label>Priority</label>\n                </td>\n                <td></td>\n                <td>\n                    <input type=\"range\" class=\"form-control slider\" min=\"0\" max=\"30\" id=\"priority\" formControlName=\"priority\" [(ngModel)]=\"rangeValue\" title=\"{{rangeValue}}\" />\n                </td>\n            </tr>\n            <tr class=\"form-group\">\n                <td>\n                    <label>Start Date</label>\n                </td>\n                <td></td>\n                <td>\n                    <input type=\"date\" class=\"form-control\" id=\"startDate\" formControlName=\"startDate\"/>\n                </td>\n            </tr>\n            <tr class=\"form-group\">\n                <td>\n                    <label>End Date</label>\n                </td>\n                <td></td>\n                <td>\n                    <input type=\"date\" class=\"form-control\" id=\"endDate\" formControlName=\"endDate\"/>\n                </td>\n            </tr>\n            <tr class=\"form-group\">\n                <td width=\"20%\">\n                    <label>User</label>\n                </td>\n                <td width=\"10%\"></td>\n                <td width=\"70%\">\n                    <div formGroupName=\"user\" novalidate>\n                        <div class=\"hidden\">\n                            <input type=\"hidden\" class=\"form-control\" id=\"userId\" formControlName=\"userId\"/>\n                        </div>\n                        <input type=\"text\" class=\"form-control\" id=\"employeeId\" formControlName=\"employeeId\" autofocus/>\n                    </div>\n                </td>\n            </tr>\n          </tbody>            \n        </table>\n        <br>\n        <div class=\"text-center\">\n        <table border=\"0\" cellspacing=\"0\" cellpading=\"10\">\n            <tr>\n                <td width=\"45%\">\n                    <button type=\"submit\" [disabled]=\"!editTaskForm.valid\" class=\"btn btn-success\" style=\"width: 120px; cursor: pointer;\">Update Task</button>\n                </td>\n                <td width=\"10%\"></td>\n                <td width=\"45%\">\n                    <button type=\"button\" class=\"btn btn-primary\" style=\"width: 120px; cursor: pointer;\" (click)=\"cancelEdit()\">Cancel</button>\n                </td>\n            </tr>\n        </table>\n      </div>\n    </form>\n</div>\n"

/***/ }),

/***/ "./src/app/task/edit-task/edit-task.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/task/edit-task/edit-task.component.ts ***!
  \*******************************************************/
/*! exports provided: EditTaskComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditTaskComponent", function() { return EditTaskComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _api_service_task_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../api-service/task.service */ "./src/app/api-service/task.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var EditTaskComponent = /** @class */ (function () {
    function EditTaskComponent(formBuilder, taskService, router) {
        this.formBuilder = formBuilder;
        this.taskService = taskService;
        this.router = router;
    }
    EditTaskComponent.prototype.ngOnInit = function () {
        var selectedTaskId = window.localStorage.getItem("selectedTaskId");
        if (selectedTaskId) {
            this.editTaskForm = this.initializeFormGroup(this.formBuilder);
            this.getTask(selectedTaskId);
        }
    };
    EditTaskComponent.prototype.initializeFormGroup = function (formBuilder) {
        return formBuilder.group({
            taskId: [''],
            taskName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            isParentTask: [''],
            parentTask: formBuilder.group({
                parentTaskId: [''],
                parentTaskName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
            }),
            priority: ['15', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].min(0), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].max(30)])],
            startDate: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            endDate: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            active: ['Y'],
            project: this.formBuilder.group({
                projectId: [''],
                projectName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
                priority: [''],
                startDate: [''],
                endDate: [''],
                active: [''],
                noOfTasks: [''],
                completed: [''],
                user: this.formBuilder.group({
                    userId: [''],
                    employeeId: [''],
                    firstName: [''],
                    lastName: [''],
                    active: ['']
                })
            }),
            user: this.formBuilder.group({
                userId: [''],
                employeeId: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
                firstName: [''],
                lastName: [''],
                active: ['']
            })
        });
    };
    EditTaskComponent.prototype.getTask = function (taskId) {
        var _this = this;
        this.taskService.getTask(taskId).subscribe(function (data) {
            _this.editTaskForm.setValue(data.response);
        });
    };
    EditTaskComponent.prototype.updateTask = function () {
        var _this = this;
        var editedTask = Object.assign({}, this.editTaskForm.value);
        editedTask.parentTask = Object.assign({}, editedTask.parentTask);
        editedTask.project = Object.assign({}, editedTask.project);
        editedTask.user = Object.assign({}, editedTask.user);
        this.taskService.updateTask(editedTask)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["first"])())
            .subscribe(function (data) {
            if (data.statusCode == 201) {
                alert("You've successfully updated the Task!");
                _this.router.navigate(['view-tasks']);
            }
            else {
                alert(data.message);
            }
        }, function (error) {
            alert("Sorry! Something went wrong, update cannot be possible at the moment. Please try again.");
        });
    };
    EditTaskComponent.prototype.onSubmit = function () {
        this.updateTask();
    };
    EditTaskComponent.prototype.cancelEdit = function () {
        this.router.navigate(['view-tasks']);
    };
    EditTaskComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'edit-task',
            template: __webpack_require__(/*! ./edit-task.component.html */ "./src/app/task/edit-task/edit-task.component.html"),
            styles: [__webpack_require__(/*! ./edit-task.component.css */ "./src/app/task/edit-task/edit-task.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], _api_service_task_service__WEBPACK_IMPORTED_MODULE_2__["TaskService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], EditTaskComponent);
    return EditTaskComponent;
}());



/***/ }),

/***/ "./src/app/task/view-task/view-task.component.css":
/*!********************************************************!*\
  !*** ./src/app/task/view-task/view-task.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".table-hover tr:hover {\r\n    background-color: #e5f4ff;\r\n}\r\n.align-left {\r\n    text-align: left;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGFzay92aWV3LXRhc2svdmlldy10YXNrLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSwwQkFBMEI7Q0FDN0I7QUFDRDtJQUNJLGlCQUFpQjtDQUNwQiIsImZpbGUiOiJzcmMvYXBwL3Rhc2svdmlldy10YXNrL3ZpZXctdGFzay5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRhYmxlLWhvdmVyIHRyOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlNWY0ZmY7XHJcbn1cclxuLmFsaWduLWxlZnQge1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/task/view-task/view-task.component.html":
/*!*********************************************************!*\
  !*** ./src/app/task/view-task/view-task.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav-bar></nav-bar>\n<br/>\n<div class=\"container-fluid\">\n  <h3 style=\"padding-left: 10px;\">View Tasks</h3>\n  <div class=\"table-responsive\">\n    <table cellspacing=\"0\" cellpadding=\"10\" style=\"width: 70%\" class=\"table table-bordred table-striped table-hover text-center\">\n      <thead>\n        <th style=\"width: 15%\" title=\"Project\">\n          <label>Project</label>\n          <input type=\"text\" class=\"form-control\" id=\"projectName\" [(ngModel)]=\"projectName\" />\n        </th>\n        <th style=\"width: 15%\" title=\"Task\">\n          <label>Task</label>\n          <input type=\"text\" class=\"form-control\" id=\"taskName\" [(ngModel)]=\"taskName\" />\n        </th>\n        <th style=\"width: 15%\" title=\"Parent Task\">\n          <label>Parent Task</label>\n          <input type=\"text\" class=\"form-control\" id=\"parentTaskName\" [(ngModel)]=\"parentTaskName\" />\n        </th>\n        <th style=\"width: 11%\" title=\"Priority\">\n          <label>Priority</label>\n          <input type=\"text\" class=\"form-control\" id=\"priority\" [(ngModel)]=\"priority\" />\n        </th>\n        <th style=\"width: 11%\" title=\"Start Date\">\n          <label>Start Date</label>\n          <input type=\"date\" class=\"form-control\" id=\"startDate\" [(ngModel)]=\"startDate\" style=\"width: 170px\" />\n        </th>\n        <th style=\"width: 11%\" title=\"End Date\">\n          <label>End Date</label>\n          <input type=\"date\" class=\"form-control\" id=\"endDate\" [(ngModel)]=\"endDate\" style=\"width: 170px\" />\n        </th>\n        <th style=\"width: 11%\" title=\"Edit\">Edit</th>\n        <th style=\"width: 11%\" title=\"End\">End</th>\n      </thead>\n      <tbody>\n        <tr *ngFor=\"let task of (tasks | taskFilter: projectName:taskName:parentTaskName:priority:startDate:endDate)\">\n          <td>\n            <label>{{task.project.projectName}}</label>\n          </td>\n          <td>\n            <label>{{task.taskName}}</label>\n          </td>\n          <td>\n            <label>{{task.parentTask.parentTaskName}}</label>\n          </td>\n          <td>\n            <label>{{task.priority}}</label>\n          </td>\n          <td>\n            <label>{{task.startDate}}</label>\n          </td>\n          <td>\n            <label>{{task.endDate}}</label>\n          </td>\n          <td><button class=\"btn btn-primary btn-xs\" title=\"Edit Task\" [disabled]=\"task.active == 'N'\" (click)=\"editTask(task)\" style=\"cursor: pointer;\"><span class=\"glyphicon glyphicon-pencil\" aria-hidden=\"true\">&#x270E;</span></button></td>\n          <td><p data-placement=\"top\" data-toggle=\"tooltip\" title=\"End Task\"><button class=\"btn btn-danger btn-xs\" [disabled]=\"task.active == 'N'\" style=\"cursor: pointer;\" (click)=\"prepareEndTask(task)\" data-title=\"End Task\" data-toggle=\"modal\" data-target=\"#end\"><span class=\"glyphicon glyphicon-stop\" aria-hidden=\"true\">&#xe017;</span></button></p></td>\n        </tr>\n      </tbody>\n    </table>\n  </div>\n</div>\n<!-- Dialog for End Task confirmation -->\n<div class=\"modal fade\" id=\"end\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"end\" aria-hidden=\"true\">\n  <div class=\"modal-dialog\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h4 class=\"modal-title\" id=\"Heading\">End Task</h4>\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\"><span class=\"glyphicon glyphicon-remove\" aria-hidden=\"true\">&#x2715;</span></button>\n      </div>\n      <!-- /.model-header -->\n      <div class=\"modal-body\">\n        <div class=\"alert alert-danger\"><span class=\"glyphicon glyphicon-warning-sign\"></span> Are you sure, you want to end this Task?</div>\n      </div>\n      <!-- /.model-body -->\n      <div class=\"modal-footer \">\n        <button type=\"button\" class=\"btn btn-success\" style=\"cursor: pointer;\" data-dismiss=\"modal\" (click)=\"endTask()\"><span class=\"glyphicon glyphicon-ok-sign\">&#x2714;</span> Yes</button>\n        <button type=\"button\" class=\"btn btn-primary\" style=\"cursor: pointer;\" data-dismiss=\"modal\"><span class=\"glyphicon glyphicon-remove\">&#x2716;</span> No</button>\n      </div>\n      <!-- /.model-footer -->\n    </div>\n    <!-- /.modal-content --> \n  </div>\n  <!-- /.modal-dialog --> \n</div>"

/***/ }),

/***/ "./src/app/task/view-task/view-task.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/task/view-task/view-task.component.ts ***!
  \*******************************************************/
/*! exports provided: ViewTaskComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewTaskComponent", function() { return ViewTaskComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _api_service_task_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../api-service/task.service */ "./src/app/api-service/task.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ViewTaskComponent = /** @class */ (function () {
    function ViewTaskComponent(taskService, router) {
        this.taskService = taskService;
        this.router = router;
    }
    ViewTaskComponent.prototype.ngOnInit = function () {
        this.viewTasks();
    };
    ViewTaskComponent.prototype.viewTasks = function () {
        var _this = this;
        this.taskService.getAllTasks().subscribe(function (data) {
            _this.tasks = data.response;
            _this.sort();
        });
    };
    ViewTaskComponent.prototype.editTask = function (task) {
        window.localStorage.removeItem('selectedTaskId');
        window.localStorage.setItem('selectedTaskId', task.taskId.toString());
        this.router.navigate(['edit-task']);
    };
    ViewTaskComponent.prototype.prepareEndTask = function (task) {
        window.localStorage.removeItem('selectedTaskId');
        window.localStorage.setItem('selectedTaskId', task.taskId.toString());
    };
    ViewTaskComponent.prototype.endTask = function () {
        var _this = this;
        var selectedTaskId = window.localStorage.getItem('selectedTaskId');
        if (selectedTaskId) {
            var selectedTask_1;
            this.taskService.getTask(selectedTaskId).subscribe(function (data) {
                selectedTask_1 = data.response;
                selectedTask_1.active = 'N';
                _this.taskService.updateTask(selectedTask_1).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["first"])())
                    .subscribe(function (data) {
                    if (data.statusCode == 201) {
                        setTimeout("2000");
                        alert("You've successfully completed a Task!");
                        _this.ngOnInit();
                    }
                    else {
                        alert(data.message);
                    }
                }, function (error) {
                    alert("Sorry! Something went wrong, update cannot be possible at the moment. Please try again.");
                });
            });
        }
    };
    ViewTaskComponent.prototype.sort = function () {
        this.tasks.sort(function (t1, t2) {
            var num = t1.taskName.localeCompare(t2.taskName);
            if (num < 0) {
                return -1;
            }
            else if (num > 0) {
                return 1;
            }
            else {
                return 0;
            }
        });
    };
    ViewTaskComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'view-task',
            template: __webpack_require__(/*! ./view-task.component.html */ "./src/app/task/view-task/view-task.component.html"),
            styles: [__webpack_require__(/*! ./view-task.component.css */ "./src/app/task/view-task/view-task.component.css")]
        }),
        __metadata("design:paramtypes", [_api_service_task_service__WEBPACK_IMPORTED_MODULE_1__["TaskService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], ViewTaskComponent);
    return ViewTaskComponent;
}());



/***/ }),

/***/ "./src/app/user/add-user/add-user.component.css":
/*!******************************************************!*\
  !*** ./src/app/user/add-user/add-user.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".slider {\r\n\t-webkit-appearance: none;\r\n\twidth: 100%;\r\n\theight: 15px;\r\n\tborder-radius: 5px;   \r\n\toutline: none;\r\n\topacity: 0.7;\r\n\ttransition: opacity .2s;\r\n}\r\n  \r\n.slider::-webkit-slider-thumb {\r\n    -webkit-appearance: none;\r\n    appearance: none;\r\n    width: 30px;\r\n    height: 30px;\r\n    border-radius: 50%; \r\n    background: #007bff;\r\n    cursor: pointer;\r\n}\r\n  \r\n.slider::-moz-range-thumb {\r\n    width: 30px;\r\n    height: 30px;\r\n    border-radius: 50%;\r\n    background: #007bff;\r\n    cursor: pointer;\r\n}\r\n  \r\n.slider::-ms-thumb {\r\n    width: 30px;\r\n    height: 30px;\r\n    border-radius: 50%;\r\n    background: #007bff;\r\n    cursor: pointer;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci9hZGQtdXNlci9hZGQtdXNlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0NBQ0MseUJBQXlCO0NBQ3pCLFlBQVk7Q0FDWixhQUFhO0NBQ2IsbUJBQW1CO0NBQ25CLGNBQWM7Q0FDZCxhQUFhO0NBRWIsd0JBQXdCO0NBQ3hCOztBQUVEO0lBQ0kseUJBQXlCO0lBQ3pCLGlCQUFpQjtJQUNqQixZQUFZO0lBQ1osYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixvQkFBb0I7SUFDcEIsZ0JBQWdCO0NBQ25COztBQUVEO0lBQ0ksWUFBWTtJQUNaLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsb0JBQW9CO0lBQ3BCLGdCQUFnQjtDQUNuQjs7QUFFRDtJQUNJLFlBQVk7SUFDWixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLG9CQUFvQjtJQUNwQixnQkFBZ0I7Q0FDbkIiLCJmaWxlIjoic3JjL2FwcC91c2VyL2FkZC11c2VyL2FkZC11c2VyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2xpZGVyIHtcclxuXHQtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XHJcblx0d2lkdGg6IDEwMCU7XHJcblx0aGVpZ2h0OiAxNXB4O1xyXG5cdGJvcmRlci1yYWRpdXM6IDVweDsgICBcclxuXHRvdXRsaW5lOiBub25lO1xyXG5cdG9wYWNpdHk6IDAuNztcclxuXHQtd2Via2l0LXRyYW5zaXRpb246IC4ycztcclxuXHR0cmFuc2l0aW9uOiBvcGFjaXR5IC4ycztcclxufVxyXG4gIFxyXG4uc2xpZGVyOjotd2Via2l0LXNsaWRlci10aHVtYiB7XHJcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XHJcbiAgICBhcHBlYXJhbmNlOiBub25lO1xyXG4gICAgd2lkdGg6IDMwcHg7XHJcbiAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7IFxyXG4gICAgYmFja2dyb3VuZDogIzAwN2JmZjtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4gIFxyXG4uc2xpZGVyOjotbW96LXJhbmdlLXRodW1iIHtcclxuICAgIHdpZHRoOiAzMHB4O1xyXG4gICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgYmFja2dyb3VuZDogIzAwN2JmZjtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4gIFxyXG4uc2xpZGVyOjotbXMtdGh1bWIge1xyXG4gICAgd2lkdGg6IDMwcHg7XHJcbiAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMDA3YmZmO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/user/add-user/add-user.component.html":
/*!*******************************************************!*\
  !*** ./src/app/user/add-user/add-user.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav-bar></nav-bar>\n<br/>\n<div class=\"container-fluid\">\n    <h3 style=\"padding-left: 10px;\">Add User</h3>\n    <form *ngIf=\"addUserForm\" [formGroup]=\"addUserForm\" (ngSubmit)=\"onSubmit()\">\n        <table border=\"0\" cellspacing=\"0\" cellpadding=\"10\" style=\"width: 60%\">\n            <tr class=\"form-group\">\n                <td width=\"20%\">\n                    <label>First Name</label>\n                </td>\n                <td width=\"10%\"></td>\n                <td width=\"70%\">\n                    <input type=\"text\" class=\"form-control\" id=\"firstName\" formControlName=\"firstName\" placeholder=\"First Name\" autofocus/>\n                </td>\n            </tr>\n            <tr class=\"form-group\">\n              <td width=\"20%\">\n                  <label>Last Name</label>\n              </td>\n              <td width=\"10%\"></td>\n              <td width=\"70%\">\n                  <input type=\"text\" class=\"form-control\" id=\"lastName\" formControlName=\"lastName\" placeholder=\"Last Name\" autofocus/>\n              </td>\n          </tr>\n            <tr class=\"form-group\">\n                <td width=\"20%\">\n                    <label>Employee Id</label>\n                </td>\n                <td width=\"10%\"></td>\n                <td width=\"70%\">\n                    <input type=\"text\" class=\"form-control\" id=\"employeeId\" formControlName=\"employeeId\" placeholder=\"Employee Id\" autofocus />\n                </td>\n            </tr>\n        </table>\n        <br>\n        <table border=\"0\" cellspacing=\"0\" cellpading=\"0\">\n            <tr>\n                <td width=\"45%\">\n                    <button type=\"submit\" class=\"btn btn-success\" [disabled]=\"!addUserForm.valid\" style=\"width: 100px; cursor: pointer;\">Add User</button>\n                </td>\n                <td width=\"10%\"></td>\n                <td width=\"45%\">\n                    <button type=\"button\" class=\"btn btn-primary\" (click)=\"reset()\" style=\"width: 100px; cursor: pointer;\">Reset</button>\n                </td>\n            </tr>\n        </table>\n    </form>\n</div>"

/***/ }),

/***/ "./src/app/user/add-user/add-user.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/user/add-user/add-user.component.ts ***!
  \*****************************************************/
/*! exports provided: AddUserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddUserComponent", function() { return AddUserComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _api_service_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../api-service/user.service */ "./src/app/api-service/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AddUserComponent = /** @class */ (function () {
    function AddUserComponent(formBuilder, userService, router) {
        this.formBuilder = formBuilder;
        this.userService = userService;
        this.router = router;
        this.addUserForm = this.initializeFormGroup();
    }
    AddUserComponent.prototype.initializeFormGroup = function () {
        return this.formBuilder.group({
            userId: [''],
            firstName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            lastName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            employeeId: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required])],
            active: ['Y']
        });
    };
    AddUserComponent.prototype.addUser = function () {
        var _this = this;
        var newUser = Object.assign({}, this.addUserForm.value);
        this.userService.addUser(newUser)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["first"])())
            .subscribe(function (data) {
            if (data.statusCode == 201) {
                alert("You've successfully added a new User!");
                _this.router.navigate(['view-users']);
            }
            else {
                alert(data.message);
            }
        }, function (error) {
            alert("Sorry! Something went wrong, new user cannot be added at the moment. Please try again.");
        });
    };
    AddUserComponent.prototype.onSubmit = function () {
        this.addUser();
    };
    AddUserComponent.prototype.reset = function () {
        this.addUserForm.reset({
            userId: '',
            firstName: '',
            lastName: '',
            employeeId: '',
            active: 'Y'
        });
    };
    AddUserComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'add-user',
            template: __webpack_require__(/*! ./add-user.component.html */ "./src/app/user/add-user/add-user.component.html"),
            styles: [__webpack_require__(/*! ./add-user.component.css */ "./src/app/user/add-user/add-user.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], _api_service_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], AddUserComponent);
    return AddUserComponent;
}());



/***/ }),

/***/ "./src/app/user/edit-user/edit-user.component.css":
/*!********************************************************!*\
  !*** ./src/app/user/edit-user/edit-user.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".slider {\r\n\t-webkit-appearance: none;\r\n\twidth: 100%;\r\n\theight: 15px;\r\n\tborder-radius: 5px;   \r\n\tbackground: #d3d3d3;\r\n\toutline: none;\r\n\topacity: 0.7;\r\n\ttransition: opacity .2s;\r\n  }\r\n  \r\n  .slider::-webkit-slider-thumb {\r\n\t-webkit-appearance: none;\r\n\tappearance: none;\r\n\twidth: 30px;\r\n\theight: 30px;\r\n\tborder-radius: 50%; \r\n\tbackground: #007bff;\r\n\tcursor: pointer;\r\n  }\r\n  \r\n  .slider::-moz-range-thumb {\r\n\twidth: 30px;\r\n\theight: 30px;\r\n\tborder-radius: 50%;\r\n\tbackground: #007bff;\r\n\tcursor: pointer;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci9lZGl0LXVzZXIvZWRpdC11c2VyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Q0FDQyx5QkFBeUI7Q0FDekIsWUFBWTtDQUNaLGFBQWE7Q0FDYixtQkFBbUI7Q0FDbkIsb0JBQW9CO0NBQ3BCLGNBQWM7Q0FDZCxhQUFhO0NBRWIsd0JBQXdCO0dBQ3RCOztFQUVEO0NBQ0QseUJBQXlCO0NBQ3pCLGlCQUFpQjtDQUNqQixZQUFZO0NBQ1osYUFBYTtDQUNiLG1CQUFtQjtDQUNuQixvQkFBb0I7Q0FDcEIsZ0JBQWdCO0dBQ2Q7O0VBRUQ7Q0FDRCxZQUFZO0NBQ1osYUFBYTtDQUNiLG1CQUFtQjtDQUNuQixvQkFBb0I7Q0FDcEIsZ0JBQWdCO0dBQ2QiLCJmaWxlIjoic3JjL2FwcC91c2VyL2VkaXQtdXNlci9lZGl0LXVzZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zbGlkZXIge1xyXG5cdC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcclxuXHR3aWR0aDogMTAwJTtcclxuXHRoZWlnaHQ6IDE1cHg7XHJcblx0Ym9yZGVyLXJhZGl1czogNXB4OyAgIFxyXG5cdGJhY2tncm91bmQ6ICNkM2QzZDM7XHJcblx0b3V0bGluZTogbm9uZTtcclxuXHRvcGFjaXR5OiAwLjc7XHJcblx0LXdlYmtpdC10cmFuc2l0aW9uOiAuMnM7XHJcblx0dHJhbnNpdGlvbjogb3BhY2l0eSAuMnM7XHJcbiAgfVxyXG4gIFxyXG4gIC5zbGlkZXI6Oi13ZWJraXQtc2xpZGVyLXRodW1iIHtcclxuXHQtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XHJcblx0YXBwZWFyYW5jZTogbm9uZTtcclxuXHR3aWR0aDogMzBweDtcclxuXHRoZWlnaHQ6IDMwcHg7XHJcblx0Ym9yZGVyLXJhZGl1czogNTAlOyBcclxuXHRiYWNrZ3JvdW5kOiAjMDA3YmZmO1xyXG5cdGN1cnNvcjogcG9pbnRlcjtcclxuICB9XHJcbiAgXHJcbiAgLnNsaWRlcjo6LW1vei1yYW5nZS10aHVtYiB7XHJcblx0d2lkdGg6IDMwcHg7XHJcblx0aGVpZ2h0OiAzMHB4O1xyXG5cdGJvcmRlci1yYWRpdXM6IDUwJTtcclxuXHRiYWNrZ3JvdW5kOiAjMDA3YmZmO1xyXG5cdGN1cnNvcjogcG9pbnRlcjtcclxuICB9Il19 */"

/***/ }),

/***/ "./src/app/user/edit-user/edit-user.component.html":
/*!*********************************************************!*\
  !*** ./src/app/user/edit-user/edit-user.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<br/>\n<div class=\"container-fluid\">\n    <h3 style=\"padding-left: 10px;\">Edit User</h3>\n    <form *ngIf=\"editUserForm\" [formGroup]=\"editUserForm\" (ngSubmit)=\"onSubmit()\">\n        <div class=\"hidden\">\n            <input type=\"hidden\" class=\"form-control\" id=\"userId\" formControlName=\"userId\"/>\n        </div>\n        <table border=\"0\" cellspacing=\"0\" cellpadding=\"10\" style=\"width: 60%\">\n          <thead>\n            <th width=\"20%\"></th>\n            <th width=\"10%\"></th>\n            <th width=\"70%\"></th>\n          </thead>\n          <tbody>\n            <tr class=\"form-group\">\n                <td>\n                    <label>First Name</label>\n                </td>\n                <td></td>\n                <td>\n                    <input type=\"text\" class=\"form-control\" id=\"firstName\" formControlName=\"firstName\" autofocus/>\n                </td>\n            </tr>\n            <tr class=\"form-group\">\n              <td>\n                  <label>Last Name</label>\n              </td>\n              <td></td>\n              <td>\n                  <input type=\"text\" class=\"form-control\" id=\"lastName\" formControlName=\"lastName\" autofocus/>\n              </td>\n             </tr>\n            <tr class=\"form-group\">\n                <td>\n                    <label>Employee Id</label>\n                </td>\n                <td></td>\n                <td>\n                    <input type=\"text\" class=\"form-control\" id=\"employeeId\" formControlName=\"employeeId\" autofocus />\n                </td>\n            </tr>\n          </tbody>            \n        </table>\n        <br>\n        <div class=\"text-center\">\n        <table border=\"0\" cellspacing=\"0\" cellpading=\"10\">\n            <tr>\n                <td width=\"45%\">\n                    <button type=\"submit\" [disabled]=\"!editUserForm.valid\" class=\"btn btn-success\" style=\"width: 120px; cursor: pointer;\">Update User</button>\n                </td>\n                <td width=\"10%\"></td>\n                <td width=\"45%\">\n                    <button type=\"button\" class=\"btn btn-primary\" style=\"width: 120px; cursor: pointer;\" (click)=\"cancelEdit()\">Cancel</button>\n                </td>\n            </tr>\n        </table>\n      </div>\n    </form>\n</div>\n"

/***/ }),

/***/ "./src/app/user/edit-user/edit-user.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/user/edit-user/edit-user.component.ts ***!
  \*******************************************************/
/*! exports provided: EditUserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditUserComponent", function() { return EditUserComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _api_service_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../api-service/user.service */ "./src/app/api-service/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var EditUserComponent = /** @class */ (function () {
    function EditUserComponent(formBuilder, userService, router) {
        this.formBuilder = formBuilder;
        this.userService = userService;
        this.router = router;
    }
    EditUserComponent.prototype.ngOnInit = function () {
        var selectedUserId = window.localStorage.getItem("selectedUserId");
        if (selectedUserId) {
            this.editUserForm = this.initializeFormGroup(this.formBuilder);
            this.getUser(selectedUserId);
        }
    };
    EditUserComponent.prototype.initializeFormGroup = function (formBuilder) {
        return formBuilder.group({
            userId: [''],
            firstName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            lastName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            employeeId: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required])],
            active: ['Y']
        });
    };
    EditUserComponent.prototype.getUser = function (userId) {
        var _this = this;
        this.userService.getUser(userId).subscribe(function (data) {
            _this.editUserForm.setValue(data.response);
        });
    };
    EditUserComponent.prototype.updateUser = function () {
        var _this = this;
        var editedUser = Object.assign({}, this.editUserForm.value);
        this.userService.updateUser(editedUser)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["first"])())
            .subscribe(function (data) {
            if (data.statusCode == 201) {
                alert("You've successfully updated the User!");
                _this.router.navigate(['view-users']);
            }
            else {
                alert(data.message);
            }
        }, function (error) {
            alert("Sorry! Something went wrong, update cannot be possible at the moment. Please try again.");
        });
    };
    EditUserComponent.prototype.onSubmit = function () {
        this.updateUser();
    };
    EditUserComponent.prototype.cancelEdit = function () {
        this.router.navigate(['view-users']);
    };
    EditUserComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'edit-user',
            template: __webpack_require__(/*! ./edit-user.component.html */ "./src/app/user/edit-user/edit-user.component.html"),
            styles: [__webpack_require__(/*! ./edit-user.component.css */ "./src/app/user/edit-user/edit-user.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], _api_service_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], EditUserComponent);
    return EditUserComponent;
}());



/***/ }),

/***/ "./src/app/user/view-user/view-user.component.css":
/*!********************************************************!*\
  !*** ./src/app/user/view-user/view-user.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".table-hover tr:hover {\r\n    background-color: #e5f4ff;\r\n}\r\n.align-left {\r\n    text-align: left;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci92aWV3LXVzZXIvdmlldy11c2VyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSwwQkFBMEI7Q0FDN0I7QUFDRDtJQUNJLGlCQUFpQjtDQUNwQiIsImZpbGUiOiJzcmMvYXBwL3VzZXIvdmlldy11c2VyL3ZpZXctdXNlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRhYmxlLWhvdmVyIHRyOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlNWY0ZmY7XHJcbn1cclxuLmFsaWduLWxlZnQge1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/user/view-user/view-user.component.html":
/*!*********************************************************!*\
  !*** ./src/app/user/view-user/view-user.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav-bar></nav-bar>\n<br/>\n<div class=\"container-fluid\">\n  <h3 style=\"padding-left: 10px;\">View Users</h3>\n  <div class=\"table-responsive\">\n    <table cellspacing=\"0\" cellpadding=\"10\" style=\"width: 60%\" class=\"table table-bordred table-striped table-hover text-center\">\n      <thead>\n        <th style=\"width: 20%\" title=\"First Name\">\n          <label>First Name</label>\n          <input type=\"text\" class=\"form-control\" id=\"firstName\" [(ngModel)]=\"firstName\" />\n        </th>\n        <th style=\"width: 20%\" title=\"Last Name\">\n          <label>Last Name</label>\n          <input type=\"text\" class=\"form-control\" id=\"lastName\" [(ngModel)]=\"lastName\" />\n        </th>\n        <th style=\"width: 10%\" title=\"Employee Id\">\n          <label>Employee Id</label>\n          <input type=\"text\" class=\"form-control\" id=\"employeeId\" [(ngModel)]=\"employeeId\" />\n        </th>\n        <th style=\"width: 10%\" title=\"Edit\">Edit</th>\n        <th style=\"width: 10%\" title=\"Delete\">Delete</th>\n      </thead>\n      <tbody>\n        <tr *ngFor=\"let user of (users | userFilter: firstName:lastName:employeeId)\">\n            <td>\n                <label>{{user.firstName}}</label>\n              </td>\n              <td>\n                <label>{{user.lastName}}</label>\n              </td>\n              <td>\n                <label>{{user.employeeId}}</label>\n              </td>\n              <td><button class=\"btn btn-primary btn-xs\" title=\"Edit User\" [disabled]=\"user.active == 'N'\" (click)=\"editUser(user)\" style=\"cursor: pointer;\"><span class=\"glyphicon glyphicon-pencil\" aria-hidden=\"true\">&#x270E;</span></button></td>\n\n              <td><p data-placement=\"top\" data-toggle=\"tooltip\" title=\"Delete User\"><button class=\"btn btn-danger btn-xs\" [disabled]=\"user.active == 'N'\" style=\"cursor: pointer;\" (click)=\"prepareDeleteUser(user)\" data-title=\"Delete User\" data-toggle=\"modal\" data-target=\"#delete\"><span class=\"glyphicon glyphicon-stop\" aria-hidden=\"true\">&#xe017;</span></button></p></td>\n        </tr>\n      </tbody>\n    </table>\n  </div>\n</div>\n<!-- Dialog for Delete User confirmation -->\n<div class=\"modal fade\" id=\"delete\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"delete\" aria-hidden=\"true\">\n  <div class=\"modal-dialog\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h4 class=\"modal-title\" id=\"Heading\">Delete User</h4>\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\"><span class=\"glyphicon glyphicon-remove\" aria-hidden=\"true\">&#x2715;</span></button>\n      </div>\n      <!-- /.model-header -->\n      <div class=\"modal-body\">\n        <div class=\"alert alert-danger\"><span class=\"glyphicon glyphicon-warning-sign\"></span> Are you sure, you want to delete this User?</div>\n      </div>\n      <!-- /.model-body -->\n      <div class=\"modal-footer \">\n        <button type=\"button\" class=\"btn btn-success\" style=\"cursor: pointer;\" data-dismiss=\"modal\" (click)=\"deleteUser()\"><span class=\"glyphicon glyphicon-ok-sign\">&#x2714;</span> Yes</button>\n        <button type=\"button\" class=\"btn btn-primary\" style=\"cursor: pointer;\" data-dismiss=\"modal\"><span class=\"glyphicon glyphicon-remove\">&#x2716;</span> No</button>\n      </div>\n      <!-- /.model-footer -->\n    </div>\n    <!-- /.modal-content --> \n  </div>\n  <!-- /.modal-dialog --> \n</div>"

/***/ }),

/***/ "./src/app/user/view-user/view-user.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/user/view-user/view-user.component.ts ***!
  \*******************************************************/
/*! exports provided: ViewUserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewUserComponent", function() { return ViewUserComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _api_service_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../api-service/user.service */ "./src/app/api-service/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! util */ "./node_modules/util/util.js");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_4__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ViewUserComponent = /** @class */ (function () {
    function ViewUserComponent(userService, router) {
        this.userService = userService;
        this.router = router;
    }
    ViewUserComponent.prototype.ngOnInit = function () {
        this.viewUsers();
    };
    ViewUserComponent.prototype.viewUsers = function () {
        var _this = this;
        this.userService.getAllUsers().subscribe(function (data) {
            _this.users = data.response;
            _this.sort();
        });
    };
    ViewUserComponent.prototype.editUser = function (user) {
        window.localStorage.removeItem('selectedUserId');
        window.localStorage.setItem('selectedUserId', user.userId.toString());
        this.router.navigate(['edit-user']);
    };
    ViewUserComponent.prototype.prepareDeleteUser = function (user) {
        window.localStorage.removeItem('selectedUserId');
        window.localStorage.setItem('selectedUserId', user.userId.toString());
    };
    ViewUserComponent.prototype.deleteUser = function () {
        var _this = this;
        var selectedUserId = window.localStorage.getItem('selectedUserId');
        if (selectedUserId) {
            var selectedUser_1;
            this.userService.getUser(selectedUserId).subscribe(function (data) {
                selectedUser_1 = data.response;
                selectedUser_1.active = 'N';
                _this.userService.updateUser(selectedUser_1).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["first"])())
                    .subscribe(function (data) {
                    if (data.statusCode == 201) {
                        setTimeout("2000");
                        alert("You've successfully deleted an User!");
                        _this.ngOnInit();
                    }
                    else {
                        alert(data.message);
                    }
                }, function (error) {
                    alert("Sorry! Something went wrong, update cannot be possible at the moment. Please try again.");
                });
            });
        }
    };
    ViewUserComponent.prototype.sort = function () {
        this.users.sort(function (u1, u2) {
            if (null === u1 || null === u1.employeeId) {
                return 1;
            }
            if (null === u2 || null === u2.employeeId) {
                return -1;
            }
            if (Object(util__WEBPACK_IMPORTED_MODULE_4__["isNumber"])(u1.employeeId) && Object(util__WEBPACK_IMPORTED_MODULE_4__["isNumber"])(u2.employeeId)) {
                if (u1.employeeId === u2.employeeId) {
                    return 0;
                }
                return u1.employeeId > u2.employeeId ? 1 : -1;
            }
        });
    };
    ViewUserComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'view-user',
            template: __webpack_require__(/*! ./view-user.component.html */ "./src/app/user/view-user/view-user.component.html"),
            styles: [__webpack_require__(/*! ./view-user.component.css */ "./src/app/user/view-user/view-user.component.css")]
        }),
        __metadata("design:paramtypes", [_api_service_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], ViewUserComponent);
    return ViewUserComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\Dev\workspace\FSE-Training\ProjectManager-Web\project-manager-app\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map