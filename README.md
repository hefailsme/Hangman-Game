# Hangman-Game

This is an 80's Movie Themed game.

In creating this hangman style game, there were a few things I was able to successfully achieve, as well as a number of things that I was unable to accomplish.


ACHIEVEMENTS:

Once the page loads, A row of underscores appears on the screen, and when a letter is typed, the game successfully recognizes the correct letters vs the incorrect guess.

If the user loses the game, (unable to guess the movie title within 9 tries), an alert pops up notifying the player that Darth Vader is Luke's father. Upon that alert, a clip of the Imperial theme song from Star Wars plays.

If the user wins the game (able to guess the correct movie title within 9 tries), an alert pops up notifying the player that they hit a one in a million shot (another ode to Star Wars). Upon that alert, a clip from the Star Wars theme song plays.

Whether the player wins or loses, the user is able to try and guess the next movie title, only by pressing another button.

Being able to get a partially functioning game was largely due to the fact that I watched several tutorials on building Hangman style games, and referenced the kids's version of the game that was slacked out to the class. I also read about many different versions of how to create such a game. Had it not been for those resources, I am certain that I would not have been able to achieve success from scratch.

FAILED IDEAS AND ERRORS IN CODING:

- The movie titles are all single word titles. My original game idea had many multiple word movie titles, but I was unable to figure out how to make the game create spacng in between multiple worded movie titles and not have the spaces be characters that needed to be typed out. Using single worded titles made it a non issue.

 - I tried to create a button that would start the game, but I was unsuccessful in making that work. I removed the button from the html page.
 
- The bigger problem besides the unusable button was that other than the initial page loading, I could not get the game to reset itself on the screen with a new set of underscores. Only by pressing another button was I able to get a new movie title to appear. I tried to change the code to reset itself upon game completion, but I was unsuccessful.

RAN OUT OF TIME FOR THE FOLLOWING IDEAS:

- Tried to create a more aesthetically pleasing gameboard, but ran out of time to implement correct panel sizing, background image with different opacity to offset having text on top of it. The sizes of panels and placement of text are not what I wanted to have the page look like. I wanted the two letter guess panels to be equal size, side by side, with borders and background image. I wanted the win/loss columns to follow the same look.

- Ran out of time to put a row of movie thumbnail images in between each panel.

- Very annoyed at the fact that I could not use multiple worded titles, especially since its heavily Star Wars decorated with the wallpaper and audio clips.

- Wanted to add the following but either ran out of time, or spent too long trying to implement features:

    - onscreen keyboard, so that players could play easily on large mobile devices, with each click creating a sound. I was able to get keyboard buttons on the screen, but not make them usable. I removed it from the code.
    - if the player guessed the correct movie title, an image (or clip from the movie) would be shown on a panel above the underscore panel, rather than the star wars theme song.
    - if the player lost the game, it would play the imperial theme but also show a gif of a moving darth vader in the panel above the underscore panel.
    
    






