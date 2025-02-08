export interface Project {
    path: string
    image: string
    additionalImages?: string[]
    title: string
    mainColor: string
    stack: string[]
    live: string
    github: string
    dashboard?: string
    description: string
}

export const Projects: Project[] = [
    {
        path: 'jobseeker',
        image: '/images/projects/jobseeker.png',
        title: 'Jobseeker',
        mainColor: '#5894A0',
        stack: ['Next.js', 'TailwindCSS', 'TypeScript', 'Framer Motion', 'three.js', 'React Three Fiber', 'React Three Drei', 'React Three Rapier', 'Prisma', 'PostgreSQL'],
        live: 'https://seekerapp.xyz/',
        github: 'https://github.com/karoljanowski/portfolio',
        description: 'An application for managing the recruitment process. It allows users to save job offers, create notes, track application statuses on a kanban board, upload files, and monitor statistics. It also features an AI-powered job offer data scraper.'
    },
    {
        path: 'pizza',
        image: '/projects/pizza.png',
        additionalImages: ['/projects/pizza2.png', '/projects/pizza3.png', '/projects/pizza4.png'],
        title: 'Pizza & Pasta',
        mainColor: '#A1343B',
        stack: ['Next.js', 'Pusher', 'Prisma', 'Zod', 'shadcn/ui', 'TailwindCSS', 'Zustand', 'PostgreSQL', 'TypeScript'],
        live: 'https://pasta-olive.vercel.app/',
        dashboard: 'https://pasta-olive.vercel.app/login',
        github: 'https://github.com/karoljanowski/pasta',
        description: 'A personal project built to learn the fundamentals of Next.js. The app enables users to order food from restaurants, manage their orders, and allows restaurant owners to update menus. It offers an end-to-end solution for food ordering and management.'
    },
    {
        path: 'apartments',
        image: '/projects/apartments.png',
        additionalImages: ['/projects/apartments2.png', '/projects/apartments3.png', '/projects/apartments4.png'],
        title: 'React Apartments',
        mainColor: '#979173',
        stack: ['React', 'TailwindCSS', 'JavaScript', 'Framer Motion', 'React Router', 'Supabase'],
        live: 'https://apartments-phi.vercel.app/',
        github: 'https://github.com/karoljanowski/apartments',
        dashboard: 'https://apartments-phi.vercel.app/admin',
        description: 'A website that features apartment listings presented in a clear and user-friendly landing page format. It allows users to book reservations and includes a dashboard for property owners to manage their bookings.'
    },
] 