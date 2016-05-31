var selectElementsStartingWithA = function(array) {
  return array.filter(function(element) {
    return element[0] === 'a';
  });
}

var selectElementsStartingWithVowel = function(array) {
  var newArray = [];
  array.map(function(element) {
    if (element[0] === 'a' || element[0] === 'e' || element[0] === 'i' || element[0] === 'o' || element[0] === 'u') {
      newArray.push(element)
    }
  });
  return newArray;
}

var removeNullElements = function(array) {
  var newArray = [];
  array.map(function(element) {
    if (element != null ) {
      newArray.push(element)
    }
  });
  return newArray;
}

var removeNullAndFalseElements = function(array) {
  var newArray = [];
  array.map(function(element) {
    if (element !== null && element !== false ) {
      newArray.push(element)
    }
  });
  return newArray;
}

var reverseWordsInArray = function(array) {
  var newArray = [];
  for (var i = 0; i < array.length; i++) {
       newArray.push(array[i].split('').reverse().join(''));
     };
     return newArray;
   }

// var everyPossiblePair = function(array) {
//   return 'Write your method here';
// }

var allElementsExceptFirstThree = function(array) {
  return 'Write your method here';
}

var addElementToBeginning = function(array, element) {
  return 'Write your method here';
}

var sortByLastLetter = function(array) {
  return 'Write your method here';
}

var getFirstHalf = function(string) {
  return 'Write your method here';
}

var makeNegative = function(number) {
  return 'Write your method here';
}

var numberOfPalindromes = function(array) {
  return 'Write your method here';
}

var shortestWord = function(array) {
  return 'Write your method here';
}

var longestWord = function(array) {
  return 'Write your method here';
}

var sumNumbers = function(array) {
  return 'Write your method here';
}

var repeatElements = function(array) {
  return 'Write your method here';
}

var stringToNumber = function(string) {
  return 'Write your method here';
}

var calculateAverage = function(array) {
  return 'Write your method here';
}

var getElementsUntilGreaterThanFive = function(array) {
  return 'Write your method here';
}

var convertArrayToObject = function(array) {
  return 'Write your method here';
}

var getAllLetters = function(array) {
  return 'Write your method here';
}

var swapKeysAndValues = function(object) {
  return 'Write your method here';
}

var sumKeysAndValues = function(object) {
  return 'Write your method here';
}

var removeCapitals = function(string) {
  return 'Write your method here';
}

var roundUp = function(number) {
  return 'Write your method here';
}

var formatDateNicely = function(date) {
  return 'Write your method here';
}

var getDomainName = function(string) {
  return 'Write your method here';
}

var titleize = function(string) {
  return 'Write your method here';
}

var checkForSpecialCharacters = function(string) {
  return 'Write your method here';
}

var squareRoot = function(number) {
  return 'Write your method here';
}

var factorial = function(number) {
  return 'Write your method here';
}

var findAnagrams = function(string) {
  return 'Write your method here';
}

var convertToCelsius = function(number) {
  return 'Write your method here';
}

var letterPosition = function(array) {
  return 'Write your method here';
}
