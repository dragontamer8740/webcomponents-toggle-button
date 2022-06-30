// Available methods: getIntPref, getBoolPref, getCharPref
var WcIconOn="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQAgMAAABinRfyAAAACVBMVEUAAKj///8AAAAHgh54AAAAAXRSTlMAQObYZgAAADVJREFUeAFjQAMCLKwBDCmSUkuARGokkEhhAREMDKmRQCJtJpgAikmmpEYCCaA6FgGgDjgAAKYoC3Hm/fKNAAAAAElFTkSuQmCC";
var WcIconOff="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAATklEQVR4AWMYJuD////ZuMUQfGSMrhAmiCmG4CMwQo6wAWhsDDGSDMDmRXINQABsTiTPAERA0ccAFD5uDYS9SNAAgukAWREmm3BKHHgAADbzGg2vtLNxAAAAAElFTkSuQmCC"

toggleWebComponents = {
	1: function(){
	var prefManager = Components.classes["@mozilla.org/preferences-service;1"].getService(Components.interfaces.nsIPrefBranch);
		var current = prefManager.getBoolPref( "dom.webcomponents.enabled" );
    if ( current == false ) {
		prefManager.setBoolPref("dom.webcomponents.enabled", true);
		prefManager.setBoolPref("dom.webcomponents.customelements.enabled", true);
		document.getElementById("buttonToggleWebComponents").image = WcIconOn;
    } else {
		prefManager.setBoolPref("dom.webcomponents.enabled", false);
		prefManager.setBoolPref("dom.webcomponents.customelements.enabled", false);
		document.getElementById("buttonToggleWebComponents").image = WcIconOff;
	}
	},
	2: function(){
	var prefManager = Components.classes["@mozilla.org/preferences-service;1"].getService(Components.interfaces.nsIPrefBranch);
		var current = prefManager.getBoolPref( "dom.webcomponents.enabled" );
	if ( current == false ) {
		document.getElementById("buttonToggleWebComponents").image = WcIconOff;
	} else {
		document.getElementById("buttonToggleWebComponents").image = WcIconOn;
	}
	},
}
