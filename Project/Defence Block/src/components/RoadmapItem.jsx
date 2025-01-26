const RoadmapItem = ({ icon, title, description }) => (
  <div className="roadmap-item relative flex gap-3 pb-4">
    <div className="absolute left-0 h-full">
      <div className="timeline-line h-full ml-4"></div>
    </div>
    <div className="w-8 h-8 rounded-full bg-cyber-blue flex items-center justify-center z-10">
      {icon}
    </div>
    <div className="glass-card flex-1 p-3 rounded-xl transition-all duration-300">
      <h3 className="text-lg font-semibold text-white mb-1">{title}</h3>
      <p className="text-gray-300 text-sm">{description}</p>
    </div>
  </div>
)

export default RoadmapItem;