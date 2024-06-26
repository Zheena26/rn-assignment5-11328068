# rn-assignment5-11328068

# MyTheme App
This is a React Native application for a MyTheme App. The app features a Home Screen that displays user profile information, financial features (Send, Receive, Loan, Topup), and recent transactions with details. The app is styled with themes using styled-components and useTheme for dynamic theming.

# Table of Contents
* Prerequisites
* Installation
* Running the App
* File Structure
* Code Overview
* Screenshots
* Contributing
* License

# Prerequisites
Make sure you have the following installed:

# Node.js (>=12.x.x)
npm (>=6.x.x) or yarn (>=1.x.x)
React Native CLI
Installation
Clone the repository:

# bash
Copy code
git clone https://github.com/Zheena26/rn-assignment5-11328068.git
Install dependencies:
cd MyTheme
run npm run web for web
npm run android for android
npm run IOS for Mac

# bash
Copy code
npm install
 or
yarn install
Link native dependencies:

# File Structure
plaintext
Copy code
MyTheme/
├── assets/
│   ├── profile.png
│   ├── search.png
│   ├── Card.png
│   ├── send.png
│   ├── receive.png
│   ├── loan.png
│   ├── topUp.png
│   ├── apple.png
│   ├── spotify.png
│   ├── moneyTransfer.png
│   └── grocery.png
├── components/
│   └── ThemeContext.js
├── screens/
│   └── HomeScreen.js
├── App.js
├── package.json
└── README.md

# Code Overview
* components/ThemeContext.js
This file defines a custom ThemeContext using React's Context API to provide theme data throughout the app. The useTheme hook is used to access the theme within components.

* screens/HomeScreen.js
This file defines the Home Screen component of the app. It uses the useTheme hook to access the theme colors and dynamically styles the components based on the theme.

# Here's a brief breakdown of the component:

* Header: Displays the user's profile image and a search button.
* Content:
Welcome message with the user's name.
A Mastercard image.
Four main feature buttons: Send, Receive, Loan, Topup.
Recent transactions list with icons, names, and amounts.
Subtexts like "Entertainment", "Music", and "Transaction" aligned under their respective items.

# Screens![Screenshot (91)](https://github.com/Zheena26/rn-assignment5-11328068/ass!
[Scr![Screenshot (92)](https://github.com/Zheena26/rn-assignment5-11328068/assets/169994345/231a2328-f123-4e7e-bdbd-7960d598ba13)
eenshot (94)](https://github.com/Zheena26/rn-assignment5-11328068/a![Screenshot (93)](https://github.com/Zheena26/rn-assignment5-11328068/assets/169994345/cf673ef1-d7e8-4cd0-8329-b9dcaf52b20e)
ssets/169994345/175f82ae-3112-43e8-bace-c4bbf1501a0f)
ets/169994345/b2d36a6a-a452-4201-be04-0a622e39b5b3)
hots
![Screens![Screenshot (95)](https://github.com/Zheena26/rn-assignment5-11328068/assets/169994345/bdca5921-2b01-4cfd-82ee-8b258bcd464e)
hot (88)](https://github.com/Zheena26/rn-assignment5-11328068![Screenshot (90)](https://github.com/Zheena26/rn-assignment5-11328068/assets/169994345/29be7afc-752c-42c7-acc9-700c5d8e84cf)
/assets/169994345/5807f591-4f83-4fca-a0ee-666afc8b2ef3)
![Screenshot (89)](https://github.com/Zheena26/rn-assignment5-11328068/assets/169994345/2771eb94-fd1e-4161-97b7-2a6d6f5510a8)


# Contributing
Contributions are welcome! Please open an issue or submit a pull request.

* Fork the repository.
Create a new branch: git checkout -b feature-name.
Make your changes.
Commit your changes: git commit -m 'Add some feature'.
Push to the branch: git push origin feature-name.
Submit a pull request.

# License
This project is licensed under the MIT License.
