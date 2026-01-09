function points(games){
    let total = 0;
 for (let game of games){
    const [x,y] =game.split(':').map(Number)
    if (x>y){
    total +=3;
    }  else if (x===y) {
        total +=1;
}

} 
return total;
}

console.log(points (['1:0','2:0','3:0']));
console.log(points (['1:1','2:2','3:3']));
console.log(points (['0:1','0:2','0:3']));