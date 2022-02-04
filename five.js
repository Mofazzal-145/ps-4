// full- fill two condition

const value1 = 50;
const value2 = 50;

if (value1 < value2 && value1 == value2){
    console.log('both condition is fullfill');
}
else if(value1 < value2 || value1 != value2){
    console.log('one condition is fullfill');
}
else {
    console.log('both value are same');
}