window.onload = screenSize;
function displayMenu(width)
{
	
	var windowCss = document.getElementById("windowCSS");
	if(windowCss.getAttribute("href") == "style3.css")
	{
		windowCss.setAttribute("href","style2.css");
	}
	else
	{
	windowCss.setAttribute("href","style3.css");
	}
}
function screenSize()
{
	var windowcss = document.getElementById("windowCSS");
	var windowSize;
	if(window.matchMedia("(min-width: 1008px)").matches)
	{
	    windowcss.href = "style.css";
		windowSize = window.matchMedia("(min-width: 1008px)")
	}
	else if (window.matchMedia("(max-width: 640px)").matches)
	{
		windowcss.setAttribute("href","style2.css");
		windowSize = window.matchMedia("(max-width: 640px)")
	}
    else if (window.matchMedia("screen and (min-width: 641px) and (max-width: 1007px)").matches)
	{
	    windowcss.href = "style4.css";
		windowSize = window.matchMedia("(min-width: 640px) and (max-width: 1008px)")
	}
	windowSize.addEventListener("change", function() {screenSize();});
}
function redirect2()
{
	window.open("https://github.com/hassaanafzal-ha","_blank");
}
function redirect3()
{
	window.open("https://support.google.com/","_blank");
}
function redirect4()
{
	window.open("https://byjus.com/english/articles-in-english/","_blank");
}