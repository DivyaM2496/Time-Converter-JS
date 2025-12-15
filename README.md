# ⏱️ Time Converter App

## 📌 Overview

The **Time Converter App** is a simple JavaScript web application that converts hours and minutes into seconds. Users can input hours and minutes, and the app dynamically calculates and displays the total time in seconds.

This project is excellent for beginners to practice **DOM manipulation**, **event handling**, and **basic arithmetic operations** in JavaScript.

---

## 🧩 Features

* Input hours and minutes
* Convert the time to seconds
* Displays the result dynamically
* Provides validation and error messages for empty inputs

---

## 🛠️ Technologies Used

* HTML5
* CSS3
* JavaScript

---

## ⚙️ How It Works

1. User inputs hours and minutes in their respective input fields.
2. Clicking the **Convert** button triggers the `convertToSecs()` function.
3. The function:

   * Validates input fields to ensure they are not empty
   * Converts hours and minutes into seconds using the formula:

     ```js
     totalSeconds = (hours * 3600) + (minutes * 60);
     ```
   * Updates the `timeInSecsEl` element to display the result

---

## 📂 Project Structure

```
time-converter-app/
│
├── index.html
├── style.css
├── script.js
└── README.md
```

---

## 🧪 JavaScript Logic

```js
function convertToSecs() {
    let hours = parseInt(hoursInputEl.value);
    let mins = parseInt(minutesInputEl.value);

    if (hoursInputEl.value === "") {
        errorMsg.textContent = "please enter a valid number of hours";
    } else if (minutesInputEl.value === "") {
        errorMsg.textContent = "please enter a valid number of minutes";
        timeInSecsEl.textContent = "";
    } else {
        let secs = hours * 3600 + mins * 60;
        timeInSecsEl.textContent = secs + "s";
    }
}
convertBtnEl.addEventListener("click", convertToSecs);
```

---

## 📚 Concepts Covered

* DOM element selection and manipulation
* Event handling (`click` event)
* Input validation and error messages
* Basic arithmetic calculations

---

## 🚀 Future Improvements

* Add support for seconds input as well
* Handle non-numeric inputs gracefully
* Display results in multiple formats (hh:mm:ss)
* Style the output dynamically with animations or colors

---

## 👩‍💻 Author

Created as a practice project to strengthen **JavaScript DOM manipulation**, **event handling**, and **time conversion logic** skills.

---

⭐ If you find this project useful, feel free to star the reposi
