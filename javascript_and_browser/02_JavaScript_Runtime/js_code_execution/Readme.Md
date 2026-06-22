# JavaScript Execution Process

These notes explain how modern JavaScript engines execute code internally.

The goal is to understand what happens from the moment a JavaScript file is loaded until the code is executed, optimized, and eventually cleaned up from memory.

---

## 1. Source Code Input

The JavaScript engine receives a `.js` file.

Example:

```js
let x = 10;
console.log(x);
```

At this stage:

- The code is just plain text.
- Nothing has executed yet.
- No variables exist in memory yet.
- No machine code exists yet.

---

## 2. Parsing Phase (Syntax Understanding)

Goal:

Understand the structure of the code and verify that the syntax is valid.

### 2.1 Tokenization (Lexical Analysis)

The engine breaks source code into tokens.

Example:

```js
let x = 10;
```

Tokens:

```txt
let | x | = | 10 | ;
```

Examples of tokens:

- Keywords (`let`, `const`, `function`)
- Identifiers (`x`, `user`)
- Operators (`+`, `-`, `=`)
- Literals (`10`, `"hello"`)

If invalid syntax is found, parsing stops and a syntax error is thrown.

---

### 2.2 Syntax Analysis (AST Creation)

The tokens are converted into an Abstract Syntax Tree (AST).

Example:

```js
let x = 10;
```

Rough AST:

```txt
VariableDeclaration
 └─ Identifier(x)
 └─ Literal(10)
```

The AST represents the structure of the program.

The engine now understands:

- Variables
- Functions
- Expressions
- Statements

Important:

- No code executes here.
- No memory is allocated here.
- No machine code is generated here.

---

### 2.3 Scope Analysis

After the AST is built, the engine analyzes scopes.

Example:

```js
function outer() {
    let x = 10;

    function inner() {
        console.log(x);
    }
}
```

The engine determines:

- Which variables belong to which scope
- Which variables are local
- Which variables come from parent scopes
- Closure relationships

This information is needed later during execution.

Still:

- No code executes
- No values are assigned

---

## 3. Baseline Compilation (Bytecode Generation)

Goal:

Convert the AST into a format that the engine can execute efficiently.

The AST is compiled into bytecode.

Example flow:

```txt
Source Code
    ↓
AST
    ↓
Bytecode
```

Bytecode is:

- Lower level than JavaScript
- Engine specific
- Executable by the interpreter

Bytecode is NOT machine code.

Important:

- CPU cannot execute bytecode directly.
- Machine code does not exist yet.

---

### 3.1 Internal Mapping Creation

During compilation, the engine creates internal references used by bytecode.

Example:

```js
let count = 0;
```

The bytecode does not work directly with the variable name `"count"`.

Instead, the engine creates internal slots or indexes that can later be resolved through lexical environments.

Important:

- This is not memory allocation.
- This is compiler preparation.

---

## 4. Execution Context Creation

Goal:

Prepare runtime memory and scope information.

Before execution starts, the engine creates the Global Execution Context (GEC).

---

### 4.1 Global Execution Context (GEC)

The Global Execution Context contains:

- Lexical Environment
- Variable Environment
- `this` binding
- Scope references

This becomes the first execution context of the application.

---

### 4.2 Memory Allocation (Hoisting)

During context creation:

#### var

```js
var age;
```

Memory is allocated and initialized as:

```js
age = undefined;
```

---

#### let / const

```js
let age;
```

Memory is allocated but remains uninitialized.

This creates the Temporal Dead Zone (TDZ).

Accessing it before initialization throws an error.

---

#### Function Declarations

```js
function greet() {}
```

The entire function is placed into memory.

Functions are fully hoisted.

---

### 4.3 Global Object Setup

Depending on the environment:

Browser:

```js
window;
```

Node.js:

```js
global;
```

The Global Execution Context is linked with the global object.

---

## 5. Call Stack Initialization

After the Global Execution Context is created, it is pushed onto the Call Stack.

Example:

```txt
┌─────────────────────┐
│ Global EC           │
└─────────────────────┘
```

Now the engine is ready to start executing code.

---

## 6. Execution Phase (Interpreter Runs Bytecode)

Goal:

Actually run the program.

The interpreter starts executing bytecode instruction by instruction.

Example:

```js
let x = 10;
console.log(x);
```

Execution:

1. Assign `10` to `x`
2. Call `console.log`
3. Print value

Now the program is actually running.

---

### 6.1 Function Calls

When a function is called:

```js
function add(a, b) {
    return a + b;
}

add(2, 3);
```

The engine creates a Function Execution Context (FEC).

Call Stack:

```txt
┌─────────────────────┐
│ Add EC              │
├─────────────────────┤
│ Global EC           │
└─────────────────────┘
```

After completion:

```txt
┌─────────────────────┐
│ Global EC           │
└─────────────────────┘
```

---

### 6.2 Heap Memory Usage

Objects, arrays, and functions are stored on the Heap.

Example:

```js
const user = {
    name: "Tahmid",
};
```

The reference is stored in the execution context.

The actual object lives in Heap Memory.

---

## 7. Runtime Profiling

While the interpreter executes bytecode, the engine collects runtime information.

Examples:

- Function call frequency
- Variable types
- Loop behavior
- Branch behavior

Example:

```js
function add(a, b) {
    return a + b;
}
```

If the engine repeatedly sees:

```js
add(1, 2);
add(3, 4);
add(5, 6);
```

It learns:

```txt
a -> Number
b -> Number
```

This information is used for future optimizations.

---

## 8. Hot Code Detection

The engine identifies frequently executed code.

Example:

```js
for (let i = 0; i < 1000000; i++) {
    work();
}
```

If a function runs many times, it becomes "hot".

Hot code becomes a candidate for optimization.

Not every function is optimized.

Only code worth optimizing is selected.

---

## 9. Optimizing JIT Compilation

Goal:

Improve performance.

Hot code is recompiled by the JIT compiler.

The JIT compiler generates machine code.

Flow:

```txt
Bytecode
    ↓
JIT Compiler
    ↓
Machine Code
```

This machine code is CPU-specific binary.

Common optimizations:

- Function inlining
- Register allocation
- Removing unnecessary checks
- Type specialization

Important:

This is the first stage where real machine code is generated.

---

### 9.1 Machine Code Installation

After optimization, the engine updates its internal references.

Future executions may bypass the interpreter and directly use optimized machine code.

This makes execution significantly faster.

---

## 10. De-optimization

Goal:

Maintain correctness.

Optimized code is based on assumptions.

Example:

```js
function square(n) {
    return n * n;
}
```

The engine may assume:

```txt
n is always a number
```

Later:

```js
square("5");
```

The assumption becomes invalid.

The engine can:

```txt
Optimized Code
      ↓
Discard
      ↓
Bytecode
```

Execution safely falls back to the interpreter.

This process is called de-optimization.

---

## 11. Garbage Collection

Goal:

Free memory that is no longer needed.

JavaScript uses automatic memory management.

The engine periodically checks which objects are still reachable.

Example:

```js
let obj = {
    name: "Tahmid",
};

obj = null;
```

The original object can no longer be reached.

It becomes eligible for garbage collection.

Common techniques:

- Mark and Sweep
- Generational Collection

Garbage collection is handled automatically by the engine.

---

## Complete Flow

```txt
Source Code
   ↓
Tokenization
   ↓
AST Creation
   ↓
Scope Analysis
   ↓
Bytecode Generation
   ↓
Internal Mapping Creation
   ↓
Global Execution Context Creation
   ↓
Memory Allocation (Hoisting)
   ↓
Call Stack Initialization
   ↓
Interpreter Executes Bytecode
   ↓
Heap Memory Usage
   ↓
Runtime Profiling
   ↓
Hot Code Detection
   ↓
JIT Compilation
   ↓
Machine Code Installation
   ↓
De-optimization (if needed)
   ↓
Garbage Collection
```

---

## Important Points

- JavaScript is not purely interpreted.
- JavaScript is not fully compiled before execution.
- Parsing creates an AST.
- AST is compiled into bytecode.
- Bytecode is executed by an interpreter.
- Runtime profiling helps identify hot code.
- Hot code may be optimized into machine code by the JIT compiler.
- Machine code is generated during execution, not before.
- De-optimization allows JavaScript to remain dynamic.
- Garbage collection automatically frees unused memory.
