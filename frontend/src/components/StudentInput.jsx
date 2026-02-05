import React, { useState } from 'react';

const StudentInput = ({ onAddStudent }) => {
    const [name, setName] = useState('');
    const [roll, setRoll] = useState('');
    const [marksStr, setMarksStr] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!name || !roll || !marksStr) return;

        const marks = marksStr.split(',').map(m => parseInt(m.trim())).filter(m => !isNaN(m));

        onAddStudent({ name, rollNumber: parseInt(roll), marks });
        setName('');
        setRoll('');
        setMarksStr('');
    };

    return (
        <div className="bg-white border-4 border-funky-blue rounded-3xl p-6 shadow-[8px_8px_0px_0px_rgba(33,150,243,1)] transform rotate-1 hover:rotate-0 transition-all duration-300">
            <h2 className="text-2xl font-bold text-funky-orange mb-4 flex items-center gap-2">
                <span>📝</span> Add Student
            </h2>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div>
                    <label className="block text-funky-blue font-bold mb-1">Name</label>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full border-2 border-funky-yellow rounded-xl p-2 outline-none focus:border-funky-orange transition-colors"
                        placeholder="e.g. John Doe"
                    />
                </div>
                <div>
                    <label className="block text-funky-blue font-bold mb-1">Roll Number</label>
                    <input
                        type="number"
                        value={roll}
                        onChange={(e) => setRoll(e.target.value)}
                        className="w-full border-2 border-funky-yellow rounded-xl p-2 outline-none focus:border-funky-orange transition-colors"
                        placeholder="e.g. 101"
                    />
                </div>
                <div>
                    <label className="block text-funky-blue font-bold mb-1">Marks (comma separated)</label>
                    <input
                        type="text"
                        value={marksStr}
                        onChange={(e) => setMarksStr(e.target.value)}
                        className="w-full border-2 border-funky-yellow rounded-xl p-2 outline-none focus:border-funky-orange transition-colors"
                        placeholder="e.g. 85, 90, 78"
                    />
                </div>
                <button type="submit" className="bg-funky-red text-white font-bold py-3 rounded-xl hover:bg-orange-600 shadow-[4px_4px_0px_0px_rgba(244,67,54,0.5)] active:translate-y-1 active:shadow-none transition-all">
                    Add to List 🚀
                </button>
            </form>
        </div>
    );
};

export default StudentInput;
