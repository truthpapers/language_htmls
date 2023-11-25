export function wordExplainPopup(e, dict) {
    const popupArrow = document.createElement("div")
    popupArrow.id = "popupArrow"
    const popupBox = document.createElement("div")
    popupBox.id = "popupBox"
     if (document.getElementById("popupBox")) {
        document.body.replaceChild(popupArrow, document.getElementById("popupArrow") )
        document.body.replaceChild(popupBox, document.getElementById("popupBox") )
    } else {
        document.body.appendChild(popupBox)
        document.body.appendChild(popupArrow)
    } 



    function getElementDocumentPosition(element) {
        const rect = element.getBoundingClientRect();

        // Get the current scroll position of the document
        const scrollX = window.scrollX || window.pageXOffset;
        const scrollY = window.scrollY || window.pageYOffset;

        // Calculate the position relative to the document
        const top = rect.top + scrollY;
        const left = rect.left + scrollX;

        return { top, left, width: rect.width, height: rect.height, right: rect.right + scrollX, bottom: rect.bottom + scrollY };
    }

    const speech = new SpeechSynthesisUtterance();
    speech.lang = "en-GB";
    speech.text = e.target.innerText;
    speechSynthesis.speak(speech);

    if (dict[e.target.innerText.trim().toLowerCase().replace(/[^a-zA-Z'’]+/g, '')]) {
        e.stopPropagation();
        popupBox.style.display = "block";
        popupArrow.style.display = "block";

        popupBox.innerHTML = `
          <h4 class="popup-heading"> ${e.target.innerText} </h4>
          <div class="popup-body" dir="rtl">${dict[e.target.innerText.trim().toLowerCase().replace(/[^a-zA-Z'’]+/g, '')] || "---"}</div>
      `;

        const rect = getElementDocumentPosition(e.currentTarget);
        const rectOfPopup = getElementDocumentPosition(popupBox);
        const middleOfWordCoord = rect.left + rect.width / 2;

        const popupLeftEdge = rectOfPopup.left;
        const popupRightEdge = rectOfPopup.right;
        const xOfLeftBorderOfPopup = middleOfWordCoord - rectOfPopup.width / 2 - 2;
        if (xOfLeftBorderOfPopup < 0) {
            popupArrow.style.left = middleOfWordCoord - 10 + "px";
            popupArrow.style.top = rect.bottom + 3 + "px";

            popupBox.style.top = rect.bottom + 8 + "px";
            popupBox.style.left = 0;
        } else if (popupRightEdge >= window.innerWidth) {
            popupArrow.style.left = middleOfWordCoord - 10 + "px";
            popupArrow.style.top = rect.bottom + 3 + "px";

            popupBox.style.top = rect.bottom + 8 + "px";
            popupBox.style.right = window.innerWidth;
        } else /* if (popupRightEdge < window.innerWidth) */ {
            popupArrow.style.left = middleOfWordCoord - 10 + "px";
            popupArrow.style.top = rect.bottom + 3 + "px";

            popupBox.style.left = middleOfWordCoord - rectOfPopup.width / 2 - 2 + "px";
            popupBox.style.top = rect.bottom + 8 + "px";
        }
    }

    popupBox.addEventListener("click", e => e.stopPropagation());
    document.addEventListener("click", e => {
        popupBox.remove()
        popupArrow.remove()
    });
}




