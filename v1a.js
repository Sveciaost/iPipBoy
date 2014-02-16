$$(document).ready(function() {
$$('#stats').swipeLeft(function(){
	$$('#stats').style('display','none');
	$$('#items').style('display','block');
});
$$('#stats').swipeRight(function(){
	$$('#stats').style('display','none');
	$$('#data').style('display','block');
});
$$('#items').swipeLeft(function(){
	$$('#items').style('display','none');
	$$('#data').style('display','block');
});
$$('#items').swipeRight(function(){
	$$('#items').style('display','none');
	$$('#stats').style('display','block');
});
$$('#data').swipeLeft(function(){
	$$('#data').style('display','none');
	$$('#stats').style('display','block');
});
$$('#data').swipeRight(function(){
	$$('#data').style('display','none');
	$$('#items').style('display','block');
});
});

function subNav(page,place){
	var page = String(page);
	var place = String(place);
	// Hide Everything
	var navLinks = document.getElementById(place+'navi').getElementsByTagName("div");
	for ( i=0; i < navLinks.length; i++ ){navLinks[i].setAttribute('class','');}

	if (place=='stats'){
	var pages=['status','special','skills','perks','general'];
	}
	if (place=='items'){
	var pages=['weapons','apparel','aid','misc','ammo'];
	}
	if (place=='data'){
	var pages=['localmap','worldmap','quests','notes','radio'];
	}
	for ( i=0; i < pages.length; i++ ){document.getElementById(pages[i]).setAttribute('class','');}
	// Show Page
	document.getElementById(page).setAttribute('class','here');
	document.getElementById(page+"nav").setAttribute('class','here');
}
function listNav(item,where){
	var item = String(item);
	var where = String(where);
	
	/* NEED to Go down to listpages */
	var listLinks = document.getElementById(where).getElementsByTagName("dl");
	for ( i=0; i < listLinks.length; i++ ){listLinks[i].setAttribute('class','');}

	if (where=='skills'){
	var items=['barter','bigguns','energyweapons','explosives','lockpick','medicine','meleeweapons','repair','science','smallguns','sneak','speech','unarmed'];
	}
	if (where=='special'){
	var items=['strength','perception','endurance','charisma','intelligence','agility','luck'];
	}
	for ( i=0; i < items.length; i++ ){document.getElementById(items[i]).setAttribute('class','');}
	
	document.getElementById(item).setAttribute('class','here');
	document.getElementById(item+"nav").setAttribute('class','here');
}