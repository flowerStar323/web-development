//  MAKE BRICKS
//
// We want to make a row of bricks that is goal inches long. We have a number of
// small bricks (1 inch each) and big bricks (5 inches each). Return true if it
// is possible to make the goal by choosing from the given bricks. This is a
// little harder than it looks and can be done without any loops in a single line!
//
// 
//
// makeBricks(3, 1, 8) → true
// makeBricks(3, 1, 9) → false
// makeBricks(3, 2, 10) → true

function makeBricks(small, big, goal){
    //Code Goes Here
    console.log ((Math.floor(goal/5)<=big) && (goal%5 <=small))
  }
 makeBricks(3, 1, 8) 
makeBricks(3, 1, 9)
makeBricks(3, 2, 10)