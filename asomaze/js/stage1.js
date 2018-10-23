	//ステージ番号
	nowStage1 = 1;
	//目標ブロック数を設定する
	ptBlockNum = 3;
  	//初期位置
  	x = START_X + MOVE_X*3;
  	y = START_Y + MOVE_Y*1;
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
	var goal_x = GOAL_OFFSE_X+GOAL_MOVE_X*3;
	var goal_y = GOAL_OFFSE_Y+GOAL_MOVE_Y*5;
	
	$('#container #goal').css("left",goal_x);
	$('#container #goal').css("top",goal_y);
	