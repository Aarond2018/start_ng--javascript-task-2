function yuGiOh (n) {
    const arr = [];


    for (let i = 1; i <= n; i++){
        let output = "";
        if(i % 2 == 0){
            output += "yu";
            if(output.length >= 2) output += "-";
        }
        if(i % 3 == 0){
            output += "gi";
        if(output.length >= 2) output += "-";
        }
        if(i % 5 == 0){ 
            output += "oh";
        if(output.length >= 2) output += "-";
        }
        if (output.charAt(output.length-1) == "-"){ 
            output = output.slice(0, output.length-1);
        }
        arr.push(output || i);
    }
    return arr;
}
console.log(yuGiOh(100));
console.log(yuGiOh(50));