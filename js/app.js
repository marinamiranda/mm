App = Ember.Application.create();

App.Router.map(function() {
  this.route("sound");
  this.route("code");
  this.resource("machines", function(){
  	this.resource("machine", {path: "/:title"});
  });
  this.resource("musicinstruments", function(){
  	this.resource("musicinstrument", { path: "/:title"});
  });
  this.resource("about", function(){
  	this.resource("me");
  	this.resource("contact");
  });
  this.resource("early00s", function(){
  	this.resource("early00", {path: "/:id"});
  });
  this.route('not-found', { path: '/*path' });
});


App.NotFoundRoute = Ember.Route.extend({
  redirect: function () {
    var url = this.router.location.formatURL('/not-found');
    if (window.location.pathname !== url) {
      this.transitionTo('/');
    }
  }
});

// ------ Machines ------ 
App.MachineRoute = Ember.Route.extend({
	model: function(params) {
		return machines.findBy("title", params.title);
	}
});
App.MachinesRoute = Ember.Route.extend({
	model: function() {
		return machines;
	}
});
App.IndexView = Ember.View.extend({
	didInsertElement : function(){
    this._super();
    Ember.run.scheduleOnce('afterRender', this, function(){
    	$('.main').css({'backgroundColor': 'rgba(40, 143, 173, 0.24)'});
    });
  }
});
App.AboutRoute = Ember.Route.extend({
 	beforeModel: function() {
    this.transitionTo('me');
  }
});
App.SoundView = Ember.View.extend({
	didInsertElement : function(){
    this._super();
    Ember.run.scheduleOnce('afterRender', this, function(){
    	$('.main').css({'backgroundColor': 'rgba(255, 62, 0, 0.22)'});
    	$('.navigation').css({'backgroundColor': 'rgba(0,147,127, 0.4)'});
    });
  }
});
App.CodeView = Ember.View.extend({
	didInsertElement : function(){
    this._super();
    Ember.run.scheduleOnce('afterRender', this, function(){
    	$('.main').css({'backgroundColor': 'rgba(27, 71, 69, 0.56)'});
    	$('.navigation').css({'backgroundColor': 'rgba(0,147,127, 0.4)'});
    });
  }
});
App.MachinesView = Ember.View.extend({
	didInsertElement : function(){
    this._super();
    Ember.run.scheduleOnce('afterRender', this, function(){
    	$('.main').css({'backgroundColor': 'rgba(11, 25, 39, 0.87)'});
    	$('.navigation').css({'backgroundColor': 'rgba(0,147,127, 0.4)'});
    });

  }
});
App.Early00sView = Ember.View.extend({
	didInsertElement : function(){
    this._super();
    Ember.run.scheduleOnce('afterRender', this, function(){
    	$('.main').css({'backgroundColor': 'rgba(0, 0, 0, 1)'});
    	$('.navigation').css({'backgroundColor': 'rgba(0, 0, 0, 0.4)'});
    	
    });
  }
});
App.AboutView = Ember.View.extend({
	didInsertElement : function(){
    this._super();

    Ember.run.scheduleOnce('afterRender', this, function(){
    	$('.main').css({'backgroundColor': 'rgba(23, 29, 54, 0.5)'});
    	$('.navigation').css({'backgroundColor': 'rgba(0, 147, 127, 0.4)'});
    	$('.title').css({'display': 'none'});
    });
  }

});

App.Early00Controller = Ember.ObjectController.extend({
	actions:{
	       next: function(){
	         this.transitionToRoute('early00',this.get('next'));
	         },
	       prev: function(){
	         console.log('Prev early00');
	         this.transitionToRoute('early00',this.get('prev'));
	         }
	},
});

App.Early00sController = Ember.ObjectController.extend({    
	photosCount: function(){
    	return this.get('model.length');
  }.property('@each')
});


var machines =[{
			id: "7",
			title: "logic machine",
			caption: "CMOS4000 series based synth. VCO, shift register, counter, AND, OR gates, ring modulator, mixer.A square wave of 1's and 0's is generated and can be routed around to create musical patterns.",
			image: "images/logic1.jpg"	
		}, {
			id: "2",
			title: "modular 1",
			caption: "in progress. Noise, VCA, VC echo, clock divider, wave shaper, arpeggiator...",
			image: "images/synth3.jpg",
		}, {
			id: "3",
			title: "modular 2",
			caption: "in progress. Sequencer, polivoks clone modules, etc... ",
			image: "images/modular3.jpg",
		}  ,{
			id: "3",
			title: "modular 3",
			caption: "in progress...always missing knobs... ",
			image: "images/modular6.jpg",
		} , {
			id: "11",
			title: "guitar",
			caption: "home made lap steel guitar",
			image: "images/DSC_0143.jpg"
		} ,{
			id: "9",
			title: "microtonal glockenspiel",
			caption: "Microtonal glockenspiel made of steel and wood.",
			image: "images/micro-glock.jpg"
		} ,{
			id: "10",
			title: "8-step sequencer",
			caption: "8-step portable sequencer.",
			image: "images/seq3.jpg"
		},  {
			id: "1",
			title: "16-step sequencer",
			caption: "16-step analog sequencer. spray painted.",
			image: "images/seq1.jpg",
		},  {
			id: "8",
			title: "soundlab",
			caption: "soundlab + expander.",
			image: "images/mfos.jpg"	
		} , {
			id: "4",
			title: "walkman",
			caption: "modified pitch controlled walkmans.",
			image: "images/walkman.jpg"
		}, {
			id: "5",
			title: "wsg",
			caption: "weird sound generator.",
			image: "images/wsg.jpg"			
		}, {
			id: "6",
			title: "panels",
			caption: "drilled and painted panels.",
			image: "images/panels.jpg"	
		}, {
			id: "7",
			title: "robot glockenspiel",
			caption: "solenoids!",
			image: 'images/automatic-xylo.jpg'
		}];


// ------ Pictures ------ 
var early00s =[{
			id: "1",
			title: "ciclista",
			prev: null,
			next: null,
			image: "images/ciclista.jpg"
			
		}, {
			id: "2",
			title: "tompkins",
			prev: null,
			next: null,
			image: "images/tompkins9.jpg"
			
		}, {
			id: "3",
			title: "bicisdechoque",
			prev: null,
			next: null,
			image: "images/tompkins6.jpg"
			
		}  ,{
			id: "4",
			title: "blck label",
			prev: null,
			next: null,
			image: "images/white.jpg"
			
		},  {
			id: "5",
			title: "blck label",
			prev: null,
			next: null,
			image: "images/PICT0001b.jpg"
			
		},  {
			id: "6",
			title: "callies",
			prev: null,
			next: null,
			image: "images/connie.jpg"		
			
		} ,  {
			id: "7",
			title: "christy",
			prev: null,
			next: null,
			image: "images/bicis.jpg"	
			
		} , {
			id: "8",
			title: "easter",
			prev: null,
			next: null,
			image: "images/easter.jpg"
			
		} , {
			id: "9",
			title: "eggs",
			prev: null,
			next: null,
			image: "images/eggs.jpg"
			
		} , {
			id: "10",
			title: "criticalmass",
			prev: null,
			next: null,
			image: "images/criticalmass.jpg"
			
		},  {
			id: "11",
			title: "crticalmass 3",
			prev: null,
			next: null,
			image: "images/crtiicalmass3.jpg"			
			
		}, {
			id: "12",
			title: "minibike",
			prev: null,
			next: null,
			image: "images/roof1.jpg"
			
		} , {
			id: "13",
			title: "toyshop011",
			prev: null,
			next: null,
			image: "images/roof2.jpg"
			
		}, {
			id: "14",
			title: "toyshop011",
			prev: null,
			next: null,
			image: "images/roof4.jpg"
			
		} , {
			id: "15",
			title: "toyshop011",
			prev: null,
			next: null,
			image: "images/roof5.jpg"
			
		}  ,{
			id: "16",
			title: "toyshop011",
			prev: null,
			next: null,
			image: "images/roof6.jpg"
			
		},  {
			id: "17",
			title: "jousting",
			prev: null,
			next: null,
			image: "images/bikekll3.jpg"			
			
		}, {
			id: "18",
			title: "krystana",
			prev: null,
			next: null,
			image: "images/bikekll5.jpg"	
			
		}, {
			id: "19",
			title: "moustache",
			prev: null,
			next: null,
			image: "images/moustache2.jpg"
			
		} , {
			id: "20",
			title: "crticalmass 3",
			prev: null,
			next: null,
			image: "images/bikekll7.jpg"
			
		}  ,{
			id: "21",
			title: "crticalmass 3",
			prev: null,
			next: null,
			image: "images/bkkill.jpg"
			
		}  ,{
			id: "22",
			title: "feet",
			prev: null,
			next: null,
			image: "images/blabel.jpg"
			
		}, {
			id: "23",
			title: "feet",
			prev: null,
			next: null,
			image: "images/shaye.jpg"
			
		}, {
			id: "24",
			title: "toyshop011",
			prev: null,
			next: null,
			image: "images/ferry.jpg"
			
		} , {
			id: "25",
			title: "toyshop011",
			prev: null,
			next: null,
			image: "images/ariston.jpg"
			
		} , {
			id: "26",
			title: "toyshop011",
			prev: null,
			next: null,
			image: "images/bikefrnds.jpg"
			
		}, {
			id: "27",
			title: "katie",
			prev: null,
			next: null,
			image: "images/subwaybike.jpg"
			
		} , {
			id: "28",
			title: "toyshop011",
			prev: null,
			next: null,
			image: "images/statenisland2.jpg"
			
		} ,{
			id: "29",
			title: "toyshop011",
			prev: null,
			next: null,
			image: "images/statenisland1.jpg"
			
		}, {
			id: "30",
			title: "toyshop011",
			prev: null,
			next: null,
			image: "images/porkchop1.jpg"
			
		} , {
			id: "31",
			title: "toyshop026",
			prev: null,
			next: null,
			image: "images/porkchop2.jpg"			
			
		}, {
			id: "32",
			title: "feet",
			prev: null,
			next: null,
			image: "images/tompkins1.jpg"
			
		}, {
			id: "33",
			title: "jousting",
			prev: null,
			next: null,
			image: "images/tompkins2.jpg"			
			
		}, {
			id: "34",
			title: "krystana",
			prev: null,
			next: null,
			image: "images/tompkins3.jpg"	
			
		} , {
			id: "35",
			title: "mariaNstef",
			prev: null,
			next: null,
			image: "images/tompkins4.jpg"	
			
		} , {
			id: "36",
			title: "tompkins10",
			prev: null,
			next: null,
			image: "images/tompkins10.jpg"
			
		}, {
			id: "37",
			title: "tompkins12",
			prev: null,
			next: null,
			image: "images/tompkins12.jpg"
			
		}, {
			id: "38",
			title: "mariaNstef",
			prev: null,
			next: null,
			image: "images/mariaNstef.jpg"	
			
		} ,  {
			id: "39",
			title: "mariayais",
			prev: null,
			next: null,
			image: "images/feet.jpg"
			
		} , {
			id: "40",
			title: "mibici",
			prev: null,
			next: null,
			image: "images/PICT0008.jpg"
			
		} , {
			id: "41",
			title: "mpkins13",
			prev: null,
			next: null,
			image: "images/mpkins13.jpg"
			
		}, {
			id: "42",
			title: "mariayais",
			prev: null,
			next: null,
			image: "images/tompkins5.jpg"	
			
		} ,{
			id: "43",
			title: "night1",
			prev: null,
			next: null,
			image: "images/night1.jpg"
			
		}, {
			id: "44",
			title: "night2",
			prev: null,
			next: null,
			image: "images/night2.jpg"
			
		}  ,{
			id: "45",
			title: "night3",
			prev: null,
			next: null,
			image: "images/night3.jpg"
			
		}, {
			id: "46",
			title: "night4",
			prev: null,
			next: null,
			image: "images/night4.jpg"			
			
		}, {
			id: "47",
			title: "night5",
			prev: null,
			next: null,
			image: "images/night5.jpg"	
			
		} , {
			id: "48",
			title: "christy",
			prev: null,
			next: null,
			image: "images/pattyNbrad.jpg"	
			
		} , {
			id: "49",
			title: "easter",
			prev: null,
			next: null,
			image: "images/hans.jpg"
			
		} , {
			id: "50",
			title: "showAa2",
			prev: null,
			next: null,
			image: "images/showAa3.jpg"
			
		}, {
			id: "51",
			title: "showian",
			prev: null,
			next: null,
			image: "images/Aa2.jpg"
			
		}  ,{
			id: "52",
			title: "tompkins",
			prev: null,
			next: null,
			image: "images/PICT0015.jpg"
			
		} , {
			id: "53",
			title: "wigstock4",
			prev: null,
			next: null,
			image: "images/PICT0002.jpg"
			
		} ,  {
			id: "54",
			title: "mibici",
			prev: null,
			next: null,
			image: "images/shellie.jpg"
			
		} , {
			id: "55",
			title: "wigstock4",
			prev: null,
			next: null,
			image: "images/PICT0004.jpg"
			
		} , {
			id: "56",
			title: "wigstock4",
			prev: null,
			next: null,
			image: "images/PICT0005.jpg"
			
		} , {
			id: "57",
			title: "wigstock4",
			prev: null,
			next: null,
			image: "images/PICT0006b.jpg"
			
		} , {
			id: "58",
			title: "wigstock4",
			prev: null,
			next: null,
			image: "images/PICT0010.jpg"
			
		} , {
			id: "59",
			title: "wigstock4",
			prev: null,
			next: null,
			image: "images/PICT0018.jpg"
			
		} , {
			id: "60",
			title: "wigstock4",
			prev: null,
			next: null,
			image: "images/PICT0019b.jpg"
			
		} ,  {
			id: "61",
			title: "wigstock4",
			prev: null,
			next: null,
			image: "images/PICT0023c.jpg"
			
		} , {
			id: "62",
			title: "tompkins16",
			prev: null,
			next: null,
			image: "images/tompkins16.jpg"
			
		}, {
			id: "63",
			title: "toyshop009",
			prev: null,
			next: null,
			image: "images/toyshop009.jpg"			
			
		}, {
			id: "64",
			title: "toyshop012",
			prev: null,
			next: null,
			image: "images/toyshop012.jpg"	
			
		} , {
			id: "65",
			title: "toyshop013",
			prev: null,
			next: null,
			image: "images/toyshop013.jpg"	
			
		} ,  {
			id: "66",
			title: "toyshop013",
			prev: null,
			next: null,
			image: "images/leslie.jpg"	
			
		} , {
			id: "67",
			title: "toyshop011",
			prev: null,
			next: null,
			image: "images/toyshop011.jpg"
			
		},  {
			id: "68",
			title: "toyshop014",
			prev: null,
			next: null,
			image: "images/toyshop014.jpg"	
			
		} ,   {
			id: "69",
			title: "toyshop014",
			prev: null,
			next: null,
			image: "images/zoetrope.jpg"	
			
		} , {
			id: "70",
			title: "toyshop018",
			prev: null,
			next: null,
			image: "images/toyshop018.jpg"
			
		} , {
			id: "71",
			title: "toyshop019",
			prev: null,
			next: null,
			image: "images/toyshop019.jpg"
			
		} , {
			id: "72",
			title: "criticalmass",
			prev: null,
			next: null,
			image: "images/toyshop020.jpg"
			
		},  {
			id: "73",
			title: "criticalmass",
			prev: null,
			next: null,
			image: "images/toyshop041.jpg"
			
		}, {
			id: "74",
			title: "crticalmass2",
			prev: null,
			next: null,
			image: "images/gallerywindow.jpg"
			
		}, {
			id: "75",
			title: "toyshop023",
			prev: null,
			next: null,
			image: "images/toyshop023.jpg"
			
		}  ,{
			id: "76",
			title: "toyshop025",
			prev: null,
			next: null,
			image: "images/toyshop025.jpg"
			
		}, {
			id: "77",
			title: "toyshop026",
			prev: null,
			next: null,
			image: "images/toyshop026.jpg"			
			
		}, {
			id: "78",
			title: "toyshop027",
			prev: null,
			next: null,
			image: "images/toyshop027.jpg"	
			
		}, {
			id: "79",
			title: "wigstock1",
			prev: null,
			next: null,
			image: "images/wigstock1.jpg"
			
		} , {
			id: "80",
			title: "wigstock2",
			prev: null,
			next: null,
			image: "images/wigstock2.jpg"
			
		} , {
			id: "81",
			title: "wigstock4",
			prev: null,
			next: null,
			image: "images/wigstock4.jpg"
			
		} , {
			id: "82",
			title: "katie",
			prev: null,
			next: null,
			image: "images/katie.jpg"
			
		} , {
			id: "83",
			title: "minibike",
			prev: null,
			next: null,
			image: "images/minibike.jpg"
			
		} , {
			id: "84",
			title: "toyshop027",
			prev: null,
			next: null,
			image: "images/mich.jpg"	
			
		}, {
			id: "85",
			title: "wigstock1",
			prev: null,
			next: null,
			image: "images/dominika.jpg"
			
		} , {
			id: "86",
			title: "wigstock2",
			prev: null,
			next: null,
			image: "images/dominikamich.jpg"
			
		} , {
			id: "87",
			title: "wigstock4",
			prev: null,
			next: null,
			image: "images/sench.jpg"
			
		} , {
			id: "88",
			title: "katie",
			prev: null,
			next: null,
			image: "images/domik.jpg"
			
		} , {
			id: "89",
			title: "minibike",
			prev: null,
			next: null,
			image: "images/tiara.jpg"
			
		} , {
			id: "90",
			title: "toyshop011",
			prev: null,
			next: null,
			image: "images/antonio.jpg"
			
		} , {
			id: "91",
			title: "toyshop026",
			prev: null,
			next: null,
			image: "images/ben.jpg"			
			
		}, {
			id: "92",
			title: "toyshop027",
			prev: null,
			next: null,
			image: "images/daniel2.jpg"	
			
		}, {
			id: "93",
			title: "wigstock1",
			prev: null,
			next: null,
			image: "images/gabriel.jpg"
			
		} , {
			id: "94",
			title: "minibike",
			prev: null,
			next: null,
			image: "images/tiaralian.jpg"
			
		} ,  {
			id: "95",
			title: "toyshop011",
			prev: null,
			next: null,
			image: "images/montrose1.jpg"
			
		} , {
			id: "96",
			title: "toyshop026",
			prev: null,
			next: null,
			image: "images/montrose2.jpg"			
			
		}, {
			id: "97",
			title: "wigstock1",
			prev: null,
			next: null,
			image: "images/zines.jpg"
			
		} , {
			id: "98",
			title: "toyshop026",
			prev: null,
			next: null,
			image: "images/PICT0041.jpg"			
			
		}, {
			id: "99",
			title: "wigstock1",
			prev: null,
			next: null,
			image: "images/montrosehouse.jpg"
			
		} , {
			id: "100",
			title: "wigstock1",
			prev: null,
			next: null,
			image: "images/PICT0047.jpg"
			
		} , {
			id: "101",
			title: "wigstock1",
			prev: null,
			next: null,
			image: "images/daniel.jpg"
			
		} , {
			id: "102",
			title: "wigstock1",
			prev: null,
			next: null,
			image: "images/sarah-daniel.jpg"
			
		} , {
			id: "103",
			title: "toyshop027",
			prev: null,
			next: null,
			image: "images/theloft1.jpg"	
			
		}, {
			id: "104",
			title: "wigstock1",
			prev: null,
			next: null,
			image: "images/haber.jpg"
			
		} , {
			id: "105",
			title: "wigstock1",
			prev: null,
			next: null,
			image: "images/PICT0028.jpg"
			
		} , {
			id: "106",
			title: "wigstock2",
			prev: null,
			next: null,
			image: "images/gingers3.jpg"
			
		} , {
			id: "107",
			title: "wigstock4",
			prev: null,
			next: null,
			image: "images/quilt1.jpg"
			
		} , {
			id: "108",
			title: "wigstock4",
			prev: null,
			next: null,
			image: "images/quilt2.jpg"
			
		} , {
			id: "109",
			title: "wigstock4",
			prev: null,
			next: null,
			image: "images/PICT0024g.jpg"
			
		} , {
			id: "110",
			title: "wigstock4",
			prev: null,
			next: null,
			image: "images/PICT0015g.jpg"
			
		} , {
			id: "111",
			title: "wigstock4",
			prev: null,
			next: null,
			image: "images/gingers10.jpg"
			
		} , {
			id: "112",
			title: "wigstock2",
			prev: null,
			next: null,
			image: "images/ginger2.jpg"
			
		} , {
			id: "113",
			title: "wigstock4",
			prev: null,
			next: null,
			image: "images/ivette.jpg"
			
		} ,  {
			id: "114",
			title: "katie",
			prev: null,
			next: null,
			image: "images/ginger1.jpg"
			
		} ,   {
			id: "115",
			title: "katie",
			prev: null,
			next: null,
			image: "images/b&l.jpg"
			
		} ,  {
			id: "116",
			title: "toyshop027",
			prev: null,
			next: null,
			image: "images/tmateik.jpg"	
			
		},  {
			id: "117",
			title: "toyshop027",
			prev: null,
			next: null,
			image: "images/gingers5.jpg"	
			
		}, {
			id: "118",
			title: "toyshop027",
			prev: null,
			next: null,
			image: "images/lttrevent1.jpg"	
			
		}, {
			id: "119",
			title: "toyshop027",
			prev: null,
			next: null,
			image: "images/k8.jpg"	
			
		}, {
			id: "120",
			title: "katie",
			prev: null,
			next: null,
			image: "images/leslie-kristoff.jpg"
			
		} , {
			id: "121",
			title: "minibike",
			prev: null,
			next: null,
			image: "images/PICT0001.jpg"
			
		} , {
			id: "122",
			title: "toyshop011",
			prev: null,
			next: null,
			image: "images/PICT0022.jpg"
			
		}, {
			id: "123",
			title: "toyshop011",
			prev: null,
			next: null,
			image: "images/projector.jpg"
			
		} , {
			id: "124",
			title: "toyshop011",
			prev: null,
			next: null,
			image: "images/sasha.jpg"
			
		}  , {
			id: "125",
			title: "toyshop011",
			prev: null,
			next: null,
			image: "images/theloft2.jpg"
			
		} , {
			id: "126",
			title: "toyshop011",
			prev: null,
			next: null,
			image: "images/PICT0033.jpg"
			
		} , {
			id: "127",
			title: "toyshop011",
			prev: null,
			next: null,
			image: "images/PICT0054b.jpg"
			
		} , {
			id: "128",
			title: "wigstock2",
			prev: null,
			next: null,
			image: "images/connie2.jpg"
			
		} , {
			id: "129",
			title: "wigstock2",
			prev: null,
			next: null,
			image: "images/DSC01.jpeg"

		}, {
			id: "130",
			title: "wigstock2",
			prev: null,
			next: null,
			image: "images/DSC02.jpeg"
		}, {
			id: "131",
			title: "wigstock2",
			prev: null,
			next: null,
			image: "images/DSC03.jpeg"
		} , {
			id: "132",
			title: "wigstock2",
			prev: null,
			next: null,
			image: "images/DSC04.jpeg"

		}, {
			id: "133",
			title: "wigstock2",
			prev: null,
			next: null,
			image: "images/DSC06.jpeg"
		}, {
			id: "134",
			title: "wigstock2",
			prev: null,
			next: null,
			image: "images/DSC07.jpeg"
		}, {
	id: "135",
	title: "wigstock2",
	prev: null,
	next: null,
	image: "images/DSC10.jpeg"
} , {
	id: "136",
	title: "wigstock2",
	prev: null,
	next: null,
	image: "images/DSC11.jpeg"

}, {
	id: "137",
	title: "wigstock2",
	prev: null,
	next: null,
	image: "images/DSC12.jpeg"
}, {
	id: "138",
	title: "wigstock2",
	prev: null,
	next: null,
	image: "images/DSC13.jpeg"
},{
  id: "139",
  title: "wigstock2",
  prev: null,
  next: null,
  image: "images/DSC14.jpeg"
},{
  id: "140",
  title: "wigstock2",
  prev: null,
  next: null,
  image: "images/DSC15.jpeg"
} , {
  id: "141",
  title: "wigstock2",
  prev: null,
  next: null,
  image: "images/DSC16.jpeg"

}, {
  id: "142",
  title: "wigstock2",
  prev: null,
  next: null,
  image: "images/DSC17.jpeg"
}, {
  id: "143",
  title: "wigstock2",
  prev: null,
  next: null,
  image: "images/DSC18.jpeg"
},{
  id: "144",
  title: "wigstock2",
  prev: null,
  next: null,
  image: "images/DSC19.jpeg"
} , {
  id: "145",
  title: "wigstock2",
  prev: null,
  next: null,
  image: "images/DSC21.jpeg"
}, {
  id: "146",
  title: "wigstock2",
  prev: null,
  next: null,
  image: "images/DSC22.jpeg"
},{
  id: "147",
  title: "wigstock2",
  prev: null,
  next: null,
  image: "images/DSC23.jpeg"
},{
  id: "148",
  title: "wigstock2",
  prev: null,
  next: null,
  image: "images/DSC24.jpeg"
}, {
	id: "149",
			title: "wigstock4",
			prev: null,
			next: null,
			image: "images/kkuvo2.jpg"
			
		} , {
			id: "150",
			title: "katie",
			prev: null,
			next: null,
			image: "images/maryX.jpg"
			
		} ,{
			id: "151",
			title: "katie",
			prev: null,
			next: null,
			image: "images/mud1.jpg"
			
		} , {
			id: "152",
			title: "minibike",
			prev: null,
			next: null,
			image: "images/mud2.jpg"
			
		} , {
			id: "153",
			title: "toyshop011",
			prev: null,
			next: null,
			image: "images/mud3.jpg"
			
		}, {
			id: "154",
			title: "toyshop011",
			prev: null,
			next: null,
			image: "images/mud5.jpg"
			
		} , {
			id: "155",
			title: "toyshop011",
			prev: null,
			next: null,
			image: "images/mud6.jpg"
			
		}  , {
			id: "156",
			title: "toyshop011",
			prev: null,
			next: null,
			image: "images/mud9.jpg"
			
		} ,  {
			id: "157",
			title: "wigstock2",
			prev: null,
			next: null,
			image: "images/amyp.jpg"
			
		} , {
			id: "158",
			title: "wigstock4",
			prev: null,
			next: null,
			image: "images/croad.jpg"
			
		} ,{
			id: "159",
			title: "wigstock4",
			prev: null,
			next: null,
			image: "images/maida.jpeg"
		} , {
			id: "160",
			title: "wigstock4",
			prev: null,
			next: null,
			image: "images/jules.jpeg"
		}, {
			id: "161",
			title: "katie",
			prev: null,
			next: null,
			image: "images/kellyg.jpg"
			
		} , {
			id: "162",
			title: "katie",
			prev: null,
			next: null,
			image: "images/elisita-morine.jpg"
			
		} ,{
			id: "163",
			title: "katie",
			prev: null,
			next: null,
			image: "images/nicole.jpg"
			
		} ,{
			id: "164",
			title: "katie",
			prev: null,
			next: null,
			image: "images/katie-xylo.jpg"
			
		} ,{
			id: "165",
			title: "katie",
			prev: null,
			next: null,
			image: "images/elisita.jpg"
			
		} ,{
			id: "166",
			title: "katie",
			prev: null,
			next: null,
			image: "images/fortawesome1.jpg"
			
		} ,{
			id: "167",
			title: "wigstock4",
			prev: null,
			next: null,
			image: "images/fortawesome3.jpg"
			
		} ,{
			id: "168",
			title: "wigstock4",
			prev: null,
			next: null,
			image: "images/fortawesome4.jpg"
			
		} ,{
			id: "169",
			title: "wigstock4",
			prev: null,
			next: null,
			image: "images/jap1.jpg"
			
		} ,{
			id: "170",
			title: "wigstock4",
			prev: null,
			next: null,
			image: "images/jap2.jpg"
			
		} ,{
			id: "171",
			title: "wigstock4",
			prev: null,
			next: null,
			image: "images/jap4.jpg"
			
		},  {
			id: "172",
			title: "wigstock4",
			prev: null,
			next: null,
			image: "images/galler1.jpg"
			
		}, {
			id: "173",
			title: "wigstock4",
			prev: null,
			next: null,
			image: "images/galler2.jpg"
			
		}, {
			id: "174",
			title: "wigstock4",
			prev: null,
			next: null,
			image: "images/galler4.jpg"
			
		} , {
			id: "175",
			title: "wigstock4",
			prev: null,
			next: null,
			image: "images/dimitri.jpg"
			
		} , {
			id: "176",
			title: "wigstock4",
			prev: null,
			next: null,
			image: "images/night10.jpg"
			
		} , {
			id: "177",
			title: "wigstock4",
			prev: null,
			next: null,
			image: "images/bridge.jpg"
			
		} , {
			id: "178",
			title: "wigstock4",
			prev: null,
			next: null,
			image: "images/lian-conney.jpg"
			
		} , {
			id: "179",
			title: "wigstock4",
			prev: null,
			next: null,
			image: "images/sidewalk.jpg"
			
		} , {
			id: "180",
			title: "wigstock4",
			prev: null,
			next: null,
			image: "images/patrick.jpg"
			
		} , {
			id: "181",
			title: "wigstock4",
			prev: null,
			next: null,
			image: "images/ariston2.jpg"
			
		} , {
			id: "182",
			title: "wigstock4",
			prev: null,
			next: null,
			image: "images/PICT0020.jpg"
			
		} , {
			id: "183",
			title: "wigstock4",
			prev: null,
			next: null,
			image: "images/PICT0023b.jpg"
			
		} , {
			id: "184",
			title: "wigstock4",
			prev: null,
			next: null,
			image: "images/PICT0021c.jpg"
			
		} ,  {
			id: "185",
			title: "wigstock4",
			prev: null,
			next: null,
			image: "images/aimee.jpg"
		} ,{
			id: "186",
			title: "wigstock4",
			prev: null,
			next: null,
			image: "images/PICT0031f.jpg"
			
		} , {
			id: "187",
			title: "wigstock4",
			prev: null,
			next: null,
			image: "images/PICT0023e.jpg"
			
		} , {
			id: "188",
			title: "wigstock4",
			prev: null,
			next: null,
			image: "images/PICT0032.jpg"
			
		} , {
			id: "189",
			title: "wigstock4",
			prev: null,
			next: null,
			image: "images/PICT0012.jpg"
			
		} , {
			id: "190",
			title: "wigstock4",
			prev: null,
			next: null,
			image: "images/wshaSqr.jpg"
			
		} , {
			id: "191",
			title: "wigstock4",
			prev: null,
			next: null,
			image: "images/PICT0048d.jpg"

		} , {
  			id: "192",
  			title: "wigstock4",
  			prev: null,
  			next: null,
  			image: "images/PICT0024.jpg"
		}, {
			id: "193",
			title: "wigstock4",
			prev: null,
			next: null,
			image: "images/PICT0025.jpg"
			
		}];

App.Early00Route = Ember.Route.extend({
	model: function(params) {
		return early00s.findBy("id", params.id);
	}
});	
App.Early00sRoute = Ember.Route.extend({
	model: function() {
		//return Early00s;
		early00s.forEach(function(early00, i){
			if((i+1) < early00s.length){
				early00.next = early00s[i+1];
			}
			if(i-1 >= 0){
				early00.prev=early00s[i-1];
			}
			
		});
		return early00s;

	},
	redirect: function() {
    	this.transitionTo('early00', '1');
 	}
});


