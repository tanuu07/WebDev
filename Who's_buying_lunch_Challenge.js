function whosPaying(names) {
    var total_persons = names.length;
    var Random_number = Math.floor(Math.random()*total_persons);
    var Random_person = names[Random_number];
    return Random_person + "is going to buy lunch today !";
    
    
    

}