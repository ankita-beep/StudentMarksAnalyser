# Student Marks Analyzer

A full-stack application to analyze student marks, featuring a Java backend and a React frontend.

## Technologies
- **Backend**: Java (Maven)
- **Frontend**: React (Vite, TailwindCSS)

## Project Structure
- `src/main/java`: Java backend source code.
- `frontend/`: React frontend source code.
- `pom.xml`: Maven configuration.
- `run_frontend.bat`: Helper script to run the frontend on Windows.

## How to Run

### Backend
1. Ensure you have Java and Maven installed.
2. Navigate to the root directory.
3. Compile and run the Main class:
   ```bash
   javac -d bin src/main/java/com/student/analyzer/*.java
   java -cp bin com.student.analyzer.Main
   ```
   *(Or use your IDE to run `com.student.analyzer.Main`)*

### Frontend
1. Navigate to the `frontend` directory:
   ```bash
   cd frontend
   ```
2. Install dependencies (first time only):
   ```bash
   npm install
   ```
3. Run the development server:
   ```bash
   npm run dev
   ```
   Or simply run `run_frontend.bat` from the root directory (Windows).

## Features
- Input student details (Name, Roll No, Marks).
- Calculate Total, Average, and Grade.
- Modern Web UI for interaction.

## AI Assistance Disclosure

This project was developed with the help of AI tools.
The AI was used as a coding assistant for structure and logic guidance.

I personally:
- Ran and tested the code locally
- Understood and verified the logic
- Modified inputs and validated outputs
- Managed the Git repository and commits

The goal of this project is learning and demonstrating Java and Web Development fundamentals.
