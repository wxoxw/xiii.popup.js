(function(window) {

  "use strict";

  var document = window.document,

    popup = function(target, text, width, fontSize, fontColor, backgroundColor) {

      typeof target === "string" && ( target = document.getElementById(target) );
      ( typeof fontSize === "undefined" || fontSize === null ) && ( fontSize = "16px" );
      ( typeof fontColor === "undefined" || fontColor === null ) && ( fontColor = "#000" );
      ( typeof backgroundColor === "undefined" || backgroundColor === null ) && ( backgroundColor = "#EEE" );

      var popupText = document.createElement("div"),

        mouseMoveListener = function(e) {

          popupText.style.left = e.pageX - popupText.clientWidth / 2 + "px";
          popupText.style.top = e.pageY - popupText.clientHeight - 10 + "px";

        };

      popupText.textContent = text;
      popupText.style.position = "absolute";
      popupText.style.width = width;
      popupText.style.padding = "1em";
      popupText.style.color = fontColor;
      popupText.style.fontSize = fontSize;
      popupText.style.fontWeight = "bold";
      popupText.style.lineHeight = "1.6";
      popupText.style.backgroundColor = backgroundColor;
      popupText.style.borderRadius = "10px";
      popupText.style.boxSizing = "border-box";
      popupText.style.boxShadow = "3px 3px 5px hsla(0, 0%, 50%, 0.5)";
      popupText.style.transform = "translateZ(0)";

      popupText.addEventListener("mouseout", function(e) {

        if ( e.relatedTarget !== target ) { document.body.removeChild(popupText); }

      }, false);

      popupText.addEventListener("mousemove", mouseMoveListener, false);

      target.addEventListener("mouseover", function(e) {

        target.addEventListener("mousemove", mouseMoveListener, false);

        document.body.appendChild(popupText);

        popupText.style.left = e.pageX - popupText.clientWidth / 2 + "px";
        popupText.style.top = e.pageY - popupText.clientHeight - 10 + "px";

      }, false);

      target.addEventListener("mouseout", function(e) {

        if ( e.relatedTarget !== popupText ) {

          target.removeEventListener("mousemove", mouseMoveListener, false);

          document.body.removeChild(popupText);

        }

      }, false);

    };

  window.XIII || ( window.XIII = {} );

  window.XIII.popup = popup;

})(window);