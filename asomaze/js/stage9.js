	//目標ブロック数を設定する
	ptBlockNum = 8;
  	//初期位置
  	x = START_X + MOVE_X*7;
  	y = START_Y + MOVE_Y*0;
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
	var goal_y = GOAL_OFFSE_Y+GOAL_MOVE_Y*3;
	
	$('#container #goal').css("left",goal_x);
	$('#container #goal').css("top",goal_y);
	
	//岩の位置を変更する
	var stone_pos =[
		[STONE_OFFSE_X+STONE_MOVE_X*6,STONE_OFFSE_Y+STONE_MOVE_Y*0],
		[STONE_OFFSE_X+STONE_MOVE_X*7,STONE_OFFSE_Y+STONE_MOVE_Y*7],
		[STONE_OFFSE_X+STONE_MOVE_X*0,STONE_OFFSE_Y+STONE_MOVE_Y*6],
		[STONE_OFFSE_X+STONE_MOVE_X*1,STONE_OFFSE_Y+STONE_MOVE_Y*0],
		[STONE_OFFSE_X+STONE_MOVE_X*6,STONE_OFFSE_Y+STONE_MOVE_Y*1],
		[STONE_OFFSE_X+STONE_MOVE_X*6,STONE_OFFSE_Y+STONE_MOVE_Y*2],
		[STONE_OFFSE_X+STONE_MOVE_X*6,STONE_OFFSE_Y+STONE_MOVE_Y*3],
		[STONE_OFFSE_X+STONE_MOVE_X*6,STONE_OFFSE_Y+STONE_MOVE_Y*4],
		[STONE_OFFSE_X+STONE_MOVE_X*6,STONE_OFFSE_Y+STONE_MOVE_Y*5],
		[STONE_OFFSE_X+STONE_MOVE_X*5,STONE_OFFSE_Y+STONE_MOVE_Y*5],
		[STONE_OFFSE_X+STONE_MOVE_X*4,STONE_OFFSE_Y+STONE_MOVE_Y*5],
		[STONE_OFFSE_X+STONE_MOVE_X*3,STONE_OFFSE_Y+STONE_MOVE_Y*5],
		[STONE_OFFSE_X+STONE_MOVE_X*2,STONE_OFFSE_Y+STONE_MOVE_Y*5],
		[STONE_OFFSE_X+STONE_MOVE_X*2,STONE_OFFSE_Y+STONE_MOVE_Y*4],
		[STONE_OFFSE_X+STONE_MOVE_X*2,STONE_OFFSE_Y+STONE_MOVE_Y*3],
		[STONE_OFFSE_X+STONE_MOVE_X*2,STONE_OFFSE_Y+STONE_MOVE_Y*2],
		[STONE_OFFSE_X+STONE_MOVE_X*3,STONE_OFFSE_Y+STONE_MOVE_Y*2],
		[STONE_OFFSE_X+STONE_MOVE_X*4,STONE_OFFSE_Y+STONE_MOVE_Y*2],
		[STONE_OFFSE_X+STONE_MOVE_X*4,STONE_OFFSE_Y+STONE_MOVE_Y*3],
	];
	var stone_list = [
		$('#container .stone1'),
		$('#container .stone2'),
		$('#container .stone3'),
		$('#container .stone4'),
		$('#container .stone5'),
		$('#container .stone6'),
		$('#container .stone7'),
		$('#container .stone8'),
		$('#container .stone9'),
		$('#container .stone10'),
		$('#container .stone11'),
		$('#container .stone12'),
		$('#container .stone13'),
		$('#container .stone14'),
		$('#container .stone15'),
		$('#container .stone16'),
		$('#container .stone17'),
		$('#container .stone18'),
		$('#container .stone19'),
	];
	
	for( var i = 0; i < stone_list.length; i++ ){
		stone_list[i].css("left",stone_pos[i][0]);
		stone_list[i].css("top",stone_pos[i][1]);
	}
	
	//石を登録する
	setStolneList( stone_list );
	
	
	//氷の位置を変更する
	var ice_pos =[
		[ICE_OFFSE_X+ICE_MOVE_X*3,ICE_OFFSE_Y+ICE_MOVE_Y*4],
		[ICE_OFFSE_X+ICE_MOVE_X*1,ICE_OFFSE_Y+ICE_MOVE_Y*3],
	];
	var ice_list = [
		$('#container .ice1'),
		$('#container .ice2'),
	];
	
	for( var i = 0; i < ice_list.length; i++ ){
		ice_list[i].css("left",ice_pos[i][0]);
		ice_list[i].css("top",ice_pos[i][1]);
	}
	
	//氷を登録する
	setIceList( ice_list );
	