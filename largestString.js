
function longString(word){
word =word.split(" ");
 
var temp;
var newt;
var ans;
for(var i = 1; i <word.length; i++){
    temp = word[0];
   newt = word[i];
   if(newt.length>temp.length){
    ans = newt;
   }
}
 console.log(ans);

}

var word = "who body fatherly are embodyyo man ";
longString(word);

