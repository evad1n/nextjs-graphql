"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
// Start express server
const app = (0, express_1.default)();
const port = process.env.PORT || 8000;
app.get("/", (req, res) => {
    res.send("hello!");
});
app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});
//# sourceMappingURL=index.js.map