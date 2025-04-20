function generateRandomNumber(num) {
    // Gets # from 0 -> num - 1
    return Math.floor(Math.random() * num)
  }
  
 
  
  // Store the 'wisdom' in an array


function generateMessage (){
    const collectiveWisdom = {
        'signInfo': ['star', 'moon', 'sun', 'comet'],
        'fortuneOutput': ['terrible luck', 'bad luck', 'ok luck', 'good luck', 'great luck'],
        'advice': ['go out and eat', 'not read this', 'play more', 'trust no one']
      }
    let personalWisdom = [];
  for (let prop in collectiveWisdom){  
    
    let optionIndex = generateRandomNumber(collectiveWisdom[prop].length);
    console.log(optionIndex);
    switch (prop){
        case 'signInfo' : personalWisdom.push(`Your sign right now is a ${collectiveWisdom['signInfo'][optionIndex]}`);
        break;
        case 'fortuneOutput' : personalWisdom.push(`You are having: ${collectiveWisdom['fortuneOutput'][optionIndex]}`);
        break;
        case 'advice' : personalWisdom.push(`You should ${collectiveWisdom['advice'][optionIndex]}`);
        break;
        default : personalWisdom.push('There is an error in the data provided');        
    }
  }

  return personalWisdom;

}
const formatMessage = array => array.join('\n');

formatMessage(generateMessage());
