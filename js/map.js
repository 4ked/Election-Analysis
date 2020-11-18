// map initialization
$(document).ready(function() {
  $('#map').usmap({
    'showLabels': true,
    'stateSpecificStyles': {
      'AL': {fill: '#d81c28'},
      'AK': {fill: '#d81c28'},
      'AZ': {fill: '#019bd8'},
      'AR': {fill: '#d81c28'},
      'CA': {fill: '#019bd8'},
      'CO': {fill: '#019bd8'},
      'CT': {fill: '#019bd8'},
      'DE': {fill: '#019bd8'},
      'DC': {fill: '#019bd8'},
      'FL': {fill: '#d81c28'},
      'GA': {fill: '#019bd8'},
      'HI': {fill: '#019bd8'},
      'ID': {fill: '#d81c28'},
      'IL': {fill: '#019bd8'},
      'IN': {fill: '#d81c28'},
      'IA': {fill: '#d81c28'},
      'KS': {fill: '#d81c28'},
      'KY': {fill: '#d81c28'},
      'LA': {fill: '#d81c28'},
      'ME': {fill: '#019bd8'},
      'MD': {fill: '#019bd8'},
      'MA': {fill: '#019bd8'},
      'MI': {fill: '#019bd8'},
      'MN': {fill: '#019bd8'},
      'MS': {fill: '#d81c28'},
      'MO': {fill: '#d81c28'},
      'MT': {fill: '#d81c28'},
      'NE': {fill: '#d81c28'},
      'NV': {fill: '#019bd8'},
      'NH': {fill: '#019bd8'},
      'NJ': {fill: '#019bd8'},
      'NM': {fill: '#019bd8'},
      'NY': {fill: '#019bd8'},
      'NC': {fill: '#d81c28'},
      'ND': {fill: '#d81c28'},
      'OH': {fill: '#d81c28'},
      'OK': {fill: '#d81c28'},
      'OR': {fill: '#019bd8'},
      'PA': {fill: '#019bd8'},
      'RI': {fill: '#019bd8'},
      'SC': {fill: '#d81c28'},
      'SD': {fill: '#d81c28'},
      'TN': {fill: '#d81c28'},
      'TX': {fill: '#d81c28'},
      'UT': {fill: '#d81c28'},
      'VT': {fill: '#019bd8'},
      'VA': {fill: '#019bd8'},
      'WA': {fill: '#019bd8'},
      'WV': {fill: '#d81c28'},
      'WI': {fill: '#019bd8'},
      'WY': {fill: '#d81c28'},
    },
    'stateHoverStyles': {
      'stroke': '#000',
      'stroke-width': 3
    },
    'labelBackingHoverStyles': {
      'fill': 'black'
    },
    'click' : function(event, data) {
      $('#alert')
        .text(printData(data.name))
        .stop()
        .css('border', '#ffffff')
        .animate({backgroundColor: '#ddd'}, 1000);
    }
  });
});

function printData(id) {
  var data = states[id];
  var res = [];
  for(var i in data)
    res.push([i,data[i]]);
  return "State: " + res[0][1] + "; Republican Votes: " + numberWithCommas(res[1][1]) + "; Democrat Votes: " + numberWithCommas(res[2][1]) + "; Electoral Votes: " + res[3][1];
}

function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

// data
const states = {
  'AL': {
    'state': 'Alabama',
    'redVotes': 1434315,
    'blueVotes': 843724,
    'electoralVotes': 9
  },
  'AK': {
    'state': 'Alaska',
    'redVotes': 185807,
    'blueVotes': 150155,
    'electoralVotes': 3
  },
  'AZ': {
    'state': 'Arizona',
    'redVotes': 1661677,
    'blueVotes': 1672054,
    'electoralVotes': 11
  },
  'AR': {
    'state': 'Arkansas',
    'redVotes': 757315,
    'blueVotes': 418811,
    'electoralVotes': 6
  },
  'CA': {
    'state': 'California',
    'redVotes': 5758302,
    'blueVotes': 10784157,
    'electoralVotes': 55
  },
  'CO': {
    'state': 'Colorado',
    'redVotes': 1364202,
    'blueVotes': 1803921,
    'electoralVotes': 9
  },
  'CT': {
    'state': 'Connecticut',
    'redVotes': 714581,
    'blueVotes': 1080471,
    'electoralVotes': 7
  },
  'DE': {
    'state': 'Delaware',
    'redVotes': 199829,
    'blueVotes': 295403,
    'electoralVotes': 3
  },
  'DC': {
    'state': 'District of Columbia',
    'redVotes': 18172,
    'blueVotes': 307265,
    'electoralVotes': 3
  },
  'FL': {
    'state': 'Florida',
    'redVotes': 5668731,
    'blueVotes': 5297045,
    'electoralVotes': 29
  },
  'GA': {
    'state': 'Georgia',
    'redVotes': 2457895,
    'blueVotes': 2472050,
    'electoralVotes': 16
  },
  'HI': {
    'state': 'Hawaii',
    'redVotes': 196602,
    'blueVotes': 365802,
    'electoralVotes': 4
  },
  'ID': {
    'state': 'Idaho',
    'redVotes': 554019,
    'blueVotes': 286991,
    'electoralVotes': 4
  },
  'IL': {
    'state': 'Illinois',
    'redVotes': 2405760,
    'blueVotes': 3414236,
    'electoralVotes': 20
  },
  'IN': {
    'state': 'Indiana',
    'redVotes': 1729472,
    'blueVotes': 1242163,
    'electoralVotes': 11
  },
  'IA': {
    'state': 'Iowa',
    'redVotes': 897356,
    'blueVotes': 758597,
    'electoralVotes': 6
  },
  'KS': {
    'state': 'Kansas',
    'redVotes': 752903,
    'blueVotes': 551144,
    'electoralVotes': 6
  },
  'KY': {
    'state': 'Kentucky',
    'redVotes': 1326418,
    'blueVotes': 772285,
    'electoralVotes': 8
  },
  'LA': {
    'state': 'Louisiana',
    'redVotes': 1255776,
    'blueVotes': 856034,
    'electoralVotes': 8
  },
  'ME': {
    'state': 'Maine',
    'redVotes': 359502,
    'blueVotes': 430023,
    'electoralVotes': 2
  },
  'MD': {
    'state': 'Maryland',
    'redVotes': 958547,
    'blueVotes': 1905407,
    'electoralVotes': 10
  },
  'MA': {
    'state': 'Massachusetts',
    'redVotes': 1148777,
    'blueVotes': 2316388,
    'electoralVotes': 11
  },
  'MI': {
    'state': 'Michigan',
    'redVotes': 2649063,
    'blueVotes': 2795184,
    'electoralVotes': 16
  },
  'MN': {
    'state': 'Minnesota',
    'redVotes': 1483551,
    'blueVotes': 1716207,
    'electoralVotes': 10
  },
  'MS': {
    'state': 'Mississippi',
    'redVotes': 741571,
    'blueVotes': 514891,
    'electoralVotes': 6
  },
  'MO': {
    'state': 'Missouri',
    'redVotes': 1711848,
    'blueVotes': 1242851,
    'electoralVotes': 10
  },
  'MT': {
    'state': 'Montana',
    'redVotes': 343643,
    'blueVotes': 244833,
    'electoralVotes': 3
  },
  'NE': {
    'state': 'Nebraska',
    'redVotes': 553793,
    'blueVotes': 371921,
    'electoralVotes': 2
  },
  'NV': {
    'state': 'Nevada',
    'redVotes': 669890,
    'blueVotes': 703486,
    'electoralVotes': 6
  },
  'NH': {
    'state': 'New Hampshire',
    'redVotes': 365373,
    'blueVotes': 423291,
    'electoralVotes': 4
  },
  'NJ': {
    'state': 'New Jersey',
    'redVotes': 1761343,
    'blueVotes': 2420621,
    'electoralVotes': 14
  },
  'NM': {
    'state': 'New Mexico',
    'redVotes': 401814,
    'blueVotes': 501457,
    'electoralVotes': 5
  },
  'NY': {
    'state': 'New York',
    'redVotes': 2890532,
    'blueVotes': 3804597,
    'electoralVotes': 29
  },
  'NC': {
    'state': 'North Carolina',
    'redVotes': 2756900,
    'blueVotes': 2683331,
    'electoralVotes': 15
  },
  'ND': {
    'state': 'North Dakota',
    'redVotes': 235595,
    'blueVotes': 114902,
    'electoralVotes': 3
  },
  'OH': {
    'state': 'Ohio',
    'redVotes': 3074418,
    'blueVotes': 2603731,
    'electoralVotes': 18
  },
  'OK': {
    'state': 'Oklahoma',
    'redVotes': 1018870,
    'blueVotes': 503289,
    'electoralVotes': 7
  },
  'OR': {
    'state': 'Oregon',
    'redVotes': 949646,
    'blueVotes': 1329567,
    'electoralVotes': 7
  },
  'PA': {
    'state': 'Pennsylvania',
    'redVotes': 3358151,
    'blueVotes': 3425475,
    'electoralVotes': 20
  },
  'RI': {
    'state': 'Rhode Island',
    'redVotes': 199830,
    'blueVotes': 306192,
    'electoralVotes': 4
  },
  'SC': {
    'state': 'South Carolina',
    'redVotes': 1384852,
    'blueVotes': 1091348,
    'electoralVotes': 9
  },
  'SD': {
    'state': 'South Dakota',
    'redVotes': 261035,
    'blueVotes': 150467,
    'electoralVotes': 3
  },
  'TN': {
    'state': 'Tennessee',
    'redVotes': 1849211,
    'blueVotes': 1139666,
    'electoralVotes': 11
  },
  'TX': {
    'state': 'Texas',
    'redVotes': 5874547,
    'blueVotes': 5236610,
    'electoralVotes': 38
  },
  'UT': {
    'state': 'Utah',
    'redVotes': 848863,
    'blueVotes': 554028,
    'electoralVotes': 66
  },
  'VT': {
    'state': 'Vermont',
    'redVotes': 112688,
    'blueVotes': 242805,
    'electoralVotes': 3
  },
  'VA': {
    'state': 'Virginia',
    'redVotes': 1961126,
    'blueVotes': 2404510,
    'electoralVotes': 13
  },
  'WA': {
    'state': 'Washington',
    'redVotes': 1572345,
    'blueVotes': 2356584,
    'electoralVotes': 12
  },
  'WV': {
    'state': 'West Virginia',
    'redVotes': 544826,
    'blueVotes': 235657,
    'electoralVotes': 5
  },
  'WI': {
    'state': 'Wisconsin',
    'redVotes': 1610139,
    'blueVotes': 1630683,
    'electoralVotes': 10
  },
  'WY': {
    'state': 'Wyoming',
    'redVotes': 193454,
    'blueVotes': 73445,
    'electoralVotes': 3
  }
}