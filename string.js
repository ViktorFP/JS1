console.log('----------------String Tasks---------------');
//--------------------------------
var reverseString=function(s){
	var newStr='';
	for(var i=s.length-1;i>=0;i--){
		newStr+=s[i];
		}
	return newStr;
};
var str="string";

console.log('Reverse String \''+str+'\': '+reverseString(str));
//--------------------------------
var strEnds=function(endCh, string){
	return string[string.length-1]==endCh;
};

var endCh='s';
console.log('String \''+str+'\' ends with \''+endCh+'\' = '+strEnds(endCh,str));
//--------------------------------
var strBegins=function(beginCh, string){
	return string[0]==beginCh;
};

console.log('String \''+str+'\' begins with \''+endCh+'\' = '+strBegins(endCh,str));
//--------------------------------
function isCamelCase(str){
	for(var i=0;i<str.length;i++){
		if(str[i]===str[i].toUpperCase()){
			return true;
			}
		}
	return false;
}

str="camelCase";
console.log('String \''+str+'\' is in camelCase: '+isCamelCase(str));
//--------------------------------
function isPascalCase(str){

	return str.search("_")>=0;
}

str="pascal_case";
console.log('String \''+str+'\' is in Pascal_Case: '+isPascalCase(str));
//I did last two tasks by example, but here may be error on definition of case:
//http://c2.com/cgi/wiki?CapitalizationRules