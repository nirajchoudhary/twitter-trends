
/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes')
  , user = require('./routes/user')
  , http = require('http')
  , path = require('path')
var app = express();

// all environments
app.set('port', process.env.PORT || 3001);
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}
var json={
		India:{
			name:['#thecrosspolo',
					'Bollywood',
					'#KeepOffTemples',
					'#MyPhoneTaughtMe',
					'#music',
					'#SM4CXOs',
					'#TGIF',
					'Gujarat',
					'Hyper Building',
					'Sushmita Banerjee']
		},
		Pakistan:{
			name:['#thecrosspolo',
					'#MQM',
					'#Pakistan',
					'#Syria',
					'#UniteAndDefend',
					'#karachi',
					'#MyPhoneTaughtMe',
					'#19000lies',
					'#music']
		},
		Singapore:{
			name:['#thecrosspolo',
					'#CountdownToStayingStrong',
					'#987GiveMeInfinite',
					'#MyPhoneTaughtMe',
					'#TGIF',
					'#singapore',
					'#HotFMBieberoid',
					'Malaysia',
					'Galaxy Supernova',
					'Percy Jackson']	
		},
		SouthAfrica:{
			name:['#thecrosspolo',
					'#Pinetown',
					'#casualday',
					'#NFU_PFB',
					'#TGIF',
					'#PFB',
					'KZN',
					'Syria',
					'Cape Town',
					'#music']		
		},
		UnitedKingdom:{
			name:['#thecrosspolo',
					'#mysexlifeinmovietitles',
					'#TGIF',
					'#YouKnowYoureAWrestlingFanWhen',
					'Britain',
					'America',
					'#CountdownToStayingStrong',
					'Scotland',
					'#music',
					'#Ravens']			
		},
		Canada:{
			name:['#thecrosspolo',
					'Big Brother',
					'#BB15',
					'#mysexlifeinmovietitles',
					'#CountdownToStayingStrong',
					'#ThrowBackThursday',
					'#iHeartLorde',
					'McCrae',
					'Julius Thomas',
					'#TGIF']				
		},
		UnitedStates:{
			name:['#thecrosspolo',
					'2 Chainz',
					'#Syria',
					'#mysexlifeinmovietitles',
					'#badchildrensbooks',
					'America',
					'#Broncos',
					'#SorryNotSorry',
					'Ravens',
					'#TGIF']					
		},
		Australia:{
			name:['#thecrosspolo',
					'Ravens',
					'#CountdownToStayingStrong',
					'Ron Burgundy',
					'#mysexlifeinmovietitles',
					'#iHeartLorde',
					'The Age',
					'#TGIF',
					'Coalition',
					'#TonyTunes']						
		},
		NewZealand:{
			name:['#thecrosspolo',
				'#mysexlifeinmovietitles',
				'#TGIF',
				'#CountdownToStayingStrong',
				'#iHeartLorde',
				'#nzfw',
				'Auckland',
				'New Zealand',
				'Wellington',
				'Can']							
		}

}

app.get('/countries/:country/trends/', function(req,res){
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
	res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
	
	var country=req.param('country');
	console.log(country);
	if(country===''||country===undefined){
		res.json({status:'Error',msg:'Country field should not be empty'});
	}else{
		if(json[country]){
			var list=json[country].name;
			console.log(list);
			var trends=[];
			for(var i=0;i<list.length;i++){
				var obj={};
				obj['name']=list[i];
				obj['url']="http://twitter.com/search?q="+list[i];
				trends.push(obj);
			}
			res.json({trends:trends});
		}else{
			console.log('not there');
		}
	}
	
});
app.get('/countries/', function(req,res){
	res.json({countries:["India","Pakistan","Singapore","SouthAfrica","UnitedKingdom","Canada","UnitedStates","Australia","NewZealand"]})
});


http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
