<html>

<head>
<script src="js/jquery-1.7.js"></script>

<link rel="stylesheet" type="text/css" href="css/styles.css" />
</head>
<body>
<script type="text/javascript">

function createCookie(name,value,days) {
    if (days) {
        var date = new Date();
        date.setTime(date.getTime()+(days*24*60*60*1000));
        var expires = "; expires="+date.toGMTString();
    }
    else var expires = "";
    document.cookie = name+"="+value+expires+"; path=/; domain=.example.com";
}


function setCookie(c_name,value,exdays)
{
var exdate=new Date();
exdate.setDate(exdate.getDate() + exdays);
var c_value=escape(value) + ((exdays==null) ? "" : "; expires="+exdate.toUTCString());
document.cookie=c_name + "=" + c_value;
}


function array2json(arr) {
    var parts = [];
    var is_list = (Object.prototype.toString.apply(arr) === '[object Array]');

    for(var key in arr) {
    	var value = arr[key];
        if(typeof value == "object") { //Custom handling for arrays
            if(is_list) parts.push(array2json(value)); /* :RECURSION: */
            else parts[key] = array2json(value); /* :RECURSION: */
        } else {
            var str = "";
            if(!is_list) str = '"' + key + '":';

            //Custom handling for multiple data types
            if(typeof value == "number") str += value; //Numbers
            else if(value === false) str += 'false'; //The booleans
            else if(value === true) str += 'true';
            else str += '"' + value + '"'; //All other things

            parts.push(str);
        }
    }
    var json = parts.join(",");
    
    if(is_list) return '[' + json + ']';//Return numerical JSON
    return '{' + json + '}';//Return associative JSON
}

function serialize(mixed_value) {
    var _getType = function(inp) {
        var type = typeof inp, match;
        var key;
        if (type == 'object' && !inp) {
            return 'null';
        }
        if (type == "object") {
            if (!inp.constructor) {
                return 'object';
            }
            var cons = inp.constructor.toString();
            match = cons.match(/(\w+)\(/);
            if (match) {
                cons = match[1].toLowerCase();
            }
            var types = ["boolean", "number", "string", "array"];
            for (key in types) {
                if (cons == types[key]) {
                    type = types[key];
                    break;
                }
            }
        }
        return type;
    };
    var type = _getType(mixed_value);
    var val, ktype = '';

    switch (type) {
        case "function":
            val = "";
            break;
        case "null":
        case "undefined":
            val = "N";
            break;
        case "boolean":
            val = "b:" + (mixed_value ? "1" : "0");
            break;
        case "number":
            val = (Math.round(mixed_value) == mixed_value ? "i" : "d") + ":" + mixed_value;
            break;
        case "string":
            val = "s:" + mixed_value.length + ":\"" + mixed_value + "\"";
            break;
        case "array":
        case "object":
            val = "a";
            var count = 0;
            var vals = "";
            var okey;
            var key;
            for (key in mixed_value) {
                ktype = _getType(mixed_value[key]);
                if (ktype == "function") {
                    continue;
                }

                okey = (key.match(/^[0-9]+$/) ? parseInt(key, 10) : key);
                vals += serialize(okey) +
                        serialize(mixed_value[key]);
                count++;
            }
            val += ":" + count + ":{" + vals + "}";
            break;
    }
    if (type != "object" && type != "array") {
        val += ";";
    }
    return val;
}


function print_r(theObj)
{
  var res='';
  if(theObj.constructor == Array || theObj.constructor == Object)
  {
   
    for(var p in theObj)
	{
      if(theObj[p].constructor == Array || theObj[p].constructor == Object)
	  {
		res += ("["+p+"]=>"+typeof(theObj)+", ");
       
        res +=print_r(theObj[p]);
    
      } 
	  else 
	  {
			res +=("["+p+"] => "+theObj[p] + ", ");
      }
    }
    return res;
  }
}


function buildRequestStringData(form) 
{

	var result=new Array();
	var result2=new Array();
	var result3 =new Array();
	var tmpname;
	var tmpname2;
	var tmpname3;
	//not sure if calling it resets array, put this for reset
	result.length = 0;
	result2.length=0;
	result3.length=0;

	
    var input = form.find('input'),select = form.find('select'), textarea=form.find('textarea'), requestString = '';
//var a;
for (var i = 0; i < input.length; i++) 
{	
tmpname = $(input[i]).attr('name');



    if (($(input[i]).attr('type') !== 'checkbox') && ($(input[i]).attr('type') !== 'radio')) 
	{
       	result[tmpname]=$(input[i]).val(); 
var cname_temp=result[tmpname];
	
	if(tmpname=='FN'){
		var c_name=cname_temp+" ";
	}
	if(tmpname=='LN'){
		c_name+=cname_temp;
		
	}
	
 //	if(i==0){
   //    	a = array2json([tmpname+":"+result[tmpname]]);
 //	}
 	//a = a + array2json([tmpname+":"+result[tmpname]]);

    	} 
        else 
 		{
     		if($(input[i]).attr('type') !== 'checkbox')
         	{
     			if ($(input[i]).attr('checked')) 
         		{
             	result[tmpname]=$(input[i]).val();

             	a += array2json([tmpname+":"+result[tmpname]]);
}
	  			
            }
			if($(input[i]).attr('type') == 'checkbox')
			{
     			if ($(input[i]).attr('checked'))
         		{ 
     			result[tmpname]=$(input[i]).val();

   	 a +=array2json([tmpname+":"+result[tmpname]]);
	
	

     			}
     		}
 		}
}
    
    //for dropdown
    var d;
  
	for (var j = 0; j < select.length; j++) 
	{
		tmpname2 = $(select[j]).attr('name');
		result2[tmpname2]=$(select[j]).val();
	}

	//textarea
	for (var k = 0; k < textarea.length; k++) 
	{
		tmpname3 = $(textarea[k]).attr('name');
		result3[tmpname3]=$(textarea[k]).val(); 		
	}

	var variables = "";
	//	for (var name in document.forms.mainForm){
		//    variables += name + ", ";
		  //  alert(variables);
		//}


	document.cookie= 'name='+c_name;
	var d = result+result2+result3;
	var a=serialize(result);
	var b=serialize(result2);
	var c=serialize(result3);
	//var a=phpSerialize(result);
	//var b=phpSerialize(result2);
	//var c=phpSerialize(result3);
	//var a= array2json(result);
	//var b= array2json(result2);
	//var c= array2json(result3);	
    runAjax(a,b,c);
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



var request;
function runAjax(json, json2, json3)
{
    $.ajax
	({
    	type: 'POST',
    	url: "saveForm.php?json="+json+"&json2="+json2+"&json3="+json3,
    	data: "",
    	success: function(result, result2, result3) 
		{
			alert(result + result2 + result3);//     does nothing
    	}
    });
    
}
function getHTTPObject()
{
    var xhr = false;
    if (window.XMLHttpRequest)
    {
        xhr = new XMLHttpRequest();
    } 
    else if (window.ActiveXObject) 
	{
        try
        {
        xhr = new ActiveXObject("Msxml2.XMLHTTP");
        }
        catch(e)
        {
            try
            {
            xhr = new ActiveXObject("Microsoft.XMLHTTP");
            }
            catch(e)
            {
            xhr = false;
            }
        }
    }
    return xhr;
}

</script>
<h2>Testing</h2>
<br> 

<script type="text/javascript">
//for (g in this)
//{
//	alert(this.value);  
	
//}
</script>

<FORM id='mainForm' method='POST'>
<div id="mainDiv">

<fieldset> 
	<label for="FN">First Name:</label>
	<input type="text" name="FN" /> 
	<br/>
	<label for="LN">Last Name:</label>
    <input type="text" name="LN" /> 
    <br/>
	<label for="pass">Password:</label>
    <input type="password" name="pass" /> 
    <br/>	
	<label for="TF">True or False:</label>
True<input type="radio" name="tfradio" value="true" />
<br>
False<input type="radio" name="tfradio" value="false"/>
	<label for="TF">Transportation:</label>
	<input type="checkbox" name="option_vehicle" value="Car" /> Car
	<br />
	<input type="checkbox" name="option_vehicle1" value="Bike" /> Bike
	<br>
	<input type="checkbox" name="option_vehicle2" value="Bus" /> Bus   
	<label for="car">Car:</label>	
<select multiple size="3"  name="car">
	<option value="N/A" id="volvo">N/A</option>	
	<option value="volvo" id="volvo">Volvo</option>
	<option value="Saab" id="Saab" >Saab</option>
	<option value="Mercedes" id="Mercedes">Mercedes</option>
	<option value="Audi" id="Audi">Audi</option>
</select>
	<br>
	<textarea rows="5" cols="50" name="text"></textarea>
</fieldset>
</div>
</FORM>

<input type="button" value="Get values!" id="button" onclick="buildRequestStringData($('#mainDiv'));"/>

</body>
</html>