# Spock Beats Rock!

Spock beats rock is an online game which is a geeky take on the classic "Rock Paper Scissors" game, which adds two extra "Weapons" to the players' arsenal. The rules of the game are disclosed within the page and they describe the nature of the relationship between each choice (eg. Spock vapourises rock, Scissors decapitate lizard etc.) The reason why I chose to code this game specifically is because in my experience Rock Paper Scissors was used all the time to settle arguments, pick people for the teams or simply for dares; so I believe that programming this take on the classic game would allow me to reconnect with it on a deeper level and have fun while doing so, especially since I get to play with a computer while doing it!

The aim of this app is to provide entertainment to the user in a simplistic and minimalistic design which does not overwhelm the senses and gives a chill user experience. Hopefully the entertainment this app provides will help users pass the time whenever they have a minute or two to spare. 

![Responsive Design](/assets/images/response.png)

## Features 

In this section, you should go over the different parts of your project, and describe each in a sentence or so. You will need to explain what value each of the features provides for the user, focusing on who this website is for, what it is that they want to achieve and how your project is the best way to help them achieve these things.

### Existing Features

- __Navigation Bar__

  - Featured on all four pages, the navigation bar makes it easy to jump from section to section. On the home page the navigation bar can take you to the "About" section with brief instructions and introduction to the page; the "topics section which has a selection of topics to explore for your debates; the "contact" section where anyone can fill out a form to further improve the website or to contact the developer (me). Each of the child pages (Topics) has a "Home" button on top left to take the user back to the home page. Each child page also has a "Back to Top" button to help them navigate back to the top where they can go down the list of topics once again or opt to go back to homepage using the nav bar at the top.
  - This section will allow the user to easily navigate from page to page across all devices without having to revert back to the previous page via the ‘back’ button. 

![Nav Bar](/assets/images/navbar.png)
![Back to Top](/assets/images/back%20to%20top.png)
![Home on topic pages](/assets/images/hometopic.png)

- __The landing page__

  - The lander arrives at a textured background displaying the name of the website and its slogan. 
  - This section introduces the user to Introdebatum with a minimalistic greeting.

![Landing Page](/assets/images/Home.png)

- __About Section__

  - The about section gives the user a bit more information on how to use the platform and aims to inspire them to explore. 
  - This user would get accustomed to the format and layout of the website and navigate to where they see fit in order to achieve their desired goal. 

![About Section](/assets/images/about.png)

-__Topic Section__

- The topic section gives the user a choice of topics to explore with a brief introduction and an image to support their choice
- The title is a hyperlink to a separate page with subtopics and infomation on each subtopic

![Topics Section](/assets/images/topics.png)

- __Contact Section__

  - This section would allow users to write a custom message and leave their contact information in order to give feedback to the developer. 
  - The responses from this section would be monitored and reviewed and best suggestions would be implemented into the website to allow the user to interact with the platform better. 

![Contact Section](/assets/images/Contact.png)

- __The Footer__ 

  - The footer contains information saying that Introdebatum does not own any of the information provided and the rights to the information are reserved with their original author. 
  - The footer also gives the developer's initials for future recognition.

![Footer](/assets/images/footer.png)

- __Topic Sections__

  - Each topic has several subtopics which are accompanied by fullscreen YouTube videos embedded into the page. 
  - Below each video there is some written supporting information which summarises the topic in a paragraph and provides a hyperlink that opens a new tab with the original article in case the user wants more information on the topic.
  - Below each paragraph there is a series of three questions that aim to spark a debate about a given topic, wether to use these questions or to resort to their own is at the discretion of the user. 

![Topic Space 1](/assets/images/example1spacevid.png)
![Topic Space 2](/assets/images/example1space.png)
![Topic Tech 1](/assets/images/egtechvid.png)
![Topic Tech 2](/assets/images/egtech.png)
![Topic Paradox 1](/assets/images/egparavid.png)
![Topic Paradox 2](/assets/images/egpara.png)

### Features Left to Implement

- Interactive design with animations.
- Allow for user interaction through adding their own topics and questions (Similar to Wikipedia).
- Random Topic selector similar to Google.com "I'm feeling Lucky" in which the user presses the button and a random topic and subtopic are displayed.
- Live chatrooms with people discussing a topic of their choice.

## Testing 

Through the completion of the project all features were tested using the temporary server upload with the command (python3 -m http.server). All hyperlinks work as intended and take the user to the correct section. Back to top button works, the user however may choose to scoll a little but up in order to reveal the nav bar for the respective page. All images are of the apropriate size for their intended purpose.
Upon resizing the browser window the text shifts to fit the width of the scren and side scrolling is not necessary. The topics are done as inline-block and thus shift from horizontal to a vertical alignment which facilitates easy scrolling. As mentioned in the unfixed bugs section the home page has some dead space and an option to scroll sideways, I was unable to reduce the width of the page to fix this. All Youtube embedded videos work as intended and are responsive to screen size. Since it is an embedded Youtube video, the controls are inherit. Autoplay is disabled for user experience.
The contact form is also correct in a sense that it allows for input. Given that I do not yet have a data dump to post the responses into I have used the one from the Coders Coffeehouse project from Code Institute HTML and CSS Essentials Curriculum.


### Validator Testing 

- HTML
  - No errors were returned when passing through the official [W3C validator](https://validator.w3.org/nu/?doc=https%3A%2F%2Fjmarabayev.github.io%2Fintrodebatum%2F)
- CSS
  - No errors were found when passing through the official [(Jigsaw) validator](https://jigsaw.w3.org/css-validator/validator?uri=https%3A%2F%2Fjmarabayev.github.io%2Fintrodebatum%2F&profile=css3svg&usermedium=all&warning=1&vextwarning=&lang=en)
- Lighthouse Report 
    - Lighthouse report gave an overall good score except for performance, which may be due to high resolution images being used for the website.
    ![Lighthouse report](/assets/images/lighthouse.png)

### Unfixed Bugs

One feature that I was unable to fix was the scale of the webpage in which there is some dead space to the right of the home page, as well as the homepage being a little askew on some mobile devices (iphone 7, samsung galaxy s21). I tried many approaches such as encasing the whole page in a div, or playing with width and media settings, but none yielded effective results. 

## Deployment

This section should describe the process you went through to deploy the project to a hosting platform (e.g. GitHub) 

- The site was deployed to GitHub pages. The steps to deploy are as follows: 
  - In the GitHub repository, navigate to the Settings tab 
  - From the source section drop-down menu, select the Master Branch
  - Once the master branch has been selected, the page will be automatically refreshed with a detailed ribbon display to indicate the successful deployment. 

The live link can be found here - https://jmarabayev.github.io/introdebatum/ 


## Credits 

In this section you need to reference where you got your content, media and extra help from. It is common practice to use code from other repositories and tutorials, however, it is important to be very specific about these sources to avoid plagiarism. 

You can break the credits section up into Content and Media, depending on what you have included in your project. 

### Content 

- The text for the subtopic was taken from external sources which are hyperlinked under each paragraph.
- Instructions on how to implement a responsive iframe were taken from https://www.w3schools.com/howto/howto_css_responsive_iframes.asp*/

### Media

- The photos used on the home and sign up page are from This Open Source site unsplash.com
- The images used for the gallery page were taken from this other open source site unsplash.com

All icons were courtosy of Icon Library https://icon-library.com/
