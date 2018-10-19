
/*ブロックの見た目の定義*/
Blockly.Blocks['zenshin'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("前進する");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("今、向いている方向に1マス動きます");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['turn_right'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("右を向く");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(60);
 this.setTooltip("右を向きます");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['turn_left'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("左を向く");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(160);
 this.setTooltip("左を向きます");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['condition'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["岩にぶつかった","1"], ["氷にぶつかった","2"]]), "条件選択");
    this.setInputsInline(false);
    this.setOutput(true, null);
    this.setColour(230);
 this.setTooltip("条件を選択します");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['beam'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("ビームを発射する");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(330);
 this.setTooltip("氷を解かすビームを発射します");
 this.setHelpUrl("");
  }
};

/*ブロックの動作（出力コード）の定義*/

/////////////////////////////////////////////////
//
// 前進の動作定義
//
////////////////////////////////////////////////
Blockly.JavaScript['zenshin'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  
  var code = "if( check() ){\n"
  code += "      await move();\n";
  code += "      if(isGoal()){\n";
  code += "          goalFlg = true;\n";
  code += "      }else{\n";
  code += "          goalFlg = false;\n";
  code += "      }\n";
  code += "   }else{\n";
  code += "     await doRumble();\n";
  code += "   }\n";
  
  return code;
};

/////////////////////////////////////////////////
//
// 右を向くの動作定義
//
////////////////////////////////////////////////
Blockly.JavaScript['turn_right'] = function(block) {
  
  return "await turnRight();\n";
};

/////////////////////////////////////////////////
//
// 左を向くの動作定義
//
////////////////////////////////////////////////
Blockly.JavaScript['turn_left'] = function(block) {

  return "await turnLeft();\n";
};
/////////////////////////////////////////////////
//
// 条件式の定義
//
////////////////////////////////////////////////
Blockly.JavaScript['condition'] = function(block) {
  var dropdown_____ = block.getFieldValue('条件選択');
  var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  
  var code = '...';
  
  if( dropdown_____ == 1 ){
  	//岩にぶつかったか？
  	code = "hitRock()";
  }else{
  	//氷にぶつかったか？
  	code = "hitIce()";
  }
  
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

/////////////////////////////////////////////////
//
// ビームを発射の定義
//
////////////////////////////////////////////////
Blockly.JavaScript['beam'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = "await beam(); await beamResult();";
  return code;
};
