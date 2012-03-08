chrome.extension.sendRequest({method: "getLocalStorage", key: "replace_words"}, goutItOut);

function goutItOut(response)
{
	dict = response.data.split(',');
	console.log(dict);
	
	jQuery("*").each(function () {
	if (jQuery(this).children().length == 0) {
		$currElem = jQuery(this);
		for(i=0;i<dict.length;i++)
		{
			reg = new RegExp($.trim(dict[i]), "i");
			$currElem.text($currElem.text().replace(reg, 'Gout'));
		}
	 }
	});
}
