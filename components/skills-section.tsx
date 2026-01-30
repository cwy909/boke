const skillCategories = [
  {
    title: "前端框架",
    skills: ["React", "Vue.js", "Next.js", "Nuxt.js"],
  },
  {
    title: "编程语言",
    skills: ["TypeScript", "JavaScript", "HTML5", "CSS3"],
  },
  {
    title: "工具 & 技术",
    skills: ["Git", "Webpack", "Vite", "Docker"],
  },
  {
    title: "UI & 样式",
    skills: ["TailwindCSS", "Sass", "Styled Components", "Framer Motion"],
  },
]

export function SkillsSection() {
  return (
    <section className="py-20 bg-card/30">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <h2 className="text-sm font-semibold tracking-wider text-primary uppercase mb-12">
          技术栈
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index}>
              <h3 className="text-foreground font-medium mb-4 text-sm">
                {category.title}
              </h3>
              <ul className="space-y-2">
                {category.skills.map((skill) => (
                  <li
                    key={skill}
                    className="text-muted-foreground text-sm hover:text-primary transition-colors cursor-default"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
