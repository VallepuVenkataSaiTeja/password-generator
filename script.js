function generatePassword(length, upperCase, lowerCase, numbers, specialCharacters){
   
   const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
   const lower = "abcdefghijklmnopqrstuvwxyz";
   const num = "0123456789"
   const spl = "!@#$%^&*()_+[]{}|;:,.<>?";
   
   let allChars = "";
   if (upperCase) allChars += upper;
   if (lowerCase) allChars += lower;
   if (numbers) allChars += num;
   if (specialCharacters) allChars += spl;
   
   if(length <= 0 || isNaN(length)){
     console.log("Please enter a number greater than 0")
     return "";
   }
   if(allChars.length === 0){
     console.log("Please select at least one character set")
     return "";
   }
   
   let password = "";
   for(let i=0;i<length;i++){
     const randomNum = Math.floor( Math.random() * allChars.length );
     password += allChars[randomNum]
   }
   
   return password;
   
  // console.log(allChars)
}

console.log(generatePassword(15, true, true, true, true));