import { MapPin, Calendar } from "lucide-react"

interface TimelineExperience {
  id: number
  title: string
  company: string
  period: string
  location: string
  description: string
  achievements: string[]
}

const timelineExperiences: TimelineExperience[] = [
  {
    id: 1,
    title: "Senior Full Stack Developer",
    company: "Tech Innovations Inc.",
    period: "2022 - Present",
    location: "San Francisco, CA",
    description: "Leading the development of scalable web applications using React and Node.js",
    achievements: [
      "Architected microservices reducing load time by 40%",
      "Mentored 5+ junior developers",
      "Implemented CI/CD pipelines",
    ],
  },
  {
    id: 2,
    title: "Full Stack Developer",
    company: "Digital Solutions Ltd.",
    period: "2020 - 2022",
    location: "New York, NY",
    description: "Developed and maintained multiple client-facing applications",
    achievements: [
      "Delivered 10+ successful projects",
      "Improved API performance by 60%",
      "Led frontend modernization project",
    ],
  },
  {
    id: 3,
    title: "Frontend Developer",
    company: "Creative Web Agency",
    period: "2019 - 2020",
    location: "Austin, TX",
    description: "Built responsive and interactive web interfaces",
    achievements: [
      "Created design system with 50+ components",
      "Increased conversion rate by 25%",
      "Won best UI award",
    ],
  },
]

export default function ExperiencesTimeline() {
  return (
    <section className="py-20 px-6 md:px-12 lg:px-20 bg-slate-950">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="mb-16">
          <h2 className="text-sm md:text-base font-mono text-slate-400 mb-2">// Career Timeline</h2>
          <p className="text-slate-400">A chronological view of my professional experiences</p>
        </div>

        {/* Timeline Items */}
        <div className="space-y-8">
          {timelineExperiences.map((exp, index) => (
            <div key={exp.id} className="relative">
              {index !== timelineExperiences.length - 1 && (
                <div className="absolute left-6 top-16 w-0.5 h-20 bg-gradient-to-b from-cyan-500/50 to-slate-700" />
              )}

              {/* Timeline dot and card */}
              <div className="flex gap-6">
                {/* Timeline dot */}
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full border-2 border-cyan-500 bg-slate-900 flex items-center justify-center">
                    <div className="w-3 h-3 rounded-full bg-cyan-500" />
                  </div>
                </div>

                {/* Content card */}
                <div className="flex-1 border border-slate-700 rounded-lg p-6 bg-slate-900/50 hover:bg-slate-900/80 hover:border-cyan-500/50 transition-all duration-300">
                  <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-cyan-500/5 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />

                  <div className="relative z-10">
                    {/* Header */}
                    <div className="mb-4">
                      <h3 className="text-lg font-semibold text-cyan-400 mb-1">{exp.title}</h3>
                      <p className="text-slate-300 font-medium">{exp.company}</p>
                    </div>

                    {/* Period & Location */}
                    <div className="flex flex-wrap gap-4 text-sm text-slate-400 mb-4">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span>{exp.period}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        <span>{exp.location}</span>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-slate-400 text-sm leading-relaxed mb-4">{exp.description}</p>

                    {/* Achievements */}
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, idx) => (
                        <li key={idx} className="flex gap-2 text-sm text-slate-400">
                          <span className="text-cyan-400 font-bold">▸</span>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
