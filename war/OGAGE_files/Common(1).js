var Global_Ogage_Site_URL = "";

try
{
    document.domain = "ogage.co.kr";
}
catch(e)
{}

function OpenClose(A, B) {
    document.getElementById(A).style.display = "none";
    document.getElementById(B).style.display = "";
}

function BrandOpenClose(Req) {
    if (Req == "open") {
        document.getElementById("bestBrandOpen").style.display = "";
        document.getElementById("BrandOpen").style.display = "none";
        document.getElementById("BrandClose").style.display = "";
    } else {
        document.getElementById("bestBrandOpen").style.display = "none";
        document.getElementById("BrandOpen").style.display = "";
        document.getElementById("BrandClose").style.display = "none";
    }

}


function showBx(id) {
    var bx = document.getElementById(id);
    var bx_display = bx.style.display; 	// 기존 display 값 저장
    var bxs = document.getElementsByTagName("div"); // 테그가 dd 인거 모두 배열 bxs에 저장


    // 배열 bxs 에 저장된거 돌면서 qna_a 만 찾기
    for (var i = 0; i < bxs.length; i++) {
        // class이름(=css 클래스명)이 qna_a 로 된것만  모두 안보이게 처리 (= bxs[i].style.display="none")
        if (bxs[i].className == "ban") { bxs[i].style.display = "none"; }
    } if (bx_display == 'block') {
        bx.style.display = 'none';
    } else {
        bx.style.display = 'block';
    }
}

/*******************************************************************************
* Util Pattern Test
*******************************************************************************/
function PatternTest(TestString)
{
	//var TagPattern1= "/<(.*)>.*<\/\1>|<.*>/"; // 태그 입력 방지

	var keyword_sp_char = "[]^%`#$&=|\\{}\"'";

	if(v3_CheckSpecialChar(TestString, keyword_sp_char) == false)
	{
		alert("특수문자(" + keyword_sp_char + ")를 입력하실 수 없습니다.");
		return false;
	}

	return true;
}

function v3_CheckSpecialChar(str, special_char)
{
	var flag = true;

	for(i = 0; i <= str.length;  i++)
	{
		ch = str.charAt(i);
		for(j = 0; j < special_char.length; j++)
		{
			if(ch == special_char.charAt(j))
			{
				flag = false;
				break;
			}
		}
		if(flag == false)
			break;
	}
	return flag;
}

function alertMsg(obj,msg)
{
	alert(msg);
	obj.select();
	obj.focus();
}

/*******************************************************************************/
function fn_AddreferrerUrl(url)
{
	var referrerUrl = escape(location.href);
	location.href = url + "?returl=" + referrerUrl;
}


/*******************************************************************************
* 파라미터 받기
*******************************************************************************/
function get_param(inum)
{
	var param = location.href;
	param = param.substring(param.lastIndexOf("/")+1, param.length);

	if (param.indexOf(inum+"=") == -1) {
		param = false;
	}else{
		param = param.split(inum+"=")[1];
		  if (param.indexOf("&") != -1) {
			 param = param.split("&")[0];
		  }else if (param.indexOf("%26") != -1){
			  param = param.split("%26")[0];
		  }
	}
	return param;
}

function Overseas_Deli_Icon_Load(Icon)
{
	var CheckQuery =  /B9S|CVT|EPD|HAB|I45|JD9|NXL|RUG|SHV|TBQ/;

	if(Icon != null && CheckQuery.test(Icon.BrdCD) == true) Icon.style.display = "inline";
}

function AddParam(params, key, value)
{
	if (params != "")
		params += "&";

	params += key + "=" +  value;

	return params;
}

/*******************************************************************************
* CheckBox 전체 체크 & 전체 취소
*******************************************************************************/
function setAllCheck(obj)
{
	var checkval;
	if(obj.checked==true)
		checkval = true;
	else
		checkval = false;
		
	var ChkList = document.getElementsByName(obj.value);
	
	for(c=0; c < ChkList.length; c++){
		ChkList[c].checked=checkval;
	}
}

function AllCheck(obj, checkval)
{
	var ChkList = document.getElementsByName(obj);
	
	for(c=0; c < ChkList.length; c++){
		ChkList[c].checked=checkval;
	}
}

/*******************************************************************************
* CheckBox 값 모아오기 (구분자 포함하여)
*******************************************************************************/
function getChkSeperate(Name)
{
	var Seper = "";
	var ChkList = document.getElementsByName(Name);

	for(i=0; i < ChkList.length; i++){
		if(ChkList[i].checked){
			Seper += ChkList[i].value  + ",";
		}
	}

	return Seper.substring(0, Seper.length-1);
}

/*******************************************************************************
* 팝업 관련
*******************************************************************************/
function OpenWinBox(url,Wid,Hei)
{
	cw=Wid;	//새창의 크기
	ch=Hei;
	sw=1024//=screen.availWidth;	//스크린의 크기
	sh=768//screen.availHeight;
	px=(sw-cw)/2;	//열 창의 포지션

	py=(sh-ch)/2;
	window.open(url,"",'left='+px+',top='+py+',width='+cw+',height='+ch+',toolbar=no,menubar=no,status=no,scrollbars=no,resizable=no');
}

function OpenWinBox2(url,Wid,Hei)
{
	cw=Wid;	//새창의 크기
	ch=Hei;
	sw=1024//=screen.availWidth;	//스크린의 크기
	sh=768//screen.availHeight;
	px=(sw-cw)/2;	//열 창의 포지션

	py=(sh-ch)/2;
	window.open(url,"",'left='+px+',top='+py+',width='+cw+',height='+ch+',toolbar=no,menubar=no,status=yes,scrollbars=no,resizable=no,location=1');
}

function OpenWinBox3(url) {
    window.open(url);
}



function openPopup(url, winW, winH, scroll, winName)
{
	var obj ;
	var setup = "width="+ winW +",height="+winH+",toolbar=no,location=no,status=no,menubar=no,top=10,left=50,scrollbars=" + scroll +",resizable=no";
	if (!winName) winName = "";
	try
	{
		obj = window.open(url, winName, setup);
		obj.focus();
	}
	catch (e)
	{
		alert("팝업을 허용해주세요.");
	}
}
/*******************************************************************************
* show Flash Object ; 1 (파일경로, 가로, 세로, 아이디, 배경색, 변수, 윈도우모드)
*******************************************************************************/
function showFlashObject(objID, objSource, objWidth, objHeight, objQuality, objWmode, objBgcolor){
	var pageUrl=self.window.location.href;
	//default value setting
	if (objID=="") objID="ShockwaveFlash1";
	if (objWidth=="") objWidth="0";
	if (objHeight=="") objHeight="0";
	if (objQuality=="") objQuality="high";

	document.writeln('<object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=10,0,0,0" width="'+objWidth+'" height="'+objHeight+'" id="'+objID+'" align="middle">');
	document.writeln('<param name="movie" value="'+objSource+'" />');
	document.writeln('<param name="allowScriptAccess" value="always" />');
	document.writeln('<param name="menu" value="false" />');
	document.writeln('<param name="quality" value="high" />');
	document.writeln('<param name="bgcolor" value="'+objBgcolor+'" />');
	document.writeln('<param name="wmode" value="'+objWmode+'" />');
	document.writeln('<embed src="'+objSource+'" allowScriptAccess="always" menu="false" quality="high" bgcolor="'+objBgcolor+'" wmode="'+objWmode+'" width="'+objWidth+'" height="'+objHeight+'" name="'+objID+'" id="'+objID+'" align="middle" type="application/x-shockwave-flash" pluginspage="http://www.macromedia.com/go/getflashplayer" />');
	document.writeln('</object>');
}

/**
* flash write
*/

function flashSet(s, w, h, d, bg, t, f, l) {

    var code = "";
    code = "<object type=\"application/x-shockwave-flash\" ";
    code += "classid=\"clsid:d27cdb6e-ae6d-11cf-96b8-444553540000\" ";
    code += "codebase=\"http://fpdownload.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=8,0,0,0\" ";
    code += "width=\"" + w + "\" height=\"" + h + "\" id=\"" + d + "\">";
    code += "<param name=\"movie\" value=\"" + s + "\" />";
    code += "<param name=\"quality\" value=\"high\" />";
    code += "<param name=\"wmode\" value=\"" + t + "\" />";
    code += "<param name=\"menu\" value=\"false\" />";
    code += "<param name=\"allowScriptAccess\" value=\"always\" />";
    code += "<param name=\"swliveconnect\" value=\"true\" />";
    code += "<param name='scale' value='" + f + "' />";
    code += "<param name='salign' value='" + l + "' />";
    code += "<embed src=\"" + s + "\" quality=\"high\" ";
    code += "wmode=\"" + t + "\" ";
    code += "menu=\"false\" width=\"" + w + "\" height=\"" + h + "\" ";
    code += "allowScriptAccess=\"always\" ";
    code += "type=\"application/x-shockwave-flash\" ";
    code += "pluginspage=\"http://www.macromedia.com/go/getflashplayer\"> ";
    code += "</embed>";
    code += "</object>";

    return code;
}
function flashWrite(s, w, h, d, bg, t, f, l) {
    document.write(flashSet(s, w, h, d, bg, t, f, l));
}


/*******************************************************************************
* 유효성 체크 로직 이하
*******************************************************************************/
var patterns = new Array();

patterns["num"]		= /^[0-9]+$/;
patterns["han"]		= /^[가-힁]+$/;
patterns["eng"]		= /^[a-zA-Z]+$/;
patterns["eng_num"]	= /^[0-9a-zA-Z]+$/;
patterns["email"]	= /^[_a-zA-Z0-9-]+@[\._a-zA-Z0-9-]+\.[a-zA-Z]+$/; 
patterns["url"]		= /^[\.a-zA-Z0-9-]+\.[a-zA-Z]+$/; 
patterns["img"]		= /.+(\.jpg|\.gif|\.bmp|\.png|\.jpeg)+$/gi;

/*******************************************************************************
* 숫자 체크
*******************************************************************************/
function isNum(str)
{
	if(str.match(patterns["num"]))	return true;
	else							return false;
}

function func_close(obj) {
	if (document.getElementById(obj) != null)
	{
		document.getElementById(obj).style.display = "none";
	}
}


function func_GnbItem(ch) {
    if (ch == 1) {       
        document.getElementById("GnbItemBtn_off").style.display = "block";
        document.getElementById("GnbItemBtn_on").style.display = "none";
        document.getElementById("GnbItemList").style.display = "none";
    }
    else if (ch == 2) {
        document.getElementById("GnbItemBtn_off").style.display = "none";
        document.getElementById("GnbItemBtn_on").style.display = "block";
        document.getElementById("GnbItemList").style.display = "block";
        if(document.getElementById("AllCateItem") != null) document.getElementById("AllCateItem").style.display = "none";
    }
    else if (ch == 3) {
        document.getElementById("GnbItemBtn_off").style.display = "block";
        document.getElementById("GnbItemBtn_on").style.display = "none";
        document.getElementById("GnbItemList").style.display = "none";
    }
}


function func_open() {
	if (document.getElementById("ogage_PopUp_ver")!= null)
	{
		document.getElementById("ogage_PopUp_ver").style.display = "block";
	}

}

function func_open2(obj) {
    if (document.getElementById(obj) != null) {
           document.getElementById(obj).style.display = "block";
    }

}

function fn_CouponDownLoadProduct(PrdCD)
{
	if(confirm("※ 주의사항\r\n   현재 선택한 상품에서만 5% 할인이 가능하며, \r\n   다른 상품 할인적용 및 쿠폰 다운로드는 불가합니다. \r\n   꼭 구입할 상품일 경우에만 다운로드 쿠폰을 눌러주세요!! \r\n\r\n    쿠폰을 다운 받으시겠습니까???"))
	{
		location.href = "http://reference.ogage.co.kr/Coupon/CouponDownLoadProduct.aspx?prdcd="+PrdCD;
	}
}

function Login_Require() {
	var obj = window.open("/Common/PopUp/Login.asp", "Login", "Top=340,Left=340,Width=750,height=500");
}

function Login_Require_NoMem() {
    var obj = window.open("/Common/PopUp/Login.asp?nomem=Y", "Login", "Top=340,Left=340,Width=750,height=500");
}

// 상품미리보기, 상품 확대보기 , 상품평/문의
function ViewDetailLayer(PrdId, ImageName, TargetId)
{
	if (isNaN(PrdId)) {
		return;
	}

	if (ImageName == "") {
		return;
	}

	if (document.getElementById(TargetId) == null) {
		return;
	}
	document.getElementById(TargetId).innerHTML = "";

	var ArrHtml = new Array();

	ArrHtml.push("<div id=\"efu_popContArea\">");
	ArrHtml.push("<div class=\"efu_popClose\" style=\"right:0px;\"><a href=\"#\" onclick=\"hide_layers(this,'efu_proPreviewLayer'); return false;\"><img src=\"http://img.halfclub.com/Images_Ogage/Web/common/V11/images/btn/btn_popClose.gif\" alt=\"닫기\" /></a></div>");
	ArrHtml.push("<div class=\"efu_preview\">");
	ArrHtml.push("<div class=\"efu_popdetailListTab\">");

	ArrHtml.push("<ul class=\"efu_popcontTap\" id=\"efu_popcontTap_" + PrdId + "\">");
	ArrHtml.push("<li id=\"#efu_popdetailListTab01\" class=\"efu_tapOver\">상품 상세정보</li>");
	//ArrHtml.push("<li id=\"#efu_popdetailListTab02\">상품 확대보기</li>");
	ArrHtml.push("<li id=\"#efu_popdetailListTab03\">상품평/문의 (총<span id=\"spn_prdtalkcnt_" + PrdId + "\"></span>건)</li>");
	ArrHtml.push("</ul>");

	ArrHtml.push("<div id=\"efu_popdetailListTab01\" class=\"efu_popcontTapCont\">");
	ArrHtml.push("<iframe name=\"frameProDetail\" id=\"frameProDetail\" src=\"/Shop/DetailLayer.aspx?PrdId=" + PrdId + "&Type=View\" width=\"708\" height=\"616\" frameborder=\"0\" scrolling=\"no\"></iframe>");
	ArrHtml.push("</div>");
	//ArrHtml.push("<div id=\"efu_popdetailListTab02\" class=\"efu_popcontTapCont\" style=\"display:none;\">");
	//ArrHtml.push("<iframe name=\"frameProExtend\" id=\"frameProExtend\" src=\"/Shop/ZoomDetail.aspx?PrdId=" + PrdId + "&ImageName=" + encodeURIComponent(ImageName) + "&Type=A\" width=\"708\" height=\"616\" frameborder=\"0\" scrolling=\"no\"></iframe>");
	//ArrHtml.push("</div>");
	ArrHtml.push("<div id=\"efu_popdetailListTab03\" class=\"efu_popcontTapCont\" style=\"display:none;\">");
	ArrHtml.push("<iframe name=\"frameProValu\" id=\"frameProValu\" src=\"/Shop/PrdTalkList.aspx?PrdId=" + PrdId + "&Type=B\" width=\"708\" height=\"616\" frameborder=\"0\" scrolling=\"no\"></iframe>");
	ArrHtml.push("</div>");

	ArrHtml.push("<input type=\"hidden\" id=\"hid_prdnm_" + PrdId + "\" value=\"\" />");

	ArrHtml.push("</div>"); // efu_popdetailListTab
	ArrHtml.push("</div>"); // efu_preview
	ArrHtml.push("</div>"); // efu_popClose
	ArrHtml.push("</div>"); // efu_popContArea

	document.getElementById(TargetId).innerHTML = ArrHtml.join('');

	var evBindString = "#efu_popcontTap_" + PrdId + " li";

	$(evBindString).bind("mouseover",function(event){
		var valueid = $(this).attr("id");

		$(this).parents(".efu_popdetailListTab").find(".efu_popcontTapCont").hide();
		$(this).parents(".efu_popdetailListTab").find(valueid).show();

		$(this).parents(".efu_popdetailListTab").find(".efu_popcontTap li").removeClass("efu_tapOver");
		$(this).addClass("efu_tapOver");
	});
}

// 위시리스트
function WishLayer(PrdId, TargetId)
{
	if (isNaN(PrdId)) {
		return;
	}

	if (document.getElementById(TargetId) == null) {
		return;
	}
	document.getElementById(TargetId).innerHTML = "";

	var ArrHtml = new Array();

	ArrHtml.push("<div id=\"efu_popContArea\">");
	ArrHtml.push("<div class=\"efu_popClose\"><a href=\"#\" onclick=\"hide_layers(this,'efu_proWishLayer'); return false;\"><img src=\"http://img.halfclub.com/Images_Ogage/Web/common/V11/images/btn/btn_popClose.gif\" alt=\"닫기\" /></a></div>");
	ArrHtml.push("<div id=\"efu_popCont\">");
	ArrHtml.push("<iframe name=\"frameWishList\" id=\"frameWishList\" src=\"/Shop/WishList.aspx?PrdId=" + PrdId + "\" width=\"431\" height=\"193\" frameborder=\"0\" scrolling=\"no\"></iframe>");
	ArrHtml.push("</div>");
	ArrHtml.push("</div>");

	document.getElementById(TargetId).innerHTML = ArrHtml.join('');
}

// 장바구니
function CartLayer(PrdId, TargetId)
{
	if (isNaN(PrdId)) {
		return;
	}

	if (document.getElementById(TargetId) == null) {
		return;
	}
	document.getElementById(TargetId).innerHTML = "";

	var ArrHtml = new Array();

	ArrHtml.push("<div id=\"efu_popContArea\">");
	ArrHtml.push("<div class=\"efu_popClose\"><a href=\"#\" onclick=\"hide_layers(this,'efu_proCartLayer'); return false;\"><img src=\"http://img.halfclub.com/Images_Ogage/Web/common/V11/images/btn/btn_popClose.gif\" alt=\"닫기\" /></a></div>");
	ArrHtml.push("<div id=\"efu_popCont\">");
	ArrHtml.push("<iframe name=\"frameCartList\" id=\"frameCartList\" src=\"/Shop/DetailLayer.aspx?PrdId=" + PrdId + "&Type=Cart\" width=\"566\" height=\"281\" frameborder=\"0\" scrolling=\"no\"></iframe>");
	ArrHtml.push("</div>");
	ArrHtml.push("</div>");

	document.getElementById(TargetId).innerHTML = ArrHtml.join('');
}

// 이미지 크게보기
function ZoomImgLayer(PrdId, ImageName, TargetId)
{
	if (isNaN(PrdId)) {
		return;
	}

	if (ImageName == "") {
		return;
	}

	if (document.getElementById(TargetId) == null) {
		return;
	}

	var ArrHtml = new Array();

	ArrHtml.push("<a href=\"#\" class=\"layerClose\" onclick=\"hide_layers(this,'efu_bigSizeLayer'); return false;\"><img src=\"http://img.halfclub.com/Images_Ogage/Web/common/V11/images/btn/btn_popClose.gif\" alt=\"닫기\" /></a>");
	ArrHtml.push("<iframe name=\"frameBigSize\" id=\"frameBigSize\" src=\"/Shop/ZoomDetail.aspx?PrdId=" + PrdId + "&ImageName=" + encodeURIComponent(ImageName) + "&Type=B\" width=\"390\" height=\"340\" frameborder=\"0\" scrolling=\"no\"></iframe>");

	document.getElementById(TargetId).innerHTML = ArrHtml.join('');
}

var objPosition = function(obj){
	var results={top:0,left:0};
	while (obj.offsetParent){
		results.top = results.top + obj.offsetTop;
		results.left = results.left + obj.offsetLeft;
		obj = obj.offsetParent;
	}
	return results;
};

function view_layers(obj, layer, prdid)
{
	$(".efu_proPreviewLayer").hide();
	$(".efu_proWishLayer").hide();
	$(".efu_proCartLayer").hide();
	$(".efu_bigSizeLayer").hide();

	var layer_pos = objPosition(document.getElementById("dvly_" + prdid));
	var layer_left = layer_pos.left;
	var sLyLeft = "";

	var curLy = "", posX = 0;
	if (layer == "efu_proPreviewLayer") {
		curLy = "#prdview_" + prdid;
		posX = (document.body.clientWidth / 2) - (764 / 2) - layer_left;
	}
	else if (layer == "efu_proWishLayer") {
		curLy = "#prdwish_" + prdid;
		posX = (document.body.clientWidth / 2) - (487 / 2) - layer_left;
	}
	else if (layer == "efu_proCartLayer")
	{
		curLy = "#prdcart_" + prdid;
		posX = (document.body.clientWidth / 2) - (622 / 2) - layer_left;
	}
	else {
		curLy = "#prdsize_" + prdid;
		posX = (document.body.clientWidth / 2) - (480 / 2) - layer_left;
	}
	sLyLeft = posX + "px";

	$(curLy).css("left", sLyLeft);
	$(".efu_ProList").find("li").css("z-index","8");
	$(obj).parents("li").css("z-index","10");

	$(obj).parents("li").find("."+layer).show();
}
function hide_layers(obj,layer){
	$(obj).parents("."+layer).hide();
}



//롤링 아이템 : 박현종
function rollingItems(maxLength, controlId, arrImage, clsName, index, arrImgTwo) {
    index = index + 1;
    if (index > maxLength) {
        index = 1
    }

    for (intLoop = 1; intLoop <= maxLength; intLoop++) {
        if (index == intLoop) {
            document.getElementById(controlId + "0" + intLoop).style.display = "block";
            //클래스 처리
            if (clsName != undefined && clsName != "") {
                document.getElementById("#" + controlId + "0" + intLoop).className = clsName;
            }
            //이미지 처리
            if (arrImage != undefined && arrImage != "") {
                document.getElementById(controlId + "Img" + "0" + intLoop).src = arrImage[intLoop - 1] + "_on.gif";
            }
            if (arrImgTwo != undefined && arrImgTwo != "") {
                document.getElementById(controlId + "Img" + "0" + intLoop).src = arrImgTwo[((intLoop - 1)*2)];
            }
        } else {
            document.getElementById(controlId + "0" + intLoop).style.display = "none";
            //클래스 처리
            if (clsName != undefined && clsName != "") {
                document.getElementById("#" + controlId + "0" + intLoop).className = "";
            }
            //이미지 처리
            if (arrImage != undefined && arrImage != "") {
                document.getElementById(controlId + "Img" + "0" + intLoop).src = arrImage[intLoop - 1] + "_off.gif";
            }
            if (arrImgTwo != undefined && arrImgTwo != "") {
                document.getElementById(controlId + "Img" + "0" + intLoop).src = arrImgTwo[(((intLoop - 1) * 2)+1)];
            }
        }
    }
    return index;
}



//제품 랜덤하게 보여주기 : 박현종
function RandomView(maxLength, controlId, clsName, arrImage, arrImgTwo) {
    var index = GetRandomIndex(maxLength);

    for (intLoop = 1; intLoop <= maxLength; intLoop++) {
        if (intLoop == index) {
            document.getElementById("#" + controlId + "0" + intLoop).className = clsName;
            document.getElementById(controlId + "0" + intLoop).style.display = "block";

            //이미지 처리
            if (arrImage != undefined && arrImage != "") {
                document.getElementById(controlId + "Img" + "0" + intLoop).src = arrImage[intLoop - 1] + "_on.gif";
            }
            if (arrImgTwo != undefined && arrImgTwo != "") {
                document.getElementById(controlId + "Img" + "0" + intLoop).src = arrImgTwo[(((intLoop - 1) * 2) + 1)];
            }
        } else {
            document.getElementById("#" + controlId + "0" + intLoop).className = "";
            document.getElementById(controlId + "0" + intLoop).style.display = "none";
            //이미지 처리
            if (arrImage != undefined && arrImage != "") {
                document.getElementById(controlId + "Img" + "0" + intLoop).src = arrImage[intLoop - 1] + "_off.gif";
            }
            if (arrImgTwo != undefined && arrImgTwo != "") {
                document.getElementById(controlId + "Img" + "0" + intLoop).src = arrImgTwo[(((intLoop - 1) * 2) + 1)];
            }
        }
    }
    return index;
}

//제품 랜덤하게 보여주기 : 박현종
function RandomViewPng(maxLength, controlId, clsName, arrImage, arrImgTwo) {
    var index = GetRandomIndex(maxLength);

    for (intLoop = 1; intLoop <= maxLength; intLoop++) {
        if (intLoop == index) {
            document.getElementById("#" + controlId + "0" + intLoop).className = clsName;
            document.getElementById(controlId + "0" + intLoop).style.display = "block";

            //이미지 처리
            if (arrImage != undefined && arrImage != "") {
                document.getElementById(controlId + "Img" + "0" + intLoop).src = arrImage[intLoop - 1] + "_on.png";
            }
            if (arrImgTwo != undefined && arrImgTwo != "") {
                document.getElementById(controlId + "Img" + "0" + intLoop).src = arrImgTwo[(((intLoop - 1) * 2) + 1)];
            }
        } else {
            document.getElementById("#" + controlId + "0" + intLoop).className = "";
            document.getElementById(controlId + "0" + intLoop).style.display = "none";
            //이미지 처리
            if (arrImage != undefined && arrImage != "") {
                document.getElementById(controlId + "Img" + "0" + intLoop).src = arrImage[intLoop - 1] + "_off.png";
            }
            if (arrImgTwo != undefined && arrImgTwo != "") {
                document.getElementById(controlId + "Img" + "0" + intLoop).src = arrImgTwo[(((intLoop - 1) * 2) + 1)];
            }
        }
    }
    return index;
}

//랜덤숫자를 리턴 : 박현종
function GetRandomIndex(len) {
    return (Number(Math.floor(Math.random() * len)) + 1);
}

//URL로 이동 : 박현종
function GoToURL(url) {
    window.location.href = url;
}


/*******************************************************************************
* 팝업 관련
*******************************************************************************/
function OpenWinBox(url, Wid, Hei) {
    cw = Wid; //새창의 크기
    ch = Hei;
    sw = 1024//=screen.availWidth;	//스크린의 크기
    sh = 768//screen.availHeight;
    px = (sw - cw) / 2; //열 창의 포지션

    py = (sh - ch) / 2;
    window.open(url, "", 'left=' + px + ',top=' + py + ',width=' + cw + ',height=' + ch + ',toolbar=no,menubar=no,status=no,scrollbars=no,resizable=no');
}

/*
    라인배너 보이기/감추기
*/
function ShowLineBn(str) {
    
    if (str == 1) {
        document.getElementById("TopLineBanner_off").style.display = "";
        document.getElementById("TopLineBanner_on").style.display = "none";
    }
    else {
        document.getElementById("TopLineBanner_on").style.display = "";
        document.getElementById("TopLineBanner_off").style.display = "none";
    }
}

function TodaySpecialPrice(Buil_ID, ID, LinkUrl, Desc) {
    var obj = window.open(LinkUrl, ID, Desc);
}

/*
    메인 팝업 띄우기
*/

function Pop_On(Buil_ID, ID, LinkUrl, Desc) {
    var Day, Hour, Min;
    var isVeiw = false;

    day = new Date();

    Day = day.getDay();
    Hour = day.getHours();
    Min = day.getMinutes();    

    if (Buil_ID == "1182") { // 주말특가 팝업인 경우
        if (Day == 0  || (Day == 6 && Hour > 10) || (Day == 1 && Hour < 9)) {
            isVeiw = true;
        }
    }
    else if (Buil_ID == "1183") { // 일일 특가 팝업인 경우
        if (Day > 1 && Day < 6 || (Day ==6 && Hour <10) || (Day ==1 && Hour > 8)) {
            isVeiw = true;
        }
    }

    if (getCookie("mnm") == 'googlebn' || getCookie("mnm") == 'googlebn1' || getCookie("mnm") == 'googlekw' || getCookie("mnm") == 'googlekw1') {
        isVeiw = false;
    }

    if (getCookie(ID) != 'done' && isVeiw == true) {
        var obj = window.open(LinkUrl, ID, Desc);
    }
}

// 즐겨찾기
function HeaderFavorites(Current)
{
	var d = new Date();
	var yyyy = String(d.getFullYear());
	var MM = String(d.getMonth()+1);
	var dd = String(d.getDate());
	var hh = String(d.getHours());
	var mm = String(d.getMinutes());
	var ss = String(d.getSeconds());

	var m_URL_StartPage = "http://www.ogage.co.kr/Partner/favorites.asp?sid=87202823402342345&rid="+yyyy+ MM + dd+ hh+ ss;
	window.external.AddFavorite(m_URL_StartPage ,"누구나 즐기는 패션트랜드몰 오가게");
}

//윙배너 클릭시 호출
function Wing_Open(obj) { 
    if(obj == "FavBrandLayer"){
        document.getElementById(obj).innerHTML = "<div class=\"efu_popClose\"><a onclick=\"showHide('efu_brandLayerpop');\"><img src='http://img.halfclub.com/Images_Ogage/Web/common/V11/images/btn/btn_close4.gif' alt='' /></a></div><iframe src='/payment/popBox/popBrand.aspx' width='210' height='280' scrolling='no' frameborder='0' allowtransparency='true' name='ifrmBrand' id='ifrmBrand'></iframe>";
        showHide('efu_brandLayerpop');
    }
    else if (obj == "HotTrendLayer") {
        document.getElementById(obj).innerHTML = "<iframe src='/Payment/PopBox/popPrdList.aspx' width='244' height='312' scrolling='no' frameborder='0' allowtransparency='true' name='ifrmBrand' id='Iframe1'></iframe>";
        func_open2('HotTrendLayer');
        func_close('hbu_wing');
        setCookie("HotTrendLayer", "block", 1);
        
    }
}

function IsShowTrendLayer() {
    var re = new RegExp(getCookie("mnm"));
    return re.test("naversch,naver_ts,naver,navertheme,sba_01,sba_02,sba_03,sba_04,daum_sch,daumsch,daummall,daumhowthu,daumhowth1,daumhowth2,daumhowman,daumhowmn1,daumhowmn2,daumhow,daumhow1,daumhow2,daumhow3,daumqu,daum,daumevent,yahoosch,mall_text,yahootsch,yahoo,yahoo_bb,yahooth,yahooth2,yahooth3,natebsch,nate_mall,natesch,nate");
}




