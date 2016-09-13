"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var user_1 = require('../shared/models/user');
var UserFormCompoment = (function () {
    function UserFormCompoment() {
        this.userCreated = new core_1.EventEmitter();
        this.newUser = new user_1.User();
        this.active = true;
    }
    UserFormCompoment.prototype.onSubmit = function () {
        var _this = this;
        this.userCreated.emit({ user: this.newUser });
        this.newUser = new user_1.User();
        this.active = false;
        setTimeout(function () { return _this.active = true; }, 0);
    };
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], UserFormCompoment.prototype, "userCreated", void 0);
    UserFormCompoment = __decorate([
        core_1.Component({
            selector: 'user-form',
            templateUrl: './app/users/user-form.component.html',
            styles: ["\n      form {\n        padding:10px;\n        background:#ECF0F1;\n        border-radius: 3px;\n        margin-bottom: 30px;\n      }\n    "]
        }), 
        __metadata('design:paramtypes', [])
    ], UserFormCompoment);
    return UserFormCompoment;
}());
exports.UserFormCompoment = UserFormCompoment;
