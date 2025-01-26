import RoadmapItem from "./RoadmapItem";
import { useState } from 'react';

const Card = () => {
    const [isHovered, setIsHovered] = useState(false)

    const roadmapItems = [
        {
            icon: "🔬",
            title: "Digital Forensics",
            description: "Evidence Collection, Analysis Tools"
        },
        {
            icon: "🔍",
            title: "OSINT Techniques",
            description: "Information Gathering, Social Engineering"
        },
        {
            icon: "🔒",
            title: "Data Security & Privacy",
            description: "Encryption, Access Control, Data Protection"
        },
        {
            icon: "🛡️",
            title: "Malware Protection",
            description: "Threat Detection, Prevention Strategies"
        },
        {
            icon: "💻",
            title: "Linux Basics",
            description: "Command Line, File System, Package Management"
        }
    ]

    return (
        <div className="min-h-screen flex items-center justify-center p-4">
            <div className="glass-card w-full max-w-4xl rounded-2xl">
                <div className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="p-2 rounded-lg bg-cyber-blue bg-opacity-20">
                            <span className="text-xl">🛡️</span>
                        </div>
                        <h1 className="text-3xl font-bold text-white">Defense Matrix 2025</h1>
                    </div>
          
                    <p className="text-gray-300 text-base mb-6">
                        The Cyberonites Club invites you to an action-packed event designed to enhance your cybersecurity skills.
                        Explore critical concepts, gain practical knowledge, and prepare to tackle modern cyber threats!
                    </p>

                    <div className="grid md:grid-cols-3 gap-6">
                        <div className="md:col-span-2">
                            <h2 className="text-xl font-bold text-white mb-4">Learning Roadmap</h2>
                            <div className="space-y-4">
                                {roadmapItems.map((item, index) => (
                                    <RoadmapItem key={index} {...item} />
                                ))}
                            </div>
                        </div>

                        <div>
                            <div className="glass-card p-4 rounded-xl">
                                <h2 className="text-xl font-bold text-white mb-4">Event Details</h2>
                
                                <div className="space-y-3">
                                    <div className="flex items-center gap-2">
                                        <span className="text-lg">📅</span>
                                        <p className="text-white text-sm">February 1st, 2025</p>
                                    </div>

                                    <div className="flex items-center gap-2">
                                        <span className="text-lg">📍</span>
                                        <p className="text-white text-sm">AB 5 - IBM Conference Hall</p>
                                    </div>

                                    <div className="flex items-center gap-2">
                                        <span className="text-lg">⏰</span>
                                        <p className="text-white text-sm">10:00 AM - 4:00 PM</p>
                                    </div>

                                    <div className="mt-4">
                                        <h3 className="text-white font-semibold mb-2 text-sm">Prerequisites</h3>
                                        <ul className="text-gray-300 space-y-1 text-sm">
                                            <li>• Basic computer knowledge</li>
                                            <li>• Laptop with min 8GB RAM</li>
                                            <li>• Virtual Machine software</li>
                                        </ul>
                                    </div>
                                    <a href="https://cyberonites.com">
                                    <button
                                        onMouseEnter={() => setIsHovered(true)}
                                        onMouseLeave={() => setIsHovered(false)}
                                        className={`w-full mt-4 py-2 px-4 rounded-lg font-semibold text-sm transition-all duration-500 ${isHovered
                                            ? 'bg-cyber-blue text-white'
                                            : 'glass-card text-cyber-blue hover:bg-cyber-blue hover:text-white'
                                            }`}
                                    >
                                        Register Now
                                    </button></a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <p className="text-center text-gray-400 text-sm mt-6">
                        Limited seats available. Register early to secure your spot!
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Card;