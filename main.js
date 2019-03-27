

//***********************js code for calculator to operate***********************************//

// initializing variables to check the validity of input
var decimalExist = false;
var operatorExist;
var decimalExistCount = 0;

jQuery(".input-grid") .click (function (e) {
  
  if (jQuery(this).attr("id")=="number") { //append a number to the screen when a number is clicked
    jQuery("#calculator-screen-output").append(jQuery(this).html());
    decimalExist = false;
    operatorExist = false;

  } else if (jQuery(this).attr("id")=="decimal") {  //append a decimal when a decimal is clicked
    
    if (decimalExist == false && decimalExistCount == 0) {
      jQuery("#calculator-screen-output").append(jQuery(this).html());
      decimalExist = true;
      decimalExistCount++;  
    }

  } else if (jQuery(this).attr("id")=="operator") { // append an operator if an operator is clicked
    
    if (operatorExist == false) {
      jQuery("#calculator-screen-output").append(jQuery(this).html());
      operatorExist = true;
      decimalExistCount = 0;  
    }

  } else if (jQuery(this).attr("id")=="operator-per") { // perform a percentage operation if clicked
    if (operatorExist == false) {
      var per = jQuery("#calculator-screen-output").html();
      var perValue = eval(eval(per)/100);
      jQuery("#calculator-screen-output").html(perValue);
      operatorExist = true; 
      decimalExistCount = 0; 
    }
    
  } else if (jQuery(this).attr("id")=="button-back") { //removes the last element of the calculation expression

    var currentExpression = jQuery("#calculator-screen-output").html();
    var newCurrentExpression = currentExpression.slice(0,-1);
    jQuery("#calculator-screen-output").html(newCurrentExpression);

  } else if (jQuery(this).attr("id")=="equals-to") { //perform the calculation and display result when clicked
        
        var expression = jQuery("#calculator-screen-output").html();
        var lastChar = expression[expression.length -1];

        if ( lastChar !== "+" || lastChar !== "-" || lastChar !== "*" || lastChar !== "/" || lastChar !== "%" || lastChar !== "." ) {
          var result = eval(expression);
          jQuery("#calculator-screen-output").html(result); 
        }

  } else {
    jQuery("#calculator-screen-output").html(''); //clears the calculator screen
    decimalExist = false;
    decimalExistCount = 0;
  }

});

//***********************js code for calculator to operate***********************************//    