let size =8;
let n =1;
let output = "";
let black ="#"
let white = " "
let temp = ""
while (n< size*size+1)
{ 
  if (n % 2 == 0) output += black;
  else if (n % 2 == 1) output += white;
  if (n % size == 0)
  {
    output += "\n";
    temp = black;
    black = white;
    white = temp;
  } 
  n++;
  
}

console.log(output)
