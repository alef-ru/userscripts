// ==UserScript==
// @name         Fix ShiftPaste in Confluence
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Remove Confluence's binding for cmd/ctrl+shift+v binding. After that on MacOS it works as "Paste and Mach Style" as in any other website
// @author       Alexander Efremov
// @match        https://confluence.thesoul.io/*
// @grant        unsafeWindow
// ==/UserScript==

function fix_shift_paste(){
  console.log("Trying to fix ShiftPaste ...");
  if (unsafeWindow.tinyMCE.editors[0].shortcuts.remove("meta+shift+v")){
	  console.log("You can use ShiftPaste now! 🥳");
  }
}

// Need to for tinyMCE to be initialized
setTimeout(fix_shift_paste, 5000);
