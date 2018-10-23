	//ステージ番号
	nowStage = 2;
	//目標ブロック数を設定する
	ptBlockNum = 4;
  	//初期位置
  	x = START_X + MOVE_X*4;
  	y = START_Y + MOVE_Y*3;
  	//初期位置を変更する
	$('#container #boy0').css("left",x);
	$('#container #boy0').css("top",y);
	$('#container #boy1').css("left",x);
	$('#container #boy1').css("top",y);
	$('#container #boy2').css("left",x);
	$('#container #boy2').css("top",y);
	$('#container #boy3').css("left",x);
	$('#container #boy3').css("top",y);
	
	//ゴールの位置を変更する
	$('#container #goal').css("left",GOAL_OFFSE_X+GOAL_MOVE_X*1);
	$('#container #goal').css("top",GOAL_OFFSE_Y+GOAL_MOVE_Y*3);
	