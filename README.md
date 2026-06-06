```text
Web Development & Browser System
│
├── 1. JavaScript Language (Spec / Syntax)
│   ├── Variables & Scope
│   ├── Data Types
│   ├── Functions
│   ├── Objects & Prototypes
│   ├── Arrays
│   ├── Classes
│   ├── Modules (ESM)
│   ├── ES Features (let, const, arrow, etc.)
│   └── Error Handling
│
├── 2. JavaScript Runtime (Execution Model)
│   ├── JavaScript Engine (V8, SpiderMonkey, etc.)
│   │   ├── Parsing
│   │   ├── AST
│   │   ├── Compilation (JIT)
│   │   ├── Execution Context
│   │   ├── Call Stack
│   │   ├── Heap Memory
│   │   ├── Garbage Collection
│   │   └── Inline Caching / Optimization
│   │
│   ├── Event Loop System
│   │   ├── Call Stack
│   │   ├── Microtask Queue (Promises)
│   │   ├── Task Queue (macrotasks)
│   │   └── Scheduling Model
│   │
│   └── Runtime Environment Concept
│       ├── Browser Runtime
│       └── Node.js Runtime
│
├── 3. Browser APIs (WHAT JS CAN USE)
│   ├── DOM API (Core DOM access)
│   │   ├── document
│   │   ├── querySelector / querySelectorAll
│   │   ├── createElement
│   │   └── getElementById
│   │
│   ├── DOM Element API (Element Level)
│   │   ├── Properties
│   │   │   ├── id
│   │   │   ├── className
│   │   │   ├── classList (DOMTokenList)
│   │   │   ├── innerHTML / outerHTML
│   │   │   ├── innerText / textContent
│   │   │   ├── style (CSSStyleDeclaration)
│   │   │   ├── dataset
│   │   │   └── attributes
│   │   │
│   │   ├── Methods
│   │   │   ├── getAttribute / setAttribute / removeAttribute / hasAttribute
│   │   │   ├── append / prepend / before / after
│   │   │   ├── remove / replaceWith
│   │   │   ├── closest / matches
│   │   │   └── getBoundingClientRect
│   │   │
│   │   └── Traversal
│   │       ├── parentElement
│   │       ├── children
│   │       ├── firstElementChild
│   │       ├── lastElementChild
│   │       ├── nextElementSibling
│   │       └── previousElementSibling
│   │
│   ├── BOM API (Browser Object Model)
│   │   ├── window
│   │   ├── location
│   │   ├── history
│   │   ├── navigator
│   │   └── screen
│   │
│   ├── Timer API
│   │   ├── setTimeout
│   │   ├── setInterval
│   │   └── clearTimeout / clearInterval
│   │
│   ├── Fetch / Network API
│   │   ├── fetch
│   │   ├── Request / Response
│   │   └── Headers
│   │
│   ├── Storage API
│   │   ├── localStorage
│   │   ├── sessionStorage
│   │   └── cookies (via document.cookie)
│   │
│   ├── Event System (DOM Events)
│   │   ├── Event Object (base)
│   │   │   ├── type
│   │   │   ├── target / currentTarget
│   │   │   ├── bubbles
│   │   │   ├── cancelable
│   │   │   ├── preventDefault()
│   │   │   ├── stopPropagation()
│   │   │   └── stopImmediatePropagation()
│   │   │
│   │   ├── MouseEvent
│   │   │   ├── clientX / clientY
│   │   │   ├── pageX / pageY
│   │   │   ├── button / buttons
│   │   │   └── modifier keys (alt, ctrl, shift, meta)
│   │   │
│   │   ├── KeyboardEvent
│   │   │   ├── key
│   │   │   ├── code
│   │   │   ├── repeat
│   │   │   └── isComposing
│   │   │
│   │   ├── Input / Form Events
│   │   │   ├── inputType
│   │   │   ├── data
│   │   │   └── target.value
│   │   │
│   │   ├── UIEvent
│   │   │   ├── view
│   │   │   └── detail
│   │   │
│   │   ├── TouchEvent
│   │   │   ├── touches
│   │   │   ├── targetTouches
│   │   │   └── changedTouches
│   │   │
│   │   ├── DragEvent
│   │   │   ├── dataTransfer
│   │   │   ├── effectAllowed
│   │   │   └── dropEffect
│   │   │
│   │   └── ClipboardEvent
│   │       └── clipboardData
│   │
│   ├── Canvas API
│   ├── Geolocation API
│   ├── Web Workers API
│   └── File API (limited browser access)
│
├── 4. Browser Internals (HOW BROWSER WORKS)
│   ├── Browser Architecture (Multi-process model)
│   ├── Rendering Engine (Blink/WebKit/Gecko)
│   ├── HTML Parsing → DOM Tree
│   ├── CSS Parsing → CSSOM
│   ├── Render Tree Creation
│   ├── Layout (Reflow)
│   ├── Paint
│   ├── Compositing
│   ├── GPU Acceleration
│   ├── Networking Stack
│   └── Resource Loading (scripts, images, CSS)
│
├── 5. Node.js Runtime (Server-side JS)
│   ├── V8 Engine
│   ├── libuv
│   ├── Event Loop (Node version)
│   ├── File System (fs)
│   ├── Process API
│   ├── Streams
│   ├── Buffers
│   └── Networking (HTTP, TCP)
│
├── 6. Operating System Layer
│   ├── CPU Scheduling
│   ├── Memory Management (RAM)
│   ├── File System
│   ├── Network Stack
│   ├── Threads & Processes
│   └── System Calls
│
└── 7. Web Security Layer (VERY IMPORTANT OFTEN MISSED)
    ├── Same-Origin Policy
    ├── CORS
    ├── CSP (Content Security Policy)
    ├── HTTPS / TLS
    ├── Cookies & Sessions
    ├── XSS Prevention
    └── CSRF Protection
```