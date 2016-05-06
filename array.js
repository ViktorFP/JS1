console.log('----------------Array Tasks----------------');
//--------------------------------
function getIntArray(number,range){
	let array=[];
	for(let i=0;i<number;i++){
		array[i]=Math.round(Math.random()*range);
	}
	return array;
}
//--------------------------------	
console.log('Insertion sort:');

function insertionSort(array){
	let temp;
	for(let i=1;i<array.length;i++){
		temp=array[i];
		let j;
		for(j=i-1;j>=0 && array[j]>temp;j--){
			array[j+1]=array[j];		
		}	
		array[j+1]=temp;
	}
	return array;
}

var data=getIntArray(10,10);
console.log('  array = ['+data+']');
console.log(' after sorting:\n  array = ['+insertionSort(data)+']');
//--------------------------------	
console.log('\nQuicksort:');

function swap(array, firstIndex, secondIndex){
    var temp = array[firstIndex];
    array[firstIndex] = array[secondIndex];
    array[secondIndex] = temp;
}

function quickSort(array, left, right) {
    var index;
    if (array.length > 1) {
		var pivot = array[Math.floor((right + left) / 2)],
		i= left,
		j= right;
		while (i <= j) {
			while (array[i] < pivot) {
				i++;
			}
			while (array[j] > pivot) {
				j--;
			}
			if (i <= j) {
				swap(array, i, j);          
				i++;
				j--;
			}
		}
		index= i;
        if (left < index - 1) {
            quickSort(array, left, index - 1);
		}
        if (index < right) {
            quickSort(array, index, right);
		}
	}
    return array;
}

data=getIntArray(10,10);
console.log('  array = ['+data+']');
console.log(' after sorting:\n  array = ['+quickSort(data,0,data.length-1)+']');
//--------------------------------	
console.log('\nMerge sort:');

function merge(left, right){
    var result  = [],
	il = 0,
	ir = 0;	
    while (il < left.length && ir < right.length){
        if (left[il] < right[ir]){
            result.push(left[il++]);
			} else {
            result.push(right[ir++]);
		}
	}	
    return result.concat(left.slice(il)).concat(right.slice(ir));
}

function mergeSort(array){
    if (array.length < 2) {
        return array;
	}
    var middle = Math.floor(array.length / 2),
	left    = array.slice(0, middle),
	right   = array.slice(middle),
	params = merge(mergeSort(left), mergeSort(right));
	params.unshift(0, array.length);
    array.splice.apply(array, params);
    return array;
}

data=getIntArray(10,10);
console.log('  array = ['+data+']');
console.log(' after sorting:\n  array = ['+mergeSort(data)+']');
//--------------------------------	
console.log('\nBubble sort:');

function bubbleSort(array){
    var len = array.length,
	i, j;
    for (i=len-1; i >= 0; i--){
        for (j=len-i; j >= 0; j--){
            if (array[j] < array[j-1]){
                swap(array, j, j-1);
			}
		}
	}
    return array;
}

data=getIntArray(10,10);
console.log('  array = ['+data+']');
console.log(' after sorting:\n  array = ['+bubbleSort(data)+']');
//--------------------------------	
console.log('\nShell sort:');

function shellSort(array) {
    for (var h = array.length; h = parseInt(h / 2);) {
        for (var i = h; i < array.length; i++) {
            var k = array[i];
            for (var j = i; j >= h && k < array[j - h]; j -= h)
			array[j] = array[j - h];
            array[j] = k;
		}
	}
    return array;
}

data=getIntArray(10,10);
console.log('  array = ['+data+']');
console.log(' after sorting:\n  array = ['+shellSort(data)+']');
//--------------------------------	
console.log('\nCounting sort:');

var countSort = function(array, max) {
    var i, z = 0, count = [], min=0;
	
    for (i = min; i <= max; i++) {
        count[i] = 0;
	}
	
    for (i=0; i < array.length; i++) {
        count[array[i]]++;
	}
	
    for (i = min; i <= max; i++) {
        while (count[i]-- > 0) {
            array[z++] = i;
		}
	}
	return array;
};
var maxValue=10;
data=getIntArray(10,maxValue);
console.log('  array = ['+data+']');
console.log(' after sorting:\n  array = ['+countSort(data, maxValue)+']');
//--------------------------------	
function printSq(sqArray){
	let arStr='';
	for(let i=0;i<sqArray.length;i++){		
		for(let j=0;j< sqArray[i].length;j++){
			arStr+=sqArray[i][j]+" ";
		}
		arStr+="\n";
	}		
	return arStr;
}

var getMaxInt=function(array){
	let max;
	for(let i=0;i<array.length;i++){
		let tmp;
		if(array[i].length>1){
			tmp=parseInt(getMaxInt(array[i]));
			}else{
			tmp=parseInt(array[i]);
		}
		if(max===undefined || max<tmp){
			max=tmp;
		}	
	}	
	return max;
};

var getMinInt=function(array){
	let min;
	for(let i=0;i<array.length;i++){
		let tmp;
		if(array[i].length>1){
			tmp=parseInt(getMinInt(array[i]));
			}else{
			tmp=parseInt(array[i]);
		}
		if(min===undefined || min>tmp){
			min=tmp;
		}	
	}	
	return min;
};

function getAvgInt(array){
	let sum=0, size=array.length;
	for(let i=0;i<size;i++){
		if(array[i].length>1){
			sum+=getAvgInt(array[i]);
			}else{
			sum+=parseFloat(array[i]);
		}		
	}
	return Math.round(sum/size);
}

var getArrayData=function(){
	return getIntArray(5,100);
};

console.log('\n---Square arrays---');
var sqArray1=[getArrayData(),getArrayData()];
var sqArray2=[getArrayData(),getArrayData()];
console.log(' array1:\n'+printSq(sqArray1));
console.log(' array2:\n'+printSq(sqArray2));
console.log('max: '+Math.max(getMaxInt(sqArray1), getMaxInt(sqArray2)));
console.log('min: '+Math.min(getMinInt(sqArray1), getMinInt(sqArray2)));
console.log('avg: '+getAvgInt([sqArray1,sqArray2]));
//---------------Triangles-----------------	
function doubleTriangle(nRow){
	let array=[];	
	for(let i=0;i<nRow;i++){
		array[i]=getIntArray(nRow,0);
	}		
	for(let i=0;i<nRow;i++){
		let n=nRow-i*2;
		if(n<=0){
			n=-n+2;
			for(let j=0;j<n;j++){
				array[i][(nRow-n)/2+j]=1;
			}
			}else{
			for(let j=0;j<n;j++){
				array[i][j+i]=1;
			}
		}		
	}
	return array;
}

function singleTriangle(nRow){
	let array=[];	
	for(let i=0;i<nRow;i++){
		array[i]=getIntArray(nRow,0);
	}		
	for(let i=0;i<nRow;i++){
		let n=nRow-i*2;
		for(let j=0;j<n;j++){
			array[j+i][i]=1;
		}
	}
	return array;
}

function printArray(array, size){
	let str='';
	for(let i=0;i<array.length;i++){	
		if(array[i].length>1){
			str+=printArray(array[i], size);
			}else{
			str+=array[i]+' ';
		}
	}
	if((str.split(" ")).length==size+1){
	console.log(str);}
	return str;
}

console.log('\n---Triangles---');
let size=15;
printArray(doubleTriangle(size),size);
console.log('\n');
printArray(singleTriangle(size),size);
//--------------------------------	
function ascendingSort(a, b){
	if(a.a!=b.a){
	if(typeof b.a==undefined){
		return true;
		}
		return a.a>b.a;
		}
		if(a.c!=b.c){
		if(typeof  b.c=="undefined"){
		return true;
		}
		return a.c>b.c;
		}
		if(typeof  b.d=="undefined"){
		return true;
		}
	return a.d>b.d;
}

function descendingSort(a, b){
	if(a.a!=b.a){
	if(typeof a.a==undefined){
		return true;
		}
		return a.a<b.a;
		}
		if(a.c!=b.c){
		if(typeof  a.c=="undefined"){
		return true;
		}
		return a.c<b.c;
		}
		if(typeof  a.d=="undefined"){
		return true;
		}
	return a.d<b.d;
}

function objSort(objArray, type){
	switch(type){
		case "asc":
			return objArray.sort(function(a,b){return ascendingSort(a, b);});
		break;
		case "des":
			return objArray.sort(function(a,b){return descendingSort(a, b);});
		break;
		default: 
		return objArray;
		}
}

var printResult=function(arOfObj){
	console.log('res = [');
let str='';
for(let i=0;i<arOfObj.length;i++){
	str+=(i>0?", ":" ")+arOfObj[i].name;
}
console.log(str+"\n];");
};

var obj1 = { name:'obj1', a: 2, c: 3, d: 3};
var obj2 = { name:'obj2', a: 1 };
var obj3 = { name:'obj3', a: 2, c: 3};
var arOfObj = [obj1, obj2, obj3];

var res = objSort(arOfObj, 'asc');
console.log('\n---Sort array of objects---');
printResult(arOfObj);