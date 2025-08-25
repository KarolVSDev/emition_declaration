# Frequency Declaration System

This project is a Frequency Declaration System that utilizes Firebase for the backend and is deployed on Vercel. It consists of a frontend built with React and a backend powered by Firebase Functions.

## Frontend

The frontend is located in the `frontend` directory and is built using Next.js. It includes the following key components:

- **Main Entry Point**: The main page of the application is defined in `src/app/page.tsx`.
- **Layout**: Common layout elements are defined in `src/app/layout.tsx`.
- **Declaration Form**: The user input form for frequency declarations is implemented in `src/components/DeclarationForm.tsx`.
- **Global Styles**: Consistent styling across the application is managed in `src/styles/globals.css`.
- **Type Definitions**: TypeScript types and interfaces are defined in `src/types/index.ts`.

### Setup Instructions

1. **Clone the Repository**: 
   ```bash
   git clone <repository-url>
   cd frequency-declaration-system/frontend
   ```

2. **Install Dependencies**: 
   ```bash
   npm install
   ```

3. **Run the Development Server**: 
   ```bash
   npm run dev
   ```

4. **Open in Browser**: Navigate to `http://localhost:3000` to view the application.

## Backend

The backend is located in the `backend` directory and utilizes Firebase Functions to handle the frequency declarations. Key components include:

- **Functions Entry Point**: The main entry point for Firebase functions is defined in `functions/src/index.ts`.
- **Declaration Handling**: Functions related to frequency declarations are implemented in `functions/src/declaration.ts`.

### Setup Instructions

1. **Navigate to Backend Directory**: 
   ```bash
   cd frequency-declaration-system/backend/functions
   ```

2. **Install Dependencies**: 
   ```bash
   npm install
   ```

3. **Deploy to Firebase**: 
   ```bash
   firebase deploy
   ```

## Deployment

The frontend is deployed on Vercel. Ensure that you have configured the necessary environment variables and settings in Vercel for a smooth deployment.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any enhancements or bug fixes.

## License

This project is licensed under the MIT License. See the LICENSE file for more details.