import { Briefcase, Calendar } from "lucide-react"
import SectionHeading from '../SectionHeading/SectionHeading'

interface Experience {
  id: number
  title: string
  company: string
  period: string
  description: string
  skills: string[]
}

const experiences: Experience[] = [
  {
    id: 1,
    title: "Full Stack Developer",
    company: "BK Systèmes Maroc",
    period: "2023 - Present",
    description:
      "Interfaces Windev pour intégration ERP-WMS, rapports SQL, scripts Python. Projet DIALOG: app dévolution (JAVA --> Laravel, React.js), Github, Figma, Chart.js",
    skills: ["React", "Laravel", "Java", "Python", "MySQL", "Windev"],
  },
  {
    id: 2,
    title: "Full Stack Developer",
    company: "Sothema",
    period: "2022 - 2022",
    description:
      "Maintenance, migration Office 365, sauvegard, accés sur Sage X3.",
    skills: ["Powershell","Office 365"],
  },
  {
    id: 3,
    title: "Full Stack Developer",
    company: "GPM",
    period: "2021 - 2021",
    description:
      "Developement complet d'un site web interactif et responsive orienté expérience utilisateur. \nSupport technique et maintenance logicielle.",
    skills: ["PHP", "JavaScript", "CSS", "HTML"],
  },
  
]

export default function ExperiencesSection() {
  return (
    <section id ="experiences" className="py-5 px-2   from-slate-950 via-slate-900 to-slate-950">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-16">
          <SectionHeading title="// Experiences" />
          <p className="text-slate-400 max-w-2xl py-5">
            My professional journey and roles that have shaped my expertise in full-stack development
          </p>
        </div>

        {/* Timeline */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {experiences.map((exp) => (
            <div
              key={exp.id}
              className="group relative border border-slate-700 rounded-lg p-6 bg-slate-900/50 hover:bg-slate-900/80 hover:border-cyan-500/50 transition-all duration-300"
            >
              <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-cyan-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Content */}
              <div className="relative z-10">
                {/* Icon & Timeline */}
                <div className="mb-4 flex items-start gap-3">
                  <div className="mt-1 p-2 rounded-md bg-gradient-to-br from-cyan-500/20 to-cyan-500/10 border border-cyan-500/30">
                    <Briefcase className="w-4 h-4 text-cyan-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-cyan-400 text-sm md:text-base leading-tight">{exp.title}</h3>
                  </div>
                </div>

                {/* Company */}
                <p className="text-slate-300 font-medium text-sm mb-2">{exp.company}</p>

                {/* Period */}
                <div className="flex items-center gap-2 text-xs text-slate-400 mb-4">
                  <Calendar className="w-3 h-3" />
                  <span>{exp.period}</span>
                </div>

                {/* Description */}
                <p className="text-slate-400 text-sm leading-relaxed mb-4">{exp.description}</p>

                {/* Skills Tags */}
                <div className="flex flex-wrap gap-2">
                  {exp.skills.slice(0, 3).map((skill) => (
                    <span
                      key={skill}
                      className="px-2 py-1 text-xs rounded border border-cyan-500/30 bg-cyan-500/10 text-cyan-300"
                    >
                      {skill}
                    </span>
                  ))}
                  {exp.skills.length > 3 && (
                    <span className="px-2 py-1 text-xs rounded border border-slate-600 bg-slate-800/50 text-slate-400">
                      +{exp.skills.length - 3} more
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
