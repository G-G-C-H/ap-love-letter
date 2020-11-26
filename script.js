var t = 0,
  first = [],
  second = [],
  adjectives = ['ADORABLE', 'AFFECTIONATE', 'AMOROUS', 'ANXIOUS', 'ARDENT', 'AVID', 'BREATHLESS', 'BURNING', 'COVETOUS', 'CRAVING', 'CURIOUS', 'DARLING', 'DEAR', 'DEVOTED', 'EAGER', 'EROTIC', 'FERVENT', 'FOND', 'IMPATIENT', 'KEEN', 'LITTLE',
    'LOVEABLE', 'LOVESICK', 'LOVING', 'PASSIONATE', 'PRECIOUS', 'SWEET', 'SYMPATHETIC', 'TENDER', 'UNSATISFIED', 'WISTFUL', 'severe', 'moderate', 'good', 'rough', 'slight'
  ];

  nouns = ['EXPANSE', 'LAKE', 'OCEAN', 'SEA', 'WATER', 'POND', 'ABUNDANCE', 'BLUE', 'BRINE', 'PLETHORA', 'SEABED', 'SHORE', 'FRESHWATER', 'RIVER', 'MOON', 'LAGOON', 'POOL', 'TIDEPOOL', 'SAND',
    'FJORD', 'TYPHOON', 'CLOUD', 'WAVE', 'BASIN', 'ICE', 'SURFACE', 'ABYSS', 'CREVICE', 'STRETCH'
  ];

  nouns2 = ['dimple', 'ear', 'finger', 'toe', 'foot', 'cheek', 'nose', 'knee', 'nipple', 'chest', 'eyebrow', 'hair', 'hip', 'groin', 'thigh',
  ];

  nouns3 = ['cyclone', 'hurricane', 'monsoon', 'squall', 'tornado', 'wind', 'windstorm', 'blast', 'blow', 'burst', 'chinook', 'mistral', 'outbreak', 'outburst', 'tempest', 'typhoon',
  ];

  nouns4 = ['earth', 'gravel', 'lava', 'metal', 'rubble', 'slab', 'bedrock', 'boulder', 'cobblestone', 'crag', 'crust', 'lodge', 'mass', 'mineral', 'ore', 'pebble', 'promontory', 'quarry', 'reef', 'shelf'
  ];

  adverbs = ['AFFECTIONATELY', 'ANXIOUSLY', 'ARDENTLY', 'AVIDLY', 'BEAUTIFULLY', 'BREATHLESSLY', 'BURNINGLY', 'COVETOUSLY', 'CURIOUSLY', 'DEVOTEDLY', 'EAGERLY', 'FERVENTLY', 'FONDLY', 'IMPATIENTLY', 'KEENLY', 'LOVINGLY', 'PASSIONATELY',
    'SEDUCTIVELY', 'TENDERLY', 'WINNINGLY', 'WISTFULLY', 'occasionally'
  ];

  verbs = ['ADORES', 'ATTRACTS', 'CARES FOR', 'CHERISHES', 'CLINGS TO', 'DESIRES', 'HOLDS DEAR', 'HOPES FOR', 'HUNGERS FOR', 'IS WEDDED TO', 'LONGS FOR', 'LOVES', 'LUSTS AFTER', 'PANTS FOR', 'PINES FOR', 'PRIZES', 'SIGHS FOR', 'TEMPTS',
    'THIRSTS FOR', 'TREASURES', 'WANTS', 'WISHES for', 'WOOS', 'YEARNS FOR'
  ];

  verbs2 = ['hold', 'clasp','squeeze', 'clutch', 'seize', 'grab', 'nuzzle', 'caress', 'enfold', 'enclasp', 'encircle', 'enclose', 'envelop', 'canoodle', 'embosom'
  ];

  time = ['while', 'whilst', 'though', 'instantly'];

  time2 = ['always', 'unceasingly', 'regularly', 'never'];

  question = ['Maybe', 'Perhaps', 'of course', 'certainly'];


// selects a random number from the array
function rand_range(maximum) {
  return Math.floor(Math.random() * (maximum + 1));
}

// prints the word of the array at the position picked by the rand range function
function choose(array) {
  return array[rand_range(array.length - 1)];
}

// maybe prints the word depending on what random number is picked
function maybe(words) {
  if (Math.random() > 0.5) {
    return ' ' + choose(words);
  }
  return '';
}

// a longer sentence
function longer() {
  // return ' the' + maybe(adjectives) + ' ' + choose(nouns) + maybe(adverbs) + ' ' + choose(verbs) + ' the' + maybe(adjectives) + ' ' + choose(nouns2) + '.';
  return ' ' + maybe(time) + ' the ' + choose(nouns) + ' ' + maybe(adverbs) + ' ' + choose(verbs) + ' the ' + ' ' + choose(nouns2) + '\'s '+ maybe(adjectives) + ' ' + choose(nouns4) ;
}

// a shorter sentence
function shorter() {
  return ' ' + choose(adjectives) + ' ' + choose(nouns);
}

//
function another() {
  return ' ' + maybe(question) + ' you could ' + maybe(time2) + ' ' + choose(verbs2) + ' the ' + maybe(adjectives) + ' ' + choose(nouns3);
}


// composes the letter
function letter() {
  var i, type, you_are = false,
    text = '';

  for (i = 0; i < 3; i = i + 1) {
    type = choose(['longer', 'shorter']);
    if (type === 'longer') {
      text = text + '<br>' + longer() + '<br>';
      you_are = false;
    } else {
      if (you_are) {
        text = text + '<br>' + 'Quiet' + shorter() + '<br>';
        you_are = false;
      } else {
        text = text + '<br>' + another() + '<br>';
        you_are = true;
      }
    }
  }
  return text;
}

document.getElementById("div").addEventListener("click", showTruth);

// a way of getting our letter function and reproducing it in html
function showTruth() {
  document.getElementById('div').innerHTML = letter();
};
