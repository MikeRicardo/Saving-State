function ValidateVar(inputObj, vOperator, vOperand, varName, varMsg)
{
 	var inputVar;
	var inputLen;
 	if (inputObj.type)
	{
	 	inputVar = trim(inputObj.value);
 		inputLen = (inputVar).length;
 	}
 	else
 	{
 	 	inputLen = (inputObj).length;
	}
	

	var EnterVal = (varMsg)?varMsg:((varName)?"Please enter a value for the " + varName + " field.":"Please make sure all required fields have been entered.");
	var EqualStr = (varMsg)?varMsg:((varName)?"The " + varName + " field should not EQUAL '"+(vOperand)+"'.":"You have entered an Invalid value.  Please correct invalid fields.");	
	var NotEqualStr = (varMsg)?varMsg:((varName)?"The " + varName + " field should EQUAL '"+(vOperand)+"'.":"You have entered an Invalid value.  Please correct invalid fields.");	
	
	var GreaterEThan = (varMsg)?varMsg:((varName)?"The " + varName + " field should not be GREATER than "+(vOperand-1)+".":"You have entered a value GREATER than the acceptable value of "+(vOperand-1)+".  Please correct invalid fields.");	
	var LessEThan = (varMsg)?varMsg:((varName)?"The " + varName + " field should not be LESS than "+(vOperand+1)+".":"You have entered a value LESS than the acceptable value of "+(vOperand+1)+".  Please correct invalid fields.");			
	var GreaterThan = (varMsg)?varMsg:((varName)?"The " + varName + " field should not be GREATER than "+vOperand+".":"You have entered a value GREATER than the acceptable value of "+vOperand+".  Please correct invalid fields.");	
	var LessThan = (varMsg)?varMsg:((varName)?"The " + varName + " field should not be LESS than "+vOperand+".":"You have entered a value LESS than the acceptable value of "+vOperand+".  Please correct invalid fields.");			

	var LEqualsStr = (varMsg)?varMsg:((varName)?"The " + varName + " field should not be EQUAL in LENGTH to "+(vOperand-1)+" characters.":"You have entered a value which should not be of LENGTH "+(vOperand-1)+" characters.  Please correct invalid fields.");	
	var LNotEqualsStr = (varMsg)?varMsg:((varName)?"The " + varName + " field should be EQUAL in LENGTH to "+(vOperand-1)+" characters.":"You have entered a value which should be of LENGTH "+(vOperand-1)+" characters.  Please correct invalid fields.");	

	var LongerEThan = (varMsg)?varMsg:((varName)?"The " + varName + " field should not be LONGER than "+(vOperand-1)+" characters.":"You have entered a value LONGER than the acceptable LENGTH of "+(vOperand-1)+".  Please correct invalid fields.");	
	var ShorterEThan = (varMsg)?varMsg:((varName)?"The " + varName + " field should not be SHORTER than "+(vOperand+1)+" characters.":"You have entered a value SHORTER than the acceptable LENGTH of "+(vOperand+1)+".  Please correct invalid fields.");			
	var LongerThan = (varMsg)?varMsg:((varName)?"The " + varName + " field should not be LONGER than "+vOperand+" characters.":"You have entered a value LONGER than the acceptable LENGTH of "+vOperand+".  Please correct invalid fields.");	
	var ShorterThan = (varMsg)?varMsg:((varName)?"The " + varName + " field should not be SHORTER than "+vOperand+" characters.":"You have entered a value SHORTER than the acceptable LENGTH of "+vOperand+".  Please correct invalid fields.");	

	var CheckRadio = (varMsg)?varMsg:((varName)?"Please select a "+varName+".":"Make sure you have SELECTED a value for all required CHECKBOX or OPTION fields.");

	var Dropdown = (varMsg)?varMsg:((varName)?"Please select a "+varName+".":"Make sure you have SELECTED a value for all required DROPDOWN fields.");

	var AlphaStr = (varMsg)?varMsg:((varName)?"Please enter only Alphabetical Letters for the "+varName+" field.":"You have entered Non-Alphabetical characters in a field requiring only Letters.");
	var NumberStr = (varMsg)?varMsg:((varName)?"Please enter only Numbers for the "+varName+" field.":"You have entered Non-Numeric characters in a field requiring only Numbers.");
	var AlphaNumStr = (varMsg)?varMsg:((varName)?"Please enter only Alpha-Numerical Characters for the "+varName+" field.":"You have entered Non-Alpha-Numerical characters in a field requiring only Letters and/or Numbers.");
	var FloatStr = (varMsg)?varMsg:((varName)?"Please enter only a Decimal Point Number for the "+varName+" field.":"You have entered Non-Numeric characters in a field requiring only Decimal Point Numbers.");
	var IntegerStr = (varMsg)?varMsg:((varName)?"Please enter only Numbers for the "+varName+" field.":"You have entered Non-Numeric characters in a field requiring only Numbers.");	

	var NameStr = (varMsg)?varMsg:((varName)?"There are invalid characters in the "+varName+" field.":"You have entered invalid characters in a field.");
	var AddressStr = (varMsg)?varMsg:((varName)?"There are invalid characters in the "+varName+" field.":"You have entered an invalid Address.");	
	
	var EmailStr = (varMsg)?varMsg:((varName)?"Please enter a Valid Email Address for the "+varName+" field.":"You have entered an invalid EMAIL Address.");
	var PhoneStr = (varMsg)?varMsg:((varName)?"Please enter a Valid Phone Number for the "+varName+" field.":"You have entered an invalid Phone Number.");

	var DollarStr = (varMsg)?varMsg:((varName)?"Please enter a Valid Dollar Amount for the "+varName+" field.":"You have entered an Dollar Amount.");

	var MatchStr = (varMsg)?varMsg:((varName)?"The " + varName + " field should MATCH '"+(vOperand)+"'.":"You have entered an Invalid value.  Please correct invalid fields.");	

	var test;
	var i;
	
	switch(vOperator)
	{
	 	case "exists":
			if (!(inputLen>0 && inputVar!="undefined") && varName != "-1")
			{
				alert(EnterVal);
				inputObj.focus();
			}
	 		return (inputLen>0 && inputVar!="undefined" );
	 		break;
		case '=':
			if (inputVar == vOperand && varName != "-1")
			{
				alert(EqualStr);
				inputObj.focus();
			}
		  return !(inputVar == vOperand);
		  break;    
		case '>=':
			if (inputVar >= vOperand && varName != "-1")
			{
				alert(GreaterEThan);
				inputObj.focus();
			}
		  return !(inputVar >= vOperand);
		  break;    
		case '<=':
			if (inputVar <= vOperand && varName != "-1")
			{
				alert(LessEThan);
				inputObj.focus();
			}
		  return !(inputVar <= vOperand);
		  break;    
		case '!=':
			if (inputVar != vOperand && varName != "-1")
			{
				alert(NotEqualStr);
				inputObj.focus();
			}
		  return !(inputVar != vOperand);
		  break;    		
		case '>':
			if (inputVar > vOperand && varName != "-1")
			{
				alert(GreaterThan);
				inputObj.focus();
			}
		  return !(inputVar > vOperand);
		  break;    
		case '<':
			if (inputVar < vOperand && varName != "-1")
			{
				alert(LessThan);
				inputObj.focus();
			}		  
			return !(inputVar < vOperand);
		  break;    
		case "l=":
			if (inputLen == vOperand && varName != "-1")
			{
				alert(LEqualsStr);
				inputObj.focus();
			}
			return !(inputLen == vOperand);
			break;
		case "l>=":		
			if (inputLen >= vOperand && varName != "-1")
			{
				alert(LongerEThan);
				inputObj.focus();
			}
			return !(inputLen >= vOperand);
			break;
		case "l<=":		
			if (inputLen <= vOperand && varName != "-1")
			{
				alert(ShorterEThan);
				inputObj.focus();
			}
			return !(inputLen <= vOperand);
			break;
		case "l!=":
			if (inputLen != vOperand && varName != "-1")
			{
				alert(LNotEqualsStr);
				inputObj.focus();
			}
			return !(inputLen != vOperand);
			break;
		case "l>":
			if (inputLen > vOperand && varName != "-1")
			{
				alert(LongerThan);
				inputObj.focus();
			}
			return !(inputLen > vOperand);
			break;
		case "l<":
			if (inputLen < vOperand && varName != "-1")
			{
				alert(ShorterThan);
				inputObj.focus();
			}			
			return !(inputLen < vOperand);
			break;
		case "ruid":
			return isValidRUID(inputObj);
			break;
		case "checkboxtrue":	
			if (inputVar)
			{
				var test = checkboxArray(inputObj, (vOperand + "[]"));
			}
			else
			{
				var test = checkboxArray(inputObj, vOperand);
			}
			if (test == "" && varName != "-1")
			{
				alert(CheckRadio);
				inputObj.focus();
			}
			return (test !="");
			break;
		case "checkboxfalse":	
			var test = checkboxArray(inputObj, (vOperand + "[]"));
			if (test != "" && varName != "-1")
			{
				alert(CheckRadio);
				inputObj.focus();
			}
			return (test =="");
			break;

		case "radio":	
			var radioSelected = false;
			if (inputLen)
			{
				for (i = 0;  i < inputLen;  i++)
				{
					if (inputObj[i].checked)	
						radioSelected = true;
				}	
				if (radioSelected==false && varName != "-1")
				{
					alert(CheckRadio);
					//inputObj.focus();
				}
				if (radioSelected==false)
					return (false);
			}
			else
			{
			 	if (inputObj.checked == false && varName != "-1")
				{
					alert(CheckRadio);
					inputObj.focus();
				}
				return (inputObj.checked);
			}
			break;
		case 'dropdown':
			if (inputVar == 0 && varName != "-1")
			{
				alert(Dropdown);
				inputObj.focus();
			}
		  return (inputVar != 0);
		  break;    
				
		case "alpha":
			test = isRegEx('alpha', inputVar);
			if (test == false && varName != "-1")
			{
				alert(AlphaStr);
				inputObj.focus();
				return test;
			}		
			break;
		case "numeric":
			test = isRegEx('numeric', inputVar);
			if (test == false && varName != "-1")
			{
				alert(NumberStr);
				inputObj.focus();
				return test;
			}		
			break;
		case "alphanumeric":
			test = 	isRegEx('alphanumeric', inputVar);
			if (test == false && varName != "-1")
			{
				alert(AlphaNumStr);
				inputObj.focus();
				return test;
			}		
			break;
		case "float":
			test = 	isRegEx('float', inputVar);
			if (test == false && varName != "-1")
			{
				alert(FloatStr);
				inputObj.focus();
				return test;
			}		
			break;
		case "integer":
			test = 	isRegEx('integer', inputVar);
			if (test == false && varName != "-1")
			{
				alert(IntegerStr);
				inputObj.focus();
				return test;
			}		
			break;
		case "email":
			test = 	isRegEx('email', inputVar);
			if (test == false && varName != "-1")
			{
				alert(EmailStr);
				inputObj.focus();
				return test;
			}		
			break;
		case "name":
			test = 	isRegEx('name', inputVar);
			if (test == false && varName != "-1")
			{
				alert(NameStr);
				inputObj.focus();
				return test;
			}		
			break;
		case "address":
			test = 	isRegEx('address', inputVar);
			if (test == false && varName != "-1")
			{
				alert(AddressStr);
				inputObj.focus();
				return test;
			}		
			break;

		case "phone":
			var lenstr;
			if (inputVar.length < 10)
			{
				lenstr = "\nPlease enter 10 Digits (Area Code+Phone Number).";	
				test = false;
			}
			else
			{
				lenstr = "";	
				test = 	isRegEx('phone', inputVar);
			}
			
			if (test == false && varName != "-1")
			{
				alert(PhoneStr+lenstr);
				inputObj.focus();
				return test;
			}		
			break;
		case "dollars":
			test = 	isRegEx('dollars', inputVar);
			if (test == false && varName != "-1")
			{
				alert(DollarStr);
				inputObj.focus();
				return test;
			}		
			break;	
		case 'match':
			if (inputVar != vOperand && varName != "-1")
			{
				alert(MatchStr);
				inputObj.focus();
			}
		  return (inputVar == vOperand);
		  break;
		default:
	}
	if (vOperator.substring(0,2)=='ss')
	{
	 	var startpos = vOperator.substring(3,vOperator.indexOf("-")-1)-1;
		//startpos = (startpos=='1')?'0':startpos;
		var endpos = vOperator.substring(vOperator.indexOf("-")+1,vOperator.length);
		//alert(inputVar.substring(startpos, endpos));
		if (!(inputVar.substring(startpos, endpos) == vOperand) && varName != "-1")
		{
			var SubSStr = (varMsg)?varMsg:((varName)?"The "+(startpos+1)+" to "+endpos+" characters in the "+varName+" field should be '"+vOperand+"'.":"The "+(startpos+1)+" to "+endpos+" characters in one of the fields should be '"+vOperand+"'.");									
			alert (SubSStr);
			inputObj.focus();
		}
		
		return (inputVar.substring(startpos, endpos) == vOperand);
	}
	
	return true;
}


function isRegEx(type,str)
{
   var regex;
   if (type == 'alphanumeric') 
	{
		regex = /[^a-zA-Z0-9]+/g;
	}
   if (type == 'numeric') 
	{
		regex = /[^0-9]+/g;
	}
   if (type == 'integer')  //positive or negative
	{
		if (str.length > 0)
		{
		 	regex = /^[-+]?[0-9]+$/;
			return regex.test(str);
		}
		else
		{
			return true;
		}
	}
	
   if (type == 'float') 
	{
		regex = /^[-+]?[0-9]+(\.[0-9]+)?$/;
		if (str.length > 0)
		{
	 		return regex.test(str);
		}
		else
		{
			return true;
		}
	}
	if (type == 'alpha') 
	{
		regex = /[^a-zA-Z]+/g;
	}
	if (type == 'name') 
	{
		regex = /[^\.\s\-a-zA-Z]+/g;
		//return regex.test(str);
	}
	if (type == 'phone') 
	{
		regex = /[^\-() 0-9]+/g;
		//  /^\(?([1-9]\d{2})[\).]? ?(\d{3})[.-]?(\d{4})$/
	}
	if (type == 'dollars')
	{
		if (str.length > 0)
		{
		 	regex = /^\$?[1-9][0-9]{0,2}(,[0-9]{3})*(\.[0-9]{2})?$/;
			return regex.test(str);
		}
		else
		{
			return true;
		}
	}
	if (type == 'address') 
	{
		regex = /[^\s\-\.\,a-zA-Z0-9]+/g;
	}
	if (type == 'email')
	{
		regex = /^[-_.a-z0-9]+@(([-_a-z0-9]+\.)+(ad|ae|aero|af|ag|ai|al|am|an|ao|aq|ar|arpa|as|at|au|aw|az|ba|bb|bd|be|bf|bg|bh|bi|biz|bj|bm|bn|bo|br|bs|bt|bv|bw|by|bz|ca|cc|cd|cf|cg|ch|ci|ck|cl|cm|cn|co|com|coop|cr|cs|cu|cv|cx|cy|cz|de|dj|dk|dm|do|dz|ec|edu|ee|eg|eh|er|es|et|eu|fi|fj|fk|fm|fo|fr|ga|gb|gd|ge|gf|gh|gi|gl|gm|gn|gov|gp|gq|gr|gs|gt|gu|gw|gy|hk|hm|hn|hr|ht|hu|id|ie|il|in|info|int|io|iq|ir|is|it|jm|jo|jp|ke|kg|kh|ki|km|kn|kp|kr|kw|ky|kz|la|lb|lc|li|lk|lr|ls|lt|lu|lv|ly|ma|mc|md|mg|mh|mil|mk|ml|mm|mn|mo|mp|mq|mr|ms|mt|mu|museum|mv|mw|mx|my|mz|na|name|nc|ne|net|nf|ng|ni|nl|no|np|nr|nt|nu|nz|om|org|pa|pe|pf|pg|ph|pk|pl|pm|pn|pr|pro|ps|pt|pw|py|qa|re|ro|ru|rw|sa|sb|sc|sd|se|sg|sh|si|sj|sk|sl|sm|sn|so|sr|st|su|sv|sy|sz|tc|td|tf|tg|th|tj|tk|tm|tn|to|tp|tr|tt|tv|tw|tz|ua|ug|uk|um|us|uy|uz|va|vc|ve|vg|vi|vn|vu|wf|ws|ye|yt|yu|za|zm|zw)|(([0-9][0-9]?|[0-1][0-9][0-9]|[2][0-4][0-9]|[2][5][0-5])\.){3}([0-9][0-9]?|[0-1][0-9][0-9]|[2][0-4][0-9]|[2][5][0-5]))$/i;
		return regex.test(str);
	}	  
   return !regex.test(str);
}
/*
function compareDates(date1, date2)
{
	var date1 = document.forms.svForm.sv_datefromM.value + document.forms.svForm.sv_datefromD.value + document.forms.svForm.sv_datefromY.value;

	var datelen = date1.length;

	if ( datelen != 8) 
	{
		datebad=true;
	}
	if ( datelen == 0) 
	{
		datebad=false;
	}
	
	
	if 	(datebad == true)
	{
			alert('Please enter a valid Date-From!');
			return false;		
	}
	
	var date2 = trim(document.forms.svForm.sv_datetoM.value) + trim(document.forms.svForm.sv_datetoD.value) + trim(document.forms.svForm.sv_datetoY.value);
	var datelen2 = date2.length;
	if ( datelen2 != 8) 
	{
		datebad=true;
	}
	if ( datelen2 == 0) 
	{
		datebad=false;
	}
	
	if 	(datebad == true)
	{
			alert('Please enter a valid Date-To!');
			return false;		
	}
	
	if ((datelen==8) && (datelen2==0))
	{
			alert('You did not enter a Date-To!');
			return false;	
	}
	if ((datelen==0) && (datelen2==8))
	{
			alert('You did not enter a Date-From!');
			return false;	
	}	
}

function chkDate(dateY, dateM, dateD)
{
	var datebad=false;
	if ((dateY.value)length ==4)
	{
		if (dateY.value != "")	
			dateY.value = fixDate("y", trim(dateY.value));	
		if (dateM.value != "")	
			dateM.value = fixDate("m", trim(dateM.value));	
		if (dateD.value != "")	
			dateD.value = fixDate("d", trim(dateD.value));	
	}

	if (dateM == "00" || dateD == "00" || dateY == "00")
	{
		datebad = true;
	}

}
function fixDate(type, str)
{
	if (str	!= "")
	{
		if (type == "m")
		{
			switch (str)
			{
				case '0':
						return ("00");
						break;
				case '00':
						return ("00");
						break;
				default:
						if (str > 12)
						{
							return ("00");
						}
						if (str < 1)
						{
							return ("00");
						}
						if (str.length == 1)
						{
							return '0' + str; 
						}
						return str;
						break;
					
			}
		}
		
		if(type == "d")
		{	
			switch (str)
			{
				case '0':
						return ("00");
						break;
				case '00':
						return ("00");
						break;
				default:
						if (str > 31)
						{
							return ("00");
						}
						if (str < 1)
						{
							return ("00");
						}
						if (str.length == 1)
						{
								return '0' + str;
						}
						return str;
						break;
					
			}
		}
		
		if(type == "y")
		{	
			switch (str)
			{
				case '0':
						return ("00");
						break;
				case '000':
						return ("00");
						break;
				case '0000':
						return ("00");
						break;
				default:
						if (str.length > 0)
						{
						 	if (str < 100)
							{
								if (str >= 80)
								{	
									return '19' + str;
								}
								if (str < 80 && str.length > 1)
								{
									return '20' + str;
								}
							}
							if (str < 0)
							{
								return ("00");
							}
							if(str < 1000)
							{
								return ("00");
							}
							return str;
						}
						return '00';
						break;				
			}
		}	
	}	
}
*/   
function strFormat(type, str)
{
	if (type == 'numeric')
	{
		return (trim(str.replace(/[^\d]/g, "")));
	}
	
	if (type == 'alpha')
	{
		return (trim(str.replace(/[^[a-zA-Z]]/g, "")));
	}
	if (type == 'alphanumeric')
	{
		return (trim(str.replace(/[^[\d[a-zA-Z]]]/g, "")));
	}
		
	if (type == "capitalize")
	{
       	function cnvrt() 
		{
           	return (trim(arguments[0].toUpperCase()));
       	}
		return (trim(str.toLowerCase().replace(/\b[a-z]/g, cnvrt)));
	}
	if (type == "ucase")
	{
	  	return (trim(str.toUpperCase()));
	}
	if (type == "lcase")
	{
	  	return (trim(str.toLowerCase()));
	}
	
	if (type == "title")
	{
	 	function cnvrt() 
		{
	        if (arguments[arguments.length -2] == 0)
	            return (trim(arguments[0].replace(/^[a-z]/, cnvrt2)));
	        else if (/^(a|about|after|an|and|at|by|for|from|in|into|nor|of|on|onto|over|the|to|up|with|within)$/.test(arguments[0]) )
	            return (trim(arguments[0]));
	        else
	            return (trim(arguments[0].replace(/^[a-z]/, cnvrt2)));
	    }
	    function cnvrt2() 
		{
	        return (trim(arguments[0].toUpperCase()));
	    }
		return (trim(str.toLowerCase().replace(/\b\w+\b/g, cnvrt)));
	}
		
	if (type == "html")
	{
	   return (trim(str.replace(/[<>]/g,
        function(s){return (s == "<")? "&lt;" :"&gt;"})));
	}
	
	if (type == "invname")  //inverted name with comma --> Jack Bower => Bower, Jack
	{
        return (trim(str.replace(/(.+)\s+([\w']+)$/, "$2, $1")));
	}	
}

function padleft(val, ch, num) 
{
 	var re = new RegExp(".{" + num + "}$");
    var pad = "";
    do  
	{
        pad += ch;
    }while(pad.length < num)
    return re.exec(pad + val);
}
    
function padright(val, ch, num)
{
   	var re = new RegExp("^.{" + num + "}");
    var pad = "";
    do 
	{
       	pad += ch;
    } while (pad.length < num)
    return re.exec(val + pad);
}

function trim(str)
{
   return str.replace(/^\s+|\s+$/g,'');
}   	

function isValidRUID(ruidObj)
{
		var ruid = ruidObj.value;
		
		if(trim(ruid).length == 0)
		{
	     	 alert('Please enter a valid RUID!\nValid numbers should have 9 digits in the form XXX00XXXX.\nYou did not enter any RUID.');
	     	 ruidObj.focus();
	       	return false;
	   	}
	   	
		if( !isRegEx('numeric',trim(ruid)))
	   	{
			alert('Please enter only Numbers for the RUID!\nDo Not use Dashes or Letters, just type the 9 digit RUID in the form XXX00XXXX.');
	     	 ruidObj.focus();
			return false;
		}
		
		if (trim(ruid).length < 9)
		{
		 	alert('Please enter a valid RUID!\nValid numbers should have 9 digits in the form XXX00XXXX.\nThe RUID you typed was too short.');
	     	 ruidObj.focus();
	      	return false;	
		}
		if (trim(ruid).length > 9)
		{
		 	alert('Please enter a valid RUID!\nValid numbers should have 9 digits in the form XXX00XXXX.\nThe RUID you typed was too long.');
	     	 ruidObj.focus();
	      	return false;	
		}
		/*
		var1 = (ruid).substring(3,5);
		if (var1 != "00")
		{
    	 	alert('Please enter a valid RUID!\nValid numbers should have 9 digits in the form XXX00XXXX.\nMake sure that ther 4th and 5th digits are "00".');
	     	 ruidObj.focus();
	       	return false;	
		}
		*/
		return ValidateVar(ruidObj, "ss4-5", "00", "", "Please enter a valid RUID!\nValid numbers should have 9 digits in the form XXX00XXXX.\nMake sure that ther 4th and 5th digits are \"00\".");
		
}

function xmlhttpPost(strURL, divId, strPost, windowmsg, xname, syncvar) 
{
 	if (xname=="" && divId !="")
 	{
		xname = divId;
	}
    var xmlHttpReq = false;
    var self = this;
    strPost = strPost + "&xname="+xname;
    
    if(!xname)
    {
		xname = "temp";
	}
	
	if(!windowmsg)
    {
		windowmsg = "";
	}
	
	if (!current[xname])
	{
		current[xname] = [];
	}
	
	current[xname]['divId']=divId;
	current[xname]['windowmsg']=windowmsg;
    // Mozilla/Safari
    if (window.XMLHttpRequest) 
	{
        self.xmlHttpReq = new XMLHttpRequest();
        if (self.xmlHttpReq.overrideMimeType) 
		{
           self.xmlHttpReq.overrideMimeType('text/xml');
       	}
    }
    // IE
    else if (window.ActiveXObject) 
	{
        self.xmlHttpReq = new ActiveXObject("Microsoft.XMLHTTP");
    }
    
    self.xmlHttpReq.open('POST', strURL, syncvar);
    self.xmlHttpReq.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
	if (syncvar==true)
    {
		self.xmlHttpReq.onreadystatechange = function() 
		{
	        if (self.xmlHttpReq.readyState == 4) 
			{	
		        reqres = self.xmlHttpReq.responseText;
				xname = readXname(reqres);
	
				if (reqres != current[xname]['value'])
				{	
					if (current[xname]['divId'])
						updatepage(reqres, current[xname]['divId']);	
					 
					if (current[xname]['windowmsg'] != "" && (current[xname]['value'])) 
					{	
						var tmptitle = document.title;
						blinking = true;
						flashWindowTitle(0, windowmsg);		
						//window.focus();
						//var junk = new ActiveXObject(\'WScript.Shell\').AppActivate(windowmsg);
						//setTimeout("setWindowTitle(\'"+tmptitle+"\')", 10000);					
					}
					current[xname]['value'] = reqres;
				}
				else
				{ 
					return false;
				}
				
	        }
	    }
	    self.xmlHttpReq.send(strPost);
	}
	else
	{
	 			self.xmlHttpReq.send(strPost);
		        reqres = self.xmlHttpReq.responseText;
				xname = readXname(reqres);
	
				if ((reqres != current[xname]['value']) || divId=='')
				{	
					if (current[xname]['divId'] && divId!='')
						updatepage(reqres, current[xname]['divId'], xname);	
					 
					if (current[xname]['windowmsg'] != "" && (current[xname]['value'])) 
					{	
						var tmptitle = document.title;
						blinking = true;
						flashWindowTitle(0, windowmsg);		
						//window.focus();
						//var junk = new ActiveXObject(\'WScript.Shell\').AppActivate(windowmsg);
						//setTimeout("setWindowTitle(\'"+tmptitle+"\')", 10000);					
					}
					//current[xname]['value'] = reqres;
				}
				else
				{ 
					return false;
				}		
	}    
    
    
    //alert (reqres);
    return reqres;
}


function updatepage(str, divId, xname)
{
	if (!current[xname])
	{
		current[xname] = [];
	}
	current[xname]['value'] = str;
	document.getElementById(divId).innerHTML = str;
	
}

function setWindowTitle(windowmsg)
{
 	document.title = windowmsg;	
}

function resetWindowTitle(windowmsg)
{
 	if (blinking == true)
 	{
		blinking = false
	}
	document.title = windowmsg; 
}

function flashWindowTitle(val, windowmsg)
{
	var speed = 500;
	var pos = val;

	var msg1  = "** "+windowmsg+" **";
	var msg2  = "-- "+windowmsg+" --";

	if(pos == 0){
		masg = msg1;
		pos = 1;
	}
	else if(pos == 1){
		masg = msg2;
		pos = 0;
	}

	document.title = masg;
	if (blinking == true)
	{
		timer = window.setTimeout("flashWindowTitle("+pos+", '"+windowmsg+"')",speed);	
	}
	else
	{
		
	}
	
}

var blinking = false;
var x = 10; 
var y = 1;
var reqres;
var current=[]; 

function setAjaxClock(xname, timeInt, strURL, divId, strPost, windowmsg, syncvar)
{ 	
 	if (!syncvar)
 	{
		syncvar = true;
	}
	
 	strFunc = "xmlhttpPost(" + strURL + ", " + divId + ", " + strPost +  ", " + windowmsg + ", " + xname +", " + syncvar + ")";
	var result = xmlhttpPost(strURL, divId, strPost, windowmsg, xname, false);	
	setInterval(strFunc, timeInt);
	return result;
}

function setAjaxCount(xname, iterations, strURL, divId, strPost, windowmsg, syncvar)
{ 	
  	if (!syncvar)
 	{
		syncvar = false;
	}	//strFunc = "xmlhttpPost(\'" + strURL + "\', \'" + divId + "\', \'" + strPost +  "\', \'" + windowmsg + "\', \'" + xname +"\')";
	var result = xmlhttpPost(strURL, divId, strPost, windowmsg, xname, syncvar);	
	return result;
}

function readXname(str)
{
	var arrPos = str.indexOf("<\!--");
	var endPos = str.indexOf("-->");
	return str.substring(arrPos+4, endPos) ;
}


function readAjaxReturn(str)
{	
 	var endPos = str.indexOf("-->");
	var retstr = str.substring(endPos+3);
	if (retstr.indexOf("Array(") > -1)
	{
		var JSarray = php2JSarray(retstr);
		return 	JSarray;
	}
	else
	{
		return retstr;		
	}

}


function php2JSarray(phpArray)
{	
	var JSarray = new Array();
	phpArray = phpArray.substring(phpArray.indexOf("Array(")+8, phpArray.length-3);

	var tmpStr='';
	var closeArray = -1;
	var Akey='';
	var Aval='';
	var arrow = phpArray.indexOf("] =>");
	var openBrace = phpArray.lastIndexOf("[", arrow);	
	while (arrow > -1)
	{
   		
		Akey = phpArray.substring(openBrace+1,arrow);
		
		openBrace = phpArray.indexOf("[", arrow+1);
		while(phpArray.substring(openBrace-1, openBrace)=="\\")
		{
			openBrace = phpArray.indexOf("[",openBrace+1);
		}
		if (openBrace == -1)
		{
			openBrace = phpArray.length +1;
		}
		
		if ((phpArray.substring(arrow+5, arrow+10))=="Array")
		{	
		 	closeArray = phpArray.indexOf(")",arrow+11);
		 	while((phpArray.substring(closeArray-1, closeArray))=="\\")
		 	{
				closeArray = phpArray.indexOf(")",closeArray+1);
			}
			JSarray[Akey] = new Array();
			JSarray[Akey] = php2JSarray(phpArray.substring(arrow+26, closeArray-6));
			arrow = closeArray+1;
			closeArray +=2;
			//return 	JSarray;	
		}
		else
		{
			tmpStr = (phpArray.substring(arrow+4, openBrace-1)).replace("\\)", ")");
			tmpStr = (tmpStr).replace("\\[", "[");
			JSarray[Akey] = tmpStr;
			//return retstr;		
		}
		arrow = phpArray.indexOf("] =>", arrow+1);	
		openBrace = phpArray.lastIndexOf("[", arrow);	
	}
	

	return (JSarray);
}



function ShowHideDIV(divID)
{
	if (document.getElementById(divID).style.display == '')
	{
		document.getElementById(divID).style.display = 'none';
	}
	else
	{
		document.getElementById(divID).style.display = '';
	}


}

function EnableDisable(val, formObj)
{	
	//if (formObj.disabled == true)
	if (val != "0")
	{
		formObj.disabled = false;
	}
	else
	{
		formObj.disabled = true;
	}


}

function checkboxArray(form, arrayName) 
{
 	var retval = new Array(); 
	for(var i=0; i < form.elements.length; i++) 
	{ 
	 	var el = form.elements[i]; 
		if(el.type == "checkbox" && el.name == arrayName && el.checked) 
		{ 
		 	retval.push(el.value); 
		} 
	}
	return retval; 
}


function print_r(theObj)
{
  var res = '';
  if(theObj.constructor == Array ||     theObj.constructor == Object)
  {
    res = res+("<ul>");
    for(var p in theObj)
	{
      if(theObj[p].constructor == Array || theObj[p].constructor == Object)
	  {
		res = res + ("<li>["+p+"] => "+typeof(theObj)+"</li>");
        res = res + ("<ul>");
        res = res + print_r(theObj[p]);
        res = res + ("</ul>");
      } 
	  else 
	  {
			res = res + ("<li>["+p+"] => "+theObj[p]+"</li>");
      }
    }
    res = res + ("</ul>")
    return res;
  }
}


function outputForms()
{
		   for(i=0; i<document.forms.length; i++)
			{
				for(j=0; j<document.forms[i].elements.length; j++)
				{
					 alert(document.forms[i].elements[j].name);
				}	
			   
   			}
   			return false;
}

function outputArray(Arr)
{	
 		if (Arr.length)
		{
			for(i=0; i<Arr.length; i++)
			{
				for(j=0; j<Arr[i].length; j++)
				{
					 alert((Arr[i])[j]);
				}	
				//print_r(Arr);
			   
   			}
   		}
   			return false;
}

function is_array(obj) {
   return (obj.constructor.toString().indexOf("Array") == -1)
}

/*
function LogoutTimeout()
{
		var logged_out = xmlhttpPostS("ajaxcall.php", "", "username='.$USER_NAME.'&Logout='.$_SESSION['LASTACCESS'].'", "", "xLogout");
		window.location = "loggedout.php";
}

*/

