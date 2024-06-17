/**
 * @copyright codewithsadee 2023
 * @author Sadee <codewithsadee24@gmail.com>
 */

"use strict";

/**
 * *Light and dark mode
 *
 */

const /** {NodeElement} */ $themeBtn= document.querySelector("[data-theme-btn]");
const /** {NodeElement} */ $HTML= document.documentElement;
let isDark=window.matchMedia("(prefers-color-scheme:dark)").matches;

if(sessionStorage.getItem("theme")){
    $HTML.dataset.theme=sessionStorage.getItem("theme");
} else {
    $HTML.dataset.theme=isDark ? "dark" : "light";
    sessionStorage.setItem("theme", $HTML.dataset.theme);
}

const changeTheme= ()=>{
$HTML.dataset.theme=sessionStorage.getItem("theme")=="light"?"dark":
"light";
sessionStorage.setItem("theme", $HTML.dataset.theme);
}
$themeBtn.addEventListener("click", changeTheme);


/**
 * *TAB
 */

const /**{NodeList}*/ $tabBtn = document.querySelectorAll("[data-tab-btn]");
let /**{NodeElement}*/ [lastActiveTab]=document.querySelectorAll("[data-tab-content]");
let /** {NodeElement} */[lastActiveTabBtn]= $tabBtn;

$tabBtn.forEach(item=>{
    item.addEventListener("click", function (){
        
        lastActiveTab.classList.remove("active");
        lastActiveTabBtn.classList.remove("active");

        const /** {NodeElement}  */ $tabContent= 
        document.querySelector(`[data-tab-content="${item.dataset.tabBtn}"]`);
        $tabContent.classList.add("active");
        this.classList.add("active");

        lastActiveTab=$tabContent;
        lastActiveTabBtn=this;

    });
});

document.addEventListener("DOMContentLoaded", function() {
    var projectCard = document.getElementById("project-card");
    var iframeContainer = document.getElementById("iframe-container");
    var closeButton = document.getElementById("close-btn");

    projectCard.addEventListener("click", function(event) {
        event.preventDefault();  // Prevent the default action

        // Display the iframe container
        iframeContainer.style.display = "block";
    });

    closeButton.addEventListener("click", function() {
        // Hide the iframe container
        iframeContainer.style.display = "none";
    });

   
    document.querySelector('.back-button').addEventListener('click', function() {
        // Close the PDF viewer (assuming you're using PDF.js)
        let pdfViewer = document.getElementById('pdf-viewer');
        pdfViewer.innerHTML = '';
    
        // Go back in history
        window.history.back();
    });


});

function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }

  // Event listener for the toggle button
  document.querySelector('[data-theme-btn]').addEventListener('click', () => {
    let currentTheme = localStorage.getItem('theme') || 'dark';
    let newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    applyTheme(newTheme);
  });

  // Apply the saved theme or default to dark mode
  (function() {
    let savedTheme = localStorage.getItem('theme') || 'dark';
    applyTheme(savedTheme);
})();




