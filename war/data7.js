(function(){
	if (typeof imgsdata == "undefined") {
		imgsdata = [];
	}else{
	}
	imgsdata = arr.reduce( function(coll,item){
		    coll.push( item );
		    return coll;
		}, imgsdata );


	imgsdata = shuffle(imgsdata);

	var oHead = document.getElementsByTagName('HEAD').item(0); 
	var myScript= document.createElement("script");
    myScript.type = "text/javascript";
    myScript.src="data8.js";
    oHead.appendChild( myScript); 


})();