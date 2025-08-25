# Frequency Declaration System

This project is a Frequency Declaration System that utilizes Firebase for the backend and is deployed on Vercel. It consists of a frontend built with React and a backend powered by Firebase Functions.

## Project Structure

The project is organized into two main directories: `frontend` and `backend`.

### Frontend

- **`frontend/src/app/page.tsx`**: Main entry point for the frontend application, defining the layout and structure of the main page.
- **`frontend/src/app/layout.tsx`**: Layout structure for the application, including common elements like headers and footers.
- **`frontend/src/components/DeclarationForm.tsx`**: React component for handling user input for frequency declarations, including form fields and submission logic.
- **`frontend/src/styles/globals.css`**: Global CSS styles for consistent styling across all components.
- **`frontend/src/types/index.ts`**: TypeScript types and interfaces used throughout the frontend application.
- **`frontend/public/favicon.ico`**: Favicon for the frontend application.
- **`frontend/package.json`**: Configuration file for npm, listing dependencies and scripts for the frontend.
- **`frontend/tsconfig.json`**: TypeScript configuration file for the frontend.

### Backend

- **`backend/functions/src/index.ts`**: Entry point for the backend functions, initializing Firebase functions and middleware.
- **`backend/functions/src/declaration.ts`**: Functions related to handling frequency declarations in the Firebase database.
- **`backend/functions/package.json`**: Configuration file for npm in the backend, listing dependencies and scripts.
- **`backend/functions/tsconfig.json`**: TypeScript configuration file for the backend.
- **`backend/firebase.json`**: Configuration settings for Firebase, including deployment settings.
- **`backend/.firebaserc`**: Firebase project settings, including project ID and environment aliases.

## Setup Instructions

### Frontend

1. Navigate to the `frontend` directory.
2. Install dependencies using `npm install`.
3. Start the development server with `npm run dev`.

### Backend

1. Navigate to the `backend/functions` directory.
2. Install dependencies using `npm install`.
3. Deploy the functions to Firebase using `firebase deploy`.

## Deployment

The frontend is deployed on Vercel, and the backend functions are deployed on Firebase. Ensure that you have the necessary configurations set up in both platforms for a smooth deployment process.

## Contributing

Feel free to contribute to this project by submitting issues or pull requests. Your feedback and contributions are welcome!