"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sayHello = void 0;
const sayHello = (req, res) => {
    res.status(200).send("hello from login");
};
exports.sayHello = sayHello;
