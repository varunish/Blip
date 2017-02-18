navPanel = document.getElementById('navPanel')
navPanelLeft = -75

navToggleButtonOpen = document.getElementById('navToggleButtonOpen')
navToggleButtonOpen.addEventListener('click', navPanelOpen)

navPanelSearch = document.getElementById('navPanelSearch')
navPanelSearch.addEventListener('click', searchPanelOpen)

navToggleButtonClose = document.getElementById('navToggleButtonClose')
navToggleButtonClose.addEventListener('click', navPanelClose)

searchPanel = document.getElementById('searchPanel')
searchPanelOpacity = 0
searchPanelZIndex = -1

closeNavButton = document.getElementById('closeNavButton')
closeNavButton.addEventListener('click', searchPanelClose)

function navPanelOpen()
{
	navPanelOpenInterval = setInterval(function(){
		if (navPanelLeft < 0)
		{
			navPanelLeft += 1
			navPanel.style.left = navPanelLeft + "%"
		}
		else
		{
			clearInterval(navPanelOpenInterval)
		}
	}, 3)
} 

function navPanelClose()
{
	navPanelCloseInterval = setInterval(function(){
		if (navPanelLeft > -75)
		{
			navPanelLeft -= 1
			navPanel.style.left = navPanelLeft + "%"
		}
		else
		{
			clearInterval(navPanelCloseInterval)
		}
	}, 3)
} 

function searchPanelOpen()
{
	navPanelClose()
	searchPanelZIndex = 0
	searchPanel.style = "z-index: " + searchPanelZIndex
	searchPanelOpenInterval = setInterval(function(){
		if (searchPanelOpacity < 1)
		{
			searchPanelOpacity += 4/300
			searchPanel.style.opacity = searchPanelOpacity
		}
		else
		{
			clearInterval(searchPanelOpenInterval)
		}
	}, 3)
}

function searchPanelClose()
{
	searchPanelCloseInterval = setInterval(function(){
		if (searchPanelOpacity > 0)
		{
			searchPanelOpacity -= 4/300
			searchPanel.style.opacity = searchPanelOpacity
		}
		else
		{
			clearInterval(searchPanelCloseInterval)
		}
	}, 1)
	searchPanelZIndex = -1
	searchPanel.style = "z-index: " + searchPanelZIndex
}