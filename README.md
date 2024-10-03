# Horse Racing App - README

### Introduction

Welcome to the Horse Racing App repository! This project aims to provide horse racing enthusiasts with a comprehensive platform for accessing horse racing data, live race updates, statistics, and much more. The app leverages an external API to fetch horse racing data and utilizes Axios for seamless data retrieval.

![Landing Page](https://raw.githubusercontent.com/221244-Tebogo/DV200-term1-api-chartjs/main/Mockups/mockup-1.jpg)

## Challenges Faced

One of the major challenges encountered during the development of this app was the utilization of an API that had limitations on the number of requests allowed. After reaching the limit of 40 requests, the API would expire, leading to disruptions in data fetching. This limitation posed a significant hurdle and highlighted the importance of selecting reliable APIs with sufficient request limits in future projects.

## Lessons Learned

Throughout the development process, several valuable lessons were learned:
The importance of thoroughly researching and selecting APIs with suitable request limits to avoid disruptions in app functionality.
The need for proactive monitoring and management of API usage to prevent exceeding request limits.
Enhancing resilience by exploring alternative APIs or implementing caching mechanisms to mitigate the impact of API limitations.

### Dependencies
To run the app locally, you'll need the following dependencies:
@emotion/react: ^11.11.4
@emotion/styled: ^11.11.0
@mui/icons-material: ^5.15.12
@mui/material: ^5.15.12
@mui/x-data-grid: ^6.19.6
@nivo/bar: ^0.84.0
@nivo/line: ^0.84.0
@nivo/pie: ^0.84.0
@testing-library/jest-dom: ^5.17.0
@testing-library/react: ^13.4.0
@testing-library/user-event: ^13.5.0
bootstrap: ^5.2.3
bootstrap-icons: ^1.11.3
material-react-table: ^2.12.1
react: ^18.2.0
react-bootstrap: ^2.10.1
react-chartjs-2: ^5.2.0
react-dom: ^18.2.0
react-pro-sidebar: ^1.1.0
react-router-dom: ^6.22.2
react-scripts: 5.0.1
remixicon: ^4.2.0
web-vitals: ^2.1.4
yup: ^1.4.0

### Dev Dependencies:

@babel/plugin-proposal-private-property-in-object: ^7.21.11
autoprefixer: ^10.4.17
postcss: ^8.4.35
tailwindcss: ^3.4.1

### Getting Started
Clone the repository to your local machine.
Install the necessary dependencies using npm install.
Start the development server using npm start.
Access the app in your browser at http://localhost:3000

## Future Enhancements
In the future, the following enhancements could be considered:

Implementation of a more robust API with higher request limits or alternative data sources.
Integration of caching mechanisms to reduce reliance on external APIs and improve app performance.
Exploration of additional features such as predictive analytics, race simulations, or user forums to enhance user engagement.

![Comparison](https://raw.githubusercontent.com/221244-Tebogo/DV200-term1-api-chartjs/main/Wireframes/Comparison.jpg)

### Conclusion

The Horse Racing App represents a culmination of efforts to create a comprehensive platform for horse racing enthusiasts. While facing challenges along the way, valuable lessons were learned, and opportunities for future enhancements were identified. With continued development and refinement, the app aims to provide an unparalleled experience for users passionate about horse racing.
