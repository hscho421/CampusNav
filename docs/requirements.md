# Project Requirements for CampusNav

## Functional Requirements

1. **User Registration and Authentication**

   - Users should be able to create an account, log in, and log out.
   - User authentication should be handled securely.

2. **Class Schedule Input**

   - Users should be able to input their class schedules with details including class name, start time, end time, and location.
   - The input interface should be user-friendly and intuitive.

3. **Walking Time Calculation**

   - The application should calculate walking times between class locations using the Google Maps API or Apple Maps API.
   - Walking times should be accurate and consider campus paths.

4. **Schedule Visualization**

   - Users should be able to visualize their schedules with walking times overlaid.
   - The visualization should clearly highlight any tight transitions between classes.

5. **Optimized Routing and Suggestions**
   - The application should suggest optimized class schedules based on minimizing walking times.
   - Users should be able to adjust their schedules based on these suggestions.

## Non-Functional Requirements

1. **Performance**

   - The application should provide quick and responsive interactions.
   - Walking time calculations and schedule visualizations should be processed efficiently.

2. **Usability**

   - The interface should be clean, intuitive, and easy to navigate.
   - Users should be able to input and modify their schedules with minimal effort.

3. **Reliability**

   - The application should handle high loads without crashing.
   - Data should be stored and retrieved reliably without loss.

4. **Scalability**

   - The application should be able to handle an increasing number of users.
   - The backend should be scalable to accommodate additional features in the future.

5. **Security**
   - User data should be protected with proper encryption and authentication mechanisms.
   - The application should prevent unauthorized access and data breaches.

## Technical Requirements

1. **Frontend**

   - React
   - HTML, CSS, JavaScript

2. **Backend**

   - Django
   - Django REST Framework

3. **Database**

   - PostgreSQL or SQLite

4. **Maps API**

   - Google Maps API or Apple Maps API

5. **Hosting**
   - AWS

## Future Enhancements

1. **Multi-Modal Transportation Options**

   - Support for different modes of transportation like biking or public transit.

2. **Real-Time Updates**

   - Real-time updates for schedule changes or campus events.

3. **Mobile Application**
   - A mobile version of the application for on-the-go access.
