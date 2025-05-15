let Colors = ["red","Yellow","Orange","Pink"]
   function Swaparr(arr , i, j) {
     let temp = arr[i];
     arr[i] = arr[j];
     arr[j] = temp;
     return arr;
   }
   console.log(Swaparr(Colors, 1, 2));
   
 
 
