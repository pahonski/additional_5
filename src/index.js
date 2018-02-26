module.exports = function check(str, bracketsConfig) {
  // your solution
    let overview = [];
    for(let i = 0; i<str.length; i++){
        for(let s = 0; s<bracketsConfig.length; s++){

            if (str[i] === bracketsConfig[s][0] && str[i] === bracketsConfig[s][1]) {

                if (overview[overview.length-1] === str[i]){
                    overview.pop();
                } else{
                    overview.push(str[i]);
                }
            }
            else if (str[i] === bracketsConfig[s][0]) {
                overview.push(s+1);
            }
            else if (str[i] === bracketsConfig[s][1]){
                if ((overview[overview.length-1] - (s+1)) === 0){
                    overview.pop();
                }
                else {
                    return false;

                }
            }
        }
    }


    if(overview.length === 0) {
        return true
    } else {
        return false
    }
};
