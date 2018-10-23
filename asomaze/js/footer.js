
    function onDeviceReady() {
    	console.log("onDeviceReady");
	}
	
	//////////////////////////////////////
	// 初期設定
	//////////////////////////////////////
    function bindEvents() {
    	console.log("bindEvents");

    	document.addEventListener("deviceready", onDeviceReady, false);
    	document.getElementById("p5Run").addEventListener("click", onButtonClicked, false);
    	document.getElementById("displayScript").addEventListener("click", onButtonDisplayCode, false);
    	document.getElementById("retry").addEventListener("click", onButtonRetry, false);
    	document.getElementById("stageSelect").addEventListener("click", onButtonSelect, false);
    	
    	$('#retry').hide();
    	$('#blocknum').text('このステージの目標ブロック数は'+ptBlockNum+'個です！');
    	
	}
	
	//////////////////////////////////////
	// 実行ボタンクリック処理
	//////////////////////////////////////
	function onButtonClicked() {
	    console.log("onButtonClicked");
	    var code = Blockly.JavaScript.workspaceToCode(workspace)
	    console.log(code);
	    code = "(async function (){" + code + " if( goalFlg == false ){ popupNotGoal(); }else{ popupGoal(); } $('#retry').show(); $('#p5Run').hide(); })()";
	    goalFlg = false;
	    try{
	    	eval(code);
	    }catch(e){
	    	alert(e);
	    }
	}
	
	//////////////////////////////////////
	// プログラム表示ボタンクリック処理
	//////////////////////////////////////
	function onButtonDisplayCode() {
	    console.log("onButtonDisplayCode");
	    var code = Blockly.JavaScript.workspaceToCode(workspace)
	    alert( code );
	}
	
	//////////////////////////////////////
	// リトライボタンクリック処理
	//////////////////////////////////////
	function onButtonRetry() {
	    console.log("onButtonRetry");
	    location.reload();
	}
	
	//////////////////////////////////////
	// ステージセレクトボタンクリック処理
	//////////////////////////////////////
	function onButtonSelect() {
	    console.log("onButtonSelect");
	    window.location.href = "index.html";
	}
	
	//////////////////////////////////////
	// ゴール処理（ポップアップで結果を表示）
	//////////////////////////////////////
	function popupGoal(){
		var str = "<h1>ゴールおめでとう！</h1>";
		
		/////////////////////////////////
		//目標のブロック数とどれくらい差があるかで星の数を決める
		str += "<p>";
		var starNum = getStarNum();
		for( var i = 0; i < starNum; i++ ){
			str += "<img src=\"img/star.png\" width=\"200px\" height=\"200px\">";
		}
		str += "</p>";
		
		
		str += "<p class=\"popup-modal-dismiss\"><a href=\"#\">閉じる</a>&nbsp;&nbsp;<a href=\"stage"+(nowStage+1)+".html\">次のステージへ</a></p>";
		$('#popup').html(str);
		$('#popup').show();
        $.magnificPopup.open({
            items: {src: '#popup'},
            type: 'inline', 
            modal: true,
        }, 0);
	}
	
	//////////////////////////////////////
	// 結果を計算（使用したブロック数と目標のブロック数の差異）
	//////////////////////////////////////
	function getStarNum(){
		var starNum = 0;
		
		//使ったブロック数を取得
		var blockNum = workspace.getAllBlocks().length;
		
		//目標ブロック数との差を出す
		var dif = blockNum - ptBlockNum;
		
		console.log("dif="+dif+" blockNum="+blockNum+" ptBlockNum"+ptBlockNum);
		
		//目標以下の場合は星３つ
		if( dif <= 0 ){
			starNum = 3;
		}else if( dif == 1 ){
			starNum = 2;
		}else{
			starNum = 1;
		}
		
		return starNum;
	}
	
	//////////////////////////////////////
	// ゴール失敗処理
	//////////////////////////////////////
	function popupNotGoal(){
		var ret = confirm("ゴールならず・・・残念。\nリトライしますか？(OK=リトライ）");
		
		if( ret == true ){
			location.reload();
		}
	}
	
	$(document).on('click', '.popup-modal-dismiss', function (e) { 
	    $.magnificPopup.close();
	    $('#popup').hide();
	  });
	
	bindEvents();
	
	//////////////////////////////////////
	// ブロックリィの初期化
	//////////////////////////////////////
    var workspace = Blockly.inject('blocklyDiv', {
      toolbox: document.getElementById('toolbox'),
      zoom:{
	      wheel: true,
	      startScale: 1.0,
	      maxScale: 3,
	      minScale: 0.3
	  }
    });
    