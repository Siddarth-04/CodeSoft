# Calculator Web Application

This repository contains a **basic calculator** web application built with **HTML**, **CSS**, and **JavaScript**. The calculator supports basic arithmetic operations like addition, subtraction, multiplication, and division, along with some additional functions like clearing the display and deleting the last input.

## Table of Contents
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Screenshots](#screenshots)
- [Icons Used](#icons-used)


## Features

- **Basic Arithmetic Operations**: Addition, subtraction, multiplication, and division.
- **Display Screen**: Shows the input and results of operations.
- **Clear Function**: Quickly reset the calculator using the "AC" button.
- **Delete Function**: Delete the last input character using the "DEL" button.
- **Responsive Design**: The calculator adjusts well on different devices and screen sizes.

## Technologies Used

- **HTML5**
- **CSS3** (Using **Google Fonts** for styling)
- **JavaScript**

## Screenshots

### Calculator Layout
![calculator](https://github.com/user-attachments/assets/4c6937fc-f5ea-44c6-84a1-31a193d025e1)




## Icons Used

We used some of the following **common icons** that represent key functionality in calculators:

- **AC Button** (Clear Display): Resets the calculator.
- **DEL Button** (Delete Last Input): Deletes the most recent entry.
- **Equal Button** (Result): Performs the calculation of the current input.

To further enhance the appearance, you could integrate **Font Awesome** or any other icon library to add icons to your buttons. Here’s how you can add Font Awesome icons:

1. Include the **Font Awesome CDN** in your HTML `<head>` section:
    ```html
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" rel="stylesheet">
    ```

2. Add icons to the respective buttons:
    ```html
    <button class="operator" data-value="AC"><i class="fas fa-trash-alt"></i> AC</button>
    <button class="operator" data-value="DEL"><i class="fas fa-backspace"></i> DEL</button>
    <button class="operator" data-value="="><i class="fas fa-equals"></i> =</button>
    ```
