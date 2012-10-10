$(document).ready(function(){
	
	var myFormObj = {};
	

	$('#originalForm').link(myFormObj).find('input[type=*]').trigger('change');
	
	var buttons = $('#originalForm input[type=button]');
	
	buttons.eq(0).click(function(){
		outputData('The myFormObj variable',myFormObj);
	});
	

	

	function outputData(title,obj){
		try{	
			$('#output').html(formatObject(obj));
		
		}
		catch(e){
			$('#output').html('The output cannot be displayed in your browser');
		}
	}
	
	function formatObject(obj){
		return JSON.stringify(obj).replace(/,/g,',\n    ').replace('{','{\n    ').replace('}','\n}')
	}
	
});