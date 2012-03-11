// Get replace words from background.html and run main function on return.
chrome.extension.sendRequest({method: "getLocalStorage", key: "replace_words"}, goutItOut);

function goutItOut(response)
{
	if(response.data != "")
	{
		//Split on newline or comma
		dict = response.data.split(/\r\n|\r|\n|,/g);
	
		jQuery("*").each(function () {
		if (jQuery(this).children().length == 0) {
			$currElem = jQuery(this);
			for(i=0;i<dict.length;i++)
			{
				temp = $.trim(dict[i]);
				if(temp != "")
				{
					reg = new RegExp(temp, "i");
					$currElem.text($currElem.text().replace(reg, "Gout"));
				}
			}
		 }
		});
	}
	else
	{
		alert("Slow down Cowboy, Gouterizer has no words to replace! Please visit the Gouterizer options page so we can get to Gouterizing!");
	}
}
