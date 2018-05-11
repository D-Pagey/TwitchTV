## Twitch TV -  A Free Code Camp project

**User Stories:**
- [x] I can see whether Free Code Camp is currently streaming on Twitch.tv.
- [x] I can click the status output and be sent directly to the Free Code Camp's
 Twitch.tv channel.
- [x] If a Twitch user is currently streaming, I can see additional details 
about what they are streaming.

I've rewritten this Intermediate Front End project from native JavaScript to 
React using Create-React-App. 

I learnt a lot from Reactifying this project, mainly around how to render from 
initial state and then update state to rerender the streams with live data. I 
struggled with structuring the hardcoded data and passing that into state as an 
object of objects. Once I had tackled that though, the rest was relatively 
straight forward.

**Improvements:**
- Fix the ::backdrop CSS element on the Dialog element. It works in the vanilla
JS version but not in the React version.
- Fix the console warning regarding each child in an array needing a key.
- Refactor CSS, quite a few cases on non-DRY styling.

**Getting Started:**
 1. Run: `npm install`
 2. Run: `npm start` _(in a new terminal)_
 3. Go to: `http://localhost:3000/`

You can see this [TwitchTV Viewer](https://codepen.io/Pagey/pen/VybzaY) project 
on CodePen.