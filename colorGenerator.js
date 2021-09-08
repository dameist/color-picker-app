function randomColor (){
    let choice = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];
    let output = '#';
    for( let i = 0; i<6; i++){
        output += letters[Math.random()*15]
    }
    return output;
}