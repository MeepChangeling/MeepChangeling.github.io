var output = $("#generated-names");
var num = 10;

var todoVerb = [
    "bypass",
    "calibrate",
    "clean",
    "charge",
    "charge up",
    "connect up",
    "completely resynchronize",
    "rebuild",
    "de-clutter",
    "decrease power to",
    "decrease power to",
    "de-materialize",
    "de-polorize",
    "degauss",
    "de-scale",
    "de-scramble",
    "decontaminate",
    "destroy",
    "detach",
    "divert power to",
    "divert power away from",
    "counterspell",
    "energize",
    "fluctuate",
    "fix",
    "increase power to",
    "increase power to",
    "increase the variance of",
    "increase the power of",
    "invert",
    "install",
    "jump-start",
    "manatize",
    "polorize",
    "purge",
    "re-attenuate",
    "re-invert",
    "re-route",
    "realign",
    "reboot",
    "rebuild",
    "repipe the plasma to",
    "replace",
    "re-route thaumic power through",
    "re-route thaumic power to",
    "re-route mana to",
    "re-route mana through",
    "reset","restart",
    "resynchronize",
    "scrub",
    "scrap",
    "synchronize",
    "uncrumple",
    "unscrew",
    "unspam",
];

var thingAdjective = [
    "aeon",
    "aether",
    "aetheric",
    "animist",
    "accended",
    "astral",
    "astro",
    "auric",
    "banish",
    "boline",
    "chaos",
    "charm",
    "circumambulatory",
    "crystal",
    "demi",
    "draconic",
    "esbat",
    "energised",
    "elemental",
    "enchanted",
    "evoc",
    "filakto",
    "Galdr",
    "gem",
    "geo",
    "gnosis",
    "graphologic",
    "hadit",
    "hexagramic",
    "haruspex",
    "hermetic",
    "incantic",
    "imbolic",
    "lamenic",
    "liminal",
    "liturgic",
    "lithomantic",
    "literomantic",
    "malefictic",
    "medium",
    "merkabah",
    "metaphysical",
    "nagual",
    "nominalist",
    "Odic",
    "otherworld",
    "orans",
    "paten",
    "penuel",
    "Pyx",
    "radionic",
    "reiki",
    "runic",
    "sachet",
    "tantric",
    "totem",
    "Undine",
    "vitalistic",
    "Vril",
    "Zoharic",
];

var who = [
    "I need to",
    "I should",
    "We need to",
    "We should",
    "They need to",
    "You need to",
    "You should",
    "Don't forget to",
]

var thingDesc = [
    "lotus",
    "charm",
    "circle",
    "talisman",
    "philtre",
    "conjurer",
    "dweomer",
    "source",
    "ward",
    "wheel",
    "current",
    "bubble",
    "caesium",
    "containment",
    "delta-wave",
    "dorsal",
    "flow",
    "glob",
    "microfilament",
    "neogenic",
    "polar",
    "power",
    "pulse",
    "vacuum",
    "warp",
];

var thing = [
    "autosequencers",
    "booster",
    "booster wiper",
    "booster amplifier",
    "brackets",
    "capacitor",
    "capacitor cleaner",
    "casing",
    "centrifuge",
    "circuits",
    "collector",
    "collectors",
    "compactor",
    "containment field",
    "control circuit",
    "converter",
    "core",
    "cruncher",
    "crystal",
    "crystal core",
    "destabilizer",
    "energy core",
    "fetcher",
    "fragmentor",
    "flinger",
    "flipper",
    "generator",
    "impulser",
    "limiter",
    "node",
    "processor",
    "recorder",
    "replacer",
    "replicator",
    "repeller",
    "scrubber",
    "shell",
    "splitter",
    "stabilizer",
    "turbine",
    "turbine bracket",
    "turbine lubricator",
    "collector",
    "collector brackets",
];

var problemAdj = [
    "nanowave",
    "nanoparticle",
];

var problem = [
    "a temporal anomaly",
    "a neutrino surge",
    "a plasma surge",
    "a quantum surge",
    "a quantum breakdown",
    "a destabilization",
    "an antimatter particle trace",
    "a slight variance",
    "a slight field variance",
    "nanowave frequency shift",
    "an anomolous power spike",
    "an anomolous power signature",
    "a series of nanowave pulse signatures",
    "a control malfunction",
];

var problemStart = [
    "There's",
    "I'm detecting",
    "You notice"
]

generateNew = function () {
    output.html("");

    for (i = 0; i <= num; i++) {

        var final = "";
        var typeChance = Math.floor(Math.random() * 100);
        var randomWho = who[Math.floor(Math.random() * who.length)];
        var randomTodoVerb = todoVerb[Math.floor(Math.random() * todoVerb.length)];
        var randomThingAdj = thingAdjective[Math.floor(Math.random() * thingAdjective.length)];
        var randomThingDesc = thingDesc[Math.floor(Math.random() * thingDesc.length)];
        var randomThing = thing[Math.floor(Math.random() * thing.length)];

        if (typeChance <= 30){
            final = randomWho + " " + randomTodoVerb + " the " + randomThingAdj + " " + randomThingDesc + " " + randomThing + ".";

        } else if(typeChance > 30 && typeChance <= 60) {

            final = randomWho + " " + randomTodoVerb + " the " + randomThingAdj + " " + randomThingDesc + " " + randomThing + ".";

            randomThingAdj = thingAdjective[Math.floor(Math.random() * thingAdjective.length)];
            randomThingDesc = thingDesc[Math.floor(Math.random() * thingDesc.length)];
            randomThing = thing[Math.floor(Math.random() * thing.length)];

            final = "The " + randomThingAdj + " " + randomThingDesc + " is offline. " + final;

        } else  {
            var randomProblemStart = problemStart[Math.floor(Math.random() * problemStart.length)];
            var randomProblem = problem[Math.floor(Math.random() * problem.length)];

            final = randomProblemStart + " " + randomProblem + " in the " + randomThingAdj + " " + randomThingDesc + " " + randomThing + ".";

            var prefixChance = Math.floor(Math.random() * 100);

            if (prefixChance <= 50){
                randomThingAdj = thingAdjective[Math.floor(Math.random() * thingAdjective.length)];
                randomThingDesc = thingDesc[Math.floor(Math.random() * thingDesc.length)];
                randomThing = thing[Math.floor(Math.random() * thing.length)];

                final = final + " " + randomWho + " " + randomTodoVerb + " the " + randomThingDesc + " " + randomThing + ".";
            }

        }

        output.prepend("<p>“"+final+"”</p>");
    }

}

generateNew();
