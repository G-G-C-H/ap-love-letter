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

  adverbs = ['AFFECTIONATELY', 'ANXIOUSLY', 'ARDENTLY', 'AVIDLY', 'BEAUTIFULLY', 'BREATHLESSLY', 'BURNINGLY', 'COVETOUSLY', 'CURIOUSLY', 'DEVOTEDLY', 'EAGERLY', 'FERVENTLY', 'FONDLY', 'IMPATIENTLY', 'KEENLY', 'LOVINGLY', 'PASSIONATELY',
    'SEDUCTIVELY', 'TENDERLY', 'WINNINGLY', 'WISTFULLY', 'occasionally'
  ];

  verbs = ['ADORES', 'ATTRACTS', 'CARES FOR', 'CHERISHES', 'CLINGS TO', 'DESIRES', 'HOLDS DEAR', 'HOPES FOR', 'HUNGERS FOR', 'IS WEDDED TO', 'LIKES', 'LONGS FOR', 'LOVES', 'LUSTS AFTER', 'PANTS FOR', 'PINES FOR', 'PRIZES', 'SIGHS FOR', 'TEMPTS',
    'THIRSTS FOR', 'TREASURES', 'WANTS', 'WISHES for', 'WOOS', 'YEARNS FOR'
  ];

  verbs2 = ['hold', 'cuddle', 'clasp','squeeze', 'clutch', 'seize', 'grab', 'nuzzle', 'caress', 'enfold', 'enclasp', 'encircle', 'enclose', 'envelop', 'canoodle', 'embosom'
  ];


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
  return ' the ' + choose(nouns) + ' ' + maybe(adverbs) + ' ' + choose(verbs) + ' the ' + maybe(adjectives) + ' ' + choose(nouns2) + '\'s '+ choose(nouns) + ', ' + choose(nouns2) + ' and ' + choose(nouns2) + '.';
}

// a shorter sentence
function shorter() {
  return ' ' + choose(adjectives) + ' ' + choose(nouns) + '.';
}

function sea() {
  return choose(nouns);
}

// composes the letter
function letter() {
  var i, type, you_are = false,
    text = '';
  text = text + choose(adjectives) + ' ' + choose(nouns2) + ',' + '<br /><br />';

  for (i = 0; i < 5; i = i + 1) {
    type = choose(['longer', 'shorter']);
    // if longer gets chosen then print longer
    if (type === 'longer') {
      text = text + longer();
      you_are = false;
      // if shorter gets chosen either choose my + shorter or choose you are + shorter
    } else {
      if (you_are) {
        text = text.slice(0, -1) + ': ' + shorter();
        you_are = false;
      } else {
        text = text + ' ' + choose(verbs2) + ' the ' + shorter();
        you_are = true;
      }
    }
  }
  text = text +
    '<br /><br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;YOURS ' +
    choose(adverbs) + ',<br /><br />' +
    '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;the womb of time';
  return text;
}

// a way of getting our letter function and reproducing it in html
function showTruth() {
  document.getElementById('div').innerHTML = letter();
}
