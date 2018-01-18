    function addOnWheel(elem, handler) {
      if (elem.addEventListener) {
        if ('onwheel' in document) {
          // IE9+, FF17+
          elem.addEventListener("wheel", handler);
        } else if ('onmousewheel' in document) {
          // устаревший вариант события
          elem.addEventListener("mousewheel", handler);
        } else {
          // 3.5 <= Firefox < 17, более старое событие DOMMouseScroll пропустим
          elem.addEventListener("MozMousePixelScroll", handler);
        }
      } else { // IE8-
        text.attachEvent("onmousewheel", handler);
      }
    }

    var scale = 1;
    el = document.getElementById('field');
    addOnWheel(el, function(e) {
      console.log('sdffsd');
      var delta = e.deltaY || e.detail || e.wheelDelta;
      // отмасштабируем при помощи CSS
      var step = 0.3;
      if (delta > 0) scale = 1-step;
      else scale = 1+step;

  

      offset = $('#field').offset();
      oTop = offset.top;
      oLeft = offset.left;
      if(scale>1) {k=step} else {k=-step;}
      newTop = oTop+(oTop-e.pageY)*k;
      newLeft = oLeft+(oLeft-e.pageX)*k
      $("#field").offset({'top':newTop,'left':newLeft});
      w = w*scale;
      h = h*scale;
      draw.size(w, h);
      
      // отменим прокрутку
      e.preventDefault();
    });