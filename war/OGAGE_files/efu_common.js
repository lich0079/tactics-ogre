$(function() {
    //��� �˻� �κ�
    $(".gnbSearchLayer ul li").bind("mouseover", function(event) {
        $(".gnbSearchLayer ul li").removeClass("searchListOver");
        $(this).addClass("searchListOver");
    })
    $(".gnbSearchLayer").bind("mouseout", function(event) {
        $(".gnbSearchLayer ul li").removeClass("searchListOver");
    })

    // gnb �κ�
    $(".efu_gnbTheme01 li a")
	.bind("mouseover", function(event) {
	    $(".efu_gnbTheme01 li a img").attr("src", function() {
	        return $(this).attr("src").replace("_on", "_off");
	    });
	    $(this).find("img").attr("src", function() {
	        return $(this).attr("src").replace("_off", "_on");
	    })
	})
	.bind("mouseout", function(event) {
	    $(".efu_gnbTheme01 li a img").attr("src", function() {
	        return $(this).attr("src").replace("_on", "_off");
	    });
	});

    ///snb �κ�
	$(".efu_style ul.clearfix").find(">li a")
	.bind("mouseover", function() {
	    $(".efu_snbMainMenu ul.clearfix>li").find("a img").attr("src", function() {
	        return $(this).attr("src").replace("_on", "_off");
	    });
	    $(this).find("img").attr("src", function() {
	        return $(this).attr("src").replace("_off", "_on");
	    });
	    $(".efu_snbMainMenu ul.clearfix>li").removeClass("snbMainOver");
	    $(this).parents("li").addClass("snbMainOver");
	    $(".efu_snbSubMenu").hide();
	    $(this).find("+.efu_snbSubMenu").show();
	});


	$(".efu_theme a")
	.bind("mouseover", function() {
	    $(".efu_theme a img").attr("src", function() {
	        return $(this).attr("src").replace("_on", "_off");
	    });
	    $(this).find("img").attr("src", function() {
	        return $(this).attr("src").replace("_off", "_on");
	    });
	});
	$(".efu_theme a")
	.bind("mouseout", function() {
	    $(".efu_theme a img").attr("src", function() {
	        return $(this).attr("src").replace("_on", "_off");
	    });
	});


    // ALL CATEGORY �κ�
    $(".allCategoryBtn").bind("click", function(event) {
        $(".efu_allCategorysWarp").toggle()
    });

    //���̾� ����Ʈ �ڽ� �κ�
    $(".selectTypeA .selectTypeABtn").bind("click", function() {
        $(this).find("~.selectTypeCont").toggle();
    });

    $(".selectTypeB .selectTypeABtn").bind("click", function() {
        $(this).find("~.selectTypeCont").toggle();
    });

    $(".selectTypeCont li").bind("click", function() {
        $(this).parents(".selectTypeCont").hide();
    });

    // �̽�Ű���� �κ�
    $(".efu_issueK li p").bind("click", function(event) {
        $(".efu_issueK li").find("div").hide();
        $(this).find("+div").show();
    });

    //�ֽ�Ÿ�� �κ�
    $(".efu_hotStyle p").bind("click", function(event) {
        $(".efu_hotStyle p").removeClass("efu_rankOver");
        $(this).addClass("efu_rankOver");

        $(".efu_hotStyle li").find("div").hide();
        $(this).find("+div").show();
    });

    /*
    // ����Ʈ �귣�� �κ�
    $(".efu_bestBrandBtn .bestBrandOpenBtn").bind("click",function(){
    $(".efu_bestBrandOpen").show();
    $(this).hide();
    $(".efu_bestBrandBtn .bestBrandCloseBtn").show()
    });


	$(".efu_bestBrandBtn .bestBrandCloseBtn").bind("click",function(){
    $(".efu_bestBrandOpen").hide();
    $(this).hide();
    $(".efu_bestBrandBtn .bestBrandOpenBtn").show()
    });
    */
    
    //����Ʈ�귣�� ����
    $(".efu_bbLogos li").bind("mouseover", function(event) {
        $(".efu_bbLogos li").css("z-index", "0");
        $(".efu_bbLogos li").find(".efu_brandLayer").hide();
        $(".efu_bbLogos li").removeClass();
        $(this).css("z-index", "10000000");
        $(this).find(".efu_brandLayer").show();
        $(this).addClass("bestOver");
    });

    $(".efu_bbLogos li").bind("mouseout", function(event) {
        $(".efu_bbLogos li").css("z-index", "0");
        $(".efu_bbLogos li").find(".efu_brandLayer").hide();
        $(".efu_bbLogos li").removeClass();
    });

    $(".efu_brandLayerBtn").bind("click", function(event) {
        $(".efu_bbLogos li").find(".efu_brandLayer").hide();
    });
    //����Ʈ�귣�� ����

    // ���� tab �κ�
    $(".efu_contTap li").bind("mouseover", function(event) {
        var valueid = $(this).attr("id");
        var valuename = $(this).attr("name");

        if (valuename == "noAction") {
            return false;
        }

        //�귣�� ����Ʈ �κи� ���� �κ�
        $(this).parents(".efu_PL_itemMenu").find(".efu_contTapCont").hide();
        $(valueid).show();

        $(this).parents(".efu_PL_itemMenu").find(".efu_contTap li").removeClass("efu_tapOver");
        $(this).addClass("efu_tapOver");
        //�귣�� ����Ʈ �κи� ���� �κ�

        $(this).parents(".efu_contTap").find("~.efu_contTapCont").hide();
        $(valueid).show();

        $(this).parents(".efu_contTap").find("li").removeClass("efu_tapOver");
        $(this).addClass("efu_tapOver");

        $(this).parents(".efu_contTap").find("li img").attr("src", function() {
            return $(this).attr("src").replace("_on", "_off");
        });
        $(this).find("img").attr("src", function() {
            return $(this).attr("src").replace("_off", "_on");
        });

        $(this).parents(".efu_contTap").find("li img").attr("src", function() {
            return $(this).attr("mouseout");
        });
        $(this).find("img").attr("src", function() {
            return $(this).attr("mouseover");
        });
    });

    //����� over�� ����� ������ ������ �ڽ��� ���� ǥ��
    $(".proTypeContInOver")
	.bind("mouseover", function(event) {
	    $(this).find(".efu_proSomeCont").show();
	})
	.bind("mouseout", function(event) {
	    $(this).find(".efu_proSomeCont").hide();
	});

    //ī�װ� ���̾� �˾� ����
   // $(".efu_LayerPopBtn").bind("click", function(event) {
   //     $(".efu_LayerPop").hide();
   // });

    $('.efu_detailBanneer li').click(function() {
        $('.efu_detailBanneer li').removeClass('over');
        $(this).addClass('over');
    });

    // �����̵� �κ� �ּ�ó�� : ������ - �ϳ��ϳ� ��Ʈ�Ѽ����� �ٸ�
    //$(".efu_slideCont").scrollable(); 
});

// ���� �޴� ��ġ�� �κ� 0517 ���ĺ��� ���� ����
function snbOpenClose(obj) {
    var sdfasd = $("#efu_snb").css("width");
    var snbSubMenu_01w = $(obj).parent().find("~.efu_snbSubMenu01").width() + 5;
    var snbSubMenu_02w = $(obj).parent().find("~.efu_snbSubMenu02").width();
    var snbSubMenu_w = snbSubMenu_01w + snbSubMenu_02w + 22;
    var efu_snb_w = snbSubMenu_w + 88;

    if (sdfasd > "200px") {
        $(obj).attr("src", "http://img.halfclub.com/Images_Ogage/Web/common/V11/images/btn/snbOpen.gif");
        $("#efu_snb").css("width", "180px");
        $(obj).parent().parent(".efu_snbSubMenu").css("width", "95px");
        $(obj).parent().find("~.efu_snbSubMenu01").css("width", "");
        $(obj).parent().find("~.efu_snbSubMenu02").hide();
        $(obj).parent().find("span").show();
    } else if (sdfasd < "200px") {
        $("#efu_snb").css("width", efu_snb_w);
        $(obj).parent().parent(".efu_snbSubMenu").css("width", snbSubMenu_w);
        $(obj).parent().find("~.efu_snbSubMenu01").css("width", snbSubMenu_01w);
        $(obj).parent().find("~.efu_snbSubMenu02").css("width", snbSubMenu_02w);
        $(obj).attr("src", "http://img.halfclub.com/Images_Ogage/Web/common/V11/images/btn/snbClose.gif");
        $(obj).parent().find("~.fl").show();
        $(obj).parent().find("span").hide();
    };

    $(".efu_snbMainMenu ul.clearfix").find(">li a").bind("mouseover", function(event) {
        $(obj).attr("src", "http://img.halfclub.com/Images_Ogage/Web/common/V11/images/btn/snbOpen.gif");
        $("#efu_snb").css("width", "180px");
        $(obj).parent().parent(".efu_snbSubMenu").css("width", "95px");
        $(obj).parent().find("~.efu_snbSubMenu01").css("width", "");
        $(obj).parent().find("~.efu_snbSubMenu02").hide();
        $(obj).parent().find("span").show();
    });
};


function efu_styleCloset(obj) {
    $(".efu_styleCloset").find(".efu_contTapCont").hide();
    $(".efu_styleCloset").find(obj).show();
};

function efu_styleClosetList(obj) {
    $(obj).parents(".efu_styleClosetList").find("li").removeClass("efu_tapOver");
    $(obj).addClass("efu_tapOver");
    $(obj).parents(".efu_styleClosetList").find("li dd").hide();
    $(obj).find("dd").show();
};

function efu_mdPick(obj) {
    $(".efu_mdPick .proTypeContIn dt").removeClass("efu_mouseOver");
    $(obj).addClass("efu_mouseOver");
    $(".efu_mdPick .proTypeContIn dt").find("+dd").hide();
};

function menGroupingTab(obj) {
    $(".efu_menGroupingCont").hide();
    $(obj).show();
};

//sexyMain
function efu_sexyLevel(obj) {
    $(".efu_level .efu_contTapCont .efu_proSomeCont").hide();
    $(obj).find("+dd").show();
};

//sexySeason
function efu_sexySeasonOn(obj) {
    $(obj).find("+dd").show();
};
function efu_sexySeasonOff(obj) {
    $(obj).find("+dd").hide();
};

//sexySpotlight
function efu_sexySpotlight(obj) {
    $(".efu_spotlight .efu_proSomeCont").hide();
    $(obj).find("+dd").show();
};

//romanticMain
function efu_spotlight(obj) {
    $(".efu_spotlight .efu_proSomeCont").hide();
    $(obj).find("+dd").show();
};

function efu_Offlight(obj) {
    $(".efu_spotlight .efu_proSomeCont").hide();
};

//shoesMain
function efu_coordi(obj) {
    $(".efu_shoes .efu_coordi .proTypeContIn .efu_proSomeCont").hide();
    $(obj).find("+dd").show();
};
function efu_reviewTop(obj) {
    $(".efu_shoes .efu_reviewTop .proTypeContIn .efu_proSomeCont").hide();
    $(obj).find("+dd").show();
};
function efu_premium(obj) {
    $(".efu_shoes .efu_premiumCont .proTypeContIn .efu_proSomeCont").hide();
    $(obj).find("+dd").show();
};

function showHide(obj) {
    $("." + obj).toggle();
}
function mouseover(obj) {
    $("." + obj).show();
};
function mouseout(obj) {
    $("." + obj).hide();
};

function efu_proContOver(obj){
    $(obj).find(".efu_proSomeCont").show();
}

function efu_proContOut(obj){
    $(obj).find(".efu_proSomeCont").hide();
}


// ��ǰ����Ʈ �� ������ ����/������
function quickIconShow(obj) {
    document.getElementById(obj).style.display = "";
}
function quickIconHide(obj) {
    document.getElementById(obj).style.display = "none";
}