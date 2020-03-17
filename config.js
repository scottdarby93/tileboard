var CONFIG = {
   customTheme: null,
   transition: TRANSITIONS.SIMPLE, //ANIMATED or SIMPLE (better perfomance)
   entitySize: ENTITY_SIZES.NORMAL, //SMALL, BIG are available
   tileSize: 100,
   tileMargin: 6,
   serverUrl: 'SERVER URL',
   wsUrl: 'WEBSOCKET URL',
   authToken: 'LONG-LIVED ACCESS TOKEN',
   debug: false,
   pingConnection: false,

   events: [],
   timeFormat: 24,
   menuPosition: MENU_POSITIONS.BOTTOM,
   hideScrollbar: true,
   groupsAlign: GROUP_ALIGNS.HORIZONTALLY,
   onReady: function () {},

   top:[{type: HEADER_ITEMS.CUSTOM_HTML, html: 'Hallway',}],
   header: {
      styles: {padding: '30px 120px 0', fontSize: '28px'},
      left: [{ type: HEADER_ITEMS.TIME, styles: {fontSize: '28px'}}],
      right: [
         {
            type: HEADER_ITEMS.WEATHER,
            styles: {fontSize: '28px'},
            icon: '&weather.home.state',
            icons: {
               'clear-day': 'clear',
               'clear-night': 'nt-clear',
               'cloudy': 'cloudy',
               'rainy': 'rain',
               'sunny':'sunny',
               'sleet': 'sleet',
               'snow': 'snow',
               'wind': 'hazy',
               'fog': 'fog',
               'partlycloudy': 'partlycloudy',
            },
            fields: {
               temperature: '&weather.home.attributes.temperature',
               temperatureUnit: '°C',
            }
         }
      ]
   },
   pages: [
      {
         title: 'Main page',
         bg: 'images/bg8.jpg',
         icon: 'mdi-home-circle', // home icon
         groups: [
            {
               title:'Hallway', width:10,height:3,items:
               [
                  {
                     position: [0, 0.25],
                     width: 2,
                     height: 2,
                     type: TYPES.CUSTOM,
                     title: 'Lighting',
                     classes: [CLASS_BIG],
                     id: { },
                     icon: 'mdi-light',
                  },
                  {
                     position: [2, 0.25],
                     width: 2,
                     height: 2,
                     type: TYPES.CUSTOM,
                     title: 'Climate',
                     classes: [CLASS_BIG],
                     id: { },
                     icon: 'mdi-thermostat',
                  },
                  {
                     position: [4, 0.25],
                     width: 2,
                     height: 2,
                     type: TYPES.CUSTOM,
                     title: 'Spotify',
                     classes: [CLASS_BIG],
                     id: { },
                     icon: 'mdi-spotify',
                  },
                  {
                     position: [6, 0.25],
                     width: 2,
                     height: 2,
                     type: TYPES.CUSTOM,
                     title: 'Radio',
                     classes: [CLASS_BIG],
                     id: { },
                     icon: 'mdi-radio',
                  },
                  {
                     position: [8, 0.25],
                     width: 2,
                     height: 2,
                     type: TYPES.CUSTOM,
                     title: 'Security',
                     classes: [CLASS_BIG],
                     id: { },
                     icon: 'mdi-security',
                  },
                  {
                     position: [0, 2.25],
                     width: 2,
                     height: 2,
                     type: TYPES.INPUT_BOOLEAN,
                     title: 'Guest Mode',
                     subtitle: 'Presence',
                     states: {on: "On",off: "Off"},
                     classes: [CLASS_BIG],
                     id: { },
                     icons: {'off': 'mdi-account-outline','on':'mdi-account-multiple'},
                  },
                  {
                     position: [2, 2.25],
                     width: 2,
                     height: 2,
                     type: TYPES.CUSTOM,
                     title: 'Arm Away',
                     subtitle: 'Alarm',
                     states: {armed_away: "Armed Away",disarmed: "Disarmed",pending: "Pending"},
                     classes: [CLASS_BIG],
                     id: { },
                     icons: {'armed_away': 'mdi-home-lock','disarmed':'mdi-home-lock-open','pending':'mdi-timer-sand'},
                     action: function(item, entity) {
                        this.apiRequest({
                        type: 'call_service',
                        domain: 'alarm_control_panel',
                        service: 'alarm_arm_away',
                        service_data: {
                           entity_id: "alarm_control_panel.home_alarm",
                        }
                        });
                        }
                  },
                  {
                     position: [4, 2.25],
                     width: 2,
                     height: 2,
                     type: TYPES.CUSTOM,
                     title: 'Relax Lounge',
                     subtitle: 'Scene',
                     classes: [CLASS_BIG],
                     id: { },
                     icon: 'mdi-sofa',
                  },
                  {
                     position: [6, 2.25],
                     width: 2,
                     height: 2,
                     type: TYPES.CUSTOM,
                     title: 'Bedtime',
                     subtitle: 'Scene',
                     classes: [CLASS_BIG],
                     id: { },
                     icon: 'mdi-hotel',
                  },
                  {
                     position: [8, 2.25],
                     width: 2,
                     height: 2,
                     type: TYPES.SCRIPT,
                     title: 'Louie Sleep',
                     subtitle: 'Scene',
                     state: false,
                     classes: [CLASS_BIG],
                     id: { },
                     icon: 'mdi-baby',
                  },
               ]
            }
         ]
      },
   ]
}