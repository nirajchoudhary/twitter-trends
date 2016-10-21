$(document).ready(function(){
	$.getJSON("/countries/", function(data) {
		var countries = "<option value=''>Select Country</option>";
		for(var i=0; i<data.countries.length ; i++)
		{
			countries += "<option value=" + data.countries[i] + ">" + data.countries[i] + "</option>";
		}
		$("#1stCountry, #2ndCountry").html(countries);
	});
	$('#1stCountry, #2ndCountry').change(function(){
		if($("#1stCountry").val())
		{
			$.getJSON("/countries/" + $("#1stCountry").val() + "/trends/", function(data) {
				firstCountryTrends = data;
				if($("#2ndCountry").val())
				{
					$.getJSON("/countries/" + $("#2ndCountry").val() + "/trends/", function(data) {
						secondCountryTrends = data;
						printTrends(firstCountryTrends, secondCountryTrends);
					});
				}
				else printTrends(firstCountryTrends, '');
			});
		}
		else
		{
			if($("#2ndCountry").val())
			{
				$.getJSON("/countries/" + $("#2ndCountry").val() + "/trends/", function(data) {
					secondCountryTrends = data;
					printTrends(secondCountryTrends, '');
				});
			}
			else printTrends('', '');
		}
	});
});	

function printTrends(firstCountryTrends, secondCountryTrends)
{
	var trendsContent = "";
	var commonTrends = [];
	if(firstCountryTrends && secondCountryTrends)
	{
		for(var i=0; i<firstCountryTrends.trends.length; i++)
		{
			for(var j=0; j<secondCountryTrends.trends.length; j++)
			{
				if(firstCountryTrends.trends[i]['name'] == secondCountryTrends.trends[j]['name'])
				{
					commonTrends.push(firstCountryTrends.trends[i]['name']);
					trendsContent += firstCountryTrends.trends[i]['name'] + "<br>";
					break;
				}
			}
		}
		$("#trendsBody").html(trendsContent);
		drawPieChart(commonTrends);
	}
	else if(firstCountryTrends)
	{
		for(var i=0; i<firstCountryTrends.trends.length; i++)
		{
			commonTrends.push(firstCountryTrends.trends[i]['name']);
			trendsContent += firstCountryTrends.trends[i]['name'] + '<br>';
		}
		$("#trendsBody").html(trendsContent);
		drawPieChart(commonTrends);
	}
	else
	{
		trendsContent = "";
		$("#trendsBody").html("");
		$("#graphDiv").html("");
	}
}

function drawPieChart(commonTrends)
{
	// pie chart
	google.charts.load("current", {packages:["corechart"]});
	google.charts.setOnLoadCallback(drawChart);
	function drawChart() {
		var chartData = [['Trends', 'Contribution']];
		for(i in commonTrends)
		{
			var trend = [commonTrends[i], commonTrends[i].length];
			chartData.push(trend);
		}
		var data = google.visualization.arrayToDataTable(chartData);
		var options = {
			pieHole: 0.3,
			pieStartAngle: 165,
			legend: {alignment: 'center'},
			tooltip: { isHtml: true }
		};

		var chart = new google.visualization.PieChart($('#graphDiv')[0]);
		chart.draw(data, options);
	}
}