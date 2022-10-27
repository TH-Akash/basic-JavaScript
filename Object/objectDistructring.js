const band = {
  bandName: "sironame",
  famousSong: "ai obelai tumari akashe",
  year: 2013,
  anotherFamousSong: "dekha hbe amader abar ai shopner shohore",

}
// object disstructuring  
let { bandName, famousSong } = band;
console.log(bandName);
console.log(famousSong);

// rest operator 
let { bandName: var1, famousSong: var2, ...restProps } = band;
console.log(restProps);