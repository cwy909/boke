import { ArrowRight, Calendar } from "lucide-react"
import Link from "next/link"

const articles = [
  {
    title: "深入理解 React Server Components",
    description:
      "探索 RSC 的工作原理、使用场景以及如何在 Next.js 14 中有效运用服务端组件提升应用性能。",
    date: "2024 年 1 月",
    category: "React",
    href: "#",
  },
  {
    title: "TypeScript 高级类型编程指南",
    description:
      "从条件类型到模板字面量类型，掌握 TypeScript 类型系统的高级特性，编写更安全的代码。",
    date: "2023 年 12 月",
    category: "TypeScript",
    href: "#",
  },
  {
    title: "前端性能优化实战手册",
    description:
      "从 Core Web Vitals 到代码分割，一份完整的前端性能优化策略与实践指南。",
    date: "2023 年 11 月",
    category: "性能优化",
    href: "#",
  },
  {
    title: "构建可扩展的组件库架构",
    description:
      "如何设计和构建一个企业级的 React 组件库，包含主题系统、测试策略和文档方案。",
    date: "2023 年 10 月",
    category: "架构",
    href: "#",
  },
]

export function ArticlesSection() {
  return (
    <section className="py-20 bg-card/30" id="articles">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-sm font-semibold tracking-wider text-primary uppercase">
            技术文章
          </h2>
          <Link
            href="#"
            className="text-sm text-muted-foreground hover:text-primary transition-colors inline-flex items-center gap-2"
          >
            查看全部
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {articles.map((article, index) => (
            <Link
              key={index}
              href={article.href}
              className="group block p-6 rounded-lg border border-border/50 bg-card/50 hover:bg-card hover:border-primary/30 transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded">
                  {article.category}
                </span>
                <span className="text-xs text-muted-foreground flex items-center gap-1">
                  <Calendar className="w-3 h-3" />
                  {article.date}
                </span>
              </div>
              <h3 className="text-foreground font-medium mb-2 group-hover:text-primary transition-colors">
                {article.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {article.description}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
