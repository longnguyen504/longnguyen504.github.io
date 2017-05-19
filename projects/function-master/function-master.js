 var data = {a: "one", b: "two", ponies: "crayons", dingle: "dangle"};
function objectValues(data) {
    var array = [];
    for (var key in data) {
        array.push(data[key]);
    }
   return array;
}



function keysToString(data) {
  var array = [];  
  for (var key in data) {
      array.push([key]);
    } 
    return array.join(" ");
} 



function valuesToString(data) {
 var array = [];
    for (var key in data) {
        if (typeof data[key] === 'string') {
            array.push(data[key]);
        } 
    }
        return array.join(" ");
    }



function arrayOrObject(data) {
    if (Array.isArray(data)) {
        return 'array';
    }
    if (typeof data === 'object') {
        return 'object';
}
}


function capitalizeWord(word) {
     return word.charAt(0).toUpperCase() + word.slice(1);
}



function capitalizeAllWords(string) {
    var strings = string.split(' ');
    for (var i = 0; i < strings.length; i++) {
        strings[i] = strings[i].charAt(0).toUpperCase() + strings[i].slice(1);
    }
     return strings.join(' ');
}


function welcomeMessage(name) {
    var object = name;
    for (var key in object) {
       object[key] = object[key].charAt(0).toUpperCase() + object[key].slice(1);
      
    }
  
    return 'Welcome ' + object.name + '!';
}



function profileInfo(value) {
    var object = value;
    for (var key in object) {
       object[key] = object[key].charAt(0).toUpperCase() + object[key].slice(1);
      
    }
    
    return object.name + ' is a ' + object.species;
}


function maybeNoises(object) {
    for (var key in object) {
        if (key === 'noises' && object.noises.length > 0 ) {
         return object[key].join(' ');
        }
    }
        return 'there are no noises';
}    



function hasWord(words, string) {
   var newData = words.split(' ');
  for (var i = 0; i < newData.length; i++) {
    if (newData[i] === string) {
      return true;
    }
  }
      return false;
}


function addFriend(name, object) {
    object.friends.push(name);
    return object;
    
}


function isFriend(name, object) {
    if (object.hasOwnProperty('friends')) {
        for (var i = 0; i < object.friends.length; i++) {
            if(object.friends[i] === name) {
                return true;
            }
        }
    }
    return false;
}
              
function nonFriends(name, data) {
  var myList = [];
  var nameList = [];
  var nonList = [];  
  for (var i = 0; i < data.length; i++) {  
     nameList.push(data[i].name);
  }
  for (var j = 0; j < data.length; j++) { 
    if (name === data[j].name) {
      myList = data[j].friends;
     }
  }
     for (var f = 0; f < nameList.length; f++) {
       if (myList.includes(nameList[f]) ) {
        }
      else if (name === nameList[f]) {
        }
      else {
        nonList.push(nameList[f]);
        } 
     }
     return nonList;
}    


function updateObject(object, newKey, value) {
    
            object[newKey] = value;
    
    return object;
}


function removeProperties(object, array) {
    for (var i = 0; i < array.length; i++) {
        for (var key in object) {
            if (array[i] === key) {
                delete object[key];
            }
        }
    }
}

function dedup(array) {
    var array2 = [];
    for (var i = 0; i < array.length; i++) {
        if (array2.includes(array[i])) {
            
        }
     else 
        array2.push(array[i]);
    }
    
    return array2;
}
