document.domain = "ogage.co.kr";

	function popup_center(url,winnm,cw,ch) {

		//스크린의 크기
		sw=screen.availWidth;
		sh=screen.availHeight;

		//열 창의 포지션
		px=(sw-cw)/2;
		py=(sh-ch)/2;

		//창을 여는부분
		obj=window.open(url,winnm,'left='+px+',top='+py+',width='+cw+',height='+ch+',toolbar=no,menubar=no,status=no,scrollbars=no,resizable=no');
		obj.focus();	//팝업창에 포커스주기

	}

	function popup_center_scroll(url,winnm,cw,ch,scroll) {

		//스크린의 크기
		sw=screen.availWidth;
		sh=screen.availHeight;

		//열 창의 포지션
		px=(sw-cw)/2;
		py=(sh-ch)/2;

		//창을 여는부분
		obj=window.open(url,winnm,'left='+px+',top='+py+',width='+cw+',height='+ch+',toolbar=no,menubar=no,status=no,scrollbars='+scroll+',resizable=no');
		obj.focus();	//팝업창에 포커스주기

	}


	function popup_top(url,winnm,cw,ch) {

		//스크린의 크기
		sw=screen.availWidth;
		sh=screen.availHeight;

		//창을 여는부분
		obj=window.open(url,winnm,'left=10,top=10,width='+cw+',height='+ch+',toolbar=no,menubar=no,status=no,scrollbars=no,resizable=no');
		obj.focus();	//팝업창에 포커스주기

	}

	function popup_top_resize(url,winnm,cw,ch) {

		//스크린의 크기
		sw=screen.availWidth;
		sh=screen.availHeight;

		//창을 여는부분
		obj=window.open(url,winnm,'left=10,top=10,width='+cw+',height='+ch+',toolbar=no,menubar=no,status=no,scrollbars=yes,resizable=no');
		obj.focus();	//팝업창에 포커스주기

	}

function Gogogo(GoUrl){
     if(GoUrl != "")
     {

		try
		{
			opener.location.href = GoUrl;       //부모창 바뀌는곳
			PageClose();
			return;
		}
		catch(e)
		{
		}

		try
		{
			parent.location.href = GoUrl;       //IFRAME 팝업일때
			PageClose();
			return;
		}
		catch(e)
		{}		


     }

	PageClose();
}


//창닫기			
function PageClose()
{
	try
	{
		parent.document.getElementById("DivPopup_" + varPIdx).style.display = "none";
		return;
	}
	catch(e)
	{}	

	try
	{
		self.close();
		return;
	}
	catch(e)
	{}
}

function PopupClose(PopFrameId, DayClose)
{
	//alert(PopFrameId);
	self.close();
	if(DayClose) SetCookie( PopFrameId, "done", 1 );
}

function popup_center_resize(url,winnm,cw,ch) {

		//스크린의 크기
		sw=screen.availWidth;
		sh=screen.availHeight;

		//열 창의 포지션
		px=(sw-cw)/2;
		py=(sh-ch)/2;

		//창을 여는부분
		obj=window.open(url,winnm,'left='+px+',top='+py+',width='+cw+',height='+ch+',toolbar=no,menubar=no,status=no,scrollbars=yes,resizable=yes');
		obj.focus();	//팝업창에 포커스주기

	}

	function onlynum()
	{
		if( (( (event.keyCode != 13) && (event.keyCode < 48) ) || (event.keyCode > 57)) )
			event.returnValue = false;
	}

	//아이디 숫자만 허용되는 자바스크립트
	function IsNumeric(checkStr)
	{
		var checkOK = "0123456789";
		for (i = 0;  i < checkStr.length;  i++)
		{
			ch = checkStr.charAt(i);
			for (j = 0;  j < checkOK.length;  j++)
				if (ch == checkOK.charAt(j))
					break;
			if (j == checkOK.length)
			{
			  return (false);
			  break;
			}
		}
		return (true);
	}

	function Trim ( strValue ) {
  		strValue = lTrim(rTrim(strValue));
  		return strValue;
	}

	function rTrim ( str ) {
		str = str + "";
		var len = str.length;

		for(var i = (len - 1); (str.charAt(i) == ' '); i--);
		str = str.substring(0, i + 1);

		return str;
	}

	function lTrim ( str ) {
		var len = str.length;
		var i = 0;

		for(i = 0; str.charAt(i) == ' '; i++);
		str = str.substring(i, len);

		return str;
	}

	function strlen(str)
	{
		var nbytes = 0;
		for(i=0;i<str.length;i++)
		{
			var ch = str.charAt(i);
			if(escape(ch).length > 4)
			{
				nbytes += 2;
			}
			else if(ch == '\n')
			{
				if(str.charAt(i-1) != '\r')
				{
					nbytes += 1;
				}
			}
			else if(ch == '<' || ch == '>')
			{
				nbytes += 4;
			}
			else
			{
				nbytes += 1;
			}
		}
		return nbytes;
	}


	// 쿠키값 저장
	function SetCookie(name,value,expireday){
		var pop_today = new Date();
		//alert(pop_today.toGMTString());
		pop_today.setDate(pop_today.getDate() + expireday);
		//alert(pop_today.toGMTString());

		if(expireday != "")
			document.cookie = name + "=" + escape(value) + "; path=/; expires=" + pop_today.toGMTString() + ";";
		else
			document.cookie = name + "=" + escape(value) + "; path=/;";
	}

	// 쿠키값 가져오기
	function getCookie(name)
	{
		var nameOfCookie = name + "=";
		var x = 0;
		//alert(document.cookie);
		while (x <= document.cookie.length)
		{
			var y = (x+nameOfCookie.length);
			//alert(x +","+ y);alert(document.cookie.substring( x, y ));
			if(document.cookie.substring(x,y) == nameOfCookie){
				if((endOfCookie=document.cookie.indexOf( ";", y )) == -1){
					//alert(endOfCookie);
					endOfCookie = document.cookie.length;
				}
				//alert(unescape( document.cookie.substring( y, endOfCookie ) ));
				return unescape(document.cookie.substring(y,endOfCookie));
			}
			x = document.cookie.indexOf(" ",x) + 1;
			if(x == 0)
				break;
		}
		return "";
	}

function HMRolling()
{
	this.version = "1.0.6.0227";
	this.name = "HMRolling";			// 객체생성시 생성된 객체의 인스턴트 명을 이용
	this.HeaderText = "";				// 테이블 시작태그	예) <table><tr>
	this.FooterText = "";				// 테이블 끝태그	예) </tr></table>

	this.item = new Array();			//외부에서 add함수로 들어오는 아이템을 담는 변수
	this.itemcount = 0;
	this.mitem = new Array();			//내부적으로 사용됨[itemdivision에 의하여 객수가 결정됨]
	this.mitemcount = 0;
	this.curmitemidx = 0;
	this.itemdivision = 5;				// 레이어 갯수

	this.AutoRepli = true;				// true면 빈자리를 채운다
	this.AutoRolling = true;			// true면 레이어 Rolling

	this.ContentType = "full";			//full : 보이는 부분전체가 롤링되는 경우, private:하나의 아이템씩 로링되는 경우

	this.currentspeed = 0;
	this.scrollspeed = 1000;			// 움직이는 속도, 1000 = 1초
	this.pausedelay = 1000;

	this.pausemouseover = false;		// true면 마우스를 갖다댈때 멈춘다
	this.stop = false;

	this.add = function()
	{
		var text = arguments[0];
		this.item[this.itemcount] = text;
		this.itemcount = this.itemcount + 1;
	}//add
	this.start = function()
	{
		//아이템이 없는경우
		if(this.itemcount == "")
		{
			return;
		}


		var curitemidx = 0;		//마스트 아이템을 등록함
		var contents = "";		//출력될 내용
		var lp; 				//최대마스트 아이템수 계산
		//full 전체가 롤링되는 경우
		if(this.ContentType == "full")
		{
			//레이어의 갯수 구하기
			if(this.itemcount % this.itemdivision == 0)
			{
				lp = parseInt(this.itemcount / this.itemdivision);
			}
			else
			{
				lp = parseInt(this.itemcount / this.itemdivision) + 1;
			}
			//레이어 적용하기
			for(i = 0 ; i < lp ; i++)
			{
				for(j = 0 ; j < this.itemdivision ; j ++)
				{

					if(curitemidx >= this.itemcount)
					{
						if (this.AutoRepli == false)
						{
							break;
						}
						else
						{
							curitemidx = 0;
						}
					}
					contents += this.item[curitemidx];
					curitemidx++;
				}
				this.mitem[i] = contents;
				contents = ""
				this.mitemcount = this.mitemcount + 1;
			}
		}
		//그외는 모두 하나의 아이템씩 롤링되는 경우로 처리됨
		else
		{
			curitemidx = 0;
			for(i = 0 ; i < this.itemcount ; i++)
			{
				for(j = 0 ; j < this.itemdivision ; j ++)
				{
					if((i+j) < this.itemcount)
					{
						contents += this.item[i+j];
					}
					else
					{
						contents += this.item[(i+j) % this.itemcount];
					}
				}
				this.mitem[i] = contents;
				contents = "";
				this.mitemcount = this.mitemcount + 1;
			}

		}
		this.display();
		this.currentspeed = this.scrollspeed;
		this.stop = true;
		setTimeout(this.name+'.rolling()',this.currentspeed);
		window.setTimeout(this.name+".stop = false", this.pausedelay);
	}//start
	this.display = function()
	{
		document.write('<div id="'+this.name+'" style="position:relative; overflow:hidden; " OnMouseOver="'+this.name+'.onmouseover(); " OnMouseOut="'+this.name+'.onmouseout(); ">');
		document.write(this.HeaderText);
		document.write(this.mitem[0]);
		document.write(this.FooterText);
		document.write('</div>');
	}//display
	this.rolling = function()
	{
		if(this.AutoRolling == false) return;

		if (this.stop == false)this.next();
		window.setTimeout(this.name+".rolling()",this.scrollspeed);
	}//rolling
	this.next = function()
	{
		if(this.curmitemidx >= this.mitemcount - 1)
		{
			this.curmitemidx = 0;
		}
		else
		{
			this.curmitemidx++;
		}
		var obj = document.getElementById(this.name);
		var contents = "";
		contents = this.HeaderText;
		contents += this.mitem[this.curmitemidx];
		contents += this.FooterText;
		obj.innerHTML = contents;

	}//next
	this.prev = function()
	{
		if((this.curmitemidx) <= 0)
		{
			this.curmitemidx = this.mitemcount - 1;
		}
		else
		{
			this.curmitemidx--;
		}
		var obj = document.getElementById(this.name);
		var contents = "";
		contents = this.HeaderText;
		contents += this.mitem[this.curmitemidx];
		contents += this.FooterText;
		obj.innerHTML = contents;
	}//prev
	this.unext = function ()
	{
		this.onmouseover();
		this.next();
		window.setTimeout(this.name+".onmouseout()",this.pausedelay);
	}//unext
	this.uprev = function ()
	{
		this.onmouseover();
		this.prev();
		window.setTimeout(this.name+".onmouseout()",this.pausedelay);
	}//uprev
	this.onmouseover = function()
	{
		if(this.pausemouseover) this.stop = true;
	}//onmouseover
	this.onmouseout = function()
	{
		if(this.pausemouseover) this.stop = false;
	}//onmouseout
}//HMScroll

function HMSrolling()
{
	// 수정가능한 변수
	this.name = "HMSrolling";
	this.lineHeight = 24;		// 줄간격(숫자가 클수록 멀리 떨어짐)
	this.showLines = 3;			// 한번에 보여줄 줄의 개수(화면엔 항상 여기서 지정한 수만큼의 줄만 보인다. (이값을 변경하면 아래에 있는 <div id='scr' style="width:500px; height:40px 에서 height 값을 적당히 변경해야 보임
	this.delayNum = 20;			// 스크롤 속도 : 1 ~ 1000 (1 이 제일 빠르고 1000 이 제일 느림)
	this.sleepCnt = 3;			// 스크롤이 멈춰있는시간 (단위 : 초) -> 많을수록 멈춰있는시간이 길어짐
	this.divName = "scr_";

	// 수정불가능한 변수
	this.resetSleepCnt = this.sleepCnt;
	this.isMove = true;			// 스크롤이 진행이 되는지여부 (true : 진행, false : 멈춤)
	this.aryText = new Array();	// 스크롤이 될 문장들이 담길 변수
	this.aryLen = 0;			// 스크롤링되는 문장의 개수
	this.aryDiv = new Array();	// 각각의 Div 를 담는 배열
	this.html = "";
	this.moveTimer = null;
	this.moveLen = 0;
	this.isFirstDiv = 0;		// 현재 가장 위에 있는 div 를 알아보기위한 변수

	this.add = function()
	{
		var text = arguments[0];
		this.aryText[this.aryLen] = text;
		this.aryLen = this.aryLen + 1;
	}//add

	// 스크롤링 보여줌
	this.setScrl = function()
	{
		if (this.aryLen > 0) {
			for (var i = 0;i < this.aryLen ; i++) {
					html = "";
					html = "<div id='"+this.divName+i+"' style='position:absolute;top:"+(this.lineHeight*i)+"px;left:0; visibility:visible;padding-top:2;padding-left:5'>\n";
					html = html + this.aryText[i]+"\n";
					html = html + "</div>";

				document.write(html);		// 저장된 내용을 화면에 출력
				this.aryDiv[i] = eval("document.all."+this.divName+i);
			}

			if (this.aryLen > this.showLines) {
				// 자동스크롤 시작
				this.startScrl();
			}

		} else {
			html = "<table width='100%' align='center' border='0'><tr><td align='center'><BR>내용이 없습니다.</td></tr></table>";
			document.write(html);
		}
	}//setScrl

	// 스크롤링 시작
	this.startScrl = function()
	{
		if (this.isMove) {
			for (var i = 0;i < this.aryLen;i++) {
				this.aryDiv[i].style.pixelTop -= 1;
			}
			this.moveLen++;
			if (this.moveLen >= this.lineHeight) {
				this.moveLen = 0;
				this.aryDiv[this.isFirstDiv].style.pixelTop += this.lineHeight*this.aryLen;
					if (this.isFirstDiv != (this.aryLen-1)) {
						this.isFirstDiv++;
					} else {
						this.isFirstDiv = 0;
					}
				this.sleepTimer();
				return;
			}
		}
		//window.status = isFirstDiv;
		moveTimer = setTimeout(this.name+".startScrl()",this.delayNum);
	}//startScrl

	this.sleepTimer = function()
	{
		this.moveTimer = null;
		this.sleepCnt--;
		if (this.sleepCnt == 0) {
			this.moveTimer = setTimeout(this.name+".startScrl()",this.delayNum);
			this.sleepCnt = this.resetSleepCnt;
			return;
		}
		setTimeout(this.name+".sleepTimer()",1000);
	}//sleepTimer
} //HMSrolling()

/*----------------------------------------------------------------------------------------
'	개발자/개발일시	: 개발팀 이효준 / 2006. 08. 89
'	주 내 요		: 객체의 document를 기준으로 하는 x 좌표를 가져옴
'	수정자/수정일시	:
'	수정 내용		:
----------------------------------------------------------------------------------------*/
function controlGetX (obj)
{
    var x = 0;
    do
    {
        x += obj.offsetLeft;
        obj = obj.offsetParent;
    }
    while (obj);
    return x;
}
/*----------------------------------------------------------------------------------------
'	개발자/개발일시	: 개발팀 이효준 / 2006. 08. 89
'	주 내 요		: 객체의 document를 기준으로 하는 y 좌표를 가져옴
'	수정자/수정일시	:
'	수정 내용		:
----------------------------------------------------------------------------------------*/
function controlGetY (obj)
{
    var y = 0;
    do
    {
        y += obj.offsetTop;
        obj = obj.offsetParent;
    }
    while (obj);
    return y;
}


function MM_preloadImages() { //v3.0
  var d=document; if(d.images){ if(!d.MM_p) d.MM_p=new Array();
    var i,j=d.MM_p.length,a=MM_preloadImages.arguments; for(i=0; i<a.length; i++)
    if (a[i].indexOf("#")!=0){ d.MM_p[j]=new Image; d.MM_p[j++].src=a[i];}}
}

function MM_swapImgRestore() { //v3.0
  var i,x,a=document.MM_sr; for(i=0;a&&i<a.length&&(x=a[i])&&x.oSrc;i++) x.src=x.oSrc;
}

function MM_findObj(n, d) { //v4.01
  var p,i,x;  if(!d) d=document; if((p=n.indexOf("?"))>0&&parent.frames.length) {
    d=parent.frames[n.substring(p+1)].document; n=n.substring(0,p);}
  if(!(x=d[n])&&d.all) x=d.all[n]; for (i=0;!x&&i<d.forms.length;i++) x=d.forms[i][n];
  for(i=0;!x&&d.layers&&i<d.layers.length;i++) x=MM_findObj(n,d.layers[i].document);
  if(!x && d.getElementById) x=d.getElementById(n); return x;
}

function MM_swapImage() { //v3.0
  var i,j=0,x,a=MM_swapImage.arguments; document.MM_sr=new Array; for(i=0;i<(a.length-2);i+=3)
   if ((x=MM_findObj(a[i]))!=null){document.MM_sr[j++]=x; if(!x.oSrc) x.oSrc=x.src; x.src=a[i+2];}
}