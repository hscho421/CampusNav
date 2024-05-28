# Design Document for CampusNav

## Overview

CampusNav is a web application designed to assist college students in efficiently navigating their campus by calculating walking times between classes and optimizing their schedules. This document outlines the design considerations and architecture of the application.

## Architecture

The application follows a client-server architecture with a React frontend and a Django backend.

### Frontend

- **Technology**: React
- **Components**:
  - **ClassScheduleForm**: A form for users to input their class schedules.
  - **ScheduleList**: Displays the list of class schedules.
  - **WalkingTimeCalculator**: Calculates and displays walking times between classes.
  - **ScheduleVisualizer**: Visualizes the schedule with walking times overlaid.
- **Data Flow**:
  - User inputs data through forms.
  - Data is sent to the backend via API requests.
  - Responses are used to update the state and UI.

### Backend

- **Technology**: Django, Django REST Framework
- **Components**:
  - **Models**: Define the database schema (e.g., ClassSchedule).
  - **Views**: Handle API requests and responses.
  - **Serializers**: Convert complex data types to JSON.
  - **Endpoints**:
    - `/api/schedules/`: Endpoint to manage class schedules.
    - `/api/calculate-walking-time/`: Endpoint to calculate walking times using the Maps API.
- **Data Flow**:
  - Receives data from the frontend.
  - Processes data, performs calculations, and interacts with the database.
  - Sends responses back to the frontend.

## Database Schema

### ClassSchedule Model

| Field      | Type       | Description             |
| ---------- | ---------- | ----------------------- |
| id         | Integer    | Primary key             |
| class_name | CharField  | Name of the class       |
| start_time | TimeField  | Start time of the class |
| end_time   | TimeField  | End time of the class   |
| location   | CharField  | Location of the class   |
| user       | ForeignKey | Reference to the user   |

## API Design

### Endpoints

1. **GET /api/schedules/**:

   - Description: Retrieve all class schedules.
   - Response: List of class schedules.

2. **POST /api/schedules/**:

   - Description: Create a new class schedule.
   - Request Body: Class schedule data.
   - Response: Created class schedule.

3. **PUT /api/schedules/{id}/**:

   - Description: Update an existing class schedule.
   - Request Body: Updated class schedule data.
   - Response: Updated class schedule.

4. **DELETE /api/schedules/{id}/**:

   - Description: Delete a class schedule.
   - Response: Status message.

5. **POST /api/calculate-walking-time/**:
   - Description: Calculate walking time between classes.
   - Request Body: Class locations.
   - Response: Walking time data.

## User Interface Design

### Pages

1. **Home Page**

   - Displays an overview of the application and its features.
   - Provides links to login, register, and input schedules.

2. **Class Schedule Input Page**

   - Form for users to input class schedules.
   - Submit button to save schedules.

3. **Schedule Visualization Page**
   - Visual representation of the class schedule with walking times.
   - Option to edit or delete schedules.

### Navigation

- **Header**:
  - Links to Home, Class Schedule Input, Schedule Visualization, and User Account.
- **Footer**:
  - Links to About, Contact, and Privacy Policy.

## Considerations

- **Performance**: Optimize API requests and frontend rendering for better performance.
- **Usability**: Ensure the interface is intuitive and easy to use.
- **Scalability**: Design the backend to handle a growing number of users and schedules.
- **Security**: Implement secure authentication and protect user data.
