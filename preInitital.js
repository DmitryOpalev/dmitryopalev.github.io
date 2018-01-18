var src = "course";
	src += "/";

function include(filename, url) {
        var script = document.createElement('script');
        script.src = url+''+filename;
        document.getElementsByTagName('head')[0].appendChild(script);
    }


