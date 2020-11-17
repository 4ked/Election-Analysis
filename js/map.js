//map
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
        .text('Click ' + data.name +' on map')
        .stop()
        .css('border', '#ffffff')
        .animate({backgroundColor: '#ddd'}, 1000);
    }
  });
});
