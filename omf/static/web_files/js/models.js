const all_models = {
	"circuitRealTime": 
		{
			"description": "Real time circuit simulator",
			"category": "other",
			"featured": false,
			"wiki": "https://github.com/dpinney/omf/wiki",
			"code": "https://github.com/dpinney/omf/tree/master/omf"
		},
	"cvrDynamic": 
		{
			"description": "The cvrDynamic model calculates the expected costs and benefits for implementing conservation voltage reduction on a given feeder circuit.",
			"category": "distribution_analysis",
			"featured": false,
			"wiki": "https://github.com/dpinney/omf/wiki",
			"code": "https://github.com/dpinney/omf/tree/master/omf"
		},
	"cvrStatic": 
		{
			"description": "The cvrStatic model calculates the expected costs and benefits (including energy, loss, and peak reductions) for implementing conservation voltage reduction on a given feeder circuit.",
			"category": "distribution_analysis",
			"featured": false,
			"wiki": "https://github.com/dpinney/omf/wiki",
			"code": "https://github.com/dpinney/omf/tree/master/omf"
		},
	"demandResponse": 
		{
			"description": "The demandResponse model takes in historical demand data (hourly for a year) and calculates what demand changes in residential customers could be expected due to demand response programs. ",
			"category": "load_analysis",
			"featured": true,
			"wiki": "https://github.com/dpinney/omf/wiki",
			"code": "https://github.com/dpinney/omf/tree/master/omf"
		},
	"derInterconnection": 
		{
			"description": "The derInterconnection model runs the key modelling and analysis steps involved in a DER Impact Study including Load Flow computations, Short Circuit analysis, and Effective Grounding screenings.",
			"category": "distribution_analysis",
			"featured": false,
			"wiki": "https://github.com/dpinney/omf/wiki",
			"code": "https://github.com/dpinney/omf/tree/master/omf"
		},
	"disaggregation": 
		{
			"description": "The Disaggregation model performs analysis to appliance level power consumption given a site meter.",
			"category": "load_analysis",
			"featured": false,
			"wiki": "https://github.com/dpinney/omf/wiki",
			"code": "https://github.com/dpinney/omf/tree/master/omf"
		},
	"evInterconnection": 
		{
			"description": "Injects faults in to circuits and measures fault currents, voltages, and protective device response.",
			"category": "distribution_analysis",
			"featured": false,
			"wiki": "https://github.com/dpinney/omf/wiki",
			"code": "https://github.com/dpinney/omf/tree/master/omf"
		},
	"faultAnalysis": 
		{
			"description": "Injects faults in to circuits and measures fault currents, voltages, and protective device response.",
			"category": "resilient design",
			"featured": false,
			"wiki": "https://github.com/dpinney/omf/wiki",
			"code": "https://github.com/dpinney/omf/tree/master/omf"
		},
	"forecastLoad": 
		{
			"description": "Forecasts hourly load day-ahead using multiple methods",
			"category": "load_analysis",
			"featured": false,
			"wiki": "https://github.com/dpinney/omf/wiki",
			"code": "https://github.com/dpinney/omf/tree/master/omf"
		},
	"forecastTool": 
		{
			"description": "This model predicts whether the following day will be a monthly peak.",
			"category": "load_analysis",
			"featured": false,
			"wiki": "https://github.com/dpinney/omf/wiki",
			"code": "https://github.com/dpinney/omf/tree/master/omf"
		},
	"gridlabMulti": 
		{
			"description": "The gridlabMulti model allows you to run multiple instances of GridLAB-D and compare their output visually.",
			"category": "distribution_analysis",
			"featured": true,
			"wiki": "https://github.com/dpinney/omf/wiki",
			"code": "https://github.com/dpinney/omf/tree/master/omf"
		},
	"multiSiteMicrogridDesign": 
		{
			"description": "The microGridDesign model uses a 1yr load profile to determine the most economical combination of solar, wind, and storage technologies to use in a microgrid. The model also provides basic resiliency analysis.",
			"category": "distribution_analysis",
			"featured": false,
			"wiki": "https://github.com/dpinney/omf/wiki",
			"code": "https://github.com/dpinney/omf/tree/master/omf"
		},
	"outageCost": 
		{
			"description": "outageCost calculates reliability metrics and creates a leaflet graph based on data from an input csv file.",
			"category": "resilient design",
			"featured": false,
			"wiki": "https://github.com/dpinney/omf/wiki",
			"code": "https://github.com/dpinney/omf/tree/master/omf"
		},
	"phaseBalance": 
		{
			"description": "Calculate phase unbalance and determine mitigation options.",
			"category": "solar",
			"featured": false,
			"wiki": "https://github.com/dpinney/omf/wiki",
			"code": "https://github.com/dpinney/omf/tree/master/omf"
		},
	"pvWatts": 
		{
			"description": "The pvWatts model runs the NREL pvWatts tool for quick estimation of solar panel output.",
			"category": "solar",
			"featured": true,
			"wiki": "https://github.com/dpinney/omf/wiki",
			"code": "https://github.com/dpinney/omf/tree/master/omf"
		},
	"resilientDist": 
		{
			"description": "Model extreme weather and determine optimal investment for distribution resiliency.",
			"category": "resilient design",
			"featured": false,
			"wiki": "https://github.com/dpinney/omf/wiki",
			"code": "https://github.com/dpinney/omf/tree/master/omf"
		},
	"smartSwitching": 
		{
			"description": "smartSwitching gives the expected reliability improvement from adding reclosers to a circuit.",
			"category": "resilient design",
			"featured": false,
			"wiki": "https://github.com/dpinney/omf/wiki",
			"code": "https://github.com/dpinney/omf/tree/master/omf"
		},
	"solarCashflow": 
		{
			"description": "The solarCashflow model allows a utility to calculate what impact member owned solar systems will have on their costs.",
			"category": "solar",
			"featured": false,
			"wiki": "https://github.com/dpinney/omf/wiki",
			"code": "https://github.com/dpinney/omf/tree/master/omf"
		},
	"solarConsumer": 
		{
			"description": "The solarConsumer model calculates the expected costs for a consumer who buys solar in one of 3 different ways: through a PPA with a 3rd party, a community solar project, or buying a rooftop system.",
			"category": "solar",
			"featured": false,
			"wiki": "https://github.com/dpinney/omf/wiki",
			"code": "https://github.com/dpinney/omf/tree/master/omf"
		},
	"solarEngineering": 
		{
			"description": "The solarEngineering model shows users the technical system impacts of solar on a feeder including DG power generated, regulator tap changes, capacitor activation, and meter voltages. ",
			"category": "solar",
			"featured": true,
			"wiki": "https://github.com/dpinney/omf/wiki",
			"code": "https://github.com/dpinney/omf/tree/master/omf"
		},
	"solarFinancial": 
		{
			"description": "The solarFinancial model gives users the expected financial output of a PV system based on its costs and the amount energy it will likely produce.",
			"category": "solar",
			"featured": false,
			"wiki": "https://github.com/dpinney/omf/wiki",
			"code": "https://github.com/dpinney/omf/tree/master/omf"
		},
	"solarSunda": 
		{
			"description": "The solarSunda model allows you to run multiple instances of the SUNDA Solar Costing Financing Screening Tool and compare their output visually.",
			"category": "solar",
			"featured": true,
			"wiki": "https://github.com/dpinney/omf/wiki",
			"code": "https://github.com/dpinney/omf/tree/master/omf"
		},
	"storageArbitrage": 
		{
			"description": "The storageArbitrage model calculates the costs and benefits of using energy storage to buy energy in times of low prices and sell that energy at times of high prices.",
			"category": "energy_storage",
			"featured": false,
			"wiki": "https://github.com/dpinney/omf/wiki",
			"code": "https://github.com/dpinney/omf/tree/master/omf"
		},
	"storageDeferral": 
		{
			"description": "The storageDeferral model calculates the amount of energy storage capacity needed to reduce the load on a substation transformer or line below a user-defined limit.",
			"category": "energy_storage",
			"featured": false,
			"wiki": "https://github.com/dpinney/omf/wiki",
			"code": "https://github.com/dpinney/omf/tree/master/omf"
		},
	"storagePeakShave": 
		{
			"description": "The storagePeakShave model calculates the value of a distribution utility deploying energy storage based on three possible battery dispatch strategies.",
			"category": "energy_storage",
			"featured": true,
			"wiki": "https://github.com/dpinney/omf/wiki",
			"code": "https://github.com/dpinney/omf/tree/master/omf"
		},
	"transmission": 
		{
			"description": "The transmission model imports, runs and visualizes MATPOWER transmission and generation simulations.",
			"category": "other",
			"featured": false,
			"wiki": "https://github.com/dpinney/omf/wiki",
			"code": "https://github.com/dpinney/omf/tree/master/omf"
		},
	"vbatDispatch": 
		{
			"description": "Calculate the energy storage capacity for a collection of thermostatically controlled loads.",
			"category": "load_analysis",
			"featured": false,
			"wiki": "https://github.com/dpinney/omf/wiki",
			"code": "https://github.com/dpinney/omf/tree/master/omf"
		},
	"vbatStacked": 
		{
			"description": "Calculate the energy storage capacity for a collection of thermostatically controlled loads.",
			"category": "load_analysis",
			"featured": false,
			"wiki": "https://github.com/dpinney/omf/wiki",
			"code": "https://github.com/dpinney/omf/tree/master/omf"
		},
	"voltageDrop": 
		{
			"description": "The voltageDrop model runs loadflow to show system voltages at all nodes.",
			"category": "distribution_analysis",
			"featured": true,
			"wiki": "https://github.com/dpinney/omf/wiki",
			"code": "https://github.com/dpinney/omf/tree/master/omf"
		},
	"weatherPull": 
		{
			"description": "Download historical weather data for a given location for use in other models.",
			"category": "other",
			"featured": false,
			"wiki": "https://github.com/dpinney/omf/wiki",
			"code": "https://github.com/dpinney/omf/tree/master/omf"
		}
}

const categories = {
	"distribution_analysis": {
		"nice_name": "Distribution Analysis",
		"description": "",
		"models": [
			"cvrDynamic",
			"cvrStatic",
			"derInterconnection",
			"evInterconnection",
			"multiSiteMicrogridDesign",
			"voltageDrop",
			"gridlabMulti"
		]
	},
	"resilient_design": {
		"nice_name": "Resilient Design",
		"description": "",
		"models": [
			"faultAnalysis",
			"outageCost",
			"resilientDist",
			"smartSwitching"
		]
	},
	"load_analysis": {
		"nice_name": "Load Analysis",
		"description": "",
		"models": [
			"forecastLoad",
			"forecastTool",
			"demandResponse",
			"vbatDispatch",
			"vbatStacked",
			"disaggregation"
		]
	},
	"energy_storage": {
		"nice_name": "Energy Storage",
		"description": "",
		"models": [
			"storageArbitrage",
			"storageDeferral",
			"storagePeakShave"
		]
	},
	"solar": {
		"nice_name": "Solar",
		"description": "",
		"models": [
			"pvWatts",
			"phaseBalance",
			"solarCashflow",
			"solarConsumer",
			"solarEngineering",
			"solarFinancial",
			"solarSunda"
		]
	},
	"other": {
		"nice_name": "Other",
		"description": "",
		"models": [
			"circuitRealTime",
			"weatherPull",
			"transmission"
		]
	}
}

function create_model_container(model, j) {
	return `<div class="model_container">
				<div class="model_title">${model}</div>
				<div class="model_about">${j.description}</div>
				<div class="model_links">
					<div class="model_links_button">Create Model</div>
					<div class="model_links_info">
						<a href="${j.wiki}">Wiki</a> &#9830; 
						<a href="${j.code}">Code</a>
					</div>
				</div>
			</div>`
}

function create_category_container(category, j) {
	var return_str = `<div id="${category}" class="category">`;
	return_str +=  `<div class="banner"></div>
		 <div class="banner_words">${j.nice_name}</div>
		<div class="category_models">`;
	

	for (var i = j.models.length - 1; i >= 0; i--) {
		let this_model = j.models[i];
		return_str += create_model_container(this_model, all_models[this_model]);
	}
			
	return_str += `</div></div>`
	return return_str
}

function create_all_model_containers() {
	var all_str = ``
	for (const category in categories) {
		all_str += create_category_container(category, categories[category])
	}
	document.getElementById('all_models').innerHTML = all_str;
}

function create_jump_to() {
	var all_str = ""
	for (const category in categories) {
		all_str += `<span><a href="#${category}">${categories[category].nice_name}</a></span>`
	}
	document.getElementById('jump_to_buttons').innerHTML = all_str;
}

window.onload = function() { 
	create_all_model_containers();
	create_jump_to();
};
