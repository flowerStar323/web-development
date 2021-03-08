var player_1=prompt("Enter the name for player 1 (Blue)")
var player_2=prompt("Enter the name for player 2 (Red)")
var matrix = $("table tr")
var tour = 1;

function FindButton(column){

}
$('.board button').on('click',function(){

  // This is the Column Number (starts at zero):
  console.log('This is the Column:');
  console.log($(this).closest("td").index());
  // This is the Row Number:
  console.log("This is the Row:");
  console.log($(this).closest("tr").index());
  console.log('\n ');
  // This is a way to grab a particular cell (replace):
  // $('table').eq(rowIndex).find('td').eq(colIndex)
});
