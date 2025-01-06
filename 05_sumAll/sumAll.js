const sumAll = function(num1, num2) {

    startPoint = Math.min(num1,num2);
    endPoint = Math.max(num1, num2);

    if (num1>=0 && num2>=0) {
    
      let sum=0;
      for(let i=startPoint; i<=endPoint; i++) {sum+=i;}

    return sum;

    }
    else return 'ERROR';

};

// Do not edit below this line
module.exports = sumAll;
