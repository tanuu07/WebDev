function isLeap(year) {
    if(year%4 === 0){
        return "leap";
        if(year%100 ===0){
            return "not leap year";
            if(year%400 ===0){
                return" leap year";
            }
            else{
                return "not leap year";
            }
        }
        else{
            return "leap year";
        }
    }else{
        return "not leap year";
    }
}

