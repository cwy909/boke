export function Footer() {
  return (
    <footer className="py-12 border-t border-border/50">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} 前端工程师的知识库. 保留所有权利.
          </p>
          <p className="text-sm text-muted-foreground">
            使用 <span className="text-primary">Next.js</span> 和{" "}
            <span className="text-primary">TailwindCSS</span> 构建
          </p>
        </div>
      </div>
    </footer>
  )
}
