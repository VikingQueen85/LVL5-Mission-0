
This project was developed as part of Mission 0, where the goal was to create a quick page template for the Marketing Association New Zealand's new digital news homepage.

Client: Marketing Association New Zealand
Project Brief: To build a single-page, mobile-responsive application that serves as a template for a digital news homepage. The design was guided by provided wireframes, allowing for custom color palettes and images. The search functionality was explicitly noted as not requiring implementation.

Purpose: This application serves as a prototype for a modern, responsive digital news interface, focusing on layout and user experience across different device sizes.

Getting Started with Create React App
This project was bootstrapped with Create React App, providing a robust environment for building single-page React applications.

Available Scripts
In the project directory, after installing dependencies, you can run:

npm start
Runs the app in the development mode.

Open http://localhost:3000 to view it in your browser.

The page will reload when you make changes.

You may also see any lint errors in the console.

npm test
Launches the test runner in the interactive watch mode.

npm run build
Builds the app for production to the build folder.

It correctly bundles React in production mode and optimizes the build for the best performance.

Your app is ready to be deployed!

Project Details
Technologies Used
React.js: The core JavaScript library for building the user interface.

Create React App: The scaffolding tool used to set up the React project.

Bootstrap: Utilized for responsive design and styling components, providing a mobile-first approach.

Custom CSS: For specific styling and layout adjustments beyond Bootstrap defaults.

Responsive Design
The webpage is designed to be fully mobile responsive, adapting its layout to provide an optimal viewing experience across various screen sizes (desktop, tablet, and mobile). This was achieved using:

Flexbox: For creating flexible and adaptable layouts for sections like the header, image grid, and search area.

CSS Media Queries: To apply specific styling rules at different breakpoints, ensuring content stacks vertically on smaller screens (e.g., the image grid) and adjusts typography and spacing for readability.

The responsive implementation follows the guidance provided by the wireframes:

Desktop Layout:

Mobile Layout:

Project Structure
public/: Contains static assets like index.html and images (e.g., WaterHealing.png, desktop.png, mobile.png).

src/: Contains the main React application code.

App.jsx: The main React component that structures the overall page layout, importing other functional components.

index.css: Contains the global CSS styles, including responsive media queries.

components/: Houses reusable React components such as Header, SearchSection, ImagesSection, and Footer.

How to Run Locally
Navigate to the project directory
Start the development server:

npm start

The application should open in your default web browser at http://localhost:3000.

Customizations
Color Palette: A custom color palette has been applied, deviating from the wireframe's grayscale to provide a more vibrant and distinct visual identity.

Images: Custom images have been integrated into the design, including a background image for the top section and placeholder images for the image gallery, aligning with the project's theme.

Search Functionality: As per the brief, the search functionality is present in the UI but is not implemented with backend logic.

Author
Tessa - VikingQueen85