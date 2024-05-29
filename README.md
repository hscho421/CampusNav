# CampusNav

CampusNav is a web application designed to assist college students in efficiently navigating their expansive campus. The primary goal is to simplify course registration by helping students determine if the walking distances and times between their selected classes are manageable within the given timeframe. By leveraging the power of Google Maps or Apple Maps API, CampusNav provides accurate walking routes and times, ensuring students can plan their schedules with confidence.

## Problem Statement

Many college students often face difficulties during course registration due to the large campus size and the challenge of scheduling classes with enough time to walk between different buildings. Manually checking maps and estimating walking times can be time-consuming and prone to errors. CampusNav addresses this problem by providing an automated solution that calculates walking distances and times between classes, helping students to optimize their schedules and avoid potential conflicts.

## Features

- **Class Schedule Input**: Users can input their class schedules, specifying the times and locations of each class.
- **Walking Time Calculation**: The application uses Google Maps API or Apple Maps API to compute the walking distances and times between specified class locations.
- **Schedule Visualization**: The user's schedule is displayed with an overlay of walking times between classes, highlighting any tight transitions.
- **Optimized Routing**: The application suggests optimal class schedules based on minimizing walking time, helping students to select classes that fit better together.
- **User-Friendly Interface**: A clean and intuitive interface makes it easy for students to input their schedules and view the calculated walking times.
- **Future Enhancements**: Planned features include multi-modal transportation options, user authentication, real-time updates, and a mobile app version.

## Tech Stack

- **Frontend**: React (JavaScript), HTML, CSS
- **Backend**: Flask (Python)
- **Maps API**: Google Maps API or Apple Maps API for calculating walking distances and times between class locations.
- **Hosting**: AWS

## Usage

1. **Input Schedule**: Users enter their class schedule, including the times and locations of each class.
2. **Calculate Walking Times**: The application uses the Maps API to compute the walking distances and times between consecutive classes.
3. **Visualize Schedule**: The schedule is displayed with walking times overlaid, making it easy to spot potential issues with tight transitions.
4. **Optimize Schedule**: Users can adjust their class selections based on the walking time calculations to create a more efficient schedule.
