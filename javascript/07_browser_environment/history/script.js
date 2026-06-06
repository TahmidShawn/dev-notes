// go back one page
window.history.back();

// go forward one page
window.history.forward();

// go to specific history position
window.history.go(-1); // back
window.history.go(1); // forward
window.history.go(0); // reload current page

// number of pages in session history
window.history.length;

// replace current history entry (no new entry added)
window.history.replaceState({}, "", "/new-url");

// add new history entry (no reload)
window.history.pushState({}, "", "/new-url");
