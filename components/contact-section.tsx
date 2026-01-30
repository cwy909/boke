import { ArrowUpRight, Copy } from "lucide-react"
import Link from "next/link"

const contactLinks = [
  { name: "Email", value: "hello@example.com", href: "mailto:hello@example.com" },
  { name: "GitHub", value: "@yourusername", href: "https://github.com" },
  { name: "Twitter", value: "@yourusername", href: "https://twitter.com" },
  { name: "LinkedIn", value: "in/yourusername", href: "https://linkedin.com" },
]

export function ContactSection() {
  return (
    <section className="py-20" id="contact">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-sm font-semibold tracking-wider text-primary uppercase mb-4">
              联系方式
            </h2>
            <p className="text-foreground text-2xl md:text-3xl font-medium leading-relaxed mb-4 text-balance">
              如果您想讨论项目合作或只是打个招呼，我随时欢迎交流。
            </p>
            <p className="text-muted-foreground">
              无论是技术问题、职业机会还是其他任何事情，都可以随时联系我。
            </p>
          </div>

          <div className="space-y-4">
            {contactLinks.map((link) => (
              <div
                key={link.name}
                className="group flex items-center justify-between p-4 rounded-lg border border-border/50 hover:border-primary/30 hover:bg-card/50 transition-all duration-300"
              >
                <div>
                  <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">
                    {link.name}
                  </p>
                  <p className="text-foreground font-medium">{link.value}</p>
                </div>
                <Link
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-muted-foreground hover:text-primary transition-colors"
                  aria-label={`访问 ${link.name}`}
                >
                  <ArrowUpRight className="w-5 h-5" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
