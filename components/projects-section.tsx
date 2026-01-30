import { ArrowUpRight, Github, Star } from "lucide-react"
import Link from "next/link"

const projects = [
  {
    name: "React Component Library",
    description: "一套高质量的 React 组件库，支持深色模式、完整的 TypeScript 类型定义和无障碍功能。",
    stars: 1200,
    href: "#",
    github: "#",
    technologies: ["React", "TypeScript", "Storybook"],
  },
  {
    name: "Next.js Blog Template",
    description: "基于 Next.js 14 的高性能博客模板，支持 MDX、SEO 优化和自动化部署。",
    stars: 860,
    href: "#",
    github: "#",
    technologies: ["Next.js", "MDX", "TailwindCSS"],
  },
  {
    name: "VS Code Extension",
    description: "一款提升开发效率的 VS Code 插件，提供代码片段、快捷命令和智能提示功能。",
    stars: 540,
    href: "#",
    github: "#",
    technologies: ["TypeScript", "VS Code API"],
  },
]

export function ProjectsSection() {
  return (
    <section className="py-20" id="projects">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <h2 className="text-sm font-semibold tracking-wider text-primary uppercase mb-12">
          开源项目
        </h2>

        <div className="space-y-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group p-6 rounded-lg border border-border/50 hover:border-primary/30 hover:bg-card/50 transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <Link
                      href={project.href}
                      className="text-foreground font-medium hover:text-primary transition-colors inline-flex items-center gap-1"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {project.name}
                      <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </Link>
                    <div className="flex items-center gap-1 text-muted-foreground text-sm">
                      <Star className="w-3.5 h-3.5 fill-current" />
                      {project.stars}
                    </div>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-xs font-medium text-muted-foreground bg-muted/50 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <Link
                  href={project.github}
                  className="p-2 text-muted-foreground hover:text-primary transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${project.name} GitHub`}
                >
                  <Github className="w-5 h-5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
