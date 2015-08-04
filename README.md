# xiii.popup.js
指定したエレメントにマウスオーバーするとポップアップテキストが表示されるJavaScriptライブラリ

## Function

    XIII.popup(target:Element, text:String, width:String = null, fontSize:String = "16px", fontColor:String = "#000", backgroundColor:String = "#EEE"):void
    XIII.popup(targetElementId:String, text:String, width:String = null, fontSize:String = "16px", fontColor:String = "#000", backgroundColor:String = "#EEE"):void

使用例

```html
<script src="xiii.popup.compiled.js"></script>
<script>

  var rect = document.createElement("div");

  rect.setAttribute("id", "RECT");
  rect.style.position = "absolute";
  rect.style.width = "100px";
  rect.style.height = "100px";
  rect.style.left = "100px";
  rect.style.top = "100px";
  rect.style.backgroundColor = "#ccf";

  document.body.appendChild(rect);
  
  XIII.popup(rect, "TEXT");
  // XIII.popup("RECT", "TEXT", "20em", "11px", "#CCC", "#333");

</script>
```

## Browser
- Google Chrome
- FireFox
- Opera
- IE9+
