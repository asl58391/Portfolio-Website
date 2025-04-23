
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Moon, Sun, FileText, Mail } from "lucide-react";

export default function Portfolio() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={
      `p-8 max-w-5xl mx-auto space-y-14 transition-colors duration-500 ` +
      (darkMode
        ? "bg-slate-900 text-white"
        : "text-slate-900 bg-gradient-to-br from-purple-50 to-indigo-100")
    }>
      {/* Header */}
      <div className="flex justify-end">
        <Button onClick={() => setDarkMode(!darkMode)} variant="ghost">
          {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
        </Button>
      </div>

      {/* Hero Section */}
      <section className="text-center space-y-4">
        <h1 className="text-5xl font-extrabold text-indigo-700 dark:text-white">Anthony Lopez</h1>
        <p className="text-lg text-indigo-500 dark:text-indigo-300">
          Exploring the intersection of design, data, and meaningful impact.
        </p>
        <div className="flex justify-center gap-4 flex-wrap">
          <a href="https://www.linkedin.com/in/anthony-lopez-88a196254/" target="_blank" rel="noopener noreferrer">
            <Button className="bg-indigo-600 text-white hover:bg-indigo-700"><Linkedin className="w-5 h-5 mr-2" />LinkedIn</Button>
          </a>
          <a href="mailto:anthonyl9479@gmail.com">
            <Button variant="outline"><Mail className="w-5 h-5 mr-2" />Contact</Button>
          </a>
          <a href="/AnthonyLopez_Resume.pdf" target="_blank">
            <Button variant="outline"><FileText className="w-5 h-5 mr-2" />Resume</Button>
          </a>
        </div>
      </section>

      {/* Projects Section */}
      <section className="space-y-6">
        <h2 className="text-3xl font-bold text-indigo-600 dark:text-indigo-300">Featured Work</h2>
        <Card className="border-l-8 border-purple-400 bg-white dark:bg-slate-800">
          <CardContent className="p-6 space-y-2">
            <h3 className="text-2xl font-bold">SWAB Event Day Management System (EDMS)</h3>
            <p className="text-slate-700 dark:text-slate-200">
              A full-stack web and PWA solution designed to track 1500+ mentors and mentees on SWAB’s event day using Firebase, QR scanning, and Twilio for SMS notifications.
            </p>
          </CardContent>
        </Card>
        <Card className="border-l-8 border-green-400 bg-white dark:bg-slate-800">
          <CardContent className="p-6 space-y-2">
            <h3 className="text-2xl font-bold">LensCrafters Customer Database</h3>
            <p className="text-slate-700 dark:text-slate-200">
              Created a relational SQL database to uncover sales trends and enhance efficiency. Empowered LensCrafters with actionable customer insights.
            </p>
          </CardContent>
        </Card>
        <Card className="border-l-8 border-blue-400 bg-white dark:bg-slate-800">
          <CardContent className="p-6 space-y-2">
            <h3 className="text-2xl font-bold">Infectious Disease Data Story (California)</h3>
            <p className="text-slate-700 dark:text-slate-200">
              Used Python and Excel to explore disease and population trends across California. Developed Tableau visuals revealing the impact of urbanization on infection rates.
            </p>
          </CardContent>
        </Card>
      </section>

      {/* Footer */}
      <footer className="text-center pt-10 text-sm text-slate-500 dark:text-slate-400">
        <p>Made with 💡, 📊, and ☕</p>
      </footer>
    </div>
  );
}
