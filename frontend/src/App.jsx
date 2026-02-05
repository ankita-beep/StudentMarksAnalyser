import React, { useState } from 'react';
import StudentInput from './components/StudentInput';
import AnalysisResult from './components/AnalysisResult';

function App() {
  const [students, setStudents] = useState([]);

  const addStudent = (student) => {
    setStudents([...students, student]);
  };

  return (
    <div className="min-h-screen bg-orange-50 p-6 md:p-12 font-funky selection:bg-funky-yellow selection:text-black">
      <div className="max-w-6xl mx-auto">
        <header className="text-center mb-12">
          <h1 className="text-5xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-funky-orange via-funky-red to-funky-blue animate-pulse">
            Marks Analyzer
          </h1>
          <p className="text-xl text-funky-blue mt-2 font-bold rotate-1 inline-block bg-yellow-200 px-4 py-1 transform -skew-x-12">
            Make Grading Fun Again! 🎪
          </p>
        </header>

        <main>
          <div className="max-w-xl mx-auto mb-16">
            <StudentInput onAddStudent={addStudent} />
          </div>

          <div className="border-t-4 border-dashed border-gray-300 pt-8 relative">
            <div className="absolute top-[-24px] left-1/2 transform -translate-x-1/2 bg-orange-50 px-4 text-2xl text-gray-400 font-bold">
              Results Below
            </div>
            <AnalysisResult students={students} />
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
