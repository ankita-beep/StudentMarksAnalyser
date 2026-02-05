import React from 'react';

const AnalysisResult = ({ students }) => {
    if (students.length === 0) {
        return (
            <div className="text-center p-10 bg-white/50 rounded-3xl mt-8">
                <p className="text-2xl font-funky text-funky-blue">No students yet! Add some above! 🎈</p>
            </div>
        );
    }

    const calculateStats = (student) => {
        const total = student.marks.reduce((a, b) => a + b, 0);
        const avg = total / student.marks.length;
        const max = Math.max(...student.marks);
        const min = Math.min(...student.marks);

        let grade = 'F';
        let sticker = '🐔';
        let color = 'text-gray-500';

        if (avg >= 90) { grade = 'A'; sticker = '🦁'; color = 'text-funky-orange'; }
        else if (avg >= 80) { grade = 'B'; sticker = '🐯'; color = 'text-funky-red'; }
        else if (avg >= 70) { grade = 'C'; sticker = '🐼'; color = 'text-funky-blue'; }
        else if (avg >= 60) { grade = 'D'; sticker = '🐨'; color = 'text-funky-yellow'; }

        return { total, avg, max, min, grade, sticker, color };
    };

    return (
        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {students.map((student, index) => {
                const stats = calculateStats(student);
                return (
                    <div key={index} className="bg-white border-b-8 border-r-8 border-funky-red rounded-2xl p-6 transform hover:-translate-y-2 transition-transform duration-300">
                        <div className="flex justify-between items-start mb-4">
                            <div>
                                <h3 className="text-xl font-bold text-gray-800">{student.name}</h3>
                                <p className="text-sm text-gray-500">Roll: {student.rollNumber}</p>
                            </div>
                            <div className="text-4xl bg-yellow-100 rounded-full w-16 h-16 flex items-center justify-center border-2 border-funky-yellow">
                                {stats.sticker}
                            </div>
                        </div>

                        <div className="space-y-2 font-mono text-sm">
                            <div className="flex justify-between">
                                <span>Total:</span>
                                <span className="font-bold">{stats.total}</span>
                            </div>
                            <div className="flex justify-between">
                                <span>Average:</span>
                                <span className="font-bold">{stats.avg.toFixed(2)}</span>
                            </div>
                            <div className="flex justify-between">
                                <span>Highest:</span>
                                <span className="text-green-600 font-bold">{stats.max}</span>
                            </div>
                            <div className="flex justify-between">
                                <span>Lowest:</span>
                                <span className="text-red-600 font-bold">{stats.min}</span>
                            </div>
                        </div>

                        <div className={`mt-4 text-center text-5xl font-black ${stats.color} drop-shadow-md`}>
                            {stats.grade}
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default AnalysisResult;
