// 1. before npm run dev
// → only files exist, nothing runs

// 2. npm run dev
// → vite starts a dev server

// 3. browser requests app
// → vite builds js bundle

// important:
// jsx is converted to js here (not sent as jsx)
// normal js (useState, functions, etc.) stays same
// everything is bundled together into one js file

// 4. browser receives js bundle (not jsx)
// → includes:
//    - transformed jsx
//    - normal js code (useState, functions, etc.)

// 5. js runs in browser (v8 runtime starts)
// → executes code line by line

// 6. react runs like normal js functions
// → useState(), render(), jsx() all executed by js engine

// 7. react creates element objects
// → jsx() returns react element objects
// → react builds fiber tree internally

// 8. react uses dom APIs
// → document.createElement()
// → appendChild()
// → updates real dom

// 9. browser renders ui on screen
// → pixels painted on screen

//------------------------------------------------------
// re-render cycle


// 10. state update happens (setState / setData)
// → react does not update ui immediately
// → it schedules update

// 11. re-render (render phase starts)
// → component function runs again
// → new jsx executed again
// → new react element tree created

// 12. reconciliation
// → react compares:
//    previous fiber tree vs new fiber tree
// → finds what changed

// 13. commit phase
// → react applies only changes to real dom
// → minimal dom updates happen

// 14. browser re-paints ui
// → updated screen appears
