# Password Generator

[See the deployment](https://dsmidt8.github.io/Password-Generator/)  
[Explore the code](https://github.com/dsmidt8/Password-Generator)

![03-javascript-homework-demo](https://user-images.githubusercontent.com/103525583/168696438-63dec6eb-197b-48e7-9566-c51c61195c82.png)


---

## Table of Contents
- [About the Project](#About-the-Project)
- [Usage](#Usage)
- [Contributers](#Contributers)
- [Questions](#Questions)

## About the Project

In this project I created javascript code that allows a user to select criteria to generate a random password.

## Usage

To use the app click the generate password button and follow the prompts. Password must be between 8 and 126 characters, and 1 character type must be selected.

## Process

- I started by realizing that I needed window alerts, prompts, and confirms to log user inputs.
- I then used if statements to log what the user chose 
- I then added an array to contain all of the selected options by using .concat .
- I used a math function in a for loop to randomly generate a character based on the selected inputs
- the number of times the for loop ran is based on the seleced length of the password
- the password is logged onto the html screen by using .value to change the passwordText to the generated password.
- to validate options an if statement is generated if all values are logged false, resetting the function.
- if a length is not a valid number, an if statement (containing greater than or less than values) prompts the user to select a valid number, 

## Contributers

Base code provided by University of Minnesota coding bootcamp

Java script made by David Smidt


## Questions

For any questions, please reach out by contacting me via github
  
