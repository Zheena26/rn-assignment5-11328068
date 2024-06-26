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
cd MyTheme 
Install dependencies:

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

# Screenshots


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