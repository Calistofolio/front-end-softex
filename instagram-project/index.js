"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var node_crypto_1 = require("node:crypto");
var faker_1 = require("@faker-js/faker");
var Post = /** @class */ (function () {
    function Post(userName, avatarUrl, imgUrl, description) {
        this._isLiked = false;
        this._description = description;
        this._userName = userName;
        this._imgUrl = imgUrl;
        this._isLiked;
        this._createdAt = new Date();
        this._numberOfLikes = 0;
        this._avatarUrl = avatarUrl;
        this._id = (0, node_crypto_1.randomUUID)();
    }
    Object.defineProperty(Post.prototype, "id", {
        get: function () {
            return this._id;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Post.prototype, "caption", {
        get: function () {
            return this._description;
        },
        set: function (description) {
            this._description = description;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Post.prototype, "userName", {
        get: function () {
            return this._userName;
        },
        set: function (userName) {
            this._userName = userName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Post.prototype, "imgUrl", {
        get: function () {
            return this._imgUrl;
        },
        set: function (imgUrl) {
            this._imgUrl = imgUrl;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Post.prototype, "createdAt", {
        get: function () {
            return this._createdAt;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Post.prototype, "numberOfLikes", {
        get: function () {
            return this._numberOfLikes;
        },
        enumerable: false,
        configurable: true
    });
    Post.prototype.like = function () {
        this._isLiked = !this._isLiked;
        if (this._isLiked) {
            this._numberOfLikes += 1;
        }
        else {
            this._numberOfLikes -= 1;
        }
        console.log(this._isLiked);
        var postContainer = document.getElementById(this._id);
        var btnLike = postContainer === null || postContainer === void 0 ? void 0 : postContainer.querySelector("#btnLike");
    };
    Post.prototype.toHtml = function () { };
    return Post;
}());
var posts = [];
for (var i = 0; i < 15; i++) {
    var userName = faker_1.faker.person.firstName();
    var avatarUrl = faker_1.faker.image.avatar();
    var imgUrl = faker_1.faker.image.urlLoremFlickr();
    var description = faker_1.faker.lorem.word();
    var post = new Post(userName, avatarUrl, imgUrl, description);
    posts.push(post);
}
posts[0].like();
console.log(posts[0]);
