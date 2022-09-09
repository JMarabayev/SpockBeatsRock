# Spock Beats Rock!

Spock beats rock is an online game which is a geeky take on the classic "Rock Paper Scissors" game, which adds two extra "Weapons" to the players' arsenal. The rules of the game are disclosed within the page and they describe the nature of the relationship between each choice (eg. Spock vapourises rock, Scissors decapitate lizard etc.) The reason why I chose to code this game specifically is because in my experience Rock Paper Scissors was used all the time to settle arguments, pick people for the teams or simply for dares; so I believe that programming this take on the classic game would allow me to reconnect with it on a deeper level and have fun while doing so, especially since I get to play with a computer while doing it!

The aim of this app is to provide entertainment to the user in a simplistic and minimalistic design which does not overwhelm the senses and gives a chill user experience. Hopefully the entertainment this app provides will help users pass the time whenever they have a minute or two to spare. 

![Responsive Design](/assets/images/response.png)

## Features 

In this section, you should go over the different parts of your project, and describe each in a sentence or so. You will need to explain what value each of the features provides for the user, focusing on who this website is for, what it is that they want to achieve and how your project is the best way to help them achieve these things.

### Existing Features
#### Homepage

- __The Landing page__

  - On the landing page there is a greeting followed by an image explaining the rules. The image may be hard to see for some, so I have added an enlarging transformation in order to assist the viewer and to allow for a more clear understanding about the rules of the game.
  - The image along with the written out rules aims to introduce the user to the game before taking them to the game where they will be able to play. To get to the game page there is a button that takes them directly there so that they can start playing right away.

![Nav Bar](/assets/images/navbar.png)
![Back to Top](/assets/images/back%20to%20top.png)
![Home on topic pages](/assets/images/hometopic.png)
#### Game Page
- __The Game Page__

  - The user arrives to the game page from the landing page and is immediately greeted with a large propt enticing them to make a choice from the options presented to him. The page features a scoreboard on top followed by a dynamic statement in the middle which features the name of the app, but it will change as soon as the player makes their choice 
  - This is the main page in which the game will be played.
  - Absence of the nav is intentional due to the fact that the player would not need to naviate back to the homepage as the app is run within one page

![Landing Page](/assets/images/Home.png)

- __Player Choices__

  - Player Choices are represented with icons which enlarge when hovered over to make it extra clear which option the payer is selecting. 
  - This user would get accustomed to the format and layout of the website and navigate to where they see fit in order to achieve their desired goal. 

![About Section](/assets/images/about.png)

-__Scoreboard__

- The topic section gives the user a choice of topics to explore with a brief introduction and an image to support their choice
- The title is a hyperlink to a separate page with subtopics and infomation on each subtopic

![Topics Section](/assets/images/topics.png)

- __Computer Generated RNG__

  - This section would allow users to write a custom message and leave their contact information in order to give feedback to the developer. 
  - The responses from this section would be monitored and reviewed and best suggestions would be implemented into the website to allow the user to interact with the platform better. 

![Contact Section](/assets/images/Contact.png)

- __Moves Left__ 

  - The footer contains information saying that Introdebatum does not own any of the information provided and the rights to the information are reserved with their original author. 
  - The footer also gives the developer's initials for future recognition.

![Footer](/assets/images/footer.png)

- __Rules Button__

  - Each topic has several subtopics which are accompanied by fullscreen YouTube videos embedded into the page. 
  - Below each video there is some written supporting information which summarises the topic in a paragraph and provides a hyperlink that opens a new tab with the original article in case the user wants more information on the topic.
  - Below each paragraph there is a series of three questions that aim to spark a debate about a given topic, wether to use these questions or to resort to their own is at the discretion of the user. 

![Topic Space 1](/assets/images/example1spacevid.png)
![Topic Space 2](/assets/images/example1space.png)
![Topic Tech 1](/assets/images/egtechvid.png)
![Topic Tech 2](/assets/images/egtech.png)
![Topic Paradox 1](/assets/images/egparavid.png)
![Topic Paradox 2](/assets/images/egpara.png)

- __Game over Screen__
- Upon reaching maximum moves the player is locked out from playing in the same section and receives a statement that portrays the final result (eg. Win, Loss, Draw) with a quirky text to fit the theme.
- __Restart Game button__
- At Game over screen the player has the option to play again by clicking the replay button to refresh the page and start the game over, alternatively the player can refresh the page
### Features Left to Implement

- PLayer vs Player possibility.
- Change the playername based on the input from the homepage.
- Animated background and possibly sound effecrs, however I chose to omit sound effects because I believe they would have had a negative effect on user experience.
- Live chatrooms when player vs player is implemented.
- leaderboard of players
- Increasing difficulty through pattern recognition by AI through the use of local or external storage

## Testing 

 - Through the completion of the project all features were tested using the temporary server upload with the command (python3 -m http.server). All buttons work as intended 
 - Through console.log computerChoice is consistent at providing a random number.
 - Hovering over images increases their size to the intended degree
 - playerChoice within the game correctly displays the choice clicked
 - combination of playerChoice and computerChoice successfully passes the switch statement and returns a correct statement (win/loss/draw)
 - game is able to run with no errors
 - Moves left countdown goes down after every playerChoice selection
 - Game is over upon reaching the maximum moves
 - restart game button successfuly restarts the page and restarts the game


### Validator Testing 

- HTML
  - No errors were returned when passing through the official [W3C validator](https://validator.w3.org/nu/?doc=https%3A%2F%2Fjmarabayev.github.io%2Fintrodebatum%2F)
- CSS
  - No errors were found when passing through the official [(Jigsaw) validator] (https://jigsaw.w3.org/css-validator/validator?uri=https%3A%2F%2Fjmarabayev.github.io%2FSpockBeatsRock%2F&profile=css3svg&usermedium=all&warning=1&vextwarning=&lang=en)
- Lighthouse Report 
    - Lighthouse report gave an overall good score except for performance, which may be due to high resolution images being used for the website.
    ![Lighthouse report](/assets/images/lighthouse.png)

### Unfixed Bugs/Problems

 - Just before deployment I have lost all my progress and managed to recover it through copy pasting the code from browser history. Git commits were not registered properly on several occassions, my fault once, other times could have been an internal bug.
  - Was unable to have increasing difficulty and pattern tracing as randomness usually is a difficulty itself as chances of winning are based on RNG
  - occasionally the final prompt would mistake a draw for a win or a computer win for a draw, from what I noticed it is usually for the combination of scores being 5:4 or 4:5, otherwise the program recognises the difference.

## Deployment

This section should describe the process you went through to deploy the project to a hosting platform (e.g. GitHub) 

- The site was deployed to GitHub pages. The steps to deploy are as follows: 
  - In the GitHub repository, navigate to the Settings tab 
  - From the source section drop-down menu, select the Master Branch
  - Once the master branch has been selected, the page will be automatically refreshed with a detailed ribbon display to indicate the successful deployment. 

The live link can be found here - https://jmarabayev.github.io/introdebatum/ 


## Credits 

### Content 

- Content for website was not copied, but rules were derived from online resources.
- The guideline for creating the game (JS Code) was taken from an online tutorial at https://www.youtube.com/watch?v=jaVNP3nIAv0&list=LL&index=4&t=4524s
- The Game over and moves left was inspired by and at some places copied from https://www.geeksforgeeks.org/rock-paper-and-scissor-game-using-javascript/
- The disappearing rules prompt on game page was inspired by https://rwest88.github.io/Rock-Paper-Scissors/ code

### Media

- The photos used for background design of buttons were taken from pexels.com (free download)
- All icons were courtosy of Icon Library https://icon-library.com/ (Free to use if register)
