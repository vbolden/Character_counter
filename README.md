## OUTLINE

An interactive character counter application that demonstrates state management and event handling in React. This application allow users to input text and see real-time statistics about their input, including character count, word count, and reading time.

### RESOURCES

- Module Lessons
- Google
- React.dev (https://react.dev/learn/sharing-state-between-components)

# REFLECTION
1. I used the useState hook to set the initial value of the text to the initialValue, which was blank. Then I used a callback function to capture the user's input assign it to the text, then send the newText back up.

2. I looked up the average reading time to use as a baseline and I based the calculations on the amount of words typed by the user. I also considered that this reading time needed to be more consistent than precise for this lab. 

3. By using local state management to only store one state and have everything else derived which avoids re-rendering and synchronization issues. 

4. 