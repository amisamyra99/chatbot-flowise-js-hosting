# Embeddable LLM chatbot for documentation sites (Flowise)

The front-end embed for the **Intershop Documentation Copilot**, an AI assistant that answers questions about Intershop product documentation (ICM, IOM, CEC, IAC, SMC and OMA). I built it while working in data science at Intershop (2023–2026).

The assistant itself is a chatflow built in [Flowise](https://github.com/FlowiseAI/Flowise), an open-source tool for building LLM applications. This repository contains the part that puts it on a web page: a script that loads the chat widget and configures it for each documentation page.

## How it works

1. A documentation page loads [`chatbot.js`](chatbot.js).
2. `chatbot.js` imports [`web.js`](web.js), a self-hosted build of the Flowise chat embed served from GitHub Pages, and calls `Chatbot.init(...)` with the chatflow and server to use.
3. Before the chat starts, it reads the page URL to pass context to the chatflow:
   - **language** (`en`, `de` or `fr`), which also picks the welcome message
   - **service** (for example `icm`), so the assistant can focus on the right product documentation
4. The widget opens automatically after 2 seconds on desktop, shows a disclaimer with a link to the privacy policy, and lists the source documents under each answer.

## Customisation in `chatbot.js`

- Welcome messages in English, German and French
- Branding: colours, title, footer and disclaimer
- Input limit of 50 characters per question
- Draggable chat button, auto-open delay, no auto-open on mobile

## Use it on a page

```html
<script type="module" src="https://amisamyra99.github.io/chatbot-flowise-js-hosting/chatbot.js"></script>
```

To reuse it with your own assistant, change `chatflowid` and `apiHost` in `chatbot.js` to point to your own Flowise server and chatflow.

## Stack

Flowise · LLMs with retrieval over documentation · JavaScript · GitHub Pages

## Limitations

- The Flowise chatflow and the documentation index live on the Flowise server, not in this repository.
- The service detection currently uses a fixed example URL instead of the current page's URL.

## Author

Ami Samyra Ouedraogo · [GitHub](https://github.com/amisamyra99) · [LinkedIn](https://www.linkedin.com/in/ouedraogo-ami-samyra/)
