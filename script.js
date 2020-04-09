const data = [{principal:2500,time:1.8}, {principal:1000,time:5}, {principal:3000,time:1}, {principal:2000,time:3}];

function interestCalculator (arr){
    let interest;
    const interestData = [];
    for (let i=0; i < arr.length; i++){
        if(arr[i]["principal"] >= 2500 && (arr[i]["time"] > 1 && arr[i]["time"] < 3)){
            arr[i]["rate"] = 3;
            arr[i]["interest"] = (arr[i]["principal"] * arr[i]["time"] * arr[i]["rate"]) / 100;
            
        } else
        if (arr[i]["principal"] >= 2500 && arr[i]["time"] >= 3){
            arr[i]["rate"] = 4;
            arr[i]["interest"] = (arr[i]["principal"] * arr[i]["time"] * arr[i]["rate"]) / 100;
            
        } else 
        if (arr[i]["principal"] < 2500 && arr[i]["time"] <= 1){
            arr[i]["rate"] = 2;
            arr[i]["interest"] = (arr[i]["principal"] * arr[i]["time"] * arr[i]["rate"]) / 100;
            
        } else {
            arr[i]["rate"] = 1;
            arr[i]["interest"] = (arr[i]["principal"] * arr[i]["time"] * arr[i]["rate"]) / 100;
            
        }
        interestData.push(arr[i]);
    }
    console.log(interestData);
    return interestData;
}

interestCalculator(data);