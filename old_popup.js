
function wordExplainPopup(wordEvent) {
    wordEvent.stopPropagation();

    const speech = new SpeechSynthesisUtterance();
    speech.text = wordEvent.target.innerText;
    speechSynthesis.speak(speech);

    popupBox.style.display = "block";
    popupArrow.style.display = "block";

    popupBox.innerHTML = `
          <h4 class="popup-heading"> ${wordEvent.target.innerText} </h4>
          <div class="popup-body">${explainWordObj[wordEvent.target.innerText.trim()] || "---"}</div>
      `;

    const rect = wordEvent.currentTarget.getBoundingClientRect();
    const rectOfPopup = popupBox.getBoundingClientRect();
    const middleOfWordCoord = rect.left + rect.width / 2;

    const popupLeftEdge = rectOfPopup.left;
    const popupRightEdge = rectOfPopup.right;
    const xOfLeftBorderOfPopup = middleOfWordCoord - rectOfPopup.width / 2 - 2;
    if (xOfLeftBorderOfPopup < 0) {
      popupArrow.style.left = middleOfWordCoord - 13 + "px";
      popupArrow.style.top = rect.bottom + 3 + "px";

      popupBox.style.top = rect.bottom + 8 + "px";
      popupBox.style.left = 0;
    } else if (popupRightEdge > window.innerWidth) {
      popupArrow.style.left = middleOfWordCoord - 13 + "px";
      popupArrow.style.top = rect.bottom + 3 + "px";

      popupBox.style.top = rect.bottom + 8 + "px";
      popupBox.style.right = window.innerWidth;
    } else {
      popupArrow.style.left = middleOfWordCoord - 13 + "px";
      popupArrow.style.top = rect.bottom + 3 + "px";

      popupBox.style.left =
        middleOfWordCoord - rectOfPopup.width / 2 - 2 + "px";
      popupBox.style.top = rect.bottom + 8 + "px";
    }
    document.addEventListener("click", closePopupOnClickOutside);
  }
