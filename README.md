# JetSpeed Travel Agency Website

## Overview

Welcome to the official repository for the JetSpeed Travel Agency website! This project showcases a user-friendly platform designed to help customers explore destinations, book hotels and flights, arrange travel packages, and secure travel insurance. It's built with standard web technologies (HTML, CSS) and incorporates jQuery for dynamic content and interactive elements.

## Features

* **Comprehensive Navigation:** Easy access to Home, About Us, Hotel Booking, Flight Booking, Package Deals, and Travel Insurance pages.
* **Dynamic Content:** Utilizes jQuery to create interactive elements (e.g., a "hide P tags" button).
* **Customer Testimonials:** Dedicated sections to showcase positive customer experiences.
* **Upcoming Tour Dates:** A table displaying available tour packages, dates, and booking status.
* **Image Galleries:** Visual showcases of popular travel destinations.
* **Clear Layout:** Organized content with floating elements for a structured design.

## Technologies Used

* **HTML5:** For the fundamental structure of the website.
* **CSS3:** For styling, layout (using floats for columns), and visual presentation (`jetspeedstyles.css`).
* **jQuery (3.7.1):** A fast, small, and feature-rich JavaScript library for DOM manipulation and event handling.
* **JavaScript:** For interactive functionality.

## Getting Started

To explore the JetSpeed Travel Agency website locally, simply clone this repository and open the HTML files in your web browser.

### Prerequisites

* A modern web browser (e.g., Chrome, Firefox, Edge, Safari).

### Installation and Viewing

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/your-username/jetspeed-travel.git](https://github.com/your-username/jetspeed-travel.git)
    cd jetspeed-travel
    ```
    *(Remember to replace `https://github.com/your-username/jetspeed-travel.git` with the actual URL of your GitHub repository once you create it.)*

2.  **Open `index.html`:**
    Navigate to the `jetspeed-travel` folder and double-click `index.html` to open it in your default web browser. You can then navigate to other pages using the website's navigation.

## Challenges and Learnings

During the development of the JetSpeed Travel website, I encountered several common front-end development challenges, especially related to integrating different technologies and ensuring a cohesive user experience. Here are some of the key issues and how I approached them:

* **jQuery Integration and Initial Setup:**
    * **Issue:** Getting jQuery to work correctly was a learning curve. Initially, I might have faced issues with the library not loading correctly or my custom scripts not executing.
    * **Learning:** I learned the importance of placing the `<script src="jquery-3.7.1.js"></script>` tag *before* my custom jQuery code (`<script> $(document).ready(...) </script>`) in the HTML `<head>`. This ensures that jQuery is loaded and available for use when my scripts try to call its functions. I also reinforced the use of `$(document).ready()` to ensure the DOM is fully loaded before executing scripts.

* **CSS Layout with Floats and Clearing:**
    * **Issue:** Using `float: left;` and `float: right;` for layout (as seen with `customerBox` and `clearFloat`) can be tricky. Elements might not align as expected, or subsequent content might wrap around floats in undesirable ways.
    * **Learning:** This project solidified my understanding of the `clear: both;` property. By adding a `div` with `class="clearFloat"` (which presumably has `clear: both;` in `jetspeedstyles.css`), I ensured that elements appearing after the floated customer boxes would start on a new line, preventing layout overlaps. It was a practical lesson in managing the document flow when using floats.

* **Relative Paths for Assets (Images and CSS):**
    * **Issue:** Ensuring that images (`logo.png`, `malaysia.jpg`, etc.) and the stylesheet (`jetspeedstyles.css`) loaded correctly across different pages (`index.html`, `about.html`, etc.) could be a challenge if paths weren't consistent.
    * **Learning:** I paid close attention to using correct relative paths (e.g., `images/logo.png`, `jetspeedstyles.css`). This was crucial to ensure that all assets were found by the browser, regardless of which HTML file was currently open.

* **Structuring Multi-Page Navigation:**
    * **Issue:** While the navigation links are straightforward (`href="index.html"`, `href="about.html"`), ensuring every page had the correct and consistent navigation was a manual process for a static site.
    * **Learning:** For a simple static site like this, direct linking is effective. This project reinforced the importance of planning the site structure and consistently applying the navigation bar across all HTML files. For larger projects, this often leads to considering templating engines or build tools.

## Contributing

As a personal project, direct contributions are not actively sought at the moment. However, if you find any issues or have suggestions, feel felt to open an issue in this repository.

## License

Distributed under the MIT License. See `LICENSE.md` for more information. *(You'll need to create a `LICENSE.md` file in your repository with the MIT license text if you want to use this.)*

## Copyright

© 2025 MacDonaldIndustries. All Rights Reserved.

## Contact

* **Your Name:** Alasdair MacDonald
* **LinkedIn:** [Alasdair MacDonald's LinkedIn](http://www.linkedin.com/in/alasdair-macdonald-60b178326)

## Acknowledgements

* jQuery for providing a powerful and easy-to-use JavaScript library.
* **Gemini AI for assistance and guidance during development.**
