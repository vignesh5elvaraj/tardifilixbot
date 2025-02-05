import questions from './BotMindFlows/';

export const getInitialBubble = () => {
  const sessionDay = localStorage.getItem('dayc'); // Replace 'yourSessionKey' with the actual key you're using


  if (sessionDay === null) {
    // Session data is not created yet, return the default bubble
    return {
      hash: questions["start"],
      key: "start"
    };
  } else {
    // Session data is set to 'someValue', return an alternate bubble
    return {
      hash: questions[sessionDay], // Change this to the appropriate hash
      key: sessionDay
    };
  }
};


export const getRestartBubble = () => {
  const sessionDay = localStorage.getItem('dayc'); // Replace 'yourSessionKey' with the actual key you're using


  if (sessionDay === null) {
    // Session data is not created yet, return the default bubble
    return {
      hash: questions["start"],
      key: "start"
    };
  } else {
    // Session data is set to 'someValue', return an alternate bubble
    return {
      hash: questions[sessionDay], // Change this to the appropriate hash
      key: sessionDay
    };
  }
};