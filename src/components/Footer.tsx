import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => (
  <footer className="border-t border-border py-10 px-6">
    <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
      <p className="font-mono text-sm text-muted-foreground">
        &lt;QA /&gt; · Marillia Dantas · {new Date().getFullYear()}
      </p>
      <div className="flex gap-5">
        {[
          { icon: Linkedin, href: "https://www.linkedin.com/in/marilliadantas", label: "LinkedIn" },
          { icon: Github, href: "https://github.com/marilliadantas", label: "GitHub" },
          { icon: Mail, href: "mailto:marillia.dantas@hotmail.com", label: "Email" },
        ].map(({ icon: Icon, href, label }) => (
          <a key={label} href={href} aria-label={label} className="text-muted-foreground hover:text-primary transition-colors">
            <Icon size={18} />
          </a>
        ))}
      </div>
    </div>
  </footer>
);

export default Footer;
