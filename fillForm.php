<?php		
		 
// decode JSON string to PHP object
$a='a:6:{s:2:"FN";s:4:"Mike";s:2:"LN";s:7:"Ricardo";s:4:"pass";s:6:"likjnk";s:7:"tfradio";s:4:"true";s:14:"option_vehicle";s:3:"Car";s:15:"option_vehicle2";s:3:"Bus";}';
$b='a:1:{s:3:"car";a:2:{i:0;s:5:"volvo";i:1;s:8:"Mercedes";}}';
$c='a:1:{s:4:"text";s:7:"Testing";}';
//$d=$_GET['var1'];
//$e=$_COOKIE['name'];
//var_dump($_COOKIE['name']);
	
//$decoded = json_decode($a);

$decoded = unserialize($a);
$decoded2 = unserialize($b);
$decoded3 = unserialize($c);

print_r($decoded);
echo "<br>";
print_r($decoded2);
echo "<br>";
print_r($decoded3);


//$a = Array ( "FN" => "aaaaaaaa" ,"LN" => "sssssss" ,"pass" => "dddddddddd" ,"tfradio" => true ,"option_vehicle" => "Car" ,"option_vehicle1" => "Bike" ,"option_vehicle2" => "Bus" ,"car" => "Saab","text" => "rgrgrg");
//$a = serialize($a);

?>

<html>
<head>
<script src="js/jquery-1.7.js"></script>
<link rel="stylesheet" type="text/css" href="css/styles.css" />

<script language="javascript" type="text/javascript">

function populate(form)
{
	var input = form.find('input'),select = form.find('select'), textarea=form.find('textarea'), requestString = '';
	var result = new Array();
	var result2= new Array();
	var result3 = new Array();
	var item;
	var itemtype;
	
	for (x in decoded)
	{
		item = document.getElementById(x);
		itemtype = item.type;

    	if (itemtype=='text' || itemtype=='password')
		{
			item.value=decoded[x];
		}
		if(itemtype=='checkbox' || itemtype=='radio')
		{
			document.getElementById(x).checked=true;		
		} 
	}//for in x end		

	for(y in decoded2)		
	{
		item2 = document.getElementById(y);
		itemtype2 = item2.type;

		if(itemtype2=='select-multiple') 
		{
			//alert("hi");
			var carlist = document.forms.mainForm.car;
			for(j=0; j < carlist.length; j++)
			{
				for(u in decoded2[y])
				{
					if(document.getElementById("car").options[j].value==decoded2[y][u])
						document.getElementById(y).options[j].selected=true;
				}
			}
		}
	}//for in y end			
	
	for(z in decoded3)
	{	
		item3 = document.getElementById(z);
		itemtype3 = item3.type;
			
				//alert(x);
				//tmpname = $(input[i]).attr('name');
			    //if (($(input[i]).attr('type') !== 'checkbox') && ($(input[i]).attr('type') !== 'radio')) 
	
				//Dropdown
				
						//TEXT AREA
		if(itemtype3=='textarea')
	    {
    		item3.value=decoded3[z];
    	}
	}//for in z end 
 
}

</script>
</head>
<body onload="populate($('#mainFrom'));">
<form id='mainForm'>
	<div id="mainDiv">

		<fieldset>
			<label for="FN">First Name:</label>
			<input type="text" name="FN" id="FN" /> <br/>
			<label for="LN">Last Name:</label>
			<input type="text" name="LN" id="LN" /> <br/>
			<label for="pass">Password:</label>
			<input type="password" name="pass" id="pass"/> <br/>

			<label for="TF">True or False:</label>
			True<input type="radio" name="tfradio" id="tfradio" value="true" /><br>
			False<input type="radio" name="tfradio" id="tfradio" value="false"/>

			<label for="TF">Transportation:</label>
			<input type="checkbox" name="option_vehicle" id="option_vehicle" value="Car" /> Car<br />
			<input type="checkbox" name="option_vehicle1" id="option_vehicle1" value="Bike" /> Bike<br>
			<input type="checkbox" name="option_vehicle2" id="option_vehicle2" value="Bus" /> Bus   
		
			
			<label for="car">Car:</label>
			<select multiple size="3"  name="car" id="car">
				<option value="N/A" id="volvo">N/A</option>	
				<option value="volvo" id="volvo">Volvo</option>
				<option value="Saab" id="Saab" >Saab</option>
				<option value="Mercedes" id="Mercedes">Mercedes</option>
				<option value="Audi" id="Audi">Audi</option>
			</select>
			<br>
			<textarea rows="5" cols="50" name="text" id="text"></textarea>
		</fieldset>
	</div>
</form>
<input type="button" value="Get values!" id="button" onclick="populate($('#mainDiv'));"/>

<SCRIPT type='text/javascript'>
function unserialize (data)
{
    var that = this,
	utf8Overhead = function (chr)
	{
    var code = chr.charCodeAt(0);
		if (code < 0x0080) 
		{
			return 0;
        }
        if (code < 0x0800) 
		{
			return 1;
        }
			return 2;
    },
	error = function (type, msg, filename, line) 
	{
	throw new that.window[type](msg, filename, line);
    },
    read_until = function (data, offset, stopchr) 
	{
	var i = 2, buf = [], chr = data.slice(offset, offset + 1);
		while (chr != stopchr) 
		{
			if ((i + offset) > data.length) 
			{
			error('Error', 'Invalid');
			}
		buf.push(chr);
		chr = data.slice(offset + (i - 1), offset + i);
		i += 1;
		}
            return [buf.length, buf.join('')];
    },
    read_chrs = function (data, offset, length) 
	{
    var i, chr, buf;
	buf = [];
		for (i = 0; i < length; i++) 
		{
			chr = data.slice(offset + (i - 1), offset + i);
			buf.push(chr);
			length -= utf8Overhead(chr);
		}
	return [buf.length, buf.join('')];
	},
    _unserialize = function (data, offset) 
	{
    var dtype, dataoffset, keyandchrs, keys, 
	readdata, readData, ccount, stringlength, 
	i, key, kprops, kchrs, vprops, vchrs, value,
	chrs = 0, 
		typeconvert = function (x) 
		{
			return x;
		};
		if (!offset) 
		{
			offset = 0;
        }
    dtype = (data.slice(offset, offset + 1)).toLowerCase();
    dataoffset = offset + 2;
		switch (dtype) 
		{
			case 'i':
				typeconvert = function (x) 
				{
					return parseInt(x, 10);
				};
				readData = read_until(data, dataoffset, ';');
				chrs = readData[0];
				readdata = readData[1];
				dataoffset += chrs + 1;
				break;
			case 'b':
				typeconvert = function (x) 
				{
					return parseInt(x, 10) !== 0;
				};
				readData = read_until(data, dataoffset, ';');
				chrs = readData[0];
				readdata = readData[1];
				dataoffset += chrs + 1;
				break;
			case 'd':
				typeconvert = function (x) 
				{
					return parseFloat(x);
				};
				readData = read_until(data, dataoffset, ';');
				chrs = readData[0];
				readdata = readData[1];
				dataoffset += chrs + 1;
				break;
			case 'n':
				readdata = null;
				break;
			case 's':
				ccount = read_until(data, dataoffset, ':');
				chrs = ccount[0];
				stringlength = ccount[1];
				dataoffset += chrs + 2;

				readData = read_chrs(data, dataoffset + 1, parseInt(stringlength, 10));
				chrs = readData[0];
				readdata = readData[1];
				dataoffset += chrs + 2;
				if (chrs != parseInt(stringlength, 10) && chrs != readdata.length) 
				{
					error('SyntaxError', 'String length mismatch');
				}
				break;
			case 'a':
				readdata = {};
				keyandchrs = read_until(data, dataoffset, ':');
				chrs = keyandchrs[0];
				keys = keyandchrs[1];
				dataoffset += chrs + 2;

				for (i = 0; i < parseInt(keys, 10); i++) 
				{
					kprops = _unserialize(data, dataoffset);
					kchrs = kprops[1];
					key = kprops[2];
					dataoffset += kchrs;

					vprops = _unserialize(data, dataoffset);
					vchrs = vprops[1];
					value = vprops[2];
					dataoffset += vchrs;

					readdata[key] = value;
				}
                dataoffset += 1;
                break;
            default:
                error('SyntaxError', 'Unknown / Unhandled data type(s): ' + dtype);
                break;
        }
            return [dtype, dataoffset - offset, typeconvert(readdata)];
    };

    return _unserialize((data + ''), 0)[2];
}

var decoded3 = unserialize('<?php echo $c; ?>');
var decoded2 = unserialize('<?php echo $b; ?>');
var decoded = unserialize('<?php echo $a; ?>');

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

</SCRIPT>
</body>
</html>