import { ArrowUpRight } from "lucide-react"
import Link from "next/link"

const experiences = [
  {
    period: "2023 — 至今",
    title: "高级前端工程师",
    company: "某科技公司",
    companyUrl: "#",
    description:
      "负责构建和维护核心产品的前端架构。与跨职能团队紧密协作，推动设计系统建设和性能优化，确保产品达到最佳用户体验。",
    technologies: ["React", "TypeScript", "Next.js", "TailwindCSS"],
  },
  {
    period: "2021 — 2023",
    title: "前端开发工程师",
    company: "互联网公司",
    companyUrl: "#",
    description:
      "参与多个 B2B 产品的开发，负责组件库建设、代码规范制定。主导前端工程化建设，提升团队开发效率。",
    technologies: ["Vue.js", "React", "Node.js", "Webpack"],
  },
  {
    period: "2019 — 2021",
    title: "初级开发工程师",
    company: "创业公司",
    companyUrl: "#",
    description:
      "从零到一参与产品开发，快速成长为独当一面的开发者。负责前端功能开发和 Bug 修复，积累了丰富的实战经验。",
    technologies: ["JavaScript", "CSS3", "jQuery", "Bootstrap"],
  },
]

export function ExperienceSection() {
  return (
    <section className="py-20" id="experience">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <h2 className="text-sm font-semibold tracking-wider text-primary uppercase mb-12">
          工作经历
        </h2>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="group grid md:grid-cols-[200px_1fr] gap-4 md:gap-8 p-6 -mx-6 rounded-lg hover:bg-card/50 transition-colors duration-300"
            >
              <div className="text-sm text-muted-foreground font-mono">
                {exp.period}
              </div>
              <div>
                <h3 className="text-foreground font-medium mb-1 flex items-center gap-2">
                  {exp.title} ·{" "}
                  <Link
                    href={exp.companyUrl}
                    className="text-foreground hover:text-primary transition-colors inline-flex items-center gap-1"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {exp.company}
                    <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {exp.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs font-medium text-primary bg-primary/10 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
