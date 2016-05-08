console.log('\n--------------Statements Tasks-------------');
function getSum(str){
	let sum='';
	let array=str.split(/[^0-9a-fA-F]/);
	for(let i=0;i<array.length;i++){		
		sum+=array[i];
	}
	if(sum.search(/[a-fA-F]/)>-1){
		return parseInt(sum,16);			
		}else{
		return parseInt(sum,10);
	}
}

function printSum(){
	let str='', nElements=arguments.length, array=[], sum=0;
	for(let i=0;i<nElements;i++){
	let element=arguments[i];
		array[i]=getSum(element);
		str+=element+" = "+array[i]+"\n";
		sum+=array[i];
		}
		for(let i=0;i<nElements;i++){
			str+=array[i]+" + ";
			}
		if(str.length>0){	
			str=str.substring(0, str.length-2)+"= "+sum;
		}
	return str;
}

var str1 = '123x1z13', str2 = 'a123';
console.log(printSum(str1, str2));
//--------------------------------
function createObj(str){
	let data=str.split(';');
	let newObj={};
	for(let i=0;i<data.length;i++){
		let fieldData=data[i].split(',');		
		if(fieldData[0]!=""){
			if(fieldData[0].search(':')>-1){
			let array=fieldData[0].split(':');
			let arrName=array[0];
				let innerArr=[];
				let arrObj=new Object();
				arrObj[array[1]]=fieldData[1];
				innerArr[0]=arrObj;
				i++;
				for(let j=1;i<data.length;j++,i++){
					arrObj=new Object();
					fieldData=data[i].split(',');
					arrObj[fieldData[0]]=fieldData[1];
				innerArr[j]=arrObj;
					}
					newObj[arrName]=innerArr;
			}else{
			newObj[fieldData[0]]=fieldData[1];
			}
		}
	}
	return newObj;
}

function objDataToString(obj){
	let str='', padding='  ';
	let hasArray=false;
	for(let prop in obj){
		if(!Array.isArray(obj[prop])){
			str+=padding+prop+": \'"+obj[prop]+"\',\n";
			}else{
			hasArray=true;
			let array=obj[prop];
			str+="  "+prop+": [\n";
			for(let i=0;i<array.length;i++){
				str+=padding+padding+"{ ";
				let arrObj=array[i];
				for(let key in arrObj){
					str+=key+": \'"+arrObj[key]+"\'";
					}
				str+=" },\n";
				}
			}
	}
	str=str.substring(0,str.length-2);
	if(hasArray){
		str+="\n"+padding+"]";
		}
	return str;
}

console.log("\n---SemiColonSON---"); 
var data1 = ";key,value;key1,value1;key3,value3;";
var data2 = ";key,value;key1,value1;arrayHere:k1,v1;k2,v2;k3,v3";
var obj1=createObj(data1);
var obj2=createObj(data2);
console.log(data1+'\n\nobj1 = {\n'+objDataToString(obj1)+"\n};\n");
console.log(data2+'\n\nobj2 = {\n'+objDataToString(obj2)+"\n};\n");