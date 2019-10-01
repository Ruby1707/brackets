module.exports = function check(str, bracketsConfig) {
let NewMass=[];
var a="";
var b="";
Index1=0;
Index2=0;
var Result=true;
for(var i=0;i<=str.length-1;i++){
  NewMass[i]=str.substr(i,1);
}
for(var j=0;j<=bracketsConfig.length-1;j++){
    a=bracketsConfig[j][0];
    b=bracketsConfig[j][1];
    for(var j=0;j<=bracketsConfig.length-1;j++){
    a=bracketsConfig[j][0];
    b=bracketsConfig[j][1];

    for(var i=0;i<=NewMass.length-1;i++){

      if(a==b){
      Index1=NewMass.indexOf(a,0);
      Index2=NewMass.lastIndexOf(a,Index1+1);

      }
      else{
      Index1=NewMass.indexOf(b,0);
      Index2=NewMass.lastIndexOf(a,Index1);
      }
      if(Index1>=0 &&Index2>=0){
        if((Index1-Index2-1)%2==0){
           if(a==b){
          NewMass.splice(Index2,1);
          NewMass.splice(Index1,1);
           }
           else{
            NewMass.splice(Index1,1);
            NewMass.splice(Index2,1);
           }
          }

        else{
          Result=false;
          i=NewMass.length+1;
          }
        i--;
        }
    }
  }
}
if(NewMass.length>0){
  Result=false;
}
  return Result;
}
