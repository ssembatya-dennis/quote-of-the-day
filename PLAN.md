# Project Plan

## Problem Statement

- I was prompted by my supervisor to build a "Quote of the day" web application where the user can read an inspiring quote plus it's author when the page loads and can as well click a button to display a new randomly selected quote.

## Proposed Solution

### Mobile/Desktop Application (nice approach);

- However much this application is best suited on a mobile device or desktop application due to its core functionality of displaying just one random inspiring quote to the user every single day hence its name "Quote of the Day" where features like notification pop-ups, alerts and reminders can best be implemented to make this application more efficient was out of scope basing on the instructions I received for this project as referenced here below

> HTML/CSS:
>
> - Use semantic HTML.
> - Center the layout and use a modern font (e.g., from Google Fonts).
> - Style the button to be interactive with a hover effect.
> - Ensure good spacing, so the design feels clean and uncluttered.
>
> JavaScript:
>
> - No libraries or frameworks. Pure, vanilla JavaScript only.
> - Use the data structure you defined in your plan.
> - Use document.querySelector() to access your HTML elements.
> - Use addEventListener() to handle the button click.
> - Use .textContent to update the quote and author.

- I'm also not very comfortable with React-native or related frameworks like Flutter that could easily be considered to build this project as a mobile/desktop application and this could take me a longer time to close the knowledge gap and get up to speed with the technologies needed to pull off this project in time and yet am already behind schedule therefor still this is not a brilliant approach to go about this project.

### Web Application (best approach);

- A web application is exactly what the supervisor expects this project to be while following the rules and guidelines declared in building the application.
- The web application for this project is intended to focus first on completion & quality rather not on complexity which is actually ideal to build a small, complete, and polished web application as well as mastering fundamentals of how to make a webpage interactive and starting to build the professional habits.
- Although this approach has limited functionality and the user experience is a bit shallow, it fulfills the client needs and later lone with more time allocated to this project, I vision to make this project advanced with advanced features like "changing user settings", "downloading quotes", "sharing quotes on socials", "filtering quotes by category or author" as well as migrating it to Mobile both on Android and IOS.

## Quote of the Day "The Night Bird" (MVP)

### Must Haves (Core Features)

- A feature that displays the "Quote of the day" quote and the author together.
- A component with a click event listener to display a new randomly selected quote when the user fires a click event.

### Good to Haves (Future Enhancement)

- A feature to share the displayed quote on social handles like (Instagram, Twitter, WhatsApp etc.)
- A feature to download the displayed quote as text or image
- A feature that can be triggered to open/close a modal window with "user preferences" like (font-size, font-style, theme etc.) to improve visuals or text readability.
- A feature to display the previous rendered quote
