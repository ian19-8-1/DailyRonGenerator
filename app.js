'use strict';



var seasons = ["Autumn", "Winter", "Spring", "Summer"];
var steps = [
    "Immediately after you use your Fey Step, up to two creatures of your choice that you can see within 10 feet of you " +
    "\nmust succeed on a Wisdom saving throw or be charmed by you for 1 minute, or until you or your companions deal any damage to it.", 

    "When you use your Fey Step, one creature of your choice that you can see within 5 feet of you before you teleport must " + 
    "\nsucceed on a Wisdom saving throw or be frightened of you until the end of your next turn.", 

    "When you use your Fey Step, you can touch one willing creature within 5 feet of you. That creature then teleports " + 
    "\ninstead of you, appearing in an unoccupied space of your choice that you can see within 30 feet of you.", 

    "Immediately after you use your Fey Step, each creature of your choice that you can see within 5 feet of you takes " + 
    "\nfire damage equal to your Charisma modifier (minimum of 1 damage)."
];
var traits = [
    [
        "If someone is in need, you never withhold aid.", 
        "You share what you have, with little regard to your own needs.", 
        "There are no simple meals, only lavish feasts.", 
        "You stock up on fine food and drink. You hate going without such comforts."
    ], 
    [
        "The worst case is most likely to occur.", 
        "You preserve what you have. Better to be hungry today and have food for tomorrow.", 
        "Life is full of dangers, but you are ready for them.", 
        "A penny spent is a penny lost forever."
    ], 
    [
        "Every day is the greatest day of your life.", 
        "You do everything with enthusiasm, even the most mundane chores.", 
        "You love music and song. You supply a tune yourself if no one else can.", 
        "You can’t stay still."
    ], 
    [
        "You believe that direct confrontation is the best way to solve problems.", 
        "Overwhelming force can solve almost anything. The tougher the problem, the more force you apply.", 
        "You stand tall and strong so that others can lean on you.", 
        "You maintain an intimidating front. Better to prevent fights with a show of force than to harm others."
    ]
];
var flaws = [
    [
        "You trust others without thought.", 
        "You give to the point that you leave yourself without necessary supplies.", 
        "Everyone is your friend, or a potential friend.", 
        "You spend excessively on creature comforts."
    ], 
    [
        "Everything dies eventually. Why bother building anything that is supposedly meant to last?", 
        "Nothing matters to you, and you allow others to guide your actions.", 
        "Your needs come first. In winter, all must watch out for themselves.", 
        "You speak only to point out the flaws in others’ plans."
    ], 
    [
        "You overdrink.", 
        "Toil is for drudges. Yours should be a life of leisure.", 
        "A pretty face infatuates you in an instant, but your fancy passes with equal speed.", 
        "Anything worth doing is worth doing again and again."
    ], 
    [
        "You are stubborn. Let others change.", 
        "The best option is one that is swift, unexpected, and overwhelming.", 
        "Punch first. Talk later.", 
        "Your fury can carry you through anything."
    ]
];
var phases = ["Full", "New", "Crescent"];
var spells = [
    ["Faerie Fire", "Moonbeam", "Death Ward", "Freedom of Movement", "Mass Cure Wounds"], 
    ["Dissonant Whispers", "Darkness", "Bestow Curse", "Evard's Black Tentacles", "Mislead"], 
    ["Sanctuary", "Blindess/Deafness", "Phantom Steed", "Hallucinatory Terrain", "Dream"]
];
var boons = ["Abjuration and Conjuration", "Evocation and Necromancy", "Divination and Transmutation"];
var emp = [
    "You shed bright light in a 10-foot radius and dim light for an additional 10 feet. In addition, you and " + 
    "creatures of your choice have advantage on saving throws while within the bright light you shed.", 

    "You have advantage on Dexterity (Stealth) checks. In addition, while you are in dim light or darkness, " + 
    "attack rolls have disadvantage against you.", 

    "You have resistance to necrotic and radiant damage."
];
var lvls = [1, 3, 5, 7, 9];



function generate() {
    var season_num = Math.floor(Math.random() * 4);
    var trait_num = Math.floor(Math.random() * 4);
    var flaw_num = Math.floor(Math.random() * 4);
    
    document.getElementById("season").innerHTML = "Season: " + seasons[season_num];
    document.getElementById("step").innerHTML = steps[season_num];
    document.getElementById("trait").innerHTML = "(" + (trait_num+1) + ") " + traits[season_num][trait_num];
    document.getElementById("flaw").innerHTML = "(" + (flaw_num+1) + ") " + flaws[season_num][flaw_num];



    var phase_num = Math.floor(Math.random() * 3);
    document.getElementById("phase").innerHTML = "Lunar Phase: " + phases[phase_num] + " Moon";
    document.getElementById("main").style.display = "block";

    spells[phase_num].forEach(dispSpell);

    document.getElementById("boons").innerHTML = "Lunar Boons: " + boons[phase_num];

    document.getElementById("emp").innerHTML = emp[phase_num];
}

function dispSpell(spell, index, arr) {
    document.getElementById("spell"+index).innerHTML = lvls[index] + ": " + spell;
}