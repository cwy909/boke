import { Github, Linkedin, Mail, Twitter } from "lucide-react"
import Link from "next/link"

const socialLinks = [
  { icon: Github, href: "https://github.com", label: "GitHub" },
  { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
  { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
  { icon: Mail, href: "mailto:hello@example.com", label: "Email" },
]

export function HeroSection() {
  return (
    <section className="min-h-screen flex items-center pt-16" id="about">
      <div className="max-w-6xl mx-auto px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Column - Name & Navigation */}
          <div className="lg:sticky lg:top-24">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground mb-4">
              <span className="text-balance">前端工程师</span>
            </h1>
            <p className="text-xl text-primary font-medium mb-6">Frontend Engineer</p>
            <p className="text-muted-foreground leading-relaxed mb-8 max-w-md">
              专注于构建高质量、高性能的 Web 应用程序。
              <br />
              热衷于探索前沿技术与最佳实践。
            </p>

            {/* Quick Navigation */}
            <nav className="hidden lg:flex flex-col gap-3 mb-12">
              {[
                { name: "关于我", href: "#about" },
                { name: "工作经历", href: "#experience" },
                { name: "技术文章", href: "#articles" },
                { name: "开源项目", href: "#projects" },
              ].map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="group flex items-center gap-4 text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  <span className="w-8 h-px bg-muted-foreground/30 group-hover:w-16 group-hover:bg-primary transition-all duration-300" />
                  {item.name}
                </Link>
              ))}
            </nav>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => (
                <Link
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-muted-foreground hover:text-primary transition-colors duration-200"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </Link>
              ))}
            </div>
          </div>

          {/* Right Column - About Content */}
          <div className="space-y-6">
            <p className="text-foreground/90 leading-relaxed text-lg">
              我是一名热爱技术的前端开发者，专注于创建可访问、高性能的用户界面。
              我的工作处于设计与工程的交汇点，致力于构建不仅外观精美，
              而且在性能和可用性方面都经过精心优化的用户体验。
            </p>
            <p className="text-muted-foreground leading-relaxed">
              在过去的几年里，我有幸在不同环境中开发软件——从初创公司到大型企业。
              我专注于 <span className="text-foreground font-medium">React</span>、
              <span className="text-foreground font-medium">TypeScript</span> 和现代前端架构，
              并始终关注无障碍性和用户体验。
            </p>
            <p className="text-muted-foreground leading-relaxed">
              在工作之余，我喜欢通过博客分享技术见解，参与开源社区，
              探索新的技术栈，并不断扩展我的知识边界。
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
