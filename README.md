# Good Boy Quiz

The Good Boy Quiz homepage was build in order to challenge visitors on their knowledge of different dog breeds. Since more and more people are interested in working with dogs, this quiz will help them learning to put a face to a few different dog breeds out there. If successful they can call themselves professional dog breed guessers! This quiz is aimed at different age groups with the goal to provide a fun online experience.

- [Deployed Good Boy Quiz Homepage](https://dietkest.github.io/good-boy/)

- [Good Boy Quiz repository on GitHub](https://github.com/DietkeSt/good-boy)

Responsive screenshots:

  ![Good Boy Quiz screenshots for different screen sizes](/documentation/responsive-mockup.png)

<br>

## User Experience

<br>

### User Stories

1. **First time visitor goal:** 
- As a user, I want to easily identify what the purpose of the website is to learn more about it.
- As a user, I want to be able to easily navigate through the quiz to find out my results quickly.

    - **Success criteria:** 
        - We know this to be true, if a user starts the quiz after submitting their name. 
        - We know this to be true, if a user reaches the results section of the quiz.

    - **Development:** 
        - I think adding an instruction button that explains how the website works will help the user in navigating through the quiz.
        - I think explaining the purpose of the page in a short intro text on the landing page will help the user understand its purpose right away.

2. **Returning visitor goal:** As a user, I do not want to see the same content over and over again to make sure I learn about different dog breeds.

    - **Success criteria:** We know this to be true, if a user retakes the quiz several times.

    - **Development:** I think randomizing the quiz questions will help the user in having to guess different breeds upon retaking the quiz.

3. **Frequent user goal:** 
    - As a user, I want to see more information about dog breeds.
    - As a user, I want to engage in different challenges for the quiz.

    - **Success criteria:** We know this to be true, if a user engages with additional options for the quiz, like changing the difficulty level.

    - **Development:** 
        - I think adding difficulty levels will help the user having a more challenging experience.
        - I think adding several quizzes will help the user gain more information about dog breeds.

<br>

### Wireframes

The website should show different sections, depending on the quiz stage the user currently is on. Features include:

- A header section with title, possible log, and a clickable Icon that shows instructions upon click.
- Landing page with a short intro of the purpose of the website and the ability to start the quiz.
- The Quiz page with the ability to answer several quiz questions.
- The Result page that shows the final score of the correctly answered quiz questions.
- A Feedback page where the user is encouraged to give feedback about their quiz experience.
- A Thank You page that appears after the feedback was submitted.
- A 404 Error page that leads the user back to the main page, in case the user lands on a non-working link.
- A footer with copyright text. 

The wireframes shows a rough idea on how these different pages/sections should look like. The design changed in the finalized version, as I decided to not display a separate Feedback page, but instead display it in a modal. This decision was made for a better user experience, as they will not have to leave the results page when leaving feedback. This makes sure the user can check on their results after submission, if they wish to do so.

#### Landing Page section

![Good Boy wireframe for landing page](/documentation/wireframes/wireframe-landing.png)

#### Quiz Page section

![Good Boy wireframe for quiz page](/documentation/wireframes/wireframe-quiz.png)

#### Result Page section

![Good Boy wireframe for result page](/documentation/wireframes/wireframe-result.png)

#### Feedback Page section

![Good Boy wireframe for feedback page](/documentation/wireframes/wireframe-feedback.png)

#### Thank You Page

![Good Boy wireframe for thank you page](/documentation/wireframes/wireframe-thankyou.png)

#### 404 Page

![Good Boy wireframe for 404 page](/documentation/wireframes/wireframe-404.png)

<br>

### Quiz Workflow

The workflow shows the quiz logic:

![Good Boy Workflow diagram](/documentation/workflow-goodboy.png)

<br>

### Design Style Guide

#### Colors

  ![Colors used on website: #353839, #FBCEB1, #D87E4E, #4ed87e, d84e63](/documentation/design/colors.png)
  
The colors were chosen to express calmness and good readability for the contrast colors of the almost black #353839 and peach color #FBCEB1. The darker peach color #D87E4E was chosen as the accent color for an inviting and intuitive design.

- Pallet chosen with the help of [coolors.co](https://coolors.co/palette/353839-fbceb1-d87e4e-a8c3bc-83a0a0).

Additionally the green and red shade were chosen as the marker whether or not the answer was correct for a better user experience. The user has a color indication on whether the question was correctly answered, in addition to a written feedback.

The color shades were based on the accent color for a calm and seemless user experience.

- Marker colors chosen with the help of [colorhexa.com](https://www.colorhexa.com/d87e4e).

#### Font

Fonts used:

![Google Font Indie Flower](/documentation/design/font-indieflower.png)

![Google Font Indie Flower](/documentation/design/font-opensans.png)

[Google Fonts import URL](https://fonts.googleapis.com/css2?family=Indie+Flower&family=Open+Sans:wght@300&display=swap)

- The Indie Flower font was used for the website titles to be in line with the - used website icon.
- Whereas Open Sans was chosen for the paragraphs and lists for readability.

#### Logo & Favicon

**Favicon**: ![Good Boy favicon](/assets/images/goodboy-favicon.png)

**Logo**: ![Good Boy logo](/assets/images/goodboy-logo.png)

The logo and favicon icon were chosen to reflect the styling of the website, so that the user has a cohesive user experience. The design should be simple, and fit to the color pattern.

<a href="https://www.flaticon.com/free-icons/puppy" title="puppy icons">Puppy icons created by Rohim - Flaticon</a>

<br>

## Technologies Used

<br>

### Languages

- [HTML5](https://en.wikipedia.org/wiki/HTML5): was used to create the structure and content throughout the website.
- [CSS3](https://en.wikipedia.org/wiki/CSS): was used to style the code throughout the website.
- [Javascript](https://en.wikipedia.org/wiki/JavaScript): was used to develop interactive components of the website.

### Frameworks, Libraries & Programs

- [Balsamiq](https://balsamiq.com/wireframes/): was used for Wireframe creation.
- [Canva](https://www.canva.com/): was used for Workflow creation.
- [Codeanywhere](https://codeanywhere.com/): was used for version control and terminal used to push to GitHub.
- [GitHub](https://github.com/): is used to store the project code and deployed website.
- [Google Fonts](https://fonts.google.com/): were used to import "Lato" and "Open Sans" font into style.css file which is used throughout the website.
- [Font Awesome](https://fontawesome.com/): was used for all icons used throughout the website.
- [Google Drive](https://drive.google.com/): is used to store documentation GIFs and videos.
- [Flat Icon](https://www.flaticon.com/): is used for website logo, favicon and results reward image.

<br>

## Features

<br>

### Existing Features

#### Header Navigation

- The header is full responsive.
- Displays logo and title of the website.
- Contains the instructions icon which opens up the instructions modal on click.
- Location is accessable throughout the quiz for easier accessibility and better user experience.
- There is a color changing and zoom hover effect for the instructions icon.
- The title of the instructions icon is displayed upon hovering for a seemless navigation experience.

![Header Navigation for Good Boy website on desktop](/documentation/features/header-desktop.png)

![Header Navigation for Good Boy website on tablet](/documentation/features/header-tablet.png)

![Header Navigation for Good Boy website on mobile](/documentation/features/header-mobile.png)

![Header instructions icon for Good Boy website](/documentation/features/header-icon.gif)

#### Landing Page

- The page is the first impression for the user and includes a welcome text that explains the purpose of the website.
- The text is short and concise to not overwehelm the user.
- It includes a gallary slider effect which has the purpose to grab the user's attention when first visiting the website.
- The landing page includes a form for the user's name and a "Start Quiz" button.
- The name is required to be entered before the user can start the quiz. If no name is entered, an error appears indicating the user needs to enter a name first.
- The content is easy to digest for the user and clear to the point which results in a better user experience.

![Landing Page for Good Boy website on desktop](/documentation/features/landing-desktop.png)

![Landing Page for Good Boy website on tablet](/documentation/features/landing-tablet.png)

![Landing Page for Good Boy website on mobile](/documentation/features/landing-mobile.png)

![Landing Page slider for Good Boy website](/documentation/features/landing-slider.gif)

#### About Section

- The about section gives the user an overview of the background of Kim Steindel, and the services and benefits working with UX Ventures.
- Upon learning more about the background and benefits, this should entice the user in booking a career coaching call.

  ![About section for UX Ventures website with desktop resolutions](/documentation/about-desktop.png)
  ![About section for UX Ventures website with different resolutions](/documentation/about-tab-mob.png)

#### Testimonials Section

- This gives the user an overview of career coaching experiences from past students in written form as well as video format.
- The embedded YouTube playlist will not automatically play, and can be opened directly on YouTube as well, if the user wishes to do so.
- The embedded YouTube videos can directly be played on the website, if the user wishes to do so, which is a great experience for the user as no extra tab or window needs to be opened.
- This section will  allow the user to get an insight on further benefits of using career coaching services and should entice the user to book a call.

  ![Testimonials section for UX Ventures website with different resolutions](/documentation/testimonials-screenshots.png)

#### Book Call Section

- This section will allow the user to directly book a carrer coaching call, or send a contact message first.
- The career coaching call booking button is using the primary button design to entice the user to preferably book a call, versus sending a message. 
- This section also includes a portrait image of the career coach to connect with the user on a personal level.
- This section also includes a contact form with a secondary button to give the user the option to reach out first, if needed.
- That contact form includes first name, last name, email and message fields that are required to be filled by the user to be able to submit the form, if not filled, it will not be sent.
- The contact form fields also require the correct format to be used. If the email field is not filled with an email format, the form cannot be submitted and the user will see an error message to correct the field entry.

  ![Book Call section for UX Ventures website with different resolutions](/documentation/book-call-screenshots.png)

##### Book Call Button

- The book call button will open a new window that leads to a Google Calendar. The user will have the option to book a call slot in that calendar.
- It is opening in a new window instead of a new tab to make sure that the user's attention will be on that newly opened window for better user experience. The user will need less clicks to book a call.

    ![Book Call window for UX Ventures website](/documentation/book-call-window.png)

#### Footer

- The footer section includes a link to LinkedIn for UX Ventures, as well as a link to the developer's GitHub repository. The footer also contains the copyright statement to give the user a quick overview of the creator of the website, the owner of the website as well as quick access to Social Media to connect with UX Ventures.
- When the user clicks on the links, they will open in a new tab for easier navigation, and feature a hover effect for better readability.

  ![Book Call section for UX Ventures website with different resolutions](/documentation/footer-screenshots.png)

#### Thank You Page

- The Thank You Page opens after a user submits a message via the contact form, so the user knows that the message was successfully sent.
- The page includes a separate navigation with only the logo visible and a return to Home page button. This is done on purpose, to not overwhelm the user with too much content on the Thank You page.

  ![Book Call section for UX Ventures website with different resolutions](/documentation/thankyou.png)

<br>

### Feature Ideas To Implement

#### Difficulty Levels

- I think adding difficulty levels will help the user having a more challenging experience.

#### Additional Quizzes

-  I think adding several quizzes will help the user gain more information about dog breeds.

#### Further Improvements

- Make sure to do further accessibility testing with tools like the [WAVE Web Accessibility Evaluation Tool](https://wave.webaim.org/).
- Include a fully functioning form without the help of tools like [Sheetmonkey](https://sheetmonkey.io/).
- Improve commit messages by keeping them shorter, as I went above the character limit from time to time.
- Also use the correct filepath when adding commits, instead of just using "add ."
- Add favicon and custom 404 page in the future as well.

<br>

## Testing

<br>

### Functionality & Responsiveness

1. **Browser test for functionality:**
   
   - [Chrome](https://www.google.com/intl/en_ie/chrome/):
    
        ![Chrome functionality test](documentation/chrome-test.png)
        
        Video of the test can be seen [here](https://drive.google.com/file/d/18w4ymGO7tYQHPf4OUAuItKa7JR3buAeZ/view?usp=sharing).
        
   - [Firefox](https://www.mozilla.org/en-US/firefox/new/):
  
        ![Firefox functionality test](documentation/firefox-test.png)

        Video of the test can be seen [here](https://drive.google.com/file/d/11ZU0RMI1GxsFwoOQk4nOLOciqfwGwOgG/view?usp=sharing).
        
   - [Safari](https://www.apple.com/safari/):
  
        ![Safari functionality test](documentation/safari-test.png)

        Video of the test can be seen [here](https://drive.google.com/file/d/1356r69spuRjP8KXHbHHpZ3PDtub4Ygx-/view?usp=sharing).

    Everything was working as expected on all three browsers tested.

2. **Responsiveness test:**

   - With [Responsive Viewer](https://chrome.google.com/webstore/detail/responsive-viewer/inmopeiepgfljkpkidclfgbgbmfcennb) Chrome extension:
  
        ![Responsive Viewer testing image](documentation/responsive-viewer-test.png)
        
        Video of Responsive Viewer testing can be seen [here](https://drive.google.com/file/d/1mIZ2ADsKHXGSmtG08jh-rykGGGG1tS9x/view?usp=sharing)
    
   - [DevTools](https://developer.chrome.com/docs/devtools/):
   
        ![DevTools responsiveness testing image desktop](documentation/devtool-test1.png)

        ![DevTools responsiveness testing image tablet](documentation/devtool-test2.png)

        ![DevTools responsiveness testing image mobile](documentation/devtool-test3.png)
        
        Video of DevTools testing can be seen [here](https://drive.google.com/file/d/1V6tL2tVCKPUREmTmNhuY_raBfSHR8TZS/view?usp=sharing)

    The website was working as expected in several responsiveness testing tools.
   
3. **All links were tested as well, and are opening as expected:**
 
    #### Navigation

   - **Logo**: By clicking on the logo the user is redirected to index.html.

        - Test passed.
   - **Home**: By clicking on Home the user is redirected to index.html.

        - Test passed.
   - **About**: By clicking on About the user is redirected to about section.

        - Test passed.
   - **Testimonials**: By clicking on Testimonials the user is redirected to testimonials section.

        - Test passed.
   - **Book Call**: By clicking on Book Call the user is redirected to book-call section.

        - Test passed.
    
    #### Testimonial Section
    
   - **YouTube Video**: By clicking on the play button, the video start. By clicking on "Watch on Youtube" the user is redirected to [Youtube Playlist](https://www.youtube.com/watch?v=RE25PyaUTiU&list=PL9G_LUWtBLYO18IPrNxlQck5Sf8BLBzp1) in an external tab.

        - Test passed.

    #### Book Call Section
 
   - **Book Call Button**: By clicking on the Book Call button a new window with a Google Calendar booking option is opening for the user.

        - Test passed.
   - **Form Submit Button**: By clicking on Send Message after the form is correctly filled out the user is redirected to thankyou.html

        - Test passed.

    #### Footer
    
   - **Developer GitHub**: By clicking on Dietke Steindel the user is redirected to https://github.com/DietkeSt/ which opens in a new tab.

        - Test passed.
   - **Social Media**: By clicking on the LinkedIn icon the user is redirected to https://www.linkedin.com/company/ux-ventures-ltd/ which opens in a new tab.

        - Test passed.

    #### Thank You Page
    
   - **Developer GitHub**: By clicking on the logo the user is redirected to index.html

        - Test passed.
   - **Social Media**: By clicking on the logo the user is redirected to index.html

        - Test passed.

<br>

### Validator Testing

#### HTML

- No errors were returned when passing through the official [W3C validator](https://validator.w3.org/).
 
    ![html validator testing image](/documentation/html-validator.png)
    
#### CSS

- No errors were found when passing through the official [(Jigsaw) validator](https://jigsaw.w3.org/css-validator/).

    ![css validator testing image](/documentation/css-validator.png)

- 7 warnings were found when passing through the official (Jigsaw) validator.

    ![css validator testing warning image](/documentation/css-validator-warnings.png)

    - 3 warnings regarding button background-color and border-color being the same value.
      - **Comment**: This was intended as only the background-color should change upon hover, not the border-color.

    - 4 warnings regarding the use of calc variables: "Due to their dynamic nature, CSS variables are currently not statically checked".

<br>

### Lighthouse

- Checked with [lighthouse in devtools](https://developer.chrome.com/docs/lighthouse/overview/):

    #### index.html:

  -   Desktop check was all above 90%:
     ![Book Call section for UX Ventures website with different resolutions](/documentation/lighthouse-desktop.png)
     
  - Mobile test shows only 83% in Best Practices:
    ![Book Call section for UX Ventures website with different resolutions](/documentation/lighthouse-mobile.png)

    - Found issues to be related to embeded video playlist and logo.
    - However, I could not verify any interference with  accessibility, or performance:
     ![Book Call section for UX Ventures website with different resolutions](/documentation/lighthouse-mobile-bestpractices.png)

   #### thankyou.html:

  -   Desktop check was all above 90%:
     ![Book Call section for UX Ventures website with different resolutions](/documentation/lighthouse-desktop-thankyou.png)
     
  - Mobile check was all above 90%:
    ![Book Call section for UX Ventures website with different resolutions](/documentation/lighthouse-mobile-thankyou.png)


<br>

### Fixed Bugs

- The image files links for the background images would not properly load, so had to adjust links for the background images to display correctly on deployment.
- On mobile resolution, the hero text was not centered. This was caused by margin set for the container which I removed.
- On mobile, the embedded iframe did not have the correct margin set for the column display. Corrected the top margin for cohesive experience for the user.
- Footer would not display any styling, this was caused by a missing CSS closing tag for the book-call section. Adding the missing tag solved the issue.
- To enhance readability fixed the background color of the footer to a darker shade.

<br>

### Unfixed Bugs

- Kept Logo image in html, instead of uploading it as background image for the div. The margin would not work properly on the div.
- Margin in Book-Call section for the ul is set to 5em, as the button would otherwise overlap with the text. Did not fix this further beyond the margin setting, as it consumed a lot of time to get to the bottom of why this issue was occuring.

<br>

### Deployment

#### From [Codeanywhere](https://app.codeanywhere.com/)

To push the code to Github from Codeanywhere, the following command can be used "git push":

 ![git push on codeanywhere](/documentation/codeanywherepush.png)


#### On [GitHub](https://github.com/)

1. Navigate to the GitHub repository for UX Ventures.
2. Click on the "Settings" tab and navigate to "Pages."
3. Select "Deploy from branch" for "Source."
4. Choose the "main" branch and save the changes.
5. It takes a few minutes until the deployed website is created and visible.

- Deployed website can be found here: https://dietkest.github.io/ux-ventures/ 

#### Local deployment

To make a local copy of this project in [VSCode](https://code.visualstudio.com/), these steps can be followed:

1. Navigate here <https://github.com/DietkeSt/ux-ventures.git>, and click on "Code > Local > HTTPS"
    
2. Click on "Download ZIP"
![Clone repository](/documentation/clone-repository.png)

3. Navigate to the folder you want to open by using cd
![cd file](/documentation/vscode-cd.png)

4. Then, type code and the pathfile
![code filepath](/documentation/vscode-code.png)

<br>

## Credits

<br>

#### W3Schools

- Flex Direction code found here: <https://www.w3schools.com/cssref/css3_pr_flex-direction.php>

#### StackOverflow

- Box-sizing borderbox: <https://stackoverflow.com/questions/24605308/how-to-add-space-between-buttons-and-its-borders>
- Flex box: <https://stackoverflow.com/questions/48464444/how-to-display-3-items-per-row-in-flexbox>
- Current year in footer: <https://stackoverflow.com/questions/4562587/shortest-way-to-print-current-year-in-a-website>
- Open in new window, not tab: <https://stackoverflow.com/questions/12939928/make-a-link-open-a-new-window-not-tab>

#### FreeFrontend

- Hero Animation code found here: <https://freefrontend.com/css-hero-effects/>
- Blockquote styling found here: <https://freefrontend.com/css-quote-styles/>

#### Developer.Mozilla

- Z-index usage guide found here: <https://developer.mozilla.org/en-US/docs/Web/CSS/z-index>
- Width calculator guide found here: <https://developer.mozilla.org/en-US/docs/Web/CSS/calc>

#### Others

- Tested using [bootstrap button](https://getbootstrap.com/docs/5.1/components/buttons/), but removed again.  
- [SheetMonkey](https://sheetmonkey.io/) for form submission action and redirect.
- Found info on using titles in html on [W3Doc](https://www.w3docs.com/snippets/html/how-to-add-a-mouseover-text-with-html.html).
- Followed along [Kevin Powell's video](https://www.youtube.com/watch?v=8QKOaTYvYUA) to create responsive navigation bar for mobile.

<br>

### Content

- The code on this website was created by the developer, Dietke Steindel, unless otherwise credited.
- The text on this website is taken from [this website](https://kimsteindel.weebly.com/), and was written by Kim Steindel (used with approval).
- The icons on this website were taken from [Font Awesome](https://fontawesome.com/).
- The fonts used website were taken from [Google Fonts](https://fonts.google.com/).
- The testimonials and videos were taken from this [YouTube channel](https://www.youtube.com/@kimsteindel227) (used with approval).

<br>

### Media

- The [Logo](/assets/images/logo.png) was created by myself (Dietke Steindel) with the help of paint and Canva due to knowledge of the business and requirements of the logo.
- The [Book-call image of Kim Steindel](/assets/images/book-call.jpg) was used with Kim's approval.
- The [Hero image](https://www.pexels.com/de-de/foto/weisses-druckerpapier-196645/) was found on open source website Pexels.com.

<br>

### Acknowledgement

- Thanks to my husband, (the carrer coach) **Kim Steindel**, for providing written content for the website.
- Thanks to my mentor, **Iuliia Konovalova**, for providing great guidance and tips for this project.
- Thanks to Code Institute Slack community for feedback and help.


Credits:

Pexels:

French bulldog: https://www.pexels.com/de-de/foto/hande-hund-niedlich-hunde-4587998/
Shiba Inu: https://www.pexels.com/de-de/foto/brauner-und-weisser-hund-der-gelben-schal-tragt-4588052/
American Staffordshire: https://www.pexels.com/de-de/foto/hund-tragt-grunen-pelzmantel-2951921/
Dachshund: https://www.pexels.com/de-de/foto/nahaufnahmefoto-des-roten-dackels-895259/
Siberian Husky: https://www.pexels.com/de-de/foto/person-die-schwarzweiss-siberian-husky-halt-3671300/
Corgi: https://www.pexels.com/de-de/foto/laptop-tier-hund-niedlich-5122188/
Shar Pei: https://www.pexels.com/de-de/foto/schemel-liebe-herz-hand-4588047/
Cat: https://www.pexels.com/de-de/foto/tier-haustier-bezaubernd-tierfotografie-4588441/
Brown Saluki: https://www.pexels.com/de-de/foto/brown-saluki-1573919/
Dalmation: https://www.pexels.com/de-de/foto/nahaufnahmefoto-des-dalmatinischen-hundes-3117157/
German Shepherd: https://www.pexels.com/de-de/foto/tier-hund-haustier-gahnen-16634310/


Flaticon:

Paw icons created by Freepik: https://www.flaticon.com/free-icon/footprint-shape_58840

Code:

Favicon: https://www.w3schools.com/html/html_favicon.asp
Image slider with fade animation: https://stackoverflow.com/questions/51238836/css-image-slider-with-fade-in
Image slider with JS fading animation: https://stackoverflow.com/questions/24344805/animating-multiple-objects-simultaneously-in-angularjs-produces-choppy-animation
Sticky footer: https://materializecss.com/footer.html
Modal: https://www.youtube.com/watch?v=ywtkJkxJsdg
https://www.w3schools.com/howto/howto_css_modals.asp
Event listener: https://www.w3schools.com/js/js_htmldom_eventlistener.asp
Hide and display elements with the help of JS: https://www.geeksforgeeks.org/hide-or-show-elements-in-html-using-display-property/
Confirmation modal function: https://stackoverflow.com/questions/51863334/something-like-confirmare-u-sure-javascript
Progress bar guide: https://www.w3schools.com/howto/howto_js_progressbar.asp
How to make a quiz video guide by James Quick: https://www.youtube.com/watch?v=u98ROZjBWy8&list=PLDlWc9AfQBfZIkdVaOQXi1tizJeNJipEx&ab_channel=JamesQQuick
Transform CSS: https://developer.mozilla.org/en-US/docs/Web/CSS/transform-function/translate
Shuffle Quiz: https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
Rating section: https://www.youtube.com/watch?v=rw3eZ6XodN8&ab_channel=CodingNepal
Disable textarea reasizing: https://www.w3docs.com/snippets/css/how-to-disable-the-resizing-of-the-textarea-element.html
Set alt for JS image: https://stackoverflow.com/questions/15471688/adding-alt-attribute-to-image-in-javascript




Bug:

Upon submission the quiz would not start due to a missing result container in the HTML code, after adding it, it was working as expected again.

After adding a confirmation modal, the "No" option did not work as expected. Tried adding similar functions as for the instructions modal to close it and had to add an event listener for the "No" option, however, this did not resolve the issue.
Upon testing, found out that the issue is that two modals are being used and try to access the same closeModal function. I had to rename the function for the confirmation modal and adjust the call for the No button and that resolved the issue. The confirmation modal is now closing as expected when clicking the "no" option.

Upon adding styling for the modal buttons, the modals kept on opening on page load. The issue was that I added the wrong display type to the modal class which causes the event listeners not to work anymore. Fixing the display type to none solved the issue.

After randomizing the quiz questions, I noticed that I could guess several times for one question. To disabled that function, I added the "guessed" property to the quiz and upon option selection the other options are made inactive. This resolved the issue and makes for a more accurate quiz result in the end.

When clicking retake or retake quiz, the page would load the landing page, but not actually restart the quiz. To solve this, I added the reloaded function.

JSHInt:

212	checkAnswer
-> This is actually being used to check if the answer has been guessed and adds +1 to the score if guess correctly, so this is needed.