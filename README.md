
# Project - Hotel

This application is used by hotel staff users to populate customizeable message templates with information about the guest. It generates a message that greets the guest based on the time the message was generated with their name, hotel name and room number. Addtionally, the application allows user to input their own message to send to the guest with hotel that was selected. 

### See Project Live [here](https://nomvaa.github.io/Hotel/).

## Technology Used
* Javascript
* HTML 5
* JSON
* BOOTSTRAP
* CSS

## How to Run the Application
1. Visual Studio code with the Live Server extension installed.
    * Visual Code can be found [here](https://code.visualstudio.com/download).

    * The Live Server extension on Visual Studio Code enables you to serve up your page with a local server because loading up a JSON file requires a local or live server to load up.
2. Clone Repository 
    * Clone the repository into your local machine.
3. Packages
    * Ensure that all required JSON files ('Guests.json', 'Companies.json', and 'msg.json') are present in the same directory as the HTML file containing the code.
4. Visual Studio Code
    * Open up VS Code and go to file --> Open folder --> locate file
3. index.html
    * Right click and open the 'index.html' file on Visual Studio Code with Live server. This should bring you to web brower.
4. Selection
    * Select a guest name, hotel name and message from the dropdown menus.
5. Generate
    * Click the "Generate Automated Msg" button to display the personalized greeting message. If you want to customize your own message, enter a personal message in the box before and click 'Generate Own Msg'.

## Built With
* Visual Studio Code

## Design Decision
* Language: Application was written in Javascript, HTML and utilizes JQuery for DOM manipulation. JS is versatile and compatitable with web browers. 
* Data Handling: JSON files are used to store guest information, hotel information, and re-defined messages. These files are imported into the program and parsed to populate drop down menus with options. 
* User Interaction: The program provides a simple user interface with dropdown menus for selecting guests, hotels and messages. Users can also input custom messages.
* Dyanmic Gretting Generation: Greeting messages are dynimcally generated based on the selected guest, hotel, time of day, and message. The application utilizes a switch statement to determine the appropriate greeting based on the time of the day the message is being generated. 

## Verification Process
The correctness of the application was verifief through the folowing process:
1. Manual Testing: Application was manually tested by running in a web browser and interacting with the user interface to ensure all features functions are expected with no errors.
2. Code Review: The codes was reviewed and reformatted to ensure proper syntax, logic, and adheres to best practices and easy reading.
3. Error Handling: Basic error handling was implemented to handle potential issues such as missing JSON files or invalid user inputs.


## Future Development
If given more time, additional enchancements would include:
- Implementing error handling for invalid selections or missing data.
- Improving the design and layout of user interface for better usability and user experience.
- Enhancing the custom message input functionality and validation and formatting options.

