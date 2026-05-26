// Tab Load

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

// Wrapper Object --- It is a JS object with a special job, not a normal JS object.
