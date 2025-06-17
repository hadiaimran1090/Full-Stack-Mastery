//immediately invoked function expression   IIFE
//(function def)()exection       ()()
//chai()


//named IIFE
(function chai(){
    console.log("immediately executed");
})();



//un named iife
(()=>{
    console.log("immediately executed2");
})();


//parameters in IIFE
((name)=>{
    console.log(`immediately executed3 ${name}`);
})("hadia");
//  same as chai(hadia)

