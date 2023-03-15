<?php

namespace Database\Seeders;

$civilizationData = [
	[
		"name" => "Aztecs",
		"expansion" => "The Conquerors",
		"army_type" => "Infantry and Monk",
		"unique_unit" => "Jaguar Warrior",
		"unique_tech" => "Garland Wars",
		"team_bonus" => "Relics generate +33% gold",
		"civilization_bonus" => [
			"Villagers carry +5",
			"Military units created 15% faster",
			"+5 Monk hit points for each Monastery technology",
			"Loom free"
		]
	],
	[
		"name" => "Britons",
		"expansion" => "Age of Kings",
		"army_type" => "Foot Archer",
		"unique_unit" => "Longbowman",
		"unique_tech" => "Yeomen",
		"team_bonus" => "Archery Ranges work 20% faster",
		"civilization_bonus" => [
			"Town Centers cost -50% wood upon reaching the Castle Age",
			"Foot archers (excluding Skirmishers) have +1 range in Castle Age and +1 in Imperial Age (for +2 total)",
			"Shepherds work 25% faster"
		]
	],
	[
		"name" => "Byzantines",
		"expansion" => "Age of Kings",
		"army_type" => "Defensive",
		"unique_unit" => "Cataphract",
		"unique_tech" => "Logistica",
		"team_bonus" => "Monks +50% heal speed",
		"civilization_bonus" => [
			"Buildings (except gates) have +10% HP in Dark Age / +20% HP in Feudal Age  / +30% in Castle Age / +40% in Imperial Age",
			"Spearman skirmisher and camel lines cost 25% less",
			"Fire Ships attack 20% faster",
			"Imperial Age costs -33%",
			"Town Watch is free"
		]
	],
	[
		"name" => "Celts",
		"expansion" => "Age of Kings",
		"army_type" => "Infantry",
		"unique_unit" => "Woad Raider",
		"unique_tech" => "Furor Celtica",
		"team_bonus" => "Siege Workshops work 20% faster",
		"civilization_bonus" => [
			"Infantry moves 15% faster",
			"Lumberjacks work 15% faster",
			"Siege weapons reload 20% faster",
			"Sheep cannot be stolen if within one Celt unit's line of sight"
		]
	],
	[
		"name" => "Chinese",
		"expansion" => "Age of Kings",
		"army_type" => "Archer",
		"unique_unit" => "Chu Ko Nu",
		"unique_tech" => "Rocketry",
		"team_bonus" => "Farms provide +45 food",
		"civilization_bonus" => [
			"Start game with 3 extra villagers but -50 wood and -200 food",
			"Technologies cost -10% in Feudal Age/ -15% in Castle Age/-20% in Imperial Age",
			"Town Centers support 10 population instead of 5",
			"Demolition Ships have +50% HP"
		]
	],
	[
		"name" => "Franks",
		"expansion" => "Age of Kings",
		"army_type" => "Cavalry",
		"unique_unit" => "Throwing Axeman",
		"unique_tech" => "Bearded Axe",
		"team_bonus" => "Knights have +2 line of sight",
		"civilization_bonus" => [
			"Castles are 25% cheaper",
			"Knights have +20% HP",
			"Farm upgrades are free (Mill is required to receive bonus)"
		]
	],
	[
		"name" => "Goths",
		"expansion" => "Age of Kings",
		"army_type" => "Infantry",
		"unique_unit" => "Huskarl",
		"unique_tech" => "Anarchy;Perfusion",
		"team_bonus" => "Barracks operate 20% faster",
		"civilization_bonus" => [
			"Infantry cost 35% less (starting in Feudal Age)",
			"Infantry have +1 attack against buildings",
			"Villagers have +5 attack versus wild boar",
			"Hunters carry +15 meat",
			"+10 to population limit in Imperial Age"
		]
	],
	[
		"name" => "Huns",
		"expansion" => "The Conquerors",
		"army_type" => "Cavalry",
		"unique_unit" => "Tarkan",
		"unique_tech" => "Atheism",
		"team_bonus" => "Stables are 20% faster",
		"civilization_bonus" => [
			"Houses are not required to support population",
			"Start game with -100 Wood",
			"Cavalry Archers cost -25% in Castle Age/ -30% in Imperial Age",
			"Trebuchets are 35% more accurate."
		]
	],
	[
		"name" => "Japanese",
		"expansion" => "Age of Kings",
		"army_type" => "Infantry",
		"unique_unit" => "Samurai",
		"unique_tech" => "Kataparuto",
		"team_bonus" => "Galleys have +50% line of sight",
		"civilization_bonus" => [
			"Fishing Ships have 2x HP and +2 pierce armor",
			"Fishing Ships work +5% faster in Dark Age/ +10% in Feudal Age/ +15% in Castle Age/ +20% in Imperial Age",
			"Lumber Camps / Mining Camps / Mills are 50% cheaper",
			"Infantry attack 25% faster (starting in Feudal Age)"
		]
	],
	[
		"name" => "Koreans",
		"expansion" => "The Conquerors",
		"army_type" => "Tower and naval",
		"unique_unit" => "War Wagon;Turtle Ship",
		"unique_tech" => "Shinkichon",
		"team_bonus" => "Mangonel line has +1 range",
		"civilization_bonus" => [
			"Villagers have +3 line of sight",
			"Stone miners work 20% faster",
			"Guard Tower and Keep upgrades are free",
			"Towers (except bombard towers) have +1 range in Castle Age/ +2 in Imperial Age"
		]
	],
	[
		"name" => "Mayans",
		"expansion" => "The Conquerors",
		"army_type" => "Archer",
		"unique_unit" => "Plumed Archer",
		"unique_tech" => "El Dorado",
		"team_bonus" => "Walls are 50% cheaper",
		"civilization_bonus" => [
			"Start game with 1 extra villager but -50 food",
			"Natural resources last 20% longer",
			"Archers cost -10% in Feudal Age/ -20% in Castle Age/ -30% in Imperial Age"
		]
	],
	[
		"name" => "Mongols",
		"expansion" => "Age of Kings",
		"army_type" => "Cavalry Archer",
		"unique_unit" => "Mangudai",
		"unique_tech" => "Drill",
		"team_bonus" => "Scout line has +2 Line of sight",
		"civilization_bonus" => [
			"Cavalry Archers reload 20% faster",
			"Light Cavalry and Hussars have +30% HP",
			"Hunters work 50% faster"
		]
	],
	[
		"name" => "Persians",
		"expansion" => "Age of Kings",
		"army_type" => "Cavalry",
		"unique_unit" => "War Elephant",
		"unique_tech" => "Mahouts",
		"team_bonus" => "Knights have +2 attack versus Archers",
		"civilization_bonus" => [
			"Start game with +50 wood and food",
			"Town Center and Docks have 2x HP",
			"Town Centers and Docks operate +10% faster in Feudal Age/ +15% in Castle Age/ +20% in Imperial Age"
		]
	],
	[
		"name" => "Saracens",
		"expansion" => "Age of Kings",
		"army_type" => "Camel and naval",
		"unique_unit" => "Mameluke",
		"unique_tech" => "Zealotry",
		"team_bonus" => "Foot archers have +2 attack bonus against buildings",
		"civilization_bonus" => [
			"Market trade cost is only 5%",
			"Transport Ships have 2x HP and carry capacity",
			"Galleys attack 20% faster",
			"Cavalry Archers have +4 attack bonus against buildings"
		]
	],
	[
		"name" => "Spanish",
		"expansion" => "The Conquerors",
		"army_type" => "Gunpowder and Monk",
		"unique_unit" => "Conquistador;Missionary",
		"unique_tech" => "Supremacy",
		"team_bonus" => "Trade units generate +33% Gold",
		"civilization_bonus" => [
			"Villagers construct buildings 30% faster",
			"Blacksmith upgrades do not cost any gold",
			"Cannon Galleons benefit from Ballistics (less reload time and more accuracy)",
			"Hand Cannoneers and Bombard Cannons reload 15% faster"
		]
	],
	[
		"name" => "Teutons",
		"expansion" => "Age of Kings",
		"army_type" => "Infantry",
		"unique_unit" => "Teutonic Knight",
		"unique_tech" => "Crenellations",
		"team_bonus" => "Units are more resistant to conversion",
		"civilization_bonus" => [
			"Monks have 2x healing range",
			"Towers can garrison 2x units (more arrows)",
			"Murder Holes is free",
			"Farms cost 33% less",
			"Town Centers have +1 attack and +5 line of sight"
		]
	],
	[
		"name" => "Turks",
		"expansion" => "Age of Kings",
		"army_type" => "Gunpowder",
		"unique_unit" => "Janissary",
		"unique_tech" => "Artillery",
		"team_bonus" => "Gunpowder units are created 20% faster",
		"civilization_bonus" => [
			"Gunpowder Units have +25% HP",
			"Gunpowder technologies cost 50% less",
			"Chemistry is free",
			"Gold miners work 15% faster",
			"Light Cavalry and Hussar upgrades are free"
		]
	],
	[
		"name" => "Vikings",
		"expansion" => "Age of Kings",
		"army_type" => "Infantry and naval",
		"unique_unit" => "Berserk;Longboat",
		"unique_tech" => "Berserkergang",
		"team_bonus" => "Docks are 25% cheaper",
		"civilization_bonus" => [
			"Warships cost 20% less",
			"Infantry have +10% HP in Feudal Age/ +15% in Castle Age/ +20% in Imperial Age",
			"Wheelbarrow and Hand Cart are free"
		]
	],
	[
		"name" => "Berbers",
		"expansion" => "African Kingdoms",
		"army_type" => "Calvary and Naval",
		"unique_unit" => "Camel Archer;Genitour",
		"unique_tech" => "Kasbah;Maghrabi Camels",
		"team_bonus" => "Genitour availible at Archery Range",
		"civilization_bonus" => [
			"Villagers move +10% faster",
			"Stable units cost -20% (starting in Castle Age)",
			"Ships move +10% faster"
		]
	],
	[
		"name" => "Burmese",
		"expansion" => "Rise of Rajas",
		"army_type" => "Monk and Elephant",
		"unique_unit" => "Arambai",
		"unique_tech" => "Howdah;Manipur Cavalry",
		"team_bonus" => "Relics are visible on the min map",
		"civilization_bonus" => [
			"Free lumber camp upgrades",
			"Infantry +1 Attacks per Age (starting in Feudal Age)",
			"Monastery techs 50% cheaper"
		]
	],
	[
		"name" => "Ethiopians",
		"expansion" => "African Kingdoms",
		"army_type" => "Archer",
		"unique_unit" => "Shotel Warrior",
		"unique_tech" => "Royals Heirs;Torsion Engines",
		"team_bonus" => "Towers and Outposts +3 LOS",
		"civilization_bonus" => [
			"Archers move +15% faster",
			"Receive +100 gold and +100 food when advancing to the next age",
			"Pikemen and Halberdier upgrades free"
		]
	],
	[
		"name" => "Goths",
		"expansion" => "Age of Kings",
		"army_type" => "Infantry",
		"unique_unit" => "Huskarl",
		"unique_tech" => "Anarchy;Perfusion",
		"team_bonus" => "Barracks operate 20% faster",
		"civilization_bonus" => [
			"Infantry cost 35% less (starting in Feudal Age)",
			"Infantry have +1 attack against buildings",
			"Villagers have +5 attack versus wild boar",
			"Hunters carry +15 meat",
			"+10 to population limit in Imperial Age"
		]
	],
	[
		"name" => "Incas",
		"expansion" => "Forgotten Empires",
		"army_type" => "Infantry",
		"unique_unit" => "Kamayuk; Slinger",
		"unique_tech" => "Couriers;Andean Sling",
		"team_bonus" => "Farms built 50% faster",
		"civilization_bonus" => [
			"Start with a free llama",
			"Villagers affected by Blacksmith upgrades",
			"Houses support 10 population",
			"Buildings cost -15% stone",
			"Scout Cavalry is replaced by Eagle Warrior"
		]
	],
	[
		"name" => "Indians",
		"expansion" => "Forgotten Empires",
		"army_type" => "Gunpowder and Cavalry",
		"unique_unit" => "Elephant Archer;Imperial Camel",
		"unique_tech" => "Sultans;Shatagni",
		"team_bonus" => "Camels have +5 attack vs. buildings",
		"civilization_bonus" => [
			"Villagers cost -10% Dark, -15% Feudal, -20% Castle, -25% Imperial"
		]
	],
	[
		"name" => "Italians",
		"expansion" => "Forgotten Empires",
		"army_type" => "Archer and naval",
		"unique_unit" => "Genoese Crossbowman;Condottiero",
		"unique_tech" => "Pavise;Silk Road",
		"team_bonus" => "Condottiero also available in allies' barracks in Imperial Age (once you have built a castle)",
		"civilization_bonus" => [
			"Advance to next age costs -15%",
			"All dock tech costs -50%",
			"Fishing ship cost -15 wood",
			"Gunpowder unit costs -25%"
		]
	],
	[
		"name" => "Japanese",
		"expansion" => "Age of Kings",
		"army_type" => "Infantry",
		"unique_unit" => "Samurai",
		"unique_tech" => "Kataparuto",
		"team_bonus" => "Galleys have +50% line of sight",
		"civilization_bonus" => [
			"Fishing Ships have 2x HP and +2 pierce armor",
			"Fishing Ships work +5% faster in Dark Age/ +10% in Feudal Age/ +15% in Castle Age/ +20% in Imperial Age",
			"Lumber Camps / Mining Camps / Mills are 50% cheaper",
			"Infantry attack 25% faster (starting in Feudal Age)"
		]
	],
	[
		"name" => "Khmer",
		"expansion" => "Rise of Rajas",
		"army_type" => "Siege and Elephant Civilzation",
		"unique_unit" => "Ballista Elephant",
		"unique_tech" => "Tusk Swords;Double Crossbow",
		"team_bonus" => "Scorpions have +1 range",
		"civilization_bonus" => [
			"Prereq buildings aren't required to advance to further ages or unlock other buildings",
			"Battle Elephants are +15% faster",
			"Villagers can garrison in Houses"
		]
	],
	[
		"name" => "Magyars",
		"expansion" => "Forgotten Empires",
		"army_type" => "Calvary Infantry",
		"unique_unit" => "Magyar Huszar",
		"unique_tech" => "Mercenaries;Recursive Bow",
		"team_bonus" => "Foot archers +2 LOS",
		"civilization_bonus" => [
			"Villagers can kill wolves with 1 strike",
			"Forging, Iron Casting, Blast Furnace are free",
			"Scout Cavalry, Light Cavalry, Hussar cost -15%"
		]
	],
	[
		"name" => "Malians",
		"expansion" => "African Kingdoms",
		"army_type" => "Infantry",
		"unique_unit" => "Gbeto",
		"unique_tech" => "Tigui;Farimba",
		"team_bonus" => "University researches +80% faster",
		"civilization_bonus" => [
			"Buildings cost -15% wood",
			"Barracks unit +1 pierce armor per age",
			"Gold mining upgrades free"
		]
	],
	[
		"name" => "Portuguese",
		"expansion" => "African Kingdoms",
		"army_type" => "Naval and Gunpowder",
		"unique_unit" => "Caravel;Organ Gun",
		"unique_tech" => "Carrack;Arquebus",
		"team_bonus" => "Free cartography from Dark Age",
		"civilization_bonus" => [
			"All units costs -15% gold",
			"Ships +10% HP",
			"Can build Feitoria in Imperial Age"
		]
	],
	[
		"name" => "Slavs",
		"expansion" => "Forgotten Empires",
		"army_type" => "Cavalry",
		"unique_unit" => "Boyars",
		"unique_tech" => "Orthodoxy;Druzhina",
		"team_bonus" => "Military buildings provide +5% population",
		"civilization_bonus" => [
			"Farmers works 15% faster",
			"Siege weapons 15% cheaper",
			"Tracking free"
		]
	],
	[
		"name" => "Vietnamese",
		"expansion" => "Rise of Rajas",
		"army_type" => "Archer",
		"unique_unit" => "Rattan Archer",
		"unique_tech" => "Chatras;Paper Money",
		"team_bonus" => "Have access to Imperial Skirmisher Upgrade",
		"civilization_bonus" => [
			"Reveals enemy positions at game start",
			"Archery Range units have +10% HP in Feudal Age, +15% in Castle Age, and +20% in Imperial Age. Does not stack."
		]
	]
];



return $civilizationData;