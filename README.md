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
Results image puppy: Provided by Canva: https://www.canva.com/features/free-stock-photos/

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

Styling:

Color palette: https://coolors.co/palette/353839-fbceb1-d87e4e-a8c3bc-83a0a0


Bug:

Upon submission the quiz would not start due to a missing result container in the HTML code, after adding it, it was working as expected again.

After adding a confirmation modal, the "No" option did not work as expected. Tried adding similar functions as for the instructions modal to close it and had to add an event listener for the "No" option, however, this did not resolve the issue.
Upon testing, found out that the issue is that two modals are being used and try to access the same closeModal function. I had to rename the function for the confirmation modal and adjust the call for the No button and that resolved the issue. The confirmation modal is now closing as expected when clicking the "no" option.