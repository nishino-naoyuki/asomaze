
/////////////////////////////////////////////
//�萔
////////////////////////////////////////////
//�v���C���[�̈ʒu���
const START_X = 35;
const START_Y = 15;
const MOVE_X = 70;
const MOVE_Y = 55;
//�S�[���̈ʒu���
const GOAL_OFFSE_X = 27;
const GOAL_OFFSE_Y = 15;
const GOAL_MOVE_X = 70;
const GOAL_MOVE_Y = 55;
//�΂̈ʒu���
const STONE_OFFSE_X = 32;
const STONE_OFFSE_Y = 16;
const STONE_MOVE_X = 69;
const STONE_MOVE_Y = 55;
//�X�̈ʒu���
const ICE_OFFSE_X = 32;
const ICE_OFFSE_Y = 16;
const ICE_MOVE_X = 69;
const ICE_MOVE_Y = 55;


/////////////////////////////////////////////
//�ϐ�
/////////////////////////////////////////////
var x = START_X;		//��l���̈ʒu
var y = START_Y;
var angle = 0;	//��l���̌���
var stolneList = [];	//�΃��X�g
var iceList = [];		//�X���X�g
var goalFlg = false;	//�S�[���t���O
var ptBlockNum = 0;		//�ڕW�Ƃ���u���b�N��
var nowStage = 1;		//���݂̃X�e�[�W�ԍ�

/////////////////////////////////////////////
//�ϐ��ւ̃Z�b�^�[
/////////////////////////////////////////////
function setStolneList( list ){
	stolneList = list;
}

function setIceList( list ){
	iceList = list;
}

/////////////////////////////////////////////////
//
// �E�������̏���
//
////////////////////////////////////////////////
function turnRight(){
  angle++;
  if(angle > 3 ){
  	angle = 0;
  }
  
  draw();
  
  //console.log("turnRight boy0 y="+$('#container #boy0').css("top"));
  //console.log("turnRight boy1 y="+$('#container #boy1').css("top"));
  //console.log("turnRight boy3 y="+$('#container #boy3').css("top"));
  
  return new Promise(function(resolve, reject) {
  	setTimeout(resolve, 500);
  });
}

/////////////////////////////////////////////////
//
// ���������̏���
//
////////////////////////////////////////////////
function turnLeft(){
  angle--;
  if(angle < 0 ){
  	angle = 3;
  }
  
  draw();
  
  
  return new Promise(function(resolve, reject) {
  	setTimeout(resolve, 500);
  });
}

/////////////////////////////////////////////////
//
// �O�i�̏���
//
////////////////////////////////////////////////
function move(){
  
  switch( angle ){
  case 0 :
  	$('#container #boy0').animate({top: '+=55px'},300);
  	$('#container #boy1').animate({top: '+=55px'},300);
  	$('#container #boy2').animate({top: '+=55px'},300);
  	$('#container #boy3').animate({top: '+=55px'},300);
  	y+=MOVE_Y;
  	break;
  case 1 :
  	$('#container #boy0').animate({left: '-=70px'},300);
  	$('#container #boy1').animate({left: '-=70px'},300);
  	$('#container #boy2').animate({left: '-=70px'},300);
  	$('#container #boy3').animate({left: '-=70px'},300);
  	x-=MOVE_X
  	break;
  case 2 :
  	$('#container #boy0').animate({top: '-=55px'},300);
  	$('#container #boy1').animate({top: '-=55px'},300);
  	$('#container #boy2').animate({top: '-=55px'},300);
  	$('#container #boy3').animate({top: '-=55px'},300);
  	y-=MOVE_Y;
  	break;
  case 3 :
  	$('#container #boy0').animate({left: '+=70px'},300);
  	$('#container #boy1').animate({left: '+=70px'},300);
  	$('#container #boy2').animate({left: '+=70px'},300);
  	$('#container #boy3').animate({left: '+=70px'},300);
  	x+=MOVE_X;
  	break;
  }
  
  //console.log("boy0 y="+$('#container #boy0').css("top"));
  //console.log("boy1 y="+$('#container #boy1').css("top"));
  //console.log("boy3 y="+$('#container #boy3').css("top"));
  
  return new Promise(function(resolve, reject) {
  	setTimeout(resolve, 1500);
  });
}

/////////////////////////////////////////////////
//
// �`��̏���
//
////////////////////////////////////////////////
function draw(){

	$('#boy0').hide();
	$('#boy1').hide();
	$('#boy2').hide();
	$('#boy3').hide();
	
	switch( angle ){
	  case 0 :
	  	$('#boy0').show();
	  	break;
	  case 1 :
	  	$('#boy1').show();
	  	break;
	  case 2 :
	  	$('#boy2').show();
	  	break;
	  case 3 :
	  	$('#boy3').show();
	  	break;
	}

}

/////////////////////////////////////////////////
//
// �����蔻��̏���
//
////////////////////////////////////////////////
   function check(){
   		var result = true;
  		
 		 //console.log("x:"+x+" y:"+y);
 		 
  		//�ړ���̍��W���v�Z����
 		 var wkX = x;
 		 var wkY = y;
		switch( angle ){
		case 0 :
			wkY+=MOVE_Y;
			break;
		case 1 :
			wkX-=MOVE_X
			break;
		case 2 :
			wkY-=MOVE_Y;
			break;
		case 3 :
			wkX+=MOVE_X;
			break;
  		}
  
 		 //console.log("wkX:"+wkX+" wkY:"+wkY);
 		
 		//��ɂԂ���H
 		for( var i = 0; i < stolneList.length; i++ ){
 			if( isHit( stolneList[i],wkX,wkY ) ){
 				console.log("STONE HIT!!!");
 				result = false;
 			}
 		}
 		
 		//�X�ɂԂ���H
 		for( var i = 0; i < iceList.length; i++ ){
 			if( isHit( iceList[i],wkX,wkY ) ){
 				console.log("ICE HIT!!!");
 				result = false;
 			}
 		}
  		
  		//�ǂɂԂ���H
  		if( wkX < 0 || wkX > 530 ){
  			result = false;
  		}else if( wkY < 0 || wkY > 450){
  			result = false;
  		}
   		
   		return result;
   }
   
/////////////////////////////////////////////////
//
// ��ɓ����������̔��菈��
//
////////////////////////////////////////////////
   function hitRock(){
   		var result = false;
 		 
 		 var wkX = x;
 		 var wkY = y;
  
		switch( angle ){
		case 0 :
			wkY+=MOVE_Y;
			break;
		case 1 :
			wkX-=MOVE_X
			break;
		case 2 :
			wkY-=MOVE_Y;
			break;
		case 3 :
			wkX+=MOVE_X;
			break;
  		}
 		
 		for( var i = 0; i < stolneList.length; i++ ){
 			if( isHit( stolneList[i],wkX,wkY ) ){
 				console.log("STONE HIT!!!");
 				result = true;
 			}
 		}
 		
 		return result;
   }
   
/////////////////////////////////////////////////
//
// �X�ɓ����������̔��菈��
//
////////////////////////////////////////////////
   function hitIce(){
   		var result = false;
 		 
 		 var wkX = x;
 		 var wkY = y;
  
		switch( angle ){
		case 0 :
			wkY+=MOVE_Y;
			break;
		case 1 :
			wkX-=MOVE_X
			break;
		case 2 :
			wkY-=MOVE_Y;
			break;
		case 3 :
			wkX+=MOVE_X;
			break;
  		}
 		
 		for( var i = 0; i < iceList.length; i++ ){
 			if( isHit( iceList[i],wkX,wkY ) ){
 				console.log("ICE HIT!!!");
 				result = true;
 			}
 		}
 		
 		return result;
   }
   
/////////////////////////////////////////////////
//
// �S�[���������̔��菈��
//
////////////////////////////////////////////////
   function isGoal(){
   		return isHit($('#container #goal'),x,y);
   }
   
/////////////////////////////////////////////////
//
// �r�[�����ˏ���
//
////////////////////////////////////////////////
   function beam(){
  		var chkY = y + $('#container #boy1').height()/2;
  		var chkX = x + $('#container #boy1').width()/2;
    	
    	var beamAngle = 0;
		switch( angle ){
		case 0 :
			beamAngle = 90;
			break;
		case 1 :
			beamAngle = 180;
			break;
		case 2 :
			beamAngle = 270;
			break;
		case 3 :
			beamAngle = 0;
			break;
  		}
    	$('#container #beam').rotate({angle:beamAngle, center:[0,0]});
    	$('#container #beam').css("left",chkX);
    	$('#container #beam').css("top",chkY);
    	$('#container #beam').show("slow");
	
	
	  return new Promise(function(resolve, reject) {
	  	setTimeout(resolve, 1200);
	  });
   }
   
/////////////////////////////////////////////////
//
// �r�[�����˂������ʂ̏���
//
////////////////////////////////////////////////
   function beamResult(){
   		
   		var wkX;
   		var wkY;
   		var pos = $('#container #beam').position();
   		
   		console.log("beam top="+pos.top+" beam left"+(pos.left+ $('#container #beam').width()));
   		
		switch( angle ){
		case 0 :
			wkX = pos.left;
			wkY = pos.top + $('#container #beam').height();
			break;
		case 1 :
			wkX = pos.left - $('#container #beam').width();
			wkY = pos.top;
			break;
		case 2 :
			wkX = pos.left;
			wkY = pos.top - $('#container #beam').height();
			break;
		case 3 :
			wkX = pos.left + $('#container #beam').width();
			wkY = pos.top;
			break;
  		}
  		
 		for( var i = 0; i < iceList.length; i++ ){
 			if( isHit( iceList[i],wkX,wkY ) ){
 				console.log("ICE HIT!!!");
 				iceList[i]. hide( 'explode', '', 700 );
 			}
 		}
   		
   		$('#container #beam').hide("slow");
	  return new Promise(function(resolve, reject) {
	  	setTimeout(resolve, 500);
	  });
   }
   
/////////////////////////////////////////////////
//
// �����蔻�菈���i�R�A�j
//
////////////////////////////////////////////////
   function isHit( target,baseX,baseY ){
   
  		var result = false;
  		var off = target.position();
  		var h = target.height();
  		var w = target.width();
  		var chkY = baseY + $('#container #boy1').height()/2;
  		var chkX = baseX + $('#container #boy1').width()/2;
 		 
   		if( off == null ){
   			return false;
   		}
   		
 		 //console.log("[isHit]chkX:"+chkX+" chkY:"+chkY);
 		 //console.log("[isHit]off.top:"+off.top+" off.left:"+off.left+" off.left+w"+(off.left+w)+" off.top+h"+(off.top+h));
  		//�����蔻��
  		if( ( chkX >= off.left && off.left+w >= chkX ) &&
  		    ( chkY >= off.top && off.top+h >= chkY )   &&
  		    target.css("display") != "none"){
  		    result = true;
  		}
  		
  		
   		return result;
   }
   
/////////////////////////////////////////////////
//
// �k���鏈���i�ǂȂǂɂԂ����Đi�߂Ȃ��Ƃ��j
//
////////////////////////////////////////////////
function doRumble(){

  switch( angle ){
  case 0 :
  	$('#container #boy0').animate({top: '+=10px'},200);
  	break;
  case 1 :
  	$('#container #boy1').animate({left: '-=10px'},200);
  	break;
  case 2 :
  	$('#container #boy2').animate({top: '-=10px'},200);
  	break;
  case 3 :
  	$('#container #boy3').animate({left: '+=10px'},200);
  	break;
  }
  setTimeout(doRumbleStop, 300);
  
  return new Promise(function(resolve, reject) {
  	setTimeout(resolve, 1000);
  });
}


function doRumbleStop(){

  switch( angle ){
  case 0 :
  	$('#container #boy0').animate({top: '-=10px'},300);
  	break;
  case 1 :
  	$('#container #boy1').animate({left: '+=10px'},300);
  	break;
  case 2 :
  	$('#container #boy2').animate({top: '+=10px'},300);
  	break;
  case 3 :
  	$('#container #boy3').animate({left: '-=10px'},300);
  	break;
  }
}
