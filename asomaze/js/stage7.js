	//ステージ番号
	nowStage = 7;
	//目標ブロック数を設定する
	ptBlockNum = 6;
  	//初期位置
  	x = START_X + MOVE_X*4;
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
	var goal_x = GOAL_OFFSE_X+GOAL_MOVE_X*4;
	var goal_y = GOAL_OFFSE_Y+GOAL_MOVE_Y*7;
	
	$('#container #goal').css("left",goal_x);
	$('#container #goal').css("top",goal_y);
	
	//氷の位置を変更する
	var ice_pos =[
		[ICE_OFFSE_X+ICE_MOVE_X*0,ICE_OFFSE_Y+ICE_MOVE_Y*4],
		[ICE_OFFSE_X+ICE_MOVE_X*1,ICE_OFFSE_Y+ICE_MOVE_Y*4],
		[ICE_OFFSE_X+ICE_MOVE_X*2,ICE_OFFSE_Y+ICE_MOVE_Y*4],
		[ICE_OFFSE_X+ICE_MOVE_X*3,ICE_OFFSE_Y+ICE_MOVE_Y*4],
		[ICE_OFFSE_X+ICE_MOVE_X*4,ICE_OFFSE_Y+ICE_MOVE_Y*4],
		[ICE_OFFSE_X+ICE_MOVE_X*5,ICE_OFFSE_Y+ICE_MOVE_Y*4],
		[ICE_OFFSE_X+ICE_MOVE_X*6,ICE_OFFSE_Y+ICE_MOVE_Y*4],
		[ICE_OFFSE_X+ICE_MOVE_X*7,ICE_OFFSE_Y+ICE_MOVE_Y*4],
	];
	var ice_list = [
		$('#container .ice1'),
		$('#container .ice2'),
		$('#container .ice3'),
		$('#container .ice4'),
		$('#container .ice5'),
		$('#container .ice6'),
		$('#container .ice7'),
		$('#container .ice8')
	];
	
	for( var i = 0; i < ice_list.length; i++ ){
		ice_list[i].css("left",ice_pos[i][0]);
		ice_list[i].css("top",ice_pos[i][1]);
	}
	
	//氷を登録する
	setIceList( ice_list );
	