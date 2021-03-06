"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
require('rxjs/add/operator/map');
var UserService = (function () {
    function UserService(http) {
        this.http = http;
        this.headers = new http_1.Headers({ 'Content-Type': 'application/json', 'charset': 'UTF-8' });
        this.options = new http_1.RequestOptions({ headers: this.headers });
    }
    //Get available contents
    UserService.prototype.getAvailableContents = function (department_v, department_id, department_name) {
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        return this.http.get("/get_available_contents/" + currentUser.company._id + "/" + department_v + "/" + department_id + "/" + department_name).map(function (res) { return res.json(); });
    };
    UserService.prototype.transferTokens = function (sender_id, receiver_id, value, message) {
        return this.http.post("/transfer_tokens/" + sender_id + "/" + receiver_id + "/" + value, { message_body: message }, this.options);
    };
    UserService = __decorate([
        core_1.Injectable()
    ], UserService);
    return UserService;
}());
exports.UserService = UserService;

"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
require('rxjs/add/operator/map');
var UserService = (function () {
    function UserService(http) {
        this.http = http;
        this.headers = new http_1.Headers({ 'Content-Type': 'application/json', 'charset': 'UTF-8' });
        this.options = new http_1.RequestOptions({ headers: this.headers });
    }
    //Get available contents
    UserService.prototype.getAvailableContents = function (department_v, department_id, department_name) {
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        return this.http.get("/get_available_contents/" + currentUser.company._id + "/" + department_v + "/" + department_id + "/" + department_name).map(function (res) { return res.json(); });
    };
    UserService.prototype.transferTokens = function (sender_id, receiver_id, value, message) {
        return this.http.post("/transfer_tokens/" + sender_id + "/" + receiver_id + "/" + value, { message_body: message }, this.options);
    };
    UserService = __decorate([
        core_1.Injectable()
    ], UserService);
    return UserService;
}());
exports.UserService = UserService;
