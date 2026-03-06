import { Terminal } from "lucide-react";

const Footer = () => (
  <footer className="py-8 px-6 border-t border-border">
    <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
      <div className="flex items-center gap-2 text-muted-foreground font-mono text-sm">
        <Terminal className="w-4 h-4 text-primary" />
        <span>© 2026 Pratik Nannajkar. All rights reserved.</span>
      </div>
      <p className="text-xs text-muted-foreground font-mono">
        Built with React, TypeScript & ❤️
      </p>
    </div>
  </footer>
);

export default Footer;
