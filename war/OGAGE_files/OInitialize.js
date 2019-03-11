/**************************************************************************************************************************
* Global 변수
**************************************************************************************************************************/
document.domain = "ogage.co.kr";

var Global_Ogage_Site_URL = location.host == "shop.ogage.co.kr" ? "http://shop.ogage.co.kr" : "http://www.ogage.co.kr";
var SearchTextTime;

/*******************************************************************************************************************************
* 브라우저 체크
*******************************************************************************************************************************/
var isie = (navigator.userAgent.toLowerCase().indexOf('msie') != -1) ? true : false;
var isie6 = (navigator.userAgent.toLowerCase().indexOf('msie 6') != -1) ? true : false;
var isie7 = false;
var isie8 = false;
var isie9 = false;
if (navigator.userAgent.toLowerCase().indexOf('msie 7') != -1) {
    isie6 = false;
    isie7 = true;
}
if (navigator.userAgent.toLowerCase().indexOf('msie 8') != -1) {
    isie6 = false;
    isie8 = true;
}
if (navigator.userAgent.toLowerCase().indexOf('msie 9') != -1) {
    isie6 = false;
    isie8 = false;
    isie9 = true;
}
var isfirefox = (navigator.userAgent.toLowerCase().indexOf('firefox') != -1) ? true : false;
var isopera = (navigator.userAgent.toLowerCase().indexOf('opera') != -1) ? true : false;

/*******************************************************************************
* 쿠기 값 가져오기 / 2008-04-12
*******************************************************************************/
function getCookie(name) {
    var prefix = name + "=";
    var cookieStartIndex = document.cookie.indexOf(prefix);
    if (cookieStartIndex == -1)
        return (null);
    var cookieEndIndex = document.cookie.indexOf(";", cookieStartIndex + prefix.length);
    if (cookieEndIndex == -1)
        cookieEndIndex = document.cookie.length;
    return (unescape(document.cookie.substring(cookieStartIndex + prefix.length, cookieEndIndex)));
}

function getCookie2(name) {
    var prefix = name + "=";
    var cookieStartIndex = document.cookie.indexOf(prefix);
    if (cookieStartIndex == -1)
        return (null);
    var cookieEndIndex = document.cookie.indexOf("&", cookieStartIndex + prefix.length);
    if (cookieEndIndex == -1)
        cookieEndIndex = document.cookie.length;
    return (unescape(document.cookie.substring(cookieStartIndex + prefix.length, cookieEndIndex)));
}

function setCookie(name, value, expiredays) {
    var endDate = new Date();
    endDate.setDate(endDate.getDate() + expiredays);
    document.cookie = name + "=" + escape(value) + "; path=/; expires=" + endDate.toGMTString() + ";"
}

function Location_Redirect(URL) {
    location.href = Global_Ogage_Site_URL + URL;
}

function Location_Redirect_Login(URL) {
    if (getCookie("UserID") != "" && getCookie("UserID") != null) {
        location.href = Global_Ogage_Site_URL + URL;
    } else {
        OpenWinBox('/common/popup/login.asp', 750, 500);
    }
}
var IsPlusZone = false;

function Login_Utility() {
    var CouponCnt = getCookie2("CouponCnt");
    var UserMileage = getCookie2("UserMileage");
    var StyletButton = getCookie2("StyletButton");
    var mnm = getCookie2("mnm");


    if (getCookie2("Grade") == "1" || getCookie2("Grade") == "2" || getCookie2("Grade") == "3" || getCookie2("Grade") == "4") {
        document.getElementById("Grade").innerHTML = "VIP";
    } else {
        document.getElementById("Grade").innerHTML = "일반";
    }

    /*플러스존 On/Off 이미지 변환*/
    var pluszonegnb = document.getElementById("pluszonegnb");
    if (mnm != null) {
        if (mnm.indexOf("favorites_p") > -1 || mnm.indexOf("startpage_p") > -1 || mnm.indexOf("pluszone_p") > -1
		|| mnm.indexOf("favorites_m") > -1 || mnm.indexOf("startpage_m") > -1 || mnm.indexOf("pluszone_m") > -1
		|| mnm.indexOf("favorites") > -1 || mnm.indexOf("startpage") > -1 || mnm.indexOf("pluszone") > -1) {
            IsPlusZone = true;
            if (pluszonegnb) pluszonegnb.src = "http://img.halfclub.com/Images_Ogage/Web/common/V11/images/common/header/gnb_plusOn.gif";
            
        }
        else {
            if (pluszonegnb) pluszonegnb.src = "http://img.halfclub.com/Images_Ogage/Web/common/V11/images/common/header/gnb_plusOff.gif";
        }
    }
    else {
        if (pluszonegnb) pluszonegnb.src = "http://img.halfclub.com/Images_Ogage/Web/common/V11/images/common/header/gnb_plusOff.gif";
    }

    //NULL처리 : 박현종
    if (CouponCnt == null) { CouponCnt = ""; }
    if (UserMileage == null) { UserMileage = ""; }
    if (StyletButton == null) { StyletButton = ""; }
    
    document.getElementById("CouponCnt").innerHTML = CouponCnt == "" ? "0" : CouponCnt;
    document.getElementById("UserMileage").innerHTML = UserMileage == "" ? "0" : UserMileage;
    document.getElementById("StyletButton").innerHTML = StyletButton == "" ? "0" : StyletButton;


    if (getCookie2("UserID") == null) return false;

    if (getCookie("UserID") != "") {
        document.getElementById("LogIn").style.display = "none";
        document.getElementById("LogOut").style.display = "";
        document.getElementById("MemberJoin").style.display = "none";
    }

}

function GoMyPage() {
    if (getCookie("UserID") != "" && getCookie2("UserID") != null) {
        showLy('MyPageLayer');
    } else {
        OpenWinBox('http://www.ogage.co.kr/common/popup/login.asp', 750, 500);
    }
}

var IsTShotLoad = false;
function showLy(id) {
    if (id == "div_gnb_tshot" && !IsTShotLoad) {
        IsTShotLoad = true;
        document.getElementById("ifr_tshotgnb").src = "http://www.ogage.co.kr/Shop/TShot_Gnb.aspx";
    }

    var bx = document.getElementById(id);
    if (bx.style.display == 'block') {
        bx.style.display = 'none';
    }
    else {
        bx.style.display = 'block';
    }
}

function Init_GNB() {
    Login_Utility();
    //TodayProductList();

    //Event_ViewIcon();
    //Init_flashLayer();

    SearchTextAdd();

    SearchTextTime = setInterval("SearchTextAdd()", 3000);

    //InitLineBanner(); // 상단 띠배너

    // Ogage_EventGnb();
}

function Init_Wing() {
    var UserID = getCookie("UserID")
    if (UserID = "" || UserID == null) {
        document.getElementById("BeforeLogin").style.display = "";
        document.getElementById("WishWingBefore").style.display = "";
        document.getElementById("OrderWingBefore").style.display = "";
        document.getElementById("CartWingBefore").style.display = "";
    }
    else {
        document.getElementById("AfterLogin").style.display = "";
        document.getElementById("WishWingAfter").style.display = "";
        document.getElementById("OrderWingAfter").style.display = "";
        document.getElementById("CartWingAfter").style.display = "";

        if (getCookie("UserNm") == null) {
            document.getElementById("Wing_Name").innerHTML = "";
        } else {
            document.getElementById("Wing_Name").innerHTML = getCookie("UserID");
        }
    }

    TodayProductList();
}

function fn_Today() {
    var TodayListLayer = document.getElementById("TodayListLayer");

    if (TodayListLayer.style.display == "none") {
        TodayListLayer.style.display = "block";
    }
    else {
        TodayListLayer.style.display = "none"
    }

}

/*******************************************************************************
* 날개 베너, 오늘 본 상품 리스트
*******************************************************************************/
function TodayProductList() {
    //var Li = document.getElementById("Quick_Prd").getElementsByTagName("li");    
    var TodayPrdList = new Array();
    var isTodayPrdList = true;
    if (getCookie2("TodayPrdList") != null) {
        TodayPrdList = getCookie("TodayPrdList").split("^");
    } else {
        isTodayPrdList = false;
    }

    document.getElementById("Today_Count").innerHTML = "(" + TodayPrdList.length + ")";

    var HTML = "";
    for (i = 0; i < TodayPrdList.length; i++) {
        var Prd = TodayPrdList[i].split(":");
        HTML += "<li><ul><li><a href='http://www.ogage.co.kr/shop/detail.aspx?prdid=" + Prd[0] + "'><img src='http://img.halfclub.com/images_Ogage/Product/DefaultThumbnail/" + Prd[1] + "' width='50' height='50' alt='' /></a></li></ul></li>";
    }

    document.getElementById("TodayList").innerHTML = HTML;

    var current = 1;
    var size = $("#TodayList > li").size();
    if (size === 0) {
        current = 0;
    }
    var maxpage = Math.ceil(size / 3);
    //$(".efu_Page span").text(current + "/" + ((size / 3) + 1));
    $(".efu_Page span").text(current + "/" + maxpage);
    //1 (초기화)
    TodayProductListSet(current);

    $(function() {
        $(".efu_Page a").click(function(event) {
            //기본이벤트 취소
            event.preventDefault();

            //이전
            if ($(this).get(0) == $(".efu_Page a:first").get(0)) {
                if (current > 1) {
                    current -= 1;
                    TodayProductListSet(current);
                    $(".efu_Page span").text(current + "/" + maxpage);
                }
            }
            //다음
            else {
                if (current < maxpage) {
                    current += 1;
                    TodayProductListSet(current);
                    $(".efu_Page span").text(current + "/" + maxpage);
                }
            }
        });
    });
}
//페이징 셋팅(페이지가 4-5페이지 늘어나도 계산가능
function TodayProductListSet(page) {
    var pageSize = 3;
    $("#TodayList > li").each(function(index, item) {
        if ((index >= ((page * pageSize) - pageSize)) && (index < page * pageSize)) {
            $(this).show();
        }
        else {
            $(this).hide();
        }
    });
}


/*******************************************************************************
* Util File Binder
*******************************************************************************/
var __include_css = {
    items: new Array(),
    write: function(src) { document.write('<link rel="stylesheet" type="text/css" href="' + src + '" >'); },
    bind: function() {
        for (var i = 0; i < this.items.length; i++) {
            this.write(this.items[i]);
        }
    },
    add: function(src) {
        src = (src || "").toLowerCase();
        var itemstring = ("," + this.items.join(",") + ",").toLowerCase();
        var hasitem = (itemstring.indexOf(src) > -1);
        if (!hasitem) this.write(src);
    }
}

var __include_js = {
    items: new Array(),
    write: function(src) { document.write('<script type="text/javascript" src="' + src + '"></script>'); },
    bind: function() {
        for (var i = 0; i < this.items.length; i++) {
            this.write(this.items[i]);
        }
    }
}

function Gnb_Search() {
    var params = "";
    var Gnb_SearchKey = document.getElementById("Gnb_Search");
    var Search = Gnb_SearchKey.getAttribute("Search");

    if (Search.substring(0, 4) == "http") {
        location.href = Search;
    }
    else {
        if (Search != "") Gnb_SearchKey.value = Search;
        if (Gnb_SearchKey.value == "") return alertMsg(Gnb_SearchKey, "검색어를 입력하세요");

        if (PatternTest(Gnb_SearchKey.value) == true) {
            params = AddParam(params, "PrdNm", Gnb_SearchKey.value);
            //params = AddParam(params, "research", "N");
            //params = AddParam(params, "minPrice", 0);
            //params = AddParam(params, "maxPrice", 9999999);
            //params = AddParam(params, "Imgs", "small"); //big

            location.href = "/shop/Search.aspx?" + params;
        }
    }
}

function SearchTextAdd() {
    var WordList = document.getElementsByName("WordList");

    if (WordList.length != 0) {
        var CurrentIndex = Math.floor(Math.random() * WordList.length);
        var Gnb_Search = document.getElementById("Gnb_Search");
        Gnb_Search.value = WordList[CurrentIndex].Word;
        Gnb_Search.Search = WordList[CurrentIndex].value;
    }
}


//rvi 기본 포지션 지정.
rviTopPosition = 100;
quickAreaTopPosition = 0;

// rvi 관련 top위치 변경.
window.onscroll = function() {
    if (isie9 || isie8 || isfirefox || ((isie7 && document.compatMode == 'CSS1Compat') && !isie6 && !isopera)) {
        var rvi = document.getElementById('Div_Scroll');
        var rvi_swf = document.getElementById('110523');

        if (rvi == null) return;

        if (isie7) rvi.style.background = 'none';

        if (rvi) {
            var sct = (document.body.scrollTop) ? document.body.scrollTop : document.documentElement.scrollTop;

            if (sct <= rviTopPosition) {
                rvi.style.position = "absolute";
                rvi.style.top = quickAreaTopPosition + 'px';
                if (rvi_swf != null) {
                    rvi_swf.style.position = "absolute";
                    rvi_swf.style.top = (quickAreaTopPosition + 80) + 'px';
                }

            } else {
                rvi.style.position = "fixed";
                if (rvi_swf != null) {
                    rvi_swf.style.position = "fixed";
                }
            }
        }
    }
}


var __Gnb = {
    HeaderBind: function() {
        try {
            document.write(HeaderHTML);
        } catch (e) {
        }
        Init_GNB();
    },

    FooterBind: function() {
        //FooterHTML += "<div style=\"position:absolute; top:80px; left:50%; margin:0;z-index:99999;width:116px;margin-left:-600px;\" id=\"110523\"><div style=\"position:relative:left:0px;width:100%\"><script language=\"javascript\" type=\"text/javascript\">flashWrite('http://img.halfclub.com/images_Ogage/web/event/xx_201105/110526_promotion.swf', '116', '118', 'Ogage20110523831118154', '#ffffff', 'transparent');</script></div></div>";
        document.write(FooterHTML);

        if (IsShowTrendLayer() == true) {
            if (getCookie("HotTrendLayer") == "none" && document.getElementById('hbu_wing') != null) {
                document.getElementById('hbu_wing').style.display = "block";
            }
            else if (document.getElementById('HotTrendLayer') != null) {
                Wing_Open('HotTrendLayer');
            }

        }
        // __Gnb.PopUpBind();
    }
}

__include_js.items.push(Global_Ogage_Site_URL + "/Common/Js/Logger/pv.Logger.js");
__include_js.items.push(Global_Ogage_Site_URL + "/Common/Js/Common.js");

__include_js.items.push(Global_Ogage_Site_URL + "/Common/Js/Station/OFTR.js");
__include_js.items.push(Global_Ogage_Site_URL + "/Common/Js/Station/OHDR.js");
//__include_js.items.push("/Common/Js/Station/OFTR.js");
//__include_js.items.push("/Common/Js/Station/OHDR.js");  //임시테스트용
__include_js.bind();