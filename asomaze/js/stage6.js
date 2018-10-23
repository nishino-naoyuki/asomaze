	//ステージ番号
	nowStage = 6;
	//目標ブロック数を設定する
	ptBlockNum = 7;
  	//初期位置
  	x = START_X + MOVE_X*5;
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
	var goal_x = GOAL_OFFSE_X+GOAL_MOVE_X*1;
	var goal_y = GOAL_OFFSE_Y+GOAL_MOVE_Y*6;
	
	$('#container #goal').css("left",goal_x);
	$('#container #goal').css("top",goal_y);
	
	//石の位置を変更する
	var stone_pos =[
		[STONE_OFFSE_X+STONE_MOVE_X*5,STONE_OFFSE_Y+STONE_MOVE_Y*2],
		[STONE_OFFSE_X+STONE_MOVE_X*4,STONE_OFFSE_Y+STONE_MOVE_Y*3],
		[STONE_OFFSE_X+STONE_MOVE_X*3,STONE_OFFSE_Y+STONE_MOVE_Y*4],
		[STONE_OFFSE_X+STONE_MOVE_X*2,STONE_OFFSE_Y+STONE_MOVE_Y*5],
		[STONE_OFFSE_X+STONE_MOVE_X*2,STONE_OFFSE_Y+STONE_MOVE_Y*6],
	];
	var stone_list = [
		$('#container .stone1'),
		$('#container .stone2'),
		$('#container .stone3'),
		$('#container .stone4'),
		$('#container .stone5')
	];
	
	for( var i = 0; i < stone_list.length; i++ ){
		stone_list[i].css("left",stone_pos[i][0]);
		stone_list[i].css("top",stone_pos[i][1]);
	}
	
	//石を登録する
	setStolneList( stone_list );
	