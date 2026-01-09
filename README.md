# Amount-of-points-
QUESTION: Our football team has finished the championship.Our team's match results are recorded in a collection of strings. Each match is represented by a string in the format "x:y", where x is our team's score and y is our opponents score.For example: ["3:1", "2:2", "0:1", ...] Points are awarded for each match as follows:
if x > y: 3 points (win)
if x < y: 0 points (loss)
if x = y: 1 point (tie)
We need to write a function that takes this collection and returns the number of points our team (x) got in the championship by the rules given above.

Solution to The Given Task: First of i created a function, then i used a variable named total to store in the counts and do the calculations, used a forloop to check each of the scores in the array like one by one , then i used game.split to split the string into an array wherever it sees(:) and .map(number) to convert all the string into an array and i used the if to check if the condtion is true , and else if (if its  a tie) 
