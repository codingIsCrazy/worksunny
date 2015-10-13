// JavaScript Document
function loadjscssfile(filename,filetype){
    if(filetype == "js"){
        var fileref = document.createElement('script');
        fileref.setAttribute("type","text/javascript");
        fileref.setAttribute("src",filename);
    }else if(filetype == "css"){
    
        var fileref = document.createElement('link');
        fileref.setAttribute("rel","stylesheet");
        fileref.setAttribute("type","text/css");
        fileref.setAttribute("href",filename);
    }
   if(typeof fileref != "undefined"){
        document.getElementsByTagName("head")[0].appendChild(fileref);
    }
    
}

function loadJsByPath(path,type){
	if(path == "" ){
		loadjscssfile("plugin/jquery/jquery-1.10.2.min.js","js");
		loadjscssfile("plugin/bootstrap/css/bootstrap.min.css","css");
		loadjscssfile("plugin/bootstrap/css/bootstrap-theme.min.css","css");
		loadjscssfile("plugin/bootstrap/js/bootstrap.js","js");
	}else{
		loadjscssfile(path + "plugin/jquery/jquery-1.10.2.min.js","js");
		loadjscssfile(path + "plugin/bootstrap/css/bootstrap.min.css","css");
		loadjscssfile(path + "plugin/bootstrap/css/bootstrap-theme.min.css","css");
		loadjscssfile(path + "plugin/bootstrap/js/bootstrap.js","js");
	}
}


