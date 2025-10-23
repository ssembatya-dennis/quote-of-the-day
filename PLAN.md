# Project Plan

## Problem Statement

- A need to build a very easy, quick and convenient application that beautifully renders inspiring quotes to an individual struggling with motivation where he/she can easily open and read an inspiring quote or a word of encouragement that can lift-up his moods back again.

## Solution

- I'm planning to implement an MVC architecture while building this application such that I can distinctively separate the API calls or data Storage, from the methods that are going to randomize quote selection to the layer that is updating the UI based on changes in the data or upon listening to user events.

- Since this is a very simple single page application that only renders a quote and displays the next/previous quote in the sequence. I am not going to use any frameworks or libraries while developing this application rather build it using plain JavaScript.

### Data Storage

- When it comes to storing data ("Quotes"), The ZenQuotes API I'm integrating with for this application uses a flat structure array of objects, which is just a single array of simple objects that are not nested.

- Storing quotes in a flat object structure makes it very simple and straight forward to easily loop through every single particular quote object, access individual properties such as the quote, author, etc. and update the UI without using sophisticated metrics.
