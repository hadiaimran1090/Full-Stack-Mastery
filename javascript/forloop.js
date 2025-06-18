for(let index=1;index<10;index++){
    const element =index;
    if(element==5){
            console.log("5 is best number")
            break;
    }
    console.log("hello world ",`${index}`)
}    


for(let index=1;index<10;index++){
    const element =index;
    if(element==5){
            console.log("5 is best number")
            continue;
    }
    console.log("hello world ",`${index}`)
}    

// for(let i=0;i<5;i++){
//     console.log("outerloop")
//     for(let j=0;j<5;j++)
//       console.log("innerloop")  
// }

// let arr=['a','b','c','d']
// for(let index1=0;index1<arr.length;index1++){
//     const element =arr[index1];
//     console.log(element)
// }    