// 0. Tab Load

// 1. The browser engine (Blink written in C++) creates native objects
//    (DOMWindow, Document, Location).

// 2. The binding system (WebIDL / Blink bindings) uses V8 C++ APIs
//    to create a JavaScript wrapper object and attaches a reference
//    to the native C++ object.

// 3. The wrapper object is exposed in the global JS scope as "window",
//    allowing JavaScript to access browser features.

// 4. When JS accesses properties (e.g., window.location),
//    the wrapper intercepts the access and forwards it through the
//    binding layer to the native C++ implementation.

// Confusion :

// Wrapper Object --- It is a js object with a special job, not a normal JS object.It can store data and also has special behavior to forward property accesses to the native C++ object.

// Native Object --- It is a C++ object that implements the actual functionality of browser features. It is not directly accessible from JavaScript, but the wrapper object allows JS to interact with it.
