
# _TIKKU_

A simple ticket remarks writer for lazy people to automate the boring ticket writing process.... with help by [Shrijana](https://github.com/ShrijanaKhatiwada)

## Installation for firefox based browsers
- To use the extension first either clone the repository or download the zip and extract it.
- Goto a firefox based browser and find the **Addons setting** page.
- On the page find a gear icon and click **Debug Add-ons**.
- Click on **Load Temporary Add-on** and select the zip file inside the folder named **web-ext-artifacts** which is located inside the folder remarksEnku-firefox.
- The extension should now be displayed and fully functional. 

## Installation for chromium based browsers
- To use the extension first either clone the repository or download the zip and extract it.
- Goto a firefox based browser and find the **Manage Extensions** page.
- On the page find a button that toggles **Developer Mode**.
- Click on **Load Unpacked** and select the folder named remarksEnku-chromium you cloned or extracted.
- The extension should now be displayed and fully functional. 

The install process would not have been this tedious if I had enough _money_ for CWS developer account.

## Screenshots

![Extension Screenshot](./remarksEnku-chromium/images/How_do_I_look_like.jpg)


## Usage

Using the extension is fairly simple.
Just invoke the extension fill the required blanks and then press the button on the right side that best resembles the domain you want ticket for.
If you are on the correct page then the extension should automatically _write the remarks for you_.


## Optimization

What if you want to change certain elements of the extension?
You'll be glad to hear that optimizing the code as per your need/taste is pretty easy and you don't need to be a hardcore web developer wizard for it.

### ~ Changing the templates
For changing just the templates the process is pretty straight-forward. Just open the javascript file(budhijivi.js) in your preferred text editor. The templates used are at the bottom of page and change it to your liking.

### ~ Changing the buttons and their functions
For changing the buttons a little bit of javascript knowledge maybe required but it can also be figured out with a bit of common sense. The names on the buttons can be changed from the HTML file and their functions can be edited using the above mentioned process.

### ~ Adding or substacting the rows
For adding a row you need to know a bit of javascript. In the HTML file create a new column and then add functions accordingly in the javascript file.

** _FEEL FREE TO FORK THE PROJECT AND GO CRAZY WITH IT_ **

## Bugs and their workarounds
Two ~~bugs~~ `features` have been caught so far that I have no idea what to do with (!web_developer)
1. The service worker doesn't get activated right away after the browser is loaded and thus, the whole extension may not work.
2. The <br> tag breaks the line on preview but does not replicate Enter key press smh so after the ticket is saved the line break disappears. 
### Solutions
1. Invoke the extension then reload the page and it should work perfectly now.
2. Manually press the Enter key on each line breaks.


## Support

For support, email kastisuhesh1@gmail.com.


## License

[MIT](https://choosealicense.com/licenses/mit/)

