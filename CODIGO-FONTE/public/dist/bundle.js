/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./main.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./main.ts":
/*!*****************!*\
  !*** ./main.ts ***!
  \*****************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__webpack_require__(/*! ./src/index */ \"./src/index.ts\");\r\n\n\n//# sourceURL=webpack:///./main.ts?");

/***/ }),

/***/ "./node_modules/phaser-ce/build/phaser.js":
/*!************************************************!*\
  !*** ./node_modules/phaser-ce/build/phaser.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


/***/ }),

/***/ "./node_modules/process/browser.js":
/*!*****************************************!*\
  !*** ./node_modules/process/browser.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// shim for using process in browser\nvar process = module.exports = {};\n\n// cached from whatever global is present so that test runners that stub it\n// don't break things.  But we need to wrap it in a try catch in case it is\n// wrapped in strict mode code which doesn't define any globals.  It's inside a\n// function because try/catches deoptimize in certain engines.\n\nvar cachedSetTimeout;\nvar cachedClearTimeout;\n\nfunction defaultSetTimout() {\n    throw new Error('setTimeout has not been defined');\n}\nfunction defaultClearTimeout () {\n    throw new Error('clearTimeout has not been defined');\n}\n(function () {\n    try {\n        if (typeof setTimeout === 'function') {\n            cachedSetTimeout = setTimeout;\n        } else {\n            cachedSetTimeout = defaultSetTimout;\n        }\n    } catch (e) {\n        cachedSetTimeout = defaultSetTimout;\n    }\n    try {\n        if (typeof clearTimeout === 'function') {\n            cachedClearTimeout = clearTimeout;\n        } else {\n            cachedClearTimeout = defaultClearTimeout;\n        }\n    } catch (e) {\n        cachedClearTimeout = defaultClearTimeout;\n    }\n} ())\nfunction runTimeout(fun) {\n    if (cachedSetTimeout === setTimeout) {\n        //normal enviroments in sane situations\n        return setTimeout(fun, 0);\n    }\n    // if setTimeout wasn't available but was latter defined\n    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {\n        cachedSetTimeout = setTimeout;\n        return setTimeout(fun, 0);\n    }\n    try {\n        // when when somebody has screwed with setTimeout but no I.E. maddness\n        return cachedSetTimeout(fun, 0);\n    } catch(e){\n        try {\n            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally\n            return cachedSetTimeout.call(null, fun, 0);\n        } catch(e){\n            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error\n            return cachedSetTimeout.call(this, fun, 0);\n        }\n    }\n\n\n}\nfunction runClearTimeout(marker) {\n    if (cachedClearTimeout === clearTimeout) {\n        //normal enviroments in sane situations\n        return clearTimeout(marker);\n    }\n    // if clearTimeout wasn't available but was latter defined\n    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {\n        cachedClearTimeout = clearTimeout;\n        return clearTimeout(marker);\n    }\n    try {\n        // when when somebody has screwed with setTimeout but no I.E. maddness\n        return cachedClearTimeout(marker);\n    } catch (e){\n        try {\n            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally\n            return cachedClearTimeout.call(null, marker);\n        } catch (e){\n            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.\n            // Some versions of I.E. have different rules for clearTimeout vs setTimeout\n            return cachedClearTimeout.call(this, marker);\n        }\n    }\n\n\n\n}\nvar queue = [];\nvar draining = false;\nvar currentQueue;\nvar queueIndex = -1;\n\nfunction cleanUpNextTick() {\n    if (!draining || !currentQueue) {\n        return;\n    }\n    draining = false;\n    if (currentQueue.length) {\n        queue = currentQueue.concat(queue);\n    } else {\n        queueIndex = -1;\n    }\n    if (queue.length) {\n        drainQueue();\n    }\n}\n\nfunction drainQueue() {\n    if (draining) {\n        return;\n    }\n    var timeout = runTimeout(cleanUpNextTick);\n    draining = true;\n\n    var len = queue.length;\n    while(len) {\n        currentQueue = queue;\n        queue = [];\n        while (++queueIndex < len) {\n            if (currentQueue) {\n                currentQueue[queueIndex].run();\n            }\n        }\n        queueIndex = -1;\n        len = queue.length;\n    }\n    currentQueue = null;\n    draining = false;\n    runClearTimeout(timeout);\n}\n\nprocess.nextTick = function (fun) {\n    var args = new Array(arguments.length - 1);\n    if (arguments.length > 1) {\n        for (var i = 1; i < arguments.length; i++) {\n            args[i - 1] = arguments[i];\n        }\n    }\n    queue.push(new Item(fun, args));\n    if (queue.length === 1 && !draining) {\n        runTimeout(drainQueue);\n    }\n};\n\n// v8 likes predictible objects\nfunction Item(fun, array) {\n    this.fun = fun;\n    this.array = array;\n}\nItem.prototype.run = function () {\n    this.fun.apply(null, this.array);\n};\nprocess.title = 'browser';\nprocess.browser = true;\nprocess.env = {};\nprocess.argv = [];\nprocess.version = ''; // empty string to avoid regexp issues\nprocess.versions = {};\n\nfunction noop() {}\n\nprocess.on = noop;\nprocess.addListener = noop;\nprocess.once = noop;\nprocess.off = noop;\nprocess.removeListener = noop;\nprocess.removeAllListeners = noop;\nprocess.emit = noop;\nprocess.prependListener = noop;\nprocess.prependOnceListener = noop;\n\nprocess.listeners = function (name) { return [] }\n\nprocess.binding = function (name) {\n    throw new Error('process.binding is not supported');\n};\n\nprocess.cwd = function () { return '/' };\nprocess.chdir = function (dir) {\n    throw new Error('process.chdir is not supported');\n};\nprocess.umask = function() { return 0; };\n\n\n//# sourceURL=webpack:///./node_modules/process/browser.js?");

/***/ }),

/***/ "./src/client/actors/player/player.class.ts":
/*!**************************************************!*\
  !*** ./src/client/actors/player/player.class.ts ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar particle_class_1 = __webpack_require__(/*! src/client/props/particle/particle.class */ \"./src/client/props/particle/particle.class.ts\");\r\nvar keyboard_class_1 = __webpack_require__(/*! src/client/controls/keyboard.class */ \"./src/client/controls/keyboard.class.ts\");\r\nvar hud_class_1 = __webpack_require__(/*! src/client/hud/hud.class */ \"./src/client/hud/hud.class.ts\");\r\nvar explosion_class_1 = __webpack_require__(/*! src/client/props/explosion/explosion.class */ \"./src/client/props/explosion/explosion.class.ts\");\r\nvar projectile_class_1 = __webpack_require__(/*! src/client/props/powers/projectile/projectile.class */ \"./src/client/props/powers/projectile/projectile.class.ts\");\r\nvar Player = /** @class */ (function () {\r\n    function Player(gameInstance, playerInstance, type) {\r\n        this.gameInstance = gameInstance;\r\n        this.playerInstance = playerInstance;\r\n        this.angularVelocity = 300;\r\n        this.createPlayer(this.gameInstance, type);\r\n        this.playerState = new Map();\r\n    }\r\n    Player.prototype.createPlayer = function (gameInstance, type) {\r\n        var _this = this;\r\n        this.hud = new hud_class_1.Hud();\r\n        this.addControls();\r\n        this.player = gameInstance.add.sprite(this.playerInstance.x, this.playerInstance.y, type);\r\n        this.player.id = this.playerInstance.id;\r\n        this.player.anchor.setTo(0.5, 0.5);\r\n        this.player.animations.add(\"accelerating\", [1, 0], 60, false);\r\n        this.player.name = this.playerInstance.name;\r\n        this.attachPhysics(gameInstance);\r\n        this.player.destroy = function () {\r\n            new explosion_class_1.Explode(_this.gameInstance, _this.player);\r\n            _this.player.kill();\r\n        };\r\n        this.particle = new particle_class_1.Particle(gameInstance, this.player);\r\n        this.hud.setName(gameInstance, this.player);\r\n    };\r\n    Player.prototype.assignPickup = function (game, player) {\r\n        this.projectile = new projectile_class_1.Projectile(game, player.player);\r\n        this.hud.setAmmo(game, player.player, this.projectile);\r\n        this.playerState.set(\"ammo\", this.projectile.bulletCount);\r\n    };\r\n    Player.prototype.view = function () {\r\n        this.controls.update();\r\n        if (this.projectile) {\r\n            this.hud.update(this.playerState.get(\"ammo\"));\r\n        }\r\n    };\r\n    Player.prototype.addControls = function () {\r\n        this.controls = new keyboard_class_1.KeyBoardControl(this.gameInstance, this);\r\n    };\r\n    Player.prototype.attachPhysics = function (gameInstance) {\r\n        gameInstance.physics.enable(this.player, Phaser.Physics.ARCADE);\r\n        this.player.body.collideWorldBounds = true;\r\n        this.player.body.bounce.setTo(10, 10);\r\n        this.player.body.gravity.y = 0;\r\n        this.player.body.drag.set(80);\r\n        this.player.body.maxVelocity.set(100);\r\n        this.player.body.immovable = false;\r\n    };\r\n    return Player;\r\n}());\r\nexports.Player = Player;\r\n\n\n//# sourceURL=webpack:///./src/client/actors/player/player.class.ts?");

/***/ }),

/***/ "./src/client/controls/keyboard.class.ts":
/*!***********************************************!*\
  !*** ./src/client/controls/keyboard.class.ts ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar KeyBoardControl = /** @class */ (function () {\r\n    function KeyBoardControl(gameInstance, playerInstance) {\r\n        this.gameInstance = gameInstance;\r\n        this.playerInstance = playerInstance;\r\n        this.gameControls = {\r\n            cursors: this.gameInstance.input.keyboard.createCursorKeys(),\r\n            fireWeapon: this.gameInstance.input.keyboard.addKey(Phaser.KeyCode.SPACEBAR),\r\n        };\r\n    }\r\n    KeyBoardControl.prototype.update = function () {\r\n        if (this.playerInstance.player.alive) {\r\n            this.playerInstance.playerState.set(\"fire\", false);\r\n            if (this.gameControls.cursors.up.isDown) {\r\n                this.gameInstance.physics.arcade.accelerationFromRotation(this.playerInstance.player.rotation, 100, this.playerInstance.player.body.acceleration);\r\n                this.playerInstance.player.animations.play(\"accelerating\");\r\n                this.playerInstance.playerState.set(\"moving\", true);\r\n            }\r\n            else {\r\n                this.playerInstance.player.body.acceleration.set(0);\r\n                this.playerInstance.playerState.set(\"moving\", false);\r\n            }\r\n            if (this.gameControls.cursors.left.isDown) {\r\n                this.playerInstance.player.body.angularVelocity = -this\r\n                    .playerInstance.angularVelocity;\r\n            }\r\n            else if (this.gameControls.cursors.right.isDown) {\r\n                this.playerInstance.player.body.angularVelocity = this.playerInstance.angularVelocity;\r\n            }\r\n            else {\r\n                this.playerInstance.player.body.angularVelocity = 0;\r\n            }\r\n            if (this.gameControls.fireWeapon.isDown) {\r\n                if (this.playerInstance.projectile) {\r\n                    this.playerInstance.projectile.fireWeapon();\r\n                    this.playerInstance.playerState.set(\"fire\", true);\r\n                    this.playerInstance.playerState.set(\"ammo\", this.playerInstance.projectile.bulletCount);\r\n                }\r\n                else {\r\n                    this.playerInstance.playerState.set(\"fire\", false);\r\n                }\r\n            }\r\n        }\r\n    };\r\n    return KeyBoardControl;\r\n}());\r\nexports.KeyBoardControl = KeyBoardControl;\r\n\n\n//# sourceURL=webpack:///./src/client/controls/keyboard.class.ts?");

/***/ }),

/***/ "./src/client/engine/phaser-engine.class.ts":
/*!**************************************************!*\
  !*** ./src/client/engine/phaser-engine.class.ts ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __extends = (this && this.__extends) || (function () {\r\n    var extendStatics = function (d, b) {\r\n        extendStatics = Object.setPrototypeOf ||\r\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\r\n            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };\r\n        return extendStatics(d, b);\r\n    };\r\n    return function (d, b) {\r\n        extendStatics(d, b);\r\n        function __() { this.constructor = d; }\r\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\r\n    };\r\n})();\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar game_class_1 = __webpack_require__(/*! ../game/game.class */ \"./src/client/game/game.class.ts\");\r\nvar PhaserSpaceGame = /** @class */ (function (_super) {\r\n    __extends(PhaserSpaceGame, _super);\r\n    function PhaserSpaceGame() {\r\n        var _this = _super.call(this) || this;\r\n        _this.game = new Phaser.Game(1024, 768, Phaser.AUTO, \"space-shooter\", {\r\n            preload: _this.preload,\r\n            create: _this.create,\r\n            update: _this.update,\r\n        });\r\n        return _this;\r\n    }\r\n    PhaserSpaceGame.prototype.preload = function () {\r\n        var game = this.game.load;\r\n        game.crossOrigin = \"anonymous\";\r\n        game.image(\"space\", \"assets/background.jpg\");\r\n        game.image(\"laser\", \"assets/bullet.png\");\r\n        game.spritesheet(\"dust\", \"assets/dust.png\", 64, 64, 16);\r\n        game.spritesheet(\"kaboom\", \"assets/explosions.png\", 64, 64, 16);\r\n        game.spritesheet(\"kaboom-big\", \"assets/explosions-big.png\", 152, 152, 16);\r\n        game.image(\"pickup\", \"assets/pickup.png\");\r\n        game.spritesheet(\"shooter-sprite\", \"assets/ship.png\", 32, 32);\r\n        game.spritesheet(\"shooter-sprite-enemy\", \"assets/ship-enemy.png\", 32, 32);\r\n        game.spritesheet(\"asteroid\", \"assets/asteroids.png\", 128, 128, 31);\r\n    };\r\n    PhaserSpaceGame.prototype.create = function () {\r\n        _super.prototype.properties.call(this, this.game);\r\n        _super.prototype.manageAssets.call(this, this.game);\r\n    };\r\n    PhaserSpaceGame.prototype.update = function () {\r\n        _super.prototype.gameUpdate.call(this, this.game);\r\n    };\r\n    Object.defineProperty(PhaserSpaceGame.prototype, \"gameInstance\", {\r\n        get: function () {\r\n            return this.game;\r\n        },\r\n        enumerable: true,\r\n        configurable: true\r\n    });\r\n    return PhaserSpaceGame;\r\n}(game_class_1.Game));\r\nexports.PhaserSpaceGame = PhaserSpaceGame;\r\n\n\n//# sourceURL=webpack:///./src/client/engine/phaser-engine.class.ts?");

/***/ }),

/***/ "./src/client/game/game.class.ts":
/*!***************************************!*\
  !*** ./src/client/game/game.class.ts ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar events_model_1 = __webpack_require__(/*! src/shared/events.model */ \"./src/shared/events.model.ts\");\r\nvar Phaser = __webpack_require__(/*! phaser-ce */ \"./node_modules/phaser-ce/build/phaser.js\");\r\nvar login_1 = __webpack_require__(/*! src/client/scenes/login */ \"./src/client/scenes/login.ts\");\r\nvar projectile_class_1 = __webpack_require__(/*! src/client/props/powers/projectile/projectile.class */ \"./src/client/props/powers/projectile/projectile.class.ts\");\r\nvar player_class_1 = __webpack_require__(/*! src/client/actors/player/player.class */ \"./src/client/actors/player/player.class.ts\");\r\nvar asteroid_class_1 = __webpack_require__(/*! src/client/props/asteroid/asteroid.class */ \"./src/client/props/asteroid/asteroid.class.ts\");\r\nvar Game = /** @class */ (function () {\r\n    function Game() {\r\n        window.socket = io.connect();\r\n        this.login = new login_1.LoginScene();\r\n    }\r\n    Game.prototype.manageAssets = function (game) {\r\n        var _this = this;\r\n        this.actors = [];\r\n        this.comets = [];\r\n        window.socket.on(events_model_1.PlayerEvent.joined, function (player) {\r\n            _this.actors.push(new player_class_1.Player(game, player, \"shooter-sprite-enemy\"));\r\n        });\r\n        window.socket.on(events_model_1.PlayerEvent.protagonist, function (player) {\r\n            _this.actor = new player_class_1.Player(game, player, \"shooter-sprite\");\r\n            _this.actors.push(_this.actor);\r\n        });\r\n        window.socket.on(events_model_1.PlayerEvent.players, function (players) {\r\n            players.map(function (player) {\r\n                var enemy = new player_class_1.Player(game, player, \"shooter-sprite-enemy\");\r\n                if (player.ammo) {\r\n                    enemy.assignPickup(game, enemy);\r\n                }\r\n                _this.actors.push(enemy);\r\n            });\r\n        });\r\n        window.socket.on(events_model_1.PlayerEvent.quit, function (playerId) {\r\n            _this.actors\r\n                .filter(function (actor) { return actor.player.id === playerId; })\r\n                .map(function (actor) { return actor.player.kill(); });\r\n        });\r\n        window.socket.on(events_model_1.GameEvent.drop, function (coors) {\r\n            if (_this.projectile) {\r\n                _this.projectile.pickup.item.kill();\r\n            }\r\n            _this.projectile = new projectile_class_1.Projectile(game);\r\n            _this.projectile.renderPickup(coors);\r\n        });\r\n        window.socket.on(events_model_1.CometEvent.create, function (comet) {\r\n            _this.comet = new asteroid_class_1.Asteroid(game, comet);\r\n            _this.comets.push(_this.comet);\r\n        });\r\n        window.socket.on(events_model_1.CometEvent.coordinates, function (coors) {\r\n            if (_this.comet) {\r\n                _this.comet.asteroid.x = coors.x;\r\n                _this.comet.asteroid.y = coors.y;\r\n            }\r\n        });\r\n        window.socket.on(events_model_1.CometEvent.destroy, function () {\r\n            if (_this.comet) {\r\n                _this.comet.asteroid.kill();\r\n                _this.comet = null;\r\n            }\r\n        });\r\n        window.socket.on(events_model_1.CometEvent.hit, function () {\r\n            if (_this.comet) {\r\n                _this.comet.hit();\r\n            }\r\n        });\r\n        window.socket.on(events_model_1.PlayerEvent.hit, function (enemyId) {\r\n            _this.actors\r\n                .filter(function () { return _this.actor.player.id === enemyId; })\r\n                .map(function () { return window.location.reload(true); });\r\n        });\r\n        window.socket.on(events_model_1.PlayerEvent.pickup, function (playerId) {\r\n            _this.actors\r\n                .filter(function (actor) { return actor.player.id === playerId; })\r\n                .map(function (actor) { return actor.assignPickup(game, actor); });\r\n            _this.projectile.pickup.item.kill();\r\n        });\r\n        window.socket.on(events_model_1.PlayerEvent.coordinates, function (player) {\r\n            _this.actors.filter(function (actor) {\r\n                if (actor.player.id === player.player.id) {\r\n                    actor.player.x = player.coors.x;\r\n                    actor.player.y = player.coors.y;\r\n                    actor.player.rotation = player.coors.r;\r\n                    if (actor.projectile) {\r\n                        actor.hud.update(player.coors.a);\r\n                    }\r\n                    if (player.coors.f) {\r\n                        actor.projectile.fireWeapon();\r\n                    }\r\n                    if (player.coors.m) {\r\n                        actor.player.animations.play(\"accelerating\");\r\n                    }\r\n                }\r\n            });\r\n        });\r\n    };\r\n    Game.prototype.gameUpdate = function (game) {\r\n        var _this = this;\r\n        if (this.comet) {\r\n            game.physics.arcade.collide(this.comet.asteroid, this.actors.map(function (actor) { return actor.player; }), function (comet, actor) {\r\n                if (actor.id !== _this.actor.player.id) {\r\n                    actor.destroy();\r\n                    window.socket.emit(events_model_1.PlayerEvent.hit, actor.id);\r\n                }\r\n                else {\r\n                    window.location.reload(true);\r\n                }\r\n            });\r\n            if (this.actor && this.actor.projectile) {\r\n                game.physics.arcade.collide(this.actor.projectile.weapon.bullets, this.comets.map(function (comet) { return comet.asteroid; }), function (comet, projectile) {\r\n                    window.socket.emit(events_model_1.CometEvent.hit, comet.id);\r\n                    projectile.kill();\r\n                    _this.comet.hit();\r\n                });\r\n            }\r\n        }\r\n        if (this.actor && this.actor.controls) {\r\n            this.actor.view();\r\n            window.socket.emit(events_model_1.PlayerEvent.coordinates, {\r\n                x: this.actor.player.position.x,\r\n                y: this.actor.player.position.y,\r\n                r: this.actor.player.rotation,\r\n                f: this.actor.playerState.get(\"fire\"),\r\n                m: this.actor.playerState.get(\"moving\"),\r\n                a: this.actor.playerState.get(\"ammo\"),\r\n            });\r\n            game.physics.arcade.collide(this.actor.player, this.actors.map(function (actor) { return actor.player; }));\r\n            if (this.actor.projectile) {\r\n                game.physics.arcade.collide(this.actor.projectile.weapon.bullets, this.actors.map(function (actor) { return actor.player; }), function (enemy, projectile) {\r\n                    if (enemy.id !== _this.actor.player.id) {\r\n                        window.socket.emit(events_model_1.PlayerEvent.hit, enemy.id);\r\n                        projectile.kill();\r\n                        enemy.destroy();\r\n                    }\r\n                });\r\n            }\r\n            if (this.projectile) {\r\n                game.physics.arcade.overlap(this.projectile.pickup.item, this.actors.map(function (actor) { return actor.player; }), function (pickup, actor) {\r\n                    _this.actors\r\n                        .filter(function (actorInstance) {\r\n                        return actor.id === actorInstance.player.id;\r\n                    })\r\n                        .map(function (actorInstance) {\r\n                        return actorInstance.assignPickup(game, actorInstance);\r\n                    });\r\n                    window.socket.emit(events_model_1.PlayerEvent.pickup, {\r\n                        uuid: actor.id,\r\n                        ammo: true,\r\n                    });\r\n                    pickup.kill();\r\n                });\r\n            }\r\n        }\r\n    };\r\n    Game.prototype.properties = function (game) {\r\n        game.stage.disableVisibilityChange = true;\r\n        game.add.tileSprite(0, 0, game.width, game.height, \"space\");\r\n        game.add.sprite(0, 0, \"space\");\r\n        game.time.desiredFps = 60;\r\n        game.renderer.clearBeforeRender = false;\r\n        game.physics.startSystem(Phaser.Physics.ARCADE);\r\n    };\r\n    return Game;\r\n}());\r\nexports.Game = Game;\r\n\n\n//# sourceURL=webpack:///./src/client/game/game.class.ts?");

/***/ }),

/***/ "./src/client/hud/hud.class.ts":
/*!*************************************!*\
  !*** ./src/client/hud/hud.class.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar Hud = /** @class */ (function () {\r\n    function Hud() {\r\n        this.style = {\r\n            font: \"10px Arial\",\r\n            fill: \"#ffffff\",\r\n        };\r\n    }\r\n    Hud.prototype.setName = function (game, player) {\r\n        this.name = game.add.text(0, 10, player.name.substring(0, 6), this.style);\r\n        player.addChild(this.name);\r\n    };\r\n    Hud.prototype.update = function (ammo) {\r\n        this.ammo.setText(\"\" + (ammo ? ammo : \"\"));\r\n    };\r\n    Hud.prototype.setAmmo = function (game, player, weapon) {\r\n        if (this.ammo) {\r\n            this.ammo.setText(\"\");\r\n        }\r\n        this.ammo = game.add.text(0, 25, weapon.bulletCount.toString(), this.style);\r\n        player.addChild(this.ammo);\r\n    };\r\n    return Hud;\r\n}());\r\nexports.Hud = Hud;\r\n\n\n//# sourceURL=webpack:///./src/client/hud/hud.class.ts?");

/***/ }),

/***/ "./src/client/props/asteroid/asteroid.class.ts":
/*!*****************************************************!*\
  !*** ./src/client/props/asteroid/asteroid.class.ts ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar explosion_class_1 = __webpack_require__(/*! ../explosion/explosion.class */ \"./src/client/props/explosion/explosion.class.ts\");\r\nvar Asteroid = /** @class */ (function () {\r\n    function Asteroid(gameInstance, cometInstance) {\r\n        var _this = this;\r\n        this.gameInstance = gameInstance;\r\n        this.cometInstance = cometInstance;\r\n        this.gameInstance = gameInstance;\r\n        this.asteroid = gameInstance.add.sprite(0, -128, \"asteroid\");\r\n        this.asteroid.animations.add(\"asteroid\");\r\n        this.asteroid.animations.play(\"asteroid\", 10, true, false);\r\n        this.attachPhysics(gameInstance);\r\n        this.asteroid.destroy = function () {\r\n            new explosion_class_1.Explode(_this.gameInstance, _this.asteroid, true);\r\n            _this.asteroid.kill();\r\n        };\r\n        this.asteroid.id = this.cometInstance.id;\r\n    }\r\n    Asteroid.prototype.hit = function () {\r\n        this.asteroid.destroy();\r\n    };\r\n    Asteroid.prototype.attachPhysics = function (gameInstance) {\r\n        gameInstance.physics.enable(this.asteroid, Phaser.Physics.ARCADE);\r\n        this.asteroid.body.collideWorldBounds = false;\r\n        this.asteroid.body.bounce.setTo(0);\r\n        this.asteroid.body.gravity.y = 0;\r\n        this.asteroid.body.drag.set(80);\r\n        this.asteroid.body.maxVelocity.set(100);\r\n        this.asteroid.body.immovable = true;\r\n    };\r\n    return Asteroid;\r\n}());\r\nexports.Asteroid = Asteroid;\r\n\n\n//# sourceURL=webpack:///./src/client/props/asteroid/asteroid.class.ts?");

/***/ }),

/***/ "./src/client/props/explosion/explosion.class.ts":
/*!*******************************************************!*\
  !*** ./src/client/props/explosion/explosion.class.ts ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar Explode = /** @class */ (function () {\r\n    function Explode(gameInstance, player, big) {\r\n        var _this = this;\r\n        if (big) {\r\n            this.explosions = gameInstance.add.sprite(152, 152, \"kaboom-big\");\r\n        }\r\n        else {\r\n            this.explosions = gameInstance.add.sprite(64, 64, \"kaboom\");\r\n        }\r\n        this.explosions.animations.add(\"kaboom\");\r\n        this.explosions.reset(player.body.x + -20, player.body.y - 30);\r\n        this.explosions.animations.play(\"kaboom\", 15, false);\r\n        setTimeout(function () {\r\n            _this.explosions.kill();\r\n        }, 500);\r\n    }\r\n    return Explode;\r\n}());\r\nexports.Explode = Explode;\r\n\n\n//# sourceURL=webpack:///./src/client/props/explosion/explosion.class.ts?");

/***/ }),

/***/ "./src/client/props/particle/particle.class.ts":
/*!*****************************************************!*\
  !*** ./src/client/props/particle/particle.class.ts ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar Particle = /** @class */ (function () {\r\n    function Particle(gameInstance, sprite) {\r\n        var _this = this;\r\n        this.particle = gameInstance.add.sprite(64, 64, 'dust');\r\n        this.particle.animations.add('dust');\r\n        this.particle.reset(sprite.body.x + -20, sprite.body.y - 30);\r\n        this.particle.animations.play('dust', 16, false);\r\n        setTimeout(function () {\r\n            _this.particle.kill();\r\n        }, 1000);\r\n    }\r\n    return Particle;\r\n}());\r\nexports.Particle = Particle;\r\n\n\n//# sourceURL=webpack:///./src/client/props/particle/particle.class.ts?");

/***/ }),

/***/ "./src/client/props/powers/pickup/pickup.class.ts":
/*!********************************************************!*\
  !*** ./src/client/props/powers/pickup/pickup.class.ts ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar phaser_ce_1 = __webpack_require__(/*! phaser-ce */ \"./node_modules/phaser-ce/build/phaser.js\");\r\nvar particle_class_1 = __webpack_require__(/*! src/client/props/particle/particle.class */ \"./src/client/props/particle/particle.class.ts\");\r\nvar Pickup = /** @class */ (function () {\r\n    function Pickup(game, coors) {\r\n        this.item = game.add.sprite(coors.x, coors.y, \"pickup\");\r\n        game.physics.enable(this.item, phaser_ce_1.Physics.ARCADE);\r\n        this.particle = new particle_class_1.Particle(game, this.item);\r\n    }\r\n    return Pickup;\r\n}());\r\nexports.Pickup = Pickup;\r\n\n\n//# sourceURL=webpack:///./src/client/props/powers/pickup/pickup.class.ts?");

/***/ }),

/***/ "./src/client/props/powers/projectile/projectile.class.ts":
/*!****************************************************************!*\
  !*** ./src/client/props/powers/projectile/projectile.class.ts ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar particle_class_1 = __webpack_require__(/*! src/client/props/particle/particle.class */ \"./src/client/props/particle/particle.class.ts\");\r\nvar pickup_class_1 = __webpack_require__(/*! src/client/props/powers/pickup/pickup.class */ \"./src/client/props/powers/pickup/pickup.class.ts\");\r\nvar Projectile = /** @class */ (function () {\r\n    function Projectile(gameInstance, player) {\r\n        this.bulletCount = 10;\r\n        this.gameInstance = gameInstance;\r\n        this.weapon = gameInstance.add.weapon(this.bulletCount, \"laser\");\r\n        this.weapon.fireLimit = this.bulletCount;\r\n        this.weapon.fireRate = 1000;\r\n        if (player) {\r\n            this.player = player;\r\n            this.weapon.trackSprite(this.player, 10, 0, true);\r\n        }\r\n    }\r\n    Projectile.prototype.fireWeapon = function () {\r\n        this.weapon.fire();\r\n        this.bulletCount = this.weapon.fireLimit - this.weapon.shots;\r\n    };\r\n    Projectile.prototype.renderPickup = function (coors) {\r\n        this.pickup = new pickup_class_1.Pickup(this.gameInstance, coors);\r\n        new particle_class_1.Particle(this.gameInstance, this.pickup.item);\r\n    };\r\n    return Projectile;\r\n}());\r\nexports.Projectile = Projectile;\r\n\n\n//# sourceURL=webpack:///./src/client/props/powers/projectile/projectile.class.ts?");

/***/ }),

/***/ "./src/client/scenes/login.ts":
/*!************************************!*\
  !*** ./src/client/scenes/login.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar events_model_1 = __webpack_require__(/*! src/shared/events.model */ \"./src/shared/events.model.ts\");\r\nvar LoginScene = /** @class */ (function () {\r\n    function LoginScene() {\r\n        this.createForm();\r\n    }\r\n    LoginScene.prototype.createForm = function () {\r\n        var _this = this;\r\n        this.formContainer = document.createElement(\"div\");\r\n        this.formContainer.className = \"form-container\";\r\n        this.loginPage = document.createElement(\"div\");\r\n        this.loginPage.className = \"login-page\";\r\n        this.form = document.createElement(\"div\");\r\n        this.form.className = \"form\";\r\n        this.loginForm = document.createElement(\"form\");\r\n        this.input = document.createElement(\"input\");\r\n        this.input.setAttribute(\"type\", \"text\");\r\n        this.input.placeholder = \"username\";\r\n        this.input.id = \"your-name\";\r\n        this.input.focus();\r\n        this.button = document.createElement(\"button\");\r\n        this.button.innerText = \"Join game\";\r\n        this.button.addEventListener(\"click\", function (e) { return _this.createPlayer(e); });\r\n        this.loginForm.appendChild(this.input);\r\n        this.loginForm.appendChild(this.button);\r\n        this.loginPage.appendChild(this.form);\r\n        this.form.appendChild(this.loginForm);\r\n        this.formContainer.appendChild(this.loginPage);\r\n        document.body.appendChild(this.formContainer);\r\n    };\r\n    LoginScene.prototype.createPlayer = function (e) {\r\n        e.preventDefault();\r\n        this.toggleLogin();\r\n        var name = this.input.value;\r\n        window.socket.emit(events_model_1.GameEvent.authentication, { name: name }, {\r\n            x: window.innerWidth,\r\n            y: window.innerHeight,\r\n        });\r\n    };\r\n    LoginScene.prototype.toggleLogin = function () {\r\n        this.formContainer.classList.toggle(\"visible\");\r\n    };\r\n    return LoginScene;\r\n}());\r\nexports.LoginScene = LoginScene;\r\n\n\n//# sourceURL=webpack:///./src/client/scenes/login.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar phaser_engine_class_1 = __webpack_require__(/*! ./client/engine/phaser-engine.class */ \"./src/client/engine/phaser-engine.class.ts\");\r\nnew phaser_engine_class_1.PhaserSpaceGame();\r\n\n\n//# sourceURL=webpack:///./src/index.ts?");

/***/ }),

/***/ "./src/shared/events.model.ts":
/*!************************************!*\
  !*** ./src/shared/events.model.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar GameEvent = /** @class */ (function () {\r\n    function GameEvent() {\r\n    }\r\n    GameEvent.authentication = \"authentication:successful\";\r\n    GameEvent.drop = \"drop\";\r\n    return GameEvent;\r\n}());\r\nexports.GameEvent = GameEvent;\r\nvar CometEvent = /** @class */ (function () {\r\n    function CometEvent() {\r\n    }\r\n    CometEvent.create = \"comet:create\";\r\n    CometEvent.destroy = \"comet:destroy\";\r\n    CometEvent.hit = \"comet:hit\";\r\n    CometEvent.coordinates = \"comet:coordinates\";\r\n    return CometEvent;\r\n}());\r\nexports.CometEvent = CometEvent;\r\nvar ServerEvent = /** @class */ (function () {\r\n    function ServerEvent() {\r\n    }\r\n    ServerEvent.connected = \"connection\";\r\n    ServerEvent.disconnected = \"disconnect\";\r\n    return ServerEvent;\r\n}());\r\nexports.ServerEvent = ServerEvent;\r\nvar PlayerEvent = /** @class */ (function () {\r\n    function PlayerEvent() {\r\n    }\r\n    PlayerEvent.joined = \"player:joined\";\r\n    PlayerEvent.protagonist = \"player:protagonist\";\r\n    PlayerEvent.players = \"actors:collection\";\r\n    PlayerEvent.quit = \"player:left\";\r\n    PlayerEvent.pickup = \"player:pickup\";\r\n    PlayerEvent.hit = \"player:hit\";\r\n    PlayerEvent.coordinates = \"player:coordinates\";\r\n    return PlayerEvent;\r\n}());\r\nexports.PlayerEvent = PlayerEvent;\r\n\n\n//# sourceURL=webpack:///./src/shared/events.model.ts?");

/***/ })

/******/ });