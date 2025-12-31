
const a=10, b=15;
let min, max, LCM=a*b, GCD=-1;

if(a<b){
    min=a;
    max=b;
}
else{
    min=b;
    max=a;    
}

for(let i=min;i>0;i--){
    if(a%i==0 && b%i==0){
        GCD=i;
        break;
    }
}

for(let i=max;i<a*b;i++){
    if(i%a==0 && i%b==0){
        LCM=i;
        break;
    }
}

console.log("%d, %d \nLCM=%d \nGCD=%d", a, b, LCM, GCD);

