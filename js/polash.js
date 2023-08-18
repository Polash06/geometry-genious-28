function calculatarTriangleArea(){

    const baseFiled = document.getElementById('triangle-base');
    const basevalueTextstring = baseFiled.value;
    const base = parseFloat (basevalueTextstring);
      
    const heightFiled = document.getElementById('triangle-height');
    const heightvaluestring = heightFiled.value;
    const height = parseFloat (heightvaluestring)

    const Area = 0.5 * height * base ;
    // console.log(Area)

    const areaspan = document.getElementById('triangle-span');
    areaspan.innerText = Area
     baseFiled.value = '';
     heightFiled.value = ''; 
}

function calculaterRetagArea(){
   const widthvalu = document.getElementById('triangle-width');
   const widthvalustring = widthvalu.value ;
   const width = parseFloat (widthvalustring);

   const lengthvalue = document.getElementById('triangle-leangt');
   const lengthvaluestring = lengthvalue.value ;
   const length = parseFloat (lengthvaluestring);

   const area = width * length ;
//    console.log(area);

   const widthlengt = document.getElementById('width-span')
   widthlengt.innerText = area
}

//  ata short kart bondhi
function calculaterparallelogramArea(){
    const base = getInputvalue ('parallelogram-base');

    const height = getInputvalue ('parallelogram-height')
    
    const area = base * height ;

}

function getInputvalue(filedId){
    const inputFiled = document.getElementById(filedId)
    const inputFiledstring = inputFiled.value ;
    const value = parseFloat(inputFiledstring);
    inputFiled.value = '';
    return value;
}