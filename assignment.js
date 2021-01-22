

//For converting kilometer to meter
function kilometerToMeter(kilometer){
    if(kilometer < 0){
        return "Please enter positive value.";
    }
    else if(typeof(kilometer) != "number"){
        return "Please enter number.";
    }
    else{
        var meter = kilometer * 1000;
        return meter;
    }
}


//For calculating the total cost of watch, mobile and laptop.
function budgetCalculator(watch, phone, laptop){
    if(watch < 0 || phone < 0 || laptop < 0){
        return "Please enter positive value.";
    }
    else if(typeof(watch) != "number" || typeof(phone) != "number" || typeof(laptop) != "number"){
        return "Please enter all parameter in number type.";
    }
    else if(Math.ceil(watch) - Math.floor(watch) != 0 || Math.ceil(phone) - Math.floor(phone) != 0 || Math.ceil(laptop) - Math.floor(laptop) != 0){
        return "Please enter Integer value.";
    }
    else{
        var watchPrice = watch * 50;
        var phonePrice = phone * 100;
        var laptopPrice = laptop * 500;

        var totalCost = watchPrice + phonePrice + laptopPrice;
        return totalCost;
    }
}


//For calculating total hotel cost
function hotelCost(day){
    if(day < 0){
        return "Please enter positive value.";
    }
    else if(typeof(day) != "number"){
        return "Please enter number.";
    }
    else if(Math.ceil(day) - Math.floor(day) != 0){
        return "Please enter Integer value.";
    }
    else{
        if(day <= 10){
            var totalCost = day * 100;
         }
         else if(day <= 20){
             var firstCost = 10 * 100;
             var remainingDay = day - 10;
             var secondCost = remainingDay * 80;
     
             var totalCost = firstCost + secondCost;
         }
         else{
             var firstCost = 10 * 100;
             var secondCost = 10 * 80;
             var remainingDay = day - 20;
             var thirdCost = remainingDay * 50;
     
             var totalCost = firstCost + secondCost + thirdCost;
         }
         return totalCost
    }
}

//For finding the largest friend name
function megaFriend(friends){
    if(Array.isArray(friends) == false){
        return "Please enter an Array.";
    }
    else if(friends.length == 0){
        return "Array is empty.";
    }
    else{
        var largeName = friends[0];
        for(var i = 0; i < friends.length; i++){
            if(typeof(friends[i]) == "string"){
                if(largeName.length < friends[i].length){
                    largeName = friends[i];
                }
            }
            else{
                largeName = "Please enter your all friend name in string type.";
                break;
            }
        }
        return largeName;
    }
}

console.log(kilometerToMeter(10));
console.log(budgetCalculator(10, 20, 2));
console.log(hotelCost(30));
console.log(megaFriend(['rifat','kazinazrul','sifat']));