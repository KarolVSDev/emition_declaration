# Frequency Declaration System Backend

This repository contains the backend for the Frequency Declaration System, which is built using Firebase Cloud Functions. The backend handles all operations related to frequency declarations, including creating, reading, updating, and deleting declarations.

## Project Structure

- **functions/**: Contains the Firebase Cloud Functions code.
  - **src/**: Source code for the functions.
    - **index.ts**: Entry point for the Firebase functions.
    - **declaration.ts**: Functions related to frequency declarations.
  - **package.json**: Lists dependencies and scripts for the backend.
  - **tsconfig.json**: TypeScript configuration for the backend.

## Setup Instructions

1. **Clone the repository**:
   ```bash
   git clone <repository-url>
   cd frequency-declaration-system/backend
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Configure Firebase**:
   - Ensure you have the Firebase CLI installed. If not, install it using:
     ```bash
     npm install -g firebase-tools
     ```
   - Log in to your Firebase account:
     ```bash
     firebase login
     ```
   - Initialize your Firebase project:
     ```bash
     firebase init
     ```

4. **Deploy the functions**:
   ```bash
   firebase deploy --only functions
   ```

## Usage

- The backend functions can be accessed via the Firebase endpoint after deployment.
- Refer to the `declaration.ts` file for available API endpoints and their usage.

## Contributing

Contributions are welcome! Please submit a pull request or open an issue for any suggestions or improvements.

## License

This project is licensed under the MIT License. See the LICENSE file for details.