'use strict';



const seasons = ["Autumn", "Winter", "Spring", "Summer"];
const steps = [
    "Immediately after you use your Fey Step, up to two creatures of your choice that you can see within 10 feet of you " +
    "\nmust succeed on a Wisdom saving throw or be charmed by you for 1 minute, or until you or your companions deal any damage to it.", 

    "When you use your Fey Step, one creature of your choice that you can see within 5 feet of you before you teleport must " + 
    "\nsucceed on a Wisdom saving throw or be frightened of you until the end of your next turn.", 

    "When you use your Fey Step, you can touch one willing creature within 5 feet of you. That creature then teleports " + 
    "\ninstead of you, appearing in an unoccupied space of your choice that you can see within 30 feet of you.", 

    "Immediately after you use your Fey Step, each creature of your choice that you can see within 5 feet of you takes " + 
    "\nfire damage equal to your Charisma modifier (minimum of 1 damage)."
];
const traits = [
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
const flaws = [
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
const phases = ["Full", "Crescent", "New"];
const spells = [
    ["Faerie Fire", "Moonbeam", "Death Ward", "Freedom of Movement", "Mass Cure Wounds"], 
    ["Sanctuary", "Blindess/Deafness", "Phantom Steed", "Hallucinatory Terrain", "Dream"],
    ["Dissonant Whispers", "Darkness", "Bestow Curse", "Evard's Black Tentacles", "Mislead"], 
];
const boons = ["Abjuration and Conjuration", "Divination and Transmutation", "Evocation and Necromancy"];
const emp = [
    "You shed bright light in a 10-foot radius and dim light for an additional 10 feet. In addition, you and " + 
    "creatures of your choice have advantage on saving throws while within the bright light you shed.", 

    "You have resistance to necrotic and radiant damage.", 

    "You have advantage on Dexterity (Stealth) checks. In addition, while you are in dim light or darkness, " + 
    "attack rolls have disadvantage against you."
];
const lvls = [1, 3, 5, 7, 9];

var data = {
    season_num: -1,
    trait_num: -1,
    flaw_num: -1,
    phase_num: -1,
    combo_name: "", 
    combo_spell: ""
};



function combo() {
    if (data.season_num == 0) {         // Autumn

        if (data.phase_num == 0) {          // Full
            data.combo_name = "Harvest";
            data.trait_num = 1;
            data.flaw_num = 3;
            data.combo_spell = "Goodberry";
        }
        else if (data.phase_num == 1) {     // Crescent
            data.combo_name = "Slumber";
            data.trait_num = 3;
            data.flaw_num = 0;
            data.combo_spell = "Sleep";
        }
        else if (data.phase_num == 2) {     // New
            data.combo_name = "Hunt";
            data.trait_num = 0;
            data.flaw_num = 1;
            data.combo_spell = "Magic Missile";
        }

    }
    else if (data.season_num == 1) {    // Winter

        if (data.phase_num == 0) {          // Full
            data.combo_name = "Hearth";
            data.trait_num = 1;
            data.flaw_num = 2;
            data.combo_spell = "Leomund's Tiny Hut";
        }
        else if (data.phase_num == 1) {     // Crescent
            data.combo_name = "Slip";
            data.trait_num = 2;
            data.flaw_num = 1;
            data.combo_spell = "Grease";
        }
        else if (data.phase_num == 2) {     // New
            data.combo_name = "Shiver";
            data.trait_num = 0;
            data.flaw_num = 0;
            data.combo_spell = "Ice Storm";
        }
        
    }
    else if (data.season_num == 2) {    // Spring

        if (data.phase_num == 0) {          // Full
            data.combo_name = "Dance";
            data.trait_num = 1;
            data.flaw_num = 3;
            data.combo_spell = "Otto's Irresistible Dance";
        }
        else if (data.phase_num == 1) {     // Crescent
            data.combo_name = "Meadow";
            data.trait_num = 0;
            data.flaw_num = 1;
            data.combo_spell = "Catnap";
        }
        else if (data.phase_num == 2) {     // New
            data.combo_name = "Breeze";
            data.trait_num = 3;
            data.flaw_num = 2;
            data.combo_spell = "Investiture of Wind";
        }

    }
    else if (data.season_num == 3) {    // Summer

        if (data.phase_num == 0) {          // Full
            data.combo_name = "Heat";
            data.trait_num = 2;
            data.flaw_num = 0;
            data.combo_spell = "Investiture of Flame";
        }
        else if (data.phase_num == 1) {     // Crescent
            data.combo_name = "Herald";
            data.trait_num = 3;
            data.flaw_num = 1;
            data.combo_spell = "Gift of Alacrity";
        }
        else if (data.phase_num == 2) {     // New
            data.combo_name = "Storm";
            data.trait_num = 1;
            data.flaw_num = 3;
            data.combo_spell = "Lightning Bolt";
        }

    }
    else {
        console.log("ERROR in combo(): uninitialized value in data");
    }
}


function rand_season() {
    data.season_num = Math.floor(Math.random() * 4);
}

function rand_phase() {
    data.phase_num = Math.floor(Math.random() * 3);
}


function disp_season() {
    document.getElementById("season").innerHTML = "Season: " + seasons[data.season_num];
    document.getElementById("step").innerHTML = steps[data.season_num];
    document.getElementById("trait").innerHTML = traits[data.season_num][data.trait_num];
    document.getElementById("flaw").innerHTML = flaws[data.season_num][data.flaw_num];
}

function disp_spell(spell, index, arr) {
    document.getElementById("spell"+index).innerHTML = lvls[index] + ": " + spell;
}

function disp_phase() {
    document.getElementById("phase").innerHTML = "Lunar Phase: " + phases[data.phase_num] + " Moon";
    spells[data.phase_num].forEach(disp_spell);
    document.getElementById("boons").innerHTML = boons[data.phase_num];
    document.getElementById("emp").innerHTML = emp[data.phase_num];
}

function disp_combo() {
    document.getElementById("person").innerHTML = "Personality: " + data.combo_name;
    document.getElementById("combo_spell").innerHTML = data.combo_spell;
}

function display() {
    combo();

    disp_season();
    disp_phase();
    disp_combo();
}


function randomize() {
    rand_season();
    rand_phase();

    display();
}


function set_season() {
    var season_num = parseInt(document.getElementById("szn_select").value);
    data.season_num = season_num;
    display();
}

function set_phase() {
    var phase_num = parseInt(document.getElementById("phz_select").value);
    data.phase_num = phase_num;
    display();
}


function cycle() {
    data.season_num = (data.season_num + 1) % 4;
    data.phase_num = (data.phase_num + 1) % 3;
    display();
}