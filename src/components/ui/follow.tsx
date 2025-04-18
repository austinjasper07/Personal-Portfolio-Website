import { Facebook, Github, Linkedin, Twitter } from 'lucide-react'

export default function Follow() {
  return (
    
    <div className="flex space-x-4">
      <a
        href="https://facebook.com/your-profile"
        target="_blank"
        rel="noopener noreferrer"
        className="w-10 h-10 rounded-full bg-gray-100 dark:bg-navy-700 flex items-center justify-center text-gray-600 dark:text-gray-300 hover:bg-primary hover:text-white dark:hover:bg-primary dark:hover:text-white transition-colors"
      >
        <Facebook className="h-5 w-5" />
      </a>
      <a
        href="https://x.com/aus_ugo"
        target="_blank"
        rel="noopener noreferrer"
        className="w-10 h-10 rounded-full bg-gray-100 dark:bg-navy-700 flex items-center justify-center text-gray-600 dark:text-gray-300 hover:bg-primary hover:text-white dark:hover:bg-primary dark:hover:text-white transition-colors"
      >
        <Twitter className="h-5 w-5" />
      </a>
      <a
        href="https://www.linkedin.com/in/ugochukwu-ugwu-424315263/"
        target="_blank"
        rel="noopener noreferrer"
        className="w-10 h-10 rounded-full bg-gray-100 dark:bg-navy-700 flex items-center justify-center text-gray-600 dark:text-gray-300 hover:bg-primary hover:text-white dark:hover:bg-primary dark:hover:text-white transition-colors"
      >
        <Linkedin className="h-5 w-5" />
      </a>
      <a
        href="https://github.com/austinjasper07"
        target="_blank"
        rel="noopener noreferrer"
        className="w-10 h-10 rounded-full bg-gray-100 dark:bg-navy-700 flex items-center justify-center text-gray-600 dark:text-gray-300 hover:bg-primary hover:text-white dark:hover:bg-primary dark:hover:text-white transition-colors"
      >
        <Github className="h-5 w-5" />
      </a>
    </div>

  )
}
