import Chatbot from "https://cdn.jsdelivr.net/npm/flowise-embed/dist/web.js"
Chatbot.init({
  chatflowid: "6a045bf3-f937-4f00-b26d-3bd269192132",
  apiHost: "https://ish-flowise-app.azurewebsites.net",
  chatflowConfig: {
    vars: {
      currentUrl: window.location.href,
      service: (()=>{
        // Access the current URL from the vars
       // const currentUrl = 'https://docs.intershop.com/iap/olh/cec/en/';

        // Function to extract the service identifier
        function getServiceFromUrl(url) {
            // Match the pattern after the domain or path
            const match = url.match(/(?:docs\.intershop\.com|file:\/\/\/D:\/(documentation-online-help-icm|documentation-online-help-iap)\/src)\/(\w+)/);
            console.log(match)
            // Return the matched group if found; otherwise, default to 'icm'
            return match ? match[1] : 'icm';
        }

          const url=window.location.href;
        // Execute the function to extract the service
        return getServiceFromUrl(url);
    })()
    }
  },
  observersConfig: {},
  theme: {
    button: {
      backgroundColor: '#008e87',
      right: 20,
      bottom: 20,
      size: 48, // small | medium | large | number
      dragAndDrop: true,
      iconColor: 'white',
      autoWindowOpen: {
        autoOpen: true, //parameter to control automatic window opening
        openDelay: 2, // Optional parameter for delay time in seconds
        autoOpenOnMobile: false, //parameter to control automatic window opening in mobile
      },
    },
    chatWindow: {
      showTitle: true,
      showAgentMessages: true,
      title: 'Intershop Documentation Chatbot',
      titleAvatarSrc: " https://amisamyra99.github.io/chatbot-flowise-js-hosting/images/bot24.png",
      
      welcomeMessage: 'Hello! Welcome to the Intershop Documentation Ai assistant! How can I assist you today? Currently, I  set up to support ICM latest topics, so feel free to ask any questions related to ICM and its sub-products, OMA and SMC.',
      errorMessage: 'It seems that we are encountering a problem.',
      backgroundColor: '#ffffff',
      height: 700,
      width: 400,
      fontSize: 16,
      clearChatOnReload: false,
      sourceDocsTitle: 'Sources:',
      botMessage: {
        backgroundColor: '#f7f8ff',
        textColor: '#303235',
       // showAvatar: true,
        //avatarSrc: 'https://amisamyra99.github.io/chatbot-flowise-js-hosting/images/bot24.png',
      },
      userMessage: {
        backgroundColor: '#008e87',
        textColor: '#ffffff',
        //showAvatar: true,
        //avatarSrc: 'https://raw.githubusercontent.com/zahidkhawaja/langchain-chat-nextjs/main/public/usericon.png',
      },
      textInput: {
        placeholder: 'Type your question',
        backgroundColor: '#ffffff',
        textColor: '#303235',
        sendButtonColor: '#008e87',
        maxChars: 50,
        maxCharsWarningMessage: 'You exceeded the characters limit. Please input less than 50 characters.',
        autoFocus: true,
        sendMessageSound: false,
        receiveMessageSound: false,
      },
      footer: {
        textColor: '#303235',
        text: 'Powered by',
        company: 'Flowise',
        companyLink: 'https://flowiseai.com',
      },
      disclaimer: {
        title: 'Disclaimer',
        message: 'By using this chatbot, you agree to the <a target="_blank" href="https://flowiseai.com/terms">Terms & Condition</a>',
      }
    },
  }
});
