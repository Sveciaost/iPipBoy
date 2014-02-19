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
$$('#stats').swipeDown(function(){
	$$('#stats').style('display','none');
	$$('#changes').style('display','block');
});
});

// Define lists to be auto-populated by using properties of objects and storing within arrays.
lists = new Object();
lists.special = [
	['Strength','Strength is a measure of your raw physical power. It affects how much you can carry, and determines the effectiveness of all melee attacks.'],
	['Perception','A high Perception grants a bonus to the Explosives, Lockpick and Energy Weapons skills, and determines when red compass markings appear (which indicate threats).'],
	['Endurance','Endurance is a measure of your overall physical fitness. A high Endurance gives bonuses to health, environmental resistances, and the Big Guns and Unarmed skills.'],
	['Charisma','Having a high Charisma will improve people&apos;s disposition of you, and give bonuses to both the Barter and Speech skills.'],
	['Intelligence','Intelligence affects the Science, Repair and Medicine skills. The higher your Intelligence, the more Skill Points you&apos;ll be able to distribute when you level up.'],
	['Agility','Agility affects your Small Guns and Sneak skills, and the number of Action Points available for V.A.T.S.'],
	['Luck','Raising your Luck will raise all of your skills a little. Having a high Luck will also improve your critical chance with all weapons.']
]
lists.skills = [
	['Barter','The Barter skill affects the prices you get for buying and selling items. In general, the higher your Barter skill, the lower your prices on purchased items.'],
	['Big Guns','The Big Guns skill determines your combat effectivness with all oversized weapons such as the Fat Man, Missile Launcher, Minigun, and Gatling Laser.'],
	['Energy Weapons','The Energy Weapons skill determines your effectiveness with weapons such as the Laser Pistol, Laser Rifle, Plasma Rifle, and Plasma Pistol.'],
	['Explosives','The Explosives skill determines the power of any set mines, the ease of disarming any hostile mines, and the effectiveness of any thrown grenade.'],
	['Lockpick','The Lockpick skill is used to open locked doors and containers.'],
	['Medicine','The Medicine skill determines how many Hit Points you&apos;ll replenish upon using a Stimpak, and the effectiveness of Rad-X and RadAway.'],
	['Melee Weapons','The Melee Weapons skill determines your effectiveness with any melee weapon, from the simple lead pipe all the way up to the high-tech Super Sledge.'],
	['Repair','The Repair skill allows you to maintain any weapons and apparel. In addition, the higher your Repair skill, the better the starting condition of any custom-made weapons.'],
	['Science','The Science skill represents your combined scientific knowledge, and is primarily used to hack restricted computer terminals.'],
	['Small Guns','Small Guns determines your effectiveness with all conventional projectile weapons, such as the 10mm pistol, BB Gun, and Combat Shotgun.'],
	['Sneak','The higher your Sneak skill, the easier it is to remain undetected, steal and item, or pick someone&apos;s pocket. Successfully attack while undetected grants an automatic critical hit.'],
	['Speech','The Speech skill governs how much you cna influence someone through dialogue, and gain access to information they might otherwise not want to share.'],
	['Unarmed','The Unarmed skill is used for fighting without a weapon, or with the few weapons speciafically designed for hand-to-hand combat, like Brass Knuckles, or the Power Fist.']
];

// Get list of lists
listProps = Object.getOwnPropertyNames(lists);

// Remove spaces from name for proper IDs
for (i=0; i<listProps.length; i++){
	for (j=0; j<lists[listProps[i]].length; j++){
		lists[listProps[i]][j][2] = lists[listProps[i]][j][0].replace(/[^a-zA-Z]+/g, '');
	}
}

// Populate the generated lists
function populate(){
	for (i=0; i<listProps.length; i++){
		var cat = listProps[i];
		var pagelist = cat + 'pages';
		var navlist = cat + 'navlist';
		document.getElementById(cat).innerHTML += ('<div class="cont list"><div class="listnav" id="' + navlist + '"></div><div class="listpages" id="' + pagelist + '"></div></div>');
		var pageId = document.getElementById(pagelist);
		var navId = document.getElementById(navlist);
		var first = true;
		// fill the nav list
		for (j=0; j<lists[listProps[i]].length; j++){
			var page = lists[listProps[i]][j][0];
			var id = lists[listProps[i]][j][2];
			var desc = lists[listProps[i]][j][1];
			firstText = (first) ? ' class="here"' : '';
			navId.innerHTML += ('<dl id="' + id + 'nav" onclick="listNav(\'' + id + '\',\'' + cat + '\')"' + firstText + '><dt>' + page + '</dt><dd>1</dd></dl>');
			var first = false;
		};
		var first = true;
		// fill the pages
		for (j=0; j<lists[listProps[i]].length; j++){
			var page = lists[listProps[i]][j][0];
			var id = lists[listProps[i]][j][2];
			var desc = lists[listProps[i]][j][1];
			firstText = (first) ? ' class="here"' : '';
			pageId.innerHTML += ('<div id="' + id + '"' + firstText + '>\
			<div class="photo"><img src="' + cat + '/' + id + '.png"/></div>\
			<div class="desc"><span class="bord"></span>\
			<span class="text">' + desc +'</span></div>');
			var first = false;
		};
	};
};
// Lists Navigation
function listNav(id,cat){
	var id = String(id);
	var cat = String(cat);
	// Clear all class here's
	var allNav = document.getElementById(cat).getElementsByTagName("dl");
	for ( i=0; i < allNav.length; i++ ){allNav[i].setAttribute('class','');}
	for ( i=0; i < lists[cat].length; i++ ){document.getElementById(lists[cat][i][2]).setAttribute('class','');}
	// Set them for the right elements.
	document.getElementById(id).setAttribute('class','here');
	document.getElementById(id+"nav").setAttribute('class','here');
} 


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