# Quiz Game App

Welcome to the Quiz App Portfolio Project! This interactive quiz application fetches trivia questions from an external API and allows users to test their knowledge on various topics. This README provides an overview of the project, its features, and the technology stack used.

## Table of Contents

- [Demo](#demo)
- [Features](#features)
- [Technology Stack](#technology-stack)
- [Getting Started](#getting-started)
- [Usage](#usage)
- [Contributing](#contributing)
- [Additional Information](#additional-information)
  - [Gulp Build](#additional-information)
- [License](#license)

## Demo

[Live Demo](https://volodymyrfilon.github.io/quiz-js/)

## Features

- Fetches trivia questions from the Open Trivia Database API.
- Selects the correct answer among multiple choices.
- Keeps track of the user's score.
- Highlights the correct answer when the user selects the wrong one.
- Progress bar to show the user's progress through the quiz.
- Responsive design for mobile and desktop.
- End page to display the final score.
- Local Highscores dashboard

## Technology Stack

The Quiz App is built using the following technology stack:

- **HTML5**: Used for creating the structure and content of the web pages.
- **CSS3**: Utilized SCSS (Sass) for styling to maintain a modular and maintainable codebase.
- **JavaScript**: Implemented core functionality and interactivity.
- **Gulp**: Task automation tool used for compiling SCSS, minifying JavaScript, and optimizing assets.
- **Webpack**: Bundler for JavaScript modules, improving code organization and performance.
- **Open Trivia Database API**: External API for fetching trivia questions.
- **localStorage**: Used to store high scores and the most recent score locally in the user's browser.

## Getting Started

To get started with the Quiz App on your local machine, follow these instructions:

1. Clone the repository:

   ```bash
   git clone https://github.com/volodymyrfilon/quiz-app.git

1. Navigate to the project directory:

   ```bash
   cd quiz-app

2. Open the project in your preferred code editor.

3. Launch a local development server. You can use tools like **Live Server** for Visual Studio Code or Python's built-in HTTP server.

4. Access the application in your web browser by opening **`index.html`**.

## Usage

- When the application loads, trivia questions are fetched from the Open Trivia Database API.
Answer the questions by clicking on one of the multiple-choice options.
- If your answer is correct, your score increases.
- If your answer is wrong, the correct answer will be highlighted.
- The progress bar at the top shows your progress through the quiz.
- After answering all the questions or reaching the maximum question limit, your final score is displayed on the end page.

## Contributing

Contributions to this project are welcome! If you would like to contribute, please follow these steps:

1.Fork the repository.
2. Create a new branch for your feature or bug fix:
 
    ```bash
    git checkout -b feature/your-feature-name

3. Make your changes and commit them with clear commit messages.
4. Push your changes to your fork:

   ```bash
   git push origin feature/your-feature-name

5. Create a pull request to merge your changes into the main repository.

## Additional Information
In addition to the core features of the Quiz App, here is some additional information about the project:

- The project utilizes SCSS for styling, providing a more maintainable and modular approach to CSS.
- Build and task automation are handled using Gulp, making it easier to manage tasks like compiling SCSS, minifying JavaScript, and optimizing assets.
- Webpack is used for bundling JavaScript modules, improving code organization and performance.

My ready for use **Gulp.js** Build which helps me every day in developing projects:

[Gulp.js build](https://github.com/volodymyrfilon/gulp-build)

## License

This project is licensed under the **MIT License**. See the LICENSE file for details.

## Support and Contact

If you have any questions, issues, or need assistance with this Quiz Game project, please feel free to **create an issue** on GitHub.

Thank you for using this project! Happy coding! 🚀

<a href="https://www.buymeacoffee.com/volodymyr26"><img src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" width="170" /></a>