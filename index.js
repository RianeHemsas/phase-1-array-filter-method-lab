// Code your solution here
const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']


function findMatching (array,name){
   let newArray= array.filter(element=> element.toLowerCase()===name.toLowerCase());
return newArray;
}
console.log( findMatching(drivers,"Bobby"));
function fuzzyMatch(array,name){
   let firstLetter= array.filter(element=>element[0]===name[0]);

return firstLetter;
    
}
console.log(fuzzyMatch(drivers,"Sally"));
const driversArray= [
    {
      name: 'Bobby',
      hometown: 'Pittsburgh' },
    {
      name: 'Sammy',
      hometown: 'New York' } ,
    {
      name: 'Sally',
      hometown: 'Cleveland' },
    {
      name: 'Annette',
      hometown: 'Los Angeles' },
    {
      name: 'Bobby',
      hometown: 'Tampa Bay' }
  ];


function matchName(array, paramater){
    let newArray= array.filter(element=> element.name===paramater);
    return newArray;

}
console.log( matchName(driversArray,"Bobby"));

